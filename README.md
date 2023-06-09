<h1 align="center" style="border-bottom: none;">✨ topgun-textencoder</h1>
<h3 align="center">An isomorphic TextEncoder for Javascript in Node and the browser, used in <a href="https://github.com/TopGunBuild/topgun">TopGun</a></h3>

<p align="center">
  <a href="https://github.com/semantic-release/semantic-release">
      <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://npm.im/topgun-textencoder">
    <img alt="npm" src="https://badgen.net/npm/v/topgun-textencoder">
  </a>
  <a href="https://bundlephobia.com/result?p=topgun-textencoder">
    <img alt="bundlephobia" src="https://img.shields.io/bundlephobia/minzip/topgun-textencoder.svg">
  </a>
  <a href="https://opensource.org/licenses/MIT">
      <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

## What?

Encode/decode Uint8Arrays to strings.

This is just a thin wrapper that provides an isomorphic API.
- To perform UTF8 conversion in the browser it uses the native TextEncoder.
  - It includes a polyfill so IE11 / Edge aren't left out.
- In Node it uses util module.

## Install

`npm install topgun-textencoder`

## Usage

```javascript
const textencoder = require('topgun-textencoder')
// or
import textencoder from 'topgun-textencoder';

textencoder.encode('Hello') // Uint8Array [ 72, 101, 108, 108, 111 ]
```

## License

MIT
