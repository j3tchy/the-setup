module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "import/no-named-as-default": 0,
    "operator-linebreak": ["error", "after"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
