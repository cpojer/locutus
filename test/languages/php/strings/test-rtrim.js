// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var rtrim = require('../../../../src/php/strings/rtrim.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/rtrim.js (tested in test/languages/php/strings/test-rtrim.js)', function () {
  it('should pass example 1', function (done) {
    var expected = '    Kevin van Zonneveld'
    var result = rtrim('    Kevin van Zonneveld    ')
    expect(result).toEqual(expected)
    done()
  })
})
