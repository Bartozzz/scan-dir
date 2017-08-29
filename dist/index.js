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
 * Loads files from a `directory` and executes a `callback` for each.
 *
 * @param   {string}    directory   - directory to load files from
 * @param   {function}  callback    - callback to execute on each file
 */
exports.default = function (directory, callback) {
  _fs2.default.readdirSync(_path2.default.resolve(process.cwd(), directory)).filter(function (file) {
    return file.indexOf(".") !== 0;
  }).forEach(function (file) {
    return callback(_path2.default.join(directory, file), file);
  });
};

module.exports = exports["default"];