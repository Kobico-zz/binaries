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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/fidm/Gigya.Js.SamlProxy/app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/Gigya.Js/app/GSErrors.ts":
/*!*******************************************!*\
  !*** ./src/core/Gigya.Js/app/GSErrors.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var GSErrors;
(function (GSErrors) {
    GSErrors[GSErrors["OK"] = 0] = "OK";
    GSErrors[GSErrors["Data_Pending"] = 100001] = "Data_Pending";
    GSErrors[GSErrors["NETWORK_ERROR"] = 500026] = "NETWORK_ERROR";
    GSErrors[GSErrors["DATA_PENDING"] = 100001] = "DATA_PENDING";
    GSErrors[GSErrors["OPERATION_CANCELED"] = 200001] = "OPERATION_CANCELED";
    GSErrors[GSErrors["PERMISSION_GRANTED"] = 200002] = "PERMISSION_GRANTED";
    GSErrors[GSErrors["PERMISSION_NOT_GRANTED"] = 200003] = "PERMISSION_NOT_GRANTED";
    GSErrors[GSErrors["REDIRECT"] = 200004] = "REDIRECT";
    GSErrors[GSErrors["NEW_USER"] = 200005] = "NEW_USER";
    GSErrors[GSErrors["OPERATION_DONE"] = 200006] = "OPERATION_DONE";
    GSErrors[GSErrors["UPDATE_USER"] = 200007] = "UPDATE_USER";
    GSErrors[GSErrors["OK_WITH_ERRORS"] = 200008] = "OK_WITH_ERRORS";
    GSErrors[GSErrors["ACCOUNTS_LINKED"] = 200009] = "ACCOUNTS_LINKED";
    GSErrors[GSErrors["OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS"] = 200010] = "OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["ACCOUNT_PENDING_REGISTRATION"] = 206001] = "ACCOUNT_PENDING_REGISTRATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_VERIFICATION"] = 206002] = "ACCOUNT_PENDING_VERIFICATION";
    GSErrors[GSErrors["ACCOUNT_MISSING_LOGINID"] = 206003] = "ACCOUNT_MISSING_LOGINID";
    GSErrors[GSErrors["IDENTITY_ALREADY_ASSIGNED"] = 206004] = "IDENTITY_ALREADY_ASSIGNED";
    GSErrors[GSErrors["AFTER_EMAIL_VERIFICATION"] = 206005] = "AFTER_EMAIL_VERIFICATION";
    GSErrors[GSErrors["PENDING_CODE_VERIFICATION"] = 206006] = "PENDING_CODE_VERIFICATION";
    GSErrors[GSErrors["CLIENT_LOG"] = 300001] = "CLIENT_LOG";
    GSErrors[GSErrors["INVALID_DATA_CENTER"] = 301001] = "INVALID_DATA_CENTER";
    GSErrors[GSErrors["INVALID_REQUEST_FORMAT"] = 400001] = "INVALID_REQUEST_FORMAT";
    GSErrors[GSErrors["MISSING_REQUIRED_PARAMETER"] = 400002] = "MISSING_REQUIRED_PARAMETER";
    GSErrors[GSErrors["UNIQUE_IDENTIFIER_EXISTS"] = 400003] = "UNIQUE_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["INVALID_PARAMETER_FORMAT"] = 400004] = "INVALID_PARAMETER_FORMAT";
    GSErrors[GSErrors["INVALID_PARAMETER_VALUE"] = 400006] = "INVALID_PARAMETER_VALUE";
    GSErrors[GSErrors["DUPLICATE_VALUE"] = 400007] = "DUPLICATE_VALUE";
    GSErrors[GSErrors["INVALID_AUTHENTICATION_HEADER"] = 400008] = "INVALID_AUTHENTICATION_HEADER";
    GSErrors[GSErrors["VALIDATION_ERROR"] = 400009] = "VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_REDIRECT_URI"] = 400011] = "INVALID_REDIRECT_URI";
    GSErrors[GSErrors["INVALID_RESPONSE_TYPE"] = 400012] = "INVALID_RESPONSE_TYPE";
    GSErrors[GSErrors["UNSUPPORTED_GRANT_TYPE"] = 400013] = "UNSUPPORTED_GRANT_TYPE";
    GSErrors[GSErrors["INVALID_GRANT"] = 400014] = "INVALID_GRANT";
    GSErrors[GSErrors["CODE_EXPIRED"] = 400015] = "CODE_EXPIRED";
    GSErrors[GSErrors["SCHEMA_VALIDATION_FAILED"] = 400020] = "SCHEMA_VALIDATION_FAILED";
    GSErrors[GSErrors["CAPTCHA_VERIFICATION_FAILED"] = 400021] = "CAPTCHA_VERIFICATION_FAILED";
    GSErrors[GSErrors["UNIQUE_INDEX_VALIDATION_ERROR"] = 400022] = "UNIQUE_INDEX_VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_TYPE_VALIDATION_ERROR"] = 400023] = "INVALID_TYPE_VALIDATION_ERROR";
    GSErrors[GSErrors["DYNAMIC_FIELDS_VALIDATION_ERROR"] = 400024] = "DYNAMIC_FIELDS_VALIDATION_ERROR";
    GSErrors[GSErrors["WRITE_ACCESS_VALIDATION_ERROR"] = 400025] = "WRITE_ACCESS_VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_FORMAT_VALIDATION_ERROR"] = 400026] = "INVALID_FORMAT_VALIDATION_ERROR";
    GSErrors[GSErrors["REQUIRED_VALUE_VALIDATION_ERROR"] = 400027] = "REQUIRED_VALUE_VALIDATION_ERROR";
    GSErrors[GSErrors["EMAIL_NOT_VERIFIED"] = 400028] = "EMAIL_NOT_VERIFIED";
    GSErrors[GSErrors["SCHEMA_CONFLICT_ERROR"] = 400029] = "SCHEMA_CONFLICT_ERROR";
    GSErrors[GSErrors["OPERATION_NOT_ALLOWED"] = 400030] = "OPERATION_NOT_ALLOWED";
    GSErrors[GSErrors["SECURITY_VERIFICATION_FAILED"] = 400050] = "SECURITY_VERIFICATION_FAILED";
    GSErrors[GSErrors["INVALID_APIKEY_PARAMETER"] = 400093] = "INVALID_APIKEY_PARAMETER";
    GSErrors[GSErrors["NOT_SUPPORTED"] = 400096] = "NOT_SUPPORTED";
    GSErrors[GSErrors["UNSUPPORTED_USER_AGENT"] = 400097] = "UNSUPPORTED_USER_AGENT";
    GSErrors[GSErrors["NO_PROVIDERS"] = 400100] = "NO_PROVIDERS";
    GSErrors[GSErrors["POPUP_BLOCKED"] = 400101] = "POPUP_BLOCKED";
    GSErrors[GSErrors["INVALID_EVENT_HANDLER"] = 400102] = "INVALID_EVENT_HANDLER";
    GSErrors[GSErrors["INVALID_CONTAINERID"] = 400103] = "INVALID_CONTAINERID";
    GSErrors[GSErrors["NOT_CONNECTED"] = 400106] = "NOT_CONNECTED";
    GSErrors[GSErrors["INVALID_SITE_DOMAIN"] = 400120] = "INVALID_SITE_DOMAIN";
    GSErrors[GSErrors["PROVIDER_CONFIGURATION_ERROR"] = 400122] = "PROVIDER_CONFIGURATION_ERROR";
    GSErrors[GSErrors["LIMIT_REACHED"] = 400124] = "LIMIT_REACHED";
    GSErrors[GSErrors["FREQUENCY_LIMIT_REACHED"] = 400125] = "FREQUENCY_LIMIT_REACHED";
    GSErrors[GSErrors["INVALID_ACTION"] = 400126] = "INVALID_ACTION";
    GSErrors[GSErrors["INSUFFICIENT_POINTS_TO_REDEEM"] = 400127] = "INSUFFICIENT_POINTS_TO_REDEEM";
    GSErrors[GSErrors["SIGNATURE_TIMESTAMP_EXPIRED"] = 400128] = "SIGNATURE_TIMESTAMP_EXPIRED";
    GSErrors[GSErrors["INVALID_POLICY_CONFIGURATION"] = 401000] = "INVALID_POLICY_CONFIGURATION";
    GSErrors[GSErrors["SUSPECTED_SPAM"] = 401010] = "SUSPECTED_SPAM";
    GSErrors[GSErrors["LOGIN_FAILED_CAPTCHA_REQUIRED"] = 401020] = "LOGIN_FAILED_CAPTCHA_REQUIRED";
    GSErrors[GSErrors["LOGIN_FAILED_WRONG_CAPTCHA"] = 401021] = "LOGIN_FAILED_WRONG_CAPTCHA";
    GSErrors[GSErrors["OLD_PASSWORD_USED"] = 401030] = "OLD_PASSWORD_USED";
    GSErrors[GSErrors["FORBIDDEN"] = 403000] = "FORBIDDEN";
    GSErrors[GSErrors["INVALID_SESSION_TOKEN"] = 403001] = "INVALID_SESSION_TOKEN";
    GSErrors[GSErrors["REQUEST_HAS_EXPIRED"] = 403002] = "REQUEST_HAS_EXPIRED";
    GSErrors[GSErrors["INVALID_REQUEST_SIGNATURE"] = 403003] = "INVALID_REQUEST_SIGNATURE";
    GSErrors[GSErrors["DUPLICATE_NONCE"] = 403004] = "DUPLICATE_NONCE";
    GSErrors[GSErrors["UNAUTHORIZED_USER"] = 403005] = "UNAUTHORIZED_USER";
    GSErrors[GSErrors["SENSITIVE_DATA_SENT_OVER_HTTP"] = 403006] = "SENSITIVE_DATA_SENT_OVER_HTTP";
    GSErrors[GSErrors["PERMISSION_DENIED"] = 403007] = "PERMISSION_DENIED";
    GSErrors[GSErrors["INVALID_OPENID_URL"] = 403008] = "INVALID_OPENID_URL";
    GSErrors[GSErrors["PROVIDER_SESSION_EXPIRED"] = 403009] = "PROVIDER_SESSION_EXPIRED";
    GSErrors[GSErrors["INVALID_SECRET"] = 403010] = "INVALID_SECRET";
    GSErrors[GSErrors["SESSION_HAS_EXPIRED"] = 403011] = "SESSION_HAS_EXPIRED";
    GSErrors[GSErrors["NO_VALID_SESSION"] = 403012] = "NO_VALID_SESSION";
    GSErrors[GSErrors["UNVERIFIED_USER"] = 403013] = "UNVERIFIED_USER";
    GSErrors[GSErrors["MISSING_REQUEST_REFERRER"] = 403015] = "MISSING_REQUEST_REFERRER";
    GSErrors[GSErrors["UNEXPECTED_PROVIDER_USER"] = 403017] = "UNEXPECTED_PROVIDER_USER";
    GSErrors[GSErrors["PERMISSION_NOT_REQUESTED"] = 403022] = "PERMISSION_NOT_REQUESTED";
    GSErrors[GSErrors["NO_USER_PERMISSION"] = 403023] = "NO_USER_PERMISSION";
    GSErrors[GSErrors["PROVIDER_LIMIT_REACHED"] = 403024] = "PROVIDER_LIMIT_REACHED";
    GSErrors[GSErrors["INVALID_TOKEN"] = 403025] = "INVALID_TOKEN";
    GSErrors[GSErrors["UNAUTHORIZED_ACCESS_ERROR"] = 403026] = "UNAUTHORIZED_ACCESS_ERROR";
    GSErrors[GSErrors["DIFFERENT_USER_FOR_REAUTH"] = 403027] = "DIFFERENT_USER_FOR_REAUTH";
    GSErrors[GSErrors["SESSION_EXPIRED_RETRY"] = 403030] = "SESSION_EXPIRED_RETRY";
    GSErrors[GSErrors["APPROVED_BY_MODERATOR"] = 403031] = "APPROVED_BY_MODERATOR";
    GSErrors[GSErrors["TOKEN_HAS_RENEWED"] = 403032] = "TOKEN_HAS_RENEWED";
    GSErrors[GSErrors["NO_USER_COOKIE"] = 403035] = "NO_USER_COOKIE";
    GSErrors[GSErrors["UNAUTHORIZED_PARTNER"] = 403036] = "UNAUTHORIZED_PARTNER";
    GSErrors[GSErrors["POST_DENIED"] = 403037] = "POST_DENIED";
    GSErrors[GSErrors["NO_LOGIN_TICKET"] = 403040] = "NO_LOGIN_TICKET";
    GSErrors[GSErrors["ACCOUNT_DISABLED"] = 403041] = "ACCOUNT_DISABLED";
    GSErrors[GSErrors["INVALID_LOGINID"] = 403042] = "INVALID_LOGINID";
    GSErrors[GSErrors["LOGIN_IDENTIFIER_EXISTS"] = 403043] = "LOGIN_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["UNDERAGE_USER"] = 403044] = "UNDERAGE_USER";
    GSErrors[GSErrors["INVALID_SITE_CONFIGURATION_ERROR"] = 403045] = "INVALID_SITE_CONFIGURATION_ERROR";
    GSErrors[GSErrors["LOGINID_DOES_NOT_EXIST"] = 403047] = "LOGINID_DOES_NOT_EXIST";
    GSErrors[GSErrors["API_RATE_LIMIT_EXCEEDED"] = 403048] = "API_RATE_LIMIT_EXCEEDED";
    GSErrors[GSErrors["PENDING_PASSWORD_CHANGE"] = 403100] = "PENDING_PASSWORD_CHANGE";
    GSErrors[GSErrors["ACCOUNT_PENDING_TFA_VERIFICATION"] = 403101] = "ACCOUNT_PENDING_TFA_VERIFICATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_TFA_REGISTRATION"] = 403102] = "ACCOUNT_PENDING_TFA_REGISTRATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_RECENT_LOGIN"] = 403110] = "ACCOUNT_PENDING_RECENT_LOGIN";
    GSErrors[GSErrors["ACCOUNT_TEMPORARILY_LOCKED_OUT"] = 403120] = "ACCOUNT_TEMPORARILY_LOCKED_OUT";
    GSErrors[GSErrors["REDUNDANT_OPERATION"] = 403200] = "REDUNDANT_OPERATION";
    GSErrors[GSErrors["INVALID_APPLICATION_ID"] = 403201] = "INVALID_APPLICATION_ID";
    GSErrors[GSErrors["NOT_FOUND"] = 404000] = "NOT_FOUND";
    GSErrors[GSErrors["FRIEND_NOT_FOUND"] = 404001] = "FRIEND_NOT_FOUND";
    GSErrors[GSErrors["CATEGORY_NOT_FOUND"] = 404002] = "CATEGORY_NOT_FOUND";
    GSErrors[GSErrors["UID_NOT_FOUND"] = 404003] = "UID_NOT_FOUND";
    GSErrors[GSErrors["RESOURCE_NOT_FOUND"] = 404004] = "RESOURCE_NOT_FOUND";
    GSErrors[GSErrors["INVALID_API_METHOD"] = 405001] = "INVALID_API_METHOD";
    GSErrors[GSErrors["IDENTITY_EXISTS"] = 409001] = "IDENTITY_EXISTS";
    GSErrors[GSErrors["GONE"] = 410000] = "GONE";
    GSErrors[GSErrors["REQUEST_ENTITY_TOO_LARGE"] = 413001] = "REQUEST_ENTITY_TOO_LARGE";
    GSErrors[GSErrors["COMMENT_TEXT_TOO_LARGE"] = 413002] = "COMMENT_TEXT_TOO_LARGE";
    GSErrors[GSErrors["OBJECT_TOO_LARGE"] = 413003] = "OBJECT_TOO_LARGE";
    GSErrors[GSErrors["PROFILE_PHOTO_TOO_LARGE"] = 413004] = "PROFILE_PHOTO_TOO_LARGE";
    GSErrors[GSErrors["REQUEST_URI_TOO_LONG"] = 414000] = "REQUEST_URI_TOO_LONG";
    GSErrors[GSErrors["MISSING_USER_PHOTO"] = 409010] = "MISSING_USER_PHOTO";
    GSErrors[GSErrors["COUNTER_NOT_REGISTERED"] = 409011] = "COUNTER_NOT_REGISTERED";
    GSErrors[GSErrors["INVALID_GMID_TICKET"] = 409012] = "INVALID_GMID_TICKET";
    GSErrors[GSErrors["SAML_MAPPED_ATTRIBUTE_NOT_FOUND"] = 409013] = "SAML_MAPPED_ATTRIBUTE_NOT_FOUND";
    GSErrors[GSErrors["SAML_CERTIFICATE_NOT_FOUND"] = 409014] = "SAML_CERTIFICATE_NOT_FOUND";
    GSErrors[GSErrors["SAML_MESSAGE_NOT_FOUND"] = 409015] = "SAML_MESSAGE_NOT_FOUND";
    GSErrors[GSErrors["GENERAL_SERVER_ERROR"] = 500001] = "GENERAL_SERVER_ERROR";
    GSErrors[GSErrors["SERVER_LOGIN_ERROR"] = 500002] = "SERVER_LOGIN_ERROR";
    GSErrors[GSErrors["DEFAULT_APPLICATION_CONFIGURATION_ERROR"] = 500003] = "DEFAULT_APPLICATION_CONFIGURATION_ERROR";
    GSErrors[GSErrors["SESSION_MIGRATION_ERROR"] = 500014] = "SESSION_MIGRATION_ERROR";
    GSErrors[GSErrors["PROVIDER_ERROR"] = 500023] = "PROVIDER_ERROR";
    GSErrors[GSErrors["DATABASE_ERROR"] = 500028] = "DATABASE_ERROR";
    GSErrors[GSErrors["USERNAME_REQUIRED"] = 500029] = "USERNAME_REQUIRED";
    GSErrors[GSErrors["NO_PROVIDER_APPLICATION"] = 500031] = "NO_PROVIDER_APPLICATION";
    GSErrors[GSErrors["LOAD_FAILED"] = 500032] = "LOAD_FAILED";
    GSErrors[GSErrors["INVALID_ENVIRONMENT_CONFIG"] = 500033] = "INVALID_ENVIRONMENT_CONFIG";
    GSErrors[GSErrors["ERROR_DURING_BACKEND_OPERATION"] = 500034] = "ERROR_DURING_BACKEND_OPERATION";
    GSErrors[GSErrors["TIMEOUT"] = 504001] = "TIMEOUT";
    GSErrors[GSErrors["CLIENTTIMEOUT"] = 504002] = "CLIENTTIMEOUT";
    GSErrors[GSErrors["INVALID_URL"] = 404004] = "INVALID_URL";
    GSErrors[GSErrors["MEDIA_ITEMS_NOT_SUPPORTED"] = 401001] = "MEDIA_ITEMS_NOT_SUPPORTED";
    GSErrors[GSErrors["MISSING_ERROR_CODE"] = 599999] = "MISSING_ERROR_CODE";
})(GSErrors = exports.GSErrors || (exports.GSErrors = {}));
var GSErrorDetails;
(function (GSErrorDetails) {
    GSErrorDetails[GSErrorDetails["None"] = 0] = "None";
    GSErrorDetails[GSErrorDetails["Same_password"] = 100001] = "Same_password";
    GSErrorDetails[GSErrorDetails["Invalid_password"] = 100002] = "Invalid_password";
    GSErrorDetails[GSErrorDetails["Invalid_counters_query_with_cursor"] = 100003] = "Invalid_counters_query_with_cursor";
})(GSErrorDetails = exports.GSErrorDetails || (exports.GSErrorDetails = {}));


/***/ }),

