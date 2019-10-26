# Babel + core-js

1. `npm run babel`
   * Creates `babel/code.js` from `src/code.js` with Babel transformations
   * Uses just `@babel/preset-env`, with no additional configuration 
   * `@babel/preset-env` uses `.browserslistrc` to decide what to transform and how

2. `npm run babel-core-js`
   * Creates `babel-core-js/code.js`
   * Uses `cross-env` to change `NODE_ENV`
   * Then, `@babel/preset-env` uses `core-js` (see `.babelrc.js`)
   * `@babel/preset-env` uses `.browserslistrc` to decide what to transform and **polyfill** and how