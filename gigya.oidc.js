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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/others/gigya.oidc.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/others/gigya.oidc.js":
/*!*****************************************!*\
  !*** ./src/legacy/others/gigya.oidc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!(function () {
    function ensureJsSdkLoaded(apiKey, configObj, done) {
        if (window.gigya && window.gigya.isGigya) { // we have gigya on page
            if(!window.gigya.isReady){ // bootstrap in process - wait for bootstrap to finish
                waitForGigyaServiceReady(done);
            }else{ // finished bootstrap - gigya service is ready
                done();
            }
        }else{ // gigya is not on page
            loadGigyaJS(apiKey, configObj);
            waitForGigyaServiceReady(done);
        }
    }

    var loadGigyaJS = function(apiKey, configObj){
        window.gigya = window.gigya || {};
        window.gigya.isGigya = true; /// important! so won't discard current modules.
        var isSecurePage = (location.protocol.toLowerCase().indexOf('https') == 0);
        var dcString = configObj.dc ? ('.' + configObj.dc) : '';
        var server = isSecurePage ? "https://cdns" + dcString + ".gigya.com" : "http://cdn" + dcString + ".gigya.com";
        var src = server + "/js/gigya.js?apiKey=" + apiKey;
        var scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript'; // application/ecmascript is not supported by IE8
        scriptElement.src = src;
        scriptElement.async = true;
        document.getElementsByTagName('head')[0].appendChild(scriptElement);
    }

    var waitForGigyaServiceReady = function(done){
        // set socialize.js load handler
        var prevHandler = null;
        if (typeof window.onGigyaServiceReady !== "undefined")
            prevHandler = window.onGigyaServiceReady;

        window.onGigyaServiceReady = function () {
            if (prevHandler)
                prevHandler.apply(this, arguments);
            done();
        };
    };

    function urlParams(query) {
        if (query.indexOf('?') > -1)
            query = query.substring(query.indexOf('?') + 1);
        var queryParts = query.split(/&/);
        var params = {};
        for (var i = 0; i < queryParts.length; ++i) {
            var param = queryParts[i];
            if (param.indexOf('=') === -1)
                continue;
            var paramParts = param.split('=');
            if (paramParts.length !== 2)
                continue;
            params[paramParts[0]] = decodeURIComponent(paramParts[1]);
        }
        return params;
    }

    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    function redirectToLogin(configObject) {
        var scriptConf = window.gigya.utils.JSON.deserialize(configObject.configJson);

        if (!scriptConf)
            throw new Error('The params object is not valid.');

        window.location.replace(scriptConf.loginURL);
    }

    function redirectToConsent(configObject, uidParams, params) {
        var scriptConf = window.gigya.utils.JSON.deserialize(configObject.configJson);
        if (!scriptConf)
            throw new Error('The params object is not valid.');

        var consentParams = {
            context: params.context,
            clientID: params.clientID,
            scope: params.scope,
            prompt: params.prompt,
            display: params.display,
            UID: uidParams.UID,
            UIDSignature: uidParams.UIDSignature,
            signatureTimestamp: uidParams.signatureTimestamp
        };
        var url = window.gigya.utils.URL.addParamsToURL(scriptConf.consentURL, consentParams);
        location.href = url;
    }

    function redirectToContinue(apiKey, context) {
        var loginToken = getLoginToken(apiKey);
        var params = urlParams(window.location.hash || window.location.search);
        var consent = getParameterByName('consent');
        var sig = params['sig'];
        var userKey = params['userKey'];
        if (userKey === 'undefined') {
            userKey = null;
        }

        redirectToContinueEndPoint('authorize/continue', {
            context: context,
            login_token: loginToken,
            consent: consent,
            sig: sig,
            userKey: userKey,
            gmidTicket: window.gigya._.apiAdapter.getGmidTicket()
        }, apiKey);
    }

    function redirectToError(configObject, params) {
        var scriptConf = window.gigya.utils.JSON.deserialize(configObject.configJson);
        if (!scriptConf)
            throw new Error('The params object is not valid.');

        var url = scriptConf.errorURL;
        url = window.gigya.utils.URL.addParamsToURL(url, params);

        location.href = url;
    }

    function redirectToContinueEndPoint(endPoint, params, apiKey) {
        // redirects to an internal oidc/authorize/continue endpoint with the given parameters
        var url = 'https://' + window.gigya._.getApiDomain('fidm') + '/oidc/op/v1.0/' + apiKey +'/' + endPoint;
        redirect(url, {
            domain: endPoint,
            apiKey: apiKey,
            endPoint: endPoint
        }, params);
    }

    function redirect(url, urlValues, params) {

        url = window.gigya.utils.templates.fill(url, urlValues);
        url = window.gigya.utils.URL.addParamsToURL(url, params);

        location.href = url;
    }

    function getLoginToken(apiKey) {
        // returns current login token directly from the web adapter
        return window.gigya._.apiAdapters.web.tokenStore.get(apiKey);
    }

    function getUid(callback) {
        window.gigya.socialize.getUserInfo({
            callback: function (response) {
                if (response.errorCode === 0) {

                    var uidParams = {
                        UID: response['UID'],
                        UIDSignature: response['UIDSignature'],
                        signatureTimestamp: response['signatureTimestamp']
                    }

                    callback(uidParams);
                }
            }
        });
    }

    function activeUserExists(apiKey, UID) {
        var loginToken = getLoginToken(apiKey);
        return !!loginToken && !!UID;
    }

    function contextKey(apiKey) {
        return 'gig_oidcContext_' + apiKey;
    }

    var sessionStorageTimeout = 10 * 60 * 1000; // allow user 10 minutes to finish


    function saveContext(apiKey, context, done) {
        // save context for next retrival, if not returned from loginUrl
        var key = contextKey(apiKey);

        window.gigya.utils.sessionCache.get(key, sessionStorageTimeout, function (savedContexts) {
            savedContexts = savedContexts || [];
            savedContexts.push(context);

            window.gigya.utils.sessionCache.set(key, savedContexts);
            done();
        });
    }

    function removeContext(apiKey) {
        // remove the context
        var key = contextKey(apiKey);
        window.gigya.utils.sessionCache.remove(key);
    }

    function loadContext(apiKey, callback) {
        // load context if was not provided in url
        var key = contextKey(apiKey);

        window.gigya.utils.sessionCache.get(key, sessionStorageTimeout, function (savedContexts) {
            savedContexts = savedContexts || [];
            var lastContext = savedContexts.pop() || {};

            window.gigya.utils.sessionCache.set(key, savedContexts);
            callback(lastContext);
        });
    }

    function processRequest(configObj) {
        var params = getParams();
        switch (params.mode) {

            // Authorize
            case "login":
                if (!params['context'])
                    throw new Error('missing context param');

                saveContext(configObj.apiKey, params, function () {
                    getUid(function (uidParams) {
                        if (activeUserExists(configObj.apiKey, uidParams.UID)) {
                            redirectToConsent(configObj, uidParams, params);
                        } else {
                            redirectToLogin(configObj);
                        }
                    });
                });
                break;

                // Authorize prompt=login
            case "forceLogin":
                if (!params['context'])
                    throw new Error('missing context param');

                saveContext(configObj.apiKey, params, function () {
                    redirectToLogin(configObj);
                });
                break;

                // Authorize prompt=none
            case "passiveLogin":
                if (!params['context'])
                    throw new Error('missing context param');

                saveContext(configObj.apiKey, params, function () {
                    getUid(function (uidParams) {
                        if (activeUserExists(configObj.apiKey, uidParams.UID)) {
                            redirectToConsent(configObj, uidParams, params);
                        } else {
                            // this will cause the continue endpoint to return error(login required) to the RP
                            redirectToContinue(configObj.apiKey, params.context);
                        }
                    });
                });
                break;

                // Login page
            case "afterLogin":
                loadContext(configObj.apiKey, function (savedParams) {
                    saveContext(configObj.apiKey, savedParams, function () {
                        getUid(function (uidParams) {
                            if (activeUserExists(configObj.apiKey, uidParams.UID)) {
                                redirectToConsent(configObj, uidParams, savedParams);
                            } else {
                                throw new Error('missing active user');
                            }
                        });
                    });
                });
                break;

                // Consent page
            case "afterConsent":
                loadContext(configObj.apiKey, function (savedParams) {
                    removeContext(configObj.apiKey);
                    redirectToContinue(configObj.apiKey, savedParams.context);
                });
                break;

                // Error page
            case "error":
                redirectToError(configObj, params);
                break;
        }
    }

    function findConfiguration() {
        // find script element
        var scriptElement = findScriptElement();

        if (!scriptElement)
            throw new Error('failed to find script element');

        var apiKey = urlParams(scriptElement.src)['apiKey'];
        var configJson = scriptElement.innerHTML.replace(/^\s+|\s+$/g, '');

        if (!configJson)
            throw new Error('No object params was found.');

        if (!apiKey)
            throw new Error('failed to find api key');

        return {
            apiKey: apiKey,
            configJson: configJson
        }
    }

    function findScriptElement() {
        var scripts = document.getElementsByTagName('script');
        var scriptElement;

        for (var i = scripts.length - 1; i >= 0; i--) {
            var script = scripts[i];
            var src = script.src.toLowerCase();
            if (src != '') {
                if ((src.indexOf('//cdn\d*.gigya.com') > -1 || src.indexOf('//cdns\d*.gigya.com') > -1 || src.indexOf('?apikey=') > -1)
                    && (src.indexOf('gigya.oidc.') > -1)) {
                    scriptElement = script;
                    break;
                }
            }
        }

        return scriptElement;
    }

    // TODO: This is a code from gigya.utils.JSON and this should not be copied from there but use it
    function deserializeJSON(json, defaultValue, scope) {
        // Return default value if is empty string (or similar).
        if (!json || !json.replace(/^\s+|\s+$/g, '')) {
            return defaultValue || {};
        }
        // Attempt to parse. On error, warn in console and return default value.
        try {
            var keys = [];
            var values = [];
            if (scope) {
                for (var key in scope) {
                    keys.push(key);
                    values.push(scope[key]);
                }
            }
            var fn = eval("(function(" + keys.join(',') + ") { return " + json.trim() + "; })");
            return fn.apply(undefined, values);
        }
        catch (e) {
            console.warn('Error deserializing JavaScript', e);
            return defaultValue || {};
        }
    }


    function getParams() {
        var result = urlParams(window.location.hash || window.location.search);
        return {
            mode: result['mode'],
            context: result['context'],
            clientID: result['client_id'] || result['clientID'],
            scope: result['scope'],
            prompt: result['prompt'],
            display: result['display'],
            message: result['errorMessage'],
            code: result['errorCode'],
            callID: result['callId']
        }
    }

    function bootstrap() {
        var configObj = findConfiguration();
        ensureJsSdkLoaded(configObj.apiKey, deserializeJSON(configObj.configJson), function () { processRequest(configObj) });
    }

    bootstrap();
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvZ2lneWEub2lkYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCxnQkFBZ0IsWUFBSyxVQUFVO0FBQy9CO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQSxTQUFTLEtBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVC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eWEub2lkYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9vdGhlcnMvZ2lneWEub2lkYy5qc1wiKTtcbiIsIiEoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZW5zdXJlSnNTZGtMb2FkZWQoYXBpS2V5LCBjb25maWdPYmosIGRvbmUpIHtcclxuICAgICAgICBpZiAod2luZG93LmdpZ3lhICYmIHdpbmRvdy5naWd5YS5pc0dpZ3lhKSB7IC8vIHdlIGhhdmUgZ2lneWEgb24gcGFnZVxyXG4gICAgICAgICAgICBpZighZ2lneWEuaXNSZWFkeSl7IC8vIGJvb3RzdHJhcCBpbiBwcm9jZXNzIC0gd2FpdCBmb3IgYm9vdHN0cmFwIHRvIGZpbmlzaFxyXG4gICAgICAgICAgICAgICAgd2FpdEZvckdpZ3lhU2VydmljZVJlYWR5KGRvbmUpO1xyXG4gICAgICAgICAgICB9ZWxzZXsgLy8gZmluaXNoZWQgYm9vdHN0cmFwIC0gZ2lneWEgc2VydmljZSBpcyByZWFkeVxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7IC8vIGdpZ3lhIGlzIG5vdCBvbiBwYWdlXHJcbiAgICAgICAgICAgIGxvYWRHaWd5YUpTKGFwaUtleSwgY29uZmlnT2JqKTtcclxuICAgICAgICAgICAgd2FpdEZvckdpZ3lhU2VydmljZVJlYWR5KGRvbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9hZEdpZ3lhSlMgPSBmdW5jdGlvbihhcGlLZXksIGNvbmZpZ09iail7XHJcbiAgICAgICAgd2luZG93LmdpZ3lhID0gd2luZG93LmdpZ3lhIHx8IHt9O1xyXG4gICAgICAgIHdpbmRvdy5naWd5YS5pc0dpZ3lhID0gdHJ1ZTsgLy8vIGltcG9ydGFudCEgc28gd29uJ3QgZGlzY2FyZCBjdXJyZW50IG1vZHVsZXMuXHJcbiAgICAgICAgdmFyIGlzU2VjdXJlUGFnZSA9IChsb2NhdGlvbi5wcm90b2NvbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2h0dHBzJykgPT0gMCk7XHJcbiAgICAgICAgdmFyIGRjU3RyaW5nID0gY29uZmlnT2JqLmRjID8gKCcuJyArIGNvbmZpZ09iai5kYykgOiAnJztcclxuICAgICAgICB2YXIgc2VydmVyID0gaXNTZWN1cmVQYWdlID8gXCJodHRwczovL2NkbnNcIiArIGRjU3RyaW5nICsgXCIuZ2lneWEuY29tXCIgOiBcImh0dHA6Ly9jZG5cIiArIGRjU3RyaW5nICsgXCIuZ2lneWEuY29tXCI7XHJcbiAgICAgICAgdmFyIHNyYyA9IHNlcnZlciArIFwiL2pzL2dpZ3lhLmpzP2FwaUtleT1cIiArIGFwaUtleTtcclxuICAgICAgICB2YXIgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIHNjcmlwdEVsZW1lbnQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnOyAvLyBhcHBsaWNhdGlvbi9lY21hc2NyaXB0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUU4XHJcbiAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSBzcmM7XHJcbiAgICAgICAgc2NyaXB0RWxlbWVudC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2FpdEZvckdpZ3lhU2VydmljZVJlYWR5ID0gZnVuY3Rpb24oZG9uZSl7XHJcbiAgICAgICAgLy8gc2V0IHNvY2lhbGl6ZS5qcyBsb2FkIGhhbmRsZXJcclxuICAgICAgICB2YXIgcHJldkhhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lm9uR2lneWFTZXJ2aWNlUmVhZHkgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIHByZXZIYW5kbGVyID0gd2luZG93Lm9uR2lneWFTZXJ2aWNlUmVhZHk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbkdpZ3lhU2VydmljZVJlYWR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocHJldkhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICBwcmV2SGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gdXJsUGFyYW1zKHF1ZXJ5KSB7XHJcbiAgICAgICAgaWYgKHF1ZXJ5LmluZGV4T2YoJz8nKSA+IC0xKVxyXG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnN1YnN0cmluZyhxdWVyeS5pbmRleE9mKCc/JykgKyAxKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJ0cyA9IHF1ZXJ5LnNwbGl0KC8mLyk7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlcnlQYXJ0cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB2YXIgcGFyYW0gPSBxdWVyeVBhcnRzW2ldO1xyXG4gICAgICAgICAgICBpZiAocGFyYW0uaW5kZXhPZignPScpID09PSAtMSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1QYXJ0cyA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbVBhcnRzLmxlbmd0aCAhPT0gMilcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBwYXJhbXNbcGFyYW1QYXJ0c1swXV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFyYW1QYXJ0c1sxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpIHtcclxuICAgICAgICB2YXIgbWF0Y2ggPSBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICc9KFteJl0qKScpLmV4ZWMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoICYmIGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFsxXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3RUb0xvZ2luKGNvbmZpZ09iamVjdCkge1xyXG4gICAgICAgIHZhciBzY3JpcHRDb25mID0gZ2lneWEudXRpbHMuSlNPTi5kZXNlcmlhbGl6ZShjb25maWdPYmplY3QuY29uZmlnSnNvbik7XHJcblxyXG4gICAgICAgIGlmICghc2NyaXB0Q29uZilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcGFyYW1zIG9iamVjdCBpcyBub3QgdmFsaWQuJyk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHNjcmlwdENvbmYubG9naW5VUkwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0VG9Db25zZW50KGNvbmZpZ09iamVjdCwgdWlkUGFyYW1zLCBwYXJhbXMpIHtcclxuICAgICAgICB2YXIgc2NyaXB0Q29uZiA9IGdpZ3lhLnV0aWxzLkpTT04uZGVzZXJpYWxpemUoY29uZmlnT2JqZWN0LmNvbmZpZ0pzb24pO1xyXG4gICAgICAgIGlmICghc2NyaXB0Q29uZilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcGFyYW1zIG9iamVjdCBpcyBub3QgdmFsaWQuJyk7XHJcblxyXG4gICAgICAgIHZhciBjb25zZW50UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiBwYXJhbXMuY29udGV4dCxcclxuICAgICAgICAgICAgY2xpZW50SUQ6IHBhcmFtcy5jbGllbnRJRCxcclxuICAgICAgICAgICAgc2NvcGU6IHBhcmFtcy5zY29wZSxcclxuICAgICAgICAgICAgcHJvbXB0OiBwYXJhbXMucHJvbXB0LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBwYXJhbXMuZGlzcGxheSxcclxuICAgICAgICAgICAgVUlEOiB1aWRQYXJhbXMuVUlELFxyXG4gICAgICAgICAgICBVSURTaWduYXR1cmU6IHVpZFBhcmFtcy5VSURTaWduYXR1cmUsXHJcbiAgICAgICAgICAgIHNpZ25hdHVyZVRpbWVzdGFtcDogdWlkUGFyYW1zLnNpZ25hdHVyZVRpbWVzdGFtcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHVybCA9IGdpZ3lhLnV0aWxzLlVSTC5hZGRQYXJhbXNUb1VSTChzY3JpcHRDb25mLmNvbnNlbnRVUkwsIGNvbnNlbnRQYXJhbXMpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3RUb0NvbnRpbnVlKGFwaUtleSwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBsb2dpblRva2VuID0gZ2V0TG9naW5Ub2tlbihhcGlLZXkpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB1cmxQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2ggfHwgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgdmFyIGNvbnNlbnQgPSBnZXRQYXJhbWV0ZXJCeU5hbWUoJ2NvbnNlbnQnKTtcclxuICAgICAgICB2YXIgc2lnID0gcGFyYW1zWydzaWcnXTtcclxuICAgICAgICB2YXIgdXNlcktleSA9IHBhcmFtc1sndXNlcktleSddO1xyXG4gICAgICAgIGlmICh1c2VyS2V5ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB1c2VyS2V5ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlZGlyZWN0VG9Db250aW51ZUVuZFBvaW50KCdhdXRob3JpemUvY29udGludWUnLCB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXHJcbiAgICAgICAgICAgIGxvZ2luX3Rva2VuOiBsb2dpblRva2VuLFxyXG4gICAgICAgICAgICBjb25zZW50OiBjb25zZW50LFxyXG4gICAgICAgICAgICBzaWc6IHNpZyxcclxuICAgICAgICAgICAgdXNlcktleTogdXNlcktleSxcclxuICAgICAgICAgICAgZ21pZFRpY2tldDogZ2lneWEuXy5hcGlBZGFwdGVyLmdldEdtaWRUaWNrZXQoKVxyXG4gICAgICAgIH0sIGFwaUtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3RUb0Vycm9yKGNvbmZpZ09iamVjdCwgcGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIHNjcmlwdENvbmYgPSBnaWd5YS51dGlscy5KU09OLmRlc2VyaWFsaXplKGNvbmZpZ09iamVjdC5jb25maWdKc29uKTtcclxuICAgICAgICBpZiAoIXNjcmlwdENvbmYpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHBhcmFtcyBvYmplY3QgaXMgbm90IHZhbGlkLicpO1xyXG5cclxuICAgICAgICB2YXIgdXJsID0gc2NyaXB0Q29uZi5lcnJvclVSTDtcclxuICAgICAgICB1cmwgPSBnaWd5YS51dGlscy5VUkwuYWRkUGFyYW1zVG9VUkwodXJsLCBwYXJhbXMpO1xyXG5cclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0VG9Db250aW51ZUVuZFBvaW50KGVuZFBvaW50LCBwYXJhbXMsIGFwaUtleSkge1xyXG4gICAgICAgIC8vIHJlZGlyZWN0cyB0byBhbiBpbnRlcm5hbCBvaWRjL2F1dGhvcml6ZS9jb250aW51ZSBlbmRwb2ludCB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdmFyIHVybCA9ICdodHRwczovLycgKyBnaWd5YS5fLmdldEFwaURvbWFpbignZmlkbScpICsgJy9vaWRjL29wL3YxLjAvJyArIGFwaUtleSArJy8nICsgZW5kUG9pbnQ7XHJcbiAgICAgICAgcmVkaXJlY3QodXJsLCB7XHJcbiAgICAgICAgICAgIGRvbWFpbjogZW5kUG9pbnQsXHJcbiAgICAgICAgICAgIGFwaUtleTogYXBpS2V5LFxyXG4gICAgICAgICAgICBlbmRQb2ludDogZW5kUG9pbnRcclxuICAgICAgICB9LCBwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KHVybCwgdXJsVmFsdWVzLCBwYXJhbXMpIHtcclxuXHJcbiAgICAgICAgdXJsID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodXJsLCB1cmxWYWx1ZXMpO1xyXG4gICAgICAgIHVybCA9IGdpZ3lhLnV0aWxzLlVSTC5hZGRQYXJhbXNUb1VSTCh1cmwsIHBhcmFtcyk7XHJcblxyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TG9naW5Ub2tlbihhcGlLZXkpIHtcclxuICAgICAgICAvLyByZXR1cm5zIGN1cnJlbnQgbG9naW4gdG9rZW4gZGlyZWN0bHkgZnJvbSB0aGUgd2ViIGFkYXB0ZXJcclxuICAgICAgICByZXR1cm4gZ2lneWEuXy5hcGlBZGFwdGVycy53ZWIudG9rZW5TdG9yZS5nZXQoYXBpS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRVaWQoY2FsbGJhY2spIHtcclxuICAgICAgICBnaWd5YS5zb2NpYWxpemUuZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JDb2RlID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1aWRQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVJRDogcmVzcG9uc2VbJ1VJRCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVSURTaWduYXR1cmU6IHJlc3BvbnNlWydVSURTaWduYXR1cmUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlVGltZXN0YW1wOiByZXNwb25zZVsnc2lnbmF0dXJlVGltZXN0YW1wJ11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVpZFBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmVVc2VyRXhpc3RzKGFwaUtleSwgVUlEKSB7XHJcbiAgICAgICAgdmFyIGxvZ2luVG9rZW4gPSBnZXRMb2dpblRva2VuKGFwaUtleSk7XHJcbiAgICAgICAgcmV0dXJuICEhbG9naW5Ub2tlbiAmJiAhIVVJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb250ZXh0S2V5KGFwaUtleSkge1xyXG4gICAgICAgIHJldHVybiAnZ2lnX29pZGNDb250ZXh0XycgKyBhcGlLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlc3Npb25TdG9yYWdlVGltZW91dCA9IDEwICogNjAgKiAxMDAwOyAvLyBhbGxvdyB1c2VyIDEwIG1pbnV0ZXMgdG8gZmluaXNoXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVDb250ZXh0KGFwaUtleSwgY29udGV4dCwgZG9uZSkge1xyXG4gICAgICAgIC8vIHNhdmUgY29udGV4dCBmb3IgbmV4dCByZXRyaXZhbCwgaWYgbm90IHJldHVybmVkIGZyb20gbG9naW5VcmxcclxuICAgICAgICB2YXIga2V5ID0gY29udGV4dEtleShhcGlLZXkpO1xyXG5cclxuICAgICAgICBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUuZ2V0KGtleSwgc2Vzc2lvblN0b3JhZ2VUaW1lb3V0LCBmdW5jdGlvbiAoc2F2ZWRDb250ZXh0cykge1xyXG4gICAgICAgICAgICBzYXZlZENvbnRleHRzID0gc2F2ZWRDb250ZXh0cyB8fCBbXTtcclxuICAgICAgICAgICAgc2F2ZWRDb250ZXh0cy5wdXNoKGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLnNldChrZXksIHNhdmVkQ29udGV4dHMpO1xyXG4gICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ29udGV4dChhcGlLZXkpIHtcclxuICAgICAgICAvLyByZW1vdmUgdGhlIGNvbnRleHRcclxuICAgICAgICB2YXIga2V5ID0gY29udGV4dEtleShhcGlLZXkpO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZS5yZW1vdmUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkQ29udGV4dChhcGlLZXksIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgLy8gbG9hZCBjb250ZXh0IGlmIHdhcyBub3QgcHJvdmlkZWQgaW4gdXJsXHJcbiAgICAgICAgdmFyIGtleSA9IGNvbnRleHRLZXkoYXBpS2V5KTtcclxuXHJcbiAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLmdldChrZXksIHNlc3Npb25TdG9yYWdlVGltZW91dCwgZnVuY3Rpb24gKHNhdmVkQ29udGV4dHMpIHtcclxuICAgICAgICAgICAgc2F2ZWRDb250ZXh0cyA9IHNhdmVkQ29udGV4dHMgfHwgW107XHJcbiAgICAgICAgICAgIHZhciBsYXN0Q29udGV4dCA9IHNhdmVkQ29udGV4dHMucG9wKCkgfHwge307XHJcblxyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUuc2V0KGtleSwgc2F2ZWRDb250ZXh0cyk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGxhc3RDb250ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzUmVxdWVzdChjb25maWdPYmopIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gZ2V0UGFyYW1zKCk7XHJcbiAgICAgICAgc3dpdGNoIChwYXJhbXMubW9kZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gQXV0aG9yaXplXHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbXNbJ2NvbnRleHQnXSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY29udGV4dCBwYXJhbScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNhdmVDb250ZXh0KGNvbmZpZ09iai5hcGlLZXksIHBhcmFtcywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFVpZChmdW5jdGlvbiAodWlkUGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVVc2VyRXhpc3RzKGNvbmZpZ09iai5hcGlLZXksIHVpZFBhcmFtcy5VSUQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvQ29uc2VudChjb25maWdPYmosIHVpZFBhcmFtcywgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9Mb2dpbihjb25maWdPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEF1dGhvcml6ZSBwcm9tcHQ9bG9naW5cclxuICAgICAgICAgICAgY2FzZSBcImZvcmNlTG9naW5cIjpcclxuICAgICAgICAgICAgICAgIGlmICghcGFyYW1zWydjb250ZXh0J10pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNvbnRleHQgcGFyYW0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzYXZlQ29udGV4dChjb25maWdPYmouYXBpS2V5LCBwYXJhbXMsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvTG9naW4oY29uZmlnT2JqKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXV0aG9yaXplIHByb21wdD1ub25lXHJcbiAgICAgICAgICAgIGNhc2UgXCJwYXNzaXZlTG9naW5cIjpcclxuICAgICAgICAgICAgICAgIGlmICghcGFyYW1zWydjb250ZXh0J10pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNvbnRleHQgcGFyYW0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzYXZlQ29udGV4dChjb25maWdPYmouYXBpS2V5LCBwYXJhbXMsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRVaWQoZnVuY3Rpb24gKHVpZFBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVXNlckV4aXN0cyhjb25maWdPYmouYXBpS2V5LCB1aWRQYXJhbXMuVUlEKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUb0NvbnNlbnQoY29uZmlnT2JqLCB1aWRQYXJhbXMsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgY2F1c2UgdGhlIGNvbnRpbnVlIGVuZHBvaW50IHRvIHJldHVybiBlcnJvcihsb2dpbiByZXF1aXJlZCkgdG8gdGhlIFJQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvQ29udGludWUoY29uZmlnT2JqLmFwaUtleSwgcGFyYW1zLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIExvZ2luIHBhZ2VcclxuICAgICAgICAgICAgY2FzZSBcImFmdGVyTG9naW5cIjpcclxuICAgICAgICAgICAgICAgIGxvYWRDb250ZXh0KGNvbmZpZ09iai5hcGlLZXksIGZ1bmN0aW9uIChzYXZlZFBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVDb250ZXh0KGNvbmZpZ09iai5hcGlLZXksIHNhdmVkUGFyYW1zLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFVpZChmdW5jdGlvbiAodWlkUGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVXNlckV4aXN0cyhjb25maWdPYmouYXBpS2V5LCB1aWRQYXJhbXMuVUlEKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9Db25zZW50KGNvbmZpZ09iaiwgdWlkUGFyYW1zLCBzYXZlZFBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBhY3RpdmUgdXNlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29uc2VudCBwYWdlXHJcbiAgICAgICAgICAgIGNhc2UgXCJhZnRlckNvbnNlbnRcIjpcclxuICAgICAgICAgICAgICAgIGxvYWRDb250ZXh0KGNvbmZpZ09iai5hcGlLZXksIGZ1bmN0aW9uIChzYXZlZFBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNvbnRleHQoY29uZmlnT2JqLmFwaUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUb0NvbnRpbnVlKGNvbmZpZ09iai5hcGlLZXksIHNhdmVkUGFyYW1zLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvciBwYWdlXHJcbiAgICAgICAgICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RUb0Vycm9yKGNvbmZpZ09iaiwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kQ29uZmlndXJhdGlvbigpIHtcclxuICAgICAgICAvLyBmaW5kIHNjcmlwdCBlbGVtZW50XHJcbiAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBmaW5kU2NyaXB0RWxlbWVudCgpO1xyXG5cclxuICAgICAgICBpZiAoIXNjcmlwdEVsZW1lbnQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIGZpbmQgc2NyaXB0IGVsZW1lbnQnKTtcclxuXHJcbiAgICAgICAgdmFyIGFwaUtleSA9IHVybFBhcmFtcyhzY3JpcHRFbGVtZW50LnNyYylbJ2FwaUtleSddO1xyXG4gICAgICAgIHZhciBjb25maWdKc29uID0gc2NyaXB0RWxlbWVudC5pbm5lckhUTUwucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZ0pzb24pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gb2JqZWN0IHBhcmFtcyB3YXMgZm91bmQuJyk7XHJcblxyXG4gICAgICAgIGlmICghYXBpS2V5KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBmaW5kIGFwaSBrZXknKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYXBpS2V5OiBhcGlLZXksXHJcbiAgICAgICAgICAgIGNvbmZpZ0pzb246IGNvbmZpZ0pzb25cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZFNjcmlwdEVsZW1lbnQoKSB7XHJcbiAgICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBzY3JpcHRzW2ldO1xyXG4gICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAoc3JjICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHNyYy5pbmRleE9mKCcvL2NkblxcZCouZ2lneWEuY29tJykgPiAtMSB8fCBzcmMuaW5kZXhPZignLy9jZG5zXFxkKi5naWd5YS5jb20nKSA+IC0xIHx8IHNyYy5pbmRleE9mKCc/YXBpa2V5PScpID4gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKHNyYy5pbmRleE9mKCdnaWd5YS5vaWRjLicpID4gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudCA9IHNjcmlwdDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNjcmlwdEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogVGhpcyBpcyBhIGNvZGUgZnJvbSBnaWd5YS51dGlscy5KU09OIGFuZCB0aGlzIHNob3VsZCBub3QgYmUgY29waWVkIGZyb20gdGhlcmUgYnV0IHVzZSBpdFxyXG4gICAgZnVuY3Rpb24gZGVzZXJpYWxpemVKU09OKGpzb24sIGRlZmF1bHRWYWx1ZSwgc2NvcGUpIHtcclxuICAgICAgICAvLyBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiBpcyBlbXB0eSBzdHJpbmcgKG9yIHNpbWlsYXIpLlxyXG4gICAgICAgIGlmICghanNvbiB8fCAhanNvbi5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBwYXJzZS4gT24gZXJyb3IsIHdhcm4gaW4gY29uc29sZSBhbmQgcmV0dXJuIGRlZmF1bHQgdmFsdWUuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzY29wZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHNjb3BlW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBmbiA9IGV2YWwoXCIoZnVuY3Rpb24oXCIgKyBrZXlzLmpvaW4oJywnKSArIFwiKSB7IHJldHVybiBcIiArIGpzb24udHJpbSgpICsgXCI7IH0pXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLCB2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGRlc2VyaWFsaXppbmcgSmF2YVNjcmlwdCcsIGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFyYW1zKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB1cmxQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2ggfHwgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW9kZTogcmVzdWx0Wydtb2RlJ10sXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHJlc3VsdFsnY29udGV4dCddLFxyXG4gICAgICAgICAgICBjbGllbnRJRDogcmVzdWx0WydjbGllbnRfaWQnXSB8fCByZXN1bHRbJ2NsaWVudElEJ10sXHJcbiAgICAgICAgICAgIHNjb3BlOiByZXN1bHRbJ3Njb3BlJ10sXHJcbiAgICAgICAgICAgIHByb21wdDogcmVzdWx0Wydwcm9tcHQnXSxcclxuICAgICAgICAgICAgZGlzcGxheTogcmVzdWx0WydkaXNwbGF5J10sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdFsnZXJyb3JNZXNzYWdlJ10sXHJcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdFsnZXJyb3JDb2RlJ10sXHJcbiAgICAgICAgICAgIGNhbGxJRDogcmVzdWx0WydjYWxsSWQnXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBib290c3RyYXAoKSB7XHJcbiAgICAgICAgdmFyIGNvbmZpZ09iaiA9IGZpbmRDb25maWd1cmF0aW9uKCk7XHJcbiAgICAgICAgZW5zdXJlSnNTZGtMb2FkZWQoY29uZmlnT2JqLmFwaUtleSwgZGVzZXJpYWxpemVKU09OKGNvbmZpZ09iai5jb25maWdKc29uKSwgZnVuY3Rpb24gKCkgeyBwcm9jZXNzUmVxdWVzdChjb25maWdPYmopIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJvb3RzdHJhcCgpO1xyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9