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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/utils/Gigya.Js.Plugins.Debug/app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = __webpack_provided_Object_dot_assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = gigya.Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new gigya.Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? gigya.Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new gigya.Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { gigya.Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

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

/***/ "./src/core/Gigya.Js/app/InternalFlows.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/InternalFlows.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var localStorageUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var MessagingMethod;
(function (MessagingMethod) {
    MessagingMethod[MessagingMethod["LocalStorageListener"] = 0] = "LocalStorageListener";
    MessagingMethod[MessagingMethod["PostMessage"] = 1] = "PostMessage";
    MessagingMethod[MessagingMethod["Flash"] = 2] = "Flash";
})(MessagingMethod = exports.MessagingMethod || (exports.MessagingMethod = {}));
function checkCompleteRegistration(res, params, methodName, callback) {
    var screenSet;
    var retry;
    var pending = false;
    if (res['errorCode'] == GSErrors_1.GSErrors.AFTER_EMAIL_VERIFICATION) {
        // Handle autoLogin from registration link
        window.gigya.logger.info('finalizing registration after email verification');
        pending = true;
        window.gigya.accounts.finalizeRegistration({
            regToken: res['regToken'],
            ignoreApiQueue: true,
            callback: callback,
        });
    }
    else if (!params['ignoreInterruptions'] &&
        !params['dontHandleScreenSet'] &&
        (((res['regToken'] || params['regToken']) && // has regToken
            (res['errorCode'] == GSErrors_1.GSErrors.OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS || // socialLogin/setAccountInfo saved with loginID exist error
                res['errorCode'] == GSErrors_1.GSErrors.LOGIN_IDENTIFIER_EXISTS)) || // loginID exists
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_REGISTRATION || // pending registration
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_VERIFICATION || // pending email verification
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_MISSING_LOGINID || // pending LoginID
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_TFA_VERIFICATION || // pending TFA verification
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_TFA_REGISTRATION || // pending TFA registration
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_RECENT_LOGIN || // pending recent login
            res['errorCode'] == GSErrors_1.GSErrors.PENDING_PASSWORD_CHANGE) // pending password change
    ) {
        var newModal;
        if (res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_RECENT_LOGIN) {
            retry = true;
            newModal = true;
        }
        if (params['defaultMobileRegScreenSet'] && LocalInfo_1.localInfo.isMobile) {
            screenSet = params['defaultMobileRegScreenSet'];
        }
        else if (params['defaultRegScreenSet']) {
            screenSet = params['defaultRegScreenSet'];
        }
    }
    if (screenSet) {
        window.gigya.logger.info("showing screenset '" + screenSet + "' for errorCode " + res['errorCode']);
        window.gigya.logger.group(screenSet);
        window.gigya.accounts.showScreenSet({
            ignoreApiQueue: true,
            newModal: newModal,
            screenSet: screenSet,
            initialMethod: methodName,
            initialResponse: res,
            suppressLoginEvent: params['suppressLoginEvent'],
            onError: function (e) {
                callback(res);
            },
            onHide: function (e) {
                window.gigya.logger.groupEnd(screenSet);
                if (e.reason === 'finished' && e.user) {
                    var successResponse = {
                        errorCode: 0,
                        userInfo: e.user,
                        source: e.source
                    };
                    callback(successResponse, true, retry);
                }
                else {
                    callback(res);
                }
            },
        });
    }
    else if (!pending) {
        callback(res);
    }
}
exports.checkCompleteRegistration = checkCompleteRegistration;
function getGigyaSettings(group) {
    var gigyaSettings = localStorageUtils.getObject('gigyaSettings');
    return JSONUtils.serialize(gigyaSettings[group]);
}
exports.getGigyaSettings = getGigyaSettings;
function setGigyaSettings(group, settings) {
    var _a;
    var gigyaSettings = localStorageUtils.getObject('gigyaSettings', (_a = {}, _a[group] = {}, _a));
    for (var p in settings) {
        gigyaSettings[group][p] = settings[p];
    }
    localStorageUtils.setItem('gigyaSettings', JSONUtils.serialize(gigyaSettings));
}
exports.setGigyaSettings = setGigyaSettings;
function delGigyaSettings(group) {
    if (!group) {
        localStorageUtils.removeItem('gigyaSettings');
    }
    else {
        var gigyaSettings = localStorageUtils.getObject('gigyaSettings');
        if (gigyaSettings) {
            delete gigyaSettings[group];
            localStorageUtils.setItem('gigyaSettings', JSONUtils.serialize(gigyaSettings));
        }
    }
}
exports.delGigyaSettings = delGigyaSettings;
function handleSpecialFields(o) {
    var collection = window.gigya.socialize.Collection;
    var toTyped = function (arr, ctor) {
        var oarr = [];
        var i = 0;
        var el = arr[i];
        while (el) {
            oarr.push(new ctor(el));
            if (oarr[i].identities) {
                convertIdentitiesArrayToObject(oarr[i]);
            }
            el = arr[++i];
        }
        return oarr;
    };
    if (o.photos)
        o.photos = new collection(o.photos, 'photoID');
    if (o.albums)
        o.albums = new collection(o.albums, 'albumID');
    if (o.contacts)
        o.contacts = new collection(toTyped(o.contacts, window.gigya.socialize.Contact), 'email');
    if (o.friend)
        o.friend = new collection(toTyped(o.friend, window.gigya.socialize.Friend), 'UID');
    if (o.user)
        o.user = new window.gigya.socialize.User(o.user);
    if (o.friends && o.friends instanceof Array) {
        var arUIDs = [];
        for (var i = 0; i < o.friends.length; i++) {
            arUIDs.push(o.friends[i].UID);
        }
        o.UIDs = arUIDs.join(',');
        o.friends = new collection(toTyped(o.friends, window.gigya.socialize.Friend), 'UID');
    }
}
exports.handleSpecialFields = handleSpecialFields;
function convertIdentitiesArrayToObject(o) {
    if (o.identities == null) {
        o.identities = {};
        return;
    }
    if (o.identities.constructor != Array) {
        return;
    }
    var identitiesArray = o.identities;
    o.identities = {};
    for (var i = 0; i < identitiesArray.length; i++) {
        o.identities[identitiesArray[i].provider] = new window.gigya.socialize.Identity(identitiesArray[i]);
    }
}
exports.convertIdentitiesArrayToObject = convertIdentitiesArrayToObject;
function addUserInfoToEvent(response, targetObject, addLoginProperties, useBasePhotoURL) {
    var oUser = response['user'] || response['userInfo'];
    if (targetObject == null)
        targetObject = {};
    if (oUser != null) {
        targetObject['user'] = objectUtils.clone(oUser);
        if (response['isLoggedIn'] != null)
            targetObject['user']['isLoggedIn'] = response['isLoggedIn'];
        if (response['isSiteUID'] != null)
            targetObject['user']['isSiteUID'] = response['isSiteUID'];
        if (response['iRank'] != null)
            targetObject['user']['iRank'] = response['iRank'];
    }
    if (addLoginProperties) {
        objectUtils.extractProperties(response, targetObject, 'signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|signKeysUIDSignature|dataCenter|id_token');
        if (targetObject['user'] != null) {
            targetObject['UID'] = oUser.UID;
            targetObject['isSiteUID'] = oUser.isSiteUID;
            // isSiteUID is temporary for https://gigya.my.salesforce.com/5004000000T3qcZ
        }
    }
    return targetObject;
}
exports.addUserInfoToEvent = addUserInfoToEvent;
function sendEmailNative(params) {
    var userAction = params['userAction'] || {};
    var subject = userAction['title'] || '';
    var body = userAction['linkBack'] || '';
    document.location.href = 'mailto:?to=&subject=' + URLUtils.URLEncode(subject) + '&body=' + URLUtils.URLEncode(body);
    window.gigya.socialize.sendEmail(params, { dontSendEmail: true }); // To report that send without sending it
}
exports.sendEmailNative = sendEmailNative;


/***/ }),

/***/ "./src/core/Gigya.Js/app/LocalInfo.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/LocalInfo.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var domains_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
var userAgent = navigator.userAgent.toLowerCase();
exports.localInfo = {
    baseDomain: '',
    isBrowserSupportsFilesAPI: (function () {
        return typeof FileReader === 'function' || typeof FileReader === 'object';
    })(),
    initTime: new Date(),
    version: 0,
    pageDomain: document.location.hostname,
    protocol: document.location.protocol == 'http:' ? 'http' : 'https',
    userAgent: userAgent,
    isWin: userAgent.indexOf('win') != -1,
    isIE: userAgent.indexOf('msie') != -1 || (userAgent.indexOf('mozilla') != -1 && userAgent.indexOf('trident') != -1),
    isIE6: userAgent.indexOf('msie 6.') != -1,
    isIE7: userAgent.indexOf('msie 7.') != -1,
    isIE8: userAgent.indexOf('msie 8.') != -1,
    isIE9: userAgent.indexOf('msie 9.') != -1,
    isIE10: userAgent.indexOf('msie 10.') != -1,
    isIE11: userAgent.indexOf('mozilla') != -1 && userAgent.indexOf('trident/7.0') != -1,
    isEdge: userAgent.indexOf('edge') != -1,
    isIOS: userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipad') != -1 || userAgent.indexOf('ipod') != -1,
    isSafari534: userAgent.indexOf('safari/534') != -1,
    isWeChat: userAgent.indexOf('micromessenger') != -1,
    iosVersion: (function () {
        if (userAgent.indexOf('applewebkit') != -1 && userAgent.indexOf('version/') != -1) {
            return parseInt(userAgent.split('version/')[1].split(' ')[0]);
        }
        else
            return 0;
    })(),
    isAndroid: userAgent.indexOf('android') != -1,
    isAndroidBrowser: (function (userAgent) {
        if (userAgent.indexOf('mozilla/5.0') === -1)
            return false;
        if (userAgent.indexOf('android 4') === -1)
            return false;
        if (userAgent.indexOf('applewebkit') === -1)
            return false;
        if (userAgent.indexOf('windows phone') !== -1)
            return false;
        // Special user agents found so far that violate the existance of chrome rule
        // Bug 38367 Android Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-us; SAMSUNG GT-I9500 Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19
        // Bug 40209 Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; SAMSUNG SGT-I747 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Mobile Safari/537.36
        // Windows Phone Browser: Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 920) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537
        // Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-gb; SAMSUNG GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36
        var chromeInfo = /chrome\/(\d+)/.exec(userAgent);
        if (!chromeInfo)
            return true;
        var chromeVersion = parseInt(chromeInfo[1]);
        return chromeVersion < 20;
    })(userAgent),
    currentBrowser: '',
    androidVersion: (function () {
        if (userAgent.indexOf('android') != -1) {
            return parseFloat(userAgent.slice(userAgent.indexOf('android') + 8));
        }
        else
            return 0;
    })(),
    isChrome: userAgent.indexOf('chrome') != -1 && userAgent.indexOf('edge') == -1,
    isGoogleBot: userAgent.indexOf('googlebot') != -1,
    isFF: userAgent.indexOf('firefox') != -1,
    isOpera: userAgent.indexOf('opera') != -1,
    isSafari: navigator.appVersion &&
        navigator.appVersion.toLowerCase().indexOf('safari') != -1 &&
        navigator.appVersion.toLowerCase().indexOf('chrome') == -1 &&
        userAgent.indexOf('android') == -1,
    isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    isIOSChrome: userAgent.indexOf('crios') != -1,
    isMAC: navigator.appVersion && navigator.appVersion.toLowerCase().indexOf('mac') != -1,
    isWindowsPhone: userAgent.indexOf('windows phone') != -1,
    isFacebookBrowser: userAgent.indexOf('fban') != -1 || userAgent.indexOf('fbav') != -1,
    supportsPostMessage: window.postMessage != null && (userAgent.indexOf('msie') == -1 || userAgent.indexOf('iemobile') != -1),
    supportsLocalStorage: false,
    supportsSessionStorage: false,
    supportsFlash: (function () {
        // http://stackoverflow.com/questions/998245/how-can-i-detect-if-flash-is-installed-and-if-not-display-a-hidden-div-that-inf
        var supportsFlash = false;
        try {
            if (navigator.mimeTypes &&
                navigator.mimeTypes['application/x-shockwave-flash'] != undefined &&
                navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                supportsFlash = true;
            }
            else {
                var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (fo) {
                    supportsFlash = true;
                }
            }
        }
        catch (e) { }
        return supportsFlash;
    })(),
    quirksMode: document.compatMode == 'BackCompat' && userAgent.indexOf('msie') != -1,
    backCompat: document.compatMode == 'BackCompat',
    // TODO: Add isTablet function for devices non-Mobile
    isMobile: (function () {
        var mobileClients = [
            'iphone',
            'ipod',
            'android',
            'midp',
            '240x320',
            'blackberry',
            'netfront',
            'nokia',
            'panasonic',
            'portalmmm',
            'sharp',
            'sie-',
            'sonyericsson',
            'symbian',
            'windows ce',
            'benq',
            'mda',
            'mot-',
            'opera mini',
            'philips',
            'pocket pc',
            'sagem',
            'samsung',
            'htc',
        ];
        for (var i in mobileClients) {
            if (userAgent.indexOf(mobileClients[i]) != -1) {
                return true;
            }
        }
        return false;
    })(),
    isMobileApp: (function () {
        if (!document.getElementsByTagName)
            // for old IE
            return false;
        var metaTags = document.getElementsByTagName('meta');
        for (var i = 0; i < metaTags.length; i++) {
            if (metaTags[i].getAttribute('name') == 'viewport') {
                var content = metaTags[i].getAttribute('content');
                if (content && content.indexOf('width=device-width') !== -1)
                    return true;
            }
        }
        return false;
    })(),
    isNativeMobileApp: false,
    isTouch: (function () {
        if ('ontouchstart' in window)
            // works on most browsers
            return true;
        if ('onmsgesturechange' in window) {
            // works on ie10
            // Try to determine if IE is open in metro mode. Metro doesn't allow activeX, that's the best test available as of IE11.
            try {
                new ActiveXObject('htmlfile');
                return false;
            }
            catch (e) {
                return true;
            }
        }
        return false;
    })(),
    isOnLine: function () { return navigator.onLine; },
    messagingMethod: 0
};
var isStorageEnabled = function (storageName) {
    try {
        var storage = window[storageName];
        if (!storage) {
            return false;
        }
        var testName = '_gig_localStorage_test';
        var testValue = 'just checking for localStorage';
        storage.setItem(testName, testValue);
        var result = storage.getItem(testName) === testValue;
        storage.removeItem(testName);
        return result;
    }
    catch (ex) {
        // Reasons:
        // - Inside 3rd party API proxy iFrame.
        // - Safari in incognito mode will error with "quota exceeded".
        // - Chrome with 3rd party cookies disabled will throw an error if you access the window.localStorage object in ANY way.
        return false;
    }
};
exports.localInfo.supportsLocalStorage = isStorageEnabled('localStorage');
exports.localInfo.supportsSessionStorage = isStorageEnabled('sessionStorage');
if (exports.localInfo.isIE11 && !window.indexedDB)
    // IE10-11 support postMessage between iframes but not inPrivate mode
    exports.localInfo.supportsPostMessage = false;
exports.localInfo.isMAC = exports.localInfo.isMAC && !exports.localInfo.isIOS;
var os = exports.localInfo.isWin
    ? 'windows'
    : exports.localInfo.isWindowsPhone
        ? 'winphone'
        : exports.localInfo.isIOS
            ? 'ios-v' + exports.localInfo.iosVersion
            : exports.localInfo.isMAC
                ? 'mac'
                : exports.localInfo.isAndroid
                    ? 'android'
                    : '';
if (os)
    os += ' ';
var browser = exports.localInfo.isChrome
    ? 'chrome'
    : exports.localInfo.isFF
        ? 'firefox'
        : exports.localInfo.isSafari
            ? 'safari'
            : exports.localInfo.isEdge
                ? 'edge'
                : exports.localInfo.isIE11
                    ? 'ie11'
                    : exports.localInfo.isIE10
                        ? 'ie10'
                        : exports.localInfo.isIE9
                            ? 'ie9'
                            : exports.localInfo.isIE8
                                ? 'ie8'
                                : '';
exports.localInfo.currentBrowser = os + browser;
var baseDomains;
if ((_b = (_a = window.gigya.partnerSettings) === null || _a === void 0 ? void 0 : _a.baseDomains) === null || _b === void 0 ? void 0 : _b.length) {
    baseDomains = window.gigya.partnerSettings.baseDomains;
}
else {
    if (window.self === window.top) {
        // only in the top frame
        window.gigya.logger.warn('gigya: missing base domains for site');
    }
    baseDomains = [document.location.hostname];
}
exports.localInfo.baseDomain = domains_1.getBaseDomain(baseDomains);


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/DOM.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/DOM.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var viewportUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/viewport */ "./src/core/Gigya.Js/app/Utils/viewport.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
exports._popupContainers = [];
exports._pseudoContainers = [];
var _nextZIndex = 999999999;
var backListener = null;
function getNextZIndex() {
    _nextZIndex++;
    return _nextZIndex;
}
exports.getNextZIndex = getNextZIndex;
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
function dispatch(el, eventName) {
    var event;
    try {
        event = new Event(eventName);
    }
    catch (e) {
        // IE10 and below support
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, {});
    }
    el.dispatchEvent(event);
}
exports.dispatch = dispatch;
function addButtonSubmitListener(el, handler, event, debugName) {
    if (event === void 0) { event = 'click'; }
    // Just in case the element does not exist.
    if (!el) {
        return;
    }
    el.setAttribute('role', 'button');
    if (el.getAttribute('tabindex') != '-1') {
        el.setAttribute('tabindex', '0');
    }
    addEventListener(el, event, function (e) { return handler(e); });
    addEventListener(el, 'keydown', function (e) {
        if ((e.which || e.keyCode) == 13) {
            e.preventDefault();
            handler(e);
        }
    });
}
exports.addButtonSubmitListener = addButtonSubmitListener;
function addEventListener(el, eventName, handler) {
    if (!el || !handler)
        return;
    if (el.addEventListener) {
        el.addEventListener(eventName, handler, true);
    }
    else {
        el.attachEvent('on' + eventName, handler);
    }
}
exports.addEventListener = addEventListener;
function removeEventListener(el, eventName, handler) {
    if (!handler)
        return;
    if (el.removeEventListener) {
        el.removeEventListener(eventName, handler, true);
    }
    else {
        el.detachEvent('on' + eventName, handler);
    }
}
exports.removeEventListener = removeEventListener;
function disableDefaultEventHandling(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    else if (window.event) {
        window.event.returnValue = false;
    }
}
exports.disableDefaultEventHandling = disableDefaultEventHandling;
function addDialogBackListener(handler) {
    _removeDialogBackListener();
    // This should fire when back is clicked
    backListener = function (e) {
        if (e && e.newURL && e.newURL.indexOf('|gigyaMobileDialog') == -1) {
            handler(e);
            _removeDialogBackListener();
        }
    };
    // hash could change right after the call if it was initiated from a link that didn't return false
    window.setTimeout(function () {
        if (window.location.hash.indexOf('|gigyaMobileDialog') == -1) {
            window.location.hash = window.location.hash + '|gigyaMobileDialog';
        }
        addEventListener(window, 'hashchange', backListener);
    }, 50);
}
exports.addDialogBackListener = addDialogBackListener;
function _removeDialogBackListener() {
    if (!backListener)
        return;
    removeEventListener(window, 'hashchange', backListener);
    backListener = null;
    //restore previous hash
    window.location.hash = window.location.hash.replace('|gigyaMobileDialog', '');
}
exports._removeDialogBackListener = _removeDialogBackListener;
function appendToBody(el, document) {
    if (document === void 0) { document = window.document; }
    if (!document.body)
        return;
    if (document.body.insertBefore && document.body.firstChild) {
        document.body.insertBefore(el, document.body.firstChild);
    }
    else {
        document.body.appendChild(el);
    }
}
exports.appendToBody = appendToBody;
function removeElement(el) {
    if (el && el.parentElement) {
        el.parentElement.removeChild(el);
    }
}
exports.removeElement = removeElement;
function isChildOf(child, parent) {
    var directParent = child.parentNode;
    while (directParent) {
        if (parent == directParent) {
            return true;
        }
        directParent = directParent.parentNode;
    }
    return false;
}
exports.isChildOf = isChildOf;
function isVisible(el) {
    while (el) {
        var computedStyle = getComputedStyle(el);
        if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
            return false;
        }
        else {
            el = el.parentElement;
        }
    }
    return true;
}
exports.isVisible = isVisible;
function getCenteredDivID(name) {
    return 'gig_' + LocalInfo_1.localInfo.initTime.getTime().toString() + '_' + name;
}
exports.getCenteredDivID = getCenteredDivID;
function createElementWithAttributes(domElemName, domElemAttrs) {
    var newDomElem = document.createElement(domElemName);
    if (domElemAttrs) {
        for (var elemAttr in domElemAttrs) {
            newDomElem[elemAttr] = domElemAttrs[elemAttr];
        }
    }
    return newDomElem;
}
exports.createElementWithAttributes = createElementWithAttributes;
function createTopLevelDiv(id) {
    var el = document.createElement('div');
    if (el.style.zIndex != null) {
        el.style.zIndex = '' + getNextZIndex();
    }
    el.innerHTML = '';
    if (id) {
        el.id = id;
    }
    if (document.body) {
        if (document.body.insertBefore && document.body.firstChild) {
            document.body.insertBefore(el, document.body.firstChild);
        }
        else if (document.body.appendChild) {
            document.body.appendChild(el);
        }
    }
    return el;
}
exports.createTopLevelDiv = createTopLevelDiv;
function hideByID(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = 'none';
    }
}
exports.hideByID = hideByID;
function showByID(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = LocalInfo_1.localInfo.isIE6 ? (el.tagName == 'TD' ? 'table-cell' : el.tagName == 'TR' ? '' : el.tagName == 'TABLE' ? '' : 'block') : '';
    }
}
exports.showByID = showByID;
function clearByID(id) {
    try {
        var c = document.getElementById(id);
        if (c != null) {
            c.innerHTML = '';
        }
    }
    catch (e) { }
}
exports.clearByID = clearByID;
function getHTMLSize(html, container) {
    var divMeasure = document.createElement('div');
    divMeasure.style.position = 'absolute';
    divMeasure.style.left = '-1000px';
    divMeasure.innerHTML = html;
    container.appendChild(divMeasure);
    var w = divMeasure.offsetWidth;
    var h = divMeasure.offsetHeight;
    divMeasure.parentNode.removeChild(divMeasure);
    return { w: w, h: h };
}
exports.getHTMLSize = getHTMLSize;
function getElementsByClass(parentElement, className, includeParent) {
    if (!parentElement) {
        return [];
    }
    var arEls = [];
    if (includeParent && isElementClass(parentElement, className)) {
        arEls.push(parentElement);
    }
    var els = parentElement.getElementsByTagName('*');
    for (var i = 0; i < els.length; i++) {
        if (isElementClass(els[i], className)) {
            arEls.push(els[i]);
        }
    }
    return arEls || [];
}
exports.getElementsByClass = getElementsByClass;
function getElementsByAttribute(parentElement, tagName, attributeName, attributeValue) {
    var arEls = [];
    var els = parentElement.getElementsByTagName(tagName);
    for (var i = 0; i < els.length; i++) {
        if (els[i].getAttribute(attributeName) == attributeValue) {
            arEls.push(els[i]);
        }
    }
    return arEls;
}
exports.getElementsByAttribute = getElementsByAttribute;
function getElementPosition(el) {
    if (!el) {
        return { left: 0, top: 0, bottom: 0, right: 0 };
    }
    var rect = el.getBoundingClientRect();
    var scroll = viewportUtils.getScroll();
    var left = rect.left + scroll.left;
    var top = rect.top + scroll.top;
    return {
        left: left,
        top: top,
        right: left + rect.width,
        bottom: top + rect.height,
    };
}
exports.getElementPosition = getElementPosition;
function addClassToElement(el, className) {
    if (!el) {
        return;
    }
    var existingClasses = el.className ? getClassNames(el) : [];
    var existingOriginalLength = existingClasses.length;
    var newClasses = className.split(' ');
    for (var j in newClasses) {
        var exists = false;
        if (!newClasses[j]) {
            break;
        }
        for (var i in existingClasses) {
            if (existingClasses[i] === newClasses[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            existingClasses.push(newClasses[j]);
        }
    }
    if (existingClasses.length !== existingOriginalLength) {
        el.className = existingClasses.join(' ');
    }
}
exports.addClassToElement = addClassToElement;
function removeClassFromElement(el, className, substring) {
    if (substring === void 0) { substring = false; }
    if (!el) {
        return;
    }
    var arClass = getClassNames(el);
    for (var i = arClass.length - 1; i >= 0; i--) {
        if (arClass[i] === className || (substring && arClass[i].indexOf(className) !== -1)) {
            arClass.splice(i, 1);
        }
    }
    el.className = arClass.join(' ');
}
exports.removeClassFromElement = removeClassFromElement;
function getClassNames(el) {
    var classes = [];
    if (typeof el.className === 'string') {
        classes = el.className.split(' ');
    }
    return classes;
}
exports.getClassNames = getClassNames;
function isElementClass(el, className) {
    if (!el)
        return false;
    else if (!className)
        return true;
    else if (!el.className)
        return false;
    var exists = false;
    var arClass = getClassNames(el);
    for (var i = 0; i < arClass.length; i++) {
        if (arClass[i] === className) {
            exists = true;
            break;
        }
    }
    return exists;
}
exports.isElementClass = isElementClass;
function cancelEvent(event) {
    if (!event)
        return;
    if ('cancelable' in event)
        // All browsers except <IE9
        event.preventDefault();
    else
        event.returnValue = false;
}
exports.cancelEvent = cancelEvent;
function createElement(type, name) {
    var divContainer = document.createElement('div');
    name = name || '';
    divContainer.innerHTML = '<' + type + ' name="' + name + '" id="' + name + '"></' + type + '>';
    return divContainer.firstChild;
}
exports.createElement = createElement;
function setSize(container, w, h, center) {
    if (container == null || container.style == null) {
        return;
    }
    if (w) {
        w = '' + w;
        var isWidthPrecentage = w.indexOf('%') > 0;
        if (!isNaN(w) || isWidthPrecentage) {
            var widthValue = '' + (isWidthPrecentage ? w : w + 'px');
            if (container.style.width != widthValue) {
                container.style.width = widthValue;
            }
        }
    }
    if (h) {
        h = '' + h;
        var isHeightPrecentage = h.indexOf('%') > 0;
        if (!isNaN(w) || isHeightPrecentage) {
            var heightValue = '' + (isHeightPrecentage ? h : h + 'px');
            if (container.style.height !== heightValue) {
                container.style.height = heightValue;
            }
        }
    }
    if (center && w && h) {
        if (container.style.zIndex == null || center) {
            container.style.zIndex = '' + getNextZIndex();
        }
        var vp = viewportUtils.getInnerSize();
        var scrl = viewportUtils.getScroll();
        var vpt = scrl.top;
        var vpl = scrl.left;
        container.style.top = '' + Math.max(0, vpt + Math.floor((vp.h - h) / 2)) + 'px';
        container.style.left = '' + Math.max(0, vpl + Math.floor((vp.w - w) / 2)) + 'px';
        container.style.visibility = '';
    }
}
exports.setSize = setSize;
function createHiddenIframe(src) {
    var ifr = document.createElement('iframe');
    ifr.src = src;
    ifr.style.width = '30px';
    ifr.style.height = '10px';
    ifr.style.position = 'absolute';
    ifr.style.top = '-1000px';
    ifr.style.left = '-1000px';
    if (document.body) {
        appendToBody(ifr);
    }
    else {
        functionsUtils.invokeOnPageLoad(function () {
            appendToBody(ifr);
        });
    }
    return ifr;
}
exports.createHiddenIframe = createHiddenIframe;
function attributeEncode(value) {
    return value
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&#39;'); // IE8 doesn't support &apos;
}
exports.attributeEncode = attributeEncode;
function manipulateAttributes(elements, matcher, replacePredicate, criteria) {
    if (criteria === void 0) { criteria = function () { return true; }; }
    elements.forEach(function (el) {
        if (!el.attributes)
            return;
        Array.prototype.slice.call(el.attributes).forEach(function (attr) {
            if (criteria(attr)) {
                attr.value = attr.value.replace(matcher, replacePredicate);
            }
        });
    });
}
exports.manipulateAttributes = manipulateAttributes;
function textNodesUnder(el) {
    var n;
    var textNodes = [];
    var treeWalker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    while ((n = treeWalker.nextNode())) {
        textNodes.push(n);
    }
    return textNodes;
}
exports.textNodesUnder = textNodesUnder;
function isHTMLBooleanAttribute(attrName) {
    return ['autocomplete', 'autofocus', 'checked', 'disabled', 'hidden', 'readonly', 'required', 'selected'].indexOf(attrName) > -1;
}
exports.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
function isBelongToGigyaFieldset(el) {
    if (!el || el instanceof HTMLFormElement) {
        return false; // end of recursion - element is not a child of a fieldset
    }
    if (isElementClass(el.parentElement, 'gigya-fieldset')) {
        return true;
    }
    return isBelongToGigyaFieldset(el.parentElement);
}
exports.isBelongToGigyaFieldset = isBelongToGigyaFieldset;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/JSON.ts":
/*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/JSON.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function serialize(obj, includeFunctions, prettyPrint, l, maxLevel) {
    if (includeFunctions === void 0) { includeFunctions = false; }
    if (prettyPrint === void 0) { prettyPrint = false; }
    if (l === void 0) { l = 0; }
    if (maxLevel === void 0) { maxLevel = 20; }
    if (!LocalInfo_1.localInfo.isIE8) {
        return window['JSON'].stringify(obj);
    }
    else {
        if (!l)
            l = 0;
        if (l > maxLevel)
            return '[Too deep]';
        var prefix = '';
        var newline = '';
        var tab = '';
        if (prettyPrint) {
            tab = '\t';
            newline = '\n';
            for (var i = 0; i < l + 1; i++) {
                prefix += tab;
            }
        }
        var t = typeof obj;
        if (t == 'function') {
            return t.toString();
        }
        if (t != 'object' || obj === null) {
            // simple data type
            if (t == 'string')
                obj = '"' + obj.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
            return String(obj);
        }
        else {
            var n, v, json = [], arr = obj && obj.constructor == Array;
            if (arr) {
                for (var i = 0; i < obj.length; i++) {
                    v = obj[i];
                    t = typeof v;
                    if (v == null || t == 'undefined')
                        v = '';
                    else if (t == 'string')
                        v = '"' + v.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
                    else if (t == 'function') {
                        if (includeFunctions)
                            v = 'Function';
                        else
                            v = '';
                    }
                    else if (v.parentNode && v.innerHTML)
                        v = 'HTMLElement';
                    else if (v.constructor == Date)
                        v = '';
                    else if (t == 'object' && v !== null)
                        v = serialize(v, includeFunctions, prettyPrint, l + 1);
                    if (String(v) != '')
                        json.push(prefix + tab + String(v));
                }
            }
            else {
                for (n in obj) {
                    v = obj[n];
                    t = typeof v;
                    if (v == null || t == 'undefined')
                        v = String(v);
                    else if (t == 'string')
                        v = '"' + v.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
                    else if (t == 'function') {
                        if (includeFunctions) {
                            v = 'Function';
                        }
                        else {
                            v = '';
                        }
                    }
                    else if (v.parentNode && v.innerHTML)
                        v = 'HTMLElement';
                    else if (v.constructor == Date)
                        v = '';
                    else if (t == 'object' && v !== null)
                        v = newline + serialize(v, includeFunctions, prettyPrint, l + 1);
                    if (String(v) != '')
                        json.push(prefix + tab + '"' + n.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '":' + String(v));
                }
            }
            return newline + prefix + (arr ? '[' : '{') + newline + json.join(',' + newline) + newline + prefix + (arr ? ']' : '}');
        }
    }
}
exports.serialize = serialize;
function deserialize(json, defaultValue, scope) {
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
exports.deserialize = deserialize;
function parse(json, defaultValue) {
    if (LocalInfo_1.localInfo.isIE8) {
        return deserialize(json, defaultValue);
    }
    else {
        try {
            return window['JSON'].parse(json);
        }
        catch (e) {
            return defaultValue || {};
        }
    }
}
exports.parse = parse;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/URL.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/URL.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var keyValueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
function URLEncode(value) {
    return encodeURIComponent(value);
}
exports.URLEncode = URLEncode;
function URLDecode(value) {
    return decodeURIComponent(value.replace(/\+/g, ' '));
}
exports.URLDecode = URLDecode;
function URLDecodeRecursive(value) {
    var prevDecodingRes = '';
    var currDecodingRes = value;
    // keep decoding until we can't decode anymore
    while (currDecodingRes != prevDecodingRes) {
        // store the last decoding result
        prevDecodingRes = currDecodingRes;
        // decode the string once again
        currDecodingRes = URLDecode(prevDecodingRes);
    }
    return currDecodingRes;
}
exports.URLDecodeRecursive = URLDecodeRecursive;
function getParamsFromURL(url, keysToLower) {
    if (!url || url.indexOf('?') === -1) {
        return {};
    }
    return keyValueUtils.deserialize(url.split('#')[0].split('?')[1], '&', keysToLower);
}
exports.getParamsFromURL = getParamsFromURL;
function getParamValueFromURL(param, url, defaultValue) {
    if (null == url || '' == url) {
        return defaultValue;
    }
    var iqm = url.indexOf('?');
    if (iqm === -1) {
        return defaultValue;
    }
    var qs = '&' + url.substr(iqm + 1);
    var idx = qs.toLowerCase().indexOf('&' + param.toLowerCase() + '=');
    if (idx === -1) {
        return defaultValue;
    }
    var valAndMore = qs.substr(idx + (1 + param.length + 1)) + '&';
    idx = valAndMore.indexOf('&');
    return valAndMore.substr(0, idx);
}
exports.getParamValueFromURL = getParamValueFromURL;
function addParamsToURL(url, oParams) {
    var params = getParamsFromURL(url);
    objectUtils.add(params, oParams);
    var urlHashSplit = url.split('#');
    var finalUrl = urlHashSplit[0].split('?')[0] + '?' + keyValueUtils.serialize(params, '&');
    if (urlHashSplit.length > 1) {
        finalUrl += '#' + urlHashSplit[1];
    }
    return finalUrl;
}
exports.addParamsToURL = addParamsToURL;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/Uri.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/Uri.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var Uri = /** @class */ (function () {
    function Uri(url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        this._anchor = document.createElement('a');
        var protocol = document.location.protocol == 'http:' ? 'http' : 'https';
        if (isAbsolute && url.indexOf('://') === -1 && url.charAt(0) !== '/')
            url = protocol + "://" + url;
        this._anchor.href = url;
    }
    Object.defineProperty(Uri.prototype, "domain", {
        get: function () {
            return this._anchor.hostname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "path", {
        get: function () {
            return this._anchor.pathname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "href", {
        get: function () {
            return this._anchor.href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "search", {
        get: function () {
            return this._anchor.search.slice(1);
        } // dropping '?'
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "hash", {
        get: function () {
            return this._anchor.hash.slice(1);
        } // dropping '#'
        ,
        enumerable: true,
        configurable: true
    });
    Uri.prototype.toString = function () {
        return this._anchor.href;
    };
    Uri.prototype.addToSearch = function (params) {
        for (var name in params) {
            var val = params[name];
            if ((typeof val == 'boolean' || typeof val == 'number' || typeof val == 'string') && name != 'eventName') {
                var addition = this._anchor.search ? '&' : '';
                this._anchor.search += "" + addition + name + "=" + encodeURIComponent(params[name]);
            }
        }
        return this;
    };
    Uri.prototype.fetch = function (retries) {
        if (retries === void 0) { retries = 0; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _a, e_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 8]);
                        if (!window.fetch) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.browserFetch()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.xhr()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a];
                    case 5:
                        e_1 = _b.sent();
                        if (retries <= 0)
                            throw new Error("fetch failed: " + e_1);
                        return [4 /*yield*/, this.delay(1)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.fetch(retries - 1)];
                    case 7: return [2 /*return*/, _b.sent()];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Uri.prototype.isBaseOf = function (url) {
        return Uri.parse(url).isIn(this);
    };
    Uri.prototype.isIn = function (base) {
        if (typeof base === 'string') {
            base = Uri.parse(base);
        }
        return ((this.domain == base.domain || // page is the base domain
            this.isSubDomainOf(base)) && // or sub-domain of it
            (!base.path || this.path.indexOf(base.path) == 0)); // page is also in base's defined path;
    };
    Uri.prototype.isForSubDomains = function () {
        return this.domain.indexOf('.') == 0;
    };
    Uri.prototype.isSubDomainOf = function (base) {
        var domain = '';
        if (!base.isForSubDomains())
            domain = '.';
        domain += base.domain;
        return stringUtilsUtils.endsWith(this.domain, domain);
    };
    Uri.parse = function (url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        if (!url)
            return undefined;
        return new Uri(url, isAbsolute);
    };
    Uri.prototype.browserFetch = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var url, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.toString();
                        return [4 /*yield*/, window.fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok)
                            throw new Error("fetch failed");
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    Uri.prototype.xhr = function () {
        var url = this.toString();
        return new gigya.Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();
            xhr.onerror = reject;
            xhr.onload = function () {
                if (xhr.readyState !== 4 || xhr.status !== 200) {
                    return reject("xhr failed - " + xhr.status + " - " + xhr.statusText);
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
                    return resolve(jsonResponse);
                }
                catch (e) {
                    return reject(e);
                }
            };
        });
    };
    Uri.prototype.delay = function (ms) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new gigya.Promise(function (r) { return setTimeout(r, ms); })];
            });
        });
    };
    return Uri;
}());
exports.Uri = Uri;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/array.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/array.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function indexOf(ar, o) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == o)
            return i;
    }
    return -1;
}
exports.indexOf = indexOf;
function clone(ar) {
    var ar2 = [];
    for (var i = 0; i < ar.length; i++) {
        ar2[i] = ar[i];
    }
    return ar2;
}
exports.clone = clone;
function removeByValue(ar, value) {
    if (!ar)
        return;
    for (var i = ar.length - 1; i >= 0; i--) {
        if (ar[i] == value) {
            ar.splice(i, 1);
        }
    }
}
exports.removeByValue = removeByValue;
function removeByProperty(ar, property, value) {
    if (!ar)
        return;
    for (var i = ar.length - 1; i >= 0; i--) {
        if (ar[i][property] == value) {
            ar.splice(i, 1);
        }
    }
}
exports.removeByProperty = removeByProperty;
function getArrayFromString(str, delimiter, lowerCase) {
    // check for string type in the input and not empty.
    if (!str || typeof str != 'string')
        return [];
    // lowercase if demended
    if (lowerCase)
        str = str.toLowerCase();
    // clean the string:
    str = str.replace(/[ ]/g, '').replace(/,,/g, ',');
    // if string empty
    if (!str)
        return [];
    // return array from string
    return str.split(delimiter);
}
exports.getArrayFromString = getArrayFromString;
function intersect(array) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (array == null)
        return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
        var item = array[i];
        if (this.indexOf(result, item) != -1)
            continue;
        for (var j = 1; j < argsLength; j++) {
            var arr = arguments[j];
            if (arr == null || this.indexOf(arr, item) == -1)
                break;
        }
        if (j === argsLength)
            result.push(item);
    }
    return result;
}
exports.intersect = intersect;
function lastIndexOf(arr, val, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    for (var i = arr.length; --i >= fromIndex;) {
        if (arr[i] === val)
            return i;
    }
    return -1;
}
exports.lastIndexOf = lastIndexOf;
function forEach(arr, action) {
    for (var i = 0; i < arr.length; ++i)
        action(arr[i], i, arr);
}
exports.forEach = forEach;
function forEachProp(obj, action) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name))
            action(obj[name], name, obj);
    }
}
exports.forEachProp = forEachProp;
function some(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (condition(arr[i], i, arr))
            return true;
    }
    return false;
}
exports.some = some;
function every(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (!condition(arr[i], i, arr))
            return false;
    }
    return true;
}
exports.every = every;
function everyProp(obj, condition) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name) && !condition(obj[name], name, obj))
            return false;
    }
    return true;
}
exports.everyProp = everyProp;
function map(arr, action) {
    var result = new Array();
    forEach(arr, function (item, idx, arr) { return result.push(action(item, idx, arr)); });
    return result;
}
exports.map = map;
function firstIndex(arr, condition) {
    var result = -1;
    some(arr, function (item, index, arr) {
        if (condition(item, index, arr)) {
            result = index;
            return true;
        }
        return false;
    });
    return result;
}
exports.firstIndex = firstIndex;
function first(arr, condition) {
    return arr[firstIndex(arr, condition)];
}
exports.first = first;
function getAllEnumValues(enumType) {
    var results = [];
    for (var i in enumType)
        if (typeof enumType[i] == 'number')
            results.push(enumType[i]);
    return results;
}
exports.getAllEnumValues = getAllEnumValues;
function getUniqueValues(arr) {
    for (var i = 0; i < arr.length; ++i) {
        for (var j = i + 1; j < arr.length; j++)
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
            }
    }
    return arr;
}
exports.getUniqueValues = getUniqueValues;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/cookie.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/cookie.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function _getBaseDomain() {
    return LocalInfo_1.localInfo.baseDomain || '';
}
exports._getBaseDomain = _getBaseDomain;
function getDefaultDomain(pageDomain, baseDomain) {
    if (pageDomain === void 0) { pageDomain = LocalInfo_1.localInfo.pageDomain; }
    if (baseDomain === void 0) { baseDomain = _getBaseDomain(); }
    var cookieDomain;
    cookieDomain =
        baseDomain.length > 0 && pageDomain.length >= baseDomain.length && pageDomain.lastIndexOf(baseDomain) === pageDomain.length - baseDomain.length
            ? baseDomain
            : pageDomain;
    return cookieDomain;
}
exports.getDefaultDomain = getDefaultDomain;
function get(name) {
    name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1').replace(/^[ \t]+|[ \t]+$/g, '');
    var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)');
    var match = document.cookie.match(regex);
    return match && unescape(match[1]);
}
exports.get = get;
function set(name, value, expires_in, cookieDomain, dontUseRootPath) {
    var pageDomain = LocalInfo_1.localInfo.pageDomain;
    if (cookieDomain == null) {
        cookieDomain = getDefaultDomain();
    }
    var expireMs;
    if (expires_in == null || expires_in === '' || isNaN(expires_in)) {
        expireMs = 1000 * getInfiniteExpirationTimeInSeconds();
    }
    else if (expires_in == 0) {
        // 0 means Session
        expireMs = null;
    }
    else {
        // Any other value is number of seconds (A negative value would mean expire now!)
        expireMs = expires_in * 1000;
    }
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + expireMs);
    var cookieString = name +
        '=' +
        escape(value) +
        (dontUseRootPath ? '' : '; path=/') +
        (expireMs == null ? '' : '; expires=' + exdate.toUTCString()) +
        (cookieDomain && cookieDomain != '' && cookieDomain.indexOf('.') != -1 ? '; domain=' + cookieDomain : '');
    document.cookie = cookieString;
    // Some browsers like IE8 don't like some domains (e.g. domains of the form xx.yy)
    // http://stackoverflow.com/questions/1189638/internet-explorer-xx-yy-website-issue
    if ((!expireMs || expireMs > 0) && !get(name)) {
        cookieString =
            name +
                '=' +
                escape(value) +
                (dontUseRootPath ? '' : '; path=/') +
                (expireMs == null ? '' : '; expires=' + exdate.toUTCString()) +
                (pageDomain && pageDomain != '' && pageDomain.indexOf('.') != -1 ? '; domain=' + pageDomain : '');
        document.cookie = cookieString;
    }
}
exports.set = set;
function remove(name) {
    var pageDomain = LocalInfo_1.localInfo.pageDomain;
    var baseDomain = _getBaseDomain();
    if (baseDomain.length > 0 && pageDomain.length >= baseDomain.length && pageDomain.lastIndexOf(baseDomain) === pageDomain.length - baseDomain.length) {
        set(name, '', -1, baseDomain); // remove also from the subDomain.
        set(name, '', -1, baseDomain, true);
    }
    set(name, '', -1, LocalInfo_1.localInfo.pageDomain);
    set(name, '', -1, LocalInfo_1.localInfo.pageDomain, true);
    set(name, '', -1, '');
    set(name, '', -1, '', true);
}
exports.remove = remove;
function getInfiniteExpirationTimeInSeconds() {
    // Set expiration time to 1 years
    return 60 * 60 * 24 * 365;
}
exports.getInfiniteExpirationTimeInSeconds = getInfiniteExpirationTimeInSeconds;
function canSaveCookie(doc) {
    if (doc === void 0) { doc = document; }
    var d = new Date(new Date().getTime() + 1000); // 1 second expiration.
    try {
        doc.cookie = 'gig3pctest=true;expires=' + d['toGMTString']();
        return doc.cookie.indexOf('gig3pctest') !== -1;
    }
    catch (e) {
        // iOS 10 webview throws in some scenarios
        return false;
    }
}
exports.canSaveCookie = canSaveCookie;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/domains.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/domains.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var gigyaDomainNamespaces = ['socialize', 'accounts', 'fidm', 'gm', 'comments', 'gcs', 'ids', 'ds', 'gscounters'];
function apiDomainFactory(apiDomain, defaultApiDomain) {
    if (apiDomain === void 0) { apiDomain = resolveApiDomain(); }
    if (defaultApiDomain === void 0) { defaultApiDomain = window.gigya.defaultApiDomain; }
    var shouldAddNamespace = Uri_1.Uri.parse(apiDomain).isIn(Uri_1.Uri.parse(defaultApiDomain));
    return function (namespace) {
        if (namespace && shouldAddNamespace) {
            var subDomain = namespace.split('.')[0];
            if (gigyaDomainNamespaces.indexOf(subDomain) == -1) {
                window.gigya.logger.error("trying to send request to an invalid domain");
                subDomain = gigyaDomainNamespaces[0];
            }
            return subDomain + "." + apiDomain;
        }
        else {
            return apiDomain;
        }
    };
}
exports.apiDomainFactory = apiDomainFactory;
function getGigyaDomain(namespace, dataCenter, defaultDomain) {
    if (dataCenter === void 0) { dataCenter = window.gigya.dataCenter; }
    if (defaultDomain === void 0) { defaultDomain = window.gigya.defaultApiDomain; }
    var domain = dataCenter + "." + defaultDomain;
    if (namespace)
        return namespace + "." + domain;
    else
        return domain;
}
exports.getGigyaDomain = getGigyaDomain;
function getBaseDomain(baseDomains, currentDomain, defaultDomains) {
    if (baseDomains === void 0) { baseDomains = window.gigya.partnerSettings.baseDomains; }
    if (currentDomain === void 0) { currentDomain = location.hostname; }
    if (defaultDomains === void 0) { defaultDomains = ['gigya.com', 'gigya-api.cn', window.gigya.defaultApiDomain]; }
    // #49786 - Support webview without hostname.
    if (!currentDomain) {
        return '';
    }
    if (typeof baseDomains == 'string') {
        baseDomains = baseDomains.split(',');
    }
    var originURI = Uri_1.Uri.parse(currentDomain);
    if (defaultDomains) {
        baseDomains = baseDomains.concat(defaultDomains);
    }
    for (var _i = 0, baseDomains_1 = baseDomains; _i < baseDomains_1.length; _i++) {
        var rawDomain = baseDomains_1[_i];
        // This does not take care of wildcards in the middle of string.
        var baseDomain = stringUtilsUtils.replaceAll(rawDomain, '*', '');
        var baseUri = Uri_1.Uri.parse(baseDomain);
        if (baseUri && originURI.isIn(baseUri)) {
            if (baseUri.isForSubDomains()) {
                return originURI.domain;
            }
            else {
                return baseUri.domain;
            }
        }
    }
    // fallback to the parent's window domain (for backward compatibility).
    return originURI.domain;
}
exports.getBaseDomain = getBaseDomain;
function resolveApiDomain(customApiDomainPrefix, baseDomain, dataCenter, defaultApiDomain) {
    if (customApiDomainPrefix === void 0) { customApiDomainPrefix = window.gigya.partnerSettings && window.gigya.partnerSettings.customAPIDomainPrefix; }
    if (baseDomain === void 0) { baseDomain = LocalInfo_1.localInfo.baseDomain; }
    if (dataCenter === void 0) { dataCenter = window.gigya.dataCenter; }
    if (defaultApiDomain === void 0) { defaultApiDomain = window.gigya.defaultApiDomain; }
    if (customApiDomainPrefix && baseDomain && baseDomain !== defaultApiDomain) {
        return customApiDomainPrefix + "." + baseDomain;
    }
    else {
        return getGigyaDomain(undefined, dataCenter, defaultApiDomain);
    }
}
exports.resolveApiDomain = resolveApiDomain;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/functions.ts":
/*!**************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/functions.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function callFunction(name, arParams) {
    var fn = eval(name);
    var arParts = name.split('.');
    arParts.splice(arParts.length - 1, 1);
    var scope = eval(arParts.join('.'));
    fn.apply(scope, arParams);
}
exports.callFunction = callFunction;
function invokeOnPageLoad(func, completeOnly) {
    if ((!document.readyState && document.body) ||
        document.readyState === 'complete' ||
        (!completeOnly && document.readyState === 'interactive' && document.body)) {
        func();
    }
    else {
        var called_1 = false;
        var fnOnLoad = function () {
            if (!called_1) {
                called_1 = true;
                func();
            }
        };
        window.setTimeout(fnOnLoad, 20000); // fallback - sometimes readystate stays stuck on interactive
        DOMUtils.addEventListener(window, 'load', fnOnLoad);
        DOMUtils.addEventListener(document, 'DOMContentLoaded', fnOnLoad);
    }
}
exports.invokeOnPageLoad = invokeOnPageLoad;
function createAlias(publicName, fnc) {
    var arNameSegments = publicName.split('.');
    var oCurrentSegment = window;
    for (var iSegment = 0; iSegment < arNameSegments.length - 1; iSegment++) {
        var sSegment = arNameSegments[iSegment];
        if (!oCurrentSegment[sSegment]) {
            oCurrentSegment[sSegment] = {};
        }
        oCurrentSegment = oCurrentSegment[sSegment];
    }
    oCurrentSegment[arNameSegments[arNameSegments.length - 1]] = fnc;
}
exports.createAlias = createAlias;
function debounce(fn, delayMilliseconds) {
    var timer = undefined;
    return function () {
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            timer = undefined;
            fn();
        }, delayMilliseconds);
    };
}
exports.debounce = debounce;
function addSrcToIFrameIfNeeded(iframe, src) {
    if (src === void 0) { src = cdn_1.getCdnResource('/'); }
    if (LocalInfo_1.localInfo.isIOSWebView || (LocalInfo_1.localInfo.isIOS && LocalInfo_1.localInfo.isWeChat)) {
        iframe.setAttribute('src', src);
    }
}
exports.addSrcToIFrameIfNeeded = addSrcToIFrameIfNeeded;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/keyValue.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/keyValue.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
function serialize(oKeyValue, delimiter) {
    var a = [];
    if (!delimiter) {
        delimiter = '&';
    }
    for (var p in oKeyValue) {
        switch (typeof oKeyValue[p]) {
            case 'function':
                break;
            case 'object':
                if (oKeyValue[p] != null) {
                    a.push(p + '=' + URLUtils.URLEncode(JSONUtils.serialize(oKeyValue[p])));
                }
                break;
            case 'undefined':
                break;
            default:
                a.push(p + '=' + URLUtils.URLEncode(oKeyValue[p]));
        }
    }
    var s = a.join(delimiter);
    return s;
}
exports.serialize = serialize;
function deserialize(urlEncodedString, delimiter, keysToLower, useUnescape) {
    var o = {};
    if (!urlEncodedString) {
        return o;
    }
    if (!delimiter) {
        delimiter = '&';
    }
    var pairs = urlEncodedString.split(delimiter);
    for (var iPair = 0; iPair < pairs.length; iPair++) {
        var pair = pairs[iPair];
        var eqPos = pair.indexOf('=');
        if (eqPos === -1) {
            var key = keysToLower ? pair.toLowerCase() : pair;
            o[key] = '1';
        }
        else {
            var key = pair.substr(0, eqPos);
            if (keysToLower) {
                key = key.toLowerCase();
            }
            var serializedValue = pair.substr(eqPos + 1).replace(/\+/g, ' ');
            try {
                o[key] = useUnescape ? unescape(serializedValue) : URLUtils.URLDecode(serializedValue);
            }
            catch (ex) {
                o[key] = unescape(serializedValue);
            }
        }
    }
    return o;
}
exports.deserialize = deserialize;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/localStorage.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/localStorage.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var scriptUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var cookieUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var AbstractLocalStorageAdapter = /** @class */ (function () {
    function AbstractLocalStorageAdapter() {
    }
    AbstractLocalStorageAdapter.getName = function () {
        return 'AbstractAdapter';
    };
    /**
     * Set object to storage.
     */
    AbstractLocalStorageAdapter.prototype.setObject = function (key, o) {
        this.setItem(key, JSONUtils.serialize(o));
    };
    /**
     * Get object from local storage.
     */
    AbstractLocalStorageAdapter.prototype.getObject = function (key, defaultValue) {
        return JSONUtils.deserialize(this.getItem(key), defaultValue);
    };
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    AbstractLocalStorageAdapter.prototype.isPersistent = function () {
        return true;
    };
    return AbstractLocalStorageAdapter;
}());
exports.AbstractLocalStorageAdapter = AbstractLocalStorageAdapter;
var AbstractAsyncLocalStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractAsyncLocalStorageAdapter, _super);
    function AbstractAsyncLocalStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.isLoaded = false;
        return _this;
    }
    AbstractAsyncLocalStorageAdapter.prototype.isReady = function () {
        return this.isLoaded;
    };
    /**
     * Used when there is initialization time on the local storage adapter.
     */
    AbstractAsyncLocalStorageAdapter.prototype.waitForService = function (callback) {
        var _this = this;
        if (this.isReady()) {
            callback();
            return;
        }
        else {
            setTimeout(function () { return _this.waitForService(callback); }, 50);
        }
    };
    return AbstractAsyncLocalStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.AbstractAsyncLocalStorageAdapter = AbstractAsyncLocalStorageAdapter;
var StorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(StorageAdapter, _super);
    function StorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StorageAdapter.prototype.getItem = function (key) {
        return this.storage[key];
    };
    StorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        try {
            this.storage[key] = value;
        }
        catch (ex) { }
    };
    StorageAdapter.prototype.removeItem = function (key) {
        this.storage.removeItem(key);
    };
    return StorageAdapter;
}(AbstractLocalStorageAdapter));
var LocalStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStorageAdapter, _super);
    function LocalStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.storage = window.localStorage;
        return _this;
    }
    LocalStorageAdapter.getName = function () {
        return 'LocalStorageAdapter';
    };
    LocalStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.supportsLocalStorage;
    };
    return LocalStorageAdapter;
}(StorageAdapter));
var SessionStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(SessionStorageAdapter, _super);
    function SessionStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.storage = window.sessionStorage;
        return _this;
    }
    SessionStorageAdapter.getName = function () {
        return 'SessionStorageAdapter';
    };
    SessionStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.supportsSessionStorage;
    };
    return SessionStorageAdapter;
}(StorageAdapter));
var FirefoxStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(FirefoxStorageAdapter, _super);
    function FirefoxStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirefoxStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.isFF && window['globalStorage'];
    };
    FirefoxStorageAdapter.getName = function () {
        return 'FirefoxStorageAdapter';
    };
    FirefoxStorageAdapter.prototype.getItem = function (key) {
        return window['globalStorage'][location.hostname][key];
    };
    FirefoxStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        try {
            window['globalStorage'][location.hostname][key] = value;
        }
        catch (ex) { }
    };
    FirefoxStorageAdapter.prototype.removeItem = function (key) {
        delete window['globalStorage'][location.hostname][key];
    };
    return FirefoxStorageAdapter;
}(AbstractLocalStorageAdapter));
var FlashAsyncStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(FlashAsyncStorageAdapter, _super);
    function FlashAsyncStorageAdapter() {
        var _this = _super.call(this) || this;
        // Load SWF store library.
        _this.loadSwfStore(function (isSuccess) {
            _this.isLoaded = true;
        });
        return _this;
    }
    FlashAsyncStorageAdapter.isAvailable = function () {
        // There is no current scenario where using Flash Storage is helpful outside of IE.
        return LocalInfo_1.localInfo.supportsFlash && (LocalInfo_1.localInfo.isIE || LocalInfo_1.localInfo.isEdge);
    };
    FlashAsyncStorageAdapter.getName = function () {
        return 'FlashAsyncStorageAdapter';
    };
    /**
     * First, load the JavaScript swfstore SDK.
     */
    FlashAsyncStorageAdapter.prototype.loadSwfStore = function (callback) {
        var _this = this;
        // Load SwfStore if necessary.
        if (window['SwfStore']) {
            this.initializeSwfStore(function () { return _this.loadSwfStore(callback); });
            return;
        }
        scriptUtils.load('https://cdns.gigya.com/gs/js/swfstore.min.js', function () {
            // Error handler.
            console.log('Failed to load Gigya SwfStore.');
            callback(false);
        }, function () {
            // Success handler.
            _this.initializeSwfStore(callback);
        }, true);
    };
    /**
     * Iniitalize the SwfStore class.
     */
    FlashAsyncStorageAdapter.prototype.initializeSwfStore = function (callback) {
        this.swfStore = new SwfStore({
            namespace: 'gigSSO',
            swf_url: 'https://cdns.gigya.com/gs/swf/swfstore.swf',
            onready: function () {
                callback(true);
            },
            onerror: function () {
                console.log('Failed to initialize Gigya SwfStore.');
                callback(false);
            },
        });
    };
    FlashAsyncStorageAdapter.prototype.getItem = function (key) {
        return this.swfStore.get(key);
    };
    FlashAsyncStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        this.swfStore.set(key, value);
    };
    FlashAsyncStorageAdapter.prototype.removeItem = function (key) {
        this.swfStore.clear(key);
    };
    return FlashAsyncStorageAdapter;
}(AbstractAsyncLocalStorageAdapter));
var CookieStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(CookieStorageAdapter, _super);
    function CookieStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CookieStorageAdapter.isAvailable = function () {
        return cookieUtils.canSaveCookie();
    };
    CookieStorageAdapter.getName = function () {
        return 'CookieStorageAdapter';
    };
    CookieStorageAdapter.prototype.getItem = function (key) {
        return cookieUtils.get(key);
    };
    CookieStorageAdapter.prototype.setItem = function (key, value, expiresIn, domain) {
        cookieUtils.set(key, value, expiresIn, domain);
    };
    CookieStorageAdapter.prototype.removeItem = function (key) {
        cookieUtils.remove(key);
    };
    return CookieStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.CookieStorageAdapter = CookieStorageAdapter;
var MemoryStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(MemoryStorageAdapter, _super);
    function MemoryStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.memory = {};
        return _this;
    }
    MemoryStorageAdapter.isAvailable = function () {
        return true;
    };
    MemoryStorageAdapter.getName = function () {
        return 'MemoryStorageAdapter';
    };
    MemoryStorageAdapter.prototype.getItem = function (key) {
        return this.memory[key];
    };
    MemoryStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        this.memory[key] = value;
    };
    MemoryStorageAdapter.prototype.removeItem = function (key) {
        delete this.memory[key];
    };
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    MemoryStorageAdapter.prototype.isPersistent = function () {
        return false;
    };
    return MemoryStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.MemoryStorageAdapter = MemoryStorageAdapter;
exports.adapters = [
    LocalStorageAdapter,
    SessionStorageAdapter,
    FirefoxStorageAdapter,
    FlashAsyncStorageAdapter,
    CookieStorageAdapter,
    MemoryStorageAdapter,
];
exports.instances = {};
function initializeAdapter(adapter) {
    var adapterName = adapter.getName() || adapter.name;
    if (!exports.instances[adapterName]) {
        exports.instances[adapterName] = new adapter();
    }
    return exports.instances[adapterName];
}
exports.initializeAdapter = initializeAdapter;
function waitForService(callback) {
    // Select compatible adapter.
    var storage;
    for (var _i = 0, adapters_1 = exports.adapters; _i < adapters_1.length; _i++) {
        var adapter_1 = adapters_1[_i];
        if (adapter_1.isAvailable()) {
            // Don't select adapter if it's async and a callback wasn't provided.
            if (adapter_1.prototype instanceof AbstractAsyncLocalStorageAdapter && !callback) {
                continue;
            }
            storage = initializeAdapter(adapter_1);
            break;
        }
    }
    // Fallback to memory-based non-persistent storage.
    if (!storage) {
        storage = initializeAdapter(MemoryStorageAdapter);
    }
    // Trigger callback when adapter finishes loading (or instantly, if not required to wait).
    if (callback) {
        if (storage instanceof AbstractAsyncLocalStorageAdapter) {
            storage.waitForService(function () {
                callback(storage);
            });
        }
        else {
            callback(storage);
        }
    }
    return storage;
}
exports.waitForService = waitForService;
var adapter = waitForService();
function getItem(key) {
    return adapter.getItem(key);
}
exports.getItem = getItem;
function setItem(key, value, expiresIn) {
    return adapter.setItem(key, value, expiresIn);
}
exports.setItem = setItem;
function removeItem(key) {
    return adapter.removeItem(key);
}
exports.removeItem = removeItem;
function setObject(key, o) {
    return adapter.setObject(key, o);
}
exports.setObject = setObject;
function getObject(key, defaultValue) {
    return adapter.getObject(key, defaultValue);
}
exports.getObject = getObject;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/object.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/object.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
function removeUndefined(o) {
    var o2 = {};
    for (var p in o) {
        if (o[p] != null && o[p] != undefined) {
            o2[p] = o[p];
        }
    }
    return o2;
}
exports.removeUndefined = removeUndefined;
function expressionHelper(context) {
    context = context || {};
    return {
        getField: function (path) {
            if (!path)
                return undefined;
            var paths = path.split('.'), current = context, i;
            for (i = 0; i < paths.length; ++i) {
                if (current[paths[i]] == undefined) {
                    return undefined;
                }
                else {
                    current = current[paths[i]];
                }
            }
            return current;
        },
    };
}
exports.expressionHelper = expressionHelper;
function getPropertyBySerializedName(o, name, createMissingObjects) {
    if (!name)
        return o;
    var oResult = o;
    var arNameSegments = name.split('.');
    for (var iSegment = 0; iSegment < arNameSegments.length; iSegment++) {
        var sSegment = arNameSegments[iSegment];
        var sIndex = null;
        //Support for array access. i.e. "obj.prop1[0].prop2"
        if (sSegment.match(/\[[0-9]]/)) {
            sIndex = Number(sSegment.match(/\[[0-9]]/)[0].replace(/[\[\]]/g, ''));
        }
        sSegment = sSegment.split(/\[[0-9]]/).join('');
        var res = (sIndex || sIndex === 0) && oResult[sSegment] ? oResult[sSegment][sIndex] : oResult[sSegment];
        if (createMissingObjects && !oResult[sSegment]) {
            oResult[sSegment] = {};
        }
        else if (createMissingObjects && !res && res !== false) {
            oResult[sSegment] = [];
        }
        if (res || res === false) {
            oResult = res;
        }
        else {
            return null;
        }
    }
    return oResult;
}
exports.getPropertyBySerializedName = getPropertyBySerializedName;
function setPropertyBySerializedName(o, name, value) {
    var arNameSegments = name.split('.');
    var propertyName = arNameSegments.pop();
    getPropertyBySerializedName(o, arNameSegments.join('.'), true)[propertyName] = value;
}
exports.setPropertyBySerializedName = setPropertyBySerializedName;
function add(oTarget, o, dontOverride) {
    for (var p in o) {
        if (!dontOverride || typeof oTarget[p] === 'undefined') {
            oTarget[p] = o[p];
        }
    }
}
exports.add = add;
function getHash(o) {
    var ar = [];
    for (var p in o) {
        var s;
        if (typeof o[p] == 'object')
            s = JSONUtils.serialize(o[p], false);
        else if (o[p])
            s = o[p].toString();
        ar.push(p + '=' + s);
    }
    return ar.sort().join('&');
}
exports.getHash = getHash;
function getMurmurHash(key, seed) {
    if (!seed)
        seed = 0;
    var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
    remainder = key.length & 3; // key.length % 4
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;
    while (i < bytes) {
        k1 = (key.charCodeAt(i) & 0xff) | ((key.charCodeAt(++i) & 0xff) << 8) | ((key.charCodeAt(++i) & 0xff) << 16) | ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;
        k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
        h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((h1 & 0xffff) * 5 + ((((h1 >>> 16) * 5) & 0xffff) << 16)) & 0xffffffff;
        h1 = (h1b & 0xffff) + 0x6b64 + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16);
    }
    k1 = 0;
    switch (remainder) {
        case 3:
            k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            k1 ^= key.charCodeAt(i) & 0xff;
            k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= k1;
    }
    h1 ^= key.length;
    h1 ^= h1 >>> 16;
    h1 = ((h1 & 0xffff) * 0x85ebca6b + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = ((h1 & 0xffff) * 0xc2b2ae35 + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 16;
    return h1 >>> 0;
}
exports.getMurmurHash = getMurmurHash;
function clone(obj, deepCopy, ignoreFunctions, maxLevel, level, ignoreContext) {
    if (maxLevel === void 0) { maxLevel = 20; }
    if (level === void 0) { level = 0; }
    if (level > maxLevel)
        return null; // Too deep
    if (typeof obj == 'undefined' || obj == null) {
        return null;
    }
    else if (typeof obj == 'function' && ignoreFunctions) {
        return null;
    }
    else if (obj.constructor == Array) {
        var ar = [];
        for (var i = 0; i < obj.length; i++) {
            if (!ignoreFunctions || typeof obj[i] != 'function') {
                if (deepCopy) {
                    ar[i] = clone(obj[i], deepCopy, ignoreFunctions, maxLevel, level + 1, ignoreContext);
                }
                else {
                    ar[i] = obj[i];
                }
            }
        }
        return ar;
    }
    else if (typeof obj == 'object') {
        var o = {};
        for (var p in obj) {
            if (ignoreContext && p == 'context')
                continue;
            if (!ignoreFunctions || typeof obj[p] != 'function') {
                if (deepCopy) {
                    o[p] = clone(obj[p], deepCopy, ignoreFunctions, maxLevel, level + 1, ignoreContext);
                }
                else {
                    o[p] = obj[p];
                }
            }
        }
        return o;
    }
    else {
        return obj;
    }
}
exports.clone = clone;
function merge(args, isDeepMerge) {
    var o = {};
    for (var i = 0; i < args.length; i++) {
        if (args[i] && args[i].length) {
            for (var u = 0; u < args[i].length; u++) {
                for (var p in args[i][u]) {
                    o[p] = args[i][u][p];
                }
            }
        }
        else {
            // Merge objects.
            if (!isDeepMerge) {
                // Flat merge.
                for (var p in args[i]) {
                    o[p] = args[i][p];
                }
            }
            else {
                // Deep merge.
                for (var p in args[i]) {
                    //we override primitive / array
                    if (typeof o[p] !== 'object' || o[p] instanceof Array) {
                        o[p] = args[i][p];
                    }
                    else {
                        o[p] = merge([o[p], args[i][p]], true);
                    }
                }
            }
        }
    }
    return o;
}
exports.merge = merge;
function unflatten(data) {
    if (Object(data) !== data || Array.isArray(data)) {
        return data;
    }
    var result = {};
    for (var p in data) {
        var cur = result;
        var prop = '';
        var parts = p.split('.');
        for (var i = 0; i < parts.length; i++) {
            var idx = !isNaN(Number(parts[i]));
            cur = cur[prop] || (cur[prop] = idx ? [] : {});
            prop = parts[i];
        }
        cur[prop] = data[p];
    }
    return result[''] || {};
}
exports.unflatten = unflatten;
function flatten(data, withBracket) {
    if (withBracket === void 0) { withBracket = false; }
    var result = {};
    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        }
        else if (Array.isArray(cur)) {
            var l = cur.length;
            for (var i = 0; i < l; i++) {
                var nestedProperty = withBracket ? prop + "[" + i + "]" : prop + "." + i;
                recurse(cur[i], prop ? nestedProperty : String(i));
            }
            if (l === 0) {
                result[prop] = [];
            }
        }
        else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty && prop !== '') {
                result[prop] = {};
            }
        }
    }
    recurse(data, '');
    return result;
}
exports.flatten = flatten;
function extractProperties(src, dest, schema) {
    if (src == null)
        return;
    if (dest == null)
        dest = {};
    if (src.constructor == Array) {
        for (var iSrc = 0; iSrc < src.length; iSrc++) {
            extractProperties(src[iSrc], dest, schema);
        }
    }
    else if (schema) {
        var arSchema = schema.split('|');
        var srcLCase = {};
        for (var fieldName in src) {
            srcLCase[fieldName.toLowerCase()] = 1;
        }
        for (var i = 0; i < arSchema.length; i++) {
            var fieldName2 = arSchema[i];
            if (srcLCase[fieldName2.toLowerCase()])
                dest[fieldName2] = src[fieldName2];
        }
    }
    else {
        dest = clone(src, false);
    }
    return dest;
}
exports.extractProperties = extractProperties;
function extractProperty(src, paramName) {
    var params;
    return extractProperties(src, params, paramName)[paramName];
}
exports.extractProperty = extractProperty;
function parseToObject(str) {
    try {
        var parsedVal = window['JSON'].parse(str);
        if (typeof parsedVal == 'object') {
            return parsedVal;
        }
    }
    catch (e) { }
    return undefined;
}
exports.parseToObject = parseToObject;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/script.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/script.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var pending = {};
function addSdkVersion(url) {
    var scriptUrl = Uri_1.Uri.parse(url);
    scriptUrl.addToSearch({ version: window.gigya.build.version });
    return scriptUrl.toString();
}
function formatSrcUrl(src) {
    // remove cdn domain number
    return src.replace(/^http(s?):\/\/cdn(s?)[0-9]*.gigya.com\//, 'http$1://cdn$2.gigya.com/');
}
function isLoaded(src) {
    var pendingSrc = formatSrcUrl(src);
    return Boolean(pending[pendingSrc] && pending[pendingSrc].loaded);
}
exports.isLoaded = isLoaded;
function load(src, fnOnError, fnOnLoad, loadOnce, removeAfter, treatTogether) {
    if (removeAfter === void 0) { removeAfter = 5000; }
    var oScript;
    if (src.indexOf('//') === 0) {
        src = LocalInfo_1.localInfo.protocol + ':' + src;
    }
    if (loadOnce) {
        var pendingSrc = formatSrcUrl(src);
        if (pending[pendingSrc]) {
            if (pending[pendingSrc].loaded) {
                window.gigya.logger.debug("script was already loaded:", { src: src });
                if (fnOnLoad) {
                    fnOnLoad();
                }
            }
            else {
                pending[pendingSrc].onLoad.push(fnOnLoad);
                pending[pendingSrc].onError.push(fnOnError);
            }
            return;
        }
        oScript = pending[pendingSrc] = { loaded: false, onLoad: [fnOnLoad], onError: [fnOnError] };
        if (treatTogether && treatTogether.length > 0) {
            arrayUtils.forEach(treatTogether, function (url) {
                pending[url] = oScript;
            });
        }
    }
    else {
        // multiple loads
        oScript = { loaded: false, onLoad: [fnOnLoad], onError: [fnOnError] };
    }
    var scriptLoader = function () {
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        var done = false;
        var fnOnScriptLoad = function () {
            if (!done) {
                if (oScript.onLoad && oScript.onLoad.length) {
                    for (var i = 0; i < oScript.onLoad.length; i++) {
                        if (typeof oScript.onLoad[i] === 'function') {
                            oScript.onLoad[i]();
                        }
                    }
                }
                oScript.loaded = true;
                oScript.onError = oScript.onLoad = null; // remove memory leak
                done = true;
                if (removeAfter === true) {
                    removeAfter = 0;
                }
                if (removeAfter !== false) {
                    setTimeout(function () {
                        if (script.parentNode) {
                            script.parentNode.removeChild(script);
                        }
                    }, removeAfter);
                }
            }
        };
        script.onload = fnOnScriptLoad;
        script['onreadystatechange'] = function () {
            if (this.readyState === 'loaded') {
                fnOnScriptLoad();
            }
        };
        script.onerror = function () {
            for (var i = 0; i < oScript.onError.length; i++) {
                if (typeof oScript.onError[i] === 'function') {
                    oScript.onError[i]();
                }
            }
            delete pending[src];
        };
        var head = document.getElementsByTagName('head');
        if (head && head.length > 0) {
            head[0].appendChild(script);
        }
        var fnSetScriptSrc = function () {
            var webSdkResourcesDomain = new RegExp("^https?://cdns?.*" + window.gigya.defaultApiDomain);
            var scriptSrc = webSdkResourcesDomain.test(src) ? addSdkVersion(src) : src;
            script.src = scriptSrc;
        };
        if (LocalInfo_1.localInfo.iosVersion >= 6) {
            // iOS 6 breaks setTimeout when animation is active (switching tabs back from a login sequence)
            fnSetScriptSrc();
        }
        else {
            setTimeout(fnSetScriptSrc, 1); // Doing this async gives better performance in older browsers
        }
    };
    if (LocalInfo_1.localInfo.isIE) {
        functionsUtils.invokeOnPageLoad(scriptLoader);
    }
    else {
        scriptLoader();
    }
}
exports.load = load;
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["script"] = 0] = "script";
    ResourceTypes[ResourceTypes["image"] = 1] = "image";
    ResourceTypes[ResourceTypes["iframe"] = 2] = "iframe";
})(ResourceTypes = exports.ResourceTypes || (exports.ResourceTypes = {}));
function triggerResource(url, callback, resourceType, removeAfter) {
    if (resourceType === void 0) { resourceType = ResourceTypes.image; }
    if (removeAfter === void 0) { removeAfter = 5000; }
    switch (resourceType) {
        case ResourceTypes.script:
            load(url, callback, callback, false, removeAfter);
            break;
        case ResourceTypes.image:
            loadImage(url, callback);
            break;
        case ResourceTypes.iframe:
            loadIframe(url, callback, removeAfter);
            break;
        default:
            throw new Error('Unsupported resource type');
    }
}
exports.triggerResource = triggerResource;
function loadImage(url, callback) {
    var img = new Image();
    var loaded = false;
    var fnOnLoad = function () {
        if (!loaded) {
            loaded = true;
            callback();
        }
    };
    img.onload = img.onerror = fnOnLoad;
    img.src = url;
}
function loadIframe(url, callback, removeAfter) {
    if (removeAfter === void 0) { removeAfter = 5000; }
    var ifr = document.createElement('iframe');
    ifr.style.width = '30px';
    ifr.style.height = '10px';
    ifr.style.position = 'absolute';
    ifr.style.top = '-1000px';
    ifr.style.left = '-1000px';
    if (removeAfter === true) {
        removeAfter = 0;
    }
    var fnOnLoad = function (e) {
        var el;
        if (e && e.srcElement) {
            el = e.srcElement;
        }
        else if (e && e.target) {
            el = e.target;
        }
        else {
            el = this;
        }
        if (!el.loaded && el.parentNode) {
            el.loaded = true;
            callback();
            if (removeAfter !== false) {
                window.setTimeout(function () {
                    try {
                        document.body.removeChild(el);
                    }
                    catch (ex) { }
                }, removeAfter);
            }
        }
    };
    DOMUtils.addEventListener(ifr, 'load', fnOnLoad);
    DOMUtils.addEventListener(ifr, 'error', fnOnLoad);
    ifr.onload = function (e) {
        fnOnLoad(e);
    };
    ifr.onerror = fnOnLoad;
    ifr.src = url;
    DOMUtils.appendToBody(ifr);
}
function loadService(serviceName, fnOnError, fnOnLoad) {
    var url = cdn_1.getCdnResource() + '/js/gigya.services.' + serviceName + '.js';
    load(url, function () {
        if (typeof console === 'object' && console.error) {
            console.error('error loading gigya service ' + serviceName + ' from url: ' + url);
            if (fnOnError) {
                fnOnError();
            }
        }
    }, fnOnLoad, true);
}
exports.loadService = loadService;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/stringUtils.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/stringUtils.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function trim(s) {
    return s.replace(/^\s*(\S*(.*\S)?)\s*$/, '$1');
}
exports.trim = trim;
function format(s) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < arguments.length - 1; i++) {
        if (arguments[i + 1] != null) {
            s = s.split('{' + i + '}').join(arguments[i + 1]);
        }
    }
    return s;
}
exports.format = format;
function capitalize(s) {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
}
exports.capitalize = capitalize;
function endsWith(s, suffix) {
    return s.indexOf(suffix, s.length - suffix.length) !== -1;
}
exports.endsWith = endsWith;
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}
exports.escapeRegExp = escapeRegExp;
function replaceAll(str, find, replace) {
    if (!find)
        return str;
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
exports.replaceAll = replaceAll;
function mergeCommaSeparatedValues(str1, str2) {
    if (str1 === void 0) { str1 = ''; }
    if (str2 === void 0) { str2 = ''; }
    var arr = str1.concat(',', str2).split(',');
    return window.gigya.utils.array.getUniqueValues(arr).filter(function (x) { return x; }).join(',');
}
exports.mergeCommaSeparatedValues = mergeCommaSeparatedValues;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/viewport.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/viewport.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getScroll() {
    var scrOfX = 0, scrOfY = 0;
    if (typeof window.pageYOffset == 'number') {
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    }
    else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
    }
    return { left: scrOfX, top: scrOfY };
}
exports.getScroll = getScroll;
function getFullSize() {
    var de = document.documentElement;
    var db = document.body;
    var h = de.clientHeight;
    if (h == 0)
        h = db.clientHeight;
    var w = de.clientWidth;
    if (w == 0)
        w = db.clientWidth;
    return { w: w, h: h };
}
exports.getFullSize = getFullSize;
function getOrientation() {
    var orientation = parseInt(window['orientation'] || '0');
    if (orientation < 0)
        orientation += 360;
    return orientation;
}
exports.getOrientation = getOrientation;
function getInnerSize() {
    var h;
    var w;
    var de = document.documentElement;
    var db = document.body;
    if (window.innerHeight) {
        h = window.innerHeight;
        w = window.innerWidth;
    }
    else {
        h = de.clientHeight;
        if (h == 0)
            h = db.clientHeight;
        w = de.clientWidth;
        if (w == 0)
            w = db.clientWidth;
    }
    return { w: w, h: h };
}
exports.getInnerSize = getInnerSize;
function getMiddleCenter() {
    var scroll = getScroll();
    var size = getInnerSize();
    return {
        top: scroll.top + Math.floor(size.h / 2),
        left: scroll.left + Math.floor(size.w / 2),
    };
}
exports.getMiddleCenter = getMiddleCenter;
function isRectHorizontallyVisible(rect) {
    var scroll = getScroll();
    var size = getInnerSize();
    return rect.left >= scroll.left && rect.right <= scroll.left + size.w;
}
exports.isRectHorizontallyVisible = isRectHorizontallyVisible;
function isRectFullyVisible(rect) {
    var scroll = getScroll();
    var size = getInnerSize();
    return rect.top >= scroll.top && rect.bottom <= scroll.top + size.h && rect.left >= scroll.left && rect.right <= scroll.left + size.w;
}
exports.isRectFullyVisible = isRectFullyVisible;
function scrollIntoView(element) {
    if (element && element.scrollIntoView) {
        element.scrollIntoView();
    }
}
exports.scrollIntoView = scrollIntoView;


/***/ }),

/***/ "./src/core/Gigya.Js/app/cdn.ts":
/*!**************************************!*\
  !*** ./src/core/Gigya.Js/app/cdn.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var selectedCdnHostsIndex = 0;
exports.CDN_HOSTS = {
    http: ['cdn.gigya.com', 'cdn1.gigya.com', 'cdn2.gigya.com', 'cdn3.gigya.com'],
    https: ['cdns.gigya.com', 'cdns1.gigya.com', 'cdns2.gigya.com', 'cdns3.gigya.com'],
};
function getCdnResource(path) {
    var _a, _b, _c, _d;
    // gigya.thisScript may not exist if loaded for ssoOrig.
    var baseDomain = (_b = (_a = window.gigya.thisScript) === null || _a === void 0 ? void 0 : _a.baseDomain, (_b !== null && _b !== void 0 ? _b : ''));
    var protocol = (_d = (_c = window.gigya.thisScript) === null || _c === void 0 ? void 0 : _c.protocol, (_d !== null && _d !== void 0 ? _d : 'https'));
    // If no base domain or if base domain ends with .gigya.com, use Gigya CDN.
    // Otherwise use the base domain.
    if (!baseDomain || /cdns?\.gigya\.com$/.test(baseDomain)) {
        var selectedSchemaRepository = exports.CDN_HOSTS[protocol];
        if (selectedSchemaRepository.length <= selectedCdnHostsIndex) {
            selectedCdnHostsIndex = 0;
        }
        baseDomain = selectedSchemaRepository[selectedCdnHostsIndex++];
    }
    // Ensure the path starts with "/".
    if (path) {
        if (path.indexOf('/') !== 0) {
            path = '/' + path;
        }
    }
    return protocol + '://' + baseDomain + (path || '');
}
exports.getCdnResource = getCdnResource;
function getImgCdnResource() {
    return getCdnResource('/gs/i/');
}
exports.getImgCdnResource = getImgCdnResource;


/***/ }),

/***/ "./src/utils/Gigya.Js.Plugins.Debug/app/DebugPlugin1.ts":
/*!**************************************************************!*\
  !*** ./src/utils/Gigya.Js.Plugins.Debug/app/DebugPlugin1.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Templates_1 = __webpack_require__(/*! src/utils/Gigya.Js.Plugins.Debug/app/Templates */ "./src/utils/Gigya.Js.Plugins.Debug/app/Templates.ts");
var InternalFlows_1 = __webpack_require__(/*! src/core/Gigya.Js/app/InternalFlows */ "./src/core/Gigya.Js/app/InternalFlows.ts");
var DefaultCss_1 = __webpack_require__(/*! src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss */ "./src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss.ts");
var DebugPlugin = /** @class */ (function () {
    function DebugPlugin(params, refString) {
        var _this = this;
        this.params = params;
        this.refString = refString;
        this.templates = window.gigya.utils.object.clone(Templates_1.defaultTemplates, false);
        this.history = [];
        window.gigya._.history = this.history;
        window.gigya.utils.script.load(window.gigya._.getCdnResource('/webSDK/latest/External/jquery-1.11.1.min.js'), null, function () {
            window['$'] = jQuery.noConflict(true);
            window.gigya.utils.functions.createAlias('gigya.debug.addLog', function (log) { return _this.addLog(log); });
            _this.bindEvents();
            _this.initUI();
            _this.refresh();
            window.gigya.events.dispatchForWidget({
                eventName: 'load',
            }, _this.params);
        });
    }
    DebugPlugin.prototype.bindEvents = function () {
        var _this = this;
        window.gigya.events.addMap({
            defaultMethod: function (e) { return _this.onEvent(e); },
            eventMap: [{ events: '*', args: ['$event'] }],
        });
        var onUserEvent = function (e) { return _this.updateUser(e); };
        window.gigya.socialize.addEventHandlers({
            onLogin: onUserEvent,
            onLogout: onUserEvent,
        });
    };
    DebugPlugin.prototype.json2html = function (json, hidden, l) {
        if (l === void 0) { l = 0; }
        var div = $('<div></div>');
        var divDataObject = $('<div class="gig-debug-data-details-object"></div>').appendTo(div);
        var ul = $('<ul></ul>');
        if (hidden) {
            div.addClass('gig-debug-data-details-closed');
        }
        divDataObject.append(ul);
        for (var i in json) {
            if (json.hasOwnProperty(i)) {
                var li = $('<li></li>').appendTo(ul);
                var propNameElement = $('<span class="gig-debug-propertyName"></span>');
                propNameElement.text(i + ':');
                var propValueElement = $('<span class="gig-debug-propertyValue"></span>');
                if (typeof json[i] === 'object') {
                    if (json[i] == null) {
                        propValueElement.text('[NULL]');
                    }
                    else if (l > 6) {
                        propValueElement.text('Too much recursion');
                    }
                    else {
                        var objectButton = $('<div class="gig-debug-data-details-openButton">{ }</div>');
                        var elData = this.json2html(json[i], true, l + 1);
                        objectButton.prop('elData', elData);
                        propValueElement.append(objectButton);
                        propValueElement.append(elData);
                    }
                }
                else if (typeof json[i] == 'function') {
                    propValueElement.text('[FUNCTION]');
                }
                else {
                    propValueElement.text(json[i]);
                }
                li.append(propNameElement);
                li.append(propValueElement);
            }
        }
        return div;
    };
    DebugPlugin.prototype.refresh = function () {
        var _this = this;
        window.gigya.socialize.getUserInfo(this.params, {
            callback: function (res) {
                _this.updateUser(res);
            },
        });
    };
    DebugPlugin.prototype.onEvent = function (e) {
        var log = {
            id: new Date().getTime() + '_' + Math.random(),
            data: { event: e },
            className: e.eventName,
            time: new Date(),
        };
        if (e.eventName == 'afterResponse') {
            if (e.response.errorCode != 0) {
                log.error = true;
            }
            log.html =
                'Got callback for <span data-prop="event">' +
                    e.methodName +
                    '</span>' +
                    (e.source ? ' (source=' + e.source + ', errorCode=' + e.response.errorCode + ')' : '');
        }
        else if (e.eventName == 'beforeRequest') {
            log.html = 'Calling <span data-prop="event">' + e.methodName + '</span>' + (e.source ? ' (source=' + e.source + ')' : '');
        }
        else if (e.eventName == 'beforePluginRequest') {
            log.html =
                'Calling UI plugin <span data-prop="event">' +
                    e.methodName +
                    '</span>' +
                    (e.source && e.source != e.methodName
                        ? ' (source=' + e.source + ')'
                        : e.params && e.params.containerID
                            ? ' (' + e.params.containerID + ')'
                            : '');
        }
        else {
            log.html =
                (e.isGlobal ? 'Global event' : 'Event') +
                    '&nbsp;<span data-prop="event">' +
                    (e.fullEventName || e.eventName) +
                    '</span> fired' +
                    (e.source ? ' (source=' + e.source + ')' : '');
            log.data['event'] = e;
            if (e.eventName == 'error') {
                log.error = true;
            }
        }
        this.addLog(log);
    };
    DebugPlugin.prototype.updateUser = function (response) {
        if (response && response.user) {
            this.currentUser = response.user;
        }
        else {
            this.currentUser = {};
        }
        if (response && response.UID) {
            this.$user.addClass('gig-debug-user-loggedIn');
            this.$user.html('Logged in as ' + (response.user.nickname || (response.user.firstName || '' + ' ' + response.user.lastName || '')) + ' (' + response.UID + ')');
        }
        else {
            this.$user.removeClass('gig-debug-user-loggedIn');
            this.$user.html('Logged out');
        }
    };
    DebugPlugin.prototype.addLog = function (log) {
        log.data = window.gigya.utils.object.clone(log.data, false, false, 6);
        this.$lastLogEntry.empty();
        var $entry = this.getLogEntryElement(log);
        this.$lastLogEntry.append($entry);
        this.history.push(log);
        if (!this.$history)
            return;
        var divLog = this.getLogEntryElement(log);
        this.$history.append(divLog);
        this.$history.scrollTop(this.$history.get(0).scrollHeight);
    };
    DebugPlugin.prototype.clearHistory = function () {
        this.history = [];
        this.$history.empty();
    };
    DebugPlugin.prototype.getLog = function (id) {
        for (var i = 0; i < this.history.length; i++) {
            if (this.history[i].id == id)
                return this.history[i];
        }
    };
    DebugPlugin.prototype.getLogEntryElement = function (log) {
        var _this = this;
        var className = 'gig-debug-history-entry';
        var $log = $('<div></div>')
            .addClass('gig-debug-history-entry')
            .attr('data-log-id', log.id)
            .html('<span class="gig-debug-timestamp">[' + log.time.toLocaleTimeString() + ']</span>' + log.html);
        if (log.className)
            $log.addClass('gig-debug-history-entry-' + log.className);
        if (log.error)
            $log.addClass('gig-debug-history-entry-error');
        $log.find('[data-prop]').click(function (e) { return _this.onDataPropClick(e); });
        return $log;
    };
    DebugPlugin.prototype.onDataPropClick = function (e) {
        var opener = e.target.parentNode;
        var logId = opener.getAttribute('data-log-id');
        var prop = e.target.getAttribute('data-prop');
        var log = this.getLog(logId);
        if (log.data[prop])
            this.showDetails(log.data[prop], e.target);
    };
    DebugPlugin.prototype.showDetails = function (data, opener) {
        if (this.$details)
            this.$details.remove();
        $('.gig-debug-selected').removeClass('gig-debug-selected');
        if (opener)
            $(opener).addClass('gig-debug-selected');
        var elDataContainer = $('<div class="gig-debug-container gig-debug-data-details"></div>');
        this.$details = elDataContainer;
        elDataContainer.css({
            top: this.$barContainer.height() + 5,
        });
        var elData = this.json2html(data, false);
        elData.find('.gig-debug-data-details-openButton').click(function (e) {
            var btn = $(e.target);
            var elData = btn.prop('elData');
            elData.toggleClass('gig-debug-data-details-closed');
            elData.toggleClass('gig-debug-data-details-open');
            btn.toggleClass('gig-debug-data-details-pressed');
        });
        elDataContainer.append(elData);
        elDataContainer.appendTo(document.body);
    };
    DebugPlugin.prototype.getInfo = function () {
        var oInfo = {
            API: {
                'API domain': window.gigya.partnerSettings.plugins['apiDomain'],
                'API adapter': window.gigya._.apiAdapter.name,
            },
            'socialize.js': {
                environment: window.gigya.dataCenter,
                build: window.gigya.build,
                'init time': window.gigya.localInfo.initTime.toLocaleString(),
                'API key': window.gigya.thisScript.APIKey,
                'global conf': window.gigya.thisScript.globalConf,
                language: window.gigya.thisScript.lang,
                'URL params': window.gigya.thisScript.URLParams,
                'base URL': window.gigya.thisScript.baseDomain,
                'found script element': window.gigya.thisScript.scriptElement != null,
                'service queues': window.gigya.utils.queue._servicesStatus(),
            },
            domain: {
                'page domain': window.gigya.localInfo.pageDomain,
                'base domain': window.gigya.localInfo.baseDomain,
                'base domains list': window.gigya.partnerSettings.baseDomains,
                cname: window.gigya.partnerSettings.cname || 'N/A',
            },
            SSO: {
                key: window.gigya.partnerSettings.ssoKey || 'N/A',
                'logout URL': window.gigya.partnerSettings.ssoLogoutUrl || 'N/A',
            },
            browser: {
                'user agent': window.gigya.localInfo.userAgent,
                'window messaging method': InternalFlows_1.MessagingMethod[window.gigya.localInfo['messagingMethod']],
            },
            '3rd party integrations': {
                facebook: {
                    'app ID': (window.gigya.providersConfig.facebook && window.gigya.providersConfig.facebook.appID) || 'N/A',
                    'initialized time': window.gigya.external.facebook.initializedTime ? window.gigya.external.facebook.initializedTime.toLocaleTimeString() : 'N/A',
                    connected: window.gigya.external.facebook.isConnected,
                    'logged in': window.gigya.external.facebook.isLoggedIn,
                },
            },
            'default plugin params': window.gigya.partnerSettings.plugins,
            'local info': window.gigya.localInfo,
        };
        return oInfo;
    };
    DebugPlugin.prototype.initUI = function () {
        var _this = this;
        this.$container = $('#' + this.params['containerID'])
            .addClass('gig-debug-container')
            .html(this.templates['debugBar']);
        this.$barContainer = this.$container.find('.gig-debug-bar-container');
        this.$lastLogEntry = this.$container.find('.gig-debug-lastLog');
        this.$user = this.$container.find('.gig-debug-user');
        this.$user.click(function (e) {
            if (_this.currentUser && _this.currentUser['UID']) {
                _this.showDetails(_this.currentUser, _this.$user);
            }
        });
        this.$apiKey = this.$container
            .find('.gig-debug-apikey')
            .val(window.gigya.thisScript.APIKey)
            .click(function () {
            _this.$apiKey.select();
        });
        this.$historyButton = this.$container.find('.gig-debug-historyButton').click(function () {
            _this.$history.slideToggle();
        });
        this.$detailsButton = this.$container.find('.gig-debug-detailsButton').click(function () {
            if (_this.$details)
                _this.$details.slideToggle();
        });
        this.$saveCheckbox = this.$container
            .find('.gig-debug-autoload')
            .attr('checked', window.gigya.utils.cookie.get('gig_debug') == '1')
            .change(function () {
            window.gigya.utils.cookie.set('gig_debug', _this.$saveCheckbox.is(':checked') ? '1' : '0');
        });
        this.$hideButton = this.$container.find('.gig-debug-hideButton').click(function () {
            _this.$history.slideUp();
            if (_this.$details)
                _this.$details.slideUp();
            _this.$barContainer.slideToggle();
        });
        var infoButton = this.$container.find('.gig-debug-infoButton');
        infoButton.click(function () {
            _this.showDetails(_this.getInfo(), infoButton);
        });
        this.$container.find('.gig-debug-importText').click(function () {
            _this.importJson();
        });
        this.$container.find('.gig-debug-import').change(function (e) {
            _this.onFileSelected(e.target.files);
        });
        this.$container.find('.gig-debug-exportButton').click(function () {
            _this.exportJson();
        });
        this.$container.find('.gig-debug-clearButton').click(function () {
            _this.clearAll();
        });
        var cssPrefix = this.params['cssPrefix'];
        if (cssPrefix || !this.addedCss) {
            window.gigya._.plugins.utils.css.addCss(DefaultCss_1.defaultCss.reset, cssPrefix);
            var fixedCss = window.gigya.pluginUtils.css.fixCss(DefaultCss_1.defaultCss.global);
            window.gigya._.plugins.utils.css.addCss(fixedCss, cssPrefix);
            this.addedCss = true;
        }
        this.$container.addClass('gig-debug-container');
        this.$history = (this.$history || $('<div></div>'))
            .addClass('gig-debug-container')
            .addClass('gig-debug-history')
            .css({
            top: this.$container.offset().top + this.$barContainer.height() + 5,
        })
            .appendTo(document.body)
            .hide();
    };
    DebugPlugin.prototype.importJson = function () {
        var btn = this.$container.find('.gig-debug-importButton');
        btn.addClass('gig-debug-import-shown');
    };
    DebugPlugin.prototype.onFileSelected = function (files) {
        var _this = this;
        var input = this.$container.find('.gig-debug-import');
        var btn = this.$container.find('.gig-debug-importButton');
        var reader = new FileReader();
        $(reader).load(function (event) {
            var file = event.target;
            _this.clearAll();
            if (_this.$details)
                _this.$details.slideUp();
            try {
                var oImport = JSON.parse(file.result);
                _this.addLog({
                    html: '=== Importing <span data-prop="info">' + input.val() + '</span> ===',
                    data: { info: oImport.info },
                    id: new Date().getTime() + '_' + Math.random(),
                    time: new Date(),
                });
                for (var i = 0; i < oImport.history.length; i++) {
                    var log = oImport.history[i];
                    log.time = new Date(log.time);
                    _this.addLog(log);
                }
                btn.removeClass('gig-debug-import-shown');
                _this.addLog({
                    html: '=== Import of <span data-prop="info">' + input.val() + '</span> complete ===',
                    data: { info: oImport.info },
                    id: new Date().getTime() + '_' + Math.random(),
                    time: new Date(),
                });
            }
            catch (ex) {
                _this.addLog({
                    html: '=== Import of <span data-prop="exception">' + input.val() + '</span> failed ===',
                    data: { exception: ex },
                    id: new Date().getTime() + '_' + Math.random(),
                    time: new Date(),
                    error: true,
                });
            }
        });
        reader.readAsText(files[0]);
    };
    DebugPlugin.prototype.clearAll = function () {
        this.clearHistory();
        this.$lastLogEntry.empty();
        if (this.$details)
            this.$details.slideUp();
        $('.gig-debug-selected').removeClass('gig-debug-selected');
    };
    DebugPlugin.prototype.exportJson = function () {
        var json = JSON.stringify(window.gigya.utils.object.clone({ history: this.history, info: this.getInfo() }, true, false, 4, null, true));
        var d = new Date();
        var filename = 'GigyaDebug_' + [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('-') + '_' + d.getHours() + '_' + d.getMinutes() + '.json';
        if (typeof Blob != 'undefined') {
            var blob = new Blob([json], { type: 'application/json' });
            var url = URL.createObjectURL(blob);
            if (navigator.msSaveBlob) {
                navigator.msSaveBlob(blob, filename);
            }
            else if ('download' in document.createElement('a')) {
                var a = document.createElement('a');
                a.setAttribute('href', url);
                a.setAttribute('download', filename);
                var clickEvent = document.createEvent('MouseEvent');
                clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null); // yuck!
                a.dispatchEvent(clickEvent);
            }
            else {
                window.open(url, '_blank', '');
            }
        }
        else {
            var ifr = document.createElement('iframe');
            ifr.style.display = 'none';
            window.gigya.utils.DOM.appendToBody(ifr);
            var doc = ifr.contentWindow.document;
            doc.open('application/json', 'replace');
            doc.charset = 'utf-8';
            doc.write(json);
            doc.close();
            doc.execCommand('SaveAs', true, filename.replace('.json', '.txt'));
            window.setTimeout(function () {
                ifr.parentNode.removeChild(ifr);
            }, 1000);
        }
    };
    return DebugPlugin;
}());
exports.DebugPlugin = DebugPlugin;


/***/ }),

/***/ "./src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss.ts":
/*!************************************************************!*\
  !*** ./src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.imgBase = window.gigya._.getCdnResource('/gs/i/comments2/');
exports.defaultCss = {
    reset: [
        '.gig-debug-container *, *.gig-debug-container {',
        'word-wrap:break-word;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;height:auto;',
        'font-family:arial;color:#FFF;position:static;text-align:left;vertical-align:baseline;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}',
    ].join(''),
    global: [
        'body {padding-top:100px !important}',
        '.gig-debug-container {z-index:99999999999999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;',
        'padding:5px;font-size:12px;position:fixed !important;top:0;left:0;width:100%;background-color:#000;opacity:0.85;color:#FFF}',
        '*.gig-debug-user {margin-bottom:5px;display:inline-block;}',
        '*.gig-debug-user-loggedIn {cursor:pointer;}',
        '*.gig-debug-selected {background-color:#FFF !important;color:#000 !important;border: 2px solid #FFFFFF;}',
        '*.gig-debug-user-loggedIn:hover {text-decoration:underline}',
        '*.gig-debug-apikey-container {margin-bottom:5px;background-color:#000;}',
        '*.gig-debug-apikey {width:500px;background-color:#000;border:none;}',
        '*.gig-debug-lastLog {display:inline-block;line-height:18px;}',
        '*.gig-debug-settings {margin-bottom:5px}',
        '*.gig-debug-footer {overflow:hidden;margin-top:5px;}',
        '*.gig-debug-historyButton, *.gig-debug-hideButton, *.gig-debug-detailsButton, *.gig-debug-infoButton, *.gig-debug-importButton, *.gig-debug-exportButton, *.gig-debug-clearButton {',
        'margin-right:20px;display:inline-block;width: 18px;text-align:center;font-size:15px;border: 1px solid #000;background-color:#3A3A3A;cursor: pointer;',
        'font-weight:bold}',
        '*.gig-debug-infoButton, *.gig-debug-importButton, *.gig-debug-exportButton, *.gig-debug-clearButton  {width:auto;padding: 0 3px;font-size:12px;}',
        '*.gig-debug-detailsButton, *.gig-debug-infoButton, *.gig-debug-importButton, *.gig-debug-exportButton, *.gig-debug-clearButton {float:right;margin-right:15px}',
        '*.gig-debug-historyButton.pressed, .gig-debug-historyButton:hover, *.gig-debug-hideButton:hover, ',
        '*.gig-debug-detailsButton.pressed, .gig-debug-detailsButton:hover, {background-color:#4A4A4A;}',
        '*.gig-debug-timestamp {margin-right:10px;color:#ffd800;}',
        '*.gig-debug-history {position: absolute;border:1px solid #000;border-radius:7px;border:1px solid #FFF;',
        'background-color:#000;color:#FFF;width:50%;height:400px;overflow: auto;padding:10px;}',
        '*.gig-debug-history div {font-weight:bold;}',
        '*.gig-debug-history-entry [data-prop] {color:#b6ff00;text-decoration:underline;cursor: pointer;}',
        '*.gig-debug-history-entry-error {background-color:#FF0000;}',
        '*.gig-debug-history-entry-beforeRequest [data-prop], *.gig-debug-history-entry-afterResponse [data-prop] {color:#B1B100;}',
        '*.gig-debug-history-entry-beforeRequest [data-prop], *.gig-debug-history-entry-beforePluginReqwuest [data-prop] {color:#3399FF;}',
        '*.gig-debug-hideButton {position:fixed;top:0;right:0;}',
        '*.gig-debug-data-details {width: 50%;left: 50%;height:400px;overflow:auto;border-radius:7px;border:1px solid #FFF;}',
        '*.gig-debug-data-details  li {margin-left:20px;}',
        '*.gig-debug-data-details  ul {}',
        '*.gig-debug-data-details-openButton {font-size:11px;display:inline-block;width: 15px;height:15px;line-height:15px;text-align:center;display:inline-block;cursor:pointer;}',
        '*.gig-debug-data-details-pressed {background-color:#FFF; color:#000;}',
        '*.gig-debug-data-details-closed, *.gig-debug-data-details-open {vertical-align:top;}',
        '*.gig-debug-data-details-closed {display:none}',
        '*.gig-debug-propertyName {color: #FFFF00;font-weight:bold;}',
        '*.gig-debug-propertyValue {margin-left:5px;}',
        '*.gig-debug-import {display:none}',
        '*.gig-debug-import-shown .gig-debug-import {display:inline-block;font-size:9px;}',
        '*.gig-debug-import-shown .gig-debug-importText {display:none;}',
    ].join(''),
};


/***/ }),

/***/ "./src/utils/Gigya.Js.Plugins.Debug/app/Templates.ts":
/*!***********************************************************!*\
  !*** ./src/utils/Gigya.Js.Plugins.Debug/app/Templates.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTemplates = {
    debugBar: [
        '<div class="gig-debug-hideButton">_</div>',
        '<div class="gig-debug-bar-container">',
        '<div class="gig-debug-user">&nbsp;</div>',
        '<div class="gig-debug-apikey-container">API key: <input class="gig-debug-apikey" readonly="readonly">&nbsp;</input></div>',
        '<div class="gig-debug-settings">',
        '<input type="checkbox" class="gig-debug-autoload"></input>&nbsp;Auto load</input>',
        '</div>',
        '<div style="gig-debug-footer">',
        '<div class="gig-debug-historyButton">...</div>',
        '<div class="gig-debug-lastLog">&nbsp;</div>',
        '<div class="gig-debug-detailsButton">...</div>',
        '<div class="gig-debug-infoButton">Info</div>',
        '<div class="gig-debug-importButton"><span class="gig-debug-importText">Import</span><input class="gig-debug-import" type="file" /></div>',
        '<div class="gig-debug-exportButton">Export</div>',
        '<div class="gig-debug-clearButton">Clear</div>',
        '</div>',
        '</div>',
    ].join(''),
};


/***/ }),

/***/ "./src/utils/Gigya.Js.Plugins.Debug/app/index.ts":
/*!*******************************************************!*\
  !*** ./src/utils/Gigya.Js.Plugins.Debug/app/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsDebug = __webpack_require__(/*! src/utils/Gigya.Js.Plugins.Debug/app/DebugPlugin1 */ "./src/utils/Gigya.Js.Plugins.Debug/app/DebugPlugin1.ts");
var Gigya_PluginsDebug_1 = __webpack_require__(/*! src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss */ "./src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss.ts");
var Gigya_PluginsDebug_2 = __webpack_require__(/*! src/utils/Gigya.Js.Plugins.Debug/app/Templates */ "./src/utils/Gigya.Js.Plugins.Debug/app/Templates.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.debug) {
    window.gigya._.plugins.debug = {};
}
if (!window.gigya._.plugins.debug.DebugPlugin) {
    window.gigya._.plugins.debug.DebugPlugin = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.debug, Gigya_PluginsDebug, Gigya_PluginsDebug_1, Gigya_PluginsDebug_2);
window.gigya._.UI.attachPlugin(Gigya_PluginsDebug.DebugPlugin, 'socialize', 'debug', 'showDebugUI');

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0ludGVybmFsRmxvd3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvRE9NLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VUkwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL1VyaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvYXJyYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZG9tYWlucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZnVuY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9rZXlWYWx1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvbG9jYWxTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3ZpZXdwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9jZG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0dpZ3lhLkpzLlBsdWdpbnMuRGVidWcvYXBwL0RlYnVnUGx1Z2luMS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvR2lneWEuSnMuUGx1Z2lucy5EZWJ1Zy9hcHAvRGVmYXVsdENzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvR2lneWEuSnMuUGx1Z2lucy5EZWJ1Zy9hcHAvVGVtcGxhdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9HaWd5YS5Kcy5QbHVnaW5zLkRlYnVnL2FwcC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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QUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwSixFQUFFLENBQUMsQ0FBQztRQUVKLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUMvRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBRS9FLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDVCxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUIsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQzlFLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxD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QUFhLENBQUMsWUFBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFFckcsWUFBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdXRpbHMvR2lneWEuSnMuUGx1Z2lucy5EZWJ1Zy9hcHAvaW5kZXgudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZW51bSBHU0Vycm9ycyB7XHJcbiAgICBPSyA9IDAsXHJcbiAgICBEYXRhX1BlbmRpbmcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXHJcbiAgICBORVRXT1JLX0VSUk9SID0gNTAwMDI2LFxyXG4gICAgREFUQV9QRU5ESU5HID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxyXG4gICAgT1BFUkFUSU9OX0NBTkNFTEVEID0gMjAwMDAxLCAvLyB1c2VyIGNhbmNlbGVkLCBpbiBsb2dpbiBwcm9jZXNzXHJcbiAgICBQRVJNSVNTSU9OX0dSQU5URUQgPSAyMDAwMDIsIC8vIElubmVyIGNvZGVcclxuICAgIFBFUk1JU1NJT05fTk9UX0dSQU5URUQgPSAyMDAwMDMsIC8vIElubmVyIGNvZGVcclxuICAgIFJFRElSRUNUID0gMjAwMDA0LCAvLyBJbm5lciBjb2RlXHJcbiAgICBORVdfVVNFUiA9IDIwMDAwNSwgLy8gSW5uZXIgY29kZVxyXG4gICAgT1BFUkFUSU9OX0RPTkUgPSAyMDAwMDYsIC8vIElubmVyIGNvZGVcclxuICAgIFVQREFURV9VU0VSID0gMjAwMDA3LCAvLyBJbm5lciBjb2RlXHJcbiAgICBPS19XSVRIX0VSUk9SUyA9IDIwMDAwOCwgLy8gRm9yIHJlcG9ydHMgLSB3aGVuIHdlIHJldHVybiBvayB0byBjbGllbnQgYnV0IGhhZCBhY2NlcHRhYmxlIGVycm9ycyAodGhhdCB3ZSB3YW50IHRvIGtub3cgYWJvdXQpIG9uIHRoZSB3YXlcclxuICAgIEFDQ09VTlRTX0xJTktFRCA9IDIwMDAwOSwgLy8gQWZ0ZXIgbGlua2lnbiBhY2NvdXRucyB2aWEgbG9naW4sIHJldHVybiB0aGlzIGVycm9yIGNvZGVcclxuICAgIE9LX1dJVEhfRVJST1JfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSAyMDAwMTAsIC8vIEZvciBzZXRBY2NvdW50SW5mbyB1c2luZyB0aGUgY29uZmxpY3RIYW5kbGluZyBwYXJhbSAtIHByb2ZpbGUgd2FzIHNhdmVkLCBidXQgdGhlIGVtYWlsIGNvbmZsaWN0cyB3aXRoIGFub3RoZXIgdXNlclxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1JFR0lTVFJBVElPTiA9IDIwNjAwMSwgLy8gRm9yIGFjY291bnRzIEFQSSxcclxuICAgIEFDQ09VTlRfUEVORElOR19WRVJJRklDQVRJT04gPSAyMDYwMDIsIC8vIEZvciBhY2NvdW50cyBBUEk7IGNvbnNpZGVyIG1vdmluZyB0byA0MDN4eHggc2VjdGlvbiBpbiB0aGUgZnV0dXJlLlxyXG4gICAgQUNDT1VOVF9NSVNTSU5HX0xPR0lOSUQgPSAyMDYwMDMsIC8vIEZvciBhY2NvdW50cyBBUElcclxuICAgIElERU5USVRZX0FMUkVBRFlfQVNTSUdORUQgPSAyMDYwMDQsIC8vIEZvciBpbXBvcnQgYWNjb3VudHMgQVBJXHJcbiAgICBBRlRFUl9FTUFJTF9WRVJJRklDQVRJT04gPSAyMDYwMDUsXHJcbiAgICBQRU5ESU5HX0NPREVfVkVSSUZJQ0FUSU9OID0gMjA2MDA2LFxyXG4gICAgQ0xJRU5UX0xPRyA9IDMwMDAwMSwgLy8gaW50ZXJuYWwsIGZvciByZXBvcnRpbmcgZXJvcnJzIGluIGNsaWVudCBTREtTXHJcbiAgICBJTlZBTElEX0RBVEFfQ0VOVEVSID0gMzAxMDAxLCAvLyBcIkludmFsaWQgZGF0YS1jZW50ZXJcIi4gd2l0aCBlcnJvciBkZXRhaWxzIG9mOiBcIlRoaXMgQVBJIGtleSBpcyBzZXJ2ZWQgYnkgYW5vdGhlciBkYXRhIGNlbnRlclwiLlxyXG4gICAgSU5WQUxJRF9SRVFVRVNUX0ZPUk1BVCA9IDQwMDAwMSwgLy8gY291bGQgYmUgYWxsIGtpbmQgb2YgZXJyb3JzIHdpdGggd3JvbmcgcmVxdWVzdCAobm9uIHNlY3VyZSB3aGVuIHNob3VsZCBiZSBzZWN1cmUsIHdyb25nIGF1dGhlbnRpY2F0aW9uIGhlYWRlcilcclxuICAgIE1JU1NJTkdfUkVRVUlSRURfUEFSQU1FVEVSID0gNDAwMDAyLFxyXG4gICAgVU5JUVVFX0lERU5USUZJRVJfRVhJU1RTID0gNDAwMDAzLFxyXG4gICAgSU5WQUxJRF9QQVJBTUVURVJfRk9STUFUID0gNDAwMDA0LFxyXG4gICAgSU5WQUxJRF9QQVJBTUVURVJfVkFMVUUgPSA0MDAwMDYsXHJcbiAgICBEVVBMSUNBVEVfVkFMVUUgPSA0MDAwMDcsXHJcbiAgICBJTlZBTElEX0FVVEhFTlRJQ0FUSU9OX0hFQURFUiA9IDQwMDAwOCwgLy8gT0F1dGgyXHJcbiAgICBWQUxJREFUSU9OX0VSUk9SID0gNDAwMDA5LCAvLyBJbiBhY2NvdW50cy5yZWdpc3Rlciwgd2hlbmV2ZXIgdGhlcmUgaXMgYSB2YWxpZGF0aW9uIGVycm9yXHJcbiAgICBJTlZBTElEX1JFRElSRUNUX1VSSSA9IDQwMDAxMSwgLy8gT0F1dGgyXHJcbiAgICBJTlZBTElEX1JFU1BPTlNFX1RZUEUgPSA0MDAwMTIsIC8vIE9BdXRoMlxyXG4gICAgVU5TVVBQT1JURURfR1JBTlRfVFlQRSA9IDQwMDAxMywgLy8gT0F1dGgyXHJcbiAgICBJTlZBTElEX0dSQU5UID0gNDAwMDE0LCAvLyBPQXV0aDJcclxuICAgIENPREVfRVhQSVJFRCA9IDQwMDAxNSwgLy8gT0F1dGgyXHJcbiAgICBTQ0hFTUFfVkFMSURBVElPTl9GQUlMRUQgPSA0MDAwMjAsXHJcbiAgICBDQVBUQ0hBX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwMjEsXHJcbiAgICBVTklRVUVfSU5ERVhfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMixcclxuICAgIElOVkFMSURfVFlQRV9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDIzLFxyXG4gICAgRFlOQU1JQ19GSUVMRFNfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNCxcclxuICAgIFdSSVRFX0FDQ0VTU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI1LFxyXG4gICAgSU5WQUxJRF9GT1JNQVRfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNixcclxuICAgIFJFUVVJUkVEX1ZBTFVFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjcsXHJcbiAgICBFTUFJTF9OT1RfVkVSSUZJRUQgPSA0MDAwMjgsXHJcbiAgICBTQ0hFTUFfQ09ORkxJQ1RfRVJST1IgPSA0MDAwMjksIC8vIFRvIGhhbmRsZSBVc2VyIHN0b3J5IDM0MzMwLiBJbXByb3ZlIEVsYXN0aWNTZWFyY2hNYXBwaW5nRXhjZXB0aW9uIGhhbmRsaW5nIGluIERTLkluZGV4T2JqZWN0XHJcbiAgICBPUEVSQVRJT05fTk9UX0FMTE9XRUQgPSA0MDAwMzAsIC8vIFVzZXIgc3RvcnkgMzQzMTEgLSBJZiBhZGRDb25uZWN0aW9uIGlzIGNhbGxlZCByZXR1cm4gYW4gZXJyb3IgKFwib3BlcmF0aW9uIG5vdCBhbGxvd2VkIGZvciB0aGlzIGFjY291bnRcIiwgNDAwWFhYIGVycm9yKS5cclxuICAgIFNFQ1VSSVRZX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwNTAsXHJcbiAgICBJTlZBTElEX0FQSUtFWV9QQVJBTUVURVIgPSA0MDAwOTMsXHJcbiAgICBOT1RfU1VQUE9SVEVEID0gNDAwMDk2LCAvLyB0aGUgZnVuY3Rpb24gaXMgbm90IHN1cHBvcnRlZCBieSBhbnkgb2YgdGhlIGN1cnJlbnRseSBjb25uZWN0ZWQgcHJvdmlkZXJzXHJcbiAgICBVTlNVUFBPUlRFRF9VU0VSX0FHRU5UID0gNDAwMDk3LCAvL1xyXG4gICAgTk9fUFJPVklERVJTID0gNDAwMTAwLCAvLyBjbGllbnQ/XHJcbiAgICBQT1BVUF9CTE9DS0VEID0gNDAwMTAxLCAvLyBjbGllbnRcclxuICAgIElOVkFMSURfRVZFTlRfSEFORExFUiA9IDQwMDEwMiwgLy8gY2xpZW50XHJcbiAgICBJTlZBTElEX0NPTlRBSU5FUklEID0gNDAwMTAzLCAvLyBjbGllbnRcclxuICAgIE5PVF9DT05ORUNURUQgPSA0MDAxMDYsIC8vIHVzZXIgaXMgbm90IGNvbm5lY3RlZCB0byB0aGUgcmVxdWlyZWQgbmV0d29yayBvciB0byBhbnkgbmV0d29ya1xyXG4gICAgSU5WQUxJRF9TSVRFX0RPTUFJTiA9IDQwMDEyMCwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcclxuICAgIFBST1ZJREVSX0NPTkZJR1VSQVRJT05fRVJST1IgPSA0MDAxMjIsIC8vIHRoZSBjdXJyZW50IGRvbWFpbiBkb2VzIG5vdCBtYXRjaCB0aGUgZG9tYWluIGNvbmZpZ3VyZWQgZm9yIHRoZSBhcGkga2V5XHJcbiAgICBMSU1JVF9SRUFDSEVEID0gNDAwMTI0LCAvLyBHYW1lTWVjaGFuaWNzIC0gQ2FwIHdhcyByZWFjaGVkXHJcbiAgICBGUkVRVUVOQ1lfTElNSVRfUkVBQ0hFRCA9IDQwMDEyNSwgLy8gQ29tbWVudHMvRmVlZCAtIFNwYW0gQ2FwcyB3YXMgcmVhY2hlZFxyXG4gICAgSU5WQUxJRF9BQ1RJT04gPSA0MDAxMjYsIC8vIEdhbWVNZWNoYW5pY3MgLSBJbnZhbGlkIGFjdGlvbi4gVHJpZ2dlcmVkIGFjdGlvbiBjYW4ndCBiZSBpbml0aWF0ZWQgZXh0ZXJuYWxseVxyXG4gICAgSU5TVUZGSUNJRU5UX1BPSU5UU19UT19SRURFRU0gPSA0MDAxMjcsIC8vIEdhbWVNZWNoYW5pY3MgLSBJbnN1ZmZpY2llbnRfcG9pbnRzX3RvX3JlZGVlbVxyXG4gICAgU0lHTkFUVVJFX1RJTUVTVEFNUF9FWFBJUkVEID0gNDAwMTI4LCAvLyB0aGUgdGltZXN0YW1wIGluc2lkZSB0aGUgc2lnbmF0dXJlIGlzIGV4cGlyZWRcclxuICAgIElOVkFMSURfUE9MSUNZX0NPTkZJR1VSQVRJT04gPSA0MDEwMDAsIC8vIFBvbGljeSBjb25maWd1cmF0aW9uIGlzIGludmFsaWQgKGkuZS4gcHJldmVudCByZWdpdHJhdGlvbilcclxuICAgIFNVU1BFQ1RFRF9TUEFNID0gNDAxMDEwLCAvLyBTb21lb25lIGlzIHRyeWluZyB0byB1c2UgR2lneWEgdG8gc2VuZCBhIGVtYWlsIHdpdGggYSBVUkwgdGhhdCBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlIGNsaWVudCdzIGRvbWFpbnM7IHN1c3BlY3RlZCBzcGFtLlxyXG4gICAgTE9HSU5fRkFJTEVEX0NBUFRDSEFfUkVRVUlSRUQgPSA0MDEwMjAsIC8vIGFjY291bnRzLmxvZ2luIC0gY2FwdGNoYSByZXF1aXJlZFxyXG4gICAgTE9HSU5fRkFJTEVEX1dST05HX0NBUFRDSEEgPSA0MDEwMjEsIC8vIGFjY291bnRzLmxvZ2luIC0gd3JvbmcgY2FwdGNoYSBjb2RlXHJcbiAgICBPTERfUEFTU1dPUkRfVVNFRCA9IDQwMTAzMCwgLy8gVGhlIHVzZXIgcHJvdmlkZWQgaGlzIHByZXZpb3VzIHBhc3N3b3JkLCBub3QgdGhlIGN1cnJlbnQgb25lXHJcbiAgICBGT1JCSURERU4gPSA0MDMwMDAsXHJcbiAgICBJTlZBTElEX1NFU1NJT05fVE9LRU4gPSA0MDMwMDEsIC8vIGludGVybmFsXHJcbiAgICBSRVFVRVNUX0hBU19FWFBJUkVEID0gNDAzMDAyLCAvLyB0aGUgdGltZXN0YW1wIG9yIGV4cGlyYXRpb24gb2YgdGhlIHRva2VuIHVzZWQgZXhjZWVkZWQgdGhlIGFsbG93ZWQgdGltZSB3aW5kb3dcclxuICAgIElOVkFMSURfUkVRVUVTVF9TSUdOQVRVUkUgPSA0MDMwMDMsXHJcbiAgICBEVVBMSUNBVEVfTk9OQ0UgPSA0MDMwMDQsXHJcbiAgICBVTkFVVEhPUklaRURfVVNFUiA9IDQwMzAwNSwgLy8gdGhlIHVzZXIgaWQgcGFzc2VkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBzaXRlXHJcbiAgICBTRU5TSVRJVkVfREFUQV9TRU5UX09WRVJfSFRUUCA9IDQwMzAwNiwgLy8gd2hlbiBzZW5kaW5nIHRoZSBzZWNyZXQga2V5IGluIFJFU1QgaXQgaGFzIHRvIGJlIG92ZXIgSFRUUFNcclxuICAgIFBFUk1JU1NJT05fREVOSUVEID0gNDAzMDA3LCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBQZXJtaXNzaW9uIGRlbmllZCAocmVhZE9ubHksbW9kZXJhdGlvbiBzaXRlKS5cclxuICAgIElOVkFMSURfT1BFTklEX1VSTCA9IDQwMzAwOCwgLy8gY2Fubm90IGZpbmQgYW4gb3BlbklkIGVuZHBvaW50IG9uIHRoZSB1cmwgb3IgdXNlcm5hbWUgZ2l2ZW4gZm9yIG9wZW5JZCBsb2dpblxyXG4gICAgUFJPVklERVJfU0VTU0lPTl9FWFBJUkVEID0gNDAzMDA5LCAvLyB0aGUgdXNlciBzZXNzaW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIGV4cGlyZWRcclxuICAgIElOVkFMSURfU0VDUkVUID0gNDAzMDEwLCAvLyB0aGUgcmVxdWVzdCBoYXMgYW4gaW52YWxpZCBzZWNyZXQga2V5XHJcbiAgICBTRVNTSU9OX0hBU19FWFBJUkVEID0gNDAzMDExLCAvLyB0aGUgc2Vzc2lvbiBmb3IgdGhpcyB1c2VyIGhhcyBleHBpcmVkXHJcbiAgICBOT19WQUxJRF9TRVNTSU9OID0gNDAzMDEyLCAvLyByZXF1ZXN0ZWQgdXNlciBoYXMgbm8gdmFsaWQgc2Vzc2lvblxyXG4gICAgVU5WRVJJRklFRF9VU0VSID0gNDAzMDEzLCAvLyB0aGUgdXNlciBpcyBub3QgdmVyaWZpZWQgaW4gU1NPIHNlc3Npb25cclxuICAgIE1JU1NJTkdfUkVRVUVTVF9SRUZFUlJFUiA9IDQwMzAxNSwgLy8gd2UgY2FuJ3QgdmFsaWRhdGUgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVmZXJyZXIgaGVhZGVyIGlzIG1pc3NpbmdcclxuICAgIFVORVhQRUNURURfUFJPVklERVJfVVNFUiA9IDQwMzAxNywgLy8gdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBvbmUgZXhwZWN0ZWRcclxuICAgIFBFUk1JU1NJT05fTk9UX1JFUVVFU1RFRCA9IDQwMzAyMiwgLy8gdGhlIGFjdGlvbiBuZWVkcyBhIHVzZXIgcGVybWlzc2lvbiBhbmQgaXQgd2FzIG5vdCByZXF1ZXN0ZWRcclxuICAgIE5PX1VTRVJfUEVSTUlTU0lPTiA9IDQwMzAyMywgLy8gdGhlIGFjdGlvbiBuZWVkcyBhIHVzZXIgcGVybWlzc2lvbiBhbmQgd2UgZG9uJ3QgaGF2ZSBvbmVcclxuICAgIFBST1ZJREVSX0xJTUlUX1JFQUNIRUQgPSA0MDMwMjQsIC8vIHRoZSBwcm92aWRlciBsaW1pdCBmb3IgdGhpcyBhY3Rpb24gd2FzIGV4Y2VlZGVkXHJcbiAgICBJTlZBTElEX1RPS0VOID0gNDAzMDI1LCAvLyBPQXV0aDJcclxuICAgIFVOQVVUSE9SSVpFRF9BQ0NFU1NfRVJST1IgPSA0MDMwMjYsIC8vIENhbGxzIHRvIGFjY291bnRzLmlzQXZhaWxhYmxlTG9naW5JRCBXaGVuIHByZXZlbnRMb2dpbklESGFydmVzdGluZyA9IHRydWUgc2hvdWxkIHJldHVybiBhbiBhcHByb3ByaWF0ZSA0MDN4eHggdW5hdXRob3JpemVkIGFjY2VzcyBlcnJvci5cclxuICAgIERJRkZFUkVOVF9VU0VSX0ZPUl9SRUFVVEggPSA0MDMwMjcsIC8vIERpZmZlcmVudCB1c2VyIHRyaWVkIHRvIHJlLWF1dGhvcml6ZS5cclxuICAgIFNFU1NJT05fRVhQSVJFRF9SRVRSWSA9IDQwMzAzMCwgLy8gSW5uZXIgY29kZSAtIHdoZW4gdGhlIGZhY2Vib29rIHNlc3Npb24gaXMgZXhwaXJlZCBhbmQgdGhlIGNsaWVudCB3YWl0cyBmb3IgRkIgb24gcGFnZSB0byBsb2FkXHJcbiAgICBBUFBST1ZFRF9CWV9NT0RFUkFUT1IgPSA0MDMwMzEsIC8vIGNvbW1lbnRzIC0gY2FudCBmbGFnIGNvbW1lbnQsIGl0IHdhcyBhcHByb3ZlZCBieSB0aGUgbW9kZXJhdG9yIGFscmVhZHkuXHJcbiAgICBUT0tFTl9IQVNfUkVORVdFRCA9IDQwMzAzMiwgLy8gdGhlIHRva2VuIGlzIG5vIGxvbmdlciB2YWxpZCwgYnV0IHdlIGhhdmUgbmV3IHRva2VuIHRvIHByb3ZpZGVcclxuICAgIE5PX1VTRVJfQ09PS0lFID0gNDAzMDM1LCAvLyBubyB1c2VyIGNvb2tpZVxyXG4gICAgVU5BVVRIT1JJWkVEX1BBUlRORVIgPSA0MDMwMzYsIC8vIHBhcnRuZXIgaXMgZGlzYWJsZWRcclxuICAgIFBPU1RfREVOSUVEID0gNDAzMDM3LCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBQb3N0IGRlbmllZCB3aGVuIHRoZSB1c2VyIHRyaWVkIHRvIHJldmlldyB0d2ljZS5cclxuICAgIE5PX0xPR0lOX1RJQ0tFVCA9IDQwMzA0MCwgLy8gbm8gbG9naW4gdGlja2V0IGluIGNhbGxiYWNrIHVybFxyXG4gICAgQUNDT1VOVF9ESVNBQkxFRCA9IDQwMzA0MSwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiBncy5hY2NvdW50cy5Jc0FjdGl2ZT1mYWxzZVxyXG4gICAgSU5WQUxJRF9MT0dJTklEID0gNDAzMDQyLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byBsb2dpbiB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcclxuICAgIExPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gNDAzMDQzLCAvLyBGb3IgYWNjb3VudDogSWYgcHJvdmlkZXJFbWFpbCBpcyBkZWZpbmVkIGFzIGEgbG9naW5JZGVudGlmaWVyIGluIHRoZSBwb2xpY3ksIGFuZCB0aGUgZW1haWwgYWRkcmVzcyByZWNlaXZlZCBmcm9tIHRoZSBwcm92aWRlciBleGlzdHMgaW4gdGhlIGdzLmxvZ2luSWRlbnRpZmllcnMgY29sbGVjdGlvbiBidXQgYXNzb2NpYXRlZCB3aXRoIGEgZGlmZmVyZW50IFVVSUQgdGhhbiB0aGUgY3VycmVudCB1c2VyLCB0aGVuIHJldHVybiBcIkxvZ2luIGlkZW50aWZpZXIgZXhpc3RzXCIgZXJyb3IgY29kZSAoNDAzeHh4KS5cclxuICAgIFVOREVSQUdFX1VTRVIgPSA0MDMwNDQsIC8vIEZvciBDT1BQQSBjb21wbGlhbmNlIChDaGlsZHJlbidzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0KVxyXG4gICAgSU5WQUxJRF9TSVRFX0NPTkZJR1VSQVRJT05fRVJST1IgPSA0MDMwNDUsIC8vIEZvciBhY2NvdW50cyAtIHNpdGUgRFMgaXMgZW5hYmxlZCB0aG91Z2ggbm8gRFNTaXplIHdhcyBjb25maWd1cmVkLlxyXG4gICAgTE9HSU5JRF9ET0VTX05PVF9FWElTVCA9IDQwMzA0NywgLy8gRm9yIGFjY291bnRzIC0gd2hlbiB0cnlpbmcgdG8gcmVzZXQgcGFzc3dvcmQgd2l0aCBhIGxvZ2luSUQgdGhhdCBkbyBub3QgZXhpc3RzXHJcbiAgICBBUElfUkFURV9MSU1JVF9FWENFRURFRCA9IDQwMzA0OCxcclxuICAgIFBFTkRJTkdfUEFTU1dPUkRfQ0hBTkdFID0gNDAzMTAwLCAvLyBUaGUgdXNlcidzIHBhc3N3b3JkIG5lZWRzIHRvIGJlIGNoYW5nZWRcclxuICAgIEFDQ09VTlRfUEVORElOR19URkFfVkVSSUZJQ0FUSU9OID0gNDAzMTAxLFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9SRUdJU1RSQVRJT04gPSA0MDMxMDIsXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVDRU5UX0xPR0lOID0gNDAzMTEwLFxyXG4gICAgQUNDT1VOVF9URU1QT1JBUklMWV9MT0NLRURfT1VUID0gNDAzMTIwLCAvLyBUb28gbWFueSBsb2dpbiBhdHRlbXB0czsgYWNjb3VudCBsb2NrZWQtb3V0XHJcbiAgICBSRURVTkRBTlRfT1BFUkFUSU9OID0gNDAzMjAwLCAvLyBUaGUgY2xpZW50IHBlcmZvcm1lZCBhbiBvcGVyYXRpb24gdGhhdCBpcyByZWR1bmRhbnRcclxuICAgIElOVkFMSURfQVBQTElDQVRJT05fSUQgPSA0MDMyMDEsIC8vIFRoZSBhcHAgaWQgcHJvdmlkZWQgaXMgZGlmZmVyZW50IHRoYW4gdGhlIG9uZSBjb25maWd1cmVkIGZvciB0aGUgc2l0ZVxyXG4gICAgTk9UX0ZPVU5EID0gNDA0MDAwLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDYXRlZ29yeSBub3QgZm91bmQuIEFjY291bnRzIC0gZW1haWwgdmVyaWZpY2F0aW9uIGZhaWxlZCwgdXVpZCBub3QgZm91bmQuXHJcbiAgICBGUklFTkRfTk9UX0ZPVU5EID0gNDA0MDAxLCAvLyB0aGUgdXNlciBpZCBwcm92aWRlZCBhcyBhIHRhcmdldCBpcyBub3QgYSBmcmllbmQgZm9yIHRoZSBjdXJyZW50IHVzZXJcclxuICAgIENBVEVHT1JZX05PVF9GT1VORCA9IDQwNDAwMiwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLlxyXG4gICAgVUlEX05PVF9GT1VORCA9IDQwNDAwMyxcclxuICAgIFJFU09VUkNFX05PVF9GT1VORCA9IDQwNDAwNCwgLy8gQ2xpZW50IHNpZGUgLSBpbWFnZSBub3QgZm91bmQgYWZ0ZXIgdXBsb2FkXHJcbiAgICBJTlZBTElEX0FQSV9NRVRIT0QgPSA0MDUwMDEsIC8vIGludGVybmFsIGZvciBvdXIgSlMgQVBJXHJcbiAgICBJREVOVElUWV9FWElTVFMgPSA0MDkwMDEsIC8vIHdoZW4gdHJ5aW5nIHRvIGNvbm5lY3QgdG8gYSBwcm92aWRlciB0aGF0IGlzIGFscmVhZHkgY29ubmVjdGVkIG9yIGxpbmsgdG8gYW4gYWxyZWFkeSBsaW5rZWQgYWNjb3VudFxyXG4gICAgR09ORSA9IDQxMDAwMCwgLy8gUmVzb3VyY2Ugbm8gbG9uZ2VyIGF2YWlsYWJsZS4gRGF0YSBLZXkgU2VydmVyIC0ga2V5IHJldm9rZWQvZXhwaXJlZC5cclxuICAgIFJFUVVFU1RfRU5USVRZX1RPT19MQVJHRSA9IDQxMzAwMSwgLy8gQ29tbWVudHMgc2VydmVyIC0gUmVxdWVzdCB0byBsYXJnZVxyXG4gICAgQ09NTUVOVF9URVhUX1RPT19MQVJHRSA9IDQxMzAwMiwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ29tbWVudCBUZXh0IHRvIGxhcmdlLlxyXG4gICAgT0JKRUNUX1RPT19MQVJHRSA9IDQxMzAwMywgLy8gRGF0YVN0b3JlIG9iamVjdCBpcyB0b28gbGFyZ2VcclxuICAgIFBST0ZJTEVfUEhPVE9fVE9PX0xBUkdFID0gNDEzMDA0LCAvLyBQcm9maWxlIHBob3RvIGlzIHRvbyBsYXJnZSwgZXhjZWVkcyBtYXhpbXVtIGFsbG93ZWQgY29udGVudCBsZW5ndGhcclxuICAgIFJFUVVFU1RfVVJJX1RPT19MT05HID0gNDE0MDAwLCAvL1RoZSBVUkkgcHJvdmlkZWQgd2FzIHRvbyBsb25nIGZvciB0aGUgc2VydmVyIHRvIHByb2Nlc3MuXHJcbiAgICBNSVNTSU5HX1VTRVJfUEhPVE8gPSA0MDkwMTAsIC8vIEVycm9yIC0gbWlzc2luZyB1c2VyIHBob3RvXHJcbiAgICBDT1VOVEVSX05PVF9SRUdJU1RFUkVEID0gNDA5MDExLCAvLyBDb3VudGVyIG5vdCByZWdpc3RlcmVkXHJcbiAgICBJTlZBTElEX0dNSURfVElDS0VUID0gNDA5MDEyLCAvLyBnbWlkIHRpY2tldCBpcyBub3QgdmFsaWRcclxuICAgIFNBTUxfTUFQUEVEX0FUVFJJQlVURV9OT1RfRk9VTkQgPSA0MDkwMTMsIC8vIFVzZWQgd2hlbiBtYXBwZWQgYXR0cmlidXRlIHZhbHVlIGZvciBwcm92aWRlclVJRCBjYW5ub3QgYmUgcmV0cmVpdmVkXHJcbiAgICBTQU1MX0NFUlRJRklDQVRFX05PVF9GT1VORCA9IDQwOTAxNCwgLy8gVXNlZCB3aGVuIFNBTUwgY2VydGlmaWNhdGUgY291bGQgbm90IGJlIHJldHJlaXZlZC5cclxuICAgIFNBTUxfTUVTU0FHRV9OT1RfRk9VTkQgPSA0MDkwMTUsIC8vIFVzZWQgd2hlbiBjYWNoZWQgU0FNTCBtZXNzYWdlIGNvdWxkIG5vdCBiZSByZXRyZWl2ZWQuXHJcbiAgICBHRU5FUkFMX1NFUlZFUl9FUlJPUiA9IDUwMDAwMSxcclxuICAgIFNFUlZFUl9MT0dJTl9FUlJPUiA9IDUwMDAwMiwgLy8gZ2VuZXJhbCBlcnJvciBkdXJpbmcgdGhlIGxvZ2luIHByb2Nlc3NcclxuICAgIERFRkFVTFRfQVBQTElDQVRJT05fQ09ORklHVVJBVElPTl9FUlJPUiA9IDUwMDAwMywgLy8gRm9yIG11bHRpcGxlIERDIC0gd2hlbiBubyBkZWZhdWx0IGFwcGxpY2F0aW9uIGNhbiBiZSBmb3VuZCBpbiBEZWZhdWx0QXBwbGljYXRpb25zLmNvbmZpZy4gV2l0aCBlcnJvciBkZXRhaWxzIG9mOiBcIkRlZmF1bHQgYXBwbGljYXRpb24gaXNuJ3QgY29uZmlndXJlZCBmb3IgZGF0YUNlbnRlclwiXHJcbiAgICBTRVNTSU9OX01JR1JBVElPTl9FUlJPUiA9IDUwMDAxNCwgLy8gZXJyb3IgaW4gbWlncmF0aW5nIG9sZCB0byBuZXcgZmFjZWJvb2sgc2Vzc2lvblxyXG4gICAgUFJPVklERVJfRVJST1IgPSA1MDAwMjMsIC8vIGdlbmVyYWwgZXJyb3IgZnJvbSB0aGUgcHJvdmlkZXJcclxuICAgIERBVEFCQVNFX0VSUk9SID0gNTAwMDI4LFxyXG4gICAgVVNFUk5BTUVfUkVRVUlSRUQgPSA1MDAwMjksIC8vIElubmVyIGNvZGVcclxuICAgIE5PX1BST1ZJREVSX0FQUExJQ0FUSU9OID0gNTAwMDMxLCAvLyB0aGUgYXBwbGljYXRpb24gZm9yIHRoaXMgcHJvdmlkZXIgaXMgbm90IGRlZmluZWQgZm9yIHRoaXMgc2l0ZVxyXG4gICAgTE9BRF9GQUlMRUQgPSA1MDAwMzIsIC8vIGNsaWVudCBlcnJvclxyXG4gICAgSU5WQUxJRF9FTlZJUk9OTUVOVF9DT05GSUcgPSA1MDAwMzMsIC8vIEluIGNhc2UgdGhlcmUgaXMgbm8gdGFyZ2V0IGVudmlyb25tZW50IGluIHRoZSBjb25maWcgZmlsZSB3ZSdkIHJldHVybiB3aXRoICBpbnZhbGlkX2Vudmlyb25tZW50X2NvbmZpZyBlcnJvci5cclxuICAgIEVSUk9SX0RVUklOR19CQUNLRU5EX09QRVJBVElPTiA9IDUwMDAzNCxcclxuICAgIFRJTUVPVVQgPSA1MDQwMDEsIC8vIG91dGdvaW5nIHJlcXVlc3QgaGFkIHRpbWVkIG91dFxyXG4gICAgQ0xJRU5UVElNRU9VVCA9IDUwNDAwMiwgLy8gRm9yIHNlcnZlciBTREtzIC0gYSBjbGllbnQgc2lkZSB0aW1lb3V0XHJcbiAgICBJTlZBTElEX1VSTCA9IDQwNDAwNCwgLy8gZW1iZWQubHkgNDA0IGVycm9yIG1lc3NhZ2UgLSB1cmwgaXMgbm90IHZhbGlkXHJcbiAgICBNRURJQV9JVEVNU19OT1RfU1VQUE9SVEVEID0gNDAxMDAxLCAvLyBNZWRpYSBpdGVtcyBhIG5vdCBhbGxvd2VkIGZvciB0aGlzIGNhdGVnb3J5XHJcbiAgICBNSVNTSU5HX0VSUk9SX0NPREUgPSA1OTk5OTksXHJcbn1cclxuZXhwb3J0IGNvbnN0IGVudW0gR1NFcnJvckRldGFpbHMge1xyXG4gICAgTm9uZSA9IDAsXHJcbiAgICBTYW1lX3Bhc3N3b3JkID0gMTAwMDAxLCAvLyBSZXNldCBQYXNzd29yZCAtIFwiJ29sZFBhc3N3b3JkJyBjYW5ub3QgYmUgdGhlIHNhbWUgYXMgJ25ld1Bhc3N3b3JkJ1wiXHJcbiAgICBJbnZhbGlkX3Bhc3N3b3JkID0gMTAwMDAyLCAvLyBSZXNldCBQYXNzd29yZCAtIGN1cnJlbnQgcGFzc3dvcmQgaXMgd3JvbmcvaW52YWxpZFxyXG4gICAgSW52YWxpZF9jb3VudGVyc19xdWVyeV93aXRoX2N1cnNvciA9IDEwMDAwMyxcclxufVxyXG4iLCJpbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XHJcbmltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xyXG5pbXBvcnQgKiBhcyBsb2NhbFN0b3JhZ2VVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvbG9jYWxTdG9yYWdlJztcclxuaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcclxuaW1wb3J0ICogYXMgb2JqZWN0VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL29iamVjdCc7XHJcbmltcG9ydCAqIGFzIFVSTFV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VUkwnO1xyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnaW5nTWV0aG9kIHtcclxuICAgIExvY2FsU3RvcmFnZUxpc3RlbmVyLFxyXG4gICAgUG9zdE1lc3NhZ2UsXHJcbiAgICBGbGFzaCxcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb21wbGV0ZVJlZ2lzdHJhdGlvbihcclxuICAgIHJlczogT2JqZWN0LFxyXG4gICAgcGFyYW1zOiBPYmplY3QsXHJcbiAgICBtZXRob2ROYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHJlc3BvbnNlLCBzdXBwcmVzc0V2ZW50cz86IGJvb2xlYW4sIHJldHJ5PzogYm9vbGVhbikgPT4gdm9pZCxcclxuKSB7XHJcbiAgICB2YXIgc2NyZWVuU2V0O1xyXG4gICAgdmFyIHJldHJ5O1xyXG4gICAgdmFyIHBlbmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAocmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5BRlRFUl9FTUFJTF9WRVJJRklDQVRJT04pIHtcclxuICAgICAgICAvLyBIYW5kbGUgYXV0b0xvZ2luIGZyb20gcmVnaXN0cmF0aW9uIGxpbmtcclxuICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbygnZmluYWxpemluZyByZWdpc3RyYXRpb24gYWZ0ZXIgZW1haWwgdmVyaWZpY2F0aW9uJyk7XHJcbiAgICAgICAgcGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgZ2lneWEuYWNjb3VudHMuZmluYWxpemVSZWdpc3RyYXRpb24oe1xyXG4gICAgICAgICAgICByZWdUb2tlbjogcmVzWydyZWdUb2tlbiddLFxyXG4gICAgICAgICAgICBpZ25vcmVBcGlRdWV1ZTogdHJ1ZSwgLy8gYmVjYXVzZSBib290c3RyYXAgbWF5IG5vdCBoYXZlIGZpbmlzaGVkIHlldFxyXG4gICAgICAgICAgICBjYWxsYmFjayxcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgIXBhcmFtc1snaWdub3JlSW50ZXJydXB0aW9ucyddICYmXHJcbiAgICAgICAgIXBhcmFtc1snZG9udEhhbmRsZVNjcmVlblNldCddICYmXHJcbiAgICAgICAgKCgocmVzWydyZWdUb2tlbiddIHx8IHBhcmFtc1sncmVnVG9rZW4nXSkgJiYgLy8gaGFzIHJlZ1Rva2VuXHJcbiAgICAgICAgICAgIChyZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLk9LX1dJVEhfRVJST1JfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgfHwgLy8gc29jaWFsTG9naW4vc2V0QWNjb3VudEluZm8gc2F2ZWQgd2l0aCBsb2dpbklEIGV4aXN0IGVycm9yXHJcbiAgICAgICAgICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkxPR0lOX0lERU5USUZJRVJfRVhJU1RTKSkgfHwgLy8gbG9naW5JRCBleGlzdHNcclxuICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkFDQ09VTlRfUEVORElOR19SRUdJU1RSQVRJT04gfHwgLy8gcGVuZGluZyByZWdpc3RyYXRpb25cclxuICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkFDQ09VTlRfUEVORElOR19WRVJJRklDQVRJT04gfHwgLy8gcGVuZGluZyBlbWFpbCB2ZXJpZmljYXRpb25cclxuICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkFDQ09VTlRfTUlTU0lOR19MT0dJTklEIHx8IC8vIHBlbmRpbmcgTG9naW5JRFxyXG4gICAgICAgIHJlc1snZXJyb3JDb2RlJ10gPT0gR1NFcnJvcnMuQUNDT1VOVF9QRU5ESU5HX1RGQV9WRVJJRklDQVRJT04gfHwgLy8gcGVuZGluZyBURkEgdmVyaWZpY2F0aW9uXHJcbiAgICAgICAgcmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5BQ0NPVU5UX1BFTkRJTkdfVEZBX1JFR0lTVFJBVElPTiB8fCAvLyBwZW5kaW5nIFRGQSByZWdpc3RyYXRpb25cclxuICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkFDQ09VTlRfUEVORElOR19SRUNFTlRfTE9HSU4gfHwgLy8gcGVuZGluZyByZWNlbnQgbG9naW5cclxuICAgICAgICAgICAgcmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5QRU5ESU5HX1BBU1NXT1JEX0NIQU5HRSkgLy8gcGVuZGluZyBwYXNzd29yZCBjaGFuZ2VcclxuICAgICkge1xyXG4gICAgICAgIHZhciBuZXdNb2RhbDtcclxuICAgICAgICBpZiAocmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5BQ0NPVU5UX1BFTkRJTkdfUkVDRU5UX0xPR0lOKSB7XHJcbiAgICAgICAgICAgIHJldHJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgbmV3TW9kYWwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyYW1zWydkZWZhdWx0TW9iaWxlUmVnU2NyZWVuU2V0J10gJiYgbG9jYWxJbmZvLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHNjcmVlblNldCA9IHBhcmFtc1snZGVmYXVsdE1vYmlsZVJlZ1NjcmVlblNldCddO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1zWydkZWZhdWx0UmVnU2NyZWVuU2V0J10pIHtcclxuICAgICAgICAgICAgc2NyZWVuU2V0ID0gcGFyYW1zWydkZWZhdWx0UmVnU2NyZWVuU2V0J107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzY3JlZW5TZXQpIHtcclxuICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgc2hvd2luZyBzY3JlZW5zZXQgJyR7c2NyZWVuU2V0fScgZm9yIGVycm9yQ29kZSAke3Jlc1snZXJyb3JDb2RlJ119YCk7XHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmdyb3VwKHNjcmVlblNldCk7XHJcblxyXG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnNob3dTY3JlZW5TZXQoe1xyXG4gICAgICAgICAgICBpZ25vcmVBcGlRdWV1ZTogdHJ1ZSwgLy8gYmVjYXVzZSBib290c3RyYXAgbWF5IG5vdCBoYXZlIGZpbmlzaGVkIHlldFxyXG4gICAgICAgICAgICBuZXdNb2RhbCxcclxuICAgICAgICAgICAgc2NyZWVuU2V0LFxyXG4gICAgICAgICAgICBpbml0aWFsTWV0aG9kOiBtZXRob2ROYW1lLFxyXG4gICAgICAgICAgICBpbml0aWFsUmVzcG9uc2U6IHJlcyxcclxuICAgICAgICAgICAgc3VwcHJlc3NMb2dpbkV2ZW50OiBwYXJhbXNbJ3N1cHByZXNzTG9naW5FdmVudCddLFxyXG4gICAgICAgICAgICBvbkVycm9yOiBlID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uSGlkZTogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZ3JvdXBFbmQoc2NyZWVuU2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChlLnJlYXNvbiA9PT0gJ2ZpbmlzaGVkJyAmJiBlLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3VjY2Vzc1Jlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvOiBlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogZS5zb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3NSZXNwb25zZSwgdHJ1ZSwgcmV0cnkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICghcGVuZGluZykge1xyXG4gICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdpZ3lhU2V0dGluZ3MoZ3JvdXA6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBnaWd5YVNldHRpbmdzID0gbG9jYWxTdG9yYWdlVXRpbHMuZ2V0T2JqZWN0KCdnaWd5YVNldHRpbmdzJyk7XHJcbiAgICByZXR1cm4gSlNPTlV0aWxzLnNlcmlhbGl6ZShnaWd5YVNldHRpbmdzW2dyb3VwXSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEdpZ3lhU2V0dGluZ3MoZ3JvdXA6IHN0cmluZywgc2V0dGluZ3M6IE9iamVjdCk6IHZvaWQge1xyXG4gICAgY29uc3QgZ2lneWFTZXR0aW5ncyA9IGxvY2FsU3RvcmFnZVV0aWxzLmdldE9iamVjdCgnZ2lneWFTZXR0aW5ncycsIHsgW2dyb3VwXToge30gfSk7XHJcbiAgICBmb3IgKHZhciBwIGluIHNldHRpbmdzKSB7XHJcbiAgICAgICAgZ2lneWFTZXR0aW5nc1tncm91cF1bcF0gPSBzZXR0aW5nc1twXTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZVV0aWxzLnNldEl0ZW0oJ2dpZ3lhU2V0dGluZ3MnLCBKU09OVXRpbHMuc2VyaWFsaXplKGdpZ3lhU2V0dGluZ3MpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVsR2lneWFTZXR0aW5ncyhncm91cDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIWdyb3VwKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlVXRpbHMucmVtb3ZlSXRlbSgnZ2lneWFTZXR0aW5ncycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBnaWd5YVNldHRpbmdzID0gbG9jYWxTdG9yYWdlVXRpbHMuZ2V0T2JqZWN0KCdnaWd5YVNldHRpbmdzJyk7XHJcbiAgICAgICAgaWYgKGdpZ3lhU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGdpZ3lhU2V0dGluZ3NbZ3JvdXBdO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VVdGlscy5zZXRJdGVtKCdnaWd5YVNldHRpbmdzJywgSlNPTlV0aWxzLnNlcmlhbGl6ZShnaWd5YVNldHRpbmdzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTcGVjaWFsRmllbGRzKG8pIHtcclxuICAgIHZhciBjb2xsZWN0aW9uID0gZ2lneWEuc29jaWFsaXplLkNvbGxlY3Rpb247XHJcbiAgICB2YXIgdG9UeXBlZCA9IGZ1bmN0aW9uKGFyciwgY3Rvcikge1xyXG4gICAgICAgIHZhciBvYXJyID0gW107XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBlbCA9IGFycltpXTtcclxuICAgICAgICB3aGlsZSAoZWwpIHtcclxuICAgICAgICAgICAgb2Fyci5wdXNoKG5ldyBjdG9yKGVsKSk7XHJcbiAgICAgICAgICAgIGlmIChvYXJyW2ldLmlkZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRJZGVudGl0aWVzQXJyYXlUb09iamVjdChvYXJyW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbCA9IGFyclsrK2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2FycjtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG8ucGhvdG9zKSBvLnBob3RvcyA9IG5ldyBjb2xsZWN0aW9uKG8ucGhvdG9zLCAncGhvdG9JRCcpO1xyXG4gICAgaWYgKG8uYWxidW1zKSBvLmFsYnVtcyA9IG5ldyBjb2xsZWN0aW9uKG8uYWxidW1zLCAnYWxidW1JRCcpO1xyXG4gICAgaWYgKG8uY29udGFjdHMpIG8uY29udGFjdHMgPSBuZXcgY29sbGVjdGlvbih0b1R5cGVkKG8uY29udGFjdHMsIGdpZ3lhLnNvY2lhbGl6ZS5Db250YWN0KSwgJ2VtYWlsJyk7XHJcbiAgICBpZiAoby5mcmllbmQpIG8uZnJpZW5kID0gbmV3IGNvbGxlY3Rpb24odG9UeXBlZChvLmZyaWVuZCwgZ2lneWEuc29jaWFsaXplLkZyaWVuZCksICdVSUQnKTtcclxuXHJcbiAgICBpZiAoby51c2VyKSBvLnVzZXIgPSBuZXcgZ2lneWEuc29jaWFsaXplLlVzZXIoby51c2VyKTtcclxuXHJcbiAgICBpZiAoby5mcmllbmRzICYmIG8uZnJpZW5kcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgdmFyIGFyVUlEcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgby5mcmllbmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyVUlEcy5wdXNoKG8uZnJpZW5kc1tpXS5VSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvLlVJRHMgPSBhclVJRHMuam9pbignLCcpO1xyXG5cclxuICAgICAgICBvLmZyaWVuZHMgPSBuZXcgY29sbGVjdGlvbih0b1R5cGVkKG8uZnJpZW5kcywgZ2lneWEuc29jaWFsaXplLkZyaWVuZCksICdVSUQnKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydElkZW50aXRpZXNBcnJheVRvT2JqZWN0KG8pIHtcclxuICAgIGlmIChvLmlkZW50aXRpZXMgPT0gbnVsbCkge1xyXG4gICAgICAgIG8uaWRlbnRpdGllcyA9IHt9O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChvLmlkZW50aXRpZXMuY29uc3RydWN0b3IgIT0gQXJyYXkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgaWRlbnRpdGllc0FycmF5ID0gby5pZGVudGl0aWVzO1xyXG4gICAgby5pZGVudGl0aWVzID0ge307XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkZW50aXRpZXNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG8uaWRlbnRpdGllc1tpZGVudGl0aWVzQXJyYXlbaV0ucHJvdmlkZXJdID0gbmV3IGdpZ3lhLnNvY2lhbGl6ZS5JZGVudGl0eShpZGVudGl0aWVzQXJyYXlbaV0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VySW5mb1RvRXZlbnQocmVzcG9uc2U6IE9iamVjdCwgdGFyZ2V0T2JqZWN0OiBPYmplY3QsIGFkZExvZ2luUHJvcGVydGllcz86IGJvb2xlYW4sIHVzZUJhc2VQaG90b1VSTD86IHN0cmluZykge1xyXG4gICAgdmFyIG9Vc2VyID0gcmVzcG9uc2VbJ3VzZXInXSB8fCByZXNwb25zZVsndXNlckluZm8nXTtcclxuICAgIGlmICh0YXJnZXRPYmplY3QgPT0gbnVsbCkgdGFyZ2V0T2JqZWN0ID0ge307XHJcbiAgICBpZiAob1VzZXIgIT0gbnVsbCkge1xyXG4gICAgICAgIHRhcmdldE9iamVjdFsndXNlciddID0gb2JqZWN0VXRpbHMuY2xvbmUob1VzZXIpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZVsnaXNMb2dnZWRJbiddICE9IG51bGwpIHRhcmdldE9iamVjdFsndXNlciddWydpc0xvZ2dlZEluJ10gPSByZXNwb25zZVsnaXNMb2dnZWRJbiddO1xyXG4gICAgICAgIGlmIChyZXNwb25zZVsnaXNTaXRlVUlEJ10gIT0gbnVsbCkgdGFyZ2V0T2JqZWN0Wyd1c2VyJ11bJ2lzU2l0ZVVJRCddID0gcmVzcG9uc2VbJ2lzU2l0ZVVJRCddO1xyXG4gICAgICAgIGlmIChyZXNwb25zZVsnaVJhbmsnXSAhPSBudWxsKSB0YXJnZXRPYmplY3RbJ3VzZXInXVsnaVJhbmsnXSA9IHJlc3BvbnNlWydpUmFuayddO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhZGRMb2dpblByb3BlcnRpZXMpIHtcclxuICAgICAgICBvYmplY3RVdGlscy5leHRyYWN0UHJvcGVydGllcyhyZXNwb25zZSwgdGFyZ2V0T2JqZWN0LCAnc2lnbmF0dXJlfFVJRFNpZ3x0aW1lc3RhbXB8VUlEU2lnbmF0dXJlfHNpZ25hdHVyZVRpbWVzdGFtcHxVSUR8c2lnbktleXNVSURTaWduYXR1cmV8ZGF0YUNlbnRlcnxpZF90b2tlbicpO1xyXG4gICAgICAgIGlmICh0YXJnZXRPYmplY3RbJ3VzZXInXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhcmdldE9iamVjdFsnVUlEJ10gPSBvVXNlci5VSUQ7XHJcbiAgICAgICAgICAgIHRhcmdldE9iamVjdFsnaXNTaXRlVUlEJ10gPSBvVXNlci5pc1NpdGVVSUQ7XHJcbiAgICAgICAgICAgIC8vIGlzU2l0ZVVJRCBpcyB0ZW1wb3JhcnkgZm9yIGh0dHBzOi8vZ2lneWEubXkuc2FsZXNmb3JjZS5jb20vNTAwNDAwMDAwMFQzcWNaXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldE9iamVjdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZEVtYWlsTmF0aXZlKHBhcmFtczogT2JqZWN0KSB7XHJcbiAgICB2YXIgdXNlckFjdGlvbiA9IHBhcmFtc1sndXNlckFjdGlvbiddIHx8IHt9O1xyXG4gICAgdmFyIHN1YmplY3QgPSB1c2VyQWN0aW9uWyd0aXRsZSddIHx8ICcnO1xyXG4gICAgdmFyIGJvZHkgPSB1c2VyQWN0aW9uWydsaW5rQmFjayddIHx8ICcnO1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdtYWlsdG86P3RvPSZzdWJqZWN0PScgKyBVUkxVdGlscy5VUkxFbmNvZGUoc3ViamVjdCkgKyAnJmJvZHk9JyArIFVSTFV0aWxzLlVSTEVuY29kZShib2R5KTtcclxuICAgIGdpZ3lhLnNvY2lhbGl6ZS5zZW5kRW1haWwocGFyYW1zLCB7IGRvbnRTZW5kRW1haWw6IHRydWUgfSk7IC8vIFRvIHJlcG9ydCB0aGF0IHNlbmQgd2l0aG91dCBzZW5kaW5nIGl0XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0QmFzZURvbWFpbiB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9kb21haW5zJztcclxuLy8gTG9jYWwgZW52aXJvbm1lbnQgaW5mbyAoYnJvd3NlciwgY2FwYWJpbGl0aWVzLCBob3N0aW5nIGRvbWFpbilcclxuXHJcbmRlY2xhcmUgY29uc3QgQWN0aXZlWE9iamVjdDogYW55O1xyXG5cclxudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuZXhwb3J0IHZhciBsb2NhbEluZm8gPSB7XHJcbiAgICBiYXNlRG9tYWluOiAnJywgLy8gY2FsY3VsYXRlZCBsYXRlciBvblxyXG4gICAgaXNCcm93c2VyU3VwcG9ydHNGaWxlc0FQSTogKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIEZpbGVSZWFkZXIgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIEZpbGVSZWFkZXIgPT09ICdvYmplY3QnO1xyXG4gICAgfSkoKSxcclxuICAgIGluaXRUaW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgdmVyc2lvbjogMCwgLy9UT0RPXHJcbiAgICBwYWdlRG9tYWluOiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSxcclxuICAgIHByb3RvY29sOiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cDonID8gJ2h0dHAnIDogJ2h0dHBzJyxcclxuICAgIHVzZXJBZ2VudDogdXNlckFnZW50LFxyXG4gICAgaXNXaW46IHVzZXJBZ2VudC5pbmRleE9mKCd3aW4nKSAhPSAtMSxcclxuICAgIGlzSUU6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgIT0gLTEgfHwgKHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhJykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSAhPSAtMSksXHJcbiAgICBpc0lFNjogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgNi4nKSAhPSAtMSxcclxuICAgIGlzSUU3OiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSA3LicpICE9IC0xLFxyXG4gICAgaXNJRTg6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDguJykgIT0gLTEsXHJcbiAgICBpc0lFOTogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgOS4nKSAhPSAtMSxcclxuICAgIGlzSUUxMDogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgMTAuJykgIT0gLTEsXHJcbiAgICBpc0lFMTE6IHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhJykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3RyaWRlbnQvNy4wJykgIT0gLTEsXHJcbiAgICBpc0VkZ2U6IHVzZXJBZ2VudC5pbmRleE9mKCdlZGdlJykgIT0gLTEsXHJcbiAgICBpc0lPUzogdXNlckFnZW50LmluZGV4T2YoJ2lwaG9uZScpICE9IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpcGFkJykgIT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2lwb2QnKSAhPSAtMSxcclxuICAgIGlzU2FmYXJpNTM0OiB1c2VyQWdlbnQuaW5kZXhPZignc2FmYXJpLzUzNCcpICE9IC0xLFxyXG4gICAgaXNXZUNoYXQ6IHVzZXJBZ2VudC5pbmRleE9mKCdtaWNyb21lc3NlbmdlcicpICE9IC0xLFxyXG4gICAgaW9zVmVyc2lvbjogKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYXBwbGV3ZWJraXQnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZigndmVyc2lvbi8nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodXNlckFnZW50LnNwbGl0KCd2ZXJzaW9uLycpWzFdLnNwbGl0KCcgJylbMF0pO1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gMDtcclxuICAgIH0pKCksXHJcbiAgICBpc0FuZHJvaWQ6IHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgIT0gLTEsXHJcbiAgICBpc0FuZHJvaWRCcm93c2VyOiAodXNlckFnZW50ID0+IHtcclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ21vemlsbGEvNS4wJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkIDQnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FwcGxld2Via2l0JykgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignd2luZG93cyBwaG9uZScpICE9PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBTcGVjaWFsIHVzZXIgYWdlbnRzIGZvdW5kIHNvIGZhciB0aGF0IHZpb2xhdGUgdGhlIGV4aXN0YW5jZSBvZiBjaHJvbWUgcnVsZVxyXG4gICAgICAgIC8vIEJ1ZyAzODM2NyBBbmRyb2lkIEJyb3dzZXI6IE1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA0LjIuMjsgZW4tdXM7IFNBTVNVTkcgR1QtSTk1MDAgQnVpbGQvSkRRMzkpIEFwcGxlV2ViS2l0LzUzNS4xOSAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMS4wIENocm9tZS8xOC4wLjEwMjUuMzA4IE1vYmlsZSBTYWZhcmkvNTM1LjE5XHJcbiAgICAgICAgLy8gQnVnIDQwMjA5IENocm9tZSBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNC4yLjI7IFNBTVNVTkcgU0dULUk3NDcgQnVpbGQvS09UNDlIKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMzkuMC4yMTcxLjkzIE1vYmlsZSBTYWZhcmkvNTM3LjM2XHJcbiAgICAgICAgLy8gV2luZG93cyBQaG9uZSBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTW9iaWxlOyBXaW5kb3dzIFBob25lIDguMTsgQW5kcm9pZCA0LjA7IEFSTTsgVHJpZGVudC83LjA7IFRvdWNoOyBydjoxMS4wOyBJRU1vYmlsZS8xMS4wOyBOT0tJQTsgTHVtaWEgOTIwKSBsaWtlIGlQaG9uZSBPUyA3XzBfMyBNYWMgT1MgWCBBcHBsZVdlYktpdC81MzcgKEtIVE1MLCBsaWtlIEdlY2tvKSBNb2JpbGUgU2FmYXJpLzUzN1xyXG4gICAgICAgIC8vIENocm9tZSBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNC4yLjI7IGVuLWdiOyBTQU1TVU5HIEdULUk5NTAwIEJ1aWxkL0tPVDQ5SCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xLjUgQ2hyb21lLzI4LjAuMTUwMC45NCBNb2JpbGUgU2FmYXJpLzUzNy4zNlxyXG5cclxuICAgICAgICB2YXIgY2hyb21lSW5mbyA9IC9jaHJvbWVcXC8oXFxkKykvLmV4ZWModXNlckFnZW50KTtcclxuXHJcbiAgICAgICAgaWYgKCFjaHJvbWVJbmZvKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGNocm9tZVZlcnNpb24gPSBwYXJzZUludChjaHJvbWVJbmZvWzFdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNocm9tZVZlcnNpb24gPCAyMDtcclxuICAgIH0pKHVzZXJBZ2VudCksXHJcbiAgICBjdXJyZW50QnJvd3NlcjogJycsXHJcbiAgICBhbmRyb2lkVmVyc2lvbjogKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHVzZXJBZ2VudC5zbGljZSh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICsgOCkpO1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gMDtcclxuICAgIH0pKCksXHJcbiAgICBpc0Nocm9tZTogdXNlckFnZW50LmluZGV4T2YoJ2Nocm9tZScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCdlZGdlJykgPT0gLTEsIC8vIGVkZ2UgYnJvd3NlciBhbHNvIHVzZXMgQ2hyb21lIGluIGl0cyBVQSBzdHJpbmcuXHJcbiAgICBpc0dvb2dsZUJvdDogdXNlckFnZW50LmluZGV4T2YoJ2dvb2dsZWJvdCcpICE9IC0xLFxyXG4gICAgaXNGRjogdXNlckFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSAhPSAtMSxcclxuICAgIGlzT3BlcmE6IHVzZXJBZ2VudC5pbmRleE9mKCdvcGVyYScpICE9IC0xLFxyXG4gICAgaXNTYWZhcmk6XHJcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24gJiZcclxuICAgICAgICBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NhZmFyaScpICE9IC0xICYmXHJcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA9PSAtMSAmJlxyXG4gICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgPT0gLTEsXHJcbiAgICBpc0lPU1dlYlZpZXc6IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxcclxuICAgIGlzSU9TQ2hyb21lOiB1c2VyQWdlbnQuaW5kZXhPZignY3Jpb3MnKSAhPSAtMSxcclxuICAgIGlzTUFDOiBuYXZpZ2F0b3IuYXBwVmVyc2lvbiAmJiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpICE9IC0xLFxyXG4gICAgaXNXaW5kb3dzUGhvbmU6IHVzZXJBZ2VudC5pbmRleE9mKCd3aW5kb3dzIHBob25lJykgIT0gLTEsXHJcbiAgICBpc0ZhY2Vib29rQnJvd3NlcjogdXNlckFnZW50LmluZGV4T2YoJ2ZiYW4nKSAhPSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignZmJhdicpICE9IC0xLFxyXG4gICAgc3VwcG9ydHNQb3N0TWVzc2FnZTogd2luZG93LnBvc3RNZXNzYWdlICE9IG51bGwgJiYgKHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgPT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2llbW9iaWxlJykgIT0gLTEpLFxyXG4gICAgc3VwcG9ydHNMb2NhbFN0b3JhZ2U6IGZhbHNlLFxyXG4gICAgc3VwcG9ydHNTZXNzaW9uU3RvcmFnZTogZmFsc2UsXHJcbiAgICBzdXBwb3J0c0ZsYXNoOiAoKCkgPT4ge1xyXG4gICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTk4MjQ1L2hvdy1jYW4taS1kZXRlY3QtaWYtZmxhc2gtaXMtaW5zdGFsbGVkLWFuZC1pZi1ub3QtZGlzcGxheS1hLWhpZGRlbi1kaXYtdGhhdC1pbmZcclxuICAgICAgICBsZXQgc3VwcG9ydHNGbGFzaCA9IGZhbHNlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5taW1lVHlwZXMgJiZcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5taW1lVHlwZXNbJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10gIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzWydhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCddLmVuYWJsZWRQbHVnaW5cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0c0ZsYXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvID0gbmV3IEFjdGl2ZVhPYmplY3QoJ1Nob2Nrd2F2ZUZsYXNoLlNob2Nrd2F2ZUZsYXNoJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c0ZsYXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzRmxhc2g7XHJcbiAgICB9KSgpLFxyXG4gICAgcXVpcmtzTW9kZTogZG9jdW1lbnQuY29tcGF0TW9kZSA9PSAnQmFja0NvbXBhdCcgJiYgdXNlckFnZW50LmluZGV4T2YoJ21zaWUnKSAhPSAtMSxcclxuICAgIGJhY2tDb21wYXQ6IGRvY3VtZW50LmNvbXBhdE1vZGUgPT0gJ0JhY2tDb21wYXQnLFxyXG4gICAgLy8gVE9ETzogQWRkIGlzVGFibGV0IGZ1bmN0aW9uIGZvciBkZXZpY2VzIG5vbi1Nb2JpbGVcclxuICAgIGlzTW9iaWxlOiAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG1vYmlsZUNsaWVudHMgPSBbXHJcbiAgICAgICAgICAgICdpcGhvbmUnLFxyXG4gICAgICAgICAgICAnaXBvZCcsXHJcbiAgICAgICAgICAgICdhbmRyb2lkJyxcclxuICAgICAgICAgICAgJ21pZHAnLFxyXG4gICAgICAgICAgICAnMjQweDMyMCcsXHJcbiAgICAgICAgICAgICdibGFja2JlcnJ5JyxcclxuICAgICAgICAgICAgJ25ldGZyb250JyxcclxuICAgICAgICAgICAgJ25va2lhJyxcclxuICAgICAgICAgICAgJ3BhbmFzb25pYycsXHJcbiAgICAgICAgICAgICdwb3J0YWxtbW0nLFxyXG4gICAgICAgICAgICAnc2hhcnAnLFxyXG4gICAgICAgICAgICAnc2llLScsXHJcbiAgICAgICAgICAgICdzb255ZXJpY3Nzb24nLFxyXG4gICAgICAgICAgICAnc3ltYmlhbicsXHJcbiAgICAgICAgICAgICd3aW5kb3dzIGNlJyxcclxuICAgICAgICAgICAgJ2JlbnEnLFxyXG4gICAgICAgICAgICAnbWRhJyxcclxuICAgICAgICAgICAgJ21vdC0nLFxyXG4gICAgICAgICAgICAnb3BlcmEgbWluaScsXHJcbiAgICAgICAgICAgICdwaGlsaXBzJyxcclxuICAgICAgICAgICAgJ3BvY2tldCBwYycsXHJcbiAgICAgICAgICAgICdzYWdlbScsXHJcbiAgICAgICAgICAgICdzYW1zdW5nJyxcclxuICAgICAgICAgICAgJ2h0YycsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIG1vYmlsZUNsaWVudHMpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKG1vYmlsZUNsaWVudHNbaV0pICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNNb2JpbGVBcHA6ICgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSlcclxuICAgICAgICAgICAgLy8gZm9yIG9sZCBJRVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBtZXRhVGFnczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpIGFzIGFueTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhVGFncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobWV0YVRhZ3NbaV0uZ2V0QXR0cmlidXRlKCduYW1lJykgPT0gJ3ZpZXdwb3J0Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBtZXRhVGFnc1tpXS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCAmJiBjb250ZW50LmluZGV4T2YoJ3dpZHRoPWRldmljZS13aWR0aCcpICE9PSAtMSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pKCksXHJcbiAgICBpc05hdGl2ZU1vYmlsZUFwcDogZmFsc2UsIC8vIHdpbGwgY2hhbmdlIGlmIG1vYmlsZSBhZGFwdGVyIHdpbGwgbG9hZCBbaW4gaXRzICdpbml0JyBtZXRob2RdLlxyXG4gICAgaXNUb3VjaDogKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpXHJcbiAgICAgICAgICAgIC8vIHdvcmtzIG9uIG1vc3QgYnJvd3NlcnNcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmICgnb25tc2dlc3R1cmVjaGFuZ2UnIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICAvLyB3b3JrcyBvbiBpZTEwXHJcbiAgICAgICAgICAgIC8vIFRyeSB0byBkZXRlcm1pbmUgaWYgSUUgaXMgb3BlbiBpbiBtZXRybyBtb2RlLiBNZXRybyBkb2Vzbid0IGFsbG93IGFjdGl2ZVgsIHRoYXQncyB0aGUgYmVzdCB0ZXN0IGF2YWlsYWJsZSBhcyBvZiBJRTExLlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNPbkxpbmU6ICgpID0+IG5hdmlnYXRvci5vbkxpbmUsXHJcbiAgICBtZXNzYWdpbmdNZXRob2Q6IDBcclxufTtcclxuY29uc3QgaXNTdG9yYWdlRW5hYmxlZCA9IChzdG9yYWdlTmFtZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbc3RvcmFnZU5hbWVdO1xyXG4gICAgICAgIGlmICghc3RvcmFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZXN0TmFtZSA9ICdfZ2lnX2xvY2FsU3RvcmFnZV90ZXN0JztcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAnanVzdCBjaGVja2luZyBmb3IgbG9jYWxTdG9yYWdlJztcclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0odGVzdE5hbWUsIHRlc3RWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3RvcmFnZS5nZXRJdGVtKHRlc3ROYW1lKSA9PT0gdGVzdFZhbHVlO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0TmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgLy8gUmVhc29uczpcclxuICAgICAgICAvLyAtIEluc2lkZSAzcmQgcGFydHkgQVBJIHByb3h5IGlGcmFtZS5cclxuICAgICAgICAvLyAtIFNhZmFyaSBpbiBpbmNvZ25pdG8gbW9kZSB3aWxsIGVycm9yIHdpdGggXCJxdW90YSBleGNlZWRlZFwiLlxyXG4gICAgICAgIC8vIC0gQ2hyb21lIHdpdGggM3JkIHBhcnR5IGNvb2tpZXMgZGlzYWJsZWQgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB5b3UgYWNjZXNzIHRoZSB3aW5kb3cubG9jYWxTdG9yYWdlIG9iamVjdCBpbiBBTlkgd2F5LlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufTtcclxubG9jYWxJbmZvLnN1cHBvcnRzTG9jYWxTdG9yYWdlID0gaXNTdG9yYWdlRW5hYmxlZCgnbG9jYWxTdG9yYWdlJyk7XHJcbmxvY2FsSW5mby5zdXBwb3J0c1Nlc3Npb25TdG9yYWdlID0gaXNTdG9yYWdlRW5hYmxlZCgnc2Vzc2lvblN0b3JhZ2UnKTtcclxuaWYgKGxvY2FsSW5mby5pc0lFMTEgJiYgIXdpbmRvdy5pbmRleGVkREIpXHJcbiAgICAvLyBJRTEwLTExIHN1cHBvcnQgcG9zdE1lc3NhZ2UgYmV0d2VlbiBpZnJhbWVzIGJ1dCBub3QgaW5Qcml2YXRlIG1vZGVcclxuICAgIGxvY2FsSW5mby5zdXBwb3J0c1Bvc3RNZXNzYWdlID0gZmFsc2U7XHJcbmxvY2FsSW5mby5pc01BQyA9IGxvY2FsSW5mby5pc01BQyAmJiAhbG9jYWxJbmZvLmlzSU9TO1xyXG52YXIgb3MgPSBsb2NhbEluZm8uaXNXaW5cclxuICAgID8gJ3dpbmRvd3MnXHJcbiAgICA6IGxvY2FsSW5mby5pc1dpbmRvd3NQaG9uZVxyXG4gICAgICAgID8gJ3dpbnBob25lJ1xyXG4gICAgICAgIDogbG9jYWxJbmZvLmlzSU9TXHJcbiAgICAgICAgICAgID8gJ2lvcy12JyArIGxvY2FsSW5mby5pb3NWZXJzaW9uXHJcbiAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzTUFDXHJcbiAgICAgICAgICAgICAgICA/ICdtYWMnXHJcbiAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0FuZHJvaWRcclxuICAgICAgICAgICAgICAgICAgICA/ICdhbmRyb2lkJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbmlmIChvcykgb3MgKz0gJyAnO1xyXG52YXIgYnJvd3NlciA9IGxvY2FsSW5mby5pc0Nocm9tZVxyXG4gICAgPyAnY2hyb21lJ1xyXG4gICAgOiBsb2NhbEluZm8uaXNGRlxyXG4gICAgICAgID8gJ2ZpcmVmb3gnXHJcbiAgICAgICAgOiBsb2NhbEluZm8uaXNTYWZhcmlcclxuICAgICAgICAgICAgPyAnc2FmYXJpJ1xyXG4gICAgICAgICAgICA6IGxvY2FsSW5mby5pc0VkZ2VcclxuICAgICAgICAgICAgICAgID8gJ2VkZ2UnXHJcbiAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFMTFcclxuICAgICAgICAgICAgICAgICAgICA/ICdpZTExJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUUxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdpZTEwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWU5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRThcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdpZTgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcclxubG9jYWxJbmZvLmN1cnJlbnRCcm93c2VyID0gb3MgKyBicm93c2VyO1xyXG5sZXQgYmFzZURvbWFpbnM6IHN0cmluZ1tdfHN0cmluZztcclxuaWYgKGdpZ3lhLnBhcnRuZXJTZXR0aW5ncz8uYmFzZURvbWFpbnM/Lmxlbmd0aCkge1xyXG4gICAgYmFzZURvbWFpbnMgPSBnaWd5YS5wYXJ0bmVyU2V0dGluZ3MuYmFzZURvbWFpbnMgYXMgc3RyaW5nW118c3RyaW5nO1xyXG59IGVsc2Uge1xyXG4gICAgaWYgKHdpbmRvdy5zZWxmID09PSB3aW5kb3cudG9wKSB7XHJcbiAgICAgICAgLy8gb25seSBpbiB0aGUgdG9wIGZyYW1lXHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLndhcm4oJ2dpZ3lhOiBtaXNzaW5nIGJhc2UgZG9tYWlucyBmb3Igc2l0ZScpO1xyXG4gICAgfVxyXG4gICAgYmFzZURvbWFpbnMgPSBbZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWVdO1xyXG59XHJcbmxvY2FsSW5mby5iYXNlRG9tYWluID0gZ2V0QmFzZURvbWFpbihiYXNlRG9tYWlucyk7XHJcbiIsImltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xyXG5pbXBvcnQgKiBhcyB2aWV3cG9ydFV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy92aWV3cG9ydCc7XHJcbmltcG9ydCAqIGFzIGZ1bmN0aW9uc1V0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9mdW5jdGlvbnMnO1xyXG5cclxuZXhwb3J0IHZhciBfcG9wdXBDb250YWluZXJzID0gW107XHJcbmV4cG9ydCB2YXIgX3BzZXVkb0NvbnRhaW5lcnMgPSBbXTtcclxubGV0IF9uZXh0WkluZGV4ID0gOTk5OTk5OTk5O1xyXG52YXIgYmFja0xpc3RlbmVyID0gbnVsbDtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRaSW5kZXgoKSB7XHJcbiAgICBfbmV4dFpJbmRleCsrO1xyXG4gICAgcmV0dXJuIF9uZXh0WkluZGV4O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHaWd5YVNjcmlwdEVsZW1lbnQoZmlsZU5hbWVzOiBzdHJpbmdbXSk6IEhUTUxTY3JpcHRFbGVtZW50IHtcclxuICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xyXG4gICAgdmFyIHNjcmlwdEVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50O1xyXG4gICAgdmFyIGdpZ3lhQ2RuUmVnZXggPSAvXFwvXFwvY2RuKHMpP1xcLihydTFcXC4pP2dpZ3lhLmNvbS87XHJcbiAgICBmb3IgKHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHZhciBzY3JpcHQgPSBzY3JpcHRzW2ldO1xyXG4gICAgICAgIHZhciBzcmMgPSBzY3JpcHQuc3JjLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHNyYyAhPT0gJycpIHtcclxuICAgICAgICAgICAgaWYgKGdpZ3lhQ2RuUmVnZXgudGVzdChzcmMpIHx8IHNyYy5pbmRleE9mKCc/YXBpa2V5PScpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpc0ZpbGVOYW1lRXhpc3RJblNyYyA9IGZpbGVOYW1lcy5sZW5ndGggPT09IDAgfHwgZmlsZU5hbWVzLnNvbWUoZmlsZU5hbWUgPT4gc3JjLmluZGV4T2YoZmlsZU5hbWUpID4gLTEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRmlsZU5hbWVFeGlzdEluU3JjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudCA9IHNjcmlwdDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzY3JpcHRFbGVtZW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaChlbDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nKSB7XHJcbiAgICB2YXIgZXZlbnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBldmVudCA9IG5ldyBFdmVudChldmVudE5hbWUpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIElFMTAgYW5kIGJlbG93IHN1cHBvcnRcclxuICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG4gICAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudChldmVudE5hbWUsIHRydWUsIHRydWUsIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQnV0dG9uU3VibWl0TGlzdGVuZXIoZWw6IEhUTUxFbGVtZW50LCBoYW5kbGVyOiBGdW5jdGlvbiwgZXZlbnQ6ICdjbGljaycgfCAndG91Y2hlbmQnID0gJ2NsaWNrJywgZGVidWdOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAvLyBKdXN0IGluIGNhc2UgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QuXHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcclxuICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT0gJy0xJykge1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xyXG4gICAgfVxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnQsIChlOiBNb3VzZUV2ZW50KSA9PiBoYW5kbGVyKGUpKTtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWwsICdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoKGUud2hpY2ggfHwgZS5rZXlDb2RlKSA9PSAxMykge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWw6IGFueSwgZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAoIWVsIHx8ICFoYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGVsOiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFoYW5kbGVyKSByZXR1cm47XHJcbiAgICBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVEZWZhdWx0RXZlbnRIYW5kbGluZyhldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LmV2ZW50KSB7XHJcbiAgICAgICAgd2luZG93LmV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERpYWxvZ0JhY2tMaXN0ZW5lcihoYW5kbGVyOiAoZTogRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIF9yZW1vdmVEaWFsb2dCYWNrTGlzdGVuZXIoKTtcclxuXHJcbiAgICAvLyBUaGlzIHNob3VsZCBmaXJlIHdoZW4gYmFjayBpcyBjbGlja2VkXHJcbiAgICBiYWNrTGlzdGVuZXIgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUgJiYgZS5uZXdVUkwgJiYgZS5uZXdVUkwuaW5kZXhPZignfGdpZ3lhTW9iaWxlRGlhbG9nJykgPT0gLTEpIHtcclxuICAgICAgICAgICAgaGFuZGxlcihlKTtcclxuICAgICAgICAgICAgX3JlbW92ZURpYWxvZ0JhY2tMaXN0ZW5lcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gaGFzaCBjb3VsZCBjaGFuZ2UgcmlnaHQgYWZ0ZXIgdGhlIGNhbGwgaWYgaXQgd2FzIGluaXRpYXRlZCBmcm9tIGEgbGluayB0aGF0IGRpZG4ndCByZXR1cm4gZmFsc2VcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCd8Z2lneWFNb2JpbGVEaWFsb2cnKSA9PSAtMSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoICsgJ3xnaWd5YU1vYmlsZURpYWxvZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnaGFzaGNoYW5nZScsIGJhY2tMaXN0ZW5lcik7XHJcbiAgICB9LCA1MCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yZW1vdmVEaWFsb2dCYWNrTGlzdGVuZXIoKSB7XHJcbiAgICBpZiAoIWJhY2tMaXN0ZW5lcikgcmV0dXJuO1xyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdoYXNoY2hhbmdlJywgYmFja0xpc3RlbmVyKTtcclxuICAgIGJhY2tMaXN0ZW5lciA9IG51bGw7XHJcbiAgICAvL3Jlc3RvcmUgcHJldmlvdXMgaGFzaFxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCd8Z2lneWFNb2JpbGVEaWFsb2cnLCAnJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvQm9keShlbDogSFRNTEVsZW1lbnQsIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHJldHVybjtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSAmJiBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlbCwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZWwgJiYgZWwucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NoaWxkT2YoY2hpbGQ6IE5vZGUsIHBhcmVudDogTm9kZSkge1xyXG4gICAgdmFyIGRpcmVjdFBhcmVudCA9IGNoaWxkLnBhcmVudE5vZGU7XHJcblxyXG4gICAgd2hpbGUgKGRpcmVjdFBhcmVudCkge1xyXG4gICAgICAgIGlmIChwYXJlbnQgPT0gZGlyZWN0UGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlyZWN0UGFyZW50ID0gZGlyZWN0UGFyZW50LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Zpc2libGUoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICB3aGlsZSAoZWwpIHtcclxuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xyXG4gICAgICAgIGlmIChjb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbnRlcmVkRGl2SUQobmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gJ2dpZ18nICsgbG9jYWxJbmZvLmluaXRUaW1lLmdldFRpbWUoKS50b1N0cmluZygpICsgJ18nICsgbmFtZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhBdHRyaWJ1dGVzKGRvbUVsZW1OYW1lOiBzdHJpbmcsIGRvbUVsZW1BdHRycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBuZXdEb21FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkb21FbGVtTmFtZSk7XHJcblxyXG4gICAgaWYgKGRvbUVsZW1BdHRycykge1xyXG4gICAgICAgIGZvciAobGV0IGVsZW1BdHRyIGluIGRvbUVsZW1BdHRycykge1xyXG4gICAgICAgICAgICBuZXdEb21FbGVtW2VsZW1BdHRyXSA9IGRvbUVsZW1BdHRyc1tlbGVtQXR0cl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdEb21FbGVtO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3BMZXZlbERpdihpZD86IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGlmIChlbC5zdHlsZS56SW5kZXggIT0gbnVsbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLnpJbmRleCA9ICcnICsgZ2V0TmV4dFpJbmRleCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgZWwuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSAmJiBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZWwsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUJ5SUQoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0J5SUQoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGxvY2FsSW5mby5pc0lFNiA/IChlbC50YWdOYW1lID09ICdURCcgPyAndGFibGUtY2VsbCcgOiBlbC50YWdOYW1lID09ICdUUicgPyAnJyA6IGVsLnRhZ05hbWUgPT0gJ1RBQkxFJyA/ICcnIDogJ2Jsb2NrJykgOiAnJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJCeUlEKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKGMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhUTUxTaXplKGh0bWw6IHN0cmluZywgY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB7XHJcbiAgICB2YXIgZGl2TWVhc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2TWVhc3VyZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBkaXZNZWFzdXJlLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XHJcbiAgICBkaXZNZWFzdXJlLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2TWVhc3VyZSk7XHJcbiAgICB2YXIgdyA9IGRpdk1lYXN1cmUub2Zmc2V0V2lkdGg7XHJcbiAgICB2YXIgaCA9IGRpdk1lYXN1cmUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgZGl2TWVhc3VyZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdk1lYXN1cmUpO1xyXG4gICAgcmV0dXJuIHsgdzogdywgaDogaCB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5Q2xhc3MocGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nLCBpbmNsdWRlUGFyZW50PzogYm9vbGVhbik6IEhUTUxFbGVtZW50W10ge1xyXG4gICAgaWYgKCFwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgdmFyIGFyRWxzID0gW107XHJcblxyXG4gICAgaWYgKGluY2x1ZGVQYXJlbnQgJiYgaXNFbGVtZW50Q2xhc3MocGFyZW50RWxlbWVudCwgY2xhc3NOYW1lKSkge1xyXG4gICAgICAgIGFyRWxzLnB1c2gocGFyZW50RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGVsczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBwYXJlbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykgYXMgYW55O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaXNFbGVtZW50Q2xhc3MoZWxzW2ldLCBjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgIGFyRWxzLnB1c2goZWxzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJFbHMgfHwgW107XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlBdHRyaWJ1dGUocGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhZ05hbWU6IHN0cmluZywgYXR0cmlidXRlTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nKTogSFRNTEVsZW1lbnRbXSB7XHJcbiAgICB2YXIgYXJFbHMgPSBbXTtcclxuICAgIHZhciBlbHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSBhcyBhbnk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChlbHNbaV0uZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpID09IGF0dHJpYnV0ZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGFyRWxzLnB1c2goZWxzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJFbHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbihlbDogSFRNTEVsZW1lbnQpOiB7IGxlZnQ6IG51bWJlcjsgdG9wOiBudW1iZXI7IHJpZ2h0OiBudW1iZXI7IGJvdHRvbTogbnVtYmVyIH0ge1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVybiB7IGxlZnQ6IDAsIHRvcDogMCwgYm90dG9tOiAwLCByaWdodDogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB2YXIgc2Nyb2xsID0gdmlld3BvcnRVdGlscy5nZXRTY3JvbGwoKTtcclxuICAgIHZhciBsZWZ0ID0gcmVjdC5sZWZ0ICsgc2Nyb2xsLmxlZnQ7XHJcbiAgICB2YXIgdG9wID0gcmVjdC50b3AgKyBzY3JvbGwudG9wO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICByaWdodDogbGVmdCArIHJlY3Qud2lkdGgsXHJcbiAgICAgICAgYm90dG9tOiB0b3AgKyByZWN0LmhlaWdodCxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzVG9FbGVtZW50KGVsOiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghZWwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZXhpc3RpbmdDbGFzc2VzID0gZWwuY2xhc3NOYW1lID8gZ2V0Q2xhc3NOYW1lcyhlbCkgOiBbXTtcclxuICAgIHZhciBleGlzdGluZ09yaWdpbmFsTGVuZ3RoID0gZXhpc3RpbmdDbGFzc2VzLmxlbmd0aDtcclxuICAgIHZhciBuZXdDbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgZm9yICh2YXIgaiBpbiBuZXdDbGFzc2VzKSB7XHJcbiAgICAgICAgdmFyIGV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghbmV3Q2xhc3Nlc1tqXSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiBleGlzdGluZ0NsYXNzZXMpIHtcclxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ2xhc3Nlc1tpXSA9PT0gbmV3Q2xhc3Nlc1tqXSkge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWV4aXN0cykge1xyXG4gICAgICAgICAgICBleGlzdGluZ0NsYXNzZXMucHVzaChuZXdDbGFzc2VzW2pdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nQ2xhc3Nlcy5sZW5ndGggIT09IGV4aXN0aW5nT3JpZ2luYWxMZW5ndGgpIHtcclxuICAgICAgICBlbC5jbGFzc05hbWUgPSBleGlzdGluZ0NsYXNzZXMuam9pbignICcpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc0Zyb21FbGVtZW50KGVsOiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcsIHN1YnN0cmluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGFyQ2xhc3MgPSBnZXRDbGFzc05hbWVzKGVsKTtcclxuICAgIGZvciAodmFyIGkgPSBhckNsYXNzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYgKGFyQ2xhc3NbaV0gPT09IGNsYXNzTmFtZSB8fCAoc3Vic3RyaW5nICYmIGFyQ2xhc3NbaV0uaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkpIHtcclxuICAgICAgICAgICAgYXJDbGFzcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWwuY2xhc3NOYW1lID0gYXJDbGFzcy5qb2luKCcgJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzTmFtZXMoZWw6IEhUTUxFbGVtZW50KTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICB2YXIgY2xhc3NlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgaWYgKHR5cGVvZiBlbC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghZWwpIHJldHVybiBmYWxzZTtcclxuICAgIGVsc2UgaWYgKCFjbGFzc05hbWUpIHJldHVybiB0cnVlO1xyXG4gICAgZWxzZSBpZiAoIWVsLmNsYXNzTmFtZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHZhciBleGlzdHMgPSBmYWxzZTtcclxuICAgIHZhciBhckNsYXNzID0gZ2V0Q2xhc3NOYW1lcyhlbCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyQ2xhc3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJDbGFzc1tpXSA9PT0gY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBleGlzdHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbEV2ZW50KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghZXZlbnQpIHJldHVybjtcclxuICAgIGlmICgnY2FuY2VsYWJsZScgaW4gZXZlbnQpXHJcbiAgICAgICAgLy8gQWxsIGJyb3dzZXJzIGV4Y2VwdCA8SUU5XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGVsc2UgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdmFyIGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmFtZSA9IG5hbWUgfHwgJyc7XHJcbiAgICBkaXZDb250YWluZXIuaW5uZXJIVE1MID0gJzwnICsgdHlwZSArICcgbmFtZT1cIicgKyBuYW1lICsgJ1wiIGlkPVwiJyArIG5hbWUgKyAnXCI+PC8nICsgdHlwZSArICc+JztcclxuICAgIHJldHVybiBkaXZDb250YWluZXIuZmlyc3RDaGlsZDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2l6ZShjb250YWluZXI6IEhUTUxFbGVtZW50LCB3OiBhbnksIGg6IGFueSwgY2VudGVyPzogYm9vbGVhbikge1xyXG4gICAgaWYgKGNvbnRhaW5lciA9PSBudWxsIHx8IGNvbnRhaW5lci5zdHlsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3KSB7XHJcbiAgICAgICAgdyA9ICcnICsgdztcclxuICAgICAgICB2YXIgaXNXaWR0aFByZWNlbnRhZ2UgPSB3LmluZGV4T2YoJyUnKSA+IDA7XHJcblxyXG4gICAgICAgIGlmICghaXNOYU4odykgfHwgaXNXaWR0aFByZWNlbnRhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIHdpZHRoVmFsdWU6IHN0cmluZyA9ICcnICsgKGlzV2lkdGhQcmVjZW50YWdlID8gdyA6IHcgKyAncHgnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuc3R5bGUud2lkdGggIT0gd2lkdGhWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gd2lkdGhWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaCkge1xyXG4gICAgICAgIGggPSAnJyArIGg7XHJcbiAgICAgICAgdmFyIGlzSGVpZ2h0UHJlY2VudGFnZSA9IGguaW5kZXhPZignJScpID4gMDtcclxuXHJcbiAgICAgICAgaWYgKCFpc05hTih3KSB8fCBpc0hlaWdodFByZWNlbnRhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGhlaWdodFZhbHVlOiBzdHJpbmcgPSAnJyArIChpc0hlaWdodFByZWNlbnRhZ2UgPyBoIDogaCArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgIT09IGhlaWdodFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNlbnRlciAmJiB3ICYmIGgpIHtcclxuICAgICAgICBpZiAoY29udGFpbmVyLnN0eWxlLnpJbmRleCA9PSBudWxsIHx8IGNlbnRlcikge1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuekluZGV4ID0gJycgKyBnZXROZXh0WkluZGV4KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdnAgPSB2aWV3cG9ydFV0aWxzLmdldElubmVyU2l6ZSgpO1xyXG4gICAgICAgIHZhciBzY3JsID0gdmlld3BvcnRVdGlscy5nZXRTY3JvbGwoKTtcclxuXHJcbiAgICAgICAgdmFyIHZwdCA9IHNjcmwudG9wO1xyXG4gICAgICAgIHZhciB2cGwgPSBzY3JsLmxlZnQ7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSAnJyArIE1hdGgubWF4KDAsIHZwdCArIE1hdGguZmxvb3IoKHZwLmggLSBoKSAvIDIpKSArICdweCc7XHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJyArIE1hdGgubWF4KDAsIHZwbCArIE1hdGguZmxvb3IoKHZwLncgLSB3KSAvIDIpKSArICdweCc7XHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGlkZGVuSWZyYW1lKHNyYzogc3RyaW5nKTogSFRNTElGcmFtZUVsZW1lbnQge1xyXG4gICAgdmFyIGlmciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgaWZyLnNyYyA9IHNyYztcclxuICAgIGlmci5zdHlsZS53aWR0aCA9ICczMHB4JztcclxuICAgIGlmci5zdHlsZS5oZWlnaHQgPSAnMTBweCc7XHJcbiAgICBpZnIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgaWZyLnN0eWxlLnRvcCA9ICctMTAwMHB4JztcclxuICAgIGlmci5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgYXBwZW5kVG9Cb2R5KGlmcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZ1bmN0aW9uc1V0aWxzLmludm9rZU9uUGFnZUxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICBhcHBlbmRUb0JvZHkoaWZyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaWZyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVFbmNvZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxyXG4gICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcclxuICAgICAgICAucmVwbGFjZSgvXFxcIi9nLCAnJnF1b3Q7JylcclxuICAgICAgICAucmVwbGFjZSgvXFwnL2csICcmIzM5OycpOyAvLyBJRTggZG9lc24ndCBzdXBwb3J0ICZhcG9zO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtYW5pcHVsYXRlQXR0cmlidXRlcyhcclxuICAgIGVsZW1lbnRzOiBFbGVtZW50W10sXHJcbiAgICBtYXRjaGVyOiBSZWdFeHAsXHJcbiAgICByZXBsYWNlUHJlZGljYXRlOiAobWF0Y2g6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIGNyaXRlcmlhOiAoYXR0cj86IEF0dHIpID0+IGJvb2xlYW4gPSAoKSA9PiB0cnVlLFxyXG4pOiB2b2lkIHtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGlmICghZWwuYXR0cmlidXRlcykgcmV0dXJuO1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsLmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjcml0ZXJpYShhdHRyKSkge1xyXG4gICAgICAgICAgICAgICAgYXR0ci52YWx1ZSA9IGF0dHIudmFsdWUucmVwbGFjZShtYXRjaGVyLCByZXBsYWNlUHJlZGljYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRleHROb2Rlc1VuZGVyKGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IG47XHJcbiAgICBjb25zdCB0ZXh0Tm9kZXM6IFRleHRbXSA9IFtdO1xyXG4gICAgY29uc3QgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZWwsIE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSk7XHJcbiAgICB3aGlsZSAoKG4gPSB0cmVlV2Fsa2VyLm5leHROb2RlKCkgYXMgVGV4dCkpIHtcclxuICAgICAgICB0ZXh0Tm9kZXMucHVzaChuKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0Tm9kZXM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTEJvb2xlYW5BdHRyaWJ1dGUoYXR0ck5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFsnYXV0b2NvbXBsZXRlJywgJ2F1dG9mb2N1cycsICdjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2hpZGRlbicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdzZWxlY3RlZCddLmluZGV4T2YoYXR0ck5hbWUpID4gLTE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0JlbG9uZ1RvR2lneWFGaWVsZHNldChlbDogRWxlbWVudCk6IGJvb2xlYW4ge1xyXG5cclxuICAgIGlmICghZWwgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGVuZCBvZiByZWN1cnNpb24gLSBlbGVtZW50IGlzIG5vdCBhIGNoaWxkIG9mIGEgZmllbGRzZXRcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNFbGVtZW50Q2xhc3MoZWwucGFyZW50RWxlbWVudCwgJ2dpZ3lhLWZpZWxkc2V0Jykpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc0JlbG9uZ1RvR2lneWFGaWVsZHNldChlbC5wYXJlbnRFbGVtZW50KTtcclxufVxyXG4iLCJpbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUob2JqOiBhbnksIGluY2x1ZGVGdW5jdGlvbnMgPSBmYWxzZSwgcHJldHR5UHJpbnQgPSBmYWxzZSwgbCA9IDAsIG1heExldmVsID0gMjApOiBzdHJpbmcge1xyXG4gICAgaWYgKCFsb2NhbEluZm8uaXNJRTgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93WydKU09OJ10uc3RyaW5naWZ5KG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghbCkgbCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChsID4gbWF4TGV2ZWwpIHJldHVybiAnW1RvbyBkZWVwXSc7XHJcblxyXG4gICAgICAgIHZhciBwcmVmaXggPSAnJztcclxuICAgICAgICB2YXIgbmV3bGluZSA9ICcnO1xyXG4gICAgICAgIHZhciB0YWIgPSAnJztcclxuICAgICAgICBpZiAocHJldHR5UHJpbnQpIHtcclxuICAgICAgICAgICAgdGFiID0gJ1xcdCc7XHJcbiAgICAgICAgICAgIG5ld2xpbmUgPSAnXFxuJztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsICsgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXggKz0gdGFiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0ID0gdHlwZW9mIG9iajtcclxuICAgICAgICBpZiAodCA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ICE9ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBzaW1wbGUgZGF0YSB0eXBlXHJcblxyXG4gICAgICAgICAgICBpZiAodCA9PSAnc3RyaW5nJykgb2JqID0gJ1wiJyArIG9iai5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCInO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKG9iaik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG4sXHJcbiAgICAgICAgICAgICAgICB2LFxyXG4gICAgICAgICAgICAgICAganNvbiA9IFtdLFxyXG4gICAgICAgICAgICAgICAgYXJyID0gb2JqICYmIG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheTtcclxuICAgICAgICAgICAgaWYgKGFycikge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gb2JqW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHQgPSB0eXBlb2YgdjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PSBudWxsIHx8IHQgPT0gJ3VuZGVmaW5lZCcpIHYgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdzdHJpbmcnKSB2ID0gJ1wiJyArIHYucmVwbGFjZSgvKFxcXCJ8XFxcXCkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcclxcbnxcXHJ8XFxuL2csICdcXFxcbicpICsgJ1wiJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVGdW5jdGlvbnMpIHYgPSAnRnVuY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHYgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHYucGFyZW50Tm9kZSAmJiB2LmlubmVySFRNTCkgdiA9ICdIVE1MRWxlbWVudCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodi5jb25zdHJ1Y3RvciA9PSBEYXRlKSB2ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsKSB2ID0gc2VyaWFsaXplKHYsIGluY2x1ZGVGdW5jdGlvbnMsIHByZXR0eVByaW50LCBsICsgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChTdHJpbmcodikgIT0gJycpIGpzb24ucHVzaChwcmVmaXggKyB0YWIgKyBTdHJpbmcodikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChuIGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBvYmpbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgdCA9IHR5cGVvZiB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ID09IG51bGwgfHwgdCA9PSAndW5kZWZpbmVkJykgdiA9IFN0cmluZyh2KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdzdHJpbmcnKSB2ID0gJ1wiJyArIHYucmVwbGFjZSgvKFxcXCJ8XFxcXCkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcclxcbnxcXHJ8XFxuL2csICdcXFxcbicpICsgJ1wiJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVGdW5jdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAnRnVuY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2LnBhcmVudE5vZGUgJiYgdi5pbm5lckhUTUwpIHYgPSAnSFRNTEVsZW1lbnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT0gRGF0ZSkgdiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCkgdiA9IG5ld2xpbmUgKyBzZXJpYWxpemUodiwgaW5jbHVkZUZ1bmN0aW9ucywgcHJldHR5UHJpbnQsIGwgKyAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFN0cmluZyh2KSAhPSAnJykganNvbi5wdXNoKHByZWZpeCArIHRhYiArICdcIicgKyBuLnJlcGxhY2UoLyhcXFwifFxcXFwpL2csICdcXFxcJDEnKS5yZXBsYWNlKC9cXHJcXG58XFxyfFxcbi9nLCAnXFxcXG4nKSArICdcIjonICsgU3RyaW5nKHYpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3bGluZSArIHByZWZpeCArIChhcnIgPyAnWycgOiAneycpICsgbmV3bGluZSArIGpzb24uam9pbignLCcgKyBuZXdsaW5lKSArIG5ld2xpbmUgKyBwcmVmaXggKyAoYXJyID8gJ10nIDogJ30nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplPFQ+KGpzb246IHN0cmluZywgZGVmYXVsdFZhbHVlPzogVCwgc2NvcGU/OiBhbnkpOiBUIHtcclxuICAgIC8vIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIGlzIGVtcHR5IHN0cmluZyAob3Igc2ltaWxhcikuXHJcbiAgICBpZiAoIWpzb24gfHwgIWpzb24ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoe30gYXMgVCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0ZW1wdCB0byBwYXJzZS4gT24gZXJyb3IsIHdhcm4gaW4gY29uc29sZSBhbmQgcmV0dXJuIGRlZmF1bHQgdmFsdWUuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuICAgICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2NvcGUpIHtcclxuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goc2NvcGVba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZuOiBGdW5jdGlvbiA9IGV2YWwoYChmdW5jdGlvbigke2tleXMuam9pbignLCcpfSkgeyByZXR1cm4gJHtqc29uLnRyaW0oKX07IH0pYCk7XHJcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHVuZGVmaW5lZCwgdmFsdWVzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGRlc2VyaWFsaXppbmcgSmF2YVNjcmlwdCcsIGUpO1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgKHt9IGFzIFQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZTxUPihqc29uOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IFQpOiBUIHtcclxuICAgIGlmIChsb2NhbEluZm8uaXNJRTgpIHtcclxuICAgICAgICByZXR1cm4gZGVzZXJpYWxpemU8VD4oanNvbiwgZGVmYXVsdFZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1snSlNPTiddLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoe30gYXMgVCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGtleVZhbHVlVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2tleVZhbHVlJztcclxuaW1wb3J0ICogYXMgb2JqZWN0VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL29iamVjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVVJMRW5jb2RlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFVSTERlY29kZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBVUkxEZWNvZGVSZWN1cnNpdmUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgcHJldkRlY29kaW5nUmVzID0gJyc7XHJcbiAgICBsZXQgY3VyckRlY29kaW5nUmVzID0gdmFsdWU7XHJcblxyXG4gICAgLy8ga2VlcCBkZWNvZGluZyB1bnRpbCB3ZSBjYW4ndCBkZWNvZGUgYW55bW9yZVxyXG4gICAgd2hpbGUgKGN1cnJEZWNvZGluZ1JlcyAhPSBwcmV2RGVjb2RpbmdSZXMpIHtcclxuICAgICAgICAvLyBzdG9yZSB0aGUgbGFzdCBkZWNvZGluZyByZXN1bHRcclxuICAgICAgICBwcmV2RGVjb2RpbmdSZXMgPSBjdXJyRGVjb2RpbmdSZXM7XHJcblxyXG4gICAgICAgIC8vIGRlY29kZSB0aGUgc3RyaW5nIG9uY2UgYWdhaW5cclxuICAgICAgICBjdXJyRGVjb2RpbmdSZXMgPSBVUkxEZWNvZGUocHJldkRlY29kaW5nUmVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3VyckRlY29kaW5nUmVzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbXNGcm9tVVJMKHVybDogc3RyaW5nLCBrZXlzVG9Mb3dlcj86IGJvb2xlYW4pOiBPYmplY3Qge1xyXG4gICAgaWYgKCF1cmwgfHwgdXJsLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5VmFsdWVVdGlscy5kZXNlcmlhbGl6ZSh1cmwuc3BsaXQoJyMnKVswXS5zcGxpdCgnPycpWzFdLCAnJicsIGtleXNUb0xvd2VyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyYW1WYWx1ZUZyb21VUkwocGFyYW06IHN0cmluZywgdXJsOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChudWxsID09IHVybCB8fCAnJyA9PSB1cmwpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlxbSA9IHVybC5pbmRleE9mKCc/Jyk7XHJcbiAgICBpZiAoaXFtID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcXMgPSAnJicgKyB1cmwuc3Vic3RyKGlxbSArIDEpO1xyXG5cclxuICAgIGxldCBpZHggPSBxcy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJyYnICsgcGFyYW0udG9Mb3dlckNhc2UoKSArICc9Jyk7XHJcbiAgICBpZiAoaWR4ID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsQW5kTW9yZSA9IHFzLnN1YnN0cihpZHggKyAoMSArIHBhcmFtLmxlbmd0aCArIDEpKSArICcmJztcclxuICAgIGlkeCA9IHZhbEFuZE1vcmUuaW5kZXhPZignJicpO1xyXG5cclxuICAgIHJldHVybiB2YWxBbmRNb3JlLnN1YnN0cigwLCBpZHgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJhbXNUb1VSTCh1cmw6IHN0cmluZywgb1BhcmFtczogT2JqZWN0KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IGdldFBhcmFtc0Zyb21VUkwodXJsKTtcclxuICAgIG9iamVjdFV0aWxzLmFkZChwYXJhbXMsIG9QYXJhbXMpO1xyXG4gICAgY29uc3QgdXJsSGFzaFNwbGl0ID0gdXJsLnNwbGl0KCcjJyk7XHJcbiAgICBsZXQgZmluYWxVcmwgPSB1cmxIYXNoU3BsaXRbMF0uc3BsaXQoJz8nKVswXSArICc/JyArIGtleVZhbHVlVXRpbHMuc2VyaWFsaXplKHBhcmFtcywgJyYnKTtcclxuICAgIGlmICh1cmxIYXNoU3BsaXQubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGZpbmFsVXJsICs9ICcjJyArIHVybEhhc2hTcGxpdFsxXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaW5hbFVybDtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBzdHJpbmdVdGlsc1V0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zdHJpbmdVdGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXJpIHtcclxuICAgIHByaXZhdGUgX2FuY2hvcjogSFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIGlzQWJzb2x1dGUgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cDonID8gJ2h0dHAnIDogJ2h0dHBzJztcclxuICAgICAgICBpZiAoaXNBYnNvbHV0ZSAmJiB1cmwuaW5kZXhPZignOi8vJykgPT09IC0xICYmIHVybC5jaGFyQXQoMCkgIT09ICcvJykgdXJsID0gYCR7cHJvdG9jb2x9Oi8vJHt1cmx9YDtcclxuICAgICAgICB0aGlzLl9hbmNob3IuaHJlZiA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRvbWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhvc3RuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLnBhdGhuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaHJlZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhyZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzZWFyY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5zZWFyY2guc2xpY2UoMSk7XHJcbiAgICB9IC8vIGRyb3BwaW5nICc/J1xyXG4gICAgcHVibGljIGdldCBoYXNoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3IuaGFzaC5zbGljZSgxKTtcclxuICAgIH0gLy8gZHJvcHBpbmcgJyMnXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhyZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRvU2VhcmNoKHBhcmFtczogT2JqZWN0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gcGFyYW1zW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiB2YWwgPT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiB2YWwgPT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbCA9PSAnc3RyaW5nJykgJiYgbmFtZSAhPSAnZXZlbnROYW1lJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkZGl0aW9uID0gdGhpcy5fYW5jaG9yLnNlYXJjaCA/ICcmJyA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5jaG9yLnNlYXJjaCArPSBgJHthZGRpdGlvbn0ke25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1tuYW1lXSl9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZmV0Y2g8VD4ocmV0cmllcyA9IDApOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmZldGNoID8gYXdhaXQgdGhpcy5icm93c2VyRmV0Y2g8VD4oKSA6IGF3YWl0IHRoaXMueGhyPFQ+KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpZiAocmV0cmllcyA8PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmZXRjaCBmYWlsZWQ6ICR7ZX1gKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5kZWxheSgxKTtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2gocmV0cmllcyAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNCYXNlT2YodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gVXJpLnBhcnNlKHVybCkuaXNJbih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNJbihiYXNlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzSW4oYmFzZTogVXJpKTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc0luKGJhc2U6IFVyaSB8IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgYmFzZSA9IFVyaS5wYXJzZShiYXNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICh0aGlzLmRvbWFpbiA9PSBiYXNlLmRvbWFpbiB8fCAvLyBwYWdlIGlzIHRoZSBiYXNlIGRvbWFpblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1YkRvbWFpbk9mKGJhc2UpKSAmJiAvLyBvciBzdWItZG9tYWluIG9mIGl0XHJcbiAgICAgICAgICAgICghYmFzZS5wYXRoIHx8IHRoaXMucGF0aC5pbmRleE9mKGJhc2UucGF0aCkgPT0gMClcclxuICAgICAgICApOyAvLyBwYWdlIGlzIGFsc28gaW4gYmFzZSdzIGRlZmluZWQgcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNGb3JTdWJEb21haW5zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvbWFpbi5pbmRleE9mKCcuJykgPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNTdWJEb21haW5PZihiYXNlOiBVcmkpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgZG9tYWluID0gJyc7XHJcblxyXG4gICAgICAgIGlmICghYmFzZS5pc0ZvclN1YkRvbWFpbnMoKSkgZG9tYWluID0gJy4nO1xyXG5cclxuICAgICAgICBkb21haW4gKz0gYmFzZS5kb21haW47XHJcblxyXG4gICAgICAgIHJldHVybiBzdHJpbmdVdGlsc1V0aWxzLmVuZHNXaXRoKHRoaXMuZG9tYWluLCBkb21haW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2UodXJsOiBzdHJpbmcsIGlzQWJzb2x1dGUgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVXJpKHVybCwgaXNBYnNvbHV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBicm93c2VyRmV0Y2g8VD4oKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKHVybCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmZXRjaCBmYWlsZWRgKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgeGhyPFQ+KCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSA0IHx8IHhoci5zdGF0dXMgIT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChgeGhyIGZhaWxlZCAtICR7eGhyLnN0YXR1c30gLSAke3hoci5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGpzb25SZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGRlbGF5KG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJTnVtZXJpY01hcDxUPiB7XHJcbiAgICBba2V5OiBudW1iZXJdOiBUO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1hcDxUPiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBUO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVudW1lcmFibGU8VD4ge1xyXG4gICAgbGVuZ3RoOiBudW1iZXI7XHJcbiAgICBbaTogbnVtYmVyXTogVDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcjogYW55W10sIG86IGFueSk6IG51bWJlciB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyW2ldID09IG8pIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhcjogYW55W10pIHtcclxuICAgIHZhciBhcjIgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhcjJbaV0gPSBhcltpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcjI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJ5VmFsdWUoYXI6IGFueVtdLCB2YWx1ZTogT2JqZWN0KSB7XHJcbiAgICBpZiAoIWFyKSByZXR1cm47XHJcbiAgICBmb3IgKHZhciBpID0gYXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAoYXJbaV0gPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgYXIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQnlQcm9wZXJ0eShhcjogYW55W10sIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICghYXIpIHJldHVybjtcclxuICAgIGZvciAodmFyIGkgPSBhci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmIChhcltpXVtwcm9wZXJ0eV0gPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgYXIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXlGcm9tU3RyaW5nKHN0cjogc3RyaW5nLCBkZWxpbWl0ZXI6IHN0cmluZywgbG93ZXJDYXNlPzogYm9vbGVhbikge1xyXG4gICAgLy8gY2hlY2sgZm9yIHN0cmluZyB0eXBlIGluIHRoZSBpbnB1dCBhbmQgbm90IGVtcHR5LlxyXG4gICAgaWYgKCFzdHIgfHwgdHlwZW9mIHN0ciAhPSAnc3RyaW5nJykgcmV0dXJuIFtdO1xyXG5cclxuICAgIC8vIGxvd2VyY2FzZSBpZiBkZW1lbmRlZFxyXG4gICAgaWYgKGxvd2VyQ2FzZSkgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gY2xlYW4gdGhlIHN0cmluZzpcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bIF0vZywgJycpLnJlcGxhY2UoLywsL2csICcsJyk7XHJcblxyXG4gICAgLy8gaWYgc3RyaW5nIGVtcHR5XHJcbiAgICBpZiAoIXN0cikgcmV0dXJuIFtdO1xyXG5cclxuICAgIC8vIHJldHVybiBhcnJheSBmcm9tIHN0cmluZ1xyXG4gICAgcmV0dXJuIHN0ci5zcGxpdChkZWxpbWl0ZXIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3QoYXJyYXk6IGFueVtdLCAuLi5hcmdzOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gW107XHJcbiAgICB2YXIgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gICAgdmFyIGFyZ3NMZW5ndGg6IG51bWJlciA9IGFyZ3VtZW50cy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgaXRlbTogYW55ID0gYXJyYXlbaV07XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXhPZihyZXN1bHQsIGl0ZW0pICE9IC0xKSBjb250aW51ZTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IGFyZ3NMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB2YXIgYXJyOiBhbnlbXSA9IGFyZ3VtZW50c1tqXTtcclxuICAgICAgICAgICAgaWYgKGFyciA9PSBudWxsIHx8IHRoaXMuaW5kZXhPZihhcnIsIGl0ZW0pID09IC0xKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGogPT09IGFyZ3NMZW5ndGgpIHJlc3VsdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGFzdEluZGV4T2Y8VD4oYXJyOiBJRW51bWVyYWJsZTxUPiwgdmFsOiBULCBmcm9tSW5kZXggPSAwKTogbnVtYmVyIHtcclxuICAgIGZvciAodmFyIGkgPSBhcnIubGVuZ3RoOyAtLWkgPj0gZnJvbUluZGV4OyApIHtcclxuICAgICAgICBpZiAoYXJyW2ldID09PSB2YWwpIHJldHVybiBpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaDxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBhY3Rpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IHZvaWQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSBhY3Rpb24oYXJyW2ldLCBpLCBhcnIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoUHJvcDxUPihvYmo6IElNYXA8VD4sIGFjdGlvbjogKHByb3A6IFQsIG5hbWU6IHN0cmluZywgb2JqOiBJTWFwPFQ+KSA9PiB2b2lkKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hQcm9wPFQgZXh0ZW5kcyBPYmplY3Q+KG9iajogVCwgYWN0aW9uOiAocHJvcDogYW55LCBuYW1lOiBzdHJpbmcsIG9iajogVCkgPT4gdm9pZCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoUHJvcChvYmo6IE9iamVjdCwgYWN0aW9uOiAocHJvcDogYW55LCBuYW1lOiBzdHJpbmcsIG9iajogT2JqZWN0KSA9PiB2b2lkKSB7XHJcbiAgICBmb3IgKHZhciBuYW1lIGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIGFjdGlvbihvYmpbbmFtZV0sIG5hbWUsIG9iaik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNvbWU8VD4oYXJyOiBJRW51bWVyYWJsZTxUPiwgY29uZGl0aW9uOiAoZWxlbWVudDogVCwgaW5kZXg/OiBudW1iZXIsIGFycj86IElFbnVtZXJhYmxlPFQ+KSA9PiBib29sZWFuKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGlmIChjb25kaXRpb24oYXJyW2ldLCBpLCBhcnIpKSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5PFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGNvbmRpdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gYm9vbGVhbikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBpZiAoIWNvbmRpdGlvbihhcnJbaV0sIGksIGFycikpIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlQcm9wPFQ+KG9iajogSU1hcDxUPiwgY29uZGl0aW9uOiAocHJvcDogVCwgbmFtZTogc3RyaW5nLCBvYmo6IElNYXA8VD4pID0+IGJvb2xlYW4pO1xyXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlQcm9wPFQ+KG9iajogVCwgY29uZGl0aW9uOiAocHJvcCwgbmFtZTogc3RyaW5nLCBvYmo6IFQpID0+IGJvb2xlYW4pO1xyXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlQcm9wKG9iajogT2JqZWN0LCBjb25kaXRpb246IChwcm9wLCBuYW1lOiBzdHJpbmcsIG9iajogT2JqZWN0KSA9PiBib29sZWFuKSB7XHJcbiAgICBmb3IgKHZhciBuYW1lIGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkgJiYgIWNvbmRpdGlvbihvYmpbbmFtZV0sIG5hbWUsIG9iaikpIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWFwPFMsIFQ+KGFycjogSUVudW1lcmFibGU8Uz4sIGFjdGlvbjogKGVsZW1lbnQ6IFMsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxTPikgPT4gVCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxUPigpO1xyXG5cclxuICAgIGZvckVhY2goYXJyLCAoaXRlbSwgaWR4LCBhcnIpID0+IHJlc3VsdC5wdXNoKGFjdGlvbihpdGVtLCBpZHgsIGFycikpKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaXJzdEluZGV4PFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGNvbmRpdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICB2YXIgcmVzdWx0OiBudW1iZXIgPSAtMTtcclxuICAgIHNvbWUoYXJyLCAoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xyXG4gICAgICAgIGlmIChjb25kaXRpb24oaXRlbSwgaW5kZXgsIGFycikpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmlyc3Q8VD4oYXJyOiBJRW51bWVyYWJsZTxUPiwgY29uZGl0aW9uOiAoZWxlbWVudDogVCwgaW5kZXg/OiBudW1iZXIsIGFycj86IElFbnVtZXJhYmxlPFQ+KSA9PiBib29sZWFuKTogVCB7XHJcbiAgICByZXR1cm4gYXJyW2ZpcnN0SW5kZXgoYXJyLCBjb25kaXRpb24pXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRW51bVZhbHVlczxUPihlbnVtVHlwZSk6IFRbXSB7XHJcbiAgICB2YXIgcmVzdWx0czogVFtdID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSBpbiBlbnVtVHlwZSkgaWYgKHR5cGVvZiBlbnVtVHlwZVtpXSA9PSAnbnVtYmVyJykgcmVzdWx0cy5wdXNoKGVudW1UeXBlW2ldKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlVmFsdWVzPFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgYXJyLmxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICBpZiAoYXJyW2ldID09PSBhcnJbal0pIHtcclxuICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbn1cclxuIiwiaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcblxyXG5kZWNsYXJlIGZ1bmN0aW9uIHVuZXNjYXBlKGVzY2FwZWRTdHI6IHN0cmluZyk6IHN0cmluZztcclxuZGVjbGFyZSBmdW5jdGlvbiBlc2NhcGUodW5lc2NhcGVkU3RyOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX2dldEJhc2VEb21haW4oKSB7XHJcbiAgICByZXR1cm4gbG9jYWxJbmZvLmJhc2VEb21haW4gfHwgJyc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHREb21haW4ocGFnZURvbWFpbiA9IGxvY2FsSW5mby5wYWdlRG9tYWluLCBiYXNlRG9tYWluID0gX2dldEJhc2VEb21haW4oKSk6IHN0cmluZyB7XHJcbiAgICBsZXQgY29va2llRG9tYWluO1xyXG4gICAgY29va2llRG9tYWluID1cclxuICAgICAgICBiYXNlRG9tYWluLmxlbmd0aCA+IDAgJiYgcGFnZURvbWFpbi5sZW5ndGggPj0gYmFzZURvbWFpbi5sZW5ndGggJiYgcGFnZURvbWFpbi5sYXN0SW5kZXhPZihiYXNlRG9tYWluKSA9PT0gcGFnZURvbWFpbi5sZW5ndGggLSBiYXNlRG9tYWluLmxlbmd0aFxyXG4gICAgICAgICAgICA/IGJhc2VEb21haW5cclxuICAgICAgICAgICAgOiBwYWdlRG9tYWluO1xyXG4gICAgcmV0dXJuIGNvb2tpZURvbWFpbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXlsgXFx0XSt8WyBcXHRdKyQvZywgJycpO1xyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKD86Xnw7KVxcXFxzPycgKyBuYW1lICsgJz0oLio/KSg/Ojt8JCknKTtcclxuICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChyZWdleCk7XHJcbiAgICByZXR1cm4gbWF0Y2ggJiYgdW5lc2NhcGUobWF0Y2hbMV0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzX2luPzogYW55LCBjb29raWVEb21haW4/OiBzdHJpbmcsIGRvbnRVc2VSb290UGF0aD86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhZ2VEb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbjtcclxuICAgIGlmIChjb29raWVEb21haW4gPT0gbnVsbCkge1xyXG4gICAgICAgIGNvb2tpZURvbWFpbiA9IGdldERlZmF1bHREb21haW4oKTtcclxuICAgIH1cclxuICAgIGxldCBleHBpcmVNczogbnVtYmVyO1xyXG4gICAgaWYgKGV4cGlyZXNfaW4gPT0gbnVsbCB8fCBleHBpcmVzX2luID09PSAnJyB8fCBpc05hTihleHBpcmVzX2luKSkge1xyXG4gICAgICAgIGV4cGlyZU1zID0gMTAwMCAqIGdldEluZmluaXRlRXhwaXJhdGlvblRpbWVJblNlY29uZHMoKTtcclxuICAgIH0gZWxzZSBpZiAoZXhwaXJlc19pbiA9PSAwKSB7XHJcbiAgICAgICAgLy8gMCBtZWFucyBTZXNzaW9uXHJcbiAgICAgICAgZXhwaXJlTXMgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBbnkgb3RoZXIgdmFsdWUgaXMgbnVtYmVyIG9mIHNlY29uZHMgKEEgbmVnYXRpdmUgdmFsdWUgd291bGQgbWVhbiBleHBpcmUgbm93ISlcclxuICAgICAgICBleHBpcmVNcyA9IGV4cGlyZXNfaW4gKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBleGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZXhkYXRlLnNldFRpbWUoZXhkYXRlLmdldFRpbWUoKSArIGV4cGlyZU1zKTtcclxuXHJcbiAgICB2YXIgY29va2llU3RyaW5nID1cclxuICAgICAgICBuYW1lICtcclxuICAgICAgICAnPScgK1xyXG4gICAgICAgIGVzY2FwZSh2YWx1ZSkgK1xyXG4gICAgICAgIChkb250VXNlUm9vdFBhdGggPyAnJyA6ICc7IHBhdGg9LycpICtcclxuICAgICAgICAoZXhwaXJlTXMgPT0gbnVsbCA/ICcnIDogJzsgZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkpICtcclxuICAgICAgICAoY29va2llRG9tYWluICYmIGNvb2tpZURvbWFpbiAhPSAnJyAmJiBjb29raWVEb21haW4uaW5kZXhPZignLicpICE9IC0xID8gJzsgZG9tYWluPScgKyBjb29raWVEb21haW4gOiAnJyk7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XHJcblxyXG4gICAgLy8gU29tZSBicm93c2VycyBsaWtlIElFOCBkb24ndCBsaWtlIHNvbWUgZG9tYWlucyAoZS5nLiBkb21haW5zIG9mIHRoZSBmb3JtIHh4Lnl5KVxyXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTg5NjM4L2ludGVybmV0LWV4cGxvcmVyLXh4LXl5LXdlYnNpdGUtaXNzdWVcclxuICAgIGlmICgoIWV4cGlyZU1zIHx8IGV4cGlyZU1zID4gMCkgJiYgIWdldChuYW1lKSkge1xyXG4gICAgICAgIGNvb2tpZVN0cmluZyA9XHJcbiAgICAgICAgICAgIG5hbWUgK1xyXG4gICAgICAgICAgICAnPScgK1xyXG4gICAgICAgICAgICBlc2NhcGUodmFsdWUpICtcclxuICAgICAgICAgICAgKGRvbnRVc2VSb290UGF0aCA/ICcnIDogJzsgcGF0aD0vJykgK1xyXG4gICAgICAgICAgICAoZXhwaXJlTXMgPT0gbnVsbCA/ICcnIDogJzsgZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkpICtcclxuICAgICAgICAgICAgKHBhZ2VEb21haW4gJiYgcGFnZURvbWFpbiAhPSAnJyAmJiBwYWdlRG9tYWluLmluZGV4T2YoJy4nKSAhPSAtMSA/ICc7IGRvbWFpbj0nICsgcGFnZURvbWFpbiA6ICcnKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBwYWdlRG9tYWluID0gbG9jYWxJbmZvLnBhZ2VEb21haW47XHJcbiAgICB2YXIgYmFzZURvbWFpbiA9IF9nZXRCYXNlRG9tYWluKCk7XHJcblxyXG4gICAgaWYgKGJhc2VEb21haW4ubGVuZ3RoID4gMCAmJiBwYWdlRG9tYWluLmxlbmd0aCA+PSBiYXNlRG9tYWluLmxlbmd0aCAmJiBwYWdlRG9tYWluLmxhc3RJbmRleE9mKGJhc2VEb21haW4pID09PSBwYWdlRG9tYWluLmxlbmd0aCAtIGJhc2VEb21haW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgc2V0KG5hbWUsICcnLCAtMSwgYmFzZURvbWFpbik7IC8vIHJlbW92ZSBhbHNvIGZyb20gdGhlIHN1YkRvbWFpbi5cclxuICAgICAgICBzZXQobmFtZSwgJycsIC0xLCBiYXNlRG9tYWluLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNldChuYW1lLCAnJywgLTEsIGxvY2FsSW5mby5wYWdlRG9tYWluKTtcclxuICAgIHNldChuYW1lLCAnJywgLTEsIGxvY2FsSW5mby5wYWdlRG9tYWluLCB0cnVlKTtcclxuICAgIHNldChuYW1lLCAnJywgLTEsICcnKTtcclxuICAgIHNldChuYW1lLCAnJywgLTEsICcnLCB0cnVlKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5maW5pdGVFeHBpcmF0aW9uVGltZUluU2Vjb25kcygpIHtcclxuICAgIC8vIFNldCBleHBpcmF0aW9uIHRpbWUgdG8gMSB5ZWFyc1xyXG4gICAgcmV0dXJuIDYwICogNjAgKiAyNCAqIDM2NTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2FuU2F2ZUNvb2tpZShkb2MgPSBkb2N1bWVudCkge1xyXG4gICAgdmFyIGQgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDEwMDApOyAvLyAxIHNlY29uZCBleHBpcmF0aW9uLlxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZG9jLmNvb2tpZSA9ICdnaWczcGN0ZXN0PXRydWU7ZXhwaXJlcz0nICsgZFsndG9HTVRTdHJpbmcnXSgpO1xyXG4gICAgICAgIHJldHVybiBkb2MuY29va2llLmluZGV4T2YoJ2dpZzNwY3Rlc3QnKSAhPT0gLTE7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gaU9TIDEwIHdlYnZpZXcgdGhyb3dzIGluIHNvbWUgc2NlbmFyaW9zXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFVyaSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmknO1xyXG5pbXBvcnQgKiBhcyBzdHJpbmdVdGlsc1V0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zdHJpbmdVdGlscyc7XHJcbmltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgdmFyIGdldEFwaURvbWFpbjogKG5hbWVzcGFjZT86IHN0cmluZykgPT4gc3RyaW5nO1xyXG5jb25zdCBnaWd5YURvbWFpbk5hbWVzcGFjZXMgPSBbJ3NvY2lhbGl6ZScsICdhY2NvdW50cycsICdmaWRtJywgJ2dtJywgJ2NvbW1lbnRzJywgJ2djcycsICdpZHMnLCAnZHMnLCAnZ3Njb3VudGVycyddO1xyXG5leHBvcnQgZnVuY3Rpb24gYXBpRG9tYWluRmFjdG9yeShhcGlEb21haW4gPSByZXNvbHZlQXBpRG9tYWluKCksIGRlZmF1bHRBcGlEb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKTogKG5hbWVzcGFjZT86IHN0cmluZykgPT4gc3RyaW5nIHtcclxuICAgIGNvbnN0IHNob3VsZEFkZE5hbWVzcGFjZSA9IFVyaS5wYXJzZShhcGlEb21haW4pLmlzSW4oVXJpLnBhcnNlKGRlZmF1bHRBcGlEb21haW4pKTtcclxuXHJcbiAgICByZXR1cm4gKG5hbWVzcGFjZT86IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgc2hvdWxkQWRkTmFtZXNwYWNlKSB7XHJcbiAgICAgICAgICAgIGxldCBzdWJEb21haW4gPSBuYW1lc3BhY2Uuc3BsaXQoJy4nKVswXTtcclxuICAgICAgICAgICAgaWYgKGdpZ3lhRG9tYWluTmFtZXNwYWNlcy5pbmRleE9mKHN1YkRvbWFpbikgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5lcnJvcihgdHJ5aW5nIHRvIHNlbmQgcmVxdWVzdCB0byBhbiBpbnZhbGlkIGRvbWFpbmApO1xyXG4gICAgICAgICAgICAgICAgc3ViRG9tYWluID0gZ2lneWFEb21haW5OYW1lc3BhY2VzWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYCR7c3ViRG9tYWlufS4ke2FwaURvbWFpbn1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcGlEb21haW47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFEb21haW4obmFtZXNwYWNlPzogc3RyaW5nLCBkYXRhQ2VudGVyID0gZ2lneWEuZGF0YUNlbnRlciwgZGVmYXVsdERvbWFpbiA9IGdpZ3lhLmRlZmF1bHRBcGlEb21haW4pIHtcclxuICAgIGNvbnN0IGRvbWFpbiA9IGAke2RhdGFDZW50ZXJ9LiR7ZGVmYXVsdERvbWFpbn1gO1xyXG5cclxuICAgIGlmIChuYW1lc3BhY2UpIHJldHVybiBgJHtuYW1lc3BhY2V9LiR7ZG9tYWlufWA7XHJcbiAgICBlbHNlIHJldHVybiBkb21haW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VEb21haW4oXHJcbiAgICBiYXNlRG9tYWluczogc3RyaW5nW118c3RyaW5nID0gZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zLFxyXG4gICAgY3VycmVudERvbWFpbiA9IGxvY2F0aW9uLmhvc3RuYW1lLFxyXG4gICAgZGVmYXVsdERvbWFpbnMgPSBbJ2dpZ3lhLmNvbScsICdnaWd5YS1hcGkuY24nLCBnaWd5YS5kZWZhdWx0QXBpRG9tYWluXSxcclxuKTogc3RyaW5nIHtcclxuICAgIC8vICM0OTc4NiAtIFN1cHBvcnQgd2VidmlldyB3aXRob3V0IGhvc3RuYW1lLlxyXG4gICAgaWYgKCFjdXJyZW50RG9tYWluKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgYmFzZURvbWFpbnMgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICBiYXNlRG9tYWlucyA9IGJhc2VEb21haW5zLnNwbGl0KCcsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9yaWdpblVSSSA9IFVyaS5wYXJzZShjdXJyZW50RG9tYWluKTtcclxuXHJcbiAgICBpZiAoZGVmYXVsdERvbWFpbnMpIHtcclxuICAgICAgICBiYXNlRG9tYWlucyA9IGJhc2VEb21haW5zLmNvbmNhdChkZWZhdWx0RG9tYWlucyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHJhd0RvbWFpbiBvZiBiYXNlRG9tYWlucykge1xyXG4gICAgICAgIC8vIFRoaXMgZG9lcyBub3QgdGFrZSBjYXJlIG9mIHdpbGRjYXJkcyBpbiB0aGUgbWlkZGxlIG9mIHN0cmluZy5cclxuICAgICAgICBjb25zdCBiYXNlRG9tYWluID0gc3RyaW5nVXRpbHNVdGlscy5yZXBsYWNlQWxsKHJhd0RvbWFpbiwgJyonLCAnJyk7XHJcbiAgICAgICAgY29uc3QgYmFzZVVyaSA9IFVyaS5wYXJzZShiYXNlRG9tYWluKTtcclxuICAgICAgICBpZiAoYmFzZVVyaSAmJiBvcmlnaW5VUkkuaXNJbihiYXNlVXJpKSkge1xyXG4gICAgICAgICAgICBpZiAoYmFzZVVyaS5pc0ZvclN1YkRvbWFpbnMoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpblVSSS5kb21haW47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZVVyaS5kb21haW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmFsbGJhY2sgdG8gdGhlIHBhcmVudCdzIHdpbmRvdyBkb21haW4gKGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KS5cclxuICAgIHJldHVybiBvcmlnaW5VUkkuZG9tYWluO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXBpRG9tYWluKFxyXG4gICAgY3VzdG9tQXBpRG9tYWluUHJlZml4ID0gZ2lneWEucGFydG5lclNldHRpbmdzICYmIGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5jdXN0b21BUElEb21haW5QcmVmaXgsXHJcbiAgICBiYXNlRG9tYWluID0gbG9jYWxJbmZvLmJhc2VEb21haW4sXHJcbiAgICBkYXRhQ2VudGVyID0gZ2lneWEuZGF0YUNlbnRlcixcclxuICAgIGRlZmF1bHRBcGlEb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluLFxyXG4pIHtcclxuICAgIGlmIChjdXN0b21BcGlEb21haW5QcmVmaXggJiYgYmFzZURvbWFpbiAmJiBiYXNlRG9tYWluICE9PSBkZWZhdWx0QXBpRG9tYWluKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2N1c3RvbUFwaURvbWFpblByZWZpeH0uJHtiYXNlRG9tYWlufWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBnZXRHaWd5YURvbWFpbih1bmRlZmluZWQsIGRhdGFDZW50ZXIsIGRlZmF1bHRBcGlEb21haW4pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIERPTVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9ET00nO1xyXG5pbXBvcnQgeyBnZXRDZG5SZXNvdXJjZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9jZG4nO1xyXG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsRnVuY3Rpb24obmFtZTogc3RyaW5nLCBhclBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgIHZhciBmbiA9IGV2YWwobmFtZSk7XHJcbiAgICB2YXIgYXJQYXJ0cyA9IG5hbWUuc3BsaXQoJy4nKTtcclxuICAgIGFyUGFydHMuc3BsaWNlKGFyUGFydHMubGVuZ3RoIC0gMSwgMSk7XHJcbiAgICB2YXIgc2NvcGUgPSBldmFsKGFyUGFydHMuam9pbignLicpKTtcclxuICAgIGZuLmFwcGx5KHNjb3BlLCBhclBhcmFtcyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZU9uUGFnZUxvYWQoZnVuYzogRnVuY3Rpb24sIGNvbXBsZXRlT25seT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgICAoIWRvY3VtZW50LnJlYWR5U3RhdGUgJiYgZG9jdW1lbnQuYm9keSkgfHxcclxuICAgICAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8XHJcbiAgICAgICAgKCFjb21wbGV0ZU9ubHkgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyAmJiBkb2N1bWVudC5ib2R5KVxyXG4gICAgKSB7XHJcbiAgICAgICAgZnVuYygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgY2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZm5PbkxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBmdW5jKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmbk9uTG9hZCwgMjAwMDApOyAvLyBmYWxsYmFjayAtIHNvbWV0aW1lcyByZWFkeXN0YXRlIHN0YXlzIHN0dWNrIG9uIGludGVyYWN0aXZlXHJcblxyXG4gICAgICAgIERPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGZuT25Mb2FkKTtcclxuICAgICAgICBET01VdGlscy5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnRE9NQ29udGVudExvYWRlZCcsIGZuT25Mb2FkKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWxpYXMocHVibGljTmFtZTogc3RyaW5nLCBmbmM6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBhck5hbWVTZWdtZW50cyA9IHB1YmxpY05hbWUuc3BsaXQoJy4nKTtcclxuICAgIGxldCBvQ3VycmVudFNlZ21lbnQgPSB3aW5kb3c7XHJcbiAgICBmb3IgKGxldCBpU2VnbWVudCA9IDA7IGlTZWdtZW50IDwgYXJOYW1lU2VnbWVudHMubGVuZ3RoIC0gMTsgaVNlZ21lbnQrKykge1xyXG4gICAgICAgIGNvbnN0IHNTZWdtZW50ID0gYXJOYW1lU2VnbWVudHNbaVNlZ21lbnRdO1xyXG4gICAgICAgIGlmICghb0N1cnJlbnRTZWdtZW50W3NTZWdtZW50XSkge1xyXG4gICAgICAgICAgICBvQ3VycmVudFNlZ21lbnRbc1NlZ21lbnRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9DdXJyZW50U2VnbWVudCA9IG9DdXJyZW50U2VnbWVudFtzU2VnbWVudF07XHJcbiAgICB9XHJcbiAgICBvQ3VycmVudFNlZ21lbnRbYXJOYW1lU2VnbWVudHNbYXJOYW1lU2VnbWVudHMubGVuZ3RoIC0gMV1dID0gZm5jO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmbjogKCkgPT4gdm9pZCwgZGVsYXlNaWxsaXNlY29uZHM6IG51bWJlcik6ICgpID0+IHZvaWQge1xyXG4gICAgbGV0IHRpbWVyOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRpbWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZuKCk7XHJcbiAgICAgICAgfSwgZGVsYXlNaWxsaXNlY29uZHMpIGFzIGFueTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNyY1RvSUZyYW1lSWZOZWVkZWQoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCwgc3JjOiBzdHJpbmcgPSBnZXRDZG5SZXNvdXJjZSgnLycpKSB7XHJcbiAgICBpZiAobG9jYWxJbmZvLmlzSU9TV2ViVmlldyB8fCAobG9jYWxJbmZvLmlzSU9TICYmIGxvY2FsSW5mby5pc1dlQ2hhdCkpIHtcclxuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFVSTFV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VUkwnO1xyXG5pbXBvcnQgKiBhcyBKU09OVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL0pTT04nO1xyXG5kZWNsYXJlIGZ1bmN0aW9uIHVuZXNjYXBlKGVzY2FwZWRTdHI6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUob0tleVZhbHVlOiBPYmplY3QsIGRlbGltaXRlcj86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBhID0gW107XHJcbiAgICBpZiAoIWRlbGltaXRlcikge1xyXG4gICAgICAgIGRlbGltaXRlciA9ICcmJztcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcCBpbiBvS2V5VmFsdWUpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBvS2V5VmFsdWVbcF0pIHtcclxuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxyXG4gICAgICAgICAgICAgICAgaWYgKG9LZXlWYWx1ZVtwXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHAgKyAnPScgKyBVUkxVdGlscy5VUkxFbmNvZGUoSlNPTlV0aWxzLnNlcmlhbGl6ZShvS2V5VmFsdWVbcF0pKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBhLnB1c2gocCArICc9JyArIFVSTFV0aWxzLlVSTEVuY29kZShvS2V5VmFsdWVbcF0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzID0gYS5qb2luKGRlbGltaXRlcik7XHJcbiAgICByZXR1cm4gcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemUodXJsRW5jb2RlZFN0cmluZzogc3RyaW5nLCBkZWxpbWl0ZXI/OiBzdHJpbmcsIGtleXNUb0xvd2VyPzogYm9vbGVhbiwgdXNlVW5lc2NhcGU/OiBib29sZWFuKTogYW55IHtcclxuICAgIGNvbnN0IG8gPSB7fTtcclxuICAgIGlmICghdXJsRW5jb2RlZFN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkZWxpbWl0ZXIpIHtcclxuICAgICAgICBkZWxpbWl0ZXIgPSAnJic7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYWlycyA9IHVybEVuY29kZWRTdHJpbmcuc3BsaXQoZGVsaW1pdGVyKTtcclxuICAgIGZvciAobGV0IGlQYWlyID0gMDsgaVBhaXIgPCBwYWlycy5sZW5ndGg7IGlQYWlyKyspIHtcclxuICAgICAgICBjb25zdCBwYWlyID0gcGFpcnNbaVBhaXJdO1xyXG4gICAgICAgIGNvbnN0IGVxUG9zID0gcGFpci5pbmRleE9mKCc9Jyk7XHJcbiAgICAgICAgaWYgKGVxUG9zID09PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzVG9Mb3dlciA/IHBhaXIudG9Mb3dlckNhc2UoKSA6IHBhaXI7XHJcbiAgICAgICAgICAgIG9ba2V5XSA9ICcxJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gcGFpci5zdWJzdHIoMCwgZXFQb3MpO1xyXG4gICAgICAgICAgICBpZiAoa2V5c1RvTG93ZXIpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRWYWx1ZSA9IHBhaXIuc3Vic3RyKGVxUG9zICsgMSkucmVwbGFjZSgvXFwrL2csICcgJyk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBvW2tleV0gPSB1c2VVbmVzY2FwZSA/IHVuZXNjYXBlKHNlcmlhbGl6ZWRWYWx1ZSkgOiBVUkxVdGlscy5VUkxEZWNvZGUoc2VyaWFsaXplZFZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIG9ba2V5XSA9IHVuZXNjYXBlKHNlcmlhbGl6ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbztcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBKU09OVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL0pTT04nO1xyXG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuaW1wb3J0ICogYXMgc2NyaXB0VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3NjcmlwdCc7XHJcbmltcG9ydCAqIGFzIGNvb2tpZVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9jb29raWUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdBYnN0cmFjdEFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRJdGVtKGtleTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyLCBkb21haW4/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCByZW1vdmVJdGVtKGtleTogc3RyaW5nKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBvYmplY3QgdG8gc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldE9iamVjdChrZXk6IHN0cmluZywgbzogT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKGtleSwgSlNPTlV0aWxzLnNlcmlhbGl6ZShvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgb2JqZWN0IGZyb20gbG9jYWwgc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE9iamVjdChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogT2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gSlNPTlV0aWxzLmRlc2VyaWFsaXplKHRoaXMuZ2V0SXRlbShrZXkpLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgcGVyc2lzdGVudCBzdG9yYWdlLiBSZXR1cm5zIGZhbHNlIHdoZW4gZGF0YSBpcyBub3QgcGVyc2lzdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNQZXJzaXN0ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFzeW5jTG9jYWxTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgaXNMb2FkZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzUmVhZHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNMb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIHdoZW4gdGhlcmUgaXMgaW5pdGlhbGl6YXRpb24gdGltZSBvbiB0aGUgbG9jYWwgc3RvcmFnZSBhZGFwdGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2FpdEZvclNlcnZpY2UoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy53YWl0Rm9yU2VydmljZShjYWxsYmFjayksIDUwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuYWJzdHJhY3QgY2xhc3MgU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgcHJvdGVjdGVkIHN0b3JhZ2U6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7fVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBMb2NhbFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0xvY2FsU3RvcmFnZUFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5mby5zdXBwb3J0c0xvY2FsU3RvcmFnZTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdTZXNzaW9uU3RvcmFnZUFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5mby5zdXBwb3J0c1Nlc3Npb25TdG9yYWdlO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEZpcmVmb3hTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhbEluZm8uaXNGRiAmJiB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdGaXJlZm94U3RvcmFnZUFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2xvYmFsU3RvcmFnZSddW2xvY2F0aW9uLmhvc3RuYW1lXVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBkZWxldGUgd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV07XHJcbiAgICB9XHJcbn1cclxuZGVjbGFyZSBjbGFzcyBTd2ZTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiBhbnkpO1xyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IHN0cmluZztcclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcHVibGljIGNsZWFyKGtleTogc3RyaW5nKTogdm9pZDtcclxufVxyXG5jbGFzcyBGbGFzaEFzeW5jU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdEFzeW5jTG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIGN1cnJlbnQgc2NlbmFyaW8gd2hlcmUgdXNpbmcgRmxhc2ggU3RvcmFnZSBpcyBoZWxwZnVsIG91dHNpZGUgb2YgSUUuXHJcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5mby5zdXBwb3J0c0ZsYXNoICYmIChsb2NhbEluZm8uaXNJRSB8fCBsb2NhbEluZm8uaXNFZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3dmU3RvcmU6IFN3ZlN0b3JlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vIExvYWQgU1dGIHN0b3JlIGxpYnJhcnkuXHJcbiAgICAgICAgdGhpcy5sb2FkU3dmU3RvcmUoaXNTdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAnRmxhc2hBc3luY1N0b3JhZ2VBZGFwdGVyJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpcnN0LCBsb2FkIHRoZSBKYXZhU2NyaXB0IHN3ZnN0b3JlIFNESy5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRTd2ZTdG9yZShjYWxsYmFjazogKGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIC8vIExvYWQgU3dmU3RvcmUgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICAgIGlmICh3aW5kb3dbJ1N3ZlN0b3JlJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplU3dmU3RvcmUoKCkgPT4gdGhpcy5sb2FkU3dmU3RvcmUoY2FsbGJhY2spKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2NyaXB0VXRpbHMubG9hZChcclxuICAgICAgICAgICAgJ2h0dHBzOi8vY2Rucy5naWd5YS5jb20vZ3MvanMvc3dmc3RvcmUubWluLmpzJyxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3IgaGFuZGxlci5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gbG9hZCBHaWd5YSBTd2ZTdG9yZS4nKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU3VjY2VzcyBoYW5kbGVyLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplU3dmU3RvcmUoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLCAvLyBMb2FkIG9ubHkgb25jZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmlpdGFsaXplIHRoZSBTd2ZTdG9yZSBjbGFzcy5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpemVTd2ZTdG9yZShjYWxsYmFjazogKGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3dmU3RvcmUgPSBuZXcgU3dmU3RvcmUoe1xyXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdnaWdTU08nLFxyXG4gICAgICAgICAgICBzd2ZfdXJsOiAnaHR0cHM6Ly9jZG5zLmdpZ3lhLmNvbS9ncy9zd2Yvc3dmc3RvcmUuc3dmJyxcclxuICAgICAgICAgICAgb25yZWFkeTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25lcnJvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGluaXRpYWxpemUgR2lneWEgU3dmU3RvcmUuJyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN3ZlN0b3JlLmdldChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN3ZlN0b3JlLnNldChrZXksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3dmU3RvcmUuY2xlYXIoa2V5KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ29va2llU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY29va2llVXRpbHMuY2FuU2F2ZUNvb2tpZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0Nvb2tpZVN0b3JhZ2VBZGFwdGVyJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVV0aWxzLmdldChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIsIGRvbWFpbj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvb2tpZVV0aWxzLnNldChrZXksIHZhbHVlLCBleHBpcmVzSW4sIGRvbWFpbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb29raWVVdGlscy5yZW1vdmUoa2V5KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbWVtb3J5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tZW1vcnkgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdNZW1vcnlTdG9yYWdlQWRhcHRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lbW9yeVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lbW9yeVtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5tZW1vcnlba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIHBlcnNpc3RlbnQgc3RvcmFnZS4gUmV0dXJucyBmYWxzZSB3aGVuIGRhdGEgaXMgbm90IHBlcnNpc3RlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzUGVyc2lzdGVudCgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGFkYXB0ZXJzOiBBcnJheTxhbnk+ID0gW1xyXG4gICAgTG9jYWxTdG9yYWdlQWRhcHRlcixcclxuICAgIFNlc3Npb25TdG9yYWdlQWRhcHRlcixcclxuICAgIEZpcmVmb3hTdG9yYWdlQWRhcHRlcixcclxuICAgIEZsYXNoQXN5bmNTdG9yYWdlQWRhcHRlcixcclxuICAgIENvb2tpZVN0b3JhZ2VBZGFwdGVyLFxyXG4gICAgTWVtb3J5U3RvcmFnZUFkYXB0ZXIsXHJcbl07XHJcbmV4cG9ydCBjb25zdCBpbnN0YW5jZXM6IHsgW2tleTogc3RyaW5nXTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIH0gPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBZGFwdGVyKGFkYXB0ZXI6IHsgbmFtZT86IHN0cmluZzsgZ2V0TmFtZTogKCkgPT4gc3RyaW5nIH0gJiAobmV3ICgpID0+IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcikpIHtcclxuICAgIGNvbnN0IGFkYXB0ZXJOYW1lID0gYWRhcHRlci5nZXROYW1lKCkgfHwgYWRhcHRlci5uYW1lO1xyXG4gICAgaWYgKCFpbnN0YW5jZXNbYWRhcHRlck5hbWVdKSB7XHJcbiAgICAgICAgaW5zdGFuY2VzW2FkYXB0ZXJOYW1lXSA9IG5ldyBhZGFwdGVyKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5zdGFuY2VzW2FkYXB0ZXJOYW1lXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoKTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xyXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoY2FsbGJhY2s6IChzdG9yYWdlOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIpID0+IHZvaWQpOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XHJcbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yU2VydmljZShjYWxsYmFjaz86IChzdG9yYWdlOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIpID0+IHZvaWQpOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgLy8gU2VsZWN0IGNvbXBhdGlibGUgYWRhcHRlci5cclxuICAgIGxldCBzdG9yYWdlOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XHJcbiAgICBmb3IgKGNvbnN0IGFkYXB0ZXIgb2YgYWRhcHRlcnMpIHtcclxuICAgICAgICBpZiAoYWRhcHRlci5pc0F2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgICAgIC8vIERvbid0IHNlbGVjdCBhZGFwdGVyIGlmIGl0J3MgYXN5bmMgYW5kIGEgY2FsbGJhY2sgd2Fzbid0IHByb3ZpZGVkLlxyXG4gICAgICAgICAgICBpZiAoYWRhcHRlci5wcm90b3R5cGUgaW5zdGFuY2VvZiBBYnN0cmFjdEFzeW5jTG9jYWxTdG9yYWdlQWRhcHRlciAmJiAhY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdG9yYWdlID0gaW5pdGlhbGl6ZUFkYXB0ZXIoYWRhcHRlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxsYmFjayB0byBtZW1vcnktYmFzZWQgbm9uLXBlcnNpc3RlbnQgc3RvcmFnZS5cclxuICAgIGlmICghc3RvcmFnZSkge1xyXG4gICAgICAgIHN0b3JhZ2UgPSBpbml0aWFsaXplQWRhcHRlcihNZW1vcnlTdG9yYWdlQWRhcHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJpZ2dlciBjYWxsYmFjayB3aGVuIGFkYXB0ZXIgZmluaXNoZXMgbG9hZGluZyAob3IgaW5zdGFudGx5LCBpZiBub3QgcmVxdWlyZWQgdG8gd2FpdCkuXHJcbiAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoc3RvcmFnZSBpbnN0YW5jZW9mIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyKSB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2Uud2FpdEZvclNlcnZpY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc3RvcmFnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHN0b3JhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdG9yYWdlO1xyXG59XHJcbmNvbnN0IGFkYXB0ZXIgPSB3YWl0Rm9yU2VydmljZSgpO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYWRhcHRlci5nZXRJdGVtKGtleSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFkYXB0ZXIuc2V0SXRlbShrZXksIHZhbHVlLCBleHBpcmVzSW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICByZXR1cm4gYWRhcHRlci5yZW1vdmVJdGVtKGtleSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9iamVjdChrZXk6IHN0cmluZywgbzogT2JqZWN0KTogdm9pZCB7XHJcbiAgICByZXR1cm4gYWRhcHRlci5zZXRPYmplY3Qoa2V5LCBvKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBPYmplY3Qge1xyXG4gICAgcmV0dXJuIGFkYXB0ZXIuZ2V0T2JqZWN0KGtleSwgZGVmYXVsdFZhbHVlKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBKU09OVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL0pTT04nO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkKG86IE9iamVjdCk6IE9iamVjdCB7XHJcbiAgICB2YXIgbzIgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gbykge1xyXG4gICAgICAgIGlmIChvW3BdICE9IG51bGwgJiYgb1twXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbzJbcF0gPSBvW3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvMjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkhlbHBlcihjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCB7fTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0RmllbGQ6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgaWYgKCFwYXRoKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB2YXIgcGF0aHMgPSBwYXRoLnNwbGl0KCcuJyksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY29udGV4dCxcclxuICAgICAgICAgICAgICAgIGk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50W3BhdGhzW2ldXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5QnlTZXJpYWxpemVkTmFtZShvOiBPYmplY3QsIG5hbWU6IHN0cmluZywgY3JlYXRlTWlzc2luZ09iamVjdHM6IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgaWYgKCFuYW1lKSByZXR1cm4gbztcclxuICAgIHZhciBvUmVzdWx0ID0gbztcclxuICAgIHZhciBhck5hbWVTZWdtZW50cyA9IG5hbWUuc3BsaXQoJy4nKTtcclxuICAgIGZvciAodmFyIGlTZWdtZW50ID0gMDsgaVNlZ21lbnQgPCBhck5hbWVTZWdtZW50cy5sZW5ndGg7IGlTZWdtZW50KyspIHtcclxuICAgICAgICB2YXIgc1NlZ21lbnQgPSBhck5hbWVTZWdtZW50c1tpU2VnbWVudF07XHJcbiAgICAgICAgdmFyIHNJbmRleCA9IG51bGw7XHJcbiAgICAgICAgLy9TdXBwb3J0IGZvciBhcnJheSBhY2Nlc3MuIGkuZS4gXCJvYmoucHJvcDFbMF0ucHJvcDJcIlxyXG4gICAgICAgIGlmIChzU2VnbWVudC5tYXRjaCgvXFxbWzAtOV1dLykpIHtcclxuICAgICAgICAgICAgc0luZGV4ID0gTnVtYmVyKHNTZWdtZW50Lm1hdGNoKC9cXFtbMC05XV0vKVswXS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzU2VnbWVudCA9IHNTZWdtZW50LnNwbGl0KC9cXFtbMC05XV0vKS5qb2luKCcnKTtcclxuICAgICAgICB2YXIgcmVzID0gKHNJbmRleCB8fCBzSW5kZXggPT09IDApICYmIG9SZXN1bHRbc1NlZ21lbnRdID8gb1Jlc3VsdFtzU2VnbWVudF1bc0luZGV4XSA6IG9SZXN1bHRbc1NlZ21lbnRdO1xyXG4gICAgICAgIGlmIChjcmVhdGVNaXNzaW5nT2JqZWN0cyAmJiAhb1Jlc3VsdFtzU2VnbWVudF0pIHtcclxuICAgICAgICAgICAgb1Jlc3VsdFtzU2VnbWVudF0gPSB7fTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNyZWF0ZU1pc3NpbmdPYmplY3RzICYmICFyZXMgJiYgcmVzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBvUmVzdWx0W3NTZWdtZW50XSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzIHx8IHJlcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgb1Jlc3VsdCA9IHJlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb1Jlc3VsdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHlCeVNlcmlhbGl6ZWROYW1lKG86IE9iamVjdCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB2YXIgYXJOYW1lU2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICB2YXIgcHJvcGVydHlOYW1lID0gYXJOYW1lU2VnbWVudHMucG9wKCk7XHJcbiAgICBnZXRQcm9wZXJ0eUJ5U2VyaWFsaXplZE5hbWUobywgYXJOYW1lU2VnbWVudHMuam9pbignLicpLCB0cnVlKVtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvVGFyZ2V0OiBPYmplY3QsIG86IE9iamVjdCwgZG9udE92ZXJyaWRlPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgZm9yICh2YXIgcCBpbiBvKSB7XHJcbiAgICAgICAgaWYgKCFkb250T3ZlcnJpZGUgfHwgdHlwZW9mIG9UYXJnZXRbcF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIG9UYXJnZXRbcF0gPSBvW3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGFzaChvOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgdmFyIGFyID0gW107XHJcbiAgICBmb3IgKHZhciBwIGluIG8pIHtcclxuICAgICAgICB2YXIgcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvW3BdID09ICdvYmplY3QnKSBzID0gSlNPTlV0aWxzLnNlcmlhbGl6ZShvW3BdLCBmYWxzZSk7XHJcbiAgICAgICAgZWxzZSBpZiAob1twXSkgcyA9IG9bcF0udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgYXIucHVzaChwICsgJz0nICsgcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXIuc29ydCgpLmpvaW4oJyYnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TXVybXVySGFzaChrZXk6IHN0cmluZywgc2VlZD86IG51bWJlcikge1xyXG4gICAgaWYgKCFzZWVkKSBzZWVkID0gMDtcclxuICAgIHZhciByZW1haW5kZXIsIGJ5dGVzLCBoMSwgaDFiLCBjMSwgYzFiLCBjMiwgYzJiLCBrMSwgaTtcclxuXHJcbiAgICByZW1haW5kZXIgPSBrZXkubGVuZ3RoICYgMzsgLy8ga2V5Lmxlbmd0aCAlIDRcclxuICAgIGJ5dGVzID0ga2V5Lmxlbmd0aCAtIHJlbWFpbmRlcjtcclxuICAgIGgxID0gc2VlZDtcclxuICAgIGMxID0gMHhjYzllMmQ1MTtcclxuICAgIGMyID0gMHgxYjg3MzU5MztcclxuICAgIGkgPSAwO1xyXG5cclxuICAgIHdoaWxlIChpIDwgYnl0ZXMpIHtcclxuICAgICAgICBrMSA9IChrZXkuY2hhckNvZGVBdChpKSAmIDB4ZmYpIHwgKChrZXkuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCkgfCAoKGtleS5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNikgfCAoKGtleS5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNCk7XHJcbiAgICAgICAgKytpO1xyXG5cclxuICAgICAgICBrMSA9ICgoazEgJiAweGZmZmYpICogYzEgKyAoKCgoazEgPj4+IDE2KSAqIGMxKSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgazEgPSAoazEgPDwgMTUpIHwgKGsxID4+PiAxNyk7XHJcbiAgICAgICAgazEgPSAoKGsxICYgMHhmZmZmKSAqIGMyICsgKCgoKGsxID4+PiAxNikgKiBjMikgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xyXG5cclxuICAgICAgICBoMSBePSBrMTtcclxuICAgICAgICBoMSA9IChoMSA8PCAxMykgfCAoaDEgPj4+IDE5KTtcclxuICAgICAgICBoMWIgPSAoKGgxICYgMHhmZmZmKSAqIDUgKyAoKCgoaDEgPj4+IDE2KSAqIDUpICYgMHhmZmZmKSA8PCAxNikpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICBoMSA9IChoMWIgJiAweGZmZmYpICsgMHg2YjY0ICsgKCgoKGgxYiA+Pj4gMTYpICsgMHhlNjU0KSAmIDB4ZmZmZikgPDwgMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIGsxID0gMDtcclxuXHJcbiAgICBzd2l0Y2ggKHJlbWFpbmRlcikge1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgazEgXj0gKGtleS5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgazEgXj0gKGtleS5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBrMSBePSBrZXkuY2hhckNvZGVBdChpKSAmIDB4ZmY7XHJcblxyXG4gICAgICAgICAgICBrMSA9ICgoazEgJiAweGZmZmYpICogYzEgKyAoKCgoazEgPj4+IDE2KSAqIGMxKSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgICAgIGsxID0gKGsxIDw8IDE1KSB8IChrMSA+Pj4gMTcpO1xyXG4gICAgICAgICAgICBrMSA9ICgoazEgJiAweGZmZmYpICogYzIgKyAoKCgoazEgPj4+IDE2KSAqIGMyKSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgICAgIGgxIF49IGsxO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIF49IGtleS5sZW5ndGg7XHJcblxyXG4gICAgaDEgXj0gaDEgPj4+IDE2O1xyXG4gICAgaDEgPSAoKGgxICYgMHhmZmZmKSAqIDB4ODVlYmNhNmIgKyAoKCgoaDEgPj4+IDE2KSAqIDB4ODVlYmNhNmIpICYgMHhmZmZmKSA8PCAxNikpICYgMHhmZmZmZmZmZjtcclxuICAgIGgxIF49IGgxID4+PiAxMztcclxuICAgIGgxID0gKChoMSAmIDB4ZmZmZikgKiAweGMyYjJhZTM1ICsgKCgoKGgxID4+PiAxNikgKiAweGMyYjJhZTM1KSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICBoMSBePSBoMSA+Pj4gMTY7XHJcblxyXG4gICAgcmV0dXJuIGgxID4+PiAwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmo6IGFueSwgZGVlcENvcHk/OiBib29sZWFuLCBpZ25vcmVGdW5jdGlvbnM/OiBib29sZWFuLCBtYXhMZXZlbDogbnVtYmVyID0gMjAsIGxldmVsOiBudW1iZXIgPSAwLCBpZ25vcmVDb250ZXh0PzogYm9vbGVhbik6IGFueSB7XHJcbiAgICBpZiAobGV2ZWwgPiBtYXhMZXZlbCkgcmV0dXJuIG51bGw7IC8vIFRvbyBkZWVwXHJcbiAgICBpZiAodHlwZW9mIG9iaiA9PSAndW5kZWZpbmVkJyB8fCBvYmogPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgJiYgaWdub3JlRnVuY3Rpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xyXG4gICAgICAgIHZhciBhciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghaWdub3JlRnVuY3Rpb25zIHx8IHR5cGVvZiBvYmpbaV0gIT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZXBDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJbaV0gPSBjbG9uZShvYmpbaV0sIGRlZXBDb3B5LCBpZ25vcmVGdW5jdGlvbnMsIG1heExldmVsLCBsZXZlbCArIDEsIGlnbm9yZUNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhcltpXSA9IG9ialtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXI7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT0gJ29iamVjdCcpIHtcclxuICAgICAgICB2YXIgbyA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChpZ25vcmVDb250ZXh0ICYmIHAgPT0gJ2NvbnRleHQnKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKCFpZ25vcmVGdW5jdGlvbnMgfHwgdHlwZW9mIG9ialtwXSAhPSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVlcENvcHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvW3BdID0gY2xvbmUob2JqW3BdLCBkZWVwQ29weSwgaWdub3JlRnVuY3Rpb25zLCBtYXhMZXZlbCwgbGV2ZWwgKyAxLCBpZ25vcmVDb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb1twXSA9IG9ialtwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJnczogT2JqZWN0W10sIGlzRGVlcE1lcmdlPzogYm9vbGVhbik6IE9iamVjdDtcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFyZ3M6IGFueVtdLCBpc0RlZXBNZXJnZT86IGJvb2xlYW4pOiBPYmplY3Qge1xyXG4gICAgdmFyIG8gPSB7fTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhcmdzW2ldICYmIGFyZ3NbaV0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJnc1tpXS5sZW5ndGg7IHUrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBhcmdzW2ldW3VdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb1twXSA9IGFyZ3NbaV1bdV1bcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBNZXJnZSBvYmplY3RzLlxyXG4gICAgICAgICAgICBpZiAoIWlzRGVlcE1lcmdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGbGF0IG1lcmdlLlxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBhcmdzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb1twXSA9IGFyZ3NbaV1bcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEZWVwIG1lcmdlLlxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBhcmdzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy93ZSBvdmVycmlkZSBwcmltaXRpdmUgLyBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb1twXSAhPT0gJ29iamVjdCcgfHwgb1twXSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9bcF0gPSBhcmdzW2ldW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9bcF0gPSBtZXJnZShbb1twXSwgYXJnc1tpXVtwXV0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1bmZsYXR0ZW4oZGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IE9iamVjdCB7XHJcbiAgICBpZiAoT2JqZWN0KGRhdGEpICE9PSBkYXRhIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgZm9yIChsZXQgcCBpbiBkYXRhKSB7XHJcbiAgICAgICAgbGV0IGN1ciA9IHJlc3VsdDtcclxuICAgICAgICBsZXQgcHJvcCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gcC5zcGxpdCgnLicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gIWlzTmFOKE51bWJlcihwYXJ0c1tpXSkpO1xyXG4gICAgICAgICAgICBjdXIgPSBjdXJbcHJvcF0gfHwgKGN1cltwcm9wXSA9IGlkeCA/IFtdIDoge30pO1xyXG4gICAgICAgICAgICBwcm9wID0gcGFydHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cltwcm9wXSA9IGRhdGFbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0WycnXSB8fCB7fTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihkYXRhOiBhbnksIHdpdGhCcmFja2V0ID0gZmFsc2UpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgZnVuY3Rpb24gcmVjdXJzZShjdXI6IGFueSwgcHJvcDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdChjdXIpICE9PSBjdXIpIHtcclxuICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gY3VyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGwgPSBjdXIubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5lc3RlZFByb3BlcnR5ID0gd2l0aEJyYWNrZXQgPyBgJHtwcm9wfVske2l9XWAgOiBgJHtwcm9wfS4ke2l9YDtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2UoY3VyW2ldLCBwcm9wID8gbmVzdGVkUHJvcGVydHkgOiBTdHJpbmcoaSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbcHJvcF0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpc0VtcHR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwIGluIGN1cikge1xyXG4gICAgICAgICAgICAgICAgaXNFbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmVjdXJzZShjdXJbcF0sIHByb3AgPyBgJHtwcm9wfS4ke3B9YCA6IHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5ICYmIHByb3AgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbcHJvcF0gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlY3Vyc2UoZGF0YSwgJycpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFByb3BlcnRpZXMoc3JjOiBhbnksIGRlc3Q/OiBhbnksIHNjaGVtYT86IFN0cmluZyk6IE9iamVjdCB7XHJcbiAgICBpZiAoc3JjID09IG51bGwpIHJldHVybjtcclxuICAgIGlmIChkZXN0ID09IG51bGwpIGRlc3QgPSB7fTtcclxuICAgIGlmIChzcmMuY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcclxuICAgICAgICBmb3IgKHZhciBpU3JjID0gMDsgaVNyYyA8IHNyYy5sZW5ndGg7IGlTcmMrKykge1xyXG4gICAgICAgICAgICBleHRyYWN0UHJvcGVydGllcyhzcmNbaVNyY10sIGRlc3QsIHNjaGVtYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzY2hlbWEpIHtcclxuICAgICAgICB2YXIgYXJTY2hlbWEgPSBzY2hlbWEuc3BsaXQoJ3wnKTtcclxuICAgICAgICB2YXIgc3JjTENhc2UgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBmaWVsZE5hbWUgaW4gc3JjKSB7XHJcbiAgICAgICAgICAgIHNyY0xDYXNlW2ZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpXSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJTY2hlbWEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGZpZWxkTmFtZTIgPSBhclNjaGVtYVtpXTtcclxuICAgICAgICAgICAgaWYgKHNyY0xDYXNlW2ZpZWxkTmFtZTIudG9Mb3dlckNhc2UoKV0pIGRlc3RbZmllbGROYW1lMl0gPSBzcmNbZmllbGROYW1lMl07XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkZXN0ID0gY2xvbmUoc3JjLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFByb3BlcnR5KHNyYzogYW55LCBwYXJhbU5hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICB2YXIgcGFyYW1zO1xyXG4gICAgcmV0dXJuIGV4dHJhY3RQcm9wZXJ0aWVzKHNyYywgcGFyYW1zLCBwYXJhbU5hbWUpW3BhcmFtTmFtZV07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVG9PYmplY3Qoc3RyOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkVmFsID0gd2luZG93WydKU09OJ10ucGFyc2Uoc3RyKTtcclxuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZFZhbCA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVmFsO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG4iLCJpbXBvcnQgeyBVcmkgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVXJpJztcclxuaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcbmltcG9ydCAqIGFzIGFycmF5VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2FycmF5JztcclxuaW1wb3J0ICogYXMgZnVuY3Rpb25zVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIERPTVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9ET00nO1xyXG5pbXBvcnQgeyBnZXRDZG5SZXNvdXJjZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9jZG4nO1xyXG5cclxuaW50ZXJmYWNlIElTY3JpcHRQZW5kaW5nIHtcclxuICAgIGxvYWRlZDogYm9vbGVhbjtcclxuICAgIG9uTG9hZDogRnVuY3Rpb25bXTtcclxuICAgIG9uRXJyb3I6IEZ1bmN0aW9uW107XHJcbn1cclxudmFyIHBlbmRpbmc6IHsgW3NyYzogc3RyaW5nXTogSVNjcmlwdFBlbmRpbmcgfSA9IHt9O1xyXG5mdW5jdGlvbiBhZGRTZGtWZXJzaW9uKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCBzY3JpcHRVcmwgPSBVcmkucGFyc2UodXJsKTtcclxuICAgIHNjcmlwdFVybC5hZGRUb1NlYXJjaCh7IHZlcnNpb246IGdpZ3lhLmJ1aWxkLnZlcnNpb24gfSk7XHJcbiAgICByZXR1cm4gc2NyaXB0VXJsLnRvU3RyaW5nKCk7XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0U3JjVXJsKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIHJlbW92ZSBjZG4gZG9tYWluIG51bWJlclxyXG4gICAgcmV0dXJuIHNyYy5yZXBsYWNlKC9eaHR0cChzPyk6XFwvXFwvY2RuKHM/KVswLTldKi5naWd5YS5jb21cXC8vLCAnaHR0cCQxOi8vY2RuJDIuZ2lneWEuY29tLycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRlZChzcmM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgdmFyIHBlbmRpbmdTcmMgPSBmb3JtYXRTcmNVcmwoc3JjKTtcclxuXHJcbiAgICByZXR1cm4gQm9vbGVhbihwZW5kaW5nW3BlbmRpbmdTcmNdICYmIHBlbmRpbmdbcGVuZGluZ1NyY10ubG9hZGVkKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZChcclxuICAgIHNyYzogc3RyaW5nLFxyXG4gICAgZm5PbkVycm9yPzogKCkgPT4gdm9pZCxcclxuICAgIGZuT25Mb2FkPzogKCkgPT4gdm9pZCxcclxuICAgIGxvYWRPbmNlPzogYm9vbGVhbixcclxuICAgIHJlbW92ZUFmdGVyOiBudW1iZXIgfCBib29sZWFuID0gNTAwMCxcclxuICAgIHRyZWF0VG9nZXRoZXI/OiBzdHJpbmdbXSxcclxuKTogdm9pZCB7XHJcbiAgICB2YXIgb1NjcmlwdDogSVNjcmlwdFBlbmRpbmc7XHJcblxyXG4gICAgaWYgKHNyYy5pbmRleE9mKCcvLycpID09PSAwKSB7XHJcbiAgICAgICAgc3JjID0gbG9jYWxJbmZvLnByb3RvY29sICsgJzonICsgc3JjO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2FkT25jZSkge1xyXG4gICAgICAgIHZhciBwZW5kaW5nU3JjID0gZm9ybWF0U3JjVXJsKHNyYyk7XHJcblxyXG4gICAgICAgIGlmIChwZW5kaW5nW3BlbmRpbmdTcmNdKSB7XHJcbiAgICAgICAgICAgIGlmIChwZW5kaW5nW3BlbmRpbmdTcmNdLmxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmRlYnVnKGBzY3JpcHQgd2FzIGFscmVhZHkgbG9hZGVkOmAsIHsgc3JjIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZuT25Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm5PbkxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmdbcGVuZGluZ1NyY10ub25Mb2FkLnB1c2goZm5PbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ1twZW5kaW5nU3JjXS5vbkVycm9yLnB1c2goZm5PbkVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvU2NyaXB0ID0gcGVuZGluZ1twZW5kaW5nU3JjXSA9IHsgbG9hZGVkOiBmYWxzZSwgb25Mb2FkOiBbZm5PbkxvYWRdLCBvbkVycm9yOiBbZm5PbkVycm9yXSB9O1xyXG5cclxuICAgICAgICBpZiAodHJlYXRUb2dldGhlciAmJiB0cmVhdFRvZ2V0aGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXJyYXlVdGlscy5mb3JFYWNoKHRyZWF0VG9nZXRoZXIsIHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nW3VybF0gPSBvU2NyaXB0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG11bHRpcGxlIGxvYWRzXHJcbiAgICAgICAgb1NjcmlwdCA9IHsgbG9hZGVkOiBmYWxzZSwgb25Mb2FkOiBbZm5PbkxvYWRdLCBvbkVycm9yOiBbZm5PbkVycm9yXSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzY3JpcHRMb2FkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICAgIHNjcmlwdC5jaGFyc2V0ID0gJ1VURi04JztcclxuXHJcbiAgICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZm5PblNjcmlwdExvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9TY3JpcHQub25Mb2FkICYmIG9TY3JpcHQub25Mb2FkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb1NjcmlwdC5vbkxvYWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvU2NyaXB0Lm9uTG9hZFtpXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb1NjcmlwdC5vbkxvYWRbaV0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvU2NyaXB0LmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvU2NyaXB0Lm9uRXJyb3IgPSBvU2NyaXB0Lm9uTG9hZCA9IG51bGw7IC8vIHJlbW92ZSBtZW1vcnkgbGVha1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVBZnRlciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFmdGVyID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVBZnRlciAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcmlwdC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVtb3ZlQWZ0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzY3JpcHQub25sb2FkID0gZm5PblNjcmlwdExvYWQ7XHJcbiAgICAgICAgc2NyaXB0WydvbnJlYWR5c3RhdGVjaGFuZ2UnXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSAnbG9hZGVkJykge1xyXG4gICAgICAgICAgICAgICAgZm5PblNjcmlwdExvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb1NjcmlwdC5vbkVycm9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9TY3JpcHQub25FcnJvcltpXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9TY3JpcHQub25FcnJvcltpXSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwZW5kaW5nW3NyY107XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpO1xyXG4gICAgICAgIGlmIChoZWFkICYmIGhlYWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBoZWFkWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmblNldFNjcmlwdFNyYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2ViU2RrUmVzb3VyY2VzRG9tYWluID0gbmV3IFJlZ0V4cChgXmh0dHBzPzpcXC9cXC9jZG5zPy4qJHtnaWd5YS5kZWZhdWx0QXBpRG9tYWlufWApO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JpcHRTcmMgPSB3ZWJTZGtSZXNvdXJjZXNEb21haW4udGVzdChzcmMpID8gYWRkU2RrVmVyc2lvbihzcmMpIDogc3JjO1xyXG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gc2NyaXB0U3JjO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGxvY2FsSW5mby5pb3NWZXJzaW9uID49IDYpIHtcclxuICAgICAgICAgICAgLy8gaU9TIDYgYnJlYWtzIHNldFRpbWVvdXQgd2hlbiBhbmltYXRpb24gaXMgYWN0aXZlIChzd2l0Y2hpbmcgdGFicyBiYWNrIGZyb20gYSBsb2dpbiBzZXF1ZW5jZSlcclxuICAgICAgICAgICAgZm5TZXRTY3JpcHRTcmMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZuU2V0U2NyaXB0U3JjLCAxKTsgLy8gRG9pbmcgdGhpcyBhc3luYyBnaXZlcyBiZXR0ZXIgcGVyZm9ybWFuY2UgaW4gb2xkZXIgYnJvd3NlcnNcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbEluZm8uaXNJRSkge1xyXG4gICAgICAgIGZ1bmN0aW9uc1V0aWxzLmludm9rZU9uUGFnZUxvYWQoc2NyaXB0TG9hZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2NyaXB0TG9hZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGVudW0gUmVzb3VyY2VUeXBlcyB7XHJcbiAgICBzY3JpcHQsXHJcbiAgICBpbWFnZSxcclxuICAgIGlmcmFtZSxcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlclJlc291cmNlKHVybDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQsIHJlc291cmNlVHlwZSA9IFJlc291cmNlVHlwZXMuaW1hZ2UsIHJlbW92ZUFmdGVyOiBudW1iZXIgfCBib29sZWFuID0gNTAwMCkge1xyXG4gICAgc3dpdGNoIChyZXNvdXJjZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFJlc291cmNlVHlwZXMuc2NyaXB0OlxyXG4gICAgICAgICAgICBsb2FkKHVybCwgY2FsbGJhY2ssIGNhbGxiYWNrLCBmYWxzZSwgcmVtb3ZlQWZ0ZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJlc291cmNlVHlwZXMuaW1hZ2U6XHJcbiAgICAgICAgICAgIGxvYWRJbWFnZSh1cmwsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSZXNvdXJjZVR5cGVzLmlmcmFtZTpcclxuICAgICAgICAgICAgbG9hZElmcmFtZSh1cmwsIGNhbGxiYWNrLCByZW1vdmVBZnRlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgcmVzb3VyY2UgdHlwZScpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGxvYWRJbWFnZSh1cmw6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdmFyIGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBmbk9uTG9hZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gZm5PbkxvYWQ7XHJcblxyXG4gICAgaW1nLnNyYyA9IHVybDtcclxufVxyXG5mdW5jdGlvbiBsb2FkSWZyYW1lKHVybDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQsIHJlbW92ZUFmdGVyOiBudW1iZXIgfCBib29sZWFuID0gNTAwMCkge1xyXG4gICAgdmFyIGlmciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgaWZyLnN0eWxlLndpZHRoID0gJzMwcHgnO1xyXG4gICAgaWZyLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcclxuICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpZnIuc3R5bGUudG9wID0gJy0xMDAwcHgnO1xyXG4gICAgaWZyLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XHJcblxyXG4gICAgaWYgKHJlbW92ZUFmdGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWZ0ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmbk9uTG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgZWw7XHJcbiAgICAgICAgaWYgKGUgJiYgZS5zcmNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsID0gZS5zcmNFbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZSAmJiBlLnRhcmdldCkge1xyXG4gICAgICAgICAgICBlbCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZWwubG9hZGVkICYmIGVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgZWwubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgaWYgKHJlbW92ZUFmdGVyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWZ0ZXIgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcihpZnIsICdsb2FkJywgZm5PbkxvYWQpO1xyXG4gICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcihpZnIsICdlcnJvcicsIGZuT25Mb2FkKTtcclxuICAgIGlmci5vbmxvYWQgPSBlID0+IHtcclxuICAgICAgICBmbk9uTG9hZChlKTtcclxuICAgIH07XHJcbiAgICBpZnIub25lcnJvciA9IGZuT25Mb2FkO1xyXG5cclxuICAgIGlmci5zcmMgPSB1cmw7XHJcbiAgICBET01VdGlscy5hcHBlbmRUb0JvZHkoaWZyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTZXJ2aWNlKHNlcnZpY2VOYW1lOiBzdHJpbmcsIGZuT25FcnJvcj86ICgpID0+IHZvaWQsIGZuT25Mb2FkPzogKCkgPT4gdm9pZCkge1xyXG4gICAgdmFyIHVybCA9IGdldENkblJlc291cmNlKCkgKyAnL2pzL2dpZ3lhLnNlcnZpY2VzLicgKyBzZXJ2aWNlTmFtZSArICcuanMnO1xyXG4gICAgbG9hZChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmIGNvbnNvbGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGxvYWRpbmcgZ2lneWEgc2VydmljZSAnICsgc2VydmljZU5hbWUgKyAnIGZyb20gdXJsOiAnICsgdXJsKTtcclxuICAgICAgICAgICAgICAgIGlmIChmbk9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbk9uRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm5PbkxvYWQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRyaW0oczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzLnJlcGxhY2UoL15cXHMqKFxcUyooLipcXFMpPylcXHMqJC8sICckMScpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoczogc3RyaW5nLCAuLi5yZXN0OiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzW2kgKyAxXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHMgPSBzLnNwbGl0KCd7JyArIGkgKyAnfScpLmpvaW4oYXJndW1lbnRzW2kgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZHNXaXRoKHM6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzLmluZGV4T2Yoc3VmZml4LCBzLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwoc3RyOiBzdHJpbmcsIGZpbmQ6IHN0cmluZywgcmVwbGFjZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghZmluZCkgcmV0dXJuIHN0cjtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1hU2VwYXJhdGVkVmFsdWVzKHN0cjE6IHN0cmluZyA9ICcnLCBzdHIyOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBhcnIgPSBzdHIxLmNvbmNhdCgnLCcsIHN0cjIpLnNwbGl0KCcsJyk7XHJcbiAgICByZXR1cm4gZ2lneWEudXRpbHMuYXJyYXkuZ2V0VW5pcXVlVmFsdWVzKGFycikuZmlsdGVyKHggPT4geCkuam9pbignLCcpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbCgpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgICB2YXIgc2NyT2ZYID0gMCxcclxuICAgICAgICBzY3JPZlkgPSAwO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cucGFnZVlPZmZzZXQgPT0gJ251bWJlcicpIHtcclxuICAgICAgICBzY3JPZlkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgc2NyT2ZYID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5ICYmIChkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApKSB7XHJcbiAgICAgICAgc2NyT2ZZID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAgICAgc2NyT2ZYID0gZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKSB7XHJcbiAgICAgICAgc2NyT2ZZID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBzY3JPZlggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGxlZnQ6IHNjck9mWCwgdG9wOiBzY3JPZlkgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbFNpemUoKTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcclxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgdmFyIGggPSBkZS5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAoaCA9PSAwKSBoID0gZGIuY2xpZW50SGVpZ2h0O1xyXG4gICAgdmFyIHcgPSBkZS5jbGllbnRXaWR0aDtcclxuICAgIGlmICh3ID09IDApIHcgPSBkYi5jbGllbnRXaWR0aDtcclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKTogbnVtYmVyIHtcclxuICAgIHZhciBvcmllbnRhdGlvbiA9IHBhcnNlSW50KCh3aW5kb3dbJ29yaWVudGF0aW9uJ10gYXMgc3RyaW5nKSB8fCAnMCcpO1xyXG4gICAgaWYgKG9yaWVudGF0aW9uIDwgMCkgb3JpZW50YXRpb24gKz0gMzYwO1xyXG5cclxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5uZXJTaXplKCk6IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB7XHJcbiAgICB2YXIgaDtcclxuICAgIHZhciB3O1xyXG5cclxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoID0gZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGlmIChoID09IDApIGggPSBkYi5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdyA9IGRlLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmICh3ID09IDApIHcgPSBkYi5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxlQ2VudGVyKCk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogc2Nyb2xsLnRvcCArIE1hdGguZmxvb3Ioc2l6ZS5oIC8gMiksXHJcbiAgICAgICAgbGVmdDogc2Nyb2xsLmxlZnQgKyBNYXRoLmZsb29yKHNpemUudyAvIDIpLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWN0SG9yaXpvbnRhbGx5VmlzaWJsZShyZWN0OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH0pIHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4gcmVjdC5sZWZ0ID49IHNjcm9sbC5sZWZ0ICYmIHJlY3QucmlnaHQgPD0gc2Nyb2xsLmxlZnQgKyBzaXplLnc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVjdEZ1bGx5VmlzaWJsZShyZWN0OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH0pIHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gc2Nyb2xsLnRvcCAmJiByZWN0LmJvdHRvbSA8PSBzY3JvbGwudG9wICsgc2l6ZS5oICYmIHJlY3QubGVmdCA+PSBzY3JvbGwubGVmdCAmJiByZWN0LnJpZ2h0IDw9IHNjcm9sbC5sZWZ0ICsgc2l6ZS53O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5zY3JvbGxJbnRvVmlldykge1xyXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubGV0IHNlbGVjdGVkQ2RuSG9zdHNJbmRleCA9IDA7XHJcbmV4cG9ydCBjb25zdCBDRE5fSE9TVFMgPSB7XHJcbiAgICBodHRwOiBbJ2Nkbi5naWd5YS5jb20nLCAnY2RuMS5naWd5YS5jb20nLCAnY2RuMi5naWd5YS5jb20nLCAnY2RuMy5naWd5YS5jb20nXSxcclxuICAgIGh0dHBzOiBbJ2NkbnMuZ2lneWEuY29tJywgJ2NkbnMxLmdpZ3lhLmNvbScsICdjZG5zMi5naWd5YS5jb20nLCAnY2RuczMuZ2lneWEuY29tJ10sXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5SZXNvdXJjZShwYXRoPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIGdpZ3lhLnRoaXNTY3JpcHQgbWF5IG5vdCBleGlzdCBpZiBsb2FkZWQgZm9yIHNzb09yaWcuXHJcbiAgICBsZXQgYmFzZURvbWFpbiA9IGdpZ3lhLnRoaXNTY3JpcHQ/LmJhc2VEb21haW4gPz8gJyc7XHJcbiAgICBjb25zdCBwcm90b2NvbCA9IGdpZ3lhLnRoaXNTY3JpcHQ/LnByb3RvY29sID8/ICdodHRwcyc7XHJcblxyXG4gICAgLy8gSWYgbm8gYmFzZSBkb21haW4gb3IgaWYgYmFzZSBkb21haW4gZW5kcyB3aXRoIC5naWd5YS5jb20sIHVzZSBHaWd5YSBDRE4uXHJcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBiYXNlIGRvbWFpbi5cclxuICAgIGlmICghYmFzZURvbWFpbiB8fCAvY2Rucz9cXC5naWd5YVxcLmNvbSQvLnRlc3QoYmFzZURvbWFpbikpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnkgPSBDRE5fSE9TVFNbcHJvdG9jb2xdO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnkubGVuZ3RoIDw9IHNlbGVjdGVkQ2RuSG9zdHNJbmRleCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENkbkhvc3RzSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYXNlRG9tYWluID0gc2VsZWN0ZWRTY2hlbWFSZXBvc2l0b3J5W3NlbGVjdGVkQ2RuSG9zdHNJbmRleCsrXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgdGhlIHBhdGggc3RhcnRzIHdpdGggXCIvXCIuXHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICAgIGlmIChwYXRoLmluZGV4T2YoJy8nKSAhPT0gMCkge1xyXG4gICAgICAgICAgICBwYXRoID0gJy8nICsgcGF0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb3RvY29sICsgJzovLycgKyBiYXNlRG9tYWluICsgKHBhdGggfHwgJycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWdDZG5SZXNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldENkblJlc291cmNlKCcvZ3MvaS8nKTtcclxufVxyXG4iLCJpbXBvcnQgeyBkZWZhdWx0VGVtcGxhdGVzIH0gZnJvbSAnc3JjL3V0aWxzL0dpZ3lhLkpzLlBsdWdpbnMuRGVidWcvYXBwL1RlbXBsYXRlcyc7XHJcbmltcG9ydCB7IE1lc3NhZ2luZ01ldGhvZCB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9JbnRlcm5hbEZsb3dzJztcclxuaW1wb3J0IHsgZGVmYXVsdENzcyB9IGZyb20gJ3NyYy91dGlscy9HaWd5YS5Kcy5QbHVnaW5zLkRlYnVnL2FwcC9EZWZhdWx0Q3NzJztcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbnR5cGUgSlF1ZXJ5ID0gYW55O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2dFbnRyeSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaHRtbD86IHN0cmluZztcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGRhdGE/OiBPYmplY3Q7XHJcbiAgICB0aW1lOiBEYXRlO1xyXG4gICAgZXJyb3I/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z1BsdWdpbiB7XHJcbiAgICBwcml2YXRlICRjb250YWluZXI6IEpRdWVyeTtcclxuICAgIHB1YmxpYyB0ZW1wbGF0ZXM6IE9iamVjdCA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShkZWZhdWx0VGVtcGxhdGVzLCBmYWxzZSk7XHJcbiAgICBwcml2YXRlIGFkZGVkQ3NzOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgaGlzdG9yeTogTG9nRW50cnlbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgJHVzZXI6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgJGxhc3RMb2dFbnRyeTogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSAkYXBpS2V5OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlICRoaXN0b3J5QnV0dG9uOiBKUXVlcnk7XHJcbiAgICBwcml2YXRlICRoaXN0b3J5OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlICRzYXZlQ2hlY2tib3g6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgJGhpZGVCdXR0b246IEpRdWVyeTtcclxuICAgIHByaXZhdGUgJGJhckNvbnRhaW5lcjogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSAkZGV0YWlsczogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSAkZGV0YWlsc0J1dHRvbjogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlcjogT2JqZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXJhbXM6IE9iamVjdCwgcHJpdmF0ZSByZWZTdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIGdpZ3lhLl8uaGlzdG9yeSA9IHRoaXMuaGlzdG9yeTtcclxuICAgICAgICBnaWd5YS51dGlscy5zY3JpcHQubG9hZChnaWd5YS5fLmdldENkblJlc291cmNlKCcvd2ViU0RLL2xhdGVzdC9FeHRlcm5hbC9qcXVlcnktMS4xMS4xLm1pbi5qcycpLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snJCddID0galF1ZXJ5Lm5vQ29uZmxpY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmZ1bmN0aW9ucy5jcmVhdGVBbGlhcygnZ2lneWEuZGVidWcuYWRkTG9nJywgbG9nID0+IHRoaXMuYWRkTG9nKGxvZykpO1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdsb2FkJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcyxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGdpZ3lhLmV2ZW50cy5hZGRNYXAoe1xyXG4gICAgICAgICAgICBkZWZhdWx0TWV0aG9kOiBlID0+IHRoaXMub25FdmVudChlKSxcclxuICAgICAgICAgICAgZXZlbnRNYXA6IFt7IGV2ZW50czogJyonLCBhcmdzOiBbJyRldmVudCddIH1dLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgb25Vc2VyRXZlbnQgPSBlID0+IHRoaXMudXBkYXRlVXNlcihlKTtcclxuXHJcbiAgICAgICAgZ2lneWEuc29jaWFsaXplLmFkZEV2ZW50SGFuZGxlcnMoe1xyXG4gICAgICAgICAgICBvbkxvZ2luOiBvblVzZXJFdmVudCxcclxuICAgICAgICAgICAgb25Mb2dvdXQ6IG9uVXNlckV2ZW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGpzb24yaHRtbChqc29uOiBPYmplY3QsIGhpZGRlbjogYm9vbGVhbiwgbDogbnVtYmVyID0gMCk6IEpRdWVyeSB7XHJcbiAgICAgICAgdmFyIGRpdiA9ICQoJzxkaXY+PC9kaXY+Jyk7XHJcbiAgICAgICAgdmFyIGRpdkRhdGFPYmplY3QgPSAkKCc8ZGl2IGNsYXNzPVwiZ2lnLWRlYnVnLWRhdGEtZGV0YWlscy1vYmplY3RcIj48L2Rpdj4nKS5hcHBlbmRUbyhkaXYpO1xyXG4gICAgICAgIHZhciB1bCA9ICQoJzx1bD48L3VsPicpO1xyXG4gICAgICAgIGlmIChoaWRkZW4pIHtcclxuICAgICAgICAgICAgZGl2LmFkZENsYXNzKCdnaWctZGVidWctZGF0YS1kZXRhaWxzLWNsb3NlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXZEYXRhT2JqZWN0LmFwcGVuZCh1bCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBqc29uKSB7XHJcbiAgICAgICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSAkKCc8bGk+PC9saT4nKS5hcHBlbmRUbyh1bCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvcE5hbWVFbGVtZW50ID0gJCgnPHNwYW4gY2xhc3M9XCJnaWctZGVidWctcHJvcGVydHlOYW1lXCI+PC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgcHJvcE5hbWVFbGVtZW50LnRleHQoaSArICc6Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb3BWYWx1ZUVsZW1lbnQgPSAkKCc8c3BhbiBjbGFzcz1cImdpZy1kZWJ1Zy1wcm9wZXJ0eVZhbHVlXCI+PC9zcGFuPicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltpXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoanNvbltpXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BWYWx1ZUVsZW1lbnQudGV4dCgnW05VTExdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsID4gNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wVmFsdWVFbGVtZW50LnRleHQoJ1RvbyBtdWNoIHJlY3Vyc2lvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3RCdXR0b24gPSAkKCc8ZGl2IGNsYXNzPVwiZ2lnLWRlYnVnLWRhdGEtZGV0YWlscy1vcGVuQnV0dG9uXCI+eyB9PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbERhdGEgPSB0aGlzLmpzb24yaHRtbChqc29uW2ldLCB0cnVlLCBsICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEJ1dHRvbi5wcm9wKCdlbERhdGEnLCBlbERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wVmFsdWVFbGVtZW50LmFwcGVuZChvYmplY3RCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wVmFsdWVFbGVtZW50LmFwcGVuZChlbERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25baV0gPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BWYWx1ZUVsZW1lbnQudGV4dCgnW0ZVTkNUSU9OXScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wVmFsdWVFbGVtZW50LnRleHQoanNvbltpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKHByb3BOYW1lRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmQocHJvcFZhbHVlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5nZXRVc2VySW5mbyh0aGlzLnBhcmFtcywge1xyXG4gICAgICAgICAgICBjYWxsYmFjazogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlcihyZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXZlbnQoZSkge1xyXG4gICAgICAgIHZhciBsb2c6IExvZ0VudHJ5ID0ge1xyXG4gICAgICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBkYXRhOiB7IGV2ZW50OiBlIH0sXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogZS5ldmVudE5hbWUsXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGUuZXZlbnROYW1lID09ICdhZnRlclJlc3BvbnNlJykge1xyXG4gICAgICAgICAgICBpZiAoZS5yZXNwb25zZS5lcnJvckNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbG9nLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2cuaHRtbCA9XHJcbiAgICAgICAgICAgICAgICAnR290IGNhbGxiYWNrIGZvciA8c3BhbiBkYXRhLXByb3A9XCJldmVudFwiPicgK1xyXG4gICAgICAgICAgICAgICAgZS5tZXRob2ROYW1lICtcclxuICAgICAgICAgICAgICAgICc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAoZS5zb3VyY2UgPyAnIChzb3VyY2U9JyArIGUuc291cmNlICsgJywgZXJyb3JDb2RlPScgKyBlLnJlc3BvbnNlLmVycm9yQ29kZSArICcpJyA6ICcnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZXZlbnROYW1lID09ICdiZWZvcmVSZXF1ZXN0Jykge1xyXG4gICAgICAgICAgICBsb2cuaHRtbCA9ICdDYWxsaW5nIDxzcGFuIGRhdGEtcHJvcD1cImV2ZW50XCI+JyArIGUubWV0aG9kTmFtZSArICc8L3NwYW4+JyArIChlLnNvdXJjZSA/ICcgKHNvdXJjZT0nICsgZS5zb3VyY2UgKyAnKScgOiAnJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmV2ZW50TmFtZSA9PSAnYmVmb3JlUGx1Z2luUmVxdWVzdCcpIHtcclxuICAgICAgICAgICAgbG9nLmh0bWwgPVxyXG4gICAgICAgICAgICAgICAgJ0NhbGxpbmcgVUkgcGx1Z2luIDxzcGFuIGRhdGEtcHJvcD1cImV2ZW50XCI+JyArXHJcbiAgICAgICAgICAgICAgICBlLm1ldGhvZE5hbWUgK1xyXG4gICAgICAgICAgICAgICAgJzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgIChlLnNvdXJjZSAmJiBlLnNvdXJjZSAhPSBlLm1ldGhvZE5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/ICcgKHNvdXJjZT0nICsgZS5zb3VyY2UgKyAnKSdcclxuICAgICAgICAgICAgICAgICAgICA6IGUucGFyYW1zICYmIGUucGFyYW1zLmNvbnRhaW5lcklEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJyAoJyArIGUucGFyYW1zLmNvbnRhaW5lcklEICsgJyknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZy5odG1sID1cclxuICAgICAgICAgICAgICAgIChlLmlzR2xvYmFsID8gJ0dsb2JhbCBldmVudCcgOiAnRXZlbnQnKSArXHJcbiAgICAgICAgICAgICAgICAnJm5ic3A7PHNwYW4gZGF0YS1wcm9wPVwiZXZlbnRcIj4nICtcclxuICAgICAgICAgICAgICAgIChlLmZ1bGxFdmVudE5hbWUgfHwgZS5ldmVudE5hbWUpICtcclxuICAgICAgICAgICAgICAgICc8L3NwYW4+IGZpcmVkJyArXHJcbiAgICAgICAgICAgICAgICAoZS5zb3VyY2UgPyAnIChzb3VyY2U9JyArIGUuc291cmNlICsgJyknIDogJycpO1xyXG4gICAgICAgICAgICBsb2cuZGF0YVsnZXZlbnQnXSA9IGU7XHJcbiAgICAgICAgICAgIGlmIChlLmV2ZW50TmFtZSA9PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkTG9nKGxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVXNlcihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS51c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSByZXNwb25zZS51c2VyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLlVJRCkge1xyXG4gICAgICAgICAgICB0aGlzLiR1c2VyLmFkZENsYXNzKCdnaWctZGVidWctdXNlci1sb2dnZWRJbicpO1xyXG4gICAgICAgICAgICB0aGlzLiR1c2VyLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAnTG9nZ2VkIGluIGFzICcgKyAocmVzcG9uc2UudXNlci5uaWNrbmFtZSB8fCAocmVzcG9uc2UudXNlci5maXJzdE5hbWUgfHwgJycgKyAnICcgKyByZXNwb25zZS51c2VyLmxhc3ROYW1lIHx8ICcnKSkgKyAnICgnICsgcmVzcG9uc2UuVUlEICsgJyknLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHVzZXIucmVtb3ZlQ2xhc3MoJ2dpZy1kZWJ1Zy11c2VyLWxvZ2dlZEluJyk7XHJcbiAgICAgICAgICAgIHRoaXMuJHVzZXIuaHRtbCgnTG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRMb2cobG9nOiBMb2dFbnRyeSkge1xyXG4gICAgICAgIGxvZy5kYXRhID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKGxvZy5kYXRhLCBmYWxzZSwgZmFsc2UsIDYpO1xyXG4gICAgICAgIHRoaXMuJGxhc3RMb2dFbnRyeS5lbXB0eSgpO1xyXG4gICAgICAgIHZhciAkZW50cnkgPSB0aGlzLmdldExvZ0VudHJ5RWxlbWVudChsb2cpO1xyXG4gICAgICAgIHRoaXMuJGxhc3RMb2dFbnRyeS5hcHBlbmQoJGVudHJ5KTtcclxuXHJcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2gobG9nKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLiRoaXN0b3J5KSByZXR1cm47XHJcbiAgICAgICAgdmFyIGRpdkxvZyA9IHRoaXMuZ2V0TG9nRW50cnlFbGVtZW50KGxvZyk7XHJcbiAgICAgICAgdGhpcy4kaGlzdG9yeS5hcHBlbmQoZGl2TG9nKTtcclxuICAgICAgICB0aGlzLiRoaXN0b3J5LnNjcm9sbFRvcCh0aGlzLiRoaXN0b3J5LmdldCgwKS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySGlzdG9yeSgpIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcclxuICAgICAgICB0aGlzLiRoaXN0b3J5LmVtcHR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9nKGlkOiBzdHJpbmcpOiBMb2dFbnRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhpc3RvcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlzdG9yeVtpXS5pZCA9PSBpZCkgcmV0dXJuIHRoaXMuaGlzdG9yeVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9nRW50cnlFbGVtZW50KGxvZzogTG9nRW50cnkpOiBKUXVlcnkge1xyXG4gICAgICAgIHZhciBjbGFzc05hbWUgPSAnZ2lnLWRlYnVnLWhpc3RvcnktZW50cnknO1xyXG4gICAgICAgIHZhciAkbG9nID0gJCgnPGRpdj48L2Rpdj4nKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2dpZy1kZWJ1Zy1oaXN0b3J5LWVudHJ5JylcclxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtbG9nLWlkJywgbG9nLmlkKVxyXG4gICAgICAgICAgICAuaHRtbCgnPHNwYW4gY2xhc3M9XCJnaWctZGVidWctdGltZXN0YW1wXCI+WycgKyBsb2cudGltZS50b0xvY2FsZVRpbWVTdHJpbmcoKSArICddPC9zcGFuPicgKyBsb2cuaHRtbCk7XHJcbiAgICAgICAgaWYgKGxvZy5jbGFzc05hbWUpICRsb2cuYWRkQ2xhc3MoJ2dpZy1kZWJ1Zy1oaXN0b3J5LWVudHJ5LScgKyBsb2cuY2xhc3NOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGxvZy5lcnJvcikgJGxvZy5hZGRDbGFzcygnZ2lnLWRlYnVnLWhpc3RvcnktZW50cnktZXJyb3InKTtcclxuXHJcbiAgICAgICAgJGxvZy5maW5kKCdbZGF0YS1wcm9wXScpLmNsaWNrKGUgPT4gdGhpcy5vbkRhdGFQcm9wQ2xpY2soZSkpO1xyXG4gICAgICAgIHJldHVybiAkbG9nO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0YVByb3BDbGljayhlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdmFyIG9wZW5lciA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB2YXIgbG9nSWQgPSBvcGVuZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWxvZy1pZCcpO1xyXG4gICAgICAgIHZhciBwcm9wID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvcCcpO1xyXG4gICAgICAgIHZhciBsb2cgPSB0aGlzLmdldExvZyhsb2dJZCk7XHJcbiAgICAgICAgaWYgKGxvZy5kYXRhW3Byb3BdKSB0aGlzLnNob3dEZXRhaWxzKGxvZy5kYXRhW3Byb3BdLCBlLnRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RldGFpbHMoZGF0YSwgb3BlbmVyPykge1xyXG4gICAgICAgIGlmICh0aGlzLiRkZXRhaWxzKSB0aGlzLiRkZXRhaWxzLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJy5naWctZGVidWctc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnZ2lnLWRlYnVnLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgaWYgKG9wZW5lcikgJChvcGVuZXIpLmFkZENsYXNzKCdnaWctZGVidWctc2VsZWN0ZWQnKTtcclxuICAgICAgICB2YXIgZWxEYXRhQ29udGFpbmVyID0gJCgnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1jb250YWluZXIgZ2lnLWRlYnVnLWRhdGEtZGV0YWlsc1wiPjwvZGl2PicpO1xyXG4gICAgICAgIHRoaXMuJGRldGFpbHMgPSBlbERhdGFDb250YWluZXI7XHJcbiAgICAgICAgZWxEYXRhQ29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy4kYmFyQ29udGFpbmVyLmhlaWdodCgpICsgNSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgZWxEYXRhID0gdGhpcy5qc29uMmh0bWwoZGF0YSwgZmFsc2UpO1xyXG4gICAgICAgIGVsRGF0YS5maW5kKCcuZ2lnLWRlYnVnLWRhdGEtZGV0YWlscy1vcGVuQnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgdmFyIGVsRGF0YSA9IGJ0bi5wcm9wKCdlbERhdGEnKTtcclxuICAgICAgICAgICAgZWxEYXRhLnRvZ2dsZUNsYXNzKCdnaWctZGVidWctZGF0YS1kZXRhaWxzLWNsb3NlZCcpO1xyXG4gICAgICAgICAgICBlbERhdGEudG9nZ2xlQ2xhc3MoJ2dpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtb3BlbicpO1xyXG4gICAgICAgICAgICBidG4udG9nZ2xlQ2xhc3MoJ2dpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtcHJlc3NlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsRGF0YUNvbnRhaW5lci5hcHBlbmQoZWxEYXRhKTtcclxuICAgICAgICBlbERhdGFDb250YWluZXIuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5mbygpIHtcclxuICAgICAgICB2YXIgb0luZm8gPSB7XHJcbiAgICAgICAgICAgIEFQSToge1xyXG4gICAgICAgICAgICAgICAgJ0FQSSBkb21haW4nOiBnaWd5YS5wYXJ0bmVyU2V0dGluZ3MucGx1Z2luc1snYXBpRG9tYWluJ10sXHJcbiAgICAgICAgICAgICAgICAnQVBJIGFkYXB0ZXInOiBnaWd5YS5fLmFwaUFkYXB0ZXIubmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3NvY2lhbGl6ZS5qcyc6IHtcclxuICAgICAgICAgICAgICAgIGVudmlyb25tZW50OiBnaWd5YS5kYXRhQ2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYnVpbGQ6IGdpZ3lhLmJ1aWxkLFxyXG4gICAgICAgICAgICAgICAgJ2luaXQgdGltZSc6IGdpZ3lhLmxvY2FsSW5mby5pbml0VGltZS50b0xvY2FsZVN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgJ0FQSSBrZXknOiBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSxcclxuICAgICAgICAgICAgICAgICdnbG9iYWwgY29uZic6IGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZixcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBnaWd5YS50aGlzU2NyaXB0LmxhbmcsXHJcbiAgICAgICAgICAgICAgICAnVVJMIHBhcmFtcyc6IGdpZ3lhLnRoaXNTY3JpcHQuVVJMUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgJ2Jhc2UgVVJMJzogZ2lneWEudGhpc1NjcmlwdC5iYXNlRG9tYWluLFxyXG4gICAgICAgICAgICAgICAgJ2ZvdW5kIHNjcmlwdCBlbGVtZW50JzogZ2lneWEudGhpc1NjcmlwdC5zY3JpcHRFbGVtZW50ICE9IG51bGwsXHJcbiAgICAgICAgICAgICAgICAnc2VydmljZSBxdWV1ZXMnOiBnaWd5YS51dGlscy5xdWV1ZS5fc2VydmljZXNTdGF0dXMoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluOiB7XHJcbiAgICAgICAgICAgICAgICAncGFnZSBkb21haW4nOiBnaWd5YS5sb2NhbEluZm8ucGFnZURvbWFpbixcclxuICAgICAgICAgICAgICAgICdiYXNlIGRvbWFpbic6IGdpZ3lhLmxvY2FsSW5mby5iYXNlRG9tYWluLFxyXG4gICAgICAgICAgICAgICAgJ2Jhc2UgZG9tYWlucyBsaXN0JzogZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zLFxyXG4gICAgICAgICAgICAgICAgY25hbWU6IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5jbmFtZSB8fCAnTi9BJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgU1NPOiB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29LZXkgfHwgJ04vQScsXHJcbiAgICAgICAgICAgICAgICAnbG9nb3V0IFVSTCc6IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29Mb2dvdXRVcmwgfHwgJ04vQScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJyb3dzZXI6IHtcclxuICAgICAgICAgICAgICAgICd1c2VyIGFnZW50JzogZ2lneWEubG9jYWxJbmZvLnVzZXJBZ2VudCxcclxuICAgICAgICAgICAgICAgICd3aW5kb3cgbWVzc2FnaW5nIG1ldGhvZCc6IE1lc3NhZ2luZ01ldGhvZFtnaWd5YS5sb2NhbEluZm9bJ21lc3NhZ2luZ01ldGhvZCddXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJzNyZCBwYXJ0eSBpbnRlZ3JhdGlvbnMnOiB7XHJcbiAgICAgICAgICAgICAgICBmYWNlYm9vazoge1xyXG4gICAgICAgICAgICAgICAgICAgICdhcHAgSUQnOiAoZ2lneWEucHJvdmlkZXJzQ29uZmlnLmZhY2Vib29rICYmIGdpZ3lhLnByb3ZpZGVyc0NvbmZpZy5mYWNlYm9vay5hcHBJRCkgfHwgJ04vQScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2luaXRpYWxpemVkIHRpbWUnOiBnaWd5YS5leHRlcm5hbC5mYWNlYm9vay5pbml0aWFsaXplZFRpbWUgPyBnaWd5YS5leHRlcm5hbC5mYWNlYm9vay5pbml0aWFsaXplZFRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKCkgOiAnTi9BJyxcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWQ6IGdpZ3lhLmV4dGVybmFsLmZhY2Vib29rLmlzQ29ubmVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICdsb2dnZWQgaW4nOiBnaWd5YS5leHRlcm5hbC5mYWNlYm9vay5pc0xvZ2dlZEluLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2RlZmF1bHQgcGx1Z2luIHBhcmFtcyc6IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5wbHVnaW5zLFxyXG4gICAgICAgICAgICAnbG9jYWwgaW5mbyc6IGdpZ3lhLmxvY2FsSW5mbyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gb0luZm87XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFVJKCkge1xyXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lciA9ICQoJyMnICsgdGhpcy5wYXJhbXNbJ2NvbnRhaW5lcklEJ10pXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZ2lnLWRlYnVnLWNvbnRhaW5lcicpXHJcbiAgICAgICAgICAgIC5odG1sKHRoaXMudGVtcGxhdGVzWydkZWJ1Z0JhciddKTtcclxuXHJcbiAgICAgICAgdGhpcy4kYmFyQ29udGFpbmVyID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJy5naWctZGVidWctYmFyLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuJGxhc3RMb2dFbnRyeSA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLWxhc3RMb2cnKTtcclxuICAgICAgICB0aGlzLiR1c2VyID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJy5naWctZGVidWctdXNlcicpO1xyXG4gICAgICAgIHRoaXMuJHVzZXIuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyICYmIHRoaXMuY3VycmVudFVzZXJbJ1VJRCddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEZXRhaWxzKHRoaXMuY3VycmVudFVzZXIsIHRoaXMuJHVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kYXBpS2V5ID0gdGhpcy4kY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5maW5kKCcuZ2lnLWRlYnVnLWFwaWtleScpXHJcbiAgICAgICAgICAgIC52YWwoZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpXHJcbiAgICAgICAgICAgIC5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcGlLZXkuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGhpc3RvcnlCdXR0b24gPSB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1oaXN0b3J5QnV0dG9uJykuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRoaXN0b3J5LnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kZGV0YWlsc0J1dHRvbiA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLWRldGFpbHNCdXR0b24nKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRkZXRhaWxzKSB0aGlzLiRkZXRhaWxzLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kc2F2ZUNoZWNrYm94ID0gdGhpcy4kY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5maW5kKCcuZ2lnLWRlYnVnLWF1dG9sb2FkJylcclxuICAgICAgICAgICAgLmF0dHIoJ2NoZWNrZWQnLCBnaWd5YS51dGlscy5jb29raWUuZ2V0KCdnaWdfZGVidWcnKSA9PSAnMScpXHJcbiAgICAgICAgICAgIC5jaGFuZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnNldCgnZ2lnX2RlYnVnJywgdGhpcy4kc2F2ZUNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpID8gJzEnIDogJzAnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kaGlkZUJ1dHRvbiA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLWhpZGVCdXR0b24nKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGhpc3Rvcnkuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kZGV0YWlscykgdGhpcy4kZGV0YWlscy5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJGJhckNvbnRhaW5lci5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgaW5mb0J1dHRvbiA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLWluZm9CdXR0b24nKTtcclxuICAgICAgICBpbmZvQnV0dG9uLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RGV0YWlscyh0aGlzLmdldEluZm8oKSwgaW5mb0J1dHRvbik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLWltcG9ydFRleHQnKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1wb3J0SnNvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1pbXBvcnQnKS5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25GaWxlU2VsZWN0ZWQoKGUudGFyZ2V0IGFzIGFueSkuZmlsZXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1leHBvcnRCdXR0b24nKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0SnNvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1jbGVhckJ1dHRvbicpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckFsbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgY3NzUHJlZml4ID0gdGhpcy5wYXJhbXNbJ2Nzc1ByZWZpeCddO1xyXG4gICAgICAgIGlmIChjc3NQcmVmaXggfHwgIXRoaXMuYWRkZWRDc3MpIHtcclxuICAgICAgICAgICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoZGVmYXVsdENzcy5yZXNldCwgY3NzUHJlZml4KTtcclxuICAgICAgICAgICAgdmFyIGZpeGVkQ3NzID0gZ2lneWEucGx1Z2luVXRpbHMuY3NzLmZpeENzcyhkZWZhdWx0Q3NzLmdsb2JhbCk7XHJcbiAgICAgICAgICAgIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MuYWRkQ3NzKGZpeGVkQ3NzLCBjc3NQcmVmaXgpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZGVkQ3NzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLmFkZENsYXNzKCdnaWctZGVidWctY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIHRoaXMuJGhpc3RvcnkgPSAodGhpcy4kaGlzdG9yeSB8fCAkKCc8ZGl2PjwvZGl2PicpKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2dpZy1kZWJ1Zy1jb250YWluZXInKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2dpZy1kZWJ1Zy1oaXN0b3J5JylcclxuICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMuJGNvbnRhaW5lci5vZmZzZXQoKS50b3AgKyB0aGlzLiRiYXJDb250YWluZXIuaGVpZ2h0KCkgKyA1LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAgICAgLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRKc29uKCkge1xyXG4gICAgICAgIHZhciBidG4gPSB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1pbXBvcnRCdXR0b24nKTtcclxuICAgICAgICBidG4uYWRkQ2xhc3MoJ2dpZy1kZWJ1Zy1pbXBvcnQtc2hvd24nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVTZWxlY3RlZChmaWxlcykge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLWltcG9ydCcpO1xyXG4gICAgICAgIHZhciBidG4gPSB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1pbXBvcnRCdXR0b24nKTtcclxuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgJChyZWFkZXIpLmxvYWQoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBbGwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJGRldGFpbHMpIHRoaXMuJGRldGFpbHMuc2xpZGVVcCgpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBvSW1wb3J0ID0gSlNPTi5wYXJzZSgoZmlsZSBhcyBhbnkpLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogJz09PSBJbXBvcnRpbmcgPHNwYW4gZGF0YS1wcm9wPVwiaW5mb1wiPicgKyBpbnB1dC52YWwoKSArICc8L3NwYW4+ID09PScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpbmZvOiBvSW1wb3J0LmluZm8gfSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9JbXBvcnQuaGlzdG9yeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2cgPSBvSW1wb3J0Lmhpc3RvcnlbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nLnRpbWUgPSBuZXcgRGF0ZShsb2cudGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRMb2cobG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ0bi5yZW1vdmVDbGFzcygnZ2lnLWRlYnVnLWltcG9ydC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTG9nKHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiAnPT09IEltcG9ydCBvZiA8c3BhbiBkYXRhLXByb3A9XCJpbmZvXCI+JyArIGlucHV0LnZhbCgpICsgJzwvc3Bhbj4gY29tcGxldGUgPT09JyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGluZm86IG9JbXBvcnQuaW5mbyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMb2coe1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6ICc9PT0gSW1wb3J0IG9mIDxzcGFuIGRhdGEtcHJvcD1cImV4Y2VwdGlvblwiPicgKyBpbnB1dC52YWwoKSArICc8L3NwYW4+IGZhaWxlZCA9PT0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgZXhjZXB0aW9uOiBleCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZXNbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQWxsKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJIaXN0b3J5KCk7XHJcbiAgICAgICAgdGhpcy4kbGFzdExvZ0VudHJ5LmVtcHR5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuJGRldGFpbHMpIHRoaXMuJGRldGFpbHMuc2xpZGVVcCgpO1xyXG4gICAgICAgICQoJy5naWctZGVidWctc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnZ2lnLWRlYnVnLXNlbGVjdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0SnNvbigpIHtcclxuICAgICAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZSh7IGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSwgaW5mbzogdGhpcy5nZXRJbmZvKCkgfSwgdHJ1ZSwgZmFsc2UsIDQsIG51bGwsIHRydWUpKTtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGZpbGVuYW1lID0gJ0dpZ3lhRGVidWdfJyArIFtkLmdldE1vbnRoKCkgKyAxLCBkLmdldERhdGUoKSwgZC5nZXRGdWxsWWVhcigpXS5qb2luKCctJykgKyAnXycgKyBkLmdldEhvdXJzKCkgKyAnXycgKyBkLmdldE1pbnV0ZXMoKSArICcuanNvbic7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgQmxvYiAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtqc29uXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJ2Rvd25sb2FkJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsaWNrRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudCcpO1xyXG4gICAgICAgICAgICAgICAgKGNsaWNrRXZlbnQgYXMgYW55KS5pbml0TW91c2VFdmVudCgnY2xpY2snLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIG51bGwpOyAvLyB5dWNrIVxyXG4gICAgICAgICAgICAgICAgYS5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJywgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGlmciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgICAgICAgICBpZnIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFwcGVuZFRvQm9keShpZnIpO1xyXG4gICAgICAgICAgICB2YXIgZG9jID0gaWZyLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcbiAgICAgICAgICAgIGRvYy5vcGVuKCdhcHBsaWNhdGlvbi9qc29uJywgJ3JlcGxhY2UnKTtcclxuICAgICAgICAgICAgKGRvYyBhcyBhbnkpLmNoYXJzZXQgPSAndXRmLTgnO1xyXG4gICAgICAgICAgICBkb2Mud3JpdGUoanNvbik7XHJcbiAgICAgICAgICAgIGRvYy5jbG9zZSgpO1xyXG4gICAgICAgICAgICBkb2MuZXhlY0NvbW1hbmQoJ1NhdmVBcycsIHRydWUsIGZpbGVuYW1lLnJlcGxhY2UoJy5qc29uJywgJy50eHQnKSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlmcik7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIGltZ0Jhc2UgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9jb21tZW50czIvJyk7XHJcbmV4cG9ydCB2YXIgZGVmYXVsdENzcyA9IHtcclxuICAgIHJlc2V0OiBbXHJcbiAgICAgICAgJy5naWctZGVidWctY29udGFpbmVyICosICouZ2lnLWRlYnVnLWNvbnRhaW5lciB7JyxcclxuICAgICAgICAnd29yZC13cmFwOmJyZWFrLXdvcmQ7cGFkZGluZzowcHg7bWFyZ2luOjBweDtjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmF1dG87ZmxvYXQ6bm9uZTtoZWlnaHQ6YXV0bzsnLFxyXG4gICAgICAgICdmb250LWZhbWlseTphcmlhbDtjb2xvcjojRkZGO3Bvc2l0aW9uOnN0YXRpYzt0ZXh0LWFsaWduOmxlZnQ7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtib3gtc2l6aW5nOiBib3JkZXItYm94O30nLFxyXG4gICAgXS5qb2luKCcnKSxcclxuICAgIGdsb2JhbDogW1xyXG4gICAgICAgICdib2R5IHtwYWRkaW5nLXRvcDoxMDBweCAhaW1wb3J0YW50fScsXHJcbiAgICAgICAgJy5naWctZGVidWctY29udGFpbmVyIHt6LWluZGV4Ojk5OTk5OTk5OTk5OTk5OTk5Oy1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7Ym94LXNpemluZzogYm9yZGVyLWJveDsnLFxyXG4gICAgICAgICdwYWRkaW5nOjVweDtmb250LXNpemU6MTJweDtwb3NpdGlvbjpmaXhlZCAhaW1wb3J0YW50O3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6IzAwMDtvcGFjaXR5OjAuODU7Y29sb3I6I0ZGRn0nLFxyXG5cclxuICAgICAgICAnKi5naWctZGVidWctdXNlciB7bWFyZ2luLWJvdHRvbTo1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7fScsXHJcbiAgICAgICAgJyouZ2lnLWRlYnVnLXVzZXItbG9nZ2VkSW4ge2N1cnNvcjpwb2ludGVyO30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1zZWxlY3RlZCB7YmFja2dyb3VuZC1jb2xvcjojRkZGICFpbXBvcnRhbnQ7Y29sb3I6IzAwMCAhaW1wb3J0YW50O2JvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7fScsXHJcbiAgICAgICAgJyouZ2lnLWRlYnVnLXVzZXItbG9nZ2VkSW46aG92ZXIge3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9JyxcclxuICAgICAgICAnKi5naWctZGVidWctYXBpa2V5LWNvbnRhaW5lciB7bWFyZ2luLWJvdHRvbTo1cHg7YmFja2dyb3VuZC1jb2xvcjojMDAwO30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1hcGlrZXkge3dpZHRoOjUwMHB4O2JhY2tncm91bmQtY29sb3I6IzAwMDtib3JkZXI6bm9uZTt9JyxcclxuICAgICAgICAnKi5naWctZGVidWctbGFzdExvZyB7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MThweDt9JyxcclxuICAgICAgICAnKi5naWctZGVidWctc2V0dGluZ3Mge21hcmdpbi1ib3R0b206NXB4fScsXHJcbiAgICAgICAgJyouZ2lnLWRlYnVnLWZvb3RlciB7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbi10b3A6NXB4O30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1oaXN0b3J5QnV0dG9uLCAqLmdpZy1kZWJ1Zy1oaWRlQnV0dG9uLCAqLmdpZy1kZWJ1Zy1kZXRhaWxzQnV0dG9uLCAqLmdpZy1kZWJ1Zy1pbmZvQnV0dG9uLCAqLmdpZy1kZWJ1Zy1pbXBvcnRCdXR0b24sICouZ2lnLWRlYnVnLWV4cG9ydEJ1dHRvbiwgKi5naWctZGVidWctY2xlYXJCdXR0b24geycsXHJcbiAgICAgICAgJ21hcmdpbi1yaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOiAxOHB4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxNXB4O2JvcmRlcjogMXB4IHNvbGlkICMwMDA7YmFja2dyb3VuZC1jb2xvcjojM0EzQTNBO2N1cnNvcjogcG9pbnRlcjsnLFxyXG4gICAgICAgICdmb250LXdlaWdodDpib2xkfScsXHJcblxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1pbmZvQnV0dG9uLCAqLmdpZy1kZWJ1Zy1pbXBvcnRCdXR0b24sICouZ2lnLWRlYnVnLWV4cG9ydEJ1dHRvbiwgKi5naWctZGVidWctY2xlYXJCdXR0b24gIHt3aWR0aDphdXRvO3BhZGRpbmc6IDAgM3B4O2ZvbnQtc2l6ZToxMnB4O30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1kZXRhaWxzQnV0dG9uLCAqLmdpZy1kZWJ1Zy1pbmZvQnV0dG9uLCAqLmdpZy1kZWJ1Zy1pbXBvcnRCdXR0b24sICouZ2lnLWRlYnVnLWV4cG9ydEJ1dHRvbiwgKi5naWctZGVidWctY2xlYXJCdXR0b24ge2Zsb2F0OnJpZ2h0O21hcmdpbi1yaWdodDoxNXB4fScsXHJcbiAgICAgICAgJyouZ2lnLWRlYnVnLWhpc3RvcnlCdXR0b24ucHJlc3NlZCwgLmdpZy1kZWJ1Zy1oaXN0b3J5QnV0dG9uOmhvdmVyLCAqLmdpZy1kZWJ1Zy1oaWRlQnV0dG9uOmhvdmVyLCAnLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1kZXRhaWxzQnV0dG9uLnByZXNzZWQsIC5naWctZGVidWctZGV0YWlsc0J1dHRvbjpob3Zlciwge2JhY2tncm91bmQtY29sb3I6IzRBNEE0QTt9JyxcclxuICAgICAgICAnKi5naWctZGVidWctdGltZXN0YW1wIHttYXJnaW4tcmlnaHQ6MTBweDtjb2xvcjojZmZkODAwO30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1oaXN0b3J5IHtwb3NpdGlvbjogYWJzb2x1dGU7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO2JvcmRlci1yYWRpdXM6N3B4O2JvcmRlcjoxcHggc29saWQgI0ZGRjsnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Y29sb3I6I0ZGRjt3aWR0aDo1MCU7aGVpZ2h0OjQwMHB4O292ZXJmbG93OiBhdXRvO3BhZGRpbmc6MTBweDt9JyxcclxuICAgICAgICAnKi5naWctZGVidWctaGlzdG9yeSBkaXYge2ZvbnQtd2VpZ2h0OmJvbGQ7fScsXHJcblxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1oaXN0b3J5LWVudHJ5IFtkYXRhLXByb3BdIHtjb2xvcjojYjZmZjAwO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7Y3Vyc29yOiBwb2ludGVyO30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1oaXN0b3J5LWVudHJ5LWVycm9yIHtiYWNrZ3JvdW5kLWNvbG9yOiNGRjAwMDA7fScsXHJcbiAgICAgICAgJyouZ2lnLWRlYnVnLWhpc3RvcnktZW50cnktYmVmb3JlUmVxdWVzdCBbZGF0YS1wcm9wXSwgKi5naWctZGVidWctaGlzdG9yeS1lbnRyeS1hZnRlclJlc3BvbnNlIFtkYXRhLXByb3BdIHtjb2xvcjojQjFCMTAwO30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1oaXN0b3J5LWVudHJ5LWJlZm9yZVJlcXVlc3QgW2RhdGEtcHJvcF0sICouZ2lnLWRlYnVnLWhpc3RvcnktZW50cnktYmVmb3JlUGx1Z2luUmVxd3Vlc3QgW2RhdGEtcHJvcF0ge2NvbG9yOiMzMzk5RkY7fScsXHJcbiAgICAgICAgJyouZ2lnLWRlYnVnLWhpZGVCdXR0b24ge3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7fScsXHJcblxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1kYXRhLWRldGFpbHMge3dpZHRoOiA1MCU7bGVmdDogNTAlO2hlaWdodDo0MDBweDtvdmVyZmxvdzphdXRvO2JvcmRlci1yYWRpdXM6N3B4O2JvcmRlcjoxcHggc29saWQgI0ZGRjt9JyxcclxuICAgICAgICAnKi5naWctZGVidWctZGF0YS1kZXRhaWxzICBsaSB7bWFyZ2luLWxlZnQ6MjBweDt9JyxcclxuICAgICAgICAnKi5naWctZGVidWctZGF0YS1kZXRhaWxzICB1bCB7fScsXHJcbiAgICAgICAgJyouZ2lnLWRlYnVnLWRhdGEtZGV0YWlscy1vcGVuQnV0dG9uIHtmb250LXNpemU6MTFweDtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDogMTVweDtoZWlnaHQ6MTVweDtsaW5lLWhlaWdodDoxNXB4O3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyO30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtcHJlc3NlZCB7YmFja2dyb3VuZC1jb2xvcjojRkZGOyBjb2xvcjojMDAwO30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtY2xvc2VkLCAqLmdpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtb3BlbiB7dmVydGljYWwtYWxpZ246dG9wO30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtY2xvc2VkIHtkaXNwbGF5Om5vbmV9JyxcclxuICAgICAgICAnKi5naWctZGVidWctcHJvcGVydHlOYW1lIHtjb2xvcjogI0ZGRkYwMDtmb250LXdlaWdodDpib2xkO30nLFxyXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1wcm9wZXJ0eVZhbHVlIHttYXJnaW4tbGVmdDo1cHg7fScsXHJcbiAgICAgICAgJyouZ2lnLWRlYnVnLWltcG9ydCB7ZGlzcGxheTpub25lfScsXHJcbiAgICAgICAgJyouZ2lnLWRlYnVnLWltcG9ydC1zaG93biAuZ2lnLWRlYnVnLWltcG9ydCB7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOjlweDt9JyxcclxuICAgICAgICAnKi5naWctZGVidWctaW1wb3J0LXNob3duIC5naWctZGVidWctaW1wb3J0VGV4dCB7ZGlzcGxheTpub25lO30nLFxyXG4gICAgXS5qb2luKCcnKSxcclxufTtcclxuIiwiZXhwb3J0IHZhciBkZWZhdWx0VGVtcGxhdGVzID0ge1xyXG4gICAgZGVidWdCYXI6IFtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1oaWRlQnV0dG9uXCI+XzwvZGl2PicsXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctZGVidWctYmFyLWNvbnRhaW5lclwiPicsXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctZGVidWctdXNlclwiPiZuYnNwOzwvZGl2PicsXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctZGVidWctYXBpa2V5LWNvbnRhaW5lclwiPkFQSSBrZXk6IDxpbnB1dCBjbGFzcz1cImdpZy1kZWJ1Zy1hcGlrZXlcIiByZWFkb25seT1cInJlYWRvbmx5XCI+Jm5ic3A7PC9pbnB1dD48L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWRlYnVnLXNldHRpbmdzXCI+JyxcclxuICAgICAgICAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZ2lnLWRlYnVnLWF1dG9sb2FkXCI+PC9pbnB1dD4mbmJzcDtBdXRvIGxvYWQ8L2lucHV0PicsXHJcbiAgICAgICAgJzwvZGl2PicsXHJcbiAgICAgICAgJzxkaXYgc3R5bGU9XCJnaWctZGVidWctZm9vdGVyXCI+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1oaXN0b3J5QnV0dG9uXCI+Li4uPC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1sYXN0TG9nXCI+Jm5ic3A7PC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1kZXRhaWxzQnV0dG9uXCI+Li4uPC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1pbmZvQnV0dG9uXCI+SW5mbzwvZGl2PicsXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctZGVidWctaW1wb3J0QnV0dG9uXCI+PHNwYW4gY2xhc3M9XCJnaWctZGVidWctaW1wb3J0VGV4dFwiPkltcG9ydDwvc3Bhbj48aW5wdXQgY2xhc3M9XCJnaWctZGVidWctaW1wb3J0XCIgdHlwZT1cImZpbGVcIiAvPjwvZGl2PicsXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctZGVidWctZXhwb3J0QnV0dG9uXCI+RXhwb3J0PC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1jbGVhckJ1dHRvblwiPkNsZWFyPC9kaXY+JyxcclxuICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAnPC9kaXY+JyxcclxuICAgIF0uam9pbignJyksXHJcbn07XHJcbiIsImltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNEZWJ1ZyBmcm9tICdzcmMvdXRpbHMvR2lneWEuSnMuUGx1Z2lucy5EZWJ1Zy9hcHAvRGVidWdQbHVnaW4xJztcclxuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc0RlYnVnXzEgZnJvbSAnc3JjL3V0aWxzL0dpZ3lhLkpzLlBsdWdpbnMuRGVidWcvYXBwL0RlZmF1bHRDc3MnO1xyXG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zRGVidWdfMiBmcm9tICdzcmMvdXRpbHMvR2lneWEuSnMuUGx1Z2lucy5EZWJ1Zy9hcHAvVGVtcGxhdGVzJztcclxuXHJcbmRlY2xhcmUgY29uc3QgZ2lneWE6IGFueTtcclxuaWYgKCFnaWd5YS5fKSB7XHJcbiAgICBnaWd5YS5fID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zLmRlYnVnKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMuZGVidWcgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5kZWJ1Zy5EZWJ1Z1BsdWdpbikge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLmRlYnVnLkRlYnVnUGx1Z2luID0ge307XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLmRlYnVnLCBHaWd5YV9QbHVnaW5zRGVidWcsIEdpZ3lhX1BsdWdpbnNEZWJ1Z18xLCBHaWd5YV9QbHVnaW5zRGVidWdfMik7XHJcblxyXG5naWd5YS5fLlVJLmF0dGFjaFBsdWdpbihHaWd5YV9QbHVnaW5zRGVidWcuRGVidWdQbHVnaW4sICdzb2NpYWxpemUnLCAnZGVidWcnLCAnc2hvd0RlYnVnVUknKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==