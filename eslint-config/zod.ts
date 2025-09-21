import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export const zod = compat
  .config({
    plugins: ['zod'],
    rules: {
      'zod/prefer-enum': 2,
      'zod/require-strict': 2,
    },
  })
  .map(config => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  }));
export default zod;
