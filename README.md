# naughty-string-validator

A node.js library that returns `naughty strings` from an offline database of [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings).

The Big List of Naughty Strings is an evolving list of strings which have a high probability of causing issues when used as user-input data.

The main usage of this library can be to inluded it in the test automation framework for API, UI, or DB testing.

## Installation

  `npm install naughty-string-validator`

## Usage
```javascript
var naughtyStringValidator = require('naughty-string-validator');

//To get a random naughty string from the list
var randomNaughtyString = naughtyStringValidator.getRandomNaughtyString();

//To get entire naughty string list 
var naughtyStringList = naughtyStringValidator.getNaughtyStringList();
```

## Tests
```shell
npm test
```