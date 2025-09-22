export default [
  {
    rules: {
      'boundaries/element-types': [
        'error',
        {
          rules: [
            {
              allow: [
                'amplify-backend',
                'generated-api',
                'navigation',
                'dashboard',
                'service',
                'layout',
                'dialog',
                'config',
                'hook',
                'util',
                'type',
                'mock',
                'api',
                'ui',
              ],
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
              from: 'assets',
              allow: [],
            },

            // Root configuration files are isolated
            {
              allow: ['root-config'],
              from: 'root-config',
            },

            // Test files can import from any application code for testing
            {
              allow: [
                'generated-api',
                'navigation',
                'dashboard',
                'test-mock',
                'service',
                'layout',
                'dialog',
                'config',
                'hook',
                'util',
                'type',
                'mock',
                'api',
                'app',
                'ui',
              ],
              from: 'test',
            },

            // Test mocks are isolated (can only import other mocks and utilities)
            {
              allow: ['test-mock', 'util', 'type'],
              from: 'test-mock',
            },
          ],
          default: 'disallow',
        },
      ],

      // Enforce consistent naming
      'boundaries/entry-point': [
        'error',
        {
          rules: [
            {
              target: ['ui', 'layout', 'navigation'],
              allow: 'index.{js,ts}',
            },
            {
              allow: '*.{js,jsx,ts,tsx}',
              target: ['dialog'],
            },
            {
              target: ['generated-api'],
              allow: '*.{js,ts}',
            },
            {
              target: [
                'external-component',
                'amplify-backend',
                'dashboard',
                'test-mock',
                'service',
                'config',
                'mock',
                'util',
                'type',
                'hook',
                'test',
                'api',
                'app',
              ],
              allow: '*.{js,jsx,ts,tsx}',
            },
            {
              target: ['tooling', 'assets', 'root-config'],
              allow: '*',
            },
          ],
          default: 'disallow',
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
          pattern: ['*.config.{js,mjs,ts}', '*.json', '*.md', '*.yml', '*.yaml'],
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

        {
          pattern: ['**/__mocks__/**/*', '**/*.mock.{js,jsx,ts,tsx}'],
          type: 'test-mock',
        },
      ],
      'boundaries/ignore': [
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/__tests__/**/*',
        '**/__mocks__/**/*',
        '.claude/**/*',
        '.specify/**/*',
        'specs/**/*',
        '.next/**/*',
        'out/**/*',
        'node_modules/**/*',
        'public/**/*',
      ],
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
];
