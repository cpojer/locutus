// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var call_user_func = require('../../../../src/php/funchand/call_user_func.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/funchand/call_user_func.js (tested in test/languages/php/funchand/test-call_user_func.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = call_user_func('isNaN', 'a')
    expect(result).toEqual(expected)
    done()
  })
})
