import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import importSort from 'eslint-plugin-simple-import-sort'

export default tseslint.config({
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,js}'],
    ignores: ['apps/**/*/{tmp,.dumi}/**/*', '*.js', '**/*/build/**/*', '**/*/es/**/*', '**/*/dist/**/*'],
    rules: {
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        'no-unused-vars': 'error',
        'no-undef': 'warn',
        'no-console': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-unused-vars': 'off'
    },
    languageOptions: {
        parser: tseslint.parser,
        globals: {
            ...globals.browser,
            ...globals.node
        },
        parserOptions: {
            project: ['./tsconfig.eslint.json', '**/*/tsconfig.json'],
            tsconfigRootDir: import.meta.dirname
        }
    },
    plugins: { 'simple-import-sort': importSort }
})
