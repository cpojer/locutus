// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var abs = require('../../../../src/php/math/abs.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/abs.js (tested in test/languages/php/math/test-abs.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 4.2
    var result = abs(4.2)
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 4.2
    var result = abs(-4.2)
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 5
    var result = abs(-5)
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 0
    var result = abs('_argos')
    expect(result).toEqual(expected)
    done()
  })
})
