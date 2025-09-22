export const markdown = [
  {
    files: ['**/*.md'],
    processor: 'markdown/markdown',
  },
  {
    files: ['**/*.md/**'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-undef': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-shadow': 'off',
      'no-alert': 'off',
      'no-restricted-imports': 'off',
      'unicorn/filename-case': 'off',
      'prettier/prettier': 'off',
      '@stylistic/eol-last': 'off',
      '@stylistic/no-trailing-spaces': 'off',
      '@stylistic/comma-dangle': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-undef': 'off',
      'react/no-unescaped-entities': 'off',
      'canonical/filename-match-exported': 'off',
    },
  },
];

export default markdown;