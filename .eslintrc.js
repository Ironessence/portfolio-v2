module.exports = {
    root: true,
    extends: ['@react-native-community', 'prettier'],
    plugins: ['@typescript-eslint', 'prettier', 'unused-imports', 'import'],
    parser: '@typescript-eslint/parser',
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'src/assets/**', group: 'parent' },
            { pattern: 'src/components/**', group: 'parent' },
            { pattern: 'src/contexts/**', group: 'parent' },
            { pattern: 'src/constants/**', group: 'parent' },
            { pattern: 'src/hooks/**', group: 'parent' },
            { pattern: 'src/models/**', group: 'parent' },
          ],
          pathGroupsExcludedImportTypes: [],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: true,
        },
      ],
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  };