# autodebug

https://npm.im/debug but with automatic namespacing


## usage

```js
var debug = require('autodebug')
debug('hello')
```

## example

```
  autodebug:foo test +0ms
  autodebug:foo:bar test in another file +0ms
```

Based on the [`debug`](https://www.npmjs.com/package/debug) module you know and love,
but it automatically fills in the package name and relative file path for you to reduce
boilerplate.


## api

Just require `autodebug` in each module you want to debug from and call it
with things you want to debug

Just like the original `debug` module, you can control which modules' debug
output is shown with the `DEBUG` environment variable.

See https://www.npmjs.com/package/debug#usage


## installation

```bash
$ npm install autodebug
```


## contributors

- jden <jason@denizac.org>
- tootallnate <n@n8.io>


## license

ISC. (c) MMXV jden <jason@denizac.org>. See LICENSE.md
