# `@raulfdm/simple-id`

> 'Cause sometimes we need a really unique ID without much code

<p align="center">
  <a href="https://bundlephobia.com/result?p=@raulfdm/simple-id"><img src="https://badgen.net/bundlephobia/minzip/@raulfdm/simple-id" /></a>
  <a href="https://github.com/raulfdm/utils/blob/master/packages/simple-id/LICENSE.md"><img src="https://badgen.net/npm/license/@raulfdm/simple-id" /></a>
  <a href="https://www.npmjs.com/package/@raulfdm/simple-id"><img src="https://badgen.net/npm/v/@raulfdm/simple-id" /></a>
</p>

## Motivation

Quite often I had to find a way to create a function to generate ID. So this is a minimalist one function library (extracted from [here](https://gist.github.com/gordonbrander/2230317) by @gordonbrander) to generate ID using `Math` and `toString` plus a simple param to enable/disable underscore.

## Usage

First you have to install it as a dependency:

```bash
yarn add @raulfdm/simple-id

# Or if you prefer use npm
npm install @raulfdm/simple-id
```

Then just import and call the function:

```js
const SimpleId = require('simple-id'); // For es5
import SimpleId from '@raulfdm/simple-id'; // For es6^

const myId = SimpleId();
```

If you're old fashioned and write applications without a package manager, unfortunately this project doesn't have a CDN, so please go to the folder `dist`, copy `simple-id.js` to your project and import it as a script.

```html
<!-- Old fashioned JS -->

<script src="node_modules/@raulfdm/simple-id/dist/simple-id.js"></script>
<script>
  var myId = SimpleId();
</script>
```

It'll generate an id like this: `_ntikcyel3`

## Options

The goal was too keep it simple so it accepts only one argument (object).

### underscore

The default way to generate the ID is using underscore as first character. However, you can disable it:

```js
const myId = SimpleId({ underscore: false }); // Something like: "ntikcyel3"
```

## License

[MIT](LICENSE.md)
