export const markdown = [
  // Markdown-specific linting rules
  {
    files: ['**/*.md'],
    rules: {
      // Markdownlint rules for proper markdown formatting
      'markdownlint/md001': 'warn', // heading-increment - Heading levels should only increment by one level at a time
      'markdownlint/md003': ['warn', { style: 'consistent' }], // heading-style - Heading style
      'markdownlint/md004': ['warn', { style: 'dash' }], // ul-style - Unordered list style
      'markdownlint/md005': 'warn', // list-indent - Inconsistent indentation for list items at the same level
      'markdownlint/md007': ['warn', { indent: 2 }], // ul-indent - Unordered list indentation
      'markdownlint/md009': 'warn', // no-trailing-spaces - Trailing spaces
      'markdownlint/md010': 'warn', // no-hard-tabs - Hard tabs
      'markdownlint/md011': 'warn', // no-reversed-links - Reversed link syntax
      'markdownlint/md012': 'warn', // no-multiple-blanks - Multiple consecutive blank lines
      'markdownlint/md013': 'off', // line-length - Line length (disabled for flexibility)
      'markdownlint/md014': 'warn', // commands-show-output - Dollar signs used before commands without showing output
      'markdownlint/md018': 'warn', // no-missing-space-atx - No space after hash on atx style heading
      'markdownlint/md019': 'warn', // no-multiple-space-atx - Multiple spaces after hash on atx style heading
      'markdownlint/md022': 'warn', // blanks-around-headings - Headings should be surrounded by blank lines
      'markdownlint/md023': 'warn', // heading-start-left - Headings must start at the beginning of the line
      'markdownlint/md024': 'warn', // no-duplicate-heading - Multiple headings with the same content
      'markdownlint/md025': 'warn', // single-h1 - Multiple top-level headings in the same document
      'markdownlint/md026': 'warn', // no-trailing-punctuation - Trailing punctuation in heading
      'markdownlint/md027': 'warn', // no-multiple-space-blockquote - Multiple spaces after blockquote symbol
      'markdownlint/md029': ['warn', { style: 'ordered' }], // ol-prefix - Ordered list item prefix
      'markdownlint/md030': 'warn', // list-marker-space - Spaces after list markers
      'markdownlint/md031': 'warn', // blanks-around-fences - Fenced code blocks should be surrounded by blank lines
      'markdownlint/md032': 'warn', // blanks-around-lists - Lists should be surrounded by blank lines
      'markdownlint/md033': 'off', // no-inline-html - Inline HTML (disabled for flexibility)
      'markdownlint/md034': 'warn', // no-bare-urls - Bare URLs without angle brackets
      'markdownlint/md035': 'warn', // hr-style - Horizontal rule style
      'markdownlint/md036': 'warn', // no-emphasis-as-heading - Emphasis used instead of a heading
      'markdownlint/md037': 'warn', // no-space-in-emphasis - Spaces inside emphasis markers
      'markdownlint/md038': 'warn', // no-space-in-code - Spaces inside code span elements
      'markdownlint/md039': 'warn', // no-space-in-links - Spaces inside link text
      'markdownlint/md040': 'warn', // fenced-code-language - Fenced code blocks should have a language specified
      'markdownlint/md041': 'off', // first-line-h1 - First line in file should be a top-level heading (disabled for flexibility)
      'markdownlint/md042': 'warn', // no-empty-links - No empty links
      'markdownlint/md045': 'warn', // no-alt-text - Images should have alternate text (alt text)
      'markdownlint/md046': ['warn', { style: 'fenced' }], // code-block-style - Code block style
      'markdownlint/md047': 'warn', // single-trailing-newline - Files should end with a single newline character
      'markdownlint/md048': ['warn', { style: 'backtick' }], // code-fence-style - Code fence style
      'markdownlint/md049': 'warn', // emphasis-style - Emphasis style should be consistent
      'markdownlint/md050': 'warn', // strong-style - Strong style should be consistent
    },
  },
  // Process code blocks in markdown files
  {
    files: ['**/*.md'],
    processor: 'markdown/markdown',
  },
  // Rules for code blocks within markdown files
  {
    files: ['**/*.md/**'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-undef': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-shadow': 'off',
      'no-alert': 'off',
      'no-restricted-imports': 'off',
      'unicorn/filename-case': 'off',
      'prettier/prettier': 'off',
      '@stylistic/eol-last': 'off',
      '@stylistic/no-trailing-spaces': 'off',
      '@stylistic/comma-dangle': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-undef': 'off',
      'react/no-unescaped-entities': 'off',
      'canonical/filename-match-exported': 'off',
    },
  },
];

export default markdown;