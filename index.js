module.exports = {
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
        ],
      },
    },
  },
  extends: ['@react-native-community'],
  rules: {
    // General
    quotes: ['error', 'single', { avoidEscape: true }],
    'import/no-extraneous-dependencies': 2,
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'import/no-named-as-default-member': 2,
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-duplicates': 2,
    'import/no-useless-path-segments': 2,
    'import/no-cycle': 'error',
    'import/no-anonymous-default-export': 2,
    'max-len': ['error', 120],
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-explicit-any': 0,
    // React Native
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': 0,
    camelcase: 2,
    'prefer-destructuring': 2,
    // React
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': ['error', { additionalHooks: '(useMemoOne)' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    // Testing
    'jest/no-identical-title': 2,
    'jest/valid-expect': 2,
    // Prettier
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
