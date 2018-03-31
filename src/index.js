// @flow
import fs from "fs";
import path from "path";

/**
 * Load files from a `directory` and execute a `callback` for each.
 *
 * @param   {string}    directory   Directory to load files from
 * @param   {Function}  callback    Callback to execute on each file
 * @param   {bool}      recursive   Whether parse directories recursively
 * @return  {void}
 */
function callDir(
    directory: string,
    callback: (path: string, filename: string) => void,
    recursive: bool = false
): void {
    fs.readdirSync(path.resolve(process.cwd(), directory))
        .filter((file: string) => !(/(^|\/)\.[^\/\.]/g).test(file))
        .forEach((file: string) => {
            const filePath = path.join(directory, file);
            const fileStat = fs.statSync(filePath);

            // Parses directories recursively if enabled
            if (fileStat.isDirectory() && recursive) {
                return callDir(filePath, callback, recursive);
            }

            // Execute callback onle for files with an extension
            if (filePath.indexOf(".") !== 0) {
                return callback(filePath, file);
            }
        });
}

export default callDir;
