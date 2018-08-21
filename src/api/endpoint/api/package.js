// @flow

import _ from 'lodash';
import {allow} from '../../middleware';
import {DIST_TAGS, convertDistRemoteToLocalTarballUrls, getVersion, ErrorCode} from '../../../lib/utils';
import {HEADERS} from '../../../lib/constants';
import type {Router} from 'express';
import type {Config} from '@verdaccio/types';
import type {IAuth, $ResponseExtend, $RequestExtend, $NextFunctionVer, IStorageHandler} from '../../../../types';
import cacache from 'cacache/en';
import mkdirp from 'mkdirp';
import { PassThrough } from 'stream';

export default function(route: Router, auth: IAuth, storage: IStorageHandler, config: Config) {
  const can = allow(auth);
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
    const tarballCachePath = '/verdaccio/.cacache/tarballs/';
    if (!fs.existsSync(tarballCachePath)) mkdirp.sync(tarballCachePath); 
    
    


    cacache.get.info(`${tarballCachePath}${req.params.package}`, req.params.filename).then((data) => {
      if (data) {
        console.log('TARBALL IN CACHE!');
        cacache.get.stream(`${tarballCachePath}${req.params.package}`, req.params.filename).pipe(res);
      } else {
        console.log(`GETTING FILE ${req.params.package} @ ${req.params.filename}`);
        const stream = storage.getTarball(req.params.package, req.params.filename);

        const dup = stream.pipe(new PassThrough());
        stream.pipe(new PassThrough()).pipe(
          cacache.put.stream(`${tarballCachePath}${req.params.package}`, req.params.filename)
        );

        dup.on('content-length', function (content) {
          res.header('Content-Length', content);
        });
        dup.on('error', function (err) {
          return res.report_error(err);
        });  
        res.header('Content-Type', _constants.HEADERS.OCTET_STREAM);        
        dup.pipe(res);
      }
    });








    // const stream = storage.getTarball(req.params.package, req.params.filename);

    // stream.on('content-length', function(content) {
    //   res.header('Content-Length', content);
    // });
    // stream.on('error', function(err) {
    //   return res.report_error(err);
    // });
    // res.header('Content-Type', HEADERS.OCTET_STREAM);
    // stream.pipe(res);
  });
}
