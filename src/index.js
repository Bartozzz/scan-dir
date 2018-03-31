// @flow
import fs from "fs";
import path from "path";

type callback = (path: string, filename: string) => void;

/**
 * Load files from a `directory` and execute a `callback` for each.
 *
 * @param   {string}    dir         Directory to load files from
 * @param   {Function}  callback    Callback to execute on each file
 * @param   {bool}      recursive   Whether parse directories recursively
 * @return  {void}
 */
function load(dir: string, callback: callback, recursive: bool = false): void {
    fs.readdirSync(path.resolve(process.cwd(), dir))
        .filter((file: string) => !(/(^|\/)\.[^\/\.]/g).test(file))
        .forEach((file: string) => {
            const filePath = path.join(dir, file);
            const fileStat = fs.statSync(filePath);

            // Parses directories recursively if enabled
            if (fileStat.isDirectory()) {
                return recursive && load(filePath, callback, recursive);
            }

            // Executes callback for files with extension
            if (filePath.indexOf(".") !== 0) {
                return callback(filePath, file);
            }
        });
}

export default load;
