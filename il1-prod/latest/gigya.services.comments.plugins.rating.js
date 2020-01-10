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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/comments/Gigya.Comments.RatingPlugin/app/index.ts");
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

/***/ "./src/comments/Gigya.Comments.RatingPlugin/app/CssResources.ts":
/*!**********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.RatingPlugin/app/CssResources.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.global = __webpack_require__(/*! ./css/global.css */ "./src/comments/Gigya.Comments.RatingPlugin/app/css/global.css");


/***/ }),

/***/ "./src/comments/Gigya.Comments.RatingPlugin/app/HtmlResources.ts":
/*!***********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.RatingPlugin/app/HtmlResources.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.addReviewButton = __webpack_require__(/*! ./html/addReviewButton.html */ "./src/comments/Gigya.Comments.RatingPlugin/app/html/addReviewButton.html");
exports.dimension = __webpack_require__(/*! ./html/dimension.html */ "./src/comments/Gigya.Comments.RatingPlugin/app/html/dimension.html");
exports.rating = __webpack_require__(/*! ./html/rating.html */ "./src/comments/Gigya.Comments.RatingPlugin/app/html/rating.html");
exports.readReviewsLink = __webpack_require__(/*! ./html/readReviewsLink.html */ "./src/comments/Gigya.Comments.RatingPlugin/app/html/readReviewsLink.html");
exports.stars = __webpack_require__(/*! ./html/stars.html */ "./src/comments/Gigya.Comments.RatingPlugin/app/html/stars.html");


/***/ }),

