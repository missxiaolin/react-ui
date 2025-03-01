/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard'],
    customSyntax: 'postcss-styled-syntax',
    rules: {
        // 'unit-allowed-list': ['em'] // 只是测试使用em单位
        'block-no-empty': true,
        'comment-empty-line-before': null,
        'selector-not-notation': null
    }
}
