/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/others/swfstore.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/others/swfstore.js":
/*!***************************************!*\
  !*** ./src/legacy/others/swfstore.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * SwfStore - a JavaScript library for cross-domain flash cookies
 *
 * http://github.com/nfriedly/Javascript-Flash-Cookies
 *
 * Copyright (c) 2010 by Nathan Friedly - http://nfriedly.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/*jslint browser: true, devel: true, vars: true, white: true, nomen: true, plusplus: true, regexp: true */
/*globals SwfStore */

(function() {

    "use strict"; // http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/

    var counter = 0; // a counter for element id's and whatnot

    var alpnum = /[^a-z0-9_]/ig; //a regex to find anything thats not letters and numbers

    /**
     * SwfStore constructor - creates a new SwfStore object and embeds the .swf into the web page.
     *
     * usage:
     * var mySwfStore = new SwfStore({
     *   namespace: "my_cool_app",
     *   swf_url: "http://example.com/path/to/storage.swf",
     *   onready: function() {
     *     console.log('ready!', mySwfStore.get('my_key'));
     *   },
     *   onerror: function() {
     *     console.error('swfStore failed to load :(');
     *   }
     * });
     *
     * @param {object} config
     * @param {string} [config.swf_url=storage.swf] - Url to storage.swf. Must be an absolute url (with http:// and all) to work cross-domain
     * @param {functon} [config.onready] Callback function that is fired when the SwfStore is loaded. Recommended.
     * @param {function} [config.onerror] Callback function that is fired if the SwfStore fails to load. Recommended.
     * @param {string} [config.namespace="swfstore"] The namespace to use in both JS and the SWF. Allows a page to have more than one instance of SwfStore.
     * @param {string} [config.path] The path of the LSO - similar to a cookie's path, setting it to "/" allows other .swf files on the domain to read/write to it
     * @param {integer} [config.timeout=10] The number of seconds to wait before assuming the user does not have flash.
     * @param {boolean} [config.debug=false] Is debug mode enabled? If so, mesages will be logged to the console and the .swf will be rendered on the page (although it will be an empty white box unless it cannot communicate with JS. Then it will log errors to the .swf)
     */
    window.SwfStore = function(config) {
        // make sure we have something of a configuration
        config = config || {};
        var defaults = {
            swf_url: 'storage.swf', // this should be a complete url (http://example.com/path/to/storage.swf) for cross-domain usage
            namespace: 'swfstore',
            path: null,
            debug: false,
            timeout: 10, // number of seconds to wait before concluding there was an error
            onready: null,
            onerror: null
        };
        var key;
        for (key in defaults) {
            if (defaults.hasOwnProperty(key)) {
                if (!config.hasOwnProperty(key)) {
                    config[key] = defaults[key];
                }
            }
        }
        config.namespace = config.namespace.replace(alpnum, '_');

        if (window.SwfStore[config.namespace]) {
            throw "There is already an instance of SwfStore using the '" + config.namespace + "' namespace. Use that instance or specify an alternate namespace in the config.";
        }

        this.config = config;

        // a couple of basic timesaver functions
        function id() {
            return "SwfStore_" + config.namespace + "_" + (counter++);
        }

        function div(visible) {
            var d = document.createElement('div');
            document.body.appendChild(d);
            d.id = id();
            if (!visible) {
                // setting display:none causes the .swf to not render at all
                d.style.position = "absolute";
                d.style.top = "-2000px";
                d.style.left = "-2000px";
            }
            return d;
        }

        // get a logger ready if appropriate
        if (config.debug) {
            // if we're in a browser that doesn't have a console, build one
            if (typeof console === "undefined") {
                var loggerOutput = div(true);
                window.console = {
                    log: function(msg) {
                        var m = div(true);
                        m.innerHTML = msg;
                        loggerOutput.appendChild(m);
                    }
                };
            }
            this.log = function(type, source, msg) {
                source = (source === 'swfStore') ? 'swf' : source;
                if (typeof(console[type]) !== "undefined") {
                    console[type]('SwfStore - ' + config.namespace + ' (' + source + '): ' + msg);
                } else {
                    console.log('SwfStore - ' + config.namespace + ": " + type + ' (' + source + '): ' + msg);
                }
            };
        } else {
            this.log = function() {}; // if we're not in debug, then we don't need to log anything
        }

        this.log('info', 'js', 'Initializing...');

        // the callback functions that javascript provides to flash must be globally accessible
        SwfStore[config.namespace] = this;

        var swfContainer = div(config.debug);

        var swfName = id();

        var flashvars = "logfn=SwfStore." + config.namespace + ".log&amp;" +
            "onload=SwfStore." + config.namespace + ".onload&amp;" + // "onload" sets this.ready and then calls the "onready" config option
        "onerror=SwfStore." + config.namespace + ".onerror&amp;" +
            (config.path ? "LSOPath=" + config.path + '&amp;' : '') +
            "LSOName=" + config.namespace;


        swfContainer.innerHTML = '<object height="100" width="500" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' +
            swfName + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' +
            '	<param value="' + config.swf_url + '" name="movie">' +
            '	<param value="' + flashvars + '" name="FlashVars">' +
            '	<param value="always" name="allowScriptAccess">' +
            '	<embed height="375" align="middle" width="500" pluginspage="https://www.macromedia.com/go/getflashplayer" ' +
            'flashvars="' + flashvars + '" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" loop="false" play="true" ' +
            'name="' + swfName + '" bgcolor="#ffffff" src="' + config.swf_url + '">' +
            '</object>';

        this.swf = document[swfName] || window[swfName];

        this._timeout = setTimeout(function() {
            SwfStore[config.namespace].log('error', 'js', 'Timeout reached, assuming ' + config.swf_url + ' failed to load and firing the onerror callback.');
            if (config.onerror) {
                config.onerror();
            }
        }, config.timeout * 1000);
    };

    // we need to check everything we send to flash because it can't take functions as arguments
    function checkData(data) {
        if (typeof data === "function") {
            throw 'SwfStore Error: Functions cannot be used as keys or values.';
        }
    }

    SwfStore.prototype = {

        version: "1.9",

        /**
         * This is an indicator of whether or not the SwfStore is initialized.
         * Use the onready and onerror config options rather than checking this variable.
         */
        ready: false,

        /**
         * Sets the given key to the given value in the swf
         * @param {string} key
         * @param {string} value
         */
        set: function(key, value) {
            this._checkReady();
            checkData(key);
            checkData(value);
            //this.log('debug', 'js', 'Setting ' + key + '=' + value);
            this.swf.set(key, value);
        },

        /**
         * Retrieves the specified value from the swf.
         * @param {string} key
         * @return {string} value
         */
        get: function(key) {
            this._checkReady();
            checkData(key);
            //this.log('debug', 'js', 'Reading ' + key);
            return this.swf.get(key);
        },

        /**
         * Retrieves all stored values from the swf.
         * @return {object}
         */
        getAll: function() {
            this._checkReady();
            //this.log('debug', 'js', 'Reading ' + key);
            var data = this.swf.getAll();
            // presumably the user wants to loop through their values, not including the internal __flashBugFix value
            if (data.__flashBugFix) {
                delete data.__flashBugFix;
            }
            return data;
        },

        /**
         * Delete the specified key from the swf
         *
         * @param {string} key
         */
        clear: function(key) {
            this._checkReady();
            checkData(key);
            this.swf.clear(key);
        },

        /**
         * We need to run this check before tying to work with the swf
         *
         * @private
         */
        _checkReady: function() {
            if (!this.ready) {
                throw 'SwfStore is not yet finished initializing. Pass a config.onready callback or wait until this.ready is true before trying to use a SwfStore instance.';
            }
        },

        /**
         * This is the function that the swf calls to announce that it has loaded.
         * This function in turn fires the onready function if provided in the config.
         *
         * @private
         */
        "onload": function() {
            // deal with scope the easy way
            var that = this;
            // wrapping everything in a timeout so that the JS can finish initializing first
            // (If the .swf is cached in IE, it fires the callback *immediately* before JS has
            // finished executing.  setTimeout(function, 0) fixes that)
            setTimeout(function() {
                clearTimeout(that._timeout);
                that.ready = true;

                // There is a bug in flash player where if no values have been saved and the page is
                // then refreshed, the flashcookie gets deleted - even if another tab *had* saved a
                // value to the flashcookie.
                // So to fix, we immediately save something
                that.set('__flashBugFix', '1');

                //this.log('info', 'js', 'Ready!')
                if (that.config.onready) {
                    that.config.onready();
                }
            }, 0);
        },


        /**
         * If the swf had an error but is still able to communicate with JavaScript, it will call this function.
         * This function is also called if the time limit is reached and flash has not yet loaded.
         * This function is most commonly called when either flash is not installed or local storage has been disabled.
         * If an onerror function was provided in the config, this function will fire it.
         *
         * @private
         */
        onerror: function() {
            clearTimeout(this._timeout);
            //this.log('info', 'js', 'Error reported by storage.swf');
            if (this.config.onerror) {
                this.config.onerror();
            }
        }

    };
}());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvc3dmc3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCOztBQUVqQixvQkFBb0I7O0FBRXBCLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx5RUFBeUU7QUFDekUsaUVBQWlFO0FBQ2pFLCtEQUErRDtBQUMvRCw0REFBNEQ7QUFDNUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6InN3ZnN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGVnYWN5L290aGVycy9zd2ZzdG9yZS5qc1wiKTtcbiIsIi8qKlxyXG4gKiBTd2ZTdG9yZSAtIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBjcm9zcy1kb21haW4gZmxhc2ggY29va2llc1xyXG4gKlxyXG4gKiBodHRwOi8vZ2l0aHViLmNvbS9uZnJpZWRseS9KYXZhc2NyaXB0LUZsYXNoLUNvb2tpZXNcclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEwIGJ5IE5hdGhhbiBGcmllZGx5IC0gaHR0cDovL25mcmllZGx5LmNvbVxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gKiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLypqc2xpbnQgYnJvd3NlcjogdHJ1ZSwgZGV2ZWw6IHRydWUsIHZhcnM6IHRydWUsIHdoaXRlOiB0cnVlLCBub21lbjogdHJ1ZSwgcGx1c3BsdXM6IHRydWUsIHJlZ2V4cDogdHJ1ZSAqL1xyXG4vKmdsb2JhbHMgU3dmU3RvcmUgKi9cclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gaHR0cDovL2Vqb2huLm9yZy9ibG9nL2VjbWFzY3JpcHQtNS1zdHJpY3QtbW9kZS1qc29uLWFuZC1tb3JlL1xyXG5cclxuICAgIHZhciBjb3VudGVyID0gMDsgLy8gYSBjb3VudGVyIGZvciBlbGVtZW50IGlkJ3MgYW5kIHdoYXRub3RcclxuXHJcbiAgICB2YXIgYWxwbnVtID0gL1teYS16MC05X10vaWc7IC8vYSByZWdleCB0byBmaW5kIGFueXRoaW5nIHRoYXRzIG5vdCBsZXR0ZXJzIGFuZCBudW1iZXJzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2ZTdG9yZSBjb25zdHJ1Y3RvciAtIGNyZWF0ZXMgYSBuZXcgU3dmU3RvcmUgb2JqZWN0IGFuZCBlbWJlZHMgdGhlIC5zd2YgaW50byB0aGUgd2ViIHBhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogdXNhZ2U6XHJcbiAgICAgKiB2YXIgbXlTd2ZTdG9yZSA9IG5ldyBTd2ZTdG9yZSh7XHJcbiAgICAgKiAgIG5hbWVzcGFjZTogXCJteV9jb29sX2FwcFwiLFxyXG4gICAgICogICBzd2ZfdXJsOiBcImh0dHA6Ly9leGFtcGxlLmNvbS9wYXRoL3RvL3N0b3JhZ2Uuc3dmXCIsXHJcbiAgICAgKiAgIG9ucmVhZHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICogICAgIGNvbnNvbGUubG9nKCdyZWFkeSEnLCBteVN3ZlN0b3JlLmdldCgnbXlfa2V5JykpO1xyXG4gICAgICogICB9LFxyXG4gICAgICogICBvbmVycm9yOiBmdW5jdGlvbigpIHtcclxuICAgICAqICAgICBjb25zb2xlLmVycm9yKCdzd2ZTdG9yZSBmYWlsZWQgdG8gbG9hZCA6KCcpO1xyXG4gICAgICogICB9XHJcbiAgICAgKiB9KTtcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZy5zd2ZfdXJsPXN0b3JhZ2Uuc3dmXSAtIFVybCB0byBzdG9yYWdlLnN3Zi4gTXVzdCBiZSBhbiBhYnNvbHV0ZSB1cmwgKHdpdGggaHR0cDovLyBhbmQgYWxsKSB0byB3b3JrIGNyb3NzLWRvbWFpblxyXG4gICAgICogQHBhcmFtIHtmdW5jdG9ufSBbY29uZmlnLm9ucmVhZHldIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgU3dmU3RvcmUgaXMgbG9hZGVkLiBSZWNvbW1lbmRlZC5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjb25maWcub25lcnJvcl0gQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBmaXJlZCBpZiB0aGUgU3dmU3RvcmUgZmFpbHMgdG8gbG9hZC4gUmVjb21tZW5kZWQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZy5uYW1lc3BhY2U9XCJzd2ZzdG9yZVwiXSBUaGUgbmFtZXNwYWNlIHRvIHVzZSBpbiBib3RoIEpTIGFuZCB0aGUgU1dGLiBBbGxvd3MgYSBwYWdlIHRvIGhhdmUgbW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBvZiBTd2ZTdG9yZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY29uZmlnLnBhdGhdIFRoZSBwYXRoIG9mIHRoZSBMU08gLSBzaW1pbGFyIHRvIGEgY29va2llJ3MgcGF0aCwgc2V0dGluZyBpdCB0byBcIi9cIiBhbGxvd3Mgb3RoZXIgLnN3ZiBmaWxlcyBvbiB0aGUgZG9tYWluIHRvIHJlYWQvd3JpdGUgdG8gaXRcclxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gW2NvbmZpZy50aW1lb3V0PTEwXSBUaGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gd2FpdCBiZWZvcmUgYXNzdW1pbmcgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSBmbGFzaC5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbmZpZy5kZWJ1Zz1mYWxzZV0gSXMgZGVidWcgbW9kZSBlbmFibGVkPyBJZiBzbywgbWVzYWdlcyB3aWxsIGJlIGxvZ2dlZCB0byB0aGUgY29uc29sZSBhbmQgdGhlIC5zd2Ygd2lsbCBiZSByZW5kZXJlZCBvbiB0aGUgcGFnZSAoYWx0aG91Z2ggaXQgd2lsbCBiZSBhbiBlbXB0eSB3aGl0ZSBib3ggdW5sZXNzIGl0IGNhbm5vdCBjb21tdW5pY2F0ZSB3aXRoIEpTLiBUaGVuIGl0IHdpbGwgbG9nIGVycm9ycyB0byB0aGUgLnN3ZilcclxuICAgICAqL1xyXG4gICAgd2luZG93LlN3ZlN0b3JlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGhhdmUgc29tZXRoaW5nIG9mIGEgY29uZmlndXJhdGlvblxyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgICAgIHN3Zl91cmw6ICdzdG9yYWdlLnN3ZicsIC8vIHRoaXMgc2hvdWxkIGJlIGEgY29tcGxldGUgdXJsIChodHRwOi8vZXhhbXBsZS5jb20vcGF0aC90by9zdG9yYWdlLnN3ZikgZm9yIGNyb3NzLWRvbWFpbiB1c2FnZVxyXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdzd2ZzdG9yZScsXHJcbiAgICAgICAgICAgIHBhdGg6IG51bGwsXHJcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcclxuICAgICAgICAgICAgdGltZW91dDogMTAsIC8vIG51bWJlciBvZiBzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGNvbmNsdWRpbmcgdGhlcmUgd2FzIGFuIGVycm9yXHJcbiAgICAgICAgICAgIG9ucmVhZHk6IG51bGwsXHJcbiAgICAgICAgICAgIG9uZXJyb3I6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBrZXk7XHJcbiAgICAgICAgZm9yIChrZXkgaW4gZGVmYXVsdHMpIHtcclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWdba2V5XSA9IGRlZmF1bHRzW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlnLm5hbWVzcGFjZSA9IGNvbmZpZy5uYW1lc3BhY2UucmVwbGFjZShhbHBudW0sICdfJyk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuU3dmU3RvcmVbY29uZmlnLm5hbWVzcGFjZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJUaGVyZSBpcyBhbHJlYWR5IGFuIGluc3RhbmNlIG9mIFN3ZlN0b3JlIHVzaW5nIHRoZSAnXCIgKyBjb25maWcubmFtZXNwYWNlICsgXCInIG5hbWVzcGFjZS4gVXNlIHRoYXQgaW5zdGFuY2Ugb3Igc3BlY2lmeSBhbiBhbHRlcm5hdGUgbmFtZXNwYWNlIGluIHRoZSBjb25maWcuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICAgICAgLy8gYSBjb3VwbGUgb2YgYmFzaWMgdGltZXNhdmVyIGZ1bmN0aW9uc1xyXG4gICAgICAgIGZ1bmN0aW9uIGlkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJTd2ZTdG9yZV9cIiArIGNvbmZpZy5uYW1lc3BhY2UgKyBcIl9cIiArIChjb3VudGVyKyspO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZGl2KHZpc2libGUpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTtcclxuICAgICAgICAgICAgZC5pZCA9IGlkKCk7XHJcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0dGluZyBkaXNwbGF5Om5vbmUgY2F1c2VzIHRoZSAuc3dmIHRvIG5vdCByZW5kZXIgYXQgYWxsXHJcbiAgICAgICAgICAgICAgICBkLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgZC5zdHlsZS50b3AgPSBcIi0yMDAwcHhcIjtcclxuICAgICAgICAgICAgICAgIGQuc3R5bGUubGVmdCA9IFwiLTIwMDBweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IGEgbG9nZ2VyIHJlYWR5IGlmIGFwcHJvcHJpYXRlXHJcbiAgICAgICAgaWYgKGNvbmZpZy5kZWJ1Zykge1xyXG4gICAgICAgICAgICAvLyBpZiB3ZSdyZSBpbiBhIGJyb3dzZXIgdGhhdCBkb2Vzbid0IGhhdmUgYSBjb25zb2xlLCBidWlsZCBvbmVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9nZ2VyT3V0cHV0ID0gZGl2KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNvbnNvbGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nOiBmdW5jdGlvbihtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBkaXYodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uaW5uZXJIVE1MID0gbXNnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXJPdXRwdXQuYXBwZW5kQ2hpbGQobSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvZyA9IGZ1bmN0aW9uKHR5cGUsIHNvdXJjZSwgbXNnKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSAoc291cmNlID09PSAnc3dmU3RvcmUnKSA/ICdzd2YnIDogc291cmNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihjb25zb2xlW3R5cGVdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVbdHlwZV0oJ1N3ZlN0b3JlIC0gJyArIGNvbmZpZy5uYW1lc3BhY2UgKyAnICgnICsgc291cmNlICsgJyk6ICcgKyBtc2cpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3dmU3RvcmUgLSAnICsgY29uZmlnLm5hbWVzcGFjZSArIFwiOiBcIiArIHR5cGUgKyAnICgnICsgc291cmNlICsgJyk6ICcgKyBtc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nID0gZnVuY3Rpb24oKSB7fTsgLy8gaWYgd2UncmUgbm90IGluIGRlYnVnLCB0aGVuIHdlIGRvbid0IG5lZWQgdG8gbG9nIGFueXRoaW5nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZygnaW5mbycsICdqcycsICdJbml0aWFsaXppbmcuLi4nKTtcclxuXHJcbiAgICAgICAgLy8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0IGphdmFzY3JpcHQgcHJvdmlkZXMgdG8gZmxhc2ggbXVzdCBiZSBnbG9iYWxseSBhY2Nlc3NpYmxlXHJcbiAgICAgICAgU3dmU3RvcmVbY29uZmlnLm5hbWVzcGFjZV0gPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgc3dmQ29udGFpbmVyID0gZGl2KGNvbmZpZy5kZWJ1Zyk7XHJcblxyXG4gICAgICAgIHZhciBzd2ZOYW1lID0gaWQoKTtcclxuXHJcbiAgICAgICAgdmFyIGZsYXNodmFycyA9IFwibG9nZm49U3dmU3RvcmUuXCIgKyBjb25maWcubmFtZXNwYWNlICsgXCIubG9nJmFtcDtcIiArXHJcbiAgICAgICAgICAgIFwib25sb2FkPVN3ZlN0b3JlLlwiICsgY29uZmlnLm5hbWVzcGFjZSArIFwiLm9ubG9hZCZhbXA7XCIgKyAvLyBcIm9ubG9hZFwiIHNldHMgdGhpcy5yZWFkeSBhbmQgdGhlbiBjYWxscyB0aGUgXCJvbnJlYWR5XCIgY29uZmlnIG9wdGlvblxyXG4gICAgICAgIFwib25lcnJvcj1Td2ZTdG9yZS5cIiArIGNvbmZpZy5uYW1lc3BhY2UgKyBcIi5vbmVycm9yJmFtcDtcIiArXHJcbiAgICAgICAgICAgIChjb25maWcucGF0aCA/IFwiTFNPUGF0aD1cIiArIGNvbmZpZy5wYXRoICsgJyZhbXA7JyA6ICcnKSArXHJcbiAgICAgICAgICAgIFwiTFNPTmFtZT1cIiArIGNvbmZpZy5uYW1lc3BhY2U7XHJcblxyXG5cclxuICAgICAgICBzd2ZDb250YWluZXIuaW5uZXJIVE1MID0gJzxvYmplY3QgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCI1MDBcIiBjb2RlYmFzZT1cImh0dHBzOi8vZG93bmxvYWQubWFjcm9tZWRpYS5jb20vcHViL3Nob2Nrd2F2ZS9jYWJzL2ZsYXNoL3N3Zmxhc2guY2FiXCIgaWQ9XCInICtcclxuICAgICAgICAgICAgc3dmTmFtZSArICdcIiBjbGFzc2lkPVwiY2xzaWQ6RDI3Q0RCNkUtQUU2RC0xMWNmLTk2QjgtNDQ0NTUzNTQwMDAwXCI+JyArXHJcbiAgICAgICAgICAgICdcdDxwYXJhbSB2YWx1ZT1cIicgKyBjb25maWcuc3dmX3VybCArICdcIiBuYW1lPVwibW92aWVcIj4nICtcclxuICAgICAgICAgICAgJ1x0PHBhcmFtIHZhbHVlPVwiJyArIGZsYXNodmFycyArICdcIiBuYW1lPVwiRmxhc2hWYXJzXCI+JyArXHJcbiAgICAgICAgICAgICdcdDxwYXJhbSB2YWx1ZT1cImFsd2F5c1wiIG5hbWU9XCJhbGxvd1NjcmlwdEFjY2Vzc1wiPicgK1xyXG4gICAgICAgICAgICAnXHQ8ZW1iZWQgaGVpZ2h0PVwiMzc1XCIgYWxpZ249XCJtaWRkbGVcIiB3aWR0aD1cIjUwMFwiIHBsdWdpbnNwYWdlPVwiaHR0cHM6Ly93d3cubWFjcm9tZWRpYS5jb20vZ28vZ2V0Zmxhc2hwbGF5ZXJcIiAnICtcclxuICAgICAgICAgICAgJ2ZsYXNodmFycz1cIicgKyBmbGFzaHZhcnMgKyAnXCIgdHlwZT1cImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCIgYWxsb3dzY3JpcHRhY2Nlc3M9XCJhbHdheXNcIiBxdWFsaXR5PVwiaGlnaFwiIGxvb3A9XCJmYWxzZVwiIHBsYXk9XCJ0cnVlXCIgJyArXHJcbiAgICAgICAgICAgICduYW1lPVwiJyArIHN3Zk5hbWUgKyAnXCIgYmdjb2xvcj1cIiNmZmZmZmZcIiBzcmM9XCInICsgY29uZmlnLnN3Zl91cmwgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICc8L29iamVjdD4nO1xyXG5cclxuICAgICAgICB0aGlzLnN3ZiA9IGRvY3VtZW50W3N3Zk5hbWVdIHx8IHdpbmRvd1tzd2ZOYW1lXTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFN3ZlN0b3JlW2NvbmZpZy5uYW1lc3BhY2VdLmxvZygnZXJyb3InLCAnanMnLCAnVGltZW91dCByZWFjaGVkLCBhc3N1bWluZyAnICsgY29uZmlnLnN3Zl91cmwgKyAnIGZhaWxlZCB0byBsb2FkIGFuZCBmaXJpbmcgdGhlIG9uZXJyb3IgY2FsbGJhY2suJyk7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcub25lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLm9uZXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGNvbmZpZy50aW1lb3V0ICogMTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgZXZlcnl0aGluZyB3ZSBzZW5kIHRvIGZsYXNoIGJlY2F1c2UgaXQgY2FuJ3QgdGFrZSBmdW5jdGlvbnMgYXMgYXJndW1lbnRzXHJcbiAgICBmdW5jdGlvbiBjaGVja0RhdGEoZGF0YSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdTd2ZTdG9yZSBFcnJvcjogRnVuY3Rpb25zIGNhbm5vdCBiZSB1c2VkIGFzIGtleXMgb3IgdmFsdWVzLic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFN3ZlN0b3JlLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAgICAgdmVyc2lvbjogXCIxLjlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBpcyBhbiBpbmRpY2F0b3Igb2Ygd2hldGhlciBvciBub3QgdGhlIFN3ZlN0b3JlIGlzIGluaXRpYWxpemVkLlxyXG4gICAgICAgICAqIFVzZSB0aGUgb25yZWFkeSBhbmQgb25lcnJvciBjb25maWcgb3B0aW9ucyByYXRoZXIgdGhhbiBjaGVja2luZyB0aGlzIHZhcmlhYmxlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlYWR5OiBmYWxzZSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0cyB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBnaXZlbiB2YWx1ZSBpbiB0aGUgc3dmXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1JlYWR5KCk7XHJcbiAgICAgICAgICAgIGNoZWNrRGF0YShrZXkpO1xyXG4gICAgICAgICAgICBjaGVja0RhdGEodmFsdWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMubG9nKCdkZWJ1ZycsICdqcycsICdTZXR0aW5nICcgKyBrZXkgKyAnPScgKyB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3dmLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgdGhlIHNwZWNpZmllZCB2YWx1ZSBmcm9tIHRoZSBzd2YuXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gdmFsdWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1JlYWR5KCk7XHJcbiAgICAgICAgICAgIGNoZWNrRGF0YShrZXkpO1xyXG4gICAgICAgICAgICAvL3RoaXMubG9nKCdkZWJ1ZycsICdqcycsICdSZWFkaW5nICcgKyBrZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zd2YuZ2V0KGtleSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFsbCBzdG9yZWQgdmFsdWVzIGZyb20gdGhlIHN3Zi5cclxuICAgICAgICAgKiBAcmV0dXJuIHtvYmplY3R9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QWxsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tSZWFkeSgpO1xyXG4gICAgICAgICAgICAvL3RoaXMubG9nKCdkZWJ1ZycsICdqcycsICdSZWFkaW5nICcgKyBrZXkpO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuc3dmLmdldEFsbCgpO1xyXG4gICAgICAgICAgICAvLyBwcmVzdW1hYmx5IHRoZSB1c2VyIHdhbnRzIHRvIGxvb3AgdGhyb3VnaCB0aGVpciB2YWx1ZXMsIG5vdCBpbmNsdWRpbmcgdGhlIGludGVybmFsIF9fZmxhc2hCdWdGaXggdmFsdWVcclxuICAgICAgICAgICAgaWYgKGRhdGEuX19mbGFzaEJ1Z0ZpeCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEuX19mbGFzaEJ1Z0ZpeDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWxldGUgdGhlIHNwZWNpZmllZCBrZXkgZnJvbSB0aGUgc3dmXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xlYXI6IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1JlYWR5KCk7XHJcbiAgICAgICAgICAgIGNoZWNrRGF0YShrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnN3Zi5jbGVhcihrZXkpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdlIG5lZWQgdG8gcnVuIHRoaXMgY2hlY2sgYmVmb3JlIHR5aW5nIHRvIHdvcmsgd2l0aCB0aGUgc3dmXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9jaGVja1JlYWR5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnU3dmU3RvcmUgaXMgbm90IHlldCBmaW5pc2hlZCBpbml0aWFsaXppbmcuIFBhc3MgYSBjb25maWcub25yZWFkeSBjYWxsYmFjayBvciB3YWl0IHVudGlsIHRoaXMucmVhZHkgaXMgdHJ1ZSBiZWZvcmUgdHJ5aW5nIHRvIHVzZSBhIFN3ZlN0b3JlIGluc3RhbmNlLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IHRoZSBzd2YgY2FsbHMgdG8gYW5ub3VuY2UgdGhhdCBpdCBoYXMgbG9hZGVkLlxyXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb24gaW4gdHVybiBmaXJlcyB0aGUgb25yZWFkeSBmdW5jdGlvbiBpZiBwcm92aWRlZCBpbiB0aGUgY29uZmlnLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBcIm9ubG9hZFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gZGVhbCB3aXRoIHNjb3BlIHRoZSBlYXN5IHdheVxyXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIC8vIHdyYXBwaW5nIGV2ZXJ5dGhpbmcgaW4gYSB0aW1lb3V0IHNvIHRoYXQgdGhlIEpTIGNhbiBmaW5pc2ggaW5pdGlhbGl6aW5nIGZpcnN0XHJcbiAgICAgICAgICAgIC8vIChJZiB0aGUgLnN3ZiBpcyBjYWNoZWQgaW4gSUUsIGl0IGZpcmVzIHRoZSBjYWxsYmFjayAqaW1tZWRpYXRlbHkqIGJlZm9yZSBKUyBoYXNcclxuICAgICAgICAgICAgLy8gZmluaXNoZWQgZXhlY3V0aW5nLiAgc2V0VGltZW91dChmdW5jdGlvbiwgMCkgZml4ZXMgdGhhdClcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGF0Ll90aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVhZHkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIGEgYnVnIGluIGZsYXNoIHBsYXllciB3aGVyZSBpZiBubyB2YWx1ZXMgaGF2ZSBiZWVuIHNhdmVkIGFuZCB0aGUgcGFnZSBpc1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlbiByZWZyZXNoZWQsIHRoZSBmbGFzaGNvb2tpZSBnZXRzIGRlbGV0ZWQgLSBldmVuIGlmIGFub3RoZXIgdGFiICpoYWQqIHNhdmVkIGFcclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlIHRvIHRoZSBmbGFzaGNvb2tpZS5cclxuICAgICAgICAgICAgICAgIC8vIFNvIHRvIGZpeCwgd2UgaW1tZWRpYXRlbHkgc2F2ZSBzb21ldGhpbmdcclxuICAgICAgICAgICAgICAgIHRoYXQuc2V0KCdfX2ZsYXNoQnVnRml4JywgJzEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubG9nKCdpbmZvJywgJ2pzJywgJ1JlYWR5IScpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5jb25maWcub25yZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY29uZmlnLm9ucmVhZHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIHRoZSBzd2YgaGFkIGFuIGVycm9yIGJ1dCBpcyBzdGlsbCBhYmxlIHRvIGNvbW11bmljYXRlIHdpdGggSmF2YVNjcmlwdCwgaXQgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24uXHJcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiBpcyBhbHNvIGNhbGxlZCBpZiB0aGUgdGltZSBsaW1pdCBpcyByZWFjaGVkIGFuZCBmbGFzaCBoYXMgbm90IHlldCBsb2FkZWQuXHJcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiBpcyBtb3N0IGNvbW1vbmx5IGNhbGxlZCB3aGVuIGVpdGhlciBmbGFzaCBpcyBub3QgaW5zdGFsbGVkIG9yIGxvY2FsIHN0b3JhZ2UgaGFzIGJlZW4gZGlzYWJsZWQuXHJcbiAgICAgICAgICogSWYgYW4gb25lcnJvciBmdW5jdGlvbiB3YXMgcHJvdmlkZWQgaW4gdGhlIGNvbmZpZywgdGhpcyBmdW5jdGlvbiB3aWxsIGZpcmUgaXQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9uZXJyb3I6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5sb2coJ2luZm8nLCAnanMnLCAnRXJyb3IgcmVwb3J0ZWQgYnkgc3RvcmFnZS5zd2YnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9uZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uZXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG59KCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9