export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'de-morgan/no-negated-conjunction': 'error',
      'de-morgan/no-negated-disjunction': 'error',
    },
  },
];
