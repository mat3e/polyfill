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

3. `npm run docs`
   * Creates `docs` folder with
     * polyfill.html
     * babel-core-js.js
     * original.html
     * original.js
   * Executes webpack 2 times - with the original file (default configuration) and with the Babel + core-js version (`webpack-babel-core-js.js` webpack configuration)

## Links
[original script](https://mat3e.github.io/polyfill/original.html)
[Babel + core-js script](https://mat3e.github.io/polyfill/polyfill.html)

## Why not using Babel inside Webpack?
The idea is to show Babel and core-js. It's simpler with Babel CLI. 

Webpack is just for creating the example webpages with the code got from Babel.
