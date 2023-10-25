/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-no-literals': [
      1,
      {
        noStrings: true,
        ignoreProps: true,
      },
    ],
    'react/prop-types': 0,
  },
};
