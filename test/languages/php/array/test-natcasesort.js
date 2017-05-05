// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var natcasesort = require('../../../../src/php/array/natcasesort.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/natcasesort.js (tested in test/languages/php/array/test-natcasesort.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {a: 'IMG0.png', e: 'img1.png', d: 'img2.png', f: 'IMG3.png', c: 'img10.png', b: 'img12.png'}
    var $array1 = {a:'IMG0.png', b:'img12.png', c:'img10.png', d:'img2.png', e:'img1.png', f:'IMG3.png'}
    natcasesort($array1)
    var result = $array1
    expect(result).toEqual(expected)
    done()
  })
})
