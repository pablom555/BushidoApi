module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'consistent-return': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
