module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['tailwind.config.cjs', 'postcss.config.cjs'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.json'],
  },
  rules: {
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    jsx-quotes: ["error", "prefer-double"],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'prettier/prettier': 'error',
    'import/extensions': ['error', 'never'],
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
  },
};
