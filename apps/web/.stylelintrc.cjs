/** @type {import("stylelint").Config} */
module.exports = {
  extends: ['../../.stylelintrc.js'],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
