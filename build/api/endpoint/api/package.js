'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (route, auth, storage, config) {
  const can = (0, _middleware.allow)(auth);
  // TODO: anonymous user?
  route.get('/:package/:version?', can('access'), function (req, res, next) {
    const getPackageMetaCallback = function (err, metadata) {
      if (err) {
        return next(err);
      }
      metadata = (0, _utils.convertDistRemoteToLocalTarballUrls)(metadata, req, config.url_prefix);

      let queryVersion = req.params.version;
      if (_lodash2.default.isNil(queryVersion)) {
        return next(metadata);
      }

      let version = (0, _utils.getVersion)(metadata, queryVersion);
      if (_lodash2.default.isNil(version) === false) {
        return next(version);
      }

      if (_lodash2.default.isNil(metadata[_utils.DIST_TAGS]) === false) {
        if (_lodash2.default.isNil(metadata[_utils.DIST_TAGS][queryVersion]) === false) {
          queryVersion = metadata[_utils.DIST_TAGS][queryVersion];
          version = (0, _utils.getVersion)(metadata, queryVersion);
          if (_lodash2.default.isNil(version) === false) {
            return next(version);
          }
        }
      }
      return next(_utils.ErrorCode.getNotFound(`version not found: ${req.params.version}`));
    };

    storage.getPackage({
      name: req.params.package,
      req,
      callback: getPackageMetaCallback
    });
  });

  route.get('/:package/-/:filename', can('access'), function (req, res) {
    const tarballCachePath = config.cache.tarball;

    _en2.default.get.info(`${tarballCachePath}${req.params.package}`, req.params.filename).then(data => {
      let tarball;
      if (data) {
        console.log('From cache...');
        tarball = _en2.default.get.stream(`${tarballCachePath}${req.params.package}`, req.params.filename);
      } else {
        console.log('From storage...');
        const stream = storage.getTarball(req.params.package, req.params.filename);
        tarball = stream.pipe(new _stream.PassThrough());
        stream.pipe(new _stream.PassThrough()).pipe(_en2.default.put.stream(`${tarballCachePath}${req.params.package}`, req.params.filename));
      }

      tarball.on('content-length', function (content) {
        res.header('Content-Length', content);
      });
      tarbal.on('error', function (err) {
        return res.report_error(err);
      });
      res.header('Content-Type', _constants.HEADERS.OCTET_STREAM);
      tarball.pipe(res);
    });
  });
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _middleware = require('../../middleware');

var _utils = require('../../../lib/utils');

var _constants = require('../../../lib/constants');

var _en = require('cacache/en');

var _en2 = _interopRequireDefault(_en);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _stream = require('stream');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }