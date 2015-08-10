const extend = require('deep-extend');

const airbnbESLintConfig = require('eslint-config-airbnb');
const saveESLintConfig = require('./eslint-save.json');

module.exports = extend(airbnbESLintConfig, saveESLintConfig);
