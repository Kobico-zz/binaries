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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/accounts/Gigya.Js.Plugin.Tfa/app/index.ts");
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

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss.ts":
/*!************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.imgBase = window.gigya._.getCdnResource('/gs/i/comments2/');
exports.defaultCss = {
    reset: [
        '.gig-tfa-container *, *.gig-tfa-container {',
        'word-wrap:break-word;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;',
        'font-family:arial;color:#333333;position:static;text-align:left;vertical-align:baseline;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}',
    ].join(''),
    resetRtl: '.gig-comments-container *, *.gig-comments-container {direction:rtl;text-align:right;}',
    global: [
        '.gig-tfa-container {}',
        '.gig-tfa-header-text {margin-bottom:30px;}',
        '.gig-tfa-button.gig-tfa-button-submit.disabled {pointer-events:none; opacity:0.3;}',
        '.gig-tfa-container input:focus {box-shadow:0 0 3px #50BADE, 0 1px 3px rgba(0, 0, 0, 0.05) inset}',
        '.gig-tfa-container input:focus {border: 1px solid #87B9EA; outline: medium none}',
        '.gig-tfa-container input, .gig-tfa-container select {border: 1px solid #CCCCCC;border-radius: 3px 3px 3px 3px;margin: 6px 0;padding: 5px;}',
        '.gig-tfa-container label {margin-right:15px;}',
        'input.gig-tfa-phone-prefix {display:none;}',
        '.gig-tfa-phone-number {width: 100%}',
        '.gig-tfa-label {font-weight:bold;margin:10px 0;}',
        '.gig-tfa-phone-register-select, .gig-tfa-selectbox {width: 100%}',
        '.gig-tfa-phone-register-type-label {margin: 15px 0 3px}',
        '.gig-tfa-phone-register-type * {margin:0;display:inline-block;vertical-align:middle;margin:0;}',
        '.gig-tfa-phone-register-type span {line-height: 15px;}',
        '.gig-tfa-button-container {text-align:right;margin:15px 0 0;}',
        '.gig-tfa-button {',
        'display:inline-block;text-align: center;border: 1px solid #CECECE;cursor: pointer;padding: 0 12px;',
        'color: #333333;font-weight: bold;border-radius: 4px;line-height: 26px;gradient(#FFFFFF,#F2F2F2)}',
        '.gig-tfa-button:hover {gradient(#F2F2F2,#FFFFFF)}',
        '.gig-tfa-error {color:#dd4b39;line-height:14px;font-size:11px;margin:10px 0!important}',
        '.gig-tfa-code-textbox {width: 100%; margin: 6px 0!important}',
        'input.gig-tfa-input-error {border: 1px solid #dd4b39!important}',
        '.gig-tfa-phone-code-resend {color:#2B8DDD;cursor:pointer;}',
        '.gig-tfa-phone-code-phonenumber {}',
        'input.gig-tfa-code-remember-checkbox {margin: 0px 5px 0 0!important;padding: 0;vertical-align: top;}',
        'label.gig-tfa-code-remember-label {display:block; margin: 10px 0 18px!important}',
        '.gig-tfa-phone-resend-yourphone {font-weight:normal}',
        '.gig-tfa-phone-edit-link {margin-left:25px;;color:#2B8DDD;cursor:pointer}',
        '.gig-tfa-select-wrapper {padding:10px 0;margin-bottom: 16px;border-bottom:1px #e0dddd solid}',
        '.gig-tfa-totp-step-label {color: #11598b;font-size:18px!important;padding-bottom:10px}',
        '.gig-tfa-totp-qrcode {text-align:center; margin-bottom: 16px; border-bottom:1px #e0dddd solid}',
        '.gig-tfa-bottom-intro {margin-bottom: 35px!important;margin-top: 15px!important}',
        'div.gig-tfa-totp-header-text {font-size: 15px;color: #4e515e}',
        'div.gig-tfa-button-container.gig-tfa-button-container-top-margin {margin-top:35px!important}',
        'div.gig-tfa-button-container.gig-tfa-button-container-row>.gig-tfa-button {width: 49%!important;}',
        'div.gig-tfa-button-container.gig-tfa-button-container-row div:last-child {float:left!important}',
        'table.gig-tfa-totp-backup-codes {width: 100%;border:1px black dashed;margin:25px 0}',
        'table.gig-tfa-totp-backup-codes td {text-align: center;padding:12px}',
        'div.gig-tfa-row{width:100%;text-align:center; padding:15px 0}',
        '.gig-backup-codes-print-btn{margin-bottom: 10px!important;}',
        'a.gig-tfa-link {color:#1371b9;text-decoration:none;font-size:15px;margin:0!important;cursor:pointer}',
    ].join(''),
    mobile: ['.gig-tfa-container *, *.gig-tfa-container {font-size:16px;-webkit-text-size-adjust:none;}'].join(''),
    nonMobile: ['.gig-tfa-container *, *.gig-tfa-container {font-size:12px}'].join(''),
    rtl: [].join(''),
};


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/Templates.ts":
/*!***********************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/Templates.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
// $id- is the "id" passed when calling utils.templates.fill with specific suffix. i.e. $id-some-el-description
exports.defaultTemplates = {
    container: ['<div class="gig-tfa-select-provider"></div>', '<div class="gig-tfa-provider-wrapper" id="$wrapperId"></div>'].join(''),
    selectProvider: [
        '<div class="gig-tfa-select-wrapper">',
        '<div class="gig-tfa-label" id="selectProviderHeader">$selectProviderHeader</div>',
        '<div class="gig-tfa-select" tabindex="0" aria-labelledby="selectProviderHeader">',
        '<div class="gig-tfa-select-text"></div>',
        '<select class="gig-tfa-selectbox" tabindex="0"></select>',
        '</div>',
    ].join(''),
    progress: '<div class="gig-tfa-progress"></div>',
    error: ['<div>', '<div tabindex="0" class="gig-tfa-error"></div>', '</div>'].join(''),
    phoneRegister: [
        '<div id="$id-header" class="gig-tfa-header-text">$headerText</div>',
        '<div class="gig-tfa-label" id="$id-select-your-country" aria-hidden="true">$select_your_country</div>',
        '<select class="gig-tfa-phone-register-select" width="248" tabindex="0" aria-labelledby="$id-header $id-select-your-country"><option value="0">- Select -</option><optgroup label=""><option value="1" isUS="true">United States</option><option value="1">Canada</option><option value="44">United Kingdom</option><option value="61">Australia</option><option value="81">Japan</option></optgroup><optgroup label="------------------------"><option value="93">Afghanistan</option><option value="355">Albania</option><option value="213">Algeria</option><option value="376">Andorra</option><option value="244">Angola</option><option value="809">Anguilla</option><option value="268">Antigua and Barbuda</option><option value="54">Argentina</option><option value="374">Armenia</option><option value="297">Aruba</option><option value="61">Australia</option><option value="43">Austria</option><option value="994">Azerbaijan</option><option value="973">Bahrain</option><option value="880">Bangladesh</option><option value="246">Barbados</option><option value="375">Belarus</option><option value="32">Belgium</option><option value="501">Belize</option><option value="229">Benin</option><option value="809">Bermuda</option><option value="975">Bhutan</option><option value="591">Bolivia</option><option value="387">Bosnia And Herzegovina</option><option value="267">Botswana</option><option value="55">Brazil</option><option value="246">British Indian Ocean Territory</option><option value="673">Brunei</option><option value="359">Bulgaria</option><option value="226">Burkina Faso</option><option value="257">Burundi</option><option value="855">Cambodia</option><option value="237">Cameroon</option><option value="1">Canada</option><option value="238">Cape Verde</option><option value="345">Cayman Islands</option><option value="235">Chad</option><option value="56">Chile</option><option value="86">China</option><option value="57">Colombia</option><option value="242">Congo</option><option value="243">Congo, The Democratic Republic Of The</option><option value="506">Costa Rica</option><option value="225">Cote d\'Ivoire</option><option value="385">Croatia</option><option value="53">Cuba</option><option value="357">Cyprus</option><option value="420">Czech Republic</option><option value="45">Denmark</option><option value="253">Djibouti</option><option value="767">Dominica</option><option value="809">Dominican Republic</option><option value="670">East Timor</option><option value="593">Ecuador</option><option value="20">Egypt</option><option value="503">El Salvador</option><option value="240">Equatorial Guinea</option><option value="372">Estonia</option><option value="500">Falkland Islands (Malvinas)</option><option value="298">Faroe Islands</option><option value="679">Fiji</option><option value="358">Finland</option><option value="33">France</option><option value="594">French Guiana</option><option value="689">French Polynesia</option><option value="241">Gabon</option><option value="220">Gambia</option><option value="995">Georgia</option><option value="49">Germany</option><option value="233">Ghana</option><option value="350">Gibraltar</option><option value="30">Greece</option><option value="299">Greenland</option><option value="473">Grenada</option><option value="590">Guadeloupe</option><option value="502">Guatemala</option><option value="32767">Guernsey</option><option value="592">Guyana</option><option value="509">Haiti</option><option value="504">Honduras</option><option value="852">Hong Kong</option><option value="36">Hungary</option><option value="354">Iceland</option><option value="91">India</option><option value="62">Indonesia</option><option value="98">Iran</option><option value="964">Iraq</option><option value="353">Ireland</option><option value="44">Isle Of Man</option><option value="972">Israel</option><option value="39">Italy</option><option value="876">Jamaica</option><option value="81">Japan</option><option value="44">Jersey</option><option value="962">Jordan</option><option value="7">Kazakhstan</option><option value="254">Kenya</option><option value="82">Korea, South</option><option value="965">Kuwait</option><option value="996">Kyrgyzstan</option><option value="371">Latvia</option><option value="961">Lebanon</option><option value="266">Lesotho</option><option value="231">Liberia</option><option value="218">Libya</option><option value="423">Liechtenstein</option><option value="370">Lithuania</option><option value="352">Luxembourg</option><option value="853">Macao</option><option value="389">Macedonia</option><option value="261">Madagascar</option><option value="265">Malawi</option><option value="60">Malaysia</option><option value="960">Maldives</option><option value="223">Mali</option><option value="356">Malta</option><option value="596">Martinique </option><option value="222">Mauritania</option><option value="230">Mauritius</option><option value="52">Mexico</option><option value="373">Moldova</option><option value="33">Monaco</option><option value="976">Mongolia</option><option value="382">Montenegro</option><option value="473">Montserrat</option><option value="212">Morocco </option><option value="258">Mozambique</option><option value="95">Myanmar</option><option value="264">Namibia</option><option value="977">Nepal</option><option value="31">Netherlands</option><option value="599">Netherlands Antilles</option><option value="687">New Caledonia</option><option value="64">New Zealand</option><option value="505">Nicaragua</option><option value="227">Niger</option><option value="234">Nigeria</option><option value="1670">Northern Mariana Islands</option><option value="47">Norway</option><option value="968">Oman</option><option value="92">Pakistan</option><option value="970">Palestine</option><option value="507">Panama</option><option value="595">Paraguay</option><option value="51">Peru</option><option value="63">Philippines</option><option value="48">Poland</option><option value="351">Portugal </option><option value="1787">Puerto Rico</option><option value="974">Qatar</option><option value="262">Reunion</option><option value="40">Romania</option><option value="7">Russia</option><option value="250">Rwanda </option><option value="1869">Saint Kitts and Nevis</option><option value="1758">Saint Lucia</option><option value="1784">Saint Vincent</option><option value="966">Saudi Arabia</option><option value="221">Senegal</option><option value="381">Serbia</option><option value="248">Seychelles</option><option value="232">Sierra Leone</option><option value="65">Singapore</option><option value="421">Slovakia</option><option value="386">Slovenia</option><option value="252">Somalia</option><option value="27">South Africa</option><option value="34">Spain</option><option value="94">Sri Lanka</option><option value="249">Sudan</option><option value="597">Suriname</option><option value="268">Swaziland</option><option value="46">Sweden</option><option value="41">Switzerland</option><option value="963">Syria</option><option value="886">Taiwan</option><option value="7">Tajikistan</option><option value="255">Tanzania</option><option value="66">Thailand</option><option value="228">Togo</option><option value="676">Tonga</option><option value="1868">Trinidad And Tobago</option><option value="216">Tunisia</option><option value="90">Turkey</option><option value="993">Turkmenistan</option><option value="256">Uganda</option><option value="380">Ukraine</option><option value="971">United Arab Emirates</option><option value="44">United Kingdom</option><option value="1" isUS="true">United States</option><option value="598">Uruguay</option><option value="7">Uzbekistan</option><option value="678">Vanuatu</option><option value="58">Venezuela</option><option value="84">Viet Nam</option><option value="1284">Virgin Islands, British</option><option value="681">Wallis And Futuna</option><option value="381">Yemen</option><option value="260">Zambia</option><option value="263">Zimbabwe</option></optgroup></select>',
        '<div class="gig-tfa-label" id="$id-phone-number" aria-hidden="true">$enter_your_phone_number</div>',
        '<input class="gig-tfa-phone-prefix" type="text" disabled="disabled"/>',
        '<input class="gig-tfa-phone-number" type="text" aria-labelledby="$id-phone-number" />',
        '<div class="gig-tfa-verification-method" style="display:none">',
        '<div class="gig-tfa-label gig-tfa-phone-register-type-label" id="gig-tfa-phone-get-code-by">$get_code_by</div>',
        '<label class="gig-tfa-phone-register-type gig-tfa-phone-register-type-sms" for="$id-get-sms-code">',
        '<input class="gig-tfa-phone-register-type-radio" name="phoneMethod" aria-labelledby="gig-tfa-phone-get-code-by rb-sms-label" type="radio" value="sms" id="$id-get-sms-code" checked /> <span id="rb-sms-label">$text_message</span></label>',
        '<label class="gig-tfa-phone-register-type gig-tfa-phone-register-type-voice-call"  for="$id-get-voice-code">',
        '<input class="gig-tfa-phone-register-type-radio" name="phoneMethod" type="radio" value="voice" id="$id-get-voice-code" /> <span>$voice_call</span></label>',
        '</div>',
        '<div class="gig-tfa-error" aria-atomic="true" role="alert"></div>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-next" role="button" tabindex="0">$send</div></div>',
    ].join(''),
    phoneEnterCode: [
        '<div id="$id-header-text" tabindex="-1"  class="gig-tfa-phone-code-header-text">$headerText</div>',
        '<div id="$id-subtext" tabindex="-1" class="gig-tfa-phone-code-header-subtext"><span class="gig-tfa-phone-code-phonenumber"></span>&nbsp;(<span class="gig-tfa-phone-code-resend" tabindex="0" role="button">$resend</span>)</div>',
        '<div class="gig-tfa-label" id="$id-enter-code" tabindex="-1">$enter_code</div>',
        '<input class="gig-tfa-code-textbox" type="text" tabindex="0"/>',
        '<div class="gig-tfa-error" aria-atomic="true" role="alert"></div>',
        '<label class="gig-tfa-code-remember-label" tabindex="-1" for="$id-remember"><input class="gig-tfa-code-remember-checkbox" type="checkbox" tabindex="0" id="$id-remember" />$remember_this_device</label>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-submit" tabindex="0" role="button">$submit</div></div>',
    ].join(''),
    emailEnterCode: [
        '<div id="$id-header-text" tabindex="-1" class="gig-tfa-email-code-header-text">$headerText</div>',
        '<div id="$id-email" tabindex="-1" class="gig-tfa-email-text">$email</div>',
        '<div class="gig-tfa-label" id="$id-enter-code" tabindex="-1">$enter_code</div>',
        '<input class="gig-tfa-code-textbox" type="text" tabindex="0"/>',
        '<div class="gig-tfa-error" aria-atomic="true" role="alert"></div>',
        '<label class="gig-tfa-code-remember-label" tabindex="-1" for="$id-remember"><input class="gig-tfa-code-remember-checkbox" type="checkbox" tabindex="0" id="$id-remember" />$remember_this_device</label>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-submit" tabindex="0" role="button">$submit</div></div>',
    ].join(''),
    phoneResend: [
        '<div class="gig-tfa-phone-resend-header-text">$headerText</div>',
        '<div class="gig-tfa-verification-method" style="display:none">',
        '<div class="gig-tfa-label gig-tfa-phone-resend-type-label">$get_code_by</div>',
        '<label class="gig-tfa-phone-resend-type gig-tfa-phone-resend-type-sms" for="$id-get-sms-code"><input class="gig-tfa-phone-resend-type-radio" name="phoneMethod" type="radio" value="sms" id="$id-get-sms-code" /> <span>$text_message</span></label>',
        '<label class="gig-tfa-phone-resend-type gig-tfa-phone-resend-type-voice-call" for="$id-get-voice-code"><input class="gig-tfa-phone-resend-type-radio" name="phoneMethod" type="radio" value="voice" id="$id-get-voice-code" /> <span>$voice_call</span></label>',
        '</div>',
        '<div class="gig-tfa-label gig-tfa-phone-resend-yourphone-label">$your_phone_number <span class="gig-tfa-phone-resend-yourphone"></span></div>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-send" tabindex="0" role="button">$send</div></div>',
    ].join(''),
    phoneEdit: ['<div class="gig-tfa-phone-edit-header-text">$headerText</div>', '<div class="gig-tfa-phone-edit-numbers"></div>'].join(''),
    phoneEditEntry: [
        '<span class="gig-tfa-phone-edit-number">$phoneNumber</span><span class="gig-tfa-phone-edit-link" data-phoneid="$phoneId" tabindex="0" role="button">$edit</span>',
    ].join(''),
    totpRegister: [
        '<h2 id="$id-step-1" class="gig-tfa-totp-step-label">$step1</h2>',
        '<div id="$id-scan-qr-code-label" class="gig-tfa-label">$scan_qr_code</div>',
        '<div class="gig-tfa-totp-qrcode" tabindex="0" aria-labelledby="$id-step-1 $id-scan-qr-code-label">',
        '<img src="$qrCode"/>',
        '</div>',
        '<h2 id="$id-step-2" class="gig-tfa-totp-step-label">$step2</h2>',
        '<div class="gig-tfa-label" id="$id-enter-code"  >$enter_code</div>',
        '<input class="gig-tfa-code-textbox" type="text" aria-labelledby="$id-step-2 $id-enter-code $id-enter-code-error" tabindex="0"/>',
        '<div class="gig-tfa-error" id="$id-enter-code-error" aria-atomic="true" role="alert"></div>',
        '<label class="gig-tfa-code-remember-label" for="$id-remember-me" id="$gig-tfa-code-remember-label"><input aria-labelledby="$gig-tfa-code-remember-label" class="gig-tfa-code-remember-checkbox" type="checkbox" tabindex="0" id="$id-remember-me" />$remember_this_device</label>',
        '<div id="$id-download-backup-codes" class="gig-tfa-label gig-tfa-bottom-intro">$downloadBackupCodesIntro</div>',
        '<div class="gig-tfa-button-container" aria-describedby="$id-download-backup-codes"><div class="gig-tfa-button gig-tfa-button-submit" tabindex="0" role="button">$submit</div></div>',
    ].join(''),
    totpEdit: [
        '<div id="$id-header" tabindex="-1" aria-label="$headerText" class="gig-tfa-totp-header-text gig-tfa-totp-edit-header-text">$headerText</div>',
        '<div class="gig-tfa-error" aria-atomic="true" role="alert"></div>',
        '<div class="gig-tfa-button-container gig-tfa-button-container-top-margin">',
        '<div class="gig-tfa-button gig-tfa-button-change-device" tabindex="0" aria-labelledby="$id-header" role="button">$changeDevice</div>',
        '<div class="gig-tfa-button gig-tfa-button-backup-codes" tabindex="0" aria-labelledby="$id-header" role="button">$backupCodes</div>',
        '</div>',
    ].join(''),
    totpBackupCodes: [
        '<div id="$id-header" tabindex="-1" class="gig-tfa-totp-header-text gig-tfa-totp-backup-codes-header-text">$headerText</div>',
        '<table class="gig-tfa-totp-backup-codes">',
        '<tr>',
        '<td>$backupCode1</td>',
        '<td>$backupCode2</td>',
        '<td>$backupCode3</td>',
        '</tr>',
        '<tr>',
        '<td>$backupCode4</td>',
        '<td>$backupCode5</td>',
        '<td>$backupCode6</td>',
        '</tr>',
        '<tr>',
        '<td>$backupCode7</td>',
        '<td>$backupCode8</td>',
        '<td>$backupCode9</td>',
        '</tr>',
        '</table>',
        '<div class="gig-tfa-button-container">',
        '<div class="gig-tfa-button gig-backup-codes-print-btn" tabindex="0" role="button" aria-labelledby="$id-header">$print</div>',
        '</div>',
        '<div class="gig-tfa-row">',
        '<a class="gig-tfa-link gig-tfa-generate-new-codes" tabindex="0" role="button">$generateNewCodes</a>',
        '</div>',
    ].join(''),
    totpGenerateNewCodesConfirmation: [
        '<div class="gig-tfa-label">$resetCodesQuestion</div>',
        '<div class="gig-tfa-button-container gig-tfa-button-container-row gig-tfa-button-container-top-margin">',
        '<div class="gig-tfa-button gig-backup-codes-confirm" tabindex="0" role="button">$yes</div>',
        '<div class="gig-tfa-button gig-backup-codes-cancel" tabindex="0" role="button">$cancel</div>',
        '</div>',
    ],
    totpVerify: [
        '<div class="gig-tfa-label" id="$id-enter-code" tabindex="-1" aria-hidden="true">$enter_code</div>',
        '<input class="gig-tfa-code-textbox" type="text" tabindex="0" aria-labelledby="$id-enter-code"/>',
        '<div class="gig-tfa-error" tabindex="0" aria-atomic="true" role="alert"></div>',
        '<label class="gig-tfa-code-remember-label" for="$id-remember-me"><input class="gig-tfa-code-remember-checkbox" type="checkbox" tabindex="0" id="$id-remember-me" />$remember_this_device</label>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-submit" tabindex="0" role="button">$submit</div></div>',
        '<div class="gig-tfa-row gig-tfa-use-backup-code-row">',
        '<a class="gig-tfa-link gig-tfa-use-backup-code">$useBackupCode</a>',
        '</div>',
    ].join(''),
    pushVerificationPhone: [
        '<div class="gig-tfa-label" id="$id-push-tfa" tabindex="-1" aria-hidden="true">$call_to_action</div>',
        '<div class="gig-tfa-error" tabindex="0" aria-atomic="true" role="alert"></div>',
        '<div class="gig-tfa-row gig-tfa-use-backup-code-row">',
        '<a class="gig-tfa-link gig-tfa-use-backup-code">$useBackupCode</a>',
        '<br/>',
        '<a class="gig-tfa-link gig-tfa-resend-push-notification">$resendPushNotification</a>',
        '</div>',
    ].join(''),
    pushVerificationBackupCodes: [
        '<div class="gig-tfa-label" id="$id-push-tfa" tabindex="-1" aria-hidden="true">$call_to_action</div>',
        '<input class="gig-tfa-code-textbox" type="text" tabindex="0" aria-labelledby="$id-push-tfa"/>',
        '<div class="gig-tfa-error" tabindex="0" aria-atomic="true" role="alert"></div>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-submit" tabindex="0" role="button">$submit</div></div>',
        '<div class="gig-tfa-row gig-tfa-use-backup-code-row">',
        '<a class="gig-tfa-link gig-tfa-resend-push-notification">$resendPushNotification</a>',
        '</div>',
    ].join(''),
};


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts":
/*!***********************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Templates_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/Templates */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/Templates.ts");
var DefaultCss_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss.ts");
var TfaProviderFactory_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory.ts");
var constants_1 = __webpack_require__(/*! src/accounts/constants */ "./src/accounts/constants.ts");
var TfaMode;
(function (TfaMode) {
    TfaMode[TfaMode["verify"] = 0] = "verify";
    TfaMode[TfaMode["register"] = 1] = "register";
    TfaMode[TfaMode["add"] = 2] = "add";
    TfaMode[TfaMode["edit"] = 3] = "edit";
})(TfaMode = exports.TfaMode || (exports.TfaMode = {}));
var VerificationMethod;
(function (VerificationMethod) {
    VerificationMethod[VerificationMethod["SMS"] = 0] = "SMS";
    VerificationMethod[VerificationMethod["VOICE"] = 1] = "VOICE";
})(VerificationMethod = exports.VerificationMethod || (exports.VerificationMethod = {}));
exports.FriendlyProviderNames = {
    livelink: 'Phone (SMS)',
    gigyaPhone: 'Phone (Voice/SMS)',
    gigyaTotp: 'Time based Authentication',
    gigyaPush: 'Push Notification',
    gigyaEmail: 'Email',
};
var TfaPlugin = /** @class */ (function () {
    function TfaPlugin(params) {
        var _this = this;
        this.params = params;
        this.activeProviders = [];
        this.inactiveProviders = [];
        this.templates = window.gigya.utils.object.clone(Templates_1.defaultTemplates, false);
        this.mode = this.getModeByString(params['mode']);
        this.container = document.getElementById(params['containerID']) || document.createElement('div');
        this.container.id = this.container.id || String(Date.now() + Math.floor(Math.random() * 100));
        this.initUI();
        this.updateProviders(function () {
            window.gigya.events.dispatchForWidget({
                eventName: 'load',
            }, _this.params);
            _this.showSelector();
        });
    }
    TfaPlugin.prototype.getText = function (textKey, replaceStr, withStr) {
        if (this.params['customLang'] && this.params['customLang'][textKey]) {
            return this.params['customLang'][textKey].replace(replaceStr, withStr);
        }
        else {
            return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.accounts.plugins.tfa.js', textKey, this.params['lang'], replaceStr, withStr);
        }
    };
    TfaPlugin.prototype.initUI = function () {
        var deviceType = this.params['deviceType'] ? this.params['deviceType'].toLowerCase() : 'desktop';
        this.isMobileUI = deviceType == 'mobile' || (deviceType == 'auto' && window.gigya.localInfo.isMobile);
        var cssPrefix = this.params['cssPrefix'];
        if (cssPrefix || !this.addedCss) {
            var lang = this.params['lang'];
            this.isRtl = lang == 'he' || lang == 'ar';
            window.gigya._.plugins.utils.css.addCss(DefaultCss_1.defaultCss.reset, cssPrefix);
            if (this.isRtl)
                window.gigya._.plugins.utils.css.addCss(DefaultCss_1.defaultCss.resetRtl, cssPrefix);
            var fixedCss = window.gigya.pluginUtils.css.fixCss(DefaultCss_1.defaultCss.global);
            var fixedRtlCss = window.gigya.pluginUtils.css.fixCss(DefaultCss_1.defaultCss.rtl);
            window.gigya._.plugins.utils.css.addCss(fixedCss, cssPrefix);
            if (this.isRtl)
                window.gigya._.plugins.utils.css.addCss(fixedRtlCss, cssPrefix);
            if (this.isMobileUI) {
                window.gigya._.plugins.utils.css.addCss(DefaultCss_1.defaultCss.mobile, cssPrefix);
            }
            else {
                window.gigya._.plugins.utils.css.addCss(DefaultCss_1.defaultCss.nonMobile, cssPrefix);
            }
            if (window.gigya.localInfo.isMobile && window.gigya.localInfo.isSafari) {
                window.gigya._.plugins.utils.css.addCss('.gig-tfa-container * {-webkit-text-size-adjust:none;}', cssPrefix);
            }
            this.addedCss = true;
        }
        if (this.isMobileUI) {
            this.container.style.width = '100%';
        }
        this.container.className = 'gig-tfa-container';
        this.container.innerHTML = window.gigya.utils.templates.fill(this.templates['container'], { wrapperId: this.container.id + '_wrapper' });
    };
    TfaPlugin.prototype.showProgress = function () {
        if (this.selectedProvider && this.selectedProvider.container) {
            window.gigya.global.showLoader(this.selectedProvider.container, 'gig-tfa-provider-loader', 120);
        }
    };
    TfaPlugin.prototype.hideProgress = function () { };
    TfaPlugin.prototype.removeProvider = function (provider) { };
    TfaPlugin.prototype.getModeByString = function (mode) {
        for (var modeIndex in TfaMode) {
            if (TfaMode[modeIndex] == mode) {
                return TfaMode[TfaMode[modeIndex]];
            }
        }
    };
    TfaPlugin.prototype.updateProviders = function (callback) {
        var _this = this;
        this.showProgress();
        window.gigya.accounts.tfa.getProviders(this.params, {
            callback: function (response) {
                _this.hideProgress();
                _this.inactiveProviders = response['inactiveProviders'] || [];
                _this.activeProviders = response['activeProviders'] || [];
                if (!_this.mode) {
                    if (_this.activeProviders.length == 0) {
                        _this.mode = TfaMode.register;
                    }
                    else {
                        _this.mode = TfaMode.verify;
                    }
                }
                callback();
            },
        });
    };
    TfaPlugin.prototype.initTfa = function (provider, mode, initCallback) {
        var _this = this;
        if (initCallback === void 0) { initCallback = function () { }; }
        window.gigya.accounts.tfa.initTFA(this.params, {
            provider: provider,
            mode: TfaMode[mode],
            callback: function (response) {
                _this.params['gigyaAssertion'] = response['gigyaAssertion'];
                initCallback(response);
            },
        });
    };
    TfaPlugin.prototype.startProviderFlow = function (provider, mode) {
        var _this = this;
        var providerContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-provider-wrapper')[0];
        this.selectedProvider = TfaProviderFactory_1.getTfaProviderInstance(provider.name, this, providerContainer, this.params, mode, function (response, providerAssertion, isTemp) {
            _this.onProviderCallback(response, providerAssertion, isTemp);
        });
        this.selectedProvider.startFlow(provider.capabilities);
    };
    TfaPlugin.prototype.showProvider = function (provider, mode) {
        var _this = this;
        // when TfaProvider is in edit mode, initTFA in edit mode is done from the TfaProvider
        this.initTfa(provider.name, mode == TfaMode.edit ? TfaMode.verify : mode, function (response) {
            if (response['errorCode'] == 0) {
                _this.startProviderFlow(provider, mode);
            }
            else {
                _this.onDone(response);
            }
        });
    };
    TfaPlugin.prototype.onProviderCallback = function (response, providerAssertion, isTemp) {
        var _this = this;
        if (response['errorCode'] == 0) {
            window.gigya.accounts.tfa.finalizeTFA(this.params, {
                providerAssertion: providerAssertion,
                tempDevice: isTemp,
                callback: function (response) {
                    _this.onDone(response);
                },
            });
        }
        else {
            this.onDone(response);
        }
    };
    TfaPlugin.prototype.onDone = function (response) {
        this.container.innerHTML = '';
        window.gigya.events.dispatchForWidget({
            eventName: 'done',
            response: response,
        }, this.params);
    };
    TfaPlugin.prototype.showSelector = function (mode) {
        if (mode === void 0) { mode = this.mode; }
        var supportedProviders = this.getSupportedProviders(mode);
        if (!supportedProviders || supportedProviders.length == 0) {
            return;
        }
        this.showProvider(supportedProviders[0], mode);
        if (supportedProviders.length > 1) {
            this.showProviderSelector(supportedProviders, mode);
        }
    };
    TfaPlugin.prototype.showProviderSelector = function (providers, mode) {
        var _this = this;
        if (mode === void 0) { mode = this.mode; }
        var selectContainer = this.container.querySelector('.gig-tfa-select-provider');
        selectContainer.innerHTML = window.gigya.utils.templates.fill(this.templates['selectProvider'], {
            selectProviderHeader: this.getText('select_provider'),
        });
        var providerSelector = this.container.querySelector('.gig-tfa-selectbox');
        providers
            .map(function (provider) {
            var option = document.createElement('option');
            option.value = provider.name;
            option.text = exports.FriendlyProviderNames[provider.name];
            return option;
        })
            .forEach(function (option) { return providerSelector.add(option); });
        window.gigya.utils.DOM.addEventListener(providerSelector, 'change', function (e) {
            _this.showProgress();
            var selectedProvider = e.target.options[e.target.selectedIndex];
            _this.showProvider({ name: selectedProvider.value }, mode);
        });
    };
    TfaPlugin.prototype.getSupportedProviders = function (mode) {
        var providers = this.getProvidersForMode(mode);
        if (!providers || providers.length == 0) {
            return;
        }
        return providers.filter(function (p) { return TfaProviderFactory_1.isTfaProviderSupported(p.name); });
    };
    TfaPlugin.prototype.getProvidersForMode = function (mode) {
        switch (mode) {
            case TfaMode.register:
            case TfaMode.add:
                return this.inactiveProviders;
            case TfaMode.edit:
                //since emailTfa is not editable and phoneTfa is, I can have those two providers
                // together and so I have to only return the one which is editable
                return this.getEditableProviders();
            case TfaMode.verify:
                return this.activeProviders;
        }
    };
    TfaPlugin.prototype.getEditableProviders = function () {
        var editableProviders = [];
        for (var i = 0; i <= this.activeProviders.length - 1; i++) {
            var isEditable = this.isTfaProviderEditable(this.activeProviders[i].name);
            if (isEditable) {
                editableProviders.push(this.activeProviders[i]);
            }
        }
        return editableProviders;
    };
    TfaPlugin.prototype.isTfaProviderEditable = function (providerToCheck) {
        // go over the list of editable providers
        return constants_1.EditableTfaProvidersTypes[providerToCheck] != undefined;
    };
    TfaPlugin.prototype.onAfterScreenLoad = function (screen, caption) {
        window.gigya.events.dispatchForWidget({
            eventName: 'afterScreenLoad',
            screen: screen,
            caption: caption,
        }, this.params);
    };
    return TfaPlugin;
}());
exports.TfaPlugin = TfaPlugin;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory.ts":
/*!********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var GigyaPhoneProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider.ts");
var LiveLinkPhoneProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider.ts");
var EmailTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider.ts");
var TotpTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider.ts");
var PushTfaProvider_1 = __webpack_require__(/*! ./TfaProviders/PushTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PushTfaProvider.ts");
var tfaProviders = {
    gigyaPhone: GigyaPhoneProvider_1.GigyaPhoneProvider,
    livelink: LiveLinkPhoneProvider_1.LiveLinkPhoneProvider,
    gigyaEmail: EmailTfaProvider_1.EmailTfaProvider,
    gigyaTotp: TotpTfaProvider_1.TotpTfaProvider,
    gigyaPush: PushTfaProvider_1.PushTfaProvider
};
function getTfaProviderInstance(providerName, plugin, container, params, mode, callback) {
    return tfaProviders[providerName] ? new tfaProviders[providerName](plugin, container, params, mode, callback) : null;
}
exports.getTfaProviderInstance = getTfaProviderInstance;
function isTfaProviderSupported(providerName) {
    return tfaProviders[providerName] != null;
}
exports.isTfaProviderSupported = isTfaProviderSupported;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! src/accounts/constants */ "./src/accounts/constants.ts");
var BaseTfaProvider = /** @class */ (function () {
    function BaseTfaProvider(plugin, container, params, mode, callback, restartFlowInterval) {
        if (restartFlowInterval === void 0) { restartFlowInterval = constants_1.gigyaAssertionExpiration; }
        this.plugin = plugin;
        this.container = container;
        this.params = params;
        this.mode = mode;
        this.callback = callback;
        this.restartFlowInterval = restartFlowInterval;
    }
    BaseTfaProvider.prototype.showError = function (error, errorElements) {
        if (errorElements === void 0) { errorElements = []; }
        var errorContainer = this.container.querySelector('div.gig-tfa-error');
        if (errorContainer) {
            errorContainer.innerHTML = error;
            errorContainer.removeAttribute('aria-hidden');
        }
        for (var i = 0; i < errorElements.length; i++) {
            window.gigya.utils.DOM.addClassToElement(errorElements[i], 'gig-tfa-input-error');
        }
    };
    BaseTfaProvider.prototype.hideError = function (errorElements) {
        if (errorElements === void 0) { errorElements = []; }
        var errorContainer = this.container.querySelector('div.gig-tfa-error');
        if (errorContainer) {
            errorContainer.innerHTML = '';
            errorContainer.setAttribute('aria-hidden', 'true');
        }
        for (var i = 0; i < errorElements.length; i++) {
            window.gigya.utils.DOM.removeClassFromElement(errorElements[i], 'gig-tfa-input-error');
        }
    };
    BaseTfaProvider.prototype.showProgress = function () {
        this.plugin.showProgress();
    };
    BaseTfaProvider.prototype.hideProgress = function () {
        this.plugin.hideProgress();
    };
    BaseTfaProvider.prototype.isInDOM = function () {
        return Boolean(this.container && this.container.parentElement && document.getElementById(this.container.parentElement.id));
    };
    BaseTfaProvider.prototype.isActive = function () {
        return !this.isInactive();
    };
    BaseTfaProvider.prototype.isInactive = function () {
        // not in DOM or not this instance
        return !this.isInDOM() ||
            (this.plugin.selectedProvider &&
                this.plugin.selectedProvider !== this);
    };
    return BaseTfaProvider;
}());
exports.BaseTfaProvider = BaseTfaProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider.ts":
/*!*******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts");
var Utils_1 = __webpack_require__(/*! ../helpers/Utils */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts");
var EmailTfaProvider = /** @class */ (function (_super) {
    tslib_1.__extends(EmailTfaProvider, _super);
    function EmailTfaProvider(plugin, container, params, mode, callback, restartFlowInterval) {
        if (restartFlowInterval === void 0) { restartFlowInterval = 60 * 5 * 1000; }
        var _this = _super.call(this, plugin, container, params, mode, callback, restartFlowInterval) || this;
        _this.emails = [];
        return _this;
    }
    EmailTfaProvider.prototype.startFlow = function (capabilities) {
        var _this = this;
        this.showProgress();
        this.getEmails(function () {
            _this.hideProgress();
            _this.showEmailTfaScreen();
        });
    };
    EmailTfaProvider.prototype.getEmails = function (callback) {
        var _this = this;
        window.gigya.accounts.tfa.email.getEmails(this.params, {
            callback: function (response) {
                _this.emails = response.emails;
                callback();
            },
        });
    };
    EmailTfaProvider.prototype.showEmailTfaScreen = function () {
        if (this.emails.length > 0) {
            // right now, gets the first email as the target email
            var email = this.emails[0];
            this.sendVerificationCodeToEmail(email);
            this.showEnterCode(email);
        }
    };
    EmailTfaProvider.prototype.sendVerificationCodeToEmail = function (email) {
        var _this = this;
        this.phvToken = null;
        var verificationParams = {
            emailID: email.id,
            callback: function (response) {
                _this.phvToken = response.phvToken;
            },
        };
        window.gigya.accounts.tfa.email.sendVerificationCode(this.params, verificationParams);
    };
    EmailTfaProvider.prototype.showEnterCode = function (email) {
        var _this = this;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['emailEnterCode'], {
            id: this.container.id,
            headerText: this.plugin.getText('a_verification_code_has_been_sent_to_colon'),
            enter_code: this.plugin.getText('enter_code_colon'),
            remember_this_device: this.plugin.isMobileUI ? this.plugin.getText('remember_this_device') : this.plugin.getText('remember_this_computer'),
            submit: this.plugin.getText('submit'),
        });
        var submitButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-submit')[0];
        var tbCode = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-textbox')[0];
        var cbRemember = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-remember-checkbox')[0];
        var emailText = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-email-text')[0];
        var divError = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-error')[0];
        emailText.innerText = email.obfuscated;
        tbCode.focus();
        Utils_1.bindEnterKey(submitButton);
        window.gigya.utils.DOM.addEventListener(submitButton, 'click', function () {
            _this.sendTfaCode(tbCode, cbRemember.checked);
        });
        this.plugin.onAfterScreenLoad('tfa-enter-code');
    };
    EmailTfaProvider.prototype.sendTfaCode = function (tbCode, isChecked) {
        var _this = this;
        if (this.phvToken) {
            window.gigya.accounts.tfa.email.completeVerification(this.params, {
                phvToken: this.phvToken,
                code: tbCode.value,
                callback: function (response) {
                    if (response['errorCode'] == 0) {
                        _this.hideError([tbCode]);
                        _this.onDone(response, response.providerAssertion, !isChecked);
                    }
                    else {
                        _this.showError(_this.plugin.getText('please_enter_a_valid_code'), [tbCode]);
                    }
                },
            });
        }
    };
    EmailTfaProvider.prototype.onDone = function (response, providerAssertion, isTemp) {
        this.callback(response, providerAssertion, isTemp);
    };
    return EmailTfaProvider;
}(BaseTfaProvider_1.BaseTfaProvider));
exports.EmailTfaProvider = EmailTfaProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider.ts":
/*!*********************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PhoneTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider.ts");
var TfaPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var GigyaPhoneProvider = /** @class */ (function (_super) {
    tslib_1.__extends(GigyaPhoneProvider, _super);
    function GigyaPhoneProvider(plugin, container, params, mode, callback) {
        var _this = _super.call(this, plugin, container, params, mode, callback) || this;
        _this.name = 'gigyaPhone';
        _this.supportedSendMethods = [TfaPlugin_1.VerificationMethod.SMS, TfaPlugin_1.VerificationMethod.VOICE];
        return _this;
    }
    return GigyaPhoneProvider;
}(PhoneTfaProvider_1.PhoneTfaProvider));
exports.GigyaPhoneProvider = GigyaPhoneProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider.ts":
/*!************************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PhoneTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider.ts");
var TfaPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var LiveLinkPhoneProvider = /** @class */ (function (_super) {
    tslib_1.__extends(LiveLinkPhoneProvider, _super);
    function LiveLinkPhoneProvider(plugin, container, params, mode, callback) {
        var _this = _super.call(this, plugin, container, params, mode, callback) || this;
        _this.name = 'livelink';
        _this.supportedSendMethods = [TfaPlugin_1.VerificationMethod.SMS];
        return _this;
    }
    LiveLinkPhoneProvider.prototype.updateNumbers = function (callback) {
        var _this = this;
        _super.prototype.updateNumbers.call(this, function () {
            // livelink supports just sms
            _this.phoneNumbers.forEach(function (phone) { return (phone.lastMethod = 'sms'); });
            callback();
        });
    };
    return LiveLinkPhoneProvider;
}(PhoneTfaProvider_1.PhoneTfaProvider));
exports.LiveLinkPhoneProvider = LiveLinkPhoneProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider.ts":
/*!*******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts");
var TfaPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var Utils_1 = __webpack_require__(/*! ../helpers/Utils */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts");
var PhoneTfaProvider = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneTfaProvider, _super);
    function PhoneTfaProvider(plugin, container, params, mode, callback, restartFlowInterval) {
        var _this = _super.call(this, plugin, container, params, mode, callback, restartFlowInterval) || this;
        _this.phoneNumbers = [];
        _this.supportedSendMethods = [];
        return _this;
    }
    PhoneTfaProvider.prototype.startFlow = function (capabilities) {
        var _this = this;
        if (capabilities) {
            this.supportedSendMethods = capabilities
                .filter(Boolean)
                .map(function (cap) { return cap.toUpperCase(); })
                .map(function (cap) { return TfaPlugin_1.VerificationMethod[cap]; });
        }
        this.updateNumbers(function () {
            _this.show();
        });
    };
    PhoneTfaProvider.prototype.show = function (mode) {
        if (mode === void 0) { mode = this.mode; }
        switch (mode) {
            case TfaPlugin_1.TfaMode.edit:
                this.showEdit();
                break;
            case TfaPlugin_1.TfaMode.add:
            case TfaPlugin_1.TfaMode.register:
                this.showEnterPhoneNumber(mode);
                break;
            case TfaPlugin_1.TfaMode.verify:
                this.showVerify();
                break;
        }
    };
    PhoneTfaProvider.prototype.showEdit = function () {
        var _this = this;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['phoneEdit'], {
            headerText: this.plugin.getText('please_choose_a_number_to_edit_colon'),
        });
        var numbersContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-edit-numbers')[0];
        var arPhonesHtml = [];
        for (var i = 0; i < this.phoneNumbers.length; i++) {
            var phone = this.phoneNumbers[i];
            var phoneHtml = window.gigya.utils.templates.fill(this.plugin.templates['phoneEditEntry'], {
                phoneNumber: phone.plain || phone.obfuscated,
                phoneId: phone.id,
                edit: this.plugin.getText('edit'),
            });
            arPhonesHtml.push(phoneHtml);
        }
        numbersContainer.innerHTML = arPhonesHtml.join('');
        var onEditClick = function (e) {
            _this.showProgress();
            var editLink = (e.srcElement || e.currentTarget || _this);
            var phone = _this.getPhoneById(editLink.getAttribute('data-phoneid'));
            _this.plugin.initTfa(_this.name, TfaPlugin_1.TfaMode.edit, function (response) {
                if (response['errorCode'] == 0) {
                    _this.updateNumbers(function () {
                        _this.hideProgress();
                        _this.showEnterPhoneNumber(TfaPlugin_1.TfaMode.edit, _this.getPhoneById(phone.id));
                    });
                }
                else {
                    _this.showError(response['errorMessage']);
                }
            });
        };
        var editLinks = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-edit-link');
        for (var i = 0; i < editLinks.length; i++) {
            Utils_1.bindEnterKey(editLinks[i]);
            window.gigya.utils.DOM.addEventListener(editLinks[i], 'click', onEditClick);
        }
        this.plugin.onAfterScreenLoad('tfa-edit');
    };
    PhoneTfaProvider.prototype.getPhoneById = function (phoneId) {
        for (var i = 0; i < this.phoneNumbers.length; i++) {
            if (this.phoneNumbers[i].id == phoneId)
                return this.phoneNumbers[i];
        }
    };
    PhoneTfaProvider.prototype.showEnterPhoneNumber = function (mode, phone) {
        var _this = this;
        if (mode === void 0) { mode = TfaPlugin_1.TfaMode.register; }
        var hText = this.plugin.getText('to_keep_your_account_secure_verification_codes_will_be_sent_when_you_login_from_untrusted_devices_dot');
        if (mode == TfaPlugin_1.TfaMode.edit)
            hText = this.plugin.getText('edit_your_phone_number_where_verification_codes_will_be_received_colon');
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['phoneRegister'], {
            id: this.container.id,
            headerText: hText,
            select_your_country: this.plugin.getText('select_your_country_colon'),
            enter_your_phone_number: this.plugin.getText('enter_your_phone_number_colon'),
            get_code_by: this.plugin.getText('get_code_by_colon'),
            text_message: this.plugin.getText('text_message'),
            voice_call: this.plugin.getText('voice_call'),
            send: this.plugin.getText('get_the_code'),
        });
        this.showVerificationMethods();
        var nextButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-next')[0];
        var prefixSelect = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-register-select')[0];
        var tbPhonePrefix = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-prefix')[0];
        var tbPhoneNumber = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-number')[0];
        var typesRadios = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-register-type-radio');
        // prepopulate
        if (phone && phone.plain) {
            for (var i = 0; i < prefixSelect.options.length; i++) {
                var option = prefixSelect.options[i];
                if (phone.plain.indexOf(option.value) === 0) {
                    prefixSelect.selectedIndex = i;
                    tbPhonePrefix.value = option.value;
                    tbPhoneNumber.value = phone.plain.substr(option.value.length);
                    break;
                }
            }
        }
        window.gigya.utils.DOM.addEventListener(prefixSelect, 'change', function () {
            var selectedPrefix = prefixSelect.options[prefixSelect.selectedIndex];
            if (selectedPrefix) {
                tbPhonePrefix.value = selectedPrefix.value;
            }
        });
        Utils_1.bindEnterKey(nextButton);
        window.gigya.utils.DOM.addEventListener(nextButton, 'click', function () {
            var method;
            for (var i = 0; i < typesRadios.length; i++) {
                if (typesRadios[i].checked) {
                    method = typesRadios[i].value;
                    break;
                }
            }
            if (!tbPhonePrefix.value || !tbPhoneNumber.value) {
                return;
            }
            var phoneNumValue = tbPhonePrefix.value;
            // The TFA widget should NOT trim the leading zero when the selected country prefix is Italy (+39)
            if (tbPhonePrefix.value != '39') {
                phoneNumValue += tbPhoneNumber.value.replace(/^0+/, '');
            }
            else {
                phoneNumValue += tbPhoneNumber.value;
            }
            if (_this.mode == TfaPlugin_1.TfaMode.edit && phone.id)
                _this.phoneIdToRemove = phone.id;
            var newPhone = { plain: phoneNumValue };
            _this.sendVerificationCodeToPhone(newPhone, mode, method);
        });
        window.gigya.pluginUtils.DOM.setTextboxSubmitButton(tbPhoneNumber, nextButton);
        Utils_1.createActionInterval(this, function (count) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (count > 1 && tbPhoneNumber && tbPhoneNumber.parentElement) {
                    this.plugin.initTfa(this.name, mode);
                }
                return [2 /*return*/];
            });
        }); }, this.restartFlowInterval, function () { return !tbPhoneNumber || !tbPhoneNumber.parentElement; });
        this.plugin.onAfterScreenLoad('tfa-enter-phone-number');
    };
    PhoneTfaProvider.prototype.getLastPhone = function () {
        return this.phoneNumbers[this.phoneNumbers.length - 1];
    };
    PhoneTfaProvider.prototype.showVerify = function () {
        if (this.phoneNumbers.length > 0) {
            var phone = this.getLastPhone();
            this.sendVerificationCodeToPhone(phone, TfaPlugin_1.TfaMode.verify, phone.lastMethod);
        }
    };
    PhoneTfaProvider.prototype.showEnterCode = function (phone, mode, method) {
        var _this = this;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['phoneEnterCode'], {
            id: this.container.id,
            headerText: method == 'sms'
                ? this.plugin.getText('a_verification_code_has_been_sent_to_your_phone_number_colon')
                : this.plugin.getText('a_phone_call_with_your_verification_code_has_been_placed_to_colon'),
            resend: mode == TfaPlugin_1.TfaMode.verify ? this.plugin.getText("didn't_get_the_code_qm") : this.plugin.getText('change_resend'),
            enter_code: this.plugin.getText('enter_code_colon'),
            remember_this_device: this.plugin.isMobileUI ? this.plugin.getText('remember_this_device') : this.plugin.getText('remember_this_computer'),
            submit: this.plugin.getText('submit'),
        });
        var submitButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-submit')[0];
        var resendLink = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-code-resend')[0];
        var tbCode = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-textbox')[0];
        var cbRemember = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-remember-checkbox')[0];
        var phonenumber = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-code-phonenumber')[0];
        var divError = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-error')[0];
        phonenumber.innerHTML = phone.plain || phone.obfuscated;
        Utils_1.bindEnterKey(tbCode, submitButton);
        Utils_1.bindEnterKey(cbRemember, submitButton);
        Utils_1.bindEnterKey(submitButton);
        window.gigya.utils.DOM.addEventListener(submitButton, 'click', function () {
            _this.sendTfaCode(tbCode, cbRemember);
        });
        Utils_1.bindEnterKey(resendLink);
        var resendAction = function () {
            _this.plugin.initTfa(_this.name, mode, function () {
                if (mode == TfaPlugin_1.TfaMode.register || mode == TfaPlugin_1.TfaMode.add || mode == TfaPlugin_1.TfaMode.edit) {
                    _this.showEnterPhoneNumber(mode, phone);
                }
                else {
                    _this.showResend(mode, phone);
                }
            });
        };
        var resendTimeout = setTimeout(function () {
            if (tbCode && tbCode.parentElement) {
                resendAction();
            }
        }, this.restartFlowInterval);
        window.gigya.utils.DOM.addEventListener(resendLink, 'click', function () {
            resendAction();
            clearTimeout(resendTimeout);
        });
        this.plugin.onAfterScreenLoad('tfa-enter-code');
    };
    PhoneTfaProvider.prototype.sendTfaCode = function (tbCode, cbRemember) {
        var _this = this;
        if (this.phvToken) {
            var submitButton_1 = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-submit')[0];
            window.gigya.utils.DOM.addClassToElement(submitButton_1, 'disabled');
            this.completeVerification(this.phvToken, tbCode.value, function (response) {
                if (response['errorCode'] == 0) {
                    _this.hideError([tbCode]);
                    _this.onDone(response, response['providerAssertion'], !cbRemember.checked);
                }
                else {
                    _this.showError(_this.plugin.getText('please_enter_a_valid_code'), [tbCode]);
                    window.gigya.utils.DOM.removeClassFromElement(submitButton_1, 'disabled');
                }
            });
        }
    };
    PhoneTfaProvider.prototype.showResend = function (mode, phone) {
        var _this = this;
        var headerText = this.supportedSendMethods.length >= 2 ? this.plugin.getText('choose_how_to_receive_the_verification_code_colon') : '';
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['phoneResend'], {
            id: this.container.id,
            headerText: headerText,
            get_code_by: this.plugin.getText('get_code_by_colon'),
            text_message: this.plugin.getText('text_message'),
            voice_call: this.plugin.getText('voice_call'),
            send: this.plugin.getText('get_the_code'),
            your_phone_number: this.plugin.getText('your_phone_number_colon'),
        });
        this.showVerificationMethods();
        var sendButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-send')[0];
        var divPhoneNumber = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-resend-yourphone')[0];
        var typesRadios = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-resend-type-radio');
        for (var i = 0; i < typesRadios.length; i++) {
            if (typesRadios[i].value == phone.lastMethod) {
                typesRadios[i].checked = true;
                break;
            }
        }
        divPhoneNumber.innerHTML = phone.plain || phone.obfuscated;
        Utils_1.bindEnterKey(sendButton);
        window.gigya.utils.DOM.addEventListener(sendButton, 'click', function () {
            var method;
            for (var i = 0; i < typesRadios.length; i++) {
                if (typesRadios[i].checked) {
                    method = typesRadios[i].value;
                    break;
                }
            }
            _this.sendVerificationCodeToPhone(phone, mode, method);
        });
        //gig-tfa-phone-resend-yourphone
        this.plugin.onAfterScreenLoad('tfa-resend');
    };
    PhoneTfaProvider.prototype.showVerificationMethods = function () {
        var verificationMethodSection = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-verification-method');
        if (verificationMethodSection.length && verificationMethodSection[0].style && this.supportedSendMethods.length >= 2) {
            verificationMethodSection[0].style.display = '';
        }
        else {
            var buttonContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-container')[0];
            if (buttonContainer && buttonContainer.style) {
                buttonContainer.style.marginTop = '20px';
            }
        }
    };
    PhoneTfaProvider.prototype.updateNumbers = function (callback) {
        var _this = this;
        if (this.mode == TfaPlugin_1.TfaMode.add || this.mode == TfaPlugin_1.TfaMode.edit || this.mode == TfaPlugin_1.TfaMode.verify) {
            this.showProgress();
            window.gigya.accounts.tfa.phone.getRegisteredPhoneNumbers(this.params, {
                callback: function (response) {
                    _this.hideProgress();
                    _this.phoneNumbers = response['phones'];
                    callback();
                },
            });
        }
        else {
            callback();
        }
    };
    PhoneTfaProvider.prototype.sendVerificationCodeToPhone = function (phone, mode, method) {
        var _this = this;
        if (!phone.plain && !phone.obfuscated) {
            return;
        }
        var verificationParams = {
            method: method || 'sms',
            callback: function (response) {
                _this.phvToken = response['phvToken'];
            },
        };
        if (phone.id) {
            verificationParams['phoneID'] = phone.id;
        }
        else {
            verificationParams['phone'] = phone.plain;
        }
        this.phvToken = null;
        window.gigya.accounts.tfa.phone.sendVerificationCode(this.params, verificationParams);
        this.showEnterCode(phone, mode, method);
    };
    PhoneTfaProvider.prototype.completeVerification = function (phvToken, code, callback) {
        window.gigya.accounts.tfa.phone.completeVerification(this.params, {
            phvToken: phvToken,
            code: code,
            callback: function (response) {
                callback(response);
            },
        });
    };
    PhoneTfaProvider.prototype.onDone = function (response, providerAssertion, isTemp) {
        var _this = this;
        if (this.phoneIdToRemove) {
            window.gigya.accounts.tfa.phone.removePhone(this.params, {
                phoneId: this.phoneIdToRemove,
                callback: function () {
                    _this.callback(response, providerAssertion, isTemp);
                },
            });
        }
        else {
            this.callback(response, providerAssertion, isTemp);
        }
    };
    return PhoneTfaProvider;
}(BaseTfaProvider_1.BaseTfaProvider));
exports.PhoneTfaProvider = PhoneTfaProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PushTfaProvider.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PushTfaProvider.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts");
var TfaPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var BackupCodesManager_1 = __webpack_require__(/*! ../helpers/BackupCodesManager */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/BackupCodesManager.ts");
var Utils_1 = __webpack_require__(/*! ../helpers/Utils */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts");
var PollingLimitMillis = 1000 * 60 * 2; // 2 min
var PollingIntervalMillis = 1000 * 3; // 3 sec
var PushTfaProvider = /** @class */ (function (_super) {
    tslib_1.__extends(PushTfaProvider, _super);
    function PushTfaProvider(plugin, container, params, mode, callback, _backupCodesManager, _pollingLimitMillis, _pollingIntervalMillis) {
        if (_pollingLimitMillis === void 0) { _pollingLimitMillis = PollingLimitMillis; }
        if (_pollingIntervalMillis === void 0) { _pollingIntervalMillis = PollingIntervalMillis; }
        var _this = _super.call(this, plugin, container, params, mode, callback) || this;
        _this._backupCodesManager = _backupCodesManager;
        _this._pollingLimitMillis = _pollingLimitMillis;
        _this._pollingIntervalMillis = _pollingIntervalMillis;
        _this._pollingStartTime = 0;
        _this.resendPushNotificationClickHandler = function () {
            _this.stopPolling();
            _this.plugin.initTfa(_this.name, _this.mode, function (res) {
                if (res['errorCode'] == 0) {
                    _this.plugin.startProviderFlow({ name: _this.name }, _this.mode);
                }
                else { // should not happen
                    _this.onError('initTfa failed', { method: 'resendPushNotificationClickHandler', res: res });
                }
            });
        };
        _this.useBackupCodesClickHandler = function () {
            _this.stopPolling();
            _this.container.innerHTML = window.gigya.utils.templates.fill(_this.plugin.templates['pushVerificationBackupCodes'], {
                id: _this.container.id,
                call_to_action: _this.plugin.getText('enter_backup_code'),
                resendPushNotification: _this.plugin.getText('resend_push_notification'),
                useBackupCode: _this.plugin.getText('cant_access_use_backup_codes'),
                submit: _this.plugin.getText('submit'),
            });
            var submitButton = _this.getSubmitButton();
            var backupCodeInputEl = _this.getBackupCodeInput();
            var resendPushNotification = _this.getResendButton();
            window.gigya.utils.DOM.addEventListener(resendPushNotification, 'click', _this.resendPushNotificationClickHandler);
            window.gigya.utils.DOM.addEventListener(submitButton, 'click', _this.submitBackupCodeClickHandler);
            Utils_1.bindEnterKey(backupCodeInputEl, submitButton);
            Utils_1.bindEnterKey(submitButton);
            backupCodeInputEl.focus();
            _this.plugin.onAfterScreenLoad('tfa-backup-codes');
        };
        _this.submitBackupCodeClickHandler = function () {
            var submitButton = _this.getSubmitButton();
            var backupCodeInputEl = _this.getBackupCodeInput();
            var backupCode = backupCodeInputEl.value;
            if (!backupCode)
                return _this.showError(_this.plugin.getText('please_enter_a_valid_code'), [backupCodeInputEl]);
            window.gigya.utils.DOM.addClassToElement(submitButton, 'disabled');
            window.gigya.accounts.tfa.backupcodes.verify(_this.params, {
                code: backupCode,
                callback: function (response) {
                    _this.hideProgress();
                    if (response['errorCode'] == 0)
                        return _this.onPushVerified(response);
                    window.gigya.utils.DOM.removeClassFromElement(submitButton, 'disabled');
                    var err = _this.getBackupCodeErrorMessage(response);
                    _this.showError(err, [backupCodeInputEl]);
                }
            });
        };
        _this.name = 'gigyaPush';
        if (!_this._backupCodesManager)
            _this._backupCodesManager = new BackupCodesManager_1.BackupCodesManager(_this);
        return _this;
    }
    PushTfaProvider.prototype.checkIsVerified = function () {
        var _this = this;
        window.gigya.accounts.tfa.push.isVerified({
            gigyaAssertion: this.params['gigyaAssertion'],
            regToken: this.params['regToken'],
            callback: function (res) { return _this.onIsVerifiedResponse(res); }
        });
    };
    ;
    PushTfaProvider.prototype.onIsVerifiedResponse = function (res) {
        var _this = this;
        // error (stop polling)
        if (res.errorCode != GSErrors_1.GSErrors.OK)
            return this.onError('failed to check push verification state', { method: 'isVerified', res: res });
        // success
        if (res.providerAssertion)
            return this.onPushVerified(res);
        // keep polling
        setTimeout(function () {
            if (_this.shouldContinuePolling())
                _this.checkIsVerified();
        }, this._pollingIntervalMillis);
    };
    PushTfaProvider.prototype.startPolling = function () {
        this._pollingStartTime = window.gigya.utils.date.now();
        this.checkIsVerified();
    };
    PushTfaProvider.prototype.stopPolling = function () {
        this._pollingStartTime = 0;
    };
    PushTfaProvider.prototype.shouldContinuePolling = function () {
        return !this.shouldStopPolling();
    };
    PushTfaProvider.prototype.shouldStopPolling = function () {
        var now = window.gigya.utils.date.now();
        var pollingLimitReached = now - this._pollingStartTime >= this._pollingLimitMillis;
        return pollingLimitReached || !this.isActive();
    };
    ;
    PushTfaProvider.prototype.onPushVerified = function (response) {
        this.hideError();
        this.callback(response, response['providerAssertion'], true);
    };
    PushTfaProvider.prototype.onError = function (log, details, errMsgKey) {
        if (errMsgKey === void 0) { errMsgKey = 'an_error_has_occurred_please_try_again_later'; }
        if (log)
            window.gigya.logger.error(log, details);
        var err = this.plugin.getText(errMsgKey) || 'Error';
        return this.showError(err);
    };
    PushTfaProvider.prototype.onSendVerificationResponse = function (res) {
        this.hideProgress();
        if (res['errorCode'] == 0) {
            this.showVerifyMode();
            this.startPolling();
        }
        else {
            this.onError('failed to send push tfa verification', { method: 'sendVerification', res: res });
        }
    };
    PushTfaProvider.prototype.startPushVerificationFlow = function () {
        var _this = this;
        this.showProgress();
        window.gigya.accounts.tfa.push.sendVerification({
            gigyaAssertion: this.params['gigyaAssertion'],
            regToken: this.params['regToken'],
            callback: function (res) { return _this.onSendVerificationResponse(res); }
        });
    };
    PushTfaProvider.prototype.showVerifyMode = function () {
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['pushVerificationPhone'], {
            id: this.container.id,
            resendPushNotification: this.plugin.getText('resend_push_notification'),
            call_to_action: this.plugin.getText('push_tfa_call_to_action'),
            useBackupCode: this.plugin.getText('cant_access_use_backup_codes'),
        });
        var useBackupCodes = this.getUseBackupCodesButton();
        var resendPushNotification = this.getResendButton();
        window.gigya.utils.DOM.addEventListener(useBackupCodes, 'click', this.useBackupCodesClickHandler);
        window.gigya.utils.DOM.addEventListener(resendPushNotification, 'click', this.resendPushNotificationClickHandler);
        this.plugin.onAfterScreenLoad('tfa-push-verification');
    };
    PushTfaProvider.prototype.getBackupCodeErrorMessage = function (response) {
        return response['errorDetails'] === 'Wrong verification code'
            ? this.plugin.getText('please_enter_a_valid_code')
            : (this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error');
    };
    PushTfaProvider.prototype.showEditMode = function () {
        this.showBackupCodesEditMode();
    };
    PushTfaProvider.prototype.showBackupCodesEditMode = function (originalBackupCodes) {
        var _this = this;
        if (originalBackupCodes === void 0) { originalBackupCodes = null; }
        Utils_1.createActionInterval(this, function () { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var backupCodes, getBackupCodesResponse, backupCodesTable, printButton, generateNewCodesLink;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        backupCodes = originalBackupCodes;
                        if (!!backupCodes) return [3 /*break*/, 2];
                        this.showProgress();
                        return [4 /*yield*/, this._backupCodesManager.getBackupCodes()];
                    case 1:
                        getBackupCodesResponse = _a.sent();
                        if (getBackupCodesResponse['errorCode'] !== GSErrors_1.GSErrors.OK || !getBackupCodesResponse.backupCodes) {
                            this.container.innerHTML = this.plugin.templates['error'];
                            return [2 /*return*/, this.showError(this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error')];
                        }
                        backupCodes = getBackupCodesResponse.backupCodes;
                        _a.label = 2;
                    case 2:
                        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpBackupCodes'], window.gigya.utils.object.merge([
                            {
                                headerText: this.plugin.getText('print_backup_codes_intro'),
                                print: this.plugin.getText('print'),
                                generateNewCodes: this.plugin.getText('generate_backup_codes'),
                            },
                            this._backupCodesManager.prepareBackupCodesForView(backupCodes),
                        ]));
                        backupCodesTable = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-totp-backup-codes')[0];
                        printButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-print-btn')[0];
                        generateNewCodesLink = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-generate-new-codes')[0];
                        if (window.gigya.localInfo.isNativeMobileApp) {
                            printButton.parentElement.style.display = 'none';
                            generateNewCodesLink.focus();
                        }
                        else {
                            printButton.focus();
                        }
                        window.gigya.utils.DOM.addEventListener(printButton, 'click', function () { return _this._backupCodesManager.printBackupCodes(backupCodesTable.outerHTML); });
                        window.gigya.utils.DOM.addEventListener(generateNewCodesLink, 'click', function () { return _this.showGenerateNewCodesConfirmation(backupCodes); });
                        this.plugin.onAfterScreenLoad('tfa-backup-codes', this.plugin.getText('backup_codes'));
                        return [2 /*return*/];
                }
            });
        }); }, this.restartFlowInterval);
    };
    PushTfaProvider.prototype.showGenerateNewCodesConfirmation = function (originalBackupCodes) {
        var _this = this;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpGenerateNewCodesConfirmation'], {
            resetCodesQuestion: this.plugin.getText('reset_codes_question'),
            yes: this.plugin.getText('yes'),
            cancel: this.plugin.getText('cancel'),
        });
        var confirmButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-confirm')[0];
        var cancelButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-cancel')[0];
        confirmButton.focus();
        window.gigya.utils.DOM.addEventListener(confirmButton, 'click', function () { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var generateBackupCodesResponse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgress();
                        return [4 /*yield*/, this._backupCodesManager.generateNewCodes()];
                    case 1:
                        generateBackupCodesResponse = _a.sent();
                        if (generateBackupCodesResponse['errorCode'] !== GSErrors_1.GSErrors.OK || !generateBackupCodesResponse.backupCodes) {
                            this.container.innerHTML = this.plugin.templates['error'];
                            return [2 /*return*/, this.showError(this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error')];
                        }
                        return [4 /*yield*/, this.showBackupCodesEditMode(generateBackupCodesResponse.backupCodes)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        window.gigya.utils.DOM.addEventListener(cancelButton, 'click', function () { return _this.showBackupCodesEditMode(originalBackupCodes); });
        this.plugin.onAfterScreenLoad('tfa-backup-codes-regenerate', this.plugin.getText('backup_codes'));
    };
    PushTfaProvider.prototype.getSubmitButton = function () {
        return Utils_1.getElementByClassName(this.container, 'gig-tfa-button-submit');
    };
    PushTfaProvider.prototype.getBackupCodeInput = function () {
        return Utils_1.getElementByClassName(this.container, 'gig-tfa-code-textbox');
    };
    PushTfaProvider.prototype.getResendButton = function () {
        return Utils_1.getElementByClassName(this.container, 'gig-tfa-resend-push-notification');
    };
    PushTfaProvider.prototype.getUseBackupCodesButton = function () {
        return Utils_1.getElementByClassName(this.container, 'gig-tfa-use-backup-code');
    };
    PushTfaProvider.prototype.startFlow = function (capabilities) {
        switch (this.mode) {
            case TfaPlugin_1.TfaMode.verify:
                this.startPushVerificationFlow();
                break;
            case TfaPlugin_1.TfaMode.edit:
                this.showEditMode();
                break;
        }
    };
    return PushTfaProvider;
}(BaseTfaProvider_1.BaseTfaProvider));
exports.PushTfaProvider = PushTfaProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts");
var TfaPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var Utils_1 = __webpack_require__(/*! ../helpers/Utils */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts");
var BackupCodesManager_1 = __webpack_require__(/*! ../helpers/BackupCodesManager */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/BackupCodesManager.ts");
var TotpTfaProvider = /** @class */ (function (_super) {
    tslib_1.__extends(TotpTfaProvider, _super);
    function TotpTfaProvider(plugin, container, params, mode, callback, _backupCodesManager) {
        var _this = _super.call(this, plugin, container, params, mode, callback) || this;
        _this._backupCodesManager = _backupCodesManager;
        _this.name = 'gigyaTotp';
        if (!_this._backupCodesManager)
            _this._backupCodesManager = new BackupCodesManager_1.BackupCodesManager(_this);
        return _this;
    }
    TotpTfaProvider.prototype.startFlow = function (capabilities) {
        this.show();
    };
    TotpTfaProvider.prototype.show = function () {
        switch (this.mode) {
            case TfaPlugin_1.TfaMode.register:
                this.showRegisterMode();
                break;
            case TfaPlugin_1.TfaMode.verify:
                this.showVerifyMode();
                break;
            case TfaPlugin_1.TfaMode.edit:
                this.showEditMode();
                break;
        }
    };
    TotpTfaProvider.prototype.showRegisterMode = function () {
        var _this = this;
        Utils_1.createActionInterval(this, function (count) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var afterInitTFA;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.showProgress();
                afterInitTFA = function (initTFAResponse) {
                    if (initTFAResponse && initTFAResponse['errorCode'] !== GSErrors_1.GSErrors.OK)
                        return;
                    window.gigya.accounts.tfa.totp.register(_this.params, {
                        callback: function (response) {
                            if (response['errorCode'] !== GSErrors_1.GSErrors.OK) {
                                _this.container.innerHTML = _this.plugin.templates['error'];
                                return _this.showError(_this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error');
                            }
                            else {
                                _this.renderRegistrationProcess(response['qrCode'], response['sctToken']);
                                if (count > 1) {
                                    _this.showError(_this.plugin.getText('totp_session_expired'));
                                }
                            }
                        },
                    });
                };
                if (count > 1) {
                    this.plugin.initTfa(this.name, TfaPlugin_1.TfaMode.register, afterInitTFA);
                }
                else {
                    // in the first render - initTFA is called by the plugin itself
                    afterInitTFA();
                }
                return [2 /*return*/];
            });
        }); }, this.restartFlowInterval);
    };
    TotpTfaProvider.prototype.showVerifyMode = function (usingBackupCode) {
        var _this = this;
        if (usingBackupCode === void 0) { usingBackupCode = false; }
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpVerify'], {
            id: this.container.id,
            enter_code: usingBackupCode ? this.plugin.getText('enter_backup_code') : this.plugin.getText('enter_totp_code'),
            remember_this_device: this.plugin.isMobileUI ? this.plugin.getText('remember_this_device') : this.plugin.getText('remember_this_computer'),
            submit: this.plugin.getText('submit'),
            useBackupCode: usingBackupCode ? this.plugin.getText('enter_totp_code') : this.plugin.getText('cant_access_use_backup_codes'),
        });
        this.renderVerificationSection(usingBackupCode);
        var useBackupCodeLink = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-use-backup-code');
        window.gigya.utils.DOM.addEventListener(useBackupCodeLink[0], 'click', function () { return _this.showVerifyMode(!usingBackupCode); });
        this.plugin.onAfterScreenLoad('tfa-totp-verification');
    };
    TotpTfaProvider.prototype.showEditMode = function () {
        var _this = this;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpEdit'], {
            headerText: this.plugin.getText('totp_verification_settings_intro'),
            backupCodes: this.plugin.getText('backup_codes'),
            changeDevice: this.plugin.getText('totp_change_device'),
        });
        var changeDeviceButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-change-device')[0];
        var backupCodesButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-backup-codes')[0];
        changeDeviceButton.focus();
        window.gigya.utils.DOM.addEventListener(changeDeviceButton, 'click', function () { return _this.showChangeDeviceScreen(); });
        window.gigya.utils.DOM.addEventListener(backupCodesButton, 'click', function () { return _this.showBackupCodesScreen(); });
        this.plugin.onAfterScreenLoad('tfa-edit', this.plugin.getText('totp_verification_settings'));
    };
    TotpTfaProvider.prototype.showBackupCodesScreen = function (originalBackupCodes) {
        var _this = this;
        if (originalBackupCodes === void 0) { originalBackupCodes = null; }
        Utils_1.createActionInterval(this, function () { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var backupCodes, getBackupCodesResponse, backupCodesTable, printButton, generateNewCodesLink;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        backupCodes = originalBackupCodes;
                        if (!!backupCodes) return [3 /*break*/, 2];
                        this.showProgress();
                        return [4 /*yield*/, this._backupCodesManager.getBackupCodes()];
                    case 1:
                        getBackupCodesResponse = _a.sent();
                        if (getBackupCodesResponse['errorCode'] !== GSErrors_1.GSErrors.OK || !getBackupCodesResponse.backupCodes) {
                            this.container.innerHTML = this.plugin.templates['error'];
                            return [2 /*return*/, this.showError(this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error')];
                        }
                        backupCodes = getBackupCodesResponse.backupCodes;
                        _a.label = 2;
                    case 2:
                        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpBackupCodes'], window.gigya.utils.object.merge([
                            {
                                headerText: this.plugin.getText('print_backup_codes_intro'),
                                print: this.plugin.getText('print'),
                                generateNewCodes: this.plugin.getText('generate_backup_codes'),
                            },
                            this._backupCodesManager.prepareBackupCodesForView(backupCodes),
                        ]));
                        backupCodesTable = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-totp-backup-codes')[0];
                        printButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-print-btn')[0];
                        generateNewCodesLink = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-generate-new-codes')[0];
                        if (window.gigya.localInfo.isNativeMobileApp) {
                            printButton.parentElement.style.display = 'none';
                            generateNewCodesLink.focus();
                        }
                        else {
                            printButton.focus();
                        }
                        window.gigya.utils.DOM.addEventListener(printButton, 'click', function () { return _this._backupCodesManager.printBackupCodes(backupCodesTable.outerHTML); });
                        window.gigya.utils.DOM.addEventListener(generateNewCodesLink, 'click', function () { return _this.showGenerateNewCodesConfirmation(backupCodes); });
                        this.plugin.onAfterScreenLoad('tfa-backup-codes', this.plugin.getText('backup_codes'));
                        return [2 /*return*/];
                }
            });
        }); }, this.restartFlowInterval);
    };
    TotpTfaProvider.prototype.showChangeDeviceScreen = function () {
        var _this = this;
        Utils_1.createActionInterval(this, function (count) { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.showProgress();
                this.plugin.initTfa(this.name, TfaPlugin_1.TfaMode.edit, function (initTFAResponse) {
                    if (initTFAResponse && initTFAResponse['errorCode'] !== GSErrors_1.GSErrors.OK)
                        return;
                    window.gigya.accounts.tfa.totp.register(_this.params, {
                        callback: function (response) {
                            if (response['errorCode'] !== GSErrors_1.GSErrors.OK) {
                                _this.container.innerHTML = _this.plugin.templates['error'];
                                return _this.showError(_this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error');
                            }
                            else {
                                _this.renderRegistrationProcess(response['qrCode'], response['sctToken'], 'tfa-totp-change-device', _this.plugin.getText('totp_change_device'));
                                if (count > 1) {
                                    _this.showError(_this.plugin.getText('totp_session_expired'));
                                }
                            }
                        },
                    });
                });
                return [2 /*return*/];
            });
        }); }, this.restartFlowInterval);
    };
    TotpTfaProvider.prototype.showGenerateNewCodesConfirmation = function (originalBackupCodes) {
        var _this = this;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpGenerateNewCodesConfirmation'], {
            resetCodesQuestion: this.plugin.getText('reset_codes_question'),
            yes: this.plugin.getText('yes'),
            cancel: this.plugin.getText('cancel'),
        });
        var confirmButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-confirm')[0];
        var cancelButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-cancel')[0];
        confirmButton.focus();
        window.gigya.utils.DOM.addEventListener(confirmButton, 'click', function () { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var generateBackupCodesResponse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgress();
                        return [4 /*yield*/, this._backupCodesManager.generateNewCodes()];
                    case 1:
                        generateBackupCodesResponse = _a.sent();
                        if (generateBackupCodesResponse['errorCode'] !== GSErrors_1.GSErrors.OK || !generateBackupCodesResponse.backupCodes) {
                            this.container.innerHTML = this.plugin.templates['error'];
                            return [2 /*return*/, this.showError(this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error')];
                        }
                        return [4 /*yield*/, this.showBackupCodesScreen(generateBackupCodesResponse.backupCodes)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        window.gigya.utils.DOM.addEventListener(cancelButton, 'click', function () { return _this.showBackupCodesScreen(originalBackupCodes); });
        this.plugin.onAfterScreenLoad('tfa-backup-codes-regenerate', this.plugin.getText('backup_codes'));
    };
    TotpTfaProvider.prototype.sendTfaCode = function (tbCode, cbRemember, submitButton, isBackupCode) {
        var _this = this;
        if (isBackupCode === void 0) { isBackupCode = false; }
        return this.verify(tbCode.value, !cbRemember.checked, this.sctToken, isBackupCode)
            .then(function (verifyResponse) {
            _this.hideError([tbCode]);
            return verifyResponse;
        })
            .catch(function (err) {
            _this.showError(err, [tbCode]);
            window.gigya.utils.DOM.removeClassFromElement(submitButton, 'disabled');
        });
    };
    TotpTfaProvider.prototype.verify = function (code, isTemp, sctToken, isBackupCode) {
        var _this = this;
        if (isBackupCode === void 0) { isBackupCode = false; }
        return new gigya.Promise(function (resolve, reject) {
            var localParams = {
                code: code,
                callback: function (response) {
                    _this.hideProgress();
                    if (response['errorCode'] == 0) {
                        _this.callback(response, response['providerAssertion'], isTemp);
                        resolve(true);
                    }
                    else if (response['errorDetails'] === 'Wrong verification code') {
                        reject(_this.plugin.getText('please_enter_a_valid_code'));
                    }
                    else {
                        reject(_this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error');
                    }
                },
            };
            if (sctToken) {
                localParams['sctToken'] = sctToken;
            }
            if (isBackupCode) {
                window.gigya.accounts.tfa.backupcodes.verify(_this.params, localParams);
            }
            else {
                window.gigya.accounts.tfa.totp.verify(_this.params, localParams);
            }
        });
    };
    TotpTfaProvider.prototype.renderRegistrationProcess = function (qrCode, sctToken, screenName, caption) {
        var _this = this;
        if (screenName === void 0) { screenName = 'tfa-totp-registration'; }
        this.sctToken = sctToken;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpRegister'], {
            id: this.container.id,
            step1: this.plugin.getText('step', '${ind}', '1'),
            step2: this.plugin.getText('step', '${ind}', '2'),
            scan_qr_code: this.plugin.getText('scan_qr_code'),
            qrCode: qrCode,
            enter_code: this.plugin.getText('enter_totp_code'),
            remember_this_device: this.plugin.isMobileUI ? this.plugin.getText('remember_this_device') : this.plugin.getText('remember_this_computer'),
            downloadBackupCodesIntro: this.plugin.getText('download_backup_codes'),
            submit: this.plugin.getText('submit'),
        });
        this.renderVerificationSection();
        this.waitForQRImageToRender()
            .then(function () {
            _this.plugin.onAfterScreenLoad(screenName, caption);
        })
            .catch(function (e) {
            window.gigya.logger.warn(e);
            _this.showError(_this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error');
        });
    };
    TotpTfaProvider.prototype.renderVerificationSection = function (usingBackupCode) {
        var _this = this;
        if (usingBackupCode === void 0) { usingBackupCode = false; }
        var submitButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-submit')[0];
        var tbCode = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-textbox')[0];
        var cbRemember = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-remember-checkbox')[0];
        tbCode.focus();
        Utils_1.bindEnterKey(tbCode, submitButton);
        Utils_1.bindEnterKey(cbRemember, submitButton);
        Utils_1.bindEnterKey(submitButton);
        window.gigya.utils.DOM.addEventListener(submitButton, 'click', function () {
            if (!tbCode.value) {
                return _this.showError(_this.plugin.getText('please_enter_a_valid_code'), [tbCode]);
            }
            window.gigya.utils.DOM.addClassToElement(submitButton, 'disabled');
            _this.sendTfaCode(tbCode, cbRemember, submitButton, usingBackupCode);
        });
    };
    TotpTfaProvider.prototype.waitForQRImageToRender = function () {
        var _this = this;
        return new gigya.Promise(function (resolve, reject) {
            var imgWrapper = window.gigya.utils.DOM.getElementsByClass(_this.container, 'gig-tfa-totp-qrcode');
            if (imgWrapper[0]) {
                var img = imgWrapper[0].getElementsByTagName('img');
                if (img[0]) {
                    window.gigya.utils.DOM.addEventListener(img[0], 'load', resolve);
                    window.gigya.utils.DOM.addEventListener(img[0], 'error', reject);
                }
                else
                    reject('TOTP: missing qrCode image element');
            }
            else
                reject('TOTP: missing qrCode image element');
        });
    };
    return TotpTfaProvider;
}(BaseTfaProvider_1.BaseTfaProvider));
exports.TotpTfaProvider = TotpTfaProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/BackupCodesManager.ts":
/*!****************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/BackupCodesManager.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var TfaPlugin_1 = __webpack_require__(/*! ../TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var BackupCodesManager = /** @class */ (function () {
    function BackupCodesManager(_tfaProvider) {
        this._tfaProvider = _tfaProvider;
    }
    BackupCodesManager.prototype.getBackupCodes = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var res;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new gigya.Promise(function (resolve) {
                            _this._tfaProvider.plugin.initTfa(_this._tfaProvider.name, TfaPlugin_1.TfaMode.edit, function (initTFAResponse) {
                                if (initTFAResponse && initTFAResponse['errorCode'] !== GSErrors_1.GSErrors.OK)
                                    return;
                                window.gigya.accounts.tfa.backupcodes.get(_this._tfaProvider.params, {
                                    callback: resolve,
                                });
                            });
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    BackupCodesManager.prototype.generateNewCodes = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new gigya.Promise(function (resolve) {
                            _this._tfaProvider.plugin.initTfa(_this._tfaProvider.name, TfaPlugin_1.TfaMode.edit, function (initTFAResponse) {
                                if (initTFAResponse && initTFAResponse['errorCode'] !== GSErrors_1.GSErrors.OK)
                                    return;
                                window.gigya.accounts.tfa.backupcodes.create(_this._tfaProvider.params, {
                                    callback: resolve,
                                });
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BackupCodesManager.prototype.prepareBackupCodesForView = function (backupCodes) {
        var totalUsedCodes = BackupCodesManager.ExpectedNumberOfBackupCodes - backupCodes.length;
        if (totalUsedCodes > 0) {
            for (var i = 0; i < totalUsedCodes; i++) {
                backupCodes.unshift(this._tfaProvider.plugin.getText('already_used'));
            }
        }
        return backupCodes.reduce(function (acc, code, i) {
            acc["backupCode" + (i + 1)] = code;
            return acc;
        }, {});
    };
    BackupCodesManager.prototype.printBackupCodes = function (html) {
        // https://stackoverflow.com/questions/2255291/print-the-contents-of-a-div
        var printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>' + this._tfaProvider.plugin.getText('backup_codes') + '</title>');
        printWindow.document.write('<style>body{text-align:center;font-family:arial}table{border: 1px dashed;margin:0 auto}td{padding:15px;font-size:20px;}</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<h3>' + this._tfaProvider.plugin.getText('cant_access_use_backup_codes') + '</h3>');
        printWindow.document.write(html);
        printWindow.document.write('<hr>');
        printWindow.document.write('</body></html>');
        printWindow.document.close(); // necessary for IE >= 10
        printWindow.focus(); // necessary for IE >= 10*/
        printWindow.print();
        window.setTimeout(function () { return printWindow.close(); }, 0); // For mobile browsers
        return true;
    };
    BackupCodesManager.ExpectedNumberOfBackupCodes = 9;
    return BackupCodesManager;
}());
exports.BackupCodesManager = BackupCodesManager;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts":
/*!***************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
function getElementByClassName(container, className) {
    return window.gigya.utils.DOM.getElementsByClass(container, className)[0];
}
exports.getElementByClassName = getElementByClassName;
function createActionInterval(tfaProvider, action, interval, cancelCondition) {
    var _this = this;
    if (cancelCondition === void 0) { cancelCondition = function () { return false; }; }
    var count = 1;
    var canContinue = false;
    action(count).then(function () { return canContinue = true; });
    var renderIntervalId = setInterval(function () { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(cancelCondition(count) || !tfaProvider.isActive())) return [3 /*break*/, 1];
                    clearInterval(renderIntervalId);
                    return [3 /*break*/, 3];
                case 1:
                    if (!canContinue) return [3 /*break*/, 3];
                    canContinue = false;
                    return [4 /*yield*/, action(++count)];
                case 2:
                    _a.sent();
                    canContinue = true;
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); }, interval);
}
exports.createActionInterval = createActionInterval;
function bindEnterKey(el1, el2) {
    var listenEl = el1;
    var buttonEl = el2 || el1;
    window.gigya.utils.DOM.addEventListener(listenEl, 'keyup', function (event) {
        // Submit on ENTER if button or listener element.
        // Submit on SPACE if button.
        var keyCode = event.which || event.keyCode;
        if (keyCode === 13 || (keyCode === 32 && !el2)) {
            buttonEl.click();
        }
    });
}
exports.bindEnterKey = bindEnterKey;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/index.ts":
/*!*******************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsTfa = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss.ts");
var Gigya_PluginsTfa_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/Templates */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/Templates.ts");
var Gigya_PluginsTfa_2 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var Gigya_PluginsTfaFactory = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory.ts");
var Gigya_PluginsTfaProviders = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts");
var Gigya_PluginsTfaProviders_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider.ts");
var Gigya_PluginsTfaProviders_2 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider.ts");
var Gigya_PluginsTfaProviders_3 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider.ts");
var Gigya_PluginsTfaProviders_4 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider.ts");
var Gigya_PluginsTfaProviders_5 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.tfa) {
    window.gigya._.plugins.tfa = {};
}
if (!window.gigya._.plugins.tfa.factory) {
    window.gigya._.plugins.tfa.factory = {};
}
if (!window.gigya._.plugins.tfa.providers) {
    window.gigya._.plugins.tfa.providers = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.tfa, Gigya_PluginsTfa, Gigya_PluginsTfa_1, Gigya_PluginsTfa_2);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.tfa.factory, Gigya_PluginsTfaFactory);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.tfa.providers, Gigya_PluginsTfaProviders, Gigya_PluginsTfaProviders_1, Gigya_PluginsTfaProviders_2, Gigya_PluginsTfaProviders_3, Gigya_PluginsTfaProviders_4, Gigya_PluginsTfaProviders_5);
