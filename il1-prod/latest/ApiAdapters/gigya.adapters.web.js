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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/Gigya.Js.Adapters.Web/index.ts");
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

/***/ "./src/core/ApiService/app/ApiService.ts":
/*!***********************************************!*\
  !*** ./src/core/ApiService/app/ApiService.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var GroupApiDomainService_1 = __webpack_require__(/*! src/core/ApiService/app/GroupApiDomainService */ "./src/core/ApiService/app/GroupApiDomainService.ts");
var GSErrors_1 = __webpack_require__(/*! ../../Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var GMID_TICKET_EXPIRATION_INTERVAL = 1;
exports.TokenKeys = {
    GMID: 'gig_gmid',
    UCID: 'gig_ucid',
    GMID_TICKET: 'gmidTicket',
    GMID_TICKET_EXPIRATION_TIME: 'gmidTicketExpiration',
};
var ApiService = /** @class */ (function () {
    function ApiService(_apiKey, _hasGmid, _domainResolver, _groupApiDomainService, _requestClass, _storage) {
        if (_groupApiDomainService === void 0) { _groupApiDomainService = new GroupApiDomainService_1.GroupApiDomainService(); }
        if (_requestClass === void 0) { _requestClass = window.gigya.JsonpRequest; }
        this._apiKey = _apiKey;
        this._hasGmid = _hasGmid;
        this._domainResolver = _domainResolver;
        this._groupApiDomainService = _groupApiDomainService;
        this._requestClass = _requestClass;
        if (_storage) {
            this._storage = _storage;
        }
    }
    ApiService.prototype.getApiDomain = function (methodName) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._domainResolver.getApiDomain(methodName)];
            });
        });
    };
    ApiService.prototype.bootstrap = function (forceBootstrap) {
        if (forceBootstrap === void 0) { forceBootstrap = false; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var log, _a, res, ticketInfo;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        log = window.gigya.logger.group("bootstrap api service");
                        if (!!this._storage) return [3 /*break*/, 2];
                        window.gigya.logger.debug("init storage");
                        _a = this;
                        return [4 /*yield*/, new gigya.Promise(function (resolve) {
                                window.gigya.utils.localStorage.waitForService(function (adapter) {
                                    resolve(adapter);
                                });
                            })];
                    case 1:
                        _a._storage = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(this._hasGmid && !forceBootstrap)) return [3 /*break*/, 3];
                        window.gigya.logger.info("already has gmid");
                        return [3 /*break*/, 7];
                    case 3:
                        window.gigya.logger.info(!this._hasGmid ? "no gmid set" : "forcing bootstrap");
                        if (!this.canSaveGmidAsCookie()) return [3 /*break*/, 5];
                        window.gigya.logger.info("save gmid as cookie");
                        return [4 /*yield*/, this.sendRequest({
                                methodName: 'accounts.webSdkBootstrap',
                                params: { apiKey: this._apiKey }
                            })];
                    case 4:
                        res = _b.sent();
                        if (res.errorCode != 0) {
                            window.gigya.logger.error("error bootstrapping sdk", { type: 'bootstrap failed', scope: 'ApiService.bootstrap', res: res });
                            throw 'error bootstrapping sdk\n' + JSON.stringify(res, null, 4);
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        window.gigya.logger.info("save gmid in storage");
                        return [4 /*yield*/, this.setupWithStorage()];
                    case 6:
                        _b.sent();
                        this._useStorage = true;
                        _b.label = 7;
                    case 7:
                        if (!this._useStorage) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.getGmidTicket()];
                    case 8:
                        ticketInfo = _b.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        this.cleanStorage();
                        _b.label = 10;
                    case 10:
                        log.end();
                        return [2 /*return*/, {
                                ticketInfo: ticketInfo,
                            }];
                }
            });
        });
    };
    ApiService.prototype.setGroupApiDomain = function (apiDomain) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var baseDomain;
            return tslib_1.__generator(this, function (_a) {
                baseDomain = window.gigya._.getBaseDomain(window.gigya.partnerSettings.baseDomains, this._domainResolver.originDomain, ['gigya.com', 'gigya-api.cn', window.gigya.defaultApiDomain]);
                if (baseDomain === window.gigya.defaultApiDomain) {
                    this._groupApiDomainService.set(apiDomain);
                }
                return [2 /*return*/];
            });
        });
    };
    ApiService.prototype.canSaveGmidAsCookie = function () {
        // api domain will be first party when site has a custom api domain prefix.
        return this._domainResolver.isApiDomainFirstParty || window.gigya.utils.cookie.canSaveCookie();
    };
    ApiService.prototype.sendRequest = function (data) {
        var _this = this;
        return new gigya.Promise(function (resolve, reject) {
            //TODO: handle timeout
            if (!data) {
                var msg = 'ApiService: request data must has methodName and params';
                window.gigya.logger.error(msg);
                return reject(msg);
            }
            var methodName = data.methodName;
            var params = window.gigya.utils.object.clone(data.params, true, true);
            params.pageURL = _this._domainResolver.originDomain;
            if (_this._useStorage) {
                params.gmid = _this._storage.getItem(exports.TokenKeys.GMID);
                params.ucid = _this._storage.getItem(exports.TokenKeys.UCID);
            }
            _this.getApiDomain(methodName).then(function (apiDomain) {
                var request = new _this._requestClass("https://" + apiDomain, methodName, params, function (res) {
                    var json = window.gigya.utils.JSON.serialize(res);
                    if (!window.gigya.utils.JSON.deserialize(json, undefined)) {
                        res = {
                            errorCode: GSErrors_1.GSErrors.INVALID_PARAMETER_FORMAT,
                            errorMessage: "Invalid parameter format." + '\n' + "One of the parameters of this request has been set with a value which is not in the expected format.",
                        };
                    }
                    resolve(res);
                }, data.settings);
                request.send();
            });
        });
    };
    ApiService.prototype.setupWithStorage = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var isGmidExistsInStorage, expirationTime, tokens, ticketRes;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isGmidExistsInStorage = Boolean(this._storage.getItem(exports.TokenKeys.GMID));
                        expirationTime = parseInt(this._storage.getItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME));
                        if (!!isGmidExistsInStorage) return [3 /*break*/, 2];
                        window.gigya.logger.info("getting gmid by endpoint");
                        return [4 /*yield*/, this.getIds()];
                    case 1:
                        tokens = _a.sent();
                        if (!tokens.gcid || !tokens.ucid) {
                            throw "ApiService getIDs: the request to the endpoint failed";
                        }
                        else {
                            window.gigya.logger.info("setting gmid in storage");
                            this._storage.setItem(exports.TokenKeys.GMID, tokens.gcid);
                            this._storage.setItem(exports.TokenKeys.UCID, tokens.ucid);
                            ticketRes = this.createTicketResponse(tokens.gmidTicket);
                            this.updateGmidTicket(ticketRes);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (!window.gigya.utils.validation.isLaterThanNow(expirationTime)) {
                            this.refreshGmidTicketFromServer();
                        }
                        else {
                            window.gigya.logger.info("already has gmid in storage");
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*
        createNew - if no gmidTicket exists, then create a new one instead of returning undefined
         */
    ApiService.prototype.getGmidTicket = function (createNew) {
        if (createNew === void 0) { createNew = false; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var gmidTicket, expirationTime;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gmidTicket = this._storage.getItem(exports.TokenKeys.GMID_TICKET);
                        if (!(!gmidTicket && !createNew)) return [3 /*break*/, 1];
                        return [2 /*return*/, undefined];
                    case 1:
                        expirationTime = parseInt(this._storage.getItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME));
                        if (!(!createNew && gmidTicket && window.gigya.utils.validation.isLaterThanNow(expirationTime))) return [3 /*break*/, 2];
                        return [2 /*return*/, {
                                gmidTicket: gmidTicket,
                                expirationTime: parseInt(this._storage.getItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME)),
                            }];
                    case 2:
                        this.deleteGmidTicket();
                        return [4 /*yield*/, this.refreshGmidTicketFromServer()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiService.prototype.refreshGmidTicketFromServer = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.gigya.logger.info("refreshing gmid ticket");
                        return [4 /*yield*/, this.createGmidTicket(this._storage.getItem(exports.TokenKeys.GMID))];
                    case 1:
                        res = _a.sent();
                        if (res && res.gmidTicket) {
                            this.updateGmidTicket(res);
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiService.prototype.updateGmidTicket = function (ticket) {
        window.gigya.logger.info("updating gmid ticket", ticket);
        this._storage.setItem(exports.TokenKeys.GMID_TICKET, ticket.gmidTicket);
        this._storage.setItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME, String(ticket.expirationTime));
    };
    ApiService.prototype.deleteGmidTicket = function () {
        this._storage.removeItem(exports.TokenKeys.GMID_TICKET);
        this._storage.removeItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME);
    };
    ApiService.prototype.cleanStorage = function () {
        this._storage.removeItem(exports.TokenKeys.GMID);
        this._storage.removeItem(exports.TokenKeys.UCID);
        this.deleteGmidTicket();
    };
    ApiService.prototype.getIds = function () {
        return this.sendRequest({
            methodName: 'socialize.getIDs',
            params: {
                APIKey: this._apiKey,
                includeTicket: true,
            }
        });
    };
    ApiService.prototype.createGmidTicket = function (gmid, expires) {
        var _this = this;
        if (expires === void 0) { expires = window.gigya.partnerSettings.gmidTicketExpiration || 3600; }
        var params = {
            apiKey: this._apiKey,
            expires: expires,
        };
        if (gmid)
            params.gmid = gmid;
        return this.sendRequest({
            methodName: 'socialize.getGmidTicket',
            params: params
        }).then(function (res) {
            if (res && res.gmidTicket) {
                return _this.createTicketResponse(res.gmidTicket);
            }
            else {
                window.gigya.logger.error('Failed to establish gmidTicket', { response: JSON.stringify(res), method: 'socialize.getGmidTicket' });
                _this.deleteGmidTicket();
            }
        });
    };
    ApiService.prototype.createTicketResponse = function (gmidTicket) {
        var currentGmidTicketDate = new Date();
        currentGmidTicketDate.setHours(currentGmidTicketDate.getHours() + GMID_TICKET_EXPIRATION_INTERVAL);
        var expirationTime = currentGmidTicketDate.getTime();
        return {
            gmidTicket: gmidTicket,
            expirationTime: expirationTime,
        };
    };
    return ApiService;
}());
exports.ApiService = ApiService;


/***/ }),

/***/ "./src/core/ApiService/app/GroupApiDomainService.ts":
/*!**********************************************************!*\
  !*** ./src/core/ApiService/app/GroupApiDomainService.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! ../../Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var GroupApiDomainKey = 'apiDomain';
var GroupApiDomainService = /** @class */ (function () {
    function GroupApiDomainService(_ssoKey, _storage, _pageDomain) {
        if (_ssoKey === void 0) { _ssoKey = window.gigya.partnerSettings.ssoKey; }
        if (_storage === void 0) { _storage = window.gigya.utils.localStorage.initializeAdapter(window.gigya.utils.localStorage.CookieStorageAdapter); }
        if (_pageDomain === void 0) { _pageDomain = LocalInfo_1.localInfo.pageDomain; }
        this._ssoKey = _ssoKey;
        this._storage = _storage;
        this._pageDomain = _pageDomain;
        this._cookieName = GroupApiDomainKey + "_" + this._ssoKey;
    }
    GroupApiDomainService.prototype.get = function () {
        return this._ssoKey ? this._storage.getItem(this._cookieName) : undefined;
    };
    GroupApiDomainService.prototype.set = function (apiDomain) {
        if (this._ssoKey) {
            window.gigya.logger.info("setting as group api domain for " + this._ssoKey);
            this._storage.removeItem(this._cookieName);
            this._storage.setItem(this._cookieName, apiDomain, undefined, this._pageDomain);
        }
    };
    return GroupApiDomainService;
}());
exports.GroupApiDomainService = GroupApiDomainService;


/***/ }),

/***/ "./src/core/ApiService/app/JsonpRequest.ts":
/*!*************************************************!*\
  !*** ./src/core/ApiService/app/JsonpRequest.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var GSErrors_1 = __webpack_require__(/*! ../../Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var LocalInfo_1 = __webpack_require__(/*! ../../Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function callback(response, requestId) {
    if (!requestId && response) {
        requestId = response['context'];
    }
    if (!requestId) {
        return;
    }
    var req = pendingRequests[requestId];
    if (req) {
        req.handleResponse(response);
    }
}
exports.callback = callback;
function getRequestId(method, params, settings) {
    var id = settings.jsSdkRequestId;
    if (id) {
        return id;
    }
    if (settings.disableCache || window.gigya.localInfo.isSafari || (window.gigya.localInfo.isIE10 && method.indexOf('accounts.getAccountInfo') > -1)) {
        return 'R' + new Date().getTime() + '_' + Math.random();
    }
    var paramsCopy = window.gigya.utils.object.clone(params);
    for (var param in paramsCopy) {
        if (paramsCopy.hasOwnProperty(param)) {
            if (param.indexOf('fb_') === 0 || param === 'source' || param === 'sourceData') {
                // remove fb session params for caching key
                delete paramsCopy[param];
            }
        }
    }
    return 'R' + window.gigya.utils.object.getMurmurHash(Math.random().toString() + method + window.gigya.utils.object.getHash(paramsCopy));
}
var pendingRequests = {};
var POSTContainerId = "gigyaRequestForms_" + Date.now();
var JsonpRequest = /** @class */ (function () {
    function JsonpRequest(baseDomain, method, params, callback, settings, id) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        if (id === void 0) { id = getRequestId(method, params, settings); }
        this.baseDomain = baseDomain;
        this.method = method;
        this.params = params;
        this.callback = callback;
        this.settings = settings;
        this.id = id;
        this.getUrl = function () { return _this.baseDomain + "/" + _this.method; };
        this.ifrName = 'gigyaPostIframe_' + new Date().getTime();
        this.retry = 0;
    }
    JsonpRequest.prototype.send = function (ignoreCacheTimeout) {
        var _this = this;
        if (this.inProgress) {
            return;
        }
        pendingRequests[this.id] = this;
        this.inProgress = true;
        this.addDefaultParams();
        var paramsString = window.gigya.utils.keyValue.serialize(this.params);
        if (!ignoreCacheTimeout && this.settings.cacheTimeout) {
            var cacheKey = this.getCacheKey();
            window.gigya.utils.sessionCache.get(cacheKey, this.settings.cacheTimeout, function (cachedResponse) {
                if (cachedResponse) {
                    delete _this.settings.cacheTimeout; // Avoid caching it again.
                    callback(cachedResponse, _this.id);
                }
                else {
                    _this.inProgress = false;
                    _this.send(true);
                }
            });
            return;
        }
        var extraLength = 0; //8000;
        var maxLength = 4 * 1024;
        if (window.gigya.localInfo.isIE) {
            extraLength = 2 * 1024;
        }
        if (window.gigya._.Uri.parse(this.getUrl()).href.toLowerCase() !== this.getUrl().toLowerCase()) {
            window.gigya.logger.warn("Aborting Request for " + this.method + ". Path manipulation detected.");
            return;
        }
        var reqUrl = this.getUrl() + "?" + paramsString;
        if (!LocalInfo_1.localInfo.isOnLine() || (reqUrl.length + extraLength <= maxLength && !this.settings.forcePost)) {
            // The result of this script load would be to call Request.className
            window.gigya.utils.script.load(reqUrl, function () {
                callback({
                    context: _this.id,
                    errorCode: GSErrors_1.GSErrors.NETWORK_ERROR,
                    errorMessage: 'Network_error',
                });
            });
        }
        else {
            window.gigya.utils.functions.invokeOnPageLoad(function () {
                var formsContainer = document.getElementById(POSTContainerId);
                if (formsContainer == null) {
                    formsContainer = document.createElement('span');
                    formsContainer.id = POSTContainerId;
                    formsContainer.style.display = 'none';
                    window.gigya.utils.DOM.appendToBody(formsContainer);
                }
                var formDiv = _this.getPostContainer();
                formsContainer.appendChild(formDiv);
                // process will continue on the onLoadEvent of the form created by this.getFormElement()
            });
        }
    };
    JsonpRequest.prototype.handleResponse = function (response) {
        var _this = this;
        if (this.settings.cacheTimeout) {
            window.gigya.utils.sessionCache.set(this.getCacheKey(), response['errorCode'] == GSErrors_1.GSErrors.OK ? response : null);
        }
        if (this.retryTimerID != null) {
            window.clearTimeout(this.retryTimerID);
        }
        this.inProgress = false;
        if (response['errorCode'] == GSErrors_1.GSErrors.Data_Pending) {
            var t = this.getDataPendingTimeout(this.retry++);
            if (t > 0) {
                // retry
                window.setTimeout(function () {
                    _this.send();
                }, t);
                return;
            }
        }
        else {
            this.dispose();
            this.callback(response);
        }
    };
    JsonpRequest.prototype.addDefaultParams = function () {
        this.params['format'] = 'jsonp';
        this.params['callback'] = 'gigya.callback'; // for jsonp callbacks
        this.params['context'] = this.id;
    };
    JsonpRequest.prototype.getCacheKey = function () {
        return this.method + "_" + window.gigya.utils.keyValue.serialize(this.params);
    };
    JsonpRequest.prototype.createParamFormElements = function () {
        var docFragment = document.createDocumentFragment();
        for (var p in this.params) {
            var textAreaElem = window.gigya.utils.DOM.createElementWithAttributes('textarea', {
                name: p,
                value: typeof this.params[p] === 'object' ? window.gigya.utils.URL.URLEncode(window.gigya.utils.JSON.serialize(this.params[p])) : this.params[p],
            });
            docFragment.appendChild(textAreaElem);
        }
        return docFragment;
    };
    JsonpRequest.prototype.getPostContainer = function () {
        var _this = this;
        var postContainerElem;
        if (!this.postContainerElem) {
            postContainerElem = document.createElement('span');
            var formId_1 = this.ifrName + 'form';
            var getSavedResponseId_1 = this.id;
            // Form
            var postCommentForm = window.gigya.utils.DOM.createElementWithAttributes('form', {
                acceptCharset: 'UTF-8',
                id: formId_1,
                method: 'post',
                action: this.getUrl() + "?context=" + this.id + "&&saveResponseID=" + this.id,
                target: this.ifrName,
            });
            var hiddenCommentField = window.gigya.utils.DOM.createElementWithAttributes('input', {
                type: 'hidden',
                name: 'utf8',
                value: '&#x2713;',
            });
            var submitCommentBtn = window.gigya.utils.DOM.createElementWithAttributes('input', {
                type: 'submit',
            });
            postCommentForm.appendChild(this.createParamFormElements());
            postCommentForm.appendChild(hiddenCommentField);
            postCommentForm.appendChild(submitCommentBtn);
            postContainerElem.appendChild(postCommentForm);
            // iframe
            var didSubmitForm_1;
            var elIFrame = window.gigya.utils.DOM.createElement('iframe', this.ifrName);
            elIFrame.setAttribute('id', this.ifrName);
            window.gigya.utils.functions.addSrcToIFrameIfNeeded(elIFrame);
            window.gigya.utils.DOM.addEventListener(elIFrame, 'load', function () {
                // 1. iframe was loaded for the first time, submit the form
                if (!didSubmitForm_1) {
                    window.setTimeout(function () {
                        var form = document.getElementById(formId_1);
                        if (form) {
                            form.submit();
                        }
                    }, 10);
                    didSubmitForm_1 = true;
                }
                else {
                    // 2. form was submitted to the iframe, get saved response
                    _this.getSavedFormResponse(getSavedResponseId_1);
                }
            });
            postContainerElem.appendChild(elIFrame);
            this.postContainerElem = postContainerElem;
        }
        return postContainerElem;
    };
    JsonpRequest.prototype.getSavedFormResponse = function (getSavedResponseId) {
        var _this = this;
        new JsonpRequest(this.baseDomain, 'socialize.getSavedResponse', {
            APIKey: this.params['APIKey'],
            saveResponseID: this.id,
            ucid: this.params['ucid'],
            noAuth: true,
            sdk: 'js_' + window.gigya.build.version,
        }, function (response) {
            _this.handleResponse(response);
        }, undefined, getSavedResponseId).send();
    };
    JsonpRequest.prototype.getDataPendingTimeout = function (retry) {
        if (retry <= 4)
            return 500;
        if (retry <= 4 + 4)
            return 1000;
        if (retry <= 4 + 4 + 13)
            return 2000;
        if (retry <= 4 + 4 + 13 + 18)
            return 5000;
        return -1;
    };
    JsonpRequest.prototype.dispose = function () {
        delete pendingRequests[this.id];
        if (this.postContainerElem) {
            window.gigya.utils.DOM.removeElement(this.postContainerElem);
        }
        delete this.postContainerElem;
    };
    return JsonpRequest;
}());
exports.JsonpRequest = JsonpRequest;


/***/ }),

/***/ "./src/core/ApiService/app/interfaces.ts":
/*!***********************************************!*\
  !*** ./src/core/ApiService/app/interfaces.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Web/app/ApiRequest.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/ApiRequest.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseRequest_1 = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/BaseRequest */ "./src/core/Gigya.Js.Adapters.Web/app/BaseRequest.ts");
var ApiRequest = /** @class */ (function (_super) {
    tslib_1.__extends(ApiRequest, _super);
    function ApiRequest(methodName, params, callback, settings) {
        if (settings === void 0) { settings = {}; }
        var _this = _super.call(this, window.gigya.defaultApiDomain, methodName, params, settings) || this;
        _this.methodName = methodName;
        _this.params = params;
        _this.callback = callback;
        _this.settings = settings;
        return _this;
    }
    ApiRequest.prototype.sendAction = function (ignoreCacheTimeout) {
        window.gigya.utils.object.add(this.params, this.getAuthParams());
        window.gigya._.apiAdapters.web.apiService
            .sendRequest(this.json())
            .then(this.callback)
            .catch(function (err) { return console.error(err); });
    };
    ApiRequest.prototype.json = function () {
        return {
            methodName: this.methodName,
            params: this.params,
            settings: this.settings,
        };
    };
    return ApiRequest;
}(BaseRequest_1.BaseRequest));
exports.ApiRequest = ApiRequest;


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Web/app/BaseRequest.ts":
/*!***********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/BaseRequest.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var TokenStore_1 = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/TokenStore */ "./src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts");
var REQ_MAX_RETRIES = 5;
var BaseRequest = /** @class */ (function () {
    function BaseRequest(baseUrl, methodName, params, settings, _maxTries) {
        if (settings === void 0) { settings = {}; }
        if (_maxTries === void 0) { _maxTries = REQ_MAX_RETRIES; }
        this.baseUrl = baseUrl;
        this.methodName = methodName;
        this.params = params;
        this.settings = settings;
        this._maxTries = _maxTries;
        this._tries = 0;
        this.params['sdk'] = 'js_' + window.gigya.build.version;
    }
    BaseRequest.prototype.getUrl = function () {
        return this.baseUrl + '/' + this.methodName;
    };
    BaseRequest.prototype.send = function (maxRetriesCallback) {
        this._tries++;
        if (this._tries <= this._maxTries) {
            this.sendAction();
        }
        else if (maxRetriesCallback) {
            maxRetriesCallback();
        }
    };
    BaseRequest.prototype.getAuthParams = function () {
        var authParams = {};
        if (this.params['oauth_token']) {
            this.params['authMode'] = 'token';
            // The regToken takes priority over the login token because of SSO.
            // An account may be logged in (login_token) but still be pending reg because of child site schema requirements.
        }
        else if (!this.params['noAuth'] && !this.params['regToken']) {
            var loginToken = TokenStore_1.get(this.params['APIKey']);
            if (loginToken) {
                this.sentLoginToken = loginToken;
                var loginTokenExp = TokenStore_1.getGltexpCookie(this.params['APIKey']);
                if (loginTokenExp != null) {
                    authParams['loginTokenExp'] = loginTokenExp;
                }
                authParams['login_token'] = loginToken;
            }
            authParams['authMode'] = 'cookie';
        }
        delete this.params['noAuth'];
        if (window.gigya.localInfo.isAndroidBrowser) {
            delete this.params['login_token'];
            delete this.params['loginTokenExp'];
            delete this.params['authMode'];
        }
        return authParams;
    };
    return BaseRequest;
}());
exports.BaseRequest = BaseRequest;


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Web/app/OauthRequest.ts":
/*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/OauthRequest.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseRequest_1 = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/BaseRequest */ "./src/core/Gigya.Js.Adapters.Web/app/BaseRequest.ts");
// Single Sign On across multiple domains
var OauthRequest = /** @class */ (function (_super) {
    tslib_1.__extends(OauthRequest, _super);
    function OauthRequest(id, baseUrl, methodName, params, callback, settings) {
        if (settings === void 0) { settings = {}; }
        var _this = _super.call(this, baseUrl, methodName, params, settings) || this;
        _this.id = id;
        _this.baseUrl = baseUrl;
        _this.methodName = methodName;
        _this.params = params;
        _this.callback = callback;
        _this.settings = settings;
        _this.windowName = _this.methodName.replace(/\./g, '_').replace(/\//g, '') + '_' + new Date().getTime();
        _this.requestID = _this.windowName + new Date().getTime();
        return _this;
    }
    OauthRequest.prototype.beforeRequest = function () { };
    OauthRequest.prototype.afterResponse = function (response) {
        if (!response['dontClose'] || response['dontClose'] === 'false') {
            window.gigya.utils.win.close(this.windowName);
        }
        this.callback(response);
    };
    OauthRequest.prototype.getAuthFlow = function () {
        // Force authFlow redirect on Windows Phone.
        if (window.gigya.localInfo.isWindowsPhone || window.gigya.localInfo.isFacebookBrowser) {
            return 'redirect';
        }
        return this.params['authFlow'] ? this.params['authFlow'] : 'popup';
    };
    OauthRequest.prototype.getStateString = function () {
        var lid = window.gigya.utils.xd._flashListenerID;
        if ((window.gigya.thisScript.globalConf['legacyCrossSiteMethod'] && window.gigya.thisScript.globalConf['legacyCrossSiteMethod'].toLowerCase() !== 'localstorage') ||
            (window.gigya.localInfo.isIE && window.navigator['msDoNotTrack'])) {
            lid = window.gigya.thisScript.globalConf['legacyCrossSiteMethod'] + ':' + window.gigya.utils.xd._flashListenerID;
        }
        var authFlow = this.getAuthFlow();
        var state = {
            domain: document.location.href.split('?')[0].split('#')[0],
            id: this.requestID,
            lid: lid,
            messaging: window.gigya.localInfo.messagingMethod,
        };
        if (window.gigya.localInfo.isIE11 && window.indexedDB) {
            state['messaging'] = window.gigya._.MessagingMethod.LocalStorageListener;
        }
        // [#67641] - https://gigya.tpondemand.com/entity/67641-loccitane-social-login-to-line-hangs
        // if provider is Line, use LocalStorageListener because if Line's native app is installed on the device
        // it may "hijack" (deep-link) the OAuth request and prevent the PostMessage mechanism from working.
        if (window.gigya.localInfo.isAndroid && this.params['provider'] && this.params['provider'].toLowerCase() == 'line') {
            state['messaging'] = window.gigya._.MessagingMethod.LocalStorageListener;
        }
        if (authFlow === 'redirect') {
            state['sourceURL'] = window.top.document.location.href;
            if (this.params['redirectURL']) {
                state['redirectURL'] = window.gigya.utils.URL.addParamsToURL(this.params['redirectURL'], {
                    gig_events: window.gigya.events.global.getEventsForOperation(this.methodName),
                });
                if (this.params['redirectMethod']) {
                    state['redirectMethod'] = this.params['redirectMethod'];
                }
                // See #46301 - addUserInfo must only be passed when the user explictly passes a redirectURL.
                state['addUserInfo'] = true;
            }
            else {
                state['sourceURL'] = window.gigya.utils.URL.addParamsToURL(state['sourceURL'], {
                    gig_events: window.gigya.events.global.getEventsForOperation(this.methodName),
                });
            }
        }
        if (this.params['provider'] && this.params['provider'].toLowerCase() == 'facebook') {
            state['invite'] = this.params['invite'];
        }
        return window.gigya.utils.keyValue.serialize(state);
    };
    OauthRequest.prototype.getServerParamsString = function () {
        var serverParams = {};
        for (var paramName in this.params) {
            if (paramName.indexOf('x_') !== 0 && this.params[paramName] != null) {
                serverParams['x_' + paramName] = this.params[paramName];
                delete serverParams[paramName];
            }
        }
        if (serverParams['x_APIKey']) {
            serverParams['client_id'] = serverParams['x_APIKey'];
            delete serverParams['x_APIKey'];
        }
        if (serverParams['x_oauth_token']) {
            serverParams['oauth_token'] = serverParams['x_oauth_token'];
            delete serverParams['x_oauth_token'];
        }
        serverParams['redirect_uri'] = '/GS/AfterLogin.aspx';
        serverParams['response_type'] = this.params['authCodeOnly'] ? 'code' : 'server_token';
        serverParams['x_sdk'] = 'js_' + window.gigya.build.version;
        var refUID = window.gigya.utils.cookie.get('_gigRefUid_' + this.params['APIKey']);
        if (refUID) {
            serverParams['x_refUID'] = refUID;
        }
        serverParams['state'] = this.getStateString();
        window.gigya.utils.object.add(serverParams, this.getAuthParams());
        var gmidTicket = window.gigya._.apiAdapter.getGmidTicket();
        if (gmidTicket) {
            serverParams['gmidTicket'] = gmidTicket;
        }
        delete serverParams['redirectURL']; // we don't need it since it's passed in state params
        this.sentLoginToken = serverParams['login_token'];
        return window.gigya.utils.keyValue.serialize(serverParams);
    };
    OauthRequest.prototype.sendAction = function () {
        var _this = this;
        this.beforeRequest();
        var serverParamsQuerystring = this.getServerParamsString();
        var provider;
        if (this.params['provider']) {
            provider = window.gigya.socialize._getProviderByName(this.params['provider']);
        }
        // Allow location/toolbar to be toggled on.
        var windowOptions = {
            menubar: 0,
            resizable: 1,
            scrollbars: 1,
            width: provider ? provider.width : undefined,
            height: provider ? provider.height : undefined,
        };
        if (this.params['enablePopupLocation']) {
            windowOptions.location = 1;
            windowOptions.toolbar = 1;
        }
        else {
            windowOptions.toolbar = 0;
        }
        var methodNameSplit = this.methodName.split('.');
        var methodName = this.params['originalMethodName'] || methodNameSplit[methodNameSplit.length - 1];
        window.gigya.reports.report(methodName, this.params['APIKey'], this.params['cid'], this.params['source'], this.params['sourceData'], {
            sn: provider ? provider.toString() : null,
        });
        var fullUrl = this.getUrl() + '?' + serverParamsQuerystring;
        if (this.getAuthFlow() === 'redirect') {
            window.top.document.location.href = fullUrl;
        }
        else {
            window.gigya.utils.xd.addMessageListener(this.requestID, this.params, true, function (response) {
                _this.afterResponse(response);
            });
            window.gigya.utils.win.open(fullUrl, this.windowName, windowOptions);
        }
    };
    return OauthRequest;
}(BaseRequest_1.BaseRequest));
exports.OauthRequest = OauthRequest;


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Web/app/SsoBridge.ts":
/*!*********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/SsoBridge.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
// ### Single Sign On across multiple domains ###
var callbackCounter = 0;
exports._requestTimeout = 3000;
function _request(mode, p) {
    if (!window.gigya.partnerSettings.ssoKey) {
        if (p && p.callback) {
            p.callback({});
        }
        return;
    }
    var params;
    if (!p) {
        params = {};
    }
    else {
        // Ensure the params passed are not modified by reference.
        params = window.gigya.utils.object.clone(p);
    }
    var ifr;
    var requestTimeoutId;
    var callback = function (response) {
        window.gigya.logger.debug("cleaning sso iframe");
        // cleanup iframe
        ifr.parentNode.removeChild(ifr);
        clearTimeout(requestTimeoutId);
        // Typecast response.
        if (response) {
            if (response.errorCode && typeof response.errorCode === 'string') {
                response.errorCode = Number(response.errorCode);
            }
            if (response.expires_in && typeof response.expires_in === 'string') {
                response.expires_in = Number(response.expires_in);
            }
        }
        if (p && p.callback) {
            p.callback(response);
        }
    };
    params.m = mode;
    params.d = window.gigya.localInfo.protocol + "://" + document.location.hostname;
    if (document.location.port) {
        params.d += ':' + document.location.port;
    }
    // Chrome caches the fragment when loaded for the first time. workaround:
    params.callbackID = 'gig_sso_cb' + new Date().getTime() + '_' + callbackCounter++;
    params.sAPIKey = window.gigya.thisScript.APIKey;
    params[window.gigya.logger.configKey] = JSON.stringify(window.gigya.logger.getConfig());
    var fragment = window.gigya.utils.keyValue.serialize(params);
    var iframeLoader = function (retries) {
        if (retries === void 0) { retries = 0; }
        window.gigya.utils.xd.addMessageListener(params.callbackID, {}, false, callback, window.gigya._.MessagingMethod.PostMessage);
        ifr = _getIframe(params.callbackID);
        var fnOnLoad = function () {
            requestTimeoutId = setTimeout(function () {
                // total failure
                if (retries <= 0) {
                    window.gigya.logger.error("SSO Communication Timeout", {
                        IE11PrivateMode: window.gigya.localInfo.isIE11 && !window.indexedDB, mode: mode
                    });
                    return;
                }
                // reset
                window.gigya.utils.xd.removeMessageListener(params.callbackID);
                window.gigya.utils.DOM.removeElement(ifr);
                // retry
                iframeLoader(retries - 1);
            }, exports._requestTimeout);
            var qs = window.gigya.utils.keyValue.serialize({
                APIKey: window.gigya.partnerSettings.ssoKey,
                ssoSegment: window.gigya.partnerSettings.ssoSegment || '',
                version: window.gigya.build.version,
                build: window.gigya.build.number || -1,
            });
            // should always load from gigya's domain except when overriden for #50261.
            ifr.src = window.gigya.thisScript.protocol + "://" + (window.gigya.thisScript.globalConf['storageDomainOverride'] || window.gigya._.getGigyaDomain('cdns')) + "/gs/sso.htm?" + qs + "#" + fragment;
            window.gigya.utils.DOM.removeEventListener(ifr, 'load', fnOnLoad);
        };
        window.gigya.utils.DOM.addEventListener(ifr, 'load', fnOnLoad);
        window.gigya.logger.debug("opening sso iframe", params);
        if (document.body) {
            window.gigya.utils.DOM.appendToBody(ifr);
        }
        else {
            window.gigya.utils.functions.invokeOnPageLoad(function () { return window.gigya.utils.DOM.appendToBody(ifr); });
        }
    };
    iframeLoader(3);
}
exports._request = _request;
function _getIframe(requestId) {
    var ifr = document.createElement('iframe');
    // Absolute position with -1000px causes scrolling slowdowns on mobile devices.
    if (window.gigya.localInfo.isIOS || window.gigya.localInfo.isIOSChrome || window.gigya.localInfo.isAndroid) {
        ifr.style.width = '0px';
        ifr.style.height = '0px';
        ifr.style.display = 'none';
    }
    else {
        ifr.style.width = '30px';
        ifr.style.height = '10px';
        ifr.style.position = 'absolute';
        ifr.style.top = '-1000px';
        ifr.style.left = '-1000px';
    }
    ifr.id = 'gig_sso_' + requestId;
    window.gigya.utils.functions.addSrcToIFrameIfNeeded(ifr);
    return ifr;
}
function getGroupToken(params) {
    window.gigya.logger.info("trying to get sso group login token");
    _request('getToken', {
        callback: function (response) {
            exports._storedLoginTokenExp = response.gltexp;
            if (params && params.callback) {
                params.callback(response);
            }
        },
    });
}
exports.getGroupToken = getGroupToken;
function setGroupTokenFromResponse(loginToken, expiresIn, callback) {
    // If left undefined, is session cookie.
    var expiration;
    expiresIn = typeof expiresIn === 'string' && expiresIn ? Number(expiresIn) : expiresIn;
    if (expiresIn === 0) {
        // Session cookie or dynamic session cookie.
        // Either way, flag the expiration as 0.
        expiration = 0;
    }
    else {
        // Calculate the number of milliseconds from now when the cookie should expire.
        var expiresInMs = void 0;
        if (!expiresIn) {
            expiresInMs = 1000 * 60 * 60 * 24 * 365 * 15;
        }
        else {
            expiresInMs = Number(expiresIn) * 1000;
        }
        // Convert expires in milliseconds to an a timestamp (also milliseconds).
        expiration = Date.now() + expiresInMs;
    }
    // Set group token.
    setGroupToken({
        lt: loginToken,
        expiration: expiration,
        callback: callback,
    });
}
exports.setGroupTokenFromResponse = setGroupTokenFromResponse;
function setGroupToken(params) {
    // Add current gltexp cookie to the parameters automatically.
    if (!params.gltexp) {
        params.gltexp = window.gigya.utils.cookie.get("gltexp_" + window.gigya.thisScript.APIKey);
    }
    _request('setToken', params);
}
exports.setGroupToken = setGroupToken;
function logout(params) {
    _request('logout', params);
}
exports.logout = logout;
function removeGroupToken(params) {
    _request('removeToken', params);
}
exports.removeGroupToken = removeGroupToken;
function setLoginTokenExp(params, useCache) {
    if (useCache === void 0) { useCache = true; }
    // Don't store the login token again if we've already stored it.
    if (useCache && exports._storedLoginTokenExp && params.loginTokenExp === exports._storedLoginTokenExp) {
        if (params.callback) {
            params.callback({ gltexp: exports._storedLoginTokenExp });
        }
        return;
    }
    exports._storedLoginTokenExp = params.loginTokenExp;
    _request('setLoginTokenExp', params);
}
exports.setLoginTokenExp = setLoginTokenExp;
function getLoginTokenExp(params) {
    _request('getLoginTokenExp', params);
}
exports.getLoginTokenExp = getLoginTokenExp;
function checkTokenRenew(params) {
    window.gigya.logger.info("verifying login token with sso group");
    _request('checkTokenRenew', params);
}
exports.checkTokenRenew = checkTokenRenew;
function syncCanaryIndication(params) {
    _request('syncCanaryIndication', params);
}
exports.syncCanaryIndication = syncCanaryIndication;
function setGroupContextCookie(params) {
    _request('setGroupContext', params);
}
exports.setGroupContextCookie = setGroupContextCookie;


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var SsoBridge_1 = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/SsoBridge */ "./src/core/Gigya.Js.Adapters.Web/app/SsoBridge.ts");
var GSErrors_1 = __webpack_require__(/*! ../../Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
// Load and save tokens based on API keys
var _curSessionExpiration;
var _triedGACs = {};
exports.activeNamespaces = {};
function isValidGltExp(gltexp) {
    if (gltexp === void 0) { gltexp = getGltexpCookie(); }
    return !gltexp || window.gigya.utils.gltexp.isValid(gltexp);
}
exports.isValidGltExp = isValidGltExp;
function getGltexpCookie(APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    return window.gigya.utils.cookie.get("gltexp_" + APIKey);
}
exports.getGltexpCookie = getGltexpCookie;
function setGltexp(gltexp, APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    if (gltexp && !isGigyaCookieDomain()) {
        window.gigya.utils.cookie.remove("gltexp_" + APIKey);
        window.gigya.utils.cookie.set("gltexp_" + APIKey, gltexp);
    }
}
exports.setGltexp = setGltexp;
function _getTokenCookieName(APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    if (APIKey) {
        return 'glt_' + APIKey;
    }
    else {
        return '_gig_lt';
    }
}
function get(APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    var lt = window.gigya.utils.cookie.get(_getTokenCookieName(APIKey));
    if (lt) {
        return lt.split('|')[0];
    }
    else {
        return null;
    }
}
exports.get = get;
function set(APIKey, login_token, expires_in, sessionExpiration) {
    window.gigya.utils.localStorage.removeItem('gigyaSettings');
    window.gigya.logger.info("setting a new login token");
    if (!APIKey) {
        APIKey = window.gigya.thisScript.APIKey;
    }
    if (APIKey) {
        window.gigya.utils.cookie.set('glt_' + APIKey, login_token, expires_in);
        window.gigya.utils.cookie.remove('gac_' + APIKey);
    }
    else {
        window.gigya.utils.cookie.set('_gig_lt', login_token, expires_in);
    }
    _curSessionExpiration = sessionExpiration;
}
exports.set = set;
function getCurrentSessionExpiration() {
    return _curSessionExpiration;
}
exports.getCurrentSessionExpiration = getCurrentSessionExpiration;
function setFromGAC(params, callback) {
    if (window.gigya.thisScript.APIKey) {
        var gac = window.gigya.utils.cookie.get('gac_' + window.gigya.thisScript.APIKey);
        if (gac && !params['neverTryGAC']) {
            // Sometimes gac is set with surrounding double-quotes (like in java). Strip quotes.
            if (gac.charAt(0) === '"' && gac.charAt(gac.length - 1) === '"') {
                gac = gac.substring(1, gac.length - 1);
            }
            if (_triedGACs[gac]) {
                callback(); // Already tried, don't try again.
                return;
            }
            _triedGACs[gac] = true;
            window.gigya.socialize.updateRefUID();
            window.gigya.socialize.notifyLogin({
                ignoreApiQueue: true,
                neverTryGAC: true,
                authCode: gac,
                APIKey: window.gigya.thisScript.APIKey,
                client_id: window.gigya.thisScript.APIKey
            }, {
                // Intentionally we're not raising onLogin event, as no login was made, just established (verified in bug 43419).
                callback: function () {
                    window.gigya.utils.cookie.remove('gac_' + window.gigya.thisScript.APIKey);
                    callback();
                    // neverTryGAC is used to avoid trying setFromGac forever if the cookie wasn't removed (when a wrong baseDomain is used)
                    window.gigya.socialize.refreshUI({ neverTryGAC: true });
                },
            });
        }
        else {
            callback();
        }
    }
    else {
        callback();
    }
}
exports.setFromGAC = setFromGAC;
function setFromSsoResponse(res, APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    if (!res)
        return;
    switch (res.errorCode) {
        case GSErrors_1.GSErrors.UNAUTHORIZED_USER:
            window.gigya.logger.info("no group session found");
            remove(APIKey);
            break;
        case GSErrors_1.GSErrors.INVALID_TOKEN:
            window.gigya.logger.info("existing group session was revoked");
            remove(APIKey);
            window.gigya.events.global.dispatchWhenHandlerAdded({ eventName: 'accounts.logout' });
            window.gigya.events.global.dispatchWhenHandlerAdded({ eventName: 'logout' });
            break;
        case GSErrors_1.GSErrors.TOKEN_HAS_RENEWED:
        case GSErrors_1.GSErrors.OK:
            if (!res.login_token)
                return;
            window.gigya.logger.info("new session from group");
            var expires_in = void 0;
            var groupContext = void 0;
            if (res.groupContext) {
                groupContext = JSON.parse(res.groupContext);
            }
            if (!isGigyaCookieDomain()) {
                // It should never expire if a gltexp is present.
                expires_in = !res.gltexp ? res.expires_in : window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds();
                // Set login token cookie
                set(APIKey, res.login_token, expires_in);
                var gltexpCookieName = "gltexp_" + APIKey;
                if (res.gltexp && !window.gigya.utils.cookie.get(gltexpCookieName)) {
                    window.gigya.utils.cookie.set(gltexpCookieName, res.gltexp);
                }
            }
            dispatchLoginEvent({ expires_in: expires_in, groupContext: groupContext });
            break;
        default:
            window.gigya.logger.error("sso: unsupported response");
            throw 'gigya: unsupported response from sso';
    }
}
exports.setFromSsoResponse = setFromSsoResponse;
function dispatchLoginEvent(eventParams) {
    var _this = this;
    if (eventParams === void 0) { eventParams = {}; }
    window.gigya.utils.queue.hold('verifyLogin', 'API');
    window.gigya.accounts.verifyLogin({
        ignoreApiQueue: true,
        suppressLoginEvent: true,
        include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues('profile,data', window.gigya.thisScript.globalConf['include']),
        extraProfileFields: 'samlData',
        callback: function (accountInfoRes) {
            window.gigya.utils.queue.release('verifyLogin', 'API'); // release the api queue
            if (accountInfoRes.errorCode == GSErrors_1.GSErrors.OK) {
                window.gigya._.apiAdapters.isSessionFromSso = true;
            }
            // use whatever field you need from accountInfoRes now before accountInfoRes will be overridden (such as 'source')
            var source = accountInfoRes.source;
            window.gigya.events.global.dispatchWhenHandlerAdded({ eventName: 'socialize.login' }, null, function (eventObj, callback) {
                window.gigya.socialize.getUserInfo({
                    signIDs: true,
                    extraFields: 'samlData',
                    callback: function (userInfoRes) {
                        if (!eventObj) {
                            eventObj = {};
                        }
                        eventObj = window.gigya.utils.object.merge([eventObj, eventParams]);
                        if (accountInfoRes.errorCode == GSErrors_1.GSErrors.OK && userInfoRes.errorCode == GSErrors_1.GSErrors.OK) {
                            eventObj = window.gigya._.addUserInfoToEvent(userInfoRes, { eventName: 'login' }, true);
                            // normalizing event fields for backwards compatibility
                            eventObj['source'] = source;
                            eventObj['newUser'] = false;
                            eventObj['provider'] = 'site';
                            eventObj['loginMode'] = 'standard';
                            if (eventObj['user']) {
                                eventObj['user'].errorCode = userInfoRes.errorCode;
                                eventObj['user'].callId = userInfoRes.callId;
                            }
                        }
                        else {
                            eventObj['cancel'] = true;
                        }
                        callback(eventObj);
                    },
                });
            });
            window.gigya.events.global.dispatchWhenHandlerAdded({ eventName: 'accounts.login' }, null, function (eventObj, callback) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!eventObj) {
                                eventObj = {};
                            }
                            eventObj = window.gigya.utils.object.merge([eventObj, eventParams]);
                            if (!(accountInfoRes.errorCode == GSErrors_1.GSErrors.OK)) return [3 /*break*/, 3];
                            eventObj['eventName'] = 'accounts.login';
                            if (!!accountInfoRes.UID) return [3 /*break*/, 2];
                            return [4 /*yield*/, new gigya.Promise(function (r) {
                                    return window.gigya.accounts.getAccountInfo({
                                        callback: r,
                                        include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues('profile,data', window.gigya.thisScript.globalConf['include'])
                                    });
                                })];
                        case 1:
                            accountInfoRes = _a.sent();
                            _a.label = 2;
                        case 2:
                            window.gigya.utils.object.extractProperties(accountInfoRes, eventObj, 'signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|dataCenter|id_token');
                            return [3 /*break*/, 4];
                        case 3:
                            eventObj['cancel'] = true;
                            _a.label = 4;
                        case 4:
                            callback(eventObj);
                            return [2 /*return*/];
                    }
                });
            }); });
        },
    });
}
exports.dispatchLoginEvent = dispatchLoginEvent;
function remove(APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    if (window.gigya.partnerSettings.ssoKey) {
        window.gigya.logger.info("removing group login token");
        SsoBridge_1.removeGroupToken();
    }
    if (get(APIKey)) {
        window.gigya.logger.info("removing login token");
    }
    window.gigya.utils.cookie.remove("glt_" + APIKey);
    window.gigya.utils.cookie.remove('_gig_lt');
    window.gigya.utils.cookie.remove("gltexp_" + APIKey);
}
exports.remove = remove;
function getTokenParam(APIKey, paramName) {
    var lt = window.gigya.utils.cookie.get(_getTokenCookieName(APIKey));
    if (lt) {
        var ltSegs = lt.split('|');
        if (ltSegs.length > 1) {
            return window.gigya.utils.keyValue.deserialize(ltSegs[1])[paramName];
        }
        else {
            return null;
        }
    }
}
exports.getTokenParam = getTokenParam;
function isGigyaCookieDomain() {
    var cookieDomain = window.gigya.utils.cookie.getDefaultDomain();
    return window.gigya.utils.stringUtils.endsWith(cookieDomain, window.gigya.defaultApiDomain);
}


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Web/app/WebAdapter.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/WebAdapter.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var tokenStore = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/TokenStore */ "./src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts");
var ssoBridge = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/SsoBridge */ "./src/core/Gigya.Js.Adapters.Web/app/SsoBridge.ts");
var ApiRequest_1 = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/ApiRequest */ "./src/core/Gigya.Js.Adapters.Web/app/ApiRequest.ts");
var OauthRequest_1 = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/OauthRequest */ "./src/core/Gigya.Js.Adapters.Web/app/OauthRequest.ts");
var ServiceProxy_1 = __webpack_require__(/*! src/core/ServiceProxy/ServiceProxy */ "./src/core/ServiceProxy/ServiceProxy.ts");
var ApiService_1 = __webpack_require__(/*! src/core/ApiService/app/ApiService */ "./src/core/ApiService/app/ApiService.ts");
var GSErrors_1 = __webpack_require__(/*! ../../Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var localStorage_1 = __webpack_require__(/*! ../../Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
if (!window.gigya.isGigya)
    window.gigya.isGigya = true;
exports.webAdapterName = 'Web';
function newApiAdapter(adapterSettings) {
    return new WebAdapter(adapterSettings, new localStorage_1.CookieStorageAdapter());
}
exports.newApiAdapter = newApiAdapter;
var WebAdapter = /** @class */ (function () {
    function WebAdapter(adapterSettings, _storage) {
        this.adapterSettings = adapterSettings;
        this._storage = _storage;
        this.name = exports.webAdapterName;
    }
    WebAdapter.prototype.getStorage = function () {
        return this._storage;
    };
    WebAdapter.prototype.init = function (initCallback, retries) {
        if (retries === void 0) { retries = 0; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var hasBootstrappedCookie, bootstrapIndication, hasBootstrapped, log, _a, _b, info, error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        hasBootstrappedCookie = "gig_bootstrap_" + window.gigya.thisScript.APIKey;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 7]);
                        bootstrapIndication = window.gigya.partnerSettings.customAPIDomainPrefix || 'ver2';
                        hasBootstrapped = this.getStorage().getItem(hasBootstrappedCookie) === bootstrapIndication;
                        window.gigya.logger.info("has bootstrapped: " + hasBootstrapped);
                        log = window.gigya.logger.group('create api service');
                        _a = window.gigya._.apiAdapters.web;
                        _b = this;
                        return [4 /*yield*/, this.createApiService(hasBootstrapped)];
                    case 2:
                        _a.apiService = _b._apiService = _c.sent();
                        log.end();
                        return [4 /*yield*/, this._apiService.bootstrap()];
                    case 3:
                        info = _c.sent();
                        if (info.ticketInfo) {
                            this.setGmidTicket(info.ticketInfo);
                        }
                        else if (!hasBootstrapped) {
                            // if we're not using storage (no ticket) then we must have gmid cookie set
                            this.getStorage().setItem(hasBootstrappedCookie, bootstrapIndication);
                        }
                        window.gigya.utils.functions.createAlias('gigya.auth.loginToken.get', tokenStore.get); // TODO can this be removed?
                        if (window.gigya.partnerSettings.ssoKey && window.gigya.canary && window.gigya.canary.config.probability) {
                            this.syncCanaryWithSSO();
                        }
                        this.isSessionValid(undefined, function (isValid) {
                            if (isValid) {
                                window.gigya.services.accountService.verifyLogin().then(function (loginVerified) {
                                    if (!loginVerified)
                                        window.gigya.events.global.dispatch({ eventName: 'logout,accounts.logout' });
                                });
                            }
                            _this.checkReturnFromURL();
                            window.gigya.logger.info("user is " + (isValid ? '' : 'not ') + "logged-in");
                            if (!window.gigya.partnerSettings.ssoKey) {
                                initCallback();
                            }
                            else {
                                window.gigya.logger.info("sso group sync - " + window.gigya.partnerSettings.ssoKey);
                                var callback = function (e) {
                                    tokenStore.setFromSsoResponse(e);
                                    initCallback();
                                };
                                if (isValid) {
                                    var loginToken = tokenStore.get();
                                    ssoBridge.checkTokenRenew({ loginToken: loginToken, callback: callback });
                                }
                                else {
                                    ssoBridge.getGroupToken({ callback: callback });
                                }
                            }
                        });
                        return [3 /*break*/, 7];
                    case 4:
                        error_1 = _c.sent();
                        if (!(retries > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.init(initCallback, retries - 1)];
                    case 5: return [2 /*return*/, _c.sent()];
                    case 6:
                        window.gigya.logger.error("error bootstrapping sdk", {
                            type: 'bootstrap failed',
                            scope: 'WebAdapter.init',
                            error: error_1
                        });
                        window.gigya.logger.debug("removing bootstrap indication");
                        this.getStorage().removeItem(hasBootstrappedCookie);
                        window.gigya.events.dispatchErrorFromResponse({ eventName: 'init' }, {
                            status: 'FAIL_TO_BOOTSTRAP',
                            statusMessage: 'Web SDK failed to bootstrap',
                            errorCode: 500026,
                            errorMessage: "Web SDK failed to bootstrap: " + (error_1.message || error_1),
                        });
                        initCallback();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    WebAdapter.prototype.syncCanaryWithSSO = function () {
        var _this = this;
        var isCanary = this.getStorage().getItem(window.gigya.canary.config.cookiesNames.isCanary);
        var canaryVersion = this.getStorage().getItem(window.gigya.canary.config.cookiesNames.version);
        ssoBridge.syncCanaryIndication({
            isCanary: isCanary,
            canaryVersion: canaryVersion,
            callback: function (e) {
                if (!e || e.errorCode !== GSErrors_1.GSErrors.OK)
                    return;
                if (e.isCanary && e.isCanary !== isCanary) {
                    _this.getStorage().setItem(window.gigya.canary.config.cookiesNames.isCanary, e.isCanary);
                }
                if (e.canaryVersion && e.canaryVersion !== canaryVersion) {
                    _this.getStorage().setItem(window.gigya.canary.config.cookiesNames.version, e.canaryVersion);
                }
            },
        });
    };
    WebAdapter.prototype.createApiService = function (hasBootstrapped) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var storageDomain, protocol, loggerConfig, apiServiceUrl, apiServiceProxy, initInfo, apiDomain, forceSkipBootstrap;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storageDomain = window.gigya.thisScript.globalConf['storageDomainOverride'] || "cdns." + window.gigya.dataCenter + "." + window.gigya.defaultApiDomain;
                        protocol = window.gigya.thisScript.protocol;
                        loggerConfig = window.gigya.logger.configKey + "=" + encodeURIComponent(JSON.stringify(window.gigya.logger.getConfig()));
                        apiServiceUrl = protocol + "://" + storageDomain + "/gs/webSdk/Api.aspx?apiKey=" + encodeURIComponent(window.gigya.thisScript.APIKey) + "&version=" + window.gigya.build.version + "&build=" + window.gigya.build.number + "#origin=" + document.location.href + "&" + loggerConfig;
                        window.gigya.logger.info("opening api frame");
                        apiServiceProxy = new ServiceProxy_1.ServiceProxy(apiServiceUrl);
                        window.gigya.logger.info("creating api service");
                        return [4 /*yield*/, apiServiceProxy.init()];
                    case 1:
                        initInfo = _a.sent();
                        window.gigya.partnerSettings.plugins.apiDomain = initInfo.apiDomain;
                        window.gigya._.getApiDomain = window.gigya._.apiDomainFactory(initInfo.apiDomain, window.gigya.defaultApiDomain);
                        apiDomain = window.gigya._.Uri.parse(initInfo.apiDomain);
                        window.gigya.logger.info("api domain is: " + apiDomain);
                        window.gigya.logger.info("api domain is " + (initInfo.isGroupApiDomain ? '' : 'not ') + "group domain");
                        forceSkipBootstrap = window.gigya.thisScript.URLParams['bootstrap'] === 'false';
                        // in gigya's domain
                        if (apiDomain.isBaseOf(apiServiceUrl) && !forceSkipBootstrap) {
                            window.gigya.logger.info("api domain is gigya's so keep working with frame");
                            return [2 /*return*/, apiServiceProxy.wrapWith(ApiService_1.ApiService)];
                        }
                        // either prefixed domain or group domain
                        else {
                            window.gigya.logger.info("closing api frame");
                            apiServiceProxy.stop(true); // no need to wait for this
                            if (forceSkipBootstrap) {
                                hasBootstrapped = true;
                            }
                            else if (initInfo.hasGroupApiDomainChanged) {
                                // if group api domain changed, we need to re-bootstrap
                                // (it won't change if the site isn't in sso group)
                                hasBootstrapped = false;
                            }
                            window.gigya.logger.info("create and work with api service from top frame");
                            return [2 /*return*/, new ApiService_1.ApiService(window.gigya.thisScript.APIKey, hasBootstrapped, {
                                    originDomain: location.href,
                                    isGroupApiDomain: initInfo.isGroupApiDomain,
                                    getApiDomain: window.gigya._.getApiDomain,
                                    isApiDomainFirstParty: true,
                                    hasGroupApiDomainChanged: false,
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WebAdapter.prototype.isSessionValid = function (params, callback) {
        if (params === void 0) { params = {}; }
        tokenStore.setFromGAC(params, function () {
            if (callback) {
                var isValid = tokenStore.get(params['APIKey']) != null || params['oauth_token'] != null;
                callback(isValid);
            }
        });
    };
    WebAdapter.prototype.registerForNamespaceEvents = function (namespace) { };
    WebAdapter.prototype.onPluginEvent = function (event) { };
    WebAdapter.prototype.onJSLog = function (logType, logInfo) { };
    WebAdapter.prototype.sendRequest = function (methodName, params, callback, settings) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        this.beforeRequest(methodName, params, settings);
        var fnAfterResponse = function (response, callback) {
            _this.afterResponse(proxyReq, response, function () {
                if (typeof callback === 'function') {
                    callback(window.gigya.utils.object.clone(response, true));
                }
            });
        };
        var proxyReqCallback = function (response) {
            fnAfterResponse(response, callback);
        };
        var proxyReq = new ApiRequest_1.ApiRequest(methodName, params, proxyReqCallback, settings);
        proxyReq.send();
        if (window.gigya._.logoutMethods[methodName] && window.gigya._.logoutBehaviour.logoutBeforeServerResponse) {
            this.clearSession(params);
        }
    };
    WebAdapter.prototype.clearSession = function (params, callback) {
        tokenStore.remove(params['APIKey']);
        if (callback) {
            callback();
        }
    };
    WebAdapter.prototype.setGltexpFromSSO = function (apiKey) {
        if (apiKey === void 0) { apiKey = window.gigya.thisScript.APIKey; }
        if (window.gigya.partnerSettings.ssoKey && !tokenStore.isValidGltExp()) {
            return new gigya.Promise(function (resolve) {
                ssoBridge.getLoginTokenExp({
                    callback: function (e) {
                        var hasGltexpChanged = false;
                        if (e && e.errorCode == GSErrors_1.GSErrors.OK && e.gltexp && tokenStore.isValidGltExp(e.gltexp)) {
                            tokenStore.setGltexp(e.gltexp);
                            hasGltexpChanged = true;
                        }
                        resolve(hasGltexpChanged);
                    },
                });
            });
        }
        else {
            return gigya.Promise.resolve(false);
        }
    };
    WebAdapter.prototype.sendOauthRequest = function (methodName, params, callback, settings) {
        var _this = this;
        this.beforeRequest(methodName, params, settings);
        var baseUrl = "https://" + window.gigya._.getApiDomain('socialize');
        var req = new OauthRequest_1.OauthRequest('', baseUrl, methodName, params, function (response) {
            _this.afterResponse(req, response, function (res) {
                if (res.errorCode != '0') {
                    callback(res);
                }
                else {
                    // social login (oauth request) makes gigya's domain visited so we re-bootstrap.
                    _this._apiService.bootstrap().then(function (info) {
                        // now visited, the ticketInfo should be empty to clean the gmidTicket.
                        _this.setGmidTicket(info.ticketInfo);
                        callback(res);
                    });
                }
            });
        }, settings);
        req.send();
    };
    WebAdapter.prototype.beforeRequest = function (methodName, params, settings) {
        if (settings === void 0) { settings = {}; }
        if (settings.clearSession || (settings.clearSessionCondition && settings.clearSessionCondition(params))) {
            window.gigya.logger.info("clearing session before request for " + methodName);
            tokenStore.remove(params['APIKey']);
        }
    };
    WebAdapter.prototype.afterResponse = function (req, response, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(response.errorDetails == 'Missing cookie')) return [3 /*break*/, 2];
                        window.gigya.logger.info("missing cookie error - forcing bootstrap");
                        return [4 /*yield*/, this._apiService.bootstrap(true)];
                    case 1:
                        _a.sent();
                        window.gigya.logger.info("resending request");
                        req.send();
                        return [2 /*return*/];
                    case 2:
                        this.handleTokenResponse(req, response, function () {
                            _this.logoutSsoIfNeeded(req, response, function () {
                                callback(response);
                            });
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WebAdapter.prototype.onSDKEvent = function (eventObject) { };
    WebAdapter.prototype.getTokenParam = function (APIKey, paramName) {
        return tokenStore.getTokenParam(APIKey, paramName);
    };
    WebAdapter.prototype.checkReturnFromURL = function () {
        // Check if coming back from authflow redirect
        var oURLParams = window.gigya.utils.URL.getParamsFromURL(document.location.href);
        if (!oURLParams['gig_events']) {
            return;
        }
        if (oURLParams['errorCode'] == GSErrors_1.GSErrors.OK && tokenStore.get() != null) {
            window.gigya.logger.info("returned from redirection with error code");
            ssoBridge.setGroupTokenFromResponse(tokenStore.get(), oURLParams['expires_in'], function (response) {
                var events = oURLParams['gig_events'].split(',');
                // Accounts is enabled
                if (window.gigya.utils.array.indexOf(events, 'accounts.login') !== -1) {
                    window.gigya.accounts.getAccountInfo({
                        extraProfileFields: 'samlData',
                        include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues('profile,data,userinfo', window.gigya.thisScript.globalConf['include']),
                        callback: function (accountInfoRes) {
                            var accountsEvent = {
                                errorCode: 0,
                                eventName: 'accounts.login',
                            };
                            window.gigya.utils.object.extractProperties(accountInfoRes, accountsEvent, 'signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|id_token');
                            window.gigya.events.global.dispatchWhenHandlerAdded(accountsEvent);
                            if (window.gigya.utils.array.indexOf(events, 'socialize.login') !== -1) {
                                var socializeEvent = window.gigya._.addUserInfoToEvent(accountInfoRes, {
                                    errorCode: 0,
                                    eventName: 'socialize.login',
                                }, true);
                                window.gigya.events.global.dispatchWhenHandlerAdded(socializeEvent);
                            }
                        },
                    });
                }
                else {
                    window.gigya.socialize.getUserInfo({
                        signIDs: true,
                        extraFields: 'samlData',
                        callback: function (userInfoRes) {
                            for (var i = 0; i < events.length; i++) {
                                var oEvent = window.gigya._.addUserInfoToEvent(userInfoRes, {
                                    errorCode: 0,
                                    eventName: events[i],
                                }, true);
                                window.gigya.events.global.dispatchWhenHandlerAdded(oEvent);
                            }
                        },
                    });
                }
            });
        }
    };
    WebAdapter.prototype.setNewLoginTokenFromResponse = function (req, response, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newLoginToken, expiresIn, sessionExpiration;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newLoginToken = response['sessionInfo'] ? response['sessionInfo']['login_token'] : response['login_token'];
                        if (!newLoginToken) return [3 /*break*/, 3];
                        if (!this.isFakeToken(newLoginToken)) return [3 /*break*/, 2];
                        window.gigya.logger.info("fake login token returned (no gmid) - forcing bootstrap");
                        return [4 /*yield*/, this._apiService.bootstrap(true)];
                    case 1:
                        _a.sent();
                        window.gigya.logger.info("resending the login request");
                        req.send();
                        return [2 /*return*/];
                    case 2:
                        expiresIn = response['sessionInfo'] != null ? response['sessionInfo']['expires_in'] : response['expires_in'];
                        sessionExpiration = req.params['sessionExpiration'];
                        if ((!expiresIn || expiresIn == 0) && sessionExpiration < 0) {
                            expiresIn = window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds();
                        }
                        tokenStore.set(req.params['APIKey'], newLoginToken, expiresIn, sessionExpiration);
                        this.getStorage().removeItem("gltexp_" + req.params['APIKey']); // Clear cookie, will propagate into SSO store.
                        window.gigya.reports.trackAddressBarShares();
                        ssoBridge.setGroupTokenFromResponse(newLoginToken, expiresIn, callback);
                        return [3 /*break*/, 4];
                    case 3:
                        callback();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WebAdapter.prototype.isFakeToken = function (token) {
        return token.split('.')[1] == 'ffs';
    };
    WebAdapter.prototype.onInvalidTokenResponse = function (req, callback) {
        var _this = this;
        if (req.paramsLoginToken) {
            // Do not attempt to retry if loginToken was provided from the parameters
            callback();
            return;
        }
        // An invalid login token was sent
        ssoBridge.getGroupToken({
            callback: function (tokenResponse) {
                // A new token was received from SSO hub, let's retry with it and there was no specific request to an explicit login token.
                if (tokenResponse && tokenResponse.login_token && tokenResponse.login_token.split('|')[0] !== req.sentLoginToken && !req.paramsLoginToken) {
                    _this._apiService.bootstrap().then(function (result) {
                        tokenStore.setFromSsoResponse(tokenResponse, req.params['APIKey']);
                        req.params['login_token'] = undefined; // remove the login token from previous attempt
                        req.send();
                    }, function (error) { });
                }
                else {
                    tokenStore.remove(req.params['APIKey']);
                    // If the method doesn't require a session, try again without a login token.
                    if (!req.settings.requiresSession()) {
                        delete req.params['login_token'];
                        delete req.sentLoginToken;
                        req.send(callback);
                    }
                    else {
                        callback();
                    }
                }
            },
        });
    };
    WebAdapter.prototype.handleTokenResponse = function (req, res, callback) {
        var _this = this;
        res = window.gigya.utils.object.clone(res);
        if (res['errorCode'] == GSErrors_1.GSErrors.SESSION_EXPIRED_RETRY) {
            // Session_expired_retry - when a provider session expires.
            // The method should deal with retry when provider SDK is up.
            if (this.shouldWaitForService(req, res)) {
                return;
            }
        }
        else if (res['errorCode'] == GSErrors_1.GSErrors.INVALID_GMID_TICKET) {
            // Invalid_gmid_ticket
            this._gmidTicket = null;
            window.gigya.utils.localStorage.removeItem('_gig_gmidt');
        }
        if (req.sentLoginToken && window.gigya._.logoutMethods[req.methodName] && res['errorCode'] == GSErrors_1.GSErrors.OK && res['logoutActiveSession']) {
            this.clearSession(req.params);
        }
        // Persist dynamic expiration signature to SSO if necessary.
        if (window.gigya.partnerSettings.ssoKey && req.sentLoginToken && res['errorCode'] == GSErrors_1.GSErrors.OK && req.params['loginTokenExp']) {
            ssoBridge.setLoginTokenExp({
                loginTokenExp: req.params['loginTokenExp'],
            });
        }
        this.setNewLoginTokenFromResponse(req, res, function () {
            if (req.sentLoginToken && res['errorCode'] == GSErrors_1.GSErrors.UNAUTHORIZED_USER) {
                _this.onInvalidTokenResponse(req, callback);
            }
            else {
                callback();
            }
        });
    };
    WebAdapter.prototype.logoutSsoIfNeeded = function (req, res, callback) {
        var _this = this;
        if (window.gigya.partnerSettings.ssoKey && window.gigya._.logoutMethods[req.methodName] && res['errorCode'] == GSErrors_1.GSErrors.OK && res['logoutActiveSession']) {
            // We need to logout from SSO hub when logging out
            if (document.location.href != window.gigya.partnerSettings.ssoLogoutUrl) {
                ssoBridge.logout({
                    callback: function (e) {
                        // Load site's logoutURLs to remove loginToken cookies and allow partners to remove their session cookies
                        var removeAfter;
                        if (req.params['sustainLogoutURLs'] !== undefined) {
                            removeAfter = !req.params['sustainLogoutURLs'];
                        }
                        _this.loadLogoutUrls(e['logoutURLs'], callback, {
                            UID: res['UID'],
                            UIDSignature: res['UIDSignature'],
                            signatureTimestamp: res['signatureTimestamp'],
                        }, removeAfter);
                    },
                });
            }
            else {
                callback();
            }
        }
        else {
            callback();
        }
    };
    WebAdapter.prototype.loadLogoutUrls = function (logoutUrlsList, callback, queryStringParams, removeAfter) {
        var loadedLength = 0;
        var logoutUrls = logoutUrlsList ? logoutUrlsList.split(',') : [];
        var fnLoaded = function () {
            loadedLength++;
            if (loadedLength > logoutUrls.length) {
                callback();
            }
        };
        for (var i = 0; i < logoutUrls.length; i++) {
            if (!logoutUrls[i]) {
                fnLoaded(); // mark site as loaded if no url to go to
                continue;
            }
            var url = window.gigya.utils.URL.addParamsToURL(logoutUrls[i], queryStringParams);
            this.loadLogoutUrl(url, fnLoaded, removeAfter);
        }
        fnLoaded(); // make sure call is made at least once even if logout URLs list is empty
    };
    WebAdapter.prototype.loadLogoutUrl = function (url, callback, removeAfter) {
        if (removeAfter === void 0) { removeAfter = 5000; }
        var ifr = document.createElement('iframe');
        ifr.src = url;
        ifr.style.position = 'absolute';
        ifr.style.top = '-1000px';
        ifr.style.left = '-1000px';
        var loaded = false;
        var onIfrLoaded = function () {
            loaded = true;
            if (removeAfter !== false) {
                ifr.parentElement.removeChild(ifr);
            }
            callback();
        };
        window.setTimeout(function () {
            if (!loaded) {
                onIfrLoaded();
            }
        }, removeAfter);
        ifr.onload = function () {
            onIfrLoaded();
        };
        window.gigya.utils.DOM.appendToBody(ifr);
    };
    WebAdapter.prototype.shouldWaitForService = function (request, response) {
        if (request.params['retryPossible']) {
            request.params['retryPossible'] = false;
            window.gigya.external.facebook.runWhenLoaded(function () {
                request.send();
            });
            return true;
        }
        return false;
    };
    WebAdapter.prototype.getGmidTicket = function () {
        if (this._gmidTicket) {
            // if it exists, each time we use gmidTicket we need to refresh it.
            this.refreshGmidTicket();
        }
        return this._gmidTicket;
    };
    WebAdapter.prototype.refreshGmidTicket = function () {
        var _this = this;
        this._apiService.getGmidTicket(true).then(function (gmidTicketData) { return _this.setGmidTicket(gmidTicketData); });
    };
    WebAdapter.prototype.setGmidTicket = function (gmidTicketData) {
        var _this = this;
        if (!gmidTicketData || !gmidTicketData.gmidTicket) {
            window.gigya.logger.info('clean gmidTicket');
            delete this._gmidTicket;
        }
        else {
            window.gigya.logger.info('set gmidTicket (set auto-refresh)');
            this._gmidTicket = gmidTicketData.gmidTicket;
            var nextRuntimeInterval = this.calculateGmidTicketNextRun(gmidTicketData.expirationTime);
            setTimeout(function () { return _this.refreshGmidTicket(); }, nextRuntimeInterval);
        }
    };
    WebAdapter.prototype.calculateGmidTicketNextRun = function (expirationTime) {
        var gmidTicketExpirationTime = new Date(expirationTime).getTime();
        return gmidTicketExpirationTime - new Date().getTime();
    };
    return WebAdapter;
}());
exports.WebAdapter = WebAdapter;


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Web/app/functions.ts":
/*!*********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/functions.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var TokenStore_1 = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/TokenStore */ "./src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts");
var SsoBridge_1 = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/SsoBridge */ "./src/core/Gigya.Js.Adapters.Web/app/SsoBridge.ts");
var allowedResidencies = ["us1", "eu1", "au1", "ru1", "cn1", "il1"];
function setAccountResidency(dataCenter) {
    if (dataCenter && allowedResidencies.indexOf(dataCenter.toLowerCase()) == -1)
        return window.gigya.logger.warn('invalid residency', { dataCenter: dataCenter });
    window.gigya.globalAccount.dataCenter = dataCenter;
}
exports.setAccountResidency = setAccountResidency;
function setGroupContext(groupContext) {
    SsoBridge_1.setGroupContextCookie({ groupContext: groupContext });
}
exports.setGroupContext = setGroupContext;
function setSSOToken() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
        var params, redirectURL;
        return tslib_1.__generator(this, function (_a) {
            params = window.gigya.utils.object.merge([window.gigya.thisScript.globalConf, args]);
            redirectURL = params['redirectURL'] || document.location.href;
            window.gigya.utils.HTTP.redirect(redirectURL, [{}], 'GET', '_top');
            return [2 /*return*/];
        });
    });
}
exports.setSSOToken = setSSOToken;
function syncGroupGltExp(gltexp) {
    if (gltexp === void 0) { gltexp = TokenStore_1.getGltexpCookie(); }
    if (!window.gigya.partnerSettings.ssoKey)
        return gigya.Promise.resolve();
    return new gigya.Promise(function (resolve) {
        return SsoBridge_1.setLoginTokenExp({
            loginTokenExp: gltexp,
            callback: resolve,
        }, false);
    }).then(function (res) {
        var hasChanged = res.gltexp && res.gltexp !== gltexp;
        if (hasChanged) {
            TokenStore_1.setGltexp(res.gltexp);
        }
        return {
            hasChanged: hasChanged,
            oldExpiration: window.gigya.utils.gltexp.getMillis(gltexp),
            newExpiration: window.gigya.utils.gltexp.getMillis(res.gltexp || gltexp),
        };
    });
}
exports.syncGroupGltExp = syncGroupGltExp;


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Web/index.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var ServicesProxyInterfaces = __webpack_require__(/*! src/core/ServiceProxy/interfaces */ "./src/core/ServiceProxy/interfaces.ts");
var ProxyListener = __webpack_require__(/*! src/core/ServiceProxy/ProxyListener */ "./src/core/ServiceProxy/ProxyListener.ts");
var ServiceProxy = __webpack_require__(/*! src/core/ServiceProxy/ServiceProxy */ "./src/core/ServiceProxy/ServiceProxy.ts");
var ServicesProxyUtils = __webpack_require__(/*! src/core/ServiceProxy/utils */ "./src/core/ServiceProxy/utils.ts");
var ApiService = __webpack_require__(/*! src/core/ApiService/app/ApiService */ "./src/core/ApiService/app/ApiService.ts");
var GroupApiDomainService = __webpack_require__(/*! src/core/ApiService/app/GroupApiDomainService */ "./src/core/ApiService/app/GroupApiDomainService.ts");
var ApiServiceInterfaces = __webpack_require__(/*! src/core/ApiService/app/interfaces */ "./src/core/ApiService/app/interfaces.ts");
var JsonpRequest = __webpack_require__(/*! src/core/ApiService/app/JsonpRequest */ "./src/core/ApiService/app/JsonpRequest.ts");
var ApiRequest = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/ApiRequest */ "./src/core/Gigya.Js.Adapters.Web/app/ApiRequest.ts");
var BaseRequest = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/BaseRequest */ "./src/core/Gigya.Js.Adapters.Web/app/BaseRequest.ts");
var Functions = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/functions */ "./src/core/Gigya.Js.Adapters.Web/app/functions.ts");
var OauthRequest = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/OauthRequest */ "./src/core/Gigya.Js.Adapters.Web/app/OauthRequest.ts");
var SSOBridge = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/SsoBridge */ "./src/core/Gigya.Js.Adapters.Web/app/SsoBridge.ts");
var TokenStore = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/TokenStore */ "./src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts");
var WebAdapter = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/WebAdapter */ "./src/core/Gigya.Js.Adapters.Web/app/WebAdapter.ts");
if (!window.gigya.services) {
    window.gigya.services = {};
}
if (!window.gigya.services.proxy) {
    window.gigya.services.proxy = {};
}
if (!window.gigya.services.proxy.utils) {
    window.gigya.services.proxy.utils = {};
}
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.apiAdapters) {
    window.gigya._.apiAdapters = {};
}
if (!window.gigya._.apiAdapters.web) {
    window.gigya._.apiAdapters.web = {};
}
if (!window.gigya._.apiAdapters.web.sso) {
    window.gigya._.apiAdapters.web.sso = {};
}
if (!window.gigya._.apiAdapters.web.tokenStore) {
    window.gigya._.apiAdapters.web.tokenStore = {};
}
__webpack_provided_Object_dot_assign(window.gigya.services.proxy, ServicesProxyInterfaces, ProxyListener, ServiceProxy);
__webpack_provided_Object_dot_assign(window.gigya.services.proxy.utils, ServicesProxyUtils);
__webpack_provided_Object_dot_assign(window.gigya.services, ApiService, GroupApiDomainService, ApiServiceInterfaces);
__webpack_provided_Object_dot_assign(window.gigya, JsonpRequest);
__webpack_provided_Object_dot_assign(window.gigya._.apiAdapters.web, ApiRequest, BaseRequest, Functions, OauthRequest, WebAdapter);
__webpack_provided_Object_dot_assign(window.gigya._.apiAdapters.web.sso, SSOBridge);
__webpack_provided_Object_dot_assign(window.gigya._.apiAdapters.web.tokenStore, TokenStore);
window.gigya.setGroupContext = window.gigya._.apiAdapters.web.setGroupContext;
window.gigya.setSSOToken = window.gigya._.apiAdapters.web.setSSOToken;
window.gigya.syncGroupGltExp = window.gigya._.apiAdapters.web.syncGroupGltExp;
window.gigya.setAccountResidency = window.gigya._.apiAdapters.web.setAccountResidency;

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

/***/ "./src/core/ServiceProxy/ProxyListener.ts":
/*!************************************************!*\
  !*** ./src/core/ServiceProxy/ProxyListener.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils = __webpack_require__(/*! src/core/ServiceProxy/utils */ "./src/core/ServiceProxy/utils.ts");
var interfaces_1 = __webpack_require__(/*! src/core/ServiceProxy/interfaces */ "./src/core/ServiceProxy/interfaces.ts");
var ProxyListener = /** @class */ (function () {
    function ProxyListener(_service, origin, _allowedMethods, _target, _win) {
        var _this = this;
        if (origin === void 0) { origin = utils.getParentUrl(); }
        if (_allowedMethods === void 0) { _allowedMethods = utils.getAllClassMethodsNames(_service); }
        if (_target === void 0) { _target = window.parent; }
        if (_win === void 0) { _win = window; }
        this._service = _service;
        this.origin = origin;
        this._allowedMethods = _allowedMethods;
        this._target = _target;
        this._win = _win;
        this.stopCancellers = [];
        this._listening = false;
        this.onRequest = function (e) { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var req, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!utils.validateOrigin(this.origin, e.origin)) return [3 /*break*/, 7];
                        req = JSON.parse(e.data);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!interfaces_1.isSignalRequest(req)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.handleSignalRequest(req)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: 
                    // normal request
                    return [4 /*yield*/, this.handleProxyRequest(req)];
                    case 4:
                        // normal request
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        this.postError({ res: e_1.message || e_1, id: req.id });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    }
    Object.defineProperty(ProxyListener.prototype, "isListening", {
        get: function () {
            return this._listening;
        },
        enumerable: true,
        configurable: true
    });
    ProxyListener.prototype.listen = function (payload) {
        var _this = this;
        if (!this.isListening) {
            this._win.setTimeout(function () {
                // setTimeout workaround for IE9. else we'll get JSON is undefined
                _this._win.addEventListener('message', _this.onRequest, true);
                _this.postMessage({
                    id: undefined,
                    signal: 'listening',
                    res: payload,
                });
                _this._listening = true;
            }, 1);
        }
    };
    ProxyListener.prototype.stopListen = function () {
        if (this.isListening) {
            this._win.removeEventListener('message', this.onRequest, true);
            this._listening = false;
        }
    };
    ProxyListener.prototype.handleSignalRequest = function (req) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _a, cancel, res, payload;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.signal;
                        switch (_a) {
                            case 'stop': return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.getCancelResult()];
                    case 2:
                        cancel = _b.sent();
                        res = void 0;
                        if (!!cancel) return [3 /*break*/, 5];
                        this.stopListen();
                        payload = void 0;
                        if (!this.onStop) return [3 /*break*/, 4];
                        payload = this.onStop();
                        if (!payload.then) return [3 /*break*/, 4];
                        return [4 /*yield*/, payload];
                    case 3:
                        payload = _b.sent();
                        _b.label = 4;
                    case 4:
                        res = {
                            id: req.id,
                            signal: 'stop',
                            res: payload,
                        };
                        return [3 /*break*/, 6];
                    case 5:
                        res = {
                            id: req.id,
                            signal: 'error',
                            res: cancel,
                        };
                        _b.label = 6;
                    case 6:
                        this.postMessage(res);
                        return [3 /*break*/, 8];
                    case 7: 
                    // ignore
                    return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ProxyListener.prototype.getCancelResult = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _i, _a, shouldCancelStop, res;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.stopCancellers;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        shouldCancelStop = _a[_i];
                        res = shouldCancelStop();
                        if (!res.then) return [3 /*break*/, 3];
                        return [4 /*yield*/, res];
                    case 2:
                        res = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (res)
                            return [2 /*return*/, res];
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/, undefined];
                }
            });
        });
    };
    ProxyListener.prototype.handleProxyRequest = function (req) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateRequest(req);
                        return [4 /*yield*/, this.forwardToService(req)];
                    case 1:
                        res = _a.sent();
                        this.postMessage({
                            id: req.id,
                            res: res,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProxyListener.prototype.validateRequest = function (req) {
        if (!req.id || !req.methodName || this._allowedMethods.indexOf(req.methodName) < 0) {
            throw 'proxy request in invalid format';
        }
    };
    ProxyListener.prototype.forwardToService = function (req) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var method, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = this._service[req.methodName];
                        result = method.apply(this._service, req.params);
                        if (!(result && result.then)) return [3 /*break*/, 2];
                        return [4 /*yield*/, result];
                    case 1:
                        result = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, result];
                }
            });
        });
    };
    ProxyListener.prototype.postMessage = function (msg) {
        var message = typeof msg === 'object' ? JSON.stringify(msg) : msg;
        this._target.postMessage(message, this.origin);
    };
    ProxyListener.prototype.postError = function (err) {
        err.signal = 'error';
        this.postMessage(err);
    };
    return ProxyListener;
}());
exports.ProxyListener = ProxyListener;


/***/ }),

/***/ "./src/core/ServiceProxy/ServiceProxy.ts":
/*!***********************************************!*\
  !*** ./src/core/ServiceProxy/ServiceProxy.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils = __webpack_require__(/*! src/core/ServiceProxy/utils */ "./src/core/ServiceProxy/utils.ts");
var ServiceProxy = /** @class */ (function () {
    function ServiceProxy(url, timeout, _idCreator, _iframeCreator, getIframeHost, _win) {
        var _this = this;
        if (timeout === void 0) { timeout = 60000; }
        if (_idCreator === void 0) { _idCreator = utils.generateId; }
        if (_iframeCreator === void 0) { _iframeCreator = utils.createIframe; }
        if (getIframeHost === void 0) { getIframeHost = function () {
            return new gigya.Promise(function (resolve) {
                if (document.body)
                    resolve(document.body);
                else
                    document.addEventListener('DOMContentLoaded', function () { return resolve(document.body); });
            });
        }; }
        if (_win === void 0) { _win = window; }
        this.url = url;
        this.timeout = timeout;
        this._idCreator = _idCreator;
        this._iframeCreator = _iframeCreator;
        this.getIframeHost = getIframeHost;
        this._win = _win;
        this._pendingReqs = [];
        this._mutationObservers = [];
        this.onResponse = function (e) {
            // arrow function to preserve context
            var msg = window.gigya.utils.JSON.parse(e.data);
            if (msg && _this._pendingReqs[msg.id] && _this.validateOrigin(e.origin)) {
                _this._pendingReqs[msg.id](msg);
                delete _this._pendingReqs[msg.id];
            }
        };
    }
    Object.defineProperty(ServiceProxy.prototype, "isInit", {
        get: function () {
            return Boolean(this._iframe);
        },
        enumerable: true,
        configurable: true
    });
    ServiceProxy.prototype.init = function () {
        var _this = this;
        if (this.isInit)
            return gigya.Promise.reject('proxy already initialized');
        else
            return new gigya.Promise(function (resolve, reject) {
                _this._iframe = _this._iframeCreator();
                _this._iframe.src = _this.url;
                _this.getIframeHost().then(function (host) {
                    _this._iframeHost = host;
                    _this._iframeHost.appendChild(_this._iframe);
                    if (window.gigya.logger.isEnabled) {
                        // observe iframe removal only if gigya.logger is explicitly enabled
                        _this.startObservingIFrameRemoval();
                    }
                    var timeoutId = _this._win.setTimeout(function () { return reject('proxy init timeout'); }, _this.timeout);
                    var onInitResponse = function (e) {
                        if (_this.validateOrigin(e.origin)) {
                            var response = JSON.parse(e.data);
                            if (response.signal) {
                                _this._win.clearTimeout(timeoutId);
                                _this._win.removeEventListener('message', onInitResponse, true);
                                switch (response.signal) {
                                    case 'listening':
                                        _this._win.addEventListener('message', _this.onResponse, true);
                                        resolve(response.res);
                                        break;
                                    case 'error':
                                    case 'stop':
                                        reject(response.res);
                                        break;
                                    default:
                                        reject('unsupported response');
                                        break;
                                }
                            }
                        }
                    };
                    _this._win.addEventListener('message', onInitResponse, true);
                });
            });
    };
    ServiceProxy.prototype.validateOrigin = function (checked) {
        return utils.validateOrigin(this._iframe.src, checked);
    };
    ServiceProxy.prototype.postToIFrame = function (req) {
        var onMsgResponse = this.registerMessage(req);
        var message = typeof req === 'object' ? JSON.stringify(req) : req;
        this._iframe.contentWindow.postMessage(message, this._iframe.src);
        return onMsgResponse;
    };
    ServiceProxy.prototype.registerMessage = function (req, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = this.timeout; }
        return new gigya.Promise(function (resolve, reject) {
            var timeoutId = _this._win.setTimeout(function () {
                reject('proxy request timeout');
            }, timeout);
            _this._pendingReqs[req.id] = function (e) {
                _this._win.clearTimeout(timeoutId);
                if (e.signal === 'error') {
                    reject(e.res);
                }
                else {
                    resolve(e.res);
                }
            };
        });
    };
    ServiceProxy.prototype.sendRequest = function (methodName, params) {
        return this.postToIFrame({
            id: this._idCreator(),
            methodName: methodName,
            params: params,
        });
    };
    ServiceProxy.prototype.stop = function (forceClose) {
        if (forceClose === void 0) { forceClose = false; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var error, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isInit) return [3 /*break*/, 1];
                        throw 'proxy is not active';
                    case 1:
                        error = void 0;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.postToIFrame({
                                id: this._idCreator(),
                                signal: 'stop',
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        e_1 = _a.sent();
                        error = e_1;
                        throw e_1;
                    case 5:
                        if (!error || forceClose) {
                            if (this._mutationObservers && this._mutationObservers.length) {
                                // disconnect mutation observers, if any.
                                this.stopObservingIFrameRemoval();
                            }
                            this._win.removeEventListener('message', this.onResponse, true);
                            this._iframeHost.removeChild(this._iframe);
                            delete this._iframe;
                        }
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ServiceProxy.prototype.wrapWith = function (type) {
        var keys;
        if (typeof type === 'function')
            keys = utils.getAllClassMethodsNames(type);
        else if (type instanceof Array)
            keys = type;
        else if (typeof type === 'object')
            keys = Object.keys(type);
        //.concat(getAllClassMethodsNames(Object.getPrototypeOf(type)));
        else
            throw 'unsupported type for wrapper';
        return this.proxyFromKeys(keys);
    };
    ServiceProxy.prototype.proxyFromKeys = function (keys) {
        var _this = this;
        var proxy = {};
        keys.forEach(function (key) { return (proxy[key] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.sendRequest(key, args);
        }); });
        return proxy;
    };
    ServiceProxy.prototype.startObservingIFrameRemoval = function () {
        var targetNode = this._iframe;
        while (targetNode.parentElement) {
            // observe the iframe and its parents (iframe,body)
            this.addMutationObserver(targetNode);
            targetNode = targetNode.parentElement;
        }
    };
    ServiceProxy.prototype.stopObservingIFrameRemoval = function () {
        this._mutationObservers.forEach(function (observer) {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        });
        this._mutationObservers = [];
    };
    ServiceProxy.prototype.addMutationObserver = function (targetNode) {
        var _this = this;
        var mutationCallback = function (mutationsList) {
            for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {
                var mutation = mutationsList_1[_i];
                if (mutation.type == 'childList' && mutation.removedNodes.length) {
                    // A child node has been removed.
                    for (var i = 0; i < mutation.removedNodes.length; i++) {
                        var removedNode = mutation.removedNodes.item(i);
                        if (removedNode === targetNode) {
                            window.gigya.logger.warn("### Gigya's service proxy has been unexpectedly detached from the DOM. " +
                                'This may cause unexpected behavior including a complete loss of service. ###');
                            _this.stopObservingIFrameRemoval(); // can stop observing for iframe removal
                            return; // stop the loop
                        }
                    }
                }
            }
        };
        // Create an observer instance linked to the callback function to execute when mutations are observed
        var observer = new MutationObserver(mutationCallback);
        // Start observing the the target-node's parent element for configured mutations
        observer.observe(targetNode.parentElement, {
            childList: true,
            subtree: false,
        });
        this._mutationObservers.push(observer);
    };
    return ServiceProxy;
}());
exports.ServiceProxy = ServiceProxy;


/***/ }),

/***/ "./src/core/ServiceProxy/interfaces.ts":
/*!*********************************************!*\
  !*** ./src/core/ServiceProxy/interfaces.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isSignalRequest(req) {
    return Boolean(req.signal);
}
exports.isSignalRequest = isSignalRequest;


/***/ }),

/***/ "./src/core/ServiceProxy/utils.ts":
/*!****************************************!*\
  !*** ./src/core/ServiceProxy/utils.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentUrl = function (win, doc) {
    if (win === void 0) { win = window; }
    if (doc === void 0) { doc = document; }
    return (win.location != win.parent.location ? doc.referrer : doc.location.href);
};
exports.getBodyElement = function (doc) {
    if (doc === void 0) { doc = document; }
    return new gigya.Promise(function (resolve) {
        if (doc.body)
            resolve(doc.body);
        else
            doc.addEventListener('DOMContentLoaded', function () { return resolve(doc.body); });
    });
};
exports.validateOrigin = function (origin, checked) { return origin.toLowerCase().indexOf(checked.toLowerCase()) === 0; };
exports.createIframe = function (doc) {
    if (doc === void 0) { doc = document; }
    var iframe = doc.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.height = '0px';
    iframe.style.width = '0px';
    iframe.style.display = 'none';
    return iframe;
};
var _counter = 1;
exports.generateId = function () {
    return String(_counter++);
};
function isClass(type) {
    return !!type.prototype;
}
exports.getAllClassMethodsNames = function (type) {
    var props = [];
    var proto = isClass(type) ? type.prototype : type;
    do {
        try {
            /** initial implementation - using filter **/
            var l = Object.getOwnPropertyNames(proto)
                // .concat(Object.getOwnPropertySymbols(proto).map(s => s.toString()))
                .map(function (s) { return s.toString(); })
                .sort()
                .filter(function (p, i, arr) {
                return typeof proto[p] === 'function' && //only the methods
                    p !== 'constructor' && //not the constructor
                    (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                    props.indexOf(p) === -1;
            });
            props = props.concat(l);
        }
        catch (e) {
            /** bug fix implementation - using custom our own filter logic
             case of Array.filter polyfill causing "can not read property '0' of undefined" **/
            var arr = Object.getOwnPropertyNames(proto)
                // .concat(Object.getOwnPropertySymbols(proto).map(s => s.toString()))
                .map(function (s) { return s.toString(); })
                .sort();
            var l = [];
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                if (typeof proto[p] === 'function' && //only the methods
                    p !== 'constructor' && //not the constructor
                    (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                    props.indexOf(p) === -1) {
                    //not overridden in a child
                    l.push(p);
                }
            }
            props = props.concat(l);
        }
    } while ((proto = Object.getPrototypeOf(proto)) && //walk-up the prototype chain
        Object.getPrototypeOf(proto) //not the the Object prototype methods (hasOwnProperty, etc...)
    );
    return props;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9BcGlTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FwaVNlcnZpY2UvYXBwL0dyb3VwQXBpRG9tYWluU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9Kc29ucFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9BcGlSZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvQmFzZVJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9PYXV0aFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9Tc29CcmlkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9Ub2tlblN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvV2ViQWRhcHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5XZWIvYXBwL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5XZWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL0RPTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvSlNPTi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVXJpLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9hcnJheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvY29va2llLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9kb21haW5zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9mdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2xvY2FsU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zdHJpbmdVdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvdmlld3BvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL2Nkbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TZXJ2aWNlUHJveHkvUHJveHlMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TZXJ2aWNlUHJveHkvU2VydmljZVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1NlcnZpY2VQcm94eS9pbnRlcmZhY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1NlcnZpY2VQcm94eS91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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ZGFwdGVycy9naWd5YS5hZGFwdGVycy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9pbmRleC50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IElBcGlTZXJ2aWNlLCBJRG9tYWluUmVzb2x2ZXIsIElBcGlTZXJ2aWNlQm9vdHN0cmFwSW5mbywgSUFwaVNlcnZpY2VSZXF1ZXN0LCBJVG9rZW5JZHMsIElHZXRHbWlkVGlja2V0UmVxdWVzdCB9IGZyb20gJ3NyYy9jb3JlL0FwaVNlcnZpY2UvYXBwL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBHcm91cEFwaURvbWFpblNlcnZpY2UgfSBmcm9tICdzcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9Hcm91cEFwaURvbWFpblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJR21pZFRpY2tldFJlc3BvbnNlIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvaW50ZXJmYWNlcy9JQXBpQWRhcHRlcic7XHJcbmltcG9ydCB7IEdTRXJyb3JzIH0gZnJvbSAnLi4vLi4vR2lneWEuSnMvYXBwL0dTRXJyb3JzJztcclxuXHJcbmNvbnN0IEdNSURfVElDS0VUX0VYUElSQVRJT05fSU5URVJWQUwgPSAxO1xyXG5leHBvcnQgY29uc3QgVG9rZW5LZXlzID0ge1xyXG4gICAgR01JRDogJ2dpZ19nbWlkJyxcclxuICAgIFVDSUQ6ICdnaWdfdWNpZCcsXHJcbiAgICBHTUlEX1RJQ0tFVDogJ2dtaWRUaWNrZXQnLFxyXG4gICAgR01JRF9USUNLRVRfRVhQSVJBVElPTl9USU1FOiAnZ21pZFRpY2tldEV4cGlyYXRpb24nLFxyXG59O1xyXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSBpbXBsZW1lbnRzIElBcGlTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VzZVN0b3JhZ2U6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9zdG9yYWdlOiBnaWd5YS51dGlscy5sb2NhbFN0b3JhZ2UuQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2FwaUtleTogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgX2hhc0dtaWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgcHJpdmF0ZSBfZG9tYWluUmVzb2x2ZXI6IElEb21haW5SZXNvbHZlcixcclxuICAgICAgICBwcml2YXRlIF9ncm91cEFwaURvbWFpblNlcnZpY2UgPSBuZXcgR3JvdXBBcGlEb21haW5TZXJ2aWNlKCksXHJcbiAgICAgICAgcHJpdmF0ZSBfcmVxdWVzdENsYXNzID0gZ2lneWEuSnNvbnBSZXF1ZXN0LFxyXG4gICAgICAgIF9zdG9yYWdlPzogZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLkFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcixcclxuICAgICkge1xyXG4gICAgICAgIGlmIChfc3RvcmFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlID0gX3N0b3JhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRBcGlEb21haW4obWV0aG9kTmFtZT86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbWFpblJlc29sdmVyLmdldEFwaURvbWFpbihtZXRob2ROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYm9vdHN0cmFwKGZvcmNlQm9vdHN0cmFwID0gZmFsc2UpOiBQcm9taXNlPElBcGlTZXJ2aWNlQm9vdHN0cmFwSW5mbz4ge1xyXG4gICAgICAgIGNvbnN0IGxvZyA9IGdpZ3lhLmxvZ2dlci5ncm91cChgYm9vdHN0cmFwIGFwaSBzZXJ2aWNlYCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBzdG9yYWdlIGFkYXB0ZXIgYXN5bmMgYWxsb3dzIGZvciB0aGUgcG9zc2liaWxpdHkgb2YgdXNpbmcgRmxhc2ggc3RvcmFnZS5cclxuICAgICAgICBpZiAoIXRoaXMuX3N0b3JhZ2UpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmRlYnVnKGBpbml0IHN0b3JhZ2VgKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZSA9IGF3YWl0IG5ldyBQcm9taXNlPGdpZ3lhLnV0aWxzLmxvY2FsU3RvcmFnZS5BYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLndhaXRGb3JTZXJ2aWNlKGFkYXB0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYWRhcHRlcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5faGFzR21pZCAmJiAhZm9yY2VCb290c3RyYXApIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYGFscmVhZHkgaGFzIGdtaWRgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyghdGhpcy5faGFzR21pZCA/IGBubyBnbWlkIHNldGAgOiBgZm9yY2luZyBib290c3RyYXBgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhblNhdmVHbWlkQXNDb29raWUoKSkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHNhdmUgZ21pZCBhcyBjb29raWVgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnNlbmRSZXF1ZXN0PHsgZXJyb3JDb2RlOiBudW1iZXIgfT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZE5hbWU6ICdhY2NvdW50cy53ZWJTZGtCb290c3RyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBhcGlLZXk6IHRoaXMuX2FwaUtleSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3JDb2RlICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYGVycm9yIGJvb3RzdHJhcHBpbmcgc2RrYCwgeyB0eXBlOiAnYm9vdHN0cmFwIGZhaWxlZCcsIHNjb3BlOiAnQXBpU2VydmljZS5ib290c3RyYXAnLCByZXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ2Vycm9yIGJvb3RzdHJhcHBpbmcgc2RrXFxuJyArIEpTT04uc3RyaW5naWZ5KHJlcywgbnVsbCwgNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgc2F2ZSBnbWlkIGluIHN0b3JhZ2VgKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dXBXaXRoU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlU3RvcmFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aWNrZXRJbmZvOiBJR21pZFRpY2tldFJlc3BvbnNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdXNlU3RvcmFnZSkge1xyXG4gICAgICAgICAgICB0aWNrZXRJbmZvID0gYXdhaXQgdGhpcy5nZXRHbWlkVGlja2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhblN0b3JhZ2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvZy5lbmQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGlja2V0SW5mbyxcclxuICAgICAgICB9IGFzIElBcGlTZXJ2aWNlQm9vdHN0cmFwSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2V0R3JvdXBBcGlEb21haW4oYXBpRG9tYWluPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgYmFzZURvbWFpbiA9IGdpZ3lhLl8uZ2V0QmFzZURvbWFpbihcclxuICAgICAgICAgICAgZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zLFxyXG4gICAgICAgICAgICB0aGlzLl9kb21haW5SZXNvbHZlci5vcmlnaW5Eb21haW4sXHJcbiAgICAgICAgICAgIFsnZ2lneWEuY29tJywgJ2dpZ3lhLWFwaS5jbicsIGdpZ3lhLmRlZmF1bHRBcGlEb21haW5dXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZihiYXNlRG9tYWluID09PSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwQXBpRG9tYWluU2VydmljZS5zZXQoYXBpRG9tYWluKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhblNhdmVHbWlkQXNDb29raWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gYXBpIGRvbWFpbiB3aWxsIGJlIGZpcnN0IHBhcnR5IHdoZW4gc2l0ZSBoYXMgYSBjdXN0b20gYXBpIGRvbWFpbiBwcmVmaXguXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbWFpblJlc29sdmVyLmlzQXBpRG9tYWluRmlyc3RQYXJ0eSB8fCBnaWd5YS51dGlscy5jb29raWUuY2FuU2F2ZUNvb2tpZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZW5kUmVxdWVzdDxUPihkYXRhOiBJQXBpU2VydmljZVJlcXVlc3QpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL1RPRE86IGhhbmRsZSB0aW1lb3V0XHJcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJ0FwaVNlcnZpY2U6IHJlcXVlc3QgZGF0YSBtdXN0IGhhcyBtZXRob2ROYW1lIGFuZCBwYXJhbXMnO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBtZXRob2ROYW1lID0gZGF0YS5tZXRob2ROYW1lO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKGRhdGEucGFyYW1zLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgcGFyYW1zLnBhZ2VVUkwgPSB0aGlzLl9kb21haW5SZXNvbHZlci5vcmlnaW5Eb21haW47XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl91c2VTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuZ21pZCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShUb2tlbktleXMuR01JRCk7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMudWNpZCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShUb2tlbktleXMuVUNJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXRBcGlEb21haW4obWV0aG9kTmFtZSkudGhlbihhcGlEb21haW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgdGhpcy5fcmVxdWVzdENsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgIGBodHRwczovLyR7YXBpRG9tYWlufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSBnaWd5YS51dGlscy5KU09OLnNlcmlhbGl6ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdpZ3lhLnV0aWxzLkpTT04uZGVzZXJpYWxpemUoanNvbiwgdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuSU5WQUxJRF9QQVJBTUVURVJfRk9STUFULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYEludmFsaWQgcGFyYW1ldGVyIGZvcm1hdC4keydcXG4nfU9uZSBvZiB0aGUgcGFyYW1ldGVycyBvZiB0aGlzIHJlcXVlc3QgaGFzIGJlZW4gc2V0IHdpdGggYSB2YWx1ZSB3aGljaCBpcyBub3QgaW4gdGhlIGV4cGVjdGVkIGZvcm1hdC5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyBhcyBUKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldHVwV2l0aFN0b3JhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgaXNHbWlkRXhpc3RzSW5TdG9yYWdlID0gQm9vbGVhbih0aGlzLl9zdG9yYWdlLmdldEl0ZW0oVG9rZW5LZXlzLkdNSUQpKTtcclxuICAgICAgICBjb25zdCBleHBpcmF0aW9uVGltZSA9IHBhcnNlSW50KHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShUb2tlbktleXMuR01JRF9USUNLRVRfRVhQSVJBVElPTl9USU1FKSk7XHJcbiAgICAgICAgaWYgKCFpc0dtaWRFeGlzdHNJblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYGdldHRpbmcgZ21pZCBieSBlbmRwb2ludGApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gYXdhaXQgdGhpcy5nZXRJZHMoKTtcclxuICAgICAgICAgICAgaWYgKCF0b2tlbnMuZ2NpZCB8fCAhdG9rZW5zLnVjaWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGBBcGlTZXJ2aWNlIGdldElEczogdGhlIHJlcXVlc3QgdG8gdGhlIGVuZHBvaW50IGZhaWxlZGA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgc2V0dGluZyBnbWlkIGluIHN0b3JhZ2VgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbShUb2tlbktleXMuR01JRCwgdG9rZW5zLmdjaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKFRva2VuS2V5cy5VQ0lELCB0b2tlbnMudWNpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXRSZXMgPSB0aGlzLmNyZWF0ZVRpY2tldFJlc3BvbnNlKHRva2Vucy5nbWlkVGlja2V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlR21pZFRpY2tldCh0aWNrZXRSZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICghZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0xhdGVyVGhhbk5vdyhleHBpcmF0aW9uVGltZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoR21pZFRpY2tldEZyb21TZXJ2ZXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgYWxyZWFkeSBoYXMgZ21pZCBpbiBzdG9yYWdlYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgICAgY3JlYXRlTmV3IC0gaWYgbm8gZ21pZFRpY2tldCBleGlzdHMsIHRoZW4gY3JlYXRlIGEgbmV3IG9uZSBpbnN0ZWFkIG9mIHJldHVybmluZyB1bmRlZmluZWRcclxuICAgICAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRHbWlkVGlja2V0KGNyZWF0ZU5ldyA9IGZhbHNlKTogUHJvbWlzZTxJR21pZFRpY2tldFJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IGdtaWRUaWNrZXQgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oVG9rZW5LZXlzLkdNSURfVElDS0VUKTtcclxuXHJcbiAgICAgICAgaWYgKCFnbWlkVGlja2V0ICYmICFjcmVhdGVOZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBleHBpcmF0aW9uVGltZSA9IHBhcnNlSW50KHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShUb2tlbktleXMuR01JRF9USUNLRVRfRVhQSVJBVElPTl9USU1FKSk7XHJcbiAgICAgICAgICAgIGlmICghY3JlYXRlTmV3ICYmIGdtaWRUaWNrZXQgJiYgZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0xhdGVyVGhhbk5vdyhleHBpcmF0aW9uVGltZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ21pZFRpY2tldDogZ21pZFRpY2tldCxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uVGltZTogcGFyc2VJbnQodGhpcy5fc3RvcmFnZS5nZXRJdGVtKFRva2VuS2V5cy5HTUlEX1RJQ0tFVF9FWFBJUkFUSU9OX1RJTUUpKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUdtaWRUaWNrZXQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlZnJlc2hHbWlkVGlja2V0RnJvbVNlcnZlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVmcmVzaEdtaWRUaWNrZXRGcm9tU2VydmVyKCk6IFByb21pc2U8SUdtaWRUaWNrZXRSZXNwb25zZT4ge1xyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGByZWZyZXNoaW5nIGdtaWQgdGlja2V0YCk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5jcmVhdGVHbWlkVGlja2V0KHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShUb2tlbktleXMuR01JRCkpO1xyXG4gICAgICAgIGlmKHJlcyAmJiByZXMuZ21pZFRpY2tldCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdtaWRUaWNrZXQocmVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVHbWlkVGlja2V0KHRpY2tldDogSUdtaWRUaWNrZXRSZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGB1cGRhdGluZyBnbWlkIHRpY2tldGAsIHRpY2tldCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKFRva2VuS2V5cy5HTUlEX1RJQ0tFVCwgdGlja2V0LmdtaWRUaWNrZXQpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbShUb2tlbktleXMuR01JRF9USUNLRVRfRVhQSVJBVElPTl9USU1FLCBTdHJpbmcodGlja2V0LmV4cGlyYXRpb25UaW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVHbWlkVGlja2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShUb2tlbktleXMuR01JRF9USUNLRVQpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShUb2tlbktleXMuR01JRF9USUNLRVRfRVhQSVJBVElPTl9USU1FKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFuU3RvcmFnZSgpIHtcclxuICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0oVG9rZW5LZXlzLkdNSUQpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShUb2tlbktleXMuVUNJRCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVHbWlkVGlja2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJZHMoKTogUHJvbWlzZTxJVG9rZW5JZHM+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kUmVxdWVzdDxJVG9rZW5JZHM+KHtcclxuICAgICAgICAgICAgbWV0aG9kTmFtZTogJ3NvY2lhbGl6ZS5nZXRJRHMnLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIEFQSUtleTogdGhpcy5fYXBpS2V5LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVRpY2tldDogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlR21pZFRpY2tldChnbWlkPzogc3RyaW5nLCBleHBpcmVzID0gZ2lneWEucGFydG5lclNldHRpbmdzLmdtaWRUaWNrZXRFeHBpcmF0aW9uIHx8IDM2MDApOiBQcm9taXNlPElHbWlkVGlja2V0UmVzcG9uc2U+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxyXG4gICAgICAgICAgICBleHBpcmVzLFxyXG4gICAgICAgIH0gYXMgSUdldEdtaWRUaWNrZXRSZXF1ZXN0O1xyXG5cclxuICAgICAgICBpZiAoZ21pZCkgcGFyYW1zLmdtaWQgPSBnbWlkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kUmVxdWVzdDx7IGdtaWRUaWNrZXQ6IHN0cmluZyB9Pih7XHJcbiAgICAgICAgICAgIG1ldGhvZE5hbWU6ICdzb2NpYWxpemUuZ2V0R21pZFRpY2tldCcsXHJcbiAgICAgICAgICAgIHBhcmFtc1xyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzICYmIHJlcy5nbWlkVGlja2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVUaWNrZXRSZXNwb25zZShyZXMuZ21pZFRpY2tldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBlc3RhYmxpc2ggZ21pZFRpY2tldCcsIHtyZXNwb25zZTogSlNPTi5zdHJpbmdpZnkocmVzKSwgbWV0aG9kOiAnc29jaWFsaXplLmdldEdtaWRUaWNrZXQnfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUdtaWRUaWNrZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlVGlja2V0UmVzcG9uc2UoZ21pZFRpY2tldDogc3RyaW5nKTogSUdtaWRUaWNrZXRSZXNwb25zZSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRHbWlkVGlja2V0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY3VycmVudEdtaWRUaWNrZXREYXRlLnNldEhvdXJzKGN1cnJlbnRHbWlkVGlja2V0RGF0ZS5nZXRIb3VycygpICsgR01JRF9USUNLRVRfRVhQSVJBVElPTl9JTlRFUlZBTCk7XHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBjdXJyZW50R21pZFRpY2tldERhdGUuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBnbWlkVGlja2V0LFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uVGltZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7bG9jYWxJbmZvfSBmcm9tIFwiLi4vLi4vR2lneWEuSnMvYXBwL0xvY2FsSW5mb1wiO1xyXG5cclxuY29uc3QgR3JvdXBBcGlEb21haW5LZXkgPSAnYXBpRG9tYWluJztcclxuZXhwb3J0IGNsYXNzIEdyb3VwQXBpRG9tYWluU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9jb29raWVOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfc3NvS2V5ID0gZ2lneWEucGFydG5lclNldHRpbmdzLnNzb0tleSxcclxuICAgICAgICBwcml2YXRlIF9zdG9yYWdlID0gZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLmluaXRpYWxpemVBZGFwdGVyKGdpZ3lhLnV0aWxzLmxvY2FsU3RvcmFnZS5Db29raWVTdG9yYWdlQWRhcHRlciksXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFnZURvbWFpbiA9IGxvY2FsSW5mby5wYWdlRG9tYWluXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9jb29raWVOYW1lID0gYCR7R3JvdXBBcGlEb21haW5LZXl9XyR7dGhpcy5fc3NvS2V5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3NvS2V5ID8gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKHRoaXMuX2Nvb2tpZU5hbWUpIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChhcGlEb21haW46IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9zc29LZXkpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHNldHRpbmcgYXMgZ3JvdXAgYXBpIGRvbWFpbiBmb3IgJHt0aGlzLl9zc29LZXl9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLl9jb29raWVOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKHRoaXMuX2Nvb2tpZU5hbWUsIGFwaURvbWFpbiwgdW5kZWZpbmVkLCB0aGlzLl9wYWdlRG9tYWluKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtBcGlBZGFwdGVyU2V0dGluZ3N9IGZyb20gJy4uLy4uL0dpZ3lhLkpzL2ludGVyZmFjZXMvSUFwaUFkYXB0ZXInO1xyXG5pbXBvcnQge0dTRXJyb3JzfSBmcm9tICcuLi8uLi9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMnO1xyXG5pbXBvcnQge2xvY2FsSW5mb30gZnJvbSBcIi4uLy4uL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm9cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UganNvbnBTZXR0aW5ncyB7XHJcbiAgICBmb3JjZVBvc3Q/OiBib29sZWFuO1xyXG4gICAgZm9yY2VHaWd5YURvbWFpbj86IGJvb2xlYW47IC8vIGZvciBhbm9ueW1vdXMgdXNlcnNcclxuICAgIGRpc2FibGVDYWNoZT86IGJvb2xlYW47XHJcbiAgICByZXF1aXJlc1Nlc3Npb24/OiAoKSA9PiBib29sZWFuO1xyXG4gICAgY2xlYXJTZXNzaW9uPzogYm9vbGVhbjtcclxuICAgIGNsZWFyU2Vzc2lvbkNvbmRpdGlvbj86IChwYXJhbXM6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIGNhY2hlVGltZW91dD86IG51bWJlcjtcclxuICAgIGpzU2RrUmVxdWVzdElkPzogc3RyaW5nO1xyXG4gICAgcHJlcHJvY2Vzc29yPzogKHBhcmFtcywgY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFjayhyZXNwb25zZTogT2JqZWN0LCByZXF1ZXN0SWQ/OiBzdHJpbmcpIHtcclxuICAgIGlmICghcmVxdWVzdElkICYmIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVxdWVzdElkID0gcmVzcG9uc2VbJ2NvbnRleHQnXTtcclxuICAgIH1cclxuICAgIGlmICghcmVxdWVzdElkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlcTogSnNvbnBSZXF1ZXN0ID0gcGVuZGluZ1JlcXVlc3RzW3JlcXVlc3RJZF07XHJcbiAgICBpZiAocmVxKSB7XHJcbiAgICAgICAgcmVxLmhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdElkKG1ldGhvZDogc3RyaW5nLCBwYXJhbXM6IE9iamVjdCwgc2V0dGluZ3M6IGpzb25wU2V0dGluZ3MpIHtcclxuICAgIGxldCBpZDogc3RyaW5nID0gc2V0dGluZ3MuanNTZGtSZXF1ZXN0SWQ7XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG4gICAgaWYgKHNldHRpbmdzLmRpc2FibGVDYWNoZSB8fCBnaWd5YS5sb2NhbEluZm8uaXNTYWZhcmkgfHwgKGdpZ3lhLmxvY2FsSW5mby5pc0lFMTAgJiYgbWV0aG9kLmluZGV4T2YoJ2FjY291bnRzLmdldEFjY291bnRJbmZvJykgPiAtMSkpIHtcclxuICAgICAgICByZXR1cm4gJ1InICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLnJhbmRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwYXJhbXNDb3B5ID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHBhcmFtcyk7XHJcbiAgICBmb3IgKGxldCBwYXJhbSBpbiBwYXJhbXNDb3B5KSB7XHJcbiAgICAgICAgaWYgKHBhcmFtc0NvcHkuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbS5pbmRleE9mKCdmYl8nKSA9PT0gMCB8fCBwYXJhbSA9PT0gJ3NvdXJjZScgfHwgcGFyYW0gPT09ICdzb3VyY2VEYXRhJykge1xyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZiIHNlc3Npb24gcGFyYW1zIGZvciBjYWNoaW5nIGtleVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFtc0NvcHlbcGFyYW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICdSJyArIGdpZ3lhLnV0aWxzLm9iamVjdC5nZXRNdXJtdXJIYXNoKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSArIG1ldGhvZCArIGdpZ3lhLnV0aWxzLm9iamVjdC5nZXRIYXNoKHBhcmFtc0NvcHkpKTtcclxufVxyXG5cclxubGV0IHBlbmRpbmdSZXF1ZXN0czogeyBbcmVxdWVzdElkOiBudW1iZXJdOiBKc29ucFJlcXVlc3QgfSA9IHt9O1xyXG5cclxuY29uc3QgUE9TVENvbnRhaW5lcklkID0gYGdpZ3lhUmVxdWVzdEZvcm1zXyR7RGF0ZS5ub3coKX1gO1xyXG5cclxuZXhwb3J0IGNsYXNzIEpzb25wUmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgYmFzZURvbWFpbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBtZXRob2Q6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcGFyYW1zOiBPYmplY3QsXHJcbiAgICAgICAgcHVibGljIGNhbGxiYWNrOiAocmVzcG9uc2U6IE9iamVjdCkgPT4gdm9pZCxcclxuICAgICAgICBwdWJsaWMgc2V0dGluZ3M6IEFwaUFkYXB0ZXJTZXR0aW5ncyA9IHt9LFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nID0gZ2V0UmVxdWVzdElkKG1ldGhvZCwgcGFyYW1zLCBzZXR0aW5ncyksXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VXJsID0gKCkgPT4gYCR7dGhpcy5iYXNlRG9tYWlufS8ke3RoaXMubWV0aG9kfWA7XHJcblxyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBPYmplY3Q7XHJcbiAgICBwcml2YXRlIGlmck5hbWU6IHN0cmluZyA9ICdnaWd5YVBvc3RJZnJhbWVfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgcHJpdmF0ZSByZXRyeVRpbWVySUQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmV0cnk6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHBvc3RDb250YWluZXJFbGVtOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgaW5Qcm9ncmVzczogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgc2VuZChpZ25vcmVDYWNoZVRpbWVvdXQ/OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBlbmRpbmdSZXF1ZXN0c1t0aGlzLmlkXSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuaW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZGREZWZhdWx0UGFyYW1zKCk7XHJcbiAgICAgICAgbGV0IHBhcmFtc1N0cmluZyA9IGdpZ3lhLnV0aWxzLmtleVZhbHVlLnNlcmlhbGl6ZSh0aGlzLnBhcmFtcyk7XHJcblxyXG4gICAgICAgIGlmICghaWdub3JlQ2FjaGVUaW1lb3V0ICYmIHRoaXMuc2V0dGluZ3MuY2FjaGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGxldCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXkoKTtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLmdldChjYWNoZUtleSwgdGhpcy5zZXR0aW5ncy5jYWNoZVRpbWVvdXQsIChjYWNoZWRSZXNwb25zZTogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZXR0aW5ncy5jYWNoZVRpbWVvdXQ7IC8vIEF2b2lkIGNhY2hpbmcgaXQgYWdhaW4uXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soY2FjaGVkUmVzcG9uc2UsIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZXh0cmFMZW5ndGggPSAwOyAvLzgwMDA7XHJcbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gNCAqIDEwMjQ7XHJcbiAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFKSB7XHJcbiAgICAgICAgICAgIGV4dHJhTGVuZ3RoID0gMiAqIDEwMjQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ2lneWEuXy5VcmkucGFyc2UodGhpcy5nZXRVcmwoKSkuaHJlZi50b0xvd2VyQ2FzZSgpICE9PSB0aGlzLmdldFVybCgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLndhcm4oYEFib3J0aW5nIFJlcXVlc3QgZm9yICR7dGhpcy5tZXRob2R9LiBQYXRoIG1hbmlwdWxhdGlvbiBkZXRlY3RlZC5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVxVXJsID0gYCR7dGhpcy5nZXRVcmwoKX0/JHtwYXJhbXNTdHJpbmd9YDtcclxuICAgICAgICBpZiAoIWxvY2FsSW5mby5pc09uTGluZSgpfHwgKHJlcVVybC5sZW5ndGggKyBleHRyYUxlbmd0aCA8PSBtYXhMZW5ndGggJiYgIXRoaXMuc2V0dGluZ3MuZm9yY2VQb3N0KSkge1xyXG4gICAgICAgICAgICAvLyBUaGUgcmVzdWx0IG9mIHRoaXMgc2NyaXB0IGxvYWQgd291bGQgYmUgdG8gY2FsbCBSZXF1ZXN0LmNsYXNzTmFtZVxyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5zY3JpcHQubG9hZChyZXFVcmwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuTkVUV09SS19FUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdOZXR3b3JrX2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5mdW5jdGlvbnMuaW52b2tlT25QYWdlTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChQT1NUQ29udGFpbmVySWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1zQ29udGFpbmVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc0NvbnRhaW5lci5pZCA9IFBPU1RDb250YWluZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hcHBlbmRUb0JvZHkoZm9ybXNDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EaXYgPSB0aGlzLmdldFBvc3RDb250YWluZXIoKTtcclxuICAgICAgICAgICAgICAgIGZvcm1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1EaXYpO1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvY2VzcyB3aWxsIGNvbnRpbnVlIG9uIHRoZSBvbkxvYWRFdmVudCBvZiB0aGUgZm9ybSBjcmVhdGVkIGJ5IHRoaXMuZ2V0Rm9ybUVsZW1lbnQoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlOiBPYmplY3QpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWNoZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLnNldCh0aGlzLmdldENhY2hlS2V5KCksIHJlc3BvbnNlWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5PSyA/IHJlc3BvbnNlIDogbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJldHJ5VGltZXJJRCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXRyeVRpbWVySUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5EYXRhX1BlbmRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLmdldERhdGFQZW5kaW5nVGltZW91dCh0aGlzLnJldHJ5KyspO1xyXG4gICAgICAgICAgICBpZiAodCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHJ5XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9LCB0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGREZWZhdWx0UGFyYW1zKCkge1xyXG4gICAgICAgIHRoaXMucGFyYW1zWydmb3JtYXQnXSA9ICdqc29ucCc7XHJcbiAgICAgICAgdGhpcy5wYXJhbXNbJ2NhbGxiYWNrJ10gPSAnZ2lneWEuY2FsbGJhY2snOyAvLyBmb3IganNvbnAgY2FsbGJhY2tzXHJcbiAgICAgICAgdGhpcy5wYXJhbXNbJ2NvbnRleHQnXSA9IHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDYWNoZUtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLm1ldGhvZH1fJHtnaWd5YS51dGlscy5rZXlWYWx1ZS5zZXJpYWxpemUodGhpcy5wYXJhbXMpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQYXJhbUZvcm1FbGVtZW50cygpIHtcclxuICAgICAgICBjb25zdCBkb2NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcCBpbiB0aGlzLnBhcmFtcykge1xyXG4gICAgICAgICAgICBsZXQgdGV4dEFyZWFFbGVtID0gZ2lneWEudXRpbHMuRE9NLmNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlcygndGV4dGFyZWEnLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHR5cGVvZiB0aGlzLnBhcmFtc1twXSA9PT0gJ29iamVjdCcgPyBnaWd5YS51dGlscy5VUkwuVVJMRW5jb2RlKGdpZ3lhLnV0aWxzLkpTT04uc2VyaWFsaXplKHRoaXMucGFyYW1zW3BdKSkgOiB0aGlzLnBhcmFtc1twXSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkb2NGcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0QXJlYUVsZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRvY0ZyYWdtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UG9zdENvbnRhaW5lcigpIHtcclxuICAgICAgICBsZXQgcG9zdENvbnRhaW5lckVsZW07XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvc3RDb250YWluZXJFbGVtKSB7XHJcbiAgICAgICAgICAgIHBvc3RDb250YWluZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBsZXQgZm9ybUlkID0gdGhpcy5pZnJOYW1lICsgJ2Zvcm0nO1xyXG4gICAgICAgICAgICBsZXQgZ2V0U2F2ZWRSZXNwb25zZUlkID0gdGhpcy5pZDtcclxuICAgICAgICAgICAgLy8gRm9ybVxyXG4gICAgICAgICAgICBjb25zdCBwb3N0Q29tbWVudEZvcm0gPSBnaWd5YS51dGlscy5ET00uY3JlYXRlRWxlbWVudFdpdGhBdHRyaWJ1dGVzKCdmb3JtJywge1xyXG4gICAgICAgICAgICAgICAgYWNjZXB0Q2hhcnNldDogJ1VURi04JyxcclxuICAgICAgICAgICAgICAgIGlkOiBmb3JtSWQsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogYCR7dGhpcy5nZXRVcmwoKX0/Y29udGV4dD0ke3RoaXMuaWR9JiZzYXZlUmVzcG9uc2VJRD0ke3RoaXMuaWR9YCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5pZnJOYW1lLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbkNvbW1lbnRGaWVsZCA9IGdpZ3lhLnV0aWxzLkRPTS5jcmVhdGVFbGVtZW50V2l0aEF0dHJpYnV0ZXMoJ2lucHV0Jywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndXRmOCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJyYjeDI3MTM7JyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRDb21tZW50QnRuID0gZ2lneWEudXRpbHMuRE9NLmNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlcygnaW5wdXQnLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwb3N0Q29tbWVudEZvcm0uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVQYXJhbUZvcm1FbGVtZW50cygpKTtcclxuICAgICAgICAgICAgcG9zdENvbW1lbnRGb3JtLmFwcGVuZENoaWxkKGhpZGRlbkNvbW1lbnRGaWVsZCk7XHJcbiAgICAgICAgICAgIHBvc3RDb21tZW50Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRDb21tZW50QnRuKTtcclxuXHJcbiAgICAgICAgICAgIHBvc3RDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKHBvc3RDb21tZW50Rm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZnJhbWVcclxuICAgICAgICAgICAgbGV0IGRpZFN1Ym1pdEZvcm06IGJvb2xlYW47XHJcbiAgICAgICAgICAgIGxldCBlbElGcmFtZSA9IGdpZ3lhLnV0aWxzLkRPTS5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB0aGlzLmlmck5hbWUpIGFzIEhUTUxJRnJhbWVFbGVtZW50O1xyXG4gICAgICAgICAgICBlbElGcmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZnJOYW1lKTtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuZnVuY3Rpb25zLmFkZFNyY1RvSUZyYW1lSWZOZWVkZWQoZWxJRnJhbWUpO1xyXG5cclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWxJRnJhbWUsICdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gMS4gaWZyYW1lIHdhcyBsb2FkZWQgZm9yIHRoZSBmaXJzdCB0aW1lLCBzdWJtaXQgdGhlIGZvcm1cclxuICAgICAgICAgICAgICAgIGlmICghZGlkU3VibWl0Rm9ybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpZFN1Ym1pdEZvcm0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAyLiBmb3JtIHdhcyBzdWJtaXR0ZWQgdG8gdGhlIGlmcmFtZSwgZ2V0IHNhdmVkIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTYXZlZEZvcm1SZXNwb25zZShnZXRTYXZlZFJlc3BvbnNlSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcG9zdENvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQoZWxJRnJhbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvc3RDb250YWluZXJFbGVtID0gcG9zdENvbnRhaW5lckVsZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3N0Q29udGFpbmVyRWxlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNhdmVkRm9ybVJlc3BvbnNlKGdldFNhdmVkUmVzcG9uc2VJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbmV3IEpzb25wUmVxdWVzdChcclxuICAgICAgICAgICAgdGhpcy5iYXNlRG9tYWluLFxyXG4gICAgICAgICAgICAnc29jaWFsaXplLmdldFNhdmVkUmVzcG9uc2UnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBUElLZXk6IHRoaXMucGFyYW1zWydBUElLZXknXSxcclxuICAgICAgICAgICAgICAgIHNhdmVSZXNwb25zZUlEOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgdWNpZDogdGhpcy5wYXJhbXNbJ3VjaWQnXSxcclxuICAgICAgICAgICAgICAgIG5vQXV0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNkazogJ2pzXycgKyBnaWd5YS5idWlsZC52ZXJzaW9uLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBnZXRTYXZlZFJlc3BvbnNlSWQsXHJcbiAgICAgICAgKS5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREYXRhUGVuZGluZ1RpbWVvdXQocmV0cnkpIHtcclxuICAgICAgICBpZiAocmV0cnkgPD0gNCkgcmV0dXJuIDUwMDtcclxuICAgICAgICBpZiAocmV0cnkgPD0gNCArIDQpIHJldHVybiAxMDAwO1xyXG4gICAgICAgIGlmIChyZXRyeSA8PSA0ICsgNCArIDEzKSByZXR1cm4gMjAwMDtcclxuICAgICAgICBpZiAocmV0cnkgPD0gNCArIDQgKyAxMyArIDE4KSByZXR1cm4gNTAwMDtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNwb3NlKCkge1xyXG4gICAgICAgIGRlbGV0ZSBwZW5kaW5nUmVxdWVzdHNbdGhpcy5pZF07XHJcbiAgICAgICAgaWYgKHRoaXMucG9zdENvbnRhaW5lckVsZW0pIHtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUVsZW1lbnQodGhpcy5wb3N0Q29udGFpbmVyRWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBvc3RDb250YWluZXJFbGVtO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VSZXF1ZXN0IH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9CYXNlUmVxdWVzdCc7XHJcbmltcG9ydCB7IEFwaUFkYXB0ZXJTZXR0aW5ncyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2ludGVyZmFjZXMvSUFwaUFkYXB0ZXInO1xyXG5leHBvcnQgY2xhc3MgQXBpUmVxdWVzdCBleHRlbmRzIEJhc2VSZXF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXRob2ROYW1lOiBzdHJpbmcsIHB1YmxpYyBwYXJhbXM6IE9iamVjdCwgcHVibGljIGNhbGxiYWNrOiAocmVzKSA9PiB2b2lkLCBwdWJsaWMgc2V0dGluZ3M6IEFwaUFkYXB0ZXJTZXR0aW5ncyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoZ2lneWEuZGVmYXVsdEFwaURvbWFpbiwgbWV0aG9kTmFtZSwgcGFyYW1zLCBzZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNlbmRBY3Rpb24oaWdub3JlQ2FjaGVUaW1lb3V0PzogYm9vbGVhbikge1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLm9iamVjdC5hZGQodGhpcy5wYXJhbXMsIHRoaXMuZ2V0QXV0aFBhcmFtcygpKTtcclxuICAgICAgICBnaWd5YS5fLmFwaUFkYXB0ZXJzLndlYi5hcGlTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5zZW5kUmVxdWVzdCh0aGlzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5jYWxsYmFjaylcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUganNvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRob2ROYW1lOiB0aGlzLm1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB0aGlzLnNldHRpbmdzLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBpQWRhcHRlclNldHRpbmdzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvaW50ZXJmYWNlcy9JQXBpQWRhcHRlcic7XHJcbmltcG9ydCB7IGdldCwgZ2V0R2x0ZXhwQ29va2llIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9Ub2tlblN0b3JlJztcclxuXHJcbmNvbnN0IFJFUV9NQVhfUkVUUklFUyA9IDU7XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVxdWVzdCB7XHJcbiAgICBwcml2YXRlIF90cmllcyA9IDA7XHJcblxyXG4gICAgcHVibGljIGxvYWRlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzZW50TG9naW5Ub2tlbjogc3RyaW5nO1xyXG4gICAgcHVibGljIHBhcmFtc0xvZ2luVG9rZW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgYmFzZVVybDogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBtZXRob2ROYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHBhcmFtczogT2JqZWN0LFxyXG4gICAgICAgIHB1YmxpYyBzZXR0aW5nczogQXBpQWRhcHRlclNldHRpbmdzID0ge30sXHJcbiAgICAgICAgcHJpdmF0ZSBfbWF4VHJpZXMgPSBSRVFfTUFYX1JFVFJJRVMsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnBhcmFtc1snc2RrJ10gPSAnanNfJyArIGdpZ3lhLmJ1aWxkLnZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsICsgJy8nICsgdGhpcy5tZXRob2ROYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZW5kKG1heFJldHJpZXNDYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLl90cmllcysrO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdHJpZXMgPD0gdGhpcy5fbWF4VHJpZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZW5kQWN0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtYXhSZXRyaWVzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgbWF4UmV0cmllc0NhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzZW5kQWN0aW9uKCk7XHJcblxyXG4gICAgcHVibGljIGdldEF1dGhQYXJhbXMoKSB7XHJcbiAgICAgICAgdmFyIGF1dGhQYXJhbXM6IE9iamVjdCA9IHt9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbXNbJ29hdXRoX3Rva2VuJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXNbJ2F1dGhNb2RlJ10gPSAndG9rZW4nO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhlIHJlZ1Rva2VuIHRha2VzIHByaW9yaXR5IG92ZXIgdGhlIGxvZ2luIHRva2VuIGJlY2F1c2Ugb2YgU1NPLlxyXG4gICAgICAgICAgICAvLyBBbiBhY2NvdW50IG1heSBiZSBsb2dnZWQgaW4gKGxvZ2luX3Rva2VuKSBidXQgc3RpbGwgYmUgcGVuZGluZyByZWcgYmVjYXVzZSBvZiBjaGlsZCBzaXRlIHNjaGVtYSByZXF1aXJlbWVudHMuXHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wYXJhbXNbJ25vQXV0aCddICYmICF0aGlzLnBhcmFtc1sncmVnVG9rZW4nXSkge1xyXG4gICAgICAgICAgICB2YXIgbG9naW5Ub2tlbiA9IGdldCh0aGlzLnBhcmFtc1snQVBJS2V5J10pO1xyXG4gICAgICAgICAgICBpZiAobG9naW5Ub2tlbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW50TG9naW5Ub2tlbiA9IGxvZ2luVG9rZW47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxvZ2luVG9rZW5FeHAgPSBnZXRHbHRleHBDb29raWUodGhpcy5wYXJhbXNbJ0FQSUtleSddKTtcclxuICAgICAgICAgICAgICAgIGlmIChsb2dpblRva2VuRXhwICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoUGFyYW1zWydsb2dpblRva2VuRXhwJ10gPSBsb2dpblRva2VuRXhwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGF1dGhQYXJhbXNbJ2xvZ2luX3Rva2VuJ10gPSBsb2dpblRva2VuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF1dGhQYXJhbXNbJ2F1dGhNb2RlJ10gPSAnY29va2llJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhcmFtc1snbm9BdXRoJ107XHJcblxyXG4gICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNBbmRyb2lkQnJvd3Nlcikge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wYXJhbXNbJ2xvZ2luX3Rva2VuJ107XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBhcmFtc1snbG9naW5Ub2tlbkV4cCddO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wYXJhbXNbJ2F1dGhNb2RlJ107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXV0aFBhcmFtcztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlUmVxdWVzdCB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvQmFzZVJlcXVlc3QnO1xyXG5pbXBvcnQgeyBBcGlBZGFwdGVyU2V0dGluZ3MgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9pbnRlcmZhY2VzL0lBcGlBZGFwdGVyJztcclxuXHJcbi8vIFNpbmdsZSBTaWduIE9uIGFjcm9zcyBtdWx0aXBsZSBkb21haW5zXHJcbmV4cG9ydCBjbGFzcyBPYXV0aFJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdCB7XHJcbiAgICBwcml2YXRlIHdpbmRvd05hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVxdWVzdElEOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGJhc2VVcmw6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbWV0aG9kTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBwYXJhbXM6IE9iamVjdCxcclxuICAgICAgICBwdWJsaWMgY2FsbGJhY2s6IChyZXNwb25zZTogT2JqZWN0KSA9PiB2b2lkLFxyXG4gICAgICAgIHB1YmxpYyBzZXR0aW5nczogQXBpQWRhcHRlclNldHRpbmdzID0ge30sXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihiYXNlVXJsLCBtZXRob2ROYW1lLCBwYXJhbXMsIHNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLndpbmRvd05hbWUgPSB0aGlzLm1ldGhvZE5hbWUucmVwbGFjZSgvXFwuL2csICdfJykucmVwbGFjZSgvXFwvL2csICcnKSArICdfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdElEID0gdGhpcy53aW5kb3dOYW1lICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmVmb3JlUmVxdWVzdCgpIHt9XHJcblxyXG4gICAgYWZ0ZXJSZXNwb25zZShyZXNwb25zZTogT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZVsnZG9udENsb3NlJ10gfHwgcmVzcG9uc2VbJ2RvbnRDbG9zZSddID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLndpbi5jbG9zZSh0aGlzLndpbmRvd05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdXRoRmxvdygpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIEZvcmNlIGF1dGhGbG93IHJlZGlyZWN0IG9uIFdpbmRvd3MgUGhvbmUuXHJcbiAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc1dpbmRvd3NQaG9uZSB8fCBnaWd5YS5sb2NhbEluZm8uaXNGYWNlYm9va0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdyZWRpcmVjdCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXNbJ2F1dGhGbG93J10gPyB0aGlzLnBhcmFtc1snYXV0aEZsb3cnXSA6ICdwb3B1cCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGVTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgbGlkID0gZ2lneWEudXRpbHMueGQuX2ZsYXNoTGlzdGVuZXJJRDtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChnaWd5YS50aGlzU2NyaXB0Lmdsb2JhbENvbmZbJ2xlZ2FjeUNyb3NzU2l0ZU1ldGhvZCddICYmIGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZlsnbGVnYWN5Q3Jvc3NTaXRlTWV0aG9kJ10udG9Mb3dlckNhc2UoKSAhPT0gJ2xvY2Fsc3RvcmFnZScpIHx8XHJcbiAgICAgICAgICAgIChnaWd5YS5sb2NhbEluZm8uaXNJRSAmJiB3aW5kb3cubmF2aWdhdG9yWydtc0RvTm90VHJhY2snXSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGlkID0gZ2lneWEudGhpc1NjcmlwdC5nbG9iYWxDb25mWydsZWdhY3lDcm9zc1NpdGVNZXRob2QnXSArICc6JyArIGdpZ3lhLnV0aWxzLnhkLl9mbGFzaExpc3RlbmVySUQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhdXRoRmxvdyA9IHRoaXMuZ2V0QXV0aEZsb3coKTtcclxuICAgICAgICBjb25zdCBzdGF0ZTogT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBkb21haW46IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXS5zcGxpdCgnIycpWzBdLFxyXG4gICAgICAgICAgICBpZDogdGhpcy5yZXF1ZXN0SUQsXHJcbiAgICAgICAgICAgIGxpZDogbGlkLFxyXG4gICAgICAgICAgICBtZXNzYWdpbmc6IGdpZ3lhLmxvY2FsSW5mby5tZXNzYWdpbmdNZXRob2QsIC8vIGhvdyB0byByZXR1cm4gbG9naW4gcmVzcG9uc2UgZnJvbSBwb3B1cCB0byBtYWluIGZyYW1lXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFMTEgJiYgd2luZG93LmluZGV4ZWREQikge1xyXG4gICAgICAgICAgICBzdGF0ZVsnbWVzc2FnaW5nJ10gPSBnaWd5YS5fLk1lc3NhZ2luZ01ldGhvZC5Mb2NhbFN0b3JhZ2VMaXN0ZW5lcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFsjNjc2NDFdIC0gaHR0cHM6Ly9naWd5YS50cG9uZGVtYW5kLmNvbS9lbnRpdHkvNjc2NDEtbG9jY2l0YW5lLXNvY2lhbC1sb2dpbi10by1saW5lLWhhbmdzXHJcbiAgICAgICAgLy8gaWYgcHJvdmlkZXIgaXMgTGluZSwgdXNlIExvY2FsU3RvcmFnZUxpc3RlbmVyIGJlY2F1c2UgaWYgTGluZSdzIG5hdGl2ZSBhcHAgaXMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2VcclxuICAgICAgICAvLyBpdCBtYXkgXCJoaWphY2tcIiAoZGVlcC1saW5rKSB0aGUgT0F1dGggcmVxdWVzdCBhbmQgcHJldmVudCB0aGUgUG9zdE1lc3NhZ2UgbWVjaGFuaXNtIGZyb20gd29ya2luZy5cclxuICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzQW5kcm9pZCAmJiB0aGlzLnBhcmFtc1sncHJvdmlkZXInXSAmJiB0aGlzLnBhcmFtc1sncHJvdmlkZXInXS50b0xvd2VyQ2FzZSgpID09ICdsaW5lJykge1xyXG4gICAgICAgICAgICBzdGF0ZVsnbWVzc2FnaW5nJ10gPSBnaWd5YS5fLk1lc3NhZ2luZ01ldGhvZC5Mb2NhbFN0b3JhZ2VMaXN0ZW5lcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhdXRoRmxvdyA9PT0gJ3JlZGlyZWN0Jykge1xyXG4gICAgICAgICAgICBzdGF0ZVsnc291cmNlVVJMJ10gPSB3aW5kb3cudG9wLmRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtc1sncmVkaXJlY3RVUkwnXSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVbJ3JlZGlyZWN0VVJMJ10gPSBnaWd5YS51dGlscy5VUkwuYWRkUGFyYW1zVG9VUkwodGhpcy5wYXJhbXNbJ3JlZGlyZWN0VVJMJ10sIHtcclxuICAgICAgICAgICAgICAgICAgICBnaWdfZXZlbnRzOiBnaWd5YS5ldmVudHMuZ2xvYmFsLmdldEV2ZW50c0Zvck9wZXJhdGlvbih0aGlzLm1ldGhvZE5hbWUpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbXNbJ3JlZGlyZWN0TWV0aG9kJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZVsncmVkaXJlY3RNZXRob2QnXSA9IHRoaXMucGFyYW1zWydyZWRpcmVjdE1ldGhvZCddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNlZSAjNDYzMDEgLSBhZGRVc2VySW5mbyBtdXN0IG9ubHkgYmUgcGFzc2VkIHdoZW4gdGhlIHVzZXIgZXhwbGljdGx5IHBhc3NlcyBhIHJlZGlyZWN0VVJMLlxyXG4gICAgICAgICAgICAgICAgc3RhdGVbJ2FkZFVzZXJJbmZvJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVbJ3NvdXJjZVVSTCddID0gZ2lneWEudXRpbHMuVVJMLmFkZFBhcmFtc1RvVVJMKHN0YXRlWydzb3VyY2VVUkwnXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ19ldmVudHM6IGdpZ3lhLmV2ZW50cy5nbG9iYWwuZ2V0RXZlbnRzRm9yT3BlcmF0aW9uKHRoaXMubWV0aG9kTmFtZSksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zWydwcm92aWRlciddICYmIHRoaXMucGFyYW1zWydwcm92aWRlciddLnRvTG93ZXJDYXNlKCkgPT0gJ2ZhY2Vib29rJykge1xyXG4gICAgICAgICAgICBzdGF0ZVsnaW52aXRlJ10gPSB0aGlzLnBhcmFtc1snaW52aXRlJ107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZXJ2ZXJQYXJhbXNTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBzZXJ2ZXJQYXJhbXMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcmFtTmFtZSBpbiB0aGlzLnBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1OYW1lLmluZGV4T2YoJ3hfJykgIT09IDAgJiYgdGhpcy5wYXJhbXNbcGFyYW1OYW1lXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJQYXJhbXNbJ3hfJyArIHBhcmFtTmFtZV0gPSB0aGlzLnBhcmFtc1twYXJhbU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHNlcnZlclBhcmFtc1twYXJhbU5hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VydmVyUGFyYW1zWyd4X0FQSUtleSddKSB7XHJcbiAgICAgICAgICAgIHNlcnZlclBhcmFtc1snY2xpZW50X2lkJ10gPSBzZXJ2ZXJQYXJhbXNbJ3hfQVBJS2V5J107XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2ZXJQYXJhbXNbJ3hfQVBJS2V5J107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VydmVyUGFyYW1zWyd4X29hdXRoX3Rva2VuJ10pIHtcclxuICAgICAgICAgICAgc2VydmVyUGFyYW1zWydvYXV0aF90b2tlbiddID0gc2VydmVyUGFyYW1zWyd4X29hdXRoX3Rva2VuJ107XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2ZXJQYXJhbXNbJ3hfb2F1dGhfdG9rZW4nXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlcnZlclBhcmFtc1sncmVkaXJlY3RfdXJpJ10gPSAnL0dTL0FmdGVyTG9naW4uYXNweCc7XHJcbiAgICAgICAgc2VydmVyUGFyYW1zWydyZXNwb25zZV90eXBlJ10gPSB0aGlzLnBhcmFtc1snYXV0aENvZGVPbmx5J10gPyAnY29kZScgOiAnc2VydmVyX3Rva2VuJztcclxuXHJcbiAgICAgICAgc2VydmVyUGFyYW1zWyd4X3NkayddID0gJ2pzXycgKyBnaWd5YS5idWlsZC52ZXJzaW9uO1xyXG5cclxuICAgICAgICB2YXIgcmVmVUlEID0gZ2lneWEudXRpbHMuY29va2llLmdldCgnX2dpZ1JlZlVpZF8nICsgdGhpcy5wYXJhbXNbJ0FQSUtleSddKTtcclxuICAgICAgICBpZiAocmVmVUlEKSB7XHJcbiAgICAgICAgICAgIHNlcnZlclBhcmFtc1sneF9yZWZVSUQnXSA9IHJlZlVJRDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlcnZlclBhcmFtc1snc3RhdGUnXSA9IHRoaXMuZ2V0U3RhdGVTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgZ2lneWEudXRpbHMub2JqZWN0LmFkZChzZXJ2ZXJQYXJhbXMsIHRoaXMuZ2V0QXV0aFBhcmFtcygpKTtcclxuICAgICAgICBjb25zdCBnbWlkVGlja2V0ID0gZ2lneWEuXy5hcGlBZGFwdGVyLmdldEdtaWRUaWNrZXQoKTtcclxuICAgICAgICBpZiAoZ21pZFRpY2tldCkge1xyXG4gICAgICAgICAgICBzZXJ2ZXJQYXJhbXNbJ2dtaWRUaWNrZXQnXSA9IGdtaWRUaWNrZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWxldGUgc2VydmVyUGFyYW1zWydyZWRpcmVjdFVSTCddOyAvLyB3ZSBkb24ndCBuZWVkIGl0IHNpbmNlIGl0J3MgcGFzc2VkIGluIHN0YXRlIHBhcmFtc1xyXG5cclxuICAgICAgICB0aGlzLnNlbnRMb2dpblRva2VuID0gc2VydmVyUGFyYW1zWydsb2dpbl90b2tlbiddO1xyXG5cclxuICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHNlcnZlclBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNlbmRBY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWZvcmVSZXF1ZXN0KCk7XHJcbiAgICAgICAgY29uc3Qgc2VydmVyUGFyYW1zUXVlcnlzdHJpbmcgPSB0aGlzLmdldFNlcnZlclBhcmFtc1N0cmluZygpO1xyXG5cclxuICAgICAgICBsZXQgcHJvdmlkZXI6IGdpZ3lhLl8ucHJvdmlkZXJzLlByb3ZpZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtc1sncHJvdmlkZXInXSkge1xyXG4gICAgICAgICAgICBwcm92aWRlciA9IGdpZ3lhLnNvY2lhbGl6ZS5fZ2V0UHJvdmlkZXJCeU5hbWUodGhpcy5wYXJhbXNbJ3Byb3ZpZGVyJ10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWxsb3cgbG9jYXRpb24vdG9vbGJhciB0byBiZSB0b2dnbGVkIG9uLlxyXG4gICAgICAgIGNvbnN0IHdpbmRvd09wdGlvbnM6IGdpZ3lhLnV0aWxzLndpbi5XaW5kb3dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZW51YmFyOiAwLFxyXG4gICAgICAgICAgICByZXNpemFibGU6IDEsXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcnM6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiBwcm92aWRlciA/IHByb3ZpZGVyLndpZHRoIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHByb3ZpZGVyID8gcHJvdmlkZXIuaGVpZ2h0IDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zWydlbmFibGVQb3B1cExvY2F0aW9uJ10pIHtcclxuICAgICAgICAgICAgd2luZG93T3B0aW9ucy5sb2NhdGlvbiA9IDE7XHJcbiAgICAgICAgICAgIHdpbmRvd09wdGlvbnMudG9vbGJhciA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93T3B0aW9ucy50b29sYmFyID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWVTcGxpdCA9IHRoaXMubWV0aG9kTmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSB0aGlzLnBhcmFtc1snb3JpZ2luYWxNZXRob2ROYW1lJ10gfHwgbWV0aG9kTmFtZVNwbGl0W21ldGhvZE5hbWVTcGxpdC5sZW5ndGggLSAxXTtcclxuICAgICAgICBnaWd5YS5yZXBvcnRzLnJlcG9ydChtZXRob2ROYW1lLCB0aGlzLnBhcmFtc1snQVBJS2V5J10sIHRoaXMucGFyYW1zWydjaWQnXSwgdGhpcy5wYXJhbXNbJ3NvdXJjZSddLCB0aGlzLnBhcmFtc1snc291cmNlRGF0YSddLCB7XHJcbiAgICAgICAgICAgIHNuOiBwcm92aWRlciA/IHByb3ZpZGVyLnRvU3RyaW5nKCkgOiBudWxsLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBmdWxsVXJsID0gdGhpcy5nZXRVcmwoKSArICc/JyArIHNlcnZlclBhcmFtc1F1ZXJ5c3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRBdXRoRmxvdygpID09PSAncmVkaXJlY3QnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy50b3AuZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGZ1bGxVcmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMueGQuYWRkTWVzc2FnZUxpc3RlbmVyKHRoaXMucmVxdWVzdElELCB0aGlzLnBhcmFtcywgdHJ1ZSwgKHJlc3BvbnNlOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ2lneWEudXRpbHMud2luLm9wZW4oZnVsbFVybCwgdGhpcy53aW5kb3dOYW1lLCB3aW5kb3dPcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIE1vZGUsXHJcbiAgICBTREtTZXRHcm91cFRva2VuUGFyYW1zLFxyXG4gICAgU0RLR2V0R3JvdXBUb2tlblBhcmFtcyxcclxuICAgIFNES0xvZ291dFBhcmFtcyxcclxuICAgIFNES1JlbW92ZUdyb3VwVG9rZW5QYXJhbXMsXHJcbiAgICBTREtTZXRMb2dpblRva2VuRXhwUGFyYW1zLFxyXG4gICAgU0RLR2V0TG9naW5Ub2tlbkV4cFBhcmFtcyxcclxuICAgIFNES0NoZWNrVG9rZW5SZW5ld1BhcmFtcyxcclxuICAgIFNES0NhbmFyeUluZGljYXRpb25QYXJhbXMsXHJcbiAgICBTREtCYXNlUGFyYW1zLFxyXG4gICAgRnJhbWVCYXNlUGFyYW1zLFxyXG4gICAgR2V0R3JvdXBUb2tlblJlc3BvbnNlLCBTREtTZXRHcm91cENvbnRleHQsXHJcbn0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSlMuU1NPL2FwcC9pbnRlcmZhY2VzJztcclxuXHJcbi8vICMjIyBTaW5nbGUgU2lnbiBPbiBhY3Jvc3MgbXVsdGlwbGUgZG9tYWlucyAjIyNcclxuXHJcbmxldCBjYWxsYmFja0NvdW50ZXIgPSAwO1xyXG5leHBvcnQgdmFyIF9zdG9yZWRMb2dpblRva2VuRXhwOiBzdHJpbmc7XHJcbmV4cG9ydCBsZXQgX3JlcXVlc3RUaW1lb3V0OiBudW1iZXIgPSAzMDAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9yZXF1ZXN0KFxyXG4gICAgbW9kZTogTW9kZSxcclxuICAgIHA6XHJcbiAgICAgICAgfCBTREtTZXRHcm91cFRva2VuUGFyYW1zXHJcbiAgICAgICAgfCBTREtHZXRHcm91cFRva2VuUGFyYW1zXHJcbiAgICAgICAgfCBTREtMb2dvdXRQYXJhbXNcclxuICAgICAgICB8IFNES1JlbW92ZUdyb3VwVG9rZW5QYXJhbXNcclxuICAgICAgICB8IFNES1NldExvZ2luVG9rZW5FeHBQYXJhbXNcclxuICAgICAgICB8IFNES0dldExvZ2luVG9rZW5FeHBQYXJhbXNcclxuICAgICAgICB8IFNES0NoZWNrVG9rZW5SZW5ld1BhcmFtc1xyXG4gICAgICAgIHwgU0RLQ2FuYXJ5SW5kaWNhdGlvblBhcmFtc1xyXG4gICAgICAgIHwgU0RLU2V0R3JvdXBDb250ZXh0XHJcbikge1xyXG4gICAgaWYgKCFnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5KSB7XHJcbiAgICAgICAgaWYgKHAgJiYgcC5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAocCBhcyBTREtCYXNlUGFyYW1zKS5jYWxsYmFjayh7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGFyYW1zOiBGcmFtZUJhc2VQYXJhbXM7XHJcbiAgICBpZiAoIXApIHtcclxuICAgICAgICBwYXJhbXMgPSB7fSBhcyBhbnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEVuc3VyZSB0aGUgcGFyYW1zIHBhc3NlZCBhcmUgbm90IG1vZGlmaWVkIGJ5IHJlZmVyZW5jZS5cclxuICAgICAgICBwYXJhbXMgPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUocCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlmcjogSFRNTElGcmFtZUVsZW1lbnQ7XHJcbiAgICBsZXQgcmVxdWVzdFRpbWVvdXRJZDtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmRlYnVnKGBjbGVhbmluZyBzc28gaWZyYW1lYCk7XHJcblxyXG4gICAgICAgIC8vIGNsZWFudXAgaWZyYW1lXHJcbiAgICAgICAgaWZyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaWZyKTtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlcXVlc3RUaW1lb3V0SWQpO1xyXG5cclxuICAgICAgICAvLyBUeXBlY2FzdCByZXNwb25zZS5cclxuICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yQ29kZSAmJiB0eXBlb2YgcmVzcG9uc2UuZXJyb3JDb2RlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JDb2RlID0gTnVtYmVyKHJlc3BvbnNlLmVycm9yQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmV4cGlyZXNfaW4gJiYgdHlwZW9mIHJlc3BvbnNlLmV4cGlyZXNfaW4gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5leHBpcmVzX2luID0gTnVtYmVyKHJlc3BvbnNlLmV4cGlyZXNfaW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocCAmJiBwLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIChwIGFzIFNES0Jhc2VQYXJhbXMpLmNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcGFyYW1zLm0gPSBtb2RlO1xyXG4gICAgcGFyYW1zLmQgPSBgJHtnaWd5YS5sb2NhbEluZm8ucHJvdG9jb2x9Oi8vJHtkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZX1gO1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wb3J0KSB7XHJcbiAgICAgICAgcGFyYW1zLmQgKz0gJzonICsgZG9jdW1lbnQubG9jYXRpb24ucG9ydDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaHJvbWUgY2FjaGVzIHRoZSBmcmFnbWVudCB3aGVuIGxvYWRlZCBmb3IgdGhlIGZpcnN0IHRpbWUuIHdvcmthcm91bmQ6XHJcbiAgICBwYXJhbXMuY2FsbGJhY2tJRCA9ICdnaWdfc3NvX2NiJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJ18nICsgY2FsbGJhY2tDb3VudGVyKys7XHJcbiAgICBwYXJhbXMuc0FQSUtleSA9IGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5O1xyXG4gICAgcGFyYW1zW2dpZ3lhLmxvZ2dlci5jb25maWdLZXldID0gSlNPTi5zdHJpbmdpZnkoZ2lneWEubG9nZ2VyLmdldENvbmZpZygpKTtcclxuICAgIGNvbnN0IGZyYWdtZW50ID0gZ2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHBhcmFtcyk7XHJcblxyXG4gICAgY29uc3QgaWZyYW1lTG9hZGVyID0gKHJldHJpZXMgPSAwKSA9PiB7XHJcblxyXG4gICAgICAgIGdpZ3lhLnV0aWxzLnhkLmFkZE1lc3NhZ2VMaXN0ZW5lcihwYXJhbXMuY2FsbGJhY2tJRCwge30sIGZhbHNlLCBjYWxsYmFjaywgZ2lneWEuXy5NZXNzYWdpbmdNZXRob2QuUG9zdE1lc3NhZ2UpO1xyXG4gICAgICAgIGlmciA9IF9nZXRJZnJhbWUocGFyYW1zLmNhbGxiYWNrSUQpO1xyXG5cclxuICAgICAgICBjb25zdCBmbk9uTG9hZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3RUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0b3RhbCBmYWlsdXJlXHJcbiAgICAgICAgICAgICAgICBpZiAocmV0cmllcyA8PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYFNTTyBDb21tdW5pY2F0aW9uIFRpbWVvdXRgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElFMTFQcml2YXRlTW9kZTogZ2lneWEubG9jYWxJbmZvLmlzSUUxMSAmJiAhd2luZG93LmluZGV4ZWREQiwgbW9kZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXNldFxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMueGQucmVtb3ZlTWVzc2FnZUxpc3RlbmVyKHBhcmFtcy5jYWxsYmFja0lEKTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFbGVtZW50KGlmcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmV0cnlcclxuICAgICAgICAgICAgICAgIGlmcmFtZUxvYWRlcihyZXRyaWVzIC0gMSk7XHJcblxyXG4gICAgICAgICAgICB9LCBfcmVxdWVzdFRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcXMgPSBnaWd5YS51dGlscy5rZXlWYWx1ZS5zZXJpYWxpemUoe1xyXG4gICAgICAgICAgICAgICAgQVBJS2V5OiBnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5LFxyXG4gICAgICAgICAgICAgICAgc3NvU2VnbWVudDogZ2lneWEucGFydG5lclNldHRpbmdzLnNzb1NlZ21lbnQgfHwgJycsIC8vIFRoZXJlIGlzIG5vIGRlZmF1bHQgc2VnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBnaWd5YS5idWlsZC52ZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgYnVpbGQ6IGdpZ3lhLmJ1aWxkLm51bWJlciB8fCAtMSwgLy8gVG8gY2xlYXIgQ0ROIGNhY2hlLixcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzaG91bGQgYWx3YXlzIGxvYWQgZnJvbSBnaWd5YSdzIGRvbWFpbiBleGNlcHQgd2hlbiBvdmVycmlkZW4gZm9yICM1MDI2MS5cclxuICAgICAgICAgICAgaWZyLnNyYyA9IGAke2dpZ3lhLnRoaXNTY3JpcHQucHJvdG9jb2x9Oi8vJHtnaWd5YS50aGlzU2NyaXB0Lmdsb2JhbENvbmZbJ3N0b3JhZ2VEb21haW5PdmVycmlkZSddIHx8IGdpZ3lhLl8uZ2V0R2lneWFEb21haW4oJ2NkbnMnKX0vZ3Mvc3NvLmh0bT8ke3FzfSMke2ZyYWdtZW50fWA7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKGlmciwgJ2xvYWQnLCBmbk9uTG9hZCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoaWZyLCAnbG9hZCcsIGZuT25Mb2FkKTtcclxuXHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmRlYnVnKGBvcGVuaW5nIHNzbyBpZnJhbWVgLCBwYXJhbXMpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hcHBlbmRUb0JvZHkoaWZyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5mdW5jdGlvbnMuaW52b2tlT25QYWdlTG9hZCgoKSA9PiBnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGlmcikpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWZyYW1lTG9hZGVyKDMpO1xyXG59XHJcbmZ1bmN0aW9uIF9nZXRJZnJhbWUocmVxdWVzdElkOiBzdHJpbmcpOiBIVE1MSUZyYW1lRWxlbWVudCB7XHJcbiAgICBjb25zdCBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuXHJcbiAgICAvLyBBYnNvbHV0ZSBwb3NpdGlvbiB3aXRoIC0xMDAwcHggY2F1c2VzIHNjcm9sbGluZyBzbG93ZG93bnMgb24gbW9iaWxlIGRldmljZXMuXHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSU9TIHx8IGdpZ3lhLmxvY2FsSW5mby5pc0lPU0Nocm9tZSB8fCBnaWd5YS5sb2NhbEluZm8uaXNBbmRyb2lkKSB7XHJcbiAgICAgICAgaWZyLnN0eWxlLndpZHRoID0gJzBweCc7XHJcbiAgICAgICAgaWZyLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICAgIGlmci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZnIuc3R5bGUud2lkdGggPSAnMzBweCc7XHJcbiAgICAgICAgaWZyLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcclxuICAgICAgICBpZnIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIGlmci5zdHlsZS50b3AgPSAnLTEwMDBweCc7XHJcbiAgICAgICAgaWZyLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWZyLmlkID0gJ2dpZ19zc29fJyArIHJlcXVlc3RJZDtcclxuICAgIGdpZ3lhLnV0aWxzLmZ1bmN0aW9ucy5hZGRTcmNUb0lGcmFtZUlmTmVlZGVkKGlmcik7XHJcblxyXG4gICAgcmV0dXJuIGlmcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JvdXBUb2tlbihwYXJhbXM/OiBTREtHZXRHcm91cFRva2VuUGFyYW1zKTogdm9pZCB7XHJcbiAgICBnaWd5YS5sb2dnZXIuaW5mbyhgdHJ5aW5nIHRvIGdldCBzc28gZ3JvdXAgbG9naW4gdG9rZW5gKTtcclxuXHJcbiAgICBfcmVxdWVzdCgnZ2V0VG9rZW4nLCB7XHJcbiAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogR2V0R3JvdXBUb2tlblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIF9zdG9yZWRMb2dpblRva2VuRXhwID0gcmVzcG9uc2UuZ2x0ZXhwO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0R3JvdXBUb2tlbkZyb21SZXNwb25zZShsb2dpblRva2VuOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlciB8IHN0cmluZywgY2FsbGJhY2s/OiAocmVzcG9uc2U6IEdldEdyb3VwVG9rZW5SZXNwb25zZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgLy8gSWYgbGVmdCB1bmRlZmluZWQsIGlzIHNlc3Npb24gY29va2llLlxyXG4gICAgbGV0IGV4cGlyYXRpb246IG51bWJlcjtcclxuICAgIGV4cGlyZXNJbiA9IHR5cGVvZiBleHBpcmVzSW4gPT09ICdzdHJpbmcnICYmIGV4cGlyZXNJbiA/IE51bWJlcihleHBpcmVzSW4pIDogZXhwaXJlc0luO1xyXG5cclxuICAgIGlmIChleHBpcmVzSW4gPT09IDApIHtcclxuICAgICAgICAvLyBTZXNzaW9uIGNvb2tpZSBvciBkeW5hbWljIHNlc3Npb24gY29va2llLlxyXG4gICAgICAgIC8vIEVpdGhlciB3YXksIGZsYWcgdGhlIGV4cGlyYXRpb24gYXMgMC5cclxuICAgICAgICBleHBpcmF0aW9uID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gbm93IHdoZW4gdGhlIGNvb2tpZSBzaG91bGQgZXhwaXJlLlxyXG4gICAgICAgIGxldCBleHBpcmVzSW5NczogbnVtYmVyO1xyXG4gICAgICAgIGlmICghZXhwaXJlc0luKSB7XHJcbiAgICAgICAgICAgIGV4cGlyZXNJbk1zID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDM2NSAqIDE1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV4cGlyZXNJbk1zID0gTnVtYmVyKGV4cGlyZXNJbikgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBleHBpcmVzIGluIG1pbGxpc2Vjb25kcyB0byBhbiBhIHRpbWVzdGFtcCAoYWxzbyBtaWxsaXNlY29uZHMpLlxyXG4gICAgICAgIGV4cGlyYXRpb24gPSBEYXRlLm5vdygpICsgZXhwaXJlc0luTXM7XHJcbiAgICB9XHJcbiAgICAvLyBTZXQgZ3JvdXAgdG9rZW4uXHJcbiAgICBzZXRHcm91cFRva2VuKHtcclxuICAgICAgICBsdDogbG9naW5Ub2tlbixcclxuICAgICAgICBleHBpcmF0aW9uOiBleHBpcmF0aW9uLFxyXG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0R3JvdXBUb2tlbihwYXJhbXM6IFNES1NldEdyb3VwVG9rZW5QYXJhbXMpOiB2b2lkIHtcclxuICAgIC8vIEFkZCBjdXJyZW50IGdsdGV4cCBjb29raWUgdG8gdGhlIHBhcmFtZXRlcnMgYXV0b21hdGljYWxseS5cclxuICAgIGlmICghcGFyYW1zLmdsdGV4cCkge1xyXG4gICAgICAgIHBhcmFtcy5nbHRleHAgPSBnaWd5YS51dGlscy5jb29raWUuZ2V0KGBnbHRleHBfJHtnaWd5YS50aGlzU2NyaXB0LkFQSUtleX1gKTtcclxuICAgIH1cclxuICAgIF9yZXF1ZXN0KCdzZXRUb2tlbicsIHBhcmFtcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQocGFyYW1zPzogU0RLTG9nb3V0UGFyYW1zKTogdm9pZCB7XHJcbiAgICBfcmVxdWVzdCgnbG9nb3V0JywgcGFyYW1zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUdyb3VwVG9rZW4ocGFyYW1zPzogU0RLUmVtb3ZlR3JvdXBUb2tlblBhcmFtcyk6IHZvaWQge1xyXG4gICAgX3JlcXVlc3QoJ3JlbW92ZVRva2VuJywgcGFyYW1zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ2luVG9rZW5FeHAocGFyYW1zOiBTREtTZXRMb2dpblRva2VuRXhwUGFyYW1zLCB1c2VDYWNoZSA9IHRydWUpOiB2b2lkIHtcclxuICAgIC8vIERvbid0IHN0b3JlIHRoZSBsb2dpbiB0b2tlbiBhZ2FpbiBpZiB3ZSd2ZSBhbHJlYWR5IHN0b3JlZCBpdC5cclxuICAgIGlmICh1c2VDYWNoZSAmJiBfc3RvcmVkTG9naW5Ub2tlbkV4cCAmJiBwYXJhbXMubG9naW5Ub2tlbkV4cCA9PT0gX3N0b3JlZExvZ2luVG9rZW5FeHApIHtcclxuICAgICAgICBpZiAocGFyYW1zLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayh7IGdsdGV4cDogX3N0b3JlZExvZ2luVG9rZW5FeHAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIF9zdG9yZWRMb2dpblRva2VuRXhwID0gcGFyYW1zLmxvZ2luVG9rZW5FeHA7XHJcbiAgICBfcmVxdWVzdCgnc2V0TG9naW5Ub2tlbkV4cCcsIHBhcmFtcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dpblRva2VuRXhwKHBhcmFtczogU0RLR2V0TG9naW5Ub2tlbkV4cFBhcmFtcyk6IHZvaWQge1xyXG4gICAgX3JlcXVlc3QoJ2dldExvZ2luVG9rZW5FeHAnLCBwYXJhbXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUb2tlblJlbmV3KHBhcmFtczogU0RLQ2hlY2tUb2tlblJlbmV3UGFyYW1zKTogdm9pZCB7XHJcbiAgICBnaWd5YS5sb2dnZXIuaW5mbyhgdmVyaWZ5aW5nIGxvZ2luIHRva2VuIHdpdGggc3NvIGdyb3VwYCk7XHJcbiAgICBfcmVxdWVzdCgnY2hlY2tUb2tlblJlbmV3JywgcGFyYW1zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNDYW5hcnlJbmRpY2F0aW9uKHBhcmFtczogU0RLQ2FuYXJ5SW5kaWNhdGlvblBhcmFtcyk6IHZvaWQge1xyXG4gICAgX3JlcXVlc3QoJ3N5bmNDYW5hcnlJbmRpY2F0aW9uJywgcGFyYW1zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEdyb3VwQ29udGV4dENvb2tpZShwYXJhbXM6IFNES1NldEdyb3VwQ29udGV4dCl7XHJcbiAgICBfcmVxdWVzdCgnc2V0R3JvdXBDb250ZXh0JywgcGFyYW1zKTtcclxufVxyXG4iLCJpbXBvcnQgeyBHZXRHcm91cFRva2VuUmVzcG9uc2UgfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5KUy5TU08vYXBwL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyByZW1vdmVHcm91cFRva2VuIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9Tc29CcmlkZ2UnO1xyXG5pbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gJy4uLy4uL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XHJcblxyXG4vLyBMb2FkIGFuZCBzYXZlIHRva2VucyBiYXNlZCBvbiBBUEkga2V5c1xyXG5sZXQgX2N1clNlc3Npb25FeHBpcmF0aW9uOiBudW1iZXI7XHJcbmNvbnN0IF90cmllZEdBQ3MgPSB7fTtcclxuZXhwb3J0IGNvbnN0IGFjdGl2ZU5hbWVzcGFjZXMgPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRHbHRFeHAoZ2x0ZXhwOiBzdHJpbmcgPSBnZXRHbHRleHBDb29raWUoKSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFnbHRleHAgfHwgZ2lneWEudXRpbHMuZ2x0ZXhwLmlzVmFsaWQoZ2x0ZXhwKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2x0ZXhwQ29va2llKEFQSUtleTogc3RyaW5nID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcclxuICAgIHJldHVybiBnaWd5YS51dGlscy5jb29raWUuZ2V0KGBnbHRleHBfJHtBUElLZXl9YCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEdsdGV4cChnbHRleHA6IHN0cmluZywgQVBJS2V5OiBzdHJpbmcgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSkge1xyXG4gICAgaWYgKGdsdGV4cCAmJiAhaXNHaWd5YUNvb2tpZURvbWFpbigpKSB7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZShgZ2x0ZXhwXyR7QVBJS2V5fWApO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5zZXQoYGdsdGV4cF8ke0FQSUtleX1gLCBnbHRleHApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0VG9rZW5Db29raWVOYW1lKEFQSUtleSA9IGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5KSB7XHJcbiAgICBpZiAoQVBJS2V5KSB7XHJcbiAgICAgICAgcmV0dXJuICdnbHRfJyArIEFQSUtleTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdfZ2lnX2x0JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0KEFQSUtleSA9IGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5KSB7XHJcbiAgICBjb25zdCBsdCA9IGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoX2dldFRva2VuQ29va2llTmFtZShBUElLZXkpKTtcclxuICAgIGlmIChsdCkge1xyXG4gICAgICAgIHJldHVybiBsdC5zcGxpdCgnfCcpWzBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0KEFQSUtleTogc3RyaW5nLCBsb2dpbl90b2tlbjogc3RyaW5nLCBleHBpcmVzX2luPzogbnVtYmVyIHwgc3RyaW5nLCBzZXNzaW9uRXhwaXJhdGlvbj86IG51bWJlcikge1xyXG4gICAgZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2dpZ3lhU2V0dGluZ3MnKTtcclxuXHJcbiAgICBnaWd5YS5sb2dnZXIuaW5mbyhgc2V0dGluZyBhIG5ldyBsb2dpbiB0b2tlbmApO1xyXG5cclxuICAgIGlmICghQVBJS2V5KSB7XHJcbiAgICAgICAgQVBJS2V5ID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXk7XHJcbiAgICB9XHJcbiAgICBpZiAoQVBJS2V5KSB7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnNldCgnZ2x0XycgKyBBUElLZXksIGxvZ2luX3Rva2VuLCBleHBpcmVzX2luKTtcclxuICAgICAgICBnaWd5YS51dGlscy5jb29raWUucmVtb3ZlKCdnYWNfJyArIEFQSUtleSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5zZXQoJ19naWdfbHQnLCBsb2dpbl90b2tlbiwgZXhwaXJlc19pbik7XHJcbiAgICB9XHJcblxyXG4gICAgX2N1clNlc3Npb25FeHBpcmF0aW9uID0gc2Vzc2lvbkV4cGlyYXRpb247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRTZXNzaW9uRXhwaXJhdGlvbigpIHtcclxuICAgIHJldHVybiBfY3VyU2Vzc2lvbkV4cGlyYXRpb247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEZyb21HQUMocGFyYW1zOiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgaWYgKGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5KSB7XHJcbiAgICAgICAgbGV0IGdhYyA9IGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoJ2dhY18nICsgZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpO1xyXG4gICAgICAgIGlmIChnYWMgJiYgIXBhcmFtc1snbmV2ZXJUcnlHQUMnXSkge1xyXG4gICAgICAgICAgICAvLyBTb21ldGltZXMgZ2FjIGlzIHNldCB3aXRoIHN1cnJvdW5kaW5nIGRvdWJsZS1xdW90ZXMgKGxpa2UgaW4gamF2YSkuIFN0cmlwIHF1b3Rlcy5cclxuICAgICAgICAgICAgaWYgKGdhYy5jaGFyQXQoMCkgPT09ICdcIicgJiYgZ2FjLmNoYXJBdChnYWMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgIGdhYyA9IGdhYy5zdWJzdHJpbmcoMSwgZ2FjLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoX3RyaWVkR0FDc1tnYWNdKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpOyAvLyBBbHJlYWR5IHRyaWVkLCBkb24ndCB0cnkgYWdhaW4uXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RyaWVkR0FDc1tnYWNdID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS51cGRhdGVSZWZVSUQoKTtcclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5ub3RpZnlMb2dpbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVBcGlRdWV1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBuZXZlclRyeUdBQzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoQ29kZTogZ2FjLFxyXG4gICAgICAgICAgICAgICAgICAgIEFQSUtleTogZ2lneWEudGhpc1NjcmlwdC5BUElLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50X2lkOiBnaWd5YS50aGlzU2NyaXB0LkFQSUtleVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJbnRlbnRpb25hbGx5IHdlJ3JlIG5vdCByYWlzaW5nIG9uTG9naW4gZXZlbnQsIGFzIG5vIGxvZ2luIHdhcyBtYWRlLCBqdXN0IGVzdGFibGlzaGVkICh2ZXJpZmllZCBpbiBidWcgNDM0MTkpLlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZSgnZ2FjXycgKyBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXZlclRyeUdBQyBpcyB1c2VkIHRvIGF2b2lkIHRyeWluZyBzZXRGcm9tR2FjIGZvcmV2ZXIgaWYgdGhlIGNvb2tpZSB3YXNuJ3QgcmVtb3ZlZCAod2hlbiBhIHdyb25nIGJhc2VEb21haW4gaXMgdXNlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLnJlZnJlc2hVSSh7IG5ldmVyVHJ5R0FDOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRGcm9tU3NvUmVzcG9uc2UocmVzOiBHZXRHcm91cFRva2VuUmVzcG9uc2UsIEFQSUtleTogc3RyaW5nID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcclxuICAgIGlmICghcmVzKSByZXR1cm47XHJcbiAgICBzd2l0Y2ggKHJlcy5lcnJvckNvZGUpIHtcclxuICAgICAgICBjYXNlIEdTRXJyb3JzLlVOQVVUSE9SSVpFRF9VU0VSOlxyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgbm8gZ3JvdXAgc2Vzc2lvbiBmb3VuZGApO1xyXG4gICAgICAgICAgICByZW1vdmUoQVBJS2V5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBHU0Vycm9ycy5JTlZBTElEX1RPS0VOOlxyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgZXhpc3RpbmcgZ3JvdXAgc2Vzc2lvbiB3YXMgcmV2b2tlZGApO1xyXG4gICAgICAgICAgICByZW1vdmUoQVBJS2V5KTtcclxuICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaFdoZW5IYW5kbGVyQWRkZWQoeyBldmVudE5hbWU6ICdhY2NvdW50cy5sb2dvdXQnIH0pO1xyXG4gICAgICAgICAgICBnaWd5YS5ldmVudHMuZ2xvYmFsLmRpc3BhdGNoV2hlbkhhbmRsZXJBZGRlZCh7IGV2ZW50TmFtZTogJ2xvZ291dCcgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgR1NFcnJvcnMuVE9LRU5fSEFTX1JFTkVXRUQ6XHJcbiAgICAgICAgY2FzZSBHU0Vycm9ycy5PSzpcclxuICAgICAgICAgICAgaWYgKCFyZXMubG9naW5fdG9rZW4pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBuZXcgc2Vzc2lvbiBmcm9tIGdyb3VwYCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXhwaXJlc19pbjogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBDb250ZXh0OiBhbnk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZ3JvdXBDb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBncm91cENvbnRleHQgPSBKU09OLnBhcnNlKHJlcy5ncm91cENvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNHaWd5YUNvb2tpZURvbWFpbigpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJdCBzaG91bGQgbmV2ZXIgZXhwaXJlIGlmIGEgZ2x0ZXhwIGlzIHByZXNlbnQuXHJcbiAgICAgICAgICAgICAgICBleHBpcmVzX2luID0gIXJlcy5nbHRleHAgPyByZXMuZXhwaXJlc19pbiA6IGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXRJbmZpbml0ZUV4cGlyYXRpb25UaW1lSW5TZWNvbmRzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IGxvZ2luIHRva2VuIGNvb2tpZVxyXG4gICAgICAgICAgICAgICAgc2V0KEFQSUtleSwgcmVzLmxvZ2luX3Rva2VuLCBleHBpcmVzX2luKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnbHRleHBDb29raWVOYW1lID0gYGdsdGV4cF8ke0FQSUtleX1gO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5nbHRleHAgJiYgIWdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoZ2x0ZXhwQ29va2llTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5jb29raWUuc2V0KGdsdGV4cENvb2tpZU5hbWUsIHJlcy5nbHRleHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaExvZ2luRXZlbnQoe2V4cGlyZXNfaW4sIGdyb3VwQ29udGV4dH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmVycm9yKGBzc286IHVuc3VwcG9ydGVkIHJlc3BvbnNlYCk7XHJcbiAgICAgICAgICAgIHRocm93ICdnaWd5YTogdW5zdXBwb3J0ZWQgcmVzcG9uc2UgZnJvbSBzc28nO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaExvZ2luRXZlbnQoZXZlbnRQYXJhbXMgPSB7fSkge1xyXG4gICAgZ2lneWEudXRpbHMucXVldWUuaG9sZCgndmVyaWZ5TG9naW4nLCAnQVBJJyk7XHJcbiAgICBnaWd5YS5hY2NvdW50cy52ZXJpZnlMb2dpbih7XHJcbiAgICAgICAgaWdub3JlQXBpUXVldWU6IHRydWUsIC8vIGlnbm9yZSB0aGUgYXBpIHF1ZXVlXHJcbiAgICAgICAgc3VwcHJlc3NMb2dpbkV2ZW50OiB0cnVlLCAvLyB0aGUgY2FsbGJhY2sgYmVsb3cgd2lsbCB0cmlnZ2VyIHRoZSBsb2dpbiBldmVudHNcclxuICAgICAgICBpbmNsdWRlOiBnaWd5YS51dGlscy5zdHJpbmdVdGlscy5tZXJnZUNvbW1hU2VwYXJhdGVkVmFsdWVzKCdwcm9maWxlLGRhdGEnLCBnaWd5YS50aGlzU2NyaXB0Lmdsb2JhbENvbmZbJ2luY2x1ZGUnXSksXHJcbiAgICAgICAgZXh0cmFQcm9maWxlRmllbGRzOiAnc2FtbERhdGEnLFxyXG4gICAgICAgIGNhbGxiYWNrOiBhY2NvdW50SW5mb1JlcyA9PiB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnF1ZXVlLnJlbGVhc2UoJ3ZlcmlmeUxvZ2luJywgJ0FQSScpOyAvLyByZWxlYXNlIHRoZSBhcGkgcXVldWVcclxuICAgICAgICAgICAgaWYgKGFjY291bnRJbmZvUmVzLmVycm9yQ29kZSA9PSBHU0Vycm9ycy5PSykge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuXy5hcGlBZGFwdGVycy5pc1Nlc3Npb25Gcm9tU3NvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdXNlIHdoYXRldmVyIGZpZWxkIHlvdSBuZWVkIGZyb20gYWNjb3VudEluZm9SZXMgbm93IGJlZm9yZSBhY2NvdW50SW5mb1JlcyB3aWxsIGJlIG92ZXJyaWRkZW4gKHN1Y2ggYXMgJ3NvdXJjZScpXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGFjY291bnRJbmZvUmVzLnNvdXJjZTtcclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5nbG9iYWwuZGlzcGF0Y2hXaGVuSGFuZGxlckFkZGVkKHsgZXZlbnROYW1lOiAnc29jaWFsaXplLmxvZ2luJyB9LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgKGV2ZW50T2JqOiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICBzaWduSURzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhRmllbGRzOiAnc2FtbERhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB1c2VySW5mb1JlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnRPYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmogPSBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoW2V2ZW50T2JqLCBldmVudFBhcmFtc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudEluZm9SZXMuZXJyb3JDb2RlID09IEdTRXJyb3JzLk9LICYmIHVzZXJJbmZvUmVzLmVycm9yQ29kZSA9PSBHU0Vycm9ycy5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmogPSBnaWd5YS5fLmFkZFVzZXJJbmZvVG9FdmVudCh1c2VySW5mb1JlcywgeyBldmVudE5hbWU6ICdsb2dpbicgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9ybWFsaXppbmcgZXZlbnQgZmllbGRzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsnc291cmNlJ10gPSBzb3VyY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsnbmV3VXNlciddID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsncHJvdmlkZXInXSA9ICdzaXRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqWydsb2dpbk1vZGUnXSA9ICdzdGFuZGFyZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihldmVudE9ialsndXNlciddKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsndXNlciddLmVycm9yQ29kZSA9IHVzZXJJbmZvUmVzLmVycm9yQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsndXNlciddLmNhbGxJZCA9IHVzZXJJbmZvUmVzLmNhbGxJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsnY2FuY2VsJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50T2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaFdoZW5IYW5kbGVyQWRkZWQoeyBldmVudE5hbWU6ICdhY2NvdW50cy5sb2dpbicgfSwgbnVsbCwgYXN5bmMgKGV2ZW50T2JqOiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudE9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnRPYmogPSBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoW2V2ZW50T2JqLCBldmVudFBhcmFtc10pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhY2NvdW50SW5mb1Jlcy5lcnJvckNvZGUgPT0gR1NFcnJvcnMuT0spIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudE9ialsnZXZlbnROYW1lJ10gPSAnYWNjb3VudHMubG9naW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudEluZm9SZXMuVUlEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmZvUmVzID0gYXdhaXQgbmV3IFByb21pc2U8YW55PihyID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5hY2NvdW50cy5nZXRBY2NvdW50SW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMubWVyZ2VDb21tYVNlcGFyYXRlZFZhbHVlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGUsZGF0YScsIGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZlsnaW5jbHVkZSddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5vYmplY3QuZXh0cmFjdFByb3BlcnRpZXMoYWNjb3VudEluZm9SZXMsIGV2ZW50T2JqLCAnc2lnbmF0dXJlfFVJRFNpZ3x0aW1lc3RhbXB8VUlEU2lnbmF0dXJlfHNpZ25hdHVyZVRpbWVzdGFtcHxVSUR8cHJvZmlsZXxkYXRhfGRhdGFDZW50ZXJ8aWRfdG9rZW4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmpbJ2NhbmNlbCddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50T2JqKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoQVBJS2V5ID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcclxuICAgIGlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5KSB7XHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHJlbW92aW5nIGdyb3VwIGxvZ2luIHRva2VuYCk7XHJcbiAgICAgICAgcmVtb3ZlR3JvdXBUb2tlbigpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldChBUElLZXkpKSB7XHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHJlbW92aW5nIGxvZ2luIHRva2VuYCk7XHJcbiAgICB9XHJcbiAgICBnaWd5YS51dGlscy5jb29raWUucmVtb3ZlKGBnbHRfJHtBUElLZXl9YCk7XHJcbiAgICBnaWd5YS51dGlscy5jb29raWUucmVtb3ZlKCdfZ2lnX2x0Jyk7XHJcbiAgICBnaWd5YS51dGlscy5jb29raWUucmVtb3ZlKGBnbHRleHBfJHtBUElLZXl9YCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuUGFyYW0oQVBJS2V5OiBzdHJpbmcsIHBhcmFtTmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBsdCA9IGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoX2dldFRva2VuQ29va2llTmFtZShBUElLZXkpKTtcclxuICAgIGlmIChsdCkge1xyXG4gICAgICAgIGNvbnN0IGx0U2VncyA9IGx0LnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgaWYgKGx0U2Vncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnaWd5YS51dGlscy5rZXlWYWx1ZS5kZXNlcmlhbGl6ZShsdFNlZ3NbMV0pW3BhcmFtTmFtZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzR2lneWFDb29raWVEb21haW4oKSB7XHJcbiAgICBjb25zdCBjb29raWVEb21haW4gPSBnaWd5YS51dGlscy5jb29raWUuZ2V0RGVmYXVsdERvbWFpbigpO1xyXG4gICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnN0cmluZ1V0aWxzLmVuZHNXaXRoKGNvb2tpZURvbWFpbiwgZ2lneWEuZGVmYXVsdEFwaURvbWFpbik7XHJcbn1cclxuIiwiaW1wb3J0IHsgSUFwaVNlcnZpY2UsIElBcGlTZXJ2aWNlSW5pdEluZm8gfSBmcm9tICdzcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgSUFwaUFkYXB0ZXJJbml0U2V0dGluZ3MsIElBcGlBZGFwdGVyLCBBcGlBZGFwdGVyU2V0dGluZ3MsIEFwaUFkYXB0ZXJPYXV0aFNldHRpbmdzLCBJR21pZFRpY2tldFJlc3BvbnNlIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvaW50ZXJmYWNlcy9JQXBpQWRhcHRlcic7XHJcbmltcG9ydCAqIGFzIHRva2VuU3RvcmUgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9Ub2tlblN0b3JlJztcclxuaW1wb3J0ICogYXMgc3NvQnJpZGdlIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvU3NvQnJpZGdlJztcclxuaW1wb3J0IHsgQXBpUmVxdWVzdCB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvQXBpUmVxdWVzdCc7XHJcbmltcG9ydCB7IE9hdXRoUmVxdWVzdCB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvT2F1dGhSZXF1ZXN0JztcclxuaW1wb3J0IHsgQmFzZVJlcXVlc3QgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5XZWIvYXBwL0Jhc2VSZXF1ZXN0JztcclxuaW1wb3J0IHsgU2VydmljZVByb3h5IH0gZnJvbSAnc3JjL2NvcmUvU2VydmljZVByb3h5L1NlcnZpY2VQcm94eSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICdzcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9BcGlTZXJ2aWNlJztcclxuaW1wb3J0IHsgR1NFcnJvcnMgfSBmcm9tICcuLi8uLi9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMnO1xyXG5pbXBvcnQge0Fic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciwgQ29va2llU3RvcmFnZUFkYXB0ZXJ9IGZyb20gXCIuLi8uLi9HaWd5YS5Kcy9hcHAvVXRpbHMvbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5pZiAoIWdpZ3lhLmlzR2lneWEpIGdpZ3lhLmlzR2lneWEgPSB0cnVlO1xyXG5leHBvcnQgbGV0IGFwaVNlcnZpY2U6IElBcGlTZXJ2aWNlO1xyXG5leHBvcnQgY29uc3Qgd2ViQWRhcHRlck5hbWUgPSAnV2ViJztcclxuZXhwb3J0IGZ1bmN0aW9uIG5ld0FwaUFkYXB0ZXIoYWRhcHRlclNldHRpbmdzOiBJQXBpQWRhcHRlckluaXRTZXR0aW5ncyk6IElBcGlBZGFwdGVyIHtcclxuICAgIHJldHVybiBuZXcgV2ViQWRhcHRlcihhZGFwdGVyU2V0dGluZ3MsIG5ldyBDb29raWVTdG9yYWdlQWRhcHRlcigpKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYkFkYXB0ZXIgaW1wbGVtZW50cyBJQXBpQWRhcHRlciB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gd2ViQWRhcHRlck5hbWU7XHJcbiAgICBwcml2YXRlIF9hcGlTZXJ2aWNlOiBJQXBpU2VydmljZTtcclxuICAgIHByaXZhdGUgX2dtaWRUaWNrZXQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkYXB0ZXJTZXR0aW5ncz86IElBcGlBZGFwdGVySW5pdFNldHRpbmdzLCBwcml2YXRlIF9zdG9yYWdlPzogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyKSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdG9yYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBpbml0KGluaXRDYWxsYmFjazogKCkgPT4gdm9pZCwgcmV0cmllcyA9IDApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBoYXNCb290c3RyYXBwZWRDb29raWUgPSBgZ2lnX2Jvb3RzdHJhcF8ke2dpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5fWA7XHJcblxyXG4gICAgICAgIC8vIFdyYXBwZWQgaW4gYSB0cnkvY2F0Y2ggYmxvY2sgc28gdGhhdCB3ZSdsbCBjYXRjaCBBTlkgZXJyb3Igd2hlbiBmYWlsaW5nIHRvIGJvb3RzdHJhcC5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBib290c3RyYXBJbmRpY2F0aW9uID0gZ2lneWEucGFydG5lclNldHRpbmdzLmN1c3RvbUFQSURvbWFpblByZWZpeCB8fCAndmVyMic7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc0Jvb3RzdHJhcHBlZCA9IHRoaXMuZ2V0U3RvcmFnZSgpLmdldEl0ZW0oaGFzQm9vdHN0cmFwcGVkQ29va2llKSA9PT0gYm9vdHN0cmFwSW5kaWNhdGlvbjtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYGhhcyBib290c3RyYXBwZWQ6ICR7aGFzQm9vdHN0cmFwcGVkfWApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxvZyA9IGdpZ3lhLmxvZ2dlci5ncm91cCgnY3JlYXRlIGFwaSBzZXJ2aWNlJyk7XHJcbiAgICAgICAgICAgIGdpZ3lhLl8uYXBpQWRhcHRlcnMud2ViLmFwaVNlcnZpY2UgPSB0aGlzLl9hcGlTZXJ2aWNlID0gYXdhaXQgdGhpcy5jcmVhdGVBcGlTZXJ2aWNlKGhhc0Jvb3RzdHJhcHBlZCk7XHJcbiAgICAgICAgICAgIGxvZy5lbmQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCB0aGlzLl9hcGlTZXJ2aWNlLmJvb3RzdHJhcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZm8udGlja2V0SW5mbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRHbWlkVGlja2V0KGluZm8udGlja2V0SW5mbyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWhhc0Jvb3RzdHJhcHBlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UncmUgbm90IHVzaW5nIHN0b3JhZ2UgKG5vIHRpY2tldCkgdGhlbiB3ZSBtdXN0IGhhdmUgZ21pZCBjb29raWUgc2V0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFN0b3JhZ2UoKS5zZXRJdGVtKGhhc0Jvb3RzdHJhcHBlZENvb2tpZSwgYm9vdHN0cmFwSW5kaWNhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmZ1bmN0aW9ucy5jcmVhdGVBbGlhcygnZ2lneWEuYXV0aC5sb2dpblRva2VuLmdldCcsIHRva2VuU3RvcmUuZ2V0KTsgLy8gVE9ETyBjYW4gdGhpcyBiZSByZW1vdmVkP1xyXG5cclxuICAgICAgICAgICAgaWYgKGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29LZXkgJiYgZ2lneWEuY2FuYXJ5ICYmIGdpZ3lhLmNhbmFyeS5jb25maWcucHJvYmFiaWxpdHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3luY0NhbmFyeVdpdGhTU08oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pc1Nlc3Npb25WYWxpZCh1bmRlZmluZWQsIChpc1ZhbGlkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLmFjY291bnRTZXJ2aWNlLnZlcmlmeUxvZ2luKCkudGhlbihsb2dpblZlcmlmaWVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2dpblZlcmlmaWVkKSBnaWd5YS5ldmVudHMuZ2xvYmFsLmRpc3BhdGNoKHsgZXZlbnROYW1lOiAnbG9nb3V0LGFjY291bnRzLmxvZ291dCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1JldHVybkZyb21VUkwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgdXNlciBpcyAke2lzVmFsaWQgPyAnJyA6ICdub3QgJ31sb2dnZWQtaW5gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29LZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHNzbyBncm91cCBzeW5jIC0gJHtnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuU3RvcmUuc2V0RnJvbVNzb1Jlc3BvbnNlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2dpblRva2VuID0gdG9rZW5TdG9yZS5nZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NvQnJpZGdlLmNoZWNrVG9rZW5SZW5ldyh7IGxvZ2luVG9rZW4sIGNhbGxiYWNrIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzb0JyaWRnZS5nZXRHcm91cFRva2VuKHsgY2FsbGJhY2sgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgaWYgKHJldHJpZXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5pbml0KGluaXRDYWxsYmFjaywgcmV0cmllcyAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYGVycm9yIGJvb3RzdHJhcHBpbmcgc2RrYCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb3RzdHJhcCBmYWlsZWQnLFxyXG4gICAgICAgICAgICAgICAgc2NvcGU6ICdXZWJBZGFwdGVyLmluaXQnLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuZGVidWcoYHJlbW92aW5nIGJvb3RzdHJhcCBpbmRpY2F0aW9uYCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgpLnJlbW92ZUl0ZW0oaGFzQm9vdHN0cmFwcGVkQ29va2llKTtcclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKFxyXG4gICAgICAgICAgICAgICAge2V2ZW50TmFtZTogJ2luaXQnfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdGQUlMX1RPX0JPT1RTVFJBUCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogJ1dlYiBTREsgZmFpbGVkIHRvIGJvb3RzdHJhcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiA1MDAwMjYsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBgV2ViIFNESyBmYWlsZWQgdG8gYm9vdHN0cmFwOiAke2Vycm9yLm1lc3NhZ2UgfHwgZXJyb3J9YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGluaXRDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN5bmNDYW5hcnlXaXRoU1NPKCkge1xyXG4gICAgICAgIGNvbnN0IGlzQ2FuYXJ5ID0gdGhpcy5nZXRTdG9yYWdlKCkuZ2V0SXRlbShnaWd5YS5jYW5hcnkuY29uZmlnLmNvb2tpZXNOYW1lcy5pc0NhbmFyeSk7XHJcbiAgICAgICAgY29uc3QgY2FuYXJ5VmVyc2lvbiA9IHRoaXMuZ2V0U3RvcmFnZSgpLmdldEl0ZW0oZ2lneWEuY2FuYXJ5LmNvbmZpZy5jb29raWVzTmFtZXMudmVyc2lvbik7XHJcbiAgICAgICAgc3NvQnJpZGdlLnN5bmNDYW5hcnlJbmRpY2F0aW9uKHtcclxuICAgICAgICAgICAgaXNDYW5hcnksXHJcbiAgICAgICAgICAgIGNhbmFyeVZlcnNpb24sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZSB8fCBlLmVycm9yQ29kZSAhPT0gR1NFcnJvcnMuT0spIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmIChlLmlzQ2FuYXJ5ICYmIGUuaXNDYW5hcnkgIT09IGlzQ2FuYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCkuc2V0SXRlbShnaWd5YS5jYW5hcnkuY29uZmlnLmNvb2tpZXNOYW1lcy5pc0NhbmFyeSwgZS5pc0NhbmFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5hcnlWZXJzaW9uICYmIGUuY2FuYXJ5VmVyc2lvbiAhPT0gY2FuYXJ5VmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgpLnNldEl0ZW0oZ2lneWEuY2FuYXJ5LmNvbmZpZy5jb29raWVzTmFtZXMudmVyc2lvbiwgZS5jYW5hcnlWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGNyZWF0ZUFwaVNlcnZpY2UoaGFzQm9vdHN0cmFwcGVkOiBib29sZWFuKTogUHJvbWlzZTxJQXBpU2VydmljZT4ge1xyXG4gICAgICAgIC8vIHN0b3JhZ2VEb21haW5PdmVycmlkZSAtIHNlZSAjNTAyNjEuXHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZURvbWFpbiA9IGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZlsnc3RvcmFnZURvbWFpbk92ZXJyaWRlJ10gfHwgYGNkbnMuJHtnaWd5YS5kYXRhQ2VudGVyfS4ke2dpZ3lhLmRlZmF1bHRBcGlEb21haW59YDtcclxuICAgICAgICBjb25zdCBwcm90b2NvbCA9IGdpZ3lhLnRoaXNTY3JpcHQucHJvdG9jb2w7XHJcbiAgICAgICAgY29uc3QgbG9nZ2VyQ29uZmlnID0gYCR7Z2lneWEubG9nZ2VyLmNvbmZpZ0tleX09JHtlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZ2lneWEubG9nZ2VyLmdldENvbmZpZygpKSl9YDtcclxuXHJcbiAgICAgICAgY29uc3QgYXBpU2VydmljZVVybCA9IGAke3Byb3RvY29sfTovLyR7c3RvcmFnZURvbWFpbn0vZ3Mvd2ViU2RrL0FwaS5hc3B4P2FwaUtleT0ke2VuY29kZVVSSUNvbXBvbmVudChnaWd5YS50aGlzU2NyaXB0LkFQSUtleSl9JnZlcnNpb249JHtcclxuICAgICAgICAgICAgZ2lneWEuYnVpbGQudmVyc2lvblxyXG4gICAgICAgIH0mYnVpbGQ9JHtnaWd5YS5idWlsZC5udW1iZXJ9I29yaWdpbj0ke2RvY3VtZW50LmxvY2F0aW9uLmhyZWZ9JiR7bG9nZ2VyQ29uZmlnfWA7XHJcblxyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBvcGVuaW5nIGFwaSBmcmFtZWApO1xyXG4gICAgICAgIGNvbnN0IGFwaVNlcnZpY2VQcm94eSA9IG5ldyBTZXJ2aWNlUHJveHkoYXBpU2VydmljZVVybCk7XHJcblxyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBjcmVhdGluZyBhcGkgc2VydmljZWApO1xyXG4gICAgICAgIGNvbnN0IGluaXRJbmZvID0gYXdhaXQgYXBpU2VydmljZVByb3h5LmluaXQ8SUFwaVNlcnZpY2VJbml0SW5mbz4oKTtcclxuXHJcbiAgICAgICAgZ2lneWEucGFydG5lclNldHRpbmdzLnBsdWdpbnMuYXBpRG9tYWluID0gaW5pdEluZm8uYXBpRG9tYWluO1xyXG4gICAgICAgIGdpZ3lhLl8uZ2V0QXBpRG9tYWluID0gZ2lneWEuXy5hcGlEb21haW5GYWN0b3J5KGluaXRJbmZvLmFwaURvbWFpbiwgZ2lneWEuZGVmYXVsdEFwaURvbWFpbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFwaURvbWFpbiA9IGdpZ3lhLl8uVXJpLnBhcnNlKGluaXRJbmZvLmFwaURvbWFpbik7XHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYGFwaSBkb21haW4gaXM6ICR7YXBpRG9tYWlufWApO1xyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBhcGkgZG9tYWluIGlzICR7aW5pdEluZm8uaXNHcm91cEFwaURvbWFpbiA/ICcnIDogJ25vdCAnfWdyb3VwIGRvbWFpbmApO1xyXG5cclxuICAgICAgICAvLyB3aGVuIGN1cnJlbnQgZG9tYWluIGlzIG9uIHRoZSBkZWZhdWx0LCB0aGVuIHdlIHdhbnQgdG8gc2tpcCBib290c3RyYXBwaW5nIChTU09HYXRld2F5LmFzcHgpXHJcbiAgICAgICAgY29uc3QgZm9yY2VTa2lwQm9vdHN0cmFwID0gZ2lneWEudGhpc1NjcmlwdC5VUkxQYXJhbXNbJ2Jvb3RzdHJhcCddID09PSAnZmFsc2UnO1xyXG5cclxuICAgICAgICAvLyBpbiBnaWd5YSdzIGRvbWFpblxyXG4gICAgICAgIGlmIChhcGlEb21haW4uaXNCYXNlT2YoYXBpU2VydmljZVVybCkgJiYgIWZvcmNlU2tpcEJvb3RzdHJhcCkge1xyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgYXBpIGRvbWFpbiBpcyBnaWd5YSdzIHNvIGtlZXAgd29ya2luZyB3aXRoIGZyYW1lYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcGlTZXJ2aWNlUHJveHkud3JhcFdpdGg8SUFwaVNlcnZpY2U+KEFwaVNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlaXRoZXIgcHJlZml4ZWQgZG9tYWluIG9yIGdyb3VwIGRvbWFpblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgY2xvc2luZyBhcGkgZnJhbWVgKTtcclxuICAgICAgICAgICAgYXBpU2VydmljZVByb3h5LnN0b3A8dm9pZD4odHJ1ZSk7IC8vIG5vIG5lZWQgdG8gd2FpdCBmb3IgdGhpc1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcmNlU2tpcEJvb3RzdHJhcCkge1xyXG4gICAgICAgICAgICAgICAgaGFzQm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0SW5mby5oYXNHcm91cEFwaURvbWFpbkNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGdyb3VwIGFwaSBkb21haW4gY2hhbmdlZCwgd2UgbmVlZCB0byByZS1ib290c3RyYXBcclxuICAgICAgICAgICAgICAgIC8vIChpdCB3b24ndCBjaGFuZ2UgaWYgdGhlIHNpdGUgaXNuJ3QgaW4gc3NvIGdyb3VwKVxyXG4gICAgICAgICAgICAgICAgaGFzQm9vdHN0cmFwcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBjcmVhdGUgYW5kIHdvcmsgd2l0aCBhcGkgc2VydmljZSBmcm9tIHRvcCBmcmFtZWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwaVNlcnZpY2UoZ2lneWEudGhpc1NjcmlwdC5BUElLZXksIGhhc0Jvb3RzdHJhcHBlZCwge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luRG9tYWluOiBsb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgICAgICAgaXNHcm91cEFwaURvbWFpbjogaW5pdEluZm8uaXNHcm91cEFwaURvbWFpbixcclxuICAgICAgICAgICAgICAgIGdldEFwaURvbWFpbjogZ2lneWEuXy5nZXRBcGlEb21haW4sXHJcbiAgICAgICAgICAgICAgICBpc0FwaURvbWFpbkZpcnN0UGFydHk6IHRydWUsIC8vIGFsdGhvdWdoIGdyb3VwIGFwaSBkb21haW4gbWF5IG5vdFxyXG4gICAgICAgICAgICAgICAgaGFzR3JvdXBBcGlEb21haW5DaGFuZ2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzU2Vzc2lvblZhbGlkKHBhcmFtczogT2JqZWN0ID0ge30sIGNhbGxiYWNrPzogKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0b2tlblN0b3JlLnNldEZyb21HQUMocGFyYW1zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IHRva2VuU3RvcmUuZ2V0KHBhcmFtc1snQVBJS2V5J10pICE9IG51bGwgfHwgcGFyYW1zWydvYXV0aF90b2tlbiddICE9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1ZhbGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRm9yTmFtZXNwYWNlRXZlbnRzKG5hbWVzcGFjZTogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAgIG9uUGx1Z2luRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge31cclxuXHJcbiAgICBvbkpTTG9nKGxvZ1R5cGU6IHN0cmluZywgbG9nSW5mbzogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAgIHNlbmRSZXF1ZXN0KG1ldGhvZE5hbWU6IHN0cmluZywgcGFyYW1zOiBPYmplY3QsIGNhbGxiYWNrPzogKHJlc3BvbnNlOiBPYmplY3QpID0+IHZvaWQsIHNldHRpbmdzOiBBcGlBZGFwdGVyU2V0dGluZ3MgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuYmVmb3JlUmVxdWVzdChtZXRob2ROYW1lLCBwYXJhbXMsIHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgdmFyIGZuQWZ0ZXJSZXNwb25zZSA9IChyZXNwb25zZSwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZnRlclJlc3BvbnNlKHByb3h5UmVxLCByZXNwb25zZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShyZXNwb25zZSwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBwcm94eVJlcUNhbGxiYWNrID0gcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBmbkFmdGVyUmVzcG9uc2UocmVzcG9uc2UsIGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBwcm94eVJlcSA9IG5ldyBBcGlSZXF1ZXN0KG1ldGhvZE5hbWUsIHBhcmFtcywgcHJveHlSZXFDYWxsYmFjaywgc2V0dGluZ3MpO1xyXG4gICAgICAgIHByb3h5UmVxLnNlbmQoKTtcclxuXHJcbiAgICAgICAgaWYgKGdpZ3lhLl8ubG9nb3V0TWV0aG9kc1ttZXRob2ROYW1lXSAmJiBnaWd5YS5fLmxvZ291dEJlaGF2aW91ci5sb2dvdXRCZWZvcmVTZXJ2ZXJSZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU2Vzc2lvbihwYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhclNlc3Npb24ocGFyYW1zOiBPYmplY3QsIGNhbGxiYWNrPzogKHJlcz86IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRva2VuU3RvcmUucmVtb3ZlKHBhcmFtc1snQVBJS2V5J10pO1xyXG5cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEdsdGV4cEZyb21TU08oYXBpS2V5OiBzdHJpbmcgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5ICYmICF0b2tlblN0b3JlLmlzVmFsaWRHbHRFeHAoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzc29CcmlkZ2UuZ2V0TG9naW5Ub2tlbkV4cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzR2x0ZXhwQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSAmJiBlLmVycm9yQ29kZSA9PSBHU0Vycm9ycy5PSyAmJiBlLmdsdGV4cCAmJiB0b2tlblN0b3JlLmlzVmFsaWRHbHRFeHAoZS5nbHRleHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlblN0b3JlLnNldEdsdGV4cChlLmdsdGV4cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNHbHRleHBDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShoYXNHbHRleHBDaGFuZ2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZW5kT2F1dGhSZXF1ZXN0KG1ldGhvZE5hbWU6IHN0cmluZywgcGFyYW1zOiBPYmplY3QsIGNhbGxiYWNrPzogKHJlc3BvbnNlOiBPYmplY3QpID0+IHZvaWQsIHNldHRpbmdzPzogQXBpQWRhcHRlck9hdXRoU2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmJlZm9yZVJlcXVlc3QobWV0aG9kTmFtZSwgcGFyYW1zLCBzZXR0aW5ncyk7XHJcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IGBodHRwczovLyR7Z2lneWEuXy5nZXRBcGlEb21haW4oJ3NvY2lhbGl6ZScpfWA7XHJcbiAgICAgICAgdmFyIHJlcTogT2F1dGhSZXF1ZXN0ID0gbmV3IE9hdXRoUmVxdWVzdChcclxuICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgIGJhc2VVcmwsXHJcbiAgICAgICAgICAgIG1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZnRlclJlc3BvbnNlKHJlcSwgcmVzcG9uc2UsIChyZXM6IHsgZXJyb3JDb2RlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3JDb2RlICE9ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvY2lhbCBsb2dpbiAob2F1dGggcmVxdWVzdCkgbWFrZXMgZ2lneWEncyBkb21haW4gdmlzaXRlZCBzbyB3ZSByZS1ib290c3RyYXAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FwaVNlcnZpY2UuYm9vdHN0cmFwKCkudGhlbihpbmZvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdyB2aXNpdGVkLCB0aGUgdGlja2V0SW5mbyBzaG91bGQgYmUgZW1wdHkgdG8gY2xlYW4gdGhlIGdtaWRUaWNrZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdtaWRUaWNrZXQoaW5mby50aWNrZXRJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXR0aW5ncyxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlcS5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmVmb3JlUmVxdWVzdChtZXRob2ROYW1lOiBzdHJpbmcsIHBhcmFtczogT2JqZWN0LCBzZXR0aW5nczogQXBpQWRhcHRlclNldHRpbmdzID0ge30pIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MuY2xlYXJTZXNzaW9uIHx8IChzZXR0aW5ncy5jbGVhclNlc3Npb25Db25kaXRpb24gJiYgc2V0dGluZ3MuY2xlYXJTZXNzaW9uQ29uZGl0aW9uKHBhcmFtcykpKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBjbGVhcmluZyBzZXNzaW9uIGJlZm9yZSByZXF1ZXN0IGZvciAke21ldGhvZE5hbWV9YCk7XHJcbiAgICAgICAgICAgIHRva2VuU3RvcmUucmVtb3ZlKHBhcmFtc1snQVBJS2V5J10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGFmdGVyUmVzcG9uc2UocmVxOiBCYXNlUmVxdWVzdCwgcmVzcG9uc2U6IHtlcnJvckRldGFpbHM/OiBzdHJpbmd9LCBjYWxsYmFjazogKHJlc3BvbnNlOiBPYmplY3QpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JEZXRhaWxzID09ICdNaXNzaW5nIGNvb2tpZScpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYG1pc3NpbmcgY29va2llIGVycm9yIC0gZm9yY2luZyBib290c3RyYXBgKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fYXBpU2VydmljZS5ib290c3RyYXAodHJ1ZSk7XHJcbiAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGByZXNlbmRpbmcgcmVxdWVzdGApO1xyXG4gICAgICAgICAgICByZXEuc2VuZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRva2VuUmVzcG9uc2UocmVxLCByZXNwb25zZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvdXRTc29JZk5lZWRlZChyZXEsIHJlc3BvbnNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNES0V2ZW50KGV2ZW50T2JqZWN0OiBPYmplY3QpOiB2b2lkIHt9XHJcblxyXG4gICAgZ2V0VG9rZW5QYXJhbShBUElLZXksIHBhcmFtTmFtZSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuU3RvcmUuZ2V0VG9rZW5QYXJhbShBUElLZXksIHBhcmFtTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tSZXR1cm5Gcm9tVVJMKCkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGNvbWluZyBiYWNrIGZyb20gYXV0aGZsb3cgcmVkaXJlY3RcclxuICAgICAgICB2YXIgb1VSTFBhcmFtcyA9IGdpZ3lhLnV0aWxzLlVSTC5nZXRQYXJhbXNGcm9tVVJMKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGlmICghb1VSTFBhcmFtc1snZ2lnX2V2ZW50cyddKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvVVJMUGFyYW1zWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5PSyAmJiB0b2tlblN0b3JlLmdldCgpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHJldHVybmVkIGZyb20gcmVkaXJlY3Rpb24gd2l0aCBlcnJvciBjb2RlYCk7XHJcblxyXG4gICAgICAgICAgICBzc29CcmlkZ2Uuc2V0R3JvdXBUb2tlbkZyb21SZXNwb25zZSh0b2tlblN0b3JlLmdldCgpLCBvVVJMUGFyYW1zWydleHBpcmVzX2luJ10sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IG9VUkxQYXJhbXNbJ2dpZ19ldmVudHMnXS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFjY291bnRzIGlzIGVuYWJsZWRcclxuICAgICAgICAgICAgICAgIGlmIChnaWd5YS51dGlscy5hcnJheS5pbmRleE9mKGV2ZW50cywgJ2FjY291bnRzLmxvZ2luJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMuZ2V0QWNjb3VudEluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYVByb2ZpbGVGaWVsZHM6ICdzYW1sRGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IGdpZ3lhLnV0aWxzLnN0cmluZ1V0aWxzLm1lcmdlQ29tbWFTZXBhcmF0ZWRWYWx1ZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvZmlsZSxkYXRhLHVzZXJpbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZlsnaW5jbHVkZSddKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGFjY291bnRJbmZvUmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzRXZlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2FjY291bnRzLmxvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMub2JqZWN0LmV4dHJhY3RQcm9wZXJ0aWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmZvUmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzRXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NpZ25hdHVyZXxVSURTaWd8dGltZXN0YW1wfFVJRFNpZ25hdHVyZXxzaWduYXR1cmVUaW1lc3RhbXB8VUlEfHByb2ZpbGV8ZGF0YXxpZF90b2tlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaFdoZW5IYW5kbGVyQWRkZWQoYWNjb3VudHNFdmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLmFycmF5LmluZGV4T2YoZXZlbnRzLCAnc29jaWFsaXplLmxvZ2luJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29jaWFsaXplRXZlbnQgPSBnaWd5YS5fLmFkZFVzZXJJbmZvVG9FdmVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZm9SZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ3NvY2lhbGl6ZS5sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaFdoZW5IYW5kbGVyQWRkZWQoc29jaWFsaXplRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduSURzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUZpZWxkczogJ3NhbWxEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHVzZXJJbmZvUmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb0V2ZW50ID0gZ2lneWEuXy5hZGRVc2VySW5mb1RvRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvUmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IGV2ZW50c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5nbG9iYWwuZGlzcGF0Y2hXaGVuSGFuZGxlckFkZGVkKG9FdmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldE5ld0xvZ2luVG9rZW5Gcm9tUmVzcG9uc2UocmVxOiBCYXNlUmVxdWVzdCwgcmVzcG9uc2U6IE9iamVjdCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB2YXIgbmV3TG9naW5Ub2tlbjogc3RyaW5nID0gcmVzcG9uc2VbJ3Nlc3Npb25JbmZvJ10gPyByZXNwb25zZVsnc2Vzc2lvbkluZm8nXVsnbG9naW5fdG9rZW4nXSA6IHJlc3BvbnNlWydsb2dpbl90b2tlbiddO1xyXG4gICAgICAgIGlmIChuZXdMb2dpblRva2VuKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRmFrZVRva2VuKG5ld0xvZ2luVG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgZmFrZSBsb2dpbiB0b2tlbiByZXR1cm5lZCAobm8gZ21pZCkgLSBmb3JjaW5nIGJvb3RzdHJhcGApO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fYXBpU2VydmljZS5ib290c3RyYXAodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgcmVzZW5kaW5nIHRoZSBsb2dpbiByZXF1ZXN0YCk7XHJcbiAgICAgICAgICAgICAgICByZXEuc2VuZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZXhwaXJlc0luID0gcmVzcG9uc2VbJ3Nlc3Npb25JbmZvJ10gIT0gbnVsbCA/IHJlc3BvbnNlWydzZXNzaW9uSW5mbyddWydleHBpcmVzX2luJ10gOiByZXNwb25zZVsnZXhwaXJlc19pbiddO1xyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uRXhwaXJhdGlvbiA9IHJlcS5wYXJhbXNbJ3Nlc3Npb25FeHBpcmF0aW9uJ107XHJcbiAgICAgICAgICAgIGlmICgoIWV4cGlyZXNJbiB8fCBleHBpcmVzSW4gPT0gMCkgJiYgc2Vzc2lvbkV4cGlyYXRpb24gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBleHBpcmVzSW4gPSBnaWd5YS51dGlscy5jb29raWUuZ2V0SW5maW5pdGVFeHBpcmF0aW9uVGltZUluU2Vjb25kcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRva2VuU3RvcmUuc2V0KHJlcS5wYXJhbXNbJ0FQSUtleSddLCBuZXdMb2dpblRva2VuLCBleHBpcmVzSW4sIHNlc3Npb25FeHBpcmF0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCkucmVtb3ZlSXRlbShgZ2x0ZXhwXyR7cmVxLnBhcmFtc1snQVBJS2V5J119YCk7IC8vIENsZWFyIGNvb2tpZSwgd2lsbCBwcm9wYWdhdGUgaW50byBTU08gc3RvcmUuXHJcbiAgICAgICAgICAgIGdpZ3lhLnJlcG9ydHMudHJhY2tBZGRyZXNzQmFyU2hhcmVzKCk7XHJcbiAgICAgICAgICAgIHNzb0JyaWRnZS5zZXRHcm91cFRva2VuRnJvbVJlc3BvbnNlKG5ld0xvZ2luVG9rZW4sIGV4cGlyZXNJbiwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNGYWtlVG9rZW4odG9rZW46IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0b2tlbi5zcGxpdCgnLicpWzFdID09ICdmZnMnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW52YWxpZFRva2VuUmVzcG9uc2UocmVxOiBCYXNlUmVxdWVzdCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAocmVxLnBhcmFtc0xvZ2luVG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gRG8gbm90IGF0dGVtcHQgdG8gcmV0cnkgaWYgbG9naW5Ub2tlbiB3YXMgcHJvdmlkZWQgZnJvbSB0aGUgcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBbiBpbnZhbGlkIGxvZ2luIHRva2VuIHdhcyBzZW50XHJcbiAgICAgICAgc3NvQnJpZGdlLmdldEdyb3VwVG9rZW4oe1xyXG4gICAgICAgICAgICBjYWxsYmFjazogdG9rZW5SZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBBIG5ldyB0b2tlbiB3YXMgcmVjZWl2ZWQgZnJvbSBTU08gaHViLCBsZXQncyByZXRyeSB3aXRoIGl0IGFuZCB0aGVyZSB3YXMgbm8gc3BlY2lmaWMgcmVxdWVzdCB0byBhbiBleHBsaWNpdCBsb2dpbiB0b2tlbi5cclxuICAgICAgICAgICAgICAgIGlmICh0b2tlblJlc3BvbnNlICYmIHRva2VuUmVzcG9uc2UubG9naW5fdG9rZW4gJiYgdG9rZW5SZXNwb25zZS5sb2dpbl90b2tlbi5zcGxpdCgnfCcpWzBdICE9PSByZXEuc2VudExvZ2luVG9rZW4gJiYgIXJlcS5wYXJhbXNMb2dpblRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBpU2VydmljZS5ib290c3RyYXAoKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5TdG9yZS5zZXRGcm9tU3NvUmVzcG9uc2UodG9rZW5SZXNwb25zZSwgcmVxLnBhcmFtc1snQVBJS2V5J10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLnBhcmFtc1snbG9naW5fdG9rZW4nXSA9IHVuZGVmaW5lZDsgLy8gcmVtb3ZlIHRoZSBsb2dpbiB0b2tlbiBmcm9tIHByZXZpb3VzIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5zZW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuU3RvcmUucmVtb3ZlKHJlcS5wYXJhbXNbJ0FQSUtleSddKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbWV0aG9kIGRvZXNuJ3QgcmVxdWlyZSBhIHNlc3Npb24sIHRyeSBhZ2FpbiB3aXRob3V0IGEgbG9naW4gdG9rZW4uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXEuc2V0dGluZ3MucmVxdWlyZXNTZXNzaW9uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlcS5wYXJhbXNbJ2xvZ2luX3Rva2VuJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXEuc2VudExvZ2luVG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5zZW5kKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb2tlblJlc3BvbnNlKHJlcTogQmFzZVJlcXVlc3QsIHJlczogT2JqZWN0LCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHJlcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShyZXMpO1xyXG5cclxuICAgICAgICBpZiAocmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5TRVNTSU9OX0VYUElSRURfUkVUUlkpIHtcclxuICAgICAgICAgICAgLy8gU2Vzc2lvbl9leHBpcmVkX3JldHJ5IC0gd2hlbiBhIHByb3ZpZGVyIHNlc3Npb24gZXhwaXJlcy5cclxuICAgICAgICAgICAgLy8gVGhlIG1ldGhvZCBzaG91bGQgZGVhbCB3aXRoIHJldHJ5IHdoZW4gcHJvdmlkZXIgU0RLIGlzIHVwLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRXYWl0Rm9yU2VydmljZShyZXEsIHJlcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5JTlZBTElEX0dNSURfVElDS0VUKSB7XHJcbiAgICAgICAgICAgIC8vIEludmFsaWRfZ21pZF90aWNrZXRcclxuICAgICAgICAgICAgdGhpcy5fZ21pZFRpY2tldCA9IG51bGw7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdfZ2lnX2dtaWR0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxLnNlbnRMb2dpblRva2VuICYmIGdpZ3lhLl8ubG9nb3V0TWV0aG9kc1tyZXEubWV0aG9kTmFtZV0gJiYgcmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5PSyAmJiByZXNbJ2xvZ291dEFjdGl2ZVNlc3Npb24nXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU2Vzc2lvbihyZXEucGFyYW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBlcnNpc3QgZHluYW1pYyBleHBpcmF0aW9uIHNpZ25hdHVyZSB0byBTU08gaWYgbmVjZXNzYXJ5LlxyXG4gICAgICAgIGlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5ICYmIHJlcS5zZW50TG9naW5Ub2tlbiAmJiByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLk9LICYmIHJlcS5wYXJhbXNbJ2xvZ2luVG9rZW5FeHAnXSkge1xyXG4gICAgICAgICAgICBzc29CcmlkZ2Uuc2V0TG9naW5Ub2tlbkV4cCh7XHJcbiAgICAgICAgICAgICAgICBsb2dpblRva2VuRXhwOiByZXEucGFyYW1zWydsb2dpblRva2VuRXhwJ10sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXROZXdMb2dpblRva2VuRnJvbVJlc3BvbnNlKHJlcSwgcmVzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXEuc2VudExvZ2luVG9rZW4gJiYgcmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5VTkFVVEhPUklaRURfVVNFUikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkludmFsaWRUb2tlblJlc3BvbnNlKHJlcSwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dFNzb0lmTmVlZGVkKHJlcTogQmFzZVJlcXVlc3QsIHJlczogT2JqZWN0LCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5ICYmIGdpZ3lhLl8ubG9nb3V0TWV0aG9kc1tyZXEubWV0aG9kTmFtZV0gJiYgcmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5PSyAmJiByZXNbJ2xvZ291dEFjdGl2ZVNlc3Npb24nXSkge1xyXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGxvZ291dCBmcm9tIFNTTyBodWIgd2hlbiBsb2dnaW5nIG91dFxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaHJlZiAhPSBnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvTG9nb3V0VXJsKSB7XHJcbiAgICAgICAgICAgICAgICBzc29CcmlkZ2UubG9nb3V0KHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvYWQgc2l0ZSdzIGxvZ291dFVSTHMgdG8gcmVtb3ZlIGxvZ2luVG9rZW4gY29va2llcyBhbmQgYWxsb3cgcGFydG5lcnMgdG8gcmVtb3ZlIHRoZWlyIHNlc3Npb24gY29va2llc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlQWZ0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEucGFyYW1zWydzdXN0YWluTG9nb3V0VVJMcyddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUFmdGVyID0gIXJlcS5wYXJhbXNbJ3N1c3RhaW5Mb2dvdXRVUkxzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZExvZ291dFVybHMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlWydsb2dvdXRVUkxzJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVSUQ6IHJlc1snVUlEJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUlEU2lnbmF0dXJlOiByZXNbJ1VJRFNpZ25hdHVyZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZVRpbWVzdGFtcDogcmVzWydzaWduYXR1cmVUaW1lc3RhbXAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVBZnRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZExvZ291dFVybHMobG9nb3V0VXJsc0xpc3Q6IHN0cmluZywgY2FsbGJhY2s6ICgpID0+IHZvaWQsIHF1ZXJ5U3RyaW5nUGFyYW1zOiBPYmplY3QsIHJlbW92ZUFmdGVyPzogbnVtYmVyIHwgYm9vbGVhbikge1xyXG4gICAgICAgIHZhciBsb2FkZWRMZW5ndGggPSAwO1xyXG4gICAgICAgIHZhciBsb2dvdXRVcmxzID0gbG9nb3V0VXJsc0xpc3QgPyBsb2dvdXRVcmxzTGlzdC5zcGxpdCgnLCcpIDogW107XHJcbiAgICAgICAgdmFyIGZuTG9hZGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2FkZWRMZW5ndGgrKztcclxuICAgICAgICAgICAgaWYgKGxvYWRlZExlbmd0aCA+IGxvZ291dFVybHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2dvdXRVcmxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghbG9nb3V0VXJsc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgZm5Mb2FkZWQoKTsgLy8gbWFyayBzaXRlIGFzIGxvYWRlZCBpZiBubyB1cmwgdG8gZ28gdG9cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBnaWd5YS51dGlscy5VUkwuYWRkUGFyYW1zVG9VUkwobG9nb3V0VXJsc1tpXSwgcXVlcnlTdHJpbmdQYXJhbXMpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMb2dvdXRVcmwodXJsLCBmbkxvYWRlZCwgcmVtb3ZlQWZ0ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm5Mb2FkZWQoKTsgLy8gbWFrZSBzdXJlIGNhbGwgaXMgbWFkZSBhdCBsZWFzdCBvbmNlIGV2ZW4gaWYgbG9nb3V0IFVSTHMgbGlzdCBpcyBlbXB0eVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMb2dvdXRVcmwodXJsOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkLCByZW1vdmVBZnRlcjogbnVtYmVyIHwgYm9vbGVhbiA9IDUwMDApIHtcclxuICAgICAgICB2YXIgaWZyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICAgICAgaWZyLnNyYyA9IHVybDtcclxuICAgICAgICBpZnIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIGlmci5zdHlsZS50b3AgPSAnLTEwMDBweCc7XHJcbiAgICAgICAgaWZyLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XHJcbiAgICAgICAgdmFyIGxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBvbklmckxvYWRlZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHJlbW92ZUFmdGVyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaWZyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaWZyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uSWZyTG9hZGVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbW92ZUFmdGVyIGFzIGFueSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZnIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvbklmckxvYWRlZCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFwcGVuZFRvQm9keShpZnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZFdhaXRGb3JTZXJ2aWNlKHJlcXVlc3Q6IEJhc2VSZXF1ZXN0LCByZXNwb25zZTogT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QucGFyYW1zWydyZXRyeVBvc3NpYmxlJ10pIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5wYXJhbXNbJ3JldHJ5UG9zc2libGUnXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBnaWd5YS5leHRlcm5hbC5mYWNlYm9vay5ydW5XaGVuTG9hZGVkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R21pZFRpY2tldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLl9nbWlkVGlja2V0KSB7XHJcbiAgICAgICAgICAgIC8vIGlmIGl0IGV4aXN0cywgZWFjaCB0aW1lIHdlIHVzZSBnbWlkVGlja2V0IHdlIG5lZWQgdG8gcmVmcmVzaCBpdC5cclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoR21pZFRpY2tldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dtaWRUaWNrZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWZyZXNoR21pZFRpY2tldCgpIHtcclxuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlLmdldEdtaWRUaWNrZXQodHJ1ZSkudGhlbihnbWlkVGlja2V0RGF0YSA9PiB0aGlzLnNldEdtaWRUaWNrZXQoZ21pZFRpY2tldERhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEdtaWRUaWNrZXQoZ21pZFRpY2tldERhdGE/OiBJR21pZFRpY2tldFJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCFnbWlkVGlja2V0RGF0YSB8fCAhZ21pZFRpY2tldERhdGEuZ21pZFRpY2tldCkge1xyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbygnY2xlYW4gZ21pZFRpY2tldCcpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZ21pZFRpY2tldDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbygnc2V0IGdtaWRUaWNrZXQgKHNldCBhdXRvLXJlZnJlc2gpJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dtaWRUaWNrZXQgPSBnbWlkVGlja2V0RGF0YS5nbWlkVGlja2V0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV4dFJ1bnRpbWVJbnRlcnZhbCA9IHRoaXMuY2FsY3VsYXRlR21pZFRpY2tldE5leHRSdW4oZ21pZFRpY2tldERhdGEuZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVmcmVzaEdtaWRUaWNrZXQoKSwgbmV4dFJ1bnRpbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlR21pZFRpY2tldE5leHRSdW4oZXhwaXJhdGlvblRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBnbWlkVGlja2V0RXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHJldHVybiBnbWlkVGlja2V0RXhwaXJhdGlvblRpbWUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnZXQsIGdldEN1cnJlbnRTZXNzaW9uRXhwaXJhdGlvbiwgZ2V0R2x0ZXhwQ29va2llLCBzZXRHbHRleHAgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5XZWIvYXBwL1Rva2VuU3RvcmUnO1xyXG5pbXBvcnQge3NldExvZ2luVG9rZW5FeHAsIHNldEdyb3VwQ29udGV4dENvb2tpZX0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9Tc29CcmlkZ2UnO1xyXG5cclxuY29uc3QgYWxsb3dlZFJlc2lkZW5jaWVzID0gW1widXMxXCIsIFwiZXUxXCIsIFwiYXUxXCIsIFwicnUxXCIsIFwiY24xXCIsIFwiaWwxXCJdO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QWNjb3VudFJlc2lkZW5jeShkYXRhQ2VudGVyOiBzdHJpbmcpeyAvLyB2YWx1ZSBjYW4gYmUgY2xlYXJlZCBieSBpbnZva2luZyB0aGlzIGFwaSB3aXRoIGFuIGVtcHR5IHN0cmluZyB2YWx1ZSAtIFwiXCJcclxuICAgIGlmIChkYXRhQ2VudGVyICYmIGFsbG93ZWRSZXNpZGVuY2llcy5pbmRleE9mKGRhdGFDZW50ZXIudG9Mb3dlckNhc2UoKSkgPT0gLTEpXHJcbiAgICAgICAgcmV0dXJuIGdpZ3lhLmxvZ2dlci53YXJuKCdpbnZhbGlkIHJlc2lkZW5jeScsIHtkYXRhQ2VudGVyfSk7XHJcbiAgICBnaWd5YS5nbG9iYWxBY2NvdW50LmRhdGFDZW50ZXIgPSBkYXRhQ2VudGVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0R3JvdXBDb250ZXh0KGdyb3VwQ29udGV4dDphbnkpe1xyXG4gICAgc2V0R3JvdXBDb250ZXh0Q29va2llKHtncm91cENvbnRleHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFNTT1Rva2VuKC4uLmFyZ3MpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbZ2lneWEudGhpc1NjcmlwdC5nbG9iYWxDb25mLCBhcmdzXSk7XHJcbiAgICBjb25zdCByZWRpcmVjdFVSTCA9IHBhcmFtc1sncmVkaXJlY3RVUkwnXSB8fCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgZ2lneWEudXRpbHMuSFRUUC5yZWRpcmVjdChyZWRpcmVjdFVSTCwgW3t9XSwgJ0dFVCcsICdfdG9wJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNHcm91cEdsdEV4cChnbHRleHAgPSBnZXRHbHRleHBDb29raWUoKSkge1xyXG4gICAgaWYgKCFnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5KSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cclxuICAgICAgICBzZXRMb2dpblRva2VuRXhwKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsb2dpblRva2VuRXhwOiBnbHRleHAsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzb2x2ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgKSxcclxuICAgICkudGhlbigocmVzOiB7IGdsdGV4cD86IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzQ2hhbmdlZCA9IHJlcy5nbHRleHAgJiYgcmVzLmdsdGV4cCAhPT0gZ2x0ZXhwO1xyXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHNldEdsdGV4cChyZXMuZ2x0ZXhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzQ2hhbmdlZCxcclxuICAgICAgICAgICAgb2xkRXhwaXJhdGlvbjogZ2lneWEudXRpbHMuZ2x0ZXhwLmdldE1pbGxpcyhnbHRleHApLFxyXG4gICAgICAgICAgICBuZXdFeHBpcmF0aW9uOiBnaWd5YS51dGlscy5nbHRleHAuZ2V0TWlsbGlzKHJlcy5nbHRleHAgfHwgZ2x0ZXhwKSxcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgU2VydmljZXNQcm94eUludGVyZmFjZXMgZnJvbSAnc3JjL2NvcmUvU2VydmljZVByb3h5L2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgKiBhcyBQcm94eUxpc3RlbmVyIGZyb20gJ3NyYy9jb3JlL1NlcnZpY2VQcm94eS9Qcm94eUxpc3RlbmVyJztcclxuaW1wb3J0ICogYXMgU2VydmljZVByb3h5IGZyb20gJ3NyYy9jb3JlL1NlcnZpY2VQcm94eS9TZXJ2aWNlUHJveHknO1xyXG5pbXBvcnQgKiBhcyBTZXJ2aWNlc1Byb3h5VXRpbHMgZnJvbSAnc3JjL2NvcmUvU2VydmljZVByb3h5L3V0aWxzJztcclxuaW1wb3J0ICogYXMgQXBpU2VydmljZSBmcm9tICdzcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9BcGlTZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgR3JvdXBBcGlEb21haW5TZXJ2aWNlIGZyb20gJ3NyYy9jb3JlL0FwaVNlcnZpY2UvYXBwL0dyb3VwQXBpRG9tYWluU2VydmljZSc7XHJcbmltcG9ydCAqIGFzIEFwaVNlcnZpY2VJbnRlcmZhY2VzIGZyb20gJ3NyYy9jb3JlL0FwaVNlcnZpY2UvYXBwL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgKiBhcyBKc29ucFJlcXVlc3QgZnJvbSAnc3JjL2NvcmUvQXBpU2VydmljZS9hcHAvSnNvbnBSZXF1ZXN0JztcclxuaW1wb3J0ICogYXMgQXBpUmVxdWVzdCBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5XZWIvYXBwL0FwaVJlcXVlc3QnO1xyXG5pbXBvcnQgKiBhcyBCYXNlUmVxdWVzdCBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5XZWIvYXBwL0Jhc2VSZXF1ZXN0JztcclxuaW1wb3J0ICogYXMgRnVuY3Rpb25zIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvZnVuY3Rpb25zJztcclxuaW1wb3J0ICogYXMgT2F1dGhSZXF1ZXN0IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvT2F1dGhSZXF1ZXN0JztcclxuaW1wb3J0ICogYXMgU1NPQnJpZGdlIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvU3NvQnJpZGdlJztcclxuaW1wb3J0ICogYXMgVG9rZW5TdG9yZSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5XZWIvYXBwL1Rva2VuU3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBXZWJBZGFwdGVyIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvV2ViQWRhcHRlcic7XHJcblxyXG5kZWNsYXJlIGNvbnN0IGdpZ3lhOiBhbnk7XHJcbmlmICghZ2lneWEuc2VydmljZXMpIHtcclxuICAgIGdpZ3lhLnNlcnZpY2VzID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5zZXJ2aWNlcy5wcm94eSkge1xyXG4gICAgZ2lneWEuc2VydmljZXMucHJveHkgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnNlcnZpY2VzLnByb3h5LnV0aWxzKSB7XHJcbiAgICBnaWd5YS5zZXJ2aWNlcy5wcm94eS51dGlscyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXykge1xyXG4gICAgZ2lneWEuXyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5hcGlBZGFwdGVycykge1xyXG4gICAgZ2lneWEuXy5hcGlBZGFwdGVycyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5hcGlBZGFwdGVycy53ZWIpIHtcclxuICAgIGdpZ3lhLl8uYXBpQWRhcHRlcnMud2ViID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLmFwaUFkYXB0ZXJzLndlYi5zc28pIHtcclxuICAgIGdpZ3lhLl8uYXBpQWRhcHRlcnMud2ViLnNzbyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5hcGlBZGFwdGVycy53ZWIudG9rZW5TdG9yZSkge1xyXG4gICAgZ2lneWEuXy5hcGlBZGFwdGVycy53ZWIudG9rZW5TdG9yZSA9IHt9O1xyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKGdpZ3lhLnNlcnZpY2VzLnByb3h5LCBTZXJ2aWNlc1Byb3h5SW50ZXJmYWNlcywgUHJveHlMaXN0ZW5lciwgU2VydmljZVByb3h5KTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS5zZXJ2aWNlcy5wcm94eS51dGlscywgU2VydmljZXNQcm94eVV0aWxzKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS5zZXJ2aWNlcywgQXBpU2VydmljZSwgR3JvdXBBcGlEb21haW5TZXJ2aWNlLCBBcGlTZXJ2aWNlSW50ZXJmYWNlcyk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEsIEpzb25wUmVxdWVzdCk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5hcGlBZGFwdGVycy53ZWIsIEFwaVJlcXVlc3QsIEJhc2VSZXF1ZXN0LCBGdW5jdGlvbnMsIE9hdXRoUmVxdWVzdCwgV2ViQWRhcHRlcik7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5hcGlBZGFwdGVycy53ZWIuc3NvLCBTU09CcmlkZ2UpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8uYXBpQWRhcHRlcnMud2ViLnRva2VuU3RvcmUsIFRva2VuU3RvcmUpO1xyXG5cclxuZ2lneWEuc2V0R3JvdXBDb250ZXh0ID0gZ2lneWEuXy5hcGlBZGFwdGVycy53ZWIuc2V0R3JvdXBDb250ZXh0O1xyXG5naWd5YS5zZXRTU09Ub2tlbiA9IGdpZ3lhLl8uYXBpQWRhcHRlcnMud2ViLnNldFNTT1Rva2VuO1xyXG5naWd5YS5zeW5jR3JvdXBHbHRFeHAgPSBnaWd5YS5fLmFwaUFkYXB0ZXJzLndlYi5zeW5jR3JvdXBHbHRFeHA7XHJcbmdpZ3lhLnNldEFjY291bnRSZXNpZGVuY3kgPSBnaWd5YS5fLmFwaUFkYXB0ZXJzLndlYi5zZXRBY2NvdW50UmVzaWRlbmN5O1xyXG4iLCJleHBvcnQgY29uc3QgZW51bSBHU0Vycm9ycyB7XHJcbiAgICBPSyA9IDAsXHJcbiAgICBEYXRhX1BlbmRpbmcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXHJcbiAgICBORVRXT1JLX0VSUk9SID0gNTAwMDI2LFxyXG4gICAgREFUQV9QRU5ESU5HID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxyXG4gICAgT1BFUkFUSU9OX0NBTkNFTEVEID0gMjAwMDAxLCAvLyB1c2VyIGNhbmNlbGVkLCBpbiBsb2dpbiBwcm9jZXNzXHJcbiAgICBQRVJNSVNTSU9OX0dSQU5URUQgPSAyMDAwMDIsIC8vIElubmVyIGNvZGVcclxuICAgIFBFUk1JU1NJT05fTk9UX0dSQU5URUQgPSAyMDAwMDMsIC8vIElubmVyIGNvZGVcclxuICAgIFJFRElSRUNUID0gMjAwMDA0LCAvLyBJbm5lciBjb2RlXHJcbiAgICBORVdfVVNFUiA9IDIwMDAwNSwgLy8gSW5uZXIgY29kZVxyXG4gICAgT1BFUkFUSU9OX0RPTkUgPSAyMDAwMDYsIC8vIElubmVyIGNvZGVcclxuICAgIFVQREFURV9VU0VSID0gMjAwMDA3LCAvLyBJbm5lciBjb2RlXHJcbiAgICBPS19XSVRIX0VSUk9SUyA9IDIwMDAwOCwgLy8gRm9yIHJlcG9ydHMgLSB3aGVuIHdlIHJldHVybiBvayB0byBjbGllbnQgYnV0IGhhZCBhY2NlcHRhYmxlIGVycm9ycyAodGhhdCB3ZSB3YW50IHRvIGtub3cgYWJvdXQpIG9uIHRoZSB3YXlcclxuICAgIEFDQ09VTlRTX0xJTktFRCA9IDIwMDAwOSwgLy8gQWZ0ZXIgbGlua2lnbiBhY2NvdXRucyB2aWEgbG9naW4sIHJldHVybiB0aGlzIGVycm9yIGNvZGVcclxuICAgIE9LX1dJVEhfRVJST1JfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSAyMDAwMTAsIC8vIEZvciBzZXRBY2NvdW50SW5mbyB1c2luZyB0aGUgY29uZmxpY3RIYW5kbGluZyBwYXJhbSAtIHByb2ZpbGUgd2FzIHNhdmVkLCBidXQgdGhlIGVtYWlsIGNvbmZsaWN0cyB3aXRoIGFub3RoZXIgdXNlclxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1JFR0lTVFJBVElPTiA9IDIwNjAwMSwgLy8gRm9yIGFjY291bnRzIEFQSSxcclxuICAgIEFDQ09VTlRfUEVORElOR19WRVJJRklDQVRJT04gPSAyMDYwMDIsIC8vIEZvciBhY2NvdW50cyBBUEk7IGNvbnNpZGVyIG1vdmluZyB0byA0MDN4eHggc2VjdGlvbiBpbiB0aGUgZnV0dXJlLlxyXG4gICAgQUNDT1VOVF9NSVNTSU5HX0xPR0lOSUQgPSAyMDYwMDMsIC8vIEZvciBhY2NvdW50cyBBUElcclxuICAgIElERU5USVRZX0FMUkVBRFlfQVNTSUdORUQgPSAyMDYwMDQsIC8vIEZvciBpbXBvcnQgYWNjb3VudHMgQVBJXHJcbiAgICBBRlRFUl9FTUFJTF9WRVJJRklDQVRJT04gPSAyMDYwMDUsXHJcbiAgICBQRU5ESU5HX0NPREVfVkVSSUZJQ0FUSU9OID0gMjA2MDA2LFxyXG4gICAgQ0xJRU5UX0xPRyA9IDMwMDAwMSwgLy8gaW50ZXJuYWwsIGZvciByZXBvcnRpbmcgZXJvcnJzIGluIGNsaWVudCBTREtTXHJcbiAgICBJTlZBTElEX0RBVEFfQ0VOVEVSID0gMzAxMDAxLCAvLyBcIkludmFsaWQgZGF0YS1jZW50ZXJcIi4gd2l0aCBlcnJvciBkZXRhaWxzIG9mOiBcIlRoaXMgQVBJIGtleSBpcyBzZXJ2ZWQgYnkgYW5vdGhlciBkYXRhIGNlbnRlclwiLlxyXG4gICAgSU5WQUxJRF9SRVFVRVNUX0ZPUk1BVCA9IDQwMDAwMSwgLy8gY291bGQgYmUgYWxsIGtpbmQgb2YgZXJyb3JzIHdpdGggd3JvbmcgcmVxdWVzdCAobm9uIHNlY3VyZSB3aGVuIHNob3VsZCBiZSBzZWN1cmUsIHdyb25nIGF1dGhlbnRpY2F0aW9uIGhlYWRlcilcclxuICAgIE1JU1NJTkdfUkVRVUlSRURfUEFSQU1FVEVSID0gNDAwMDAyLFxyXG4gICAgVU5JUVVFX0lERU5USUZJRVJfRVhJU1RTID0gNDAwMDAzLFxyXG4gICAgSU5WQUxJRF9QQVJBTUVURVJfRk9STUFUID0gNDAwMDA0LFxyXG4gICAgSU5WQUxJRF9QQVJBTUVURVJfVkFMVUUgPSA0MDAwMDYsXHJcbiAgICBEVVBMSUNBVEVfVkFMVUUgPSA0MDAwMDcsXHJcbiAgICBJTlZBTElEX0FVVEhFTlRJQ0FUSU9OX0hFQURFUiA9IDQwMDAwOCwgLy8gT0F1dGgyXHJcbiAgICBWQUxJREFUSU9OX0VSUk9SID0gNDAwMDA5LCAvLyBJbiBhY2NvdW50cy5yZWdpc3Rlciwgd2hlbmV2ZXIgdGhlcmUgaXMgYSB2YWxpZGF0aW9uIGVycm9yXHJcbiAgICBJTlZBTElEX1JFRElSRUNUX1VSSSA9IDQwMDAxMSwgLy8gT0F1dGgyXHJcbiAgICBJTlZBTElEX1JFU1BPTlNFX1RZUEUgPSA0MDAwMTIsIC8vIE9BdXRoMlxyXG4gICAgVU5TVVBQT1JURURfR1JBTlRfVFlQRSA9IDQwMDAxMywgLy8gT0F1dGgyXHJcbiAgICBJTlZBTElEX0dSQU5UID0gNDAwMDE0LCAvLyBPQXV0aDJcclxuICAgIENPREVfRVhQSVJFRCA9IDQwMDAxNSwgLy8gT0F1dGgyXHJcbiAgICBTQ0hFTUFfVkFMSURBVElPTl9GQUlMRUQgPSA0MDAwMjAsXHJcbiAgICBDQVBUQ0hBX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwMjEsXHJcbiAgICBVTklRVUVfSU5ERVhfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMixcclxuICAgIElOVkFMSURfVFlQRV9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDIzLFxyXG4gICAgRFlOQU1JQ19GSUVMRFNfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNCxcclxuICAgIFdSSVRFX0FDQ0VTU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI1LFxyXG4gICAgSU5WQUxJRF9GT1JNQVRfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNixcclxuICAgIFJFUVVJUkVEX1ZBTFVFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjcsXHJcbiAgICBFTUFJTF9OT1RfVkVSSUZJRUQgPSA0MDAwMjgsXHJcbiAgICBTQ0hFTUFfQ09ORkxJQ1RfRVJST1IgPSA0MDAwMjksIC8vIFRvIGhhbmRsZSBVc2VyIHN0b3J5IDM0MzMwLiBJbXByb3ZlIEVsYXN0aWNTZWFyY2hNYXBwaW5nRXhjZXB0aW9uIGhhbmRsaW5nIGluIERTLkluZGV4T2JqZWN0XHJcbiAgICBPUEVSQVRJT05fTk9UX0FMTE9XRUQgPSA0MDAwMzAsIC8vIFVzZXIgc3RvcnkgMzQzMTEgLSBJZiBhZGRDb25uZWN0aW9uIGlzIGNhbGxlZCByZXR1cm4gYW4gZXJyb3IgKFwib3BlcmF0aW9uIG5vdCBhbGxvd2VkIGZvciB0aGlzIGFjY291bnRcIiwgNDAwWFhYIGVycm9yKS5cclxuICAgIFNFQ1VSSVRZX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwNTAsXHJcbiAgICBJTlZBTElEX0FQSUtFWV9QQVJBTUVURVIgPSA0MDAwOTMsXHJcbiAgICBOT1RfU1VQUE9SVEVEID0gNDAwMDk2LCAvLyB0aGUgZnVuY3Rpb24gaXMgbm90IHN1cHBvcnRlZCBieSBhbnkgb2YgdGhlIGN1cnJlbnRseSBjb25uZWN0ZWQgcHJvdmlkZXJzXHJcbiAgICBVTlNVUFBPUlRFRF9VU0VSX0FHRU5UID0gNDAwMDk3LCAvL1xyXG4gICAgTk9fUFJPVklERVJTID0gNDAwMTAwLCAvLyBjbGllbnQ/XHJcbiAgICBQT1BVUF9CTE9DS0VEID0gNDAwMTAxLCAvLyBjbGllbnRcclxuICAgIElOVkFMSURfRVZFTlRfSEFORExFUiA9IDQwMDEwMiwgLy8gY2xpZW50XHJcbiAgICBJTlZBTElEX0NPTlRBSU5FUklEID0gNDAwMTAzLCAvLyBjbGllbnRcclxuICAgIE5PVF9DT05ORUNURUQgPSA0MDAxMDYsIC8vIHVzZXIgaXMgbm90IGNvbm5lY3RlZCB0byB0aGUgcmVxdWlyZWQgbmV0d29yayBvciB0byBhbnkgbmV0d29ya1xyXG4gICAgSU5WQUxJRF9TSVRFX0RPTUFJTiA9IDQwMDEyMCwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcclxuICAgIFBST1ZJREVSX0NPTkZJR1VSQVRJT05fRVJST1IgPSA0MDAxMjIsIC8vIHRoZSBjdXJyZW50IGRvbWFpbiBkb2VzIG5vdCBtYXRjaCB0aGUgZG9tYWluIGNvbmZpZ3VyZWQgZm9yIHRoZSBhcGkga2V5XHJcbiAgICBMSU1JVF9SRUFDSEVEID0gNDAwMTI0LCAvLyBHYW1lTWVjaGFuaWNzIC0gQ2FwIHdhcyByZWFjaGVkXHJcbiAgICBGUkVRVUVOQ1lfTElNSVRfUkVBQ0hFRCA9IDQwMDEyNSwgLy8gQ29tbWVudHMvRmVlZCAtIFNwYW0gQ2FwcyB3YXMgcmVhY2hlZFxyXG4gICAgSU5WQUxJRF9BQ1RJT04gPSA0MDAxMjYsIC8vIEdhbWVNZWNoYW5pY3MgLSBJbnZhbGlkIGFjdGlvbi4gVHJpZ2dlcmVkIGFjdGlvbiBjYW4ndCBiZSBpbml0aWF0ZWQgZXh0ZXJuYWxseVxyXG4gICAgSU5TVUZGSUNJRU5UX1BPSU5UU19UT19SRURFRU0gPSA0MDAxMjcsIC8vIEdhbWVNZWNoYW5pY3MgLSBJbnN1ZmZpY2llbnRfcG9pbnRzX3RvX3JlZGVlbVxyXG4gICAgU0lHTkFUVVJFX1RJTUVTVEFNUF9FWFBJUkVEID0gNDAwMTI4LCAvLyB0aGUgdGltZXN0YW1wIGluc2lkZSB0aGUgc2lnbmF0dXJlIGlzIGV4cGlyZWRcclxuICAgIElOVkFMSURfUE9MSUNZX0NPTkZJR1VSQVRJT04gPSA0MDEwMDAsIC8vIFBvbGljeSBjb25maWd1cmF0aW9uIGlzIGludmFsaWQgKGkuZS4gcHJldmVudCByZWdpdHJhdGlvbilcclxuICAgIFNVU1BFQ1RFRF9TUEFNID0gNDAxMDEwLCAvLyBTb21lb25lIGlzIHRyeWluZyB0byB1c2UgR2lneWEgdG8gc2VuZCBhIGVtYWlsIHdpdGggYSBVUkwgdGhhdCBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlIGNsaWVudCdzIGRvbWFpbnM7IHN1c3BlY3RlZCBzcGFtLlxyXG4gICAgTE9HSU5fRkFJTEVEX0NBUFRDSEFfUkVRVUlSRUQgPSA0MDEwMjAsIC8vIGFjY291bnRzLmxvZ2luIC0gY2FwdGNoYSByZXF1aXJlZFxyXG4gICAgTE9HSU5fRkFJTEVEX1dST05HX0NBUFRDSEEgPSA0MDEwMjEsIC8vIGFjY291bnRzLmxvZ2luIC0gd3JvbmcgY2FwdGNoYSBjb2RlXHJcbiAgICBPTERfUEFTU1dPUkRfVVNFRCA9IDQwMTAzMCwgLy8gVGhlIHVzZXIgcHJvdmlkZWQgaGlzIHByZXZpb3VzIHBhc3N3b3JkLCBub3QgdGhlIGN1cnJlbnQgb25lXHJcbiAgICBGT1JCSURERU4gPSA0MDMwMDAsXHJcbiAgICBJTlZBTElEX1NFU1NJT05fVE9LRU4gPSA0MDMwMDEsIC8vIGludGVybmFsXHJcbiAgICBSRVFVRVNUX0hBU19FWFBJUkVEID0gNDAzMDAyLCAvLyB0aGUgdGltZXN0YW1wIG9yIGV4cGlyYXRpb24gb2YgdGhlIHRva2VuIHVzZWQgZXhjZWVkZWQgdGhlIGFsbG93ZWQgdGltZSB3aW5kb3dcclxuICAgIElOVkFMSURfUkVRVUVTVF9TSUdOQVRVUkUgPSA0MDMwMDMsXHJcbiAgICBEVVBMSUNBVEVfTk9OQ0UgPSA0MDMwMDQsXHJcbiAgICBVTkFVVEhPUklaRURfVVNFUiA9IDQwMzAwNSwgLy8gdGhlIHVzZXIgaWQgcGFzc2VkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBzaXRlXHJcbiAgICBTRU5TSVRJVkVfREFUQV9TRU5UX09WRVJfSFRUUCA9IDQwMzAwNiwgLy8gd2hlbiBzZW5kaW5nIHRoZSBzZWNyZXQga2V5IGluIFJFU1QgaXQgaGFzIHRvIGJlIG92ZXIgSFRUUFNcclxuICAgIFBFUk1JU1NJT05fREVOSUVEID0gNDAzMDA3LCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBQZXJtaXNzaW9uIGRlbmllZCAocmVhZE9ubHksbW9kZXJhdGlvbiBzaXRlKS5cclxuICAgIElOVkFMSURfT1BFTklEX1VSTCA9IDQwMzAwOCwgLy8gY2Fubm90IGZpbmQgYW4gb3BlbklkIGVuZHBvaW50IG9uIHRoZSB1cmwgb3IgdXNlcm5hbWUgZ2l2ZW4gZm9yIG9wZW5JZCBsb2dpblxyXG4gICAgUFJPVklERVJfU0VTU0lPTl9FWFBJUkVEID0gNDAzMDA5LCAvLyB0aGUgdXNlciBzZXNzaW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIGV4cGlyZWRcclxuICAgIElOVkFMSURfU0VDUkVUID0gNDAzMDEwLCAvLyB0aGUgcmVxdWVzdCBoYXMgYW4gaW52YWxpZCBzZWNyZXQga2V5XHJcbiAgICBTRVNTSU9OX0hBU19FWFBJUkVEID0gNDAzMDExLCAvLyB0aGUgc2Vzc2lvbiBmb3IgdGhpcyB1c2VyIGhhcyBleHBpcmVkXHJcbiAgICBOT19WQUxJRF9TRVNTSU9OID0gNDAzMDEyLCAvLyByZXF1ZXN0ZWQgdXNlciBoYXMgbm8gdmFsaWQgc2Vzc2lvblxyXG4gICAgVU5WRVJJRklFRF9VU0VSID0gNDAzMDEzLCAvLyB0aGUgdXNlciBpcyBub3QgdmVyaWZpZWQgaW4gU1NPIHNlc3Npb25cclxuICAgIE1JU1NJTkdfUkVRVUVTVF9SRUZFUlJFUiA9IDQwMzAxNSwgLy8gd2UgY2FuJ3QgdmFsaWRhdGUgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVmZXJyZXIgaGVhZGVyIGlzIG1pc3NpbmdcclxuICAgIFVORVhQRUNURURfUFJPVklERVJfVVNFUiA9IDQwMzAxNywgLy8gdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBvbmUgZXhwZWN0ZWRcclxuICAgIFBFUk1JU1NJT05fTk9UX1JFUVVFU1RFRCA9IDQwMzAyMiwgLy8gdGhlIGFjdGlvbiBuZWVkcyBhIHVzZXIgcGVybWlzc2lvbiBhbmQgaXQgd2FzIG5vdCByZXF1ZXN0ZWRcclxuICAgIE5PX1VTRVJfUEVSTUlTU0lPTiA9IDQwMzAyMywgLy8gdGhlIGFjdGlvbiBuZWVkcyBhIHVzZXIgcGVybWlzc2lvbiBhbmQgd2UgZG9uJ3QgaGF2ZSBvbmVcclxuICAgIFBST1ZJREVSX0xJTUlUX1JFQUNIRUQgPSA0MDMwMjQsIC8vIHRoZSBwcm92aWRlciBsaW1pdCBmb3IgdGhpcyBhY3Rpb24gd2FzIGV4Y2VlZGVkXHJcbiAgICBJTlZBTElEX1RPS0VOID0gNDAzMDI1LCAvLyBPQXV0aDJcclxuICAgIFVOQVVUSE9SSVpFRF9BQ0NFU1NfRVJST1IgPSA0MDMwMjYsIC8vIENhbGxzIHRvIGFjY291bnRzLmlzQXZhaWxhYmxlTG9naW5JRCBXaGVuIHByZXZlbnRMb2dpbklESGFydmVzdGluZyA9IHRydWUgc2hvdWxkIHJldHVybiBhbiBhcHByb3ByaWF0ZSA0MDN4eHggdW5hdXRob3JpemVkIGFjY2VzcyBlcnJvci5cclxuICAgIERJRkZFUkVOVF9VU0VSX0ZPUl9SRUFVVEggPSA0MDMwMjcsIC8vIERpZmZlcmVudCB1c2VyIHRyaWVkIHRvIHJlLWF1dGhvcml6ZS5cclxuICAgIFNFU1NJT05fRVhQSVJFRF9SRVRSWSA9IDQwMzAzMCwgLy8gSW5uZXIgY29kZSAtIHdoZW4gdGhlIGZhY2Vib29rIHNlc3Npb24gaXMgZXhwaXJlZCBhbmQgdGhlIGNsaWVudCB3YWl0cyBmb3IgRkIgb24gcGFnZSB0byBsb2FkXHJcbiAgICBBUFBST1ZFRF9CWV9NT0RFUkFUT1IgPSA0MDMwMzEsIC8vIGNvbW1lbnRzIC0gY2FudCBmbGFnIGNvbW1lbnQsIGl0IHdhcyBhcHByb3ZlZCBieSB0aGUgbW9kZXJhdG9yIGFscmVhZHkuXHJcbiAgICBUT0tFTl9IQVNfUkVORVdFRCA9IDQwMzAzMiwgLy8gdGhlIHRva2VuIGlzIG5vIGxvbmdlciB2YWxpZCwgYnV0IHdlIGhhdmUgbmV3IHRva2VuIHRvIHByb3ZpZGVcclxuICAgIE5PX1VTRVJfQ09PS0lFID0gNDAzMDM1LCAvLyBubyB1c2VyIGNvb2tpZVxyXG4gICAgVU5BVVRIT1JJWkVEX1BBUlRORVIgPSA0MDMwMzYsIC8vIHBhcnRuZXIgaXMgZGlzYWJsZWRcclxuICAgIFBPU1RfREVOSUVEID0gNDAzMDM3LCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBQb3N0IGRlbmllZCB3aGVuIHRoZSB1c2VyIHRyaWVkIHRvIHJldmlldyB0d2ljZS5cclxuICAgIE5PX0xPR0lOX1RJQ0tFVCA9IDQwMzA0MCwgLy8gbm8gbG9naW4gdGlja2V0IGluIGNhbGxiYWNrIHVybFxyXG4gICAgQUNDT1VOVF9ESVNBQkxFRCA9IDQwMzA0MSwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiBncy5hY2NvdW50cy5Jc0FjdGl2ZT1mYWxzZVxyXG4gICAgSU5WQUxJRF9MT0dJTklEID0gNDAzMDQyLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byBsb2dpbiB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcclxuICAgIExPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gNDAzMDQzLCAvLyBGb3IgYWNjb3VudDogSWYgcHJvdmlkZXJFbWFpbCBpcyBkZWZpbmVkIGFzIGEgbG9naW5JZGVudGlmaWVyIGluIHRoZSBwb2xpY3ksIGFuZCB0aGUgZW1haWwgYWRkcmVzcyByZWNlaXZlZCBmcm9tIHRoZSBwcm92aWRlciBleGlzdHMgaW4gdGhlIGdzLmxvZ2luSWRlbnRpZmllcnMgY29sbGVjdGlvbiBidXQgYXNzb2NpYXRlZCB3aXRoIGEgZGlmZmVyZW50IFVVSUQgdGhhbiB0aGUgY3VycmVudCB1c2VyLCB0aGVuIHJldHVybiBcIkxvZ2luIGlkZW50aWZpZXIgZXhpc3RzXCIgZXJyb3IgY29kZSAoNDAzeHh4KS5cclxuICAgIFVOREVSQUdFX1VTRVIgPSA0MDMwNDQsIC8vIEZvciBDT1BQQSBjb21wbGlhbmNlIChDaGlsZHJlbidzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0KVxyXG4gICAgSU5WQUxJRF9TSVRFX0NPTkZJR1VSQVRJT05fRVJST1IgPSA0MDMwNDUsIC8vIEZvciBhY2NvdW50cyAtIHNpdGUgRFMgaXMgZW5hYmxlZCB0aG91Z2ggbm8gRFNTaXplIHdhcyBjb25maWd1cmVkLlxyXG4gICAgTE9HSU5JRF9ET0VTX05PVF9FWElTVCA9IDQwMzA0NywgLy8gRm9yIGFjY291bnRzIC0gd2hlbiB0cnlpbmcgdG8gcmVzZXQgcGFzc3dvcmQgd2l0aCBhIGxvZ2luSUQgdGhhdCBkbyBub3QgZXhpc3RzXHJcbiAgICBBUElfUkFURV9MSU1JVF9FWENFRURFRCA9IDQwMzA0OCxcclxuICAgIFBFTkRJTkdfUEFTU1dPUkRfQ0hBTkdFID0gNDAzMTAwLCAvLyBUaGUgdXNlcidzIHBhc3N3b3JkIG5lZWRzIHRvIGJlIGNoYW5nZWRcclxuICAgIEFDQ09VTlRfUEVORElOR19URkFfVkVSSUZJQ0FUSU9OID0gNDAzMTAxLFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9SRUdJU1RSQVRJT04gPSA0MDMxMDIsXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVDRU5UX0xPR0lOID0gNDAzMTEwLFxyXG4gICAgQUNDT1VOVF9URU1QT1JBUklMWV9MT0NLRURfT1VUID0gNDAzMTIwLCAvLyBUb28gbWFueSBsb2dpbiBhdHRlbXB0czsgYWNjb3VudCBsb2NrZWQtb3V0XHJcbiAgICBSRURVTkRBTlRfT1BFUkFUSU9OID0gNDAzMjAwLCAvLyBUaGUgY2xpZW50IHBlcmZvcm1lZCBhbiBvcGVyYXRpb24gdGhhdCBpcyByZWR1bmRhbnRcclxuICAgIElOVkFMSURfQVBQTElDQVRJT05fSUQgPSA0MDMyMDEsIC8vIFRoZSBhcHAgaWQgcHJvdmlkZWQgaXMgZGlmZmVyZW50IHRoYW4gdGhlIG9uZSBjb25maWd1cmVkIGZvciB0aGUgc2l0ZVxyXG4gICAgTk9UX0ZPVU5EID0gNDA0MDAwLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDYXRlZ29yeSBub3QgZm91bmQuIEFjY291bnRzIC0gZW1haWwgdmVyaWZpY2F0aW9uIGZhaWxlZCwgdXVpZCBub3QgZm91bmQuXHJcbiAgICBGUklFTkRfTk9UX0ZPVU5EID0gNDA0MDAxLCAvLyB0aGUgdXNlciBpZCBwcm92aWRlZCBhcyBhIHRhcmdldCBpcyBub3QgYSBmcmllbmQgZm9yIHRoZSBjdXJyZW50IHVzZXJcclxuICAgIENBVEVHT1JZX05PVF9GT1VORCA9IDQwNDAwMiwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLlxyXG4gICAgVUlEX05PVF9GT1VORCA9IDQwNDAwMyxcclxuICAgIFJFU09VUkNFX05PVF9GT1VORCA9IDQwNDAwNCwgLy8gQ2xpZW50IHNpZGUgLSBpbWFnZSBub3QgZm91bmQgYWZ0ZXIgdXBsb2FkXHJcbiAgICBJTlZBTElEX0FQSV9NRVRIT0QgPSA0MDUwMDEsIC8vIGludGVybmFsIGZvciBvdXIgSlMgQVBJXHJcbiAgICBJREVOVElUWV9FWElTVFMgPSA0MDkwMDEsIC8vIHdoZW4gdHJ5aW5nIHRvIGNvbm5lY3QgdG8gYSBwcm92aWRlciB0aGF0IGlzIGFscmVhZHkgY29ubmVjdGVkIG9yIGxpbmsgdG8gYW4gYWxyZWFkeSBsaW5rZWQgYWNjb3VudFxyXG4gICAgR09ORSA9IDQxMDAwMCwgLy8gUmVzb3VyY2Ugbm8gbG9uZ2VyIGF2YWlsYWJsZS4gRGF0YSBLZXkgU2VydmVyIC0ga2V5IHJldm9rZWQvZXhwaXJlZC5cclxuICAgIFJFUVVFU1RfRU5USVRZX1RPT19MQVJHRSA9IDQxMzAwMSwgLy8gQ29tbWVudHMgc2VydmVyIC0gUmVxdWVzdCB0byBsYXJnZVxyXG4gICAgQ09NTUVOVF9URVhUX1RPT19MQVJHRSA9IDQxMzAwMiwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ29tbWVudCBUZXh0IHRvIGxhcmdlLlxyXG4gICAgT0JKRUNUX1RPT19MQVJHRSA9IDQxMzAwMywgLy8gRGF0YVN0b3JlIG9iamVjdCBpcyB0b28gbGFyZ2VcclxuICAgIFBST0ZJTEVfUEhPVE9fVE9PX0xBUkdFID0gNDEzMDA0LCAvLyBQcm9maWxlIHBob3RvIGlzIHRvbyBsYXJnZSwgZXhjZWVkcyBtYXhpbXVtIGFsbG93ZWQgY29udGVudCBsZW5ndGhcclxuICAgIFJFUVVFU1RfVVJJX1RPT19MT05HID0gNDE0MDAwLCAvL1RoZSBVUkkgcHJvdmlkZWQgd2FzIHRvbyBsb25nIGZvciB0aGUgc2VydmVyIHRvIHByb2Nlc3MuXHJcbiAgICBNSVNTSU5HX1VTRVJfUEhPVE8gPSA0MDkwMTAsIC8vIEVycm9yIC0gbWlzc2luZyB1c2VyIHBob3RvXHJcbiAgICBDT1VOVEVSX05PVF9SRUdJU1RFUkVEID0gNDA5MDExLCAvLyBDb3VudGVyIG5vdCByZWdpc3RlcmVkXHJcbiAgICBJTlZBTElEX0dNSURfVElDS0VUID0gNDA5MDEyLCAvLyBnbWlkIHRpY2tldCBpcyBub3QgdmFsaWRcclxuICAgIFNBTUxfTUFQUEVEX0FUVFJJQlVURV9OT1RfRk9VTkQgPSA0MDkwMTMsIC8vIFVzZWQgd2hlbiBtYXBwZWQgYXR0cmlidXRlIHZhbHVlIGZvciBwcm92aWRlclVJRCBjYW5ub3QgYmUgcmV0cmVpdmVkXHJcbiAgICBTQU1MX0NFUlRJRklDQVRFX05PVF9GT1VORCA9IDQwOTAxNCwgLy8gVXNlZCB3aGVuIFNBTUwgY2VydGlmaWNhdGUgY291bGQgbm90IGJlIHJldHJlaXZlZC5cclxuICAgIFNBTUxfTUVTU0FHRV9OT1RfRk9VTkQgPSA0MDkwMTUsIC8vIFVzZWQgd2hlbiBjYWNoZWQgU0FNTCBtZXNzYWdlIGNvdWxkIG5vdCBiZSByZXRyZWl2ZWQuXHJcbiAgICBHRU5FUkFMX1NFUlZFUl9FUlJPUiA9IDUwMDAwMSxcclxuICAgIFNFUlZFUl9MT0dJTl9FUlJPUiA9IDUwMDAwMiwgLy8gZ2VuZXJhbCBlcnJvciBkdXJpbmcgdGhlIGxvZ2luIHByb2Nlc3NcclxuICAgIERFRkFVTFRfQVBQTElDQVRJT05fQ09ORklHVVJBVElPTl9FUlJPUiA9IDUwMDAwMywgLy8gRm9yIG11bHRpcGxlIERDIC0gd2hlbiBubyBkZWZhdWx0IGFwcGxpY2F0aW9uIGNhbiBiZSBmb3VuZCBpbiBEZWZhdWx0QXBwbGljYXRpb25zLmNvbmZpZy4gV2l0aCBlcnJvciBkZXRhaWxzIG9mOiBcIkRlZmF1bHQgYXBwbGljYXRpb24gaXNuJ3QgY29uZmlndXJlZCBmb3IgZGF0YUNlbnRlclwiXHJcbiAgICBTRVNTSU9OX01JR1JBVElPTl9FUlJPUiA9IDUwMDAxNCwgLy8gZXJyb3IgaW4gbWlncmF0aW5nIG9sZCB0byBuZXcgZmFjZWJvb2sgc2Vzc2lvblxyXG4gICAgUFJPVklERVJfRVJST1IgPSA1MDAwMjMsIC8vIGdlbmVyYWwgZXJyb3IgZnJvbSB0aGUgcHJvdmlkZXJcclxuICAgIERBVEFCQVNFX0VSUk9SID0gNTAwMDI4LFxyXG4gICAgVVNFUk5BTUVfUkVRVUlSRUQgPSA1MDAwMjksIC8vIElubmVyIGNvZGVcclxuICAgIE5PX1BST1ZJREVSX0FQUExJQ0FUSU9OID0gNTAwMDMxLCAvLyB0aGUgYXBwbGljYXRpb24gZm9yIHRoaXMgcHJvdmlkZXIgaXMgbm90IGRlZmluZWQgZm9yIHRoaXMgc2l0ZVxyXG4gICAgTE9BRF9GQUlMRUQgPSA1MDAwMzIsIC8vIGNsaWVudCBlcnJvclxyXG4gICAgSU5WQUxJRF9FTlZJUk9OTUVOVF9DT05GSUcgPSA1MDAwMzMsIC8vIEluIGNhc2UgdGhlcmUgaXMgbm8gdGFyZ2V0IGVudmlyb25tZW50IGluIHRoZSBjb25maWcgZmlsZSB3ZSdkIHJldHVybiB3aXRoICBpbnZhbGlkX2Vudmlyb25tZW50X2NvbmZpZyBlcnJvci5cclxuICAgIEVSUk9SX0RVUklOR19CQUNLRU5EX09QRVJBVElPTiA9IDUwMDAzNCxcclxuICAgIFRJTUVPVVQgPSA1MDQwMDEsIC8vIG91dGdvaW5nIHJlcXVlc3QgaGFkIHRpbWVkIG91dFxyXG4gICAgQ0xJRU5UVElNRU9VVCA9IDUwNDAwMiwgLy8gRm9yIHNlcnZlciBTREtzIC0gYSBjbGllbnQgc2lkZSB0aW1lb3V0XHJcbiAgICBJTlZBTElEX1VSTCA9IDQwNDAwNCwgLy8gZW1iZWQubHkgNDA0IGVycm9yIG1lc3NhZ2UgLSB1cmwgaXMgbm90IHZhbGlkXHJcbiAgICBNRURJQV9JVEVNU19OT1RfU1VQUE9SVEVEID0gNDAxMDAxLCAvLyBNZWRpYSBpdGVtcyBhIG5vdCBhbGxvd2VkIGZvciB0aGlzIGNhdGVnb3J5XHJcbiAgICBNSVNTSU5HX0VSUk9SX0NPREUgPSA1OTk5OTksXHJcbn1cclxuZXhwb3J0IGNvbnN0IGVudW0gR1NFcnJvckRldGFpbHMge1xyXG4gICAgTm9uZSA9IDAsXHJcbiAgICBTYW1lX3Bhc3N3b3JkID0gMTAwMDAxLCAvLyBSZXNldCBQYXNzd29yZCAtIFwiJ29sZFBhc3N3b3JkJyBjYW5ub3QgYmUgdGhlIHNhbWUgYXMgJ25ld1Bhc3N3b3JkJ1wiXHJcbiAgICBJbnZhbGlkX3Bhc3N3b3JkID0gMTAwMDAyLCAvLyBSZXNldCBQYXNzd29yZCAtIGN1cnJlbnQgcGFzc3dvcmQgaXMgd3JvbmcvaW52YWxpZFxyXG4gICAgSW52YWxpZF9jb3VudGVyc19xdWVyeV93aXRoX2N1cnNvciA9IDEwMDAwMyxcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRCYXNlRG9tYWluIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2RvbWFpbnMnO1xyXG4vLyBMb2NhbCBlbnZpcm9ubWVudCBpbmZvIChicm93c2VyLCBjYXBhYmlsaXRpZXMsIGhvc3RpbmcgZG9tYWluKVxyXG5cclxuZGVjbGFyZSBjb25zdCBBY3RpdmVYT2JqZWN0OiBhbnk7XHJcblxyXG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG5leHBvcnQgdmFyIGxvY2FsSW5mbyA9IHtcclxuICAgIGJhc2VEb21haW46ICcnLCAvLyBjYWxjdWxhdGVkIGxhdGVyIG9uXHJcbiAgICBpc0Jyb3dzZXJTdXBwb3J0c0ZpbGVzQVBJOiAoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgRmlsZVJlYWRlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgRmlsZVJlYWRlciA9PT0gJ29iamVjdCc7XHJcbiAgICB9KSgpLFxyXG4gICAgaW5pdFRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICB2ZXJzaW9uOiAwLCAvL1RPRE9cclxuICAgIHBhZ2VEb21haW46IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxyXG4gICAgcHJvdG9jb2w6IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID09ICdodHRwOicgPyAnaHR0cCcgOiAnaHR0cHMnLFxyXG4gICAgdXNlckFnZW50OiB1c2VyQWdlbnQsXHJcbiAgICBpc1dpbjogdXNlckFnZW50LmluZGV4T2YoJ3dpbicpICE9IC0xLFxyXG4gICAgaXNJRTogdXNlckFnZW50LmluZGV4T2YoJ21zaWUnKSAhPSAtMSB8fCAodXNlckFnZW50LmluZGV4T2YoJ21vemlsbGEnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZigndHJpZGVudCcpICE9IC0xKSxcclxuICAgIGlzSUU2OiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSA2LicpICE9IC0xLFxyXG4gICAgaXNJRTc6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDcuJykgIT0gLTEsXHJcbiAgICBpc0lFODogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgOC4nKSAhPSAtMSxcclxuICAgIGlzSUU5OiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSA5LicpICE9IC0xLFxyXG4gICAgaXNJRTEwOiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSAxMC4nKSAhPSAtMSxcclxuICAgIGlzSUUxMTogdXNlckFnZW50LmluZGV4T2YoJ21vemlsbGEnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZigndHJpZGVudC83LjAnKSAhPSAtMSxcclxuICAgIGlzRWRnZTogdXNlckFnZW50LmluZGV4T2YoJ2VkZ2UnKSAhPSAtMSxcclxuICAgIGlzSU9TOiB1c2VyQWdlbnQuaW5kZXhPZignaXBob25lJykgIT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2lwYWQnKSAhPSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignaXBvZCcpICE9IC0xLFxyXG4gICAgaXNTYWZhcmk1MzQ6IHVzZXJBZ2VudC5pbmRleE9mKCdzYWZhcmkvNTM0JykgIT0gLTEsXHJcbiAgICBpc1dlQ2hhdDogdXNlckFnZW50LmluZGV4T2YoJ21pY3JvbWVzc2VuZ2VyJykgIT0gLTEsXHJcbiAgICBpb3NWZXJzaW9uOiAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhcHBsZXdlYmtpdCcpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCd2ZXJzaW9uLycpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh1c2VyQWdlbnQuc3BsaXQoJ3ZlcnNpb24vJylbMV0uc3BsaXQoJyAnKVswXSk7XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiAwO1xyXG4gICAgfSkoKSxcclxuICAgIGlzQW5kcm9pZDogdXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPSAtMSxcclxuICAgIGlzQW5kcm9pZEJyb3dzZXI6ICh1c2VyQWdlbnQgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignbW96aWxsYS81LjAnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQgNCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYXBwbGV3ZWJraXQnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCd3aW5kb3dzIHBob25lJykgIT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFNwZWNpYWwgdXNlciBhZ2VudHMgZm91bmQgc28gZmFyIHRoYXQgdmlvbGF0ZSB0aGUgZXhpc3RhbmNlIG9mIGNocm9tZSBydWxlXHJcbiAgICAgICAgLy8gQnVnIDM4MzY3IEFuZHJvaWQgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBlbi11czsgU0FNU1VORyBHVC1JOTUwMCBCdWlsZC9KRFEzOSkgQXBwbGVXZWJLaXQvNTM1LjE5IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xLjAgQ2hyb21lLzE4LjAuMTAyNS4zMDggTW9iaWxlIFNhZmFyaS81MzUuMTlcclxuICAgICAgICAvLyBCdWcgNDAyMDkgQ2hyb21lIEJyb3dzZXI6IE1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA0LjIuMjsgU0FNU1VORyBTR1QtSTc0NyBCdWlsZC9LT1Q0OUgpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8zOS4wLjIxNzEuOTMgTW9iaWxlIFNhZmFyaS81MzcuMzZcclxuICAgICAgICAvLyBXaW5kb3dzIFBob25lIEJyb3dzZXI6IE1vemlsbGEvNS4wIChNb2JpbGU7IFdpbmRvd3MgUGhvbmUgOC4xOyBBbmRyb2lkIDQuMDsgQVJNOyBUcmlkZW50LzcuMDsgVG91Y2g7IHJ2OjExLjA7IElFTW9iaWxlLzExLjA7IE5PS0lBOyBMdW1pYSA5MjApIGxpa2UgaVBob25lIE9TIDdfMF8zIE1hYyBPUyBYIEFwcGxlV2ViS2l0LzUzNyAoS0hUTUwsIGxpa2UgR2Vja28pIE1vYmlsZSBTYWZhcmkvNTM3XHJcbiAgICAgICAgLy8gQ2hyb21lIEJyb3dzZXI6IE1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA0LjIuMjsgZW4tZ2I7IFNBTVNVTkcgR1QtSTk1MDAgQnVpbGQvS09UNDlIKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzEuNSBDaHJvbWUvMjguMC4xNTAwLjk0IE1vYmlsZSBTYWZhcmkvNTM3LjM2XHJcblxyXG4gICAgICAgIHZhciBjaHJvbWVJbmZvID0gL2Nocm9tZVxcLyhcXGQrKS8uZXhlYyh1c2VyQWdlbnQpO1xyXG5cclxuICAgICAgICBpZiAoIWNocm9tZUluZm8pIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY2hyb21lVmVyc2lvbiA9IHBhcnNlSW50KGNocm9tZUluZm9bMV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hyb21lVmVyc2lvbiA8IDIwO1xyXG4gICAgfSkodXNlckFnZW50KSxcclxuICAgIGN1cnJlbnRCcm93c2VyOiAnJyxcclxuICAgIGFuZHJvaWRWZXJzaW9uOiAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodXNlckFnZW50LnNsaWNlKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgKyA4KSk7XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiAwO1xyXG4gICAgfSkoKSxcclxuICAgIGlzQ2hyb21lOiB1c2VyQWdlbnQuaW5kZXhPZignY2hyb21lJykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ2VkZ2UnKSA9PSAtMSwgLy8gZWRnZSBicm93c2VyIGFsc28gdXNlcyBDaHJvbWUgaW4gaXRzIFVBIHN0cmluZy5cclxuICAgIGlzR29vZ2xlQm90OiB1c2VyQWdlbnQuaW5kZXhPZignZ29vZ2xlYm90JykgIT0gLTEsXHJcbiAgICBpc0ZGOiB1c2VyQWdlbnQuaW5kZXhPZignZmlyZWZveCcpICE9IC0xLFxyXG4gICAgaXNPcGVyYTogdXNlckFnZW50LmluZGV4T2YoJ29wZXJhJykgIT0gLTEsXHJcbiAgICBpc1NhZmFyaTpcclxuICAgICAgICBuYXZpZ2F0b3IuYXBwVmVyc2lvbiAmJlxyXG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2FmYXJpJykgIT0gLTEgJiZcclxuICAgICAgICBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID09IC0xICYmXHJcbiAgICAgICAgdXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSA9PSAtMSxcclxuICAgIGlzSU9TV2ViVmlldzogLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLFxyXG4gICAgaXNJT1NDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdjcmlvcycpICE9IC0xLFxyXG4gICAgaXNNQUM6IG5hdmlnYXRvci5hcHBWZXJzaW9uICYmIG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbWFjJykgIT0gLTEsXHJcbiAgICBpc1dpbmRvd3NQaG9uZTogdXNlckFnZW50LmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPSAtMSxcclxuICAgIGlzRmFjZWJvb2tCcm93c2VyOiB1c2VyQWdlbnQuaW5kZXhPZignZmJhbicpICE9IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdmYmF2JykgIT0gLTEsXHJcbiAgICBzdXBwb3J0c1Bvc3RNZXNzYWdlOiB3aW5kb3cucG9zdE1lc3NhZ2UgIT0gbnVsbCAmJiAodXNlckFnZW50LmluZGV4T2YoJ21zaWUnKSA9PSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignaWVtb2JpbGUnKSAhPSAtMSksXHJcbiAgICBzdXBwb3J0c0xvY2FsU3RvcmFnZTogZmFsc2UsXHJcbiAgICBzdXBwb3J0c1Nlc3Npb25TdG9yYWdlOiBmYWxzZSxcclxuICAgIHN1cHBvcnRzRmxhc2g6ICgoKSA9PiB7XHJcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85OTgyNDUvaG93LWNhbi1pLWRldGVjdC1pZi1mbGFzaC1pcy1pbnN0YWxsZWQtYW5kLWlmLW5vdC1kaXNwbGF5LWEtaGlkZGVuLWRpdi10aGF0LWluZlxyXG4gICAgICAgIGxldCBzdXBwb3J0c0ZsYXNoID0gZmFsc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1pbWVUeXBlcyAmJlxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1pbWVUeXBlc1snYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5taW1lVHlwZXNbJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10uZW5hYmxlZFBsdWdpblxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRzRmxhc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm8gPSBuZXcgQWN0aXZlWE9iamVjdCgnU2hvY2t3YXZlRmxhc2guU2hvY2t3YXZlRmxhc2gnKTtcclxuICAgICAgICAgICAgICAgIGlmIChmbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzRmxhc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICByZXR1cm4gc3VwcG9ydHNGbGFzaDtcclxuICAgIH0pKCksXHJcbiAgICBxdWlya3NNb2RlOiBkb2N1bWVudC5jb21wYXRNb2RlID09ICdCYWNrQ29tcGF0JyAmJiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpICE9IC0xLFxyXG4gICAgYmFja0NvbXBhdDogZG9jdW1lbnQuY29tcGF0TW9kZSA9PSAnQmFja0NvbXBhdCcsXHJcbiAgICAvLyBUT0RPOiBBZGQgaXNUYWJsZXQgZnVuY3Rpb24gZm9yIGRldmljZXMgbm9uLU1vYmlsZVxyXG4gICAgaXNNb2JpbGU6IChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbW9iaWxlQ2xpZW50cyA9IFtcclxuICAgICAgICAgICAgJ2lwaG9uZScsXHJcbiAgICAgICAgICAgICdpcG9kJyxcclxuICAgICAgICAgICAgJ2FuZHJvaWQnLFxyXG4gICAgICAgICAgICAnbWlkcCcsXHJcbiAgICAgICAgICAgICcyNDB4MzIwJyxcclxuICAgICAgICAgICAgJ2JsYWNrYmVycnknLFxyXG4gICAgICAgICAgICAnbmV0ZnJvbnQnLFxyXG4gICAgICAgICAgICAnbm9raWEnLFxyXG4gICAgICAgICAgICAncGFuYXNvbmljJyxcclxuICAgICAgICAgICAgJ3BvcnRhbG1tbScsXHJcbiAgICAgICAgICAgICdzaGFycCcsXHJcbiAgICAgICAgICAgICdzaWUtJyxcclxuICAgICAgICAgICAgJ3Nvbnllcmljc3NvbicsXHJcbiAgICAgICAgICAgICdzeW1iaWFuJyxcclxuICAgICAgICAgICAgJ3dpbmRvd3MgY2UnLFxyXG4gICAgICAgICAgICAnYmVucScsXHJcbiAgICAgICAgICAgICdtZGEnLFxyXG4gICAgICAgICAgICAnbW90LScsXHJcbiAgICAgICAgICAgICdvcGVyYSBtaW5pJyxcclxuICAgICAgICAgICAgJ3BoaWxpcHMnLFxyXG4gICAgICAgICAgICAncG9ja2V0IHBjJyxcclxuICAgICAgICAgICAgJ3NhZ2VtJyxcclxuICAgICAgICAgICAgJ3NhbXN1bmcnLFxyXG4gICAgICAgICAgICAnaHRjJyxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gbW9iaWxlQ2xpZW50cykge1xyXG4gICAgICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YobW9iaWxlQ2xpZW50c1tpXSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pKCksXHJcbiAgICBpc01vYmlsZUFwcDogKCgpID0+IHtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKVxyXG4gICAgICAgICAgICAvLyBmb3Igb2xkIElFXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIG1ldGFUYWdzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJykgYXMgYW55O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFUYWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRhVGFnc1tpXS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PSAndmlld3BvcnQnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IG1ldGFUYWdzW2ldLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICYmIGNvbnRlbnQuaW5kZXhPZignd2lkdGg9ZGV2aWNlLXdpZHRoJykgIT09IC0xKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSkoKSxcclxuICAgIGlzTmF0aXZlTW9iaWxlQXBwOiBmYWxzZSwgLy8gd2lsbCBjaGFuZ2UgaWYgbW9iaWxlIGFkYXB0ZXIgd2lsbCBsb2FkIFtpbiBpdHMgJ2luaXQnIG1ldGhvZF0uXHJcbiAgICBpc1RvdWNoOiAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdylcclxuICAgICAgICAgICAgLy8gd29ya3Mgb24gbW9zdCBicm93c2Vyc1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCdvbm1zZ2VzdHVyZWNoYW5nZScgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgIC8vIHdvcmtzIG9uIGllMTBcclxuICAgICAgICAgICAgLy8gVHJ5IHRvIGRldGVybWluZSBpZiBJRSBpcyBvcGVuIGluIG1ldHJvIG1vZGUuIE1ldHJvIGRvZXNuJ3QgYWxsb3cgYWN0aXZlWCwgdGhhdCdzIHRoZSBiZXN0IHRlc3QgYXZhaWxhYmxlIGFzIG9mIElFMTEuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pKCksXHJcbiAgICBpc09uTGluZTogKCkgPT4gbmF2aWdhdG9yLm9uTGluZSxcclxuICAgIG1lc3NhZ2luZ01ldGhvZDogMFxyXG59O1xyXG5jb25zdCBpc1N0b3JhZ2VFbmFibGVkID0gKHN0b3JhZ2VOYW1lOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1tzdG9yYWdlTmFtZV07XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRlc3ROYW1lID0gJ19naWdfbG9jYWxTdG9yYWdlX3Rlc3QnO1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9ICdqdXN0IGNoZWNraW5nIGZvciBsb2NhbFN0b3JhZ2UnO1xyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh0ZXN0TmFtZSwgdGVzdFZhbHVlKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBzdG9yYWdlLmdldEl0ZW0odGVzdE5hbWUpID09PSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHRlc3ROYW1lKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAvLyBSZWFzb25zOlxyXG4gICAgICAgIC8vIC0gSW5zaWRlIDNyZCBwYXJ0eSBBUEkgcHJveHkgaUZyYW1lLlxyXG4gICAgICAgIC8vIC0gU2FmYXJpIGluIGluY29nbml0byBtb2RlIHdpbGwgZXJyb3Igd2l0aCBcInF1b3RhIGV4Y2VlZGVkXCIuXHJcbiAgICAgICAgLy8gLSBDaHJvbWUgd2l0aCAzcmQgcGFydHkgY29va2llcyBkaXNhYmxlZCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHlvdSBhY2Nlc3MgdGhlIHdpbmRvdy5sb2NhbFN0b3JhZ2Ugb2JqZWN0IGluIEFOWSB3YXkuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59O1xyXG5sb2NhbEluZm8uc3VwcG9ydHNMb2NhbFN0b3JhZ2UgPSBpc1N0b3JhZ2VFbmFibGVkKCdsb2NhbFN0b3JhZ2UnKTtcclxubG9jYWxJbmZvLnN1cHBvcnRzU2Vzc2lvblN0b3JhZ2UgPSBpc1N0b3JhZ2VFbmFibGVkKCdzZXNzaW9uU3RvcmFnZScpO1xyXG5pZiAobG9jYWxJbmZvLmlzSUUxMSAmJiAhd2luZG93LmluZGV4ZWREQilcclxuICAgIC8vIElFMTAtMTEgc3VwcG9ydCBwb3N0TWVzc2FnZSBiZXR3ZWVuIGlmcmFtZXMgYnV0IG5vdCBpblByaXZhdGUgbW9kZVxyXG4gICAgbG9jYWxJbmZvLnN1cHBvcnRzUG9zdE1lc3NhZ2UgPSBmYWxzZTtcclxubG9jYWxJbmZvLmlzTUFDID0gbG9jYWxJbmZvLmlzTUFDICYmICFsb2NhbEluZm8uaXNJT1M7XHJcbnZhciBvcyA9IGxvY2FsSW5mby5pc1dpblxyXG4gICAgPyAnd2luZG93cydcclxuICAgIDogbG9jYWxJbmZvLmlzV2luZG93c1Bob25lXHJcbiAgICAgICAgPyAnd2lucGhvbmUnXHJcbiAgICAgICAgOiBsb2NhbEluZm8uaXNJT1NcclxuICAgICAgICAgICAgPyAnaW9zLXYnICsgbG9jYWxJbmZvLmlvc1ZlcnNpb25cclxuICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNNQUNcclxuICAgICAgICAgICAgICAgID8gJ21hYydcclxuICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzQW5kcm9pZFxyXG4gICAgICAgICAgICAgICAgICAgID8gJ2FuZHJvaWQnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcclxuaWYgKG9zKSBvcyArPSAnICc7XHJcbnZhciBicm93c2VyID0gbG9jYWxJbmZvLmlzQ2hyb21lXHJcbiAgICA/ICdjaHJvbWUnXHJcbiAgICA6IGxvY2FsSW5mby5pc0ZGXHJcbiAgICAgICAgPyAnZmlyZWZveCdcclxuICAgICAgICA6IGxvY2FsSW5mby5pc1NhZmFyaVxyXG4gICAgICAgICAgICA/ICdzYWZhcmknXHJcbiAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzRWRnZVxyXG4gICAgICAgICAgICAgICAgPyAnZWRnZSdcclxuICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUUxMVxyXG4gICAgICAgICAgICAgICAgICAgID8gJ2llMTEnXHJcbiAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2llMTAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUU5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdpZTknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2llOCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG5sb2NhbEluZm8uY3VycmVudEJyb3dzZXIgPSBvcyArIGJyb3dzZXI7XHJcbmxldCBiYXNlRG9tYWluczogc3RyaW5nW118c3RyaW5nO1xyXG5pZiAoZ2lneWEucGFydG5lclNldHRpbmdzPy5iYXNlRG9tYWlucz8ubGVuZ3RoKSB7XHJcbiAgICBiYXNlRG9tYWlucyA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5iYXNlRG9tYWlucyBhcyBzdHJpbmdbXXxzdHJpbmc7XHJcbn0gZWxzZSB7XHJcbiAgICBpZiAod2luZG93LnNlbGYgPT09IHdpbmRvdy50b3ApIHtcclxuICAgICAgICAvLyBvbmx5IGluIHRoZSB0b3AgZnJhbWVcclxuICAgICAgICBnaWd5YS5sb2dnZXIud2FybignZ2lneWE6IG1pc3NpbmcgYmFzZSBkb21haW5zIGZvciBzaXRlJyk7XHJcbiAgICB9XHJcbiAgICBiYXNlRG9tYWlucyA9IFtkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZV07XHJcbn1cclxubG9jYWxJbmZvLmJhc2VEb21haW4gPSBnZXRCYXNlRG9tYWluKGJhc2VEb21haW5zKTtcclxuIiwiaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcbmltcG9ydCAqIGFzIHZpZXdwb3J0VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3ZpZXdwb3J0JztcclxuaW1wb3J0ICogYXMgZnVuY3Rpb25zVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Z1bmN0aW9ucyc7XHJcblxyXG5leHBvcnQgdmFyIF9wb3B1cENvbnRhaW5lcnMgPSBbXTtcclxuZXhwb3J0IHZhciBfcHNldWRvQ29udGFpbmVycyA9IFtdO1xyXG5sZXQgX25leHRaSW5kZXggPSA5OTk5OTk5OTk7XHJcbnZhciBiYWNrTGlzdGVuZXIgPSBudWxsO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFpJbmRleCgpIHtcclxuICAgIF9uZXh0WkluZGV4Kys7XHJcbiAgICByZXR1cm4gX25leHRaSW5kZXg7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdpZ3lhU2NyaXB0RWxlbWVudChmaWxlTmFtZXM6IHN0cmluZ1tdKTogSFRNTFNjcmlwdEVsZW1lbnQge1xyXG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICB2YXIgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQ7XHJcbiAgICB2YXIgZ2lneWFDZG5SZWdleCA9IC9cXC9cXC9jZG4ocyk/XFwuKHJ1MVxcLik/Z2lneWEuY29tLztcclxuICAgIGZvciAodmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgdmFyIHNjcmlwdCA9IHNjcmlwdHNbaV07XHJcbiAgICAgICAgdmFyIHNyYyA9IHNjcmlwdC5zcmMudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoc3JjICE9PSAnJykge1xyXG4gICAgICAgICAgICBpZiAoZ2lneWFDZG5SZWdleC50ZXN0KHNyYykgfHwgc3JjLmluZGV4T2YoJz9hcGlrZXk9JykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzRmlsZU5hbWVFeGlzdEluU3JjID0gZmlsZU5hbWVzLmxlbmd0aCA9PT0gMCB8fCBmaWxlTmFtZXMuc29tZShmaWxlTmFtZSA9PiBzcmMuaW5kZXhPZihmaWxlTmFtZSkgPiAtMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGaWxlTmFtZUV4aXN0SW5TcmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50ID0gc2NyaXB0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNjcmlwdEVsZW1lbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKGVsOiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHZhciBldmVudDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50TmFtZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gSUUxMCBhbmQgYmVsb3cgc3VwcG9ydFxyXG4gICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcbiAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRCdXR0b25TdWJtaXRMaXN0ZW5lcihlbDogSFRNTEVsZW1lbnQsIGhhbmRsZXI6IEZ1bmN0aW9uLCBldmVudDogJ2NsaWNrJyB8ICd0b3VjaGVuZCcgPSAnY2xpY2snLCBkZWJ1Z05hbWU/OiBzdHJpbmcpIHtcclxuICAgIC8vIEp1c3QgaW4gY2FzZSB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdC5cclxuICAgIGlmICghZWwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xyXG4gICAgaWYgKGVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSAhPSAnLTEnKSB7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGVsLCBldmVudCwgKGU6IE1vdXNlRXZlbnQpID0+IGhhbmRsZXIoZSkpO1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICgoZS53aGljaCB8fCBlLmtleUNvZGUpID09IDEzKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaGFuZGxlcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbDogYW55LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGlmICghZWwgfHwgIWhhbmRsZXIpIHJldHVybjtcclxuXHJcbiAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZWw6IGFueSwgZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAoIWhhbmRsZXIpIHJldHVybjtcclxuICAgIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBoYW5kbGVyKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZURlZmF1bHRFdmVudEhhbmRsaW5nKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuZXZlbnQpIHtcclxuICAgICAgICB3aW5kb3cuZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGlhbG9nQmFja0xpc3RlbmVyKGhhbmRsZXI6IChlOiBFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgX3JlbW92ZURpYWxvZ0JhY2tMaXN0ZW5lcigpO1xyXG5cclxuICAgIC8vIFRoaXMgc2hvdWxkIGZpcmUgd2hlbiBiYWNrIGlzIGNsaWNrZWRcclxuICAgIGJhY2tMaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZSAmJiBlLm5ld1VSTCAmJiBlLm5ld1VSTC5pbmRleE9mKCd8Z2lneWFNb2JpbGVEaWFsb2cnKSA9PSAtMSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyKGUpO1xyXG4gICAgICAgICAgICBfcmVtb3ZlRGlhbG9nQmFja0xpc3RlbmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBoYXNoIGNvdWxkIGNoYW5nZSByaWdodCBhZnRlciB0aGUgY2FsbCBpZiBpdCB3YXMgaW5pdGlhdGVkIGZyb20gYSBsaW5rIHRoYXQgZGlkbid0IHJldHVybiBmYWxzZVxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJ3xnaWd5YU1vYmlsZURpYWxvZycpID09IC0xKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2ggKyAnfGdpZ3lhTW9iaWxlRGlhbG9nJztcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdoYXNoY2hhbmdlJywgYmFja0xpc3RlbmVyKTtcclxuICAgIH0sIDUwKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JlbW92ZURpYWxvZ0JhY2tMaXN0ZW5lcigpIHtcclxuICAgIGlmICghYmFja0xpc3RlbmVyKSByZXR1cm47XHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBiYWNrTGlzdGVuZXIpO1xyXG4gICAgYmFja0xpc3RlbmVyID0gbnVsbDtcclxuICAgIC8vcmVzdG9yZSBwcmV2aW91cyBoYXNoXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJ3xnaWd5YU1vYmlsZURpYWxvZycsICcnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9Cb2R5KGVsOiBIVE1MRWxlbWVudCwgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICghZG9jdW1lbnQuYm9keSkgcmV0dXJuO1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlICYmIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmIChlbCAmJiBlbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hpbGRPZihjaGlsZDogTm9kZSwgcGFyZW50OiBOb2RlKSB7XHJcbiAgICB2YXIgZGlyZWN0UGFyZW50ID0gY2hpbGQucGFyZW50Tm9kZTtcclxuXHJcbiAgICB3aGlsZSAoZGlyZWN0UGFyZW50KSB7XHJcbiAgICAgICAgaWYgKHBhcmVudCA9PSBkaXJlY3RQYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXJlY3RQYXJlbnQgPSBkaXJlY3RQYXJlbnQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgIHdoaWxlIChlbCkge1xyXG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XHJcbiAgICAgICAgaWYgKGNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IGNvbXB1dGVkU3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VudGVyZWREaXZJRChuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAnZ2lnXycgKyBsb2NhbEluZm8uaW5pdFRpbWUuZ2V0VGltZSgpLnRvU3RyaW5nKCkgKyAnXycgKyBuYW1lO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aEF0dHJpYnV0ZXMoZG9tRWxlbU5hbWU6IHN0cmluZywgZG9tRWxlbUF0dHJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IG5ld0RvbUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRvbUVsZW1OYW1lKTtcclxuXHJcbiAgICBpZiAoZG9tRWxlbUF0dHJzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZWxlbUF0dHIgaW4gZG9tRWxlbUF0dHJzKSB7XHJcbiAgICAgICAgICAgIG5ld0RvbUVsZW1bZWxlbUF0dHJdID0gZG9tRWxlbUF0dHJzW2VsZW1BdHRyXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld0RvbUVsZW07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvcExldmVsRGl2KGlkPzogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgaWYgKGVsLnN0eWxlLnpJbmRleCAhPSBudWxsKSB7XHJcbiAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gJycgKyBnZXROZXh0WkluZGV4KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBlbC5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlICYmIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlbCwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQnlJRChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93QnlJRChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gbG9jYWxJbmZvLmlzSUU2ID8gKGVsLnRhZ05hbWUgPT0gJ1REJyA/ICd0YWJsZS1jZWxsJyA6IGVsLnRhZ05hbWUgPT0gJ1RSJyA/ICcnIDogZWwudGFnTmFtZSA9PSAnVEFCTEUnID8gJycgOiAnYmxvY2snKSA6ICcnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckJ5SUQoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBpZiAoYyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge31cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SFRNTFNpemUoaHRtbDogc3RyaW5nLCBjb250YWluZXI6IEhUTUxFbGVtZW50KTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcclxuICAgIHZhciBkaXZNZWFzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZNZWFzdXJlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGRpdk1lYXN1cmUuc3R5bGUubGVmdCA9ICctMTAwMHB4JztcclxuICAgIGRpdk1lYXN1cmUuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZNZWFzdXJlKTtcclxuICAgIHZhciB3ID0gZGl2TWVhc3VyZS5vZmZzZXRXaWR0aDtcclxuICAgIHZhciBoID0gZGl2TWVhc3VyZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICBkaXZNZWFzdXJlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2TWVhc3VyZSk7XHJcbiAgICByZXR1cm4geyB3OiB3LCBoOiBoIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlDbGFzcyhwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcsIGluY2x1ZGVQYXJlbnQ/OiBib29sZWFuKTogSFRNTEVsZW1lbnRbXSB7XHJcbiAgICBpZiAoIXBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICB2YXIgYXJFbHMgPSBbXTtcclxuXHJcbiAgICBpZiAoaW5jbHVkZVBhcmVudCAmJiBpc0VsZW1lbnRDbGFzcyhwYXJlbnRFbGVtZW50LCBjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgYXJFbHMucHVzaChwYXJlbnRFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZWxzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSBhcyBhbnk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpc0VsZW1lbnRDbGFzcyhlbHNbaV0sIGNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgICAgYXJFbHMucHVzaChlbHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhckVscyB8fCBbXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUF0dHJpYnV0ZShwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFnTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZVZhbHVlOiBzdHJpbmcpOiBIVE1MRWxlbWVudFtdIHtcclxuICAgIHZhciBhckVscyA9IFtdO1xyXG4gICAgdmFyIGVsczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBwYXJlbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIGFzIGFueTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGVsc1tpXS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkgPT0gYXR0cmlidXRlVmFsdWUpIHtcclxuICAgICAgICAgICAgYXJFbHMucHVzaChlbHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhckVscztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudFBvc2l0aW9uKGVsOiBIVE1MRWxlbWVudCk6IHsgbGVmdDogbnVtYmVyOyB0b3A6IG51bWJlcjsgcmlnaHQ6IG51bWJlcjsgYm90dG9tOiBudW1iZXIgfSB7XHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgbGVmdDogMCwgdG9wOiAwLCBib3R0b206IDAsIHJpZ2h0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHZhciBzY3JvbGwgPSB2aWV3cG9ydFV0aWxzLmdldFNjcm9sbCgpO1xyXG4gICAgdmFyIGxlZnQgPSByZWN0LmxlZnQgKyBzY3JvbGwubGVmdDtcclxuICAgIHZhciB0b3AgPSByZWN0LnRvcCArIHNjcm9sbC50b3A7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgIHJpZ2h0OiBsZWZ0ICsgcmVjdC53aWR0aCxcclxuICAgICAgICBib3R0b206IHRvcCArIHJlY3QuaGVpZ2h0LFxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3NUb0VsZW1lbnQoZWw6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBleGlzdGluZ0NsYXNzZXMgPSBlbC5jbGFzc05hbWUgPyBnZXRDbGFzc05hbWVzKGVsKSA6IFtdO1xyXG4gICAgdmFyIGV4aXN0aW5nT3JpZ2luYWxMZW5ndGggPSBleGlzdGluZ0NsYXNzZXMubGVuZ3RoO1xyXG4gICAgdmFyIG5ld0NsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBmb3IgKHZhciBqIGluIG5ld0NsYXNzZXMpIHtcclxuICAgICAgICB2YXIgZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFuZXdDbGFzc2VzW2pdKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIGV4aXN0aW5nQ2xhc3Nlcykge1xyXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdDbGFzc2VzW2ldID09PSBuZXdDbGFzc2VzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nQ2xhc3Nlcy5wdXNoKG5ld0NsYXNzZXNbal0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXhpc3RpbmdDbGFzc2VzLmxlbmd0aCAhPT0gZXhpc3RpbmdPcmlnaW5hbExlbmd0aCkge1xyXG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGV4aXN0aW5nQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoZWw6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZywgc3Vic3RyaW5nOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGlmICghZWwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgYXJDbGFzcyA9IGdldENsYXNzTmFtZXMoZWwpO1xyXG4gICAgZm9yICh2YXIgaSA9IGFyQ2xhc3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAoYXJDbGFzc1tpXSA9PT0gY2xhc3NOYW1lIHx8IChzdWJzdHJpbmcgJiYgYXJDbGFzc1tpXS5pbmRleE9mKGNsYXNzTmFtZSkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICBhckNsYXNzLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbC5jbGFzc05hbWUgPSBhckNsYXNzLmpvaW4oJyAnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhlbDogSFRNTEVsZW1lbnQpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHZhciBjbGFzc2VzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBpZiAodHlwZW9mIGVsLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50Q2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgZWxzZSBpZiAoIWNsYXNzTmFtZSkgcmV0dXJuIHRydWU7XHJcbiAgICBlbHNlIGlmICghZWwuY2xhc3NOYW1lKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdmFyIGV4aXN0cyA9IGZhbHNlO1xyXG4gICAgdmFyIGFyQ2xhc3MgPSBnZXRDbGFzc05hbWVzKGVsKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJDbGFzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhckNsYXNzW2ldID09PSBjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4aXN0cztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCFldmVudCkgcmV0dXJuO1xyXG4gICAgaWYgKCdjYW5jZWxhYmxlJyBpbiBldmVudClcclxuICAgICAgICAvLyBBbGwgYnJvd3NlcnMgZXhjZXB0IDxJRTlcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZWxzZSBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB2YXIgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYW1lID0gbmFtZSB8fCAnJztcclxuICAgIGRpdkNvbnRhaW5lci5pbm5lckhUTUwgPSAnPCcgKyB0eXBlICsgJyBuYW1lPVwiJyArIG5hbWUgKyAnXCIgaWQ9XCInICsgbmFtZSArICdcIj48LycgKyB0eXBlICsgJz4nO1xyXG4gICAgcmV0dXJuIGRpdkNvbnRhaW5lci5maXJzdENoaWxkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTaXplKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHc6IGFueSwgaDogYW55LCBjZW50ZXI/OiBib29sZWFuKSB7XHJcbiAgICBpZiAoY29udGFpbmVyID09IG51bGwgfHwgY29udGFpbmVyLnN0eWxlID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHcpIHtcclxuICAgICAgICB3ID0gJycgKyB3O1xyXG4gICAgICAgIHZhciBpc1dpZHRoUHJlY2VudGFnZSA9IHcuaW5kZXhPZignJScpID4gMDtcclxuXHJcbiAgICAgICAgaWYgKCFpc05hTih3KSB8fCBpc1dpZHRoUHJlY2VudGFnZSkge1xyXG4gICAgICAgICAgICB2YXIgd2lkdGhWYWx1ZTogc3RyaW5nID0gJycgKyAoaXNXaWR0aFByZWNlbnRhZ2UgPyB3IDogdyArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS53aWR0aCAhPSB3aWR0aFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSB3aWR0aFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoKSB7XHJcbiAgICAgICAgaCA9ICcnICsgaDtcclxuICAgICAgICB2YXIgaXNIZWlnaHRQcmVjZW50YWdlID0gaC5pbmRleE9mKCclJykgPiAwO1xyXG5cclxuICAgICAgICBpZiAoIWlzTmFOKHcpIHx8IGlzSGVpZ2h0UHJlY2VudGFnZSkge1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0VmFsdWU6IHN0cmluZyA9ICcnICsgKGlzSGVpZ2h0UHJlY2VudGFnZSA/IGggOiBoICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnN0eWxlLmhlaWdodCAhPT0gaGVpZ2h0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBoZWlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2VudGVyICYmIHcgJiYgaCkge1xyXG4gICAgICAgIGlmIChjb250YWluZXIuc3R5bGUuekluZGV4ID09IG51bGwgfHwgY2VudGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS56SW5kZXggPSAnJyArIGdldE5leHRaSW5kZXgoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB2cCA9IHZpZXdwb3J0VXRpbHMuZ2V0SW5uZXJTaXplKCk7XHJcbiAgICAgICAgdmFyIHNjcmwgPSB2aWV3cG9ydFV0aWxzLmdldFNjcm9sbCgpO1xyXG5cclxuICAgICAgICB2YXIgdnB0ID0gc2NybC50b3A7XHJcbiAgICAgICAgdmFyIHZwbCA9IHNjcmwubGVmdDtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnICsgTWF0aC5tYXgoMCwgdnB0ICsgTWF0aC5mbG9vcigodnAuaCAtIGgpIC8gMikpICsgJ3B4JztcclxuICAgICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9ICcnICsgTWF0aC5tYXgoMCwgdnBsICsgTWF0aC5mbG9vcigodnAudyAtIHcpIC8gMikpICsgJ3B4JztcclxuICAgICAgICBjb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIaWRkZW5JZnJhbWUoc3JjOiBzdHJpbmcpOiBIVE1MSUZyYW1lRWxlbWVudCB7XHJcbiAgICB2YXIgaWZyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICBpZnIuc3JjID0gc3JjO1xyXG4gICAgaWZyLnN0eWxlLndpZHRoID0gJzMwcHgnO1xyXG4gICAgaWZyLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcclxuICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpZnIuc3R5bGUudG9wID0gJy0xMDAwcHgnO1xyXG4gICAgaWZyLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICBhcHBlbmRUb0JvZHkoaWZyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZnVuY3Rpb25zVXRpbHMuaW52b2tlT25QYWdlTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFwcGVuZFRvQm9keShpZnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpZnI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJpYnV0ZUVuY29kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdmFsdWVcclxuICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFwiL2csICcmcXVvdDsnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXCcvZywgJyYjMzk7Jyk7IC8vIElFOCBkb2Vzbid0IHN1cHBvcnQgJmFwb3M7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1hbmlwdWxhdGVBdHRyaWJ1dGVzKFxyXG4gICAgZWxlbWVudHM6IEVsZW1lbnRbXSxcclxuICAgIG1hdGNoZXI6IFJlZ0V4cCxcclxuICAgIHJlcGxhY2VQcmVkaWNhdGU6IChtYXRjaDogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgY3JpdGVyaWE6IChhdHRyPzogQXR0cikgPT4gYm9vbGVhbiA9ICgpID0+IHRydWUsXHJcbik6IHZvaWQge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYgKCFlbC5hdHRyaWJ1dGVzKSByZXR1cm47XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWwuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICAgICAgaWYgKGNyaXRlcmlhKGF0dHIpKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLnZhbHVlID0gYXR0ci52YWx1ZS5yZXBsYWNlKG1hdGNoZXIsIHJlcGxhY2VQcmVkaWNhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdGV4dE5vZGVzVW5kZXIoZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbjtcclxuICAgIGNvbnN0IHRleHROb2RlczogVGV4dFtdID0gW107XHJcbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbCwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwsIGZhbHNlKTtcclxuICAgIHdoaWxlICgobiA9IHRyZWVXYWxrZXIubmV4dE5vZGUoKSBhcyBUZXh0KSkge1xyXG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHROb2RlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQm9vbGVhbkF0dHJpYnV0ZShhdHRyTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gWydhdXRvY29tcGxldGUnLCAnYXV0b2ZvY3VzJywgJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnaGlkZGVuJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3NlbGVjdGVkJ10uaW5kZXhPZihhdHRyTmFtZSkgPiAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQmVsb25nVG9HaWd5YUZpZWxkc2V0KGVsOiBFbGVtZW50KTogYm9vbGVhbiB7XHJcblxyXG4gICAgaWYgKCFlbCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gZW5kIG9mIHJlY3Vyc2lvbiAtIGVsZW1lbnQgaXMgbm90IGEgY2hpbGQgb2YgYSBmaWVsZHNldFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0VsZW1lbnRDbGFzcyhlbC5wYXJlbnRFbGVtZW50LCAnZ2lneWEtZmllbGRzZXQnKSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzQmVsb25nVG9HaWd5YUZpZWxkc2V0KGVsLnBhcmVudEVsZW1lbnQpO1xyXG59XHJcbiIsImltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmo6IGFueSwgaW5jbHVkZUZ1bmN0aW9ucyA9IGZhbHNlLCBwcmV0dHlQcmludCA9IGZhbHNlLCBsID0gMCwgbWF4TGV2ZWwgPSAyMCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWxvY2FsSW5mby5pc0lFOCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3dbJ0pTT04nXS5zdHJpbmdpZnkob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFsKSBsID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGwgPiBtYXhMZXZlbCkgcmV0dXJuICdbVG9vIGRlZXBdJztcclxuXHJcbiAgICAgICAgdmFyIHByZWZpeCA9ICcnO1xyXG4gICAgICAgIHZhciBuZXdsaW5lID0gJyc7XHJcbiAgICAgICAgdmFyIHRhYiA9ICcnO1xyXG4gICAgICAgIGlmIChwcmV0dHlQcmludCkge1xyXG4gICAgICAgICAgICB0YWIgPSAnXFx0JztcclxuICAgICAgICAgICAgbmV3bGluZSA9ICdcXG4nO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGwgKyAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHByZWZpeCArPSB0YWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHQgPSB0eXBlb2Ygb2JqO1xyXG4gICAgICAgIGlmICh0ID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgIT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIHNpbXBsZSBkYXRhIHR5cGVcclxuXHJcbiAgICAgICAgICAgIGlmICh0ID09ICdzdHJpbmcnKSBvYmogPSAnXCInICsgb2JqLnJlcGxhY2UoLyhcXFwifFxcXFwpL2csICdcXFxcJDEnKS5yZXBsYWNlKC9cXHJcXG58XFxyfFxcbi9nLCAnXFxcXG4nKSArICdcIic7XHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcob2JqKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbixcclxuICAgICAgICAgICAgICAgIHYsXHJcbiAgICAgICAgICAgICAgICBqc29uID0gW10sXHJcbiAgICAgICAgICAgICAgICBhcnIgPSBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5O1xyXG4gICAgICAgICAgICBpZiAoYXJyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBvYmpbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdCA9IHR5cGVvZiB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ID09IG51bGwgfHwgdCA9PSAndW5kZWZpbmVkJykgdiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ3N0cmluZycpIHYgPSAnXCInICsgdi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZUZ1bmN0aW9ucykgdiA9ICdGdW5jdGlvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodi5wYXJlbnROb2RlICYmIHYuaW5uZXJIVE1MKSB2ID0gJ0hUTUxFbGVtZW50JztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2LmNvbnN0cnVjdG9yID09IERhdGUpIHYgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdvYmplY3QnICYmIHYgIT09IG51bGwpIHYgPSBzZXJpYWxpemUodiwgaW5jbHVkZUZ1bmN0aW9ucywgcHJldHR5UHJpbnQsIGwgKyAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFN0cmluZyh2KSAhPSAnJykganNvbi5wdXNoKHByZWZpeCArIHRhYiArIFN0cmluZyh2KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKG4gaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IG9ialtuXTtcclxuICAgICAgICAgICAgICAgICAgICB0ID0gdHlwZW9mIHY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCB0ID09ICd1bmRlZmluZWQnKSB2ID0gU3RyaW5nKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ3N0cmluZycpIHYgPSAnXCInICsgdi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZUZ1bmN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9ICdGdW5jdGlvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHYucGFyZW50Tm9kZSAmJiB2LmlubmVySFRNTCkgdiA9ICdIVE1MRWxlbWVudCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodi5jb25zdHJ1Y3RvciA9PSBEYXRlKSB2ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsKSB2ID0gbmV3bGluZSArIHNlcmlhbGl6ZSh2LCBpbmNsdWRlRnVuY3Rpb25zLCBwcmV0dHlQcmludCwgbCArIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RyaW5nKHYpICE9ICcnKSBqc29uLnB1c2gocHJlZml4ICsgdGFiICsgJ1wiJyArIG4ucmVwbGFjZSgvKFxcXCJ8XFxcXCkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcclxcbnxcXHJ8XFxuL2csICdcXFxcbicpICsgJ1wiOicgKyBTdHJpbmcodikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdsaW5lICsgcHJlZml4ICsgKGFyciA/ICdbJyA6ICd7JykgKyBuZXdsaW5lICsganNvbi5qb2luKCcsJyArIG5ld2xpbmUpICsgbmV3bGluZSArIHByZWZpeCArIChhcnIgPyAnXScgOiAnfScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemU8VD4oanNvbjogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBULCBzY29wZT86IGFueSk6IFQge1xyXG4gICAgLy8gUmV0dXJuIGRlZmF1bHQgdmFsdWUgaWYgaXMgZW1wdHkgc3RyaW5nIChvciBzaW1pbGFyKS5cclxuICAgIGlmICghanNvbiB8fCAhanNvbi5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8ICh7fSBhcyBUKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdHRlbXB0IHRvIHBhcnNlLiBPbiBlcnJvciwgd2FybiBpbiBjb25zb2xlIGFuZCByZXR1cm4gZGVmYXVsdCB2YWx1ZS5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xyXG4gICAgICAgIGlmIChzY29wZSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY29wZSkge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChzY29wZVtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZm46IEZ1bmN0aW9uID0gZXZhbChgKGZ1bmN0aW9uKCR7a2V5cy5qb2luKCcsJyl9KSB7IHJldHVybiAke2pzb24udHJpbSgpfTsgfSlgKTtcclxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLCB2YWx1ZXMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJyb3IgZGVzZXJpYWxpemluZyBKYXZhU2NyaXB0JywgZSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoe30gYXMgVCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlPFQ+KGpzb246IHN0cmluZywgZGVmYXVsdFZhbHVlPzogVCk6IFQge1xyXG4gICAgaWYgKGxvY2FsSW5mby5pc0lFOCkge1xyXG4gICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZTxUPihqc29uLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93WydKU09OJ10ucGFyc2UoanNvbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8ICh7fSBhcyBUKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgc3RyaW5nVXRpbHNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVyaSB7XHJcbiAgICBwcml2YXRlIF9hbmNob3I6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBpc0Fic29sdXRlID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHA6JyA/ICdodHRwJyA6ICdodHRwcyc7XHJcbiAgICAgICAgaWYgKGlzQWJzb2x1dGUgJiYgdXJsLmluZGV4T2YoJzovLycpID09PSAtMSAmJiB1cmwuY2hhckF0KDApICE9PSAnLycpIHVybCA9IGAke3Byb3RvY29sfTovLyR7dXJsfWA7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yLmhyZWYgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkb21haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ob3N0bmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5wYXRobmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhyZWYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ocmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2VhcmNoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3Iuc2VhcmNoLnNsaWNlKDEpO1xyXG4gICAgfSAvLyBkcm9wcGluZyAnPydcclxuICAgIHB1YmxpYyBnZXQgaGFzaCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhhc2guc2xpY2UoMSk7XHJcbiAgICB9IC8vIGRyb3BwaW5nICcjJ1xyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ocmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb1NlYXJjaChwYXJhbXM6IE9iamVjdCkge1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcmFtc1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgdmFsID09ICdib29sZWFuJyB8fCB0eXBlb2YgdmFsID09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpICYmIG5hbWUgIT0gJ2V2ZW50TmFtZScpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhZGRpdGlvbiA9IHRoaXMuX2FuY2hvci5zZWFyY2ggPyAnJicgOiAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FuY2hvci5zZWFyY2ggKz0gYCR7YWRkaXRpb259JHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNbbmFtZV0pfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGZldGNoPFQ+KHJldHJpZXMgPSAwKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5mZXRjaCA/IGF3YWl0IHRoaXMuYnJvd3NlckZldGNoPFQ+KCkgOiBhd2FpdCB0aGlzLnhocjxUPigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKHJldHJpZXMgPD0gMClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmV0Y2ggZmFpbGVkOiAke2V9YCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKHJldHJpZXMgLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQmFzZU9mKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFVyaS5wYXJzZSh1cmwpLmlzSW4odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzSW4oYmFzZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc0luKGJhc2U6IFVyaSk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNJbihiYXNlOiBVcmkgfCBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodHlwZW9mIGJhc2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGJhc2UgPSBVcmkucGFyc2UoYmFzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAodGhpcy5kb21haW4gPT0gYmFzZS5kb21haW4gfHwgLy8gcGFnZSBpcyB0aGUgYmFzZSBkb21haW5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJEb21haW5PZihiYXNlKSkgJiYgLy8gb3Igc3ViLWRvbWFpbiBvZiBpdFxyXG4gICAgICAgICAgICAoIWJhc2UucGF0aCB8fCB0aGlzLnBhdGguaW5kZXhPZihiYXNlLnBhdGgpID09IDApXHJcbiAgICAgICAgKTsgLy8gcGFnZSBpcyBhbHNvIGluIGJhc2UncyBkZWZpbmVkIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRm9yU3ViRG9tYWlucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb21haW4uaW5kZXhPZignLicpID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzU3ViRG9tYWluT2YoYmFzZTogVXJpKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGRvbWFpbiA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoIWJhc2UuaXNGb3JTdWJEb21haW5zKCkpIGRvbWFpbiA9ICcuJztcclxuXHJcbiAgICAgICAgZG9tYWluICs9IGJhc2UuZG9tYWluO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RyaW5nVXRpbHNVdGlscy5lbmRzV2l0aCh0aGlzLmRvbWFpbiwgZG9tYWluKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlKHVybDogc3RyaW5nLCBpc0Fic29sdXRlID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghdXJsKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFVyaSh1cmwsIGlzQWJzb2x1dGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgYnJvd3NlckZldGNoPFQ+KCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmV0Y2ggZmFpbGVkYCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHhocjxUPigpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCB8fCB4aHIuc3RhdHVzICE9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYHhociBmYWlsZWQgLSAke3hoci5zdGF0dXN9IC0gJHt4aHIuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShqc29uUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCBtcykpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSU51bWVyaWNNYXA8VD4ge1xyXG4gICAgW2tleTogbnVtYmVyXTogVDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXA8VD4ge1xyXG4gICAgW2tleTogc3RyaW5nXTogVDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElFbnVtZXJhYmxlPFQ+IHtcclxuICAgIGxlbmd0aDogbnVtYmVyO1xyXG4gICAgW2k6IG51bWJlcl06IFQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2YoYXI6IGFueVtdLCBvOiBhbnkpOiBudW1iZXIge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhcltpXSA9PSBvKSByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYXI6IGFueVtdKSB7XHJcbiAgICB2YXIgYXIyID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXIyW2ldID0gYXJbaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXIyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCeVZhbHVlKGFyOiBhbnlbXSwgdmFsdWU6IE9iamVjdCkge1xyXG4gICAgaWYgKCFhcikgcmV0dXJuO1xyXG4gICAgZm9yICh2YXIgaSA9IGFyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYgKGFyW2ldID09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGFyLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJ5UHJvcGVydHkoYXI6IGFueVtdLCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWFyKSByZXR1cm47XHJcbiAgICBmb3IgKHZhciBpID0gYXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAoYXJbaV1bcHJvcGVydHldID09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGFyLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFycmF5RnJvbVN0cmluZyhzdHI6IHN0cmluZywgZGVsaW1pdGVyOiBzdHJpbmcsIGxvd2VyQ2FzZT86IGJvb2xlYW4pIHtcclxuICAgIC8vIGNoZWNrIGZvciBzdHJpbmcgdHlwZSBpbiB0aGUgaW5wdXQgYW5kIG5vdCBlbXB0eS5cclxuICAgIGlmICghc3RyIHx8IHR5cGVvZiBzdHIgIT0gJ3N0cmluZycpIHJldHVybiBbXTtcclxuXHJcbiAgICAvLyBsb3dlcmNhc2UgaWYgZGVtZW5kZWRcclxuICAgIGlmIChsb3dlckNhc2UpIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIGNsZWFuIHRoZSBzdHJpbmc6XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvWyBdL2csICcnKS5yZXBsYWNlKC8sLC9nLCAnLCcpO1xyXG5cclxuICAgIC8vIGlmIHN0cmluZyBlbXB0eVxyXG4gICAgaWYgKCFzdHIpIHJldHVybiBbXTtcclxuXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgZnJvbSBzdHJpbmdcclxuICAgIHJldHVybiBzdHIuc3BsaXQoZGVsaW1pdGVyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0KGFycmF5OiBhbnlbXSwgLi4uYXJnczogYW55W10pOiBhbnlbXSB7XHJcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIFtdO1xyXG4gICAgdmFyIHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgIHZhciBhcmdzTGVuZ3RoOiBudW1iZXIgPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW06IGFueSA9IGFycmF5W2ldO1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4T2YocmVzdWx0LCBpdGVtKSAhPSAtMSkgY29udGludWU7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBhcmdzTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIGFycjogYW55W10gPSBhcmd1bWVudHNbal07XHJcbiAgICAgICAgICAgIGlmIChhcnIgPT0gbnVsbCB8fCB0aGlzLmluZGV4T2YoYXJyLCBpdGVtKSA9PSAtMSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxhc3RJbmRleE9mPFQ+KGFycjogSUVudW1lcmFibGU8VD4sIHZhbDogVCwgZnJvbUluZGV4ID0gMCk6IG51bWJlciB7XHJcbiAgICBmb3IgKHZhciBpID0gYXJyLmxlbmd0aDsgLS1pID49IGZyb21JbmRleDsgKSB7XHJcbiAgICAgICAgaWYgKGFycltpXSA9PT0gdmFsKSByZXR1cm4gaTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gLTE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2g8VD4oYXJyOiBJRW51bWVyYWJsZTxUPiwgYWN0aW9uOiAoZWxlbWVudDogVCwgaW5kZXg/OiBudW1iZXIsIGFycj86IElFbnVtZXJhYmxlPFQ+KSA9PiB2b2lkKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkgYWN0aW9uKGFycltpXSwgaSwgYXJyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaFByb3A8VD4ob2JqOiBJTWFwPFQ+LCBhY3Rpb246IChwcm9wOiBULCBuYW1lOiBzdHJpbmcsIG9iajogSU1hcDxUPikgPT4gdm9pZCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoUHJvcDxUIGV4dGVuZHMgT2JqZWN0PihvYmo6IFQsIGFjdGlvbjogKHByb3A6IGFueSwgbmFtZTogc3RyaW5nLCBvYmo6IFQpID0+IHZvaWQpO1xyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaFByb3Aob2JqOiBPYmplY3QsIGFjdGlvbjogKHByb3A6IGFueSwgbmFtZTogc3RyaW5nLCBvYmo6IE9iamVjdCkgPT4gdm9pZCkge1xyXG4gICAgZm9yICh2YXIgbmFtZSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpKSBhY3Rpb24ob2JqW25hbWVdLCBuYW1lLCBvYmopO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzb21lPFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGNvbmRpdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gYm9vbGVhbikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKGFycltpXSwgaSwgYXJyKSkgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBldmVyeTxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBjb25kaXRpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IGJvb2xlYW4pIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgaWYgKCFjb25kaXRpb24oYXJyW2ldLCBpLCBhcnIpKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5UHJvcDxUPihvYmo6IElNYXA8VD4sIGNvbmRpdGlvbjogKHByb3A6IFQsIG5hbWU6IHN0cmluZywgb2JqOiBJTWFwPFQ+KSA9PiBib29sZWFuKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5UHJvcDxUPihvYmo6IFQsIGNvbmRpdGlvbjogKHByb3AsIG5hbWU6IHN0cmluZywgb2JqOiBUKSA9PiBib29sZWFuKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5UHJvcChvYmo6IE9iamVjdCwgY29uZGl0aW9uOiAocHJvcCwgbmFtZTogc3RyaW5nLCBvYmo6IE9iamVjdCkgPT4gYm9vbGVhbikge1xyXG4gICAgZm9yICh2YXIgbmFtZSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpICYmICFjb25kaXRpb24ob2JqW25hbWVdLCBuYW1lLCBvYmopKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxTLCBUPihhcnI6IElFbnVtZXJhYmxlPFM+LCBhY3Rpb246IChlbGVtZW50OiBTLCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8Uz4pID0+IFQpIHtcclxuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8VD4oKTtcclxuXHJcbiAgICBmb3JFYWNoKGFyciwgKGl0ZW0sIGlkeCwgYXJyKSA9PiByZXN1bHQucHVzaChhY3Rpb24oaXRlbSwgaWR4LCBhcnIpKSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RJbmRleDxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBjb25kaXRpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgdmFyIHJlc3VsdDogbnVtYmVyID0gLTE7XHJcbiAgICBzb21lKGFyciwgKGl0ZW0sIGluZGV4LCBhcnIpID0+IHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKGl0ZW0sIGluZGV4LCBhcnIpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0PFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGNvbmRpdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gYm9vbGVhbik6IFQge1xyXG4gICAgcmV0dXJuIGFycltmaXJzdEluZGV4KGFyciwgY29uZGl0aW9uKV07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbEVudW1WYWx1ZXM8VD4oZW51bVR5cGUpOiBUW10ge1xyXG4gICAgdmFyIHJlc3VsdHM6IFRbXSA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gZW51bVR5cGUpIGlmICh0eXBlb2YgZW51bVR5cGVbaV0gPT0gJ251bWJlcicpIHJlc3VsdHMucHVzaChlbnVtVHlwZVtpXSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXF1ZVZhbHVlczxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGFyci5sZW5ndGg7IGorKylcclxuICAgICAgICAgICAgaWYgKGFycltpXSA9PT0gYXJyW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcbiIsImltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xyXG5cclxuZGVjbGFyZSBmdW5jdGlvbiB1bmVzY2FwZShlc2NhcGVkU3RyOiBzdHJpbmcpOiBzdHJpbmc7XHJcbmRlY2xhcmUgZnVuY3Rpb24gZXNjYXBlKHVuZXNjYXBlZFN0cjogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRCYXNlRG9tYWluKCkge1xyXG4gICAgcmV0dXJuIGxvY2FsSW5mby5iYXNlRG9tYWluIHx8ICcnO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0RG9tYWluKHBhZ2VEb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbiwgYmFzZURvbWFpbiA9IF9nZXRCYXNlRG9tYWluKCkpOiBzdHJpbmcge1xyXG4gICAgbGV0IGNvb2tpZURvbWFpbjtcclxuICAgIGNvb2tpZURvbWFpbiA9XHJcbiAgICAgICAgYmFzZURvbWFpbi5sZW5ndGggPiAwICYmIHBhZ2VEb21haW4ubGVuZ3RoID49IGJhc2VEb21haW4ubGVuZ3RoICYmIHBhZ2VEb21haW4ubGFzdEluZGV4T2YoYmFzZURvbWFpbikgPT09IHBhZ2VEb21haW4ubGVuZ3RoIC0gYmFzZURvbWFpbi5sZW5ndGhcclxuICAgICAgICAgICAgPyBiYXNlRG9tYWluXHJcbiAgICAgICAgICAgIDogcGFnZURvbWFpbjtcclxuICAgIHJldHVybiBjb29raWVEb21haW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL15bIFxcdF0rfFsgXFx0XSskL2csICcnKTtcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJyg/Ol58OylcXFxccz8nICsgbmFtZSArICc9KC4qPykoPzo7fCQpJyk7XHJcbiAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gocmVnZXgpO1xyXG4gICAgcmV0dXJuIG1hdGNoICYmIHVuZXNjYXBlKG1hdGNoWzFdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc19pbj86IGFueSwgY29va2llRG9tYWluPzogc3RyaW5nLCBkb250VXNlUm9vdFBhdGg/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYWdlRG9tYWluID0gbG9jYWxJbmZvLnBhZ2VEb21haW47XHJcbiAgICBpZiAoY29va2llRG9tYWluID09IG51bGwpIHtcclxuICAgICAgICBjb29raWVEb21haW4gPSBnZXREZWZhdWx0RG9tYWluKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgZXhwaXJlTXM6IG51bWJlcjtcclxuICAgIGlmIChleHBpcmVzX2luID09IG51bGwgfHwgZXhwaXJlc19pbiA9PT0gJycgfHwgaXNOYU4oZXhwaXJlc19pbikpIHtcclxuICAgICAgICBleHBpcmVNcyA9IDEwMDAgKiBnZXRJbmZpbml0ZUV4cGlyYXRpb25UaW1lSW5TZWNvbmRzKCk7XHJcbiAgICB9IGVsc2UgaWYgKGV4cGlyZXNfaW4gPT0gMCkge1xyXG4gICAgICAgIC8vIDAgbWVhbnMgU2Vzc2lvblxyXG4gICAgICAgIGV4cGlyZU1zID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQW55IG90aGVyIHZhbHVlIGlzIG51bWJlciBvZiBzZWNvbmRzIChBIG5lZ2F0aXZlIHZhbHVlIHdvdWxkIG1lYW4gZXhwaXJlIG5vdyEpXHJcbiAgICAgICAgZXhwaXJlTXMgPSBleHBpcmVzX2luICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZXhkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGV4ZGF0ZS5zZXRUaW1lKGV4ZGF0ZS5nZXRUaW1lKCkgKyBleHBpcmVNcyk7XHJcblxyXG4gICAgdmFyIGNvb2tpZVN0cmluZyA9XHJcbiAgICAgICAgbmFtZSArXHJcbiAgICAgICAgJz0nICtcclxuICAgICAgICBlc2NhcGUodmFsdWUpICtcclxuICAgICAgICAoZG9udFVzZVJvb3RQYXRoID8gJycgOiAnOyBwYXRoPS8nKSArXHJcbiAgICAgICAgKGV4cGlyZU1zID09IG51bGwgPyAnJyA6ICc7IGV4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKSArXHJcbiAgICAgICAgKGNvb2tpZURvbWFpbiAmJiBjb29raWVEb21haW4gIT0gJycgJiYgY29va2llRG9tYWluLmluZGV4T2YoJy4nKSAhPSAtMSA/ICc7IGRvbWFpbj0nICsgY29va2llRG9tYWluIDogJycpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xyXG5cclxuICAgIC8vIFNvbWUgYnJvd3NlcnMgbGlrZSBJRTggZG9uJ3QgbGlrZSBzb21lIGRvbWFpbnMgKGUuZy4gZG9tYWlucyBvZiB0aGUgZm9ybSB4eC55eSlcclxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE4OTYzOC9pbnRlcm5ldC1leHBsb3Jlci14eC15eS13ZWJzaXRlLWlzc3VlXHJcbiAgICBpZiAoKCFleHBpcmVNcyB8fCBleHBpcmVNcyA+IDApICYmICFnZXQobmFtZSkpIHtcclxuICAgICAgICBjb29raWVTdHJpbmcgPVxyXG4gICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgJz0nICtcclxuICAgICAgICAgICAgZXNjYXBlKHZhbHVlKSArXHJcbiAgICAgICAgICAgIChkb250VXNlUm9vdFBhdGggPyAnJyA6ICc7IHBhdGg9LycpICtcclxuICAgICAgICAgICAgKGV4cGlyZU1zID09IG51bGwgPyAnJyA6ICc7IGV4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKSArXHJcbiAgICAgICAgICAgIChwYWdlRG9tYWluICYmIHBhZ2VEb21haW4gIT0gJycgJiYgcGFnZURvbWFpbi5pbmRleE9mKCcuJykgIT0gLTEgPyAnOyBkb21haW49JyArIHBhZ2VEb21haW4gOiAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB2YXIgcGFnZURvbWFpbiA9IGxvY2FsSW5mby5wYWdlRG9tYWluO1xyXG4gICAgdmFyIGJhc2VEb21haW4gPSBfZ2V0QmFzZURvbWFpbigpO1xyXG5cclxuICAgIGlmIChiYXNlRG9tYWluLmxlbmd0aCA+IDAgJiYgcGFnZURvbWFpbi5sZW5ndGggPj0gYmFzZURvbWFpbi5sZW5ndGggJiYgcGFnZURvbWFpbi5sYXN0SW5kZXhPZihiYXNlRG9tYWluKSA9PT0gcGFnZURvbWFpbi5sZW5ndGggLSBiYXNlRG9tYWluLmxlbmd0aCkge1xyXG4gICAgICAgIHNldChuYW1lLCAnJywgLTEsIGJhc2VEb21haW4pOyAvLyByZW1vdmUgYWxzbyBmcm9tIHRoZSBzdWJEb21haW4uXHJcbiAgICAgICAgc2V0KG5hbWUsICcnLCAtMSwgYmFzZURvbWFpbiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBzZXQobmFtZSwgJycsIC0xLCBsb2NhbEluZm8ucGFnZURvbWFpbik7XHJcbiAgICBzZXQobmFtZSwgJycsIC0xLCBsb2NhbEluZm8ucGFnZURvbWFpbiwgdHJ1ZSk7XHJcbiAgICBzZXQobmFtZSwgJycsIC0xLCAnJyk7XHJcbiAgICBzZXQobmFtZSwgJycsIC0xLCAnJywgdHJ1ZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluZmluaXRlRXhwaXJhdGlvblRpbWVJblNlY29uZHMoKSB7XHJcbiAgICAvLyBTZXQgZXhwaXJhdGlvbiB0aW1lIHRvIDEgeWVhcnNcclxuICAgIHJldHVybiA2MCAqIDYwICogMjQgKiAzNjU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNhblNhdmVDb29raWUoZG9jID0gZG9jdW1lbnQpIHtcclxuICAgIHZhciBkID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAxMDAwKTsgLy8gMSBzZWNvbmQgZXhwaXJhdGlvbi5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRvYy5jb29raWUgPSAnZ2lnM3BjdGVzdD10cnVlO2V4cGlyZXM9JyArIGRbJ3RvR01UU3RyaW5nJ10oKTtcclxuICAgICAgICByZXR1cm4gZG9jLmNvb2tpZS5pbmRleE9mKCdnaWczcGN0ZXN0JykgIT09IC0xO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlPUyAxMCB3ZWJ2aWV3IHRocm93cyBpbiBzb21lIHNjZW5hcmlvc1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBVcmkgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVXJpJztcclxuaW1wb3J0ICogYXMgc3RyaW5nVXRpbHNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMnO1xyXG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuXHJcbmV4cG9ydCBkZWNsYXJlIHZhciBnZXRBcGlEb21haW46IChuYW1lc3BhY2U/OiBzdHJpbmcpID0+IHN0cmluZztcclxuY29uc3QgZ2lneWFEb21haW5OYW1lc3BhY2VzID0gWydzb2NpYWxpemUnLCAnYWNjb3VudHMnLCAnZmlkbScsICdnbScsICdjb21tZW50cycsICdnY3MnLCAnaWRzJywgJ2RzJywgJ2dzY291bnRlcnMnXTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFwaURvbWFpbkZhY3RvcnkoYXBpRG9tYWluID0gcmVzb2x2ZUFwaURvbWFpbigpLCBkZWZhdWx0QXBpRG9tYWluID0gZ2lneWEuZGVmYXVsdEFwaURvbWFpbik6IChuYW1lc3BhY2U/OiBzdHJpbmcpID0+IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaG91bGRBZGROYW1lc3BhY2UgPSBVcmkucGFyc2UoYXBpRG9tYWluKS5pc0luKFVyaS5wYXJzZShkZWZhdWx0QXBpRG9tYWluKSk7XHJcblxyXG4gICAgcmV0dXJuIChuYW1lc3BhY2U/OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIHNob3VsZEFkZE5hbWVzcGFjZSkge1xyXG4gICAgICAgICAgICBsZXQgc3ViRG9tYWluID0gbmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XHJcbiAgICAgICAgICAgIGlmIChnaWd5YURvbWFpbk5hbWVzcGFjZXMuaW5kZXhPZihzdWJEb21haW4pID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYHRyeWluZyB0byBzZW5kIHJlcXVlc3QgdG8gYW4gaW52YWxpZCBkb21haW5gKTtcclxuICAgICAgICAgICAgICAgIHN1YkRvbWFpbiA9IGdpZ3lhRG9tYWluTmFtZXNwYWNlc1swXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGAke3N1YkRvbWFpbn0uJHthcGlEb21haW59YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYXBpRG9tYWluO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdpZ3lhRG9tYWluKG5hbWVzcGFjZT86IHN0cmluZywgZGF0YUNlbnRlciA9IGdpZ3lhLmRhdGFDZW50ZXIsIGRlZmF1bHREb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKSB7XHJcbiAgICBjb25zdCBkb21haW4gPSBgJHtkYXRhQ2VudGVyfS4ke2RlZmF1bHREb21haW59YDtcclxuXHJcbiAgICBpZiAobmFtZXNwYWNlKSByZXR1cm4gYCR7bmFtZXNwYWNlfS4ke2RvbWFpbn1gO1xyXG4gICAgZWxzZSByZXR1cm4gZG9tYWluO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlRG9tYWluKFxyXG4gICAgYmFzZURvbWFpbnM6IHN0cmluZ1tdfHN0cmluZyA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5iYXNlRG9tYWlucyxcclxuICAgIGN1cnJlbnREb21haW4gPSBsb2NhdGlvbi5ob3N0bmFtZSxcclxuICAgIGRlZmF1bHREb21haW5zID0gWydnaWd5YS5jb20nLCAnZ2lneWEtYXBpLmNuJywgZ2lneWEuZGVmYXVsdEFwaURvbWFpbl0sXHJcbik6IHN0cmluZyB7XHJcbiAgICAvLyAjNDk3ODYgLSBTdXBwb3J0IHdlYnZpZXcgd2l0aG91dCBob3N0bmFtZS5cclxuICAgIGlmICghY3VycmVudERvbWFpbikge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGJhc2VEb21haW5zID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgYmFzZURvbWFpbnMgPSBiYXNlRG9tYWlucy5zcGxpdCgnLCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBvcmlnaW5VUkkgPSBVcmkucGFyc2UoY3VycmVudERvbWFpbik7XHJcblxyXG4gICAgaWYgKGRlZmF1bHREb21haW5zKSB7XHJcbiAgICAgICAgYmFzZURvbWFpbnMgPSBiYXNlRG9tYWlucy5jb25jYXQoZGVmYXVsdERvbWFpbnMpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCByYXdEb21haW4gb2YgYmFzZURvbWFpbnMpIHtcclxuICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHRha2UgY2FyZSBvZiB3aWxkY2FyZHMgaW4gdGhlIG1pZGRsZSBvZiBzdHJpbmcuXHJcbiAgICAgICAgY29uc3QgYmFzZURvbWFpbiA9IHN0cmluZ1V0aWxzVXRpbHMucmVwbGFjZUFsbChyYXdEb21haW4sICcqJywgJycpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VVcmkgPSBVcmkucGFyc2UoYmFzZURvbWFpbik7XHJcbiAgICAgICAgaWYgKGJhc2VVcmkgJiYgb3JpZ2luVVJJLmlzSW4oYmFzZVVyaSkpIHtcclxuICAgICAgICAgICAgaWYgKGJhc2VVcmkuaXNGb3JTdWJEb21haW5zKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5VUkkuZG9tYWluO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2VVcmkuZG9tYWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZhbGxiYWNrIHRvIHRoZSBwYXJlbnQncyB3aW5kb3cgZG9tYWluIChmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSkuXHJcbiAgICByZXR1cm4gb3JpZ2luVVJJLmRvbWFpbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUFwaURvbWFpbihcclxuICAgIGN1c3RvbUFwaURvbWFpblByZWZpeCA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncyAmJiBnaWd5YS5wYXJ0bmVyU2V0dGluZ3MuY3VzdG9tQVBJRG9tYWluUHJlZml4LFxyXG4gICAgYmFzZURvbWFpbiA9IGxvY2FsSW5mby5iYXNlRG9tYWluLFxyXG4gICAgZGF0YUNlbnRlciA9IGdpZ3lhLmRhdGFDZW50ZXIsXHJcbiAgICBkZWZhdWx0QXBpRG9tYWluID0gZ2lneWEuZGVmYXVsdEFwaURvbWFpbixcclxuKSB7XHJcbiAgICBpZiAoY3VzdG9tQXBpRG9tYWluUHJlZml4ICYmIGJhc2VEb21haW4gJiYgYmFzZURvbWFpbiAhPT0gZGVmYXVsdEFwaURvbWFpbikge1xyXG4gICAgICAgIHJldHVybiBgJHtjdXN0b21BcGlEb21haW5QcmVmaXh9LiR7YmFzZURvbWFpbn1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZ2V0R2lneWFEb21haW4odW5kZWZpbmVkLCBkYXRhQ2VudGVyLCBkZWZhdWx0QXBpRG9tYWluKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBET01VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvRE9NJztcclxuaW1wb3J0IHsgZ2V0Q2RuUmVzb3VyY2UgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvY2RuJztcclxuaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsbEZ1bmN0aW9uKG5hbWU6IHN0cmluZywgYXJQYXJhbXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICB2YXIgZm4gPSBldmFsKG5hbWUpO1xyXG4gICAgdmFyIGFyUGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICBhclBhcnRzLnNwbGljZShhclBhcnRzLmxlbmd0aCAtIDEsIDEpO1xyXG4gICAgdmFyIHNjb3BlID0gZXZhbChhclBhcnRzLmpvaW4oJy4nKSk7XHJcbiAgICBmbi5hcHBseShzY29wZSwgYXJQYXJhbXMpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VPblBhZ2VMb2FkKGZ1bmM6IEZ1bmN0aW9uLCBjb21wbGV0ZU9ubHk/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgKCFkb2N1bWVudC5yZWFkeVN0YXRlICYmIGRvY3VtZW50LmJvZHkpIHx8XHJcbiAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fFxyXG4gICAgICAgICghY29tcGxldGVPbmx5ICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgJiYgZG9jdW1lbnQuYm9keSlcclxuICAgICkge1xyXG4gICAgICAgIGZ1bmMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGZuT25Mb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZnVuYygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZm5PbkxvYWQsIDIwMDAwKTsgLy8gZmFsbGJhY2sgLSBzb21ldGltZXMgcmVhZHlzdGF0ZSBzdGF5cyBzdHVjayBvbiBpbnRlcmFjdGl2ZVxyXG5cclxuICAgICAgICBET01VdGlscy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBmbk9uTG9hZCk7XHJcbiAgICAgICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbk9uTG9hZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFsaWFzKHB1YmxpY05hbWU6IHN0cmluZywgZm5jOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgYXJOYW1lU2VnbWVudHMgPSBwdWJsaWNOYW1lLnNwbGl0KCcuJyk7XHJcbiAgICBsZXQgb0N1cnJlbnRTZWdtZW50ID0gd2luZG93O1xyXG4gICAgZm9yIChsZXQgaVNlZ21lbnQgPSAwOyBpU2VnbWVudCA8IGFyTmFtZVNlZ21lbnRzLmxlbmd0aCAtIDE7IGlTZWdtZW50KyspIHtcclxuICAgICAgICBjb25zdCBzU2VnbWVudCA9IGFyTmFtZVNlZ21lbnRzW2lTZWdtZW50XTtcclxuICAgICAgICBpZiAoIW9DdXJyZW50U2VnbWVudFtzU2VnbWVudF0pIHtcclxuICAgICAgICAgICAgb0N1cnJlbnRTZWdtZW50W3NTZWdtZW50XSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvQ3VycmVudFNlZ21lbnQgPSBvQ3VycmVudFNlZ21lbnRbc1NlZ21lbnRdO1xyXG4gICAgfVxyXG4gICAgb0N1cnJlbnRTZWdtZW50W2FyTmFtZVNlZ21lbnRzW2FyTmFtZVNlZ21lbnRzLmxlbmd0aCAtIDFdXSA9IGZuYztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZm46ICgpID0+IHZvaWQsIGRlbGF5TWlsbGlzZWNvbmRzOiBudW1iZXIpOiAoKSA9PiB2b2lkIHtcclxuICAgIGxldCB0aW1lcjogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aW1lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBmbigpO1xyXG4gICAgICAgIH0sIGRlbGF5TWlsbGlzZWNvbmRzKSBhcyBhbnk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRTcmNUb0lGcmFtZUlmTmVlZGVkKGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQsIHNyYzogc3RyaW5nID0gZ2V0Q2RuUmVzb3VyY2UoJy8nKSkge1xyXG4gICAgaWYgKGxvY2FsSW5mby5pc0lPU1dlYlZpZXcgfHwgKGxvY2FsSW5mby5pc0lPUyAmJiBsb2NhbEluZm8uaXNXZUNoYXQpKSB7XHJcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBKU09OVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL0pTT04nO1xyXG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuaW1wb3J0ICogYXMgc2NyaXB0VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3NjcmlwdCc7XHJcbmltcG9ydCAqIGFzIGNvb2tpZVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9jb29raWUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdBYnN0cmFjdEFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRJdGVtKGtleTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyLCBkb21haW4/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCByZW1vdmVJdGVtKGtleTogc3RyaW5nKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBvYmplY3QgdG8gc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldE9iamVjdChrZXk6IHN0cmluZywgbzogT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKGtleSwgSlNPTlV0aWxzLnNlcmlhbGl6ZShvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgb2JqZWN0IGZyb20gbG9jYWwgc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE9iamVjdChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogT2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gSlNPTlV0aWxzLmRlc2VyaWFsaXplKHRoaXMuZ2V0SXRlbShrZXkpLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgcGVyc2lzdGVudCBzdG9yYWdlLiBSZXR1cm5zIGZhbHNlIHdoZW4gZGF0YSBpcyBub3QgcGVyc2lzdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNQZXJzaXN0ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFzeW5jTG9jYWxTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgaXNMb2FkZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzUmVhZHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNMb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIHdoZW4gdGhlcmUgaXMgaW5pdGlhbGl6YXRpb24gdGltZSBvbiB0aGUgbG9jYWwgc3RvcmFnZSBhZGFwdGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2FpdEZvclNlcnZpY2UoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy53YWl0Rm9yU2VydmljZShjYWxsYmFjayksIDUwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuYWJzdHJhY3QgY2xhc3MgU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgcHJvdGVjdGVkIHN0b3JhZ2U6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7fVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBMb2NhbFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0xvY2FsU3RvcmFnZUFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5mby5zdXBwb3J0c0xvY2FsU3RvcmFnZTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdTZXNzaW9uU3RvcmFnZUFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5mby5zdXBwb3J0c1Nlc3Npb25TdG9yYWdlO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEZpcmVmb3hTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhbEluZm8uaXNGRiAmJiB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdGaXJlZm94U3RvcmFnZUFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2xvYmFsU3RvcmFnZSddW2xvY2F0aW9uLmhvc3RuYW1lXVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBkZWxldGUgd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV07XHJcbiAgICB9XHJcbn1cclxuZGVjbGFyZSBjbGFzcyBTd2ZTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiBhbnkpO1xyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IHN0cmluZztcclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcHVibGljIGNsZWFyKGtleTogc3RyaW5nKTogdm9pZDtcclxufVxyXG5jbGFzcyBGbGFzaEFzeW5jU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdEFzeW5jTG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIGN1cnJlbnQgc2NlbmFyaW8gd2hlcmUgdXNpbmcgRmxhc2ggU3RvcmFnZSBpcyBoZWxwZnVsIG91dHNpZGUgb2YgSUUuXHJcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5mby5zdXBwb3J0c0ZsYXNoICYmIChsb2NhbEluZm8uaXNJRSB8fCBsb2NhbEluZm8uaXNFZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3dmU3RvcmU6IFN3ZlN0b3JlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vIExvYWQgU1dGIHN0b3JlIGxpYnJhcnkuXHJcbiAgICAgICAgdGhpcy5sb2FkU3dmU3RvcmUoaXNTdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAnRmxhc2hBc3luY1N0b3JhZ2VBZGFwdGVyJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpcnN0LCBsb2FkIHRoZSBKYXZhU2NyaXB0IHN3ZnN0b3JlIFNESy5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRTd2ZTdG9yZShjYWxsYmFjazogKGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIC8vIExvYWQgU3dmU3RvcmUgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICAgIGlmICh3aW5kb3dbJ1N3ZlN0b3JlJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplU3dmU3RvcmUoKCkgPT4gdGhpcy5sb2FkU3dmU3RvcmUoY2FsbGJhY2spKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2NyaXB0VXRpbHMubG9hZChcclxuICAgICAgICAgICAgJ2h0dHBzOi8vY2Rucy5naWd5YS5jb20vZ3MvanMvc3dmc3RvcmUubWluLmpzJyxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3IgaGFuZGxlci5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gbG9hZCBHaWd5YSBTd2ZTdG9yZS4nKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU3VjY2VzcyBoYW5kbGVyLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplU3dmU3RvcmUoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLCAvLyBMb2FkIG9ubHkgb25jZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmlpdGFsaXplIHRoZSBTd2ZTdG9yZSBjbGFzcy5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpemVTd2ZTdG9yZShjYWxsYmFjazogKGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3dmU3RvcmUgPSBuZXcgU3dmU3RvcmUoe1xyXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdnaWdTU08nLFxyXG4gICAgICAgICAgICBzd2ZfdXJsOiAnaHR0cHM6Ly9jZG5zLmdpZ3lhLmNvbS9ncy9zd2Yvc3dmc3RvcmUuc3dmJyxcclxuICAgICAgICAgICAgb25yZWFkeTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25lcnJvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGluaXRpYWxpemUgR2lneWEgU3dmU3RvcmUuJyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN3ZlN0b3JlLmdldChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN3ZlN0b3JlLnNldChrZXksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3dmU3RvcmUuY2xlYXIoa2V5KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ29va2llU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY29va2llVXRpbHMuY2FuU2F2ZUNvb2tpZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0Nvb2tpZVN0b3JhZ2VBZGFwdGVyJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVV0aWxzLmdldChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIsIGRvbWFpbj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvb2tpZVV0aWxzLnNldChrZXksIHZhbHVlLCBleHBpcmVzSW4sIGRvbWFpbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb29raWVVdGlscy5yZW1vdmUoa2V5KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbWVtb3J5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tZW1vcnkgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdNZW1vcnlTdG9yYWdlQWRhcHRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lbW9yeVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lbW9yeVtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5tZW1vcnlba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIHBlcnNpc3RlbnQgc3RvcmFnZS4gUmV0dXJucyBmYWxzZSB3aGVuIGRhdGEgaXMgbm90IHBlcnNpc3RlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzUGVyc2lzdGVudCgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGFkYXB0ZXJzOiBBcnJheTxhbnk+ID0gW1xyXG4gICAgTG9jYWxTdG9yYWdlQWRhcHRlcixcclxuICAgIFNlc3Npb25TdG9yYWdlQWRhcHRlcixcclxuICAgIEZpcmVmb3hTdG9yYWdlQWRhcHRlcixcclxuICAgIEZsYXNoQXN5bmNTdG9yYWdlQWRhcHRlcixcclxuICAgIENvb2tpZVN0b3JhZ2VBZGFwdGVyLFxyXG4gICAgTWVtb3J5U3RvcmFnZUFkYXB0ZXIsXHJcbl07XHJcbmV4cG9ydCBjb25zdCBpbnN0YW5jZXM6IHsgW2tleTogc3RyaW5nXTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIH0gPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBZGFwdGVyKGFkYXB0ZXI6IHsgbmFtZT86IHN0cmluZzsgZ2V0TmFtZTogKCkgPT4gc3RyaW5nIH0gJiAobmV3ICgpID0+IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcikpIHtcclxuICAgIGNvbnN0IGFkYXB0ZXJOYW1lID0gYWRhcHRlci5nZXROYW1lKCkgfHwgYWRhcHRlci5uYW1lO1xyXG4gICAgaWYgKCFpbnN0YW5jZXNbYWRhcHRlck5hbWVdKSB7XHJcbiAgICAgICAgaW5zdGFuY2VzW2FkYXB0ZXJOYW1lXSA9IG5ldyBhZGFwdGVyKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5zdGFuY2VzW2FkYXB0ZXJOYW1lXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoKTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xyXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoY2FsbGJhY2s6IChzdG9yYWdlOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIpID0+IHZvaWQpOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XHJcbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yU2VydmljZShjYWxsYmFjaz86IChzdG9yYWdlOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIpID0+IHZvaWQpOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgLy8gU2VsZWN0IGNvbXBhdGlibGUgYWRhcHRlci5cclxuICAgIGxldCBzdG9yYWdlOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XHJcbiAgICBmb3IgKGNvbnN0IGFkYXB0ZXIgb2YgYWRhcHRlcnMpIHtcclxuICAgICAgICBpZiAoYWRhcHRlci5pc0F2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgICAgIC8vIERvbid0IHNlbGVjdCBhZGFwdGVyIGlmIGl0J3MgYXN5bmMgYW5kIGEgY2FsbGJhY2sgd2Fzbid0IHByb3ZpZGVkLlxyXG4gICAgICAgICAgICBpZiAoYWRhcHRlci5wcm90b3R5cGUgaW5zdGFuY2VvZiBBYnN0cmFjdEFzeW5jTG9jYWxTdG9yYWdlQWRhcHRlciAmJiAhY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdG9yYWdlID0gaW5pdGlhbGl6ZUFkYXB0ZXIoYWRhcHRlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxsYmFjayB0byBtZW1vcnktYmFzZWQgbm9uLXBlcnNpc3RlbnQgc3RvcmFnZS5cclxuICAgIGlmICghc3RvcmFnZSkge1xyXG4gICAgICAgIHN0b3JhZ2UgPSBpbml0aWFsaXplQWRhcHRlcihNZW1vcnlTdG9yYWdlQWRhcHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJpZ2dlciBjYWxsYmFjayB3aGVuIGFkYXB0ZXIgZmluaXNoZXMgbG9hZGluZyAob3IgaW5zdGFudGx5LCBpZiBub3QgcmVxdWlyZWQgdG8gd2FpdCkuXHJcbiAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoc3RvcmFnZSBpbnN0YW5jZW9mIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyKSB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2Uud2FpdEZvclNlcnZpY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc3RvcmFnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHN0b3JhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdG9yYWdlO1xyXG59XHJcbmNvbnN0IGFkYXB0ZXIgPSB3YWl0Rm9yU2VydmljZSgpO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYWRhcHRlci5nZXRJdGVtKGtleSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFkYXB0ZXIuc2V0SXRlbShrZXksIHZhbHVlLCBleHBpcmVzSW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICByZXR1cm4gYWRhcHRlci5yZW1vdmVJdGVtKGtleSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9iamVjdChrZXk6IHN0cmluZywgbzogT2JqZWN0KTogdm9pZCB7XHJcbiAgICByZXR1cm4gYWRhcHRlci5zZXRPYmplY3Qoa2V5LCBvKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBPYmplY3Qge1xyXG4gICAgcmV0dXJuIGFkYXB0ZXIuZ2V0T2JqZWN0KGtleSwgZGVmYXVsdFZhbHVlKTtcclxufVxyXG4iLCJpbXBvcnQgeyBVcmkgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVXJpJztcclxuaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcbmltcG9ydCAqIGFzIGFycmF5VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2FycmF5JztcclxuaW1wb3J0ICogYXMgZnVuY3Rpb25zVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIERPTVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9ET00nO1xyXG5pbXBvcnQgeyBnZXRDZG5SZXNvdXJjZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9jZG4nO1xyXG5cclxuaW50ZXJmYWNlIElTY3JpcHRQZW5kaW5nIHtcclxuICAgIGxvYWRlZDogYm9vbGVhbjtcclxuICAgIG9uTG9hZDogRnVuY3Rpb25bXTtcclxuICAgIG9uRXJyb3I6IEZ1bmN0aW9uW107XHJcbn1cclxudmFyIHBlbmRpbmc6IHsgW3NyYzogc3RyaW5nXTogSVNjcmlwdFBlbmRpbmcgfSA9IHt9O1xyXG5mdW5jdGlvbiBhZGRTZGtWZXJzaW9uKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCBzY3JpcHRVcmwgPSBVcmkucGFyc2UodXJsKTtcclxuICAgIHNjcmlwdFVybC5hZGRUb1NlYXJjaCh7IHZlcnNpb246IGdpZ3lhLmJ1aWxkLnZlcnNpb24gfSk7XHJcbiAgICByZXR1cm4gc2NyaXB0VXJsLnRvU3RyaW5nKCk7XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0U3JjVXJsKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIHJlbW92ZSBjZG4gZG9tYWluIG51bWJlclxyXG4gICAgcmV0dXJuIHNyYy5yZXBsYWNlKC9eaHR0cChzPyk6XFwvXFwvY2RuKHM/KVswLTldKi5naWd5YS5jb21cXC8vLCAnaHR0cCQxOi8vY2RuJDIuZ2lneWEuY29tLycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRlZChzcmM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgdmFyIHBlbmRpbmdTcmMgPSBmb3JtYXRTcmNVcmwoc3JjKTtcclxuXHJcbiAgICByZXR1cm4gQm9vbGVhbihwZW5kaW5nW3BlbmRpbmdTcmNdICYmIHBlbmRpbmdbcGVuZGluZ1NyY10ubG9hZGVkKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZChcclxuICAgIHNyYzogc3RyaW5nLFxyXG4gICAgZm5PbkVycm9yPzogKCkgPT4gdm9pZCxcclxuICAgIGZuT25Mb2FkPzogKCkgPT4gdm9pZCxcclxuICAgIGxvYWRPbmNlPzogYm9vbGVhbixcclxuICAgIHJlbW92ZUFmdGVyOiBudW1iZXIgfCBib29sZWFuID0gNTAwMCxcclxuICAgIHRyZWF0VG9nZXRoZXI/OiBzdHJpbmdbXSxcclxuKTogdm9pZCB7XHJcbiAgICB2YXIgb1NjcmlwdDogSVNjcmlwdFBlbmRpbmc7XHJcblxyXG4gICAgaWYgKHNyYy5pbmRleE9mKCcvLycpID09PSAwKSB7XHJcbiAgICAgICAgc3JjID0gbG9jYWxJbmZvLnByb3RvY29sICsgJzonICsgc3JjO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2FkT25jZSkge1xyXG4gICAgICAgIHZhciBwZW5kaW5nU3JjID0gZm9ybWF0U3JjVXJsKHNyYyk7XHJcblxyXG4gICAgICAgIGlmIChwZW5kaW5nW3BlbmRpbmdTcmNdKSB7XHJcbiAgICAgICAgICAgIGlmIChwZW5kaW5nW3BlbmRpbmdTcmNdLmxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmRlYnVnKGBzY3JpcHQgd2FzIGFscmVhZHkgbG9hZGVkOmAsIHsgc3JjIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZuT25Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm5PbkxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmdbcGVuZGluZ1NyY10ub25Mb2FkLnB1c2goZm5PbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ1twZW5kaW5nU3JjXS5vbkVycm9yLnB1c2goZm5PbkVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvU2NyaXB0ID0gcGVuZGluZ1twZW5kaW5nU3JjXSA9IHsgbG9hZGVkOiBmYWxzZSwgb25Mb2FkOiBbZm5PbkxvYWRdLCBvbkVycm9yOiBbZm5PbkVycm9yXSB9O1xyXG5cclxuICAgICAgICBpZiAodHJlYXRUb2dldGhlciAmJiB0cmVhdFRvZ2V0aGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXJyYXlVdGlscy5mb3JFYWNoKHRyZWF0VG9nZXRoZXIsIHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nW3VybF0gPSBvU2NyaXB0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG11bHRpcGxlIGxvYWRzXHJcbiAgICAgICAgb1NjcmlwdCA9IHsgbG9hZGVkOiBmYWxzZSwgb25Mb2FkOiBbZm5PbkxvYWRdLCBvbkVycm9yOiBbZm5PbkVycm9yXSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzY3JpcHRMb2FkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICAgIHNjcmlwdC5jaGFyc2V0ID0gJ1VURi04JztcclxuXHJcbiAgICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZm5PblNjcmlwdExvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9TY3JpcHQub25Mb2FkICYmIG9TY3JpcHQub25Mb2FkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb1NjcmlwdC5vbkxvYWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvU2NyaXB0Lm9uTG9hZFtpXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb1NjcmlwdC5vbkxvYWRbaV0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvU2NyaXB0LmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvU2NyaXB0Lm9uRXJyb3IgPSBvU2NyaXB0Lm9uTG9hZCA9IG51bGw7IC8vIHJlbW92ZSBtZW1vcnkgbGVha1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVBZnRlciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFmdGVyID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVBZnRlciAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcmlwdC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVtb3ZlQWZ0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzY3JpcHQub25sb2FkID0gZm5PblNjcmlwdExvYWQ7XHJcbiAgICAgICAgc2NyaXB0WydvbnJlYWR5c3RhdGVjaGFuZ2UnXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSAnbG9hZGVkJykge1xyXG4gICAgICAgICAgICAgICAgZm5PblNjcmlwdExvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb1NjcmlwdC5vbkVycm9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9TY3JpcHQub25FcnJvcltpXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9TY3JpcHQub25FcnJvcltpXSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwZW5kaW5nW3NyY107XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpO1xyXG4gICAgICAgIGlmIChoZWFkICYmIGhlYWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBoZWFkWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmblNldFNjcmlwdFNyYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2ViU2RrUmVzb3VyY2VzRG9tYWluID0gbmV3IFJlZ0V4cChgXmh0dHBzPzpcXC9cXC9jZG5zPy4qJHtnaWd5YS5kZWZhdWx0QXBpRG9tYWlufWApO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JpcHRTcmMgPSB3ZWJTZGtSZXNvdXJjZXNEb21haW4udGVzdChzcmMpID8gYWRkU2RrVmVyc2lvbihzcmMpIDogc3JjO1xyXG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gc2NyaXB0U3JjO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGxvY2FsSW5mby5pb3NWZXJzaW9uID49IDYpIHtcclxuICAgICAgICAgICAgLy8gaU9TIDYgYnJlYWtzIHNldFRpbWVvdXQgd2hlbiBhbmltYXRpb24gaXMgYWN0aXZlIChzd2l0Y2hpbmcgdGFicyBiYWNrIGZyb20gYSBsb2dpbiBzZXF1ZW5jZSlcclxuICAgICAgICAgICAgZm5TZXRTY3JpcHRTcmMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZuU2V0U2NyaXB0U3JjLCAxKTsgLy8gRG9pbmcgdGhpcyBhc3luYyBnaXZlcyBiZXR0ZXIgcGVyZm9ybWFuY2UgaW4gb2xkZXIgYnJvd3NlcnNcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbEluZm8uaXNJRSkge1xyXG4gICAgICAgIGZ1bmN0aW9uc1V0aWxzLmludm9rZU9uUGFnZUxvYWQoc2NyaXB0TG9hZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2NyaXB0TG9hZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGVudW0gUmVzb3VyY2VUeXBlcyB7XHJcbiAgICBzY3JpcHQsXHJcbiAgICBpbWFnZSxcclxuICAgIGlmcmFtZSxcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlclJlc291cmNlKHVybDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQsIHJlc291cmNlVHlwZSA9IFJlc291cmNlVHlwZXMuaW1hZ2UsIHJlbW92ZUFmdGVyOiBudW1iZXIgfCBib29sZWFuID0gNTAwMCkge1xyXG4gICAgc3dpdGNoIChyZXNvdXJjZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFJlc291cmNlVHlwZXMuc2NyaXB0OlxyXG4gICAgICAgICAgICBsb2FkKHVybCwgY2FsbGJhY2ssIGNhbGxiYWNrLCBmYWxzZSwgcmVtb3ZlQWZ0ZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJlc291cmNlVHlwZXMuaW1hZ2U6XHJcbiAgICAgICAgICAgIGxvYWRJbWFnZSh1cmwsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSZXNvdXJjZVR5cGVzLmlmcmFtZTpcclxuICAgICAgICAgICAgbG9hZElmcmFtZSh1cmwsIGNhbGxiYWNrLCByZW1vdmVBZnRlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgcmVzb3VyY2UgdHlwZScpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGxvYWRJbWFnZSh1cmw6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdmFyIGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBmbk9uTG9hZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gZm5PbkxvYWQ7XHJcblxyXG4gICAgaW1nLnNyYyA9IHVybDtcclxufVxyXG5mdW5jdGlvbiBsb2FkSWZyYW1lKHVybDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQsIHJlbW92ZUFmdGVyOiBudW1iZXIgfCBib29sZWFuID0gNTAwMCkge1xyXG4gICAgdmFyIGlmciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgaWZyLnN0eWxlLndpZHRoID0gJzMwcHgnO1xyXG4gICAgaWZyLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcclxuICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpZnIuc3R5bGUudG9wID0gJy0xMDAwcHgnO1xyXG4gICAgaWZyLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XHJcblxyXG4gICAgaWYgKHJlbW92ZUFmdGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWZ0ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmbk9uTG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgZWw7XHJcbiAgICAgICAgaWYgKGUgJiYgZS5zcmNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsID0gZS5zcmNFbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZSAmJiBlLnRhcmdldCkge1xyXG4gICAgICAgICAgICBlbCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZWwubG9hZGVkICYmIGVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgZWwubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgaWYgKHJlbW92ZUFmdGVyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWZ0ZXIgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcihpZnIsICdsb2FkJywgZm5PbkxvYWQpO1xyXG4gICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcihpZnIsICdlcnJvcicsIGZuT25Mb2FkKTtcclxuICAgIGlmci5vbmxvYWQgPSBlID0+IHtcclxuICAgICAgICBmbk9uTG9hZChlKTtcclxuICAgIH07XHJcbiAgICBpZnIub25lcnJvciA9IGZuT25Mb2FkO1xyXG5cclxuICAgIGlmci5zcmMgPSB1cmw7XHJcbiAgICBET01VdGlscy5hcHBlbmRUb0JvZHkoaWZyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTZXJ2aWNlKHNlcnZpY2VOYW1lOiBzdHJpbmcsIGZuT25FcnJvcj86ICgpID0+IHZvaWQsIGZuT25Mb2FkPzogKCkgPT4gdm9pZCkge1xyXG4gICAgdmFyIHVybCA9IGdldENkblJlc291cmNlKCkgKyAnL2pzL2dpZ3lhLnNlcnZpY2VzLicgKyBzZXJ2aWNlTmFtZSArICcuanMnO1xyXG4gICAgbG9hZChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmIGNvbnNvbGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGxvYWRpbmcgZ2lneWEgc2VydmljZSAnICsgc2VydmljZU5hbWUgKyAnIGZyb20gdXJsOiAnICsgdXJsKTtcclxuICAgICAgICAgICAgICAgIGlmIChmbk9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbk9uRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm5PbkxvYWQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRyaW0oczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzLnJlcGxhY2UoL15cXHMqKFxcUyooLipcXFMpPylcXHMqJC8sICckMScpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoczogc3RyaW5nLCAuLi5yZXN0OiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzW2kgKyAxXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHMgPSBzLnNwbGl0KCd7JyArIGkgKyAnfScpLmpvaW4oYXJndW1lbnRzW2kgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZHNXaXRoKHM6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzLmluZGV4T2Yoc3VmZml4LCBzLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwoc3RyOiBzdHJpbmcsIGZpbmQ6IHN0cmluZywgcmVwbGFjZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghZmluZCkgcmV0dXJuIHN0cjtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1hU2VwYXJhdGVkVmFsdWVzKHN0cjE6IHN0cmluZyA9ICcnLCBzdHIyOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBhcnIgPSBzdHIxLmNvbmNhdCgnLCcsIHN0cjIpLnNwbGl0KCcsJyk7XHJcbiAgICByZXR1cm4gZ2lneWEudXRpbHMuYXJyYXkuZ2V0VW5pcXVlVmFsdWVzKGFycikuZmlsdGVyKHggPT4geCkuam9pbignLCcpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbCgpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgICB2YXIgc2NyT2ZYID0gMCxcclxuICAgICAgICBzY3JPZlkgPSAwO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cucGFnZVlPZmZzZXQgPT0gJ251bWJlcicpIHtcclxuICAgICAgICBzY3JPZlkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgc2NyT2ZYID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5ICYmIChkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApKSB7XHJcbiAgICAgICAgc2NyT2ZZID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAgICAgc2NyT2ZYID0gZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKSB7XHJcbiAgICAgICAgc2NyT2ZZID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBzY3JPZlggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGxlZnQ6IHNjck9mWCwgdG9wOiBzY3JPZlkgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbFNpemUoKTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcclxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgdmFyIGggPSBkZS5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAoaCA9PSAwKSBoID0gZGIuY2xpZW50SGVpZ2h0O1xyXG4gICAgdmFyIHcgPSBkZS5jbGllbnRXaWR0aDtcclxuICAgIGlmICh3ID09IDApIHcgPSBkYi5jbGllbnRXaWR0aDtcclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKTogbnVtYmVyIHtcclxuICAgIHZhciBvcmllbnRhdGlvbiA9IHBhcnNlSW50KCh3aW5kb3dbJ29yaWVudGF0aW9uJ10gYXMgc3RyaW5nKSB8fCAnMCcpO1xyXG4gICAgaWYgKG9yaWVudGF0aW9uIDwgMCkgb3JpZW50YXRpb24gKz0gMzYwO1xyXG5cclxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5uZXJTaXplKCk6IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB7XHJcbiAgICB2YXIgaDtcclxuICAgIHZhciB3O1xyXG5cclxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoID0gZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGlmIChoID09IDApIGggPSBkYi5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdyA9IGRlLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmICh3ID09IDApIHcgPSBkYi5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxlQ2VudGVyKCk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogc2Nyb2xsLnRvcCArIE1hdGguZmxvb3Ioc2l6ZS5oIC8gMiksXHJcbiAgICAgICAgbGVmdDogc2Nyb2xsLmxlZnQgKyBNYXRoLmZsb29yKHNpemUudyAvIDIpLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWN0SG9yaXpvbnRhbGx5VmlzaWJsZShyZWN0OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH0pIHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4gcmVjdC5sZWZ0ID49IHNjcm9sbC5sZWZ0ICYmIHJlY3QucmlnaHQgPD0gc2Nyb2xsLmxlZnQgKyBzaXplLnc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVjdEZ1bGx5VmlzaWJsZShyZWN0OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH0pIHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gc2Nyb2xsLnRvcCAmJiByZWN0LmJvdHRvbSA8PSBzY3JvbGwudG9wICsgc2l6ZS5oICYmIHJlY3QubGVmdCA+PSBzY3JvbGwubGVmdCAmJiByZWN0LnJpZ2h0IDw9IHNjcm9sbC5sZWZ0ICsgc2l6ZS53O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5zY3JvbGxJbnRvVmlldykge1xyXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubGV0IHNlbGVjdGVkQ2RuSG9zdHNJbmRleCA9IDA7XHJcbmV4cG9ydCBjb25zdCBDRE5fSE9TVFMgPSB7XHJcbiAgICBodHRwOiBbJ2Nkbi5naWd5YS5jb20nLCAnY2RuMS5naWd5YS5jb20nLCAnY2RuMi5naWd5YS5jb20nLCAnY2RuMy5naWd5YS5jb20nXSxcclxuICAgIGh0dHBzOiBbJ2NkbnMuZ2lneWEuY29tJywgJ2NkbnMxLmdpZ3lhLmNvbScsICdjZG5zMi5naWd5YS5jb20nLCAnY2RuczMuZ2lneWEuY29tJ10sXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5SZXNvdXJjZShwYXRoPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIGdpZ3lhLnRoaXNTY3JpcHQgbWF5IG5vdCBleGlzdCBpZiBsb2FkZWQgZm9yIHNzb09yaWcuXHJcbiAgICBsZXQgYmFzZURvbWFpbiA9IGdpZ3lhLnRoaXNTY3JpcHQ/LmJhc2VEb21haW4gPz8gJyc7XHJcbiAgICBjb25zdCBwcm90b2NvbCA9IGdpZ3lhLnRoaXNTY3JpcHQ/LnByb3RvY29sID8/ICdodHRwcyc7XHJcblxyXG4gICAgLy8gSWYgbm8gYmFzZSBkb21haW4gb3IgaWYgYmFzZSBkb21haW4gZW5kcyB3aXRoIC5naWd5YS5jb20sIHVzZSBHaWd5YSBDRE4uXHJcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBiYXNlIGRvbWFpbi5cclxuICAgIGlmICghYmFzZURvbWFpbiB8fCAvY2Rucz9cXC5naWd5YVxcLmNvbSQvLnRlc3QoYmFzZURvbWFpbikpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnkgPSBDRE5fSE9TVFNbcHJvdG9jb2xdO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnkubGVuZ3RoIDw9IHNlbGVjdGVkQ2RuSG9zdHNJbmRleCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENkbkhvc3RzSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYXNlRG9tYWluID0gc2VsZWN0ZWRTY2hlbWFSZXBvc2l0b3J5W3NlbGVjdGVkQ2RuSG9zdHNJbmRleCsrXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgdGhlIHBhdGggc3RhcnRzIHdpdGggXCIvXCIuXHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICAgIGlmIChwYXRoLmluZGV4T2YoJy8nKSAhPT0gMCkge1xyXG4gICAgICAgICAgICBwYXRoID0gJy8nICsgcGF0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb3RvY29sICsgJzovLycgKyBiYXNlRG9tYWluICsgKHBhdGggfHwgJycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWdDZG5SZXNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldENkblJlc291cmNlKCcvZ3MvaS8nKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICdzcmMvY29yZS9TZXJ2aWNlUHJveHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBJUHJveHlSZXNwb25zZSwgSVByb3h5UmVxdWVzdCwgaXNTaWduYWxSZXF1ZXN0LCBJUHJveHlTaWduYWxSZXF1ZXN0IH0gZnJvbSAnc3JjL2NvcmUvU2VydmljZVByb3h5L2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTWF5YmVQcm9taXNlQW55ID0gYW55IHwgUHJvbWlzZTxhbnk+O1xyXG5leHBvcnQgdHlwZSBTdG9wQ2FuY2VsbGVycyA9ICgpID0+IE1heWJlUHJvbWlzZUFueTtcclxuZXhwb3J0IGNsYXNzIFByb3h5TGlzdGVuZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG9yaWdpbiA9IHV0aWxzLmdldFBhcmVudFVybCgpLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYWxsb3dlZE1ldGhvZHMgPSB1dGlscy5nZXRBbGxDbGFzc01ldGhvZHNOYW1lcyhfc2VydmljZSksXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF90YXJnZXQgPSB3aW5kb3cucGFyZW50LFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luID0gd2luZG93KSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQ2FuY2VsbGVyczogU3RvcENhbmNlbGxlcnNbXSA9IFtdO1xyXG4gICAgcHVibGljIG9uU3RvcDogKCkgPT4gTWF5YmVQcm9taXNlQW55O1xyXG5cclxuICAgIHByaXZhdGUgX2xpc3RlbmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNMaXN0ZW5pbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGlzdGVuKHBheWxvYWQ/OiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMaXN0ZW5pbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2luLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCB3b3JrYXJvdW5kIGZvciBJRTkuIGVsc2Ugd2UnbGwgZ2V0IEpTT04gaXMgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93aW4uYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25SZXF1ZXN0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiAnbGlzdGVuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICByZXM6IHBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB9IGFzIElQcm94eVJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3RlbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BMaXN0ZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMaXN0ZW5pbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uUmVxdWVzdCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUmVxdWVzdCA9IGFzeW5jIChlOiBNZXNzYWdlRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgICAgICAvLyB0byBwcmVzZXJ2ZSBjb250ZXh0XHJcbiAgICAgICAgaWYgKHV0aWxzLnZhbGlkYXRlT3JpZ2luKHRoaXMub3JpZ2luLCBlLm9yaWdpbikpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxID0gSlNPTi5wYXJzZShlLmRhdGEpIGFzIElQcm94eVJlcXVlc3Q7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2lnbmFsUmVxdWVzdChyZXEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVTaWduYWxSZXF1ZXN0KHJlcSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbCByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVQcm94eVJlcXVlc3QocmVxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RXJyb3IoeyByZXM6IGUubWVzc2FnZSB8fCBlLCBpZDogcmVxLmlkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVNpZ25hbFJlcXVlc3QocmVxOiBJUHJveHlTaWduYWxSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgc3dpdGNoIChyZXEuc2lnbmFsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0b3AnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gYXdhaXQgdGhpcy5nZXRDYW5jZWxSZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXM6IElQcm94eVJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BMaXN0ZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZCA9IHRoaXMub25TdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnRoZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSBhd2FpdCBwYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlcS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiAnc3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlczogcGF5bG9hZCxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbDogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzOiBjYW5jZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdE1lc3NhZ2UocmVzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gaWdub3JlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDYW5jZWxSZXN1bHQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHNob3VsZENhbmNlbFN0b3Agb2YgdGhpcy5zdG9wQ2FuY2VsbGVycykge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gc2hvdWxkQ2FuY2VsU3RvcCgpIGFzIE1heWJlUHJvbWlzZUFueTtcclxuICAgICAgICAgICAgaWYgKHJlcy50aGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCByZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMpIHJldHVybiByZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlUHJveHlSZXF1ZXN0KHJlcTogSVByb3h5UmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGVSZXF1ZXN0KHJlcSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mb3J3YXJkVG9TZXJ2aWNlKHJlcSk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogcmVxLmlkLFxyXG4gICAgICAgICAgICByZXMsXHJcbiAgICAgICAgfSBhcyBJUHJveHlSZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVJlcXVlc3QocmVxOiBJUHJveHlSZXF1ZXN0KSB7XHJcbiAgICAgICAgaWYgKCFyZXEuaWQgfHwgIXJlcS5tZXRob2ROYW1lIHx8IHRoaXMuX2FsbG93ZWRNZXRob2RzLmluZGV4T2YocmVxLm1ldGhvZE5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyAncHJveHkgcmVxdWVzdCBpbiBpbnZhbGlkIGZvcm1hdCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZm9yd2FyZFRvU2VydmljZShyZXE6IElQcm94eVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuX3NlcnZpY2VbcmVxLm1ldGhvZE5hbWVdIGFzIEZ1bmN0aW9uO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBtZXRob2QuYXBwbHkodGhpcy5fc2VydmljZSwgcmVxLnBhcmFtcykgYXMgTWF5YmVQcm9taXNlQW55O1xyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwb3N0TWVzc2FnZShtc2c6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHN0cmluZyA9IHR5cGVvZiBtc2cgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkobXNnKSA6IG1zZztcclxuICAgICAgICB0aGlzLl90YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgdGhpcy5vcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcG9zdEVycm9yKGVycjogSVByb3h5UmVzcG9uc2UpIHtcclxuICAgICAgICBlcnIuc2lnbmFsID0gJ2Vycm9yJztcclxuICAgICAgICB0aGlzLnBvc3RNZXNzYWdlKGVycik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVByb3h5UmVzcG9uc2UsIElQcm94eU1lc3NhZ2UsIElQcm94eVJlcXVlc3QsIElQcm94eVNpZ25hbFJlcXVlc3QgfSBmcm9tICdzcmMvY29yZS9TZXJ2aWNlUHJveHkvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJ3NyYy9jb3JlL1NlcnZpY2VQcm94eS91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmljZVByb3h5IHtcclxuICAgIHByaXZhdGUgX2lmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9wZW5kaW5nUmVxczogKChlOiBNZXNzYWdlRXZlbnQgJiB7IGRhdGE6IElQcm94eVJlc3BvbnNlIH0pID0+IHZvaWQpW10gPSBbXTtcclxuICAgIHByaXZhdGUgX2lmcmFtZUhvc3Q6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfbXV0YXRpb25PYnNlcnZlcnM6IE11dGF0aW9uT2JzZXJ2ZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1cmw6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdGltZW91dCA9IDYwMDAwLFxyXG4gICAgICAgIHByaXZhdGUgX2lkQ3JlYXRvciA9IHV0aWxzLmdlbmVyYXRlSWQsXHJcbiAgICAgICAgcHJpdmF0ZSBfaWZyYW1lQ3JlYXRvciA9IHV0aWxzLmNyZWF0ZUlmcmFtZSxcclxuICAgICAgICBwcml2YXRlIGdldElmcmFtZUhvc3QgPSAoKSA9PlxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZTxIVE1MRWxlbWVudD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keSkgcmVzb2x2ZShkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHJlc29sdmUoZG9jdW1lbnQuYm9keSkpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICBwcml2YXRlIF93aW4gPSB3aW5kb3csXHJcbiAgICApIHt9XHJcblxyXG4gICAgcHVibGljIGdldCBpc0luaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5faWZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdDxUPigpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXQpIHJldHVybiBQcm9taXNlLnJlamVjdCgncHJveHkgYWxyZWFkeSBpbml0aWFsaXplZCcpIGFzIGFueTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZnJhbWUgPSB0aGlzLl9pZnJhbWVDcmVhdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZnJhbWUuc3JjID0gdGhpcy51cmw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldElmcmFtZUhvc3QoKS50aGVuKGhvc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lmcmFtZUhvc3QgPSBob3N0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lmcmFtZUhvc3QuYXBwZW5kQ2hpbGQodGhpcy5faWZyYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLmxvZ2dlci5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JzZXJ2ZSBpZnJhbWUgcmVtb3ZhbCBvbmx5IGlmIGdpZ3lhLmxvZ2dlciBpcyBleHBsaWNpdGx5IGVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydE9ic2VydmluZ0lGcmFtZVJlbW92YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHRoaXMuX3dpbi5zZXRUaW1lb3V0KCgpID0+IHJlamVjdCgncHJveHkgaW5pdCB0aW1lb3V0JyksIHRoaXMudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25Jbml0UmVzcG9uc2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlT3JpZ2luKGUub3JpZ2luKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGUuZGF0YSkgYXMgSVByb3h5UmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnNpZ25hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbi5jbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl93aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uSW5pdFJlc3BvbnNlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5zaWduYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGlzdGVuaW5nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vblJlc3BvbnNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UucmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0b3AnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlLnJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgndW5zdXBwb3J0ZWQgcmVzcG9uc2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Jbml0UmVzcG9uc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVPcmlnaW4oY2hlY2tlZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnZhbGlkYXRlT3JpZ2luKHRoaXMuX2lmcmFtZS5zcmMsIGNoZWNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25SZXNwb25zZSA9IChlOiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgICAvLyBhcnJvdyBmdW5jdGlvbiB0byBwcmVzZXJ2ZSBjb250ZXh0XHJcbiAgICAgICAgY29uc3QgbXNnID0gZ2lneWEudXRpbHMuSlNPTi5wYXJzZShlLmRhdGEpIGFzIElQcm94eVJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChtc2cgJiYgdGhpcy5fcGVuZGluZ1JlcXNbbXNnLmlkXSAmJiB0aGlzLnZhbGlkYXRlT3JpZ2luKGUub3JpZ2luKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nUmVxc1ttc2cuaWRdKG1zZyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9wZW5kaW5nUmVxc1ttc2cuaWRdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBwb3N0VG9JRnJhbWU8VD4ocmVxOiBJUHJveHlNZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3Qgb25Nc2dSZXNwb25zZSA9IHRoaXMucmVnaXN0ZXJNZXNzYWdlPFQ+KHJlcSk7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZTogc3RyaW5nID0gdHlwZW9mIHJlcSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShyZXEpIDogcmVxO1xyXG4gICAgICAgIHRoaXMuX2lmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRoaXMuX2lmcmFtZS5zcmMpO1xyXG4gICAgICAgIHJldHVybiBvbk1zZ1Jlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJNZXNzYWdlPFQ+KHJlcTogSVByb3h5TWVzc2FnZSwgdGltZW91dCA9IHRoaXMudGltZW91dCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHRoaXMuX3dpbi5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgncHJveHkgcmVxdWVzdCB0aW1lb3V0Jyk7XHJcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1JlcXNbcmVxLmlkXSA9IChlOiBJUHJveHlSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2luLmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2lnbmFsID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUucmVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShlLnJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbmRSZXF1ZXN0PFQ+KG1ldGhvZE5hbWU6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0VG9JRnJhbWU8VD4oe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5faWRDcmVhdG9yKCksXHJcbiAgICAgICAgICAgIG1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICB9IGFzIElQcm94eVJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdG9wPFQ+KGZvcmNlQ2xvc2UgPSBmYWxzZSk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0luaXQpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ3Byb3h5IGlzIG5vdCBhY3RpdmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBlcnJvcjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5wb3N0VG9JRnJhbWU8VD4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9pZENyZWF0b3IoKSxcclxuICAgICAgICAgICAgICAgICAgICBzaWduYWw6ICdzdG9wJyxcclxuICAgICAgICAgICAgICAgIH0gYXMgSVByb3h5U2lnbmFsUmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcclxuICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yIHx8IGZvcmNlQ2xvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbXV0YXRpb25PYnNlcnZlcnMgJiYgdGhpcy5fbXV0YXRpb25PYnNlcnZlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc2Nvbm5lY3QgbXV0YXRpb24gb2JzZXJ2ZXJzLCBpZiBhbnkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcE9ic2VydmluZ0lGcmFtZVJlbW92YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uUmVzcG9uc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lmcmFtZUhvc3QucmVtb3ZlQ2hpbGQodGhpcy5faWZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5faWZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cmFwV2l0aDxUPih0eXBlOiBuZXcgKCkgPT4gVCk6IFQ7XHJcbiAgICBwdWJsaWMgd3JhcFdpdGg8VD4odHlwZTogT2JqZWN0KTogVDtcclxuICAgIHB1YmxpYyB3cmFwV2l0aDxUPihrZXlzOiBzdHJpbmdbXSk6IFQ7XHJcbiAgICBwdWJsaWMgd3JhcFdpdGg8VD4odHlwZTogKG5ldyAoKSA9PiBUKSB8IE9iamVjdCB8IHN0cmluZ1tdKTogVCB7XHJcbiAgICAgICAgbGV0IGtleXM6IHN0cmluZ1tdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykga2V5cyA9IHV0aWxzLmdldEFsbENsYXNzTWV0aG9kc05hbWVzKHR5cGUgYXMgYW55KTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgQXJyYXkpIGtleXMgPSB0eXBlO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykga2V5cyA9IE9iamVjdC5rZXlzKHR5cGUpO1xyXG4gICAgICAgIC8vLmNvbmNhdChnZXRBbGxDbGFzc01ldGhvZHNOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodHlwZSkpKTtcclxuICAgICAgICBlbHNlIHRocm93ICd1bnN1cHBvcnRlZCB0eXBlIGZvciB3cmFwcGVyJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJveHlGcm9tS2V5czxUPihrZXlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb3h5RnJvbUtleXM8VD4oa2V5czogc3RyaW5nW10pOiBUIHtcclxuICAgICAgICBjb25zdCBwcm94eSA9IHt9O1xyXG4gICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4gKHByb3h5W2tleV0gPSAoLi4uYXJncykgPT4gdGhpcy5zZW5kUmVxdWVzdChrZXksIGFyZ3MpKSk7XHJcbiAgICAgICAgcmV0dXJuIHByb3h5IGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydE9ic2VydmluZ0lGcmFtZVJlbW92YWwoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSB0aGlzLl9pZnJhbWUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUgKHRhcmdldE5vZGUucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAvLyBvYnNlcnZlIHRoZSBpZnJhbWUgYW5kIGl0cyBwYXJlbnRzIChpZnJhbWUsYm9keSlcclxuICAgICAgICAgICAgdGhpcy5hZGRNdXRhdGlvbk9ic2VydmVyKHRhcmdldE5vZGUpO1xyXG4gICAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BPYnNlcnZpbmdJRnJhbWVSZW1vdmFsKCkge1xyXG4gICAgICAgIHRoaXMuX211dGF0aW9uT2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIgJiYgb2JzZXJ2ZXIuZGlzY29ubmVjdCkge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fbXV0YXRpb25PYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZE11dGF0aW9uT2JzZXJ2ZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBtdXRhdGlvbkNhbGxiYWNrOiBNdXRhdGlvbkNhbGxiYWNrID0gbXV0YXRpb25zTGlzdCA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09ICdjaGlsZExpc3QnICYmIG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBIGNoaWxkIG5vZGUgaGFzIGJlZW4gcmVtb3ZlZC5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVkTm9kZSA9IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5pdGVtKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZE5vZGUgPT09IHRhcmdldE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIyMjIEdpZ3lhJ3Mgc2VydmljZSBwcm94eSBoYXMgYmVlbiB1bmV4cGVjdGVkbHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdUaGlzIG1heSBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yIGluY2x1ZGluZyBhIGNvbXBsZXRlIGxvc3Mgb2Ygc2VydmljZS4gIyMjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BPYnNlcnZpbmdJRnJhbWVSZW1vdmFsKCk7IC8vIGNhbiBzdG9wIG9ic2VydmluZyBmb3IgaWZyYW1lIHJlbW92YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gc3RvcCB0aGUgbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGxpbmtlZCB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIG11dGF0aW9ucyBhcmUgb2JzZXJ2ZWRcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uQ2FsbGJhY2spO1xyXG5cclxuICAgICAgICAvLyBTdGFydCBvYnNlcnZpbmcgdGhlIHRoZSB0YXJnZXQtbm9kZSdzIHBhcmVudCBlbGVtZW50IGZvciBjb25maWd1cmVkIG11dGF0aW9uc1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LCB7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSwgLy8gbW9uaXRvcnMgdGhlIHRhcmdldCBub2RlIGZvciB0aGUgYWRkaXRpb24gb3IgcmVtb3ZhbCBvZiBuZXcgY2hpbGQgbm9kZXNcclxuICAgICAgICAgICAgc3VidHJlZTogZmFsc2UsIC8vIGRvIG5vdCBleHRlbmQgbW9uaXRvcmluZyB0byB0aGUgZW50aXJlIHN1YnRyZWUgb2Ygbm9kZXMgcm9vdGVkIGF0IHRoZSBwYXJlbnQgZWxlbWVudFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9tdXRhdGlvbk9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElQcm94eU1lc3NhZ2Uge1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm94eVJlcXVlc3QgZXh0ZW5kcyBJUHJveHlNZXNzYWdlIHtcclxuICAgIG1ldGhvZE5hbWU6IHN0cmluZztcclxuICAgIHBhcmFtcz86IGFueVtdO1xyXG59XHJcbmV4cG9ydCB0eXBlIFByb3h5U2lnbmFsID0gJ2xpc3RlbmluZycgfCAnc3RvcCcgfCAnZXJyb3InO1xyXG5leHBvcnQgaW50ZXJmYWNlIElQcm94eVNpZ25hbFJlcXVlc3QgZXh0ZW5kcyBJUHJveHlNZXNzYWdlIHtcclxuICAgIHNpZ25hbDogUHJveHlTaWduYWw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJUHJveHlSZXNwb25zZSBleHRlbmRzIElQcm94eU1lc3NhZ2Uge1xyXG4gICAgcmVzOiBhbnk7XHJcbiAgICBzaWduYWw/OiBQcm94eVNpZ25hbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNTaWduYWxSZXF1ZXN0KHJlcTogSVByb3h5TWVzc2FnZSk6IHJlcSBpcyBJUHJveHlTaWduYWxSZXF1ZXN0IHtcclxuICAgIHJldHVybiBCb29sZWFuKChyZXEgYXMgSVByb3h5U2lnbmFsUmVxdWVzdCkuc2lnbmFsKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2V0UGFyZW50VXJsID0gKHdpbiA9IHdpbmRvdywgZG9jID0gZG9jdW1lbnQpID0+ICh3aW4ubG9jYXRpb24gIT0gd2luLnBhcmVudC5sb2NhdGlvbiA/IGRvYy5yZWZlcnJlciA6IGRvYy5sb2NhdGlvbi5ocmVmKTtcclxuZXhwb3J0IGNvbnN0IGdldEJvZHlFbGVtZW50ID0gKGRvYyA9IGRvY3VtZW50KSA9PlxyXG4gICAgbmV3IFByb21pc2U8SFRNTEVsZW1lbnQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgIGlmIChkb2MuYm9keSkgcmVzb2x2ZShkb2MuYm9keSk7XHJcbiAgICAgICAgZWxzZSBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHJlc29sdmUoZG9jLmJvZHkpKTtcclxuICAgIH0pO1xyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVPcmlnaW4gPSAob3JpZ2luOiBzdHJpbmcsIGNoZWNrZWQ6IHN0cmluZykgPT4gb3JpZ2luLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjaGVja2VkLnRvTG93ZXJDYXNlKCkpID09PSAwO1xyXG5leHBvcnQgY29uc3QgY3JlYXRlSWZyYW1lID0gKGRvYyA9IGRvY3VtZW50KSA9PiB7XHJcbiAgICBjb25zdCBpZnJhbWUgPSBkb2MuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICBpZnJhbWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgaWZyYW1lLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgaWZyYW1lLnN0eWxlLndpZHRoID0gJzBweCc7XHJcbiAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHJldHVybiBpZnJhbWU7XHJcbn07XHJcbmxldCBfY291bnRlciA9IDE7XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUlkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIFN0cmluZyhfY291bnRlcisrKTtcclxufTtcclxuZnVuY3Rpb24gaXNDbGFzcyh0eXBlOiBhbnl8KG5ldyAoKSA9PiBhbnkpKTogdHlwZSBpcyBuZXcgKCkgPT4gYW55IHtcclxuICAgIHJldHVybiAhIXR5cGUucHJvdG90eXBlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRBbGxDbGFzc01ldGhvZHNOYW1lcyA9ICh0eXBlOiBPYmplY3R8KG5ldyAoKSA9PiBhbnkpKTogc3RyaW5nW10gPT4ge1xyXG4gICAgbGV0IHByb3BzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGxldCBwcm90byA9IGlzQ2xhc3ModHlwZSkgPyB0eXBlLnByb3RvdHlwZSA6IHR5cGU7XHJcbiAgICBkbyB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLyoqIGluaXRpYWwgaW1wbGVtZW50YXRpb24gLSB1c2luZyBmaWx0ZXIgKiovXHJcbiAgICAgICAgICAgIGNvbnN0IGwgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bylcclxuICAgICAgICAgICAgICAgIC8vIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm90bykubWFwKHMgPT4gcy50b1N0cmluZygpKSlcclxuICAgICAgICAgICAgICAgIC5tYXAocyA9PiBzLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuc29ydCgpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChwLCBpLCBhcnIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBwcm90b1twXSA9PT0gJ2Z1bmN0aW9uJyAmJiAvL29ubHkgdGhlIG1ldGhvZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcCAhPT0gJ2NvbnN0cnVjdG9yJyAmJiAvL25vdCB0aGUgY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGkgPT0gMCB8fCBwICE9PSBhcnJbaSAtIDFdKSAmJiAvL25vdCBvdmVycmlkaW5nIGluIHRoaXMgcHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmluZGV4T2YocCkgPT09IC0xLCAvL25vdCBvdmVycmlkZGVuIGluIGEgY2hpbGRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHByb3BzID0gcHJvcHMuY29uY2F0KGwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLyoqIGJ1ZyBmaXggaW1wbGVtZW50YXRpb24gLSB1c2luZyBjdXN0b20gb3VyIG93biBmaWx0ZXIgbG9naWNcclxuICAgICAgICAgICAgIGNhc2Ugb2YgQXJyYXkuZmlsdGVyIHBvbHlmaWxsIGNhdXNpbmcgXCJjYW4gbm90IHJlYWQgcHJvcGVydHkgJzAnIG9mIHVuZGVmaW5lZFwiICoqL1xyXG4gICAgICAgICAgICBjb25zdCBhcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bylcclxuICAgICAgICAgICAgICAgIC8vIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm90bykubWFwKHMgPT4gcy50b1N0cmluZygpKSlcclxuICAgICAgICAgICAgICAgIC5tYXAocyA9PiBzLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuc29ydCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGFycltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHByb3RvW3BdID09PSAnZnVuY3Rpb24nICYmIC8vb25seSB0aGUgbWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgICAgIHAgIT09ICdjb25zdHJ1Y3RvcicgJiYgLy9ub3QgdGhlIGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKGkgPT0gMCB8fCBwICE9PSBhcnJbaSAtIDFdKSAmJiAvL25vdCBvdmVycmlkaW5nIGluIHRoaXMgcHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW5kZXhPZihwKSA9PT0gLTFcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbm90IG92ZXJyaWRkZW4gaW4gYSBjaGlsZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsLnB1c2gocCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvcHMgPSBwcm9wcy5jb25jYXQobCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSB3aGlsZSAoXHJcbiAgICAgICAgKHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSkgJiYgLy93YWxrLXVwIHRoZSBwcm90b3R5cGUgY2hhaW5cclxuICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pIC8vbm90IHRoZSB0aGUgT2JqZWN0IHByb3RvdHlwZSBtZXRob2RzIChoYXNPd25Qcm9wZXJ0eSwgZXRjLi4uKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcHJvcHM7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=