import { type FlatConfigArray } from './types.js';

export const mocksConfig: FlatConfigArray = [
  {
    rules: {
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      // Allow more flexibility in mocks
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      'no-console': 'off',
    },
    files: ['**/__mocks__/**/*', '**/*.mock.{js,jsx,ts,tsx}'],
  },
];

export default mocksConfig;
