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

export * from './ignores.js';
export * from './plugins.js';

const ensureArray = (config: any) => {
  if (!config) return [];
  return Array.isArray(config) ? config : [config];
};

const flatConfig = [
  ...ensureArray(ignoresConfig),
  ...ensureArray(canonicalConfig),
  ...ensureArray(typescriptConfig),
  ...ensureArray(importsConfig),
  ...ensureArray(reactConfig),
  ...ensureArray(nextConfig),
  ...ensureArray(tailwindConfig),
  ...ensureArray(a11yConfig),
  ...ensureArray(browserConfig),
  ...ensureArray(nodeConfig),
  ...ensureArray(jsonConfig),
  ...ensureArray(yamlConfig),
  ...ensureArray(regexpConfig),
  ...ensureArray(zodConfig),
  ...ensureArray(jtxConfig),
  ...ensureArray(boundariesConfig),
  ...ensureArray(vitestConfig),
  ...ensureArray(mocksConfig),
  ...ensureArray(amplifyConfig),
  ...ensureArray(configsConfig),
  ...ensureArray(tsconfigsConfig),
  ...ensureArray(perfectionistConfig),
  ...ensureArray(prettierConfig),
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
};
