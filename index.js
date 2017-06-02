// prettier-ignore
module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "block-no-empty": null,
    "declaration-block-no-duplicate-properties": [true, {
        ignore: ["consecutive-duplicates-with-different-values"]
    }],
    "indentation": 4,
    "selector-type-no-unknown": [true, {
        "ignoreTypes": ["/^gfp-/"]
    }]
  }
}
