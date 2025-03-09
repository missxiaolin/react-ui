# react-ui

```
"lint-staged": {
    "*.{md,json}": [
        "prettier --cache --write --no-error-on-unmatched-pattern"
    ],
    "*.{scss,less}": [
        "stylelint --fix",
        "prettier --cache --write"
    ],
    "*.{js,jsx}": [
        "eslint --fix",
        "prettier --cache --write"
    ],
    "*.{ts,tsx}": [
        "eslint --fix",
        "prettier --cache --parser=typescript --write"
    ]
},
```
