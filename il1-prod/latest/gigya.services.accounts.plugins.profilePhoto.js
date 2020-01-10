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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/index.ts");
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

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css":
/*!*********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gigya-myPhoto-profile-box-wrapper {\r\n    border-radius: 3px;\r\n    border: 1px solid #b6bdc5;\r\n    position: relative;\r\n    margin-left: 10px;\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-status-icon {\r\n    background: url('$scriptBase/info_tooltip_active.png') no-repeat;\r\n    top: 4px;\r\n    left: 4px;\r\n    width: 14px;\r\n    height: 14px;\r\n    position: absolute;\r\n    font-family: Arial;\r\n    font-weight: 500;\r\n    color: #5a5a5a;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    line-height: 16px;\r\n    z-index: 100000000;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-status-icon .gigya-myPhoto-tooltip-wrap {\r\n    display: block;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-profile-image { /*class to override by customer*/\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-profile-image .gigya-myPhoto-profile-image-default {\r\n    background: #FFF url('$scriptBase/photo_default.png') 50% 50% no-repeat;\r\n}\r\n\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-loading-icon {\r\n    background: url('$scriptBase/loading.gif') 50% 50% no-repeat;\r\n    bottom: 9px;\r\n    width: 30px;\r\n    height: 30px;\r\n    left: 50%;\r\n    margin-left: -15px;\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper input.gigya-myPhoto-upload {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    width: 170%;\r\n    height: 100%;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper span.gigya-myPhoto-upload-button {\r\n    background-color: #FFFFFF;\r\n    opacity: 0.9;\r\n    filter: alpha(opacity=90);\r\n    bottom: 0;\r\n    width: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    font-family: Arial;\r\n    letter-spacing: normal;\r\n    font-weight: 500;\r\n    color: #5a5a5a;\r\n    cursor: pointer;\r\n    display: none;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    line-height: 15px;\r\n    padding: 1px 0 4px;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-tooltip-wrap {\r\n    display: none;\r\n    position: relative;\r\n    top: -4px;\r\n    left: -4px;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-tooltip-wrap .gigya-myPhoto-tooltip {\r\n    /*background: url('$scriptBase/tooltip.png') -28px 0;*/\r\n    height: 33px;\r\n    border: 1px;\r\n    border-style: Solid;\r\n    border-color: #BFCFDA;\r\n    border-radius: 2px;\r\n    background-color: #F3F5F6;\r\n    width: 270px;\r\n    position: relative;\r\n    top: -38px;\r\n    left: -2px;\r\n    text-align: center;\r\n}\r\n\r\n.gigya-myPhoto-arrow {\r\n    background: url('$scriptBase/tooltip_arrow.png');\r\n    width: 18px;\r\n    height: 10px;\r\n    position: absolute;\r\n    top: -4px;\r\n    left: 2px;\r\n    z-index: 9999999999999999999999999;\r\n}\r\n\r\n.gigya-myPhoto-tooltip-text-wrap b {\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n}\r\n\r\ndiv.gigya-myPhoto-tooltip-text-wrap {\r\n    position: absolute;\r\n    left: 4%;\r\n    top: 22%;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-tooltip-wrap .gigya-myPhoto-tooltip div {\r\n    font-weight: 500;\r\n    color: #5a5a5a;\r\n    font-family: Arial;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    padding: 0;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-upload span.gigya-myPhoto-upload-button {\r\n    display: block;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-loading .gigya-myPhoto-profile-image {\r\n    opacity: 0.1;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-loading .gigya-myPhoto-loading-icon {\r\n    display: block;\r\n    top: 40%;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-loading .gigya-myPhoto-status-icon {\r\n    display: none;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-error {\r\n    border-color: #e76468;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-error .gigya-myPhoto-status-icon {\r\n        background: url('$scriptBase/info_tooltip_error.png');\r\n        display: block;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-error span.gigya-myPhoto-upload-button,\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-error .gigya-myPhoto-tooltip-wrap {\r\n        display: block;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-upload .gigya-myPhoto-tooltip-wrap {\r\n    display: none;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-uploaded .gigya-myPhoto-status-icon {\r\n    display: none;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-uploaded span.gigya-myPhoto-upload-button {\r\n    display: block;\r\n    cursor: pointer;\r\n}\r\n\r\n.gigya-myPhoto-uploadForm {\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.gigya-myPhoto-form-wrapper {\r\n    filter: alpha(opacity=0);\r\n    z-index: 999;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 95%;\r\n    top: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css.ts":
/*!************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.style = __webpack_require__(/*! ./style.css */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css");


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/image.ts":
/*!****************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/image.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getImageBase64(file, fixOrientation) {
    if (fixOrientation === void 0) { fixOrientation = false; }
    return new gigya.Promise(function (resolve) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var imageDataUrl = reader.result.toString();
            var imageBase64 = getBase64FromDataUrl(imageDataUrl);
            if (!fixOrientation) {
                resolve(imageBase64);
            }
            else {
                var imageArrayBuffer = base64ToArrayBuffer(imageBase64);
                var orientation = getOrientation(imageArrayBuffer);
                resetBase64Orientation(imageDataUrl, orientation, resolve);
            }
        };
        reader.readAsDataURL(file);
    });
}
exports.getImageBase64 = getImageBase64;
// https://stackoverflow.com/a/40867559/3415505
function getOrientation(readerResult) {
    var view = new DataView(readerResult);
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    var length = view.byteLength;
    var offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
// https://stackoverflow.com/a/40867559/3415505
function resetBase64Orientation(srcDataUrl, srcOrientation, callback) {
    if (isNaN(srcOrientation) || srcOrientation < 2) {
        // not transformation needed.
        callback(getBase64FromDataUrl(srcDataUrl));
        return;
    }
    var img = new Image();
    img.onload = function () {
        var width = img.width, height = img.height, canvas = document.createElement('canvas'), ctx = canvas.getContext("2d");
        // set proper canvas dimensions before transform & export
        if (4 < srcOrientation && srcOrientation < 9) {
            canvas.width = height;
            canvas.height = width;
        }
        else {
            canvas.width = width;
            canvas.height = height;
        }
        // transform context before drawing image
        switch (srcOrientation) {
            case 2:
                ctx.transform(-1, 0, 0, 1, width, 0);
                break;
            case 3:
                ctx.transform(-1, 0, 0, -1, width, height);
                break;
            case 4:
                ctx.transform(1, 0, 0, -1, 0, height);
                break;
            case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
            case 6:
                ctx.transform(0, 1, -1, 0, height, 0);
                break;
            case 7:
                ctx.transform(0, -1, -1, 0, height, width);
                break;
            case 8:
                ctx.transform(0, -1, 1, 0, 0, width);
                break;
            default:
                break;
        }
        // draw image
        ctx.drawImage(img, 0, 0);
        // export base64
        callback(getBase64FromDataUrl(canvas.toDataURL('image/jpeg')));
    };
    img.src = srcDataUrl;
}
// https://stackoverflow.com/a/21797381/3415505
function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
function getBase64FromDataUrl(dataUrl) {
    return dataUrl.split(',')[1];
}


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/index.ts":
/*!****************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsProfilePhoto = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/profilePhoto */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/profilePhoto.ts");
var Gigya_PluginsResourcesCssProfilePhoto = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css.ts */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css.ts");
var Gigya_PluginsResourcesHtmlProfilePhoto = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/display.html.ts */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/display.html.ts");
var Gigya_PluginsResourcesHtmlProfilePhoto_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipFileSize.html.ts */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipFileSize.html.ts");
var Gigya_PluginsResourcesHtmlProfilePhoto_2 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipServerError.html.ts */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipServerError.html.ts");
var Gigya_PluginsResourcesHtmlProfilePhoto_3 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/upload.html.ts */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/upload.html.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.profilePhoto) {
    window.gigya._.plugins.profilePhoto = {};
}
if (!window.gigya._.plugins.resources) {
    window.gigya._.plugins.resources = {};
}
if (!window.gigya._.plugins.resources.css) {
    window.gigya._.plugins.resources.css = {};
}
if (!window.gigya._.plugins.resources.css.profilePhoto) {
    window.gigya._.plugins.resources.css.profilePhoto = {};
}
if (!window.gigya._.plugins.resources.html) {
    window.gigya._.plugins.resources.html = {};
}
if (!window.gigya._.plugins.resources.html.profilePhoto) {
    window.gigya._.plugins.resources.html.profilePhoto = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.profilePhoto, Gigya_PluginsProfilePhoto);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.css.profilePhoto, Gigya_PluginsResourcesCssProfilePhoto);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.html.profilePhoto, Gigya_PluginsResourcesHtmlProfilePhoto, Gigya_PluginsResourcesHtmlProfilePhoto_1, Gigya_PluginsResourcesHtmlProfilePhoto_2, Gigya_PluginsResourcesHtmlProfilePhoto_3);
