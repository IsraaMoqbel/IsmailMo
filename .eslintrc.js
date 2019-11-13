module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  // babel-eslint parser is used to support experimental features not supported in ESLint itself yet
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "impliedStrict": true, //enable global strict mode (if ecmaVersion is 5 or greater)
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "global-require":0,
    "react/destructuring-assignment":0,
    "no-use-before-define":0,
    "no-underscore-dangle":0,
    "import/prefer-default-export": 0,
    "react/jsx-no-undef": 1,
    // disables the windows/unix linebreak checks.
    "linebreak-style": 0,
    "linebreak-style": [0, "error", "windows"],
    "react/prop-types": [0],
    "react/prefer-stateless-function":[0],
    //  allow .js extensions for JSX.
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true, // allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise
        "allowTemplateLiterals": true // allows strings to use backticks
      }
    ],
    // configure the prettier plugin
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "lf",
        "semi": false,
        "tabWidth": 2,
        "trailingComma": "es5"
      }
    ]
  },
  "plugins": [
    "prettier"
  ]
};