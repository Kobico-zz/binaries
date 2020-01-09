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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/Gigya.Js.Plugin/app/index.ts");
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

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css":
/*!**************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gigya-consent-title {\r\n     font-weight: bold;\r\n     display: block;\r\n     font-weight: 700;\r\n     font-size: 15px;\r\n     font-family: arial;\r\n }\r\n.gigya-consent-subtitle {\r\n    font-weight: bold;\r\n    display: block;\r\n    font-weight: 700;\r\n    font-size: 13px;\r\n    font-family: arial;\r\n     }\r\n\r\n.gigya-consent-text {\r\n    display: inline-block;\r\n}\r\n.gigya-composite-control-captcha-widget iframe {\r\n    width: 100%;\r\n}\r\n#FunCaptcha {\r\n    text-align: center;\r\n}\r\n.gigya-reset *, div.gigya-reset, .gigya-reset span, .gigya-reset a:hover, .gigya-reset a:visited, .gigya-reset a:link, .gigya-reset a:active {\r\n    border: none;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    color: inherit;\r\n    text-decoration: none;\r\n    width: auto;\r\n    float: none;\r\n    -moz-border-radius: 0;\r\n    border-radius: 0;   \r\n    font-family: arial;\r\n    font-size: 12px;\r\n    color: #333333;\r\n    text-align: left;\r\n}\r\n\r\n.gigya-screen .gigya-error-msg {\r\n    color: #DD4B39;\r\n    font-size: 11px;\r\n    display: block;\r\n    visibility: hidden;\r\n}\r\n\r\n.gigya-screen .gigya-error-msg.gigya-error-msg-active {\r\n    color: #DD4B39;\r\n    font-size: 11px;\r\n    display: block;\r\n    visibility: visible;\r\n}\r\n\r\n.gigya-screen .gigya-terms-error,\r\n.gigya-screen input.gigya-error,\r\n.gigya-screen input[type=text].gigya-error,\r\n.gigya-screen input[type=password].gigya-error,\r\n.gigya-screen input[type=email].gigya-error,\r\n.gigya-screen select.gigya-error {\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    border: 1px solid #DD4B39;\r\n    -webkit-box-shadow: none !important;\r\n\t-moz-box-shadow: none !important;\r\n\tbox-shadow: none !important;\r\n}\r\n\r\n.gigya-screen input.gigya-error[type=checkbox],\r\n .gigya-screen input.gigya-error[type=radio]{\r\n    padding: 0;\r\n}\r\n\r\n.gigya-screen input[disabled],\r\n.gigya-screen input:disabled {\r\n    background-color: #e1e1e1;\r\n    color: #4a4a4a;\r\n    border-color: #cccccc;\r\n}\r\n\r\ndiv.gigya-attach-file-upload-form {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    font-size: 50px;\r\n    cursor: pointer;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n}\r\n\r\ndiv.gigya-photo-upload-form > input {\r\n    font-size: 500px;\r\n    direction: rtl;\r\n    height: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.gigya-password-strength-bubble .gig-balloon-nub {\r\n    background-image: url('${imgBase}/screenSet/triangle_left.png');\r\n    height: 16px;\r\n    width: 10px;\r\n    left: +2px;\r\n}\r\n.gigya-password-strength-bubble .gig-balloon-nub-up {\r\n    background-image: url('${imgBase}/screenSet/triangle_up.png');\r\n    height: 10px;\r\n    width: 16px;\r\n    top: +2px;\r\n}\r\n.gigya-password-strength-bubble .gig-balloon-nub-right {\r\n    background-image: url('${imgBase}/screenSet/triangle_right.png');\r\n    height: 16px;\r\n    width: 10px;\r\n    left: -2px;\r\n}\r\n.gigya-password-strength-bubble .gig-balloon-nub-down {\r\n    background-image: url('${imgBase}/screenSet/triangle_down.png');\r\n    height: 10px;\r\n    width: 16px;\r\n    top: -2px;\r\n}\r\n.gigya-password-strength-bubble .gig-balloon-frame {\r\n    background-color: #F3F5F6;\r\n    -webkit-border-radius: 2px;\r\n    -moz-border-radius: 2px;\r\n    border-radius: 2px;\r\n    border: 1px solid #BFCFDA;\r\n    -webkit-box-shadow: inset 0 0 1px 1px RGBA(0,0,0,0.05);\r\n    -moz-box-shadow: inset 0 0 1px 1px RGBA(0,0,0,0.05);\r\n    box-shadow: inset 0 0 1px 1px RGBA(0,0,0,0.05);\r\n}\r\n\r\n.gigya-password-strength-bubble .gig-balloon {\r\n    position: relative;\r\n}\r\n.gigya-password-strength-bubble.gig-balloon-left .gig-balloon {\r\n    left: +10px;\r\n    top: +3px;\r\n}\r\n.gigya-password-strength-bubble.gig-balloon-right .gig-balloon {\r\n    left: -10px;\r\n    top: +3px;\r\n}\r\n.gigya-password-strength-bubble.gig-balloon-up .gig-balloon {\r\n    left: -5px;\r\n    top: +17px;\r\n}\r\n.gigya-password-strength-bubble.gig-balloon-down .gig-balloon {\r\n    left: -5px;\r\n    top: -12px;\r\n}\r\n\r\n.gigya-passwordStrength-text {\r\n    text-align: center;\r\n}\r\n\r\nspan.gigya-passwordStrength-text {\r\n    font-weight: bold;\r\n    display: inline-block;\r\n}\r\n\r\ndiv.gigya-passwordStrength-text-requirements {\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: 8px;\r\n}\r\n\r\nspan.gigya-passwordStrength-scoreText {\r\n    margin-left: 3px;\r\n}\r\n\r\n.gigya-passwordStrength-too_weak .gigya-passwordStrength-scoreText {\r\n    color: #e76468;\r\n}\r\n.gigya-passwordStrength-weak .gigya-passwordStrength-scoreText {\r\n    color: #e76468;\r\n}\r\n.gigya-passwordStrength-fair .gigya-passwordStrength-scoreText {\r\n    color: #d99b4b;\r\n}\r\n.gigya-passwordStrength-strong .gigya-passwordStrength-scoreText {\r\n    color: #4ababc;\r\n}\r\n.gigya-passwordStrength-very_strong .gigya-passwordStrength-scoreText {\r\n    color: #4ababc;\r\n}\r\n\r\ndiv.gigya-passwordStrength-bar {\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: #b6b6b6;\r\n    margin-top: 8px;\r\n}\r\n\r\ndiv.gigya-passwordStrength-bar-too_weak {\r\n    width: 20%;\r\n    height: 100%;\r\n    background-color: #e76468;\r\n}\r\n\r\ndiv.gigya-passwordStrength-bar-weak {\r\n    width: 40%;\r\n    height: 100%;\r\n    background-color: #e76468;\r\n}\r\n\r\ndiv.gigya-passwordStrength-bar-fair {\r\n    width: 60%;\r\n    height: 100%;\r\n    background-color: #d99b4b;\r\n}\r\n\r\ndiv.gigya-passwordStrength-bar-strong {\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: #4ababc;\r\n}\r\n\r\ndiv.gigya-passwordStrength-bar-very_strong {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #4ababc;\r\n}\r\n\r\n.gigya-calculate-size {\r\n    position: absolute !important;\r\n    -ms-zoom: 1 !important;\r\n    zoom: 1 !important;\r\n    left: 10px !important;\r\n    top: -1000px !important;\r\n}\r\n\r\n.gigya-calculate-size div.gigya-captcha {\r\n    min-width: 318px;\r\n    min-height: 80px;\r\n    _width: 318px;\r\n    _height: 80px;\r\n}\r\n.gigya-calculate-size div.gigya-captcha.v2 {\r\n    min-height: 80px;\r\n    _height: 80px;\r\n}\r\n\r\n.gigya-calculate-size div.gigya-social-login {\r\n    min-width: 110px;\r\n    min-height: 120px;\r\n    _width: 110px;\r\n    _height: 120px;\r\n}\r\n\r\n.gigya-calculate-size div.gigya-tfa {\r\n    min-width: 325px;\r\n    min-height: 200px;\r\n    _width: 325px;\r\n    _height: 200px;\r\n}\r\n\r\ndiv.gigya-container {\r\n    display: none;\r\n}\r\n\r\n    div.gigya-container.gigya-container-enabled {\r\n        display: block;\r\n    }\r\n\r\ndiv.gigya-loginID-availability {\r\n    line-height: 18px;\r\n    background-repeat: no-repeat;\r\n    background-position: left center;\r\n}\r\n\r\ndiv.gigya-loginID-availability-available {\r\n    padding-left: 17px;\r\n    background-image: url('${imgBase}/accounts/ok.png');\r\n    color: #4FA373;\r\n}\r\n\r\ndiv.gigya-loginID-availability-not-available {\r\n    padding-left: 16px;\r\n    background-image: url('${imgBase}/accounts/error.png');\r\n    color: #DD4B39;\r\n}\r\n\r\ndiv.gigya-loginID-availability-progress {\r\n    padding-left: 20px;\r\n    background-image: url('${imgBase}/accounts/smallLoader.gif');\r\n    color: #666666;\r\n}\r\n\r\ndiv.gigya-profile-photo {\r\n    border-radius: 3px;\r\n}\r\n\r\n.gigya-calculate-size div.gigya-profile-photo {\r\n    min-width: 64px;\r\n    min-height: 64px;\r\n}\r\n\r\ndiv.gigya-screen-dimmer {\r\n    position: absolute;\r\n    opacity: 0.5;\r\n    filter: 'alpha(opacity=50)';\r\n    background-color: #FFFFFF;\r\n}\r\n\r\ndiv.gigya-screen-loader {\r\n    position: absolute;\r\n    background: transparent url('${imgBase}/accounts/bigLoader.gif') no-repeat center center;\r\n    min-height:32px;\r\n    min-width:32px;\r\n}\r\n\r\ndiv.gigya-screen-dialog-content {\r\n    overflow: auto;\r\n    padding: 25px;\r\n}\r\n\r\ndiv.gigya-screen-dialog-mobile div.gigya-composite-control-captcha-widget {\r\n    padding: 0;\r\n}\r\n\r\ndiv.gigya-screen-dialog-mobile .gigya-screen {\r\n    width: 100%;\r\n}\r\n\r\ndiv.gigya-secret-question {\r\n    display: none;\r\n}\r\n\r\ndiv.gigya-photo-upload {\r\n    height: 63px;\r\n    width: 300px;\r\n    zoom: 1;\r\n}\r\n\r\ndiv.gigya-photo-upload-button {\r\n    display: inline-block;\r\n    zoom: 1;\r\n    margin: 0 8px 8px 0;\r\n    font-weight: normal;\r\n    border: 1px solid #CECECE;\r\n    cursor: pointer;\r\n    padding: 0 12px;\r\n    color: #333333;\r\n    font-weight: bold;\r\n    border-radius: 4px;\r\n    line-height: 28px;\r\n    background: #F2F2F2;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#FFFFFF\", endColorstr=\"#F2F2F2\");\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#F2F2F2));\r\n    background: -moz-linear-gradient(top, #FFFFFF, #F2F2F2);\r\n}\r\n\r\n    div.gigya-photo-upload-button:hover {\r\n        background: #FFFFFF;\r\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#F2F2F2\", endColorstr=\"#FFFFFF\");\r\n        background: -webkit-gradient(linear, left top, left bottom, from(#F2F2F2), to(#FFFFFF));\r\n        background: -moz-linear-gradient(top, #F2F2F2, #FFFFFF);\r\n    }\r\n\r\ndiv.gigya-photo-upload-text {\r\n    font-size: 11px;\r\n    color: #666666;\r\n}\r\n\r\ndiv.gigya-photo-upload-image {\r\n    border-radius: 6px;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    width: 64px;\r\n    height: 64px;\r\n    background-color: #F2F2F2;\r\n    float: left;\r\n    margin-right: 8px;\r\n}\r\n\r\ndiv.gigya-photo-upload-path {\r\n    white-space: nowrap;\r\n    width: 107px;\r\n    vertical-align: middle;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    padding-right: 10px;\r\n    background-position: right;\r\n    background-repeat: no-repeat;\r\n    display: inline-block;\r\n    *display: inline;\r\n    zoom: 1;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.gigya-screen-caption {\r\n    border-bottom: 1px solid #dbdbdb;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #333;\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.gigya-error-display {\r\n    display: none;\r\n}\r\n\r\n    .gigya-error-display.gigya-error-display-active {\r\n        display: block;\r\n    }\r\n\r\n.gigya-hidden {\r\n    display: none !important;\r\n}\r\n\r\n.gigya-screen .gigya-tfa input[type=text] {\r\n    margin: 5px 0px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    border: 1px solid #CCCCCC;\r\n}\r\n\r\n    .gigya-screen .gigya-tfa input[type=text]:focus, .gigya-screen .gigya-tfa input[type=text]:focus {\r\n        border-color: #87B9EA;\r\n    }\r\n\r\n    .gigya-show-checkmark.gigya-valid {\r\n        background-image: url('${imgBase}/screenSet/checkmarkValid.png');\r\n        background-position-x: 100%;\r\n        background-position-y: 50%;\r\n        background-position: right 5px center;\r\n        background-repeat: no-repeat;\r\n        padding-right: 25px;\r\n    }\r\n\r\n    .gigya-show-checkmark.gigya-valid.gigya-empty {\r\n        background-image: none;\r\n        padding-right: 5px;\r\n    }\r\n\r\n    .gigya-show-checkmark.gigya-pending {\r\n        background-image: url('${imgBase}/screenSet/checkmarkPending.gif');\r\n        background-position-x: 100%;\r\n        background-position-y: 50%;\r\n        background-position: right 5px center;\r\n        background-repeat: no-repeat;\r\n        padding-right: 25px;\r\n    }\r\n\r\n/* If changed, update UI Builder too. */\r\n.gigya-screen .gigya-composite-control-image {\r\n    overflow: hidden;\r\n}\r\n.gigya-image {\r\n    background-repeat: no-repeat;\r\n    box-sizing: content-box;\r\n    background-position: center;\r\n    min-height: 10px;\r\n}\r\n.gigya-image[data-background-size=\"fit\"] {\r\n    background-size: contain;\r\n}\r\n.gigya-image[data-background-size=\"fit-horizontally\"] {\r\n    background-size: 100% auto;\r\n}\r\n.gigya-image[data-background-size=\"fit-vertically\"] {\r\n    background-size: auto 100%;\r\n}\r\n.gigya-image[data-background-size=\"stretch\"] {\r\n    background-size: 100% 100%;\r\n}\r\n\r\n/*IE8*/\r\n.gigya-ie8 .gigya-layout-cell {\r\n    overflow: hidden;\r\n    margin-left: -1px!important;\r\n}\r\n\r\n.gigya-ie8 .gigya-attach-file-upload-form .gigya-attach-file-upload-file-input {\r\n    width: 1000px;\r\n}\r\n\r\n.gigya-ie8 .gigya-calculate-size div.gigya-profile-photo {\r\n    _width: 64px;\r\n    _height: 64px;\r\n}\r\n\r\n.gigya-ie8 div.gigya-photo-upload {\r\n    *display: inline;\r\n}\r\n\r\n.gigya-ie8 div.gigya-photo-upload-button {\r\n    *display: inline;\r\n}\r\n.gigya-ie8 .gigya-screen .gigya-placeholder {\r\n    color: #A9A9BB;\r\n    padding-left: 5px;\r\n    text-indent: 0;\r\n}\r\n.gigya-ie8 .gigya-placeholder:focus {\r\n    padding-left: 5px;\r\n}\r\n.gigya-ie8 .gigya-screen .gigya-input-text:focus {\r\n    padding-left: 5px;\r\n    text-indent: 0;\r\n}\r\n.gigya-ie8 .gigya-screen.gigya-input-text, .gigya-ie8 .gigya-screen .gigya-input-text.gigya-error {\r\n    padding-top: 12px;\r\n}\r\n\r\n/*IE9*/\r\n.gigya-ie9 .gigya-screen input.gigya-input-text, \r\n.gigya-ie9 .gigya-screen input.gigya-input-password {\r\n    padding-top: 1px;\r\n    text-indent: 0;   \r\n    padding-bottom: 5px;\r\n}\r\n\r\n.gigya-ie9 .gigya-screen .gigya-input-text:focus, .gigya-ie9 .gigya-screen .gigya-input-password:focus {\r\n    box-shadow: 0px 0px 5px 0px #1d87ff;\r\n    border: 1px solid #87B9EA;\r\n    /*padding-left: 5px;*/\r\n    text-indent: 0;\r\n}\r\n\r\n.gigya-ie9 .gigya-screen input.gigya-input-text.gigya-placeholder, .gigya-ie9 .gigya-screen input.gigya-input-password.gigya-placeholder {\r\n    color: #A9A9BB;\r\n    padding-top: 5px;\r\n     text-indent: 0;\r\n    /*padding-left: 4px;*/\r\n}\r\n\r\n/*IE10*/\r\n.gigya-ie10 .gigya-screen input.gigya-input-text, \r\n.gigya-ie10 .gigya-screen input.gigya-input-password {\r\n    padding-top: 1px;   \r\n}\r\n\r\n/*remove bottom padding for outline when focused (not needed anyway)*/\r\n.gigya-screen .forgot-password-cell a,\r\n.gigya-screen .gigya-composite-control.gigya-forgotPassword,\r\n.gigya-screen .gigya-composite-control.gigya-change-password-link,\r\n.gigya-screen .gigya-composite-control.gigya-composite-control-link{\r\n    padding-bottom: 0px;\r\n}\r\n.gigya-screen .gigya-array-manager.disable-delete > .gigya-array-template > .buttons-wrapper button.gigya-array-remove-btn {\r\n    display: none;\r\n}\r\n.gigya-screen .gigya-composite-control-array-widget {\r\n    margin: 10px 0;\r\n}\r\n.gigya-screen .gigya-composite-control-array-widget .gigya-composite-control-array-widget {\r\n    margin: 10px;\r\n}\r\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template {\r\n    padding: 10px 0 10px 0;\r\n}\r\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template:not(:last-of-type) {\r\n    border-bottom: 1px #C1C1C1 solid;\r\n}\r\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template .buttons-wrapper {\r\n    text-align: right;\r\n}\r\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button {\r\n    background: none;\r\n    outline: none!important;\r\n    color: #1371b9;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n}\r\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button.hidden {\r\n    display: none;\r\n}\r\n.gigya-screen .gigya-disabled-text {\r\n    color: #8a8a8a;\r\n    cursor: default;\r\n}\r\n\r\n.gigya-screen .gigya-disabled-text:hover {\r\n    text-decoration: none;\r\n    cursor: default;\r\n}\r\n\r\n.gigya-screen .gigya-disabled-text:active {\r\n    color: #8a8a8a;\r\n    cursor: default;\r\n}\r\n"

/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/BasePlugin.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/BasePlugin.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ModalDialog_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/ModalDialog */ "./src/core/Gigya.Js.Plugin/app/helpers/ModalDialog.ts");
var PluginStyles_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/PluginStyles */ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts");
var LoadDimmer_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer */ "./src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer.ts");
var Poller_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/Poller */ "./src/core/Gigya.Js.Plugin/app/helpers/Poller.ts");
var resources_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/resources */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/resources.ts");
var PollerActions_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/PollerActions */ "./src/core/Gigya.Js.Plugin/app/helpers/PollerActions.ts");
var DOM_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/DOM */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/DOM.ts");
var CloseReasons_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CloseReasons */ "./src/core/Gigya.Js.Plugin/app/CloseReasons.ts");
var CssUtils_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CssUtils */ "./src/core/Gigya.Js.Plugin/app/CssUtils.ts");
var language_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/languages/language */ "./src/core/Gigya.Js.Plugin/app/Utils/languages/language.ts");
var GSErrors_1 = __webpack_require__(/*! ../../Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var keyboard_1 = __webpack_require__(/*! ../../Gigya.Js/app/Utils/keyboard */ "./src/core/Gigya.Js/app/Utils/keyboard.ts");
exports.cssFlags = {};
var BasePlugin = /** @class */ (function (_super) {
    tslib_1.__extends(BasePlugin, _super);
    // constructing
    function BasePlugin(params, explicitParams, injectionInfo) {
        var _this = _super.call(this, params, explicitParams, false) || this;
        _this.params = params;
        _this.explicitParams = explicitParams;
        _this.injectionInfo = injectionInfo;
        _this._pixelRatio = BasePlugin.globalPixelRatio;
        _this._imgBase = BasePlugin.globalImgBase;
        _this._imgExt = 'png';
        _this.MOBILE_MODAL_MIN_WIDTH = 400;
        _this.lang = _this.params.lang;
        _this._style = PluginStyles_1.PluginStyle.modern;
        // Polling
        _this._poller = new Poller_1.Poller();
        _this.POLL_INTERVAL = 150;
        _this.config = window.gigya.utils.object.merge([_this.injectionInfo, _this.getConfig()]);
        _this.localizedJsName = _this.getTranslationJsName();
        return _this;
    }
    // Events
    BasePlugin.prototype.onRefreshExternalComponentsEvent = function () {
        // this should be protected [after rewrite of screensetPlugin]
        return this.getEvent('onRefreshExternalComponentsEvent');
    };
    BasePlugin.prototype.refreshExternalComponents = function () {
        this.dispatchPluginEvent('onRefreshExternalComponentsEvent');
    };
    BasePlugin.prototype.getTranslationJsName = function () {
        var jsName = this.config.jsName;
        jsName = jsName.split('_v')[0]; // remove version specific
        if (jsName.indexOf('.js') === -1)
            jsName = jsName + '.js';
        return jsName;
    };
    /// ** starting plugin process - start ***
    BasePlugin.prototype.start = function () {
        var _this = this;
        if (!this.params.containerID && !this.config.allowModal) {
            this.dispatchInvalidParamError('containerID');
        }
        else {
            // Check if the container exists or the plugin should be drawn as modal
            if (!this.params.containerID) {
                this.isModal = true;
                this.params = window.gigya.utils.object.merge([this.config.defaultModalParams, this.params]);
            }
            else {
                this.container = document.getElementById(this.params.containerID);
                if (this.container) {
                    this.container.innerHTML = '';
                    this.containerID = this.params.containerID;
                }
                else {
                    this.dispatchInvalidParamError('containerID');
                    return;
                }
            }
        }
        // If required params are missing, dispatch an error and stop plugin initialization
        if (!this.validateParams())
            return;
        window.gigya.logger.group("init " + this.injectionInfo.name + " (" + this.containerID + ")").endWhen(new gigya.Promise(function (r) {
            _this.initUI();
            if (_this.params._noInit) {
                _this.loadComplete();
                r();
            }
            else {
                // Abstract initialization, invoking 'onLoad' event when finished
                _this.init(function (isSucceed) {
                    _this.loadComplete(isSucceed);
                    r();
                });
            }
        }));
    };
    BasePlugin.prototype.initUI = function () {
        var _this = this;
        // Initializing templates & css.
        this._templates = resources_1.getTemplates(['base', this.config.name]);
        this._css = resources_1.getCss(['base', this.config.name]);
        // Calculating if mobile ui.
        var deviceType = window.gigya._.DeviceTypes._undefined;
        if (this.params.deviceType)
            deviceType = window.gigya._.DeviceTypes[this.params.deviceType.toLowerCase()];
        deviceType = deviceType || this.getConfig().defaultDeviceType || window.gigya._.DeviceTypes.desktop;
        this.params.deviceType = window.gigya._.DeviceTypes[deviceType];
        this.isMobileUI = deviceType == window.gigya._.DeviceTypes.mobile || (deviceType == window.gigya._.DeviceTypes.auto && window.gigya.localInfo.isMobile && window.gigya.localInfo.isMobileApp);
        // Getting reading direction.
        this.isRtl = this.lang == 'he' || this.lang == 'ar';
        this.initContainer();
        if (this._style != PluginStyles_1.PluginStyle.none)
            this.injectCss();
        // Setting poller for auto-dispose.
        this._poller.addActions(new PollerActions_1.InvalidPropertyAction(this, 'container', function () { return _this.dispose(); }));
    };
    BasePlugin.prototype.loadComplete = function (isSucceed) {
        var _this = this;
        if (isSucceed === void 0) { isSucceed = true; }
        if (!isSucceed) {
            return;
        }
        this.dispatchPluginEvent('load');
        if (this.container) {
            if (this.isModal) {
                if (this._modalDialog && !this.config.disableModalContainerInit)
                    this._modalDialog.showAll();
                if (this.config.enableViewportPolling) {
                    this._poller.addActions(new PollerActions_1.ViewportSizeAction(function (old, curr) {
                        /// changing modal to mobile-modal when viewport's small enough
                        //if (curr.width < this.MOBILE_MODAL_MIN_WIDTH)
                        //    this._modalDialog.changeToMobile();
                        //else
                        //    this._modalDialog.changeToWeb();
                        _this.onViewportSizeChanged(old, curr);
                        _this.centerModal();
                        _this.refreshExternalComponents();
                    }));
                }
            }
            else {
                // If the plugin is not modal, the width is set, size polling is enabled, and width ends with '%' character, start polling for container size change
                if (this.config.enableSizePolling && (!this.params.width || this.params.width.toString().indexOf('%', this.params.width.length - 1) !== -1)) {
                    this._poller.addActions(new PollerActions_1.ContainerSizeAction(this.container, function (old, curr) {
                        _this.resizePlugin(old, curr); // calling abstract method.
                        _this.refreshExternalComponents();
                    }));
                }
            }
            // Start polling!
            if (this._poller.hasActions())
                this._poller.start(this.POLL_INTERVAL);
        }
    };
    BasePlugin.prototype.initContainer = function () {
        // Create the popup container if needed, otherwise use containerID
        if (this.isModal) {
            this.initModalContainer();
        }
        else {
            // Set the container size
            window.gigya.utils.DOM.setSize(this.container, this.params.width, this.params.height, false);
            this.addMetaDataClasses(this.container);
            if (this.params.responsive)
                this.container.style.width = 'auto';
            this._loadingIndicator = new LoadDimmer_1.LoadDimmer(this.container);
        }
    };
    BasePlugin.prototype.initModalContainer = function () {
        this._style = this.getPluginStyle();
        this.createModalDialog();
        this._captionElement = this._modalDialog.getCaptionContainer();
        this.container = this._modalDialog.getContentContainer();
        this.containerID = this.container.id;
        this._loadingIndicator = this._modalDialog.getLoadingIndicator();
    };
    // adding meta-data classes [for CSS selectors] for the top element of the plugin .
    BasePlugin.prototype.addMetaDataClasses = function (topElement) {
        var style = this.getPluginStyle();
        switch (style) {
            case PluginStyles_1.PluginStyle.legacy:
            case PluginStyles_1.PluginStyle.modern:
                window.gigya.utils.DOM.addClassToElement(topElement, PluginStyles_1.getPluginStyleClass(style));
                break;
            default:
                break;
        }
        DOM_1.addBrowserInfoClassesToElement(topElement);
    };
    BasePlugin.prototype.getPluginStyle = function () {
        return PluginStyles_1.PluginStyle[this.params.dialogStyle] || this.config.defaultDialogStyle || this._style;
    };
    BasePlugin.prototype.setContainerMinSize = function () {
        if (this.params.height && this.params.height != 'auto' && this.params.height.indexOf('%') == -1)
            this.container.style.minHeight = this.params.height + 'px';
        if (this.params.width && this.params.width != 'auto' && this.params.width.indexOf('%') == -1)
            this.container.style.minWidth = this.params.width + 'px';
    };
    BasePlugin.prototype.createModalDialog = function () {
        var _this = this;
        // Getting caption
        var title;
        if (this.params.captionText)
            title = this.params.captionText;
        else if (this.params.captionTextKey)
            title = this.getText(this.params.captionTextKey);
        else
            title = '&nbsp;';
        var closeImage;
        // Getting dim effect.
        var dimModal;
        if (typeof this.params.dimDialogBackground != 'undefined') {
            dimModal = this.params.dimDialogBackground;
        }
        else if (this.config.defaultModalParams && typeof this.config.defaultModalParams.dimDialogBackground != 'undefined') {
            dimModal = this.config.defaultModalParams.dimDialogBackground;
        }
        else {
            dimModal = false;
        }
        var photoUrl;
        var css = this.params.modalCss;
        var isLegacy = false;
        if (!css) {
            switch (this._style) {
                case PluginStyles_1.PluginStyle.modern:
                    css = this.getCss().modern_modal;
                    photoUrl = this.getPhotoFullName('gm/close');
                    break;
                case PluginStyles_1.PluginStyle.legacy:
                    isLegacy = true;
                    css = this.getCss().legacy_modal;
                    photoUrl = this._imgBase + 'gm/CloseButton.' + this._imgExt;
                    break;
                case PluginStyles_1.PluginStyle.none:
                    css = '';
                    photoUrl = this.getPhotoFullName('gm/close');
                    break;
                default:
                    throw new Error('unrecognized dialog style');
            }
        }
        css = window.gigya.utils.templates.fill(css, { imgBase: this._imgBase });
        // Getting close-image
        if (this.params.closeImage) {
            closeImage = this.params.closeImage;
        }
        else {
            closeImage = window.gigya.utils.templates.fill(this.getTemplates().modalCloseButton, {
                imgUrl: this.params['closeImageUrl'] || photoUrl,
                imgHeight: this.params['closeImageHeight'] || 15,
                imgWidth: this.params['closeImageWidth'] || 15,
            });
        }
        this._modalDialog = new ModalDialog_1.ModalDialog(this.injectionInfo.methodName, this.isMobileUI, {
            modalTemplate: this.params.modalTemplate || (isLegacy ? this.getTemplates().legacyModal : this.getTemplates().modal),
            modalCss: css,
            captionText: title,
            closeImage: closeImage,
            dimDialogBackground: dimModal,
            newModal: this.params.newModal,
            onModalClose: function (reason) { return _this.close(CloseReasons_1.CloseReasons[reason]); },
        }, isLegacy);
        this.addMetaDataClasses(this._modalDialog.getModalDialogContainer());
        var hotKeyData = {
            key: keyboard_1.Keys.escape,
        };
        window.gigya.utils.keyboard.onHotKeyClicked(hotKeyData, function () {
            _this.close();
        });
    };
    BasePlugin.prototype.injectCss = function () {
        /// TODO: can we get rid of this function?
        var finalCss = '';
        var cssPrefix = this.params['cssPrefix'];
        var defaultCss = this.getCss();
        var jsName = this.config.jsName;
        if (!exports.cssFlags[jsName])
            exports.cssFlags[jsName] = {};
        var cssDidLoadFlags = exports.cssFlags[jsName];
        if (cssPrefix || !this.addedCss) {
            finalCss = this.addCssIfDidntLoad('reset', defaultCss, cssDidLoadFlags, finalCss);
            if (this.isRtl)
                finalCss = this.addCssIfDidntLoad('resetRtl', defaultCss, cssDidLoadFlags, finalCss);
            finalCss = this.addCssIfDidntLoad('global', defaultCss, cssDidLoadFlags, finalCss);
            if (this.isRtl)
                finalCss = this.addCssIfDidntLoad('globalRtl', defaultCss, cssDidLoadFlags, finalCss);
            if (this.isMobileUI) {
                finalCss = this.addCssIfDidntLoad('mobile', defaultCss, cssDidLoadFlags, finalCss);
                if (this.isRtl)
                    finalCss = this.addCssIfDidntLoad('mobileRtl', defaultCss, cssDidLoadFlags, finalCss);
            }
            else {
                finalCss = this.addCssIfDidntLoad('nonMobile', defaultCss, cssDidLoadFlags, finalCss);
                if (this.isRtl)
                    finalCss = this.addCssIfDidntLoad('nonMobileRtl', defaultCss, cssDidLoadFlags, finalCss);
            }
            if (finalCss)
                CssUtils_1.addCss(finalCss, cssPrefix);
            this.addedCss = true;
        }
        if (this.config.hasMobileUI && this.isMobileUI && this.container) {
            this.container.style.width = '100%';
        }
    };
    /// ** starting plugin process - end ***
    /// ** "Abstract" methods  - start ***
    BasePlugin.prototype.init = function (loadedCallback) {
        this.error(window.gigya._.BaseObject.NOT_IMPLEMENTED_ERROR, GSErrors_1.GSErrors.NOT_SUPPORTED);
        loadedCallback(false);
    };
    BasePlugin.prototype.resizePlugin = function (old, curr) {
        // override to make plugin responsive to container resize
    };
    BasePlugin.prototype.onViewportSizeChanged = function (old, curr) {
        // override to make plugin responsive to viewport (window) resize
    };
    /// ** "Abstract" methods  - end ***
    /// ** Virtual methods - start ***
    BasePlugin.prototype.shouldClose = function () {
        return true;
    };
    /// ** Virtual methods - end ***
    /// ** Service methods - start ***
    BasePlugin.prototype.centerModal = function () {
        if (this._modalDialog && !this.isMobileUI) {
            this._modalDialog.center();
        }
    };
    BasePlugin.prototype.resizeModal = function (size) {
        if (this.isModal && this._modalDialog && !this.isMobileUI) {
            if (this.getPluginStyle() === PluginStyles_1.PluginStyle.legacy) {
                // revert size to only work with pixel sizes, and in use min-height/width
                if (size.height) {
                    size.minHeight = parseInt(size.height) + 'px';
                    delete size.height;
                }
                if (size.width) {
                    size.minWidth = parseInt(size.width) + 'px';
                    delete size.width;
                }
            }
            var prevSize = { height: this.container.clientHeight, width: this.container.clientWidth };
            this._modalDialog.resize(size);
            var newSize = { height: this.container.clientHeight, width: this.container.clientWidth };
            //this.resizePlugin(prevSize, newSize); // The plugin should handle this himself since he is the one that initiated the resize
            if (!this.config.disableModalContainerInit)
                this.centerModal();
        }
    };
    BasePlugin.prototype.getPhotoFullName = function (photoName, pixelRatio, ext, imgBase) {
        if (pixelRatio === void 0) { pixelRatio = this._pixelRatio; }
        if (ext === void 0) { ext = this._imgExt; }
        if (imgBase === void 0) { imgBase = this._imgBase; }
        return imgBase + photoName + '_x' + pixelRatio + '.' + ext;
    };
    BasePlugin.prototype.dispatchPluginEvent = function (name, eventObj) {
        if (eventObj === void 0) { eventObj = {}; }
        window.gigya.logger.info(this.injectionInfo.name + " dispatches " + name + " event:", eventObj);
        return this.dispatchEvent(name, eventObj);
    };
    BasePlugin.prototype.getTemplates = function () {
        return this._templates;
    };
    BasePlugin.prototype.getCss = function () {
        return this._css;
    };
    BasePlugin.prototype.addCssIfDidntLoad = function (cssName, defaultCss, loadingFlags, currentCss) {
        if (defaultCss[cssName] && !loadingFlags[cssName]) {
            loadingFlags[cssName] = true;
            return (currentCss += ' ' + defaultCss[cssName]);
        }
        return currentCss;
    };
    // Translations
    BasePlugin.prototype.getText = function (key, replaceStr, withStr) {
        var text = key;
        if (this.params.customLang && this.params.customLang[key]) {
            text = this.params.customLang[key];
        }
        else {
            text = language_1.getLocalizedText(this.localizedJsName, key, this.lang);
        }
        return text.replace(replaceStr, withStr);
    };
    BasePlugin.prototype.toString = function () {
        return this.params.containerID + '.' + this.injectionInfo.name;
    };
    BasePlugin.prototype.error = function (msg, errorCode, e) {
        if (errorCode === void 0) { errorCode = GSErrors_1.GSErrors.CLIENT_LOG; }
        var statusMessage = e && e.response && e.response.statusMessage;
        var errorInfo = {
            statusMessage: statusMessage,
            errorMessage: msg,
            errorCode: errorCode,
            errorDetails: this.toString(),
            containerID: this.params.containerID,
            params: this.params,
            info: e,
        };
        this.warn(msg, e);
        this.dispatchErrorFromResponse(errorInfo);
    };
    // Closes the plugin - raises the 'hide' event and enable cancelling by derived plugins with overriding of 'shouldClose'
    BasePlugin.prototype.close = function (reason, eventObj) {
        if (!eventObj) {
            eventObj = {};
        }
        eventObj.reason = reason;
        this.dispatchPluginEvent('hide', eventObj);
        window.gigya.logger.info("closing " + this.injectionInfo.name + " (reason: " + reason + ")");
        if (this.shouldClose()) {
            this.dispose();
        }
    };
    /// ** Service methods - end ***
    /// Lifecycle
    BasePlugin.prototype.dispose = function () {
        if (this._isDisposed) {
            return;
        }
        this._poller.dispose();
        if (this.container) {
            this.container.innerHTML = '';
        }
        if (this._modalDialog) {
            this._modalDialog.dispose();
        }
        if (this._loadingIndicator) {
            this._loadingIndicator.dispose();
        }
        this.container = null;
        window.gigya._.plugins.removePluginInstance(this.params, this.injectionInfo);
        _super.prototype.dispose.call(this);
    };
    // Images
    BasePlugin.globalPixelRatio = window['devicePixelRatio'] ? Math.min(Math.ceil(window['devicePixelRatio']), 3) : 1;
    BasePlugin.globalImgBase = window.gigya._.getImgCdnResource();
    return BasePlugin;
}(window.gigya._.BaseObject));
exports.BasePlugin = BasePlugin;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/CloseReasons.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/CloseReasons.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var CloseReasons;
(function (CloseReasons) {
    CloseReasons[CloseReasons["pendingError"] = 0] = "pendingError";
    CloseReasons[CloseReasons["missing"] = 1] = "missing";
    CloseReasons[CloseReasons["finished"] = 2] = "finished";
    CloseReasons[CloseReasons["canceled"] = 3] = "canceled";
    CloseReasons[CloseReasons["backButton"] = 4] = "backButton";
    CloseReasons[CloseReasons["canceledByParent"] = 5] = "canceledByParent";
    CloseReasons[CloseReasons["skip"] = 6] = "skip";
    CloseReasons[CloseReasons["error"] = 7] = "error";
    CloseReasons[CloseReasons["cancel"] = 8] = "cancel";
})(CloseReasons = exports.CloseReasons || (exports.CloseReasons = {}));


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/CollectionUtils.ts":
/*!*********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/CollectionUtils.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function LastIndexOf(arr, val, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    for (var i = arr.length; --i >= fromIndex;) {
        if (arr[i] === val)
            return i;
    }
    return -1;
}
exports.LastIndexOf = LastIndexOf;
function ForEach(arr, action) {
    for (var i = 0; i < arr.length; ++i)
        action(arr[i], i, arr);
}
exports.ForEach = ForEach;
function ForEachProp(obj, action) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name))
            action(obj[name], name, obj);
    }
}
exports.ForEachProp = ForEachProp;
function Some(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (condition(arr[i], i, arr))
            return true;
    }
    return false;
}
exports.Some = Some;
function Every(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (!condition(arr[i], i, arr))
            return false;
    }
    return true;
}
exports.Every = Every;
function EveryProp(obj, condition) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name) && !condition(obj[name], name, obj))
            return false;
    }
    return true;
}
exports.EveryProp = EveryProp;
function Map(arr, action) {
    var result = new Array();
    ForEach(arr, function (item, idx, arr) { return result.push(action(item, idx, arr)); });
    return result;
}
exports.Map = Map;
function FirstIndex(arr, condition) {
    var result;
    Some(arr, function (item, index, arr) {
        if (condition(item, index, arr)) {
            result = index;
            return true;
        }
        return false;
    });
    return result;
}
exports.FirstIndex = FirstIndex;
function First(arr, condition) {
    return arr[FirstIndex(arr, condition)];
}
exports.First = First;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/CssResources.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/CssResources.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.legacy_modal = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/css/legacy_modal.css */ "./src/core/Gigya.Js.Plugin/app/css/legacy_modal.css");
exports.modern_modal = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/css/modern_modal.css */ "./src/core/Gigya.Js.Plugin/app/css/modern_modal.css");
exports.defaultCSS = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css");


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/CssUtils.ts":
/*!**************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/CssUtils.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function fixCss(css) {
    if (window.gigya.localInfo.isIE7 || (window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode)) {
        css = css.replace(/display:inline-block/g, 'display:inline-block;zoom:1;*display:inline');
    }
    return css.replace(/gradient\((.*?),(.*?)\)/g, 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");' +
        'background: linear-gradient(top,  $1,  $2);' +
        'background: -ms-linear-gradient(top left, $1, $2);' +
        'background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));' +
        'background: -moz-linear-gradient(top,  $1,  $2)');
}
exports.fixCss = fixCss;
function addCss(rules, prefix) {
    if (!rules || rules == '')
        return;
    if (rules instanceof Array)
        rules = rules.join(' ');
    //    rules = fixCss(rules);
    if (prefix)
        rules = rules.replace(/([^\s}]*\.gig)/g, prefix + ' $1');
    var style = document.createElement('style');
    style.type = 'text/css';
    var rulesNode = document.createTextNode(rules);
    if (style.styleSheet) {
        if (rulesNode.value != null) {
            style.styleSheet.cssText = rulesNode.value;
        }
        else {
            style.styleSheet.cssText = rulesNode.nodeValue;
        }
    }
    else {
        style.appendChild(rulesNode);
    }
    var head = document.getElementsByTagName('head');
    var body = document.body;
    (head.length > 0 ? head[0] : body).appendChild(style);
}
exports.addCss = addCss;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/DOMUtils.ts":
/*!**************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/DOMUtils.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function replaceLinksWithHTMLElements(textData) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g;
    var links = textData.match(regex);
    if (links)
        for (var i = 0; i < links.length; i++) {
            var sanitizedLink = window.gigya.utils.sanitize.sanitizeAttribute(links[i]);
            textData = textData.replace(sanitizedLink, '<a href="' + sanitizedLink + '" target="_blank" rel="nofollow">' + sanitizedLink + '</a>');
        }
    return textData;
}
exports.replaceLinksWithHTMLElements = replaceLinksWithHTMLElements;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/HtmlResources.ts":
/*!*******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/HtmlResources.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.legacyModal = __webpack_require__(/*! ./html/legacyModal.html */ "./src/core/Gigya.Js.Plugin/app/html/legacyModal.html");
exports.modal = __webpack_require__(/*! ./html/modal.html */ "./src/core/Gigya.Js.Plugin/app/html/modal.html");
exports.modalCloseButton = __webpack_require__(/*! ./html/modalCloseButton.html */ "./src/core/Gigya.Js.Plugin/app/html/modalCloseButton.html");


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/PluginStyles.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var PluginStyle;
(function (PluginStyle) {
    PluginStyle[PluginStyle["_undefined"] = 0] = "_undefined";
    PluginStyle[PluginStyle["none"] = 1] = "none";
    PluginStyle[PluginStyle["legacy"] = 2] = "legacy";
    PluginStyle[PluginStyle["modern"] = 3] = "modern";
})(PluginStyle = exports.PluginStyle || (exports.PluginStyle = {}));
function getPluginStyleClass(style) {
    return 'gigya-style-' + PluginStyle[style];
}
exports.getPluginStyleClass = getPluginStyleClass;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/PluginUtils0.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/PluginUtils0.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var CssUtils_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CssUtils */ "./src/core/Gigya.Js.Plugin/app/CssUtils.ts");
window.gigya.utils.functions.createAlias('gigya.global.addCSS', CssUtils_1.addCss);
window.gigya.utils.functions.createAlias('gigya.pluginUtils.css.fixCss', CssUtils_1.fixCss);


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/URLUtils.ts":
/*!**************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/URLUtils.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function addOrReplaceHashFragment(url, param, value) {
    url = removeHashFragment(url, param);
    url = addHashFragment(url, param, value);
    return url;
}
exports.addOrReplaceHashFragment = addOrReplaceHashFragment;
function addHashFragment(url, param, value) {
    var sign = '#';
    // Check if there is already an hashfragment exist
    if (url.indexOf('#') != -1)
        if (url.indexOf(param) == -1)
            // Check if the exist hashfragment is the same as we want to add - so we need or reaplce it
            sign = '&';
        else {
            var oldValue = param + '=' + this.getHashParamValue(url, param);
            url.replace(oldValue, param + '=' + value);
            return url;
        }
    return url + sign + param + '=' + value;
}
exports.addHashFragment = addHashFragment;
function removeHashFragment(url, param) {
    // Check if the url conatin hash fragment
    if (url.indexOf('#') == -1)
        return url;
    // Get the hash value if exist
    var fullHashQuery = url.split('#')[1];
    var hashParamValue = getHashParamValue(url, param);
    if (hashParamValue)
        fullHashQuery = fullHashQuery.replace(param + '=' + hashParamValue, '');
    // Remove the hash param in case it was a hash param without '='
    fullHashQuery = fullHashQuery.replace('&' + param, '');
    fullHashQuery = fullHashQuery.replace('#' + param, '#');
    if (fullHashQuery.length > 0 && (fullHashQuery[0] += '&'))
        fullHashQuery = fullHashQuery.substring(1, fullHashQuery.length);
    // Replace the current full Hash Query with the new one without the given param to removed and it's value if exist
    var URLWithoutHash = url.split('#')[0];
    // Chekc if the hash query left with no params
    if (fullHashQuery.length == 0)
        return URLWithoutHash;
    return URLWithoutHash + '#' + fullHashQuery;
}
exports.removeHashFragment = removeHashFragment;
function getHashParamValue(url, param) {
    // Add the '=' sign to match the param and not maybe the same string in the URL not as a param
    param += '=';
    if (url.indexOf('#') == -1 || url.indexOf(param, url.indexOf('#')) == -1)
        return null;
    // find the next & or the end of the param string
    var startOfParam = url.indexOf(param, url.indexOf('#'));
    var endOfParam = url.indexOf('&', startOfParam);
    // If the param was untill the end of the string - set the endOfParam to the end of the string too
    if (endOfParam == -1)
        endOfParam = url.length;
    return url.substring(startOfParam + param.length, endOfParam);
}
exports.getHashParamValue = getHashParamValue;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/DOM.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/DOM.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var CssUtils_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CssUtils */ "./src/core/Gigya.Js.Plugin/app/CssUtils.ts");
function addBrowserInfoClassesToElement(el) {
    // add prefix for each browser property: ('chrome ios')=> 'gigya-chrome gigya-ios'
    var browserClasses = 'gigya-' + window.gigya.localInfo.currentBrowser;
    if (window.gigya.localInfo.isIOS) {
        browserClasses += ' ios'; // added global ios class [for all versions]
    }
    browserClasses = browserClasses.replace(/ /g, ' gigya-');
    if (window.gigya.localInfo.isNativeMobileApp)
        browserClasses = 'gigya-native-mobile-app ' + browserClasses;
    window.gigya.utils.DOM.addClassToElement(el, browserClasses);
}
exports.addBrowserInfoClassesToElement = addBrowserInfoClassesToElement;
function setTextboxSubmitButton(elTextbox, elButton) {
    var fnOnPress = function (e) {
        var charCode;
        if (e && e.which) {
            e = e;
            charCode = e.which;
        }
        else {
            e = event;
            charCode = e.keyCode;
        }
        if (charCode == 13) {
            elButton.click();
        }
    };
    window.gigya.utils.DOM.addEventListener(elTextbox, 'keyup', fnOnPress);
    window.gigya.utils.DOM.addEventListener(elButton, 'keyup', fnOnPress);
}
exports.setTextboxSubmitButton = setTextboxSubmitButton;
function getRelativePosition(position, size, direction, margin, flip) {
    var relativePosition = { top: 0, left: 0, bottom: 0, right: 0 };
    if (direction === 'bottom') {
        relativePosition.top = position.bottom + margin;
        relativePosition.left = flip ? position.right - size.w : position.left;
    }
    else if (direction === 'top') {
        relativePosition.top = position.top - size.h - margin;
        relativePosition.left = flip ? position.right - size.w : position.left;
    }
    else if (direction === 'left') {
        relativePosition.top = flip ? position.bottom - size.h : position.top;
        relativePosition.left = position.left - size.w - margin;
    }
    else {
        relativePosition.top = flip ? position.bottom - size.h : position.top;
        relativePosition.left = position.right + margin;
    }
    relativePosition.bottom = relativePosition.top + size.h;
    relativePosition.right = relativePosition.left + size.w;
    return relativePosition;
}
exports.getRelativePosition = getRelativePosition;
function placePopoverNearElement(elTarget, container, direction, margin, flip, adjustDirection) {
    var targetPosition = window.gigya.utils.DOM.getElementPosition(elTarget);
    var size = { w: container.offsetWidth, h: container.offsetHeight };
    var position = this.getRelativePosition(targetPosition, size, direction, margin, flip);
    if (adjustDirection && !window.gigya.utils.viewport.isRectFullyVisible(position)) {
        var opposite = {
            bottom: 'top',
            left: 'right',
            right: 'left',
            top: 'bottom',
        };
        var newPosition = this.getRelativePosition(targetPosition, size, opposite[direction], margin);
        if (window.gigya.utils.viewport.isRectHorizontallyVisible(newPosition))
            position = newPosition;
    }
    if (!window.gigya.utils.viewport.isRectHorizontallyVisible(position)) {
        var newPosition = this.getRelativePosition(targetPosition, size, direction, margin, !flip);
        if (window.gigya.utils.viewport.isRectHorizontallyVisible(newPosition))
            position = newPosition;
    }
    container.style.left = '' + position.left + 'px';
    container.style.top = '' + position.top + 'px';
    //container.style.minWidth = elPopover.offsetWidth + 'px';
}
exports.placePopoverNearElement = placePopoverNearElement;
function addPopoverNearElement(elTarget, elPopover, direction, margin, flip, adjustDirection, animation, fnWhenRemoved, removeOnClickExlcludedElements) {
    if (direction === void 0) { direction = 'bottom'; }
    if (margin === void 0) { margin = 0; }
    if (flip === void 0) { flip = false; }
    if (adjustDirection === void 0) { adjustDirection = true; }
    if (animation === void 0) { animation = null; }
    if (fnWhenRemoved === void 0) { fnWhenRemoved = null; }
    if (removeOnClickExlcludedElements === void 0) { removeOnClickExlcludedElements = null; }
    if (!elTarget || !elPopover) {
        return;
    }
    var container = document.createElement('div');
    container.appendChild(elPopover);
    container.style.position = 'absolute';
    container.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
    container.style.left = '-1000px'; // Draw outside of screen to get the size
    document.body.appendChild(container);
    this.placePopoverNearElement(elTarget, container, direction, margin, flip, adjustDirection);
    removeElementOnDocClickOrEscape(container, function (e) {
        elTarget.focus();
        fnWhenRemoved(e);
    }, removeOnClickExlcludedElements);
    if (animation && typeof window.gigya.pluginUtils.animation[animation] === 'function')
        window.gigya.pluginUtils.animation[animation](elPopover);
    return container;
}
exports.addPopoverNearElement = addPopoverNearElement;
function removeElementOnDocClickOrEscape(el, fnCallback, excludedElements) {
    if (fnCallback === void 0) { fnCallback = null; }
    if (excludedElements === void 0) { excludedElements = null; }
    if (!el) {
        return;
    }
    var fnRemove = function (e) {
        var wasOpen = el && el.parentNode;
        if (wasOpen)
            el.parentNode.removeChild(el);
        if (fnCallback)
            fnCallback(e, wasOpen);
    };
    var arAllExcluded = [el];
    if (excludedElements) {
        arAllExcluded = arAllExcluded.concat(excludedElements);
    }
    this.performOnDocClickOrEscape(fnRemove, arAllExcluded, event);
}
exports.removeElementOnDocClickOrEscape = removeElementOnDocClickOrEscape;
function hideElementOnDocClick(el, fnCallback, excludedElements) {
    if (fnCallback === void 0) { fnCallback = null; }
    if (excludedElements === void 0) { excludedElements = null; }
    if (!el)
        return;
    var fnHide = function () {
        el.style.display = 'none';
        if (fnCallback)
            fnCallback();
    };
    var arAllExcluded = [el];
    if (excludedElements)
        arAllExcluded.concat(excludedElements);
    this.performOnDocClickOrEscape(fnHide, arAllExcluded);
}
exports.hideElementOnDocClick = hideElementOnDocClick;
var _clickableCssAdded = false;
function performOnDocClickOrEscape(fnCallback, excludedElements) {
    if (fnCallback === void 0) { fnCallback = null; }
    if (excludedElements === void 0) { excludedElements = null; }
    var fnOnPerform = function (e) {
        window.gigya.utils.DOM.removeClassFromElement(document.body, 'gig-clickable');
        window.gigya.utils.DOM.removeEventListener(document, 'mousedown', fnOnDocClick);
        window.gigya.utils.DOM.removeEventListener(document, 'keydown', fnOnDocKeydown);
        if (fnCallback)
            fnCallback(e);
    };
    var fnOnDocClick = function (e) {
        var target = e.target || e.srcElement;
        var clickInDiv = false;
        while (target && target.parentNode) {
            if (excludedElements && excludedElements.indexOf(target) != -1) {
                clickInDiv = true;
                break;
            }
            target = target.parentNode;
        }
        if (!clickInDiv) {
            fnOnPerform(e);
        }
    };
    var fnOnDocKeydown = function (e) {
        if ((e.which || e.keyCode) == 27) {
            fnOnPerform(e);
        }
    };
    if ((window.gigya.localInfo.isIOS && window.gigya.localInfo.isSafari) || window.gigya.localInfo.isIOSWebView) {
        if (!_clickableCssAdded) {
            CssUtils_1.addCss('*.gig-clickable {cursor: pointer;}', null);
            _clickableCssAdded = true;
        }
        window.gigya.utils.DOM.addClassToElement(document.body, 'gig-clickable');
    }
    window.gigya.utils.DOM.addEventListener(document, 'mousedown', fnOnDocClick);
    window.gigya.utils.DOM.addEventListener(document, 'keydown', fnOnDocKeydown);
}
exports.performOnDocClickOrEscape = performOnDocClickOrEscape;
function hideElement(el) {
    el.style.display = 'none';
}
exports.hideElement = hideElement;
function showElement(el) {
    el.style.display = 'block';
}
exports.showElement = showElement;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/DomAttributes.ts":
/*!****************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/DomAttributes.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function replaceLinksWithHTMLElements(textData, className) {
    var regex = /(?:(?:https?):\/\/|www\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.;]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.;])*(?:\([-A-Z0-9+&@#\/%=~_;|$?!:,.;]*\)|[A-Z0-9+&@#\/%=~_|;$])/gim;
    var links = textData.match(regex);
    var resText = '';
    if (links) {
        for (var i = 0; i < links.length; i++) {
            var startLink = '';
            if (links[i].indexOf('http:') === -1 && links[i].indexOf('https:') === -1) {
                startLink = 'http://';
            }
            var classAttr = '';
            if (className) {
                classAttr = " class=\"" + className + "\"";
            }
            var tempText = textData.substr(0, textData.indexOf(links[i]) + links[i].length);
            textData = textData.substr(tempText.length, textData.length - tempText.length);
            var cleanLink = links[i].replace(/&#173;/g, '');
            resText += tempText.replace(links[i], "<a" + classAttr + " href=\"" + startLink + cleanLink + "\" target=\"_blank\" rel=\"nofollow\">" + links[i] + "</a>");
        }
    }
    if (textData.length > 0) {
        resText += textData;
    }
    return resText;
}
exports.replaceLinksWithHTMLElements = replaceLinksWithHTMLElements;
function setAttribute(el, attrName, attrVal) {
    if (attrName === 'class') {
        el.className = attrVal;
        return;
    }
    // IE11 cannot remove "value" attribute and possibly other attributes. Calling "removeAttribute" on IE does nothing in some cases.
    // For this reason we first set the attribute and then call removeAttribute if it was null.
    // In all browsers, the final result is that the attribute continues to exist and returns an empty string.
    // This is because NO browser can remove the "value" attribute (and possibly some other attributes).
    // Instead, the non-IE browsers just set the value to an empty string.
    el.setAttribute(attrName, attrVal);
    if (attrVal === null) {
        el.removeAttribute(attrName);
    }
}
exports.setAttribute = setAttribute;
function getAttribute(el, attrName) {
    var attributeResult;
    if (window.gigya.localInfo.isIE8) {
        attributeResult = el.getAttribute(attrName);
    }
    else {
        // #77595 - IE "getAttributeNS" returns empty string instead of null when attribute does not exist.
        if (!el.hasAttributeNS('', attrName)) {
            return null;
        }
        attributeResult = el.getAttributeNS('', attrName);
    }
    return attributeResult;
}
exports.getAttribute = getAttribute;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM.ts":
/*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var imagePositions_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions.ts");
function addIframeShim(el, parent) {
    if (el['shim'])
        return;
    var shim = document.createElement('IFRAME');
    shim['frameborder'] = '0';
    shim['frameBorder'] = '0';
    shim['allowtransparency'] = true;
    shim.style.position = 'absolute';
    shim['update'] = function (updateDimensions) {
        if (shim && el) {
            if (parent) {
                shim.style.left = el.offsetLeft + 'px';
                shim.style.top = el.offsetTop + 'px';
            }
            else {
                var pos = imagePositions_1._GetElementPos(el);
                shim.style.left = pos.left + 'px';
                shim.style.top = pos.top + 'px';
            }
            if (updateDimensions) {
                shim.style.width = el.offsetWidth + 'px';
                shim.style.height = el.offsetHeight + 'px';
            }
        }
    };
    shim['update'](true);
    if (parent) {
        shim.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
        el.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
        parent.appendChild(shim);
    }
    else {
        window.gigya.utils.DOM.appendToBody(shim);
    }
    el['shim'] = shim;
}
exports.addIframeShim = addIframeShim;
function removeIframeShim(el) {
    if (el && el.shim && el.shim.parentNode) {
        el.shim.parentNode.removeChild(el.shim);
        el.shim = null;
    }
}
exports.removeIframeShim = removeIframeShim;
function scaleImage(img, size, dontCenter, fnOnImgLoad) {
    var imgObj = img;
    if (!img.width || !img.height) {
        var imgObj = new Image();
        imgObj.src = img.src;
    }
    var fnOnLoad = function () {
        if (imgObj.width == 0) {
            window.setTimeout(fnOnLoad, 100);
        }
        else {
            if (imgObj.width > imgObj.height) {
                img.style.width = size + 'px';
            }
            else {
                img.style.height = size + 'px';
            }
            img.style.display = '';
            if (fnOnImgLoad)
                fnOnImgLoad(img);
            if (!dontCenter) {
                img.style.marginTop = (size - img.offsetHeight) / 2 + 'px';
                img.style.marginLeft = (size - img.offsetWidth) / 2 + 'px';
            }
        }
    };
    if (imgObj.width > 0) {
        fnOnLoad();
    }
    else {
        img.style.display = 'none';
        imgObj.onload = function () {
            window.setTimeout(fnOnLoad, 50);
        };
    }
}
exports.scaleImage = scaleImage;
function fillUserActionTemplate(userAction, o) {
    for (var p in userAction) {
        var field = userAction[p];
        if (typeof field == 'string') {
            userAction[p] = window.gigya.utils.templates.fill(userAction[p], o);
        }
        if (p == 'mediaItems') {
            for (var i = 0; i < field.length; i++) {
                if (field[i].src) {
                    field[i].src = window.gigya.utils.templates.fill(field[i].src, o);
                }
            }
        }
    }
    return userAction;
}
exports.fillUserActionTemplate = fillUserActionTemplate;
function setPlaceholder(textbox, placeholder, className) {
    if (!textbox)
        return;
    var onblur = function () {
        if (this.value == '') {
            if (className) {
                window.gigya.utils.DOM.addClassToElement(textbox, className);
            }
            else {
                textbox.style.color = '#585858';
            }
            this.value = placeholder;
            this.placeholderCleared = false;
        }
    };
    var onfocus = function () {
        if (!this.placeholderCleared) {
            if (className) {
                window.gigya.utils.DOM.removeClassFromElement(textbox, className);
            }
            else {
                textbox.style.color = '';
            }
            this.value = '';
            this.placeholderCleared = true;
            if (textbox.setSelectionRange) {
                //to fix a bug where sometimes the caret disappears while the textbox is focused.
                textbox.focus();
                textbox.setSelectionRange(0, 0);
            }
            else if (textbox.createTextRange) {
                var range = textbox.createTextRange();
                range.collapse(true);
                range.moveEnd('character', 0);
                range.moveStart('character', 0);
                range.select();
            }
        }
    };
    textbox.refreshPlaceholder = function () {
        if (textbox.value) {
            if (className)
                window.gigya.utils.DOM.removeClassFromElement(textbox, className);
            else
                textbox.style.color = '';
            this.placeholderCleared = true;
        }
        else {
            if (className)
                window.gigya.utils.DOM.addClassToElement(textbox, className);
            else
                textbox.style.color = '#585858';
            textbox.value = placeholder;
            this.placeholderCleared = false;
        }
    };
    window.gigya.utils.DOM.addEventListener(textbox, 'blur', onblur);
    window.gigya.utils.DOM.addEventListener(textbox, 'focus', onfocus);
    window.gigya.utils.DOM.addEventListener(textbox, 'change', onblur);
    textbox.refreshPlaceholder();
}
exports.setPlaceholder = setPlaceholder;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/UI.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/UI.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports._closeComponent = function (rid, dispatchCloseEvent) {
    var oRID = window.gigya.socialize._parseRID(rid);
    var req = oRID.req;
    if (window.gigya.socialize.GrayOut)
        window.gigya.socialize.GrayOut(false);
    var ifr = document.getElementById('gigya_ifr_' + req.container.id);
    if (ifr != null)
        ifr.style.display = 'none';
    if (dispatchCloseEvent) {
        window.gigya.events.dispatchForWidget({ eventName: 'close' }, req.p);
    }
    req.container.style.display = 'none';
};


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/UIHelpers.ts":
/*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/UIHelpers.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function addOrReplaceHashFragment(url, param, value) {
    url = removeHashFragment(url, param);
    url = addHashFragment(url, param, value);
    return url;
}
exports.addOrReplaceHashFragment = addOrReplaceHashFragment;
function addHashFragment(url, param, value) {
    var sign = '#';
    // Check if there is already an hashfragment exist
    if (url.indexOf('#') != -1)
        if (url.indexOf(param) == -1)
            // Check if the exist hashfragment is the same as we want to add - so we need or reaplce it
            sign = '&';
        else {
            var oldValue = param + '=' + this.getHashParamValue(url, param);
            url.replace(oldValue, param + '=' + value);
            return url;
        }
    return url + sign + param + '=' + value;
}
exports.addHashFragment = addHashFragment;
function removeHashFragment(url, param) {
    // Check if the url contains hash fragment.
    if (url.indexOf('#') == -1)
        return url;
    // Get the hash value if exist
    var fullHashQuery = url.split('#')[1];
    var hashParamValue = getHashParamValue(url, param);
    if (hashParamValue)
        fullHashQuery = fullHashQuery.replace(param + '=' + hashParamValue, '');
    // Remove the hash param in case it was a hash param without '='
    fullHashQuery = fullHashQuery.replace('&' + param, '');
    fullHashQuery = fullHashQuery.replace('#' + param, '#');
    if (fullHashQuery.length > 0)
        fullHashQuery = fullHashQuery.substring(1, fullHashQuery.length);
    // Replace the current full Hash Query with the new one without the given param to removed and it's value if exist
    var URLWithoutHash = url.split('#')[0];
    // Check if the hash query left with no params
    if (fullHashQuery.length == 0)
        return URLWithoutHash;
    return URLWithoutHash + '#' + fullHashQuery;
}
exports.removeHashFragment = removeHashFragment;
function getHashParamValue(url, param) {
    // Add the '=' sign to match the param and not maybe the same string in the URL not as a param
    param += '=';
    if (url.indexOf('#') == -1 || url.indexOf(param, url.indexOf('#')) == -1)
        return null;
    // find the next & or the end of the param string
    var startOfParam = url.indexOf(param, url.indexOf('#'));
    var endOfParam = url.indexOf('&', startOfParam);
    // If the param was untill the end of the string - set the endOfParam to the end of the string too
    if (endOfParam == -1)
        endOfParam = url.length;
    return url.substring(startOfParam + param.length, endOfParam);
}
exports.getHashParamValue = getHashParamValue;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var layoutStyles_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles.ts");
var layoutText_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText.ts");
function _fixGrayPosition() {
    var dark = document.getElementById('darkenScreenObject');
    if (dark) {
        var de = document.documentElement;
        var db = document.body;
        var scrollTop = de.scrollTop;
        if (scrollTop == 0)
            scrollTop = db.scrollTop;
        var scrollLeft = de.scrollLeft;
        if (scrollLeft == 0)
            scrollLeft = db.scrollLeft;
        var clientHeight = de.clientHeight;
        if (clientHeight == 0)
            clientHeight = db.clientHeight;
        var clientWidth = de.clientWidth;
        if (clientWidth == 0)
            clientWidth = db.clientWidth;
        if (window.gigya.localInfo.isIE6)
            clientWidth -= 1;
        dark.style.top = scrollTop.toString();
        dark.style.left = scrollLeft.toString();
    }
}
exports._fixGrayPosition = _fixGrayPosition;
function _fixGraySize() {
    var dark = document.getElementById('darkenScreenObject');
    if (dark) {
        var de = document.documentElement;
        var db = document.body;
        var clientHeight = de.clientHeight;
        if (clientHeight == 0)
            clientHeight = db.clientHeight;
        var clientWidth = de.clientWidth;
        if (clientWidth == 0)
            clientWidth = db.clientWidth;
        if (window.gigya.localInfo.isIE6)
            clientWidth -= 1;
        dark.style.width = '' + clientWidth + 'px';
        dark.style.height = '' + clientHeight + 'px';
    }
}
exports._fixGraySize = _fixGraySize;
function _createJSPopup(rid, resolver, captionText, noCaption) {
    var oRID = _parseRID(rid);
    var req = oRID.req;
    var params = req.p;
    var conf = req.c;
    if (window.gigya.utils.validation.isExplicitFalse(params['showCaption']))
        noCaption = true;
    var container = document.getElementById(params['containerID']);
    req.container = container;
    var oBgStyle = resolver.Resolve('+/config/body/background');
    var oCaptionStyle = resolver.Resolve('+/config/body/captions');
    var s = '<table role="presentation" style="' + layoutStyles_1.getStyleString(oBgStyle) + ';empty-cells:show;" cellpadding="0" cellspacing="0" >';
    if (!noCaption) {
        s +=
            '<tr style="' +
                layoutStyles_1.getStyleString(oCaptionStyle) +
                '"><td><table role="presentation" style="width:100%" width="100%" cellpadding="0" cellspacing="0"><tr id="' +
                params['containerID'] +
                '_caption"><td style="vertical-align:middle"><div style="' +
                layoutStyles_1.getStyleString(oCaptionStyle) +
                ';padding:7px">' +
                captionText +
                '</div></td><td style="vertical-align:middle">';
        s +=
            '<div align="right" style="padding-right: 7px; cursor: pointer;' +
                layoutStyles_1.getStyleString(oCaptionStyle) +
                '"><img onclick="gigya.services.socialize._closeComponent(\'' +
                rid +
                '\', true);"  src="' +
                window.gigya._.getCdnResource('/gs/i/HTMLLogin/closeIcon.gif') +
                '" alt="" /></div></td></tr></table></td></tr><tr><td colspan="2">';
    }
    else {
        s += '<tr><td>';
    }
    s += '<div id="' + params['containerID'] + '_container"></div></td></tr></table>';
    container.innerHTML = s;
    var p = {};
    var c = {};
    for (var param in params) {
        p[param] = params[param];
    }
    for (param in conf) {
        c[param] = conf[param];
    }
    var caption = document.getElementById(p['containerID'] + '_caption');
    p['height'] = p['height'] - oBgStyle['frame-thickness'] * 2;
    if (!noCaption)
        p['height'] -= caption.offsetHeight;
    p['width'] = p['width'] - oBgStyle['frame-thickness'] * 2;
    window.gigya.utils.DOM._popupContainers[p['containerID']] = container;
    p['containerID'] = p['containerID'] + '_container';
    return { c: c, p: p };
}
exports._createJSPopup = _createJSPopup;
function _createJSPopup2(rid, resolver, borderSize, base, captionText, addBorder) {
    var oRID = _parseRID(rid);
    var req = oRID.req;
    var params = req.p;
    var conf = req.c;
    var container = document.getElementById(params['containerID']);
    req.container = container;
    var oCaptionStyle = resolver.Resolve('+/config/body/captions');
    if (!borderSize)
        borderSize = 10;
    if (!base)
        base = window.gigya._.getCdnResource('/gs/i/Dialog/DialogBg_');
    var imgStyle = 'width:' + borderSize + 'px;height:' + borderSize + 'px';
    var borderString;
    if (addBorder) {
        borderString = '1px solid #555555';
    }
    var s = '<table role="presentation" style="font-size:1px;padding:0px;margin:0px;vertical-align:middle;font-size:1px;line-height:1px;empty-cells:show;" cellpadding="0" cellspacing="0" >';
    s +=
        '<tr><td height="' +
            borderSize +
            '" style="font-size:1px"><div style="height:' +
            borderSize +
            'px"><img src="' +
            base +
            'TopLeft.png" style="' +
            imgStyle +
            '" alt="" /></div></td><td height="' +
            borderSize +
            '" style="background-image:url(\'' +
            base +
            'filler.png\');bakground-repeat:repeat"></td><td height="' +
            borderSize +
            '" style="font-size:1px;"><div style="height:' +
            borderSize +
            'px"><img style="' +
            imgStyle +
            '" src="' +
            base +
            'TopRight.png" alt="" /></div></td></tr>';
    if (captionText) {
        s +=
            '<tr><td style="background-image:url(\'' +
                base +
                'filler.png\');background-repeat:repeat"></td><td><table width="100%" cellspacing="0" cellpadding="0" style="border-top:' +
                borderString +
                ';border-left:' +
                borderString +
                ';border-right:' +
                borderString +
                ';width:100%;background-color:#FFFFFF"><tr><td style="padding-top:10px;padding-left:10px;' +
                layoutStyles_1.getStyleString(oCaptionStyle) +
                '">' +
                captionText +
                '</td><td align="right" valign="top" style="' +
                layoutStyles_1.getStyleString(oCaptionStyle) +
                '"><div style="padding-right:5px;padding-top:5px;text-align:right;"><img style="cursor:pointer" onclick="gigya.services.socialize._closeComponent(\'' +
                rid +
                '\', true);" src="' +
                base +
                'close.png" alt="" /></div></td></tr></table></td><td style="background-image:url(\'' +
                base +
                'filler.png\');background-repeat:repeat"></td></tr>';
    }
    s +=
        '<tr><td style="background-image:url(\'' +
            base +
            'filler.png\');background-repeat:repeat"></td><td><div style="border-bottom:' +
            borderString +
            ';border-left:' +
            borderString +
            ';border-right:' +
            borderString +
            ';background-color:#FFFFFF" id="' +
            params['containerID'] +
            '_container"></div></td><td style="background-image:url(\'' +
            base +
            'filler.png\');background-repeat:repeat"></td></tr>';
    s +=
        '<tr><td height="' +
            borderSize +
            '" style="font-size:1px;"><div style="height:' +
            borderSize +
            'px"><img style="' +
            imgStyle +
            '" src="' +
            base +
            'BottomLeft.png" alt="" /></div></td><td height="' +
            borderSize +
            '" style="background-image:url(\'' +
            base +
            'filler.png\');bakground-repeat:repeat"></td><td height="' +
            borderSize +
            '" style="font-size:1px;"><div style="height:' +
            borderSize +
            'px"><img style="' +
            imgStyle +
            '" src="' +
            base +
            'BottomRight.png" alt="" /></div></td></tr></table>';
    container.innerHTML = s;
    var p = {};
    var c = {};
    for (var param in params) {
        p[param] = params[param];
    }
    for (param in conf) {
        c[param] = conf[param];
    }
    window.gigya.utils.DOM._popupContainers[p['containerID']] = container;
    p['containerID'] = p['containerID'] + '_container';
    p['height'] = p['height'] - borderSize * 2;
    if (captionText) {
        if (captionText.replace(/ /g, '') == '') {
            p['height'] -= 10;
        }
        else {
            p['height'] -= layoutText_1.measureText(captionText, oCaptionStyle)['h'] + 10;
        }
    }
    p['width'] = p['width'] - borderSize * 2;
    return { c: c, p: p };
}
exports._createJSPopup2 = _createJSPopup2;
function _parseRID(rid) {
    var ridp = rid.split('@');
    var swf = document.getElementById(ridp[2] + '_' + ridp[1]);
    var containerID = ridp[2];
    var container;
    if (null == (container = window.gigya.utils.DOM._pseudoContainers[containerID])) {
        container = document.getElementById(ridp[2]);
    }
    var Reqs = null;
    if (container != null)
        Reqs = container.Reqs;
    var req = null;
    if (Reqs != null)
        req = Reqs[parseInt(ridp[0])];
    return { rid: rid, container: container, Reqs: Reqs, req: req, swf: swf };
}
exports._parseRID = _parseRID;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/animation.ts":
/*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/animation.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var layoutSprites_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts");
function fadeIn(el, opacity) {
    if (opacity === void 0) { opacity = 1; }
    if (el.style.opacity == undefined) {
        el.style.filter = 'alpha(opacity=' + 0 * 100 + ')';
    }
    else {
        el.style.opacity = '0';
    }
    window.setTimeout(function () {
        if (el.style.opacity == undefined) {
            el.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
        }
        else {
            el.style.opacity = opacity + '';
        }
    }, 10);
}
exports.fadeIn = fadeIn;
function slideDown(el) {
    var bp = layoutSprites_1.getClassBordersAndPaddings(el.className);
    var h = el.offsetHeight - bp['h'];
    var originalTransitionProperty = el.style.transitionProperty;
    el.style.maxHeight = '1px';
    el.style.transitionProperty = el.style.webkitTransitionProperty = 'max-height';
    window.setTimeout(function () {
        el.style.maxHeight = h + 'px';
        el.style.transitionProperty = el.style.webkitTransitionProperty = originalTransitionProperty;
    }, 100);
    var fnOnTransitionEnd = function () {
        el.style.maxHeight = '999px';
        window.gigya.utils.DOM.removeEventListener(el, 'transitionend', fnOnTransitionEnd);
        window.gigya.utils.DOM.removeEventListener(el, 'webkitTransitionEnd', fnOnTransitionEnd);
    };
    window.gigya.utils.DOM.addEventListener(el, 'transitionend', fnOnTransitionEnd);
    window.gigya.utils.DOM.addEventListener(el, 'webkitTransitionEnd', fnOnTransitionEnd);
    window.setTimeout(fnOnTransitionEnd, 500);
}
exports.slideDown = slideDown;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/animationService.ts":
/*!*******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/animationService.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var UIPopup_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup.ts");
function GrayOut(vis, opt) {
    var options = opt || {};
    var zindex = options.zindex || 50;
    var opacity = options.opacity || 70;
    var opaque = opacity / 100;
    var bgcolor = options.bgcolor || '#000000';
    var dark = document.getElementById('darkenScreenObject');
    var tbody = document.body;
    if (!dark) {
        var isCompMode = window.gigya.localInfo.isMobile || window.gigya.localInfo.isIE6 || document.compatMode == 'BackCompat';
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop == 0)
            scrollTop = document.body.scrollTop;
        var tnode = document.createElement('div');
        if (isCompMode) {
            tnode.style.position = 'absolute';
            tnode.style.top = '' + scrollTop + 'px';
        }
        else {
            tnode.style.position = 'fixed';
            tnode.style.top = '0px';
        }
        tnode.style.overflow = 'hidden';
        tnode.style.left = '0px';
        tnode.style.display = 'none';
        tnode.id = 'darkenScreenObject';
        tnode.innerHTML = '&#160;';
        tbody.appendChild(tnode);
        dark = document.getElementById('darkenScreenObject');
        if (!window.gigya['attachedFixGray']) {
            window.gigya['attachedFixGray'] = true;
            if (window.addEventListener) {
                window.addEventListener('resize', UIPopup_1._fixGraySize, false);
            }
            if (window['attachEvent']) {
                window['attachEvent']('onresize', UIPopup_1._fixGraySize);
            }
            if (isCompMode) {
                if (window.addEventListener) {
                    window.addEventListener('scroll', UIPopup_1._fixGrayPosition, false);
                }
                if (window['attachEvent']) {
                    window['attachEvent']('onscroll', UIPopup_1._fixGrayPosition);
                }
            }
        }
    }
    if (vis) {
        var vph;
        var vpw;
        if (window.innerHeight) {
            vph = window.innerHeight;
            vpw = window.innerWidth;
        }
        if (typeof vph == 'undefined') {
            var de = document.documentElement;
            vph = de.clientHeight;
            vpw = de.clientWidth;
        }
        if (vpw == 0)
            vpw = tbody.clientWidth;
        if (vph == 0)
            vph = tbody.clientHeight;
        dark.style.opacity = opaque.toString();
        dark.style['MozOpacity'] = opaque;
        dark.style.width = '' + vpw + 'px';
        dark.style.height = '' + vph + 'px';
        dark.style.filter = 'alpha(opacity=' + opacity + ')';
        dark.style.zIndex = zindex;
        dark.style.backgroundColor = bgcolor;
        dark.style.display = 'block';
    }
    else {
        tbody.removeChild(dark);
    }
}
exports.GrayOut = GrayOut;
function hideUI() {
    var params = window.gigya.utils.object.merge([window.gigya.thisScript.globalConf, arguments]);
    GrayOut(false);
    // plugins that extend BasePlugin
    for (var pluginName in window.gigya._.plugins.instances) {
        var plugin = window.gigya._.plugins.instances[pluginName];
        if (plugin['isModal'])
            plugin.dispose();
    }
    // legacy
    for (var containerID in window.gigya.utils.DOM._popupContainers) {
        var container = window.gigya.utils.DOM._popupContainers[containerID];
        if (container != null) {
            container.innerHTML = '';
            if (container.parentNode)
                container.style.display = 'none';
        }
        var ifrel = document.getElementById('gigya_ifr_' + containerID);
        if (null != ifrel) {
            //ifrel.parentNode.removeChild(ifrel);
            ifrel.style.display = 'none';
        }
    }
    //// if no-one makes a big fuss about this being commented out - delete!
    //var fbRoot = document.getElementById('fb-root');
    //if (fbRoot) fbRoot.style.visibility = 'hidden';
    window.gigya.events.global.dispatch({ eventName: 'HideUIRequested' });
    if (typeof params['callback'] == 'function') {
        var oResponse = {
            status: 'OK',
            statusMessage: '',
            operation: 'hideUI',
            context: params['context'],
            errorMessage: '',
            errorCode: 0,
        };
        params['callback'](oResponse);
    }
}
exports.hideUI = hideUI;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/enableSafeCopy.ts":
/*!*****************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/enableSafeCopy.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function enableSafeCopy(el) {
    if (el.addedSafeCopy)
        return;
    window.gigya.utils.DOM.addEventListener(el, 'copy', function (e) {
        //to let users copy URLs without soft hyphens
        e = e || window.event;
        var target = e.target || e.srcElement;
        var nodename = target && target.nodeName ? target.nodeName.toLowerCase() : '';
        if (nodename == 'textarea' || nodename == 'input')
            return;
        var divCopy = document.createElement('div');
        divCopy.style.color = window.getComputedStyle ? window.getComputedStyle(document.body).backgroundColor : '#FFFFFF';
        divCopy.style.fontSize = '0px';
        window.gigya.utils.DOM.appendToBody(divCopy);
        var shyRegex = new RegExp('(&shy;|' + String.fromCharCode(173) + ')', 'g');
        var selection, range2;
        if (window.getSelection) {
            e.stopPropagation();
            selection = window.getSelection();
            var range = selection.getRangeAt(0);
            divCopy.appendChild(range.cloneContents());
            divCopy.innerHTML = divCopy.innerHTML.replace(shyRegex, ''); //it's the soft hyphen char
            selection.selectAllChildren(divCopy);
            var fnRestore = function () {
                divCopy.parentNode.removeChild(divCopy);
                selection.removeAllRanges();
                selection.addRange(range);
            };
        }
        else {
            e.cancelBubble = true;
            selection = window.document['selection'];
            range = selection.createRange();
            divCopy.innerHTML = range['htmlText'];
            divCopy.innerHTML = divCopy.innerHTML.replace(shyRegex, ''); //it's the soft hyphen char
            range2 = document.body['createTextRange']();
            range2.moveToElementText(divCopy);
            range2.select();
            fnRestore = function () {
                divCopy.parentNode.removeChild(divCopy);
                if (range['text'] !== '') {
                    range['select']();
                }
            };
        }
        window.setTimeout(fnRestore, 0);
    });
    el.addedSafeCopy = true;
}
exports.enableSafeCopy = enableSafeCopy;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/globalAnimation.ts":
/*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/globalAnimation.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var layoutSprites_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts");
var DOM_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/DOM */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/DOM.ts");
var GlobalDOM_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM.ts");
var imagePositions_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions.ts");
function showLoader(container, className, h) {
    if (className === void 0) { className = ''; }
    if (h === void 0) { h = undefined; }
    if (container) {
        if (!h)
            h = parseInt(layoutSprites_1.getStyle(container, 'height'));
        container.innerHTML =
            '<div class="' +
                className +
                '" style="height:' +
                h +
                "px;background-image:url('" +
                window.gigya._.getCdnResource('/gs/i/gm/loader.gif') +
                '\'); background-repeat:no-repeat;background-position:center center"></div>';
    }
}
exports.showLoader = showLoader;
function fadeIn(el) {
    if (el.interval) {
        clearInterval(el.interval);
    }
    el.style.opacity = '0';
    el.interval = setInterval(function () {
        var op = parseFloat(el.style.opacity);
        if (op >= 1)
            clearInterval(el.interval);
        el.style.opacity = op + 0.1;
    }, 10);
}
exports.fadeIn = fadeIn;
function getBalloonHTML(body, captionText, w, h, nubY, nubPosition, hideClose, sOnClose, frameID) {
    var nubW = 13;
    var nubH = 25;
    if (!window.gigya.global['addedBalloonCSS']) {
        window.gigya.global['addCSS']([
            '.gig-balloons *, div.gig-balloons, .gig-balloons span, .gig-balloons a:hover, .gig-balloons a:visited, .gig-balloons a:link, .gig-balloons a:active{',
            'border:none; line-height:normal;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;',
            'font-family:arial;font-size:10px;color:#797979;background:none;text-align:left}',
            'div.gig-balloon-frame {',
            'zoom:1;padding:15px 10px 10px 10px; border:1px solid #b4b4b4; min-height:80px; background-color:#FFFFFF; z-index:' +
                window.gigya.utils.DOM.getNextZIndex() +
                ';',
            'box-shadow:0 0 5px RGBA(0,0,0,0.6);-webkit-box-shadow:0 0 5px RGBA(0,0,0,0.6);-moz-box-shadow:0 0 5px RGBA(0,0,0,0.6);}',
            'div.gig-balloon-nub {left:+1px; position:relative;background-image:url("' +
                window.gigya._.getCdnResource('/gs/i/gm/nub.png') +
                '");width:' +
                nubW +
                'px;height:' +
                nubH +
                'px; z-index:' +
                window.gigya.utils.DOM.getNextZIndex() +
                ' }',
            'div.gig-balloon-nub-right { left:-1px; position:relative;background-image:url("' +
                window.gigya._.getCdnResource('/gs/i/gm/nub_right.png') +
                '");width:' +
                nubW +
                'px;height:' +
                nubH +
                'px; z-index:' +
                window.gigya.utils.DOM.getNextZIndex() +
                ' }',
            'div.gig-balloon-nub-up { top:+1px; position:relative;background-image:url("' +
                window.gigya._.getCdnResource('/gs/i/gm/nub_up.png') +
                '");width:' +
                nubH +
                'px;height:' +
                nubW +
                'px; z-index:' +
                window.gigya.utils.DOM.getNextZIndex() +
                ' }',
            'div.gig-balloon-nub-down { top:-1px; position:relative;background-image:url("' +
                window.gigya._.getCdnResource('/gs/i/gm/nub_down.png') +
                '");width:' +
                nubH +
                'px;height:' +
                nubW +
                'px; z-index:' +
                window.gigya.utils.DOM.getNextZIndex() +
                ' }',
            'span.gig-balloon-closeImage { cursor:pointer; float:right;background-image:url("' +
                window.gigya._.getCdnResource('/gs/i/gm/CloseButton.png') +
                '"); width:14px;height:14px; margin:-7px -2px 0 0  }',
            'div.gig-balloon-caption {font-family:arial; font-size: 12px; font-weight:bold; color: #0b81c1; border-bottom: 1px solid #e8e8e8;padding-bottom:2px;}',
            'span.gig-balloon-caption-text {float:left}',
        ]);
        if (window.gigya.localInfo.isIE && !(!window.gigya.localInfo.quirksMode && window.gigya.localInfo.isIE9)) {
            window.gigya.global['addCSS']([
                'div.gig-balloon-frame {',
                '-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color=\'#B4B4B4\');";',
                "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#B4B4B4');}",
                '}',
                'div.gig-balloon-nub-right { left:-5px;}',
            ]);
        }
        window.gigya.global['addedBalloonCSS'] = true;
    }
    var frameStyle = '';
    if (window.gigya.localInfo.quirksMode) {
        var bordersAndPaddings = layoutSprites_1.getClassBordersAndPaddings('gig-balloon-frame');
        if (w)
            w = w + bordersAndPaddings.w;
        if (h)
            h = h + bordersAndPaddings.h;
    }
    if (w)
        frameStyle += 'width: ' + w + 'px;';
    if (h)
        frameStyle += 'height: ' + h + 'px;';
    var nubStyle = '';
    if (nubY) {
        if (nubPosition === 'left' || nubPosition === 'right')
            nubStyle += 'top: ' + nubY + 'px;';
        // ((nubPosition === 'up') || (nubPosition === 'down'))
        else
            nubStyle += 'left: ' + nubY + 'px;';
    }
    var innerHTML = '';
    if (captionText) {
        innerHTML += '<div class="gig-balloon-caption"><span class="gig-balloon-caption-text" style="width:' + (w - 20) + 'px">' + captionText + '</span>';
    }
    else {
        innerHTML += '<div class="gig-balloon-caption" style="border-bottom:none">';
    }
    if (!hideClose && sOnClose) {
        innerHTML +=
            '<span tabindex="0" role="button" class="gig-balloon-closeImage" onclick="' +
                sOnClose +
                '" onkeydown="if((event.which || event.keyCode) == 13) ' +
                sOnClose +
                '"></span>';
    }
    innerHTML +=
        '<div style="clear:both;height:0;width:0;font-size:1px;"><!-- empty divs=100% height IE --></div></div><div class="gig-balloon-body">' +
            body +
            '</div>';
    var s;
    if (!nubY) {
        s = '<div class="gig-balloon gig-balloon-frame" style="' + frameStyle + '">' + innerHTML + '</div>';
    }
    else {
        s = '<table role="presentation" cellpadding="0" cellspacing="0" class="gig-balloon"><tr>';
        if (nubPosition === 'up') {
            s += '<td style=""><div class="gig-balloon-nub-up" style="' + nubStyle + '"></div></td></tr><tr>';
        }
        if (nubPosition === 'left') {
            // check for other values
            s += '<td style="vertical-align:top"><div class="gig-balloon-nub" style="' + nubStyle + '"></div></td>';
        }
        s += '<td style="vertical-align:top"><div id="' + frameID + '" class="gig-balloon-frame" style="' + frameStyle + '">' + innerHTML + '</div></td>';
        if (nubPosition === 'right') {
            s += '<td style="vertical-align:top"><div class="gig-balloon-nub-right" style="' + nubStyle + '"></div></td>';
        }
        if (nubPosition === 'down') {
            s += '</tr><tr><td style="vertical-align:top"><div class="gig-balloon-nub-down" style="' + nubStyle + '"></div></td>';
        }
        s += '</tr></table>';
        s += '<div style="clear:both;height:0;width:0;font-size:1px;"><!-- empty divs=100% height IE --></div>';
    }
    return s;
}
exports.getBalloonHTML = getBalloonHTML;
function createGMBalloon(body, captionText, w, h, nubY, nubPosition, hideClose, id, dontHideOnClick, balloonClass) {
    balloonClass = balloonClass ? 'gig-balloon ' + balloonClass : 'gig-balloon';
    removeGMBalloon();
    var now = new Date().getTime();
    var balloonID = 'gig_gmBalloon_' + now;
    if (id)
        balloonID = id;
    var frameID = balloonID + '_frame';
    var balloonHTML = getBalloonHTML(body, captionText, w, h, nubY, nubPosition, hideClose, 'gigya.global.removeGMBalloon()', frameID);
    var div = document.createElement('div');
    div.className = balloonClass;
    div.style.position = 'absolute';
    div.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
    div.innerHTML = balloonHTML;
    div.id = balloonID;
    // When the balloon is shown, read immediately. This is set to "assertive" instead of "polite" because in all cases where this is used,
    // the text that the user is focusing when the balloon is shown does not need to be read. We need the balloon to be read immediately for good UX.
    // The assertive setting means that the redundant text is not read when the user focuses a GM element.
    div.setAttribute('role', 'alert');
    div.setAttribute('aria-live', 'assertive');
    div.setAttribute('aria-atomic', 'true');
    fadeIn(div);
    window.gigya.utils.DOM.appendToBody(div);
    window.gigya.global['divGMBalloon'] = div;
    if (!dontHideOnClick) {
        window.setTimeout(function () {
            DOM_1.removeElementOnDocClickOrEscape(div);
        }, 50);
    }
    return div;
}
exports.createGMBalloon = createGMBalloon;
function removeGMBalloon(e) {
    var a;
    if (e) {
        a = e.target;
        if (!a)
            a = e.srcElement;
        while (a != null && a.offsetParent && a.id.indexOf(window.gigya.global['divGMBalloon'].id) == -1) {
            a = a['offsetParent'];
        }
    }
    if (!a || a.id.indexOf(window.gigya.global['divGMBalloon'].id) == -1) {
        //to make sure this wasn't triggered by click inside
        try {
            GlobalDOM_1.removeIframeShim(document.getElementById(window.gigya.global['divGMBalloon'].id + '_frame'));
            window.gigya.global['divGMBalloon'].parentNode.removeChild(window.gigya.global['divGMBalloon']);
            if (document['detachEvent']) {
                document['detachEvent']('onclick', removeGMBalloon);
            }
            else if (document.removeEventListener) {
                document.removeEventListener('click', removeGMBalloon, false);
            }
        }
        catch (ex) { }
    }
}
exports.removeGMBalloon = removeGMBalloon;
function putGMBalloonNextTo(el, body, caption, w, h, hideClose, id, dontHideOnClick, preferredOrientations, balloonClass) {
    if (preferredOrientations === void 0) { preferredOrientations = ['left', 'right', 'up', 'down']; }
    if (balloonClass === void 0) { balloonClass = ''; }
    var options = {
        body: body,
        caption: caption,
        w: w,
        h: h,
        hideClose: hideClose,
        id: id,
        dontHideOnClick: dontHideOnClick,
        balloonClass: balloonClass,
    };
    for (var i = 0; i < preferredOrientations.length; i++) {
        if (this.positionGMBalloonNextTo(el, preferredOrientations[i], options))
            break;
    }
}
exports.putGMBalloonNextTo = putGMBalloonNextTo;
function positionGMBalloonNextTo(el, orientation, options) {
    if (orientation === 'left' || orientation === 'right')
        createGMBalloon(options.body, options.caption, options.w, options.h, 47, 'left', options.hideClose, options.id, options.dontHideOnClick, options.balloonClass);
    // up or down orientations
    else
        createGMBalloon(options.body, options.caption, options.w, options.h, 10, 'down', options.hideClose, options.id, options.dontHideOnClick, options.balloonClass);
    var offsetWidth = window.gigya.global['divGMBalloon'].offsetWidth;
    var offsetHeight = window.gigya.global['divGMBalloon'].offsetHeight;
    var pos = imagePositions_1._GetElementPos(el);
    var left;
    var top;
    //var dst = el.style;
    var de = document.documentElement;
    var db = document.body;
    var clientHeight = de.clientHeight;
    if (clientHeight == 0)
        clientHeight = db.clientHeight;
    var clientWidth = de.clientWidth;
    if (clientWidth == 0)
        clientWidth = db.clientWidth;
    if (window.innerHeight) {
        clientHeight = db.scrollHeight && db.scrollHeight < window.innerHeight ? db.scrollHeight : window.innerHeight;
        clientWidth = db.scrollWidth && db.scrollWidth < window.innerWidth ? db.scrollWidth : window.innerWidth;
    }
    var scrl = window.gigya.utils.viewport.getScroll();
    var vpt = scrl.top;
    //var vpl = scrl.left;
    var bottomRightTop = vpt + clientHeight;
    //var bottomRightLeft = vpl + clientWidth;
    var arrowDirection;
    var arrowOffset;
    if (orientation === 'left' || orientation === 'right') {
        arrowOffset = 47;
        top = pos.top + el.offsetHeight / 2 - 47 - 25 / 2;
        if (top + offsetHeight > bottomRightTop) {
            top = bottomRightTop - offsetHeight - 10;
        }
        var leftWithLeftOrientation = pos.left - offsetWidth - 5;
        var leftWithRightOrientation = pos.left + el.offsetWidth + 5;
        if (orientation === 'left') {
            // check that there's enough space on the left
            if (leftWithLeftOrientation > 10) {
                left = leftWithLeftOrientation;
                arrowDirection = 'right';
                options.balloonClass += ' gig-balloon-left';
            }
            else {
                // not enough space for left orientation
                return null;
            }
        }
        else if (clientWidth - leftWithRightOrientation - offsetWidth > 10) {
            // right orientation (bug: https://gigya.tpondemand.com/entity/40001)
            left = leftWithRightOrientation;
            arrowDirection = 'left';
            options.balloonClass += ' gig-balloon-right';
        }
        else {
            return null;
        }
    }
    else if (orientation === 'up' || orientation === 'down') {
        arrowOffset = 10;
        left = pos.left;
        var topWithUpOrientation = pos.top - offsetHeight - 10;
        var topWithDownOrientation = pos.top + el.offsetHeight + 5;
        if (orientation === 'up') {
            if (topWithUpOrientation > 5) {
                top = topWithUpOrientation;
                arrowDirection = 'down';
                options.balloonClass += ' gig-balloon-up';
            }
            else {
                return null;
            }
        }
        else {
            // down orientation - assume there is always enough space down
            top = topWithDownOrientation;
            arrowDirection = 'up';
            options.balloonClass += ' gig-balloon-down';
        }
    }
    else {
        return null;
    }
    var balloonDiv = createGMBalloon(options.body, options.caption, options.w, options.h, arrowOffset, arrowDirection, options.hideClose, options.id, options.dontHideOnClick, options.balloonClass);
    if (left < 10)
        left = 10;
    if (top < 10)
        top = 10;
    window.gigya.global['divGMBalloon'].style.left = left + 'px';
    window.gigya.global['divGMBalloon'].style.top = top + 'px';
    if (window.gigya.localInfo.isIE) {
        var frame = document.getElementById(window.gigya.global['divGMBalloon'].id + '_frame');
        if (frame)
            GlobalDOM_1.addIframeShim(frame);
    }
    return balloonDiv;
}
exports.positionGMBalloonNextTo = positionGMBalloonNextTo;
function scrollToElement(el) {
    if (el) {
        var pos = imagePositions_1._GetElementPos(el);
        window.scrollTo(pos.left, pos.top);
    }
}
exports.scrollToElement = scrollToElement;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions.ts":
/*!*****************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function preloadImages(arImages, fnCallback) {
    var arImageObjects = [];
    var loaded = 0;
    var fncImgOnload = function () {
        loaded++;
        if (loaded == arImages.length) {
            fnCallback();
        }
    };
    for (var i = 0; i < arImages.length; i++) {
        if (arImages[i] == null) {
            fncImgOnload();
        }
        else {
            var img = new Image();
            img.onload = fncImgOnload;
            img.onerror = fncImgOnload;
            img.src = arImages[i];
            arImageObjects.push(img);
        }
    }
}
exports.preloadImages = preloadImages;
function applyEllipsis(text, maxRealChars) {
    var pfx = '';
    var tagstack = [];
    var reTag = /\<(\/)?([^ \/>]+)[ ]?[^>]*(\/)?\>/i;
    var realChars = 0;
    for (var i = 0; i < text.length && (realChars < maxRealChars || maxRealChars == 0);) {
        var ch = text.substr(i, 1);
        if (ch == '<') {
            var idxCloseTag = text.indexOf('>', i);
            var tag = text.substring(i, idxCloseTag + 1);
            reTag.lastIndex = 0;
            var matches = reTag.exec(tag); // 1=/? 2=tagname 3=trailing / 0=all
            /*if (matches == null) {
                //alert(tag + '\n Is MALFORMED');
                }*/
            var tagname = matches[2].toLowerCase();
            if (matches[1] == '/') {
                //closing tag
                if (tagstack.length > 0 && tagstack[tagstack.length - 1].tagname == tagname) {
                    tagstack.pop();
                }
            }
            else {
                //new tag
                if (matches[3] == '/') {
                    //nothing to do (nothing to push onto the stack), rest is common
                }
                else {
                    var clAll = '</' + matches[2] + '>';
                    if (tagstack.length > 0)
                        clAll += tagstack[tagstack.length - 1].cl;
                    tagstack.push({ tagname: matches[2], cl: clAll });
                }
            }
            pfx += matches[0];
            i += matches[0].length - 1;
        }
        else if (ch == '&') {
            var idxCloseEntity = text.indexOf(';', i);
            if (idxCloseEntity - i > 8) {
                pfx += '&';
            }
            else {
                pfx += text.substring(i, idxCloseEntity + 1);
                i = idxCloseEntity;
            }
            realChars++;
        }
        else {
            pfx += ch;
            realChars++;
        }
        i++;
    }
    if (realChars < maxRealChars) {
        return text;
    }
    else {
        return pfx + '&#133;' + (tagstack.length > 0 ? tagstack[tagstack.length - 1].cl : '');
    }
}
exports.applyEllipsis = applyEllipsis;
function getPhotoURL(url, defaultURL) {
    // Use default URL if no URL provided.
    if (defaultURL && !url) {
        url = defaultURL;
    }
    // Abort if no URL.
    if (!url) {
        return url;
    }
    // Parse URL using A element.
    // See: https://gist.github.com/jlong/2428561
    var parser = document.createElement('a');
    parser.href = url;
    // Check for insecure URL on secure page.
    if (parser.protocol === 'http:' && window.gigya.localInfo.protocol === 'https') {
        if (window.gigya.utils.array.indexOf(window.gigya._.CDN_HOSTS.http, parser.host) !== -1) {
            // Gigya CDN URL needs to be converted to HTTPS.
            return window.gigya._.getCdnResource(parser.pathname + parser.search + parser.hash);
        }
        else {
            // Photo URL needs to be proxied through secure server.
            return window.gigya._.getCdnResource('/proxy/photos.ashx?u=' + window.gigya.utils.URL.URLEncode(url));
        }
    }
    return url;
}
exports.getPhotoURL = getPhotoURL;
function wbr(s, n) {
    s = s.replace(/\n/g, '\n ');
    var arWords = s.split(' ');
    var chHyphen = '&#173;';
    for (var i = 0; i < arWords.length; i++) {
        if (arWords[i].length > n) {
            var chHyphenCurrent = chHyphen;
            var arWord = arWords[i].split('');
            var stop = false;
            var stopEndChar;
            var currentN = -1;
            for (var u = 0; u < arWord.length; u += 1) {
                if (!stop)
                    currentN++;
                if (currentN == n) {
                    arWord.splice(u, 0, chHyphenCurrent);
                    currentN = -1;
                }
                if (arWord[u] == '&') {
                    stop = true;
                    stopEndChar = ';';
                }
                else if (arWord[u] == '<') {
                    stop = true;
                    stopEndChar = '>';
                }
                if (stop && arWord[u] == stopEndChar)
                    stop = false;
            }
            arWords[i] = arWord.join('');
        }
    }
    return arWords.join(' ').replace(/\n /g, '\n');
}
exports.wbr = wbr;
function getPos(el) {
    var ua = navigator.userAgent.toLowerCase();
    var isOpera = ua.indexOf('opera') != -1;
    var isIE = ua.indexOf('msie') != -1 && !isOpera; // not opera spoof
    if (el.parentNode === null || el.style.display == 'none') {
        return false;
    }
    var parent = null;
    var pos = [];
    var box;
    if (el.getBoundingClientRect) {
        //IE
        box = el.getBoundingClientRect();
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        return { x: box.left + scrollLeft, y: box.top + scrollTop };
    }
    else if (document['getBoxObjectFor']) {
        // gecko
        box = document['getBoxObjectFor'](el);
        var borderLeft = el.style.borderLeftWidth ? parseInt(el.style.borderLeftWidth) : 0;
        var borderTop = el.style.borderTopWidth ? parseInt(el.style.borderTopWidth) : 0;
        pos = [box.x - borderLeft, box.y - borderTop];
    } // safari & opera
    else {
        pos = [el.offsetLeft, el.offsetTop];
        parent = el.offsetParent;
        if (parent != el) {
            while (parent) {
                pos[0] += parent.offsetLeft;
                pos[1] += parent.offsetTop;
                parent = parent['offsetParent'];
            }
        }
        if (ua.indexOf('opera') != -1 || (ua.indexOf('safari') != -1 && el.style.position == 'absolute')) {
            pos[0] -= document.body.offsetLeft;
            pos[1] -= document.body.offsetTop;
        }
    }
    if (el.parentNode) {
        parent = el.parentNode;
    }
    else {
        parent = null;
    }
    while (parent && parent['tagName'] != 'BODY' && parent['tagName'] != 'HTML') {
        // account for any scrolled ancestors
        pos[0] -= parent['scrollLeft'];
        pos[1] -= parent['scrollTop'];
        if (parent.parentNode) {
            parent = parent.parentNode;
        }
        else {
            parent = null;
        }
    }
    return { x: pos[0], y: pos[1] };
}
exports.getPos = getPos;
function _GetElementPos(obj) {
    var pos = getPos(obj);
    return { left: pos.x, top: pos.y };
}
exports._GetElementPos = _GetElementPos;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layout5.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layout5.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var CssUtils_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CssUtils */ "./src/core/Gigya.Js.Plugin/app/CssUtils.ts");
window.gigya.utils.functions.createAlias('gigya.global.addCSS', CssUtils_1.addCss);
window.gigya.utils.functions.createAlias('gigya.pluginUtils.css.fixCss', CssUtils_1.fixCss);


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCss.ts":
/*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCss.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function fixCss(css) {
    if (window.gigya.localInfo.isIE7 || (window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode)) {
        css = css.replace(/display:inline-block/g, 'display:inline-block;zoom:1;*display:inline');
    }
    return css.replace(/gradient\((.*?),(.*?)\)/g, 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");' +
        'background: linear-gradient(top,  $1,  $2);' +
        'background: -ms-linear-gradient(top left, $1, $2);' +
        'background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));' +
        'background: -moz-linear-gradient(top,  $1,  $2)');
}
exports.fixCss = fixCss;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCssFixerUtils.ts":
/*!**********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCssFixerUtils.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function fixCss(css) {
    if (window.gigya.localInfo.isIE7 || (window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode)) {
        css = css.replace(/display:inline-block/g, 'display:inline-block;zoom:1;*display:inline');
    }
    return css.replace(/gradient\((.*?),(.*?)\)/g, 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");' +
        'background: linear-gradient(top,  $1,  $2);' +
        'background: -ms-linear-gradient(top left, $1, $2);' +
        'background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));' +
        'background: -moz-linear-gradient(top,  $1,  $2)');
}
exports.fixCss = fixCss;
var injectedRules = {};
function addCss(rules, prefix, override, hash) {
    if (override === void 0) { override = true; }
    if (!rules || rules == '')
        return;
    if (rules instanceof Array)
        rules = rules.join(' ');
    //    rules = fixCss(rules);
    if (prefix)
        rules = rules.replace(/([^\s}]*\.gig)/g, prefix + ' $1');
    if (!hash)
        hash = window.gigya.utils.object.getMurmurHash(rules).toString();
    if (!injectedRules[hash] || override) {
        injectedRules[hash] = true;
        var style = document.createElement('style');
        style.type = 'text/css';
        var rulesNode = document.createTextNode(rules);
        if (style.styleSheet) {
            if (rulesNode.value != null) {
                style.styleSheet.cssText = rulesNode.value;
            }
            else {
                style.styleSheet.cssText = rulesNode.nodeValue;
            }
        }
        else {
            style.appendChild(rulesNode);
        }
        var head = document.getElementsByTagName('head');
        var body = document.body;
        (head.length > 0 ? head[0] : body).appendChild(style);
    }
}
exports.addCss = addCss;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts":
/*!****************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var GlobalDOM_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM.ts");
var arrayUtils_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils */ "./src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils.ts");
function getClassBordersAndPaddings(className) {
    var el = document.createElement('div');
    el.className = className;
    window.gigya.utils.DOM.appendToBody(el);
    var bordersAndPaddings = getBordersAndPaddings(el);
    el.parentNode.removeChild(el);
    return bordersAndPaddings;
}
exports.getClassBordersAndPaddings = getClassBordersAndPaddings;
function getBordersAndPaddings(el) {
    var style = function (name) {
        var n = parseInt(getStyle(el, name));
        if (isNaN(n))
            n = 0;
        return n;
    };
    return {
        w: style('border-left-width') + style('border-right-width') + style('padding-right') + style('padding-left'),
        h: style('border-top-width') + style('border-bottom-width') + style('padding-top') + style('padding-bottom'),
    };
}
exports.getBordersAndPaddings = getBordersAndPaddings;
function getStyle(obj, styleProp) {
    if (obj['currentStyle'])
        return obj['currentStyle'][styleProp];
    else if (window.getComputedStyle)
        return document.defaultView.getComputedStyle(obj, null).getPropertyValue(styleProp);
}
exports.getStyle = getStyle;
function scaleImageToContainer(img, dontCenter, fnOnImgLoad) {
    if (!dontCenter) {
        img.parentNode.style.textAlign = 'left';
        img.parentNode.style.verticalAlign = 'top';
    }
    var style = function (name) {
        var node = img.parentNode;
        var dim = getStyle(node, name);
        while (dim == 'auto') {
            node = node.parentNode;
            dim = getStyle(node, name);
        }
        var n = parseInt(dim);
        if (isNaN(n))
            n = 0;
        return n;
    };
    //var size = Math.min(img.parentNode.offsetWidth, img.parentNode.offsetHeight);
    var size = Math.min(style('width'), style('height'));
    if (window.gigya.localInfo.quirksMode) {
        var bordersAndPaddings = getBordersAndPaddings(img.parentNode);
        var w = style('width') - bordersAndPaddings.w;
        var h = style('height') - bordersAndPaddings.h;
        size = Math.min(w, h);
    }
    GlobalDOM_1.scaleImage(img, size, dontCenter, fnOnImgLoad);
}
exports.scaleImageToContainer = scaleImageToContainer;
function getClassInnerSize(className, w, h) {
    var el = document.createElement('div');
    el.className = className;
    window.gigya.utils.DOM.appendToBody(el);
    var bordersAndPaddings = getBordersAndPaddings(el);
    w -= bordersAndPaddings.w;
    h -= bordersAndPaddings.h;
    el.parentNode.removeChild(el);
    return { w: w, h: h };
}
exports.getClassInnerSize = getClassInnerSize;
function SpriteRenderer(src, srcTemplate, spriteData, spriteW, spriteH, pixelRatio, spriteLength) {
    this.src = src;
    this.srcTemplate = srcTemplate;
    this.spriteData = spriteData;
    this.spriteW = spriteW;
    this.spriteH = spriteH;
    this.pixelRatio = pixelRatio;
    this.spriteLength = spriteLength;
}
exports.SpriteRenderer = SpriteRenderer;
SpriteRenderer.prototype = {
    getSpriteData: function (id, dontUseSprites) {
        var oSprite = this.spriteData[id];
        if (oSprite && !dontUseSprites) {
            return this.spriteData[id];
        }
        else {
            var i = 0;
            var params = id.split('-');
            var regexp = /\{(.*?)\}/g;
            var src = this.srcTemplate.replace(regexp, function (_, group) {
                var param = params[i++];
                if (param) {
                    return param;
                }
                else {
                    return '';
                }
            });
            return {
                isSingleImage: true,
                src: src,
            };
        }
    },
    getStyleString: function (spriteId, autoMargin) {
        var oSprite = this.getSpriteData(spriteId);
        var arStyle = [];
        if (oSprite) {
            arStyle.push("background-image:url('" + this.src + "');");
            arStyle.push('background-position:-' + oSprite.x + 'px 0px;');
            if (this.pixelRatio > 1) {
                arStyle.push('background-size:' + this.spriteLength * this.spriteW + 'px ' + this.spriteH + 'px;');
            }
            if (autoMargin) {
                arStyle.push('margin: 0 auto;');
            }
            arStyle.push('width: ' + this.spriteW + 'px;');
            arStyle.push('height: ' + this.spriteH + 'px;line-height: ' + this.spriteH + 'px;');
            arStyle.push('background-repeat:no-repeat;');
            //arStyle.push("font-size:1px;");
            arStyle.push('position:static;');
        }
        return arStyle.join('');
    },
    getHTML: function (spriteId, autoMargin, dontUseSprites, elID, altText, tabindex, title) {
        if (elID === void 0) { elID = ''; }
        if (altText === void 0) { altText = ''; }
        if (tabindex === void 0) { tabindex = undefined; }
        /* ----------------------------------------------------------------------------------------*/
        // see bug: 33448
        //var disableSpriteOnChrome = ((this.pixelRatio > 1) && gigya.localInfo.isChrome);
        //dontUseSprites = dontUseSprites || disableSpriteOnChrome;
        /* ----------------------------------------------------------------------------------------*/
        var oSprite = this.getSpriteData(spriteId, dontUseSprites);
        var arHTML = [];
        var tabindexAttr = tabindex !== undefined ? "tabindex=\"" + tabindex + "\"" : '';
        arHTML.push("<button aria-label=\"" + altText + "\" " + (title ? "title=\"" + title + "\"" : '') + " type=\"button\" class=\"tabbing-button\" " + tabindexAttr + " style=\"height:" + this.spriteH + "px;\">");
        if (oSprite) {
            if (oSprite.isSingleImage) {
                arHTML.push("<img src=\"" + oSprite.src + "\" style=\"width:" + this.spriteW + "px;height:" + this.spriteH + "px;position:static;margin:0\" alt=\"" + altText + "\" aria-hidden=\"true\" />");
            }
            else {
                arHTML.push("<div aria-hidden=\"true\" style=\"");
                arHTML.push(this.getStyleString(spriteId, autoMargin));
                arHTML.push('"');
                if (elID) {
                    arHTML.push(" id=\"" + elID + "\"");
                }
                arHTML.push("></div>");
            }
        }
        arHTML.push('</button>');
        return arHTML.join('');
    },
};
function getSpriteRenderers(oGroups) {
    //group: {path,w,h}
    var arPaths = [];
    var x = 0;
    var renderers = {};
    for (var groupID in oGroups) {
        var group = oGroups[groupID];
        if (!group.pixelRatio)
            group.pixelRatio = 1;
        arPaths.push(group.path + '|' + group.w * group.pixelRatio + ',' + group.h * group.pixelRatio);
    }
    var src = window.gigya._.getCdnResource('/gs/GetSprite.ashx?path=' + encodeURIComponent(arPaths.join('^').replace(/\[\]/, '')));
    for (var groupID in oGroups) {
        var group = oGroups[groupID];
        var spriteGroupData = {};
        spriteGroupData['spriteData'] = {};
        var regexp = /\[(.*?)\]/g;
        var arMatches = [];
        var iMatch = 0;
        spriteGroupData['srcTemplate'] = window.gigya._.getCdnResource('/gs/i' +
            group.path.replace(regexp, function (_, placeholder) {
                arMatches.push(placeholder.split(','));
                return '{' + iMatch++ + '}';
            }));
        var arSpriteIDs = arrayUtils_1.getCombination(arMatches);
        if (arSpriteIDs.length == 0)
            arSpriteIDs.push(['']);
        for (var u = 0; u < arSpriteIDs.length; u++) {
            var id = arSpriteIDs[u].join('-');
            if (id == '') {
                id = 'default';
            }
            spriteGroupData['spriteData'][id] = {
                groupId: groupID,
                id: id,
                x: x,
                w: group.w,
                h: group.h,
            };
            x += group.w;
        }
        renderers[groupID] = new SpriteRenderer(src, spriteGroupData['srcTemplate'], spriteGroupData['spriteData'], group.w, group.h, group.pixelRatio, arSpriteIDs.length);
    }
    return renderers;
}
exports.getSpriteRenderers = getSpriteRenderers;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles.ts":
/*!***************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getStyleString(oStyle, blnIsLink) {
    var s = '';
    s += 'line-height: normal;';
    if (blnIsLink)
        s += 'cursor:pointer;';
    if (oStyle.underline)
        s += 'text-decoration:underline;';
    if (oStyle.font)
        s += 'font-family:' + oStyle.font + ';';
    if (oStyle.size)
        s += 'font-size:' + oStyle.size + 'px;';
    if (oStyle.color)
        s += 'color:' + oStyle.color + ';';
    if (oStyle.bold)
        s += 'font-weight:bold;';
    if (oStyle['frame-thickness'])
        s += 'border-style:solid; border-width:' + oStyle['frame-thickness'] + 'px;';
    if (oStyle['frame-color'])
        s += 'border-color:' + oStyle['frame-color'] + ';';
    if (oStyle['background-color'])
        s += 'background-color:' + oStyle['background-color'] + ';';
    return s;
}
exports.getStyleString = getStyleString;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText.ts":
/*!*************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function measureText(text, oStyle, maxW) {
    if (maxW === void 0) { maxW = 0; }
    if (isNaN(maxW) || maxW < 0)
        maxW = 0;
    var ruler = document.getElementById('gigya_ruler');
    var rulerText = document.getElementById('gigya_ruler_text');
    if (ruler == null) {
        ruler = document.createElement('div');
        rulerText = document.createElement('span');
        ruler.id = 'gigya_ruler';
        rulerText.id = 'gigya_ruler_text';
        ruler.style.visibility = 'hidden';
        ruler.style.position = 'absolute';
        ruler.style.margin = '0px';
        ruler.style.padding = '0px';
        ruler.appendChild(rulerText);
        window.gigya.utils.DOM.appendToBody(ruler);
    }
    if (oStyle) {
        ruler.style.lineHeight = oStyle.size + 'px';
        ruler.style.fontFamily = oStyle.font;
        ruler.style.fontSize = oStyle.size + 'px';
        ruler.style.fontWeight = ('' + oStyle.bold).toLowerCase() == 'true' ? 'bold' : '';
    }
    if (maxW) {
        ruler.style.whiteSpace = '';
        ruler.style.width = '' + maxW + 'px';
    }
    else {
        ruler.style.whiteSpace = 'nowrap';
        ruler.style.width = 'auto';
    }
    ruler.style.overflow = 'hidden';
    ruler.style.display = '';
    rulerText.innerHTML = text;
    var w = rulerText.offsetWidth;
    var h = rulerText.offsetHeight;
    if (w == 0 || h == 0) {
        w = ruler.offsetWidth;
        h = ruler.offsetHeight;
    }
    ruler.style.display = 'none';
    return { w: w, h: h };
}
exports.measureText = measureText;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutTextFixer.ts":
/*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutTextFixer.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function normalizeLinebreaks(t) {
    if (t === void 0) { t = undefined; }
    if (!t || !t.replace)
        return t;
    return t.replace(/\r/, '').replace(/\n/g, '\r\n');
}
exports.normalizeLinebreaks = normalizeLinebreaks;
function fixTextWidows(text) {
    var lastSpace = text.lastIndexOf(' ');
    if (lastSpace === -1) {
        return text;
    }
    return text.substr(0, lastSpace) + '&nbsp;' + text.substr(lastSpace + 1);
}
exports.fixTextWidows = fixTextWidows;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/resources.ts":
/*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/resources.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getTemplates(plugins) {
    var templates = [];
    for (var i in plugins) {
        templates.push(window.gigya._.plugins.resources.html[plugins[i]]);
    }
    return window.gigya.utils.object.merge(templates);
}
exports.getTemplates = getTemplates;
function getCss(plugins) {
    var csses = [];
    for (var i in plugins) {
        csses.push(window.gigya._.plugins.resources.css[plugins[i]]);
    }
    return window.gigya.utils.object.merge(csses);
}
exports.getCss = getCss;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/emailValidation.ts":
/*!*****************************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/emailValidation.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isValidEmailLoginID(email) {
    var emailPattern = "^(?=(.{1,64}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))$";
    var regex = new RegExp(emailPattern, 'ig');
    var valid = regex.test(email);
    window.gigya.logger.info("LoginID validation with email : " + email + ", passed : " + valid);
    return valid;
}
exports.isValidEmailLoginID = isValidEmailLoginID;
function isEmailValid(email) {
    return isEmailListValid(email);
}
exports.isEmailValid = isEmailValid;
function isEmailListValid(emails) {
    var _email = "((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,})))";
    var _nameAndEmail = '(("[^<]+<(' + _email + ')>")|(("[^"]*" *)?<(' + _email + ')>)|(' + _email + '))';
    var regex = new RegExp(_nameAndEmail);
    var arEmails = emails.split(',');
    for (var i = 0; i < arEmails.length; i++) {
        if (!regex.test(arEmails[i]))
            return false;
    }
    return true;
}
exports.isEmailListValid = isEmailListValid;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isEmail.ts":
/*!*********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isEmail.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isEmail(s) {
    if (s.indexOf(' ') >= 0)
        return false;
    var emailParts = s.split('@');
    if (emailParts.length != 2)
        return false;
    if (emailParts[0].length == 0)
        return false;
    if (emailParts[1].length == 0)
        return false;
    var domainParts = emailParts[1].split('.');
    if (domainParts.length < 2)
        return false;
    for (var d = 0; d < domainParts.length; d++) {
        if (domainParts[d].length == 0 || domainParts[d].indexOf(' ') > 0)
            return false;
    }
    return true;
}
exports.isEmail = isEmail;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isInDomain.ts":
/*!************************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isInDomain.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isInDomain(domain, topDomain) {
    if (domain === void 0) { domain = undefined; }
    if (topDomain === void 0) { topDomain = window.gigya.thisScript.globalConf['topDomain'] || document.domain; }
    if (!domain)
        return;
    var regexString = '^' + domain.replace(/\./g, '\\.').replace(/\*\\./g, '([a-zA-Z0-9]+\\.)*') + '$';
    var regex = new RegExp(regexString);
    return regex.test(topDomain);
}
exports.isInDomain = isInDomain;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils.ts":
/*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getCombination(ar, index) {
    if (index === void 0) { index = 0; }
    if (!index)
        index = 0;
    if (!ar || ar.length == 0)
        return [];
    var currentArray = ar[index];
    if (index == ar.length - 1) {
        var arCombinations = [];
        for (var i = 0; i < currentArray.length; i++) {
            arCombinations.push([currentArray[i]]);
        }
        return arCombinations;
    }
    else {
        var arCombinations = [];
        var arCombination = getCombination(ar, index + 1);
        if (currentArray) {
            for (var i = 0; i < currentArray.length; i++) {
                for (var u = 0; u < arCombination.length; u++) {
                    arCombinations.push([currentArray[i]].concat(arCombination[u]));
                }
            }
        }
        return arCombinations;
    }
}
exports.getCombination = getCombination;
function resolveProviders(enabledProviders, disabledProviders, requiredCapabilities) {
    // setting the providers array.
    // setting the array of the providers:
    var eProviders = window.gigya.utils.array.getArrayFromString(enabledProviders, ',', true);
    var dProviders = window.gigya.utils.array.getArrayFromString(disabledProviders, ',', true);
    var rCapabilities = window.gigya.utils.array.getArrayFromString(requiredCapabilities, ',', true);
    // removing the disabled providers.
    for (var i = 0; i < dProviders.length; i++) {
        window.gigya.utils.array.removeByValue(eProviders, dProviders[i]);
    }
    // converting the providrs string into the providers Object from the array of providers in the internal '_' sdk.
    var providers = window.gigya._.providers.getProvidersByName(eProviders.join(','));
    // removing the disabled providers.
    for (var i = 0; i < dProviders.length; i++) {
        window.gigya.utils.array.removeByProperty(providers, 'name', dProviders[i]);
    }
    // only providers that support the capabilities will remain.
    return window.gigya.socialize.getProvidersForRequiredCapabilities(providers, rCapabilities);
}
exports.resolveProviders = resolveProviders;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/general/date.ts":
/*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/general/date.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getISODate(date) {
    var dateResult = null;
    if (window.gigya.localInfo.isIE8) {
        dateResult = getIE8Date(date);
    }
    else {
        var isoRegex = /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/;
        var captures = isoRegex.exec(date) || [];
        if (captures[1]) {
            var millisecondsTime = Date.parse(date);
            dateResult = new Date(millisecondsTime);
        }
    }
    return dateResult;
}
exports.getISODate = getISODate;
function getIE8Date(date) {
    var day, tz, rx = /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/, p = rx.exec(date) || [];
    if (p[1]) {
        day = p[1].split(/\D/);
        for (var i = 0, L = day.length; i < L; i++) {
            day[i] = parseInt(day[i], 10) || 0;
        }
        day[1] -= 1;
        day = new Date(Date.UTC.apply(Date, day));
        if (!day.getDate())
            return null;
        if (p[5]) {
            tz = parseInt(p[5], 10) * 60;
            if (p[6])
                tz += parseInt(p[6], 10);
            if (p[4] == '+')
                tz *= -1;
            if (tz)
                day.setUTCMinutes(day.getUTCMinutes() + tz);
        }
        return day;
    }
    return null;
}


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/general/objectUtils.ts":
/*!*******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/general/objectUtils.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function cloneParamsForPlugin(params) {
    var newParams = window.gigya.utils.object.clone(params);
    delete newParams.instanceID;
    delete newParams.getInstance;
    return newParams;
}
exports.cloneParamsForPlugin = cloneParamsForPlugin;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/languages/language.ts":
/*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/languages/language.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var defaultLang = 'en';
function getLocalizedText(plugin, textKey, lang, replaceStr, withStr) {
    // region # test-helper
    if (lang == 'te-st')
        return 'TEST_' + textKey.substring(0, 10);
    // endregion # test-helper
    if (!lang)
        lang = defaultLang;
    var translations = window.gigya.i18n[plugin][lang];
    if (!translations) {
        var fallbackLang = getFallbackLang(lang, defaultLang);
        return getLocalizedText(plugin, textKey, fallbackLang, replaceStr, withStr);
    }
    var res = translations[textKey];
    if (res && replaceStr)
        res = res.replace(replaceStr, withStr);
    return res;
}
exports.getLocalizedText = getLocalizedText;
function getTranslationsFromContainer(container, lang, fallbackEnabled, defaultTranslationsLang) {
    if (fallbackEnabled === void 0) { fallbackEnabled = true; }
    if (defaultTranslationsLang === void 0) { defaultTranslationsLang = defaultLang; }
    if (!container || !container.translations)
        return undefined;
    if (container.translations[lang])
        return container.translations[lang];
    var fallbackLang = getFallbackLang(lang, defaultTranslationsLang);
    return fallbackEnabled && fallbackLang
        ? getTranslationsFromContainer(container, fallbackLang)
        : undefined;
}
exports.getTranslationsFromContainer = getTranslationsFromContainer;
function getFallbackLang(lang, defaultLang) {
    var hyphenIndex = lang.indexOf("-");
    if (hyphenIndex > 0) {
        return lang.substr(0, hyphenIndex); // the substring before the first occurrence of the hyphen
    }
    return lang !== defaultLang
        ? defaultLang // fallback to the default lang
        : undefined; // we dont have a fallback lang if the lang is the same as the default lang
}
exports.getFallbackLang = getFallbackLang;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/xml/defaultXmlProcessor.ts":
/*!***********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/xml/defaultXmlProcessor.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function defaultPreprocessor(PropertyName, PropertyValue) {
    var lcasePropertyName = PropertyName.toLowerCase();
    var lastDashIndex = lcasePropertyName.indexOf('-');
    if (lastDashIndex != -1) {
        lcasePropertyName = lcasePropertyName.substring(lastDashIndex + 1, lcasePropertyName.length);
    }
    switch (lcasePropertyName) {
        case 'bold':
        case 'italic':
        case 'underline':
            return PropertyValue.toString().toLowerCase() == 'true';
        case 'width':
        case 'height':
            return PropertyValue.replace('%', '');
        case 'size':
            return parseInt(PropertyValue);
        default:
            return PropertyValue;
    }
}
exports.defaultPreprocessor = defaultPreprocessor;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/xml/xml.ts":
/*!*******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/xml/xml.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function CreateXMLFromString(sXML) {
    var doc = null;
    if (window['ActiveXObject'] && (window.gigya.localInfo.isIE8 || window.gigya.localInfo.isIE9)) {
        try {
            doc = new ActiveXObject('Microsoft.XMLDOM');
            doc.async = 'false';
            doc.loadXML(sXML);
        }
        catch (e) {
            window.gigya.log.addLog('Failed to create Microsoft.XMLDOM ActiveX parser', e);
        }
    }
    else {
        var parser = new DOMParser();
        doc = parser.parseFromString(sXML, 'text/xml');
    }
    return doc;
}
exports.CreateXMLFromString = CreateXMLFromString;
function CopyProperties(propBag, targetBag, pfx, Proccesor) {
    if (typeof pfx == 'undefined')
        pfx = '';
    if (typeof targetBag == 'undefined')
        targetBag = {};
    if (Proccesor != null) {
        for (var propName1 in propBag) {
            targetBag[pfx + propName1] = Proccesor(propName1, propBag[propName1]);
        }
    }
    else {
        for (var propName2 in propBag) {
            targetBag[pfx + propName2] = propBag[propName2];
        }
    }
    return targetBag;
}
exports.CopyProperties = CopyProperties;
function CollectAttributesFromXMLPathToObject(xmlobjResource, ResourceNodePathSegments, res, blnCollectFromAncestors, processor) {
    for (var iPathSegment = 0; iPathSegment < ResourceNodePathSegments.length && typeof xmlobjResource != 'undefined'; iPathSegment++) {
        xmlobjResource = xmlobjResource.childNodes[ResourceNodePathSegments[iPathSegment]];
        if (xmlobjResource != null && blnCollectFromAncestors) {
            this.CopyProperties(xmlobjResource.attributes, res, '', processor);
        }
    }
    if (typeof xmlobjResource != 'undefined') {
        this.CopyProperties(xmlobjResource.attributes, res, '', processor);
    }
}
exports.CollectAttributesFromXMLPathToObject = CollectAttributesFromXMLPathToObject;
function mergeNodes(srcNode, targetObject) {
    if (typeof targetObject.attributes == 'undefined')
        targetObject.attributes = {};
    if (typeof targetObject.childNodes == 'undefined')
        targetObject.childNodes = {};
    var targetAttributes = targetObject.attributes;
    var srcNodeAttributes = srcNode.attributes;
    /* for (var attName in srcNodeAttributes) {
        targetAttributes[attName] = srcNodeAttributes[attName];
        }*/
    if (srcNodeAttributes) {
        //this.CopyAttributesToObject(srcNodeAttributes, targetAttributes, '');
        for (var i = 0; i < srcNodeAttributes.length; i++) {
            if (srcNodeAttributes[i].value != null) {
                targetAttributes[srcNodeAttributes[i].nodeName] = srcNodeAttributes[i].value;
            }
            else {
                targetAttributes[srcNodeAttributes[i].nodeName] = srcNodeAttributes[i].nodeValue;
            }
        }
    }
    var targetChildNode;
    for (var u = 0; u < srcNode.childNodes.length; u++) {
        //add missing child nodes
        var srcChildNode = srcNode.childNodes[u];
        targetChildNode = targetObject.childNodes[srcChildNode.nodeName];
        if (typeof targetChildNode == 'undefined') {
            targetChildNode = targetObject.childNodes[srcChildNode.nodeName] = { attributes: {}, childNodes: {} };
        }
        this.mergeNodes(srcChildNode, targetChildNode);
    }
    return targetObject;
}
exports.mergeNodes = mergeNodes;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/Utils/xml/xmlResolver.ts":
/*!***************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/xml/xmlResolver.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var xml_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/xml/xml */ "./src/core/Gigya.Js.Plugin/app/Utils/xml/xml.ts");
function resolver(proccessor) {
    this.configurations = [];
    this.mergedConfig = {};
    this.isMerged = true;
    this._processor = proccessor;
    this.merge = function () {
        if (!this.isMerged) {
            this.mergedConfig = { attributes: {}, childNodes: {} };
            for (var i = 0; i < this.configurations.length; i++) {
                var xmlDoc = this.configurations[i];
                xml_1.mergeNodes(xmlDoc, this.mergedConfig);
            }
            this.isMerged = true;
        }
    };
    this.Resolve = function (ar, r) {
        if (this.merge)
            this.merge();
        var res = {};
        if (typeof arguments[arguments.length - 1] == 'object') {
            res = arguments[arguments.length - 1];
        }
        for (var u = 0; u < arguments.length; u++) {
            var arg = arguments[u];
            var ctor = arg.constructor;
            if (ctor == String) {
                var arPaths = arg.split('|');
                for (var i = arPaths.length - 1; i >= 0; i--) {
                    var path = this.trimCharsAtSuffix(this.trimCharsAtPrefix(arPaths[i], ' \n\r\t'), ' \n\r\t');
                    var recur = path.charAt(0) == '+';
                    var arPath = path.split('/').slice(1);
                    if (recur) {
                        path = path.substring(1);
                    }
                    xml_1.CollectAttributesFromXMLPathToObject(this.mergedConfig, arPath, res, recur, this._processor);
                }
            }
            else if (ctor == Array) {
                for (var n = 0; n < arg.length; n++) {
                    this.Resolve(arg[n], res);
                }
            }
        }
        return res;
    };
    this.trimCharsAtPrefix = function (s, chars) {
        var idx = 0;
        if (typeof s == 'undefined' || s.length == 0)
            return '';
        var sl = s.length;
        while (idx <= sl && chars.indexOf(s.charAt(idx)) > -1) {
            idx++;
        }
        return s.substring(idx, sl);
    };
    this.trimCharsAtSuffix = function (s, chars) {
        if (typeof s == 'undefined' || s.length == 0)
            return '';
        var idx = s.length - 1;
        while (idx >= 0 && chars.indexOf(s.charAt(idx)) > -1) {
            idx--;
        }
        return s.substring(0, idx + 1);
    };
    this.addConfig = function (sXML) {
        if (typeof sXML == 'string') {
            this.configurations.push(xml_1.CreateXMLFromString(sXML));
            this.isMerged = false;
        }
    };
    this.getTextFromKey = function (textKey) {
        return this.Resolve('/config/lang/' + textKey)['text'];
    };
}
exports.resolver = resolver;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/css/legacy_modal.css":
/*!***********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/css/legacy_modal.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* legacy modal */\r\n\r\ndiv.gigya-screen-dialog {\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: 25px;\r\n    left: 25px;\r\n    border: 8px solid #CCCCCC;\r\n    border-radius: 8px;\r\n    background-color: #FFFFFF;\r\n    outline: none;\r\n}\r\n\r\ndiv.gigya-screen-dialog-inner {\r\n    border: 1px solid #AAAAAA;\r\n}\r\n\r\ndiv.gigya-screen-dialog-close {\r\n    line-height: 33px;\r\n    height: 33px;\r\n    width: 20px;\r\n    float: right;\r\n    cursor: pointer;\r\n    background-image: url('${imgBase}/accounts/close_dialog.png');\r\n    background-position: right;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\ndiv.gigya-screen-dialog-caption {\r\n    float: left;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    font-family: arial;\r\n}\r\n\r\ndiv.gigya-screen-dialog-mobile {\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #FFFFFF;\r\n    width: 100%;\r\n}\r\n\r\ndiv.gigya-screen-dialog-top {\r\n    overflow: hidden;\r\n    zoom: 1;\r\n    background-color: #F3F3F3;\r\n    line-height: 33px;\r\n    padding: 0 10px 0 11px;\r\n}\r\n\r\n#gigya-screen-dialog-page-overlay {\r\n        width : 100vw;\r\n        height : 100vh;\r\n        background : black;\r\n        position : fixed;\r\n        top : 0;\r\n        left : 0;\r\n        z-index : -1;\r\n        filter : alpha(opacity=20);\r\n        opacity : 0.2;\r\n    }"

/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/css/modern_modal.css":
/*!***********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/css/modern_modal.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*modern modal*/\r\n.gigya-style-modern #gigya-screen-dialog-page-overlay {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: black;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    filter: alpha(opacity=20);\r\n    opacity: 0.2;\r\n}\r\n\r\n.gigya-style-modern div.gigya-screen-dialog-main {\r\n    border: 0.5px;\r\n    border-radius: 3px;\r\n    background-color: transparent;\r\n    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\r\n    -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\r\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\r\n    max-height: 99vh;\r\n    max-width: 99vw;\r\n    overflow: auto;\r\n}\r\n\r\n.gigya-style-modern div.gigya-screen-dialog-top {\r\n    overflow: hidden;\r\n    zoom: 1;\r\n    background-color: #1371B9;\r\n    line-height: 38px;\r\n    padding: 0 10px 0 11px;\r\n    border-radius: 3px 3px 0px 0px;\r\n}\r\n\r\n.gigya-style-modern div.gigya-screen-dialog-close {\r\n    background-image: initial;\r\n    background-position: initial;\r\n    background-repeat: initial;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.gigya-style-modern div.gigya-screen-dialog-close > a > img {\r\n    margin-top: 11px;\r\n    vertical-align: initial;\r\n    border: 0px;\r\n    width: auto;\r\n}\r\n\r\n.gigya-style-modern div.gigya-screen-dialog-caption {\r\n    float: left;\r\n    font-size: 19px;\r\n    font-family: arial;\r\n    color: #FFFFFF;\r\n    padding-right: 20px;\r\n}\r\n\r\n.gigya-style-modern div.gigya-screen-dialog-inner {\r\n    padding: 0px;\r\n    overflow: hidden;\r\n    min-width: 32px;\r\n    min-height: 64px;\r\n    background-color: white;\r\n}\r\n\r\n.gigya-style-modern div.gigya-screen-dimmer {\r\n    position: absolute;\r\n    opacity: 0.2;\r\n    filter: alpha(opacity=20);\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n.gigya-style-modern div.gigya-screen-loader {\r\n    position: absolute;\r\n    background: transparent url(\"${imgBase}/accounts/bigLoader.gif\") no-repeat center center;\r\n    min-height: 32px;\r\n    min-width: 32px;\r\n}\r\n\r\n.gigya-style-modern.gigya-screen-dialog {\r\n    position: fixed;\r\n    border: none;\r\n}\r\n\r\n.gigya-style-modern.gigya-screen-dialog-mobile {\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-main {\r\n    max-height: 100vh;\r\n    max-width: 100vw;\r\n    box-shadow: initial;\r\n    overflow: visible;\r\n}\r\n\r\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\r\n    position: fixed;\r\n    top: 0px;\r\n    border-radius: 0px;\r\n    line-height: 27px;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-caption {\r\n    font-size: 14px;\r\n}\r\n\r\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-close > a > img {\r\n    margin-top: 5px;\r\n}\r\n\r\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner {\r\n    border: 0px;\r\n    margin-top: 27px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner > div {\r\n    margin: 0 auto;\r\n}\r\n\r\n.gigya-style-modern.gigya-ios.gigya-screen-dialog, .gigya-style-modern.gigya-ios.gigya-screen-dialog.gigya-ios-v7.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\r\n    position: absolute;\r\n}\r\n\r\n.gigya-style-modern.gigya-android.gigya-screen-dialog-mobile {\r\n    overflow: auto;\r\n}\r\n\r\n.gigya-style-modern.gigya-ie8 #gigya-screen-dialog-page-overlay {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nhtml.gigya-mobile-modal-mode {\r\n    overflow: hidden;\r\n}\r\nhtml.gigya-mobile-modal-mode body {\r\n    height: 0px;\r\n    overflow: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/defaultProcessor.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/defaultProcessor.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function defaultProccessor(PropertyName, PropertyValue) {
    var lcasePropertyName = PropertyName.toLowerCase();
    var lastDashIndex = lcasePropertyName.indexOf('-');
    if (lastDashIndex != -1) {
        lcasePropertyName = lcasePropertyName.substring(lastDashIndex + 1, lcasePropertyName.length);
    }
    switch (lcasePropertyName) {
        case 'bold':
        case 'italic':
        case 'underline':
            return PropertyValue.toString().toLowerCase() == 'true';
            break;
        case 'width':
        case 'height':
            return PropertyValue.replace('%', '');
            break;
        case 'size':
            return parseInt(PropertyValue);
            break;
        default:
            return PropertyValue;
    }
}
exports.defaultProccessor = defaultProccessor;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/helpers/AsyncManager.ts":
/*!**************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/AsyncManager.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* CURRENTLY INACTIVE!!! to activate, go to _refernces.ts  */
var BaseObjectGlobal = window.gigya._.BaseObject;
var AsyncManager = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncManager, _super);
    function AsyncManager() {
        var _this = _super.call(this, undefined, false) || this;
        _this._actions = [];
        return _this;
    }
    AsyncManager.prototype.onActionRegisterEvent = function () {
        return this.getEvent(AsyncManager._eventNames.onActionRegister);
    };
    AsyncManager.prototype.onActionUnRegisterEvent = function () {
        return this.getEvent(AsyncManager._eventNames.onActionUnRegister);
    };
    AsyncManager.prototype.onNoActionsPendingEvent = function () {
        return this.getEvent(AsyncManager._eventNames.onNoActionsPending);
    };
    AsyncManager.prototype.register = function (func) {
        this._actions.push(func);
        this.dispatchEvent(AsyncManager._eventNames.onActionRegister);
    };
    AsyncManager.prototype.unregister = function (func) {
        window.gigya.utils.array.removeByValue(this._actions, func);
        this.dispatchEvent(AsyncManager._eventNames.onActionUnRegister);
        if (!this.isActive())
            this.dispatchEvent(AsyncManager._eventNames.onNoActionsPending);
    };
    AsyncManager.prototype.call = function (func, params, callbackField) {
        var _this = this;
        if (callbackField === void 0) { callbackField = 'callback'; }
        this.register(func);
        var originalCb = params[callbackField];
        params[callbackField] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (typeof originalCb == 'function')
                originalCb.call(_this, args);
            _this.unregister(func);
        };
        func(params);
    };
    AsyncManager.prototype.isActive = function () {
        return this._actions && this._actions.length > 0;
    };
    AsyncManager._eventNames = {
        onActionRegister: 'onActionRegister',
        onActionUnRegister: 'onActionUnRegister',
        onNoActionsPending: 'onNoActionsPending',
    };
    return AsyncManager;
}(BaseObjectGlobal));
exports.AsyncManager = AsyncManager;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer.ts":
/*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var LoadDimmer = /** @class */ (function () {
    function LoadDimmer(_container) {
        this._container = _container;
        this._isActive = false;
        this._dimmer = document.createElement('div');
        this._dimmer.className = 'gigya-screen-dimmer';
        this._loader = document.createElement('div');
        this._loader.className = 'gigya-screen-loader';
    }
    LoadDimmer.prototype.show = function () {
        if (!this._isActive) {
            window.gigya.logger.debug("showing loading indication");
            this.setElementOverContainer(this._dimmer);
            this.setElementOverContainer(this._loader);
            this._container.insertBefore(this._dimmer, this._container.firstChild);
            this._container.insertBefore(this._loader, this._container.firstChild);
            this._isActive = true;
        }
    };
    LoadDimmer.prototype.setElementOverContainer = function (el) {
        var pos = window.gigya.global.getPos(this._container); // TODO: remove cast
        el.style.width = this._container.offsetWidth + 'px';
        el.style.height = this._container.offsetHeight + 'px';
        el.style.zIndex = '' + window.gigya.utils.DOM.getNextZIndex();
    };
    LoadDimmer.prototype.isActive = function () {
        return this._isActive;
    };
    LoadDimmer.prototype.hide = function () {
        if (this._isActive) {
            window.gigya.logger.debug("hiding loading indication");
            this.unlinkElement(this._loader);
            this.unlinkElement(this._dimmer);
            this._isActive = false;
        }
    };
    LoadDimmer.prototype.unlinkElement = function (el) {
        if (el && el.parentNode)
            el.parentNode.removeChild(el);
    };
    LoadDimmer.prototype.dispose = function () {
        this.hide();
        delete this._container;
    };
    return LoadDimmer;
}());
exports.LoadDimmer = LoadDimmer;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/helpers/ModalDialog.ts":
/*!*************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/ModalDialog.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ModalDialogClasses_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses */ "./src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses.ts");
var LoadDimmer_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer */ "./src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer.ts");
var layoutSprites_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts");
var CloseReasons_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CloseReasons */ "./src/core/Gigya.Js.Plugin/app/CloseReasons.ts");
var layoutCssFixerUtils_1 = __webpack_require__(/*! ../Utils/UI/layoutCssFixerUtils */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCssFixerUtils.ts");
var MODAL_CONTENT_CONTAINER_ID = 'gigya-modal-plugin-container';
var BaseObjectGlobal = window.gigya._.BaseObject;
var ModalDialog = /** @class */ (function (_super) {
    tslib_1.__extends(ModalDialog, _super);
    // Methods
    function ModalDialog(_triggerMethod, isMobileUI, params, isLegacy, hide) {
        if (isLegacy === void 0) { isLegacy = false; }
        var _this = _super.call(this, params) || this;
        _this._triggerMethod = _triggerMethod;
        _this.isMobileUI = isMobileUI;
        _this.isLegacy = isLegacy;
        _this.onWindowResizeEvent = _this.onWindowResize.bind(_this);
        _this._dialogClasses = _this.isLegacy ? ModalDialogClasses_1.legacyDialogClasses : ModalDialogClasses_1.dialogClasses;
        _this.create(hide);
        return _this;
    }
    // Events
    ModalDialog.prototype.onAfterCenterEvent = function () {
        return this.getEvent('onAfterModalCenter');
    };
    ModalDialog.prototype.getConfig = function () {
        return {
            defaultParams: {},
            requiredParams: ['modalTemplate'],
        };
    };
    ModalDialog.prototype.showAll = function () {
        if (!this._allContainer) {
            this.create();
        }
        this.center();
        if (this.isMobileUI)
            window.gigya.utils.DOM.addClassToElement(document.documentElement, this._dialogClasses.document_mobile);
        this._allContainer.style.visibility = 'visible';
        // WCAG: Focus dialog but not any specific element within the dialog.
        //       If a specific element is focused, the screen-reader will not read any text prior to it.
        //       If the first form element is focused and it's a text input with a placeholder, old IE versions will hide the placeholder text.
        this._allContainer.focus();
        window.gigya.utils.tabbable.bindTabLooping(this.getModalDialogContainer());
    };
    ModalDialog.prototype.hideAll = function () {
        if (this._allContainer) {
            this._allContainer.style.visibility = 'hidden';
            if (this.isMobileUI) {
                this.removeWindowResizeListener();
                document.documentElement.style.height = '';
                window.gigya.utils.DOM.removeClassFromElement(document.documentElement, this._dialogClasses.document_mobile);
            }
            window.gigya.utils.tabbable.unbindTabLooping(this._contentContainer);
        }
    };
    ModalDialog.prototype.showMainDialog = function () {
        if (this._mainContainer) {
            this._mainContainer.style.visibility = 'visible';
        }
    };
    ModalDialog.prototype.hideMainDialog = function () {
        if (this._mainContainer) {
            this._mainContainer.style.visibility = 'visibile';
        }
    };
    ModalDialog.prototype.showLoading = function () {
        if (this._loader) {
            this._loader.show();
        }
    };
    ModalDialog.prototype.hideLoading = function () {
        if (this._loader) {
            this._loader.hide();
        }
    };
    ModalDialog.prototype.changeToMobile = function () {
        this._allContainer.className = this._dialogClasses.all_mobile;
    };
    ModalDialog.prototype.changeToWeb = function () {
        this._allContainer.className = this._dialogClasses.all_web;
    };
    ModalDialog.prototype.isLoading = function () {
        return this._loader && this._loader.isActive();
    };
    ModalDialog.prototype.resize = function (size) {
        if (size) {
            window.gigya.logger.debug("resizing and centering modal dialog");
            this.applyStyle('height', size.height);
            this.applyStyle('minHeight', size.minHeight);
            this.applyStyle('width', size.width);
            this.applyStyle('minWidth', size.minWidth);
            this.center();
        }
    };
    ModalDialog.prototype.applyStyle = function (property, value) {
        if (value === null)
            this._mainContainer.style[property] = '';
        else if (value)
            this._mainContainer.style[property] = value;
    };
    ModalDialog.prototype.addWindowResizeListener = function () {
        window.gigya.utils.DOM.addEventListener(window, 'resize', this.onWindowResizeEvent);
    };
    ModalDialog.prototype.removeWindowResizeListener = function () {
        window.gigya.utils.DOM.removeEventListener(window, 'resize', this.onWindowResizeEvent);
    };
    ModalDialog.prototype.onWindowResize = function () {
        if (this.isMobileUI)
            this.adjustWindowHeight();
    };
    ModalDialog.prototype.adjustWindowHeight = function () {
        document.documentElement.style.height = window.getComputedStyle(this._allContainer).height;
    };
    ModalDialog.prototype.center = function () {
        if (this.isMobileUI) {
            this.adjustWindowHeight();
            this.addWindowResizeListener();
        }
        else {
            var restoreLoading = false;
            if (this.isLoading()) {
                this.hideLoading();
                restoreLoading = true;
            }
            if (layoutSprites_1.getStyle(this._allContainer, 'position') == 'absolute') {
                // legacy's center.
                var middleCenter = window.gigya.utils.viewport.getMiddleCenter();
                var dialogWidth = this._allContainer.offsetWidth;
                var dialogHeight = this._allContainer.offsetHeight;
                var dialogTop = middleCenter.top - Math.floor(dialogHeight / 2);
                var dialogLeft = middleCenter.left - Math.round(dialogWidth / 2);
                if (dialogTop < 10)
                    dialogTop = 10;
                if (dialogLeft < 10)
                    dialogLeft = 10;
                this._allContainer.style.top = dialogTop + 'px';
                this._allContainer.style.left = dialogLeft + 'px';
            }
            else {
                var vp = window.gigya.utils.viewport.getInnerSize();
                var top = Math.max(0, (vp.h - this._allContainer.clientHeight) / 2);
                var left = Math.max(0, (vp.w - this._allContainer.clientWidth) / 2);
                this._allContainer.style.top = top.toString() + 'px';
                this._allContainer.style.left = left.toString() + 'px';
            }
            if (restoreLoading)
                this.showLoading();
        }
        this.dispatchEvent('onAfterModalCenter');
    };
    ModalDialog.prototype.create = function (hide) {
        var _this = this;
        if (hide === void 0) { hide = true; }
        // Creating the new container
        var modalID = window.gigya.utils.DOM.getCenteredDivID(this._triggerMethod);
        if (this.params.newModal)
            modalID += new Date().getTime();
        this._allContainer = window.gigya.utils.DOM.createTopLevelDiv(modalID);
        if (hide)
            this.hideAll();
        this._allContainer.innerHTML = window.gigya.utils.templates.fill(this.params.modalTemplate, {
            modalID: modalID,
            title: this.params.captionText,
            closeImage: this.params.closeImage,
            overlayDisplay: !this.isMobileUI && this.params.dimDialogBackground ? 'block' : 'none',
        });
        // WCAG compliance.
        this._allContainer.setAttribute('role', 'dialog');
        this._allContainer.setAttribute('aria-labelledby', "gigya-screen-dialog-caption-" + modalID);
        this._allContainer.setAttribute('tabindex', '-1');
        layoutCssFixerUtils_1.addCss(this.params.modalCss, undefined, false);
        this._mainContainer = window.gigya.utils.DOM.getElementsByClass(this._allContainer, this._dialogClasses.main)[0];
        this._captionContainer = window.gigya.utils.DOM.getElementsByClass(this._mainContainer, this._dialogClasses.caption)[0];
        // Adding modal events
        this._closeButtonElement = window.gigya.utils.DOM.getElementsByClass(this._mainContainer, this._dialogClasses.closeButton)[0];
        if (this._closeButtonElement) {
            window.gigya.utils.DOM.addEventListener(this._closeButtonElement, 'click', function (event) {
                window.gigya.utils.DOM.disableDefaultEventHandling(event);
                _this.hideAll();
                if (_this.params.onModalClose)
                    _this.params.onModalClose(CloseReasons_1.CloseReasons.canceled);
            });
        }
        // Creating the plugin container and adding it to the modal
        this._contentContainer = window.gigya.utils.DOM.getElementsByClass(this._mainContainer, this._dialogClasses.content, true)[0];
        this._contentContainer.id = MODAL_CONTENT_CONTAINER_ID + '-' + this._triggerMethod;
        this._loader = new LoadDimmer_1.LoadDimmer(this._contentContainer);
        // Add the modal template
        if (this.isMobileUI) {
            //gigya.utils.DOM.addDialogBackListener(() => { this.close(CloseReasons.backButton); }); // canceled by clicking on the dialog close button at the top
            window.gigya.utils.DOM.addClassToElement(this._allContainer, this._dialogClasses.all_mobile);
            /// remove this asap.
            //var bodyStyle = window.getComputedStyle(document.body); /// we don't support mobile in ie8.
            //var outerHeight = document.body.offsetHeight + parseInt(bodyStyle.getPropertyValue("margin-top")) + parseInt(bodyStyle.getPropertyValue("margin-bottom"));
            //this._allContainer.style.minHeight = outerHeight + 'px';
        }
        else {
            window.gigya.utils.DOM.addClassToElement(this._allContainer, this._dialogClasses.all_web);
        }
        this.center();
    };
    ModalDialog.prototype.getMainContainer = function () {
        return this._mainContainer;
    };
    ModalDialog.prototype.getContentContainer = function () {
        return this._contentContainer;
    };
    ModalDialog.prototype.getCaptionContainer = function () {
        return this._captionContainer;
    };
    ModalDialog.prototype.getModalDialogContainer = function () {
        return this._allContainer;
    };
    ModalDialog.prototype.getLoadingIndicator = function () {
        return this._loader;
    };
    ModalDialog.prototype.dispose = function () {
        this.hideAll();
        if (this._allContainer && this._allContainer.parentElement)
            this._allContainer.parentElement.removeChild(this._allContainer);
        if (this._loader) {
            this._loader.dispose();
        }
        delete this.params;
        _super.prototype.dispose.call(this);
    };
    return ModalDialog;
}(BaseObjectGlobal));
exports.ModalDialog = ModalDialog;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses.ts":
/*!********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.dialogClasses = {
    document_mobile: 'gigya-mobile-modal-mode',
    all_web: 'gigya-screen-dialog',
    all_mobile: 'gigya-screen-dialog-mobile' /* can't combine these two to one+mobile decorator, because of backwards compatability */,
    main: 'gigya-screen-dialog-main',
    caption: 'gigya-screen-dialog-caption',
    closeButton: 'gigya-screen-dialog-close',
    content: 'gigya-screen-dialog-inner',
};
exports.legacyDialogClasses = window.gigya.utils.object.clone(exports.dialogClasses);
exports.legacyDialogClasses.main = exports.legacyDialogClasses.content;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/helpers/Poller.ts":
/*!********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/Poller.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var PollerStartResult;
(function (PollerStartResult) {
    PollerStartResult[PollerStartResult["OK"] = 0] = "OK";
    PollerStartResult[PollerStartResult["AlreadyStarted"] = 1] = "AlreadyStarted";
})(PollerStartResult = exports.PollerStartResult || (exports.PollerStartResult = {}));
var Poller = /** @class */ (function () {
    function Poller(_logger) {
        if (_logger === void 0) { _logger = typeof console == 'object' && console.log ? console.log : function () { }; }
        this._logger = _logger;
        this._intervalID = undefined;
        this._actions = [];
    }
    Poller.prototype.addActions = function () {
        var _this = this;
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        window.gigya.utils.array.forEach(actions, function (action) {
            _this._actions.push(action);
        });
    };
    Poller.prototype.hasActions = function () {
        return this._actions.length > 0;
    };
    Poller.prototype.start = function (interval, force) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (this.isStarted()) {
            return PollerStartResult.AlreadyStarted;
        }
        else if (!this.hasActions && !force) {
            throw 'Poller has no actions to perform on interval';
        }
        else {
            this._intervalID = setInterval(function () {
                window.gigya.utils.array.forEach(_this._actions, function (action) {
                    if (action instanceof Function)
                        action();
                    else
                        action.act();
                });
            }, interval);
        }
    };
    Poller.prototype.stop = function () {
        if (this._intervalID) {
            clearInterval(this._intervalID);
            delete this._intervalID;
        }
    };
    Poller.prototype.isStarted = function () {
        return Boolean(this._intervalID);
    };
    Poller.prototype.dispose = function () {
        this.stop();
        for (var i in this._actions) {
            if (!(this._actions[i] instanceof Function) && this._actions.hasOwnProperty(i))
                this._actions[i].dispose();
        }
        delete this._actions;
        delete this._logger;
    };
    return Poller;
}());
exports.Poller = Poller;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/helpers/PollerActions.ts":
/*!***************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/PollerActions.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var InvalidPropertyAction = /** @class */ (function () {
    function InvalidPropertyAction(_object, _propery, callback) {
        this._object = _object;
        this._propery = _propery;
        this.callback = callback;
    }
    InvalidPropertyAction.prototype.act = function () {
        if (!this._object[this._propery]) {
            this.callback();
        }
    };
    InvalidPropertyAction.prototype.dispose = function () {
        delete this._object;
        delete this.callback;
    };
    return InvalidPropertyAction;
}());
exports.InvalidPropertyAction = InvalidPropertyAction;
var SizeChangeAction = /** @class */ (function () {
    function SizeChangeAction(callback) {
        this.callback = callback;
        this._last = { width: undefined, height: undefined };
    }
    SizeChangeAction.prototype.act = function () {
        var curr = this.getCurrSize();
        if (this.isChanged(this._last, curr))
            this.callback(this._last, curr);
        this._last = curr;
    };
    SizeChangeAction.prototype.dispose = function () {
        delete this.callback;
    };
    SizeChangeAction.prototype.getCurrSize = function () {
        /// abstract - override this.
        return undefined;
    };
    /// Virtual
    SizeChangeAction.prototype.isChanged = function (last, curr) {
        return curr.width != this._last.width || curr.height != this._last.height;
    };
    return SizeChangeAction;
}());
exports.SizeChangeAction = SizeChangeAction;
var ContainerSizeAction = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerSizeAction, _super);
    function ContainerSizeAction(_container, callback) {
        var _this = _super.call(this, callback) || this;
        _this._container = _container;
        return _this;
    }
    ContainerSizeAction.prototype.getCurrSize = function () {
        return {
            width: this._container && this._container.style ? this._container.clientWidth : undefined,
            height: this._container && this._container.style ? this._container.clientHeight : undefined,
        };
    };
    ContainerSizeAction.prototype.dispose = function () {
        delete this._container;
        _super.prototype.dispose.call(this);
    };
    return ContainerSizeAction;
}(SizeChangeAction));
exports.ContainerSizeAction = ContainerSizeAction;
var ViewportSizeAction = /** @class */ (function (_super) {
    tslib_1.__extends(ViewportSizeAction, _super);
    function ViewportSizeAction(callback) {
        return _super.call(this, callback) || this;
    }
    ViewportSizeAction.prototype.getCurrSize = function () {
        var viewport = window.gigya.utils.viewport.getInnerSize();
        var orientation = window.gigya.utils.viewport.getOrientation();
        return {
            width: viewport.w,
            height: viewport.h,
            orientation: orientation,
        };
    };
    ViewportSizeAction.prototype.isChanged = function (last, curr) {
        return _super.prototype.isChanged.call(this, last, curr) || last.orientation != curr.orientation;
    };
    return ViewportSizeAction;
}(SizeChangeAction));
exports.ViewportSizeAction = ViewportSizeAction;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/html/legacyModal.html":
/*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/html/legacyModal.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gigya-screen-dialog-page-overlay\" style=\"display:${overlayDisplay}\"></div>\r\n<div class=\"gigya-screen-dialog-inner\">\r\n    <div class=\"gigya-screen-dialog-top\">\r\n        <div class=\"gigya-screen-dialog-caption\" id=\"gigya-screen-dialog-caption-${modalID}\">$title</div>\r\n        <div class=\"gigya-screen-dialog-close\"></div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/html/modal.html":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/html/modal.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gigya-screen-dialog-page-overlay\" style=\"display:${overlayDisplay}\"></div>\r\n<div class=\"gigya-screen-dialog-main\">\r\n    <div class=\"gigya-screen-dialog-top\">\r\n        <div class=\"gigya-screen-dialog-caption\" tabindex=\"0\" id=\"gigya-screen-dialog-caption-${modalID}\">$title</div>\r\n        <div class=\"gigya-screen-dialog-close\">\r\n            <a href=\"#\" role=\"button\">${closeImage}</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"gigya-screen-dialog-inner\">\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/html/modalCloseButton.html":
/*!*****************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/html/modalCloseButton.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"${imgUrl}\" alt=\"close\" height=\"${imgHeight}\" width=\"${imgWidth}\" />\r\n";

/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/index.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var BasePlugin = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/BasePlugin */ "./src/core/Gigya.Js.Plugin/app/BasePlugin.ts");
var HtmlResources = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/HtmlResources */ "./src/core/Gigya.Js.Plugin/app/HtmlResources.ts");
var CssResources = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CssResources */ "./src/core/Gigya.Js.Plugin/app/CssResources.ts");
var CloseReasons = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CloseReasons */ "./src/core/Gigya.Js.Plugin/app/CloseReasons.ts");
var PluginStyles = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/PluginStyles */ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts");
var pluginTester = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/pluginTester */ "./src/core/Gigya.Js.Plugin/app/pluginTester.ts");
var CollectionUtils = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CollectionUtils */ "./src/core/Gigya.Js.Plugin/app/CollectionUtils.ts");
var CssUtils = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CssUtils */ "./src/core/Gigya.Js.Plugin/app/CssUtils.ts");
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/URLUtils */ "./src/core/Gigya.Js.Plugin/app/URLUtils.ts");
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/DOMUtils */ "./src/core/Gigya.Js.Plugin/app/DOMUtils.ts");
var defaultProcessor = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/defaultProcessor */ "./src/core/Gigya.Js.Plugin/app/defaultProcessor.ts");
var AsyncManager = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/AsyncManager */ "./src/core/Gigya.Js.Plugin/app/helpers/AsyncManager.ts");
var LoadDimmer = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer */ "./src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer.ts");
var ModalDialog = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/ModalDialog */ "./src/core/Gigya.Js.Plugin/app/helpers/ModalDialog.ts");
var ModalDialogClasses = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses */ "./src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses.ts");
var Poller = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/Poller */ "./src/core/Gigya.Js.Plugin/app/helpers/Poller.ts");
var PollerActions = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/helpers/PollerActions */ "./src/core/Gigya.Js.Plugin/app/helpers/PollerActions.ts");
var IModalDialogParams = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/interfaces/IModalDialogParams */ "./src/core/Gigya.Js.Plugin/app/interfaces/IModalDialogParams.ts");
var IPluginConfig = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig */ "./src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig.ts");
var IPluginCSS = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS */ "./src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS.ts");
var IPluginParams = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams */ "./src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams.ts");
var IPluginTemplates = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates */ "./src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates.ts");
var GigyaGlobalDate = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/general/date */ "./src/core/Gigya.Js.Plugin/app/Utils/general/date.ts");
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils */ "./src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/general/objectUtils */ "./src/core/Gigya.Js.Plugin/app/Utils/general/objectUtils.ts");
var GigyaPluginUtilsLang = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/languages/language */ "./src/core/Gigya.Js.Plugin/app/Utils/languages/language.ts");
var GigyaPluginUtilsAnimation = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/animation */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/animation.ts");
var globalAnimation = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/globalAnimation */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/globalAnimation.ts");
var animationService = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/animationService */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/animationService.ts");
var DOM = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/DOM */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/DOM.ts");
var GlobalDOM = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM.ts");
var DomAttributes = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/DomAttributes */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/DomAttributes.ts");
var enableSafeCopy = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/enableSafeCopy */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/enableSafeCopy.ts");
var layoutCss = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCss */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCss.ts");
var layoutText = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText.ts");
var layoutTextFixer = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutTextFixer */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutTextFixer.ts");
var layoutSprites = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts");
var layoutCssFixerUtils = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCssFixerUtils */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCssFixerUtils.ts");
var layoutStyles = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles.ts");
var resources = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/resources */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/resources.ts");
var imagePositions = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions.ts");
var UIHelpers = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/UIHelpers */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/UIHelpers.ts");
var UIPopup = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup.ts");
var xml = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/xml/xml */ "./src/core/Gigya.Js.Plugin/app/Utils/xml/xml.ts");
var xmlResolver = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/xml/xmlResolver */ "./src/core/Gigya.Js.Plugin/app/Utils/xml/xmlResolver.ts");
var defaultXmlProcessor = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/xml/defaultXmlProcessor */ "./src/core/Gigya.Js.Plugin/app/Utils/xml/defaultXmlProcessor.ts");
var emailValidation = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/validation/emailValidation */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/emailValidation.ts");
var isInDomain = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isInDomain */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isInDomain.ts");
var isEmail = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isEmail */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isEmail.ts");
var UI = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/UI */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/UI.ts");
__webpack_require__(/*! src/core/Gigya.Js.Plugin/app/PluginUtils0 */ "./src/core/Gigya.Js.Plugin/app/PluginUtils0.ts");
__webpack_require__(/*! src/core/Gigya.Js.Plugin/app/Utils/UI/layout5 */ "./src/core/Gigya.Js.Plugin/app/Utils/UI/layout5.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.resources) {
    window.gigya._.plugins.resources = {};
}
if (!window.gigya._.plugins.resources.html) {
    window.gigya._.plugins.resources.html = {};
}
if (!window.gigya._.plugins.resources.html.base) {
    window.gigya._.plugins.resources.html.base = {};
}
if (!window.gigya._.plugins.resources.css) {
    window.gigya._.plugins.resources.css = {};
}
if (!window.gigya._.plugins.resources.css.base) {
    window.gigya._.plugins.resources.css.base = {};
}
if (!window.gigya._.plugins.utUtils) {
    window.gigya._.plugins.utUtils = {};
}
if (!window.gigya._.plugins.utils) {
    window.gigya._.plugins.utils = {};
}
if (!window.gigya._.plugins.utils.Collections) {
    window.gigya._.plugins.utils.Collections = {};
}
if (!window.gigya._.plugins.utils.css) {
    window.gigya._.plugins.utils.css = {};
}
if (!window.gigya._.plugins.utils.URL) {
    window.gigya._.plugins.utils.URL = {};
}
if (!window.gigya._.plugins.utils.DOM) {
    window.gigya._.plugins.utils.DOM = {};
}
if (!window['resolver']) {
    window['resolver'] = {};
}
var resolver = window['resolver'];
if (!window.gigya._.plugins.modal) {
    window.gigya._.plugins.modal = {};
}
if (!window.gigya._.plugins.pollerActions) {
    window.gigya._.plugins.pollerActions = {};
}
if (!window.gigya.global) {
    window.gigya.global = {};
}
if (!window.gigya.global.date) {
    window.gigya.global.date = {};
}
if (!window.gigya.utils) {
    window.gigya.utils = {};
}
if (!window.gigya.utils.object) {
    window.gigya.utils.object = {};
}
if (!window.gigya.pluginUtils) {
    window.gigya.pluginUtils = {};
}
if (!window.gigya.pluginUtils.lang) {
    window.gigya.pluginUtils.lang = {};
}
if (!window.gigya.pluginUtils.animation) {
    window.gigya.pluginUtils.animation = {};
}
if (!window.gigya.services) {
    window.gigya.services = {};
}
if (!window.gigya.services.socialize) {
    window.gigya.services.socialize = {};
}
if (!window.gigya.pluginUtils.DOM) {
    window.gigya.pluginUtils.DOM = {};
}
if (!window.gigya.utils.DOM) {
    window.gigya.utils.DOM = {};
}
if (!window.gigya.pluginUtils.css) {
    window.gigya.pluginUtils.css = {};
}
if (!window.gigya.pluginUtils.layout) {
    window.gigya.pluginUtils.layout = {};
}
if (!window.gigya.pluginUtils.text) {
    window.gigya.pluginUtils.text = {};
}
if (!window.gigya.global.XMLUtils) {
    window.gigya.global.XMLUtils = {};
}
if (!window.gigya.global.resolver) {
    window.gigya.global.resolver = {};
}
if (!window.gigya.pluginUtils.validation) {
    window.gigya.pluginUtils.validation = {};
}
if (!window.gigya.pluginUtils.domain) {
    window.gigya.pluginUtils.domain = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins, BasePlugin, CloseReasons, PluginStyles, AsyncManager, LoadDimmer, IModalDialogParams, IPluginConfig, IPluginCSS, IPluginParams, IPluginTemplates);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.html.base, HtmlResources);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.css.base, CssResources);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.utUtils, pluginTester);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.utils.Collections, CollectionUtils);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.utils.css, CssUtils, layoutCssFixerUtils);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.utils.URL, URLUtils, UIHelpers);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.utils.DOM, DOMUtils, DomAttributes);
__webpack_provided_Object_dot_assign(resolver, defaultProcessor);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.modal, ModalDialog, ModalDialogClasses);
__webpack_provided_Object_dot_assign(window.gigya._, Poller);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.pollerActions, PollerActions);
__webpack_provided_Object_dot_assign(window.gigya.global.date, GigyaGlobalDate);
__webpack_provided_Object_dot_assign(window.gigya.global, arrayUtils, globalAnimation, GlobalDOM, layoutSprites, imagePositions, xmlResolver, isEmail);
__webpack_provided_Object_dot_assign(window.gigya.utils.object, objectUtils);
__webpack_provided_Object_dot_assign(window.gigya.pluginUtils.lang, GigyaPluginUtilsLang);
__webpack_provided_Object_dot_assign(window.gigya.pluginUtils.animation, GigyaPluginUtilsAnimation);
__webpack_provided_Object_dot_assign(window.gigya.services.socialize, animationService, layoutStyles, UIPopup);
__webpack_provided_Object_dot_assign(window.gigya.pluginUtils.DOM, DOM);
__webpack_provided_Object_dot_assign(window.gigya.utils.DOM, enableSafeCopy);
__webpack_provided_Object_dot_assign(window.gigya.pluginUtils.css, layoutCss);
__webpack_provided_Object_dot_assign(window.gigya.pluginUtils.layout, layoutText);
__webpack_provided_Object_dot_assign(window.gigya.pluginUtils.text, layoutTextFixer);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources, resources);
__webpack_provided_Object_dot_assign(window.gigya.global.XMLUtils, xml);
__webpack_provided_Object_dot_assign(window.gigya.global.resolver, defaultXmlProcessor);
__webpack_provided_Object_dot_assign(window.gigya.pluginUtils.validation, emailValidation);
__webpack_provided_Object_dot_assign(window.gigya.pluginUtils.domain, isInDomain);
window.gigya.utils.object.add(window.gigya.pluginUtils.lang, {
    getDateString: function (widgetParams, date) {
        if (!widgetParams || !widgetParams['dateFormat'])
            return;
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var dateFormat = widgetParams['dateFormat'];
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var monthName = monthNames[date.getMonth()];
        var y = date.getFullYear();
        return dateFormat
            .replace(/%dd/g, ('0' + d).slice(-2))
            .replace(/%d/g, d)
            .replace(/%MMMM/g, monthName)
            .replace(/%MMM/g, monthName.substr(0, 3))
            .replace(/%MM/g, ('0' + m).slice(-2))
            .replace(/%M/g, m)
            .replace(/%yyyy/g, y)
            .replace(/%yy/g, y.toString().slice(-2));
    },
});
if (!window.gigya.socialize) {
    window.gigya.socialize = {};
}
__webpack_provided_Object_dot_assign(window.gigya.socialize, UI);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/interfaces/IModalDialogParams.ts":
/*!***********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/interfaces/IModalDialogParams.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS.ts":
/*!***************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig.ts":
/*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams.ts":
/*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates.ts":
/*!*********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/pluginTester.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/pluginTester.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
(function mockBasePlugin(destination) {
    if (!destination.gigya)
        destination.gigya = {};
    if (!destination.gigya._)
        destination.gigya._ = {};
    if (!destination.gigya._.plugins)
        destination.gigya._.plugins = {};
    if (!destination.gigya._.plugins.BasePlugin) {
        destination.gigya._.plugins.BasePlugin = function (p, t, c) { };
        destination.gigya._.plugins.BasePlugin.isMock = true;
    }
})(window);
var PluginTester = /** @class */ (function () {
    function PluginTester(pluginType, defaultContainerID, injectionInfo) {
        var _this = this;
        if (defaultContainerID === void 0) { defaultContainerID = null; }
        this.defaultContainerID = defaultContainerID;
        this._instanceCount = 0;
        this.injector = new Map();
        this.disposeInstanceAfterTest = true;
        this.neverInit = false;
        beforeAll(function (done) {
            window.gigya.boot.ensureJsSdkLoaded(PluginTester.apiKey, function () {
                if (!injectionInfo) {
                    injectionInfo = pluginType['injectionInfo']();
                }
                _this._loadPlugin = PluginTester.getLoadFunc(injectionInfo);
                if (!_this.defaultContainerID) {
                    var container = document.createElement('div');
                    container.id = injectionInfo.name + 'Ut';
                    document.body.appendChild(container);
                }
                done();
            });
        });
        afterEach(function (done) {
            if (_this._instance && _this.disposeInstanceAfterTest) {
                _this._instance.dispose();
                delete _this._instance;
            }
            done();
        });
    }
    PluginTester.prototype.getInstance = function (params, templates, css, callback) {
        var _this = this;
        if (this._instance) {
            if (callback) {
                callback(this._instance);
            }
        }
        else {
            this.loadNewInstance(params, templates, css, function (instance) {
                _this._instance = instance;
                PluginTester.setMocks(_this._instance, _this.injector);
                if (callback) {
                    callback(_this._instance);
                }
            });
        }
    };
    PluginTester.setMocks = function (instance, injector) {
        injector.forEach(function (v, k) {
            if (typeof instance[k] !== 'undefined') {
                instance[k] = v;
            }
        });
    };
    PluginTester.prototype.isInstanceLoaded = function () {
        return Boolean(this._instance);
    };
    PluginTester.prototype.loadNewInstance = function (params, templates, css, callback) {
        if (!params) {
            params = {};
        }
        var originalGetInstance = params.getInstance;
        var onPluginLoaded = function (instance) {
            if (originalGetInstance)
                originalGetInstance(instance);
            if (callback)
                callback(instance);
        };
        params.getInstance = onPluginLoaded;
        if (this.neverInit && typeof params._noInit == 'undefined')
            params._noInit = true;
        if (!params.containerID)
            params.containerID = this.defaultContainerID;
        params['utInstanceCount'] = ++this._instanceCount;
        this._loadPlugin(params, templates, css);
    };
    PluginTester.getLoadFunc = function (injectionInfo) {
        var funcName = 'gigya.' + window.gigya._.UiApi.getApiName(injectionInfo.jsName, injectionInfo.methodName);
        var func = eval(funcName);
        if (!func) {
            if (typeof console == 'object' && console.warn) {
                console.warn(injectionInfo.name + "'s method could not be found in the api-list: " + funcName);
            }
        }
        return func;
    };
    PluginTester.apiKey = '3_9mGTgVStj1nTVaUGCQsP4GSNLl6gsHSoTSzd1MdhZ4cjDrYqKYra3fxqfAO5CFSE';
    return PluginTester;
}());
exports.PluginTester = PluginTester;


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

/***/ "./src/core/Gigya.Js/app/Utils/keyboard.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/keyboard.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var Keys;
(function (Keys) {
    Keys[Keys["escape"] = 27] = "escape";
    Keys[Keys["backspace"] = 8] = "backspace";
    Keys[Keys["enter"] = 13] = "enter";
})(Keys = exports.Keys || (exports.Keys = {}));
function onHotKeyClicked(hotKeyData, handler) {
    var htmlContext = hotKeyData.elementContext ? hotKeyData.elementContext : document.body;
    DOMUtils.addEventListener(htmlContext, 'keyup', function (event) {
        if (event.which == hotKeyData.key) {
            handler();
        }
    });
}
exports.onHotKeyClicked = onHotKeyClicked;


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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSlMuUGx1Z2luLnNjcmVlblNldDIvYXBwL3N0eWxlL2RlZmF1bHRDU1MuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQmFzZVBsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Nsb3NlUmVhc29ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0NvbGxlY3Rpb25VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Nzc1Jlc291cmNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Nzc1V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvRE9NVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9IdG1sUmVzb3VyY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvUGx1Z2luU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvUGx1Z2luVXRpbHMwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVVJMVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9Eb21BdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvR2xvYmFsRE9NLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9VSUhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9VSVBvcHVwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvYW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvYW5pbWF0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2VuYWJsZVNhZmVDb3B5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvZ2xvYmFsQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvaW1hZ2VQb3NpdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXQ1LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0Q3NzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0Q3NzRml4ZXJVdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2xheW91dFNwcml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRUZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0VGV4dEZpeGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvcmVzb3VyY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvdmFsaWRhdGlvbi9lbWFpbFZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS92YWxpZGF0aW9uL2lzRW1haWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS92YWxpZGF0aW9uL2lzSW5Eb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9nZW5lcmFsL2FycmF5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9nZW5lcmFsL2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9nZW5lcmFsL29iamVjdFV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvbGFuZ3VhZ2VzL2xhbmd1YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMveG1sL2RlZmF1bHRYbWxQcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy94bWwveG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMveG1sL3htbFJlc29sdmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvY3NzL2xlZ2FjeV9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9jc3MvbW9kZXJuX21vZGFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2RlZmF1bHRQcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL0FzeW5jTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvTG9hZERpbW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvTW9kYWxEaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL01vZGFsRGlhbG9nQ2xhc3Nlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvUG9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaGVscGVycy9Qb2xsZXJBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaHRtbC9sZWdhY3lNb2RhbC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaHRtbC9tb2RhbC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaHRtbC9tb2RhbENsb3NlQnV0dG9uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL3BsdWdpblRlc3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvRE9NLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2RvbWFpbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMva2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3N0cmluZ1V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy92aWV3cG9ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvY2RuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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Q0FBQyxDQUFDO1FBQ3JELElBQUksd0JBQXdCLENBQUMsTUFBTSxJQUFJLHFCQUFxQixFQUFFO1lBQzFELHFCQUFxQixHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7S0FDbEU7SUFFRCxtQ0FBbUM7SUFDbkMsSUFBSSxJQUFJLEVBQUU7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0tBQ0o7SUFFRCxPQUFPLFFBQVEsR0FBRyxLQUFLLEdBQUcsVUFBVSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUF2QkQsd0NBdUJDO0FBQ0QsU0FBZ0IsaUJBQWlCO0lBQzdCLE9BQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFGRCw4Q0FFQyIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5wbHVnaW5zLmJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW5kZXgudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmdpZ3lhLWNvbnNlbnQtdGl0bGUge1xcclxcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuIH1cXHJcXG4uZ2lneWEtY29uc2VudC1zdWJ0aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuLmdpZ3lhLWNvbnNlbnQtdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWNhcHRjaGEtd2lkZ2V0IGlmcmFtZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4jRnVuQ2FwdGNoYSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmdpZ3lhLXJlc2V0ICosIGRpdi5naWd5YS1yZXNldCwgLmdpZ3lhLXJlc2V0IHNwYW4sIC5naWd5YS1yZXNldCBhOmhvdmVyLCAuZ2lneWEtcmVzZXQgYTp2aXNpdGVkLCAuZ2lneWEtcmVzZXQgYTpsaW5rLCAuZ2lneWEtcmVzZXQgYTphY3RpdmUge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwOyAgIFxcclxcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWVycm9yLW1zZyB7XFxyXFxuICAgIGNvbG9yOiAjREQ0QjM5O1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWVycm9yLW1zZy5naWd5YS1lcnJvci1tc2ctYWN0aXZlIHtcXHJcXG4gICAgY29sb3I6ICNERDRCMzk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLXRlcm1zLWVycm9yLFxcclxcbi5naWd5YS1zY3JlZW4gaW5wdXQuZ2lneWEtZXJyb3IsXFxyXFxuLmdpZ3lhLXNjcmVlbiBpbnB1dFt0eXBlPXRleHRdLmdpZ3lhLWVycm9yLFxcclxcbi5naWd5YS1zY3JlZW4gaW5wdXRbdHlwZT1wYXNzd29yZF0uZ2lneWEtZXJyb3IsXFxyXFxuLmdpZ3lhLXNjcmVlbiBpbnB1dFt0eXBlPWVtYWlsXS5naWd5YS1lcnJvcixcXHJcXG4uZ2lneWEtc2NyZWVuIHNlbGVjdC5naWd5YS1lcnJvciB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREQ0QjM5O1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXHJcXG5cXHQtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXHJcXG5cXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zY3JlZW4gaW5wdXQuZ2lneWEtZXJyb3JbdHlwZT1jaGVja2JveF0sXFxyXFxuIC5naWd5YS1zY3JlZW4gaW5wdXQuZ2lneWEtZXJyb3JbdHlwZT1yYWRpb117XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zY3JlZW4gaW5wdXRbZGlzYWJsZWRdLFxcclxcbi5naWd5YS1zY3JlZW4gaW5wdXQ6ZGlzYWJsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xcclxcbiAgICBjb2xvcjogIzRhNGE0YTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtYXR0YWNoLWZpbGUtdXBsb2FkLWZvcm0ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1waG90by11cGxvYWQtZm9ybSA+IGlucHV0IHtcXHJcXG4gICAgZm9udC1zaXplOiA1MDBweDtcXHJcXG4gICAgZGlyZWN0aW9uOiBydGw7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtcGFzc3dvcmQtc3RyZW5ndGgtYnViYmxlIC5naWctYmFsbG9vbi1udWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7aW1nQmFzZX0vc2NyZWVuU2V0L3RyaWFuZ2xlX2xlZnQucG5nJyk7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGxlZnQ6ICsycHg7XFxyXFxufVxcclxcbi5naWd5YS1wYXNzd29yZC1zdHJlbmd0aC1idWJibGUgLmdpZy1iYWxsb29uLW51Yi11cCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtpbWdCYXNlfS9zY3JlZW5TZXQvdHJpYW5nbGVfdXAucG5nJyk7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIHRvcDogKzJweDtcXHJcXG59XFxyXFxuLmdpZ3lhLXBhc3N3b3JkLXN0cmVuZ3RoLWJ1YmJsZSAuZ2lnLWJhbGxvb24tbnViLXJpZ2h0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke2ltZ0Jhc2V9L3NjcmVlblNldC90cmlhbmdsZV9yaWdodC5wbmcnKTtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgbGVmdDogLTJweDtcXHJcXG59XFxyXFxuLmdpZ3lhLXBhc3N3b3JkLXN0cmVuZ3RoLWJ1YmJsZSAuZ2lnLWJhbGxvb24tbnViLWRvd24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7aW1nQmFzZX0vc2NyZWVuU2V0L3RyaWFuZ2xlX2Rvd24ucG5nJyk7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIHRvcDogLTJweDtcXHJcXG59XFxyXFxuLmdpZ3lhLXBhc3N3b3JkLXN0cmVuZ3RoLWJ1YmJsZSAuZ2lnLWJhbGxvb24tZnJhbWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNUY2O1xcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JGQ0ZEQTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IDFweCBSR0JBKDAsMCwwLDAuMDUpO1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggMXB4IFJHQkEoMCwwLDAsMC4wNSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggMXB4IFJHQkEoMCwwLDAsMC4wNSk7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1wYXNzd29yZC1zdHJlbmd0aC1idWJibGUgLmdpZy1iYWxsb29uIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uZ2lneWEtcGFzc3dvcmQtc3RyZW5ndGgtYnViYmxlLmdpZy1iYWxsb29uLWxlZnQgLmdpZy1iYWxsb29uIHtcXHJcXG4gICAgbGVmdDogKzEwcHg7XFxyXFxuICAgIHRvcDogKzNweDtcXHJcXG59XFxyXFxuLmdpZ3lhLXBhc3N3b3JkLXN0cmVuZ3RoLWJ1YmJsZS5naWctYmFsbG9vbi1yaWdodCAuZ2lnLWJhbGxvb24ge1xcclxcbiAgICBsZWZ0OiAtMTBweDtcXHJcXG4gICAgdG9wOiArM3B4O1xcclxcbn1cXHJcXG4uZ2lneWEtcGFzc3dvcmQtc3RyZW5ndGgtYnViYmxlLmdpZy1iYWxsb29uLXVwIC5naWctYmFsbG9vbiB7XFxyXFxuICAgIGxlZnQ6IC01cHg7XFxyXFxuICAgIHRvcDogKzE3cHg7XFxyXFxufVxcclxcbi5naWd5YS1wYXNzd29yZC1zdHJlbmd0aC1idWJibGUuZ2lnLWJhbGxvb24tZG93biAuZ2lnLWJhbGxvb24ge1xcclxcbiAgICBsZWZ0OiAtNXB4O1xcclxcbiAgICB0b3A6IC0xMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC10ZXh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtdGV4dCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLXRleHQtcmVxdWlyZW1lbnRzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtc2NvcmVUZXh0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtdG9vX3dlYWsgLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtc2NvcmVUZXh0IHtcXHJcXG4gICAgY29sb3I6ICNlNzY0Njg7XFxyXFxufVxcclxcbi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLXdlYWsgLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtc2NvcmVUZXh0IHtcXHJcXG4gICAgY29sb3I6ICNlNzY0Njg7XFxyXFxufVxcclxcbi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLWZhaXIgLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtc2NvcmVUZXh0IHtcXHJcXG4gICAgY29sb3I6ICNkOTliNGI7XFxyXFxufVxcclxcbi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLXN0cm9uZyAuZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC1zY29yZVRleHQge1xcclxcbiAgICBjb2xvcjogIzRhYmFiYztcXHJcXG59XFxyXFxuLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtdmVyeV9zdHJvbmcgLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtc2NvcmVUZXh0IHtcXHJcXG4gICAgY29sb3I6ICM0YWJhYmM7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLWJhciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YjZiNjtcXHJcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC1iYXItdG9vX3dlYWsge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzY0Njg7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLWJhci13ZWFrIHtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc2NDY4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC1iYXItZmFpciB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5OWI0YjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtYmFyLXN0cm9uZyB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhYmFiYztcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtYmFyLXZlcnlfc3Ryb25nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhYmFiYztcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWNhbGN1bGF0ZS1zaXplIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxyXFxuICAgIC1tcy16b29tOiAxICFpbXBvcnRhbnQ7XFxyXFxuICAgIHpvb206IDEgIWltcG9ydGFudDtcXHJcXG4gICAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xcclxcbiAgICB0b3A6IC0xMDAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWNhbGN1bGF0ZS1zaXplIGRpdi5naWd5YS1jYXB0Y2hhIHtcXHJcXG4gICAgbWluLXdpZHRoOiAzMThweDtcXHJcXG4gICAgbWluLWhlaWdodDogODBweDtcXHJcXG4gICAgX3dpZHRoOiAzMThweDtcXHJcXG4gICAgX2hlaWdodDogODBweDtcXHJcXG59XFxyXFxuLmdpZ3lhLWNhbGN1bGF0ZS1zaXplIGRpdi5naWd5YS1jYXB0Y2hhLnYyIHtcXHJcXG4gICAgbWluLWhlaWdodDogODBweDtcXHJcXG4gICAgX2hlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWNhbGN1bGF0ZS1zaXplIGRpdi5naWd5YS1zb2NpYWwtbG9naW4ge1xcclxcbiAgICBtaW4td2lkdGg6IDExMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgX3dpZHRoOiAxMTBweDtcXHJcXG4gICAgX2hlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1jYWxjdWxhdGUtc2l6ZSBkaXYuZ2lneWEtdGZhIHtcXHJcXG4gICAgbWluLXdpZHRoOiAzMjVweDtcXHJcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgIF93aWR0aDogMzI1cHg7XFxyXFxuICAgIF9oZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIGRpdi5naWd5YS1jb250YWluZXIuZ2lneWEtY29udGFpbmVyLWVuYWJsZWQge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtbG9naW5JRC1hdmFpbGFiaWxpdHkge1xcclxcbiAgICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1sb2dpbklELWF2YWlsYWJpbGl0eS1hdmFpbGFibGUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtpbWdCYXNlfS9hY2NvdW50cy9vay5wbmcnKTtcXHJcXG4gICAgY29sb3I6ICM0RkEzNzM7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1sb2dpbklELWF2YWlsYWJpbGl0eS1ub3QtYXZhaWxhYmxlIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7aW1nQmFzZX0vYWNjb3VudHMvZXJyb3IucG5nJyk7XFxyXFxuICAgIGNvbG9yOiAjREQ0QjM5O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtbG9naW5JRC1hdmFpbGFiaWxpdHktcHJvZ3Jlc3Mge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtpbWdCYXNlfS9hY2NvdW50cy9zbWFsbExvYWRlci5naWYnKTtcXHJcXG4gICAgY29sb3I6ICM2NjY2NjY7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1wcm9maWxlLXBob3RvIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtY2FsY3VsYXRlLXNpemUgZGl2LmdpZ3lhLXByb2ZpbGUtcGhvdG8ge1xcclxcbiAgICBtaW4td2lkdGg6IDY0cHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1zY3JlZW4tZGltbWVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIGZpbHRlcjogJ2FscGhhKG9wYWNpdHk9NTApJztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmdpZ3lhLXNjcmVlbi1sb2FkZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnJHtpbWdCYXNlfS9hY2NvdW50cy9iaWdMb2FkZXIuZ2lmJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6MzJweDtcXHJcXG4gICAgbWluLXdpZHRoOjMycHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWNvbnRlbnQge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctbW9iaWxlIGRpdi5naWd5YS1jb21wb3NpdGUtY29udHJvbC1jYXB0Y2hhLXdpZGdldCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLW1vYmlsZSAuZ2lneWEtc2NyZWVuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1zZWNyZXQtcXVlc3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtcGhvdG8tdXBsb2FkIHtcXHJcXG4gICAgaGVpZ2h0OiA2M3B4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIHpvb206IDE7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1waG90by11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB6b29tOiAxO1xcclxcbiAgICBtYXJnaW46IDAgOHB4IDhweCAwO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0VDRUNFO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXHJcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xcclxcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVxcXCIjRkZGRkZGXFxcIiwgZW5kQ29sb3JzdHI9XFxcIiNGMkYyRjJcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjRkZGRkZGKSwgdG8oI0YyRjJGMikpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNGRkZGRkYsICNGMkYyRjIpO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgZGl2LmdpZ3lhLXBob3RvLXVwbG9hZC1idXR0b246aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XFxcIiNGMkYyRjJcXFwiLCBlbmRDb2xvcnN0cj1cXFwiI0ZGRkZGRlxcXCIpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjRjJGMkYyKSwgdG8oI0ZGRkZGRikpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjRjJGMkYyLCAjRkZGRkZGKTtcXHJcXG4gICAgfVxcclxcblxcclxcbmRpdi5naWd5YS1waG90by11cGxvYWQtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgY29sb3I6ICM2NjY2NjY7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1waG90by11cGxvYWQtaW1hZ2Uge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHdpZHRoOiA2NHB4O1xcclxcbiAgICBoZWlnaHQ6IDY0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmdpZ3lhLXBob3RvLXVwbG9hZC1wYXRoIHtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgd2lkdGg6IDEwN3B4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgKmRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgem9vbTogMTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEuZ2lneWEtc2NyZWVuLWNhcHRpb24ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtZXJyb3ItZGlzcGxheSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiAgICAuZ2lneWEtZXJyb3ItZGlzcGxheS5naWd5YS1lcnJvci1kaXNwbGF5LWFjdGl2ZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbi5naWd5YS1oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLXRmYSBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5naWd5YS1zY3JlZW4gLmdpZ3lhLXRmYSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAuZ2lneWEtc2NyZWVuIC5naWd5YS10ZmEgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6ICM4N0I5RUE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmdpZ3lhLXNob3ctY2hlY2ttYXJrLmdpZ3lhLXZhbGlkIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtpbWdCYXNlfS9zY3JlZW5TZXQvY2hlY2ttYXJrVmFsaWQucG5nJyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDVweCBjZW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZ2lneWEtc2hvdy1jaGVja21hcmsuZ2lneWEtdmFsaWQuZ2lneWEtZW1wdHkge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZ2lneWEtc2hvdy1jaGVja21hcmsuZ2lneWEtcGVuZGluZyB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7aW1nQmFzZX0vc2NyZWVuU2V0L2NoZWNrbWFya1BlbmRpbmcuZ2lmJyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDVweCBjZW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbi8qIElmIGNoYW5nZWQsIHVwZGF0ZSBVSSBCdWlsZGVyIHRvby4gKi9cXHJcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC1pbWFnZSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5naWd5YS1pbWFnZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi5naWd5YS1pbWFnZVtkYXRhLWJhY2tncm91bmQtc2l6ZT1cXFwiZml0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcbi5naWd5YS1pbWFnZVtkYXRhLWJhY2tncm91bmQtc2l6ZT1cXFwiZml0LWhvcml6b250YWxseVxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XFxyXFxufVxcclxcbi5naWd5YS1pbWFnZVtkYXRhLWJhY2tncm91bmQtc2l6ZT1cXFwiZml0LXZlcnRpY2FsbHlcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xcclxcbn1cXHJcXG4uZ2lneWEtaW1hZ2VbZGF0YS1iYWNrZ3JvdW5kLXNpemU9XFxcInN0cmV0Y2hcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKklFOCovXFxyXFxuLmdpZ3lhLWllOCAuZ2lneWEtbGF5b3V0LWNlbGwge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTFweCFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1pZTggLmdpZ3lhLWF0dGFjaC1maWxlLXVwbG9hZC1mb3JtIC5naWd5YS1hdHRhY2gtZmlsZS11cGxvYWQtZmlsZS1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1pZTggLmdpZ3lhLWNhbGN1bGF0ZS1zaXplIGRpdi5naWd5YS1wcm9maWxlLXBob3RvIHtcXHJcXG4gICAgX3dpZHRoOiA2NHB4O1xcclxcbiAgICBfaGVpZ2h0OiA2NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtaWU4IGRpdi5naWd5YS1waG90by11cGxvYWQge1xcclxcbiAgICAqZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtaWU4IGRpdi5naWd5YS1waG90by11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgKmRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuLmdpZ3lhLWllOCAuZ2lneWEtc2NyZWVuIC5naWd5YS1wbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjQTlBOUJCO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgdGV4dC1pbmRlbnQ6IDA7XFxyXFxufVxcclxcbi5naWd5YS1pZTggLmdpZ3lhLXBsYWNlaG9sZGVyOmZvY3VzIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi5naWd5YS1pZTggLmdpZ3lhLXNjcmVlbiAuZ2lneWEtaW5wdXQtdGV4dDpmb2N1cyB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICB0ZXh0LWluZGVudDogMDtcXHJcXG59XFxyXFxuLmdpZ3lhLWllOCAuZ2lneWEtc2NyZWVuLmdpZ3lhLWlucHV0LXRleHQsIC5naWd5YS1pZTggLmdpZ3lhLXNjcmVlbiAuZ2lneWEtaW5wdXQtdGV4dC5naWd5YS1lcnJvciB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKklFOSovXFxyXFxuLmdpZ3lhLWllOSAuZ2lneWEtc2NyZWVuIGlucHV0LmdpZ3lhLWlucHV0LXRleHQsIFxcclxcbi5naWd5YS1pZTkgLmdpZ3lhLXNjcmVlbiBpbnB1dC5naWd5YS1pbnB1dC1wYXNzd29yZCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcHg7XFxyXFxuICAgIHRleHQtaW5kZW50OiAwOyAgIFxcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtaWU5IC5naWd5YS1zY3JlZW4gLmdpZ3lhLWlucHV0LXRleHQ6Zm9jdXMsIC5naWd5YS1pZTkgLmdpZ3lhLXNjcmVlbiAuZ2lneWEtaW5wdXQtcGFzc3dvcmQ6Zm9jdXMge1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggIzFkODdmZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg3QjlFQTtcXHJcXG4gICAgLypwYWRkaW5nLWxlZnQ6IDVweDsqL1xcclxcbiAgICB0ZXh0LWluZGVudDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWllOSAuZ2lneWEtc2NyZWVuIGlucHV0LmdpZ3lhLWlucHV0LXRleHQuZ2lneWEtcGxhY2Vob2xkZXIsIC5naWd5YS1pZTkgLmdpZ3lhLXNjcmVlbiBpbnB1dC5naWd5YS1pbnB1dC1wYXNzd29yZC5naWd5YS1wbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjQTlBOUJCO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICAgdGV4dC1pbmRlbnQ6IDA7XFxyXFxuICAgIC8qcGFkZGluZy1sZWZ0OiA0cHg7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLypJRTEwKi9cXHJcXG4uZ2lneWEtaWUxMCAuZ2lneWEtc2NyZWVuIGlucHV0LmdpZ3lhLWlucHV0LXRleHQsIFxcclxcbi5naWd5YS1pZTEwIC5naWd5YS1zY3JlZW4gaW5wdXQuZ2lneWEtaW5wdXQtcGFzc3dvcmQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKnJlbW92ZSBib3R0b20gcGFkZGluZyBmb3Igb3V0bGluZSB3aGVuIGZvY3VzZWQgKG5vdCBuZWVkZWQgYW55d2F5KSovXFxyXFxuLmdpZ3lhLXNjcmVlbiAuZm9yZ290LXBhc3N3b3JkLWNlbGwgYSxcXHJcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC5naWd5YS1mb3Jnb3RQYXNzd29yZCxcXHJcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC5naWd5YS1jaGFuZ2UtcGFzc3dvcmQtbGluayxcXHJcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC5naWd5YS1jb21wb3NpdGUtY29udHJvbC1saW5re1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1hcnJheS1tYW5hZ2VyLmRpc2FibGUtZGVsZXRlID4gLmdpZ3lhLWFycmF5LXRlbXBsYXRlID4gLmJ1dHRvbnMtd3JhcHBlciBidXR0b24uZ2lneWEtYXJyYXktcmVtb3ZlLWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWFycmF5LXdpZGdldCB7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC1hcnJheS13aWRnZXQgLmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWFycmF5LXdpZGdldCB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuLmdpZ3lhLXNjcmVlbiAuZ2lneWEtY29tcG9zaXRlLWNvbnRyb2wtYXJyYXktd2lkZ2V0IGRpdi5naWd5YS1hcnJheS10ZW1wbGF0ZSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxyXFxufVxcclxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWFycmF5LXdpZGdldCBkaXYuZ2lneWEtYXJyYXktdGVtcGxhdGU6bm90KDpsYXN0LW9mLXR5cGUpIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICNDMUMxQzEgc29saWQ7XFxyXFxufVxcclxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWFycmF5LXdpZGdldCBkaXYuZ2lneWEtYXJyYXktdGVtcGxhdGUgLmJ1dHRvbnMtd3JhcHBlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC1hcnJheS13aWRnZXQgZGl2LmdpZ3lhLWFycmF5LXRlbXBsYXRlIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogIzEzNzFiOTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC1hcnJheS13aWRnZXQgZGl2LmdpZ3lhLWFycmF5LXRlbXBsYXRlIGJ1dHRvbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1kaXNhYmxlZC10ZXh0IHtcXHJcXG4gICAgY29sb3I6ICM4YThhOGE7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLXNjcmVlbiAuZ2lneWEtZGlzYWJsZWQtdGV4dDpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1kaXNhYmxlZC10ZXh0OmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiAjOGE4YThhO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblwiIiwiaW1wb3J0IHsgSVBsdWdpbiwgSUluamVjdGlvbkluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvQVBJL1VpQXBpJztcclxuaW1wb3J0IHsgSVBsdWdpblBhcmFtcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luUGFyYW1zJztcclxuaW1wb3J0IHsgSVBsdWdpblRlbXBsYXRlcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luVGVtcGxhdGVzJztcclxuaW1wb3J0IHsgSVBsdWdpbkNTUyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ1NTJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2cgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvTW9kYWxEaWFsb2cnO1xyXG5pbXBvcnQgeyBQbHVnaW5TdHlsZSwgZ2V0UGx1Z2luU3R5bGVDbGFzcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvUGx1Z2luU3R5bGVzJztcclxuaW1wb3J0IHsgTG9hZERpbW1lciB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaGVscGVycy9Mb2FkRGltbWVyJztcclxuaW1wb3J0IHsgSVBsdWdpbkNvbmZpZyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ29uZmlnJztcclxuaW1wb3J0IHsgUG9sbGVyIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL1BvbGxlcic7XHJcbmltcG9ydCB7IGdldFRlbXBsYXRlcywgZ2V0Q3NzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9yZXNvdXJjZXMnO1xyXG5pbXBvcnQgeyBJbnZhbGlkUHJvcGVydHlBY3Rpb24sIFZpZXdwb3J0U2l6ZUFjdGlvbiwgQ29udGFpbmVyU2l6ZUFjdGlvbiB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaGVscGVycy9Qb2xsZXJBY3Rpb25zJztcclxuaW1wb3J0IHsgYWRkQnJvd3NlckluZm9DbGFzc2VzVG9FbGVtZW50IH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9ET00nO1xyXG5pbXBvcnQgeyBDbG9zZVJlYXNvbnMgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Nsb3NlUmVhc29ucyc7XHJcbmltcG9ydCB7IGFkZENzcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQ3NzVXRpbHMnO1xyXG5pbXBvcnQgeyBnZXRMb2NhbGl6ZWRUZXh0IH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9sYW5ndWFnZXMvbGFuZ3VhZ2UnO1xyXG5pbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gJy4uLy4uL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XHJcbmltcG9ydCB7IEtleXMgfSBmcm9tIFwiLi4vLi4vR2lneWEuSnMvYXBwL1V0aWxzL2tleWJvYXJkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3NzRmxhZ3M6IHsgW3BsdWdpbk5hbWU6IHN0cmluZ106IE9iamVjdCB9ID0ge307XHJcbmV4cG9ydCBjbGFzcyBCYXNlUGx1Z2luPFAgZXh0ZW5kcyBJUGx1Z2luUGFyYW1zLCBIVCBleHRlbmRzIElQbHVnaW5UZW1wbGF0ZXMsIENUIGV4dGVuZHMgSVBsdWdpbkNTUz4gZXh0ZW5kcyBnaWd5YS5fLkJhc2VPYmplY3Q8SVBsdWdpblBhcmFtcz5cclxuICAgIGltcGxlbWVudHMgSVBsdWdpbiB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIHB1YmxpYyBjb250YWluZXJJRDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLy8gSW1hZ2VzXHJcbiAgICBwdWJsaWMgc3RhdGljIGdsb2JhbFBpeGVsUmF0aW8gPSB3aW5kb3dbJ2RldmljZVBpeGVsUmF0aW8nXSA/IE1hdGgubWluKE1hdGguY2VpbCh3aW5kb3dbJ2RldmljZVBpeGVsUmF0aW8nXSksIDMpIDogMTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2xvYmFsSW1nQmFzZSA9IGdpZ3lhLl8uZ2V0SW1nQ2RuUmVzb3VyY2UoKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3BpeGVsUmF0aW8gPSBCYXNlUGx1Z2luLmdsb2JhbFBpeGVsUmF0aW87XHJcbiAgICBwcm90ZWN0ZWQgX2ltZ0Jhc2UgPSBCYXNlUGx1Z2luLmdsb2JhbEltZ0Jhc2U7XHJcbiAgICBwcm90ZWN0ZWQgX2ltZ0V4dCA9ICdwbmcnO1xyXG5cclxuICAgIC8vIFRlbXBsYXRlcyAmIENTU1xyXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVzOiBIVDtcclxuICAgIHByaXZhdGUgX2NzczogQ1Q7XHJcblxyXG4gICAgLy8gTW9kYWxcclxuICAgIHByb3RlY3RlZCBfbW9kYWxEaWFsb2c6IE1vZGFsRGlhbG9nO1xyXG4gICAgcHJvdGVjdGVkIF9jYXB0aW9uRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgaXNNb2RhbDogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBNT0JJTEVfTU9EQUxfTUlOX1dJRFRIID0gNDAwO1xyXG5cclxuICAgIC8vIFVJXHJcbiAgICBwdWJsaWMgaXNSdGw6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNNb2JpbGVVSTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgYWRkZWRDc3M6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgbGFuZyA9IHRoaXMucGFyYW1zLmxhbmc7XHJcbiAgICBwcm90ZWN0ZWQgX3N0eWxlOiBQbHVnaW5TdHlsZSA9IFBsdWdpblN0eWxlLm1vZGVybjtcclxuICAgIHByb3RlY3RlZCBfbG9hZGluZ0luZGljYXRvcjogTG9hZERpbW1lcjtcclxuXHJcbiAgICAvLyBjb25maWd1cmF0aW9uXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBJUGx1Z2luQ29uZmlnPFA+O1xyXG4gICAgcHVibGljIGxvY2FsaXplZEpzTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8vIFBvbGxpbmdcclxuICAgIHByb3RlY3RlZCBfcG9sbGVyOiBQb2xsZXIgPSBuZXcgUG9sbGVyKCk7XHJcbiAgICBwcm90ZWN0ZWQgUE9MTF9JTlRFUlZBTCA9IDE1MDtcclxuXHJcbiAgICAvLyBFdmVudHNcclxuICAgIHB1YmxpYyBvblJlZnJlc2hFeHRlcm5hbENvbXBvbmVudHNFdmVudCgpOiBnaWd5YS5fLkV2ZW50V3JhcHBlcjwoKSA9PiB2b2lkPiB7XHJcbiAgICAgICAgLy8gdGhpcyBzaG91bGQgYmUgcHJvdGVjdGVkIFthZnRlciByZXdyaXRlIG9mIHNjcmVlbnNldFBsdWdpbl1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFdmVudCgnb25SZWZyZXNoRXh0ZXJuYWxDb21wb25lbnRzRXZlbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaEV4dGVybmFsQ29tcG9uZW50cygpIHtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoUGx1Z2luRXZlbnQoJ29uUmVmcmVzaEV4dGVybmFsQ29tcG9uZW50c0V2ZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3RydWN0aW5nXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFyYW1zOiBQLCBwdWJsaWMgZXhwbGljaXRQYXJhbXM6IFAsIHB1YmxpYyBpbmplY3Rpb25JbmZvOiBJSW5qZWN0aW9uSW5mbykge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcywgZXhwbGljaXRQYXJhbXMsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IDxJUGx1Z2luQ29uZmlnPFA+PmdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbdGhpcy5pbmplY3Rpb25JbmZvLCB0aGlzLmdldENvbmZpZygpXSk7XHJcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRKc05hbWUgPSB0aGlzLmdldFRyYW5zbGF0aW9uSnNOYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUcmFuc2xhdGlvbkpzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBqc05hbWUgPSB0aGlzLmNvbmZpZy5qc05hbWU7XHJcblxyXG4gICAgICAgIGpzTmFtZSA9IGpzTmFtZS5zcGxpdCgnX3YnKVswXTsgLy8gcmVtb3ZlIHZlcnNpb24gc3BlY2lmaWNcclxuXHJcbiAgICAgICAgaWYgKGpzTmFtZS5pbmRleE9mKCcuanMnKSA9PT0gLTEpIGpzTmFtZSA9IGpzTmFtZSArICcuanMnO1xyXG5cclxuICAgICAgICByZXR1cm4ganNOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyAqKiBzdGFydGluZyBwbHVnaW4gcHJvY2VzcyAtIHN0YXJ0ICoqKlxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGFyYW1zLmNvbnRhaW5lcklEICYmICF0aGlzLmNvbmZpZy5hbGxvd01vZGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hJbnZhbGlkUGFyYW1FcnJvcignY29udGFpbmVySUQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY29udGFpbmVyIGV4aXN0cyBvciB0aGUgcGx1Z2luIHNob3VsZCBiZSBkcmF3biBhcyBtb2RhbFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyYW1zLmNvbnRhaW5lcklEKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW9kYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoW3RoaXMuY29uZmlnLmRlZmF1bHRNb2RhbFBhcmFtcywgdGhpcy5wYXJhbXNdKSBhcyBQO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmFtcy5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lcklEID0gdGhpcy5wYXJhbXMuY29udGFpbmVySUQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hJbnZhbGlkUGFyYW1FcnJvcignY29udGFpbmVySUQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHJlcXVpcmVkIHBhcmFtcyBhcmUgbWlzc2luZywgZGlzcGF0Y2ggYW4gZXJyb3IgYW5kIHN0b3AgcGx1Z2luIGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlUGFyYW1zKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmdyb3VwKGBpbml0ICR7dGhpcy5pbmplY3Rpb25JbmZvLm5hbWV9ICgke3RoaXMuY29udGFpbmVySUR9KWApLmVuZFdoZW4oXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMuX25vSW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBYnN0cmFjdCBpbml0aWFsaXphdGlvbiwgaW52b2tpbmcgJ29uTG9hZCcgZXZlbnQgd2hlbiBmaW5pc2hlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgoaXNTdWNjZWVkPzogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb21wbGV0ZShpc1N1Y2NlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VUkoKSB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6aW5nIHRlbXBsYXRlcyAmIGNzcy5cclxuICAgICAgICB0aGlzLl90ZW1wbGF0ZXMgPSBnZXRUZW1wbGF0ZXM8SFQ+KFsnYmFzZScsIHRoaXMuY29uZmlnLm5hbWVdKTtcclxuICAgICAgICB0aGlzLl9jc3MgPSBnZXRDc3M8Q1Q+KFsnYmFzZScsIHRoaXMuY29uZmlnLm5hbWVdKTtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRpbmcgaWYgbW9iaWxlIHVpLlxyXG4gICAgICAgIHZhciBkZXZpY2VUeXBlID0gZ2lneWEuXy5EZXZpY2VUeXBlcy5fdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5kZXZpY2VUeXBlKSBkZXZpY2VUeXBlID0gZ2lneWEuXy5EZXZpY2VUeXBlc1t0aGlzLnBhcmFtcy5kZXZpY2VUeXBlLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgIGRldmljZVR5cGUgPSBkZXZpY2VUeXBlIHx8IHRoaXMuZ2V0Q29uZmlnKCkuZGVmYXVsdERldmljZVR5cGUgfHwgZ2lneWEuXy5EZXZpY2VUeXBlcy5kZXNrdG9wO1xyXG5cclxuICAgICAgICB0aGlzLnBhcmFtcy5kZXZpY2VUeXBlID0gZ2lneWEuXy5EZXZpY2VUeXBlc1tkZXZpY2VUeXBlXTtcclxuXHJcbiAgICAgICAgdGhpcy5pc01vYmlsZVVJID0gZGV2aWNlVHlwZSA9PSBnaWd5YS5fLkRldmljZVR5cGVzLm1vYmlsZSB8fCAoZGV2aWNlVHlwZSA9PSBnaWd5YS5fLkRldmljZVR5cGVzLmF1dG8gJiYgZ2lneWEubG9jYWxJbmZvLmlzTW9iaWxlICYmIGdpZ3lhLmxvY2FsSW5mby5pc01vYmlsZUFwcCk7XHJcblxyXG4gICAgICAgIC8vIEdldHRpbmcgcmVhZGluZyBkaXJlY3Rpb24uXHJcbiAgICAgICAgdGhpcy5pc1J0bCA9IHRoaXMubGFuZyA9PSAnaGUnIHx8IHRoaXMubGFuZyA9PSAnYXInO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRDb250YWluZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlICE9IFBsdWdpblN0eWxlLm5vbmUpIHRoaXMuaW5qZWN0Q3NzKCk7XHJcblxyXG4gICAgICAgIC8vIFNldHRpbmcgcG9sbGVyIGZvciBhdXRvLWRpc3Bvc2UuXHJcbiAgICAgICAgdGhpcy5fcG9sbGVyLmFkZEFjdGlvbnMobmV3IEludmFsaWRQcm9wZXJ0eUFjdGlvbih0aGlzLCAnY29udGFpbmVyJywgKCkgPT4gdGhpcy5kaXNwb3NlKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRDb21wbGV0ZShpc1N1Y2NlZWQ6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKCFpc1N1Y2NlZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaFBsdWdpbkV2ZW50KCdsb2FkJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbW9kYWxEaWFsb2cgJiYgIXRoaXMuY29uZmlnLmRpc2FibGVNb2RhbENvbnRhaW5lckluaXQpIHRoaXMuX21vZGFsRGlhbG9nLnNob3dBbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZW5hYmxlVmlld3BvcnRQb2xsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9sbGVyLmFkZEFjdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWaWV3cG9ydFNpemVBY3Rpb24oKG9sZCwgY3VycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vIGNoYW5naW5nIG1vZGFsIHRvIG1vYmlsZS1tb2RhbCB3aGVuIHZpZXdwb3J0J3Mgc21hbGwgZW5vdWdoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIChjdXJyLndpZHRoIDwgdGhpcy5NT0JJTEVfTU9EQUxfTUlOX1dJRFRIKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgdGhpcy5fbW9kYWxEaWFsb2cuY2hhbmdlVG9Nb2JpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgdGhpcy5fbW9kYWxEaWFsb2cuY2hhbmdlVG9XZWIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVmlld3BvcnRTaXplQ2hhbmdlZChvbGQsIGN1cnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJNb2RhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEV4dGVybmFsQ29tcG9uZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHBsdWdpbiBpcyBub3QgbW9kYWwsIHRoZSB3aWR0aCBpcyBzZXQsIHNpemUgcG9sbGluZyBpcyBlbmFibGVkLCBhbmQgd2lkdGggZW5kcyB3aXRoICclJyBjaGFyYWN0ZXIsIHN0YXJ0IHBvbGxpbmcgZm9yIGNvbnRhaW5lciBzaXplIGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmVuYWJsZVNpemVQb2xsaW5nICYmICghdGhpcy5wYXJhbXMud2lkdGggfHwgdGhpcy5wYXJhbXMud2lkdGgudG9TdHJpbmcoKS5pbmRleE9mKCclJywgdGhpcy5wYXJhbXMud2lkdGgubGVuZ3RoIC0gMSkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BvbGxlci5hZGRBY3Rpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29udGFpbmVyU2l6ZUFjdGlvbih0aGlzLmNvbnRhaW5lciwgKG9sZCwgY3VycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVQbHVnaW4ob2xkLCBjdXJyKTsgLy8gY2FsbGluZyBhYnN0cmFjdCBtZXRob2QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hFeHRlcm5hbENvbXBvbmVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU3RhcnQgcG9sbGluZyFcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BvbGxlci5oYXNBY3Rpb25zKCkpIHRoaXMuX3BvbGxlci5zdGFydCh0aGlzLlBPTExfSU5URVJWQUwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdENvbnRhaW5lcigpOiB2b2lkIHtcclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHBvcHVwIGNvbnRhaW5lciBpZiBuZWVkZWQsIG90aGVyd2lzZSB1c2UgY29udGFpbmVySURcclxuICAgICAgICBpZiAodGhpcy5pc01vZGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdE1vZGFsQ29udGFpbmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2V0IHRoZSBjb250YWluZXIgc2l6ZVxyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2V0U2l6ZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5wYXJhbXMud2lkdGgsIHRoaXMucGFyYW1zLmhlaWdodCwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRNZXRhRGF0YUNsYXNzZXModGhpcy5jb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLnJlc3BvbnNpdmUpIHRoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ0luZGljYXRvciA9IG5ldyBMb2FkRGltbWVyKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXRNb2RhbENvbnRhaW5lcigpIHtcclxuICAgICAgICB0aGlzLl9zdHlsZSA9IHRoaXMuZ2V0UGx1Z2luU3R5bGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbERpYWxvZygpO1xyXG5cclxuICAgICAgICB0aGlzLl9jYXB0aW9uRWxlbWVudCA9IHRoaXMuX21vZGFsRGlhbG9nLmdldENhcHRpb25Db250YWluZXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX21vZGFsRGlhbG9nLmdldENvbnRlbnRDb250YWluZXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcklEID0gdGhpcy5jb250YWluZXIuaWQ7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ0luZGljYXRvciA9IHRoaXMuX21vZGFsRGlhbG9nLmdldExvYWRpbmdJbmRpY2F0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGRpbmcgbWV0YS1kYXRhIGNsYXNzZXMgW2ZvciBDU1Mgc2VsZWN0b3JzXSBmb3IgdGhlIHRvcCBlbGVtZW50IG9mIHRoZSBwbHVnaW4gLlxyXG4gICAgcHJvdGVjdGVkIGFkZE1ldGFEYXRhQ2xhc3Nlcyh0b3BFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMuZ2V0UGx1Z2luU3R5bGUoKTtcclxuICAgICAgICBzd2l0Y2ggKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3R5bGUubGVnYWN5OlxyXG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0eWxlLm1vZGVybjpcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0b3BFbGVtZW50LCBnZXRQbHVnaW5TdHlsZUNsYXNzKHN0eWxlKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkQnJvd3NlckluZm9DbGFzc2VzVG9FbGVtZW50KHRvcEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQbHVnaW5TdHlsZSgpOiBQbHVnaW5TdHlsZSB7XHJcbiAgICAgICAgcmV0dXJuIFBsdWdpblN0eWxlW3RoaXMucGFyYW1zLmRpYWxvZ1N0eWxlXSB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0RGlhbG9nU3R5bGUgfHwgdGhpcy5fc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDb250YWluZXJNaW5TaXplKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5oZWlnaHQgJiYgdGhpcy5wYXJhbXMuaGVpZ2h0ICE9ICdhdXRvJyAmJiB0aGlzLnBhcmFtcy5oZWlnaHQuaW5kZXhPZignJScpID09IC0xKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSB0aGlzLnBhcmFtcy5oZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMud2lkdGggJiYgdGhpcy5wYXJhbXMud2lkdGggIT0gJ2F1dG8nICYmIHRoaXMucGFyYW1zLndpZHRoLmluZGV4T2YoJyUnKSA9PSAtMSkgdGhpcy5jb250YWluZXIuc3R5bGUubWluV2lkdGggPSB0aGlzLnBhcmFtcy53aWR0aCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVNb2RhbERpYWxvZygpIHtcclxuICAgICAgICAvLyBHZXR0aW5nIGNhcHRpb25cclxuICAgICAgICB2YXIgdGl0bGU6IHN0cmluZztcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuY2FwdGlvblRleHQpIHRpdGxlID0gdGhpcy5wYXJhbXMuY2FwdGlvblRleHQ7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wYXJhbXMuY2FwdGlvblRleHRLZXkpIHRpdGxlID0gdGhpcy5nZXRUZXh0KHRoaXMucGFyYW1zLmNhcHRpb25UZXh0S2V5KTtcclxuICAgICAgICBlbHNlIHRpdGxlID0gJyZuYnNwOyc7XHJcblxyXG4gICAgICAgIHZhciBjbG9zZUltYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vIEdldHRpbmcgZGltIGVmZmVjdC5cclxuICAgICAgICB2YXIgZGltTW9kYWw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtcy5kaW1EaWFsb2dCYWNrZ3JvdW5kICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGRpbU1vZGFsID0gdGhpcy5wYXJhbXMuZGltRGlhbG9nQmFja2dyb3VuZDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHRNb2RhbFBhcmFtcyAmJiB0eXBlb2YgdGhpcy5jb25maWcuZGVmYXVsdE1vZGFsUGFyYW1zLmRpbURpYWxvZ0JhY2tncm91bmQgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgZGltTW9kYWwgPSB0aGlzLmNvbmZpZy5kZWZhdWx0TW9kYWxQYXJhbXMuZGltRGlhbG9nQmFja2dyb3VuZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaW1Nb2RhbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBob3RvVXJsO1xyXG4gICAgICAgIHZhciBjc3MgPSB0aGlzLnBhcmFtcy5tb2RhbENzcztcclxuICAgICAgICB2YXIgaXNMZWdhY3kgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCFjc3MpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbHVnaW5TdHlsZS5tb2Rlcm46XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzID0gdGhpcy5nZXRDc3MoKS5tb2Rlcm5fbW9kYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9VcmwgPSB0aGlzLmdldFBob3RvRnVsbE5hbWUoJ2dtL2Nsb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsdWdpblN0eWxlLmxlZ2FjeTpcclxuICAgICAgICAgICAgICAgICAgICBpc0xlZ2FjeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzID0gdGhpcy5nZXRDc3MoKS5sZWdhY3lfbW9kYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9VcmwgPSB0aGlzLl9pbWdCYXNlICsgJ2dtL0Nsb3NlQnV0dG9uLicgKyB0aGlzLl9pbWdFeHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsdWdpblN0eWxlLm5vbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9VcmwgPSB0aGlzLmdldFBob3RvRnVsbE5hbWUoJ2dtL2Nsb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIGRpYWxvZyBzdHlsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjc3MgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChjc3MsIHsgaW1nQmFzZTogdGhpcy5faW1nQmFzZSB9KTtcclxuXHJcbiAgICAgICAgLy8gR2V0dGluZyBjbG9zZS1pbWFnZVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5jbG9zZUltYWdlKSB7XHJcbiAgICAgICAgICAgIGNsb3NlSW1hZ2UgPSB0aGlzLnBhcmFtcy5jbG9zZUltYWdlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsb3NlSW1hZ2UgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLmdldFRlbXBsYXRlcygpLm1vZGFsQ2xvc2VCdXR0b24sIHtcclxuICAgICAgICAgICAgICAgIGltZ1VybDogdGhpcy5wYXJhbXNbJ2Nsb3NlSW1hZ2VVcmwnXSB8fCBwaG90b1VybCxcclxuICAgICAgICAgICAgICAgIGltZ0hlaWdodDogdGhpcy5wYXJhbXNbJ2Nsb3NlSW1hZ2VIZWlnaHQnXSB8fCAxNSxcclxuICAgICAgICAgICAgICAgIGltZ1dpZHRoOiB0aGlzLnBhcmFtc1snY2xvc2VJbWFnZVdpZHRoJ10gfHwgMTUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbW9kYWxEaWFsb2cgPSBuZXcgTW9kYWxEaWFsb2coXHJcbiAgICAgICAgICAgIHRoaXMuaW5qZWN0aW9uSW5mby5tZXRob2ROYW1lLFxyXG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlVUksXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsVGVtcGxhdGU6IHRoaXMucGFyYW1zLm1vZGFsVGVtcGxhdGUgfHwgKGlzTGVnYWN5ID8gdGhpcy5nZXRUZW1wbGF0ZXMoKS5sZWdhY3lNb2RhbCA6IHRoaXMuZ2V0VGVtcGxhdGVzKCkubW9kYWwpLFxyXG4gICAgICAgICAgICAgICAgbW9kYWxDc3M6IGNzcyxcclxuICAgICAgICAgICAgICAgIGNhcHRpb25UZXh0OiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlSW1hZ2U6IGNsb3NlSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBkaW1EaWFsb2dCYWNrZ3JvdW5kOiBkaW1Nb2RhbCxcclxuICAgICAgICAgICAgICAgIG5ld01vZGFsOiB0aGlzLnBhcmFtcy5uZXdNb2RhbCxcclxuICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZTogcmVhc29uID0+IHRoaXMuY2xvc2UoQ2xvc2VSZWFzb25zW3JlYXNvbl0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc0xlZ2FjeSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmFkZE1ldGFEYXRhQ2xhc3Nlcyh0aGlzLl9tb2RhbERpYWxvZy5nZXRNb2RhbERpYWxvZ0NvbnRhaW5lcigpKTtcclxuICAgICAgICB2YXIgaG90S2V5RGF0YTogZ2lneWEudXRpbHMua2V5Ym9hcmQuSUhvdEtleSA9IHtcclxuICAgICAgICAgICAga2V5OiBLZXlzLmVzY2FwZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBnaWd5YS51dGlscy5rZXlib2FyZC5vbkhvdEtleUNsaWNrZWQoaG90S2V5RGF0YSBhcyBhbnksICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5qZWN0Q3NzKCkge1xyXG4gICAgICAgIC8vLyBUT0RPOiBjYW4gd2UgZ2V0IHJpZCBvZiB0aGlzIGZ1bmN0aW9uP1xyXG5cclxuICAgICAgICB2YXIgZmluYWxDc3MgPSAnJztcclxuICAgICAgICB2YXIgY3NzUHJlZml4ID0gdGhpcy5wYXJhbXNbJ2Nzc1ByZWZpeCddO1xyXG4gICAgICAgIHZhciBkZWZhdWx0Q3NzID0gdGhpcy5nZXRDc3MoKTtcclxuXHJcbiAgICAgICAgdmFyIGpzTmFtZSA9IHRoaXMuY29uZmlnLmpzTmFtZTtcclxuICAgICAgICBpZiAoIWNzc0ZsYWdzW2pzTmFtZV0pIGNzc0ZsYWdzW2pzTmFtZV0gPSB7fTtcclxuICAgICAgICB2YXIgY3NzRGlkTG9hZEZsYWdzID0gY3NzRmxhZ3NbanNOYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKGNzc1ByZWZpeCB8fCAhdGhpcy5hZGRlZENzcykge1xyXG4gICAgICAgICAgICBmaW5hbENzcyA9IHRoaXMuYWRkQ3NzSWZEaWRudExvYWQoJ3Jlc2V0JywgZGVmYXVsdENzcywgY3NzRGlkTG9hZEZsYWdzLCBmaW5hbENzcyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnRsKSBmaW5hbENzcyA9IHRoaXMuYWRkQ3NzSWZEaWRudExvYWQoJ3Jlc2V0UnRsJywgZGVmYXVsdENzcywgY3NzRGlkTG9hZEZsYWdzLCBmaW5hbENzcyk7XHJcblxyXG4gICAgICAgICAgICBmaW5hbENzcyA9IHRoaXMuYWRkQ3NzSWZEaWRudExvYWQoJ2dsb2JhbCcsIGRlZmF1bHRDc3MsIGNzc0RpZExvYWRGbGFncywgZmluYWxDc3MpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1J0bCkgZmluYWxDc3MgPSB0aGlzLmFkZENzc0lmRGlkbnRMb2FkKCdnbG9iYWxSdGwnLCBkZWZhdWx0Q3NzLCBjc3NEaWRMb2FkRmxhZ3MsIGZpbmFsQ3NzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsQ3NzID0gdGhpcy5hZGRDc3NJZkRpZG50TG9hZCgnbW9iaWxlJywgZGVmYXVsdENzcywgY3NzRGlkTG9hZEZsYWdzLCBmaW5hbENzcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1J0bCkgZmluYWxDc3MgPSB0aGlzLmFkZENzc0lmRGlkbnRMb2FkKCdtb2JpbGVSdGwnLCBkZWZhdWx0Q3NzLCBjc3NEaWRMb2FkRmxhZ3MsIGZpbmFsQ3NzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsQ3NzID0gdGhpcy5hZGRDc3NJZkRpZG50TG9hZCgnbm9uTW9iaWxlJywgZGVmYXVsdENzcywgY3NzRGlkTG9hZEZsYWdzLCBmaW5hbENzcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1J0bCkgZmluYWxDc3MgPSB0aGlzLmFkZENzc0lmRGlkbnRMb2FkKCdub25Nb2JpbGVSdGwnLCBkZWZhdWx0Q3NzLCBjc3NEaWRMb2FkRmxhZ3MsIGZpbmFsQ3NzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpbmFsQ3NzKSBhZGRDc3MoZmluYWxDc3MsIGNzc1ByZWZpeCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkZWRDc3MgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmhhc01vYmlsZVVJICYmIHRoaXMuaXNNb2JpbGVVSSAmJiB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vICoqIHN0YXJ0aW5nIHBsdWdpbiBwcm9jZXNzIC0gZW5kICoqKlxyXG5cclxuICAgIC8vLyAqKiBcIkFic3RyYWN0XCIgbWV0aG9kcyAgLSBzdGFydCAqKipcclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdChsb2FkZWRDYWxsYmFjazogKGlzU3VjY2VlZD86IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVycm9yKGdpZ3lhLl8uQmFzZU9iamVjdC5OT1RfSU1QTEVNRU5URURfRVJST1IsIEdTRXJyb3JzLk5PVF9TVVBQT1JURUQpO1xyXG4gICAgICAgIGxvYWRlZENhbGxiYWNrKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVzaXplUGx1Z2luKG9sZDogZ2lneWEuSUVsZW1lbnRBY3R1YWxTaXplLCBjdXJyOiBnaWd5YS5JRWxlbWVudEFjdHVhbFNpemUpOiB2b2lkIHtcclxuICAgICAgICAvLyBvdmVycmlkZSB0byBtYWtlIHBsdWdpbiByZXNwb25zaXZlIHRvIGNvbnRhaW5lciByZXNpemVcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25WaWV3cG9ydFNpemVDaGFuZ2VkKG9sZDogZ2lneWEuSVZpZXdwb3J0U2l6ZSwgY3VycjogZ2lneWEuSVZpZXdwb3J0U2l6ZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIG92ZXJyaWRlIHRvIG1ha2UgcGx1Z2luIHJlc3BvbnNpdmUgdG8gdmlld3BvcnQgKHdpbmRvdykgcmVzaXplXHJcbiAgICB9XHJcblxyXG4gICAgLy8vICoqIFwiQWJzdHJhY3RcIiBtZXRob2RzICAtIGVuZCAqKipcclxuXHJcbiAgICAvLy8gKiogVmlydHVhbCBtZXRob2RzIC0gc3RhcnQgKioqXHJcblxyXG4gICAgcHJvdGVjdGVkIHNob3VsZENsb3NlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyAqKiBWaXJ0dWFsIG1ldGhvZHMgLSBlbmQgKioqXHJcblxyXG4gICAgLy8vICoqIFNlcnZpY2UgbWV0aG9kcyAtIHN0YXJ0ICoqKlxyXG5cclxuICAgIHB1YmxpYyBjZW50ZXJNb2RhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fbW9kYWxEaWFsb2cgJiYgIXRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbERpYWxvZy5jZW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZU1vZGFsKHNpemU6IGdpZ3lhLklFbGVtZW50U2l6ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW9kYWwgJiYgdGhpcy5fbW9kYWxEaWFsb2cgJiYgIXRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRQbHVnaW5TdHlsZSgpID09PSBQbHVnaW5TdHlsZS5sZWdhY3kpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJldmVydCBzaXplIHRvIG9ubHkgd29yayB3aXRoIHBpeGVsIHNpemVzLCBhbmQgaW4gdXNlIG1pbi1oZWlnaHQvd2lkdGhcclxuICAgICAgICAgICAgICAgIGlmIChzaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemUubWluSGVpZ2h0ID0gcGFyc2VJbnQoc2l6ZS5oZWlnaHQpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemUubWluV2lkdGggPSBwYXJzZUludChzaXplLndpZHRoKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwcmV2U2l6ZSA9IHsgaGVpZ2h0OiB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQsIHdpZHRoOiB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCB9O1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbERpYWxvZy5yZXNpemUoc2l6ZSk7XHJcbiAgICAgICAgICAgIHZhciBuZXdTaXplID0geyBoZWlnaHQ6IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCwgd2lkdGg6IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIH07XHJcbiAgICAgICAgICAgIC8vdGhpcy5yZXNpemVQbHVnaW4ocHJldlNpemUsIG5ld1NpemUpOyAvLyBUaGUgcGx1Z2luIHNob3VsZCBoYW5kbGUgdGhpcyBoaW1zZWxmIHNpbmNlIGhlIGlzIHRoZSBvbmUgdGhhdCBpbml0aWF0ZWQgdGhlIHJlc2l6ZVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlTW9kYWxDb250YWluZXJJbml0KSB0aGlzLmNlbnRlck1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQaG90b0Z1bGxOYW1lKHBob3RvTmFtZTogc3RyaW5nLCBwaXhlbFJhdGlvID0gdGhpcy5fcGl4ZWxSYXRpbywgZXh0ID0gdGhpcy5faW1nRXh0LCBpbWdCYXNlID0gdGhpcy5faW1nQmFzZSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGltZ0Jhc2UgKyBwaG90b05hbWUgKyAnX3gnICsgcGl4ZWxSYXRpbyArICcuJyArIGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlzcGF0Y2hQbHVnaW5FdmVudChuYW1lOiBzdHJpbmcsIGV2ZW50T2JqOiBPYmplY3QgPSB7fSkge1xyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGAke3RoaXMuaW5qZWN0aW9uSW5mby5uYW1lfSBkaXNwYXRjaGVzICR7bmFtZX0gZXZlbnQ6YCwgZXZlbnRPYmopO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoRXZlbnQobmFtZSwgZXZlbnRPYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUZW1wbGF0ZXMoKTogSFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENzcygpOiBDVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NzcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWRkQ3NzSWZEaWRudExvYWQoY3NzTmFtZTogc3RyaW5nLCBkZWZhdWx0Q3NzOiBJUGx1Z2luQ1NTLCBsb2FkaW5nRmxhZ3M6IE9iamVjdCwgY3VycmVudENzczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoZGVmYXVsdENzc1tjc3NOYW1lXSAmJiAhbG9hZGluZ0ZsYWdzW2Nzc05hbWVdKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdGbGFnc1tjc3NOYW1lXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoY3VycmVudENzcyArPSAnICcgKyBkZWZhdWx0Q3NzW2Nzc05hbWVdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdXJyZW50Q3NzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyYW5zbGF0aW9uc1xyXG4gICAgcHVibGljIGdldFRleHQoa2V5OiBzdHJpbmcsIHJlcGxhY2VTdHI/OiBzdHJpbmcsIHdpdGhTdHI/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciB0ZXh0ID0ga2V5O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuY3VzdG9tTGFuZyAmJiB0aGlzLnBhcmFtcy5jdXN0b21MYW5nW2tleV0pIHtcclxuICAgICAgICAgICAgdGV4dCA9IHRoaXMucGFyYW1zLmN1c3RvbUxhbmdba2V5XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0ID0gZ2V0TG9jYWxpemVkVGV4dCh0aGlzLmxvY2FsaXplZEpzTmFtZSwga2V5LCB0aGlzLmxhbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZXBsYWNlU3RyLCB3aXRoU3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMuY29udGFpbmVySUQgKyAnLicgKyB0aGlzLmluamVjdGlvbkluZm8ubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZXJyb3IobXNnOiBzdHJpbmcsIGVycm9yQ29kZSA9IEdTRXJyb3JzLkNMSUVOVF9MT0csIGU/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBzdGF0dXNNZXNzYWdlID0gZSAmJiBlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzTWVzc2FnZTtcclxuICAgICAgICBjb25zdCBlcnJvckluZm8gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6IHN0YXR1c01lc3NhZ2UsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbXNnLFxyXG4gICAgICAgICAgICBlcnJvckNvZGU6IGVycm9yQ29kZSxcclxuICAgICAgICAgICAgZXJyb3JEZXRhaWxzOiB0aGlzLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcklEOiB0aGlzLnBhcmFtcy5jb250YWluZXJJRCxcclxuICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcyxcclxuICAgICAgICAgICAgaW5mbzogZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLndhcm4obXNnLCBlKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKGVycm9ySW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xvc2VzIHRoZSBwbHVnaW4gLSByYWlzZXMgdGhlICdoaWRlJyBldmVudCBhbmQgZW5hYmxlIGNhbmNlbGxpbmcgYnkgZGVyaXZlZCBwbHVnaW5zIHdpdGggb3ZlcnJpZGluZyBvZiAnc2hvdWxkQ2xvc2UnXHJcbiAgICBwcm90ZWN0ZWQgY2xvc2UocmVhc29uPzogc3RyaW5nLCBldmVudE9iaj86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghZXZlbnRPYmopIHtcclxuICAgICAgICAgICAgZXZlbnRPYmogPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50T2JqLnJlYXNvbiA9IHJlYXNvbjtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaFBsdWdpbkV2ZW50KCdoaWRlJywgZXZlbnRPYmopO1xyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBjbG9zaW5nICR7dGhpcy5pbmplY3Rpb25JbmZvLm5hbWV9IChyZWFzb246ICR7cmVhc29ufSlgKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ2xvc2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vICoqIFNlcnZpY2UgbWV0aG9kcyAtIGVuZCAqKipcclxuXHJcbiAgICAvLy8gTGlmZWN5Y2xlXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faXNEaXNwb3NlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wb2xsZXIuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbW9kYWxEaWFsb2cpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxEaWFsb2cuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdJbmRpY2F0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ0luZGljYXRvci5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgZ2lneWEuXy5wbHVnaW5zLnJlbW92ZVBsdWdpbkluc3RhbmNlKHRoaXMucGFyYW1zLCB0aGlzLmluamVjdGlvbkluZm8pO1xyXG5cclxuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gQ2xvc2VSZWFzb25zIHtcclxuICAgIHBlbmRpbmdFcnJvciwgLy8gYW4gdW5oYW5kbGVkIHBlbmRpbmcgZXJyb3IgZnJvbSB0aGUgc2VydmVyIG5vdCBoYW5kbGVkIGludGVybmFsbHkgYnkgdGhlIHNjcmVlbnNldFxyXG4gICAgbWlzc2luZywgLy8gYXR0ZW1wdCB0byBtb3ZlIHRvIGEgc2NyZWVuIHNldCBuYW1lIHRoYXQgZG9lcyBub3QgZXhpc3RzXHJcbiAgICBmaW5pc2hlZCwgLy8gc2NyZWVuU2V0IGZsb3cgZmluaXNoZWQgKG1vdmUgdG8gX2ZpbmlzaCBzY3JlZW4gb3Igbm8gbW9yZSBmb3JtcylcclxuICAgIGNhbmNlbGVkLCAvLyBzY3JlZW5TZXQgZmxvdyBjYW5jZWxlZCAoYnkgeCBpbiB0aGUgZGlhbG9nIG9yIGJ5IGNsaWVudCBzY3JpcHQpXHJcbiAgICBiYWNrQnV0dG9uLCAvLyBtb2JpbGUgZGlhbG9nIGlzIGNsb3NlZCBieSBiYWNrIGluIHRoZSBicm93c2VyXHJcbiAgICBjYW5jZWxlZEJ5UGFyZW50LCAvLyB1c2VkIGludGVybmFsbHkgdG8gcGFyZW50IGNoaWxkIHRvIGNsb3NlIGl0cyBjaGlsZFxyXG4gICAgc2tpcCwgLy8gc2NyZWVuU2V0IGZsb3cgZmluaXNoZWQgZHVlIHRvIF9za2lwXHJcbiAgICBlcnJvciwgLy8gZXJyb3IgZnJvbSBzZXJ2ZXIgYmVmb3JlIHdlIGhhdmUgYSBzY3JlZW4gdG8gc2hvdyB0aGVtIG9uLFxyXG4gICAgY2FuY2VsLC8vIHNjcmVlblNldCBmbG93IGNhbmNlbGVkKGNsb3NlIHRoZSBzY3JlZW4gd2l0aG91dCBmaW5lbGl6aW5nIHBlbmRpbmcgcHJvY2Vzc2VzKVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSU51bWVyaWNNYXA8VD4ge1xyXG4gICAgW2tleTogbnVtYmVyXTogVDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXA8VD4ge1xyXG4gICAgW2tleTogc3RyaW5nXTogVDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElFbnVtZXJhYmxlPFQ+IHtcclxuICAgIGxlbmd0aDogbnVtYmVyO1xyXG4gICAgW2k6IG51bWJlcl06IFQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExhc3RJbmRleE9mPFQ+KGFycjogSUVudW1lcmFibGU8VD4sIHZhbDogVCwgZnJvbUluZGV4ID0gMCk6IG51bWJlciB7XHJcbiAgICBmb3IgKHZhciBpID0gYXJyLmxlbmd0aDsgLS1pID49IGZyb21JbmRleDsgKSB7XHJcbiAgICAgICAgaWYgKGFycltpXSA9PT0gdmFsKSByZXR1cm4gaTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gLTE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEZvckVhY2g8VD4oYXJyOiBJRW51bWVyYWJsZTxUPiwgYWN0aW9uOiAoZWxlbWVudDogVCwgaW5kZXg/OiBudW1iZXIsIGFycj86IElFbnVtZXJhYmxlPFQ+KSA9PiB2b2lkKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkgYWN0aW9uKGFycltpXSwgaSwgYXJyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRm9yRWFjaFByb3A8VD4ob2JqOiBJTWFwPFQ+LCBhY3Rpb246IChwcm9wOiBULCBuYW1lOiBzdHJpbmcsIG9iajogSU1hcDxUPikgPT4gdm9pZCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBGb3JFYWNoUHJvcDxUIGV4dGVuZHMgT2JqZWN0PihvYmo6IFQsIGFjdGlvbjogKHByb3A6IGFueSwgbmFtZTogc3RyaW5nLCBvYmo6IFQpID0+IHZvaWQpO1xyXG5leHBvcnQgZnVuY3Rpb24gRm9yRWFjaFByb3Aob2JqOiBPYmplY3QsIGFjdGlvbjogKHByb3A6IGFueSwgbmFtZTogc3RyaW5nLCBvYmo6IE9iamVjdCkgPT4gdm9pZCkge1xyXG4gICAgZm9yICh2YXIgbmFtZSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpKSBhY3Rpb24ob2JqW25hbWVdLCBuYW1lLCBvYmopO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBTb21lPFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGNvbmRpdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gYm9vbGVhbikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKGFycltpXSwgaSwgYXJyKSkgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBFdmVyeTxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBjb25kaXRpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IGJvb2xlYW4pIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgaWYgKCFjb25kaXRpb24oYXJyW2ldLCBpLCBhcnIpKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEV2ZXJ5UHJvcDxUPihvYmo6IElNYXA8VD4sIGNvbmRpdGlvbjogKHByb3A6IFQsIG5hbWU6IHN0cmluZywgb2JqOiBJTWFwPFQ+KSA9PiBib29sZWFuKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEV2ZXJ5UHJvcDxUPihvYmo6IFQsIGNvbmRpdGlvbjogKHByb3AsIG5hbWU6IHN0cmluZywgb2JqOiBUKSA9PiBib29sZWFuKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEV2ZXJ5UHJvcChvYmo6IE9iamVjdCwgY29uZGl0aW9uOiAocHJvcCwgbmFtZTogc3RyaW5nLCBvYmo6IE9iamVjdCkgPT4gYm9vbGVhbikge1xyXG4gICAgZm9yICh2YXIgbmFtZSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpICYmICFjb25kaXRpb24ob2JqW25hbWVdLCBuYW1lLCBvYmopKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIE1hcDxTLCBUPihhcnI6IElFbnVtZXJhYmxlPFM+LCBhY3Rpb246IChlbGVtZW50OiBTLCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8Uz4pID0+IFQpIHtcclxuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8VD4oKTtcclxuXHJcbiAgICBGb3JFYWNoKGFyciwgKGl0ZW0sIGlkeCwgYXJyKSA9PiByZXN1bHQucHVzaChhY3Rpb24oaXRlbSwgaWR4LCBhcnIpKSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRmlyc3RJbmRleDxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBjb25kaXRpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgdmFyIHJlc3VsdDogbnVtYmVyO1xyXG4gICAgU29tZShhcnIsIChpdGVtLCBpbmRleCwgYXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbihpdGVtLCBpbmRleCwgYXJyKSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBpbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBGaXJzdDxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBjb25kaXRpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IGJvb2xlYW4pOiBUIHtcclxuICAgIHJldHVybiBhcnJbRmlyc3RJbmRleChhcnIsIGNvbmRpdGlvbildO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBsZWdhY3lfbW9kYWwgPSByZXF1aXJlKCdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2Nzcy9sZWdhY3lfbW9kYWwuY3NzJyk7XHJcbmV4cG9ydCBjb25zdCBtb2Rlcm5fbW9kYWwgPSByZXF1aXJlKCdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2Nzcy9tb2Rlcm5fbW9kYWwuY3NzJyk7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q1NTID0gcmVxdWlyZSgnc3JjL2FjY291bnRzL0dpZ3lhLkpTLlBsdWdpbi5zY3JlZW5TZXQyL2FwcC9zdHlsZS9kZWZhdWx0Q1NTLmNzcycpO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZml4Q3NzKGNzczogc3RyaW5nKSB7XHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU3IHx8IChnaWd5YS5sb2NhbEluZm8uaXNJRSAmJiBnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSkpIHtcclxuICAgICAgICBjc3MgPSBjc3MucmVwbGFjZSgvZGlzcGxheTppbmxpbmUtYmxvY2svZywgJ2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTsqZGlzcGxheTppbmxpbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3NzLnJlcGxhY2UoXHJcbiAgICAgICAgL2dyYWRpZW50XFwoKC4qPyksKC4qPylcXCkvZyxcclxuICAgICAgICAnZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiQxXCIsIGVuZENvbG9yc3RyPVwiJDJcIik7JyArXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAgJDEsICAkMik7JyArXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAkMSwgJDIpOycgK1xyXG4gICAgICAgICAgICAnYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgkMSksIHRvKCQyKSk7JyArXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkMSwgICQyKScsXHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDc3MocnVsZXM6IGFueSwgcHJlZml4Pzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXJ1bGVzIHx8IHJ1bGVzID09ICcnKSByZXR1cm47XHJcbiAgICBpZiAocnVsZXMgaW5zdGFuY2VvZiBBcnJheSkgcnVsZXMgPSBydWxlcy5qb2luKCcgJyk7XHJcbiAgICAvLyAgICBydWxlcyA9IGZpeENzcyhydWxlcyk7XHJcbiAgICBpZiAocHJlZml4KSBydWxlcyA9IHJ1bGVzLnJlcGxhY2UoLyhbXlxcc31dKlxcLmdpZykvZywgcHJlZml4ICsgJyAkMScpO1xyXG4gICAgdmFyIHN0eWxlOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICB2YXIgcnVsZXNOb2RlOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlcyk7XHJcbiAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xyXG4gICAgICAgIGlmIChydWxlc05vZGUudmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlc05vZGUudmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcnVsZXNOb2RlLm5vZGVWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKHJ1bGVzTm9kZSk7XHJcbiAgICB9XHJcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJyk7XHJcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAoaGVhZC5sZW5ndGggPiAwID8gaGVhZFswXSA6IGJvZHkpLmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVwbGFjZUxpbmtzV2l0aEhUTUxFbGVtZW50cyh0ZXh0RGF0YSkge1xyXG4gICAgdmFyIHJlZ2V4ID0gLyhodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdypAKT8oXFxTKykoOlswLTldKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJUAhXFwtXFwvXSkpPy9nO1xyXG4gICAgdmFyIGxpbmtzID0gdGV4dERhdGEubWF0Y2gocmVnZXgpO1xyXG4gICAgaWYgKGxpbmtzKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHNhbml0aXplZExpbmsgPSBnaWd5YS51dGlscy5zYW5pdGl6ZS5zYW5pdGl6ZUF0dHJpYnV0ZShsaW5rc1tpXSk7XHJcbiAgICAgICAgICAgIHRleHREYXRhID0gdGV4dERhdGEucmVwbGFjZShzYW5pdGl6ZWRMaW5rLCAnPGEgaHJlZj1cIicgKyBzYW5pdGl6ZWRMaW5rICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+JyArIHNhbml0aXplZExpbmsgKyAnPC9hPicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dERhdGE7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGxlZ2FjeU1vZGFsID0gcmVxdWlyZSgnLi9odG1sL2xlZ2FjeU1vZGFsLmh0bWwnKTtcclxuZXhwb3J0IGNvbnN0IG1vZGFsID0gcmVxdWlyZSgnLi9odG1sL21vZGFsLmh0bWwnKTtcclxuZXhwb3J0IGNvbnN0IG1vZGFsQ2xvc2VCdXR0b24gPSByZXF1aXJlKCcuL2h0bWwvbW9kYWxDbG9zZUJ1dHRvbi5odG1sJyk7XHJcbiIsImV4cG9ydCBlbnVtIFBsdWdpblN0eWxlIHtcclxuICAgIF91bmRlZmluZWQgPSAwLFxyXG4gICAgbm9uZSxcclxuICAgIGxlZ2FjeSxcclxuICAgIG1vZGVybixcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGx1Z2luU3R5bGVDbGFzcyhzdHlsZTogUGx1Z2luU3R5bGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdnaWd5YS1zdHlsZS0nICsgUGx1Z2luU3R5bGVbc3R5bGVdO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZENzcywgZml4Q3NzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9Dc3NVdGlscyc7XHJcblxyXG5naWd5YS51dGlscy5mdW5jdGlvbnMuY3JlYXRlQWxpYXMoJ2dpZ3lhLmdsb2JhbC5hZGRDU1MnLCBhZGRDc3MpO1xyXG5naWd5YS51dGlscy5mdW5jdGlvbnMuY3JlYXRlQWxpYXMoJ2dpZ3lhLnBsdWdpblV0aWxzLmNzcy5maXhDc3MnLCBmaXhDc3MpO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkT3JSZXBsYWNlSGFzaEZyYWdtZW50KHVybDogc3RyaW5nLCBwYXJhbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHVybCA9IHJlbW92ZUhhc2hGcmFnbWVudCh1cmwsIHBhcmFtKTtcclxuICAgIHVybCA9IGFkZEhhc2hGcmFnbWVudCh1cmwsIHBhcmFtLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRIYXNoRnJhZ21lbnQodXJsOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdmFyIHNpZ24gPSAnIyc7XHJcbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGhhc2hmcmFnbWVudCBleGlzdFxyXG4gICAgaWYgKHVybC5pbmRleE9mKCcjJykgIT0gLTEpXHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKHBhcmFtKSA9PSAtMSlcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGV4aXN0IGhhc2hmcmFnbWVudCBpcyB0aGUgc2FtZSBhcyB3ZSB3YW50IHRvIGFkZCAtIHNvIHdlIG5lZWQgb3IgcmVhcGxjZSBpdFxyXG4gICAgICAgICAgICBzaWduID0gJyYnO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBwYXJhbSArICc9JyArIHRoaXMuZ2V0SGFzaFBhcmFtVmFsdWUodXJsLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIHVybC5yZXBsYWNlKG9sZFZhbHVlLCBwYXJhbSArICc9JyArIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVybCArIHNpZ24gKyBwYXJhbSArICc9JyArIHZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIYXNoRnJhZ21lbnQodXJsOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHVybCBjb25hdGluIGhhc2ggZnJhZ21lbnRcclxuICAgIGlmICh1cmwuaW5kZXhPZignIycpID09IC0xKSByZXR1cm4gdXJsO1xyXG5cclxuICAgIC8vIEdldCB0aGUgaGFzaCB2YWx1ZSBpZiBleGlzdFxyXG4gICAgdmFyIGZ1bGxIYXNoUXVlcnkgPSB1cmwuc3BsaXQoJyMnKVsxXTtcclxuICAgIHZhciBoYXNoUGFyYW1WYWx1ZSA9IGdldEhhc2hQYXJhbVZhbHVlKHVybCwgcGFyYW0pO1xyXG4gICAgaWYgKGhhc2hQYXJhbVZhbHVlKSBmdWxsSGFzaFF1ZXJ5ID0gZnVsbEhhc2hRdWVyeS5yZXBsYWNlKHBhcmFtICsgJz0nICsgaGFzaFBhcmFtVmFsdWUsICcnKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIGhhc2ggcGFyYW0gaW4gY2FzZSBpdCB3YXMgYSBoYXNoIHBhcmFtIHdpdGhvdXQgJz0nXHJcbiAgICBmdWxsSGFzaFF1ZXJ5ID0gZnVsbEhhc2hRdWVyeS5yZXBsYWNlKCcmJyArIHBhcmFtLCAnJyk7XHJcbiAgICBmdWxsSGFzaFF1ZXJ5ID0gZnVsbEhhc2hRdWVyeS5yZXBsYWNlKCcjJyArIHBhcmFtLCAnIycpO1xyXG5cclxuICAgIGlmIChmdWxsSGFzaFF1ZXJ5Lmxlbmd0aCA+IDAgJiYgKChmdWxsSGFzaFF1ZXJ5IGFzIGFueSlbMF0gKz0gJyYnKSkgZnVsbEhhc2hRdWVyeSA9IGZ1bGxIYXNoUXVlcnkuc3Vic3RyaW5nKDEsIGZ1bGxIYXNoUXVlcnkubGVuZ3RoKTtcclxuXHJcbiAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZ1bGwgSGFzaCBRdWVyeSB3aXRoIHRoZSBuZXcgb25lIHdpdGhvdXQgdGhlIGdpdmVuIHBhcmFtIHRvIHJlbW92ZWQgYW5kIGl0J3MgdmFsdWUgaWYgZXhpc3RcclxuICAgIHZhciBVUkxXaXRob3V0SGFzaCA9IHVybC5zcGxpdCgnIycpWzBdO1xyXG4gICAgLy8gQ2hla2MgaWYgdGhlIGhhc2ggcXVlcnkgbGVmdCB3aXRoIG5vIHBhcmFtc1xyXG4gICAgaWYgKGZ1bGxIYXNoUXVlcnkubGVuZ3RoID09IDApIHJldHVybiBVUkxXaXRob3V0SGFzaDtcclxuXHJcbiAgICByZXR1cm4gVVJMV2l0aG91dEhhc2ggKyAnIycgKyBmdWxsSGFzaFF1ZXJ5O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIYXNoUGFyYW1WYWx1ZSh1cmw6IHN0cmluZywgcGFyYW06IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBBZGQgdGhlICc9JyBzaWduIHRvIG1hdGNoIHRoZSBwYXJhbSBhbmQgbm90IG1heWJlIHRoZSBzYW1lIHN0cmluZyBpbiB0aGUgVVJMIG5vdCBhcyBhIHBhcmFtXHJcbiAgICBwYXJhbSArPSAnPSc7XHJcbiAgICBpZiAodXJsLmluZGV4T2YoJyMnKSA9PSAtMSB8fCB1cmwuaW5kZXhPZihwYXJhbSwgdXJsLmluZGV4T2YoJyMnKSkgPT0gLTEpIHJldHVybiBudWxsO1xyXG5cclxuICAgIC8vIGZpbmQgdGhlIG5leHQgJiBvciB0aGUgZW5kIG9mIHRoZSBwYXJhbSBzdHJpbmdcclxuICAgIHZhciBzdGFydE9mUGFyYW0gPSB1cmwuaW5kZXhPZihwYXJhbSwgdXJsLmluZGV4T2YoJyMnKSk7XHJcbiAgICB2YXIgZW5kT2ZQYXJhbSA9IHVybC5pbmRleE9mKCcmJywgc3RhcnRPZlBhcmFtKTtcclxuXHJcbiAgICAvLyBJZiB0aGUgcGFyYW0gd2FzIHVudGlsbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcgLSBzZXQgdGhlIGVuZE9mUGFyYW0gdG8gdGhlIGVuZCBvZiB0aGUgc3RyaW5nIHRvb1xyXG4gICAgaWYgKGVuZE9mUGFyYW0gPT0gLTEpIGVuZE9mUGFyYW0gPSB1cmwubGVuZ3RoO1xyXG5cclxuICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKHN0YXJ0T2ZQYXJhbSArIHBhcmFtLmxlbmd0aCwgZW5kT2ZQYXJhbSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkQ3NzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9Dc3NVdGlscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQnJvd3NlckluZm9DbGFzc2VzVG9FbGVtZW50KGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgLy8gYWRkIHByZWZpeCBmb3IgZWFjaCBicm93c2VyIHByb3BlcnR5OiAoJ2Nocm9tZSBpb3MnKT0+ICdnaWd5YS1jaHJvbWUgZ2lneWEtaW9zJ1xyXG4gICAgdmFyIGJyb3dzZXJDbGFzc2VzID0gJ2dpZ3lhLScgKyBnaWd5YS5sb2NhbEluZm8uY3VycmVudEJyb3dzZXI7XHJcblxyXG4gICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lPUykge1xyXG4gICAgICAgIGJyb3dzZXJDbGFzc2VzICs9ICcgaW9zJzsgLy8gYWRkZWQgZ2xvYmFsIGlvcyBjbGFzcyBbZm9yIGFsbCB2ZXJzaW9uc11cclxuICAgIH1cclxuXHJcbiAgICBicm93c2VyQ2xhc3NlcyA9IGJyb3dzZXJDbGFzc2VzLnJlcGxhY2UoLyAvZywgJyBnaWd5YS0nKTtcclxuXHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzTmF0aXZlTW9iaWxlQXBwKSBicm93c2VyQ2xhc3NlcyA9ICdnaWd5YS1uYXRpdmUtbW9iaWxlLWFwcCAnICsgYnJvd3NlckNsYXNzZXM7XHJcblxyXG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KGVsLCBicm93c2VyQ2xhc3Nlcyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRleHRib3hTdWJtaXRCdXR0b24oZWxUZXh0Ym94OiBIVE1MRWxlbWVudCwgZWxCdXR0b246IEhUTUxFbGVtZW50KSB7XHJcbiAgICB2YXIgZm5PblByZXNzID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBjaGFyQ29kZTtcclxuICAgICAgICBpZiAoZSAmJiBlLndoaWNoKSB7XHJcbiAgICAgICAgICAgIGUgPSBlO1xyXG4gICAgICAgICAgICBjaGFyQ29kZSA9IGUud2hpY2g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZSA9IGV2ZW50O1xyXG4gICAgICAgICAgICBjaGFyQ29kZSA9IGUua2V5Q29kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXJDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgIGVsQnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbFRleHRib3gsICdrZXl1cCcsIGZuT25QcmVzcyk7XHJcbiAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbEJ1dHRvbiwgJ2tleXVwJywgZm5PblByZXNzKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVsYXRpdmVQb3NpdGlvbihwb3NpdGlvbiwgc2l6ZSwgZGlyZWN0aW9uLCBtYXJnaW4sIGZsaXApIHtcclxuICAgIHZhciByZWxhdGl2ZVBvc2l0aW9uID0geyB0b3A6IDAsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAgfTtcclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xyXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24udG9wID0gcG9zaXRpb24uYm90dG9tICsgbWFyZ2luO1xyXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24ubGVmdCA9IGZsaXAgPyBwb3NpdGlvbi5yaWdodCAtIHNpemUudyA6IHBvc2l0aW9uLmxlZnQ7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcclxuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uLnRvcCA9IHBvc2l0aW9uLnRvcCAtIHNpemUuaCAtIG1hcmdpbjtcclxuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uLmxlZnQgPSBmbGlwID8gcG9zaXRpb24ucmlnaHQgLSBzaXplLncgOiBwb3NpdGlvbi5sZWZ0O1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24udG9wID0gZmxpcCA/IHBvc2l0aW9uLmJvdHRvbSAtIHNpemUuaCA6IHBvc2l0aW9uLnRvcDtcclxuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uLmxlZnQgPSBwb3NpdGlvbi5sZWZ0IC0gc2l6ZS53IC0gbWFyZ2luO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uLnRvcCA9IGZsaXAgPyBwb3NpdGlvbi5ib3R0b20gLSBzaXplLmggOiBwb3NpdGlvbi50b3A7XHJcbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbi5sZWZ0ID0gcG9zaXRpb24ucmlnaHQgKyBtYXJnaW47XHJcbiAgICB9XHJcblxyXG4gICAgcmVsYXRpdmVQb3NpdGlvbi5ib3R0b20gPSByZWxhdGl2ZVBvc2l0aW9uLnRvcCArIHNpemUuaDtcclxuICAgIHJlbGF0aXZlUG9zaXRpb24ucmlnaHQgPSByZWxhdGl2ZVBvc2l0aW9uLmxlZnQgKyBzaXplLnc7XHJcblxyXG4gICAgcmV0dXJuIHJlbGF0aXZlUG9zaXRpb247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlUG9wb3Zlck5lYXJFbGVtZW50KGVsVGFyZ2V0LCBjb250YWluZXIsIGRpcmVjdGlvbiwgbWFyZ2luLCBmbGlwLCBhZGp1c3REaXJlY3Rpb24pIHtcclxuICAgIHZhciB0YXJnZXRQb3NpdGlvbiA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50UG9zaXRpb24oZWxUYXJnZXQpO1xyXG4gICAgdmFyIHNpemUgPSB7IHc6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCwgaDogY29udGFpbmVyLm9mZnNldEhlaWdodCB9O1xyXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHRhcmdldFBvc2l0aW9uLCBzaXplLCBkaXJlY3Rpb24sIG1hcmdpbiwgZmxpcCk7XHJcblxyXG4gICAgaWYgKGFkanVzdERpcmVjdGlvbiAmJiAhZ2lneWEudXRpbHMudmlld3BvcnQuaXNSZWN0RnVsbHlWaXNpYmxlKHBvc2l0aW9uKSkge1xyXG4gICAgICAgIHZhciBvcHBvc2l0ZSA9IHtcclxuICAgICAgICAgICAgYm90dG9tOiAndG9wJyxcclxuICAgICAgICAgICAgbGVmdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgcmlnaHQ6ICdsZWZ0JyxcclxuICAgICAgICAgICAgdG9wOiAnYm90dG9tJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSB0aGlzLmdldFJlbGF0aXZlUG9zaXRpb24odGFyZ2V0UG9zaXRpb24sIHNpemUsIG9wcG9zaXRlW2RpcmVjdGlvbl0sIG1hcmdpbik7XHJcbiAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLnZpZXdwb3J0LmlzUmVjdEhvcml6b250YWxseVZpc2libGUobmV3UG9zaXRpb24pKSBwb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZ2lneWEudXRpbHMudmlld3BvcnQuaXNSZWN0SG9yaXpvbnRhbGx5VmlzaWJsZShwb3NpdGlvbikpIHtcclxuICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSB0aGlzLmdldFJlbGF0aXZlUG9zaXRpb24odGFyZ2V0UG9zaXRpb24sIHNpemUsIGRpcmVjdGlvbiwgbWFyZ2luLCAhZmxpcCk7XHJcbiAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLnZpZXdwb3J0LmlzUmVjdEhvcml6b250YWxseVZpc2libGUobmV3UG9zaXRpb24pKSBwb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJycgKyBwb3NpdGlvbi5sZWZ0ICsgJ3B4JztcclxuICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSAnJyArIHBvc2l0aW9uLnRvcCArICdweCc7XHJcbiAgICAvL2NvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9IGVsUG9wb3Zlci5vZmZzZXRXaWR0aCArICdweCc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvcG92ZXJOZWFyRWxlbWVudChcclxuICAgIGVsVGFyZ2V0OiBIVE1MRWxlbWVudCxcclxuICAgIGVsUG9wb3ZlcjogSFRNTEVsZW1lbnQsXHJcbiAgICBkaXJlY3Rpb24gPSAnYm90dG9tJyxcclxuICAgIG1hcmdpbiA9IDAsXHJcbiAgICBmbGlwID0gZmFsc2UsXHJcbiAgICBhZGp1c3REaXJlY3Rpb24gPSB0cnVlLFxyXG4gICAgYW5pbWF0aW9uOiBzdHJpbmcgPSBudWxsLFxyXG4gICAgZm5XaGVuUmVtb3ZlZDogRnVuY3Rpb24gPSBudWxsLFxyXG4gICAgcmVtb3ZlT25DbGlja0V4bGNsdWRlZEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gbnVsbCxcclxuKSB7XHJcbiAgICBpZiAoIWVsVGFyZ2V0IHx8ICFlbFBvcG92ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxQb3BvdmVyKTtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBjb250YWluZXIuc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKS50b1N0cmluZygpO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7IC8vIERyYXcgb3V0c2lkZSBvZiBzY3JlZW4gdG8gZ2V0IHRoZSBzaXplXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnBsYWNlUG9wb3Zlck5lYXJFbGVtZW50KGVsVGFyZ2V0LCBjb250YWluZXIsIGRpcmVjdGlvbiwgbWFyZ2luLCBmbGlwLCBhZGp1c3REaXJlY3Rpb24pO1xyXG5cclxuICAgIHJlbW92ZUVsZW1lbnRPbkRvY0NsaWNrT3JFc2NhcGUoXHJcbiAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICBlbFRhcmdldC5mb2N1cygpO1xyXG4gICAgICAgICAgICBmbldoZW5SZW1vdmVkKGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlT25DbGlja0V4bGNsdWRlZEVsZW1lbnRzLFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoYW5pbWF0aW9uICYmIHR5cGVvZiBnaWd5YS5wbHVnaW5VdGlscy5hbmltYXRpb25bYW5pbWF0aW9uXSA9PT0gJ2Z1bmN0aW9uJykgZ2lneWEucGx1Z2luVXRpbHMuYW5pbWF0aW9uW2FuaW1hdGlvbl0oZWxQb3BvdmVyKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50T25Eb2NDbGlja09yRXNjYXBlKGVsOiBIVE1MRWxlbWVudCwgZm5DYWxsYmFjazogRnVuY3Rpb24gPSBudWxsLCBleGNsdWRlZEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gbnVsbCkge1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmblJlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgd2FzT3BlbiA9IGVsICYmIGVsLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh3YXNPcGVuKSBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcclxuXHJcbiAgICAgICAgaWYgKGZuQ2FsbGJhY2spIGZuQ2FsbGJhY2soZSwgd2FzT3Blbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBhckFsbEV4Y2x1ZGVkID0gW2VsXTtcclxuICAgIGlmIChleGNsdWRlZEVsZW1lbnRzKSB7XHJcbiAgICAgICAgYXJBbGxFeGNsdWRlZCA9IGFyQWxsRXhjbHVkZWQuY29uY2F0KGV4Y2x1ZGVkRWxlbWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGVyZm9ybU9uRG9jQ2xpY2tPckVzY2FwZShmblJlbW92ZSwgYXJBbGxFeGNsdWRlZCwgZXZlbnQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlRWxlbWVudE9uRG9jQ2xpY2soZWw6IEhUTUxFbGVtZW50LCBmbkNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwsIGV4Y2x1ZGVkRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBudWxsKSB7XHJcbiAgICBpZiAoIWVsKSByZXR1cm47XHJcblxyXG4gICAgdmFyIGZuSGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgaWYgKGZuQ2FsbGJhY2spIGZuQ2FsbGJhY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGFyQWxsRXhjbHVkZWQgPSBbZWxdO1xyXG4gICAgaWYgKGV4Y2x1ZGVkRWxlbWVudHMpIGFyQWxsRXhjbHVkZWQuY29uY2F0KGV4Y2x1ZGVkRWxlbWVudHMpO1xyXG5cclxuICAgIHRoaXMucGVyZm9ybU9uRG9jQ2xpY2tPckVzY2FwZShmbkhpZGUsIGFyQWxsRXhjbHVkZWQpO1xyXG59XHJcbnZhciBfY2xpY2thYmxlQ3NzQWRkZWQgPSBmYWxzZTtcclxuZXhwb3J0IGZ1bmN0aW9uIHBlcmZvcm1PbkRvY0NsaWNrT3JFc2NhcGUoZm5DYWxsYmFjazogRnVuY3Rpb24gPSBudWxsLCBleGNsdWRlZEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gbnVsbCk6IHZvaWQge1xyXG4gICAgY29uc3QgZm5PblBlcmZvcm0gPSBlID0+IHtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChkb2N1bWVudC5ib2R5LCAnZ2lnLWNsaWNrYWJsZScpO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2Vkb3duJywgZm5PbkRvY0NsaWNrKTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ2tleWRvd24nLCBmbk9uRG9jS2V5ZG93bik7XHJcbiAgICAgICAgaWYgKGZuQ2FsbGJhY2spIGZuQ2FsbGJhY2soZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZuT25Eb2NDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgdmFyIGNsaWNrSW5EaXYgPSBmYWxzZTtcclxuICAgICAgICB3aGlsZSAodGFyZ2V0ICYmIHRhcmdldC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIGlmIChleGNsdWRlZEVsZW1lbnRzICYmIGV4Y2x1ZGVkRWxlbWVudHMuaW5kZXhPZih0YXJnZXQpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjbGlja0luRGl2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNsaWNrSW5EaXYpIHtcclxuICAgICAgICAgICAgZm5PblBlcmZvcm0oZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmbk9uRG9jS2V5ZG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKChlLndoaWNoIHx8IGUua2V5Q29kZSkgPT0gMjcpIHtcclxuICAgICAgICAgICAgZm5PblBlcmZvcm0oZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoKGdpZ3lhLmxvY2FsSW5mby5pc0lPUyAmJiBnaWd5YS5sb2NhbEluZm8uaXNTYWZhcmkpIHx8IGdpZ3lhLmxvY2FsSW5mby5pc0lPU1dlYlZpZXcpIHtcclxuICAgICAgICBpZiAoIV9jbGlja2FibGVDc3NBZGRlZCkge1xyXG4gICAgICAgICAgICBhZGRDc3MoJyouZ2lnLWNsaWNrYWJsZSB7Y3Vyc29yOiBwb2ludGVyO30nLCBudWxsKTtcclxuICAgICAgICAgICAgX2NsaWNrYWJsZUNzc0FkZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChkb2N1bWVudC5ib2R5LCAnZ2lnLWNsaWNrYWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2Vkb3duJywgZm5PbkRvY0NsaWNrKTtcclxuICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAna2V5ZG93bicsIGZuT25Eb2NLZXlkb3duKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RWxlbWVudChlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTGlua3NXaXRoSFRNTEVsZW1lbnRzKHRleHREYXRhOiBzdHJpbmcsIGNsYXNzTmFtZT86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCByZWdleDogUmVnRXhwID0gLyg/Oig/Omh0dHBzPyk6XFwvXFwvfHd3d1xcLikoPzpcXChbLUEtWjAtOSsmQCNcXC8lPX5ffCQ/ITosLjtdKlxcKXxbLUEtWjAtOSsmQCNcXC8lPX5ffCQ/ITosLjtdKSooPzpcXChbLUEtWjAtOSsmQCNcXC8lPX5fO3wkPyE6LC47XSpcXCl8W0EtWjAtOSsmQCNcXC8lPX5ffDskXSkvZ2ltO1xyXG5cclxuICAgIGNvbnN0IGxpbmtzID0gdGV4dERhdGEubWF0Y2gocmVnZXgpO1xyXG4gICAgbGV0IHJlc1RleHQgPSAnJztcclxuICAgIGlmIChsaW5rcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0TGluayA9ICcnO1xyXG4gICAgICAgICAgICBpZiAobGlua3NbaV0uaW5kZXhPZignaHR0cDonKSA9PT0gLTEgJiYgbGlua3NbaV0uaW5kZXhPZignaHR0cHM6JykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydExpbmsgPSAnaHR0cDovLyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjbGFzc0F0dHIgPSAnJztcclxuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NBdHRyID0gYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVtcFRleHQgPSB0ZXh0RGF0YS5zdWJzdHIoMCwgdGV4dERhdGEuaW5kZXhPZihsaW5rc1tpXSkgKyBsaW5rc1tpXS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0ZXh0RGF0YSA9IHRleHREYXRhLnN1YnN0cih0ZW1wVGV4dC5sZW5ndGgsIHRleHREYXRhLmxlbmd0aCAtIHRlbXBUZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuTGluayA9IGxpbmtzW2ldLnJlcGxhY2UoLyYjMTczOy9nLCAnJyk7XHJcbiAgICAgICAgICAgIHJlc1RleHQgKz0gdGVtcFRleHQucmVwbGFjZShsaW5rc1tpXSwgYDxhJHtjbGFzc0F0dHJ9IGhyZWY9XCIke3N0YXJ0TGlua30ke2NsZWFuTGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPiR7bGlua3NbaV19PC9hPmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGV4dERhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJlc1RleHQgKz0gdGV4dERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc1RleHQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShlbDogSFRNTEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIGF0dHJWYWw6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzJykge1xyXG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGF0dHJWYWw7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElFMTEgY2Fubm90IHJlbW92ZSBcInZhbHVlXCIgYXR0cmlidXRlIGFuZCBwb3NzaWJseSBvdGhlciBhdHRyaWJ1dGVzLiBDYWxsaW5nIFwicmVtb3ZlQXR0cmlidXRlXCIgb24gSUUgZG9lcyBub3RoaW5nIGluIHNvbWUgY2FzZXMuXHJcbiAgICAvLyBGb3IgdGhpcyByZWFzb24gd2UgZmlyc3Qgc2V0IHRoZSBhdHRyaWJ1dGUgYW5kIHRoZW4gY2FsbCByZW1vdmVBdHRyaWJ1dGUgaWYgaXQgd2FzIG51bGwuXHJcbiAgICAvLyBJbiBhbGwgYnJvd3NlcnMsIHRoZSBmaW5hbCByZXN1bHQgaXMgdGhhdCB0aGUgYXR0cmlidXRlIGNvbnRpbnVlcyB0byBleGlzdCBhbmQgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAvLyBUaGlzIGlzIGJlY2F1c2UgTk8gYnJvd3NlciBjYW4gcmVtb3ZlIHRoZSBcInZhbHVlXCIgYXR0cmlidXRlIChhbmQgcG9zc2libHkgc29tZSBvdGhlciBhdHRyaWJ1dGVzKS5cclxuICAgIC8vIEluc3RlYWQsIHRoZSBub24tSUUgYnJvd3NlcnMganVzdCBzZXQgdGhlIHZhbHVlIHRvIGFuIGVtcHR5IHN0cmluZy5cclxuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbCk7XHJcbiAgICBpZiAoYXR0clZhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbDogSFRNTEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGxldCBhdHRyaWJ1dGVSZXN1bHQ6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFOCkge1xyXG4gICAgICAgIGF0dHJpYnV0ZVJlc3VsdCA9IGVsLmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICM3NzU5NSAtIElFIFwiZ2V0QXR0cmlidXRlTlNcIiByZXR1cm5zIGVtcHR5IHN0cmluZyBpbnN0ZWFkIG9mIG51bGwgd2hlbiBhdHRyaWJ1dGUgZG9lcyBub3QgZXhpc3QuXHJcbiAgICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGVOUygnJywgYXR0ck5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXR0cmlidXRlUmVzdWx0ID0gZWwuZ2V0QXR0cmlidXRlTlMoJycsIGF0dHJOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXR0cmlidXRlUmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCB7IF9HZXRFbGVtZW50UG9zIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9pbWFnZVBvc2l0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkSWZyYW1lU2hpbShlbDogSFRNTEVsZW1lbnQsIHBhcmVudD86IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZWxbJ3NoaW0nXSkgcmV0dXJuO1xyXG4gICAgdmFyIHNoaW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJRlJBTUUnKTtcclxuICAgIHNoaW1bJ2ZyYW1lYm9yZGVyJ10gPSAnMCc7XHJcbiAgICBzaGltWydmcmFtZUJvcmRlciddID0gJzAnO1xyXG4gICAgc2hpbVsnYWxsb3d0cmFuc3BhcmVuY3knXSA9IHRydWU7XHJcbiAgICBzaGltLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHNoaW1bJ3VwZGF0ZSddID0gZnVuY3Rpb24odXBkYXRlRGltZW5zaW9ucykge1xyXG4gICAgICAgIGlmIChzaGltICYmIGVsKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNoaW0uc3R5bGUubGVmdCA9IGVsLm9mZnNldExlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgc2hpbS5zdHlsZS50b3AgPSBlbC5vZmZzZXRUb3AgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IF9HZXRFbGVtZW50UG9zKGVsKTtcclxuICAgICAgICAgICAgICAgIHNoaW0uc3R5bGUubGVmdCA9IHBvcy5sZWZ0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHNoaW0uc3R5bGUudG9wID0gcG9zLnRvcCArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHVwZGF0ZURpbWVuc2lvbnMpIHtcclxuICAgICAgICAgICAgICAgIHNoaW0uc3R5bGUud2lkdGggPSBlbC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBzaGltLnN0eWxlLmhlaWdodCA9IGVsLm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgc2hpbVsndXBkYXRlJ10odHJ1ZSk7XHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgc2hpbS5zdHlsZS56SW5kZXggPSBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKS50b1N0cmluZygpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChzaGltKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFwcGVuZFRvQm9keShzaGltKTtcclxuICAgIH1cclxuXHJcbiAgICBlbFsnc2hpbSddID0gc2hpbTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSWZyYW1lU2hpbShlbDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoZWwgJiYgZWwuc2hpbSAmJiBlbC5zaGltLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBlbC5zaGltLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwuc2hpbSk7XHJcbiAgICAgICAgZWwuc2hpbSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlSW1hZ2UoaW1nOiBIVE1MSW1hZ2VFbGVtZW50LCBzaXplOiBudW1iZXIsIGRvbnRDZW50ZXI6IGJvb2xlYW4sIGZuT25JbWdMb2FkOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdmFyIGltZ09iaiA9IGltZztcclxuICAgIGlmICghaW1nLndpZHRoIHx8ICFpbWcuaGVpZ2h0KSB7XHJcbiAgICAgICAgdmFyIGltZ09iaiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZ09iai5zcmMgPSBpbWcuc3JjO1xyXG4gICAgfVxyXG4gICAgdmFyIGZuT25Mb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGltZ09iai53aWR0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZuT25Mb2FkLCAxMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpbWdPYmoud2lkdGggPiBpbWdPYmouaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgaWYgKGZuT25JbWdMb2FkKSBmbk9uSW1nTG9hZChpbWcpO1xyXG4gICAgICAgICAgICBpZiAoIWRvbnRDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5Ub3AgPSAoc2l6ZSAtIGltZy5vZmZzZXRIZWlnaHQpIC8gMiArICdweCc7XHJcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luTGVmdCA9IChzaXplIC0gaW1nLm9mZnNldFdpZHRoKSAvIDIgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmIChpbWdPYmoud2lkdGggPiAwKSB7XHJcbiAgICAgICAgZm5PbkxvYWQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgaW1nT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmbk9uTG9hZCwgNTApO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxVc2VyQWN0aW9uVGVtcGxhdGUodXNlckFjdGlvbjogT2JqZWN0LCBvOiBhbnkpIHtcclxuICAgIGZvciAodmFyIHAgaW4gdXNlckFjdGlvbikge1xyXG4gICAgICAgIHZhciBmaWVsZCA9IHVzZXJBY3Rpb25bcF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmaWVsZCA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB1c2VyQWN0aW9uW3BdID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodXNlckFjdGlvbltwXSwgbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwID09ICdtZWRpYUl0ZW1zJykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRbaV0uc3JjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRbaV0uc3JjID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoZmllbGRbaV0uc3JjLCBvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1c2VyQWN0aW9uO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQbGFjZWhvbGRlcih0ZXh0Ym94OiBhbnksIHBsYWNlaG9sZGVyOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRleHRib3gpIHJldHVybjtcclxuXHJcbiAgICB2YXIgb25ibHVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRleHRib3gsIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Ym94LnN0eWxlLmNvbG9yID0gJyM1ODU4NTgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBwbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNsZWFyZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbmZvY3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYWNlaG9sZGVyQ2xlYXJlZCkge1xyXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudCh0ZXh0Ym94LCBjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGV4dGJveC5zdHlsZS5jb2xvciA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNsZWFyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGV4dGJveC5zZXRTZWxlY3Rpb25SYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgLy90byBmaXggYSBidWcgd2hlcmUgc29tZXRpbWVzIHRoZSBjYXJldCBkaXNhcHBlYXJzIHdoaWxlIHRoZSB0ZXh0Ym94IGlzIGZvY3VzZWQuXHJcbiAgICAgICAgICAgICAgICB0ZXh0Ym94LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Ym94LnNldFNlbGVjdGlvblJhbmdlKDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRleHRib3guY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2UgPSB0ZXh0Ym94LmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCAwKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgMCk7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGV4dGJveC5yZWZyZXNoUGxhY2Vob2xkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGV4dGJveC52YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudCh0ZXh0Ym94LCBjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBlbHNlIHRleHRib3guc3R5bGUuY29sb3IgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGVhcmVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGV4dGJveCwgY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgZWxzZSB0ZXh0Ym94LnN0eWxlLmNvbG9yID0gJyM1ODU4NTgnO1xyXG5cclxuICAgICAgICAgICAgdGV4dGJveC52YWx1ZSA9IHBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xlYXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGV4dGJveCwgJ2JsdXInLCBvbmJsdXIpO1xyXG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGV4dGJveCwgJ2ZvY3VzJywgb25mb2N1cyk7XHJcbiAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih0ZXh0Ym94LCAnY2hhbmdlJywgb25ibHVyKTtcclxuICAgIHRleHRib3gucmVmcmVzaFBsYWNlaG9sZGVyKCk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IF9jbG9zZUNvbXBvbmVudCA9IGZ1bmN0aW9uKHJpZDogc3RyaW5nLCBkaXNwYXRjaENsb3NlRXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHZhciBvUklEID0gZ2lneWEuc29jaWFsaXplLl9wYXJzZVJJRChyaWQpO1xyXG4gICAgdmFyIHJlcSA9IG9SSUQucmVxO1xyXG4gICAgaWYgKGdpZ3lhLnNvY2lhbGl6ZS5HcmF5T3V0KSBnaWd5YS5zb2NpYWxpemUuR3JheU91dChmYWxzZSk7XHJcbiAgICB2YXIgaWZyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZ3lhX2lmcl8nICsgcmVxLmNvbnRhaW5lci5pZCk7XHJcbiAgICBpZiAoaWZyICE9IG51bGwpIGlmci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGlmIChkaXNwYXRjaENsb3NlRXZlbnQpIHtcclxuICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoeyBldmVudE5hbWU6ICdjbG9zZScgfSwgcmVxLnApO1xyXG4gICAgfVxyXG4gICAgcmVxLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkT3JSZXBsYWNlSGFzaEZyYWdtZW50KHVybDogc3RyaW5nLCBwYXJhbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHVybCA9IHJlbW92ZUhhc2hGcmFnbWVudCh1cmwsIHBhcmFtKTtcclxuICAgIHVybCA9IGFkZEhhc2hGcmFnbWVudCh1cmwsIHBhcmFtLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRIYXNoRnJhZ21lbnQodXJsOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdmFyIHNpZ24gPSAnIyc7XHJcbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGhhc2hmcmFnbWVudCBleGlzdFxyXG4gICAgaWYgKHVybC5pbmRleE9mKCcjJykgIT0gLTEpXHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKHBhcmFtKSA9PSAtMSlcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGV4aXN0IGhhc2hmcmFnbWVudCBpcyB0aGUgc2FtZSBhcyB3ZSB3YW50IHRvIGFkZCAtIHNvIHdlIG5lZWQgb3IgcmVhcGxjZSBpdFxyXG4gICAgICAgICAgICBzaWduID0gJyYnO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBwYXJhbSArICc9JyArIHRoaXMuZ2V0SGFzaFBhcmFtVmFsdWUodXJsLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIHVybC5yZXBsYWNlKG9sZFZhbHVlLCBwYXJhbSArICc9JyArIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVybCArIHNpZ24gKyBwYXJhbSArICc9JyArIHZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIYXNoRnJhZ21lbnQodXJsOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHVybCBjb250YWlucyBoYXNoIGZyYWdtZW50LlxyXG4gICAgaWYgKHVybC5pbmRleE9mKCcjJykgPT0gLTEpIHJldHVybiB1cmw7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBoYXNoIHZhbHVlIGlmIGV4aXN0XHJcbiAgICB2YXIgZnVsbEhhc2hRdWVyeSA9IHVybC5zcGxpdCgnIycpWzFdO1xyXG4gICAgdmFyIGhhc2hQYXJhbVZhbHVlID0gZ2V0SGFzaFBhcmFtVmFsdWUodXJsLCBwYXJhbSk7XHJcbiAgICBpZiAoaGFzaFBhcmFtVmFsdWUpIGZ1bGxIYXNoUXVlcnkgPSBmdWxsSGFzaFF1ZXJ5LnJlcGxhY2UocGFyYW0gKyAnPScgKyBoYXNoUGFyYW1WYWx1ZSwgJycpO1xyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgaGFzaCBwYXJhbSBpbiBjYXNlIGl0IHdhcyBhIGhhc2ggcGFyYW0gd2l0aG91dCAnPSdcclxuICAgIGZ1bGxIYXNoUXVlcnkgPSBmdWxsSGFzaFF1ZXJ5LnJlcGxhY2UoJyYnICsgcGFyYW0sICcnKTtcclxuICAgIGZ1bGxIYXNoUXVlcnkgPSBmdWxsSGFzaFF1ZXJ5LnJlcGxhY2UoJyMnICsgcGFyYW0sICcjJyk7XHJcblxyXG4gICAgaWYgKGZ1bGxIYXNoUXVlcnkubGVuZ3RoID4gMCkgZnVsbEhhc2hRdWVyeSA9IGZ1bGxIYXNoUXVlcnkuc3Vic3RyaW5nKDEsIGZ1bGxIYXNoUXVlcnkubGVuZ3RoKTtcclxuXHJcbiAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZ1bGwgSGFzaCBRdWVyeSB3aXRoIHRoZSBuZXcgb25lIHdpdGhvdXQgdGhlIGdpdmVuIHBhcmFtIHRvIHJlbW92ZWQgYW5kIGl0J3MgdmFsdWUgaWYgZXhpc3RcclxuICAgIHZhciBVUkxXaXRob3V0SGFzaCA9IHVybC5zcGxpdCgnIycpWzBdO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBoYXNoIHF1ZXJ5IGxlZnQgd2l0aCBubyBwYXJhbXNcclxuICAgIGlmIChmdWxsSGFzaFF1ZXJ5Lmxlbmd0aCA9PSAwKSByZXR1cm4gVVJMV2l0aG91dEhhc2g7XHJcblxyXG4gICAgcmV0dXJuIFVSTFdpdGhvdXRIYXNoICsgJyMnICsgZnVsbEhhc2hRdWVyeTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGFzaFBhcmFtVmFsdWUodXJsOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gQWRkIHRoZSAnPScgc2lnbiB0byBtYXRjaCB0aGUgcGFyYW0gYW5kIG5vdCBtYXliZSB0aGUgc2FtZSBzdHJpbmcgaW4gdGhlIFVSTCBub3QgYXMgYSBwYXJhbVxyXG4gICAgcGFyYW0gKz0gJz0nO1xyXG4gICAgaWYgKHVybC5pbmRleE9mKCcjJykgPT0gLTEgfHwgdXJsLmluZGV4T2YocGFyYW0sIHVybC5pbmRleE9mKCcjJykpID09IC0xKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBmaW5kIHRoZSBuZXh0ICYgb3IgdGhlIGVuZCBvZiB0aGUgcGFyYW0gc3RyaW5nXHJcbiAgICB2YXIgc3RhcnRPZlBhcmFtID0gdXJsLmluZGV4T2YocGFyYW0sIHVybC5pbmRleE9mKCcjJykpO1xyXG4gICAgdmFyIGVuZE9mUGFyYW0gPSB1cmwuaW5kZXhPZignJicsIHN0YXJ0T2ZQYXJhbSk7XHJcblxyXG4gICAgLy8gSWYgdGhlIHBhcmFtIHdhcyB1bnRpbGwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nIC0gc2V0IHRoZSBlbmRPZlBhcmFtIHRvIHRoZSBlbmQgb2YgdGhlIHN0cmluZyB0b29cclxuICAgIGlmIChlbmRPZlBhcmFtID09IC0xKSBlbmRPZlBhcmFtID0gdXJsLmxlbmd0aDtcclxuXHJcbiAgICByZXR1cm4gdXJsLnN1YnN0cmluZyhzdGFydE9mUGFyYW0gKyBwYXJhbS5sZW5ndGgsIGVuZE9mUGFyYW0pO1xyXG59XHJcbiIsImltcG9ydCB7IGdldFN0eWxlU3RyaW5nIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRTdHlsZXMnO1xyXG5pbXBvcnQgeyBtZWFzdXJlVGV4dCB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0VGV4dCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX2ZpeEdyYXlQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHZhciBkYXJrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmtlblNjcmVlbk9iamVjdCcpO1xyXG4gICAgaWYgKGRhcmspIHtcclxuICAgICAgICB2YXIgZGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIGRiID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZGUuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChzY3JvbGxUb3AgPT0gMCkgc2Nyb2xsVG9wID0gZGIuc2Nyb2xsVG9wO1xyXG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZGUuc2Nyb2xsTGVmdDtcclxuICAgICAgICBpZiAoc2Nyb2xsTGVmdCA9PSAwKSBzY3JvbGxMZWZ0ID0gZGIuc2Nyb2xsTGVmdDtcclxuICAgICAgICB2YXIgY2xpZW50SGVpZ2h0ID0gZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGlmIChjbGllbnRIZWlnaHQgPT0gMCkgY2xpZW50SGVpZ2h0ID0gZGIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRlLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmIChjbGllbnRXaWR0aCA9PSAwKSBjbGllbnRXaWR0aCA9IGRiLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTYpIGNsaWVudFdpZHRoIC09IDE7XHJcbiAgICAgICAgZGFyay5zdHlsZS50b3AgPSBzY3JvbGxUb3AudG9TdHJpbmcoKTtcclxuICAgICAgICBkYXJrLnN0eWxlLmxlZnQgPSBzY3JvbGxMZWZ0LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9maXhHcmF5U2l6ZSgpOiB2b2lkIHtcclxuICAgIHZhciBkYXJrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmtlblNjcmVlbk9iamVjdCcpO1xyXG4gICAgaWYgKGRhcmspIHtcclxuICAgICAgICB2YXIgZGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIGRiID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB2YXIgY2xpZW50SGVpZ2h0ID0gZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGlmIChjbGllbnRIZWlnaHQgPT0gMCkgY2xpZW50SGVpZ2h0ID0gZGIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRlLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmIChjbGllbnRXaWR0aCA9PSAwKSBjbGllbnRXaWR0aCA9IGRiLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTYpIGNsaWVudFdpZHRoIC09IDE7XHJcblxyXG4gICAgICAgIGRhcmsuc3R5bGUud2lkdGggPSAnJyArIGNsaWVudFdpZHRoICsgJ3B4JztcclxuICAgICAgICBkYXJrLnN0eWxlLmhlaWdodCA9ICcnICsgY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUpTUG9wdXAocmlkOiBzdHJpbmcsIHJlc29sdmVyLCBjYXB0aW9uVGV4dDogc3RyaW5nLCBub0NhcHRpb246IGJvb2xlYW4pOiBPYmplY3Qge1xyXG4gICAgdmFyIG9SSUQgPSBfcGFyc2VSSUQocmlkKTtcclxuXHJcbiAgICB2YXIgcmVxID0gb1JJRC5yZXE7XHJcbiAgICB2YXIgcGFyYW1zID0gcmVxLnA7XHJcbiAgICB2YXIgY29uZiA9IHJlcS5jO1xyXG4gICAgaWYgKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHBhcmFtc1snc2hvd0NhcHRpb24nXSkpIG5vQ2FwdGlvbiA9IHRydWU7XHJcblxyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmFtc1snY29udGFpbmVySUQnXSk7XHJcbiAgICByZXEuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgIHZhciBvQmdTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvYmFja2dyb3VuZCcpO1xyXG4gICAgdmFyIG9DYXB0aW9uU3R5bGUgPSByZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9ib2R5L2NhcHRpb25zJyk7XHJcblxyXG4gICAgdmFyIHMgPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT1cIicgKyBnZXRTdHlsZVN0cmluZyhvQmdTdHlsZSkgKyAnO2VtcHR5LWNlbGxzOnNob3c7XCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgPic7XHJcbiAgICBpZiAoIW5vQ2FwdGlvbikge1xyXG4gICAgICAgIHMgKz1cclxuICAgICAgICAgICAgJzx0ciBzdHlsZT1cIicgK1xyXG4gICAgICAgICAgICBnZXRTdHlsZVN0cmluZyhvQ2FwdGlvblN0eWxlKSArXHJcbiAgICAgICAgICAgICdcIj48dGQ+PHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT1cIndpZHRoOjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj48dHIgaWQ9XCInICtcclxuICAgICAgICAgICAgcGFyYW1zWydjb250YWluZXJJRCddICtcclxuICAgICAgICAgICAgJ19jYXB0aW9uXCI+PHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlXCI+PGRpdiBzdHlsZT1cIicgK1xyXG4gICAgICAgICAgICBnZXRTdHlsZVN0cmluZyhvQ2FwdGlvblN0eWxlKSArXHJcbiAgICAgICAgICAgICc7cGFkZGluZzo3cHhcIj4nICtcclxuICAgICAgICAgICAgY2FwdGlvblRleHQgK1xyXG4gICAgICAgICAgICAnPC9kaXY+PC90ZD48dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcIj4nO1xyXG4gICAgICAgIHMgKz1cclxuICAgICAgICAgICAgJzxkaXYgYWxpZ249XCJyaWdodFwiIHN0eWxlPVwicGFkZGluZy1yaWdodDogN3B4OyBjdXJzb3I6IHBvaW50ZXI7JyArXHJcbiAgICAgICAgICAgIGdldFN0eWxlU3RyaW5nKG9DYXB0aW9uU3R5bGUpICtcclxuICAgICAgICAgICAgJ1wiPjxpbWcgb25jbGljaz1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fY2xvc2VDb21wb25lbnQoXFwnJyArXHJcbiAgICAgICAgICAgIHJpZCArXHJcbiAgICAgICAgICAgICdcXCcsIHRydWUpO1wiICBzcmM9XCInICtcclxuICAgICAgICAgICAgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvSFRNTExvZ2luL2Nsb3NlSWNvbi5naWYnKSArXHJcbiAgICAgICAgICAgICdcIiBhbHQ9XCJcIiAvPjwvZGl2PjwvdGQ+PC90cj48L3RhYmxlPjwvdGQ+PC90cj48dHI+PHRkIGNvbHNwYW49XCIyXCI+JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcyArPSAnPHRyPjx0ZD4nO1xyXG4gICAgfVxyXG4gICAgcyArPSAnPGRpdiBpZD1cIicgKyBwYXJhbXNbJ2NvbnRhaW5lcklEJ10gKyAnX2NvbnRhaW5lclwiPjwvZGl2PjwvdGQ+PC90cj48L3RhYmxlPic7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcztcclxuICAgIHZhciBwID0ge307XHJcbiAgICB2YXIgYyA9IHt9O1xyXG4gICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgcFtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAocGFyYW0gaW4gY29uZikge1xyXG4gICAgICAgIGNbcGFyYW1dID0gY29uZltwYXJhbV07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwWydjb250YWluZXJJRCddICsgJ19jYXB0aW9uJyk7XHJcblxyXG4gICAgcFsnaGVpZ2h0J10gPSBwWydoZWlnaHQnXSAtIG9CZ1N0eWxlWydmcmFtZS10aGlja25lc3MnXSAqIDI7XHJcbiAgICBpZiAoIW5vQ2FwdGlvbikgcFsnaGVpZ2h0J10gLT0gY2FwdGlvbi5vZmZzZXRIZWlnaHQ7XHJcbiAgICBwWyd3aWR0aCddID0gcFsnd2lkdGgnXSAtIG9CZ1N0eWxlWydmcmFtZS10aGlja25lc3MnXSAqIDI7XHJcblxyXG4gICAgZ2lneWEudXRpbHMuRE9NLl9wb3B1cENvbnRhaW5lcnNbcFsnY29udGFpbmVySUQnXV0gPSBjb250YWluZXI7XHJcbiAgICBwWydjb250YWluZXJJRCddID0gcFsnY29udGFpbmVySUQnXSArICdfY29udGFpbmVyJztcclxuICAgIHJldHVybiB7IGM6IGMsIHA6IHAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUpTUG9wdXAyKHJpZDogc3RyaW5nLCByZXNvbHZlciwgYm9yZGVyU2l6ZTogbnVtYmVyLCBiYXNlOiBzdHJpbmcsIGNhcHRpb25UZXh0OiBzdHJpbmcsIGFkZEJvcmRlcjogYm9vbGVhbikge1xyXG4gICAgdmFyIG9SSUQgPSBfcGFyc2VSSUQocmlkKTtcclxuXHJcbiAgICB2YXIgcmVxID0gb1JJRC5yZXE7XHJcbiAgICB2YXIgcGFyYW1zID0gcmVxLnA7XHJcbiAgICB2YXIgY29uZiA9IHJlcS5jO1xyXG5cclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJhbXNbJ2NvbnRhaW5lcklEJ10pO1xyXG4gICAgcmVxLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICB2YXIgb0NhcHRpb25TdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvY2FwdGlvbnMnKTtcclxuXHJcbiAgICBpZiAoIWJvcmRlclNpemUpIGJvcmRlclNpemUgPSAxMDtcclxuICAgIGlmICghYmFzZSkgYmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL0RpYWxvZy9EaWFsb2dCZ18nKTtcclxuICAgIHZhciBpbWdTdHlsZSA9ICd3aWR0aDonICsgYm9yZGVyU2l6ZSArICdweDtoZWlnaHQ6JyArIGJvcmRlclNpemUgKyAncHgnO1xyXG5cclxuICAgIHZhciBib3JkZXJTdHJpbmc7XHJcbiAgICBpZiAoYWRkQm9yZGVyKSB7XHJcbiAgICAgICAgYm9yZGVyU3RyaW5nID0gJzFweCBzb2xpZCAjNTU1NTU1JztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcyA9XHJcbiAgICAgICAgJzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgc3R5bGU9XCJmb250LXNpemU6MXB4O3BhZGRpbmc6MHB4O21hcmdpbjowcHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtc2l6ZToxcHg7bGluZS1oZWlnaHQ6MXB4O2VtcHR5LWNlbGxzOnNob3c7XCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgPic7XHJcbiAgICBzICs9XHJcbiAgICAgICAgJzx0cj48dGQgaGVpZ2h0PVwiJyArXHJcbiAgICAgICAgYm9yZGVyU2l6ZSArXHJcbiAgICAgICAgJ1wiIHN0eWxlPVwiZm9udC1zaXplOjFweFwiPjxkaXYgc3R5bGU9XCJoZWlnaHQ6JyArXHJcbiAgICAgICAgYm9yZGVyU2l6ZSArXHJcbiAgICAgICAgJ3B4XCI+PGltZyBzcmM9XCInICtcclxuICAgICAgICBiYXNlICtcclxuICAgICAgICAnVG9wTGVmdC5wbmdcIiBzdHlsZT1cIicgK1xyXG4gICAgICAgIGltZ1N0eWxlICtcclxuICAgICAgICAnXCIgYWx0PVwiXCIgLz48L2Rpdj48L3RkPjx0ZCBoZWlnaHQ9XCInICtcclxuICAgICAgICBib3JkZXJTaXplICtcclxuICAgICAgICAnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICtcclxuICAgICAgICBiYXNlICtcclxuICAgICAgICAnZmlsbGVyLnBuZ1xcJyk7YmFrZ3JvdW5kLXJlcGVhdDpyZXBlYXRcIj48L3RkPjx0ZCBoZWlnaHQ9XCInICtcclxuICAgICAgICBib3JkZXJTaXplICtcclxuICAgICAgICAnXCIgc3R5bGU9XCJmb250LXNpemU6MXB4O1wiPjxkaXYgc3R5bGU9XCJoZWlnaHQ6JyArXHJcbiAgICAgICAgYm9yZGVyU2l6ZSArXHJcbiAgICAgICAgJ3B4XCI+PGltZyBzdHlsZT1cIicgK1xyXG4gICAgICAgIGltZ1N0eWxlICtcclxuICAgICAgICAnXCIgc3JjPVwiJyArXHJcbiAgICAgICAgYmFzZSArXHJcbiAgICAgICAgJ1RvcFJpZ2h0LnBuZ1wiIGFsdD1cIlwiIC8+PC9kaXY+PC90ZD48L3RyPic7XHJcbiAgICBpZiAoY2FwdGlvblRleHQpIHtcclxuICAgICAgICBzICs9XHJcbiAgICAgICAgICAgICc8dHI+PHRkIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArXHJcbiAgICAgICAgICAgIGJhc2UgK1xyXG4gICAgICAgICAgICAnZmlsbGVyLnBuZ1xcJyk7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0XCI+PC90ZD48dGQ+PHRhYmxlIHdpZHRoPVwiMTAwJVwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwiYm9yZGVyLXRvcDonICtcclxuICAgICAgICAgICAgYm9yZGVyU3RyaW5nICtcclxuICAgICAgICAgICAgJztib3JkZXItbGVmdDonICtcclxuICAgICAgICAgICAgYm9yZGVyU3RyaW5nICtcclxuICAgICAgICAgICAgJztib3JkZXItcmlnaHQ6JyArXHJcbiAgICAgICAgICAgIGJvcmRlclN0cmluZyArXHJcbiAgICAgICAgICAgICc7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkZcIj48dHI+PHRkIHN0eWxlPVwicGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWxlZnQ6MTBweDsnICtcclxuICAgICAgICAgICAgZ2V0U3R5bGVTdHJpbmcob0NhcHRpb25TdHlsZSkgK1xyXG4gICAgICAgICAgICAnXCI+JyArXHJcbiAgICAgICAgICAgIGNhcHRpb25UZXh0ICtcclxuICAgICAgICAgICAgJzwvdGQ+PHRkIGFsaWduPVwicmlnaHRcIiB2YWxpZ249XCJ0b3BcIiBzdHlsZT1cIicgK1xyXG4gICAgICAgICAgICBnZXRTdHlsZVN0cmluZyhvQ2FwdGlvblN0eWxlKSArXHJcbiAgICAgICAgICAgICdcIj48ZGl2IHN0eWxlPVwicGFkZGluZy1yaWdodDo1cHg7cGFkZGluZy10b3A6NXB4O3RleHQtYWxpZ246cmlnaHQ7XCI+PGltZyBzdHlsZT1cImN1cnNvcjpwb2ludGVyXCIgb25jbGljaz1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fY2xvc2VDb21wb25lbnQoXFwnJyArXHJcbiAgICAgICAgICAgIHJpZCArXHJcbiAgICAgICAgICAgICdcXCcsIHRydWUpO1wiIHNyYz1cIicgK1xyXG4gICAgICAgICAgICBiYXNlICtcclxuICAgICAgICAgICAgJ2Nsb3NlLnBuZ1wiIGFsdD1cIlwiIC8+PC9kaXY+PC90ZD48L3RyPjwvdGFibGU+PC90ZD48dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICtcclxuICAgICAgICAgICAgYmFzZSArXHJcbiAgICAgICAgICAgICdmaWxsZXIucG5nXFwnKTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXRcIj48L3RkPjwvdHI+JztcclxuICAgIH1cclxuICAgIHMgKz1cclxuICAgICAgICAnPHRyPjx0ZCBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgK1xyXG4gICAgICAgIGJhc2UgK1xyXG4gICAgICAgICdmaWxsZXIucG5nXFwnKTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXRcIj48L3RkPjx0ZD48ZGl2IHN0eWxlPVwiYm9yZGVyLWJvdHRvbTonICtcclxuICAgICAgICBib3JkZXJTdHJpbmcgK1xyXG4gICAgICAgICc7Ym9yZGVyLWxlZnQ6JyArXHJcbiAgICAgICAgYm9yZGVyU3RyaW5nICtcclxuICAgICAgICAnO2JvcmRlci1yaWdodDonICtcclxuICAgICAgICBib3JkZXJTdHJpbmcgK1xyXG4gICAgICAgICc7YmFja2dyb3VuZC1jb2xvcjojRkZGRkZGXCIgaWQ9XCInICtcclxuICAgICAgICBwYXJhbXNbJ2NvbnRhaW5lcklEJ10gK1xyXG4gICAgICAgICdfY29udGFpbmVyXCI+PC9kaXY+PC90ZD48dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICtcclxuICAgICAgICBiYXNlICtcclxuICAgICAgICAnZmlsbGVyLnBuZ1xcJyk7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0XCI+PC90ZD48L3RyPic7XHJcbiAgICBzICs9XHJcbiAgICAgICAgJzx0cj48dGQgaGVpZ2h0PVwiJyArXHJcbiAgICAgICAgYm9yZGVyU2l6ZSArXHJcbiAgICAgICAgJ1wiIHN0eWxlPVwiZm9udC1zaXplOjFweDtcIj48ZGl2IHN0eWxlPVwiaGVpZ2h0OicgK1xyXG4gICAgICAgIGJvcmRlclNpemUgK1xyXG4gICAgICAgICdweFwiPjxpbWcgc3R5bGU9XCInICtcclxuICAgICAgICBpbWdTdHlsZSArXHJcbiAgICAgICAgJ1wiIHNyYz1cIicgK1xyXG4gICAgICAgIGJhc2UgK1xyXG4gICAgICAgICdCb3R0b21MZWZ0LnBuZ1wiIGFsdD1cIlwiIC8+PC9kaXY+PC90ZD48dGQgaGVpZ2h0PVwiJyArXHJcbiAgICAgICAgYm9yZGVyU2l6ZSArXHJcbiAgICAgICAgJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArXHJcbiAgICAgICAgYmFzZSArXHJcbiAgICAgICAgJ2ZpbGxlci5wbmdcXCcpO2Jha2dyb3VuZC1yZXBlYXQ6cmVwZWF0XCI+PC90ZD48dGQgaGVpZ2h0PVwiJyArXHJcbiAgICAgICAgYm9yZGVyU2l6ZSArXHJcbiAgICAgICAgJ1wiIHN0eWxlPVwiZm9udC1zaXplOjFweDtcIj48ZGl2IHN0eWxlPVwiaGVpZ2h0OicgK1xyXG4gICAgICAgIGJvcmRlclNpemUgK1xyXG4gICAgICAgICdweFwiPjxpbWcgc3R5bGU9XCInICtcclxuICAgICAgICBpbWdTdHlsZSArXHJcbiAgICAgICAgJ1wiIHNyYz1cIicgK1xyXG4gICAgICAgIGJhc2UgK1xyXG4gICAgICAgICdCb3R0b21SaWdodC5wbmdcIiBhbHQ9XCJcIiAvPjwvZGl2PjwvdGQ+PC90cj48L3RhYmxlPic7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcztcclxuICAgIHZhciBwID0ge307XHJcbiAgICB2YXIgYyA9IHt9O1xyXG4gICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgcFtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAocGFyYW0gaW4gY29uZikge1xyXG4gICAgICAgIGNbcGFyYW1dID0gY29uZltwYXJhbV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2lneWEudXRpbHMuRE9NLl9wb3B1cENvbnRhaW5lcnNbcFsnY29udGFpbmVySUQnXV0gPSBjb250YWluZXI7XHJcbiAgICBwWydjb250YWluZXJJRCddID0gcFsnY29udGFpbmVySUQnXSArICdfY29udGFpbmVyJztcclxuXHJcbiAgICBwWydoZWlnaHQnXSA9IHBbJ2hlaWdodCddIC0gYm9yZGVyU2l6ZSAqIDI7XHJcbiAgICBpZiAoY2FwdGlvblRleHQpIHtcclxuICAgICAgICBpZiAoY2FwdGlvblRleHQucmVwbGFjZSgvIC9nLCAnJykgPT0gJycpIHtcclxuICAgICAgICAgICAgcFsnaGVpZ2h0J10gLT0gMTA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcFsnaGVpZ2h0J10gLT0gbWVhc3VyZVRleHQoY2FwdGlvblRleHQsIG9DYXB0aW9uU3R5bGUpWydoJ10gKyAxMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwWyd3aWR0aCddID0gcFsnd2lkdGgnXSAtIGJvcmRlclNpemUgKiAyO1xyXG5cclxuICAgIHJldHVybiB7IGM6IGMsIHA6IHAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3BhcnNlUklEKHJpZDogc3RyaW5nKSB7XHJcbiAgICB2YXIgcmlkcCA9IHJpZC5zcGxpdCgnQCcpO1xyXG4gICAgdmFyIHN3ZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZHBbMl0gKyAnXycgKyByaWRwWzFdKTtcclxuICAgIHZhciBjb250YWluZXJJRCA9IHJpZHBbMl07XHJcbiAgICB2YXIgY29udGFpbmVyO1xyXG5cclxuICAgIGlmIChudWxsID09IChjb250YWluZXIgPSBnaWd5YS51dGlscy5ET00uX3BzZXVkb0NvbnRhaW5lcnNbY29udGFpbmVySURdKSkge1xyXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZHBbMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBSZXFzID0gbnVsbDtcclxuICAgIGlmIChjb250YWluZXIgIT0gbnVsbCkgUmVxcyA9IGNvbnRhaW5lci5SZXFzO1xyXG4gICAgdmFyIHJlcSA9IG51bGw7XHJcbiAgICBpZiAoUmVxcyAhPSBudWxsKSByZXEgPSBSZXFzW3BhcnNlSW50KHJpZHBbMF0pXTtcclxuXHJcbiAgICByZXR1cm4geyByaWQ6IHJpZCwgY29udGFpbmVyOiBjb250YWluZXIsIFJlcXM6IFJlcXMsIHJlcTogcmVxLCBzd2Y6IHN3ZiB9O1xyXG59XHJcbiIsImltcG9ydCB7IGdldENsYXNzQm9yZGVyc0FuZFBhZGRpbmdzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRTcHJpdGVzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWRlSW4oZWw6IEhUTUxFbGVtZW50LCBvcGFjaXR5OiBudW1iZXIgPSAxKTogdm9pZCB7XHJcbiAgICBpZiAoZWwuc3R5bGUub3BhY2l0eSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlbC5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgMCAqIDEwMCArICcpJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIH1cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChlbC5zdHlsZS5vcGFjaXR5ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgb3BhY2l0eSAqIDEwMCArICcpJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eSArICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDEwKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2xpZGVEb3duKGVsKTogdm9pZCB7XHJcbiAgICB2YXIgYnAgPSBnZXRDbGFzc0JvcmRlcnNBbmRQYWRkaW5ncyhlbC5jbGFzc05hbWUpO1xyXG4gICAgdmFyIGggPSBlbC5vZmZzZXRIZWlnaHQgLSBicFsnaCddO1xyXG4gICAgdmFyIG9yaWdpbmFsVHJhbnNpdGlvblByb3BlcnR5ID0gZWwuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5O1xyXG4gICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gJzFweCc7XHJcbiAgICBlbC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBlbC5zdHlsZS53ZWJraXRUcmFuc2l0aW9uUHJvcGVydHkgPSAnbWF4LWhlaWdodCc7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBlbC5zdHlsZS5tYXhIZWlnaHQgPSBoICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBlbC5zdHlsZS53ZWJraXRUcmFuc2l0aW9uUHJvcGVydHkgPSBvcmlnaW5hbFRyYW5zaXRpb25Qcm9wZXJ0eTtcclxuICAgIH0sIDEwMCk7XHJcbiAgICB2YXIgZm5PblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBlbC5zdHlsZS5tYXhIZWlnaHQgPSAnOTk5cHgnO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKGVsLCAndHJhbnNpdGlvbmVuZCcsIGZuT25UcmFuc2l0aW9uRW5kKTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBmbk9uVHJhbnNpdGlvbkVuZCk7XHJcbiAgICB9O1xyXG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWwsICd0cmFuc2l0aW9uZW5kJywgZm5PblRyYW5zaXRpb25FbmQpO1xyXG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWwsICd3ZWJraXRUcmFuc2l0aW9uRW5kJywgZm5PblRyYW5zaXRpb25FbmQpO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoZm5PblRyYW5zaXRpb25FbmQsIDUwMCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX2ZpeEdyYXlTaXplLCBfZml4R3JheVBvc2l0aW9uIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9VSVBvcHVwJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHcmF5T3V0KHZpczogYm9vbGVhbiwgb3B0Pyk6IHZvaWQge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBvcHQgfHwge307XHJcbiAgICB2YXIgemluZGV4ID0gb3B0aW9ucy56aW5kZXggfHwgNTA7XHJcbiAgICB2YXIgb3BhY2l0eSA9IG9wdGlvbnMub3BhY2l0eSB8fCA3MDtcclxuICAgIHZhciBvcGFxdWUgPSBvcGFjaXR5IC8gMTAwO1xyXG4gICAgdmFyIGJnY29sb3IgPSBvcHRpb25zLmJnY29sb3IgfHwgJyMwMDAwMDAnO1xyXG4gICAgdmFyIGRhcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya2VuU2NyZWVuT2JqZWN0Jyk7XHJcbiAgICB2YXIgdGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgaWYgKCFkYXJrKSB7XHJcbiAgICAgICAgdmFyIGlzQ29tcE1vZGUgPSBnaWd5YS5sb2NhbEluZm8uaXNNb2JpbGUgfHwgZ2lneWEubG9jYWxJbmZvLmlzSUU2IHx8IGRvY3VtZW50LmNvbXBhdE1vZGUgPT0gJ0JhY2tDb21wYXQnO1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChzY3JvbGxUb3AgPT0gMCkgc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAgICAgdmFyIHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWYgKGlzQ29tcE1vZGUpIHtcclxuICAgICAgICAgICAgdG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICB0bm9kZS5zdHlsZS50b3AgPSAnJyArIHNjcm9sbFRvcCArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG5vZGUuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgICAgICB0bm9kZS5zdHlsZS50b3AgPSAnMHB4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgdG5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICB0bm9kZS5zdHlsZS5sZWZ0ID0gJzBweCc7XHJcbiAgICAgICAgdG5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0bm9kZS5pZCA9ICdkYXJrZW5TY3JlZW5PYmplY3QnO1xyXG4gICAgICAgIHRub2RlLmlubmVySFRNTCA9ICcmIzE2MDsnO1xyXG4gICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRub2RlKTtcclxuICAgICAgICBkYXJrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmtlblNjcmVlbk9iamVjdCcpO1xyXG4gICAgICAgIGlmICghZ2lneWFbJ2F0dGFjaGVkRml4R3JheSddKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhWydhdHRhY2hlZEZpeEdyYXknXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF9maXhHcmF5U2l6ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dbJ2F0dGFjaEV2ZW50J10pIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1snYXR0YWNoRXZlbnQnXSgnb25yZXNpemUnLCBfZml4R3JheVNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0NvbXBNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX2ZpeEdyYXlQb3NpdGlvbiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd1snYXR0YWNoRXZlbnQnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snYXR0YWNoRXZlbnQnXSgnb25zY3JvbGwnLCBfZml4R3JheVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh2aXMpIHtcclxuICAgICAgICB2YXIgdnBoO1xyXG4gICAgICAgIHZhciB2cHc7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICB2cGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIHZwdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHZwaCA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB2YXIgZGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZwaCA9IGRlLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgdnB3ID0gZGUuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2cHcgPT0gMCkgdnB3ID0gdGJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgaWYgKHZwaCA9PSAwKSB2cGggPSB0Ym9keS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgZGFyay5zdHlsZS5vcGFjaXR5ID0gb3BhcXVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZGFyay5zdHlsZVsnTW96T3BhY2l0eSddID0gb3BhcXVlO1xyXG4gICAgICAgIGRhcmsuc3R5bGUud2lkdGggPSAnJyArIHZwdyArICdweCc7XHJcbiAgICAgICAgZGFyay5zdHlsZS5oZWlnaHQgPSAnJyArIHZwaCArICdweCc7XHJcbiAgICAgICAgZGFyay5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgb3BhY2l0eSArICcpJztcclxuICAgICAgICBkYXJrLnN0eWxlLnpJbmRleCA9IHppbmRleDtcclxuICAgICAgICBkYXJrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJnY29sb3I7XHJcbiAgICAgICAgZGFyay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGJvZHkucmVtb3ZlQ2hpbGQoZGFyayk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVVSSgpOiB2b2lkIHtcclxuICAgIHZhciBwYXJhbXMgPSBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoW2dpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZiwgYXJndW1lbnRzXSk7XHJcbiAgICBHcmF5T3V0KGZhbHNlKTtcclxuXHJcbiAgICAvLyBwbHVnaW5zIHRoYXQgZXh0ZW5kIEJhc2VQbHVnaW5cclxuICAgIGZvciAodmFyIHBsdWdpbk5hbWUgaW4gZ2lneWEuXy5wbHVnaW5zLmluc3RhbmNlcykge1xyXG4gICAgICAgIHZhciBwbHVnaW4gPSBnaWd5YS5fLnBsdWdpbnMuaW5zdGFuY2VzW3BsdWdpbk5hbWVdO1xyXG4gICAgICAgIGlmIChwbHVnaW5bJ2lzTW9kYWwnXSkgcGx1Z2luLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsZWdhY3lcclxuICAgIGZvciAodmFyIGNvbnRhaW5lcklEIGluIGdpZ3lhLnV0aWxzLkRPTS5fcG9wdXBDb250YWluZXJzKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdpZ3lhLnV0aWxzLkRPTS5fcG9wdXBDb250YWluZXJzW2NvbnRhaW5lcklEXTtcclxuICAgICAgICBpZiAoY29udGFpbmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnBhcmVudE5vZGUpIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGlmcmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZ3lhX2lmcl8nICsgY29udGFpbmVySUQpO1xyXG4gICAgICAgIGlmIChudWxsICE9IGlmcmVsKSB7XHJcbiAgICAgICAgICAgIC8vaWZyZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpZnJlbCk7XHJcbiAgICAgICAgICAgIGlmcmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLy8gaWYgbm8tb25lIG1ha2VzIGEgYmlnIGZ1c3MgYWJvdXQgdGhpcyBiZWluZyBjb21tZW50ZWQgb3V0IC0gZGVsZXRlIVxyXG4gICAgLy92YXIgZmJSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZiLXJvb3QnKTtcclxuICAgIC8vaWYgKGZiUm9vdCkgZmJSb290LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgICBnaWd5YS5ldmVudHMuZ2xvYmFsLmRpc3BhdGNoKHsgZXZlbnROYW1lOiAnSGlkZVVJUmVxdWVzdGVkJyB9KTtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zWydjYWxsYmFjayddID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB2YXIgb1Jlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdPSycsXHJcbiAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICBvcGVyYXRpb246ICdoaWRlVUknLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBwYXJhbXNbJ2NvbnRleHQnXSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgZXJyb3JDb2RlOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcGFyYW1zWydjYWxsYmFjayddKG9SZXNwb25zZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVNhZmVDb3B5KGVsOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChlbC5hZGRlZFNhZmVDb3B5KSByZXR1cm47XHJcbiAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2NvcHknLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLy90byBsZXQgdXNlcnMgY29weSBVUkxzIHdpdGhvdXQgc29mdCBoeXBoZW5zXHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgdmFyIG5vZGVuYW1lID0gdGFyZ2V0ICYmIHRhcmdldC5ub2RlTmFtZSA/IHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIDogJyc7XHJcbiAgICAgICAgaWYgKG5vZGVuYW1lID09ICd0ZXh0YXJlYScgfHwgbm9kZW5hbWUgPT0gJ2lucHV0JykgcmV0dXJuO1xyXG4gICAgICAgIHZhciBkaXZDb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2Q29weS5zdHlsZS5jb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuYmFja2dyb3VuZENvbG9yIDogJyNGRkZGRkYnO1xyXG4gICAgICAgIGRpdkNvcHkuc3R5bGUuZm9udFNpemUgPSAnMHB4JztcclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGRpdkNvcHkpO1xyXG4gICAgICAgIHZhciBzaHlSZWdleCA9IG5ldyBSZWdFeHAoJygmc2h5O3wnICsgU3RyaW5nLmZyb21DaGFyQ29kZSgxNzMpICsgJyknLCAnZycpO1xyXG4gICAgICAgIHZhciBzZWxlY3Rpb24sIHJhbmdlMjtcclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgICAgICAgICBkaXZDb3B5LmFwcGVuZENoaWxkKHJhbmdlLmNsb25lQ29udGVudHMoKSk7XHJcbiAgICAgICAgICAgIGRpdkNvcHkuaW5uZXJIVE1MID0gZGl2Q29weS5pbm5lckhUTUwucmVwbGFjZShzaHlSZWdleCwgJycpOyAvL2l0J3MgdGhlIHNvZnQgaHlwaGVuIGNoYXJcclxuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdEFsbENoaWxkcmVuKGRpdkNvcHkpO1xyXG4gICAgICAgICAgICB2YXIgZm5SZXN0b3JlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBkaXZDb3B5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2Q29weSk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uID0gd2luZG93LmRvY3VtZW50WydzZWxlY3Rpb24nXTtcclxuICAgICAgICAgICAgcmFuZ2UgPSBzZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgZGl2Q29weS5pbm5lckhUTUwgPSByYW5nZVsnaHRtbFRleHQnXTtcclxuICAgICAgICAgICAgZGl2Q29weS5pbm5lckhUTUwgPSBkaXZDb3B5LmlubmVySFRNTC5yZXBsYWNlKHNoeVJlZ2V4LCAnJyk7IC8vaXQncyB0aGUgc29mdCBoeXBoZW4gY2hhclxyXG4gICAgICAgICAgICByYW5nZTIgPSBkb2N1bWVudC5ib2R5WydjcmVhdGVUZXh0UmFuZ2UnXSgpO1xyXG4gICAgICAgICAgICByYW5nZTIubW92ZVRvRWxlbWVudFRleHQoZGl2Q29weSk7XHJcbiAgICAgICAgICAgIHJhbmdlMi5zZWxlY3QoKTtcclxuICAgICAgICAgICAgZm5SZXN0b3JlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBkaXZDb3B5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2Q29weSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VbJ3RleHQnXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5nZVsnc2VsZWN0J10oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZm5SZXN0b3JlLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZWwuYWRkZWRTYWZlQ29weSA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0U3R5bGUsIGdldENsYXNzQm9yZGVyc0FuZFBhZGRpbmdzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRTcHJpdGVzJztcclxuaW1wb3J0IHsgcmVtb3ZlRWxlbWVudE9uRG9jQ2xpY2tPckVzY2FwZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvRE9NJztcclxuaW1wb3J0IHsgcmVtb3ZlSWZyYW1lU2hpbSwgYWRkSWZyYW1lU2hpbSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvR2xvYmFsRE9NJztcclxuaW1wb3J0IHsgX0dldEVsZW1lbnRQb3MgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2ltYWdlUG9zaXRpb25zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZGVyKGNvbnRhaW5lcj86IEhUTUxFbGVtZW50LCBjbGFzc05hbWUgPSAnJywgaDogbnVtYmVyID0gdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgaWYgKCFoKSBoID0gcGFyc2VJbnQoZ2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JykpO1xyXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIicgK1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgK1xyXG4gICAgICAgICAgICAnXCIgc3R5bGU9XCJoZWlnaHQ6JyArXHJcbiAgICAgICAgICAgIGggK1xyXG4gICAgICAgICAgICBcInB4O2JhY2tncm91bmQtaW1hZ2U6dXJsKCdcIiArXHJcbiAgICAgICAgICAgIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2dtL2xvYWRlci5naWYnKSArXHJcbiAgICAgICAgICAgICdcXCcpOyBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyXCI+PC9kaXY+JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmFkZUluKGVsOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChlbC5pbnRlcnZhbCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZWwuaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gICAgZWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIGVsLmludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG9wID0gcGFyc2VGbG9hdChlbC5zdHlsZS5vcGFjaXR5KTtcclxuICAgICAgICBpZiAob3AgPj0gMSkgY2xlYXJJbnRlcnZhbChlbC5pbnRlcnZhbCk7XHJcbiAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IG9wICsgMC4xO1xyXG4gICAgfSwgMTApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYWxsb29uSFRNTChcclxuICAgIGJvZHksXHJcbiAgICBjYXB0aW9uVGV4dDogc3RyaW5nLFxyXG4gICAgdzogbnVtYmVyLFxyXG4gICAgaDogbnVtYmVyLFxyXG4gICAgbnViWTogbnVtYmVyLFxyXG4gICAgbnViUG9zaXRpb246IHN0cmluZyxcclxuICAgIGhpZGVDbG9zZTogYm9vbGVhbixcclxuICAgIHNPbkNsb3NlOiBzdHJpbmcsXHJcbiAgICBmcmFtZUlEOiBzdHJpbmcsXHJcbik6IHN0cmluZyB7XHJcbiAgICB2YXIgbnViVyA9IDEzO1xyXG4gICAgdmFyIG51YkggPSAyNTtcclxuICAgIGlmICghZ2lneWEuZ2xvYmFsWydhZGRlZEJhbGxvb25DU1MnXSkge1xyXG4gICAgICAgIChnaWd5YS5nbG9iYWxbJ2FkZENTUyddIGFzIEZ1bmN0aW9uKShbXHJcbiAgICAgICAgICAgICcuZ2lnLWJhbGxvb25zICosIGRpdi5naWctYmFsbG9vbnMsIC5naWctYmFsbG9vbnMgc3BhbiwgLmdpZy1iYWxsb29ucyBhOmhvdmVyLCAuZ2lnLWJhbGxvb25zIGE6dmlzaXRlZCwgLmdpZy1iYWxsb29ucyBhOmxpbmssIC5naWctYmFsbG9vbnMgYTphY3RpdmV7JyxcclxuICAgICAgICAgICAgJ2JvcmRlcjpub25lOyBsaW5lLWhlaWdodDpub3JtYWw7cGFkZGluZzowcHg7bWFyZ2luOjBweDtjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmF1dG87ZmxvYXQ6bm9uZTstbW96LWJvcmRlci1yYWRpdXM6MDtib3JkZXItcmFkaXVzOjA7JyxcclxuICAgICAgICAgICAgJ2ZvbnQtZmFtaWx5OmFyaWFsO2ZvbnQtc2l6ZToxMHB4O2NvbG9yOiM3OTc5Nzk7YmFja2dyb3VuZDpub25lO3RleHQtYWxpZ246bGVmdH0nLFxyXG4gICAgICAgICAgICAnZGl2LmdpZy1iYWxsb29uLWZyYW1lIHsnLFxyXG4gICAgICAgICAgICAnem9vbToxO3BhZGRpbmc6MTVweCAxMHB4IDEwcHggMTBweDsgYm9yZGVyOjFweCBzb2xpZCAjYjRiNGI0OyBtaW4taGVpZ2h0OjgwcHg7IGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjsgei1pbmRleDonICtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5nZXROZXh0WkluZGV4KCkgK1xyXG4gICAgICAgICAgICAgICAgJzsnLFxyXG4gICAgICAgICAgICAnYm94LXNoYWRvdzowIDAgNXB4IFJHQkEoMCwwLDAsMC42KTstd2Via2l0LWJveC1zaGFkb3c6MCAwIDVweCBSR0JBKDAsMCwwLDAuNik7LW1vei1ib3gtc2hhZG93OjAgMCA1cHggUkdCQSgwLDAsMCwwLjYpO30nLFxyXG4gICAgICAgICAgICAnZGl2LmdpZy1iYWxsb29uLW51YiB7bGVmdDorMXB4OyBwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWltYWdlOnVybChcIicgK1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vbnViLnBuZycpICtcclxuICAgICAgICAgICAgICAgICdcIik7d2lkdGg6JyArXHJcbiAgICAgICAgICAgICAgICBudWJXICtcclxuICAgICAgICAgICAgICAgICdweDtoZWlnaHQ6JyArXHJcbiAgICAgICAgICAgICAgICBudWJIICtcclxuICAgICAgICAgICAgICAgICdweDsgei1pbmRleDonICtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5nZXROZXh0WkluZGV4KCkgK1xyXG4gICAgICAgICAgICAgICAgJyB9JyxcclxuICAgICAgICAgICAgJ2Rpdi5naWctYmFsbG9vbi1udWItcmlnaHQgeyBsZWZ0Oi0xcHg7IHBvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiJyArXHJcbiAgICAgICAgICAgICAgICBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9udWJfcmlnaHQucG5nJykgK1xyXG4gICAgICAgICAgICAgICAgJ1wiKTt3aWR0aDonICtcclxuICAgICAgICAgICAgICAgIG51YlcgK1xyXG4gICAgICAgICAgICAgICAgJ3B4O2hlaWdodDonICtcclxuICAgICAgICAgICAgICAgIG51YkggK1xyXG4gICAgICAgICAgICAgICAgJ3B4OyB6LWluZGV4OicgK1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKSArXHJcbiAgICAgICAgICAgICAgICAnIH0nLFxyXG4gICAgICAgICAgICAnZGl2LmdpZy1iYWxsb29uLW51Yi11cCB7IHRvcDorMXB4OyBwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWltYWdlOnVybChcIicgK1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vbnViX3VwLnBuZycpICtcclxuICAgICAgICAgICAgICAgICdcIik7d2lkdGg6JyArXHJcbiAgICAgICAgICAgICAgICBudWJIICtcclxuICAgICAgICAgICAgICAgICdweDtoZWlnaHQ6JyArXHJcbiAgICAgICAgICAgICAgICBudWJXICtcclxuICAgICAgICAgICAgICAgICdweDsgei1pbmRleDonICtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5nZXROZXh0WkluZGV4KCkgK1xyXG4gICAgICAgICAgICAgICAgJyB9JyxcclxuICAgICAgICAgICAgJ2Rpdi5naWctYmFsbG9vbi1udWItZG93biB7IHRvcDotMXB4OyBwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWltYWdlOnVybChcIicgK1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vbnViX2Rvd24ucG5nJykgK1xyXG4gICAgICAgICAgICAgICAgJ1wiKTt3aWR0aDonICtcclxuICAgICAgICAgICAgICAgIG51YkggK1xyXG4gICAgICAgICAgICAgICAgJ3B4O2hlaWdodDonICtcclxuICAgICAgICAgICAgICAgIG51YlcgK1xyXG4gICAgICAgICAgICAgICAgJ3B4OyB6LWluZGV4OicgK1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKSArXHJcbiAgICAgICAgICAgICAgICAnIH0nLFxyXG4gICAgICAgICAgICAnc3Bhbi5naWctYmFsbG9vbi1jbG9zZUltYWdlIHsgY3Vyc29yOnBvaW50ZXI7IGZsb2F0OnJpZ2h0O2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiJyArXHJcbiAgICAgICAgICAgICAgICBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9DbG9zZUJ1dHRvbi5wbmcnKSArXHJcbiAgICAgICAgICAgICAgICAnXCIpOyB3aWR0aDoxNHB4O2hlaWdodDoxNHB4OyBtYXJnaW46LTdweCAtMnB4IDAgMCAgfScsXHJcbiAgICAgICAgICAgICdkaXYuZ2lnLWJhbGxvb24tY2FwdGlvbiB7Zm9udC1mYW1pbHk6YXJpYWw7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6ICMwYjgxYzE7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O3BhZGRpbmctYm90dG9tOjJweDt9JyxcclxuICAgICAgICAgICAgJ3NwYW4uZ2lnLWJhbGxvb24tY2FwdGlvbi10ZXh0IHtmbG9hdDpsZWZ0fScsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFICYmICEoIWdpZ3lhLmxvY2FsSW5mby5xdWlya3NNb2RlICYmIGdpZ3lhLmxvY2FsSW5mby5pc0lFOSkpIHtcclxuICAgICAgICAgICAgKGdpZ3lhLmdsb2JhbFsnYWRkQ1NTJ10gYXMgRnVuY3Rpb24pKFtcclxuICAgICAgICAgICAgICAgICdkaXYuZ2lnLWJhbGxvb24tZnJhbWUgeycsXHJcbiAgICAgICAgICAgICAgICAnLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuU2hhZG93KFN0cmVuZ3RoPTQsIERpcmVjdGlvbj0xMzUsIENvbG9yPVxcJyNCNEI0QjRcXCcpO1wiOycsXHJcbiAgICAgICAgICAgICAgICBcImZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LlNoYWRvdyhTdHJlbmd0aD00LCBEaXJlY3Rpb249MTM1LCBDb2xvcj0nI0I0QjRCNCcpO31cIixcclxuICAgICAgICAgICAgICAgICd9JyxcclxuICAgICAgICAgICAgICAgICdkaXYuZ2lnLWJhbGxvb24tbnViLXJpZ2h0IHsgbGVmdDotNXB4O30nLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2lneWEuZ2xvYmFsWydhZGRlZEJhbGxvb25DU1MnXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgZnJhbWVTdHlsZSA9ICcnO1xyXG4gICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5xdWlya3NNb2RlKSB7XHJcbiAgICAgICAgdmFyIGJvcmRlcnNBbmRQYWRkaW5ncyA9IGdldENsYXNzQm9yZGVyc0FuZFBhZGRpbmdzKCdnaWctYmFsbG9vbi1mcmFtZScpO1xyXG4gICAgICAgIGlmICh3KSB3ID0gdyArIGJvcmRlcnNBbmRQYWRkaW5ncy53O1xyXG4gICAgICAgIGlmIChoKSBoID0gaCArIGJvcmRlcnNBbmRQYWRkaW5ncy5oO1xyXG4gICAgfVxyXG4gICAgaWYgKHcpIGZyYW1lU3R5bGUgKz0gJ3dpZHRoOiAnICsgdyArICdweDsnO1xyXG4gICAgaWYgKGgpIGZyYW1lU3R5bGUgKz0gJ2hlaWdodDogJyArIGggKyAncHg7JztcclxuICAgIHZhciBudWJTdHlsZSA9ICcnO1xyXG4gICAgaWYgKG51YlkpIHtcclxuICAgICAgICBpZiAobnViUG9zaXRpb24gPT09ICdsZWZ0JyB8fCBudWJQb3NpdGlvbiA9PT0gJ3JpZ2h0JykgbnViU3R5bGUgKz0gJ3RvcDogJyArIG51YlkgKyAncHg7JztcclxuICAgICAgICAvLyAoKG51YlBvc2l0aW9uID09PSAndXAnKSB8fCAobnViUG9zaXRpb24gPT09ICdkb3duJykpXHJcbiAgICAgICAgZWxzZSBudWJTdHlsZSArPSAnbGVmdDogJyArIG51YlkgKyAncHg7JztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpZiAoY2FwdGlvblRleHQpIHtcclxuICAgICAgICBpbm5lckhUTUwgKz0gJzxkaXYgY2xhc3M9XCJnaWctYmFsbG9vbi1jYXB0aW9uXCI+PHNwYW4gY2xhc3M9XCJnaWctYmFsbG9vbi1jYXB0aW9uLXRleHRcIiBzdHlsZT1cIndpZHRoOicgKyAodyAtIDIwKSArICdweFwiPicgKyBjYXB0aW9uVGV4dCArICc8L3NwYW4+JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5uZXJIVE1MICs9ICc8ZGl2IGNsYXNzPVwiZ2lnLWJhbGxvb24tY2FwdGlvblwiIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTpub25lXCI+JztcclxuICAgIH1cclxuICAgIGlmICghaGlkZUNsb3NlICYmIHNPbkNsb3NlKSB7XHJcbiAgICAgICAgaW5uZXJIVE1MICs9XHJcbiAgICAgICAgICAgICc8c3BhbiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJnaWctYmFsbG9vbi1jbG9zZUltYWdlXCIgb25jbGljaz1cIicgK1xyXG4gICAgICAgICAgICBzT25DbG9zZSArXHJcbiAgICAgICAgICAgICdcIiBvbmtleWRvd249XCJpZigoZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSkgPT0gMTMpICcgK1xyXG4gICAgICAgICAgICBzT25DbG9zZSArXHJcbiAgICAgICAgICAgICdcIj48L3NwYW4+JztcclxuICAgIH1cclxuICAgIGlubmVySFRNTCArPVxyXG4gICAgICAgICc8ZGl2IHN0eWxlPVwiY2xlYXI6Ym90aDtoZWlnaHQ6MDt3aWR0aDowO2ZvbnQtc2l6ZToxcHg7XCI+PCEtLSBlbXB0eSBkaXZzPTEwMCUgaGVpZ2h0IElFIC0tPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJnaWctYmFsbG9vbi1ib2R5XCI+JyArXHJcbiAgICAgICAgYm9keSArXHJcbiAgICAgICAgJzwvZGl2Pic7XHJcbiAgICB2YXIgcztcclxuICAgIGlmICghbnViWSkge1xyXG4gICAgICAgIHMgPSAnPGRpdiBjbGFzcz1cImdpZy1iYWxsb29uIGdpZy1iYWxsb29uLWZyYW1lXCIgc3R5bGU9XCInICsgZnJhbWVTdHlsZSArICdcIj4nICsgaW5uZXJIVE1MICsgJzwvZGl2Pic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHMgPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBjbGFzcz1cImdpZy1iYWxsb29uXCI+PHRyPic7XHJcbiAgICAgICAgaWYgKG51YlBvc2l0aW9uID09PSAndXAnKSB7XHJcbiAgICAgICAgICAgIHMgKz0gJzx0ZCBzdHlsZT1cIlwiPjxkaXYgY2xhc3M9XCJnaWctYmFsbG9vbi1udWItdXBcIiBzdHlsZT1cIicgKyBudWJTdHlsZSArICdcIj48L2Rpdj48L3RkPjwvdHI+PHRyPic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudWJQb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBvdGhlciB2YWx1ZXNcclxuICAgICAgICAgICAgcyArPSAnPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246dG9wXCI+PGRpdiBjbGFzcz1cImdpZy1iYWxsb29uLW51YlwiIHN0eWxlPVwiJyArIG51YlN0eWxlICsgJ1wiPjwvZGl2PjwvdGQ+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcyArPSAnPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246dG9wXCI+PGRpdiBpZD1cIicgKyBmcmFtZUlEICsgJ1wiIGNsYXNzPVwiZ2lnLWJhbGxvb24tZnJhbWVcIiBzdHlsZT1cIicgKyBmcmFtZVN0eWxlICsgJ1wiPicgKyBpbm5lckhUTUwgKyAnPC9kaXY+PC90ZD4nO1xyXG4gICAgICAgIGlmIChudWJQb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICBzICs9ICc8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIj48ZGl2IGNsYXNzPVwiZ2lnLWJhbGxvb24tbnViLXJpZ2h0XCIgc3R5bGU9XCInICsgbnViU3R5bGUgKyAnXCI+PC9kaXY+PC90ZD4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobnViUG9zaXRpb24gPT09ICdkb3duJykge1xyXG4gICAgICAgICAgICBzICs9ICc8L3RyPjx0cj48dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIj48ZGl2IGNsYXNzPVwiZ2lnLWJhbGxvb24tbnViLWRvd25cIiBzdHlsZT1cIicgKyBudWJTdHlsZSArICdcIj48L2Rpdj48L3RkPic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHMgKz0gJzwvdHI+PC90YWJsZT4nO1xyXG4gICAgICAgIHMgKz0gJzxkaXYgc3R5bGU9XCJjbGVhcjpib3RoO2hlaWdodDowO3dpZHRoOjA7Zm9udC1zaXplOjFweDtcIj48IS0tIGVtcHR5IGRpdnM9MTAwJSBoZWlnaHQgSUUgLS0+PC9kaXY+JztcclxuICAgIH1cclxuICAgIHJldHVybiBzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHTUJhbGxvb24oXHJcbiAgICBib2R5LFxyXG4gICAgY2FwdGlvblRleHQ6IHN0cmluZyxcclxuICAgIHc6IG51bWJlcixcclxuICAgIGg6IG51bWJlcixcclxuICAgIG51Ylk6IG51bWJlcixcclxuICAgIG51YlBvc2l0aW9uOiBzdHJpbmcsXHJcbiAgICBoaWRlQ2xvc2U6IGJvb2xlYW4sXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgZG9udEhpZGVPbkNsaWNrOiBib29sZWFuLFxyXG4gICAgYmFsbG9vbkNsYXNzOiBzdHJpbmcsXHJcbik6IEhUTUxFbGVtZW50IHtcclxuICAgIGJhbGxvb25DbGFzcyA9IGJhbGxvb25DbGFzcyA/ICdnaWctYmFsbG9vbiAnICsgYmFsbG9vbkNsYXNzIDogJ2dpZy1iYWxsb29uJztcclxuICAgIHJlbW92ZUdNQmFsbG9vbigpO1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIGJhbGxvb25JRCA9ICdnaWdfZ21CYWxsb29uXycgKyBub3c7XHJcbiAgICBpZiAoaWQpIGJhbGxvb25JRCA9IGlkO1xyXG4gICAgdmFyIGZyYW1lSUQgPSBiYWxsb29uSUQgKyAnX2ZyYW1lJztcclxuICAgIHZhciBiYWxsb29uSFRNTCA9IGdldEJhbGxvb25IVE1MKGJvZHksIGNhcHRpb25UZXh0LCB3LCBoLCBudWJZLCBudWJQb3NpdGlvbiwgaGlkZUNsb3NlLCAnZ2lneWEuZ2xvYmFsLnJlbW92ZUdNQmFsbG9vbigpJywgZnJhbWVJRCk7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gYmFsbG9vbkNsYXNzO1xyXG4gICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGRpdi5zdHlsZS56SW5kZXggPSBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpLnRvU3RyaW5nKCk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gYmFsbG9vbkhUTUw7XHJcbiAgICBkaXYuaWQgPSBiYWxsb29uSUQ7XHJcblxyXG4gICAgLy8gV2hlbiB0aGUgYmFsbG9vbiBpcyBzaG93biwgcmVhZCBpbW1lZGlhdGVseS4gVGhpcyBpcyBzZXQgdG8gXCJhc3NlcnRpdmVcIiBpbnN0ZWFkIG9mIFwicG9saXRlXCIgYmVjYXVzZSBpbiBhbGwgY2FzZXMgd2hlcmUgdGhpcyBpcyB1c2VkLFxyXG4gICAgLy8gdGhlIHRleHQgdGhhdCB0aGUgdXNlciBpcyBmb2N1c2luZyB3aGVuIHRoZSBiYWxsb29uIGlzIHNob3duIGRvZXMgbm90IG5lZWQgdG8gYmUgcmVhZC4gV2UgbmVlZCB0aGUgYmFsbG9vbiB0byBiZSByZWFkIGltbWVkaWF0ZWx5IGZvciBnb29kIFVYLlxyXG4gICAgLy8gVGhlIGFzc2VydGl2ZSBzZXR0aW5nIG1lYW5zIHRoYXQgdGhlIHJlZHVuZGFudCB0ZXh0IGlzIG5vdCByZWFkIHdoZW4gdGhlIHVzZXIgZm9jdXNlcyBhIEdNIGVsZW1lbnQuXHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2FsZXJ0Jyk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAnYXNzZXJ0aXZlJyk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWF0b21pYycsICd0cnVlJyk7XHJcblxyXG4gICAgZmFkZUluKGRpdik7XHJcbiAgICBnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGRpdik7XHJcbiAgICBnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddID0gZGl2O1xyXG5cclxuICAgIGlmICghZG9udEhpZGVPbkNsaWNrKSB7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRPbkRvY0NsaWNrT3JFc2NhcGUoZGl2KTtcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVHTUJhbGxvb24oZT86IEV2ZW50KTogdm9pZCB7XHJcbiAgICB2YXIgYTtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgICAgYSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmICghYSkgYSA9IGUuc3JjRWxlbWVudDtcclxuICAgICAgICB3aGlsZSAoYSAhPSBudWxsICYmIGEub2Zmc2V0UGFyZW50ICYmIGEuaWQuaW5kZXhPZihnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddLmlkKSA9PSAtMSkge1xyXG4gICAgICAgICAgICBhID0gYVsnb2Zmc2V0UGFyZW50J107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFhIHx8IGEuaWQuaW5kZXhPZihnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddLmlkKSA9PSAtMSkge1xyXG4gICAgICAgIC8vdG8gbWFrZSBzdXJlIHRoaXMgd2Fzbid0IHRyaWdnZXJlZCBieSBjbGljayBpbnNpZGVcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZW1vdmVJZnJhbWVTaGltKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdpZ3lhLmdsb2JhbFsnZGl2R01CYWxsb29uJ10uaWQgKyAnX2ZyYW1lJykpO1xyXG4gICAgICAgICAgICBnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ2lneWEuZ2xvYmFsWydkaXZHTUJhbGxvb24nXSk7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudFsnZGV0YWNoRXZlbnQnXSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRbJ2RldGFjaEV2ZW50J10oJ29uY2xpY2snLCByZW1vdmVHTUJhbGxvb24pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlR01CYWxsb29uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChleCkge31cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcHV0R01CYWxsb29uTmV4dFRvKFxyXG4gICAgZWw6IEhUTUxFbGVtZW50LFxyXG4gICAgYm9keSxcclxuICAgIGNhcHRpb246IHN0cmluZyxcclxuICAgIHc6IG51bWJlcixcclxuICAgIGg6IG51bWJlcixcclxuICAgIGhpZGVDbG9zZT86IGJvb2xlYW4sXHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIGRvbnRIaWRlT25DbGljaz86IGJvb2xlYW4sXHJcbiAgICBwcmVmZXJyZWRPcmllbnRhdGlvbnMgPSBbJ2xlZnQnLCAncmlnaHQnLCAndXAnLCAnZG93biddLFxyXG4gICAgYmFsbG9vbkNsYXNzID0gJycsXHJcbik6IHZvaWQge1xyXG4gICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgYm9keTogYm9keSxcclxuICAgICAgICBjYXB0aW9uOiBjYXB0aW9uLFxyXG4gICAgICAgIHc6IHcsXHJcbiAgICAgICAgaDogaCxcclxuICAgICAgICBoaWRlQ2xvc2U6IGhpZGVDbG9zZSxcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgZG9udEhpZGVPbkNsaWNrOiBkb250SGlkZU9uQ2xpY2ssXHJcbiAgICAgICAgYmFsbG9vbkNsYXNzOiBiYWxsb29uQ2xhc3MsXHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZmVycmVkT3JpZW50YXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25HTUJhbGxvb25OZXh0VG8oZWwsIHByZWZlcnJlZE9yaWVudGF0aW9uc1tpXSwgb3B0aW9ucykpIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbkdNQmFsbG9vbk5leHRUbyhlbDogSFRNTEVsZW1lbnQsIG9yaWVudGF0aW9uOiBzdHJpbmcsIG9wdGlvbnM6IGFueSkge1xyXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnbGVmdCcgfHwgb3JpZW50YXRpb24gPT09ICdyaWdodCcpXHJcbiAgICAgICAgY3JlYXRlR01CYWxsb29uKFxyXG4gICAgICAgICAgICBvcHRpb25zLmJvZHksXHJcbiAgICAgICAgICAgIG9wdGlvbnMuY2FwdGlvbixcclxuICAgICAgICAgICAgb3B0aW9ucy53LFxyXG4gICAgICAgICAgICBvcHRpb25zLmgsXHJcbiAgICAgICAgICAgIDQ3LFxyXG4gICAgICAgICAgICAnbGVmdCcsXHJcbiAgICAgICAgICAgIG9wdGlvbnMuaGlkZUNsb3NlLFxyXG4gICAgICAgICAgICBvcHRpb25zLmlkLFxyXG4gICAgICAgICAgICBvcHRpb25zLmRvbnRIaWRlT25DbGljayxcclxuICAgICAgICAgICAgb3B0aW9ucy5iYWxsb29uQ2xhc3MsXHJcbiAgICAgICAgKTtcclxuICAgIC8vIHVwIG9yIGRvd24gb3JpZW50YXRpb25zXHJcbiAgICBlbHNlXHJcbiAgICAgICAgY3JlYXRlR01CYWxsb29uKFxyXG4gICAgICAgICAgICBvcHRpb25zLmJvZHksXHJcbiAgICAgICAgICAgIG9wdGlvbnMuY2FwdGlvbixcclxuICAgICAgICAgICAgb3B0aW9ucy53LFxyXG4gICAgICAgICAgICBvcHRpb25zLmgsXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAnZG93bicsXHJcbiAgICAgICAgICAgIG9wdGlvbnMuaGlkZUNsb3NlLFxyXG4gICAgICAgICAgICBvcHRpb25zLmlkLFxyXG4gICAgICAgICAgICBvcHRpb25zLmRvbnRIaWRlT25DbGljayxcclxuICAgICAgICAgICAgb3B0aW9ucy5iYWxsb29uQ2xhc3MsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB2YXIgb2Zmc2V0V2lkdGggPSBnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddLm9mZnNldFdpZHRoO1xyXG4gICAgdmFyIG9mZnNldEhlaWdodCA9IGdpZ3lhLmdsb2JhbFsnZGl2R01CYWxsb29uJ10ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdmFyIHBvcyA9IF9HZXRFbGVtZW50UG9zKGVsKTtcclxuICAgIHZhciBsZWZ0O1xyXG4gICAgdmFyIHRvcDtcclxuXHJcbiAgICAvL3ZhciBkc3QgPSBlbC5zdHlsZTtcclxuXHJcbiAgICB2YXIgZGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICB2YXIgZGIgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIHZhciBjbGllbnRIZWlnaHQgPSBkZS5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAoY2xpZW50SGVpZ2h0ID09IDApIGNsaWVudEhlaWdodCA9IGRiLmNsaWVudEhlaWdodDtcclxuICAgIHZhciBjbGllbnRXaWR0aCA9IGRlLmNsaWVudFdpZHRoO1xyXG4gICAgaWYgKGNsaWVudFdpZHRoID09IDApIGNsaWVudFdpZHRoID0gZGIuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgIGNsaWVudEhlaWdodCA9IGRiLnNjcm9sbEhlaWdodCAmJiBkYi5zY3JvbGxIZWlnaHQgPCB3aW5kb3cuaW5uZXJIZWlnaHQgPyBkYi5zY3JvbGxIZWlnaHQgOiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgY2xpZW50V2lkdGggPSBkYi5zY3JvbGxXaWR0aCAmJiBkYi5zY3JvbGxXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoID8gZGIuc2Nyb2xsV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2NybCA9IGdpZ3lhLnV0aWxzLnZpZXdwb3J0LmdldFNjcm9sbCgpO1xyXG4gICAgdmFyIHZwdCA9IHNjcmwudG9wO1xyXG4gICAgLy92YXIgdnBsID0gc2NybC5sZWZ0O1xyXG4gICAgdmFyIGJvdHRvbVJpZ2h0VG9wID0gdnB0ICsgY2xpZW50SGVpZ2h0O1xyXG4gICAgLy92YXIgYm90dG9tUmlnaHRMZWZ0ID0gdnBsICsgY2xpZW50V2lkdGg7XHJcblxyXG4gICAgdmFyIGFycm93RGlyZWN0aW9uO1xyXG4gICAgdmFyIGFycm93T2Zmc2V0O1xyXG5cclxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2xlZnQnIHx8IG9yaWVudGF0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgYXJyb3dPZmZzZXQgPSA0NztcclxuXHJcbiAgICAgICAgdG9wID0gcG9zLnRvcCArIGVsLm9mZnNldEhlaWdodCAvIDIgLSA0NyAtIDI1IC8gMjtcclxuICAgICAgICBpZiAodG9wICsgb2Zmc2V0SGVpZ2h0ID4gYm90dG9tUmlnaHRUb3ApIHtcclxuICAgICAgICAgICAgdG9wID0gYm90dG9tUmlnaHRUb3AgLSBvZmZzZXRIZWlnaHQgLSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsZWZ0V2l0aExlZnRPcmllbnRhdGlvbiA9IHBvcy5sZWZ0IC0gb2Zmc2V0V2lkdGggLSA1O1xyXG4gICAgICAgIHZhciBsZWZ0V2l0aFJpZ2h0T3JpZW50YXRpb24gPSBwb3MubGVmdCArIGVsLm9mZnNldFdpZHRoICsgNTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGVyZSdzIGVub3VnaCBzcGFjZSBvbiB0aGUgbGVmdFxyXG4gICAgICAgICAgICBpZiAobGVmdFdpdGhMZWZ0T3JpZW50YXRpb24gPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IGxlZnRXaXRoTGVmdE9yaWVudGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgYXJyb3dEaXJlY3Rpb24gPSAncmlnaHQnO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5iYWxsb29uQ2xhc3MgKz0gJyBnaWctYmFsbG9vbi1sZWZ0JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG5vdCBlbm91Z2ggc3BhY2UgZm9yIGxlZnQgb3JpZW50YXRpb25cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbGllbnRXaWR0aCAtIGxlZnRXaXRoUmlnaHRPcmllbnRhdGlvbiAtIG9mZnNldFdpZHRoID4gMTApIHtcclxuICAgICAgICAgICAgLy8gcmlnaHQgb3JpZW50YXRpb24gKGJ1ZzogaHR0cHM6Ly9naWd5YS50cG9uZGVtYW5kLmNvbS9lbnRpdHkvNDAwMDEpXHJcbiAgICAgICAgICAgIGxlZnQgPSBsZWZ0V2l0aFJpZ2h0T3JpZW50YXRpb247XHJcbiAgICAgICAgICAgIGFycm93RGlyZWN0aW9uID0gJ2xlZnQnO1xyXG4gICAgICAgICAgICBvcHRpb25zLmJhbGxvb25DbGFzcyArPSAnIGdpZy1iYWxsb29uLXJpZ2h0JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndXAnIHx8IG9yaWVudGF0aW9uID09PSAnZG93bicpIHtcclxuICAgICAgICBhcnJvd09mZnNldCA9IDEwO1xyXG4gICAgICAgIGxlZnQgPSBwb3MubGVmdDtcclxuXHJcbiAgICAgICAgdmFyIHRvcFdpdGhVcE9yaWVudGF0aW9uID0gcG9zLnRvcCAtIG9mZnNldEhlaWdodCAtIDEwO1xyXG4gICAgICAgIHZhciB0b3BXaXRoRG93bk9yaWVudGF0aW9uID0gcG9zLnRvcCArIGVsLm9mZnNldEhlaWdodCArIDU7XHJcblxyXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3VwJykge1xyXG4gICAgICAgICAgICBpZiAodG9wV2l0aFVwT3JpZW50YXRpb24gPiA1KSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgPSB0b3BXaXRoVXBPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgICAgIGFycm93RGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5iYWxsb29uQ2xhc3MgKz0gJyBnaWctYmFsbG9vbi11cCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRvd24gb3JpZW50YXRpb24gLSBhc3N1bWUgdGhlcmUgaXMgYWx3YXlzIGVub3VnaCBzcGFjZSBkb3duXHJcbiAgICAgICAgICAgIHRvcCA9IHRvcFdpdGhEb3duT3JpZW50YXRpb247XHJcbiAgICAgICAgICAgIGFycm93RGlyZWN0aW9uID0gJ3VwJztcclxuICAgICAgICAgICAgb3B0aW9ucy5iYWxsb29uQ2xhc3MgKz0gJyBnaWctYmFsbG9vbi1kb3duJztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBiYWxsb29uRGl2ID0gY3JlYXRlR01CYWxsb29uKFxyXG4gICAgICAgIG9wdGlvbnMuYm9keSxcclxuICAgICAgICBvcHRpb25zLmNhcHRpb24sXHJcbiAgICAgICAgb3B0aW9ucy53LFxyXG4gICAgICAgIG9wdGlvbnMuaCxcclxuICAgICAgICBhcnJvd09mZnNldCxcclxuICAgICAgICBhcnJvd0RpcmVjdGlvbixcclxuICAgICAgICBvcHRpb25zLmhpZGVDbG9zZSxcclxuICAgICAgICBvcHRpb25zLmlkLFxyXG4gICAgICAgIG9wdGlvbnMuZG9udEhpZGVPbkNsaWNrLFxyXG4gICAgICAgIG9wdGlvbnMuYmFsbG9vbkNsYXNzLFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGVmdCA8IDEwKSBsZWZ0ID0gMTA7XHJcbiAgICBpZiAodG9wIDwgMTApIHRvcCA9IDEwO1xyXG4gICAgZ2lneWEuZ2xvYmFsWydkaXZHTUJhbGxvb24nXS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICBnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUUpIHtcclxuICAgICAgICB2YXIgZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddLmlkICsgJ19mcmFtZScpO1xyXG4gICAgICAgIGlmIChmcmFtZSkgYWRkSWZyYW1lU2hpbShmcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhbGxvb25EaXY7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvRWxlbWVudChlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIHZhciBwb3MgPSBfR2V0RWxlbWVudFBvcyhlbCk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHBvcy5sZWZ0LCBwb3MudG9wKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhhckltYWdlczogc3RyaW5nW10sIGZuQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICB2YXIgYXJJbWFnZU9iamVjdHMgPSBbXTtcclxuICAgIHZhciBsb2FkZWQgPSAwO1xyXG4gICAgdmFyIGZuY0ltZ09ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxvYWRlZCsrO1xyXG4gICAgICAgIGlmIChsb2FkZWQgPT0gYXJJbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZuQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhckltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhckltYWdlc1tpXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZuY0ltZ09ubG9hZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZuY0ltZ09ubG9hZDtcclxuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSBmbmNJbWdPbmxvYWQ7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBhckltYWdlc1tpXTtcclxuICAgICAgICAgICAgYXJJbWFnZU9iamVjdHMucHVzaChpbWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFbGxpcHNpcyh0ZXh0OiBzdHJpbmcsIG1heFJlYWxDaGFyczogbnVtYmVyKSB7XHJcbiAgICB2YXIgcGZ4ID0gJyc7XHJcbiAgICB2YXIgdGFnc3RhY2sgPSBbXTtcclxuICAgIHZhciByZVRhZyA9IC9cXDwoXFwvKT8oW14gXFwvPl0rKVsgXT9bXj5dKihcXC8pP1xcPi9pO1xyXG4gICAgdmFyIHJlYWxDaGFycyA9IDA7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aCAmJiAocmVhbENoYXJzIDwgbWF4UmVhbENoYXJzIHx8IG1heFJlYWxDaGFycyA9PSAwKTsgKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGV4dC5zdWJzdHIoaSwgMSk7XHJcbiAgICAgICAgaWYgKGNoID09ICc8Jykge1xyXG4gICAgICAgICAgICB2YXIgaWR4Q2xvc2VUYWcgPSB0ZXh0LmluZGV4T2YoJz4nLCBpKTtcclxuICAgICAgICAgICAgdmFyIHRhZyA9IHRleHQuc3Vic3RyaW5nKGksIGlkeENsb3NlVGFnICsgMSk7XHJcbiAgICAgICAgICAgIHJlVGFnLmxhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gcmVUYWcuZXhlYyh0YWcpOyAvLyAxPS8/IDI9dGFnbmFtZSAzPXRyYWlsaW5nIC8gMD1hbGxcclxuICAgICAgICAgICAgLyppZiAobWF0Y2hlcyA9PSBudWxsKSB7XHJcblx0XHRcdFx0Ly9hbGVydCh0YWcgKyAnXFxuIElzIE1BTEZPUk1FRCcpO1xyXG5cdFx0XHRcdH0qL1xyXG4gICAgICAgICAgICB2YXIgdGFnbmFtZSA9IG1hdGNoZXNbMl0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXNbMV0gPT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICAvL2Nsb3NpbmcgdGFnXHJcbiAgICAgICAgICAgICAgICBpZiAodGFnc3RhY2subGVuZ3RoID4gMCAmJiB0YWdzdGFja1t0YWdzdGFjay5sZW5ndGggLSAxXS50YWduYW1lID09IHRhZ25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vbmV3IHRhZ1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNbM10gPT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ub3RoaW5nIHRvIGRvIChub3RoaW5nIHRvIHB1c2ggb250byB0aGUgc3RhY2spLCByZXN0IGlzIGNvbW1vblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xBbGwgPSAnPC8nICsgbWF0Y2hlc1syXSArICc+JztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFnc3RhY2subGVuZ3RoID4gMCkgY2xBbGwgKz0gdGFnc3RhY2tbdGFnc3RhY2subGVuZ3RoIC0gMV0uY2w7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnc3RhY2sucHVzaCh7IHRhZ25hbWU6IG1hdGNoZXNbMl0sIGNsOiBjbEFsbCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwZnggKz0gbWF0Y2hlc1swXTtcclxuICAgICAgICAgICAgaSArPSBtYXRjaGVzWzBdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PSAnJicpIHtcclxuICAgICAgICAgICAgdmFyIGlkeENsb3NlRW50aXR5ID0gdGV4dC5pbmRleE9mKCc7JywgaSk7XHJcbiAgICAgICAgICAgIGlmIChpZHhDbG9zZUVudGl0eSAtIGkgPiA4KSB7XHJcbiAgICAgICAgICAgICAgICBwZnggKz0gJyYnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGZ4ICs9IHRleHQuc3Vic3RyaW5nKGksIGlkeENsb3NlRW50aXR5ICsgMSk7XHJcbiAgICAgICAgICAgICAgICBpID0gaWR4Q2xvc2VFbnRpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbENoYXJzKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGZ4ICs9IGNoO1xyXG4gICAgICAgICAgICByZWFsQ2hhcnMrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlYWxDaGFycyA8IG1heFJlYWxDaGFycykge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGZ4ICsgJyYjMTMzOycgKyAodGFnc3RhY2subGVuZ3RoID4gMCA/IHRhZ3N0YWNrW3RhZ3N0YWNrLmxlbmd0aCAtIDFdLmNsIDogJycpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQaG90b1VSTCh1cmw6IHN0cmluZywgZGVmYXVsdFVSTD86IHN0cmluZykge1xyXG4gICAgLy8gVXNlIGRlZmF1bHQgVVJMIGlmIG5vIFVSTCBwcm92aWRlZC5cclxuICAgIGlmIChkZWZhdWx0VVJMICYmICF1cmwpIHtcclxuICAgICAgICB1cmwgPSBkZWZhdWx0VVJMO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFib3J0IGlmIG5vIFVSTC5cclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSBVUkwgdXNpbmcgQSBlbGVtZW50LlxyXG4gICAgLy8gU2VlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qbG9uZy8yNDI4NTYxXHJcbiAgICB2YXIgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgcGFyc2VyLmhyZWYgPSB1cmw7XHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIGluc2VjdXJlIFVSTCBvbiBzZWN1cmUgcGFnZS5cclxuICAgIGlmIChwYXJzZXIucHJvdG9jb2wgPT09ICdodHRwOicgJiYgZ2lneWEubG9jYWxJbmZvLnByb3RvY29sID09PSAnaHR0cHMnKSB7XHJcbiAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLmFycmF5LmluZGV4T2YoZ2lneWEuXy5DRE5fSE9TVFMuaHR0cCwgcGFyc2VyLmhvc3QpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBHaWd5YSBDRE4gVVJMIG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBIVFRQUy5cclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UocGFyc2VyLnBhdGhuYW1lICsgcGFyc2VyLnNlYXJjaCArIHBhcnNlci5oYXNoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBQaG90byBVUkwgbmVlZHMgdG8gYmUgcHJveGllZCB0aHJvdWdoIHNlY3VyZSBzZXJ2ZXIuXHJcbiAgICAgICAgICAgIHJldHVybiBnaWd5YS5fLmdldENkblJlc291cmNlKCcvcHJveHkvcGhvdG9zLmFzaHg/dT0nICsgZ2lneWEudXRpbHMuVVJMLlVSTEVuY29kZSh1cmwpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVybDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd2JyKHM6IHN0cmluZywgbjogbnVtYmVyKSB7XHJcbiAgICBzID0gcy5yZXBsYWNlKC9cXG4vZywgJ1xcbiAnKTtcclxuICAgIHZhciBhcldvcmRzID0gcy5zcGxpdCgnICcpO1xyXG4gICAgdmFyIGNoSHlwaGVuID0gJyYjMTczOyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyV29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJXb3Jkc1tpXS5sZW5ndGggPiBuKSB7XHJcbiAgICAgICAgICAgIHZhciBjaEh5cGhlbkN1cnJlbnQgPSBjaEh5cGhlbjtcclxuICAgICAgICAgICAgdmFyIGFyV29yZCA9IGFyV29yZHNbaV0uc3BsaXQoJycpO1xyXG4gICAgICAgICAgICB2YXIgc3RvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgc3RvcEVuZENoYXI7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50TiA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IGFyV29yZC5sZW5ndGg7IHUgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdG9wKSBjdXJyZW50TisrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnROID09IG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBhcldvcmQuc3BsaWNlKHUsIDAsIGNoSHlwaGVuQ3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE4gPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhcldvcmRbdV0gPT0gJyYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcEVuZENoYXIgPSAnOyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyV29yZFt1XSA9PSAnPCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wRW5kQ2hhciA9ICc+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdG9wICYmIGFyV29yZFt1XSA9PSBzdG9wRW5kQ2hhcikgc3RvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyV29yZHNbaV0gPSBhcldvcmQuam9pbignJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyV29yZHMuam9pbignICcpLnJlcGxhY2UoL1xcbiAvZywgJ1xcbicpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3MoZWw6IEhUTUxFbGVtZW50KTogYW55IHtcclxuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIHZhciBpc09wZXJhID0gdWEuaW5kZXhPZignb3BlcmEnKSAhPSAtMTtcclxuICAgIHZhciBpc0lFID0gdWEuaW5kZXhPZignbXNpZScpICE9IC0xICYmICFpc09wZXJhOyAvLyBub3Qgb3BlcmEgc3Bvb2ZcclxuICAgIGlmIChlbC5wYXJlbnROb2RlID09PSBudWxsIHx8IGVsLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHBhcmVudCA9IG51bGw7XHJcbiAgICB2YXIgcG9zID0gW107XHJcbiAgICB2YXIgYm94O1xyXG5cclxuICAgIGlmIChlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcclxuICAgICAgICAvL0lFXHJcbiAgICAgICAgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKTtcclxuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQpO1xyXG4gICAgICAgIHJldHVybiB7IHg6IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCwgeTogYm94LnRvcCArIHNjcm9sbFRvcCB9O1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudFsnZ2V0Qm94T2JqZWN0Rm9yJ10pIHtcclxuICAgICAgICAvLyBnZWNrb1xyXG4gICAgICAgIGJveCA9IGRvY3VtZW50WydnZXRCb3hPYmplY3RGb3InXShlbCk7XHJcbiAgICAgICAgdmFyIGJvcmRlckxlZnQgPSBlbC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGggPyBwYXJzZUludChlbC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGgpIDogMDtcclxuICAgICAgICB2YXIgYm9yZGVyVG9wID0gZWwuc3R5bGUuYm9yZGVyVG9wV2lkdGggPyBwYXJzZUludChlbC5zdHlsZS5ib3JkZXJUb3BXaWR0aCkgOiAwO1xyXG4gICAgICAgIHBvcyA9IFtib3gueCAtIGJvcmRlckxlZnQsIGJveC55IC0gYm9yZGVyVG9wXTtcclxuICAgIH0gLy8gc2FmYXJpICYgb3BlcmFcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHBvcyA9IFtlbC5vZmZzZXRMZWZ0LCBlbC5vZmZzZXRUb3BdO1xyXG4gICAgICAgIHBhcmVudCA9IGVsLm9mZnNldFBhcmVudDtcclxuICAgICAgICBpZiAocGFyZW50ICE9IGVsKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHBvc1swXSArPSBwYXJlbnQub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBwYXJlbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50WydvZmZzZXRQYXJlbnQnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodWEuaW5kZXhPZignb3BlcmEnKSAhPSAtMSB8fCAodWEuaW5kZXhPZignc2FmYXJpJykgIT0gLTEgJiYgZWwuc3R5bGUucG9zaXRpb24gPT0gJ2Fic29sdXRlJykpIHtcclxuICAgICAgICAgICAgcG9zWzBdIC09IGRvY3VtZW50LmJvZHkub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgcG9zWzFdIC09IGRvY3VtZW50LmJvZHkub2Zmc2V0VG9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChlbC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50Wyd0YWdOYW1lJ10gIT0gJ0JPRFknICYmIHBhcmVudFsndGFnTmFtZSddICE9ICdIVE1MJykge1xyXG4gICAgICAgIC8vIGFjY291bnQgZm9yIGFueSBzY3JvbGxlZCBhbmNlc3RvcnNcclxuICAgICAgICBwb3NbMF0gLT0gcGFyZW50WydzY3JvbGxMZWZ0J107XHJcbiAgICAgICAgcG9zWzFdIC09IHBhcmVudFsnc2Nyb2xsVG9wJ107XHJcbiAgICAgICAgaWYgKHBhcmVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgeDogcG9zWzBdLCB5OiBwb3NbMV0gfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX0dldEVsZW1lbnRQb3Mob2JqOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdmFyIHBvcyA9IGdldFBvcyhvYmopO1xyXG4gICAgcmV0dXJuIHsgbGVmdDogcG9zLngsIHRvcDogcG9zLnkgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRDc3MsIGZpeENzcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQ3NzVXRpbHMnO1xyXG5cclxuZ2lneWEudXRpbHMuZnVuY3Rpb25zLmNyZWF0ZUFsaWFzKCdnaWd5YS5nbG9iYWwuYWRkQ1NTJywgYWRkQ3NzKTtcclxuZ2lneWEudXRpbHMuZnVuY3Rpb25zLmNyZWF0ZUFsaWFzKCdnaWd5YS5wbHVnaW5VdGlscy5jc3MuZml4Q3NzJywgZml4Q3NzKTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZpeENzcyhjc3M6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU3IHx8IChnaWd5YS5sb2NhbEluZm8uaXNJRSAmJiBnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSkpIHtcclxuICAgICAgICBjc3MgPSBjc3MucmVwbGFjZSgvZGlzcGxheTppbmxpbmUtYmxvY2svZywgJ2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTsqZGlzcGxheTppbmxpbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3NzLnJlcGxhY2UoXHJcbiAgICAgICAgL2dyYWRpZW50XFwoKC4qPyksKC4qPylcXCkvZyxcclxuICAgICAgICAnZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiQxXCIsIGVuZENvbG9yc3RyPVwiJDJcIik7JyArXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAgJDEsICAkMik7JyArXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAkMSwgJDIpOycgK1xyXG4gICAgICAgICAgICAnYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgkMSksIHRvKCQyKSk7JyArXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkMSwgICQyKScsXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IElNYXAgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvYXJyYXknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeENzcyhjc3M6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU3IHx8IChnaWd5YS5sb2NhbEluZm8uaXNJRSAmJiBnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSkpIHtcclxuICAgICAgICBjc3MgPSBjc3MucmVwbGFjZSgvZGlzcGxheTppbmxpbmUtYmxvY2svZywgJ2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTsqZGlzcGxheTppbmxpbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3NzLnJlcGxhY2UoXHJcbiAgICAgICAgL2dyYWRpZW50XFwoKC4qPyksKC4qPylcXCkvZyxcclxuICAgICAgICAnZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiQxXCIsIGVuZENvbG9yc3RyPVwiJDJcIik7JyArXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAgJDEsICAkMik7JyArXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAkMSwgJDIpOycgK1xyXG4gICAgICAgICAgICAnYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgkMSksIHRvKCQyKSk7JyArXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkMSwgICQyKScsXHJcbiAgICApO1xyXG59XHJcbnZhciBpbmplY3RlZFJ1bGVzOiBJTWFwPGJvb2xlYW4+ID0ge307XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDc3MocnVsZXM6IGFueSwgcHJlZml4Pzogc3RyaW5nLCBvdmVycmlkZSA9IHRydWUsIGhhc2g/OiBzdHJpbmcpIHtcclxuICAgIGlmICghcnVsZXMgfHwgcnVsZXMgPT0gJycpIHJldHVybjtcclxuICAgIGlmIChydWxlcyBpbnN0YW5jZW9mIEFycmF5KSBydWxlcyA9IHJ1bGVzLmpvaW4oJyAnKTtcclxuICAgIC8vICAgIHJ1bGVzID0gZml4Q3NzKHJ1bGVzKTtcclxuICAgIGlmIChwcmVmaXgpIHJ1bGVzID0gcnVsZXMucmVwbGFjZSgvKFteXFxzfV0qXFwuZ2lnKS9nLCBwcmVmaXggKyAnICQxJyk7XHJcblxyXG4gICAgaWYgKCFoYXNoKSBoYXNoID0gZ2lneWEudXRpbHMub2JqZWN0LmdldE11cm11ckhhc2gocnVsZXMpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgaWYgKCFpbmplY3RlZFJ1bGVzW2hhc2hdIHx8IG92ZXJyaWRlKSB7XHJcbiAgICAgICAgaW5qZWN0ZWRSdWxlc1toYXNoXSA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBzdHlsZTogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICB2YXIgcnVsZXNOb2RlOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlcyk7XHJcbiAgICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJ1bGVzTm9kZS52YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlc05vZGUudmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlc05vZGUubm9kZVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQocnVsZXNOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpO1xyXG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICAoaGVhZC5sZW5ndGggPiAwID8gaGVhZFswXSA6IGJvZHkpLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzY2FsZUltYWdlIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9HbG9iYWxET00nO1xyXG5pbXBvcnQgeyBnZXRDb21iaW5hdGlvbiB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvZ2VuZXJhbC9hcnJheVV0aWxzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJvcmRlclBhZGRpbmdUb3RhbCB7XHJcbiAgICB3OiBudW1iZXI7XHJcbiAgICBoOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzQm9yZGVyc0FuZFBhZGRpbmdzKGNsYXNzTmFtZTogc3RyaW5nKTogSUJvcmRlclBhZGRpbmdUb3RhbCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGdpZ3lhLnV0aWxzLkRPTS5hcHBlbmRUb0JvZHkoZWwpO1xyXG4gICAgdmFyIGJvcmRlcnNBbmRQYWRkaW5ncyA9IGdldEJvcmRlcnNBbmRQYWRkaW5ncyhlbCk7XHJcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcclxuICAgIHJldHVybiBib3JkZXJzQW5kUGFkZGluZ3M7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvcmRlcnNBbmRQYWRkaW5ncyhlbDogSFRNTEVsZW1lbnQpOiBJQm9yZGVyUGFkZGluZ1RvdGFsIHtcclxuICAgIHZhciBzdHlsZSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlSW50KGdldFN0eWxlKGVsLCBuYW1lKSk7XHJcbiAgICAgICAgaWYgKGlzTmFOKG4pKSBuID0gMDtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHc6IHN0eWxlKCdib3JkZXItbGVmdC13aWR0aCcpICsgc3R5bGUoJ2JvcmRlci1yaWdodC13aWR0aCcpICsgc3R5bGUoJ3BhZGRpbmctcmlnaHQnKSArIHN0eWxlKCdwYWRkaW5nLWxlZnQnKSxcclxuICAgICAgICBoOiBzdHlsZSgnYm9yZGVyLXRvcC13aWR0aCcpICsgc3R5bGUoJ2JvcmRlci1ib3R0b20td2lkdGgnKSArIHN0eWxlKCdwYWRkaW5nLXRvcCcpICsgc3R5bGUoJ3BhZGRpbmctYm90dG9tJyksXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZShvYmo6IEhUTUxFbGVtZW50LCBzdHlsZVByb3A6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAob2JqWydjdXJyZW50U3R5bGUnXSkgcmV0dXJuIG9ialsnY3VycmVudFN0eWxlJ11bc3R5bGVQcm9wXTtcclxuICAgIGVsc2UgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm4gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShvYmosIG51bGwpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVJbWFnZVRvQ29udGFpbmVyKGltZzogYW55LCBkb250Q2VudGVyOiBib29sZWFuLCBmbk9uSW1nTG9hZDogRnVuY3Rpb24pIHtcclxuICAgIGlmICghZG9udENlbnRlcikge1xyXG4gICAgICAgIGltZy5wYXJlbnROb2RlLnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcclxuICAgICAgICBpbWcucGFyZW50Tm9kZS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCc7XHJcbiAgICB9XHJcbiAgICB2YXIgc3R5bGUgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBpbWcucGFyZW50Tm9kZTtcclxuICAgICAgICB2YXIgZGltID0gZ2V0U3R5bGUobm9kZSwgbmFtZSk7XHJcbiAgICAgICAgd2hpbGUgKGRpbSA9PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgZGltID0gZ2V0U3R5bGUobm9kZSwgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuID0gcGFyc2VJbnQoZGltKTtcclxuICAgICAgICBpZiAoaXNOYU4obikpIG4gPSAwO1xyXG4gICAgICAgIHJldHVybiBuO1xyXG4gICAgfTtcclxuICAgIC8vdmFyIHNpemUgPSBNYXRoLm1pbihpbWcucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCwgaW1nLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0KTtcclxuICAgIHZhciBzaXplID0gTWF0aC5taW4oc3R5bGUoJ3dpZHRoJyksIHN0eWxlKCdoZWlnaHQnKSk7XHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpIHtcclxuICAgICAgICB2YXIgYm9yZGVyc0FuZFBhZGRpbmdzID0gZ2V0Qm9yZGVyc0FuZFBhZGRpbmdzKGltZy5wYXJlbnROb2RlKTtcclxuICAgICAgICB2YXIgdyA9IHN0eWxlKCd3aWR0aCcpIC0gYm9yZGVyc0FuZFBhZGRpbmdzLnc7XHJcbiAgICAgICAgdmFyIGggPSBzdHlsZSgnaGVpZ2h0JykgLSBib3JkZXJzQW5kUGFkZGluZ3MuaDtcclxuICAgICAgICBzaXplID0gTWF0aC5taW4odywgaCk7XHJcbiAgICB9XHJcbiAgICBzY2FsZUltYWdlKGltZywgc2l6ZSwgZG9udENlbnRlciwgZm5PbkltZ0xvYWQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc0lubmVyU2l6ZShjbGFzc05hbWU6IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpOiBJQm9yZGVyUGFkZGluZ1RvdGFsIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgZ2lneWEudXRpbHMuRE9NLmFwcGVuZFRvQm9keShlbCk7XHJcbiAgICB2YXIgYm9yZGVyc0FuZFBhZGRpbmdzID0gZ2V0Qm9yZGVyc0FuZFBhZGRpbmdzKGVsKTtcclxuICAgIHcgLT0gYm9yZGVyc0FuZFBhZGRpbmdzLnc7XHJcbiAgICBoIC09IGJvcmRlcnNBbmRQYWRkaW5ncy5oO1xyXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICByZXR1cm4geyB3OiB3LCBoOiBoIH07XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJU3ByaXRlSW5mbyB7XHJcbiAgICBpc1NpbmdsZUltYWdlOiBib29sZWFuO1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFNwcml0ZVJlbmRlcmVyKHNyYzogc3RyaW5nLCBzcmNUZW1wbGF0ZTogc3RyaW5nLCBzcHJpdGVEYXRhLCBzcHJpdGVXOiBudW1iZXIsIHNwcml0ZUg6IG51bWJlciwgcGl4ZWxSYXRpbzogbnVtYmVyLCBzcHJpdGVMZW5ndGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zcmMgPSBzcmM7XHJcbiAgICB0aGlzLnNyY1RlbXBsYXRlID0gc3JjVGVtcGxhdGU7XHJcbiAgICB0aGlzLnNwcml0ZURhdGEgPSBzcHJpdGVEYXRhO1xyXG4gICAgdGhpcy5zcHJpdGVXID0gc3ByaXRlVztcclxuICAgIHRoaXMuc3ByaXRlSCA9IHNwcml0ZUg7XHJcbiAgICB0aGlzLnBpeGVsUmF0aW8gPSBwaXhlbFJhdGlvO1xyXG4gICAgdGhpcy5zcHJpdGVMZW5ndGggPSBzcHJpdGVMZW5ndGg7XHJcbn1cclxuU3ByaXRlUmVuZGVyZXIucHJvdG90eXBlID0ge1xyXG4gICAgZ2V0U3ByaXRlRGF0YTogZnVuY3Rpb24oaWQ6IHN0cmluZywgZG9udFVzZVNwcml0ZXM/OiBib29sZWFuKTogSVNwcml0ZUluZm8ge1xyXG4gICAgICAgIHZhciBvU3ByaXRlID0gdGhpcy5zcHJpdGVEYXRhW2lkXTtcclxuICAgICAgICBpZiAob1Nwcml0ZSAmJiAhZG9udFVzZVNwcml0ZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlRGF0YVtpZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gaWQuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgdmFyIHJlZ2V4cCA9IC9cXHsoLio/KVxcfS9nO1xyXG4gICAgICAgICAgICB2YXIgc3JjID0gdGhpcy5zcmNUZW1wbGF0ZS5yZXBsYWNlKHJlZ2V4cCwgZnVuY3Rpb24oXywgZ3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IHBhcmFtc1tpKytdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlzU2luZ2xlSW1hZ2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzcmM6IHNyYyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFN0eWxlU3RyaW5nOiBmdW5jdGlvbihzcHJpdGVJZDogc3RyaW5nLCBhdXRvTWFyZ2luOiBib29sZWFuKSB7XHJcbiAgICAgICAgdmFyIG9TcHJpdGUgPSB0aGlzLmdldFNwcml0ZURhdGEoc3ByaXRlSWQpO1xyXG4gICAgICAgIHZhciBhclN0eWxlID0gW107XHJcblxyXG4gICAgICAgIGlmIChvU3ByaXRlKSB7XHJcbiAgICAgICAgICAgIGFyU3R5bGUucHVzaChcImJhY2tncm91bmQtaW1hZ2U6dXJsKCdcIiArIHRoaXMuc3JjICsgXCInKTtcIik7XHJcbiAgICAgICAgICAgIGFyU3R5bGUucHVzaCgnYmFja2dyb3VuZC1wb3NpdGlvbjotJyArIG9TcHJpdGUueCArICdweCAwcHg7Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5waXhlbFJhdGlvID4gMSkge1xyXG4gICAgICAgICAgICAgICAgYXJTdHlsZS5wdXNoKCdiYWNrZ3JvdW5kLXNpemU6JyArIHRoaXMuc3ByaXRlTGVuZ3RoICogdGhpcy5zcHJpdGVXICsgJ3B4ICcgKyB0aGlzLnNwcml0ZUggKyAncHg7Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhdXRvTWFyZ2luKSB7XHJcbiAgICAgICAgICAgICAgICBhclN0eWxlLnB1c2goJ21hcmdpbjogMCBhdXRvOycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyU3R5bGUucHVzaCgnd2lkdGg6ICcgKyB0aGlzLnNwcml0ZVcgKyAncHg7Jyk7XHJcbiAgICAgICAgICAgIGFyU3R5bGUucHVzaCgnaGVpZ2h0OiAnICsgdGhpcy5zcHJpdGVIICsgJ3B4O2xpbmUtaGVpZ2h0OiAnICsgdGhpcy5zcHJpdGVIICsgJ3B4OycpO1xyXG4gICAgICAgICAgICBhclN0eWxlLnB1c2goJ2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDsnKTtcclxuICAgICAgICAgICAgLy9hclN0eWxlLnB1c2goXCJmb250LXNpemU6MXB4O1wiKTtcclxuICAgICAgICAgICAgYXJTdHlsZS5wdXNoKCdwb3NpdGlvbjpzdGF0aWM7Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhclN0eWxlLmpvaW4oJycpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRIVE1MOiBmdW5jdGlvbihcclxuICAgICAgICBzcHJpdGVJZDogc3RyaW5nLFxyXG4gICAgICAgIGF1dG9NYXJnaW46IGJvb2xlYW4sXHJcbiAgICAgICAgZG9udFVzZVNwcml0ZXM6IGJvb2xlYW4sXHJcbiAgICAgICAgZWxJRDogc3RyaW5nID0gJycsXHJcbiAgICAgICAgYWx0VGV4dDogc3RyaW5nID0gJycsXHJcbiAgICAgICAgdGFiaW5kZXg6IG51bWJlciA9IHVuZGVmaW5lZCxcclxuICAgICAgICB0aXRsZT86IHN0cmluZyxcclxuICAgICkge1xyXG4gICAgICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIC8vIHNlZSBidWc6IDMzNDQ4XHJcbiAgICAgICAgLy92YXIgZGlzYWJsZVNwcml0ZU9uQ2hyb21lID0gKCh0aGlzLnBpeGVsUmF0aW8gPiAxKSAmJiBnaWd5YS5sb2NhbEluZm8uaXNDaHJvbWUpO1xyXG4gICAgICAgIC8vZG9udFVzZVNwcml0ZXMgPSBkb250VXNlU3ByaXRlcyB8fCBkaXNhYmxlU3ByaXRlT25DaHJvbWU7XHJcbiAgICAgICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAgICAgdmFyIG9TcHJpdGUgPSB0aGlzLmdldFNwcml0ZURhdGEoc3ByaXRlSWQsIGRvbnRVc2VTcHJpdGVzKTtcclxuICAgICAgICB2YXIgYXJIVE1MID0gW107XHJcbiAgICAgICAgdmFyIHRhYmluZGV4QXR0ciA9IHRhYmluZGV4ICE9PSB1bmRlZmluZWQgPyBgdGFiaW5kZXg9XCIke3RhYmluZGV4fVwiYCA6ICcnO1xyXG4gICAgICAgIGFySFRNTC5wdXNoKFxyXG4gICAgICAgICAgICBgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiJHthbHRUZXh0fVwiICR7dGl0bGUgPyBgdGl0bGU9XCIke3RpdGxlfVwiYCA6ICcnfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0YWJiaW5nLWJ1dHRvblwiICR7dGFiaW5kZXhBdHRyfSBzdHlsZT1cImhlaWdodDoke1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVIXHJcbiAgICAgICAgICAgIH1weDtcIj5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKG9TcHJpdGUpIHtcclxuICAgICAgICAgICAgaWYgKG9TcHJpdGUuaXNTaW5nbGVJbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgYDxpbWcgc3JjPVwiJHtvU3ByaXRlLnNyY31cIiBzdHlsZT1cIndpZHRoOiR7dGhpcy5zcHJpdGVXfXB4O2hlaWdodDoke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUhcclxuICAgICAgICAgICAgICAgICAgICB9cHg7cG9zaXRpb246c3RhdGljO21hcmdpbjowXCIgYWx0PVwiJHthbHRUZXh0fVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+YCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhckhUTUwucHVzaChgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT1cImApO1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MLnB1c2godGhpcy5nZXRTdHlsZVN0cmluZyhzcHJpdGVJZCwgYXV0b01hcmdpbikpO1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goJ1wiJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxJRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKGAgaWQ9XCIke2VsSUR9XCJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKGA+PC9kaXY+YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXJIVE1MLnB1c2goJzwvYnV0dG9uPicpO1xyXG4gICAgICAgIHJldHVybiBhckhUTUwuam9pbignJyk7XHJcbiAgICB9LFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ByaXRlUmVuZGVyZXJzKG9Hcm91cHMpIHtcclxuICAgIC8vZ3JvdXA6IHtwYXRoLHcsaH1cclxuICAgIHZhciBhclBhdGhzID0gW107XHJcbiAgICB2YXIgeCA9IDA7XHJcbiAgICB2YXIgcmVuZGVyZXJzID0ge307XHJcbiAgICBmb3IgKHZhciBncm91cElEIGluIG9Hcm91cHMpIHtcclxuICAgICAgICB2YXIgZ3JvdXAgPSBvR3JvdXBzW2dyb3VwSURdO1xyXG4gICAgICAgIGlmICghZ3JvdXAucGl4ZWxSYXRpbykgZ3JvdXAucGl4ZWxSYXRpbyA9IDE7XHJcbiAgICAgICAgYXJQYXRocy5wdXNoKGdyb3VwLnBhdGggKyAnfCcgKyBncm91cC53ICogZ3JvdXAucGl4ZWxSYXRpbyArICcsJyArIGdyb3VwLmggKiBncm91cC5waXhlbFJhdGlvKTtcclxuICAgIH1cclxuICAgIHZhciBzcmMgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvR2V0U3ByaXRlLmFzaHg/cGF0aD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFyUGF0aHMuam9pbignXicpLnJlcGxhY2UoL1xcW1xcXS8sICcnKSkpO1xyXG4gICAgZm9yICh2YXIgZ3JvdXBJRCBpbiBvR3JvdXBzKSB7XHJcbiAgICAgICAgdmFyIGdyb3VwID0gb0dyb3Vwc1tncm91cElEXTtcclxuICAgICAgICB2YXIgc3ByaXRlR3JvdXBEYXRhID0ge307XHJcbiAgICAgICAgc3ByaXRlR3JvdXBEYXRhWydzcHJpdGVEYXRhJ10gPSB7fTtcclxuXHJcbiAgICAgICAgdmFyIHJlZ2V4cCA9IC9cXFsoLio/KVxcXS9nO1xyXG4gICAgICAgIHZhciBhck1hdGNoZXMgPSBbXTtcclxuICAgICAgICB2YXIgaU1hdGNoID0gMDtcclxuICAgICAgICBzcHJpdGVHcm91cERhdGFbJ3NyY1RlbXBsYXRlJ10gPSBnaWd5YS5fLmdldENkblJlc291cmNlKFxyXG4gICAgICAgICAgICAnL2dzL2knICtcclxuICAgICAgICAgICAgICAgIGdyb3VwLnBhdGgucmVwbGFjZShyZWdleHAsIGZ1bmN0aW9uKF8sIHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJNYXRjaGVzLnB1c2gocGxhY2Vob2xkZXIuc3BsaXQoJywnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd7JyArIGlNYXRjaCsrICsgJ30nO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgYXJTcHJpdGVJRHMgPSBnZXRDb21iaW5hdGlvbihhck1hdGNoZXMpO1xyXG4gICAgICAgIGlmIChhclNwcml0ZUlEcy5sZW5ndGggPT0gMCkgYXJTcHJpdGVJRHMucHVzaChbJyddKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgdSA9IDA7IHUgPCBhclNwcml0ZUlEcy5sZW5ndGg7IHUrKykge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBhclNwcml0ZUlEc1t1XS5qb2luKCctJyk7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgaWQgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3ByaXRlR3JvdXBEYXRhWydzcHJpdGVEYXRhJ11baWRdID0ge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZDogZ3JvdXBJRCxcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIHg6IHgsXHJcbiAgICAgICAgICAgICAgICB3OiBncm91cC53LFxyXG4gICAgICAgICAgICAgICAgaDogZ3JvdXAuaCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeCArPSBncm91cC53O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJlcnNbZ3JvdXBJRF0gPSBuZXcgU3ByaXRlUmVuZGVyZXIoXHJcbiAgICAgICAgICAgIHNyYyxcclxuICAgICAgICAgICAgc3ByaXRlR3JvdXBEYXRhWydzcmNUZW1wbGF0ZSddLFxyXG4gICAgICAgICAgICBzcHJpdGVHcm91cERhdGFbJ3Nwcml0ZURhdGEnXSxcclxuICAgICAgICAgICAgZ3JvdXAudyxcclxuICAgICAgICAgICAgZ3JvdXAuaCxcclxuICAgICAgICAgICAgZ3JvdXAucGl4ZWxSYXRpbyxcclxuICAgICAgICAgICAgYXJTcHJpdGVJRHMubGVuZ3RoLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVuZGVyZXJzO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZVN0cmluZyhvU3R5bGUsIGJsbklzTGluaz86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgdmFyIHMgPSAnJztcclxuICAgIHMgKz0gJ2xpbmUtaGVpZ2h0OiBub3JtYWw7JztcclxuICAgIGlmIChibG5Jc0xpbmspIHMgKz0gJ2N1cnNvcjpwb2ludGVyOyc7XHJcbiAgICBpZiAob1N0eWxlLnVuZGVybGluZSkgcyArPSAndGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTsnO1xyXG4gICAgaWYgKG9TdHlsZS5mb250KSBzICs9ICdmb250LWZhbWlseTonICsgb1N0eWxlLmZvbnQgKyAnOyc7XHJcbiAgICBpZiAob1N0eWxlLnNpemUpIHMgKz0gJ2ZvbnQtc2l6ZTonICsgb1N0eWxlLnNpemUgKyAncHg7JztcclxuICAgIGlmIChvU3R5bGUuY29sb3IpIHMgKz0gJ2NvbG9yOicgKyBvU3R5bGUuY29sb3IgKyAnOyc7XHJcbiAgICBpZiAob1N0eWxlLmJvbGQpIHMgKz0gJ2ZvbnQtd2VpZ2h0OmJvbGQ7JztcclxuICAgIGlmIChvU3R5bGVbJ2ZyYW1lLXRoaWNrbmVzcyddKSBzICs9ICdib3JkZXItc3R5bGU6c29saWQ7IGJvcmRlci13aWR0aDonICsgb1N0eWxlWydmcmFtZS10aGlja25lc3MnXSArICdweDsnO1xyXG4gICAgaWYgKG9TdHlsZVsnZnJhbWUtY29sb3InXSkgcyArPSAnYm9yZGVyLWNvbG9yOicgKyBvU3R5bGVbJ2ZyYW1lLWNvbG9yJ10gKyAnOyc7XHJcbiAgICBpZiAob1N0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10pIHMgKz0gJ2JhY2tncm91bmQtY29sb3I6JyArIG9TdHlsZVsnYmFja2dyb3VuZC1jb2xvciddICsgJzsnO1xyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJVGV4dERpbWVudGlvbnMge1xyXG4gICAgdzogbnVtYmVyO1xyXG4gICAgaDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlVGV4dCh0ZXh0OiBzdHJpbmcsIG9TdHlsZTogYW55LCBtYXhXOiBudW1iZXIgPSAwKTogSVRleHREaW1lbnRpb25zIHtcclxuICAgIGlmIChpc05hTihtYXhXKSB8fCBtYXhXIDwgMCkgbWF4VyA9IDA7XHJcbiAgICB2YXIgcnVsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lneWFfcnVsZXInKTtcclxuICAgIHZhciBydWxlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lneWFfcnVsZXJfdGV4dCcpO1xyXG4gICAgaWYgKHJ1bGVyID09IG51bGwpIHtcclxuICAgICAgICBydWxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJ1bGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICAgICAgcnVsZXIuaWQgPSAnZ2lneWFfcnVsZXInO1xyXG4gICAgICAgIHJ1bGVyVGV4dC5pZCA9ICdnaWd5YV9ydWxlcl90ZXh0JztcclxuICAgICAgICBydWxlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgcnVsZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHJ1bGVyLnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xyXG4gICAgICAgIHJ1bGVyLnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcclxuICAgICAgICBydWxlci5hcHBlbmRDaGlsZChydWxlclRleHQpO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hcHBlbmRUb0JvZHkocnVsZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9TdHlsZSkge1xyXG4gICAgICAgIHJ1bGVyLnN0eWxlLmxpbmVIZWlnaHQgPSBvU3R5bGUuc2l6ZSArICdweCc7XHJcbiAgICAgICAgcnVsZXIuc3R5bGUuZm9udEZhbWlseSA9IG9TdHlsZS5mb250O1xyXG4gICAgICAgIHJ1bGVyLnN0eWxlLmZvbnRTaXplID0gb1N0eWxlLnNpemUgKyAncHgnO1xyXG4gICAgICAgIHJ1bGVyLnN0eWxlLmZvbnRXZWlnaHQgPSAoJycgKyBvU3R5bGUuYm9sZCkudG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScgPyAnYm9sZCcgOiAnJztcclxuICAgIH1cclxuICAgIGlmIChtYXhXKSB7XHJcbiAgICAgICAgcnVsZXIuc3R5bGUud2hpdGVTcGFjZSA9ICcnO1xyXG4gICAgICAgIHJ1bGVyLnN0eWxlLndpZHRoID0gJycgKyBtYXhXICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcnVsZXIuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xyXG4gICAgICAgIHJ1bGVyLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xyXG4gICAgfVxyXG4gICAgcnVsZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIHJ1bGVyLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIHJ1bGVyVGV4dC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgdmFyIHcgPSBydWxlclRleHQub2Zmc2V0V2lkdGg7XHJcbiAgICB2YXIgaCA9IHJ1bGVyVGV4dC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBpZiAodyA9PSAwIHx8IGggPT0gMCkge1xyXG4gICAgICAgIHcgPSBydWxlci5vZmZzZXRXaWR0aDtcclxuICAgICAgICBoID0gcnVsZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgcnVsZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTGluZWJyZWFrcyh0ID0gdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAoIXQgfHwgIXQucmVwbGFjZSkgcmV0dXJuIHQ7XHJcbiAgICByZXR1cm4gdC5yZXBsYWNlKC9cXHIvLCAnJykucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZml4VGV4dFdpZG93cyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGFzdFNwYWNlID0gdGV4dC5sYXN0SW5kZXhPZignICcpO1xyXG4gICAgaWYgKGxhc3RTcGFjZSA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0LnN1YnN0cigwLCBsYXN0U3BhY2UpICsgJyZuYnNwOycgKyB0ZXh0LnN1YnN0cihsYXN0U3BhY2UgKyAxKTtcclxufVxyXG4iLCJpbXBvcnQgeyBJUGx1Z2luVGVtcGxhdGVzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5UZW1wbGF0ZXMnO1xyXG5pbXBvcnQgeyBJUGx1Z2luQ1NTIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5DU1MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlczxQVCBleHRlbmRzIElQbHVnaW5UZW1wbGF0ZXM+KHBsdWdpbnM6IHN0cmluZ1tdKTogUFQge1xyXG4gICAgdmFyIHRlbXBsYXRlcyA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gcGx1Z2lucykge1xyXG4gICAgICAgIHRlbXBsYXRlcy5wdXNoKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbFtwbHVnaW5zW2ldXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZSh0ZW1wbGF0ZXMpIGFzIFBUO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDc3M8UEMgZXh0ZW5kcyBJUGx1Z2luQ1NTPihwbHVnaW5zOiBzdHJpbmdbXSk6IFBDIHtcclxuICAgIHZhciBjc3NlcyA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gcGx1Z2lucykge1xyXG4gICAgICAgIGNzc2VzLnB1c2goZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3NbcGx1Z2luc1tpXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoY3NzZXMpIGFzIFBDO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRW1haWxMb2dpbklEKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGxldCBlbWFpbFBhdHRlcm4gPVxyXG4gICAgICAgIFwiXig/PSguezEsNjR9QC57MSwyNTV9KSkoWyEjJCUmJyorXFxcXC1cXFxcLz0/XFxcXF5fYHt8fX5hLXpBLVowLTl9XXsxLDY0fShcXFxcLlshIyQlJicqK1xcXFwtXFxcXC89P1xcXFxeX2B7fH1+YS16QS1aMC05XXsxLH0pezAsfSlAKChcXFxcWygyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKFxcXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykpezN9XFxcXF0pfChbYS16QS1aMC05LV17MSw2M30oXFxcXC5bYS16QS1aMC05LV17MSw2M30pezEsfSkpJFwiO1xyXG4gICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChlbWFpbFBhdHRlcm4sICdpZycpO1xyXG4gICAgbGV0IHZhbGlkID0gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgICBnaWd5YS5sb2dnZXIuaW5mbyhgTG9naW5JRCB2YWxpZGF0aW9uIHdpdGggZW1haWwgOiAke2VtYWlsfSwgcGFzc2VkIDogJHt2YWxpZH1gKTtcclxuICAgIHJldHVybiB2YWxpZDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbFZhbGlkKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc0VtYWlsTGlzdFZhbGlkKGVtYWlsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbExpc3RWYWxpZChlbWFpbHM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgdmFyIF9lbWFpbCA9XHJcbiAgICAgICAgXCIoKD89KFteLl0uezAsNjN9QC57MSwyNTV9KSkoWyEjJCUmJyorXFxcXC1cXFxcLz0/XFxcXF5fYHt8fX5hLXpBLVowLTl9XXsxLDY0fShcXFxcLlshIyQlJicqK1xcXFwtXFxcXC89P1xcXFxeX2B7fH1+YS16QS1aMC05XXsxLH0pezAsfSlAKChcXFxcWygyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKFxcXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykpezN9XFxcXF0pfChbYS16QS1aMC05LV17MSw2M30oXFxcXC5bYS16QS1aMC05LV17MSw2M30pezEsfSkpKVwiO1xyXG5cclxuICAgIHZhciBfbmFtZUFuZEVtYWlsID0gJygoXCJbXjxdKzwoJyArIF9lbWFpbCArICcpPlwiKXwoKFwiW15cIl0qXCIgKik/PCgnICsgX2VtYWlsICsgJyk+KXwoJyArIF9lbWFpbCArICcpKSc7XHJcblxyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChfbmFtZUFuZEVtYWlsKTtcclxuICAgIHZhciBhckVtYWlscyA9IGVtYWlscy5zcGxpdCgnLCcpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJFbWFpbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoYXJFbWFpbHNbaV0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFbWFpbChzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmIChzLmluZGV4T2YoJyAnKSA+PSAwKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdmFyIGVtYWlsUGFydHMgPSBzLnNwbGl0KCdAJyk7XHJcbiAgICBpZiAoZW1haWxQYXJ0cy5sZW5ndGggIT0gMikgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKGVtYWlsUGFydHNbMF0ubGVuZ3RoID09IDApIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChlbWFpbFBhcnRzWzFdLmxlbmd0aCA9PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgZG9tYWluUGFydHMgPSBlbWFpbFBhcnRzWzFdLnNwbGl0KCcuJyk7XHJcbiAgICBpZiAoZG9tYWluUGFydHMubGVuZ3RoIDwgMikgcmV0dXJuIGZhbHNlO1xyXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkb21haW5QYXJ0cy5sZW5ndGg7IGQrKykge1xyXG4gICAgICAgIGlmIChkb21haW5QYXJ0c1tkXS5sZW5ndGggPT0gMCB8fCBkb21haW5QYXJ0c1tkXS5pbmRleE9mKCcgJykgPiAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNJbkRvbWFpbihkb21haW4gPSB1bmRlZmluZWQsIHRvcERvbWFpbiA9IGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZlsndG9wRG9tYWluJ10gfHwgZG9jdW1lbnQuZG9tYWluKSB7XHJcbiAgICBpZiAoIWRvbWFpbikgcmV0dXJuO1xyXG4gICAgdmFyIHJlZ2V4U3RyaW5nID0gJ14nICsgZG9tYWluLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKS5yZXBsYWNlKC9cXCpcXFxcLi9nLCAnKFthLXpBLVowLTldK1xcXFwuKSonKSArICckJztcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAocmVnZXhTdHJpbmcpO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodG9wRG9tYWluKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q29tYmluYXRpb24oYXIsIGluZGV4OiBudW1iZXIgPSAwKSB7XHJcbiAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XHJcbiAgICBpZiAoIWFyIHx8IGFyLmxlbmd0aCA9PSAwKSByZXR1cm4gW107XHJcbiAgICB2YXIgY3VycmVudEFycmF5ID0gYXJbaW5kZXhdO1xyXG4gICAgaWYgKGluZGV4ID09IGFyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB2YXIgYXJDb21iaW5hdGlvbnMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhckNvbWJpbmF0aW9ucy5wdXNoKFtjdXJyZW50QXJyYXlbaV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyQ29tYmluYXRpb25zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgYXJDb21iaW5hdGlvbnMgPSBbXTtcclxuICAgICAgICB2YXIgYXJDb21iaW5hdGlvbiA9IGdldENvbWJpbmF0aW9uKGFyLCBpbmRleCArIDEpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJDb21iaW5hdGlvbi5sZW5ndGg7IHUrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyQ29tYmluYXRpb25zLnB1c2goW2N1cnJlbnRBcnJheVtpXV0uY29uY2F0KGFyQ29tYmluYXRpb25bdV0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJDb21iaW5hdGlvbnM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQcm92aWRlcnMoZW5hYmxlZFByb3ZpZGVyczogc3RyaW5nLCBkaXNhYmxlZFByb3ZpZGVyczogc3RyaW5nLCByZXF1aXJlZENhcGFiaWxpdGllczogc3RyaW5nKSB7XHJcbiAgICAvLyBzZXR0aW5nIHRoZSBwcm92aWRlcnMgYXJyYXkuXHJcbiAgICAvLyBzZXR0aW5nIHRoZSBhcnJheSBvZiB0aGUgcHJvdmlkZXJzOlxyXG4gICAgdmFyIGVQcm92aWRlcnMgPSBnaWd5YS51dGlscy5hcnJheS5nZXRBcnJheUZyb21TdHJpbmcoZW5hYmxlZFByb3ZpZGVycywgJywnLCB0cnVlKTtcclxuICAgIHZhciBkUHJvdmlkZXJzID0gZ2lneWEudXRpbHMuYXJyYXkuZ2V0QXJyYXlGcm9tU3RyaW5nKGRpc2FibGVkUHJvdmlkZXJzLCAnLCcsIHRydWUpO1xyXG4gICAgdmFyIHJDYXBhYmlsaXRpZXMgPSBnaWd5YS51dGlscy5hcnJheS5nZXRBcnJheUZyb21TdHJpbmcocmVxdWlyZWRDYXBhYmlsaXRpZXMsICcsJywgdHJ1ZSk7XHJcblxyXG4gICAgLy8gcmVtb3ZpbmcgdGhlIGRpc2FibGVkIHByb3ZpZGVycy5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZFByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLmFycmF5LnJlbW92ZUJ5VmFsdWUoZVByb3ZpZGVycywgZFByb3ZpZGVyc1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29udmVydGluZyB0aGUgcHJvdmlkcnMgc3RyaW5nIGludG8gdGhlIHByb3ZpZGVycyBPYmplY3QgZnJvbSB0aGUgYXJyYXkgb2YgcHJvdmlkZXJzIGluIHRoZSBpbnRlcm5hbCAnXycgc2RrLlxyXG4gICAgdmFyIHByb3ZpZGVycyA9IGdpZ3lhLl8ucHJvdmlkZXJzLmdldFByb3ZpZGVyc0J5TmFtZShlUHJvdmlkZXJzLmpvaW4oJywnKSk7XHJcblxyXG4gICAgLy8gcmVtb3ZpbmcgdGhlIGRpc2FibGVkIHByb3ZpZGVycy5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZFByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLmFycmF5LnJlbW92ZUJ5UHJvcGVydHkocHJvdmlkZXJzLCAnbmFtZScsIGRQcm92aWRlcnNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9ubHkgcHJvdmlkZXJzIHRoYXQgc3VwcG9ydCB0aGUgY2FwYWJpbGl0aWVzIHdpbGwgcmVtYWluLlxyXG4gICAgcmV0dXJuIGdpZ3lhLnNvY2lhbGl6ZS5nZXRQcm92aWRlcnNGb3JSZXF1aXJlZENhcGFiaWxpdGllcyhwcm92aWRlcnMsIHJDYXBhYmlsaXRpZXMpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRJU09EYXRlKGRhdGU6IHN0cmluZyk6IERhdGUgfCBudWxsIHtcclxuICAgIGxldCBkYXRlUmVzdWx0ID0gbnVsbDtcclxuICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTgpIHtcclxuICAgICAgICBkYXRlUmVzdWx0ID0gZ2V0SUU4RGF0ZShkYXRlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgaXNvUmVnZXggPSAvXihcXGR7NH1cXC1cXGRcXGRcXC1cXGRcXGQoW3RUIF1bXFxkOlxcLl0qKT8pKFt6Wl18KFsrXFwtXSkoXFxkXFxkKTooXFxkXFxkKSk/JC87XHJcbiAgICAgICAgY29uc3QgY2FwdHVyZXMgPSBpc29SZWdleC5leGVjKGRhdGUpIHx8IFtdO1xyXG4gICAgICAgIGlmIChjYXB0dXJlc1sxXSkge1xyXG4gICAgICAgICAgICBsZXQgbWlsbGlzZWNvbmRzVGltZSA9IERhdGUucGFyc2UoZGF0ZSk7XHJcbiAgICAgICAgICAgIGRhdGVSZXN1bHQgPSBuZXcgRGF0ZShtaWxsaXNlY29uZHNUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0ZVJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBnZXRJRThEYXRlKGRhdGU6IHN0cmluZyk6IERhdGUgfCBudWxsIHtcclxuICAgIHZhciBkYXksXHJcbiAgICAgICAgdHosXHJcbiAgICAgICAgcnggPSAvXihcXGR7NH1cXC1cXGRcXGRcXC1cXGRcXGQoW3RUIF1bXFxkOlxcLl0qKT8pKFt6Wl18KFsrXFwtXSkoXFxkXFxkKTooXFxkXFxkKSk/JC8sXHJcbiAgICAgICAgcCA9IHJ4LmV4ZWMoZGF0ZSkgfHwgW107XHJcbiAgICBpZiAocFsxXSkge1xyXG4gICAgICAgIGRheSA9IHBbMV0uc3BsaXQoL1xcRC8pO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBMID0gZGF5Lmxlbmd0aDsgaSA8IEw7IGkrKykge1xyXG4gICAgICAgICAgICBkYXlbaV0gPSBwYXJzZUludChkYXlbaV0sIDEwKSB8fCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXlbMV0gLT0gMTtcclxuICAgICAgICBkYXkgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShEYXRlLCBkYXkpKTtcclxuICAgICAgICBpZiAoIWRheS5nZXREYXRlKCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChwWzVdKSB7XHJcbiAgICAgICAgICAgIHR6ID0gcGFyc2VJbnQocFs1XSwgMTApICogNjA7XHJcbiAgICAgICAgICAgIGlmIChwWzZdKSB0eiArPSBwYXJzZUludChwWzZdLCAxMCk7XHJcbiAgICAgICAgICAgIGlmIChwWzRdID09ICcrJykgdHogKj0gLTE7XHJcbiAgICAgICAgICAgIGlmICh0eikgZGF5LnNldFVUQ01pbnV0ZXMoZGF5LmdldFVUQ01pbnV0ZXMoKSArIHR6KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRheTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjbG9uZVBhcmFtc0ZvclBsdWdpbihwYXJhbXMpIHtcclxuICAgIHZhciBuZXdQYXJhbXMgPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUocGFyYW1zKTtcclxuXHJcbiAgICBkZWxldGUgbmV3UGFyYW1zLmluc3RhbmNlSUQ7XHJcbiAgICBkZWxldGUgbmV3UGFyYW1zLmdldEluc3RhbmNlO1xyXG5cclxuICAgIHJldHVybiBuZXdQYXJhbXM7XHJcbn1cclxuIiwiZXhwb3J0IHR5cGUgVHJhbnNsYXRpb25zID0geyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuZXhwb3J0IHR5cGUgVHJhbnNsYXRpb25zQ29udGFpbmVyID0geyBbbGFuZ0NvZGU6IHN0cmluZ106IFRyYW5zbGF0aW9ucyB9O1xyXG5cclxuY29uc3QgZGVmYXVsdExhbmcgPSAnZW4nO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxpemVkVGV4dChwbHVnaW46IHN0cmluZywgdGV4dEtleTogc3RyaW5nLCBsYW5nOiBzdHJpbmcsIHJlcGxhY2VTdHI/OiBzdHJpbmcsIHdpdGhTdHI/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAvLyByZWdpb24gIyB0ZXN0LWhlbHBlclxyXG4gICAgaWYgKGxhbmcgPT0gJ3RlLXN0JylcclxuICAgICAgICByZXR1cm4gJ1RFU1RfJyArIHRleHRLZXkuc3Vic3RyaW5nKDAsIDEwKTtcclxuICAgIC8vIGVuZHJlZ2lvbiAjIHRlc3QtaGVscGVyXHJcblxyXG4gICAgaWYgKCFsYW5nKVxyXG4gICAgICAgIGxhbmcgPSBkZWZhdWx0TGFuZztcclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBnaWd5YS5pMThuW3BsdWdpbl1bbGFuZ107XHJcbiAgICBpZiAoIXRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGZhbGxiYWNrTGFuZyA9IGdldEZhbGxiYWNrTGFuZyhsYW5nLCBkZWZhdWx0TGFuZyk7XHJcbiAgICAgICAgcmV0dXJuIGdldExvY2FsaXplZFRleHQocGx1Z2luLCB0ZXh0S2V5LCBmYWxsYmFja0xhbmcsIHJlcGxhY2VTdHIsIHdpdGhTdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXMgPSB0cmFuc2xhdGlvbnNbdGV4dEtleV07XHJcbiAgICBpZiAocmVzICYmIHJlcGxhY2VTdHIpXHJcbiAgICAgICAgcmVzID0gcmVzLnJlcGxhY2UocmVwbGFjZVN0ciwgd2l0aFN0cik7XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uc0Zyb21Db250YWluZXIoXHJcbiAgICBjb250YWluZXI6IHsgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbnNDb250YWluZXIgfSxcclxuICAgIGxhbmc6IHN0cmluZyxcclxuICAgIGZhbGxiYWNrRW5hYmxlZDogYm9vbGVhbiA9IHRydWUsXHJcbiAgICBkZWZhdWx0VHJhbnNsYXRpb25zTGFuZzogc3RyaW5nID0gZGVmYXVsdExhbmcpXHJcbiAgICA6IFRyYW5zbGF0aW9uc3x1bmRlZmluZWQge1xyXG5cclxuICAgIGlmICghY29udGFpbmVyIHx8ICFjb250YWluZXIudHJhbnNsYXRpb25zKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKGNvbnRhaW5lci50cmFuc2xhdGlvbnNbbGFuZ10pXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci50cmFuc2xhdGlvbnNbbGFuZ107XHJcblxyXG4gICAgY29uc3QgZmFsbGJhY2tMYW5nID0gZ2V0RmFsbGJhY2tMYW5nKGxhbmcsIGRlZmF1bHRUcmFuc2xhdGlvbnNMYW5nKTtcclxuICAgIHJldHVybiBmYWxsYmFja0VuYWJsZWQgJiYgZmFsbGJhY2tMYW5nXHJcbiAgICAgICAgPyBnZXRUcmFuc2xhdGlvbnNGcm9tQ29udGFpbmVyKGNvbnRhaW5lciwgZmFsbGJhY2tMYW5nKVxyXG4gICAgICAgIDogdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFsbGJhY2tMYW5nKGxhbmc6IHN0cmluZywgZGVmYXVsdExhbmc6IHN0cmluZyk6IHN0cmluZ3x1bmRlZmluZWQge1xyXG5cclxuICAgIGNvbnN0IGh5cGhlbkluZGV4ID0gbGFuZy5pbmRleE9mKFwiLVwiKTtcclxuICAgIGlmIChoeXBoZW5JbmRleCA+IDApIHtcclxuICAgICAgICByZXR1cm4gbGFuZy5zdWJzdHIoMCwgaHlwaGVuSW5kZXgpOyAvLyB0aGUgc3Vic3RyaW5nIGJlZm9yZSB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiB0aGUgaHlwaGVuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxhbmcgIT09IGRlZmF1bHRMYW5nXHJcbiAgICAgICAgPyBkZWZhdWx0TGFuZyAvLyBmYWxsYmFjayB0byB0aGUgZGVmYXVsdCBsYW5nXHJcbiAgICAgICAgOiB1bmRlZmluZWQ7IC8vIHdlIGRvbnQgaGF2ZSBhIGZhbGxiYWNrIGxhbmcgaWYgdGhlIGxhbmcgaXMgdGhlIHNhbWUgYXMgdGhlIGRlZmF1bHQgbGFuZ1xyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UHJlcHJvY2Vzc29yKFByb3BlcnR5TmFtZTogc3RyaW5nLCBQcm9wZXJ0eVZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgdmFyIGxjYXNlUHJvcGVydHlOYW1lID0gUHJvcGVydHlOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgbGFzdERhc2hJbmRleCA9IGxjYXNlUHJvcGVydHlOYW1lLmluZGV4T2YoJy0nKTtcclxuICAgIGlmIChsYXN0RGFzaEluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgbGNhc2VQcm9wZXJ0eU5hbWUgPSBsY2FzZVByb3BlcnR5TmFtZS5zdWJzdHJpbmcobGFzdERhc2hJbmRleCArIDEsIGxjYXNlUHJvcGVydHlOYW1lLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGxjYXNlUHJvcGVydHlOYW1lKSB7XHJcbiAgICAgICAgY2FzZSAnYm9sZCc6XHJcbiAgICAgICAgY2FzZSAnaXRhbGljJzpcclxuICAgICAgICBjYXNlICd1bmRlcmxpbmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gUHJvcGVydHlWYWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnO1xyXG4gICAgICAgIGNhc2UgJ3dpZHRoJzpcclxuICAgICAgICBjYXNlICdoZWlnaHQnOlxyXG4gICAgICAgICAgICByZXR1cm4gUHJvcGVydHlWYWx1ZS5yZXBsYWNlKCclJywgJycpO1xyXG4gICAgICAgIGNhc2UgJ3NpemUnOlxyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoUHJvcGVydHlWYWx1ZSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFByb3BlcnR5VmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwiZGVjbGFyZSBjb25zdCBBY3RpdmVYT2JqZWN0OiBhbnk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlWE1MRnJvbVN0cmluZyhzWE1MOiBzdHJpbmcpIHtcclxuICAgIHZhciBkb2MgPSBudWxsO1xyXG5cclxuICAgIGlmICh3aW5kb3dbJ0FjdGl2ZVhPYmplY3QnXSAmJiAoZ2lneWEubG9jYWxJbmZvLmlzSUU4IHx8IGdpZ3lhLmxvY2FsSW5mby5pc0lFOSkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkb2MgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTERPTScpO1xyXG4gICAgICAgICAgICBkb2MuYXN5bmMgPSAnZmFsc2UnO1xyXG4gICAgICAgICAgICBkb2MubG9hZFhNTChzWE1MKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLmxvZy5hZGRMb2coJ0ZhaWxlZCB0byBjcmVhdGUgTWljcm9zb2Z0LlhNTERPTSBBY3RpdmVYIHBhcnNlcicsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHNYTUwsICd0ZXh0L3htbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkb2M7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENvcHlQcm9wZXJ0aWVzKHByb3BCYWc6IE9iamVjdCwgdGFyZ2V0QmFnOiBPYmplY3QsIHBmeDogc3RyaW5nLCBQcm9jY2Vzb3IpIHtcclxuICAgIGlmICh0eXBlb2YgcGZ4ID09ICd1bmRlZmluZWQnKSBwZnggPSAnJztcclxuICAgIGlmICh0eXBlb2YgdGFyZ2V0QmFnID09ICd1bmRlZmluZWQnKSB0YXJnZXRCYWcgPSB7fTtcclxuICAgIGlmIChQcm9jY2Vzb3IgIT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lMSBpbiBwcm9wQmFnKSB7XHJcbiAgICAgICAgICAgIHRhcmdldEJhZ1twZnggKyBwcm9wTmFtZTFdID0gUHJvY2Nlc29yKHByb3BOYW1lMSwgcHJvcEJhZ1twcm9wTmFtZTFdKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lMiBpbiBwcm9wQmFnKSB7XHJcbiAgICAgICAgICAgIHRhcmdldEJhZ1twZnggKyBwcm9wTmFtZTJdID0gcHJvcEJhZ1twcm9wTmFtZTJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXRCYWc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENvbGxlY3RBdHRyaWJ1dGVzRnJvbVhNTFBhdGhUb09iamVjdChcclxuICAgIHhtbG9ialJlc291cmNlOiBhbnksXHJcbiAgICBSZXNvdXJjZU5vZGVQYXRoU2VnbWVudHM6IHN0cmluZyxcclxuICAgIHJlczogT2JqZWN0LFxyXG4gICAgYmxuQ29sbGVjdEZyb21BbmNlc3RvcnM6IGJvb2xlYW4sXHJcbiAgICBwcm9jZXNzb3IsXHJcbik6IHZvaWQge1xyXG4gICAgZm9yICh2YXIgaVBhdGhTZWdtZW50ID0gMDsgaVBhdGhTZWdtZW50IDwgUmVzb3VyY2VOb2RlUGF0aFNlZ21lbnRzLmxlbmd0aCAmJiB0eXBlb2YgeG1sb2JqUmVzb3VyY2UgIT0gJ3VuZGVmaW5lZCc7IGlQYXRoU2VnbWVudCsrKSB7XHJcbiAgICAgICAgeG1sb2JqUmVzb3VyY2UgPSB4bWxvYmpSZXNvdXJjZS5jaGlsZE5vZGVzW1Jlc291cmNlTm9kZVBhdGhTZWdtZW50c1tpUGF0aFNlZ21lbnRdXTtcclxuICAgICAgICBpZiAoeG1sb2JqUmVzb3VyY2UgIT0gbnVsbCAmJiBibG5Db2xsZWN0RnJvbUFuY2VzdG9ycykge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlQcm9wZXJ0aWVzKHhtbG9ialJlc291cmNlLmF0dHJpYnV0ZXMsIHJlcywgJycsIHByb2Nlc3Nvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgeG1sb2JqUmVzb3VyY2UgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aGlzLkNvcHlQcm9wZXJ0aWVzKHhtbG9ialJlc291cmNlLmF0dHJpYnV0ZXMsIHJlcywgJycsIHByb2Nlc3Nvcik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTm9kZXMoc3JjTm9kZTogTm9kZSwgdGFyZ2V0T2JqZWN0OiBhbnkpIHtcclxuICAgIGlmICh0eXBlb2YgdGFyZ2V0T2JqZWN0LmF0dHJpYnV0ZXMgPT0gJ3VuZGVmaW5lZCcpIHRhcmdldE9iamVjdC5hdHRyaWJ1dGVzID0ge307XHJcbiAgICBpZiAodHlwZW9mIHRhcmdldE9iamVjdC5jaGlsZE5vZGVzID09ICd1bmRlZmluZWQnKSB0YXJnZXRPYmplY3QuY2hpbGROb2RlcyA9IHt9O1xyXG5cclxuICAgIHZhciB0YXJnZXRBdHRyaWJ1dGVzID0gdGFyZ2V0T2JqZWN0LmF0dHJpYnV0ZXM7XHJcbiAgICB2YXIgc3JjTm9kZUF0dHJpYnV0ZXMgPSAoc3JjTm9kZSBhcyBhbnkpLmF0dHJpYnV0ZXM7XHJcbiAgICAvKiBmb3IgKHZhciBhdHROYW1lIGluIHNyY05vZGVBdHRyaWJ1dGVzKSB7XHJcblx0XHR0YXJnZXRBdHRyaWJ1dGVzW2F0dE5hbWVdID0gc3JjTm9kZUF0dHJpYnV0ZXNbYXR0TmFtZV07XHJcblx0XHR9Ki9cclxuXHJcbiAgICBpZiAoc3JjTm9kZUF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAvL3RoaXMuQ29weUF0dHJpYnV0ZXNUb09iamVjdChzcmNOb2RlQXR0cmlidXRlcywgdGFyZ2V0QXR0cmlidXRlcywgJycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3JjTm9kZUF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNyY05vZGVBdHRyaWJ1dGVzW2ldLnZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZXNbc3JjTm9kZUF0dHJpYnV0ZXNbaV0ubm9kZU5hbWVdID0gc3JjTm9kZUF0dHJpYnV0ZXNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRBdHRyaWJ1dGVzW3NyY05vZGVBdHRyaWJ1dGVzW2ldLm5vZGVOYW1lXSA9IHNyY05vZGVBdHRyaWJ1dGVzW2ldLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciB0YXJnZXRDaGlsZE5vZGU7XHJcbiAgICBmb3IgKHZhciB1ID0gMDsgdSA8IHNyY05vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IHUrKykge1xyXG4gICAgICAgIC8vYWRkIG1pc3NpbmcgY2hpbGQgbm9kZXNcclxuICAgICAgICB2YXIgc3JjQ2hpbGROb2RlID0gc3JjTm9kZS5jaGlsZE5vZGVzW3VdO1xyXG4gICAgICAgIHRhcmdldENoaWxkTm9kZSA9IHRhcmdldE9iamVjdC5jaGlsZE5vZGVzW3NyY0NoaWxkTm9kZS5ub2RlTmFtZV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRDaGlsZE5vZGUgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGFyZ2V0Q2hpbGROb2RlID0gdGFyZ2V0T2JqZWN0LmNoaWxkTm9kZXNbc3JjQ2hpbGROb2RlLm5vZGVOYW1lXSA9IHsgYXR0cmlidXRlczoge30sIGNoaWxkTm9kZXM6IHt9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVyZ2VOb2RlcyhzcmNDaGlsZE5vZGUsIHRhcmdldENoaWxkTm9kZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0T2JqZWN0O1xyXG59XHJcbiIsImltcG9ydCB7IG1lcmdlTm9kZXMsIENvbGxlY3RBdHRyaWJ1dGVzRnJvbVhNTFBhdGhUb09iamVjdCwgQ3JlYXRlWE1MRnJvbVN0cmluZyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMveG1sL3htbCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZXIocHJvY2Nlc3NvcjogYW55KSB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25zID0gW107XHJcbiAgICB0aGlzLm1lcmdlZENvbmZpZyA9IHt9O1xyXG4gICAgdGhpcy5pc01lcmdlZCA9IHRydWU7XHJcbiAgICB0aGlzLl9wcm9jZXNzb3IgPSBwcm9jY2Vzc29yO1xyXG4gICAgdGhpcy5tZXJnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc01lcmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1lcmdlZENvbmZpZyA9IHsgYXR0cmlidXRlczoge30sIGNoaWxkTm9kZXM6IHt9IH07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25maWd1cmF0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhtbERvYyA9IHRoaXMuY29uZmlndXJhdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICBtZXJnZU5vZGVzKHhtbERvYywgdGhpcy5tZXJnZWRDb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNNZXJnZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLlJlc29sdmUgPSBmdW5jdGlvbihhciwgcikge1xyXG4gICAgICAgIGlmICh0aGlzLm1lcmdlKSB0aGlzLm1lcmdlKCk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXMgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IGFyZ3VtZW50cy5sZW5ndGg7IHUrKykge1xyXG4gICAgICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzW3VdO1xyXG4gICAgICAgICAgICB2YXIgY3RvciA9IGFyZy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgaWYgKGN0b3IgPT0gU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJQYXRocyA9IGFyZy5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGFyUGF0aHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IHRoaXMudHJpbUNoYXJzQXRTdWZmaXgodGhpcy50cmltQ2hhcnNBdFByZWZpeChhclBhdGhzW2ldLCAnIFxcblxcclxcdCcpLCAnIFxcblxcclxcdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWN1ciA9IHBhdGguY2hhckF0KDApID09ICcrJztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJQYXRoID0gcGF0aC5zcGxpdCgnLycpLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWN1cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBDb2xsZWN0QXR0cmlidXRlc0Zyb21YTUxQYXRoVG9PYmplY3QodGhpcy5tZXJnZWRDb25maWcsIGFyUGF0aCwgcmVzLCByZWN1ciwgdGhpcy5fcHJvY2Vzc29yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdG9yID09IEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGFyZy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVzb2x2ZShhcmdbbl0sIHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50cmltQ2hhcnNBdFByZWZpeCA9IGZ1bmN0aW9uKHMsIGNoYXJzKSB7XHJcbiAgICAgICAgdmFyIGlkeCA9IDA7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzID09ICd1bmRlZmluZWQnIHx8IHMubGVuZ3RoID09IDApIHJldHVybiAnJztcclxuICAgICAgICB2YXIgc2wgPSBzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoaWR4IDw9IHNsICYmIGNoYXJzLmluZGV4T2Yocy5jaGFyQXQoaWR4KSkgPiAtMSkge1xyXG4gICAgICAgICAgICBpZHgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHMuc3Vic3RyaW5nKGlkeCwgc2wpO1xyXG4gICAgfTtcclxuICAgIHRoaXMudHJpbUNoYXJzQXRTdWZmaXggPSBmdW5jdGlvbihzLCBjaGFycykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcyA9PSAndW5kZWZpbmVkJyB8fCBzLmxlbmd0aCA9PSAwKSByZXR1cm4gJyc7XHJcbiAgICAgICAgdmFyIGlkeCA9IHMubGVuZ3RoIC0gMTtcclxuICAgICAgICB3aGlsZSAoaWR4ID49IDAgJiYgY2hhcnMuaW5kZXhPZihzLmNoYXJBdChpZHgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGlkeC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgaWR4ICsgMSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hZGRDb25maWcgPSBmdW5jdGlvbihzWE1MKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzWE1MID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMucHVzaChDcmVhdGVYTUxGcm9tU3RyaW5nKHNYTUwpKTtcclxuICAgICAgICAgICAgdGhpcy5pc01lcmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLmdldFRleHRGcm9tS2V5ID0gZnVuY3Rpb24odGV4dEtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlJlc29sdmUoJy9jb25maWcvbGFuZy8nICsgdGV4dEtleSlbJ3RleHQnXTtcclxuICAgIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIGxlZ2FjeSBtb2RhbCAqL1xcclxcblxcclxcbmRpdi5naWd5YS1zY3JlZW4tZGlhbG9nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHRvcDogMjVweDtcXHJcXG4gICAgbGVmdDogMjVweDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgI0NDQ0NDQztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1pbm5lciB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBQUFBQUE7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWNsb3NlIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XFxyXFxuICAgIGhlaWdodDogMzNweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7aW1nQmFzZX0vYWNjb3VudHMvY2xvc2VfZGlhbG9nLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctY2FwdGlvbiB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxufVxcclxcblxcclxcbmRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLW1vYmlsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy10b3Age1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB6b29tOiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xcclxcbiAgICBsaW5lLWhlaWdodDogMzNweDtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTFweDtcXHJcXG59XFxyXFxuXFxyXFxuI2dpZ3lhLXNjcmVlbi1kaWFsb2ctcGFnZS1vdmVybGF5IHtcXHJcXG4gICAgICAgIHdpZHRoIDogMTAwdnc7XFxyXFxuICAgICAgICBoZWlnaHQgOiAxMDB2aDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQgOiBibGFjaztcXHJcXG4gICAgICAgIHBvc2l0aW9uIDogZml4ZWQ7XFxyXFxuICAgICAgICB0b3AgOiAwO1xcclxcbiAgICAgICAgbGVmdCA6IDA7XFxyXFxuICAgICAgICB6LWluZGV4IDogLTE7XFxyXFxuICAgICAgICBmaWx0ZXIgOiBhbHBoYShvcGFjaXR5PTIwKTtcXHJcXG4gICAgICAgIG9wYWNpdHkgOiAwLjI7XFxyXFxuICAgIH1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKm1vZGVybiBtb2RhbCovXFxyXFxuLmdpZ3lhLXN0eWxlLW1vZGVybiAjZ2lneWEtc2NyZWVuLWRpYWxvZy1wYWdlLW92ZXJsYXkge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLXN0eWxlLW1vZGVybiBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1tYWluIHtcXHJcXG4gICAgYm9yZGVyOiAwLjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDk5dmg7XFxyXFxuICAgIG1heC13aWR0aDogOTl2dztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zdHlsZS1tb2Rlcm4gZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctdG9wIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgem9vbTogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzNzFCOTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDExcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLXN0eWxlLW1vZGVybiBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1jbG9zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGluaXRpYWw7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGluaXRpYWw7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBpbml0aWFsO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLXN0eWxlLW1vZGVybiBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1jbG9zZSA+IGEgPiBpbWcge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtc3R5bGUtbW9kZXJuIGRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb24ge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtc3R5bGUtbW9kZXJuIGRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWlubmVyIHtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBtaW4td2lkdGg6IDMycHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtc3R5bGUtbW9kZXJuIGRpdi5naWd5YS1zY3JlZW4tZGltbWVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zdHlsZS1tb2Rlcm4gZGl2LmdpZ3lhLXNjcmVlbi1sb2FkZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcXFwiJHtpbWdCYXNlfS9hY2NvdW50cy9iaWdMb2FkZXIuZ2lmXFxcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XFxyXFxuICAgIG1pbi13aWR0aDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLXN0eWxlLW1vZGVybi5naWd5YS1zY3JlZW4tZGlhbG9nIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zdHlsZS1tb2Rlcm4uZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLXN0eWxlLW1vZGVybi5naWd5YS1zY3JlZW4tZGlhbG9nLW1vYmlsZSBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1tYWluIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluaXRpYWw7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtc3R5bGUtbW9kZXJuLmdpZ3lhLXNjcmVlbi1kaWFsb2ctbW9iaWxlIGRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLXRvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtc3R5bGUtbW9kZXJuLmdpZ3lhLXNjcmVlbi1kaWFsb2ctbW9iaWxlIGRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zdHlsZS1tb2Rlcm4uZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUgZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctY2xvc2UgPiBhID4gaW1nIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtc3R5bGUtbW9kZXJuLmdpZ3lhLXNjcmVlbi1kaWFsb2ctbW9iaWxlIGRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI3cHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1zdHlsZS1tb2Rlcm4uZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUgZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctaW5uZXIgPiBkaXYge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLXN0eWxlLW1vZGVybi5naWd5YS1pb3MuZ2lneWEtc2NyZWVuLWRpYWxvZywgLmdpZ3lhLXN0eWxlLW1vZGVybi5naWd5YS1pb3MuZ2lneWEtc2NyZWVuLWRpYWxvZy5naWd5YS1pb3MtdjcuZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUgZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctdG9wIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtc3R5bGUtbW9kZXJuLmdpZ3lhLWFuZHJvaWQuZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLXN0eWxlLW1vZGVybi5naWd5YS1pZTggI2dpZ3lhLXNjcmVlbi1kaWFsb2ctcGFnZS1vdmVybGF5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbC5naWd5YS1tb2JpbGUtbW9kYWwtbW9kZSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbmh0bWwuZ2lneWEtbW9iaWxlLW1vZGFsLW1vZGUgYm9keSB7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UHJvY2Nlc3NvcihQcm9wZXJ0eU5hbWUsIFByb3BlcnR5VmFsdWUpIHtcclxuICAgIHZhciBsY2FzZVByb3BlcnR5TmFtZSA9IFByb3BlcnR5TmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFyIGxhc3REYXNoSW5kZXggPSBsY2FzZVByb3BlcnR5TmFtZS5pbmRleE9mKCctJyk7XHJcbiAgICBpZiAobGFzdERhc2hJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGxjYXNlUHJvcGVydHlOYW1lID0gbGNhc2VQcm9wZXJ0eU5hbWUuc3Vic3RyaW5nKGxhc3REYXNoSW5kZXggKyAxLCBsY2FzZVByb3BlcnR5TmFtZS5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChsY2FzZVByb3BlcnR5TmFtZSkge1xyXG4gICAgICAgIGNhc2UgJ2JvbGQnOlxyXG4gICAgICAgIGNhc2UgJ2l0YWxpYyc6XHJcbiAgICAgICAgY2FzZSAndW5kZXJsaW5lJzpcclxuICAgICAgICAgICAgcmV0dXJuIFByb3BlcnR5VmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnd2lkdGgnOlxyXG4gICAgICAgIGNhc2UgJ2hlaWdodCc6XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9wZXJ0eVZhbHVlLnJlcGxhY2UoJyUnLCAnJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NpemUnOlxyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoUHJvcGVydHlWYWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9wZXJ0eVZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElCYXNlT2JqZWN0UGFyYW0sIEJhc2VPYmplY3QgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvQmFzZU9iamVjdC9CYXNlT2JqZWN0JztcclxuaW1wb3J0IHsgRXZlbnRXcmFwcGVyIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0Jhc2VPYmplY3QvRXZlbnRXcmFwcGVyJztcclxuXHJcbi8qIENVUlJFTlRMWSBJTkFDVElWRSEhISB0byBhY3RpdmF0ZSwgZ28gdG8gX3JlZmVybmNlcy50cyAgKi9cclxuXHJcbmNvbnN0IEJhc2VPYmplY3RHbG9iYWwgPSBnaWd5YS5fLkJhc2VPYmplY3QgYXMgdHlwZW9mIEJhc2VPYmplY3Q7XHJcbmV4cG9ydCBjbGFzcyBBc3luY01hbmFnZXIgZXh0ZW5kcyBCYXNlT2JqZWN0R2xvYmFsPElCYXNlT2JqZWN0UGFyYW0+IHtcclxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEFycmF5PEZ1bmN0aW9uPiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHVuZGVmaW5lZCwgZmFsc2UgYXMgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZXZlbnROYW1lcyA9IHtcclxuICAgICAgICBvbkFjdGlvblJlZ2lzdGVyOiAnb25BY3Rpb25SZWdpc3RlcicsXHJcbiAgICAgICAgb25BY3Rpb25VblJlZ2lzdGVyOiAnb25BY3Rpb25VblJlZ2lzdGVyJyxcclxuICAgICAgICBvbk5vQWN0aW9uc1BlbmRpbmc6ICdvbk5vQWN0aW9uc1BlbmRpbmcnLFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgb25BY3Rpb25SZWdpc3RlckV2ZW50KCk6IEV2ZW50V3JhcHBlcjwoKSA9PiB2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnQoQXN5bmNNYW5hZ2VyLl9ldmVudE5hbWVzLm9uQWN0aW9uUmVnaXN0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkFjdGlvblVuUmVnaXN0ZXJFdmVudCgpOiBFdmVudFdyYXBwZXI8KCkgPT4gdm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEV2ZW50KEFzeW5jTWFuYWdlci5fZXZlbnROYW1lcy5vbkFjdGlvblVuUmVnaXN0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk5vQWN0aW9uc1BlbmRpbmdFdmVudCgpOiBFdmVudFdyYXBwZXI8KCkgPT4gdm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEV2ZW50KEFzeW5jTWFuYWdlci5fZXZlbnROYW1lcy5vbk5vQWN0aW9uc1BlbmRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXIoZnVuYzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zLnB1c2goZnVuYyk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEFzeW5jTWFuYWdlci5fZXZlbnROYW1lcy5vbkFjdGlvblJlZ2lzdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVucmVnaXN0ZXIoZnVuYzogRnVuY3Rpb24pIHtcclxuICAgICAgICBnaWd5YS51dGlscy5hcnJheS5yZW1vdmVCeVZhbHVlKHRoaXMuX2FjdGlvbnMsIGZ1bmMpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChBc3luY01hbmFnZXIuX2V2ZW50TmFtZXMub25BY3Rpb25VblJlZ2lzdGVyKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHRoaXMuZGlzcGF0Y2hFdmVudChBc3luY01hbmFnZXIuX2V2ZW50TmFtZXMub25Ob0FjdGlvbnNQZW5kaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbChmdW5jOiAocGFyYW1zOiBPYmplY3QpID0+IGFueSwgcGFyYW1zOiBPYmplY3QsIGNhbGxiYWNrRmllbGQgPSAnY2FsbGJhY2snKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcihmdW5jKTtcclxuXHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQ2IgPSBwYXJhbXNbY2FsbGJhY2tGaWVsZF0gYXMgRnVuY3Rpb247XHJcblxyXG4gICAgICAgIHBhcmFtc1tjYWxsYmFja0ZpZWxkXSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxDYiA9PSAnZnVuY3Rpb24nKSBvcmlnaW5hbENiLmNhbGwodGhpcywgYXJncyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXIoZnVuYyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuYyhwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0FjdGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9ucyAmJiB0aGlzLl9hY3Rpb25zLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSURpc3Bvc2FibGUgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9pbnRlcmZhY2VzL0lEaXNwb3NhYmxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkRGltbWVyIGltcGxlbWVudHMgSURpc3Bvc2FibGUge1xyXG4gICAgcHJpdmF0ZSBfaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2RpbW1lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9kaW1tZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLl9kaW1tZXIuY2xhc3NOYW1lID0gJ2dpZ3lhLXNjcmVlbi1kaW1tZXInO1xyXG5cclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLl9sb2FkZXIuY2xhc3NOYW1lID0gJ2dpZ3lhLXNjcmVlbi1sb2FkZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmRlYnVnKGBzaG93aW5nIGxvYWRpbmcgaW5kaWNhdGlvbmApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50T3ZlckNvbnRhaW5lcih0aGlzLl9kaW1tZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRPdmVyQ29udGFpbmVyKHRoaXMuX2xvYWRlcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RpbW1lciwgdGhpcy5fY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2xvYWRlciwgdGhpcy5fY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEVsZW1lbnRPdmVyQ29udGFpbmVyKGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHZhciBwb3MgPSAoZ2lneWEuZ2xvYmFsIGFzIGFueSkuZ2V0UG9zKHRoaXMuX2NvbnRhaW5lcik7IC8vIFRPRE86IHJlbW92ZSBjYXN0XHJcblxyXG4gICAgICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5fY29udGFpbmVyLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9jb250YWluZXIub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAnJyArIGdpZ3lhLnV0aWxzLkRPTS5nZXROZXh0WkluZGV4KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQWN0aXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmRlYnVnKGBoaWRpbmcgbG9hZGluZyBpbmRpY2F0aW9uYCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVubGlua0VsZW1lbnQodGhpcy5fbG9hZGVyKTtcclxuICAgICAgICAgICAgdGhpcy51bmxpbmtFbGVtZW50KHRoaXMuX2RpbW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5saW5rRWxlbWVudChlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWwgJiYgZWwucGFyZW50Tm9kZSkgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0lNb2RhbERpYWxvZ1BhcmFtc30gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lNb2RhbERpYWxvZ1BhcmFtcyc7XHJcbmltcG9ydCB7XHJcbiAgICBJRGlhbG9nQ2xhc3NlcyxcclxuICAgIGxlZ2FjeURpYWxvZ0NsYXNzZXMsXHJcbiAgICBkaWFsb2dDbGFzc2VzXHJcbn0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL01vZGFsRGlhbG9nQ2xhc3Nlcyc7XHJcbmltcG9ydCB7TG9hZERpbW1lcn0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL0xvYWREaW1tZXInO1xyXG5pbXBvcnQge0lCYXNlT2JqZWN0Q29uZmlnfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvQmFzZU9iamVjdC9JQmFzZU9iamVjdENvbmZpZyc7XHJcbmltcG9ydCB7SUVsZW1lbnRTaXplfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvSW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7Z2V0U3R5bGV9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0U3ByaXRlcyc7XHJcbmltcG9ydCB7Q2xvc2VSZWFzb25zfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Nsb3NlUmVhc29ucyc7XHJcbmltcG9ydCB7YWRkQ3NzfSBmcm9tICcuLi9VdGlscy9VSS9sYXlvdXRDc3NGaXhlclV0aWxzJztcclxuXHJcbmNvbnN0IE1PREFMX0NPTlRFTlRfQ09OVEFJTkVSX0lEID0gJ2dpZ3lhLW1vZGFsLXBsdWdpbi1jb250YWluZXInO1xyXG5cclxuY29uc3QgQmFzZU9iamVjdEdsb2JhbCA9IGdpZ3lhLl8uQmFzZU9iamVjdCBhcyB0eXBlb2YgZ2lneWEuXy5CYXNlT2JqZWN0O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsRGlhbG9nIGV4dGVuZHMgQmFzZU9iamVjdEdsb2JhbDxJTW9kYWxEaWFsb2dQYXJhbXM+IHtcclxuICAgIHByaXZhdGUgX2RpYWxvZ0NsYXNzZXM6IElEaWFsb2dDbGFzc2VzO1xyXG5cclxuICAgIHByaXZhdGUgX2FsbENvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9tYWluQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2NhcHRpb25Db250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfY29udGVudENvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jbG9zZUJ1dHRvbkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogTG9hZERpbW1lcjtcclxuXHJcbiAgICBwcml2YXRlIG9uV2luZG93UmVzaXplRXZlbnQgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XHJcblxyXG4gICAgLy8gRXZlbnRzXHJcblxyXG4gICAgcHVibGljIG9uQWZ0ZXJDZW50ZXJFdmVudCgpOiBnaWd5YS5fLkV2ZW50V3JhcHBlcjwoKSA9PiB2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnQoJ29uQWZ0ZXJNb2RhbENlbnRlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90cmlnZ2VyTWV0aG9kOiBzdHJpbmcsIHB1YmxpYyBpc01vYmlsZVVJLCBwYXJhbXM6IElNb2RhbERpYWxvZ1BhcmFtcywgcHVibGljIGlzTGVnYWN5OiBib29sZWFuID0gZmFsc2UsIGhpZGU/OiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZGlhbG9nQ2xhc3NlcyA9IHRoaXMuaXNMZWdhY3kgPyBsZWdhY3lEaWFsb2dDbGFzc2VzIDogZGlhbG9nQ2xhc3NlcztcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGUoaGlkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZygpOiBJQmFzZU9iamVjdENvbmZpZzxJTW9kYWxEaWFsb2dQYXJhbXM+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZWZhdWx0UGFyYW1zOiB7fSxcclxuICAgICAgICAgICAgcmVxdWlyZWRQYXJhbXM6IFsnbW9kYWxUZW1wbGF0ZSddLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dBbGwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9hbGxDb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jZW50ZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy5fZGlhbG9nQ2xhc3Nlcy5kb2N1bWVudF9tb2JpbGUpO1xyXG5cclxuICAgICAgICB0aGlzLl9hbGxDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHJcbiAgICAgICAgLy8gV0NBRzogRm9jdXMgZGlhbG9nIGJ1dCBub3QgYW55IHNwZWNpZmljIGVsZW1lbnQgd2l0aGluIHRoZSBkaWFsb2cuXHJcbiAgICAgICAgLy8gICAgICAgSWYgYSBzcGVjaWZpYyBlbGVtZW50IGlzIGZvY3VzZWQsIHRoZSBzY3JlZW4tcmVhZGVyIHdpbGwgbm90IHJlYWQgYW55IHRleHQgcHJpb3IgdG8gaXQuXHJcbiAgICAgICAgLy8gICAgICAgSWYgdGhlIGZpcnN0IGZvcm0gZWxlbWVudCBpcyBmb2N1c2VkIGFuZCBpdCdzIGEgdGV4dCBpbnB1dCB3aXRoIGEgcGxhY2Vob2xkZXIsIG9sZCBJRSB2ZXJzaW9ucyB3aWxsIGhpZGUgdGhlIHBsYWNlaG9sZGVyIHRleHQuXHJcbiAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLmZvY3VzKCk7XHJcblxyXG4gICAgICAgIGdpZ3lhLnV0aWxzLnRhYmJhYmxlLmJpbmRUYWJMb29waW5nKHRoaXMuZ2V0TW9kYWxEaWFsb2dDb250YWluZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVBbGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FsbENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9hbGxDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVXaW5kb3dSZXNpemVMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLl9kaWFsb2dDbGFzc2VzLmRvY3VtZW50X21vYmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnRhYmJhYmxlLnVuYmluZFRhYkxvb3BpbmcodGhpcy5fY29udGVudENvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93TWFpbkRpYWxvZygpIHtcclxuICAgICAgICBpZiAodGhpcy5fbWFpbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9tYWluQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlTWFpbkRpYWxvZygpIHtcclxuICAgICAgICBpZiAodGhpcy5fbWFpbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9tYWluQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJpbGUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0xvYWRpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZUxvYWRpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlVG9Nb2JpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLmNsYXNzTmFtZSA9IHRoaXMuX2RpYWxvZ0NsYXNzZXMuYWxsX21vYmlsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlVG9XZWIoKSB7XHJcbiAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLmNsYXNzTmFtZSA9IHRoaXMuX2RpYWxvZ0NsYXNzZXMuYWxsX3dlYjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNMb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIgJiYgdGhpcy5fbG9hZGVyLmlzQWN0aXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZShzaXplOiBJRWxlbWVudFNpemUpIHtcclxuICAgICAgICBpZiAoc2l6ZSkge1xyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuZGVidWcoYHJlc2l6aW5nIGFuZCBjZW50ZXJpbmcgbW9kYWwgZGlhbG9nYCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSgnaGVpZ2h0Jywgc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoJ21pbkhlaWdodCcsIHNpemUubWluSGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKCd3aWR0aCcsIHNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoJ21pbldpZHRoJywgc2l6ZS5taW5XaWR0aCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNlbnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5U3R5bGUocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgdGhpcy5fbWFpbkNvbnRhaW5lci5zdHlsZVtwcm9wZXJ0eV0gPSAnJztcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSkgdGhpcy5fbWFpbkNvbnRhaW5lci5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCkge1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemVFdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVXaW5kb3dSZXNpemVMaXN0ZW5lcigpIHtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplRXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkgdGhpcy5hZGp1c3RXaW5kb3dIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkanVzdFdpbmRvd0hlaWdodCgpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fYWxsQ29udGFpbmVyKS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNlbnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0V2luZG93SGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkV2luZG93UmVzaXplTGlzdGVuZXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzdG9yZUxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9hZGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICByZXN0b3JlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChnZXRTdHlsZSh0aGlzLl9hbGxDb250YWluZXIsICdwb3NpdGlvbicpID09ICdhYnNvbHV0ZScpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxlZ2FjeSdzIGNlbnRlci5cclxuICAgICAgICAgICAgICAgIHZhciBtaWRkbGVDZW50ZXIgPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRNaWRkbGVDZW50ZXIoKTtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dXaWR0aCA9IHRoaXMuX2FsbENvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dIZWlnaHQgPSB0aGlzLl9hbGxDb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dUb3AgPSBtaWRkbGVDZW50ZXIudG9wIC0gTWF0aC5mbG9vcihkaWFsb2dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dMZWZ0ID0gbWlkZGxlQ2VudGVyLmxlZnQgLSBNYXRoLnJvdW5kKGRpYWxvZ1dpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nVG9wIDwgMTApIGRpYWxvZ1RvcCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpYWxvZ0xlZnQgPCAxMCkgZGlhbG9nTGVmdCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLnN0eWxlLnRvcCA9IGRpYWxvZ1RvcCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxDb250YWluZXIuc3R5bGUubGVmdCA9IGRpYWxvZ0xlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZwID0gZ2lneWEudXRpbHMudmlld3BvcnQuZ2V0SW5uZXJTaXplKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wID0gTWF0aC5tYXgoMCwgKHZwLmggLSB0aGlzLl9hbGxDb250YWluZXIuY2xpZW50SGVpZ2h0KSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlZnQgPSBNYXRoLm1heCgwLCAodnAudyAtIHRoaXMuX2FsbENvbnRhaW5lci5jbGllbnRXaWR0aCkgLyAyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxDb250YWluZXIuc3R5bGUudG9wID0gdG9wLnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBsZWZ0LnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdG9yZUxvYWRpbmcpIHRoaXMuc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25BZnRlck1vZGFsQ2VudGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGUoaGlkZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgbmV3IGNvbnRhaW5lclxyXG4gICAgICAgIHZhciBtb2RhbElEID0gZ2lneWEudXRpbHMuRE9NLmdldENlbnRlcmVkRGl2SUQodGhpcy5fdHJpZ2dlck1ldGhvZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLm5ld01vZGFsKSBtb2RhbElEICs9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9hbGxDb250YWluZXIgPSBnaWd5YS51dGlscy5ET00uY3JlYXRlVG9wTGV2ZWxEaXYobW9kYWxJRCk7XHJcblxyXG4gICAgICAgIGlmIChoaWRlKSB0aGlzLmhpZGVBbGwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGFyYW1zLm1vZGFsVGVtcGxhdGUsIHtcclxuICAgICAgICAgICAgbW9kYWxJRDogbW9kYWxJRCxcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMucGFyYW1zLmNhcHRpb25UZXh0LFxyXG4gICAgICAgICAgICBjbG9zZUltYWdlOiB0aGlzLnBhcmFtcy5jbG9zZUltYWdlLFxyXG4gICAgICAgICAgICBvdmVybGF5RGlzcGxheTogIXRoaXMuaXNNb2JpbGVVSSAmJiB0aGlzLnBhcmFtcy5kaW1EaWFsb2dCYWNrZ3JvdW5kID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gV0NBRyBjb21wbGlhbmNlLlxyXG4gICAgICAgIHRoaXMuX2FsbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XHJcbiAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgYGdpZ3lhLXNjcmVlbi1kaWFsb2ctY2FwdGlvbi0ke21vZGFsSUR9YCk7XHJcbiAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcclxuXHJcbiAgICAgICAgYWRkQ3NzKHRoaXMucGFyYW1zLm1vZGFsQ3NzLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWFpbkNvbnRhaW5lciA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5fYWxsQ29udGFpbmVyLCB0aGlzLl9kaWFsb2dDbGFzc2VzLm1haW4pWzBdO1xyXG4gICAgICAgIHRoaXMuX2NhcHRpb25Db250YWluZXIgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuX21haW5Db250YWluZXIsIHRoaXMuX2RpYWxvZ0NsYXNzZXMuY2FwdGlvbilbMF07XHJcblxyXG4gICAgICAgIC8vIEFkZGluZyBtb2RhbCBldmVudHNcclxuICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbkVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuX21haW5Db250YWluZXIsIHRoaXMuX2RpYWxvZ0NsYXNzZXMuY2xvc2VCdXR0b24pWzBdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY2xvc2VCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2Nsb3NlQnV0dG9uRWxlbWVudCwgJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmRpc2FibGVEZWZhdWx0RXZlbnRIYW5kbGluZyhldmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVBbGwoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5vbk1vZGFsQ2xvc2UpIHRoaXMucGFyYW1zLm9uTW9kYWxDbG9zZShDbG9zZVJlYXNvbnMuY2FuY2VsZWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBwbHVnaW4gY29udGFpbmVyIGFuZCBhZGRpbmcgaXQgdG8gdGhlIG1vZGFsXHJcbiAgICAgICAgdGhpcy5fY29udGVudENvbnRhaW5lciA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5fbWFpbkNvbnRhaW5lciwgdGhpcy5fZGlhbG9nQ2xhc3Nlcy5jb250ZW50LCB0cnVlKVswXTtcclxuICAgICAgICB0aGlzLl9jb250ZW50Q29udGFpbmVyLmlkID0gTU9EQUxfQ09OVEVOVF9DT05UQUlORVJfSUQgKyAnLScgKyB0aGlzLl90cmlnZ2VyTWV0aG9kO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IG5ldyBMb2FkRGltbWVyKHRoaXMuX2NvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGhlIG1vZGFsIHRlbXBsYXRlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAvL2dpZ3lhLnV0aWxzLkRPTS5hZGREaWFsb2dCYWNrTGlzdGVuZXIoKCkgPT4geyB0aGlzLmNsb3NlKENsb3NlUmVhc29ucy5iYWNrQnV0dG9uKTsgfSk7IC8vIGNhbmNlbGVkIGJ5IGNsaWNraW5nIG9uIHRoZSBkaWFsb2cgY2xvc2UgYnV0dG9uIGF0IHRoZSB0b3BcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuX2FsbENvbnRhaW5lciwgdGhpcy5fZGlhbG9nQ2xhc3Nlcy5hbGxfbW9iaWxlKTtcclxuXHJcbiAgICAgICAgICAgIC8vLyByZW1vdmUgdGhpcyBhc2FwLlxyXG4gICAgICAgICAgICAvL3ZhciBib2R5U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTsgLy8vIHdlIGRvbid0IHN1cHBvcnQgbW9iaWxlIGluIGllOC5cclxuICAgICAgICAgICAgLy92YXIgb3V0ZXJIZWlnaHQgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCArIHBhcnNlSW50KGJvZHlTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLXRvcFwiKSkgKyBwYXJzZUludChib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmdpbi1ib3R0b21cIikpO1xyXG4gICAgICAgICAgICAvL3RoaXMuX2FsbENvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBvdXRlckhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuX2FsbENvbnRhaW5lciwgdGhpcy5fZGlhbG9nQ2xhc3Nlcy5hbGxfd2ViKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2VudGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1haW5Db250YWluZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb250ZW50Q29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2FwdGlvbkNvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcHRpb25Db250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1vZGFsRGlhbG9nQ29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWxsQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2FkaW5nSW5kaWNhdG9yKCk6IExvYWREaW1tZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQWxsKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hbGxDb250YWluZXIgJiYgdGhpcy5fYWxsQ29udGFpbmVyLnBhcmVudEVsZW1lbnQpIHRoaXMuX2FsbENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2FsbENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9sb2FkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhcmFtcztcclxuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nQ2xhc3NlcyB7XHJcbiAgICBkb2N1bWVudF9tb2JpbGU6IHN0cmluZztcclxuICAgIGFsbF93ZWI6IHN0cmluZztcclxuICAgIGFsbF9tb2JpbGU6IHN0cmluZztcclxuICAgIG1haW46IHN0cmluZztcclxuICAgIGNhcHRpb246IHN0cmluZztcclxuICAgIGNsb3NlQnV0dG9uOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHZhciBkaWFsb2dDbGFzc2VzOiBJRGlhbG9nQ2xhc3NlcyA9IHtcclxuICAgIGRvY3VtZW50X21vYmlsZTogJ2dpZ3lhLW1vYmlsZS1tb2RhbC1tb2RlJyxcclxuICAgIGFsbF93ZWI6ICdnaWd5YS1zY3JlZW4tZGlhbG9nJyxcclxuICAgIGFsbF9tb2JpbGU6ICdnaWd5YS1zY3JlZW4tZGlhbG9nLW1vYmlsZScgLyogY2FuJ3QgY29tYmluZSB0aGVzZSB0d28gdG8gb25lK21vYmlsZSBkZWNvcmF0b3IsIGJlY2F1c2Ugb2YgYmFja3dhcmRzIGNvbXBhdGFiaWxpdHkgKi8sXHJcbiAgICBtYWluOiAnZ2lneWEtc2NyZWVuLWRpYWxvZy1tYWluJyxcclxuICAgIGNhcHRpb246ICdnaWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb24nLFxyXG4gICAgY2xvc2VCdXR0b246ICdnaWd5YS1zY3JlZW4tZGlhbG9nLWNsb3NlJyxcclxuICAgIGNvbnRlbnQ6ICdnaWd5YS1zY3JlZW4tZGlhbG9nLWlubmVyJyxcclxufTtcclxuZXhwb3J0IHZhciBsZWdhY3lEaWFsb2dDbGFzc2VzOiBJRGlhbG9nQ2xhc3NlcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShkaWFsb2dDbGFzc2VzKTtcclxubGVnYWN5RGlhbG9nQ2xhc3Nlcy5tYWluID0gbGVnYWN5RGlhbG9nQ2xhc3Nlcy5jb250ZW50O1xyXG4iLCJpbXBvcnQgeyBJRGlzcG9zYWJsZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2ludGVyZmFjZXMvSURpc3Bvc2FibGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9sbGVyIGV4dGVuZHMgSURpc3Bvc2FibGUge1xyXG4gICAgYWRkQWN0aW9ucyguLi5hY3Rpb25zOiAoSVBvbGxlckFjdGlvbiB8IEZ1bmN0aW9uKVtdKTtcclxuICAgIGhhc0FjdGlvbnMoKTogYm9vbGVhbjtcclxuICAgIHN0YXJ0KGludGVydmFsOiBudW1iZXIsIGZvcmNlPzogYm9vbGVhbik7XHJcbiAgICBzdG9wKCk7XHJcbiAgICBpc1N0YXJ0ZWQoKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9sbGVyQWN0aW9uIGV4dGVuZHMgSURpc3Bvc2FibGUge1xyXG4gICAgYWN0OiAoKSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBjb25zdCBlbnVtIFBvbGxlclN0YXJ0UmVzdWx0IHtcclxuICAgIE9LLFxyXG4gICAgQWxyZWFkeVN0YXJ0ZWQsXHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvbGxlciBpbXBsZW1lbnRzIElQb2xsZXIge1xyXG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWxJRDogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogKElQb2xsZXJBY3Rpb24gfCBGdW5jdGlvbilbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2dlciA9IHR5cGVvZiBjb25zb2xlID09ICdvYmplY3QnICYmIGNvbnNvbGUubG9nID8gY29uc29sZS5sb2cgOiAoKSA9PiB7fSkge31cclxuXHJcbiAgICBwdWJsaWMgYWRkQWN0aW9ucyguLi5hY3Rpb25zOiAoSVBvbGxlckFjdGlvbiB8IEZ1bmN0aW9uKVtdKSB7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuYXJyYXkuZm9yRWFjaChhY3Rpb25zLCBhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzQWN0aW9ucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9ucy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydChpbnRlcnZhbDogbnVtYmVyLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBvbGxlclN0YXJ0UmVzdWx0LkFscmVhZHlTdGFydGVkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaGFzQWN0aW9ucyAmJiAhZm9yY2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ1BvbGxlciBoYXMgbm8gYWN0aW9ucyB0byBwZXJmb3JtIG9uIGludGVydmFsJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuYXJyYXkuZm9yRWFjaCh0aGlzLl9hY3Rpb25zLCBhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gaW5zdGFuY2VvZiBGdW5jdGlvbikgKGFjdGlvbiBhcyBGdW5jdGlvbikoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIChhY3Rpb24gYXMgSVBvbGxlckFjdGlvbikuYWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgaW50ZXJ2YWwpIGFzIGFueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ludGVydmFsSUQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElEKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2ludGVydmFsSUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1N0YXJ0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5faW50ZXJ2YWxJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5fYWN0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoISh0aGlzLl9hY3Rpb25zW2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmIHRoaXMuX2FjdGlvbnMuaGFzT3duUHJvcGVydHkoaSkpICh0aGlzLl9hY3Rpb25zW2ldIGFzIElQb2xsZXJBY3Rpb24pLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2FjdGlvbnM7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xvZ2dlcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJUG9sbGVyQWN0aW9uIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL1BvbGxlcic7XHJcbmltcG9ydCB7IElFbGVtZW50QWN0dWFsU2l6ZSwgSVZpZXdwb3J0U2l6ZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9JbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnZhbGlkUHJvcGVydHlBY3Rpb24gaW1wbGVtZW50cyBJUG9sbGVyQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX29iamVjdDogYW55LCBwcml2YXRlIF9wcm9wZXJ5OiBzdHJpbmcsIHB1YmxpYyBjYWxsYmFjazogKCkgPT4gdm9pZCkge31cclxuXHJcbiAgICBwdWJsaWMgYWN0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fb2JqZWN0W3RoaXMuX3Byb3BlcnldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX29iamVjdDtcclxuICAgICAgICBkZWxldGUgdGhpcy5jYWxsYmFjaztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgU2l6ZUNoYW5nZUFjdGlvbiBpbXBsZW1lbnRzIElQb2xsZXJBY3Rpb24ge1xyXG4gICAgcHJpdmF0ZSBfbGFzdDogSUVsZW1lbnRBY3R1YWxTaXplID0geyB3aWR0aDogdW5kZWZpbmVkLCBoZWlnaHQ6IHVuZGVmaW5lZCB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjYWxsYmFjazogKG9sZDogSUVsZW1lbnRBY3R1YWxTaXplLCBjdXJyOiBJRWxlbWVudEFjdHVhbFNpemUpID0+IHZvaWQpIHt9XHJcblxyXG4gICAgcHVibGljIGFjdCgpIHtcclxuICAgICAgICB2YXIgY3VycjogSUVsZW1lbnRBY3R1YWxTaXplID0gdGhpcy5nZXRDdXJyU2l6ZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0NoYW5nZWQodGhpcy5fbGFzdCwgY3VycikpIHRoaXMuY2FsbGJhY2sodGhpcy5fbGFzdCwgY3Vycik7XHJcblxyXG4gICAgICAgIHRoaXMuX2xhc3QgPSBjdXJyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRDdXJyU2l6ZSgpOiBJRWxlbWVudEFjdHVhbFNpemUge1xyXG4gICAgICAgIC8vLyBhYnN0cmFjdCAtIG92ZXJyaWRlIHRoaXMuXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLy8gVmlydHVhbFxyXG4gICAgcHJvdGVjdGVkIGlzQ2hhbmdlZChsYXN0OiBJRWxlbWVudEFjdHVhbFNpemUsIGN1cnI6IElFbGVtZW50QWN0dWFsU2l6ZSkge1xyXG4gICAgICAgIHJldHVybiBjdXJyLndpZHRoICE9IHRoaXMuX2xhc3Qud2lkdGggfHwgY3Vyci5oZWlnaHQgIT0gdGhpcy5fbGFzdC5oZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENvbnRhaW5lclNpemVBY3Rpb24gZXh0ZW5kcyBTaXplQ2hhbmdlQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGNhbGxiYWNrOiAob2xkOiBJRWxlbWVudEFjdHVhbFNpemUsIGN1cnI6IElFbGVtZW50QWN0dWFsU2l6ZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHN1cGVyKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0Q3VyclNpemUoKTogSUVsZW1lbnRBY3R1YWxTaXplIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5fY29udGFpbmVyICYmIHRoaXMuX2NvbnRhaW5lci5zdHlsZSA/IHRoaXMuX2NvbnRhaW5lci5jbGllbnRXaWR0aCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9jb250YWluZXIgJiYgdGhpcy5fY29udGFpbmVyLnN0eWxlID8gdGhpcy5fY29udGFpbmVyLmNsaWVudEhlaWdodCA6IHVuZGVmaW5lZCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydFNpemVBY3Rpb24gZXh0ZW5kcyBTaXplQ2hhbmdlQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrOiAob2xkOiBJVmlld3BvcnRTaXplLCBjdXJyOiBJVmlld3BvcnRTaXplKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgc3VwZXIoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRDdXJyU2l6ZSgpOiBJVmlld3BvcnRTaXplIHtcclxuICAgICAgICB2YXIgdmlld3BvcnQgPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRJbm5lclNpemUoKTtcclxuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB2aWV3cG9ydC53LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHZpZXdwb3J0LmgsXHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpc0NoYW5nZWQobGFzdDogSVZpZXdwb3J0U2l6ZSwgY3VycjogSVZpZXdwb3J0U2l6ZSkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5pc0NoYW5nZWQobGFzdCwgY3VycikgfHwgbGFzdC5vcmllbnRhdGlvbiAhPSBjdXJyLm9yaWVudGF0aW9uO1xyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJnaWd5YS1zY3JlZW4tZGlhbG9nLXBhZ2Utb3ZlcmxheVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6JHtvdmVybGF5RGlzcGxheX1cXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImdpZ3lhLXNjcmVlbi1kaWFsb2ctaW5uZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1zY3JlZW4tZGlhbG9nLXRvcFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb25cXFwiIGlkPVxcXCJnaWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb24tJHttb2RhbElEfVxcXCI+JHRpdGxlPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1zY3JlZW4tZGlhbG9nLWNsb3NlXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcImdpZ3lhLXNjcmVlbi1kaWFsb2ctcGFnZS1vdmVybGF5XFxcIiBzdHlsZT1cXFwiZGlzcGxheToke292ZXJsYXlEaXNwbGF5fVxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZ2lneWEtc2NyZWVuLWRpYWxvZy1tYWluXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtc2NyZWVuLWRpYWxvZy10b3BcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtc2NyZWVuLWRpYWxvZy1jYXB0aW9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgaWQ9XFxcImdpZ3lhLXNjcmVlbi1kaWFsb2ctY2FwdGlvbi0ke21vZGFsSUR9XFxcIj4kdGl0bGU8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLXNjcmVlbi1kaWFsb2ctY2xvc2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+JHtjbG9zZUltYWdlfTwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtc2NyZWVuLWRpYWxvZy1pbm5lclxcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aW1nIHNyYz1cXFwiJHtpbWdVcmx9XFxcIiBhbHQ9XFxcImNsb3NlXFxcIiBoZWlnaHQ9XFxcIiR7aW1nSGVpZ2h0fVxcXCIgd2lkdGg9XFxcIiR7aW1nV2lkdGh9XFxcIiAvPlxcclxcblwiOyIsImltcG9ydCAqIGFzIEJhc2VQbHVnaW4gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9CYXNlUGx1Z2luJztcclxuaW1wb3J0ICogYXMgSHRtbFJlc291cmNlcyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0h0bWxSZXNvdXJjZXMnO1xyXG5pbXBvcnQgKiBhcyBDc3NSZXNvdXJjZXMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9Dc3NSZXNvdXJjZXMnO1xyXG5pbXBvcnQgKiBhcyBDbG9zZVJlYXNvbnMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9DbG9zZVJlYXNvbnMnO1xyXG5pbXBvcnQgKiBhcyBQbHVnaW5TdHlsZXMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9QbHVnaW5TdHlsZXMnO1xyXG5pbXBvcnQgKiBhcyBwbHVnaW5UZXN0ZXIgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9wbHVnaW5UZXN0ZXInO1xyXG5pbXBvcnQgKiBhcyBDb2xsZWN0aW9uVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9Db2xsZWN0aW9uVXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBDc3NVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Nzc1V0aWxzJztcclxuaW1wb3J0ICogYXMgVVJMVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VUkxVdGlscyc7XHJcbmltcG9ydCAqIGFzIERPTVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvRE9NVXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBkZWZhdWx0UHJvY2Vzc29yIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvZGVmYXVsdFByb2Nlc3Nvcic7XHJcbmltcG9ydCAqIGFzIEFzeW5jTWFuYWdlciBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvQXN5bmNNYW5hZ2VyJztcclxuaW1wb3J0ICogYXMgTG9hZERpbW1lciBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvTG9hZERpbW1lcic7XHJcbmltcG9ydCAqIGFzIE1vZGFsRGlhbG9nIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaGVscGVycy9Nb2RhbERpYWxvZyc7XHJcbmltcG9ydCAqIGFzIE1vZGFsRGlhbG9nQ2xhc3NlcyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvTW9kYWxEaWFsb2dDbGFzc2VzJztcclxuaW1wb3J0ICogYXMgUG9sbGVyIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaGVscGVycy9Qb2xsZXInO1xyXG5pbXBvcnQgKiBhcyBQb2xsZXJBY3Rpb25zIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaGVscGVycy9Qb2xsZXJBY3Rpb25zJztcclxuaW1wb3J0ICogYXMgSU1vZGFsRGlhbG9nUGFyYW1zIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JTW9kYWxEaWFsb2dQYXJhbXMnO1xyXG5pbXBvcnQgKiBhcyBJUGx1Z2luQ29uZmlnIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ29uZmlnJztcclxuaW1wb3J0ICogYXMgSVBsdWdpbkNTUyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2ludGVyZmFjZXMvSVBsdWdpbkNTUyc7XHJcbmltcG9ydCAqIGFzIElQbHVnaW5QYXJhbXMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5QYXJhbXMnO1xyXG5pbXBvcnQgKiBhcyBJUGx1Z2luVGVtcGxhdGVzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luVGVtcGxhdGVzJztcclxuaW1wb3J0ICogYXMgR2lneWFHbG9iYWxEYXRlIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvZ2VuZXJhbC9kYXRlJztcclxuaW1wb3J0ICogYXMgYXJyYXlVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL2dlbmVyYWwvYXJyYXlVdGlscyc7XHJcbmltcG9ydCAqIGFzIG9iamVjdFV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvZ2VuZXJhbC9vYmplY3RVdGlscyc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhUGx1Z2luVXRpbHNMYW5nIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvbGFuZ3VhZ2VzL2xhbmd1YWdlJztcclxuaW1wb3J0ICogYXMgR2lneWFQbHVnaW5VdGlsc0FuaW1hdGlvbiBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2FuaW1hdGlvbic7XHJcbmltcG9ydCAqIGFzIGdsb2JhbEFuaW1hdGlvbiBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2dsb2JhbEFuaW1hdGlvbic7XHJcbmltcG9ydCAqIGFzIGFuaW1hdGlvblNlcnZpY2UgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9hbmltYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgRE9NIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvRE9NJztcclxuaW1wb3J0ICogYXMgR2xvYmFsRE9NIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvR2xvYmFsRE9NJztcclxuaW1wb3J0ICogYXMgRG9tQXR0cmlidXRlcyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL0RvbUF0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgKiBhcyBlbmFibGVTYWZlQ29weSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2VuYWJsZVNhZmVDb3B5JztcclxuaW1wb3J0ICogYXMgbGF5b3V0Q3NzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0Q3NzJztcclxuaW1wb3J0ICogYXMgbGF5b3V0VGV4dCBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2xheW91dFRleHQnO1xyXG5pbXBvcnQgKiBhcyBsYXlvdXRUZXh0Rml4ZXIgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRUZXh0Rml4ZXInO1xyXG5pbXBvcnQgKiBhcyBsYXlvdXRTcHJpdGVzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0U3ByaXRlcyc7XHJcbmltcG9ydCAqIGFzIGxheW91dENzc0ZpeGVyVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRDc3NGaXhlclV0aWxzJztcclxuaW1wb3J0ICogYXMgbGF5b3V0U3R5bGVzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0U3R5bGVzJztcclxuaW1wb3J0ICogYXMgcmVzb3VyY2VzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvcmVzb3VyY2VzJztcclxuaW1wb3J0ICogYXMgaW1hZ2VQb3NpdGlvbnMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9pbWFnZVBvc2l0aW9ucyc7XHJcbmltcG9ydCAqIGFzIFVJSGVscGVycyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL1VJSGVscGVycyc7XHJcbmltcG9ydCAqIGFzIFVJUG9wdXAgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9VSVBvcHVwJztcclxuaW1wb3J0ICogYXMgeG1sIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMveG1sL3htbCc7XHJcbmltcG9ydCAqIGFzIHhtbFJlc29sdmVyIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMveG1sL3htbFJlc29sdmVyJztcclxuaW1wb3J0ICogYXMgZGVmYXVsdFhtbFByb2Nlc3NvciBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL3htbC9kZWZhdWx0WG1sUHJvY2Vzc29yJztcclxuaW1wb3J0ICogYXMgZW1haWxWYWxpZGF0aW9uIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvdmFsaWRhdGlvbi9lbWFpbFZhbGlkYXRpb24nO1xyXG5pbXBvcnQgKiBhcyBpc0luRG9tYWluIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvdmFsaWRhdGlvbi9pc0luRG9tYWluJztcclxuaW1wb3J0ICogYXMgaXNFbWFpbCBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL3ZhbGlkYXRpb24vaXNFbWFpbCc7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvVUknO1xyXG5pbXBvcnQgJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvUGx1Z2luVXRpbHMwJztcclxuaW1wb3J0ICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2xheW91dDUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBnaWd5YTogYW55O1xyXG5pZiAoIWdpZ3lhLl8pIHtcclxuICAgIGdpZ3lhLl8gPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbCA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLmJhc2UpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbC5iYXNlID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLmJhc2UpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLmJhc2UgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy51dFV0aWxzKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMudXRVdGlscyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zLnV0aWxzKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy51dGlscy5Db2xsZWN0aW9ucykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLkNvbGxlY3Rpb25zID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMudXRpbHMuVVJMKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuVVJMID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMudXRpbHMuRE9NKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuRE9NID0ge307XHJcbn1cclxuaWYgKCF3aW5kb3dbJ3Jlc29sdmVyJ10pIHtcclxuICAgIHdpbmRvd1sncmVzb2x2ZXInXSA9IHt9O1xyXG59XHJcbmNvbnN0IHJlc29sdmVyID0gd2luZG93WydyZXNvbHZlciddO1xyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5tb2RhbCkge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLm1vZGFsID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucG9sbGVyQWN0aW9ucykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnBvbGxlckFjdGlvbnMgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLmdsb2JhbCkge1xyXG4gICAgZ2lneWEuZ2xvYmFsID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5nbG9iYWwuZGF0ZSkge1xyXG4gICAgZ2lneWEuZ2xvYmFsLmRhdGUgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnV0aWxzKSB7XHJcbiAgICBnaWd5YS51dGlscyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEudXRpbHMub2JqZWN0KSB7XHJcbiAgICBnaWd5YS51dGlscy5vYmplY3QgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnBsdWdpblV0aWxzKSB7XHJcbiAgICBnaWd5YS5wbHVnaW5VdGlscyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEucGx1Z2luVXRpbHMubGFuZykge1xyXG4gICAgZ2lneWEucGx1Z2luVXRpbHMubGFuZyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEucGx1Z2luVXRpbHMuYW5pbWF0aW9uKSB7XHJcbiAgICBnaWd5YS5wbHVnaW5VdGlscy5hbmltYXRpb24gPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnNlcnZpY2VzKSB7XHJcbiAgICBnaWd5YS5zZXJ2aWNlcyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuc2VydmljZXMuc29jaWFsaXplKSB7XHJcbiAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnBsdWdpblV0aWxzLkRPTSkge1xyXG4gICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS51dGlscy5ET00pIHtcclxuICAgIGdpZ3lhLnV0aWxzLkRPTSA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEucGx1Z2luVXRpbHMuY3NzKSB7XHJcbiAgICBnaWd5YS5wbHVnaW5VdGlscy5jc3MgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnBsdWdpblV0aWxzLmxheW91dCkge1xyXG4gICAgZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0ID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5wbHVnaW5VdGlscy50ZXh0KSB7XHJcbiAgICBnaWd5YS5wbHVnaW5VdGlscy50ZXh0ID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5nbG9iYWwuWE1MVXRpbHMpIHtcclxuICAgIGdpZ3lhLmdsb2JhbC5YTUxVdGlscyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuZ2xvYmFsLnJlc29sdmVyKSB7XHJcbiAgICBnaWd5YS5nbG9iYWwucmVzb2x2ZXIgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnBsdWdpblV0aWxzLnZhbGlkYXRpb24pIHtcclxuICAgIGdpZ3lhLnBsdWdpblV0aWxzLnZhbGlkYXRpb24gPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnBsdWdpblV0aWxzLmRvbWFpbikge1xyXG4gICAgZ2lneWEucGx1Z2luVXRpbHMuZG9tYWluID0ge307XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oXHJcbiAgICBnaWd5YS5fLnBsdWdpbnMsXHJcbiAgICBCYXNlUGx1Z2luLFxyXG4gICAgQ2xvc2VSZWFzb25zLFxyXG4gICAgUGx1Z2luU3R5bGVzLFxyXG4gICAgQXN5bmNNYW5hZ2VyLFxyXG4gICAgTG9hZERpbW1lcixcclxuICAgIElNb2RhbERpYWxvZ1BhcmFtcyxcclxuICAgIElQbHVnaW5Db25maWcsXHJcbiAgICBJUGx1Z2luQ1NTLFxyXG4gICAgSVBsdWdpblBhcmFtcyxcclxuICAgIElQbHVnaW5UZW1wbGF0ZXMsXHJcbik7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLmJhc2UsIEh0bWxSZXNvdXJjZXMpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLmJhc2UsIENzc1Jlc291cmNlcyk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnV0VXRpbHMsIHBsdWdpblRlc3Rlcik7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnV0aWxzLkNvbGxlY3Rpb25zLCBDb2xsZWN0aW9uVXRpbHMpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MsIENzc1V0aWxzLCBsYXlvdXRDc3NGaXhlclV0aWxzKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMudXRpbHMuVVJMLCBVUkxVdGlscywgVUlIZWxwZXJzKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMudXRpbHMuRE9NLCBET01VdGlscywgRG9tQXR0cmlidXRlcyk7XHJcbk9iamVjdC5hc3NpZ24ocmVzb2x2ZXIsIGRlZmF1bHRQcm9jZXNzb3IpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5tb2RhbCwgTW9kYWxEaWFsb2csIE1vZGFsRGlhbG9nQ2xhc3Nlcyk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXywgUG9sbGVyKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMucG9sbGVyQWN0aW9ucywgUG9sbGVyQWN0aW9ucyk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuZ2xvYmFsLmRhdGUsIEdpZ3lhR2xvYmFsRGF0ZSk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuZ2xvYmFsLCBhcnJheVV0aWxzLCBnbG9iYWxBbmltYXRpb24sIEdsb2JhbERPTSwgbGF5b3V0U3ByaXRlcywgaW1hZ2VQb3NpdGlvbnMsIHhtbFJlc29sdmVyLCBpc0VtYWlsKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS51dGlscy5vYmplY3QsIG9iamVjdFV0aWxzKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS5wbHVnaW5VdGlscy5sYW5nLCBHaWd5YVBsdWdpblV0aWxzTGFuZyk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEucGx1Z2luVXRpbHMuYW5pbWF0aW9uLCBHaWd5YVBsdWdpblV0aWxzQW5pbWF0aW9uKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUsIGFuaW1hdGlvblNlcnZpY2UsIGxheW91dFN0eWxlcywgVUlQb3B1cCk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEucGx1Z2luVXRpbHMuRE9NLCBET00pO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLnV0aWxzLkRPTSwgZW5hYmxlU2FmZUNvcHkpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLnBsdWdpblV0aWxzLmNzcywgbGF5b3V0Q3NzKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQsIGxheW91dFRleHQpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLnBsdWdpblV0aWxzLnRleHQsIGxheW91dFRleHRGaXhlcik7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcywgcmVzb3VyY2VzKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS5nbG9iYWwuWE1MVXRpbHMsIHhtbCk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuZ2xvYmFsLnJlc29sdmVyLCBkZWZhdWx0WG1sUHJvY2Vzc29yKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS5wbHVnaW5VdGlscy52YWxpZGF0aW9uLCBlbWFpbFZhbGlkYXRpb24pO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLnBsdWdpblV0aWxzLmRvbWFpbiwgaXNJbkRvbWFpbik7XHJcblxyXG5naWd5YS51dGlscy5vYmplY3QuYWRkKGdpZ3lhLnBsdWdpblV0aWxzLmxhbmcsIHtcclxuICAgIGdldERhdGVTdHJpbmc6IGZ1bmN0aW9uKHdpZGdldFBhcmFtczogT2JqZWN0LCBkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXdpZGdldFBhcmFtcyB8fCAhd2lkZ2V0UGFyYW1zWydkYXRlRm9ybWF0J10pIHJldHVybjtcclxuICAgICAgICB2YXIgbW9udGhOYW1lcyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG4gICAgICAgIHZhciBkYXRlRm9ybWF0ID0gd2lkZ2V0UGFyYW1zWydkYXRlRm9ybWF0J107XHJcbiAgICAgICAgdmFyIGQgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG1vbnRoTmFtZXNbZGF0ZS5nZXRNb250aCgpXTtcclxuICAgICAgICB2YXIgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGVGb3JtYXRcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyVkZC9nLCAoJzAnICsgZCkuc2xpY2UoLTIpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvJWQvZywgZClcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU1NL2csIG1vbnRoTmFtZSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU0vZywgbW9udGhOYW1lLnN1YnN0cigwLCAzKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTS9nLCAoJzAnICsgbSkuc2xpY2UoLTIpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvJU0vZywgbSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyV5eXl5L2csIHkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8leXkvZywgeS50b1N0cmluZygpLnNsaWNlKC0yKSk7XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmlmICghZ2lneWEuc29jaWFsaXplKXtcclxuICAgIGdpZ3lhLnNvY2lhbGl6ZSA9IHt9O1xyXG59XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuc29jaWFsaXplLCBVSSk7XHJcbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Jhc2VQbHVnaW4nO1xyXG5pbXBvcnQgeyBJUGx1Z2luUGFyYW1zIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5QYXJhbXMnO1xyXG5pbXBvcnQgeyBJUGx1Z2luVGVtcGxhdGVzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5UZW1wbGF0ZXMnO1xyXG5pbXBvcnQgeyBJUGx1Z2luQ1NTIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5DU1MnO1xyXG5pbXBvcnQgeyBJSW5qZWN0aW9uSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9BUEkvVWlBcGknO1xyXG5cclxuZGVjbGFyZSBjb25zdCBiZWZvcmVBbGw6IGFueTtcclxuZGVjbGFyZSBjb25zdCBhZnRlckVhY2g6IGFueTtcclxuXHJcbihmdW5jdGlvbiBtb2NrQmFzZVBsdWdpbihkZXN0aW5hdGlvbjogYW55KSB7XHJcbiAgICBpZiAoIWRlc3RpbmF0aW9uLmdpZ3lhKSBkZXN0aW5hdGlvbi5naWd5YSA9IHt9O1xyXG5cclxuICAgIGlmICghZGVzdGluYXRpb24uZ2lneWEuXykgZGVzdGluYXRpb24uZ2lneWEuXyA9IHt9O1xyXG5cclxuICAgIGlmICghZGVzdGluYXRpb24uZ2lneWEuXy5wbHVnaW5zKSBkZXN0aW5hdGlvbi5naWd5YS5fLnBsdWdpbnMgPSB7fTtcclxuXHJcbiAgICBpZiAoIWRlc3RpbmF0aW9uLmdpZ3lhLl8ucGx1Z2lucy5CYXNlUGx1Z2luKSB7XHJcbiAgICAgICAgZGVzdGluYXRpb24uZ2lneWEuXy5wbHVnaW5zLkJhc2VQbHVnaW4gPSBmdW5jdGlvbihwLCB0LCBjKSB7fTtcclxuICAgICAgICBkZXN0aW5hdGlvbi5naWd5YS5fLnBsdWdpbnMuQmFzZVBsdWdpbi5pc01vY2sgPSB0cnVlO1xyXG4gICAgfVxyXG59KSh3aW5kb3cpO1xyXG5leHBvcnQgY2xhc3MgUGx1Z2luVGVzdGVyPFBMIGV4dGVuZHMgQmFzZVBsdWdpbjxJUGx1Z2luUGFyYW1zLCBJUGx1Z2luVGVtcGxhdGVzLCBJUGx1Z2luQ1NTPj4ge1xyXG4gICAgcHVibGljIHN0YXRpYyBhcGlLZXkgPSAnM185bUdUZ1ZTdGoxblRWYVVHQ1FzUDRHU05MbDZnc0hTb1RTemQxTWRoWjRjakRyWXFLWXJhM2Z4cWZBTzVDRlNFJztcclxuXHJcbiAgICBwcml2YXRlIF9pbnN0YW5jZTogUEw7XHJcbiAgICBwcml2YXRlIF9sb2FkUGx1Z2luOiAoSVBsdWdpblBhcmFtcywgSVBsdWdpblRlbXBsYXRlcywgSVBsdWdpbkNTUykgPT4gdm9pZDtcclxuICAgIHByaXZhdGUgX2luc3RhbmNlQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGluamVjdG9yID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcclxuICAgIHB1YmxpYyBkaXNwb3NlSW5zdGFuY2VBZnRlclRlc3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIG5ldmVySW5pdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsdWdpblR5cGU6IHsgbmV3IChwLCB0LCBjKTogUEwgfSwgcHVibGljIGRlZmF1bHRDb250YWluZXJJRCA9IG51bGwsIGluamVjdGlvbkluZm8/OiBJSW5qZWN0aW9uSW5mbykge1xyXG4gICAgICAgIGJlZm9yZUFsbChkb25lID0+IHtcclxuICAgICAgICAgICAgZ2lneWEuYm9vdC5lbnN1cmVKc1Nka0xvYWRlZChQbHVnaW5UZXN0ZXIuYXBpS2V5LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluamVjdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25JbmZvID0gcGx1Z2luVHlwZVsnaW5qZWN0aW9uSW5mbyddKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkUGx1Z2luID0gUGx1Z2luVGVzdGVyLmdldExvYWRGdW5jKGluamVjdGlvbkluZm8pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZWZhdWx0Q29udGFpbmVySUQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmlkID0gaW5qZWN0aW9uSW5mby5uYW1lICsgJ1V0JztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWZ0ZXJFYWNoKGRvbmUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgJiYgdGhpcy5kaXNwb3NlSW5zdGFuY2VBZnRlclRlc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9pbnN0YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEluc3RhbmNlKHBhcmFtczogSVBsdWdpblBhcmFtcywgdGVtcGxhdGVzPzogSVBsdWdpblRlbXBsYXRlcywgY3NzPzogSVBsdWdpbkNTUywgY2FsbGJhY2s/OiAoaW5zdGFuY2U6IFBMKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5faW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTmV3SW5zdGFuY2UocGFyYW1zLCB0ZW1wbGF0ZXMsIGNzcywgaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgICAgIFBsdWdpblRlc3Rlci5zZXRNb2Nrcyh0aGlzLl9pbnN0YW5jZSwgdGhpcy5pbmplY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLl9pbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldE1vY2tzKGluc3RhbmNlLCBpbmplY3RvcjogTWFwPHN0cmluZywgYW55Pikge1xyXG4gICAgICAgIGluamVjdG9yLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZVtrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlW2tdID0gdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0luc3RhbmNlTG9hZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuX2luc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZE5ld0luc3RhbmNlKHBhcmFtczogSVBsdWdpblBhcmFtcywgdGVtcGxhdGVzPzogSVBsdWdpblRlbXBsYXRlcywgY3NzPzogSVBsdWdpbkNTUywgY2FsbGJhY2s/OiAoaW5zdGFuY2U6IFBMKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKCFwYXJhbXMpIHtcclxuICAgICAgICAgICAgcGFyYW1zID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3JpZ2luYWxHZXRJbnN0YW5jZSA9IHBhcmFtcy5nZXRJbnN0YW5jZTtcclxuICAgICAgICB2YXIgb25QbHVnaW5Mb2FkZWQgPSBpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbEdldEluc3RhbmNlKSBvcmlnaW5hbEdldEluc3RhbmNlKGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soaW5zdGFuY2UgYXMgUEwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcGFyYW1zLmdldEluc3RhbmNlID0gb25QbHVnaW5Mb2FkZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5ldmVySW5pdCAmJiB0eXBlb2YgcGFyYW1zLl9ub0luaXQgPT0gJ3VuZGVmaW5lZCcpIHBhcmFtcy5fbm9Jbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFwYXJhbXMuY29udGFpbmVySUQpIHBhcmFtcy5jb250YWluZXJJRCA9IHRoaXMuZGVmYXVsdENvbnRhaW5lcklEO1xyXG5cclxuICAgICAgICBwYXJhbXNbJ3V0SW5zdGFuY2VDb3VudCddID0gKyt0aGlzLl9pbnN0YW5jZUNvdW50O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2FkUGx1Z2luKHBhcmFtcywgdGVtcGxhdGVzLCBjc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG9hZEZ1bmMoaW5qZWN0aW9uSW5mbzogSUluamVjdGlvbkluZm8pOiAoSVBsdWdpblBhcmFtcywgSVBsdWdpblRlbXBsYXRlcywgSVBsdWdpbkNTUykgPT4gdm9pZCB7XHJcbiAgICAgICAgdmFyIGZ1bmNOYW1lID0gJ2dpZ3lhLicgKyBnaWd5YS5fLlVpQXBpLmdldEFwaU5hbWUoaW5qZWN0aW9uSW5mby5qc05hbWUsIGluamVjdGlvbkluZm8ubWV0aG9kTmFtZSk7XHJcbiAgICAgICAgdmFyIGZ1bmMgPSBldmFsKGZ1bmNOYW1lKTtcclxuICAgICAgICBpZiAoIWZ1bmMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09ICdvYmplY3QnICYmIGNvbnNvbGUud2Fybikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGluamVjdGlvbkluZm8ubmFtZSArIFwiJ3MgbWV0aG9kIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiB0aGUgYXBpLWxpc3Q6IFwiICsgZnVuY05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JzIHtcclxuICAgIE9LID0gMCxcclxuICAgIERhdGFfUGVuZGluZyA9IDEwMDAwMSwgLy8gRGF0YSBpcyBzdGlsbCBiZWluZyBwcm9jZXNzZWQsIHF1ZXJ5IGFnYWluIGZvciB0aGUgcmVzcG9uc2VcclxuICAgIE5FVFdPUktfRVJST1IgPSA1MDAwMjYsXHJcbiAgICBEQVRBX1BFTkRJTkcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXHJcbiAgICBPUEVSQVRJT05fQ0FOQ0VMRUQgPSAyMDAwMDEsIC8vIHVzZXIgY2FuY2VsZWQsIGluIGxvZ2luIHByb2Nlc3NcclxuICAgIFBFUk1JU1NJT05fR1JBTlRFRCA9IDIwMDAwMiwgLy8gSW5uZXIgY29kZVxyXG4gICAgUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCA9IDIwMDAwMywgLy8gSW5uZXIgY29kZVxyXG4gICAgUkVESVJFQ1QgPSAyMDAwMDQsIC8vIElubmVyIGNvZGVcclxuICAgIE5FV19VU0VSID0gMjAwMDA1LCAvLyBJbm5lciBjb2RlXHJcbiAgICBPUEVSQVRJT05fRE9ORSA9IDIwMDAwNiwgLy8gSW5uZXIgY29kZVxyXG4gICAgVVBEQVRFX1VTRVIgPSAyMDAwMDcsIC8vIElubmVyIGNvZGVcclxuICAgIE9LX1dJVEhfRVJST1JTID0gMjAwMDA4LCAvLyBGb3IgcmVwb3J0cyAtIHdoZW4gd2UgcmV0dXJuIG9rIHRvIGNsaWVudCBidXQgaGFkIGFjY2VwdGFibGUgZXJyb3JzICh0aGF0IHdlIHdhbnQgdG8ga25vdyBhYm91dCkgb24gdGhlIHdheVxyXG4gICAgQUNDT1VOVFNfTElOS0VEID0gMjAwMDA5LCAvLyBBZnRlciBsaW5raWduIGFjY291dG5zIHZpYSBsb2dpbiwgcmV0dXJuIHRoaXMgZXJyb3IgY29kZVxyXG4gICAgT0tfV0lUSF9FUlJPUl9MT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDIwMDAxMCwgLy8gRm9yIHNldEFjY291bnRJbmZvIHVzaW5nIHRoZSBjb25mbGljdEhhbmRsaW5nIHBhcmFtIC0gcHJvZmlsZSB3YXMgc2F2ZWQsIGJ1dCB0aGUgZW1haWwgY29uZmxpY3RzIHdpdGggYW5vdGhlciB1c2VyXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVHSVNUUkFUSU9OID0gMjA2MDAxLCAvLyBGb3IgYWNjb3VudHMgQVBJLFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1ZFUklGSUNBVElPTiA9IDIwNjAwMiwgLy8gRm9yIGFjY291bnRzIEFQSTsgY29uc2lkZXIgbW92aW5nIHRvIDQwM3h4eCBzZWN0aW9uIGluIHRoZSBmdXR1cmUuXHJcbiAgICBBQ0NPVU5UX01JU1NJTkdfTE9HSU5JRCA9IDIwNjAwMywgLy8gRm9yIGFjY291bnRzIEFQSVxyXG4gICAgSURFTlRJVFlfQUxSRUFEWV9BU1NJR05FRCA9IDIwNjAwNCwgLy8gRm9yIGltcG9ydCBhY2NvdW50cyBBUElcclxuICAgIEFGVEVSX0VNQUlMX1ZFUklGSUNBVElPTiA9IDIwNjAwNSxcclxuICAgIFBFTkRJTkdfQ09ERV9WRVJJRklDQVRJT04gPSAyMDYwMDYsXHJcbiAgICBDTElFTlRfTE9HID0gMzAwMDAxLCAvLyBpbnRlcm5hbCwgZm9yIHJlcG9ydGluZyBlcm9ycnMgaW4gY2xpZW50IFNES1NcclxuICAgIElOVkFMSURfREFUQV9DRU5URVIgPSAzMDEwMDEsIC8vIFwiSW52YWxpZCBkYXRhLWNlbnRlclwiLiB3aXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiVGhpcyBBUEkga2V5IGlzIHNlcnZlZCBieSBhbm90aGVyIGRhdGEgY2VudGVyXCIuXHJcbiAgICBJTlZBTElEX1JFUVVFU1RfRk9STUFUID0gNDAwMDAxLCAvLyBjb3VsZCBiZSBhbGwga2luZCBvZiBlcnJvcnMgd2l0aCB3cm9uZyByZXF1ZXN0IChub24gc2VjdXJlIHdoZW4gc2hvdWxkIGJlIHNlY3VyZSwgd3JvbmcgYXV0aGVudGljYXRpb24gaGVhZGVyKVxyXG4gICAgTUlTU0lOR19SRVFVSVJFRF9QQVJBTUVURVIgPSA0MDAwMDIsXHJcbiAgICBVTklRVUVfSURFTlRJRklFUl9FWElTVFMgPSA0MDAwMDMsXHJcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9GT1JNQVQgPSA0MDAwMDQsXHJcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9WQUxVRSA9IDQwMDAwNixcclxuICAgIERVUExJQ0FURV9WQUxVRSA9IDQwMDAwNyxcclxuICAgIElOVkFMSURfQVVUSEVOVElDQVRJT05fSEVBREVSID0gNDAwMDA4LCAvLyBPQXV0aDJcclxuICAgIFZBTElEQVRJT05fRVJST1IgPSA0MDAwMDksIC8vIEluIGFjY291bnRzLnJlZ2lzdGVyLCB3aGVuZXZlciB0aGVyZSBpcyBhIHZhbGlkYXRpb24gZXJyb3JcclxuICAgIElOVkFMSURfUkVESVJFQ1RfVVJJID0gNDAwMDExLCAvLyBPQXV0aDJcclxuICAgIElOVkFMSURfUkVTUE9OU0VfVFlQRSA9IDQwMDAxMiwgLy8gT0F1dGgyXHJcbiAgICBVTlNVUFBPUlRFRF9HUkFOVF9UWVBFID0gNDAwMDEzLCAvLyBPQXV0aDJcclxuICAgIElOVkFMSURfR1JBTlQgPSA0MDAwMTQsIC8vIE9BdXRoMlxyXG4gICAgQ09ERV9FWFBJUkVEID0gNDAwMDE1LCAvLyBPQXV0aDJcclxuICAgIFNDSEVNQV9WQUxJREFUSU9OX0ZBSUxFRCA9IDQwMDAyMCxcclxuICAgIENBUFRDSEFfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDAyMSxcclxuICAgIFVOSVFVRV9JTkRFWF9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDIyLFxyXG4gICAgSU5WQUxJRF9UWVBFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjMsXHJcbiAgICBEWU5BTUlDX0ZJRUxEU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI0LFxyXG4gICAgV1JJVEVfQUNDRVNTX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjUsXHJcbiAgICBJTlZBTElEX0ZPUk1BVF9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI2LFxyXG4gICAgUkVRVUlSRURfVkFMVUVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNyxcclxuICAgIEVNQUlMX05PVF9WRVJJRklFRCA9IDQwMDAyOCxcclxuICAgIFNDSEVNQV9DT05GTElDVF9FUlJPUiA9IDQwMDAyOSwgLy8gVG8gaGFuZGxlIFVzZXIgc3RvcnkgMzQzMzAuIEltcHJvdmUgRWxhc3RpY1NlYXJjaE1hcHBpbmdFeGNlcHRpb24gaGFuZGxpbmcgaW4gRFMuSW5kZXhPYmplY3RcclxuICAgIE9QRVJBVElPTl9OT1RfQUxMT1dFRCA9IDQwMDAzMCwgLy8gVXNlciBzdG9yeSAzNDMxMSAtIElmIGFkZENvbm5lY3Rpb24gaXMgY2FsbGVkIHJldHVybiBhbiBlcnJvciAoXCJvcGVyYXRpb24gbm90IGFsbG93ZWQgZm9yIHRoaXMgYWNjb3VudFwiLCA0MDBYWFggZXJyb3IpLlxyXG4gICAgU0VDVVJJVFlfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDA1MCxcclxuICAgIElOVkFMSURfQVBJS0VZX1BBUkFNRVRFUiA9IDQwMDA5MyxcclxuICAgIE5PVF9TVVBQT1JURUQgPSA0MDAwOTYsIC8vIHRoZSBmdW5jdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IGFueSBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBwcm92aWRlcnNcclxuICAgIFVOU1VQUE9SVEVEX1VTRVJfQUdFTlQgPSA0MDAwOTcsIC8vXHJcbiAgICBOT19QUk9WSURFUlMgPSA0MDAxMDAsIC8vIGNsaWVudD9cclxuICAgIFBPUFVQX0JMT0NLRUQgPSA0MDAxMDEsIC8vIGNsaWVudFxyXG4gICAgSU5WQUxJRF9FVkVOVF9IQU5ETEVSID0gNDAwMTAyLCAvLyBjbGllbnRcclxuICAgIElOVkFMSURfQ09OVEFJTkVSSUQgPSA0MDAxMDMsIC8vIGNsaWVudFxyXG4gICAgTk9UX0NPTk5FQ1RFRCA9IDQwMDEwNiwgLy8gdXNlciBpcyBub3QgY29ubmVjdGVkIHRvIHRoZSByZXF1aXJlZCBuZXR3b3JrIG9yIHRvIGFueSBuZXR3b3JrXHJcbiAgICBJTlZBTElEX1NJVEVfRE9NQUlOID0gNDAwMTIwLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxyXG4gICAgUFJPVklERVJfQ09ORklHVVJBVElPTl9FUlJPUiA9IDQwMDEyMiwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcclxuICAgIExJTUlUX1JFQUNIRUQgPSA0MDAxMjQsIC8vIEdhbWVNZWNoYW5pY3MgLSBDYXAgd2FzIHJlYWNoZWRcclxuICAgIEZSRVFVRU5DWV9MSU1JVF9SRUFDSEVEID0gNDAwMTI1LCAvLyBDb21tZW50cy9GZWVkIC0gU3BhbSBDYXBzIHdhcyByZWFjaGVkXHJcbiAgICBJTlZBTElEX0FDVElPTiA9IDQwMDEyNiwgLy8gR2FtZU1lY2hhbmljcyAtIEludmFsaWQgYWN0aW9uLiBUcmlnZ2VyZWQgYWN0aW9uIGNhbid0IGJlIGluaXRpYXRlZCBleHRlcm5hbGx5XHJcbiAgICBJTlNVRkZJQ0lFTlRfUE9JTlRTX1RPX1JFREVFTSA9IDQwMDEyNywgLy8gR2FtZU1lY2hhbmljcyAtIEluc3VmZmljaWVudF9wb2ludHNfdG9fcmVkZWVtXHJcbiAgICBTSUdOQVRVUkVfVElNRVNUQU1QX0VYUElSRUQgPSA0MDAxMjgsIC8vIHRoZSB0aW1lc3RhbXAgaW5zaWRlIHRoZSBzaWduYXR1cmUgaXMgZXhwaXJlZFxyXG4gICAgSU5WQUxJRF9QT0xJQ1lfQ09ORklHVVJBVElPTiA9IDQwMTAwMCwgLy8gUG9saWN5IGNvbmZpZ3VyYXRpb24gaXMgaW52YWxpZCAoaS5lLiBwcmV2ZW50IHJlZ2l0cmF0aW9uKVxyXG4gICAgU1VTUEVDVEVEX1NQQU0gPSA0MDEwMTAsIC8vIFNvbWVvbmUgaXMgdHJ5aW5nIHRvIHVzZSBHaWd5YSB0byBzZW5kIGEgZW1haWwgd2l0aCBhIFVSTCB0aGF0IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgY2xpZW50J3MgZG9tYWluczsgc3VzcGVjdGVkIHNwYW0uXHJcbiAgICBMT0dJTl9GQUlMRURfQ0FQVENIQV9SRVFVSVJFRCA9IDQwMTAyMCwgLy8gYWNjb3VudHMubG9naW4gLSBjYXB0Y2hhIHJlcXVpcmVkXHJcbiAgICBMT0dJTl9GQUlMRURfV1JPTkdfQ0FQVENIQSA9IDQwMTAyMSwgLy8gYWNjb3VudHMubG9naW4gLSB3cm9uZyBjYXB0Y2hhIGNvZGVcclxuICAgIE9MRF9QQVNTV09SRF9VU0VEID0gNDAxMDMwLCAvLyBUaGUgdXNlciBwcm92aWRlZCBoaXMgcHJldmlvdXMgcGFzc3dvcmQsIG5vdCB0aGUgY3VycmVudCBvbmVcclxuICAgIEZPUkJJRERFTiA9IDQwMzAwMCxcclxuICAgIElOVkFMSURfU0VTU0lPTl9UT0tFTiA9IDQwMzAwMSwgLy8gaW50ZXJuYWxcclxuICAgIFJFUVVFU1RfSEFTX0VYUElSRUQgPSA0MDMwMDIsIC8vIHRoZSB0aW1lc3RhbXAgb3IgZXhwaXJhdGlvbiBvZiB0aGUgdG9rZW4gdXNlZCBleGNlZWRlZCB0aGUgYWxsb3dlZCB0aW1lIHdpbmRvd1xyXG4gICAgSU5WQUxJRF9SRVFVRVNUX1NJR05BVFVSRSA9IDQwMzAwMyxcclxuICAgIERVUExJQ0FURV9OT05DRSA9IDQwMzAwNCxcclxuICAgIFVOQVVUSE9SSVpFRF9VU0VSID0gNDAzMDA1LCAvLyB0aGUgdXNlciBpZCBwYXNzZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIHNpdGVcclxuICAgIFNFTlNJVElWRV9EQVRBX1NFTlRfT1ZFUl9IVFRQID0gNDAzMDA2LCAvLyB3aGVuIHNlbmRpbmcgdGhlIHNlY3JldCBrZXkgaW4gUkVTVCBpdCBoYXMgdG8gYmUgb3ZlciBIVFRQU1xyXG4gICAgUEVSTUlTU0lPTl9ERU5JRUQgPSA0MDMwMDcsIC8vIENvbW1lbnRzIHNlcnZlciAtIFBlcm1pc3Npb24gZGVuaWVkIChyZWFkT25seSxtb2RlcmF0aW9uIHNpdGUpLlxyXG4gICAgSU5WQUxJRF9PUEVOSURfVVJMID0gNDAzMDA4LCAvLyBjYW5ub3QgZmluZCBhbiBvcGVuSWQgZW5kcG9pbnQgb24gdGhlIHVybCBvciB1c2VybmFtZSBnaXZlbiBmb3Igb3BlbklkIGxvZ2luXHJcbiAgICBQUk9WSURFUl9TRVNTSU9OX0VYUElSRUQgPSA0MDMwMDksIC8vIHRoZSB1c2VyIHNlc3Npb24gZm9yIHRoaXMgcHJvdmlkZXIgaXMgZXhwaXJlZFxyXG4gICAgSU5WQUxJRF9TRUNSRVQgPSA0MDMwMTAsIC8vIHRoZSByZXF1ZXN0IGhhcyBhbiBpbnZhbGlkIHNlY3JldCBrZXlcclxuICAgIFNFU1NJT05fSEFTX0VYUElSRUQgPSA0MDMwMTEsIC8vIHRoZSBzZXNzaW9uIGZvciB0aGlzIHVzZXIgaGFzIGV4cGlyZWRcclxuICAgIE5PX1ZBTElEX1NFU1NJT04gPSA0MDMwMTIsIC8vIHJlcXVlc3RlZCB1c2VyIGhhcyBubyB2YWxpZCBzZXNzaW9uXHJcbiAgICBVTlZFUklGSUVEX1VTRVIgPSA0MDMwMTMsIC8vIHRoZSB1c2VyIGlzIG5vdCB2ZXJpZmllZCBpbiBTU08gc2Vzc2lvblxyXG4gICAgTUlTU0lOR19SRVFVRVNUX1JFRkVSUkVSID0gNDAzMDE1LCAvLyB3ZSBjYW4ndCB2YWxpZGF0ZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWZlcnJlciBoZWFkZXIgaXMgbWlzc2luZ1xyXG4gICAgVU5FWFBFQ1RFRF9QUk9WSURFUl9VU0VSID0gNDAzMDE3LCAvLyB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgZGlmZmVyZW50IGZyb20gdGhlIG9uZSBleHBlY3RlZFxyXG4gICAgUEVSTUlTU0lPTl9OT1RfUkVRVUVTVEVEID0gNDAzMDIyLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCBpdCB3YXMgbm90IHJlcXVlc3RlZFxyXG4gICAgTk9fVVNFUl9QRVJNSVNTSU9OID0gNDAzMDIzLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCB3ZSBkb24ndCBoYXZlIG9uZVxyXG4gICAgUFJPVklERVJfTElNSVRfUkVBQ0hFRCA9IDQwMzAyNCwgLy8gdGhlIHByb3ZpZGVyIGxpbWl0IGZvciB0aGlzIGFjdGlvbiB3YXMgZXhjZWVkZWRcclxuICAgIElOVkFMSURfVE9LRU4gPSA0MDMwMjUsIC8vIE9BdXRoMlxyXG4gICAgVU5BVVRIT1JJWkVEX0FDQ0VTU19FUlJPUiA9IDQwMzAyNiwgLy8gQ2FsbHMgdG8gYWNjb3VudHMuaXNBdmFpbGFibGVMb2dpbklEIFdoZW4gcHJldmVudExvZ2luSURIYXJ2ZXN0aW5nID0gdHJ1ZSBzaG91bGQgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIDQwM3h4eCB1bmF1dGhvcml6ZWQgYWNjZXNzIGVycm9yLlxyXG4gICAgRElGRkVSRU5UX1VTRVJfRk9SX1JFQVVUSCA9IDQwMzAyNywgLy8gRGlmZmVyZW50IHVzZXIgdHJpZWQgdG8gcmUtYXV0aG9yaXplLlxyXG4gICAgU0VTU0lPTl9FWFBJUkVEX1JFVFJZID0gNDAzMDMwLCAvLyBJbm5lciBjb2RlIC0gd2hlbiB0aGUgZmFjZWJvb2sgc2Vzc2lvbiBpcyBleHBpcmVkIGFuZCB0aGUgY2xpZW50IHdhaXRzIGZvciBGQiBvbiBwYWdlIHRvIGxvYWRcclxuICAgIEFQUFJPVkVEX0JZX01PREVSQVRPUiA9IDQwMzAzMSwgLy8gY29tbWVudHMgLSBjYW50IGZsYWcgY29tbWVudCwgaXQgd2FzIGFwcHJvdmVkIGJ5IHRoZSBtb2RlcmF0b3IgYWxyZWFkeS5cclxuICAgIFRPS0VOX0hBU19SRU5FV0VEID0gNDAzMDMyLCAvLyB0aGUgdG9rZW4gaXMgbm8gbG9uZ2VyIHZhbGlkLCBidXQgd2UgaGF2ZSBuZXcgdG9rZW4gdG8gcHJvdmlkZVxyXG4gICAgTk9fVVNFUl9DT09LSUUgPSA0MDMwMzUsIC8vIG5vIHVzZXIgY29va2llXHJcbiAgICBVTkFVVEhPUklaRURfUEFSVE5FUiA9IDQwMzAzNiwgLy8gcGFydG5lciBpcyBkaXNhYmxlZFxyXG4gICAgUE9TVF9ERU5JRUQgPSA0MDMwMzcsIC8vIENvbW1lbnRzIHNlcnZlciAtIFBvc3QgZGVuaWVkIHdoZW4gdGhlIHVzZXIgdHJpZWQgdG8gcmV2aWV3IHR3aWNlLlxyXG4gICAgTk9fTE9HSU5fVElDS0VUID0gNDAzMDQwLCAvLyBubyBsb2dpbiB0aWNrZXQgaW4gY2FsbGJhY2sgdXJsXHJcbiAgICBBQ0NPVU5UX0RJU0FCTEVEID0gNDAzMDQxLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIGdzLmFjY291bnRzLklzQWN0aXZlPWZhbHNlXHJcbiAgICBJTlZBTElEX0xPR0lOSUQgPSA0MDMwNDIsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIGxvZ2luIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xyXG4gICAgTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSA0MDMwNDMsIC8vIEZvciBhY2NvdW50OiBJZiBwcm92aWRlckVtYWlsIGlzIGRlZmluZWQgYXMgYSBsb2dpbklkZW50aWZpZXIgaW4gdGhlIHBvbGljeSwgYW5kIHRoZSBlbWFpbCBhZGRyZXNzIHJlY2VpdmVkIGZyb20gdGhlIHByb3ZpZGVyIGV4aXN0cyBpbiB0aGUgZ3MubG9naW5JZGVudGlmaWVycyBjb2xsZWN0aW9uIGJ1dCBhc3NvY2lhdGVkIHdpdGggYSBkaWZmZXJlbnQgVVVJRCB0aGFuIHRoZSBjdXJyZW50IHVzZXIsIHRoZW4gcmV0dXJuIFwiTG9naW4gaWRlbnRpZmllciBleGlzdHNcIiBlcnJvciBjb2RlICg0MDN4eHgpLlxyXG4gICAgVU5ERVJBR0VfVVNFUiA9IDQwMzA0NCwgLy8gRm9yIENPUFBBIGNvbXBsaWFuY2UgKENoaWxkcmVuJ3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpXHJcbiAgICBJTlZBTElEX1NJVEVfQ09ORklHVVJBVElPTl9FUlJPUiA9IDQwMzA0NSwgLy8gRm9yIGFjY291bnRzIC0gc2l0ZSBEUyBpcyBlbmFibGVkIHRob3VnaCBubyBEU1NpemUgd2FzIGNvbmZpZ3VyZWQuXHJcbiAgICBMT0dJTklEX0RPRVNfTk9UX0VYSVNUID0gNDAzMDQ3LCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byByZXNldCBwYXNzd29yZCB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcclxuICAgIEFQSV9SQVRFX0xJTUlUX0VYQ0VFREVEID0gNDAzMDQ4LFxyXG4gICAgUEVORElOR19QQVNTV09SRF9DSEFOR0UgPSA0MDMxMDAsIC8vIFRoZSB1c2VyJ3MgcGFzc3dvcmQgbmVlZHMgdG8gYmUgY2hhbmdlZFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9WRVJJRklDQVRJT04gPSA0MDMxMDEsXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1JFR0lTVFJBVElPTiA9IDQwMzEwMixcclxuICAgIEFDQ09VTlRfUEVORElOR19SRUNFTlRfTE9HSU4gPSA0MDMxMTAsXHJcbiAgICBBQ0NPVU5UX1RFTVBPUkFSSUxZX0xPQ0tFRF9PVVQgPSA0MDMxMjAsIC8vIFRvbyBtYW55IGxvZ2luIGF0dGVtcHRzOyBhY2NvdW50IGxvY2tlZC1vdXRcclxuICAgIFJFRFVOREFOVF9PUEVSQVRJT04gPSA0MDMyMDAsIC8vIFRoZSBjbGllbnQgcGVyZm9ybWVkIGFuIG9wZXJhdGlvbiB0aGF0IGlzIHJlZHVuZGFudFxyXG4gICAgSU5WQUxJRF9BUFBMSUNBVElPTl9JRCA9IDQwMzIwMSwgLy8gVGhlIGFwcCBpZCBwcm92aWRlZCBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgb25lIGNvbmZpZ3VyZWQgZm9yIHRoZSBzaXRlXHJcbiAgICBOT1RfRk9VTkQgPSA0MDQwMDAsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC4gQWNjb3VudHMgLSBlbWFpbCB2ZXJpZmljYXRpb24gZmFpbGVkLCB1dWlkIG5vdCBmb3VuZC5cclxuICAgIEZSSUVORF9OT1RfRk9VTkQgPSA0MDQwMDEsIC8vIHRoZSB1c2VyIGlkIHByb3ZpZGVkIGFzIGEgdGFyZ2V0IGlzIG5vdCBhIGZyaWVuZCBmb3IgdGhlIGN1cnJlbnQgdXNlclxyXG4gICAgQ0FURUdPUllfTk9UX0ZPVU5EID0gNDA0MDAyLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDYXRlZ29yeSBub3QgZm91bmQuXHJcbiAgICBVSURfTk9UX0ZPVU5EID0gNDA0MDAzLFxyXG4gICAgUkVTT1VSQ0VfTk9UX0ZPVU5EID0gNDA0MDA0LCAvLyBDbGllbnQgc2lkZSAtIGltYWdlIG5vdCBmb3VuZCBhZnRlciB1cGxvYWRcclxuICAgIElOVkFMSURfQVBJX01FVEhPRCA9IDQwNTAwMSwgLy8gaW50ZXJuYWwgZm9yIG91ciBKUyBBUElcclxuICAgIElERU5USVRZX0VYSVNUUyA9IDQwOTAwMSwgLy8gd2hlbiB0cnlpbmcgdG8gY29ubmVjdCB0byBhIHByb3ZpZGVyIHRoYXQgaXMgYWxyZWFkeSBjb25uZWN0ZWQgb3IgbGluayB0byBhbiBhbHJlYWR5IGxpbmtlZCBhY2NvdW50XHJcbiAgICBHT05FID0gNDEwMDAwLCAvLyBSZXNvdXJjZSBubyBsb25nZXIgYXZhaWxhYmxlLiBEYXRhIEtleSBTZXJ2ZXIgLSBrZXkgcmV2b2tlZC9leHBpcmVkLlxyXG4gICAgUkVRVUVTVF9FTlRJVFlfVE9PX0xBUkdFID0gNDEzMDAxLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBSZXF1ZXN0IHRvIGxhcmdlXHJcbiAgICBDT01NRU5UX1RFWFRfVE9PX0xBUkdFID0gNDEzMDAyLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDb21tZW50IFRleHQgdG8gbGFyZ2UuXHJcbiAgICBPQkpFQ1RfVE9PX0xBUkdFID0gNDEzMDAzLCAvLyBEYXRhU3RvcmUgb2JqZWN0IGlzIHRvbyBsYXJnZVxyXG4gICAgUFJPRklMRV9QSE9UT19UT09fTEFSR0UgPSA0MTMwMDQsIC8vIFByb2ZpbGUgcGhvdG8gaXMgdG9vIGxhcmdlLCBleGNlZWRzIG1heGltdW0gYWxsb3dlZCBjb250ZW50IGxlbmd0aFxyXG4gICAgUkVRVUVTVF9VUklfVE9PX0xPTkcgPSA0MTQwMDAsIC8vVGhlIFVSSSBwcm92aWRlZCB3YXMgdG9vIGxvbmcgZm9yIHRoZSBzZXJ2ZXIgdG8gcHJvY2Vzcy5cclxuICAgIE1JU1NJTkdfVVNFUl9QSE9UTyA9IDQwOTAxMCwgLy8gRXJyb3IgLSBtaXNzaW5nIHVzZXIgcGhvdG9cclxuICAgIENPVU5URVJfTk9UX1JFR0lTVEVSRUQgPSA0MDkwMTEsIC8vIENvdW50ZXIgbm90IHJlZ2lzdGVyZWRcclxuICAgIElOVkFMSURfR01JRF9USUNLRVQgPSA0MDkwMTIsIC8vIGdtaWQgdGlja2V0IGlzIG5vdCB2YWxpZFxyXG4gICAgU0FNTF9NQVBQRURfQVRUUklCVVRFX05PVF9GT1VORCA9IDQwOTAxMywgLy8gVXNlZCB3aGVuIG1hcHBlZCBhdHRyaWJ1dGUgdmFsdWUgZm9yIHByb3ZpZGVyVUlEIGNhbm5vdCBiZSByZXRyZWl2ZWRcclxuICAgIFNBTUxfQ0VSVElGSUNBVEVfTk9UX0ZPVU5EID0gNDA5MDE0LCAvLyBVc2VkIHdoZW4gU0FNTCBjZXJ0aWZpY2F0ZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxyXG4gICAgU0FNTF9NRVNTQUdFX05PVF9GT1VORCA9IDQwOTAxNSwgLy8gVXNlZCB3aGVuIGNhY2hlZCBTQU1MIG1lc3NhZ2UgY291bGQgbm90IGJlIHJldHJlaXZlZC5cclxuICAgIEdFTkVSQUxfU0VSVkVSX0VSUk9SID0gNTAwMDAxLFxyXG4gICAgU0VSVkVSX0xPR0lOX0VSUk9SID0gNTAwMDAyLCAvLyBnZW5lcmFsIGVycm9yIGR1cmluZyB0aGUgbG9naW4gcHJvY2Vzc1xyXG4gICAgREVGQVVMVF9BUFBMSUNBVElPTl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNTAwMDAzLCAvLyBGb3IgbXVsdGlwbGUgREMgLSB3aGVuIG5vIGRlZmF1bHQgYXBwbGljYXRpb24gY2FuIGJlIGZvdW5kIGluIERlZmF1bHRBcHBsaWNhdGlvbnMuY29uZmlnLiBXaXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiRGVmYXVsdCBhcHBsaWNhdGlvbiBpc24ndCBjb25maWd1cmVkIGZvciBkYXRhQ2VudGVyXCJcclxuICAgIFNFU1NJT05fTUlHUkFUSU9OX0VSUk9SID0gNTAwMDE0LCAvLyBlcnJvciBpbiBtaWdyYXRpbmcgb2xkIHRvIG5ldyBmYWNlYm9vayBzZXNzaW9uXHJcbiAgICBQUk9WSURFUl9FUlJPUiA9IDUwMDAyMywgLy8gZ2VuZXJhbCBlcnJvciBmcm9tIHRoZSBwcm92aWRlclxyXG4gICAgREFUQUJBU0VfRVJST1IgPSA1MDAwMjgsXHJcbiAgICBVU0VSTkFNRV9SRVFVSVJFRCA9IDUwMDAyOSwgLy8gSW5uZXIgY29kZVxyXG4gICAgTk9fUFJPVklERVJfQVBQTElDQVRJT04gPSA1MDAwMzEsIC8vIHRoZSBhcHBsaWNhdGlvbiBmb3IgdGhpcyBwcm92aWRlciBpcyBub3QgZGVmaW5lZCBmb3IgdGhpcyBzaXRlXHJcbiAgICBMT0FEX0ZBSUxFRCA9IDUwMDAzMiwgLy8gY2xpZW50IGVycm9yXHJcbiAgICBJTlZBTElEX0VOVklST05NRU5UX0NPTkZJRyA9IDUwMDAzMywgLy8gSW4gY2FzZSB0aGVyZSBpcyBubyB0YXJnZXQgZW52aXJvbm1lbnQgaW4gdGhlIGNvbmZpZyBmaWxlIHdlJ2QgcmV0dXJuIHdpdGggIGludmFsaWRfZW52aXJvbm1lbnRfY29uZmlnIGVycm9yLlxyXG4gICAgRVJST1JfRFVSSU5HX0JBQ0tFTkRfT1BFUkFUSU9OID0gNTAwMDM0LFxyXG4gICAgVElNRU9VVCA9IDUwNDAwMSwgLy8gb3V0Z29pbmcgcmVxdWVzdCBoYWQgdGltZWQgb3V0XHJcbiAgICBDTElFTlRUSU1FT1VUID0gNTA0MDAyLCAvLyBGb3Igc2VydmVyIFNES3MgLSBhIGNsaWVudCBzaWRlIHRpbWVvdXRcclxuICAgIElOVkFMSURfVVJMID0gNDA0MDA0LCAvLyBlbWJlZC5seSA0MDQgZXJyb3IgbWVzc2FnZSAtIHVybCBpcyBub3QgdmFsaWRcclxuICAgIE1FRElBX0lURU1TX05PVF9TVVBQT1JURUQgPSA0MDEwMDEsIC8vIE1lZGlhIGl0ZW1zIGEgbm90IGFsbG93ZWQgZm9yIHRoaXMgY2F0ZWdvcnlcclxuICAgIE1JU1NJTkdfRVJST1JfQ09ERSA9IDU5OTk5OSxcclxufVxyXG5leHBvcnQgY29uc3QgZW51bSBHU0Vycm9yRGV0YWlscyB7XHJcbiAgICBOb25lID0gMCxcclxuICAgIFNhbWVfcGFzc3dvcmQgPSAxMDAwMDEsIC8vIFJlc2V0IFBhc3N3b3JkIC0gXCInb2xkUGFzc3dvcmQnIGNhbm5vdCBiZSB0aGUgc2FtZSBhcyAnbmV3UGFzc3dvcmQnXCJcclxuICAgIEludmFsaWRfcGFzc3dvcmQgPSAxMDAwMDIsIC8vIFJlc2V0IFBhc3N3b3JkIC0gY3VycmVudCBwYXNzd29yZCBpcyB3cm9uZy9pbnZhbGlkXHJcbiAgICBJbnZhbGlkX2NvdW50ZXJzX3F1ZXJ5X3dpdGhfY3Vyc29yID0gMTAwMDAzLFxyXG59XHJcbiIsImltcG9ydCB7IGdldEJhc2VEb21haW4gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZG9tYWlucyc7XHJcbi8vIExvY2FsIGVudmlyb25tZW50IGluZm8gKGJyb3dzZXIsIGNhcGFiaWxpdGllcywgaG9zdGluZyBkb21haW4pXHJcblxyXG5kZWNsYXJlIGNvbnN0IEFjdGl2ZVhPYmplY3Q6IGFueTtcclxuXHJcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbmV4cG9ydCB2YXIgbG9jYWxJbmZvID0ge1xyXG4gICAgYmFzZURvbWFpbjogJycsIC8vIGNhbGN1bGF0ZWQgbGF0ZXIgb25cclxuICAgIGlzQnJvd3NlclN1cHBvcnRzRmlsZXNBUEk6ICgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBGaWxlUmVhZGVyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBGaWxlUmVhZGVyID09PSAnb2JqZWN0JztcclxuICAgIH0pKCksXHJcbiAgICBpbml0VGltZTogbmV3IERhdGUoKSxcclxuICAgIHZlcnNpb246IDAsIC8vVE9ET1xyXG4gICAgcGFnZURvbWFpbjogZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcbiAgICBwcm90b2NvbDogZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHA6JyA/ICdodHRwJyA6ICdodHRwcycsXHJcbiAgICB1c2VyQWdlbnQ6IHVzZXJBZ2VudCxcclxuICAgIGlzV2luOiB1c2VyQWdlbnQuaW5kZXhPZignd2luJykgIT0gLTEsXHJcbiAgICBpc0lFOiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpICE9IC0xIHx8ICh1c2VyQWdlbnQuaW5kZXhPZignbW96aWxsYScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCd0cmlkZW50JykgIT0gLTEpLFxyXG4gICAgaXNJRTY6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDYuJykgIT0gLTEsXHJcbiAgICBpc0lFNzogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgNy4nKSAhPSAtMSxcclxuICAgIGlzSUU4OiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSA4LicpICE9IC0xLFxyXG4gICAgaXNJRTk6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDkuJykgIT0gLTEsXHJcbiAgICBpc0lFMTA6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDEwLicpICE9IC0xLFxyXG4gICAgaXNJRTExOiB1c2VyQWdlbnQuaW5kZXhPZignbW96aWxsYScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCd0cmlkZW50LzcuMCcpICE9IC0xLFxyXG4gICAgaXNFZGdlOiB1c2VyQWdlbnQuaW5kZXhPZignZWRnZScpICE9IC0xLFxyXG4gICAgaXNJT1M6IHVzZXJBZ2VudC5pbmRleE9mKCdpcGhvbmUnKSAhPSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignaXBhZCcpICE9IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpcG9kJykgIT0gLTEsXHJcbiAgICBpc1NhZmFyaTUzNDogdXNlckFnZW50LmluZGV4T2YoJ3NhZmFyaS81MzQnKSAhPSAtMSxcclxuICAgIGlzV2VDaGF0OiB1c2VyQWdlbnQuaW5kZXhPZignbWljcm9tZXNzZW5nZXInKSAhPSAtMSxcclxuICAgIGlvc1ZlcnNpb246IChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FwcGxld2Via2l0JykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3ZlcnNpb24vJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHVzZXJBZ2VudC5zcGxpdCgndmVyc2lvbi8nKVsxXS5zcGxpdCgnICcpWzBdKTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNBbmRyb2lkOiB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICE9IC0xLFxyXG4gICAgaXNBbmRyb2lkQnJvd3NlcjogKHVzZXJBZ2VudCA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhLzUuMCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCA0JykgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhcHBsZXdlYmtpdCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gU3BlY2lhbCB1c2VyIGFnZW50cyBmb3VuZCBzbyBmYXIgdGhhdCB2aW9sYXRlIHRoZSBleGlzdGFuY2Ugb2YgY2hyb21lIHJ1bGVcclxuICAgICAgICAvLyBCdWcgMzgzNjcgQW5kcm9pZCBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNC4yLjI7IGVuLXVzOyBTQU1TVU5HIEdULUk5NTAwIEJ1aWxkL0pEUTM5KSBBcHBsZVdlYktpdC81MzUuMTkgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzEuMCBDaHJvbWUvMTguMC4xMDI1LjMwOCBNb2JpbGUgU2FmYXJpLzUzNS4xOVxyXG4gICAgICAgIC8vIEJ1ZyA0MDIwOSBDaHJvbWUgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBTQU1TVU5HIFNHVC1JNzQ3IEJ1aWxkL0tPVDQ5SCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzM5LjAuMjE3MS45MyBNb2JpbGUgU2FmYXJpLzUzNy4zNlxyXG4gICAgICAgIC8vIFdpbmRvd3MgUGhvbmUgQnJvd3NlcjogTW96aWxsYS81LjAgKE1vYmlsZTsgV2luZG93cyBQaG9uZSA4LjE7IEFuZHJvaWQgNC4wOyBBUk07IFRyaWRlbnQvNy4wOyBUb3VjaDsgcnY6MTEuMDsgSUVNb2JpbGUvMTEuMDsgTk9LSUE7IEx1bWlhIDkyMCkgbGlrZSBpUGhvbmUgT1MgN18wXzMgTWFjIE9TIFggQXBwbGVXZWJLaXQvNTM3IChLSFRNTCwgbGlrZSBHZWNrbykgTW9iaWxlIFNhZmFyaS81MzdcclxuICAgICAgICAvLyBDaHJvbWUgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBlbi1nYjsgU0FNU1VORyBHVC1JOTUwMCBCdWlsZC9LT1Q0OUgpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMS41IENocm9tZS8yOC4wLjE1MDAuOTQgTW9iaWxlIFNhZmFyaS81MzcuMzZcclxuXHJcbiAgICAgICAgdmFyIGNocm9tZUluZm8gPSAvY2hyb21lXFwvKFxcZCspLy5leGVjKHVzZXJBZ2VudCk7XHJcblxyXG4gICAgICAgIGlmICghY2hyb21lSW5mbykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjaHJvbWVWZXJzaW9uID0gcGFyc2VJbnQoY2hyb21lSW5mb1sxXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaHJvbWVWZXJzaW9uIDwgMjA7XHJcbiAgICB9KSh1c2VyQWdlbnQpLFxyXG4gICAgY3VycmVudEJyb3dzZXI6ICcnLFxyXG4gICAgYW5kcm9pZFZlcnNpb246IChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh1c2VyQWdlbnQuc2xpY2UodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSArIDgpKTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdjaHJvbWUnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZignZWRnZScpID09IC0xLCAvLyBlZGdlIGJyb3dzZXIgYWxzbyB1c2VzIENocm9tZSBpbiBpdHMgVUEgc3RyaW5nLlxyXG4gICAgaXNHb29nbGVCb3Q6IHVzZXJBZ2VudC5pbmRleE9mKCdnb29nbGVib3QnKSAhPSAtMSxcclxuICAgIGlzRkY6IHVzZXJBZ2VudC5pbmRleE9mKCdmaXJlZm94JykgIT0gLTEsXHJcbiAgICBpc09wZXJhOiB1c2VyQWdlbnQuaW5kZXhPZignb3BlcmEnKSAhPSAtMSxcclxuICAgIGlzU2FmYXJpOlxyXG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uICYmXHJcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzYWZhcmknKSAhPSAtMSAmJlxyXG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPT0gLTEgJiZcclxuICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpID09IC0xLFxyXG4gICAgaXNJT1NXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXHJcbiAgICBpc0lPU0Nocm9tZTogdXNlckFnZW50LmluZGV4T2YoJ2NyaW9zJykgIT0gLTEsXHJcbiAgICBpc01BQzogbmF2aWdhdG9yLmFwcFZlcnNpb24gJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtYWMnKSAhPSAtMSxcclxuICAgIGlzV2luZG93c1Bob25lOiB1c2VyQWdlbnQuaW5kZXhPZignd2luZG93cyBwaG9uZScpICE9IC0xLFxyXG4gICAgaXNGYWNlYm9va0Jyb3dzZXI6IHVzZXJBZ2VudC5pbmRleE9mKCdmYmFuJykgIT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2ZiYXYnKSAhPSAtMSxcclxuICAgIHN1cHBvcnRzUG9zdE1lc3NhZ2U6IHdpbmRvdy5wb3N0TWVzc2FnZSAhPSBudWxsICYmICh1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpID09IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpZW1vYmlsZScpICE9IC0xKSxcclxuICAgIHN1cHBvcnRzTG9jYWxTdG9yYWdlOiBmYWxzZSxcclxuICAgIHN1cHBvcnRzU2Vzc2lvblN0b3JhZ2U6IGZhbHNlLFxyXG4gICAgc3VwcG9ydHNGbGFzaDogKCgpID0+IHtcclxuICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk5ODI0NS9ob3ctY2FuLWktZGV0ZWN0LWlmLWZsYXNoLWlzLWluc3RhbGxlZC1hbmQtaWYtbm90LWRpc3BsYXktYS1oaWRkZW4tZGl2LXRoYXQtaW5mXHJcbiAgICAgICAgbGV0IHN1cHBvcnRzRmxhc2ggPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzICYmXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzWydhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCddICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1pbWVUeXBlc1snYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXS5lbmFibGVkUGx1Z2luXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgc3VwcG9ydHNGbGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbyA9IG5ldyBBY3RpdmVYT2JqZWN0KCdTaG9ja3dhdmVGbGFzaC5TaG9ja3dhdmVGbGFzaCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNGbGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgIHJldHVybiBzdXBwb3J0c0ZsYXNoO1xyXG4gICAgfSkoKSxcclxuICAgIHF1aXJrc01vZGU6IGRvY3VtZW50LmNvbXBhdE1vZGUgPT0gJ0JhY2tDb21wYXQnICYmIHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgIT0gLTEsXHJcbiAgICBiYWNrQ29tcGF0OiBkb2N1bWVudC5jb21wYXRNb2RlID09ICdCYWNrQ29tcGF0JyxcclxuICAgIC8vIFRPRE86IEFkZCBpc1RhYmxldCBmdW5jdGlvbiBmb3IgZGV2aWNlcyBub24tTW9iaWxlXHJcbiAgICBpc01vYmlsZTogKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBtb2JpbGVDbGllbnRzID0gW1xyXG4gICAgICAgICAgICAnaXBob25lJyxcclxuICAgICAgICAgICAgJ2lwb2QnLFxyXG4gICAgICAgICAgICAnYW5kcm9pZCcsXHJcbiAgICAgICAgICAgICdtaWRwJyxcclxuICAgICAgICAgICAgJzI0MHgzMjAnLFxyXG4gICAgICAgICAgICAnYmxhY2tiZXJyeScsXHJcbiAgICAgICAgICAgICduZXRmcm9udCcsXHJcbiAgICAgICAgICAgICdub2tpYScsXHJcbiAgICAgICAgICAgICdwYW5hc29uaWMnLFxyXG4gICAgICAgICAgICAncG9ydGFsbW1tJyxcclxuICAgICAgICAgICAgJ3NoYXJwJyxcclxuICAgICAgICAgICAgJ3NpZS0nLFxyXG4gICAgICAgICAgICAnc29ueWVyaWNzc29uJyxcclxuICAgICAgICAgICAgJ3N5bWJpYW4nLFxyXG4gICAgICAgICAgICAnd2luZG93cyBjZScsXHJcbiAgICAgICAgICAgICdiZW5xJyxcclxuICAgICAgICAgICAgJ21kYScsXHJcbiAgICAgICAgICAgICdtb3QtJyxcclxuICAgICAgICAgICAgJ29wZXJhIG1pbmknLFxyXG4gICAgICAgICAgICAncGhpbGlwcycsXHJcbiAgICAgICAgICAgICdwb2NrZXQgcGMnLFxyXG4gICAgICAgICAgICAnc2FnZW0nLFxyXG4gICAgICAgICAgICAnc2Ftc3VuZycsXHJcbiAgICAgICAgICAgICdodGMnLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBtb2JpbGVDbGllbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihtb2JpbGVDbGllbnRzW2ldKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSkoKSxcclxuICAgIGlzTW9iaWxlQXBwOiAoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUpXHJcbiAgICAgICAgICAgIC8vIGZvciBvbGQgSUVcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgbWV0YVRhZ3M6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKSBhcyBhbnk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YVRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG1ldGFUYWdzW2ldLmdldEF0dHJpYnV0ZSgnbmFtZScpID09ICd2aWV3cG9ydCcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gbWV0YVRhZ3NbaV0uZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgJiYgY29udGVudC5pbmRleE9mKCd3aWR0aD1kZXZpY2Utd2lkdGgnKSAhPT0gLTEpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNOYXRpdmVNb2JpbGVBcHA6IGZhbHNlLCAvLyB3aWxsIGNoYW5nZSBpZiBtb2JpbGUgYWRhcHRlciB3aWxsIGxvYWQgW2luIGl0cyAnaW5pdCcgbWV0aG9kXS5cclxuICAgIGlzVG91Y2g6IChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KVxyXG4gICAgICAgICAgICAvLyB3b3JrcyBvbiBtb3N0IGJyb3dzZXJzXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoJ29ubXNnZXN0dXJlY2hhbmdlJyBpbiB3aW5kb3cpIHtcclxuICAgICAgICAgICAgLy8gd29ya3Mgb24gaWUxMFxyXG4gICAgICAgICAgICAvLyBUcnkgdG8gZGV0ZXJtaW5lIGlmIElFIGlzIG9wZW4gaW4gbWV0cm8gbW9kZS4gTWV0cm8gZG9lc24ndCBhbGxvdyBhY3RpdmVYLCB0aGF0J3MgdGhlIGJlc3QgdGVzdCBhdmFpbGFibGUgYXMgb2YgSUUxMS5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSkoKSxcclxuICAgIGlzT25MaW5lOiAoKSA9PiBuYXZpZ2F0b3Iub25MaW5lLFxyXG4gICAgbWVzc2FnaW5nTWV0aG9kOiAwXHJcbn07XHJcbmNvbnN0IGlzU3RvcmFnZUVuYWJsZWQgPSAoc3RvcmFnZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3N0b3JhZ2VOYW1lXTtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGVzdE5hbWUgPSAnX2dpZ19sb2NhbFN0b3JhZ2VfdGVzdCc7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gJ2p1c3QgY2hlY2tpbmcgZm9yIGxvY2FsU3RvcmFnZSc7XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHRlc3ROYW1lLCB0ZXN0VmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0b3JhZ2UuZ2V0SXRlbSh0ZXN0TmFtZSkgPT09IHRlc3RWYWx1ZTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0odGVzdE5hbWUpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgIC8vIFJlYXNvbnM6XHJcbiAgICAgICAgLy8gLSBJbnNpZGUgM3JkIHBhcnR5IEFQSSBwcm94eSBpRnJhbWUuXHJcbiAgICAgICAgLy8gLSBTYWZhcmkgaW4gaW5jb2duaXRvIG1vZGUgd2lsbCBlcnJvciB3aXRoIFwicXVvdGEgZXhjZWVkZWRcIi5cclxuICAgICAgICAvLyAtIENocm9tZSB3aXRoIDNyZCBwYXJ0eSBjb29raWVzIGRpc2FibGVkIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IGFjY2VzcyB0aGUgd2luZG93LmxvY2FsU3RvcmFnZSBvYmplY3QgaW4gQU5ZIHdheS5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbmxvY2FsSW5mby5zdXBwb3J0c0xvY2FsU3RvcmFnZSA9IGlzU3RvcmFnZUVuYWJsZWQoJ2xvY2FsU3RvcmFnZScpO1xyXG5sb2NhbEluZm8uc3VwcG9ydHNTZXNzaW9uU3RvcmFnZSA9IGlzU3RvcmFnZUVuYWJsZWQoJ3Nlc3Npb25TdG9yYWdlJyk7XHJcbmlmIChsb2NhbEluZm8uaXNJRTExICYmICF3aW5kb3cuaW5kZXhlZERCKVxyXG4gICAgLy8gSUUxMC0xMSBzdXBwb3J0IHBvc3RNZXNzYWdlIGJldHdlZW4gaWZyYW1lcyBidXQgbm90IGluUHJpdmF0ZSBtb2RlXHJcbiAgICBsb2NhbEluZm8uc3VwcG9ydHNQb3N0TWVzc2FnZSA9IGZhbHNlO1xyXG5sb2NhbEluZm8uaXNNQUMgPSBsb2NhbEluZm8uaXNNQUMgJiYgIWxvY2FsSW5mby5pc0lPUztcclxudmFyIG9zID0gbG9jYWxJbmZvLmlzV2luXHJcbiAgICA/ICd3aW5kb3dzJ1xyXG4gICAgOiBsb2NhbEluZm8uaXNXaW5kb3dzUGhvbmVcclxuICAgICAgICA/ICd3aW5waG9uZSdcclxuICAgICAgICA6IGxvY2FsSW5mby5pc0lPU1xyXG4gICAgICAgICAgICA/ICdpb3MtdicgKyBsb2NhbEluZm8uaW9zVmVyc2lvblxyXG4gICAgICAgICAgICA6IGxvY2FsSW5mby5pc01BQ1xyXG4gICAgICAgICAgICAgICAgPyAnbWFjJ1xyXG4gICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNBbmRyb2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnYW5kcm9pZCdcclxuICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG5pZiAob3MpIG9zICs9ICcgJztcclxudmFyIGJyb3dzZXIgPSBsb2NhbEluZm8uaXNDaHJvbWVcclxuICAgID8gJ2Nocm9tZSdcclxuICAgIDogbG9jYWxJbmZvLmlzRkZcclxuICAgICAgICA/ICdmaXJlZm94J1xyXG4gICAgICAgIDogbG9jYWxJbmZvLmlzU2FmYXJpXHJcbiAgICAgICAgICAgID8gJ3NhZmFyaSdcclxuICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNFZGdlXHJcbiAgICAgICAgICAgICAgICA/ICdlZGdlJ1xyXG4gICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTExXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnaWUxMSdcclxuICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWUxMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2llOSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUU4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWU4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbmxvY2FsSW5mby5jdXJyZW50QnJvd3NlciA9IG9zICsgYnJvd3NlcjtcclxubGV0IGJhc2VEb21haW5zOiBzdHJpbmdbXXxzdHJpbmc7XHJcbmlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3M/LmJhc2VEb21haW5zPy5sZW5ndGgpIHtcclxuICAgIGJhc2VEb21haW5zID0gZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zIGFzIHN0cmluZ1tdfHN0cmluZztcclxufSBlbHNlIHtcclxuICAgIGlmICh3aW5kb3cuc2VsZiA9PT0gd2luZG93LnRvcCkge1xyXG4gICAgICAgIC8vIG9ubHkgaW4gdGhlIHRvcCBmcmFtZVxyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci53YXJuKCdnaWd5YTogbWlzc2luZyBiYXNlIGRvbWFpbnMgZm9yIHNpdGUnKTtcclxuICAgIH1cclxuICAgIGJhc2VEb21haW5zID0gW2RvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lXTtcclxufVxyXG5sb2NhbEluZm8uYmFzZURvbWFpbiA9IGdldEJhc2VEb21haW4oYmFzZURvbWFpbnMpO1xyXG4iLCJpbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuaW1wb3J0ICogYXMgdmlld3BvcnRVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvdmlld3BvcnQnO1xyXG5pbXBvcnQgKiBhcyBmdW5jdGlvbnNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZnVuY3Rpb25zJztcclxuXHJcbmV4cG9ydCB2YXIgX3BvcHVwQ29udGFpbmVycyA9IFtdO1xyXG5leHBvcnQgdmFyIF9wc2V1ZG9Db250YWluZXJzID0gW107XHJcbmxldCBfbmV4dFpJbmRleCA9IDk5OTk5OTk5OTtcclxudmFyIGJhY2tMaXN0ZW5lciA9IG51bGw7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0WkluZGV4KCkge1xyXG4gICAgX25leHRaSW5kZXgrKztcclxuICAgIHJldHVybiBfbmV4dFpJbmRleDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFTY3JpcHRFbGVtZW50KGZpbGVOYW1lczogc3RyaW5nW10pOiBIVE1MU2NyaXB0RWxlbWVudCB7XHJcbiAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcclxuICAgIHZhciBzY3JpcHRFbGVtZW50OiBIVE1MU2NyaXB0RWxlbWVudDtcclxuICAgIHZhciBnaWd5YUNkblJlZ2V4ID0gL1xcL1xcL2NkbihzKT9cXC4ocnUxXFwuKT9naWd5YS5jb20vO1xyXG4gICAgZm9yICh2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gc2NyaXB0c1tpXTtcclxuICAgICAgICB2YXIgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChzcmMgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGlmIChnaWd5YUNkblJlZ2V4LnRlc3Qoc3JjKSB8fCBzcmMuaW5kZXhPZignP2FwaWtleT0nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNGaWxlTmFtZUV4aXN0SW5TcmMgPSBmaWxlTmFtZXMubGVuZ3RoID09PSAwIHx8IGZpbGVOYW1lcy5zb21lKGZpbGVOYW1lID0+IHNyYy5pbmRleE9mKGZpbGVOYW1lKSA+IC0xKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0ZpbGVOYW1lRXhpc3RJblNyYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQgPSBzY3JpcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2NyaXB0RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goZWw6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZykge1xyXG4gICAgdmFyIGV2ZW50O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnROYW1lKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBJRTEwIGFuZCBiZWxvdyBzdXBwb3J0XHJcbiAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuICAgICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJ1dHRvblN1Ym1pdExpc3RlbmVyKGVsOiBIVE1MRWxlbWVudCwgaGFuZGxlcjogRnVuY3Rpb24sIGV2ZW50OiAnY2xpY2snIHwgJ3RvdWNoZW5kJyA9ICdjbGljaycsIGRlYnVnTmFtZT86IHN0cmluZykge1xyXG4gICAgLy8gSnVzdCBpbiBjYXNlIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0LlxyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9ICctMScpIHtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50LCAoZTogTW91c2VFdmVudCkgPT4gaGFuZGxlcihlKSk7XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGVsLCAna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKChlLndoaWNoIHx8IGUua2V5Q29kZSkgPT0gMTMpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBoYW5kbGVyKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsOiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFlbCB8fCAhaGFuZGxlcikgcmV0dXJuO1xyXG5cclxuICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBoYW5kbGVyKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbDogYW55LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGlmICghaGFuZGxlcikgcmV0dXJuO1xyXG4gICAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRGVmYXVsdEV2ZW50SGFuZGxpbmcoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5ldmVudCkge1xyXG4gICAgICAgIHdpbmRvdy5ldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREaWFsb2dCYWNrTGlzdGVuZXIoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBfcmVtb3ZlRGlhbG9nQmFja0xpc3RlbmVyKCk7XHJcblxyXG4gICAgLy8gVGhpcyBzaG91bGQgZmlyZSB3aGVuIGJhY2sgaXMgY2xpY2tlZFxyXG4gICAgYmFja0xpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlICYmIGUubmV3VVJMICYmIGUubmV3VVJMLmluZGV4T2YoJ3xnaWd5YU1vYmlsZURpYWxvZycpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgIF9yZW1vdmVEaWFsb2dCYWNrTGlzdGVuZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGhhc2ggY291bGQgY2hhbmdlIHJpZ2h0IGFmdGVyIHRoZSBjYWxsIGlmIGl0IHdhcyBpbml0aWF0ZWQgZnJvbSBhIGxpbmsgdGhhdCBkaWRuJ3QgcmV0dXJuIGZhbHNlXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignfGdpZ3lhTW9iaWxlRGlhbG9nJykgPT0gLTEpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaCArICd8Z2lneWFNb2JpbGVEaWFsb2cnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBiYWNrTGlzdGVuZXIpO1xyXG4gICAgfSwgNTApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmVtb3ZlRGlhbG9nQmFja0xpc3RlbmVyKCkge1xyXG4gICAgaWYgKCFiYWNrTGlzdGVuZXIpIHJldHVybjtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnaGFzaGNoYW5nZScsIGJhY2tMaXN0ZW5lcik7XHJcbiAgICBiYWNrTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgLy9yZXN0b3JlIHByZXZpb3VzIGhhc2hcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnfGdpZ3lhTW9iaWxlRGlhbG9nJywgJycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb0JvZHkoZWw6IEhUTUxFbGVtZW50LCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCk6IHZvaWQge1xyXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5KSByZXR1cm47XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUgJiYgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZWwsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKGVsICYmIGVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNDaGlsZE9mKGNoaWxkOiBOb2RlLCBwYXJlbnQ6IE5vZGUpIHtcclxuICAgIHZhciBkaXJlY3RQYXJlbnQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG5cclxuICAgIHdoaWxlIChkaXJlY3RQYXJlbnQpIHtcclxuICAgICAgICBpZiAocGFyZW50ID09IGRpcmVjdFBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpcmVjdFBhcmVudCA9IGRpcmVjdFBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgd2hpbGUgKGVsKSB7XHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJlZERpdklEKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICdnaWdfJyArIGxvY2FsSW5mby5pbml0VGltZS5nZXRUaW1lKCkudG9TdHJpbmcoKSArICdfJyArIG5hbWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlcyhkb21FbGVtTmFtZTogc3RyaW5nLCBkb21FbGVtQXR0cnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgbmV3RG9tRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZG9tRWxlbU5hbWUpO1xyXG5cclxuICAgIGlmIChkb21FbGVtQXR0cnMpIHtcclxuICAgICAgICBmb3IgKGxldCBlbGVtQXR0ciBpbiBkb21FbGVtQXR0cnMpIHtcclxuICAgICAgICAgICAgbmV3RG9tRWxlbVtlbGVtQXR0cl0gPSBkb21FbGVtQXR0cnNbZWxlbUF0dHJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3RG9tRWxlbTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9wTGV2ZWxEaXYoaWQ/OiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBpZiAoZWwuc3R5bGUuekluZGV4ICE9IG51bGwpIHtcclxuICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAnJyArIGdldE5leHRaSW5kZXgoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIGVsLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUgJiYgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVCeUlEKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCeUlEKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBsb2NhbEluZm8uaXNJRTYgPyAoZWwudGFnTmFtZSA9PSAnVEQnID8gJ3RhYmxlLWNlbGwnIDogZWwudGFnTmFtZSA9PSAnVFInID8gJycgOiBlbC50YWdOYW1lID09ICdUQUJMRScgPyAnJyA6ICdibG9jaycpIDogJyc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQnlJRChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChjICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIVE1MU2l6ZShodG1sOiBzdHJpbmcsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH0ge1xyXG4gICAgdmFyIGRpdk1lYXN1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdk1lYXN1cmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgZGl2TWVhc3VyZS5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xyXG4gICAgZGl2TWVhc3VyZS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdk1lYXN1cmUpO1xyXG4gICAgdmFyIHcgPSBkaXZNZWFzdXJlLm9mZnNldFdpZHRoO1xyXG4gICAgdmFyIGggPSBkaXZNZWFzdXJlLm9mZnNldEhlaWdodDtcclxuICAgIGRpdk1lYXN1cmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZNZWFzdXJlKTtcclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZywgaW5jbHVkZVBhcmVudD86IGJvb2xlYW4pOiBIVE1MRWxlbWVudFtdIHtcclxuICAgIGlmICghcGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHZhciBhckVscyA9IFtdO1xyXG5cclxuICAgIGlmIChpbmNsdWRlUGFyZW50ICYmIGlzRWxlbWVudENsYXNzKHBhcmVudEVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcclxuICAgICAgICBhckVscy5wdXNoKHBhcmVudEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBlbHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpIGFzIGFueTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudENsYXNzKGVsc1tpXSwgY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICBhckVscy5wdXNoKGVsc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyRWxzIHx8IFtdO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5QXR0cmlidXRlKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YWdOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IEhUTUxFbGVtZW50W10ge1xyXG4gICAgdmFyIGFyRWxzID0gW107XHJcbiAgICB2YXIgZWxzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkgYXMgYW55O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZWxzW2ldLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSA9PSBhdHRyaWJ1dGVWYWx1ZSkge1xyXG4gICAgICAgICAgICBhckVscy5wdXNoKGVsc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyRWxzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24oZWw6IEhUTUxFbGVtZW50KTogeyBsZWZ0OiBudW1iZXI7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBib3R0b206IG51bWJlciB9IHtcclxuICAgIGlmICghZWwpIHtcclxuICAgICAgICByZXR1cm4geyBsZWZ0OiAwLCB0b3A6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIHNjcm9sbCA9IHZpZXdwb3J0VXRpbHMuZ2V0U2Nyb2xsKCk7XHJcbiAgICB2YXIgbGVmdCA9IHJlY3QubGVmdCArIHNjcm9sbC5sZWZ0O1xyXG4gICAgdmFyIHRvcCA9IHJlY3QudG9wICsgc2Nyb2xsLnRvcDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgcmlnaHQ6IGxlZnQgKyByZWN0LndpZHRoLFxyXG4gICAgICAgIGJvdHRvbTogdG9wICsgcmVjdC5oZWlnaHQsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc1RvRWxlbWVudChlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGV4aXN0aW5nQ2xhc3NlcyA9IGVsLmNsYXNzTmFtZSA/IGdldENsYXNzTmFtZXMoZWwpIDogW107XHJcbiAgICB2YXIgZXhpc3RpbmdPcmlnaW5hbExlbmd0aCA9IGV4aXN0aW5nQ2xhc3Nlcy5sZW5ndGg7XHJcbiAgICB2YXIgbmV3Q2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG5cclxuICAgIGZvciAodmFyIGogaW4gbmV3Q2xhc3Nlcykge1xyXG4gICAgICAgIHZhciBleGlzdHMgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIW5ld0NsYXNzZXNbal0pIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gZXhpc3RpbmdDbGFzc2VzKSB7XHJcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0NsYXNzZXNbaV0gPT09IG5ld0NsYXNzZXNbal0pIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdDbGFzc2VzLnB1c2gobmV3Q2xhc3Nlc1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChleGlzdGluZ0NsYXNzZXMubGVuZ3RoICE9PSBleGlzdGluZ09yaWdpbmFsTGVuZ3RoKSB7XHJcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZXhpc3RpbmdDbGFzc2VzLmpvaW4oJyAnKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nLCBzdWJzdHJpbmc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBhckNsYXNzID0gZ2V0Q2xhc3NOYW1lcyhlbCk7XHJcbiAgICBmb3IgKHZhciBpID0gYXJDbGFzcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmIChhckNsYXNzW2ldID09PSBjbGFzc05hbWUgfHwgKHN1YnN0cmluZyAmJiBhckNsYXNzW2ldLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpKSB7XHJcbiAgICAgICAgICAgIGFyQ2xhc3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsLmNsYXNzTmFtZSA9IGFyQ2xhc3Muam9pbignICcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc05hbWVzKGVsOiBIVE1MRWxlbWVudCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgdmFyIGNsYXNzZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGlmICh0eXBlb2YgZWwuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVsKSByZXR1cm4gZmFsc2U7XHJcbiAgICBlbHNlIGlmICghY2xhc3NOYW1lKSByZXR1cm4gdHJ1ZTtcclxuICAgIGVsc2UgaWYgKCFlbC5jbGFzc05hbWUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB2YXIgZXhpc3RzID0gZmFsc2U7XHJcbiAgICB2YXIgYXJDbGFzcyA9IGdldENsYXNzTmFtZXMoZWwpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhckNsYXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyQ2xhc3NbaV0gPT09IGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXhpc3RzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxFdmVudChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIWV2ZW50KSByZXR1cm47XHJcbiAgICBpZiAoJ2NhbmNlbGFibGUnIGluIGV2ZW50KVxyXG4gICAgICAgIC8vIEFsbCBicm93c2VycyBleGNlcHQgPElFOVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlbHNlIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHZhciBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWUgPSBuYW1lIHx8ICcnO1xyXG4gICAgZGl2Q29udGFpbmVyLmlubmVySFRNTCA9ICc8JyArIHR5cGUgKyAnIG5hbWU9XCInICsgbmFtZSArICdcIiBpZD1cIicgKyBuYW1lICsgJ1wiPjwvJyArIHR5cGUgKyAnPic7XHJcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNpemUoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdzogYW55LCBoOiBhbnksIGNlbnRlcj86IGJvb2xlYW4pIHtcclxuICAgIGlmIChjb250YWluZXIgPT0gbnVsbCB8fCBjb250YWluZXIuc3R5bGUgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodykge1xyXG4gICAgICAgIHcgPSAnJyArIHc7XHJcbiAgICAgICAgdmFyIGlzV2lkdGhQcmVjZW50YWdlID0gdy5pbmRleE9mKCclJykgPiAwO1xyXG5cclxuICAgICAgICBpZiAoIWlzTmFOKHcpIHx8IGlzV2lkdGhQcmVjZW50YWdlKSB7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aFZhbHVlOiBzdHJpbmcgPSAnJyArIChpc1dpZHRoUHJlY2VudGFnZSA/IHcgOiB3ICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnN0eWxlLndpZHRoICE9IHdpZHRoVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHdpZHRoVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGgpIHtcclxuICAgICAgICBoID0gJycgKyBoO1xyXG4gICAgICAgIHZhciBpc0hlaWdodFByZWNlbnRhZ2UgPSBoLmluZGV4T2YoJyUnKSA+IDA7XHJcblxyXG4gICAgICAgIGlmICghaXNOYU4odykgfHwgaXNIZWlnaHRQcmVjZW50YWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHRWYWx1ZTogc3RyaW5nID0gJycgKyAoaXNIZWlnaHRQcmVjZW50YWdlID8gaCA6IGggKyAncHgnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuc3R5bGUuaGVpZ2h0ICE9PSBoZWlnaHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGhlaWdodFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjZW50ZXIgJiYgdyAmJiBoKSB7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS56SW5kZXggPT0gbnVsbCB8fCBjZW50ZXIpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcnICsgZ2V0TmV4dFpJbmRleCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHZwID0gdmlld3BvcnRVdGlscy5nZXRJbm5lclNpemUoKTtcclxuICAgICAgICB2YXIgc2NybCA9IHZpZXdwb3J0VXRpbHMuZ2V0U2Nyb2xsKCk7XHJcblxyXG4gICAgICAgIHZhciB2cHQgPSBzY3JsLnRvcDtcclxuICAgICAgICB2YXIgdnBsID0gc2NybC5sZWZ0O1xyXG5cclxuICAgICAgICBjb250YWluZXIuc3R5bGUudG9wID0gJycgKyBNYXRoLm1heCgwLCB2cHQgKyBNYXRoLmZsb29yKCh2cC5oIC0gaCkgLyAyKSkgKyAncHgnO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJycgKyBNYXRoLm1heCgwLCB2cGwgKyBNYXRoLmZsb29yKCh2cC53IC0gdykgLyAyKSkgKyAncHgnO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhpZGRlbklmcmFtZShzcmM6IHN0cmluZyk6IEhUTUxJRnJhbWVFbGVtZW50IHtcclxuICAgIHZhciBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgIGlmci5zcmMgPSBzcmM7XHJcbiAgICBpZnIuc3R5bGUud2lkdGggPSAnMzBweCc7XHJcbiAgICBpZnIuc3R5bGUuaGVpZ2h0ID0gJzEwcHgnO1xyXG4gICAgaWZyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGlmci5zdHlsZS50b3AgPSAnLTEwMDBweCc7XHJcbiAgICBpZnIuc3R5bGUubGVmdCA9ICctMTAwMHB4JztcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGFwcGVuZFRvQm9keShpZnIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmdW5jdGlvbnNVdGlscy5pbnZva2VPblBhZ2VMb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgYXBwZW5kVG9Cb2R5KGlmcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlmcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlRW5jb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcclxuICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXCIvZywgJyZxdW90OycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcJy9nLCAnJiMzOTsnKTsgLy8gSUU4IGRvZXNuJ3Qgc3VwcG9ydCAmYXBvcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWFuaXB1bGF0ZUF0dHJpYnV0ZXMoXHJcbiAgICBlbGVtZW50czogRWxlbWVudFtdLFxyXG4gICAgbWF0Y2hlcjogUmVnRXhwLFxyXG4gICAgcmVwbGFjZVByZWRpY2F0ZTogKG1hdGNoOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBjcml0ZXJpYTogKGF0dHI/OiBBdHRyKSA9PiBib29sZWFuID0gKCkgPT4gdHJ1ZSxcclxuKTogdm9pZCB7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBpZiAoIWVsLmF0dHJpYnV0ZXMpIHJldHVybjtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3JpdGVyaWEoYXR0cikpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIudmFsdWUgPSBhdHRyLnZhbHVlLnJlcGxhY2UobWF0Y2hlciwgcmVwbGFjZVByZWRpY2F0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Tm9kZXNVbmRlcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBuO1xyXG4gICAgY29uc3QgdGV4dE5vZGVzOiBUZXh0W10gPSBbXTtcclxuICAgIGNvbnN0IHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGVsLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCwgZmFsc2UpO1xyXG4gICAgd2hpbGUgKChuID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpIGFzIFRleHQpKSB7XHJcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dE5vZGVzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0hUTUxCb29sZWFuQXR0cmlidXRlKGF0dHJOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBbJ2F1dG9jb21wbGV0ZScsICdhdXRvZm9jdXMnLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdoaWRkZW4nLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2VsZWN0ZWQnXS5pbmRleE9mKGF0dHJOYW1lKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNCZWxvbmdUb0dpZ3lhRmllbGRzZXQoZWw6IEVsZW1lbnQpOiBib29sZWFuIHtcclxuXHJcbiAgICBpZiAoIWVsIHx8IGVsIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBlbmQgb2YgcmVjdXJzaW9uIC0gZWxlbWVudCBpcyBub3QgYSBjaGlsZCBvZiBhIGZpZWxkc2V0XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRWxlbWVudENsYXNzKGVsLnBhcmVudEVsZW1lbnQsICdnaWd5YS1maWVsZHNldCcpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNCZWxvbmdUb0dpZ3lhRmllbGRzZXQoZWwucGFyZW50RWxlbWVudCk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgc3RyaW5nVXRpbHNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVyaSB7XHJcbiAgICBwcml2YXRlIF9hbmNob3I6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBpc0Fic29sdXRlID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHA6JyA/ICdodHRwJyA6ICdodHRwcyc7XHJcbiAgICAgICAgaWYgKGlzQWJzb2x1dGUgJiYgdXJsLmluZGV4T2YoJzovLycpID09PSAtMSAmJiB1cmwuY2hhckF0KDApICE9PSAnLycpIHVybCA9IGAke3Byb3RvY29sfTovLyR7dXJsfWA7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yLmhyZWYgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkb21haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ob3N0bmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5wYXRobmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhyZWYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ocmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2VhcmNoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3Iuc2VhcmNoLnNsaWNlKDEpO1xyXG4gICAgfSAvLyBkcm9wcGluZyAnPydcclxuICAgIHB1YmxpYyBnZXQgaGFzaCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhhc2guc2xpY2UoMSk7XHJcbiAgICB9IC8vIGRyb3BwaW5nICcjJ1xyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ocmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb1NlYXJjaChwYXJhbXM6IE9iamVjdCkge1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcmFtc1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgdmFsID09ICdib29sZWFuJyB8fCB0eXBlb2YgdmFsID09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpICYmIG5hbWUgIT0gJ2V2ZW50TmFtZScpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhZGRpdGlvbiA9IHRoaXMuX2FuY2hvci5zZWFyY2ggPyAnJicgOiAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FuY2hvci5zZWFyY2ggKz0gYCR7YWRkaXRpb259JHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNbbmFtZV0pfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGZldGNoPFQ+KHJldHJpZXMgPSAwKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5mZXRjaCA/IGF3YWl0IHRoaXMuYnJvd3NlckZldGNoPFQ+KCkgOiBhd2FpdCB0aGlzLnhocjxUPigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKHJldHJpZXMgPD0gMClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmV0Y2ggZmFpbGVkOiAke2V9YCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKHJldHJpZXMgLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQmFzZU9mKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFVyaS5wYXJzZSh1cmwpLmlzSW4odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzSW4oYmFzZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc0luKGJhc2U6IFVyaSk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNJbihiYXNlOiBVcmkgfCBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodHlwZW9mIGJhc2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGJhc2UgPSBVcmkucGFyc2UoYmFzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAodGhpcy5kb21haW4gPT0gYmFzZS5kb21haW4gfHwgLy8gcGFnZSBpcyB0aGUgYmFzZSBkb21haW5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJEb21haW5PZihiYXNlKSkgJiYgLy8gb3Igc3ViLWRvbWFpbiBvZiBpdFxyXG4gICAgICAgICAgICAoIWJhc2UucGF0aCB8fCB0aGlzLnBhdGguaW5kZXhPZihiYXNlLnBhdGgpID09IDApXHJcbiAgICAgICAgKTsgLy8gcGFnZSBpcyBhbHNvIGluIGJhc2UncyBkZWZpbmVkIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRm9yU3ViRG9tYWlucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb21haW4uaW5kZXhPZignLicpID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzU3ViRG9tYWluT2YoYmFzZTogVXJpKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGRvbWFpbiA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoIWJhc2UuaXNGb3JTdWJEb21haW5zKCkpIGRvbWFpbiA9ICcuJztcclxuXHJcbiAgICAgICAgZG9tYWluICs9IGJhc2UuZG9tYWluO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RyaW5nVXRpbHNVdGlscy5lbmRzV2l0aCh0aGlzLmRvbWFpbiwgZG9tYWluKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlKHVybDogc3RyaW5nLCBpc0Fic29sdXRlID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghdXJsKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFVyaSh1cmwsIGlzQWJzb2x1dGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgYnJvd3NlckZldGNoPFQ+KCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmV0Y2ggZmFpbGVkYCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHhocjxUPigpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCB8fCB4aHIuc3RhdHVzICE9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYHhociBmYWlsZWQgLSAke3hoci5zdGF0dXN9IC0gJHt4aHIuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShqc29uUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCBtcykpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFVyaSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmknO1xyXG5pbXBvcnQgKiBhcyBzdHJpbmdVdGlsc1V0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zdHJpbmdVdGlscyc7XHJcbmltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgdmFyIGdldEFwaURvbWFpbjogKG5hbWVzcGFjZT86IHN0cmluZykgPT4gc3RyaW5nO1xyXG5jb25zdCBnaWd5YURvbWFpbk5hbWVzcGFjZXMgPSBbJ3NvY2lhbGl6ZScsICdhY2NvdW50cycsICdmaWRtJywgJ2dtJywgJ2NvbW1lbnRzJywgJ2djcycsICdpZHMnLCAnZHMnLCAnZ3Njb3VudGVycyddO1xyXG5leHBvcnQgZnVuY3Rpb24gYXBpRG9tYWluRmFjdG9yeShhcGlEb21haW4gPSByZXNvbHZlQXBpRG9tYWluKCksIGRlZmF1bHRBcGlEb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKTogKG5hbWVzcGFjZT86IHN0cmluZykgPT4gc3RyaW5nIHtcclxuICAgIGNvbnN0IHNob3VsZEFkZE5hbWVzcGFjZSA9IFVyaS5wYXJzZShhcGlEb21haW4pLmlzSW4oVXJpLnBhcnNlKGRlZmF1bHRBcGlEb21haW4pKTtcclxuXHJcbiAgICByZXR1cm4gKG5hbWVzcGFjZT86IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgc2hvdWxkQWRkTmFtZXNwYWNlKSB7XHJcbiAgICAgICAgICAgIGxldCBzdWJEb21haW4gPSBuYW1lc3BhY2Uuc3BsaXQoJy4nKVswXTtcclxuICAgICAgICAgICAgaWYgKGdpZ3lhRG9tYWluTmFtZXNwYWNlcy5pbmRleE9mKHN1YkRvbWFpbikgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5lcnJvcihgdHJ5aW5nIHRvIHNlbmQgcmVxdWVzdCB0byBhbiBpbnZhbGlkIGRvbWFpbmApO1xyXG4gICAgICAgICAgICAgICAgc3ViRG9tYWluID0gZ2lneWFEb21haW5OYW1lc3BhY2VzWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYCR7c3ViRG9tYWlufS4ke2FwaURvbWFpbn1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcGlEb21haW47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFEb21haW4obmFtZXNwYWNlPzogc3RyaW5nLCBkYXRhQ2VudGVyID0gZ2lneWEuZGF0YUNlbnRlciwgZGVmYXVsdERvbWFpbiA9IGdpZ3lhLmRlZmF1bHRBcGlEb21haW4pIHtcclxuICAgIGNvbnN0IGRvbWFpbiA9IGAke2RhdGFDZW50ZXJ9LiR7ZGVmYXVsdERvbWFpbn1gO1xyXG5cclxuICAgIGlmIChuYW1lc3BhY2UpIHJldHVybiBgJHtuYW1lc3BhY2V9LiR7ZG9tYWlufWA7XHJcbiAgICBlbHNlIHJldHVybiBkb21haW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VEb21haW4oXHJcbiAgICBiYXNlRG9tYWluczogc3RyaW5nW118c3RyaW5nID0gZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zLFxyXG4gICAgY3VycmVudERvbWFpbiA9IGxvY2F0aW9uLmhvc3RuYW1lLFxyXG4gICAgZGVmYXVsdERvbWFpbnMgPSBbJ2dpZ3lhLmNvbScsICdnaWd5YS1hcGkuY24nLCBnaWd5YS5kZWZhdWx0QXBpRG9tYWluXSxcclxuKTogc3RyaW5nIHtcclxuICAgIC8vICM0OTc4NiAtIFN1cHBvcnQgd2VidmlldyB3aXRob3V0IGhvc3RuYW1lLlxyXG4gICAgaWYgKCFjdXJyZW50RG9tYWluKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgYmFzZURvbWFpbnMgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICBiYXNlRG9tYWlucyA9IGJhc2VEb21haW5zLnNwbGl0KCcsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9yaWdpblVSSSA9IFVyaS5wYXJzZShjdXJyZW50RG9tYWluKTtcclxuXHJcbiAgICBpZiAoZGVmYXVsdERvbWFpbnMpIHtcclxuICAgICAgICBiYXNlRG9tYWlucyA9IGJhc2VEb21haW5zLmNvbmNhdChkZWZhdWx0RG9tYWlucyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHJhd0RvbWFpbiBvZiBiYXNlRG9tYWlucykge1xyXG4gICAgICAgIC8vIFRoaXMgZG9lcyBub3QgdGFrZSBjYXJlIG9mIHdpbGRjYXJkcyBpbiB0aGUgbWlkZGxlIG9mIHN0cmluZy5cclxuICAgICAgICBjb25zdCBiYXNlRG9tYWluID0gc3RyaW5nVXRpbHNVdGlscy5yZXBsYWNlQWxsKHJhd0RvbWFpbiwgJyonLCAnJyk7XHJcbiAgICAgICAgY29uc3QgYmFzZVVyaSA9IFVyaS5wYXJzZShiYXNlRG9tYWluKTtcclxuICAgICAgICBpZiAoYmFzZVVyaSAmJiBvcmlnaW5VUkkuaXNJbihiYXNlVXJpKSkge1xyXG4gICAgICAgICAgICBpZiAoYmFzZVVyaS5pc0ZvclN1YkRvbWFpbnMoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpblVSSS5kb21haW47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZVVyaS5kb21haW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmFsbGJhY2sgdG8gdGhlIHBhcmVudCdzIHdpbmRvdyBkb21haW4gKGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KS5cclxuICAgIHJldHVybiBvcmlnaW5VUkkuZG9tYWluO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXBpRG9tYWluKFxyXG4gICAgY3VzdG9tQXBpRG9tYWluUHJlZml4ID0gZ2lneWEucGFydG5lclNldHRpbmdzICYmIGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5jdXN0b21BUElEb21haW5QcmVmaXgsXHJcbiAgICBiYXNlRG9tYWluID0gbG9jYWxJbmZvLmJhc2VEb21haW4sXHJcbiAgICBkYXRhQ2VudGVyID0gZ2lneWEuZGF0YUNlbnRlcixcclxuICAgIGRlZmF1bHRBcGlEb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluLFxyXG4pIHtcclxuICAgIGlmIChjdXN0b21BcGlEb21haW5QcmVmaXggJiYgYmFzZURvbWFpbiAmJiBiYXNlRG9tYWluICE9PSBkZWZhdWx0QXBpRG9tYWluKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2N1c3RvbUFwaURvbWFpblByZWZpeH0uJHtiYXNlRG9tYWlufWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBnZXRHaWd5YURvbWFpbih1bmRlZmluZWQsIGRhdGFDZW50ZXIsIGRlZmF1bHRBcGlEb21haW4pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIERPTVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9ET00nO1xyXG5pbXBvcnQgeyBnZXRDZG5SZXNvdXJjZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9jZG4nO1xyXG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsRnVuY3Rpb24obmFtZTogc3RyaW5nLCBhclBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgIHZhciBmbiA9IGV2YWwobmFtZSk7XHJcbiAgICB2YXIgYXJQYXJ0cyA9IG5hbWUuc3BsaXQoJy4nKTtcclxuICAgIGFyUGFydHMuc3BsaWNlKGFyUGFydHMubGVuZ3RoIC0gMSwgMSk7XHJcbiAgICB2YXIgc2NvcGUgPSBldmFsKGFyUGFydHMuam9pbignLicpKTtcclxuICAgIGZuLmFwcGx5KHNjb3BlLCBhclBhcmFtcyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZU9uUGFnZUxvYWQoZnVuYzogRnVuY3Rpb24sIGNvbXBsZXRlT25seT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgICAoIWRvY3VtZW50LnJlYWR5U3RhdGUgJiYgZG9jdW1lbnQuYm9keSkgfHxcclxuICAgICAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8XHJcbiAgICAgICAgKCFjb21wbGV0ZU9ubHkgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyAmJiBkb2N1bWVudC5ib2R5KVxyXG4gICAgKSB7XHJcbiAgICAgICAgZnVuYygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgY2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZm5PbkxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBmdW5jKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmbk9uTG9hZCwgMjAwMDApOyAvLyBmYWxsYmFjayAtIHNvbWV0aW1lcyByZWFkeXN0YXRlIHN0YXlzIHN0dWNrIG9uIGludGVyYWN0aXZlXHJcblxyXG4gICAgICAgIERPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGZuT25Mb2FkKTtcclxuICAgICAgICBET01VdGlscy5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnRE9NQ29udGVudExvYWRlZCcsIGZuT25Mb2FkKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWxpYXMocHVibGljTmFtZTogc3RyaW5nLCBmbmM6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBhck5hbWVTZWdtZW50cyA9IHB1YmxpY05hbWUuc3BsaXQoJy4nKTtcclxuICAgIGxldCBvQ3VycmVudFNlZ21lbnQgPSB3aW5kb3c7XHJcbiAgICBmb3IgKGxldCBpU2VnbWVudCA9IDA7IGlTZWdtZW50IDwgYXJOYW1lU2VnbWVudHMubGVuZ3RoIC0gMTsgaVNlZ21lbnQrKykge1xyXG4gICAgICAgIGNvbnN0IHNTZWdtZW50ID0gYXJOYW1lU2VnbWVudHNbaVNlZ21lbnRdO1xyXG4gICAgICAgIGlmICghb0N1cnJlbnRTZWdtZW50W3NTZWdtZW50XSkge1xyXG4gICAgICAgICAgICBvQ3VycmVudFNlZ21lbnRbc1NlZ21lbnRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9DdXJyZW50U2VnbWVudCA9IG9DdXJyZW50U2VnbWVudFtzU2VnbWVudF07XHJcbiAgICB9XHJcbiAgICBvQ3VycmVudFNlZ21lbnRbYXJOYW1lU2VnbWVudHNbYXJOYW1lU2VnbWVudHMubGVuZ3RoIC0gMV1dID0gZm5jO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmbjogKCkgPT4gdm9pZCwgZGVsYXlNaWxsaXNlY29uZHM6IG51bWJlcik6ICgpID0+IHZvaWQge1xyXG4gICAgbGV0IHRpbWVyOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRpbWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZuKCk7XHJcbiAgICAgICAgfSwgZGVsYXlNaWxsaXNlY29uZHMpIGFzIGFueTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNyY1RvSUZyYW1lSWZOZWVkZWQoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCwgc3JjOiBzdHJpbmcgPSBnZXRDZG5SZXNvdXJjZSgnLycpKSB7XHJcbiAgICBpZiAobG9jYWxJbmZvLmlzSU9TV2ViVmlldyB8fCAobG9jYWxJbmZvLmlzSU9TICYmIGxvY2FsSW5mby5pc1dlQ2hhdCkpIHtcclxuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIERPTVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9ET00nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gS2V5cyB7XHJcbiAgICBlc2NhcGUgPSAyNyxcclxuICAgIGJhY2tzcGFjZSA9IDgsXHJcbiAgICBlbnRlciA9IDEzLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhvdEtleSB7XHJcbiAgICBrZXk6IEtleXM7XHJcbiAgICBlbGVtZW50Q29udGV4dD86IEhUTUxFbGVtZW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBvbkhvdEtleUNsaWNrZWQoaG90S2V5RGF0YTogSUhvdEtleSwgaGFuZGxlcjogKCkgPT4gdm9pZCkge1xyXG4gICAgdmFyIGh0bWxDb250ZXh0ID0gaG90S2V5RGF0YS5lbGVtZW50Q29udGV4dCA/IGhvdEtleURhdGEuZWxlbWVudENvbnRleHQgOiBkb2N1bWVudC5ib2R5O1xyXG4gICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcihodG1sQ29udGV4dCwgJ2tleXVwJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PSBob3RLZXlEYXRhLmtleSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRyaW0oczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzLnJlcGxhY2UoL15cXHMqKFxcUyooLipcXFMpPylcXHMqJC8sICckMScpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoczogc3RyaW5nLCAuLi5yZXN0OiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzW2kgKyAxXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHMgPSBzLnNwbGl0KCd7JyArIGkgKyAnfScpLmpvaW4oYXJndW1lbnRzW2kgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZHNXaXRoKHM6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzLmluZGV4T2Yoc3VmZml4LCBzLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwoc3RyOiBzdHJpbmcsIGZpbmQ6IHN0cmluZywgcmVwbGFjZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghZmluZCkgcmV0dXJuIHN0cjtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1hU2VwYXJhdGVkVmFsdWVzKHN0cjE6IHN0cmluZyA9ICcnLCBzdHIyOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBhcnIgPSBzdHIxLmNvbmNhdCgnLCcsIHN0cjIpLnNwbGl0KCcsJyk7XHJcbiAgICByZXR1cm4gZ2lneWEudXRpbHMuYXJyYXkuZ2V0VW5pcXVlVmFsdWVzKGFycikuZmlsdGVyKHggPT4geCkuam9pbignLCcpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbCgpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgICB2YXIgc2NyT2ZYID0gMCxcclxuICAgICAgICBzY3JPZlkgPSAwO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cucGFnZVlPZmZzZXQgPT0gJ251bWJlcicpIHtcclxuICAgICAgICBzY3JPZlkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgc2NyT2ZYID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5ICYmIChkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApKSB7XHJcbiAgICAgICAgc2NyT2ZZID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAgICAgc2NyT2ZYID0gZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKSB7XHJcbiAgICAgICAgc2NyT2ZZID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBzY3JPZlggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGxlZnQ6IHNjck9mWCwgdG9wOiBzY3JPZlkgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbFNpemUoKTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcclxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgdmFyIGggPSBkZS5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAoaCA9PSAwKSBoID0gZGIuY2xpZW50SGVpZ2h0O1xyXG4gICAgdmFyIHcgPSBkZS5jbGllbnRXaWR0aDtcclxuICAgIGlmICh3ID09IDApIHcgPSBkYi5jbGllbnRXaWR0aDtcclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKTogbnVtYmVyIHtcclxuICAgIHZhciBvcmllbnRhdGlvbiA9IHBhcnNlSW50KCh3aW5kb3dbJ29yaWVudGF0aW9uJ10gYXMgc3RyaW5nKSB8fCAnMCcpO1xyXG4gICAgaWYgKG9yaWVudGF0aW9uIDwgMCkgb3JpZW50YXRpb24gKz0gMzYwO1xyXG5cclxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5uZXJTaXplKCk6IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB7XHJcbiAgICB2YXIgaDtcclxuICAgIHZhciB3O1xyXG5cclxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoID0gZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGlmIChoID09IDApIGggPSBkYi5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdyA9IGRlLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmICh3ID09IDApIHcgPSBkYi5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxlQ2VudGVyKCk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogc2Nyb2xsLnRvcCArIE1hdGguZmxvb3Ioc2l6ZS5oIC8gMiksXHJcbiAgICAgICAgbGVmdDogc2Nyb2xsLmxlZnQgKyBNYXRoLmZsb29yKHNpemUudyAvIDIpLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWN0SG9yaXpvbnRhbGx5VmlzaWJsZShyZWN0OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH0pIHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4gcmVjdC5sZWZ0ID49IHNjcm9sbC5sZWZ0ICYmIHJlY3QucmlnaHQgPD0gc2Nyb2xsLmxlZnQgKyBzaXplLnc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVjdEZ1bGx5VmlzaWJsZShyZWN0OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH0pIHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gc2Nyb2xsLnRvcCAmJiByZWN0LmJvdHRvbSA8PSBzY3JvbGwudG9wICsgc2l6ZS5oICYmIHJlY3QubGVmdCA+PSBzY3JvbGwubGVmdCAmJiByZWN0LnJpZ2h0IDw9IHNjcm9sbC5sZWZ0ICsgc2l6ZS53O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5zY3JvbGxJbnRvVmlldykge1xyXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubGV0IHNlbGVjdGVkQ2RuSG9zdHNJbmRleCA9IDA7XHJcbmV4cG9ydCBjb25zdCBDRE5fSE9TVFMgPSB7XHJcbiAgICBodHRwOiBbJ2Nkbi5naWd5YS5jb20nLCAnY2RuMS5naWd5YS5jb20nLCAnY2RuMi5naWd5YS5jb20nLCAnY2RuMy5naWd5YS5jb20nXSxcclxuICAgIGh0dHBzOiBbJ2NkbnMuZ2lneWEuY29tJywgJ2NkbnMxLmdpZ3lhLmNvbScsICdjZG5zMi5naWd5YS5jb20nLCAnY2RuczMuZ2lneWEuY29tJ10sXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5SZXNvdXJjZShwYXRoPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIGdpZ3lhLnRoaXNTY3JpcHQgbWF5IG5vdCBleGlzdCBpZiBsb2FkZWQgZm9yIHNzb09yaWcuXHJcbiAgICBsZXQgYmFzZURvbWFpbiA9IGdpZ3lhLnRoaXNTY3JpcHQ/LmJhc2VEb21haW4gPz8gJyc7XHJcbiAgICBjb25zdCBwcm90b2NvbCA9IGdpZ3lhLnRoaXNTY3JpcHQ/LnByb3RvY29sID8/ICdodHRwcyc7XHJcblxyXG4gICAgLy8gSWYgbm8gYmFzZSBkb21haW4gb3IgaWYgYmFzZSBkb21haW4gZW5kcyB3aXRoIC5naWd5YS5jb20sIHVzZSBHaWd5YSBDRE4uXHJcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBiYXNlIGRvbWFpbi5cclxuICAgIGlmICghYmFzZURvbWFpbiB8fCAvY2Rucz9cXC5naWd5YVxcLmNvbSQvLnRlc3QoYmFzZURvbWFpbikpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnkgPSBDRE5fSE9TVFNbcHJvdG9jb2xdO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnkubGVuZ3RoIDw9IHNlbGVjdGVkQ2RuSG9zdHNJbmRleCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENkbkhvc3RzSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYXNlRG9tYWluID0gc2VsZWN0ZWRTY2hlbWFSZXBvc2l0b3J5W3NlbGVjdGVkQ2RuSG9zdHNJbmRleCsrXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgdGhlIHBhdGggc3RhcnRzIHdpdGggXCIvXCIuXHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICAgIGlmIChwYXRoLmluZGV4T2YoJy8nKSAhPT0gMCkge1xyXG4gICAgICAgICAgICBwYXRoID0gJy8nICsgcGF0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb3RvY29sICsgJzovLycgKyBiYXNlRG9tYWluICsgKHBhdGggfHwgJycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWdDZG5SZXNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldENkblJlc291cmNlKCcvZ3MvaS8nKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9