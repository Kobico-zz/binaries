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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/others/GenesisExchange_Gigya.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/others/GenesisExchange_Gigya.js":
/*!****************************************************!*\
  !*** ./src/legacy/others/GenesisExchange_Gigya.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


function GenesisExchange_Gigya(c){
	this.conf=c;
	
	this.processAction=function(evt){
		if (typeof(this.conf)=='undefined' || typeof(this.conf.eventMap)=='undefined') 
			return null;
			
		var eventMap = this.eventLookup(evt);
				
		if(typeof(eventMap)=='object' && eventMap!=null) {
			var genConf={};
			if(typeof(eventMap.mapVars)=='object'){
				genConf=this.genEVarMap(evt,eventMap.mapVars);
			}
			if(typeof(eventMap.omtrEvents)=='string') {
				genConf["events"] = eventMap.omtrEvents;
			}
			else if(typeof(eventMap.omtrEvents)=='object') {
				genConf["events"] = eventMap.omtrEvents.join(',');
			}
			this.slb(genConf);
		}
	}
	
	this.eventLookup=function(evt){
		var en="", es="";
		
		// get the event name and source of the current event
		if(typeof(evt.eventName)!='undefined') {
			en=evt.eventName;
		} else {
			return null;
		}		
		if(typeof(evt.source)!='undefined') {
			es=evt.source;
		} 
		
		// Look for this event in the config, first matching event is used
		for (var i=0; i<this.conf.eventMap.length; i++) {
		    var c = this.conf.eventMap[i];
			if ( (c.gigEvent.toLowerCase()==en.toLowerCase() || c.gigEvent.toLowerCase()=="on"+en.toLowerCase()) 
					&& (typeof(c.gigSource)!="string" || c.gigSource.toLowerCase()==es.toLowerCase())) {
				return c;
			}
		}
		return null;
	}
	

	this.genEVarMap=function(evt, map) {
		var evars={};
		for(var i=0;i<map.length;i++) {
			var parts=map[i].split('=');
			if (parts.length==2) {
				var evar=parts[0].replace(/^\s+|\s+$/g,"");
				var val = parts[1].replace(/^\s+|\s+$/g, "");
				val=val.substr(val.length-2)=="()" ? val.substr(0,val.length-2) : val;
				var fv = this.getFieldValue(evt,val);
				if (typeof(evars[evar])!='undefined' && evars[evar]!='') 
					evars[evar]=evars[evar]+':'+fv;
				else
					evars[evar]=fv;
			}
			else {
				evars[parts[0]]='';
			}
		}
		return evars;
	}
	this.getFieldValue=function(evt,field) {
		if(typeof(this.conf[field])=='function') {
			// The field is a custom user function
			return this.conf[field].call(this.conf,evt);
		}
		else if(typeof(this[field])=='function') {
			// The field is a built-in function
			return this[field].call(this,evt);
		}
		else {
			var pathParts=field.split('.'), obj=evt;
			for (var i=0; i<pathParts.length; i++) {				
				if (typeof(obj[pathParts[i]])!='undefined') {
					obj=obj[pathParts[i]];
				}
				else
					return field;
			}
			if (typeof(obj)=="string" || typeof(obj)=="number") 
				return obj;
			// attempt to extract data from complex objects
			if (typeof(obj.length)=="number") {
				var r="";
				for(var i=0;i<obj.length;i++) {
					r+=(r?',':'')+obj[i];
				}
				return r
			}
			if (typeof(obj)=="object") {
				var r="";
				for(var f in obj) {
					r+=(r?',':'')+f;
				}
				return r;
			}
			return field;
		}
	}

	this.slb = function (st) {
		if (typeof (s_gi) != 'undefined') {
			var s_a = (this.conf['omtrAccount'] ? this.conf['omtrAccount'] : window.s_account);
			var s = s_gi(s_a), vl = '', ltvo = '', lteo = '', g = {};
			ltvo = s.linkTrackVars; lteo = s.linkTrackEvents;
			for (var p in st) {
				g[p] = (s[p] ? s[p] : "");
				if (st[p]) s[p] = st[p];
				vl += (vl ? ',' : '') + p;
				if (p == 'events') { s.linkTrackEvents = s.events = s[p] }
			}
			if (vl) { s.linkTrackVars = vl }
			else { s.linkTrackVars = s.linkTrackEvents = 'None' }
			s.tl(true, 'o', this.conf.linkName);
			s.linkTrackVars = ltvo; s.linkTrackEvents = lteo;
			for (var p2 in g) {
				s[p2] = g[p2];
			}
		}
	}


	// start built-in data extraction functions
	this.precision=function(p,v){
		if(typeof(v)=="string")
			return parseFloat(v).toFixed(p);
		else
			return v;
	}
	
	this.providerList=function(evt){
		var r='';
		if(typeof(evt)=='object' && typeof(evt.user)=='object' && typeof(evt.user.identities)=='object') {
			for(var p in evt.user.identities)
				r+=(r?',':'')+p;
		}
		return r;
	}
	// end built-in data extraction functions
}//end class GenesisExchange


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvR2VuZXNpc0V4Y2hhbmdlX0dpZ3lhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEc7QUFDQTtBQUNBO0FBQ0EsRzs7QUFFQTtBQUNBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CLE87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxZQUFZO0FBQ1osU0FBUztBQUNUO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiR2VuZXNpc0V4Y2hhbmdlX0dpZ3lhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGVnYWN5L290aGVycy9HZW5lc2lzRXhjaGFuZ2VfR2lneWEuanNcIik7XG4iLCJcclxuZnVuY3Rpb24gR2VuZXNpc0V4Y2hhbmdlX0dpZ3lhKGMpe1xyXG5cdHRoaXMuY29uZj1jO1xyXG5cdFxyXG5cdHRoaXMucHJvY2Vzc0FjdGlvbj1mdW5jdGlvbihldnQpe1xyXG5cdFx0aWYgKHR5cGVvZih0aGlzLmNvbmYpPT0ndW5kZWZpbmVkJyB8fCB0eXBlb2YodGhpcy5jb25mLmV2ZW50TWFwKT09J3VuZGVmaW5lZCcpIFxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHJcblx0XHR2YXIgZXZlbnRNYXAgPSB0aGlzLmV2ZW50TG9va3VwKGV2dCk7XHJcblx0XHRcdFx0XHJcblx0XHRpZih0eXBlb2YoZXZlbnRNYXApPT0nb2JqZWN0JyAmJiBldmVudE1hcCE9bnVsbCkge1xyXG5cdFx0XHR2YXIgZ2VuQ29uZj17fTtcclxuXHRcdFx0aWYodHlwZW9mKGV2ZW50TWFwLm1hcFZhcnMpPT0nb2JqZWN0Jyl7XHJcblx0XHRcdFx0Z2VuQ29uZj10aGlzLmdlbkVWYXJNYXAoZXZ0LGV2ZW50TWFwLm1hcFZhcnMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHR5cGVvZihldmVudE1hcC5vbXRyRXZlbnRzKT09J3N0cmluZycpIHtcclxuXHRcdFx0XHRnZW5Db25mW1wiZXZlbnRzXCJdID0gZXZlbnRNYXAub210ckV2ZW50cztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZihldmVudE1hcC5vbXRyRXZlbnRzKT09J29iamVjdCcpIHtcclxuXHRcdFx0XHRnZW5Db25mW1wiZXZlbnRzXCJdID0gZXZlbnRNYXAub210ckV2ZW50cy5qb2luKCcsJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zbGIoZ2VuQ29uZik7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHRoaXMuZXZlbnRMb29rdXA9ZnVuY3Rpb24oZXZ0KXtcclxuXHRcdHZhciBlbj1cIlwiLCBlcz1cIlwiO1xyXG5cdFx0XHJcblx0XHQvLyBnZXQgdGhlIGV2ZW50IG5hbWUgYW5kIHNvdXJjZSBvZiB0aGUgY3VycmVudCBldmVudFxyXG5cdFx0aWYodHlwZW9mKGV2dC5ldmVudE5hbWUpIT0ndW5kZWZpbmVkJykge1xyXG5cdFx0XHRlbj1ldnQuZXZlbnROYW1lO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHRcdFxyXG5cdFx0aWYodHlwZW9mKGV2dC5zb3VyY2UpIT0ndW5kZWZpbmVkJykge1xyXG5cdFx0XHRlcz1ldnQuc291cmNlO1xyXG5cdFx0fSBcclxuXHRcdFxyXG5cdFx0Ly8gTG9vayBmb3IgdGhpcyBldmVudCBpbiB0aGUgY29uZmlnLCBmaXJzdCBtYXRjaGluZyBldmVudCBpcyB1c2VkXHJcblx0XHRmb3IgKHZhciBpPTA7IGk8dGhpcy5jb25mLmV2ZW50TWFwLmxlbmd0aDsgaSsrKSB7XHJcblx0XHQgICAgdmFyIGMgPSB0aGlzLmNvbmYuZXZlbnRNYXBbaV07XHJcblx0XHRcdGlmICggKGMuZ2lnRXZlbnQudG9Mb3dlckNhc2UoKT09ZW4udG9Mb3dlckNhc2UoKSB8fCBjLmdpZ0V2ZW50LnRvTG93ZXJDYXNlKCk9PVwib25cIitlbi50b0xvd2VyQ2FzZSgpKSBcclxuXHRcdFx0XHRcdCYmICh0eXBlb2YoYy5naWdTb3VyY2UpIT1cInN0cmluZ1wiIHx8IGMuZ2lnU291cmNlLnRvTG93ZXJDYXNlKCk9PWVzLnRvTG93ZXJDYXNlKCkpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRcclxuXHJcblx0dGhpcy5nZW5FVmFyTWFwPWZ1bmN0aW9uKGV2dCwgbWFwKSB7XHJcblx0XHR2YXIgZXZhcnM9e307XHJcblx0XHRmb3IodmFyIGk9MDtpPG1hcC5sZW5ndGg7aSsrKSB7XHJcblx0XHRcdHZhciBwYXJ0cz1tYXBbaV0uc3BsaXQoJz0nKTtcclxuXHRcdFx0aWYgKHBhcnRzLmxlbmd0aD09Mikge1xyXG5cdFx0XHRcdHZhciBldmFyPXBhcnRzWzBdLnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIik7XHJcblx0XHRcdFx0dmFyIHZhbCA9IHBhcnRzWzFdLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xyXG5cdFx0XHRcdHZhbD12YWwuc3Vic3RyKHZhbC5sZW5ndGgtMik9PVwiKClcIiA/IHZhbC5zdWJzdHIoMCx2YWwubGVuZ3RoLTIpIDogdmFsO1xyXG5cdFx0XHRcdHZhciBmdiA9IHRoaXMuZ2V0RmllbGRWYWx1ZShldnQsdmFsKTtcclxuXHRcdFx0XHRpZiAodHlwZW9mKGV2YXJzW2V2YXJdKSE9J3VuZGVmaW5lZCcgJiYgZXZhcnNbZXZhcl0hPScnKSBcclxuXHRcdFx0XHRcdGV2YXJzW2V2YXJdPWV2YXJzW2V2YXJdKyc6JytmdjtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRldmFyc1tldmFyXT1mdjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRldmFyc1twYXJ0c1swXV09Jyc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBldmFycztcclxuXHR9XHJcblx0dGhpcy5nZXRGaWVsZFZhbHVlPWZ1bmN0aW9uKGV2dCxmaWVsZCkge1xyXG5cdFx0aWYodHlwZW9mKHRoaXMuY29uZltmaWVsZF0pPT0nZnVuY3Rpb24nKSB7XHJcblx0XHRcdC8vIFRoZSBmaWVsZCBpcyBhIGN1c3RvbSB1c2VyIGZ1bmN0aW9uXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbmZbZmllbGRdLmNhbGwodGhpcy5jb25mLGV2dCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHR5cGVvZih0aGlzW2ZpZWxkXSk9PSdmdW5jdGlvbicpIHtcclxuXHRcdFx0Ly8gVGhlIGZpZWxkIGlzIGEgYnVpbHQtaW4gZnVuY3Rpb25cclxuXHRcdFx0cmV0dXJuIHRoaXNbZmllbGRdLmNhbGwodGhpcyxldnQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHZhciBwYXRoUGFydHM9ZmllbGQuc3BsaXQoJy4nKSwgb2JqPWV2dDtcclxuXHRcdFx0Zm9yICh2YXIgaT0wOyBpPHBhdGhQYXJ0cy5sZW5ndGg7IGkrKykge1x0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHR5cGVvZihvYmpbcGF0aFBhcnRzW2ldXSkhPSd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRvYmo9b2JqW3BhdGhQYXJ0c1tpXV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJldHVybiBmaWVsZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mKG9iaik9PVwic3RyaW5nXCIgfHwgdHlwZW9mKG9iaik9PVwibnVtYmVyXCIpIFxyXG5cdFx0XHRcdHJldHVybiBvYmo7XHJcblx0XHRcdC8vIGF0dGVtcHQgdG8gZXh0cmFjdCBkYXRhIGZyb20gY29tcGxleCBvYmplY3RzXHJcblx0XHRcdGlmICh0eXBlb2Yob2JqLmxlbmd0aCk9PVwibnVtYmVyXCIpIHtcclxuXHRcdFx0XHR2YXIgcj1cIlwiO1xyXG5cdFx0XHRcdGZvcih2YXIgaT0wO2k8b2JqLmxlbmd0aDtpKyspIHtcclxuXHRcdFx0XHRcdHIrPShyPycsJzonJykrb2JqW2ldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gclxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2Yob2JqKT09XCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHZhciByPVwiXCI7XHJcblx0XHRcdFx0Zm9yKHZhciBmIGluIG9iaikge1xyXG5cdFx0XHRcdFx0cis9KHI/JywnOicnKStmO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmllbGQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLnNsYiA9IGZ1bmN0aW9uIChzdCkge1xyXG5cdFx0aWYgKHR5cGVvZiAoc19naSkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0dmFyIHNfYSA9ICh0aGlzLmNvbmZbJ29tdHJBY2NvdW50J10gPyB0aGlzLmNvbmZbJ29tdHJBY2NvdW50J10gOiB3aW5kb3cuc19hY2NvdW50KTtcclxuXHRcdFx0dmFyIHMgPSBzX2dpKHNfYSksIHZsID0gJycsIGx0dm8gPSAnJywgbHRlbyA9ICcnLCBnID0ge307XHJcblx0XHRcdGx0dm8gPSBzLmxpbmtUcmFja1ZhcnM7IGx0ZW8gPSBzLmxpbmtUcmFja0V2ZW50cztcclxuXHRcdFx0Zm9yICh2YXIgcCBpbiBzdCkge1xyXG5cdFx0XHRcdGdbcF0gPSAoc1twXSA/IHNbcF0gOiBcIlwiKTtcclxuXHRcdFx0XHRpZiAoc3RbcF0pIHNbcF0gPSBzdFtwXTtcclxuXHRcdFx0XHR2bCArPSAodmwgPyAnLCcgOiAnJykgKyBwO1xyXG5cdFx0XHRcdGlmIChwID09ICdldmVudHMnKSB7IHMubGlua1RyYWNrRXZlbnRzID0gcy5ldmVudHMgPSBzW3BdIH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodmwpIHsgcy5saW5rVHJhY2tWYXJzID0gdmwgfVxyXG5cdFx0XHRlbHNlIHsgcy5saW5rVHJhY2tWYXJzID0gcy5saW5rVHJhY2tFdmVudHMgPSAnTm9uZScgfVxyXG5cdFx0XHRzLnRsKHRydWUsICdvJywgdGhpcy5jb25mLmxpbmtOYW1lKTtcclxuXHRcdFx0cy5saW5rVHJhY2tWYXJzID0gbHR2bzsgcy5saW5rVHJhY2tFdmVudHMgPSBsdGVvO1xyXG5cdFx0XHRmb3IgKHZhciBwMiBpbiBnKSB7XHJcblx0XHRcdFx0c1twMl0gPSBnW3AyXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdC8vIHN0YXJ0IGJ1aWx0LWluIGRhdGEgZXh0cmFjdGlvbiBmdW5jdGlvbnNcclxuXHR0aGlzLnByZWNpc2lvbj1mdW5jdGlvbihwLHYpe1xyXG5cdFx0aWYodHlwZW9mKHYpPT1cInN0cmluZ1wiKVxyXG5cdFx0XHRyZXR1cm4gcGFyc2VGbG9hdCh2KS50b0ZpeGVkKHApO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdjtcclxuXHR9XHJcblx0XHJcblx0dGhpcy5wcm92aWRlckxpc3Q9ZnVuY3Rpb24oZXZ0KXtcclxuXHRcdHZhciByPScnO1xyXG5cdFx0aWYodHlwZW9mKGV2dCk9PSdvYmplY3QnICYmIHR5cGVvZihldnQudXNlcik9PSdvYmplY3QnICYmIHR5cGVvZihldnQudXNlci5pZGVudGl0aWVzKT09J29iamVjdCcpIHtcclxuXHRcdFx0Zm9yKHZhciBwIGluIGV2dC51c2VyLmlkZW50aXRpZXMpXHJcblx0XHRcdFx0cis9KHI/JywnOicnKStwO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHI7XHJcblx0fVxyXG5cdC8vIGVuZCBidWlsdC1pbiBkYXRhIGV4dHJhY3Rpb24gZnVuY3Rpb25zXHJcbn0vL2VuZCBjbGFzcyBHZW5lc2lzRXhjaGFuZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==