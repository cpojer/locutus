// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var is_bool = require('../../../../src/php/var/is_bool.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/is_bool.js (tested in test/languages/php/var/test-is_bool.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = is_bool(false)
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = false
    var result = is_bool(0)
    expect(result).toEqual(expected)
    done()
  })
})
