
/* eslint no-unused-expressions: 0 */
const { expect } = require('chai');

const fs = require('fs');
const {
  getRandomNaughtyString, getNaughtyStringList, getRandomEmoji, getEmojiList
} = require('../src/index');

describe('#naughty-string-db', () => {
  it('should check blns.json exists', () => {
    expect(fs.existsSync('src/naughty-string-db/blns.json')).to.be.true;
  });
  it('should check emoji.json exists', () => {
    expect(fs.existsSync('src/naughty-string-db/emoji.json')).to.be.true;
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
  it('should return random emoji', () => {
    const randomEmoji = getRandomEmoji();
    expect(randomEmoji).to.be.a('string').that.is.not.empty;
  });
  it('should return emoji list', () => {
    const emojiList = getEmojiList();
    expect(emojiList).to.be.an('array').that.is.not.empty;
  });
  it('should return emoji list by category:People', () => {
    const emojiList = getEmojiList('Flags');
    expect(emojiList).to.be.an('array').that.is.not.empty;
  });
  it('should return emoji list by category:Nature', () => {
    const emojiList = getEmojiList('Nature');
    expect(emojiList).to.be.an('array').that.is.not.empty;
  });
  it('should return emoji list by category:Foods', () => {
    const emojiList = getEmojiList('Foods');
    expect(emojiList).to.be.an('array').that.is.not.empty;
  });
  it('should return emoji list by category:Activity', () => {
    const emojiList = getEmojiList('Activity');
    expect(emojiList).to.be.an('array').that.is.not.empty;
  });
  it('should return emoji list by category:Places', () => {
    const emojiList = getEmojiList('Places');
    expect(emojiList).to.be.an('array').that.is.not.empty;
  });
  it('should return emoji list by category:Objects', () => {
    const emojiList = getEmojiList('Objects');
    expect(emojiList).to.be.an('array').that.is.not.empty;
  });
  it('should return emoji list by category:Symbols', () => {
    const emojiList = getEmojiList('Symbols');
    expect(emojiList).to.be.an('array').that.is.not.empty;
  });
  it('should return emoji list by category:Flags', () => {
    const emojiList = getEmojiList('Flags');
    expect(emojiList).to.be.an('array').that.is.not.empty;
  });
});
