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
 * @param   {Function}  callback    Callback to execute on each file
 * @param   {bool}      recursive   Whether parse directories recursively
 * @return  {void}
 */
function callDir(directory, callback) {
    var recursive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _fs2.default.readdirSync(_path2.default.resolve(process.cwd(), directory)).filter(function (file) {
        return !/(^|\/)\.[^\/\.]/g.test(file);
    }).forEach(function (file) {
        var filePath = _path2.default.join(directory, file);
        var fileStat = _fs2.default.statSync(filePath);

        // Parses directories recursively if enabled
        if (fileStat.isDirectory() && recursive) {
            return callDir(filePath, callback, recursive);
        }

        // Execute callback onyl for files with an extension
        if (filePath.indexOf(".") !== 0) {
            return callback(filePath, file);
        }
    });
}

exports.default = callDir;
module.exports = exports["default"];