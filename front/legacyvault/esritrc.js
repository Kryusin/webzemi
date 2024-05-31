module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 環境構築した時点ではReactの導入はしてないのでコメントアウトした
    // 'plugin:react/recommended',
    'next/core-web-vitals',
    'airbnb',
    'prettier',
    // 下記を追加している記事があるが2021/8/4の時点では必要なくなった。
    // prettierの方で統一された。
    // 'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    // 環境構築した時点ではReactの導入はしてないのでコメントアウトした
    // 'react',
    '@typescript-eslint',
  ],
  root: true,
  rules: {
    // "quotes": ["error", "double"]
    // console.logがコードに含まれるとエラーになるので無視するようにルールを追加
    'no-console': 'off',
  },
}
