/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Central Plugin Registry
// All ESLint plugins are imported and exported once here to avoid conflicts

import { FlatCompat } from '@eslint/eslintrc';
import nextPlugin from '@next/eslint-plugin-next';
import stylisticPlugin from '@stylistic/eslint-plugin';
// @ts-expect-error - no types available
import boundariesPlugin from 'eslint-plugin-boundaries';
import canonicalPlugin from 'eslint-plugin-canonical';
import deMorganPlugin from 'eslint-plugin-de-morgan';
// @ts-expect-error - no types available
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import jsoncPlugin from 'eslint-plugin-jsonc';
// @ts-expect-error - no types available
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nPlugin from 'eslint-plugin-n';
// @ts-expect-error - no types available
import noUnsanitizedPlugin from 'eslint-plugin-no-unsanitized';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import prettierPlugin from 'eslint-plugin-prettier';
// @ts-expect-error - no types available
import promisePlugin from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import regexpPlugin from 'eslint-plugin-regexp';
// @ts-expect-error - no types available
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import unicornPlugin from 'eslint-plugin-unicorn';
import vitestPlugin from 'eslint-plugin-vitest';
import yamlPlugin from 'eslint-plugin-yml';
import zodPlugin from 'eslint-plugin-zod';
import { configs as tseslintConfigs, plugin as tseslintPlugin } from 'typescript-eslint';

// Export all plugins as a single object
export const plugins = {
  '@next/next': nextPlugin,
  '@stylistic': stylisticPlugin,
  '@typescript-eslint': tseslintPlugin,
  boundaries: boundariesPlugin as any,
  canonical: canonicalPlugin,
  'de-morgan': deMorganPlugin,
  'eslint-comments': eslintCommentsPlugin as any,
  import: importPlugin,
  jsonc: jsoncPlugin,
  'jsx-a11y': jsxA11yPlugin as any,
  n: nPlugin, // eslint-disable-line id-length
  'no-unsanitized': noUnsanitizedPlugin as any,
  perfectionist: perfectionistPlugin,
  prettier: prettierPlugin,
  promise: promisePlugin as any,
  react: reactPlugin,
  'react-hooks': reactHooksPlugin,
  regexp: regexpPlugin,
  tailwindcss: tailwindPlugin as any,
  'testing-library': testingLibraryPlugin,
  unicorn: unicornPlugin,
  vitest: vitestPlugin,
  yml: yamlPlugin,
  zod: zodPlugin,
};

export const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export const tsConfigs = {
  eslintRecommended: tseslintConfigs.eslintRecommended,
  recommendedTypeChecked: tseslintConfigs.recommendedTypeChecked,
  stylisticTypeChecked: tseslintConfigs.stylisticTypeChecked,
};

export default plugins;

export { parser as typescriptParser } from 'typescript-eslint';