/***/ "./src/fidm/Gigya.Js.SamlProxy/app/bootstrap.ts":
/*!******************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/bootstrap.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var parseUrl_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/parseUrl */ "./src/fidm/Gigya.Js.SamlProxy/app/parseUrl.ts");
var configuration_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/configuration */ "./src/fidm/Gigya.Js.SamlProxy/app/configuration.ts");
var boot_1 = __webpack_require__(/*! src/utils/Gigya.Js.Boot/app/boot */ "./src/utils/Gigya.Js.Boot/app/boot.ts");
//** This is intentional! we want to package gigya.boot within the gigyaSaml.proxy . **
function bootstrap(done) {
    var action = parseUrl_1.parseUrl(location.search);
    var unparsedConfig = configuration_1.findConfiguration();
    boot_1.ensureJsSdkLoaded(unparsedConfig.apiKey, function () {
        var configuration = configuration_1.parseConfiguration(unparsedConfig);
        changeLogoutBehaviour();
        done(action, configuration);
    }, true, true);
}
exports.bootstrap = bootstrap;
function changeLogoutBehaviour() {
    // change socializeLogout not to logout before the server response, and to always go to the server
    window.gigya._.logoutBehaviour.logoutBeforeServerResponse = false;
    window.gigya._.logoutBehaviour.alwaysSendLogoutToServer = true;
}


/***/ }),

/***/ "./src/fidm/Gigya.Js.SamlProxy/app/configuration.ts":
/*!**********************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/configuration.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/utils */ "./src/fidm/Gigya.Js.SamlProxy/app/utils.ts");
function findScriptElement() {
    var scripts = document.getElementsByTagName('script');
    var scriptElement;
    for (var i = scripts.length - 1; i >= 0; i--) {
        var script = scripts[i];
        var src = script.src.toLowerCase();
        if (src != '') {
            if ((src.indexOf('//cdnd*.gigya.com') > -1 || src.indexOf('//cdnsd*.gigya.com') > -1 || src.indexOf('?apikey=') > -1) &&
                src.indexOf('gigya.saml.js') > -1) {
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
    var apiKey = utils_1.urlParams(scriptElement.src)['apiKey'];
    var configJson = scriptElement.innerHTML.replace(/^\s+|\s+$/g, '');
    if (!configJson)
        throw new Error('No object params was found.');
    if (!apiKey)
        throw new Error('failed to find api key');
    return {
        apiKey: apiKey,
        configJson: configJson,
    };
}
exports.findConfiguration = findConfiguration;
function parseConfiguration(unparsedConfig) {
    var scriptConf = utils_1.deserializeJSON(unparsedConfig.configJson);
    if (!scriptConf)
        throw new Error('The params object is not valid.');
    var configurationObj = utils_1.objectMerge({
        apiKey: unparsedConfig.apiKey,
    }, scriptConf);
    if (!configurationObj.loginURL)
        throw new Error("The 'loginURL' param is not valid.");
    if (!configurationObj.logoutURL)
        throw new Error("The 'logoutURL' param is not valid.");
    return configurationObj;
}
exports.parseConfiguration = parseConfiguration;


/***/ }),

/***/ "./src/fidm/Gigya.Js.SamlProxy/app/index.ts":
/*!**************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var bootstrap_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/bootstrap */ "./src/fidm/Gigya.Js.SamlProxy/app/bootstrap.ts");
var configuration_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/configuration */ "./src/fidm/Gigya.Js.SamlProxy/app/configuration.ts");
var login_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/login */ "./src/fidm/Gigya.Js.SamlProxy/app/login.ts");
var logout_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/logout */ "./src/fidm/Gigya.Js.SamlProxy/app/logout.ts");
var parseUrl_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/parseUrl */ "./src/fidm/Gigya.Js.SamlProxy/app/parseUrl.ts");
var samlProxy_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/samlProxy */ "./src/fidm/Gigya.Js.SamlProxy/app/samlProxy.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/fidm/Gigya.Js.SamlProxy/app/utils.ts");
if (!window['gigya']) {
    window['gigya'] = {};
}
if (!window['gigyaSaml']) {
    window['gigyaSaml'] = {};
}
var gigyaSaml = window['gigyaSaml'];
if (!gigyaSaml.proxy) {
    gigyaSaml.proxy = {
        bootstrap: bootstrap_1.bootstrap,
        findConfiguration: configuration_1.findConfiguration,
        parseConfiguration: configuration_1.parseConfiguration,
        processLogin: login_1.processLogin,
        processForceLogin: login_1.processForceLogin,
        processAfterLogin: login_1.processAfterLogin,
        processPassiveLogin: login_1.processPassiveLogin,
        processInitSSO: login_1.processInitSSO,
        processLogout: logout_1.processLogout,
        ProxyMode: parseUrl_1.ProxyMode,
        parseUrl: parseUrl_1.parseUrl,
        processRequest: samlProxy_1.processRequest
    };
}
if (!gigyaSaml.proxy.utils) {
    gigyaSaml.proxy.utils = {
        urlParams: utils_1.urlParams,
        openIframe: utils_1.openIframe,
        reportError: utils_1.reportError,
        redirectToSamlEndPont: utils_1.redirectToSamlEndPont,
        setUrlParams: utils_1.setUrlParams,
        getLoginToken: utils_1.getLoginToken,
        saveContext: utils_1.saveContext,
        loadContext: utils_1.loadContext,
        templateFill: utils_1.templateFill,
        deserializeJSON: utils_1.deserializeJSON,
        objectMerge: utils_1.objectMerge,
        isLoggedIn: utils_1.isLoggedIn,
        logout: utils_1.logout
    };
}
gigyaSaml.proxy.bootstrap(samlProxy_1.processRequest);


/***/ }),

/***/ "./src/fidm/Gigya.Js.SamlProxy/app/login.ts":
/*!**************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/login.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/utils */ "./src/fidm/Gigya.Js.SamlProxy/app/utils.ts");
function processLogin(action, configuration) {
    utils_1.isLoggedIn(function (loggedIn) {
        if (loggedIn)
            utils_1.redirectToSamlEndPont('idp/sso/continue', {
                samlContext: action.samlContext,
                loginToken: utils_1.getLoginToken(configuration.apiKey),
            }, configuration.apiKey);
        // not logged in
        else
            processForceLogin(action, configuration);
    }, configuration.apiKey);
}
exports.processLogin = processLogin;
function processForceLogin(action, configuration) {
    // save samlContext to retrieve it if necesary
    utils_1.saveContext(configuration.apiKey, action, function () {
        // Parameters to loginURL might be supported in the future
        //var backTo = utils.setUrlParams(location.toString(), { mode: ProxyMode[ProxyMode._afterLogin] });
        utils_1.redirect(configuration.loginURL, action, {
            samlContext: action.samlContext,
        });
    });
}
exports.processForceLogin = processForceLogin;
function processAfterLogin(action, configuration) {
    utils_1.loadContext(configuration.apiKey, function (savedContext) {
        action.samlContext = action.samlContext || savedContext.samlContext;
        action.spName = action.spName || savedContext.spName;
        processPassiveLogin(action, configuration);
    });
}
exports.processAfterLogin = processAfterLogin;
function processPassiveLogin(action, configuration) {
    utils_1.isLoggedIn(function (loggedIn) {
        var loginToken = loggedIn ? utils_1.getLoginToken(configuration.apiKey) : null;
        utils_1.redirectToSamlEndPont('idp/sso/continue', {
            samlContext: action.samlContext,
            loginToken: loginToken,
        }, configuration.apiKey);
    }, configuration.apiKey);
}
exports.processPassiveLogin = processPassiveLogin;
function processInitSSO(action, configuration) {
    utils_1.isLoggedIn(function (loggedIn) {
        var loginToken = loggedIn ? utils_1.getLoginToken(configuration.apiKey) : null;
        utils_1.redirectToSamlEndPont('idp/sso/init', {
            spName: action.params['spName'],
            redirectURL: action.params['redirectURL'],
            loginToken: loginToken,
        }, configuration.apiKey);
    }, configuration.apiKey);
}
exports.processInitSSO = processInitSSO;


/***/ }),

/***/ "./src/fidm/Gigya.Js.SamlProxy/app/logout.ts":
/*!***************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/logout.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/utils */ "./src/fidm/Gigya.Js.SamlProxy/app/utils.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
function processLogout(action, configuration) {
    // call socialize.logout that will handle the rest
    // get response from server
    // if necesary invalidate client session, and call logoutUrl
    // call every SP session that is needed
    // when it is finished, redirect to finalize endpoint
    var onLogoutResponse = function (response) {
        var singleSPTimeout = 4000; // 4s
        if (response.errorCode !== GSErrors_1.GSErrors.OK)
            return utils_1.reportError({
                errorCode: response.errorCode,
                errorMessage: response.errorMessage,
                response: response,
                action: action,
                configuration: configuration,
            }, action);
        if (response.samlContext) {
            var callFinalize = function () {
                return utils_1.redirectToSamlEndPont('idp/slo/finalize', {
                    samlContext: response.samlContext,
                }, configuration.apiKey);
            };
            var done = function () { return window.setTimeout(callFinalize, singleSPTimeout); };
            if (configuration.logoutURL)
                utils_1.openIframe(configuration.logoutURL, done, singleSPTimeout);
            else
                done();
        }
    };
    utils_1.logout(action.samlContext, function (response) {
        if (response.errorCode === GSErrors_1.GSErrors.OK && response.originalResponse && response.originalResponse.errorCode === GSErrors_1.GSErrors.UNAUTHORIZED_USER) {
            // try logout again - this time without the login token
            return utils_1.logout(action.samlContext, onLogoutResponse);
        }
        return onLogoutResponse(response);
    });
}
exports.processLogout = processLogout;


