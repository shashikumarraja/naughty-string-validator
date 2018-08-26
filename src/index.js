

const naughtyStringList = require('../src/naughty-string-db/blns.json');

const emojiList = require('../src/naughty-string-db/emoji.json');

exports.getRandomNaughtyString = () => {
  const stringLength = naughtyStringList.length;
  const randomIndex = Math.floor(Math.random() * (stringLength - 0) + 0);
  return naughtyStringList[randomIndex];
};

exports.getNaughtyStringList = () => naughtyStringList;

exports.getRandomEmoji = () => {
  const stringLength = emojiList.length;
  const randomIndex = Math.floor(Math.random() * (stringLength - 0) + 0);
  return emojiList[randomIndex].emoji;
};
exports.getEmojiList = () => emojiList.map(item => item.emoji);
