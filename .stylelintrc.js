module.exports = {
  plugins: [],
  extends: [
    'stylelint-config-standard-vue/scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
}
