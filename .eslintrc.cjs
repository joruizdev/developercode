/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:astro/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.astro, *.jsx'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        extraFileExtensions: [".astro, .jsx"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      }
    }
  ]
}