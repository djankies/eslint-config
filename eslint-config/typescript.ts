import tseslint from 'typescript-eslint';

const CRITICAL_TYPESCRIPT_RULES = {
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/consistent-type-exports': [
    'error',
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/no-base-to-string': [
    'error',
    {
      ignoredTypeNames: ['RegExp'],
    },
  ],
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: false,
    },
  ],
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreIIFE: true,
      ignoreVoid: true,
    },
  ],
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-meaningless-void-operator': [
    'error',
    {
      checkNever: true,
    },
  ],
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksConditionals: true,
      checksVoidReturn: {
        arguments: true,
        attributes: false,
        properties: true,
        returns: true,
        variables: true,
      },
    },
  ],
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  // Must haves (likely to break code if violated)
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
};

const QUALITY_TYPESCRIPT_RULES = {
  '@typescript-eslint/no-empty-function': 'warn',
  '@typescript-eslint/no-empty-object-type': 'warn',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-implied-eval': 'warn',
  '@typescript-eslint/no-misused-new': 'warn',
  '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
  '@typescript-eslint/no-unsafe-return': 'warn',
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/only-throw-error': 'warn',
  '@typescript-eslint/prefer-nullish-coalescing': [
    'warn',
    {
      ignoreConditionalTests: true,
      ignoreMixedLogicalExpressions: true,
    },
  ],
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/prefer-promise-reject-errors': 'warn',
  '@typescript-eslint/prefer-readonly': [
    'warn',
    {
      onlyInlineLambdas: true,
    },
  ],
  '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
  '@typescript-eslint/prefer-regexp-exec': 'warn',
  '@typescript-eslint/prefer-return-this-type': 'warn',
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/promise-function-async': 'warn',
  '@typescript-eslint/require-array-sort-compare': [
    'warn',
    {
      ignoreStringArrays: false,
    },
  ],
  '@typescript-eslint/require-await': 'warn',
  '@typescript-eslint/restrict-template-expressions': 'warn',
  '@typescript-eslint/return-await': ['warn', 'always'],
  '@typescript-eslint/unbound-method': [
    'warn',
    {
      ignoreStatic: true,
    },
  ],
};

const ALL_TYPESCRIPT_RULES = {
  ...CRITICAL_TYPESCRIPT_RULES,
  ...QUALITY_TYPESCRIPT_RULES,
};

export const typescript = [
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),
  ...tseslint.configs.stylisticTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs'],
          defaultProject: './tsconfig.eslint.json',
        },
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: ALL_TYPESCRIPT_RULES,
  },
];

export default typescript;
