module.exports = {
  plugins: [],
  extends: ["stylelint-config-standard-vue/scss", "stylelint-config-recess-order", "stylelint-config-prettier"],
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["include", "mixin", "each", "extend"] }],
  },
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      customSyntax: "postcss-html",
    },
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
