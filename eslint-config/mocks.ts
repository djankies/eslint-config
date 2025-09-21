import tseslint from 'typescript-eslint';

export const mocksConfig = [{
  files: [
    '**/__mocks__/**/*',
    '**/*.mock.{js,jsx,ts,tsx}',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    // Allow more flexibility in mocks
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
  },
}];

export default mocksConfig;
