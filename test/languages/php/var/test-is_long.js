// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var is_long = require('../../../../src/php/var/is_long.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/is_long.js (tested in test/languages/php/var/test-is_long.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = is_long(186.31)
    expect(result).toEqual(expected)
    done()
  })
})
