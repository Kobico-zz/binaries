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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/others/gigya.saml.bose.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/others/gigya.saml.bose.js":
/*!**********************************************!*\
  !*** ./src/legacy/others/gigya.saml.bose.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var gigya;
(function (gigya) {
    var boot;
    (function (boot) {
        boot.debug = false;
        /**
         * copied from gigya.utils.DOM.getGigyaScriptElement
         * @param fileNames
         */
        function getGigyaScriptElement(fileNames) {
            var scripts = document.getElementsByTagName('script');
            var scriptElement;
            var gigyaCdnRegex = /\/\/cdn(s)?\.(ru1\.)?gigya.com/;
            for (var i = scripts.length - 1; i >= 0; i--) {
                var script = scripts[i];
                var src = script.src.toLowerCase();
                if (src !== '') {
                    if ((gigyaCdnRegex.test(src) || src.indexOf('?apikey=') > -1)) {
                        var isFileNameExistInSrc = fileNames.length === 0 || fileNames.some(function (fileName) { return src.indexOf(fileName) > -1; });
                        if (isFileNameExistInSrc) {
                            scriptElement = script;
                            break;
                        }
                    }
                }
            }
            return scriptElement;
        }
        boot.getGigyaScriptElement = getGigyaScriptElement;
        function ensureJsSdkLoaded(apiKey, done, async, useExistingGigyaDomain, useXMLHTTPRequest) {
            if (async === void 0) { async = true; }
            if (useExistingGigyaDomain === void 0) { useExistingGigyaDomain = false; }
            if (useXMLHTTPRequest === void 0) { useXMLHTTPRequest = false; }
            if (gigya['isGigya']) {
                if (boot.debug)
                    console.debug('$G gigya-jsSdk already loaded.');
                if (!gigya['isReady']) {
                    waitForGigyaServiceReady(done);
                }
                else {
                    done();
                }
            }
            else {
                loadGigyaJS(apiKey, async, useExistingGigyaDomain, useXMLHTTPRequest);
                waitForGigyaServiceReady(done);
            }
        }
        boot.ensureJsSdkLoaded = ensureJsSdkLoaded;
        function loadGigyaJS(apiKey, async, useExistingGigyaDomain, useXMLHTTPRequest) {
            gigya['isGigya'] = true; /// important! so won't discard current modules.
            var isSecurePage = (location.protocol.toLowerCase().indexOf('https') == 0);
            var server;
            if (useExistingGigyaDomain) {
                var a = document.createElement('a');
                a.href = getGigyaScriptElement([]).src;
                server = a.protocol + "//" + a.host;
            }
            else {
                server = isSecurePage ? "https://cdns.gigya.com" : "http://cdn.gigya.com";
            }
            var src = server + "/js/gigya.js?apiKey=" + apiKey + "&chico=1";
            var scriptElement = document.createElement('script');
            scriptElement.type = 'text/javascript'; // application/ecmascript is not supported by IE8
            if (!useXMLHTTPRequest) {
                scriptElement.src = src;
                scriptElement.async = async;
            }
            else {
                /// Note that cross-domain XMLHttpRequest requires the server to return the header: "Access-Control-Allow-Origin: <origin> | *"
                var xhrObj = new XMLHttpRequest();
                xhrObj.open('GET', src, async);
                xhrObj.send('');
                scriptElement.text = xhrObj.responseText;
            }
            if (boot.debug)
                console.debug('$G loading gigya-jsSdk...');
            document.getElementsByTagName('head')[0].appendChild(scriptElement);
        }
        function waitForGigyaServiceReady(done) {
            // set socialize.js load handler
            var prevHandler = null;
            if (typeof window['onGigyaServiceReady'] !== "undefined")
                prevHandler = window['onGigyaServiceReady'];
            window['onGigyaServiceReady'] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (prevHandler)
                    prevHandler.apply(this, args);
                if (boot.debug)
                    console.debug('$G gigya-jsSdk loaded!');
                done();
            };
        }
        function ensureBasePluginLoaded(apiKey, done, async, useXMLHTTPRequest) {
            if (async === void 0) { async = true; }
            if (useXMLHTTPRequest === void 0) { useXMLHTTPRequest = false; }
            ensureJsSdkLoaded(apiKey, function () {
                if (gigya['_']['plugins']['BasePlugin'] && !gigya['_']['plugins']['BasePlugin']['isMock']) {
                    done();
                }
                else {
                    gigya['_']['loadBasePlugin']({ onLoad: done });
                }
            }, async, useXMLHTTPRequest);
        }
        boot.ensureBasePluginLoaded = ensureBasePluginLoaded;
    })(boot = gigya.boot || (gigya.boot = {}));
})(gigya || (gigya = {}));
/// <reference path="definitions.d.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        var utils;
        (function (utils) {
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
            utils.urlParams = urlParams;
            function openIframe(url, done, timeout) {
                var handlerCalled = false;
                var loadHandler = function () {
                    if (!handlerCalled) {
                        handlerCalled = true;
                        done();
                    }
                };
                gigya.utils.script.triggerResource(url, loadHandler, gigya.utils.script.ResourceTypes.iframe, false);
                if (timeout)
                    setTimeout(loadHandler, timeout);
            }
            utils.openIframe = openIframe;
            function reportError(errorInfo, context) {
                // TODO redirect an internal endpoint so that the server will have a chance to deal with errors in its flow correctly
                if (gigya.samlConfig.errorPageURL) {
                    return utils.redirect(gigya.samlConfig.errorPageURL, context, {
                        error: errorInfo
                    });
                }
            }
            utils.reportError = reportError;
            function redirectToSamlEndPont(endPoint, params, apiKey) {
                // redirects to an internal saml endpoint with the given parameters
                var domain = gigya._.getApiDomain('fidm');
                var url = "https://" + domain + "/saml/v2.0/" + apiKey + "/" + endPoint;
                var gmidTicket = gigya._.apiAdapter.getGmidTicket();
                if (gmidTicket)
                    params.gmidTicket = gmidTicket;
                redirect(url, {
                    domain: domain,
                    apiKey: apiKey,
                    endPoint: endPoint
                }, params);
            }
            utils.redirectToSamlEndPont = redirectToSamlEndPont;
            function setUrlParams(url, params) {
                return gigya.utils.URL.addParamsToURL(url, params);
            }
            utils.setUrlParams = setUrlParams;
            function redirect(url, urlValues, params) {
                // redirect to any given url
                url = templateFill(url, urlValues);
                url = setUrlParams(url, params);
                location.href = url;
                //window.open(url, '_self'); // This breaks postMessage messaging - replace the window.opener
            }
            utils.redirect = redirect;
            function getLoginToken(apiKey) {
                // returns current login token directly from the web adapter
                return gigya._.apiAdapters.web.tokenStore.get(apiKey);
            }
            utils.getLoginToken = getLoginToken;
            function contextKey(apiKey) {
                return 'gig_samlContext_' + apiKey;
            }
            var sessionStorageTimeout = 10 * 60 * 1000; // allow user 10 minutes to finish the saml login
            function saveContext(apiKey, context, done) {
                // save context for next retrival, if not returned from loginUrl
                var key = contextKey(apiKey);
                gigya.utils.sessionCache.get(key, sessionStorageTimeout, function (savedContexts) {
                    savedContexts = savedContexts || [];
                    savedContexts.push(context);
                    gigya.utils.sessionCache.set(key, savedContexts);
                    done();
                });
            }
            utils.saveContext = saveContext;
            function loadContext(apiKey, callback) {
                // load context if was not provided in url
                var key = contextKey(apiKey);
                gigya.utils.sessionCache.get(key, sessionStorageTimeout, function (savedContexts) {
                    savedContexts = savedContexts || [];
                    var lastContext = savedContexts.pop() || {};
                    gigya.utils.sessionCache.set(key, savedContexts);
                    callback(lastContext);
                });
            }
            utils.loadContext = loadContext;
            function templateFill(template, params) {
                return gigya.utils.templates.fill(template, params);
            }
            utils.templateFill = templateFill;
            function deserializeJSON(json) {
                return gigya.utils.JSON.deserialize(json, '');
            }
            utils.deserializeJSON = deserializeJSON;
            function objectMerge() {
                var objects = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    objects[_i] = arguments[_i];
                }
                return gigya.utils.object.merge(objects);
            }
            utils.objectMerge = objectMerge;
            function isLoggedIn(callback, apiKey) {
                var userKey = getLoginToken(apiKey);
                var loggedIn = Boolean(userKey);
                callback(loggedIn);
            }
            utils.isLoggedIn = isLoggedIn;
            function logout(samlContext, callback) {
                gigya.socialize.logout({
                    callback: callback,
                    samlContext: samlContext
                });
            }
            utils.logout = logout;
        })(utils = proxy.utils || (proxy.utils = {}));
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="utils.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        var ProxyMode;
        (function (ProxyMode) {
            ProxyMode[ProxyMode["_undefined"] = 0] = "_undefined";
            // SSO
            ProxyMode[ProxyMode["login"] = 1] = "login";
            ProxyMode[ProxyMode["forceLogin"] = 2] = "forceLogin";
            ProxyMode[ProxyMode["passiveLogin"] = 3] = "passiveLogin";
            ProxyMode[ProxyMode["afterLogin"] = 4] = "afterLogin";
            ProxyMode[ProxyMode["initSSO"] = 5] = "initSSO";
            // SLO
            ProxyMode[ProxyMode["logout"] = 6] = "logout";
            // internal
            ProxyMode[ProxyMode["_debug"] = 7] = "_debug";
        })(ProxyMode = proxy.ProxyMode || (proxy.ProxyMode = {}));
        function parseUrl(query) {
            var params = proxy.utils.urlParams(query);
            var mode = ProxyMode[params['mode']];
            ;
            var samlContext = params['samlContext'];
            var spName = params['spName'];
            // _afterLogin can come without samlContext or mode
            return {
                mode: mode,
                samlContext: samlContext,
                params: params,
                spName: spName
            };
        }
        proxy.parseUrl = parseUrl;
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="definitions.d.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        function findScriptElement() {
            var scripts = document.getElementsByTagName('script');
            var scriptElement;
            for (var i = scripts.length - 1; i >= 0; i--) {
                var script = scripts[i];
                var src = script.src.toLowerCase();
                if (src != '') {
                    if ((src.indexOf('//cdn\d*.gigya.com') > -1 || src.indexOf('//cdns\d*.gigya.com') > -1 || src.indexOf('?apikey=') > -1)
                        && (src.indexOf('gigya.saml.js') > -1)) {
                        scriptElement = script;
                        break;
                    }
                }
            }
            return scriptElement;
        }
        function findConfiguration() {
            // find script element
            var scriptElement = findScriptElement();
            if (!scriptElement)
                throw new Error('failed to find script element');
            var apiKey = proxy.utils.urlParams(scriptElement.src)['apiKey'];
            var configJson = scriptElement.innerHTML.replace(/^\s+|\s+$/g, '');
            if (!configJson)
                throw new Error('No object params was found.');
            if (!apiKey)
                throw new Error('failed to find api key');
            return {
                apiKey: apiKey,
                configJson: configJson
            };
        }
        proxy.findConfiguration = findConfiguration;
        function parseConfiguration(unparsedConfig) {
            var scriptConf = proxy.utils.deserializeJSON(unparsedConfig.configJson);
            if (!scriptConf)
                throw new Error('The params object is not valid.');
            var configurationObj = proxy.utils.objectMerge({
                apiKey: unparsedConfig.apiKey
            }, scriptConf);
            if (!configurationObj.loginURL)
                throw new Error("The 'loginURL' param is not valid.");
            if (!configurationObj.logoutURL)
                throw new Error("The 'logoutURL' param is not valid.");
            return configurationObj;
        }
        proxy.parseConfiguration = parseConfiguration;
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="../../../utils/Gigya.Js.Boot/app/boot.ts" />
//** This is intentional! we want to package gigya.boot within the gigyaSaml.proxy . **
/// <reference path="definitions.d.ts" />
/// <reference path="parseUrl.ts" />
/// <reference path="configuration.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        function bootstrap(done) {
            var action = proxy.parseUrl(location.search);
            var unparsedConfig = proxy.findConfiguration();
            gigya.boot.ensureJsSdkLoaded(unparsedConfig.apiKey, function () {
                var configuration = proxy.parseConfiguration(unparsedConfig);
                changeLogoutBehaviour();
                if (gigya.partnerSettings.ssoKey && document.cookie.indexOf('hasSSOToken') === -1) {
                    document.cookie = 'hasSSOToken=true;';
                    gigya.setSSOToken({ redirectURL: document.location.href });
                }
                else {
                    done(action, configuration);
                }
            }, true, true);
        }
        proxy.bootstrap = bootstrap;
        ;
        function changeLogoutBehaviour() {
            // change socializeLogout not to logout before the server response, and to always go to the server
            gigya._.logoutBehaviour.logoutBeforeServerResponse = false;
            gigya._.logoutBehaviour.alwaysSendLogoutToServer = true;
        }
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="definitions.d.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        function processLogin(action, configuration) {
            proxy.utils.isLoggedIn(function (loggedIn) {
                if (loggedIn)
                    proxy.utils.redirectToSamlEndPont('idp/sso/continue', {
                        samlContext: action.samlContext,
                        loginToken: proxy.utils.getLoginToken(configuration.apiKey)
                    }, configuration.apiKey);
                else
                    processForceLogin(action, configuration);
            }, configuration.apiKey);
        }
        proxy.processLogin = processLogin;
        ;
        function processForceLogin(action, configuration) {
            // save samlContext to retrieve it if necesary
            proxy.utils.saveContext(configuration.apiKey, action, function () {
                // Parameters to loginURL might be supported in the future
                //var backTo = utils.setUrlParams(location.toString(), { mode: ProxyMode[ProxyMode._afterLogin] });
                proxy.utils.redirect(configuration.loginURL, action, {});
            });
        }
        proxy.processForceLogin = processForceLogin;
        function processAfterLogin(action, configuration) {
            proxy.utils.loadContext(configuration.apiKey, function (savedContext) {
                action.samlContext = action.samlContext || savedContext.samlContext;
                action.spName = action.spName || savedContext.spName;
                processPassiveLogin(action, configuration);
            });
        }
        proxy.processAfterLogin = processAfterLogin;
        function processPassiveLogin(action, configuration) {
            proxy.utils.isLoggedIn(function (loggedIn) {
                var loginToken = (loggedIn ? proxy.utils.getLoginToken(configuration.apiKey) : null);
                proxy.utils.redirectToSamlEndPont('idp/sso/continue', {
                    samlContext: action.samlContext,
                    loginToken: loginToken
                }, configuration.apiKey);
            }, configuration.apiKey);
        }
        proxy.processPassiveLogin = processPassiveLogin;
        function processInitSSO(action, configuration) {
            proxy.utils.isLoggedIn(function (loggedIn) {
                var loginToken = (loggedIn ? proxy.utils.getLoginToken(configuration.apiKey) : null);
                proxy.utils.redirectToSamlEndPont('idp/sso/init', {
                    spName: action.params['spName'],
                    redirectURL: action.params['redirectURL'],
                    loginToken: loginToken
                }, configuration.apiKey);
            }, configuration.apiKey);
        }
        proxy.processInitSSO = processInitSSO;
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="definitions.d.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        function processLogout(action, configuration) {
            // call socialize.logout that will handle the rest
            // get response from server
            // if necesary invalidate client session, and call logoutUrl
            // call every SP session that is needed
            // when it is finished, redirect to finalize endpoint
            var onLogoutResponse = function (response) {
                var singleSPTimeout = 4000; // 4s
                if (response.errorCode !== 0 /* OK */)
                    return proxy.utils.reportError({
                        errorCode: response.errorCode,
                        errorMessage: response.errorMessage,
                        response: response,
                        action: action,
                        configuration: configuration
                    }, action);
                if (response.samlContext) {
                    var callFinalize = function () { return proxy.utils.redirectToSamlEndPont('idp/slo/finalize', {
                        samlContext: response.samlContext
                    }, configuration.apiKey); };
                    var done = function () { return window.setTimeout(callFinalize, singleSPTimeout); };
                    if (configuration.logoutURL)
                        proxy.utils.openIframe(configuration.logoutURL, done, singleSPTimeout);
                    else
                        done();
                }
            };
            proxy.utils.logout(action.samlContext, function (response) {
                if (response.errorCode === 0 /* OK */ &&
                    response.originalResponse &&
                    response.originalResponse.errorCode === 403005 /* UNAUTHORIZED_USER */) {
                    // try logout again - this time without the login token
                    return proxy.utils.logout(action.samlContext, onLogoutResponse);
                }
                return onLogoutResponse(response);
            });
        }
        proxy.processLogout = processLogout;
        ;
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="definitions.d.ts" />
/// <reference path="bootstrap.ts" />
/// <reference path="login.ts" />
/// <reference path="logout.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        function processRequest(action, configuration) {
            action.mode = action.mode || proxy.ProxyMode.afterLogin;
            switch (action.mode) {
                // SSO - sp initiated login
                case proxy.ProxyMode.login:
                    proxy.processLogin(action, configuration);
                    break;
                case proxy.ProxyMode.forceLogin:
                    proxy.processForceLogin(action, configuration);
                    break;
                case proxy.ProxyMode.afterLogin:
                    proxy.processAfterLogin(action, configuration);
                    break;
                case proxy.ProxyMode.passiveLogin:
                    proxy.processPassiveLogin(action, configuration);
                    break;
                // SSO - idp initiated login
                case proxy.ProxyMode.initSSO:
                    proxy.processInitSSO(action, configuration);
                    break;
                // SLO - sp initiated logout
                case proxy.ProxyMode.logout:
                    proxy.processLogout(action, configuration);
                    break;
                default:
                    throw new Error('Unimplemented mode');
            }
        }
        proxy.processRequest = processRequest;
        proxy.bootstrap(processRequest);
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvZ2lneWEuc2FtbC5ib3NlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQWlILG1DQUFtQyxFQUFFO0FBQ3RKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRCxvREFBb0QsZ0NBQWdDO0FBQ3BGLCtDQUErQywyQkFBMkI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Qyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0RBQWtEO0FBQ3ZELENBQUMsOEJBQThCLEciLCJmaWxlIjoiZ2lneWEuc2FtbC5ib3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGVnYWN5L290aGVycy9naWd5YS5zYW1sLmJvc2UuanNcIik7XG4iLCJ2YXIgZ2lneWE7XHJcbihmdW5jdGlvbiAoZ2lneWEpIHtcclxuICAgIHZhciBib290O1xyXG4gICAgKGZ1bmN0aW9uIChib290KSB7XHJcbiAgICAgICAgYm9vdC5kZWJ1ZyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNvcGllZCBmcm9tIGdpZ3lhLnV0aWxzLkRPTS5nZXRHaWd5YVNjcmlwdEVsZW1lbnRcclxuICAgICAgICAgKiBAcGFyYW0gZmlsZU5hbWVzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0R2lneWFTY3JpcHRFbGVtZW50KGZpbGVOYW1lcykge1xyXG4gICAgICAgICAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBnaWd5YUNkblJlZ2V4ID0gL1xcL1xcL2NkbihzKT9cXC4ocnUxXFwuKT9naWd5YS5jb20vO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdCA9IHNjcmlwdHNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNyYyAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGdpZ3lhQ2RuUmVnZXgudGVzdChzcmMpIHx8IHNyYy5pbmRleE9mKCc/YXBpa2V5PScpID4gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0ZpbGVOYW1lRXhpc3RJblNyYyA9IGZpbGVOYW1lcy5sZW5ndGggPT09IDAgfHwgZmlsZU5hbWVzLnNvbWUoZnVuY3Rpb24gKGZpbGVOYW1lKSB7IHJldHVybiBzcmMuaW5kZXhPZihmaWxlTmFtZSkgPiAtMTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ZpbGVOYW1lRXhpc3RJblNyYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudCA9IHNjcmlwdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzY3JpcHRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBib290LmdldEdpZ3lhU2NyaXB0RWxlbWVudCA9IGdldEdpZ3lhU2NyaXB0RWxlbWVudDtcclxuICAgICAgICBmdW5jdGlvbiBlbnN1cmVKc1Nka0xvYWRlZChhcGlLZXksIGRvbmUsIGFzeW5jLCB1c2VFeGlzdGluZ0dpZ3lhRG9tYWluLCB1c2VYTUxIVFRQUmVxdWVzdCkge1xyXG4gICAgICAgICAgICBpZiAoYXN5bmMgPT09IHZvaWQgMCkgeyBhc3luYyA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKHVzZUV4aXN0aW5nR2lneWFEb21haW4gPT09IHZvaWQgMCkgeyB1c2VFeGlzdGluZ0dpZ3lhRG9tYWluID0gZmFsc2U7IH1cclxuICAgICAgICAgICAgaWYgKHVzZVhNTEhUVFBSZXF1ZXN0ID09PSB2b2lkIDApIHsgdXNlWE1MSFRUUFJlcXVlc3QgPSBmYWxzZTsgfVxyXG4gICAgICAgICAgICBpZiAoZ2lneWFbJ2lzR2lneWEnXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvb3QuZGVidWcpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnJEcgZ2lneWEtanNTZGsgYWxyZWFkeSBsb2FkZWQuJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdpZ3lhWydpc1JlYWR5J10pIHtcclxuICAgICAgICAgICAgICAgICAgICB3YWl0Rm9yR2lneWFTZXJ2aWNlUmVhZHkoZG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkR2lneWFKUyhhcGlLZXksIGFzeW5jLCB1c2VFeGlzdGluZ0dpZ3lhRG9tYWluLCB1c2VYTUxIVFRQUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB3YWl0Rm9yR2lneWFTZXJ2aWNlUmVhZHkoZG9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYm9vdC5lbnN1cmVKc1Nka0xvYWRlZCA9IGVuc3VyZUpzU2RrTG9hZGVkO1xyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRHaWd5YUpTKGFwaUtleSwgYXN5bmMsIHVzZUV4aXN0aW5nR2lneWFEb21haW4sIHVzZVhNTEhUVFBSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGdpZ3lhWydpc0dpZ3lhJ10gPSB0cnVlOyAvLy8gaW1wb3J0YW50ISBzbyB3b24ndCBkaXNjYXJkIGN1cnJlbnQgbW9kdWxlcy5cclxuICAgICAgICAgICAgdmFyIGlzU2VjdXJlUGFnZSA9IChsb2NhdGlvbi5wcm90b2NvbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2h0dHBzJykgPT0gMCk7XHJcbiAgICAgICAgICAgIHZhciBzZXJ2ZXI7XHJcbiAgICAgICAgICAgIGlmICh1c2VFeGlzdGluZ0dpZ3lhRG9tYWluKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgICAgIGEuaHJlZiA9IGdldEdpZ3lhU2NyaXB0RWxlbWVudChbXSkuc3JjO1xyXG4gICAgICAgICAgICAgICAgc2VydmVyID0gYS5wcm90b2NvbCArIFwiLy9cIiArIGEuaG9zdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlcnZlciA9IGlzU2VjdXJlUGFnZSA/IFwiaHR0cHM6Ly9jZG5zLmdpZ3lhLmNvbVwiIDogXCJodHRwOi8vY2RuLmdpZ3lhLmNvbVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzcmMgPSBzZXJ2ZXIgKyBcIi9qcy9naWd5YS5qcz9hcGlLZXk9XCIgKyBhcGlLZXkgKyBcIiZjaGljbz0xXCI7XHJcbiAgICAgICAgICAgIHZhciBzY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnOyAvLyBhcHBsaWNhdGlvbi9lY21hc2NyaXB0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUU4XHJcbiAgICAgICAgICAgIGlmICghdXNlWE1MSFRUUFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQuc3JjID0gc3JjO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5hc3luYyA9IGFzeW5jO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8vIE5vdGUgdGhhdCBjcm9zcy1kb21haW4gWE1MSHR0cFJlcXVlc3QgcmVxdWlyZXMgdGhlIHNlcnZlciB0byByZXR1cm4gdGhlIGhlYWRlcjogXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW46IDxvcmlnaW4+IHwgKlwiXHJcbiAgICAgICAgICAgICAgICB2YXIgeGhyT2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICB4aHJPYmoub3BlbignR0VUJywgc3JjLCBhc3luYyk7XHJcbiAgICAgICAgICAgICAgICB4aHJPYmouc2VuZCgnJyk7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50LnRleHQgPSB4aHJPYmoucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChib290LmRlYnVnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnJEcgbG9hZGluZyBnaWd5YS1qc1Nkay4uLicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yR2lneWFTZXJ2aWNlUmVhZHkoZG9uZSkge1xyXG4gICAgICAgICAgICAvLyBzZXQgc29jaWFsaXplLmpzIGxvYWQgaGFuZGxlclxyXG4gICAgICAgICAgICB2YXIgcHJldkhhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1snb25HaWd5YVNlcnZpY2VSZWFkeSddICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgcHJldkhhbmRsZXIgPSB3aW5kb3dbJ29uR2lneWFTZXJ2aWNlUmVhZHknXTtcclxuICAgICAgICAgICAgd2luZG93WydvbkdpZ3lhU2VydmljZVJlYWR5J10gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldkhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9vdC5kZWJ1ZylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCckRyBnaWd5YS1qc1NkayBsb2FkZWQhJyk7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGVuc3VyZUJhc2VQbHVnaW5Mb2FkZWQoYXBpS2V5LCBkb25lLCBhc3luYywgdXNlWE1MSFRUUFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgaWYgKGFzeW5jID09PSB2b2lkIDApIHsgYXN5bmMgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmICh1c2VYTUxIVFRQUmVxdWVzdCA9PT0gdm9pZCAwKSB7IHVzZVhNTEhUVFBSZXF1ZXN0ID0gZmFsc2U7IH1cclxuICAgICAgICAgICAgZW5zdXJlSnNTZGtMb2FkZWQoYXBpS2V5LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2lneWFbJ18nXVsncGx1Z2lucyddWydCYXNlUGx1Z2luJ10gJiYgIWdpZ3lhWydfJ11bJ3BsdWdpbnMnXVsnQmFzZVBsdWdpbiddWydpc01vY2snXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhWydfJ11bJ2xvYWRCYXNlUGx1Z2luJ10oeyBvbkxvYWQ6IGRvbmUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGFzeW5jLCB1c2VYTUxIVFRQUmVxdWVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvb3QuZW5zdXJlQmFzZVBsdWdpbkxvYWRlZCA9IGVuc3VyZUJhc2VQbHVnaW5Mb2FkZWQ7XHJcbiAgICB9KShib290ID0gZ2lneWEuYm9vdCB8fCAoZ2lneWEuYm9vdCA9IHt9KSk7XHJcbn0pKGdpZ3lhIHx8IChnaWd5YSA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJkZWZpbml0aW9ucy5kLnRzXCIgLz5cclxudmFyIGdpZ3lhU2FtbDtcclxuKGZ1bmN0aW9uIChnaWd5YVNhbWwpIHtcclxuICAgIHZhciBwcm94eTtcclxuICAgIChmdW5jdGlvbiAocHJveHkpIHtcclxuICAgICAgICB2YXIgdXRpbHM7XHJcbiAgICAgICAgKGZ1bmN0aW9uICh1dGlscykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiB1cmxQYXJhbXMocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChxdWVyeS5pbmRleE9mKCc/JykgPiAtMSlcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnN1YnN0cmluZyhxdWVyeS5pbmRleE9mKCc/JykgKyAxKTtcclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeVBhcnRzID0gcXVlcnkuc3BsaXQoLyYvKTtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7fTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlcnlQYXJ0cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IHF1ZXJ5UGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLmluZGV4T2YoJz0nKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbVBhcnRzID0gcGFyYW0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1QYXJ0cy5sZW5ndGggIT09IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1twYXJhbVBhcnRzWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJhbVBhcnRzWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXRpbHMudXJsUGFyYW1zID0gdXJsUGFyYW1zO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBvcGVuSWZyYW1lKHVybCwgZG9uZSwgdGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJDYWxsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBsb2FkSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZXJDYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlckNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2NyaXB0LnRyaWdnZXJSZXNvdXJjZSh1cmwsIGxvYWRIYW5kbGVyLCBnaWd5YS51dGlscy5zY3JpcHQuUmVzb3VyY2VUeXBlcy5pZnJhbWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobG9hZEhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV0aWxzLm9wZW5JZnJhbWUgPSBvcGVuSWZyYW1lO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnJvckluZm8sIGNvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gcmVkaXJlY3QgYW4gaW50ZXJuYWwgZW5kcG9pbnQgc28gdGhhdCB0aGUgc2VydmVyIHdpbGwgaGF2ZSBhIGNoYW5jZSB0byBkZWFsIHdpdGggZXJyb3JzIGluIGl0cyBmbG93IGNvcnJlY3RseVxyXG4gICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnNhbWxDb25maWcuZXJyb3JQYWdlVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLnJlZGlyZWN0KGdpZ3lhLnNhbWxDb25maWcuZXJyb3JQYWdlVVJMLCBjb250ZXh0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvckluZm9cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1dGlscy5yZXBvcnRFcnJvciA9IHJlcG9ydEVycm9yO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWRpcmVjdFRvU2FtbEVuZFBvbnQoZW5kUG9pbnQsIHBhcmFtcywgYXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZWRpcmVjdHMgdG8gYW4gaW50ZXJuYWwgc2FtbCBlbmRwb2ludCB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICB2YXIgZG9tYWluID0gZ2lneWEuXy5nZXRBcGlEb21haW4oJ2ZpZG0nKTtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBcImh0dHBzOi8vXCIgKyBkb21haW4gKyBcIi9zYW1sL3YyLjAvXCIgKyBhcGlLZXkgKyBcIi9cIiArIGVuZFBvaW50O1xyXG4gICAgICAgICAgICAgICAgdmFyIGdtaWRUaWNrZXQgPSBnaWd5YS5fLmFwaUFkYXB0ZXIuZ2V0R21pZFRpY2tldCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdtaWRUaWNrZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmdtaWRUaWNrZXQgPSBnbWlkVGlja2V0O1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3QodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiBhcGlLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kUG9pbnQ6IGVuZFBvaW50XHJcbiAgICAgICAgICAgICAgICB9LCBwYXJhbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV0aWxzLnJlZGlyZWN0VG9TYW1sRW5kUG9udCA9IHJlZGlyZWN0VG9TYW1sRW5kUG9udDtcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0VXJsUGFyYW1zKHVybCwgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMuVVJMLmFkZFBhcmFtc1RvVVJMKHVybCwgcGFyYW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1dGlscy5zZXRVcmxQYXJhbXMgPSBzZXRVcmxQYXJhbXM7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlZGlyZWN0KHVybCwgdXJsVmFsdWVzLCBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlZGlyZWN0IHRvIGFueSBnaXZlbiB1cmxcclxuICAgICAgICAgICAgICAgIHVybCA9IHRlbXBsYXRlRmlsbCh1cmwsIHVybFZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBzZXRVcmxQYXJhbXModXJsLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIC8vd2luZG93Lm9wZW4odXJsLCAnX3NlbGYnKTsgLy8gVGhpcyBicmVha3MgcG9zdE1lc3NhZ2UgbWVzc2FnaW5nIC0gcmVwbGFjZSB0aGUgd2luZG93Lm9wZW5lclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV0aWxzLnJlZGlyZWN0ID0gcmVkaXJlY3Q7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldExvZ2luVG9rZW4oYXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5zIGN1cnJlbnQgbG9naW4gdG9rZW4gZGlyZWN0bHkgZnJvbSB0aGUgd2ViIGFkYXB0ZXJcclxuICAgICAgICAgICAgICAgIHJldHVybiBnaWd5YS5fLmFwaUFkYXB0ZXJzLndlYi50b2tlblN0b3JlLmdldChhcGlLZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV0aWxzLmdldExvZ2luVG9rZW4gPSBnZXRMb2dpblRva2VuO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb250ZXh0S2V5KGFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdnaWdfc2FtbENvbnRleHRfJyArIGFwaUtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc2Vzc2lvblN0b3JhZ2VUaW1lb3V0ID0gMTAgKiA2MCAqIDEwMDA7IC8vIGFsbG93IHVzZXIgMTAgbWludXRlcyB0byBmaW5pc2ggdGhlIHNhbWwgbG9naW5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZUNvbnRleHQoYXBpS2V5LCBjb250ZXh0LCBkb25lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzYXZlIGNvbnRleHQgZm9yIG5leHQgcmV0cml2YWwsIGlmIG5vdCByZXR1cm5lZCBmcm9tIGxvZ2luVXJsXHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gY29udGV4dEtleShhcGlLZXkpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLmdldChrZXksIHNlc3Npb25TdG9yYWdlVGltZW91dCwgZnVuY3Rpb24gKHNhdmVkQ29udGV4dHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlZENvbnRleHRzID0gc2F2ZWRDb250ZXh0cyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlZENvbnRleHRzLnB1c2goY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLnNldChrZXksIHNhdmVkQ29udGV4dHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV0aWxzLnNhdmVDb250ZXh0ID0gc2F2ZUNvbnRleHQ7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxvYWRDb250ZXh0KGFwaUtleSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIC8vIGxvYWQgY29udGV4dCBpZiB3YXMgbm90IHByb3ZpZGVkIGluIHVybFxyXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGNvbnRleHRLZXkoYXBpS2V5KTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZS5nZXQoa2V5LCBzZXNzaW9uU3RvcmFnZVRpbWVvdXQsIGZ1bmN0aW9uIChzYXZlZENvbnRleHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZWRDb250ZXh0cyA9IHNhdmVkQ29udGV4dHMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RDb250ZXh0ID0gc2F2ZWRDb250ZXh0cy5wb3AoKSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUuc2V0KGtleSwgc2F2ZWRDb250ZXh0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobGFzdENvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXRpbHMubG9hZENvbnRleHQgPSBsb2FkQ29udGV4dDtcclxuICAgICAgICAgICAgZnVuY3Rpb24gdGVtcGxhdGVGaWxsKHRlbXBsYXRlLCBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgcGFyYW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1dGlscy50ZW1wbGF0ZUZpbGwgPSB0ZW1wbGF0ZUZpbGw7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlc2VyaWFsaXplSlNPTihqc29uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMuSlNPTi5kZXNlcmlhbGl6ZShqc29uLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXRpbHMuZGVzZXJpYWxpemVKU09OID0gZGVzZXJpYWxpemVKU09OO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBvYmplY3RNZXJnZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvYmplY3RzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdHNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBnaWd5YS51dGlscy5vYmplY3QubWVyZ2Uob2JqZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXRpbHMub2JqZWN0TWVyZ2UgPSBvYmplY3RNZXJnZTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gaXNMb2dnZWRJbihjYWxsYmFjaywgYXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlcktleSA9IGdldExvZ2luVG9rZW4oYXBpS2V5KTtcclxuICAgICAgICAgICAgICAgIHZhciBsb2dnZWRJbiA9IEJvb2xlYW4odXNlcktleSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2dnZWRJbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXRpbHMuaXNMb2dnZWRJbiA9IGlzTG9nZ2VkSW47XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxvZ291dChzYW1sQ29udGV4dCwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5sb2dvdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgICBzYW1sQ29udGV4dDogc2FtbENvbnRleHRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZ291dCA9IGxvZ291dDtcclxuICAgICAgICB9KSh1dGlscyA9IHByb3h5LnV0aWxzIHx8IChwcm94eS51dGlscyA9IHt9KSk7XHJcbiAgICB9KShwcm94eSA9IGdpZ3lhU2FtbC5wcm94eSB8fCAoZ2lneWFTYW1sLnByb3h5ID0ge30pKTtcclxufSkoZ2lneWFTYW1sIHx8IChnaWd5YVNhbWwgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwidXRpbHMudHNcIiAvPlxyXG52YXIgZ2lneWFTYW1sO1xyXG4oZnVuY3Rpb24gKGdpZ3lhU2FtbCkge1xyXG4gICAgdmFyIHByb3h5O1xyXG4gICAgKGZ1bmN0aW9uIChwcm94eSkge1xyXG4gICAgICAgIHZhciBQcm94eU1vZGU7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChQcm94eU1vZGUpIHtcclxuICAgICAgICAgICAgUHJveHlNb2RlW1Byb3h5TW9kZVtcIl91bmRlZmluZWRcIl0gPSAwXSA9IFwiX3VuZGVmaW5lZFwiO1xyXG4gICAgICAgICAgICAvLyBTU09cclxuICAgICAgICAgICAgUHJveHlNb2RlW1Byb3h5TW9kZVtcImxvZ2luXCJdID0gMV0gPSBcImxvZ2luXCI7XHJcbiAgICAgICAgICAgIFByb3h5TW9kZVtQcm94eU1vZGVbXCJmb3JjZUxvZ2luXCJdID0gMl0gPSBcImZvcmNlTG9naW5cIjtcclxuICAgICAgICAgICAgUHJveHlNb2RlW1Byb3h5TW9kZVtcInBhc3NpdmVMb2dpblwiXSA9IDNdID0gXCJwYXNzaXZlTG9naW5cIjtcclxuICAgICAgICAgICAgUHJveHlNb2RlW1Byb3h5TW9kZVtcImFmdGVyTG9naW5cIl0gPSA0XSA9IFwiYWZ0ZXJMb2dpblwiO1xyXG4gICAgICAgICAgICBQcm94eU1vZGVbUHJveHlNb2RlW1wiaW5pdFNTT1wiXSA9IDVdID0gXCJpbml0U1NPXCI7XHJcbiAgICAgICAgICAgIC8vIFNMT1xyXG4gICAgICAgICAgICBQcm94eU1vZGVbUHJveHlNb2RlW1wibG9nb3V0XCJdID0gNl0gPSBcImxvZ291dFwiO1xyXG4gICAgICAgICAgICAvLyBpbnRlcm5hbFxyXG4gICAgICAgICAgICBQcm94eU1vZGVbUHJveHlNb2RlW1wiX2RlYnVnXCJdID0gN10gPSBcIl9kZWJ1Z1wiO1xyXG4gICAgICAgIH0pKFByb3h5TW9kZSA9IHByb3h5LlByb3h5TW9kZSB8fCAocHJveHkuUHJveHlNb2RlID0ge30pKTtcclxuICAgICAgICBmdW5jdGlvbiBwYXJzZVVybChxdWVyeSkge1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gcHJveHkudXRpbHMudXJsUGFyYW1zKHF1ZXJ5KTtcclxuICAgICAgICAgICAgdmFyIG1vZGUgPSBQcm94eU1vZGVbcGFyYW1zWydtb2RlJ11dO1xyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHZhciBzYW1sQ29udGV4dCA9IHBhcmFtc1snc2FtbENvbnRleHQnXTtcclxuICAgICAgICAgICAgdmFyIHNwTmFtZSA9IHBhcmFtc1snc3BOYW1lJ107XHJcbiAgICAgICAgICAgIC8vIF9hZnRlckxvZ2luIGNhbiBjb21lIHdpdGhvdXQgc2FtbENvbnRleHQgb3IgbW9kZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZSxcclxuICAgICAgICAgICAgICAgIHNhbWxDb250ZXh0OiBzYW1sQ29udGV4dCxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgc3BOYW1lOiBzcE5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJveHkucGFyc2VVcmwgPSBwYXJzZVVybDtcclxuICAgIH0pKHByb3h5ID0gZ2lneWFTYW1sLnByb3h5IHx8IChnaWd5YVNhbWwucHJveHkgPSB7fSkpO1xyXG59KShnaWd5YVNhbWwgfHwgKGdpZ3lhU2FtbCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJkZWZpbml0aW9ucy5kLnRzXCIgLz5cclxudmFyIGdpZ3lhU2FtbDtcclxuKGZ1bmN0aW9uIChnaWd5YVNhbWwpIHtcclxuICAgIHZhciBwcm94eTtcclxuICAgIChmdW5jdGlvbiAocHJveHkpIHtcclxuICAgICAgICBmdW5jdGlvbiBmaW5kU2NyaXB0RWxlbWVudCgpIHtcclxuICAgICAgICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIHZhciBzY3JpcHRFbGVtZW50O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdCA9IHNjcmlwdHNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNyYyAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoc3JjLmluZGV4T2YoJy8vY2RuXFxkKi5naWd5YS5jb20nKSA+IC0xIHx8IHNyYy5pbmRleE9mKCcvL2NkbnNcXGQqLmdpZ3lhLmNvbScpID4gLTEgfHwgc3JjLmluZGV4T2YoJz9hcGlrZXk9JykgPiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKHNyYy5pbmRleE9mKCdnaWd5YS5zYW1sLmpzJykgPiAtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudCA9IHNjcmlwdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzY3JpcHRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBmaW5kQ29uZmlndXJhdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gZmluZCBzY3JpcHQgZWxlbWVudFxyXG4gICAgICAgICAgICB2YXIgc2NyaXB0RWxlbWVudCA9IGZpbmRTY3JpcHRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmICghc2NyaXB0RWxlbWVudClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIGZpbmQgc2NyaXB0IGVsZW1lbnQnKTtcclxuICAgICAgICAgICAgdmFyIGFwaUtleSA9IHByb3h5LnV0aWxzLnVybFBhcmFtcyhzY3JpcHRFbGVtZW50LnNyYylbJ2FwaUtleSddO1xyXG4gICAgICAgICAgICB2YXIgY29uZmlnSnNvbiA9IHNjcmlwdEVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcclxuICAgICAgICAgICAgaWYgKCFjb25maWdKc29uKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBvYmplY3QgcGFyYW1zIHdhcyBmb3VuZC4nKTtcclxuICAgICAgICAgICAgaWYgKCFhcGlLZXkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBmaW5kIGFwaSBrZXknKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFwaUtleTogYXBpS2V5LFxyXG4gICAgICAgICAgICAgICAgY29uZmlnSnNvbjogY29uZmlnSnNvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm94eS5maW5kQ29uZmlndXJhdGlvbiA9IGZpbmRDb25maWd1cmF0aW9uO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlQ29uZmlndXJhdGlvbih1bnBhcnNlZENvbmZpZykge1xyXG4gICAgICAgICAgICB2YXIgc2NyaXB0Q29uZiA9IHByb3h5LnV0aWxzLmRlc2VyaWFsaXplSlNPTih1bnBhcnNlZENvbmZpZy5jb25maWdKc29uKTtcclxuICAgICAgICAgICAgaWYgKCFzY3JpcHRDb25mKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcGFyYW1zIG9iamVjdCBpcyBub3QgdmFsaWQuJyk7XHJcbiAgICAgICAgICAgIHZhciBjb25maWd1cmF0aW9uT2JqID0gcHJveHkudXRpbHMub2JqZWN0TWVyZ2Uoe1xyXG4gICAgICAgICAgICAgICAgYXBpS2V5OiB1bnBhcnNlZENvbmZpZy5hcGlLZXlcclxuICAgICAgICAgICAgfSwgc2NyaXB0Q29uZik7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlndXJhdGlvbk9iai5sb2dpblVSTClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnbG9naW5VUkwnIHBhcmFtIGlzIG5vdCB2YWxpZC5cIik7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlndXJhdGlvbk9iai5sb2dvdXRVUkwpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ2xvZ291dFVSTCcgcGFyYW0gaXMgbm90IHZhbGlkLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25PYmo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3h5LnBhcnNlQ29uZmlndXJhdGlvbiA9IHBhcnNlQ29uZmlndXJhdGlvbjtcclxuICAgIH0pKHByb3h5ID0gZ2lneWFTYW1sLnByb3h5IHx8IChnaWd5YVNhbWwucHJveHkgPSB7fSkpO1xyXG59KShnaWd5YVNhbWwgfHwgKGdpZ3lhU2FtbCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi91dGlscy9HaWd5YS5Kcy5Cb290L2FwcC9ib290LnRzXCIgLz5cclxuLy8qKiBUaGlzIGlzIGludGVudGlvbmFsISB3ZSB3YW50IHRvIHBhY2thZ2UgZ2lneWEuYm9vdCB3aXRoaW4gdGhlIGdpZ3lhU2FtbC5wcm94eSAuICoqXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJkZWZpbml0aW9ucy5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInBhcnNlVXJsLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvbmZpZ3VyYXRpb24udHNcIiAvPlxyXG52YXIgZ2lneWFTYW1sO1xyXG4oZnVuY3Rpb24gKGdpZ3lhU2FtbCkge1xyXG4gICAgdmFyIHByb3h5O1xyXG4gICAgKGZ1bmN0aW9uIChwcm94eSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGJvb3RzdHJhcChkb25lKSB7XHJcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBwcm94eS5wYXJzZVVybChsb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgICAgICB2YXIgdW5wYXJzZWRDb25maWcgPSBwcm94eS5maW5kQ29uZmlndXJhdGlvbigpO1xyXG4gICAgICAgICAgICBnaWd5YS5ib290LmVuc3VyZUpzU2RrTG9hZGVkKHVucGFyc2VkQ29uZmlnLmFwaUtleSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ3VyYXRpb24gPSBwcm94eS5wYXJzZUNvbmZpZ3VyYXRpb24odW5wYXJzZWRDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlTG9nb3V0QmVoYXZpb3VyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2lneWEucGFydG5lclNldHRpbmdzLnNzb0tleSAmJiBkb2N1bWVudC5jb29raWUuaW5kZXhPZignaGFzU1NPVG9rZW4nKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSAnaGFzU1NPVG9rZW49dHJ1ZTsnO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNldFNTT1Rva2VuKHsgcmVkaXJlY3RVUkw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKGFjdGlvbiwgY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRydWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm94eS5ib290c3RyYXAgPSBib290c3RyYXA7XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZUxvZ291dEJlaGF2aW91cigpIHtcclxuICAgICAgICAgICAgLy8gY2hhbmdlIHNvY2lhbGl6ZUxvZ291dCBub3QgdG8gbG9nb3V0IGJlZm9yZSB0aGUgc2VydmVyIHJlc3BvbnNlLCBhbmQgdG8gYWx3YXlzIGdvIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgICAgZ2lneWEuXy5sb2dvdXRCZWhhdmlvdXIubG9nb3V0QmVmb3JlU2VydmVyUmVzcG9uc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgZ2lneWEuXy5sb2dvdXRCZWhhdmlvdXIuYWx3YXlzU2VuZExvZ291dFRvU2VydmVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KShwcm94eSA9IGdpZ3lhU2FtbC5wcm94eSB8fCAoZ2lneWFTYW1sLnByb3h5ID0ge30pKTtcclxufSkoZ2lneWFTYW1sIHx8IChnaWd5YVNhbWwgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZGVmaW5pdGlvbnMuZC50c1wiIC8+XHJcbnZhciBnaWd5YVNhbWw7XHJcbihmdW5jdGlvbiAoZ2lneWFTYW1sKSB7XHJcbiAgICB2YXIgcHJveHk7XHJcbiAgICAoZnVuY3Rpb24gKHByb3h5KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc0xvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgICAgICBwcm94eS51dGlscy5pc0xvZ2dlZEluKGZ1bmN0aW9uIChsb2dnZWRJbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvZ2dlZEluKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3h5LnV0aWxzLnJlZGlyZWN0VG9TYW1sRW5kUG9udCgnaWRwL3Nzby9jb250aW51ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FtbENvbnRleHQ6IGFjdGlvbi5zYW1sQ29udGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5Ub2tlbjogcHJveHkudXRpbHMuZ2V0TG9naW5Ub2tlbihjb25maWd1cmF0aW9uLmFwaUtleSlcclxuICAgICAgICAgICAgICAgICAgICB9LCBjb25maWd1cmF0aW9uLmFwaUtleSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0ZvcmNlTG9naW4oYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcclxuICAgICAgICAgICAgfSwgY29uZmlndXJhdGlvbi5hcGlLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm94eS5wcm9jZXNzTG9naW4gPSBwcm9jZXNzTG9naW47XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NGb3JjZUxvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgICAgICAvLyBzYXZlIHNhbWxDb250ZXh0IHRvIHJldHJpZXZlIGl0IGlmIG5lY2VzYXJ5XHJcbiAgICAgICAgICAgIHByb3h5LnV0aWxzLnNhdmVDb250ZXh0KGNvbmZpZ3VyYXRpb24uYXBpS2V5LCBhY3Rpb24sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIFBhcmFtZXRlcnMgdG8gbG9naW5VUkwgbWlnaHQgYmUgc3VwcG9ydGVkIGluIHRoZSBmdXR1cmVcclxuICAgICAgICAgICAgICAgIC8vdmFyIGJhY2tUbyA9IHV0aWxzLnNldFVybFBhcmFtcyhsb2NhdGlvbi50b1N0cmluZygpLCB7IG1vZGU6IFByb3h5TW9kZVtQcm94eU1vZGUuX2FmdGVyTG9naW5dIH0pO1xyXG4gICAgICAgICAgICAgICAgcHJveHkudXRpbHMucmVkaXJlY3QoY29uZmlndXJhdGlvbi5sb2dpblVSTCwgYWN0aW9uLCB7fSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm94eS5wcm9jZXNzRm9yY2VMb2dpbiA9IHByb2Nlc3NGb3JjZUxvZ2luO1xyXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NBZnRlckxvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgICAgICBwcm94eS51dGlscy5sb2FkQ29udGV4dChjb25maWd1cmF0aW9uLmFwaUtleSwgZnVuY3Rpb24gKHNhdmVkQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnNhbWxDb250ZXh0ID0gYWN0aW9uLnNhbWxDb250ZXh0IHx8IHNhdmVkQ29udGV4dC5zYW1sQ29udGV4dDtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5zcE5hbWUgPSBhY3Rpb24uc3BOYW1lIHx8IHNhdmVkQ29udGV4dC5zcE5hbWU7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzUGFzc2l2ZUxvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm94eS5wcm9jZXNzQWZ0ZXJMb2dpbiA9IHByb2Nlc3NBZnRlckxvZ2luO1xyXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NQYXNzaXZlTG9naW4oYWN0aW9uLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHByb3h5LnV0aWxzLmlzTG9nZ2VkSW4oZnVuY3Rpb24gKGxvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9naW5Ub2tlbiA9IChsb2dnZWRJbiA/IHByb3h5LnV0aWxzLmdldExvZ2luVG9rZW4oY29uZmlndXJhdGlvbi5hcGlLZXkpIDogbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBwcm94eS51dGlscy5yZWRpcmVjdFRvU2FtbEVuZFBvbnQoJ2lkcC9zc28vY29udGludWUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FtbENvbnRleHQ6IGFjdGlvbi5zYW1sQ29udGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBsb2dpblRva2VuOiBsb2dpblRva2VuXHJcbiAgICAgICAgICAgICAgICB9LCBjb25maWd1cmF0aW9uLmFwaUtleSk7XHJcbiAgICAgICAgICAgIH0sIGNvbmZpZ3VyYXRpb24uYXBpS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJveHkucHJvY2Vzc1Bhc3NpdmVMb2dpbiA9IHByb2Nlc3NQYXNzaXZlTG9naW47XHJcbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc0luaXRTU08oYWN0aW9uLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHByb3h5LnV0aWxzLmlzTG9nZ2VkSW4oZnVuY3Rpb24gKGxvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9naW5Ub2tlbiA9IChsb2dnZWRJbiA/IHByb3h5LnV0aWxzLmdldExvZ2luVG9rZW4oY29uZmlndXJhdGlvbi5hcGlLZXkpIDogbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBwcm94eS51dGlscy5yZWRpcmVjdFRvU2FtbEVuZFBvbnQoJ2lkcC9zc28vaW5pdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBzcE5hbWU6IGFjdGlvbi5wYXJhbXNbJ3NwTmFtZSddLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VVJMOiBhY3Rpb24ucGFyYW1zWydyZWRpcmVjdFVSTCddLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luVG9rZW46IGxvZ2luVG9rZW5cclxuICAgICAgICAgICAgICAgIH0sIGNvbmZpZ3VyYXRpb24uYXBpS2V5KTtcclxuICAgICAgICAgICAgfSwgY29uZmlndXJhdGlvbi5hcGlLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm94eS5wcm9jZXNzSW5pdFNTTyA9IHByb2Nlc3NJbml0U1NPO1xyXG4gICAgfSkocHJveHkgPSBnaWd5YVNhbWwucHJveHkgfHwgKGdpZ3lhU2FtbC5wcm94eSA9IHt9KSk7XHJcbn0pKGdpZ3lhU2FtbCB8fCAoZ2lneWFTYW1sID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImRlZmluaXRpb25zLmQudHNcIiAvPlxyXG52YXIgZ2lneWFTYW1sO1xyXG4oZnVuY3Rpb24gKGdpZ3lhU2FtbCkge1xyXG4gICAgdmFyIHByb3h5O1xyXG4gICAgKGZ1bmN0aW9uIChwcm94eSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NMb2dvdXQoYWN0aW9uLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIGNhbGwgc29jaWFsaXplLmxvZ291dCB0aGF0IHdpbGwgaGFuZGxlIHRoZSByZXN0XHJcbiAgICAgICAgICAgIC8vIGdldCByZXNwb25zZSBmcm9tIHNlcnZlclxyXG4gICAgICAgICAgICAvLyBpZiBuZWNlc2FyeSBpbnZhbGlkYXRlIGNsaWVudCBzZXNzaW9uLCBhbmQgY2FsbCBsb2dvdXRVcmxcclxuICAgICAgICAgICAgLy8gY2FsbCBldmVyeSBTUCBzZXNzaW9uIHRoYXQgaXMgbmVlZGVkXHJcbiAgICAgICAgICAgIC8vIHdoZW4gaXQgaXMgZmluaXNoZWQsIHJlZGlyZWN0IHRvIGZpbmFsaXplIGVuZHBvaW50XHJcbiAgICAgICAgICAgIHZhciBvbkxvZ291dFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2luZ2xlU1BUaW1lb3V0ID0gNDAwMDsgLy8gNHNcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvckNvZGUgIT09IDAgLyogT0sgKi8pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5LnV0aWxzLnJlcG9ydEVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiByZXNwb25zZS5lcnJvckNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVzcG9uc2UuZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zYW1sQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsRmluYWxpemUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBwcm94eS51dGlscy5yZWRpcmVjdFRvU2FtbEVuZFBvbnQoJ2lkcC9zbG8vZmluYWxpemUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbWxDb250ZXh0OiByZXNwb25zZS5zYW1sQ29udGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGNvbmZpZ3VyYXRpb24uYXBpS2V5KTsgfTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxGaW5hbGl6ZSwgc2luZ2xlU1BUaW1lb3V0KTsgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbi5sb2dvdXRVUkwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5LnV0aWxzLm9wZW5JZnJhbWUoY29uZmlndXJhdGlvbi5sb2dvdXRVUkwsIGRvbmUsIHNpbmdsZVNQVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHByb3h5LnV0aWxzLmxvZ291dChhY3Rpb24uc2FtbENvbnRleHQsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yQ29kZSA9PT0gMCAvKiBPSyAqLyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLm9yaWdpbmFsUmVzcG9uc2UgJiZcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5vcmlnaW5hbFJlc3BvbnNlLmVycm9yQ29kZSA9PT0gNDAzMDA1IC8qIFVOQVVUSE9SSVpFRF9VU0VSICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IGxvZ291dCBhZ2FpbiAtIHRoaXMgdGltZSB3aXRob3V0IHRoZSBsb2dpbiB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm94eS51dGlscy5sb2dvdXQoYWN0aW9uLnNhbWxDb250ZXh0LCBvbkxvZ291dFJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvbkxvZ291dFJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3h5LnByb2Nlc3NMb2dvdXQgPSBwcm9jZXNzTG9nb3V0O1xyXG4gICAgICAgIDtcclxuICAgIH0pKHByb3h5ID0gZ2lneWFTYW1sLnByb3h5IHx8IChnaWd5YVNhbWwucHJveHkgPSB7fSkpO1xyXG59KShnaWd5YVNhbWwgfHwgKGdpZ3lhU2FtbCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJkZWZpbml0aW9ucy5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImJvb3RzdHJhcC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJsb2dpbi50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJsb2dvdXQudHNcIiAvPlxyXG52YXIgZ2lneWFTYW1sO1xyXG4oZnVuY3Rpb24gKGdpZ3lhU2FtbCkge1xyXG4gICAgdmFyIHByb3h5O1xyXG4gICAgKGZ1bmN0aW9uIChwcm94eSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NSZXF1ZXN0KGFjdGlvbiwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgICAgICBhY3Rpb24ubW9kZSA9IGFjdGlvbi5tb2RlIHx8IHByb3h5LlByb3h5TW9kZS5hZnRlckxvZ2luO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi5tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTU08gLSBzcCBpbml0aWF0ZWQgbG9naW5cclxuICAgICAgICAgICAgICAgIGNhc2UgcHJveHkuUHJveHlNb2RlLmxvZ2luOlxyXG4gICAgICAgICAgICAgICAgICAgIHByb3h5LnByb2Nlc3NMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBwcm94eS5Qcm94eU1vZGUuZm9yY2VMb2dpbjpcclxuICAgICAgICAgICAgICAgICAgICBwcm94eS5wcm9jZXNzRm9yY2VMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBwcm94eS5Qcm94eU1vZGUuYWZ0ZXJMb2dpbjpcclxuICAgICAgICAgICAgICAgICAgICBwcm94eS5wcm9jZXNzQWZ0ZXJMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBwcm94eS5Qcm94eU1vZGUucGFzc2l2ZUxvZ2luOlxyXG4gICAgICAgICAgICAgICAgICAgIHByb3h5LnByb2Nlc3NQYXNzaXZlTG9naW4oYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIFNTTyAtIGlkcCBpbml0aWF0ZWQgbG9naW5cclxuICAgICAgICAgICAgICAgIGNhc2UgcHJveHkuUHJveHlNb2RlLmluaXRTU086XHJcbiAgICAgICAgICAgICAgICAgICAgcHJveHkucHJvY2Vzc0luaXRTU08oYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIFNMTyAtIHNwIGluaXRpYXRlZCBsb2dvdXRcclxuICAgICAgICAgICAgICAgIGNhc2UgcHJveHkuUHJveHlNb2RlLmxvZ291dDpcclxuICAgICAgICAgICAgICAgICAgICBwcm94eS5wcm9jZXNzTG9nb3V0KGFjdGlvbiwgY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBtb2RlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJveHkucHJvY2Vzc1JlcXVlc3QgPSBwcm9jZXNzUmVxdWVzdDtcclxuICAgICAgICBwcm94eS5ib290c3RyYXAocHJvY2Vzc1JlcXVlc3QpO1xyXG4gICAgfSkocHJveHkgPSBnaWd5YVNhbWwucHJveHkgfHwgKGdpZ3lhU2FtbC5wcm94eSA9IHt9KSk7XHJcbn0pKGdpZ3lhU2FtbCB8fCAoZ2lneWFTYW1sID0ge30pKTsiXSwic291cmNlUm9vdCI6IiJ9