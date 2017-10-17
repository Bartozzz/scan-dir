"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Load files from a `directory` and execute a `callback` for each.
 *
 * @param   {string}    directory   Directory to load files from
 * @param   {function}  callback    Callback to execute on each file
 * @return  {void}
 */
function callDir(directory, callback) {
  _fs2.default.readdirSync(_path2.default.resolve(process.cwd(), directory)).filter(function (file) {
    return file.indexOf(".") !== 0;
  }).forEach(function (file) {
    return callback(_path2.default.join(directory, file), file);
  });
}

exports.default = callDir;
module.exports = exports["default"];