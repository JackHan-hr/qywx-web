module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "react-app"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "strict": [0],
    "vars-on-top": [0],
    "no-var": [0],
    "no-param-reassign": [0],
    "no-shadow": [0],
    "no-console": [0],
    "no-useless-constructor": [0],
    "no-unused-expressions": [0],
    "object-shorthand": [0],
    "class-methods-use-this": [0],
    "prefer-template": [0],
    "prefer-const": [0],
    "prefer-arrow-callback": [0],
    "prefer-destructuring": ["error", {
      "array": false,
      "object": false,
    }, {
      "enforceForRenamedProperties": false,
    }],
    "func-names": [0],
    "generator-star-spacing": [0],
    "consistent-return": [0],
    "react/forbid-prop-types": [0],
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "global-require": [0],
    "import/order": [0],
    "import/prefer-default-export": [0],
    "react/no-array-index-key": [0],
    "react/no-find-dom-node": [0],
    "react/jsx-no-bind": [0],
    "react/no-unused-state": [0],
    "react/prop-types": [0],
    "react/prefer-stateless-function": [0],
    "react/jsx-one-expression-per-line": [0],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "ignore",
      },
    ],
    "no-else-return": [0],
    "no-restricted-syntax": [0],
    "import/no-dynamic-require": [0],
    "import/newline-after-import": [0],
    "import/no-extraneous-dependencies": [0],
    "no-use-before-define": [0],
    "no-return-assign": [2, "except-parens"],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/href-no-hash": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "no-nested-ternary": [0],
    "arrow-body-style": [0],
    "import/extensions": [0],
    "no-bitwise": [0],
    "no-cond-assign": [0],
    "import/no-unresolved": [0],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    "object-curly-newline": [0],
    "function-paren-newline": [0],
    "no-restricted-globals": [0],
    "require-yield": [1],
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
    },
  },
  settings: {
    polyfills: ["fetch", "promises"],
  },
  "plugins": ["react"],
};
