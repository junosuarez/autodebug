# @jden/debug
npm.im/debug but automatic

## usage
```js
var debug = require('@jden/debug')
debug('hello')
```

## example
```
  @jden/debug:test.js test +0ms
  @jden/debug:test/test.js test in another file +0ms
```

Based on the [`debug`](https://www.npmjs.com/package/debug) module you know and love,
but it automatically fills in the package name and relative file path for you to reduce
boilerplate.


## api

just require in in each module you want to debug from and call it with things you want to debug

just like the original `debug` module, you can control which modules' debug output is shown with
the `DEBUG` environment variable. See https://www.npmjs.com/package/debug#usage

## installation

    $ npm install @jden/debug


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXV jden <jason@denizac.org>. See LICENSE.md
