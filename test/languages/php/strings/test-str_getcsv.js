// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var str_getcsv = require('../../../../src/php/strings/str_getcsv.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/str_getcsv.js (tested in test/languages/php/strings/test-str_getcsv.js)', function () {
  it('should pass example 1', function (done) {
    var expected = ['abc', 'def', 'ghi']
    var result = str_getcsv('"abc","def","ghi"')
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = ['row2"cell1', 'row2cell2', 'row2cell3']
    var result = str_getcsv('"row2""cell1","row2cell2","row2cell3"', null, null, '"')
    expect(result).toEqual(expected)
    done()
  })
})
