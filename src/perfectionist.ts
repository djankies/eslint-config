export const perfectionist = [
  {
    rules: {
      // ...tsConfigs.perfectionist.rules,
      'perfectionist/sort-object-keys': 0,
      'perfectionist/sort-jsx-props': 0,
      'perfectionist/sort-imports': 0,
    },
    name: 'eslint-config-perfectionist',
    ignores: ['**/*.config.{js,ts}'],
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
];

export default perfectionist;
