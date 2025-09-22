import globals from 'globals';

export const browserConfig = [
  {
    rules: {
      'unicorn/prefer-dom-node-text-content': 2,
      'unicorn/prefer-keyboard-event-key': 2,
      'unicorn/prefer-dom-node-dataset': 2,
      'unicorn/prefer-dom-node-append': 2,
      'unicorn/prefer-dom-node-remove': 2,
      'unicorn/prefer-modern-dom-apis': 2,
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
