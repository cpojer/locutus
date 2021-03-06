// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var dechex = require('../../../../src/php/math/dechex.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/dechex.js (tested in test/languages/php/math/test-dechex.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'a'
    var result = dechex(10)
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = '2f'
    var result = dechex(47)
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 'ab9dc427'
    var result = dechex(-1415723993)
    expect(result).toEqual(expected)
    done()
  })
})
