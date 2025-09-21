export default [{
  files: ['**/*.{js,jsx,ts,tsx}'],
  rules: {
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [{
            allow: ['ui', 'layout', 'navigation', 'dialog', 'dashboard', 'service', 'api', 'hook', 'util', 'type', 'config', 'mock', 'generated-api', 'amplify-backend'],
            from: 'app',
          },
          {
            allow: ['ui', 'util', 'type'],
            from: 'ui',
          },
          {
            allow: ['ui', 'navigation', 'hook', 'util', 'type'],
            from: 'layout',
          },
          {
            allow: ['ui', 'hook', 'util', 'type'],
            from: 'navigation',
          },
          {
            allow: ['ui', 'service', 'api', 'hook', 'util', 'type', 'mock', 'generated-api'],
            from: 'dialog',
          },

          {
            allow: ['external-component', 'ui', 'util', 'type'],
            from: 'external-component',
          },

          {
            allow: ['api', 'generated-api', 'util', 'type', 'config', 'amplify-backend'],
            from: 'service',
          },

          {
            allow: ['generated-api', 'util', 'type', 'config'],
            from: 'api',
          },

          {
            allow: ['generated-api', 'util', 'type'],
            from: 'generated-api',
          },

          {
            allow: ['mock', 'type', 'util'],
            from: 'mock',
          },

          {
            allow: ['util', 'type'],
            from: 'util',
          },

          {
            allow: ['type'],
            from: 'type',
          },

          {
            allow: ['service', 'api', 'util', 'type', 'mock', 'generated-api', 'amplify-backend'],
            from: 'hook',
          },

          {
            allow: ['util', 'type'],
            from: 'config',
          },

          // AWS Amplify backend configuration - isolated infrastructure layer
          {
            allow: ['amplify-backend'],
            from: 'amplify-backend',
          },

          // Dashboard components can use UI and services
          {
            allow: ['ui', 'hook', 'util', 'type', 'service', 'api'],
            from: 'dashboard',
          },

          // Development tooling is completely isolated
          {
            allow: ['tooling'],
            from: 'tooling',
          },

          // Public assets are read-only (no imports)
          {
            allow: [],
            from: 'assets',
          },

          // Root configuration files are isolated
          {
            allow: ['root-config'],
            from: 'root-config',
          },

          // Test files can import from any application code for testing
          {
            allow: ['ui', 'layout', 'navigation', 'dialog', 'dashboard', 'service', 'api', 'hook', 'util', 'type', 'config', 'mock', 'generated-api', 'app', 'test-mock'],
            from: 'test',
          },

          // Test mocks are isolated (can only import other mocks and utilities)
          {
            allow: ['test-mock', 'util', 'type'],
            from: 'test-mock',
          },
        ],
      },
    ],

      // Enforce consistent naming
      'boundaries/entry-point': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              allow: 'index.{js,ts}',
              target: ['ui', 'layout', 'navigation'],
            },
            {
              allow: '*.{js,jsx,ts,tsx}',
              target: ['dialog'],
            },
            {
              allow: '*.{js,ts}',
              target: ['generated-api'],
            },
            {
              allow: '*.{js,jsx,ts,tsx}',
              target: ['app', 'service', 'api', 'mock', 'util', 'type', 'hook', 'config', 'external-component', 'amplify-backend', 'dashboard', 'test', 'test-mock'],
            },
            // Tooling, assets, and root config don't have entry point restrictions
            {
              allow: '*',
              target: ['tooling', 'assets', 'root-config'],
            },
          ],
        },
      ],
    },
  settings: {
    'boundaries/elements': [
      // Next.js App Router - Pages and Layouts
      {
        pattern: 'app/**/*',
        type: 'app',
      },

      // UI Components - Reusable, no business logic
      {
        pattern: 'components/ui/**/*',
        type: 'ui',
      },

      // Layout Components
      {
        pattern: 'components/layout/**/*',
        type: 'layout',
      },

      // Navigation Components
      {
        pattern: 'components/navigation/**/*',
        type: 'navigation',
      },

      // Feature-specific Dialogs
      {
        pattern: 'components/dialogs/**/*',
        type: 'dialog',
      },

      // Event Calendar (Third-party component)
      {
        pattern: 'components/event-calendar/**/*',
        type: 'external-component',
      },

      // Business Logic Layer
      {
        pattern: 'lib/services/**/*',
        type: 'service',
      },

      // API Layer
      {
        pattern: 'lib/api.ts',
        type: 'api',
      },

      // Generated API (should be isolated)
      {
        pattern: 'lib/generated-api/**/*',
        type: 'generated-api',
      },
      {
        pattern: 'lib/mock-data/**/*',
        type: 'mock',
      },
      {
        pattern: 'lib/utils/**/*',
        type: 'util',
      },
      {
        pattern: 'lib/types/**/*',
        type: 'type',
      },
      {
        pattern: ['lib/hooks/**/*', 'hooks/**/*'],
        type: 'hook',
      },
      {
        pattern: 'lib/*-config.ts',
        type: 'config',
      },

      // AWS Amplify Backend Configuration
      {
        pattern: 'amplify/**/*',
        type: 'amplify-backend',
      },

      // Dashboard Components
      {
        pattern: 'components/dashboard/**/*',
        type: 'dashboard',
      },

      // Development & Tooling (should be isolated)
      {
        pattern: ['.claude/**/*', '.specify/**/*', 'specs/**/*'],
        type: 'tooling',
      },

      // Public Assets
      {
        pattern: 'public/**/*',
        type: 'assets',
      },

      // Root Configuration Files
      {
        pattern: [
          '*.config.{js,mjs,ts}',
          '*.json',
          '*.md',
          '*.yml',
          '*.yaml',
        ],
        type: 'root-config',
      },

      // Test Files
      {
        pattern: [
          '**/*.{test,spec}.{js,jsx,ts,tsx}',
          '**/__tests__/**/*',
          '**/tests/**/*',
          'vitest.config.ts',
          'vitest.setup.ts',
        ],
        type: 'test',
      },

      // Mock Files
      {
        pattern: [
          '**/__mocks__/**/*',
          '**/*.mock.{js,jsx,ts,tsx}',
        ],
        type: 'test-mock',
      },
    ],
    'boundaries/ignore': [
      '**/*.test.{js,jsx,ts,tsx}',
      '**/*.spec.{js,jsx,ts,tsx}',
      '**/__tests__/**/*',
      '**/__mocks__/**/*',
      // Development tooling and documentation
      '.claude/**/*',
      '.specify/**/*',
      'specs/**/*',
      // Build outputs and dependencies
      '.next/**/*',
      'out/**/*',
      'node_modules/**/*',
      // Static assets (no JavaScript imports)
      'public/**/*',
    ],
  },
}];
