import type { Linter } from 'eslint';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import configs from './eslint-config';
import { PLUGIN_MAP } from './src/plugins';

const { plugins } = configs.pluginsConfig;

const ensureArray = (config: unknown): Linter.Config[] => {
  if (!config) { return []; }
  return Array.isArray(config) ? config : [config];
};

const applyPlugins = (configs: Linter.Config[]): Linter.Config[] => {

  return configs.map((config) => {
    if (!config.rules) { return config; }

    const neededPlugins: Record<string, unknown> = {};

    for (const ruleName of Object.keys(config.rules)) {
      const [pluginName] = ruleName.split('/');
      const mappedPlugin = PLUGIN_MAP[pluginName];

      if (mappedPlugin && (plugins as Record<string, unknown>)[mappedPlugin]) {
        neededPlugins[mappedPlugin] = (plugins as Record<string, unknown>)[mappedPlugin];
      }
    }

    if (Object.keys(neededPlugins).length === 0) { return config; }

    return {
      ...config,
      plugins: {
        ...neededPlugins,
        ...config.plugins,
      },
    };
  });
};

const applyConfig = (configName: keyof typeof configs, omitPlugins = false) => {
  const configArray = ensureArray((configs[configName] as any).default);
  return omitPlugins ? configArray : applyPlugins(configArray);
};

const config: Linter.Config[] = [
  ...ensureArray(configs.ignoresConfig.globalIgnores),

  {
    plugins: {
      ...plugins,
      perfectionist: perfectionistPlugin,
    },
  },

  {
    files: [
      '{app,components,lib,hooks,eslint-config}/**/*.{js,jsx,ts,tsx}',
      '*.{js,mjs,ts}',
    ],
    rules: {
      ...perfectionistPlugin.configs['recommended-natural'].rules,
      // Disable perfectionist rules that conflict with prettier and other formatters
      'perfectionist/sort-interfaces': 0,
      'perfectionist/sort-object-types': 0,
      'perfectionist/sort-objects': 0,
      'perfectionist/sort-jsx-props': 0,
      'perfectionist/sort-imports': 0,
    },
  },

  ...applyConfig('canonicalConfig'),
  ...applyConfig('typescriptConfig', true),
  ...applyConfig('importsConfig'),
  ...applyConfig('reactConfig'),
  ...applyConfig('nextConfig'),
  ...applyConfig('tailwindConfig'),
  ...applyConfig('a11yConfig'),
  ...applyConfig('browserConfig'),
  ...applyConfig('nodeConfig'),
  ...applyConfig('jsonConfig'),
  ...applyConfig('yamlConfig'),
  ...applyConfig('regexpConfig'),
  ...applyConfig('zodConfig'),
  ...applyConfig('jtxConfig'),
  ...applyConfig('boundariesConfig'),
  ...applyConfig('vitestConfig'),
  ...applyConfig('mocksConfig'),
  ...applyConfig('amplifyConfig'),
  ...applyConfig('configsConfig'),
  ...applyConfig('tsconfigsConfig'),
  ...applyConfig('prettierConfig'),
];

export default config;
