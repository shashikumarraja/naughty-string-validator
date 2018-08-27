# naughty-string-validator

[![Build Status](https://travis-ci.org/shashikumarraja/naughty-string-validator.svg?branch=master)](https://travis-ci.org/shashikumarraja/naughty-string-validator)
[![Coverage Status](https://coveralls.io/repos/github/shashikumarraja/naughty-string-validator/badge.svg?branch=master)](https://coveralls.io/github/shashikumarraja/naughty-string-validator?branch=master)
[![npm version](https://badge.fury.io/js/naughty-string-validator.svg)](https://badge.fury.io/js/naughty-string-validator)
![npm](https://img.shields.io/npm/dt/naughty-string-validator.svg)
[![dependencies Status](https://david-dm.org/shashikumarraja/naughty-string-validator/status.svg)](https://david-dm.org/shashikumarraja/naughty-string-validator)
[![devDependencies Status](https://david-dm.org/shashikumarraja/naughty-string-validator/dev-status.svg)](https://david-dm.org/shashikumarraja/naughty-string-validator?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/shashikumarraja/naughty-string-validator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/shashikumarraja/naughty-string-validator?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
===

A node.js library that returns `naughty strings` from an offline database of [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) and emojis. The db will be continuously growing with each release.

The Big List of Naughty Strings is an evolving list of strings which have a high probability of causing issues when used as user-input data.

This library can be inluded in the test automation framework for API, UI, or DB testing to validate them against naughty strings.

## Installation

  `npm install naughty-string-validator`

## Usage
```javascript
var naughty = require('naughty-string-validator');
```
* To get a random naughty string from the list
  ```javascript
  var randomNaughty = naughty.getRandomNaughtyString();

  //randomNaughty
  "<a href=\"\\xE2\\x80\\x88javascript…(1)\" id=\"fuzzelement1\">test</a>"
  ```

 * To get entire naughty string list 
    ```javascript
    var naughtyList = naughty.getNaughtyStringList();

    //naughtyList
    ["", "undefined", "undef", "null", "NULL", "(null)", "nil", …]
    ```
* To get a random emoji from the emoji list
  ```javascript
  var randomEmoji = naughty.getRandomEmoji();

  //randomEmoji
   "😃"
  ```
* To get a entire emoji list
  ```javascript
  var emojiList = naughty.getEmojiList();

  //emojiList
  ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", …]
  ```
  * To get emoji list of a particular category:
  `'People', 'Nature', 'Foods', 'Activity', 'Places', 'Objects', 'Symbols', 'Flags'`
  ```javascript
  var emojiList = naughty.getEmojiList('Flags');

  //emojiList
  ['🏳️', '🏴', '🏁', '🚩', '🏳️‍🌈', '🇦🇫', '🇦🇽','🇦🇱', …]
  ```

## Tests
```shell
//To run test with linting but without coverage
npm test

//Test with coverage
npm run cover
```

## ☑ Roadmap

- [x] Add Support for emoji
- [ ] Add Support to get a desired emoji by name
- [ ] Add Support to get NaughtyStringList of a given length
- [ ] Add Support for mocha and chai integration
- [ ] Add Support to get list of stickers


If you think you can contribute to any of the roadmap or suggest something new, you can contribute to this project by opening a pull request.