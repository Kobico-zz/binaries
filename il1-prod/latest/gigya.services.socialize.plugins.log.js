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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.socialize.plugins.log.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.socialize.plugins.log.js":
/*!********************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.log.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="GSJSSDK.js" />
window.gigya.utils.object.add(window.gigya.log, {
	hide: function () {
		var divLog = document.getElementById('gigya_log');
		if (divLog) divLog.parentNode.removeChild(divLog);
	},
	clear: function () {
		window.gigya.log._log = [];
	},
	show: function () {
		var arHTML = ['<div style="text-align:right;background-color:#B9C3D5"><a style="text-align:right;font:15px arial" href="javascript:gigya.log.clear();gigya.log.show();">[ Clear ]</a><a style="text-align:right;font:15px arial" href="javascript:gigya.log.hide();">[ Close ]</a></div><div style="overflow:auto;height:500px">'];
		var arLog = window.gigya.log._log;

		for (var i = arLog.length - 1; i >= 0; i--) {
			arHTML.push('<pre style="border-bottom:1px solid #000;height: 200px;width:980px;overflow:auto;border:1px solid #000; padding:5px;margin:5px;">' + window.gigya.utils.sanitize.sanitizeHTML(arLog[i]) + '</pre>');
		}
		arHTML.push('</div>');
		var divLog = document.getElementById('gigya_log');
		if (!divLog) {
			divLog = document.createElement('div');
			divLog.id = 'gigya_log';
			with (divLog.style) {
				backgroundColor = "#ffffff";
				border = "2px solid #cccccc";
				position = "absolute";
				zIndex = "10000000";
				top = "5px";
				left = "5px";
				//width = '80%';
				border = '2px solid #000';
			}
			window.gigya.utils.DOM.appendToBody(divLog);
		}
		divLog.style.width = '1024px';
		divLog.style.height = '520px';
		divLog.innerHTML = arHTML.join('');
	},
	hideConfig: function () {
		window.gigya.log.divConfig.parentNode.removeChild(window.gigya.log.divConfig);
		delete window.gigya.log.divConfig;
	},
	showConfig: function () {
		if (!window.gigya.log.divConfig) {
			window.gigya.log.divConfig = window.gigya.utils.DOM.createTopLevelDiv('gigyaDebugConfig');
			window.gigya.log.divConfig.style.position = 'absolute';
			window.gigya.log.divConfig.style.top = '5px';
			window.gigya.log.divConfig.style.left = '5px';
			window.gigya.log.divConfig.innerHTML = [
				'<div style="font-size:12px; font-family: arial; padding:10px;background-color: #FFFFFF; border: 1px solid #000000;">',
					'<div><input type="checkbox" onchange="this.checked?gigya.log.enable():gigya.log.disable()" ' + (window.gigya.log._isEnabled() ? 'checked' : '') + '>Log gigya API calls, events &#38; callbacks</div>',
					'<div style="border-top:1px solid #000000;padding:5px;margin:5px;">You can drag the following links to your bookmarks toolbar for ease of use:<br /><a href="javascript:gigya.debug()">Config Debug</a><br /><a href="javascript:gigya.showLog()">Show Debug Log</a></div>',
					'<div><td align="center"><input type="button" value="Done" onclick="gigya.log.hideConfig()"></div>',
				'</div>'].join('');
			window.gigya.utils.DOM.appendToBody(window.gigya.log.divConfig);
		}
		window.gigya.log.divConfig.style.width = 500+'px';
		window.gigya.log.divConfig.style.height = 150+'px';
	}
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxZQUFLLGtCQUFrQixZQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUUsWUFBSztBQUNQLEVBQUU7QUFDRjtBQUNBLDhDQUE4QyxxREFBcUQsb0RBQW9ELGlCQUFpQiwwQ0FBMEMsbURBQW1ELCtDQUErQztBQUNwVCxjQUFjLFlBQUs7O0FBRW5CLGdDQUFnQyxRQUFRO0FBQ3hDLHlEQUF5RCxjQUFjLFlBQVksY0FBYyxzQkFBc0IsYUFBYSxXQUFXLE1BQU0sWUFBSztBQUMxSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBSztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRSxZQUFLLHNDQUFzQyxZQUFLO0FBQ2xELFNBQVMsWUFBSztBQUNkLEVBQUU7QUFDRjtBQUNBLE9BQU8sWUFBSztBQUNaLEdBQUcsWUFBSyxpQkFBaUIsWUFBSztBQUM5QixHQUFHLFlBQUs7QUFDUixHQUFHLFlBQUs7QUFDUixHQUFHLFlBQUs7QUFDUixHQUFHLFlBQUs7QUFDUixnQ0FBZ0Msb0JBQW9CLGNBQWMsMEJBQTBCLDJCQUEyQjtBQUN2SCxzR0FBc0csWUFBSyx5RUFBeUU7QUFDcEwsK0NBQStDLFlBQVksV0FBVztBQUN0RTtBQUNBO0FBQ0EsR0FBRyxZQUFLLHdCQUF3QixZQUFLO0FBQ3JDO0FBQ0EsRUFBRSxZQUFLO0FBQ1AsRUFBRSxZQUFLO0FBQ1A7QUFDQSxDQUFDLEUiLCJmaWxlIjoiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGVnYWN5L3BsdWdpbnMvZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubG9nLmpzXCIpO1xuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkdTSlNTREsuanNcIiAvPlxyXG5naWd5YS51dGlscy5vYmplY3QuYWRkKGdpZ3lhLmxvZywge1xyXG5cdGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBkaXZMb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lneWFfbG9nJyk7XHJcblx0XHRpZiAoZGl2TG9nKSBkaXZMb2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZMb2cpO1xyXG5cdH0sXHJcblx0Y2xlYXI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGdpZ3lhLmxvZy5fbG9nID0gW107XHJcblx0fSxcclxuXHRzaG93OiBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgYXJIVE1MID0gWyc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtiYWNrZ3JvdW5kLWNvbG9yOiNCOUMzRDVcIj48YSBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7Zm9udDoxNXB4IGFyaWFsXCIgaHJlZj1cImphdmFzY3JpcHQ6Z2lneWEubG9nLmNsZWFyKCk7Z2lneWEubG9nLnNob3coKTtcIj5bIENsZWFyIF08L2E+PGEgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O2ZvbnQ6MTVweCBhcmlhbFwiIGhyZWY9XCJqYXZhc2NyaXB0OmdpZ3lhLmxvZy5oaWRlKCk7XCI+WyBDbG9zZSBdPC9hPjwvZGl2PjxkaXYgc3R5bGU9XCJvdmVyZmxvdzphdXRvO2hlaWdodDo1MDBweFwiPiddO1xyXG5cdFx0dmFyIGFyTG9nID0gZ2lneWEubG9nLl9sb2c7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IGFyTG9nLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdGFySFRNTC5wdXNoKCc8cHJlIHN0eWxlPVwiYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMDtoZWlnaHQ6IDIwMHB4O3dpZHRoOjk4MHB4O292ZXJmbG93OmF1dG87Ym9yZGVyOjFweCBzb2xpZCAjMDAwOyBwYWRkaW5nOjVweDttYXJnaW46NXB4O1wiPicgKyBnaWd5YS51dGlscy5zYW5pdGl6ZS5zYW5pdGl6ZUhUTUwoYXJMb2dbaV0pICsgJzwvcHJlPicpO1xyXG5cdFx0fVxyXG5cdFx0YXJIVE1MLnB1c2goJzwvZGl2PicpO1xyXG5cdFx0dmFyIGRpdkxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9sb2cnKTtcclxuXHRcdGlmICghZGl2TG9nKSB7XHJcblx0XHRcdGRpdkxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRkaXZMb2cuaWQgPSAnZ2lneWFfbG9nJztcclxuXHRcdFx0d2l0aCAoZGl2TG9nLnN0eWxlKSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XHJcblx0XHRcdFx0Ym9yZGVyID0gXCIycHggc29saWQgI2NjY2NjY1wiO1xyXG5cdFx0XHRcdHBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG5cdFx0XHRcdHpJbmRleCA9IFwiMTAwMDAwMDBcIjtcclxuXHRcdFx0XHR0b3AgPSBcIjVweFwiO1xyXG5cdFx0XHRcdGxlZnQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdC8vd2lkdGggPSAnODAlJztcclxuXHRcdFx0XHRib3JkZXIgPSAnMnB4IHNvbGlkICMwMDAnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdpZ3lhLnV0aWxzLkRPTS5hcHBlbmRUb0JvZHkoZGl2TG9nKTtcclxuXHRcdH1cclxuXHRcdGRpdkxvZy5zdHlsZS53aWR0aCA9ICcxMDI0cHgnO1xyXG5cdFx0ZGl2TG9nLnN0eWxlLmhlaWdodCA9ICc1MjBweCc7XHJcblx0XHRkaXZMb2cuaW5uZXJIVE1MID0gYXJIVE1MLmpvaW4oJycpO1xyXG5cdH0sXHJcblx0aGlkZUNvbmZpZzogZnVuY3Rpb24gKCkge1xyXG5cdFx0Z2lneWEubG9nLmRpdkNvbmZpZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdpZ3lhLmxvZy5kaXZDb25maWcpO1xyXG5cdFx0ZGVsZXRlIGdpZ3lhLmxvZy5kaXZDb25maWc7XHJcblx0fSxcclxuXHRzaG93Q29uZmlnOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoIWdpZ3lhLmxvZy5kaXZDb25maWcpIHtcclxuXHRcdFx0Z2lneWEubG9nLmRpdkNvbmZpZyA9IGdpZ3lhLnV0aWxzLkRPTS5jcmVhdGVUb3BMZXZlbERpdignZ2lneWFEZWJ1Z0NvbmZpZycpO1xyXG5cdFx0XHRnaWd5YS5sb2cuZGl2Q29uZmlnLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRcdFx0Z2lneWEubG9nLmRpdkNvbmZpZy5zdHlsZS50b3AgPSAnNXB4JztcclxuXHRcdFx0Z2lneWEubG9nLmRpdkNvbmZpZy5zdHlsZS5sZWZ0ID0gJzVweCc7XHJcblx0XHRcdGdpZ3lhLmxvZy5kaXZDb25maWcuaW5uZXJIVE1MID0gW1xyXG5cdFx0XHRcdCc8ZGl2IHN0eWxlPVwiZm9udC1zaXplOjEycHg7IGZvbnQtZmFtaWx5OiBhcmlhbDsgcGFkZGluZzoxMHB4O2JhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XCI+JyxcclxuXHRcdFx0XHRcdCc8ZGl2PjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbmNoYW5nZT1cInRoaXMuY2hlY2tlZD9naWd5YS5sb2cuZW5hYmxlKCk6Z2lneWEubG9nLmRpc2FibGUoKVwiICcgKyAoZ2lneWEubG9nLl9pc0VuYWJsZWQoKSA/ICdjaGVja2VkJyA6ICcnKSArICc+TG9nIGdpZ3lhIEFQSSBjYWxscywgZXZlbnRzICYjMzg7IGNhbGxiYWNrczwvZGl2PicsXHJcblx0XHRcdFx0XHQnPGRpdiBzdHlsZT1cImJvcmRlci10b3A6MXB4IHNvbGlkICMwMDAwMDA7cGFkZGluZzo1cHg7bWFyZ2luOjVweDtcIj5Zb3UgY2FuIGRyYWcgdGhlIGZvbGxvd2luZyBsaW5rcyB0byB5b3VyIGJvb2ttYXJrcyB0b29sYmFyIGZvciBlYXNlIG9mIHVzZTo8YnIgLz48YSBocmVmPVwiamF2YXNjcmlwdDpnaWd5YS5kZWJ1ZygpXCI+Q29uZmlnIERlYnVnPC9hPjxiciAvPjxhIGhyZWY9XCJqYXZhc2NyaXB0OmdpZ3lhLnNob3dMb2coKVwiPlNob3cgRGVidWcgTG9nPC9hPjwvZGl2PicsXHJcblx0XHRcdFx0XHQnPGRpdj48dGQgYWxpZ249XCJjZW50ZXJcIj48aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiRG9uZVwiIG9uY2xpY2s9XCJnaWd5YS5sb2cuaGlkZUNvbmZpZygpXCI+PC9kaXY+JyxcclxuXHRcdFx0XHQnPC9kaXY+J10uam9pbignJyk7XHJcblx0XHRcdGdpZ3lhLnV0aWxzLkRPTS5hcHBlbmRUb0JvZHkoZ2lneWEubG9nLmRpdkNvbmZpZyk7XHJcblx0XHR9XHJcblx0XHRnaWd5YS5sb2cuZGl2Q29uZmlnLnN0eWxlLndpZHRoID0gNTAwKydweCc7XHJcblx0XHRnaWd5YS5sb2cuZGl2Q29uZmlnLnN0eWxlLmhlaWdodCA9IDE1MCsncHgnO1xyXG5cdH1cclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==