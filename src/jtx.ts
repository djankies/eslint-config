import { type FlatConfigArray } from './types.js';

const jtxConfig: FlatConfigArray = [
  {
    rules: {
      'de-morgan/no-negated-conjunction': 'warn',
      'de-morgan/no-negated-disjunction': 'warn',
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
];

export default jtxConfig;
