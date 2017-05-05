// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var empty = require('../../../../src/php/var/empty.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/empty.js (tested in test/languages/php/var/test-empty.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = empty(null)
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = true
    var result = empty(undefined)
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = true
    var result = empty([])
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = true
    var result = empty({})
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = false
    var result = empty({'aFunc' : function () { alert('humpty'); } })
    expect(result).toEqual(expected)
    done()
  })
})
