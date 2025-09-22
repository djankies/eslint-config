import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export const zod = compat
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
