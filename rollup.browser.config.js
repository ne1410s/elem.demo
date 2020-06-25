import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import pkg from './package.json';

// UMD build (for browsers)
export default {
  input: 'src/index.ts',
  output: {
    name: pkg.displayName,
    file: pkg.browser,
    format: 'umd',
    globals: {
      '@ne1410s/cust-elems': 'ne_cust_elems',
    },
  },
  plugins: [
    resolve(), // find external modules
    commonjs(), // convert external modules to ES modules
    typescript(),
    json(),
    url({ include: ['src/**/*.css', 'src/**/*.html'] }),
  ],
};