/***/ }),

/***/ "./src/fidm/Gigya.Js.SamlProxy/app/parseUrl.ts":
/*!*****************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/parseUrl.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/utils */ "./src/fidm/Gigya.Js.SamlProxy/app/utils.ts");
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
})(ProxyMode = exports.ProxyMode || (exports.ProxyMode = {}));
function parseUrl(query) {
    var params = utils_1.urlParams(query);
    var mode = ProxyMode[params['mode']];
    var samlContext = params['samlContext'];
    var spName = params['spName'];
    // _afterLogin can come without samlContext or mode
    return {
        mode: mode,
        samlContext: samlContext,
        params: params,
        spName: spName,
    };
}
exports.parseUrl = parseUrl;


/***/ }),

/***/ "./src/fidm/Gigya.Js.SamlProxy/app/samlProxy.ts":
/*!******************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/samlProxy.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var parseUrl_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/parseUrl */ "./src/fidm/Gigya.Js.SamlProxy/app/parseUrl.ts");
var login_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/login */ "./src/fidm/Gigya.Js.SamlProxy/app/login.ts");
var logout_1 = __webpack_require__(/*! src/fidm/Gigya.Js.SamlProxy/app/logout */ "./src/fidm/Gigya.Js.SamlProxy/app/logout.ts");
function processRequest(action, configuration) {
    action.mode = action.mode || parseUrl_1.ProxyMode.afterLogin;
    switch (action.mode) {
        // SSO - sp initiated login
        case parseUrl_1.ProxyMode.login:
            login_1.processLogin(action, configuration);
            break;
        case parseUrl_1.ProxyMode.forceLogin:
            login_1.processForceLogin(action, configuration);
            break;
        case parseUrl_1.ProxyMode.afterLogin: // handling responses from loginUrl after login performed
            login_1.processAfterLogin(action, configuration);
            break;
        case parseUrl_1.ProxyMode.passiveLogin:
            login_1.processPassiveLogin(action, configuration);
            break;
        // SSO - idp initiated login
        case parseUrl_1.ProxyMode.initSSO: // idp initiated login
            login_1.processInitSSO(action, configuration);
            break;
        // SLO - sp initiated logout
        case parseUrl_1.ProxyMode.logout:
            logout_1.processLogout(action, configuration);
            break;
        default:
            throw new Error('Unimplemented mode');
    }
}
exports.processRequest = processRequest;


/***/ }),

/***/ "./src/fidm/Gigya.Js.SamlProxy/app/utils.ts":
/*!**************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/utils.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.urlParams = urlParams;
function openIframe(url, done, timeout) {
    var handlerCalled = false;
    var loadHandler = function () {
        if (!handlerCalled) {
            handlerCalled = true;
            done();
        }
    };
    window.gigya.utils.script.triggerResource(url, loadHandler, window.gigya.utils.script.ResourceTypes.iframe, false);
    if (timeout)
        setTimeout(loadHandler, timeout);
}
exports.openIframe = openIframe;
function reportError(errorInfo, context) {
    // TODO redirect an internal endpoint so that the server will have a chance to deal with errors in its flow correctly
    if (window.gigya.samlConfig.errorPageURL) {
        return redirect(window.gigya.samlConfig.errorPageURL, context, {
            error: errorInfo,
        });
    }
}
exports.reportError = reportError;
function redirectToSamlEndPont(endPoint, params, apiKey) {
    // redirects to an internal saml endpoint with the given parameters
    var domain = window.gigya._.getApiDomain('fidm');
    var url = "https://" + domain + "/saml/v2.0/" + apiKey + "/" + endPoint;
    var gmidTicket = window.gigya._.apiAdapter.getGmidTicket();
    if (gmidTicket)
        params.gmidTicket = gmidTicket;
    redirect(url, {
        domain: domain,
        apiKey: apiKey,
        endPoint: endPoint,
    }, params);
}
exports.redirectToSamlEndPont = redirectToSamlEndPont;
function setUrlParams(url, params) {
    return window.gigya.utils.URL.addParamsToURL(url, params);
}
exports.setUrlParams = setUrlParams;
function redirect(url, urlValues, params) {
    // redirect to any given url
    url = templateFill(url, urlValues);
    url = setUrlParams(url, params);
    location.href = url;
    //window.open(url, '_self'); // This breaks postMessage messaging - replace the window.opener
}
exports.redirect = redirect;
function getLoginToken(apiKey) {
    // returns current login token directly from the web adapter
    return window.gigya._.apiAdapters.web.tokenStore.get(apiKey);
}
exports.getLoginToken = getLoginToken;
function contextKey(apiKey) {
    return 'gig_samlContext_' + apiKey;
}
var sessionStorageTimeout = 10 * 60 * 1000;
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
exports.saveContext = saveContext;
function loadContext(apiKey, callback) {
    // load context if was not provided in url
    var key = contextKey(apiKey);
    window.gigya.utils.sessionCache.get(key, sessionStorageTimeout, function (savedContexts) {
        savedContexts = savedContexts || [];
        var lastContext = savedContexts.shift() || {};
        window.gigya.utils.sessionCache.set(key, savedContexts);
        callback(lastContext);
    });
}
exports.loadContext = loadContext;
function templateFill(template, params) {
    return window.gigya.utils.templates.fill(template, params);
}
exports.templateFill = templateFill;
function deserializeJSON(json) {
    return window.gigya.utils.JSON.deserialize(json, '');
}
exports.deserializeJSON = deserializeJSON;
function objectMerge() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return window.gigya.utils.object.merge(objects);
}
exports.objectMerge = objectMerge;
function isLoggedIn(callback, apiKey) {
    var userKey = getLoginToken(apiKey);
    var loggedIn = Boolean(userKey);
    callback(loggedIn);
}
exports.isLoggedIn = isLoggedIn;
function logout(samlContext, callback) {
    window.gigya.socialize.logout({
        callback: callback,
        samlContext: samlContext,
    });
}
exports.logout = logout;


/***/ }),