/***/ "./src/comments/Gigya.Comments.RatingPlugin/app/RatingPlugin.ts":
/*!**********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.RatingPlugin/app/RatingPlugin.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var RatingPlugin = /** @class */ (function (_super) {
    tslib_1.__extends(RatingPlugin, _super);
    function RatingPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoPixelRatio = false; // disabled by default - pixelRatio is set to 1
        _this.pixelRatio = 1; // 0 = auto; 1-3 = force that ratio
        return _this;
    }
    RatingPlugin.getPhotoFullName = function (photoName, forceRatio, ext) {
        if (forceRatio === void 0) { forceRatio = 0; }
        if (ext === void 0) { ext = 'png'; }
        return RatingPlugin.imgBase + photoName + '_x' + (forceRatio > 0 ? forceRatio : RatingPlugin.pixelRatio) + '.' + ext;
    };
    // Override BasePlugin methods
    RatingPlugin.injectionInfo = function () {
        return {
            name: 'rating',
            namespace: 'comments',
            methodName: 'showRatingUI',
            jsName: 'gigya.services.comments.plugins.rating',
        };
    };
    RatingPlugin.prototype.init = function (loadedCallback) {
        if (this.params['useHiResIcons']) {
            this.autoPixelRatio = true;
            this.pixelRatio = 0;
        }
        this.templates = this.getTemplates();
        this.linkedCommentsContainer = document.getElementById(this.params['linkedCommentsUI']);
        // Add runtime css only if wasn't added already
        if (!window.gigya._.plugins.cssFlags[RatingPlugin.injectionInfo().jsName]['runtimeCss']) {
            window.gigya._.plugins.utils.css.addCss(RatingPlugin.runtimeCss, this.params['cssPrefix']);
            window.gigya._.plugins.cssFlags[RatingPlugin.injectionInfo().jsName]['runtimeCss'] = true;
        }
        // Fetching the stream info
        this.fetchStreamInfo(loadedCallback);
        if (this.autoPixelRatio)
            window.gigya.utils.DOM.addClassToElement(this.container, 'gig-comments-hires-icons');
    };
    RatingPlugin.prototype.getConfig = function () {
        // TODO: Ensure defaultParams is typed.
        return {
            requiredParams: ['categoryID', 'streamID'],
            defaultParams: {
                streamID: '',
                showReadReviewsLink: true,
                showCommentButton: true,
                includeRatingsDims: true,
                width: '493',
            },
            hasMobileUI: false,
            allowModal: false,
            enableSizePolling: true,
        };
    };
    RatingPlugin.prototype.getTemplates = function () {
        var templates = _super.prototype.getTemplates.call(this);
        // If there is a custom specified template, setting it instead of default
        if (this.params['ratingTemplate'])
            templates['rating'] = this.params['ratingTemplate'];
        return templates;
    };
    RatingPlugin.prototype.resizePlugin = function (old, curr) {
        var width = old.width;
        // Apply the percentile width to the last polled width
        if (this.params.width.indexOf('%') != -1) {
            var multiplier = parseInt(this.params.width.replace('%', '')) / 100;
            width *= multiplier;
        }
        var elements = window.gigya.utils.DOM.getElementsByClass(document.getElementById(this.containerID), 'gig-rating');
        if (elements.length > 0) {
            var sizeClass = '';
            if (width <= 255)
                sizeClass = 'gig-size-1';
            else if (width <= 492)
                sizeClass = 'gig-size-2';
            else
                sizeClass = 'gig-size-3';
            var pluginEl = elements[0];
            if (pluginEl.className.indexOf(sizeClass) === -1) {
                var newClassName = pluginEl.className.replace(/\bgig-size-[1-3]\b/, '');
                newClassName = newClassName + ' ' + sizeClass;
                pluginEl.className = newClassName.replace(/\s{2,}/g, ' ');
            }
        }
    };
    // Rating specific methods
    RatingPlugin.prototype.fetchStreamInfo = function (callback) {
        var _this = this;
        var specificParams = {
            callback: function (response) {
                _this.gotStreamInfoCallback(response);
                callback();
            },
        };
        window.gigya.comments.getStreamInfo(this.params, specificParams);
    };
    RatingPlugin.prototype.gotStreamInfoCallback = function (response) {
        // If resulted in an error, firing the event
        if (response.errorCode != 0) {
            // Clear the container
            if (this.container)
                this.container.innerHTML = '';
            this.dispatchErrorFromResponse(response);
        }
        else if (!response.streamInfo.avgRatings) {
            if (this.container)
                this.container.innerHTML = '';
        }
        else if (this.container) {
            // Extract info and display plugin
            this.averageRating = response.streamInfo.avgRatings;
            this.reviewsCount = response.streamInfo.ratingCount;
            this.ratingDimensions = response.streamInfo.ratingsDims;
            this.updateContent();
        }
    };
    RatingPlugin.prototype.updateContent = function () {
        // If should clean
        if (this.container) {
            this.container.innerHTML = '';
        }
        // Filling the container with the templates
        this.container.innerHTML = window.gigya.utils.templates.fill(this.templates['rating'], {
            addReviewButton: this.templates['addReviewButton'],
            readReviewsLink: this.templates['readReviewsLink'],
            stars: this.templates['stars'],
            averageRatingLabel: this.getText('average_rating_colon'),
        });
        this.fillMainElements();
        this.registerForEvents();
    };
    RatingPlugin.prototype.fillMainElements = function () {
        // Fill the stars element
        var elStarsClass = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-rating-stars')[0];
        if (elStarsClass) {
            elStarsClass.innerHTML = this.getStarsElement('_overall').innerHTML;
            elStarsClass.setAttribute('title', this.averageRating['_overall']);
            elStarsClass.setAttribute('alt', this.averageRating['_overall']);
        }
        // Fill the addReviewButton element
        var elAddButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-rating-writeYourReview')[0];
        if (elAddButton)
            elAddButton.innerHTML = this.getText('write_your_review');
        // Get relevant text
        var numOfReviewsText;
        if (this.reviewsCount == 1)
            numOfReviewsText = this.getText('one_review');
        else
            numOfReviewsText = this.getText('num_reviews', '%num', this.reviewsCount.toString());
        // Fill the readReviewsLink element
        var elReadLink = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-rating-readReviewsLink')[0];
        if (elReadLink)
            elReadLink.innerHTML = numOfReviewsText;
        // If this rating has multiple dimensions
        this.updateDimensions();
    };
    RatingPlugin.prototype.updateDimensions = function () {
        var elDimensions = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-rating-dimensions')[0];
        if (elDimensions) {
            if (this.ratingDimensions) {
                // Getting the 'Overall rating' element to measure its width
                var elOverall = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-rating-averageRating')[0];
                var maxCategoryWidth = 0;
                if (elOverall)
                    maxCategoryWidth = elOverall.offsetWidth + 1;
                // If there's a rating dimensions definition, drawing the dimension ratings
                for (var i = 0; i < this.ratingDimensions.length; i++) {
                    var dimension = this.ratingDimensions[i];
                    // Build the dimension element
                    var elCurrDimension = document.createElement('div');
                    elCurrDimension.innerHTML = window.gigya.utils.templates.fill(this.templates['dimension'], {
                        dimensionTitle: dimension.name + ':',
                        dimensionStars: this.getStarsElement(dimension.id).outerHTML,
                    });
                    // Add the new dimension to the DOM
                    elDimensions.appendChild(elCurrDimension);
                    // Check if it is the maximum sized dimension name
                    var elDimTitle = window.gigya.utils.DOM.getElementsByClass(elCurrDimension, 'gig-rating-dimension-title')[0];
                    var dimCategoryWidth = elDimTitle.offsetWidth;
                    if (dimCategoryWidth > maxCategoryWidth)
                        maxCategoryWidth = dimCategoryWidth;
                }
                // Updating the CSS for the max category width
                var categoryWidthCSS = '#' +
                    this.container.id +
                    ' .gig-rating-dimension-title, #' +
                    this.container.id +
                    ' .gig-rating-averageRating { width:' +
                    maxCategoryWidth +
                    'px; }';
                window.gigya._.plugins.utils.css.addCss(categoryWidthCSS, this.params['cssPrefix']);
            }
            else {
                elDimensions.style.display = 'none';
            }
        }
    };
    RatingPlugin.prototype.registerForEvents = function () {
        var _this = this;
        // Getting the link elements
        var elNumOfReviews = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-rating-readReviewsLink')[0];
        var elCommentButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-rating-writeYourReview')[0];
        // If the element exists in the template, showing (if needed) and attaching events
        if (elNumOfReviews) {
            if (!this.params['showReadReviewsLink'])
                elNumOfReviews.style.display = 'none';
            window.gigya.utils.DOM.addEventListener(elNumOfReviews, 'click', function (e) {
                _this.readReviewsClicked(e);
            });
        }
        if (elCommentButton) {
            if (!this.params['showCommentButton'])
                elCommentButton.style.display = 'none';
            window.gigya.utils.DOM.addEventListener(elCommentButton, 'click', function (e) {
                _this.addReviewsClicked(e);
            });
        }
    };
    RatingPlugin.prototype.readReviewsClicked = function (event) {
        // Prevent the defualt link behavior
        window.gigya.utils.DOM.cancelEvent(event);
        if (this.params['linkedCommentsUI']) {
            // Scroll to comments plugin
            var commentsContainer = document.getElementById(this.params['linkedCommentsUI']);
            var elComments = window.gigya.utils.DOM.getElementsByClass(commentsContainer, 'gig-comments-comments')[0];
            // If there is no element - site may be using an older comments plugin
            if (!elComments) {
                elComments = document.getElementById(this.params['linkedCommentsUI'] + '-comments');
            }
            window.gigya.global.scrollToElement(elComments);
        }
        // Dispatch event
        this.dispatchPluginEvent('readReviewsClicked');
    };
    RatingPlugin.prototype.addReviewsClicked = function (event) {
        // Prevent the defualt link behavior
        window.gigya.utils.DOM.cancelEvent(event);
        if (this.params['linkedCommentsUI']) {
            // Scroll to comments plugin
            var commentsContainer = document.getElementById(this.params['linkedCommentsUI']);
            var elCommentBox = window.gigya.utils.DOM.getElementsByClass(commentsContainer, 'gig-comments-composebox')[0];
            // If there is no element - site may be using an older comments plugin
            if (!elCommentBox) {
                elCommentBox = document.getElementById(this.params['linkedCommentsUI'] + '-commentBox');
            }
            window.gigya.global.scrollToElement(elCommentBox);
        }
        // Dispatch event
        this.dispatchPluginEvent('addReviewClicked');
    };
    RatingPlugin.prototype.getStarsElement = function (dimensionID) {
        var rating = this.averageRating[dimensionID];
        if (rating === undefined)
            rating = 0;
        var elStars = document.createElement('span');
        window.gigya.utils.DOM.addClassToElement(elStars, 'gig-rating-stars');
        elStars.setAttribute('title', '' + rating);
        elStars.setAttribute('alt', '' + rating);
        // Filling the stars with appropriate image
        for (var i = 0; i < 5; i++) {
            var elCurrStar = document.createElement('div');
            window.gigya.utils.DOM.addClassToElement(elCurrStar, 'gig-rating-star');
            var starClass = '';
            if (i < Math.floor(rating))
                starClass = 'gig-rating-star-full';
            else if (rating - i >= 0.5)
                starClass = 'gig-rating-star-half';
            else
                starClass = 'gig-rating-star-empty';
            window.gigya.utils.DOM.addClassToElement(elCurrStar, starClass);
            elStars.appendChild(elCurrStar);
        }
        return elStars;
    };
    RatingPlugin.pixelRatio = window['devicePixelRatio'] ? Math.min(Math.ceil(window['devicePixelRatio']), 3) : 1;
    // Extra CSS
    RatingPlugin.imgBase = window.gigya._.getCdnResource('/gs/i/comments2/');
    RatingPlugin.runtimeCss = [
        "*.gig-rating-star {zoom:1;display:inline-block;zoom:1;background-repeat:no-repeat;padding-right:4px; width: 21px; height:20px;background-image:url('" +
            RatingPlugin.getPhotoFullName('Star_gray_big', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-rating-star {background-size:contain; background-image:url('" + RatingPlugin.getPhotoFullName('Star_gray_big') + "')}",
        "*.gig-rating-star-half {background-image:url('" + RatingPlugin.getPhotoFullName('Star_half_big', 1) + "')}",
        ".gig-comments-hires-icons *.gig-rating-star-half {background-size:contain; background-image:url('" +
            RatingPlugin.getPhotoFullName('Star_half_big') +
            "')}",
        "*.gig-rating-star-full {background-image:url('" + RatingPlugin.getPhotoFullName('Star_yellow_big', 1) + "')}",
        ".gig-comments-hires-icons *.gig-rating-star-full {background-size:contain; background-image:url('" +
            RatingPlugin.getPhotoFullName('Star_yellow_big') +
            "')}",
        "*.gig-rating-dimensions  div.gig-rating-star {zoom:1;display:inline-block;padding-right:3px;zoom:1;background-repeat:no-repeat;width:16px;height:16px;background-image:url('" +
            RatingPlugin.getPhotoFullName('Star_gray_small', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-rating-dimensions  div.gig-rating-star {background-size:contain; background-image:url('" +
            RatingPlugin.getPhotoFullName('Star_gray_small') +
            "')},",
        "*.gig-rating-dimensions  div.gig-rating-star-half { background-image:url('" + RatingPlugin.getPhotoFullName('Star_half_small', 1) + "')}",
        ".gig-comments-hires-icons *.gig-rating-dimensions  div.gig-rating-star-half { background-size:contain; background-image:url('" +
            RatingPlugin.getPhotoFullName('Star_half_small') +
            "')}",
        "*.gig-rating-dimensions  div.gig-rating-star-full { background-image:url('" + RatingPlugin.getPhotoFullName('Star_yellow_small', 1) + "')}",
        ".gig-comments-hires-icons *.gig-rating-dimensions  div.gig-rating-star-full { background-size:contain; background-image:url('" +
            RatingPlugin.getPhotoFullName('Star_yellow_small') +
            "')}",
    ].join('');
    return RatingPlugin;
}(window.gigya._.plugins.BasePlugin));
exports.RatingPlugin = RatingPlugin;


/***/ }),

/***/ "./src/comments/Gigya.Comments.RatingPlugin/app/css/global.css":
/*!*********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.RatingPlugin/app/css/global.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gig-clr:after {\r\n    content: \" \";\r\n    display: block;\r\n    clear: both;\r\n    visibility: hidden;\r\n    line-height: 0;\r\n    height: 0;\r\n}\r\n\r\n.gig-rating *, div.gig-rating {\r\n    border: none;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    color: inherit;\r\n    text-decoration: none;\r\n    width: auto;\r\n    float: none;\r\n    -moz-border-radius: 0;\r\n    border-radius: 0;\r\n    font-family: arial;\r\n    font-size: 12px;\r\n    color: #4e4e4e;\r\n    background: none;\r\n    text-align: left;\r\n}\r\n\r\ndiv.gig-rating {\r\n    display: inline-block;\r\n}\r\n\r\n.gig-rating-readReviewsLink, *:link.gig-rating-readReviewsLink, *:active.gig-rating-readReviewsLink, *:visited.gig-rating-readReviewsLink, *:hover.gig-rating-readReviewsLink {\r\n    margin-right: 73px;\r\n    color: #3C8BCE;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n    float: left;\r\n    white-space: nowrap;\r\n}\r\n\r\n*.gig-rating-dimensions {\r\n    padding-top: 4px;\r\n}\r\n\r\n*.gig-rating-stars {\r\n    zoom: 1;\r\n    position: relative;\r\n    top: 4px;\r\n}\r\n\r\n*.gig-rating-averageRating {\r\n    margin-right: 15px;\r\n    zoom: 1;\r\n    font-weight: bold;\r\n    display: inline-block;\r\n}\r\n\r\n*.gig-rating-dimension-title {\r\n    margin-right: 17px;\r\n    zoom: 1;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.gig-rating-writeYourReview, *:link.gig-rating-writeYourReview, *:active.gig-rating-writeYourReview, *:visited.gig-rating-writeYourReview {\r\n    cursor: pointer;\r\n    padding: 2px 14px 2px;\r\n    font-size: 11px;\r\n    color: #FFFFFF;\r\n    line-height: 15px;\r\n    border-radius: 3px;\r\n    background-color: #88cb82;\r\n    text-align: center;\r\n    display: inline-block;\r\n    box-shadow: 1px 1px rgba(255, 255, 255, 0.4) inset;\r\n    border: 1px solid #51AE48;\r\n    gradient(#88cb82,#72c26d);\r\n    border: 1px solid #51AE48;\r\n    float: left;\r\n}\r\n\r\n*.gig-rating-writeYourReview:hover {\r\n    background-color: #7AB574;\r\n    gradient(#7AB574,#7AB574);\r\n}\r\n\r\n.gig-stars-container {\r\n    float: left;\r\n    margin-bottom: 13px;\r\n}\r\n\r\n.gig-rating .gig-button-container {\r\n    float: left;\r\n    margin-top: 5px;\r\n}\r\n\r\n/* width <= 255px */\r\n\r\n.gig-rating .gig-size-1 {\r\n}\r\n\r\n.gig-rating .gig-size-1 .gig-rating-averageRating, .gig-size-1 .gig-rating-stars, .gig-size-1 .gig-rating-dimension-title {\r\n    display: block;\r\n}\r\n\r\n.gig-rating .gig-size-1 .gig-rating-averageRating, .gig-size-1 .gig-rating-dimension-title {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.gig-rating .gig-size-1 .gig-rating-stars {\r\n    margin-bottom: 12px;\r\n    width: 125px;\r\n}\r\n\r\n.gig-rating .gig-size-1 .gig-rating-readReviewsLink {\r\n    margin-bottom: 14px;\r\n    float: none;\r\n    margin-right: 0;\r\n    display: block;\r\n}\r\n\r\n.gig-rating .gig-size-1 .gig-stars-container {\r\n    width: auto;\r\n    float: none;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.gig-rating .gig-size-1 .gig-button-container {\r\n    min-width: 0;\r\n    margin-left: 0;\r\n    margin-top: 0;\r\n}\r\n\r\n.gig-rating .gig-size-1 .gig-rating-writeYourReview {\r\n    float: none;\r\n}\r\n\r\n/* width <= 492px */\r\n\r\n.gig-size-2 {\r\n}\r\n\r\n.gig-rating .gig-size-2 .gig-stars-container {\r\n    width: 240px;\r\n    float: none;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.gig-rating .gig-size-2 .gig-button-container {\r\n    min-width: 240px;\r\n    margin-top: 0;\r\n    margin-left: 0;\r\n}\r\n\r\n.gig-rating .gig-size-2 .gig-rating-dimensions {\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.gig-rating .gig-size-2 .gig-rating-readReviewsLink {\r\n    margin-top: 3px;\r\n    margin-right: 0;\r\n}\r\n\r\n.gig-rating .gig-size-2 .gig-rating-writeYourReview {\r\n    display: block;\r\n    margin-left: 106px;\r\n    float: none;\r\n}\r\n\r\n/* width >= 493px */\r\n\r\n.gig-rating .gig-size-3 {\r\n}\r\n\r\n.gig-rating .gig-size-3 .gig-stars-container {\r\n    margin-bottom: 13px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.gig-rating .gig-size-3 .gig-button-container {\r\n    margin-top: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/comments/Gigya.Comments.RatingPlugin/app/html/addReviewButton.html":
/*!********************************************************************************!*\
  !*** ./src/comments/Gigya.Comments.RatingPlugin/app/html/addReviewButton.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" class=\"gig-rating-writeYourReview gig-rating-button\"></a>";

/***/ }),

/***/ "./src/comments/Gigya.Comments.RatingPlugin/app/html/dimension.html":
/*!**************************************************************************!*\
  !*** ./src/comments/Gigya.Comments.RatingPlugin/app/html/dimension.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-rating-dimension\">\r\n    <span class=\"gig-rating-dimension-title\">$dimensionTitle</span>\r\n    $dimensionStars\r\n</div>\r\n";

/***/ }),

/***/ "./src/comments/Gigya.Comments.RatingPlugin/app/html/rating.html":
/*!***********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.RatingPlugin/app/html/rating.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-rating gig-clr\">\r\n    <div class=\"gig-stars-container\">\r\n        <div class=\"gig-rating-topbar\">\r\n            <span class=\"gig-rating-averageRating\">$averageRatingLabel</span>\r\n            $stars\r\n        </div>\r\n        <div class=\"gig-rating-dimensions\"></div>\r\n    </div>\r\n    <div class=\"gig-button-container gig-clr\">\r\n        $readReviewsLink\r\n        $addReviewButton\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ "./src/comments/Gigya.Comments.RatingPlugin/app/html/readReviewsLink.html":
/*!********************************************************************************!*\
  !*** ./src/comments/Gigya.Comments.RatingPlugin/app/html/readReviewsLink.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" class=\"gig-rating-readReviewsLink\"></a>";

/***/ }),

/***/ "./src/comments/Gigya.Comments.RatingPlugin/app/html/stars.html":
/*!**********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.RatingPlugin/app/html/stars.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"gig-rating-stars\"></span>";

/***/ }),

