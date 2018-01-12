<div align="center">
  <h1>call-dir</h1>

[![Greenkeeper badge](https://badges.greenkeeper.io/Bartozzz/call-dir.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/Bartozzz/call-dir.svg)](https://travis-ci.org/Bartozzz/call-dir/)
[![License](https://img.shields.io/github/license/Bartozzz/call-dir.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/call-dir.svg)](https://www.npmjs.com/package/call-dir)
[![npm downloads](https://img.shields.io/npm/dt/call-dir.svg)](https://www.npmjs.com/package/call-dir)
  <br>

**call-dir** loads files from a directory and executes a callback for each one. Directory path is relative to the current working directory (`process.cwd()`). All dot files and files without extension are ignored.
</div>

## Installation

```bash
$ npm install call-dir
```

## Usage

```javascript
load(
    path: string,
    callback: (path: string, filename: string) => void,
    recursive: bool = false
): void
```

### Basic example:

```javascript
import load from "call-dir";

load("./path/to/stuff", (path, filename) => {
    console.log(`Found file: ${filename} (absolute path: ${path})`);
});

// You can initialize modules from a directory easily:
load("./models", path => require(path)(some, variables, ...here));
load("./routes", path => require(path)(some, variables, ...here));
```

### Recursive example:

```javascript
import load from "call-dir";

load("./node_modules", (path, filename) => {
    if (filename === "package.json") {
        // …
    }
}, true);
```

## Tests

```bash
$ npm test
```