/***/ "./src/utils/Gigya.Js.Boot/app/boot.ts":
/*!*********************************************!*\
  !*** ./src/utils/Gigya.Js.Boot/app/boot.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = false;
function getGigyaScriptElement(fileNames) {
    var scripts = document.getElementsByTagName('script');
    var scriptElement;
    var gigyaCdnRegex = /\/\/cdn(s)?\.(ru1\.)?gigya.com/;
    for (var i = scripts.length - 1; i >= 0; i--) {
        var script = scripts[i];
        var src = script.src.toLowerCase();
        if (src !== '') {
            if (gigyaCdnRegex.test(src) || src.indexOf('?apikey=') > -1) {
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
exports.getGigyaScriptElement = getGigyaScriptElement;
function ensureJsSdkLoaded(apiKey, done, async, useExistingGigyaDomain, useXMLHTTPRequest, useRelativePath) {
    if (async === void 0) { async = true; }
    if (useExistingGigyaDomain === void 0) { useExistingGigyaDomain = false; }
    if (useXMLHTTPRequest === void 0) { useXMLHTTPRequest = false; }
    if (useRelativePath === void 0) { useRelativePath = false; }
    if (window.gigya['isGigya']) {
        // we have gigya on page
        if (exports.debug)
            console.debug('$G gigya-jsSdk already loaded.');
        if (!window.gigya['isReady']) {
            // bootstrap in process - wait for bootstrap to finish
            waitForGigyaServiceReady(done);
        }
        else {
            // finished bootstrap - gigya service is ready
            done();
        }
    }
    else {
        // gigya is not on page
        loadGigyaJS(apiKey, async, useExistingGigyaDomain, useXMLHTTPRequest, useRelativePath);
        waitForGigyaServiceReady(done);
    }
}
exports.ensureJsSdkLoaded = ensureJsSdkLoaded;
function loadGigyaJS(apiKey, async, useExistingGigyaDomain, useXMLHTTPRequest, useRelativePath) {
    window.gigya['isGigya'] = true; /// important! so won't discard current modules.
    var server;
    if (useExistingGigyaDomain) {
        var a = document.createElement('a');
        a.href = getGigyaScriptElement([]).src;
        server = a.protocol + '//' + a.host;
    }
    else {
        server = 'https://cdns.gigya.com';
    }
    var src = (useRelativePath ? '' : server) + "/js/gigya.js?apiKey=" + apiKey;
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
    if (exports.debug)
        console.debug('$G loading gigya-jsSdk...');
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
}
function waitForGigyaServiceReady(done) {
    // set socialize.js load handler
    var prevHandler = null;
    if (typeof window['onGigyaServiceReady'] !== 'undefined')
        prevHandler = window['onGigyaServiceReady'];
    window['onGigyaServiceReady'] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (prevHandler)
            prevHandler.apply(this, args);
        if (exports.debug)
            console.debug('$G gigya-jsSdk loaded!');
        done();
    };
}
function ensureBasePluginLoaded(apiKey, done, async, useXMLHTTPRequest) {
    if (async === void 0) { async = true; }
    if (useXMLHTTPRequest === void 0) { useXMLHTTPRequest = false; }
    ensureJsSdkLoaded(apiKey, function () {
        if (window.gigya['_']['plugins']['BasePlugin'] && !window.gigya['_']['plugins']['BasePlugin']['isMock']) {
            done();
        }
        else {
            window.gigya['_']['loadBasePlugin']({ onLoad: done });
        }
    }, async, useXMLHTTPRequest);
}
exports.ensureBasePluginLoaded = ensureBasePluginLoaded;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvYm9vdHN0cmFwLnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvY29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvbG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9sb2dvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9wYXJzZVVybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL3NhbWxQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9HaWd5YS5Kcy5Cb290L2FwcC9ib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFD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Q25ELElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELFNBQWdCLHNCQUFzQixDQUFDLE1BQWMsRUFBRSxJQUFnQixFQUFFLEtBQXFCLEVBQUUsaUJBQWtDO0lBQXpELG9DQUFxQjtJQUFFLDZEQUFrQztJQUM5SCxpQkFBaUIsQ0FDYixNQUFNLEVBQ047UUFDSSxJQUFJLFlBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2RixJQUFJLEVBQUUsQ0FBQztTQUNWO2FBQU07WUFDSCxZQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQyxFQUNELEtBQUssRUFDTCxpQkFBaUIsQ0FDcEIsQ0FBQztBQUNOLENBQUM7QUFiRCx3REFhQyIsImZpbGUiOiJnaWd5YS5zYW1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IGVudW0gR1NFcnJvcnMge1xyXG4gICAgT0sgPSAwLFxyXG4gICAgRGF0YV9QZW5kaW5nID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxyXG4gICAgTkVUV09SS19FUlJPUiA9IDUwMDAyNixcclxuICAgIERBVEFfUEVORElORyA9IDEwMDAwMSwgLy8gRGF0YSBpcyBzdGlsbCBiZWluZyBwcm9jZXNzZWQsIHF1ZXJ5IGFnYWluIGZvciB0aGUgcmVzcG9uc2VcclxuICAgIE9QRVJBVElPTl9DQU5DRUxFRCA9IDIwMDAwMSwgLy8gdXNlciBjYW5jZWxlZCwgaW4gbG9naW4gcHJvY2Vzc1xyXG4gICAgUEVSTUlTU0lPTl9HUkFOVEVEID0gMjAwMDAyLCAvLyBJbm5lciBjb2RlXHJcbiAgICBQRVJNSVNTSU9OX05PVF9HUkFOVEVEID0gMjAwMDAzLCAvLyBJbm5lciBjb2RlXHJcbiAgICBSRURJUkVDVCA9IDIwMDAwNCwgLy8gSW5uZXIgY29kZVxyXG4gICAgTkVXX1VTRVIgPSAyMDAwMDUsIC8vIElubmVyIGNvZGVcclxuICAgIE9QRVJBVElPTl9ET05FID0gMjAwMDA2LCAvLyBJbm5lciBjb2RlXHJcbiAgICBVUERBVEVfVVNFUiA9IDIwMDAwNywgLy8gSW5uZXIgY29kZVxyXG4gICAgT0tfV0lUSF9FUlJPUlMgPSAyMDAwMDgsIC8vIEZvciByZXBvcnRzIC0gd2hlbiB3ZSByZXR1cm4gb2sgdG8gY2xpZW50IGJ1dCBoYWQgYWNjZXB0YWJsZSBlcnJvcnMgKHRoYXQgd2Ugd2FudCB0byBrbm93IGFib3V0KSBvbiB0aGUgd2F5XHJcbiAgICBBQ0NPVU5UU19MSU5LRUQgPSAyMDAwMDksIC8vIEFmdGVyIGxpbmtpZ24gYWNjb3V0bnMgdmlhIGxvZ2luLCByZXR1cm4gdGhpcyBlcnJvciBjb2RlXHJcbiAgICBPS19XSVRIX0VSUk9SX0xPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gMjAwMDEwLCAvLyBGb3Igc2V0QWNjb3VudEluZm8gdXNpbmcgdGhlIGNvbmZsaWN0SGFuZGxpbmcgcGFyYW0gLSBwcm9maWxlIHdhcyBzYXZlZCwgYnV0IHRoZSBlbWFpbCBjb25mbGljdHMgd2l0aCBhbm90aGVyIHVzZXJcclxuICAgIEFDQ09VTlRfUEVORElOR19SRUdJU1RSQVRJT04gPSAyMDYwMDEsIC8vIEZvciBhY2NvdW50cyBBUEksXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVkVSSUZJQ0FUSU9OID0gMjA2MDAyLCAvLyBGb3IgYWNjb3VudHMgQVBJOyBjb25zaWRlciBtb3ZpbmcgdG8gNDAzeHh4IHNlY3Rpb24gaW4gdGhlIGZ1dHVyZS5cclxuICAgIEFDQ09VTlRfTUlTU0lOR19MT0dJTklEID0gMjA2MDAzLCAvLyBGb3IgYWNjb3VudHMgQVBJXHJcbiAgICBJREVOVElUWV9BTFJFQURZX0FTU0lHTkVEID0gMjA2MDA0LCAvLyBGb3IgaW1wb3J0IGFjY291bnRzIEFQSVxyXG4gICAgQUZURVJfRU1BSUxfVkVSSUZJQ0FUSU9OID0gMjA2MDA1LFxyXG4gICAgUEVORElOR19DT0RFX1ZFUklGSUNBVElPTiA9IDIwNjAwNixcclxuICAgIENMSUVOVF9MT0cgPSAzMDAwMDEsIC8vIGludGVybmFsLCBmb3IgcmVwb3J0aW5nIGVyb3JycyBpbiBjbGllbnQgU0RLU1xyXG4gICAgSU5WQUxJRF9EQVRBX0NFTlRFUiA9IDMwMTAwMSwgLy8gXCJJbnZhbGlkIGRhdGEtY2VudGVyXCIuIHdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJUaGlzIEFQSSBrZXkgaXMgc2VydmVkIGJ5IGFub3RoZXIgZGF0YSBjZW50ZXJcIi5cclxuICAgIElOVkFMSURfUkVRVUVTVF9GT1JNQVQgPSA0MDAwMDEsIC8vIGNvdWxkIGJlIGFsbCBraW5kIG9mIGVycm9ycyB3aXRoIHdyb25nIHJlcXVlc3QgKG5vbiBzZWN1cmUgd2hlbiBzaG91bGQgYmUgc2VjdXJlLCB3cm9uZyBhdXRoZW50aWNhdGlvbiBoZWFkZXIpXHJcbiAgICBNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUiA9IDQwMDAwMixcclxuICAgIFVOSVFVRV9JREVOVElGSUVSX0VYSVNUUyA9IDQwMDAwMyxcclxuICAgIElOVkFMSURfUEFSQU1FVEVSX0ZPUk1BVCA9IDQwMDAwNCxcclxuICAgIElOVkFMSURfUEFSQU1FVEVSX1ZBTFVFID0gNDAwMDA2LFxyXG4gICAgRFVQTElDQVRFX1ZBTFVFID0gNDAwMDA3LFxyXG4gICAgSU5WQUxJRF9BVVRIRU5USUNBVElPTl9IRUFERVIgPSA0MDAwMDgsIC8vIE9BdXRoMlxyXG4gICAgVkFMSURBVElPTl9FUlJPUiA9IDQwMDAwOSwgLy8gSW4gYWNjb3VudHMucmVnaXN0ZXIsIHdoZW5ldmVyIHRoZXJlIGlzIGEgdmFsaWRhdGlvbiBlcnJvclxyXG4gICAgSU5WQUxJRF9SRURJUkVDVF9VUkkgPSA0MDAwMTEsIC8vIE9BdXRoMlxyXG4gICAgSU5WQUxJRF9SRVNQT05TRV9UWVBFID0gNDAwMDEyLCAvLyBPQXV0aDJcclxuICAgIFVOU1VQUE9SVEVEX0dSQU5UX1RZUEUgPSA0MDAwMTMsIC8vIE9BdXRoMlxyXG4gICAgSU5WQUxJRF9HUkFOVCA9IDQwMDAxNCwgLy8gT0F1dGgyXHJcbiAgICBDT0RFX0VYUElSRUQgPSA0MDAwMTUsIC8vIE9BdXRoMlxyXG4gICAgU0NIRU1BX1ZBTElEQVRJT05fRkFJTEVEID0gNDAwMDIwLFxyXG4gICAgQ0FQVENIQV9WRVJJRklDQVRJT05fRkFJTEVEID0gNDAwMDIxLFxyXG4gICAgVU5JUVVFX0lOREVYX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjIsXHJcbiAgICBJTlZBTElEX1RZUEVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMyxcclxuICAgIERZTkFNSUNfRklFTERTX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjQsXHJcbiAgICBXUklURV9BQ0NFU1NfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNSxcclxuICAgIElOVkFMSURfRk9STUFUX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjYsXHJcbiAgICBSRVFVSVJFRF9WQUxVRV9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI3LFxyXG4gICAgRU1BSUxfTk9UX1ZFUklGSUVEID0gNDAwMDI4LFxyXG4gICAgU0NIRU1BX0NPTkZMSUNUX0VSUk9SID0gNDAwMDI5LCAvLyBUbyBoYW5kbGUgVXNlciBzdG9yeSAzNDMzMC4gSW1wcm92ZSBFbGFzdGljU2VhcmNoTWFwcGluZ0V4Y2VwdGlvbiBoYW5kbGluZyBpbiBEUy5JbmRleE9iamVjdFxyXG4gICAgT1BFUkFUSU9OX05PVF9BTExPV0VEID0gNDAwMDMwLCAvLyBVc2VyIHN0b3J5IDM0MzExIC0gSWYgYWRkQ29ubmVjdGlvbiBpcyBjYWxsZWQgcmV0dXJuIGFuIGVycm9yIChcIm9wZXJhdGlvbiBub3QgYWxsb3dlZCBmb3IgdGhpcyBhY2NvdW50XCIsIDQwMFhYWCBlcnJvcikuXHJcbiAgICBTRUNVUklUWV9WRVJJRklDQVRJT05fRkFJTEVEID0gNDAwMDUwLFxyXG4gICAgSU5WQUxJRF9BUElLRVlfUEFSQU1FVEVSID0gNDAwMDkzLFxyXG4gICAgTk9UX1NVUFBPUlRFRCA9IDQwMDA5NiwgLy8gdGhlIGZ1bmN0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgYW55IG9mIHRoZSBjdXJyZW50bHkgY29ubmVjdGVkIHByb3ZpZGVyc1xyXG4gICAgVU5TVVBQT1JURURfVVNFUl9BR0VOVCA9IDQwMDA5NywgLy9cclxuICAgIE5PX1BST1ZJREVSUyA9IDQwMDEwMCwgLy8gY2xpZW50P1xyXG4gICAgUE9QVVBfQkxPQ0tFRCA9IDQwMDEwMSwgLy8gY2xpZW50XHJcbiAgICBJTlZBTElEX0VWRU5UX0hBTkRMRVIgPSA0MDAxMDIsIC8vIGNsaWVudFxyXG4gICAgSU5WQUxJRF9DT05UQUlORVJJRCA9IDQwMDEwMywgLy8gY2xpZW50XHJcbiAgICBOT1RfQ09OTkVDVEVEID0gNDAwMTA2LCAvLyB1c2VyIGlzIG5vdCBjb25uZWN0ZWQgdG8gdGhlIHJlcXVpcmVkIG5ldHdvcmsgb3IgdG8gYW55IG5ldHdvcmtcclxuICAgIElOVkFMSURfU0lURV9ET01BSU4gPSA0MDAxMjAsIC8vIHRoZSBjdXJyZW50IGRvbWFpbiBkb2VzIG5vdCBtYXRjaCB0aGUgZG9tYWluIGNvbmZpZ3VyZWQgZm9yIHRoZSBhcGkga2V5XHJcbiAgICBQUk9WSURFUl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAwMTIyLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxyXG4gICAgTElNSVRfUkVBQ0hFRCA9IDQwMDEyNCwgLy8gR2FtZU1lY2hhbmljcyAtIENhcCB3YXMgcmVhY2hlZFxyXG4gICAgRlJFUVVFTkNZX0xJTUlUX1JFQUNIRUQgPSA0MDAxMjUsIC8vIENvbW1lbnRzL0ZlZWQgLSBTcGFtIENhcHMgd2FzIHJlYWNoZWRcclxuICAgIElOVkFMSURfQUNUSU9OID0gNDAwMTI2LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW52YWxpZCBhY3Rpb24uIFRyaWdnZXJlZCBhY3Rpb24gY2FuJ3QgYmUgaW5pdGlhdGVkIGV4dGVybmFsbHlcclxuICAgIElOU1VGRklDSUVOVF9QT0lOVFNfVE9fUkVERUVNID0gNDAwMTI3LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW5zdWZmaWNpZW50X3BvaW50c190b19yZWRlZW1cclxuICAgIFNJR05BVFVSRV9USU1FU1RBTVBfRVhQSVJFRCA9IDQwMDEyOCwgLy8gdGhlIHRpbWVzdGFtcCBpbnNpZGUgdGhlIHNpZ25hdHVyZSBpcyBleHBpcmVkXHJcbiAgICBJTlZBTElEX1BPTElDWV9DT05GSUdVUkFUSU9OID0gNDAxMDAwLCAvLyBQb2xpY3kgY29uZmlndXJhdGlvbiBpcyBpbnZhbGlkIChpLmUuIHByZXZlbnQgcmVnaXRyYXRpb24pXHJcbiAgICBTVVNQRUNURURfU1BBTSA9IDQwMTAxMCwgLy8gU29tZW9uZSBpcyB0cnlpbmcgdG8gdXNlIEdpZ3lhIHRvIHNlbmQgYSBlbWFpbCB3aXRoIGEgVVJMIHRoYXQgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSBjbGllbnQncyBkb21haW5zOyBzdXNwZWN0ZWQgc3BhbS5cclxuICAgIExPR0lOX0ZBSUxFRF9DQVBUQ0hBX1JFUVVJUkVEID0gNDAxMDIwLCAvLyBhY2NvdW50cy5sb2dpbiAtIGNhcHRjaGEgcmVxdWlyZWRcclxuICAgIExPR0lOX0ZBSUxFRF9XUk9OR19DQVBUQ0hBID0gNDAxMDIxLCAvLyBhY2NvdW50cy5sb2dpbiAtIHdyb25nIGNhcHRjaGEgY29kZVxyXG4gICAgT0xEX1BBU1NXT1JEX1VTRUQgPSA0MDEwMzAsIC8vIFRoZSB1c2VyIHByb3ZpZGVkIGhpcyBwcmV2aW91cyBwYXNzd29yZCwgbm90IHRoZSBjdXJyZW50IG9uZVxyXG4gICAgRk9SQklEREVOID0gNDAzMDAwLFxyXG4gICAgSU5WQUxJRF9TRVNTSU9OX1RPS0VOID0gNDAzMDAxLCAvLyBpbnRlcm5hbFxyXG4gICAgUkVRVUVTVF9IQVNfRVhQSVJFRCA9IDQwMzAwMiwgLy8gdGhlIHRpbWVzdGFtcCBvciBleHBpcmF0aW9uIG9mIHRoZSB0b2tlbiB1c2VkIGV4Y2VlZGVkIHRoZSBhbGxvd2VkIHRpbWUgd2luZG93XHJcbiAgICBJTlZBTElEX1JFUVVFU1RfU0lHTkFUVVJFID0gNDAzMDAzLFxyXG4gICAgRFVQTElDQVRFX05PTkNFID0gNDAzMDA0LFxyXG4gICAgVU5BVVRIT1JJWkVEX1VTRVIgPSA0MDMwMDUsIC8vIHRoZSB1c2VyIGlkIHBhc3NlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgc2l0ZVxyXG4gICAgU0VOU0lUSVZFX0RBVEFfU0VOVF9PVkVSX0hUVFAgPSA0MDMwMDYsIC8vIHdoZW4gc2VuZGluZyB0aGUgc2VjcmV0IGtleSBpbiBSRVNUIGl0IGhhcyB0byBiZSBvdmVyIEhUVFBTXHJcbiAgICBQRVJNSVNTSU9OX0RFTklFRCA9IDQwMzAwNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUGVybWlzc2lvbiBkZW5pZWQgKHJlYWRPbmx5LG1vZGVyYXRpb24gc2l0ZSkuXHJcbiAgICBJTlZBTElEX09QRU5JRF9VUkwgPSA0MDMwMDgsIC8vIGNhbm5vdCBmaW5kIGFuIG9wZW5JZCBlbmRwb2ludCBvbiB0aGUgdXJsIG9yIHVzZXJuYW1lIGdpdmVuIGZvciBvcGVuSWQgbG9naW5cclxuICAgIFBST1ZJREVSX1NFU1NJT05fRVhQSVJFRCA9IDQwMzAwOSwgLy8gdGhlIHVzZXIgc2Vzc2lvbiBmb3IgdGhpcyBwcm92aWRlciBpcyBleHBpcmVkXHJcbiAgICBJTlZBTElEX1NFQ1JFVCA9IDQwMzAxMCwgLy8gdGhlIHJlcXVlc3QgaGFzIGFuIGludmFsaWQgc2VjcmV0IGtleVxyXG4gICAgU0VTU0lPTl9IQVNfRVhQSVJFRCA9IDQwMzAxMSwgLy8gdGhlIHNlc3Npb24gZm9yIHRoaXMgdXNlciBoYXMgZXhwaXJlZFxyXG4gICAgTk9fVkFMSURfU0VTU0lPTiA9IDQwMzAxMiwgLy8gcmVxdWVzdGVkIHVzZXIgaGFzIG5vIHZhbGlkIHNlc3Npb25cclxuICAgIFVOVkVSSUZJRURfVVNFUiA9IDQwMzAxMywgLy8gdGhlIHVzZXIgaXMgbm90IHZlcmlmaWVkIGluIFNTTyBzZXNzaW9uXHJcbiAgICBNSVNTSU5HX1JFUVVFU1RfUkVGRVJSRVIgPSA0MDMwMTUsIC8vIHdlIGNhbid0IHZhbGlkYXRlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlZmVycmVyIGhlYWRlciBpcyBtaXNzaW5nXHJcbiAgICBVTkVYUEVDVEVEX1BST1ZJREVSX1VTRVIgPSA0MDMwMTcsIC8vIHRoZSBsb2dnZWQgaW4gdXNlciBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgb25lIGV4cGVjdGVkXHJcbiAgICBQRVJNSVNTSU9OX05PVF9SRVFVRVNURUQgPSA0MDMwMjIsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIGl0IHdhcyBub3QgcmVxdWVzdGVkXHJcbiAgICBOT19VU0VSX1BFUk1JU1NJT04gPSA0MDMwMjMsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIHdlIGRvbid0IGhhdmUgb25lXHJcbiAgICBQUk9WSURFUl9MSU1JVF9SRUFDSEVEID0gNDAzMDI0LCAvLyB0aGUgcHJvdmlkZXIgbGltaXQgZm9yIHRoaXMgYWN0aW9uIHdhcyBleGNlZWRlZFxyXG4gICAgSU5WQUxJRF9UT0tFTiA9IDQwMzAyNSwgLy8gT0F1dGgyXHJcbiAgICBVTkFVVEhPUklaRURfQUNDRVNTX0VSUk9SID0gNDAzMDI2LCAvLyBDYWxscyB0byBhY2NvdW50cy5pc0F2YWlsYWJsZUxvZ2luSUQgV2hlbiBwcmV2ZW50TG9naW5JREhhcnZlc3RpbmcgPSB0cnVlIHNob3VsZCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgNDAzeHh4IHVuYXV0aG9yaXplZCBhY2Nlc3MgZXJyb3IuXHJcbiAgICBESUZGRVJFTlRfVVNFUl9GT1JfUkVBVVRIID0gNDAzMDI3LCAvLyBEaWZmZXJlbnQgdXNlciB0cmllZCB0byByZS1hdXRob3JpemUuXHJcbiAgICBTRVNTSU9OX0VYUElSRURfUkVUUlkgPSA0MDMwMzAsIC8vIElubmVyIGNvZGUgLSB3aGVuIHRoZSBmYWNlYm9vayBzZXNzaW9uIGlzIGV4cGlyZWQgYW5kIHRoZSBjbGllbnQgd2FpdHMgZm9yIEZCIG9uIHBhZ2UgdG8gbG9hZFxyXG4gICAgQVBQUk9WRURfQllfTU9ERVJBVE9SID0gNDAzMDMxLCAvLyBjb21tZW50cyAtIGNhbnQgZmxhZyBjb21tZW50LCBpdCB3YXMgYXBwcm92ZWQgYnkgdGhlIG1vZGVyYXRvciBhbHJlYWR5LlxyXG4gICAgVE9LRU5fSEFTX1JFTkVXRUQgPSA0MDMwMzIsIC8vIHRoZSB0b2tlbiBpcyBubyBsb25nZXIgdmFsaWQsIGJ1dCB3ZSBoYXZlIG5ldyB0b2tlbiB0byBwcm92aWRlXHJcbiAgICBOT19VU0VSX0NPT0tJRSA9IDQwMzAzNSwgLy8gbm8gdXNlciBjb29raWVcclxuICAgIFVOQVVUSE9SSVpFRF9QQVJUTkVSID0gNDAzMDM2LCAvLyBwYXJ0bmVyIGlzIGRpc2FibGVkXHJcbiAgICBQT1NUX0RFTklFRCA9IDQwMzAzNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUG9zdCBkZW5pZWQgd2hlbiB0aGUgdXNlciB0cmllZCB0byByZXZpZXcgdHdpY2UuXHJcbiAgICBOT19MT0dJTl9USUNLRVQgPSA0MDMwNDAsIC8vIG5vIGxvZ2luIHRpY2tldCBpbiBjYWxsYmFjayB1cmxcclxuICAgIEFDQ09VTlRfRElTQUJMRUQgPSA0MDMwNDEsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gZ3MuYWNjb3VudHMuSXNBY3RpdmU9ZmFsc2VcclxuICAgIElOVkFMSURfTE9HSU5JRCA9IDQwMzA0MiwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiB0cnlpbmcgdG8gbG9naW4gd2l0aCBhIGxvZ2luSUQgdGhhdCBkbyBub3QgZXhpc3RzXHJcbiAgICBMT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDQwMzA0MywgLy8gRm9yIGFjY291bnQ6IElmIHByb3ZpZGVyRW1haWwgaXMgZGVmaW5lZCBhcyBhIGxvZ2luSWRlbnRpZmllciBpbiB0aGUgcG9saWN5LCBhbmQgdGhlIGVtYWlsIGFkZHJlc3MgcmVjZWl2ZWQgZnJvbSB0aGUgcHJvdmlkZXIgZXhpc3RzIGluIHRoZSBncy5sb2dpbklkZW50aWZpZXJzIGNvbGxlY3Rpb24gYnV0IGFzc29jaWF0ZWQgd2l0aCBhIGRpZmZlcmVudCBVVUlEIHRoYW4gdGhlIGN1cnJlbnQgdXNlciwgdGhlbiByZXR1cm4gXCJMb2dpbiBpZGVudGlmaWVyIGV4aXN0c1wiIGVycm9yIGNvZGUgKDQwM3h4eCkuXHJcbiAgICBVTkRFUkFHRV9VU0VSID0gNDAzMDQ0LCAvLyBGb3IgQ09QUEEgY29tcGxpYW5jZSAoQ2hpbGRyZW4ncyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdClcclxuICAgIElOVkFMSURfU0lURV9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAzMDQ1LCAvLyBGb3IgYWNjb3VudHMgLSBzaXRlIERTIGlzIGVuYWJsZWQgdGhvdWdoIG5vIERTU2l6ZSB3YXMgY29uZmlndXJlZC5cclxuICAgIExPR0lOSURfRE9FU19OT1RfRVhJU1QgPSA0MDMwNDcsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIHJlc2V0IHBhc3N3b3JkIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xyXG4gICAgQVBJX1JBVEVfTElNSVRfRVhDRUVERUQgPSA0MDMwNDgsXHJcbiAgICBQRU5ESU5HX1BBU1NXT1JEX0NIQU5HRSA9IDQwMzEwMCwgLy8gVGhlIHVzZXIncyBwYXNzd29yZCBuZWVkcyB0byBiZSBjaGFuZ2VkXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1ZFUklGSUNBVElPTiA9IDQwMzEwMSxcclxuICAgIEFDQ09VTlRfUEVORElOR19URkFfUkVHSVNUUkFUSU9OID0gNDAzMTAyLFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1JFQ0VOVF9MT0dJTiA9IDQwMzExMCxcclxuICAgIEFDQ09VTlRfVEVNUE9SQVJJTFlfTE9DS0VEX09VVCA9IDQwMzEyMCwgLy8gVG9vIG1hbnkgbG9naW4gYXR0ZW1wdHM7IGFjY291bnQgbG9ja2VkLW91dFxyXG4gICAgUkVEVU5EQU5UX09QRVJBVElPTiA9IDQwMzIwMCwgLy8gVGhlIGNsaWVudCBwZXJmb3JtZWQgYW4gb3BlcmF0aW9uIHRoYXQgaXMgcmVkdW5kYW50XHJcbiAgICBJTlZBTElEX0FQUExJQ0FUSU9OX0lEID0gNDAzMjAxLCAvLyBUaGUgYXBwIGlkIHByb3ZpZGVkIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBvbmUgY29uZmlndXJlZCBmb3IgdGhlIHNpdGVcclxuICAgIE5PVF9GT1VORCA9IDQwNDAwMCwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLiBBY2NvdW50cyAtIGVtYWlsIHZlcmlmaWNhdGlvbiBmYWlsZWQsIHV1aWQgbm90IGZvdW5kLlxyXG4gICAgRlJJRU5EX05PVF9GT1VORCA9IDQwNDAwMSwgLy8gdGhlIHVzZXIgaWQgcHJvdmlkZWQgYXMgYSB0YXJnZXQgaXMgbm90IGEgZnJpZW5kIGZvciB0aGUgY3VycmVudCB1c2VyXHJcbiAgICBDQVRFR09SWV9OT1RfRk9VTkQgPSA0MDQwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC5cclxuICAgIFVJRF9OT1RfRk9VTkQgPSA0MDQwMDMsXHJcbiAgICBSRVNPVVJDRV9OT1RfRk9VTkQgPSA0MDQwMDQsIC8vIENsaWVudCBzaWRlIC0gaW1hZ2Ugbm90IGZvdW5kIGFmdGVyIHVwbG9hZFxyXG4gICAgSU5WQUxJRF9BUElfTUVUSE9EID0gNDA1MDAxLCAvLyBpbnRlcm5hbCBmb3Igb3VyIEpTIEFQSVxyXG4gICAgSURFTlRJVFlfRVhJU1RTID0gNDA5MDAxLCAvLyB3aGVuIHRyeWluZyB0byBjb25uZWN0IHRvIGEgcHJvdmlkZXIgdGhhdCBpcyBhbHJlYWR5IGNvbm5lY3RlZCBvciBsaW5rIHRvIGFuIGFscmVhZHkgbGlua2VkIGFjY291bnRcclxuICAgIEdPTkUgPSA0MTAwMDAsIC8vIFJlc291cmNlIG5vIGxvbmdlciBhdmFpbGFibGUuIERhdGEgS2V5IFNlcnZlciAtIGtleSByZXZva2VkL2V4cGlyZWQuXHJcbiAgICBSRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgPSA0MTMwMDEsIC8vIENvbW1lbnRzIHNlcnZlciAtIFJlcXVlc3QgdG8gbGFyZ2VcclxuICAgIENPTU1FTlRfVEVYVF9UT09fTEFSR0UgPSA0MTMwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENvbW1lbnQgVGV4dCB0byBsYXJnZS5cclxuICAgIE9CSkVDVF9UT09fTEFSR0UgPSA0MTMwMDMsIC8vIERhdGFTdG9yZSBvYmplY3QgaXMgdG9vIGxhcmdlXHJcbiAgICBQUk9GSUxFX1BIT1RPX1RPT19MQVJHRSA9IDQxMzAwNCwgLy8gUHJvZmlsZSBwaG90byBpcyB0b28gbGFyZ2UsIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGNvbnRlbnQgbGVuZ3RoXHJcbiAgICBSRVFVRVNUX1VSSV9UT09fTE9ORyA9IDQxNDAwMCwgLy9UaGUgVVJJIHByb3ZpZGVkIHdhcyB0b28gbG9uZyBmb3IgdGhlIHNlcnZlciB0byBwcm9jZXNzLlxyXG4gICAgTUlTU0lOR19VU0VSX1BIT1RPID0gNDA5MDEwLCAvLyBFcnJvciAtIG1pc3NpbmcgdXNlciBwaG90b1xyXG4gICAgQ09VTlRFUl9OT1RfUkVHSVNURVJFRCA9IDQwOTAxMSwgLy8gQ291bnRlciBub3QgcmVnaXN0ZXJlZFxyXG4gICAgSU5WQUxJRF9HTUlEX1RJQ0tFVCA9IDQwOTAxMiwgLy8gZ21pZCB0aWNrZXQgaXMgbm90IHZhbGlkXHJcbiAgICBTQU1MX01BUFBFRF9BVFRSSUJVVEVfTk9UX0ZPVU5EID0gNDA5MDEzLCAvLyBVc2VkIHdoZW4gbWFwcGVkIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgcHJvdmlkZXJVSUQgY2Fubm90IGJlIHJldHJlaXZlZFxyXG4gICAgU0FNTF9DRVJUSUZJQ0FURV9OT1RfRk9VTkQgPSA0MDkwMTQsIC8vIFVzZWQgd2hlbiBTQU1MIGNlcnRpZmljYXRlIGNvdWxkIG5vdCBiZSByZXRyZWl2ZWQuXHJcbiAgICBTQU1MX01FU1NBR0VfTk9UX0ZPVU5EID0gNDA5MDE1LCAvLyBVc2VkIHdoZW4gY2FjaGVkIFNBTUwgbWVzc2FnZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxyXG4gICAgR0VORVJBTF9TRVJWRVJfRVJST1IgPSA1MDAwMDEsXHJcbiAgICBTRVJWRVJfTE9HSU5fRVJST1IgPSA1MDAwMDIsIC8vIGdlbmVyYWwgZXJyb3IgZHVyaW5nIHRoZSBsb2dpbiBwcm9jZXNzXHJcbiAgICBERUZBVUxUX0FQUExJQ0FUSU9OX0NPTkZJR1VSQVRJT05fRVJST1IgPSA1MDAwMDMsIC8vIEZvciBtdWx0aXBsZSBEQyAtIHdoZW4gbm8gZGVmYXVsdCBhcHBsaWNhdGlvbiBjYW4gYmUgZm91bmQgaW4gRGVmYXVsdEFwcGxpY2F0aW9ucy5jb25maWcuIFdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJEZWZhdWx0IGFwcGxpY2F0aW9uIGlzbid0IGNvbmZpZ3VyZWQgZm9yIGRhdGFDZW50ZXJcIlxyXG4gICAgU0VTU0lPTl9NSUdSQVRJT05fRVJST1IgPSA1MDAwMTQsIC8vIGVycm9yIGluIG1pZ3JhdGluZyBvbGQgdG8gbmV3IGZhY2Vib29rIHNlc3Npb25cclxuICAgIFBST1ZJREVSX0VSUk9SID0gNTAwMDIzLCAvLyBnZW5lcmFsIGVycm9yIGZyb20gdGhlIHByb3ZpZGVyXHJcbiAgICBEQVRBQkFTRV9FUlJPUiA9IDUwMDAyOCxcclxuICAgIFVTRVJOQU1FX1JFUVVJUkVEID0gNTAwMDI5LCAvLyBJbm5lciBjb2RlXHJcbiAgICBOT19QUk9WSURFUl9BUFBMSUNBVElPTiA9IDUwMDAzMSwgLy8gdGhlIGFwcGxpY2F0aW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIG5vdCBkZWZpbmVkIGZvciB0aGlzIHNpdGVcclxuICAgIExPQURfRkFJTEVEID0gNTAwMDMyLCAvLyBjbGllbnQgZXJyb3JcclxuICAgIElOVkFMSURfRU5WSVJPTk1FTlRfQ09ORklHID0gNTAwMDMzLCAvLyBJbiBjYXNlIHRoZXJlIGlzIG5vIHRhcmdldCBlbnZpcm9ubWVudCBpbiB0aGUgY29uZmlnIGZpbGUgd2UnZCByZXR1cm4gd2l0aCAgaW52YWxpZF9lbnZpcm9ubWVudF9jb25maWcgZXJyb3IuXHJcbiAgICBFUlJPUl9EVVJJTkdfQkFDS0VORF9PUEVSQVRJT04gPSA1MDAwMzQsXHJcbiAgICBUSU1FT1VUID0gNTA0MDAxLCAvLyBvdXRnb2luZyByZXF1ZXN0IGhhZCB0aW1lZCBvdXRcclxuICAgIENMSUVOVFRJTUVPVVQgPSA1MDQwMDIsIC8vIEZvciBzZXJ2ZXIgU0RLcyAtIGEgY2xpZW50IHNpZGUgdGltZW91dFxyXG4gICAgSU5WQUxJRF9VUkwgPSA0MDQwMDQsIC8vIGVtYmVkLmx5IDQwNCBlcnJvciBtZXNzYWdlIC0gdXJsIGlzIG5vdCB2YWxpZFxyXG4gICAgTUVESUFfSVRFTVNfTk9UX1NVUFBPUlRFRCA9IDQwMTAwMSwgLy8gTWVkaWEgaXRlbXMgYSBub3QgYWxsb3dlZCBmb3IgdGhpcyBjYXRlZ29yeVxyXG4gICAgTUlTU0lOR19FUlJPUl9DT0RFID0gNTk5OTk5LFxyXG59XHJcbmV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JEZXRhaWxzIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgU2FtZV9wYXNzd29yZCA9IDEwMDAwMSwgLy8gUmVzZXQgUGFzc3dvcmQgLSBcIidvbGRQYXNzd29yZCcgY2Fubm90IGJlIHRoZSBzYW1lIGFzICduZXdQYXNzd29yZCdcIlxyXG4gICAgSW52YWxpZF9wYXNzd29yZCA9IDEwMDAwMiwgLy8gUmVzZXQgUGFzc3dvcmQgLSBjdXJyZW50IHBhc3N3b3JkIGlzIHdyb25nL2ludmFsaWRcclxuICAgIEludmFsaWRfY291bnRlcnNfcXVlcnlfd2l0aF9jdXJzb3IgPSAxMDAwMDMsXHJcbn1cclxuIiwiaW1wb3J0IHsgSUNvbmZpZ3VyYXRpb24gfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL0lDb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgSVByb3h5QWN0aW9uLCBwYXJzZVVybCB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvcGFyc2VVcmwnO1xyXG5pbXBvcnQgeyBmaW5kQ29uZmlndXJhdGlvbiwgcGFyc2VDb25maWd1cmF0aW9uIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgZW5zdXJlSnNTZGtMb2FkZWQgfSBmcm9tICdzcmMvdXRpbHMvR2lneWEuSnMuQm9vdC9hcHAvYm9vdCc7XHJcblxyXG4vLyoqIFRoaXMgaXMgaW50ZW50aW9uYWwhIHdlIHdhbnQgdG8gcGFja2FnZSBnaWd5YS5ib290IHdpdGhpbiB0aGUgZ2lneWFTYW1sLnByb3h5IC4gKipcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAoZG9uZTogKGFjdGlvbjogSVByb3h5QWN0aW9uLCBjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbikgPT4gdm9pZCkge1xyXG4gICAgdmFyIGFjdGlvbiA9IHBhcnNlVXJsKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICB2YXIgdW5wYXJzZWRDb25maWcgPSBmaW5kQ29uZmlndXJhdGlvbigpO1xyXG4gICAgZW5zdXJlSnNTZGtMb2FkZWQoXHJcbiAgICAgICAgdW5wYXJzZWRDb25maWcuYXBpS2V5LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNvbmZpZ3VyYXRpb24gPSBwYXJzZUNvbmZpZ3VyYXRpb24odW5wYXJzZWRDb25maWcpO1xyXG4gICAgICAgICAgICBjaGFuZ2VMb2dvdXRCZWhhdmlvdXIoKTtcclxuICAgICAgICAgICAgZG9uZShhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICB0cnVlLFxyXG4gICAgKTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VMb2dvdXRCZWhhdmlvdXIoKSB7XHJcbiAgICAvLyBjaGFuZ2Ugc29jaWFsaXplTG9nb3V0IG5vdCB0byBsb2dvdXQgYmVmb3JlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UsIGFuZCB0byBhbHdheXMgZ28gdG8gdGhlIHNlcnZlclxyXG4gICAgZ2lneWEuXy5sb2dvdXRCZWhhdmlvdXIubG9nb3V0QmVmb3JlU2VydmVyUmVzcG9uc2UgPSBmYWxzZTtcclxuICAgIGdpZ3lhLl8ubG9nb3V0QmVoYXZpb3VyLmFsd2F5c1NlbmRMb2dvdXRUb1NlcnZlciA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNvbmZpZ3VyYXRpb24gfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL0lDb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgdXJsUGFyYW1zLCBkZXNlcmlhbGl6ZUpTT04sIG9iamVjdE1lcmdlIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC91dGlscyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVbnBhcnNlY0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgYXBpS2V5OiBzdHJpbmc7XHJcbiAgICBjb25maWdKc29uOiBzdHJpbmc7XHJcbn1cclxuZnVuY3Rpb24gZmluZFNjcmlwdEVsZW1lbnQoKTogSFRNTFNjcmlwdEVsZW1lbnQge1xyXG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICB2YXIgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQ7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gc2NyaXB0c1tpXTtcclxuICAgICAgICB2YXIgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChzcmMgIT0gJycpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHNyYy5pbmRleE9mKCcvL2NkbmQqLmdpZ3lhLmNvbScpID4gLTEgfHwgc3JjLmluZGV4T2YoJy8vY2Ruc2QqLmdpZ3lhLmNvbScpID4gLTEgfHwgc3JjLmluZGV4T2YoJz9hcGlrZXk9JykgPiAtMSkgJiZcclxuICAgICAgICAgICAgICAgIHNyYy5pbmRleE9mKCdnaWd5YS5zYW1sLmpzJykgPiAtMVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQgPSBzY3JpcHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2NyaXB0RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvbmZpZ3VyYXRpb24oKTogSVVucGFyc2VjQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvLyBmaW5kIHNjcmlwdCBlbGVtZW50XHJcbiAgICB2YXIgc2NyaXB0RWxlbWVudCA9IGZpbmRTY3JpcHRFbGVtZW50KCk7XHJcblxyXG4gICAgaWYgKCFzY3JpcHRFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBmaW5kIHNjcmlwdCBlbGVtZW50Jyk7XHJcblxyXG4gICAgdmFyIGFwaUtleSA9IHVybFBhcmFtcyhzY3JpcHRFbGVtZW50LnNyYylbJ2FwaUtleSddO1xyXG4gICAgdmFyIGNvbmZpZ0pzb24gPSBzY3JpcHRFbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XHJcblxyXG4gICAgaWYgKCFjb25maWdKc29uKSB0aHJvdyBuZXcgRXJyb3IoJ05vIG9iamVjdCBwYXJhbXMgd2FzIGZvdW5kLicpO1xyXG5cclxuICAgIGlmICghYXBpS2V5KSB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBmaW5kIGFwaSBrZXknKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFwaUtleTogYXBpS2V5LFxyXG4gICAgICAgIGNvbmZpZ0pzb246IGNvbmZpZ0pzb24sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbmZpZ3VyYXRpb24odW5wYXJzZWRDb25maWc6IElVbnBhcnNlY0NvbmZpZ3VyYXRpb24pOiBJQ29uZmlndXJhdGlvbiB7XHJcbiAgICB2YXIgc2NyaXB0Q29uZiA9IGRlc2VyaWFsaXplSlNPTih1bnBhcnNlZENvbmZpZy5jb25maWdKc29uKTtcclxuXHJcbiAgICBpZiAoIXNjcmlwdENvbmYpIHRocm93IG5ldyBFcnJvcignVGhlIHBhcmFtcyBvYmplY3QgaXMgbm90IHZhbGlkLicpO1xyXG5cclxuICAgIHZhciBjb25maWd1cmF0aW9uT2JqID0gb2JqZWN0TWVyZ2U8SUNvbmZpZ3VyYXRpb24+KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXBpS2V5OiB1bnBhcnNlZENvbmZpZy5hcGlLZXksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JpcHRDb25mLFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIWNvbmZpZ3VyYXRpb25PYmoubG9naW5VUkwpIHRocm93IG5ldyBFcnJvcihcIlRoZSAnbG9naW5VUkwnIHBhcmFtIGlzIG5vdCB2YWxpZC5cIik7XHJcblxyXG4gICAgaWYgKCFjb25maWd1cmF0aW9uT2JqLmxvZ291dFVSTCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdsb2dvdXRVUkwnIHBhcmFtIGlzIG5vdCB2YWxpZC5cIik7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25PYmo7XHJcbn1cclxuIiwiaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBmaW5kQ29uZmlndXJhdGlvbiwgcGFyc2VDb25maWd1cmF0aW9uIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHtcclxuICAgIHByb2Nlc3NBZnRlckxvZ2luLFxyXG4gICAgcHJvY2Vzc0ZvcmNlTG9naW4sIHByb2Nlc3NJbml0U1NPLFxyXG4gICAgcHJvY2Vzc0xvZ2luLFxyXG4gICAgcHJvY2Vzc1Bhc3NpdmVMb2dpbixcclxufSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL2xvZ2luJztcclxuaW1wb3J0IHsgcHJvY2Vzc0xvZ291dCB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvbG9nb3V0JztcclxuaW1wb3J0IHsgcGFyc2VVcmwsIFByb3h5TW9kZSB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvcGFyc2VVcmwnO1xyXG5pbXBvcnQgeyBwcm9jZXNzUmVxdWVzdCB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvc2FtbFByb3h5JztcclxuaW1wb3J0IHtcclxuICAgIGRlc2VyaWFsaXplSlNPTixcclxuICAgIGdldExvZ2luVG9rZW4sIGlzTG9nZ2VkSW4sIGxvYWRDb250ZXh0LCBsb2dvdXQsIG9iamVjdE1lcmdlLFxyXG4gICAgb3BlbklmcmFtZSxcclxuICAgIHJlZGlyZWN0VG9TYW1sRW5kUG9udCxcclxuICAgIHJlcG9ydEVycm9yLFxyXG4gICAgc2F2ZUNvbnRleHQsXHJcbiAgICBzZXRVcmxQYXJhbXMsIHRlbXBsYXRlRmlsbCxcclxuICAgIHVybFBhcmFtcyxcclxufSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmlmKCF3aW5kb3dbJ2dpZ3lhJ10pIHtcclxuICAgIHdpbmRvd1snZ2lneWEnXSA9IHt9IGFzIGFueTtcclxufVxyXG5pZiAoIXdpbmRvd1snZ2lneWFTYW1sJ10pIHtcclxuICAgIHdpbmRvd1snZ2lneWFTYW1sJ10gPSB7fTtcclxufVxyXG5jb25zdCBnaWd5YVNhbWwgPSB3aW5kb3dbJ2dpZ3lhU2FtbCddO1xyXG5pZiAoIWdpZ3lhU2FtbC5wcm94eSkge1xyXG4gICAgZ2lneWFTYW1sLnByb3h5ID0ge1xyXG4gICAgICAgIGJvb3RzdHJhcCxcclxuICAgICAgICBmaW5kQ29uZmlndXJhdGlvbixcclxuICAgICAgICBwYXJzZUNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgcHJvY2Vzc0xvZ2luLFxyXG4gICAgICAgIHByb2Nlc3NGb3JjZUxvZ2luLFxyXG4gICAgICAgIHByb2Nlc3NBZnRlckxvZ2luLFxyXG4gICAgICAgIHByb2Nlc3NQYXNzaXZlTG9naW4sXHJcbiAgICAgICAgcHJvY2Vzc0luaXRTU08sXHJcbiAgICAgICAgcHJvY2Vzc0xvZ291dCxcclxuICAgICAgICBQcm94eU1vZGUsXHJcbiAgICAgICAgcGFyc2VVcmwsXHJcbiAgICAgICAgcHJvY2Vzc1JlcXVlc3RcclxuICAgIH07XHJcbn1cclxuaWYgKCFnaWd5YVNhbWwucHJveHkudXRpbHMpIHtcclxuICAgIGdpZ3lhU2FtbC5wcm94eS51dGlscyA9IHtcclxuICAgICAgICB1cmxQYXJhbXMsXHJcbiAgICAgICAgb3BlbklmcmFtZSxcclxuICAgICAgICByZXBvcnRFcnJvcixcclxuICAgICAgICByZWRpcmVjdFRvU2FtbEVuZFBvbnQsXHJcbiAgICAgICAgc2V0VXJsUGFyYW1zLFxyXG4gICAgICAgIGdldExvZ2luVG9rZW4sXHJcbiAgICAgICAgc2F2ZUNvbnRleHQsXHJcbiAgICAgICAgbG9hZENvbnRleHQsXHJcbiAgICAgICAgdGVtcGxhdGVGaWxsLFxyXG4gICAgICAgIGRlc2VyaWFsaXplSlNPTixcclxuICAgICAgICBvYmplY3RNZXJnZSxcclxuICAgICAgICBpc0xvZ2dlZEluLFxyXG4gICAgICAgIGxvZ291dFxyXG4gICAgfTtcclxufVxyXG5naWd5YVNhbWwucHJveHkuYm9vdHN0cmFwKHByb2Nlc3NSZXF1ZXN0KTtcclxuIiwiaW1wb3J0IHsgSUNvbmZpZ3VyYXRpb24gfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL0lDb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgSVByb3h5QWN0aW9uIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9wYXJzZVVybCc7XHJcbmltcG9ydCB7IGlzTG9nZ2VkSW4sIHJlZGlyZWN0VG9TYW1sRW5kUG9udCwgZ2V0TG9naW5Ub2tlbiwgc2F2ZUNvbnRleHQsIHJlZGlyZWN0LCBsb2FkQ29udGV4dCB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NMb2dpbihhY3Rpb246IElQcm94eUFjdGlvbiwgY29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGlzTG9nZ2VkSW4obG9nZ2VkSW4gPT4ge1xyXG4gICAgICAgIGlmIChsb2dnZWRJbilcclxuICAgICAgICAgICAgcmVkaXJlY3RUb1NhbWxFbmRQb250KFxyXG4gICAgICAgICAgICAgICAgJ2lkcC9zc28vY29udGludWUnLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbWxDb250ZXh0OiBhY3Rpb24uc2FtbENvbnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5Ub2tlbjogZ2V0TG9naW5Ub2tlbihjb25maWd1cmF0aW9uLmFwaUtleSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbi5hcGlLZXksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgLy8gbm90IGxvZ2dlZCBpblxyXG4gICAgICAgIGVsc2UgcHJvY2Vzc0ZvcmNlTG9naW4oYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcclxuICAgIH0sIGNvbmZpZ3VyYXRpb24uYXBpS2V5KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0ZvcmNlTG9naW4oYWN0aW9uOiBJUHJveHlBY3Rpb24sIGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uKSB7XHJcbiAgICAvLyBzYXZlIHNhbWxDb250ZXh0IHRvIHJldHJpZXZlIGl0IGlmIG5lY2VzYXJ5XHJcbiAgICBzYXZlQ29udGV4dChjb25maWd1cmF0aW9uLmFwaUtleSwgYWN0aW9uLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUGFyYW1ldGVycyB0byBsb2dpblVSTCBtaWdodCBiZSBzdXBwb3J0ZWQgaW4gdGhlIGZ1dHVyZVxyXG4gICAgICAgIC8vdmFyIGJhY2tUbyA9IHV0aWxzLnNldFVybFBhcmFtcyhsb2NhdGlvbi50b1N0cmluZygpLCB7IG1vZGU6IFByb3h5TW9kZVtQcm94eU1vZGUuX2FmdGVyTG9naW5dIH0pO1xyXG5cclxuICAgICAgICByZWRpcmVjdChjb25maWd1cmF0aW9uLmxvZ2luVVJMLCBhY3Rpb24sIHtcclxuICAgICAgICAgICAgc2FtbENvbnRleHQ6IGFjdGlvbi5zYW1sQ29udGV4dCxcclxuICAgICAgICAgICAgLy9yZWRpcmVjdFVSTDogYmFja1RvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0FmdGVyTG9naW4oYWN0aW9uOiBJUHJveHlBY3Rpb24sIGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uKSB7XHJcbiAgICBsb2FkQ29udGV4dChjb25maWd1cmF0aW9uLmFwaUtleSwgc2F2ZWRDb250ZXh0ID0+IHtcclxuICAgICAgICBhY3Rpb24uc2FtbENvbnRleHQgPSBhY3Rpb24uc2FtbENvbnRleHQgfHwgc2F2ZWRDb250ZXh0LnNhbWxDb250ZXh0O1xyXG4gICAgICAgIGFjdGlvbi5zcE5hbWUgPSBhY3Rpb24uc3BOYW1lIHx8IHNhdmVkQ29udGV4dC5zcE5hbWU7XHJcblxyXG4gICAgICAgIHByb2Nlc3NQYXNzaXZlTG9naW4oYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUGFzc2l2ZUxvZ2luKGFjdGlvbjogSVByb3h5QWN0aW9uLCBjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbikge1xyXG4gICAgaXNMb2dnZWRJbihsb2dnZWRJbiA9PiB7XHJcbiAgICAgICAgdmFyIGxvZ2luVG9rZW4gPSBsb2dnZWRJbiA/IGdldExvZ2luVG9rZW4oY29uZmlndXJhdGlvbi5hcGlLZXkpIDogbnVsbDtcclxuXHJcbiAgICAgICAgcmVkaXJlY3RUb1NhbWxFbmRQb250KFxyXG4gICAgICAgICAgICAnaWRwL3Nzby9jb250aW51ZScsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNhbWxDb250ZXh0OiBhY3Rpb24uc2FtbENvbnRleHQsXHJcbiAgICAgICAgICAgICAgICBsb2dpblRva2VuOiBsb2dpblRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uLmFwaUtleSxcclxuICAgICAgICApO1xyXG4gICAgfSwgY29uZmlndXJhdGlvbi5hcGlLZXkpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSW5pdFNTTyhhY3Rpb246IElQcm94eUFjdGlvbiwgY29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGlzTG9nZ2VkSW4obG9nZ2VkSW4gPT4ge1xyXG4gICAgICAgIHZhciBsb2dpblRva2VuID0gbG9nZ2VkSW4gPyBnZXRMb2dpblRva2VuKGNvbmZpZ3VyYXRpb24uYXBpS2V5KSA6IG51bGw7XHJcblxyXG4gICAgICAgIHJlZGlyZWN0VG9TYW1sRW5kUG9udChcclxuICAgICAgICAgICAgJ2lkcC9zc28vaW5pdCcsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNwTmFtZTogYWN0aW9uLnBhcmFtc1snc3BOYW1lJ10sXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVSTDogYWN0aW9uLnBhcmFtc1sncmVkaXJlY3RVUkwnXSxcclxuICAgICAgICAgICAgICAgIGxvZ2luVG9rZW46IGxvZ2luVG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24uYXBpS2V5LFxyXG4gICAgICAgICk7XHJcbiAgICB9LCBjb25maWd1cmF0aW9uLmFwaUtleSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNvbmZpZ3VyYXRpb24gfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL0lDb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgSVByb3h5QWN0aW9uIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9wYXJzZVVybCc7XHJcbmltcG9ydCB7IHJlcG9ydEVycm9yLCByZWRpcmVjdFRvU2FtbEVuZFBvbnQsIG9wZW5JZnJhbWUsIGxvZ291dCB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvdXRpbHMnO1xyXG5pbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzTG9nb3V0KGFjdGlvbjogSVByb3h5QWN0aW9uLCBjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbikge1xyXG4gICAgLy8gY2FsbCBzb2NpYWxpemUubG9nb3V0IHRoYXQgd2lsbCBoYW5kbGUgdGhlIHJlc3RcclxuICAgIC8vIGdldCByZXNwb25zZSBmcm9tIHNlcnZlclxyXG4gICAgLy8gaWYgbmVjZXNhcnkgaW52YWxpZGF0ZSBjbGllbnQgc2Vzc2lvbiwgYW5kIGNhbGwgbG9nb3V0VXJsXHJcbiAgICAvLyBjYWxsIGV2ZXJ5IFNQIHNlc3Npb24gdGhhdCBpcyBuZWVkZWRcclxuICAgIC8vIHdoZW4gaXQgaXMgZmluaXNoZWQsIHJlZGlyZWN0IHRvIGZpbmFsaXplIGVuZHBvaW50XHJcbiAgICB2YXIgb25Mb2dvdXRSZXNwb25zZSA9IHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zdCBzaW5nbGVTUFRpbWVvdXQgPSA0MDAwOyAvLyA0c1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JDb2RlICE9PSBHU0Vycm9ycy5PSylcclxuICAgICAgICAgICAgcmV0dXJuIHJlcG9ydEVycm9yKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogcmVzcG9uc2UuZXJyb3JDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVzcG9uc2UuZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnNhbWxDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciBjYWxsRmluYWxpemUgPSAoKSA9PlxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RUb1NhbWxFbmRQb250KFxyXG4gICAgICAgICAgICAgICAgICAgICdpZHAvc2xvL2ZpbmFsaXplJyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbWxDb250ZXh0OiByZXNwb25zZS5zYW1sQ29udGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24uYXBpS2V5LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkb25lID0gKCkgPT4gd2luZG93LnNldFRpbWVvdXQoY2FsbEZpbmFsaXplLCBzaW5nbGVTUFRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24ubG9nb3V0VVJMKSBvcGVuSWZyYW1lKGNvbmZpZ3VyYXRpb24ubG9nb3V0VVJMLCBkb25lLCBzaW5nbGVTUFRpbWVvdXQpO1xyXG4gICAgICAgICAgICBlbHNlIGRvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGxvZ291dChhY3Rpb24uc2FtbENvbnRleHQsIHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JDb2RlID09PSBHU0Vycm9ycy5PSyAmJiByZXNwb25zZS5vcmlnaW5hbFJlc3BvbnNlICYmIHJlc3BvbnNlLm9yaWdpbmFsUmVzcG9uc2UuZXJyb3JDb2RlID09PSBHU0Vycm9ycy5VTkFVVEhPUklaRURfVVNFUikge1xyXG4gICAgICAgICAgICAvLyB0cnkgbG9nb3V0IGFnYWluIC0gdGhpcyB0aW1lIHdpdGhvdXQgdGhlIGxvZ2luIHRva2VuXHJcbiAgICAgICAgICAgIHJldHVybiBsb2dvdXQoYWN0aW9uLnNhbWxDb250ZXh0LCBvbkxvZ291dFJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvbkxvZ291dFJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IElNYXAsIHVybFBhcmFtcyB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gUHJveHlNb2RlIHtcclxuICAgIF91bmRlZmluZWQsXHJcbiAgICAvLyBTU09cclxuICAgIGxvZ2luLFxyXG4gICAgZm9yY2VMb2dpbixcclxuICAgIHBhc3NpdmVMb2dpbixcclxuICAgIGFmdGVyTG9naW4sIC8vIHVzZWQgaW50ZXJuYWxseSBieSBqc1Nka1xyXG4gICAgaW5pdFNTTywgLy8gdXNlZCBpbnRlcm5hbGx5IGJ5IGpzU2RrXHJcbiAgICAvLyBTTE9cclxuICAgIGxvZ291dCxcclxuXHJcbiAgICAvLyBpbnRlcm5hbFxyXG4gICAgX2RlYnVnLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3h5QWN0aW9uIHtcclxuICAgIG1vZGU6IFByb3h5TW9kZTtcclxuICAgIHNhbWxDb250ZXh0OiBzdHJpbmc7XHJcbiAgICBzcE5hbWU6IHN0cmluZztcclxuICAgIHBhcmFtczogSU1hcDxzdHJpbmc+O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVybChxdWVyeTogc3RyaW5nKTogSVByb3h5QWN0aW9uIHtcclxuICAgIHZhciBwYXJhbXMgPSB1cmxQYXJhbXMocXVlcnkpO1xyXG5cclxuICAgIHZhciBtb2RlID0gUHJveHlNb2RlW3BhcmFtc1snbW9kZSddXTtcclxuICAgIHZhciBzYW1sQ29udGV4dCA9IHBhcmFtc1snc2FtbENvbnRleHQnXTtcclxuICAgIHZhciBzcE5hbWUgPSBwYXJhbXNbJ3NwTmFtZSddO1xyXG5cclxuICAgIC8vIF9hZnRlckxvZ2luIGNhbiBjb21lIHdpdGhvdXQgc2FtbENvbnRleHQgb3IgbW9kZVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbW9kZTogbW9kZSxcclxuICAgICAgICBzYW1sQ29udGV4dDogc2FtbENvbnRleHQsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICAgICAgc3BOYW1lOiBzcE5hbWUsXHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IElDb25maWd1cmF0aW9uIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9JQ29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IElQcm94eUFjdGlvbiwgUHJveHlNb2RlIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9wYXJzZVVybCc7XHJcbmltcG9ydCB7IHByb2Nlc3NMb2dpbiwgcHJvY2Vzc0ZvcmNlTG9naW4sIHByb2Nlc3NBZnRlckxvZ2luLCBwcm9jZXNzUGFzc2l2ZUxvZ2luLCBwcm9jZXNzSW5pdFNTTyB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvbG9naW4nO1xyXG5pbXBvcnQgeyBwcm9jZXNzTG9nb3V0IH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9sb2dvdXQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSZXF1ZXN0KGFjdGlvbjogSVByb3h5QWN0aW9uLCBjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbikge1xyXG4gICAgYWN0aW9uLm1vZGUgPSBhY3Rpb24ubW9kZSB8fCBQcm94eU1vZGUuYWZ0ZXJMb2dpbjtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi5tb2RlKSB7XHJcbiAgICAgICAgLy8gU1NPIC0gc3AgaW5pdGlhdGVkIGxvZ2luXHJcbiAgICAgICAgY2FzZSBQcm94eU1vZGUubG9naW46XHJcbiAgICAgICAgICAgIHByb2Nlc3NMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFByb3h5TW9kZS5mb3JjZUxvZ2luOlxyXG4gICAgICAgICAgICBwcm9jZXNzRm9yY2VMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFByb3h5TW9kZS5hZnRlckxvZ2luOiAvLyBoYW5kbGluZyByZXNwb25zZXMgZnJvbSBsb2dpblVybCBhZnRlciBsb2dpbiBwZXJmb3JtZWRcclxuICAgICAgICAgICAgcHJvY2Vzc0FmdGVyTG9naW4oYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBQcm94eU1vZGUucGFzc2l2ZUxvZ2luOlxyXG4gICAgICAgICAgICBwcm9jZXNzUGFzc2l2ZUxvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBTU08gLSBpZHAgaW5pdGlhdGVkIGxvZ2luXHJcbiAgICAgICAgY2FzZSBQcm94eU1vZGUuaW5pdFNTTzogLy8gaWRwIGluaXRpYXRlZCBsb2dpblxyXG4gICAgICAgICAgICBwcm9jZXNzSW5pdFNTTyhhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gU0xPIC0gc3AgaW5pdGlhdGVkIGxvZ291dFxyXG4gICAgICAgIGNhc2UgUHJveHlNb2RlLmxvZ291dDpcclxuICAgICAgICAgICAgcHJvY2Vzc0xvZ291dChhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIG1vZGUnKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElNYXA8VD4ge1xyXG4gICAgW25hbWU6IHN0cmluZ106IFQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVybFBhcmFtcyhxdWVyeTogc3RyaW5nKSB7XHJcbiAgICBpZiAocXVlcnkuaW5kZXhPZignPycpID4gLTEpIHF1ZXJ5ID0gcXVlcnkuc3Vic3RyaW5nKHF1ZXJ5LmluZGV4T2YoJz8nKSArIDEpO1xyXG5cclxuICAgIHZhciBxdWVyeVBhcnRzID0gcXVlcnkuc3BsaXQoLyYvKTtcclxuXHJcbiAgICB2YXIgcGFyYW1zOiBJTWFwPHN0cmluZz4gPSB7fTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXJ5UGFydHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB2YXIgcGFyYW0gPSBxdWVyeVBhcnRzW2ldO1xyXG5cclxuICAgICAgICBpZiAocGFyYW0uaW5kZXhPZignPScpID09PSAtMSkgY29udGludWU7XHJcblxyXG4gICAgICAgIHZhciBwYXJhbVBhcnRzID0gcGFyYW0uc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtUGFydHMubGVuZ3RoICE9PSAyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgcGFyYW1zW3BhcmFtUGFydHNbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtUGFydHNbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJhbXM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5JZnJhbWUodXJsLCBkb25lOiBGdW5jdGlvbiwgdGltZW91dDogbnVtYmVyKSB7XHJcbiAgICB2YXIgaGFuZGxlckNhbGxlZCA9IGZhbHNlO1xyXG4gICAgdmFyIGxvYWRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghaGFuZGxlckNhbGxlZCkge1xyXG4gICAgICAgICAgICBoYW5kbGVyQ2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2lneWEudXRpbHMuc2NyaXB0LnRyaWdnZXJSZXNvdXJjZSh1cmwsIGxvYWRIYW5kbGVyLCBnaWd5YS51dGlscy5zY3JpcHQuUmVzb3VyY2VUeXBlcy5pZnJhbWUsIGZhbHNlKTtcclxuICAgIGlmICh0aW1lb3V0KSBzZXRUaW1lb3V0KGxvYWRIYW5kbGVyLCB0aW1lb3V0KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyb3JJbmZvLCBjb250ZXh0KSB7XHJcbiAgICAvLyBUT0RPIHJlZGlyZWN0IGFuIGludGVybmFsIGVuZHBvaW50IHNvIHRoYXQgdGhlIHNlcnZlciB3aWxsIGhhdmUgYSBjaGFuY2UgdG8gZGVhbCB3aXRoIGVycm9ycyBpbiBpdHMgZmxvdyBjb3JyZWN0bHlcclxuXHJcbiAgICBpZiAoZ2lneWEuc2FtbENvbmZpZy5lcnJvclBhZ2VVUkwpIHtcclxuICAgICAgICByZXR1cm4gcmVkaXJlY3QoZ2lneWEuc2FtbENvbmZpZy5lcnJvclBhZ2VVUkwsIGNvbnRleHQsIHtcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9ySW5mbyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RUb1NhbWxFbmRQb250KGVuZFBvaW50OiBzdHJpbmcsIHBhcmFtczogYW55LCBhcGlLZXk6IHN0cmluZykge1xyXG4gICAgLy8gcmVkaXJlY3RzIHRvIGFuIGludGVybmFsIHNhbWwgZW5kcG9pbnQgd2l0aCB0aGUgZ2l2ZW4gcGFyYW1ldGVyc1xyXG4gICAgdmFyIGRvbWFpbiA9IGdpZ3lhLl8uZ2V0QXBpRG9tYWluKCdmaWRtJyk7XHJcblxyXG4gICAgdmFyIHVybCA9IGBodHRwczovLyR7ZG9tYWlufS9zYW1sL3YyLjAvJHthcGlLZXl9LyR7ZW5kUG9pbnR9YDtcclxuXHJcbiAgICBjb25zdCBnbWlkVGlja2V0ID0gZ2lneWEuXy5hcGlBZGFwdGVyLmdldEdtaWRUaWNrZXQoKTtcclxuICAgIGlmIChnbWlkVGlja2V0KSBwYXJhbXMuZ21pZFRpY2tldCA9IGdtaWRUaWNrZXQ7XHJcblxyXG4gICAgcmVkaXJlY3QoXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICAgICAgICAgIGFwaUtleTogYXBpS2V5LFxyXG4gICAgICAgICAgICBlbmRQb2ludDogZW5kUG9pbnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJhbXMsXHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRVcmxQYXJhbXModXJsOiBzdHJpbmcsIHBhcmFtczogYW55KSB7XHJcbiAgICByZXR1cm4gZ2lneWEudXRpbHMuVVJMLmFkZFBhcmFtc1RvVVJMKHVybCwgcGFyYW1zKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3QodXJsOiBzdHJpbmcsIHVybFZhbHVlczogYW55LCBwYXJhbXM6IGFueSkge1xyXG4gICAgLy8gcmVkaXJlY3QgdG8gYW55IGdpdmVuIHVybFxyXG4gICAgdXJsID0gdGVtcGxhdGVGaWxsKHVybCwgdXJsVmFsdWVzKTtcclxuICAgIHVybCA9IHNldFVybFBhcmFtcyh1cmwsIHBhcmFtcyk7XHJcblxyXG4gICAgbG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgIC8vd2luZG93Lm9wZW4odXJsLCAnX3NlbGYnKTsgLy8gVGhpcyBicmVha3MgcG9zdE1lc3NhZ2UgbWVzc2FnaW5nIC0gcmVwbGFjZSB0aGUgd2luZG93Lm9wZW5lclxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dpblRva2VuKGFwaUtleTogc3RyaW5nKSB7XHJcbiAgICAvLyByZXR1cm5zIGN1cnJlbnQgbG9naW4gdG9rZW4gZGlyZWN0bHkgZnJvbSB0aGUgd2ViIGFkYXB0ZXJcclxuICAgIHJldHVybiBnaWd5YS5fLmFwaUFkYXB0ZXJzLndlYi50b2tlblN0b3JlLmdldChhcGlLZXkpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbnRleHRLZXkoYXBpS2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAnZ2lnX3NhbWxDb250ZXh0XycgKyBhcGlLZXk7XHJcbn1cclxudmFyIHNlc3Npb25TdG9yYWdlVGltZW91dCA9IDEwICogNjAgKiAxMDAwO1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yZWRDb250ZXh0IHtcclxuICAgIHNhbWxDb250ZXh0OiBzdHJpbmc7XHJcbiAgICBzcE5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUNvbnRleHQoYXBpS2V5OiBzdHJpbmcsIGNvbnRleHQ6IElTdG9yZWRDb250ZXh0LCBkb25lOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAvLyBzYXZlIGNvbnRleHQgZm9yIG5leHQgcmV0cml2YWwsIGlmIG5vdCByZXR1cm5lZCBmcm9tIGxvZ2luVXJsXHJcbiAgICB2YXIga2V5ID0gY29udGV4dEtleShhcGlLZXkpO1xyXG5cclxuICAgIGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZS5nZXQoa2V5LCBzZXNzaW9uU3RvcmFnZVRpbWVvdXQsIChzYXZlZENvbnRleHRzOiBJU3RvcmVkQ29udGV4dFtdKSA9PiB7XHJcbiAgICAgICAgc2F2ZWRDb250ZXh0cyA9IHNhdmVkQ29udGV4dHMgfHwgW107XHJcbiAgICAgICAgc2F2ZWRDb250ZXh0cy5wdXNoKGNvbnRleHQpO1xyXG5cclxuICAgICAgICBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUuc2V0KGtleSwgc2F2ZWRDb250ZXh0cyk7XHJcbiAgICAgICAgZG9uZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250ZXh0KGFwaUtleTogc3RyaW5nLCBjYWxsYmFjazogKGNvbnRleHQ6IElTdG9yZWRDb250ZXh0KSA9PiB2b2lkKSB7XHJcbiAgICAvLyBsb2FkIGNvbnRleHQgaWYgd2FzIG5vdCBwcm92aWRlZCBpbiB1cmxcclxuICAgIHZhciBrZXkgPSBjb250ZXh0S2V5KGFwaUtleSk7XHJcblxyXG4gICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLmdldChrZXksIHNlc3Npb25TdG9yYWdlVGltZW91dCwgKHNhdmVkQ29udGV4dHM6IElTdG9yZWRDb250ZXh0W10pID0+IHtcclxuICAgICAgICBzYXZlZENvbnRleHRzID0gc2F2ZWRDb250ZXh0cyB8fCBbXTtcclxuICAgICAgICB2YXIgbGFzdENvbnRleHQgPSBzYXZlZENvbnRleHRzLnNoaWZ0KCkgfHwgPElTdG9yZWRDb250ZXh0Pnt9O1xyXG5cclxuICAgICAgICBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUuc2V0KGtleSwgc2F2ZWRDb250ZXh0cyk7XHJcbiAgICAgICAgY2FsbGJhY2sobGFzdENvbnRleHQpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmlsbCh0ZW1wbGF0ZTogc3RyaW5nLCBwYXJhbXM6IGFueSkge1xyXG4gICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBwYXJhbXMpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUpTT04oanNvbjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gZ2lneWEudXRpbHMuSlNPTi5kZXNlcmlhbGl6ZShqc29uLCAnJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdE1lcmdlPFQ+KC4uLm9iamVjdHM6IGFueVtdKSB7XHJcbiAgICByZXR1cm4gPFQ+Z2lneWEudXRpbHMub2JqZWN0Lm1lcmdlKG9iamVjdHMpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvZ2dlZEluKGNhbGxiYWNrOiAobG9nZ2VkSW46IGJvb2xlYW4pID0+IHZvaWQsIGFwaUtleTogc3RyaW5nKSB7XHJcbiAgICB2YXIgdXNlcktleSA9IGdldExvZ2luVG9rZW4oYXBpS2V5KTtcclxuICAgIHZhciBsb2dnZWRJbiA9IEJvb2xlYW4odXNlcktleSk7XHJcblxyXG4gICAgY2FsbGJhY2sobG9nZ2VkSW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoc2FtbENvbnRleHQ6IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZSkgPT4gdm9pZCkge1xyXG4gICAgZ2lneWEuc29jaWFsaXplLmxvZ291dCh7XHJcbiAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxyXG4gICAgICAgIHNhbWxDb250ZXh0OiBzYW1sQ29udGV4dCxcclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCB2YXIgZGVidWcgPSBmYWxzZTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdpZ3lhU2NyaXB0RWxlbWVudChmaWxlTmFtZXM6IHN0cmluZ1tdKTogSFRNTFNjcmlwdEVsZW1lbnQge1xyXG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICB2YXIgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQ7XHJcbiAgICB2YXIgZ2lneWFDZG5SZWdleCA9IC9cXC9cXC9jZG4ocyk/XFwuKHJ1MVxcLik/Z2lneWEuY29tLztcclxuICAgIGZvciAodmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgdmFyIHNjcmlwdCA9IHNjcmlwdHNbaV07XHJcbiAgICAgICAgdmFyIHNyYyA9IHNjcmlwdC5zcmMudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoc3JjICE9PSAnJykge1xyXG4gICAgICAgICAgICBpZiAoZ2lneWFDZG5SZWdleC50ZXN0KHNyYykgfHwgc3JjLmluZGV4T2YoJz9hcGlrZXk9JykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzRmlsZU5hbWVFeGlzdEluU3JjID0gZmlsZU5hbWVzLmxlbmd0aCA9PT0gMCB8fCBmaWxlTmFtZXMuc29tZShmaWxlTmFtZSA9PiBzcmMuaW5kZXhPZihmaWxlTmFtZSkgPiAtMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGaWxlTmFtZUV4aXN0SW5TcmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50ID0gc2NyaXB0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNjcmlwdEVsZW1lbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZUpzU2RrTG9hZGVkKFxyXG4gICAgYXBpS2V5OiBzdHJpbmcsXHJcbiAgICBkb25lOiAoKSA9PiB2b2lkLFxyXG4gICAgYXN5bmM6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgdXNlRXhpc3RpbmdHaWd5YURvbWFpbiA9IGZhbHNlLFxyXG4gICAgdXNlWE1MSFRUUFJlcXVlc3Q6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgIHVzZVJlbGF0aXZlUGF0aDogYm9vbGVhbiA9IGZhbHNlLFxyXG4pIHtcclxuICAgIGlmIChnaWd5YVsnaXNHaWd5YSddKSB7XHJcbiAgICAgICAgLy8gd2UgaGF2ZSBnaWd5YSBvbiBwYWdlXHJcbiAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmRlYnVnKCckRyBnaWd5YS1qc1NkayBhbHJlYWR5IGxvYWRlZC4nKTtcclxuICAgICAgICBpZiAoIWdpZ3lhWydpc1JlYWR5J10pIHtcclxuICAgICAgICAgICAgLy8gYm9vdHN0cmFwIGluIHByb2Nlc3MgLSB3YWl0IGZvciBib290c3RyYXAgdG8gZmluaXNoXHJcbiAgICAgICAgICAgIHdhaXRGb3JHaWd5YVNlcnZpY2VSZWFkeShkb25lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBmaW5pc2hlZCBib290c3RyYXAgLSBnaWd5YSBzZXJ2aWNlIGlzIHJlYWR5XHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGdpZ3lhIGlzIG5vdCBvbiBwYWdlXHJcbiAgICAgICAgbG9hZEdpZ3lhSlMoYXBpS2V5LCBhc3luYywgdXNlRXhpc3RpbmdHaWd5YURvbWFpbiwgdXNlWE1MSFRUUFJlcXVlc3QsIHVzZVJlbGF0aXZlUGF0aCk7XHJcbiAgICAgICAgd2FpdEZvckdpZ3lhU2VydmljZVJlYWR5KGRvbmUpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGxvYWRHaWd5YUpTKGFwaUtleSwgYXN5bmMsIHVzZUV4aXN0aW5nR2lneWFEb21haW4sIHVzZVhNTEhUVFBSZXF1ZXN0LCB1c2VSZWxhdGl2ZVBhdGgpIHtcclxuICAgIGdpZ3lhWydpc0dpZ3lhJ10gPSB0cnVlOyAvLy8gaW1wb3J0YW50ISBzbyB3b24ndCBkaXNjYXJkIGN1cnJlbnQgbW9kdWxlcy5cclxuXHJcbiAgICB2YXIgc2VydmVyO1xyXG4gICAgaWYgKHVzZUV4aXN0aW5nR2lneWFEb21haW4pIHtcclxuICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhLmhyZWYgPSBnZXRHaWd5YVNjcmlwdEVsZW1lbnQoW10pLnNyYztcclxuICAgICAgICBzZXJ2ZXIgPSBhLnByb3RvY29sICsgJy8vJyArIGEuaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VydmVyID0gJ2h0dHBzOi8vY2Rucy5naWd5YS5jb20nO1xyXG4gICAgfVxyXG4gICAgdmFyIHNyYyA9IGAke3VzZVJlbGF0aXZlUGF0aCA/ICcnIDogc2VydmVyfS9qcy9naWd5YS5qcz9hcGlLZXk9JHthcGlLZXl9YDtcclxuICAgIHZhciBzY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBzY3JpcHRFbGVtZW50LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JzsgLy8gYXBwbGljYXRpb24vZWNtYXNjcmlwdCBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFOFxyXG5cclxuICAgIGlmICghdXNlWE1MSFRUUFJlcXVlc3QpIHtcclxuICAgICAgICBzY3JpcHRFbGVtZW50LnNyYyA9IHNyYztcclxuICAgICAgICBzY3JpcHRFbGVtZW50LmFzeW5jID0gYXN5bmM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vLyBOb3RlIHRoYXQgY3Jvc3MtZG9tYWluIFhNTEh0dHBSZXF1ZXN0IHJlcXVpcmVzIHRoZSBzZXJ2ZXIgdG8gcmV0dXJuIHRoZSBoZWFkZXI6IFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luOiA8b3JpZ2luPiB8ICpcIlxyXG4gICAgICAgIHZhciB4aHJPYmogPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHJPYmoub3BlbignR0VUJywgc3JjLCBhc3luYyk7XHJcbiAgICAgICAgeGhyT2JqLnNlbmQoJycpO1xyXG4gICAgICAgIHNjcmlwdEVsZW1lbnQudGV4dCA9IHhock9iai5yZXNwb25zZVRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlYnVnKSBjb25zb2xlLmRlYnVnKCckRyBsb2FkaW5nIGdpZ3lhLWpzU2RrLi4uJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uIHdhaXRGb3JHaWd5YVNlcnZpY2VSZWFkeShkb25lKSB7XHJcbiAgICAvLyBzZXQgc29jaWFsaXplLmpzIGxvYWQgaGFuZGxlclxyXG4gICAgdmFyIHByZXZIYW5kbGVyID0gbnVsbDtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93WydvbkdpZ3lhU2VydmljZVJlYWR5J10gIT09ICd1bmRlZmluZWQnKSBwcmV2SGFuZGxlciA9IHdpbmRvd1snb25HaWd5YVNlcnZpY2VSZWFkeSddO1xyXG5cclxuICAgIHdpbmRvd1snb25HaWd5YVNlcnZpY2VSZWFkeSddID0gZnVuY3Rpb24oLi4uYXJncykge1xyXG4gICAgICAgIGlmIChwcmV2SGFuZGxlcikgcHJldkhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XHJcblxyXG4gICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5kZWJ1ZygnJEcgZ2lneWEtanNTZGsgbG9hZGVkIScpO1xyXG4gICAgICAgIGRvbmUoKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZUJhc2VQbHVnaW5Mb2FkZWQoYXBpS2V5OiBzdHJpbmcsIGRvbmU6ICgpID0+IHZvaWQsIGFzeW5jOiBib29sZWFuID0gdHJ1ZSwgdXNlWE1MSFRUUFJlcXVlc3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgZW5zdXJlSnNTZGtMb2FkZWQoXHJcbiAgICAgICAgYXBpS2V5LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGdpZ3lhWydfJ11bJ3BsdWdpbnMnXVsnQmFzZVBsdWdpbiddICYmICFnaWd5YVsnXyddWydwbHVnaW5zJ11bJ0Jhc2VQbHVnaW4nXVsnaXNNb2NrJ10pIHtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhWydfJ11bJ2xvYWRCYXNlUGx1Z2luJ10oeyBvbkxvYWQ6IGRvbmUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jLFxyXG4gICAgICAgIHVzZVhNTEhUVFBSZXF1ZXN0LFxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9