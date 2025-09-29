import { type FlatConfigArray } from './types.js';

export const imports: FlatConfigArray = [
  {
    rules: {
      'import/no-extraneous-dependencies': 0,
      'import/no-duplicates': [
        2,
        {
          considerQueryString: true,
          'prefer-inline': true,
        },
      ],
      'import/no-useless-path-segments': [
        2,
        {
          noUselessIndex: true,
        },
      ],
      'import/consistent-type-specifier-style': [1, 'prefer-inline'],
      'import/no-named-as-default-member': 'warn',
      'import/no-anonymous-default-export': 0,
      'import/no-relative-parent-imports': 0,
      'import/dynamic-import-chunkname': 0,
      'import/no-import-module-exports': 0,
      'import/no-webpack-loader-syntax': 2,
      'import/prefer-default-export': 0,
      'import/no-self-import': 'error',
      'import/newline-after-import': 1,
      'import/no-relative-packages': 0,
      'import/no-unassigned-import': 2,
      'import/no-internal-modules': 0,
      'import/no-named-as-default': 2,
      'import/no-restricted-paths': 0,
      'import/no-dynamic-require': 2,
      'import/no-mutable-exports': 2,
      'import/no-default-export': 0,
      'import/no-nodejs-modules': 0,
      'import/no-unused-modules': 0,
      'import/max-dependencies': 0,
      'import/no-absolute-path': 2,
      'import/no-named-default': 2,
      'import/no-named-export': 0,
      'import/no-cycle': 0,
      'import/group-exports': 0,
      'import/no-deprecated': 0,
      'import/no-unresolved': 0,
      'import/exports-last': 0,
      'import/no-namespace': 0,
      'import/no-commonjs': 0,
      'import/unambiguous': 0,
      'import/extensions': 0,
      'import/namespace': 0,
      'import/default': 2,
      'import/export': 2,
      'import/no-amd': 2,
      'import/first': 1,
      'import/named': 0,
      'import/order': 0,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    files: ['**/*.{ts,tsx}'],
  },
];

export default imports;
