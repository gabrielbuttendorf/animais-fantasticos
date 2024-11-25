import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  {
    rules: {
      'no-unused-vars': 'warn',
      'no-trailing-spaces': 'warn',
      'keyword-spacing': 'warn',
      'eol-last': 'warn',
    },

    env: {
      browser: true,
      amd: true,
      node: true,
    },
  },
];
