module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 解决let被强转为const问题
    'prefer-const': 0,
    // 保存代码时缩进4个空格
    'indent': ['error', 2],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'arrow-parens': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/naming-convention': [
      'off',
      {
        'selector': 'default',
        'format': null
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-this-alias': ['off'],
    'vue/multi-word-component-names': 'off',
  }
}
