import yamlEslintParser from 'yaml-eslint-parser';
import { type FlatConfigArray } from './types.js';

export const yaml: FlatConfigArray = [
  {
    rules: {
      'yml/sort-keys': [
        1,
        'asc',
        {
          caseSensitive: false,
          natural: true,
        },
      ],
      'yml/quotes': [
        1,
        {
          avoidEscape: true,
          prefer: 'single',
        },
      ],
      'yml/no-multiple-empty-lines': [
        1,
        {
          max: 0,
        },
      ],
      'yml/block-mapping-question-indicator-newline': 1,
      'yml/block-sequence-hyphen-indicator-newline': 1,
      'yml/vue-custom-block/no-parsing-error': 2,
      'yml/flow-sequence-bracket-newline': 1,
      'yml/flow-sequence-bracket-spacing': 1,
      'yml/block-sequence': [1, 'always'],
      'yml/flow-mapping-curly-newline': 1,
      'yml/flow-mapping-curly-spacing': 1,
      'yml/no-empty-sequence-entry': 2,
      'yml/no-irregular-whitespace': 2,
      'yml/no-empty-mapping-value': 2,
      'yml/sort-sequence-values': 0,
      'yml/require-string-key': 2,
      'yml/no-empty-document': 2,
      'yml/key-name-casing': 0,
      'yml/spaced-comment': 1,
      'yml/block-mapping': 1,
      'yml/no-tab-indent': 1,
      'yml/no-empty-key': 2,
      'yml/plain-scalar': 0,
      'yml/indent': [1, 2],
      'yml/key-spacing': 1,
    },
    languageOptions: {
      parser: yamlEslintParser,
    },
    files: ['**/*.yaml', '**/*.yml'],
  },
];

export default yaml;
