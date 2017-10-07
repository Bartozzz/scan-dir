<div align="center">
  <h1>call-dir</h1>

[![Greenkeeper badge](https://badges.greenkeeper.io/Bartozzz/call-dir.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/Bartozzz/call-dir.svg)](https://travis-ci.org/Bartozzz/call-dir/)
[![npm version](https://img.shields.io/npm/v/call-dir.svg)](https://www.npmjs.com/package/call-dir)
[![npm downloads](https://img.shields.io/npm/dt/call-dir.svg)](https://www.npmjs.com/package/call-dir)
  <br>

Loads files from a directory and executes a callback for each one. Directory path is relative to the current working directory. `call-dir` ignores all dot files.
</div>

## Installation

```bash
$ npm install call-dir
```

## Usage

You can load `call-dir` like a typical node module:

```javascript
import load from "call-dir";

// ... and let the magic happen:
load( "./path/to/stuff", ( path, filename ) => {
    console.log( `Found file: ${filename} (absolute path: ${path})` );
} );

// You can initialize modules from a directory easily:
load( "./models", path => require( path )( some, variables, ...here ) );
load( "./routes", path => require( path )( some, variables, ...here ) );
```
