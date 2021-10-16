# @esgi/stylelint-config

[![Build](https://github.com/aminnairi/esgi-stylelint-config/actions/workflows/build.yaml/badge.svg?branch=production)](https://github.com/aminnairi/esgi-stylelint-config/actions/workflows/build.yaml) [![NPM version](https://badgen.net/npm/v/@esgi/stylelint-config)](https://www.npmjs.com/package/@esgi/stylelint-config)

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
