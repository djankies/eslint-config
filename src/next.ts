import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: process.cwd(), // Use current working directory (project root)
});

export const nextConfig = [
  ...compat.extends('plugin:@next/next/recommended', 'plugin:@next/next/core-web-vitals').map(config => ({
    ...config,
    files: ['{app,components}/**/*.{js,jsx,ts,tsx}'],
  })),
  {
    rules: {
      '@next/next/no-before-interactive-script-outside-document': 'error',
      '@next/next/no-script-component-in-head': 'error',
      '@next/next/no-document-import-in-page': 'error',
      '@next/next/no-head-import-in-document': 'error',
      '@next/next/no-styled-jsx-in-document': 'warn',
      '@next/next/no-title-in-document-head': 'warn',
      '@next/next/google-font-preconnect': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',
      '@next/next/google-font-display': 'warn',
      '@next/next/no-page-custom-font': 'warn',
      '@next/next/next-script-for-ga': 'warn',
      '@next/next/no-duplicate-head': 'error',
      '@next/next/inline-script-id': 'error',
      '@next/next/no-head-element': 'error',
      '@next/next/no-sync-scripts': 'warn',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-css-tags': 'warn',
      '@next/next/no-typos': 'warn',
    },
    files: ['{app,components}/**/*.{js,jsx,ts,tsx}'],
  },
];

export default nextConfig;
