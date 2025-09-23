import globals from 'globals';
import { type FlatConfigArray } from './types.js';

export const browserConfig: FlatConfigArray = [
  {
    rules: {
      'unicorn/prefer-dom-node-text-content': 1,
      'unicorn/prefer-keyboard-event-key': 1,
      'unicorn/prefer-dom-node-dataset': 1,
      'unicorn/prefer-dom-node-append': 1,
      'unicorn/prefer-dom-node-remove': 1,
      'unicorn/prefer-modern-dom-apis': 1,
      'no-unsanitized/property': 2,
      'no-unsanitized/method': 2,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    files: ['{app,components}/**/*.{js,jsx,ts,tsx}'],
  },
];

export default browserConfig;
