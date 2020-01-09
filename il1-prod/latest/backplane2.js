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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/others/backplane2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/others/backplane2.js":
/*!*****************************************!*\
  !*** ./src/legacy/others/backplane2.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.Backplane=window.Backplane||function(){var a=function(a){if(Backplane.getChannelID())a();else{var c=Backplane.onInit;Backplane.onInit=function(){c();a()}}};a.log=function(a){window.console&&window.console.log&&console.log("Backplane: "+a)};a.warn=function(a){window.console&&window.console.warn&&console.warn("Backplane WARNING: "+a)};a.error=function(a){window.console&&window.console.error&&console.error("Backplane ERROR: "+a)};a.version="2.0.6";a.token=null;a.refresh_token=null;a.channelName=
null;a.block=0;a.config={};a.runRequests=!1;a.firstFrameReceived=!1;a.replayOnPageLoad=!1;a.memoryCachedMessages={};a.memoryCachedMessagesIndex=[];a.cacheMax=10;a.subscribers={};a.messageCacheIndexKey="backplane2CachedMessagesIndex";a.messageCacheKey="backplane2CachedMessages";a.messageCacheExpires="backplane2CacheExpires";a.timers={};a.awaiting={since:0,until:0,queue:[]};a.intervals={min:1,frequent:5,regular:20,slowdown:120};a.onInit=function(){};a.log("backplane2.js loaded");return a}();
Backplane.init=function(a){this.log("initializing");a=a||{};if(!a.serverBaseURL)return this.error("must supply serverBaseURL"),!1;if(!a.busName)return this.error("must supply busName"),!1;this.timers={};this.config=a;this.config.serverBaseURL=this.normalizeURL(a.serverBaseURL);if(0>this.config.serverBaseURL.indexOf("/v2"))return this.error("serverBaseURL must include '/v2'"),!1;this.loadChannelFromCookie();this.cacheMax=a.cacheMax||this.cacheMax;this.replayOnPageLoad=a.replayOnPageLoad||this.replayOnPageLoad;
this.block=a.block||0;"undefined"===typeof this.config.channelExpires&&(a=new Date,a.setFullYear(a.getFullYear()+5),this.config.channelExpires=a.toGMTString());this.getChannelName()?(this.syncMemoryCache(),this.onInit(),this.request()):(this.invalidateCache(),this.fetchNewChannel());return!0};
Backplane.subscribe=function(a,b){if(!this.getChannelName())return!1;"undefined"===typeof b&&(b=this.replayOnPageLoad);this.checkSubscribers()||(this.runRequests=!0,this.request());var c,d=(new Date).getTime()+Math.random(),e={id:d,callback:a,wantsReplays:b};this.subscribers[d]=e;if(this.firstFrameReceived||e.wantsReplays)for(c=0;c<this.memoryCachedMessagesIndex.length;c++)e.callback(this.memoryCachedMessages[this.memoryCachedMessagesIndex[c]]);return d};
Backplane.getCachedMessages=function(){var a,b,c,d,e,f=[],g=[],j={},h;if(window.localStorage&&(a=window.localStorage.getItem(this.messageCacheIndexKey),b=window.localStorage.getItem(this.messageCacheKey),a&&b)){try{c=JSON.parse(a);j=JSON.parse(b);for(h=0;h<c.length;h++)d=j[c[h]],e=new Date(d.expire),e>new Date?(f.push(d),g.push(c[h])):delete j[c[h]]}catch(k){this.error("failed to parse cached message data")}window.localStorage.setItem(this.messageCacheIndexKey,JSON.stringify(g));window.localStorage.setItem(this.messageCacheKey,
JSON.stringify(j))}return f};Backplane.syncMemoryCache=function(){this.memoryCachedMessages={};this.memoryCachedMessagesIndex=[];var a=Backplane.getCachedMessages();for(i=0;i<a.length;i++)Backplane.addMessageToMemoryCache(a[i])};
Backplane.addMessageToMemoryCache=function(a){this.memoryCachedMessages.hasOwnProperty(a.messageURL)||(this.memoryCachedMessages[a.messageURL]=a,this.memoryCachedMessagesIndex.push(a.messageURL));this.memoryCachedMessagesIndex.length>this.cacheMax&&(delete this.memoryCachedMessages[this.memoryCachedMessagesIndex[0]],this.memoryCachedMessagesIndex.splice(0,1))};
Backplane.addMessageToLongTermCache=function(a){var b,c,d=[],e={};if(window.localStorage){b=window.localStorage.getItem(this.messageCacheIndexKey);c=window.localStorage.getItem(this.messageCacheKey);if(b&&c)try{d=JSON.parse(b),e=JSON.parse(c)}catch(f){this.error("failed to parse cached message data")}e[a.messageURL]=a;Backplane.inArray(d,a.messageURL)||d.push(a.messageURL);d.sort();window.localStorage.setItem(this.messageCacheIndexKey,JSON.stringify(d));window.localStorage.setItem(this.messageCacheKey,
JSON.stringify(e))}};Backplane.inArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1};Backplane.unsubscribe=function(a){if(!a)return!1;delete this.subscribers[a];this.checkSubscribers()||(this.runRequests=!1)};Backplane.getChannelID=function(){return!this.getChannelName()?!1:this.channelID};Backplane.expectMessages=function(a){this.expectMessagesWithin(60,a)};
Backplane.expectMessagesWithin=function(a,b){if(!this.getChannelName()||!a)return!1;this.awaiting.since=this.getTS();this.awaiting.interval=a;this.awaiting.nonstop=!b;b&&(b="string"===typeof b?[b]:b,this.awaiting.queue.push(b));var c=this.awaiting.since+a;c>this.awaiting.until&&(this.awaiting.until=c);this.request()};
Backplane.finishInit=function(a){var b,c;this.log("received access token and channel from server");if(null!=a.error)this.error("Error initializing backplane token: "+a.error);else{this.token=a.access_token;this.refresh_token=a.refresh_token;a=a.scope.split(" ");for(b=0;b<a.length;b++)-1<a[b].indexOf("channel:")&&(c=a[b].split(":"),this.channelName=c[1],this.log("channel set to: "+this.channelName));null===this.channelName?this.error("No channel found in the returned scope"):(this.setCookieChannel(),
this.channelID=this.generateChannelID(),this.log("channelID = "+this.channelID),this.subscribers={},this.onInit(),this.fetchMessages())}};Backplane.generateNextFrameURL=function(){"undefined"===typeof this.since&&(this.since=this.config.serverBaseURL+"/messages");var a=this.since,a=-1<a.indexOf("?")?a+"&":a+"?";return a+"callback=Backplane.response&access_token="+this.token+"&block="+this.block+"&rnd="+Math.random()};
Backplane.generateChannelID=function(){return this.config.serverBaseURL+"/bus/"+this.config.busName+"/channel/"+this.channelName};Backplane.getChannelName=function(){return null===this.channelName?!1:this.channelName};Backplane.getTS=function(){return Math.round((new Date).getTime()/1E3)};Backplane.checkSubscribers=function(){for(var a in this.subscribers)if(this.subscribers.hasOwnProperty(a))return!0;return!1};
Backplane.loadChannelFromCookie=function(){var a,b;b=(document.cookie||"").match(/backplane2-channel=([\w\W]*?)(?:$|;)/);if(!b||!b[1])return{};a=b[1].split(":");this.token=decodeURIComponent(a[0]);this.channelName=decodeURIComponent(a[1]);"undefined"!==typeof a[2]&&(this.log("found refresh token in cookie"),this.refresh_token=decodeURIComponent(a[2]));20>this.token.length||30>this.channelName.length||"undefined"!==typeof a[2]&&20>this.refresh_token.length?this.error("backplane2-channel value: '"+
b[1]+"' is corrupt"):(this.log("retrieved token and channel from cookie"),this.channelID=this.generateChannelID(),this.log("channelID = "+this.channelID))};Backplane.setCookieChannel=function(){document.cookie="backplane2-channel="+encodeURIComponent(this.token)+":"+encodeURIComponent(this.channelName)+":"+encodeURIComponent(this.refresh_token)+";expires="+this.config.channelExpires+";path=/"};
Backplane.resetCookieChannel=function(){this.invalidateCache();this.refresh_token=this.token=this.channelName=null;this.setCookieChannel();this.fetchNewChannel()};
Backplane.makeCall=function(a,b,c){var b=b+"Id",d,e;for(d=document.getElementById(b);d;){d.parentNode.removeChild(d);for(e in d)delete d[e];d=document.getElementById(b)}e=document.createElement("script");e.type="text/javascript";e.id=b;"undefined"!==typeof c&&(e.charset=c);e.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)};
Backplane.fetchNewChannel=function(){var a=this.config.serverBaseURL+"/token?callback=Backplane.finishInit&bus="+this.config.busName+"&rnd="+Math.random();Backplane.makeCall(a,"fetchNewChannel")};Backplane.invalidateCache=function(){this.log("removing cached backplane messages");this.memoryCachedMessages={};this.memoryCachedMessagesIndex=[];window.localStorage&&(window.localStorage.removeItem(this.messageCacheExpires),window.localStorage.removeItem(this.messageCacheKey),window.localStorage.removeItem(this.messageCacheIndexKey))};
Backplane.refreshToken=function(){var a=this.config.serverBaseURL+"/token?callback=Backplane.refreshTokenResponse&refresh_token="+this.refresh_token+"&rnd="+Math.random();this.makeCall(a,"refreshToken")};
Backplane.refreshTokenResponse=function(a){"undefined"!==typeof a.error_description?"invalid token"===a.error_description?(this.log("received invalid token error from server when refreshing access token; requesting new access token"),this.resetCookieChannel()):this.log("received unexpected error from server when refreshing access token: "+a.error_description):(this.log("received refreshed access token from server"),this.token=a.access_token,this.refresh_token=a.refresh_token,this.setCookieChannel())};
Backplane.normalizeURL=function(a){return a.replace(/^\s*(https?:\/\/)?([\w\W]*?)[\s\/]*$/,function(a,c,d){return(c||window.location.protocol+"//")+d})};
Backplane.calcTimeout=function(){var a;a=this.getTS();var b;if(a<this.awaiting.until){if(!this.awaiting.nonstop&&!this.awaiting.queue.length)return this.awaiting.until=a,this.calcTimeout();a-=this.awaiting.since;b=this.intervals.frequent-this.intervals.min;a=this.intervals.min+Math.round(b*a/this.awaiting.interval)}else a<this.awaiting.until+this.intervals.slowdown?(a-=this.awaiting.until,b=this.intervals.regular-this.intervals.frequent,a=this.intervals.frequent+Math.round(b*a/this.intervals.slowdown)):
(a="undefined"===typeof this.since?0:this.intervals.regular,this.awaiting.nonstop=!1);return 1E3*a};Backplane.fetchMessages=function(){var a=Backplane.generateNextFrameURL();Backplane.makeCall(a,"fetchMessages","utf-8")};Backplane.convertMessageURLtoNextURL=function(a,b){var c=this.config.serverBaseURL||b;return a.replace(c+"/message/",c+"/messages?since=")};
Backplane.request=function(){var a=this;if(!this.getChannelName()||!this.runRequests)return!1;this.stopTimer("regular");this.stopTimer("watchdog");this.timers.regular=setTimeout(function(){a.timers.watchdog=setTimeout(function(){a.request()},1E3*Backplane.block+5E3);if(!a.since){var b=a.getCachedMessages();a.log(b.length+" message(s) in cache");0<b.length&&(a.since=a.convertMessageURLtoNextURL(b[b.length-1].messageURL));a.replayOnPageLoad&&Backplane.syncMemoryCache()}Backplane.fetchMessages()},this.calcTimeout())};
Backplane.response=function(a){var b,c,d,e,f,g;this.stopTimer("watchdog");if("undefined"!==typeof a.error_description)"invalid token"===a.error_description?(this.log("received invalid token error from server when retrieving messages"),this.refresh_token?(this.log("refreshing access token"),this.refreshToken()):(this.log("refresh token is not available; requesting new access token"),this.resetCookieChannel())):(this.log("received unexpected error from server when retrieving messages: "+a.error_description),
this.log("...trying again")),this.request();else{this.since=a.nextURL;for(b=0;b<a.messages.length;b++){Backplane.addMessageToLongTermCache(a.messages[b]);Backplane.addMessageToMemoryCache(a.messages[b]);for(c in this.subscribers)this.subscribers.hasOwnProperty(c)&&this.subscribers[c].callback(a.messages[b]);g=[];for(d=0;d<this.awaiting.queue.length;d++){f=!1;for(e=0;e<this.awaiting.queue[d].length;e++)this.awaiting.queue[d][e]===a.messages[b].type&&(f=!0);f||g.push(this.awaiting.queue[d])}this.awaiting.queue=
g}!0===a.moreMessages?this.fetchMessages():(this.firstFrameReceived=!0,this.request())}};Backplane.stopTimer=function(a){(a=this.timers[a])&&clearTimeout(a)};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvYmFja3BsYW5lMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsOENBQThDLGtCQUFrQixnQ0FBZ0MsS0FBSyx1QkFBdUIsNEJBQTRCLElBQUksT0FBTyxrQkFBa0Isa0VBQWtFLG1CQUFtQiw0RUFBNEUsb0JBQW9CLDRFQUE0RSxrQkFBa0IsYUFBYSxxQkFBcUI7QUFDMWUsS0FBSyxVQUFVLFlBQVksaUJBQWlCLHdCQUF3QixzQkFBc0IsMEJBQTBCLCtCQUErQixjQUFjLGlCQUFpQix1REFBdUQsNkNBQTZDLCtDQUErQyxZQUFZLFlBQVksMEJBQTBCLGFBQWEsMENBQTBDLHNCQUFzQiw4QkFBOEIsU0FBUztBQUMzZSwyQkFBMkIseUJBQXlCLFFBQVEsc0VBQXNFLDBEQUEwRCxlQUFlLGNBQWMsNkRBQTZELHVHQUF1Ryw2QkFBNkIsd0NBQXdDO0FBQ2xjLHNCQUFzQiwwSUFBMEksNEhBQTRIO0FBQzVSLGtDQUFrQyxtQ0FBbUMsa0RBQWtELDhEQUE4RCw4Q0FBOEMsZ0NBQWdDLHNCQUFzQixtREFBbUQsd0NBQXdDLDZFQUE2RTtBQUNqYyx1Q0FBdUMsNEJBQTRCLEdBQUcsNklBQTZJLElBQUksZ0JBQWdCLGdCQUFnQixRQUFRLFdBQVcsc0ZBQXNGLFNBQVMsa0RBQWtELHlFQUF5RTtBQUNwZSxtQkFBbUIsVUFBVSxxQ0FBcUMsNkJBQTZCLGtDQUFrQyxvQ0FBb0MsUUFBUSxXQUFXO0FBQ3hMLDhDQUE4QyxzSkFBc0o7QUFDcE0sZ0RBQWdELGtCQUFrQix3QkFBd0IseURBQXlELG9EQUFvRCxZQUFZLGdDQUFnQyxTQUFTLGtEQUFrRCxrQkFBa0Isd0RBQXdELFNBQVMseUVBQXlFO0FBQzFjLHFCQUFxQixnQ0FBZ0MsWUFBWSxXQUFXLHlCQUF5QixVQUFVLGtDQUFrQyxlQUFlLDJCQUEyQixnREFBZ0Qsa0NBQWtDLGdEQUFnRCxxQ0FBcUM7QUFDbFcsNkNBQTZDLHVDQUF1QyxpQ0FBaUMseUJBQXlCLHlCQUF5Qiw2REFBNkQsNEJBQTRCLCtDQUErQztBQUMvUyxpQ0FBaUMsUUFBUSwwREFBMEQsNEVBQTRFLEtBQUssMEJBQTBCLG1DQUFtQyxxQkFBcUIsUUFBUSxXQUFXLHlIQUF5SDtBQUNsWixtR0FBbUcsdUNBQXVDLDBDQUEwQyxvRkFBb0YsaURBQWlEO0FBQ3pULHVDQUF1QywyRkFBMkYsb0NBQW9DLG9EQUFvRCwyQkFBMkIsNkNBQTZDLHNDQUFzQyw2RUFBNkU7QUFDclosMkNBQTJDLFFBQVEsa0VBQWtFLElBQUksc0JBQXNCLGtCQUFrQixvQ0FBb0MsMENBQTBDLG1IQUFtSDtBQUNsVyw0SkFBNEosc0NBQXNDLDJKQUEySix1Q0FBdUM7QUFDcFksd0NBQXdDLHVCQUF1QixvREFBb0Qsd0JBQXdCO0FBQzNJLG1DQUFtQyxpQkFBaUIsaUNBQWlDLEVBQUUsRUFBRSw0QkFBNEIsdUJBQXVCLDZCQUE2QixtQ0FBbUMseUJBQXlCLE9BQU8sc0NBQXNDLFFBQVEsNkNBQTZDO0FBQ3ZVLHFDQUFxQyxzSEFBc0gseUNBQXlDLHFDQUFxQywrQ0FBK0MsNkJBQTZCLGtDQUFrQztBQUN2VixrQ0FBa0MseUlBQXlJO0FBQzNLLDJDQUEyQyxnS0FBZ0s7QUFDM00sbUNBQW1DLHdFQUF3RSwyQ0FBMkM7QUFDdEosaUNBQWlDLE1BQU0sZUFBZSxNQUFNLDBCQUEwQix1R0FBdUcsdUJBQXVCLDZDQUE2Qyw0REFBNEQ7QUFDN1Qsc0ZBQXNGLGNBQWMsbUNBQW1DLHVDQUF1QywrQ0FBK0MsbURBQW1ELG1DQUFtQztBQUNuVCw2QkFBNkIsV0FBVyxzREFBc0QsMEJBQTBCLDJCQUEyQiwwQ0FBMEMsd0NBQXdDLFlBQVksMEJBQTBCLGFBQWEsNEJBQTRCLHVDQUF1Qyw2RUFBNkUsZ0RBQWdELDBCQUEwQjtBQUNsZiwrQkFBK0IsZ0JBQWdCLDJCQUEyQix3UkFBd1I7QUFDbFcsNENBQTRDLEtBQUsscUJBQXFCLFFBQVEsb0JBQW9CLEtBQUssbURBQW1ELGlEQUFpRCwwR0FBMEcsS0FBSyxRQUFRLDZCQUE2QixLQUFLLEtBQUssUUFBUSxnQ0FBZ0MsMkRBQTJELGtDQUFrQztBQUM5ZSxFQUFFLHVGQUF1RixnQ0FBZ0MiLCJmaWxlIjoiYmFja3BsYW5lMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9vdGhlcnMvYmFja3BsYW5lMi5qc1wiKTtcbiIsIndpbmRvdy5CYWNrcGxhbmU9d2luZG93LkJhY2twbGFuZXx8ZnVuY3Rpb24oKXt2YXIgYT1mdW5jdGlvbihhKXtpZihCYWNrcGxhbmUuZ2V0Q2hhbm5lbElEKCkpYSgpO2Vsc2V7dmFyIGM9QmFja3BsYW5lLm9uSW5pdDtCYWNrcGxhbmUub25Jbml0PWZ1bmN0aW9uKCl7YygpO2EoKX19fTthLmxvZz1mdW5jdGlvbihhKXt3aW5kb3cuY29uc29sZSYmd2luZG93LmNvbnNvbGUubG9nJiZjb25zb2xlLmxvZyhcIkJhY2twbGFuZTogXCIrYSl9O2Eud2Fybj1mdW5jdGlvbihhKXt3aW5kb3cuY29uc29sZSYmd2luZG93LmNvbnNvbGUud2FybiYmY29uc29sZS53YXJuKFwiQmFja3BsYW5lIFdBUk5JTkc6IFwiK2EpfTthLmVycm9yPWZ1bmN0aW9uKGEpe3dpbmRvdy5jb25zb2xlJiZ3aW5kb3cuY29uc29sZS5lcnJvciYmY29uc29sZS5lcnJvcihcIkJhY2twbGFuZSBFUlJPUjogXCIrYSl9O2EudmVyc2lvbj1cIjIuMC42XCI7YS50b2tlbj1udWxsO2EucmVmcmVzaF90b2tlbj1udWxsO2EuY2hhbm5lbE5hbWU9XHJcbm51bGw7YS5ibG9jaz0wO2EuY29uZmlnPXt9O2EucnVuUmVxdWVzdHM9ITE7YS5maXJzdEZyYW1lUmVjZWl2ZWQ9ITE7YS5yZXBsYXlPblBhZ2VMb2FkPSExO2EubWVtb3J5Q2FjaGVkTWVzc2FnZXM9e307YS5tZW1vcnlDYWNoZWRNZXNzYWdlc0luZGV4PVtdO2EuY2FjaGVNYXg9MTA7YS5zdWJzY3JpYmVycz17fTthLm1lc3NhZ2VDYWNoZUluZGV4S2V5PVwiYmFja3BsYW5lMkNhY2hlZE1lc3NhZ2VzSW5kZXhcIjthLm1lc3NhZ2VDYWNoZUtleT1cImJhY2twbGFuZTJDYWNoZWRNZXNzYWdlc1wiO2EubWVzc2FnZUNhY2hlRXhwaXJlcz1cImJhY2twbGFuZTJDYWNoZUV4cGlyZXNcIjthLnRpbWVycz17fTthLmF3YWl0aW5nPXtzaW5jZTowLHVudGlsOjAscXVldWU6W119O2EuaW50ZXJ2YWxzPXttaW46MSxmcmVxdWVudDo1LHJlZ3VsYXI6MjAsc2xvd2Rvd246MTIwfTthLm9uSW5pdD1mdW5jdGlvbigpe307YS5sb2coXCJiYWNrcGxhbmUyLmpzIGxvYWRlZFwiKTtyZXR1cm4gYX0oKTtcclxuQmFja3BsYW5lLmluaXQ9ZnVuY3Rpb24oYSl7dGhpcy5sb2coXCJpbml0aWFsaXppbmdcIik7YT1hfHx7fTtpZighYS5zZXJ2ZXJCYXNlVVJMKXJldHVybiB0aGlzLmVycm9yKFwibXVzdCBzdXBwbHkgc2VydmVyQmFzZVVSTFwiKSwhMTtpZighYS5idXNOYW1lKXJldHVybiB0aGlzLmVycm9yKFwibXVzdCBzdXBwbHkgYnVzTmFtZVwiKSwhMTt0aGlzLnRpbWVycz17fTt0aGlzLmNvbmZpZz1hO3RoaXMuY29uZmlnLnNlcnZlckJhc2VVUkw9dGhpcy5ub3JtYWxpemVVUkwoYS5zZXJ2ZXJCYXNlVVJMKTtpZigwPnRoaXMuY29uZmlnLnNlcnZlckJhc2VVUkwuaW5kZXhPZihcIi92MlwiKSlyZXR1cm4gdGhpcy5lcnJvcihcInNlcnZlckJhc2VVUkwgbXVzdCBpbmNsdWRlICcvdjInXCIpLCExO3RoaXMubG9hZENoYW5uZWxGcm9tQ29va2llKCk7dGhpcy5jYWNoZU1heD1hLmNhY2hlTWF4fHx0aGlzLmNhY2hlTWF4O3RoaXMucmVwbGF5T25QYWdlTG9hZD1hLnJlcGxheU9uUGFnZUxvYWR8fHRoaXMucmVwbGF5T25QYWdlTG9hZDtcclxudGhpcy5ibG9jaz1hLmJsb2NrfHwwO1widW5kZWZpbmVkXCI9PT10eXBlb2YgdGhpcy5jb25maWcuY2hhbm5lbEV4cGlyZXMmJihhPW5ldyBEYXRlLGEuc2V0RnVsbFllYXIoYS5nZXRGdWxsWWVhcigpKzUpLHRoaXMuY29uZmlnLmNoYW5uZWxFeHBpcmVzPWEudG9HTVRTdHJpbmcoKSk7dGhpcy5nZXRDaGFubmVsTmFtZSgpPyh0aGlzLnN5bmNNZW1vcnlDYWNoZSgpLHRoaXMub25Jbml0KCksdGhpcy5yZXF1ZXN0KCkpOih0aGlzLmludmFsaWRhdGVDYWNoZSgpLHRoaXMuZmV0Y2hOZXdDaGFubmVsKCkpO3JldHVybiEwfTtcclxuQmFja3BsYW5lLnN1YnNjcmliZT1mdW5jdGlvbihhLGIpe2lmKCF0aGlzLmdldENoYW5uZWxOYW1lKCkpcmV0dXJuITE7XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBiJiYoYj10aGlzLnJlcGxheU9uUGFnZUxvYWQpO3RoaXMuY2hlY2tTdWJzY3JpYmVycygpfHwodGhpcy5ydW5SZXF1ZXN0cz0hMCx0aGlzLnJlcXVlc3QoKSk7dmFyIGMsZD0obmV3IERhdGUpLmdldFRpbWUoKStNYXRoLnJhbmRvbSgpLGU9e2lkOmQsY2FsbGJhY2s6YSx3YW50c1JlcGxheXM6Yn07dGhpcy5zdWJzY3JpYmVyc1tkXT1lO2lmKHRoaXMuZmlyc3RGcmFtZVJlY2VpdmVkfHxlLndhbnRzUmVwbGF5cylmb3IoYz0wO2M8dGhpcy5tZW1vcnlDYWNoZWRNZXNzYWdlc0luZGV4Lmxlbmd0aDtjKyspZS5jYWxsYmFjayh0aGlzLm1lbW9yeUNhY2hlZE1lc3NhZ2VzW3RoaXMubWVtb3J5Q2FjaGVkTWVzc2FnZXNJbmRleFtjXV0pO3JldHVybiBkfTtcclxuQmFja3BsYW5lLmdldENhY2hlZE1lc3NhZ2VzPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmPVtdLGc9W10saj17fSxoO2lmKHdpbmRvdy5sb2NhbFN0b3JhZ2UmJihhPXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm1lc3NhZ2VDYWNoZUluZGV4S2V5KSxiPXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm1lc3NhZ2VDYWNoZUtleSksYSYmYikpe3RyeXtjPUpTT04ucGFyc2UoYSk7aj1KU09OLnBhcnNlKGIpO2ZvcihoPTA7aDxjLmxlbmd0aDtoKyspZD1qW2NbaF1dLGU9bmV3IERhdGUoZC5leHBpcmUpLGU+bmV3IERhdGU/KGYucHVzaChkKSxnLnB1c2goY1toXSkpOmRlbGV0ZSBqW2NbaF1dfWNhdGNoKGspe3RoaXMuZXJyb3IoXCJmYWlsZWQgdG8gcGFyc2UgY2FjaGVkIG1lc3NhZ2UgZGF0YVwiKX13aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5tZXNzYWdlQ2FjaGVJbmRleEtleSxKU09OLnN0cmluZ2lmeShnKSk7d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubWVzc2FnZUNhY2hlS2V5LFxyXG5KU09OLnN0cmluZ2lmeShqKSl9cmV0dXJuIGZ9O0JhY2twbGFuZS5zeW5jTWVtb3J5Q2FjaGU9ZnVuY3Rpb24oKXt0aGlzLm1lbW9yeUNhY2hlZE1lc3NhZ2VzPXt9O3RoaXMubWVtb3J5Q2FjaGVkTWVzc2FnZXNJbmRleD1bXTt2YXIgYT1CYWNrcGxhbmUuZ2V0Q2FjaGVkTWVzc2FnZXMoKTtmb3IoaT0wO2k8YS5sZW5ndGg7aSsrKUJhY2twbGFuZS5hZGRNZXNzYWdlVG9NZW1vcnlDYWNoZShhW2ldKX07XHJcbkJhY2twbGFuZS5hZGRNZXNzYWdlVG9NZW1vcnlDYWNoZT1mdW5jdGlvbihhKXt0aGlzLm1lbW9yeUNhY2hlZE1lc3NhZ2VzLmhhc093blByb3BlcnR5KGEubWVzc2FnZVVSTCl8fCh0aGlzLm1lbW9yeUNhY2hlZE1lc3NhZ2VzW2EubWVzc2FnZVVSTF09YSx0aGlzLm1lbW9yeUNhY2hlZE1lc3NhZ2VzSW5kZXgucHVzaChhLm1lc3NhZ2VVUkwpKTt0aGlzLm1lbW9yeUNhY2hlZE1lc3NhZ2VzSW5kZXgubGVuZ3RoPnRoaXMuY2FjaGVNYXgmJihkZWxldGUgdGhpcy5tZW1vcnlDYWNoZWRNZXNzYWdlc1t0aGlzLm1lbW9yeUNhY2hlZE1lc3NhZ2VzSW5kZXhbMF1dLHRoaXMubWVtb3J5Q2FjaGVkTWVzc2FnZXNJbmRleC5zcGxpY2UoMCwxKSl9O1xyXG5CYWNrcGxhbmUuYWRkTWVzc2FnZVRvTG9uZ1Rlcm1DYWNoZT1mdW5jdGlvbihhKXt2YXIgYixjLGQ9W10sZT17fTtpZih3aW5kb3cubG9jYWxTdG9yYWdlKXtiPXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm1lc3NhZ2VDYWNoZUluZGV4S2V5KTtjPXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm1lc3NhZ2VDYWNoZUtleSk7aWYoYiYmYyl0cnl7ZD1KU09OLnBhcnNlKGIpLGU9SlNPTi5wYXJzZShjKX1jYXRjaChmKXt0aGlzLmVycm9yKFwiZmFpbGVkIHRvIHBhcnNlIGNhY2hlZCBtZXNzYWdlIGRhdGFcIil9ZVthLm1lc3NhZ2VVUkxdPWE7QmFja3BsYW5lLmluQXJyYXkoZCxhLm1lc3NhZ2VVUkwpfHxkLnB1c2goYS5tZXNzYWdlVVJMKTtkLnNvcnQoKTt3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5tZXNzYWdlQ2FjaGVJbmRleEtleSxKU09OLnN0cmluZ2lmeShkKSk7d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubWVzc2FnZUNhY2hlS2V5LFxyXG5KU09OLnN0cmluZ2lmeShlKSl9fTtCYWNrcGxhbmUuaW5BcnJheT1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWlmKGFbY109PT1iKXJldHVybiEwO3JldHVybiExfTtCYWNrcGxhbmUudW5zdWJzY3JpYmU9ZnVuY3Rpb24oYSl7aWYoIWEpcmV0dXJuITE7ZGVsZXRlIHRoaXMuc3Vic2NyaWJlcnNbYV07dGhpcy5jaGVja1N1YnNjcmliZXJzKCl8fCh0aGlzLnJ1blJlcXVlc3RzPSExKX07QmFja3BsYW5lLmdldENoYW5uZWxJRD1mdW5jdGlvbigpe3JldHVybiF0aGlzLmdldENoYW5uZWxOYW1lKCk/ITE6dGhpcy5jaGFubmVsSUR9O0JhY2twbGFuZS5leHBlY3RNZXNzYWdlcz1mdW5jdGlvbihhKXt0aGlzLmV4cGVjdE1lc3NhZ2VzV2l0aGluKDYwLGEpfTtcclxuQmFja3BsYW5lLmV4cGVjdE1lc3NhZ2VzV2l0aGluPWZ1bmN0aW9uKGEsYil7aWYoIXRoaXMuZ2V0Q2hhbm5lbE5hbWUoKXx8IWEpcmV0dXJuITE7dGhpcy5hd2FpdGluZy5zaW5jZT10aGlzLmdldFRTKCk7dGhpcy5hd2FpdGluZy5pbnRlcnZhbD1hO3RoaXMuYXdhaXRpbmcubm9uc3RvcD0hYjtiJiYoYj1cInN0cmluZ1wiPT09dHlwZW9mIGI/W2JdOmIsdGhpcy5hd2FpdGluZy5xdWV1ZS5wdXNoKGIpKTt2YXIgYz10aGlzLmF3YWl0aW5nLnNpbmNlK2E7Yz50aGlzLmF3YWl0aW5nLnVudGlsJiYodGhpcy5hd2FpdGluZy51bnRpbD1jKTt0aGlzLnJlcXVlc3QoKX07XHJcbkJhY2twbGFuZS5maW5pc2hJbml0PWZ1bmN0aW9uKGEpe3ZhciBiLGM7dGhpcy5sb2coXCJyZWNlaXZlZCBhY2Nlc3MgdG9rZW4gYW5kIGNoYW5uZWwgZnJvbSBzZXJ2ZXJcIik7aWYobnVsbCE9YS5lcnJvcil0aGlzLmVycm9yKFwiRXJyb3IgaW5pdGlhbGl6aW5nIGJhY2twbGFuZSB0b2tlbjogXCIrYS5lcnJvcik7ZWxzZXt0aGlzLnRva2VuPWEuYWNjZXNzX3Rva2VuO3RoaXMucmVmcmVzaF90b2tlbj1hLnJlZnJlc2hfdG9rZW47YT1hLnNjb3BlLnNwbGl0KFwiIFwiKTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKS0xPGFbYl0uaW5kZXhPZihcImNoYW5uZWw6XCIpJiYoYz1hW2JdLnNwbGl0KFwiOlwiKSx0aGlzLmNoYW5uZWxOYW1lPWNbMV0sdGhpcy5sb2coXCJjaGFubmVsIHNldCB0bzogXCIrdGhpcy5jaGFubmVsTmFtZSkpO251bGw9PT10aGlzLmNoYW5uZWxOYW1lP3RoaXMuZXJyb3IoXCJObyBjaGFubmVsIGZvdW5kIGluIHRoZSByZXR1cm5lZCBzY29wZVwiKToodGhpcy5zZXRDb29raWVDaGFubmVsKCksXHJcbnRoaXMuY2hhbm5lbElEPXRoaXMuZ2VuZXJhdGVDaGFubmVsSUQoKSx0aGlzLmxvZyhcImNoYW5uZWxJRCA9IFwiK3RoaXMuY2hhbm5lbElEKSx0aGlzLnN1YnNjcmliZXJzPXt9LHRoaXMub25Jbml0KCksdGhpcy5mZXRjaE1lc3NhZ2VzKCkpfX07QmFja3BsYW5lLmdlbmVyYXRlTmV4dEZyYW1lVVJMPWZ1bmN0aW9uKCl7XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB0aGlzLnNpbmNlJiYodGhpcy5zaW5jZT10aGlzLmNvbmZpZy5zZXJ2ZXJCYXNlVVJMK1wiL21lc3NhZ2VzXCIpO3ZhciBhPXRoaXMuc2luY2UsYT0tMTxhLmluZGV4T2YoXCI/XCIpP2ErXCImXCI6YStcIj9cIjtyZXR1cm4gYStcImNhbGxiYWNrPUJhY2twbGFuZS5yZXNwb25zZSZhY2Nlc3NfdG9rZW49XCIrdGhpcy50b2tlbitcIiZibG9jaz1cIit0aGlzLmJsb2NrK1wiJnJuZD1cIitNYXRoLnJhbmRvbSgpfTtcclxuQmFja3BsYW5lLmdlbmVyYXRlQ2hhbm5lbElEPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29uZmlnLnNlcnZlckJhc2VVUkwrXCIvYnVzL1wiK3RoaXMuY29uZmlnLmJ1c05hbWUrXCIvY2hhbm5lbC9cIit0aGlzLmNoYW5uZWxOYW1lfTtCYWNrcGxhbmUuZ2V0Q2hhbm5lbE5hbWU9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09PXRoaXMuY2hhbm5lbE5hbWU/ITE6dGhpcy5jaGFubmVsTmFtZX07QmFja3BsYW5lLmdldFRTPWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgucm91bmQoKG5ldyBEYXRlKS5nZXRUaW1lKCkvMUUzKX07QmFja3BsYW5lLmNoZWNrU3Vic2NyaWJlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gdGhpcy5zdWJzY3JpYmVycylpZih0aGlzLnN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KGEpKXJldHVybiEwO3JldHVybiExfTtcclxuQmFja3BsYW5lLmxvYWRDaGFubmVsRnJvbUNvb2tpZT1mdW5jdGlvbigpe3ZhciBhLGI7Yj0oZG9jdW1lbnQuY29va2llfHxcIlwiKS5tYXRjaCgvYmFja3BsYW5lMi1jaGFubmVsPShbXFx3XFxXXSo/KSg/OiR8OykvKTtpZighYnx8IWJbMV0pcmV0dXJue307YT1iWzFdLnNwbGl0KFwiOlwiKTt0aGlzLnRva2VuPWRlY29kZVVSSUNvbXBvbmVudChhWzBdKTt0aGlzLmNoYW5uZWxOYW1lPWRlY29kZVVSSUNvbXBvbmVudChhWzFdKTtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGFbMl0mJih0aGlzLmxvZyhcImZvdW5kIHJlZnJlc2ggdG9rZW4gaW4gY29va2llXCIpLHRoaXMucmVmcmVzaF90b2tlbj1kZWNvZGVVUklDb21wb25lbnQoYVsyXSkpOzIwPnRoaXMudG9rZW4ubGVuZ3RofHwzMD50aGlzLmNoYW5uZWxOYW1lLmxlbmd0aHx8XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhWzJdJiYyMD50aGlzLnJlZnJlc2hfdG9rZW4ubGVuZ3RoP3RoaXMuZXJyb3IoXCJiYWNrcGxhbmUyLWNoYW5uZWwgdmFsdWU6ICdcIitcclxuYlsxXStcIicgaXMgY29ycnVwdFwiKToodGhpcy5sb2coXCJyZXRyaWV2ZWQgdG9rZW4gYW5kIGNoYW5uZWwgZnJvbSBjb29raWVcIiksdGhpcy5jaGFubmVsSUQ9dGhpcy5nZW5lcmF0ZUNoYW5uZWxJRCgpLHRoaXMubG9nKFwiY2hhbm5lbElEID0gXCIrdGhpcy5jaGFubmVsSUQpKX07QmFja3BsYW5lLnNldENvb2tpZUNoYW5uZWw9ZnVuY3Rpb24oKXtkb2N1bWVudC5jb29raWU9XCJiYWNrcGxhbmUyLWNoYW5uZWw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudG9rZW4pK1wiOlwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNoYW5uZWxOYW1lKStcIjpcIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5yZWZyZXNoX3Rva2VuKStcIjtleHBpcmVzPVwiK3RoaXMuY29uZmlnLmNoYW5uZWxFeHBpcmVzK1wiO3BhdGg9L1wifTtcclxuQmFja3BsYW5lLnJlc2V0Q29va2llQ2hhbm5lbD1mdW5jdGlvbigpe3RoaXMuaW52YWxpZGF0ZUNhY2hlKCk7dGhpcy5yZWZyZXNoX3Rva2VuPXRoaXMudG9rZW49dGhpcy5jaGFubmVsTmFtZT1udWxsO3RoaXMuc2V0Q29va2llQ2hhbm5lbCgpO3RoaXMuZmV0Y2hOZXdDaGFubmVsKCl9O1xyXG5CYWNrcGxhbmUubWFrZUNhbGw9ZnVuY3Rpb24oYSxiLGMpe3ZhciBiPWIrXCJJZFwiLGQsZTtmb3IoZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChiKTtkOyl7ZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpO2ZvcihlIGluIGQpZGVsZXRlIGRbZV07ZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChiKX1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ZS50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7ZS5pZD1iO1widW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmKGUuY2hhcnNldD1jKTtlLnNyYz1hO2E9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07YS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLGEpfTtcclxuQmFja3BsYW5lLmZldGNoTmV3Q2hhbm5lbD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuY29uZmlnLnNlcnZlckJhc2VVUkwrXCIvdG9rZW4/Y2FsbGJhY2s9QmFja3BsYW5lLmZpbmlzaEluaXQmYnVzPVwiK3RoaXMuY29uZmlnLmJ1c05hbWUrXCImcm5kPVwiK01hdGgucmFuZG9tKCk7QmFja3BsYW5lLm1ha2VDYWxsKGEsXCJmZXRjaE5ld0NoYW5uZWxcIil9O0JhY2twbGFuZS5pbnZhbGlkYXRlQ2FjaGU9ZnVuY3Rpb24oKXt0aGlzLmxvZyhcInJlbW92aW5nIGNhY2hlZCBiYWNrcGxhbmUgbWVzc2FnZXNcIik7dGhpcy5tZW1vcnlDYWNoZWRNZXNzYWdlcz17fTt0aGlzLm1lbW9yeUNhY2hlZE1lc3NhZ2VzSW5kZXg9W107d2luZG93LmxvY2FsU3RvcmFnZSYmKHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLm1lc3NhZ2VDYWNoZUV4cGlyZXMpLHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLm1lc3NhZ2VDYWNoZUtleSksd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubWVzc2FnZUNhY2hlSW5kZXhLZXkpKX07XHJcbkJhY2twbGFuZS5yZWZyZXNoVG9rZW49ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmNvbmZpZy5zZXJ2ZXJCYXNlVVJMK1wiL3Rva2VuP2NhbGxiYWNrPUJhY2twbGFuZS5yZWZyZXNoVG9rZW5SZXNwb25zZSZyZWZyZXNoX3Rva2VuPVwiK3RoaXMucmVmcmVzaF90b2tlbitcIiZybmQ9XCIrTWF0aC5yYW5kb20oKTt0aGlzLm1ha2VDYWxsKGEsXCJyZWZyZXNoVG9rZW5cIil9O1xyXG5CYWNrcGxhbmUucmVmcmVzaFRva2VuUmVzcG9uc2U9ZnVuY3Rpb24oYSl7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhLmVycm9yX2Rlc2NyaXB0aW9uP1wiaW52YWxpZCB0b2tlblwiPT09YS5lcnJvcl9kZXNjcmlwdGlvbj8odGhpcy5sb2coXCJyZWNlaXZlZCBpbnZhbGlkIHRva2VuIGVycm9yIGZyb20gc2VydmVyIHdoZW4gcmVmcmVzaGluZyBhY2Nlc3MgdG9rZW47IHJlcXVlc3RpbmcgbmV3IGFjY2VzcyB0b2tlblwiKSx0aGlzLnJlc2V0Q29va2llQ2hhbm5lbCgpKTp0aGlzLmxvZyhcInJlY2VpdmVkIHVuZXhwZWN0ZWQgZXJyb3IgZnJvbSBzZXJ2ZXIgd2hlbiByZWZyZXNoaW5nIGFjY2VzcyB0b2tlbjogXCIrYS5lcnJvcl9kZXNjcmlwdGlvbik6KHRoaXMubG9nKFwicmVjZWl2ZWQgcmVmcmVzaGVkIGFjY2VzcyB0b2tlbiBmcm9tIHNlcnZlclwiKSx0aGlzLnRva2VuPWEuYWNjZXNzX3Rva2VuLHRoaXMucmVmcmVzaF90b2tlbj1hLnJlZnJlc2hfdG9rZW4sdGhpcy5zZXRDb29raWVDaGFubmVsKCkpfTtcclxuQmFja3BsYW5lLm5vcm1hbGl6ZVVSTD1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9eXFxzKihodHRwcz86XFwvXFwvKT8oW1xcd1xcV10qPylbXFxzXFwvXSokLyxmdW5jdGlvbihhLGMsZCl7cmV0dXJuKGN8fHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIpK2R9KX07XHJcbkJhY2twbGFuZS5jYWxjVGltZW91dD1mdW5jdGlvbigpe3ZhciBhO2E9dGhpcy5nZXRUUygpO3ZhciBiO2lmKGE8dGhpcy5hd2FpdGluZy51bnRpbCl7aWYoIXRoaXMuYXdhaXRpbmcubm9uc3RvcCYmIXRoaXMuYXdhaXRpbmcucXVldWUubGVuZ3RoKXJldHVybiB0aGlzLmF3YWl0aW5nLnVudGlsPWEsdGhpcy5jYWxjVGltZW91dCgpO2EtPXRoaXMuYXdhaXRpbmcuc2luY2U7Yj10aGlzLmludGVydmFscy5mcmVxdWVudC10aGlzLmludGVydmFscy5taW47YT10aGlzLmludGVydmFscy5taW4rTWF0aC5yb3VuZChiKmEvdGhpcy5hd2FpdGluZy5pbnRlcnZhbCl9ZWxzZSBhPHRoaXMuYXdhaXRpbmcudW50aWwrdGhpcy5pbnRlcnZhbHMuc2xvd2Rvd24/KGEtPXRoaXMuYXdhaXRpbmcudW50aWwsYj10aGlzLmludGVydmFscy5yZWd1bGFyLXRoaXMuaW50ZXJ2YWxzLmZyZXF1ZW50LGE9dGhpcy5pbnRlcnZhbHMuZnJlcXVlbnQrTWF0aC5yb3VuZChiKmEvdGhpcy5pbnRlcnZhbHMuc2xvd2Rvd24pKTpcclxuKGE9XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB0aGlzLnNpbmNlPzA6dGhpcy5pbnRlcnZhbHMucmVndWxhcix0aGlzLmF3YWl0aW5nLm5vbnN0b3A9ITEpO3JldHVybiAxRTMqYX07QmFja3BsYW5lLmZldGNoTWVzc2FnZXM9ZnVuY3Rpb24oKXt2YXIgYT1CYWNrcGxhbmUuZ2VuZXJhdGVOZXh0RnJhbWVVUkwoKTtCYWNrcGxhbmUubWFrZUNhbGwoYSxcImZldGNoTWVzc2FnZXNcIixcInV0Zi04XCIpfTtCYWNrcGxhbmUuY29udmVydE1lc3NhZ2VVUkx0b05leHRVUkw9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNvbmZpZy5zZXJ2ZXJCYXNlVVJMfHxiO3JldHVybiBhLnJlcGxhY2UoYytcIi9tZXNzYWdlL1wiLGMrXCIvbWVzc2FnZXM/c2luY2U9XCIpfTtcclxuQmFja3BsYW5lLnJlcXVlc3Q9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2lmKCF0aGlzLmdldENoYW5uZWxOYW1lKCl8fCF0aGlzLnJ1blJlcXVlc3RzKXJldHVybiExO3RoaXMuc3RvcFRpbWVyKFwicmVndWxhclwiKTt0aGlzLnN0b3BUaW1lcihcIndhdGNoZG9nXCIpO3RoaXMudGltZXJzLnJlZ3VsYXI9c2V0VGltZW91dChmdW5jdGlvbigpe2EudGltZXJzLndhdGNoZG9nPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLnJlcXVlc3QoKX0sMUUzKkJhY2twbGFuZS5ibG9jays1RTMpO2lmKCFhLnNpbmNlKXt2YXIgYj1hLmdldENhY2hlZE1lc3NhZ2VzKCk7YS5sb2coYi5sZW5ndGgrXCIgbWVzc2FnZShzKSBpbiBjYWNoZVwiKTswPGIubGVuZ3RoJiYoYS5zaW5jZT1hLmNvbnZlcnRNZXNzYWdlVVJMdG9OZXh0VVJMKGJbYi5sZW5ndGgtMV0ubWVzc2FnZVVSTCkpO2EucmVwbGF5T25QYWdlTG9hZCYmQmFja3BsYW5lLnN5bmNNZW1vcnlDYWNoZSgpfUJhY2twbGFuZS5mZXRjaE1lc3NhZ2VzKCl9LHRoaXMuY2FsY1RpbWVvdXQoKSl9O1xyXG5CYWNrcGxhbmUucmVzcG9uc2U9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnO3RoaXMuc3RvcFRpbWVyKFwid2F0Y2hkb2dcIik7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhLmVycm9yX2Rlc2NyaXB0aW9uKVwiaW52YWxpZCB0b2tlblwiPT09YS5lcnJvcl9kZXNjcmlwdGlvbj8odGhpcy5sb2coXCJyZWNlaXZlZCBpbnZhbGlkIHRva2VuIGVycm9yIGZyb20gc2VydmVyIHdoZW4gcmV0cmlldmluZyBtZXNzYWdlc1wiKSx0aGlzLnJlZnJlc2hfdG9rZW4/KHRoaXMubG9nKFwicmVmcmVzaGluZyBhY2Nlc3MgdG9rZW5cIiksdGhpcy5yZWZyZXNoVG9rZW4oKSk6KHRoaXMubG9nKFwicmVmcmVzaCB0b2tlbiBpcyBub3QgYXZhaWxhYmxlOyByZXF1ZXN0aW5nIG5ldyBhY2Nlc3MgdG9rZW5cIiksdGhpcy5yZXNldENvb2tpZUNoYW5uZWwoKSkpOih0aGlzLmxvZyhcInJlY2VpdmVkIHVuZXhwZWN0ZWQgZXJyb3IgZnJvbSBzZXJ2ZXIgd2hlbiByZXRyaWV2aW5nIG1lc3NhZ2VzOiBcIithLmVycm9yX2Rlc2NyaXB0aW9uKSxcclxudGhpcy5sb2coXCIuLi50cnlpbmcgYWdhaW5cIikpLHRoaXMucmVxdWVzdCgpO2Vsc2V7dGhpcy5zaW5jZT1hLm5leHRVUkw7Zm9yKGI9MDtiPGEubWVzc2FnZXMubGVuZ3RoO2IrKyl7QmFja3BsYW5lLmFkZE1lc3NhZ2VUb0xvbmdUZXJtQ2FjaGUoYS5tZXNzYWdlc1tiXSk7QmFja3BsYW5lLmFkZE1lc3NhZ2VUb01lbW9yeUNhY2hlKGEubWVzc2FnZXNbYl0pO2ZvcihjIGluIHRoaXMuc3Vic2NyaWJlcnMpdGhpcy5zdWJzY3JpYmVycy5oYXNPd25Qcm9wZXJ0eShjKSYmdGhpcy5zdWJzY3JpYmVyc1tjXS5jYWxsYmFjayhhLm1lc3NhZ2VzW2JdKTtnPVtdO2ZvcihkPTA7ZDx0aGlzLmF3YWl0aW5nLnF1ZXVlLmxlbmd0aDtkKyspe2Y9ITE7Zm9yKGU9MDtlPHRoaXMuYXdhaXRpbmcucXVldWVbZF0ubGVuZ3RoO2UrKyl0aGlzLmF3YWl0aW5nLnF1ZXVlW2RdW2VdPT09YS5tZXNzYWdlc1tiXS50eXBlJiYoZj0hMCk7Znx8Zy5wdXNoKHRoaXMuYXdhaXRpbmcucXVldWVbZF0pfXRoaXMuYXdhaXRpbmcucXVldWU9XHJcbmd9ITA9PT1hLm1vcmVNZXNzYWdlcz90aGlzLmZldGNoTWVzc2FnZXMoKToodGhpcy5maXJzdEZyYW1lUmVjZWl2ZWQ9ITAsdGhpcy5yZXF1ZXN0KCkpfX07QmFja3BsYW5lLnN0b3BUaW1lcj1mdW5jdGlvbihhKXsoYT10aGlzLnRpbWVyc1thXSkmJmNsZWFyVGltZW91dChhKX07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=