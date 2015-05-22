var d = require('debug')

//remove self from cache
delete require.cache[__filename]

var path = require('path')
var fs = require('fs')

var dir = path.dirname(module.parent.filename)
var root
while(!tryReadPackageJson(dir)) {
  dir = path.dirname(dir)
}

if (!root) {
  throw new Error('could not find package root for ' + module.parent.filename)
}

var packageName = require(path.resolve(dir, 'package.json')).name
var rel = path.relative(root, module.parent.filename).replace(/\\/g, '/')

function tryReadPackageJson(dir) {
  var ok = fs.existsSync(path.resolve(dir, 'package.json'))
  if (ok) {
    root = dir
  }
  return ok
}

function debug () {
  var args = arguments
  d(packageName+':'+rel).apply(null, args)
}

module.exports = debug