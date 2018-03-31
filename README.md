<div align="center">
  <h1>call-dir</h1>

[![Greenkeeper badge](https://badges.greenkeeper.io/Bartozzz/call-dir.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/Bartozzz/call-dir.svg)](https://travis-ci.org/Bartozzz/call-dir/)
[![License](https://img.shields.io/github/license/Bartozzz/call-dir.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/call-dir.svg)](https://www.npmjs.com/package/call-dir)
[![npm downloads](https://img.shields.io/npm/dt/call-dir.svg)](https://www.npmjs.com/package/call-dir)
  <br>

**call-dir** looks for files in a directory and executes a callback for each one. All dot files and files without extension are ignored. Supports deep-loading files from sub-folders. Can be used as an autoloader for JavaScript.
</div>

## Installation

```bash
$ npm install call-dir
```

## Usage

```javascript
import load, {loadAll} from "call-dir";

load(path, callback[, recursive]);
loadAll(path, callback);
```

### Basic loading example

```javascript
import load, {loadAll} from "call-dir";

load("./path/to/stuff", (path, filename) => {
  console.log(`Found file: ${filename} (absolute path: ${path})`);
});

// You can initialize modules from a directory easily:
load("./models", path => require(path)(some, variables, ...here));
load("./routes", path => require(path)(some, variables, ...here));
```

### Deep loading example

```javascript
import load, {loadAll} from "call-dir";

function callback(path, filename) {
  // …
}

loadAll("./node_modules", callback);
// … equivalent to:
load("./node_modules", callback, true);
```

## Tests

```bash
$ npm test
```
