import { type FlatConfigArray } from './types.js';

export const amplifyConfig: FlatConfigArray = [
  {
    // Parser already configured by typescript.ts for all .ts files
    rules: {
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/await-thenable': 'off',
      'import/no-unresolved': 'warn',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
      'canonical/filename-match-regex': 'off',
    },
    files: ['amplify/**/*.{js,ts}'],
  },
];

export default amplifyConfig;
