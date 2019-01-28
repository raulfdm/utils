import cleanup from 'rollup-plugin-cleanup';
import typescript from 'rollup-plugin-typescript';

export default {
  input: './lib/index.ts',
  output: [
    {
      format: 'umd',
      file: 'dist/decimal-counter.js',
      name: 'DecimalCounter'
    },
    {
      format: 'esm',
      file: 'dist/decimal-counter.es.js'
    }
  ],
  plugins: [typescript(), cleanup()]
};
