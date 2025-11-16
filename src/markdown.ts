// Import plugins to ensure they're available
import { plugins } from './plugins.js';
import { type FlatConfigArray } from './types.js';

export const markdown: FlatConfigArray = [
  // Process markdown files to extract code blocks
  {
    files: ['**/*.md'],
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      markdown: plugins.markdown,
    },
    processor: 'markdown/markdown',
  },
  // Relaxed rules for code blocks inside markdown
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
      'canonical/filename-match-regex': 'off',
      'unicorn/prefer-export-from': 'off',
      'import/no-named-as-default': 'off',
      'boundaries/element-types': 'off',
      'boundaries/entry-point': 'off',
      'boundaries/external': 'off',
      'boundaries/no-unknown': 'off',
      'boundaries/no-ignored': 'off',
      'boundaries/no-private': 'off',
    },
  },
];

export default markdown;
