module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'object-curly-spacing': [2, 'always'],
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
