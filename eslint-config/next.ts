import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export const nextConfig = [
  ...compat.extends('next', 'next/core-web-vitals', 'next/typescript').map((config) => ({
    ...config,
    files: ['{app,components}/**/*.{js,jsx,ts,tsx}'],
  })),
  {
    files: ['{app,components}/**/*.{js,jsx,ts,tsx}'],
    rules: {
    '@next/next/google-font-display': 'warn',
    '@next/next/google-font-preconnect': 'warn',
    '@next/next/inline-script-id': 'error',
    '@next/next/next-script-for-ga': 'warn',
    '@next/next/no-before-interactive-script-outside-document': 'error',
    // Optional improvements (warnings)
    '@next/next/no-css-tags': 'warn',

    // Critical Next.js rules (errors)
    '@next/next/no-document-import-in-page': 'error',
    '@next/next/no-duplicate-head': 'error',
    '@next/next/no-head-element': 'error',
    '@next/next/no-head-import-in-document': 'error',
    '@next/next/no-html-link-for-pages': 'warn',
    // Core Web Vitals and Next.js best practices
    '@next/next/no-img-element': 'warn',
    '@next/next/no-page-custom-font': 'warn',

    '@next/next/no-script-component-in-head': 'error',
    '@next/next/no-styled-jsx-in-document': 'warn',
    '@next/next/no-sync-scripts': 'warn',
    '@next/next/no-title-in-document-head': 'warn',
    '@next/next/no-typos': 'warn',
    '@next/next/no-unwanted-polyfillio': 'warn',
    },
  },
];

export default nextConfig;
