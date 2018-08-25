'use strict';

const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const { getRandomNaughtyString, getNaughtyStringList } = require('../src/index');

describe("#naughty-string-collection", function () {
    it("should check blns.json exists", function () {
        expect(fs.existsSync('src/naughty-string-collection/blns.json')).to.be.true;
    });
});

describe('#naughty-string-validator', function () {
    it('should return random naughty string', function () {
        var randomString = getRandomNaughtyString();
        expect(randomString).to.be.a('string');
    });
    it('should return naughty string list', function () {
        var naughtyStringList = getNaughtyStringList();
        expect(naughtyStringList).to.be.an('array').that.is.not.empty;
    });
});