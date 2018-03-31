"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadAll = undefined;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Load files from a `directory` and execute a `callback` for each.
 *
 * @param   {string}    dir         Directory to load files from
 * @param   {Function}  cb          Callback to execute on each file
 * @param   {bool}      recursive   Whether parse directories recursively
 * @return  {void}
 */
function load(dir, cb) {
  var recursive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  _fs2.default.readdirSync(_path2.default.resolve(process.cwd(), dir)).filter(function (file) {
    return !/(^|\/)\.[^/.]/g.test(file);
  }).forEach(function (file) {
    var filePath = _path2.default.join(dir, file);
    var fileStat = _fs2.default.statSync(filePath);

    // Parses directories recursively if enabled
    if (fileStat.isDirectory()) {
      return recursive && load(filePath, cb, recursive);
    }

    // Executes callback for files with extension
    if (filePath.indexOf(".") !== 0) {
      return cb(filePath, file);
    }
  });
}

/**
 * @param   {string}    dir         Directory to load files from
 * @param   {Function}  cb          Callback to execute on each file
 * @return  {void}
 */
function loadAll(dir, cb) {
  load(dir, cb, true);
}

exports.default = load;
exports.loadAll = loadAll;