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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/socialize/Gigya.Js.Login2/app/index.ts");
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

/***/ "./src/socialize/Gigya.Js.Login2/app/ButtonStyles.ts":
/*!***********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/ButtonStyles.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyles = {
    fulllogocolored: {
        ratio: 2.6,
        base: 'FullLogoColored/',
        ext: '.png',
        noConnected: true,
        minSize: 15,
        maxSize: 65,
    },
    fulllogo: {
        ratio: 2.6,
        base: 'FullLogo/',
        ext: '.png',
        noConnected: true,
        minSize: 15,
        maxSize: 65,
    },
    signinwith: {
        ratio: 7.05,
        base: 'SignInWith/',
        ext: '.png',
        noLastLogin: true,
        noConnected: true,
        minSize: 20,
        maxSize: 60,
    },
    standard: {
        ratio: 1,
        base: '',
        ext: '.png',
        minSize: 15,
        maxSize: 65,
    },
};


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/ContainerBase.ts":
/*!************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/ContainerBase.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var ContainerBase = /** @class */ (function () {
    function ContainerBase() {
    }
    ContainerBase.prototype.getChildByCssClass = function (htmlElement, selector) {
        var selection = window.gigya.utils.DOM.getElementsByClass(htmlElement, selector);
        if (selection.length)
            return selection[0];
        return null;
    };
    return ContainerBase;
}());
exports.ContainerBase = ContainerBase;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/FooterContainer.ts":
/*!**************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/FooterContainer.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LoginPlugin_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/LoginPlugin */ "./src/socialize/Gigya.Js.Login2/app/LoginPlugin.ts");
var FooterContainer = /** @class */ (function () {
    function FooterContainer(plugin, gridSize) {
        this.plugin = plugin;
        this.gridSize = gridSize;
        this.template = plugin.getTemplates().footer;
        this.element = this.plugin.createElementFromHTMLString(this.template);
    }
    FooterContainer.prototype.getHtmlElement = function () {
        var _this = this;
        var footerOptions = new Array();
        var lastOption;
        var partHtml;
        var divider = this.plugin.getTemplates().footerDivider;
        if (this.plugin.showEdit) {
            partHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates().footerEdit, {
                edit: this.plugin.getText('edit'),
            });
            if (footerOptions.length)
                lastOption += divider + partHtml;
            else
                lastOption = partHtml;
            footerOptions.unshift(lastOption);
        }
        if (this.plugin.showTerms) {
            partHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates().footerTerms, {
                terms: this.plugin.getText('terms'),
            });
            if (footerOptions.length)
                lastOption += divider + partHtml;
            else
                lastOption = partHtml;
            footerOptions.unshift(lastOption);
        }
        if (footerOptions.length) {
            var selectedOption = '';
            window.gigya.utils.array.some(footerOptions, function (option) {
                option = '<span>' + option + '</span>';
                var size = window.gigya.utils.DOM.getHTMLSize(option, _this.plugin.uiContainer);
                if (size.w <= _this.gridSize.totalWidthIncludingPager) {
                    selectedOption = option;
                    return true;
                }
                return false;
            });
            if (selectedOption) {
                var footerElement = this.plugin.createElementFromHTMLString(selectedOption);
                this.element.appendChild(footerElement);
                if (this.plugin.showEdit) {
                    var editElement = window.gigya.utils.DOM.getElementsByClass(footerElement, 'gigya-login-footer-edit-link')[0];
                    window.gigya.utils.DOM.addEventListener(editElement, 'click', function () {
                        // Adding the Event to open the edit connections dialog.
                        var params = window.gigya.utils.object.cloneParamsForPlugin(_this.plugin.params);
                        delete params.containerID;
                        delete params.width;
                        delete params.height;
                        window.gigya.socialize.showEditConnectionsUI(params);
                    });
                }
            }
        }
        return this.element;
    };
    FooterContainer.prototype.setShowWhatsThis = function (elm) {
        if (this.plugin.params.showWhatsThis && navigator.userAgent.toLowerCase().indexOf('iphone') == -1) {
            var containerDimensions = this.plugin.getContainerDimensions();
            var whatsThisText;
            if (this.plugin.params.whatsThisText) {
                whatsThisText = this.plugin.params.whatsThisText;
            }
            if (!whatsThisText) {
                if (this.plugin.pluginMode === LoginPlugin_1.PluginMode.Login) {
                    whatsThisText = this.plugin.getText('you_can_use_your_account_from_one_of_these_services_to_sign_into_the_site');
                }
                else {
                    whatsThisText = this.plugin.getText('add_more_connections_to_your_account');
                }
            }
            var whatsThisHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates().footerBrandWhatIsThis, {
                whatsthistext: window.gigya.utils.sanitize.sanitizeHTML(whatsThisText),
            });
            // Creating The Element
            var whatsThisElmnent = this.plugin.createElementFromHTMLString(whatsThisHtml);
            this.plugin.uiContainer.appendChild(whatsThisElmnent);
            // Caclulate The Position Of The Control
            var pos = window.gigya.global._GetElementPos(this.plugin.uiContainer);
            whatsThisElmnent.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
            window.gigya.utils.DOM.addEventListener(elm, 'mouseover', function () {
                whatsThisElmnent.style.visibility = 'visible';
            });
            window.gigya.utils.DOM.addEventListener(elm, 'mouseout', function () {
                whatsThisElmnent.style.visibility = 'hidden';
            });
        }
    };
    return FooterContainer;
}());
exports.FooterContainer = FooterContainer;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/Interfaces.ts":
/*!*********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/Interfaces.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/Login2Resources0.ts":
/*!***************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/Login2Resources0.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.arrow = __webpack_require__(/*! ./templates/arrow.html */ "./src/socialize/Gigya.Js.Login2/app/templates/arrow.html");
exports.footer = __webpack_require__(/*! ./templates/footer.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footer.html");
exports.footerBrandLong = __webpack_require__(/*! ./templates/footerBrandLong.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandLong.html");
exports.footerBrandShort = __webpack_require__(/*! ./templates/footerBrandShort.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandShort.html");
exports.footerBrandWhatIsThis = __webpack_require__(/*! ./templates/footerBrandWhatIsThis.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandWhatIsThis.html");
exports.footerDivider = __webpack_require__(/*! ./templates/footerDivider.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerDivider.html");
exports.footerEdit = __webpack_require__(/*! ./templates/footerEdit.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerEdit.html");
exports.footerTerms = __webpack_require__(/*! ./templates/footerTerms.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerTerms.html");
exports.header = __webpack_require__(/*! ./templates/header.html */ "./src/socialize/Gigya.Js.Login2/app/templates/header.html");
exports.login = __webpack_require__(/*! ./templates/login.html */ "./src/socialize/Gigya.Js.Login2/app/templates/login.html");
exports.providerImage = __webpack_require__(/*! ./templates/providerImage.html */ "./src/socialize/Gigya.Js.Login2/app/templates/providerImage.html");
exports.uiContainer = __webpack_require__(/*! ./templates/uiContainer.html */ "./src/socialize/Gigya.Js.Login2/app/templates/uiContainer.html");
exports.welcome = __webpack_require__(/*! ./templates/welcome.html */ "./src/socialize/Gigya.Js.Login2/app/templates/welcome.html");
exports.welcomeBubble = __webpack_require__(/*! ./templates/welcomeBubble.html */ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeBubble.html");
exports.welcomeGreeting = __webpack_require__(/*! ./templates/welcomeGreeting.html */ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeGreeting.html");
exports.welcomeSignInLink = __webpack_require__(/*! ./templates/welcomeSignInLink.html */ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeSignInLink.html");


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/Login2Resources1.ts":
/*!***************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/Login2Resources1.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ie8patch = __webpack_require__(/*! ./css/ie8patch.css */ "./src/socialize/Gigya.Js.Login2/app/css/ie8patch.css");
exports.iePatch = __webpack_require__(/*! ./css/iePatch.css */ "./src/socialize/Gigya.Js.Login2/app/css/iePatch.css");
exports.main = __webpack_require__(/*! ./css/main.css */ "./src/socialize/Gigya.Js.Login2/app/css/main.css");


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/LoginContainer.ts":
/*!*************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/LoginContainer.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ContainerBase_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/ContainerBase */ "./src/socialize/Gigya.Js.Login2/app/ContainerBase.ts");
var LoginPlugin_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/LoginPlugin */ "./src/socialize/Gigya.Js.Login2/app/LoginPlugin.ts");
var Utils_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/Utils */ "./src/socialize/Gigya.Js.Login2/app/Utils.ts");
var LoginContainer = /** @class */ (function (_super) {
    tslib_1.__extends(LoginContainer, _super);
    function LoginContainer(plugin, gridSize) {
        var _this = _super.call(this) || this;
        _this.plugin = plugin;
        _this.gridSize = gridSize;
        _this.ElementsSelector = {
            main: 'gigya-login-providers',
            container: 'gigya-login-providers-container',
            arrowLeft: 'gigya-login-providers-arrow-left',
            arrowRight: 'gigya-login-providers-arrow-right',
            providersContainer: 'gigya-login-providers-list-container',
            connectedProviderClass: 'gigya-provider-connected',
            providerNameAttr: 'data-gigya-provider'
        };
        _this.template = _this.plugin.getTemplates().login;
        return _this;
    }
    LoginContainer.prototype.getHtmlElement = function () {
        // init the templates:
        this._mainElement = this.plugin.createElementFromHTMLString(this.template);
        this._containerElement = this.getChildByCssClass(this._mainElement, this.ElementsSelector.container);
        this._providersContainer = this.getChildByCssClass(this._containerElement, this.ElementsSelector.providersContainer);
        // Creating The HTML Elements
        this._loginContainers = this.createContainers();
        this._containerElement.style.width = '100%'; //this.gridSize.totalWidthIncludingPager + 'px';
        this._providersContainer.style.width = this.gridSize.width + 'px';
        for (var i = 0; i < this._loginContainers.length; i++) {
            this._providersContainer.appendChild(this._loginContainers[i]);
        }
        // Attaching the inner Containers (Pagged Provider Data)
        this.setPaging(this._loginContainers.length);
        // Setting Behaviuer
        // Attach Events
        this.attachEvents();
        return this._mainElement;
    };
    LoginContainer.prototype.setPaging = function (numOfContainers) {
        var shouldAddPagingArrows = numOfContainers > 1;
        this._leftArrow = this.getChildByCssClass(this._containerElement, this.ElementsSelector.arrowLeft);
        this._rightArrow = this.getChildByCssClass(this._containerElement, this.ElementsSelector.arrowRight);
        // adding paggination arrows.
        if (shouldAddPagingArrows) {
            window.gigya.utils.DOM.addClassToElement(this._leftArrow, 'gigya-login-providers-arrow-disabled');
            if (this.plugin.pagingButtonStyle.getStyleName(this.plugin) == 'floating') {
                window.gigya.utils.DOM.addClassToElement(this._leftArrow, 'gigya-login-providers-arrow-marker-floating-disabled');
            }
            var arrowClass = this.plugin.pagingButtonStyle.getStyleClass(this.plugin);
            window.gigya.utils.DOM.addClassToElement(this._leftArrow, arrowClass);
            window.gigya.utils.DOM.addClassToElement(this._rightArrow, arrowClass);
            var arrowLeftHtmlElement = Utils_1.Utils.createElementFromHTMLString(window.gigya.utils.templates.fill(this.plugin.getTemplates().arrow, {
                tabindex: this.plugin.params.tabIndex || '-1',
                label: '',
            }));
            var arrowRightHtmlElement = Utils_1.Utils.createElementFromHTMLString(window.gigya.utils.templates.fill(this.plugin.getTemplates().arrow, {
                tabindex: this.plugin.params.tabIndex || '-1',
                label: '',
            }));
            this._leftArrow.appendChild(arrowLeftHtmlElement);
            this._rightArrow.appendChild(arrowRightHtmlElement);
            this.setNavigationArrowState(LoginPlugin_1.NavigationDirection.Prev, true); // disable the left (next) arrow on start
        }
        else {
            // make arrows invisible
            window.gigya.utils.DOM.addClassToElement(this._leftArrow, 'no-arrows');
            window.gigya.utils.DOM.addClassToElement(this._rightArrow, 'no-arrows');
            // make the container as wide as the providers container, so it'll center properly.
            this._containerElement.style.width = this._providersContainer.style.width;
        }
        // set the first container as the default showing container
        if (this._loginContainers[0])
            this._loginContainers[0].setAttribute('class', 'gigya-active');
    };
    LoginContainer.prototype.expandInContainerAfterRender = function () {
        var arrowParentWidth = Math.ceil((this._containerElement.offsetWidth - this._providersContainer.offsetWidth) / 2);
        if (arrowParentWidth < 0)
            arrowParentWidth = 0;
        var arrowParentWidthInPx = arrowParentWidth + 'px';
        // So arrow parent container will expand in its container.
        this._leftArrow.style.width = this._rightArrow.style.width = arrowParentWidthInPx;
        // So arrow image will overflow if needed.
        this._leftArrow.style.maxWidth = this._rightArrow.style.maxWidth = arrowParentWidthInPx;
        // setting the main element for starting height, so content will stay centered while paging (minimum is one button's height).
        this._mainElement.style.height =
            Math.max(this._containerElement.offsetHeight, this.plugin.buttonHeight + 2 * this.plugin.pluginConfig.rowSpacing) + 'px';
    };
    LoginContainer.prototype.createContainers = function () {
        var containers = [];
        // Array of Array of providers for each
        var providersGroups = this.getProvidersGroups(this.gridSize);
        // Iterating over the providers and build the html of the containers
        for (var i = 0; i < providersGroups.length; i++) {
            // set reference to the current container
            var providerCells = this.getProvidersCells(providersGroups[i]);
            // split the cells into rows
            var curContainerRows = this.getGroupProvidersRows(providerCells, this.gridSize.rows, this.gridSize.columns);
            // Setting The Container of the Rows
            var pContainer = this.createElemnetBlock('div', {
                class: 'gigya-login-providers-list',
            });
            // the List Item For The Navigation - Wrapper Container
            var pContainerListItem = document.createElement('div');
            for (var r = 0; r < curContainerRows.length; r++) {
                var rowElement = this.createElemnetBlock('div', {
                    class: 'gigya-login-provider-row',
                });
                for (var rItem = 0; rItem < curContainerRows[r].length; rItem++) {
                    var providerSpan = curContainerRows[r][rItem];
                    rowElement.appendChild(providerSpan);
                    // this line is in order to display the right space between the rows.
                    rowElement.style.height = providerSpan.style.height;
                    // the following two lines are in order to make sure the last providor in row doesn't have margine.
                    var lastSpanInRow = curContainerRows[r][curContainerRows[r].length - 1];
                    lastSpanInRow.style['margin-right'] = '0';
                }
                pContainer.appendChild(rowElement);
            }
            pContainerListItem.appendChild(pContainer);
            containers.push(pContainerListItem);
        }
        return containers;
    };
    LoginContainer.prototype.attachEvents = function () {
        var _this = this;
        var hasPaging = this._loginContainers.length > 1;
        // Navigation Events
        if (hasPaging) {
            var arrowLeft = this.getChildByCssClass(this._containerElement, this.ElementsSelector.arrowLeft);
            var arrowRight = this.getChildByCssClass(this._containerElement, this.ElementsSelector.arrowRight);
            window.gigya.utils.DOM.addEventListener(arrowRight, 'click', function (e) {
                _this.changeNavigationState(LoginPlugin_1.NavigationDirection.Next);
                window.gigya.utils.DOM.disableDefaultEventHandling(e);
            });
            window.gigya.utils.DOM.addEventListener(arrowLeft, 'click', function (e) {
                _this.changeNavigationState(LoginPlugin_1.NavigationDirection.Prev);
                window.gigya.utils.DOM.disableDefaultEventHandling(e);
            });
        }
        // Providers Buttons Events
        var providersButtons = window.gigya.utils.DOM.getElementsByClass(this.getChildByCssClass(this._containerElement, this.ElementsSelector.providersContainer), 'gigya-login-provider');
        for (var i = 0; i < providersButtons.length; i++) {
            var btnWrapper = providersButtons[i];
            var providerName = btnWrapper.getAttribute(this.ElementsSelector.providerNameAttr);
            var provider = window.gigya._.providers.getProviderByName(providerName, this.plugin.providers);
            var pIdentity = this.plugin.getIdentityInfoForProvider(provider);
            if (this.isConnectionCompleted(pIdentity)) {
                window.gigya.utils.DOM.addClassToElement(btnWrapper.querySelector('button.tabbing-button'), this.ElementsSelector.connectedProviderClass);
            }
            else {
                window.gigya.utils.DOM.addEventListener(btnWrapper, 'click', function (e) {
                    _this.plugin.onProviderClickHandler(e);
                });
            }
        }
    };
    /* -------------------------------------------------------------------------------------------------------------------- */
    LoginContainer.prototype.getProvidersCells = function (providersGroup) {
        var providerCells = [];
        // Iterating over all the providers in the current container
        for (var j = 0; j < providersGroup.length; j++) {
            // set reference to the current provider
            var currentProvider = providersGroup[j];
            // Find Indetity.
            var providerIdentityInformation = this.plugin.getIdentityInfoForProvider(currentProvider);
            var providerImage = this.getProviderImage(currentProvider, providerIdentityInformation);
            var providerCell = this.createElemnetBlock('span', {
                'data-gigya-provider': currentProvider.name,
                style: [
                    'width:',
                    this.plugin.buttonWidth,
                    'px;',
                    'height:',
                    this.plugin.buttonHeight,
                    'px;',
                    'margin-right:',
                    this.plugin.pluginConfig.rowSpacing,
                    'px;',
                ].join(''),
                class: 'gigya-login-provider',
                gigid: currentProvider.name,
            });
            var socialProviderButton = this.plugin.createElementFromHTMLString(providerImage);
            socialProviderButton.setAttribute('tabindex', this.plugin.params.tabIndex || '-1');
            // The tooltip needs to be on the focusable element (in this case, the button) or screen-readers will read it twice.
            if (this.plugin.showTooltips) {
                socialProviderButton.setAttribute('title', currentProvider.displayName);
            }
            if (j == 0) {
                socialProviderButton.setAttribute('aria-labelledby', 'social-buttons-login-caption');
            }
            providerCell.appendChild(socialProviderButton);
            providerCells.push(providerCell);
        }
        return providerCells;
    };
    LoginContainer.prototype.getProviderImage = function (provider, providerIdentityInformation) {
        var isRatina = window.devicePixelRatio > 1 ? true : false;
        var oButton = provider.buttonData;
        var imgId = (provider.imgName ? provider.imgName : provider.name) + '-';
        // US: 33343 - LinkedIn's trade mark for retina display
        if (isRatina && provider.name == 'linkedin' && (this.plugin.params.buttonSize >= 15 && this.plugin.params.buttonSize <= 25)) {
            var conventionName = provider.name + '_' + this.plugin.params.buttonSize * 2 + (provider.name == this.plugin.lastLoginProvider ? '_LastLogin' : '') + '.png';
            var imageUrl = this.plugin.imageBase + "/" + this.plugin.stylePreset.base + "/" + conventionName;
            return window.gigya.utils.templates.fill(this.plugin.getTemplates().providerImage, {
                buttonWidth: this.plugin.buttonWidth,
                buttonHeight: this.plugin.buttonHeight,
                imageUrl: imageUrl,
            });
        }
        // OpenID || Saml || oidc
        if (provider.isCustomProvider && oButton && oButton.iconURL) {
            var iconURL = oButton.iconURL;
            if (this.isConnectionCompleted(providerIdentityInformation)) {
                if (oButton.connectedIconURL)
                    iconURL = oButton.connectedIconURL;
            }
            else {
                var providerName = provider.name || '';
                var lastLoginProvider = this.plugin.lastLoginProvider || '';
                if (providerName.toLowerCase() == lastLoginProvider.toLowerCase())
                    iconURL = oButton.lastLoginIconURL;
            }
            if (iconURL)
                return window.gigya.utils.templates.fill(this.plugin.getTemplates().providerImage, {
                    buttonWidth: this.plugin.buttonWidth,
                    buttonHeight: this.plugin.buttonHeight,
                    imageUrl: iconURL,
                    provider: provider
                });
        }
        else {
            // Toggle 'Connected' Mode Vs 'Last Login'
            if (this.isConnectionCompleted(providerIdentityInformation)) {
                imgId += 'connected_';
            }
            else if (this.plugin.lastLoginIndication == LoginPlugin_1.LastLoginIndecation.border &&
                provider.name == this.plugin.lastLoginProvider &&
                !this.plugin.stylePreset.noLastLogin) {
                imgId += 'lastlogin_';
            }
            return this.plugin.spriteRenderer.loginIcons.getHTML(imgId, false, this.plugin.stylePreset.dontUseSprites, undefined, provider.displayName);
        }
        return ''; // No image to display
    };
    LoginContainer.prototype.isConnectionCompleted = function (providerIdentity) {
        return this.plugin.pluginMode === LoginPlugin_1.PluginMode.AddConnection &&
            (providerIdentity.isConnected && providerIdentity.hasAllRequiredPermissions) &&
            !this.plugin.stylePreset.noConnected;
    };
    LoginContainer.prototype.getGroupProvidersRows = function (cells, rows, cols) {
        var groupRows = [];
        for (var i = 0; i < rows; i++) {
            var gRow = [];
            for (var j = 0; j < cols; j++) {
                var idx = i * cols + j;
                if (idx >= cells.length) {
                    break;
                }
                gRow.push(cells[idx]);
            }
            groupRows.push(gRow);
        }
        // Setting The Last Index Class Marker
        for (var i = 0; i < groupRows.length; i++) {
            var lastIdx = groupRows[i].length;
            if (lastIdx > 0) {
                window.gigya.utils.DOM.addClassToElement(groupRows[i][lastIdx - 1], 'gigya-login-provider-last');
            }
        }
        return groupRows;
    };
    LoginContainer.prototype.getProvidersGroups = function (gridSize) {
        var providersPerContainer = gridSize.rows * gridSize.columns;
        var numOfContainers = this.plugin.providers.length === 0 ? 0 : this.plugin.providers.length / providersPerContainer;
        if (!isFinite(numOfContainers)) {
            throw new Error('error: infinite loop.');
        }
        var providerContaniers = [];
        // Creating The Providers Contrainers:
        for (var i = 0; i < numOfContainers; i++) {
            var curContainer = [];
            for (var j = 0; j < providersPerContainer; j++) {
                var idx = i * providersPerContainer + j;
                if (idx >= this.plugin.providers.length)
                    break;
                curContainer.push(this.plugin.providers[idx]);
            }
            providerContaniers.push(curContainer);
        }
        return providerContaniers;
    };
    LoginContainer.prototype.createElemnetBlock = function (elementType, attributes, content) {
        var elm = document.createElement(elementType);
        for (var attribute in attributes) {
            elm.setAttribute(attribute, attributes[attribute]);
        }
        return elm;
    };
    /* -------------------------------------------------------------------------------------------------------------------- */
    LoginContainer.prototype.changeNavigationState = function (nDirection) {
        // set the direction of movment.
        var indexDirection = nDirection == LoginPlugin_1.NavigationDirection.Next ? 1 : -1;
        var curIndex = window.gigya.utils.array.firstIndex(this._loginContainers, function (listContainer) { return window.gigya.utils.DOM.isElementClass(listContainer, 'gigya-active'); });
        // find the requested target container index by the direction.
        var targetIndex = curIndex + indexDirection;
        var curContainer = window.gigya.utils.array.first(this._loginContainers, function (listContainer) { return window.gigya.utils.DOM.isElementClass(listContainer, 'gigya-active'); });
        // get a reference to the target container.
        var targetContainer = this._loginContainers[targetIndex];
        // check if the request for 'Next' or 'Prev' is available if we found the target container.
        if (targetContainer) {
            // set's the next container
            window.gigya.utils.DOM.removeClassFromElement(curContainer, 'gigya-active');
            window.gigya.utils.DOM.addClassToElement(targetContainer, 'gigya-active');
            // check if we have next and prev available after targetig the new container.
            var isLast = !this._loginContainers[targetIndex + 1];
            var isFirst = !this._loginContainers[targetIndex - 1];
            // setting the new state of the arrows.
            this.setNavigationArrowState(LoginPlugin_1.NavigationDirection.Next, isLast);
            this.setNavigationArrowState(LoginPlugin_1.NavigationDirection.Prev, isFirst);
            // set focus to first provider in new list
            targetContainer.querySelector('button').focus();
        }
    };
    LoginContainer.prototype.setNavigationArrowState = function (direction, disabled) {
        // setting the proper name of the direction for the image manipulating.
        var arrowDirection = direction == LoginPlugin_1.NavigationDirection.Next ? 'right' : 'left';
        // getting a reference for the arrow container.
        var arrowContainer = window.gigya.utils.DOM.getElementsByClass(this._containerElement, 'gigya-login-providers-arrow-' + arrowDirection)[0], arrow = arrowContainer.querySelector('.gigya-login-providers-arrow-marker');
        // switching the state of the button based on the disabled parameter.
        if (!disabled) {
            arrow.removeAttribute('disabled');
            window.gigya.utils.DOM.removeClassFromElement(arrowContainer, 'gigya-login-providers-arrow-disabled');
            if (this.plugin.pagingButtonStyle.getStyleName(this.plugin) == 'floating') {
                window.gigya.utils.DOM.removeClassFromElement(arrowContainer, 'gigya-login-providers-arrow-marker-floating-disabled');
            }
        }
        else {
            arrow.setAttribute('disabled', 'disabled');
            window.gigya.utils.DOM.addClassToElement(arrowContainer, 'gigya-login-providers-arrow-disabled');
            if (this.plugin.pagingButtonStyle.getStyleName(this.plugin) == 'floating') {
                window.gigya.utils.DOM.addClassToElement(arrowContainer, 'gigya-login-providers-arrow-marker-floating-disabled');
            }
        }
    };
    return LoginContainer;
}(ContainerBase_1.ContainerBase));
exports.LoginContainer = LoginContainer;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/LoginPlugin.ts":
/*!**********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/LoginPlugin.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PagingStyles_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/PagingStyles */ "./src/socialize/Gigya.Js.Login2/app/PagingStyles.ts");
var ButtonStyles_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/ButtonStyles */ "./src/socialize/Gigya.Js.Login2/app/ButtonStyles.ts");
var PluginStyles_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/PluginStyles */ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts");
var LoginContainer_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/LoginContainer */ "./src/socialize/Gigya.Js.Login2/app/LoginContainer.ts");
var WelcomeContainer_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/WelcomeContainer */ "./src/socialize/Gigya.Js.Login2/app/WelcomeContainer.ts");
var FooterContainer_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/FooterContainer */ "./src/socialize/Gigya.Js.Login2/app/FooterContainer.ts");
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection[NavigationDirection["Next"] = 0] = "Next";
    NavigationDirection[NavigationDirection["Prev"] = 1] = "Prev";
})(NavigationDirection = exports.NavigationDirection || (exports.NavigationDirection = {}));
var LastLoginIndecation;
(function (LastLoginIndecation) {
    LastLoginIndecation[LastLoginIndecation["_undefined"] = 0] = "_undefined";
    LastLoginIndecation[LastLoginIndecation["none"] = 1] = "none";
    LastLoginIndecation[LastLoginIndecation["border"] = 2] = "border";
    LastLoginIndecation[LastLoginIndecation["welcome"] = 3] = "welcome";
})(LastLoginIndecation = exports.LastLoginIndecation || (exports.LastLoginIndecation = {}));
var PluginMode;
(function (PluginMode) {
    PluginMode[PluginMode["_undefined"] = 0] = "_undefined";
    PluginMode[PluginMode["Login"] = 1] = "Login";
    PluginMode[PluginMode["AddConnection"] = 2] = "AddConnection";
    PluginMode[PluginMode["LinkAccount"] = 3] = "LinkAccount";
})(PluginMode = exports.PluginMode || (exports.PluginMode = {}));
var RenderingMode;
(function (RenderingMode) {
    RenderingMode[RenderingMode["Unknown"] = 0] = "Unknown";
    RenderingMode[RenderingMode["Login"] = 1] = "Login";
    RenderingMode[RenderingMode["Welcome"] = 2] = "Welcome";
    RenderingMode[RenderingMode["Footer"] = 3] = "Footer";
})(RenderingMode = exports.RenderingMode || (exports.RenderingMode = {}));
var BasePluginGlobal = window.gigya._.plugins.BasePlugin;
var LoginPlugin = /** @class */ (function (_super) {
    tslib_1.__extends(LoginPlugin, _super);
    function LoginPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        _this.imageBase = window.gigya._.getCdnResource('/gs/i/HTMLLogin');
        _this.showEdit = false;
        _this.showWelcome = false; // need provider condition, see init sequence for toggaling the showWelcom flag
        _this.loginChangeEventHandler = function () { return _this.render(); };
        _this.pluginConfig = {
            arrowWidth: 16,
            floatingArrowWidth: 15,
            arrowHeight: 14,
            defaultlastLoginButtonSize: 30,
            defaultButtonSize: 30,
            defaultButtonSizeOnPopup: 35,
            headerHeight: 18,
            footerHeight: 18,
            rowSpacing: 5,
        };
        /* ------------------- Events ---------------------- */
        // We need the below method to maintain a reference to the correct this
        _this.onUserStateChange = function (event) { return _this.userStateChanged(event); };
        return _this;
    }
    // get the injection info based on the actual function being used for the plugin
    LoginPlugin.injectionInfo = function (uiApiInfo) {
        var info = window.gigya.utils.object.merge([
            uiApiInfo,
            {
                name: 'login_v2',
                jsName: 'gigya.services.socialize.plugins.login_v2',
            },
        ]);
        return info;
    };
    // get the config that match the current method
    LoginPlugin.prototype.getConfig = function () {
        var config = window.gigya.utils.object.merge([
            {
                requiredParams: [],
                hasMobileUI: false,
                allowModal: true,
                supportsResponsive: true,
                enableSizePolling: true,
            },
            LoginPlugin.InjectionInfoDefaultConfig[this.injectionInfo.methodName],
        ]);
        return config;
    };
    LoginPlugin.prototype.init = function (loadedCallback) {
        var _this = this;
        window.gigya.logger.info("login mode: " + this.params.UIMode);
        // Setting default values and parsing values into native values
        this.initParams();
        // init the container
        this.initUiContainer();
        // listen to global events
        this.registerToGlobalEvents();
        // css -  injecting the css into the page.
        var css = window.gigya.utils.templates.fill(this.getCss().main, { scriptBase: this.imageBase });
        window.gigya._.plugins.utils.css.addCss(css, this.params.cssPrefix);
        if (window.gigya.localInfo.isIE) {
            if (window.gigya.localInfo.isIE8 || window.gigya.localInfo.quirksMode)
                window.gigya._.plugins.utils.css.addCss(this.getCss().ie8patch, this.params.cssPrefix);
        }
        // Last Login Provider:
        this.lastLoginProvider = this.getLastLogin();
        // Facebook Suggest:
        this.facebookSuggestEnabled =
            this.params.autoDetectUserProviders &&
                this.params.autoDetectUserProviders.toLowerCase() == 'facebook' &&
                (!this.lastLoginProvider || this.lastLoginIndication != LastLoginIndecation.welcome);
        // Getting The User Information And render the plugin.
        var afterUserResponse = function (response) {
            // Init The Providers
            _this.initProviders();
            // Setting Up The Sprite Engine
            _this.initSpriteEngine();
            _this.user = response.user;
            _this.render();
            loadedCallback();
        };
        if (this.params._callGetUserInfoOnInitialRender)
            this.getUserInfo(afterUserResponse);
        else
            afterUserResponse({ user: null });
    };
    LoginPlugin.prototype.initParams = function () {
        if (this.params._pluginCenterFix)
            this.pluginConfig.arrowWidth = 25; // According to the arrow's image width + its padding
        this.pagingButtonStyle = PagingStyles_1.PagingButtonStyles[this.params.pagingButtonStyle] || PagingStyles_1.PagingButtonStyles['arrows'];
        // TODO: transfer all defaults to InjectionInfoDefaultConfig and delete the code which checks for each param
        if (!this.params.enabledProviders)
            this.params.enabledProviders = '*';
        if (!this.params.buttonsStyle)
            this.params.buttonsStyle = 'standard';
        this.showTooltips = !window.gigya.utils.validation.isExplicitFalse(this.params.showTooltips);
        var width = '' + this.params.width;
        this.params.responsiveWidth = width.indexOf('%') > -1;
        this.params.widthNum = parseInt(width);
        this.params.heightNum = parseInt('' + this.params.height);
        // Setting The Button Size + Support in 'UIConfig' [ONLY IF THE 'buttonSize' NOT SET'S]
        if (!this.params.buttonSize && this.params.UIConfig) {
            // normalize the string, so Upper casing or client input will not effect the logic.
            this.params.UIConfig = this.params.UIConfig.toLowerCase();
            // trying to parse the xml
            var xmlElement = this.parseXML(this.params.UIConfig);
            var buttonSizeElement;
            if (xmlElement)
                buttonSizeElement = xmlElement.getElementsByTagName('snbuttons')[0];
            if (buttonSizeElement) {
                this.params.buttonSize = parseInt(buttonSizeElement.getAttribute('buttonsize'));
            }
            else {
                // setting The Defaults sizes if no button size found
                this.params.buttonSize = this.params.isPopup ? this.pluginConfig.defaultButtonSizeOnPopup : this.pluginConfig.defaultButtonSize; // TODO we need to make sure that the default sizes is always set, should this be set for the defaults even if no UIConfig is set
            }
        }
        // default button size
        if (!this.params.buttonSize) {
            this.params.buttonSize = 30;
        }
        if (this.params.buttonSize)
            this.params.buttonSize = parseInt('' + this.params.buttonSize);
        // Setting the booleans
        this.params.showTermsLink = this.isTrue(this.params.showTermsLink);
        // Setting the private flags after initializing the booleans.
        this.showTerms = this.params.showTermsLink && this.params.showTermsLink !== 'false';
        this.isFooterEnabled = this.showTerms || this.params.UIMode == 'AddConnection';
        this.isHeaderEnabled = Boolean(this.params.headerText);
        // init the enums
        //Setting The Last Indecation Login Parameter
        if (!this.params.lastLoginIndication)
            this.params.lastLoginIndication = 'border';
        this.lastLoginIndication = LastLoginIndecation[String(this.params.lastLoginIndication).toLowerCase()] || LastLoginIndecation.border;
        // Setting The plugin mode 'addConnectionUI, showLoginUI'
        this.pluginMode = PluginMode[this.params.UIMode] || PluginMode.Login;
        this.stylePreset = ButtonStyles_1.ButtonStyles[String(this.params.buttonsStyle).toLowerCase()] || ButtonStyles_1.ButtonStyles['standard'];
        this.buttonHeight = parseInt(String(this.params.buttonSize));
        this.buttonWidth = Math.ceil(this.buttonHeight * this.stylePreset.ratio);
    };
    LoginPlugin.prototype.initUiContainer = function () {
        if (this.getPluginStyle() != PluginStyles_1.PluginStyle.legacy || !this.isModal)
            this.container.innerHTML = '';
        this.uiContainer = this.createElementFromHTMLString(window.gigya.utils.templates.fill(this.getTemplates().uiContainer, { containerID: this.params.containerID }));
        this.uiContainer.style.height = this.params.height + 'px';
        this.uiContainer.style.width = this.params.widthNum + (this.params.responsiveWidth ? '%' : 'px');
        if (this.isModal) {
            this.uiContainer.style.paddingTop = '20px';
        }
        this.container.appendChild(this.uiContainer);
    };
    LoginPlugin.prototype.initProviders = function () {
        var _this = this;
        if (this.pluginMode === PluginMode.Login && !this.params.requiredCapabilities) {
            this.params.requiredCapabilities = 'login';
        }
        if (this.pluginMode === PluginMode.AddConnection && !this.params.requiredCapabilities) {
            this.params.requiredCapabilities = 'friends';
        }
        // Setting The Default Providers Configuration []
        // init the providers list
        this.providers = window.gigya.global.resolveProviders(this.params.enabledProviders, this.params.disabledProviders, this.params.requiredCapabilities);
        // if Last Login indecator is 'Border', set the last login provider at 0 index.
        if (this.pluginMode === PluginMode.AddConnection && this.lastLoginIndication == LastLoginIndecation.border) {
            for (var i = 0; i < this.providers.length; i++) {
                var provider = this.providers[i];
                if (this.providers[i].name == this.lastLoginProvider) {
                    this.providers.splice(i, 1);
                    this.providers.unshift(provider);
                    break;
                }
            }
        }
        // set's the welcome screen indecation.
        // Checking of we are connected, and if we have a 'lastLoginProvider' info from the cookie
        // and the last login indecation is set to welcom screen
        if (this.pluginMode === PluginMode.Login && this.lastLoginProvider && this.lastLoginIndication == LastLoginIndecation.welcome) {
            // checking if the last login provider is on the providers list
            for (var i = 0; i < this.providers.length; i++) {
                if (this.providers[i].name == this.lastLoginProvider) {
                    this.lastLoginProviderObject = this.providers[i];
                    this.showWelcome = true;
                    break;
                }
            }
        }
        // Custome Buttons And Providers:
        var customButtons = [];
        switch (this.pluginMode) {
            case PluginMode.AddConnection: // AddConnection doesn't support multiple custom buttons for now
                if (this.params.customButton)
                    customButtons = [this.params.customButton];
                else if (this.params.customButtons && this.params.customButtons.length > 0)
                    customButtons = [this.params.customButtons[0]];
                break;
            default:
                customButtons = this.params.customButtons || [];
                if (this.params.customButton)
                    customButtons.push(this.params.customButton);
                break;
        }
        window.gigya.utils.array.forEach(customButtons, function (oButton) {
            if (oButton) {
                _this.addCustomButton(oButton);
            }
        });
        if (this.providers.length == 0 && !this.facebookSuggestEnabled) {
            this.dispatchErrorFromResponse({
                status: 'ERR_NO_PROVIDERS',
                statusMessage: 'No providers',
                errorCode: 400100,
                errorMessage: 'No providers',
            });
            return;
        }
        var arConnectedProviders = [];
        for (var i = 0; i < this.providers.length; i++) {
            var pIdentity = this.getIdentityInfoForProvider(this.providers[i]);
            var provider = this.providers[i];
            if (pIdentity.isConnected) {
                arConnectedProviders.push(provider);
            }
        }
        // Re Arrenging the connected icons on the providers list.
        this.providers = arConnectedProviders.concat(window.gigya.socialize.hideProvidersByName(this.providers, arConnectedProviders.join(',')));
    };
    LoginPlugin.prototype.addCustomButton = function (oButton) {
        var pCustomProvider;
        var providerType = !oButton.type ? 'eventonly' : oButton.type.toLowerCase();
        var providerId;
        var providerName;
        switch (providerType) {
            case 'oidc':
                providerId = 10001;
                providerName = oButton.opName;
                break;
            case 'saml':
                providerId = 4122;
                providerName = oButton.idpName;
                break;
            case 'eventonly':
                providerId = 4121;
                providerType = 'openID';
                // #48807 - Ensure each eventonly button has a unique name.
                // The provider length is incremented for each customButton so this will be a unique number for this instance.
                providerName = String(this.providers.length);
                break;
            default:
                console.warn('gigya: invalid custom button type');
                return;
        }
        pCustomProvider = window.gigya.utils.object.clone(window.gigya.socialize._getProviderByID(providerId));
        pCustomProvider.imgName = providerType;
        pCustomProvider.displayName = oButton.providerName;
        pCustomProvider.buttonData = oButton;
        pCustomProvider.isCustomProvider = true;
        if (providerName) {
            pCustomProvider.name = providerType + "-" + providerName;
        }
        if (!oButton.providerName) {
            oButton.providerName = '';
        }
        if (this.shouldAddCustomProvider(pCustomProvider)) {
            this.providers.splice(oButton.position && oButton.position > 1 ? oButton.position - 1 : 0, 0, pCustomProvider);
        }
    };
    LoginPlugin.prototype.shouldAddCustomProvider = function (customProvider) {
        if (!customProvider)
            return false;
        var eProviders = window.gigya.utils.array.getArrayFromString(this.params.enabledProviders, ',', true);
        switch (this.pluginMode) {
            // #67795 conflicting providers list contains custom buttons
            case PluginMode.LinkAccount:
                return customProvider.name && window.gigya.utils.array.some(eProviders, function (p) { return p.toLowerCase() === customProvider.name.toLowerCase(); });
            default:
                return true;
        }
    };
    LoginPlugin.prototype.initSpriteEngine = function () {
        var spriteProviders = [], iconSize = this.params.buttonSize;
        for (var i = 0; i < this.providers.length; i++) {
            spriteProviders.push(this.providers[i].toString().split('-')[0]);
        }
        if (typeof iconSize == 'undefined' || isNaN(iconSize)) {
            iconSize = this.params.isPopup ? this.pluginConfig.defaultButtonSizeOnPopup : this.pluginConfig.defaultButtonSize;
        }
        var imgIconSize = Math.floor(iconSize / 5) * 5;
        if (imgIconSize < this.stylePreset.minSize) {
            imgIconSize = this.stylePreset.minSize;
        }
        if (imgIconSize > this.stylePreset.maxSize) {
            imgIconSize = this.stylePreset.maxSize;
        }
        var btnImgW = Math.round(iconSize * this.stylePreset.ratio);
        var btnImgH = iconSize;
        // supporting buttons states.
        // different states are available for the buttons: normal (no state), connected and last login
        // in the future we'll want to specify the requested state
        // no state at the moment..
        var states = '[]';
        // set the Sprite Render Engine
        this.spriteRenderer = window.gigya.global.getSpriteRenderers({
            loginIcons: {
                path: '/HTMLLogin/' +
                    this.stylePreset.base +
                    '[' +
                    spriteProviders.join(',') +
                    ']_' +
                    states +
                    imgIconSize * this.pixelRatio +
                    this.stylePreset.ext,
                w: btnImgW,
                h: btnImgH,
                pixelRatio: this.pixelRatio,
            },
        });
    };
    /* ------------------ Rendering --------------*/
    LoginPlugin.prototype.resizePlugin = function (old, curr) {
        // TODO defing a formula for 'isMuteted' to determind if to rerender...
        this.lastPolledWidth = curr.width;
        this.render();
    };
    LoginPlugin.prototype.render = function () {
        var gridSize;
        // Resetting The Inner Container.
        this.uiContainer.innerHTML = '';
        if (this.isHeaderEnabled) {
            var header = this.createElementFromHTMLString(window.gigya.utils.templates.fill(this.getTemplates().header, {
                headerText: this.params.headerText,
            }));
            this.uiContainer.appendChild(header);
        }
        // Toggle Login/Welcome Mode
        if (!this.showWelcome) {
            gridSize = gridSize || this.getProvidersGridDimensions();
            var loginContainer = new LoginContainer_1.LoginContainer(this, gridSize);
            var providers = loginContainer.getHtmlElement();
            this.uiContainer.appendChild(providers);
            loginContainer.expandInContainerAfterRender();
        }
        else {
            var welcomeContainer = new WelcomeContainer_1.WelcomeContainer(this);
            this.uiContainer.appendChild(welcomeContainer.getHtmlElement());
        }
        if (this.isFooterEnabled) {
            gridSize = gridSize || this.getProvidersGridDimensions();
            var footerContainer = new FooterContainer_1.FooterContainer(this, gridSize);
            this.uiContainer.appendChild(footerContainer.getHtmlElement());
        }
        // Set the coordinates of the pop-up in case we are in edit mode
        if (this.pluginMode === PluginMode.AddConnection && this.params.showWhatsThis) {
            var whatsthisElement = window.gigya.utils.DOM.getElementsByClass(this.uiContainer, 'gigya-login-footer-whatsthis')[0];
            var providorsTable = window.gigya.utils.DOM.getElementsByClass(this.uiContainer, 'gigya-login-providers-container')[0];
            var containerDimensions = this.getContainerDimensions();
            var heightRatio = (providorsTable.offsetHeight * 0.07).toString();
            whatsthisElement.style.top = parseInt(heightRatio) + '%';
            whatsthisElement.style.left = (containerDimensions.w - whatsthisElement.offsetWidth) / 2 + 'px';
        }
    };
    LoginPlugin.prototype.userStateChanged = function (event) {
        var _this = this;
        if (event && event.user) {
            // We already have the user - no need to fetch the user details
            this.saveUserInfoAndRenderPlugin(event.user);
        }
        // We don't have the user details - fetch them and then render the control
        else {
            this.getUserInfo(function (result) { return _this.saveUserInfoAndRenderPlugin(result.user); });
        }
    };
    LoginPlugin.prototype.saveUserInfoAndRenderPlugin = function (user) {
        this.user = user;
        this.showEdit =
            this.pluginMode === PluginMode.AddConnection && this.user.isConnected && !window.gigya.utils.validation.isExplicitFalse(this.params.showEditLink);
        // render the control
        this.render();
    };
    LoginPlugin.prototype.registerToGlobalEvents = function () {
        this.addGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
            onConnectionAdded: this.onUserStateChange,
            onConnectionRemoved: this.onUserStateChange,
        });
        if (this.facebookSuggestEnabled)
            this.addGlobalEventHandler('onFacebookLoaded', this.onUserStateChange);
    };
    LoginPlugin.prototype.dispose = function () {
        if (this.facebookSuggestEnabled)
            this.removeGlobalEventHandler('onFacebookLoaded', this.onUserStateChange);
        this.removeGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
            onConnectionAdded: this.onUserStateChange,
            onConnectionRemoved: this.onUserStateChange,
        });
        _super.prototype.dispose.call(this);
    };
    LoginPlugin.prototype.onProviderClickHandler = function (e) {
        var _this = this;
        var target = e.target || e.srcElement;
        // Find the parent holding the provider attribute.
        while (target && !target.getAttribute('data-gigya-provider')) {
            target = target.parentNode;
        }
        if (target) {
            // get the provider name from the event
            var providerName = target.getAttribute('data-gigya-provider');
            if (providerName) {
                // find the provider in the private providers repository
                var provider = window.gigya._.providers.getProviderByName(providerName, this.providers);
                // if not found, search the global providers repository
                if (!provider)
                    provider = window.gigya._.providers.getProviderByName(providerName);
                // setting the params for the request
                var params = {
                    provider: providerName,
                    callback: function (res) {
                        if (res.errorCode != 0) {
                            delete res.requestParams.getInfoResponse;
                            delete res.requestParams.context;
                            delete res.context;
                            _this.dispatchErrorFromResponse(res);
                        }
                        else {
                            if (_this.params.isPopup) {
                                window.gigya.socialize._closeComponent(_this.params.rid, true);
                            }
                            var eventName = _this.pluginMode === PluginMode.AddConnection && res.operation == 'addConnection' ? 'connectionAdded' : 'login';
                            var oEvent = window.gigya._.addUserInfoToEvent(res, { provider: provider, response: res }, true);
                            _this.dispatchPluginEvent(eventName, oEvent);
                        }
                    },
                };
                if (provider.ID == 4121) {
                    var oButton = provider['buttonData'];
                    params['openIDProviderName'] = oButton.provider;
                    params['openIDProviderLogo'] = oButton.logoURL;
                    params['openIDURL'] = oButton.openIDURL;
                }
                if (provider.ID != 4121 || provider['buttonData'].type == 'openID') {
                    if (this.pluginMode === PluginMode.AddConnection) {
                        var providerIdentityInformation = this.getIdentityInfoForProvider(provider);
                        if (providerIdentityInformation.isConnected) {
                            // Overwrite the callback
                            params.callback = function () {
                                _this.dispatchPluginEvent('permissions', {
                                    provider: provider,
                                });
                                _this.render();
                            };
                            window.gigya.socialize.requestPermissions(this.params, this.params, params);
                        }
                        else {
                            window.gigya.socialize.connect(this.params, this.params, params);
                        }
                    }
                    else if (this.params['accountsSocialLogin']) {
                        // this if for 'Screen sets'
                        window.gigya.accounts.socialLogin(this.params, this.params, params);
                    }
                    else {
                        window.gigya.socialize.login(this.params, this.params, params);
                    }
                }
            }
            var eventObj;
            if (provider['buttonData'])
                eventObj = { button: provider['buttonData'] };
            this.dispatchPluginEvent('buttonClicked', eventObj);
        }
        e.cancelBubble = true;
        if (e.stopPropagation)
            e.stopPropagation();
    };
    /* ------------------- Calculations ---------------------- */
    // Calculate the container dimensions to enable responsive calculations.
    LoginPlugin.prototype.getContainerDimensions = function () {
        var width = this.params.widthNum;
        if (this.params.responsiveWidth) {
            // Fix for getting the PRECISE dimensions of the container element nested inside an unknown container with no specific width.
            // See: http://stackoverflow.com/questions/24104905/offsetwidth-not-same-in-different-browsers.
            var boundingBox = (this.uiContainer.offsetParent && this.uiContainer.getBoundingClientRect && this.uiContainer.getBoundingClientRect()) || {};
            var pxWidth = boundingBox.width || boundingBox.right - boundingBox.left || this.uiContainer.offsetWidth;
            width = (pxWidth / 100) * this.params.widthNum;
        }
        return {
            h: this.params.heightNum,
            w: width,
        };
    };
    LoginPlugin.prototype.getProvidersGridDimensions = function () {
        // calculate without the pagger
        var providersGridDimensions = this._getProvidersGridDimensions(0);
        // we have more providers then space
        var needReCalculation = this.providers.length > providersGridDimensions.rows * providersGridDimensions.columns;
        if (needReCalculation) {
            var isFloatingArrows = this.pagingButtonStyle.getStyleName(this) === 'floating';
            // calculate with the pager
            providersGridDimensions = this._getProvidersGridDimensions(isFloatingArrows ? this.pluginConfig.floatingArrowWidth : this.pluginConfig.arrowWidth);
        }
        else if (!this.providers.length) {
            providersGridDimensions.columns = providersGridDimensions.rows = 0;
        }
        else {
            // Normalize The Cols / Rows
            // we dont have paging, so we need to balance all the providers
            // Getting the number of rows currently occupied with providers
            var factorialDivider = Math.ceil(this.providers.length / providersGridDimensions.columns);
            // resize the 'cols' so the grid can fit all the providers in the same target rows
            providersGridDimensions.columns = Math.ceil(this.providers.length / factorialDivider);
            providersGridDimensions.rows = factorialDivider;
        }
        return providersGridDimensions;
    };
    // return a grid dimension size for the icons preset
    LoginPlugin.prototype._getProvidersGridDimensions = function (arrowWidth) {
        // Consts.
        var verticalMargin = 5;
        var horizontalMargin = 5;
        var buttonHeight = this.params.buttonSize;
        var buttonWidth = Math.ceil(this.params.buttonSize * this.stylePreset.ratio);
        // Minimum size for the provider's grid is 1 button
        var minimumGridHeight = buttonHeight;
        var minimumGridWidth = buttonWidth;
        var containerDimensions = this.getContainerDimensionsWithoutPagerAndFooter(arrowWidth, minimumGridHeight);
        var columnsAndRows = this.getColumnsAndRowsOfProvidersGrid(containerDimensions.containerWidth, containerDimensions.containerHeight, buttonWidth, buttonHeight, horizontalMargin, verticalMargin);
        var providersGridWidthAndHeight = this.getWidthAndHeightOfProvidersGrid(containerDimensions.containerHeight, columnsAndRows.columns, buttonWidth, minimumGridWidth, minimumGridHeight, horizontalMargin, arrowWidth);
        var grid = {
            columns: columnsAndRows.columns,
            rows: columnsAndRows.rows,
            height: providersGridWidthAndHeight.height,
            width: providersGridWidthAndHeight.width,
            totalWidthIncludingPager: providersGridWidthAndHeight.totalWidthIncludingPager,
            isPaged: !arrowWidth,
        };
        return grid;
    };
    LoginPlugin.prototype.getContainerDimensionsWithoutPagerAndFooter = function (arrowWidth, minimumGridHeight) {
        // get the actual available space on the container
        var containerDimension = this.getContainerDimensions();
        // Calculate the effective size of the containers
        var containerWidth = containerDimension.w - arrowWidth * 2;
        var containerHeight = containerDimension.h > minimumGridHeight ? containerDimension.h : minimumGridHeight;
        if (this.isFooterEnabled) {
            containerHeight -= this.pluginConfig.footerHeight;
        }
        return {
            containerWidth: containerWidth,
            containerHeight: containerHeight,
        };
    };
    LoginPlugin.prototype.getColumnsAndRowsOfProvidersGrid = function (containerWidth, containerHeight, buttonWidth, buttonHeight, horizontalMargin, verticalMargin) {
        // calculating a virtual grid to determind how many providers can fit in the container.
        var columnsCalculation = Math.floor(containerWidth / (buttonWidth + horizontalMargin));
        var columns = columnsCalculation > this.providers.length ? this.providers.length : columnsCalculation;
        var rows = Math.floor((containerHeight + verticalMargin) / (buttonHeight + verticalMargin));
        // setting minimum columns rows
        columns = columns > 0 ? columns : 1;
        rows = rows > 0 ? rows : 1;
        return {
            columns: columns,
            rows: rows,
        };
    };
    LoginPlugin.prototype.getWidthAndHeightOfProvidersGrid = function (containerHeight, columns, buttonWidth, minimumGridWidth, minimumGridHeight, horizontalMargin, arrowWidth) {
        // calculating the inner size of the grid container
        var h = containerHeight;
        var w = columns * (buttonWidth + horizontalMargin) - horizontalMargin;
        // setting minimum.
        w = w >= minimumGridWidth ? w : minimumGridWidth;
        h = h >= minimumGridHeight ? h : minimumGridHeight;
        var totalWidthIncludingPager = w + arrowWidth * 2;
        return {
            height: h,
            width: w,
            totalWidthIncludingPager: totalWidthIncludingPager,
        };
    };
    /* ------------------------------- Helpers -------------------------------- */
    LoginPlugin.prototype.getIdentityInfoForProvider = function (provider) {
        var providerIdentityInfo = {
            name: '',
            isConnected: false,
            hasAllRequiredPermissions: true,
            requiredPermissions: [],
            identity: null,
        };
        if (!provider) {
            return providerIdentityInfo;
        }
        if (this.user && this.user.identities) {
            for (var identity in this.user.identities) {
                var curIdentity = this.user.identities[identity];
                if (curIdentity.provider == provider.name) {
                    providerIdentityInfo.name = provider.name;
                    providerIdentityInfo.identity = curIdentity;
                    providerIdentityInfo.isConnected = true;
                    break;
                }
            }
        }
        if (providerIdentityInfo.identity) {
            if (providerIdentityInfo.identity.missingPermissions) {
                var missingPermissionsString = ',' + providerIdentityInfo.identity.missingPermissions.toLowerCase().replace(/ /g, '') + ',';
                var neededPermissions = window.gigya.utils.object.extractProperty(this.params, provider.name + 'ExtraPermissions');
                if (!neededPermissions)
                    neededPermissions = window.gigya.utils.object.extractProperty(this.params, 'extraPermissions');
                if (!neededPermissions)
                    neededPermissions = '';
                neededPermissions = neededPermissions.toLowerCase();
                var arNeededPermissions = neededPermissions.split(',');
                for (var iPermission = 0; iPermission < arNeededPermissions.length; iPermission++) {
                    if (missingPermissionsString && missingPermissionsString.toLowerCase().indexOf(',' + arNeededPermissions[iPermission] + ',') != -1) {
                        providerIdentityInfo.hasAllRequiredPermissions = false;
                        providerIdentityInfo.requiredPermissions.push(arNeededPermissions[iPermission]);
                    }
                }
            }
        }
        return providerIdentityInfo;
    };
    LoginPlugin.prototype.createElementFromHTMLString = function (elementHtml) {
        var elementWrapper = document.createElement('span');
        elementWrapper.innerHTML = elementHtml;
        return elementWrapper.childNodes[0];
    };
    LoginPlugin.prototype.getUserInfo = function (callback) {
        var _this = this;
        window.gigya.socialize.getUserInfo(this.params, {
            includeAllIdentities: true,
            callback: function (response) {
                if (response.errorCode == 0) {
                    _this.user = response.user;
                    _this.showEdit =
                        _this.pluginMode === PluginMode.AddConnection &&
                            _this.user.isConnected &&
                            !window.gigya.utils.validation.isExplicitFalse(_this.params.showEditLink);
                }
                else {
                    _this.dispatchErrorFromResponse(response);
                }
                if (callback)
                    callback(response);
            },
        });
    };
    LoginPlugin.prototype.getStyle = function (buttonsStyle) {
        switch (buttonsStyle.toLowerCase()) {
            case 'fulllogocolored':
                return {
                    ratio: 2.6,
                    base: 'FullLogoColored/',
                    ext: '.png',
                    noConnected: true,
                };
            case 'fulllogo':
                return {
                    ratio: 2.6,
                    base: 'FullLogo/',
                    ext: '.png',
                    noConnected: true,
                };
            case 'signinwith':
                return {
                    ratio: 7.05,
                    base: 'SignInWith/',
                    ext: '.png',
                    noLastLogin: true,
                    noConnected: true,
                    minSize: 20,
                };
            default:
                return {
                    ratio: 1,
                    base: '',
                    ext: '.png',
                };
        }
    };
    LoginPlugin.prototype.getLastLogin = function () {
        return window.gigya._.apiAdapter.getStorage().getItem('_gig_llp');
    };
    LoginPlugin.prototype.getLastLoginName = function () {
        return window.gigya._.apiAdapter.getStorage().getItem('_gig_llu');
    };
    LoginPlugin.prototype.parseXML = function (data) {
        var xml, tmp;
        if (!data || typeof data !== 'string') {
            return null;
        }
        // Support: IE9
        try {
            tmp = new DOMParser();
            xml = tmp.parseFromString(data, 'text/xml');
        }
        catch (e) {
            xml = undefined;
        }
        return xml;
    };
    LoginPlugin.prototype.isTrue = function (value, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ''; }
        if (value == null)
            return defaultValue;
        return value && (value == true || value.toLowerCase() == 'true');
    };
    LoginPlugin.prototype.createElemnetBlock = function (elementType, attributes, content) {
        var elm = document.createElement(elementType);
        for (var attribute in attributes) {
            elm.setAttribute(attribute, attributes[attribute]);
        }
        return elm;
    };
    // statics
    LoginPlugin.pluginName = 'login';
    LoginPlugin.InjectionInfoDefaultConfig = {
        showAddConnectionsUI_v2: {
            defaultParams: {
                width: 120,
                height: 110,
                requiredCapabilities: 'friends',
                pagingButtonStyle: 'arrows',
                UIMode: PluginMode[PluginMode.AddConnection],
                _callGetUserInfoOnInitialRender: true,
            },
            defaultModalParams: {
                width: 280,
                height: 220,
                requiredCapabilities: 'friends',
                pagingButtonStyle: 'arrows',
                UIMode: PluginMode[PluginMode.AddConnection],
                captionTextKey: 'connect_with_your_friends',
                _callGetUserInfoOnInitialRender: true,
            },
        },
        showLoginUI_v2: {
            defaultParams: {
                width: 110,
                height: 110,
                requiredCapabilities: 'login',
                pagingButtonStyle: 'arrows',
                UIMode: PluginMode[PluginMode.Login],
                _callGetUserInfoOnInitialRender: true,
            },
            defaultModalParams: {
                width: 250,
                height: 200,
                requiredCapabilities: 'login',
                pagingButtonStyle: 'arrows',
                UIMode: PluginMode[PluginMode.Login],
                captionTextKey: 'login',
                _callGetUserInfoOnInitialRender: true,
            },
        },
    };
    return LoginPlugin;
}(BasePluginGlobal));
exports.LoginPlugin = LoginPlugin;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/PagingStyles.ts":
/*!***********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/PagingStyles.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function simpleStyle(styleName) {
    return {
        getStyleClass: function () { return 'gigya-login-providers-arrow-marker-' + styleName; },
        getStyleName: function (info) { return styleName; },
    };
}
exports.PagingButtonStyles = {
    arrows: simpleStyle('arrows'),
    newArrows: simpleStyle('newArrows'),
    floating: simpleStyle('floating'),
    auto: {
        getStyleClass: function (info) {
            var styleName = exports.PagingButtonStyles['auto'].getStyleName(info);
            return exports.PagingButtonStyles[styleName].getStyleClass(info);
        },
        getStyleName: function (info) { return (info.isMobileUI && (!info.lastPolledWidth || info.lastPolledWidth < 500) ? 'floating' : 'newArrows'); },
    },
};


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/Utils.ts":
/*!****************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/Utils.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.createElementFromHTMLString = function (elementHtml) {
        var elementWrapper = document.createElement('span');
        elementWrapper.innerHTML = elementHtml;
        return elementWrapper.childNodes[0];
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/WelcomeContainer.ts":
/*!***************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/WelcomeContainer.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ContainerBase_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/ContainerBase */ "./src/socialize/Gigya.Js.Login2/app/ContainerBase.ts");
var WelcomeContainer = /** @class */ (function (_super) {
    tslib_1.__extends(WelcomeContainer, _super);
    function WelcomeContainer(plugin) {
        var _this = _super.call(this) || this;
        _this.plugin = plugin;
        _this.ElementsSelector = {
            container: 'gigya-login-welcome-container',
            user: 'gigya-login-welcome-user',
            provider: 'gigya-login-welcome-provider',
            signinlink: 'gigya-login-welcome-signin-link',
            greeting: 'gigya-login-welcome-greeting',
        };
        var template = _this.plugin.getTemplates()['welcome'];
        _this.element = _this.plugin.createElementFromHTMLString(template);
        return _this;
    }
    WelcomeContainer.prototype.getHtmlElement = function () {
        var providerButtonSizes = this.getWelcomeButtonSized();
        this.setGreetingElement();
        this.setSignInUsingAnotherAccount();
        // Setting The Provider Button
        // NOTICE - keeping this for last to measure the container and applay margin to fit in the containe.
        this.setProviderCellElement(providerButtonSizes.imageSize, providerButtonSizes.buttonSize);
        return this.element;
    };
    WelcomeContainer.prototype.getWelcomeButtonSized = function () {
        var welcomeBtnSize = this.plugin.params.lastLoginButtonSize
            ? this.plugin.params.lastLoginButtonSize
            : this.plugin.pluginConfig.defaultlastLoginButtonSize;
        welcomeBtnSize = parseInt(welcomeBtnSize.toString());
        var welcomeImgSize = Math.floor(welcomeBtnSize / 5) * 5;
        if (welcomeImgSize < 25)
            welcomeImgSize = 20;
        if (welcomeImgSize > 35)
            welcomeImgSize = 40;
        return {
            buttonSize: welcomeBtnSize,
            imageSize: welcomeImgSize,
        };
    };
    WelcomeContainer.prototype.setProviderCellElement = function (welcomeImgSize, welcomeBtnSize) {
        var _this = this;
        var providerContainerElment = this.getChildByCssClass(this.element, this.ElementsSelector.provider);
        var style = this.plugin.stylePreset; // TODO different from before: was ButtonPresets.signin
        var img = '<img data-gigya-provider="' +
            this.plugin.lastLoginProviderObject.name +
            '" alt="' +
            this.plugin.lastLoginProviderObject.displayName +
            '" height="' +
            welcomeBtnSize +
            '" width="' +
            Math.ceil(this.plugin.params.lastLoginButtonSize * style.ratio) +
            '" src="' +
            this.plugin.imageBase +
            '/SignInWith/' +
            this.plugin.lastLoginProviderObject.name +
            '_' +
            welcomeImgSize +
            '.png" aria-hidden="true">';
        var providerCell = this.plugin.createElemnetBlock('div', {
            'data-gigya-provider': this.plugin.lastLoginProviderObject.name,
            style: [
                // TODO: There are cases where this puts "width: NaN" on the page.
                'width:',
                Math.ceil(welcomeImgSize * this.plugin.stylePreset.ratio),
                'px;',
                'height:',
                welcomeImgSize,
                'px;',
            ].join(''),
            class: 'gigya-login-provider',
            title: this.plugin.lastLoginProviderObject.name,
            // For WCAG:
            role: 'button',
            'aria-label': this.plugin.lastLoginProviderObject.name,
            tabindex: 0,
        });
        providerCell.innerHTML = img;
        providerContainerElment.appendChild(providerCell);
        var curHeight = window.gigya.utils.DOM.getHTMLSize(this.element.innerHTML, this.plugin.uiContainer).h;
        //// calculating the height of the wellcome in relation to the main container to fill missing spaces on the button.
        var marginSpace = this.plugin.params.heightNum -
            (curHeight +
                (this.plugin.isFooterEnabled ? this.plugin.pluginConfig.footerHeight : 0) +
                (this.plugin.isHeaderEnabled ? this.plugin.pluginConfig.headerHeight : 0));
        //// Upper Bound Margin
        var topMargin = Math.ceil(marginSpace / 2);
        var bottomMargin = Math.floor(marginSpace / 2);
        providerCell.style.marginBottom = topMargin + 'px';
        providerCell.style.marginTop = bottomMargin + 'px';
        // attaching the provider click event.
        window.gigya.utils.DOM.addEventListener(providerCell, 'click', function (e) {
            _this.plugin.onProviderClickHandler(e);
        });
        window.gigya.utils.DOM.addEventListener(providerCell, 'keydown', function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode == 32 || keyCode == 13) {
                _this.plugin.onProviderClickHandler(e);
            }
        });
    };
    WelcomeContainer.prototype.setGreetingElement = function () {
        var _this = this;
        var userGreetingContainerElement = this.getChildByCssClass(this.element, this.ElementsSelector.user);
        var username = window.gigya.utils.sanitize.sanitizeHTML(this.plugin.getLastLoginName());
        var greetingHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates()['welcomeGreeting'], {
            welcomeBack: this.plugin.getText('welcome_back_user', '%user', username),
        });
        var bubbleHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates()['welcomeBubble'], {
            notYou: this.plugin.getText('not_you', '%user', username),
        });
        userGreetingContainerElement.innerHTML = greetingHtml;
        var bubbleElm = this.plugin.createElementFromHTMLString(bubbleHtml);
        var greetingElm = this.getChildByCssClass(this.element, this.ElementsSelector.greeting);
        greetingElm.appendChild(bubbleElm);
        var mainContainerDimensions = this.plugin.getContainerDimensions();
        var userGreetingDimensions = window.gigya.utils.DOM.getHTMLSize(userGreetingContainerElement.innerHTML, this.plugin.uiContainer);
        var notYouDimensions = window.gigya.utils.DOM.getHTMLSize(bubbleElm.outerHTML, this.plugin.uiContainer);
        if (userGreetingDimensions.w > mainContainerDimensions.w) {
            // show Not You Bubble?
            if (userGreetingDimensions.w - notYouDimensions.w < mainContainerDimensions.w) {
                bubbleElm.style.display = 'none';
            }
            else {
                // Need to render only 'Welcome back' - without the user name
                userGreetingContainerElement.innerHTML = window.gigya.utils.templates.fill(this.plugin.getTemplates()['welcomeGreeting'], {
                    welcomeBack: this.plugin.getText('welcome_back_user', '%user', ''),
                });
            }
        }
        // Setting The Events:
        var notYouButton = this.getChildByCssClass(this.element, 'gigya-login-welcome-bubble');
        var signOutElements = [this.getChildByCssClass(this.element, this.ElementsSelector.signinlink), notYouButton];
        for (var i = 0; i < signOutElements.length; i++) {
            window.gigya.utils.DOM.addEventListener(signOutElements[i], 'click', function () {
                _this.onNotYouClickHandler();
            });
        }
        // Allow role=button to work with screen-readers on DIV element.
        window.gigya.utils.DOM.addEventListener(notYouButton, 'keydown', function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode == 32 || keyCode == 13) {
                // Focus is immediately switched to a login button, prevent the enter button from clicking it.
                e.preventDefault();
                e.stopPropagation();
                _this.onNotYouClickHandler();
            }
        });
    };
    WelcomeContainer.prototype.setSignInUsingAnotherAccount = function () {
        var signInLinkContainer = this.getChildByCssClass(this.element, this.ElementsSelector.signinlink);
        var linkHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates()['welcomeSignInLink'], {
            singInUsingDifferentNetwork: this.plugin.getText('sign_in_using_a_different_network'),
        });
        signInLinkContainer.innerHTML = linkHtml;
    };
    WelcomeContainer.prototype.onNotYouClickHandler = function () {
        window.gigya.utils.cookie.remove('_gig_llp');
        window.gigya.utils.cookie.remove('_gig_llu');
        window.gigya.thisScript.globalConf['alwaysForceAuthentication'] = true; //feature #7643
        this.plugin.showWelcome = false;
        this.plugin.render();
        // WCAG: Focus on first login provider if user clicks "not you" link.
        var firstLoginProvider = this.plugin.container.querySelector('.gigya-login-providers-list button');
        if (firstLoginProvider) {
            firstLoginProvider.focus();
        }
    };
    return WelcomeContainer;
}(ContainerBase_1.ContainerBase));
exports.WelcomeContainer = WelcomeContainer;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/css/ie8patch.css":
/*!************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/css/ie8patch.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.gigya-login-providers-arrow-left,\r\n.gigya-login-providers-list-container,\r\n.gigya-login-providers-arrow-right {\r\n    display:inline;\r\n}\r\n\r\n.gigya-login-provider div {\r\n    display: -ms-inline-grid;\r\n}\r\n\r\n\r\ntable.gigya-login-providers-container {\r\n    top: 0px;\r\n}"

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/css/iePatch.css":
/*!***********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/css/iePatch.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gigya-login-footer {\r\n    position: relative;\r\n    top: -9px;\r\n}\r\n"

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/css/main.css":
/*!********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/css/main.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.gigya-link {\r\n    line-height: normal;\r\n    cursor: pointer;\r\n    font-family: arial;\r\n    font-size: 11px;\r\n    color: #0086f1;\r\n}\r\n\r\n.gigya-login {\r\n    margin: 10px;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n.gigya-login-providers-container {\r\n    display: block;\r\n    margin: 0 auto;\r\n    background-color: transparent;\r\n    border-collapse: collapse;\r\n    white-space: nowrap;\r\n    border: none;\r\n    vertical-align: middle;\r\n\r\n    position:relative;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    -ms-transform: translateY(-50%);\r\n    -webkit-transform: translateY(-50%);\r\n    -moz-transform: translateY(-50%);\r\n\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.gigya-login-providers-container,\r\n.gigya-login-providers-container tr,\r\n.gigya-login-providers-container td,\r\n.gigya-login-providers-container th {\r\n    vertical-align: middle;\r\n}\r\n\r\n.gigya-login-providers-list {\r\n    display: none;\r\n}\r\n\r\n.gigya-active .gigya-login-providers-list {\r\n    display: block;\r\n}\r\n\r\n.gigya-login-provider-row {\r\n    display: block;\r\n    clear: both;\r\n    float: none;\r\n    margin: 0;\r\n    padding: 2.5px 0;\r\n    line-height:18px;\r\n}\r\n\r\n.gigya-login-provider {\r\n    cursor: pointer;\r\n    margin-right: 5px;\r\n}\r\n\r\n.gigya-login-provider div {\r\n    display: inline-block;\r\n}\r\n\r\n.gigya-login-provider-last {\r\n    margin-right: 0;\r\n}\r\n\r\n.gigya-login-provider img {\r\n    vertical-align: baseline;\r\n}\r\n\r\n.gigya-login-providers-container div,\r\n.gigya-login-providers-container span {\r\n    margin: 0;\r\n}\r\n\r\n.gigya-login-providers-list-container {\r\n    vertical-align: top;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.gigya-login-providers-list-container tbody,\r\n.gigya-login-providers-list-container tr {\r\n    width: 100%;\r\n}\r\n\r\n.gigya-login-providers-arrow-left,\r\n.gigya-login-providers-arrow-right {\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    -webkit-tap-highlight-color:transparent;\r\n}\r\n\r\n.gigya-login-providers-arrow-left button,\r\n.gigya-login-providers-arrow-right button {\r\n    cursor: inherit;\r\n}\r\n\r\n.gigya-login-providers-arrow-left.no-arrows,\r\n.gigya-login-providers-arrow-right.no-arrows {\r\n    display: none;\r\n}\r\n\r\n.gigya-login-providers-arrow-marker-floating-disabled {\r\n    visibility: hidden;\r\n}\r\n\r\n.gigya-login-providers-arrow-left div .gigya-login-providers-arrow-marker {\r\n    background-repeat: no-repeat;\r\n    float: right;\r\n    margin-right: 17px;\r\n}\r\n\r\n.gigya-login-providers-arrow-right div .gigya-login-providers-arrow-marker {\r\n    background-repeat: no-repeat;\r\n    float: left;\r\n    margin-left: 17px;\r\n}\r\n\r\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-floating div .gigya-login-providers-arrow-marker {\r\n    height: 70px;\r\n    width: 42px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    position: relative;\r\n    float: left;\r\n    background-image: url('$scriptBase/paging/touch_button_left.png');\r\n}\r\n\r\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-floating div .gigya-login-providers-arrow-marker {\r\n    background-repeat: no-repeat;\r\n    height: 70px;\r\n    width: 42px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    position: relative;\r\n    float: right;\r\n    background-image: url('$scriptBase/paging/touch_button_right.png');\r\n}\r\n\r\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-arrows div .gigya-login-providers-arrow-marker {\r\n    height: 14px;\r\n    width: 8px;\r\n    background-image: url('$scriptBase/paging/navigation_arrow_left.png');\r\n    margin-right: 5px;\r\n}\r\n\r\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-arrows div .gigya-login-providers-arrow-marker {\r\n    height: 14px;\r\n    width: 8px;\r\n    background-image: url('$scriptBase/paging/navigation_arrow_right.png');\r\n    margin-left: 5px;\r\n}\r\n\r\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-arrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\r\n    height: 14px;\r\n    width: 8px;\r\n    background-image: url('$scriptBase/paging/navigation_arrow_left_disabled.png');\r\n}\r\n\r\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-arrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\r\n    height: 14px;\r\n    width: 8px;\r\n    background-image: url('$scriptBase/paging/navigation_arrow_right_disabled.png');\r\n}\r\n\r\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-newArrows div .gigya-login-providers-arrow-marker {\r\n    height: 14px;\r\n    width: 8px;\r\n    background-image: url('$scriptBase/paging/navigation_arrow_left.png');\r\n}\r\n\r\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-newArrows div .gigya-login-providers-arrow-marker {\r\n    height: 14px;\r\n    width: 8px;\r\n    background-image: url('$scriptBase/paging/navigation_arrow_right.png');\r\n}\r\n\r\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-newArrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\r\n    height: 14px;\r\n    width: 8px;\r\n    background-image: url('$scriptBase/paging/navigation_arrow_right_disabled.png');\r\n}\r\n\r\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-newArrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\r\n    height: 14px;\r\n    width: 8px;\r\n    background-image: url('$scriptBase/paging/navigation_arrow_left_disabled.png');\r\n}\r\n\r\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-disabled,\r\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-disabled {\r\n    cursor: default;\r\n}\r\n\r\n.gigya-login-header {\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.gigya-login-footer {\r\n    display: block;\r\n    clear: both;\r\n    height: 18px;\r\n    line-height: 18px;\r\n    overflow: hidden;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.gigya-login-footer-terms {\r\n    line-height: normal;\r\n    cursor: pointer;\r\n    font-family: arial;\r\n    font-size: 11px;\r\n    color: #0086f1;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.gigya-login-providers {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.gigya-login-footer-social-by,\r\n.gigya-login-footer-social-by:hover,\r\n.gigya-login-footer-social-by:active {\r\n    text-decoration: none;\r\n    font-family: arial;\r\n    font-weight: bold;\r\n    font-size: 11px;\r\n    cursor: pointer;\r\n    color: #828282;\r\n}\r\n\r\n.gigya-login-footer-social-by img.gigya-logo {\r\n    width: 32px;\r\n    height: 9px;\r\n    border: none;\r\n}\r\n\r\n.gigya-login-footer-whatsthis {\r\n    width: 150px;\r\n    height: 50px;\r\n    background-color: #FFFFFF;\r\n    border: 1px solid #767676;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    visibility: hidden;\r\n    position: absolute;\r\n    padding: 10px;\r\n}\r\n\r\n.gigya-login-footer-whatsthis span {\r\n    line-height: normal;\r\n    font-family: arial;\r\n    font-size: 11px;\r\n    color: #262626;\r\n}\r\n\r\n.gigya-login-welcome-greeting {\r\n    line-height: normal;\r\n    font-family: arial;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #4C4C4C;\r\n    white-space: nowrap;\r\n    display: inline-block;\r\n}\r\n\r\n.gigya-login-welcome-bubble {\r\n    display: inline-block;\r\n    line-height: 16px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.gigya-login-welcome-bubble-left,\r\n.gigya-login-welcome-bubble-right,\r\n.gigya-login-welcome-bubble-center {\r\n    display: inline-block;\r\n    height: 17px;\r\n    float: left;\r\n}\r\n\r\n.gigya-login-welcome-bubble-left {\r\n    background-image: url('$scriptBase/NotYou_Left.png');\r\n    width: 8px;\r\n}\r\n\r\n.gigya-login-welcome-bubble-right {\r\n    background-image: url('$scriptBase/NotYou_Right.png');\r\n    width: 4px;\r\n}\r\n\r\n.gigya-login-welcome-bubble-center {\r\n    background-image: url('$scriptBase/NotYou_Mid.png');\r\n    background-repeat: repeat-x;\r\n}\r\n\r\n.gigya-login-welcome-bubble-text {\r\n    cursor: pointer;\r\n    font-family: arial;\r\n    color: #0086f1;\r\n    font-size: 10px;\r\n    line-height: 17px;\r\n    font-weight: normal;\r\n}\r\n\r\n.gigya-login-welcome-signin-link {\r\n    white-space: nowrap;\r\n}\r\n\r\n.gigya-login-welcome-signin-link a:hover {\r\n    text-decoration: none;\r\n    color: #0086f1;\r\n}\r\n\r\n.gigya-login-footer-divider {\r\n    line-height: normal;\r\n    font-family: arial;\r\n    font-size: 11px;\r\n    color: #828282;\r\n    cursor: default;\r\n    padding: 0 5px;\r\n}\r\n\r\n.gigya-login-footer-edit-link {\r\n    line-height: normal;\r\n    cursor: pointer;\r\n    font-family: arial;\r\n    color: #0086f1;\r\n    text-decoration: none;\r\n    font-size: 11px;\r\n}\r\n\r\n.tabbing-button{\r\n    font-size: 0px;\r\n    border: none;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n.tabbing-button.gigya-provider-connected {\r\n    cursor: default;\r\n}\r\n.tabbing-button.gigya-provider-connected:focus {\r\n    outline: none;\r\n}\r\n"

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/index.ts":
/*!****************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsLogin_v2 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/ButtonStyles */ "./src/socialize/Gigya.Js.Login2/app/ButtonStyles.ts");
var Gigya_PluginsLogin_v2_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/ContainerBase */ "./src/socialize/Gigya.Js.Login2/app/ContainerBase.ts");
var Gigya_PluginsLogin_v2_2 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/FooterContainer */ "./src/socialize/Gigya.Js.Login2/app/FooterContainer.ts");
var Gigya_PluginsLogin_v2_3 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/Interfaces */ "./src/socialize/Gigya.Js.Login2/app/Interfaces.ts");
var Gigya_PluginsResourcesHtmlLogin_v2 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/Login2Resources0 */ "./src/socialize/Gigya.Js.Login2/app/Login2Resources0.ts");
var Gigya_PluginsResourcesCssLogin_v2 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/Login2Resources1 */ "./src/socialize/Gigya.Js.Login2/app/Login2Resources1.ts");
var Gigya_PluginsLogin_v2_4 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/LoginContainer */ "./src/socialize/Gigya.Js.Login2/app/LoginContainer.ts");
var Gigya_PluginsLogin_v2_5 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/LoginPlugin */ "./src/socialize/Gigya.Js.Login2/app/LoginPlugin.ts");
var Gigya_PluginsLogin_v2_6 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/PagingStyles */ "./src/socialize/Gigya.Js.Login2/app/PagingStyles.ts");
var Gigya_PluginsLogin_v2_7 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/Utils */ "./src/socialize/Gigya.Js.Login2/app/Utils.ts");
var Gigya_PluginsLogin_v2_8 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/WelcomeContainer */ "./src/socialize/Gigya.Js.Login2/app/WelcomeContainer.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.login_v2) {
    window.gigya._.plugins.login_v2 = {};
}
if (!window.gigya._.plugins.resources) {
    window.gigya._.plugins.resources = {};
}
if (!window.gigya._.plugins.resources.html) {
    window.gigya._.plugins.resources.html = {};
}
if (!window.gigya._.plugins.resources.html.login_v2) {
    window.gigya._.plugins.resources.html.login_v2 = {};
}
if (!window.gigya._.plugins.resources.css) {
    window.gigya._.plugins.resources.css = {};
}
if (!window.gigya._.plugins.resources.css.login_v2) {
    window.gigya._.plugins.resources.css.login_v2 = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.login_v2, Gigya_PluginsLogin_v2, Gigya_PluginsLogin_v2_1, Gigya_PluginsLogin_v2_2, Gigya_PluginsLogin_v2_3, Gigya_PluginsLogin_v2_4, Gigya_PluginsLogin_v2_5, Gigya_PluginsLogin_v2_6, Gigya_PluginsLogin_v2_7, Gigya_PluginsLogin_v2_8);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.html.login_v2, Gigya_PluginsResourcesHtmlLogin_v2);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.css.login_v2, Gigya_PluginsResourcesCssLogin_v2);
