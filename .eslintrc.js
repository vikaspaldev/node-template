module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/all', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    /* ESLINT COMMONS */
    'no-console': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    /* TYPESCRIPT COMMONS */
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error', // Tip: use `unknown` if needed
    '@typescript-eslint/prefer-readonly': 'error',

    /* ESLINT-TYPESCRIPT CONFLICTS */
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    /* ESLINT-TYPESCRIPT CONFLICTS */
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['.eslintrc.js', 'dist'],
};
