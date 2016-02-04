# Gallery Link

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: slide-fox, @tag: component
<h2>We need some demo text to see the slide fox in action!</h2>
{{#times 20}}
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum explicabo facilis, ipsum itaque necessitatibus nisi nulla ut veniam veritatis voluptate. Blanditiis consectetur, error excepturi exercitationem facilis ipsum labore nobis odit.</p>
{{/times}}

{{#with slide-fox-bp}}
	{{#wrapWith "c-slide-fox"}}
		<a href="#">Link to another page.</a>
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @id: scss-import, @tag: component
@import "components/_c-slide-fox";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @id: js-import, @tag: component
import SlideFox from './modules/slide-fox/slide-fox';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @id: js-init-v2, @tag: component
/**
 * Init Form
 */
Helpers.loadModule({
	el: '[data-js-module="slide-fox"]',
	module: SlideFox,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @id: js-init-v3, @tag: component
/**
 * Init Form
 */
Helpers.loadModule({
	domName: 'slide-fox',
	module: SlideFox,
	context: context
});
// @INSERT :: END
```
