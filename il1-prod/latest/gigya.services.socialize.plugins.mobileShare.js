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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.socialize.plugins.mobileShare.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.socialize.plugins.mobileShare.js":
/*!****************************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.mobileShare.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="gigya.services.socialize.plugins.js" />
if (typeof window.gigya.services.socialize.plugins == 'undefined') window.gigya.services.socialize.plugins = {};
(function () {
	window.gigya.services.socialize.plugins.mobileShare = {
		instances: {},
		showMobileShareUI: function (c, p, i) {
			privateScope.createInstance(c, p, i);
		}
	}
	var publicScope = window.gigya.services.socialize.plugins.mobileShare;

	var privateScope = {
		instances_size: 0,
		mobileSharePlugin: function (c, p, i) {
			this._c = c;
			this._p = p;
			this._i = i;
			this._elid = p.containerID
		},
		createInstance: function (c, p, i) {
			var el = document.getElementById(p.containerID);
			if (el == null) return;
			el.innerHTML = "";

			var instance = new privateScope.mobileSharePlugin(c, p, i);
			publicScope.instances[p.containerID] = instance;
			privateScope.instances_size++;
			instance.init();
		},
		createDefaultTemplates: function () {
			var templates = {
				_map: {},
				get: function (key) {
					return this._map[key];
				},

				set: function (key, value) {
					this._map[key] = (value instanceof Array) ? value.join("") : value;
				}
			}
			templates.set("mobileShareCanvas",
			[
				'<div class="gig-mobileShare-header" id="${headerContainerID}"></div>',
				'<div class="gig-mobileShare-content" id="${contentContainerID}"></div>',
				'<div class="gig-mobileShare-footer" id="${footerContainerID}"></div>'
			]);
			return templates;
		},
		defaultCss: [
			'.gig-mobileShare *, div.gig-mobileShare, .gig-mobileShare span, .gig-mobileShare a:hover, .gig-mobileShare a:visited, .gig-mobileShare a:link, .gig-mobileShare a:active{',
			'border:none; line-height:normal;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;',
			'font-family:arial;font-size:10px;color:#797979;background:none;text-align:left}',
			'div.gig-mobileShare {}',
			'div.gig-mobileShare-header {height: 33px;z-index: 99999;background-color: #323232;}',
			'div.gig-mobileShare-content {z-index: 99998; background-color: #F5F5F5}',
			'div.gig-mobileShare-footer {height: 236px;z-index: 99999; background-color: #555555}'
		]
	}

	privateScope.mobileSharePlugin.prototype = {
		_firedLoadEvent: false,
		_userInfo: null,
		_p: null,
		_templates: null,

		init: function () {
			this._templates = privateScope.createDefaultTemplates();
			if (this._p.cssPrefix || !privateScope.addedCSS) {
				window.gigya.global.addCSS(privateScope.defaultCss, this._p.cssPrefix);
				privateScope.addedCSS = true;
			}
			this.refreshUserInfo(true);
			var This = this;
			var fnRefresh = function (res) { This.onUserInfoUpdated(res, false) };
			window.gigya.services.socialize.addEventHandlers({ listenerType: 'component' }, {
				onLogout: fnRefresh,
				onLogin: fnRefresh,
				onConnectionAdded: fnRefresh
			});
		},
		getText: function (textKey, replaceStr, withStr) {
		    return window.gigya.pluginUtils.lang.getLocalizedText('', textKey, this._p.lang, replaceStr, withStr);
		},
		draw: function () {
			if (!this._firedLoadEvent) {
				this.firedLoadEvent = true;
				window.gigya.events.dispatchForWidget({ eventName: 'load', containerID: this._p['containerID'] }, this._p);
			}
			var containerID = this._p.containerID;
			var templateParams = {
				headerContainerID: containerID+'_header',
				contentContainerID: containerID+'_content',
				footerContainerID: containerID+'_footer'
			}
			document.getElementById(this._p.containerID).innerHTML=window.gigya.utils.templates.fill(this._templates.get('mobileShareCanvas'), templateParams);
			var scroll = window.gigya.utils.viewport.getScroll();
			var vp = window.gigya.utils.viewport.getInnerSize();

			var divHeader = document.getElementById(templateParams.headerContainerID);
			var divContent = document.getElementById(templateParams.contentContainerID);
			var divFooter = document.getElementById(templateParams.footerContainerID);

			document.getElementById(this._p.containerID).style.width = vp.w+'px';
			document.getElementById(this._p.containerID).style.height = vp.h+'px';

			divContent.style.height = (vp.h - divFooter.offsetHeight - divHeader.offsetHeight)+'px';
			document.getElementById(templateParams.footerContainerID).style.bottom = scroll.top+vp.h;
		},
		close: function() {

		},
		showShare: function() {

		},
		showEmail: function() {

		},
		share: function() {

		},
		email: function() {

		},
		getCheckedProviders: function() {
			
		},
		refreshUserInfo: function(first) {
			var This=this;
			window.gigya.socialize.getUserInfo(this._p, {
				callback: function(res) {
					This.onUserInfoUpdated(res, first);
				}
			});
		},
		onUserInfoUpdated: function(res, first) {
			this._userInfo = res.user;
			if (first) this.draw();
			//TODO: update checkboxes checked status
		},
		getInstanceRefString: function () {
			return 'gigya.services.socialize.plugins.mobileShare.instances[\'' + encodeURIComponent(this._elid) + '\']';
		}
	}


})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLm1vYmlsZVNoYXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLFdBQVcsWUFBSyw0Q0FBNEMsWUFBSztBQUNqRTtBQUNBLENBQUMsWUFBSztBQUNOLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFLOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQkFBa0I7QUFDakUsZ0RBQWdELG1CQUFtQjtBQUNuRSwrQ0FBK0Msa0JBQWtCO0FBQ2pFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw2S0FBNks7QUFDN0ssZ0JBQWdCLG9CQUFvQixZQUFZLFdBQVcsY0FBYyxxQkFBcUIsV0FBVyxXQUFXLHFCQUFxQixnQkFBZ0I7QUFDekosc0JBQXNCLGVBQWUsY0FBYyxnQkFBZ0IsZ0JBQWdCO0FBQ25GLDBCQUEwQjtBQUMxQixnQ0FBZ0MsYUFBYSxlQUFlLDJCQUEyQjtBQUN2RixpQ0FBaUMsZUFBZSwyQkFBMkI7QUFDM0UsZ0NBQWdDLGNBQWMsZUFBZSwyQkFBMkI7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksWUFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLEdBQUcsWUFBSyxzQ0FBc0MsNEJBQTRCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxhQUFhLFlBQUs7QUFDbEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUksWUFBSywyQkFBMkIseURBQXlEO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFlBQUs7QUFDL0QsZ0JBQWdCLFlBQUs7QUFDckIsWUFBWSxZQUFLOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLEdBQUc7QUFDSDs7QUFFQSxHQUFHO0FBQ0g7O0FBRUEsR0FBRztBQUNIOztBQUVBLEdBQUc7QUFDSDs7QUFFQSxHQUFHO0FBQ0g7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHLFlBQUs7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDLEkiLCJmaWxlIjoiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubW9iaWxlU2hhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sZWdhY3kvcGx1Z2lucy9naWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5tb2JpbGVTaGFyZS5qc1wiKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5qc1wiIC8+XHJcbmlmICh0eXBlb2YgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMgPT0gJ3VuZGVmaW5lZCcpIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zID0ge307XHJcbihmdW5jdGlvbiAoKSB7XHJcblx0Z2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubW9iaWxlU2hhcmUgPSB7XHJcblx0XHRpbnN0YW5jZXM6IHt9LFxyXG5cdFx0c2hvd01vYmlsZVNoYXJlVUk6IGZ1bmN0aW9uIChjLCBwLCBpKSB7XHJcblx0XHRcdHByaXZhdGVTY29wZS5jcmVhdGVJbnN0YW5jZShjLCBwLCBpKTtcclxuXHRcdH1cclxuXHR9XHJcblx0dmFyIHB1YmxpY1Njb3BlID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubW9iaWxlU2hhcmU7XHJcblxyXG5cdHZhciBwcml2YXRlU2NvcGUgPSB7XHJcblx0XHRpbnN0YW5jZXNfc2l6ZTogMCxcclxuXHRcdG1vYmlsZVNoYXJlUGx1Z2luOiBmdW5jdGlvbiAoYywgcCwgaSkge1xyXG5cdFx0XHR0aGlzLl9jID0gYztcclxuXHRcdFx0dGhpcy5fcCA9IHA7XHJcblx0XHRcdHRoaXMuX2kgPSBpO1xyXG5cdFx0XHR0aGlzLl9lbGlkID0gcC5jb250YWluZXJJRFxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZUluc3RhbmNlOiBmdW5jdGlvbiAoYywgcCwgaSkge1xyXG5cdFx0XHR2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwLmNvbnRhaW5lcklEKTtcclxuXHRcdFx0aWYgKGVsID09IG51bGwpIHJldHVybjtcclxuXHRcdFx0ZWwuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcblx0XHRcdHZhciBpbnN0YW5jZSA9IG5ldyBwcml2YXRlU2NvcGUubW9iaWxlU2hhcmVQbHVnaW4oYywgcCwgaSk7XHJcblx0XHRcdHB1YmxpY1Njb3BlLmluc3RhbmNlc1twLmNvbnRhaW5lcklEXSA9IGluc3RhbmNlO1xyXG5cdFx0XHRwcml2YXRlU2NvcGUuaW5zdGFuY2VzX3NpemUrKztcclxuXHRcdFx0aW5zdGFuY2UuaW5pdCgpO1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZURlZmF1bHRUZW1wbGF0ZXM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHRlbXBsYXRlcyA9IHtcclxuXHRcdFx0XHRfbWFwOiB7fSxcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9tYXBba2V5XTtcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9tYXBba2V5XSA9ICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSA/IHZhbHVlLmpvaW4oXCJcIikgOiB2YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGVtcGxhdGVzLnNldChcIm1vYmlsZVNoYXJlQ2FudmFzXCIsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1tb2JpbGVTaGFyZS1oZWFkZXJcIiBpZD1cIiR7aGVhZGVyQ29udGFpbmVySUR9XCI+PC9kaXY+JyxcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1tb2JpbGVTaGFyZS1jb250ZW50XCIgaWQ9XCIke2NvbnRlbnRDb250YWluZXJJRH1cIj48L2Rpdj4nLFxyXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLW1vYmlsZVNoYXJlLWZvb3RlclwiIGlkPVwiJHtmb290ZXJDb250YWluZXJJRH1cIj48L2Rpdj4nXHJcblx0XHRcdF0pO1xyXG5cdFx0XHRyZXR1cm4gdGVtcGxhdGVzO1xyXG5cdFx0fSxcclxuXHRcdGRlZmF1bHRDc3M6IFtcclxuXHRcdFx0Jy5naWctbW9iaWxlU2hhcmUgKiwgZGl2LmdpZy1tb2JpbGVTaGFyZSwgLmdpZy1tb2JpbGVTaGFyZSBzcGFuLCAuZ2lnLW1vYmlsZVNoYXJlIGE6aG92ZXIsIC5naWctbW9iaWxlU2hhcmUgYTp2aXNpdGVkLCAuZ2lnLW1vYmlsZVNoYXJlIGE6bGluaywgLmdpZy1tb2JpbGVTaGFyZSBhOmFjdGl2ZXsnLFxyXG5cdFx0XHQnYm9yZGVyOm5vbmU7IGxpbmUtaGVpZ2h0Om5vcm1hbDtwYWRkaW5nOjBweDttYXJnaW46MHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7d2lkdGg6YXV0bztmbG9hdDpub25lOy1tb3otYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MDsnLFxyXG5cdFx0XHQnZm9udC1mYW1pbHk6YXJpYWw7Zm9udC1zaXplOjEwcHg7Y29sb3I6Izc5Nzk3OTtiYWNrZ3JvdW5kOm5vbmU7dGV4dC1hbGlnbjpsZWZ0fScsXHJcblx0XHRcdCdkaXYuZ2lnLW1vYmlsZVNoYXJlIHt9JyxcclxuXHRcdFx0J2Rpdi5naWctbW9iaWxlU2hhcmUtaGVhZGVyIHtoZWlnaHQ6IDMzcHg7ei1pbmRleDogOTk5OTk7YmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjt9JyxcclxuXHRcdFx0J2Rpdi5naWctbW9iaWxlU2hhcmUtY29udGVudCB7ei1pbmRleDogOTk5OTg7IGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjV9JyxcclxuXHRcdFx0J2Rpdi5naWctbW9iaWxlU2hhcmUtZm9vdGVyIHtoZWlnaHQ6IDIzNnB4O3otaW5kZXg6IDk5OTk5OyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1fSdcclxuXHRcdF1cclxuXHR9XHJcblxyXG5cdHByaXZhdGVTY29wZS5tb2JpbGVTaGFyZVBsdWdpbi5wcm90b3R5cGUgPSB7XHJcblx0XHRfZmlyZWRMb2FkRXZlbnQ6IGZhbHNlLFxyXG5cdFx0X3VzZXJJbmZvOiBudWxsLFxyXG5cdFx0X3A6IG51bGwsXHJcblx0XHRfdGVtcGxhdGVzOiBudWxsLFxyXG5cclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy5fdGVtcGxhdGVzID0gcHJpdmF0ZVNjb3BlLmNyZWF0ZURlZmF1bHRUZW1wbGF0ZXMoKTtcclxuXHRcdFx0aWYgKHRoaXMuX3AuY3NzUHJlZml4IHx8ICFwcml2YXRlU2NvcGUuYWRkZWRDU1MpIHtcclxuXHRcdFx0XHRnaWd5YS5nbG9iYWwuYWRkQ1NTKHByaXZhdGVTY29wZS5kZWZhdWx0Q3NzLCB0aGlzLl9wLmNzc1ByZWZpeCk7XHJcblx0XHRcdFx0cHJpdmF0ZVNjb3BlLmFkZGVkQ1NTID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnJlZnJlc2hVc2VySW5mbyh0cnVlKTtcclxuXHRcdFx0dmFyIFRoaXMgPSB0aGlzO1xyXG5cdFx0XHR2YXIgZm5SZWZyZXNoID0gZnVuY3Rpb24gKHJlcykgeyBUaGlzLm9uVXNlckluZm9VcGRhdGVkKHJlcywgZmFsc2UpIH07XHJcblx0XHRcdGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5hZGRFdmVudEhhbmRsZXJzKHsgbGlzdGVuZXJUeXBlOiAnY29tcG9uZW50JyB9LCB7XHJcblx0XHRcdFx0b25Mb2dvdXQ6IGZuUmVmcmVzaCxcclxuXHRcdFx0XHRvbkxvZ2luOiBmblJlZnJlc2gsXHJcblx0XHRcdFx0b25Db25uZWN0aW9uQWRkZWQ6IGZuUmVmcmVzaFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRnZXRUZXh0OiBmdW5jdGlvbiAodGV4dEtleSwgcmVwbGFjZVN0ciwgd2l0aFN0cikge1xyXG5cdFx0ICAgIHJldHVybiBnaWd5YS5wbHVnaW5VdGlscy5sYW5nLmdldExvY2FsaXplZFRleHQoJycsIHRleHRLZXksIHRoaXMuX3AubGFuZywgcmVwbGFjZVN0ciwgd2l0aFN0cik7XHJcblx0XHR9LFxyXG5cdFx0ZHJhdzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuX2ZpcmVkTG9hZEV2ZW50KSB7XHJcblx0XHRcdFx0dGhpcy5maXJlZExvYWRFdmVudCA9IHRydWU7XHJcblx0XHRcdFx0Z2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnbG9hZCcsIGNvbnRhaW5lcklEOiB0aGlzLl9wWydjb250YWluZXJJRCddIH0sIHRoaXMuX3ApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBjb250YWluZXJJRCA9IHRoaXMuX3AuY29udGFpbmVySUQ7XHJcblx0XHRcdHZhciB0ZW1wbGF0ZVBhcmFtcyA9IHtcclxuXHRcdFx0XHRoZWFkZXJDb250YWluZXJJRDogY29udGFpbmVySUQrJ19oZWFkZXInLFxyXG5cdFx0XHRcdGNvbnRlbnRDb250YWluZXJJRDogY29udGFpbmVySUQrJ19jb250ZW50JyxcclxuXHRcdFx0XHRmb290ZXJDb250YWluZXJJRDogY29udGFpbmVySUQrJ19mb290ZXInXHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fcC5jb250YWluZXJJRCkuaW5uZXJIVE1MPWdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuX3RlbXBsYXRlcy5nZXQoJ21vYmlsZVNoYXJlQ2FudmFzJyksIHRlbXBsYXRlUGFyYW1zKTtcclxuXHRcdFx0dmFyIHNjcm9sbCA9IGdpZ3lhLnV0aWxzLnZpZXdwb3J0LmdldFNjcm9sbCgpO1xyXG5cdFx0XHR2YXIgdnAgPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRJbm5lclNpemUoKTtcclxuXHJcblx0XHRcdHZhciBkaXZIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZVBhcmFtcy5oZWFkZXJDb250YWluZXJJRCk7XHJcblx0XHRcdHZhciBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVQYXJhbXMuY29udGVudENvbnRhaW5lcklEKTtcclxuXHRcdFx0dmFyIGRpdkZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRlbXBsYXRlUGFyYW1zLmZvb3RlckNvbnRhaW5lcklEKTtcclxuXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX3AuY29udGFpbmVySUQpLnN0eWxlLndpZHRoID0gdnAudysncHgnO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9wLmNvbnRhaW5lcklEKS5zdHlsZS5oZWlnaHQgPSB2cC5oKydweCc7XHJcblxyXG5cdFx0XHRkaXZDb250ZW50LnN0eWxlLmhlaWdodCA9ICh2cC5oIC0gZGl2Rm9vdGVyLm9mZnNldEhlaWdodCAtIGRpdkhlYWRlci5vZmZzZXRIZWlnaHQpKydweCc7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRlbXBsYXRlUGFyYW1zLmZvb3RlckNvbnRhaW5lcklEKS5zdHlsZS5ib3R0b20gPSBzY3JvbGwudG9wK3ZwLmg7XHJcblx0XHR9LFxyXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdH0sXHJcblx0XHRzaG93U2hhcmU6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdH0sXHJcblx0XHRzaG93RW1haWw6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdH0sXHJcblx0XHRzaGFyZTogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0fSxcclxuXHRcdGVtYWlsOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHR9LFxyXG5cdFx0Z2V0Q2hlY2tlZFByb3ZpZGVyczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHJlZnJlc2hVc2VySW5mbzogZnVuY3Rpb24oZmlyc3QpIHtcclxuXHRcdFx0dmFyIFRoaXM9dGhpcztcclxuXHRcdFx0Z2lneWEuc29jaWFsaXplLmdldFVzZXJJbmZvKHRoaXMuX3AsIHtcclxuXHRcdFx0XHRjYWxsYmFjazogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRUaGlzLm9uVXNlckluZm9VcGRhdGVkKHJlcywgZmlyc3QpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0b25Vc2VySW5mb1VwZGF0ZWQ6IGZ1bmN0aW9uKHJlcywgZmlyc3QpIHtcclxuXHRcdFx0dGhpcy5fdXNlckluZm8gPSByZXMudXNlcjtcclxuXHRcdFx0aWYgKGZpcnN0KSB0aGlzLmRyYXcoKTtcclxuXHRcdFx0Ly9UT0RPOiB1cGRhdGUgY2hlY2tib3hlcyBjaGVja2VkIHN0YXR1c1xyXG5cdFx0fSxcclxuXHRcdGdldEluc3RhbmNlUmVmU3RyaW5nOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiAnZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubW9iaWxlU2hhcmUuaW5zdGFuY2VzW1xcJycgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5fZWxpZCkgKyAnXFwnXSc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==