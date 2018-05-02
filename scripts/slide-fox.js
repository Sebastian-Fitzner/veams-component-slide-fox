/**
 * Represents an element that slides into view when it's scrolled into viewport.
 *
 * @module SlideFox
 * @version v1.0.0
 *
 * @author Andy Gutsche
 * @refactoring Sebastian Fitzner
 */

import $ from '@veams/query';
import Component from '@veams/component';
import isInViewport from '@veams/helpers/lib/detection/is-in-viewport';

class SlideFox extends Component {
	/*
	 * General Properties
	 */
	$el = $(this.el);

	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */

	constructor(obj) {
		let options = {
			visibleClass: 'is-visible',
			repeatAnimation: true
		};

		super(obj, options);
	}

	/** =================================================
	 * GETTER & SETTER
	 * ================================================ */

	/**
	 * Get module information
	 */

	static get info() {
		return {
			version: '1.0.0',
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}

	/** =================================================
	 * EVENTS
	 * ================================================ */

	get subscribe() {
		return {
			'{{this.context.EVENTS.scroll}}': 'render'
		};
	}

	/** =================================================
	 * STANDARD METHODS
	 * ================================================= */

	render() {
		return isInViewport(this.el) ? this.showSlideFox() : this.hideSlideFox();
	}

	/** =================================================
	 * CUSTOM SLIDEFOX METHODS
	 * ================================================= */

	showSlideFox() {
		this.$el.addClass(this.options.visibleClass);

		if (!this.options.repeatAnimation) {
			// After slide fox is shown once, we just delete the listener on scroll event.
			this.unregisterEvent('{{this.context.EVENTS.scroll}}', 'render');
		}
	}

	hideSlideFox() {
		this.$el.removeClass(this.options.visibleClass);
	}
}

// Returns the constructor
export default SlideFox;
