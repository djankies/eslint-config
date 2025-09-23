import globals from 'globals';
import { type FlatConfigArray } from './types.js';

export const vitest: FlatConfigArray = [
  {
    rules: {
      'vitest/no-focused-tests': [
        2,
        {
          fixable: false,
        },
      ],
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-empty-function': 'off',

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',

      'import/no-extraneous-dependencies': 'off',
      'vitest/no-conditional-tests': 2,
      'vitest/max-nested-describe': 1,

      'import/no-unresolved': 'warn',
      'vitest/no-identical-title': 2,
      'vitest/no-disabled-tests': 2,
      'vitest/lower-case-title': 0,
      'vitest/expect-expect': 2,
      'no-console': 'off',
    },
    files: [
      '**/*.{test,spec}.{js,jsx,ts,tsx}',
      '**/__tests__/**/*',
      '**/tests/**/*',
      'vitest.config.ts',
      'vitest.setup.tsx',
    ],
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
  },
];

export default vitest;
