<div align="center">
  <h1>call-dir</h1>

[![Default CI/CD](https://github.com/Bartozzz/call-dir/workflows/Default%20CI/CD/badge.svg)](https://github.com/Bartozzz/call-dir/actions)
[![Known Vulnerabilities](https://snyk.io/test/github/Bartozzz/call-dir/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Bartozzz/call-dir?targetFile=package.json)
[![npm package size](https://img.badgesize.io/Bartozzz/call-dir/master/dist/index.js?compression=gzip)](https://www.npmjs.com/package/call-dir)
[![npm version](https://img.shields.io/npm/v/call-dir.svg)](https://www.npmjs.com/package/call-dir)
[![npm dependency Status](https://david-dm.org/Bartozzz/call-dir.svg)](https://www.npmjs.com/package/call-dir)
[![npm downloads](https://img.shields.io/npm/dt/call-dir.svg)](https://www.npmjs.com/package/call-dir)

<br>

**call-dir** searches for files in a directory and executes a callback for each. All symlinks, dotfiles and files without extension are ignored. Supports deep-loading. It can be used as an autoloader for JavaScript.

</div>

## Installation

```bash
$ npm install call-dir
```

## Usage

```javascript
import load, { loadAll } from "call-dir";

load(directory, callback);
loadAll(directory, callback);
```

### Examples

#### Basic loading

```javascript
import path from "path";
import load, { loadAll } from "call-dir";

const models = path.resolve(__dirname, "./path/to/models");
const routes = path.resolve(__dirname, "./path/to/routes");

load(models, (fpath, fname) => {
  console.log(`Found file: ${fname} (absolute path: ${fpath})`);
});

// You can initialize modules from a directory easily:
load(models, (fpath) => require(fpath)(some, variables, ...here));
load(routes, (fpath) => require(fpath)(some, variables, ...here));
```

#### Deep loading

```javascript
import path from "path";
import load, { loadAll } from "call-dir";

const modules = path.resolve(__dirname, "../node_modules");

// Those two calls are equivalents:
loadAll(modules, (fpath, fname) => /* … */);
load(modules, (fpath, fname) => /* … */, true);
```

## Tests

```bash
$ npm test
```
