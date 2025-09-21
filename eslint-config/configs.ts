export const configsConfig = [{
  files: [
    '*.config.{js,mjs,cjs}',
    'eslint.config.*',
    'next.config.*',
    'tailwind.config.*',
    'postcss.config.*',
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
  },
}];

export default configsConfig;
