var fs = require('fs')
var path = require('path')
var debug = require('debug')

var root, dir

function tryReadPackageJson(dir) {
  var ok = fs.existsSync(path.resolve(dir, 'package.json'))
  if (ok) {
    root = dir
  }
  return ok
}

// remove self from require cache,
// so that next require call gets re-evaluated
delete require.cache[__filename]

dir = path.dirname(module.parent.filename))
while (!tryReadPackageJson(dir)) {
  dir = path.dirname(dir)
}

if (!root) {
  throw new Error('could not find package root for ' + module.parent.filename)
}

var packageName = require(path.resolve(dir, 'package.json')).name
var rel = path.relative(root, module.parent.filename).replace(/\\/g, '/')

module.exports = debug(name)
