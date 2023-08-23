<h1 align="center" style="border-bottom: none;">✨ @topgunbuild/textencoder</h1>
<h3 align="center">An isomorphic TextEncoder for Javascript in Node and the browser, used in <a href="https://github.com/TopGunBuild/topgun">TopGun</a></h3>

<p align="center">
  <a href="https://npm.im/@topgunbuild/textencoder">
    <img alt="npm" src="https://badgen.net/npm/v/@topgunbuild/textencoder">
  </a>
  <a href="https://bundlephobia.com/result?p=@topgunbuild/textencoder">
    <img alt="bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@topgunbuild/textencoder.svg">
  </a>
  <a href="https://opensource.org/licenses/MIT">
      <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

## What?

Encode/decode Uint8Arrays to strings.

This is just a thin wrapper that provides an isomorphic API.
- To perform UTF8 conversion in the browser it uses the native TextEncoder.
- In Node it uses Buffer and Uint8Array.

## Install

```bash
npm install @topgunbuild/textencoder
```

## Usage

```javascript
const textencoder = require('@topgunbuild/textencoder')
// or
import textencoder from '@topgunbuild/textencoder';

textencoder.encode('Hello') // Uint8Array [ 72, 101, 108, 108, 111 ]
```

## License

MIT
