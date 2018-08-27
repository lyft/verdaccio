// @flow

import _ from 'lodash';
import {allow} from '../../middleware';
import {DIST_TAGS, convertDistRemoteToLocalTarballUrls, getVersion, ErrorCode} from '../../../lib/utils';
import {HEADERS} from '../../../lib/constants';
import type {Router} from 'express';
import type {Config} from '@verdaccio/types';
import type {IAuth, $ResponseExtend, $RequestExtend, $NextFunctionVer, IStorageHandler} from '../../../../types';

const cacache = require('cacache/en');
const mkdirp = require('mkdirp');
const PassThrough = require('stream').PassThrough;

export default function(route: Router, auth: IAuth, storage: IStorageHandler, config: Config) {
  const can = allow(auth);

  route.get('/metadata/:package', can('access'), function(req: $RequestExtend, res: $ResponseExtend, next: $NextFunctionVer) {
    const getPackageMetaCallback = function(err, metadata) {
      if (err) {
        return err;
      }
      res.send(metadata);
    };

    storage.getPackageFromStorage({
      name: req.params.package,
      req,
      callback: getPackageMetaCallback,
    });
  });

  // TODO: anonymous user?
  route.get('/:package/:version?', can('access'), function(req: $RequestExtend, res: $ResponseExtend, next: $NextFunctionVer) {
    const getPackageMetaCallback = function(err, metadata) {
      if (err) {
        return next(err);
      }
      metadata = convertDistRemoteToLocalTarballUrls(metadata, req, config.url_prefix);

      let queryVersion = req.params.version;
      if (_.isNil(queryVersion)) {
        return next(metadata);
      }

      let version = getVersion(metadata, queryVersion);
      if (_.isNil(version) === false) {
        return next(version);
      }

      if (_.isNil(metadata[DIST_TAGS]) === false) {
        if (_.isNil(metadata[DIST_TAGS][queryVersion]) === false) {
          queryVersion = metadata[DIST_TAGS][queryVersion];
          version = getVersion(metadata, queryVersion);
          if (_.isNil(version) === false) {
            return next(version);
          }
        }
      }
      return next(ErrorCode.getNotFound(`version not found: ${req.params.version}`));
    };

    storage.getPackage({
      name: req.params.package,
      req,
      callback: getPackageMetaCallback,
    });
  });

  route.get('/:package/-/:filename', can('access'), function(req: $RequestExtend, res: $ResponseExtend) {
    const tarballCachePath = config.cache.tarball;

    cacache.get.info(`${tarballCachePath}${req.params.package}`, req.params.filename).then((data) => {
      let tarball;
      if (data) {
        console.log(`File from cache: ${req.params.filename}`);
        tarball = cacache.get.stream(`${tarballCachePath}${req.params.package}`, req.params.filename);
      } else {
        console.log(`File from storage: ${req.params.filename}`);
        const stream = storage.getTarball(req.params.package, req.params.filename);
        tarball = stream.pipe(new PassThrough());
        stream.pipe(new PassThrough()).pipe(
          cacache.put.stream(`${tarballCachePath}${req.params.package}`, req.params.filename)
        );
      }

      tarball.on('content-length', function(content) {
        res.header('Content-Length', content);
      });
      tarball.on('error', function(err) {
        return res.report_error(err);
      });
      res.header('Content-Type', HEADERS.OCTET_STREAM);        
      tarball.pipe(res);      
    });
  });
}
