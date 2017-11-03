var assert = require('assert');

var number = require('../src/number')

describe("Number Module",function(){

    it("Should short float value",function(){

        assert.equal(3.45,number.shortFloat(3.455645))
    })

    it("should short float value with specified length", function() {

        assert.equal(3.450, number.shortFloat(3.455645,3))
    })
})