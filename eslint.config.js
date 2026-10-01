const js = require('@eslint/js');

module.exports = [
  {
    ignores: ['.venv/**', 'node_modules/**', '__pycache__/**'],
  },
  js.configs.recommended,
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        module: 'readonly',
        require: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
  },
];
