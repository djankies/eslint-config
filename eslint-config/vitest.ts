export const vitest = [
  {
    files: [
      '**/*.{test,spec}.{js,jsx,ts,tsx}',
      '**/__tests__/**/*',
      '**/tests/**/*',
      'vitest.config.ts',
      'vitest.setup.tsx',
    ],
    languageOptions: {
      globals: {},
    },
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      // Allow more flexibility in tests
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      'import/no-extraneous-dependencies': 'off',

      // Import rules for tests
      'import/no-unresolved': 'warn',
      // Allow console in tests
      'no-console': 'off',
      'vitest/expect-expect': 2,
      'vitest/lower-case-title': 0,
      'vitest/max-nested-describe': 2,
      'vitest/no-conditional-tests': 2,

      'vitest/no-disabled-tests': 2,
      'vitest/no-focused-tests': [
        2,
        {
          fixable: false,
        },
      ],

      'vitest/no-identical-title': 2,
    },
  },
];

export default vitest;
