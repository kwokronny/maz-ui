/* eslint-disable unicorn/prefer-module */
module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard-scss',
    'stylelint-config-tailwindcss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configurationg
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['screen', 'layer', 'tailwind', 'each', 'for'] }],
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['screen', 'layer', 'tailwind', 'each'] }],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep'] }],
    'selector-class-pattern': undefined,
    'no-descending-specificity': undefined,
    'function-no-unknown': [true, { ignoreFunctions: ['v-bind'] }],
  },
}
