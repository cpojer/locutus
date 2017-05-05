// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_key_exists = require('../../../../src/php/array/array_key_exists.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_key_exists.js (tested in test/languages/php/array/test-array_key_exists.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = array_key_exists('kevin', {'kevin': 'van Zonneveld'})
    expect(result).toEqual(expected)
    done()
  })
})
