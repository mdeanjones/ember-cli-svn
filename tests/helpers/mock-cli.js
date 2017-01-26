'use strict';

const path = require('path');
const MockUI = require('console-ui/mock');

module.exports = MockCLI;

function MockCLI(options) {
  options = options || {};

  this.ui = options.ui || new MockUI();
  this.root = path.join(__dirname, '..', '..');
  this.npmPackage = options.npmPackage || 'ember-cli';
}