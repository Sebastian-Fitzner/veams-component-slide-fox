<p align="right">
<a href="https://badge.fury.io/js/%40veams%2Fcomponent-slide-fox"><img src="https://badge.fury
.io/js/%40veams%2Fcomponent-slide-fox.svg" alt="npm version" height="18"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Slide Fox

## Description

Represents an element that slides into view when it's scrolled into the viewport.

-----------

## Requirements
- [@veams/core](https://github.com/Veams/core) - Veams Core Framework.
- [@veams/query](https://github.com/Veams/query) or `jquery` - Veams Query or jQuery.
- [@veams/component](https://github.com/Veams/component) - Veams Component.
- [@veams/helpers](https://github.com/Veams/helpers) - Veams Detection Helpers.

-----------

## Installation

### Installation with Veams

``` bash
veams install component slide-fox
```
``` bash
veams -i c slide-fox
```

-----------

## Fields

### `slide-fox.hbs`

The partial is a `\{{#wrapWith}}` helper. Documentation for [wrapWith](https://github.com/Sebastian-Fitzner/mangony-hbs-helper-wrap-with) helper.

#### Settings

| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| settings.slideFoxContextClass | String | `default` | Context class of component.
| settings.slideFoxClasses | String | | Modifier classes for component. |
| settings.slideFoxJsOptions | Object |  | JavaScript options which gets stringified. |

-------------

## JavaScript Options

The module gives you the possibility to override default options:

| Option | Type | Default | Description |
|:--- | :---: |:---: |:--- |
| visibleClass | String | `'is-visible'` | Class to be set when Slide Fox becomes visible. |
| repeatAnimation | Boolean | `true` | The slide-fox animation will repeat each time it enters the viewport. |
