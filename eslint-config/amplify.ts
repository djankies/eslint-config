export const amplifyConfig = [{
  files: ['amplify/**/*.{js,ts}'],
  // Parser already configured by typescript.ts for all .ts files
  rules: {
    '@typescript-eslint/await-thenable': 'off',
    // Amplify backend files are infrastructure-as-code
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    'import/no-unresolved': 'warn',
    'no-console': 'off',
  },
}];

export default amplifyConfig;
