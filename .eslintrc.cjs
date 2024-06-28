module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'simple-import-sort', 'prettier'],
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "max-len": ["error", { code: 180 }],
    "prettier/prettier": [
      "error",
      {
        printWidth: 180,
      },
    ],
  },
}
