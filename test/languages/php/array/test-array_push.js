// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_push = require('../../../../src/php/array/array_push.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_push.js (tested in test/languages/php/array/test-array_push.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 3
    var result = array_push(['kevin','van'], 'zonneveld')
    expect(result).toEqual(expected)
    done()
  })
})
