# @esgi/stylelint-config

[![E2E](https://github.com/aminnairi/esgi-stylelint-config/actions/workflows/e2e.yaml/badge.svg)](https://github.com/aminnairi/esgi-stylelint-config/actions/workflows/e2e.yaml) [![NPM version](https://badgen.net/npm/v/@esgi/stylelint-config)](https://www.npmjs.com/package/@esgi/stylelint-config) [![Package size](https://badgen.net/bundlephobia/minzip/@esgi/stylelint-config)](https://bundlephobia.com/package/@esgi/stylelint-config)

StyleLint configuration

## Requirements

- Terminal
- [Node](https://nodejs.org/)
- NPM

## Installation

```console
$ npm install --save-dev stylelint @esgi/stylelint-config
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
## Code of conduct

See [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).

## License

See [`LICENSE`](./LICENSE).
