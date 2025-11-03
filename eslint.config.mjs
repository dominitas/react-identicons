import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest';

export default defineConfig([
  {
    ignores: ['dist'],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['**/*.d.ts'],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
      },
    },
    rules: {
      ...tseslint.configs.strictTypeChecked.rules,
    },
  },
  {
    files: ['example/**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: 'example/tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
      },
    },
    rules: {
      ...tseslint.configs.strictTypeChecked.rules,
    },
  },
  {
    files: ['**/*.{mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, 'react': pluginReact, '@stylistic': stylistic },
    settings: { react: { version: 'detect' } },
    extends: ['js/recommended'],
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...stylistic.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
      }],
    },
  },
  {
    files: ['**/*.test.tsx'],
    ...jest.configs['flat/recommended'],
  },
  {
    files: ['**/*.d.ts'],
    languageOptions: { parser: tseslint.parser },
    rules: { 'no-unused-vars': 'off' },
  },
  {
    files: ['eslint.config.mjs'],
    languageOptions: { globals: globals.node },
  },
]);
