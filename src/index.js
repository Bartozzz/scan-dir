// @flow
import fs from "fs";
import path from "path";

type callback = (path: string, filename: string) => void;

/**
 * Load files from a `directory` and execute a `callback` for each.
 *
 * @param   {string}    dir         Directory to load files from
 * @param   {callback}  cb          Callback to execute on each file
 * @param   {bool}      recursive   Whether parse directories recursively
 * @return  {void}
 */
function load(dir: string, cb: callback, recursive: boolean = false) {
  fs.readdirSync(path.resolve(process.cwd(), dir))
    .filter(file => !/(^|\/)\.[^/.]/g.test(file))
    .forEach(file => {
      const filePath = path.join(dir, file);
      const fileStat = fs.statSync(filePath);

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
function loadAll(dir: string, cb: callback): void {
  load(dir, cb, true);
}

export default load;
export { loadAll };
