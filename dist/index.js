"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadAll=loadAll,exports.default=void 0;var _fs=_interopRequireDefault(require("fs")),_path=_interopRequireDefault(require("path"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function load(a,b,c=!1){const d=_path.default.normalize(a);_fs.default.readdir(_path.default.resolve(process.cwd(),d),(a,e)=>{a||e.filter(a=>!/(^|\/)\.[^/.]/g.test(a)).forEach(a=>{const e=_path.default.join(d,a);_fs.default.stat(e,(d,f)=>d||f.isSymbolicLink()?void 0:f.isDirectory()?c&&load(e,b,c):0===e.indexOf(".")?void 0:b(e,a))})})}function loadAll(a,b){load(a,b,!0)}var _default=load;exports.default=_default;