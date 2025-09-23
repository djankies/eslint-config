import { FlatCompat } from '@eslint/eslintrc';
import { type FlatConfigArray } from './types.js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export const zod: FlatConfigArray = compat
  .config({
    rules: {
      'zod/require-strict': 2,
      'zod/prefer-enum': 2,
    },
    plugins: ['zod'],
  })
  .map(config => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  }));
export default zod;
