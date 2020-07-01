// @flow
import fs from "fs";
import path from "path";

type Callback = (fpath: string, fname: string) => any;

/**
 * Searches for files in `directory` and execute a `callback` for each.
 *
 * @param   {string}    directory   Directory to search for files from
 * @param   {Callback}  callback    Callback to execute on each found file
 * @param   {boolean}   deep        Whether parse directories recursively
 * @return  {void}
 */
export function scan(
  directory: string,
  callback: Callback,
  deep: boolean = false
) {
  const normalizedPath = path.normalize(directory);

  fs.readdir(path.resolve(process.cwd(), normalizedPath), (err, files) => {
    if (err) {
      // NOTE: maybe we should handle err in a different way?
      return;
    }

    files
      .filter((fname) => !/(^|\/)\.[^/.]/g.test(fname))
      .forEach((fname) => {
        const fpath = path.join(normalizedPath, fname);

        // NOTE: fs.lstat would be better if we don't want to ignore symlinks
        fs.stat(fpath, (err, fstat) => {
          // 1. If we search files recursively, we should ignore insecure symlinks
          //    that point to a parent directory to prevent overflow.
          // 2. If a developers uses this module with user-input, we probably want
          //    to ignore the symlinks too.
          if (err || fstat.isSymbolicLink()) {
            // NOTE: maybe we should handle err in a different way?
            return;
          }

          if (fstat.isDirectory()) {
            // Parses directories recursively if enabled:
            if (deep) scan(fpath, callback, deep);
          } else if (fpath.indexOf(".") !== 0) {
            // Ignores files without extension:
            callback(fpath, fname);
          }
        });
      });
  });
}

/**
 * @param   {string}    directory   Directory to search for files from
 * @param   {Callback}  callback    Callback to execute on each found file
 * @return  {void}
 */
export function scanRecursively(directory: string, callback: Callback) {
  scan(directory, callback, true);
}

export default scan;