window.gigya._.UI.attachPlugin(Gigya_PluginsTfa_2.TfaPlugin, 'accounts', 'tfa', 'showTfaUI');

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/accounts/constants.ts":
/*!***********************************!*\
  !*** ./src/accounts/constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EditableTfaProvidersTypes;
(function (EditableTfaProvidersTypes) {
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaPhone"] = 0] = "gigyaPhone";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaTotp"] = 1] = "gigyaTotp";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaPush"] = 2] = "gigyaPush";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["livelink"] = 3] = "livelink";
})(EditableTfaProvidersTypes = exports.EditableTfaProvidersTypes || (exports.EditableTfaProvidersTypes = {}));
exports.gigyaAssertionExpiration = 60 * 5 * 1000;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvRGVmYXVsdENzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGVtcGxhdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL0Jhc2VUZmFQcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL0VtYWlsVGZhUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9HaWd5YVBob25lUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9MaXZlTGlua1Bob25lUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9QaG9uZVRmYVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvUHVzaFRmYVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvVG90cFRmYVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9oZWxwZXJzL0JhY2t1cENvZGVzTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvaGVscGVycy9VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FB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LEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQWtKekI7QUFDRCxJQUFrQixjQUtqQjtBQUxELFdBQWtCLGNBQWM7SUFDNUIsbURBQVE7SUFDUiwwRUFBc0I7SUFDdEIsZ0ZBQXlCO0lBQ3pCLG9IQUEyQztBQUMvQyxDQUFDLEVBTGlCLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBSy9CIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLmFjY291bnRzLnBsdWdpbnMudGZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvaW5kZXgudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJleHBvcnQgdmFyIGltZ0Jhc2UgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9jb21tZW50czIvJyk7XHJcbmV4cG9ydCB2YXIgZGVmYXVsdENzcyA9IHtcclxuICAgIHJlc2V0OiBbXHJcbiAgICAgICAgJy5naWctdGZhLWNvbnRhaW5lciAqLCAqLmdpZy10ZmEtY29udGFpbmVyIHsnLFxyXG4gICAgICAgICd3b3JkLXdyYXA6YnJlYWstd29yZDtwYWRkaW5nOjBweDttYXJnaW46MHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7d2lkdGg6YXV0bztmbG9hdDpub25lOycsXHJcbiAgICAgICAgJ2ZvbnQtZmFtaWx5OmFyaWFsO2NvbG9yOiMzMzMzMzM7cG9zaXRpb246c3RhdGljO3RleHQtYWxpZ246bGVmdDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTstbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O2JveC1zaXppbmc6IGJvcmRlci1ib3g7fScsXHJcbiAgICBdLmpvaW4oJycpLFxyXG4gICAgcmVzZXRSdGw6ICcuZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciAqLCAqLmdpZy1jb21tZW50cy1jb250YWluZXIge2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodDt9JyxcclxuICAgIGdsb2JhbDogW1xyXG4gICAgICAgICcuZ2lnLXRmYS1jb250YWluZXIge30nLFxyXG4gICAgICAgICcuZ2lnLXRmYS1oZWFkZXItdGV4dCB7bWFyZ2luLWJvdHRvbTozMHB4O30nLFxyXG4gICAgICAgICcuZ2lnLXRmYS1idXR0b24uZ2lnLXRmYS1idXR0b24tc3VibWl0LmRpc2FibGVkIHtwb2ludGVyLWV2ZW50czpub25lOyBvcGFjaXR5OjAuMzt9JyxcclxuICAgICAgICAnLmdpZy10ZmEtY29udGFpbmVyIGlucHV0OmZvY3VzIHtib3gtc2hhZG93OjAgMCAzcHggIzUwQkFERSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSkgaW5zZXR9JyxcclxuICAgICAgICAnLmdpZy10ZmEtY29udGFpbmVyIGlucHV0OmZvY3VzIHtib3JkZXI6IDFweCBzb2xpZCAjODdCOUVBOyBvdXRsaW5lOiBtZWRpdW0gbm9uZX0nLFxyXG4gICAgICAgICcuZ2lnLXRmYS1jb250YWluZXIgaW5wdXQsIC5naWctdGZhLWNvbnRhaW5lciBzZWxlY3Qge2JvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7Ym9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O21hcmdpbjogNnB4IDA7cGFkZGluZzogNXB4O30nLFxyXG4gICAgICAgICcuZ2lnLXRmYS1jb250YWluZXIgbGFiZWwge21hcmdpbi1yaWdodDoxNXB4O30nLFxyXG4gICAgICAgICdpbnB1dC5naWctdGZhLXBob25lLXByZWZpeCB7ZGlzcGxheTpub25lO30nLCAvLyBwaG9uZS1wcmVmaXggZmllbGQgc2hvdWxkIG5vdCBkaXNwbGF5IGFueW1vcmVcclxuICAgICAgICAnLmdpZy10ZmEtcGhvbmUtbnVtYmVyIHt3aWR0aDogMTAwJX0nLFxyXG4gICAgICAgICcuZ2lnLXRmYS1sYWJlbCB7Zm9udC13ZWlnaHQ6Ym9sZDttYXJnaW46MTBweCAwO30nLFxyXG4gICAgICAgICcuZ2lnLXRmYS1waG9uZS1yZWdpc3Rlci1zZWxlY3QsIC5naWctdGZhLXNlbGVjdGJveCB7d2lkdGg6IDEwMCV9JyxcclxuICAgICAgICAnLmdpZy10ZmEtcGhvbmUtcmVnaXN0ZXItdHlwZS1sYWJlbCB7bWFyZ2luOiAxNXB4IDAgM3B4fScsXHJcbiAgICAgICAgJy5naWctdGZhLXBob25lLXJlZ2lzdGVyLXR5cGUgKiB7bWFyZ2luOjA7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO21hcmdpbjowO30nLFxyXG4gICAgICAgICcuZ2lnLXRmYS1waG9uZS1yZWdpc3Rlci10eXBlIHNwYW4ge2xpbmUtaGVpZ2h0OiAxNXB4O30nLFxyXG4gICAgICAgICcuZ2lnLXRmYS1idXR0b24tY29udGFpbmVyIHt0ZXh0LWFsaWduOnJpZ2h0O21hcmdpbjoxNXB4IDAgMDt9JyxcclxuXHJcbiAgICAgICAgJy5naWctdGZhLWJ1dHRvbiB7JyxcclxuICAgICAgICAnZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjogY2VudGVyO2JvcmRlcjogMXB4IHNvbGlkICNDRUNFQ0U7Y3Vyc29yOiBwb2ludGVyO3BhZGRpbmc6IDAgMTJweDsnLFxyXG4gICAgICAgICdjb2xvcjogIzMzMzMzMztmb250LXdlaWdodDogYm9sZDtib3JkZXItcmFkaXVzOiA0cHg7bGluZS1oZWlnaHQ6IDI2cHg7Z3JhZGllbnQoI0ZGRkZGRiwjRjJGMkYyKX0nLFxyXG5cclxuICAgICAgICAnLmdpZy10ZmEtYnV0dG9uOmhvdmVyIHtncmFkaWVudCgjRjJGMkYyLCNGRkZGRkYpfScsXHJcblxyXG4gICAgICAgICcuZ2lnLXRmYS1lcnJvciB7Y29sb3I6I2RkNGIzOTtsaW5lLWhlaWdodDoxNHB4O2ZvbnQtc2l6ZToxMXB4O21hcmdpbjoxMHB4IDAhaW1wb3J0YW50fScsXHJcblxyXG4gICAgICAgICcuZ2lnLXRmYS1jb2RlLXRleHRib3gge3dpZHRoOiAxMDAlOyBtYXJnaW46IDZweCAwIWltcG9ydGFudH0nLFxyXG4gICAgICAgICdpbnB1dC5naWctdGZhLWlucHV0LWVycm9yIHtib3JkZXI6IDFweCBzb2xpZCAjZGQ0YjM5IWltcG9ydGFudH0nLFxyXG5cclxuICAgICAgICAnLmdpZy10ZmEtcGhvbmUtY29kZS1yZXNlbmQge2NvbG9yOiMyQjhEREQ7Y3Vyc29yOnBvaW50ZXI7fScsXHJcbiAgICAgICAgJy5naWctdGZhLXBob25lLWNvZGUtcGhvbmVudW1iZXIge30nLFxyXG4gICAgICAgICdpbnB1dC5naWctdGZhLWNvZGUtcmVtZW1iZXItY2hlY2tib3gge21hcmdpbjogMHB4IDVweCAwIDAhaW1wb3J0YW50O3BhZGRpbmc6IDA7dmVydGljYWwtYWxpZ246IHRvcDt9JyxcclxuICAgICAgICAnbGFiZWwuZ2lnLXRmYS1jb2RlLXJlbWVtYmVyLWxhYmVsIHtkaXNwbGF5OmJsb2NrOyBtYXJnaW46IDEwcHggMCAxOHB4IWltcG9ydGFudH0nLFxyXG5cclxuICAgICAgICAnLmdpZy10ZmEtcGhvbmUtcmVzZW5kLXlvdXJwaG9uZSB7Zm9udC13ZWlnaHQ6bm9ybWFsfScsXHJcblxyXG4gICAgICAgICcuZ2lnLXRmYS1waG9uZS1lZGl0LWxpbmsge21hcmdpbi1sZWZ0OjI1cHg7O2NvbG9yOiMyQjhEREQ7Y3Vyc29yOnBvaW50ZXJ9JyxcclxuICAgICAgICAnLmdpZy10ZmEtc2VsZWN0LXdyYXBwZXIge3BhZGRpbmc6MTBweCAwO21hcmdpbi1ib3R0b206IDE2cHg7Ym9yZGVyLWJvdHRvbToxcHggI2UwZGRkZCBzb2xpZH0nLFxyXG4gICAgICAgICcuZ2lnLXRmYS10b3RwLXN0ZXAtbGFiZWwge2NvbG9yOiAjMTE1OThiO2ZvbnQtc2l6ZToxOHB4IWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbToxMHB4fScsXHJcbiAgICAgICAgJy5naWctdGZhLXRvdHAtcXJjb2RlIHt0ZXh0LWFsaWduOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMTZweDsgYm9yZGVyLWJvdHRvbToxcHggI2UwZGRkZCBzb2xpZH0nLFxyXG4gICAgICAgICcuZ2lnLXRmYS1ib3R0b20taW50cm8ge21hcmdpbi1ib3R0b206IDM1cHghaW1wb3J0YW50O21hcmdpbi10b3A6IDE1cHghaW1wb3J0YW50fScsXHJcbiAgICAgICAgJ2Rpdi5naWctdGZhLXRvdHAtaGVhZGVyLXRleHQge2ZvbnQtc2l6ZTogMTVweDtjb2xvcjogIzRlNTE1ZX0nLFxyXG4gICAgICAgICdkaXYuZ2lnLXRmYS1idXR0b24tY29udGFpbmVyLmdpZy10ZmEtYnV0dG9uLWNvbnRhaW5lci10b3AtbWFyZ2luIHttYXJnaW4tdG9wOjM1cHghaW1wb3J0YW50fScsXHJcbiAgICAgICAgJ2Rpdi5naWctdGZhLWJ1dHRvbi1jb250YWluZXIuZ2lnLXRmYS1idXR0b24tY29udGFpbmVyLXJvdz4uZ2lnLXRmYS1idXR0b24ge3dpZHRoOiA0OSUhaW1wb3J0YW50O30nLFxyXG4gICAgICAgICdkaXYuZ2lnLXRmYS1idXR0b24tY29udGFpbmVyLmdpZy10ZmEtYnV0dG9uLWNvbnRhaW5lci1yb3cgZGl2Omxhc3QtY2hpbGQge2Zsb2F0OmxlZnQhaW1wb3J0YW50fScsXHJcbiAgICAgICAgJ3RhYmxlLmdpZy10ZmEtdG90cC1iYWNrdXAtY29kZXMge3dpZHRoOiAxMDAlO2JvcmRlcjoxcHggYmxhY2sgZGFzaGVkO21hcmdpbjoyNXB4IDB9JyxcclxuICAgICAgICAndGFibGUuZ2lnLXRmYS10b3RwLWJhY2t1cC1jb2RlcyB0ZCB7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6MTJweH0nLFxyXG4gICAgICAgICdkaXYuZ2lnLXRmYS1yb3d7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjsgcGFkZGluZzoxNXB4IDB9JyxcclxuICAgICAgICAnLmdpZy1iYWNrdXAtY29kZXMtcHJpbnQtYnRue21hcmdpbi1ib3R0b206IDEwcHghaW1wb3J0YW50O30nLFxyXG4gICAgICAgICdhLmdpZy10ZmEtbGluayB7Y29sb3I6IzEzNzFiOTt0ZXh0LWRlY29yYXRpb246bm9uZTtmb250LXNpemU6MTVweDttYXJnaW46MCFpbXBvcnRhbnQ7Y3Vyc29yOnBvaW50ZXJ9JyxcclxuICAgIF0uam9pbignJyksXHJcbiAgICBtb2JpbGU6IFsnLmdpZy10ZmEtY29udGFpbmVyICosICouZ2lnLXRmYS1jb250YWluZXIge2ZvbnQtc2l6ZToxNnB4Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDpub25lO30nXS5qb2luKCcnKSxcclxuICAgIG5vbk1vYmlsZTogWycuZ2lnLXRmYS1jb250YWluZXIgKiwgKi5naWctdGZhLWNvbnRhaW5lciB7Zm9udC1zaXplOjEycHh9J10uam9pbignJyksXHJcbiAgICBydGw6IFtdLmpvaW4oJycpLFxyXG59O1xyXG4iLCIvLyAkaWQtIGlzIHRoZSBcImlkXCIgcGFzc2VkIHdoZW4gY2FsbGluZyB1dGlscy50ZW1wbGF0ZXMuZmlsbCB3aXRoIHNwZWNpZmljIHN1ZmZpeC4gaS5lLiAkaWQtc29tZS1lbC1kZXNjcmlwdGlvblxyXG5leHBvcnQgdmFyIGRlZmF1bHRUZW1wbGF0ZXMgPSB7XHJcbiAgICBjb250YWluZXI6IFsnPGRpdiBjbGFzcz1cImdpZy10ZmEtc2VsZWN0LXByb3ZpZGVyXCI+PC9kaXY+JywgJzxkaXYgY2xhc3M9XCJnaWctdGZhLXByb3ZpZGVyLXdyYXBwZXJcIiBpZD1cIiR3cmFwcGVySWRcIj48L2Rpdj4nXS5qb2luKCcnKSxcclxuICAgIHNlbGVjdFByb3ZpZGVyOiBbXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLXNlbGVjdC13cmFwcGVyXCI+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWxcIiBpZD1cInNlbGVjdFByb3ZpZGVySGVhZGVyXCI+JHNlbGVjdFByb3ZpZGVySGVhZGVyPC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtc2VsZWN0XCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbGxlZGJ5PVwic2VsZWN0UHJvdmlkZXJIZWFkZXJcIj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1zZWxlY3QtdGV4dFwiPjwvZGl2PicsXHJcbiAgICAgICAgJzxzZWxlY3QgY2xhc3M9XCJnaWctdGZhLXNlbGVjdGJveFwiIHRhYmluZGV4PVwiMFwiPjwvc2VsZWN0PicsXHJcbiAgICAgICAgJzwvZGl2PicsXHJcbiAgICBdLmpvaW4oJycpLFxyXG4gICAgcHJvZ3Jlc3M6ICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1wcm9ncmVzc1wiPjwvZGl2PicsXHJcbiAgICBlcnJvcjogWyc8ZGl2PicsICc8ZGl2IHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZ2lnLXRmYS1lcnJvclwiPjwvZGl2PicsICc8L2Rpdj4nXS5qb2luKCcnKSxcclxuICAgIHBob25lUmVnaXN0ZXI6IFtcclxuICAgICAgICAnPGRpdiBpZD1cIiRpZC1oZWFkZXJcIiBjbGFzcz1cImdpZy10ZmEtaGVhZGVyLXRleHRcIj4kaGVhZGVyVGV4dDwvZGl2PicsXHJcblxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1sYWJlbFwiIGlkPVwiJGlkLXNlbGVjdC15b3VyLWNvdW50cnlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4kc2VsZWN0X3lvdXJfY291bnRyeTwvZGl2PicsXHJcbiAgICAgICAgJzxzZWxlY3QgY2xhc3M9XCJnaWctdGZhLXBob25lLXJlZ2lzdGVyLXNlbGVjdFwiIHdpZHRoPVwiMjQ4XCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiJGlkLWhlYWRlciAkaWQtc2VsZWN0LXlvdXItY291bnRyeVwiPjxvcHRpb24gdmFsdWU9XCIwXCI+LSBTZWxlY3QgLTwvb3B0aW9uPjxvcHRncm91cCBsYWJlbD1cIlwiPjxvcHRpb24gdmFsdWU9XCIxXCIgaXNVUz1cInRydWVcIj5Vbml0ZWQgU3RhdGVzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjFcIj5DYW5hZGE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDRcIj5Vbml0ZWQgS2luZ2RvbTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2MVwiPkF1c3RyYWxpYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4MVwiPkphcGFuPC9vcHRpb24+PC9vcHRncm91cD48b3B0Z3JvdXAgbGFiZWw9XCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIj48b3B0aW9uIHZhbHVlPVwiOTNcIj5BZmdoYW5pc3Rhbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNTVcIj5BbGJhbmlhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIxM1wiPkFsZ2VyaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzc2XCI+QW5kb3JyYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNDRcIj5BbmdvbGE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiODA5XCI+QW5ndWlsbGE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjY4XCI+QW50aWd1YSBhbmQgQmFyYnVkYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NFwiPkFyZ2VudGluYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNzRcIj5Bcm1lbmlhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI5N1wiPkFydWJhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjYxXCI+QXVzdHJhbGlhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQzXCI+QXVzdHJpYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5OTRcIj5BemVyYmFpamFuPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjk3M1wiPkJhaHJhaW48L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiODgwXCI+QmFuZ2xhZGVzaDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNDZcIj5CYXJiYWRvczwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNzVcIj5CZWxhcnVzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMyXCI+QmVsZ2l1bTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MDFcIj5CZWxpemU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjI5XCI+QmVuaW48L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiODA5XCI+QmVybXVkYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5NzVcIj5CaHV0YW48L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTkxXCI+Qm9saXZpYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzODdcIj5Cb3NuaWEgQW5kIEhlcnplZ292aW5hPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI2N1wiPkJvdHN3YW5hPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU1XCI+QnJhemlsPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI0NlwiPkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2NzNcIj5CcnVuZWk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzU5XCI+QnVsZ2FyaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjI2XCI+QnVya2luYSBGYXNvPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI1N1wiPkJ1cnVuZGk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiODU1XCI+Q2FtYm9kaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjM3XCI+Q2FtZXJvb248L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMVwiPkNhbmFkYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMzhcIj5DYXBlIFZlcmRlPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM0NVwiPkNheW1hbiBJc2xhbmRzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzNVwiPkNoYWQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTZcIj5DaGlsZTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4NlwiPkNoaW5hPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU3XCI+Q29sb21iaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjQyXCI+Q29uZ288L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjQzXCI+Q29uZ28sIFRoZSBEZW1vY3JhdGljIFJlcHVibGljIE9mIFRoZTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MDZcIj5Db3N0YSBSaWNhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIyNVwiPkNvdGUgZFxcJ0l2b2lyZTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzODVcIj5Dcm9hdGlhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUzXCI+Q3ViYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNTdcIj5DeXBydXM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDIwXCI+Q3plY2ggUmVwdWJsaWM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDVcIj5EZW5tYXJrPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI1M1wiPkRqaWJvdXRpPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjc2N1wiPkRvbWluaWNhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjgwOVwiPkRvbWluaWNhbiBSZXB1YmxpYzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2NzBcIj5FYXN0IFRpbW9yPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU5M1wiPkVjdWFkb3I8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjBcIj5FZ3lwdDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MDNcIj5FbCBTYWx2YWRvcjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNDBcIj5FcXVhdG9yaWFsIEd1aW5lYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNzJcIj5Fc3RvbmlhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUwMFwiPkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOThcIj5GYXJvZSBJc2xhbmRzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjY3OVwiPkZpamk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzU4XCI+RmlubGFuZDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzM1wiPkZyYW5jZTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OTRcIj5GcmVuY2ggR3VpYW5hPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjY4OVwiPkZyZW5jaCBQb2x5bmVzaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjQxXCI+R2Fib248L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjIwXCI+R2FtYmlhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjk5NVwiPkdlb3JnaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDlcIj5HZXJtYW55PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzM1wiPkdoYW5hPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM1MFwiPkdpYnJhbHRhcjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMFwiPkdyZWVjZTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOTlcIj5HcmVlbmxhbmQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDczXCI+R3JlbmFkYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OTBcIj5HdWFkZWxvdXBlPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUwMlwiPkd1YXRlbWFsYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMjc2N1wiPkd1ZXJuc2V5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU5MlwiPkd1eWFuYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MDlcIj5IYWl0aTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MDRcIj5Ib25kdXJhczwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4NTJcIj5Ib25nIEtvbmc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzZcIj5IdW5nYXJ5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM1NFwiPkljZWxhbmQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOTFcIj5JbmRpYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2MlwiPkluZG9uZXNpYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5OFwiPklyYW48L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOTY0XCI+SXJhcTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNTNcIj5JcmVsYW5kPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ0XCI+SXNsZSBPZiBNYW48L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOTcyXCI+SXNyYWVsPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM5XCI+SXRhbHk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiODc2XCI+SmFtYWljYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4MVwiPkphcGFuPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ0XCI+SmVyc2V5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjk2MlwiPkpvcmRhbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+S2F6YWtoc3Rhbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNTRcIj5LZW55YTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4MlwiPktvcmVhLCBTb3V0aDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5NjVcIj5LdXdhaXQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOTk2XCI+S3lyZ3l6c3Rhbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNzFcIj5MYXR2aWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOTYxXCI+TGViYW5vbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNjZcIj5MZXNvdGhvPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzMVwiPkxpYmVyaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjE4XCI+TGlieWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDIzXCI+TGllY2h0ZW5zdGVpbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNzBcIj5MaXRodWFuaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzUyXCI+THV4ZW1ib3VyZzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4NTNcIj5NYWNhbzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzODlcIj5NYWNlZG9uaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjYxXCI+TWFkYWdhc2Nhcjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNjVcIj5NYWxhd2k8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNjBcIj5NYWxheXNpYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5NjBcIj5NYWxkaXZlczwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMjNcIj5NYWxpPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM1NlwiPk1hbHRhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU5NlwiPk1hcnRpbmlxdWUgPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIyMlwiPk1hdXJpdGFuaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjMwXCI+TWF1cml0aXVzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUyXCI+TWV4aWNvPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM3M1wiPk1vbGRvdmE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzNcIj5Nb25hY288L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOTc2XCI+TW9uZ29saWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzgyXCI+TW9udGVuZWdybzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NzNcIj5Nb250c2VycmF0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIxMlwiPk1vcm9jY28gPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI1OFwiPk1vemFtYmlxdWU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOTVcIj5NeWFubWFyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI2NFwiPk5hbWliaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOTc3XCI+TmVwYWw8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzFcIj5OZXRoZXJsYW5kczwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OTlcIj5OZXRoZXJsYW5kcyBBbnRpbGxlczwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2ODdcIj5OZXcgQ2FsZWRvbmlhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjY0XCI+TmV3IFplYWxhbmQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTA1XCI+TmljYXJhZ3VhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIyN1wiPk5pZ2VyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzNFwiPk5pZ2VyaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTY3MFwiPk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kczwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0N1wiPk5vcndheTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5NjhcIj5PbWFuPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjkyXCI+UGFraXN0YW48L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOTcwXCI+UGFsZXN0aW5lPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUwN1wiPlBhbmFtYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OTVcIj5QYXJhZ3VheTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MVwiPlBlcnU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNjNcIj5QaGlsaXBwaW5lczwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0OFwiPlBvbGFuZDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNTFcIj5Qb3J0dWdhbCA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTc4N1wiPlB1ZXJ0byBSaWNvPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjk3NFwiPlFhdGFyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI2MlwiPlJldW5pb248L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDBcIj5Sb21hbmlhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjdcIj5SdXNzaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjUwXCI+UndhbmRhIDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxODY5XCI+U2FpbnQgS2l0dHMgYW5kIE5ldmlzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3NThcIj5TYWludCBMdWNpYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNzg0XCI+U2FpbnQgVmluY2VudDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5NjZcIj5TYXVkaSBBcmFiaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjIxXCI+U2VuZWdhbDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzODFcIj5TZXJiaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjQ4XCI+U2V5Y2hlbGxlczwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMzJcIj5TaWVycmEgTGVvbmU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNjVcIj5TaW5nYXBvcmU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDIxXCI+U2xvdmFraWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzg2XCI+U2xvdmVuaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjUyXCI+U29tYWxpYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyN1wiPlNvdXRoIEFmcmljYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNFwiPlNwYWluPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjk0XCI+U3JpIExhbmthPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI0OVwiPlN1ZGFuPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU5N1wiPlN1cmluYW1lPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI2OFwiPlN3YXppbGFuZDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NlwiPlN3ZWRlbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MVwiPlN3aXR6ZXJsYW5kPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjk2M1wiPlN5cmlhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjg4NlwiPlRhaXdhbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+VGFqaWtpc3Rhbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNTVcIj5UYW56YW5pYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2NlwiPlRoYWlsYW5kPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIyOFwiPlRvZ288L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNjc2XCI+VG9uZ2E8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTg2OFwiPlRyaW5pZGFkIEFuZCBUb2JhZ288L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjE2XCI+VHVuaXNpYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5MFwiPlR1cmtleTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5OTNcIj5UdXJrbWVuaXN0YW48L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjU2XCI+VWdhbmRhPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM4MFwiPlVrcmFpbmU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOTcxXCI+VW5pdGVkIEFyYWIgRW1pcmF0ZXM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDRcIj5Vbml0ZWQgS2luZ2RvbTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCIgaXNVUz1cInRydWVcIj5Vbml0ZWQgU3RhdGVzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU5OFwiPlVydWd1YXk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiN1wiPlV6YmVraXN0YW48L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNjc4XCI+VmFudWF0dTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OFwiPlZlbmV6dWVsYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4NFwiPlZpZXQgTmFtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEyODRcIj5WaXJnaW4gSXNsYW5kcywgQnJpdGlzaDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2ODFcIj5XYWxsaXMgQW5kIEZ1dHVuYTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzODFcIj5ZZW1lbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNjBcIj5aYW1iaWE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjYzXCI+WmltYmFid2U8L29wdGlvbj48L29wdGdyb3VwPjwvc2VsZWN0PicsXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWxhYmVsXCIgaWQ9XCIkaWQtcGhvbmUtbnVtYmVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JGVudGVyX3lvdXJfcGhvbmVfbnVtYmVyPC9kaXY+JyxcclxuICAgICAgICAnPGlucHV0IGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1wcmVmaXhcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkPVwiZGlzYWJsZWRcIi8+JyxcclxuICAgICAgICAnPGlucHV0IGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1udW1iZXJcIiB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWxsZWRieT1cIiRpZC1waG9uZS1udW1iZXJcIiAvPicsXHJcblxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS12ZXJpZmljYXRpb24tbWV0aG9kXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1sYWJlbCBnaWctdGZhLXBob25lLXJlZ2lzdGVyLXR5cGUtbGFiZWxcIiBpZD1cImdpZy10ZmEtcGhvbmUtZ2V0LWNvZGUtYnlcIj4kZ2V0X2NvZGVfYnk8L2Rpdj4nLFxyXG4gICAgICAgICc8bGFiZWwgY2xhc3M9XCJnaWctdGZhLXBob25lLXJlZ2lzdGVyLXR5cGUgZ2lnLXRmYS1waG9uZS1yZWdpc3Rlci10eXBlLXNtc1wiIGZvcj1cIiRpZC1nZXQtc21zLWNvZGVcIj4nLFxyXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJnaWctdGZhLXBob25lLXJlZ2lzdGVyLXR5cGUtcmFkaW9cIiBuYW1lPVwicGhvbmVNZXRob2RcIiBhcmlhLWxhYmVsbGVkYnk9XCJnaWctdGZhLXBob25lLWdldC1jb2RlLWJ5IHJiLXNtcy1sYWJlbFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwic21zXCIgaWQ9XCIkaWQtZ2V0LXNtcy1jb2RlXCIgY2hlY2tlZCAvPiA8c3BhbiBpZD1cInJiLXNtcy1sYWJlbFwiPiR0ZXh0X21lc3NhZ2U8L3NwYW4+PC9sYWJlbD4nLFxyXG4gICAgICAgICc8bGFiZWwgY2xhc3M9XCJnaWctdGZhLXBob25lLXJlZ2lzdGVyLXR5cGUgZ2lnLXRmYS1waG9uZS1yZWdpc3Rlci10eXBlLXZvaWNlLWNhbGxcIiAgZm9yPVwiJGlkLWdldC12b2ljZS1jb2RlXCI+JyxcclxuICAgICAgICAnPGlucHV0IGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1yZWdpc3Rlci10eXBlLXJhZGlvXCIgbmFtZT1cInBob25lTWV0aG9kXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJ2b2ljZVwiIGlkPVwiJGlkLWdldC12b2ljZS1jb2RlXCIgLz4gPHNwYW4+JHZvaWNlX2NhbGw8L3NwYW4+PC9sYWJlbD4nLFxyXG4gICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1lcnJvclwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIHJvbGU9XCJhbGVydFwiPjwvZGl2PicsXHJcblxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLW5leHRcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCI+JHNlbmQ8L2Rpdj48L2Rpdj4nLFxyXG4gICAgXS5qb2luKCcnKSxcclxuICAgIHBob25lRW50ZXJDb2RlOiBbXHJcbiAgICAgICAgJzxkaXYgaWQ9XCIkaWQtaGVhZGVyLXRleHRcIiB0YWJpbmRleD1cIi0xXCIgIGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1jb2RlLWhlYWRlci10ZXh0XCI+JGhlYWRlclRleHQ8L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGlkPVwiJGlkLXN1YnRleHRcIiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJnaWctdGZhLXBob25lLWNvZGUtaGVhZGVyLXN1YnRleHRcIj48c3BhbiBjbGFzcz1cImdpZy10ZmEtcGhvbmUtY29kZS1waG9uZW51bWJlclwiPjwvc3Bhbj4mbmJzcDsoPHNwYW4gY2xhc3M9XCJnaWctdGZhLXBob25lLWNvZGUtcmVzZW5kXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPiRyZXNlbmQ8L3NwYW4+KTwvZGl2PicsXHJcblxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1sYWJlbFwiIGlkPVwiJGlkLWVudGVyLWNvZGVcIiB0YWJpbmRleD1cIi0xXCI+JGVudGVyX2NvZGU8L2Rpdj4nLFxyXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJnaWctdGZhLWNvZGUtdGV4dGJveFwiIHR5cGU9XCJ0ZXh0XCIgdGFiaW5kZXg9XCIwXCIvPicsXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWVycm9yXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIgcm9sZT1cImFsZXJ0XCI+PC9kaXY+JyxcclxuXHJcbiAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdpZy10ZmEtY29kZS1yZW1lbWJlci1sYWJlbFwiIHRhYmluZGV4PVwiLTFcIiBmb3I9XCIkaWQtcmVtZW1iZXJcIj48aW5wdXQgY2xhc3M9XCJnaWctdGZhLWNvZGUtcmVtZW1iZXItY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiB0YWJpbmRleD1cIjBcIiBpZD1cIiRpZC1yZW1lbWJlclwiIC8+JHJlbWVtYmVyX3RoaXNfZGV2aWNlPC9sYWJlbD4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLXN1Ym1pdFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4kc3VibWl0PC9kaXY+PC9kaXY+JyxcclxuICAgIF0uam9pbignJyksXHJcbiAgICBlbWFpbEVudGVyQ29kZTogW1xyXG4gICAgICAgICc8ZGl2IGlkPVwiJGlkLWhlYWRlci10ZXh0XCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwiZ2lnLXRmYS1lbWFpbC1jb2RlLWhlYWRlci10ZXh0XCI+JGhlYWRlclRleHQ8L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGlkPVwiJGlkLWVtYWlsXCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwiZ2lnLXRmYS1lbWFpbC10ZXh0XCI+JGVtYWlsPC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWxcIiBpZD1cIiRpZC1lbnRlci1jb2RlXCIgdGFiaW5kZXg9XCItMVwiPiRlbnRlcl9jb2RlPC9kaXY+JyxcclxuICAgICAgICAnPGlucHV0IGNsYXNzPVwiZ2lnLXRmYS1jb2RlLXRleHRib3hcIiB0eXBlPVwidGV4dFwiIHRhYmluZGV4PVwiMFwiLz4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1lcnJvclwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIHJvbGU9XCJhbGVydFwiPjwvZGl2PicsXHJcblxyXG4gICAgICAgICc8bGFiZWwgY2xhc3M9XCJnaWctdGZhLWNvZGUtcmVtZW1iZXItbGFiZWxcIiB0YWJpbmRleD1cIi0xXCIgZm9yPVwiJGlkLXJlbWVtYmVyXCI+PGlucHV0IGNsYXNzPVwiZ2lnLXRmYS1jb2RlLXJlbWVtYmVyLWNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgdGFiaW5kZXg9XCIwXCIgaWQ9XCIkaWQtcmVtZW1iZXJcIiAvPiRyZW1lbWJlcl90aGlzX2RldmljZTwvbGFiZWw+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbiBnaWctdGZhLWJ1dHRvbi1zdWJtaXRcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JHN1Ym1pdDwvZGl2PjwvZGl2PicsXHJcbiAgICBdLmpvaW4oJycpLFxyXG4gICAgcGhvbmVSZXNlbmQ6IFtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtcGhvbmUtcmVzZW5kLWhlYWRlci10ZXh0XCI+JGhlYWRlclRleHQ8L2Rpdj4nLFxyXG5cclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtdmVyaWZpY2F0aW9uLW1ldGhvZFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWwgZ2lnLXRmYS1waG9uZS1yZXNlbmQtdHlwZS1sYWJlbFwiPiRnZXRfY29kZV9ieTwvZGl2PicsXHJcbiAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdpZy10ZmEtcGhvbmUtcmVzZW5kLXR5cGUgZ2lnLXRmYS1waG9uZS1yZXNlbmQtdHlwZS1zbXNcIiBmb3I9XCIkaWQtZ2V0LXNtcy1jb2RlXCI+PGlucHV0IGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1yZXNlbmQtdHlwZS1yYWRpb1wiIG5hbWU9XCJwaG9uZU1ldGhvZFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwic21zXCIgaWQ9XCIkaWQtZ2V0LXNtcy1jb2RlXCIgLz4gPHNwYW4+JHRleHRfbWVzc2FnZTwvc3Bhbj48L2xhYmVsPicsXHJcbiAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdpZy10ZmEtcGhvbmUtcmVzZW5kLXR5cGUgZ2lnLXRmYS1waG9uZS1yZXNlbmQtdHlwZS12b2ljZS1jYWxsXCIgZm9yPVwiJGlkLWdldC12b2ljZS1jb2RlXCI+PGlucHV0IGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1yZXNlbmQtdHlwZS1yYWRpb1wiIG5hbWU9XCJwaG9uZU1ldGhvZFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwidm9pY2VcIiBpZD1cIiRpZC1nZXQtdm9pY2UtY29kZVwiIC8+IDxzcGFuPiR2b2ljZV9jYWxsPC9zcGFuPjwvbGFiZWw+JyxcclxuICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWwgZ2lnLXRmYS1waG9uZS1yZXNlbmQteW91cnBob25lLWxhYmVsXCI+JHlvdXJfcGhvbmVfbnVtYmVyIDxzcGFuIGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1yZXNlbmQteW91cnBob25lXCI+PC9zcGFuPjwvZGl2PicsXHJcblxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLXNlbmRcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JHNlbmQ8L2Rpdj48L2Rpdj4nLFxyXG4gICAgXS5qb2luKCcnKSxcclxuICAgIHBob25lRWRpdDogWyc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1lZGl0LWhlYWRlci10ZXh0XCI+JGhlYWRlclRleHQ8L2Rpdj4nLCAnPGRpdiBjbGFzcz1cImdpZy10ZmEtcGhvbmUtZWRpdC1udW1iZXJzXCI+PC9kaXY+J10uam9pbignJyksXHJcbiAgICBwaG9uZUVkaXRFbnRyeTogW1xyXG4gICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy10ZmEtcGhvbmUtZWRpdC1udW1iZXJcIj4kcGhvbmVOdW1iZXI8L3NwYW4+PHNwYW4gY2xhc3M9XCJnaWctdGZhLXBob25lLWVkaXQtbGlua1wiIGRhdGEtcGhvbmVpZD1cIiRwaG9uZUlkXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPiRlZGl0PC9zcGFuPicsXHJcbiAgICBdLmpvaW4oJycpLFxyXG4gICAgdG90cFJlZ2lzdGVyOiBbXHJcbiAgICAgICAgJzxoMiBpZD1cIiRpZC1zdGVwLTFcIiBjbGFzcz1cImdpZy10ZmEtdG90cC1zdGVwLWxhYmVsXCI+JHN0ZXAxPC9oMj4nLFxyXG4gICAgICAgICc8ZGl2IGlkPVwiJGlkLXNjYW4tcXItY29kZS1sYWJlbFwiIGNsYXNzPVwiZ2lnLXRmYS1sYWJlbFwiPiRzY2FuX3FyX2NvZGU8L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS10b3RwLXFyY29kZVwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWxsZWRieT1cIiRpZC1zdGVwLTEgJGlkLXNjYW4tcXItY29kZS1sYWJlbFwiPicsXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIiRxckNvZGVcIi8+JyxcclxuICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAnPGgyIGlkPVwiJGlkLXN0ZXAtMlwiIGNsYXNzPVwiZ2lnLXRmYS10b3RwLXN0ZXAtbGFiZWxcIj4kc3RlcDI8L2gyPicsXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWxhYmVsXCIgaWQ9XCIkaWQtZW50ZXItY29kZVwiICA+JGVudGVyX2NvZGU8L2Rpdj4nLFxyXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJnaWctdGZhLWNvZGUtdGV4dGJveFwiIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbGxlZGJ5PVwiJGlkLXN0ZXAtMiAkaWQtZW50ZXItY29kZSAkaWQtZW50ZXItY29kZS1lcnJvclwiIHRhYmluZGV4PVwiMFwiLz4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1lcnJvclwiIGlkPVwiJGlkLWVudGVyLWNvZGUtZXJyb3JcIiBhcmlhLWF0b21pYz1cInRydWVcIiByb2xlPVwiYWxlcnRcIj48L2Rpdj4nLFxyXG4gICAgICAgICc8bGFiZWwgY2xhc3M9XCJnaWctdGZhLWNvZGUtcmVtZW1iZXItbGFiZWxcIiBmb3I9XCIkaWQtcmVtZW1iZXItbWVcIiBpZD1cIiRnaWctdGZhLWNvZGUtcmVtZW1iZXItbGFiZWxcIj48aW5wdXQgYXJpYS1sYWJlbGxlZGJ5PVwiJGdpZy10ZmEtY29kZS1yZW1lbWJlci1sYWJlbFwiIGNsYXNzPVwiZ2lnLXRmYS1jb2RlLXJlbWVtYmVyLWNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgdGFiaW5kZXg9XCIwXCIgaWQ9XCIkaWQtcmVtZW1iZXItbWVcIiAvPiRyZW1lbWJlcl90aGlzX2RldmljZTwvbGFiZWw+JyxcclxuICAgICAgICAnPGRpdiBpZD1cIiRpZC1kb3dubG9hZC1iYWNrdXAtY29kZXNcIiBjbGFzcz1cImdpZy10ZmEtbGFiZWwgZ2lnLXRmYS1ib3R0b20taW50cm9cIj4kZG93bmxvYWRCYWNrdXBDb2Rlc0ludHJvPC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uLWNvbnRhaW5lclwiIGFyaWEtZGVzY3JpYmVkYnk9XCIkaWQtZG93bmxvYWQtYmFja3VwLWNvZGVzXCI+PGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLXN1Ym1pdFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4kc3VibWl0PC9kaXY+PC9kaXY+JyxcclxuICAgIF0uam9pbignJyksXHJcbiAgICB0b3RwRWRpdDogW1xyXG4gICAgICAgICc8ZGl2IGlkPVwiJGlkLWhlYWRlclwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsPVwiJGhlYWRlclRleHRcIiBjbGFzcz1cImdpZy10ZmEtdG90cC1oZWFkZXItdGV4dCBnaWctdGZhLXRvdHAtZWRpdC1oZWFkZXItdGV4dFwiPiRoZWFkZXJUZXh0PC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtZXJyb3JcIiBhcmlhLWF0b21pYz1cInRydWVcIiByb2xlPVwiYWxlcnRcIj48L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyIGdpZy10ZmEtYnV0dG9uLWNvbnRhaW5lci10b3AtbWFyZ2luXCI+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLWNoYW5nZS1kZXZpY2VcIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsbGVkYnk9XCIkaWQtaGVhZGVyXCIgcm9sZT1cImJ1dHRvblwiPiRjaGFuZ2VEZXZpY2U8L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24gZ2lnLXRmYS1idXR0b24tYmFja3VwLWNvZGVzXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiJGlkLWhlYWRlclwiIHJvbGU9XCJidXR0b25cIj4kYmFja3VwQ29kZXM8L2Rpdj4nLFxyXG4gICAgICAgICc8L2Rpdj4nLFxyXG4gICAgXS5qb2luKCcnKSxcclxuICAgIHRvdHBCYWNrdXBDb2RlczogW1xyXG4gICAgICAgICc8ZGl2IGlkPVwiJGlkLWhlYWRlclwiIHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cImdpZy10ZmEtdG90cC1oZWFkZXItdGV4dCBnaWctdGZhLXRvdHAtYmFja3VwLWNvZGVzLWhlYWRlci10ZXh0XCI+JGhlYWRlclRleHQ8L2Rpdj4nLFxyXG4gICAgICAgICc8dGFibGUgY2xhc3M9XCJnaWctdGZhLXRvdHAtYmFja3VwLWNvZGVzXCI+JyxcclxuICAgICAgICAgICAgJzx0cj4nLFxyXG4gICAgICAgICAgICAgICAgJzx0ZD4kYmFja3VwQ29kZTE8L3RkPicsXHJcbiAgICAgICAgICAgICAgICAnPHRkPiRiYWNrdXBDb2RlMjwvdGQ+JyxcclxuICAgICAgICAgICAgICAgICc8dGQ+JGJhY2t1cENvZGUzPC90ZD4nLFxyXG4gICAgICAgICAgICAnPC90cj4nLFxyXG4gICAgICAgICAgICAnPHRyPicsXHJcbiAgICAgICAgICAgICAgICAnPHRkPiRiYWNrdXBDb2RlNDwvdGQ+JyxcclxuICAgICAgICAgICAgICAgICc8dGQ+JGJhY2t1cENvZGU1PC90ZD4nLFxyXG4gICAgICAgICAgICAgICAgJzx0ZD4kYmFja3VwQ29kZTY8L3RkPicsXHJcbiAgICAgICAgICAgICc8L3RyPicsXHJcbiAgICAgICAgICAgICc8dHI+JyxcclxuICAgICAgICAgICAgICAgICc8dGQ+JGJhY2t1cENvZGU3PC90ZD4nLFxyXG4gICAgICAgICAgICAgICAgJzx0ZD4kYmFja3VwQ29kZTg8L3RkPicsXHJcbiAgICAgICAgICAgICAgICAnPHRkPiRiYWNrdXBDb2RlOTwvdGQ+JyxcclxuICAgICAgICAgICAgJzwvdHI+JyxcclxuICAgICAgICAnPC90YWJsZT4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+JyxcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbiBnaWctYmFja3VwLWNvZGVzLXByaW50LWJ0blwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsbGVkYnk9XCIkaWQtaGVhZGVyXCI+JHByaW50PC9kaXY+JyxcclxuICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtcm93XCI+JyxcclxuICAgICAgICAnPGEgY2xhc3M9XCJnaWctdGZhLWxpbmsgZ2lnLXRmYS1nZW5lcmF0ZS1uZXctY29kZXNcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JGdlbmVyYXRlTmV3Q29kZXM8L2E+JyxcclxuICAgICAgICAnPC9kaXY+JyxcclxuICAgIF0uam9pbignJyksXHJcbiAgICB0b3RwR2VuZXJhdGVOZXdDb2Rlc0NvbmZpcm1hdGlvbjogW1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1sYWJlbFwiPiRyZXNldENvZGVzUXVlc3Rpb248L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyIGdpZy10ZmEtYnV0dG9uLWNvbnRhaW5lci1yb3cgZ2lnLXRmYS1idXR0b24tY29udGFpbmVyLXRvcC1tYXJnaW5cIj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24gZ2lnLWJhY2t1cC1jb2Rlcy1jb25maXJtXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPiR5ZXM8L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24gZ2lnLWJhY2t1cC1jb2Rlcy1jYW5jZWxcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JGNhbmNlbDwvZGl2PicsXHJcbiAgICAgICAgJzwvZGl2PicsXHJcbiAgICBdLFxyXG4gICAgdG90cFZlcmlmeTogW1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1sYWJlbFwiIGlkPVwiJGlkLWVudGVyLWNvZGVcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JGVudGVyX2NvZGU8L2Rpdj4nLFxyXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJnaWctdGZhLWNvZGUtdGV4dGJveFwiIHR5cGU9XCJ0ZXh0XCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiJGlkLWVudGVyLWNvZGVcIi8+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtZXJyb3JcIiB0YWJpbmRleD1cIjBcIiBhcmlhLWF0b21pYz1cInRydWVcIiByb2xlPVwiYWxlcnRcIj48L2Rpdj4nLFxyXG4gICAgICAgICc8bGFiZWwgY2xhc3M9XCJnaWctdGZhLWNvZGUtcmVtZW1iZXItbGFiZWxcIiBmb3I9XCIkaWQtcmVtZW1iZXItbWVcIj48aW5wdXQgY2xhc3M9XCJnaWctdGZhLWNvZGUtcmVtZW1iZXItY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiB0YWJpbmRleD1cIjBcIiBpZD1cIiRpZC1yZW1lbWJlci1tZVwiIC8+JHJlbWVtYmVyX3RoaXNfZGV2aWNlPC9sYWJlbD4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLXN1Ym1pdFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4kc3VibWl0PC9kaXY+PC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtcm93IGdpZy10ZmEtdXNlLWJhY2t1cC1jb2RlLXJvd1wiPicsXHJcbiAgICAgICAgJzxhIGNsYXNzPVwiZ2lnLXRmYS1saW5rIGdpZy10ZmEtdXNlLWJhY2t1cC1jb2RlXCI+JHVzZUJhY2t1cENvZGU8L2E+JyxcclxuICAgICAgICAnPC9kaXY+JyxcclxuICAgIF0uam9pbignJyksXHJcbiAgICBwdXNoVmVyaWZpY2F0aW9uUGhvbmU6IFtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWxcIiBpZD1cIiRpZC1wdXNoLXRmYVwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4kY2FsbF90b19hY3Rpb248L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1lcnJvclwiIHRhYmluZGV4PVwiMFwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIHJvbGU9XCJhbGVydFwiPjwvZGl2PicsXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLXJvdyBnaWctdGZhLXVzZS1iYWNrdXAtY29kZS1yb3dcIj4nLFxyXG4gICAgICAgICc8YSBjbGFzcz1cImdpZy10ZmEtbGluayBnaWctdGZhLXVzZS1iYWNrdXAtY29kZVwiPiR1c2VCYWNrdXBDb2RlPC9hPicsXHJcbiAgICAgICAgJzxici8+JyxcclxuICAgICAgICAnPGEgY2xhc3M9XCJnaWctdGZhLWxpbmsgZ2lnLXRmYS1yZXNlbmQtcHVzaC1ub3RpZmljYXRpb25cIj4kcmVzZW5kUHVzaE5vdGlmaWNhdGlvbjwvYT4nLFxyXG4gICAgICAgICc8L2Rpdj4nLFxyXG4gICAgXS5qb2luKCcnKSxcclxuICAgIHB1c2hWZXJpZmljYXRpb25CYWNrdXBDb2RlczogW1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1sYWJlbFwiIGlkPVwiJGlkLXB1c2gtdGZhXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiRjYWxsX3RvX2FjdGlvbjwvZGl2PicsXHJcbiAgICAgICAgJzxpbnB1dCBjbGFzcz1cImdpZy10ZmEtY29kZS10ZXh0Ym94XCIgdHlwZT1cInRleHRcIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsbGVkYnk9XCIkaWQtcHVzaC10ZmFcIi8+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtZXJyb3JcIiB0YWJpbmRleD1cIjBcIiBhcmlhLWF0b21pYz1cInRydWVcIiByb2xlPVwiYWxlcnRcIj48L2Rpdj4nLFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLXN1Ym1pdFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4kc3VibWl0PC9kaXY+PC9kaXY+JyxcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtcm93IGdpZy10ZmEtdXNlLWJhY2t1cC1jb2RlLXJvd1wiPicsXHJcbiAgICAgICAgJzxhIGNsYXNzPVwiZ2lnLXRmYS1saW5rIGdpZy10ZmEtcmVzZW5kLXB1c2gtbm90aWZpY2F0aW9uXCI+JHJlc2VuZFB1c2hOb3RpZmljYXRpb248L2E+JyxcclxuICAgICAgICAnPC9kaXY+JyxcclxuICAgIF0uam9pbignJyksXHJcbn07XHJcbiIsImltcG9ydCB7IEJhc2VUZmFQcm92aWRlciB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvQmFzZVRmYVByb3ZpZGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdFRlbXBsYXRlcyB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZW1wbGF0ZXMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0Q3NzIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL0RlZmF1bHRDc3MnO1xyXG5pbXBvcnQgeyBnZXRUZmFQcm92aWRlckluc3RhbmNlLCBpc1RmYVByb3ZpZGVyU3VwcG9ydGVkIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVyRmFjdG9yeSc7XHJcbmltcG9ydCB7IEVkaXRhYmxlVGZhUHJvdmlkZXJzVHlwZXMgfSBmcm9tICdzcmMvYWNjb3VudHMvY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBlbnVtIFRmYU1vZGUge1xyXG4gICAgdmVyaWZ5LFxyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBhZGQsXHJcbiAgICBlZGl0LFxyXG59XHJcbmV4cG9ydCBlbnVtIFZlcmlmaWNhdGlvbk1ldGhvZCB7XHJcbiAgICBTTVMsXHJcbiAgICBWT0lDRSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZyaWVuZGx5UHJvdmlkZXJOYW1lcyA9IHtcclxuICAgIGxpdmVsaW5rOiAnUGhvbmUgKFNNUyknLFxyXG4gICAgZ2lneWFQaG9uZTogJ1Bob25lIChWb2ljZS9TTVMpJyxcclxuICAgIGdpZ3lhVG90cDogJ1RpbWUgYmFzZWQgQXV0aGVudGljYXRpb24nLFxyXG4gICAgZ2lneWFQdXNoOiAnUHVzaCBOb3RpZmljYXRpb24nLFxyXG4gICAgZ2lneWFFbWFpbDogJ0VtYWlsJyxcclxufTtcclxuZXhwb3J0IGludGVyZmFjZSBJUHJvdmlkZXJJbmZvIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGF1dGhMZXZlbD86IG51bWJlcjtcclxuICAgIGNhcGFiaWxpdGllcz86IHN0cmluZ1tdXHJcbn1cclxuZXhwb3J0IGNsYXNzIFRmYVBsdWdpbiB7XHJcbiAgICBwcml2YXRlIG1vZGU6IFRmYU1vZGU7XHJcbiAgICBwcml2YXRlIGFjdGl2ZVByb3ZpZGVyczogQXJyYXk8SVByb3ZpZGVySW5mbz4gPSBbXTtcclxuICAgIHByaXZhdGUgaW5hY3RpdmVQcm92aWRlcnM6IEFycmF5PElQcm92aWRlckluZm8+ID0gW107XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGlzUnRsOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBhZGRlZENzczogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFByb3ZpZGVyOiBCYXNlVGZhUHJvdmlkZXI7XHJcbiAgICBwdWJsaWMgdGVtcGxhdGVzOiBPYmplY3QgPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUoZGVmYXVsdFRlbXBsYXRlcywgZmFsc2UpO1xyXG4gICAgcHVibGljIGlzTW9iaWxlVUk6IGJvb2xlYW47XHJcblxyXG4gICAgZ2V0VGV4dCh0ZXh0S2V5OiBzdHJpbmcsIHJlcGxhY2VTdHI/OiBzdHJpbmcsIHdpdGhTdHI/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXNbJ2N1c3RvbUxhbmcnXSAmJiB0aGlzLnBhcmFtc1snY3VzdG9tTGFuZyddW3RleHRLZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtc1snY3VzdG9tTGFuZyddW3RleHRLZXldLnJlcGxhY2UocmVwbGFjZVN0ciwgd2l0aFN0cik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnBsdWdpblV0aWxzLmxhbmcuZ2V0TG9jYWxpemVkVGV4dCgnZ2lneWEuc2VydmljZXMuYWNjb3VudHMucGx1Z2lucy50ZmEuanMnLCB0ZXh0S2V5LCB0aGlzLnBhcmFtc1snbGFuZyddLCByZXBsYWNlU3RyLCB3aXRoU3RyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBhcmFtczogT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gdGhpcy5nZXRNb2RlQnlTdHJpbmcocGFyYW1zWydtb2RlJ10pO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyYW1zWydjb250YWluZXJJRCddKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pZCA9IHRoaXMuY29udGFpbmVyLmlkIHx8IFN0cmluZyhEYXRlLm5vdygpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByb3ZpZGVycygoKSA9PiB7XHJcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdsb2FkJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcyxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgdmFyIGRldmljZVR5cGUgPSB0aGlzLnBhcmFtc1snZGV2aWNlVHlwZSddID8gdGhpcy5wYXJhbXNbJ2RldmljZVR5cGUnXS50b0xvd2VyQ2FzZSgpIDogJ2Rlc2t0b3AnO1xyXG4gICAgICAgIHRoaXMuaXNNb2JpbGVVSSA9IGRldmljZVR5cGUgPT0gJ21vYmlsZScgfHwgKGRldmljZVR5cGUgPT0gJ2F1dG8nICYmIGdpZ3lhLmxvY2FsSW5mby5pc01vYmlsZSk7XHJcblxyXG4gICAgICAgIHZhciBjc3NQcmVmaXggPSB0aGlzLnBhcmFtc1snY3NzUHJlZml4J107XHJcbiAgICAgICAgaWYgKGNzc1ByZWZpeCB8fCAhdGhpcy5hZGRlZENzcykge1xyXG4gICAgICAgICAgICB2YXIgbGFuZyA9IHRoaXMucGFyYW1zWydsYW5nJ107XHJcbiAgICAgICAgICAgIHRoaXMuaXNSdGwgPSBsYW5nID09ICdoZScgfHwgbGFuZyA9PSAnYXInO1xyXG5cclxuICAgICAgICAgICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoZGVmYXVsdENzcy5yZXNldCwgY3NzUHJlZml4KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSdGwpIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MuYWRkQ3NzKGRlZmF1bHRDc3MucmVzZXRSdGwsIGNzc1ByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZml4ZWRDc3MgPSBnaWd5YS5wbHVnaW5VdGlscy5jc3MuZml4Q3NzKGRlZmF1bHRDc3MuZ2xvYmFsKTtcclxuICAgICAgICAgICAgdmFyIGZpeGVkUnRsQ3NzID0gZ2lneWEucGx1Z2luVXRpbHMuY3NzLmZpeENzcyhkZWZhdWx0Q3NzLnJ0bCk7XHJcblxyXG4gICAgICAgICAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzLmFkZENzcyhmaXhlZENzcywgY3NzUHJlZml4KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSdGwpIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MuYWRkQ3NzKGZpeGVkUnRsQ3NzLCBjc3NQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoZGVmYXVsdENzcy5tb2JpbGUsIGNzc1ByZWZpeCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzLmFkZENzcyhkZWZhdWx0Q3NzLm5vbk1vYmlsZSwgY3NzUHJlZml4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzTW9iaWxlICYmIGdpZ3lhLmxvY2FsSW5mby5pc1NhZmFyaSkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoJy5naWctdGZhLWNvbnRhaW5lciAqIHstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZTt9JywgY3NzUHJlZml4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkZGVkQ3NzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ2dpZy10ZmEtY29udGFpbmVyJztcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy50ZW1wbGF0ZXNbJ2NvbnRhaW5lciddLCB7d3JhcHBlcklkOiB0aGlzLmNvbnRhaW5lci5pZCArICdfd3JhcHBlcid9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1Byb2dyZXNzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUHJvdmlkZXIgJiYgdGhpcy5zZWxlY3RlZFByb3ZpZGVyLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBnaWd5YS5nbG9iYWwuc2hvd0xvYWRlcih0aGlzLnNlbGVjdGVkUHJvdmlkZXIuY29udGFpbmVyLCAnZ2lnLXRmYS1wcm92aWRlci1sb2FkZXInLCAxMjApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZVByb2dyZXNzKCkge31cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZVByb3ZpZGVyKHByb3ZpZGVyOiBzdHJpbmcpIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNb2RlQnlTdHJpbmcobW9kZTogc3RyaW5nKTogVGZhTW9kZSB7XHJcbiAgICAgICAgZm9yICh2YXIgbW9kZUluZGV4IGluIFRmYU1vZGUpIHtcclxuICAgICAgICAgICAgaWYgKFRmYU1vZGVbbW9kZUluZGV4XSA9PSBtb2RlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGZhTW9kZVtUZmFNb2RlW21vZGVJbmRleF1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUHJvdmlkZXJzKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MoKTtcclxuICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEuZ2V0UHJvdmlkZXJzKHRoaXMucGFyYW1zLCB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVQcm92aWRlcnMgPSByZXNwb25zZVsnaW5hY3RpdmVQcm92aWRlcnMnXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvdmlkZXJzID0gcmVzcG9uc2VbJ2FjdGl2ZVByb3ZpZGVycyddIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm92aWRlcnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlID0gVGZhTW9kZS5yZWdpc3RlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSBUZmFNb2RlLnZlcmlmeTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0VGZhKHByb3ZpZGVyOiBzdHJpbmcsIG1vZGU6IFRmYU1vZGUsIGluaXRDYWxsYmFjazogKHJlc3BvbnNlOiBPYmplY3QpID0+IHZvaWQgPSAoKSA9PiB7fSkge1xyXG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5pbml0VEZBKHRoaXMucGFyYW1zLCB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcclxuICAgICAgICAgICAgbW9kZTogVGZhTW9kZVttb2RlXSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtc1snZ2lneWFBc3NlcnRpb24nXSA9IHJlc3BvbnNlWydnaWd5YUFzc2VydGlvbiddO1xyXG4gICAgICAgICAgICAgICAgaW5pdENhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRQcm92aWRlckZsb3cocHJvdmlkZXI6IElQcm92aWRlckluZm8sIG1vZGU6IFRmYU1vZGUpIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlckNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1wcm92aWRlci13cmFwcGVyJylbMF07XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb3ZpZGVyID0gZ2V0VGZhUHJvdmlkZXJJbnN0YW5jZShwcm92aWRlci5uYW1lLCB0aGlzLCBwcm92aWRlckNvbnRhaW5lciwgdGhpcy5wYXJhbXMsIG1vZGUsIChyZXNwb25zZSwgcHJvdmlkZXJBc3NlcnRpb24sIGlzVGVtcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUHJvdmlkZXJDYWxsYmFjayhyZXNwb25zZSwgcHJvdmlkZXJBc3NlcnRpb24sIGlzVGVtcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb3ZpZGVyLnN0YXJ0Rmxvdyhwcm92aWRlci5jYXBhYmlsaXRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1Byb3ZpZGVyKHByb3ZpZGVyOiBJUHJvdmlkZXJJbmZvLCBtb2RlOiBUZmFNb2RlKSB7XHJcbiAgICAgICAgLy8gd2hlbiBUZmFQcm92aWRlciBpcyBpbiBlZGl0IG1vZGUsIGluaXRURkEgaW4gZWRpdCBtb2RlIGlzIGRvbmUgZnJvbSB0aGUgVGZhUHJvdmlkZXJcclxuICAgICAgICB0aGlzLmluaXRUZmEocHJvdmlkZXIubmFtZSwgbW9kZSA9PSBUZmFNb2RlLmVkaXQgPyBUZmFNb2RlLnZlcmlmeSA6IG1vZGUsIChyZXNwb25zZTogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVsnZXJyb3JDb2RlJ10gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFByb3ZpZGVyRmxvdyhwcm92aWRlciwgbW9kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRG9uZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUHJvdmlkZXJDYWxsYmFjayhyZXNwb25zZTogT2JqZWN0LCBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nLCBpc1RlbXA6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAocmVzcG9uc2VbJ2Vycm9yQ29kZSddID09IDApIHtcclxuICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLmZpbmFsaXplVEZBKHRoaXMucGFyYW1zLCB7XHJcbiAgICAgICAgICAgICAgICBwcm92aWRlckFzc2VydGlvbjogcHJvdmlkZXJBc3NlcnRpb24sXHJcbiAgICAgICAgICAgICAgICB0ZW1wRGV2aWNlOiBpc1RlbXAsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Eb25lKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Eb25lKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRvbmUocmVzcG9uc2UpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2RvbmUnLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcyxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1NlbGVjdG9yKG1vZGU6IFRmYU1vZGUgPSB0aGlzLm1vZGUpIHtcclxuICAgICAgICBjb25zdCBzdXBwb3J0ZWRQcm92aWRlcnM6IEFycmF5PElQcm92aWRlckluZm8+ID0gdGhpcy5nZXRTdXBwb3J0ZWRQcm92aWRlcnMobW9kZSk7XHJcbiAgICAgICAgaWYgKCFzdXBwb3J0ZWRQcm92aWRlcnMgfHwgc3VwcG9ydGVkUHJvdmlkZXJzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb3ZpZGVyKHN1cHBvcnRlZFByb3ZpZGVyc1swXSwgbW9kZSk7XHJcblxyXG4gICAgICAgIGlmIChzdXBwb3J0ZWRQcm92aWRlcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQcm92aWRlclNlbGVjdG9yKHN1cHBvcnRlZFByb3ZpZGVycywgbW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1Byb3ZpZGVyU2VsZWN0b3IocHJvdmlkZXJzOiBBcnJheTxJUHJvdmlkZXJJbmZvPiwgbW9kZTogVGZhTW9kZSA9IHRoaXMubW9kZSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdENvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5naWctdGZhLXNlbGVjdC1wcm92aWRlcicpO1xyXG4gICAgICAgIHNlbGVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnRlbXBsYXRlc1snc2VsZWN0UHJvdmlkZXInXSwge1xyXG4gICAgICAgICAgICBzZWxlY3RQcm92aWRlckhlYWRlcjogdGhpcy5nZXRUZXh0KCdzZWxlY3RfcHJvdmlkZXInKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwcm92aWRlclNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5naWctdGZhLXNlbGVjdGJveCcpO1xyXG4gICAgICAgIHByb3ZpZGVyc1xyXG4gICAgICAgICAgICAubWFwKHByb3ZpZGVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvdmlkZXIubmFtZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gRnJpZW5kbHlQcm92aWRlck5hbWVzW3Byb3ZpZGVyLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZvckVhY2gob3B0aW9uID0+IHByb3ZpZGVyU2VsZWN0b3IuYWRkKG9wdGlvbikpO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHByb3ZpZGVyU2VsZWN0b3IsICdjaGFuZ2UnLCBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm92aWRlciA9IGUudGFyZ2V0Lm9wdGlvbnNbZS50YXJnZXQuc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb3ZpZGVyKHtuYW1lOiBzZWxlY3RlZFByb3ZpZGVyLnZhbHVlfSwgbW9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdXBwb3J0ZWRQcm92aWRlcnMobW9kZTogVGZhTW9kZSkge1xyXG4gICAgICAgIHZhciBwcm92aWRlcnM6IEFycmF5PElQcm92aWRlckluZm8+ID0gdGhpcy5nZXRQcm92aWRlcnNGb3JNb2RlKG1vZGUpO1xyXG4gICAgICAgIGlmICghcHJvdmlkZXJzIHx8IHByb3ZpZGVycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm92aWRlcnMuZmlsdGVyKHAgPT4gaXNUZmFQcm92aWRlclN1cHBvcnRlZChwLm5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFByb3ZpZGVyc0Zvck1vZGUobW9kZTogVGZhTW9kZSk6IEFycmF5PElQcm92aWRlckluZm8+IHtcclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLnJlZ2lzdGVyOlxyXG4gICAgICAgICAgICBjYXNlIFRmYU1vZGUuYWRkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5hY3RpdmVQcm92aWRlcnM7XHJcbiAgICAgICAgICAgIGNhc2UgVGZhTW9kZS5lZGl0OlxyXG4gICAgICAgICAgICAgICAgLy9zaW5jZSBlbWFpbFRmYSBpcyBub3QgZWRpdGFibGUgYW5kIHBob25lVGZhIGlzLCBJIGNhbiBoYXZlIHRob3NlIHR3byBwcm92aWRlcnNcclxuICAgICAgICAgICAgICAgIC8vIHRvZ2V0aGVyIGFuZCBzbyBJIGhhdmUgdG8gb25seSByZXR1cm4gdGhlIG9uZSB3aGljaCBpcyBlZGl0YWJsZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWRpdGFibGVQcm92aWRlcnMoKTtcclxuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLnZlcmlmeTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVByb3ZpZGVycztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVkaXRhYmxlUHJvdmlkZXJzKCk6IElQcm92aWRlckluZm9bXSB7XHJcbiAgICAgICAgdmFyIGVkaXRhYmxlUHJvdmlkZXJzOiBJUHJvdmlkZXJJbmZvW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aGlzLmFjdGl2ZVByb3ZpZGVycy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGlzRWRpdGFibGUgPSB0aGlzLmlzVGZhUHJvdmlkZXJFZGl0YWJsZSh0aGlzLmFjdGl2ZVByb3ZpZGVyc1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKGlzRWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgIGVkaXRhYmxlUHJvdmlkZXJzLnB1c2godGhpcy5hY3RpdmVQcm92aWRlcnNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlZGl0YWJsZVByb3ZpZGVycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVGZhUHJvdmlkZXJFZGl0YWJsZShwcm92aWRlclRvQ2hlY2spOiBib29sZWFuIHtcclxuICAgICAgICAvLyBnbyBvdmVyIHRoZSBsaXN0IG9mIGVkaXRhYmxlIHByb3ZpZGVyc1xyXG4gICAgICAgIHJldHVybiBFZGl0YWJsZVRmYVByb3ZpZGVyc1R5cGVzW3Byb3ZpZGVyVG9DaGVja10gIT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkFmdGVyU2NyZWVuTG9hZChzY3JlZW46IHN0cmluZywgY2FwdGlvbj86IHN0cmluZykge1xyXG4gICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiAnYWZ0ZXJTY3JlZW5Mb2FkJyxcclxuICAgICAgICAgICAgICAgIHNjcmVlbixcclxuICAgICAgICAgICAgICAgIGNhcHRpb24sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2lneWFQaG9uZVByb3ZpZGVyIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9HaWd5YVBob25lUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBMaXZlTGlua1Bob25lUHJvdmlkZXIgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL0xpdmVMaW5rUGhvbmVQcm92aWRlcic7XHJcbmltcG9ydCB7IEVtYWlsVGZhUHJvdmlkZXIgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL0VtYWlsVGZhUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBUb3RwVGZhUHJvdmlkZXIgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL1RvdHBUZmFQcm92aWRlcic7XHJcbmltcG9ydCB7IFRmYVBsdWdpbiwgVGZhTW9kZSB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQbHVnaW4nO1xyXG5pbXBvcnQgeyBCYXNlVGZhUHJvdmlkZXIgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL0Jhc2VUZmFQcm92aWRlcic7XHJcbmltcG9ydCB7IFB1c2hUZmFQcm92aWRlciB9IGZyb20gXCIuL1RmYVByb3ZpZGVycy9QdXNoVGZhUHJvdmlkZXJcIjtcclxuY29uc3QgdGZhUHJvdmlkZXJzID0ge1xyXG4gICAgZ2lneWFQaG9uZTogR2lneWFQaG9uZVByb3ZpZGVyLFxyXG4gICAgbGl2ZWxpbms6IExpdmVMaW5rUGhvbmVQcm92aWRlcixcclxuICAgIGdpZ3lhRW1haWw6IEVtYWlsVGZhUHJvdmlkZXIsXHJcbiAgICBnaWd5YVRvdHA6IFRvdHBUZmFQcm92aWRlcixcclxuICAgIGdpZ3lhUHVzaDogUHVzaFRmYVByb3ZpZGVyXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZmFQcm92aWRlckluc3RhbmNlKFxyXG4gICAgcHJvdmlkZXJOYW1lOiBzdHJpbmcsXHJcbiAgICBwbHVnaW46IFRmYVBsdWdpbixcclxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXHJcbiAgICBwYXJhbXM6IE9iamVjdCxcclxuICAgIG1vZGU6IFRmYU1vZGUsXHJcbiAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBPYmplY3QsIHByb3ZpZGVyQXNzZXJ0aW9uOiBzdHJpbmcsIHRlbXBEZXZpY2U6IGJvb2xlYW4pID0+IHZvaWQsXHJcbik6IEJhc2VUZmFQcm92aWRlciB7XHJcbiAgICByZXR1cm4gdGZhUHJvdmlkZXJzW3Byb3ZpZGVyTmFtZV0gPyBuZXcgdGZhUHJvdmlkZXJzW3Byb3ZpZGVyTmFtZV0ocGx1Z2luLCBjb250YWluZXIsIHBhcmFtcywgbW9kZSwgY2FsbGJhY2spIDogbnVsbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNUZmFQcm92aWRlclN1cHBvcnRlZChwcm92aWRlck5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRmYVByb3ZpZGVyc1twcm92aWRlck5hbWVdICE9IG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgVGZhUGx1Z2luLCBUZmFNb2RlIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVBsdWdpbic7XHJcbmltcG9ydCB7Z2lneWFBc3NlcnRpb25FeHBpcmF0aW9ufSBmcm9tIFwic3JjL2FjY291bnRzL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VUZmFQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBwbHVnaW46IFRmYVBsdWdpbixcclxuICAgICAgICBwdWJsaWMgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcclxuICAgICAgICBwdWJsaWMgcGFyYW1zOiBPYmplY3QsXHJcbiAgICAgICAgcHVibGljIG1vZGU6IFRmYU1vZGUsXHJcbiAgICAgICAgcHVibGljIGNhbGxiYWNrOiAocmVzcG9uc2U6IE9iamVjdCwgcHJvdmlkZXJBc3NlcnRpb246IHN0cmluZywgdGVtcERldmljZTogYm9vbGVhbikgPT4gdm9pZCxcclxuICAgICAgICBwcm90ZWN0ZWQgcmVzdGFydEZsb3dJbnRlcnZhbCA9IGdpZ3lhQXNzZXJ0aW9uRXhwaXJhdGlvblxyXG4gICAgKSB7fVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBzdGFydEZsb3coY2FwYWJpbGl0aWVzPzogc3RyaW5nW10pOiB2b2lkO1xyXG5cclxuICAgIHByb3RlY3RlZCBzaG93RXJyb3IoZXJyb3I6IHN0cmluZywgZXJyb3JFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignZGl2LmdpZy10ZmEtZXJyb3InKTtcclxuICAgICAgICBpZiAoZXJyb3JDb250YWluZXIpIHtcclxuICAgICAgICAgICAgZXJyb3JDb250YWluZXIuaW5uZXJIVE1MID0gZXJyb3I7XHJcbiAgICAgICAgICAgIGVycm9yQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvckVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChlcnJvckVsZW1lbnRzW2ldLCAnZ2lnLXRmYS1pbnB1dC1lcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaGlkZUVycm9yKGVycm9yRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXSkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yQ29udGFpbmVyID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJ2Rpdi5naWctdGZhLWVycm9yJyk7XHJcbiAgICAgICAgaWYgKGVycm9yQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGVycm9yQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBlcnJvckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvckVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KGVycm9yRWxlbWVudHNbaV0sICdnaWctdGZhLWlucHV0LWVycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzaG93UHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4uc2hvd1Byb2dyZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGhpZGVQcm9ncmVzcygpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbi5oaWRlUHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzSW5ET00oKSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50RWxlbWVudCAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lci5wYXJlbnRFbGVtZW50LmlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQWN0aXZlKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc0luYWN0aXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzSW5hY3RpdmUoKSB7XHJcbiAgICAgICAgLy8gbm90IGluIERPTSBvciBub3QgdGhpcyBpbnN0YW5jZVxyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc0luRE9NKCkgfHxcclxuICAgICAgICAgICAgKHRoaXMucGx1Z2luLnNlbGVjdGVkUHJvdmlkZXIgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNlbGVjdGVkUHJvdmlkZXIgIT09IHRoaXMpO1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlVGZhUHJvdmlkZXIgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL0Jhc2VUZmFQcm92aWRlcic7XHJcbmltcG9ydCB7IFRmYVBsdWdpbiwgVGZhTW9kZSB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQbHVnaW4nO1xyXG5pbXBvcnQgeyBiaW5kRW50ZXJLZXkgfSBmcm9tIFwiLi4vaGVscGVycy9VdGlsc1wiO1xyXG5cclxuaW50ZXJmYWNlIEVtYWlsIHtcclxuICAgIG9iZnVzY2F0ZWQ/OiBzdHJpbmc7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGxhc3RWZXJpZmljYXRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBFbWFpbFJlc3BvbnNlIHtcclxuICAgIGVtYWlsczogQXJyYXk8RW1haWw+O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29tcGxldGVWZXJpZmljYXRpb25SZXNwb25zZSB7XHJcbiAgICBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VuZFZlcmlmaWNhdGlvbkNvZGVSZXNwb25zZSB7XHJcbiAgICBwaHZUb2tlbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1haWxUZmFQcm92aWRlciBleHRlbmRzIEJhc2VUZmFQcm92aWRlciB7XHJcbiAgICBwcml2YXRlIGVtYWlsczogQXJyYXk8RW1haWw+ID0gW107XHJcbiAgICBwcml2YXRlIHBodlRva2VuOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcGx1Z2luOiBUZmFQbHVnaW4sXHJcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcclxuICAgICAgICBwYXJhbXM6IE9iamVjdCxcclxuICAgICAgICBtb2RlOiBUZmFNb2RlLFxyXG4gICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IE9iamVjdCwgcHJvdmlkZXJBc3NlcnRpb246IHN0cmluZywgdGVtcERldmljZTogYm9vbGVhbikgPT4gdm9pZCxcclxuICAgICAgICByZXN0YXJ0Rmxvd0ludGVydmFsID0gNjAgKiA1ICogMTAwMFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocGx1Z2luLCBjb250YWluZXIsIHBhcmFtcywgbW9kZSwgY2FsbGJhY2ssIHJlc3RhcnRGbG93SW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEZsb3coY2FwYWJpbGl0aWVzPzogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLnNob3dQcm9ncmVzcygpO1xyXG4gICAgICAgIHRoaXMuZ2V0RW1haWxzKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93RW1haWxUZmFTY3JlZW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVtYWlscyhjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5lbWFpbC5nZXRFbWFpbHModGhpcy5wYXJhbXMsIHtcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogRW1haWxSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbHMgPSByZXNwb25zZS5lbWFpbHM7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0VtYWlsVGZhU2NyZWVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVtYWlscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHJpZ2h0IG5vdywgZ2V0cyB0aGUgZmlyc3QgZW1haWwgYXMgdGhlIHRhcmdldCBlbWFpbFxyXG4gICAgICAgICAgICB2YXIgZW1haWwgPSB0aGlzLmVtYWlsc1swXTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kVmVyaWZpY2F0aW9uQ29kZVRvRW1haWwoZW1haWwpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFbnRlckNvZGUoZW1haWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRWZXJpZmljYXRpb25Db2RlVG9FbWFpbChlbWFpbDogRW1haWwpIHtcclxuICAgICAgICB0aGlzLnBodlRva2VuID0gbnVsbDtcclxuICAgICAgICB2YXIgdmVyaWZpY2F0aW9uUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBlbWFpbElEOiBlbWFpbC5pZCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VuZFZlcmlmaWNhdGlvbkNvZGVSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waHZUb2tlbiA9IHJlc3BvbnNlLnBodlRva2VuO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLmVtYWlsLnNlbmRWZXJpZmljYXRpb25Db2RlKHRoaXMucGFyYW1zLCB2ZXJpZmljYXRpb25QYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0VudGVyQ29kZShlbWFpbDogRW1haWwpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ2VtYWlsRW50ZXJDb2RlJ10sIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuY29udGFpbmVyLmlkLFxyXG4gICAgICAgICAgICBoZWFkZXJUZXh0OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdhX3ZlcmlmaWNhdGlvbl9jb2RlX2hhc19iZWVuX3NlbnRfdG9fY29sb24nKSxcclxuICAgICAgICAgICAgZW50ZXJfY29kZTogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZW50ZXJfY29kZV9jb2xvbicpLFxyXG4gICAgICAgICAgICByZW1lbWJlcl90aGlzX2RldmljZTogdGhpcy5wbHVnaW4uaXNNb2JpbGVVSSA/IHRoaXMucGx1Z2luLmdldFRleHQoJ3JlbWVtYmVyX3RoaXNfZGV2aWNlJykgOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdyZW1lbWJlcl90aGlzX2NvbXB1dGVyJyksXHJcbiAgICAgICAgICAgIHN1Ym1pdDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnc3VibWl0JyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBzdWJtaXRCdXR0b246IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtYnV0dG9uLXN1Ym1pdCcpWzBdO1xyXG4gICAgICAgIHZhciB0YkNvZGUgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1jb2RlLXRleHRib3gnKVswXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHZhciBjYlJlbWVtYmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtY29kZS1yZW1lbWJlci1jaGVja2JveCcpWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIGVtYWlsVGV4dDogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1lbWFpbC10ZXh0JylbMF07XHJcbiAgICAgICAgdmFyIGRpdkVycm9yOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWVycm9yJylbMF07XHJcbiAgICAgICAgZW1haWxUZXh0LmlubmVyVGV4dCA9IGVtYWlsLm9iZnVzY2F0ZWQ7XHJcbiAgICAgICAgdGJDb2RlLmZvY3VzKCk7XHJcblxyXG4gICAgICAgIGJpbmRFbnRlcktleShzdWJtaXRCdXR0b24pO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRUZmFDb2RlKHRiQ29kZSwgY2JSZW1lbWJlci5jaGVja2VkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbHVnaW4ub25BZnRlclNjcmVlbkxvYWQoJ3RmYS1lbnRlci1jb2RlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbmRUZmFDb2RlKHRiQ29kZTogSFRNTElucHV0RWxlbWVudCwgaXNDaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGh2VG9rZW4pIHtcclxuICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLmVtYWlsLmNvbXBsZXRlVmVyaWZpY2F0aW9uKHRoaXMucGFyYW1zLCB7XHJcbiAgICAgICAgICAgICAgICBwaHZUb2tlbjogdGhpcy5waHZUb2tlbixcclxuICAgICAgICAgICAgICAgIGNvZGU6IHRiQ29kZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlWydlcnJvckNvZGUnXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUVycm9yKFt0YkNvZGVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRvbmUocmVzcG9uc2UsIHJlc3BvbnNlLnByb3ZpZGVyQXNzZXJ0aW9uLCAhaXNDaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcih0aGlzLnBsdWdpbi5nZXRUZXh0KCdwbGVhc2VfZW50ZXJfYV92YWxpZF9jb2RlJyksIFt0YkNvZGVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRvbmUocmVzcG9uc2U6IE9iamVjdCwgcHJvdmlkZXJBc3NlcnRpb246IHN0cmluZywgaXNUZW1wOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayhyZXNwb25zZSwgcHJvdmlkZXJBc3NlcnRpb24sIGlzVGVtcCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGhvbmVUZmFQcm92aWRlciB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvUGhvbmVUZmFQcm92aWRlcic7XHJcbmltcG9ydCB7IFRmYVBsdWdpbiwgVGZhTW9kZSwgVmVyaWZpY2F0aW9uTWV0aG9kIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVBsdWdpbic7XHJcblxyXG5leHBvcnQgY2xhc3MgR2lneWFQaG9uZVByb3ZpZGVyIGV4dGVuZHMgUGhvbmVUZmFQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwbHVnaW46IFRmYVBsdWdpbixcclxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHBhcmFtczogT2JqZWN0LFxyXG4gICAgICAgIG1vZGU6IFRmYU1vZGUsXHJcbiAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogT2JqZWN0LCBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nLCB0ZW1wRGV2aWNlOiBib29sZWFuKSA9PiB2b2lkLFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocGx1Z2luLCBjb250YWluZXIsIHBhcmFtcywgbW9kZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdnaWd5YVBob25lJztcclxuICAgICAgICB0aGlzLnN1cHBvcnRlZFNlbmRNZXRob2RzID0gW1ZlcmlmaWNhdGlvbk1ldGhvZC5TTVMsIFZlcmlmaWNhdGlvbk1ldGhvZC5WT0lDRV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGhvbmVUZmFQcm92aWRlciB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvUGhvbmVUZmFQcm92aWRlcic7XHJcbmltcG9ydCB7IFRmYVBsdWdpbiwgVGZhTW9kZSwgVmVyaWZpY2F0aW9uTWV0aG9kIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVBsdWdpbic7XHJcblxyXG5leHBvcnQgY2xhc3MgTGl2ZUxpbmtQaG9uZVByb3ZpZGVyIGV4dGVuZHMgUGhvbmVUZmFQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwbHVnaW46IFRmYVBsdWdpbixcclxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHBhcmFtczogT2JqZWN0LFxyXG4gICAgICAgIG1vZGU6IFRmYU1vZGUsXHJcbiAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogT2JqZWN0LCBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nLCB0ZW1wRGV2aWNlOiBib29sZWFuKSA9PiB2b2lkLFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocGx1Z2luLCBjb250YWluZXIsIHBhcmFtcywgbW9kZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdsaXZlbGluayc7XHJcbiAgICAgICAgdGhpcy5zdXBwb3J0ZWRTZW5kTWV0aG9kcyA9IFtWZXJpZmljYXRpb25NZXRob2QuU01TXTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlTnVtYmVycyhjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZU51bWJlcnMoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBsaXZlbGluayBzdXBwb3J0cyBqdXN0IHNtc1xyXG4gICAgICAgICAgICB0aGlzLnBob25lTnVtYmVycy5mb3JFYWNoKHBob25lID0+IChwaG9uZS5sYXN0TWV0aG9kID0gJ3NtcycpKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0Jhc2VUZmFQcm92aWRlcn0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9CYXNlVGZhUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBUZmFNb2RlLCBUZmFQbHVnaW4sIFZlcmlmaWNhdGlvbk1ldGhvZCB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQbHVnaW4nO1xyXG5pbXBvcnQge2JpbmRFbnRlcktleSwgY3JlYXRlQWN0aW9uSW50ZXJ2YWx9IGZyb20gXCIuLi9oZWxwZXJzL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBob25lTnVtYmVyIHtcclxuICAgIG9iZnVzY2F0ZWQ/OiBzdHJpbmc7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGxhc3RNZXRob2Q/OiBzdHJpbmc7XHJcbiAgICBsYXN0VmVyaWZpY2F0aW9uPzogc3RyaW5nO1xyXG4gICAgcGxhaW4/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaG9uZVRmYVByb3ZpZGVyIGV4dGVuZHMgQmFzZVRmYVByb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBwaG9uZU51bWJlcnM6IFBob25lTnVtYmVyW10gPSBbXTtcclxuICAgIHB1YmxpYyBwaHZUb2tlbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwaG9uZUlkVG9SZW1vdmU6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzdXBwb3J0ZWRTZW5kTWV0aG9kczogVmVyaWZpY2F0aW9uTWV0aG9kW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcGx1Z2luOiBUZmFQbHVnaW4sXHJcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcclxuICAgICAgICBwYXJhbXM6IE9iamVjdCxcclxuICAgICAgICBtb2RlOiBUZmFNb2RlLFxyXG4gICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IE9iamVjdCwgcHJvdmlkZXJBc3NlcnRpb246IHN0cmluZywgdGVtcERldmljZTogYm9vbGVhbikgPT4gdm9pZCxcclxuICAgICAgICByZXN0YXJ0Rmxvd0ludGVydmFsPzogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwbHVnaW4sIGNvbnRhaW5lciwgcGFyYW1zLCBtb2RlLCBjYWxsYmFjaywgcmVzdGFydEZsb3dJbnRlcnZhbClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRGbG93KGNhcGFiaWxpdGllcz86IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgaWYoY2FwYWJpbGl0aWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VwcG9ydGVkU2VuZE1ldGhvZHMgPSBjYXBhYmlsaXRpZXNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAgICAgICAgIC5tYXAoY2FwID0+IGNhcC50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgLm1hcDxWZXJpZmljYXRpb25NZXRob2Q+KGNhcCA9PiBWZXJpZmljYXRpb25NZXRob2RbY2FwXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlTnVtYmVycygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvdyhtb2RlOiBUZmFNb2RlID0gdGhpcy5tb2RlKSB7XHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGZhTW9kZS5lZGl0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RWRpdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGZhTW9kZS5hZGQ6XHJcbiAgICAgICAgICAgIGNhc2UgVGZhTW9kZS5yZWdpc3RlcjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VudGVyUGhvbmVOdW1iZXIobW9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLnZlcmlmeTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZlcmlmeSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0VkaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4udGVtcGxhdGVzWydwaG9uZUVkaXQnXSwge1xyXG4gICAgICAgICAgICBoZWFkZXJUZXh0OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdwbGVhc2VfY2hvb3NlX2FfbnVtYmVyX3RvX2VkaXRfY29sb24nKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbnVtYmVyc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1waG9uZS1lZGl0LW51bWJlcnMnKVswXTtcclxuICAgICAgICB2YXIgYXJQaG9uZXNIdG1sID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBob25lTnVtYmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcGhvbmUgPSB0aGlzLnBob25lTnVtYmVyc1tpXTtcclxuICAgICAgICAgICAgdmFyIHBob25lSHRtbCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLnRlbXBsYXRlc1sncGhvbmVFZGl0RW50cnknXSwge1xyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lLnBsYWluIHx8IHBob25lLm9iZnVzY2F0ZWQsXHJcbiAgICAgICAgICAgICAgICBwaG9uZUlkOiBwaG9uZS5pZCxcclxuICAgICAgICAgICAgICAgIGVkaXQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ2VkaXQnKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFyUGhvbmVzSHRtbC5wdXNoKHBob25lSHRtbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG51bWJlcnNDb250YWluZXIuaW5uZXJIVE1MID0gYXJQaG9uZXNIdG1sLmpvaW4oJycpO1xyXG5cclxuICAgICAgICB2YXIgb25FZGl0Q2xpY2sgPSBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgdmFyIGVkaXRMaW5rID0gKGUuc3JjRWxlbWVudCB8fCBlLmN1cnJlbnRUYXJnZXQgfHwgdGhpcykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBwaG9uZSA9IHRoaXMuZ2V0UGhvbmVCeUlkKGVkaXRMaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1waG9uZWlkJykpO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5pbml0VGZhKHRoaXMubmFtZSwgVGZhTW9kZS5lZGl0LCAocmVzcG9uc2U6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlWydlcnJvckNvZGUnXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOdW1iZXJzKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RW50ZXJQaG9uZU51bWJlcihUZmFNb2RlLmVkaXQsIHRoaXMuZ2V0UGhvbmVCeUlkKHBob25lLmlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKHJlc3BvbnNlWydlcnJvck1lc3NhZ2UnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBlZGl0TGlua3M6IEhUTUxFbGVtZW50W10gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1waG9uZS1lZGl0LWxpbmsnKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVkaXRMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBiaW5kRW50ZXJLZXkoZWRpdExpbmtzW2ldKTtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWRpdExpbmtzW2ldLCAnY2xpY2snLCBvbkVkaXRDbGljayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsdWdpbi5vbkFmdGVyU2NyZWVuTG9hZCgndGZhLWVkaXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBob25lQnlJZChwaG9uZUlkOiBzdHJpbmcpOiBQaG9uZU51bWJlciB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBob25lTnVtYmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5waG9uZU51bWJlcnNbaV0uaWQgPT0gcGhvbmVJZCkgcmV0dXJuIHRoaXMucGhvbmVOdW1iZXJzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dFbnRlclBob25lTnVtYmVyKG1vZGU6IFRmYU1vZGUgPSBUZmFNb2RlLnJlZ2lzdGVyLCBwaG9uZT86IFBob25lTnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGhUZXh0ID0gdGhpcy5wbHVnaW4uZ2V0VGV4dCgndG9fa2VlcF95b3VyX2FjY291bnRfc2VjdXJlX3ZlcmlmaWNhdGlvbl9jb2Rlc193aWxsX2JlX3NlbnRfd2hlbl95b3VfbG9naW5fZnJvbV91bnRydXN0ZWRfZGV2aWNlc19kb3QnKTtcclxuICAgICAgICBpZiAobW9kZSA9PSBUZmFNb2RlLmVkaXQpIGhUZXh0ID0gdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZWRpdF95b3VyX3Bob25lX251bWJlcl93aGVyZV92ZXJpZmljYXRpb25fY29kZXNfd2lsbF9iZV9yZWNlaXZlZF9jb2xvbicpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ3Bob25lUmVnaXN0ZXInXSwge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5jb250YWluZXIuaWQsXHJcbiAgICAgICAgICAgIGhlYWRlclRleHQ6IGhUZXh0LFxyXG4gICAgICAgICAgICBzZWxlY3RfeW91cl9jb3VudHJ5OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdzZWxlY3RfeW91cl9jb3VudHJ5X2NvbG9uJyksXHJcbiAgICAgICAgICAgIGVudGVyX3lvdXJfcGhvbmVfbnVtYmVyOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdlbnRlcl95b3VyX3Bob25lX251bWJlcl9jb2xvbicpLFxyXG4gICAgICAgICAgICBnZXRfY29kZV9ieTogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZ2V0X2NvZGVfYnlfY29sb24nKSxcclxuICAgICAgICAgICAgdGV4dF9tZXNzYWdlOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCd0ZXh0X21lc3NhZ2UnKSxcclxuICAgICAgICAgICAgdm9pY2VfY2FsbDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgndm9pY2VfY2FsbCcpLFxyXG4gICAgICAgICAgICBzZW5kOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdnZXRfdGhlX2NvZGUnKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNob3dWZXJpZmljYXRpb25NZXRob2RzKCk7XHJcbiAgICAgICAgdmFyIG5leHRCdXR0b246IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtYnV0dG9uLW5leHQnKVswXTtcclxuICAgICAgICB2YXIgcHJlZml4U2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLXBob25lLXJlZ2lzdGVyLXNlbGVjdCcpWzBdIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgIHZhciB0YlBob25lUHJlZml4OiBIVE1MSW5wdXRFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtcGhvbmUtcHJlZml4JylbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB2YXIgdGJQaG9uZU51bWJlcjogSFRNTElucHV0RWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLXBob25lLW51bWJlcicpWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHR5cGVzUmFkaW9zOiBIVE1MSW5wdXRFbGVtZW50W10gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1waG9uZS1yZWdpc3Rlci10eXBlLXJhZGlvJykgYXMgSFRNTElucHV0RWxlbWVudFtdO1xyXG5cclxuXHJcbiAgICAgICAgLy8gcHJlcG9wdWxhdGVcclxuICAgICAgICBpZiAocGhvbmUgJiYgcGhvbmUucGxhaW4pIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhTZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHByZWZpeFNlbGVjdC5vcHRpb25zW2ldIGFzIEhUTUxPcHRpb25FbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHBob25lLnBsYWluLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeFNlbGVjdC5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB0YlBob25lUHJlZml4LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRiUGhvbmVOdW1iZXIudmFsdWUgPSBwaG9uZS5wbGFpbi5zdWJzdHIob3B0aW9uLnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHByZWZpeFNlbGVjdCwgJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkUHJlZml4ID0gcHJlZml4U2VsZWN0Lm9wdGlvbnNbcHJlZml4U2VsZWN0LnNlbGVjdGVkSW5kZXhdIGFzIEhUTUxPcHRpb25FbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQcmVmaXgpIHtcclxuICAgICAgICAgICAgICAgIHRiUGhvbmVQcmVmaXgudmFsdWUgPSBzZWxlY3RlZFByZWZpeC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBiaW5kRW50ZXJLZXkobmV4dEJ1dHRvbik7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIobmV4dEJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZXNSYWRpb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlc1JhZGlvc1tpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gdHlwZXNSYWRpb3NbaV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0YlBob25lUHJlZml4LnZhbHVlIHx8ICF0YlBob25lTnVtYmVyLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwaG9uZU51bVZhbHVlID0gdGJQaG9uZVByZWZpeC52YWx1ZTtcclxuICAgICAgICAgICAgLy8gVGhlIFRGQSB3aWRnZXQgc2hvdWxkIE5PVCB0cmltIHRoZSBsZWFkaW5nIHplcm8gd2hlbiB0aGUgc2VsZWN0ZWQgY291bnRyeSBwcmVmaXggaXMgSXRhbHkgKCszOSlcclxuICAgICAgICAgICAgaWYgKHRiUGhvbmVQcmVmaXgudmFsdWUgIT0gJzM5Jykge1xyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1WYWx1ZSArPSB0YlBob25lTnVtYmVyLnZhbHVlLnJlcGxhY2UoL14wKy8sICcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtVmFsdWUgKz0gdGJQaG9uZU51bWJlci52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlID09IFRmYU1vZGUuZWRpdCAmJiBwaG9uZS5pZCkgdGhpcy5waG9uZUlkVG9SZW1vdmUgPSBwaG9uZS5pZDtcclxuICAgICAgICAgICAgdmFyIG5ld1Bob25lOiBQaG9uZU51bWJlciA9IHsgcGxhaW46IHBob25lTnVtVmFsdWUgfTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kVmVyaWZpY2F0aW9uQ29kZVRvUGhvbmUobmV3UGhvbmUsIG1vZGUsIG1ldGhvZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLnNldFRleHRib3hTdWJtaXRCdXR0b24odGJQaG9uZU51bWJlciwgbmV4dEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGNyZWF0ZUFjdGlvbkludGVydmFsKHRoaXMsIGFzeW5jIChjb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNvdW50ID4gMSAmJiB0YlBob25lTnVtYmVyICYmIHRiUGhvbmVOdW1iZXIucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uaW5pdFRmYSh0aGlzLm5hbWUsIG1vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5yZXN0YXJ0Rmxvd0ludGVydmFsLCAoKSA9PiAhdGJQaG9uZU51bWJlciB8fCAhdGJQaG9uZU51bWJlci5wYXJlbnRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbHVnaW4ub25BZnRlclNjcmVlbkxvYWQoJ3RmYS1lbnRlci1waG9uZS1udW1iZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TGFzdFBob25lKCk6IFBob25lTnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waG9uZU51bWJlcnNbdGhpcy5waG9uZU51bWJlcnMubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dWZXJpZnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGhvbmVOdW1iZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIHBob25lID0gdGhpcy5nZXRMYXN0UGhvbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kVmVyaWZpY2F0aW9uQ29kZVRvUGhvbmUocGhvbmUsIFRmYU1vZGUudmVyaWZ5LCBwaG9uZS5sYXN0TWV0aG9kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RW50ZXJDb2RlKHBob25lOiBQaG9uZU51bWJlciwgbW9kZTogVGZhTW9kZSwgbWV0aG9kOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ3Bob25lRW50ZXJDb2RlJ10sIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuY29udGFpbmVyLmlkLFxyXG4gICAgICAgICAgICBoZWFkZXJUZXh0OlxyXG4gICAgICAgICAgICAgICAgbWV0aG9kID09ICdzbXMnXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnBsdWdpbi5nZXRUZXh0KCdhX3ZlcmlmaWNhdGlvbl9jb2RlX2hhc19iZWVuX3NlbnRfdG9feW91cl9waG9uZV9udW1iZXJfY29sb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnYV9waG9uZV9jYWxsX3dpdGhfeW91cl92ZXJpZmljYXRpb25fY29kZV9oYXNfYmVlbl9wbGFjZWRfdG9fY29sb24nKSxcclxuICAgICAgICAgICAgcmVzZW5kOiBtb2RlID09IFRmYU1vZGUudmVyaWZ5ID8gdGhpcy5wbHVnaW4uZ2V0VGV4dChcImRpZG4ndF9nZXRfdGhlX2NvZGVfcW1cIikgOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdjaGFuZ2VfcmVzZW5kJyksXHJcbiAgICAgICAgICAgIGVudGVyX2NvZGU6IHRoaXMucGx1Z2luLmdldFRleHQoJ2VudGVyX2NvZGVfY29sb24nKSxcclxuICAgICAgICAgICAgcmVtZW1iZXJfdGhpc19kZXZpY2U6IHRoaXMucGx1Z2luLmlzTW9iaWxlVUkgPyB0aGlzLnBsdWdpbi5nZXRUZXh0KCdyZW1lbWJlcl90aGlzX2RldmljZScpIDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncmVtZW1iZXJfdGhpc19jb21wdXRlcicpLFxyXG4gICAgICAgICAgICBzdWJtaXQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ3N1Ym1pdCcpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgc3VibWl0QnV0dG9uOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWJ1dHRvbi1zdWJtaXQnKVswXTtcclxuICAgICAgICB2YXIgcmVzZW5kTGluazogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1waG9uZS1jb2RlLXJlc2VuZCcpWzBdO1xyXG4gICAgICAgIHZhciB0YkNvZGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1jb2RlLXRleHRib3gnKVswXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHZhciBjYlJlbWVtYmVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtY29kZS1yZW1lbWJlci1jaGVja2JveCcpWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHBob25lbnVtYmVyOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLXBob25lLWNvZGUtcGhvbmVudW1iZXInKVswXTtcclxuICAgICAgICB2YXIgZGl2RXJyb3I6IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtZXJyb3InKVswXTtcclxuICAgICAgICBwaG9uZW51bWJlci5pbm5lckhUTUwgPSBwaG9uZS5wbGFpbiB8fCBwaG9uZS5vYmZ1c2NhdGVkO1xyXG5cclxuICAgICAgICBiaW5kRW50ZXJLZXkodGJDb2RlLCBzdWJtaXRCdXR0b24pO1xyXG4gICAgICAgIGJpbmRFbnRlcktleShjYlJlbWVtYmVyLCBzdWJtaXRCdXR0b24pO1xyXG4gICAgICAgIGJpbmRFbnRlcktleShzdWJtaXRCdXR0b24pO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRUZmFDb2RlKHRiQ29kZSwgY2JSZW1lbWJlcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJpbmRFbnRlcktleShyZXNlbmRMaW5rKTtcclxuICAgICAgICBjb25zdCByZXNlbmRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmluaXRUZmEodGhpcy5uYW1lLCBtb2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PSBUZmFNb2RlLnJlZ2lzdGVyIHx8IG1vZGUgPT0gVGZhTW9kZS5hZGQgfHwgbW9kZSA9PSBUZmFNb2RlLmVkaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFbnRlclBob25lTnVtYmVyKG1vZGUsIHBob25lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzZW5kKG1vZGUsIHBob25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzZW5kVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0YkNvZGUgJiYgdGJDb2RlLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlc2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5yZXN0YXJ0Rmxvd0ludGVydmFsKTtcclxuXHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIocmVzZW5kTGluaywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNlbmRBY3Rpb24oKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2VuZFRpbWVvdXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsdWdpbi5vbkFmdGVyU2NyZWVuTG9hZCgndGZhLWVudGVyLWNvZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VuZFRmYUNvZGUodGJDb2RlOiBIVE1MSW5wdXRFbGVtZW50LCBjYlJlbWVtYmVyOiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGh2VG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWJ1dHRvbi1zdWJtaXQnKVswXTtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHN1Ym1pdEJ1dHRvbiwgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVWZXJpZmljYXRpb24odGhpcy5waHZUb2tlbiwgdGJDb2RlLnZhbHVlLCAocmVzcG9uc2U6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlWydlcnJvckNvZGUnXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRXJyb3IoW3RiQ29kZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Eb25lKHJlc3BvbnNlLCByZXNwb25zZVsncHJvdmlkZXJBc3NlcnRpb24nXSwgIWNiUmVtZW1iZXIuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKHRoaXMucGx1Z2luLmdldFRleHQoJ3BsZWFzZV9lbnRlcl9hX3ZhbGlkX2NvZGUnKSwgW3RiQ29kZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KHN1Ym1pdEJ1dHRvbiwgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dSZXNlbmQobW9kZTogVGZhTW9kZSwgcGhvbmU6IFBob25lTnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dCA9IHRoaXMuc3VwcG9ydGVkU2VuZE1ldGhvZHMubGVuZ3RoID49IDIgPyB0aGlzLnBsdWdpbi5nZXRUZXh0KCdjaG9vc2VfaG93X3RvX3JlY2VpdmVfdGhlX3ZlcmlmaWNhdGlvbl9jb2RlX2NvbG9uJykgOiAnJztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ3Bob25lUmVzZW5kJ10sIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuY29udGFpbmVyLmlkLFxyXG4gICAgICAgICAgICBoZWFkZXJUZXh0LFxyXG4gICAgICAgICAgICBnZXRfY29kZV9ieTogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZ2V0X2NvZGVfYnlfY29sb24nKSxcclxuICAgICAgICAgICAgdGV4dF9tZXNzYWdlOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCd0ZXh0X21lc3NhZ2UnKSxcclxuICAgICAgICAgICAgdm9pY2VfY2FsbDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgndm9pY2VfY2FsbCcpLFxyXG4gICAgICAgICAgICBzZW5kOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdnZXRfdGhlX2NvZGUnKSxcclxuICAgICAgICAgICAgeW91cl9waG9uZV9udW1iZXI6IHRoaXMucGx1Z2luLmdldFRleHQoJ3lvdXJfcGhvbmVfbnVtYmVyX2NvbG9uJyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1ZlcmlmaWNhdGlvbk1ldGhvZHMoKTtcclxuICAgICAgICB2YXIgc2VuZEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1idXR0b24tc2VuZCcpWzBdO1xyXG4gICAgICAgIHZhciBkaXZQaG9uZU51bWJlcjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1waG9uZS1yZXNlbmQteW91cnBob25lJylbMF07XHJcbiAgICAgICAgdmFyIHR5cGVzUmFkaW9zOiBIVE1MSW5wdXRFbGVtZW50W10gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1waG9uZS1yZXNlbmQtdHlwZS1yYWRpbycpIGFzIEhUTUxJbnB1dEVsZW1lbnRbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlc1JhZGlvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodHlwZXNSYWRpb3NbaV0udmFsdWUgPT0gcGhvbmUubGFzdE1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgdHlwZXNSYWRpb3NbaV0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2UGhvbmVOdW1iZXIuaW5uZXJIVE1MID0gcGhvbmUucGxhaW4gfHwgcGhvbmUub2JmdXNjYXRlZDtcclxuXHJcbiAgICAgICAgYmluZEVudGVyS2V5KHNlbmRCdXR0b24pO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHNlbmRCdXR0b24sICdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZDogc3RyaW5nO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVzUmFkaW9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZXNSYWRpb3NbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IHR5cGVzUmFkaW9zW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZFZlcmlmaWNhdGlvbkNvZGVUb1Bob25lKHBob25lLCBtb2RlLCBtZXRob2QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vZ2lnLXRmYS1waG9uZS1yZXNlbmQteW91cnBob25lXHJcbiAgICAgICAgdGhpcy5wbHVnaW4ub25BZnRlclNjcmVlbkxvYWQoJ3RmYS1yZXNlbmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dWZXJpZmljYXRpb25NZXRob2RzKCkge1xyXG4gICAgICAgIHZhciB2ZXJpZmljYXRpb25NZXRob2RTZWN0aW9uID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtdmVyaWZpY2F0aW9uLW1ldGhvZCcpIGFzIEFycmF5PEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gICAgICAgIGlmICh2ZXJpZmljYXRpb25NZXRob2RTZWN0aW9uLmxlbmd0aCAmJiB2ZXJpZmljYXRpb25NZXRob2RTZWN0aW9uWzBdLnN0eWxlICYmIHRoaXMuc3VwcG9ydGVkU2VuZE1ldGhvZHMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgdmVyaWZpY2F0aW9uTWV0aG9kU2VjdGlvblswXS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1idXR0b24tY29udGFpbmVyJylbMF07XHJcbiAgICAgICAgICAgIGlmIChidXR0b25Db250YWluZXIgJiYgYnV0dG9uQ29udGFpbmVyLnN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuc3R5bGUubWFyZ2luVG9wID0gJzIwcHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGVOdW1iZXJzKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PSBUZmFNb2RlLmFkZCB8fCB0aGlzLm1vZGUgPT0gVGZhTW9kZS5lZGl0IHx8IHRoaXMubW9kZSA9PSBUZmFNb2RlLnZlcmlmeSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEucGhvbmUuZ2V0UmVnaXN0ZXJlZFBob25lTnVtYmVycyh0aGlzLnBhcmFtcywge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob25lTnVtYmVycyA9IHJlc3BvbnNlWydwaG9uZXMnXTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNlbmRWZXJpZmljYXRpb25Db2RlVG9QaG9uZShwaG9uZTogUGhvbmVOdW1iZXIsIG1vZGU6IFRmYU1vZGUsIG1ldGhvZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFwaG9uZS5wbGFpbiAmJiAhcGhvbmUub2JmdXNjYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2ZXJpZmljYXRpb25QYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdzbXMnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waHZUb2tlbiA9IHJlc3BvbnNlWydwaHZUb2tlbiddO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChwaG9uZS5pZCkge1xyXG4gICAgICAgICAgICB2ZXJpZmljYXRpb25QYXJhbXNbJ3Bob25lSUQnXSA9IHBob25lLmlkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZlcmlmaWNhdGlvblBhcmFtc1sncGhvbmUnXSA9IHBob25lLnBsYWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5waHZUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLnBob25lLnNlbmRWZXJpZmljYXRpb25Db2RlKHRoaXMucGFyYW1zLCB2ZXJpZmljYXRpb25QYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuc2hvd0VudGVyQ29kZShwaG9uZSwgbW9kZSwgbWV0aG9kKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcGxldGVWZXJpZmljYXRpb24ocGh2VG9rZW46IHN0cmluZywgY29kZTogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBPYmplY3QpID0+IHZvaWQpIHtcclxuICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEucGhvbmUuY29tcGxldGVWZXJpZmljYXRpb24odGhpcy5wYXJhbXMsIHtcclxuICAgICAgICAgICAgcGh2VG9rZW46IHBodlRva2VuLFxyXG4gICAgICAgICAgICBjb2RlOiBjb2RlLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Eb25lKHJlc3BvbnNlOiBPYmplY3QsIHByb3ZpZGVyQXNzZXJ0aW9uOiBzdHJpbmcsIGlzVGVtcDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLnBob25lSWRUb1JlbW92ZSkge1xyXG4gICAgICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEucGhvbmUucmVtb3ZlUGhvbmUodGhpcy5wYXJhbXMsIHtcclxuICAgICAgICAgICAgICAgIHBob25lSWQ6IHRoaXMucGhvbmVJZFRvUmVtb3ZlLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKHJlc3BvbnNlLCBwcm92aWRlckFzc2VydGlvbiwgaXNUZW1wKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2socmVzcG9uc2UsIHByb3ZpZGVyQXNzZXJ0aW9uLCBpc1RlbXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlVGZhUHJvdmlkZXIgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL0Jhc2VUZmFQcm92aWRlcic7XHJcbmltcG9ydCB7IFRmYVBsdWdpbiwgVGZhTW9kZSB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQbHVnaW4nO1xyXG5pbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XHJcbmltcG9ydCB7IEJhY2t1cENvZGVzTWFuYWdlciwgSUJhY2t1cENvZGVzTWFuYWdlciB9IGZyb20gXCIuLi9oZWxwZXJzL0JhY2t1cENvZGVzTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBiaW5kRW50ZXJLZXksIGNyZWF0ZUFjdGlvbkludGVydmFsLCBnZXRFbGVtZW50QnlDbGFzc05hbWUgfSBmcm9tIFwiLi4vaGVscGVycy9VdGlsc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgVGZhUHJvdmlkZXJDYWxsYmFjayA9IChyZXNwb25zZTogT2JqZWN0LCBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nLCB0ZW1wRGV2aWNlOiBib29sZWFuKSA9PiB2b2lkO1xyXG5cclxuY29uc3QgUG9sbGluZ0xpbWl0TWlsbGlzID0gMTAwMCAqIDYwICogMjsgLy8gMiBtaW5cclxuY29uc3QgUG9sbGluZ0ludGVydmFsTWlsbGlzID0gMTAwMCAqIDM7IC8vIDMgc2VjXHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaFRmYVByb3ZpZGVyIGV4dGVuZHMgQmFzZVRmYVByb3ZpZGVyIHtcclxuXHJcbiAgICBwcml2YXRlIF9wb2xsaW5nU3RhcnRUaW1lID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwbHVnaW46IFRmYVBsdWdpbixcclxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHBhcmFtczogT2JqZWN0LFxyXG4gICAgICAgIG1vZGU6IFRmYU1vZGUsXHJcbiAgICAgICAgY2FsbGJhY2s6IFRmYVByb3ZpZGVyQ2FsbGJhY2ssXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYmFja3VwQ29kZXNNYW5hZ2VyOiBJQmFja3VwQ29kZXNNYW5hZ2VyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3BvbGxpbmdMaW1pdE1pbGxpcyA9IFBvbGxpbmdMaW1pdE1pbGxpcyxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9wb2xsaW5nSW50ZXJ2YWxNaWxsaXMgPSBQb2xsaW5nSW50ZXJ2YWxNaWxsaXNcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHBsdWdpbiwgY29udGFpbmVyLCBwYXJhbXMsIG1vZGUsIGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnZ2lneWFQdXNoJztcclxuICAgICAgICBpZiggIXRoaXMuX2JhY2t1cENvZGVzTWFuYWdlcilcclxuICAgICAgICAgICAgdGhpcy5fYmFja3VwQ29kZXNNYW5hZ2VyID0gbmV3IEJhY2t1cENvZGVzTWFuYWdlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrSXNWZXJpZmllZCgpOiB2b2lkIHtcclxuICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEucHVzaC5pc1ZlcmlmaWVkKHtcclxuICAgICAgICAgICAgZ2lneWFBc3NlcnRpb246IHRoaXMucGFyYW1zWydnaWd5YUFzc2VydGlvbiddLFxyXG4gICAgICAgICAgICByZWdUb2tlbjogdGhpcy5wYXJhbXNbJ3JlZ1Rva2VuJ10sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiByZXMgPT4gdGhpcy5vbklzVmVyaWZpZWRSZXNwb25zZShyZXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgb25Jc1ZlcmlmaWVkUmVzcG9uc2UocmVzKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGVycm9yIChzdG9wIHBvbGxpbmcpXHJcbiAgICAgICAgaWYgKHJlcy5lcnJvckNvZGUgIT0gR1NFcnJvcnMuT0spXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRXJyb3IoJ2ZhaWxlZCB0byBjaGVjayBwdXNoIHZlcmlmaWNhdGlvbiBzdGF0ZScsIHttZXRob2Q6ICdpc1ZlcmlmaWVkJywgcmVzfSk7XHJcblxyXG4gICAgICAgIC8vIHN1Y2Nlc3NcclxuICAgICAgICBpZiAocmVzLnByb3ZpZGVyQXNzZXJ0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vblB1c2hWZXJpZmllZChyZXMpO1xyXG5cclxuICAgICAgICAvLyBrZWVwIHBvbGxpbmdcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ29udGludWVQb2xsaW5nKCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSXNWZXJpZmllZCgpO1xyXG4gICAgICAgIH0sIHRoaXMuX3BvbGxpbmdJbnRlcnZhbE1pbGxpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFBvbGxpbmcoKXtcclxuICAgICAgICB0aGlzLl9wb2xsaW5nU3RhcnRUaW1lID0gZ2lneWEudXRpbHMuZGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmNoZWNrSXNWZXJpZmllZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcFBvbGxpbmcoKXtcclxuICAgICAgICB0aGlzLl9wb2xsaW5nU3RhcnRUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3VsZENvbnRpbnVlUG9sbGluZygpe1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5zaG91bGRTdG9wUG9sbGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvdWxkU3RvcFBvbGxpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gZ2lneWEudXRpbHMuZGF0ZS5ub3coKTtcclxuICAgICAgICBjb25zdCBwb2xsaW5nTGltaXRSZWFjaGVkID0gbm93IC0gdGhpcy5fcG9sbGluZ1N0YXJ0VGltZSA+PSB0aGlzLl9wb2xsaW5nTGltaXRNaWxsaXM7XHJcbiAgICAgICAgcmV0dXJuIHBvbGxpbmdMaW1pdFJlYWNoZWQgfHwgIXRoaXMuaXNBY3RpdmUoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBvblB1c2hWZXJpZmllZChyZXNwb25zZSl7XHJcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKHJlc3BvbnNlLCByZXNwb25zZVsncHJvdmlkZXJBc3NlcnRpb24nXSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkVycm9yKGxvZz86IHN0cmluZywgZGV0YWlscz86IHtbazogc3RyaW5nXTogYW55fSwgZXJyTXNnS2V5ID0gJ2FuX2Vycm9yX2hhc19vY2N1cnJlZF9wbGVhc2VfdHJ5X2FnYWluX2xhdGVyJyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChsb2cpIGdpZ3lhLmxvZ2dlci5lcnJvcihsb2csIGRldGFpbHMpO1xyXG4gICAgICAgIGNvbnN0IGVyciA9IHRoaXMucGx1Z2luLmdldFRleHQoZXJyTXNnS2V5KSB8fCAnRXJyb3InO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3dFcnJvcihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TZW5kVmVyaWZpY2F0aW9uUmVzcG9uc2UocmVzKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3MoKTtcclxuICAgICAgICBpZiAocmVzWydlcnJvckNvZGUnXSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZlcmlmeU1vZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFBvbGxpbmcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IoJ2ZhaWxlZCB0byBzZW5kIHB1c2ggdGZhIHZlcmlmaWNhdGlvbicsIHttZXRob2Q6ICdzZW5kVmVyaWZpY2F0aW9uJywgcmVzfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRQdXNoVmVyaWZpY2F0aW9uRmxvdygpIHtcclxuICAgICAgICB0aGlzLnNob3dQcm9ncmVzcygpO1xyXG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5wdXNoLnNlbmRWZXJpZmljYXRpb24oe1xyXG4gICAgICAgICAgICBnaWd5YUFzc2VydGlvbjogdGhpcy5wYXJhbXNbJ2dpZ3lhQXNzZXJ0aW9uJ10sXHJcbiAgICAgICAgICAgIHJlZ1Rva2VuOiB0aGlzLnBhcmFtc1sncmVnVG9rZW4nXSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IHJlcyA9PiB0aGlzLm9uU2VuZFZlcmlmaWNhdGlvblJlc3BvbnNlKHJlcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2VuZFB1c2hOb3RpZmljYXRpb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7IC8vIGNsaWNrIGhhbmRsZXJcclxuICAgICAgICB0aGlzLnN0b3BQb2xsaW5nKCk7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4uaW5pdFRmYSh0aGlzLm5hbWUsIHRoaXMubW9kZSwgcmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc1snZXJyb3JDb2RlJ10gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc3RhcnRQcm92aWRlckZsb3coe25hbWU6IHRoaXMubmFtZX0sIHRoaXMubW9kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIHNob3VsZCBub3QgaGFwcGVuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXJyb3IoJ2luaXRUZmEgZmFpbGVkJywge21ldGhvZDogJ3Jlc2VuZFB1c2hOb3RpZmljYXRpb25DbGlja0hhbmRsZXInLCByZXN9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHNob3dWZXJpZnlNb2RlKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ3B1c2hWZXJpZmljYXRpb25QaG9uZSddLCB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmNvbnRhaW5lci5pZCxcclxuICAgICAgICAgICAgcmVzZW5kUHVzaE5vdGlmaWNhdGlvbjogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncmVzZW5kX3B1c2hfbm90aWZpY2F0aW9uJyksXHJcbiAgICAgICAgICAgIGNhbGxfdG9fYWN0aW9uOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdwdXNoX3RmYV9jYWxsX3RvX2FjdGlvbicpLFxyXG4gICAgICAgICAgICB1c2VCYWNrdXBDb2RlOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdjYW50X2FjY2Vzc191c2VfYmFja3VwX2NvZGVzJyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZUJhY2t1cENvZGVzID0gdGhpcy5nZXRVc2VCYWNrdXBDb2Rlc0J1dHRvbigpO1xyXG4gICAgICAgIGNvbnN0IHJlc2VuZFB1c2hOb3RpZmljYXRpb24gPSB0aGlzLmdldFJlc2VuZEJ1dHRvbigpO1xyXG5cclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih1c2VCYWNrdXBDb2RlcywgJ2NsaWNrJywgdGhpcy51c2VCYWNrdXBDb2Rlc0NsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIocmVzZW5kUHVzaE5vdGlmaWNhdGlvbiwgJ2NsaWNrJywgdGhpcy5yZXNlbmRQdXNoTm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbHVnaW4ub25BZnRlclNjcmVlbkxvYWQoJ3RmYS1wdXNoLXZlcmlmaWNhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXNlQmFja3VwQ29kZXNDbGlja0hhbmRsZXIgPSAoKSA9PiB7IC8vIGNsaWNrIGhhbmRsZXJcclxuICAgICAgICB0aGlzLnN0b3BQb2xsaW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLnRlbXBsYXRlc1sncHVzaFZlcmlmaWNhdGlvbkJhY2t1cENvZGVzJ10sIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuY29udGFpbmVyLmlkLFxyXG4gICAgICAgICAgICBjYWxsX3RvX2FjdGlvbjogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZW50ZXJfYmFja3VwX2NvZGUnKSxcclxuICAgICAgICAgICAgcmVzZW5kUHVzaE5vdGlmaWNhdGlvbjogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncmVzZW5kX3B1c2hfbm90aWZpY2F0aW9uJyksXHJcbiAgICAgICAgICAgIHVzZUJhY2t1cENvZGU6IHRoaXMucGx1Z2luLmdldFRleHQoJ2NhbnRfYWNjZXNzX3VzZV9iYWNrdXBfY29kZXMnKSxcclxuICAgICAgICAgICAgc3VibWl0OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdzdWJtaXQnKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5nZXRTdWJtaXRCdXR0b24oKTtcclxuICAgICAgICBjb25zdCBiYWNrdXBDb2RlSW5wdXRFbCA9IHRoaXMuZ2V0QmFja3VwQ29kZUlucHV0KCk7XHJcbiAgICAgICAgY29uc3QgcmVzZW5kUHVzaE5vdGlmaWNhdGlvbiA9IHRoaXMuZ2V0UmVzZW5kQnV0dG9uKCk7XHJcblxyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHJlc2VuZFB1c2hOb3RpZmljYXRpb24sICdjbGljaycsIHRoaXMucmVzZW5kUHVzaE5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoc3VibWl0QnV0dG9uLCAnY2xpY2snLCB0aGlzLnN1Ym1pdEJhY2t1cENvZGVDbGlja0hhbmRsZXIpO1xyXG5cclxuICAgICAgICBiaW5kRW50ZXJLZXkoYmFja3VwQ29kZUlucHV0RWwsIHN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgYmluZEVudGVyS2V5KHN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgYmFja3VwQ29kZUlucHV0RWwuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbHVnaW4ub25BZnRlclNjcmVlbkxvYWQoJ3RmYS1iYWNrdXAtY29kZXMnKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzdWJtaXRCYWNrdXBDb2RlQ2xpY2tIYW5kbGVyID0gKCkgPT4geyAvLyBjbGljayBoYW5kbGVyXHJcblxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZ2V0U3VibWl0QnV0dG9uKCk7XHJcbiAgICAgICAgY29uc3QgYmFja3VwQ29kZUlucHV0RWwgPSB0aGlzLmdldEJhY2t1cENvZGVJbnB1dCgpO1xyXG5cclxuICAgICAgICBjb25zdCBiYWNrdXBDb2RlID0gYmFja3VwQ29kZUlucHV0RWwudmFsdWU7XHJcbiAgICAgICAgaWYgKCFiYWNrdXBDb2RlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgncGxlYXNlX2VudGVyX2FfdmFsaWRfY29kZScpLCBbYmFja3VwQ29kZUlucHV0RWxdKTtcclxuXHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHN1Ym1pdEJ1dHRvbiwgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLmJhY2t1cGNvZGVzLnZlcmlmeSh0aGlzLnBhcmFtcywge1xyXG4gICAgICAgICAgICBjb2RlOiBiYWNrdXBDb2RlLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVsnZXJyb3JDb2RlJ10gPT0gMClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vblB1c2hWZXJpZmllZChyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoc3VibWl0QnV0dG9uLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuZ2V0QmFja3VwQ29kZUVycm9yTWVzc2FnZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihlcnIsIFtiYWNrdXBDb2RlSW5wdXRFbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgZ2V0QmFja3VwQ29kZUVycm9yTWVzc2FnZShyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlWydlcnJvckRldGFpbHMnXSA9PT0gJ1dyb25nIHZlcmlmaWNhdGlvbiBjb2RlJ1xyXG4gICAgICAgICAgICA/IHRoaXMucGx1Z2luLmdldFRleHQoJ3BsZWFzZV9lbnRlcl9hX3ZhbGlkX2NvZGUnKVxyXG4gICAgICAgICAgICA6ICh0aGlzLnBsdWdpbi5nZXRUZXh0KCdhbl9lcnJvcl9oYXNfb2NjdXJyZWRfcGxlYXNlX3RyeV9hZ2Fpbl9sYXRlcicpIHx8ICdFcnJvcicpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RWRpdE1vZGUoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93QmFja3VwQ29kZXNFZGl0TW9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0JhY2t1cENvZGVzRWRpdE1vZGUob3JpZ2luYWxCYWNrdXBDb2RlcyA9IG51bGwpIHtcclxuICAgICAgICBjcmVhdGVBY3Rpb25JbnRlcnZhbCh0aGlzLCBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiYWNrdXBDb2RlcyA9IG9yaWdpbmFsQmFja3VwQ29kZXM7XHJcbiAgICAgICAgICAgIGlmICghYmFja3VwQ29kZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRCYWNrdXBDb2Rlc1Jlc3BvbnNlID0gYXdhaXQgdGhpcy5fYmFja3VwQ29kZXNNYW5hZ2VyLmdldEJhY2t1cENvZGVzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0QmFja3VwQ29kZXNSZXNwb25zZVsnZXJyb3JDb2RlJ10gIT09IEdTRXJyb3JzLk9LIHx8ICFnZXRCYWNrdXBDb2Rlc1Jlc3BvbnNlLmJhY2t1cENvZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5wbHVnaW4udGVtcGxhdGVzWydlcnJvciddO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dFcnJvcih0aGlzLnBsdWdpbi5nZXRUZXh0KCdhbl9lcnJvcl9oYXNfb2NjdXJyZWRfcGxlYXNlX3RyeV9hZ2Fpbl9sYXRlcicpIHx8ICdFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmFja3VwQ29kZXMgPSBnZXRCYWNrdXBDb2Rlc1Jlc3BvbnNlLmJhY2t1cENvZGVzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnRlbXBsYXRlc1sndG90cEJhY2t1cENvZGVzJ10sXHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyVGV4dDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncHJpbnRfYmFja3VwX2NvZGVzX2ludHJvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdwcmludCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZU5ld0NvZGVzOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdnZW5lcmF0ZV9iYWNrdXBfY29kZXMnKSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhY2t1cENvZGVzTWFuYWdlci5wcmVwYXJlQmFja3VwQ29kZXNGb3JWaWV3KGJhY2t1cENvZGVzKSxcclxuICAgICAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFja3VwQ29kZXNUYWJsZSA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLXRvdHAtYmFja3VwLWNvZGVzJylbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHByaW50QnV0dG9uID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1iYWNrdXAtY29kZXMtcHJpbnQtYnRuJylbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRlTmV3Q29kZXNMaW5rID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtZ2VuZXJhdGUtbmV3LWNvZGVzJylbMF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzTmF0aXZlTW9iaWxlQXBwKSB7XHJcbiAgICAgICAgICAgICAgICBwcmludEJ1dHRvbi5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZU5ld0NvZGVzTGluay5mb2N1cygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJpbnRCdXR0b24uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIocHJpbnRCdXR0b24sICdjbGljaycsICgpID0+IHRoaXMuX2JhY2t1cENvZGVzTWFuYWdlci5wcmludEJhY2t1cENvZGVzKGJhY2t1cENvZGVzVGFibGUub3V0ZXJIVE1MKSk7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGdlbmVyYXRlTmV3Q29kZXNMaW5rLCAnY2xpY2snLCAoKSA9PiB0aGlzLnNob3dHZW5lcmF0ZU5ld0NvZGVzQ29uZmlybWF0aW9uKGJhY2t1cENvZGVzKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5vbkFmdGVyU2NyZWVuTG9hZCgndGZhLWJhY2t1cC1jb2RlcycsIHRoaXMucGx1Z2luLmdldFRleHQoJ2JhY2t1cF9jb2RlcycpKTtcclxuICAgICAgICB9LCB0aGlzLnJlc3RhcnRGbG93SW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0dlbmVyYXRlTmV3Q29kZXNDb25maXJtYXRpb24ob3JpZ2luYWxCYWNrdXBDb2Rlcykge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLnRlbXBsYXRlc1sndG90cEdlbmVyYXRlTmV3Q29kZXNDb25maXJtYXRpb24nXSwge1xyXG4gICAgICAgICAgICByZXNldENvZGVzUXVlc3Rpb246IHRoaXMucGx1Z2luLmdldFRleHQoJ3Jlc2V0X2NvZGVzX3F1ZXN0aW9uJyksXHJcbiAgICAgICAgICAgIHllczogdGhpcy5wbHVnaW4uZ2V0VGV4dCgneWVzJyksXHJcbiAgICAgICAgICAgIGNhbmNlbDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnY2FuY2VsJyksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctYmFja3VwLWNvZGVzLWNvbmZpcm0nKVswXTtcclxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLWJhY2t1cC1jb2Rlcy1jYW5jZWwnKVswXTtcclxuICAgICAgICBjb25maXJtQnV0dG9uLmZvY3VzKCk7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b24sXHJcbiAgICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICAgIGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0ZUJhY2t1cENvZGVzUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9iYWNrdXBDb2Rlc01hbmFnZXIuZ2VuZXJhdGVOZXdDb2RlcygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRlQmFja3VwQ29kZXNSZXNwb25zZVsnZXJyb3JDb2RlJ10gIT09IEdTRXJyb3JzLk9LIHx8ICFnZW5lcmF0ZUJhY2t1cENvZGVzUmVzcG9uc2UuYmFja3VwQ29kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ2Vycm9yJ107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0Vycm9yKHRoaXMucGx1Z2luLmdldFRleHQoJ2FuX2Vycm9yX2hhc19vY2N1cnJlZF9wbGVhc2VfdHJ5X2FnYWluX2xhdGVyJykgfHwgJ0Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNob3dCYWNrdXBDb2Rlc0VkaXRNb2RlKGdlbmVyYXRlQmFja3VwQ29kZXNSZXNwb25zZS5iYWNrdXBDb2Rlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihjYW5jZWxCdXR0b24sICdjbGljaycsICgpID0+IHRoaXMuc2hvd0JhY2t1cENvZGVzRWRpdE1vZGUob3JpZ2luYWxCYWNrdXBDb2RlcykpO1xyXG4gICAgICAgIHRoaXMucGx1Z2luLm9uQWZ0ZXJTY3JlZW5Mb2FkKCd0ZmEtYmFja3VwLWNvZGVzLXJlZ2VuZXJhdGUnLCB0aGlzLnBsdWdpbi5nZXRUZXh0KCdiYWNrdXBfY29kZXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdWJtaXRCdXR0b24oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiBnZXRFbGVtZW50QnlDbGFzc05hbWU8SFRNTEJ1dHRvbkVsZW1lbnQ+KHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1idXR0b24tc3VibWl0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCYWNrdXBDb2RlSW5wdXQoKTogSFRNTElucHV0RWxlbWVudCAge1xyXG4gICAgICAgIHJldHVybiBnZXRFbGVtZW50QnlDbGFzc05hbWU8SFRNTElucHV0RWxlbWVudD4odGhpcy5jb250YWluZXIsICdnaWctdGZhLWNvZGUtdGV4dGJveCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVzZW5kQnV0dG9uKCk6IEhUTUxBbmNob3JFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudEJ5Q2xhc3NOYW1lPEhUTUxBbmNob3JFbGVtZW50Pih0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtcmVzZW5kLXB1c2gtbm90aWZpY2F0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRVc2VCYWNrdXBDb2Rlc0J1dHRvbigpOiBIVE1MQW5jaG9yRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRCeUNsYXNzTmFtZTxIVE1MQW5jaG9yRWxlbWVudD4odGhpcy5jb250YWluZXIsICdnaWctdGZhLXVzZS1iYWNrdXAtY29kZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEZsb3coY2FwYWJpbGl0aWVzPzogc3RyaW5nW10pIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRmYU1vZGUudmVyaWZ5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFB1c2hWZXJpZmljYXRpb25GbG93KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLmVkaXQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFZGl0TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VUZmFQcm92aWRlciB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvQmFzZVRmYVByb3ZpZGVyJztcclxuaW1wb3J0IHsgVGZhUGx1Z2luLCBUZmFNb2RlIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVBsdWdpbic7XHJcbmltcG9ydCB7IEdTRXJyb3JzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzJztcclxuaW1wb3J0IHsgYmluZEVudGVyS2V5LCBjcmVhdGVBY3Rpb25JbnRlcnZhbCB9IGZyb20gXCIuLi9oZWxwZXJzL1V0aWxzXCI7XHJcbmltcG9ydCB7IEJhY2t1cENvZGVzTWFuYWdlciwgSUJhY2t1cENvZGVzTWFuYWdlciB9IGZyb20gXCIuLi9oZWxwZXJzL0JhY2t1cENvZGVzTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvdHBUZmFQcm92aWRlciBleHRlbmRzIEJhc2VUZmFQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgcXJDb2RlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2N0VG9rZW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwbHVnaW46IFRmYVBsdWdpbixcclxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHBhcmFtczogT2JqZWN0LFxyXG4gICAgICAgIG1vZGU6IFRmYU1vZGUsXHJcbiAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogT2JqZWN0LCBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nLCB0ZW1wRGV2aWNlOiBib29sZWFuKSA9PiB2b2lkLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2JhY2t1cENvZGVzTWFuYWdlcjogSUJhY2t1cENvZGVzTWFuYWdlclxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocGx1Z2luLCBjb250YWluZXIsIHBhcmFtcywgbW9kZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdnaWd5YVRvdHAnO1xyXG4gICAgICAgIGlmKCAhdGhpcy5fYmFja3VwQ29kZXNNYW5hZ2VyKVxyXG4gICAgICAgICAgICB0aGlzLl9iYWNrdXBDb2Rlc01hbmFnZXIgPSBuZXcgQmFja3VwQ29kZXNNYW5hZ2VyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEZsb3coY2FwYWJpbGl0aWVzPzogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3coKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLnJlZ2lzdGVyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVnaXN0ZXJNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLnZlcmlmeTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZlcmlmeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRmYU1vZGUuZWRpdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VkaXRNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93UmVnaXN0ZXJNb2RlKCkge1xyXG4gICAgICAgIGNyZWF0ZUFjdGlvbkludGVydmFsKHRoaXMsIGFzeW5jIChjb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFmdGVySW5pdFRGQSA9IChpbml0VEZBUmVzcG9uc2U/KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5pdFRGQVJlc3BvbnNlICYmIGluaXRURkFSZXNwb25zZVsnZXJyb3JDb2RlJ10gIT09IEdTRXJyb3JzLk9LKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEudG90cC5yZWdpc3Rlcih0aGlzLnBhcmFtcywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVsnZXJyb3JDb2RlJ10gIT09IEdTRXJyb3JzLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ2Vycm9yJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgnYW5fZXJyb3JfaGFzX29jY3VycmVkX3BsZWFzZV90cnlfYWdhaW5fbGF0ZXInKSB8fCAnRXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaXN0cmF0aW9uUHJvY2VzcyhyZXNwb25zZVsncXJDb2RlJ10sIHJlc3BvbnNlWydzY3RUb2tlbiddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcih0aGlzLnBsdWdpbi5nZXRUZXh0KCd0b3RwX3Nlc3Npb25fZXhwaXJlZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uaW5pdFRmYSh0aGlzLm5hbWUsIFRmYU1vZGUucmVnaXN0ZXIsIGFmdGVySW5pdFRGQSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZmlyc3QgcmVuZGVyIC0gaW5pdFRGQSBpcyBjYWxsZWQgYnkgdGhlIHBsdWdpbiBpdHNlbGZcclxuICAgICAgICAgICAgICAgIGFmdGVySW5pdFRGQSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5yZXN0YXJ0Rmxvd0ludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dWZXJpZnlNb2RlKHVzaW5nQmFja3VwQ29kZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4udGVtcGxhdGVzWyd0b3RwVmVyaWZ5J10sIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuY29udGFpbmVyLmlkLFxyXG4gICAgICAgICAgICBlbnRlcl9jb2RlOiB1c2luZ0JhY2t1cENvZGUgPyB0aGlzLnBsdWdpbi5nZXRUZXh0KCdlbnRlcl9iYWNrdXBfY29kZScpIDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZW50ZXJfdG90cF9jb2RlJyksXHJcbiAgICAgICAgICAgIHJlbWVtYmVyX3RoaXNfZGV2aWNlOiB0aGlzLnBsdWdpbi5pc01vYmlsZVVJID8gdGhpcy5wbHVnaW4uZ2V0VGV4dCgncmVtZW1iZXJfdGhpc19kZXZpY2UnKSA6IHRoaXMucGx1Z2luLmdldFRleHQoJ3JlbWVtYmVyX3RoaXNfY29tcHV0ZXInKSxcclxuICAgICAgICAgICAgc3VibWl0OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdzdWJtaXQnKSxcclxuICAgICAgICAgICAgdXNlQmFja3VwQ29kZTogdXNpbmdCYWNrdXBDb2RlID8gdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZW50ZXJfdG90cF9jb2RlJykgOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdjYW50X2FjY2Vzc191c2VfYmFja3VwX2NvZGVzJyksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJWZXJpZmljYXRpb25TZWN0aW9uKHVzaW5nQmFja3VwQ29kZSk7XHJcbiAgICAgICAgY29uc3QgdXNlQmFja3VwQ29kZUxpbmsgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS11c2UtYmFja3VwLWNvZGUnKTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih1c2VCYWNrdXBDb2RlTGlua1swXSwgJ2NsaWNrJywgKCkgPT4gdGhpcy5zaG93VmVyaWZ5TW9kZSghdXNpbmdCYWNrdXBDb2RlKSk7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4ub25BZnRlclNjcmVlbkxvYWQoJ3RmYS10b3RwLXZlcmlmaWNhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0VkaXRNb2RlKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLnRlbXBsYXRlc1sndG90cEVkaXQnXSwge1xyXG4gICAgICAgICAgICBoZWFkZXJUZXh0OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCd0b3RwX3ZlcmlmaWNhdGlvbl9zZXR0aW5nc19pbnRybycpLFxyXG4gICAgICAgICAgICBiYWNrdXBDb2RlczogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnYmFja3VwX2NvZGVzJyksXHJcbiAgICAgICAgICAgIGNoYW5nZURldmljZTogdGhpcy5wbHVnaW4uZ2V0VGV4dCgndG90cF9jaGFuZ2VfZGV2aWNlJyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYW5nZURldmljZUJ1dHRvbiA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWJ1dHRvbi1jaGFuZ2UtZGV2aWNlJylbMF07XHJcbiAgICAgICAgY29uc3QgYmFja3VwQ29kZXNCdXR0b24gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1idXR0b24tYmFja3VwLWNvZGVzJylbMF07XHJcblxyXG4gICAgICAgIGNoYW5nZURldmljZUJ1dHRvbi5mb2N1cygpO1xyXG5cclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihjaGFuZ2VEZXZpY2VCdXR0b24sICdjbGljaycsICgpID0+IHRoaXMuc2hvd0NoYW5nZURldmljZVNjcmVlbigpKTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihiYWNrdXBDb2Rlc0J1dHRvbiwgJ2NsaWNrJywgKCkgPT4gdGhpcy5zaG93QmFja3VwQ29kZXNTY3JlZW4oKSk7XHJcblxyXG4gICAgICAgIHRoaXMucGx1Z2luLm9uQWZ0ZXJTY3JlZW5Mb2FkKCd0ZmEtZWRpdCcsIHRoaXMucGx1Z2luLmdldFRleHQoJ3RvdHBfdmVyaWZpY2F0aW9uX3NldHRpbmdzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0JhY2t1cENvZGVzU2NyZWVuKG9yaWdpbmFsQmFja3VwQ29kZXMgPSBudWxsKSB7XHJcbiAgICAgICAgY3JlYXRlQWN0aW9uSW50ZXJ2YWwodGhpcywgYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgICAgICBsZXQgYmFja3VwQ29kZXMgPSBvcmlnaW5hbEJhY2t1cENvZGVzO1xyXG4gICAgICAgICAgICBpZiAoIWJhY2t1cENvZGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0QmFja3VwQ29kZXNSZXNwb25zZSA9IGF3YWl0IHRoaXMuX2JhY2t1cENvZGVzTWFuYWdlci5nZXRCYWNrdXBDb2RlcygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdldEJhY2t1cENvZGVzUmVzcG9uc2VbJ2Vycm9yQ29kZSddICE9PSBHU0Vycm9ycy5PSyB8fCAhZ2V0QmFja3VwQ29kZXNSZXNwb25zZS5iYWNrdXBDb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMucGx1Z2luLnRlbXBsYXRlc1snZXJyb3InXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgnYW5fZXJyb3JfaGFzX29jY3VycmVkX3BsZWFzZV90cnlfYWdhaW5fbGF0ZXInKSB8fCAnRXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJhY2t1cENvZGVzID0gZ2V0QmFja3VwQ29kZXNSZXNwb25zZS5iYWNrdXBDb2RlcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ3RvdHBCYWNrdXBDb2RlcyddLFxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMub2JqZWN0Lm1lcmdlKFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlclRleHQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ3ByaW50X2JhY2t1cF9jb2Rlc19pbnRybycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncHJpbnQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVOZXdDb2RlczogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZ2VuZXJhdGVfYmFja3VwX2NvZGVzJyksXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYWNrdXBDb2Rlc01hbmFnZXIucHJlcGFyZUJhY2t1cENvZGVzRm9yVmlldyhiYWNrdXBDb2RlcyksXHJcbiAgICAgICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2t1cENvZGVzVGFibGUgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS10b3RwLWJhY2t1cC1jb2RlcycpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBwcmludEJ1dHRvbiA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctYmFja3VwLWNvZGVzLXByaW50LWJ0bicpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0ZU5ld0NvZGVzTGluayA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWdlbmVyYXRlLW5ldy1jb2RlcycpWzBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc05hdGl2ZU1vYmlsZUFwcCkge1xyXG4gICAgICAgICAgICAgICAgcHJpbnRCdXR0b24ucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVOZXdDb2Rlc0xpbmsuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByaW50QnV0dG9uLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHByaW50QnV0dG9uLCAnY2xpY2snLCAoKSA9PiB0aGlzLl9iYWNrdXBDb2Rlc01hbmFnZXIucHJpbnRCYWNrdXBDb2RlcyhiYWNrdXBDb2Rlc1RhYmxlLm91dGVySFRNTCkpO1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihnZW5lcmF0ZU5ld0NvZGVzTGluaywgJ2NsaWNrJywgKCkgPT4gdGhpcy5zaG93R2VuZXJhdGVOZXdDb2Rlc0NvbmZpcm1hdGlvbihiYWNrdXBDb2RlcykpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ub25BZnRlclNjcmVlbkxvYWQoJ3RmYS1iYWNrdXAtY29kZXMnLCB0aGlzLnBsdWdpbi5nZXRUZXh0KCdiYWNrdXBfY29kZXMnKSk7XHJcbiAgICAgICAgfSwgdGhpcy5yZXN0YXJ0Rmxvd0ludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dDaGFuZ2VEZXZpY2VTY3JlZW4oKSB7XHJcbiAgICAgICAgY3JlYXRlQWN0aW9uSW50ZXJ2YWwodGhpcyxhc3luYyAoY291bnQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5pbml0VGZhKHRoaXMubmFtZSwgVGZhTW9kZS5lZGl0LCBpbml0VEZBUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluaXRURkFSZXNwb25zZSAmJiBpbml0VEZBUmVzcG9uc2VbJ2Vycm9yQ29kZSddICE9PSBHU0Vycm9ycy5PSykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLnRvdHAucmVnaXN0ZXIodGhpcy5wYXJhbXMsIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbJ2Vycm9yQ29kZSddICE9PSBHU0Vycm9ycy5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5wbHVnaW4udGVtcGxhdGVzWydlcnJvciddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0Vycm9yKHRoaXMucGx1Z2luLmdldFRleHQoJ2FuX2Vycm9yX2hhc19vY2N1cnJlZF9wbGVhc2VfdHJ5X2FnYWluX2xhdGVyJykgfHwgJ0Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lzdHJhdGlvblByb2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VbJ3FyQ29kZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlWydzY3RUb2tlbiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZmEtdG90cC1jaGFuZ2UtZGV2aWNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5nZXRUZXh0KCd0b3RwX2NoYW5nZV9kZXZpY2UnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgndG90cF9zZXNzaW9uX2V4cGlyZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHRoaXMucmVzdGFydEZsb3dJbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93R2VuZXJhdGVOZXdDb2Rlc0NvbmZpcm1hdGlvbihvcmlnaW5hbEJhY2t1cENvZGVzKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4udGVtcGxhdGVzWyd0b3RwR2VuZXJhdGVOZXdDb2Rlc0NvbmZpcm1hdGlvbiddLCB7XHJcbiAgICAgICAgICAgIHJlc2V0Q29kZXNRdWVzdGlvbjogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncmVzZXRfY29kZXNfcXVlc3Rpb24nKSxcclxuICAgICAgICAgICAgeWVzOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCd5ZXMnKSxcclxuICAgICAgICAgICAgY2FuY2VsOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdjYW5jZWwnKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1iYWNrdXAtY29kZXMtY29uZmlybScpWzBdO1xyXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctYmFja3VwLWNvZGVzLWNhbmNlbCcpWzBdO1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b24uZm9jdXMoKTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbixcclxuICAgICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgICAgYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRlQmFja3VwQ29kZXNSZXNwb25zZSA9IGF3YWl0IHRoaXMuX2JhY2t1cENvZGVzTWFuYWdlci5nZW5lcmF0ZU5ld0NvZGVzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2VuZXJhdGVCYWNrdXBDb2Rlc1Jlc3BvbnNlWydlcnJvckNvZGUnXSAhPT0gR1NFcnJvcnMuT0sgfHwgIWdlbmVyYXRlQmFja3VwQ29kZXNSZXNwb25zZS5iYWNrdXBDb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMucGx1Z2luLnRlbXBsYXRlc1snZXJyb3InXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgnYW5fZXJyb3JfaGFzX29jY3VycmVkX3BsZWFzZV90cnlfYWdhaW5fbGF0ZXInKSB8fCAnRXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2hvd0JhY2t1cENvZGVzU2NyZWVuKGdlbmVyYXRlQmFja3VwQ29kZXNSZXNwb25zZS5iYWNrdXBDb2Rlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihjYW5jZWxCdXR0b24sICdjbGljaycsICgpID0+IHRoaXMuc2hvd0JhY2t1cENvZGVzU2NyZWVuKG9yaWdpbmFsQmFja3VwQ29kZXMpKTtcclxuICAgICAgICB0aGlzLnBsdWdpbi5vbkFmdGVyU2NyZWVuTG9hZCgndGZhLWJhY2t1cC1jb2Rlcy1yZWdlbmVyYXRlJywgdGhpcy5wbHVnaW4uZ2V0VGV4dCgnYmFja3VwX2NvZGVzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VuZFRmYUNvZGUodGJDb2RlOiBIVE1MSW5wdXRFbGVtZW50LCBjYlJlbWVtYmVyOiBIVE1MSW5wdXRFbGVtZW50LCBzdWJtaXRCdXR0b246IEhUTUxFbGVtZW50LCBpc0JhY2t1cENvZGU6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlcmlmeSh0YkNvZGUudmFsdWUsICFjYlJlbWVtYmVyLmNoZWNrZWQsIHRoaXMuc2N0VG9rZW4sIGlzQmFja3VwQ29kZSlcclxuICAgICAgICAgICAgLnRoZW4odmVyaWZ5UmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlRXJyb3IoW3RiQ29kZV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmeVJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKGVyciwgW3RiQ29kZV0pO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoc3VibWl0QnV0dG9uLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfSkgYXMgYW55O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmVyaWZ5KGNvZGU6IHN0cmluZywgaXNUZW1wOiBib29sZWFuLCBzY3RUb2tlbj86IHN0cmluZywgaXNCYWNrdXBDb2RlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIGNvZGUsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlWydlcnJvckNvZGUnXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2socmVzcG9uc2UsIHJlc3BvbnNlWydwcm92aWRlckFzc2VydGlvbiddLCBpc1RlbXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2VbJ2Vycm9yRGV0YWlscyddID09PSAnV3JvbmcgdmVyaWZpY2F0aW9uIGNvZGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnBsdWdpbi5nZXRUZXh0KCdwbGVhc2VfZW50ZXJfYV92YWxpZF9jb2RlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnBsdWdpbi5nZXRUZXh0KCdhbl9lcnJvcl9oYXNfb2NjdXJyZWRfcGxlYXNlX3RyeV9hZ2Fpbl9sYXRlcicpIHx8ICdFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChzY3RUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxQYXJhbXNbJ3NjdFRva2VuJ10gPSBzY3RUb2tlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNCYWNrdXBDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEuYmFja3VwY29kZXMudmVyaWZ5KHRoaXMucGFyYW1zLCBsb2NhbFBhcmFtcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEudG90cC52ZXJpZnkodGhpcy5wYXJhbXMsIGxvY2FsUGFyYW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUmVnaXN0cmF0aW9uUHJvY2VzcyhxckNvZGUsIHNjdFRva2VuLCBzY3JlZW5OYW1lID0gJ3RmYS10b3RwLXJlZ2lzdHJhdGlvbicsIGNhcHRpb24/OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNjdFRva2VuID0gc2N0VG9rZW47XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4udGVtcGxhdGVzWyd0b3RwUmVnaXN0ZXInXSwge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5jb250YWluZXIuaWQsXHJcbiAgICAgICAgICAgIHN0ZXAxOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdzdGVwJywgJyR7aW5kfScsICcxJyksXHJcbiAgICAgICAgICAgIHN0ZXAyOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdzdGVwJywgJyR7aW5kfScsICcyJyksXHJcbiAgICAgICAgICAgIHNjYW5fcXJfY29kZTogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnc2Nhbl9xcl9jb2RlJyksXHJcbiAgICAgICAgICAgIHFyQ29kZTogcXJDb2RlLFxyXG4gICAgICAgICAgICBlbnRlcl9jb2RlOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdlbnRlcl90b3RwX2NvZGUnKSxcclxuICAgICAgICAgICAgcmVtZW1iZXJfdGhpc19kZXZpY2U6IHRoaXMucGx1Z2luLmlzTW9iaWxlVUkgPyB0aGlzLnBsdWdpbi5nZXRUZXh0KCdyZW1lbWJlcl90aGlzX2RldmljZScpIDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncmVtZW1iZXJfdGhpc19jb21wdXRlcicpLFxyXG4gICAgICAgICAgICBkb3dubG9hZEJhY2t1cENvZGVzSW50cm86IHRoaXMucGx1Z2luLmdldFRleHQoJ2Rvd25sb2FkX2JhY2t1cF9jb2RlcycpLFxyXG4gICAgICAgICAgICBzdWJtaXQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ3N1Ym1pdCcpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVmVyaWZpY2F0aW9uU2VjdGlvbigpO1xyXG4gICAgICAgIHRoaXMud2FpdEZvclFSSW1hZ2VUb1JlbmRlcigpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLm9uQWZ0ZXJTY3JlZW5Mb2FkKHNjcmVlbk5hbWUsIGNhcHRpb24pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIud2FybihlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKHRoaXMucGx1Z2luLmdldFRleHQoJ2FuX2Vycm9yX2hhc19vY2N1cnJlZF9wbGVhc2VfdHJ5X2FnYWluX2xhdGVyJykgfHwgJ0Vycm9yJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVmVyaWZpY2F0aW9uU2VjdGlvbih1c2luZ0JhY2t1cENvZGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1idXR0b24tc3VibWl0JylbMF07XHJcbiAgICAgICAgY29uc3QgdGJDb2RlOiBIVE1MSW5wdXRFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtY29kZS10ZXh0Ym94JylbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBjb25zdCBjYlJlbWVtYmVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtY29kZS1yZW1lbWJlci1jaGVja2JveCcpWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGJDb2RlLmZvY3VzKCk7XHJcblxyXG4gICAgICAgIGJpbmRFbnRlcktleSh0YkNvZGUsIHN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgYmluZEVudGVyS2V5KGNiUmVtZW1iZXIsIHN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgYmluZEVudGVyS2V5KHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRiQ29kZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0Vycm9yKHRoaXMucGx1Z2luLmdldFRleHQoJ3BsZWFzZV9lbnRlcl9hX3ZhbGlkX2NvZGUnKSwgW3RiQ29kZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChzdWJtaXRCdXR0b24sICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRUZmFDb2RlKHRiQ29kZSwgY2JSZW1lbWJlciwgc3VibWl0QnV0dG9uLCB1c2luZ0JhY2t1cENvZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd2FpdEZvclFSSW1hZ2VUb1JlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWdXcmFwcGVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtdG90cC1xcmNvZGUnKTtcclxuICAgICAgICAgICAgaWYgKGltZ1dyYXBwZXJbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IChpbWdXcmFwcGVyWzBdIGFzIEhUTUxFbGVtZW50KS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoaW1nWzBdLCAnbG9hZCcsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGltZ1swXSwgJ2Vycm9yJywgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSByZWplY3QoJ1RPVFA6IG1pc3NpbmcgcXJDb2RlIGltYWdlIGVsZW1lbnQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHJlamVjdCgnVE9UUDogbWlzc2luZyBxckNvZGUgaW1hZ2UgZWxlbWVudCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdTRXJyb3JzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzXCI7XHJcbmltcG9ydCB7IFRmYU1vZGUgfSBmcm9tIFwiLi4vVGZhUGx1Z2luXCI7XHJcbmltcG9ydCB7IEJhc2VUZmFQcm92aWRlciB9IGZyb20gXCIuLi9UZmFQcm92aWRlcnMvQmFzZVRmYVByb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCYWNrdXBDb2Rlc01hbmFnZXIge1xyXG4gICAgZ2V0QmFja3VwQ29kZXMoKTogUHJvbWlzZTx7YmFja3VwQ29kZXM6IHN0cmluZ1tdfT47XHJcbiAgICBnZW5lcmF0ZU5ld0NvZGVzKCk6IFByb21pc2U8e2JhY2t1cENvZGVzOiBzdHJpbmdbXX0+O1xyXG4gICAgcHJlcGFyZUJhY2t1cENvZGVzRm9yVmlldyhiYWNrdXBDb2Rlcyk6IHtiYWNrdXBDb2Rlczogc3RyaW5nW119O1xyXG4gICAgcHJpbnRCYWNrdXBDb2RlcyhodG1sKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2t1cENvZGVzTWFuYWdlciBpbXBsZW1lbnRzIElCYWNrdXBDb2Rlc01hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEV4cGVjdGVkTnVtYmVyT2ZCYWNrdXBDb2RlcyA9IDk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGZhUHJvdmlkZXI6IEJhc2VUZmFQcm92aWRlcil7fVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRCYWNrdXBDb2RlcygpOiBQcm9taXNlPHsgYmFja3VwQ29kZXM6IHN0cmluZ1tdIH0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBuZXcgUHJvbWlzZTx7IGJhY2t1cENvZGVzOiBzdHJpbmdbXSB9PihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdGZhUHJvdmlkZXIucGx1Z2luLmluaXRUZmEodGhpcy5fdGZhUHJvdmlkZXIubmFtZSwgVGZhTW9kZS5lZGl0LCBpbml0VEZBUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluaXRURkFSZXNwb25zZSAmJiBpbml0VEZBUmVzcG9uc2VbJ2Vycm9yQ29kZSddICE9PSBHU0Vycm9ycy5PSykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLmJhY2t1cGNvZGVzLmdldCh0aGlzLl90ZmFQcm92aWRlci5wYXJhbXMsIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2VuZXJhdGVOZXdDb2RlcygpOiBQcm9taXNlPHsgYmFja3VwQ29kZXM6IHN0cmluZ1tdIH0+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8eyBiYWNrdXBDb2Rlczogc3RyaW5nW10gfT4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RmYVByb3ZpZGVyLnBsdWdpbi5pbml0VGZhKHRoaXMuX3RmYVByb3ZpZGVyLm5hbWUsIFRmYU1vZGUuZWRpdCwgaW5pdFRGQVJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbml0VEZBUmVzcG9uc2UgJiYgaW5pdFRGQVJlc3BvbnNlWydlcnJvckNvZGUnXSAhPT0gR1NFcnJvcnMuT0spIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5iYWNrdXBjb2Rlcy5jcmVhdGUodGhpcy5fdGZhUHJvdmlkZXIucGFyYW1zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZXBhcmVCYWNrdXBDb2Rlc0ZvclZpZXcoYmFja3VwQ29kZXM6IHN0cmluZ1tdKToge2JhY2t1cENvZGVzOiBzdHJpbmdbXX0ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsVXNlZENvZGVzID0gQmFja3VwQ29kZXNNYW5hZ2VyLkV4cGVjdGVkTnVtYmVyT2ZCYWNrdXBDb2RlcyAtIGJhY2t1cENvZGVzLmxlbmd0aDtcclxuICAgICAgICBpZiAodG90YWxVc2VkQ29kZXMgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxVc2VkQ29kZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYmFja3VwQ29kZXMudW5zaGlmdCh0aGlzLl90ZmFQcm92aWRlci5wbHVnaW4uZ2V0VGV4dCgnYWxyZWFkeV91c2VkJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYWNrdXBDb2Rlcy5yZWR1Y2U8e2JhY2t1cENvZGVzOiBzdHJpbmdbXX0+KChhY2MsIGNvZGUsIGkpID0+IHtcclxuICAgICAgICAgICAgYWNjW2BiYWNrdXBDb2RlJHtpICsgMX1gXSA9IGNvZGU7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwge30gYXMge2JhY2t1cENvZGVzOiBzdHJpbmdbXX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludEJhY2t1cENvZGVzKGh0bWw6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyNTUyOTEvcHJpbnQtdGhlLWNvbnRlbnRzLW9mLWEtZGl2XHJcbiAgICAgICAgY29uc3QgcHJpbnRXaW5kb3cgPSB3aW5kb3cub3BlbignJywgJ19ibGFuaycpO1xyXG4gICAgICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKCc8aHRtbD48aGVhZD48dGl0bGU+JyArIHRoaXMuX3RmYVByb3ZpZGVyLnBsdWdpbi5nZXRUZXh0KCdiYWNrdXBfY29kZXMnKSArICc8L3RpdGxlPicpO1xyXG4gICAgICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKFxyXG4gICAgICAgICAgICAnPHN0eWxlPmJvZHl7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1mYW1pbHk6YXJpYWx9dGFibGV7Ym9yZGVyOiAxcHggZGFzaGVkO21hcmdpbjowIGF1dG99dGR7cGFkZGluZzoxNXB4O2ZvbnQtc2l6ZToyMHB4O308L3N0eWxlPicsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBwcmludFdpbmRvdy5kb2N1bWVudC53cml0ZSgnPC9oZWFkPjxib2R5PicpO1xyXG4gICAgICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKCc8aDM+JyArIHRoaXMuX3RmYVByb3ZpZGVyLnBsdWdpbi5nZXRUZXh0KCdjYW50X2FjY2Vzc191c2VfYmFja3VwX2NvZGVzJykgKyAnPC9oMz4nKTtcclxuICAgICAgICBwcmludFdpbmRvdy5kb2N1bWVudC53cml0ZShodG1sKTtcclxuICAgICAgICBwcmludFdpbmRvdy5kb2N1bWVudC53cml0ZSgnPGhyPicpO1xyXG4gICAgICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKCc8L2JvZHk+PC9odG1sPicpO1xyXG5cclxuICAgICAgICBwcmludFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpOyAvLyBuZWNlc3NhcnkgZm9yIElFID49IDEwXHJcbiAgICAgICAgcHJpbnRXaW5kb3cuZm9jdXMoKTsgLy8gbmVjZXNzYXJ5IGZvciBJRSA+PSAxMCovXHJcblxyXG4gICAgICAgIHByaW50V2luZG93LnByaW50KCk7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcHJpbnRXaW5kb3cuY2xvc2UoKSwgMCk7IC8vIEZvciBtb2JpbGUgYnJvd3NlcnNcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZVRmYVByb3ZpZGVyIH0gZnJvbSBcIi4uL1RmYVByb3ZpZGVycy9CYXNlVGZhUHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50QnlDbGFzc05hbWU8VCBleHRlbmRzIEhUTUxFbGVtZW50Pihjb250YWluZXIsIGNsYXNzTmFtZSk6IFQge1xyXG4gICAgcmV0dXJuIGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3MoY29udGFpbmVyLCBjbGFzc05hbWUpWzBdIGFzIFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb25JbnRlcnZhbChcclxuICAgIHRmYVByb3ZpZGVyOiBCYXNlVGZhUHJvdmlkZXIsXHJcbiAgICBhY3Rpb246IChjb3VudD86IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPixcclxuICAgIGludGVydmFsOiBudW1iZXIsXHJcbiAgICBjYW5jZWxDb25kaXRpb246IChjb3VudD86IG51bWJlcikgPT4gYm9vbGVhbiA9ICgpID0+IGZhbHNlKSB7XHJcblxyXG4gICAgbGV0IGNvdW50ID0gMTtcclxuICAgIGxldCBjYW5Db250aW51ZSA9IGZhbHNlO1xyXG4gICAgYWN0aW9uKGNvdW50KS50aGVuKCgpID0+IGNhbkNvbnRpbnVlID0gdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgcmVuZGVySW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGNhbmNlbENvbmRpdGlvbihjb3VudCkgfHwgIXRmYVByb3ZpZGVyLmlzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChyZW5kZXJJbnRlcnZhbElkKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjYW5Db250aW51ZSkge1xyXG4gICAgICAgICAgICBjYW5Db250aW51ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhd2FpdCBhY3Rpb24oKytjb3VudCk7XHJcbiAgICAgICAgICAgIGNhbkNvbnRpbnVlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgaW50ZXJ2YWwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZEVudGVyS2V5KGJ1dHRvbkVsOiBIVE1MRWxlbWVudCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kRW50ZXJLZXkoaW5wdXRFbDogSFRNTEVsZW1lbnQsIGJ1dHRvbkVsOiBIVE1MRWxlbWVudCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kRW50ZXJLZXkoZWwxOiBIVE1MRWxlbWVudCwgZWwyPzogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGxpc3RlbkVsID0gZWwxO1xyXG4gICAgY29uc3QgYnV0dG9uRWwgPSBlbDIgfHwgZWwxO1xyXG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIobGlzdGVuRWwsICdrZXl1cCcsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFN1Ym1pdCBvbiBFTlRFUiBpZiBidXR0b24gb3IgbGlzdGVuZXIgZWxlbWVudC5cclxuICAgICAgICAvLyBTdWJtaXQgb24gU1BBQ0UgaWYgYnV0dG9uLlxyXG4gICAgICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSAxMyB8fCAoa2V5Q29kZSA9PT0gMzIgJiYgIWVsMikpIHtcclxuICAgICAgICAgICAgYnV0dG9uRWwuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNUZmEgZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL0RlZmF1bHRDc3MnO1xyXG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zVGZhXzEgZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RlbXBsYXRlcyc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNUZmFfMiBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUGx1Z2luJztcclxuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc1RmYUZhY3RvcnkgZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVyRmFjdG9yeSc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNUZmFQcm92aWRlcnMgZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9CYXNlVGZhUHJvdmlkZXInO1xyXG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zVGZhUHJvdmlkZXJzXzEgZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9FbWFpbFRmYVByb3ZpZGVyJztcclxuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc1RmYVByb3ZpZGVyc18yIGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvR2lneWFQaG9uZVByb3ZpZGVyJztcclxuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc1RmYVByb3ZpZGVyc18zIGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvTGl2ZUxpbmtQaG9uZVByb3ZpZGVyJztcclxuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc1RmYVByb3ZpZGVyc180IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvUGhvbmVUZmFQcm92aWRlcic7XHJcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNUZmFQcm92aWRlcnNfNSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL1RvdHBUZmFQcm92aWRlcic7XHJcblxyXG5kZWNsYXJlIGNvbnN0IGdpZ3lhOiBhbnk7XHJcbmlmICghZ2lneWEuXykge1xyXG4gICAgZ2lneWEuXyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy50ZmEpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy50ZmEgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy50ZmEuZmFjdG9yeSkge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnRmYS5mYWN0b3J5ID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMudGZhLnByb3ZpZGVycykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnRmYS5wcm92aWRlcnMgPSB7fTtcclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMudGZhLCBHaWd5YV9QbHVnaW5zVGZhLCBHaWd5YV9QbHVnaW5zVGZhXzEsIEdpZ3lhX1BsdWdpbnNUZmFfMik7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnRmYS5mYWN0b3J5LCBHaWd5YV9QbHVnaW5zVGZhRmFjdG9yeSk7XHJcbk9iamVjdC5hc3NpZ24oXHJcbiAgICBnaWd5YS5fLnBsdWdpbnMudGZhLnByb3ZpZGVycyxcclxuICAgIEdpZ3lhX1BsdWdpbnNUZmFQcm92aWRlcnMsXHJcbiAgICBHaWd5YV9QbHVnaW5zVGZhUHJvdmlkZXJzXzEsXHJcbiAgICBHaWd5YV9QbHVnaW5zVGZhUHJvdmlkZXJzXzIsXHJcbiAgICBHaWd5YV9QbHVnaW5zVGZhUHJvdmlkZXJzXzMsXHJcbiAgICBHaWd5YV9QbHVnaW5zVGZhUHJvdmlkZXJzXzQsXHJcbiAgICBHaWd5YV9QbHVnaW5zVGZhUHJvdmlkZXJzXzUsXHJcbik7XHJcblxyXG5naWd5YS5fLlVJLmF0dGFjaFBsdWdpbihHaWd5YV9QbHVnaW5zVGZhXzIuVGZhUGx1Z2luLCAnYWNjb3VudHMnLCAndGZhJywgJ3Nob3dUZmFVSScpO1xyXG4iLCJleHBvcnQgZW51bSBFZGl0YWJsZVRmYVByb3ZpZGVyc1R5cGVzIHtcclxuICAgIGdpZ3lhUGhvbmUsXHJcbiAgICBnaWd5YVRvdHAsXHJcbiAgICBnaWd5YVB1c2gsXHJcbiAgICBsaXZlbGluayxcclxufVxyXG5leHBvcnQgY29uc3QgZ2lneWFBc3NlcnRpb25FeHBpcmF0aW9uID0gNjAgKiA1ICogMTAwMDtcclxuIiwiZXhwb3J0IGNvbnN0IGVudW0gR1NFcnJvcnMge1xyXG4gICAgT0sgPSAwLFxyXG4gICAgRGF0YV9QZW5kaW5nID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxyXG4gICAgTkVUV09SS19FUlJPUiA9IDUwMDAyNixcclxuICAgIERBVEFfUEVORElORyA9IDEwMDAwMSwgLy8gRGF0YSBpcyBzdGlsbCBiZWluZyBwcm9jZXNzZWQsIHF1ZXJ5IGFnYWluIGZvciB0aGUgcmVzcG9uc2VcclxuICAgIE9QRVJBVElPTl9DQU5DRUxFRCA9IDIwMDAwMSwgLy8gdXNlciBjYW5jZWxlZCwgaW4gbG9naW4gcHJvY2Vzc1xyXG4gICAgUEVSTUlTU0lPTl9HUkFOVEVEID0gMjAwMDAyLCAvLyBJbm5lciBjb2RlXHJcbiAgICBQRVJNSVNTSU9OX05PVF9HUkFOVEVEID0gMjAwMDAzLCAvLyBJbm5lciBjb2RlXHJcbiAgICBSRURJUkVDVCA9IDIwMDAwNCwgLy8gSW5uZXIgY29kZVxyXG4gICAgTkVXX1VTRVIgPSAyMDAwMDUsIC8vIElubmVyIGNvZGVcclxuICAgIE9QRVJBVElPTl9ET05FID0gMjAwMDA2LCAvLyBJbm5lciBjb2RlXHJcbiAgICBVUERBVEVfVVNFUiA9IDIwMDAwNywgLy8gSW5uZXIgY29kZVxyXG4gICAgT0tfV0lUSF9FUlJPUlMgPSAyMDAwMDgsIC8vIEZvciByZXBvcnRzIC0gd2hlbiB3ZSByZXR1cm4gb2sgdG8gY2xpZW50IGJ1dCBoYWQgYWNjZXB0YWJsZSBlcnJvcnMgKHRoYXQgd2Ugd2FudCB0byBrbm93IGFib3V0KSBvbiB0aGUgd2F5XHJcbiAgICBBQ0NPVU5UU19MSU5LRUQgPSAyMDAwMDksIC8vIEFmdGVyIGxpbmtpZ24gYWNjb3V0bnMgdmlhIGxvZ2luLCByZXR1cm4gdGhpcyBlcnJvciBjb2RlXHJcbiAgICBPS19XSVRIX0VSUk9SX0xPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gMjAwMDEwLCAvLyBGb3Igc2V0QWNjb3VudEluZm8gdXNpbmcgdGhlIGNvbmZsaWN0SGFuZGxpbmcgcGFyYW0gLSBwcm9maWxlIHdhcyBzYXZlZCwgYnV0IHRoZSBlbWFpbCBjb25mbGljdHMgd2l0aCBhbm90aGVyIHVzZXJcclxuICAgIEFDQ09VTlRfUEVORElOR19SRUdJU1RSQVRJT04gPSAyMDYwMDEsIC8vIEZvciBhY2NvdW50cyBBUEksXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVkVSSUZJQ0FUSU9OID0gMjA2MDAyLCAvLyBGb3IgYWNjb3VudHMgQVBJOyBjb25zaWRlciBtb3ZpbmcgdG8gNDAzeHh4IHNlY3Rpb24gaW4gdGhlIGZ1dHVyZS5cclxuICAgIEFDQ09VTlRfTUlTU0lOR19MT0dJTklEID0gMjA2MDAzLCAvLyBGb3IgYWNjb3VudHMgQVBJXHJcbiAgICBJREVOVElUWV9BTFJFQURZX0FTU0lHTkVEID0gMjA2MDA0LCAvLyBGb3IgaW1wb3J0IGFjY291bnRzIEFQSVxyXG4gICAgQUZURVJfRU1BSUxfVkVSSUZJQ0FUSU9OID0gMjA2MDA1LFxyXG4gICAgUEVORElOR19DT0RFX1ZFUklGSUNBVElPTiA9IDIwNjAwNixcclxuICAgIENMSUVOVF9MT0cgPSAzMDAwMDEsIC8vIGludGVybmFsLCBmb3IgcmVwb3J0aW5nIGVyb3JycyBpbiBjbGllbnQgU0RLU1xyXG4gICAgSU5WQUxJRF9EQVRBX0NFTlRFUiA9IDMwMTAwMSwgLy8gXCJJbnZhbGlkIGRhdGEtY2VudGVyXCIuIHdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJUaGlzIEFQSSBrZXkgaXMgc2VydmVkIGJ5IGFub3RoZXIgZGF0YSBjZW50ZXJcIi5cclxuICAgIElOVkFMSURfUkVRVUVTVF9GT1JNQVQgPSA0MDAwMDEsIC8vIGNvdWxkIGJlIGFsbCBraW5kIG9mIGVycm9ycyB3aXRoIHdyb25nIHJlcXVlc3QgKG5vbiBzZWN1cmUgd2hlbiBzaG91bGQgYmUgc2VjdXJlLCB3cm9uZyBhdXRoZW50aWNhdGlvbiBoZWFkZXIpXHJcbiAgICBNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUiA9IDQwMDAwMixcclxuICAgIFVOSVFVRV9JREVOVElGSUVSX0VYSVNUUyA9IDQwMDAwMyxcclxuICAgIElOVkFMSURfUEFSQU1FVEVSX0ZPUk1BVCA9IDQwMDAwNCxcclxuICAgIElOVkFMSURfUEFSQU1FVEVSX1ZBTFVFID0gNDAwMDA2LFxyXG4gICAgRFVQTElDQVRFX1ZBTFVFID0gNDAwMDA3LFxyXG4gICAgSU5WQUxJRF9BVVRIRU5USUNBVElPTl9IRUFERVIgPSA0MDAwMDgsIC8vIE9BdXRoMlxyXG4gICAgVkFMSURBVElPTl9FUlJPUiA9IDQwMDAwOSwgLy8gSW4gYWNjb3VudHMucmVnaXN0ZXIsIHdoZW5ldmVyIHRoZXJlIGlzIGEgdmFsaWRhdGlvbiBlcnJvclxyXG4gICAgSU5WQUxJRF9SRURJUkVDVF9VUkkgPSA0MDAwMTEsIC8vIE9BdXRoMlxyXG4gICAgSU5WQUxJRF9SRVNQT05TRV9UWVBFID0gNDAwMDEyLCAvLyBPQXV0aDJcclxuICAgIFVOU1VQUE9SVEVEX0dSQU5UX1RZUEUgPSA0MDAwMTMsIC8vIE9BdXRoMlxyXG4gICAgSU5WQUxJRF9HUkFOVCA9IDQwMDAxNCwgLy8gT0F1dGgyXHJcbiAgICBDT0RFX0VYUElSRUQgPSA0MDAwMTUsIC8vIE9BdXRoMlxyXG4gICAgU0NIRU1BX1ZBTElEQVRJT05fRkFJTEVEID0gNDAwMDIwLFxyXG4gICAgQ0FQVENIQV9WRVJJRklDQVRJT05fRkFJTEVEID0gNDAwMDIxLFxyXG4gICAgVU5JUVVFX0lOREVYX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjIsXHJcbiAgICBJTlZBTElEX1RZUEVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMyxcclxuICAgIERZTkFNSUNfRklFTERTX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjQsXHJcbiAgICBXUklURV9BQ0NFU1NfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNSxcclxuICAgIElOVkFMSURfRk9STUFUX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjYsXHJcbiAgICBSRVFVSVJFRF9WQUxVRV9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI3LFxyXG4gICAgRU1BSUxfTk9UX1ZFUklGSUVEID0gNDAwMDI4LFxyXG4gICAgU0NIRU1BX0NPTkZMSUNUX0VSUk9SID0gNDAwMDI5LCAvLyBUbyBoYW5kbGUgVXNlciBzdG9yeSAzNDMzMC4gSW1wcm92ZSBFbGFzdGljU2VhcmNoTWFwcGluZ0V4Y2VwdGlvbiBoYW5kbGluZyBpbiBEUy5JbmRleE9iamVjdFxyXG4gICAgT1BFUkFUSU9OX05PVF9BTExPV0VEID0gNDAwMDMwLCAvLyBVc2VyIHN0b3J5IDM0MzExIC0gSWYgYWRkQ29ubmVjdGlvbiBpcyBjYWxsZWQgcmV0dXJuIGFuIGVycm9yIChcIm9wZXJhdGlvbiBub3QgYWxsb3dlZCBmb3IgdGhpcyBhY2NvdW50XCIsIDQwMFhYWCBlcnJvcikuXHJcbiAgICBTRUNVUklUWV9WRVJJRklDQVRJT05fRkFJTEVEID0gNDAwMDUwLFxyXG4gICAgSU5WQUxJRF9BUElLRVlfUEFSQU1FVEVSID0gNDAwMDkzLFxyXG4gICAgTk9UX1NVUFBPUlRFRCA9IDQwMDA5NiwgLy8gdGhlIGZ1bmN0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgYW55IG9mIHRoZSBjdXJyZW50bHkgY29ubmVjdGVkIHByb3ZpZGVyc1xyXG4gICAgVU5TVVBQT1JURURfVVNFUl9BR0VOVCA9IDQwMDA5NywgLy9cclxuICAgIE5PX1BST1ZJREVSUyA9IDQwMDEwMCwgLy8gY2xpZW50P1xyXG4gICAgUE9QVVBfQkxPQ0tFRCA9IDQwMDEwMSwgLy8gY2xpZW50XHJcbiAgICBJTlZBTElEX0VWRU5UX0hBTkRMRVIgPSA0MDAxMDIsIC8vIGNsaWVudFxyXG4gICAgSU5WQUxJRF9DT05UQUlORVJJRCA9IDQwMDEwMywgLy8gY2xpZW50XHJcbiAgICBOT1RfQ09OTkVDVEVEID0gNDAwMTA2LCAvLyB1c2VyIGlzIG5vdCBjb25uZWN0ZWQgdG8gdGhlIHJlcXVpcmVkIG5ldHdvcmsgb3IgdG8gYW55IG5ldHdvcmtcclxuICAgIElOVkFMSURfU0lURV9ET01BSU4gPSA0MDAxMjAsIC8vIHRoZSBjdXJyZW50IGRvbWFpbiBkb2VzIG5vdCBtYXRjaCB0aGUgZG9tYWluIGNvbmZpZ3VyZWQgZm9yIHRoZSBhcGkga2V5XHJcbiAgICBQUk9WSURFUl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAwMTIyLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxyXG4gICAgTElNSVRfUkVBQ0hFRCA9IDQwMDEyNCwgLy8gR2FtZU1lY2hhbmljcyAtIENhcCB3YXMgcmVhY2hlZFxyXG4gICAgRlJFUVVFTkNZX0xJTUlUX1JFQUNIRUQgPSA0MDAxMjUsIC8vIENvbW1lbnRzL0ZlZWQgLSBTcGFtIENhcHMgd2FzIHJlYWNoZWRcclxuICAgIElOVkFMSURfQUNUSU9OID0gNDAwMTI2LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW52YWxpZCBhY3Rpb24uIFRyaWdnZXJlZCBhY3Rpb24gY2FuJ3QgYmUgaW5pdGlhdGVkIGV4dGVybmFsbHlcclxuICAgIElOU1VGRklDSUVOVF9QT0lOVFNfVE9fUkVERUVNID0gNDAwMTI3LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW5zdWZmaWNpZW50X3BvaW50c190b19yZWRlZW1cclxuICAgIFNJR05BVFVSRV9USU1FU1RBTVBfRVhQSVJFRCA9IDQwMDEyOCwgLy8gdGhlIHRpbWVzdGFtcCBpbnNpZGUgdGhlIHNpZ25hdHVyZSBpcyBleHBpcmVkXHJcbiAgICBJTlZBTElEX1BPTElDWV9DT05GSUdVUkFUSU9OID0gNDAxMDAwLCAvLyBQb2xpY3kgY29uZmlndXJhdGlvbiBpcyBpbnZhbGlkIChpLmUuIHByZXZlbnQgcmVnaXRyYXRpb24pXHJcbiAgICBTVVNQRUNURURfU1BBTSA9IDQwMTAxMCwgLy8gU29tZW9uZSBpcyB0cnlpbmcgdG8gdXNlIEdpZ3lhIHRvIHNlbmQgYSBlbWFpbCB3aXRoIGEgVVJMIHRoYXQgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSBjbGllbnQncyBkb21haW5zOyBzdXNwZWN0ZWQgc3BhbS5cclxuICAgIExPR0lOX0ZBSUxFRF9DQVBUQ0hBX1JFUVVJUkVEID0gNDAxMDIwLCAvLyBhY2NvdW50cy5sb2dpbiAtIGNhcHRjaGEgcmVxdWlyZWRcclxuICAgIExPR0lOX0ZBSUxFRF9XUk9OR19DQVBUQ0hBID0gNDAxMDIxLCAvLyBhY2NvdW50cy5sb2dpbiAtIHdyb25nIGNhcHRjaGEgY29kZVxyXG4gICAgT0xEX1BBU1NXT1JEX1VTRUQgPSA0MDEwMzAsIC8vIFRoZSB1c2VyIHByb3ZpZGVkIGhpcyBwcmV2aW91cyBwYXNzd29yZCwgbm90IHRoZSBjdXJyZW50IG9uZVxyXG4gICAgRk9SQklEREVOID0gNDAzMDAwLFxyXG4gICAgSU5WQUxJRF9TRVNTSU9OX1RPS0VOID0gNDAzMDAxLCAvLyBpbnRlcm5hbFxyXG4gICAgUkVRVUVTVF9IQVNfRVhQSVJFRCA9IDQwMzAwMiwgLy8gdGhlIHRpbWVzdGFtcCBvciBleHBpcmF0aW9uIG9mIHRoZSB0b2tlbiB1c2VkIGV4Y2VlZGVkIHRoZSBhbGxvd2VkIHRpbWUgd2luZG93XHJcbiAgICBJTlZBTElEX1JFUVVFU1RfU0lHTkFUVVJFID0gNDAzMDAzLFxyXG4gICAgRFVQTElDQVRFX05PTkNFID0gNDAzMDA0LFxyXG4gICAgVU5BVVRIT1JJWkVEX1VTRVIgPSA0MDMwMDUsIC8vIHRoZSB1c2VyIGlkIHBhc3NlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgc2l0ZVxyXG4gICAgU0VOU0lUSVZFX0RBVEFfU0VOVF9PVkVSX0hUVFAgPSA0MDMwMDYsIC8vIHdoZW4gc2VuZGluZyB0aGUgc2VjcmV0IGtleSBpbiBSRVNUIGl0IGhhcyB0byBiZSBvdmVyIEhUVFBTXHJcbiAgICBQRVJNSVNTSU9OX0RFTklFRCA9IDQwMzAwNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUGVybWlzc2lvbiBkZW5pZWQgKHJlYWRPbmx5LG1vZGVyYXRpb24gc2l0ZSkuXHJcbiAgICBJTlZBTElEX09QRU5JRF9VUkwgPSA0MDMwMDgsIC8vIGNhbm5vdCBmaW5kIGFuIG9wZW5JZCBlbmRwb2ludCBvbiB0aGUgdXJsIG9yIHVzZXJuYW1lIGdpdmVuIGZvciBvcGVuSWQgbG9naW5cclxuICAgIFBST1ZJREVSX1NFU1NJT05fRVhQSVJFRCA9IDQwMzAwOSwgLy8gdGhlIHVzZXIgc2Vzc2lvbiBmb3IgdGhpcyBwcm92aWRlciBpcyBleHBpcmVkXHJcbiAgICBJTlZBTElEX1NFQ1JFVCA9IDQwMzAxMCwgLy8gdGhlIHJlcXVlc3QgaGFzIGFuIGludmFsaWQgc2VjcmV0IGtleVxyXG4gICAgU0VTU0lPTl9IQVNfRVhQSVJFRCA9IDQwMzAxMSwgLy8gdGhlIHNlc3Npb24gZm9yIHRoaXMgdXNlciBoYXMgZXhwaXJlZFxyXG4gICAgTk9fVkFMSURfU0VTU0lPTiA9IDQwMzAxMiwgLy8gcmVxdWVzdGVkIHVzZXIgaGFzIG5vIHZhbGlkIHNlc3Npb25cclxuICAgIFVOVkVSSUZJRURfVVNFUiA9IDQwMzAxMywgLy8gdGhlIHVzZXIgaXMgbm90IHZlcmlmaWVkIGluIFNTTyBzZXNzaW9uXHJcbiAgICBNSVNTSU5HX1JFUVVFU1RfUkVGRVJSRVIgPSA0MDMwMTUsIC8vIHdlIGNhbid0IHZhbGlkYXRlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlZmVycmVyIGhlYWRlciBpcyBtaXNzaW5nXHJcbiAgICBVTkVYUEVDVEVEX1BST1ZJREVSX1VTRVIgPSA0MDMwMTcsIC8vIHRoZSBsb2dnZWQgaW4gdXNlciBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgb25lIGV4cGVjdGVkXHJcbiAgICBQRVJNSVNTSU9OX05PVF9SRVFVRVNURUQgPSA0MDMwMjIsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIGl0IHdhcyBub3QgcmVxdWVzdGVkXHJcbiAgICBOT19VU0VSX1BFUk1JU1NJT04gPSA0MDMwMjMsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIHdlIGRvbid0IGhhdmUgb25lXHJcbiAgICBQUk9WSURFUl9MSU1JVF9SRUFDSEVEID0gNDAzMDI0LCAvLyB0aGUgcHJvdmlkZXIgbGltaXQgZm9yIHRoaXMgYWN0aW9uIHdhcyBleGNlZWRlZFxyXG4gICAgSU5WQUxJRF9UT0tFTiA9IDQwMzAyNSwgLy8gT0F1dGgyXHJcbiAgICBVTkFVVEhPUklaRURfQUNDRVNTX0VSUk9SID0gNDAzMDI2LCAvLyBDYWxscyB0byBhY2NvdW50cy5pc0F2YWlsYWJsZUxvZ2luSUQgV2hlbiBwcmV2ZW50TG9naW5JREhhcnZlc3RpbmcgPSB0cnVlIHNob3VsZCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgNDAzeHh4IHVuYXV0aG9yaXplZCBhY2Nlc3MgZXJyb3IuXHJcbiAgICBESUZGRVJFTlRfVVNFUl9GT1JfUkVBVVRIID0gNDAzMDI3LCAvLyBEaWZmZXJlbnQgdXNlciB0cmllZCB0byByZS1hdXRob3JpemUuXHJcbiAgICBTRVNTSU9OX0VYUElSRURfUkVUUlkgPSA0MDMwMzAsIC8vIElubmVyIGNvZGUgLSB3aGVuIHRoZSBmYWNlYm9vayBzZXNzaW9uIGlzIGV4cGlyZWQgYW5kIHRoZSBjbGllbnQgd2FpdHMgZm9yIEZCIG9uIHBhZ2UgdG8gbG9hZFxyXG4gICAgQVBQUk9WRURfQllfTU9ERVJBVE9SID0gNDAzMDMxLCAvLyBjb21tZW50cyAtIGNhbnQgZmxhZyBjb21tZW50LCBpdCB3YXMgYXBwcm92ZWQgYnkgdGhlIG1vZGVyYXRvciBhbHJlYWR5LlxyXG4gICAgVE9LRU5fSEFTX1JFTkVXRUQgPSA0MDMwMzIsIC8vIHRoZSB0b2tlbiBpcyBubyBsb25nZXIgdmFsaWQsIGJ1dCB3ZSBoYXZlIG5ldyB0b2tlbiB0byBwcm92aWRlXHJcbiAgICBOT19VU0VSX0NPT0tJRSA9IDQwMzAzNSwgLy8gbm8gdXNlciBjb29raWVcclxuICAgIFVOQVVUSE9SSVpFRF9QQVJUTkVSID0gNDAzMDM2LCAvLyBwYXJ0bmVyIGlzIGRpc2FibGVkXHJcbiAgICBQT1NUX0RFTklFRCA9IDQwMzAzNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUG9zdCBkZW5pZWQgd2hlbiB0aGUgdXNlciB0cmllZCB0byByZXZpZXcgdHdpY2UuXHJcbiAgICBOT19MT0dJTl9USUNLRVQgPSA0MDMwNDAsIC8vIG5vIGxvZ2luIHRpY2tldCBpbiBjYWxsYmFjayB1cmxcclxuICAgIEFDQ09VTlRfRElTQUJMRUQgPSA0MDMwNDEsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gZ3MuYWNjb3VudHMuSXNBY3RpdmU9ZmFsc2VcclxuICAgIElOVkFMSURfTE9HSU5JRCA9IDQwMzA0MiwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiB0cnlpbmcgdG8gbG9naW4gd2l0aCBhIGxvZ2luSUQgdGhhdCBkbyBub3QgZXhpc3RzXHJcbiAgICBMT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDQwMzA0MywgLy8gRm9yIGFjY291bnQ6IElmIHByb3ZpZGVyRW1haWwgaXMgZGVmaW5lZCBhcyBhIGxvZ2luSWRlbnRpZmllciBpbiB0aGUgcG9saWN5LCBhbmQgdGhlIGVtYWlsIGFkZHJlc3MgcmVjZWl2ZWQgZnJvbSB0aGUgcHJvdmlkZXIgZXhpc3RzIGluIHRoZSBncy5sb2dpbklkZW50aWZpZXJzIGNvbGxlY3Rpb24gYnV0IGFzc29jaWF0ZWQgd2l0aCBhIGRpZmZlcmVudCBVVUlEIHRoYW4gdGhlIGN1cnJlbnQgdXNlciwgdGhlbiByZXR1cm4gXCJMb2dpbiBpZGVudGlmaWVyIGV4aXN0c1wiIGVycm9yIGNvZGUgKDQwM3h4eCkuXHJcbiAgICBVTkRFUkFHRV9VU0VSID0gNDAzMDQ0LCAvLyBGb3IgQ09QUEEgY29tcGxpYW5jZSAoQ2hpbGRyZW4ncyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdClcclxuICAgIElOVkFMSURfU0lURV9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAzMDQ1LCAvLyBGb3IgYWNjb3VudHMgLSBzaXRlIERTIGlzIGVuYWJsZWQgdGhvdWdoIG5vIERTU2l6ZSB3YXMgY29uZmlndXJlZC5cclxuICAgIExPR0lOSURfRE9FU19OT1RfRVhJU1QgPSA0MDMwNDcsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIHJlc2V0IHBhc3N3b3JkIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xyXG4gICAgQVBJX1JBVEVfTElNSVRfRVhDRUVERUQgPSA0MDMwNDgsXHJcbiAgICBQRU5ESU5HX1BBU1NXT1JEX0NIQU5HRSA9IDQwMzEwMCwgLy8gVGhlIHVzZXIncyBwYXNzd29yZCBuZWVkcyB0byBiZSBjaGFuZ2VkXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1ZFUklGSUNBVElPTiA9IDQwMzEwMSxcclxuICAgIEFDQ09VTlRfUEVORElOR19URkFfUkVHSVNUUkFUSU9OID0gNDAzMTAyLFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1JFQ0VOVF9MT0dJTiA9IDQwMzExMCxcclxuICAgIEFDQ09VTlRfVEVNUE9SQVJJTFlfTE9DS0VEX09VVCA9IDQwMzEyMCwgLy8gVG9vIG1hbnkgbG9naW4gYXR0ZW1wdHM7IGFjY291bnQgbG9ja2VkLW91dFxyXG4gICAgUkVEVU5EQU5UX09QRVJBVElPTiA9IDQwMzIwMCwgLy8gVGhlIGNsaWVudCBwZXJmb3JtZWQgYW4gb3BlcmF0aW9uIHRoYXQgaXMgcmVkdW5kYW50XHJcbiAgICBJTlZBTElEX0FQUExJQ0FUSU9OX0lEID0gNDAzMjAxLCAvLyBUaGUgYXBwIGlkIHByb3ZpZGVkIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBvbmUgY29uZmlndXJlZCBmb3IgdGhlIHNpdGVcclxuICAgIE5PVF9GT1VORCA9IDQwNDAwMCwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLiBBY2NvdW50cyAtIGVtYWlsIHZlcmlmaWNhdGlvbiBmYWlsZWQsIHV1aWQgbm90IGZvdW5kLlxyXG4gICAgRlJJRU5EX05PVF9GT1VORCA9IDQwNDAwMSwgLy8gdGhlIHVzZXIgaWQgcHJvdmlkZWQgYXMgYSB0YXJnZXQgaXMgbm90IGEgZnJpZW5kIGZvciB0aGUgY3VycmVudCB1c2VyXHJcbiAgICBDQVRFR09SWV9OT1RfRk9VTkQgPSA0MDQwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC5cclxuICAgIFVJRF9OT1RfRk9VTkQgPSA0MDQwMDMsXHJcbiAgICBSRVNPVVJDRV9OT1RfRk9VTkQgPSA0MDQwMDQsIC8vIENsaWVudCBzaWRlIC0gaW1hZ2Ugbm90IGZvdW5kIGFmdGVyIHVwbG9hZFxyXG4gICAgSU5WQUxJRF9BUElfTUVUSE9EID0gNDA1MDAxLCAvLyBpbnRlcm5hbCBmb3Igb3VyIEpTIEFQSVxyXG4gICAgSURFTlRJVFlfRVhJU1RTID0gNDA5MDAxLCAvLyB3aGVuIHRyeWluZyB0byBjb25uZWN0IHRvIGEgcHJvdmlkZXIgdGhhdCBpcyBhbHJlYWR5IGNvbm5lY3RlZCBvciBsaW5rIHRvIGFuIGFscmVhZHkgbGlua2VkIGFjY291bnRcclxuICAgIEdPTkUgPSA0MTAwMDAsIC8vIFJlc291cmNlIG5vIGxvbmdlciBhdmFpbGFibGUuIERhdGEgS2V5IFNlcnZlciAtIGtleSByZXZva2VkL2V4cGlyZWQuXHJcbiAgICBSRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgPSA0MTMwMDEsIC8vIENvbW1lbnRzIHNlcnZlciAtIFJlcXVlc3QgdG8gbGFyZ2VcclxuICAgIENPTU1FTlRfVEVYVF9UT09fTEFSR0UgPSA0MTMwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENvbW1lbnQgVGV4dCB0byBsYXJnZS5cclxuICAgIE9CSkVDVF9UT09fTEFSR0UgPSA0MTMwMDMsIC8vIERhdGFTdG9yZSBvYmplY3QgaXMgdG9vIGxhcmdlXHJcbiAgICBQUk9GSUxFX1BIT1RPX1RPT19MQVJHRSA9IDQxMzAwNCwgLy8gUHJvZmlsZSBwaG90byBpcyB0b28gbGFyZ2UsIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGNvbnRlbnQgbGVuZ3RoXHJcbiAgICBSRVFVRVNUX1VSSV9UT09fTE9ORyA9IDQxNDAwMCwgLy9UaGUgVVJJIHByb3ZpZGVkIHdhcyB0b28gbG9uZyBmb3IgdGhlIHNlcnZlciB0byBwcm9jZXNzLlxyXG4gICAgTUlTU0lOR19VU0VSX1BIT1RPID0gNDA5MDEwLCAvLyBFcnJvciAtIG1pc3NpbmcgdXNlciBwaG90b1xyXG4gICAgQ09VTlRFUl9OT1RfUkVHSVNURVJFRCA9IDQwOTAxMSwgLy8gQ291bnRlciBub3QgcmVnaXN0ZXJlZFxyXG4gICAgSU5WQUxJRF9HTUlEX1RJQ0tFVCA9IDQwOTAxMiwgLy8gZ21pZCB0aWNrZXQgaXMgbm90IHZhbGlkXHJcbiAgICBTQU1MX01BUFBFRF9BVFRSSUJVVEVfTk9UX0ZPVU5EID0gNDA5MDEzLCAvLyBVc2VkIHdoZW4gbWFwcGVkIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgcHJvdmlkZXJVSUQgY2Fubm90IGJlIHJldHJlaXZlZFxyXG4gICAgU0FNTF9DRVJUSUZJQ0FURV9OT1RfRk9VTkQgPSA0MDkwMTQsIC8vIFVzZWQgd2hlbiBTQU1MIGNlcnRpZmljYXRlIGNvdWxkIG5vdCBiZSByZXRyZWl2ZWQuXHJcbiAgICBTQU1MX01FU1NBR0VfTk9UX0ZPVU5EID0gNDA5MDE1LCAvLyBVc2VkIHdoZW4gY2FjaGVkIFNBTUwgbWVzc2FnZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxyXG4gICAgR0VORVJBTF9TRVJWRVJfRVJST1IgPSA1MDAwMDEsXHJcbiAgICBTRVJWRVJfTE9HSU5fRVJST1IgPSA1MDAwMDIsIC8vIGdlbmVyYWwgZXJyb3IgZHVyaW5nIHRoZSBsb2dpbiBwcm9jZXNzXHJcbiAgICBERUZBVUxUX0FQUExJQ0FUSU9OX0NPTkZJR1VSQVRJT05fRVJST1IgPSA1MDAwMDMsIC8vIEZvciBtdWx0aXBsZSBEQyAtIHdoZW4gbm8gZGVmYXVsdCBhcHBsaWNhdGlvbiBjYW4gYmUgZm91bmQgaW4gRGVmYXVsdEFwcGxpY2F0aW9ucy5jb25maWcuIFdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJEZWZhdWx0IGFwcGxpY2F0aW9uIGlzbid0IGNvbmZpZ3VyZWQgZm9yIGRhdGFDZW50ZXJcIlxyXG4gICAgU0VTU0lPTl9NSUdSQVRJT05fRVJST1IgPSA1MDAwMTQsIC8vIGVycm9yIGluIG1pZ3JhdGluZyBvbGQgdG8gbmV3IGZhY2Vib29rIHNlc3Npb25cclxuICAgIFBST1ZJREVSX0VSUk9SID0gNTAwMDIzLCAvLyBnZW5lcmFsIGVycm9yIGZyb20gdGhlIHByb3ZpZGVyXHJcbiAgICBEQVRBQkFTRV9FUlJPUiA9IDUwMDAyOCxcclxuICAgIFVTRVJOQU1FX1JFUVVJUkVEID0gNTAwMDI5LCAvLyBJbm5lciBjb2RlXHJcbiAgICBOT19QUk9WSURFUl9BUFBMSUNBVElPTiA9IDUwMDAzMSwgLy8gdGhlIGFwcGxpY2F0aW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIG5vdCBkZWZpbmVkIGZvciB0aGlzIHNpdGVcclxuICAgIExPQURfRkFJTEVEID0gNTAwMDMyLCAvLyBjbGllbnQgZXJyb3JcclxuICAgIElOVkFMSURfRU5WSVJPTk1FTlRfQ09ORklHID0gNTAwMDMzLCAvLyBJbiBjYXNlIHRoZXJlIGlzIG5vIHRhcmdldCBlbnZpcm9ubWVudCBpbiB0aGUgY29uZmlnIGZpbGUgd2UnZCByZXR1cm4gd2l0aCAgaW52YWxpZF9lbnZpcm9ubWVudF9jb25maWcgZXJyb3IuXHJcbiAgICBFUlJPUl9EVVJJTkdfQkFDS0VORF9PUEVSQVRJT04gPSA1MDAwMzQsXHJcbiAgICBUSU1FT1VUID0gNTA0MDAxLCAvLyBvdXRnb2luZyByZXF1ZXN0IGhhZCB0aW1lZCBvdXRcclxuICAgIENMSUVOVFRJTUVPVVQgPSA1MDQwMDIsIC8vIEZvciBzZXJ2ZXIgU0RLcyAtIGEgY2xpZW50IHNpZGUgdGltZW91dFxyXG4gICAgSU5WQUxJRF9VUkwgPSA0MDQwMDQsIC8vIGVtYmVkLmx5IDQwNCBlcnJvciBtZXNzYWdlIC0gdXJsIGlzIG5vdCB2YWxpZFxyXG4gICAgTUVESUFfSVRFTVNfTk9UX1NVUFBPUlRFRCA9IDQwMTAwMSwgLy8gTWVkaWEgaXRlbXMgYSBub3QgYWxsb3dlZCBmb3IgdGhpcyBjYXRlZ29yeVxyXG4gICAgTUlTU0lOR19FUlJPUl9DT0RFID0gNTk5OTk5LFxyXG59XHJcbmV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JEZXRhaWxzIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgU2FtZV9wYXNzd29yZCA9IDEwMDAwMSwgLy8gUmVzZXQgUGFzc3dvcmQgLSBcIidvbGRQYXNzd29yZCcgY2Fubm90IGJlIHRoZSBzYW1lIGFzICduZXdQYXNzd29yZCdcIlxyXG4gICAgSW52YWxpZF9wYXNzd29yZCA9IDEwMDAwMiwgLy8gUmVzZXQgUGFzc3dvcmQgLSBjdXJyZW50IHBhc3N3b3JkIGlzIHdyb25nL2ludmFsaWRcclxuICAgIEludmFsaWRfY291bnRlcnNfcXVlcnlfd2l0aF9jdXJzb3IgPSAxMDAwMDMsXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==