// Snippets.js

// Check if namespace is defined
var snippets = snippets || {};

// Snippets namespace
//
// Base namespace for the Snippets framework
snippets.init = (function ($) {

    var scripts = {};
    // Initialisation
    scripts.init = function () {
        $(document).ready(function () {
            snippets.utils.init();
            snippets.scroller.init();
        });
    };

    // Automatically call init function
    return scripts.init();

}(jQuery));
