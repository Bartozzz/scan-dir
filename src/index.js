// @flow
import fs from "fs";
import path from "path";

/**
 * Load files from a `directory` and execute a `callback` for each.
 *
 * @param   {string}    directory   Directory to load files from
 * @param   {function}  callback    Callback to execute on each file
 * @return  {void}
 */
function callDir(directory: string, callback: (string, string) => void): void {
    fs.readdirSync(path.resolve(process.cwd(), directory))
        .filter((file: string) => file.indexOf(".") !== 0)
        .forEach((file: string) => callback(path.join(directory, file), file));
}

export default callDir;
