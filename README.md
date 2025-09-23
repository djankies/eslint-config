# @djankies/eslint-config

Shared ESLint configuration for djankies projects.

## Installation

```bash
npm install --save-dev @djankies/eslint-config
```

## Usage

Create an `eslint.config.js` or `eslint.config.mjs` file in your project:

```javascript
export { default } from '@djankies/eslint-config';
```

Or if you want to extend/customize:

```javascript
import eslintConfig from '@djankies/eslint-config';

export default [
  ...eslintConfig,
  {
    // Your custom rules
    rules: {
      // ...
    }
  }
];
```

## Configuration Modules

This package includes multiple configuration modules that can be imported individually:

- `canonical` - Base canonical ESLint rules
- `typescript` - TypeScript-specific rules
- `react` - React and React Hooks rules
- `next` - Next.js specific rules
- `tailwind` - Tailwind CSS rules
- `a11y` - Accessibility rules
- `imports` - Import/export rules
- `prettier` - Prettier integration
- And more...

## Features

- Full TypeScript support
- Next.js 14+ App Router support
- Tailwind CSS integration
- Accessibility checking
- Import sorting and validation
- Prettier formatting
- Testing library support (Vitest)
- JSON/YAML linting
- And much more!

## Development

To contribute to this configuration:

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Test the configuration: `npm test`
5. Build: `npm run build`

## License

MIT
