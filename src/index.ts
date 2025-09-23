import perfectionistConfig from './perfectionist.js';
import boundariesConfig from './boundaries.js';
import typescriptConfig from './typescript.js';
import canonicalConfig from './canonical.js';
import tsconfigsConfig from './tsconfigs.js';
import prettierConfig from './prettier.js';
import tailwindConfig from './tailwind.js';
import amplifyConfigImport from './amplify.js';
import browserConfigImport from './browser.js';
import configsConfigImport from './configs.js';
import ignoresConfig from './ignores.js';
import importsConfig from './imports.js';

import regexpConfig from './regexp.js';
import vitestConfig from './vitest.js';
import mocksConfigImport from './mocks.js';
import reactConfig from './react.js';
import a11yConfig from './a11y.js';
import jsonConfig from './json.js';
import nextConfigImport from './next.js';
import nodeConfigImport from './node.js';
import yamlConfig from './yaml.js';
import jtxConfig from './jtx.js';
import zodConfig from './zod.js';
import markdownConfig from './markdown.js';

import { plugins, PLUGIN_MAP } from './plugins.js';

export * from './ignores.js';
export * from './plugins.js';

interface Config {
  rules?: Record<string, unknown>;
  plugins?: Record<string, unknown>;
  [key: string]: unknown;
}

const ensureArray = (config: unknown): unknown[] => {
  if (!config) {
    return [];
  }

  return Array.isArray(config) ? config : [config];
};

const applyPlugins = (configs: unknown[]): unknown[] => {
  return configs.map(configInConfigs => {
    const typedConfig = configInConfigs as Config;
    if (!typedConfig.rules) {
      return configInConfigs;
    }

    if (typedConfig.plugins) {
      return configInConfigs;
    }

    const neededPlugins: Record<string, unknown> = {};

    for (const ruleName of Object.keys(typedConfig.rules)) {
      const [pluginName] = ruleName.split('/');
      const mappedPlugin = PLUGIN_MAP[pluginName];

      if (mappedPlugin && (plugins as Record<string, unknown>)[mappedPlugin]) {
        neededPlugins[mappedPlugin] = (plugins as Record<string, unknown>)[mappedPlugin];
      }
    }

    if (Object.keys(neededPlugins).length === 0) {
      return configInConfigs;
    }

    return {
      ...typedConfig,
      plugins: neededPlugins,
    };
  });
};

const applyConfig = (config: unknown, omitPlugins = false): unknown[] => {
  const configArray = ensureArray(config);
  return omitPlugins ? configArray : applyPlugins(configArray);
};

const flatConfig: unknown[] = [
  ...ensureArray(ignoresConfig),
  ...applyConfig(canonicalConfig),
  ...applyConfig(typescriptConfig, true), // Typescript-eslint provides its own plugins
  ...applyConfig(importsConfig),
  ...applyConfig(reactConfig),
  ...applyConfig(nextConfigImport, true), // Next provides its own plugins
  ...applyConfig(tailwindConfig),
  ...applyConfig(a11yConfig),
  ...applyConfig(browserConfigImport),
  ...applyConfig(nodeConfigImport),
  ...applyConfig(jsonConfig),
  ...applyConfig(yamlConfig),
  ...applyConfig(markdownConfig),
  ...applyConfig(regexpConfig),
  ...applyConfig(zodConfig),
  ...applyConfig(jtxConfig),
  ...applyConfig(boundariesConfig),
  ...applyConfig(vitestConfig),
  ...applyConfig(mocksConfigImport),
  ...applyConfig(amplifyConfigImport),
  ...applyConfig(configsConfigImport),
  ...applyConfig(tsconfigsConfig),
  ...applyConfig(perfectionistConfig),
  ...applyConfig(prettierConfig),
];

export { flatConfig };

export default flatConfig;

export { default as perfectionistConfig } from './perfectionist.js';
export { default as pluginsConfig } from './plugins.js';
export { default as typescriptConfig } from './typescript.js';
export { default as boundariesConfig } from './boundaries.js';
export { default as canonicalConfig } from './canonical.js';
export { default as tsconfigsConfig } from './tsconfigs.js';
export { default as prettierConfig } from './prettier.js';
export { default as tailwindConfig } from './tailwind.js';
export { default as amplifyConfig } from './amplify.js';
export { default as browserConfig } from './browser.js';

export { default as configsConfig } from './configs.js';
export { default as importsConfig } from './imports.js';
export { default as ignoresConfig } from './ignores.js';
export { default as regexpConfig } from './regexp.js';
export { default as vitestConfig } from './vitest.js';
export { default as mocksConfig } from './mocks.js';
export { default as reactConfig } from './react.js';
export { default as a11yConfig } from './a11y.js';
export { default as jsonConfig } from './json.js';
export { default as nextConfig } from './next.js';
export { default as nodeConfig } from './node.js';
export { default as yamlConfig } from './yaml.js';
export { default as jtxConfig } from './jtx.js';
export { default as zodConfig } from './zod.js';
export { default as markdownConfig } from './markdown.js';
