module.exports = {
  root:true,
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "module",
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        parser: '@typescript-eslint/parser',
          project: './tsconfig.json',
          extraFileExtensions: ['.vue'],
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/multi-word-component-names":"off",
        "prettier/prettier": "error",
        "no-console": "off",
        "no-debugger":"off",
        "no-var": "error",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-non-null-assertion":"off"
    }
}
