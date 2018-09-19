

const naughtyStringList = require('../src/naughty-string-db/blns.json');

const emojiList = require('../src/naughty-string-db/emoji.json');

const emojiCategoryList = ['People', 'Nature', 'Foods', 'Activity', 'Places', 'Objects', 'Symbols', 'Flags'];

/**
 * @description Returns a random naughty string
 * @returns {string}
 */
exports.getRandomNaughtyString = () => {
  const stringLength = naughtyStringList.length;
  const randomIndex = Math.floor(Math.random() * (stringLength - 0) + 0);
  return naughtyStringList[randomIndex];
};

/**
 * @description Returns the entire naughty string List
 * @returns {Array}
 */
exports.getNaughtyStringList = () => naughtyStringList;

/**
 * @description Returns a random emoji
 * @returns {string}
 */
exports.getRandomEmoji = () => {
  const stringLength = emojiList.length;
  const randomIndex = Math.floor(Math.random() * (stringLength - 0) + 0);
  return emojiList[randomIndex].emoji;
};

/**
 * @description Returns list of emoji based on the passed category name
 * @param  {string} category
 * @returns {Array}
 */
exports.getEmojiList = (category) => {
  if (category && typeof (category) === 'string' && emojiCategoryList.includes(category)) {
    return emojiList.filter(item => item.category === category)
      .map(item => item.emoji);
  }
  return emojiList.map(item => item.emoji);
};
