module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: ['@react-native-community'],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
  },
};
