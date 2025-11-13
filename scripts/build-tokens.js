const StyleDictionary = require('style-dictionary').extend('style-dictionary.config.js');
console.log('Build started...');
StyleDictionary.buildAllPlatforms();
console.log('Build completed!');