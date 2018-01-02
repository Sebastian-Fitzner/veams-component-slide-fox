## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: slide-fox, @tag: component-partial }}
<h2>We need some demo text to see the slide fox in action!</h2>
{{#times 20}}
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum explicabo facilis, ipsum itaque necessitatibus nisi nulla ut veniam veritatis voluptate. Blanditiis consectetur, error excepturi exercitationem facilis ipsum labore nobis odit.</p>
{{/times}}

{{#with slide-fox-bp.variations.default}}
	{{#wrapWith "slide-fox" settings=this.settings}}
		<a href="#">Link to another page.</a>
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5

``` js
// @INSERT :: START @tag: js-init-v5 //
	// Init SlideFox
	Veams.modules.add({ namespace: 'slide-fox', module: SlideFox });
// @INSERT :: END //
```