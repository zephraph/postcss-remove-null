# postcss-remove-null [![Build Status](https://travis-ci.org/zephraph/postcss-remove-null.svg?branch=master)](https://travis-ci.org/zephraph/postcss-remove-null)

> Remove null values with PostCSS.

## Functionality

The basic use case of this plugin functions very similar to `null` in Sass.

Given

```css
div {
  display: null;
}
```

The plugin will output

```css
div {}
```

It's recommended that this plugin be followed by [cssnano](https://github.com/ben-eb/cssnano) or [postcss-discard-empty](https://github.com/ben-eb/postcss-discard-empty) to ensure that the `div` in the above example is removed.

This plugin also intelligently handles nulls present in shorthand declarations.

Given

```css
div {
  margin: null 1px null 2px;
}
```

The plugin will output

```css
div {
  margin-right: 1px;
  margin-left: 2px;
}
```

For more insight on what the plugin currently covers checkout the [tests](https://github.com/zephraph/postcss-remove-null/tree/master/tests);

## Installation

`npm install --save-dev postcss-remove-null`

## Usage

```javascript
var postcss    = require('postcss');
var removeNull = require('postcss-remove-null');
var cssNano    = require('cssnano');

postcss([ removeNull, cssNano ])
```
