<div align="center">
  <h1>scan-dir</h1>

![Tests](https://github.com/Bartozzz/scan-dir/workflows/Tests/badge.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/Bartozzz/scan-dir/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Bartozzz/scan-dir?targetFile=package.json)
[![npm package size](https://img.badgesize.io/Bartozzz/scan-dir/master/dist/index.js?compression=gzip)](https://www.npmjs.com/package/scan-dir)
[![npm version](https://img.shields.io/npm/v/@bartozzz/scan-dir.svg)](https://www.npmjs.com/package/@bartozzz/scan-dir)
[![npm dependency Status](https://david-dm.org/Bartozzz/@bartozzz/scan-dir.svg)](https://www.npmjs.com/package/@bartozzz/scan-dir)
[![npm downloads](https://img.shields.io/npm/dt/@bartozzz/scan-dir.svg)](https://www.npmjs.com/package/@bartozzz/scan-dir)

<br>

**scan-dir** searches for files in a directory and executes a callback for each. All symlinks, dotfiles and files without extension are ignored. Supports deep-loading. It can be used as an autoloader for JavaScript.

</div>

## Installation

```bash
$ npm install @bartozzz/scan-dir
```

## Usage

```javascript
import scan, { scanRecursively } from "scan-dir";

scan(directory, callback);
scanRecursively(directory, callback);
```

### Examples

#### Basic loading

```javascript
import path from "path";
import scan, from "scan-dir";

const models = path.resolve(__dirname, "./path/to/models");
const routes = path.resolve(__dirname, "./path/to/routes");

scan(models, (fpath, fname) => {
  console.log(`Found file: ${fname} (absolute path: ${fpath})`);
});

// You can initialize modules from a directory easily:
scan(models, (fpath) => require(fpath)(some, variables, ...here));
scan(routes, (fpath) => require(fpath)(some, variables, ...here));
```

#### Deep loading

```javascript
import path from "path";
import scan, { scanRecursively } from "scan-dir";

const modules = path.resolve(__dirname, "../node_modules");

// Those two calls are equivalents:
scan(modules, (fpath, fname) => /* … */, true);
scanRecursively(modules, (fpath, fname) => /* … */);
```

## Tests

```bash
$ npm test
```
