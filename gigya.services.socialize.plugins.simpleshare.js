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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/socialize/Gigya.Js.Plugin.SimpleShare/app/index.ts");
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

/***/ "./src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0.ts":
/*!*****************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function addCSS(rules, prefix) {
    if (!rules || rules == '')
        return;
    if (rules instanceof Array)
        rules = rules.join(' ');
    if (prefix)
        rules = rules.replace(/([^\s]*\.gig)/g, prefix + ' $1');
    var style = document.createElement('style');
    style['type'] = 'text/css';
    var rulesNode = document.createTextNode(rules);
    if (style['styleSheet']) {
        if (rulesNode['value'] != null) {
            style['styleSheet'].cssText = rulesNode['value'];
        }
        else {
            style['styleSheet'].cssText = rulesNode.nodeValue;
        }
    }
    else {
        style.appendChild(rulesNode);
    }
    var head = document.getElementsByTagName('head');
    var body = document.body;
    (head.length > 0 ? head[0] : body).appendChild(style);
}
exports.addCSS = addCSS;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin1.ts":
/*!*****************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin1.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var SimpleSharePlugin0_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0 */ "./src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0.ts");
var arProvidersTemp = 'Facebook,Twitter,Google+,Microsoft,LinkedIn,Digg,StumbleUpon,Hyves,Baidu,Google Bookmarks,Skyrock,QQ,Sina,Kaixin,Renren,VZNet,FriendFeed,VKontakte,Spiceworks,Viadeo,nk.pl,Xing,Tuenti,Reddit,Formspring,Box.net,Tumblr,Pinterest,Plaxo,Technorati,Faves,Newsvine,Fark,Bit.ly,Hatena,Douban,Odnoklassniki,Amazon,Gmail,NetLog,Evernote,AOL Mail,Current TV,Yardbarker,BlinkList,Diigo,DropJack,Segnalo,LinkaGoGo,Kaboodle,Skimbit,Whatsapp'.split(',');
var arExplicitProvidersTemp = "100zakladok,A1-Webmarks,Adifni,Aero,AIM Share,Amen Me!,Arto,Aviary Capture,BizSugar,Blip,Blogmarks,Bobrdobr,BonzoBox,Bordom,Brainify,BuddyMarks,Camyoo,Care2,Cirip,CiteULike,ClassicalPlace,Clickazoo,Colivia.de,Connotea,COSMiQ,DesignBump,Designmoo,Diggita,Diglog,Digo,Diigo,Dipdive,DoMelhor,Doower,Dosti,DotNetKicks,Dzone,Edelight,eKudos,eLert Gadget,Embarkons,euCliquei,Fabulously40,Farkinda,FAVable,Favoritus,Floss.pro,Fnews,Fresqui,funP,fwisp,Gabbr,Gacetilla,GamesN,GluvSnap,Google Reader,Gravee,Grumper,Haber.gen.tr,Hacker News,Hadash Hot,Hatena,Hazarkor,Hedgehogs.net,HelloTxt,HEMiDEMi,Hipstr,Hitmarks,Hot Bookmark,Hotklix,HTML Validator,Identi.ca,Instapaper,InvestorLinks,Jamespot,Jumptags,Kaevur,KiRTSY,Kledy,koornk,Kudos,Laaikit,Librerio,Link Ninja,Linkuj.cz,Livefavoris,Lunch.com,Meccho,meinVZ,Memori.ru,Meneame,Mindbodygreen,Mylinkvault,N4G,Netvouz,Nujij,OKNOtizie,Oneview,Osmosus,Oyyla,PDF Online,PimpThisBlog,Ping.fm,Planypus,Plurk,Polladium,Posterous,Pusha,Quantcast,Read It Later,Scoop.at,Sekoman,Shaveh,She Told Me,Smak News,SodaHead,Sonico,Speedtile,springpad,Spruzer,Startaid,Startlap,Strands,studiVZ,Stuffpit,Stumpedia,Stylehive,Surfpeople,Svejo,Symbaloo,Tagza,TellMyPolitician,ThisNext,Tip'd,Tulinq,Tusul,Viadeo,Virb,Vyoom,Whois Lookup,Windy Citizen,WireFan,Worio,Wovre,Wykop,Yammer,Yazzem,Yigg,Yoolink,Yorumcuyum,Youbookmarks,YouMob,Mixi,Naver,Wanelo".split(',');
var arExplicitBookmarksWithIcons = 'mixi,naver,hatena'.split(',');
var wasCSSInjected = false;
var BookmarkProvider = /** @class */ (function () {
    function BookmarkProvider(displayName, isExplicit) {
        this.displayName = displayName;
        this.isExplicit = isExplicit;
        this.id = displayName
            .replace(/ /g, '')
            .replace(/!/g, '')
            .replace(/\./g, '')
            .replace(/\+/g, 'plus')
            .replace('Microsoft', 'messenger')
            .toLowerCase();
        this.displayName = displayName.replace('Google+', 'Google');
        if (this.isExplicit && window.gigya.utils.array.indexOf(arExplicitBookmarksWithIcons, this.id) == -1) {
            this.iconURL = '/gs/i/SimpleShare/defaultBMSIcon.png';
            this.mobileIconURL = '/gs/i/SimpleShare/defaultBMSIcon_35.png';
        }
        else {
            this.iconURL = window.gigya._.getCdnResource('/gs/i/SimpleShare/' + this.id + '.png');
            this.mobileIconURL = window.gigya._.getCdnResource('/gs/i/SimpleShare/' + this.id + '_35.png');
        }
    }
    return BookmarkProvider;
}());
var BookmarkProviders = /** @class */ (function () {
    function BookmarkProviders() {
    }
    BookmarkProviders.getProvider = function (sProvider) {
        var id = sProvider
            .replace(/ /g, '')
            .replace(/!/g, '')
            .replace(/\./g, '')
            .replace(/\+/g, 'plus')
            .replace('Microsoft', 'messenger')
            .toLowerCase();
        return BookmarkProviders.oProvidersHash[id];
    };
    BookmarkProviders.getProviders = function (enabledProviders, disabledProviders) {
        if (enabledProviders === void 0) { enabledProviders = '*'; }
        if (disabledProviders === void 0) { disabledProviders = ''; }
        var arProviders = [];
        var arEnabledProviders = enabledProviders
            .replace(/ /g, '')
            .replace(/!/g, '')
            .replace(/\./g, '')
            .replace(/\+/g, 'plus')
            .replace('Microsoft', 'messenger')
            .toLowerCase()
            .split(',');
        var arDisabledProviders = disabledProviders
            .replace(/ /g, '')
            .replace(/!/g, '')
            .replace(/\./g, '')
            .replace(/\+/g, 'plus')
            .replace('Microsoft', 'messenger')
            .toLowerCase()
            .split(',');
        for (var i = 0; i < arEnabledProviders.length; i++) {
            var sProvider = arEnabledProviders[i];
            if (!sProvider)
                continue;
            if (sProvider == '*') {
                for (var bookmarkId in BookmarkProviders.oProvidersHash) {
                    var bookmarkProvider = BookmarkProviders.oProvidersHash[bookmarkId];
                    if (!bookmarkProvider.isExplicit &&
                        window.gigya.utils.array.indexOf(arEnabledProviders, bookmarkId) == -1 &&
                        window.gigya.utils.array.indexOf(arDisabledProviders, bookmarkId) == -1) {
                        arProviders.push(bookmarkProvider);
                    }
                }
            }
            else {
                var provider = BookmarkProviders.getProvider(sProvider);
                if (provider && window.gigya.utils.array.indexOf(arDisabledProviders, sProvider) == -1)
                    arProviders.push(provider);
            }
        }
        return arProviders;
    };
    BookmarkProviders.oProvidersHash = {};
    return BookmarkProviders;
}());
for (var i = 0; i < arProvidersTemp.length; i++) {
    var bookmark = new BookmarkProvider(arProvidersTemp[i], false);
    BookmarkProviders.oProvidersHash[bookmark.id] = bookmark;
}
for (var i = 0; i < arExplicitProvidersTemp.length; i++) {
    var bookmark = new BookmarkProvider(arExplicitProvidersTemp[i], true);
    BookmarkProviders.oProvidersHash[bookmark.id] = bookmark;
}
var SimpleSharePlugin = /** @class */ (function () {
    function SimpleSharePlugin(params, refString) {
        var _this = this;
        this.params = params;
        this.refString = refString;
        this.isDrawing = false;
        this.lastProviderShownIndex = 0;
        this.uniqueID = String(Date.now());
        this.providers = BookmarkProviders.getProviders(this.params['moreEnabledProviders'], this.params['moreDisabledProviders']);
        var deviceType = this.params['deviceType'] ? this.params['deviceType'].toLowerCase() : 'desktop';
        this.isMobileUI = deviceType == 'mobile' || (deviceType == 'auto' && window.gigya.localInfo.isMobile);
        this.injectDefaultCSS();
        this.container = this.getContainer();
        window.gigya.socialize.getUserInfo(this.params, {
            callback: function (res) {
                _this.user = res['user'];
            },
        });
        this.onBodyMouseDownDelegate = function (e) { return _this.onBodyMouseDown(e); };
        window.gigya.utils.DOM.addEventListener(document, 'mousedown', this.onBodyMouseDownDelegate);
        this.onBodyKeyDownDelegate = function (e) { return _this.onBodyKeyDown(e); };
        window.gigya.utils.DOM.addEventListener(document, 'keydown', this.onBodyKeyDownDelegate);
        if (this.isMobileUI) {
            window.gigya.utils.DOM.addDialogBackListener(function () {
                _this.close();
            });
        }
        this.draw();
        window.gigya.events.dispatchForWidget({
            eventName: 'load',
        }, this.params);
    }
    SimpleSharePlugin.prototype.injectDefaultCSS = function (params) {
        if (params === void 0) { params = {}; }
        if (!wasCSSInjected) {
            var css = SimpleSharePlugin.defaultCSS;
            if (this.isMobileUI) {
                css += SimpleSharePlugin.mobileCSS;
            }
            else {
                css += SimpleSharePlugin.nonMobileCSS;
            }
            SimpleSharePlugin0_1.addCSS(css, params['cssPrefix']);
            wasCSSInjected = true;
        }
    };
    SimpleSharePlugin.prototype.getText = function (textKey, replaceStr, withStr) {
        var lang = this.params['lang'];
        var plugin = 'gigya.services.socialize.plugins.simpleShare.js';
        if (lang == 'te-st')
            return 'TEST_' + textKey.substring(0, 10);
        if (!lang)
            lang = 'en';
        var t = window.gigya['i18n'][plugin][lang][textKey];
        if (t && replaceStr)
            t = t.replace(replaceStr, withStr);
        return t;
    };
    SimpleSharePlugin.prototype.getContentHeight = function () {
        var h;
        if (this.isMobileUI) {
            h = window.gigya.utils.viewport.getInnerSize().h - window.gigya.utils.DOM.getHTMLSize(SimpleSharePlugin.templates['mobileCaption'], this.container).h;
        }
        else {
            h = this.params['height'] - window.gigya.utils.DOM.getHTMLSize(SimpleSharePlugin.templates['caption'], this.container).h;
        }
        return h;
    };
    SimpleSharePlugin.prototype.getMaxItemsToPerPage = function () {
        var w = this.container.offsetWidth;
        var h = this.getContentHeight();
        var buttonTemplate = this.isMobileUI ? SimpleSharePlugin.templates['mobileBookmarkButton'] : SimpleSharePlugin.templates['bookmarkButton'];
        var fakeItemHTML = window.gigya.utils.templates.fill(buttonTemplate, { styleOverride: '' });
        var itemSize = window.gigya.utils.DOM.getHTMLSize(fakeItemHTML, this.container);
        var itemsPerRow = Math.floor(w / itemSize.w);
        var itemsPerCol = Math.floor(h / itemSize.h);
        if (this.isMobileUI)
            itemsPerCol *= 3;
        return itemsPerRow * itemsPerCol;
    };
    SimpleSharePlugin.prototype.drawNextPage = function () {
        this.isDrawing = true;
        var itemsToShow = Math.min(this.getMaxItemsToPerPage(), this.providers.length);
        for (var i = this.lastProviderShownIndex; i < this.providers.length && i - this.lastProviderShownIndex < itemsToShow; i++) {
            var provider = this.providers[i];
            var buttonContentTemplate = this.isMobileUI
                ? SimpleSharePlugin.templates['mobileBookmarkButtonContent']
                : SimpleSharePlugin.templates['bookmarkButtonContent'];
            var buttonTextClassName = 'gig-simpleShareUI-buttonText gig-simpleShareUI-buttonText-' + provider.id;
            var displayName = this.getText(provider.id) || provider.displayName;
            var buttonContent = window.gigya.utils.templates.fill(buttonContentTemplate, {
                buttonTextCSS: '',
                buttonTextClassName: buttonTextClassName,
                displayName: displayName,
            });
            var textWidth = window.gigya.utils.DOM.getHTMLSize(buttonContent, this.container).w;
            if (this.isMobileUI) {
                var maxTextWidth = 85;
                var fontSize = 16;
                while (textWidth > maxTextWidth && fontSize >= 14) {
                    buttonContent = window.gigya.utils.templates.fill(buttonContentTemplate, {
                        buttonTextCSS: 'font-size:' + fontSize-- + 'px;',
                        buttonTextClassName: buttonTextClassName,
                        displayName: provider.displayName,
                    });
                    textWidth = window.gigya.utils.DOM.getHTMLSize(buttonContent, this.container).w;
                }
            }
            var backgroundImage = this.isMobileUI ? provider.mobileIconURL : provider.iconURL;
            var item = window.gigya.utils.object.merge([
                this.providers[i],
                {
                    buttonContent: buttonContent,
                },
            ]);
            var buttonTemplate = this.isMobileUI ? SimpleSharePlugin.templates['mobileBookmarkButton'] : SimpleSharePlugin.templates['bookmarkButton'];
            var sButtonContent = window.gigya.utils.templates.fill(buttonTemplate, item);
            var buttonDiv = document.createElement('div');
            buttonDiv.innerHTML = sButtonContent;
            buttonDiv = buttonDiv.firstChild;
            buttonDiv.setAttribute('provider', provider.id);
            if (backgroundImage) {
                window.gigya.utils.DOM.getElementsByClass(buttonDiv, 'gig-simpleShareUI-button-inner')[0].style.backgroundImage = "url('" + backgroundImage + "')";
            }
            this.contentContainer.appendChild(buttonDiv);
            this.addEventsToButton(buttonDiv);
        }
        this.lastProviderShownIndex = i;
        this.isDrawing = false;
    };
    SimpleSharePlugin.prototype.addEventsToButton = function (buttonDiv) {
        var _this = this;
        if (this.isMobileUI) {
            window.gigya.utils.DOM.addEventListener(buttonDiv, 'touchstart', function (e) {
                buttonDiv.className = 'gig-simpleShareUI-button gig-simpleShareUI-button-touchdown';
            });
            window.gigya.utils.DOM.addEventListener(buttonDiv, 'touchmove', function (e) {
                buttonDiv.className = 'gig-simpleShareUI-button';
            });
            window.gigya.utils.DOM.addButtonSubmitListener(buttonDiv, function () {
                if (buttonDiv.className.indexOf('touchdown') != -1) {
                    _this.onProviderClick(buttonDiv.getAttribute('provider'));
                }
                buttonDiv.className = 'gig-simpleShareUI-button';
            }, 'touchend');
        }
        else {
            window.gigya.utils.DOM.addButtonSubmitListener(buttonDiv, function () { return _this.onProviderClick(buttonDiv.getAttribute('provider')); });
        }
    };
    SimpleSharePlugin.prototype.draw = function () {
        var _this = this;
        if (!this.isMobileUI)
            this.container.style.height = 'auto';
        this.container.setAttribute('role', 'dialog');
        this.container.setAttribute('aria-labelledby', "gig-simpleShareUI-caption-text-" + this.uniqueID);
        this.container.setAttribute('tabindex', '-1');
        this.container.className = 'gig-simpleShareUI';
        var template = this.isMobileUI ? SimpleSharePlugin.templates['mobileContainer'] : SimpleSharePlugin.templates['container'];
        var templateFiller = {
            caption: this.isMobileUI ? SimpleSharePlugin.templates['mobileCaption'] : SimpleSharePlugin.templates['caption'],
            captionText: this.getText('share_with_your_friends'),
            id: this.uniqueID,
            closeText: '',
        };
        this.container.innerHTML = window.gigya.utils.templates.fill(template, templateFiller);
        if (!window.gigya.utils.validation.isExplicitFalse(this.params['showEmailButton'])) {
            var emailProvider = new BookmarkProvider('email', false);
            this.providers.splice(1, 0, emailProvider);
        }
        if (!this.isMobileUI) {
            var maxItemsPerPage = this.getMaxItemsToPerPage();
            if (!window.gigya.utils.validation.isExplicitFalse(this.params['showMoreButton']) && this.providers.length > maxItemsPerPage) {
                var moreProvider = new BookmarkProvider('more', false);
                this.providers.splice(maxItemsPerPage - 1, 0, moreProvider);
            }
        }
        this.contentContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-simpleShareUI-content')[0];
        if (this.isMobileUI && this.contentContainer) {
            window.gigya.utils.DOM.addEventListener(this.contentContainer, 'scroll', function (event) {
                //load more content when scrolling has reached the end minus one page
                if (!_this.isDrawing &&
                    _this.contentContainer.scrollTop + _this.contentContainer.offsetHeight >=
                        _this.contentContainer.scrollHeight - _this.contentContainer.offsetHeight / 2) {
                    _this.drawNextPage();
                }
            });
        }
        this.setContentArea(true);
        this.drawNextPage();
        var closeButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-simpleShareUI-closeButton')[0];
        if (closeButton) {
            window.gigya.utils.DOM.addButtonSubmitListener(closeButton, function () { return _this.close(); });
        }
        //iOS5 workaround (one finger scroll stopped working)
        if (window.gigya.localInfo.isIOS && window.gigya.localInfo.iosVersion <= 5) {
            this.contentContainer.style['webkitOverflowScrolling'] = 'auto';
        }
        if (!this.isMobileUI) {
            if (this.params['snapToElementID']) {
                this.snapToElement(document.getElementById(this.params['snapToElementID']));
            }
            else {
                var mousePos = window.gigya.utils.mouse.getPosition();
                if (mousePos) {
                    this.container.style.top = mousePos.y + 'px';
                    this.container.style.left = mousePos.x + 'px';
                    var ifrel = document.getElementById('gigya_ifr_' + this.container.id);
                    if (ifrel) {
                        ifrel.style.top = mousePos.y + 'px';
                        ifrel.style.left = mousePos.x + 'px';
                    }
                }
            }
        }
        this.container.focus();
    };
    SimpleSharePlugin.prototype.onProviderClick = function (provider) {
        var params = window.gigya.utils.object.clone(this.params, false, true);
        var userAction = this.params[provider + 'UserAction'];
        if (!userAction)
            userAction = this.params['userAction'];
        params['hideSidebar'] = true;
        params['operationMode'] = 'multiSelect';
        params['onSendDone'] = this.params['onSendDone'];
        if (provider == 'email') {
            if (this.isMobileUI) {
                var subject = userAction['title'] || '';
                var body = userAction['linkBack'] || '';
                document.location.href = 'mailto:?to=&subject=' + subject + '&body=' + body;
            }
            else {
                params['initialView'] = 'email';
                delete params['containerID'];
                params['containerID'] = '';
                window.gigya.socialize.showShareUI(params);
            }
        }
        else if (provider == 'more') {
            params['initialView'] = 'more';
            delete params['containerID'];
            window.gigya.socialize.showShareUI(params);
        }
        else {
            params['provider'] = provider;
            params['userAction'] = userAction;
            params['providerKey'] = this.params[provider + 'Key'];
            var mediaItems = userAction['mediaItems'];
            var media;
            if (mediaItems) {
                for (var u = 0; u < mediaItems.length; u++) {
                    var mediaItem = mediaItems[u];
                    if (mediaItem != null) {
                        if (mediaItem.type == 'image') {
                            media = mediaItem.src;
                            break;
                        }
                        if (mediaItem.type == 'video' || mediaItem.type == 'flash') {
                            media = mediaItem.previewImageURL;
                            break;
                        }
                    }
                }
            }
            if (media)
                params['thumbnailURL'] = media;
            window.gigya.socialize.postBookmark(params);
            window.gigya.events.dispatchForWidget({
                eventName: 'sendDone',
                providers: provider,
                userMessage: userAction['userMessage'],
                targetURL: userAction['linkBack'],
            }, this.params);
        }
        var oProvider = window.gigya.socialize._getProviderByName(provider);
        if (!this.isMobileUI &&
            this.user &&
            this.user.identities &&
            !this.user.identities[provider] &&
            !window.gigya.utils.localStorage.getItem('postShareAction_' + this.params['APIKey']) &&
            oProvider &&
            this.params['simpleShareConfig'] &&
            this.params['simpleShareConfig']['postShareAction'] == 'connect') {
            this.showAfterBookmarkUI(oProvider, this.params['simpleShareConfig']);
        }
        else {
            this.close();
        }
    };
    SimpleSharePlugin.prototype.close = function () {
        window.gigya.utils.DOM.removeEventListener(document, 'mousedown', this.onBodyMouseDownDelegate);
        window.gigya.utils.DOM.removeEventListener(document, 'keydown', this.onBodyKeyDownDelegate);
        window.gigya.utils.DOM.removeEventListener(window, 'resize', this.onResizeDelegate);
        window.gigya.utils.DOM.removeEventListener(window, 'scroll', this.onScrollDelegate);
        this.container.parentNode.removeChild(this.container);
        var ifr = document.getElementById('gigya_ifr_' + this.container.id);
        if (ifr)
            ifr.parentNode.removeChild(ifr);
        window.gigya.events.dispatchForWidget({
            eventName: 'close',
        }, this.params);
    };
    SimpleSharePlugin.prototype.snapToElement = function (el) {
        if (!el)
            return;
        var w = this.container.offsetWidth;
        var h = this.container.offsetHeight;
        var dst = this.container.style;
        var de = document.documentElement;
        var db = document.body;
        var clientHeight = de.clientHeight;
        if (clientHeight == 0)
            clientHeight = db.clientHeight;
        var clientWidth = de.clientWidth;
        if (clientWidth == 0)
            clientWidth = db.clientWidth;
        if (window.innerHeight) {
            clientHeight = window.innerHeight;
            clientWidth = window.innerWidth;
        }
        var scrl = window.gigya.utils.viewport.getScroll();
        var vpt = scrl.top;
        var vpl = scrl.left;
        var middlePointTop = vpt + Math.floor(clientHeight / 2);
        var middlePointLeft = vpl + Math.floor(clientWidth / 2);
        var btnPos = window.gigya.utils.DOM.getElementPosition(el);
        if (btnPos.top > middlePointTop) {
            dst.top = btnPos.top - h - 5 + 'px';
        }
        else {
            dst.top = btnPos.top + el.offsetHeight + 5 + 'px';
        }
        if (btnPos.left > middlePointLeft) {
            dst.left = btnPos.left + el.offsetWidth - w + 'px';
        }
        else {
            dst.left = btnPos.left + 'px';
        }
        var ifrel = document.getElementById('gigya_ifr_' + this.container.id);
        if (ifrel != null) {
            ifrel.style.top = dst.top;
            ifrel.style.left = dst.left;
        }
    };
    SimpleSharePlugin.prototype.showAfterBookmarkUI = function (oProvider, config) {
        var _this = this;
        var captionText = config['postShareConnectCaptionText'] || this.getText('thanks_for_sharing');
        var bodyText = config['postShareConnectBodyText'] || 'To make sharing even simpler';
        var neverShowtext = this.getText('never_show_this');
        var btnSrc = window.gigya._.getCdnResource('/gs/i/HTMLLogin/SignInWith/' + oProvider['name'] + '_30.gif');
        var template = SimpleSharePlugin.templates['postShareAction-connect'];
        var caption = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-simpleShareUI-caption')[0];
        if (caption)
            caption.innerHTML = captionText;
        this.contentContainer.innerHTML = window.gigya.utils.templates.fill(template, { body: bodyText, btnSrc: btnSrc, neverShowText: neverShowtext });
        var btnConnect = window.gigya.utils.DOM.getElementsByClass(this.contentContainer, 'gig-simpleShareUI-postShare-connectButton')[0];
        var lnkNeverShow = window.gigya.utils.DOM.getElementsByClass(this.contentContainer, 'gig-simpleShareUI-postShare-neverShowLink')[0];
        window.gigya.utils.DOM.addEventListener(btnConnect, 'click', function () {
            window.gigya.socialize.connect(_this.params, { provider: oProvider['name'] });
            _this.close();
        });
        window.gigya.utils.DOM.addEventListener(lnkNeverShow, 'click', function () {
            window.gigya.utils.localStorage.setItem('postShareAction_' + _this.params['APIKey'], 'true');
            _this.close();
        });
    };
    SimpleSharePlugin.prototype.onBodyMouseDown = function (e) {
        var a;
        if (e) {
            a = e.target;
            if (!a)
                a = e.srcElement;
            while (a != null && a.offsetParent && a != this.container) {
                a = a.offsetParent;
            }
        }
        if (!a || a != this.container) {
            this.close();
        }
    };
    SimpleSharePlugin.prototype.onBodyKeyDown = function (e) {
        if ((e.which || e.keyCode) == 27) {
            this.close();
        }
    };
    SimpleSharePlugin.prototype.setContentArea = function (first) {
        var _this = this;
        if (this.isMobileUI && this.contentContainer) {
            var startY, startTopScroll;
            if (first) {
                this.contentContainer.style.height = this.getContentHeight() + 'px';
                var scrollBodyToContent = function (e) {
                    window.scrollTo(_this.container.offsetLeft, _this.container.offsetTop);
                };
                window.gigya.utils.DOM.addEventListener(this.contentContainer, 'touchstart', function (event) {
                    // prevent scrolling the page
                    startY = event['touches'][0].pageY;
                    startTopScroll = _this.contentContainer.scrollTop;
                    if (startTopScroll <= 0) {
                        _this.contentContainer.scrollTop = 1;
                    }
                    if (startTopScroll + _this.contentContainer.offsetHeight >= _this.contentContainer.scrollHeight) {
                        _this.contentContainer.scrollTop = _this.contentContainer.scrollHeight - _this.contentContainer.offsetHeight - 1;
                    }
                });
                this.onResizeDelegate = function () { return _this.onResize(); };
                this.onScrollDelegate = function () { return _this.onScroll(); };
                window.gigya.utils.DOM.addEventListener(window, 'resize', this.onResizeDelegate);
                window.gigya.utils.DOM.addEventListener(window, 'scroll', this.onScrollDelegate);
                /*gigya.utils.DOM.addEventListener(this.contentContainer, 'touchmove', function (event) {
                        document.removeEventListener('touchstart', preventDefault,false);
                        document.removeEventListener('touchmove', preventDefault,false);
                    });
                    var bodyTopScroll = document.body.scrollTop;
                    var bodyLeftScroll = document.body.scrollLeft;
                    gigya.utils.DOM.addEventListener(document.body, 'touchmove', function (event) {
                        window.scrollTo(bodyLeftScroll, bodyTopScroll);
                    });*/
            }
        }
    };
    SimpleSharePlugin.prototype.getContainer = function () {
        if (!this.container) {
            if (this.params['containerID']) {
                this.container = document.getElementById(this.params['containerID']);
            }
            else {
                this.container = window.gigya.utils.DOM.createTopLevelDiv();
                this.container.style.width = this.params['width'] + 'px';
                this.container.style.height = this.params['height'] + 'px';
            }
            var container = this.container;
            if (this.isMobileUI) {
                var viewportSize = window.gigya.utils.viewport.getInnerSize();
                container.style.width = '100%';
                container.style.height = viewportSize.h.toString() + 'px';
                container.style.top = document.body.scrollTop + 'px';
                container.style.left = '0px';
                container.style.position = 'absolute';
            }
        }
        return this.container;
    };
    SimpleSharePlugin.prototype.onResize = function () {
        var viewportSize = window.gigya.utils.viewport.getInnerSize();
        this.container.style.height = viewportSize.h.toString() + 'px';
        if (this.contentContainer)
            this.contentContainer.style.height = this.getContentHeight() + 'px';
        window.scrollTo(this.container.offsetLeft, this.container.offsetTop);
    };
    SimpleSharePlugin.prototype.onScroll = function () {
        window.scrollTo(this.container.offsetLeft, this.container.offsetTop);
        if (window.gigya.localInfo.isIOS)
            this.onResize();
    };
    SimpleSharePlugin.defaultCSS = [
        '.gig-simpleShareUI *, div.gig-simpleShareUI, span.gig-simpleShareUI, .gig-simpleShareUI span, .gig-simpleShareUI a:hover, .gig-simpleShareUI a:visited, .gig-simpleShareUI a:link, .gig-simpleShareUI a:active {',
        'none;text-align:left;font-family:arial;background-color:transparent;font-weight:normal;font-size:11px;border:none; padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;line-height:normal;',
        '}',
    ].join('');
    SimpleSharePlugin.nonMobileCSS = [
        'div.gig-simpleShareUI {border: 5px solid #858585; border-radius: 5px;}',
        'div.gig-simpleShareUI-inner {border: 1px solid #636363; background-color: #FFFFFF}',
        'div.gig-simpleShareUI-caption {overflow:hidden;border-bottom: 1px solid #E0E0E0; height:19px;padding-left: 5px;}',
        'div.gig-simpleShareUI-caption, div.gig-simpleShareUI-caption-text {font-weight: bold;background-color:#F7F7F7; color:#555555;line-height:19px;}',
        'div.gig-simpleShareUI-caption-text {float:left;}',
        'div.gig-simpleShareUI-button {width: 119px; margin: 0 5px 7px 0;  height:16px; cursor:pointer; display: inline-block; *display:inline; zoom:1; }',
        'div.gig-simpleShareUI-button-inner {background-repeat:no-repeat;background-position:center left;padding-left: 20px;line-height:16px;height:16px;}',
        'div.gig-simpleShareUI-content {line-height:0;padding: 7px 10px 0}',
        'div.gig-simpleShareUI-button:hover {opacity: 0.7}',
        'span.gig-simpleShareUI-buttonText-facebook, span.gig-simpleShareUI-buttonText-twitter {font-weight: bold;}',
        'span.gig-simpleShareUI-buttonText {line-height:16px;}',
        "div.gig-simpleShareUI-closeButton {background-repeat:no-repeat;background-position:center;center;float:right;cursor:pointer;margin: 0 4px;width:7px;height:19px;display:inline-block;*display:inline; zoom:1;background-image: url('" +
            window.gigya._.getCdnResource('/gs/i/Share/Mini/Dialog/Dialog_Close.png') +
            "')}",
        'div.gig-simpleShareUI-postShare-connectBodyText {color: #555555;font-size: 14px;font-weight: bold;height: 18px;margin: 20px 20px 10px;overflow: hidden;text-align: center;}',
        'div.gig-simpleShareUI-postShare-neverShowLink {margin-top: 40px;color: #0086F1;cursor: pointer;font-size: 10px;margin-bottom: 4px;text-align: center;}',
        'div.gig-simpleShareUI-postShare-connectButton {cursor: pointer;width: 212px; height: 30px;background-repeat:no-repeat;margin: 0 auto;background-position:center center;}',
        'div.gig-simpleShareUI-postShare-connectButton:hover {opacity: 0.7}',
    ].join('');
    SimpleSharePlugin.mobileCSS = [
        'div.gig-simpleShareUI * {font-size: 16px;-webkit-text-size-adjust:none; -webkit-touch-callout: none; -webkit-user-select: none;font-family:sans-serif}',
        'div.gig-simpleShareUI {background-color:#f5f5f5;}',
        'div.gig-simpleShareUI-inner {}',
        'div.gig-simpleShareUI-caption {padding: 4px 0;text-align: center; background-color: #373737; font-size: 18px; font-weight: bold; color: #cbcbcb}',
        'div.gig-simpleShareUI-button {',
        window.gigya.localInfo.isIOS ? '-webkit-backface-visibility: hidden;-webkit-perspective: 1000;-webkit-transform: translate3d(0,0,0);' : '',
        'line-height:0px; border: 1px solid #dcdcdc; border-radius: 5px;text-align:left;width: 139px; margin: 8px 6px 0; overflow:hidden; display: inline-block; ',
        'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#ededed));',
        'background: -webkit-linear-gradient(top, #ffffff 0%,#ededed 100%);',
        'background: linear-gradient(to bottom,  #ffffff 0%,#ededed 100%);',
        '}',
        'div.gig-simpleShareUI-button-touchdown {',
        'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#777777), color-stop(100%,#5e5e5e));',
        'background: -webkit-linear-gradient(top, #777777 0%,#5e5e5e 100%);',
        'background: linear-gradient(to bottom,  #777777 0%,#5e5e5e 100%);',
        '}',
        'div.gig-simpleShareUI-button-touchdown .gig-simpleShareUI-buttonText {color: #FFFFFF;}',
        'div.gig-simpleShareUI-button-inner {font-size: 16px; color: #333333; padding-left: 45px;line-height:15px;display: table-cell; vertical-align:middle; height: 45px;background-repeat:no-repeat;background-position:5px center}',
        'div.gig-simpleShareUI-content-container {}',
        'div.gig-simpleShareUI-content {',
        window.gigya.localInfo.isIOS
            ? '-webkit-backface-visibility: hidden;-webkit-perspective: 1000;-webkit-transform: translate3d(0,0,0);-webkit-overflow-scrolling:touch; overflow-scrolling: touch'
            : '',
        'line-height:0;overflow:scroll;text-align:center;}',
        'span.gig-simpleShareUI-buttonText-facebook, span.gig-simpleShareUI-buttonText-twitter {font-weight: bold;}',
    ].join('');
    SimpleSharePlugin.templates = {
        mobileContainer: [
            '<div class="gig-simpleShareUI-inner">',
            '$caption',
            '<div class="gig-simpleShareUI-content-container"><div class="gig-simpleShareUI-content"></div></div>',
            '</div>',
        ].join(''),
        mobileBookmarkButton: '<div class="gig-simpleShareUI-button"><div class="gig-simpleShareUI-button-inner">$buttonContent</div></div>',
        mobileBookmarkButtonContent: '<span style="${buttonTextCSS}" class="${buttonTextClassName}">${displayName}</span>',
        mobileCaption: '<div class="gig-simpleShareUI-caption" id="gig-simpleShareUI-caption-text-$id">$captionText</div>',
        container: ['<div class="gig-simpleShareUI-inner">', '$caption', '<div class="gig-simpleShareUI-content"></div>', '</div>'].join(''),
        caption: '<div class="gig-simpleShareUI-caption"><div class="gig-simpleShareUI-caption-text" id="gig-simpleShareUI-caption-text-$id">$captionText</div><div class="gig-simpleShareUI-closeButton" aria-label="$closeText"></div></div>',
        bookmarkButton: '<div class="gig-simpleShareUI-button"><div class="gig-simpleShareUI-button-inner">$buttonContent</div></div>',
        bookmarkButtonContent: '<span style="${buttonTextCSS}" class="${buttonTextClassName}">${displayName}</span>',
        'postShareAction-connect': [
            '<div class="gig-simpleShareUI-postShare-connectBodyText">$body</div>',
            '<div class="gig-simpleShareUI-postShare-connectButton" style="background-image:url(\'$btnSrc\')"></div>',
            '<div class="gig-simpleShareUI-postShare-neverShowLink">$neverShowText</div>',
        ].join(''),
    };
    return SimpleSharePlugin;
}());
window.gigya._.UI.attachPlugin(SimpleSharePlugin, 'socialize', 'simpleShare', 'showSimpleShareUI');


