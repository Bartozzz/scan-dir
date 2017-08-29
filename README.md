# call-dir

[![Greenkeeper badge](https://badges.greenkeeper.io/Bartozzz/call-dir.svg)](https://greenkeeper.io/)

Loads files from a directory and executes a callback for each.

## Installation

```bash
$ npm install call-dir
```

## Usage

You can load `html-resources` like a typical node module:

```javascript
// Import stuff:
const load = require( "call-dir" );
// or...
import load from "call-dir";

// ... and let the magic happen:
load( "./path/to/stuff", path => {
    require( path )( some, variables );
} )
```
