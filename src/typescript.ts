import { configs, parser } from 'typescript-eslint';

type ESLintConfig = Record<string, unknown>;

const CRITICAL_TYPESCRIPT_RULES = {
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: {
        attributes: false,
        properties: true,
        arguments: true,
        variables: true,
        returns: true,
      },
      checksConditionals: true,
    },
  ],
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: false,
    },
  ],
  '@typescript-eslint/consistent-type-exports': [
    'error',
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreIIFE: true,
      ignoreVoid: true,
    },
  ],
  '@typescript-eslint/no-base-to-string': [
    'error',
    {
      ignoredTypeNames: ['RegExp'],
    },
  ],
  '@typescript-eslint/no-meaningless-void-operator': [
    'error',
    {
      checkNever: true,
    },
  ],
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/dot-notation': 'error',
};

const QUALITY_TYPESCRIPT_RULES = {
  '@typescript-eslint/prefer-nullish-coalescing': [
    'warn',
    {
      ignoreMixedLogicalExpressions: true,
      ignoreConditionalTests: true,
    },
  ],
  '@typescript-eslint/require-array-sort-compare': [
    'warn',
    {
      ignoreStringArrays: false,
    },
  ],
  '@typescript-eslint/prefer-readonly': [
    'warn',
    {
      onlyInlineLambdas: true,
    },
  ],
  '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', args: 'after-used' }],
  '@typescript-eslint/unbound-method': [
    'warn',
    {
      ignoreStatic: true,
    },
  ],
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
  '@typescript-eslint/restrict-template-expressions': 'warn',
  '@typescript-eslint/prefer-promise-reject-errors': 'warn',
  '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
  '@typescript-eslint/return-await': ['warn', 'always'],
  '@typescript-eslint/prefer-return-this-type': 'warn',
  '@typescript-eslint/promise-function-async': 'warn',
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/no-empty-object-type': 'warn',
  '@typescript-eslint/prefer-regexp-exec': 'warn',
  '@typescript-eslint/no-empty-function': 'warn',
  '@typescript-eslint/no-unsafe-return': 'warn',
  '@typescript-eslint/only-throw-error': 'warn',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-implied-eval': 'warn',
  '@typescript-eslint/no-misused-new': 'warn',
  '@typescript-eslint/require-await': 'warn',
};

const ALL_TYPESCRIPT_RULES = {
  ...CRITICAL_TYPESCRIPT_RULES,
  ...QUALITY_TYPESCRIPT_RULES,
};

export const typescript: ESLintConfig[] = [
  ...configs.recommendedTypeChecked.map(config => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),
  ...configs.stylisticTypeChecked.map(config => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          defaultProject: './tsconfig.eslint.json',
          allowDefaultProject: ['*.js', '*.mjs'],
        },
        tsconfigRootDir: process.cwd(),
      },
      parser,
    },
    rules: ALL_TYPESCRIPT_RULES,
    files: ['**/*.{ts,tsx}'],
  },
];

export default typescript;
