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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/others/backplane.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/others/backplane.js":
/*!****************************************!*\
  !*** ./src/legacy/others/backplane.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.Backplane=window.Backplane||function(){var a=function(a){if(Backplane.getChannelID())a();else{var c=Backplane.onInit;Backplane.onInit=function(){c();a()}}};a.log=function(a){window.console&&window.console.log&&console.log("Backplane: "+a)};a.warn=function(a){window.console&&window.console.warn&&console.warn("Backplane WARNING: "+a)};a.error=function(a){window.console&&window.console.error&&console.error("Backplane ERROR: "+a)};a.version="1.2.7";a.channelByBus={};a.config={};a.initialized=!1;
a.runRequests=!1;a.firstFrameReceived=!1;a.cachedMessages={};a.cachedMessagesIndex=[];a.cacheMax=5;a.subscribers={};a.serverChannel=!0;a.awaiting={since:0,until:0,queue:[]};a.intervals={min:1,frequent:5,regular:60,slowdown:120};a.onInit=function(){};return a}();
Backplane.init=function(a){a=a||{};if(this.initialized||!a.serverBaseURL||!a.busName)return!1;this.initialized=!0;this.timers={};this.config=a;this.config.serverBaseURL=this.normalizeURL(a.serverBaseURL);this.channelByBus=this.getCookieChannels();this.cacheMax=a.cacheMax||this.cacheMax;"undefined"!==typeof a.serverChannel&&(this.serverChannel=a.serverChannel);"undefined"==typeof this.config.channelExpires&&(a=new Date,a.setFullYear(a.getFullYear()+5),this.config.channelExpires=a.toGMTString());this.renameOldCache();
this.getChannelName()?this.finishInit(!1):(this.invalidateCache(),this.fetchNewChannel());return!0};
Backplane.renameOldCache=function(){if(window.localStorage){var a=localStorage.getItem("cacheExpires"),b=localStorage.getItem("cachedMessages"),c=localStorage.getItem("cachedMessagesIndex");a&&(b&&c)&&(localStorage.setItem("backplaneCacheExpires",a),localStorage.setItem("backplaneCachedMessages",b),localStorage.setItem("backplaneCachedMessagesIndex",c),localStorage.removeItem("cacheExpires"),localStorage.removeItem("cachedMessages"),localStorage.removeItem("cachedMessagesIndex"))}};
Backplane.subscribe=function(a){if(!this.initialized)return!1;this.checkSubscribers()||(this.runRequests=!0,this.request());var b=(new Date).valueOf()+Math.random();this.subscribers[b]=a;if(this.firstFrameReceived)for(var c=0;c<this.cachedMessagesIndex.length;c++)a(this.cachedMessages[this.cachedMessagesIndex[c]]);return b};Backplane.unsubscribe=function(a){if(!this.initialized||!a)return!1;delete this.subscribers[a];this.checkSubscribers()||(this.runRequests=!1)};
Backplane.getChannelID=function(){return!this.initialized?!1:this.config.channelID};Backplane.expectMessages=function(a){this.expectMessagesWithin(60,a)};Backplane.expectMessagesWithin=function(a,b){if(!this.initialized||!a)return!1;this.awaiting.since=this.getTS();this.awaiting.interval=a;this.awaiting.nonstop=!b;b&&(b="string"==typeof b?[b]:b,this.awaiting.queue.push(b));var c=this.awaiting.since+a;c>this.awaiting.until&&(this.awaiting.until=c);this.request()};
Backplane.finishInit=function(a){"undefined"===typeof a?this.error("finishInit: server failed to return a new channel; stopping the request loop"):(a&&(this.channelByBus[this.config.busName]=a),this.setCookieChannels(),this.config.channelName=this.getChannelName(),this.config.channelID=this.generateChannelID(),this.onInit(),this.request())};Backplane.generateChannelID=function(){return this.config.serverBaseURL+"/bus/"+this.config.busName+"/channel/"+this.config.channelName};
Backplane.getChannelName=function(){if(!this.initialized)return!1;if(!this.channelByBus[this.config.busName]||"false"===this.channelByBus[this.config.busName]){if(this.serverChannel)return!1;this.invalidateCache();this.channelByBus[this.config.busName]=(new Date).valueOf().toString()+Math.random().toString().substr(2,5);this.setCookieChannels()}return this.channelByBus[this.config.busName]};Backplane.getTS=function(){return Math.round((new Date).valueOf()/1E3)};
Backplane.checkSubscribers=function(){for(var a in this.subscribers)return!0;return!1};Backplane.getCookieChannels=function(){var a=(document.cookie||"").match(/backplane-channel=(.*?)(?:$|;)/);if(!a||!a[1])return{};for(var b={},a=a[1].split("|"),c=0;c<a.length;c++){var d=a[c].split(":");b[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}return b};
Backplane.setCookieChannels=function(){var a=[],b;for(b in this.channelByBus)this.channelByBus.hasOwnProperty(b)&&a.push(encodeURIComponent(b)+":"+encodeURIComponent(this.channelByBus[b]));document.cookie="backplane-channel="+a.join("|")+";expires="+this.config.channelExpires+";path=/"};
Backplane.resetCookieChannel=function(){delete this.channelByBus[this.config.busName];this.invalidateCache();this.setCookieChannels();this.serverChannel?this.fetchNewChannel():(this.config.channelName=this.getChannelName(),this.config.channelID=this.generateChannelID())};
Backplane.fetchNewChannel=function(){for(var a=document.getElementById("fetchChannelId");a&&a.parentNode;){a.parentNode.removeChild(a);for(var b in a)delete a[b];a=document.getElementById("fetchChannelId")}a=document.createElement("script");a.src=this.config.serverBaseURL+"/bus/"+this.config.busName+"/channel/new?callback=Backplane.finishInit&rnd="+Math.random();a.type="text/javascript";a.id="fetchChannelId";b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)};
Backplane.invalidateCache=function(){Backplane.log("removing cached backplane messages");this.cachedMessages={};this.cachedMessagesIndex=[];window.localStorage&&(localStorage.removeItem("backplaneCacheExpires"),localStorage.removeItem("backplaneCachedMessages"),localStorage.removeItem("backplaneCachedMessagesIndex"))};Backplane.normalizeURL=function(a){return a.replace(/^\s*(https?:\/\/)?(.*?)[\s\/]*$/,function(a,c,d){return(c||window.location.protocol+"//")+d})};
Backplane.calcTimeout=function(){var a;a=this.getTS();if(a<this.awaiting.until){if(!this.awaiting.nonstop&&!this.awaiting.queue.length)return this.awaiting.until=a,this.calcTimeout();a-=this.awaiting.since;var b=this.intervals.frequent-this.intervals.min;a=this.intervals.min+Math.round(b*a/this.awaiting.interval)}else a<this.awaiting.until+this.intervals.slowdown?(a-=this.awaiting.until,b=this.intervals.regular-this.intervals.frequent,a=this.intervals.frequent+Math.round(b*a/this.intervals.slowdown)):
(a="undefined"==typeof this.since?0:this.intervals.regular,this.awaiting.nonstop=!1);return 1E3*a};
Backplane.request=function(){var a=this;if(!this.initialized||!this.runRequests)return!1;this.stopTimer("regular");this.stopTimer("watchdog");this.timers.regular=setTimeout(function(){a.timers.watchdog=setTimeout(function(){a.request()},5E3);if(window.localStorage&&!a.since){var b=localStorage.getItem("backplaneCacheExpires");if(b)if(b=Date.parse(b),new Date>b)a.log("cache expired"),a.invalidateCache();else if(a.cachedMessages=JSON.parse(localStorage.getItem("backplaneCachedMessages")),a.cachedMessagesIndex=
JSON.parse(localStorage.getItem("backplaneCachedMessagesIndex")),a.cachedMessages){for(var b=[],c=0;c<a.cachedMessagesIndex.length;c++)b[c]=a.cachedMessages[a.cachedMessagesIndex[c]];a.log(b.length+" message(s) in cache");a.response(b);return}}var d=document.createElement("script");d.type="text/javascript";d.charset="utf-8";d.src=a.config.channelID+"?callback=Backplane.response"+(a.since?"&since="+encodeURIComponent(a.since):"")+"&rnd="+Math.random();b=document.getElementsByTagName("head")[0]||document.documentElement;
b.insertBefore(d,b.firstChild);d.onload=d.onreadystatechange=function(){var a=d.readyState;if(!a||"loaded"===a||"complete"===a)d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d)}},this.calcTimeout())};
Backplane.response=function(a){this.stopTimer("watchdog");var a=a||[],b=a.length?a[a.length-1].id:this.since;"undefined"==typeof this.since&&(a="undefined"!=typeof this.config.initFrameFilter?this.config.initFrameFilter(a):[]);this.since=b||"";for(b=0;b<a.length;b++){for(var c in this.subscribers)if(this.subscribers.hasOwnProperty(c))this.subscribers[c](a[b].message);if(0<this.cacheMax&&(this.cachedMessages.hasOwnProperty([a[b].id])||(this.cachedMessages[a[b].id]=a[b],this.cachedMessagesIndex.push(a[b].id)),
this.cachedMessagesIndex.length>this.cacheMax&&(delete this.cachedMessages[this.cachedMessagesIndex[0]],this.cachedMessagesIndex.splice(0,1)),window.localStorage)){localStorage.setItem("backplaneCachedMessages",JSON.stringify(this.cachedMessages));localStorage.setItem("backplaneCachedMessagesIndex",JSON.stringify(this.cachedMessagesIndex));var d=new Date;d.setDate(d.getDate()+7);localStorage.setItem("backplaneCacheExpires",d.toUTCString())}for(var d=[],e=0;e<this.awaiting.queue.length;e++){for(var g=
!1,f=0;f<this.awaiting.queue[e].length;f++)this.awaiting.queue[e][f]==a[b].message.type&&(g=!0);g||d.push(this.awaiting.queue[e])}this.awaiting.queue=d}this.firstFrameReceived=!0;this.request()};Backplane.stopTimer=function(a){(a=this.timers[a])&&clearTimeout(a)};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvYmFja3BsYW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSw4Q0FBOEMsa0JBQWtCLGdDQUFnQyxLQUFLLHVCQUF1Qiw0QkFBNEIsSUFBSSxPQUFPLGtCQUFrQixrRUFBa0UsbUJBQW1CLDRFQUE0RSxvQkFBb0IsNEVBQTRFLGtCQUFrQixrQkFBa0IsWUFBWTtBQUN0ZSxpQkFBaUIsd0JBQXdCLG9CQUFvQix5QkFBeUIsYUFBYSxpQkFBaUIsbUJBQW1CLFlBQVksMEJBQTBCLGFBQWEsMENBQTBDLHNCQUFzQixTQUFTO0FBQ25RLDJCQUEyQixRQUFRLDJEQUEyRCxvQkFBb0IsZUFBZSxjQUFjLDZEQUE2RCwyQ0FBMkMsd0NBQXdDLDJFQUEyRSx5SUFBeUk7QUFDbmYsMEZBQTBGO0FBQzFGLG9DQUFvQyx3QkFBd0Isa0lBQWtJO0FBQzlMLGdDQUFnQyw4QkFBOEIsOERBQThELHlDQUF5QyxzQkFBc0IsdUNBQXVDLGtDQUFrQyx3REFBd0QsVUFBVSxrQ0FBa0Msa0NBQWtDLDJCQUEyQjtBQUNyYSxrQ0FBa0Msa0RBQWtELHFDQUFxQyxpQ0FBaUMsNkNBQTZDLGtDQUFrQyxpQ0FBaUMseUJBQXlCLHlCQUF5Qiw0REFBNEQsNEJBQTRCLCtDQUErQztBQUNuYyxpQ0FBaUMscUZBQXFGLGlPQUFpTyx1Q0FBdUM7QUFDOVgsb0NBQW9DLDhCQUE4Qiw4RkFBOEYsK0JBQStCLHVCQUF1Qiw0R0FBNEcseUJBQXlCLCtDQUErQywyQkFBMkI7QUFDcmEsc0NBQXNDLHVDQUF1QyxVQUFVLHVDQUF1QyxnRUFBZ0UsSUFBSSxzQkFBc0IsWUFBWSx1QkFBdUIsV0FBVyxLQUFLLHNCQUFzQixxREFBcUQ7QUFDdFYsdUNBQXVDLFdBQVcsMklBQTJJLG1EQUFtRCx1Q0FBdUM7QUFDdlIsd0NBQXdDLDhDQUE4Qyx1QkFBdUIseUJBQXlCO0FBQ3RJLHFDQUFxQyxvREFBb0QsZ0JBQWdCLEVBQUUsNEJBQTRCLDJCQUEyQiw0Q0FBNEMsbUNBQW1DLDRIQUE0SCx5QkFBeUIsc0JBQXNCLDZDQUE2QztBQUN6YyxxQ0FBcUMsb0RBQW9ELHVCQUF1Qiw0QkFBNEIsb0xBQW9MLG1DQUFtQyxtRUFBbUUsMkNBQTJDO0FBQ2pkLGlDQUFpQyxNQUFNLGVBQWUsMEJBQTBCLHVHQUF1Ryx1QkFBdUIsaURBQWlELDREQUE0RDtBQUMzVCxxRkFBcUY7QUFDckYsNkJBQTZCLFdBQVcsaURBQWlELDBCQUEwQiwyQkFBMkIsMENBQTBDLHdDQUF3QyxZQUFZLE1BQU0sa0NBQWtDLG9EQUFvRCw4RUFBOEU7QUFDdFosbUZBQW1GLGlCQUFpQiwrQkFBK0Isb0RBQW9ELHVDQUF1QyxjQUFjLFFBQVEsdUNBQXVDLHlCQUF5QixrQkFBa0IsaUlBQWlJO0FBQ3ZjLCtCQUErQix5Q0FBeUMsbUJBQW1CLGtIQUFrSDtBQUM3TSwrQkFBK0IsMkJBQTJCLG1EQUFtRCxzSEFBc0gsaUJBQWlCLFFBQVEsV0FBVyxLQUFLLHNHQUFzRztBQUNsWCxvS0FBb0ssb0ZBQW9GLDhGQUE4RixlQUFlLHlCQUF5Qiw4REFBOEQsaUJBQWlCLDZCQUE2QixLQUFLO0FBQy9lLE9BQU8sZ0NBQWdDLHlEQUF5RCxrQ0FBa0Msc0JBQXNCLDJCQUEyQixnQkFBZ0IsZ0NBQWdDIiwiZmlsZSI6ImJhY2twbGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9vdGhlcnMvYmFja3BsYW5lLmpzXCIpO1xuIiwid2luZG93LkJhY2twbGFuZT13aW5kb3cuQmFja3BsYW5lfHxmdW5jdGlvbigpe3ZhciBhPWZ1bmN0aW9uKGEpe2lmKEJhY2twbGFuZS5nZXRDaGFubmVsSUQoKSlhKCk7ZWxzZXt2YXIgYz1CYWNrcGxhbmUub25Jbml0O0JhY2twbGFuZS5vbkluaXQ9ZnVuY3Rpb24oKXtjKCk7YSgpfX19O2EubG9nPWZ1bmN0aW9uKGEpe3dpbmRvdy5jb25zb2xlJiZ3aW5kb3cuY29uc29sZS5sb2cmJmNvbnNvbGUubG9nKFwiQmFja3BsYW5lOiBcIithKX07YS53YXJuPWZ1bmN0aW9uKGEpe3dpbmRvdy5jb25zb2xlJiZ3aW5kb3cuY29uc29sZS53YXJuJiZjb25zb2xlLndhcm4oXCJCYWNrcGxhbmUgV0FSTklORzogXCIrYSl9O2EuZXJyb3I9ZnVuY3Rpb24oYSl7d2luZG93LmNvbnNvbGUmJndpbmRvdy5jb25zb2xlLmVycm9yJiZjb25zb2xlLmVycm9yKFwiQmFja3BsYW5lIEVSUk9SOiBcIithKX07YS52ZXJzaW9uPVwiMS4yLjdcIjthLmNoYW5uZWxCeUJ1cz17fTthLmNvbmZpZz17fTthLmluaXRpYWxpemVkPSExO1xyXG5hLnJ1blJlcXVlc3RzPSExO2EuZmlyc3RGcmFtZVJlY2VpdmVkPSExO2EuY2FjaGVkTWVzc2FnZXM9e307YS5jYWNoZWRNZXNzYWdlc0luZGV4PVtdO2EuY2FjaGVNYXg9NTthLnN1YnNjcmliZXJzPXt9O2Euc2VydmVyQ2hhbm5lbD0hMDthLmF3YWl0aW5nPXtzaW5jZTowLHVudGlsOjAscXVldWU6W119O2EuaW50ZXJ2YWxzPXttaW46MSxmcmVxdWVudDo1LHJlZ3VsYXI6NjAsc2xvd2Rvd246MTIwfTthLm9uSW5pdD1mdW5jdGlvbigpe307cmV0dXJuIGF9KCk7XHJcbkJhY2twbGFuZS5pbml0PWZ1bmN0aW9uKGEpe2E9YXx8e307aWYodGhpcy5pbml0aWFsaXplZHx8IWEuc2VydmVyQmFzZVVSTHx8IWEuYnVzTmFtZSlyZXR1cm4hMTt0aGlzLmluaXRpYWxpemVkPSEwO3RoaXMudGltZXJzPXt9O3RoaXMuY29uZmlnPWE7dGhpcy5jb25maWcuc2VydmVyQmFzZVVSTD10aGlzLm5vcm1hbGl6ZVVSTChhLnNlcnZlckJhc2VVUkwpO3RoaXMuY2hhbm5lbEJ5QnVzPXRoaXMuZ2V0Q29va2llQ2hhbm5lbHMoKTt0aGlzLmNhY2hlTWF4PWEuY2FjaGVNYXh8fHRoaXMuY2FjaGVNYXg7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhLnNlcnZlckNoYW5uZWwmJih0aGlzLnNlcnZlckNoYW5uZWw9YS5zZXJ2ZXJDaGFubmVsKTtcInVuZGVmaW5lZFwiPT10eXBlb2YgdGhpcy5jb25maWcuY2hhbm5lbEV4cGlyZXMmJihhPW5ldyBEYXRlLGEuc2V0RnVsbFllYXIoYS5nZXRGdWxsWWVhcigpKzUpLHRoaXMuY29uZmlnLmNoYW5uZWxFeHBpcmVzPWEudG9HTVRTdHJpbmcoKSk7dGhpcy5yZW5hbWVPbGRDYWNoZSgpO1xyXG50aGlzLmdldENoYW5uZWxOYW1lKCk/dGhpcy5maW5pc2hJbml0KCExKToodGhpcy5pbnZhbGlkYXRlQ2FjaGUoKSx0aGlzLmZldGNoTmV3Q2hhbm5lbCgpKTtyZXR1cm4hMH07XHJcbkJhY2twbGFuZS5yZW5hbWVPbGRDYWNoZT1mdW5jdGlvbigpe2lmKHdpbmRvdy5sb2NhbFN0b3JhZ2Upe3ZhciBhPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FjaGVFeHBpcmVzXCIpLGI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYWNoZWRNZXNzYWdlc1wiKSxjPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FjaGVkTWVzc2FnZXNJbmRleFwiKTthJiYoYiYmYykmJihsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhY2twbGFuZUNhY2hlRXhwaXJlc1wiLGEpLGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFja3BsYW5lQ2FjaGVkTWVzc2FnZXNcIixiKSxsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhY2twbGFuZUNhY2hlZE1lc3NhZ2VzSW5kZXhcIixjKSxsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNhY2hlRXhwaXJlc1wiKSxsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNhY2hlZE1lc3NhZ2VzXCIpLGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FjaGVkTWVzc2FnZXNJbmRleFwiKSl9fTtcclxuQmFja3BsYW5lLnN1YnNjcmliZT1mdW5jdGlvbihhKXtpZighdGhpcy5pbml0aWFsaXplZClyZXR1cm4hMTt0aGlzLmNoZWNrU3Vic2NyaWJlcnMoKXx8KHRoaXMucnVuUmVxdWVzdHM9ITAsdGhpcy5yZXF1ZXN0KCkpO3ZhciBiPShuZXcgRGF0ZSkudmFsdWVPZigpK01hdGgucmFuZG9tKCk7dGhpcy5zdWJzY3JpYmVyc1tiXT1hO2lmKHRoaXMuZmlyc3RGcmFtZVJlY2VpdmVkKWZvcih2YXIgYz0wO2M8dGhpcy5jYWNoZWRNZXNzYWdlc0luZGV4Lmxlbmd0aDtjKyspYSh0aGlzLmNhY2hlZE1lc3NhZ2VzW3RoaXMuY2FjaGVkTWVzc2FnZXNJbmRleFtjXV0pO3JldHVybiBifTtCYWNrcGxhbmUudW5zdWJzY3JpYmU9ZnVuY3Rpb24oYSl7aWYoIXRoaXMuaW5pdGlhbGl6ZWR8fCFhKXJldHVybiExO2RlbGV0ZSB0aGlzLnN1YnNjcmliZXJzW2FdO3RoaXMuY2hlY2tTdWJzY3JpYmVycygpfHwodGhpcy5ydW5SZXF1ZXN0cz0hMSl9O1xyXG5CYWNrcGxhbmUuZ2V0Q2hhbm5lbElEPWZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaW5pdGlhbGl6ZWQ/ITE6dGhpcy5jb25maWcuY2hhbm5lbElEfTtCYWNrcGxhbmUuZXhwZWN0TWVzc2FnZXM9ZnVuY3Rpb24oYSl7dGhpcy5leHBlY3RNZXNzYWdlc1dpdGhpbig2MCxhKX07QmFja3BsYW5lLmV4cGVjdE1lc3NhZ2VzV2l0aGluPWZ1bmN0aW9uKGEsYil7aWYoIXRoaXMuaW5pdGlhbGl6ZWR8fCFhKXJldHVybiExO3RoaXMuYXdhaXRpbmcuc2luY2U9dGhpcy5nZXRUUygpO3RoaXMuYXdhaXRpbmcuaW50ZXJ2YWw9YTt0aGlzLmF3YWl0aW5nLm5vbnN0b3A9IWI7YiYmKGI9XCJzdHJpbmdcIj09dHlwZW9mIGI/W2JdOmIsdGhpcy5hd2FpdGluZy5xdWV1ZS5wdXNoKGIpKTt2YXIgYz10aGlzLmF3YWl0aW5nLnNpbmNlK2E7Yz50aGlzLmF3YWl0aW5nLnVudGlsJiYodGhpcy5hd2FpdGluZy51bnRpbD1jKTt0aGlzLnJlcXVlc3QoKX07XHJcbkJhY2twbGFuZS5maW5pc2hJbml0PWZ1bmN0aW9uKGEpe1widW5kZWZpbmVkXCI9PT10eXBlb2YgYT90aGlzLmVycm9yKFwiZmluaXNoSW5pdDogc2VydmVyIGZhaWxlZCB0byByZXR1cm4gYSBuZXcgY2hhbm5lbDsgc3RvcHBpbmcgdGhlIHJlcXVlc3QgbG9vcFwiKTooYSYmKHRoaXMuY2hhbm5lbEJ5QnVzW3RoaXMuY29uZmlnLmJ1c05hbWVdPWEpLHRoaXMuc2V0Q29va2llQ2hhbm5lbHMoKSx0aGlzLmNvbmZpZy5jaGFubmVsTmFtZT10aGlzLmdldENoYW5uZWxOYW1lKCksdGhpcy5jb25maWcuY2hhbm5lbElEPXRoaXMuZ2VuZXJhdGVDaGFubmVsSUQoKSx0aGlzLm9uSW5pdCgpLHRoaXMucmVxdWVzdCgpKX07QmFja3BsYW5lLmdlbmVyYXRlQ2hhbm5lbElEPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29uZmlnLnNlcnZlckJhc2VVUkwrXCIvYnVzL1wiK3RoaXMuY29uZmlnLmJ1c05hbWUrXCIvY2hhbm5lbC9cIit0aGlzLmNvbmZpZy5jaGFubmVsTmFtZX07XHJcbkJhY2twbGFuZS5nZXRDaGFubmVsTmFtZT1mdW5jdGlvbigpe2lmKCF0aGlzLmluaXRpYWxpemVkKXJldHVybiExO2lmKCF0aGlzLmNoYW5uZWxCeUJ1c1t0aGlzLmNvbmZpZy5idXNOYW1lXXx8XCJmYWxzZVwiPT09dGhpcy5jaGFubmVsQnlCdXNbdGhpcy5jb25maWcuYnVzTmFtZV0pe2lmKHRoaXMuc2VydmVyQ2hhbm5lbClyZXR1cm4hMTt0aGlzLmludmFsaWRhdGVDYWNoZSgpO3RoaXMuY2hhbm5lbEJ5QnVzW3RoaXMuY29uZmlnLmJ1c05hbWVdPShuZXcgRGF0ZSkudmFsdWVPZigpLnRvU3RyaW5nKCkrTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnN1YnN0cigyLDUpO3RoaXMuc2V0Q29va2llQ2hhbm5lbHMoKX1yZXR1cm4gdGhpcy5jaGFubmVsQnlCdXNbdGhpcy5jb25maWcuYnVzTmFtZV19O0JhY2twbGFuZS5nZXRUUz1mdW5jdGlvbigpe3JldHVybiBNYXRoLnJvdW5kKChuZXcgRGF0ZSkudmFsdWVPZigpLzFFMyl9O1xyXG5CYWNrcGxhbmUuY2hlY2tTdWJzY3JpYmVycz1mdW5jdGlvbigpe2Zvcih2YXIgYSBpbiB0aGlzLnN1YnNjcmliZXJzKXJldHVybiEwO3JldHVybiExfTtCYWNrcGxhbmUuZ2V0Q29va2llQ2hhbm5lbHM9ZnVuY3Rpb24oKXt2YXIgYT0oZG9jdW1lbnQuY29va2llfHxcIlwiKS5tYXRjaCgvYmFja3BsYW5lLWNoYW5uZWw9KC4qPykoPzokfDspLyk7aWYoIWF8fCFhWzFdKXJldHVybnt9O2Zvcih2YXIgYj17fSxhPWFbMV0uc3BsaXQoXCJ8XCIpLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXS5zcGxpdChcIjpcIik7YltkZWNvZGVVUklDb21wb25lbnQoZFswXSldPWRlY29kZVVSSUNvbXBvbmVudChkWzFdKX1yZXR1cm4gYn07XHJcbkJhY2twbGFuZS5zZXRDb29raWVDaGFubmVscz1mdW5jdGlvbigpe3ZhciBhPVtdLGI7Zm9yKGIgaW4gdGhpcy5jaGFubmVsQnlCdXMpdGhpcy5jaGFubmVsQnlCdXMuaGFzT3duUHJvcGVydHkoYikmJmEucHVzaChlbmNvZGVVUklDb21wb25lbnQoYikrXCI6XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuY2hhbm5lbEJ5QnVzW2JdKSk7ZG9jdW1lbnQuY29va2llPVwiYmFja3BsYW5lLWNoYW5uZWw9XCIrYS5qb2luKFwifFwiKStcIjtleHBpcmVzPVwiK3RoaXMuY29uZmlnLmNoYW5uZWxFeHBpcmVzK1wiO3BhdGg9L1wifTtcclxuQmFja3BsYW5lLnJlc2V0Q29va2llQ2hhbm5lbD1mdW5jdGlvbigpe2RlbGV0ZSB0aGlzLmNoYW5uZWxCeUJ1c1t0aGlzLmNvbmZpZy5idXNOYW1lXTt0aGlzLmludmFsaWRhdGVDYWNoZSgpO3RoaXMuc2V0Q29va2llQ2hhbm5lbHMoKTt0aGlzLnNlcnZlckNoYW5uZWw/dGhpcy5mZXRjaE5ld0NoYW5uZWwoKToodGhpcy5jb25maWcuY2hhbm5lbE5hbWU9dGhpcy5nZXRDaGFubmVsTmFtZSgpLHRoaXMuY29uZmlnLmNoYW5uZWxJRD10aGlzLmdlbmVyYXRlQ2hhbm5lbElEKCkpfTtcclxuQmFja3BsYW5lLmZldGNoTmV3Q2hhbm5lbD1mdW5jdGlvbigpe2Zvcih2YXIgYT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZldGNoQ2hhbm5lbElkXCIpO2EmJmEucGFyZW50Tm9kZTspe2EucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKTtmb3IodmFyIGIgaW4gYSlkZWxldGUgYVtiXTthPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmV0Y2hDaGFubmVsSWRcIil9YT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2Euc3JjPXRoaXMuY29uZmlnLnNlcnZlckJhc2VVUkwrXCIvYnVzL1wiK3RoaXMuY29uZmlnLmJ1c05hbWUrXCIvY2hhbm5lbC9uZXc/Y2FsbGJhY2s9QmFja3BsYW5lLmZpbmlzaEluaXQmcm5kPVwiK01hdGgucmFuZG9tKCk7YS50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7YS5pZD1cImZldGNoQ2hhbm5lbElkXCI7Yj1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtiLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsYil9O1xyXG5CYWNrcGxhbmUuaW52YWxpZGF0ZUNhY2hlPWZ1bmN0aW9uKCl7QmFja3BsYW5lLmxvZyhcInJlbW92aW5nIGNhY2hlZCBiYWNrcGxhbmUgbWVzc2FnZXNcIik7dGhpcy5jYWNoZWRNZXNzYWdlcz17fTt0aGlzLmNhY2hlZE1lc3NhZ2VzSW5kZXg9W107d2luZG93LmxvY2FsU3RvcmFnZSYmKGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmFja3BsYW5lQ2FjaGVFeHBpcmVzXCIpLGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmFja3BsYW5lQ2FjaGVkTWVzc2FnZXNcIiksbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJiYWNrcGxhbmVDYWNoZWRNZXNzYWdlc0luZGV4XCIpKX07QmFja3BsYW5lLm5vcm1hbGl6ZVVSTD1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9eXFxzKihodHRwcz86XFwvXFwvKT8oLio/KVtcXHNcXC9dKiQvLGZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4oY3x8d2luZG93LmxvY2F0aW9uLnByb3RvY29sK1wiLy9cIikrZH0pfTtcclxuQmFja3BsYW5lLmNhbGNUaW1lb3V0PWZ1bmN0aW9uKCl7dmFyIGE7YT10aGlzLmdldFRTKCk7aWYoYTx0aGlzLmF3YWl0aW5nLnVudGlsKXtpZighdGhpcy5hd2FpdGluZy5ub25zdG9wJiYhdGhpcy5hd2FpdGluZy5xdWV1ZS5sZW5ndGgpcmV0dXJuIHRoaXMuYXdhaXRpbmcudW50aWw9YSx0aGlzLmNhbGNUaW1lb3V0KCk7YS09dGhpcy5hd2FpdGluZy5zaW5jZTt2YXIgYj10aGlzLmludGVydmFscy5mcmVxdWVudC10aGlzLmludGVydmFscy5taW47YT10aGlzLmludGVydmFscy5taW4rTWF0aC5yb3VuZChiKmEvdGhpcy5hd2FpdGluZy5pbnRlcnZhbCl9ZWxzZSBhPHRoaXMuYXdhaXRpbmcudW50aWwrdGhpcy5pbnRlcnZhbHMuc2xvd2Rvd24/KGEtPXRoaXMuYXdhaXRpbmcudW50aWwsYj10aGlzLmludGVydmFscy5yZWd1bGFyLXRoaXMuaW50ZXJ2YWxzLmZyZXF1ZW50LGE9dGhpcy5pbnRlcnZhbHMuZnJlcXVlbnQrTWF0aC5yb3VuZChiKmEvdGhpcy5pbnRlcnZhbHMuc2xvd2Rvd24pKTpcclxuKGE9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuc2luY2U/MDp0aGlzLmludGVydmFscy5yZWd1bGFyLHRoaXMuYXdhaXRpbmcubm9uc3RvcD0hMSk7cmV0dXJuIDFFMyphfTtcclxuQmFja3BsYW5lLnJlcXVlc3Q9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2lmKCF0aGlzLmluaXRpYWxpemVkfHwhdGhpcy5ydW5SZXF1ZXN0cylyZXR1cm4hMTt0aGlzLnN0b3BUaW1lcihcInJlZ3VsYXJcIik7dGhpcy5zdG9wVGltZXIoXCJ3YXRjaGRvZ1wiKTt0aGlzLnRpbWVycy5yZWd1bGFyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLnRpbWVycy53YXRjaGRvZz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS5yZXF1ZXN0KCl9LDVFMyk7aWYod2luZG93LmxvY2FsU3RvcmFnZSYmIWEuc2luY2Upe3ZhciBiPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFja3BsYW5lQ2FjaGVFeHBpcmVzXCIpO2lmKGIpaWYoYj1EYXRlLnBhcnNlKGIpLG5ldyBEYXRlPmIpYS5sb2coXCJjYWNoZSBleHBpcmVkXCIpLGEuaW52YWxpZGF0ZUNhY2hlKCk7ZWxzZSBpZihhLmNhY2hlZE1lc3NhZ2VzPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiYWNrcGxhbmVDYWNoZWRNZXNzYWdlc1wiKSksYS5jYWNoZWRNZXNzYWdlc0luZGV4PVxyXG5KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFja3BsYW5lQ2FjaGVkTWVzc2FnZXNJbmRleFwiKSksYS5jYWNoZWRNZXNzYWdlcyl7Zm9yKHZhciBiPVtdLGM9MDtjPGEuY2FjaGVkTWVzc2FnZXNJbmRleC5sZW5ndGg7YysrKWJbY109YS5jYWNoZWRNZXNzYWdlc1thLmNhY2hlZE1lc3NhZ2VzSW5kZXhbY11dO2EubG9nKGIubGVuZ3RoK1wiIG1lc3NhZ2UocykgaW4gY2FjaGVcIik7YS5yZXNwb25zZShiKTtyZXR1cm59fXZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ZC50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7ZC5jaGFyc2V0PVwidXRmLThcIjtkLnNyYz1hLmNvbmZpZy5jaGFubmVsSUQrXCI/Y2FsbGJhY2s9QmFja3BsYW5lLnJlc3BvbnNlXCIrKGEuc2luY2U/XCImc2luY2U9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuc2luY2UpOlwiXCIpK1wiJnJuZD1cIitNYXRoLnJhbmRvbSgpO2I9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbmIuaW5zZXJ0QmVmb3JlKGQsYi5maXJzdENoaWxkKTtkLm9ubG9hZD1kLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3ZhciBhPWQucmVhZHlTdGF0ZTtpZighYXx8XCJsb2FkZWRcIj09PWF8fFwiY29tcGxldGVcIj09PWEpZC5vbmxvYWQ9ZC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKX19LHRoaXMuY2FsY1RpbWVvdXQoKSl9O1xyXG5CYWNrcGxhbmUucmVzcG9uc2U9ZnVuY3Rpb24oYSl7dGhpcy5zdG9wVGltZXIoXCJ3YXRjaGRvZ1wiKTt2YXIgYT1hfHxbXSxiPWEubGVuZ3RoP2FbYS5sZW5ndGgtMV0uaWQ6dGhpcy5zaW5jZTtcInVuZGVmaW5lZFwiPT10eXBlb2YgdGhpcy5zaW5jZSYmKGE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHRoaXMuY29uZmlnLmluaXRGcmFtZUZpbHRlcj90aGlzLmNvbmZpZy5pbml0RnJhbWVGaWx0ZXIoYSk6W10pO3RoaXMuc2luY2U9Ynx8XCJcIjtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXtmb3IodmFyIGMgaW4gdGhpcy5zdWJzY3JpYmVycylpZih0aGlzLnN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KGMpKXRoaXMuc3Vic2NyaWJlcnNbY10oYVtiXS5tZXNzYWdlKTtpZigwPHRoaXMuY2FjaGVNYXgmJih0aGlzLmNhY2hlZE1lc3NhZ2VzLmhhc093blByb3BlcnR5KFthW2JdLmlkXSl8fCh0aGlzLmNhY2hlZE1lc3NhZ2VzW2FbYl0uaWRdPWFbYl0sdGhpcy5jYWNoZWRNZXNzYWdlc0luZGV4LnB1c2goYVtiXS5pZCkpLFxyXG50aGlzLmNhY2hlZE1lc3NhZ2VzSW5kZXgubGVuZ3RoPnRoaXMuY2FjaGVNYXgmJihkZWxldGUgdGhpcy5jYWNoZWRNZXNzYWdlc1t0aGlzLmNhY2hlZE1lc3NhZ2VzSW5kZXhbMF1dLHRoaXMuY2FjaGVkTWVzc2FnZXNJbmRleC5zcGxpY2UoMCwxKSksd2luZG93LmxvY2FsU3RvcmFnZSkpe2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFja3BsYW5lQ2FjaGVkTWVzc2FnZXNcIixKU09OLnN0cmluZ2lmeSh0aGlzLmNhY2hlZE1lc3NhZ2VzKSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYWNrcGxhbmVDYWNoZWRNZXNzYWdlc0luZGV4XCIsSlNPTi5zdHJpbmdpZnkodGhpcy5jYWNoZWRNZXNzYWdlc0luZGV4KSk7dmFyIGQ9bmV3IERhdGU7ZC5zZXREYXRlKGQuZ2V0RGF0ZSgpKzcpO2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFja3BsYW5lQ2FjaGVFeHBpcmVzXCIsZC50b1VUQ1N0cmluZygpKX1mb3IodmFyIGQ9W10sZT0wO2U8dGhpcy5hd2FpdGluZy5xdWV1ZS5sZW5ndGg7ZSsrKXtmb3IodmFyIGc9XHJcbiExLGY9MDtmPHRoaXMuYXdhaXRpbmcucXVldWVbZV0ubGVuZ3RoO2YrKyl0aGlzLmF3YWl0aW5nLnF1ZXVlW2VdW2ZdPT1hW2JdLm1lc3NhZ2UudHlwZSYmKGc9ITApO2d8fGQucHVzaCh0aGlzLmF3YWl0aW5nLnF1ZXVlW2VdKX10aGlzLmF3YWl0aW5nLnF1ZXVlPWR9dGhpcy5maXJzdEZyYW1lUmVjZWl2ZWQ9ITA7dGhpcy5yZXF1ZXN0KCl9O0JhY2twbGFuZS5zdG9wVGltZXI9ZnVuY3Rpb24oYSl7KGE9dGhpcy50aW1lcnNbYV0pJiZjbGVhclRpbWVvdXQoYSl9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9