// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var rand = require('../../../../src/php/math/rand.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/rand.js (tested in test/languages/php/math/test-rand.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 1
    var result = rand(1, 1)
    expect(result).toEqual(expected)
    done()
  })
})