/***/ "./src/comments/Gigya.Comments.RatingPlugin/app/index.ts":
/*!***************************************************************!*\
  !*** ./src/comments/Gigya.Comments.RatingPlugin/app/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsRating = __webpack_require__(/*! src/comments/Gigya.Comments.RatingPlugin/app/RatingPlugin */ "./src/comments/Gigya.Comments.RatingPlugin/app/RatingPlugin.ts");
var HtmlResources = __webpack_require__(/*! src/comments/Gigya.Comments.RatingPlugin/app/HtmlResources */ "./src/comments/Gigya.Comments.RatingPlugin/app/HtmlResources.ts");
var CssResource = __webpack_require__(/*! src/comments/Gigya.Comments.RatingPlugin/app/CssResources */ "./src/comments/Gigya.Comments.RatingPlugin/app/CssResources.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.rating) {
    window.gigya._.plugins.rating = {};
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
if (!window.gigya._.plugins.resources.html.rating) {
    window.gigya._.plugins.resources.html.rating = {};
}
if (!window.gigya._.plugins.resources.css.rating) {
    window.gigya._.plugins.resources.css.rating = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.rating, Gigya_PluginsRating);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.html.rating, HtmlResources);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.css.rating, CssResource);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWVudHMvR2lneWEuQ29tbWVudHMuUmF0aW5nUGx1Z2luL2FwcC9Dc3NSZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnRzL0dpZ3lhLkNvbW1lbnRzLlJhdGluZ1BsdWdpbi9hcHAvSHRtbFJlc291cmNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWVudHMvR2lneWEuQ29tbWVudHMuUmF0aW5nUGx1Z2luL2FwcC9SYXRpbmdQbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnRzL0dpZ3lhLkNvbW1lbnRzLlJhdGluZ1BsdWdpbi9hcHAvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnRzL0dpZ3lhLkNvbW1lbnRzLlJhdGluZ1BsdWdpbi9hcHAvaHRtbC9hZGRSZXZpZXdCdXR0b24uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWVudHMvR2lneWEuQ29tbWVudHMuUmF0aW5nUGx1Z2luL2FwcC9odG1sL2RpbWVuc2lvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21tZW50cy9HaWd5YS5Db21tZW50cy5SYXRpbmdQbHVnaW4vYXBwL2h0bWwvcmF0aW5nLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnRzL0dpZ3lhLkNvbW1lbnRzLlJhdGluZ1BsdWdpbi9hcHAvaHRtbC9yZWFkUmV2aWV3c0xpbmsuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWVudHMvR2lneWEuQ29tbWVudHMuUmF0aW5nUGx1Z2luL2FwcC9odG1sL3N0YXJzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnRzL0dpZ3lhLkNvbW1lbnRzLlJhdGluZ1BsdWdpbi9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5n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YSxDQUFDLFlBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLmNvbW1lbnRzLnBsdWdpbnMucmF0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29tbWVudHMvR2lneWEuQ29tbWVudHMuUmF0aW5nUGx1Z2luL2FwcC9pbmRleC50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImV4cG9ydCB2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9jc3MvZ2xvYmFsLmNzcycpO1xyXG4iLCJleHBvcnQgdmFyIGFkZFJldmlld0J1dHRvbiA9IHJlcXVpcmUoJy4vaHRtbC9hZGRSZXZpZXdCdXR0b24uaHRtbCcpO1xyXG5leHBvcnQgdmFyIGRpbWVuc2lvbiA9IHJlcXVpcmUoJy4vaHRtbC9kaW1lbnNpb24uaHRtbCcpO1xyXG5leHBvcnQgdmFyIHJhdGluZyA9IHJlcXVpcmUoJy4vaHRtbC9yYXRpbmcuaHRtbCcpO1xyXG5leHBvcnQgdmFyIHJlYWRSZXZpZXdzTGluayA9IHJlcXVpcmUoJy4vaHRtbC9yZWFkUmV2aWV3c0xpbmsuaHRtbCcpO1xyXG5leHBvcnQgdmFyIHN0YXJzID0gcmVxdWlyZSgnLi9odG1sL3N0YXJzLmh0bWwnKTtcclxuIiwiaW1wb3J0IHsgSVBsdWdpblBhcmFtcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luUGFyYW1zJztcclxuaW1wb3J0IHsgSVBsdWdpblRlbXBsYXRlcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luVGVtcGxhdGVzJztcclxuaW1wb3J0IHsgSVBsdWdpbkNTUyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ1NTJztcclxuaW1wb3J0IHsgSUluamVjdGlvbkluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvQVBJL1VpQXBpJztcclxuaW1wb3J0IHsgSVBsdWdpbkNvbmZpZyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ29uZmlnJztcclxuaW1wb3J0IHsgSUVsZW1lbnRBY3R1YWxTaXplIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0ludGVyZmFjZXMnO1xyXG5leHBvcnQgaW50ZXJmYWNlIElSYXRpbmdQYXJhbXMgZXh0ZW5kcyBJUGx1Z2luUGFyYW1zIHtcclxuICAgIHN0cmVhbUlEOiBzdHJpbmc7XHJcbiAgICBzaG93UmVhZFJldmlld3NMaW5rOiBib29sZWFuO1xyXG4gICAgc2hvd0NvbW1lbnRCdXR0b246IGJvb2xlYW47XHJcbiAgICBpbmNsdWRlUmF0aW5nc0RpbXM6IGJvb2xlYW47XHJcbiAgICB3aWR0aDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJhdGluZ1RlbXBsYXRlcyBleHRlbmRzIElQbHVnaW5UZW1wbGF0ZXMge31cclxuZXhwb3J0IGludGVyZmFjZSBJUmF0aW5nQ1NTIGV4dGVuZHMgSVBsdWdpbkNTUyB7fVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nUGx1Z2luIGV4dGVuZHMgZ2lneWEuXy5wbHVnaW5zLkJhc2VQbHVnaW48SVJhdGluZ1BhcmFtcywgSVJhdGluZ1RlbXBsYXRlcywgSVJhdGluZ0NTUz4ge1xyXG4gICAgLy8gRGF0YSBtZW1iZXJzXHJcbiAgICBsaW5rZWRDb21tZW50c0NvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBhdmVyYWdlUmF0aW5nOiBPYmplY3Q7XHJcbiAgICB0ZW1wbGF0ZXM6IE9iamVjdDtcclxuICAgIHJldmlld3NDb3VudDogbnVtYmVyO1xyXG4gICAgcmF0aW5nRGltZW5zaW9uczogeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVtdO1xyXG4gICAgYXV0b1BpeGVsUmF0aW86IGJvb2xlYW4gPSBmYWxzZTsgLy8gZGlzYWJsZWQgYnkgZGVmYXVsdCAtIHBpeGVsUmF0aW8gaXMgc2V0IHRvIDFcclxuICAgIHBpeGVsUmF0aW86IG51bWJlciA9IDE7IC8vIDAgPSBhdXRvOyAxLTMgPSBmb3JjZSB0aGF0IHJhdGlvXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwaXhlbFJhdGlvID0gd2luZG93WydkZXZpY2VQaXhlbFJhdGlvJ10gPyBNYXRoLm1pbihNYXRoLmNlaWwod2luZG93WydkZXZpY2VQaXhlbFJhdGlvJ10pLCAzKSA6IDE7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFBob3RvRnVsbE5hbWUocGhvdG9OYW1lOiBzdHJpbmcsIGZvcmNlUmF0aW86IG51bWJlciA9IDAsIGV4dDogc3RyaW5nID0gJ3BuZycpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBSYXRpbmdQbHVnaW4uaW1nQmFzZSArIHBob3RvTmFtZSArICdfeCcgKyAoZm9yY2VSYXRpbyA+IDAgPyBmb3JjZVJhdGlvIDogUmF0aW5nUGx1Z2luLnBpeGVsUmF0aW8pICsgJy4nICsgZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4dHJhIENTU1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW1nQmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2NvbW1lbnRzMi8nKTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJ1bnRpbWVDc3MgPSBbXHJcbiAgICAgICAgXCIqLmdpZy1yYXRpbmctc3RhciB7em9vbToxO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7cGFkZGluZy1yaWdodDo0cHg7IHdpZHRoOiAyMXB4OyBoZWlnaHQ6MjBweDtiYWNrZ3JvdW5kLWltYWdlOnVybCgnXCIgK1xyXG4gICAgICAgICAgICBSYXRpbmdQbHVnaW4uZ2V0UGhvdG9GdWxsTmFtZSgnU3Rhcl9ncmF5X2JpZycsIDEpICtcclxuICAgICAgICAgICAgXCInKX1cIixcclxuICAgICAgICBcIi5naWctY29tbWVudHMtaGlyZXMtaWNvbnMgKi5naWctcmF0aW5nLXN0YXIge2JhY2tncm91bmQtc2l6ZTpjb250YWluOyBiYWNrZ3JvdW5kLWltYWdlOnVybCgnXCIgKyBSYXRpbmdQbHVnaW4uZ2V0UGhvdG9GdWxsTmFtZSgnU3Rhcl9ncmF5X2JpZycpICsgXCInKX1cIixcclxuICAgICAgICBcIiouZ2lnLXJhdGluZy1zdGFyLWhhbGYge2JhY2tncm91bmQtaW1hZ2U6dXJsKCdcIiArIFJhdGluZ1BsdWdpbi5nZXRQaG90b0Z1bGxOYW1lKCdTdGFyX2hhbGZfYmlnJywgMSkgKyBcIicpfVwiLFxyXG4gICAgICAgIFwiLmdpZy1jb21tZW50cy1oaXJlcy1pY29ucyAqLmdpZy1yYXRpbmctc3Rhci1oYWxmIHtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjsgYmFja2dyb3VuZC1pbWFnZTp1cmwoJ1wiICtcclxuICAgICAgICAgICAgUmF0aW5nUGx1Z2luLmdldFBob3RvRnVsbE5hbWUoJ1N0YXJfaGFsZl9iaWcnKSArXHJcbiAgICAgICAgICAgIFwiJyl9XCIsXHJcbiAgICAgICAgXCIqLmdpZy1yYXRpbmctc3Rhci1mdWxsIHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnXCIgKyBSYXRpbmdQbHVnaW4uZ2V0UGhvdG9GdWxsTmFtZSgnU3Rhcl95ZWxsb3dfYmlnJywgMSkgKyBcIicpfVwiLFxyXG4gICAgICAgIFwiLmdpZy1jb21tZW50cy1oaXJlcy1pY29ucyAqLmdpZy1yYXRpbmctc3Rhci1mdWxsIHtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjsgYmFja2dyb3VuZC1pbWFnZTp1cmwoJ1wiICtcclxuICAgICAgICAgICAgUmF0aW5nUGx1Z2luLmdldFBob3RvRnVsbE5hbWUoJ1N0YXJfeWVsbG93X2JpZycpICtcclxuICAgICAgICAgICAgXCInKX1cIixcclxuICAgICAgICBcIiouZ2lnLXJhdGluZy1kaW1lbnNpb25zICBkaXYuZ2lnLXJhdGluZy1zdGFyIHt6b29tOjE7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1yaWdodDozcHg7em9vbToxO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JhY2tncm91bmQtaW1hZ2U6dXJsKCdcIiArXHJcbiAgICAgICAgICAgIFJhdGluZ1BsdWdpbi5nZXRQaG90b0Z1bGxOYW1lKCdTdGFyX2dyYXlfc21hbGwnLCAxKSArXHJcbiAgICAgICAgICAgIFwiJyl9XCIsXHJcbiAgICAgICAgXCIuZ2lnLWNvbW1lbnRzLWhpcmVzLWljb25zICouZ2lnLXJhdGluZy1kaW1lbnNpb25zICBkaXYuZ2lnLXJhdGluZy1zdGFyIHtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjsgYmFja2dyb3VuZC1pbWFnZTp1cmwoJ1wiICtcclxuICAgICAgICAgICAgUmF0aW5nUGx1Z2luLmdldFBob3RvRnVsbE5hbWUoJ1N0YXJfZ3JheV9zbWFsbCcpICtcclxuICAgICAgICAgICAgXCInKX0sXCIsXHJcbiAgICAgICAgXCIqLmdpZy1yYXRpbmctZGltZW5zaW9ucyAgZGl2LmdpZy1yYXRpbmctc3Rhci1oYWxmIHsgYmFja2dyb3VuZC1pbWFnZTp1cmwoJ1wiICsgUmF0aW5nUGx1Z2luLmdldFBob3RvRnVsbE5hbWUoJ1N0YXJfaGFsZl9zbWFsbCcsIDEpICsgXCInKX1cIixcclxuICAgICAgICBcIi5naWctY29tbWVudHMtaGlyZXMtaWNvbnMgKi5naWctcmF0aW5nLWRpbWVuc2lvbnMgIGRpdi5naWctcmF0aW5nLXN0YXItaGFsZiB7IGJhY2tncm91bmQtc2l6ZTpjb250YWluOyBiYWNrZ3JvdW5kLWltYWdlOnVybCgnXCIgK1xyXG4gICAgICAgICAgICBSYXRpbmdQbHVnaW4uZ2V0UGhvdG9GdWxsTmFtZSgnU3Rhcl9oYWxmX3NtYWxsJykgK1xyXG4gICAgICAgICAgICBcIicpfVwiLFxyXG4gICAgICAgIFwiKi5naWctcmF0aW5nLWRpbWVuc2lvbnMgIGRpdi5naWctcmF0aW5nLXN0YXItZnVsbCB7IGJhY2tncm91bmQtaW1hZ2U6dXJsKCdcIiArIFJhdGluZ1BsdWdpbi5nZXRQaG90b0Z1bGxOYW1lKCdTdGFyX3llbGxvd19zbWFsbCcsIDEpICsgXCInKX1cIixcclxuICAgICAgICBcIi5naWctY29tbWVudHMtaGlyZXMtaWNvbnMgKi5naWctcmF0aW5nLWRpbWVuc2lvbnMgIGRpdi5naWctcmF0aW5nLXN0YXItZnVsbCB7IGJhY2tncm91bmQtc2l6ZTpjb250YWluOyBiYWNrZ3JvdW5kLWltYWdlOnVybCgnXCIgK1xyXG4gICAgICAgICAgICBSYXRpbmdQbHVnaW4uZ2V0UGhvdG9GdWxsTmFtZSgnU3Rhcl95ZWxsb3dfc21hbGwnKSArXHJcbiAgICAgICAgICAgIFwiJyl9XCIsXHJcbiAgICBdLmpvaW4oJycpO1xyXG5cclxuICAgIC8vIE92ZXJyaWRlIEJhc2VQbHVnaW4gbWV0aG9kc1xyXG4gICAgcHVibGljIHN0YXRpYyBpbmplY3Rpb25JbmZvKCk6IElJbmplY3Rpb25JbmZvIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiAncmF0aW5nJyxcclxuICAgICAgICAgICAgbmFtZXNwYWNlOiAnY29tbWVudHMnLFxyXG4gICAgICAgICAgICBtZXRob2ROYW1lOiAnc2hvd1JhdGluZ1VJJyxcclxuICAgICAgICAgICAganNOYW1lOiAnZ2lneWEuc2VydmljZXMuY29tbWVudHMucGx1Z2lucy5yYXRpbmcnLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQobG9hZGVkQ2FsbGJhY2s6IChzdWNjZXNzPzogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtc1sndXNlSGlSZXNJY29ucyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b1BpeGVsUmF0aW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMgPSB0aGlzLmdldFRlbXBsYXRlcygpO1xyXG4gICAgICAgIHRoaXMubGlua2VkQ29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmFtc1snbGlua2VkQ29tbWVudHNVSSddKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHJ1bnRpbWUgY3NzIG9ubHkgaWYgd2Fzbid0IGFkZGVkIGFscmVhZHlcclxuICAgICAgICBpZiAoIWdpZ3lhLl8ucGx1Z2lucy5jc3NGbGFnc1tSYXRpbmdQbHVnaW4uaW5qZWN0aW9uSW5mbygpLmpzTmFtZV1bJ3J1bnRpbWVDc3MnXSkge1xyXG4gICAgICAgICAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzLmFkZENzcyhSYXRpbmdQbHVnaW4ucnVudGltZUNzcywgdGhpcy5wYXJhbXNbJ2Nzc1ByZWZpeCddKTtcclxuICAgICAgICAgICAgZ2lneWEuXy5wbHVnaW5zLmNzc0ZsYWdzW1JhdGluZ1BsdWdpbi5pbmplY3Rpb25JbmZvKCkuanNOYW1lXVsncnVudGltZUNzcyddID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZldGNoaW5nIHRoZSBzdHJlYW0gaW5mb1xyXG4gICAgICAgIHRoaXMuZmV0Y2hTdHJlYW1JbmZvKGxvYWRlZENhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b1BpeGVsUmF0aW8pIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLmNvbnRhaW5lciwgJ2dpZy1jb21tZW50cy1oaXJlcy1pY29ucycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb25maWcoKTogSVBsdWdpbkNvbmZpZzxJUmF0aW5nUGFyYW1zPiB7XHJcbiAgICAgICAgLy8gVE9ETzogRW5zdXJlIGRlZmF1bHRQYXJhbXMgaXMgdHlwZWQuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVxdWlyZWRQYXJhbXM6IFsnY2F0ZWdvcnlJRCcsICdzdHJlYW1JRCddLFxyXG4gICAgICAgICAgICBkZWZhdWx0UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW1JRDogJycsXHJcbiAgICAgICAgICAgICAgICBzaG93UmVhZFJldmlld3NMaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NvbW1lbnRCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlUmF0aW5nc0RpbXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzQ5MycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhhc01vYmlsZVVJOiBmYWxzZSxcclxuICAgICAgICAgICAgYWxsb3dNb2RhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGVuYWJsZVNpemVQb2xsaW5nOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRlbXBsYXRlcygpIHtcclxuICAgICAgICB2YXIgdGVtcGxhdGVzID0gc3VwZXIuZ2V0VGVtcGxhdGVzKCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgY3VzdG9tIHNwZWNpZmllZCB0ZW1wbGF0ZSwgc2V0dGluZyBpdCBpbnN0ZWFkIG9mIGRlZmF1bHRcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXNbJ3JhdGluZ1RlbXBsYXRlJ10pIHRlbXBsYXRlc1sncmF0aW5nJ10gPSB0aGlzLnBhcmFtc1sncmF0aW5nVGVtcGxhdGUnXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVzaXplUGx1Z2luKG9sZDogSUVsZW1lbnRBY3R1YWxTaXplLCBjdXJyOiBJRWxlbWVudEFjdHVhbFNpemUpOiB2b2lkIHtcclxuICAgICAgICB2YXIgd2lkdGggPSBvbGQud2lkdGg7XHJcblxyXG4gICAgICAgIC8vIEFwcGx5IHRoZSBwZXJjZW50aWxlIHdpZHRoIHRvIHRoZSBsYXN0IHBvbGxlZCB3aWR0aFxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy53aWR0aC5pbmRleE9mKCclJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIG11bHRpcGxpZXIgPSBwYXJzZUludCh0aGlzLnBhcmFtcy53aWR0aC5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcclxuICAgICAgICAgICAgd2lkdGggKj0gbXVsdGlwbGllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCksICdnaWctcmF0aW5nJyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIHNpemVDbGFzcyA9ICcnO1xyXG4gICAgICAgICAgICBpZiAod2lkdGggPD0gMjU1KSBzaXplQ2xhc3MgPSAnZ2lnLXNpemUtMSc7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHdpZHRoIDw9IDQ5Mikgc2l6ZUNsYXNzID0gJ2dpZy1zaXplLTInO1xyXG4gICAgICAgICAgICBlbHNlIHNpemVDbGFzcyA9ICdnaWctc2l6ZS0zJztcclxuXHJcbiAgICAgICAgICAgIHZhciBwbHVnaW5FbCA9IGVsZW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBpZiAocGx1Z2luRWwuY2xhc3NOYW1lLmluZGV4T2Yoc2l6ZUNsYXNzKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdDbGFzc05hbWUgPSBwbHVnaW5FbC5jbGFzc05hbWUucmVwbGFjZSgvXFxiZ2lnLXNpemUtWzEtM11cXGIvLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBuZXdDbGFzc05hbWUgPSBuZXdDbGFzc05hbWUgKyAnICcgKyBzaXplQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5FbC5jbGFzc05hbWUgPSBuZXdDbGFzc05hbWUucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJhdGluZyBzcGVjaWZpYyBtZXRob2RzXHJcblxyXG4gICAgcHJpdmF0ZSBmZXRjaFN0cmVhbUluZm8oY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB2YXIgc3BlY2lmaWNQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb3RTdHJlYW1JbmZvQ2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBnaWd5YS5jb21tZW50cy5nZXRTdHJlYW1JbmZvKHRoaXMucGFyYW1zLCBzcGVjaWZpY1BhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnb3RTdHJlYW1JbmZvQ2FsbGJhY2socmVzcG9uc2U6IGFueSkge1xyXG4gICAgICAgIC8vIElmIHJlc3VsdGVkIGluIGFuIGVycm9yLCBmaXJpbmcgdGhlIGV2ZW50XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yQ29kZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBjb250YWluZXJcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyKSB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFcnJvckZyb21SZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghcmVzcG9uc2Uuc3RyZWFtSW5mby5hdmdSYXRpbmdzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAvLyBFeHRyYWN0IGluZm8gYW5kIGRpc3BsYXkgcGx1Z2luXHJcbiAgICAgICAgICAgIHRoaXMuYXZlcmFnZVJhdGluZyA9IHJlc3BvbnNlLnN0cmVhbUluZm8uYXZnUmF0aW5ncztcclxuICAgICAgICAgICAgdGhpcy5yZXZpZXdzQ291bnQgPSByZXNwb25zZS5zdHJlYW1JbmZvLnJhdGluZ0NvdW50O1xyXG4gICAgICAgICAgICB0aGlzLnJhdGluZ0RpbWVuc2lvbnMgPSByZXNwb25zZS5zdHJlYW1JbmZvLnJhdGluZ3NEaW1zO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb250ZW50KCkge1xyXG4gICAgICAgIC8vIElmIHNob3VsZCBjbGVhblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZpbGxpbmcgdGhlIGNvbnRhaW5lciB3aXRoIHRoZSB0ZW1wbGF0ZXNcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnRlbXBsYXRlc1sncmF0aW5nJ10sIHtcclxuICAgICAgICAgICAgYWRkUmV2aWV3QnV0dG9uOiB0aGlzLnRlbXBsYXRlc1snYWRkUmV2aWV3QnV0dG9uJ10sXHJcbiAgICAgICAgICAgIHJlYWRSZXZpZXdzTGluazogdGhpcy50ZW1wbGF0ZXNbJ3JlYWRSZXZpZXdzTGluayddLFxyXG4gICAgICAgICAgICBzdGFyczogdGhpcy50ZW1wbGF0ZXNbJ3N0YXJzJ10sXHJcbiAgICAgICAgICAgIGF2ZXJhZ2VSYXRpbmdMYWJlbDogdGhpcy5nZXRUZXh0KCdhdmVyYWdlX3JhdGluZ19jb2xvbicpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGxNYWluRWxlbWVudHMoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9yRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWxsTWFpbkVsZW1lbnRzKCkge1xyXG4gICAgICAgIC8vIEZpbGwgdGhlIHN0YXJzIGVsZW1lbnRcclxuICAgICAgICB2YXIgZWxTdGFyc0NsYXNzOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctcmF0aW5nLXN0YXJzJylbMF07XHJcbiAgICAgICAgaWYgKGVsU3RhcnNDbGFzcykge1xyXG4gICAgICAgICAgICBlbFN0YXJzQ2xhc3MuaW5uZXJIVE1MID0gdGhpcy5nZXRTdGFyc0VsZW1lbnQoJ19vdmVyYWxsJykuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICBlbFN0YXJzQ2xhc3Muc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMuYXZlcmFnZVJhdGluZ1snX292ZXJhbGwnXSk7XHJcbiAgICAgICAgICAgIGVsU3RhcnNDbGFzcy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHRoaXMuYXZlcmFnZVJhdGluZ1snX292ZXJhbGwnXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGaWxsIHRoZSBhZGRSZXZpZXdCdXR0b24gZWxlbWVudFxyXG4gICAgICAgIHZhciBlbEFkZEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXJhdGluZy13cml0ZVlvdXJSZXZpZXcnKVswXTtcclxuICAgICAgICBpZiAoZWxBZGRCdXR0b24pIGVsQWRkQnV0dG9uLmlubmVySFRNTCA9IHRoaXMuZ2V0VGV4dCgnd3JpdGVfeW91cl9yZXZpZXcnKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHJlbGV2YW50IHRleHRcclxuICAgICAgICB2YXIgbnVtT2ZSZXZpZXdzVGV4dDtcclxuICAgICAgICBpZiAodGhpcy5yZXZpZXdzQ291bnQgPT0gMSkgbnVtT2ZSZXZpZXdzVGV4dCA9IHRoaXMuZ2V0VGV4dCgnb25lX3JldmlldycpO1xyXG4gICAgICAgIGVsc2UgbnVtT2ZSZXZpZXdzVGV4dCA9IHRoaXMuZ2V0VGV4dCgnbnVtX3Jldmlld3MnLCAnJW51bScsIHRoaXMucmV2aWV3c0NvdW50LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICAvLyBGaWxsIHRoZSByZWFkUmV2aWV3c0xpbmsgZWxlbWVudFxyXG4gICAgICAgIHZhciBlbFJlYWRMaW5rOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctcmF0aW5nLXJlYWRSZXZpZXdzTGluaycpWzBdO1xyXG4gICAgICAgIGlmIChlbFJlYWRMaW5rKSBlbFJlYWRMaW5rLmlubmVySFRNTCA9IG51bU9mUmV2aWV3c1RleHQ7XHJcblxyXG4gICAgICAgIC8vIElmIHRoaXMgcmF0aW5nIGhhcyBtdWx0aXBsZSBkaW1lbnNpb25zXHJcbiAgICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVEaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHZhciBlbERpbWVuc2lvbnM6IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1yYXRpbmctZGltZW5zaW9ucycpWzBdO1xyXG5cclxuICAgICAgICBpZiAoZWxEaW1lbnNpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJhdGluZ0RpbWVuc2lvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIEdldHRpbmcgdGhlICdPdmVyYWxsIHJhdGluZycgZWxlbWVudCB0byBtZWFzdXJlIGl0cyB3aWR0aFxyXG4gICAgICAgICAgICAgICAgdmFyIGVsT3ZlcmFsbDogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXJhdGluZy1hdmVyYWdlUmF0aW5nJylbMF07XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4Q2F0ZWdvcnlXaWR0aDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChlbE92ZXJhbGwpIG1heENhdGVnb3J5V2lkdGggPSBlbE92ZXJhbGwub2Zmc2V0V2lkdGggKyAxO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSByYXRpbmcgZGltZW5zaW9ucyBkZWZpbml0aW9uLCBkcmF3aW5nIHRoZSBkaW1lbnNpb24gcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJhdGluZ0RpbWVuc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5yYXRpbmdEaW1lbnNpb25zW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCB0aGUgZGltZW5zaW9uIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxDdXJyRGltZW5zaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxDdXJyRGltZW5zaW9uLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMudGVtcGxhdGVzWydkaW1lbnNpb24nXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25UaXRsZTogZGltZW5zaW9uLm5hbWUgKyAnOicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvblN0YXJzOiB0aGlzLmdldFN0YXJzRWxlbWVudChkaW1lbnNpb24uaWQpLm91dGVySFRNTCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBuZXcgZGltZW5zaW9uIHRvIHRoZSBET01cclxuICAgICAgICAgICAgICAgICAgICBlbERpbWVuc2lvbnMuYXBwZW5kQ2hpbGQoZWxDdXJyRGltZW5zaW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgdGhlIG1heGltdW0gc2l6ZWQgZGltZW5zaW9uIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxEaW1UaXRsZSA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3MoZWxDdXJyRGltZW5zaW9uLCAnZ2lnLXJhdGluZy1kaW1lbnNpb24tdGl0bGUnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGltQ2F0ZWdvcnlXaWR0aCA9IGVsRGltVGl0bGUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpbUNhdGVnb3J5V2lkdGggPiBtYXhDYXRlZ29yeVdpZHRoKSBtYXhDYXRlZ29yeVdpZHRoID0gZGltQ2F0ZWdvcnlXaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGluZyB0aGUgQ1NTIGZvciB0aGUgbWF4IGNhdGVnb3J5IHdpZHRoXHJcbiAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlXaWR0aENTUyA9XHJcbiAgICAgICAgICAgICAgICAgICAgJyMnICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pZCArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAuZ2lnLXJhdGluZy1kaW1lbnNpb24tdGl0bGUsICMnICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pZCArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAuZ2lnLXJhdGluZy1hdmVyYWdlUmF0aW5nIHsgd2lkdGg6JyArXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Q2F0ZWdvcnlXaWR0aCArXHJcbiAgICAgICAgICAgICAgICAgICAgJ3B4OyB9JztcclxuICAgICAgICAgICAgICAgIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MuYWRkQ3NzKGNhdGVnb3J5V2lkdGhDU1MsIHRoaXMucGFyYW1zWydjc3NQcmVmaXgnXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbERpbWVuc2lvbnMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRm9yRXZlbnRzKCkge1xyXG4gICAgICAgIC8vIEdldHRpbmcgdGhlIGxpbmsgZWxlbWVudHNcclxuICAgICAgICB2YXIgZWxOdW1PZlJldmlld3M6IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1yYXRpbmctcmVhZFJldmlld3NMaW5rJylbMF07XHJcbiAgICAgICAgdmFyIGVsQ29tbWVudEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXJhdGluZy13cml0ZVlvdXJSZXZpZXcnKVswXTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgZXhpc3RzIGluIHRoZSB0ZW1wbGF0ZSwgc2hvd2luZyAoaWYgbmVlZGVkKSBhbmQgYXR0YWNoaW5nIGV2ZW50c1xyXG4gICAgICAgIGlmIChlbE51bU9mUmV2aWV3cykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyYW1zWydzaG93UmVhZFJldmlld3NMaW5rJ10pIGVsTnVtT2ZSZXZpZXdzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbE51bU9mUmV2aWV3cywgJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRSZXZpZXdzQ2xpY2tlZChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxDb21tZW50QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJhbXNbJ3Nob3dDb21tZW50QnV0dG9uJ10pIGVsQ29tbWVudEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWxDb21tZW50QnV0dG9uLCAnY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkUmV2aWV3c0NsaWNrZWQoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRSZXZpZXdzQ2xpY2tlZChldmVudDogRXZlbnQpIHtcclxuICAgICAgICAvLyBQcmV2ZW50IHRoZSBkZWZ1YWx0IGxpbmsgYmVoYXZpb3JcclxuICAgICAgICBnaWd5YS51dGlscy5ET00uY2FuY2VsRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbXNbJ2xpbmtlZENvbW1lbnRzVUknXSkge1xyXG4gICAgICAgICAgICAvLyBTY3JvbGwgdG8gY29tbWVudHMgcGx1Z2luXHJcbiAgICAgICAgICAgIHZhciBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyYW1zWydsaW5rZWRDb21tZW50c1VJJ10pO1xyXG4gICAgICAgICAgICB2YXIgZWxDb21tZW50cyA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3MoY29tbWVudHNDb250YWluZXIsICdnaWctY29tbWVudHMtY29tbWVudHMnKVswXTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGVsZW1lbnQgLSBzaXRlIG1heSBiZSB1c2luZyBhbiBvbGRlciBjb21tZW50cyBwbHVnaW5cclxuICAgICAgICAgICAgaWYgKCFlbENvbW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBlbENvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJhbXNbJ2xpbmtlZENvbW1lbnRzVUknXSArICctY29tbWVudHMnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLnNjcm9sbFRvRWxlbWVudChlbENvbW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BhdGNoIGV2ZW50XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaFBsdWdpbkV2ZW50KCdyZWFkUmV2aWV3c0NsaWNrZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFJldmlld3NDbGlja2VkKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIC8vIFByZXZlbnQgdGhlIGRlZnVhbHQgbGluayBiZWhhdmlvclxyXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5jYW5jZWxFdmVudChldmVudCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtc1snbGlua2VkQ29tbWVudHNVSSddKSB7XHJcbiAgICAgICAgICAgIC8vIFNjcm9sbCB0byBjb21tZW50cyBwbHVnaW5cclxuICAgICAgICAgICAgdmFyIGNvbW1lbnRzQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyYW1zWydsaW5rZWRDb21tZW50c1VJJ10pO1xyXG4gICAgICAgICAgICB2YXIgZWxDb21tZW50Qm94ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyhjb21tZW50c0NvbnRhaW5lciwgJ2dpZy1jb21tZW50cy1jb21wb3NlYm94JylbMF07XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBlbGVtZW50IC0gc2l0ZSBtYXkgYmUgdXNpbmcgYW4gb2xkZXIgY29tbWVudHMgcGx1Z2luXHJcbiAgICAgICAgICAgIGlmICghZWxDb21tZW50Qm94KSB7XHJcbiAgICAgICAgICAgICAgICBlbENvbW1lbnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmFtc1snbGlua2VkQ29tbWVudHNVSSddICsgJy1jb21tZW50Qm94Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5zY3JvbGxUb0VsZW1lbnQoZWxDb21tZW50Qm94KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BhdGNoIGV2ZW50XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaFBsdWdpbkV2ZW50KCdhZGRSZXZpZXdDbGlja2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdGFyc0VsZW1lbnQoZGltZW5zaW9uSUQ6IHN0cmluZykge1xyXG4gICAgICAgIHZhciByYXRpbmc6IG51bWJlciA9IHRoaXMuYXZlcmFnZVJhdGluZ1tkaW1lbnNpb25JRF07XHJcbiAgICAgICAgaWYgKHJhdGluZyA9PT0gdW5kZWZpbmVkKSByYXRpbmcgPSAwO1xyXG5cclxuICAgICAgICB2YXIgZWxTdGFyczogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KGVsU3RhcnMsICdnaWctcmF0aW5nLXN0YXJzJyk7XHJcbiAgICAgICAgZWxTdGFycy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycgKyByYXRpbmcpO1xyXG4gICAgICAgIGVsU3RhcnMuc2V0QXR0cmlidXRlKCdhbHQnLCAnJyArIHJhdGluZyk7XHJcblxyXG4gICAgICAgIC8vIEZpbGxpbmcgdGhlIHN0YXJzIHdpdGggYXBwcm9wcmlhdGUgaW1hZ2VcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZWxDdXJyU3RhcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KGVsQ3VyclN0YXIsICdnaWctcmF0aW5nLXN0YXInKTtcclxuICAgICAgICAgICAgdmFyIHN0YXJDbGFzcyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKGkgPCBNYXRoLmZsb29yKHJhdGluZykpIHN0YXJDbGFzcyA9ICdnaWctcmF0aW5nLXN0YXItZnVsbCc7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJhdGluZyAtIGkgPj0gMC41KSBzdGFyQ2xhc3MgPSAnZ2lnLXJhdGluZy1zdGFyLWhhbGYnO1xyXG4gICAgICAgICAgICBlbHNlIHN0YXJDbGFzcyA9ICdnaWctcmF0aW5nLXN0YXItZW1wdHknO1xyXG5cclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KGVsQ3VyclN0YXIsIHN0YXJDbGFzcyk7XHJcbiAgICAgICAgICAgIGVsU3RhcnMuYXBwZW5kQ2hpbGQoZWxDdXJyU3Rhcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxTdGFycztcclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmdpZy1jbHI6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBsaW5lLWhlaWdodDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lnLXJhdGluZyAqLCBkaXYuZ2lnLXJhdGluZyB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGZsb2F0OiBub25lO1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBjb2xvcjogIzRlNGU0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmdpZy1yYXRpbmcge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWctcmF0aW5nLXJlYWRSZXZpZXdzTGluaywgKjpsaW5rLmdpZy1yYXRpbmctcmVhZFJldmlld3NMaW5rLCAqOmFjdGl2ZS5naWctcmF0aW5nLXJlYWRSZXZpZXdzTGluaywgKjp2aXNpdGVkLmdpZy1yYXRpbmctcmVhZFJldmlld3NMaW5rLCAqOmhvdmVyLmdpZy1yYXRpbmctcmVhZFJldmlld3NMaW5rIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA3M3B4O1xcclxcbiAgICBjb2xvcjogIzNDOEJDRTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbiouZ2lnLXJhdGluZy1kaW1lbnNpb25zIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuKi5naWctcmF0aW5nLXN0YXJzIHtcXHJcXG4gICAgem9vbTogMTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuKi5naWctcmF0aW5nLWF2ZXJhZ2VSYXRpbmcge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHpvb206IDE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiouZ2lnLXJhdGluZy1kaW1lbnNpb24tdGl0bGUge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XFxyXFxuICAgIHpvb206IDE7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdpZy1yYXRpbmctd3JpdGVZb3VyUmV2aWV3LCAqOmxpbmsuZ2lnLXJhdGluZy13cml0ZVlvdXJSZXZpZXcsICo6YWN0aXZlLmdpZy1yYXRpbmctd3JpdGVZb3VyUmV2aWV3LCAqOnZpc2l0ZWQuZ2lnLXJhdGluZy13cml0ZVlvdXJSZXZpZXcge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAxNHB4IDJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4Y2I4MjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIGluc2V0O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTFBRTQ4O1xcclxcbiAgICBncmFkaWVudCgjODhjYjgyLCM3MmMyNmQpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTFBRTQ4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuKi5naWctcmF0aW5nLXdyaXRlWW91clJldmlldzpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QUI1NzQ7XFxyXFxuICAgIGdyYWRpZW50KCM3QUI1NzQsIzdBQjU3NCk7XFxyXFxufVxcclxcblxcclxcbi5naWctc3RhcnMtY29udGFpbmVyIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XFxyXFxufVxcclxcblxcclxcbi5naWctcmF0aW5nIC5naWctYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIHdpZHRoIDw9IDI1NXB4ICovXFxyXFxuXFxyXFxuLmdpZy1yYXRpbmcgLmdpZy1zaXplLTEge1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lnLXJhdGluZyAuZ2lnLXNpemUtMSAuZ2lnLXJhdGluZy1hdmVyYWdlUmF0aW5nLCAuZ2lnLXNpemUtMSAuZ2lnLXJhdGluZy1zdGFycywgLmdpZy1zaXplLTEgLmdpZy1yYXRpbmctZGltZW5zaW9uLXRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWctcmF0aW5nIC5naWctc2l6ZS0xIC5naWctcmF0aW5nLWF2ZXJhZ2VSYXRpbmcsIC5naWctc2l6ZS0xIC5naWctcmF0aW5nLWRpbWVuc2lvbi10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZy1yYXRpbmcgLmdpZy1zaXplLTEgLmdpZy1yYXRpbmctc3RhcnMge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbiAgICB3aWR0aDogMTI1cHg7XFxyXFxufVxcclxcblxcclxcbi5naWctcmF0aW5nIC5naWctc2l6ZS0xIC5naWctcmF0aW5nLXJlYWRSZXZpZXdzTGluayB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxuICAgIGZsb2F0OiBub25lO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lnLXJhdGluZyAuZ2lnLXNpemUtMSAuZ2lnLXN0YXJzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZy1yYXRpbmcgLmdpZy1zaXplLTEgLmdpZy1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAgbWluLXdpZHRoOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZy1yYXRpbmcgLmdpZy1zaXplLTEgLmdpZy1yYXRpbmctd3JpdGVZb3VyUmV2aWV3IHtcXHJcXG4gICAgZmxvYXQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHdpZHRoIDw9IDQ5MnB4ICovXFxyXFxuXFxyXFxuLmdpZy1zaXplLTIge1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lnLXJhdGluZyAuZ2lnLXNpemUtMiAuZ2lnLXN0YXJzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5naWctcmF0aW5nIC5naWctc2l6ZS0yIC5naWctYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICAgIG1pbi13aWR0aDogMjQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lnLXJhdGluZyAuZ2lnLXNpemUtMiAuZ2lnLXJhdGluZy1kaW1lbnNpb25zIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZy1yYXRpbmcgLmdpZy1zaXplLTIgLmdpZy1yYXRpbmctcmVhZFJldmlld3NMaW5rIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5naWctcmF0aW5nIC5naWctc2l6ZS0yIC5naWctcmF0aW5nLXdyaXRlWW91clJldmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTA2cHg7XFxyXFxuICAgIGZsb2F0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3aWR0aCA+PSA0OTNweCAqL1xcclxcblxcclxcbi5naWctcmF0aW5nIC5naWctc2l6ZS0zIHtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZy1yYXRpbmcgLmdpZy1zaXplLTMgLmdpZy1zdGFycy1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5naWctcmF0aW5nIC5naWctc2l6ZS0zIC5naWctYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImdpZy1yYXRpbmctd3JpdGVZb3VyUmV2aWV3IGdpZy1yYXRpbmctYnV0dG9uXFxcIj48L2E+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZy1yYXRpbmctZGltZW5zaW9uXFxcIj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImdpZy1yYXRpbmctZGltZW5zaW9uLXRpdGxlXFxcIj4kZGltZW5zaW9uVGl0bGU8L3NwYW4+XFxyXFxuICAgICRkaW1lbnNpb25TdGFyc1xcclxcbjwvZGl2PlxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJnaWctcmF0aW5nIGdpZy1jbHJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWctc3RhcnMtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdpZy1yYXRpbmctdG9wYmFyXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2lnLXJhdGluZy1hdmVyYWdlUmF0aW5nXFxcIj4kYXZlcmFnZVJhdGluZ0xhYmVsPC9zcGFuPlxcclxcbiAgICAgICAgICAgICRzdGFyc1xcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWctcmF0aW5nLWRpbWVuc2lvbnNcXFwiPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lnLWJ1dHRvbi1jb250YWluZXIgZ2lnLWNsclxcXCI+XFxyXFxuICAgICAgICAkcmVhZFJldmlld3NMaW5rXFxyXFxuICAgICAgICAkYWRkUmV2aWV3QnV0dG9uXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZ2lnLXJhdGluZy1yZWFkUmV2aWV3c0xpbmtcXFwiPjwvYT5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNwYW4gY2xhc3M9XFxcImdpZy1yYXRpbmctc3RhcnNcXFwiPjwvc3Bhbj5cIjsiLCJpbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zUmF0aW5nIGZyb20gJ3NyYy9jb21tZW50cy9HaWd5YS5Db21tZW50cy5SYXRpbmdQbHVnaW4vYXBwL1JhdGluZ1BsdWdpbic7XHJcbmltcG9ydCAqIGFzIEh0bWxSZXNvdXJjZXMgZnJvbSAnc3JjL2NvbW1lbnRzL0dpZ3lhLkNvbW1lbnRzLlJhdGluZ1BsdWdpbi9hcHAvSHRtbFJlc291cmNlcyc7XHJcbmltcG9ydCAqIGFzIENzc1Jlc291cmNlIGZyb20gJ3NyYy9jb21tZW50cy9HaWd5YS5Db21tZW50cy5SYXRpbmdQbHVnaW4vYXBwL0Nzc1Jlc291cmNlcyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IGdpZ3lhOiBhbnk7XHJcbmlmICghZ2lneWEuXykge1xyXG4gICAgZ2lneWEuXyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEuXy5wbHVnaW5zKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yYXRpbmcpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy5yYXRpbmcgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbCkge1xyXG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwucmF0aW5nKSB7XHJcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwucmF0aW5nID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcy5yYXRpbmcpIHtcclxuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLnJhdGluZyA9IHt9O1xyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yYXRpbmcsIEdpZ3lhX1BsdWdpbnNSYXRpbmcpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbC5yYXRpbmcsIEh0bWxSZXNvdXJjZXMpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLnJhdGluZywgQ3NzUmVzb3VyY2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9