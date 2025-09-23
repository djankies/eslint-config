/* eslint-disable n/no-process-exit */
/* eslint-disable no-console */
import { ESLint } from 'eslint';
import eslintConfig from './dist/index.js';

const validateConfig = async () => {
  const failures = [];
  const assert = (condition, message) => {
    if (!condition) {
      failures.push(message);
    }

    console.assert(condition, message);
    return condition;
  };

  try {
    // Validate config structure
    const isArray = assert(
      Array.isArray(eslintConfig),
      '❌ Config must be an array for flat config',
    );
    console.log('Config Structure:', isArray ? '✅' : '❌');

    // Create an ESLint instance with the config
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: eslintConfig,
      cache: false,
    });

    // Test that the config can be loaded
    let configLoaded = false;
    try {
      await eslint.calculateConfigForFile('test.js');
      configLoaded = true;
    } catch {
      configLoaded = false;
    }

    assert(configLoaded, '❌ Failed to load config');
    console.log('Config Loaded:', configLoaded ? '✅' : '❌');

    // Check config properties
    let hasFiles = false;
    let hasIgnores = false;
    let hasRules = false;
    let hasPlugins = false;

    for (const configItem of eslintConfig) {
      assert(
        typeof configItem === 'object' && configItem !== null,
        '❌ Invalid config object found',
      );

      if (configItem.files) {
        hasFiles = true;
      }

      if (configItem.ignores) {
        hasIgnores = true;
      }

      if (configItem.rules) {
        hasRules = true;
      }

      if (configItem.plugins) {
        hasPlugins = true;
      }
    }

    assert(hasFiles, '❌ No file patterns found');
    assert(hasIgnores, '❌ No ignore patterns found');
    assert(hasRules, '❌ No rules found');
    assert(hasPlugins, '❌ No plugins found');

    console.log('Has Files:', hasFiles ? '✅' : '❌');
    console.log('Has Ignores:', hasIgnores ? '✅' : '❌');
    console.log('Has Rules:', hasRules ? '✅' : '❌');
    console.log('Has Plugins:', hasPlugins ? '✅' : '❌');

    // Test linting
    let canLint = false;
    try {
      const testCode = `const test = 'hello';\nconsole.log(test);`;
      const lintResults = await eslint.lintText(testCode, { filePath: 'test.js' });
      canLint = lintResults.length === 1 && Array.isArray(lintResults[0].messages);
    } catch {
      canLint = false;
    }

    assert(canLint, '❌ Failed to lint test code');
    console.log('Can Lint:', canLint ? '✅' : '❌');

    // Test different file types
    const fileTypes = [
      'test.js',
      'test.ts',
      'test.jsx',
      'test.tsx',
      'test.json',
      'test.yml',
      'test.md',
    ];

    console.log('\nFile Types:');
    for (const file of fileTypes) {
      let success = false;
      try {
        const fileConfig = await eslint.calculateConfigForFile(file);
        const ruleCount = Object.keys(fileConfig.rules || {}).length;
        success = ruleCount > 0;
      } catch {
        success = false;
      }

      assert(success, `❌ Failed to validate ${file}`);
      console.log(`  ${file}:`, success ? '✅' : '❌');
    }

    process.exit(failures.length > 0 ? 1 : 0);
  } catch (error) {
    console.error('❌ Validation error:', error.message);
    process.exit(1);
  }
};

validateConfig();
