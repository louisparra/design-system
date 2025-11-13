const StyleDictionary = require('style-dictionary');
module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    },
    ios: {
      transformGroup: 'ios',
      buildPath: 'dist/ios/',
      files: [{
        destination: 'Colors.xcassets',
        format: 'ios/colors'
      }]
    },
    android: {
      transformGroup: 'android',
      buildPath: 'dist/android/',
      files: [{
        destination: 'colors.xml',
        format: 'android/resources'
      }]
    }
  }
};