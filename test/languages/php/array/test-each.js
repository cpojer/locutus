// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var each = require('../../../../src/php/array/each.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/each.js (tested in test/languages/php/array/test-each.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {0: "a", 1: "apple", key: "a", value: "apple"}
    var result = each({a: "apple", b: "balloon"})
    expect(result).toEqual(expected)
    done()
  })
})
