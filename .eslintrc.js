module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  globals: {
    JSX: true
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'space-before-function-paren': 'error',
    'comma-dangle': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    camelcase: 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'no-useless-constructor': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'error',
      {
        ignoreDeclarationMerge: true
      }
    ],
    'react/prop-types': 'off'
  }
}
