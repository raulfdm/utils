# `@raulfdm/decimal-counter`

> Count decimal places can be much more annoying than you think. 🙄

<p align="center">
  <a href="https://bundlephobia.com/result?p=@raulfdm/decimal-counter"><img src="https://badgen.net/bundlephobia/minzip/@raulfdm/decimal-counter" /></a>
  <a href="https://github.com/raulfdm/utils/blob/master/packages/decimal-counter/LICENSE.md"><img src="https://badgen.net/npm/license/@raulfdm/decimal-counter" /></a>
  <a href="https://www.npmjs.com/package/@raulfdm/decimal-counter"><img src="https://badgen.net/npm/v/@raulfdm/decimal-counter" /></a>
</p>

## Motivation

After face this problem and didn't see a clear code to do it, I've decided to create my own implementation, considering some edge cases and 100% tested.

## Usage

First you have to install it as a dependency:

```bash
yarn add @raulfdm/decimal-counter

# Or if you prefer use npm
npm install @raulfdm/decimal-counter
```

Then just import and call the function:

```js
const decimalCounter = require('decimal-counter'); // For es5
//import decimalCounter from '@raulfdm/decimal-counter'; // For es6^

decimalCounter('1.23'); //> 2
decimalCounter(1.23); //> 2
decimalCounter('1,23'); //> 2
```

If you're old fashioned and write applications without a package manager, unfortunately this project doesn't have a CDN, so please go to the folder `dist`, copy `decimal-counter.js` to your project and import it as a script.

```html
<!-- Old fashioned JS -->

<script src="node_modules/@raulfdm/decimal-counter/dist/decimal-counter.js"></script>
<script>
  var numberOfDecimals = CountDecimal('1.24');
</script>
```

## License

[MIT](LICENSE.md)
