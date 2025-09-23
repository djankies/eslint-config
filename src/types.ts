import { type Linter } from 'eslint';

/**
 * ESLint Flat Config type
 * Re-export the official ESLint Config type for consistent usage
 */
export type FlatConfig = Linter.Config;

/**
 * Array of ESLint Flat Config objects
 * This is the standard format for ESLint flat configs
 */
export type FlatConfigArray = FlatConfig[];

/**
 * Partial config that can be spread into a full config
 * Useful for config modules that only define specific properties
 */
export type PartialFlatConfig = Partial<FlatConfig>;

/**
 * Config with required rules property
 * For configs that always include rules
 */
export interface ConfigWithRules extends FlatConfig {
  rules: NonNullable<FlatConfig['rules']>;
}

/**
 * Config with required files property
 * For configs that target specific file patterns
 */
export interface ConfigWithFiles extends FlatConfig {
  files: NonNullable<FlatConfig['files']>;
}

/**
 * Config with required language options
 * For configs that modify parser or language settings
 */
export interface ConfigWithLanguageOptions extends FlatConfig {
  languageOptions: NonNullable<FlatConfig['languageOptions']>;
}

/**
 * Config with required plugins
 * For configs that provide plugins
 */
export interface ConfigWithPlugins extends FlatConfig {
  plugins: NonNullable<FlatConfig['plugins']>;
}

/**
 * Rules record type for type-safe rule definitions
 */
export type RulesRecord = Linter.RulesRecord;

/**
 * Rule severity type
 */
export type RuleSeverity = Linter.RuleSeverity;

/**
 * Rule configuration type
 */
export type RuleConfig = Linter.RuleEntry;