window.gigya._.UI.attachPlugin(Gigya_PluginsLogin_v2_5.LoginPlugin, 'socialize', Gigya_PluginsLogin_v2_5.LoginPlugin.pluginName, 'showLoginUI_v2');
window.gigya._.UI.attachPlugin(Gigya_PluginsLogin_v2_5.LoginPlugin, 'socialize', Gigya_PluginsLogin_v2_5.LoginPlugin.pluginName, 'showAddConnectionsUI_v2');

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/arrow.html":
/*!****************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/arrow.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-wrapper-login-providers-arrow-marker\">\r\n    <button type=\"button\"\r\n            tabindex=\"${tabindex}\"\r\n            class=\"tabbing-button gigya-login-providers-arrow-marker\"\r\n            aria-label=\"${label}\">\r\n    </button>\r\n</div>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footer.html":
/*!*****************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footer.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-footer\"></div>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandLong.html":
/*!**************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerBrandLong.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"gigya-login-footer-social-by\" href=\"https://www.gigya.com\" target=\"_blank\">${socialBy} <img alt=\"Gigya\" class=\"gigya-logo\" src=\"${logoUrl}\" /></a>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandShort.html":
/*!***************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerBrandShort.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"gigya-login-footer-social-by\" href=\"https://www.gigya.com\" target=\"_blank\"><img alt=\"Gigya\" class=\"gigya-logo\" src=\"${logoUrl}\" /></a>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandWhatIsThis.html":
/*!********************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerBrandWhatIsThis.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table cellpadding=\"0\" cellspacing=\"0\" class=\"gigya-login-footer-whatsthis\" role=\"presentation\">\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"vertical-align: middle; text-align: center\"><span>$whatsthistext</span></td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerDivider.html":
/*!************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerDivider.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"gigya-login-footer-divider\">|</span>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerEdit.html":
/*!*********************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerEdit.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"gigya-login-footer-edit-link\">$edit</span>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerTerms.html":
/*!**********************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerTerms.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"gigya-login-footer-terms\" target=\"_blank\" href=\"https://www.gigya.com/terms-of-service/\">$terms</a>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/header.html":
/*!*****************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/header.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-header\">${headerText}</div>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/login.html":
/*!****************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/login.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-providers\">\r\n    <table class=\"gigya-login-providers-container\" role=\"presentation\">\r\n        <tr>\r\n            <td class=\"gigya-login-providers-arrow-left\"></td>\r\n            <td class=\"gigya-login-providers-list-container\"></td>\r\n            <td class=\"gigya-login-providers-arrow-right\"></td>\r\n        </tr>\r\n    </table>\r\n</div>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/providerImage.html":
/*!************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/providerImage.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img style=\"width:${buttonWidth}px;height:${buttonHeight}px;\" src=\"${imageUrl}\" />\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/uiContainer.html":
/*!**********************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/uiContainer.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"${containerID}_uiContainer\"></div>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/welcome.html":
/*!******************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/welcome.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-welcome-container\">\r\n    <div class=\"gigya-login-welcome-user\"></div>\r\n    <div class=\"gigya-login-welcome-provider\"></div>\r\n    <div class=\"gigya-login-welcome-signin-link\"></div>\r\n</div>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeBubble.html":
/*!************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/welcomeBubble.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-welcome-bubble\" tabindex=\"0\" role=\"button\">\r\n    <div class=\"gigya-login-welcome-bubble-left\"></div>\r\n    <div class=\"gigya-login-welcome-bubble-center\">\r\n        <div class=\"gigya-login-welcome-bubble-text\">$notYou</div>\r\n    </div>\r\n    <div class=\"gigya-login-welcome-bubble-right\"></div>\r\n</div>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeGreeting.html":
/*!**************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/welcomeGreeting.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-welcome-greeting\">$welcomeBack</div>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeSignInLink.html":
/*!****************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/welcomeSignInLink.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"gigya-link\" href=\"javascript:void(0);\">$singInUsingDifferentNetwork</a>\r\n";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1BsdWdpblN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvQnV0dG9uU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Db250YWluZXJCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Gb290ZXJDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0xvZ2luMlJlc291cmNlczAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0xvZ2luMlJlc291cmNlczEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0xvZ2luQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Mb2dpblBsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvUGFnaW5nU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvV2VsY29tZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvY3NzL2llOHBhdGNoLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvY3NzL2llUGF0Y2guY3NzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC90ZW1wbGF0ZXMvYXJyb3cuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvdGVtcGxhdGVzL2Zvb3Rlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC90ZW1wbGF0ZXMvZm9vdGVyQnJhbmRMb25nLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy9mb290ZXJCcmFuZFNob3J0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy9mb290ZXJCcmFuZFdoYXRJc1RoaXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvdGVtcGxhdGVzL2Zvb3RlckRpdmlkZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvdGVtcGxhdGVzL2Zvb3RlckVkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvdGVtcGxhdGVzL2Zvb3RlclRlcm1zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy9oZWFkZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvdGVtcGxhdGVzL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy9wcm92aWRlckltYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy91aUNvbnRhaW5lci5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC90ZW1wbGF0ZXMvd2VsY29tZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC90ZW1wbGF0ZXMvd2VsY29tZUJ1YmJsZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC90ZW1wbGF0ZXMvd2VsY29tZUdyZWV0aW5nLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy93ZWxjb21lU2lnbkluTGluay5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJB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Ozs7Ozs7Ozs7QUNBakwsNkpBQTZKLFFBQVEsZTs7Ozs7Ozs7Ozs7QUNBckssNE1BQTRNLHlHOzs7Ozs7Ozs7OztBQ0E1TSx1RTs7Ozs7Ozs7Ozs7QUNBQSxpRjs7Ozs7Ozs7Ozs7QUNBQSwySTs7Ozs7Ozs7Ozs7QUNBQSxzREFBc0QsV0FBVyxZOzs7Ozs7Ozs7OztBQ0FqRSxvWjs7Ozs7Ozs7Ozs7QUNBQSx1Q0FBdUMsWUFBWSxHQUFHLFNBQVMsYUFBYSxHQUFHLFdBQVcsU0FBUyxXOzs7Ozs7Ozs7OztBQ0FuRyw4QkFBOEIsWUFBWSx1Qjs7Ozs7Ozs7Ozs7QUNBMUMsNFA7Ozs7Ozs7Ozs7O0FDQUEscVg7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsb0VBQW9FLHlDIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmxvZ2luX3YyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvaW5kZXgudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJleHBvcnQgZW51bSBQbHVnaW5TdHlsZSB7XHJcbiAgICBfdW5kZWZpbmVkID0gMCxcclxuICAgIG5vbmUsXHJcbiAgICBsZWdhY3ksXHJcbiAgICBtb2Rlcm4sXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsdWdpblN0eWxlQ2xhc3Moc3R5bGU6IFBsdWdpblN0eWxlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnZ2lneWEtc3R5bGUtJyArIFBsdWdpblN0eWxlW3N0eWxlXTtcclxufVxyXG4iLCJpbXBvcnQgeyBJTWFwIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2FycmF5JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvblN0eWxlIHtcclxuICAgIHJhdGlvOiBudW1iZXI7XHJcbiAgICBiYXNlOiBzdHJpbmc7XHJcbiAgICBleHQ6IHN0cmluZztcclxuICAgIG5vQ29ubmVjdGVkPzogYm9vbGVhbjtcclxuICAgIG5vTGFzdExvZ2luPzogYm9vbGVhbjtcclxuICAgIG1pblNpemU6IG51bWJlcjtcclxuICAgIG1heFNpemU6IG51bWJlcjtcclxuICAgIGRvbnRVc2VTcHJpdGVzPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdmFyIEJ1dHRvblN0eWxlczogSU1hcDxJQnV0dG9uU3R5bGU+ID0ge1xyXG4gICAgZnVsbGxvZ29jb2xvcmVkOiB7XHJcbiAgICAgICAgcmF0aW86IDIuNixcclxuICAgICAgICBiYXNlOiAnRnVsbExvZ29Db2xvcmVkLycsXHJcbiAgICAgICAgZXh0OiAnLnBuZycsXHJcbiAgICAgICAgbm9Db25uZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgbWluU2l6ZTogMTUsXHJcbiAgICAgICAgbWF4U2l6ZTogNjUsXHJcbiAgICB9LFxyXG4gICAgZnVsbGxvZ286IHtcclxuICAgICAgICByYXRpbzogMi42LFxyXG4gICAgICAgIGJhc2U6ICdGdWxsTG9nby8nLFxyXG4gICAgICAgIGV4dDogJy5wbmcnLFxyXG4gICAgICAgIG5vQ29ubmVjdGVkOiB0cnVlLFxyXG4gICAgICAgIG1pblNpemU6IDE1LFxyXG4gICAgICAgIG1heFNpemU6IDY1LFxyXG4gICAgfSxcclxuICAgIHNpZ25pbndpdGg6IHtcclxuICAgICAgICByYXRpbzogNy4wNSxcclxuICAgICAgICBiYXNlOiAnU2lnbkluV2l0aC8nLFxyXG4gICAgICAgIGV4dDogJy5wbmcnLFxyXG4gICAgICAgIG5vTGFzdExvZ2luOiB0cnVlLFxyXG4gICAgICAgIG5vQ29ubmVjdGVkOiB0cnVlLFxyXG4gICAgICAgIG1pblNpemU6IDIwLFxyXG4gICAgICAgIG1heFNpemU6IDYwLFxyXG4gICAgfSxcclxuICAgIHN0YW5kYXJkOiB7XHJcbiAgICAgICAgcmF0aW86IDEsXHJcbiAgICAgICAgYmFzZTogJycsXHJcbiAgICAgICAgZXh0OiAnLnBuZycsXHJcbiAgICAgICAgbWluU2l6ZTogMTUsXHJcbiAgICAgICAgbWF4U2l6ZTogNjUsXHJcbiAgICB9LFxyXG59O1xyXG4iLCJleHBvcnQgY2xhc3MgQ29udGFpbmVyQmFzZSB7XHJcbiAgICBwdWJsaWMgZ2V0Q2hpbGRCeUNzc0NsYXNzKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0b3IpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3MoaHRtbEVsZW1lbnQsIHNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGgpIHJldHVybiBzZWxlY3Rpb25bMF07XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElQcm92aWRlcnNHcmlkRGltZW5zaW9ucyB9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9JbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgTG9naW5QbHVnaW4sIFBsdWdpbk1vZGUgfSBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvTG9naW5QbHVnaW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbnRhaW5lciB7XHJcbiAgICAvKmdpZ3lhLWxvZ2luLWZvb3Rlci1lZGl0LWxpbmsqL1xyXG5cclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW46IExvZ2luUGx1Z2luLCBwcml2YXRlIGdyaWRTaXplOiBJUHJvdmlkZXJzR3JpZERpbWVuc2lvbnMpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gcGx1Z2luLmdldFRlbXBsYXRlcygpLmZvb3RlcjtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBsdWdpbi5jcmVhdGVFbGVtZW50RnJvbUhUTUxTdHJpbmcodGhpcy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEh0bWxFbGVtZW50KCkge1xyXG4gICAgICAgIHZhciBmb290ZXJPcHRpb25zID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgICAgICB2YXIgbGFzdE9wdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIHZhciBwYXJ0SHRtbDogc3RyaW5nO1xyXG5cclxuICAgICAgICB2YXIgZGl2aWRlciA9IHRoaXMucGx1Z2luLmdldFRlbXBsYXRlcygpLmZvb3RlckRpdmlkZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zaG93RWRpdCkge1xyXG4gICAgICAgICAgICBwYXJ0SHRtbCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLmdldFRlbXBsYXRlcygpLmZvb3RlckVkaXQsIHtcclxuICAgICAgICAgICAgICAgIGVkaXQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ2VkaXQnKSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9vdGVyT3B0aW9ucy5sZW5ndGgpIGxhc3RPcHRpb24gKz0gZGl2aWRlciArIHBhcnRIdG1sO1xyXG4gICAgICAgICAgICBlbHNlIGxhc3RPcHRpb24gPSBwYXJ0SHRtbDtcclxuXHJcbiAgICAgICAgICAgIGZvb3Rlck9wdGlvbnMudW5zaGlmdChsYXN0T3B0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zaG93VGVybXMpIHtcclxuICAgICAgICAgICAgcGFydEh0bWwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi5nZXRUZW1wbGF0ZXMoKS5mb290ZXJUZXJtcywge1xyXG4gICAgICAgICAgICAgICAgdGVybXM6IHRoaXMucGx1Z2luLmdldFRleHQoJ3Rlcm1zJyksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvb3Rlck9wdGlvbnMubGVuZ3RoKSBsYXN0T3B0aW9uICs9IGRpdmlkZXIgKyBwYXJ0SHRtbDtcclxuICAgICAgICAgICAgZWxzZSBsYXN0T3B0aW9uID0gcGFydEh0bWw7XHJcblxyXG4gICAgICAgICAgICBmb290ZXJPcHRpb25zLnVuc2hpZnQobGFzdE9wdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZm9vdGVyT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJyc7XHJcblxyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5hcnJheS5zb21lKGZvb3Rlck9wdGlvbnMsIG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24gPSAnPHNwYW4+JyArIG9wdGlvbiArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIHZhciBzaXplID0gZ2lneWEudXRpbHMuRE9NLmdldEhUTUxTaXplKG9wdGlvbiwgdGhpcy5wbHVnaW4udWlDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaXplLncgPD0gdGhpcy5ncmlkU2l6ZS50b3RhbFdpZHRoSW5jbHVkaW5nUGFnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm9vdGVyRWxlbWVudCA9IHRoaXMucGx1Z2luLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTFN0cmluZyhzZWxlY3RlZE9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNob3dFZGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVkaXRFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyhmb290ZXJFbGVtZW50LCAnZ2lneWEtbG9naW4tZm9vdGVyLWVkaXQtbGluaycpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlZGl0RWxlbWVudCwgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpbmcgdGhlIEV2ZW50IHRvIG9wZW4gdGhlIGVkaXQgY29ubmVjdGlvbnMgZGlhbG9nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lUGFyYW1zRm9yUGx1Z2luKHRoaXMucGx1Z2luLnBhcmFtcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyYW1zLmNvbnRhaW5lcklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyYW1zLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyYW1zLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5zaG93RWRpdENvbm5lY3Rpb25zVUkocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNob3dXaGF0c1RoaXMoZWxtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5wYXJhbXMuc2hvd1doYXRzVGhpcyAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaXBob25lJykgPT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lckRpbWVuc2lvbnMgPSB0aGlzLnBsdWdpbi5nZXRDb250YWluZXJEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgICAgIHZhciB3aGF0c1RoaXNUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnBhcmFtcy53aGF0c1RoaXNUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB3aGF0c1RoaXNUZXh0ID0gdGhpcy5wbHVnaW4ucGFyYW1zLndoYXRzVGhpc1RleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghd2hhdHNUaGlzVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnBsdWdpbk1vZGUgPT09IFBsdWdpbk1vZGUuTG9naW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGF0c1RoaXNUZXh0ID0gdGhpcy5wbHVnaW4uZ2V0VGV4dCgneW91X2Nhbl91c2VfeW91cl9hY2NvdW50X2Zyb21fb25lX29mX3RoZXNlX3NlcnZpY2VzX3RvX3NpZ25faW50b190aGVfc2l0ZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGF0c1RoaXNUZXh0ID0gdGhpcy5wbHVnaW4uZ2V0VGV4dCgnYWRkX21vcmVfY29ubmVjdGlvbnNfdG9feW91cl9hY2NvdW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB3aGF0c1RoaXNIdG1sID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4uZ2V0VGVtcGxhdGVzKCkuZm9vdGVyQnJhbmRXaGF0SXNUaGlzLCB7XHJcbiAgICAgICAgICAgICAgICB3aGF0c3RoaXN0ZXh0OiBnaWd5YS51dGlscy5zYW5pdGl6ZS5zYW5pdGl6ZUhUTUwod2hhdHNUaGlzVGV4dCksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRpbmcgVGhlIEVsZW1lbnRcclxuICAgICAgICAgICAgdmFyIHdoYXRzVGhpc0VsbW5lbnQgPSB0aGlzLnBsdWdpbi5jcmVhdGVFbGVtZW50RnJvbUhUTUxTdHJpbmcod2hhdHNUaGlzSHRtbCk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnVpQ29udGFpbmVyLmFwcGVuZENoaWxkKHdoYXRzVGhpc0VsbW5lbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FjbHVsYXRlIFRoZSBQb3NpdGlvbiBPZiBUaGUgQ29udHJvbFxyXG4gICAgICAgICAgICB2YXIgcG9zID0gZ2lneWEuZ2xvYmFsLl9HZXRFbGVtZW50UG9zKHRoaXMucGx1Z2luLnVpQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgd2hhdHNUaGlzRWxtbmVudC5zdHlsZS56SW5kZXggPSBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbG0sICdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aGF0c1RoaXNFbG1uZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbG0sICdtb3VzZW91dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdoYXRzVGhpc0VsbW5lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBhcnJvdyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Fycm93Lmh0bWwnKTtcclxuZXhwb3J0IHZhciBmb290ZXIgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9mb290ZXIuaHRtbCcpO1xyXG5leHBvcnQgdmFyIGZvb3RlckJyYW5kTG9uZyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Zvb3RlckJyYW5kTG9uZy5odG1sJyk7XHJcbmV4cG9ydCB2YXIgZm9vdGVyQnJhbmRTaG9ydCA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Zvb3RlckJyYW5kU2hvcnQuaHRtbCcpO1xyXG5leHBvcnQgdmFyIGZvb3RlckJyYW5kV2hhdElzVGhpcyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Zvb3RlckJyYW5kV2hhdElzVGhpcy5odG1sJyk7XHJcbmV4cG9ydCB2YXIgZm9vdGVyRGl2aWRlciA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Zvb3RlckRpdmlkZXIuaHRtbCcpO1xyXG5leHBvcnQgdmFyIGZvb3RlckVkaXQgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9mb290ZXJFZGl0Lmh0bWwnKTtcclxuZXhwb3J0IHZhciBmb290ZXJUZXJtcyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Zvb3RlclRlcm1zLmh0bWwnKTtcclxuZXhwb3J0IHZhciBoZWFkZXIgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9oZWFkZXIuaHRtbCcpO1xyXG5leHBvcnQgdmFyIGxvZ2luID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvbG9naW4uaHRtbCcpO1xyXG5leHBvcnQgdmFyIHByb3ZpZGVySW1hZ2UgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9wcm92aWRlckltYWdlLmh0bWwnKTtcclxuZXhwb3J0IHZhciB1aUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL3VpQ29udGFpbmVyLmh0bWwnKTtcclxuZXhwb3J0IHZhciB3ZWxjb21lID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvd2VsY29tZS5odG1sJyk7XHJcbmV4cG9ydCB2YXIgd2VsY29tZUJ1YmJsZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL3dlbGNvbWVCdWJibGUuaHRtbCcpO1xyXG5leHBvcnQgdmFyIHdlbGNvbWVHcmVldGluZyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL3dlbGNvbWVHcmVldGluZy5odG1sJyk7XHJcbmV4cG9ydCB2YXIgd2VsY29tZVNpZ25JbkxpbmsgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy93ZWxjb21lU2lnbkluTGluay5odG1sJyk7XHJcbiIsImV4cG9ydCB2YXIgaWU4cGF0Y2ggPSByZXF1aXJlKCcuL2Nzcy9pZThwYXRjaC5jc3MnKTtcclxuZXhwb3J0IHZhciBpZVBhdGNoID0gcmVxdWlyZSgnLi9jc3MvaWVQYXRjaC5jc3MnKTtcclxuZXhwb3J0IHZhciBtYWluID0gcmVxdWlyZSgnLi9jc3MvbWFpbi5jc3MnKTtcclxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyc0dyaWREaW1lbnNpb25zLCBJUHJvdmlkZXJJZGVudGl0eUluZm9ybWF0aW9uIH0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXJCYXNlIH0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0NvbnRhaW5lckJhc2UnO1xyXG5pbXBvcnQgeyBMb2dpblBsdWdpbiwgTmF2aWdhdGlvbkRpcmVjdGlvbiwgUGx1Z2luTW9kZSwgTGFzdExvZ2luSW5kZWNhdGlvbiB9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Mb2dpblBsdWdpbic7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL1V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lckJhc2Uge1xyXG4gICAgcHJpdmF0ZSBfbWFpbkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9sZWZ0QXJyb3c6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRBcnJvdzogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9sb2dpbkNvbnRhaW5lcnM6IEFycmF5PEhUTUxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgX3Byb3ZpZGVyc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgRWxlbWVudHNTZWxlY3RvciA9IHtcclxuICAgICAgICBtYWluOiAnZ2lneWEtbG9naW4tcHJvdmlkZXJzJyxcclxuICAgICAgICBjb250YWluZXI6ICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtY29udGFpbmVyJyxcclxuICAgICAgICBhcnJvd0xlZnQ6ICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbGVmdCcsXHJcbiAgICAgICAgYXJyb3dSaWdodDogJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1yaWdodCcsXHJcbiAgICAgICAgcHJvdmlkZXJzQ29udGFpbmVyOiAnZ2lneWEtbG9naW4tcHJvdmlkZXJzLWxpc3QtY29udGFpbmVyJyxcclxuICAgICAgICBjb25uZWN0ZWRQcm92aWRlckNsYXNzOiAnZ2lneWEtcHJvdmlkZXItY29ubmVjdGVkJyxcclxuICAgICAgICBwcm92aWRlck5hbWVBdHRyOiAnZGF0YS1naWd5YS1wcm92aWRlcidcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW46IExvZ2luUGx1Z2luLCBwcml2YXRlIGdyaWRTaXplOiBJUHJvdmlkZXJzR3JpZERpbWVuc2lvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5wbHVnaW4uZ2V0VGVtcGxhdGVzKCkubG9naW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEh0bWxFbGVtZW50KCkge1xyXG4gICAgICAgIC8vIGluaXQgdGhlIHRlbXBsYXRlczpcclxuICAgICAgICB0aGlzLl9tYWluRWxlbWVudCA9IHRoaXMucGx1Z2luLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTFN0cmluZyh0aGlzLnRlbXBsYXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IHRoaXMuZ2V0Q2hpbGRCeUNzc0NsYXNzKHRoaXMuX21haW5FbGVtZW50LCB0aGlzLkVsZW1lbnRzU2VsZWN0b3IuY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcHJvdmlkZXJzQ29udGFpbmVyID0gdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5fY29udGFpbmVyRWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLnByb3ZpZGVyc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIFRoZSBIVE1MIEVsZW1lbnRzXHJcbiAgICAgICAgdGhpcy5fbG9naW5Db250YWluZXJzID0gdGhpcy5jcmVhdGVDb250YWluZXJzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7IC8vdGhpcy5ncmlkU2l6ZS50b3RhbFdpZHRoSW5jbHVkaW5nUGFnZXIgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuX3Byb3ZpZGVyc0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMuZ3JpZFNpemUud2lkdGggKyAncHgnO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2xvZ2luQ29udGFpbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm92aWRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fbG9naW5Db250YWluZXJzW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEF0dGFjaGluZyB0aGUgaW5uZXIgQ29udGFpbmVycyAoUGFnZ2VkIFByb3ZpZGVyIERhdGEpXHJcbiAgICAgICAgdGhpcy5zZXRQYWdpbmcodGhpcy5fbG9naW5Db250YWluZXJzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIC8vIFNldHRpbmcgQmVoYXZpdWVyXHJcblxyXG4gICAgICAgIC8vIEF0dGFjaCBFdmVudHNcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbkVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRQYWdpbmcobnVtT2ZDb250YWluZXJzOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgc2hvdWxkQWRkUGFnaW5nQXJyb3dzID0gbnVtT2ZDb250YWluZXJzID4gMTtcclxuXHJcbiAgICAgICAgdGhpcy5fbGVmdEFycm93ID0gdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5fY29udGFpbmVyRWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLmFycm93TGVmdCk7XHJcbiAgICAgICAgdGhpcy5fcmlnaHRBcnJvdyA9IHRoaXMuZ2V0Q2hpbGRCeUNzc0NsYXNzKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQsIHRoaXMuRWxlbWVudHNTZWxlY3Rvci5hcnJvd1JpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gYWRkaW5nIHBhZ2dpbmF0aW9uIGFycm93cy5cclxuICAgICAgICBpZiAoc2hvdWxkQWRkUGFnaW5nQXJyb3dzKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLl9sZWZ0QXJyb3csICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnBhZ2luZ0J1dHRvblN0eWxlLmdldFN0eWxlTmFtZSh0aGlzLnBsdWdpbikgPT0gJ2Zsb2F0aW5nJykge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuX2xlZnRBcnJvdywgJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItZmxvYXRpbmctZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGFycm93Q2xhc3MgPSB0aGlzLnBsdWdpbi5wYWdpbmdCdXR0b25TdHlsZS5nZXRTdHlsZUNsYXNzKHRoaXMucGx1Z2luKTtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuX2xlZnRBcnJvdywgYXJyb3dDbGFzcyk7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLl9yaWdodEFycm93LCBhcnJvd0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcnJvd0xlZnRIdG1sRWxlbWVudCA9IFV0aWxzLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTFN0cmluZyhcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLmdldFRlbXBsYXRlcygpLmFycm93LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg6IHRoaXMucGx1Z2luLnBhcmFtcy50YWJJbmRleCB8fCAnLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJywgLy8gVE9ETzogTG9jYWxpemF0aW9uIFwiUHJldmlvdXMgUHJvdmlkZXJzXCJcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgYXJyb3dSaWdodEh0bWxFbGVtZW50ID0gVXRpbHMuY3JlYXRlRWxlbWVudEZyb21IVE1MU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4uZ2V0VGVtcGxhdGVzKCkuYXJyb3csIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleDogdGhpcy5wbHVnaW4ucGFyYW1zLnRhYkluZGV4IHx8ICctMScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICcnLCAvLyBUT0RPOiBMb2NhbGl6YXRpb24gXCJNb3JlIFByb3ZpZGVyc1wiXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xlZnRBcnJvdy5hcHBlbmRDaGlsZChhcnJvd0xlZnRIdG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2h0QXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodEh0bWxFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0TmF2aWdhdGlvbkFycm93U3RhdGUoTmF2aWdhdGlvbkRpcmVjdGlvbi5QcmV2LCB0cnVlKTsgLy8gZGlzYWJsZSB0aGUgbGVmdCAobmV4dCkgYXJyb3cgb24gc3RhcnRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBtYWtlIGFycm93cyBpbnZpc2libGVcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuX2xlZnRBcnJvdywgJ25vLWFycm93cycpO1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGhpcy5fcmlnaHRBcnJvdywgJ25vLWFycm93cycpO1xyXG5cclxuICAgICAgICAgICAgLy8gbWFrZSB0aGUgY29udGFpbmVyIGFzIHdpZGUgYXMgdGhlIHByb3ZpZGVycyBjb250YWluZXIsIHNvIGl0J2xsIGNlbnRlciBwcm9wZXJseS5cclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuX3Byb3ZpZGVyc0NvbnRhaW5lci5zdHlsZS53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgZmlyc3QgY29udGFpbmVyIGFzIHRoZSBkZWZhdWx0IHNob3dpbmcgY29udGFpbmVyXHJcbiAgICAgICAgaWYgKHRoaXMuX2xvZ2luQ29udGFpbmVyc1swXSkgdGhpcy5fbG9naW5Db250YWluZXJzWzBdLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2lneWEtYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4cGFuZEluQ29udGFpbmVyQWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIGFycm93UGFyZW50V2lkdGggPSBNYXRoLmNlaWwoKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQub2Zmc2V0V2lkdGggLSB0aGlzLl9wcm92aWRlcnNDb250YWluZXIub2Zmc2V0V2lkdGgpIC8gMik7XHJcbiAgICAgICAgaWYgKGFycm93UGFyZW50V2lkdGggPCAwKSBhcnJvd1BhcmVudFdpZHRoID0gMDtcclxuXHJcbiAgICAgICAgdmFyIGFycm93UGFyZW50V2lkdGhJblB4ID0gYXJyb3dQYXJlbnRXaWR0aCArICdweCc7XHJcblxyXG4gICAgICAgIC8vIFNvIGFycm93IHBhcmVudCBjb250YWluZXIgd2lsbCBleHBhbmQgaW4gaXRzIGNvbnRhaW5lci5cclxuICAgICAgICB0aGlzLl9sZWZ0QXJyb3cuc3R5bGUud2lkdGggPSB0aGlzLl9yaWdodEFycm93LnN0eWxlLndpZHRoID0gYXJyb3dQYXJlbnRXaWR0aEluUHg7XHJcblxyXG4gICAgICAgIC8vIFNvIGFycm93IGltYWdlIHdpbGwgb3ZlcmZsb3cgaWYgbmVlZGVkLlxyXG4gICAgICAgIHRoaXMuX2xlZnRBcnJvdy5zdHlsZS5tYXhXaWR0aCA9IHRoaXMuX3JpZ2h0QXJyb3cuc3R5bGUubWF4V2lkdGggPSBhcnJvd1BhcmVudFdpZHRoSW5QeDtcclxuXHJcbiAgICAgICAgLy8gc2V0dGluZyB0aGUgbWFpbiBlbGVtZW50IGZvciBzdGFydGluZyBoZWlnaHQsIHNvIGNvbnRlbnQgd2lsbCBzdGF5IGNlbnRlcmVkIHdoaWxlIHBhZ2luZyAobWluaW11bSBpcyBvbmUgYnV0dG9uJ3MgaGVpZ2h0KS5cclxuICAgICAgICB0aGlzLl9tYWluRWxlbWVudC5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgICAgICBNYXRoLm1heCh0aGlzLl9jb250YWluZXJFbGVtZW50Lm9mZnNldEhlaWdodCwgdGhpcy5wbHVnaW4uYnV0dG9uSGVpZ2h0ICsgMiAqIHRoaXMucGx1Z2luLnBsdWdpbkNvbmZpZy5yb3dTcGFjaW5nKSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDb250YWluZXJzKCkge1xyXG4gICAgICAgIHZhciBjb250YWluZXJzID0gW107XHJcblxyXG4gICAgICAgIC8vIEFycmF5IG9mIEFycmF5IG9mIHByb3ZpZGVycyBmb3IgZWFjaFxyXG4gICAgICAgIHZhciBwcm92aWRlcnNHcm91cHMgPSB0aGlzLmdldFByb3ZpZGVyc0dyb3Vwcyh0aGlzLmdyaWRTaXplKTtcclxuXHJcbiAgICAgICAgLy8gSXRlcmF0aW5nIG92ZXIgdGhlIHByb3ZpZGVycyBhbmQgYnVpbGQgdGhlIGh0bWwgb2YgdGhlIGNvbnRhaW5lcnNcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3ZpZGVyc0dyb3Vwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBzZXQgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IGNvbnRhaW5lclxyXG4gICAgICAgICAgICB2YXIgcHJvdmlkZXJDZWxscyA9IHRoaXMuZ2V0UHJvdmlkZXJzQ2VsbHMocHJvdmlkZXJzR3JvdXBzW2ldKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwbGl0IHRoZSBjZWxscyBpbnRvIHJvd3NcclxuICAgICAgICAgICAgdmFyIGN1ckNvbnRhaW5lclJvd3MgPSB0aGlzLmdldEdyb3VwUHJvdmlkZXJzUm93cyhwcm92aWRlckNlbGxzLCB0aGlzLmdyaWRTaXplLnJvd3MsIHRoaXMuZ3JpZFNpemUuY29sdW1ucyk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXR0aW5nIFRoZSBDb250YWluZXIgb2YgdGhlIFJvd3NcclxuICAgICAgICAgICAgdmFyIHBDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1uZXRCbG9jaygnZGl2Jywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlIExpc3QgSXRlbSBGb3IgVGhlIE5hdmlnYXRpb24gLSBXcmFwcGVyIENvbnRhaW5lclxyXG4gICAgICAgICAgICB2YXIgcENvbnRhaW5lckxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGN1ckNvbnRhaW5lclJvd3MubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciByb3dFbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtbmV0QmxvY2soJ2RpdicsIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2dpZ3lhLWxvZ2luLXByb3ZpZGVyLXJvdycsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBySXRlbSA9IDA7IHJJdGVtIDwgY3VyQ29udGFpbmVyUm93c1tyXS5sZW5ndGg7IHJJdGVtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXJTcGFuID0gY3VyQ29udGFpbmVyUm93c1tyXVtySXRlbV0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZChwcm92aWRlclNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgbGluZSBpcyBpbiBvcmRlciB0byBkaXNwbGF5IHRoZSByaWdodCBzcGFjZSBiZXR3ZWVuIHRoZSByb3dzLlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcHJvdmlkZXJTcGFuLnN0eWxlLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGZvbGxvd2luZyB0d28gbGluZXMgYXJlIGluIG9yZGVyIHRvIG1ha2Ugc3VyZSB0aGUgbGFzdCBwcm92aWRvciBpbiByb3cgZG9lc24ndCBoYXZlIG1hcmdpbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RTcGFuSW5Sb3cgPSBjdXJDb250YWluZXJSb3dzW3JdW2N1ckNvbnRhaW5lclJvd3Nbcl0ubGVuZ3RoIC0gMV0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNwYW5JblJvdy5zdHlsZVsnbWFyZ2luLXJpZ2h0J10gPSAnMCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0VsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBDb250YWluZXJMaXN0SXRlbS5hcHBlbmRDaGlsZChwQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgY29udGFpbmVycy5wdXNoKHBDb250YWluZXJMaXN0SXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaEV2ZW50cygpIHtcclxuICAgICAgICB2YXIgaGFzUGFnaW5nID0gdGhpcy5fbG9naW5Db250YWluZXJzLmxlbmd0aCA+IDE7XHJcblxyXG4gICAgICAgIC8vIE5hdmlnYXRpb24gRXZlbnRzXHJcbiAgICAgICAgaWYgKGhhc1BhZ2luZykge1xyXG4gICAgICAgICAgICB2YXIgYXJyb3dMZWZ0ID0gdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5fY29udGFpbmVyRWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLmFycm93TGVmdCk7XHJcbiAgICAgICAgICAgIHZhciBhcnJvd1JpZ2h0ID0gdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5fY29udGFpbmVyRWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLmFycm93UmlnaHQpO1xyXG5cclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoYXJyb3dSaWdodCwgJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU5hdmlnYXRpb25TdGF0ZShOYXZpZ2F0aW9uRGlyZWN0aW9uLk5leHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5kaXNhYmxlRGVmYXVsdEV2ZW50SGFuZGxpbmcoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoYXJyb3dMZWZ0LCAnY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTmF2aWdhdGlvblN0YXRlKE5hdmlnYXRpb25EaXJlY3Rpb24uUHJldik7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmRpc2FibGVEZWZhdWx0RXZlbnRIYW5kbGluZyhlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm92aWRlcnMgQnV0dG9ucyBFdmVudHNcclxuICAgICAgICBsZXQgcHJvdmlkZXJzQnV0dG9ucyA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3MoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2hpbGRCeUNzc0NsYXNzKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQsIHRoaXMuRWxlbWVudHNTZWxlY3Rvci5wcm92aWRlcnNDb250YWluZXIpLFxyXG4gICAgICAgICAgICAnZ2lneWEtbG9naW4tcHJvdmlkZXInLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm92aWRlcnNCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bldyYXBwZXIgPSBwcm92aWRlcnNCdXR0b25zW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBwcm92aWRlck5hbWUgPSBidG5XcmFwcGVyLmdldEF0dHJpYnV0ZSh0aGlzLkVsZW1lbnRzU2VsZWN0b3IucHJvdmlkZXJOYW1lQXR0cik7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gZ2lneWEuXy5wcm92aWRlcnMuZ2V0UHJvdmlkZXJCeU5hbWUocHJvdmlkZXJOYW1lLCB0aGlzLnBsdWdpbi5wcm92aWRlcnMpO1xyXG4gICAgICAgICAgICBjb25zdCBwSWRlbnRpdHkgPSB0aGlzLnBsdWdpbi5nZXRJZGVudGl0eUluZm9Gb3JQcm92aWRlcihwcm92aWRlcik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNDb25uZWN0aW9uQ29tcGxldGVkKHBJZGVudGl0eSkpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChcclxuICAgICAgICAgICAgICAgICAgICBidG5XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi50YWJiaW5nLWJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRWxlbWVudHNTZWxlY3Rvci5jb25uZWN0ZWRQcm92aWRlckNsYXNzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGJ0bldyYXBwZXIsICdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLm9uUHJvdmlkZXJDbGlja0hhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICAgIHByaXZhdGUgZ2V0UHJvdmlkZXJzQ2VsbHMocHJvdmlkZXJzR3JvdXApIHtcclxuICAgICAgICB2YXIgcHJvdmlkZXJDZWxscyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBJdGVyYXRpbmcgb3ZlciBhbGwgdGhlIHByb3ZpZGVycyBpbiB0aGUgY3VycmVudCBjb250YWluZXJcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHByb3ZpZGVyc0dyb3VwLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIC8vIHNldCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcHJvdmlkZXJcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyc0dyb3VwW2pdO1xyXG5cclxuICAgICAgICAgICAgLy8gRmluZCBJbmRldGl0eS5cclxuICAgICAgICAgICAgdmFyIHByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbiA9IHRoaXMucGx1Z2luLmdldElkZW50aXR5SW5mb0ZvclByb3ZpZGVyKGN1cnJlbnRQcm92aWRlcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvdmlkZXJJbWFnZSA9IHRoaXMuZ2V0UHJvdmlkZXJJbWFnZShjdXJyZW50UHJvdmlkZXIsIHByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvdmlkZXJDZWxsID0gdGhpcy5jcmVhdGVFbGVtbmV0QmxvY2soJ3NwYW4nLCB7XHJcbiAgICAgICAgICAgICAgICAnZGF0YS1naWd5YS1wcm92aWRlcic6IGN1cnJlbnRQcm92aWRlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGg6JyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5idXR0b25XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAncHg7JyxcclxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0OicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uYnV0dG9uSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICdweDsnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYXJnaW4tcmlnaHQ6JyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5wbHVnaW5Db25maWcucm93U3BhY2luZyxcclxuICAgICAgICAgICAgICAgICAgICAncHg7JyxcclxuICAgICAgICAgICAgICAgIF0uam9pbignJyksXHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ2dpZ3lhLWxvZ2luLXByb3ZpZGVyJyxcclxuICAgICAgICAgICAgICAgIGdpZ2lkOiBjdXJyZW50UHJvdmlkZXIubmFtZSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc29jaWFsUHJvdmlkZXJCdXR0b24gPSB0aGlzLnBsdWdpbi5jcmVhdGVFbGVtZW50RnJvbUhUTUxTdHJpbmcocHJvdmlkZXJJbWFnZSk7XHJcbiAgICAgICAgICAgIHNvY2lhbFByb3ZpZGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLnBsdWdpbi5wYXJhbXMudGFiSW5kZXggfHwgJy0xJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGUgdG9vbHRpcCBuZWVkcyB0byBiZSBvbiB0aGUgZm9jdXNhYmxlIGVsZW1lbnQgKGluIHRoaXMgY2FzZSwgdGhlIGJ1dHRvbikgb3Igc2NyZWVuLXJlYWRlcnMgd2lsbCByZWFkIGl0IHR3aWNlLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2hvd1Rvb2x0aXBzKSB7XHJcbiAgICAgICAgICAgICAgICBzb2NpYWxQcm92aWRlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgY3VycmVudFByb3ZpZGVyLmRpc3BsYXlOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihqPT0wKXtcclxuICAgICAgICAgICAgICAgIHNvY2lhbFByb3ZpZGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgJ3NvY2lhbC1idXR0b25zLWxvZ2luLWNhcHRpb24nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvdmlkZXJDZWxsLmFwcGVuZENoaWxkKHNvY2lhbFByb3ZpZGVyQnV0dG9uKTtcclxuICAgICAgICAgICAgcHJvdmlkZXJDZWxscy5wdXNoKHByb3ZpZGVyQ2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm92aWRlckNlbGxzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UHJvdmlkZXJJbWFnZShwcm92aWRlciwgcHJvdmlkZXJJZGVudGl0eUluZm9ybWF0aW9uOiBJUHJvdmlkZXJJZGVudGl0eUluZm9ybWF0aW9uKSB7XHJcbiAgICAgICAgdmFyIGlzUmF0aW5hID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHZhciBvQnV0dG9uID0gcHJvdmlkZXIuYnV0dG9uRGF0YTtcclxuICAgICAgICB2YXIgaW1nSWQgPSAocHJvdmlkZXIuaW1nTmFtZSA/IHByb3ZpZGVyLmltZ05hbWUgOiBwcm92aWRlci5uYW1lKSArICctJztcclxuXHJcbiAgICAgICAgLy8gVVM6IDMzMzQzIC0gTGlua2VkSW4ncyB0cmFkZSBtYXJrIGZvciByZXRpbmEgZGlzcGxheVxyXG4gICAgICAgIGlmIChpc1JhdGluYSAmJiBwcm92aWRlci5uYW1lID09ICdsaW5rZWRpbicgJiYgKHRoaXMucGx1Z2luLnBhcmFtcy5idXR0b25TaXplID49IDE1ICYmIHRoaXMucGx1Z2luLnBhcmFtcy5idXR0b25TaXplIDw9IDI1KSkge1xyXG4gICAgICAgICAgICB2YXIgY29udmVudGlvbk5hbWUgPVxyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXIubmFtZSArICdfJyArIHRoaXMucGx1Z2luLnBhcmFtcy5idXR0b25TaXplICogMiArIChwcm92aWRlci5uYW1lID09IHRoaXMucGx1Z2luLmxhc3RMb2dpblByb3ZpZGVyID8gJ19MYXN0TG9naW4nIDogJycpICsgJy5wbmcnO1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2VVcmwgPSBgJHt0aGlzLnBsdWdpbi5pbWFnZUJhc2V9LyR7dGhpcy5wbHVnaW4uc3R5bGVQcmVzZXQuYmFzZX0vJHtjb252ZW50aW9uTmFtZX1gO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLmdldFRlbXBsYXRlcygpLnByb3ZpZGVySW1hZ2UsIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbldpZHRoOiB0aGlzLnBsdWdpbi5idXR0b25XaWR0aCxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkhlaWdodDogdGhpcy5wbHVnaW4uYnV0dG9uSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGltYWdlVXJsLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE9wZW5JRCB8fCBTYW1sIHx8IG9pZGNcclxuICAgICAgICBpZiAocHJvdmlkZXIuaXNDdXN0b21Qcm92aWRlciAmJiBvQnV0dG9uICYmIG9CdXR0b24uaWNvblVSTCkge1xyXG4gICAgICAgICAgICB2YXIgaWNvblVSTCA9IG9CdXR0b24uaWNvblVSTDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGlvbkNvbXBsZXRlZChwcm92aWRlcklkZW50aXR5SW5mb3JtYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob0J1dHRvbi5jb25uZWN0ZWRJY29uVVJMKSBpY29uVVJMID0gb0J1dHRvbi5jb25uZWN0ZWRJY29uVVJMO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvdmlkZXJOYW1lID0gcHJvdmlkZXIubmFtZSB8fCAnJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RMb2dpblByb3ZpZGVyID0gdGhpcy5wbHVnaW4ubGFzdExvZ2luUHJvdmlkZXIgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXJOYW1lLnRvTG93ZXJDYXNlKCkgPT0gbGFzdExvZ2luUHJvdmlkZXIudG9Mb3dlckNhc2UoKSkgaWNvblVSTCA9IG9CdXR0b24ubGFzdExvZ2luSWNvblVSTDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGljb25VUkwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4uZ2V0VGVtcGxhdGVzKCkucHJvdmlkZXJJbWFnZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbldpZHRoOiB0aGlzLnBsdWdpbi5idXR0b25XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25IZWlnaHQ6IHRoaXMucGx1Z2luLmJ1dHRvbkhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogaWNvblVSTCxcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjpwcm92aWRlclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVG9nZ2xlICdDb25uZWN0ZWQnIE1vZGUgVnMgJ0xhc3QgTG9naW4nXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGlvbkNvbXBsZXRlZChwcm92aWRlcklkZW50aXR5SW5mb3JtYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdJZCArPSAnY29ubmVjdGVkXyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5sYXN0TG9naW5JbmRpY2F0aW9uID09IExhc3RMb2dpbkluZGVjYXRpb24uYm9yZGVyICYmXHJcbiAgICAgICAgICAgICAgICBwcm92aWRlci5uYW1lID09IHRoaXMucGx1Z2luLmxhc3RMb2dpblByb3ZpZGVyICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wbHVnaW4uc3R5bGVQcmVzZXQubm9MYXN0TG9naW5cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdJZCArPSAnbGFzdGxvZ2luXyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsdWdpbi5zcHJpdGVSZW5kZXJlci5sb2dpbkljb25zLmdldEhUTUwoaW1nSWQsIGZhbHNlLCB0aGlzLnBsdWdpbi5zdHlsZVByZXNldC5kb250VXNlU3ByaXRlcywgdW5kZWZpbmVkLCBwcm92aWRlci5kaXNwbGF5TmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7IC8vIE5vIGltYWdlIHRvIGRpc3BsYXlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQ29ubmVjdGlvbkNvbXBsZXRlZChwcm92aWRlcklkZW50aXR5OiBJUHJvdmlkZXJJZGVudGl0eUluZm9ybWF0aW9uKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luLnBsdWdpbk1vZGUgPT09IFBsdWdpbk1vZGUuQWRkQ29ubmVjdGlvbiAmJlxyXG4gICAgICAgIChwcm92aWRlcklkZW50aXR5LmlzQ29ubmVjdGVkICYmIHByb3ZpZGVySWRlbnRpdHkuaGFzQWxsUmVxdWlyZWRQZXJtaXNzaW9ucykgJiZcclxuICAgICAgICAhdGhpcy5wbHVnaW4uc3R5bGVQcmVzZXQubm9Db25uZWN0ZWRcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEdyb3VwUHJvdmlkZXJzUm93cyhjZWxscywgcm93cywgY29scykge1xyXG4gICAgICAgIHZhciBncm91cFJvd3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZ1JvdyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IGkgKiBjb2xzICsgajtcclxuICAgICAgICAgICAgICAgIGlmIChpZHggPj0gY2VsbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnUm93LnB1c2goY2VsbHNbaWR4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ3JvdXBSb3dzLnB1c2goZ1Jvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXR0aW5nIFRoZSBMYXN0IEluZGV4IENsYXNzIE1hcmtlclxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBSb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBsYXN0SWR4ID0gZ3JvdXBSb3dzW2ldLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGxhc3RJZHggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQoZ3JvdXBSb3dzW2ldW2xhc3RJZHggLSAxXSwgJ2dpZ3lhLWxvZ2luLXByb3ZpZGVyLWxhc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdyb3VwUm93cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFByb3ZpZGVyc0dyb3VwcyhncmlkU2l6ZTogSVByb3ZpZGVyc0dyaWREaW1lbnNpb25zKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgdmFyIHByb3ZpZGVyc1BlckNvbnRhaW5lciA9IGdyaWRTaXplLnJvd3MgKiBncmlkU2l6ZS5jb2x1bW5zO1xyXG5cclxuICAgICAgICB2YXIgbnVtT2ZDb250YWluZXJzID0gdGhpcy5wbHVnaW4ucHJvdmlkZXJzLmxlbmd0aCA9PT0gMCA/IDAgOiB0aGlzLnBsdWdpbi5wcm92aWRlcnMubGVuZ3RoIC8gcHJvdmlkZXJzUGVyQ29udGFpbmVyO1xyXG5cclxuICAgICAgICBpZiAoIWlzRmluaXRlKG51bU9mQ29udGFpbmVycykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvcjogaW5maW5pdGUgbG9vcC4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcm92aWRlckNvbnRhbmllcnMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgVGhlIFByb3ZpZGVycyBDb250cmFpbmVyczpcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bU9mQ29udGFpbmVyczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJDb250YWluZXIgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcHJvdmlkZXJzUGVyQ29udGFpbmVyOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZHggPSBpICogcHJvdmlkZXJzUGVyQ29udGFpbmVyICsgajtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID49IHRoaXMucGx1Z2luLnByb3ZpZGVycy5sZW5ndGgpIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1ckNvbnRhaW5lci5wdXNoKHRoaXMucGx1Z2luLnByb3ZpZGVyc1tpZHhdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvdmlkZXJDb250YW5pZXJzLnB1c2goY3VyQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm92aWRlckNvbnRhbmllcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVFbGVtbmV0QmxvY2soZWxlbWVudFR5cGU6IHN0cmluZywgYXR0cmlidXRlcz86IGFueSwgY29udGVudD86IHN0cmluZykge1xyXG4gICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VOYXZpZ2F0aW9uU3RhdGUobkRpcmVjdGlvbjogTmF2aWdhdGlvbkRpcmVjdGlvbikge1xyXG4gICAgICAgIC8vIHNldCB0aGUgZGlyZWN0aW9uIG9mIG1vdm1lbnQuXHJcbiAgICAgICAgdmFyIGluZGV4RGlyZWN0aW9uID0gbkRpcmVjdGlvbiA9PSBOYXZpZ2F0aW9uRGlyZWN0aW9uLk5leHQgPyAxIDogLTE7XHJcblxyXG4gICAgICAgIHZhciBjdXJJbmRleCA9IGdpZ3lhLnV0aWxzLmFycmF5LmZpcnN0SW5kZXgodGhpcy5fbG9naW5Db250YWluZXJzLCBsaXN0Q29udGFpbmVyID0+IGdpZ3lhLnV0aWxzLkRPTS5pc0VsZW1lbnRDbGFzcyhsaXN0Q29udGFpbmVyLCAnZ2lneWEtYWN0aXZlJykpO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSByZXF1ZXN0ZWQgdGFyZ2V0IGNvbnRhaW5lciBpbmRleCBieSB0aGUgZGlyZWN0aW9uLlxyXG4gICAgICAgIHZhciB0YXJnZXRJbmRleCA9IGN1ckluZGV4ICsgaW5kZXhEaXJlY3Rpb247XHJcblxyXG4gICAgICAgIHZhciBjdXJDb250YWluZXIgPSBnaWd5YS51dGlscy5hcnJheS5maXJzdCh0aGlzLl9sb2dpbkNvbnRhaW5lcnMsIGxpc3RDb250YWluZXIgPT4gZ2lneWEudXRpbHMuRE9NLmlzRWxlbWVudENsYXNzKGxpc3RDb250YWluZXIsICdnaWd5YS1hY3RpdmUnKSk7XHJcblxyXG4gICAgICAgIC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgdGFyZ2V0IGNvbnRhaW5lci5cclxuICAgICAgICB2YXIgdGFyZ2V0Q29udGFpbmVyID0gdGhpcy5fbG9naW5Db250YWluZXJzW3RhcmdldEluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHJlcXVlc3QgZm9yICdOZXh0JyBvciAnUHJldicgaXMgYXZhaWxhYmxlIGlmIHdlIGZvdW5kIHRoZSB0YXJnZXQgY29udGFpbmVyLlxyXG4gICAgICAgIGlmICh0YXJnZXRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgLy8gc2V0J3MgdGhlIG5leHQgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KGN1ckNvbnRhaW5lciwgJ2dpZ3lhLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGFyZ2V0Q29udGFpbmVyLCAnZ2lneWEtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIG5leHQgYW5kIHByZXYgYXZhaWxhYmxlIGFmdGVyIHRhcmdldGlnIHRoZSBuZXcgY29udGFpbmVyLlxyXG4gICAgICAgICAgICB2YXIgaXNMYXN0ID0gIXRoaXMuX2xvZ2luQ29udGFpbmVyc1t0YXJnZXRJbmRleCArIDFdO1xyXG4gICAgICAgICAgICB2YXIgaXNGaXJzdCA9ICF0aGlzLl9sb2dpbkNvbnRhaW5lcnNbdGFyZ2V0SW5kZXggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5ldyBzdGF0ZSBvZiB0aGUgYXJyb3dzLlxyXG4gICAgICAgICAgICB0aGlzLnNldE5hdmlnYXRpb25BcnJvd1N0YXRlKE5hdmlnYXRpb25EaXJlY3Rpb24uTmV4dCwgaXNMYXN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXROYXZpZ2F0aW9uQXJyb3dTdGF0ZShOYXZpZ2F0aW9uRGlyZWN0aW9uLlByZXYsIGlzRmlyc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IGZvY3VzIHRvIGZpcnN0IHByb3ZpZGVyIGluIG5ldyBsaXN0XHJcbiAgICAgICAgICAgIHRhcmdldENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TmF2aWdhdGlvbkFycm93U3RhdGUoZGlyZWN0aW9uOiBOYXZpZ2F0aW9uRGlyZWN0aW9uLCBkaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIHNldHRpbmcgdGhlIHByb3BlciBuYW1lIG9mIHRoZSBkaXJlY3Rpb24gZm9yIHRoZSBpbWFnZSBtYW5pcHVsYXRpbmcuXHJcbiAgICAgICAgdmFyIGFycm93RGlyZWN0aW9uID0gZGlyZWN0aW9uID09IE5hdmlnYXRpb25EaXJlY3Rpb24uTmV4dCA/ICdyaWdodCcgOiAnbGVmdCc7XHJcblxyXG4gICAgICAgIC8vIGdldHRpbmcgYSByZWZlcmVuY2UgZm9yIHRoZSBhcnJvdyBjb250YWluZXIuXHJcbiAgICAgICAgdmFyIGFycm93Q29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLl9jb250YWluZXJFbGVtZW50LCAnZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LScgKyBhcnJvd0RpcmVjdGlvbilbMF0sXHJcbiAgICAgICAgICAgIGFycm93ID0gYXJyb3dDb250YWluZXIucXVlcnlTZWxlY3RvcignLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXInKTtcclxuXHJcbiAgICAgICAgLy8gc3dpdGNoaW5nIHRoZSBzdGF0ZSBvZiB0aGUgYnV0dG9uIGJhc2VkIG9uIHRoZSBkaXNhYmxlZCBwYXJhbWV0ZXIuXHJcblxyXG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgYXJyb3cucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChhcnJvd0NvbnRhaW5lciwgJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4ucGFnaW5nQnV0dG9uU3R5bGUuZ2V0U3R5bGVOYW1lKHRoaXMucGx1Z2luKSA9PSAnZmxvYXRpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChhcnJvd0NvbnRhaW5lciwgJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItZmxvYXRpbmctZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KGFycm93Q29udGFpbmVyLCAnZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi5wYWdpbmdCdXR0b25TdHlsZS5nZXRTdHlsZU5hbWUodGhpcy5wbHVnaW4pID09ICdmbG9hdGluZycpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChhcnJvd0NvbnRhaW5lciwgJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItZmxvYXRpbmctZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgSUxvZ2luUGx1Z2luUGFyYW1zLFxyXG4gICAgSUxvZ2luUGx1Z2luVGVtcGxhdGVzLFxyXG4gICAgSUxvZ2luUGx1Z2luQ1NTLFxyXG4gICAgSUdpZ3lhVXNlcixcclxuICAgIElDdXN0b21CdXR0b24sXHJcbiAgICBJT2lkY0N1c3RvbUJ1dHRvbixcclxuICAgIElTYW1sQ3VzdG9tQnV0dG9uLFxyXG4gICAgSVByb3ZpZGVyc0dyaWREaW1lbnNpb25zLFxyXG4gICAgSVByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbixcclxufSBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvSW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IElQYWdpbmdCdXR0b25TdHlsZUNob2ljZUluZm8sIElQYWdpbmdCdXR0b25TdHlsZSwgUGFnaW5nQnV0dG9uU3R5bGVzIH0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL1BhZ2luZ1N0eWxlcyc7XHJcbmltcG9ydCB7IElCdXR0b25TdHlsZSwgQnV0dG9uU3R5bGVzIH0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0J1dHRvblN0eWxlcyc7XHJcbmltcG9ydCB7IElVaUFwaUluZm8sIElJbmplY3Rpb25JbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0FQSS9VaUFwaSc7XHJcbmltcG9ydCB7IElQbHVnaW5Db25maWcgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2ludGVyZmFjZXMvSVBsdWdpbkNvbmZpZyc7XHJcbmltcG9ydCB7IFBsdWdpblN0eWxlIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9QbHVnaW5TdHlsZXMnO1xyXG5pbXBvcnQgeyBJRWxlbWVudEFjdHVhbFNpemUgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvSW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IExvZ2luQ29udGFpbmVyIH0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0xvZ2luQ29udGFpbmVyJztcclxuaW1wb3J0IHsgV2VsY29tZUNvbnRhaW5lciB9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9XZWxjb21lQ29udGFpbmVyJztcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0Zvb3RlckNvbnRhaW5lcic7XHJcbmltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Jhc2VQbHVnaW4nO1xyXG5cclxuZXhwb3J0IGVudW0gTmF2aWdhdGlvbkRpcmVjdGlvbiB7XHJcbiAgICBOZXh0LFxyXG4gICAgUHJldixcclxufVxyXG5leHBvcnQgZW51bSBMYXN0TG9naW5JbmRlY2F0aW9uIHtcclxuICAgIF91bmRlZmluZWQsXHJcbiAgICBub25lLFxyXG4gICAgYm9yZGVyLFxyXG4gICAgd2VsY29tZSxcclxufVxyXG5leHBvcnQgZW51bSBQbHVnaW5Nb2RlIHtcclxuICAgIF91bmRlZmluZWQsXHJcbiAgICBMb2dpbixcclxuICAgIEFkZENvbm5lY3Rpb24sXHJcbiAgICBMaW5rQWNjb3VudCxcclxufVxyXG5leHBvcnQgZW51bSBSZW5kZXJpbmdNb2RlIHtcclxuICAgIFVua25vd24sXHJcbiAgICBMb2dpbixcclxuICAgIFdlbGNvbWUsXHJcbiAgICBGb290ZXIsXHJcbn1cclxuXHJcbmNvbnN0IEJhc2VQbHVnaW5HbG9iYWw6IHR5cGVvZiBCYXNlUGx1Z2luID0gZ2lneWEuXy5wbHVnaW5zLkJhc2VQbHVnaW47XHJcbmV4cG9ydCBjbGFzcyBMb2dpblBsdWdpbiBleHRlbmRzIEJhc2VQbHVnaW5HbG9iYWw8SUxvZ2luUGx1Z2luUGFyYW1zLCBJTG9naW5QbHVnaW5UZW1wbGF0ZXMsIElMb2dpblBsdWdpbkNTUz4gaW1wbGVtZW50cyBJUGFnaW5nQnV0dG9uU3R5bGVDaG9pY2VJbmZvIHtcclxuICAgIC8vIHN0YXRpY3NcclxuICAgIHN0YXRpYyBwbHVnaW5OYW1lID0gJ2xvZ2luJztcclxuXHJcbiAgICAvLyBpbnRlcm5hbCAtIHRha2UgZXh0cmEgY2FyZVxyXG4gICAgLy9wcml2YXRlIF9sYXN0RGltZXNuaW9uczogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgaDogbnVtYmVyOyB3OiBudW1iZXIgfTsgICAvLyBwbHVnaW4gbWVhc3VybWVudHMgZm9yIHJlcmVuZGVyIGNvbmRpdGlvbi5cclxuICAgIC8vcHJpdmF0ZSBfbG9naW5Db250YWluZXJzID0gW107ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBET00gQ29udGFpbmVycyBmb3IgdGhlIHBhZ2luZy5cclxuXHJcbiAgICAvLyBwcml2YXRlc1xyXG5cclxuICAgIHB1YmxpYyB1aUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICAvKiB0aGUgY29udGFpbmVyIGZvciB0aGUgcGx1Z2luIHBhcnRzLCB0aGlzIGlzIGJlY3VzZSBvZiB0aGUgZmFjZWJvb2sgcGlsZSxcclxuXHJcbiAgICAgICAgIHdlIG5lZWQgdG8gZXh0cmFjdCBpdCBmcm9tIHRoZSBtYWluIGNvbnRhaW5lciBiZWN1c2Ugd2UgZG9udCBrbm93IHRoZSBzaXplXHJcbiAgICAgICAgIG9mIHRoZSBleHRlcm5hbCBjb250cm9sLiAqL1xyXG5cclxuICAgIC8vIEJhc2VQbHVnaW4ncyBtZW1iZXIgdGhhdCBuZWVkcyBleHBvc3VyZS4uXHJcbiAgICBwdWJsaWMgbGFzdFBvbGxlZFdpZHRoO1xyXG4gICAgLy9cclxuXHJcbiAgICBwdWJsaWMgc3R5bGVQcmVzZXQ6IElCdXR0b25TdHlsZTtcclxuICAgIHB1YmxpYyBwYWdpbmdCdXR0b25TdHlsZTogSVBhZ2luZ0J1dHRvblN0eWxlO1xyXG4gICAgcHVibGljIGJ1dHRvbldpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYnV0dG9uSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3ByaXRlUmVuZGVyZXI7XHJcbiAgICBwdWJsaWMgcGx1Z2luTW9kZTogUGx1Z2luTW9kZTtcclxuICAgIHB1YmxpYyBwcm92aWRlcnM6IEFycmF5PGFueT47XHJcbiAgICBwdWJsaWMgdXNlcjogSUdpZ3lhVXNlcjtcclxuICAgIHB1YmxpYyBsYXN0TG9naW5JbmRpY2F0aW9uOiBMYXN0TG9naW5JbmRlY2F0aW9uO1xyXG4gICAgcHVibGljIGZhY2Vib29rU3VnZ2VzdEVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgbGFzdExvZ2luUHJvdmlkZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBsYXN0TG9naW5Qcm92aWRlck9iamVjdDogYW55O1xyXG5cclxuICAgIHB1YmxpYyBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxID8gMiA6IDE7XHJcbiAgICBwdWJsaWMgaW1hZ2VCYXNlOiBzdHJpbmcgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9IVE1MTG9naW4nKTtcclxuICAgIHB1YmxpYyBzaG93VGVybXM7IC8vIEFkZCBIYXZlIFNwYWNlP1xyXG4gICAgcHVibGljIGlzRm9vdGVyRW5hYmxlZDtcclxuICAgIHB1YmxpYyBpc0hlYWRlckVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2hvd0VkaXQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzaG93V2VsY29tZSA9IGZhbHNlOyAvLyBuZWVkIHByb3ZpZGVyIGNvbmRpdGlvbiwgc2VlIGluaXQgc2VxdWVuY2UgZm9yIHRvZ2dhbGluZyB0aGUgc2hvd1dlbGNvbSBmbGFnXHJcbiAgICBwdWJsaWMgc2hvd1Rvb2x0aXBzOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgbG9naW5DaGFuZ2VFdmVudEhhbmRsZXIgPSAoKSA9PiB0aGlzLnJlbmRlcigpO1xyXG5cclxuICAgIHB1YmxpYyBwbHVnaW5Db25maWcgPSB7XHJcbiAgICAgICAgYXJyb3dXaWR0aDogMTYsXHJcbiAgICAgICAgZmxvYXRpbmdBcnJvd1dpZHRoOiAxNSxcclxuICAgICAgICBhcnJvd0hlaWdodDogMTQsXHJcbiAgICAgICAgZGVmYXVsdGxhc3RMb2dpbkJ1dHRvblNpemU6IDMwLFxyXG4gICAgICAgIGRlZmF1bHRCdXR0b25TaXplOiAzMCxcclxuICAgICAgICBkZWZhdWx0QnV0dG9uU2l6ZU9uUG9wdXA6IDM1LFxyXG4gICAgICAgIGhlYWRlckhlaWdodDogMTgsXHJcbiAgICAgICAgZm9vdGVySGVpZ2h0OiAxOCxcclxuICAgICAgICByb3dTcGFjaW5nOiA1LFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgSW5qZWN0aW9uSW5mb0RlZmF1bHRDb25maWcgPSB7XHJcbiAgICAgICAgc2hvd0FkZENvbm5lY3Rpb25zVUlfdjI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdFBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTEwLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRDYXBhYmlsaXRpZXM6ICdmcmllbmRzJyxcclxuICAgICAgICAgICAgICAgIHBhZ2luZ0J1dHRvblN0eWxlOiAnYXJyb3dzJyxcclxuICAgICAgICAgICAgICAgIFVJTW9kZTogUGx1Z2luTW9kZVtQbHVnaW5Nb2RlLkFkZENvbm5lY3Rpb25dLFxyXG4gICAgICAgICAgICAgICAgX2NhbGxHZXRVc2VySW5mb09uSW5pdGlhbFJlbmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVmYXVsdE1vZGFsUGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjAsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZENhcGFiaWxpdGllczogJ2ZyaWVuZHMnLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5nQnV0dG9uU3R5bGU6ICdhcnJvd3MnLFxyXG4gICAgICAgICAgICAgICAgVUlNb2RlOiBQbHVnaW5Nb2RlW1BsdWdpbk1vZGUuQWRkQ29ubmVjdGlvbl0sXHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uVGV4dEtleTogJ2Nvbm5lY3Rfd2l0aF95b3VyX2ZyaWVuZHMnLFxyXG4gICAgICAgICAgICAgICAgX2NhbGxHZXRVc2VySW5mb09uSW5pdGlhbFJlbmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dMb2dpblVJX3YyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMCxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkQ2FwYWJpbGl0aWVzOiAnbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5nQnV0dG9uU3R5bGU6ICdhcnJvd3MnLFxyXG4gICAgICAgICAgICAgICAgVUlNb2RlOiBQbHVnaW5Nb2RlW1BsdWdpbk1vZGUuTG9naW5dLFxyXG4gICAgICAgICAgICAgICAgX2NhbGxHZXRVc2VySW5mb09uSW5pdGlhbFJlbmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVmYXVsdE1vZGFsUGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZENhcGFiaWxpdGllczogJ2xvZ2luJyxcclxuICAgICAgICAgICAgICAgIHBhZ2luZ0J1dHRvblN0eWxlOiAnYXJyb3dzJyxcclxuICAgICAgICAgICAgICAgIFVJTW9kZTogUGx1Z2luTW9kZVtQbHVnaW5Nb2RlLkxvZ2luXSxcclxuICAgICAgICAgICAgICAgIGNhcHRpb25UZXh0S2V5OiAnbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgX2NhbGxHZXRVc2VySW5mb09uSW5pdGlhbFJlbmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBnZXQgdGhlIGluamVjdGlvbiBpbmZvIGJhc2VkIG9uIHRoZSBhY3R1YWwgZnVuY3Rpb24gYmVpbmcgdXNlZCBmb3IgdGhlIHBsdWdpblxyXG4gICAgcHVibGljIHN0YXRpYyBpbmplY3Rpb25JbmZvKHVpQXBpSW5mbz86IElVaUFwaUluZm8pOiBJSW5qZWN0aW9uSW5mbyB7XHJcbiAgICAgICAgdmFyIGluZm8gPSBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoW1xyXG4gICAgICAgICAgICB1aUFwaUluZm8sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbl92MicsXHJcbiAgICAgICAgICAgICAgICBqc05hbWU6ICdnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5sb2dpbl92MicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8SUluamVjdGlvbkluZm8+aW5mbztcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdGhlIGNvbmZpZyB0aGF0IG1hdGNoIHRoZSBjdXJyZW50IG1ldGhvZFxyXG4gICAgcHVibGljIGdldENvbmZpZygpOiBJUGx1Z2luQ29uZmlnPElMb2dpblBsdWdpblBhcmFtcz4ge1xyXG4gICAgICAgIHZhciBjb25maWcgPSBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFBhcmFtczogW10sXHJcbiAgICAgICAgICAgICAgICBoYXNNb2JpbGVVSTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhbGxvd01vZGFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydHNSZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlU2l6ZVBvbGxpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIExvZ2luUGx1Z2luLkluamVjdGlvbkluZm9EZWZhdWx0Q29uZmlnW3RoaXMuaW5qZWN0aW9uSW5mby5tZXRob2ROYW1lXSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxJUGx1Z2luQ29uZmlnPElMb2dpblBsdWdpblBhcmFtcz4+Y29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KGxvYWRlZENhbGxiYWNrOiAoc3VjY2Vzcz86IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgbG9naW4gbW9kZTogJHt0aGlzLnBhcmFtcy5VSU1vZGV9YCk7XHJcblxyXG4gICAgICAgIC8vIFNldHRpbmcgZGVmYXVsdCB2YWx1ZXMgYW5kIHBhcnNpbmcgdmFsdWVzIGludG8gbmF0aXZlIHZhbHVlc1xyXG4gICAgICAgIHRoaXMuaW5pdFBhcmFtcygpO1xyXG5cclxuICAgICAgICAvLyBpbml0IHRoZSBjb250YWluZXJcclxuICAgICAgICB0aGlzLmluaXRVaUNvbnRhaW5lcigpO1xyXG5cclxuICAgICAgICAvLyBsaXN0ZW4gdG8gZ2xvYmFsIGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJUb0dsb2JhbEV2ZW50cygpO1xyXG5cclxuICAgICAgICAvLyBjc3MgLSAgaW5qZWN0aW5nIHRoZSBjc3MgaW50byB0aGUgcGFnZS5cclxuICAgICAgICB2YXIgY3NzID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRDc3MoKS5tYWluLCB7IHNjcmlwdEJhc2U6IHRoaXMuaW1hZ2VCYXNlIH0pO1xyXG5cclxuICAgICAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzLmFkZENzcyhjc3MsIHRoaXMucGFyYW1zLmNzc1ByZWZpeCk7XHJcbiAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFKSB7XHJcbiAgICAgICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTggfHwgZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MuYWRkQ3NzKHRoaXMuZ2V0Q3NzKCkuaWU4cGF0Y2gsIHRoaXMucGFyYW1zLmNzc1ByZWZpeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMYXN0IExvZ2luIFByb3ZpZGVyOlxyXG4gICAgICAgIHRoaXMubGFzdExvZ2luUHJvdmlkZXIgPSB0aGlzLmdldExhc3RMb2dpbigpO1xyXG5cclxuICAgICAgICAvLyBGYWNlYm9vayBTdWdnZXN0OlxyXG4gICAgICAgIHRoaXMuZmFjZWJvb2tTdWdnZXN0RW5hYmxlZCA9XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmF1dG9EZXRlY3RVc2VyUHJvdmlkZXJzICYmXHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmF1dG9EZXRlY3RVc2VyUHJvdmlkZXJzLnRvTG93ZXJDYXNlKCkgPT0gJ2ZhY2Vib29rJyAmJlxyXG4gICAgICAgICAgICAoIXRoaXMubGFzdExvZ2luUHJvdmlkZXIgfHwgdGhpcy5sYXN0TG9naW5JbmRpY2F0aW9uICE9IExhc3RMb2dpbkluZGVjYXRpb24ud2VsY29tZSk7XHJcblxyXG4gICAgICAgIC8vIEdldHRpbmcgVGhlIFVzZXIgSW5mb3JtYXRpb24gQW5kIHJlbmRlciB0aGUgcGx1Z2luLlxyXG4gICAgICAgIHZhciBhZnRlclVzZXJSZXNwb25zZSA9IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgLy8gSW5pdCBUaGUgUHJvdmlkZXJzXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFByb3ZpZGVycygpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0dGluZyBVcCBUaGUgU3ByaXRlIEVuZ2luZVxyXG4gICAgICAgICAgICB0aGlzLmluaXRTcHJpdGVFbmdpbmUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgICAgICBsb2FkZWRDYWxsYmFjaygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5fY2FsbEdldFVzZXJJbmZvT25Jbml0aWFsUmVuZGVyKSB0aGlzLmdldFVzZXJJbmZvKGFmdGVyVXNlclJlc3BvbnNlKTtcclxuICAgICAgICBlbHNlIGFmdGVyVXNlclJlc3BvbnNlKHsgdXNlcjogbnVsbCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRQYXJhbXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLl9wbHVnaW5DZW50ZXJGaXgpIHRoaXMucGx1Z2luQ29uZmlnLmFycm93V2lkdGggPSAyNTsgLy8gQWNjb3JkaW5nIHRvIHRoZSBhcnJvdydzIGltYWdlIHdpZHRoICsgaXRzIHBhZGRpbmdcclxuXHJcbiAgICAgICAgdGhpcy5wYWdpbmdCdXR0b25TdHlsZSA9IFBhZ2luZ0J1dHRvblN0eWxlc1t0aGlzLnBhcmFtcy5wYWdpbmdCdXR0b25TdHlsZV0gfHwgUGFnaW5nQnV0dG9uU3R5bGVzWydhcnJvd3MnXTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogdHJhbnNmZXIgYWxsIGRlZmF1bHRzIHRvIEluamVjdGlvbkluZm9EZWZhdWx0Q29uZmlnIGFuZCBkZWxldGUgdGhlIGNvZGUgd2hpY2ggY2hlY2tzIGZvciBlYWNoIHBhcmFtXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wYXJhbXMuZW5hYmxlZFByb3ZpZGVycykgdGhpcy5wYXJhbXMuZW5hYmxlZFByb3ZpZGVycyA9ICcqJztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmFtcy5idXR0b25zU3R5bGUpIHRoaXMucGFyYW1zLmJ1dHRvbnNTdHlsZSA9ICdzdGFuZGFyZCc7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Rvb2x0aXBzID0gIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHRoaXMucGFyYW1zLnNob3dUb29sdGlwcyk7XHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9ICcnICsgdGhpcy5wYXJhbXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMucmVzcG9uc2l2ZVdpZHRoID0gd2lkdGguaW5kZXhPZignJScpID4gLTE7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMud2lkdGhOdW0gPSBwYXJzZUludCh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuaGVpZ2h0TnVtID0gcGFyc2VJbnQoJycgKyB0aGlzLnBhcmFtcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBTZXR0aW5nIFRoZSBCdXR0b24gU2l6ZSArIFN1cHBvcnQgaW4gJ1VJQ29uZmlnJyBbT05MWSBJRiBUSEUgJ2J1dHRvblNpemUnIE5PVCBTRVQnU11cclxuICAgICAgICBpZiAoIXRoaXMucGFyYW1zLmJ1dHRvblNpemUgJiYgdGhpcy5wYXJhbXMuVUlDb25maWcpIHtcclxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIHRoZSBzdHJpbmcsIHNvIFVwcGVyIGNhc2luZyBvciBjbGllbnQgaW5wdXQgd2lsbCBub3QgZWZmZWN0IHRoZSBsb2dpYy5cclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuVUlDb25maWcgPSB0aGlzLnBhcmFtcy5VSUNvbmZpZy50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdHJ5aW5nIHRvIHBhcnNlIHRoZSB4bWxcclxuICAgICAgICAgICAgdmFyIHhtbEVsZW1lbnQgPSB0aGlzLnBhcnNlWE1MKHRoaXMucGFyYW1zLlVJQ29uZmlnKTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvblNpemVFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKHhtbEVsZW1lbnQpIGJ1dHRvblNpemVFbGVtZW50ID0geG1sRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc25idXR0b25zJylbMF07XHJcblxyXG4gICAgICAgICAgICBpZiAoYnV0dG9uU2l6ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmJ1dHRvblNpemUgPSBwYXJzZUludChidXR0b25TaXplRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2J1dHRvbnNpemUnKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXR0aW5nIFRoZSBEZWZhdWx0cyBzaXplcyBpZiBubyBidXR0b24gc2l6ZSBmb3VuZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuYnV0dG9uU2l6ZSA9IHRoaXMucGFyYW1zLmlzUG9wdXAgPyB0aGlzLnBsdWdpbkNvbmZpZy5kZWZhdWx0QnV0dG9uU2l6ZU9uUG9wdXAgOiB0aGlzLnBsdWdpbkNvbmZpZy5kZWZhdWx0QnV0dG9uU2l6ZTsgLy8gVE9ETyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBkZWZhdWx0IHNpemVzIGlzIGFsd2F5cyBzZXQsIHNob3VsZCB0aGlzIGJlIHNldCBmb3IgdGhlIGRlZmF1bHRzIGV2ZW4gaWYgbm8gVUlDb25maWcgaXMgc2V0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRlZmF1bHQgYnV0dG9uIHNpemVcclxuICAgICAgICBpZiAoIXRoaXMucGFyYW1zLmJ1dHRvblNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuYnV0dG9uU2l6ZSA9IDMwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmJ1dHRvblNpemUpIHRoaXMucGFyYW1zLmJ1dHRvblNpemUgPSBwYXJzZUludCgnJyArIHRoaXMucGFyYW1zLmJ1dHRvblNpemUpO1xyXG5cclxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBib29sZWFuc1xyXG4gICAgICAgIHRoaXMucGFyYW1zLnNob3dUZXJtc0xpbmsgPSB0aGlzLmlzVHJ1ZSh0aGlzLnBhcmFtcy5zaG93VGVybXNMaW5rKTtcclxuXHJcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcHJpdmF0ZSBmbGFncyBhZnRlciBpbml0aWFsaXppbmcgdGhlIGJvb2xlYW5zLlxyXG4gICAgICAgIHRoaXMuc2hvd1Rlcm1zID0gdGhpcy5wYXJhbXMuc2hvd1Rlcm1zTGluayAmJiB0aGlzLnBhcmFtcy5zaG93VGVybXNMaW5rICE9PSAnZmFsc2UnO1xyXG5cclxuICAgICAgICB0aGlzLmlzRm9vdGVyRW5hYmxlZCA9IHRoaXMuc2hvd1Rlcm1zIHx8IHRoaXMucGFyYW1zLlVJTW9kZSA9PSAnQWRkQ29ubmVjdGlvbic7XHJcbiAgICAgICAgdGhpcy5pc0hlYWRlckVuYWJsZWQgPSBCb29sZWFuKHRoaXMucGFyYW1zLmhlYWRlclRleHQpO1xyXG5cclxuICAgICAgICAvLyBpbml0IHRoZSBlbnVtc1xyXG5cclxuICAgICAgICAvL1NldHRpbmcgVGhlIExhc3QgSW5kZWNhdGlvbiBMb2dpbiBQYXJhbWV0ZXJcclxuICAgICAgICBpZiAoIXRoaXMucGFyYW1zLmxhc3RMb2dpbkluZGljYXRpb24pIHRoaXMucGFyYW1zLmxhc3RMb2dpbkluZGljYXRpb24gPSAnYm9yZGVyJztcclxuICAgICAgICB0aGlzLmxhc3RMb2dpbkluZGljYXRpb24gPSBMYXN0TG9naW5JbmRlY2F0aW9uW1N0cmluZyh0aGlzLnBhcmFtcy5sYXN0TG9naW5JbmRpY2F0aW9uKS50b0xvd2VyQ2FzZSgpXSB8fCBMYXN0TG9naW5JbmRlY2F0aW9uLmJvcmRlcjtcclxuXHJcbiAgICAgICAgLy8gU2V0dGluZyBUaGUgcGx1Z2luIG1vZGUgJ2FkZENvbm5lY3Rpb25VSSwgc2hvd0xvZ2luVUknXHJcbiAgICAgICAgdGhpcy5wbHVnaW5Nb2RlID0gUGx1Z2luTW9kZVt0aGlzLnBhcmFtcy5VSU1vZGVdIHx8IFBsdWdpbk1vZGUuTG9naW47XHJcblxyXG4gICAgICAgIHRoaXMuc3R5bGVQcmVzZXQgPSBCdXR0b25TdHlsZXNbU3RyaW5nKHRoaXMucGFyYW1zLmJ1dHRvbnNTdHlsZSkudG9Mb3dlckNhc2UoKV0gfHwgQnV0dG9uU3R5bGVzWydzdGFuZGFyZCddO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbkhlaWdodCA9IHBhcnNlSW50KFN0cmluZyh0aGlzLnBhcmFtcy5idXR0b25TaXplKSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25XaWR0aCA9IE1hdGguY2VpbCh0aGlzLmJ1dHRvbkhlaWdodCAqIHRoaXMuc3R5bGVQcmVzZXQucmF0aW8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFVpQ29udGFpbmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldFBsdWdpblN0eWxlKCkgIT0gUGx1Z2luU3R5bGUubGVnYWN5IHx8ICF0aGlzLmlzTW9kYWwpIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLnVpQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50RnJvbUhUTUxTdHJpbmcoXHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkudWlDb250YWluZXIsIHsgY29udGFpbmVySUQ6IHRoaXMucGFyYW1zLmNvbnRhaW5lcklEIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy51aUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLnBhcmFtcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMudWlDb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLnBhcmFtcy53aWR0aE51bSArICh0aGlzLnBhcmFtcy5yZXNwb25zaXZlV2lkdGggPyAnJScgOiAncHgnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnVpQ29udGFpbmVyLnN0eWxlLnBhZGRpbmdUb3AgPSAnMjBweCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnVpQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRQcm92aWRlcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luTW9kZSA9PT0gUGx1Z2luTW9kZS5Mb2dpbiAmJiAhdGhpcy5wYXJhbXMucmVxdWlyZWRDYXBhYmlsaXRpZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMucmVxdWlyZWRDYXBhYmlsaXRpZXMgPSAnbG9naW4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luTW9kZSA9PT0gUGx1Z2luTW9kZS5BZGRDb25uZWN0aW9uICYmICF0aGlzLnBhcmFtcy5yZXF1aXJlZENhcGFiaWxpdGllcykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5yZXF1aXJlZENhcGFiaWxpdGllcyA9ICdmcmllbmRzJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldHRpbmcgVGhlIERlZmF1bHQgUHJvdmlkZXJzIENvbmZpZ3VyYXRpb24gW11cclxuICAgICAgICAvLyBpbml0IHRoZSBwcm92aWRlcnMgbGlzdFxyXG4gICAgICAgIHRoaXMucHJvdmlkZXJzID0gZ2lneWEuZ2xvYmFsLnJlc29sdmVQcm92aWRlcnModGhpcy5wYXJhbXMuZW5hYmxlZFByb3ZpZGVycywgdGhpcy5wYXJhbXMuZGlzYWJsZWRQcm92aWRlcnMsIHRoaXMucGFyYW1zLnJlcXVpcmVkQ2FwYWJpbGl0aWVzKTtcclxuXHJcbiAgICAgICAgLy8gaWYgTGFzdCBMb2dpbiBpbmRlY2F0b3IgaXMgJ0JvcmRlcicsIHNldCB0aGUgbGFzdCBsb2dpbiBwcm92aWRlciBhdCAwIGluZGV4LlxyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbk1vZGUgPT09IFBsdWdpbk1vZGUuQWRkQ29ubmVjdGlvbiAmJiB0aGlzLmxhc3RMb2dpbkluZGljYXRpb24gPT0gTGFzdExvZ2luSW5kZWNhdGlvbi5ib3JkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gdGhpcy5wcm92aWRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm92aWRlcnNbaV0ubmFtZSA9PSB0aGlzLmxhc3RMb2dpblByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzLnVuc2hpZnQocHJvdmlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQncyB0aGUgd2VsY29tZSBzY3JlZW4gaW5kZWNhdGlvbi5cclxuICAgICAgICAvLyBDaGVja2luZyBvZiB3ZSBhcmUgY29ubmVjdGVkLCBhbmQgaWYgd2UgaGF2ZSBhICdsYXN0TG9naW5Qcm92aWRlcicgaW5mbyBmcm9tIHRoZSBjb29raWVcclxuICAgICAgICAvLyBhbmQgdGhlIGxhc3QgbG9naW4gaW5kZWNhdGlvbiBpcyBzZXQgdG8gd2VsY29tIHNjcmVlblxyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbk1vZGUgPT09IFBsdWdpbk1vZGUuTG9naW4gJiYgdGhpcy5sYXN0TG9naW5Qcm92aWRlciAmJiB0aGlzLmxhc3RMb2dpbkluZGljYXRpb24gPT0gTGFzdExvZ2luSW5kZWNhdGlvbi53ZWxjb21lKSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIGlmIHRoZSBsYXN0IGxvZ2luIHByb3ZpZGVyIGlzIG9uIHRoZSBwcm92aWRlcnMgbGlzdFxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW2ldLm5hbWUgPT0gdGhpcy5sYXN0TG9naW5Qcm92aWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdExvZ2luUHJvdmlkZXJPYmplY3QgPSB0aGlzLnByb3ZpZGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dXZWxjb21lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3VzdG9tZSBCdXR0b25zIEFuZCBQcm92aWRlcnM6XHJcbiAgICAgICAgdmFyIGN1c3RvbUJ1dHRvbnM6IElDdXN0b21CdXR0b25bXSA9IFtdO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGx1Z2luTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFBsdWdpbk1vZGUuQWRkQ29ubmVjdGlvbjogLy8gQWRkQ29ubmVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgbXVsdGlwbGUgY3VzdG9tIGJ1dHRvbnMgZm9yIG5vd1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLmN1c3RvbUJ1dHRvbikgY3VzdG9tQnV0dG9ucyA9IFt0aGlzLnBhcmFtcy5jdXN0b21CdXR0b25dO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wYXJhbXMuY3VzdG9tQnV0dG9ucyAmJiB0aGlzLnBhcmFtcy5jdXN0b21CdXR0b25zLmxlbmd0aCA+IDApIGN1c3RvbUJ1dHRvbnMgPSBbdGhpcy5wYXJhbXMuY3VzdG9tQnV0dG9uc1swXV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjdXN0b21CdXR0b25zID0gdGhpcy5wYXJhbXMuY3VzdG9tQnV0dG9ucyB8fCBbXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5jdXN0b21CdXR0b24pIGN1c3RvbUJ1dHRvbnMucHVzaCh0aGlzLnBhcmFtcy5jdXN0b21CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnaWd5YS51dGlscy5hcnJheS5mb3JFYWNoKGN1c3RvbUJ1dHRvbnMsIG9CdXR0b24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDdXN0b21CdXR0b24ob0J1dHRvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzLmxlbmd0aCA9PSAwICYmICF0aGlzLmZhY2Vib29rU3VnZ2VzdEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ0VSUl9OT19QUk9WSURFUlMnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogJ05vIHByb3ZpZGVycycsXHJcbiAgICAgICAgICAgICAgICBlcnJvckNvZGU6IDQwMDEwMCxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ05vIHByb3ZpZGVycycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYXJDb25uZWN0ZWRQcm92aWRlcnMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwSWRlbnRpdHkgPSB0aGlzLmdldElkZW50aXR5SW5mb0ZvclByb3ZpZGVyKHRoaXMucHJvdmlkZXJzW2ldKTtcclxuICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gdGhpcy5wcm92aWRlcnNbaV07XHJcbiAgICAgICAgICAgIGlmIChwSWRlbnRpdHkuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGFyQ29ubmVjdGVkUHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZSBBcnJlbmdpbmcgdGhlIGNvbm5lY3RlZCBpY29ucyBvbiB0aGUgcHJvdmlkZXJzIGxpc3QuXHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMgPSBhckNvbm5lY3RlZFByb3ZpZGVycy5jb25jYXQoZ2lneWEuc29jaWFsaXplLmhpZGVQcm92aWRlcnNCeU5hbWUodGhpcy5wcm92aWRlcnMsIGFyQ29ubmVjdGVkUHJvdmlkZXJzLmpvaW4oJywnKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDdXN0b21CdXR0b24ob0J1dHRvbjogSUN1c3RvbUJ1dHRvbikge1xyXG4gICAgICAgIGxldCBwQ3VzdG9tUHJvdmlkZXI6IGFueTtcclxuXHJcbiAgICAgICAgbGV0IHByb3ZpZGVyVHlwZSA9ICFvQnV0dG9uLnR5cGUgPyAnZXZlbnRvbmx5JyA6IG9CdXR0b24udHlwZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBwcm92aWRlcklkOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHByb3ZpZGVyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHN3aXRjaCAocHJvdmlkZXJUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ29pZGMnOlxyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJJZCA9IDEwMDAxO1xyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJOYW1lID0gKG9CdXR0b24gYXMgSU9pZGNDdXN0b21CdXR0b24pLm9wTmFtZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzYW1sJzpcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVySWQgPSA0MTIyO1xyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJOYW1lID0gKG9CdXR0b24gYXMgSVNhbWxDdXN0b21CdXR0b24pLmlkcE5hbWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZXZlbnRvbmx5JzpcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVySWQgPSA0MTIxO1xyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJUeXBlID0gJ29wZW5JRCc7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIzQ4ODA3IC0gRW5zdXJlIGVhY2ggZXZlbnRvbmx5IGJ1dHRvbiBoYXMgYSB1bmlxdWUgbmFtZS5cclxuICAgICAgICAgICAgICAgIC8vIFRoZSBwcm92aWRlciBsZW5ndGggaXMgaW5jcmVtZW50ZWQgZm9yIGVhY2ggY3VzdG9tQnV0dG9uIHNvIHRoaXMgd2lsbCBiZSBhIHVuaXF1ZSBudW1iZXIgZm9yIHRoaXMgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBwcm92aWRlck5hbWUgPSBTdHJpbmcodGhpcy5wcm92aWRlcnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdnaWd5YTogaW52YWxpZCBjdXN0b20gYnV0dG9uIHR5cGUnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBDdXN0b21Qcm92aWRlciA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShnaWd5YS5zb2NpYWxpemUuX2dldFByb3ZpZGVyQnlJRChwcm92aWRlcklkKSk7XHJcbiAgICAgICAgcEN1c3RvbVByb3ZpZGVyLmltZ05hbWUgPSBwcm92aWRlclR5cGU7XHJcbiAgICAgICAgcEN1c3RvbVByb3ZpZGVyLmRpc3BsYXlOYW1lID0gb0J1dHRvbi5wcm92aWRlck5hbWU7XHJcbiAgICAgICAgcEN1c3RvbVByb3ZpZGVyLmJ1dHRvbkRhdGEgPSBvQnV0dG9uO1xyXG4gICAgICAgIHBDdXN0b21Qcm92aWRlci5pc0N1c3RvbVByb3ZpZGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHByb3ZpZGVyTmFtZSkge1xyXG4gICAgICAgICAgICBwQ3VzdG9tUHJvdmlkZXIubmFtZSA9IGAke3Byb3ZpZGVyVHlwZX0tJHtwcm92aWRlck5hbWV9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb0J1dHRvbi5wcm92aWRlck5hbWUpIHtcclxuICAgICAgICAgICAgb0J1dHRvbi5wcm92aWRlck5hbWUgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3VsZEFkZEN1c3RvbVByb3ZpZGVyKHBDdXN0b21Qcm92aWRlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuc3BsaWNlKG9CdXR0b24ucG9zaXRpb24gJiYgb0J1dHRvbi5wb3NpdGlvbiA+IDEgPyBvQnV0dG9uLnBvc2l0aW9uIC0gMSA6IDAsIDAsIHBDdXN0b21Qcm92aWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvdWxkQWRkQ3VzdG9tUHJvdmlkZXIoY3VzdG9tUHJvdmlkZXIpIHtcclxuICAgICAgICBpZiAoIWN1c3RvbVByb3ZpZGVyKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZVByb3ZpZGVycyA9IGdpZ3lhLnV0aWxzLmFycmF5LmdldEFycmF5RnJvbVN0cmluZyh0aGlzLnBhcmFtcy5lbmFibGVkUHJvdmlkZXJzLCAnLCcsIHRydWUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGx1Z2luTW9kZSkge1xyXG4gICAgICAgICAgICAvLyAjNjc3OTUgY29uZmxpY3RpbmcgcHJvdmlkZXJzIGxpc3QgY29udGFpbnMgY3VzdG9tIGJ1dHRvbnNcclxuICAgICAgICAgICAgY2FzZSBQbHVnaW5Nb2RlLkxpbmtBY2NvdW50OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbVByb3ZpZGVyLm5hbWUgJiYgZ2lneWEudXRpbHMuYXJyYXkuc29tZShlUHJvdmlkZXJzLCBwID0+IHAudG9Mb3dlckNhc2UoKSA9PT0gY3VzdG9tUHJvdmlkZXIubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRTcHJpdGVFbmdpbmUoKSB7XHJcbiAgICAgICAgdmFyIHNwcml0ZVByb3ZpZGVycyA9IFtdLFxyXG4gICAgICAgICAgICBpY29uU2l6ZSA9IHRoaXMucGFyYW1zLmJ1dHRvblNpemU7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3ByaXRlUHJvdmlkZXJzLnB1c2godGhpcy5wcm92aWRlcnNbaV0udG9TdHJpbmcoKS5zcGxpdCgnLScpWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgaWNvblNpemUgPT0gJ3VuZGVmaW5lZCcgfHwgaXNOYU4oaWNvblNpemUpKSB7XHJcbiAgICAgICAgICAgIGljb25TaXplID0gdGhpcy5wYXJhbXMuaXNQb3B1cCA/IHRoaXMucGx1Z2luQ29uZmlnLmRlZmF1bHRCdXR0b25TaXplT25Qb3B1cCA6IHRoaXMucGx1Z2luQ29uZmlnLmRlZmF1bHRCdXR0b25TaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGltZ0ljb25TaXplID0gTWF0aC5mbG9vcihpY29uU2l6ZSAvIDUpICogNTtcclxuXHJcbiAgICAgICAgaWYgKGltZ0ljb25TaXplIDwgdGhpcy5zdHlsZVByZXNldC5taW5TaXplKSB7XHJcbiAgICAgICAgICAgIGltZ0ljb25TaXplID0gdGhpcy5zdHlsZVByZXNldC5taW5TaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW1nSWNvblNpemUgPiB0aGlzLnN0eWxlUHJlc2V0Lm1heFNpemUpIHtcclxuICAgICAgICAgICAgaW1nSWNvblNpemUgPSB0aGlzLnN0eWxlUHJlc2V0Lm1heFNpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYnRuSW1nVyA9IE1hdGgucm91bmQoaWNvblNpemUgKiB0aGlzLnN0eWxlUHJlc2V0LnJhdGlvKTtcclxuICAgICAgICB2YXIgYnRuSW1nSCA9IGljb25TaXplO1xyXG5cclxuICAgICAgICAvLyBzdXBwb3J0aW5nIGJ1dHRvbnMgc3RhdGVzLlxyXG4gICAgICAgIC8vIGRpZmZlcmVudCBzdGF0ZXMgYXJlIGF2YWlsYWJsZSBmb3IgdGhlIGJ1dHRvbnM6IG5vcm1hbCAobm8gc3RhdGUpLCBjb25uZWN0ZWQgYW5kIGxhc3QgbG9naW5cclxuICAgICAgICAvLyBpbiB0aGUgZnV0dXJlIHdlJ2xsIHdhbnQgdG8gc3BlY2lmeSB0aGUgcmVxdWVzdGVkIHN0YXRlXHJcbiAgICAgICAgLy8gbm8gc3RhdGUgYXQgdGhlIG1vbWVudC4uXHJcbiAgICAgICAgdmFyIHN0YXRlcyA9ICdbXSc7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgU3ByaXRlIFJlbmRlciBFbmdpbmVcclxuICAgICAgICB0aGlzLnNwcml0ZVJlbmRlcmVyID0gZ2lneWEuZ2xvYmFsLmdldFNwcml0ZVJlbmRlcmVycyh7XHJcbiAgICAgICAgICAgIGxvZ2luSWNvbnM6IHtcclxuICAgICAgICAgICAgICAgIHBhdGg6XHJcbiAgICAgICAgICAgICAgICAgICAgJy9IVE1MTG9naW4vJyArXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZVByZXNldC5iYXNlICtcclxuICAgICAgICAgICAgICAgICAgICAnWycgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZVByb3ZpZGVycy5qb2luKCcsJykgK1xyXG4gICAgICAgICAgICAgICAgICAgICddXycgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcyArXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nSWNvblNpemUgKiB0aGlzLnBpeGVsUmF0aW8gK1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVQcmVzZXQuZXh0LFxyXG4gICAgICAgICAgICAgICAgdzogYnRuSW1nVyxcclxuICAgICAgICAgICAgICAgIGg6IGJ0bkltZ0gsXHJcbiAgICAgICAgICAgICAgICBwaXhlbFJhdGlvOiB0aGlzLnBpeGVsUmF0aW8sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tIFJlbmRlcmluZyAtLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgcHVibGljIHJlc2l6ZVBsdWdpbihvbGQ6IElFbGVtZW50QWN0dWFsU2l6ZSwgY3VycjogSUVsZW1lbnRBY3R1YWxTaXplKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVE9ETyBkZWZpbmcgYSBmb3JtdWxhIGZvciAnaXNNdXRldGVkJyB0byBkZXRlcm1pbmQgaWYgdG8gcmVyZW5kZXIuLi5cclxuXHJcbiAgICAgICAgdGhpcy5sYXN0UG9sbGVkV2lkdGggPSBjdXJyLndpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIGdyaWRTaXplO1xyXG5cclxuICAgICAgICAvLyBSZXNldHRpbmcgVGhlIElubmVyIENvbnRhaW5lci5cclxuICAgICAgICB0aGlzLnVpQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0hlYWRlckVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuY3JlYXRlRWxlbWVudEZyb21IVE1MU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRUZW1wbGF0ZXMoKS5oZWFkZXIsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJUZXh0OiB0aGlzLnBhcmFtcy5oZWFkZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMudWlDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRvZ2dsZSBMb2dpbi9XZWxjb21lIE1vZGVcclxuICAgICAgICBpZiAoIXRoaXMuc2hvd1dlbGNvbWUpIHtcclxuICAgICAgICAgICAgZ3JpZFNpemUgPSBncmlkU2l6ZSB8fCB0aGlzLmdldFByb3ZpZGVyc0dyaWREaW1lbnNpb25zKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbG9naW5Db250YWluZXIgPSBuZXcgTG9naW5Db250YWluZXIodGhpcywgZ3JpZFNpemUpO1xyXG4gICAgICAgICAgICB2YXIgcHJvdmlkZXJzID0gbG9naW5Db250YWluZXIuZ2V0SHRtbEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm92aWRlcnMpO1xyXG4gICAgICAgICAgICBsb2dpbkNvbnRhaW5lci5leHBhbmRJbkNvbnRhaW5lckFmdGVyUmVuZGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHdlbGNvbWVDb250YWluZXIgPSBuZXcgV2VsY29tZUNvbnRhaW5lcih0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy51aUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lQ29udGFpbmVyLmdldEh0bWxFbGVtZW50KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb290ZXJFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGdyaWRTaXplID0gZ3JpZFNpemUgfHwgdGhpcy5nZXRQcm92aWRlcnNHcmlkRGltZW5zaW9ucygpO1xyXG4gICAgICAgICAgICB2YXIgZm9vdGVyQ29udGFpbmVyID0gbmV3IEZvb3RlckNvbnRhaW5lcih0aGlzLCBncmlkU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudWlDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyLmdldEh0bWxFbGVtZW50KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBjb29yZGluYXRlcyBvZiB0aGUgcG9wLXVwIGluIGNhc2Ugd2UgYXJlIGluIGVkaXQgbW9kZVxyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbk1vZGUgPT09IFBsdWdpbk1vZGUuQWRkQ29ubmVjdGlvbiAmJiB0aGlzLnBhcmFtcy5zaG93V2hhdHNUaGlzKSB7XHJcbiAgICAgICAgICAgIHZhciB3aGF0c3RoaXNFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLnVpQ29udGFpbmVyLCAnZ2lneWEtbG9naW4tZm9vdGVyLXdoYXRzdGhpcycpWzBdO1xyXG4gICAgICAgICAgICB2YXIgcHJvdmlkb3JzVGFibGUgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMudWlDb250YWluZXIsICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtY29udGFpbmVyJylbMF07XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyRGltZW5zaW9ucyA9IHRoaXMuZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpO1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0UmF0aW8gPSAocHJvdmlkb3JzVGFibGUub2Zmc2V0SGVpZ2h0ICogMC4wNykudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgd2hhdHN0aGlzRWxlbWVudC5zdHlsZS50b3AgPSBwYXJzZUludChoZWlnaHRSYXRpbykgKyAnJSc7XHJcbiAgICAgICAgICAgIHdoYXRzdGhpc0VsZW1lbnQuc3R5bGUubGVmdCA9IChjb250YWluZXJEaW1lbnNpb25zLncgLSB3aGF0c3RoaXNFbGVtZW50Lm9mZnNldFdpZHRoKSAvIDIgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tIEV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gICAgLy8gV2UgbmVlZCB0aGUgYmVsb3cgbWV0aG9kIHRvIG1haW50YWluIGEgcmVmZXJlbmNlIHRvIHRoZSBjb3JyZWN0IHRoaXNcclxuICAgIHByaXZhdGUgb25Vc2VyU3RhdGVDaGFuZ2UgPSBldmVudCA9PiB0aGlzLnVzZXJTdGF0ZUNoYW5nZWQoZXZlbnQpO1xyXG5cclxuICAgIHByaXZhdGUgdXNlclN0YXRlQ2hhbmdlZChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC51c2VyKSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGFscmVhZHkgaGF2ZSB0aGUgdXNlciAtIG5vIG5lZWQgdG8gZmV0Y2ggdGhlIHVzZXIgZGV0YWlsc1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVVc2VySW5mb0FuZFJlbmRlclBsdWdpbihldmVudC51c2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSB0aGUgdXNlciBkZXRhaWxzIC0gZmV0Y2ggdGhlbSBhbmQgdGhlbiByZW5kZXIgdGhlIGNvbnRyb2xcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbyhyZXN1bHQgPT4gdGhpcy5zYXZlVXNlckluZm9BbmRSZW5kZXJQbHVnaW4ocmVzdWx0LnVzZXIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlVXNlckluZm9BbmRSZW5kZXJQbHVnaW4odXNlcikge1xyXG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICAgICAgdGhpcy5zaG93RWRpdCA9XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luTW9kZSA9PT0gUGx1Z2luTW9kZS5BZGRDb25uZWN0aW9uICYmIHRoaXMudXNlci5pc0Nvbm5lY3RlZCAmJiAhZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0RmFsc2UodGhpcy5wYXJhbXMuc2hvd0VkaXRMaW5rKTtcclxuXHJcbiAgICAgICAgLy8gcmVuZGVyIHRoZSBjb250cm9sXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyVG9HbG9iYWxFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRHbG9iYWxFdmVudEhhbmRsZXJzKHtcclxuICAgICAgICAgICAgb25Mb2dpbjogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcclxuICAgICAgICAgICAgb25Mb2dvdXQ6IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uQ29ubmVjdGlvbkFkZGVkOiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxyXG4gICAgICAgICAgICBvbkNvbm5lY3Rpb25SZW1vdmVkOiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mYWNlYm9va1N1Z2dlc3RFbmFibGVkKSB0aGlzLmFkZEdsb2JhbEV2ZW50SGFuZGxlcignb25GYWNlYm9va0xvYWRlZCcsIHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZhY2Vib29rU3VnZ2VzdEVuYWJsZWQpIHRoaXMucmVtb3ZlR2xvYmFsRXZlbnRIYW5kbGVyKCdvbkZhY2Vib29rTG9hZGVkJywgdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlR2xvYmFsRXZlbnRIYW5kbGVycyh7XHJcbiAgICAgICAgICAgIG9uTG9naW46IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uTG9nb3V0OiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxyXG4gICAgICAgICAgICBvbkNvbm5lY3Rpb25BZGRlZDogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcclxuICAgICAgICAgICAgb25Db25uZWN0aW9uUmVtb3ZlZDogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblByb3ZpZGVyQ2xpY2tIYW5kbGVyKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldDogYW55ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBGaW5kIHRoZSBwYXJlbnQgaG9sZGluZyB0aGUgcHJvdmlkZXIgYXR0cmlidXRlLlxyXG4gICAgICAgIHdoaWxlICh0YXJnZXQgJiYgIXRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2lneWEtcHJvdmlkZXInKSkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBwcm92aWRlciBuYW1lIGZyb20gdGhlIGV2ZW50XHJcbiAgICAgICAgICAgIHZhciBwcm92aWRlck5hbWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWdpZ3lhLXByb3ZpZGVyJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvdmlkZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBwcm92aWRlciBpbiB0aGUgcHJpdmF0ZSBwcm92aWRlcnMgcmVwb3NpdG9yeVxyXG4gICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gZ2lneWEuXy5wcm92aWRlcnMuZ2V0UHJvdmlkZXJCeU5hbWUocHJvdmlkZXJOYW1lLCB0aGlzLnByb3ZpZGVycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgbm90IGZvdW5kLCBzZWFyY2ggdGhlIGdsb2JhbCBwcm92aWRlcnMgcmVwb3NpdG9yeVxyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm92aWRlcikgcHJvdmlkZXIgPSBnaWd5YS5fLnByb3ZpZGVycy5nZXRQcm92aWRlckJ5TmFtZShwcm92aWRlck5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldHRpbmcgdGhlIHBhcmFtcyBmb3IgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvckNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlcy5yZXF1ZXN0UGFyYW1zLmdldEluZm9SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXMucmVxdWVzdFBhcmFtcy5jb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlcy5jb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMuaXNQb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5fY2xvc2VDb21wb25lbnQodGhpcy5wYXJhbXMucmlkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gdGhpcy5wbHVnaW5Nb2RlID09PSBQbHVnaW5Nb2RlLkFkZENvbm5lY3Rpb24gJiYgcmVzLm9wZXJhdGlvbiA9PSAnYWRkQ29ubmVjdGlvbicgPyAnY29ubmVjdGlvbkFkZGVkJyA6ICdsb2dpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb0V2ZW50ID0gZ2lneWEuXy5hZGRVc2VySW5mb1RvRXZlbnQocmVzLCB7IHByb3ZpZGVyOiBwcm92aWRlciwgcmVzcG9uc2U6IHJlcyB9LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hQbHVnaW5FdmVudChldmVudE5hbWUsIG9FdmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIuSUQgPT0gNDEyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvQnV0dG9uID0gcHJvdmlkZXJbJ2J1dHRvbkRhdGEnXTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbJ29wZW5JRFByb3ZpZGVyTmFtZSddID0gb0J1dHRvbi5wcm92aWRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbJ29wZW5JRFByb3ZpZGVyTG9nbyddID0gb0J1dHRvbi5sb2dvVVJMO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1snb3BlbklEVVJMJ10gPSBvQnV0dG9uLm9wZW5JRFVSTDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIuSUQgIT0gNDEyMSB8fCBwcm92aWRlclsnYnV0dG9uRGF0YSddLnR5cGUgPT0gJ29wZW5JRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbHVnaW5Nb2RlID09PSBQbHVnaW5Nb2RlLkFkZENvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbiA9IHRoaXMuZ2V0SWRlbnRpdHlJbmZvRm9yUHJvdmlkZXIocHJvdmlkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3ZlcndyaXRlIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hQbHVnaW5FdmVudCgncGVybWlzc2lvbnMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLnJlcXVlc3RQZXJtaXNzaW9ucyh0aGlzLnBhcmFtcywgdGhpcy5wYXJhbXMsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuY29ubmVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhcmFtc1snYWNjb3VudHNTb2NpYWxMb2dpbiddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaWYgZm9yICdTY3JlZW4gc2V0cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMuc29jaWFsTG9naW4odGhpcy5wYXJhbXMsIHRoaXMucGFyYW1zLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5sb2dpbih0aGlzLnBhcmFtcywgdGhpcy5wYXJhbXMsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnRPYmo7XHJcbiAgICAgICAgICAgIGlmIChwcm92aWRlclsnYnV0dG9uRGF0YSddKSBldmVudE9iaiA9IHsgYnV0dG9uOiBwcm92aWRlclsnYnV0dG9uRGF0YSddIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoUGx1Z2luRXZlbnQoJ2J1dHRvbkNsaWNrZWQnLCBldmVudE9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gQ2FsY3VsYXRpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdGhlIGNvbnRhaW5lciBkaW1lbnNpb25zIHRvIGVuYWJsZSByZXNwb25zaXZlIGNhbGN1bGF0aW9ucy5cclxuICAgIHB1YmxpYyBnZXRDb250YWluZXJEaW1lbnNpb25zKCkge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMucGFyYW1zLndpZHRoTnVtO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5yZXNwb25zaXZlV2lkdGgpIHtcclxuICAgICAgICAgICAgLy8gRml4IGZvciBnZXR0aW5nIHRoZSBQUkVDSVNFIGRpbWVuc2lvbnMgb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50IG5lc3RlZCBpbnNpZGUgYW4gdW5rbm93biBjb250YWluZXIgd2l0aCBubyBzcGVjaWZpYyB3aWR0aC5cclxuICAgICAgICAgICAgLy8gU2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0MTA0OTA1L29mZnNldHdpZHRoLW5vdC1zYW1lLWluLWRpZmZlcmVudC1icm93c2Vycy5cclxuICAgICAgICAgICAgY29uc3QgYm91bmRpbmdCb3g6IGFueSA9XHJcbiAgICAgICAgICAgICAgICAodGhpcy51aUNvbnRhaW5lci5vZmZzZXRQYXJlbnQgJiYgdGhpcy51aUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QgJiYgdGhpcy51aUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkgfHwge307XHJcbiAgICAgICAgICAgIGNvbnN0IHB4V2lkdGggPSBib3VuZGluZ0JveC53aWR0aCB8fCBib3VuZGluZ0JveC5yaWdodCAtIGJvdW5kaW5nQm94LmxlZnQgfHwgdGhpcy51aUNvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgd2lkdGggPSAocHhXaWR0aCAvIDEwMCkgKiB0aGlzLnBhcmFtcy53aWR0aE51bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaDogdGhpcy5wYXJhbXMuaGVpZ2h0TnVtLFxyXG4gICAgICAgICAgICB3OiB3aWR0aCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UHJvdmlkZXJzR3JpZERpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHdpdGhvdXQgdGhlIHBhZ2dlclxyXG4gICAgICAgIHZhciBwcm92aWRlcnNHcmlkRGltZW5zaW9uczogSVByb3ZpZGVyc0dyaWREaW1lbnNpb25zID0gdGhpcy5fZ2V0UHJvdmlkZXJzR3JpZERpbWVuc2lvbnMoMCk7XHJcblxyXG4gICAgICAgIC8vIHdlIGhhdmUgbW9yZSBwcm92aWRlcnMgdGhlbiBzcGFjZVxyXG4gICAgICAgIHZhciBuZWVkUmVDYWxjdWxhdGlvbiA9IHRoaXMucHJvdmlkZXJzLmxlbmd0aCA+IHByb3ZpZGVyc0dyaWREaW1lbnNpb25zLnJvd3MgKiBwcm92aWRlcnNHcmlkRGltZW5zaW9ucy5jb2x1bW5zO1xyXG5cclxuICAgICAgICBpZiAobmVlZFJlQ2FsY3VsYXRpb24pIHtcclxuICAgICAgICAgICAgdmFyIGlzRmxvYXRpbmdBcnJvd3MgPSB0aGlzLnBhZ2luZ0J1dHRvblN0eWxlLmdldFN0eWxlTmFtZSh0aGlzKSA9PT0gJ2Zsb2F0aW5nJztcclxuXHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB3aXRoIHRoZSBwYWdlclxyXG4gICAgICAgICAgICBwcm92aWRlcnNHcmlkRGltZW5zaW9ucyA9IHRoaXMuX2dldFByb3ZpZGVyc0dyaWREaW1lbnNpb25zKGlzRmxvYXRpbmdBcnJvd3MgPyB0aGlzLnBsdWdpbkNvbmZpZy5mbG9hdGluZ0Fycm93V2lkdGggOiB0aGlzLnBsdWdpbkNvbmZpZy5hcnJvd1dpZHRoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3ZpZGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcHJvdmlkZXJzR3JpZERpbWVuc2lvbnMuY29sdW1ucyA9IHByb3ZpZGVyc0dyaWREaW1lbnNpb25zLnJvd3MgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBUaGUgQ29scyAvIFJvd3NcclxuICAgICAgICAgICAgLy8gd2UgZG9udCBoYXZlIHBhZ2luZywgc28gd2UgbmVlZCB0byBiYWxhbmNlIGFsbCB0aGUgcHJvdmlkZXJzXHJcblxyXG4gICAgICAgICAgICAvLyBHZXR0aW5nIHRoZSBudW1iZXIgb2Ygcm93cyBjdXJyZW50bHkgb2NjdXBpZWQgd2l0aCBwcm92aWRlcnNcclxuICAgICAgICAgICAgdmFyIGZhY3RvcmlhbERpdmlkZXIgPSBNYXRoLmNlaWwodGhpcy5wcm92aWRlcnMubGVuZ3RoIC8gcHJvdmlkZXJzR3JpZERpbWVuc2lvbnMuY29sdW1ucyk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXNpemUgdGhlICdjb2xzJyBzbyB0aGUgZ3JpZCBjYW4gZml0IGFsbCB0aGUgcHJvdmlkZXJzIGluIHRoZSBzYW1lIHRhcmdldCByb3dzXHJcbiAgICAgICAgICAgIHByb3ZpZGVyc0dyaWREaW1lbnNpb25zLmNvbHVtbnMgPSBNYXRoLmNlaWwodGhpcy5wcm92aWRlcnMubGVuZ3RoIC8gZmFjdG9yaWFsRGl2aWRlcik7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyc0dyaWREaW1lbnNpb25zLnJvd3MgPSBmYWN0b3JpYWxEaXZpZGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyc0dyaWREaW1lbnNpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhIGdyaWQgZGltZW5zaW9uIHNpemUgZm9yIHRoZSBpY29ucyBwcmVzZXRcclxuICAgIHByaXZhdGUgX2dldFByb3ZpZGVyc0dyaWREaW1lbnNpb25zKGFycm93V2lkdGg6IG51bWJlcikge1xyXG4gICAgICAgIC8vIENvbnN0cy5cclxuICAgICAgICB2YXIgdmVydGljYWxNYXJnaW4gPSA1O1xyXG4gICAgICAgIHZhciBob3Jpem9udGFsTWFyZ2luID0gNTtcclxuICAgICAgICB2YXIgYnV0dG9uSGVpZ2h0ID0gdGhpcy5wYXJhbXMuYnV0dG9uU2l6ZTtcclxuICAgICAgICB2YXIgYnV0dG9uV2lkdGggPSBNYXRoLmNlaWwodGhpcy5wYXJhbXMuYnV0dG9uU2l6ZSAqIHRoaXMuc3R5bGVQcmVzZXQucmF0aW8pO1xyXG5cclxuICAgICAgICAvLyBNaW5pbXVtIHNpemUgZm9yIHRoZSBwcm92aWRlcidzIGdyaWQgaXMgMSBidXR0b25cclxuICAgICAgICB2YXIgbWluaW11bUdyaWRIZWlnaHQgPSBidXR0b25IZWlnaHQ7XHJcbiAgICAgICAgdmFyIG1pbmltdW1HcmlkV2lkdGggPSBidXR0b25XaWR0aDtcclxuXHJcbiAgICAgICAgdmFyIGNvbnRhaW5lckRpbWVuc2lvbnMgPSB0aGlzLmdldENvbnRhaW5lckRpbWVuc2lvbnNXaXRob3V0UGFnZXJBbmRGb290ZXIoYXJyb3dXaWR0aCwgbWluaW11bUdyaWRIZWlnaHQpO1xyXG4gICAgICAgIHZhciBjb2x1bW5zQW5kUm93cyA9IHRoaXMuZ2V0Q29sdW1uc0FuZFJvd3NPZlByb3ZpZGVyc0dyaWQoXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckRpbWVuc2lvbnMuY29udGFpbmVyV2lkdGgsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckRpbWVuc2lvbnMuY29udGFpbmVySGVpZ2h0LFxyXG4gICAgICAgICAgICBidXR0b25XaWR0aCxcclxuICAgICAgICAgICAgYnV0dG9uSGVpZ2h0LFxyXG4gICAgICAgICAgICBob3Jpem9udGFsTWFyZ2luLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbE1hcmdpbixcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBwcm92aWRlcnNHcmlkV2lkdGhBbmRIZWlnaHQgPSB0aGlzLmdldFdpZHRoQW5kSGVpZ2h0T2ZQcm92aWRlcnNHcmlkKFxyXG4gICAgICAgICAgICBjb250YWluZXJEaW1lbnNpb25zLmNvbnRhaW5lckhlaWdodCxcclxuICAgICAgICAgICAgY29sdW1uc0FuZFJvd3MuY29sdW1ucyxcclxuICAgICAgICAgICAgYnV0dG9uV2lkdGgsXHJcbiAgICAgICAgICAgIG1pbmltdW1HcmlkV2lkdGgsXHJcbiAgICAgICAgICAgIG1pbmltdW1HcmlkSGVpZ2h0LFxyXG4gICAgICAgICAgICBob3Jpem9udGFsTWFyZ2luLFxyXG4gICAgICAgICAgICBhcnJvd1dpZHRoLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciBncmlkOiBJUHJvdmlkZXJzR3JpZERpbWVuc2lvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnNBbmRSb3dzLmNvbHVtbnMsXHJcbiAgICAgICAgICAgIHJvd3M6IGNvbHVtbnNBbmRSb3dzLnJvd3MsXHJcbiAgICAgICAgICAgIGhlaWdodDogcHJvdmlkZXJzR3JpZFdpZHRoQW5kSGVpZ2h0LmhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6IHByb3ZpZGVyc0dyaWRXaWR0aEFuZEhlaWdodC53aWR0aCxcclxuICAgICAgICAgICAgdG90YWxXaWR0aEluY2x1ZGluZ1BhZ2VyOiBwcm92aWRlcnNHcmlkV2lkdGhBbmRIZWlnaHQudG90YWxXaWR0aEluY2x1ZGluZ1BhZ2VyLFxyXG4gICAgICAgICAgICBpc1BhZ2VkOiAhYXJyb3dXaWR0aCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbnRhaW5lckRpbWVuc2lvbnNXaXRob3V0UGFnZXJBbmRGb290ZXIoYXJyb3dXaWR0aDogbnVtYmVyLCBtaW5pbXVtR3JpZEhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBhY3R1YWwgYXZhaWxhYmxlIHNwYWNlIG9uIHRoZSBjb250YWluZXJcclxuICAgICAgICB2YXIgY29udGFpbmVyRGltZW5zaW9uID0gdGhpcy5nZXRDb250YWluZXJEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZWZmZWN0aXZlIHNpemUgb2YgdGhlIGNvbnRhaW5lcnNcclxuICAgICAgICB2YXIgY29udGFpbmVyV2lkdGggPSBjb250YWluZXJEaW1lbnNpb24udyAtIGFycm93V2lkdGggKiAyO1xyXG4gICAgICAgIHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXJEaW1lbnNpb24uaCA+IG1pbmltdW1HcmlkSGVpZ2h0ID8gY29udGFpbmVyRGltZW5zaW9uLmggOiBtaW5pbXVtR3JpZEhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb290ZXJFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodCAtPSB0aGlzLnBsdWdpbkNvbmZpZy5mb290ZXJIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb250YWluZXJXaWR0aDogY29udGFpbmVyV2lkdGgsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodDogY29udGFpbmVySGVpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb2x1bW5zQW5kUm93c09mUHJvdmlkZXJzR3JpZChcclxuICAgICAgICBjb250YWluZXJXaWR0aDogbnVtYmVyLFxyXG4gICAgICAgIGNvbnRhaW5lckhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIGJ1dHRvbldpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgYnV0dG9uSGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgaG9yaXpvbnRhbE1hcmdpbjogbnVtYmVyLFxyXG4gICAgICAgIHZlcnRpY2FsTWFyZ2luOiBudW1iZXIsXHJcbiAgICApIHtcclxuICAgICAgICAvLyBjYWxjdWxhdGluZyBhIHZpcnR1YWwgZ3JpZCB0byBkZXRlcm1pbmQgaG93IG1hbnkgcHJvdmlkZXJzIGNhbiBmaXQgaW4gdGhlIGNvbnRhaW5lci5cclxuXHJcbiAgICAgICAgdmFyIGNvbHVtbnNDYWxjdWxhdGlvbiA9IE1hdGguZmxvb3IoY29udGFpbmVyV2lkdGggLyAoYnV0dG9uV2lkdGggKyBob3Jpem9udGFsTWFyZ2luKSk7XHJcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBjb2x1bW5zQ2FsY3VsYXRpb24gPiB0aGlzLnByb3ZpZGVycy5sZW5ndGggPyB0aGlzLnByb3ZpZGVycy5sZW5ndGggOiBjb2x1bW5zQ2FsY3VsYXRpb247XHJcblxyXG4gICAgICAgIHZhciByb3dzID0gTWF0aC5mbG9vcigoY29udGFpbmVySGVpZ2h0ICsgdmVydGljYWxNYXJnaW4pIC8gKGJ1dHRvbkhlaWdodCArIHZlcnRpY2FsTWFyZ2luKSk7XHJcblxyXG4gICAgICAgIC8vIHNldHRpbmcgbWluaW11bSBjb2x1bW5zIHJvd3NcclxuICAgICAgICBjb2x1bW5zID0gY29sdW1ucyA+IDAgPyBjb2x1bW5zIDogMTtcclxuICAgICAgICByb3dzID0gcm93cyA+IDAgPyByb3dzIDogMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucyxcclxuICAgICAgICAgICAgcm93czogcm93cyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0V2lkdGhBbmRIZWlnaHRPZlByb3ZpZGVyc0dyaWQoXHJcbiAgICAgICAgY29udGFpbmVySGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgY29sdW1uczogbnVtYmVyLFxyXG4gICAgICAgIGJ1dHRvbldpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgbWluaW11bUdyaWRXaWR0aDogbnVtYmVyLFxyXG4gICAgICAgIG1pbmltdW1HcmlkSGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgaG9yaXpvbnRhbE1hcmdpbjogbnVtYmVyLFxyXG4gICAgICAgIGFycm93V2lkdGg6IG51bWJlcixcclxuICAgICkge1xyXG4gICAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBpbm5lciBzaXplIG9mIHRoZSBncmlkIGNvbnRhaW5lclxyXG4gICAgICAgIHZhciBoID0gY29udGFpbmVySGVpZ2h0O1xyXG4gICAgICAgIHZhciB3ID0gY29sdW1ucyAqIChidXR0b25XaWR0aCArIGhvcml6b250YWxNYXJnaW4pIC0gaG9yaXpvbnRhbE1hcmdpbjtcclxuXHJcbiAgICAgICAgLy8gc2V0dGluZyBtaW5pbXVtLlxyXG4gICAgICAgIHcgPSB3ID49IG1pbmltdW1HcmlkV2lkdGggPyB3IDogbWluaW11bUdyaWRXaWR0aDtcclxuICAgICAgICBoID0gaCA+PSBtaW5pbXVtR3JpZEhlaWdodCA/IGggOiBtaW5pbXVtR3JpZEhlaWdodDtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsV2lkdGhJbmNsdWRpbmdQYWdlciA9IHcgKyBhcnJvd1dpZHRoICogMjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBoLFxyXG4gICAgICAgICAgICB3aWR0aDogdyxcclxuICAgICAgICAgICAgdG90YWxXaWR0aEluY2x1ZGluZ1BhZ2VyOiB0b3RhbFdpZHRoSW5jbHVkaW5nUGFnZXIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0SWRlbnRpdHlJbmZvRm9yUHJvdmlkZXIocHJvdmlkZXI6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVySWRlbnRpdHlJbmZvOiBJUHJvdmlkZXJJZGVudGl0eUluZm9ybWF0aW9uID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBoYXNBbGxSZXF1aXJlZFBlcm1pc3Npb25zOiB0cnVlLFxyXG4gICAgICAgICAgICByZXF1aXJlZFBlcm1pc3Npb25zOiBbXSxcclxuICAgICAgICAgICAgaWRlbnRpdHk6IG51bGwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYoIXByb3ZpZGVyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVySWRlbnRpdHlJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXNlciAmJiB0aGlzLnVzZXIuaWRlbnRpdGllcykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZGVudGl0eSBpbiB0aGlzLnVzZXIuaWRlbnRpdGllcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cklkZW50aXR5ID0gdGhpcy51c2VyLmlkZW50aXRpZXNbaWRlbnRpdHldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cklkZW50aXR5LnByb3ZpZGVyID09IHByb3ZpZGVyLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcklkZW50aXR5SW5mby5uYW1lID0gcHJvdmlkZXIubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcklkZW50aXR5SW5mby5pZGVudGl0eSA9IGN1cklkZW50aXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVySWRlbnRpdHlJbmZvLmlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3ZpZGVySWRlbnRpdHlJbmZvLmlkZW50aXR5KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm92aWRlcklkZW50aXR5SW5mby5pZGVudGl0eS5taXNzaW5nUGVybWlzc2lvbnMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtaXNzaW5nUGVybWlzc2lvbnNTdHJpbmcgPSAnLCcgKyBwcm92aWRlcklkZW50aXR5SW5mby5pZGVudGl0eS5taXNzaW5nUGVybWlzc2lvbnMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICcnKSArICcsJztcclxuICAgICAgICAgICAgICAgIHZhciBuZWVkZWRQZXJtaXNzaW9ucyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5leHRyYWN0UHJvcGVydHkodGhpcy5wYXJhbXMsIHByb3ZpZGVyLm5hbWUgKyAnRXh0cmFQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFuZWVkZWRQZXJtaXNzaW9ucykgbmVlZGVkUGVybWlzc2lvbnMgPSBnaWd5YS51dGlscy5vYmplY3QuZXh0cmFjdFByb3BlcnR5KHRoaXMucGFyYW1zLCAnZXh0cmFQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFuZWVkZWRQZXJtaXNzaW9ucykgbmVlZGVkUGVybWlzc2lvbnMgPSAnJztcclxuICAgICAgICAgICAgICAgIG5lZWRlZFBlcm1pc3Npb25zID0gbmVlZGVkUGVybWlzc2lvbnMudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHZhciBhck5lZWRlZFBlcm1pc3Npb25zID0gbmVlZGVkUGVybWlzc2lvbnMuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGlQZXJtaXNzaW9uID0gMDsgaVBlcm1pc3Npb24gPCBhck5lZWRlZFBlcm1pc3Npb25zLmxlbmd0aDsgaVBlcm1pc3Npb24rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGVybWlzc2lvbnNTdHJpbmcgJiYgbWlzc2luZ1Blcm1pc3Npb25zU3RyaW5nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignLCcgKyBhck5lZWRlZFBlcm1pc3Npb25zW2lQZXJtaXNzaW9uXSArICcsJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJZGVudGl0eUluZm8uaGFzQWxsUmVxdWlyZWRQZXJtaXNzaW9ucyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcklkZW50aXR5SW5mby5yZXF1aXJlZFBlcm1pc3Npb25zLnB1c2goYXJOZWVkZWRQZXJtaXNzaW9uc1tpUGVybWlzc2lvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVySWRlbnRpdHlJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVFbGVtZW50RnJvbUhUTUxTdHJpbmcoZWxlbWVudEh0bWwpIHtcclxuICAgICAgICB2YXIgZWxlbWVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgZWxlbWVudFdyYXBwZXIuaW5uZXJIVE1MID0gZWxlbWVudEh0bWw7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50V3JhcHBlci5jaGlsZE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VXNlckluZm8oY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5nZXRVc2VySW5mbyh0aGlzLnBhcmFtcywge1xyXG4gICAgICAgICAgICBpbmNsdWRlQWxsSWRlbnRpdGllczogdHJ1ZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvckNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RWRpdCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luTW9kZSA9PT0gUGx1Z2luTW9kZS5BZGRDb25uZWN0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5pc0Nvbm5lY3RlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0RmFsc2UodGhpcy5wYXJhbXMuc2hvd0VkaXRMaW5rKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdHlsZShidXR0b25zU3R5bGUpOiBhbnkge1xyXG4gICAgICAgIHN3aXRjaCAoYnV0dG9uc1N0eWxlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgY2FzZSAnZnVsbGxvZ29jb2xvcmVkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW86IDIuNixcclxuICAgICAgICAgICAgICAgICAgICBiYXNlOiAnRnVsbExvZ29Db2xvcmVkLycsXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0OiAnLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9Db25uZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlICdmdWxsbG9nbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhdGlvOiAyLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogJ0Z1bGxMb2dvLycsXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0OiAnLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9Db25uZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlICdzaWduaW53aXRoJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW86IDcuMDUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogJ1NpZ25JbldpdGgvJyxcclxuICAgICAgICAgICAgICAgICAgICBleHQ6ICcucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICBub0xhc3RMb2dpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBub0Nvbm5lY3RlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5TaXplOiAyMCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhdGlvOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dDogJy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMYXN0TG9naW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGdpZ3lhLl8uYXBpQWRhcHRlci5nZXRTdG9yYWdlKCkuZ2V0SXRlbSgnX2dpZ19sbHAnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TGFzdExvZ2luTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2lneWEuXy5hcGlBZGFwdGVyLmdldFN0b3JhZ2UoKS5nZXRJdGVtKCdfZ2lnX2xsdScpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VYTUwoZGF0YSkge1xyXG4gICAgICAgIHZhciB4bWwsIHRtcDtcclxuICAgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3VwcG9ydDogSUU5XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdG1wID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgICAgICAgICB4bWwgPSB0bXAucGFyc2VGcm9tU3RyaW5nKGRhdGEsICd0ZXh0L3htbCcpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgeG1sID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geG1sO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNUcnVlKHZhbHVlLCBkZWZhdWx0VmFsdWUgPSAnJyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZSA9PSB0cnVlIHx8IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlRWxlbW5ldEJsb2NrKGVsZW1lbnRUeXBlOiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBhbnksIGNvbnRlbnQ/OiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsbTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJTWFwIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2FycmF5JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2luZ0J1dHRvblN0eWxlQ2hvaWNlSW5mbyB7XHJcbiAgICBsYXN0UG9sbGVkV2lkdGg6IG51bWJlcjtcclxuICAgIGlzTW9iaWxlVUk6IGJvb2xlYW47IC8vIHNob3VsZCBjb21lIGZvcm0gYmFzZVBsdWdpbiAtIGp1c3QgbGlrZSBpbiBzY3JlZW5TZXRcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElQYWdpbmdCdXR0b25TdHlsZSB7XHJcbiAgICBnZXRTdHlsZUNsYXNzKGluZm86IElQYWdpbmdCdXR0b25TdHlsZUNob2ljZUluZm8pOiBzdHJpbmc7XHJcbiAgICBnZXRTdHlsZU5hbWUoaW5mbyk6IHN0cmluZztcclxufVxyXG5mdW5jdGlvbiBzaW1wbGVTdHlsZShzdHlsZU5hbWU6IHN0cmluZyk6IElQYWdpbmdCdXR0b25TdHlsZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFN0eWxlQ2xhc3M6ICgpID0+ICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLScgKyBzdHlsZU5hbWUsXHJcbiAgICAgICAgZ2V0U3R5bGVOYW1lOiBpbmZvID0+IHN0eWxlTmFtZSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IHZhciBQYWdpbmdCdXR0b25TdHlsZXM6IElNYXA8SVBhZ2luZ0J1dHRvblN0eWxlPiA9IHtcclxuICAgIGFycm93czogc2ltcGxlU3R5bGUoJ2Fycm93cycpLFxyXG4gICAgbmV3QXJyb3dzOiBzaW1wbGVTdHlsZSgnbmV3QXJyb3dzJyksXHJcbiAgICBmbG9hdGluZzogc2ltcGxlU3R5bGUoJ2Zsb2F0aW5nJyksXHJcbiAgICBhdXRvOiB7XHJcbiAgICAgICAgZ2V0U3R5bGVDbGFzczogaW5mbyA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZU5hbWUgPSBQYWdpbmdCdXR0b25TdHlsZXNbJ2F1dG8nXS5nZXRTdHlsZU5hbWUoaW5mbyk7XHJcbiAgICAgICAgICAgIHJldHVybiBQYWdpbmdCdXR0b25TdHlsZXNbc3R5bGVOYW1lXS5nZXRTdHlsZUNsYXNzKGluZm8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3R5bGVOYW1lOiBpbmZvID0+IChpbmZvLmlzTW9iaWxlVUkgJiYgKCFpbmZvLmxhc3RQb2xsZWRXaWR0aCB8fCBpbmZvLmxhc3RQb2xsZWRXaWR0aCA8IDUwMCkgPyAnZmxvYXRpbmcnIDogJ25ld0Fycm93cycpLFxyXG4gICAgfSxcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudEZyb21IVE1MU3RyaW5nKGVsZW1lbnRIdG1sKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGVsZW1lbnRXcmFwcGVyLmlubmVySFRNTCA9IGVsZW1lbnRIdG1sO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudFdyYXBwZXIuY2hpbGROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250YWluZXJCYXNlIH0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0NvbnRhaW5lckJhc2UnO1xyXG5pbXBvcnQgeyBMb2dpblBsdWdpbiB9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Mb2dpblBsdWdpbic7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lckJhc2Uge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIEVsZW1lbnRzU2VsZWN0b3IgPSB7XHJcbiAgICAgICAgY29udGFpbmVyOiAnZ2lneWEtbG9naW4td2VsY29tZS1jb250YWluZXInLFxyXG4gICAgICAgIHVzZXI6ICdnaWd5YS1sb2dpbi13ZWxjb21lLXVzZXInLFxyXG4gICAgICAgIHByb3ZpZGVyOiAnZ2lneWEtbG9naW4td2VsY29tZS1wcm92aWRlcicsXHJcbiAgICAgICAgc2lnbmlubGluazogJ2dpZ3lhLWxvZ2luLXdlbGNvbWUtc2lnbmluLWxpbmsnLFxyXG4gICAgICAgIGdyZWV0aW5nOiAnZ2lneWEtbG9naW4td2VsY29tZS1ncmVldGluZycsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGx1Z2luOiBMb2dpblBsdWdpbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMucGx1Z2luLmdldFRlbXBsYXRlcygpWyd3ZWxjb21lJ107XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wbHVnaW4uY3JlYXRlRWxlbWVudEZyb21IVE1MU3RyaW5nKHRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SHRtbEVsZW1lbnQoKSB7XHJcbiAgICAgICAgdmFyIHByb3ZpZGVyQnV0dG9uU2l6ZXMgPSB0aGlzLmdldFdlbGNvbWVCdXR0b25TaXplZCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEdyZWV0aW5nRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U2lnbkluVXNpbmdBbm90aGVyQWNjb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBTZXR0aW5nIFRoZSBQcm92aWRlciBCdXR0b25cclxuICAgICAgICAvLyBOT1RJQ0UgLSBrZWVwaW5nIHRoaXMgZm9yIGxhc3QgdG8gbWVhc3VyZSB0aGUgY29udGFpbmVyIGFuZCBhcHBsYXkgbWFyZ2luIHRvIGZpdCBpbiB0aGUgY29udGFpbmUuXHJcbiAgICAgICAgdGhpcy5zZXRQcm92aWRlckNlbGxFbGVtZW50KHByb3ZpZGVyQnV0dG9uU2l6ZXMuaW1hZ2VTaXplLCBwcm92aWRlckJ1dHRvblNpemVzLmJ1dHRvblNpemUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0V2VsY29tZUJ1dHRvblNpemVkKCkge1xyXG4gICAgICAgIHZhciB3ZWxjb21lQnRuU2l6ZSA9IHRoaXMucGx1Z2luLnBhcmFtcy5sYXN0TG9naW5CdXR0b25TaXplXHJcbiAgICAgICAgICAgID8gdGhpcy5wbHVnaW4ucGFyYW1zLmxhc3RMb2dpbkJ1dHRvblNpemVcclxuICAgICAgICAgICAgOiB0aGlzLnBsdWdpbi5wbHVnaW5Db25maWcuZGVmYXVsdGxhc3RMb2dpbkJ1dHRvblNpemU7XHJcbiAgICAgICAgd2VsY29tZUJ0blNpemUgPSBwYXJzZUludCh3ZWxjb21lQnRuU2l6ZS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgdmFyIHdlbGNvbWVJbWdTaXplID0gTWF0aC5mbG9vcih3ZWxjb21lQnRuU2l6ZSAvIDUpICogNTtcclxuICAgICAgICBpZiAod2VsY29tZUltZ1NpemUgPCAyNSkgd2VsY29tZUltZ1NpemUgPSAyMDtcclxuICAgICAgICBpZiAod2VsY29tZUltZ1NpemUgPiAzNSkgd2VsY29tZUltZ1NpemUgPSA0MDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYnV0dG9uU2l6ZTogd2VsY29tZUJ0blNpemUsXHJcbiAgICAgICAgICAgIGltYWdlU2l6ZTogd2VsY29tZUltZ1NpemUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFByb3ZpZGVyQ2VsbEVsZW1lbnQod2VsY29tZUltZ1NpemUsIHdlbGNvbWVCdG5TaXplKSB7XHJcbiAgICAgICAgdmFyIHByb3ZpZGVyQ29udGFpbmVyRWxtZW50ID0gdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5lbGVtZW50LCB0aGlzLkVsZW1lbnRzU2VsZWN0b3IucHJvdmlkZXIpO1xyXG5cclxuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLnBsdWdpbi5zdHlsZVByZXNldDsgLy8gVE9ETyBkaWZmZXJlbnQgZnJvbSBiZWZvcmU6IHdhcyBCdXR0b25QcmVzZXRzLnNpZ25pblxyXG5cclxuICAgICAgICB2YXIgaW1nID1cclxuICAgICAgICAgICAgJzxpbWcgZGF0YS1naWd5YS1wcm92aWRlcj1cIicgK1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5sYXN0TG9naW5Qcm92aWRlck9iamVjdC5uYW1lICtcclxuICAgICAgICAgICAgJ1wiIGFsdD1cIicgK1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5sYXN0TG9naW5Qcm92aWRlck9iamVjdC5kaXNwbGF5TmFtZSArXHJcbiAgICAgICAgICAgICdcIiBoZWlnaHQ9XCInICtcclxuICAgICAgICAgICAgd2VsY29tZUJ0blNpemUgK1xyXG4gICAgICAgICAgICAnXCIgd2lkdGg9XCInICtcclxuICAgICAgICAgICAgTWF0aC5jZWlsKHRoaXMucGx1Z2luLnBhcmFtcy5sYXN0TG9naW5CdXR0b25TaXplICogc3R5bGUucmF0aW8pICtcclxuICAgICAgICAgICAgJ1wiIHNyYz1cIicgK1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5pbWFnZUJhc2UgK1xyXG4gICAgICAgICAgICAnL1NpZ25JbldpdGgvJyArXHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmxhc3RMb2dpblByb3ZpZGVyT2JqZWN0Lm5hbWUgK1xyXG4gICAgICAgICAgICAnXycgK1xyXG4gICAgICAgICAgICB3ZWxjb21lSW1nU2l6ZSArXHJcbiAgICAgICAgICAgICcucG5nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JztcclxuXHJcbiAgICAgICAgdmFyIHByb3ZpZGVyQ2VsbCA9IHRoaXMucGx1Z2luLmNyZWF0ZUVsZW1uZXRCbG9jaygnZGl2Jywge1xyXG4gICAgICAgICAgICAnZGF0YS1naWd5YS1wcm92aWRlcic6IHRoaXMucGx1Z2luLmxhc3RMb2dpblByb3ZpZGVyT2JqZWN0Lm5hbWUsXHJcbiAgICAgICAgICAgIHN0eWxlOiBbXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGVyZSBhcmUgY2FzZXMgd2hlcmUgdGhpcyBwdXRzIFwid2lkdGg6IE5hTlwiIG9uIHRoZSBwYWdlLlxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoOicsXHJcbiAgICAgICAgICAgICAgICBNYXRoLmNlaWwod2VsY29tZUltZ1NpemUgKiB0aGlzLnBsdWdpbi5zdHlsZVByZXNldC5yYXRpbyksXHJcbiAgICAgICAgICAgICAgICAncHg7JyxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQ6JyxcclxuICAgICAgICAgICAgICAgIHdlbGNvbWVJbWdTaXplLFxyXG4gICAgICAgICAgICAgICAgJ3B4OycsXHJcbiAgICAgICAgICAgIF0uam9pbignJyksXHJcbiAgICAgICAgICAgIGNsYXNzOiAnZ2lneWEtbG9naW4tcHJvdmlkZXInLFxyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5wbHVnaW4ubGFzdExvZ2luUHJvdmlkZXJPYmplY3QubmFtZSxcclxuXHJcbiAgICAgICAgICAgIC8vIEZvciBXQ0FHOlxyXG4gICAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLnBsdWdpbi5sYXN0TG9naW5Qcm92aWRlck9iamVjdC5uYW1lLFxyXG4gICAgICAgICAgICB0YWJpbmRleDogMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHJvdmlkZXJDZWxsLmlubmVySFRNTCA9IGltZztcclxuICAgICAgICBwcm92aWRlckNvbnRhaW5lckVsbWVudC5hcHBlbmRDaGlsZChwcm92aWRlckNlbGwpO1xyXG5cclxuICAgICAgICB2YXIgY3VySGVpZ2h0ID0gZ2lneWEudXRpbHMuRE9NLmdldEhUTUxTaXplKHRoaXMuZWxlbWVudC5pbm5lckhUTUwsIHRoaXMucGx1Z2luLnVpQ29udGFpbmVyKS5oO1xyXG5cclxuICAgICAgICAvLy8vIGNhbGN1bGF0aW5nIHRoZSBoZWlnaHQgb2YgdGhlIHdlbGxjb21lIGluIHJlbGF0aW9uIHRvIHRoZSBtYWluIGNvbnRhaW5lciB0byBmaWxsIG1pc3Npbmcgc3BhY2VzIG9uIHRoZSBidXR0b24uXHJcbiAgICAgICAgdmFyIG1hcmdpblNwYWNlID1cclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucGFyYW1zLmhlaWdodE51bSAtXHJcbiAgICAgICAgICAgIChjdXJIZWlnaHQgK1xyXG4gICAgICAgICAgICAgICAgKHRoaXMucGx1Z2luLmlzRm9vdGVyRW5hYmxlZCA/IHRoaXMucGx1Z2luLnBsdWdpbkNvbmZpZy5mb290ZXJIZWlnaHQgOiAwKSArXHJcbiAgICAgICAgICAgICAgICAodGhpcy5wbHVnaW4uaXNIZWFkZXJFbmFibGVkID8gdGhpcy5wbHVnaW4ucGx1Z2luQ29uZmlnLmhlYWRlckhlaWdodCA6IDApKTtcclxuXHJcbiAgICAgICAgLy8vLyBVcHBlciBCb3VuZCBNYXJnaW5cclxuICAgICAgICB2YXIgdG9wTWFyZ2luID0gTWF0aC5jZWlsKG1hcmdpblNwYWNlIC8gMik7XHJcbiAgICAgICAgdmFyIGJvdHRvbU1hcmdpbiA9IE1hdGguZmxvb3IobWFyZ2luU3BhY2UgLyAyKTtcclxuXHJcbiAgICAgICAgcHJvdmlkZXJDZWxsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IHRvcE1hcmdpbiArICdweCc7XHJcbiAgICAgICAgcHJvdmlkZXJDZWxsLnN0eWxlLm1hcmdpblRvcCA9IGJvdHRvbU1hcmdpbiArICdweCc7XHJcblxyXG4gICAgICAgIC8vIGF0dGFjaGluZyB0aGUgcHJvdmlkZXIgY2xpY2sgZXZlbnQuXHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIocHJvdmlkZXJDZWxsLCAnY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5vblByb3ZpZGVyQ2xpY2tIYW5kbGVyKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHByb3ZpZGVyQ2VsbCwgJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XHJcbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09IDMyIHx8IGtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLm9uUHJvdmlkZXJDbGlja0hhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEdyZWV0aW5nRWxlbWVudCgpIHtcclxuICAgICAgICB2YXIgdXNlckdyZWV0aW5nQ29udGFpbmVyRWxlbWVudCA9IHRoaXMuZ2V0Q2hpbGRCeUNzc0NsYXNzKHRoaXMuZWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLnVzZXIpO1xyXG4gICAgICAgIHZhciB1c2VybmFtZSA9IGdpZ3lhLnV0aWxzLnNhbml0aXplLnNhbml0aXplSFRNTCh0aGlzLnBsdWdpbi5nZXRMYXN0TG9naW5OYW1lKCkpO1xyXG5cclxuICAgICAgICB2YXIgZ3JlZXRpbmdIdG1sID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4uZ2V0VGVtcGxhdGVzKClbJ3dlbGNvbWVHcmVldGluZyddLCB7XHJcbiAgICAgICAgICAgIHdlbGNvbWVCYWNrOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCd3ZWxjb21lX2JhY2tfdXNlcicsICcldXNlcicsIHVzZXJuYW1lKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGJ1YmJsZUh0bWwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi5nZXRUZW1wbGF0ZXMoKVsnd2VsY29tZUJ1YmJsZSddLCB7XHJcbiAgICAgICAgICAgIG5vdFlvdTogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnbm90X3lvdScsICcldXNlcicsIHVzZXJuYW1lKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXNlckdyZWV0aW5nQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBncmVldGluZ0h0bWw7XHJcblxyXG4gICAgICAgIHZhciBidWJibGVFbG0gPSB0aGlzLnBsdWdpbi5jcmVhdGVFbGVtZW50RnJvbUhUTUxTdHJpbmcoYnViYmxlSHRtbCk7XHJcbiAgICAgICAgdmFyIGdyZWV0aW5nRWxtID0gdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5lbGVtZW50LCB0aGlzLkVsZW1lbnRzU2VsZWN0b3IuZ3JlZXRpbmcpO1xyXG4gICAgICAgIGdyZWV0aW5nRWxtLmFwcGVuZENoaWxkKGJ1YmJsZUVsbSk7XHJcblxyXG4gICAgICAgIHZhciBtYWluQ29udGFpbmVyRGltZW5zaW9ucyA9IHRoaXMucGx1Z2luLmdldENvbnRhaW5lckRpbWVuc2lvbnMoKTtcclxuICAgICAgICB2YXIgdXNlckdyZWV0aW5nRGltZW5zaW9ucyA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRIVE1MU2l6ZSh1c2VyR3JlZXRpbmdDb250YWluZXJFbGVtZW50LmlubmVySFRNTCwgdGhpcy5wbHVnaW4udWlDb250YWluZXIpO1xyXG4gICAgICAgIHZhciBub3RZb3VEaW1lbnNpb25zID0gZ2lneWEudXRpbHMuRE9NLmdldEhUTUxTaXplKGJ1YmJsZUVsbS5vdXRlckhUTUwsIHRoaXMucGx1Z2luLnVpQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXJHcmVldGluZ0RpbWVuc2lvbnMudyA+IG1haW5Db250YWluZXJEaW1lbnNpb25zLncpIHtcclxuICAgICAgICAgICAgLy8gc2hvdyBOb3QgWW91IEJ1YmJsZT9cclxuICAgICAgICAgICAgaWYgKHVzZXJHcmVldGluZ0RpbWVuc2lvbnMudyAtIG5vdFlvdURpbWVuc2lvbnMudyA8IG1haW5Db250YWluZXJEaW1lbnNpb25zLncpIHtcclxuICAgICAgICAgICAgICAgIGJ1YmJsZUVsbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTmVlZCB0byByZW5kZXIgb25seSAnV2VsY29tZSBiYWNrJyAtIHdpdGhvdXQgdGhlIHVzZXIgbmFtZVxyXG5cclxuICAgICAgICAgICAgICAgIHVzZXJHcmVldGluZ0NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4uZ2V0VGVtcGxhdGVzKClbJ3dlbGNvbWVHcmVldGluZyddLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VsY29tZUJhY2s6IHRoaXMucGx1Z2luLmdldFRleHQoJ3dlbGNvbWVfYmFja191c2VyJywgJyV1c2VyJywgJycpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldHRpbmcgVGhlIEV2ZW50czpcclxuICAgICAgICBjb25zdCBub3RZb3VCdXR0b24gPSB0aGlzLmdldENoaWxkQnlDc3NDbGFzcyh0aGlzLmVsZW1lbnQsICdnaWd5YS1sb2dpbi13ZWxjb21lLWJ1YmJsZScpO1xyXG5cclxuICAgICAgICBjb25zdCBzaWduT3V0RWxlbWVudHMgPSBbdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5lbGVtZW50LCB0aGlzLkVsZW1lbnRzU2VsZWN0b3Iuc2lnbmlubGluayksIG5vdFlvdUJ1dHRvbl07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lnbk91dEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHNpZ25PdXRFbGVtZW50c1tpXSwgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk5vdFlvdUNsaWNrSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFsbG93IHJvbGU9YnV0dG9uIHRvIHdvcmsgd2l0aCBzY3JlZW4tcmVhZGVycyBvbiBESVYgZWxlbWVudC5cclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihub3RZb3VCdXR0b24sICdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZSB8fCBlLndoaWNoO1xyXG4gICAgICAgICAgICBpZiAoa2V5Q29kZSA9PSAzMiB8fCBrZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGb2N1cyBpcyBpbW1lZGlhdGVseSBzd2l0Y2hlZCB0byBhIGxvZ2luIGJ1dHRvbiwgcHJldmVudCB0aGUgZW50ZXIgYnV0dG9uIGZyb20gY2xpY2tpbmcgaXQuXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25Ob3RZb3VDbGlja0hhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2lnbkluVXNpbmdBbm90aGVyQWNjb3VudCgpIHtcclxuICAgICAgICB2YXIgc2lnbkluTGlua0NvbnRhaW5lciA9IHRoaXMuZ2V0Q2hpbGRCeUNzc0NsYXNzKHRoaXMuZWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLnNpZ25pbmxpbmspO1xyXG5cclxuICAgICAgICB2YXIgbGlua0h0bWwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi5nZXRUZW1wbGF0ZXMoKVsnd2VsY29tZVNpZ25JbkxpbmsnXSwge1xyXG4gICAgICAgICAgICBzaW5nSW5Vc2luZ0RpZmZlcmVudE5ldHdvcms6IHRoaXMucGx1Z2luLmdldFRleHQoJ3NpZ25faW5fdXNpbmdfYV9kaWZmZXJlbnRfbmV0d29yaycpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzaWduSW5MaW5rQ29udGFpbmVyLmlubmVySFRNTCA9IGxpbmtIdG1sO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ob3RZb3VDbGlja0hhbmRsZXIoKSB7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZSgnX2dpZ19sbHAnKTtcclxuICAgICAgICBnaWd5YS51dGlscy5jb29raWUucmVtb3ZlKCdfZ2lnX2xsdScpO1xyXG4gICAgICAgIGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZlsnYWx3YXlzRm9yY2VBdXRoZW50aWNhdGlvbiddID0gdHJ1ZTsgLy9mZWF0dXJlICM3NjQzXHJcblxyXG4gICAgICAgIHRoaXMucGx1Z2luLnNob3dXZWxjb21lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4ucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIC8vIFdDQUc6IEZvY3VzIG9uIGZpcnN0IGxvZ2luIHByb3ZpZGVyIGlmIHVzZXIgY2xpY2tzIFwibm90IHlvdVwiIGxpbmsuXHJcbiAgICAgICAgY29uc3QgZmlyc3RMb2dpblByb3ZpZGVyID0gdGhpcy5wbHVnaW4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5naWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdCBidXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICBpZiAoZmlyc3RMb2dpblByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgIGZpcnN0TG9naW5Qcm92aWRlci5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0LFxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdC1jb250YWluZXIsXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6aW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXIgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogLW1zLWlubGluZS1ncmlkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG50YWJsZS5naWd5YS1sb2dpbi1wcm92aWRlcnMtY29udGFpbmVyIHtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5naWd5YS1sb2dpbi1mb290ZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogLTlweDtcXHJcXG59XFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuLmdpZ3lhLWxpbmsge1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBjb2xvcjogIzAwODZmMTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFxyXFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWNvbnRhaW5lcixcXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWNvbnRhaW5lciB0cixcXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWNvbnRhaW5lciB0ZCxcXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWNvbnRhaW5lciB0aCB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1hY3RpdmUgLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlci1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxuICAgIGZsb2F0OiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDIuNXB4IDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OjE4cHg7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlciBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlci1sYXN0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXIgaW1nIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWNvbnRhaW5lciBkaXYsXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1jb250YWluZXIgc3BhbiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1saXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdC1jb250YWluZXIgdGJvZHksXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1saXN0LWNvbnRhaW5lciB0ciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWxlZnQsXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1yaWdodCB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWxlZnQgYnV0dG9uLFxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctcmlnaHQgYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWxlZnQubm8tYXJyb3dzLFxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctcmlnaHQubm8tYXJyb3dzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItZmxvYXRpbmctZGlzYWJsZWQge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbGVmdCBkaXYgLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1yaWdodCBkaXYgLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbGVmdC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLWZsb2F0aW5nIGRpdiAuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlciB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDQycHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHNjcmlwdEJhc2UvcGFnaW5nL3RvdWNoX2J1dHRvbl9sZWZ0LnBuZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LXJpZ2h0LmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItZmxvYXRpbmcgZGl2IC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICB3aWR0aDogNDJweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHNjcmlwdEJhc2UvcGFnaW5nL3RvdWNoX2J1dHRvbl9yaWdodC5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0LmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItYXJyb3dzIGRpdiAuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlciB7XFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckc2NyaXB0QmFzZS9wYWdpbmcvbmF2aWdhdGlvbl9hcnJvd19sZWZ0LnBuZycpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1yaWdodC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLWFycm93cyBkaXYgLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXIge1xcclxcbiAgICBoZWlnaHQ6IDE0cHg7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHNjcmlwdEJhc2UvcGFnaW5nL25hdmlnYXRpb25fYXJyb3dfcmlnaHQucG5nJyk7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbGVmdC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLWFycm93cy5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctZGlzYWJsZWQgZGl2IC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyIHtcXHJcXG4gICAgaGVpZ2h0OiAxNHB4O1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyRzY3JpcHRCYXNlL3BhZ2luZy9uYXZpZ2F0aW9uX2Fycm93X2xlZnRfZGlzYWJsZWQucG5nJyk7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctcmlnaHQuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlci1hcnJvd3MuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWRpc2FibGVkIGRpdiAuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlciB7XFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckc2NyaXB0QmFzZS9wYWdpbmcvbmF2aWdhdGlvbl9hcnJvd19yaWdodF9kaXNhYmxlZC5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0LmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItbmV3QXJyb3dzIGRpdiAuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlciB7XFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckc2NyaXB0QmFzZS9wYWdpbmcvbmF2aWdhdGlvbl9hcnJvd19sZWZ0LnBuZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LXJpZ2h0LmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItbmV3QXJyb3dzIGRpdiAuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlciB7XFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckc2NyaXB0QmFzZS9wYWdpbmcvbmF2aWdhdGlvbl9hcnJvd19yaWdodC5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1yaWdodC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLW5ld0Fycm93cy5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctZGlzYWJsZWQgZGl2IC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyIHtcXHJcXG4gICAgaGVpZ2h0OiAxNHB4O1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyRzY3JpcHRCYXNlL3BhZ2luZy9uYXZpZ2F0aW9uX2Fycm93X3JpZ2h0X2Rpc2FibGVkLnBuZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWxlZnQuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlci1uZXdBcnJvd3MuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWRpc2FibGVkIGRpdiAuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlciB7XFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckc2NyaXB0QmFzZS9wYWdpbmcvbmF2aWdhdGlvbl9hcnJvd19sZWZ0X2Rpc2FibGVkLnBuZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWxlZnQuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWRpc2FibGVkLFxcclxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctcmlnaHQuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWRpc2FibGVkIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4taGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLWZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLWZvb3Rlci10ZXJtcyB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIGNvbG9yOiAjMDA4NmYxO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLWZvb3Rlci1zb2NpYWwtYnksXFxyXFxuLmdpZ3lhLWxvZ2luLWZvb3Rlci1zb2NpYWwtYnk6aG92ZXIsXFxyXFxuLmdpZ3lhLWxvZ2luLWZvb3Rlci1zb2NpYWwtYnk6YWN0aXZlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICM4MjgyODI7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1mb290ZXItc29jaWFsLWJ5IGltZy5naWd5YS1sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDMycHg7XFxyXFxuICAgIGhlaWdodDogOXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1mb290ZXItd2hhdHN0aGlzIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Njc2NzY7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi1mb290ZXItd2hhdHN0aGlzIHNwYW4ge1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgY29sb3I6ICMyNjI2MjY7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1sb2dpbi13ZWxjb21lLWdyZWV0aW5nIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogIzRDNEM0QztcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4td2VsY29tZS1idWJibGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4td2VsY29tZS1idWJibGUtbGVmdCxcXHJcXG4uZ2lneWEtbG9naW4td2VsY29tZS1idWJibGUtcmlnaHQsXFxyXFxuLmdpZ3lhLWxvZ2luLXdlbGNvbWUtYnViYmxlLWNlbnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgaGVpZ2h0OiAxN3B4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXdlbGNvbWUtYnViYmxlLWxlZnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyRzY3JpcHRCYXNlL05vdFlvdV9MZWZ0LnBuZycpO1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4td2VsY29tZS1idWJibGUtcmlnaHQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyRzY3JpcHRCYXNlL05vdFlvdV9SaWdodC5wbmcnKTtcXHJcXG4gICAgd2lkdGg6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXdlbGNvbWUtYnViYmxlLWNlbnRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHNjcmlwdEJhc2UvTm90WW91X01pZC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4td2VsY29tZS1idWJibGUtdGV4dCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgICBjb2xvcjogIzAwODZmMTtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLXdlbGNvbWUtc2lnbmluLWxpbmsge1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4td2VsY29tZS1zaWduaW4tbGluayBhOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzAwODZmMTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLWxvZ2luLWZvb3Rlci1kaXZpZGVyIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIGNvbG9yOiAjODI4MjgyO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbG9naW4tZm9vdGVyLWVkaXQtbGluayB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgICBjb2xvcjogIzAwODZmMTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxufVxcclxcblxcclxcbi50YWJiaW5nLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4udGFiYmluZy1idXR0b24uZ2lneWEtcHJvdmlkZXItY29ubmVjdGVkIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4udGFiYmluZy1idXR0b24uZ2lneWEtcHJvdmlkZXItY29ubmVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXCIiLCJpbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zTG9naW5fdjIgZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0J1dHRvblN0eWxlcyc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml8xIGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Db250YWluZXJCYXNlJztcclxuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc0xvZ2luX3YyXzIgZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0Zvb3RlckNvbnRhaW5lcic7XHJcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml8zIGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9JbnRlcmZhY2VzJztcclxuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc1Jlc291cmNlc0h0bWxMb2dpbl92MiBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvTG9naW4yUmVzb3VyY2VzMCc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNSZXNvdXJjZXNDc3NMb2dpbl92MiBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvTG9naW4yUmVzb3VyY2VzMSc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml80IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Mb2dpbkNvbnRhaW5lcic7XHJcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml81IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Mb2dpblBsdWdpbic7XHJcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml82IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9QYWdpbmdTdHlsZXMnO1xyXG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zTG9naW5fdjJfNyBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvVXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zTG9naW5fdjJfOCBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvV2VsY29tZUNvbnRhaW5lcic7XHJcblxyXG5kZWNsYXJlIGNvbnN0IGdpZ3lhOiBhbnk7XHJcbmlmICghZ2lneWEuXykge1xyXG4gICAgZ2lneWEuXyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5sb2dpbl92Mikge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLmxvZ2luX3YyID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbCA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLmxvZ2luX3YyKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwubG9naW5fdjIgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MubG9naW5fdjIpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLmxvZ2luX3YyID0ge307XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oXHJcbiAgICBnaWd5YS5fLnBsdWdpbnMubG9naW5fdjIsXHJcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjIsXHJcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfMSxcclxuICAgIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml8yLFxyXG4gICAgR2lneWFfUGx1Z2luc0xvZ2luX3YyXzMsXHJcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfNCxcclxuICAgIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml81LFxyXG4gICAgR2lneWFfUGx1Z2luc0xvZ2luX3YyXzYsXHJcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfNyxcclxuICAgIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml84LFxyXG4pO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbC5sb2dpbl92MiwgR2lneWFfUGx1Z2luc1Jlc291cmNlc0h0bWxMb2dpbl92Mik7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MubG9naW5fdjIsIEdpZ3lhX1BsdWdpbnNSZXNvdXJjZXNDc3NMb2dpbl92Mik7XHJcblxyXG5naWd5YS5fLlVJLmF0dGFjaFBsdWdpbihHaWd5YV9QbHVnaW5zTG9naW5fdjJfNS5Mb2dpblBsdWdpbiwgJ3NvY2lhbGl6ZScsIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml81LkxvZ2luUGx1Z2luLnBsdWdpbk5hbWUsICdzaG93TG9naW5VSV92MicpO1xyXG5naWd5YS5fLlVJLmF0dGFjaFBsdWdpbihHaWd5YV9QbHVnaW5zTG9naW5fdjJfNS5Mb2dpblBsdWdpbiwgJ3NvY2lhbGl6ZScsIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml81LkxvZ2luUGx1Z2luLnBsdWdpbk5hbWUsICdzaG93QWRkQ29ubmVjdGlvbnNVSV92MicpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZ2lneWEtd3JhcHBlci1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgdGFiaW5kZXg9XFxcIiR7dGFiaW5kZXh9XFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ0YWJiaW5nLWJ1dHRvbiBnaWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyXFxcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIiR7bGFiZWx9XFxcIj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLWZvb3RlclxcXCI+PC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhIGNsYXNzPVxcXCJnaWd5YS1sb2dpbi1mb290ZXItc29jaWFsLWJ5XFxcIiBocmVmPVxcXCJodHRwczovL3d3dy5naWd5YS5jb21cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj4ke3NvY2lhbEJ5fSA8aW1nIGFsdD1cXFwiR2lneWFcXFwiIGNsYXNzPVxcXCJnaWd5YS1sb2dvXFxcIiBzcmM9XFxcIiR7bG9nb1VybH1cXFwiIC8+PC9hPlxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YSBjbGFzcz1cXFwiZ2lneWEtbG9naW4tZm9vdGVyLXNvY2lhbC1ieVxcXCIgaHJlZj1cXFwiaHR0cHM6Ly93d3cuZ2lneWEuY29tXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBhbHQ9XFxcIkdpZ3lhXFxcIiBjbGFzcz1cXFwiZ2lneWEtbG9nb1xcXCIgc3JjPVxcXCIke2xvZ29Vcmx9XFxcIiAvPjwvYT5cXHJcXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRhYmxlIGNlbGxwYWRkaW5nPVxcXCIwXFxcIiBjZWxsc3BhY2luZz1cXFwiMFxcXCIgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLWZvb3Rlci13aGF0c3RoaXNcXFwiIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCI+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGQgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHRleHQtYWxpZ246IGNlbnRlclxcXCI+PHNwYW4+JHdoYXRzdGhpc3RleHQ8L3NwYW4+PC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNwYW4gY2xhc3M9XFxcImdpZ3lhLWxvZ2luLWZvb3Rlci1kaXZpZGVyXFxcIj58PC9zcGFuPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiBjbGFzcz1cXFwiZ2lneWEtbG9naW4tZm9vdGVyLWVkaXQtbGlua1xcXCI+JGVkaXQ8L3NwYW4+XFxyXFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhIGNsYXNzPVxcXCJnaWd5YS1sb2dpbi1mb290ZXItdGVybXNcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL3d3dy5naWd5YS5jb20vdGVybXMtb2Ytc2VydmljZS9cXFwiPiR0ZXJtczwvYT5cXHJcXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4taGVhZGVyXFxcIj4ke2hlYWRlclRleHR9PC9kaXY+XFxyXFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLXByb3ZpZGVyc1xcXCI+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwiZ2lneWEtbG9naW4tcHJvdmlkZXJzLWNvbnRhaW5lclxcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIj5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0XFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZ2lneWEtbG9naW4tcHJvdmlkZXJzLWxpc3QtY29udGFpbmVyXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LXJpZ2h0XFxcIj48L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGltZyBzdHlsZT1cXFwid2lkdGg6JHtidXR0b25XaWR0aH1weDtoZWlnaHQ6JHtidXR0b25IZWlnaHR9cHg7XFxcIiBzcmM9XFxcIiR7aW1hZ2VVcmx9XFxcIiAvPlxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCIke2NvbnRhaW5lcklEfV91aUNvbnRhaW5lclxcXCI+PC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLXdlbGNvbWUtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4td2VsY29tZS11c2VyXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4td2VsY29tZS1wcm92aWRlclxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLXdlbGNvbWUtc2lnbmluLWxpbmtcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJnaWd5YS1sb2dpbi13ZWxjb21lLWJ1YmJsZVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLXdlbGNvbWUtYnViYmxlLWxlZnRcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1sb2dpbi13ZWxjb21lLWJ1YmJsZS1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4td2VsY29tZS1idWJibGUtdGV4dFxcXCI+JG5vdFlvdTwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4td2VsY29tZS1idWJibGUtcmlnaHRcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJnaWd5YS1sb2dpbi13ZWxjb21lLWdyZWV0aW5nXFxcIj4kd2VsY29tZUJhY2s8L2Rpdj5cXHJcXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGEgY2xhc3M9XFxcImdpZ3lhLWxpbmtcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiPiRzaW5nSW5Vc2luZ0RpZmZlcmVudE5ldHdvcms8L2E+XFxyXFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==