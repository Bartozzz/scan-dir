import fs from "fs";
import path from "path";

/**
 * Loads files from a `directory` and executes a `callback` for each.
 *
 * @param   {string}    directory   - directory to load files from
 * @param   {function}  callback    - callback to execute on each file
 */
export default (directory, callback) => {
    fs.readdirSync(path.resolve(process.cwd(), directory))
        .filter((file) => file.indexOf(".") !== 0)
        .forEach((file) => callback(path.join(directory, file), file));
};
