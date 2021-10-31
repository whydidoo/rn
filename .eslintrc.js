module.exports = {
  root: true,
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['eslint-plugin-import-helpers'],
  parserOptions: {
    project: './tsconfig.json',
  },

  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            importNames: ['default'],
            message: 'Please import from styled-components/native.',
          },
        ],
        patterns: ['!styled-components/native'],
      },
    ],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^react/',
          '/^react-native/',
          '/^@react/',
          'module',
          '/^components/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  ignorePatterns: [
    '.eslintrc.js',
    '*.config.js',
    'storyLoader.js',
    'platform/scripts/*.js',
    '*.d.ts',
    '*.test.ts',
    '*.test.js',
    '__tests__',
  ],
};
