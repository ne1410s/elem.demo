import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import pkg from './package.json';

// CommonJS and ES module builds (for node and bundlers)
export default {
  input: 'src/index.ts',
  external: [
    '@ne1410s/cust-elems'
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  plugins: [
    typescript(),
    terser({ include: ['*.cjs.min.js', '*.esm.min.js'] }),
    json(),
    url({ include: ['src/**/*.css', 'src/**/*.html'] })
  ]
};