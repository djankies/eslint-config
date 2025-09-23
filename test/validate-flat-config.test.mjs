import { describe, it, expect } from 'vitest';
import { ESLint } from 'eslint';
import eslintConfig from '../dist/index.js';

describe('ESLint Flat Config Validation', () => {
  it('should export a valid flat config array', () => {
    expect(Array.isArray(eslintConfig)).toBe(true);
    expect(eslintConfig.length).toBeGreaterThan(0);
  });

  it('should have valid config objects', () => {
    for (const config of eslintConfig) {
      expect(config).toBeTypeOf('object');
      expect(config).not.toBeNull();

      // Check that config has valid flat config properties
      const validKeys = [
        'files',
        'ignores',
        'rules',
        'plugins',
        'languageOptions',
        'linterOptions',
        'processor',
        'settings',
        'name',
      ];

      for (const key of Object.keys(config)) {
        expect(validKeys).toContain(key);
      }
    }
  });

  it('should create a valid ESLint instance', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: eslintConfig,
      cache: false,
    });

    // Should not throw
    const config = await eslint.calculateConfigForFile('test.js');
    expect(config).toBeDefined();
    expect(config.rules).toBeDefined();
  });

  it('should lint JavaScript files', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: eslintConfig,
      cache: false,
    });

    const code = `const foo = 'bar';\nconsole.log(foo);`;
    const results = await eslint.lintText(code, { filePath: 'test.js' });

    expect(results).toHaveLength(1);
    expect(results[0]).toHaveProperty('messages');
    expect(results[0].errorCount).toBeGreaterThanOrEqual(0);
  });

  it('should lint TypeScript files', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: eslintConfig,
      cache: false,
    });

    const code = `const foo: string = 'bar';\nconsole.log(foo);`;
    const results = await eslint.lintText(code, { filePath: 'test.ts' });

    expect(results).toHaveLength(1);
    expect(results[0]).toHaveProperty('messages');
  });

  it('should apply different rules for different file types', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: eslintConfig,
      cache: false,
    });

    const jsConfig = await eslint.calculateConfigForFile('test.js');
    const tsConfig = await eslint.calculateConfigForFile('test.ts');
    const jsonConfig = await eslint.calculateConfigForFile('test.json');

    // TypeScript files should have more rules than JS
    expect(Object.keys(tsConfig.rules).length).toBeGreaterThan(Object.keys(jsConfig.rules).length);

    // JSON files should have different rules
    expect(Object.keys(jsonConfig.rules).length).toBeLessThan(Object.keys(jsConfig.rules).length);
  });

  it('should include ignore patterns', () => {
    const hasIgnores = eslintConfig.some(config => config.ignores);
    expect(hasIgnores).toBe(true);
  });

  it('should include plugins', () => {
    const hasPlugins = eslintConfig.some(config => config.plugins);
    expect(hasPlugins).toBe(true);
  });

  it('should be compatible with ESLint 9+', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: eslintConfig,
      cache: false,
    });

    // ESLint 9+ specific features
    await eslint.calculateConfigForFile('test.js');

    // Flat config should not have extends, env, or overrides
    for (const cfg of eslintConfig) {
      expect(cfg).not.toHaveProperty('extends');
      expect(cfg).not.toHaveProperty('env');
      expect(cfg).not.toHaveProperty('overrides');
    }
  });
});
