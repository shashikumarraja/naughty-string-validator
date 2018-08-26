
/* eslint no-unused-expressions: 0 */
const { expect } = require('chai');

const fs = require('fs');
const { getRandomNaughtyString, getNaughtyStringList } = require('../src/index');

describe('#naughty-string-collection', () => {
  it('should check blns.json exists', () => {
    expect(fs.existsSync('src/naughty-string-collection/blns.json')).to.be.true;
  });
});

describe('#naughty-string-validator', () => {
  it('should return random naughty string', () => {
    const randomString = getRandomNaughtyString();
    expect(randomString).to.be.a('string');
  });
  it('should return naughty string list', () => {
    const naughtyStringList = getNaughtyStringList();
    expect(naughtyStringList).to.be.an('array').that.is.not.empty;
  });
});
