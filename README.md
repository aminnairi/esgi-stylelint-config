# @esgi/stylelint-config

StyleLint configuration

## Requirements

- Terminal
- [Node](https://nodejs.org/)
- NPM

## Installation

```console
$ npm install stylelint @esgi/stylelint-config
```

## Usage

```console
$ touch .stylelintrc.js
```

```javascript
"use strict";

module.exports = {
  extends: "@esgi/stylelint-config"
};
```

```console
$ touch package.json
```

```json
{
  "scripts": {
    "stylelint": "stylelint index.css"
  }
}
```

```console
$ npm run stylelint
```
