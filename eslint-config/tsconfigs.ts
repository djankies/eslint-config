export const tsconfigs = [
  {
    files: ['*.config.ts', 'tailwind.config.ts'],
    name: 'eslint-config-tsconfigs',
    rules: {
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
    },
  },
];

export default tsconfigs;
