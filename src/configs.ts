import { type FlatConfigArray } from './types.js';

export const configsConfig: FlatConfigArray = [
  {
    files: [
      '*.config.{js,mjs,cjs}',
      'eslint.config.*',
      'next.config.*',
      'tailwind.config.*',
      'postcss.config.*',
    ],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'n/no-process-env': 'off',
    },
  },
];

export default configsConfig;
