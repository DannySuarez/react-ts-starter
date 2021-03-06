const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function setupEslint(folder) {
  console.log(chalk.green('Setting up .eslintrc'));

  const eslint = {
    'parserOptions': {
      'ecmaVersion': 9,
      'sourceType': 'module'
    },
    'parser': '@typescript-eslint/parser',
    'env': {
      'es6': true,
      'browser': true,
      'jest': true
    },
    'plugins': [
      '@typescript-eslint',
      'babel',
      'react'
    ],
    'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    'rules': {
      'no-console': 'warn',
      'indent': [
        'error',
        2,
        {
          'SwitchCase': 1
        }
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'always'
      ],
      'space-in-parens': [
        'error'
      ],
      'space-infix-ops': 'error',
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'comma-spacing': 'error',
      'space-before-function-paren': [
        'error',
        'never'
      ],
      'eol-last': [
        'error',
        'always'
      ],
      'keyword-spacing': [
        'error',
        {
          'before': true,
          'after': true,
          'overrides': {
            'do': {
              'after': false
            },
            'for': {
              'after': false
            },
            'if': {
              'after': false
            },
            'switch': {
              'after': false
            },
            'while': {
              'after': false
            },
            'catch': {
              'after': false
            }
          }
        }
      ],
      'array-bracket-spacing': 'error',
      'babel/no-invalid-this': 1,
      'babel/semi': 0
    }
  };

  fs.writeFileSync(
    path.join(folder, '.eslintrc'),
    JSON.stringify(eslint, null, 2));
}

module.exports = setupEslint;
