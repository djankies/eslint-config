/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Linter } from 'eslint';
// @ts-expect-error - no types available
import tailwindPlugin from 'eslint-plugin-tailwindcss';

const tailwind: Linter.Config[] = [
  {
    name: 'tailwind/setup',
    plugins: {
      tailwindcss: tailwindPlugin,
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    name: 'tailwind/rules',
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...tailwindPlugin.configs.recommended.rules,
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'clsx', 'cva', 'classnames', 'twMerge'],
        classRegex: '^(class|className|tw)$',
        config: 'tailwind.config.ts',
        cssFiles: [
          '**/*.css',
          '!**/node_modules/**',
          '!**/.*',
          '!**/dist/**',
          '!**/build/**',
          '!**/.next/**',
        ],
        removeDuplicates: true,
        skipClassAttribute: false,
        tags: [],
        whitelist: [],
      },
    },
  },
];

export default tailwind;
