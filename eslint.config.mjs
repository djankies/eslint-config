import * as eslintConfigs from './dist/index.js';
import { plugins, PLUGIN_MAP } from './dist/plugins.js';
import { defineConfig } from 'eslint/config';

const ensureArray = config => {
  if (!config) {
    return [];
  }

  return Array.isArray(config) ? config : [config];
};

const applyPlugins = configs => {
  return configs.map(configInConfigs => {
    if (!configInConfigs.rules) {
      return configInConfigs;
    }

    if (configInConfigs.plugins) {
      return configInConfigs;
    }

    const neededPlugins = {};

    for (const ruleName of Object.keys(configInConfigs.rules)) {
      const [pluginName] = ruleName.split('/');
      const mappedPlugin = PLUGIN_MAP[pluginName];

      if (mappedPlugin && plugins[mappedPlugin]) {
        neededPlugins[mappedPlugin] = plugins[mappedPlugin];
      }
    }

    if (Object.keys(neededPlugins).length === 0) {
      return configInConfigs;
    }

    return {
      ...configInConfigs,
      plugins: neededPlugins,
    };
  });
};

const applyConfig = (configName, omitPlugins = false) => {
  const configArray = ensureArray(eslintConfigs[configName]);
  // For markdown config, return as-is since it already has the necessary plugins
  if (configName === 'markdownConfig') {
    return configArray;
  }

  return omitPlugins ? configArray : applyPlugins(configArray);
};

export default defineConfig([
  ...ensureArray(eslintConfigs.ignoresConfig),
  ...applyConfig('canonicalConfig'),
  ...applyConfig('typescriptConfig', true),
  ...applyConfig('importsConfig'),
  ...applyConfig('reactConfig'),
  ...applyConfig('nextConfig', true),
  ...applyConfig('tailwindConfig'),
  ...applyConfig('a11yConfig'),
  ...applyConfig('browserConfig'),
  ...applyConfig('nodeConfig'),
  ...applyConfig('jsonConfig'),
  ...applyConfig('yamlConfig'),
  ...applyConfig('markdownConfig'),
  ...applyConfig('regexpConfig'),
  ...applyConfig('zodConfig'),
  ...applyConfig('jtxConfig'),
  ...applyConfig('boundariesConfig'),
  ...applyConfig('vitestConfig'),
  ...applyConfig('mocksConfig'),
  ...applyConfig('amplifyConfig'),
  ...applyConfig('configsConfig'),
  ...applyConfig('tsconfigsConfig'),
  ...applyConfig('perfectionistConfig'),
  ...applyConfig('prettierConfig'),
]);
