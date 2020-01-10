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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/index.ts");
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

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/CSSResources.ts":
/*!******************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/CSSResources.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.global = __webpack_require__(/*! ./css/global.css */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/css/global.css");


/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/EditConnections.ts":
/*!*********************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/EditConnections.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PluginStyles_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/PluginStyles */ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts");
var SiteProvider = 'site';
var BasePluginGlobal = window.gigya._.plugins.BasePlugin;
var EditConnectionPlugin = /** @class */ (function (_super) {
    tslib_1.__extends(EditConnectionPlugin, _super);
    function EditConnectionPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // class variables
        _this.providerAppsLinks = {
            facebook: 'https://www.facebook.com/settings?tab=applications',
            twitter: 'https://twitter.com/settings/applications',
            linkedin: 'https://www.linkedin.com/psettings/permitted-services',
            googleplus: 'https://plus.google.com/u/0/apps',
            messenger: 'https://account.live.com/consent/Manage',
            yahoo: 'https://api.login.yahoo.com/WSLogin/V1/unlink',
        };
        _this.onUserStateChange = function () { return _this.UserStateChanged(); };
        return _this;
    }
    // Override BasePlugin methods
    EditConnectionPlugin.injectionInfo = function () {
        return {
            name: 'edit',
            namespace: 'socialize',
            methodName: 'showEditConnection',
            jsName: 'gigya.services.socialize.plugins.edit',
        };
    };
    // initialization block.
    EditConnectionPlugin.prototype.init = function (loadedCallback) {
        var _this = this;
        this.showTooltips = window.gigya.utils.validation.isExplicitTrue(this.params.showTooltips);
        this.imageBase = window.gigya._.getCdnResource('/gs/i/edit/');
        // init the providers list
        this.providers = window.gigya.global.resolveProviders(this.params.enabledProviders, this.params.disabledProviders, this.params.requiredCapabilities);
        window.gigya.utils.array.forEach(this.params.customButtons || [this.params.customButton], function (oButton) {
            // Ignore all non-SAML buttons.
            if (oButton && oButton.type && oButton.type.toLowerCase() == 'saml') {
                var pCustomProvider = window.gigya.utils.object.clone(window.gigya.socialize._getProviderByID(4122));
                pCustomProvider.name = 'saml-' + oButton.idpName;
                pCustomProvider.displayName = oButton.providerName;
                pCustomProvider.buttonData = oButton;
                _this.providers.splice(oButton.position && oButton.position > 1 ? oButton.position - 1 : 0, 0, pCustomProvider);
            }
        });
        // register to global events: login, logout, connect, disconnect
        this.registerToGlobalEvents();
        // init user state
        this.getUserInfo(function (res) {
            // render the control
            _this.render();
            // set the control Dimensions. needed only once on init after the first render.
            _this.initDimensions();
            loadedCallback();
        });
    };
    EditConnectionPlugin.prototype.getConfig = function () {
        return {
            requiredParams: [],
            defaultParams: {
                enabledProviders: '*',
                width: '310',
                height: '250',
                requiredCapabilities: 'friends',
            },
            hasMobileUI: false,
            allowModal: true,
            defaultModalParams: {
                enabledProviders: '*',
                width: '310',
                height: '310',
                requiredCapabilities: 'friends',
                captionTextKey: 'EditConnections',
            },
        };
    };
    // ---------------------- Logic ------------------ //
    EditConnectionPlugin.prototype.getUserInfo = function (callback) {
        var _this = this;
        window.gigya.socialize.getUserInfo(this.params, {
            includeAllIdentities: true,
            callback: function (response) {
                if (response.errorCode == 0) {
                    _this.user = response.user;
                }
                else {
                    window.gigya.events.dispatchErrorFromResponse(_this.params, response);
                }
                if (callback)
                    callback(response);
            },
        });
    };
    // setting the dimensions for the elements.
    // w+h when the gigya brand or terms link is on.
    EditConnectionPlugin.prototype.initDimensions = function () {
        var footerHeight = 0;
        // check if the 'Footer' exists in the scope of the control.
        var fQuery = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-edit-connections-footer');
        // if the footer found
        if (fQuery.length) {
            var footer = fQuery[0];
            // get the calculated height of the element
            footerHeight = window.gigya.utils.DOM.getHTMLSize(footer.innerHTML, footer).h;
        }
        // subtructing the footer size from the list of connections
        var connectionsListHeight = parseInt(this.params.height) - footerHeight;
        var heightCss = '.gig-edit-connections {' + ['height: ', connectionsListHeight, 'px;', 'min-width: 215px;'].join('') + '}';
        window.gigya._.plugins.utils.css.addCss(heightCss, this.params.cssPrefix);
    };
    EditConnectionPlugin.prototype.render = function () {
        if (this.getPluginStyle() == PluginStyles_1.PluginStyle.legacy && this.isModal) {
            var uiContainer = document.createElement('div');
            this.container.appendChild(uiContainer);
            this.container = uiContainer;
        }
        // set the container html.
        this.container.innerHTML = this.getControlHtml();
        // registering to local events : connect,disconnect
        this.registerLocalEvents();
    };
    // ---------------------- Events ------------------ //
    EditConnectionPlugin.prototype.registerLocalEvents = function () {
        var _this = this;
        var connectLinkElements = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-edit-connections-connectLink');
        var disconnectLinkElements = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-edit-connections-disconnectLink');
        var eventName = window.gigya.localInfo.isIOS && window.gigya.localInfo.isSafari ? 'touchend' : 'click';
        // Registering foir the connect events.
        if (connectLinkElements && connectLinkElements.length > 0) {
            for (var i = 0; i < connectLinkElements.length; i++) {
                window.gigya.utils.DOM.addEventListener(connectLinkElements[i], eventName, function (e) {
                    _this.onConnectClick(e);
                });
            }
        }
        // Registering for the Disconnect events.
        if (disconnectLinkElements && disconnectLinkElements.length > 0) {
            for (var i = 0; i < disconnectLinkElements.length; i++) {
                window.gigya.utils.DOM.addEventListener(disconnectLinkElements[i], eventName, function (e) {
                    _this.onDisconnectClick(e);
                });
            }
        }
    };
    EditConnectionPlugin.prototype.registerToGlobalEvents = function () {
        this.addGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
            onConnectionAdded: this.onUserStateChange,
            onConnectionRemoved: this.onUserStateChange,
        });
    };
    EditConnectionPlugin.prototype.unregisterToGlobalEvents = function () {
        this.removeGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
            onConnectionAdded: this.onUserStateChange,
            onConnectionRemoved: this.onUserStateChange,
        });
    };
    EditConnectionPlugin.prototype.dispose = function () {
        this.unregisterToGlobalEvents();
        _super.prototype.dispose.call(this);
    };
    // this event trigger re-render
    EditConnectionPlugin.prototype.UserStateChanged = function () {
        var _this = this;
        // init user state
        this.getUserInfo(function (res) {
            // render the control
            _this.render();
        });
    };
    EditConnectionPlugin.prototype.onConnectClick = function (e) {
        var target = e.target || e.srcElement;
        var provider = target.getAttribute('data-socialprovider');
        window.gigya.socialize.addConnection(this.params, {
            provider: provider,
            includeAllIdentities: true,
        });
    };
    EditConnectionPlugin.prototype.onDisconnectClick = function (e) {
        var target = e.target || e.srcElement;
        var provider = target.getAttribute('data-socialprovider');
        window.gigya.socialize.removeConnection(this.params, {
            provider: provider,
        });
    };
    // ---------------------- Templating ------------------ //
    EditConnectionPlugin.prototype.getControlHtml = function () {
        // setting up 2 lists for simple status appending.
        var connectedProviders = [];
        var notConnectedProviders = [];
        // create the inner items
        for (var i = 0; i < this.providers.length; i++) {
            var provider = this.providers[i];
            if (provider.name === SiteProvider)
                continue;
            if (this.user.identities.hasOwnProperty(provider.name)) {
                connectedProviders.push(this.getProviderListItem(provider, this.user.identities[provider.name]));
            }
            else {
                notConnectedProviders.push(this.getProviderListItem(provider, null));
            }
        }
        // Check if the user has identities outside the requested providers critiria.
        // if so, add the provider and the identity.
        for (var p in this.user.identities) {
            if (p === SiteProvider)
                continue;
            var found = false;
            for (var i = 0; i < this.providers.length; i++) {
                if (this.providers[i].name === p)
                    found = true;
            }
            if (!found) {
                // not found, add to the list:
                var missingProvider = window.gigya._.providers.getProviderByName(p);
                connectedProviders.push(this.getProviderListItem(missingProvider, this.user.identities[p]));
            }
        }
        // return the container HTML
        return window.gigya.utils.templates.fill(this.getTemplates().edit, {
            providersData: connectedProviders.join('') + notConnectedProviders.join(''),
            footer: this.getFooter(),
        });
    };
    // return a Provider li element, if the data exists, adding the identity data
    EditConnectionPlugin.prototype.getProviderListItem = function (provider, identityObject) {
        var providerTooltip = this.showTooltips ? provider.displayName : '';
        if (identityObject) {
            var socialProviderApps = '';
            // extract the provider auth manage link from the list if has one.
            if (this.providerAppsLinks.hasOwnProperty(provider.name)) {
                socialProviderApps = window.gigya.utils.templates.fill(this.getTemplates().socialProviderApps, {
                    providerAppUrl: this.providerAppsLinks[provider.name],
                    lng_Myapps: this.getText('my_apps'),
                });
            }
            // -- > socialProviderConnected
            return window.gigya.utils.templates.fill(this.getTemplates().connectedSocialProvider, {
                providerName: provider.name,
                displayName: provider.displayName || provider.name,
                providerTooltip: providerTooltip,
                profileName: identityObject.nickname,
                profileImage: this.getIdentityPhotoUrl(identityObject),
                profileCountry: this.getIdentityCountry(identityObject),
                profileCity: this.getIdentityCity(identityObject),
                profileBirthDate: this.getIdentityBirthDate(identityObject),
                providerImage: this.getPluginImage(provider, identityObject),
                socialProviderApps: socialProviderApps,
                lng_Disconnect: this.getText('disconnect'),
            });
        }
        else {
            // -- > socialProviderNotConnected
            return window.gigya.utils.templates.fill(this.getTemplates().disconnectedSocialProvider, {
                providerName: provider,
                providerTooltip: providerTooltip,
                providerImage: this.getPluginImage(provider),
                lng_Connect: this.getText('connect'),
            });
        }
    };
    EditConnectionPlugin.prototype.getPluginImage = function (provider, identity) {
        if (provider.buttonData) {
            if (!identity) {
                return provider.buttonData.iconURL;
            }
            else {
                return provider.buttonData.connectedIconURL || provider.buttonData.iconURL;
            }
        }
        else {
            return "" + this.imageBase + provider.name + ".png";
        }
    };
    EditConnectionPlugin.prototype.getIdentityCountry = function (identity) {
        if (identity.country) {
            return window.gigya.utils.templates.fill(this.getTemplates().identityCountry, {
                lng_Country: this.getText('country'),
                country: identity.country,
            });
        }
        return '';
    };
    EditConnectionPlugin.prototype.getIdentityCity = function (identity) {
        if (identity.city) {
            return window.gigya.utils.templates.fill(this.getTemplates().identityCity, {
                lng_City: this.getText('city'),
                city: identity.city,
            });
        }
        return '';
    };
    EditConnectionPlugin.prototype.getIdentityBirthDate = function (identity) {
        if (identity.birthYear && identity.birthMonth && identity.birthDay) {
            var year = identity.birthYear;
            var month = identity.birthMonth;
            var day = identity.birthDay;
            if (!year)
                year = '??';
            if (!month)
                month = '??';
            if (!day)
                day = '??';
            return window.gigya.utils.templates.fill(this.getTemplates().identityBirthDate, {
                lng_Date_of_birth: this.getText('date_of_birth'),
                day: day,
                month: month,
                year: year,
            });
        }
        return '';
    };
    EditConnectionPlugin.prototype.getIdentityPhotoUrl = function (identity) {
        var url = identity.thumbnailURL;
        if (!url)
            url = identity.photoURL;
        if (!url)
            url = window.gigya.utils.templates.fill(this.getTemplates().defaultPhotoURL, {
                imageBaseURL: this.imageBase,
            });
        return window.gigya.global.getPhotoURL(url);
    };
    EditConnectionPlugin.prototype.getFooter = function () {
        var footer = '';
        // Checking if we need to render the footer.
        var showTerms = this.params.showTermsLink;
        if (showTerms) {
            var brand = '';
            var terms = window.gigya.utils.templates.fill(this.getTemplates().gigyaTerms, {
                lng_Terms: this.getText('terms'),
            });
            // Creating The Footer
            footer = window.gigya.utils.templates.fill(this.getTemplates().footer, {
                gigyaTerms: terms,
                gigyaBrand: brand,
            });
        }
        return footer;
    };
    return EditConnectionPlugin;
}(BasePluginGlobal));
exports.EditConnectionPlugin = EditConnectionPlugin;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/HtmlResources.ts":
/*!*******************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/HtmlResources.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.connectedSocialProvider = __webpack_require__(/*! ./templates/connectedSocialProvider.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/connectedSocialProvider.html");
exports.defaultPhotoURL = __webpack_require__(/*! ./templates/defaultPhotoURL.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/defaultPhotoURL.html");
exports.disconnectedSocialProvider = __webpack_require__(/*! ./templates/disconnectedSocialProvider.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/disconnectedSocialProvider.html");
exports.edit = __webpack_require__(/*! ./templates/edit.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/edit.html");
exports.footer = __webpack_require__(/*! ./templates/footer.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/footer.html");
exports.gigyaBrand = __webpack_require__(/*! ./templates/gigyaBrand.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaBrand.html");
exports.gigyaTerms = __webpack_require__(/*! ./templates/gigyaTerms.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaTerms.html");
exports.identityBirthDate = __webpack_require__(/*! ./templates/identityBirthDate.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityBirthDate.html");
exports.identityCity = __webpack_require__(/*! ./templates/identityCity.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityCity.html");
exports.socialProviderApps = __webpack_require__(/*! ./templates/socialProviderApps.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/socialProviderApps.html");


/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/css/global.css":
/*!*****************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/css/global.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*.gig-edit-connections a {\r\n    color: #0086f1;\r\n}\r\n\r\n*.gig-edit-connections {\r\n    font-family: arial;\r\n    font-size: 11px;\r\n    display: block;\r\n    overflow: auto;\r\n    line-height: normal;\r\n    background-color: #fff;\r\n}\r\n\r\n    *.gig-edit-connections ul {\r\n        list-style: none;\r\n        width: auto;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n        *.gig-edit-connections ul li { \r\n            padding: 5px;\r\n            border-bottom: 1px solid #e6e6e6;\r\n        }\r\n\r\n            *.gig-edit-connections ul li .gig-edit-connections-identity-information {\r\n                display: block;\r\n                overflow: auto;\r\n                margin-top: 5px;\r\n            }\r\n\r\n*.gig-edit-connections-identity-information-profile-image {\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 45px;\r\n    padding-bottom: 5px;\r\n    float: left;\r\n}\r\n\r\n.gig-edit-connections ul li .gig-edit-connections-identity-information .gig-edit-connections-identity-information-profile-image img {\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n\r\n\r\n.gig-edit-connections ul li .gig-edit-connections-identity-information .gig-edit-connections-information-details {\r\n    float: left;\r\n    padding-left: 10px;\r\n}\r\n\r\n    .gig-edit-connections ul li .gig-edit-connections-identity-information .gig-edit-connections-information-details .gig-edit-connections-information-details-row {\r\n        display: block;\r\n    }\r\n\r\n.gig-edit-connections ul li .gig-edit-connections-social-provider {\r\n    height: 18px;\r\n}\r\n\r\n\r\n    .gig-edit-connections ul li .gig-edit-connections-social-provider .gig-edit-connections-social-provider-image {\r\n        display: inline-block;\r\n        padding-right: 10px;\r\n        float: left;\r\n    }\r\n\r\n        .gig-edit-connections ul li .gig-edit-connections-social-provider .gig-edit-connections-social-provider-image img {\r\n            height: 18px;\r\n            width: 18px;\r\n        }\r\n\r\n\r\n.gig-edit-connections ul li:hover .gig-edit-connections-provider-apps {\r\n    display: block;\r\n}\r\n\r\n.gig-edit-connections-provider-apps {\r\n    float: right;\r\n    text-decoration: none;\r\n    display: none;\r\n}\r\n\r\n    .gig-edit-connections-provider-apps span {\r\n        line-height: normal;\r\n        font-family: arial;\r\n        font-size: 11px;\r\n        color: #0086f1;\r\n        border-style: solid;\r\n        border-width: 0px;\r\n        cursor: pointer;\r\n        text-decoration: underline;\r\n    }\r\n\r\n\r\n\r\n.gig-edit-connections-footer {\r\n    display: block;\r\n    overflow: hidden;\r\n    padding: 0 3px;\r\n}\r\n\r\n    .gig-edit-connections-footer .gig-edit-connections-social-by {\r\n        text-align: right;\r\n        float: right;\r\n    }\r\n\r\n        .gig-edit-connections-footer .gig-edit-connections-social-by span {\r\n            font-family: arial;\r\n            color: #005997;\r\n            font-weight: bold;\r\n            font-size: 11px;\r\n            cursor: pointer;\r\n        }\r\n\r\n            .gig-edit-connections-footer .gig-edit-connections-social-by span span {\r\n                font-family: arial;\r\n                color: #828282;\r\n                font-weight: bold;\r\n                font-size: 11px;\r\n                cursor: pointer;\r\n            }\r\n\r\n\r\n    .gig-edit-connections-footer .gig-edit-connections-terms {\r\n        line-height: normal;\r\n        cursor: pointer;\r\n        font-family: arial;\r\n        font-size: 11px;\r\n        color: #0086f1;\r\n        padding-right: 5px;\r\n        text-decoration: none;\r\n        float: left;\r\n        line-height: 20px;\r\n    }\r\n"

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/index.ts":
/*!***********************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsEditConnections = __webpack_require__(/*! src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/EditConnections */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/EditConnections.ts");
var HtmlResources = __webpack_require__(/*! src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/HtmlResources */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/HtmlResources.ts");
var CSSResource = __webpack_require__(/*! src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/CSSResources */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/CSSResources.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.editConnections) {
    window.gigya._.plugins.editConnections = {};
}
if (!window.gigya._.plugins.resources) {
    window.gigya._.plugins.resources = {};
}
if (!window.gigya._.plugins.resources.html) {
    window.gigya._.plugins.resources.html = {};
}
if (!window.gigya._.plugins.resources.html) {
    window.gigya._.plugins.resources.css = {};
}
if (!window.gigya._.plugins.resources.html.edit) {
    window.gigya._.plugins.resources.html.edit = {};
}
if (!window.gigya._.plugins.resources.css.edit) {
    window.gigya._.plugins.resources.css.edit = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.editConnections, Gigya_PluginsEditConnections);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.html.edit, HtmlResources);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.css.edit, CSSResource);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/connectedSocialProvider.html":