window.gigya._.UI.attachPlugin(Gigya_PluginsProfilePhoto.MyPhotoPlugin, 'accounts', Gigya_PluginsProfilePhoto.MyPhotoPlugin.PLUGIN_NAME, 'showMyPhotoUI');

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/profilePhoto.ts":
/*!***********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/profilePhoto.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var image_1 = __webpack_require__(/*! ./image */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/image.ts");
var ServerStates;
(function (ServerStates) {
    ServerStates[ServerStates["NotStarted"] = 0] = "NotStarted";
    ServerStates[ServerStates["InProgress"] = 1] = "InProgress";
    ServerStates[ServerStates["Done"] = 2] = "Done";
    ServerStates[ServerStates["Error"] = 3] = "Error";
})(ServerStates = exports.ServerStates || (exports.ServerStates = {}));
exports.IframeUploadInfo = {
    setDimentionsDelay: 500,
    uploadCheckInterval: 500,
    uploading: 'data-upload-status',
};
var ProfilePhotoModes;
(function (ProfilePhotoModes) {
    ProfilePhotoModes[ProfilePhotoModes["display"] = 0] = "display";
    ProfilePhotoModes[ProfilePhotoModes["upload"] = 1] = "upload";
})(ProfilePhotoModes = exports.ProfilePhotoModes || (exports.ProfilePhotoModes = {}));
var ProfilePhotoUploadModes;
(function (ProfilePhotoUploadModes) {
    ProfilePhotoUploadModes[ProfilePhotoUploadModes["formSubmit"] = 0] = "formSubmit";
    ProfilePhotoUploadModes[ProfilePhotoUploadModes["serverApi"] = 1] = "serverApi";
})(ProfilePhotoUploadModes = exports.ProfilePhotoUploadModes || (exports.ProfilePhotoUploadModes = {}));
var ProfilePhotoErrorType;
(function (ProfilePhotoErrorType) {
    ProfilePhotoErrorType[ProfilePhotoErrorType["fileSizeError"] = 0] = "fileSizeError";
    ProfilePhotoErrorType[ProfilePhotoErrorType["serverError"] = 1] = "serverError";
    ProfilePhotoErrorType[ProfilePhotoErrorType["none"] = 2] = "none";
})(ProfilePhotoErrorType = exports.ProfilePhotoErrorType || (exports.ProfilePhotoErrorType = {}));
var ProfilePhotoEditModes;
(function (ProfilePhotoEditModes) {
    ProfilePhotoEditModes[ProfilePhotoEditModes["upload"] = 0] = "upload";
    ProfilePhotoEditModes[ProfilePhotoEditModes["update"] = 1] = "update";
})(ProfilePhotoEditModes = exports.ProfilePhotoEditModes || (exports.ProfilePhotoEditModes = {}));
function ForEach(arr, action) {
    for (var i = 0; i < arr.length; ++i)
        action(arr[i], i, arr);
}
exports.ForEach = ForEach;
var BasePluginGlobal = window.gigya._.plugins.BasePlugin;
var MyPhotoPlugin = /** @class */ (function (_super) {
    tslib_1.__extends(MyPhotoPlugin, _super);
    function MyPhotoPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._photoDimensions = { width: 120, height: 120 };
        _this._currentErrorType = ProfilePhotoErrorType.none;
        _this._currnetErrorText = '';
        _this._isPhotoUploaded = true;
        _this._pluginInitialized = false;
        _this._nextServerQueryId = 0;
        _this.onUserStateChange = function (res) { return _this.userStateChanged(res); };
        _this._nextGeneratedId = 0;
        _this._lastQueryId = 0;
        _this._uploadMode = ProfilePhotoUploadModes.serverApi;
        _this._editMode = ProfilePhotoEditModes.upload;
        _this._imageBase = window.gigya._.getCdnResource('/gs/i/profilePhoto');
        return _this;
    }
    // Override BasePlugin methods
    MyPhotoPlugin.injectionInfo = function () {
        return {
            name: 'profilePhoto',
            namespace: 'accounts',
            methodName: 'showMyPhotoUI',
            jsName: 'gigya.services.accounts.plugins.profilePhoto',
        };
    };
    MyPhotoPlugin.prototype.getConfig = function () {
        return {
            requiredParams: [],
            defaultParams: {
                width: '120',
                height: '120',
                cssPrefix: '',
                mode: ProfilePhotoModes[ProfilePhotoModes.display],
                tooltipTimeout: MyPhotoPlugin.TOOLTIP_TIMEOUT,
            },
            hasMobileUI: true,
            allowModal: false,
        };
    };
    MyPhotoPlugin.prototype.validateUserInputParams = function () {
        if (this.params.mode == 'display' || this.params.mode == 'upload') {
            this._pluginMode = ProfilePhotoModes[this.params.mode];
        }
        else {
            this._pluginMode = ProfilePhotoModes.display;
        }
        var isWidthNumber = !isNaN(parseFloat(this.params.width));
        var isHeightNumber = !isNaN(parseFloat(this.params.height.toString()));
        if (!isWidthNumber) {
            this.params.width = '120';
        }
        if (!isHeightNumber) {
            this.params.height = '120';
        }
    };
    // initialization block.
    MyPhotoPlugin.prototype.init = function (loadedCallback) {
        this._loadedCallback = loadedCallback;
        MyPhotoPlugin.UPDATE_PHOTO_TEXT = this.getText('profilePhoto_update');
        MyPhotoPlugin.UPLOAD_PHOTO_TEXT = this.getText('profilePhoto_upload');
        MyPhotoPlugin.FULL_DEFAULT_IMAGE_PATH = this._imageBase + '/photo_default.png';
        this.validateUserInputParams();
        // css -  injecting the css into the page.
        var css = window.gigya.utils.templates.fill(this.getCss().style, { scriptBase: this._imageBase });
        window.gigya._.plugins.utils.css.addCss(css, this.params.cssPrefix);
        // check whether the user already has a profile photo - async
        this.checkForProfilePhoto();
    };
    MyPhotoPlugin.prototype.resetContainer = function () {
        this.container.innerHTML = this.getControlHtml();
        this._pluginWrapperDiv = window.gigya.utils.DOM.getElementsByClass(this.container, 'gigya-myPhoto-profile-box-wrapper')[0];
        this._pluginWrapperDiv.style.width = this.params.width + 'px';
        this._pluginWrapperDiv.style.height = this.params.height + 'px';
    };
    // Before plugin runs: check whether or not the user
    // has uploaded a photo in order to display the right image.
    MyPhotoPlugin.prototype.checkForProfilePhoto = function () {
        var _this = this;
        var accountInfoParams = {
            callback: this.prepareCallback(function (res) { return _this.onAccountInfoCheckCompleted(res); }),
            include: 'profile,data',
            context: this
        };
        window.gigya.accounts.getAccountInfo(accountInfoParams);
    };
    // callback after profile photo check was completed
    MyPhotoPlugin.prototype.onAccountInfoCheckCompleted = function (response) {
        var self = response.context;
        if (response.errorCode !== 0 && self.params.regToken) {
            self.onAccountInfoErrorWithRegToken();
        }
        else {
            if (response.errorCode === 0) {
                self.onAccountInfoSuccess(response);
            }
            else {
                self.onAccountInfoError(response);
            }
            this.getImageDimensions(self.afterImageDimensionsRetreival);
        }
    };
    MyPhotoPlugin.prototype.afterImageDimensionsRetreival = function () {
        this.render();
        this._loadedCallback();
        this._pluginInitialized = true;
    };
    MyPhotoPlugin.prototype.onAccountInfoSuccess = function (response) {
        // default photo
        this._currentPhotoURL = undefined;
        this._isPhotoUploaded = false;
        if (response.profile.photoURL || response.profile.thumbnailURL) {
            this.updatePluginState();
        }
        this.setProfilePhotoURL(response);
    };
    MyPhotoPlugin.prototype.getProfilePhotoURL = function () {
        // Bug #39850 - Never return a blank photo URL to prevent the image from loading "/undefined".
        return this._currentPhotoURL || MyPhotoPlugin.FULL_DEFAULT_IMAGE_PATH;
    };
    MyPhotoPlugin.prototype.setProfilePhotoURL = function (response) {
        // Look for profile photo to set and override the default image.
        var newPhotoURL;
        if (window.gigya.localInfo.isIE8 && response.profile.thumbnailURL) {
            // The reason IE8 gets only a thumbnail image is because
            // it doesn't support backgroundSize = 'Contain' so the image can't be scaled.
            newPhotoURL = response.profile.thumbnailURL;
        }
        else if (response.profile.photoURL) {
            newPhotoURL = response.profile.photoURL;
        }
        else if (response.profile.thumbnailURL) {
            newPhotoURL = response.profile.thumbnailURL;
        }
        if (newPhotoURL) {
            // Handle insecure photo URLs on secure pages.
            this._currentPhotoURL = window.gigya.global.getPhotoURL(newPhotoURL);
        }
    };
    MyPhotoPlugin.prototype.updatePluginState = function () {
        this._editMode = ProfilePhotoEditModes.update;
        this._isPhotoUploaded = true;
    };
    MyPhotoPlugin.prototype.onAccountInfoError = function (response) {
        this._currentPhotoURL = undefined;
        this._isPhotoUploaded = false;
        this._pluginMode = ProfilePhotoModes.display;
    };
    MyPhotoPlugin.prototype.onAccountInfoErrorWithRegToken = function () {
        this.getProfilePhotoUsingRegToken();
    };
    MyPhotoPlugin.prototype.setPhotoImage = function () {
        this._imageElement.style.background = "#FFF url('" + this.getProfilePhotoURL() + "') 50% 50% no-repeat";
        var isPhotoWider = this.arePhotoDimensionsWider(this._photoDimensions);
        if (isPhotoWider) {
            this._imageElement.style.backgroundSize = 'Contain';
        }
    };
    MyPhotoPlugin.prototype.render = function () {
        // before going into the next async action,
        // resetting container's size so the plugin will take the its space [needed for screenset's centering].
        this.resetContainer();
        var uploadId = this._nextGeneratedId++;
        this._imageElement = this.container.querySelector('#' + this.containerID + ' .' + MyPhotoPlugin.IMAGE_CLASS);
        this.setPhotoImage();
        if (this._pluginMode === ProfilePhotoModes.upload) {
            this.getDOMElements(uploadId);
            this.setDOMEvents();
            if (this._isPhotoUploaded) {
                window.gigya.pluginUtils.DOM.hideElement(this._iconElement);
            }
            // after html was set to container, create iframe.
            this.createIFrameElement();
            this.createInputFileElement();
            // after html was set to container, create iframe.
            this.createFormElement();
            // registering to local events : connect,disconnect
            this.registerLocalEvents();
        }
        // registering global events i.e. 'connect' and 'disconnect'
        this.registerToGlobalEvents();
    };
    MyPhotoPlugin.prototype.getDOMElements = function (uploadId) {
        this.innerContainer = this.container.firstChild;
        this._formWrapper = window.gigya.utils.DOM.getElementsByClass(this.container, 'gigya-myPhoto-form-wrapper')[0];
        this._infoTooltipElement = document.querySelector('#' + this.containerID + ' .gigya-myPhoto-tooltip-wrap');
        this._iconElement = document.querySelector('#' + this.containerID + ' .gigya-myPhoto-status-icon');
        this._tooltipContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gigya-myPhoto-tooltip')[0];
        this._tooltipTextContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gigya-myPhoto-tooltip-text-wrap')[0];
        this._uploadForm = document.querySelector('#' + this.containerID + ' form');
        this._isFilesFeatureSupported = window.gigya.localInfo.isBrowserSupportsFilesAPI;
        this._uploadTextElement = document.querySelector('#' + this.containerID + ' .gigya-myPhoto-upload-button');
        this._uploadIframeID = this.params.containerID + '_upload' + uploadId + '_target';
        this._formID = this.params.containerID + '_upload' + uploadId + '_form';
    };
    MyPhotoPlugin.prototype.setDOMEvents = function () {
        var _this = this;
        this._fileInputClicked = function () { return _this.onFileInputClicked(); };
        this._fileInputChanged = function () { return _this.onFileInputChange(); };
        this._iconMouseHover = function () { return _this.onIconHovered(); };
    };
    MyPhotoPlugin.prototype.registerLocalEvents = function () {
        var _this = this;
        this.listenOnIframe = function () {
            var iframeStateName = _this._uploadIframe.getAttribute(exports.IframeUploadInfo.uploading);
            var iframeState = ServerStates[iframeStateName];
            if (iframeState !== _this._photoProfileState)
                _this.onServerQueryEnd(_this._lastQueryId, iframeState);
        };
        window.gigya.utils.DOM.addEventListener(this._fileInput, 'change', this._fileInputChanged);
        window.gigya.utils.DOM.addEventListener(this._fileInput, 'click', this._fileInputClicked);
        window.gigya.utils.DOM.addEventListener(this._iconElement, 'mouseover', this._iconMouseHover);
    };
    MyPhotoPlugin.prototype.updateUserPhoto = function (res) {
        this._editMode = ProfilePhotoEditModes.update;
        var isNewUpdatedPhotoWider = this.arePhotoDimensionsWider(res.dimensions);
        this._currentPhotoURL = res.photoURL;
        this._photoDimensions = res.dimensions;
        this.setPhotoImage();
        if (this._editMode == ProfilePhotoEditModes.update && this._iconElement) {
            window.gigya.pluginUtils.DOM.hideElement(this._iconElement);
        }
        this._uploadTextElement.innerHTML = MyPhotoPlugin.UPDATE_PHOTO_TEXT;
        this.toggleErrorIndication(false);
    };
    MyPhotoPlugin.prototype.registerToGlobalEvents = function () {
        this.addGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
        });
        this.addGlobalEventHandler(MyPhotoPlugin.USER_INFO_CHANGE_EVENT, this.onUserStateChange);
    };
    MyPhotoPlugin.prototype.unregisterToGlobalEvents = function () {
        this.removeGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
        });
        this.removeGlobalEventHandler(MyPhotoPlugin.USER_INFO_CHANGE_EVENT, this.onUserStateChange);
    };
    MyPhotoPlugin.prototype.unregisterLocalEvents = function () {
        var _this = this;
        window.gigya.utils.DOM.removeEventListener(this._iconElement, 'mouseover', function (ev) {
            _this.displayTooltip();
        });
        window.gigya.utils.DOM.removeEventListener(this._fileInput, 'change', this._fileInputChanged);
        window.gigya.utils.DOM.removeEventListener(this._fileInput, 'click', this._fileInputClicked);
    };
    MyPhotoPlugin.prototype.onFileInputClicked = function () {
        this.toggleErrorIndication(false);
        return true;
    };
    MyPhotoPlugin.prototype.onIconHovered = function () {
        if (this._currnetErrorText == '') {
            this._currnetErrorText = this._fileSizeErrorText;
            this.displayTooltip();
        }
    };
    MyPhotoPlugin.prototype.onFileInputChange = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this._isFilesFeatureSupported) return [3 /*break*/, 4];
                        if (!(this._fileInput.files[0].size > MyPhotoPlugin.MAX_IMAGE_BYTE_SIZE)) return [3 /*break*/, 1];
                        this._fileInput.value = null;
                        this._currentErrorType = ProfilePhotoErrorType.fileSizeError;
                        this._currnetErrorText = this._fileSizeErrorText;
                        this.toggleErrorIndication(true);
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, image_1.getImageBase64(this._fileInput.files[0], this.params.fixImageOrientation)];
                    case 2:
                        _a._base64PhotoData = _b.sent();
                        this.submitPhoto();
                        _b.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        this._uploadMode = ProfilePhotoUploadModes.formSubmit;
                        this.submitPhoto();
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.startServerQuery = function () {
        this._photoProfileState = ServerStates.InProgress; /* InProgress */
        this._lastQueryId = ++this._nextServerQueryId;
        this._uploadIframe.setAttribute(exports.IframeUploadInfo.uploading, ServerStates[this._photoProfileState]);
        if (!this.uploadCheckInterval)
            this.uploadCheckInterval = window.setInterval(this.listenOnIframe, exports.IframeUploadInfo.uploadCheckInterval);
        return this._lastQueryId;
    };
    MyPhotoPlugin.prototype.onServerQueryEnd = function (serverQueryId, newState, data) {
        if (serverQueryId === this._nextServerQueryId)
            this.serverQueryDone(newState, data);
        else
            this.warn('Ignoring server response #' + serverQueryId);
    };
    MyPhotoPlugin.prototype.stopUploadCheck = function () {
        if (this.uploadCheckInterval) {
            window.clearInterval(this.uploadCheckInterval);
            this.uploadCheckInterval = 0;
        }
    };
    MyPhotoPlugin.prototype.submitPhoto = function () {
        if (this._uploadMode == ProfilePhotoUploadModes.formSubmit) {
            this.sendPhotoWithFormSubmit();
        }
        else {
            this.sendPhotoWithServerApi();
        }
    };
    MyPhotoPlugin.prototype.sendPhotoWithFormSubmit = function () {
        // set up new action & responseId
        this.startServerQuery();
        this._lastResponseId = this._uploadIframeID + '_' + this._lastQueryId;
        var formAction = "https://" + window.gigya._.getApiDomain('accounts') + "/accounts.uploadProfilePhoto?publish=true&context=" + this._lastResponseId + "&saveResponseID=" + this._lastResponseId + "&" + window.gigya.utils.keyValue.serialize(this.getServerParameters());
        this._uploadForm.action = formAction;
        this._uploadForm.target = this._uploadIframeID;
        //display loading image
        this.showLoader(this.innerContainer);
        window.gigya._.plugins.utils.DOM.setAttribute(this._uploadForm, 'encType', 'multipart/form-data');
        this._uploadForm.submit();
    };
    MyPhotoPlugin.prototype.sendPhotoWithServerApi = function () {
        var self = this;
        var generalRequestParams = this.getServerParameters();
        var apiInfoParams = {
            photoBytes: this._base64PhotoData,
            publish: true,
            callback: this.onUploadSavedResponse.bind(this),
        };
        var params = window.gigya.utils.object.merge([generalRequestParams, apiInfoParams]);
        // The following code block is for a scenario that the user has logged-in and has a login_token.
        // The 'regToken' param is sent from getServerParameters and in this case
        // it would be undefined, which will cause a server error if it would be sent.
        if (!params['regToken']) {
            delete params['regToken'];
        }
        this.showLoader(this.innerContainer);
        window.gigya.accounts.setProfilePhoto(params);
    };
    MyPhotoPlugin.prototype.getServerParameters = function () {
        var params = window.gigya.utils.object.extractProperties(this.params, {}, 'APIKey|cid|oauth_token|login_token|source|sourceData|regToken');
        params.authMode = params['oauth_token'] ? 'token' : 'cookie';
        if (!params.APIKey)
            params.APIKey = window.gigya.thisScript.APIKey;
        var webAdapter = window.gigya._.apiAdapters.web;
        if (webAdapter) {
            params.login_token = webAdapter.tokenStore.get(params.APIKey);
            params.gmid = window.gigya._.apiAdapter.getGmidTicket();
        }
        return params;
    };
    MyPhotoPlugin.prototype.serverQueryDone = function (newState, data) {
        var _this = this;
        this.stopUploadCheck();
        // get last error from server since iframe does not report errors across domains
        var params = window.gigya.utils.object.removeUndefined(this.getServerParameters());
        params.saveResponseID = this._lastResponseId;
        params.noAuth = true;
        delete params.login_token;
        delete params.regToken;
        window.gigya._.apiAdapter.sendRequest('socialize.getSavedResponse', params, function (res) { return _this.onUploadSavedResponse(res); }, {
            jsSdkRequestId: this._lastResponseId,
        });
    };
    MyPhotoPlugin.prototype.onUploadSavedResponse = function (res) {
        switch (res.errorCode) {
            case GSErrors_1.GSErrors.OK:
                //onUploadSuccess
                window.gigya.accounts.getAccountInfo({ callback: this.onUpdatedPhotoCompleted, context: this, include: 'profile,data' });
                break;
            case GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE:
            case GSErrors_1.GSErrors.NOT_SUPPORTED:
                this._currentErrorType = ProfilePhotoErrorType.fileSizeError;
                this._currnetErrorText = this._fileSizeErrorText;
                this.toggleErrorIndication(true);
                break;
            default:
                // Any other error
                this._currentErrorType = ProfilePhotoErrorType.serverError;
                this._currnetErrorText = MyPhotoPlugin.SERVER_ERROR_TEXT;
                this.toggleErrorIndication(true);
                break;
        }
    };
    MyPhotoPlugin.prototype.onUpdatedPhotoCompleted = function (response) {
        var self = response.context;
        if (response.profile) {
            self.setProfilePhotoURL(response);
            self._editMode = ProfilePhotoEditModes.update;
            self.getImageDimensions(self.onPhotoDimensionsRetreived);
        }
        else {
            // we have a regToken from the initRegistration API so even though the photo was
            // uploaded, no user still exists.
            self.getProfilePhotoUsingRegToken();
        }
    };
    MyPhotoPlugin.prototype.onPhotoDimensionsRetreived = function () {
        if (this._pluginInitialized) {
            this.hideLoader(this.innerContainer);
            this.toggleErrorIndication(false);
            this._uploadTextElement.innerHTML = MyPhotoPlugin.UPDATE_PHOTO_TEXT;
            window.gigya.events.global.dispatch({ isInternal: false, eventName: MyPhotoPlugin.EVENT_TYPES.onUserInfoChanged }, { sourceData: { photoURL: this.getProfilePhotoURL(), dimensions: this._photoDimensions } });
            if (this._editMode == ProfilePhotoEditModes.upload) {
                window.gigya.utils.DOM.removeClassFromElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
            }
            window.gigya.utils.DOM.addClassToElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
            this._editMode = ProfilePhotoEditModes.update;
        }
    };
    MyPhotoPlugin.prototype.setImageDimensions = function (img) {
        this._photoDimensions.width = img['naturalWidth'];
        this._photoDimensions.height = img['naturalHeight'];
        img = img.onload = img.onerror = null; // remove memory leak
    };
    MyPhotoPlugin.prototype.getProfilePhotoUsingRegToken = function () {
        var _this = this;
        var getProfilePhotoParams = this.getServerParameters();
        getProfilePhotoParams.type = window.gigya.localInfo.isIE8 ? 'thumbnail' : 'orig';
        // ts = time stamp for 'cache buster'
        getProfilePhotoParams.ts = new Date().getTime();
        var url = this.buildUrlForProfilePhotoAPI(getProfilePhotoParams);
        var img = new Image();
        var self = this;
        img.onload = this.prepareCallback(function () {
            self.setImageDimensions(img);
            self._currentPhotoURL = url;
            self.onPhotoDimensionsRetreived();
            if (!self._pluginInitialized) {
                self.afterImageDimensionsRetreival();
            }
        });
        img.onerror = function () {
            if (!self._pluginInitialized) {
                self._currentPhotoURL = self._imageBase + '/photo_default.png';
                self.getImageDimensions(self.afterImageDimensionsRetreival);
                self._isPhotoUploaded = false;
            }
            else {
                self._isPhotoUploaded = false;
                self._currentErrorType = ProfilePhotoErrorType.serverError;
                self._currnetErrorText = self.getServerErrorText('Profile photo inaccesible.');
                _this.toggleErrorIndication(true);
                if (self._editMode === ProfilePhotoEditModes.upload) {
                    window.gigya.utils.DOM.addClassToElement(self.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
                    window.gigya.pluginUtils.DOM.showElement(self._iconElement);
                }
                else {
                    window.gigya.utils.DOM.addClassToElement(self.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
                }
                window.gigya.pluginUtils.DOM.showElement(self._uploadTextElement);
            }
            img = img.onload = img.onerror = null; // remove memory leak
        };
        img.src = url;
    };
    MyPhotoPlugin.prototype.buildUrlForProfilePhotoAPI = function (getProfilePhotoParams) {
        return (getProfilePhotoParams.login_token || getProfilePhotoParams.regToken ? 'https' : window.gigya.localInfo.protocol) + "://" + window.gigya._.getApiDomain('accounts') + "/accounts.getProfilePhoto?" + window.gigya.utils.keyValue.serialize(getProfilePhotoParams);
    };
    MyPhotoPlugin.prototype.getImageDimensions = function (callback) {
        var _this = this;
        var img = new Image();
        img.onload = this.prepareCallback(function () {
            _this.setImageDimensions(img);
            callback.apply(_this);
        });
        img.onerror = function () {
            var errorMessage = 'Profile photo inaccessible.';
            img = img.onload = img.onerror = null; // remove memory leak
            _this._currentErrorType = ProfilePhotoErrorType.serverError;
            _this._currnetErrorText = _this.getServerErrorText(errorMessage);
            _this.toggleErrorIndication(true);
            if (_this._editMode === ProfilePhotoEditModes.upload) {
                window.gigya.utils.DOM.addClassToElement(_this.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
                window.gigya.pluginUtils.DOM.showElement(_this._iconElement);
            }
            else {
                window.gigya.utils.DOM.addClassToElement(_this.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
            }
            window.gigya.pluginUtils.DOM.showElement(_this._uploadTextElement);
            callback(_this);
        };
        img.src = this.getProfilePhotoURL();
    };
    MyPhotoPlugin.prototype.arePhotoDimensionsWider = function (dimenstions) {
        return dimenstions.width > parseInt(this.params.width) || dimenstions.height > parseInt(this.params.height);
    };
    MyPhotoPlugin.prototype.dispose = function () {
        this.unregisterToGlobalEvents();
        _super.prototype.dispose.call(this);
    };
    //------------------------------Templating ----------------------------------------//
    MyPhotoPlugin.prototype.getControlHtml = function () {
        this._fileSizeErrorText = this.getText('profilePhoto_fileSizeInfo');
        this.container.innerHTML = '';
        var template;
        if (this._pluginMode == ProfilePhotoModes.upload) {
            var fileUploadText;
            if (this._isPhotoUploaded) {
                fileUploadText = MyPhotoPlugin.UPDATE_PHOTO_TEXT;
            }
            else {
                fileUploadText = MyPhotoPlugin.UPLOAD_PHOTO_TEXT;
            }
            var editClass = this._editMode == ProfilePhotoEditModes.upload ? 'gigya-myPhoto-status-upload' : 'gigya-myPhoto-status-uploaded';
            template = window.gigya.utils.templates.fill(this.getTemplates().upload, {
                tooltip: this._fileSizeErrorText,
                uploadText: fileUploadText,
                editClass: editClass,
            });
        }
        else {
            // display
            template = window.gigya.utils.templates.fill(this.getTemplates().display, {});
        }
        return template;
    };
    MyPhotoPlugin.prototype.createIFrameElement = function () {
        this._uploadIframe = document.createElement('iframe');
        this._uploadIframe.style.display = 'none';
        this._uploadIframe.id = this._uploadIframeID;
        this._uploadIframe.setAttribute('name', this._uploadIframeID);
        this._uploadIframe.setAttribute(exports.IframeUploadInfo.uploading, ServerStates[ServerStates.NotStarted]);
        this._uploadIframe.setAttribute('onload', "this.setAttribute('" + exports.IframeUploadInfo.uploading + "','" + ServerStates[ServerStates.Done] + "')");
        this.container.appendChild(this._uploadIframe);
    };
    MyPhotoPlugin.prototype.createFormElement = function () {
        this._uploadForm = document.createElement('form');
        this._uploadForm.className = 'gigya-myPhoto-uploadForm';
        this._uploadForm.enctype = 'multipart/form-data';
        this._uploadForm.method = 'POST';
        this._uploadForm.action = '';
        this._uploadForm.target = this._uploadIframeID;
        this._uploadForm.appendChild(this._fileInput);
        //this._fileInput.setAttribute("form", this._formID);
        this._formWrapper.appendChild(this._uploadForm);
    };
    MyPhotoPlugin.prototype.createInputFileElement = function () {
        this._fileInput = document.createElement('input');
        this._fileInput.type = 'file';
        this._fileInput.title = '';
        this._fileInput.accept = 'image/*';
        this._fileInput.name = '_profilePhoto';
        this._fileInput.className = 'gigya-myPhoto-upload';
        this._fileInput.setAttribute('aria-hidden', 'true');
        this._fileInput.setAttribute('tabindex', '0');
        this._fileInput.title = window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.accounts.plugins.screenSet.js', 'no_file_chosen', this.params.lang);
    };
    MyPhotoPlugin.prototype.userStateChanged = function (data) {
        if (data.eventName == MyPhotoPlugin.EVENT_TYPES.onUserInfoChanged) {
            this.updateUserPhoto(data.sourceData);
        }
        else if (data.eventName == MyPhotoPlugin.EVENT_TYPES.onlogin) {
            this.validateUserInputParams();
            this.checkForProfilePhoto();
        }
        else {
            // logout
            this.resetPlugin();
        }
    };
    MyPhotoPlugin.prototype.resetPlugin = function () {
        this._pluginMode = ProfilePhotoModes.display;
        this._editMode = ProfilePhotoEditModes.upload;
        this._currentPhotoURL = undefined;
        this.render();
    };
    MyPhotoPlugin.prototype.showLoader = function (el) {
        if (this._editMode == ProfilePhotoEditModes.upload) {
            window.gigya.utils.DOM.removeClassFromElement(el, MyPhotoPlugin.CLASSES_STATES.upload);
        }
        else {
            window.gigya.utils.DOM.removeClassFromElement(el, MyPhotoPlugin.CLASSES_STATES.update);
        }
        window.gigya.utils.DOM.addClassToElement(el, MyPhotoPlugin.CLASSES_STATES.loading);
        window.gigya.pluginUtils.DOM.hideElement(this._uploadTextElement);
        window.gigya.pluginUtils.DOM.hideElement(this._iconElement);
    };
    MyPhotoPlugin.prototype.hideLoader = function (el) {
        window.gigya.utils.DOM.removeClassFromElement(el, MyPhotoPlugin.CLASSES_STATES.loading);
        if (this._editMode == ProfilePhotoEditModes.upload) {
            window.gigya.utils.DOM.addClassToElement(el, MyPhotoPlugin.CLASSES_STATES.upload);
        }
        else {
            window.gigya.utils.DOM.addClassToElement(el, MyPhotoPlugin.CLASSES_STATES.update);
        }
        window.gigya.pluginUtils.DOM.showElement(this._uploadTextElement);
    };
    MyPhotoPlugin.prototype.displayTooltip = function () {
        this._tooltipTextContainer.innerHTML = this._currnetErrorText;
        window.gigya.pluginUtils.DOM.showElement(this._infoTooltipElement);
        var toolTip = this._infoTooltipElement;
        if (this._currentErrorType == ProfilePhotoErrorType.none) {
            setTimeout(function () {
                window.gigya.pluginUtils.DOM.hideElement(toolTip);
            }, MyPhotoPlugin.TOOLTIP_TIMEOUT);
            this._currnetErrorText = '';
            return;
        }
    };
    MyPhotoPlugin.prototype.toggleErrorIndication = function (showError) {
        if (showError) {
            if (this._editMode == ProfilePhotoEditModes.update) {
                window.gigya.utils.DOM.removeClassFromElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
            }
            else {
                window.gigya.utils.DOM.removeClassFromElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
            }
            window.gigya.utils.DOM.addClassToElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.error);
            window.gigya.pluginUtils.DOM.showElement(this._iconElement);
            this.displayTooltip();
        }
        else {
            window.gigya.utils.DOM.removeClassFromElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.error);
            if (this._editMode == ProfilePhotoEditModes.update) {
                window.gigya.utils.DOM.addClassToElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
                window.gigya.pluginUtils.DOM.hideElement(this._iconElement);
            }
            else {
                window.gigya.utils.DOM.addClassToElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
            }
            window.gigya.pluginUtils.DOM.hideElement(this._infoTooltipElement);
        }
        this.hideLoader(this.innerContainer);
    };
    MyPhotoPlugin.prototype.getServerErrorText = function (errorMessage) {
        return '<b> ' + errorMessage + '</b>';
    };
    // statics
    MyPhotoPlugin.PLUGIN_NAME = 'profilePhoto';
    MyPhotoPlugin.MAX_IMAGE_BYTE_SIZE = 6291456;
    MyPhotoPlugin.TOOLTIP_TIMEOUT = 3000;
    MyPhotoPlugin.SERVER_ERROR_TEXT = 'An error has occurred while trying to upload photo';
    MyPhotoPlugin.USER_INFO_CHANGE_EVENT = 'onUserInfoChanged';
    MyPhotoPlugin.IMAGE_CLASS = 'gigya-myPhoto-profile-image';
    MyPhotoPlugin.DEFAULT_IMAGE_NAME = 'photo_default.png';
    MyPhotoPlugin.CLASSES_STATES = {
        upload: 'gigya-myPhoto-status-upload',
        update: 'gigya-myPhoto-status-uploaded',
        error: 'gigya-myPhoto-status-error',
        loading: 'gigya-myPhoto-status-loading',
    };
    MyPhotoPlugin.EVENT_TYPES = {
        onlogin: 'login',
        onUserInfoChanged: 'UserInfoChanged',
        onlogout: 'logout',
    };
    return MyPhotoPlugin;
}(BasePluginGlobal));
exports.MyPhotoPlugin = MyPhotoPlugin;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/display.html":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/display.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-myPhoto-profile-box-wrapper\">\r\n    <div class=\"gigya-myPhoto-profile-image\"></div>\r\n</div>\r\n";

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/display.html.ts":
/*!*********************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/display.html.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.display = __webpack_require__(/*! ./display.html */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/display.html");


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipFileSize.html":
/*!**************************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipFileSize.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span id=\"errorContainer\">\r\n    $tooltip\r\n</span>";

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipFileSize.html.ts":
/*!*****************************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipFileSize.html.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.tooltipFileSize = __webpack_require__(/*! ./tooltipFileSize.html */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipFileSize.html");


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipServerError.html":
/*!*****************************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipServerError.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>\r\n    <strong>$serverError</strong>\r\n</span>";

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipServerError.html.ts":
/*!********************************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipServerError.html.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.tooltipServerError = __webpack_require__(/*! ./tooltipServerError.html */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipServerError.html");


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/upload.html":
/*!*****************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/upload.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-myPhoto-profile-box-wrapper $editClass\">\r\n    <!-- .status-upload | .status-loading | .status-error | .status-uploaded -->\r\n    <div class=\"gigya-myPhoto-status-icon\">\r\n        <div class=\"gigya-myPhoto-tooltip-wrap\">\r\n            <div class=\"gigya-myPhoto-tooltip\">\r\n                <div class=\"gigya-myPhoto-tooltip-text-wrap\">$tooltip</div>\r\n            </div>\r\n            <div class=\"gigya-myPhoto-arrow\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"gigya-myPhoto-profile-image\"></div>\r\n    <div class=\"gigya-myPhoto-upload-button-wrap\">\r\n        <span class=\"gigya-myPhoto-upload-button\">$uploadText</span>\r\n    </div>\r\n    <div class=\"gigya-myPhoto-loading-icon\"></div>\r\n    <div class=\"gigya-myPhoto-form-wrapper\">\r\n\r\n    </div>\r\n</div>";

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/upload.html.ts":
/*!********************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/upload.html.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = __webpack_require__(/*! ./upload.html */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/upload.html");


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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvY3NzL3N0eWxlLmNzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC9wcm9maWxlUGhvdG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL3RlbXBsYXRlcy9kaXNwbGF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL3RlbXBsYXRlcy9kaXNwbGF5Lmh0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL3RlbXBsYXRlcy90b29sdGlwRmlsZVNpemUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvdGVtcGxhdGVzL3Rvb2x0aXBGaWxlU2l6ZS5odG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC90ZW1wbGF0ZXMvdG9vbHRpcFNlcnZlckVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL3RlbXBsYXRlcy90b29sdGlwU2VydmVyRXJyb3IuaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvdGVtcGxhdGVzL3VwbG9hZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC90ZW1wbGF0ZXMvdXBsb2FkLmh0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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eUM7SUFDekMsb0dBQXlDO0lBQ3pDLDRGQUFxQztJQUNyQyxnR0FBdUM7SUFDdkMsMEVBQTRCO0lBQzVCLGdGQUErQjtJQUMvQixzREFBa0I7SUFDbEIsb0VBQXlCO0lBQ3pCLHdFQUEyQjtJQUMzQiw4REFBc0I7SUFDdEIsd0VBQTJCO0lBQzNCLHdFQUEyQjtJQUMzQixrRUFBd0I7SUFDeEIsNENBQWE7SUFDYixvRkFBaUM7SUFDakMsZ0ZBQStCO0lBQy9CLG9FQUF5QjtJQUN6QixrRkFBZ0M7SUFDaEMsNEVBQTZCO0lBQzdCLHdFQUEyQjtJQUMzQixnRkFBK0I7SUFDL0IsMEVBQTRCO0lBQzVCLGtHQUF3QztJQUN4Qyx3RkFBbUM7SUFDbkMsZ0ZBQStCO0lBQy9CLDRFQUE2QjtJQUM3Qix3RUFBMkI7SUFDM0Isa0hBQWdEO0lBQ2hELGtGQUFnQztJQUNoQyxnRUFBdUI7SUFDdkIsZ0VBQXVCO0lBQ3ZCLHNFQUEwQjtJQUMxQixrRkFBZ0M7SUFDaEMsMERBQW9CO0lBQ3BCLHdGQUFtQztJQUNuQyxnR0FBdUM7SUFDdkMsa0RBQWdCO0lBQ2hCLDhEQUFzQjtJQUN0QiwwREFBb0I7SUFDcEIsc0ZBQWtDO0lBQ2xDLHdFQUEyQjtBQUMvQixDQUFDLEVBbEppQixRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQWtKekI7QUFDRCxJQUFrQixjQUtqQjtBQUxELFdBQWtCLGNBQWM7SUFDNUIsbURBQVE7SUFDUiwwRUFBc0I7SUFDdEIsZ0ZBQXlCO0lBQ3pCLG9IQUEyQztBQUMvQyxDQUFDLEVBTGlCLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBSy9CIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLmFjY291bnRzLnBsdWdpbnMucHJvZmlsZVBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvaW5kZXgudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlciB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2YmRjNTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlciAuZ2lneWEtbXlQaG90by1zdGF0dXMtaWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnJHNjcmlwdEJhc2UvaW5mb190b29sdGlwX2FjdGl2ZS5wbmcnKSBuby1yZXBlYXQ7XFxyXFxuICAgIHRvcDogNHB4O1xcclxcbiAgICBsZWZ0OiA0cHg7XFxyXFxuICAgIHdpZHRoOiAxNHB4O1xcclxcbiAgICBoZWlnaHQ6IDE0cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBjb2xvcjogIzVhNWE1YTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB6LWluZGV4OiAxMDAwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIgLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWljb24gLmdpZ3lhLW15UGhvdG8tdG9vbHRpcC13cmFwIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIgLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1pbWFnZSB7IC8qY2xhc3MgdG8gb3ZlcnJpZGUgYnkgY3VzdG9tZXIqL1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyIC5naWd5YS1teVBob3RvLXByb2ZpbGUtaW1hZ2UgLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1pbWFnZS1kZWZhdWx0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRiB1cmwoJyRzY3JpcHRCYXNlL3Bob3RvX2RlZmF1bHQucG5nJykgNTAlIDUwJSBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIgLmdpZ3lhLW15UGhvdG8tbG9hZGluZy1pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCckc2NyaXB0QmFzZS9sb2FkaW5nLmdpZicpIDUwJSA1MCUgbm8tcmVwZWF0O1xcclxcbiAgICBib3R0b206IDlweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlciBpbnB1dC5naWd5YS1teVBob3RvLXVwbG9hZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDE3MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlciBzcGFuLmdpZ3lhLW15UGhvdG8tdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWw7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGNvbG9yOiAjNWE1YTVhO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMXB4IDAgNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyIC5naWd5YS1teVBob3RvLXRvb2x0aXAtd3JhcCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtNHB4O1xcclxcbiAgICBsZWZ0OiAtNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyIC5naWd5YS1teVBob3RvLXRvb2x0aXAtd3JhcCAuZ2lneWEtbXlQaG90by10b29sdGlwIHtcXHJcXG4gICAgLypiYWNrZ3JvdW5kOiB1cmwoJyRzY3JpcHRCYXNlL3Rvb2x0aXAucG5nJykgLTI4cHggMDsqL1xcclxcbiAgICBoZWlnaHQ6IDMzcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IFNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNCRkNGREE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjVGNjtcXHJcXG4gICAgd2lkdGg6IDI3MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogLTM4cHg7XFxyXFxuICAgIGxlZnQ6IC0ycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLW15UGhvdG8tYXJyb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJyRzY3JpcHRCYXNlL3Rvb2x0aXBfYXJyb3cucG5nJyk7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAtNHB4O1xcclxcbiAgICBsZWZ0OiAycHg7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXRvb2x0aXAtdGV4dC13cmFwIGIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtbXlQaG90by10b29sdGlwLXRleHQtd3JhcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNCU7XFxyXFxuICAgIHRvcDogMjIlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyIC5naWd5YS1teVBob3RvLXRvb2x0aXAtd3JhcCAuZ2lneWEtbXlQaG90by10b29sdGlwIGRpdiB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGNvbG9yOiAjNWE1YTVhO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIuZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkIHNwYW4uZ2lneWEtbXlQaG90by11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIuZ2lneWEtbXlQaG90by1zdGF0dXMtbG9hZGluZyAuZ2lneWEtbXlQaG90by1wcm9maWxlLWltYWdlIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWxvYWRpbmcgLmdpZ3lhLW15UGhvdG8tbG9hZGluZy1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWxvYWRpbmcgLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWVycm9yIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTc2NDY4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWVycm9yIC5naWd5YS1teVBob3RvLXN0YXR1cy1pY29uIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnJHNjcmlwdEJhc2UvaW5mb190b29sdGlwX2Vycm9yLnBuZycpO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIuZ2lneWEtbXlQaG90by1zdGF0dXMtZXJyb3Igc3Bhbi5naWd5YS1teVBob3RvLXVwbG9hZC1idXR0b24sXFxyXFxuLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlci5naWd5YS1teVBob3RvLXN0YXR1cy1lcnJvciAuZ2lneWEtbXlQaG90by10b29sdGlwLXdyYXAge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIuZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkIC5naWd5YS1teVBob3RvLXRvb2x0aXAtd3JhcCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIuZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkZWQgLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyLmdpZ3lhLW15UGhvdG8tc3RhdHVzLXVwbG9hZGVkIHNwYW4uZ2lneWEtbXlQaG90by11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLW15UGhvdG8tdXBsb2FkRm9ybSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLWZvcm0td3JhcHBlciB7XFxyXFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCB2YXIgc3R5bGUgPSByZXF1aXJlKCcuL3N0eWxlLmNzcycpO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2VCYXNlNjQoZmlsZTogRmlsZSwgZml4T3JpZW50YXRpb24gPSBmYWxzZSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihyZXNvbHZlID0+IHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGFVcmwgPSByZWFkZXIucmVzdWx0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQmFzZTY0ID0gZ2V0QmFzZTY0RnJvbURhdGFVcmwoaW1hZ2VEYXRhVXJsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZml4T3JpZW50YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2VCYXNlNjQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VBcnJheUJ1ZmZlciA9IGJhc2U2NFRvQXJyYXlCdWZmZXIoaW1hZ2VCYXNlNjQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbihpbWFnZUFycmF5QnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNldEJhc2U2NE9yaWVudGF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YVVybCxcclxuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwODY3NTU5LzM0MTU1MDVcclxuZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24ocmVhZGVyUmVzdWx0OiBBcnJheUJ1ZmZlcikge1xyXG5cclxuICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcocmVhZGVyUmVzdWx0KTtcclxuICAgIGlmICh2aWV3LmdldFVpbnQxNigwLCBmYWxzZSkgIT0gMHhGRkQ4KSB7XHJcbiAgICAgICAgcmV0dXJuIC0yO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoO1xyXG4gICAgbGV0IG9mZnNldCA9IDI7XHJcbiAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIDIsIGZhbHNlKSA8PSA4KSByZXR1cm4gLTE7XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gdmlldy5nZXRVaW50MTYob2Zmc2V0LCBmYWxzZSk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDI7XHJcbiAgICAgICAgaWYgKG1hcmtlciA9PSAweEZGRTEpIHtcclxuICAgICAgICAgICAgaWYgKHZpZXcuZ2V0VWludDMyKG9mZnNldCArPSAyLCBmYWxzZSkgIT0gMHg0NTc4Njk2Nikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaXR0bGUgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQgKz0gNiwgZmFsc2UpID09IDB4NDk0OTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IHZpZXcuZ2V0VWludDMyKG9mZnNldCArIDQsIGxpdHRsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGxpdHRsZSk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSAyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIChpICogMTIpLCBsaXR0bGUpID09IDB4MDExMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LmdldFVpbnQxNihvZmZzZXQgKyAoaSAqIDEyKSArIDgsIGxpdHRsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKG1hcmtlciAmIDB4RkYwMCkgIT0gMHhGRjAwKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IHZpZXcuZ2V0VWludDE2KG9mZnNldCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwODY3NTU5LzM0MTU1MDVcclxuZnVuY3Rpb24gcmVzZXRCYXNlNjRPcmllbnRhdGlvbihzcmNEYXRhVXJsOiBzdHJpbmcsIHNyY09yaWVudGF0aW9uOiBudW1iZXIsIGNhbGxiYWNrOiAoYmFzZTY0OiBzdHJpbmcpID0+IHZvaWQpIHtcclxuICAgIGlmIChpc05hTihzcmNPcmllbnRhdGlvbikgfHwgc3JjT3JpZW50YXRpb24gPCAyKSB7XHJcbiAgICAgICAgLy8gbm90IHRyYW5zZm9ybWF0aW9uIG5lZWRlZC5cclxuICAgICAgICBjYWxsYmFjayhnZXRCYXNlNjRGcm9tRGF0YVVybChzcmNEYXRhVXJsKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBpbWcud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodCA9IGltZy5oZWlnaHQsXHJcbiAgICAgICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxyXG4gICAgICAgICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICAvLyBzZXQgcHJvcGVyIGNhbnZhcyBkaW1lbnNpb25zIGJlZm9yZSB0cmFuc2Zvcm0gJiBleHBvcnRcclxuICAgICAgICBpZiAoNCA8IHNyY09yaWVudGF0aW9uICYmIHNyY09yaWVudGF0aW9uIDwgOSkge1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aWR0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRyYW5zZm9ybSBjb250ZXh0IGJlZm9yZSBkcmF3aW5nIGltYWdlXHJcbiAgICAgICAgc3dpdGNoIChzcmNPcmllbnRhdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKC0xLCAwLCAwLCAxLCB3aWR0aCwgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSgtMSwgMCwgMCwgLTEsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0oMSwgMCwgMCwgLTEsIDAsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSgwLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKDAsIDEsIC0xLCAwLCBoZWlnaHQsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0oMCwgLTEsIC0xLCAwLCBoZWlnaHQsIHdpZHRoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKDAsIC0xLCAxLCAwLCAwLCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZHJhdyBpbWFnZVxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8gZXhwb3J0IGJhc2U2NFxyXG4gICAgICAgIGNhbGxiYWNrKGdldEJhc2U2NEZyb21EYXRhVXJsKGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbWcuc3JjID0gc3JjRGF0YVVybDtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxNzk3MzgxLzM0MTU1MDVcclxuZnVuY3Rpb24gYmFzZTY0VG9BcnJheUJ1ZmZlcihiYXNlNjQpIHtcclxuICAgIGNvbnN0IGJpbmFyeV9zdHJpbmcgPSB3aW5kb3cuYXRvYihiYXNlNjQpO1xyXG4gICAgY29uc3QgbGVuID0gYmluYXJ5X3N0cmluZy5sZW5ndGg7XHJcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlfc3RyaW5nLmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnl0ZXMuYnVmZmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCYXNlNjRGcm9tRGF0YVVybChkYXRhVXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBkYXRhVXJsLnNwbGl0KCcsJylbMV07XHJcbn0iLCJpbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zUHJvZmlsZVBob3RvIGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC9wcm9maWxlUGhvdG8nO1xyXG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zUmVzb3VyY2VzQ3NzUHJvZmlsZVBob3RvIGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC9jc3Mvc3R5bGUuY3NzLnRzJztcclxuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc1Jlc291cmNlc0h0bWxQcm9maWxlUGhvdG8gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL3RlbXBsYXRlcy9kaXNwbGF5Lmh0bWwudHMnO1xyXG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zUmVzb3VyY2VzSHRtbFByb2ZpbGVQaG90b18xIGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC90ZW1wbGF0ZXMvdG9vbHRpcEZpbGVTaXplLmh0bWwudHMnO1xyXG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zUmVzb3VyY2VzSHRtbFByb2ZpbGVQaG90b18yIGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC90ZW1wbGF0ZXMvdG9vbHRpcFNlcnZlckVycm9yLmh0bWwudHMnO1xyXG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zUmVzb3VyY2VzSHRtbFByb2ZpbGVQaG90b18zIGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC90ZW1wbGF0ZXMvdXBsb2FkLmh0bWwudHMnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBnaWd5YTogYW55O1xyXG5pZiAoIWdpZ3lhLl8pIHtcclxuICAgIGdpZ3lhLl8gPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucHJvZmlsZVBob3RvKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMucHJvZmlsZVBob3RvID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLnByb2ZpbGVQaG90bykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MucHJvZmlsZVBob3RvID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbCA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLnByb2ZpbGVQaG90bykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLnByb2ZpbGVQaG90byA9IHt9O1xyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5wcm9maWxlUGhvdG8sIEdpZ3lhX1BsdWdpbnNQcm9maWxlUGhvdG8pO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLnByb2ZpbGVQaG90bywgR2lneWFfUGx1Z2luc1Jlc291cmNlc0Nzc1Byb2ZpbGVQaG90byk7XHJcbk9iamVjdC5hc3NpZ24oXHJcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwucHJvZmlsZVBob3RvLFxyXG4gICAgR2lneWFfUGx1Z2luc1Jlc291cmNlc0h0bWxQcm9maWxlUGhvdG8sXHJcbiAgICBHaWd5YV9QbHVnaW5zUmVzb3VyY2VzSHRtbFByb2ZpbGVQaG90b18xLFxyXG4gICAgR2lneWFfUGx1Z2luc1Jlc291cmNlc0h0bWxQcm9maWxlUGhvdG9fMixcclxuICAgIEdpZ3lhX1BsdWdpbnNSZXNvdXJjZXNIdG1sUHJvZmlsZVBob3RvXzMsXHJcbik7XHJcblxyXG5naWd5YS5fLlVJLmF0dGFjaFBsdWdpbihHaWd5YV9QbHVnaW5zUHJvZmlsZVBob3RvLk15UGhvdG9QbHVnaW4sICdhY2NvdW50cycsIEdpZ3lhX1BsdWdpbnNQcm9maWxlUGhvdG8uTXlQaG90b1BsdWdpbi5QTFVHSU5fTkFNRSwgJ3Nob3dNeVBob3RvVUknKTtcclxuIiwiaW1wb3J0IHsgSVBsdWdpblBhcmFtcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luUGFyYW1zJztcclxuaW1wb3J0IHsgSVBsdWdpblRlbXBsYXRlcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luVGVtcGxhdGVzJztcclxuaW1wb3J0IHsgSVBsdWdpbkNTUyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ1NTJztcclxuaW1wb3J0IHsgSUluamVjdGlvbkluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvQVBJL1VpQXBpJztcclxuaW1wb3J0IHsgSVBsdWdpbkNvbmZpZyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ29uZmlnJztcclxuaW1wb3J0IHsgR1NFcnJvcnMgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMnO1xyXG5pbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9CYXNlUGx1Z2luJztcclxuaW1wb3J0IHtnZXRJbWFnZUJhc2U2NH0gZnJvbSBcIi4vaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNlcnZlclN0YXRlcyB7XHJcbiAgICBOb3RTdGFydGVkLFxyXG4gICAgSW5Qcm9ncmVzcyxcclxuICAgIERvbmUsXHJcbiAgICBFcnJvcixcclxufVxyXG5leHBvcnQgdmFyIElmcmFtZVVwbG9hZEluZm8gPSB7XHJcbiAgICBzZXREaW1lbnRpb25zRGVsYXk6IDUwMCxcclxuICAgIHVwbG9hZENoZWNrSW50ZXJ2YWw6IDUwMCxcclxuICAgIHVwbG9hZGluZzogJ2RhdGEtdXBsb2FkLXN0YXR1cycsXHJcbn07XHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVQaG90b01vZGVzIHtcclxuICAgIGRpc3BsYXksXHJcbiAgICB1cGxvYWQsXHJcbn1cclxuZXhwb3J0IGVudW0gUHJvZmlsZVBob3RvVXBsb2FkTW9kZXMge1xyXG4gICAgZm9ybVN1Ym1pdCxcclxuICAgIHNlcnZlckFwaSxcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElQaG90b0RpbWVuc2lvbnMge1xyXG4gICAgd2lkdGg6IE51bWJlcjtcclxuICAgIGhlaWdodDogTnVtYmVyO1xyXG59XHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVQaG90b0Vycm9yVHlwZSB7XHJcbiAgICBmaWxlU2l6ZUVycm9yLFxyXG4gICAgc2VydmVyRXJyb3IsXHJcbiAgICBub25lLFxyXG59XHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVQaG90b0VkaXRNb2RlcyB7XHJcbiAgICB1cGxvYWQsXHJcbiAgICB1cGRhdGUsXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvZmlsZVBob3RvUGFyYW1zIGV4dGVuZHMgSVBsdWdpblBhcmFtcyB7XHJcbiAgICBtb2RlOiBzdHJpbmc7XHJcbiAgICBjc3NQcmVmaXg6IHN0cmluZztcclxuICAgIHRvb2x0aXBUaW1lb3V0OiBudW1iZXI7XHJcbiAgICBhcGlEb21haW4/OiBzdHJpbmc7XHJcbiAgICBkZXZpY2VUeXBlPzogc3RyaW5nO1xyXG4gICAgcmVnVG9rZW4/OiBzdHJpbmc7XHJcbiAgICBsb2dpblRva2VuPzogc3RyaW5nO1xyXG4gICAgaGFzTW9iaWxlVUk/OiBib29sZWFuO1xyXG4gICAgYWxsb3dNb2RhbD86IGJvb2xlYW47XHJcbiAgICBmaXhJbWFnZU9yaWVudGF0aW9uPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9maWxlUGhvdG9VcGxvYWRUZW1wbGF0ZXMgZXh0ZW5kcyBJUGx1Z2luVGVtcGxhdGVzIHtcclxuICAgIGRpc3BsYXk6IHN0cmluZztcclxuICAgIHVwbG9hZDogc3RyaW5nO1xyXG4gICAgdG9vbHRpcEZpbGVTaXplOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvZmlsZVBob3RvVXBsb2FkUGx1Z2luQ1NTIGV4dGVuZHMgSVBsdWdpbkNTUyB7XHJcbiAgICBzdHlsZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVudW1lcmFibGU8VD4ge1xyXG4gICAgbGVuZ3RoOiBudW1iZXI7XHJcbiAgICBbaTogbnVtYmVyXTogVDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRm9yRWFjaDxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBhY3Rpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IHZvaWQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSBhY3Rpb24oYXJyW2ldLCBpLCBhcnIpO1xyXG59XHJcblxyXG5jb25zdCBCYXNlUGx1Z2luR2xvYmFsOiB0eXBlb2YgQmFzZVBsdWdpbiA9IGdpZ3lhLl8ucGx1Z2lucy5CYXNlUGx1Z2luO1xyXG5leHBvcnQgY2xhc3MgTXlQaG90b1BsdWdpbiBleHRlbmRzIEJhc2VQbHVnaW5HbG9iYWw8SVByb2ZpbGVQaG90b1BhcmFtcywgSVByb2ZpbGVQaG90b1VwbG9hZFRlbXBsYXRlcywgSVByb2ZpbGVQaG90b1VwbG9hZFBsdWdpbkNTUz4ge1xyXG4gICAgLy8gc3RhdGljc1xyXG4gICAgc3RhdGljIFBMVUdJTl9OQU1FID0gJ3Byb2ZpbGVQaG90byc7XHJcbiAgICBzdGF0aWMgTUFYX0lNQUdFX0JZVEVfU0laRSA9IDYyOTE0NTY7XHJcbiAgICBzdGF0aWMgVE9PTFRJUF9USU1FT1VUID0gMzAwMDtcclxuICAgIHN0YXRpYyBTRVJWRVJfRVJST1JfVEVYVCA9ICdBbiBlcnJvciBoYXMgb2NjdXJyZWQgd2hpbGUgdHJ5aW5nIHRvIHVwbG9hZCBwaG90byc7XHJcbiAgICBzdGF0aWMgVVNFUl9JTkZPX0NIQU5HRV9FVkVOVCA9ICdvblVzZXJJbmZvQ2hhbmdlZCc7XHJcbiAgICBzdGF0aWMgSU1BR0VfQ0xBU1MgPSAnZ2lneWEtbXlQaG90by1wcm9maWxlLWltYWdlJztcclxuICAgIHN0YXRpYyBERUZBVUxUX0lNQUdFX05BTUUgPSAncGhvdG9fZGVmYXVsdC5wbmcnO1xyXG4gICAgc3RhdGljIEZVTExfREVGQVVMVF9JTUFHRV9QQVRIOiBzdHJpbmc7XHJcbiAgICBzdGF0aWMgVVBEQVRFX1BIT1RPX1RFWFQ6IHN0cmluZztcclxuICAgIHN0YXRpYyBVUExPQURfUEhPVE9fVEVYVDogc3RyaW5nO1xyXG4gICAgc3RhdGljIENMQVNTRVNfU1RBVEVTID0ge1xyXG4gICAgICAgIHVwbG9hZDogJ2dpZ3lhLW15UGhvdG8tc3RhdHVzLXVwbG9hZCcsXHJcbiAgICAgICAgdXBkYXRlOiAnZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkZWQnLFxyXG4gICAgICAgIGVycm9yOiAnZ2lneWEtbXlQaG90by1zdGF0dXMtZXJyb3InLFxyXG4gICAgICAgIGxvYWRpbmc6ICdnaWd5YS1teVBob3RvLXN0YXR1cy1sb2FkaW5nJyxcclxuICAgIH07XHJcbiAgICBzdGF0aWMgRVZFTlRfVFlQRVMgPSB7XHJcbiAgICAgICAgb25sb2dpbjogJ2xvZ2luJyxcclxuICAgICAgICBvblVzZXJJbmZvQ2hhbmdlZDogJ1VzZXJJbmZvQ2hhbmdlZCcsXHJcbiAgICAgICAgb25sb2dvdXQ6ICdsb2dvdXQnLFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgX3Bob3RvRGltZW5zaW9uczogSVBob3RvRGltZW5zaW9ucyA9IHsgd2lkdGg6IDEyMCwgaGVpZ2h0OiAxMjAgfTtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRFcnJvclR5cGUgPSBQcm9maWxlUGhvdG9FcnJvclR5cGUubm9uZTtcclxuICAgIHByaXZhdGUgX2ZpbGVTaXplRXJyb3JUZXh0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9jdXJybmV0RXJyb3JUZXh0ID0gJyc7XHJcbiAgICBwcml2YXRlIF9pc1Bob3RvVXBsb2FkZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfcGx1Z2luSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3Bob3RvUHJvZmlsZVN0YXRlOiBTZXJ2ZXJTdGF0ZXM7XHJcbiAgICBwcml2YXRlIF91cGxvYWRJZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpbm5lckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9uZXh0U2VydmVyUXVlcnlJZCA9IDA7XHJcbiAgICBwcml2YXRlIF9sYXN0UmVzcG9uc2VJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfaXNGaWxlc0ZlYXR1cmVTdXBwb3J0ZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9mb3JtSUQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgbGlzdGVuT25JZnJhbWU6ICgpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIHVwbG9hZENoZWNrSW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2ltYWdlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50UGhvdG9VUkw6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2ljb25FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2luZm9Ub29sdGlwRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF91cGxvYWRUZXh0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9wbHVnaW5XcmFwcGVyRGl2OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2Zvcm1XcmFwcGVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2ZpbGVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHByaXZhdGUgX2ZpbGVJbnB1dENoYW5nZWQ6ICgpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9maWxlSW5wdXRDbGlja2VkOiAoKSA9PiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfaWNvbk1vdXNlSG92ZXI6ICgpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIG9uVXNlclN0YXRlQ2hhbmdlID0gKHJlczogT2JqZWN0KSA9PiB0aGlzLnVzZXJTdGF0ZUNoYW5nZWQocmVzKTtcclxuICAgIHByaXZhdGUgX25leHRHZW5lcmF0ZWRJZCA9IDA7XHJcbiAgICBwcml2YXRlIF91cGxvYWRJZnJhbWVJRDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbGFzdFF1ZXJ5SWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9wbHVnaW5Nb2RlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF91cGxvYWRNb2RlOiBQcm9maWxlUGhvdG9VcGxvYWRNb2RlcyA9IFByb2ZpbGVQaG90b1VwbG9hZE1vZGVzLnNlcnZlckFwaTtcclxuICAgIHByaXZhdGUgX2VkaXRNb2RlID0gUHJvZmlsZVBob3RvRWRpdE1vZGVzLnVwbG9hZDtcclxuICAgIHByaXZhdGUgX2Jhc2U2NFBob3RvRGF0YTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfaW1hZ2VCYXNlOiBzdHJpbmcgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9wcm9maWxlUGhvdG8nKTtcclxuICAgIHByaXZhdGUgX3Rvb2x0aXBDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfdG9vbHRpcFRleHRDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfbG9hZGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgX3VwbG9hZEZvcm06IEhUTUxGb3JtRWxlbWVudDtcclxuXHJcbiAgICAvLyBPdmVycmlkZSBCYXNlUGx1Z2luIG1ldGhvZHNcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5qZWN0aW9uSW5mbygpOiBJSW5qZWN0aW9uSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogJ3Byb2ZpbGVQaG90bycsXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZTogJ2FjY291bnRzJyxcclxuICAgICAgICAgICAgbWV0aG9kTmFtZTogJ3Nob3dNeVBob3RvVUknLFxyXG4gICAgICAgICAgICBqc05hbWU6ICdnaWd5YS5zZXJ2aWNlcy5hY2NvdW50cy5wbHVnaW5zLnByb2ZpbGVQaG90bycsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29uZmlnKCk6IElQbHVnaW5Db25maWc8SVByb2ZpbGVQaG90b1BhcmFtcz4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkUGFyYW1zOiBbXSxcclxuICAgICAgICAgICAgZGVmYXVsdFBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMjAnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTIwJyxcclxuICAgICAgICAgICAgICAgIGNzc1ByZWZpeDogJycsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiBQcm9maWxlUGhvdG9Nb2Rlc1tQcm9maWxlUGhvdG9Nb2Rlcy5kaXNwbGF5XSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBUaW1lb3V0OiBNeVBob3RvUGx1Z2luLlRPT0xUSVBfVElNRU9VVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGFzTW9iaWxlVUk6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93TW9kYWw6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVVzZXJJbnB1dFBhcmFtcygpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMubW9kZSA9PSAnZGlzcGxheScgfHwgdGhpcy5wYXJhbXMubW9kZSA9PSAndXBsb2FkJykge1xyXG4gICAgICAgICAgICB0aGlzLl9wbHVnaW5Nb2RlID0gUHJvZmlsZVBob3RvTW9kZXNbdGhpcy5wYXJhbXMubW9kZV0gYXMgYW55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsdWdpbk1vZGUgPSBQcm9maWxlUGhvdG9Nb2Rlcy5kaXNwbGF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGlzV2lkdGhOdW1iZXIgPSAhaXNOYU4ocGFyc2VGbG9hdCh0aGlzLnBhcmFtcy53aWR0aCkpO1xyXG4gICAgICAgIHZhciBpc0hlaWdodE51bWJlciA9ICFpc05hTihwYXJzZUZsb2F0KHRoaXMucGFyYW1zLmhlaWdodC50b1N0cmluZygpKSk7XHJcblxyXG4gICAgICAgIGlmICghaXNXaWR0aE51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy53aWR0aCA9ICcxMjAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzSGVpZ2h0TnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmhlaWdodCA9ICcxMjAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpbml0aWFsaXphdGlvbiBibG9jay5cclxuICAgIHB1YmxpYyBpbml0KGxvYWRlZENhbGxiYWNrOiAoc3VjY2Vzcz86IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9sb2FkZWRDYWxsYmFjayA9IGxvYWRlZENhbGxiYWNrO1xyXG4gICAgICAgIE15UGhvdG9QbHVnaW4uVVBEQVRFX1BIT1RPX1RFWFQgPSB0aGlzLmdldFRleHQoJ3Byb2ZpbGVQaG90b191cGRhdGUnKTtcclxuICAgICAgICBNeVBob3RvUGx1Z2luLlVQTE9BRF9QSE9UT19URVhUID0gdGhpcy5nZXRUZXh0KCdwcm9maWxlUGhvdG9fdXBsb2FkJyk7XHJcbiAgICAgICAgTXlQaG90b1BsdWdpbi5GVUxMX0RFRkFVTFRfSU1BR0VfUEFUSCA9IHRoaXMuX2ltYWdlQmFzZSArICcvcGhvdG9fZGVmYXVsdC5wbmcnO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlVXNlcklucHV0UGFyYW1zKCk7XHJcbiAgICAgICAgLy8gY3NzIC0gIGluamVjdGluZyB0aGUgY3NzIGludG8gdGhlIHBhZ2UuXHJcbiAgICAgICAgdmFyIGNzcyA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0Q3NzKCkuc3R5bGUsIHsgc2NyaXB0QmFzZTogdGhpcy5faW1hZ2VCYXNlIH0pO1xyXG4gICAgICAgIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MuYWRkQ3NzKGNzcywgdGhpcy5wYXJhbXMuY3NzUHJlZml4KTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgdXNlciBhbHJlYWR5IGhhcyBhIHByb2ZpbGUgcGhvdG8gLSBhc3luY1xyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JQcm9maWxlUGhvdG8oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0Q29udGFpbmVyKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuZ2V0Q29udHJvbEh0bWwoKTtcclxuICAgICAgICB0aGlzLl9wbHVnaW5XcmFwcGVyRGl2ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlcicpWzBdO1xyXG4gICAgICAgIHRoaXMuX3BsdWdpbldyYXBwZXJEaXYuc3R5bGUud2lkdGggPSB0aGlzLnBhcmFtcy53aWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5fcGx1Z2luV3JhcHBlckRpdi5zdHlsZS5oZWlnaHQgPSB0aGlzLnBhcmFtcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJlZm9yZSBwbHVnaW4gcnVuczogY2hlY2sgd2hldGhlciBvciBub3QgdGhlIHVzZXJcclxuICAgIC8vIGhhcyB1cGxvYWRlZCBhIHBob3RvIGluIG9yZGVyIHRvIGRpc3BsYXkgdGhlIHJpZ2h0IGltYWdlLlxyXG4gICAgcHVibGljIGNoZWNrRm9yUHJvZmlsZVBob3RvKCkge1xyXG4gICAgICAgIHZhciBhY2NvdW50SW5mb1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMucHJlcGFyZUNhbGxiYWNrKHJlcyA9PiB0aGlzLm9uQWNjb3VudEluZm9DaGVja0NvbXBsZXRlZChyZXMpKSxcclxuICAgICAgICAgICAgaW5jbHVkZTogJ3Byb2ZpbGUsZGF0YScsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGdpZ3lhLmFjY291bnRzLmdldEFjY291bnRJbmZvKGFjY291bnRJbmZvUGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsYmFjayBhZnRlciBwcm9maWxlIHBob3RvIGNoZWNrIHdhcyBjb21wbGV0ZWRcclxuICAgIHByaXZhdGUgb25BY2NvdW50SW5mb0NoZWNrQ29tcGxldGVkKHJlc3BvbnNlOiB7IGVycm9yQ29kZTogbnVtYmVyOyBjb250ZXh0OiBNeVBob3RvUGx1Z2luIH0pIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHJlc3BvbnNlLmNvbnRleHQ7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yQ29kZSAhPT0gMCAmJiBzZWxmLnBhcmFtcy5yZWdUb2tlbikge1xyXG4gICAgICAgICAgICBzZWxmLm9uQWNjb3VudEluZm9FcnJvcldpdGhSZWdUb2tlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvckNvZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbGYub25BY2NvdW50SW5mb1N1Y2Nlc3MocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vbkFjY291bnRJbmZvRXJyb3IocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0SW1hZ2VEaW1lbnNpb25zKHNlbGYuYWZ0ZXJJbWFnZURpbWVuc2lvbnNSZXRyZWl2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFmdGVySW1hZ2VEaW1lbnNpb25zUmV0cmVpdmFsKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVkQ2FsbGJhY2soKTtcclxuICAgICAgICB0aGlzLl9wbHVnaW5Jbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkFjY291bnRJbmZvU3VjY2VzcyhyZXNwb25zZSkge1xyXG4gICAgICAgIC8vIGRlZmF1bHQgcGhvdG9cclxuICAgICAgICB0aGlzLl9jdXJyZW50UGhvdG9VUkwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5faXNQaG90b1VwbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5wcm9maWxlLnBob3RvVVJMIHx8IHJlc3BvbnNlLnByb2ZpbGUudGh1bWJuYWlsVVJMKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGx1Z2luU3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQcm9maWxlUGhvdG9VUkwocmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UHJvZmlsZVBob3RvVVJMKCkge1xyXG4gICAgICAgIC8vIEJ1ZyAjMzk4NTAgLSBOZXZlciByZXR1cm4gYSBibGFuayBwaG90byBVUkwgdG8gcHJldmVudCB0aGUgaW1hZ2UgZnJvbSBsb2FkaW5nIFwiL3VuZGVmaW5lZFwiLlxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGhvdG9VUkwgfHwgTXlQaG90b1BsdWdpbi5GVUxMX0RFRkFVTFRfSU1BR0VfUEFUSDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFByb2ZpbGVQaG90b1VSTChyZXNwb25zZSkge1xyXG4gICAgICAgIC8vIExvb2sgZm9yIHByb2ZpbGUgcGhvdG8gdG8gc2V0IGFuZCBvdmVycmlkZSB0aGUgZGVmYXVsdCBpbWFnZS5cclxuICAgICAgICB2YXIgbmV3UGhvdG9VUkw6IHN0cmluZztcclxuICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU4ICYmIHJlc3BvbnNlLnByb2ZpbGUudGh1bWJuYWlsVVJMKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSByZWFzb24gSUU4IGdldHMgb25seSBhIHRodW1ibmFpbCBpbWFnZSBpcyBiZWNhdXNlXHJcbiAgICAgICAgICAgIC8vIGl0IGRvZXNuJ3Qgc3VwcG9ydCBiYWNrZ3JvdW5kU2l6ZSA9ICdDb250YWluJyBzbyB0aGUgaW1hZ2UgY2FuJ3QgYmUgc2NhbGVkLlxyXG4gICAgICAgICAgICBuZXdQaG90b1VSTCA9IHJlc3BvbnNlLnByb2ZpbGUudGh1bWJuYWlsVVJMO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UucHJvZmlsZS5waG90b1VSTCkge1xyXG4gICAgICAgICAgICBuZXdQaG90b1VSTCA9IHJlc3BvbnNlLnByb2ZpbGUucGhvdG9VUkw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5wcm9maWxlLnRodW1ibmFpbFVSTCkge1xyXG4gICAgICAgICAgICBuZXdQaG90b1VSTCA9IHJlc3BvbnNlLnByb2ZpbGUudGh1bWJuYWlsVVJMO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld1Bob3RvVVJMKSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBpbnNlY3VyZSBwaG90byBVUkxzIG9uIHNlY3VyZSBwYWdlcy5cclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBob3RvVVJMID0gZ2lneWEuZ2xvYmFsLmdldFBob3RvVVJMKG5ld1Bob3RvVVJMKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQbHVnaW5TdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLl9lZGl0TW9kZSA9IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGRhdGU7XHJcbiAgICAgICAgdGhpcy5faXNQaG90b1VwbG9hZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQWNjb3VudEluZm9FcnJvcihyZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQaG90b1VSTCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9pc1Bob3RvVXBsb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9wbHVnaW5Nb2RlID0gUHJvZmlsZVBob3RvTW9kZXMuZGlzcGxheTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQWNjb3VudEluZm9FcnJvcldpdGhSZWdUb2tlbigpIHtcclxuICAgICAgICB0aGlzLmdldFByb2ZpbGVQaG90b1VzaW5nUmVnVG9rZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFBob3RvSW1hZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5faW1hZ2VFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBcIiNGRkYgdXJsKCdcIiArIHRoaXMuZ2V0UHJvZmlsZVBob3RvVVJMKCkgKyBcIicpIDUwJSA1MCUgbm8tcmVwZWF0XCI7XHJcbiAgICAgICAgdmFyIGlzUGhvdG9XaWRlciA9IHRoaXMuYXJlUGhvdG9EaW1lbnNpb25zV2lkZXIodGhpcy5fcGhvdG9EaW1lbnNpb25zKTtcclxuICAgICAgICBpZiAoaXNQaG90b1dpZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdDb250YWluJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gYmVmb3JlIGdvaW5nIGludG8gdGhlIG5leHQgYXN5bmMgYWN0aW9uLFxyXG4gICAgICAgIC8vIHJlc2V0dGluZyBjb250YWluZXIncyBzaXplIHNvIHRoZSBwbHVnaW4gd2lsbCB0YWtlIHRoZSBpdHMgc3BhY2UgW25lZWRlZCBmb3Igc2NyZWVuc2V0J3MgY2VudGVyaW5nXS5cclxuICAgICAgICB0aGlzLnJlc2V0Q29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIHZhciB1cGxvYWRJZCA9IHRoaXMuX25leHRHZW5lcmF0ZWRJZCsrO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5jb250YWluZXJJRCArICcgLicgKyBNeVBob3RvUGx1Z2luLklNQUdFX0NMQVNTKTtcclxuICAgICAgICB0aGlzLnNldFBob3RvSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BsdWdpbk1vZGUgPT09IFByb2ZpbGVQaG90b01vZGVzLnVwbG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldERPTUVsZW1lbnRzKHVwbG9hZElkKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRET01FdmVudHMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUGhvdG9VcGxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLmhpZGVFbGVtZW50KHRoaXMuX2ljb25FbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBhZnRlciBodG1sIHdhcyBzZXQgdG8gY29udGFpbmVyLCBjcmVhdGUgaWZyYW1lLlxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUlGcmFtZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5wdXRGaWxlRWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gYWZ0ZXIgaHRtbCB3YXMgc2V0IHRvIGNvbnRhaW5lciwgY3JlYXRlIGlmcmFtZS5cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAvLyByZWdpc3RlcmluZyB0byBsb2NhbCBldmVudHMgOiBjb25uZWN0LGRpc2Nvbm5lY3RcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckxvY2FsRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlZ2lzdGVyaW5nIGdsb2JhbCBldmVudHMgaS5lLiAnY29ubmVjdCcgYW5kICdkaXNjb25uZWN0J1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJUb0dsb2JhbEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RE9NRWxlbWVudHModXBsb2FkSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5maXJzdENoaWxkIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2Zvcm1XcmFwcGVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZ3lhLW15UGhvdG8tZm9ybS13cmFwcGVyJylbMF07XHJcbiAgICAgICAgdGhpcy5faW5mb1Rvb2x0aXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmNvbnRhaW5lcklEICsgJyAuZ2lneWEtbXlQaG90by10b29sdGlwLXdyYXAnKTtcclxuICAgICAgICB0aGlzLl9pY29uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5jb250YWluZXJJRCArICcgLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWljb24nKTtcclxuICAgICAgICB0aGlzLl90b29sdGlwQ29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZ3lhLW15UGhvdG8tdG9vbHRpcCcpWzBdO1xyXG4gICAgICAgIHRoaXMuX3Rvb2x0aXBUZXh0Q29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZ3lhLW15UGhvdG8tdG9vbHRpcC10ZXh0LXdyYXAnKVswXTtcclxuICAgICAgICB0aGlzLl91cGxvYWRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmNvbnRhaW5lcklEICsgJyBmb3JtJyk7XHJcbiAgICAgICAgdGhpcy5faXNGaWxlc0ZlYXR1cmVTdXBwb3J0ZWQgPSBnaWd5YS5sb2NhbEluZm8uaXNCcm93c2VyU3VwcG9ydHNGaWxlc0FQSTtcclxuICAgICAgICB0aGlzLl91cGxvYWRUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5jb250YWluZXJJRCArICcgLmdpZ3lhLW15UGhvdG8tdXBsb2FkLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZElmcmFtZUlEID0gdGhpcy5wYXJhbXMuY29udGFpbmVySUQgKyAnX3VwbG9hZCcgKyB1cGxvYWRJZCArICdfdGFyZ2V0JztcclxuICAgICAgICB0aGlzLl9mb3JtSUQgPSB0aGlzLnBhcmFtcy5jb250YWluZXJJRCArICdfdXBsb2FkJyArIHVwbG9hZElkICsgJ19mb3JtJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldERPTUV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLl9maWxlSW5wdXRDbGlja2VkID0gKCkgPT4gdGhpcy5vbkZpbGVJbnB1dENsaWNrZWQoKTtcclxuICAgICAgICB0aGlzLl9maWxlSW5wdXRDaGFuZ2VkID0gKCkgPT4gdGhpcy5vbkZpbGVJbnB1dENoYW5nZSgpO1xyXG4gICAgICAgIHRoaXMuX2ljb25Nb3VzZUhvdmVyID0gKCkgPT4gdGhpcy5vbkljb25Ib3ZlcmVkKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyTG9jYWxFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5PbklmcmFtZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGlmcmFtZVN0YXRlTmFtZSA9IHRoaXMuX3VwbG9hZElmcmFtZS5nZXRBdHRyaWJ1dGUoSWZyYW1lVXBsb2FkSW5mby51cGxvYWRpbmcpO1xyXG4gICAgICAgICAgICB2YXIgaWZyYW1lU3RhdGUgPSBTZXJ2ZXJTdGF0ZXNbaWZyYW1lU3RhdGVOYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZnJhbWVTdGF0ZSAhPT0gdGhpcy5fcGhvdG9Qcm9maWxlU3RhdGUpIHRoaXMub25TZXJ2ZXJRdWVyeUVuZCh0aGlzLl9sYXN0UXVlcnlJZCwgaWZyYW1lU3RhdGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZmlsZUlucHV0LCAnY2hhbmdlJywgdGhpcy5fZmlsZUlucHV0Q2hhbmdlZCk7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZmlsZUlucHV0LCAnY2xpY2snLCB0aGlzLl9maWxlSW5wdXRDbGlja2VkKTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9pY29uRWxlbWVudCwgJ21vdXNlb3ZlcicsIHRoaXMuX2ljb25Nb3VzZUhvdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlVXNlclBob3RvKHJlcykge1xyXG4gICAgICAgIHRoaXMuX2VkaXRNb2RlID0gUHJvZmlsZVBob3RvRWRpdE1vZGVzLnVwZGF0ZTtcclxuICAgICAgICB2YXIgaXNOZXdVcGRhdGVkUGhvdG9XaWRlciA9IHRoaXMuYXJlUGhvdG9EaW1lbnNpb25zV2lkZXIocmVzLmRpbWVuc2lvbnMpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQaG90b1VSTCA9IHJlcy5waG90b1VSTDtcclxuICAgICAgICB0aGlzLl9waG90b0RpbWVuc2lvbnMgPSByZXMuZGltZW5zaW9ucztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRQaG90b0ltYWdlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VkaXRNb2RlID09IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGRhdGUgJiYgdGhpcy5faWNvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLmhpZGVFbGVtZW50KHRoaXMuX2ljb25FbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXBsb2FkVGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gTXlQaG90b1BsdWdpbi5VUERBVEVfUEhPVE9fVEVYVDtcclxuICAgICAgICB0aGlzLnRvZ2dsZUVycm9ySW5kaWNhdGlvbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyVG9HbG9iYWxFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRHbG9iYWxFdmVudEhhbmRsZXJzKHtcclxuICAgICAgICAgICAgb25Mb2dpbjogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcclxuICAgICAgICAgICAgb25Mb2dvdXQ6IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRHbG9iYWxFdmVudEhhbmRsZXIoTXlQaG90b1BsdWdpbi5VU0VSX0lORk9fQ0hBTkdFX0VWRU5ULCB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVucmVnaXN0ZXJUb0dsb2JhbEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUdsb2JhbEV2ZW50SGFuZGxlcnMoe1xyXG4gICAgICAgICAgICBvbkxvZ2luOiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxyXG4gICAgICAgICAgICBvbkxvZ291dDogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlbW92ZUdsb2JhbEV2ZW50SGFuZGxlcihNeVBob3RvUGx1Z2luLlVTRVJfSU5GT19DSEFOR0VfRVZFTlQsIHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5yZWdpc3RlckxvY2FsRXZlbnRzKCkge1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuX2ljb25FbGVtZW50LCAnbW91c2VvdmVyJywgZXYgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZmlsZUlucHV0LCAnY2hhbmdlJywgdGhpcy5fZmlsZUlucHV0Q2hhbmdlZCk7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZmlsZUlucHV0LCAnY2xpY2snLCB0aGlzLl9maWxlSW5wdXRDbGlja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25GaWxlSW5wdXRDbGlja2VkKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRXJyb3JJbmRpY2F0aW9uKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkljb25Ib3ZlcmVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJybmV0RXJyb3JUZXh0ID09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJuZXRFcnJvclRleHQgPSB0aGlzLl9maWxlU2l6ZUVycm9yVGV4dDtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBvbkZpbGVJbnB1dENoYW5nZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGaWxlc0ZlYXR1cmVTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbGVJbnB1dC5maWxlc1swXS5zaXplID4gTXlQaG90b1BsdWdpbi5NQVhfSU1BR0VfQllURV9TSVpFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWxlSW5wdXQudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudEVycm9yVHlwZSA9IFByb2ZpbGVQaG90b0Vycm9yVHlwZS5maWxlU2l6ZUVycm9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3Vycm5ldEVycm9yVGV4dCA9IHRoaXMuX2ZpbGVTaXplRXJyb3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFcnJvckluZGljYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYXNlNjRQaG90b0RhdGEgPSBhd2FpdCBnZXRJbWFnZUJhc2U2NCh0aGlzLl9maWxlSW5wdXQuZmlsZXNbMF0sIHRoaXMucGFyYW1zLmZpeEltYWdlT3JpZW50YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRQaG90bygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBsb2FkTW9kZSA9IFByb2ZpbGVQaG90b1VwbG9hZE1vZGVzLmZvcm1TdWJtaXQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0UGhvdG8oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0U2VydmVyUXVlcnkoKSB7XHJcbiAgICAgICAgdGhpcy5fcGhvdG9Qcm9maWxlU3RhdGUgPSBTZXJ2ZXJTdGF0ZXMuSW5Qcm9ncmVzczsgLyogSW5Qcm9ncmVzcyAqL1xyXG4gICAgICAgIHRoaXMuX2xhc3RRdWVyeUlkID0gKyt0aGlzLl9uZXh0U2VydmVyUXVlcnlJZDtcclxuICAgICAgICB0aGlzLl91cGxvYWRJZnJhbWUuc2V0QXR0cmlidXRlKElmcmFtZVVwbG9hZEluZm8udXBsb2FkaW5nLCBTZXJ2ZXJTdGF0ZXNbdGhpcy5fcGhvdG9Qcm9maWxlU3RhdGVdKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnVwbG9hZENoZWNrSW50ZXJ2YWwpIHRoaXMudXBsb2FkQ2hlY2tJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLmxpc3Rlbk9uSWZyYW1lLCBJZnJhbWVVcGxvYWRJbmZvLnVwbG9hZENoZWNrSW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFzdFF1ZXJ5SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2VydmVyUXVlcnlFbmQ8RD4oc2VydmVyUXVlcnlJZDogbnVtYmVyLCBuZXdTdGF0ZTogU2VydmVyU3RhdGVzLCBkYXRhPzogRCkge1xyXG4gICAgICAgIGlmIChzZXJ2ZXJRdWVyeUlkID09PSB0aGlzLl9uZXh0U2VydmVyUXVlcnlJZCkgdGhpcy5zZXJ2ZXJRdWVyeURvbmUobmV3U3RhdGUsIGRhdGEpO1xyXG4gICAgICAgIGVsc2UgdGhpcy53YXJuKCdJZ25vcmluZyBzZXJ2ZXIgcmVzcG9uc2UgIycgKyBzZXJ2ZXJRdWVyeUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcFVwbG9hZENoZWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVwbG9hZENoZWNrSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy51cGxvYWRDaGVja0ludGVydmFsKTtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRDaGVja0ludGVydmFsID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdWJtaXRQaG90bygpIHtcclxuICAgICAgICBpZiAodGhpcy5fdXBsb2FkTW9kZSA9PSBQcm9maWxlUGhvdG9VcGxvYWRNb2Rlcy5mb3JtU3VibWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZFBob3RvV2l0aEZvcm1TdWJtaXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRQaG90b1dpdGhTZXJ2ZXJBcGkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kUGhvdG9XaXRoRm9ybVN1Ym1pdCgpIHtcclxuICAgICAgICAvLyBzZXQgdXAgbmV3IGFjdGlvbiAmIHJlc3BvbnNlSWRcclxuICAgICAgICB0aGlzLnN0YXJ0U2VydmVyUXVlcnkoKTtcclxuICAgICAgICB0aGlzLl9sYXN0UmVzcG9uc2VJZCA9IHRoaXMuX3VwbG9hZElmcmFtZUlEICsgJ18nICsgdGhpcy5fbGFzdFF1ZXJ5SWQ7XHJcbiAgICAgICAgdmFyIGZvcm1BY3Rpb24gPSBgaHR0cHM6Ly8ke2dpZ3lhLl8uZ2V0QXBpRG9tYWluKCdhY2NvdW50cycpfS9hY2NvdW50cy51cGxvYWRQcm9maWxlUGhvdG8/cHVibGlzaD10cnVlJmNvbnRleHQ9JHt0aGlzLl9sYXN0UmVzcG9uc2VJZH0mc2F2ZVJlc3BvbnNlSUQ9JHtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdFJlc3BvbnNlSWRcclxuICAgICAgICB9JiR7Z2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHRoaXMuZ2V0U2VydmVyUGFyYW1ldGVycygpKX1gO1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZEZvcm0uYWN0aW9uID0gZm9ybUFjdGlvbjtcclxuICAgICAgICB0aGlzLl91cGxvYWRGb3JtLnRhcmdldCA9IHRoaXMuX3VwbG9hZElmcmFtZUlEO1xyXG5cclxuICAgICAgICAvL2Rpc3BsYXkgbG9hZGluZyBpbWFnZVxyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRlcih0aGlzLmlubmVyQ29udGFpbmVyKTtcclxuICAgICAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuRE9NLnNldEF0dHJpYnV0ZSh0aGlzLl91cGxvYWRGb3JtLCAnZW5jVHlwZScsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgdGhpcy5fdXBsb2FkRm9ybS5zdWJtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRQaG90b1dpdGhTZXJ2ZXJBcGkoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBnZW5lcmFsUmVxdWVzdFBhcmFtcyA9IHRoaXMuZ2V0U2VydmVyUGFyYW1ldGVycygpO1xyXG4gICAgICAgIHZhciBhcGlJbmZvUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBwaG90b0J5dGVzOiB0aGlzLl9iYXNlNjRQaG90b0RhdGEsXHJcbiAgICAgICAgICAgIHB1Ymxpc2g6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLm9uVXBsb2FkU2F2ZWRSZXNwb25zZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbZ2VuZXJhbFJlcXVlc3RQYXJhbXMsIGFwaUluZm9QYXJhbXNdKTtcclxuXHJcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGJsb2NrIGlzIGZvciBhIHNjZW5hcmlvIHRoYXQgdGhlIHVzZXIgaGFzIGxvZ2dlZC1pbiBhbmQgaGFzIGEgbG9naW5fdG9rZW4uXHJcbiAgICAgICAgLy8gVGhlICdyZWdUb2tlbicgcGFyYW0gaXMgc2VudCBmcm9tIGdldFNlcnZlclBhcmFtZXRlcnMgYW5kIGluIHRoaXMgY2FzZVxyXG4gICAgICAgIC8vIGl0IHdvdWxkIGJlIHVuZGVmaW5lZCwgd2hpY2ggd2lsbCBjYXVzZSBhIHNlcnZlciBlcnJvciBpZiBpdCB3b3VsZCBiZSBzZW50LlxyXG4gICAgICAgIGlmICghcGFyYW1zWydyZWdUb2tlbiddKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbJ3JlZ1Rva2VuJ107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3dMb2FkZXIodGhpcy5pbm5lckNvbnRhaW5lcik7XHJcbiAgICAgICAgZ2lneWEuYWNjb3VudHMuc2V0UHJvZmlsZVBob3RvKHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNlcnZlclBhcmFtZXRlcnMoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtczogYW55ID0gZ2lneWEudXRpbHMub2JqZWN0LmV4dHJhY3RQcm9wZXJ0aWVzKHRoaXMucGFyYW1zLCB7fSwgJ0FQSUtleXxjaWR8b2F1dGhfdG9rZW58bG9naW5fdG9rZW58c291cmNlfHNvdXJjZURhdGF8cmVnVG9rZW4nKTtcclxuICAgICAgICBwYXJhbXMuYXV0aE1vZGUgPSBwYXJhbXNbJ29hdXRoX3Rva2VuJ10gPyAndG9rZW4nIDogJ2Nvb2tpZSc7XHJcblxyXG4gICAgICAgIGlmICghcGFyYW1zLkFQSUtleSkgcGFyYW1zLkFQSUtleSA9IGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5O1xyXG5cclxuICAgICAgICB2YXIgd2ViQWRhcHRlciA9IChnaWd5YS5fLmFwaUFkYXB0ZXJzIGFzIGFueSkud2ViO1xyXG4gICAgICAgIGlmICh3ZWJBZGFwdGVyKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5sb2dpbl90b2tlbiA9IHdlYkFkYXB0ZXIudG9rZW5TdG9yZS5nZXQocGFyYW1zLkFQSUtleSk7XHJcbiAgICAgICAgICAgIHBhcmFtcy5nbWlkID0gZ2lneWEuXy5hcGlBZGFwdGVyLmdldEdtaWRUaWNrZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlcnZlclF1ZXJ5RG9uZTxEPihuZXdTdGF0ZTogU2VydmVyU3RhdGVzLCBkYXRhPzogRCkge1xyXG4gICAgICAgIHRoaXMuc3RvcFVwbG9hZENoZWNrKCk7XHJcblxyXG4gICAgICAgIC8vIGdldCBsYXN0IGVycm9yIGZyb20gc2VydmVyIHNpbmNlIGlmcmFtZSBkb2VzIG5vdCByZXBvcnQgZXJyb3JzIGFjcm9zcyBkb21haW5zXHJcbiAgICAgICAgdmFyIHBhcmFtczogYW55ID0gZ2lneWEudXRpbHMub2JqZWN0LnJlbW92ZVVuZGVmaW5lZCh0aGlzLmdldFNlcnZlclBhcmFtZXRlcnMoKSk7XHJcbiAgICAgICAgcGFyYW1zLnNhdmVSZXNwb25zZUlEID0gdGhpcy5fbGFzdFJlc3BvbnNlSWQ7XHJcbiAgICAgICAgcGFyYW1zLm5vQXV0aCA9IHRydWU7XHJcbiAgICAgICAgZGVsZXRlIHBhcmFtcy5sb2dpbl90b2tlbjtcclxuICAgICAgICBkZWxldGUgcGFyYW1zLnJlZ1Rva2VuO1xyXG5cclxuICAgICAgICBnaWd5YS5fLmFwaUFkYXB0ZXIuc2VuZFJlcXVlc3QoJ3NvY2lhbGl6ZS5nZXRTYXZlZFJlc3BvbnNlJywgcGFyYW1zLCByZXMgPT4gdGhpcy5vblVwbG9hZFNhdmVkUmVzcG9uc2UocmVzKSwge1xyXG4gICAgICAgICAgICBqc1Nka1JlcXVlc3RJZDogdGhpcy5fbGFzdFJlc3BvbnNlSWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblVwbG9hZFNhdmVkUmVzcG9uc2UocmVzKSB7XHJcbiAgICAgICAgc3dpdGNoIChyZXMuZXJyb3JDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR1NFcnJvcnMuT0s6XHJcbiAgICAgICAgICAgICAgICAvL29uVXBsb2FkU3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMuZ2V0QWNjb3VudEluZm8oeyBjYWxsYmFjazogdGhpcy5vblVwZGF0ZWRQaG90b0NvbXBsZXRlZCwgY29udGV4dDogdGhpcywgaW5jbHVkZTogJ3Byb2ZpbGUsZGF0YScgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5JTlZBTElEX1BBUkFNRVRFUl9WQUxVRTpcclxuICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5OT1RfU1VQUE9SVEVEOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudEVycm9yVHlwZSA9IFByb2ZpbGVQaG90b0Vycm9yVHlwZS5maWxlU2l6ZUVycm9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3Vycm5ldEVycm9yVGV4dCA9IHRoaXMuX2ZpbGVTaXplRXJyb3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFcnJvckluZGljYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIEFueSBvdGhlciBlcnJvclxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudEVycm9yVHlwZSA9IFByb2ZpbGVQaG90b0Vycm9yVHlwZS5zZXJ2ZXJFcnJvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJuZXRFcnJvclRleHQgPSBNeVBob3RvUGx1Z2luLlNFUlZFUl9FUlJPUl9URVhUO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFcnJvckluZGljYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblVwZGF0ZWRQaG90b0NvbXBsZXRlZChyZXNwb25zZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gcmVzcG9uc2UuY29udGV4dDtcclxuICAgICAgICBpZiAocmVzcG9uc2UucHJvZmlsZSkge1xyXG4gICAgICAgICAgICBzZWxmLnNldFByb2ZpbGVQaG90b1VSTChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHNlbGYuX2VkaXRNb2RlID0gUHJvZmlsZVBob3RvRWRpdE1vZGVzLnVwZGF0ZTtcclxuICAgICAgICAgICAgc2VsZi5nZXRJbWFnZURpbWVuc2lvbnMoc2VsZi5vblBob3RvRGltZW5zaW9uc1JldHJlaXZlZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIHJlZ1Rva2VuIGZyb20gdGhlIGluaXRSZWdpc3RyYXRpb24gQVBJIHNvIGV2ZW4gdGhvdWdoIHRoZSBwaG90byB3YXNcclxuICAgICAgICAgICAgLy8gdXBsb2FkZWQsIG5vIHVzZXIgc3RpbGwgZXhpc3RzLlxyXG4gICAgICAgICAgICBzZWxmLmdldFByb2ZpbGVQaG90b1VzaW5nUmVnVG9rZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblBob3RvRGltZW5zaW9uc1JldHJlaXZlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGx1Z2luSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGVyKHRoaXMuaW5uZXJDb250YWluZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVycm9ySW5kaWNhdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwbG9hZFRleHRFbGVtZW50LmlubmVySFRNTCA9IE15UGhvdG9QbHVnaW4uVVBEQVRFX1BIT1RPX1RFWFQ7XHJcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5nbG9iYWwuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICB7IGlzSW50ZXJuYWw6IGZhbHNlLCBldmVudE5hbWU6IE15UGhvdG9QbHVnaW4uRVZFTlRfVFlQRVMub25Vc2VySW5mb0NoYW5nZWQgfSxcclxuICAgICAgICAgICAgICAgIHsgc291cmNlRGF0YTogeyBwaG90b1VSTDogdGhpcy5nZXRQcm9maWxlUGhvdG9VUkwoKSwgZGltZW5zaW9uczogdGhpcy5fcGhvdG9EaW1lbnNpb25zIH0gfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VkaXRNb2RlID09IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGxvYWQpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KHRoaXMuaW5uZXJDb250YWluZXIsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBsb2FkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGhpcy5pbm5lckNvbnRhaW5lciwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy51cGRhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9lZGl0TW9kZSA9IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SW1hZ2VEaW1lbnNpb25zKGltZykge1xyXG4gICAgICAgIHRoaXMuX3Bob3RvRGltZW5zaW9ucy53aWR0aCA9IGltZ1snbmF0dXJhbFdpZHRoJ107XHJcbiAgICAgICAgdGhpcy5fcGhvdG9EaW1lbnNpb25zLmhlaWdodCA9IGltZ1snbmF0dXJhbEhlaWdodCddO1xyXG4gICAgICAgIGltZyA9IGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IG51bGw7IC8vIHJlbW92ZSBtZW1vcnkgbGVha1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UHJvZmlsZVBob3RvVXNpbmdSZWdUb2tlbigpIHtcclxuICAgICAgICB2YXIgZ2V0UHJvZmlsZVBob3RvUGFyYW1zID0gdGhpcy5nZXRTZXJ2ZXJQYXJhbWV0ZXJzKCk7XHJcbiAgICAgICAgZ2V0UHJvZmlsZVBob3RvUGFyYW1zLnR5cGUgPSBnaWd5YS5sb2NhbEluZm8uaXNJRTggPyAndGh1bWJuYWlsJyA6ICdvcmlnJztcclxuICAgICAgICAvLyB0cyA9IHRpbWUgc3RhbXAgZm9yICdjYWNoZSBidXN0ZXInXHJcbiAgICAgICAgZ2V0UHJvZmlsZVBob3RvUGFyYW1zLnRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuYnVpbGRVcmxGb3JQcm9maWxlUGhvdG9BUEkoZ2V0UHJvZmlsZVBob3RvUGFyYW1zKTtcclxuXHJcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpbWcub25sb2FkID0gdGhpcy5wcmVwYXJlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnNldEltYWdlRGltZW5zaW9ucyhpbWcpO1xyXG4gICAgICAgICAgICBzZWxmLl9jdXJyZW50UGhvdG9VUkwgPSB1cmw7XHJcbiAgICAgICAgICAgIHNlbGYub25QaG90b0RpbWVuc2lvbnNSZXRyZWl2ZWQoKTtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLl9wbHVnaW5Jbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hZnRlckltYWdlRGltZW5zaW9uc1JldHJlaXZhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuX3BsdWdpbkluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9jdXJyZW50UGhvdG9VUkwgPSBzZWxmLl9pbWFnZUJhc2UgKyAnL3Bob3RvX2RlZmF1bHQucG5nJztcclxuICAgICAgICAgICAgICAgIHNlbGYuZ2V0SW1hZ2VEaW1lbnNpb25zKHNlbGYuYWZ0ZXJJbWFnZURpbWVuc2lvbnNSZXRyZWl2YWwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5faXNQaG90b1VwbG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9pc1Bob3RvVXBsb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2N1cnJlbnRFcnJvclR5cGUgPSBQcm9maWxlUGhvdG9FcnJvclR5cGUuc2VydmVyRXJyb3I7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9jdXJybmV0RXJyb3JUZXh0ID0gc2VsZi5nZXRTZXJ2ZXJFcnJvclRleHQoJ1Byb2ZpbGUgcGhvdG8gaW5hY2Nlc2libGUuJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUVycm9ySW5kaWNhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLl9lZGl0TW9kZSA9PT0gUHJvZmlsZVBob3RvRWRpdE1vZGVzLnVwbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChzZWxmLmlubmVyQ29udGFpbmVyLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLnVwbG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLnNob3dFbGVtZW50KHNlbGYuX2ljb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHNlbGYuaW5uZXJDb250YWluZXIsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBkYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5zaG93RWxlbWVudChzZWxmLl91cGxvYWRUZXh0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nID0gaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gbnVsbDsgLy8gcmVtb3ZlIG1lbW9yeSBsZWFrXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW1nLnNyYyA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVXJsRm9yUHJvZmlsZVBob3RvQVBJKGdldFByb2ZpbGVQaG90b1BhcmFtcyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke2dldFByb2ZpbGVQaG90b1BhcmFtcy5sb2dpbl90b2tlbiB8fCBnZXRQcm9maWxlUGhvdG9QYXJhbXMucmVnVG9rZW4gPyAnaHR0cHMnIDogZ2lneWEubG9jYWxJbmZvLnByb3RvY29sfTovLyR7Z2lneWEuXy5nZXRBcGlEb21haW4oXHJcbiAgICAgICAgICAgICdhY2NvdW50cycsXHJcbiAgICAgICAgKX0vYWNjb3VudHMuZ2V0UHJvZmlsZVBob3RvPyR7Z2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKGdldFByb2ZpbGVQaG90b1BhcmFtcyl9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEltYWdlRGltZW5zaW9ucyhjYWxsYmFjazogKHNlbGY6IE15UGhvdG9QbHVnaW4pID0+IHZvaWQpIHtcclxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IHRoaXMucHJlcGFyZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJbWFnZURpbWVuc2lvbnMoaW1nKTtcclxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSAnUHJvZmlsZSBwaG90byBpbmFjY2Vzc2libGUuJztcclxuICAgICAgICAgICAgaW1nID0gaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gbnVsbDsgLy8gcmVtb3ZlIG1lbW9yeSBsZWFrXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRFcnJvclR5cGUgPSBQcm9maWxlUGhvdG9FcnJvclR5cGUuc2VydmVyRXJyb3I7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJuZXRFcnJvclRleHQgPSB0aGlzLmdldFNlcnZlckVycm9yVGV4dChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVycm9ySW5kaWNhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VkaXRNb2RlID09PSBQcm9maWxlUGhvdG9FZGl0TW9kZXMudXBsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGhpcy5pbm5lckNvbnRhaW5lciwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy51cGxvYWQpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLnNob3dFbGVtZW50KHRoaXMuX2ljb25FbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLmlubmVyQ29udGFpbmVyLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLnVwZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLnNob3dFbGVtZW50KHRoaXMuX3VwbG9hZFRleHRFbGVtZW50KTtcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWcuc3JjID0gdGhpcy5nZXRQcm9maWxlUGhvdG9VUkwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFyZVBob3RvRGltZW5zaW9uc1dpZGVyKGRpbWVuc3Rpb25zOiBJUGhvdG9EaW1lbnNpb25zKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGRpbWVuc3Rpb25zLndpZHRoID4gcGFyc2VJbnQodGhpcy5wYXJhbXMud2lkdGgpIHx8IGRpbWVuc3Rpb25zLmhlaWdodCA+IHBhcnNlSW50KHRoaXMucGFyYW1zLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyVG9HbG9iYWxFdmVudHMoKTtcclxuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1UZW1wbGF0aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29udHJvbEh0bWwoKSB7XHJcbiAgICAgICAgdGhpcy5fZmlsZVNpemVFcnJvclRleHQgPSB0aGlzLmdldFRleHQoJ3Byb2ZpbGVQaG90b19maWxlU2l6ZUluZm8nKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB2YXIgdGVtcGxhdGU6IHN0cmluZztcclxuICAgICAgICBpZiAodGhpcy5fcGx1Z2luTW9kZSA9PSBQcm9maWxlUGhvdG9Nb2Rlcy51cGxvYWQpIHtcclxuICAgICAgICAgICAgdmFyIGZpbGVVcGxvYWRUZXh0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNQaG90b1VwbG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlVXBsb2FkVGV4dCA9IE15UGhvdG9QbHVnaW4uVVBEQVRFX1BIT1RPX1RFWFQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlVXBsb2FkVGV4dCA9IE15UGhvdG9QbHVnaW4uVVBMT0FEX1BIT1RPX1RFWFQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVkaXRDbGFzcyA9IHRoaXMuX2VkaXRNb2RlID09IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGxvYWQgPyAnZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkJyA6ICdnaWd5YS1teVBob3RvLXN0YXR1cy11cGxvYWRlZCc7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRUZW1wbGF0ZXMoKS51cGxvYWQsIHtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHRoaXMuX2ZpbGVTaXplRXJyb3JUZXh0LFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkVGV4dDogZmlsZVVwbG9hZFRleHQsXHJcbiAgICAgICAgICAgICAgICBlZGl0Q2xhc3M6IGVkaXRDbGFzcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheVxyXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuZGlzcGxheSwge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVJRnJhbWVFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZElmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZElmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZElmcmFtZS5pZCA9IHRoaXMuX3VwbG9hZElmcmFtZUlEO1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZElmcmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLl91cGxvYWRJZnJhbWVJRCk7XHJcbiAgICAgICAgdGhpcy5fdXBsb2FkSWZyYW1lLnNldEF0dHJpYnV0ZShJZnJhbWVVcGxvYWRJbmZvLnVwbG9hZGluZywgU2VydmVyU3RhdGVzW1NlcnZlclN0YXRlcy5Ob3RTdGFydGVkXSk7XHJcbiAgICAgICAgdGhpcy5fdXBsb2FkSWZyYW1lLnNldEF0dHJpYnV0ZSgnb25sb2FkJywgXCJ0aGlzLnNldEF0dHJpYnV0ZSgnXCIgKyBJZnJhbWVVcGxvYWRJbmZvLnVwbG9hZGluZyArIFwiJywnXCIgKyBTZXJ2ZXJTdGF0ZXNbU2VydmVyU3RhdGVzLkRvbmVdICsgXCInKVwiKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl91cGxvYWRJZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlRm9ybUVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5fdXBsb2FkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICB0aGlzLl91cGxvYWRGb3JtLmNsYXNzTmFtZSA9ICdnaWd5YS1teVBob3RvLXVwbG9hZEZvcm0nO1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZEZvcm0uZW5jdHlwZSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcclxuICAgICAgICB0aGlzLl91cGxvYWRGb3JtLm1ldGhvZCA9ICdQT1NUJztcclxuICAgICAgICB0aGlzLl91cGxvYWRGb3JtLmFjdGlvbiA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZEZvcm0udGFyZ2V0ID0gdGhpcy5fdXBsb2FkSWZyYW1lSUQ7XHJcbiAgICAgICAgdGhpcy5fdXBsb2FkRm9ybS5hcHBlbmRDaGlsZCh0aGlzLl9maWxlSW5wdXQpO1xyXG4gICAgICAgIC8vdGhpcy5fZmlsZUlucHV0LnNldEF0dHJpYnV0ZShcImZvcm1cIiwgdGhpcy5fZm9ybUlEKTtcclxuICAgICAgICB0aGlzLl9mb3JtV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLl91cGxvYWRGb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUlucHV0RmlsZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLl9maWxlSW5wdXQudHlwZSA9ICdmaWxlJztcclxuICAgICAgICB0aGlzLl9maWxlSW5wdXQudGl0bGUgPSAnJztcclxuICAgICAgICB0aGlzLl9maWxlSW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyonO1xyXG4gICAgICAgIHRoaXMuX2ZpbGVJbnB1dC5uYW1lID0gJ19wcm9maWxlUGhvdG8nO1xyXG4gICAgICAgIHRoaXMuX2ZpbGVJbnB1dC5jbGFzc05hbWUgPSAnZ2lneWEtbXlQaG90by11cGxvYWQnO1xyXG4gICAgICAgIHRoaXMuX2ZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywndHJ1ZScpO1xyXG4gICAgICAgIHRoaXMuX2ZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywnMCcpO1xyXG4gICAgICAgIHRoaXMuX2ZpbGVJbnB1dC50aXRsZSA9IGdpZ3lhLnBsdWdpblV0aWxzLmxhbmcuZ2V0TG9jYWxpemVkVGV4dCgnZ2lneWEuc2VydmljZXMuYWNjb3VudHMucGx1Z2lucy5zY3JlZW5TZXQuanMnLCAnbm9fZmlsZV9jaG9zZW4nLCB0aGlzLnBhcmFtcy5sYW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVzZXJTdGF0ZUNoYW5nZWQoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLmV2ZW50TmFtZSA9PSBNeVBob3RvUGx1Z2luLkVWRU5UX1RZUEVTLm9uVXNlckluZm9DaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlclBob3RvKGRhdGEuc291cmNlRGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmV2ZW50TmFtZSA9PSBNeVBob3RvUGx1Z2luLkVWRU5UX1RZUEVTLm9ubG9naW4pIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVVzZXJJbnB1dFBhcmFtcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRm9yUHJvZmlsZVBob3RvKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbG9nb3V0XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQbHVnaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldFBsdWdpbigpIHtcclxuICAgICAgICB0aGlzLl9wbHVnaW5Nb2RlID0gUHJvZmlsZVBob3RvTW9kZXMuZGlzcGxheTtcclxuICAgICAgICB0aGlzLl9lZGl0TW9kZSA9IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGxvYWQ7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBob3RvVVJMID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dMb2FkZXIoZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VkaXRNb2RlID09IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGxvYWQpIHtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoZWwsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBsb2FkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChlbCwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy51cGRhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQoZWwsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMubG9hZGluZyk7XHJcbiAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLmhpZGVFbGVtZW50KHRoaXMuX3VwbG9hZFRleHRFbGVtZW50KTtcclxuICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00uaGlkZUVsZW1lbnQodGhpcy5faWNvbkVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlTG9hZGVyKGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KGVsLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLmxvYWRpbmcpO1xyXG4gICAgICAgIGlmICh0aGlzLl9lZGl0TW9kZSA9PSBQcm9maWxlUGhvdG9FZGl0TW9kZXMudXBsb2FkKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChlbCwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy51cGxvYWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChlbCwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy51cGRhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00uc2hvd0VsZW1lbnQodGhpcy5fdXBsb2FkVGV4dEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5VG9vbHRpcCgpIHtcclxuICAgICAgICB0aGlzLl90b29sdGlwVGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLl9jdXJybmV0RXJyb3JUZXh0O1xyXG4gICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5zaG93RWxlbWVudCh0aGlzLl9pbmZvVG9vbHRpcEVsZW1lbnQpO1xyXG4gICAgICAgIHZhciB0b29sVGlwID0gdGhpcy5faW5mb1Rvb2x0aXBFbGVtZW50O1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50RXJyb3JUeXBlID09IFByb2ZpbGVQaG90b0Vycm9yVHlwZS5ub25lKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLmhpZGVFbGVtZW50KHRvb2xUaXApO1xyXG4gICAgICAgICAgICB9LCBNeVBob3RvUGx1Z2luLlRPT0xUSVBfVElNRU9VVCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJuZXRFcnJvclRleHQgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRXJyb3JJbmRpY2F0aW9uKHNob3dFcnJvcjogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChzaG93RXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VkaXRNb2RlID09IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KHRoaXMuaW5uZXJDb250YWluZXIsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBkYXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KHRoaXMuaW5uZXJDb250YWluZXIsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBsb2FkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGhpcy5pbm5lckNvbnRhaW5lciwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy5lcnJvcik7XHJcbiAgICAgICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5zaG93RWxlbWVudCh0aGlzLl9pY29uRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudCh0aGlzLmlubmVyQ29udGFpbmVyLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLmVycm9yKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VkaXRNb2RlID09IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLmlubmVyQ29udGFpbmVyLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLnVwZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00uaGlkZUVsZW1lbnQodGhpcy5faWNvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuaW5uZXJDb250YWluZXIsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBsb2FkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00uaGlkZUVsZW1lbnQodGhpcy5faW5mb1Rvb2x0aXBFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaWRlTG9hZGVyKHRoaXMuaW5uZXJDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2VydmVyRXJyb3JUZXh0KGVycm9yTWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJzxiPiAnICsgZXJyb3JNZXNzYWdlICsgJzwvYj4nO1xyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXByb2ZpbGUtaW1hZ2VcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiOyIsImV4cG9ydCB2YXIgZGlzcGxheSA9IHJlcXVpcmUoJy4vZGlzcGxheS5odG1sJyk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiBpZD1cXFwiZXJyb3JDb250YWluZXJcXFwiPlxcclxcbiAgICAkdG9vbHRpcFxcclxcbjwvc3Bhbj5cIjsiLCJleHBvcnQgdmFyIHRvb2x0aXBGaWxlU2l6ZSA9IHJlcXVpcmUoJy4vdG9vbHRpcEZpbGVTaXplLmh0bWwnKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuPlxcclxcbiAgICA8c3Ryb25nPiRzZXJ2ZXJFcnJvcjwvc3Ryb25nPlxcclxcbjwvc3Bhbj5cIjsiLCJleHBvcnQgdmFyIHRvb2x0aXBTZXJ2ZXJFcnJvciA9IHJlcXVpcmUoJy4vdG9vbHRpcFNlcnZlckVycm9yLmh0bWwnKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlciAkZWRpdENsYXNzXFxcIj5cXHJcXG4gICAgPCEtLSAuc3RhdHVzLXVwbG9hZCB8IC5zdGF0dXMtbG9hZGluZyB8IC5zdGF0dXMtZXJyb3IgfCAuc3RhdHVzLXVwbG9hZGVkIC0tPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXN0YXR1cy1pY29uXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLW15UGhvdG8tdG9vbHRpcC13cmFwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXRvb2x0aXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXRvb2x0aXAtdGV4dC13cmFwXFxcIj4kdG9vbHRpcDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLW15UGhvdG8tYXJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXByb2ZpbGUtaW1hZ2VcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXVwbG9hZC1idXR0b24td3JhcFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2lneWEtbXlQaG90by11cGxvYWQtYnV0dG9uXFxcIj4kdXBsb2FkVGV4dDwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLW15UGhvdG8tbG9hZGluZy1pY29uXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbXlQaG90by1mb3JtLXdyYXBwZXJcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgdmFyIHVwbG9hZCA9IHJlcXVpcmUoJy4vdXBsb2FkLmh0bWwnKTtcclxuIiwiZXhwb3J0IGNvbnN0IGVudW0gR1NFcnJvcnMge1xyXG4gICAgT0sgPSAwLFxyXG4gICAgRGF0YV9QZW5kaW5nID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxyXG4gICAgTkVUV09SS19FUlJPUiA9IDUwMDAyNixcclxuICAgIERBVEFfUEVORElORyA9IDEwMDAwMSwgLy8gRGF0YSBpcyBzdGlsbCBiZWluZyBwcm9jZXNzZWQsIHF1ZXJ5IGFnYWluIGZvciB0aGUgcmVzcG9uc2VcclxuICAgIE9QRVJBVElPTl9DQU5DRUxFRCA9IDIwMDAwMSwgLy8gdXNlciBjYW5jZWxlZCwgaW4gbG9naW4gcHJvY2Vzc1xyXG4gICAgUEVSTUlTU0lPTl9HUkFOVEVEID0gMjAwMDAyLCAvLyBJbm5lciBjb2RlXHJcbiAgICBQRVJNSVNTSU9OX05PVF9HUkFOVEVEID0gMjAwMDAzLCAvLyBJbm5lciBjb2RlXHJcbiAgICBSRURJUkVDVCA9IDIwMDAwNCwgLy8gSW5uZXIgY29kZVxyXG4gICAgTkVXX1VTRVIgPSAyMDAwMDUsIC8vIElubmVyIGNvZGVcclxuICAgIE9QRVJBVElPTl9ET05FID0gMjAwMDA2LCAvLyBJbm5lciBjb2RlXHJcbiAgICBVUERBVEVfVVNFUiA9IDIwMDAwNywgLy8gSW5uZXIgY29kZVxyXG4gICAgT0tfV0lUSF9FUlJPUlMgPSAyMDAwMDgsIC8vIEZvciByZXBvcnRzIC0gd2hlbiB3ZSByZXR1cm4gb2sgdG8gY2xpZW50IGJ1dCBoYWQgYWNjZXB0YWJsZSBlcnJvcnMgKHRoYXQgd2Ugd2FudCB0byBrbm93IGFib3V0KSBvbiB0aGUgd2F5XHJcbiAgICBBQ0NPVU5UU19MSU5LRUQgPSAyMDAwMDksIC8vIEFmdGVyIGxpbmtpZ24gYWNjb3V0bnMgdmlhIGxvZ2luLCByZXR1cm4gdGhpcyBlcnJvciBjb2RlXHJcbiAgICBPS19XSVRIX0VSUk9SX0xPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gMjAwMDEwLCAvLyBGb3Igc2V0QWNjb3VudEluZm8gdXNpbmcgdGhlIGNvbmZsaWN0SGFuZGxpbmcgcGFyYW0gLSBwcm9maWxlIHdhcyBzYXZlZCwgYnV0IHRoZSBlbWFpbCBjb25mbGljdHMgd2l0aCBhbm90aGVyIHVzZXJcclxuICAgIEFDQ09VTlRfUEVORElOR19SRUdJU1RSQVRJT04gPSAyMDYwMDEsIC8vIEZvciBhY2NvdW50cyBBUEksXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVkVSSUZJQ0FUSU9OID0gMjA2MDAyLCAvLyBGb3IgYWNjb3VudHMgQVBJOyBjb25zaWRlciBtb3ZpbmcgdG8gNDAzeHh4IHNlY3Rpb24gaW4gdGhlIGZ1dHVyZS5cclxuICAgIEFDQ09VTlRfTUlTU0lOR19MT0dJTklEID0gMjA2MDAzLCAvLyBGb3IgYWNjb3VudHMgQVBJXHJcbiAgICBJREVOVElUWV9BTFJFQURZX0FTU0lHTkVEID0gMjA2MDA0LCAvLyBGb3IgaW1wb3J0IGFjY291bnRzIEFQSVxyXG4gICAgQUZURVJfRU1BSUxfVkVSSUZJQ0FUSU9OID0gMjA2MDA1LFxyXG4gICAgUEVORElOR19DT0RFX1ZFUklGSUNBVElPTiA9IDIwNjAwNixcclxuICAgIENMSUVOVF9MT0cgPSAzMDAwMDEsIC8vIGludGVybmFsLCBmb3IgcmVwb3J0aW5nIGVyb3JycyBpbiBjbGllbnQgU0RLU1xyXG4gICAgSU5WQUxJRF9EQVRBX0NFTlRFUiA9IDMwMTAwMSwgLy8gXCJJbnZhbGlkIGRhdGEtY2VudGVyXCIuIHdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJUaGlzIEFQSSBrZXkgaXMgc2VydmVkIGJ5IGFub3RoZXIgZGF0YSBjZW50ZXJcIi5cclxuICAgIElOVkFMSURfUkVRVUVTVF9GT1JNQVQgPSA0MDAwMDEsIC8vIGNvdWxkIGJlIGFsbCBraW5kIG9mIGVycm9ycyB3aXRoIHdyb25nIHJlcXVlc3QgKG5vbiBzZWN1cmUgd2hlbiBzaG91bGQgYmUgc2VjdXJlLCB3cm9uZyBhdXRoZW50aWNhdGlvbiBoZWFkZXIpXHJcbiAgICBNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUiA9IDQwMDAwMixcclxuICAgIFVOSVFVRV9JREVOVElGSUVSX0VYSVNUUyA9IDQwMDAwMyxcclxuICAgIElOVkFMSURfUEFSQU1FVEVSX0ZPUk1BVCA9IDQwMDAwNCxcclxuICAgIElOVkFMSURfUEFSQU1FVEVSX1ZBTFVFID0gNDAwMDA2LFxyXG4gICAgRFVQTElDQVRFX1ZBTFVFID0gNDAwMDA3LFxyXG4gICAgSU5WQUxJRF9BVVRIRU5USUNBVElPTl9IRUFERVIgPSA0MDAwMDgsIC8vIE9BdXRoMlxyXG4gICAgVkFMSURBVElPTl9FUlJPUiA9IDQwMDAwOSwgLy8gSW4gYWNjb3VudHMucmVnaXN0ZXIsIHdoZW5ldmVyIHRoZXJlIGlzIGEgdmFsaWRhdGlvbiBlcnJvclxyXG4gICAgSU5WQUxJRF9SRURJUkVDVF9VUkkgPSA0MDAwMTEsIC8vIE9BdXRoMlxyXG4gICAgSU5WQUxJRF9SRVNQT05TRV9UWVBFID0gNDAwMDEyLCAvLyBPQXV0aDJcclxuICAgIFVOU1VQUE9SVEVEX0dSQU5UX1RZUEUgPSA0MDAwMTMsIC8vIE9BdXRoMlxyXG4gICAgSU5WQUxJRF9HUkFOVCA9IDQwMDAxNCwgLy8gT0F1dGgyXHJcbiAgICBDT0RFX0VYUElSRUQgPSA0MDAwMTUsIC8vIE9BdXRoMlxyXG4gICAgU0NIRU1BX1ZBTElEQVRJT05fRkFJTEVEID0gNDAwMDIwLFxyXG4gICAgQ0FQVENIQV9WRVJJRklDQVRJT05fRkFJTEVEID0gNDAwMDIxLFxyXG4gICAgVU5JUVVFX0lOREVYX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjIsXHJcbiAgICBJTlZBTElEX1RZUEVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMyxcclxuICAgIERZTkFNSUNfRklFTERTX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjQsXHJcbiAgICBXUklURV9BQ0NFU1NfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNSxcclxuICAgIElOVkFMSURfRk9STUFUX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjYsXHJcbiAgICBSRVFVSVJFRF9WQUxVRV9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI3LFxyXG4gICAgRU1BSUxfTk9UX1ZFUklGSUVEID0gNDAwMDI4LFxyXG4gICAgU0NIRU1BX0NPTkZMSUNUX0VSUk9SID0gNDAwMDI5LCAvLyBUbyBoYW5kbGUgVXNlciBzdG9yeSAzNDMzMC4gSW1wcm92ZSBFbGFzdGljU2VhcmNoTWFwcGluZ0V4Y2VwdGlvbiBoYW5kbGluZyBpbiBEUy5JbmRleE9iamVjdFxyXG4gICAgT1BFUkFUSU9OX05PVF9BTExPV0VEID0gNDAwMDMwLCAvLyBVc2VyIHN0b3J5IDM0MzExIC0gSWYgYWRkQ29ubmVjdGlvbiBpcyBjYWxsZWQgcmV0dXJuIGFuIGVycm9yIChcIm9wZXJhdGlvbiBub3QgYWxsb3dlZCBmb3IgdGhpcyBhY2NvdW50XCIsIDQwMFhYWCBlcnJvcikuXHJcbiAgICBTRUNVUklUWV9WRVJJRklDQVRJT05fRkFJTEVEID0gNDAwMDUwLFxyXG4gICAgSU5WQUxJRF9BUElLRVlfUEFSQU1FVEVSID0gNDAwMDkzLFxyXG4gICAgTk9UX1NVUFBPUlRFRCA9IDQwMDA5NiwgLy8gdGhlIGZ1bmN0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgYW55IG9mIHRoZSBjdXJyZW50bHkgY29ubmVjdGVkIHByb3ZpZGVyc1xyXG4gICAgVU5TVVBQT1JURURfVVNFUl9BR0VOVCA9IDQwMDA5NywgLy9cclxuICAgIE5PX1BST1ZJREVSUyA9IDQwMDEwMCwgLy8gY2xpZW50P1xyXG4gICAgUE9QVVBfQkxPQ0tFRCA9IDQwMDEwMSwgLy8gY2xpZW50XHJcbiAgICBJTlZBTElEX0VWRU5UX0hBTkRMRVIgPSA0MDAxMDIsIC8vIGNsaWVudFxyXG4gICAgSU5WQUxJRF9DT05UQUlORVJJRCA9IDQwMDEwMywgLy8gY2xpZW50XHJcbiAgICBOT1RfQ09OTkVDVEVEID0gNDAwMTA2LCAvLyB1c2VyIGlzIG5vdCBjb25uZWN0ZWQgdG8gdGhlIHJlcXVpcmVkIG5ldHdvcmsgb3IgdG8gYW55IG5ldHdvcmtcclxuICAgIElOVkFMSURfU0lURV9ET01BSU4gPSA0MDAxMjAsIC8vIHRoZSBjdXJyZW50IGRvbWFpbiBkb2VzIG5vdCBtYXRjaCB0aGUgZG9tYWluIGNvbmZpZ3VyZWQgZm9yIHRoZSBhcGkga2V5XHJcbiAgICBQUk9WSURFUl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAwMTIyLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxyXG4gICAgTElNSVRfUkVBQ0hFRCA9IDQwMDEyNCwgLy8gR2FtZU1lY2hhbmljcyAtIENhcCB3YXMgcmVhY2hlZFxyXG4gICAgRlJFUVVFTkNZX0xJTUlUX1JFQUNIRUQgPSA0MDAxMjUsIC8vIENvbW1lbnRzL0ZlZWQgLSBTcGFtIENhcHMgd2FzIHJlYWNoZWRcclxuICAgIElOVkFMSURfQUNUSU9OID0gNDAwMTI2LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW52YWxpZCBhY3Rpb24uIFRyaWdnZXJlZCBhY3Rpb24gY2FuJ3QgYmUgaW5pdGlhdGVkIGV4dGVybmFsbHlcclxuICAgIElOU1VGRklDSUVOVF9QT0lOVFNfVE9fUkVERUVNID0gNDAwMTI3LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW5zdWZmaWNpZW50X3BvaW50c190b19yZWRlZW1cclxuICAgIFNJR05BVFVSRV9USU1FU1RBTVBfRVhQSVJFRCA9IDQwMDEyOCwgLy8gdGhlIHRpbWVzdGFtcCBpbnNpZGUgdGhlIHNpZ25hdHVyZSBpcyBleHBpcmVkXHJcbiAgICBJTlZBTElEX1BPTElDWV9DT05GSUdVUkFUSU9OID0gNDAxMDAwLCAvLyBQb2xpY3kgY29uZmlndXJhdGlvbiBpcyBpbnZhbGlkIChpLmUuIHByZXZlbnQgcmVnaXRyYXRpb24pXHJcbiAgICBTVVNQRUNURURfU1BBTSA9IDQwMTAxMCwgLy8gU29tZW9uZSBpcyB0cnlpbmcgdG8gdXNlIEdpZ3lhIHRvIHNlbmQgYSBlbWFpbCB3aXRoIGEgVVJMIHRoYXQgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSBjbGllbnQncyBkb21haW5zOyBzdXNwZWN0ZWQgc3BhbS5cclxuICAgIExPR0lOX0ZBSUxFRF9DQVBUQ0hBX1JFUVVJUkVEID0gNDAxMDIwLCAvLyBhY2NvdW50cy5sb2dpbiAtIGNhcHRjaGEgcmVxdWlyZWRcclxuICAgIExPR0lOX0ZBSUxFRF9XUk9OR19DQVBUQ0hBID0gNDAxMDIxLCAvLyBhY2NvdW50cy5sb2dpbiAtIHdyb25nIGNhcHRjaGEgY29kZVxyXG4gICAgT0xEX1BBU1NXT1JEX1VTRUQgPSA0MDEwMzAsIC8vIFRoZSB1c2VyIHByb3ZpZGVkIGhpcyBwcmV2aW91cyBwYXNzd29yZCwgbm90IHRoZSBjdXJyZW50IG9uZVxyXG4gICAgRk9SQklEREVOID0gNDAzMDAwLFxyXG4gICAgSU5WQUxJRF9TRVNTSU9OX1RPS0VOID0gNDAzMDAxLCAvLyBpbnRlcm5hbFxyXG4gICAgUkVRVUVTVF9IQVNfRVhQSVJFRCA9IDQwMzAwMiwgLy8gdGhlIHRpbWVzdGFtcCBvciBleHBpcmF0aW9uIG9mIHRoZSB0b2tlbiB1c2VkIGV4Y2VlZGVkIHRoZSBhbGxvd2VkIHRpbWUgd2luZG93XHJcbiAgICBJTlZBTElEX1JFUVVFU1RfU0lHTkFUVVJFID0gNDAzMDAzLFxyXG4gICAgRFVQTElDQVRFX05PTkNFID0gNDAzMDA0LFxyXG4gICAgVU5BVVRIT1JJWkVEX1VTRVIgPSA0MDMwMDUsIC8vIHRoZSB1c2VyIGlkIHBhc3NlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgc2l0ZVxyXG4gICAgU0VOU0lUSVZFX0RBVEFfU0VOVF9PVkVSX0hUVFAgPSA0MDMwMDYsIC8vIHdoZW4gc2VuZGluZyB0aGUgc2VjcmV0IGtleSBpbiBSRVNUIGl0IGhhcyB0byBiZSBvdmVyIEhUVFBTXHJcbiAgICBQRVJNSVNTSU9OX0RFTklFRCA9IDQwMzAwNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUGVybWlzc2lvbiBkZW5pZWQgKHJlYWRPbmx5LG1vZGVyYXRpb24gc2l0ZSkuXHJcbiAgICBJTlZBTElEX09QRU5JRF9VUkwgPSA0MDMwMDgsIC8vIGNhbm5vdCBmaW5kIGFuIG9wZW5JZCBlbmRwb2ludCBvbiB0aGUgdXJsIG9yIHVzZXJuYW1lIGdpdmVuIGZvciBvcGVuSWQgbG9naW5cclxuICAgIFBST1ZJREVSX1NFU1NJT05fRVhQSVJFRCA9IDQwMzAwOSwgLy8gdGhlIHVzZXIgc2Vzc2lvbiBmb3IgdGhpcyBwcm92aWRlciBpcyBleHBpcmVkXHJcbiAgICBJTlZBTElEX1NFQ1JFVCA9IDQwMzAxMCwgLy8gdGhlIHJlcXVlc3QgaGFzIGFuIGludmFsaWQgc2VjcmV0IGtleVxyXG4gICAgU0VTU0lPTl9IQVNfRVhQSVJFRCA9IDQwMzAxMSwgLy8gdGhlIHNlc3Npb24gZm9yIHRoaXMgdXNlciBoYXMgZXhwaXJlZFxyXG4gICAgTk9fVkFMSURfU0VTU0lPTiA9IDQwMzAxMiwgLy8gcmVxdWVzdGVkIHVzZXIgaGFzIG5vIHZhbGlkIHNlc3Npb25cclxuICAgIFVOVkVSSUZJRURfVVNFUiA9IDQwMzAxMywgLy8gdGhlIHVzZXIgaXMgbm90IHZlcmlmaWVkIGluIFNTTyBzZXNzaW9uXHJcbiAgICBNSVNTSU5HX1JFUVVFU1RfUkVGRVJSRVIgPSA0MDMwMTUsIC8vIHdlIGNhbid0IHZhbGlkYXRlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlZmVycmVyIGhlYWRlciBpcyBtaXNzaW5nXHJcbiAgICBVTkVYUEVDVEVEX1BST1ZJREVSX1VTRVIgPSA0MDMwMTcsIC8vIHRoZSBsb2dnZWQgaW4gdXNlciBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgb25lIGV4cGVjdGVkXHJcbiAgICBQRVJNSVNTSU9OX05PVF9SRVFVRVNURUQgPSA0MDMwMjIsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIGl0IHdhcyBub3QgcmVxdWVzdGVkXHJcbiAgICBOT19VU0VSX1BFUk1JU1NJT04gPSA0MDMwMjMsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIHdlIGRvbid0IGhhdmUgb25lXHJcbiAgICBQUk9WSURFUl9MSU1JVF9SRUFDSEVEID0gNDAzMDI0LCAvLyB0aGUgcHJvdmlkZXIgbGltaXQgZm9yIHRoaXMgYWN0aW9uIHdhcyBleGNlZWRlZFxyXG4gICAgSU5WQUxJRF9UT0tFTiA9IDQwMzAyNSwgLy8gT0F1dGgyXHJcbiAgICBVTkFVVEhPUklaRURfQUNDRVNTX0VSUk9SID0gNDAzMDI2LCAvLyBDYWxscyB0byBhY2NvdW50cy5pc0F2YWlsYWJsZUxvZ2luSUQgV2hlbiBwcmV2ZW50TG9naW5JREhhcnZlc3RpbmcgPSB0cnVlIHNob3VsZCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgNDAzeHh4IHVuYXV0aG9yaXplZCBhY2Nlc3MgZXJyb3IuXHJcbiAgICBESUZGRVJFTlRfVVNFUl9GT1JfUkVBVVRIID0gNDAzMDI3LCAvLyBEaWZmZXJlbnQgdXNlciB0cmllZCB0byByZS1hdXRob3JpemUuXHJcbiAgICBTRVNTSU9OX0VYUElSRURfUkVUUlkgPSA0MDMwMzAsIC8vIElubmVyIGNvZGUgLSB3aGVuIHRoZSBmYWNlYm9vayBzZXNzaW9uIGlzIGV4cGlyZWQgYW5kIHRoZSBjbGllbnQgd2FpdHMgZm9yIEZCIG9uIHBhZ2UgdG8gbG9hZFxyXG4gICAgQVBQUk9WRURfQllfTU9ERVJBVE9SID0gNDAzMDMxLCAvLyBjb21tZW50cyAtIGNhbnQgZmxhZyBjb21tZW50LCBpdCB3YXMgYXBwcm92ZWQgYnkgdGhlIG1vZGVyYXRvciBhbHJlYWR5LlxyXG4gICAgVE9LRU5fSEFTX1JFTkVXRUQgPSA0MDMwMzIsIC8vIHRoZSB0b2tlbiBpcyBubyBsb25nZXIgdmFsaWQsIGJ1dCB3ZSBoYXZlIG5ldyB0b2tlbiB0byBwcm92aWRlXHJcbiAgICBOT19VU0VSX0NPT0tJRSA9IDQwMzAzNSwgLy8gbm8gdXNlciBjb29raWVcclxuICAgIFVOQVVUSE9SSVpFRF9QQVJUTkVSID0gNDAzMDM2LCAvLyBwYXJ0bmVyIGlzIGRpc2FibGVkXHJcbiAgICBQT1NUX0RFTklFRCA9IDQwMzAzNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUG9zdCBkZW5pZWQgd2hlbiB0aGUgdXNlciB0cmllZCB0byByZXZpZXcgdHdpY2UuXHJcbiAgICBOT19MT0dJTl9USUNLRVQgPSA0MDMwNDAsIC8vIG5vIGxvZ2luIHRpY2tldCBpbiBjYWxsYmFjayB1cmxcclxuICAgIEFDQ09VTlRfRElTQUJMRUQgPSA0MDMwNDEsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gZ3MuYWNjb3VudHMuSXNBY3RpdmU9ZmFsc2VcclxuICAgIElOVkFMSURfTE9HSU5JRCA9IDQwMzA0MiwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiB0cnlpbmcgdG8gbG9naW4gd2l0aCBhIGxvZ2luSUQgdGhhdCBkbyBub3QgZXhpc3RzXHJcbiAgICBMT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDQwMzA0MywgLy8gRm9yIGFjY291bnQ6IElmIHByb3ZpZGVyRW1haWwgaXMgZGVmaW5lZCBhcyBhIGxvZ2luSWRlbnRpZmllciBpbiB0aGUgcG9saWN5LCBhbmQgdGhlIGVtYWlsIGFkZHJlc3MgcmVjZWl2ZWQgZnJvbSB0aGUgcHJvdmlkZXIgZXhpc3RzIGluIHRoZSBncy5sb2dpbklkZW50aWZpZXJzIGNvbGxlY3Rpb24gYnV0IGFzc29jaWF0ZWQgd2l0aCBhIGRpZmZlcmVudCBVVUlEIHRoYW4gdGhlIGN1cnJlbnQgdXNlciwgdGhlbiByZXR1cm4gXCJMb2dpbiBpZGVudGlmaWVyIGV4aXN0c1wiIGVycm9yIGNvZGUgKDQwM3h4eCkuXHJcbiAgICBVTkRFUkFHRV9VU0VSID0gNDAzMDQ0LCAvLyBGb3IgQ09QUEEgY29tcGxpYW5jZSAoQ2hpbGRyZW4ncyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdClcclxuICAgIElOVkFMSURfU0lURV9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAzMDQ1LCAvLyBGb3IgYWNjb3VudHMgLSBzaXRlIERTIGlzIGVuYWJsZWQgdGhvdWdoIG5vIERTU2l6ZSB3YXMgY29uZmlndXJlZC5cclxuICAgIExPR0lOSURfRE9FU19OT1RfRVhJU1QgPSA0MDMwNDcsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIHJlc2V0IHBhc3N3b3JkIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xyXG4gICAgQVBJX1JBVEVfTElNSVRfRVhDRUVERUQgPSA0MDMwNDgsXHJcbiAgICBQRU5ESU5HX1BBU1NXT1JEX0NIQU5HRSA9IDQwMzEwMCwgLy8gVGhlIHVzZXIncyBwYXNzd29yZCBuZWVkcyB0byBiZSBjaGFuZ2VkXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1ZFUklGSUNBVElPTiA9IDQwMzEwMSxcclxuICAgIEFDQ09VTlRfUEVORElOR19URkFfUkVHSVNUUkFUSU9OID0gNDAzMTAyLFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1JFQ0VOVF9MT0dJTiA9IDQwMzExMCxcclxuICAgIEFDQ09VTlRfVEVNUE9SQVJJTFlfTE9DS0VEX09VVCA9IDQwMzEyMCwgLy8gVG9vIG1hbnkgbG9naW4gYXR0ZW1wdHM7IGFjY291bnQgbG9ja2VkLW91dFxyXG4gICAgUkVEVU5EQU5UX09QRVJBVElPTiA9IDQwMzIwMCwgLy8gVGhlIGNsaWVudCBwZXJmb3JtZWQgYW4gb3BlcmF0aW9uIHRoYXQgaXMgcmVkdW5kYW50XHJcbiAgICBJTlZBTElEX0FQUExJQ0FUSU9OX0lEID0gNDAzMjAxLCAvLyBUaGUgYXBwIGlkIHByb3ZpZGVkIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBvbmUgY29uZmlndXJlZCBmb3IgdGhlIHNpdGVcclxuICAgIE5PVF9GT1VORCA9IDQwNDAwMCwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLiBBY2NvdW50cyAtIGVtYWlsIHZlcmlmaWNhdGlvbiBmYWlsZWQsIHV1aWQgbm90IGZvdW5kLlxyXG4gICAgRlJJRU5EX05PVF9GT1VORCA9IDQwNDAwMSwgLy8gdGhlIHVzZXIgaWQgcHJvdmlkZWQgYXMgYSB0YXJnZXQgaXMgbm90IGEgZnJpZW5kIGZvciB0aGUgY3VycmVudCB1c2VyXHJcbiAgICBDQVRFR09SWV9OT1RfRk9VTkQgPSA0MDQwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC5cclxuICAgIFVJRF9OT1RfRk9VTkQgPSA0MDQwMDMsXHJcbiAgICBSRVNPVVJDRV9OT1RfRk9VTkQgPSA0MDQwMDQsIC8vIENsaWVudCBzaWRlIC0gaW1hZ2Ugbm90IGZvdW5kIGFmdGVyIHVwbG9hZFxyXG4gICAgSU5WQUxJRF9BUElfTUVUSE9EID0gNDA1MDAxLCAvLyBpbnRlcm5hbCBmb3Igb3VyIEpTIEFQSVxyXG4gICAgSURFTlRJVFlfRVhJU1RTID0gNDA5MDAxLCAvLyB3aGVuIHRyeWluZyB0byBjb25uZWN0IHRvIGEgcHJvdmlkZXIgdGhhdCBpcyBhbHJlYWR5IGNvbm5lY3RlZCBvciBsaW5rIHRvIGFuIGFscmVhZHkgbGlua2VkIGFjY291bnRcclxuICAgIEdPTkUgPSA0MTAwMDAsIC8vIFJlc291cmNlIG5vIGxvbmdlciBhdmFpbGFibGUuIERhdGEgS2V5IFNlcnZlciAtIGtleSByZXZva2VkL2V4cGlyZWQuXHJcbiAgICBSRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgPSA0MTMwMDEsIC8vIENvbW1lbnRzIHNlcnZlciAtIFJlcXVlc3QgdG8gbGFyZ2VcclxuICAgIENPTU1FTlRfVEVYVF9UT09fTEFSR0UgPSA0MTMwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENvbW1lbnQgVGV4dCB0byBsYXJnZS5cclxuICAgIE9CSkVDVF9UT09fTEFSR0UgPSA0MTMwMDMsIC8vIERhdGFTdG9yZSBvYmplY3QgaXMgdG9vIGxhcmdlXHJcbiAgICBQUk9GSUxFX1BIT1RPX1RPT19MQVJHRSA9IDQxMzAwNCwgLy8gUHJvZmlsZSBwaG90byBpcyB0b28gbGFyZ2UsIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGNvbnRlbnQgbGVuZ3RoXHJcbiAgICBSRVFVRVNUX1VSSV9UT09fTE9ORyA9IDQxNDAwMCwgLy9UaGUgVVJJIHByb3ZpZGVkIHdhcyB0b28gbG9uZyBmb3IgdGhlIHNlcnZlciB0byBwcm9jZXNzLlxyXG4gICAgTUlTU0lOR19VU0VSX1BIT1RPID0gNDA5MDEwLCAvLyBFcnJvciAtIG1pc3NpbmcgdXNlciBwaG90b1xyXG4gICAgQ09VTlRFUl9OT1RfUkVHSVNURVJFRCA9IDQwOTAxMSwgLy8gQ291bnRlciBub3QgcmVnaXN0ZXJlZFxyXG4gICAgSU5WQUxJRF9HTUlEX1RJQ0tFVCA9IDQwOTAxMiwgLy8gZ21pZCB0aWNrZXQgaXMgbm90IHZhbGlkXHJcbiAgICBTQU1MX01BUFBFRF9BVFRSSUJVVEVfTk9UX0ZPVU5EID0gNDA5MDEzLCAvLyBVc2VkIHdoZW4gbWFwcGVkIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgcHJvdmlkZXJVSUQgY2Fubm90IGJlIHJldHJlaXZlZFxyXG4gICAgU0FNTF9DRVJUSUZJQ0FURV9OT1RfRk9VTkQgPSA0MDkwMTQsIC8vIFVzZWQgd2hlbiBTQU1MIGNlcnRpZmljYXRlIGNvdWxkIG5vdCBiZSByZXRyZWl2ZWQuXHJcbiAgICBTQU1MX01FU1NBR0VfTk9UX0ZPVU5EID0gNDA5MDE1LCAvLyBVc2VkIHdoZW4gY2FjaGVkIFNBTUwgbWVzc2FnZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxyXG4gICAgR0VORVJBTF9TRVJWRVJfRVJST1IgPSA1MDAwMDEsXHJcbiAgICBTRVJWRVJfTE9HSU5fRVJST1IgPSA1MDAwMDIsIC8vIGdlbmVyYWwgZXJyb3IgZHVyaW5nIHRoZSBsb2dpbiBwcm9jZXNzXHJcbiAgICBERUZBVUxUX0FQUExJQ0FUSU9OX0NPTkZJR1VSQVRJT05fRVJST1IgPSA1MDAwMDMsIC8vIEZvciBtdWx0aXBsZSBEQyAtIHdoZW4gbm8gZGVmYXVsdCBhcHBsaWNhdGlvbiBjYW4gYmUgZm91bmQgaW4gRGVmYXVsdEFwcGxpY2F0aW9ucy5jb25maWcuIFdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJEZWZhdWx0IGFwcGxpY2F0aW9uIGlzbid0IGNvbmZpZ3VyZWQgZm9yIGRhdGFDZW50ZXJcIlxyXG4gICAgU0VTU0lPTl9NSUdSQVRJT05fRVJST1IgPSA1MDAwMTQsIC8vIGVycm9yIGluIG1pZ3JhdGluZyBvbGQgdG8gbmV3IGZhY2Vib29rIHNlc3Npb25cclxuICAgIFBST1ZJREVSX0VSUk9SID0gNTAwMDIzLCAvLyBnZW5lcmFsIGVycm9yIGZyb20gdGhlIHByb3ZpZGVyXHJcbiAgICBEQVRBQkFTRV9FUlJPUiA9IDUwMDAyOCxcclxuICAgIFVTRVJOQU1FX1JFUVVJUkVEID0gNTAwMDI5LCAvLyBJbm5lciBjb2RlXHJcbiAgICBOT19QUk9WSURFUl9BUFBMSUNBVElPTiA9IDUwMDAzMSwgLy8gdGhlIGFwcGxpY2F0aW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIG5vdCBkZWZpbmVkIGZvciB0aGlzIHNpdGVcclxuICAgIExPQURfRkFJTEVEID0gNTAwMDMyLCAvLyBjbGllbnQgZXJyb3JcclxuICAgIElOVkFMSURfRU5WSVJPTk1FTlRfQ09ORklHID0gNTAwMDMzLCAvLyBJbiBjYXNlIHRoZXJlIGlzIG5vIHRhcmdldCBlbnZpcm9ubWVudCBpbiB0aGUgY29uZmlnIGZpbGUgd2UnZCByZXR1cm4gd2l0aCAgaW52YWxpZF9lbnZpcm9ubWVudF9jb25maWcgZXJyb3IuXHJcbiAgICBFUlJPUl9EVVJJTkdfQkFDS0VORF9PUEVSQVRJT04gPSA1MDAwMzQsXHJcbiAgICBUSU1FT1VUID0gNTA0MDAxLCAvLyBvdXRnb2luZyByZXF1ZXN0IGhhZCB0aW1lZCBvdXRcclxuICAgIENMSUVOVFRJTUVPVVQgPSA1MDQwMDIsIC8vIEZvciBzZXJ2ZXIgU0RLcyAtIGEgY2xpZW50IHNpZGUgdGltZW91dFxyXG4gICAgSU5WQUxJRF9VUkwgPSA0MDQwMDQsIC8vIGVtYmVkLmx5IDQwNCBlcnJvciBtZXNzYWdlIC0gdXJsIGlzIG5vdCB2YWxpZFxyXG4gICAgTUVESUFfSVRFTVNfTk9UX1NVUFBPUlRFRCA9IDQwMTAwMSwgLy8gTWVkaWEgaXRlbXMgYSBub3QgYWxsb3dlZCBmb3IgdGhpcyBjYXRlZ29yeVxyXG4gICAgTUlTU0lOR19FUlJPUl9DT0RFID0gNTk5OTk5LFxyXG59XHJcbmV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JEZXRhaWxzIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgU2FtZV9wYXNzd29yZCA9IDEwMDAwMSwgLy8gUmVzZXQgUGFzc3dvcmQgLSBcIidvbGRQYXNzd29yZCcgY2Fubm90IGJlIHRoZSBzYW1lIGFzICduZXdQYXNzd29yZCdcIlxyXG4gICAgSW52YWxpZF9wYXNzd29yZCA9IDEwMDAwMiwgLy8gUmVzZXQgUGFzc3dvcmQgLSBjdXJyZW50IHBhc3N3b3JkIGlzIHdyb25nL2ludmFsaWRcclxuICAgIEludmFsaWRfY291bnRlcnNfcXVlcnlfd2l0aF9jdXJzb3IgPSAxMDAwMDMsXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==