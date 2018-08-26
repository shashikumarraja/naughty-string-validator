# naughty-string-validator

[![Build Status](https://travis-ci.org/shashikumarraja/naughty-string-validator.svg?branch=master)](https://travis-ci.org/shashikumarraja/naughty-string-validator)
[![Coverage Status](https://coveralls.io/repos/github/shashikumarraja/naughty-string-validator/badge.svg?branch=master)](https://coveralls.io/github/shashikumarraja/naughty-string-validator?branch=master)
[![npm version](https://badge.fury.io/js/naughty-string-validator.svg)](https://badge.fury.io/js/naughty-string-validator)
[![dependencies Status](https://david-dm.org/shashikumarraja/naughty-string-validator/status.svg)](https://david-dm.org/shashikumarraja/naughty-string-validator)
[![devDependencies Status](https://david-dm.org/shashikumarraja/naughty-string-validator/dev-status.svg)](https://david-dm.org/shashikumarraja/naughty-string-validator?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A node.js library that returns `naughty strings` from an offline database of [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings).

The Big List of Naughty Strings is an evolving list of strings which have a high probability of causing issues when used as user-input data.

This library can be to inluded in the test automation framework for API, UI, or DB testing to validate them against naughty strings.

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
npm run cover
```