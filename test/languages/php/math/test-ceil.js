// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var ceil = require('../../../../src/php/math/ceil.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/ceil.js (tested in test/languages/php/math/test-ceil.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 8723322
    var result = ceil(8723321.4)
    expect(result).toEqual(expected)
    done()
  })
})
