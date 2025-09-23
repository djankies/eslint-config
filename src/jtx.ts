import { type FlatConfigArray } from './types.js';

const jtxConfig: FlatConfigArray = [
  {
    rules: {
      'de-morgan/no-negated-conjunction': 'error',
      'de-morgan/no-negated-disjunction': 'error',
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
];

export default jtxConfig;
