// @flow

import fs from "fs";
import path from "path";

/**
 * Load files from a `directory` and execute a `callback` for each.
 *
 * @param   {string}    directory   directory to load files from
 * @param   {function}  callback    callback to execute on each file
 * @return  {void}
 */
function call(directory: string, callback: (string, string) => any): void {
    fs.readdirSync(path.resolve(process.cwd(), directory))
        .filter((file) => file.indexOf(".") !== 0)
        .forEach((file) => callback(path.join(directory, file), file));
}

export default call;
