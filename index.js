var fs = require('fs')
var path = require('path')
var debug = require('debug')

var root, dir

function tryReadPackageJson (dir) {
  var ok = fs.existsSync(path.resolve(dir, 'package.json'))
  if (ok) {
    root = dir
  }
  return ok
}

// remove self from require cache,
// so that next require call gets re-evaluated
delete require.cache[__filename]

module.exports = (function () {
  if (!module.parent) {
    return debug(module.id)
  }
  var filename = module.parent.filename
  if (!filename) {
    return debug(module.parent.id || module.id)
  }

  dir = path.dirname(filename)
  while (!tryReadPackageJson(dir)) {
    dir = path.dirname(dir)
  }

  if (!root) {
    return debug(module.parent.id || module.id)
  }

  var packageName = require(path.resolve(dir, 'package.json')).name
  var rel = path.relative(root, filename).replace(/\.js$/, '').split(/[\/\\]/g)
  var name = packageName + ':' + rel.join(':')

  return debug(name)
})()
