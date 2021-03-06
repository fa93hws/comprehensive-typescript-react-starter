module.exports = {
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.d.ts']
      }
    },
  },
  env: {
    "jest": true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb-base',
  ],
  plugins: [
    'babel',
    'import',
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    // Typescript specific rules:
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-triple-slash-reference': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    // We use the babel rule, as it understands class property syntax
    'babel/no-invalid-this': 'error',
    'import/prefer-default-export': 'off',
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": ["**/tests/**", "**/stories/**"]
    }],
    'no-multi-str': 'off',
    'no-inner-declarations': 'off',
    // There is @typescript-eslint/no-unused-var
    'no-unused-vars': 'off',
    'prefer-template': 'off',
    'no-unused-expressions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'react/display-name': 'off',
  },

  overrides: [
    {
      files: ['**/tests/**.tests.ts', 'conf/**/*', 'tools/**/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      }
    },
    {
      files: ['src/**/*.tsx'],
      rules: {
        'react/no-deprecated': 'error',
      },
    },
  ],
};
