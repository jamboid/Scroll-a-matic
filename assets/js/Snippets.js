// Snippets.js

// Check if namespace is defined
var Snippets = Snippets || {};

// Snippets namespace
//
// Base namespace for the Snippets framework
Snippets.init = (function ($) {
	
	var scripts = {};
    // Initialisation
	scripts.init = function () {
		$(document).ready(function () {
			Snippets.Utilities.init();
			Snippets.Scroller.init();
		});
	};
	
	// Automatically call init function
	return scripts.init();
	
})(jQuery);
