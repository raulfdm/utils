# `@raulfdm/count-decimal`

> Count decimal places can be much more annoying than you think. 🙄

<p align="center">
  <a href="https://bundlephobia.com/result?p=@raulfdm/count-decimal"><img src="https://badgen.net/bundlephobia/minzip/@raulfdm/count-decimal" /></a>
  <a href="https://github.com/raulfdm/utils/blob/master/packages/count-decimal/LICENSE.md"><img src="https://badgen.net/npm/license/@raulfdm/count-decimal" /></a>
  <a href="https://www.npmjs.com/package/@raulfdm/count-decimal"><img src="https://badgen.net/npm/v/@raulfdm/count-decimal" /></a>
</p>

## Motivation

After face this problem and didn't see a clear code to do it, I've decided to create my own implementation, considering some edge cases and 100% tested.

## Usage

First you have to install it as a dependency:

```bash
yarn add @raulfdm/count-decimal

# Or if you prefer use npm
npm install @raulfdm/count-decimal
```

Then just import and call the function:

```js
const countDecimal = require('count-decimal'); // For es5
//import countDecimal from '@raulfdm/count-decimal'; // For es6^

countDecimal('1.23'); //> 2
countDecimal(1.23); //> 2
countDecimal('1,23'); //> 2
```

If you're old fashioned and write applications without a package manager, unfortunately this project doesn't have a CDN, so please go to the folder `dist`, copy `count-decimal.js` to your project and import it as a script.

```html
<!-- Old fashioned JS -->

<script src="node_modules/@raulfdm/count-decimal/dist/count-decimal.js"></script>
<script>
  var numberOfDecimals = CountDecimal('1.24');
</script>
```

## License

[MIT](LICENSE.md)
