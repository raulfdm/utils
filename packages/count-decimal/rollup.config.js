import cleanup from 'rollup-plugin-cleanup';
import typescript from 'rollup-plugin-typescript';

export default {
  input: './lib/index.ts',
  output: [
    {
      format: 'umd',
      file: 'dist/count-decimal.js',
      name: 'CountDecimal'
    },
    {
      format: 'esm',
      file: 'dist/count-decimal.es.js'
    }
  ],
  plugins: [typescript(), cleanup()]
};
