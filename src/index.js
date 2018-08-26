

const naughtyStringList = require('../src/naughty-string-collection/blns.json');

exports.getRandomNaughtyString = () => {
  const stringLength = naughtyStringList.length;
  const randomIndex = Math.floor(Math.random() * (stringLength - 0) + 0);
  return naughtyStringList[randomIndex];
};

exports.getNaughtyStringList = () => naughtyStringList;
