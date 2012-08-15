// Snippets.Utiltiies.js

// Check if namespace is defined
var Snippets = Snippets || {};

// Snippets namespace
Snippets.Utilities = (function ($) {
			
	// Console.log function with check for browsers that don't support it
	cl = function(logMessage){
		if(window.console){
			if(console.log){
				console.log(logMessage);
			}
		}
	};
	
	// Initialisation
	init = function () {
		cl("Snippets.Utilities.init called");
	};
	
	// Return Public API
	return {
		init: init,
		cl: cl
	};

})(jQuery);