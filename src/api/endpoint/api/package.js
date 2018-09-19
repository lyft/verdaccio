// @flow

import _ from 'lodash';
import {allow} from '../../middleware';
import {DIST_TAGS, convertDistRemoteToLocalTarballUrls, getVersion, ErrorCode} from '../../../lib/utils';
import {HEADERS} from '../../../lib/constants';
import type {Router} from 'express';
import type {Config} from '@verdaccio/types';
import type {IAuth, $ResponseExtend, $RequestExtend, $NextFunctionVer, IStorageHandler} from '../../../../types';

const cacache = require('cacache/en');
const PassThrough = require('stream').PassThrough;

export default function(route: Router, auth: IAuth, storage: IStorageHandler, config: Config) {
  const can = allow(auth);

  route.get('/metadata/:package', can('access'), function(req: $RequestExtend, res: $ResponseExtend, next: $NextFunctionVer) {
    const getPackageMetaCallback = function(err, metadata) {
      if (err) {
        res.send(err);
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
    const getPackageMetaCallback = function(err, metadata, calledFromStorage) {
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

      // If version not found and callback was from getPackage not getPackageFromStorage
      if (!calledFromStorage) {
        versionNotFound();
      }
      return next(ErrorCode.getNotFound(`version not found: ${req.params.version}`));
    };

    const versionNotFound = function() {
      storage.getPackageFromStorage({
        name: req.params.package,
        req,
        callback: getPackageMetaCallback,
      });
    }

    storage.getPackage({
      name: req.params.package,
      req,
      callback: getPackageMetaCallback,
    });
  });

  route.get('/:package/-/:filename', can('access'), function(req: $RequestExtend, res: $ResponseExtend) {
    const packageCachePath = config.cache.package;

    cacache.get.info(`${packageCachePath}${req.params.package}`, req.params.filename).then((data) => {
      let tarball;
      if (data) {
        console.debug(`File from cache: ${req.params.filename}`);
        tarball = cacache.get.stream(`${packageCachePath}${req.params.package}`, req.params.filename);
      } else {
        console.debug(`File from storage: ${req.params.filename}`);
        const stream = storage.getTarball(req.params.package, req.params.filename);
        tarball = stream.pipe(new PassThrough());
        stream.pipe(new PassThrough()).pipe(
          cacache.put.stream(`${packageCachePath}${req.params.package}`, req.params.filename)
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
