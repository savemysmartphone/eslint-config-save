const fs = require('fs');
const path = require('path');
const stripComments = require('strip-json-comments');
const objectAssign = require('object-assign');

const eslintConfig = fs.readFileSync(path.join(__dirname, '.eslintrc'), { encoding: 'utf8' });
const eslintConfigParsed = JSON.parse(stripComments(eslintConfig));

const extendsConfig = path.join(__dirname, 'node_modules', eslintConfigParsed.extends);
const extendsConfigParsed = require(extendsConfig);

module.exports = objectAssign({}, extendsConfigParsed, eslintConfig);
