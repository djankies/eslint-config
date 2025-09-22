import perfectionistConfig from './perfectionist.js';
import boundariesConfig from './boundaries.js';
import typescriptConfig from './typescript.js';
import canonicalConfig from './canonical.js';
import tsconfigsConfig from './tsconfigs.js';
import prettierConfig from './prettier.js';
import tailwindConfig from './tailwind.js';
import amplifyConfig from './amplify.js';
import browserConfig from './browser.js';
import configsConfig from './configs.js';
import ignoresConfig from './ignores.js';
import importsConfig from './imports.js';
import pluginsConfig from './plugins.js';
import regexpConfig from './regexp.js';
import vitestConfig from './vitest.js';
import mocksConfig from './mocks.js';
import reactConfig from './react.js';
import a11yConfig from './a11y.js';
import jsonConfig from './json.js';
import nextConfig from './next.js';
import nodeConfig from './node.js';
import yamlConfig from './yaml.js';
import jtxConfig from './jtx.js';
import zodConfig from './zod.js';
import markdownConfig from './markdown.js';

export * from './ignores.js';
export * from './plugins.js';

import { plugins, PLUGIN_MAP } from './plugins.js';

const ensureArray = (config: any) => {
  if (!config) return [];
  return Array.isArray(config) ? config : [config];
};

const applyPlugins = (configs: any[]) => {
  return configs.map(configInConfigs => {
    if (!configInConfigs.rules) {
      return configInConfigs;
    }

    if (configInConfigs.plugins) {
      return configInConfigs;
    }

    const neededPlugins: any = {};

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

const applyConfig = (config: any, omitPlugins = false) => {
  const configArray = ensureArray(config);
  return omitPlugins ? configArray : applyPlugins(configArray);
};

const flatConfig = [
  ...ensureArray(ignoresConfig),
  ...applyConfig(canonicalConfig),
  ...applyConfig(typescriptConfig, true), // typescript-eslint provides its own plugins
  ...applyConfig(importsConfig),
  ...applyConfig(reactConfig),
  ...applyConfig(nextConfig, true), // next provides its own plugins
  ...applyConfig(tailwindConfig),
  ...applyConfig(a11yConfig),
  ...applyConfig(browserConfig),
  ...applyConfig(nodeConfig),
  ...applyConfig(jsonConfig),
  ...applyConfig(yamlConfig),
  ...applyConfig(markdownConfig),
  ...applyConfig(regexpConfig),
  ...applyConfig(zodConfig),
  ...applyConfig(jtxConfig),
  ...applyConfig(boundariesConfig),
  ...applyConfig(vitestConfig),
  ...applyConfig(mocksConfig),
  ...applyConfig(amplifyConfig),
  ...applyConfig(configsConfig),
  ...applyConfig(tsconfigsConfig),
  ...applyConfig(perfectionistConfig),
  ...applyConfig(prettierConfig),
];

export { flatConfig };

export default flatConfig;

export {
  perfectionistConfig,
  boundariesConfig,
  typescriptConfig,
  canonicalConfig,
  tsconfigsConfig,
  prettierConfig,
  tailwindConfig,
  amplifyConfig,
  browserConfig,
  configsConfig,
  ignoresConfig,
  importsConfig,
  pluginsConfig,
  regexpConfig,
  vitestConfig,
  mocksConfig,
  reactConfig,
  a11yConfig,
  jsonConfig,
  nextConfig,
  nodeConfig,
  yamlConfig,
  jtxConfig,
  zodConfig,
  markdownConfig,
};
