// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_fill_keys = require('../../../../src/php/array/array_fill_keys.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_fill_keys.js (tested in test/languages/php/array/test-array_fill_keys.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {"foo": "banana", 5: "banana", 10: "banana", "bar": "banana"}
    var $keys = {'a': 'foo', 2: 5, 3: 10, 4: 'bar'}
    var result = array_fill_keys($keys, 'banana')
    expect(result).toEqual(expected)
    done()
  })
})
