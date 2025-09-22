export const tsconfigs = [
  {
    rules: {
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/await-thenable': 'off',
    },
    files: ['*.config.ts', 'tailwind.config.ts'],
    name: 'eslint-config-tsconfigs',
  },
];

export default tsconfigs;
