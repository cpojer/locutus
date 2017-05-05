// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var ksort = require('../../../../src/php/array/ksort.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/ksort.js (tested in test/languages/php/array/test-ksort.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {a: 'orange', b: 'banana', c: 'apple', d: 'lemon'}
    var $data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
    ksort($data)
    var result = $data
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = {1: 'Kevin', 2: 'van', 3: 'Zonneveld'}
    ini_set('locutus.sortByReference', true)
    var $data = {2: 'van', 3: 'Zonneveld', 1: 'Kevin'}
    ksort($data)
    var result = $data
    expect(result).toEqual(expected)
    done()
  })
})
