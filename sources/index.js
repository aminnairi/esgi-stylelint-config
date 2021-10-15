"use strict";

module.exports = {
  rules: {
    "indentation": 2,
    "color-no-invalid-hex": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "named-grid-areas-no-invalid": true,
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
    "property-no-unknown": [true, {checkPrefixed: true}],
    "keyframe-declaration-no-important": true,
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "block-no-empty": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "media-feature-name-no-unknown": true,
    "at-rule-no-unknown": true,
    "comment-no-empty": true,
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": true,
    "alpha-value-notation": "percentage",
    "hue-degree-notation": "angle",
    "color-function-notation": "modern",
    "color-named": "always-where-possible",
    "length-zero-no-unit": true,
    "font-weight-notation": "named-where-possible",
    "keyframes-name-pattern": /^[a-z]+(-[a-z]+)?$/,
    "shorthand-property-no-redundant-values": true,
    "value-no-vendor-prefix": true,
    "custom-property-pattern": /^[a-z]+(-[a-z]+)?$/,
    "property-no-vendor-prefix": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-no-important": true,
    "declaration-block-single-line-max-declarations": 1,
    "selector-max-empty-lines": 0,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",
    "media-feature-name-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,
    "at-rule-property-required-list": {"font-face": ["font-family", "src"]},
    "no-unknown-animations": true,
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "font-family-name-quotes": "always-unless-keyword",
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "string-quotes": ["double", {avoidEscape: false}],
    "unit-case": "lower",
    "value-keyword-case": "lower",
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "custom-property-empty-line-before": "never",
    "property-case": "lower",
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-newline-after": "always",
    "block-opening-brace-space-before": "never",
    "block-closing-brace-empty-line-before": "never",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-type-case": "lower",
    "selector-list-comma-space-after": "always",
    "selector-list-comma-space-before": "never",
    "rule-empty-line-before": "always",
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-space-after": "always",
    "media-query-list-comma-space-before": "never",
    "at-rule-empty-line-before": "always",
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always",
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "comment-whitespace-inside": "always",
    "linebreaks": "unix",
    "max-empty-lines": 1,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "no-empty-first-line": true,
    "unicode-bom": "never",
    "no-irregular-whitespace": true,
  }
};
