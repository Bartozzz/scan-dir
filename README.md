<div align="center">
  <h1>call-dir</h1>

[![Greenkeeper badge](https://badges.greenkeeper.io/Bartozzz/call-dir.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/Bartozzz/call-dir.svg)](https://travis-ci.org/Bartozzz/call-dir/)
[![License](https://img.shields.io/github/license/Bartozzz/call-dir.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/call-dir.svg)](https://www.npmjs.com/package/call-dir)
[![npm downloads](https://img.shields.io/npm/dt/call-dir.svg)](https://www.npmjs.com/package/call-dir)
<br>

**call-dir** searches for files in a directory and executes a callback for each. All symlinks, dotfiles and files without extension are ignored. Supports deep-loading. Can be used as an autoloader for JavaScript.

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

### Example: Basic loading

```javascript
import path from "path";
import load, { loadAll } from "call-dir";

const models = path.resolve(__dirname, "./path/to/models");
const routes = path.resolve(__dirname, "./path/to/routes");

load(models, (fpath, fname) => {
  console.log(`Found file: ${fname} (absolute path: ${fpath})`);
});

// You can initialize modules from a directory easily:
load(models, fpath => require(fpath)(some, variables, ...here));
load(routes, fpath => require(fpath)(some, variables, ...here));
```

### Example: Deep loading

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
