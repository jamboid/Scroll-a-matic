// Snippets.Utiltiies.js

// Check if namespace is defined
var snippets = snippets || {};

// Snippets namespace
snippets.utils = (function ($) {
    "use strict";
    // Debug mode enables console logging and other functionality
    var debugMode = true,
    // Console.log function with check for browsers that don't support it
        logMessage = function (logMessage) {
            if (debugMode === true) {
                if (window.console) {
                    if (console.log) {
                        console.log(logMessage);
                    }
                }
            }
        },

        // Initialisation
        init = function () {
            snippets.utils.cl("snippets.utils.init called");
        };

    // Return Public API
    return {
        init: init,
        cl: logMessage
    };

}(jQuery));