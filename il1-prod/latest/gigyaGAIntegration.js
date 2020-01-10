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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/others/gigyaGAIntegration.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/others/gigyaGAIntegration.js":
/*!*************************************************!*\
  !*** ./src/legacy/others/gigyaGAIntegration.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof window.gigya == 'undefined') window.gigya = { isGigya: true };
if (!window.gigya.defaultEventMaps) window.gigya.defaultEventMaps = [];

// Support for Google Analytics

// ga.js queue creation
var _gaq = _gaq || [];

// mapp gigya events to ga,js events
; (function () {
	var getCategoryFunction = function (apiName) {
		return function (e) { return (e.source ? 'Gigya ' + e.source : 'Gigya ' + apiName + ' API') }
	}
	var _gaq_trackSocial = function() {
		_gaq.push(['_trackSocial'].concat(Array.prototype.slice.call(arguments)));
	}
	var _gaq_trackEvent = function() {
		_gaq.push(['_trackEvent'].concat(Array.prototype.slice.call(arguments)));
	}
	var onSendDone = function(a,b,c) {
		var arProviders = a.split(',');
		for (var i=0; i<arProviders.length; i++) {
			_gaq_trackSocial(arProviders[i],b,c);
		}
	}
	window.gigya.defaultEventMaps.push(
	{
		defaultMethod: _gaq_trackEvent,
		eventMap: [
			{ events: "sendDone", method: onSendDone, args: ['$providers', 'Gigya $source - Share Published', '$targetURL', document.location.href] },
			{ events: "followClicked", method: _gaq_trackSocial, args: ['$button.provider', 'Gigya Follow - button clicked', '$button.actionURL', document.location.href] },
			{ events: "reactionClicked", args: ['Gigya Reaction Bar', 'Button Clicked', '$reaction.text'] },
			{ events: "reactionUnclicked", args: ['Gigya Reaction Bar', 'Button Unclicked', '$reaction.text'] },
			{ events: "commentSubmitted", args: [function (e) {return (e.mode == 'reviews' ? 'Gigya Reviews' : 'Gigya Comments') }, function (e) { return (e.mode == 'reviews' ? 'Review Published' : 'Comment Published') }, '$streamID'] },
			{ events: "commentVoted", args: [function (e) {return (e.mode == 'reviews' ? 'Gigya Reviews' : 'Gigya Comments') }, function (e) { return (e.mode == 'reviews' ? 'Review Voted' : 'Comment Voted')}, '$streamID']},
			{ events: "login", args: [getCategoryFunction('Login'), 'Social Login', '$provider'] },
			{ events: "logout", args: [getCategoryFunction('Logout'), 'Logout'] },
			{ events: "connectionAdded", args: [getCategoryFunction('Add Connection'), 'Social Connection Added', '$provider'] },
			{ events: "connectionRemoved", args: [getCategoryFunction('Remove Connection'), 'Social Connection Removed', '$provider'] }
		]
	});
})();

// Support for Google Universal Analytics

// analytics.js queue creation
(function (_win, _doc, _ga) {
    _win['GoogleAnalyticsObject'] = _ga;
    _win[_ga] = _win[_ga] || function () {
        (_win[_ga].q = _win[_ga].q || []).push(arguments);
    };
})(window, document, 'ga');

// map gigya events to analytics.js events
; (function () {
    var getCategoryFunction = function (apiName) {
        return function (e) {
            return (e.source ? 'Gigya ' + e.source : 'Gigya ' + apiName + ' API');
        };
    };

    var _gaq_trackSocial = function (socialNetwork, actionDescription, actionURL, currentPageURL) {
        ga('send', {
            'hitType': 'social',
            'socialNetwork': socialNetwork,
            'socialAction': actionDescription,
            'socialTarget': actionURL,
            'page': currentPageURL
        });
    };

    var _gaq_trackEvent = function (category, actionDescription, target, currentPageURL) {
        ga('send', {
            'hitType': 'event',
            'eventCategory': category,
            'eventAction': actionDescription,
            'eventLabel': target,
            'eventValue': currentPageURL
        });
    };

    var onSendDone = function (a, b, c) {
        var arProviders = a.split(',');
        for (var i = 0; i < arProviders.length; i++) {
            _gaq_trackSocial(arProviders[i], b, c);
        }
    };

    window.gigya.defaultEventMaps.push(
	{
	    defaultMethod: _gaq_trackEvent,
	    eventMap: [
			{ events: "sendDone", method: onSendDone, args: ['$providers', 'Gigya $source - Share Published', '$targetURL', document.location.href] },
			{ events: "followClicked", method: _gaq_trackSocial, args: ['$button.provider', 'Gigya Follow - button clicked', '$button.actionURL', document.location.href] },
			{ events: "reactionClicked", args: ['Gigya Reaction Bar', 'Button Clicked', '$reaction.text'] },
			{ events: "reactionUnclicked", args: ['Gigya Reaction Bar', 'Button Unclicked', '$reaction.text'] },
			{ events: "commentSubmitted", args: [function (e) { return (e.mode == 'reviews' ? 'Gigya Reviews' : 'Gigya Comments') }, function (e) { return (e.mode == 'reviews' ? 'Review Published' : 'Comment Published') }, '$streamID'] },
			{ events: "commentVoted", args: [function (e) { return (e.mode == 'reviews' ? 'Gigya Reviews' : 'Gigya Comments') }, function (e) { return (e.mode == 'reviews' ? 'Review Voted' : 'Comment Voted') }, '$streamID'] },
			{ events: "login", args: [getCategoryFunction('Login'), 'Social Login', '$provider'] },
			{ events: "logout", args: [getCategoryFunction('Logout'), 'Logout'] },
			{ events: "connectionAdded", args: [getCategoryFunction('Add Connection'), 'Social Connection Added', '$provider'] },
			{ events: "connectionRemoved", args: [getCategoryFunction('Remove Connection'), 'Social Connection Removed', '$provider'] }
	    ]
	});
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvZ2lneWFHQUludGVncmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxXQUFXLFlBQUssaUJBQWlCLFlBQUssSUFBSTtBQUMxQyxLQUFLLFlBQUssbUJBQW1CLFlBQUs7O0FBRWxDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxZQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSx3SUFBd0k7QUFDNUksSUFBSSw4SkFBOEo7QUFDbEssSUFBSSw4RkFBOEY7QUFDbEcsSUFBSSxrR0FBa0c7QUFDdEcsSUFBSSxrREFBa0QsbUVBQW1FLGdCQUFnQiwwRUFBMEUsZ0JBQWdCO0FBQ25PLElBQUksOENBQThDLG1FQUFtRSxnQkFBZ0IsaUVBQWlFLGVBQWU7QUFDck4sSUFBSSxxRkFBcUY7QUFDekYsSUFBSSxvRUFBb0U7QUFDeEUsSUFBSSxtSEFBbUg7QUFDdkgsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLFlBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdJQUF3STtBQUM1SSxJQUFJLDhKQUE4SjtBQUNsSyxJQUFJLDhGQUE4RjtBQUNsRyxJQUFJLGtHQUFrRztBQUN0RyxJQUFJLGtEQUFrRCxvRUFBb0UsZ0JBQWdCLDBFQUEwRSxnQkFBZ0I7QUFDcE8sSUFBSSw4Q0FBOEMsb0VBQW9FLGdCQUFnQixrRUFBa0UsZ0JBQWdCO0FBQ3hOLElBQUkscUZBQXFGO0FBQ3pGLElBQUksb0VBQW9FO0FBQ3hFLElBQUksbUhBQW1IO0FBQ3ZILElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRixDQUFDIiwiZmlsZSI6ImdpZ3lhR0FJbnRlZ3JhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9vdGhlcnMvZ2lneWFHQUludGVncmF0aW9uLmpzXCIpO1xuIiwiaWYgKHR5cGVvZiBnaWd5YSA9PSAndW5kZWZpbmVkJykgZ2lneWEgPSB7IGlzR2lneWE6IHRydWUgfTtcclxuaWYgKCFnaWd5YS5kZWZhdWx0RXZlbnRNYXBzKSBnaWd5YS5kZWZhdWx0RXZlbnRNYXBzID0gW107XHJcblxyXG4vLyBTdXBwb3J0IGZvciBHb29nbGUgQW5hbHl0aWNzXHJcblxyXG4vLyBnYS5qcyBxdWV1ZSBjcmVhdGlvblxyXG52YXIgX2dhcSA9IF9nYXEgfHwgW107XHJcblxyXG4vLyBtYXBwIGdpZ3lhIGV2ZW50cyB0byBnYSxqcyBldmVudHNcclxuOyAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciBnZXRDYXRlZ29yeUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFwaU5hbWUpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gKGUuc291cmNlID8gJ0dpZ3lhICcgKyBlLnNvdXJjZSA6ICdHaWd5YSAnICsgYXBpTmFtZSArICcgQVBJJykgfVxyXG5cdH1cclxuXHR2YXIgX2dhcV90cmFja1NvY2lhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0X2dhcS5wdXNoKFsnX3RyYWNrU29jaWFsJ10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuXHR9XHJcblx0dmFyIF9nYXFfdHJhY2tFdmVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG5cdH1cclxuXHR2YXIgb25TZW5kRG9uZSA9IGZ1bmN0aW9uKGEsYixjKSB7XHJcblx0XHR2YXIgYXJQcm92aWRlcnMgPSBhLnNwbGl0KCcsJyk7XHJcblx0XHRmb3IgKHZhciBpPTA7IGk8YXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0X2dhcV90cmFja1NvY2lhbChhclByb3ZpZGVyc1tpXSxiLGMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRnaWd5YS5kZWZhdWx0RXZlbnRNYXBzLnB1c2goXHJcblx0e1xyXG5cdFx0ZGVmYXVsdE1ldGhvZDogX2dhcV90cmFja0V2ZW50LFxyXG5cdFx0ZXZlbnRNYXA6IFtcclxuXHRcdFx0eyBldmVudHM6IFwic2VuZERvbmVcIiwgbWV0aG9kOiBvblNlbmREb25lLCBhcmdzOiBbJyRwcm92aWRlcnMnLCAnR2lneWEgJHNvdXJjZSAtIFNoYXJlIFB1Ymxpc2hlZCcsICckdGFyZ2V0VVJMJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZl0gfSxcclxuXHRcdFx0eyBldmVudHM6IFwiZm9sbG93Q2xpY2tlZFwiLCBtZXRob2Q6IF9nYXFfdHJhY2tTb2NpYWwsIGFyZ3M6IFsnJGJ1dHRvbi5wcm92aWRlcicsICdHaWd5YSBGb2xsb3cgLSBidXR0b24gY2xpY2tlZCcsICckYnV0dG9uLmFjdGlvblVSTCcsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWZdIH0sXHJcblx0XHRcdHsgZXZlbnRzOiBcInJlYWN0aW9uQ2xpY2tlZFwiLCBhcmdzOiBbJ0dpZ3lhIFJlYWN0aW9uIEJhcicsICdCdXR0b24gQ2xpY2tlZCcsICckcmVhY3Rpb24udGV4dCddIH0sXHJcblx0XHRcdHsgZXZlbnRzOiBcInJlYWN0aW9uVW5jbGlja2VkXCIsIGFyZ3M6IFsnR2lneWEgUmVhY3Rpb24gQmFyJywgJ0J1dHRvbiBVbmNsaWNrZWQnLCAnJHJlYWN0aW9uLnRleHQnXSB9LFxyXG5cdFx0XHR7IGV2ZW50czogXCJjb21tZW50U3VibWl0dGVkXCIsIGFyZ3M6IFtmdW5jdGlvbiAoZSkge3JldHVybiAoZS5tb2RlID09ICdyZXZpZXdzJyA/ICdHaWd5YSBSZXZpZXdzJyA6ICdHaWd5YSBDb21tZW50cycpIH0sIGZ1bmN0aW9uIChlKSB7IHJldHVybiAoZS5tb2RlID09ICdyZXZpZXdzJyA/ICdSZXZpZXcgUHVibGlzaGVkJyA6ICdDb21tZW50IFB1Ymxpc2hlZCcpIH0sICckc3RyZWFtSUQnXSB9LFxyXG5cdFx0XHR7IGV2ZW50czogXCJjb21tZW50Vm90ZWRcIiwgYXJnczogW2Z1bmN0aW9uIChlKSB7cmV0dXJuIChlLm1vZGUgPT0gJ3Jldmlld3MnID8gJ0dpZ3lhIFJldmlld3MnIDogJ0dpZ3lhIENvbW1lbnRzJykgfSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIChlLm1vZGUgPT0gJ3Jldmlld3MnID8gJ1JldmlldyBWb3RlZCcgOiAnQ29tbWVudCBWb3RlZCcpfSwgJyRzdHJlYW1JRCddfSxcclxuXHRcdFx0eyBldmVudHM6IFwibG9naW5cIiwgYXJnczogW2dldENhdGVnb3J5RnVuY3Rpb24oJ0xvZ2luJyksICdTb2NpYWwgTG9naW4nLCAnJHByb3ZpZGVyJ10gfSxcclxuXHRcdFx0eyBldmVudHM6IFwibG9nb3V0XCIsIGFyZ3M6IFtnZXRDYXRlZ29yeUZ1bmN0aW9uKCdMb2dvdXQnKSwgJ0xvZ291dCddIH0sXHJcblx0XHRcdHsgZXZlbnRzOiBcImNvbm5lY3Rpb25BZGRlZFwiLCBhcmdzOiBbZ2V0Q2F0ZWdvcnlGdW5jdGlvbignQWRkIENvbm5lY3Rpb24nKSwgJ1NvY2lhbCBDb25uZWN0aW9uIEFkZGVkJywgJyRwcm92aWRlciddIH0sXHJcblx0XHRcdHsgZXZlbnRzOiBcImNvbm5lY3Rpb25SZW1vdmVkXCIsIGFyZ3M6IFtnZXRDYXRlZ29yeUZ1bmN0aW9uKCdSZW1vdmUgQ29ubmVjdGlvbicpLCAnU29jaWFsIENvbm5lY3Rpb24gUmVtb3ZlZCcsICckcHJvdmlkZXInXSB9XHJcblx0XHRdXHJcblx0fSk7XHJcbn0pKCk7XHJcblxyXG4vLyBTdXBwb3J0IGZvciBHb29nbGUgVW5pdmVyc2FsIEFuYWx5dGljc1xyXG5cclxuLy8gYW5hbHl0aWNzLmpzIHF1ZXVlIGNyZWF0aW9uXHJcbihmdW5jdGlvbiAoX3dpbiwgX2RvYywgX2dhKSB7XHJcbiAgICBfd2luWydHb29nbGVBbmFseXRpY3NPYmplY3QnXSA9IF9nYTtcclxuICAgIF93aW5bX2dhXSA9IF93aW5bX2dhXSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKF93aW5bX2dhXS5xID0gX3dpbltfZ2FdLnEgfHwgW10pLnB1c2goYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsICdnYScpO1xyXG5cclxuLy8gbWFwIGdpZ3lhIGV2ZW50cyB0byBhbmFseXRpY3MuanMgZXZlbnRzXHJcbjsgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBnZXRDYXRlZ29yeUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFwaU5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChlLnNvdXJjZSA/ICdHaWd5YSAnICsgZS5zb3VyY2UgOiAnR2lneWEgJyArIGFwaU5hbWUgKyAnIEFQSScpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfZ2FxX3RyYWNrU29jaWFsID0gZnVuY3Rpb24gKHNvY2lhbE5ldHdvcmssIGFjdGlvbkRlc2NyaXB0aW9uLCBhY3Rpb25VUkwsIGN1cnJlbnRQYWdlVVJMKSB7XHJcbiAgICAgICAgZ2EoJ3NlbmQnLCB7XHJcbiAgICAgICAgICAgICdoaXRUeXBlJzogJ3NvY2lhbCcsXHJcbiAgICAgICAgICAgICdzb2NpYWxOZXR3b3JrJzogc29jaWFsTmV0d29yayxcclxuICAgICAgICAgICAgJ3NvY2lhbEFjdGlvbic6IGFjdGlvbkRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAnc29jaWFsVGFyZ2V0JzogYWN0aW9uVVJMLFxyXG4gICAgICAgICAgICAncGFnZSc6IGN1cnJlbnRQYWdlVVJMXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfZ2FxX3RyYWNrRXZlbnQgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIGFjdGlvbkRlc2NyaXB0aW9uLCB0YXJnZXQsIGN1cnJlbnRQYWdlVVJMKSB7XHJcbiAgICAgICAgZ2EoJ3NlbmQnLCB7XHJcbiAgICAgICAgICAgICdoaXRUeXBlJzogJ2V2ZW50JyxcclxuICAgICAgICAgICAgJ2V2ZW50Q2F0ZWdvcnknOiBjYXRlZ29yeSxcclxuICAgICAgICAgICAgJ2V2ZW50QWN0aW9uJzogYWN0aW9uRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICdldmVudExhYmVsJzogdGFyZ2V0LFxyXG4gICAgICAgICAgICAnZXZlbnRWYWx1ZSc6IGN1cnJlbnRQYWdlVVJMXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvblNlbmREb25lID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuICAgICAgICB2YXIgYXJQcm92aWRlcnMgPSBhLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhclByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBfZ2FxX3RyYWNrU29jaWFsKGFyUHJvdmlkZXJzW2ldLCBiLCBjKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdpZ3lhLmRlZmF1bHRFdmVudE1hcHMucHVzaChcclxuXHR7XHJcblx0ICAgIGRlZmF1bHRNZXRob2Q6IF9nYXFfdHJhY2tFdmVudCxcclxuXHQgICAgZXZlbnRNYXA6IFtcclxuXHRcdFx0eyBldmVudHM6IFwic2VuZERvbmVcIiwgbWV0aG9kOiBvblNlbmREb25lLCBhcmdzOiBbJyRwcm92aWRlcnMnLCAnR2lneWEgJHNvdXJjZSAtIFNoYXJlIFB1Ymxpc2hlZCcsICckdGFyZ2V0VVJMJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZl0gfSxcclxuXHRcdFx0eyBldmVudHM6IFwiZm9sbG93Q2xpY2tlZFwiLCBtZXRob2Q6IF9nYXFfdHJhY2tTb2NpYWwsIGFyZ3M6IFsnJGJ1dHRvbi5wcm92aWRlcicsICdHaWd5YSBGb2xsb3cgLSBidXR0b24gY2xpY2tlZCcsICckYnV0dG9uLmFjdGlvblVSTCcsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWZdIH0sXHJcblx0XHRcdHsgZXZlbnRzOiBcInJlYWN0aW9uQ2xpY2tlZFwiLCBhcmdzOiBbJ0dpZ3lhIFJlYWN0aW9uIEJhcicsICdCdXR0b24gQ2xpY2tlZCcsICckcmVhY3Rpb24udGV4dCddIH0sXHJcblx0XHRcdHsgZXZlbnRzOiBcInJlYWN0aW9uVW5jbGlja2VkXCIsIGFyZ3M6IFsnR2lneWEgUmVhY3Rpb24gQmFyJywgJ0J1dHRvbiBVbmNsaWNrZWQnLCAnJHJlYWN0aW9uLnRleHQnXSB9LFxyXG5cdFx0XHR7IGV2ZW50czogXCJjb21tZW50U3VibWl0dGVkXCIsIGFyZ3M6IFtmdW5jdGlvbiAoZSkgeyByZXR1cm4gKGUubW9kZSA9PSAncmV2aWV3cycgPyAnR2lneWEgUmV2aWV3cycgOiAnR2lneWEgQ29tbWVudHMnKSB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gKGUubW9kZSA9PSAncmV2aWV3cycgPyAnUmV2aWV3IFB1Ymxpc2hlZCcgOiAnQ29tbWVudCBQdWJsaXNoZWQnKSB9LCAnJHN0cmVhbUlEJ10gfSxcclxuXHRcdFx0eyBldmVudHM6IFwiY29tbWVudFZvdGVkXCIsIGFyZ3M6IFtmdW5jdGlvbiAoZSkgeyByZXR1cm4gKGUubW9kZSA9PSAncmV2aWV3cycgPyAnR2lneWEgUmV2aWV3cycgOiAnR2lneWEgQ29tbWVudHMnKSB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gKGUubW9kZSA9PSAncmV2aWV3cycgPyAnUmV2aWV3IFZvdGVkJyA6ICdDb21tZW50IFZvdGVkJykgfSwgJyRzdHJlYW1JRCddIH0sXHJcblx0XHRcdHsgZXZlbnRzOiBcImxvZ2luXCIsIGFyZ3M6IFtnZXRDYXRlZ29yeUZ1bmN0aW9uKCdMb2dpbicpLCAnU29jaWFsIExvZ2luJywgJyRwcm92aWRlciddIH0sXHJcblx0XHRcdHsgZXZlbnRzOiBcImxvZ291dFwiLCBhcmdzOiBbZ2V0Q2F0ZWdvcnlGdW5jdGlvbignTG9nb3V0JyksICdMb2dvdXQnXSB9LFxyXG5cdFx0XHR7IGV2ZW50czogXCJjb25uZWN0aW9uQWRkZWRcIiwgYXJnczogW2dldENhdGVnb3J5RnVuY3Rpb24oJ0FkZCBDb25uZWN0aW9uJyksICdTb2NpYWwgQ29ubmVjdGlvbiBBZGRlZCcsICckcHJvdmlkZXInXSB9LFxyXG5cdFx0XHR7IGV2ZW50czogXCJjb25uZWN0aW9uUmVtb3ZlZFwiLCBhcmdzOiBbZ2V0Q2F0ZWdvcnlGdW5jdGlvbignUmVtb3ZlIENvbm5lY3Rpb24nKSwgJ1NvY2lhbCBDb25uZWN0aW9uIFJlbW92ZWQnLCAnJHByb3ZpZGVyJ10gfVxyXG5cdCAgICBdXHJcblx0fSk7XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=