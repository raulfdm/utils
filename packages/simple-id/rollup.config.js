import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: 'lib/simple-id.js',
  output: [
    {
      format: 'umd',
      file: 'dist/simple-id.js',
      name: 'SimpleId'
    },
    {
      format: 'esm',
      file: 'dist/simple-id.es.js'
    }
  ],
  plugins: [
    babel({
      babelrc: false,
      presets: [['@babel/preset-env', { modules: false }]]
    }),
    cleanup()
  ]
};