/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.SimpleShare/app/index.ts":
/*!****************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.SimpleShare/app/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var GigyaGlobal = __webpack_require__(/*! src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0 */ "./src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0.ts");
__webpack_require__(/*! src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin1 */ "./src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin1.ts");
if (!window.gigya.global) {
    window.gigya.global = {};
}
__webpack_provided_Object_dot_assign(window.gigya.global, GigyaGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5TaW1wbGVTaGFyZS9hcHAvU2ltcGxlU2hhcmVQbHVnaW4wLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLlNpbXBsZVNoYXJlL2FwcC9TaW1wbGVTaGFyZVBsdWdpbjEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uU2ltcGxlU2hhcmUvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDLEVBQUUsQ0FBQztRQUVwSSxPQUFPLEVBQ0gsOE5BQThOO1FBQ2xPLGNBQWMsRUFBRSw4R0FBOEc7UUFDOUgscUJBQXFCLEVBQUUscUZBQXFGO1FBQzVHLHlCQUF5QixFQUFFO1lBQ3ZCLHNFQUFzRTtZQUN0RSx5R0FBeUc7WUFDekcsNkVBQTZFO1NBQ2hGLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNiLENBQUM7SUEwZU4sd0JBQUM7Q0FBQTtBQUNELFlBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2cEI1Rix1TEFBZ0c7QUFDaEcscUtBQTBFO0FBRzFFLElBQUksQ0FBQyxZQUFLLENBQUMsTUFBTSxFQUFFO0lBQ2YsWUFBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Q0FDckI7QUFFRCxvQ0FBYSxDQUFDLFlBQUssQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMiLCJmaWxlIjoiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuc2ltcGxlc2hhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLlNpbXBsZVNoYXJlL2FwcC9pbmRleC50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRDU1MocnVsZXM6IGFueSwgcHJlZml4KSB7XHJcbiAgICBpZiAoIXJ1bGVzIHx8IHJ1bGVzID09ICcnKSByZXR1cm47XHJcbiAgICBpZiAocnVsZXMgaW5zdGFuY2VvZiBBcnJheSkgcnVsZXMgPSBydWxlcy5qb2luKCcgJyk7XHJcbiAgICBpZiAocHJlZml4KSBydWxlcyA9IHJ1bGVzLnJlcGxhY2UoLyhbXlxcc10qXFwuZ2lnKS9nLCBwcmVmaXggKyAnICQxJyk7XHJcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpIGFzIGFueTtcclxuICAgIHN0eWxlWyd0eXBlJ10gPSAndGV4dC9jc3MnO1xyXG4gICAgdmFyIHJ1bGVzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGVzKTtcclxuICAgIGlmIChzdHlsZVsnc3R5bGVTaGVldCddKSB7XHJcbiAgICAgICAgaWYgKHJ1bGVzTm9kZVsndmFsdWUnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN0eWxlWydzdHlsZVNoZWV0J10uY3NzVGV4dCA9IHJ1bGVzTm9kZVsndmFsdWUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHlsZVsnc3R5bGVTaGVldCddLmNzc1RleHQgPSBydWxlc05vZGUubm9kZVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQocnVsZXNOb2RlKTtcclxuICAgIH1cclxuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKTtcclxuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIChoZWFkLmxlbmd0aCA+IDAgPyBoZWFkWzBdIDogYm9keSkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZENTUyB9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLlNpbXBsZVNoYXJlL2FwcC9TaW1wbGVTaGFyZVBsdWdpbjAnO1xyXG5cclxudmFyIGFyUHJvdmlkZXJzVGVtcDogc3RyaW5nW10gPSAnRmFjZWJvb2ssVHdpdHRlcixHb29nbGUrLE1pY3Jvc29mdCxMaW5rZWRJbixEaWdnLFN0dW1ibGVVcG9uLEh5dmVzLEJhaWR1LEdvb2dsZSBCb29rbWFya3MsU2t5cm9jayxRUSxTaW5hLEthaXhpbixSZW5yZW4sVlpOZXQsRnJpZW5kRmVlZCxWS29udGFrdGUsU3BpY2V3b3JrcyxWaWFkZW8sbmsucGwsWGluZyxUdWVudGksUmVkZGl0LEZvcm1zcHJpbmcsQm94Lm5ldCxUdW1ibHIsUGludGVyZXN0LFBsYXhvLFRlY2hub3JhdGksRmF2ZXMsTmV3c3ZpbmUsRmFyayxCaXQubHksSGF0ZW5hLERvdWJhbixPZG5va2xhc3NuaWtpLEFtYXpvbixHbWFpbCxOZXRMb2csRXZlcm5vdGUsQU9MIE1haWwsQ3VycmVudCBUVixZYXJkYmFya2VyLEJsaW5rTGlzdCxEaWlnbyxEcm9wSmFjayxTZWduYWxvLExpbmthR29HbyxLYWJvb2RsZSxTa2ltYml0LFdoYXRzYXBwJy5zcGxpdChcclxuICAgICcsJyxcclxuKTtcclxudmFyIGFyRXhwbGljaXRQcm92aWRlcnNUZW1wOiBzdHJpbmdbXSA9IFwiMTAwemFrbGFkb2ssQTEtV2VibWFya3MsQWRpZm5pLEFlcm8sQUlNIFNoYXJlLEFtZW4gTWUhLEFydG8sQXZpYXJ5wqBDYXB0dXJlLEJpelN1Z2FyLEJsaXAsQmxvZ21hcmtzLEJvYnJkb2JyLEJvbnpvQm94LEJvcmRvbSxCcmFpbmlmeSxCdWRkeU1hcmtzLENhbXlvbyxDYXJlMixDaXJpcCxDaXRlVUxpa2UsQ2xhc3NpY2FsUGxhY2UsQ2xpY2them9vLENvbGl2aWEuZGUsQ29ubm90ZWEsQ09TTWlRLERlc2lnbkJ1bXAsRGVzaWdubW9vLERpZ2dpdGEsRGlnbG9nLERpZ28sRGlpZ28sRGlwZGl2ZSxEb01lbGhvcixEb293ZXIsRG9zdGksRG90TmV0S2lja3MsRHpvbmUsRWRlbGlnaHQsZUt1ZG9zLGVMZXJ0IEdhZGdldCxFbWJhcmtvbnMsZXVDbGlxdWVpLEZhYnVsb3VzbHk0MCxGYXJraW5kYSxGQVZhYmxlLEZhdm9yaXR1cyxGbG9zcy5wcm8sRm5ld3MsRnJlc3F1aSxmdW5QLGZ3aXNwLEdhYmJyLEdhY2V0aWxsYSxHYW1lc04sR2x1dlNuYXAsR29vZ2xlwqBSZWFkZXIsR3JhdmVlLEdydW1wZXIsSGFiZXIuZ2VuLnRyLEhhY2tlciBOZXdzLEhhZGFzaCBIb3QsSGF0ZW5hLEhhemFya29yLEhlZGdlaG9ncy5uZXQsSGVsbG9UeHQsSEVNaURFTWksSGlwc3RyLEhpdG1hcmtzLEhvdCBCb29rbWFyayxIb3RrbGl4LEhUTUzCoFZhbGlkYXRvcixJZGVudGkuY2EsSW5zdGFwYXBlcixJbnZlc3RvckxpbmtzLEphbWVzcG90LEp1bXB0YWdzLEthZXZ1cixLaVJUU1ksS2xlZHksa29vcm5rLEt1ZG9zLExhYWlraXQsTGlicmVyaW8sTGluayBOaW5qYSxMaW5rdWouY3osTGl2ZWZhdm9yaXMsTHVuY2guY29tLE1lY2NobyxtZWluVlosTWVtb3JpLnJ1LE1lbmVhbWUsTWluZGJvZHlncmVlbixNeWxpbmt2YXVsdCxONEcsTmV0dm91eixOdWppaixPS05PdGl6aWUsT25ldmlldyxPc21vc3VzLE95eWxhLFBERiBPbmxpbmUsUGltcFRoaXNCbG9nLFBpbmcuZm0sUGxhbnlwdXMsUGx1cmssUG9sbGFkaXVtLFBvc3Rlcm91cyxQdXNoYSxRdWFudGNhc3QsUmVhZCBJdCBMYXRlcixTY29vcC5hdCxTZWtvbWFuLFNoYXZlaCxTaGUgVG9sZCBNZSxTbWFrIE5ld3MsU29kYUhlYWQsU29uaWNvLFNwZWVkdGlsZSxzcHJpbmdwYWQsU3BydXplcixTdGFydGFpZCxTdGFydGxhcCxTdHJhbmRzLHN0dWRpVlosU3R1ZmZwaXQsU3R1bXBlZGlhLFN0eWxlaGl2ZSxTdXJmcGVvcGxlLFN2ZWpvLFN5bWJhbG9vLFRhZ3phLFRlbGxNeVBvbGl0aWNpYW4sVGhpc05leHQsVGlwJ2QsVHVsaW5xLFR1c3VsLFZpYWRlbyxWaXJiLFZ5b29tLFdob2lzwqBMb29rdXAsV2luZHnCoENpdGl6ZW4sV2lyZUZhbixXb3JpbyxXb3ZyZSxXeWtvcCxZYW1tZXIsWWF6emVtLFlpZ2csWW9vbGluayxZb3J1bWN1eXVtLFlvdWJvb2ttYXJrcyxZb3VNb2IsTWl4aSxOYXZlcixXYW5lbG9cIi5zcGxpdChcclxuICAgICcsJyxcclxuKTtcclxudmFyIGFyRXhwbGljaXRCb29rbWFya3NXaXRoSWNvbnM6IHN0cmluZ1tdID0gJ21peGksbmF2ZXIsaGF0ZW5hJy5zcGxpdCgnLCcpO1xyXG52YXIgd2FzQ1NTSW5qZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuY2xhc3MgQm9va21hcmtQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBpY29uVVJMOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbW9iaWxlSWNvblVSTDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcsIHB1YmxpYyBpc0V4cGxpY2l0OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGRpc3BsYXlOYW1lXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvIS9nLCAnJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCAncGx1cycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCdNaWNyb3NvZnQnLCAnbWVzc2VuZ2VyJylcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZS5yZXBsYWNlKCdHb29nbGUrJywgJ0dvb2dsZScpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0V4cGxpY2l0ICYmIGdpZ3lhLnV0aWxzLmFycmF5LmluZGV4T2YoYXJFeHBsaWNpdEJvb2ttYXJrc1dpdGhJY29ucywgdGhpcy5pZCkgPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uVVJMID0gJy9ncy9pL1NpbXBsZVNoYXJlL2RlZmF1bHRCTVNJY29uLnBuZyc7XHJcbiAgICAgICAgICAgIHRoaXMubW9iaWxlSWNvblVSTCA9ICcvZ3MvaS9TaW1wbGVTaGFyZS9kZWZhdWx0Qk1TSWNvbl8zNS5wbmcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvblVSTCA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL1NpbXBsZVNoYXJlLycgKyB0aGlzLmlkICsgJy5wbmcnKTtcclxuICAgICAgICAgICAgdGhpcy5tb2JpbGVJY29uVVJMID0gZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvU2ltcGxlU2hhcmUvJyArIHRoaXMuaWQgKyAnXzM1LnBuZycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jbGFzcyBCb29rbWFya1Byb3ZpZGVycyB7XHJcbiAgICBzdGF0aWMgb1Byb3ZpZGVyc0hhc2g6IE9iamVjdCA9IHt9O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQcm92aWRlcihzUHJvdmlkZXI6IHN0cmluZyk6IEJvb2ttYXJrUHJvdmlkZXIge1xyXG4gICAgICAgIHZhciBpZDogc3RyaW5nID0gc1Byb3ZpZGVyXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvIS9nLCAnJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCAncGx1cycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCdNaWNyb3NvZnQnLCAnbWVzc2VuZ2VyJylcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIEJvb2ttYXJrUHJvdmlkZXJzLm9Qcm92aWRlcnNIYXNoW2lkXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJvdmlkZXJzKGVuYWJsZWRQcm92aWRlcnM6IHN0cmluZyA9ICcqJywgZGlzYWJsZWRQcm92aWRlcnM6IHN0cmluZyA9ICcnKTogQm9va21hcmtQcm92aWRlcltdIHtcclxuICAgICAgICB2YXIgYXJQcm92aWRlcnM6IEJvb2ttYXJrUHJvdmlkZXJbXSA9IFtdO1xyXG4gICAgICAgIHZhciBhckVuYWJsZWRQcm92aWRlcnM6IHN0cmluZ1tdID0gZW5hYmxlZFByb3ZpZGVyc1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvIC9nLCAnJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyEvZywgJycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCsvZywgJ3BsdXMnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgnTWljcm9zb2Z0JywgJ21lc3NlbmdlcicpXHJcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIC5zcGxpdCgnLCcpO1xyXG4gICAgICAgIHZhciBhckRpc2FibGVkUHJvdmlkZXJzOiBzdHJpbmdbXSA9IGRpc2FibGVkUHJvdmlkZXJzXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvIS9nLCAnJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCAncGx1cycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCdNaWNyb3NvZnQnLCAnbWVzc2VuZ2VyJylcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJFbmFibGVkUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBzUHJvdmlkZXI6IHN0cmluZyA9IGFyRW5hYmxlZFByb3ZpZGVyc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFzUHJvdmlkZXIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoc1Byb3ZpZGVyID09ICcqJykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYm9va21hcmtJZCBpbiBCb29rbWFya1Byb3ZpZGVycy5vUHJvdmlkZXJzSGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBib29rbWFya1Byb3ZpZGVyOiBCb29rbWFya1Byb3ZpZGVyID0gQm9va21hcmtQcm92aWRlcnMub1Byb3ZpZGVyc0hhc2hbYm9va21hcmtJZF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhYm9va21hcmtQcm92aWRlci5pc0V4cGxpY2l0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmFycmF5LmluZGV4T2YoYXJFbmFibGVkUHJvdmlkZXJzLCBib29rbWFya0lkKSA9PSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5hcnJheS5pbmRleE9mKGFyRGlzYWJsZWRQcm92aWRlcnMsIGJvb2ttYXJrSWQpID09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyUHJvdmlkZXJzLnB1c2goYm9va21hcmtQcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyOiBCb29rbWFya1Byb3ZpZGVyID0gQm9va21hcmtQcm92aWRlcnMuZ2V0UHJvdmlkZXIoc1Byb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm92aWRlciAmJiBnaWd5YS51dGlscy5hcnJheS5pbmRleE9mKGFyRGlzYWJsZWRQcm92aWRlcnMsIHNQcm92aWRlcikgPT0gLTEpIGFyUHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXJQcm92aWRlcnM7XHJcbiAgICB9XHJcbn1cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBhclByb3ZpZGVyc1RlbXAubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBib29rbWFyazogQm9va21hcmtQcm92aWRlciA9IG5ldyBCb29rbWFya1Byb3ZpZGVyKGFyUHJvdmlkZXJzVGVtcFtpXSwgZmFsc2UpO1xyXG4gICAgQm9va21hcmtQcm92aWRlcnMub1Byb3ZpZGVyc0hhc2hbYm9va21hcmsuaWRdID0gYm9va21hcms7XHJcbn1cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBhckV4cGxpY2l0UHJvdmlkZXJzVGVtcC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGJvb2ttYXJrOiBCb29rbWFya1Byb3ZpZGVyID0gbmV3IEJvb2ttYXJrUHJvdmlkZXIoYXJFeHBsaWNpdFByb3ZpZGVyc1RlbXBbaV0sIHRydWUpO1xyXG4gICAgQm9va21hcmtQcm92aWRlcnMub1Byb3ZpZGVyc0hhc2hbYm9va21hcmsuaWRdID0gYm9va21hcms7XHJcbn1cclxuY2xhc3MgU2ltcGxlU2hhcmVQbHVnaW4ge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5qZWN0ZWRDU1M6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0Q1NTOiBzdHJpbmcgPSBbXHJcbiAgICAgICAgJy5naWctc2ltcGxlU2hhcmVVSSAqLCBkaXYuZ2lnLXNpbXBsZVNoYXJlVUksIHNwYW4uZ2lnLXNpbXBsZVNoYXJlVUksIC5naWctc2ltcGxlU2hhcmVVSSBzcGFuLCAuZ2lnLXNpbXBsZVNoYXJlVUkgYTpob3ZlciwgLmdpZy1zaW1wbGVTaGFyZVVJIGE6dmlzaXRlZCwgLmdpZy1zaW1wbGVTaGFyZVVJIGE6bGluaywgLmdpZy1zaW1wbGVTaGFyZVVJIGE6YWN0aXZlIHsnLFxyXG4gICAgICAgICdub25lO3RleHQtYWxpZ246bGVmdDtmb250LWZhbWlseTphcmlhbDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MTFweDtib3JkZXI6bm9uZTsgcGFkZGluZzowcHg7bWFyZ2luOjBweDtjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmF1dG87ZmxvYXQ6bm9uZTstbW96LWJvcmRlci1yYWRpdXM6MDtib3JkZXItcmFkaXVzOjA7bGluZS1oZWlnaHQ6bm9ybWFsOycsXHJcbiAgICAgICAgJ30nLFxyXG4gICAgXS5qb2luKCcnKTtcclxuICAgIHByaXZhdGUgc3RhdGljIG5vbk1vYmlsZUNTUzogc3RyaW5nID0gW1xyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUkge2JvcmRlcjogNXB4IHNvbGlkICM4NTg1ODU7IGJvcmRlci1yYWRpdXM6IDVweDt9JyxcclxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWlubmVyIHtib3JkZXI6IDFweCBzb2xpZCAjNjM2MzYzOyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGfScsXHJcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1jYXB0aW9uIHtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMEUwRTA7IGhlaWdodDoxOXB4O3BhZGRpbmctbGVmdDogNXB4O30nLFxyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktY2FwdGlvbiwgZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWNhcHRpb24tdGV4dCB7Zm9udC13ZWlnaHQ6IGJvbGQ7YmFja2dyb3VuZC1jb2xvcjojRjdGN0Y3OyBjb2xvcjojNTU1NTU1O2xpbmUtaGVpZ2h0OjE5cHg7fScsXHJcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1jYXB0aW9uLXRleHQge2Zsb2F0OmxlZnQ7fScsXHJcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1idXR0b24ge3dpZHRoOiAxMTlweDsgbWFyZ2luOiAwIDVweCA3cHggMDsgIGhlaWdodDoxNnB4OyBjdXJzb3I6cG9pbnRlcjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyAqZGlzcGxheTppbmxpbmU7IHpvb206MTsgfScsXHJcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1idXR0b24taW5uZXIge2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBsZWZ0O3BhZGRpbmctbGVmdDogMjBweDtsaW5lLWhlaWdodDoxNnB4O2hlaWdodDoxNnB4O30nLFxyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktY29udGVudCB7bGluZS1oZWlnaHQ6MDtwYWRkaW5nOiA3cHggMTBweCAwfScsXHJcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1idXR0b246aG92ZXIge29wYWNpdHk6IDAuN30nLFxyXG4gICAgICAgICdzcGFuLmdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvblRleHQtZmFjZWJvb2ssIHNwYW4uZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uVGV4dC10d2l0dGVyIHtmb250LXdlaWdodDogYm9sZDt9JyxcclxuICAgICAgICAnc3Bhbi5naWctc2ltcGxlU2hhcmVVSS1idXR0b25UZXh0IHtsaW5lLWhlaWdodDoxNnB4O30nLFxyXG4gICAgICAgIFwiZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWNsb3NlQnV0dG9uIHtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7Y2VudGVyO2Zsb2F0OnJpZ2h0O2N1cnNvcjpwb2ludGVyO21hcmdpbjogMCA0cHg7d2lkdGg6N3B4O2hlaWdodDoxOXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrOypkaXNwbGF5OmlubGluZTsgem9vbToxO2JhY2tncm91bmQtaW1hZ2U6IHVybCgnXCIgK1xyXG4gICAgICAgICAgICBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9TaGFyZS9NaW5pL0RpYWxvZy9EaWFsb2dfQ2xvc2UucG5nJykgK1xyXG4gICAgICAgICAgICBcIicpfVwiLFxyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktcG9zdFNoYXJlLWNvbm5lY3RCb2R5VGV4dCB7Y29sb3I6ICM1NTU1NTU7Zm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiBib2xkO2hlaWdodDogMThweDttYXJnaW46IDIwcHggMjBweCAxMHB4O292ZXJmbG93OiBoaWRkZW47dGV4dC1hbGlnbjogY2VudGVyO30nLFxyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktcG9zdFNoYXJlLW5ldmVyU2hvd0xpbmsge21hcmdpbi10b3A6IDQwcHg7Y29sb3I6ICMwMDg2RjE7Y3Vyc29yOiBwb2ludGVyO2ZvbnQtc2l6ZTogMTBweDttYXJnaW4tYm90dG9tOiA0cHg7dGV4dC1hbGlnbjogY2VudGVyO30nLFxyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktcG9zdFNoYXJlLWNvbm5lY3RCdXR0b24ge2N1cnNvcjogcG9pbnRlcjt3aWR0aDogMjEycHg7IGhlaWdodDogMzBweDtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7bWFyZ2luOiAwIGF1dG87YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyO30nLFxyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktcG9zdFNoYXJlLWNvbm5lY3RCdXR0b246aG92ZXIge29wYWNpdHk6IDAuN30nLFxyXG4gICAgXS5qb2luKCcnKTtcclxuICAgIHByaXZhdGUgc3RhdGljIG1vYmlsZUNTUzogc3RyaW5nID0gW1xyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUkgKiB7Zm9udC1zaXplOiAxNnB4Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDpub25lOyAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZn0nLFxyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUkge2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTt9JyxcclxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWlubmVyIHt9JyxcclxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWNhcHRpb24ge3BhZGRpbmc6IDRweCAwO3RleHQtYWxpZ246IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogIzM3MzczNzsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICNjYmNiY2J9JyxcclxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvbiB7JyxcclxuICAgICAgICBnaWd5YS5sb2NhbEluZm8uaXNJT1MgPyAnLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47LXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMDstd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApOycgOiAnJyxcclxuICAgICAgICAnbGluZS1oZWlnaHQ6MHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjOyBib3JkZXItcmFkaXVzOiA1cHg7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOiAxMzlweDsgbWFyZ2luOiA4cHggNnB4IDA7IG92ZXJmbG93OmhpZGRlbjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyAnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCNmZmZmZmYpLCBjb2xvci1zdG9wKDEwMCUsI2VkZWRlZCkpOycsXHJcbiAgICAgICAgJ2JhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwjZWRlZGVkIDEwMCUpOycsXHJcbiAgICAgICAgJ2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjZmZmZmZmIDAlLCNlZGVkZWQgMTAwJSk7JyxcclxuICAgICAgICAnfScsXHJcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1idXR0b24tdG91Y2hkb3duIHsnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCM3Nzc3NzcpLCBjb2xvci1zdG9wKDEwMCUsIzVlNWU1ZSkpOycsXHJcbiAgICAgICAgJ2JhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzc3Nzc3NyAwJSwjNWU1ZTVlIDEwMCUpOycsXHJcbiAgICAgICAgJ2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjNzc3Nzc3IDAlLCM1ZTVlNWUgMTAwJSk7JyxcclxuICAgICAgICAnfScsXHJcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1idXR0b24tdG91Y2hkb3duIC5naWctc2ltcGxlU2hhcmVVSS1idXR0b25UZXh0IHtjb2xvcjogI0ZGRkZGRjt9JyxcclxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvbi1pbm5lciB7Zm9udC1zaXplOiAxNnB4OyBjb2xvcjogIzMzMzMzMzsgcGFkZGluZy1sZWZ0OiA0NXB4O2xpbmUtaGVpZ2h0OjE1cHg7ZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246bWlkZGxlOyBoZWlnaHQ6IDQ1cHg7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246NXB4IGNlbnRlcn0nLFxyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktY29udGVudC1jb250YWluZXIge30nLFxyXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktY29udGVudCB7JyxcclxuICAgICAgICBnaWd5YS5sb2NhbEluZm8uaXNJT1NcclxuICAgICAgICAgICAgPyAnLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47LXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMDstd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoOyBvdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoJ1xyXG4gICAgICAgICAgICA6ICcnLFxyXG4gICAgICAgICdsaW5lLWhlaWdodDowO292ZXJmbG93OnNjcm9sbDt0ZXh0LWFsaWduOmNlbnRlcjt9JyxcclxuICAgICAgICAnc3Bhbi5naWctc2ltcGxlU2hhcmVVSS1idXR0b25UZXh0LWZhY2Vib29rLCBzcGFuLmdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvblRleHQtdHdpdHRlciB7Zm9udC13ZWlnaHQ6IGJvbGQ7fScsXHJcbiAgICBdLmpvaW4oJycpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdGVtcGxhdGVzOiBPYmplY3QgPSB7XHJcbiAgICAgICAgbW9iaWxlQ29udGFpbmVyOiBbXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXNpbXBsZVNoYXJlVUktaW5uZXJcIj4nLFxyXG4gICAgICAgICAgICAnJGNhcHRpb24nLFxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWNvbnRlbnQtY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWNvbnRlbnRcIj48L2Rpdj48L2Rpdj4nLFxyXG4gICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICBdLmpvaW4oJycpLFxyXG4gICAgICAgIG1vYmlsZUJvb2ttYXJrQnV0dG9uOiAnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvblwiPjxkaXYgY2xhc3M9XCJnaWctc2ltcGxlU2hhcmVVSS1idXR0b24taW5uZXJcIj4kYnV0dG9uQ29udGVudDwvZGl2PjwvZGl2PicsXHJcbiAgICAgICAgbW9iaWxlQm9va21hcmtCdXR0b25Db250ZW50OiAnPHNwYW4gc3R5bGU9XCIke2J1dHRvblRleHRDU1N9XCIgY2xhc3M9XCIke2J1dHRvblRleHRDbGFzc05hbWV9XCI+JHtkaXNwbGF5TmFtZX08L3NwYW4+JyxcclxuICAgICAgICBtb2JpbGVDYXB0aW9uOiAnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWNhcHRpb25cIiBpZD1cImdpZy1zaW1wbGVTaGFyZVVJLWNhcHRpb24tdGV4dC0kaWRcIj4kY2FwdGlvblRleHQ8L2Rpdj4nLFxyXG5cclxuICAgICAgICBjb250YWluZXI6IFsnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWlubmVyXCI+JywgJyRjYXB0aW9uJywgJzxkaXYgY2xhc3M9XCJnaWctc2ltcGxlU2hhcmVVSS1jb250ZW50XCI+PC9kaXY+JywgJzwvZGl2PiddLmpvaW4oJycpLFxyXG5cclxuICAgICAgICBjYXB0aW9uOlxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWNhcHRpb25cIj48ZGl2IGNsYXNzPVwiZ2lnLXNpbXBsZVNoYXJlVUktY2FwdGlvbi10ZXh0XCIgaWQ9XCJnaWctc2ltcGxlU2hhcmVVSS1jYXB0aW9uLXRleHQtJGlkXCI+JGNhcHRpb25UZXh0PC9kaXY+PGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWNsb3NlQnV0dG9uXCIgYXJpYS1sYWJlbD1cIiRjbG9zZVRleHRcIj48L2Rpdj48L2Rpdj4nLFxyXG4gICAgICAgIGJvb2ttYXJrQnV0dG9uOiAnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvblwiPjxkaXYgY2xhc3M9XCJnaWctc2ltcGxlU2hhcmVVSS1idXR0b24taW5uZXJcIj4kYnV0dG9uQ29udGVudDwvZGl2PjwvZGl2PicsXHJcbiAgICAgICAgYm9va21hcmtCdXR0b25Db250ZW50OiAnPHNwYW4gc3R5bGU9XCIke2J1dHRvblRleHRDU1N9XCIgY2xhc3M9XCIke2J1dHRvblRleHRDbGFzc05hbWV9XCI+JHtkaXNwbGF5TmFtZX08L3NwYW4+JyxcclxuICAgICAgICAncG9zdFNoYXJlQWN0aW9uLWNvbm5lY3QnOiBbXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXNpbXBsZVNoYXJlVUktcG9zdFNoYXJlLWNvbm5lY3RCb2R5VGV4dFwiPiRib2R5PC9kaXY+JyxcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctc2ltcGxlU2hhcmVVSS1wb3N0U2hhcmUtY29ubmVjdEJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJGJ0blNyY1xcJylcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLXBvc3RTaGFyZS1uZXZlclNob3dMaW5rXCI+JG5ldmVyU2hvd1RleHQ8L2Rpdj4nLFxyXG4gICAgICAgIF0uam9pbignJyksXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBpbmplY3REZWZhdWx0Q1NTKHBhcmFtczogT2JqZWN0ID0ge30pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXdhc0NTU0luamVjdGVkKSB7XHJcbiAgICAgICAgICAgIHZhciBjc3MgPSBTaW1wbGVTaGFyZVBsdWdpbi5kZWZhdWx0Q1NTO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSB7XHJcbiAgICAgICAgICAgICAgICBjc3MgKz0gU2ltcGxlU2hhcmVQbHVnaW4ubW9iaWxlQ1NTO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3NzICs9IFNpbXBsZVNoYXJlUGx1Z2luLm5vbk1vYmlsZUNTUztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGRDU1MoY3NzLCBwYXJhbXNbJ2Nzc1ByZWZpeCddIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgIHdhc0NTU0luamVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgaXNNb2JpbGVVSTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgaXNEcmF3aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgY29udGVudENvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgcHJvdmlkZXJzOiBCb29rbWFya1Byb3ZpZGVyW107XHJcbiAgICBwcml2YXRlIGxhc3RQcm92aWRlclNob3duSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHVzZXI6IGFueTtcclxuICAgIHByaXZhdGUgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogT2JqZWN0LCBwcml2YXRlIHJlZlN0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy51bmlxdWVJRCA9IFN0cmluZyhEYXRlLm5vdygpKTtcclxuICAgICAgICB0aGlzLnByb3ZpZGVycyA9IEJvb2ttYXJrUHJvdmlkZXJzLmdldFByb3ZpZGVycyh0aGlzLnBhcmFtc1snbW9yZUVuYWJsZWRQcm92aWRlcnMnXSwgdGhpcy5wYXJhbXNbJ21vcmVEaXNhYmxlZFByb3ZpZGVycyddKTtcclxuICAgICAgICB2YXIgZGV2aWNlVHlwZSA9IHRoaXMucGFyYW1zWydkZXZpY2VUeXBlJ10gPyB0aGlzLnBhcmFtc1snZGV2aWNlVHlwZSddLnRvTG93ZXJDYXNlKCkgOiAnZGVza3RvcCc7XHJcbiAgICAgICAgdGhpcy5pc01vYmlsZVVJID0gZGV2aWNlVHlwZSA9PSAnbW9iaWxlJyB8fCAoZGV2aWNlVHlwZSA9PSAnYXV0bycgJiYgZ2lneWEubG9jYWxJbmZvLmlzTW9iaWxlKTtcclxuICAgICAgICB0aGlzLmluamVjdERlZmF1bHRDU1MoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuZ2V0Q29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5nZXRVc2VySW5mbyh0aGlzLnBhcmFtcywge1xyXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlczogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSByZXNbJ3VzZXInXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uQm9keU1vdXNlRG93bkRlbGVnYXRlID0gZSA9PiB0aGlzLm9uQm9keU1vdXNlRG93bihlKTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNlZG93bicsIHRoaXMub25Cb2R5TW91c2VEb3duRGVsZWdhdGUpO1xyXG4gICAgICAgIHRoaXMub25Cb2R5S2V5RG93bkRlbGVnYXRlID0gZSA9PiB0aGlzLm9uQm9keUtleURvd24oZSk7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5vbkJvZHlLZXlEb3duRGVsZWdhdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZERpYWxvZ0JhY2tMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdsb2FkJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRleHQodGV4dEtleTogc3RyaW5nLCByZXBsYWNlU3RyPzogc3RyaW5nLCB3aXRoU3RyPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGxhbmcgPSB0aGlzLnBhcmFtc1snbGFuZyddO1xyXG4gICAgICAgIHZhciBwbHVnaW4gPSAnZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuc2ltcGxlU2hhcmUuanMnO1xyXG4gICAgICAgIGlmIChsYW5nID09ICd0ZS1zdCcpIHJldHVybiAnVEVTVF8nICsgdGV4dEtleS5zdWJzdHJpbmcoMCwgMTApO1xyXG4gICAgICAgIGlmICghbGFuZykgbGFuZyA9ICdlbic7XHJcbiAgICAgICAgdmFyIHQgPSBnaWd5YVsnaTE4biddW3BsdWdpbl1bbGFuZ11bdGV4dEtleV07XHJcbiAgICAgICAgaWYgKHQgJiYgcmVwbGFjZVN0cikgdCA9IHQucmVwbGFjZShyZXBsYWNlU3RyLCB3aXRoU3RyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldENvbnRlbnRIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgaDogbnVtYmVyO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcclxuICAgICAgICAgICAgaCA9IGdpZ3lhLnV0aWxzLnZpZXdwb3J0LmdldElubmVyU2l6ZSgpLmggLSBnaWd5YS51dGlscy5ET00uZ2V0SFRNTFNpemUoU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydtb2JpbGVDYXB0aW9uJ10sIHRoaXMuY29udGFpbmVyKS5oO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGggPSB0aGlzLnBhcmFtc1snaGVpZ2h0J10gLSBnaWd5YS51dGlscy5ET00uZ2V0SFRNTFNpemUoU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydjYXB0aW9uJ10sIHRoaXMuY29udGFpbmVyKS5oO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0TWF4SXRlbXNUb1BlclBhZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgdzogbnVtYmVyID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgdmFyIGg6IG51bWJlciA9IHRoaXMuZ2V0Q29udGVudEhlaWdodCgpO1xyXG4gICAgICAgIHZhciBidXR0b25UZW1wbGF0ZTogc3RyaW5nID0gdGhpcy5pc01vYmlsZVVJID8gU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydtb2JpbGVCb29rbWFya0J1dHRvbiddIDogU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydib29rbWFya0J1dHRvbiddO1xyXG4gICAgICAgIHZhciBmYWtlSXRlbUhUTUw6IHN0cmluZyA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKGJ1dHRvblRlbXBsYXRlLCB7IHN0eWxlT3ZlcnJpZGU6ICcnIH0pO1xyXG4gICAgICAgIHZhciBpdGVtU2l6ZSA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRIVE1MU2l6ZShmYWtlSXRlbUhUTUwsIHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB2YXIgaXRlbXNQZXJSb3c6IG51bWJlciA9IE1hdGguZmxvb3IodyAvIGl0ZW1TaXplLncpO1xyXG4gICAgICAgIHZhciBpdGVtc1BlckNvbDogbnVtYmVyID0gTWF0aC5mbG9vcihoIC8gaXRlbVNpemUuaCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIGl0ZW1zUGVyQ29sICo9IDM7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zUGVyUm93ICogaXRlbXNQZXJDb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZHJhd05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNEcmF3aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1zVG9TaG93OiBudW1iZXIgPSBNYXRoLm1pbih0aGlzLmdldE1heEl0ZW1zVG9QZXJQYWdlKCksIHRoaXMucHJvdmlkZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGFzdFByb3ZpZGVyU2hvd25JbmRleDsgaSA8IHRoaXMucHJvdmlkZXJzLmxlbmd0aCAmJiBpIC0gdGhpcy5sYXN0UHJvdmlkZXJTaG93bkluZGV4IDwgaXRlbXNUb1Nob3c7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcHJvdmlkZXI6IEJvb2ttYXJrUHJvdmlkZXIgPSB0aGlzLnByb3ZpZGVyc1tpXTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbkNvbnRlbnRUZW1wbGF0ZTogc3RyaW5nID0gdGhpcy5pc01vYmlsZVVJXHJcbiAgICAgICAgICAgICAgICA/IFNpbXBsZVNoYXJlUGx1Z2luLnRlbXBsYXRlc1snbW9iaWxlQm9va21hcmtCdXR0b25Db250ZW50J11cclxuICAgICAgICAgICAgICAgIDogU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydib29rbWFya0J1dHRvbkNvbnRlbnQnXTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvblRleHRDbGFzc05hbWUgPSAnZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uVGV4dCBnaWctc2ltcGxlU2hhcmVVSS1idXR0b25UZXh0LScgKyBwcm92aWRlci5pZDtcclxuICAgICAgICAgICAgdmFyIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSB0aGlzLmdldFRleHQocHJvdmlkZXIuaWQpIHx8IHByb3ZpZGVyLmRpc3BsYXlOYW1lO1xyXG5cclxuICAgICAgICAgICAgdmFyIGJ1dHRvbkNvbnRlbnQgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChidXR0b25Db250ZW50VGVtcGxhdGUsIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHRDU1M6ICcnLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dENsYXNzTmFtZTogYnV0dG9uVGV4dENsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0V2lkdGg6IG51bWJlciA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRIVE1MU2l6ZShidXR0b25Db250ZW50LCB0aGlzLmNvbnRhaW5lcikudztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXhUZXh0V2lkdGg6IG51bWJlciA9IDg1O1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvbnRTaXplOiBudW1iZXIgPSAxNjtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodGV4dFdpZHRoID4gbWF4VGV4dFdpZHRoICYmIGZvbnRTaXplID49IDE0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGVudCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKGJ1dHRvbkNvbnRlbnRUZW1wbGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0Q1NTOiAnZm9udC1zaXplOicgKyBmb250U2l6ZS0tICsgJ3B4OycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHRDbGFzc05hbWU6IGJ1dHRvblRleHRDbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm92aWRlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0V2lkdGggPSBnaWd5YS51dGlscy5ET00uZ2V0SFRNTFNpemUoYnV0dG9uQ29udGVudCwgdGhpcy5jb250YWluZXIpLnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGJhY2tncm91bmRJbWFnZSA9IHRoaXMuaXNNb2JpbGVVSSA/IHByb3ZpZGVyLm1vYmlsZUljb25VUkwgOiBwcm92aWRlci5pY29uVVJMO1xyXG4gICAgICAgICAgICB2YXIgaXRlbTogT2JqZWN0ID0gZ2lneWEudXRpbHMub2JqZWN0Lm1lcmdlKFtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzW2ldLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRlbnQ6IGJ1dHRvbkNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvblRlbXBsYXRlOiBzdHJpbmcgPSB0aGlzLmlzTW9iaWxlVUkgPyBTaW1wbGVTaGFyZVBsdWdpbi50ZW1wbGF0ZXNbJ21vYmlsZUJvb2ttYXJrQnV0dG9uJ10gOiBTaW1wbGVTaGFyZVBsdWdpbi50ZW1wbGF0ZXNbJ2Jvb2ttYXJrQnV0dG9uJ107XHJcbiAgICAgICAgICAgIHZhciBzQnV0dG9uQ29udGVudDogc3RyaW5nID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoYnV0dG9uVGVtcGxhdGUsIGl0ZW0pO1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkRpdi5pbm5lckhUTUwgPSBzQnV0dG9uQ29udGVudDtcclxuICAgICAgICAgICAgYnV0dG9uRGl2ID0gYnV0dG9uRGl2LmZpcnN0Q2hpbGQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoJ3Byb3ZpZGVyJywgcHJvdmlkZXIuaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyhidXR0b25EaXYsICdnaWctc2ltcGxlU2hhcmVVSS1idXR0b24taW5uZXInKVswXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBiYWNrZ3JvdW5kSW1hZ2UgKyBcIicpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRzVG9CdXR0b24oYnV0dG9uRGl2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFByb3ZpZGVyU2hvd25JbmRleCA9IGk7XHJcbiAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRFdmVudHNUb0J1dHRvbihidXR0b25EaXY6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihidXR0b25EaXYsICd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdnaWctc2ltcGxlU2hhcmVVSS1idXR0b24gZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uLXRvdWNoZG93bic7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihidXR0b25EaXYsICd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2dpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvbic7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQnV0dG9uU3VibWl0TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBidXR0b25EaXYsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbkRpdi5jbGFzc05hbWUuaW5kZXhPZigndG91Y2hkb3duJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblByb3ZpZGVyQ2xpY2soYnV0dG9uRGl2LmdldEF0dHJpYnV0ZSgncHJvdmlkZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkRpdi5jbGFzc05hbWUgPSAnZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uJztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAndG91Y2hlbmQnLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRCdXR0b25TdWJtaXRMaXN0ZW5lcihidXR0b25EaXYsICgpID0+IHRoaXMub25Qcm92aWRlckNsaWNrKGJ1dHRvbkRpdi5nZXRBdHRyaWJ1dGUoJ3Byb3ZpZGVyJykpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZHJhdygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNNb2JpbGVVSSkgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBgZ2lnLXNpbXBsZVNoYXJlVUktY2FwdGlvbi10ZXh0LSR7dGhpcy51bmlxdWVJRH1gKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdnaWctc2ltcGxlU2hhcmVVSSc7XHJcblxyXG4gICAgICAgIHZhciB0ZW1wbGF0ZTogc3RyaW5nID0gdGhpcy5pc01vYmlsZVVJID8gU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydtb2JpbGVDb250YWluZXInXSA6IFNpbXBsZVNoYXJlUGx1Z2luLnRlbXBsYXRlc1snY29udGFpbmVyJ107XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlRmlsbGVyOiBPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIGNhcHRpb246IHRoaXMuaXNNb2JpbGVVSSA/IFNpbXBsZVNoYXJlUGx1Z2luLnRlbXBsYXRlc1snbW9iaWxlQ2FwdGlvbiddIDogU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydjYXB0aW9uJ10sXHJcbiAgICAgICAgICAgIGNhcHRpb25UZXh0OiB0aGlzLmdldFRleHQoJ3NoYXJlX3dpdGhfeW91cl9mcmllbmRzJyksXHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnVuaXF1ZUlELFxyXG4gICAgICAgICAgICBjbG9zZVRleHQ6ICcnLCAvLyBUT0RPOiBMb2NhbGl6ZWQgY2xvc2UgdGV4dC5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCB0ZW1wbGF0ZUZpbGxlcik7XHJcblxyXG4gICAgICAgIGlmICghZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0RmFsc2UodGhpcy5wYXJhbXNbJ3Nob3dFbWFpbEJ1dHRvbiddKSkge1xyXG4gICAgICAgICAgICB2YXIgZW1haWxQcm92aWRlcjogQm9va21hcmtQcm92aWRlciA9IG5ldyBCb29rbWFya1Byb3ZpZGVyKCdlbWFpbCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuc3BsaWNlKDEsIDAsIGVtYWlsUHJvdmlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICB2YXIgbWF4SXRlbXNQZXJQYWdlOiBudW1iZXIgPSB0aGlzLmdldE1heEl0ZW1zVG9QZXJQYWdlKCk7XHJcbiAgICAgICAgICAgIGlmICghZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0RmFsc2UodGhpcy5wYXJhbXNbJ3Nob3dNb3JlQnV0dG9uJ10pICYmIHRoaXMucHJvdmlkZXJzLmxlbmd0aCA+IG1heEl0ZW1zUGVyUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vcmVQcm92aWRlcjogQm9va21hcmtQcm92aWRlciA9IG5ldyBCb29rbWFya1Byb3ZpZGVyKCdtb3JlJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuc3BsaWNlKG1heEl0ZW1zUGVyUGFnZSAtIDEsIDAsIG1vcmVQcm92aWRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1zaW1wbGVTaGFyZVVJLWNvbnRlbnQnKVswXTtcclxuICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJICYmIHRoaXMuY29udGVudENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmNvbnRlbnRDb250YWluZXIsICdzY3JvbGwnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2xvYWQgbW9yZSBjb250ZW50IHdoZW4gc2Nyb2xsaW5nIGhhcyByZWFjaGVkIHRoZSBlbmQgbWludXMgb25lIHBhZ2VcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5pc0RyYXdpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuc2Nyb2xsVG9wICsgdGhpcy5jb250ZW50Q29udGFpbmVyLm9mZnNldEhlaWdodCA+PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jb250ZW50Q29udGFpbmVyLm9mZnNldEhlaWdodCAvIDJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd05leHRQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldENvbnRlbnRBcmVhKHRydWUpO1xyXG4gICAgICAgIHRoaXMuZHJhd05leHRQYWdlKCk7XHJcbiAgICAgICAgdmFyIGNsb3NlQnV0dG9uOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctc2ltcGxlU2hhcmVVSS1jbG9zZUJ1dHRvbicpWzBdO1xyXG4gICAgICAgIGlmIChjbG9zZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQnV0dG9uU3VibWl0TGlzdGVuZXIoY2xvc2VCdXR0b24sICgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaU9TNSB3b3JrYXJvdW5kIChvbmUgZmluZ2VyIHNjcm9sbCBzdG9wcGVkIHdvcmtpbmcpXHJcbiAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lPUyAmJiBnaWd5YS5sb2NhbEluZm8uaW9zVmVyc2lvbiA8PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5zdHlsZVsnd2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcnXSA9ICdhdXRvJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTW9iaWxlVUkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zWydzbmFwVG9FbGVtZW50SUQnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFwVG9FbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyYW1zWydzbmFwVG9FbGVtZW50SUQnXSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gZ2lneWEudXRpbHMubW91c2UuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChtb3VzZVBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IG1vdXNlUG9zLnkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBtb3VzZVBvcy54ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWZyZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lneWFfaWZyXycgKyB0aGlzLmNvbnRhaW5lci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlmcmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmVsLnN0eWxlLnRvcCA9IG1vdXNlUG9zLnkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJlbC5zdHlsZS5sZWZ0ID0gbW91c2VQb3MueCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Qcm92aWRlckNsaWNrKHByb3ZpZGVyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB2YXIgcGFyYW1zOiBPYmplY3QgPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUodGhpcy5wYXJhbXMsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICB2YXIgdXNlckFjdGlvbiA9IHRoaXMucGFyYW1zW3Byb3ZpZGVyICsgJ1VzZXJBY3Rpb24nXTtcclxuICAgICAgICBpZiAoIXVzZXJBY3Rpb24pIHVzZXJBY3Rpb24gPSB0aGlzLnBhcmFtc1sndXNlckFjdGlvbiddO1xyXG4gICAgICAgIHBhcmFtc1snaGlkZVNpZGViYXInXSA9IHRydWU7XHJcbiAgICAgICAgcGFyYW1zWydvcGVyYXRpb25Nb2RlJ10gPSAnbXVsdGlTZWxlY3QnO1xyXG4gICAgICAgIHBhcmFtc1snb25TZW5kRG9uZSddID0gdGhpcy5wYXJhbXNbJ29uU2VuZERvbmUnXTtcclxuICAgICAgICBpZiAocHJvdmlkZXIgPT0gJ2VtYWlsJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3ViamVjdCA9IHVzZXJBY3Rpb25bJ3RpdGxlJ10gfHwgJyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHVzZXJBY3Rpb25bJ2xpbmtCYWNrJ10gfHwgJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdtYWlsdG86P3RvPSZzdWJqZWN0PScgKyBzdWJqZWN0ICsgJyZib2R5PScgKyBib2R5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zWydpbml0aWFsVmlldyddID0gJ2VtYWlsJztcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbJ2NvbnRhaW5lcklEJ107XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbJ2NvbnRhaW5lcklEJ10gPSAnJztcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5zaG93U2hhcmVVSShwYXJhbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm92aWRlciA9PSAnbW9yZScpIHtcclxuICAgICAgICAgICAgcGFyYW1zWydpbml0aWFsVmlldyddID0gJ21vcmUnO1xyXG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zWydjb250YWluZXJJRCddO1xyXG4gICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuc2hvd1NoYXJlVUkocGFyYW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJhbXNbJ3Byb3ZpZGVyJ10gPSBwcm92aWRlcjtcclxuICAgICAgICAgICAgcGFyYW1zWyd1c2VyQWN0aW9uJ10gPSB1c2VyQWN0aW9uO1xyXG4gICAgICAgICAgICBwYXJhbXNbJ3Byb3ZpZGVyS2V5J10gPSB0aGlzLnBhcmFtc1twcm92aWRlciArICdLZXknXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtZWRpYUl0ZW1zID0gdXNlckFjdGlvblsnbWVkaWFJdGVtcyddO1xyXG4gICAgICAgICAgICB2YXIgbWVkaWE7XHJcbiAgICAgICAgICAgIGlmIChtZWRpYUl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IG1lZGlhSXRlbXMubGVuZ3RoOyB1KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVkaWFJdGVtID0gbWVkaWFJdGVtc1t1XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVkaWFJdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lZGlhSXRlbS50eXBlID09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhID0gbWVkaWFJdGVtLnNyYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZWRpYUl0ZW0udHlwZSA9PSAndmlkZW8nIHx8IG1lZGlhSXRlbS50eXBlID09ICdmbGFzaCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhID0gbWVkaWFJdGVtLnByZXZpZXdJbWFnZVVSTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtZWRpYSkgcGFyYW1zWyd0aHVtYm5haWxVUkwnXSA9IG1lZGlhO1xyXG4gICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUucG9zdEJvb2ttYXJrKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdzZW5kRG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTWVzc2FnZTogdXNlckFjdGlvblsndXNlck1lc3NhZ2UnXSxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRVUkw6IHVzZXJBY3Rpb25bJ2xpbmtCYWNrJ10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvUHJvdmlkZXIgPSBnaWd5YS5zb2NpYWxpemUuX2dldFByb3ZpZGVyQnlOYW1lKHByb3ZpZGVyKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICF0aGlzLmlzTW9iaWxlVUkgJiZcclxuICAgICAgICAgICAgdGhpcy51c2VyICYmXHJcbiAgICAgICAgICAgIHRoaXMudXNlci5pZGVudGl0aWVzICYmXHJcbiAgICAgICAgICAgICF0aGlzLnVzZXIuaWRlbnRpdGllc1twcm92aWRlcl0gJiZcclxuICAgICAgICAgICAgIWdpZ3lhLnV0aWxzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3N0U2hhcmVBY3Rpb25fJyArIHRoaXMucGFyYW1zWydBUElLZXknXSkgJiZcclxuICAgICAgICAgICAgb1Byb3ZpZGVyICYmXHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zWydzaW1wbGVTaGFyZUNvbmZpZyddICYmXHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zWydzaW1wbGVTaGFyZUNvbmZpZyddWydwb3N0U2hhcmVBY3Rpb24nXSA9PSAnY29ubmVjdCdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93QWZ0ZXJCb29rbWFya1VJKG9Qcm92aWRlciwgdGhpcy5wYXJhbXNbJ3NpbXBsZVNoYXJlQ29uZmlnJ10pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNlZG93bicsIHRoaXMub25Cb2R5TW91c2VEb3duRGVsZWdhdGUpO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMub25Cb2R5S2V5RG93bkRlbGVnYXRlKTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB0aGlzLm9uUmVzaXplRGVsZWdhdGUpO1xyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxEZWxlZ2F0ZSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgdmFyIGlmciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9pZnJfJyArIHRoaXMuY29udGFpbmVyLmlkKTtcclxuICAgICAgICBpZiAoaWZyKSBpZnIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpZnIpO1xyXG4gICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiAnY2xvc2UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcyxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc25hcFRvRWxlbWVudChlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWVsKSByZXR1cm47XHJcbiAgICAgICAgdmFyIHc6IG51bWJlciA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciBoOiBudW1iZXIgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgdmFyIGRzdCA9IHRoaXMuY29udGFpbmVyLnN0eWxlO1xyXG4gICAgICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICB2YXIgZGIgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgICAgICB2YXIgY2xpZW50SGVpZ2h0ID0gZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGlmIChjbGllbnRIZWlnaHQgPT0gMCkgY2xpZW50SGVpZ2h0ID0gZGIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRlLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmIChjbGllbnRXaWR0aCA9PSAwKSBjbGllbnRXaWR0aCA9IGRiLmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNjcmwgPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRTY3JvbGwoKTtcclxuICAgICAgICB2YXIgdnB0ID0gc2NybC50b3A7XHJcbiAgICAgICAgdmFyIHZwbCA9IHNjcmwubGVmdDtcclxuXHJcbiAgICAgICAgdmFyIG1pZGRsZVBvaW50VG9wID0gdnB0ICsgTWF0aC5mbG9vcihjbGllbnRIZWlnaHQgLyAyKTtcclxuICAgICAgICB2YXIgbWlkZGxlUG9pbnRMZWZ0ID0gdnBsICsgTWF0aC5mbG9vcihjbGllbnRXaWR0aCAvIDIpO1xyXG4gICAgICAgIHZhciBidG5Qb3MgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudFBvc2l0aW9uKGVsKTtcclxuICAgICAgICBpZiAoYnRuUG9zLnRvcCA+IG1pZGRsZVBvaW50VG9wKSB7XHJcbiAgICAgICAgICAgIGRzdC50b3AgPSBidG5Qb3MudG9wIC0gaCAtIDUgKyAncHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRzdC50b3AgPSBidG5Qb3MudG9wICsgZWwub2Zmc2V0SGVpZ2h0ICsgNSArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidG5Qb3MubGVmdCA+IG1pZGRsZVBvaW50TGVmdCkge1xyXG4gICAgICAgICAgICBkc3QubGVmdCA9IGJ0blBvcy5sZWZ0ICsgZWwub2Zmc2V0V2lkdGggLSB3ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkc3QubGVmdCA9IGJ0blBvcy5sZWZ0ICsgJ3B4JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpZnJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9pZnJfJyArIHRoaXMuY29udGFpbmVyLmlkKTtcclxuICAgICAgICBpZiAoaWZyZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZnJlbC5zdHlsZS50b3AgPSBkc3QudG9wO1xyXG4gICAgICAgICAgICBpZnJlbC5zdHlsZS5sZWZ0ID0gZHN0LmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0FmdGVyQm9va21hcmtVSShvUHJvdmlkZXI6IE9iamVjdCwgY29uZmlnOiBPYmplY3QpOiB2b2lkIHtcclxuICAgICAgICB2YXIgY2FwdGlvblRleHQ6IHN0cmluZyA9IGNvbmZpZ1sncG9zdFNoYXJlQ29ubmVjdENhcHRpb25UZXh0J10gfHwgdGhpcy5nZXRUZXh0KCd0aGFua3NfZm9yX3NoYXJpbmcnKTtcclxuICAgICAgICB2YXIgYm9keVRleHQ6IHN0cmluZyA9IGNvbmZpZ1sncG9zdFNoYXJlQ29ubmVjdEJvZHlUZXh0J10gfHwgJ1RvIG1ha2Ugc2hhcmluZyBldmVuIHNpbXBsZXInO1xyXG4gICAgICAgIHZhciBuZXZlclNob3d0ZXh0OiBzdHJpbmcgPSB0aGlzLmdldFRleHQoJ25ldmVyX3Nob3dfdGhpcycpO1xyXG4gICAgICAgIHZhciBidG5TcmM6IHN0cmluZyA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL0hUTUxMb2dpbi9TaWduSW5XaXRoLycgKyBvUHJvdmlkZXJbJ25hbWUnXSArICdfMzAuZ2lmJyk7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlOiBzdHJpbmcgPSBTaW1wbGVTaGFyZVBsdWdpbi50ZW1wbGF0ZXNbJ3Bvc3RTaGFyZUFjdGlvbi1jb25uZWN0J107XHJcblxyXG4gICAgICAgIHZhciBjYXB0aW9uOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctc2ltcGxlU2hhcmVVSS1jYXB0aW9uJylbMF07XHJcbiAgICAgICAgaWYgKGNhcHRpb24pIGNhcHRpb24uaW5uZXJIVE1MID0gY2FwdGlvblRleHQ7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgeyBib2R5OiBib2R5VGV4dCwgYnRuU3JjOiBidG5TcmMsIG5ldmVyU2hvd1RleHQ6IG5ldmVyU2hvd3RleHQgfSk7XHJcblxyXG4gICAgICAgIHZhciBidG5Db25uZWN0OiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250ZW50Q29udGFpbmVyLCAnZ2lnLXNpbXBsZVNoYXJlVUktcG9zdFNoYXJlLWNvbm5lY3RCdXR0b24nKVswXTtcclxuICAgICAgICB2YXIgbG5rTmV2ZXJTaG93OiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250ZW50Q29udGFpbmVyLCAnZ2lnLXNpbXBsZVNoYXJlVUktcG9zdFNoYXJlLW5ldmVyU2hvd0xpbmsnKVswXTtcclxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihidG5Db25uZWN0LCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5jb25uZWN0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGVyOiBvUHJvdmlkZXJbJ25hbWUnXSB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIobG5rTmV2ZXJTaG93LCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3N0U2hhcmVBY3Rpb25fJyArIHRoaXMucGFyYW1zWydBUElLZXknXSwgJ3RydWUnKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Cb2R5TW91c2VEb3duRGVsZWdhdGU6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBvbkJvZHlNb3VzZURvd24oZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBhO1xyXG4gICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgIGEgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKCFhKSBhID0gZS5zcmNFbGVtZW50O1xyXG4gICAgICAgICAgICB3aGlsZSAoYSAhPSBudWxsICYmIGEub2Zmc2V0UGFyZW50ICYmIGEgIT0gdGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGEgPSBhLm9mZnNldFBhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWEgfHwgYSAhPSB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Cb2R5S2V5RG93bkRlbGVnYXRlOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgb25Cb2R5S2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKChlLndoaWNoIHx8IGUua2V5Q29kZSkgPT0gMjcpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENvbnRlbnRBcmVhKGZpcnN0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSAmJiB0aGlzLmNvbnRlbnRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0WSwgc3RhcnRUb3BTY3JvbGw7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0Q29udGVudEhlaWdodCgpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxCb2R5VG9Db250ZW50ID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHRoaXMuY29udGFpbmVyLm9mZnNldExlZnQsIHRoaXMuY29udGFpbmVyLm9mZnNldFRvcCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5jb250ZW50Q29udGFpbmVyLCAndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IHNjcm9sbGluZyB0aGUgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WSA9IGV2ZW50Wyd0b3VjaGVzJ11bMF0ucGFnZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUb3BTY3JvbGwgPSB0aGlzLmNvbnRlbnRDb250YWluZXIuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRUb3BTY3JvbGwgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuc2Nyb2xsVG9wID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFRvcFNjcm9sbCArIHRoaXMuY29udGVudENvbnRhaW5lci5vZmZzZXRIZWlnaHQgPj0gdGhpcy5jb250ZW50Q29udGFpbmVyLnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuc2Nyb2xsVG9wID0gdGhpcy5jb250ZW50Q29udGFpbmVyLnNjcm9sbEhlaWdodCAtIHRoaXMuY29udGVudENvbnRhaW5lci5vZmZzZXRIZWlnaHQgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25SZXNpemVEZWxlZ2F0ZSA9ICgpID0+IHRoaXMub25SZXNpemUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TY3JvbGxEZWxlZ2F0ZSA9ICgpID0+IHRoaXMub25TY3JvbGwoKTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVEZWxlZ2F0ZSk7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsRGVsZWdhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5jb250ZW50Q29udGFpbmVyLCAndG91Y2htb3ZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwcmV2ZW50RGVmYXVsdCxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keVRvcFNjcm9sbCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5TGVmdFNjcm9sbCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudC5ib2R5LCAndG91Y2htb3ZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhib2R5TGVmdFNjcm9sbCwgYm9keVRvcFNjcm9sbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtc1snY29udGFpbmVySUQnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmFtc1snY29udGFpbmVySUQnXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGdpZ3lhLnV0aWxzLkRPTS5jcmVhdGVUb3BMZXZlbERpdigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLnBhcmFtc1snd2lkdGgnXSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLnBhcmFtc1snaGVpZ2h0J10gKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpZXdwb3J0U2l6ZSA9IGdpZ3lhLnV0aWxzLnZpZXdwb3J0LmdldElubmVyU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHZpZXdwb3J0U2l6ZS5oLnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzBweCc7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25SZXNpemVEZWxlZ2F0ZTogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIHZhciB2aWV3cG9ydFNpemUgPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRJbm5lclNpemUoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB2aWV3cG9ydFNpemUuaC50b1N0cmluZygpICsgJ3B4JztcclxuICAgICAgICBpZiAodGhpcy5jb250ZW50Q29udGFpbmVyKSB0aGlzLmNvbnRlbnRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRDb250ZW50SGVpZ2h0KCkgKyAncHgnO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh0aGlzLmNvbnRhaW5lci5vZmZzZXRMZWZ0LCB0aGlzLmNvbnRhaW5lci5vZmZzZXRUb3ApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblNjcm9sbERlbGVnYXRlOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgb25TY3JvbGwoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHRoaXMuY29udGFpbmVyLm9mZnNldExlZnQsIHRoaXMuY29udGFpbmVyLm9mZnNldFRvcCk7XHJcbiAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lPUykgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgfVxyXG59XHJcbmdpZ3lhLl8uVUkuYXR0YWNoUGx1Z2luKFNpbXBsZVNoYXJlUGx1Z2luLCAnc29jaWFsaXplJywgJ3NpbXBsZVNoYXJlJywgJ3Nob3dTaW1wbGVTaGFyZVVJJyk7XHJcbiIsImltcG9ydCAqIGFzIEdpZ3lhR2xvYmFsIGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLlNpbXBsZVNoYXJlL2FwcC9TaW1wbGVTaGFyZVBsdWdpbjAnO1xyXG5pbXBvcnQgJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLlNpbXBsZVNoYXJlL2FwcC9TaW1wbGVTaGFyZVBsdWdpbjEnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBnaWd5YTogYW55O1xyXG5pZiAoIWdpZ3lhLmdsb2JhbCkge1xyXG4gICAgZ2lneWEuZ2xvYmFsID0ge307XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuZ2xvYmFsLCBHaWd5YUdsb2JhbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=