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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/others/gigyaTargetAd.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/others/gigyaTargetAd.js":
/*!********************************************!*\
  !*** ./src/legacy/others/gigyaTargetAd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="GSJSSDK.js" />
(function () {
    if (typeof window.gigya == 'undefined') return;
    window.gigya.adTarget = {
        attachGoogleTag: function (params) {
            if (!params.methodName) params.methodName = 'socialize.getUserInfo';
            if (!params.targetingMap || !params.slot) return;
            var key = 'adTarget-' + params.methodName;
            window.gigya.utils.sessionCache.get(key, 86400000, function (cachedResponse) { //expires in a day or a browser session
                if (cachedResponse) {
                    if (params.methodName == 'socialize.getUserInfo' && cachedResponse.user && cachedResponse.user.providers && cachedResponse.user.identities['linkedin']) return;
                    for (var targetName in params.targetingMap) {
                        var targetValue = window.gigya.utils.object.getPropertyBySerializedName(cachedResponse, params.targetingMap[targetName], false);
                        params.slot.setTargeting(targetName, targetValue);
                    }
                } else {
                    var fnMethod = window.gigya.utils.object.getPropertyBySerializedName(window.gigya, params.methodName, false);
                    fnMethod(params.params, {
                        callback: function (response) {
                            if (response.errorCode == 0) {
                                window.gigya.utils.sessionCache.set(key, response);
                            }
                        }
                    });
                }
            });
        },
        attachLotame: function (params) {
            this._attach(params.methodName, params.params, params.targetingMap, function (targetName, targetValue) {
                params.target.add('ctax', 'Gigya^Targetable^' + targetName + '^' + targetValue);
            })
        },
        _attach: function (methodName, params, targetingMap, fnSetTargeting) {
            if (!methodName) methodName = 'socialize.getUserInfo';
            if (!targetingMap) return;
            var key = 'adTarget-' + methodName;
            window.gigya.utils.sessionCache.get(key, 86400000, function (cachedResponse) { //expires in a day or a browser session
                if (cachedResponse) {
                    if (methodName == 'socialize.getUserInfo' && cachedResponse.user && cachedResponse.user.providers && cachedResponse.user.identities['linkedin']) return;
                    for (var targetName in targetingMap) {
                        var targetValue = window.gigya.utils.object.getPropertyBySerializedName(cachedResponse, targetingMap[targetName], false);
                        if (targetValue) fnSetTargeting(targetName, targetValue);
                    }
                } else {
                    var fnMethod = window.gigya.utils.object.getPropertyBySerializedName(window.gigya, methodName, false);
                    fnMethod(params, {
                        callback: function (response) {
                            if (response.errorCode == 0) {
                                window.gigya.utils.sessionCache.set(key, response);
                            }
                        }
                    });
                }
            });
        }

    }
    var onUserChanged = function (response) {
        if (response.user) {
            window.gigya.utils.sessionCache.set('adTarget-socialize.getUserInfo', response);
        }
    }
    window.gigya.socialize.addEventHandlers({ listenerType: 'component' }, { onLogin: onUserChanged, onConnectionAdded: onUserChanged });
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvZ2lneWFUYXJnZXRBZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLGVBQWUsWUFBSztBQUNwQixJQUFJLFlBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksWUFBSyxrRUFBa0U7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQUs7QUFDL0M7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixtQ0FBbUMsWUFBSywwQ0FBMEMsWUFBSztBQUN2RjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBSztBQUNyQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFLLGtFQUFrRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBSztBQUMvQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1DQUFtQyxZQUFLLDBDQUEwQyxZQUFLO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFLO0FBQ3JDO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFLO0FBQ2pCO0FBQ0E7QUFDQSxJQUFJLFlBQUssNkJBQTZCLDRCQUE0QixHQUFHLDJEQUEyRDtBQUNoSSxDQUFDLEkiLCJmaWxlIjoiZ2lneWFUYXJnZXRBZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9vdGhlcnMvZ2lneWFUYXJnZXRBZC5qc1wiKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJHU0pTU0RLLmpzXCIgLz5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgZ2lneWEgPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuICAgIGdpZ3lhLmFkVGFyZ2V0ID0ge1xyXG4gICAgICAgIGF0dGFjaEdvb2dsZVRhZzogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAoIXBhcmFtcy5tZXRob2ROYW1lKSBwYXJhbXMubWV0aG9kTmFtZSA9ICdzb2NpYWxpemUuZ2V0VXNlckluZm8nO1xyXG4gICAgICAgICAgICBpZiAoIXBhcmFtcy50YXJnZXRpbmdNYXAgfHwgIXBhcmFtcy5zbG90KSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSAnYWRUYXJnZXQtJyArIHBhcmFtcy5tZXRob2ROYW1lO1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUuZ2V0KGtleSwgODY0MDAwMDAsIGZ1bmN0aW9uIChjYWNoZWRSZXNwb25zZSkgeyAvL2V4cGlyZXMgaW4gYSBkYXkgb3IgYSBicm93c2VyIHNlc3Npb25cclxuICAgICAgICAgICAgICAgIGlmIChjYWNoZWRSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubWV0aG9kTmFtZSA9PSAnc29jaWFsaXplLmdldFVzZXJJbmZvJyAmJiBjYWNoZWRSZXNwb25zZS51c2VyICYmIGNhY2hlZFJlc3BvbnNlLnVzZXIucHJvdmlkZXJzICYmIGNhY2hlZFJlc3BvbnNlLnVzZXIuaWRlbnRpdGllc1snbGlua2VkaW4nXSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRhcmdldE5hbWUgaW4gcGFyYW1zLnRhcmdldGluZ01hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSBnaWd5YS51dGlscy5vYmplY3QuZ2V0UHJvcGVydHlCeVNlcmlhbGl6ZWROYW1lKGNhY2hlZFJlc3BvbnNlLCBwYXJhbXMudGFyZ2V0aW5nTWFwW3RhcmdldE5hbWVdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5zbG90LnNldFRhcmdldGluZyh0YXJnZXROYW1lLCB0YXJnZXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm5NZXRob2QgPSBnaWd5YS51dGlscy5vYmplY3QuZ2V0UHJvcGVydHlCeVNlcmlhbGl6ZWROYW1lKGdpZ3lhLCBwYXJhbXMubWV0aG9kTmFtZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZuTWV0aG9kKHBhcmFtcy5wYXJhbXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yQ29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLnNldChrZXksIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF0dGFjaExvdGFtZTogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICB0aGlzLl9hdHRhY2gocGFyYW1zLm1ldGhvZE5hbWUsIHBhcmFtcy5wYXJhbXMsIHBhcmFtcy50YXJnZXRpbmdNYXAsIGZ1bmN0aW9uICh0YXJnZXROYW1lLCB0YXJnZXRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnRhcmdldC5hZGQoJ2N0YXgnLCAnR2lneWFeVGFyZ2V0YWJsZV4nICsgdGFyZ2V0TmFtZSArICdeJyArIHRhcmdldFZhbHVlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9hdHRhY2g6IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBwYXJhbXMsIHRhcmdldGluZ01hcCwgZm5TZXRUYXJnZXRpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFtZXRob2ROYW1lKSBtZXRob2ROYW1lID0gJ3NvY2lhbGl6ZS5nZXRVc2VySW5mbyc7XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0aW5nTWFwKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSAnYWRUYXJnZXQtJyArIG1ldGhvZE5hbWU7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZS5nZXQoa2V5LCA4NjQwMDAwMCwgZnVuY3Rpb24gKGNhY2hlZFJlc3BvbnNlKSB7IC8vZXhwaXJlcyBpbiBhIGRheSBvciBhIGJyb3dzZXIgc2Vzc2lvblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT0gJ3NvY2lhbGl6ZS5nZXRVc2VySW5mbycgJiYgY2FjaGVkUmVzcG9uc2UudXNlciAmJiBjYWNoZWRSZXNwb25zZS51c2VyLnByb3ZpZGVycyAmJiBjYWNoZWRSZXNwb25zZS51c2VyLmlkZW50aXRpZXNbJ2xpbmtlZGluJ10pIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0YXJnZXROYW1lIGluIHRhcmdldGluZ01hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSBnaWd5YS51dGlscy5vYmplY3QuZ2V0UHJvcGVydHlCeVNlcmlhbGl6ZWROYW1lKGNhY2hlZFJlc3BvbnNlLCB0YXJnZXRpbmdNYXBbdGFyZ2V0TmFtZV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFZhbHVlKSBmblNldFRhcmdldGluZyh0YXJnZXROYW1lLCB0YXJnZXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm5NZXRob2QgPSBnaWd5YS51dGlscy5vYmplY3QuZ2V0UHJvcGVydHlCeVNlcmlhbGl6ZWROYW1lKGdpZ3lhLCBtZXRob2ROYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm5NZXRob2QocGFyYW1zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvckNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZS5zZXQoa2V5LCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHZhciBvblVzZXJDaGFuZ2VkID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnVzZXIpIHtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLnNldCgnYWRUYXJnZXQtc29jaWFsaXplLmdldFVzZXJJbmZvJywgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdpZ3lhLnNvY2lhbGl6ZS5hZGRFdmVudEhhbmRsZXJzKHsgbGlzdGVuZXJUeXBlOiAnY29tcG9uZW50JyB9LCB7IG9uTG9naW46IG9uVXNlckNoYW5nZWQsIG9uQ29ubmVjdGlvbkFkZGVkOiBvblVzZXJDaGFuZ2VkIH0pO1xyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=