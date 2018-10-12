"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadAll = loadAll;
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Load files from a `directory` and execute a `callback` for each.
 *
 * @param   {string}    dir         Directory to load files from
 * @param   {callback}  cb          Callback to execute on each file
 * @param   {bool}      recursive   Whether parse directories recursively
 * @return  {void}
 */
function load(dir, cb, recursive = false) {
  _fs.default.readdirSync(_path.default.resolve(process.cwd(), dir)).filter(file => !/(^|\/)\.[^/.]/g.test(file)).forEach(file => {
    const filePath = _path.default.join(dir, file);

    const fileStat = _fs.default.statSync(filePath); // Parses directories recursively if enabled


    if (fileStat.isDirectory()) {
      return recursive && load(filePath, cb, recursive);
    } // Executes callback for files with extension


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

var _default = load;
exports.default = _default;