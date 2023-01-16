module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    project: './tsconfig.json',
    sourceType: "module",
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off'
  }
}
