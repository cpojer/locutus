// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var json_last_error = require('../../../../src/php/json/json_last_error.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/json/json_last_error.js (tested in test/languages/php/json/test-json_last_error.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 0
    var result = json_last_error()
    expect(result).toEqual(expected)
    done()
  })
})
