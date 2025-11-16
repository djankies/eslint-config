import nextPlugin from '@next/eslint-plugin-next';
import { type FlatConfigArray } from './types.js';

export const nextConfig: FlatConfigArray = [
  {
    files: ['{app,components}/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      // eslint-disable-next-line import/no-named-as-default-member
      ...nextPlugin.configs.recommended.rules,
      // eslint-disable-next-line import/no-named-as-default-member
      ...nextPlugin.configs['core-web-vitals'].rules,
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
  },
];

export default nextConfig;
