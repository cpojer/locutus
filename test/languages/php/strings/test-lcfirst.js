// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var lcfirst = require('../../../../src/php/strings/lcfirst.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/lcfirst.js (tested in test/languages/php/strings/test-lcfirst.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'kevin Van Zonneveld'
    var result = lcfirst('Kevin Van Zonneveld')
    expect(result).toEqual(expected)
    done()
  })
})
