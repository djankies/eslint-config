/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// @ts-expect-error - no types available
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import { type FlatConfigArray } from './types.js';

const tailwind: FlatConfigArray = [
  {
    plugins: {
      tailwindcss: tailwindPlugin,
    },
    name: 'tailwind/setup',
  },
  {
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...tailwindPlugin.configs.recommended.rules,
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/classnames-order': 'warn',
    },
    settings: {
      tailwindcss: {
        cssFiles: [
          '**/*.css',
          '!**/node_modules/**',
          '!**/.*',
          '!**/dist/**',
          '!**/build/**',
          '!**/.next/**',
        ],
        callees: ['cn', 'clsx', 'cva', 'classnames', 'twMerge'],
        config: 'tailwind.config.ts',
        classRegex: '^className$',
        skipClassAttribute: false,
        removeDuplicates: true,
        whitelist: [],
        tags: [],
      },
    },
    files: ['**/app/**/*.{js,jsx,ts,tsx}'],
    name: 'tailwind/rules',
  },
];

export default tailwind;
