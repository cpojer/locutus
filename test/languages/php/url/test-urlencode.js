// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var urlencode = require('../../../../src/php/url/urlencode.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/url/urlencode.js (tested in test/languages/php/url/test-urlencode.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'Kevin+van+Zonneveld%21'
    var result = urlencode('Kevin van Zonneveld!')
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'http%3A%2F%2Fkvz.io%2F'
    var result = urlencode('http://kvz.io/')
    expect(result).toEqual(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3DLocutus%26ie%3Dutf-8'
    var result = urlencode('http://www.google.nl/search?q=Locutus&ie=utf-8')
    expect(result).toEqual(expected)
    done()
  })
})