/*!*****************************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/connectedSocialProvider.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\r\n    <div class=\"gig-edit-connections-social-provider\">\r\n        <div class=\"gig-edit-connections-social-provider-image\">\r\n            <img src=\"$providerImage\" title=\"$providerTooltip\" alt=\"$displayName\" />\r\n        </div>\r\n        <strong>$profileName</strong>\r\n    </div>\r\n    <div class=\"gig-edit-connections-identity-information\">\r\n        <div class=\"gig-edit-connections-identity-information-profile-image\">\r\n            <img src=\"$profileImage\" />\r\n        </div>\r\n        <div class=\"gig-edit-connections-information-details\">\r\n            $profileCountry\r\n            $profileCity\r\n            $profileBirthDate\r\n            <a href=\"javascript:void(0);\" class=\"gig-edit-connections-disconnectLink\" data-socialprovider=\"$providerName\">$lng_Disconnect</a><br />\r\n        </div>\r\n        $socialProviderApps\r\n    </div>\r\n</li>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/defaultPhotoURL.html":
/*!*********************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/defaultPhotoURL.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "$imageBaseURL/DefaultUserImage_45px.png";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/disconnectedSocialProvider.html":
/*!********************************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/disconnectedSocialProvider.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\r\n    <div class=\"gig-edit-connections-social-provider\">\r\n        <div class=\"gig-edit-connections-social-provider-image\">\r\n            <img src=\"$providerImage\" title=\"$providerTooltip\" alt=\"$displayName\" />\r\n        </div>\r\n        <a href=\"javascript:void(0);\" class=\"gig-edit-connections-connectLink\" data-socialprovider=\"$providerName\">$lng_Connect</a>\r\n    </div>\r\n</li>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/edit.html":
/*!**********************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/edit.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-edit-connections\">\r\n    <ul>\r\n        $providersData\r\n    </ul>\r\n</div>\r\n$footer";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/footer.html":
/*!************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/footer.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-edit-connections-footer\">\r\n    $gigyaTerms\r\n    $gigyaBrand\r\n</div>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaBrand.html":
/*!****************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaBrand.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-edit-connections-social-by\">\r\n    <span onclick=\"window.open('http://www.gigya.com')\"><span>${socialBy} </span><img alt=\"Gigya\" class=\"gigya-logo\" src=\"${logoUrl}\" /></span>\r\n</div>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaTerms.html":
/*!****************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaTerms.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-edit-connections-terms\">\r\n    <a target=\"_blank\" href=\"http://www.gigya.com/terms-of-service/\">$lng_Terms</a>\r\n</div>\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityBirthDate.html":
/*!***********************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityBirthDate.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"gig-edit-connections-information-details-row\">$lng_Date_of_birth $day/$month/$year</span>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityCity.html":
/*!******************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityCity.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"gig-edit-connections-information-details-row\">$lng_City $city </span>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/socialProviderApps.html":
/*!************************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/socialProviderApps.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"$providerAppUrl\" class=\"gig-edit-connections-provider-apps\" target=\"_blank\"><span>$lng_Myapps</span></a>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1BsdWdpblN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL0NTU1Jlc291cmNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL0VkaXRDb25uZWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL0h0bWxSZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC9jc3MvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLkVkaXRDb25uZWN0aW9uc05ldy9hcHAvdGVtcGxhdGVzL2Nvbm5lY3RlZFNvY2lhbFByb3ZpZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC90ZW1wbGF0ZXMvZGVmYXVsdFBob3RvVVJMLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC90ZW1wbGF0ZXMvZGlzY29ubmVjdGVkU29jaWFsUHJvdmlkZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL3RlbXBsYXRlcy9lZGl0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC90ZW1wbGF0ZXMvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC90ZW1wbGF0ZXMvZ2lneWFCcmFuZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLkVkaXRDb25uZWN0aW9uc05ldy9hcHAvdGVtcGxhdGVzL2dpZ3lhVGVybXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL3RlbXBsYXRlcy9pZGVudGl0eUJpcnRoRGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLkVkaXRDb25uZWN0aW9uc05ldy9hcHAvdGVtcGxhdGVzL2lkZW50aXR5Q2l0eS5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLkVkaXRDb25uZWN0aW9uc05ldy9hcHAvdGVtcGxhdGVzL3NvY2lhbFByb3ZpZGVyQXBwcy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FB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QUMsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNsRSxvQ0FBYSxDQUFDLFlBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0IvRCwrdEJBQSt0Qiw4TDs7Ozs7Ozs7Ozs7QUNBL3RCLDJEOzs7Ozs7Ozs7OztBQ0FBLGlUQUFpVCxpSTs7Ozs7Ozs7Ozs7QUNBalQsZ0k7Ozs7Ozs7Ozs7O0FDQUEsbUg7Ozs7Ozs7Ozs7O0FDQUEsc0lBQXNJLFNBQVMsd0RBQXdELFFBQVEsNEI7Ozs7Ozs7Ozs7O0FDQS9NLHVLOzs7Ozs7Ozs7OztBQ0FBLDRIOzs7Ozs7Ozs7OztBQ0FBLHdHOzs7Ozs7Ozs7OztBQ0FBLDJJIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLkVkaXRDb25uZWN0aW9uc05ldy9hcHAvaW5kZXgudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJleHBvcnQgZW51bSBQbHVnaW5TdHlsZSB7XHJcbiAgICBfdW5kZWZpbmVkID0gMCxcclxuICAgIG5vbmUsXHJcbiAgICBsZWdhY3ksXHJcbiAgICBtb2Rlcm4sXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsdWdpblN0eWxlQ2xhc3Moc3R5bGU6IFBsdWdpblN0eWxlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnZ2lneWEtc3R5bGUtJyArIFBsdWdpblN0eWxlW3N0eWxlXTtcclxufVxyXG4iLCJleHBvcnQgdmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vY3NzL2dsb2JhbC5jc3MnKTtcclxuIiwiaW1wb3J0IHsgSVBsdWdpblBhcmFtcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luUGFyYW1zJztcclxuaW1wb3J0IHsgSVBsdWdpblRlbXBsYXRlcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luVGVtcGxhdGVzJztcclxuaW1wb3J0IHsgSVBsdWdpbkNTUyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ1NTJztcclxuaW1wb3J0IHsgSUluamVjdGlvbkluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvQVBJL1VpQXBpJztcclxuaW1wb3J0IHsgSVBsdWdpbkNvbmZpZyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ29uZmlnJztcclxuaW1wb3J0IHsgUGx1Z2luU3R5bGUgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1BsdWdpblN0eWxlcyc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1Byb3ZpZGVycyc7XHJcbmltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Jhc2VQbHVnaW4nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQnV0dG9uIHtcclxuICAgIHByb3ZpZGVyTmFtZTogc3RyaW5nO1xyXG4gICAgaWNvblVSTDogc3RyaW5nO1xyXG4gICAgbGFzdExvZ2luSWNvblVSTDogc3RyaW5nO1xyXG4gICAgY29ubmVjdGVkSWNvblVSTD86IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBpZHBOYW1lPzogc3RyaW5nO1xyXG4gICAgcG9zaXRpb24/OiBudW1iZXI7XHJcbiAgICBsb2dvVVJMPzogc3RyaW5nO1xyXG4gICAgb3BlbklEVVJMPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVkaXRDb25uZWN0aW9uUGx1Z2luUGFyYW1zIGV4dGVuZHMgSVBsdWdpblBhcmFtcyB7XHJcbiAgICBjYXB0aW9uVGV4dD86IHN0cmluZztcclxuICAgIGNvbnRleHQ/OiBhbnk7XHJcbiAgICBzaG93VGVybXNMaW5rPzogc3RyaW5nO1xyXG4gICAgZW5hYmxlZFByb3ZpZGVycz86IHN0cmluZztcclxuICAgIGRpc2FibGVkUHJvdmlkZXJzPzogc3RyaW5nO1xyXG4gICAgc2hvd1Rvb2x0aXBzPzogc3RyaW5nO1xyXG4gICAgcmVxdWlyZWRDYXBhYmlsaXRpZXM/OiBzdHJpbmc7XHJcbiAgICBzZXNzaW9uRXhwaXJhdGlvbj86IG51bWJlcjtcclxuICAgIGNpZD86IHN0cmluZztcclxuICAgIGFjdGlvbkF0dHJpYnV0ZXM/OiBhbnk7XHJcbiAgICBjc3NQcmVmaXg/OiBzdHJpbmc7XHJcbiAgICBjdXN0b21CdXR0b24/OiBJQ3VzdG9tQnV0dG9uO1xyXG4gICAgY3VzdG9tQnV0dG9ucz86IEFycmF5PElDdXN0b21CdXR0b24+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVkaXRDb25uZWN0aW9uUGx1Z2luVGVtcGxhdGVzIGV4dGVuZHMgSVBsdWdpblRlbXBsYXRlcyB7XHJcbiAgICBlZGl0OiBzdHJpbmc7XHJcbiAgICBzb2NpYWxQcm92aWRlckFwcHM6IHN0cmluZztcclxuICAgIGNvbm5lY3RlZFNvY2lhbFByb3ZpZGVyOiBzdHJpbmc7XHJcbiAgICBkaXNjb25uZWN0ZWRTb2NpYWxQcm92aWRlcjogc3RyaW5nO1xyXG4gICAgaWRlbnRpdHlDb3VudHJ5OiBzdHJpbmc7XHJcbiAgICBpZGVudGl0eUNpdHk6IHN0cmluZztcclxuICAgIGlkZW50aXR5QmlydGhEYXRlOiBzdHJpbmc7XHJcbiAgICBkZWZhdWx0UGhvdG9VUkw6IHN0cmluZztcclxuICAgIGdpZ3lhVGVybXM6IHN0cmluZztcclxuICAgIGdpZ3lhQnJhbmQ6IHN0cmluZztcclxuICAgIGZvb3Rlcjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVkaXRDb25uZWN0aW9uUGx1Z2luQ1NTIGV4dGVuZHMgSVBsdWdpbkNTUyB7fVxyXG5pbnRlcmZhY2UgSUdpZ3lhVXNlciB7XHJcbiAgICBpZGVudGl0aWVzOiBhbnk7XHJcbiAgICBwcm92aWRlcnM6IEFycmF5PHN0cmluZz47XHJcbn1cclxudmFyIFNpdGVQcm92aWRlciA9ICdzaXRlJztcclxudHlwZSBJUHJvdmlkZXIgPSBQcm92aWRlciAmIHsgYnV0dG9uRGF0YT86IElDdXN0b21CdXR0b24gfTtcclxuY29uc3QgQmFzZVBsdWdpbkdsb2JhbDogdHlwZW9mIEJhc2VQbHVnaW4gPSBnaWd5YS5fLnBsdWdpbnMuQmFzZVBsdWdpbjtcclxuZXhwb3J0IGNsYXNzIEVkaXRDb25uZWN0aW9uUGx1Z2luIGV4dGVuZHMgQmFzZVBsdWdpbkdsb2JhbDxJRWRpdENvbm5lY3Rpb25QbHVnaW5QYXJhbXMsIElFZGl0Q29ubmVjdGlvblBsdWdpblRlbXBsYXRlcywgSUVkaXRDb25uZWN0aW9uUGx1Z2luQ1NTPiB7XHJcbiAgICAvLyBPdmVycmlkZSBCYXNlUGx1Z2luIG1ldGhvZHNcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5qZWN0aW9uSW5mbygpOiBJSW5qZWN0aW9uSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdzb2NpYWxpemUnLFxyXG4gICAgICAgICAgICBtZXRob2ROYW1lOiAnc2hvd0VkaXRDb25uZWN0aW9uJyxcclxuICAgICAgICAgICAganNOYW1lOiAnZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuZWRpdCcsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbGFzcyB2YXJpYWJsZXNcclxuICAgIHByaXZhdGUgcHJvdmlkZXJBcHBzTGlua3MgPSB7XHJcbiAgICAgICAgZmFjZWJvb2s6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2V0dGluZ3M/dGFiPWFwcGxpY2F0aW9ucycsXHJcbiAgICAgICAgdHdpdHRlcjogJ2h0dHBzOi8vdHdpdHRlci5jb20vc2V0dGluZ3MvYXBwbGljYXRpb25zJyxcclxuICAgICAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9wc2V0dGluZ3MvcGVybWl0dGVkLXNlcnZpY2VzJyxcclxuICAgICAgICBnb29nbGVwbHVzOiAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vdS8wL2FwcHMnLFxyXG4gICAgICAgIG1lc3NlbmdlcjogJ2h0dHBzOi8vYWNjb3VudC5saXZlLmNvbS9jb25zZW50L01hbmFnZScsXHJcbiAgICAgICAgeWFob286ICdodHRwczovL2FwaS5sb2dpbi55YWhvby5jb20vV1NMb2dpbi9WMS91bmxpbmsnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL3ByaXZhdGUgcHJtczogSUVkaXRDb25uZWN0aW9uUGx1Z2luUGFyYW1zO1xyXG4gICAgcHJpdmF0ZSBwcm92aWRlcnM6IEFycmF5PElQcm92aWRlcj47XHJcbiAgICBwcml2YXRlIHVzZXI6IElHaWd5YVVzZXI7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlczogYW55O1xyXG4gICAgcHJpdmF0ZSBpbWFnZUJhc2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2hvd1Rvb2x0aXBzOiBib29sZWFuO1xyXG5cclxuICAgIC8vIGluaXRpYWxpemF0aW9uIGJsb2NrLlxyXG4gICAgcHVibGljIGluaXQobG9hZGVkQ2FsbGJhY2s6IChzdWNjZXNzPzogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvd1Rvb2x0aXBzID0gZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0VHJ1ZSh0aGlzLnBhcmFtcy5zaG93VG9vbHRpcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlQmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2VkaXQvJyk7XHJcblxyXG4gICAgICAgIC8vIGluaXQgdGhlIHByb3ZpZGVycyBsaXN0XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMgPSBnaWd5YS5nbG9iYWwucmVzb2x2ZVByb3ZpZGVycyh0aGlzLnBhcmFtcy5lbmFibGVkUHJvdmlkZXJzLCB0aGlzLnBhcmFtcy5kaXNhYmxlZFByb3ZpZGVycywgdGhpcy5wYXJhbXMucmVxdWlyZWRDYXBhYmlsaXRpZXMpO1xyXG5cclxuICAgICAgICBnaWd5YS51dGlscy5hcnJheS5mb3JFYWNoKHRoaXMucGFyYW1zLmN1c3RvbUJ1dHRvbnMgfHwgW3RoaXMucGFyYW1zLmN1c3RvbUJ1dHRvbl0sIG9CdXR0b24gPT4ge1xyXG4gICAgICAgICAgICAvLyBJZ25vcmUgYWxsIG5vbi1TQU1MIGJ1dHRvbnMuXHJcbiAgICAgICAgICAgIGlmIChvQnV0dG9uICYmIG9CdXR0b24udHlwZSAmJiBvQnV0dG9uLnR5cGUudG9Mb3dlckNhc2UoKSA9PSAnc2FtbCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBDdXN0b21Qcm92aWRlciA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShnaWd5YS5zb2NpYWxpemUuX2dldFByb3ZpZGVyQnlJRCg0MTIyKSk7XHJcbiAgICAgICAgICAgICAgICBwQ3VzdG9tUHJvdmlkZXIubmFtZSA9ICdzYW1sLScgKyBvQnV0dG9uLmlkcE5hbWU7XHJcbiAgICAgICAgICAgICAgICBwQ3VzdG9tUHJvdmlkZXIuZGlzcGxheU5hbWUgPSBvQnV0dG9uLnByb3ZpZGVyTmFtZTtcclxuICAgICAgICAgICAgICAgIHBDdXN0b21Qcm92aWRlci5idXR0b25EYXRhID0gb0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzLnNwbGljZShvQnV0dG9uLnBvc2l0aW9uICYmIG9CdXR0b24ucG9zaXRpb24gPiAxID8gb0J1dHRvbi5wb3NpdGlvbiAtIDEgOiAwLCAwLCBwQ3VzdG9tUHJvdmlkZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyIHRvIGdsb2JhbCBldmVudHM6IGxvZ2luLCBsb2dvdXQsIGNvbm5lY3QsIGRpc2Nvbm5lY3RcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyVG9HbG9iYWxFdmVudHMoKTtcclxuXHJcbiAgICAgICAgLy8gaW5pdCB1c2VyIHN0YXRlXHJcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbyhyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyByZW5kZXIgdGhlIGNvbnRyb2xcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNldCB0aGUgY29udHJvbCBEaW1lbnNpb25zLiBuZWVkZWQgb25seSBvbmNlIG9uIGluaXQgYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlci5cclxuICAgICAgICAgICAgdGhpcy5pbml0RGltZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgbG9hZGVkQ2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29uZmlnKCk6IElQbHVnaW5Db25maWc8SUVkaXRDb25uZWN0aW9uUGx1Z2luUGFyYW1zPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVxdWlyZWRQYXJhbXM6IFtdLFxyXG4gICAgICAgICAgICBkZWZhdWx0UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkUHJvdmlkZXJzOiAnKicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMxMCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyNTAnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRDYXBhYmlsaXRpZXM6ICdmcmllbmRzJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGFzTW9iaWxlVUk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbGxvd01vZGFsOiB0cnVlLFxyXG4gICAgICAgICAgICBkZWZhdWx0TW9kYWxQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWRQcm92aWRlcnM6ICcqJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMzEwJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzMxMCcsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZENhcGFiaWxpdGllczogJ2ZyaWVuZHMnLFxyXG4gICAgICAgICAgICAgICAgY2FwdGlvblRleHRLZXk6ICdFZGl0Q29ubmVjdGlvbnMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMb2dpYyAtLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuICAgIHByaXZhdGUgZ2V0VXNlckluZm8oY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5nZXRVc2VySW5mbyh0aGlzLnBhcmFtcywge1xyXG4gICAgICAgICAgICBpbmNsdWRlQWxsSWRlbnRpdGllczogdHJ1ZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvckNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKHRoaXMucGFyYW1zLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXR0aW5nIHRoZSBkaW1lbnNpb25zIGZvciB0aGUgZWxlbWVudHMuXHJcbiAgICAvLyB3K2ggd2hlbiB0aGUgZ2lneWEgYnJhbmQgb3IgdGVybXMgbGluayBpcyBvbi5cclxuICAgIHByaXZhdGUgaW5pdERpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgdmFyIGZvb3RlckhlaWdodCA9IDA7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlICdGb290ZXInIGV4aXN0cyBpbiB0aGUgc2NvcGUgb2YgdGhlIGNvbnRyb2wuXHJcbiAgICAgICAgdmFyIGZRdWVyeTogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1lZGl0LWNvbm5lY3Rpb25zLWZvb3RlcicpO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgZm9vdGVyIGZvdW5kXHJcbiAgICAgICAgaWYgKGZRdWVyeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGZvb3RlciA9IGZRdWVyeVswXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgY2FsY3VsYXRlZCBoZWlnaHQgb2YgdGhlIGVsZW1lbnRcclxuICAgICAgICAgICAgZm9vdGVySGVpZ2h0ID0gZ2lneWEudXRpbHMuRE9NLmdldEhUTUxTaXplKGZvb3Rlci5pbm5lckhUTUwsIGZvb3RlcikuaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN1YnRydWN0aW5nIHRoZSBmb290ZXIgc2l6ZSBmcm9tIHRoZSBsaXN0IG9mIGNvbm5lY3Rpb25zXHJcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25zTGlzdEhlaWdodCA9IHBhcnNlSW50KHRoaXMucGFyYW1zLmhlaWdodCkgLSBmb290ZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIHZhciBoZWlnaHRDc3MgPSAnLmdpZy1lZGl0LWNvbm5lY3Rpb25zIHsnICsgWydoZWlnaHQ6ICcsIGNvbm5lY3Rpb25zTGlzdEhlaWdodCwgJ3B4OycsICdtaW4td2lkdGg6IDIxNXB4OyddLmpvaW4oJycpICsgJ30nO1xyXG5cclxuICAgICAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzLmFkZENzcyhoZWlnaHRDc3MsIHRoaXMucGFyYW1zLmNzc1ByZWZpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGx1Z2luU3R5bGUoKSA9PSBQbHVnaW5TdHlsZS5sZWdhY3kgJiYgdGhpcy5pc01vZGFsKSB7XHJcbiAgICAgICAgICAgIHZhciB1aUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh1aUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gdWlDb250YWluZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIGNvbnRhaW5lciBodG1sLlxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuZ2V0Q29udHJvbEh0bWwoKTtcclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXJpbmcgdG8gbG9jYWwgZXZlbnRzIDogY29ubmVjdCxkaXNjb25uZWN0XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckxvY2FsRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFdmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckxvY2FsRXZlbnRzKCkge1xyXG4gICAgICAgIHZhciBjb25uZWN0TGlua0VsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLWVkaXQtY29ubmVjdGlvbnMtY29ubmVjdExpbmsnKTtcclxuICAgICAgICB2YXIgZGlzY29ubmVjdExpbmtFbGVtZW50czogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1lZGl0LWNvbm5lY3Rpb25zLWRpc2Nvbm5lY3RMaW5rJyk7XHJcblxyXG4gICAgICAgIHZhciBldmVudE5hbWUgPSBnaWd5YS5sb2NhbEluZm8uaXNJT1MgJiYgZ2lneWEubG9jYWxJbmZvLmlzU2FmYXJpID8gJ3RvdWNoZW5kJyA6ICdjbGljayc7XHJcblxyXG4gICAgICAgIC8vIFJlZ2lzdGVyaW5nIGZvaXIgdGhlIGNvbm5lY3QgZXZlbnRzLlxyXG4gICAgICAgIGlmIChjb25uZWN0TGlua0VsZW1lbnRzICYmIGNvbm5lY3RMaW5rRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbm5lY3RMaW5rRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGNvbm5lY3RMaW5rRWxlbWVudHNbaV0sIGV2ZW50TmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbm5lY3RDbGljayhlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBmb3IgdGhlIERpc2Nvbm5lY3QgZXZlbnRzLlxyXG4gICAgICAgIGlmIChkaXNjb25uZWN0TGlua0VsZW1lbnRzICYmIGRpc2Nvbm5lY3RMaW5rRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc2Nvbm5lY3RMaW5rRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGRpc2Nvbm5lY3RMaW5rRWxlbWVudHNbaV0sIGV2ZW50TmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRpc2Nvbm5lY3RDbGljayhlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Vc2VyU3RhdGVDaGFuZ2UgPSAoKSA9PiB0aGlzLlVzZXJTdGF0ZUNoYW5nZWQoKTtcclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyVG9HbG9iYWxFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRHbG9iYWxFdmVudEhhbmRsZXJzKHtcclxuICAgICAgICAgICAgb25Mb2dpbjogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcclxuICAgICAgICAgICAgb25Mb2dvdXQ6IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uQ29ubmVjdGlvbkFkZGVkOiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxyXG4gICAgICAgICAgICBvbkNvbm5lY3Rpb25SZW1vdmVkOiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5yZWdpc3RlclRvR2xvYmFsRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlR2xvYmFsRXZlbnRIYW5kbGVycyh7XHJcbiAgICAgICAgICAgIG9uTG9naW46IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uTG9nb3V0OiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxyXG4gICAgICAgICAgICBvbkNvbm5lY3Rpb25BZGRlZDogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcclxuICAgICAgICAgICAgb25Db25uZWN0aW9uUmVtb3ZlZDogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJUb0dsb2JhbEV2ZW50cygpO1xyXG5cclxuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBldmVudCB0cmlnZ2VyIHJlLXJlbmRlclxyXG4gICAgcHJpdmF0ZSBVc2VyU3RhdGVDaGFuZ2VkKCkge1xyXG4gICAgICAgIC8vIGluaXQgdXNlciBzdGF0ZVxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBjb250cm9sXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvbm5lY3RDbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIHZhciB0YXJnZXQ6IGFueSA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNvY2lhbHByb3ZpZGVyJyk7XHJcblxyXG4gICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5hZGRDb25uZWN0aW9uKHRoaXMucGFyYW1zLCB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcclxuICAgICAgICAgICAgaW5jbHVkZUFsbElkZW50aXRpZXM6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRpc2Nvbm5lY3RDbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIHZhciB0YXJnZXQ6IGFueSA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNvY2lhbHByb3ZpZGVyJyk7XHJcblxyXG4gICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5yZW1vdmVDb25uZWN0aW9uKHRoaXMucGFyYW1zLCB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRlbXBsYXRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb250cm9sSHRtbCgpIHtcclxuICAgICAgICAvLyBzZXR0aW5nIHVwIDIgbGlzdHMgZm9yIHNpbXBsZSBzdGF0dXMgYXBwZW5kaW5nLlxyXG4gICAgICAgIHZhciBjb25uZWN0ZWRQcm92aWRlcnMgPSBbXTtcclxuICAgICAgICB2YXIgbm90Q29ubmVjdGVkUHJvdmlkZXJzID0gW107XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgaW5uZXIgaXRlbXNcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm92aWRlciA9IHRoaXMucHJvdmlkZXJzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb3ZpZGVyLm5hbWUgPT09IFNpdGVQcm92aWRlcikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VyLmlkZW50aXRpZXMuaGFzT3duUHJvcGVydHkocHJvdmlkZXIubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZFByb3ZpZGVycy5wdXNoKHRoaXMuZ2V0UHJvdmlkZXJMaXN0SXRlbShwcm92aWRlciwgdGhpcy51c2VyLmlkZW50aXRpZXNbcHJvdmlkZXIubmFtZV0pKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdENvbm5lY3RlZFByb3ZpZGVycy5wdXNoKHRoaXMuZ2V0UHJvdmlkZXJMaXN0SXRlbShwcm92aWRlciwgbnVsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBoYXMgaWRlbnRpdGllcyBvdXRzaWRlIHRoZSByZXF1ZXN0ZWQgcHJvdmlkZXJzIGNyaXRpcmlhLlxyXG4gICAgICAgIC8vIGlmIHNvLCBhZGQgdGhlIHByb3ZpZGVyIGFuZCB0aGUgaWRlbnRpdHkuXHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiB0aGlzLnVzZXIuaWRlbnRpdGllcykge1xyXG4gICAgICAgICAgICBpZiAocCA9PT0gU2l0ZVByb3ZpZGVyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm92aWRlcnNbaV0ubmFtZSA9PT0gcCkgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBub3QgZm91bmQsIGFkZCB0byB0aGUgbGlzdDpcclxuICAgICAgICAgICAgICAgIHZhciBtaXNzaW5nUHJvdmlkZXIgPSBnaWd5YS5fLnByb3ZpZGVycy5nZXRQcm92aWRlckJ5TmFtZShwKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZFByb3ZpZGVycy5wdXNoKHRoaXMuZ2V0UHJvdmlkZXJMaXN0SXRlbShtaXNzaW5nUHJvdmlkZXIsIHRoaXMudXNlci5pZGVudGl0aWVzW3BdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgY29udGFpbmVyIEhUTUxcclxuICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRUZW1wbGF0ZXMoKS5lZGl0LCB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyc0RhdGE6IGNvbm5lY3RlZFByb3ZpZGVycy5qb2luKCcnKSArIG5vdENvbm5lY3RlZFByb3ZpZGVycy5qb2luKCcnKSxcclxuICAgICAgICAgICAgZm9vdGVyOiB0aGlzLmdldEZvb3RlcigpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhIFByb3ZpZGVyIGxpIGVsZW1lbnQsIGlmIHRoZSBkYXRhIGV4aXN0cywgYWRkaW5nIHRoZSBpZGVudGl0eSBkYXRhXHJcbiAgICBwcml2YXRlIGdldFByb3ZpZGVyTGlzdEl0ZW0ocHJvdmlkZXI6IElQcm92aWRlciwgaWRlbnRpdHlPYmplY3Q/OiBhbnkpIHtcclxuICAgICAgICB2YXIgcHJvdmlkZXJUb29sdGlwID0gdGhpcy5zaG93VG9vbHRpcHMgPyBwcm92aWRlci5kaXNwbGF5TmFtZSA6ICcnO1xyXG5cclxuICAgICAgICBpZiAoaWRlbnRpdHlPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIHNvY2lhbFByb3ZpZGVyQXBwcyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgLy8gZXh0cmFjdCB0aGUgcHJvdmlkZXIgYXV0aCBtYW5hZ2UgbGluayBmcm9tIHRoZSBsaXN0IGlmIGhhcyBvbmUuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3ZpZGVyQXBwc0xpbmtzLmhhc093blByb3BlcnR5KHByb3ZpZGVyLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzb2NpYWxQcm92aWRlckFwcHMgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLmdldFRlbXBsYXRlcygpLnNvY2lhbFByb3ZpZGVyQXBwcywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyQXBwVXJsOiB0aGlzLnByb3ZpZGVyQXBwc0xpbmtzW3Byb3ZpZGVyLm5hbWVdLFxyXG4gICAgICAgICAgICAgICAgICAgIGxuZ19NeWFwcHM6IHRoaXMuZ2V0VGV4dCgnbXlfYXBwcycpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIC0tID4gc29jaWFsUHJvdmlkZXJDb25uZWN0ZWRcclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuY29ubmVjdGVkU29jaWFsUHJvdmlkZXIsIHtcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyTmFtZTogcHJvdmlkZXIubmFtZSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm92aWRlci5kaXNwbGF5TmFtZSB8fCBwcm92aWRlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJUb29sdGlwOiBwcm92aWRlclRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlTmFtZTogaWRlbnRpdHlPYmplY3Qubmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlSW1hZ2U6IHRoaXMuZ2V0SWRlbnRpdHlQaG90b1VybChpZGVudGl0eU9iamVjdCksXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlQ291bnRyeTogdGhpcy5nZXRJZGVudGl0eUNvdW50cnkoaWRlbnRpdHlPYmplY3QpLFxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZUNpdHk6IHRoaXMuZ2V0SWRlbnRpdHlDaXR5KGlkZW50aXR5T2JqZWN0KSxcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVCaXJ0aERhdGU6IHRoaXMuZ2V0SWRlbnRpdHlCaXJ0aERhdGUoaWRlbnRpdHlPYmplY3QpLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJJbWFnZTogdGhpcy5nZXRQbHVnaW5JbWFnZShwcm92aWRlciwgaWRlbnRpdHlPYmplY3QpLFxyXG4gICAgICAgICAgICAgICAgc29jaWFsUHJvdmlkZXJBcHBzOiBzb2NpYWxQcm92aWRlckFwcHMsXHJcbiAgICAgICAgICAgICAgICBsbmdfRGlzY29ubmVjdDogdGhpcy5nZXRUZXh0KCdkaXNjb25uZWN0JyksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIC0tID4gc29jaWFsUHJvdmlkZXJOb3RDb25uZWN0ZWRcclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuZGlzY29ubmVjdGVkU29jaWFsUHJvdmlkZXIsIHtcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyTmFtZTogcHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBwcm92aWRlclRvb2x0aXA6IHByb3ZpZGVyVG9vbHRpcCxcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVySW1hZ2U6IHRoaXMuZ2V0UGx1Z2luSW1hZ2UocHJvdmlkZXIpLFxyXG4gICAgICAgICAgICAgICAgbG5nX0Nvbm5lY3Q6IHRoaXMuZ2V0VGV4dCgnY29ubmVjdCcpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQbHVnaW5JbWFnZShwcm92aWRlcjogSVByb3ZpZGVyLCBpZGVudGl0eT86IGFueSkge1xyXG4gICAgICAgIGlmIChwcm92aWRlci5idXR0b25EYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICghaWRlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm92aWRlci5idXR0b25EYXRhLmljb25VUkw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdmlkZXIuYnV0dG9uRGF0YS5jb25uZWN0ZWRJY29uVVJMIHx8IHByb3ZpZGVyLmJ1dHRvbkRhdGEuaWNvblVSTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmltYWdlQmFzZX0ke3Byb3ZpZGVyLm5hbWV9LnBuZ2A7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SWRlbnRpdHlDb3VudHJ5KGlkZW50aXR5KSB7XHJcbiAgICAgICAgaWYgKGlkZW50aXR5LmNvdW50cnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuaWRlbnRpdHlDb3VudHJ5LCB7XHJcbiAgICAgICAgICAgICAgICBsbmdfQ291bnRyeTogdGhpcy5nZXRUZXh0KCdjb3VudHJ5JyksXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBpZGVudGl0eS5jb3VudHJ5LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SWRlbnRpdHlDaXR5KGlkZW50aXR5KSB7XHJcbiAgICAgICAgaWYgKGlkZW50aXR5LmNpdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuaWRlbnRpdHlDaXR5LCB7XHJcbiAgICAgICAgICAgICAgICBsbmdfQ2l0eTogdGhpcy5nZXRUZXh0KCdjaXR5JyksXHJcbiAgICAgICAgICAgICAgICBjaXR5OiBpZGVudGl0eS5jaXR5LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SWRlbnRpdHlCaXJ0aERhdGUoaWRlbnRpdHkpIHtcclxuICAgICAgICBpZiAoaWRlbnRpdHkuYmlydGhZZWFyICYmIGlkZW50aXR5LmJpcnRoTW9udGggJiYgaWRlbnRpdHkuYmlydGhEYXkpIHtcclxuICAgICAgICAgICAgdmFyIHllYXIgPSBpZGVudGl0eS5iaXJ0aFllYXI7XHJcbiAgICAgICAgICAgIHZhciBtb250aCA9IGlkZW50aXR5LmJpcnRoTW9udGg7XHJcbiAgICAgICAgICAgIHZhciBkYXkgPSBpZGVudGl0eS5iaXJ0aERheTtcclxuICAgICAgICAgICAgaWYgKCF5ZWFyKSB5ZWFyID0gJz8/JztcclxuICAgICAgICAgICAgaWYgKCFtb250aCkgbW9udGggPSAnPz8nO1xyXG4gICAgICAgICAgICBpZiAoIWRheSkgZGF5ID0gJz8/JztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLmdldFRlbXBsYXRlcygpLmlkZW50aXR5QmlydGhEYXRlLCB7XHJcbiAgICAgICAgICAgICAgICBsbmdfRGF0ZV9vZl9iaXJ0aDogdGhpcy5nZXRUZXh0KCdkYXRlX29mX2JpcnRoJyksXHJcbiAgICAgICAgICAgICAgICBkYXk6IGRheSxcclxuICAgICAgICAgICAgICAgIG1vbnRoOiBtb250aCxcclxuICAgICAgICAgICAgICAgIHllYXI6IHllYXIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJZGVudGl0eVBob3RvVXJsKGlkZW50aXR5KSB7XHJcbiAgICAgICAgdmFyIHVybCA9IGlkZW50aXR5LnRodW1ibmFpbFVSTDtcclxuICAgICAgICBpZiAoIXVybCkgdXJsID0gaWRlbnRpdHkucGhvdG9VUkw7XHJcbiAgICAgICAgaWYgKCF1cmwpXHJcbiAgICAgICAgICAgIHVybCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuZGVmYXVsdFBob3RvVVJMLCB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2VVUkw6IHRoaXMuaW1hZ2VCYXNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZ2lneWEuZ2xvYmFsLmdldFBob3RvVVJMKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb290ZXIoKSB7XHJcbiAgICAgICAgdmFyIGZvb3RlciA9ICcnO1xyXG4gICAgICAgIC8vIENoZWNraW5nIGlmIHdlIG5lZWQgdG8gcmVuZGVyIHRoZSBmb290ZXIuXHJcbiAgICAgICAgdmFyIHNob3dUZXJtcyA9IHRoaXMucGFyYW1zLnNob3dUZXJtc0xpbms7XHJcblxyXG4gICAgICAgIGlmIChzaG93VGVybXMpIHtcclxuICAgICAgICAgICAgdmFyIGJyYW5kID0gJyc7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVybXMgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLmdldFRlbXBsYXRlcygpLmdpZ3lhVGVybXMsIHtcclxuICAgICAgICAgICAgICAgIGxuZ19UZXJtczogdGhpcy5nZXRUZXh0KCd0ZXJtcycpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIFRoZSBGb290ZXJcclxuICAgICAgICAgICAgZm9vdGVyID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRUZW1wbGF0ZXMoKS5mb290ZXIsIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhVGVybXM6IHRlcm1zLFxyXG4gICAgICAgICAgICAgICAgZ2lneWFCcmFuZDogYnJhbmQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIGNvbm5lY3RlZFNvY2lhbFByb3ZpZGVyID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvY29ubmVjdGVkU29jaWFsUHJvdmlkZXIuaHRtbCcpO1xyXG5leHBvcnQgdmFyIGRlZmF1bHRQaG90b1VSTCA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2RlZmF1bHRQaG90b1VSTC5odG1sJyk7XHJcbmV4cG9ydCB2YXIgZGlzY29ubmVjdGVkU29jaWFsUHJvdmlkZXIgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9kaXNjb25uZWN0ZWRTb2NpYWxQcm92aWRlci5odG1sJyk7XHJcbmV4cG9ydCB2YXIgZWRpdCA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2VkaXQuaHRtbCcpO1xyXG5leHBvcnQgdmFyIGZvb3RlciA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Zvb3Rlci5odG1sJyk7XHJcbmV4cG9ydCB2YXIgZ2lneWFCcmFuZCA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2dpZ3lhQnJhbmQuaHRtbCcpO1xyXG5leHBvcnQgdmFyIGdpZ3lhVGVybXMgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9naWd5YVRlcm1zLmh0bWwnKTtcclxuZXhwb3J0IHZhciBpZGVudGl0eUJpcnRoRGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2lkZW50aXR5QmlydGhEYXRlLmh0bWwnKTtcclxuZXhwb3J0IHZhciBpZGVudGl0eUNpdHkgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9pZGVudGl0eUNpdHkuaHRtbCcpO1xyXG5leHBvcnQgdmFyIHNvY2lhbFByb3ZpZGVyQXBwcyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL3NvY2lhbFByb3ZpZGVyQXBwcy5odG1sJyk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIqLmdpZy1lZGl0LWNvbm5lY3Rpb25zIGEge1xcclxcbiAgICBjb2xvcjogIzAwODZmMTtcXHJcXG59XFxyXFxuXFxyXFxuKi5naWctZWRpdC1jb25uZWN0aW9ucyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiAgICAqLmdpZy1lZGl0LWNvbm5lY3Rpb25zIHVsIHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICouZ2lnLWVkaXQtY29ubmVjdGlvbnMgdWwgbGkgeyBcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgKi5naWctZWRpdC1jb25uZWN0aW9ucyB1bCBsaSAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtaWRlbnRpdHktaW5mb3JtYXRpb24ge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuKi5naWctZWRpdC1jb25uZWN0aW9ucy1pZGVudGl0eS1pbmZvcm1hdGlvbi1wcm9maWxlLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZy1lZGl0LWNvbm5lY3Rpb25zIHVsIGxpIC5naWctZWRpdC1jb25uZWN0aW9ucy1pZGVudGl0eS1pbmZvcm1hdGlvbiAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtaWRlbnRpdHktaW5mb3JtYXRpb24tcHJvZmlsZS1pbWFnZSBpbWcge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZ2lnLWVkaXQtY29ubmVjdGlvbnMgdWwgbGkgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLWlkZW50aXR5LWluZm9ybWF0aW9uIC5naWctZWRpdC1jb25uZWN0aW9ucy1pbmZvcm1hdGlvbi1kZXRhaWxzIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5naWctZWRpdC1jb25uZWN0aW9ucyB1bCBsaSAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtaWRlbnRpdHktaW5mb3JtYXRpb24gLmdpZy1lZGl0LWNvbm5lY3Rpb25zLWluZm9ybWF0aW9uLWRldGFpbHMgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLWluZm9ybWF0aW9uLWRldGFpbHMtcm93IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuLmdpZy1lZGl0LWNvbm5lY3Rpb25zIHVsIGxpIC5naWctZWRpdC1jb25uZWN0aW9ucy1zb2NpYWwtcHJvdmlkZXIge1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgICAuZ2lnLWVkaXQtY29ubmVjdGlvbnMgdWwgbGkgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLXNvY2lhbC1wcm92aWRlciAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtc29jaWFsLXByb3ZpZGVyLWltYWdlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLmdpZy1lZGl0LWNvbm5lY3Rpb25zIHVsIGxpIC5naWctZWRpdC1jb25uZWN0aW9ucy1zb2NpYWwtcHJvdmlkZXIgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLXNvY2lhbC1wcm92aWRlci1pbWFnZSBpbWcge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMThweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4uZ2lnLWVkaXQtY29ubmVjdGlvbnMgdWwgbGk6aG92ZXIgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLXByb3ZpZGVyLWFwcHMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmdpZy1lZGl0LWNvbm5lY3Rpb25zLXByb3ZpZGVyLWFwcHMge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5naWctZWRpdC1jb25uZWN0aW9ucy1wcm92aWRlci1hcHBzIHNwYW4ge1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjMDA4NmYxO1xcclxcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uZ2lnLWVkaXQtY29ubmVjdGlvbnMtZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLWZvb3RlciAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtc29jaWFsLWJ5IHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtZm9vdGVyIC5naWctZWRpdC1jb25uZWN0aW9ucy1zb2NpYWwtYnkgc3BhbiB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjMDA1OTk3O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLWZvb3RlciAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtc29jaWFsLWJ5IHNwYW4gc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5naWctZWRpdC1jb25uZWN0aW9ucy1mb290ZXIgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLXRlcm1zIHtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICAgICAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgICAgICBjb2xvcjogIzAwODZmMTtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cIiIsImltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNFZGl0Q29ubmVjdGlvbnMgZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC9FZGl0Q29ubmVjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBIdG1sUmVzb3VyY2VzIGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLkVkaXRDb25uZWN0aW9uc05ldy9hcHAvSHRtbFJlc291cmNlcyc7XHJcbmltcG9ydCAqIGFzIENTU1Jlc291cmNlIGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLkVkaXRDb25uZWN0aW9uc05ldy9hcHAvQ1NTUmVzb3VyY2VzJztcclxuXHJcbmRlY2xhcmUgY29uc3QgZ2lneWE6IGFueTtcclxuaWYgKCFnaWd5YS5fKSB7XHJcbiAgICBnaWd5YS5fID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zLmVkaXRDb25uZWN0aW9ucykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLmVkaXRDb25uZWN0aW9ucyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcykge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbCkge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbC5lZGl0KSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwuZWRpdCA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MuZWRpdCkge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MuZWRpdCA9IHt9O1xyXG59XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLmVkaXRDb25uZWN0aW9ucywgR2lneWFfUGx1Z2luc0VkaXRDb25uZWN0aW9ucyk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLmVkaXQsIEh0bWxSZXNvdXJjZXMpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLmVkaXQsIENTU1Jlc291cmNlKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxsaT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lnLWVkaXQtY29ubmVjdGlvbnMtc29jaWFsLXByb3ZpZGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLXNvY2lhbC1wcm92aWRlci1pbWFnZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIiRwcm92aWRlckltYWdlXFxcIiB0aXRsZT1cXFwiJHByb3ZpZGVyVG9vbHRpcFxcXCIgYWx0PVxcXCIkZGlzcGxheU5hbWVcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxzdHJvbmc+JHByb2ZpbGVOYW1lPC9zdHJvbmc+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWctZWRpdC1jb25uZWN0aW9ucy1pZGVudGl0eS1pbmZvcm1hdGlvblxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWctZWRpdC1jb25uZWN0aW9ucy1pZGVudGl0eS1pbmZvcm1hdGlvbi1wcm9maWxlLWltYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiJHByb2ZpbGVJbWFnZVxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2lnLWVkaXQtY29ubmVjdGlvbnMtaW5mb3JtYXRpb24tZGV0YWlsc1xcXCI+XFxyXFxuICAgICAgICAgICAgJHByb2ZpbGVDb3VudHJ5XFxyXFxuICAgICAgICAgICAgJHByb2ZpbGVDaXR5XFxyXFxuICAgICAgICAgICAgJHByb2ZpbGVCaXJ0aERhdGVcXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBjbGFzcz1cXFwiZ2lnLWVkaXQtY29ubmVjdGlvbnMtZGlzY29ubmVjdExpbmtcXFwiIGRhdGEtc29jaWFscHJvdmlkZXI9XFxcIiRwcm92aWRlck5hbWVcXFwiPiRsbmdfRGlzY29ubmVjdDwvYT48YnIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgJHNvY2lhbFByb3ZpZGVyQXBwc1xcclxcbiAgICA8L2Rpdj5cXHJcXG48L2xpPlxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIkaW1hZ2VCYXNlVVJML0RlZmF1bHRVc2VySW1hZ2VfNDVweC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGxpPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWctZWRpdC1jb25uZWN0aW9ucy1zb2NpYWwtcHJvdmlkZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2lnLWVkaXQtY29ubmVjdGlvbnMtc29jaWFsLXByb3ZpZGVyLWltYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiJHByb3ZpZGVySW1hZ2VcXFwiIHRpdGxlPVxcXCIkcHJvdmlkZXJUb29sdGlwXFxcIiBhbHQ9XFxcIiRkaXNwbGF5TmFtZVxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLWNvbm5lY3RMaW5rXFxcIiBkYXRhLXNvY2lhbHByb3ZpZGVyPVxcXCIkcHJvdmlkZXJOYW1lXFxcIj4kbG5nX0Nvbm5lY3Q8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvbGk+XFxyXFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zXFxcIj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgJHByb3ZpZGVyc0RhdGFcXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG4kZm9vdGVyXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLWZvb3RlclxcXCI+XFxyXFxuICAgICRnaWd5YVRlcm1zXFxyXFxuICAgICRnaWd5YUJyYW5kXFxyXFxuPC9kaXY+XFxyXFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLXNvY2lhbC1ieVxcXCI+XFxyXFxuICAgIDxzcGFuIG9uY2xpY2s9XFxcIndpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmdpZ3lhLmNvbScpXFxcIj48c3Bhbj4ke3NvY2lhbEJ5fSA8L3NwYW4+PGltZyBhbHQ9XFxcIkdpZ3lhXFxcIiBjbGFzcz1cXFwiZ2lneWEtbG9nb1xcXCIgc3JjPVxcXCIke2xvZ29Vcmx9XFxcIiAvPjwvc3Bhbj5cXHJcXG48L2Rpdj5cXHJcXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZ2lnLWVkaXQtY29ubmVjdGlvbnMtdGVybXNcXFwiPlxcclxcbiAgICA8YSB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaHJlZj1cXFwiaHR0cDovL3d3dy5naWd5YS5jb20vdGVybXMtb2Ytc2VydmljZS9cXFwiPiRsbmdfVGVybXM8L2E+XFxyXFxuPC9kaXY+XFxyXFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJnaWctZWRpdC1jb25uZWN0aW9ucy1pbmZvcm1hdGlvbi1kZXRhaWxzLXJvd1xcXCI+JGxuZ19EYXRlX29mX2JpcnRoICRkYXkvJG1vbnRoLyR5ZWFyPC9zcGFuPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiBjbGFzcz1cXFwiZ2lnLWVkaXQtY29ubmVjdGlvbnMtaW5mb3JtYXRpb24tZGV0YWlscy1yb3dcXFwiPiRsbmdfQ2l0eSAkY2l0eSA8L3NwYW4+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhIGhyZWY9XFxcIiRwcm92aWRlckFwcFVybFxcXCIgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLXByb3ZpZGVyLWFwcHNcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48c3Bhbj4kbG5nX015YXBwczwvc3Bhbj48L2E+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==