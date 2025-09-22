import { globalIgnores as createGlobalIgnores } from 'eslint/config';

export const globalIgnores = createGlobalIgnores([
  // Dependencies
  '**/node_modules/',
  // Build outputs
  '**/.next/',
  '**/out/',
  '**/build/',
  '**/dist/',
  '**/coverage/',
  '**/.turbo/',

  // Generated files
  'lib/generated-api/',
  '**/next-env.d.ts',
  '**/components/event-calendar/',

  // Lock files
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',

  // Tool directories
  '**/.vscode/',
  '**/.claude/',
  '**/.specify/',
  '**/.cursor/',

  // Config files
  '.env*',
  '.esprintrc',
  '.gitignore',

  // Static assets
  '**/public/',

  // ESLint config package
  '@eslint-config/',
]);

export default globalIgnores;
