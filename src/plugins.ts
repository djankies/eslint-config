/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Central Plugin Registry
// All ESLint plugins are imported and exported once here to avoid conflicts

import { configs as tseslintConfigs, plugin as tseslintPlugin } from 'typescript-eslint';
// @ts-expect-error - no types available
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
// @ts-expect-error - no types available
import noUnsanitizedPlugin from 'eslint-plugin-no-unsanitized';
import * as reactHooksPlugin from 'eslint-plugin-react-hooks';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
// @ts-expect-error - no types available
import boundariesPlugin from 'eslint-plugin-boundaries';
import stylisticPlugin from '@stylistic/eslint-plugin';
// @ts-expect-error - no types available
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import canonicalPlugin from 'eslint-plugin-canonical';
import deMorganPlugin from 'eslint-plugin-de-morgan';
import prettierPlugin from 'eslint-plugin-prettier';
// @ts-expect-error - no types available
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
// @ts-expect-error - no types available
import promisePlugin from 'eslint-plugin-promise';
import unicornPlugin from 'eslint-plugin-unicorn';
import importPlugin from 'eslint-plugin-import';
import regexpPlugin from 'eslint-plugin-regexp';
import vitestPlugin from 'eslint-plugin-vitest';
import { FlatCompat } from '@eslint/eslintrc';
import jsoncPlugin from 'eslint-plugin-jsonc';
import reactPlugin from 'eslint-plugin-react';
import yamlPlugin from 'eslint-plugin-yml';
import zodPlugin from 'eslint-plugin-zod';
import nPlugin from 'eslint-plugin-n';

// Export all plugins as a single object
export const plugins: any = {
  'eslint-comments': eslintCommentsPlugin as any,
  'no-unsanitized': noUnsanitizedPlugin as any,
  'testing-library': testingLibraryPlugin,
  '@typescript-eslint': tseslintPlugin,
  boundaries: boundariesPlugin as any,
  perfectionist: perfectionistPlugin,
  tailwindcss: tailwindPlugin as any,
  'jsx-a11y': jsxA11yPlugin as any,
  'react-hooks': reactHooksPlugin,
  '@stylistic': stylisticPlugin,
  promise: promisePlugin as any,
  'de-morgan': deMorganPlugin,
  canonical: canonicalPlugin,
  '@next/next': nextPlugin,
  prettier: prettierPlugin,
  unicorn: unicornPlugin,
  import: importPlugin,
  regexp: regexpPlugin,
  vitest: vitestPlugin,
  jsonc: jsoncPlugin,
  react: reactPlugin,
  yml: yamlPlugin,
  zod: zodPlugin,
  n: nPlugin, // eslint-disable-line id-length
};

// Plugin name mapping for rule parsing
export const PLUGIN_MAP: Record<string, string> = {
  '@next': '@next/next',
  '@stylistic': '@stylistic',
  '@typescript-eslint': '@typescript-eslint',
  boundaries: 'boundaries',
  'react-hooks': 'react-hooks',
  canonical: 'canonical',
  'de-morgan': 'de-morgan',
  'eslint-comments': 'eslint-comments',
  import: 'import',
  jsonc: 'jsonc',
  'jsx-a11y': 'jsx-a11y',
  n: 'n', // eslint-disable-line id-length
  'no-unsanitized': 'no-unsanitized',
  perfectionist: 'perfectionist',
  prettier: 'prettier',
  promise: 'promise',
  react: 'react',
  regexp: 'regexp',
  tailwindcss: 'tailwindcss',
  'testing-library': 'testing-library',
  unicorn: 'unicorn',
  vitest: 'vitest',
  yml: 'yml',
  zod: 'zod',
};

export const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

export const tsConfigs: any = {
  perfectionist: perfectionistPlugin.configs['recommended-line-length'],
  recommendedTypeChecked: tseslintConfigs.recommendedTypeChecked,
  stylisticTypeChecked: tseslintConfigs.stylisticTypeChecked,
  eslintRecommended: tseslintConfigs.eslintRecommended,
};

export default plugins;

export { parser as typescriptParser } from 'typescript-eslint';
