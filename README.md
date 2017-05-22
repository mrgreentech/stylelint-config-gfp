# GFP Stylelint Config

[![NPM version](http://img.shields.io/npm/v/stylelint-config-gfp.svg)](https://www.npmjs.org/package/stylelint-config-gfp)

> Opiniated GFP css rules that can be shared via a stylelint config object.

## Install

```
$ npm install --save stylelint-config-gfp
```

## Usage
Add a `.stylelintrc` and extend it with `stylelint-config-gfp`, that will serve as a base for your config, then you can make overrides in the `rules` property.

```json
{
  "extends": "stylelint-config-gfp",
  "rules": {} // place overrides here
}
```

# Contributing

We use semantic versioning. That means that if you introduce a change that will break current API (the stylelint rules fails) it is a MAJOR change.
If you introduce a change that only `"warn"` about a new rule it is considered a MINOR change.

[MIT](./LICENSE) &copy; [Mr Green & Co Technology AB](https://github.com/mrgreentech/)