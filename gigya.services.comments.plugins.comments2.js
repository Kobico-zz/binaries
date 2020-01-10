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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/comments/Gigya.Comments.JsPlugin/app/index.ts");
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

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/BaseComposeBox.ts":
/*!********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/BaseComposeBox.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var CommentData_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentData */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentData.ts");
var UserTaggingBox_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/UserTaggingBox */ "./src/comments/Gigya.Comments.JsPlugin/app/UserTaggingBox.ts");
var Comments_Models_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/Comments.Models */ "./src/comments/Gigya.Comments.JsPlugin/app/Comments.Models.ts");
var CommentsUtils_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils.ts");
var ImgBase_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/ImgBase */ "./src/comments/Gigya.Comments.JsPlugin/app/ImgBase.ts");
var BaseComposeBox = /** @class */ (function () {
    function BaseComposeBox(plugin, container, data, onClose) {
        this.plugin = plugin;
        this.container = container;
        this.onClose = onClose;
        this.lastSelection = { start: -1 };
        this.data = window.gigya.utils.object.clone(data, true, false);
        if (!this.data.ratings)
            this.data.ratings = {};
    }
    //#region Utility methods
    BaseComposeBox.prototype.getText = function (textKey, replaceStr, withStr) {
        return this.plugin.getText(textKey, replaceStr, withStr);
    };
    BaseComposeBox.prototype.getElement = function (subclass) {
        var elList = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-composebox-' + subclass);
        return elList && elList.length > 0 ? elList[0] : null;
    };
    BaseComposeBox.prototype.buildUIElementsObj = function () {
        this.uiElements = {
            header: this.getElement('header'),
            title: this.getElement('title'),
            photo: this.getElement('photo'),
            textArea: this.getElement('textarea'),
            editor: this.getElement('editor'),
            summary: this.getElement('summary'),
            mediaItem: this.getElement('mediaItem'),
            summaryInput: this.getElement('summary-input'),
            name: this.getElement('name'),
            sidebar: this.getElement('sidebar'),
            sidebarButtons: {
                richText: this.getElement('sidebar-font'),
                addMediaItem: this.getElement('sidebar-media'),
                tagUser: this.getElement('sidebar-tag'),
            },
            submitButton: this.getElement('post'),
            closeButton: this.getElement('close'),
            cancelButton: this.getElement('cancel'),
            loginBar: this.getElement('login'),
            socialLoginButton: this.getElement('social-login'),
            siteLoginButton: this.getElement('site-login'),
            guestLoginButton: this.getElement('guest-login'),
            logoutLink: this.getElement('logout'),
            followLink: this.getElement('follow'),
            shareSection: this.getElement('share'),
            shareProviders: this.getElement('share-providers'),
            postAnonymouslySection: this.getElement('postAnonymously'),
            postAnonymouslyCheckbox: this.getElement('anon-checkbox'),
            ratings: this.getElement('ratings'),
            ratingsOverall: this.getElement('rating-_overall'),
            errorMessage: this.getElement('error'),
        };
    };
    BaseComposeBox.prototype.getLoginProvider = function () {
        var loginProvider = this.plugin.user.loginProvider;
        if (!loginProvider) {
            for (var identity in this.plugin.user.identities) {
                loginProvider = identity;
                break;
            }
        }
        return loginProvider;
    };
    BaseComposeBox.prototype.isLoginDropdownEnabled = function () {
        return !this.data.isReply() && (this.plugin.params['showLoginBar'] == true || this.plugin.settings.useSiteLogin);
    };
    BaseComposeBox.prototype.hideElement = function (element, remove) {
        if (!element)
            return;
        if (remove)
            element.parentElement.removeChild(element);
        else
            element.style.display = 'none';
    };
    //#endregion
    //#region UI Rendering
    BaseComposeBox.prototype.open = function () {
        this.render();
        this.focus();
    };
    BaseComposeBox.prototype.render = function () {
        if (!this.container) {
            this.container.style.display = 'none';
            return;
        }
        var writeCommentText = this.plugin.textMode == Comments_Models_1.TextMode.COMMENTS ? this.getText('write_a_comment') : this.getText('write_a_review');
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['composebox'], {
            write_a_comment: writeCommentText,
            logout: this.getText('logout'),
            post: this.getSubmitText(),
            cancel: this.getText('cancel'),
            postAnonymously: this.getText('post_anonymously'),
            share: this.getText('share_colon'),
            login: this.getText('login'),
            or: this.getText('or'),
            guest: this.getText('guest'),
            summary: this.plugin.textMode == Comments_Models_1.TextMode.COMMENTS ? this.getText('summary') : this.getText('review_summary'),
        });
        var elEditor = this.getElement('editor');
        elEditor.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['editor'], {
            write_a_comment: writeCommentText,
            fontAlt: this.getText('rich_text_formatting'),
            mediaAlt: this.getText('embed_a_media_item'),
            tagAlt: this.getText('tag_commenters'),
        });
        this.buildUIElementsObj();
        // TODO: this should move to CommentPlugin
        var guest = this.getGuestUser();
        if (!this.plugin.user.isConnected && guest.isGuest && this.plugin.settings.allowGuest) {
            this.plugin.user = guest;
        }
        if (this.uiElements.editor && this.plugin.settings.enableCommentBody == 'disabled') {
            this.uiElements.editor.style.display = 'none';
        }
        if (this.uiElements.summary) {
            if (this.uiElements.summaryInput) {
                var placeholder = this.uiElements.summaryInput.getAttribute('data-placeholder');
                window.gigya.global.setPlaceholder(this.uiElements.summaryInput, placeholder, 'gig-comments-placeholder');
            }
            this.uiElements.summary.style.display = this.data.isReply() || this.plugin.settings.enableCommentTitles == 'disabled' ? 'none' : '';
        }
        this.renderSidebar();
        this.renderRatings();
        this.afterRender();
        this.activateOnRender();
        this.bindEvents();
    };
    BaseComposeBox.prototype.activateOnRender = function () {
        var _this = this;
        if (this.data.isReply() || this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS) {
            window.gigya.utils.DOM.addClassToElement(this.container, 'gig-comment-replybox-open'); // TODO: is this needed? is calling active() enough?
            if (this.plugin.isMobileUI) {
                this.activate();
            }
            else {
                window.setTimeout(function () { return _this.activate(); }, 10);
            }
        }
    };
    BaseComposeBox.prototype.renderSidebar = function () {
        if (!this.uiElements.sidebar)
            return;
        if (!this.uiElements.editor || this.plugin.settings.enableCommentBody == 'disabled' || this.plugin.isMobileUI) {
            this.uiElements.sidebar.style.display = 'none';
            return;
        }
        if (this.uiElements.sidebarButtons.richText) {
            var el = this.uiElements.sidebarButtons.richText;
            if (!this.plugin.settings.enableRichTextEditing) {
                el.parentElement.removeChild(el);
                this.uiElements.sidebarButtons.richText = null;
            }
        }
        if (this.uiElements.sidebarButtons.addMediaItem) {
            var el = this.uiElements.sidebarButtons.addMediaItem;
            if (!this.plugin.settings.enableMediaItems) {
                el.parentElement.removeChild(el);
                this.uiElements.sidebarButtons.addMediaItem = null;
            }
        }
        if (this.uiElements.sidebarButtons.tagUser) {
            var el = this.uiElements.sidebarButtons.tagUser;
            if (!this.plugin.settings.enableUserTagging) {
                el.parentElement.removeChild(el);
                this.uiElements.sidebarButtons.tagUser = null;
            }
        }
        if (this.uiElements.sidebarButtons.richText || this.uiElements.sidebarButtons.addMediaItem || this.uiElements.sidebarButtons.tagUser) {
            window.gigya.utils.DOM.addClassToElement(this.uiElements.editor, 'gig-composebox-editor-with-sidebar');
        }
    };
    //#endregion
    //#region UI updates
    BaseComposeBox.prototype.activate = function () {
        window.gigya.utils.DOM.addClassToElement(this.container, 'gig-composebox-open');
    };
    BaseComposeBox.prototype.close = function (canceled) {
        if (this.container) {
            this.container.innerHTML = '';
            window.gigya.utils.DOM.removeClassFromElement(this.container, 'gig-comment-replybox-open');
        }
        if (this.onClose)
            this.onClose(canceled);
    };
    BaseComposeBox.prototype.focus = function () {
        if (this.uiElements.textArea)
            this.uiElements.textArea.focus();
    };
    // Refreshes the UI elements when data changes
    BaseComposeBox.prototype.updateUI = function () {
        if (!this.uiElements)
            return;
        if (this.uiElements.name)
            this.uiElements.name.innerHTML = this.plugin.getUsername();
        this.updateUserBadges();
        this.updateLoginLogoutElements();
        this.updateProfilePhoto();
        this.updateTitle();
        this.updateFollow();
        this.updateRatings(); // TODO: refactor + move to new convention
    };
    BaseComposeBox.prototype.updateUserBadges = function () {
        if (!this.uiElements.header)
            return;
        window.gigya.utils.DOM.removeClassFromElement(this.uiElements.header.parentElement, 'gig-composebox-withBadges');
        // remove all userBadges from the composeBox
        this.plugin.removeUserBadges(this.uiElements.header);
        if (this.plugin.user.isLoggedIn && this.plugin.userHighlightingGroups) {
            var commenterElement = this.uiElements.title;
            var hasUserBadges = this.plugin.createUserHighlightingBadges(commenterElement, this.plugin.userHighlightingGroups);
            if (hasUserBadges)
                window.gigya.utils.DOM.addClassToElement(this.uiElements.header.parentElement, 'gig-composebox-withBadges');
        }
    };
    BaseComposeBox.prototype.updateTitle = function () {
        if (!this.uiElements.title)
            return;
        var title = this.getTitle();
        if (title) {
            this.uiElements.title.style.display = '';
            this.uiElements.title.innerHTML = title;
        }
        else {
            this.uiElements.title.style.display = 'none';
            this.uiElements.title.innerHTML = title;
        }
    };
    BaseComposeBox.prototype.updateProfilePhoto = function () {
        var _this = this;
        if (!this.uiElements.photo)
            return;
        var loginProvider = this.getLoginProvider();
        var photoHtml = window.gigya.utils.templates.fill(this.plugin.templates['photo'], {
            photoURL: window.gigya.global.getPhotoURL(this.plugin.user.thumbnailURL || this.plugin.user.photoURL, CommentsUtils_1.Images.getPhotoFullName('Avatar_empty', this.plugin.pixelRatio)),
            providerImage: loginProvider && loginProvider != 'site' && loginProvider.toLowerCase() != 'customopenid' ? this.plugin.templates['providerImage'] : '',
            providerImageUrl: ImgBase_1.imgBase + 'providers/' + this.getLoginProvider() + 'User_x1.png',
        });
        this.uiElements.photo.style.visibility = 'hidden';
        this.uiElements.photo.innerHTML = photoHtml;
        var arElImg = this.uiElements.photo.getElementsByTagName('img');
        if (arElImg && arElImg.length > 0) {
            var img = arElImg[0];
            window.gigya.utils.DOM.addEventListener(img, 'load', function () {
                window.gigya.global.scaleImageToContainer(arElImg[0], true, function () {
                    _this.uiElements.photo.style.visibility = '';
                });
            });
        }
    };
    BaseComposeBox.prototype.updateLoginLogoutElements = function () {
        if (this.uiElements.logoutLink) {
            if (this.plugin.user.isConnected || (this.plugin.user.isGuest && !this.isGuestLocked())) {
                this.uiElements.logoutLink.style.display = '';
            }
            else {
                this.uiElements.logoutLink.style.display = 'none';
            }
        }
    };
    //#endregion
    //#region Event handling
    BaseComposeBox.prototype.bindEvents = function () {
        var _this = this;
        window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.submitButton, function () {
            _this.onSubmitClicked();
        });
        window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.cancelButton, function () {
            _this.close();
        });
        window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.closeButton, function () {
            _this.close();
        });
        window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.socialLoginButton, function () {
            _this.onLoginClick(_this.uiElements.socialLoginButton);
        });
        window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.siteLoginButton, function () {
            _this.onSiteLoginClick();
        });
        window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.guestLoginButton, function () {
            _this.onGuestClick(_this.uiElements.guestLoginButton);
        });
        window.gigya.utils.DOM.addEventListener(this.uiElements.sidebarButtons.richText, 'mousedown', function (e) {
            _this.showFontBox(_this.uiElements.sidebarButtons.richText);
            window.gigya.utils.DOM.cancelEvent(e);
        });
        window.gigya.utils.DOM.addEventListener(this.uiElements.sidebarButtons.addMediaItem, 'mousedown', function (e) {
            _this.showMediaBox(_this.uiElements.sidebarButtons.addMediaItem);
            window.gigya.utils.DOM.cancelEvent(e);
        });
        window.gigya.utils.DOM.addEventListener(this.uiElements.sidebarButtons.tagUser, 'mousedown', function (e) {
            _this.onSidebarTagClicked(e);
            window.gigya.utils.DOM.cancelEvent(e);
        });
        if (this.uiElements.textArea) {
            window.gigya.utils.DOM.addEventListener(this.uiElements.textArea, 'keydown', function (e) {
                if (window.gigya.utils.array.indexOf(BaseComposeBox.allowedOnLimitKeys, e.keyCode) == -1 &&
                    _this.uiElements.textArea.textContent.length >= _this.plugin.settings.maxCommentLength) {
                    window.gigya.utils.DOM.cancelEvent(e);
                }
            });
            window.gigya.utils.DOM.addEventListener(this.uiElements.textArea, 'focus', function () {
                _this.activate();
            });
            window.gigya.utils.DOM.addEventListener(this.uiElements.textArea, 'keyup', function (e) {
                if ((e.keyCode == 86 && (e.ctrlKey || e.metaKey)) || (e.keyCode == 45 && e.shiftKey)) {
                    setTimeout(function () {
                        _this.handleUpdatedText();
                    }, 1);
                }
            });
            window.gigya.utils.DOM.addEventListener(this.uiElements.textArea, 'blur', function () {
                _this.stopPolling();
                if (_this.uiElements.textArea.innerHTML == '<br>')
                    _this.uiElements.textArea.innerHTML = ''; // ff adds <br> when hitting space
                // This is no longer validated because of bug #37615 - the click event would not fire because the button moves before
                // the user can release the mouse
                //if (this.pendingValidation) {
                //    this.validate(false);
                //}
            });
            window.gigya.utils.DOM.addEventListener(this.uiElements.textArea, 'focus', function () {
                _this.startPolling();
            });
        }
        if (this.uiElements.logoutLink) {
            window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.logoutLink, function () {
                if (_this.plugin.user.isGuest) {
                    _this.logoutGuest();
                }
                else {
                    window.gigya.socialize.logout(_this.plugin.params);
                }
            });
        }
        var elFollow = this.uiElements.followLink;
        if (elFollow) {
            window.gigya.utils.DOM.addButtonSubmitListener(elFollow, function () {
                _this.onFollowClick(elFollow);
            });
            window.gigya.utils.DOM.addEventListener(elFollow, 'mouseover', function () {
                if (_this.plugin.isUserFollowing()) {
                    elFollow.innerHTML = _this.getText('unfollow');
                }
            });
            var fnOnMouseOut = function () {
                _this.updateFollow();
            };
            window.gigya.utils.DOM.addEventListener(elFollow, 'mouseout', fnOnMouseOut);
            fnOnMouseOut();
        }
        if (this.uiElements.summaryInput) {
            window.gigya.utils.DOM.addEventListener(this.uiElements.summaryInput, 'blur', function () {
                if (_this.pendingValidation) {
                    _this.validate();
                }
            });
        }
    };
    BaseComposeBox.prototype.onSubmitClicked = function () {
        if (!this.validate())
            return;
        this.updateDataFromUI();
        this.submit();
        // For single-review mode
        this.plugin.mainComposeBox.updateUI();
    };
    BaseComposeBox.prototype.updateDataFromUI = function () {
        var tbCommentTitle = this.uiElements.summaryInput;
        if (this.data.commentText == null)
            this.data.commentText = '';
        var taggedUIDs = [];
        if (this.uiElements.textArea)
            this.data.commentText = CommentsUtils_1.UserTagging.replaceUserTagsWithSpans(this.uiElements.textArea, taggedUIDs);
        if (!tbCommentTitle)
            this.data.commentTitle = null;
        else if (tbCommentTitle.value && tbCommentTitle['placeholderCleared'])
            this.data.commentTitle = tbCommentTitle.value;
        else
            this.data.commentTitle = '';
        this.data.taggedUsers = taggedUIDs;
        this.data.mediaItems = this.mediaItem ? [this.mediaItem] : [];
        this.data.highlightGroups = this.plugin.userHighlightingGroups;
        this.data.status = this.plugin.settings.moderationState === 1 ? 'pending' : '';
    };
    BaseComposeBox.prototype.onStarClick = function (e) {
        var target = (e.target || e.srcElement);
        var parent = target.parentNode;
        var dimensionId = parent.getAttribute('data-dimension');
        var starValue = target.getAttribute('data-value');
        if (!this.data.ratings)
            this.data.ratings = {};
        this.data.ratings[dimensionId] = parseInt(starValue);
        if (this.pendingValidation)
            this.validate();
        this.onStarMouseOut(e);
    };
    BaseComposeBox.prototype.onStarMouseOver = function (e) {
        var target = (e.target || e.srcElement);
        var parent = target.parentNode;
        var starValue = target.getAttribute('data-value');
        var parent = target.parentNode;
        this.updateStarsToValue(parent, parseInt(starValue));
    };
    BaseComposeBox.prototype.onStarMouseOut = function (e) {
        var target = e.target || e.srcElement;
        var parent = target.parentNode;
        var dimensionId = parent.getAttribute('data-dimension');
        this.updateStarsToValue(parent, this.data.ratings[dimensionId]);
    };
    BaseComposeBox.prototype.updateStarsToValue = function (parent, value) {
        if (value === void 0) { value = 0; }
        if (!parent)
            return;
        var arStars = parent.getElementsByClassName('gig-composebox-rating-star');
        for (var i = 0; i < arStars.length; i++) {
            var elStar = arStars[i];
            if (parseInt(elStar.getAttribute('data-value')) <= value) {
                window.gigya.utils.DOM.addClassToElement(elStar, 'gig-composebox-rating-star-full');
            }
            else {
                window.gigya.utils.DOM.removeClassFromElement(elStar, 'gig-composebox-rating-star-full');
            }
        }
    };
    BaseComposeBox.prototype.onLoginClick = function (elOpener, showGuest, onLogin) {
        var _this = this;
        window.gigya.utils.DOM.addClassToElement(elOpener, 'gig-composebox-social-login-down');
        var divLogin = document.createElement('div');
        divLogin.className = 'gig-comments-container gig-comments-loginbox' + (this.plugin.autoPixelRatio ? ' gig-comments-hires-icons' : '');
        var enabledProviders = this.plugin.params['enabledProviders'] || '*';
        var disabledProviders = this.plugin.params['disabledProviders'] || '';
        var arProviders = window.gigya.socialize.hideProvidersByName(window.gigya.socialize.getProvidersByName(enabledProviders), disabledProviders);
        var fnOnProviderClick = function (e) {
            _this.onLoginProviderClick(e, divPopover, elOpener, onLogin);
        };
        var createProviderDiv = function (provider, backgroundImage) {
            var divProvider = document.createElement('div');
            divProvider.className = 'gig-loginbox-provider';
            divProvider.setAttribute('data-provider', provider.name);
            divProvider.innerHTML = provider.displayName;
            divProvider.setAttribute('aria-label', provider.displayName);
            if (backgroundImage) {
                divProvider.style.backgroundImage = "url(\"" + backgroundImage + "\")";
            }
            window.gigya.utils.DOM.addButtonSubmitListener(divProvider, fnOnProviderClick);
            divLogin.appendChild(divProvider);
            return divProvider;
        };
        var hasMore;
        if (arProviders) {
            var divProvider = document.createElement('div');
            divProvider.className = 'gig-signinbox-provider';
            divProvider.innerHTML = this.getText('sign_in_with');
            divLogin.appendChild(divProvider);
        }
        for (var i = 0; i < arProviders.length; i++) {
            var provider = arProviders[i];
            if (provider) {
                var divProvider = createProviderDiv(provider, window.gigya._.getCdnResource('/gs/i/HTMLLogin/' + provider.name + '_15.png'));
                if (i > 1) {
                    divProvider.style.display = 'none';
                    hasMore = true;
                }
            }
        }
        if (showGuest) {
            createProviderDiv({
                name: 'guest',
                displayName: this.getText('as_guest'),
            }, CommentsUtils_1.Images.getPhotoFullName('login_as_guest', this.plugin.pixelRatio));
        }
        if (hasMore) {
            createProviderDiv({
                name: 'more',
                displayName: this.getText('show_more'),
            });
        }
        var divPopover = window.gigya.pluginUtils.DOM.addPopoverNearElement(elOpener, divLogin, 'bottom', 0, this.plugin.isRtl, false, 'slideDown', function (e, wasOpen) {
            // Stop the event so the login box won't open again
            if (wasOpen && (e.target == elOpener || window.gigya.utils.DOM.isChildOf(e.target, elOpener))) {
                CommentsUtils_1.Events.cancelEvent(e);
            }
        });
        var firstProvider = divLogin.querySelector('div.gig-loginbox-provider');
        if (firstProvider) {
            firstProvider.focus();
        }
    };
    BaseComposeBox.prototype.onLoginProviderClick = function (e, divLogin, elOpener, onLogin) {
        var target = e.target || e.srcElement;
        var provider = target.getAttribute('data-provider');
        if (provider == 'more') {
            var arDivProvider = window.gigya.utils.DOM.getElementsByClass(divLogin, 'gig-loginbox-provider');
            for (var i = 0; i < arDivProvider.length; i++) {
                arDivProvider[i].style.display = '';
            }
            target.style.display = 'none';
            window.gigya.pluginUtils.DOM.placePopoverNearElement(elOpener, divLogin, 'bottom', 0, this.plugin.isRtl, false);
            var providerEls = divLogin.querySelectorAll('div.gig-loginbox-provider');
            var nextProviderEl = providerEls[2];
            if (nextProviderEl) {
                nextProviderEl.focus();
            }
        }
        else if (provider == 'guest') {
            this.onGuestClick(elOpener, onLogin);
            divLogin.parentNode.removeChild(divLogin);
        }
        else {
            window.gigya.socialize.addConnection(this.plugin.params, { provider: provider, callback: onLogin });
            divLogin.parentNode.removeChild(divLogin);
        }
    };
    BaseComposeBox.prototype.onGuestClick = function (elOpener, onLogin) {
        var _this = this;
        window.gigya.utils.DOM.addClassToElement(elOpener, 'gig-composebox-guest-login-down');
        var pos = window.gigya.utils.DOM.getElementPosition(elOpener);
        var divGuest = document.createElement('div');
        divGuest.style.position = 'absolute';
        if (divGuest.style.zIndex != null) {
            divGuest.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
        }
        divGuest.className = 'gig-comments-container gig-comments-guestbox';
        window.gigya.utils.DOM.appendToBody(divGuest);
        var viewport = window.gigya.utils.viewport.getInnerSize();
        var left = Math.max(0, window.gigya.localInfo.quirksMode ? pos.left - 2 : pos.left);
        if (left + divGuest.offsetWidth > viewport.w - 40) {
            left = viewport.w - divGuest.offsetWidth - 40;
        }
        divGuest.style.left = '' + left + 'px';
        divGuest.style.top = '' + (pos.top + elOpener.offsetHeight - 2 + (window.gigya.localInfo.quirksMode ? -2 : 0)) + 'px';
        divGuest.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['guestbox'], {
            nickname: this.getText('nickname'),
            email: window.gigya.utils.sanitize.sanitizeAttribute(this.plugin.settings.isGuestEmailRequired ? this.getText('email') : this.getText('email_optional')),
            ok: this.getText('ok'),
            email_not_displayed_publicly: this.getText('email_not_displayed_publicly'),
        });
        var elNickname = window.gigya.utils.DOM.getElementsByClass(divGuest, 'gig-guestbox-nickname')[0];
        var elEmail = window.gigya.utils.DOM.getElementsByClass(divGuest, 'gig-guestbox-email')[0];
        if (this.plugin.settings.requireGuestName) {
            if (elNickname)
                window.gigya.global.setPlaceholder(elNickname, elNickname.getAttribute('data-placeholder'), 'gig-comments-placeholder');
        }
        else {
            elNickname.style.display = 'none';
        }
        if (elEmail)
            window.gigya.global.setPlaceholder(elEmail, elEmail.getAttribute('data-placeholder'), 'gig-comments-placeholder');
        window.gigya.utils.DOM.appendToBody(divGuest);
        if (!this.plugin.isMobileUI)
            window.gigya.pluginUtils.animation.slideDown(divGuest);
        var fnEnterEscPress = function (e) {
            var var_key = e.keyCode;
            if (var_key == 27) {
                divGuest.parentNode.removeChild(divGuest);
                window.gigya.utils.DOM.removeEventListener(elOk, 'click', fnOK);
            }
            else if (var_key == 13)
                fnOK();
        };
        var fnUnbind = function () {
            window.gigya.utils.DOM.removeEventListener(document, 'keydown', fnEnterEscPress);
            window.gigya.utils.DOM.removeEventListener(elOk, 'click', fnOK);
        };
        window.gigya.pluginUtils.DOM.removeElementOnDocClickOrEscape(divGuest, function (e, wasOpen) {
            // Stop the event so the login box won't open again
            if (wasOpen && (e.target == elOpener || window.gigya.utils.DOM.isChildOf(e.target, elOpener))) {
                CommentsUtils_1.Events.cancelEvent(e);
            }
        }, null);
        var elOk = window.gigya.utils.DOM.getElementsByClass(divGuest, 'gig-guestbox-ok')[0];
        var elNickname = window.gigya.utils.DOM.getElementsByClass(divGuest, 'gig-guestbox-nickname')[0];
        var elEmail = window.gigya.utils.DOM.getElementsByClass(divGuest, 'gig-guestbox-email')[0];
        var elError = window.gigya.utils.DOM.getElementsByClass(divGuest, 'gig-guestbox-error')[0];
        //if (elNickname) elNickname.focus();
        if (elNickname && elEmail && elOk) {
            var fnOK = function () {
                var errorText = '';
                var email = elEmail['placeholderCleared'] ? elEmail.value : '';
                var nickname = elNickname['placeholderCleared'] ? elNickname.value : '';
                var hasEmail = email.replace(/ /g, '') != '';
                var hasNickname = nickname.replace(/ /g, '').length >= 3;
                if (_this.plugin.settings.requireGuestName && !hasNickname) {
                    errorText = _this.getText('nickname_should_be_at_least_3_characters');
                }
                else if ((_this.plugin.settings.isGuestEmailRequired && !hasEmail) || (hasEmail && !window.gigya.pluginUtils.validation.isEmailValid(email))) {
                    errorText = _this.getText('please_provide_a_valid_email_address');
                }
                elError.innerHTML = errorText;
                if (!errorText) {
                    _this.loginAsGuest(nickname, email);
                    divGuest.parentNode.removeChild(divGuest);
                    fnUnbind();
                    if (onLogin)
                        onLogin();
                }
            };
            window.gigya.utils.DOM.addEventListener(elOk, 'click', fnOK);
            window.gigya.utils.DOM.addEventListener(document, 'keydown', fnEnterEscPress);
        }
    };
    //#endregion
    //#region Rating stars
    BaseComposeBox.prototype.renderRatings = function () {
        if (!this.uiElements.ratings)
            return;
        if (!this.data.isReply() && this.plugin.settings.enableRatings != 'disabled') {
            var arDims = [{ id: '_overall', name: this.getText('overall_rating') }];
            if (this.plugin.settings.ratingDims)
                arDims = arDims.concat(this.plugin.settings.ratingDims);
            this.uiElements.ratings.style.display = '';
            this.uiElements.ratings.innerHTML = '';
            var maxDimTitleWidth = 0;
            for (var i = 0; i < arDims.length; i++) {
                var dim = arDims[i];
                var elRating = this.getRatingElement(dim);
                if (dim.id === '_overall')
                    this.uiElements.ratingsOverall = elRating;
                this.uiElements.ratings.appendChild(elRating);
                var elTitle = window.gigya.utils.DOM.getElementsByClass(elRating, 'gig-composebox-rating-title')[0];
                if (elTitle)
                    maxDimTitleWidth = Math.max(elTitle.offsetWidth, maxDimTitleWidth);
            }
            if (maxDimTitleWidth > 0)
                window.gigya._.plugins.utils.css.addCss('#' + this.plugin.containerID + ' *.gig-composebox-rating-title { width:' + (maxDimTitleWidth + 1) + 'px; }', this.plugin.params['cssPrefix']);
        }
        else {
            this.uiElements.ratings.style.display = 'none';
        }
    };
    BaseComposeBox.prototype.updateRatings = function () {
        if (!this.uiElements.ratings)
            return;
        var arDims = [{ id: '_overall', name: this.getText('overall_rating') }];
        if (this.plugin.settings.ratingDims)
            arDims = arDims.concat(this.plugin.settings.ratingDims);
        for (var i = 0; i < arDims.length; i++) {
            var dim = arDims[i];
            var elRating = window.gigya.utils.DOM.getElementsByAttribute(this.uiElements.ratings, '*', 'data-dimension', dim.id)[0];
            this.updateStarsToValue(elRating, this.data.ratings[dim.id]);
        }
    };
    BaseComposeBox.prototype.getRatingElement = function (dim) {
        var _this = this;
        var elRating = document.createElement('div');
        elRating.className = 'gig-composebox-rating gig-composebox-rating-' + dim.id;
        elRating.innerHTML = this.plugin.templates['composeboxRating'];
        var elTitle = window.gigya.utils.DOM.getElementsByClass(elRating, 'gig-composebox-rating-title')[0];
        if (elTitle)
            elTitle.innerHTML = dim.name + ':';
        var elValue = window.gigya.utils.DOM.getElementsByClass(elRating, 'gig-composebox-rating-value')[0];
        if (elValue) {
            elValue.setAttribute('data-dimension', dim.id);
            for (var i = 1; i < 6; i++) {
                var elStar = document.createElement('div');
                elStar.setAttribute('data-value', i.toString());
                window.gigya.utils.DOM.addClassToElement(elStar, 'gig-composebox-rating-star');
                window.gigya.utils.DOM.addEventListener(elStar, 'mouseover', function (e) { return _this.onStarMouseOver(e); });
                window.gigya.utils.DOM.addEventListener(elStar, 'mouseout', function (e) { return _this.onStarMouseOut(e); });
                window.gigya.utils.DOM.addButtonSubmitListener(elStar, function (e) { return _this.onStarClick(e); });
                elValue.appendChild(elStar);
            }
        }
        return elRating;
    };
    //#endregion
    //#region Login / Logout
    BaseComposeBox.prototype.loginAsGuest = function (nickname, email) {
        window.gigya.utils.cookie.set('_gig_comments_is_guest', '1');
        if (nickname)
            window.gigya.utils.cookie.set('_gig_comments_nickname', nickname);
        if (email)
            window.gigya.utils.cookie.set('_gig_comments_email', email);
        this.plugin.setUser(this.getGuestUser());
    };
    BaseComposeBox.prototype.logoutGuest = function () {
        window.gigya.utils.cookie.remove('_gig_comments_is_guest');
        window.gigya.utils.cookie.remove('_gig_comments_email');
        window.gigya.utils.cookie.remove('_gig_comments_nickname');
        this.plugin.setUser({});
    };
    BaseComposeBox.prototype.onSiteLoginClick = function (onLogin) {
        if (!onLogin)
            onLogin = function () { };
        window.gigya.events.dispatchForWidget({ eventName: 'siteLoginClicked', callback: onLogin }, this.plugin.params);
    };
    //#endregion
    // TODO: should move to another class
    //#region Guest user
    BaseComposeBox.prototype.getGuestUser = function () {
        var isGuest = window.gigya.utils.cookie.get('_gig_comments_is_guest');
        var nickname = window.gigya.utils.cookie.get('_gig_comments_nickname') || '';
        var email = window.gigya.utils.cookie.get('_gig_comments_email') || '';
        var user = {
            UID: '',
            nickname: nickname,
            isGuest: isGuest == '1',
            email: email,
        };
        return user;
    };
    BaseComposeBox.prototype.lockGuest = function () {
        window.gigya.utils.cookie.set('_gig_comments_locked', '1');
    };
    BaseComposeBox.prototype.isGuestLocked = function () {
        return window.gigya.utils.cookie.get('_gig_comments_locked');
    };
    //#endregion
    //#region Inputs handling
    BaseComposeBox.prototype.startPolling = function () {
        var _this = this;
        this.pollingInterval = setInterval(function () {
            _this.handleUpdatedText();
        }, 100);
    };
    BaseComposeBox.prototype.stopPolling = function () {
        if (typeof this.pollingInterval != 'undefined') {
            clearInterval(this.pollingInterval);
            delete this.pollingInterval;
        }
    };
    BaseComposeBox.prototype.validate = function (shouldFocus) {
        var fieldErrorClass = 'gig-composebox-field-error';
        var commentValue = this.uiElements.textArea ? this.uiElements.textArea.innerHTML : '';
        var elFirstError;
        var validated = true;
        if (this.uiElements.editor) {
            window.gigya.utils.DOM.removeClassFromElement(this.uiElements.editor, fieldErrorClass);
            this.uiElements.textArea.removeAttribute('aria-invalid');
        }
        if (this.uiElements.summary) {
            window.gigya.utils.DOM.removeClassFromElement(this.uiElements.summary, fieldErrorClass);
        }
        if (this.uiElements.ratingsOverall) {
            window.gigya.utils.DOM.removeClassFromElement(this.uiElements.ratingsOverall, fieldErrorClass);
        }
        // Validate title if required
        if (this.plugin.settings.enableCommentTitles.split('_')[1] == 'mandatory' &&
            this.uiElements.summaryInput &&
            !this.data.isReply() &&
            (this.uiElements.summaryInput.value
                .replace(/ /g, '')
                .replace(/\n/g, '')
                .replace(/\r/g, '') == '' ||
                !this.uiElements.summaryInput['placeholderCleared'])) {
            if (this.uiElements.summary)
                window.gigya.utils.DOM.addClassToElement(this.uiElements.summary, fieldErrorClass);
            if (!elFirstError)
                elFirstError = this.uiElements.summaryInput;
            validated = false;
        }
        // Validate comment body if required
        if ((this.data.isReply() || this.plugin.settings.enableCommentBody.split('_')[1] == 'mandatory') &&
            commentValue
                .replace(/ /g, '')
                .replace(/\n/g, '')
                .replace(/\r/g, '') == '') {
            if (this.uiElements.editor) {
                window.gigya.utils.DOM.addClassToElement(this.uiElements.editor, fieldErrorClass);
                this.uiElements.textArea.setAttribute('aria-invalid', 'true');
            }
            if (!elFirstError)
                elFirstError = this.uiElements.textArea;
            validated = false;
        }
        if (this.uiElements.ratingsOverall &&
            this.plugin.settings.enableRatings.split('_')[1] == 'mandatory' &&
            (!this.data.ratings || !this.data.ratings['_overall'])) {
            window.gigya.utils.DOM.addClassToElement(this.uiElements.ratingsOverall, fieldErrorClass);
            validated = false;
        }
        if (this.uiElements.errorMessage) {
            if (!validated) {
                this.pendingValidation = true;
                this.uiElements.errorMessage.innerHTML =
                    this.plugin.settings.mode == 'ratingsOnly' ? this.getText('please_select_your_rating') : this.getText('please_fill_required_fields');
                this.uiElements.errorMessage.style.display = 'block';
                if (elFirstError && shouldFocus)
                    elFirstError.focus();
            }
            else {
                this.pendingValidation = false;
                this.uiElements.errorMessage.innerHTML = '';
                this.uiElements.errorMessage.style.display = 'none';
            }
        }
        return validated;
    };
    BaseComposeBox.prototype.clear = function () {
        if (this.uiElements.textArea) {
            this.uiElements.textArea.innerHTML = '';
            this.uiElements.textArea.style.minHeight = '';
        }
        if (this.uiElements.summaryInput) {
            this.uiElements.summaryInput.value = '';
            this.uiElements.summaryInput['refreshPlaceholder']();
        }
        if (this.mediaItem) {
            if (this.uiElements.mediaItem)
                this.uiElements.mediaItem.innerHTML = '';
            this.mediaItem = null;
        }
        this.clearRatings();
    };
    BaseComposeBox.prototype.clearRatings = function () {
        this.data.ratings = {};
        this.updateRatings();
    };
    BaseComposeBox.prototype.handleUpdatedText = function () {
        if (document.activeElement != this.uiElements.textArea)
            return;
        try {
            var selection = CommentsUtils_1.Selection.getSelection(this.uiElements.textArea);
        }
        catch (ex) {
            this.stopPolling();
        }
        var commentHTML = this.uiElements.textArea.innerHTML;
        // Content has changed
        if (this.lastCommentHTML != commentHTML) {
            var newCommentHTML = this.stripUnallowedTags(commentHTML);
            newCommentHTML = this.stripCRLFTags(newCommentHTML);
            if (commentHTML != newCommentHTML) {
                var diff = newCommentHTML.length - commentHTML.length;
                this.uiElements.textArea.innerHTML = newCommentHTML;
                CommentsUtils_1.Selection.restoreSelection(this.uiElements.textArea, selection);
            }
            if (this.uiElements.textArea.textContent.length > this.plugin.settings.maxCommentLength) {
                this.truncateTextNodes(this.uiElements.textArea, this.plugin.settings.maxCommentLength);
            }
            this.lastCommentHTML = this.uiElements.textArea.innerHTML;
        }
        if (selection && !this.plugin.isMobileUI) {
            this.updateUserTaggingIfNeeded(selection);
            this.lastSelection = window.gigya.utils.object.clone(selection);
        }
    };
    BaseComposeBox.prototype.getTextNodes = function (node, array) {
        if (node.nodeType === 3) {
            array.push(node);
        }
        else if (node.nodeType === 1) {
            var children = node.childNodes;
            for (var i = 0; i < children.length; i++) {
                this.getTextNodes(children[i], array);
            }
        }
    };
    BaseComposeBox.prototype.truncateTextNodes = function (node, textLength) {
        var textNodes = [];
        this.getTextNodes(node, textNodes);
        for (var i = 0; i < textNodes.length; i++) {
            var currNode = textNodes[i];
            if (textLength > currNode.nodeValue.length) {
                textLength -= currNode.nodeValue.length;
            }
            else if (textLength == 0) {
                currNode.nodeValue = '';
            }
            else {
                currNode.nodeValue = currNode.nodeValue.substring(0, textLength);
                textLength = 0;
            }
        }
    };
    BaseComposeBox.prototype.stripUnallowedTags = function (commentHTML) {
        if (commentHTML) {
            var allowed = BaseComposeBox.alwaysAllowedTags + (this.plugin.settings.enableRichTextEditing ? '|' + BaseComposeBox.richTextAllowedTags : '');
            var unallowedRegex = new RegExp('<((?!(' + allowed + ')[ >/])[a-z]+)[^<]*>|</((?!(' + allowed + ')[ >/])[a-z]+)>', 'gi');
            commentHTML = commentHTML.replace(unallowedRegex, '');
            if (commentHTML.indexOf('style="') != -1) {
                commentHTML = commentHTML.replace(/style="((.|\n)*?)"/g, '');
            }
        }
        return commentHTML;
    };
    BaseComposeBox.prototype.stripCRLFTags = function (commentHTML) {
        if (commentHTML) {
            commentHTML = commentHTML.replace(/\r|\n/g, '');
        }
        return commentHTML;
    };
    //#endregion
    //#region User Tagging
    BaseComposeBox.prototype.updateUserTaggingIfNeeded = function (selection) {
        var _this = this;
        if (this.plugin.settings.enableUserTagging && selection && selection.start != this.lastSelection.start && selection.start == selection.end) {
            // Replace &nbsp; with a space
            var text = selection.childText.replace(String.fromCharCode(160), ' ');
            var words = text.match(/\S+/g);
            if (words && words.length >= 0) {
                var last = words[words.length - 1];
            }
            if (this.userTaggingBox) {
                this.userTaggingBox.processTextChanged(text);
            }
            else if (!this.userTaggingBox && (typeof last !== 'undefined' && last.lastIndexOf('@') === 0)) {
                this.userTaggingBox = new UserTaggingBox_1.UserTaggingBox(this, function (uid, el) {
                    if (uid && el) {
                        _this.insertUserTag(el, caretLocation);
                    }
                    else {
                        delete _this.userTaggingBox;
                    }
                }, text);
                var caretLocation = text.lastIndexOf('@');
            }
        }
    };
    BaseComposeBox.prototype.insertUserTag = function (userElement, replaceStart) {
        if (replaceStart === -1)
            return;
        if (!window.getSelection)
            return;
        this.uiElements.textArea.focus();
        CommentsUtils_1.Selection.restoreSelection(this.uiElements.textArea, this.lastSelection);
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            var range = sel.getRangeAt(0);
            if (typeof replaceStart != 'undefined') {
                range.setStart(range.startContainer, replaceStart);
                range.deleteContents();
            }
            // We need to add empty text nodes before & after the button so browsers will be nice about it
            var textNode = document.createTextNode(String.fromCharCode(160));
            range.insertNode(textNode);
            range.insertNode(userElement);
            textNode = document.createTextNode(String.fromCharCode(160));
            range.insertNode(textNode);
            var newRange = document.createRange();
            newRange.setStartAfter(textNode);
            sel.removeAllRanges();
            sel.addRange(newRange);
        }
    };
    //#endregion
    // TODO: should move to a different class
    //#region Following replies
    BaseComposeBox.prototype.onFollowClick = function (elOpener) {
        var _this = this;
        if (this.plugin.isUserFollowing()) {
            this.unfollow();
        }
        else {
            var dialogBody = window.gigya.utils.templates.fill(this.plugin.templates['emailTextboxDialogBody'], {
                text: this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS
                    ? this.getText('enter_your_email_to_receive_notifications_when_someone_comments_on_your_reviews_colon')
                    : this.getText('enter_your_email_to_receive_notifications_when_someone_replies_to_your_comments_colon'),
                buttonText: this.getText('follow'),
                email: this.plugin.user.email,
                emailLabel: this.getText('email'),
            });
            var dialog_1 = this.plugin.showDialog(this.getText('notifications_settings'), dialogBody, undefined, undefined, undefined, function () {
                // This fires when the dialog closes. Return focus to the follow link.
                _this.uiElements.followLink.focus();
            });
            var btnFollow = window.gigya.utils.DOM.getElementsByClass(dialog_1, 'gig-comments-dialog-textbox-button')[0];
            window.gigya.utils.DOM.addButtonSubmitListener(btnFollow, function (e) {
                var tb = window.gigya.utils.DOM.getElementsByClass(dialog_1, 'gig-comments-dialog-textbox')[0];
                if (tb) {
                    var email = tb.value;
                    if (window.gigya.pluginUtils.validation.isEmailValid(email)) {
                        _this.follow(tb.value);
                        _this.plugin.activeDialog.cancelHandler();
                    }
                    else {
                        var elError = window.gigya.utils.DOM.getElementsByClass(dialog_1, 'gig-comments-dialog-error')[0];
                        elError.innerHTML = _this.getText('please_provide_a_valid_email_address');
                    }
                }
            });
        }
    };
    BaseComposeBox.prototype.follow = function (email) {
        window.gigya.comments.setUserOptions(this.plugin.params, {
            replyNotifications: 'immediate',
            notificationsEmail: email,
            notificationsLanguage: this.plugin.params['lang'],
        });
        if (!this.plugin.userOptions)
            this.plugin.userOptions = {};
        this.plugin.userOptions.replyNotifications = 'immediate';
        this.updateFollow();
    };
    BaseComposeBox.prototype.unfollow = function () {
        window.gigya.comments.setUserOptions(this.plugin.params, { replyNotifications: 'disabled' });
        this.plugin.userOptions.replyNotifications = 'disabled';
        this.updateFollow();
    };
    BaseComposeBox.prototype.updateFollow = function () {
        var elFollow = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-composebox-follow')[0];
        if (elFollow) {
            if (this.plugin.user.isConnected && !this.plugin.user.isTempUser) {
                if (!this.plugin.isUserFollowing()) {
                    window.gigya.utils.DOM.removeClassFromElement(elFollow, 'gig-composebox-following');
                    if (this.plugin.isMobileUI) {
                        elFollow.innerHTML = this.getText('follow');
                    }
                    else {
                        elFollow.innerHTML =
                            this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS
                                ? this.getText('follow_replies_to_my_reviews')
                                : this.getText('follow_replies_to_my_comments');
                    }
                    elFollow.title =
                        this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS
                            ? this.getText('notify_me_when_someone_comments_on_my_review')
                            : this.getText('notify_me_when_someone_replies_to_my_comments');
                    elFollow.setAttribute('aria-label', elFollow.title);
                }
                else {
                    window.gigya.utils.DOM.addClassToElement(elFollow, 'gig-composebox-following');
                    elFollow.innerHTML = this.getText('following');
                    elFollow.setAttribute('aria-label', this.getText('unfollow'));
                    elFollow.title = '';
                }
                elFollow.style.display = '';
            }
            else {
                elFollow.style.display = 'none';
            }
        }
    };
    //#endregion
    //#region Sidebar popups
    BaseComposeBox.prototype.toggleSidebarButton = function (button, highlight) {
        if (highlight) {
            window.gigya.utils.DOM.addClassToElement(button, 'gig-composebox-sidebar-button-down');
        }
        else {
            window.gigya.utils.DOM.removeClassFromElement(button, 'gig-composebox-sidebar-button-down');
        }
    };
    BaseComposeBox.prototype.onSidebarTagClicked = function (e) {
        var _this = this;
        var elSidebarTag = (e.target || e.srcElement);
        if (!this.userTaggingBox && elSidebarTag.className.indexOf('gig-composebox-sidebar-button-down') == -1) {
            window.gigya.utils.DOM.addClassToElement(elSidebarTag, 'gig-composebox-sidebar-button-down');
            if (this.userTaggingBox)
                this.userTaggingBox.cancel();
            this.userTaggingBox = new UserTaggingBox_1.UserTaggingBox(this, function (uid, el) {
                if (uid && el) {
                    _this.insertUserTag(el);
                }
                delete _this.userTaggingBox;
                window.gigya.utils.DOM.removeClassFromElement(elSidebarTag, 'gig-composebox-sidebar-button-down');
            }, '');
        }
    };
    BaseComposeBox.prototype.showSidebarBox = function (opener, box, onClose) {
        var _this = this;
        if (!opener)
            return;
        var pos = window.gigya.utils.DOM.getElementPosition(opener);
        this.toggleSidebarButton(opener, true);
        box.style.position = 'absolute';
        if (box.style.zIndex != null) {
            box.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
        }
        window.gigya.pluginUtils.animation.fadeIn(box);
        window.gigya.utils.DOM.appendToBody(box);
        if (this.plugin.isRtl) {
            box.style.left = Math.max(0, pos.left + opener.offsetWidth) + 'px';
        }
        else {
            box.style.left = Math.max(0, pos.left - box.offsetWidth) + 'px';
        }
        box.style.top = pos.top + 'px';
        window.gigya.pluginUtils.DOM.removeElementOnDocClickOrEscape(box, function (e, wasOpen) {
            if (!wasOpen)
                return;
            _this.toggleSidebarButton(opener, false);
            if (e.target == opener) {
                CommentsUtils_1.Events.cancelEvent(e);
            }
            if (onClose)
                onClose();
        });
    };
    BaseComposeBox.prototype.showMediaBox = function (opener) {
        var _this = this;
        var divMediaBox = document.createElement('div');
        divMediaBox.className = 'gig-comments-container gig-comments-mediabox';
        divMediaBox.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['mediabox'], {
            url: this.mediaItem ? this.mediaItem.url : '',
            enter_url: this.plugin.getText('enter_url'),
            add_media_item: this.plugin.getText('tip_use_trusted_urls'),
            ok: this.plugin.getText('ok'),
        });
        var elURL = window.gigya.utils.DOM.getElementsByClass(divMediaBox, 'gig-mediabox-url')[0];
        var elOK = window.gigya.utils.DOM.getElementsByClass(divMediaBox, 'gig-mediabox-ok')[0];
        if (elOK) {
            var fnRemoveListeners = function () {
                window.gigya.utils.DOM.removeEventListener(document, 'keydown', fnEnterEscPress);
                window.gigya.utils.DOM.removeEventListener(elOK, 'click', fnOK);
            };
            var fnEnterEscPress = function (e) {
                var var_key = e.keyCode;
                if (var_key == 27) {
                    divMediaBox.parentElement.removeChild(divMediaBox);
                    fnRemoveListeners();
                }
                else if (var_key == 13)
                    fnOK();
            };
            var fnOK = function () {
                if (elURL && elURL.value) {
                    divMediaBox.parentElement.removeChild(divMediaBox);
                    _this.showMediaItemPreview();
                    _this.toggleSidebarButton(opener, false);
                    window.gigya.comments.analyzeMediaItem({
                        categoryID: _this.plugin.params['categoryID'],
                        urls: elURL.value,
                        callback: function (response) {
                            if (!response.errorCode && response.mediaItems && response.mediaItems.length == 1) {
                                _this.mediaItem = response.mediaItems[0];
                                _this.updateMediaItem();
                            }
                            else {
                                _this.uiElements.errorMessage.style.display = 'block';
                                _this.uiElements.errorMessage.innerHTML = _this.plugin.getText('the_provided_url_is_not_supported');
                                window.gigya.pluginUtils.DOM.hideElementOnDocClick(_this.uiElements.errorMessage);
                                _this.removeMediaItemPreview();
                            }
                        },
                    });
                }
                else {
                    divMediaBox.parentElement.removeChild(divMediaBox);
                    _this.toggleSidebarButton(opener, false);
                }
                fnRemoveListeners();
            };
            window.gigya.utils.DOM.addEventListener(document, 'keydown', fnEnterEscPress);
            window.gigya.utils.DOM.addEventListener(elOK, 'click', fnOK);
        }
        this.showSidebarBox(opener, divMediaBox, fnRemoveListeners);
        elURL.focus();
    };
    //#endregion
    //#region Media items
    BaseComposeBox.prototype.removeMediaItemPreview = function () {
        if (this.uiElements.mediaItem)
            this.uiElements.mediaItem.innerHTML = '';
        this.mediaItem = null;
    };
    BaseComposeBox.prototype.showMediaItemPreview = function () {
        if (!this.uiElements.mediaItem)
            return;
        this.uiElements.mediaItem.innerHTML = '';
        if (this.uiElements.editor)
            window.gigya.utils.DOM.addClassToElement(this.uiElements.editor, 'gig-composebox-editor-with-media');
        var elPreview = document.createElement('div');
        window.gigya.utils.DOM.addClassToElement(elPreview, 'gig-composebox-media-preview');
        this.uiElements.mediaItem.appendChild(elPreview);
        elPreview.style.height = elPreview.offsetWidth * 0.75 + 'px';
    };
    BaseComposeBox.prototype.updateMediaItem = function () {
        var _this = this;
        if (!this.uiElements.mediaItem)
            return;
        var elPreview = this.uiElements.mediaItem.childNodes[0];
        elPreview.style.backgroundImage = '';
        var fnOnCancel = function () {
            _this.uiElements.mediaItem.innerHTML = '';
            _this.mediaItem = null;
            if (_this.uiElements.editor)
                window.gigya.utils.DOM.removeClassFromElement(_this.uiElements.editor, 'gig-composebox-editor-with-media');
        };
        this.plugin.buildMediaItemElement(elPreview, this.mediaItem, true, fnOnCancel);
    };
    //#endregion
    //#region Rich text
    BaseComposeBox.prototype.showFontBox = function (opener) {
        var _this = this;
        var divFont = document.createElement('div');
        divFont.innerHTML = this.plugin.templates['fontbox'];
        divFont.className = 'gig-comments-container gig-comments-fontbox';
        var arFontItems = divFont.getElementsByTagName('li');
        for (var i = 0; i < arFontItems.length; i++) {
            var fontItem = arFontItems[i];
            window.gigya.utils.DOM.addEventListener(fontItem, 'mousedown', function (e) {
                var target = e.target || e.srcElement;
                var fontCommand = target.getAttribute('data-command');
                if (fontCommand) {
                    divFont.parentNode.removeChild(divFont);
                    _this.toggleSidebarButton(opener, false);
                    _this.setFontCommand(fontCommand);
                }
                window.gigya.utils.DOM.cancelEvent(e);
            });
        }
        this.showSidebarBox(opener, divFont);
    };
    BaseComposeBox.prototype.setFontCommand = function (command) {
        switch (command) {
            case 'bold':
                document.execCommand('bold', false, true);
                break;
            case 'italic':
                document.execCommand('italic', false, true);
                break;
            case 'underline':
                document.execCommand('underline', false, true);
                break;
            case 'bullets':
                document.execCommand('InsertUnorderedList', false, 'newUL');
                break;
        }
    };
    //#endregion
    //#region "Abstract" methods
    BaseComposeBox.prototype.submit = function () { };
    BaseComposeBox.prototype.submitCallback = function (response) {
        var comment = this.plugin.getComment(this.data.ID);
        if (response['errorCode'] > 0) {
            var errorText;
            switch (response['errorCode']) {
                case 403037:
                    errorText = this.getText('only_one_review_per_product_is_allowed');
                    break;
                case 400124:
                    errorText = this.getText('daily_commenting_limit_reached');
                    break;
                case 400125:
                    errorText = this.getText('commenting_frequency_limit_reached');
                    break;
                case 403038:
                    errorText = this.plugin.textMode == Comments_Models_1.TextMode.COMMENTS ? this.getText('comment_edit_rejected') : this.getText('review_edit_rejected');
                    break;
                default:
                    errorText = this.getText('an_error_has_occurred_please_try_again_later', '%errorCode', response['errorCode']);
            }
            if (errorText)
                comment.updateStatus(errorText);
            window.gigya.events.dispatchErrorFromResponse(this.plugin.params, response);
        }
        else if (response['comment']) {
            comment.isTemp = false;
            comment.isPost = true;
            comment.reset(CommentData_1.CommentData.fromRawData(response['comment']));
        }
    };
    BaseComposeBox.prototype.getSubmitText = function () {
        return '';
    };
    BaseComposeBox.prototype.afterRender = function () { };
    BaseComposeBox.prototype.getTitle = function () {
        return '';
    };
    BaseComposeBox.alwaysAllowedTags = 'div|br|p|input|span';
    BaseComposeBox.richTextAllowedTags = 'ul|li|u|i|b|strong|em';
    BaseComposeBox.allowedOnLimitKeys = [
        8 /* Backspace */,
        9 /* Tab */,
        16 /* Shift */,
        17 /* Ctrl */,
        18 /* Alt */,
        19 /* Pause */,
        20,
        27 /* Esc */,
        33 /* PgUp */,
        34 /* PgDown */,
        35 /* Home */,
        36 /* End */,
        37 /* Left */,
        38 /* Up */,
        39 /* Right */,
        40 /* Down */,
        45 /* Insert */,
        46 /* Del */,
        144 /* NumLock */,
        145 /* ScrollLock */,
    ];
    return BaseComposeBox;
}());
exports.BaseComposeBox = BaseComposeBox;


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/Comment.ts":
/*!*************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/Comment.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var NewCommentBox_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/NewCommentBox */ "./src/comments/Gigya.Comments.JsPlugin/app/NewCommentBox.ts");
var Comments_Models_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/Comments.Models */ "./src/comments/Gigya.Comments.JsPlugin/app/Comments.Models.ts");
var CommentsUtils_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils.ts");
var EditCommentBox_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/EditCommentBox */ "./src/comments/Gigya.Comments.JsPlugin/app/EditCommentBox.ts");
var Comment = /** @class */ (function () {
    function Comment(plugin, data, level, viaProvider, isTemp, isNew, error, info) {
        if (level === void 0) { level = 0; }
        if (isTemp === void 0) { isTemp = false; }
        if (isNew === void 0) { isNew = false; }
        this.plugin = plugin;
        this.level = level;
        this.viaProvider = viaProvider;
        this.isTemp = isTemp;
        this.isNew = isNew;
        this.error = error;
        this.info = info;
        this.replies = [];
        this.descendantsCount = 0;
        this.reset(data);
        this.updateParents();
    }
    Comment.prototype.updateParents = function () {
        var parent = this.getParent();
        if (parent && parent.data && parent.data.replies && window.gigya.utils.array.indexOf(parent.data.replies, this.data) == -1) {
            parent.data.replies.push(this.data);
        }
        if (parent && parent.replies && window.gigya.utils.array.indexOf(parent.replies, this) == -1) {
            parent.replies.push(this);
        }
        if (!parent && window.gigya.utils.array.indexOf(this.plugin.comments, this) == -1) {
            this.plugin.comments.push(this);
        }
    };
    Comment.prototype.updateDescendantsCountInParents = function (parent) {
        while (parent) {
            // Do not add to total count if is removed comment or comment has not yet been accepted by the API.
            parent.descendantsCount = (parent.descendantsCount || 0) + (this.isRemovedComment() || !this.data.status ? 0 : 1);
            parent.updateRepliesCount();
            this.plugin.setLinks(parent.getContainer());
            parent = parent.getParent();
        }
    };
    Comment.prototype.setElementHtml = function (subClass, html) {
        var el = this.getElement(subClass);
        if (el)
            el.innerHTML = html;
    };
    Comment.prototype.bindButtonSubmitElement = function (subClass, handler) {
        var el = this.getElement(subClass);
        if (el) {
            window.gigya.utils.DOM.addButtonSubmitListener(el, handler.bind(this));
        }
    };
    Comment.prototype.getElement = function (subClass) {
        var arEls = window.gigya.utils.DOM.getElementsByClass(this.getContainer(), 'gig-comment-' + subClass);
        return arEls.length > 0 ? arEls[0] : null;
    };
    Comment.prototype.dispose = function () {
        this.plugin.removeComment(this);
    };
    Comment.prototype.reset = function (data, isUpdate, isPost) {
        delete this.plugin.commentInstances[this.id];
        this.id = data.ID;
        this.plugin.commentInstances[this.id] = this;
        this.data = data;
        if (isNaN(this.data.posVotes))
            this.data.posVotes = 0;
        if (isNaN(this.data.negVotes))
            this.data.negVotes = 0;
        if (data.sender.name && data.sender.name.toLowerCase() == 'anonymous')
            data.sender.name = this.plugin.getText('anonymous');
        else if (!data.sender.name && data.isModerator)
            data.sender.name = this.plugin.getText('moderator');
        else if (data.sender.name && data.sender.name.toLowerCase() == 'guest')
            data.sender.name = this.plugin.getText('guest');
        this.updateAll();
        if (data.replies) {
            this.descendantsCount = 0;
            for (var i = 0; i < data.replies.length; i++) {
                var replyData = data.replies[i];
                var reply = this.plugin.getComment(replyData.ID);
                if (reply) {
                    reply.reset(replyData, isUpdate);
                }
                else {
                    reply = new Comment(this.plugin, replyData, this.level + 1, null, null, this.isNew || isUpdate);
                }
            }
            this.updateRepliesCount();
        }
        this.updateDescendantsCountInParents(this.getParent());
    };
    Comment.prototype.removeChild = function (id) {
        window.gigya.utils.array.removeByProperty(this.replies, 'id', id);
        window.gigya.utils.array.removeByProperty(this.data.replies, 'ID', id);
    };
    Comment.prototype.getUsername = function () {
        return this.data.sender.name || (this.data.isModerator ? this.plugin.getText('moderator') : this.plugin.getText('guest'));
    };
    Comment.prototype.getContainer = function () {
        return this.container;
    };
    Comment.prototype.getParent = function () {
        return this.plugin.getComment(this.data.parentID);
    };
    Comment.prototype.getText = function (textKey, replaceStr, withStr) {
        return this.plugin.getText(textKey, replaceStr, withStr);
    };
    Comment.prototype.expand = function () {
        var elExpandArrow = this.getElement('repliesArrow');
        var elReplies = this.getElement('replies');
        if (elExpandArrow && elReplies) {
            window.gigya.utils.DOM.removeClassFromElement(elReplies, 'gig-comment-replies-collapsed');
            window.gigya.utils.DOM.removeClassFromElement(elExpandArrow, 'gig-comment-repliesArrow-collapsed');
        }
        this.updateReplies(true);
    };
    Comment.prototype.collapse = function () {
        var elExpandArrow = this.getElement('repliesArrow');
        var elReplies = this.getElement('replies');
        if (elExpandArrow && elReplies) {
            window.setTimeout(function () {
                window.gigya.utils.DOM.addClassToElement(elReplies, 'gig-comment-replies-collapsed');
            }, 1);
            window.gigya.utils.DOM.addClassToElement(elExpandArrow, 'gig-comment-repliesArrow-collapsed');
        }
        this.detachReplies();
        elReplies.innerHTML = '';
    };
    Comment.prototype.isCollapse = function () {
        return this.container.getElementsByClassName('gig-comment-replies-collapsed').length > 0;
    };
    Comment.prototype.expandCollapse = function () {
        var elReplies = this.getElement('replies');
        if (elReplies) {
            if (!window.gigya.utils.DOM.isElementClass(elReplies, 'gig-comment-replies-collapsed')) {
                this.collapse();
            }
            else {
                this.expand();
                var firstComment = elReplies.querySelector('.gig-comment');
                if (firstComment) {
                    firstComment.focus();
                }
            }
        }
    };
    Comment.prototype.detachReplies = function () {
        for (var i = 0; i < this.replies.length; i++) {
            var reply = this.replies[i];
            reply.container = null;
            if (reply.plugin.tempComposeBox) {
                reply.plugin.tempComposeBox.close();
            }
            reply.detachReplies();
        }
    };
    Comment.prototype.updateRepliesCount = function () {
        var c = this.getContainer();
        if (c) {
            var repliesArrow = this.getElement('repliesArrow');
            var repliesArrowText = this.getElement('repliesArrow-text');
            var repliesCount = this.descendantsCount || 0;
            if (repliesCount > 0) {
                if (repliesArrow) {
                    repliesArrow.style.display = '';
                }
                if (repliesArrowText) {
                    var sRepliesCountKey;
                    if (repliesCount == 1) {
                        sRepliesCountKey = this.plugin.textMode == Comments_Models_1.TextMode.COMMENTS ? 'one_reply' : 'one_comment';
                    }
                    else {
                        sRepliesCountKey = this.plugin.textMode == Comments_Models_1.TextMode.COMMENTS ? 'num_replies' : 'num_comments';
                    }
                    var text = this.getText(sRepliesCountKey, '%num', repliesCount.toString());
                    // Special handling of french 0 - should not be plural (28600)
                    if (this.plugin.params['lang'] == 'fr' && repliesCount == 0) {
                        text = this.getText(this.plugin.textMode == Comments_Models_1.TextMode.COMMENTS ? 'one_reply' : 'one_comment', '%num', repliesCount.toString());
                        text = text.replace('1', '0');
                    }
                    repliesArrowText.innerHTML = text;
                }
            }
            else {
                if (repliesArrow) {
                    repliesArrow.style.display = 'none';
                }
            }
            this.plugin.setLinks(c);
        }
    };
    Comment.prototype.markAsFlagged = function () {
        this.isFlagged = true;
        var divFlag = this.getElement('flag');
        if (divFlag) {
            window.gigya.utils.DOM.addClassToElement(divFlag, 'gig-comment-flag-submitted');
            divFlag.setAttribute('tabindex', '-1');
            divFlag.setAttribute('aria-disabled', 'true');
        }
        if (!this.plugin.state.flags)
            this.plugin.state.flags = {};
        var uid = this.plugin.user.isGuest ? 'guest' : this.plugin.user.UID;
        this.plugin.state.flags[uid + '_' + this.id] = true;
    };
    Comment.prototype.getHtml = function () {
        return window.gigya.utils.templates.fill(this.plugin.templates['comment'], {
            commentId: this.id,
            like: this.getText('like'),
            unlike: this.getText('unlike'),
            reply: this.plugin.textMode == Comments_Models_1.TextMode.COMMENTS ? this.getText('reply') : this.getText('comment'),
            delete: this.getText('delete'),
            share: this.getText('share'),
            edit: this.getText('edit'),
            edited: this.getText('edited').toLowerCase(),
        });
    };
    Comment.prototype.getChildrenHtml = function () {
        var arChildren = [];
        for (var i = 0; i < this.replies.length; i++) {
            arChildren.push(this.replies[i].getHtml());
        }
        return arChildren.join('');
    };
    Comment.prototype.isRemovedComment = function () {
        return (!this.isPost && ['rejected', 'pending'].indexOf(this.data.status) != -1) || this.data.status === 'deleted';
    };
    Comment.prototype.isPostPending = function () {
        return this.isPost && this.data && this.data.status == 'pending';
    };
    Comment.prototype.updateCommentIDAttribute = function () {
        this.container.setAttribute('data-comment-id', this.data.ID);
        this.container.setAttribute('tabindex', '0');
    };
    Comment.prototype.updateCommentUIDAttribute = function () {
        if (this.data.sender.UID)
            this.container.setAttribute('data-gig-uid', this.data.sender.UID);
    };
    Comment.prototype.updateAll = function (clean, updateChildren) {
        if (clean === void 0) { clean = false; }
        if (updateChildren === void 0) { updateChildren = true; }
        var newContainer = false;
        if (!this.container || !this.container.parentNode) {
            newContainer = true;
            clean = true;
            var parentComment = this.getParent();
            if (!parentComment && this.data.parentID)
                return; //ignore orphaned comments
            var parent = parentComment ? parentComment.getElement('replies') : this.plugin.getElement('comments');
            if (!parent)
                return;
            var el = document.createElement('div');
            el.setAttribute('class', 'gig-comment');
            if (this.isNew) {
                window.gigya.utils.DOM.addClassToElement(el, 'gig-comment-newComment');
                if (this.plugin.isMobileUI) {
                    window.setTimeout(function () {
                        window.gigya.utils.DOM.removeClassFromElement(el, 'gig-comment-newComment');
                        this.updateCommentHighlightingBadgesBackgroundColorForNewComment(this.data.highlightGroups);
                    }, 5000);
                }
            }
            el.setAttribute('data-level', this.level.toString());
            if (this.data.tags) {
                for (var i = 0; i < this.data.tags.length; i++) {
                    el.setAttribute('data-tag-' + this.data.tags[i].replace(/[^A-Za-z0-9]/g, '_'), '1');
                }
            }
            el.innerHTML = this.getHtml();
            if ((this.isTemp || this.isNew) && parent.firstChild) {
                parent.insertBefore(el, parent.firstChild);
            }
            else {
                parent.appendChild(el);
            }
            this.container = el;
        }
        if (clean)
            this.container.innerHTML = this.getHtml();
        if (this.isRemovedComment() && !this.isTemp)
            this.setRemovedCommentProp();
        this.updateComment(clean);
        this.updateVote();
        this.updateRepliesCount();
        this.updateMediaItem();
        this.updateTitle(clean);
        this.updateCommentIDAttribute();
        this.updateCommentUIDAttribute();
        if (updateChildren)
            this.updateReplies(clean);
        this.plugin.setLinks(this.getContainer());
        if (newContainer || clean)
            this.bindAll();
    };
    Comment.prototype.setRemovedCommentProp = function () {
        if (this.data.status == 'pending')
            this.data.commentText =
                this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && this.level == 0
                    ? this.getText('this_review_is_awaiting_moderation')
                    : this.getText('this_comment_is_awaiting_moderation');
        // 'deleted' / 'rejected'
        else
            this.data.commentText =
                this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && this.level == 0
                    ? this.getText('this_review_has_been_deleted')
                    : this.getText('this_comment_has_been_deleted');
        this.data.mediaItems = null;
        this.data.taggedUsers = null;
        this.data.ratings = null;
        this.data.highlightGroups = null;
        window.gigya.utils.DOM.addClassToElement(this.getElement('self-data'), 'gig-comment-data-removed');
        window.gigya.utils.DOM.addClassToElement(this.getElement('photo'), 'gig-comment-photo-removed');
        window.gigya.utils.DOM.addClassToElement(this.getElement('title'), 'gig-comment-title-removed');
        if (!this.data.replies || this.data.replies.length === 0)
            this.dispose();
    };
    Comment.prototype.showRatings = function () {
        var elOpener = this.getElement('rating-drop');
        window.gigya.utils.DOM.addClassToElement(elOpener, 'gig-comment-rating-drop-down');
        var maxDimWidth = 0;
        var elDimensions = document.createElement('div');
        elDimensions.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
        window.gigya.utils.DOM.appendToBody(elDimensions);
        elDimensions.className = 'gig-comments-container gig-comment-rating-dimensions';
        elDimensions.id = 'gig_' + new Date().getTime();
        var dimensions = this.plugin.settings.ratingDims;
        if (dimensions && elDimensions && this.data.ratings) {
            // If there's a rating dimensions definition, drawing the dimension ratings
            for (var i = 0; i < dimensions.length; i++) {
                var dim = dimensions[i];
                if (dim.id == '_overall' || !this.data.ratings[dim.id])
                    continue;
                var elDimension = document.createElement('div');
                elDimension.innerHTML = this.plugin.templates['rating'];
                elDimension.className = 'gig-comment-rating';
                elDimensions.appendChild(elDimension);
                var elDimTitle = window.gigya.utils.DOM.getElementsByClass(elDimension, 'gig-comment-rating-title')[0];
                if (elDimTitle)
                    elDimTitle.innerHTML = dim.name + ':';
                maxDimWidth = Math.max(maxDimWidth, elDimTitle.offsetWidth + 2);
                var elDimValue = window.gigya.utils.DOM.getElementsByClass(elDimension, 'gig-comment-rating-value')[0];
                if (elDimValue) {
                    elDimValue.innerHTML = '';
                    this.updateStarsElement(elDimValue, dim.id);
                }
            }
            // Updating the CSS for the max category width
            window.gigya._.plugins.utils.css.addCss('#' + elDimensions.id + ' *.gig-comment-rating-title { width:' + maxDimWidth + 'px; }', '');
            var pos = window.gigya.utils.DOM.getElementPosition(elOpener);
            elDimensions.style.top = pos.top + elOpener.offsetHeight + 'px';
            var dimensionLeft = Math.max(5, pos.left + (elOpener.offsetWidth - elDimensions.offsetWidth) / 2);
            elDimensions.style.left = dimensionLeft + 'px';
            var thubLeft = pos.left - dimensionLeft - 11;
            window.gigya._.plugins.utils.css.addCss('#' + elDimensions.id + '.gig-comment-rating-dimensions:before {margin-left: ' + thubLeft + 'px}', '');
        }
        window.gigya.pluginUtils.DOM.removeElementOnDocClickOrEscape(elDimensions, function (e, wasOpen) {
            window.gigya.utils.DOM.removeClassFromElement(elOpener, 'gig-comment-rating-drop-down');
            if (wasOpen && e.target == elOpener) {
                e.stopPropagation();
                e.preventDefault();
            }
        }, null);
    };
    Comment.prototype.updateTitle = function (clean) {
        var elTitle = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-comment-title')[0];
        if (!elTitle)
            return;
        if (clean) {
            this.setElementHtml('title', this.plugin.templates['commentTitle']);
        }
        if ((!this.data.ratings || !this.data.ratings['_overall']) && (!this.data.commentTitle || this.data.parentID)) {
            elTitle.style.display = 'none';
        }
        else {
            elTitle.style.display = '';
            this.setElementHtml('summary', this.data.commentTitle || '');
            var elRating = this.getElement('rating');
            var elRatingDrop = this.getElement('rating-drop');
            if (elRating) {
                if (elRatingDrop)
                    elRatingDrop.style.display = 'none';
                elRating.innerHTML = '';
                if (this.data.ratings && this.data.ratings['_overall']) {
                    elRating.style.display = '';
                    this.updateStarsElement(elRating, '_overall');
                    for (var ratingId in this.data.ratings) {
                        if (ratingId != '_overall') {
                            if (elRatingDrop)
                                elRatingDrop.style.display = '';
                            break;
                        }
                    }
                }
                else {
                    elRating.style.display = 'none';
                }
            }
        }
        var badgesContainerElement = this.getElement('header-left');
        this.plugin.removeUserBadges(badgesContainerElement);
        var commenterElement = this.getElement('username');
        var hasUserBadges = this.plugin.createUserHighlightingBadges(commenterElement, this.data.highlightGroups);
        var selfDataElement = this.getElement('self-data');
        if (hasUserBadges) {
            window.gigya.utils.DOM.addClassToElement(selfDataElement, 'gig-comment-withBadges');
        }
        else {
            window.gigya.utils.DOM.removeClassFromElement(selfDataElement, 'gig-comment-withBadges');
        }
    };
    Comment.prototype.updateStarsElement = function (parent, dimensionID) {
        var rating = this.data.ratings[dimensionID];
        // Filling the stars with appropriate image
        for (var i = 0; i < 5; i++) {
            var elCurrStar = document.createElement('div');
            window.gigya.utils.DOM.addClassToElement(elCurrStar, 'gig-comment-rating-star');
            var starClass = '';
            if (i < Math.floor(rating))
                starClass = 'gig-comment-rating-star-full';
            else if (i == rating - 0.5)
                starClass = 'gig-comment-rating-star-half';
            window.gigya.utils.DOM.addClassToElement(elCurrStar, starClass);
            parent.appendChild(elCurrStar);
        }
    };
    Comment.prototype.updateMediaItem = function () {
        var elMediaItem = this.getElement('mediaItem');
        if (!elMediaItem)
            return;
        if (this.data.mediaItems && this.data.mediaItems.length > 0) {
            elMediaItem.style.display = '';
            var mediaItem = this.data.mediaItems[0];
            elMediaItem.innerHTML = '';
            this.plugin.buildMediaItemElement(elMediaItem, mediaItem);
        }
        else {
            elMediaItem.style.display = 'none';
        }
    };
    Comment.prototype.updateVote = function () {
        if (!this.plugin.user) {
            this.data.vote = 'none';
        }
        var elVotePos = this.getElement('vote-pos');
        var elVoteNeg = this.getElement('vote-neg');
        var elVoteTotal = this.getElement('vote-total');
        var elLikeLink = this.getElement('likeLink');
        var voteEnabled = this.plugin.settings.enableVoting;
        var allowNeg = this.plugin.settings.allowNegativeVoting;
        if (elVotePos)
            elVotePos.style.display = voteEnabled ? '' : 'none';
        if (elVoteNeg)
            elVoteNeg.style.display = voteEnabled ? '' : 'none';
        if (elVoteTotal)
            elVoteTotal.style.display = voteEnabled ? '' : 'none';
        var elVoteContainer = this.getElement('footer-right');
        if (elVoteContainer)
            if (!this.plugin.settings.displayPosNegVotes) {
                window.gigya.utils.DOM.addClassToElement(elVoteContainer, 'gig-comment-vote-posneg');
            }
            else {
                window.gigya.utils.DOM.removeClassFromElement(elVoteContainer, 'gig-comment-vote-posneg');
            }
        //displayPosNegVotes
        if (elVoteNeg)
            elVoteNeg.style.display = allowNeg ? '' : 'none';
        switch (this.data.vote) {
            case 'pos':
                if (elVotePos)
                    window.gigya.utils.DOM.addClassToElement(elVotePos, 'gig-comment-vote-pos-down');
                if (elVoteNeg)
                    window.gigya.utils.DOM.removeClassFromElement(elVoteNeg, 'gig-comment-vote-neg-down');
                if (elLikeLink)
                    elLikeLink.innerHTML = this.getText('unlike');
                break;
            case 'neg':
                if (elVotePos)
                    window.gigya.utils.DOM.removeClassFromElement(elVotePos, 'gig-comment-vote-pos-down');
                if (elVoteNeg)
                    window.gigya.utils.DOM.addClassToElement(elVoteNeg, 'gig-comment-vote-neg-down');
                break;
            default:
                if (elVotePos)
                    window.gigya.utils.DOM.removeClassFromElement(elVotePos, 'gig-comment-vote-pos-down');
                if (elVoteNeg)
                    window.gigya.utils.DOM.removeClassFromElement(elVoteNeg, 'gig-comment-vote-neg-down');
                if (elLikeLink)
                    elLikeLink.innerHTML = this.getText('like');
        }
        if (elVoteTotal) {
            if (!this.plugin.settings.displayPosNegVotes && this.plugin.settings.allowNegativeVoting) {
                var voteValue = this.data.posVotes - this.data.negVotes;
                var sVoteValue = voteValue.toString();
                if (voteValue > 0)
                    sVoteValue = '+' + voteValue;
                elVoteTotal.innerHTML = sVoteValue;
                elVoteTotal.style.display = '';
            }
            else {
                elVoteTotal.style.display = 'none';
            }
        }
        if (elVotePos) {
            if (this.plugin.settings.displayPosNegVotes || !this.plugin.settings.allowNegativeVoting) {
                elVotePos.innerHTML = this.data.posVotes.toString();
                window.gigya.utils.DOM.addClassToElement(elVotePos, 'gig-comment-vote-with-value');
            }
            else {
                window.gigya.utils.DOM.removeClassFromElement(elVotePos, 'gig-comment-vote-with-value');
                elVotePos.innerHTML = '';
            }
        }
        if (elVoteNeg) {
            if (this.plugin.settings.displayPosNegVotes) {
                elVoteNeg.innerHTML = this.data.negVotes.toString();
                window.gigya.utils.DOM.addClassToElement(elVoteNeg, 'gig-comment-vote-with-value');
            }
            else {
                elVoteNeg.innerHTML = '';
                window.gigya.utils.DOM.removeClassFromElement(elVoteNeg, 'gig-comment-vote-with-value');
            }
        }
        if (elVoteContainer) {
            if (this.isTemp) {
                elVoteContainer.style.display = 'none';
            }
            else {
                elVoteContainer.style.display = '';
            }
        }
    };
    Comment.prototype.listenForCombination = function (e) {
        if (!e)
            e = window.event;
        if (e.keyCode == 40 && e.shiftKey) {
            var sCommentData = window.gigya.utils.stringUtils.format('<div class="gig-comments-container">Stream ID: {0}<br />Comment ID: {1}</div>', this.plugin.params['streamID'], this.id);
            window.gigya.global.putGMBalloonNextTo(this.getContainer(), sCommentData, 'Comment Data', 400, 100);
            if (e.preventDefault)
                e.preventDefault();
        }
    };
    Comment.prototype.mouseOver = function () {
        var _this = this;
        var This = this;
        if (this.plugin.isMobileUI)
            return;
        if (!this.keydownDelegate)
            this.keydownDelegate = function (e) { return _this.listenForCombination(e); };
        if (window.gigya.utils.DOM.isElementClass(this.container, 'gig-comment-newComment')) {
            window.gigya.utils.DOM.removeClassFromElement(this.container, 'gig-comment-newComment');
            this.updateCommentHighlightingBadgesBackgroundColorForNewComment(this.data.highlightGroups);
            this.plugin.newCommentsCount--;
            this.plugin.updateStrip();
        }
        window.gigya.utils.DOM.addEventListener(document, 'keydown', this.keydownDelegate);
    };
    Comment.prototype.mouseOut = function () {
        try {
            window.gigya.utils.DOM.removeEventListener(document, 'keydown', this.keydownDelegate);
        }
        catch (ex) { }
    };
    Comment.prototype.updateComment = function (clean) {
        this.updateStatus();
        var username = window.gigya.utils.sanitize.sanitizeHTML(window.gigya.global.wbr(this.getUsername(), 20)).replace(/\$/g, '&#36;');
        this.setElementHtml('username', username);
        this.setElementHtml('time', this.getTimeString());
        var elViaProvider = this.getElement('viaProvider');
        if (elViaProvider) {
            if (this.viaProvider) {
                elViaProvider.innerHTML = this.getText('via_provider', '%provider', this.viaProvider);
                window.gigya.utils.DOM.addClassToElement(elViaProvider, 'gig-comment-viaProvider-' + this.viaProvider.toLowerCase());
                elViaProvider.style.display = '';
            }
            else {
                elViaProvider.innerHTML = '';
                elViaProvider.style.display = 'none';
            }
        }
        var hasCommentBadges = this.createCommentHighlightingBadges(this.data.highlightGroups);
        var selfDataElement = this.getElement('self-data');
        if (hasCommentBadges)
            window.gigya.utils.DOM.addClassToElement(selfDataElement, 'gig-comment-withBadges');
        else
            window.gigya.utils.DOM.removeClassFromElement(selfDataElement, 'gig-comment-withBadges');
        var body = (this.data.commentText || '').replace(/\$/g, '&#36;');
        body = body.replace(/\n/g, '<br />');
        if (this.plugin.settings.enableLinks)
            body = window.gigya._.plugins.utils.DOM.replaceLinksWithHTMLElements(body);
        this.setElementHtml('body', body);
        var elEdited = this.getElement('edited');
        if (elEdited) {
            if (this.plugin.settings.userEditComment && this.data.edited) {
                elEdited.style.display = '';
            }
            else {
                elEdited.style.display = 'none';
            }
        }
        var lnkLike = this.getElement('likeLink');
        if (lnkLike) {
            if (this.plugin.settings.enableVoting && !this.plugin.settings.allowNegativeVoting) {
                lnkLike.style.display = '';
            }
            else {
                lnkLike.style.display = 'none';
            }
        }
        var lnkEdit = this.getElement('editLink');
        if (lnkEdit) {
            if (this.plugin.settings.userEditComment && this.data.sender.isSelf && !this.plugin.settings.readOnly) {
                lnkEdit.style.display = '';
            }
            else {
                lnkEdit.style.display = 'none';
            }
        }
        var lnkDelete = this.getElement('deleteLink');
        if (lnkDelete) {
            if (this.plugin.settings.allowCommentDeletion && this.data.sender.isSelf && !this.plugin.user.isGuest) {
                lnkDelete.style.display = '';
            }
            else {
                lnkDelete.style.display = 'none';
            }
        }
        var lnkReply = this.getElement('replyLink');
        if (lnkReply) {
            if (!this.isTemp &&
                !this.viaProvider &&
                this.data.status != 'pending' &&
                this.level < this.plugin.settings.threadingDepth &&
                !this.plugin.settings.readOnly &&
                this.plugin.settings.enableCommentBody != 'disabled' &&
                this.plugin.streamInfo.status != 'readOnly') {
                lnkReply.style.display = '';
            }
            else {
                lnkReply.style.display = 'none';
            }
            var elLikeLink = this.getElement('likeLink');
        }
        var lnkShare = this.getElement('shareLink');
        if (lnkShare) {
            lnkShare.style.display = this.plugin.params['shareUserAction'] && !this.plugin.params['hideShareButtons'] && this.plugin.shareEnabled ? '' : 'none';
        }
        this.plugin.setLinks(this.container);
        if (this.data.ratings) {
            var ratingsHtml = '';
            var ratingTemplate = this.plugin.templates['rating'];
            for (var ratingID in this.data.ratings) {
                //if (this.plugin._settings.ratings[ratingID]) {
                ratingsHtml += window.gigya.utils.templates.fill(ratingTemplate, {
                    starClassName: 'gig-comments-star',
                    ratingID: ratingID,
                    //name: this.plugin._settings.ratings[ratingID],
                    value: this.data.ratings[ratingID],
                });
                //}
            }
            this.setElementHtml('ratings', ratingsHtml);
        }
        var loginProvider = this.data.sender.loginProvider;
        var photoHtml = window.gigya.utils.templates.fill(this.plugin.templates['photo'], {
            photoURL: window.gigya.global.getPhotoURL(this.data.sender.photoURL, CommentsUtils_1.Images.getPhotoFullName(this.data.isModerator ? 'mod_icon' : 'Avatar_empty', this.plugin.pixelRatio)),
            providerImage: loginProvider && loginProvider.toLowerCase() != 'site' && loginProvider.toLowerCase() != 'customopenid'
                ? this.plugin.templates['providerImage']
                : '',
            providerImageUrl: loginProvider ? CommentsUtils_1.Images.getPhotoFullName('providers/' + this.data.sender.loginProvider + 'User', this.plugin.pixelRatio) : '',
        });
        var elPhoto = this.getElement('photo');
        if (elPhoto && elPhoto.innerHTML == '') {
            elPhoto.style.visibility = 'hidden';
            elPhoto.innerHTML = photoHtml;
            var arElImg = elPhoto.getElementsByTagName('img');
            if (arElImg && arElImg.length > 0) {
                var img = arElImg[0];
                window.gigya.utils.DOM.addEventListener(img, 'load', function () {
                    window.gigya.global.scaleImageToContainer(arElImg[0], true, function () {
                        elPhoto.style.visibility = '';
                    });
                });
            }
        }
        var elFlag = this.getElement('flag');
        if (elFlag) {
            var uid = this.plugin.user.isGuest ? 'guest' : this.plugin.user.UID;
            elFlag.style.display = this.plugin.settings.enableFlagging && !window.gigya.localInfo.isTouch && !this.isTemp ? '' : 'none';
            if (this.plugin.state.flags && this.plugin.state.flags[uid + '_' + this.id])
                this.markAsFlagged();
        }
    };
    Comment.prototype.createCommentHighlightingBadges = function (commentHighlightGroups) {
        var badgesContainerElement = this.getElement('header-right');
        var highlightGroups = this.plugin.getHighlightingBadges(commentHighlightGroups, ['comment']);
        var highlightGroup = highlightGroups ? highlightGroups[0] : null;
        var badgeElement = this.getElement('commentBadge');
        var contentElement = this.getElement('content');
        var commenterPhotoElement = this.getElement('photo');
        window.gigya.utils.DOM.removeClassFromElement(contentElement, 'gig-comment-badge-', true);
        if (!highlightGroup) {
            window.gigya.utils.DOM.removeClassFromElement(commenterPhotoElement, 'gig-comment-photo-badge');
            window.gigya.utils.DOM.removeClassFromElement(contentElement, 'gig-comment-colored-background');
            if (badgeElement)
                badgeElement.style.display = 'none';
            return false;
        }
        if (!badgeElement) {
            badgeElement = document.createElement('div');
            badgesContainerElement.appendChild(badgeElement);
        }
        else {
            badgeElement.innerHTML = '';
            window.gigya.utils.DOM.removeClassFromElement(badgeElement, 'gig-badge-', true);
            window.gigya.utils.DOM.removeClassFromElement(badgeElement, 'gig-badge-border');
        }
        window.gigya.utils.DOM.addClassToElement(badgeElement, 'gig-comment-commentBadge');
        window.gigya.utils.DOM.addClassToElement(badgeElement, highlightGroup.className); // for customer's css
        if (!this.plugin.isMobileUI) {
            badgeElement.innerHTML = highlightGroup.badgeText;
        }
        if (Comments_Models_1.BadgeFrameEnum[highlightGroup.badgeFrame] === Comments_Models_1.BadgeFrameEnum.rectangle) {
            window.gigya.utils.DOM.addClassToElement(badgeElement, 'gig-badge-border');
        }
        // first comment group defines the background color
        window.gigya.utils.DOM.addClassToElement(contentElement, 'gig-comment-colored-background');
        // TODO: no reason to do this, CSS should be built in a way that when gig-comment-newComment is removed this rule applies
        // if this comment is new, don't set the background (do it on mouse over)
        if (!window.gigya.utils.DOM.isElementClass(this.container, 'gig-comment-newComment')) {
            window.gigya.utils.DOM.addClassToElement(contentElement, highlightGroup.commentClassName);
        }
        return true;
    };
    Comment.prototype.updateCommentHighlightingBadgesBackgroundColorForNewComment = function (commentHighlightGroups) {
        if (!commentHighlightGroups)
            return;
        var highlightGroups = this.plugin.getHighlightingBadges(commentHighlightGroups, ['comment']);
        var highlightGroup = highlightGroups[0];
        if (!highlightGroup)
            return;
        // first user group defines the background color
        var containerElement = this.getElement('self-data');
        window.gigya.utils.DOM.addClassToElement(containerElement, highlightGroup.commentClassName);
    };
    Comment.prototype.clearError = function () {
        this.error = null;
    };
    Comment.prototype.updateStatus = function (error) {
        if (error != null)
            this.error = error;
        var elStatus = this.getElement('status');
        if (!elStatus)
            return;
        window.gigya.utils.DOM.removeClassFromElement(elStatus, 'gig-comment-status-info');
        window.gigya.utils.DOM.removeClassFromElement(elStatus, 'gig-comment-status-error');
        window.gigya.utils.DOM.removeClassFromElement(elStatus, 'gig-comment-status-pending');
        window.gigya.utils.DOM.removeClassFromElement(elStatus, 'gig-comment-status-moderator-edited');
        if (this.error) {
            window.gigya.utils.DOM.addClassToElement(elStatus, 'gig-comment-status-error');
            elStatus.innerHTML = this.error;
        }
        else if (this.info) {
            window.gigya.utils.DOM.addClassToElement(elStatus, 'gig-comment-status-info');
            elStatus.innerHTML = this.info;
        }
        else if (this.isPostPending()) {
            window.gigya.utils.DOM.addClassToElement(elStatus, 'gig-comment-status-info');
            elStatus.innerHTML =
                this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && this.level == 0
                    ? this.getText('your_review_is_awaiting_moderation')
                    : this.getText('your_comment_is_awaiting_moderation');
        }
        else if (this.data.moderatorEdit) {
            window.gigya.utils.DOM.addClassToElement(elStatus, 'gig-comment-status-moderator-edited');
            window.gigya.utils.DOM.addClassToElement(elStatus, 'gig-comment-status-info');
            elStatus.innerHTML =
                this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && this.level == 0
                    ? this.getText('review_edited_by_a_moderator')
                    : this.getText('comment_edited_by_a_moderator');
        }
        else {
            elStatus.innerHTML = '';
        }
    };
    Comment.prototype.updateReplies = function (clean) {
        if (clean === void 0) { clean = false; }
        for (var i = 0; i < this.replies.length; i++) {
            this.replies[i].updateAll(clean);
        }
    };
    Comment.prototype.getTimeString = function () {
        var dateString = '';
        var now = new Date().getTime();
        var d = new Date();
        d.setTime(this.data.timestamp);
        var dh = (now - this.data.timestamp) / 1000 / 60 / 60;
        if (dh * 60 < 1) {
            dateString = this.getText('less_than_a_minute_ago');
        }
        else if (dh < 1) {
            dateString = Math.round(dh * 60) == 1 ? this.getText('one_minute_ago') : this.getText('num_minutes_ago', '%num', Math.round(dh * 60).toString());
        }
        else if (dh < 24) {
            dateString = Math.round(dh) == 1 ? this.getText('one_hour_ago') : this.getText('num_hours_ago', '%num', Math.round(dh).toString());
        }
        else {
            dateString = Math.round(dh / 24) == 1 ? this.getText('one_day_ago') : this.getText('num_days_ago', '%num', Math.round(dh / 24).toString());
        }
        return dateString;
    };
    Comment.prototype.bindAll = function () {
        var _this = this;
        var c = this.getContainer();
        if (c) {
            this.bindButtonSubmitElement('repliesArrow', this.expandCollapse);
            this.bindButtonSubmitElement('deleteLink', this.showDeleteDialog);
            this.bindButtonSubmitElement('replyLink', this.showReplyBox);
            this.bindButtonSubmitElement('likeLink', this.onVotePosClick);
            this.bindButtonSubmitElement('vote-pos', this.onVotePosClick);
            this.bindButtonSubmitElement('vote-neg', this.onVoteNegClick);
            this.bindButtonSubmitElement('shareLink', this.onShareClick);
            this.bindButtonSubmitElement('editLink', this.onEditClick);
            this.bindButtonSubmitElement('flag', this.showFlagDialog);
            this.bindButtonSubmitElement('rating-drop', this.showRatings);
            //events are needed instead of css for legacy
            window.gigya.utils.DOM.addEventListener(this.getContainer(), 'mouseover', function () { return _this.mouseOver(); });
            window.gigya.utils.DOM.addEventListener(this.getContainer(), 'mouseout', function () { return _this.mouseOut(); });
            window.gigya.utils.DOM.enableSafeCopy(c);
        }
    };
    Comment.prototype.onEditClick = function (e) {
        var _this = this;
        var elEditBox = this.getElement('editbox');
        if (!elEditBox)
            return;
        if (this.plugin.tempComposeBox) {
            if (this.plugin.tempComposeBox.data.ID == this.id) {
                this.plugin.tempComposeBox.focus();
            }
            else {
                this.plugin.tempComposeBox.close();
            }
        }
        var elSelf = this.getElement('self-data');
        elSelf.style.display = 'none';
        elEditBox.style.display = 'block';
        var elPhoto = this.getElement('photo');
        if (elPhoto)
            elPhoto.style.display = 'none';
        var elTitle = this.getElement('title');
        var prevTitleDisplay = elTitle.style.display;
        if (elTitle)
            elTitle.style.display = 'none';
        this.plugin.tempComposeBox = new EditCommentBox_1.EditCommentBox(this.plugin, elEditBox, this.data, function () {
            elSelf.style.display = '';
            elEditBox.style.display = 'none';
            if (elPhoto)
                elPhoto.style.display = '';
            if (elTitle)
                elTitle.style.display = prevTitleDisplay;
            _this.plugin.tempComposeBox = null;
        });
        this.plugin.tempComposeBox.open();
    };
    Comment.prototype.showReplyBox = function () {
        var _this = this;
        if (this.plugin.tempComposeBox) {
            if (this.plugin.tempComposeBox.data.parentID == this.id) {
                this.plugin.tempComposeBox.focus();
                return;
            }
            else {
                this.plugin.tempComposeBox.close();
            }
        }
        this.composebox = new NewCommentBox_1.NewCommentBox(this.plugin, this.getElement('replybox'), this.data.ID, function () {
            _this.composebox = null;
            _this.plugin.tempComposeBox = null;
        });
        this.plugin.tempComposeBox = this.composebox;
        this.composebox.open();
    };
    Comment.prototype.onShareClick = function (e) {
        var _this = this;
        if (e.target == this.plugin.simpleShareSource) {
            this.plugin.simpleShareSource = null;
        }
        else {
            var lnkShare_1 = this.getElement('shareLink');
            if (!lnkShare_1.id) {
                lnkShare_1.id = this.id + '_lnkShare';
            }
            this.plugin.simpleShareSource = lnkShare_1;
            var userAction = this.getShareUserAction(this.level > 0);
            if (userAction && this.plugin.settings.enableDirectCommentLinking)
                userAction.linkBack = window.gigya._.plugins.utils.URL.addOrReplaceHashFragment(userAction.linkBack, 'gig_comment_id', this.id);
            if (this.data.mediaItems && this.data.mediaItems.length > 0) {
                var mediaItem = this.data.mediaItems[0];
                if (mediaItem.type.toLowerCase() == 'rich' || mediaItem.type.toLowerCase() == 'video') {
                    userAction.setDescription(userAction.description + '\n' + mediaItem.url);
                }
            }
            window.gigya.socialize.showShareUI(this.plugin.params, {
                containerID: null,
                width: null,
                height: null,
                operationMode: 'simpleShare',
                snapToElementID: lnkShare_1.id,
                userAction: userAction,
                onClose: function () {
                    _this.plugin.simpleShareSource = null;
                    // Return focus to the share link.
                    lnkShare_1.focus();
                },
            });
        }
    };
    Comment.prototype.getShareUserAction = function (isReply) {
        var useraction = this.plugin.params['shareUserAction'];
        if (!useraction)
            return;
        useraction = useraction.clone();
        if (useraction.description)
            useraction.setDescription(this.replacePlaceholders(useraction.description));
        if (useraction.title)
            useraction.setTitle(this.replacePlaceholders(useraction.title));
        return useraction;
    };
    Comment.prototype.replacePlaceholders = function (s) {
        return s
            .replace(/%username/gi, this.data.sender.name || this.plugin.getText('guest'))
            .replace(/%pagetitle/gi, document.title)
            .replace(/%rating/gi, this.data.ratings && this.data.ratings['_overall'] ? this.data.ratings['_overall'].toString() : '')
            .replace(/%commenttext/gi, this.data.commentText)
            .replace(/%commenttitle/gi, this.data.commentTitle);
    };
    Comment.prototype.setVote = function (vote, sourceElement) {
        var _this = this;
        if (!this.plugin.user || !this.plugin.user.isConnected) {
            if (this.plugin.settings.useSiteLogin) {
                this.plugin.mainComposeBox.onSiteLoginClick();
            }
            else {
                this.plugin.mainComposeBox.onLoginClick(sourceElement, false, function () {
                    _this.setVote(vote, sourceElement);
                });
            }
            return;
        }
        // Bug #38228 - Don't allow user to issue multiple votes at the same time.
        if (this.voteInProgress) {
            return;
        }
        this.voteInProgress = true;
        window.gigya.comments.vote(this.plugin.params, {
            vote: vote,
            commentID: this.id,
            callback: function () {
                _this.voteInProgress = false;
            },
        });
        switch (vote) {
            case 'pos':
                this.data.posVotes++;
                break;
            case 'neg':
                this.data.negVotes++;
                break;
        }
        switch (this.data.vote) {
            case 'pos':
                this.data.posVotes--;
                break;
            case 'neg':
                this.data.negVotes--;
                break;
        }
        this.data.vote = vote;
        this.updateVote();
        var oEvent = {
            eventName: 'commentVoted',
            categoryID: this.plugin.params['categoryID'],
            streamID: this.plugin.params['streamID'],
            comment: this.data,
            vote: vote,
            mode: this.plugin.textMode,
        };
        window.gigya.events.dispatchForWidget(oEvent, this.plugin.params);
        oEvent = window.gigya.utils.object.clone(oEvent);
        oEvent.eventName = 'commentVote'; //back compat
        window.gigya.events.dispatchForWidget(oEvent, this.plugin.params);
    };
    Comment.prototype.onVotePosClick = function (e) {
        var el = (e.target || e.srcElement);
        if (this.data.vote == 'pos') {
            this.setVote('none', el);
        }
        else {
            this.setVote('pos', el);
        }
    };
    Comment.prototype.onVoteNegClick = function (e) {
        var el = (e.target || e.srcElement);
        if (this.data.vote == 'neg') {
            this.setVote('none', el);
        }
        else {
            this.setVote('neg', el);
        }
    };
    Comment.prototype.showDeleteDialog = function () {
        var _this = this;
        if (this.plugin.settings.allowCommentDeletion) {
            var dialogTitle = this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && this.level == 0 ? this.getText('delete_review') : this.getText('delete_comment');
            var dialogBody = this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && this.level == 0
                ? this.getText('are_you_sure_you_want_to_permanently_delete_your_review_qm')
                : this.getText('are_you_sure_you_want_to_permanently_delete_your_comment_qm');
            this.plugin.showDialog(dialogTitle, dialogBody, this.getText('yes'), function () {
                _this.deleteComment();
            }, this.getText('no'));
        }
    };
    Comment.prototype.showFlagDialog = function () {
        var _this = this;
        if (this.plugin.settings.enableFlagging && !this.isFlagged) {
            var flagEl_1 = this.getElement('flag');
            window.gigya.utils.DOM.addClassToElement(flagEl_1, 'gig-comment-flag-visible');
            var dialogTitle = this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && this.level == 0
                ? this.getText('report_review_to_site_owner')
                : this.getText('report_comment_to_site_owner');
            var dialogBody = this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && this.level == 0
                ? this.getText('are_you_sure_you_want_to_mark_this_review_as_inappropriate')
                : this.getText('are_you_sure_you_want_to_mark_this_comment_as_inappropriate');
            var okText = this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && this.level == 0 ? this.getText('yes_flag_this_review') : this.getText('yes_flag_this_comment');
            this.plugin.showDialog(dialogTitle, dialogBody, okText, function () {
                _this.flag();
                flagEl_1.focus();
            }, this.getText('cancel'), function () {
                window.gigya.utils.DOM.removeClassFromElement(flagEl_1, 'gig-comment-flag-visible');
                flagEl_1.focus();
            });
        }
    };
    Comment.prototype.flag = function () {
        window.gigya.comments.flagComment(this.plugin.params, { commentID: this.id });
        this.markAsFlagged();
        this.plugin.saveState();
    };
    Comment.prototype.deleteComment = function () {
        window.gigya.comments.deleteComment(this.plugin.params, { commentID: this.id });
        var parent = this.getParent();
        while (parent) {
            parent.descendantsCount--;
            parent.updateRepliesCount();
            parent = parent.getParent();
        }
        this.plugin.updateCount();
        this.changeStatus('deleted');
        if (this.data.previousStatus === 'published') {
            this.plugin.streamInfo.commentCount--;
            if (!this.data.isReply())
                this.plugin.streamInfo.ratingCount--;
        }
        this.updateAll();
        this.plugin.updateCount();
    };
    Comment.prototype.changeStatus = function (newStatus) {
        this.data.previousStatus = this.data.status;
        this.data.status = newStatus;
    };
    return Comment;
}());
exports.Comment = Comment;


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/CommentData.ts":
/*!*****************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/CommentData.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var CommentData = /** @class */ (function () {
    function CommentData(id, parentID) {
        this.ID = id;
        this.parentID = parentID;
        this.replies = [];
    }
    CommentData.fromRawDataArray = function (rawDataArray) {
        if (!rawDataArray)
            return null;
        var res = [];
        for (var i = 0; i < rawDataArray.length; i++) {
            var currRaw = rawDataArray[i];
            res.push(CommentData.fromRawData(currRaw));
        }
        return res;
    };
    CommentData.fromRawData = function (rawData) {
        if (rawData.replies && rawData.replies.length > 0)
            rawData.replies = CommentData.fromRawDataArray(rawData.replies);
        return window.gigya.utils.object.merge([new CommentData(), rawData]);
    };
    CommentData.prototype.isReply = function () {
        return this.parentID != null;
    };
    return CommentData;
}());
exports.CommentData = CommentData;


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/Comments.Models.ts":
/*!*********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/Comments.Models.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var TextMode;
(function (TextMode) {
    TextMode[TextMode["COMMENTS"] = 0] = "COMMENTS";
    TextMode[TextMode["REVIEWS"] = 1] = "REVIEWS";
})(TextMode = exports.TextMode || (exports.TextMode = {}));
var HightlighGroupTypeEnum;
(function (HightlighGroupTypeEnum) {
    HightlighGroupTypeEnum[HightlighGroupTypeEnum["user"] = 0] = "user";
    HightlighGroupTypeEnum[HightlighGroupTypeEnum["comment"] = 1] = "comment";
    HightlighGroupTypeEnum[HightlighGroupTypeEnum["moderator"] = 2] = "moderator";
})(HightlighGroupTypeEnum = exports.HightlighGroupTypeEnum || (exports.HightlighGroupTypeEnum = {}));
var BadgeLocationEnum;
(function (BadgeLocationEnum) {
    BadgeLocationEnum[BadgeLocationEnum["commenterName"] = 0] = "commenterName";
    BadgeLocationEnum[BadgeLocationEnum["commentTime"] = 1] = "commentTime";
})(BadgeLocationEnum = exports.BadgeLocationEnum || (exports.BadgeLocationEnum = {}));
var BadgeFrameEnum;
(function (BadgeFrameEnum) {
    BadgeFrameEnum[BadgeFrameEnum["none"] = 0] = "none";
    BadgeFrameEnum[BadgeFrameEnum["rectangle"] = 1] = "rectangle";
})(BadgeFrameEnum = exports.BadgeFrameEnum || (exports.BadgeFrameEnum = {}));


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsPlugin.ts":
/*!********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/CommentsPlugin.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Comment_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/Comment */ "./src/comments/Gigya.Comments.JsPlugin/app/Comment.ts");
var Templates_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/Templates */ "./src/comments/Gigya.Comments.JsPlugin/app/Templates.ts");
var Comments_Models_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/Comments.Models */ "./src/comments/Gigya.Comments.JsPlugin/app/Comments.Models.ts");
var CommentData_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentData */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentData.ts");
var NewCommentBox_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/NewCommentBox */ "./src/comments/Gigya.Comments.JsPlugin/app/NewCommentBox.ts");
var DefaultCss_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/DefaultCss */ "./src/comments/Gigya.Comments.JsPlugin/app/DefaultCss.ts");
var CommentsUtils_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils.ts");
var CommentsPlugin = /** @class */ (function () {
    function CommentsPlugin(params, refString) {
        var _this = this;
        this.params = params;
        this.refString = refString;
        this.version = 2;
        this.commentInstances = {};
        this.templates = window.gigya.utils.object.clone(Templates_1.defaultTemplates, false);
        this.settings = {};
        this.state = { flags: {} }; //used to persist data, just for flagging for now
        this.streamInfo = {};
        this.userCommentsData = [];
        this.userOptions = {};
        this.userComments = [];
        this.newCommentsCount = 0;
        this.userHighlightingGroups = [];
        this.autoPixelRatio = false; // disabled by default - pixelRatio is set to 1
        this.pixelRatio = 1; // 0 = auto; 1-3 = force that ratio
        this.simpleShareSource = null;
        this.loadState();
        this.shareEnabled = this.isSharePossible();
        this.containerID = params['containerID'];
        this.container = this.getContainer();
        if (this.params['useHiResIcons']) {
            this.autoPixelRatio = true;
            this.pixelRatio = 0;
        }
        if (!this.params['templates']) {
            this.params['templates'] = {};
        }
        else if (this.params['ctag']) {
            this.params['ctag'] += '_templates';
        }
        this.templates = window.gigya.utils.object.merge([this.templates, this.params['templates']]);
        this.params['pinnedCommentID'] = window.gigya._.plugins.utils.URL.getHashParamValue(document.location.href, 'gig_comment_id');
        if (this.params['pinnedCommentID'])
            this.pinnedCommentID = this.params['pinnedCommentID'];
        this.textMode = this.settings.mode == 'ratingsOnly' || this.settings.mode == 'reviews' ? Comments_Models_1.TextMode.REVIEWS : Comments_Models_1.TextMode.COMMENTS;
        var deviceType = this.params['deviceType'] ? this.params['deviceType'].toLowerCase() : 'desktop';
        this.isMobileUI = deviceType == 'mobile' || (deviceType == 'auto' && window.gigya.localInfo.isMobile);
        this.setDefaults();
        this.mainComposeBox = new NewCommentBox_1.NewCommentBox(this, this.getElement('composebox'), null);
        this.fetchAll(function () {
            _this.initUI();
            // if plugin is loaded in display:none, we need to re-render it when it shows,
            //  so the embedded media will display right
            if (!window.gigya.utils.DOM.isVisible(_this.container)) {
                var poller = new window.gigya._.Poller();
                poller.addActions(function () {
                    if (window.gigya.utils.DOM.isVisible(_this.container)) {
                        poller.stop();
                        _this.updateAll();
                    }
                });
                poller.start(300);
            }
            _this.updateAll(true);
            window.gigya.events.dispatchForWidget({ eventName: 'load', version: _this.version }, _this.params);
        });
        var fnUserChanged = function (res) {
            if (res && res.user) {
                _this.setUser(res.user);
            }
            else {
                _this.setUser({});
            }
        };
        window.gigya.socialize.addEventHandlers({ listenerType: 'component' }, {
            onLogin: fnUserChanged,
            onLogout: fnUserChanged,
            onConnectionAdded: fnUserChanged,
            onConnectionRemoved: fnUserChanged,
        });
    }
    CommentsPlugin.prototype.getText = function (textKey, replaceStr, withStr) {
        if (this.params['customLang'] && this.params['customLang'][textKey]) {
            return this.params['customLang'][textKey].replace(replaceStr, withStr);
        }
        else {
            return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.comments.plugins.comments2.js', textKey, this.params['lang'], replaceStr, withStr);
        }
    };
    CommentsPlugin.prototype.loadState = function () {
        var state = window.gigya.utils.localStorage.getObject('gig-comments', undefined);
        if (state) {
            this.state = state;
        }
    };
    CommentsPlugin.prototype.saveState = function () {
        window.gigya.utils.localStorage.setObject('gig-comments', this.state);
    };
    CommentsPlugin.prototype.setDefaults = function () {
        if (!this.params['streamID'])
            this.params['streamID'] = 0;
        var defaultSort = this.getDefaultSort();
        if (defaultSort)
            this.params['sort'] = defaultSort;
    };
    CommentsPlugin.prototype.setDefaultShareUserAction = function () {
        var shareUserAction = new window.gigya.socialize.UserAction(this.params['shareUserAction']);
        var title;
        var description;
        var replyTitle;
        var replyDescription;
        if (this.textMode == Comments_Models_1.TextMode.REVIEWS) {
            description = this.getText('username_rated_pagetitle_as_rating_5') + '\n%pagetitle';
            title = this.getText('username_posted_a_review_on_pagetitle');
            replyTitle = this.getText('username_commented_on_pagetitle');
            replyDescription = '%commentText';
        }
        else {
            description = replyDescription = '%commentText';
            title = replyTitle = this.getText('username_commented_on_pagetitle');
        }
        if (!shareUserAction.description)
            shareUserAction.setDescription(description);
        if (!shareUserAction.title)
            shareUserAction.setTitle(title);
        if (!shareUserAction.linkBack)
            shareUserAction.setLinkBack(document.location.href);
        this.params['shareUserAction'] = shareUserAction;
    };
    CommentsPlugin.prototype.getElement = function (subClass) {
        var arEls = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-comments-' + subClass);
        return arEls.length > 0 ? arEls[0] : null;
    };
    CommentsPlugin.prototype.initUI = function () {
        var finalCss = '';
        var cssPrefix = this.params['cssPrefix'];
        if (cssPrefix || !this.addedCss) {
            var lang = this.params['lang'];
            this.isRtl = lang == 'he' || lang == 'ar';
            finalCss += DefaultCss_1.defaultCss.reset;
            if (this.isRtl)
                finalCss += DefaultCss_1.defaultCss.resetRtl;
            var fixedCss = window.gigya.pluginUtils.css.fixCss(DefaultCss_1.defaultCss.global);
            var fixedRtlCss = window.gigya.pluginUtils.css.fixCss(DefaultCss_1.defaultCss.rtl);
            finalCss += fixedCss;
            if (this.isRtl)
                finalCss += fixedRtlCss;
            if (this.isMobileUI) {
                finalCss += DefaultCss_1.defaultCss.mobile;
                if (this.isRtl)
                    finalCss += DefaultCss_1.defaultCss.mobileRtl;
            }
            else {
                finalCss += DefaultCss_1.defaultCss.nonMobile;
            }
            if (window.gigya.localInfo.isMobile && window.gigya.localInfo.isSafari) {
                finalCss += '.gig-comments-container * {-webkit-text-size-adjust:none;}';
            }
            window.gigya._.plugins.utils.css.addCss(finalCss, cssPrefix);
            this.addedCss = true;
        }
        if (this.isMobileUI) {
            this.container.style.width = '100%';
        }
        this.container.className =
            'gig-comments-container' +
                (this.textMode == Comments_Models_1.TextMode.REVIEWS ? ' gig-comments-reviews' : '') +
                (this.autoPixelRatio ? ' gig-comments-hires-icons' : '');
        this.container.setAttribute('data-version', '2');
        var template = this.settings.newCommentPosition == 'bottom' && !this.params['templates']['commentsPluginComposeBottom']
            ? this.templates['commentsPluginComposeBottom']
            : this.templates['commentsPlugin'];
        this.container.innerHTML = template;
        this.mainComposeBox.container = this.getElement('composebox');
    };
    CommentsPlugin.prototype.getContainer = function () {
        return document.getElementById(this.containerID);
    };
    CommentsPlugin.prototype.fetchComments = function (getNewCommentsOnly, callback) {
        var _this = this;
        if (getNewCommentsOnly === void 0) { getNewCommentsOnly = false; }
        var params = {
            //includeRatingsDims:true,
            threaded: true,
            categoryID: this.params['categoryID'],
            streamID: this.params['streamID'],
            includeSettings: true,
            includeUserOptions: true,
            includeUserHighlighting: true,
            pinnedCommentID: this.params['pinnedCommentID'],
            tags: this.params['filterTags'],
            callback: function (response) {
                _this.getCommentsCallback(response);
                if (callback)
                    callback();
            },
        };
        if (this.pagingDisabled) {
            params['threadLimit'] = 0;
        }
        if (this.nextPageStart) {
            if (!getNewCommentsOnly) {
                params['start'] = this.nextPageStart;
            }
        }
        else {
            //first call
            params['includeStreamInfo'] = true;
        }
        if (getNewCommentsOnly && this.streamInfo.lastCommentTimestamp) {
            params['since'] = this.streamInfo.lastCommentTimestamp;
        }
        window.gigya.comments.getComments(this.params, params);
    };
    CommentsPlugin.prototype.reset = function () {
        this.comments = [];
        this.commentInstances = {};
        this.streamInfo = {};
        this.nextPageStart = null;
        delete this.params['start'];
    };
    CommentsPlugin.prototype.removeUnpublishedComments = function () {
        for (var commentID in this.commentInstances) {
            var comment = this.commentInstances[commentID];
            comment.isPost = false;
            comment.info = null;
            comment.error = null;
            if (comment.isRemovedComment())
                comment.updateAll();
            else if (comment.data.status !== 'published')
                this.removeComment(comment);
        }
    };
    CommentsPlugin.prototype.isUserFollowing = function () {
        return this.userOptions && this.userOptions.replyNotifications == 'immediate';
    };
    CommentsPlugin.prototype.setUserComments = function (userComments) {
        if (!userComments)
            return;
        var hadSelfReview = this.getSelfReview() != null;
        this.userCommentsData = userComments;
        this.userComments = [];
        for (var i = 0; i < this.userCommentsData.length; i++) {
            var c = this.commentInstances[this.userCommentsData[i].ID] || new Comment_1.Comment(this, this.userCommentsData[i]);
            this.userComments.push(c);
        }
        if (this.textMode == Comments_Models_1.TextMode.REVIEWS && hadSelfReview != (this.getSelfReview() != null)) {
            this.updateUserReview();
        }
    };
    CommentsPlugin.prototype.getCommentsCallback = function (data) {
        var _this = this;
        if (data.errorCode != 0) {
            if (!this.broadcastedError) {
                if (this.container && !this.nextPageStart)
                    this.container.innerHTML = '';
                window.gigya.events.dispatchErrorFromResponse(this.params, data);
                this.broadcastedError = true;
            }
        }
        else {
            if (data.settings)
                this.settings = window.gigya.utils.object.merge([{}, data.settings]);
            this.textMode = this.settings.mode == 'ratingsOnly' || this.settings.mode == 'reviews' ? Comments_Models_1.TextMode.REVIEWS : Comments_Models_1.TextMode.COMMENTS;
            this.setDefaultShareUserAction();
            var clean = !data.requestParams['start'] && !data.requestParams['since'];
            if (clean) {
                this.comments = [];
                var commentContainer = this.getElement('comments');
                if (commentContainer)
                    commentContainer.innerHTML = '';
            }
            this.buildHighlightsCss();
            var addNewComments = data.requestParams['since'] != null;
            this.addComments(CommentData_1.CommentData.fromRawDataArray(data.comments), 0, addNewComments, false);
            this.setUserComments(CommentData_1.CommentData.fromRawDataArray(data.userComments));
            this.hasMore = data.hasMore;
            if (data.streamInfo) {
                this.streamInfo = data.streamInfo;
                this.updateCount();
            }
            if (data.userOptions)
                this.userOptions = data.userOptions;
            if (this.params['useSiteLogin'] != null)
                this.settings.useSiteLogin = window.gigya.utils.validation.isExplicitTrue(this.params['useSiteLogin']);
            if (!this.nextPageStart) {
                //first time
                var refreshMode = this.settings.refreshMode;
                var refreshInterval = this.settings.refreshInterval * 1000 || 0;
                if (refreshInterval > 0 && refreshMode != 'off') {
                    this.refreshTimeout = window.setInterval(function () {
                        _this.checkForNewComments();
                    }, refreshInterval);
                }
            }
            if (!data.requestParams['since']) {
                this.nextPageStart = data.next;
            }
            if (!data.requestParams['userHighlightingGroups']) {
                this.userHighlightingGroups = data.userHighlightingGroups;
            }
            if (this.getMoreInProgress) {
                this.getMoreInProgress = false;
                // Set focus to the first new comment.
                var firstCommentID = data.comments[0].ID;
                if (firstCommentID) {
                    var firstCommentEl = this.container.querySelector("div.gig-comment[data-comment-id=\"" + firstCommentID + "\"]");
                    if (firstCommentEl) {
                        firstCommentEl.focus();
                        window.gigya.utils.viewport.scrollIntoView(firstCommentEl);
                    }
                }
            }
            /*if (clean) {
                    this.updateAll(clean);
                } else {*/
            this.updateMore(clean);
            this.updateCount();
            //}
        }
    };
    CommentsPlugin.prototype.addComments = function (commentsData, level, isFromLiveUpdate, isTemp, error, info) {
        if (level === void 0) { level = 0; }
        var newComments = [];
        if (isFromLiveUpdate)
            commentsData.reverse();
        for (var i = 0; i < commentsData.length; i++) {
            var commentData = commentsData[i];
            var c = this.commentInstances[commentData.ID];
            if (c) {
                c.error = error;
                c.info = info;
                c.reset(commentData, true);
            }
            else {
                c = new Comment_1.Comment(this, commentData, level, null, isTemp, isFromLiveUpdate, error, info);
            }
            newComments.push(c);
        }
    };
    CommentsPlugin.prototype.createUserHighlightingBadges = function (commenterElement, userHighlightingGroups) {
        if (!userHighlightingGroups)
            return false;
        var highlightGroups = this.getHighlightingBadges(userHighlightingGroups, ['user', 'moderator']);
        var hasUserBadges = false;
        var isFirstCommenterColor = true;
        for (var i = highlightGroups.length - 1; i >= 0; i--) {
            var highlightGroup = highlightGroups[i];
            if (highlightGroup.showBadge) {
                hasUserBadges = true;
                var badgeElement = document.createElement('div');
                window.gigya.utils.DOM.addClassToElement(badgeElement, 'gig-comment-userBadge');
                window.gigya.utils.DOM.addClassToElement(badgeElement, highlightGroup.className);
                badgeElement.innerHTML = highlightGroup.badgeText == 'Moderator' ? this.getText('moderator') : highlightGroup.badgeText;
                if (Comments_Models_1.BadgeFrameEnum[highlightGroup.badgeFrame] === Comments_Models_1.BadgeFrameEnum.rectangle) {
                    window.gigya.utils.DOM.addClassToElement(badgeElement, 'gig-badge-border');
                }
                // add the badge element next to the username
                commenterElement.parentNode.insertBefore(badgeElement, commenterElement.nextSibling);
            }
            // first user group defines the commenter color
            if (isFirstCommenterColor && highlightGroup.commenterNameColor && highlightGroup.commenterNameColor !== '') {
                window.gigya.utils.DOM.addClassToElement(commenterElement, highlightGroup.userClassName);
                isFirstCommenterColor = false;
            }
        }
        return hasUserBadges;
    };
    CommentsPlugin.prototype.checkForNewComments = function () {
        var _this = this;
        if (this.settings.refreshMode != 'off' && !this.isPaused) {
            window.gigya.comments.getStreamInfo(this.params, {
                callback: function (response) {
                    if (response.streamInfo) {
                        var newCommentCount = _this.textMode === Comments_Models_1.TextMode.REVIEWS ? response.streamInfo.ratingCount : response.streamInfo.commentCount;
                        var oldCommentCount = _this.textMode === Comments_Models_1.TextMode.REVIEWS ? _this.streamInfo.ratingCount : _this.streamInfo.commentCount;
                        var addedCount = newCommentCount - oldCommentCount;
                        _this.updatedStreamInfo = response.streamInfo;
                        if (addedCount > 0 || _this.lastCommentTimestamp !== response.streamInfo.lastCommentTimestamp) {
                            _this.newCommentsCount = _this.newCommentsCount + addedCount;
                            _this.lastCommentTimestamp = response.streamInfo.lastCommentTimestamp;
                            _this.hasNewComments();
                        }
                    }
                },
            });
        }
    };
    CommentsPlugin.prototype.hasNewComments = function () {
        var refreshMode = this.settings.refreshMode;
        if (refreshMode == 'countOnly') {
            this.updateStrip();
            this.newCommentsCount = 0;
        }
        else if (refreshMode == 'full') {
            this.fetchNewComments();
        }
    };
    CommentsPlugin.prototype.isSharePossible = function () {
        // If we're not in http context - for example iOS plugin view
        if (document.location.href.indexOf('http') != 0)
            return false;
        // Specific check for android plugin view - should be removed after Android SDK fix
        if (window['__gigAPIAdapterSettings'] && document.location.href == 'http://www.gigya.com/')
            return false;
        return true;
    };
    CommentsPlugin.prototype.fetchNewComments = function () {
        this.streamInfo = this.updatedStreamInfo;
        this.updatedStreamInfo = null;
        this.fetchComments(true);
        this.updateStrip();
    };
    CommentsPlugin.prototype.updateStrip = function (clean) {
        var _this = this;
        var refreshMode = this.settings.refreshMode;
        var updateStrip = this.getElement('updates');
        if (!updateStrip)
            return;
        if (clean) {
            updateStrip.innerHTML = this.templates['updates'];
        }
        var elText = window.gigya.utils.DOM.getElementsByClass(updateStrip, 'gig-comments-updates-text')[0];
        var elLink = window.gigya.utils.DOM.getElementsByClass(updateStrip, 'gig-comments-updates-link')[0];
        var updateText = '';
        var linkText = '';
        window.gigya.utils.DOM.removeClassFromElement(updateStrip, 'gig-comments-updates-countonly');
        window.gigya.utils.DOM.removeClassFromElement(updateStrip, 'gig-comments-updates-full');
        if (refreshMode == 'countOnly') {
            if (this.newCommentsCount > 0) {
                if (this.textMode == Comments_Models_1.TextMode.COMMENTS) {
                    updateText =
                        this.newCommentsCount == 1
                            ? this.getText('1_new_comment_was_recently_posted')
                            : this.getText('num_new_comments_were_recently_posted', '%num', this.newCommentsCount.toString());
                }
                else {
                    updateText =
                        this.newCommentsCount == 1
                            ? this.getText('1_new_review_was_recently_posted')
                            : this.getText('num_new_reviews_were_recently_posted', '%num', this.newCommentsCount.toString());
                }
                linkText = this.getText('click_to_show');
            }
            if (clean) {
                window.gigya.utils.DOM.addButtonSubmitListener(elLink, function () {
                    _this.fetchNewComments();
                });
            }
            window.gigya.utils.DOM.addClassToElement(updateStrip, 'gig-comments-updates-countonly');
        }
        else if (refreshMode == 'full') {
            if (this.newCommentsCount > 0) {
                if (this.textMode == Comments_Models_1.TextMode.COMMENTS) {
                    updateText =
                        this.newCommentsCount == 1
                            ? this.getText('1_new_comment_was_recently_posted')
                            : this.getText('num_new_comments_were_recently_posted', '%num', this.newCommentsCount.toString());
                }
                else {
                    updateText =
                        this.newCommentsCount == 1
                            ? this.getText('1_new_review_was_recently_posted')
                            : this.getText('num_new_reviews_were_recently_posted', '%num', this.newCommentsCount.toString());
                }
                linkText = this.isPaused ? this.getText('resume_stream') : this.getText('pause_stream');
                if (this.isPaused) {
                    window.gigya.utils.DOM.addClassToElement(updateStrip, 'gig-comments-updates-paused');
                }
                else {
                    window.gigya.utils.DOM.removeClassFromElement(updateStrip, 'gig-comments-updates-paused');
                }
            }
            if (clean) {
                window.gigya.utils.DOM.addButtonSubmitListener(elLink, function () {
                    _this.isPaused = !_this.isPaused;
                    _this.updateStrip();
                });
            }
            window.gigya.utils.DOM.addClassToElement(updateStrip, 'gig-comments-updates-full');
        }
        if (updateText || linkText) {
            if (elText)
                elText.innerHTML = updateText;
            if (elLink)
                elLink.innerHTML = linkText;
            window.gigya.utils.DOM.addClassToElement(updateStrip, 'gig-comments-updates-visible');
        }
        else {
            window.gigya.utils.DOM.removeClassFromElement(updateStrip, 'gig-comments-updates-visible');
        }
    };
    CommentsPlugin.prototype.getComment = function (id) {
        return this.commentInstances[id];
    };
    CommentsPlugin.prototype.removeComment = function (comment) {
        //remove replies
        var replies = comment.replies.concat();
        for (var i = 0; i < replies.length; i++) {
            replies[i].dispose();
        }
        var p = comment.getParent();
        if (p) {
            p.removeChild(comment.id);
        }
        else {
            window.gigya.utils.array.removeByProperty(this.comments, 'id', comment.id);
        }
        window.gigya.utils.array.removeByProperty(this.userComments, 'id', comment.id);
        window.gigya.utils.array.removeByProperty(this.userCommentsData, 'ID', comment.id);
        var container = comment.getContainer();
        if (container)
            container.parentNode.removeChild(container);
        delete this.commentInstances[comment.id];
        if (comment.data.status === 'published') {
            this.streamInfo.commentCount--;
            if (!p) {
                this.streamInfo.ratingCount--;
            }
            while (p) {
                p.descendantsCount--;
                p.updateRepliesCount();
                p = p.getParent();
            }
        }
        this.updateCount();
        if (this.textMode == Comments_Models_1.TextMode.REVIEWS) {
            this.updateUserReview();
        }
    };
    CommentsPlugin.prototype.getUserInfo = function (callback) {
        var _this = this;
        window.gigya.socialize.getUserInfo(this.params, {
            callback: function (response) {
                if (response.errorCode == 0) {
                    _this.setUser(response.user, true);
                }
                else {
                    window.gigya.events.dispatchErrorFromResponse(_this.params, response);
                }
                if (callback)
                    callback();
            },
        });
    };
    CommentsPlugin.prototype.filterIdentities = function (user) {
        if (!user || !user.identities)
            return user;
        var enabledProviders = this.params['enabledProviders'] || '*';
        var disabledProviders = this.params['disabledProviders'] || '';
        var identitiesCount = 0;
        var arProviders = window.gigya.socialize.getProvidersByName(enabledProviders + ',site');
        arProviders = window.gigya.socialize.hideProvidersByName(arProviders, disabledProviders);
        var newIdentities = {};
        for (var i = 0; i < arProviders.length; i++) {
            var provider = arProviders[i];
            if (user.identities[provider.name]) {
                identitiesCount++;
                newIdentities[provider.name] = user.identities[provider.name];
            }
        }
        user.identities = newIdentities;
        if (user.loginProvider && !user.identities[user.loginProvider]) {
            delete user.loginProvider;
            delete user.nickname;
        }
        if (identitiesCount == 0) {
            user.isConnected = false;
        }
        return user;
    };
    CommentsPlugin.prototype.setUser = function (user, first) {
        var _this = this;
        this.user = this.filterIdentities(user);
        if (!first) {
            this.setUserComments([]);
            this.streamInfo.isUserSubscribed = false;
            this.removeUnpublishedComments();
            this.fetchUserVotes();
            this.fetchSelfComments();
            if (user.isConnected) {
                window.gigya.comments.getStreamInfo(this.params, {
                    callback: function (e) {
                        if (e.streamInfo) {
                            _this.streamInfo = e.streamInfo;
                            _this.updateHeaderLinks();
                        }
                    },
                });
            }
        }
        this.updateAll(false);
    };
    CommentsPlugin.prototype.fetchAll = function (callback) {
        var _this = this;
        var called = false;
        var fnCb = function () {
            if (!called && _this.user && _this.comments) {
                if (callback)
                    callback();
                _this.hideProgress();
                if (_this.settings.repliesCollapsed) {
                    for (var i = 0; i < _this.comments.length; i++) {
                        _this.comments[i].collapse();
                    }
                }
                if (_this.pinnedCommentID) {
                    var commentsPlugin = _this;
                    var pinnedComment = commentsPlugin.getComment(commentsPlugin.pinnedCommentID);
                    window.setTimeout(function () {
                        var threadID = pinnedComment.data.threadID;
                        if (threadID == '')
                            threadID = pinnedComment.id;
                        // Check if the anscetor of the comment, have it's replays collapsed
                        if (commentsPlugin.getComment(threadID).isCollapse())
                            commentsPlugin.getComment(threadID).expand();
                        commentsPlugin.scrollToPinnedComment(commentsPlugin.pinnedCommentID);
                        commentsPlugin.setPinnedCommentColor(commentsPlugin.pinnedCommentID);
                    }, 2);
                }
            }
        };
        this.fetchComments(false, fnCb);
        this.getUserInfo(fnCb);
        this.showProgress();
    };
    CommentsPlugin.prototype.scrollToPinnedComment = function (pinnedCommentID) {
        var pinnedCommentElement = document.querySelector('[data-comment-id="' + pinnedCommentID + '"]');
        if (pinnedCommentElement) {
            var top = pinnedCommentElement.offsetTop;
            window.scrollTo(0, top - 12);
        }
    };
    CommentsPlugin.prototype.setPinnedCommentColor = function (pinnedCommentID) {
        var pinnedCommentElement = document.querySelector('[data-comment-id="' + pinnedCommentID + '"]');
        if (pinnedCommentElement) {
            var pinnedCommentContentElement = pinnedCommentElement.getElementsByClassName('gig-comment-content')[0];
            window.gigya.utils.DOM.addClassToElement(pinnedCommentContentElement, 'gig-comment-pinned-background');
            window.gigya.utils.DOM.addClassToElement(pinnedCommentContentElement, 'gig-comment-colored-background');
            window.gigya.utils.DOM.removeClassFromElement(pinnedCommentContentElement, 'gig-comment-badge-pick');
        }
    };
    CommentsPlugin.prototype.getUsername = function () {
        return window.gigya.utils.sanitize.sanitizeHTML(this.user.nickname || this.user.firstName || (this.user.isGuest ? this.getText('guest') : this.getText('anonymous')));
    };
    CommentsPlugin.prototype.updateAll = function (clean) {
        if (clean === void 0) { clean = false; }
        if (this.user && this.comments) {
            if (this.mainComposeBox) {
                if (clean)
                    this.mainComposeBox.render();
                else
                    this.mainComposeBox.updateUI();
            }
            if (this.tempComposeBox) {
                if (clean)
                    this.tempComposeBox.render();
                else
                    this.tempComposeBox.updateUI();
            }
            this.updateHeaderLinks(clean);
            this.updateComments(clean);
            if (clean) {
                this.bindAll();
            }
            this.updateMore(clean);
            this.updateStrip(clean);
        }
    };
    CommentsPlugin.prototype.fetchUserVotes = function () {
        var _this = this;
        window.gigya.comments.getUserVotes(this.params, {
            callback: function (res) {
                for (var commentID in _this.commentInstances) {
                    var comment = _this.commentInstances[commentID];
                    if (!comment.voteInProgress) {
                        comment.data.vote = res.userVotes ? res.userVotes[commentID] : 'none';
                        comment.updateVote();
                    }
                }
            },
        });
    };
    CommentsPlugin.prototype.fetchSelfComments = function () {
        var _this = this;
        //  if (this.settings.allowCommentDeletion || this.textMode == TextMode.REVIEWS) {
        window.gigya.comments.getUserComments(this.params, {
            includeReplies: true,
            includeUserHighlighting: true,
            callback: function (e) {
                if (e && e.comments) {
                    _this.setUserComments(e.comments);
                    for (var i = 0; i < e.comments.length; i++) {
                        var commentID = e.comments[i].ID;
                        if (_this.commentInstances[commentID]) {
                            var c = _this.commentInstances[commentID];
                            c.data.sender.isSelf = true;
                            c.updateComment(false);
                        }
                    }
                }
                else {
                    _this.setUserComments([]);
                    for (var key in _this.commentInstances) {
                        var c = _this.commentInstances[key];
                        c.data.sender.isSelf = false;
                        c.updateComment(false);
                    }
                }
                if (!e.requestParams['userHighlightingGroups']) {
                    _this.userHighlightingGroups = e.userHighlightingGroups;
                }
                _this.mainComposeBox.updateUserBadges();
            },
        });
        //  }
    };
    CommentsPlugin.prototype.showProgress = function () {
        window.gigya.utils.DOM.addClassToElement(this.container, 'gig-comments-container-progress');
    };
    CommentsPlugin.prototype.hideProgress = function () {
        window.gigya.utils.DOM.removeClassFromElement(this.container, 'gig-comments-container-progress');
    };
    CommentsPlugin.prototype.updateHeaderLinks = function (clean) {
        var elHeader = this.getElement('header');
        if (clean) {
            if (elHeader)
                elHeader.innerHTML = window.gigya.utils.templates.fill(this.templates['header'], {
                    sort: this.getText('sort'),
                    subscribe: this.getText('subscribe'),
                    rss: '<a>' + this.getText('rss') + '</a>',
                });
        }
        var elSort = this.getElement('sort');
        if (elSort)
            elSort.style.display = this.settings.enableUserSorting ? '' : 'none';
        var elRss = this.getElement('rss');
        if (elRss)
            elRss.style.display = this.settings.disableRSS ? 'none' : '';
        var elSubscribe = this.getElement('subscribe');
        if (elSubscribe) {
            var subscribeText = this.streamInfo.isUserSubscribed || this.unsubscribeToken ? this.getText('unsubscribe') : this.getText('subscribe');
            elSubscribe.title = subscribeText;
            elSubscribe.innerHTML = subscribeText;
            elSubscribe.style.display = this.settings.disableRSS ? 'none' : '';
        }
        if (elHeader)
            this.setLinks(elHeader);
    };
    CommentsPlugin.prototype.updateUserReview = function () {
        this.mainComposeBox.updateUI();
    };
    CommentsPlugin.prototype.getSelfReview = function () {
        if (this.textMode != Comments_Models_1.TextMode.REVIEWS)
            return;
        for (var i = 0; i < this.userComments.length; i++) {
            if (!this.userComments[i].data.parentID) {
                return this.userComments[i];
            }
        }
    };
    CommentsPlugin.prototype.setLinks = function (container) {
        var arLinksContainers = window.gigya.utils.DOM.getElementsByClass(container, 'gig-comments-linksContainer');
        var f;
        var children;
        for (var iLinksContainer = 0; iLinksContainer < arLinksContainers.length; iLinksContainer++) {
            f = false;
            children = arLinksContainers[iLinksContainer].childNodes;
            for (var i = children.length - 1; i >= 0; i--) {
                var child = children[i];
                if (child.style.display != 'none' && child.innerHTML != '' && !f) {
                    window.gigya.utils.DOM.addClassToElement(child, 'gig-comments-link-lastVisible');
                    f = true;
                }
                else {
                    window.gigya.utils.DOM.removeClassFromElement(child, 'gig-comments-link-lastVisible');
                }
            }
        }
    };
    CommentsPlugin.prototype.updateComments = function (clean) {
        if (clean === void 0) { clean = false; }
        var elComments = this.getElement('comments');
        if (!elComments)
            return;
        if (clean)
            this.getElement('comments').innerHTML = '';
        for (var i = 0; i < this.comments.length; i++) {
            this.comments[i].updateAll();
        }
        this.updateCount();
    };
    CommentsPlugin.prototype.updateCount = function () {
        var elCount = this.getElement('count');
        if (elCount) {
            if (this.settings.disableCommentsCount) {
                elCount.innerHTML = '';
            }
            else {
                var text;
                if (this.textMode == Comments_Models_1.TextMode.REVIEWS) {
                    var reviewCount = this.streamInfo.ratingCount;
                    var commentCount = this.streamInfo.commentCount - this.streamInfo.ratingCount;
                    text = this.getPluralizedCount(reviewCount, 'review') + (commentCount > 0 ? ', ' + this.getPluralizedCount(commentCount, 'comment') : '');
                }
                else {
                    text = this.getPluralizedCount(this.streamInfo.commentCount, 'comment');
                }
                elCount.innerHTML = text;
            }
        }
    };
    CommentsPlugin.prototype.getPluralizedCount = function (count, entity) {
        var textKeyOne = 'one_' + entity;
        var textKeyMany = 'num_' + entity + 's';
        var text = this.getText(count == 1 ? textKeyOne : textKeyMany, '%num', count.toString());
        if (this.params['lang'] == 'fr' && count == 0) {
            text = this.getText(textKeyOne, '%num', count.toString());
            text = text.replace('1', '0');
        }
        return text;
    };
    CommentsPlugin.prototype.updateMore = function (clean) {
        var more = this.getElement('more');
        if (more) {
            if (this.hasMore) {
                if (this.getMoreInProgress) {
                    window.gigya.utils.DOM.addClassToElement(more, 'gig-comments-more-progress');
                    more.innerHTML = '';
                }
                else {
                    window.gigya.utils.DOM.removeClassFromElement(more, 'gig-comments-more-progress');
                    more.innerHTML =
                        this.settings.mode == 'reviews'
                            ? this.getText('show_more_reviews')
                            : this.settings.mode == 'ratingsOnly'
                                ? this.getText('show_more_ratings')
                                : this.getText('show_more_comments');
                }
                more.style.display = '';
            }
            else {
                more.style.display = 'none';
            }
        }
    };
    CommentsPlugin.prototype.bindAll = function () {
        var _this = this;
        var more = this.getElement('more');
        if (more) {
            window.gigya.utils.DOM.addButtonSubmitListener(more, function () {
                _this.onMoreClick(more);
            });
        }
        var subscribe = this.getElement('subscribe');
        if (subscribe) {
            window.gigya.utils.DOM.addButtonSubmitListener(subscribe, function () {
                _this.onSubscribeClick();
            });
        }
        var rss = this.getElement('rss');
        if (rss) {
            var rssAnchors = rss.getElementsByTagName('a');
            for (var i = 0; i < rssAnchors.length; i++) {
                var lnkRss = rssAnchors[i];
                lnkRss.setAttribute('href', this.streamInfo.rssURL);
                window.gigya.utils.DOM.addButtonSubmitListener(lnkRss, function (e) {
                    _this.onRssClick(e, true);
                });
                window.gigya.utils.DOM.addEventListener(lnkRss, 'contextmenu', function (e) {
                    _this.onRssClick(e);
                });
            }
        }
        var sort = this.getElement('sort');
        window.gigya.utils.DOM.addEventListener(sort, 'mousedown', function (e) {
            _this.onSortClick(sort);
        });
    };
    CommentsPlugin.prototype.onSubscribeClick = function () {
        var _this = this;
        if (this.streamInfo.isUserSubscribed) {
            window.gigya.comments.unsubscribe(this.params, {
                callback: function (e) { return _this.onUnsubscribe(e); },
            });
        }
        else if (this.unsubscribeToken) {
            window.gigya.comments.unsubscribe(this.params, {
                unsubscribeToken: this.unsubscribeToken,
                callback: function (e) { return _this.onUnsubscribe(e); },
            });
        }
        else {
            var type = this.textMode == Comments_Models_1.TextMode.REVIEWS ? 'review' : 'comment';
            var dialogBody = window.gigya.utils.templates.fill(this.templates['emailTextboxDialogBody'], {
                text: this.getText('enter_your_email_to_subscribe_to_new_' + type + 's_in_this_stream_colon'),
                buttonText: this.getText('subscribe'),
                email: this.user.email || '',
                emailLabel: this.getText('email'),
            });
            var dialog_1 = this.showDialog(this.getText('notifications_settings'), dialogBody, undefined, undefined, undefined, function () {
                // This fires when the dialog closes. Return focus to the subscribe link.
                _this.getElement('subscribe').focus();
            });
            var btnSubscribe = window.gigya.utils.DOM.getElementsByClass(dialog_1, 'gig-comments-dialog-textbox-button')[0];
            window.gigya.utils.DOM.addButtonSubmitListener(btnSubscribe, function () {
                var tb = window.gigya.utils.DOM.getElementsByClass(dialog_1, 'gig-comments-dialog-textbox')[0];
                if (tb) {
                    var email = tb.value;
                    if (window.gigya.pluginUtils.validation.isEmailValid(email)) {
                        _this.subscribe(tb.value);
                        _this.activeDialog.cancelHandler();
                    }
                    else {
                        var elError = window.gigya.utils.DOM.getElementsByClass(dialog_1, 'gig-comments-dialog-error')[0];
                        elError.innerHTML = _this.getText('please_provide_a_valid_email_address');
                    }
                }
            });
        }
    };
    CommentsPlugin.prototype.subscribe = function (email) {
        var _this = this;
        this.setStreamInfoIfNeeded(null, null, function () {
            window.gigya.comments.subscribe(_this.params, {
                email: email,
                callback: function (e) {
                    _this.onSubscribe(e);
                },
            });
        });
        var type = this.textMode == Comments_Models_1.TextMode.REVIEWS ? 'review' : 'comment';
        var confirmationHTML = '<div class="gig-comments-dialog-subscribe-okIcon"></div>' +
            this.getText('thank_you_for_subscribing') +
            '<br />' +
            this.getText('new_' + type + 's_will_be_sent_directly_to_your_email_inbox');
        this.showDialog(this.getText('notifications_settings'), confirmationHTML);
        window.setTimeout(function () {
            if (_this.activeDialog) {
                _this.activeDialog.cancelHandler();
            }
        }, 3000);
    };
    CommentsPlugin.prototype.onUnsubscribe = function (e) {
        var _this = this;
        if (e.errorCode == 0) {
            this.showDialog(this.getText('notifications_settings'), this.getText('you_have_successfully_unsubscribed'));
            window.setTimeout(function () {
                if (_this.activeDialog) {
                    _this.activeDialog.cancelHandler();
                }
            }, 3000);
            delete this.unsubscribeToken;
            this.streamInfo.isUserSubscribed = false;
            this.updateHeaderLinks();
        }
    };
    CommentsPlugin.prototype.onSubscribe = function (e) {
        if (e && e.unsubscribeToken)
            this.unsubscribeToken = e.unsubscribeToken;
        if (!e.unsubscribeToken)
            this.streamInfo.isUserSubscribed = true;
        this.updateHeaderLinks();
    };
    CommentsPlugin.prototype.onMoreClick = function (elMore) {
        if (this.hasMore && !this.getMoreInProgress) {
            this.getMoreInProgress = true;
            this.updateMore();
            this.fetchComments();
        }
    };
    CommentsPlugin.prototype.onRssClick = function (event, redirect) {
        if (redirect) {
            return this.setStreamInfoIfNeeded(event, this.streamInfo.rssURL);
        }
        else {
            this.setStreamInfoIfNeeded(event);
        }
    };
    CommentsPlugin.prototype.onSortClick = function (opener) {
        var _this = this;
        if (!opener)
            return;
        var pos = window.gigya.utils.DOM.getElementPosition(opener);
        var divSort = document.createElement('div');
        divSort.style.position = 'absolute';
        if (divSort.style.zIndex != null) {
            divSort.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
        }
        divSort.innerHTML = window.gigya.utils.templates.fill(this.templates['sortbox'], {
            most_recent: this.getText('most_recent'),
            oldest: this.getText('oldest'),
            most_voted: this.getText('most_voted'),
            ratings: this.getText('ratings'),
        });
        divSort.className = 'gig-comments-container gig-comments-sortbox';
        var arSortItems = divSort.getElementsByTagName('li');
        for (var i = 0; i < arSortItems.length; i++) {
            var sortItem = arSortItems[i];
            var sort = sortItem.getAttribute('data-sort');
            var selectedSort = this.params['sort'];
            if (sort == selectedSort || (!selectedSort && sort == this.settings.sortBy)) {
                window.gigya.utils.DOM.addClassToElement(sortItem, 'gig-comments-sortbox-selected');
            }
            if (this.textMode != Comments_Models_1.TextMode.REVIEWS && sort.indexOf('rating') == 0) {
                window.gigya.utils.DOM.removeElement(sortItem);
            }
            else {
                window.gigya.utils.DOM.addButtonSubmitListener(sortItem, function (e) {
                    var target = e.target || e.srcElement;
                    var sort = target.getAttribute('data-sort');
                    // Erase the pinnedComment after the user clicked on sort
                    if (_this.params['pinnedCommentID'])
                        delete _this.params['pinnedCommentID'];
                    if (sort) {
                        divSort.parentNode.removeChild(divSort);
                        _this.params['sort'] = sort;
                        _this.setDefaultSort(sort);
                        _this.saveState();
                        _this.reset();
                        _this.fetchComments();
                    }
                });
            }
        }
        window.gigya.utils.DOM.appendToBody(divSort);
        divSort.style.left = pos.left - divSort.offsetWidth + 30 + 'px';
        divSort.style.top = pos.top + opener.offsetHeight + 'px';
        window.gigya.pluginUtils.animation.fadeIn(divSort);
        window.gigya.pluginUtils.DOM.removeElementOnDocClickOrEscape(divSort, function (e, wasOpen) {
            if (wasOpen) {
                CommentsUtils_1.Events.cancelEvent(e);
            }
        });
    };
    CommentsPlugin.prototype.setDefaultSort = function (sort) {
        window.gigya.utils.cookie.set('_gig_comments_sort', sort);
    };
    CommentsPlugin.prototype.getDefaultSort = function () {
        return window.gigya.utils.cookie.get('_gig_comments_sort');
    };
    CommentsPlugin.prototype.showDialog = function (caption, body, okButtonText, onOk, cancelButtonText, onCancel) {
        var _this = this;
        // If another dialog is open, cancel it first.
        if (this.activeDialog) {
            this.activeDialog.cancelHandler();
        }
        var dialogEl = window.gigya.utils.DOM.createTopLevelDiv();
        dialogEl.style.position = 'fixed';
        dialogEl.className = this.container.className;
        dialogEl.innerHTML = this.templates['dialog'];
        var dialogCaptionEl = window.gigya.utils.DOM.getElementsByClass(dialogEl, 'gig-comments-dialog-caption')[0];
        var dialogBodyEl = window.gigya.utils.DOM.getElementsByClass(dialogEl, 'gig-comments-dialog-body')[0];
        dialogCaptionEl.innerHTML = caption;
        dialogBodyEl.innerHTML = body;
        // Unique ID on caption so it can be used as label for dialog.
        dialogCaptionEl.setAttribute('id', 'gig-comments-dialog-caption-' + this.containerID);
        // Dialog must be focusable and marked as dialog for WCAG.
        dialogEl.setAttribute('role', 'dialog');
        dialogEl.setAttribute('tabindex', '-1');
        dialogEl.setAttribute('aria-labelledby', dialogCaptionEl.id);
        // TODO: make the style inside the CSS is not optional because it been overrided by other plugins CSS.
        var removeDialog = function () {
            window.gigya.utils.DOM.removeEventListener(document, 'keydown', fnEscPress);
            if (dialogEl.parentNode) {
                dialogEl.parentNode.removeChild(dialogEl);
            }
            _this.activeDialog = undefined;
        };
        var fnOnCancel = function () {
            removeDialog();
            if (onCancel) {
                onCancel(dialogEl);
            }
        };
        var fnOnOk = function () {
            removeDialog();
            if (onOk) {
                onOk(dialogEl);
            }
        };
        var elClose = window.gigya.utils.DOM.getElementsByClass(dialogEl, 'gig-comments-dialog-close')[0];
        if (elClose) {
            window.gigya.utils.DOM.addButtonSubmitListener(elClose, fnOnCancel);
        }
        var elOk = window.gigya.utils.DOM.getElementsByClass(dialogEl, 'gig-comments-dialog-button-ok')[0];
        if (elOk) {
            window.gigya.utils.DOM.addButtonSubmitListener(elOk, fnOnOk);
            if (okButtonText) {
                elOk.innerHTML = okButtonText;
            }
            else {
                elOk.style.display = 'none';
            }
        }
        var elCancel = window.gigya.utils.DOM.getElementsByClass(dialogEl, 'gig-comments-dialog-button-cancel')[0];
        if (elCancel) {
            window.gigya.utils.DOM.addButtonSubmitListener(elCancel, fnOnCancel);
            if (cancelButtonText) {
                elCancel.innerHTML = cancelButtonText;
            }
            else {
                elCancel.style.display = 'none';
            }
        }
        // Cancel dialog automatically when escape key is pressed.
        var fnEscPress = function (e) {
            if ((e.which || e.keyCode) == 27) {
                // Escape key
                fnOnCancel();
            }
        };
        window.gigya.utils.DOM.addEventListener(document, 'keydown', fnEscPress);
        // Append dialog to DOM and position.
        window.gigya.utils.DOM.appendToBody(dialogEl);
        var vp = window.gigya.utils.viewport.getInnerSize();
        var vpw = vp.w;
        var vph = vp.h;
        dialogEl.style.top = '' + Math.max(0, Math.floor((vph - dialogEl.offsetHeight) / 2)) + 'px';
        dialogEl.style.left = '' + Math.max(0, Math.floor((vpw - dialogEl.offsetWidth) / 2)) + 'px';
        this.activeDialog = {
            el: dialogEl,
            okHandler: fnOnOk,
            cancelHandler: fnOnCancel,
        };
        // Focus dialog.
        dialogEl.focus();
        return dialogEl;
    };
    CommentsPlugin.prototype.setStreamInfoIfNeeded = function (event, redirectURL, callback) {
        var _this = this;
        var streamTitle = this.params['streamTitle'];
        if (!streamTitle)
            streamTitle = document.title;
        if (!streamTitle || streamTitle == '')
            streamTitle = 'Site';
        var streamURL = this.params['streamURL'];
        if (!streamURL)
            streamURL = document.location.href;
        if (!this.streamInfo.streamURL ||
            (this.params['streamInfoSig'] && (streamTitle != this.streamInfo.streamTitle || streamURL != this.streamInfo.streamURL))) {
            window.gigya.comments.setStreamInfo(this.params, {
                streamTitle: streamTitle,
                streamURL: streamURL,
                callback: function () {
                    _this.streamInfo.streamTitle = streamTitle;
                    _this.streamInfo.streamURL = streamURL;
                    if (redirectURL)
                        document.location.href = redirectURL;
                    if (callback)
                        callback();
                },
            });
            //stop current navigation
            if (event) {
                CommentsUtils_1.Events.cancelEvent(event);
            }
        }
        else {
            if (callback)
                callback();
            return true;
        }
    };
    CommentsPlugin.prototype.buildMediaItemElement = function (container, mediaItem, preview, fnOnCancel) {
        var _this = this;
        var elMediaItem = document.createElement('div');
        container.appendChild(elMediaItem);
        container.style.height = '';
        elMediaItem.innerHTML = window.gigya.utils.templates.fill(this.templates['mediaItem'], {
            displayUrl: mediaItem.url,
            url: mediaItem.url,
            caption: mediaItem.title ? mediaItem.title : mediaItem.description ? mediaItem.description : '',
            providerIcon: CommentsUtils_1.Images.getPhotoFullName('mediaProviders/' + mediaItem.provider.toLowerCase(), this.pixelRatio),
        });
        var elThumb = window.gigya.utils.DOM.getElementsByClass(elMediaItem, 'gig-media-thumbnail')[0];
        var elCaption = window.gigya.utils.DOM.getElementsByClass(elMediaItem, 'gig-media-caption')[0];
        var elImage = document.createElement('img');
        window.gigya.utils.DOM.addClassToElement(elImage, 'gig-media-thumbnail-image');
        var containerWidth = elThumb.offsetWidth;
        var containerHeight = containerWidth * 0.75 - elCaption.offsetHeight;
        var thumbHeight = mediaItem.thumbnailHeight;
        var thumbWidth = mediaItem.thumbnailWidth;
        if (mediaItem.type.toLowerCase() == 'image' && mediaItem.thumbnailWidth < containerWidth * 0.7) {
            thumbHeight = mediaItem.height;
            thumbWidth = mediaItem.width;
            elImage.src = window.gigya.global.getPhotoURL(mediaItem.photoUrl);
        }
        else {
            elImage.src = window.gigya.global.getPhotoURL(mediaItem.thumbnailUrl);
        }
        if (thumbHeight > containerHeight) {
            var factor = containerHeight / thumbHeight;
            thumbHeight = thumbHeight * factor;
            thumbWidth = thumbWidth * factor;
        }
        if (thumbWidth > containerWidth) {
            var factor = containerWidth / thumbWidth;
            thumbHeight = thumbHeight * factor;
            thumbWidth = thumbWidth * factor;
        }
        if (thumbHeight < containerHeight) {
            containerHeight = thumbHeight;
        }
        var thumbMargin = preview ? (containerWidth - thumbWidth) / 2 : 0;
        elImage.style.width = thumbWidth + 'px';
        elImage.style.height = thumbHeight + 'px';
        elImage.style.marginRight = thumbMargin + 'px';
        elImage.style.marginLeft = thumbMargin + 'px';
        elThumb.style.height = containerHeight + 'px';
        var elOverlay = window.gigya.utils.DOM.getElementsByClass(elMediaItem, 'gig-media-overlay')[0];
        if (elOverlay) {
            elOverlay.style.top = -containerHeight + 'px';
        }
        if (mediaItem.type.toLowerCase() == 'rich' || mediaItem.type.toLowerCase() == 'video') {
            var elPlay = window.gigya.utils.DOM.getElementsByClass(elMediaItem, 'gig-media-play')[0];
            if (elPlay) {
                window.gigya.utils.DOM.addEventListener(elImage, 'load', function () {
                    elPlay.style.display = 'block';
                    var playMarginTop = (thumbHeight - elPlay.offsetHeight) / 2;
                    var playMargin = thumbMargin + (thumbWidth - elPlay.offsetWidth) / 2;
                    if (!_this.isRtl)
                        elPlay.style.left = playMargin + 'px';
                    else
                        elPlay.style.right = playMargin + 'px';
                    elPlay.style.top = playMarginTop + 'px';
                    window.gigya.utils.DOM.addButtonSubmitListener(elPlay, function () {
                        _this.playMediaItem(mediaItem);
                    });
                });
            }
        }
        else {
            elImage.style.cursor = 'pointer';
            window.gigya.utils.DOM.addButtonSubmitListener(elImage, function () {
                window.open(mediaItem.url);
            });
        }
        var elCancel = window.gigya.utils.DOM.getElementsByClass(elMediaItem, 'gig-media-cancel')[0];
        if (elCancel) {
            if (preview && fnOnCancel) {
                window.gigya.utils.DOM.addButtonSubmitListener(elCancel, fnOnCancel);
            }
            else {
                elCancel.style.display = 'none';
            }
        }
        elThumb.appendChild(elImage);
        return elMediaItem;
    };
    CommentsPlugin.prototype.playMediaItem = function (mediaItem) {
        if (this.isMobileUI) {
            window.open(mediaItem.url);
        }
        else {
            var overflow = document.body.style.overflow;
            var elDim = document.createElement('div');
            elDim.className = 'gig-comments-mediaplayer-dimmer';
            elDim.style.zIndex = window.gigya.utils.DOM.getNextZIndex() + '';
            window.gigya.utils.DOM.appendToBody(elDim);
            window.gigya.pluginUtils.animation.fadeIn(elDim, 0.8);
            document.body.style.overflow = 'hidden';
            var elPlayer = document.createElement('div');
            elPlayer.className = 'gig-comments-mediaplayer';
            elPlayer.innerHTML = window.gigya.utils.templates.fill(this.templates['mediaItemPlayer'], {
                playerHeight: mediaItem.height,
                playerHTML: mediaItem.html,
                caption: mediaItem.title ? mediaItem.title : '',
                providerIcon: CommentsUtils_1.Images.getPhotoFullName('mediaProviders/' + mediaItem.provider.toLowerCase(), this.pixelRatio),
            });
            elPlayer.style.zIndex = window.gigya.utils.DOM.getNextZIndex() + '';
            window.gigya.utils.DOM.appendToBody(elPlayer);
            window.gigya.pluginUtils.animation.fadeIn(elPlayer);
            elPlayer.style.marginLeft = -elPlayer.offsetWidth / 2 + 'px';
            elPlayer.style.marginTop = -elPlayer.offsetHeight / 2 + 'px';
            var fnHide = function () {
                document.body.style.overflow = overflow;
                elDim.parentElement.removeChild(elDim);
                elPlayer.parentElement.removeChild(elPlayer);
            };
            var elCancel = window.gigya.utils.DOM.getElementsByClass(elPlayer, 'gig-media-cancel')[0];
            window.gigya.utils.DOM.addButtonSubmitListener(elDim, fnHide);
            window.gigya.utils.DOM.addButtonSubmitListener(elCancel, fnHide);
        }
    };
    CommentsPlugin.prototype.removeUserBadges = function (containerElement) {
        if (!containerElement)
            return;
        var elements = containerElement.getElementsByClassName('gig-comment-userBadge');
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    };
    CommentsPlugin.prototype.buildHighlightsCss = function () {
        var finalCss = '';
        if (!this.settings || !this.settings.highlightGroupsSettings)
            return;
        for (var i = 0; i < this.settings.highlightGroupsSettings.length; i++) {
            var group = this.settings.highlightGroupsSettings[i];
            if (group.cssRule)
                continue;
            group.className = 'gig-badge-' + group.name.toLowerCase();
            group.commentClassName = 'gig-comment-badge-' + group.name.toLowerCase();
            group.userClassName = 'gig-comment-username-badge-' + group.name.toLowerCase();
            var backgroundImageRule = '';
            if (group.badgeImageURL) {
                var badgeImageFullURL = group.badgeImageURL == 'https://cdns.gigya.com/gs/i/comments2/editors_pick.png'
                    ? CommentsUtils_1.Images.getPhotoFullName('editors_pick')
                    : window.gigya.global.getPhotoURL(group.badgeImageURL);
                backgroundImageRule = 'background-image:url(' + badgeImageFullURL + '); background-size: 17px 17px;';
            }
            group.cssRule =
                '.gig-comments-container *.' +
                    group.className +
                    ' {color:' +
                    group.badgeColor +
                    ';' +
                    backgroundImageRule +
                    '} ' +
                    '.gig-comments-container *.' +
                    group.className +
                    '.gig-badge-border {border-color:' +
                    group.badgeColor +
                    ';} ';
            // Background color for highlighted comments
            if (group.commentBackgroundColor) {
                group.cssRule += '.gig-comments-container *.' + group.commentClassName + ' {background-color:' + group.commentBackgroundColor + ';} ';
            }
            // Username coloring
            if (group.commenterNameColor) {
                group.cssRule += '.gig-comments-container *.' + group.userClassName + ' {color:' + group.commenterNameColor + ';} ';
            }
            finalCss += group.cssRule + ' ';
        }
        window.gigya._.plugins.utils.css.addCss(finalCss, this.params['cssPrefix']);
    };
    CommentsPlugin.prototype.getHighlightingBadges = function (groups, types) {
        if (!groups)
            return;
        var output = [];
        for (var i = 0; i < this.settings.highlightGroupsSettings.length; i++) {
            var group = this.settings.highlightGroupsSettings[i];
            if (group.enabled && groups.indexOf(group.name) != -1 && (!types || types.indexOf(group.type) != -1))
                output.push(group);
        }
        return output;
    };
    return CommentsPlugin;
}());
exports.CommentsPlugin = CommentsPlugin;


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils.ts":
/*!*******************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ImgBase_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/ImgBase */ "./src/comments/Gigya.Comments.JsPlugin/app/ImgBase.ts");
var Selection = /** @class */ (function () {
    function Selection() {
    }
    Selection.getSelection = function (containerEl) {
        if (window.getSelection && document.createRange) {
            containerEl.normalize();
            var range = window.getSelection().getRangeAt(0);
            var topContainerRange = range.cloneRange();
            topContainerRange.selectNodeContents(containerEl);
            topContainerRange.setEnd(range.startContainer, range.startOffset);
            var localContainerRange = range.cloneRange();
            localContainerRange.selectNodeContents(range.startContainer);
            localContainerRange.setEnd(range.startContainer, range.startOffset);
            var text = topContainerRange.toString();
            var localText = localContainerRange.toString();
            return {
                start: text.length,
                end: text.length + range.toString().length,
                text: text,
                childContainer: localContainerRange.startContainer,
                childOffset: localText.length,
                childText: localText,
            };
        }
        if (document['selection'] && document.body.createTextRange) {
            var selectedTextRange = document['selection'].createRange();
            var preSelectionTextRange = document.body.createTextRange();
            preSelectionTextRange.moveToElementText(containerEl);
            preSelectionTextRange.setEndPoint('EndToStart', selectedTextRange);
            var start = preSelectionTextRange.text.length;
            return {
                start: start,
                end: start + selectedTextRange.text.length,
                text: preSelectionTextRange.text,
                childContainer: range.endContainer,
                endInChildContainer: 0,
                childText: range.toString(),
            };
        }
    };
    Selection.restoreSelection = function (containerEl, savedSel) {
        if (window.getSelection && document.createRange) {
            var charIndex = 0, range = document.createRange();
            range.setStart(containerEl, 0);
            range.collapse(true);
            var nodeStack = [containerEl], node, foundStart = false, stop = false;
            while (!stop && (node = nodeStack.pop())) {
                if (node.nodeType == 3) {
                    var nextCharIndex = charIndex + node.length;
                    if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
                        range.setStart(node, savedSel.start - charIndex);
                        foundStart = true;
                    }
                    if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
                        range.setEnd(node, savedSel.end - charIndex);
                        stop = true;
                    }
                    charIndex = nextCharIndex;
                }
                else {
                    var i = node.childNodes.length;
                    while (i--) {
                        nodeStack.push(node.childNodes[i]);
                    }
                }
            }
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
        else if (document['selection'] && document.body.createTextRange) {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(containerEl);
            textRange.collapse(true);
            textRange.moveEnd('character', savedSel.end);
            textRange.moveStart('character', savedSel.start);
            textRange.select();
        }
    };
    return Selection;
}());
exports.Selection = Selection;
var Images = /** @class */ (function () {
    function Images() {
    }
    Images.getPhotoFullName = function (photoName, forceRatio, ext) {
        if (forceRatio === void 0) { forceRatio = 0; }
        if (ext === void 0) { ext = 'png'; }
        return ImgBase_1.imgBase + photoName + '_x' + (forceRatio > 0 ? forceRatio : Images.pixelRatio) + '.' + ext;
    };
    Images.pixelRatio = window['devicePixelRatio'] ? Math.min(Math.ceil(window['devicePixelRatio']), 3) : 1;
    return Images;
}());
exports.Images = Images;
var Events = /** @class */ (function () {
    function Events() {
    }
    Events.cancelEvent = function (event) {
        if (event.stopPropagation)
            event.stopPropagation();
    };
    return Events;
}());
exports.Events = Events;
var UserTagging = /** @class */ (function () {
    function UserTagging() {
    }
    UserTagging.createTaggedUserElement = function (name, uid) {
        var elUser = document.createElement('input');
        elUser.type = 'button';
        elUser.value = '@' + name;
        elUser.innerHTML = name;
        elUser.tabIndex = -1;
        window.gigya.utils.DOM.addClassToElement(elUser, 'gig-usertagging-tag');
        if (uid)
            elUser.setAttribute('data-gig-uid', uid);
        return elUser;
    };
    UserTagging.replaceUserTagsWithSpans = function (elComment, taggedUIDs) {
        var arrTagElements = window.gigya.utils.DOM.getElementsByClass(elComment, 'gig-usertagging-tag');
        for (var i = 0; i < arrTagElements.length; i++) {
            var elTaggedUser = arrTagElements[i];
            var uid = elTaggedUser.getAttribute('data-gig-uid');
            if (uid) {
                if (window.gigya.utils.array.indexOf(taggedUIDs, uid) == -1)
                    taggedUIDs.push(uid);
                var text = elTaggedUser.getAttribute('value');
                if (!text)
                    text = elTaggedUser.innerHTML;
                var elReplace = document.createElement('span');
                elReplace.setAttribute('data-gig-uid', uid);
                window.gigya.utils.DOM.addClassToElement(elReplace, 'gig-usertagging-tag');
                if (text)
                    elReplace.innerHTML = text;
                elTaggedUser.parentElement.insertBefore(elReplace, elTaggedUser);
                elTaggedUser.parentElement.removeChild(elTaggedUser);
            }
        }
        return elComment.innerHTML;
    };
    UserTagging.replaceSpansWithUserTags = function (elComment) {
        var spans = window.gigya.utils.DOM.getElementsByClass(elComment, 'gig-usertagging-tag');
        if (!spans)
            return;
        for (var i = 0; i < spans.length; i++) {
            var elSpan = spans[i];
            var uid = elSpan.getAttribute('data-gig-uid');
            var name = elSpan.innerHTML.slice(1);
            var elUserTag = UserTagging.createTaggedUserElement(name, uid);
            elSpan.parentElement.insertBefore(elUserTag, elSpan);
            elSpan.parentElement.removeChild(elSpan);
        }
    };
    return UserTagging;
}());
exports.UserTagging = UserTagging;


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/ComposeShare.ts":
/*!******************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/ComposeShare.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var CommentsUtils_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils.ts");
var ComposeShare = /** @class */ (function () {
    function ComposeShare(container, plugin, providers, userIdentities) {
        if (userIdentities === void 0) { userIdentities = {}; }
        this.container = container;
        this.plugin = plugin;
        this.providers = providers;
        this.userIdentities = userIdentities;
        this.selectedProviders = {};
        this.shownProviders = {};
        this.initUI();
        this.loadSelected();
    }
    ComposeShare.prototype.getSelected = function () {
        var arProviders = [];
        for (var p in this.selectedProviders) {
            arProviders.push(p);
        }
        return arProviders;
    };
    ComposeShare.prototype.isProviderConnected = function (provider) {
        return this.userIdentities && this.userIdentities[provider] != null;
    };
    ComposeShare.prototype.initUI = function () {
        var _this = this;
        this.container.innerHTML = '';
        var arConnectedProviders = [];
        var arNotConnectedProviders = [];
        for (var i = 0; i < this.providers.length; i++) {
            var provider = this.providers[i];
            if (this.isProviderConnected(provider.name)) {
                arConnectedProviders.push(provider);
            }
            else {
                arNotConnectedProviders.push(provider);
            }
        }
        this.providers = arConnectedProviders.concat(arNotConnectedProviders);
        var minShareOptions = this.plugin.params['minShareOptions'] || (this.plugin.isMobileUI ? 1 : 2);
        var shownProvidersLength = Math.max(minShareOptions, arConnectedProviders.length);
        for (var i = 0; i < this.providers.length; i++) {
            var provider = this.providers[i];
            if (!this.getProviderElement(provider.name)) {
                var isConnected = this.isProviderConnected(provider.name);
                var divProvider = document.createElement('div');
                divProvider.className = 'gig-comments-share-provider';
                divProvider.style.backgroundImage =
                    'url("' +
                        CommentsUtils_1.Images.getPhotoFullName('shareToProviders/' + provider.name + '_' + (isConnected ? 'color' : 'grey'), this.plugin.pixelRatio) +
                        '")';
                divProvider.setAttribute('data-provider', provider.name);
                divProvider.innerHTML = '<div class="gig-comments-share-provider-checkbox gig-comments-checkbox" data-provider="' + provider.name + '"></div>';
                divProvider.setAttribute('aria-label', provider.displayName);
                window.gigya.utils.DOM.addButtonSubmitListener(divProvider, function (e) { return _this.providerClick(e); });
                this.container.appendChild(divProvider);
                if (i < shownProvidersLength) {
                    this.showProvider(provider.name);
                }
            }
        }
        if (this.providers.length > shownProvidersLength) {
            var divMore = document.createElement('div');
            divMore.className = 'gig-comments-share-more';
            divMore.setAttribute('data-provider', 'more');
            divMore.setAttribute('aria-label', this.plugin.getText('show_more'));
            this.container.appendChild(divMore);
            window.gigya.utils.DOM.addButtonSubmitListener(divMore, function () {
                _this.showMore(divMore);
            });
        }
    };
    ComposeShare.prototype.showProvider = function (provider) {
        this.shownProviders[provider] = 1;
        var elProvider = this.getProviderElement(provider);
        if (elProvider)
            window.gigya.utils.DOM.addClassToElement(elProvider, 'gig-comments-share-provider-shown');
    };
    ComposeShare.prototype.check = function (provider, neverConnect) {
        if (this.isProviderConnected(provider)) {
            this.selectedProviders[provider] = 1;
            var elProvider = this.getProviderElement(provider);
            var elCheckbox = window.gigya.utils.DOM.getElementsByClass(elProvider, 'gig-comments-checkbox')[0];
            window.gigya.utils.DOM.addClassToElement(elCheckbox, 'gig-comments-checkbox-checked');
        }
        else if (!neverConnect) {
            this.connectProvider(provider);
        }
    };
    ComposeShare.prototype.uncheck = function (provider) {
        delete this.selectedProviders[provider];
        var elProvider = this.getProviderElement(provider);
        var elCheckbox = window.gigya.utils.DOM.getElementsByClass(elProvider, 'gig-comments-checkbox')[0];
        window.gigya.utils.DOM.removeClassFromElement(elCheckbox, 'gig-comments-checkbox-checked');
    };
    ComposeShare.prototype.isProviderChecked = function (provider) {
        return this.selectedProviders[provider] != null;
    };
    ComposeShare.prototype.providerClick = function (e) {
        var _this = this;
        var target = e.target || e.srcElement;
        var provider = target.getAttribute('data-provider');
        if (!this.plugin.user.isConnected) {
            window.gigya.socialize.login(this.plugin.params, {
                provider: provider,
                callback: function (e) {
                    if (e.errorCode == 0 && e.user && e.user.identities) {
                        _this.userIdentities = e.user.identities;
                        _this.updateProviderIcon(provider);
                        _this.check(provider);
                    }
                },
            });
        }
        else if (this.isProviderChecked(provider)) {
            this.uncheck(provider);
        }
        else {
            this.check(provider);
        }
    };
    ComposeShare.prototype.getProviderElement = function (provider) {
        return window.gigya.utils.DOM.getElementsByAttribute(this.container, '*', 'data-provider', provider)[0];
    };
    ComposeShare.prototype.showMore = function (opener) {
        var _this = this;
        var pos = window.gigya.utils.DOM.getElementPosition(opener);
        var divMore = document.createElement('div');
        this.divMore = divMore;
        divMore.setAttribute('role', 'dialog');
        divMore.setAttribute('tabindex', '-1');
        divMore.style.position = 'absolute';
        if (divMore.style.zIndex != null) {
            divMore.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
        }
        divMore.className = 'gig-comments-container gig-composebox-morebox';
        document.body.appendChild(divMore);
        var viewport = window.gigya.utils.viewport.getInnerSize();
        var left = Math.max(0, window.gigya.localInfo.quirksMode ? pos.left - 2 : pos.left);
        if (left + divMore.offsetWidth > viewport.w - 40) {
            left = (viewport.w - divMore.offsetWidth) / 2;
        }
        divMore.style.left = '' + left + 'px';
        divMore.style.top = '' + (pos.top + opener.offsetHeight - 2 + (window.gigya.localInfo.quirksMode ? -2 : 0)) + 'px';
        divMore.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['composeShareMoreBox'], {
            more_share_destinations: this.plugin.getText('more_share_destinations'),
        });
        var elMoreProvidersContainer = window.gigya.utils.DOM.getElementsByClass(divMore, 'gig-composebox-morebox-providers')[0];
        if (elMoreProvidersContainer) {
            for (var i = 0; i < this.providers.length; i++) {
                var provider = this.providers[i];
                if (!this.shownProviders[this.providers[i].name]) {
                    if (provider) {
                        var elProvider = document.createElement('li');
                        elProvider.style.backgroundImage =
                            'url("' + CommentsUtils_1.Images.getPhotoFullName('shareToProviders/' + provider.name + '_color', this.plugin.pixelRatio) + '")';
                        elProvider.innerHTML = provider.displayName;
                        elProvider.setAttribute('data-provider', provider.name);
                        elProvider.setAttribute('role', 'button');
                        elProvider.setAttribute('tabindex', '0');
                        window.gigya.utils.DOM.addButtonSubmitListener(elProvider, function (e) { return _this.moreProviderClick(e); });
                        elMoreProvidersContainer.appendChild(elProvider);
                    }
                }
            }
        }
        var elClose = window.gigya.utils.DOM.getElementsByClass(divMore, 'gig-composebox-morebox-close')[0];
        window.gigya.utils.DOM.addButtonSubmitListener(elClose, function () { return _this.closeMore(opener); });
        window.gigya.pluginUtils.DOM.removeElementOnDocClickOrEscape(divMore, function (e, wasOpen) {
            // Stop the event so the more box won't open again
            if (wasOpen && e.target == opener) {
                CommentsUtils_1.Events.cancelEvent(e);
            }
        }, null);
        divMore.focus();
    };
    ComposeShare.prototype.closeMore = function (opener) {
        if (this.divMore) {
            this.divMore.parentNode.removeChild(this.divMore);
        }
        if (opener) {
            opener.focus();
        }
    };
    ComposeShare.prototype.moreProviderClick = function (e) {
        var target = e.target || e.srcElement;
        var provider = target.getAttribute('data-provider');
        if (!this.isProviderConnected(provider)) {
            this.connectProvider(provider);
        }
        this.closeMore();
        this.showProvider(provider);
    };
    ComposeShare.prototype.connectProvider = function (provider) {
        var _this = this;
        window.gigya.socialize.addConnection(this.plugin.params, {
            provider: provider,
            callback: function (e) {
                if (e.errorCode == 0 && e.user && e.user.identities) {
                    _this.userIdentities = e.user.identities;
                    _this.updateProviderIcon(provider);
                    _this.check(provider);
                }
            },
        });
    };
    ComposeShare.prototype.updateProviderIcon = function (provider) {
        var isConnected = this.isProviderConnected(provider);
        var providerElement = this.getProviderElement(provider);
        if (providerElement)
            providerElement.style.backgroundImage =
                'url("' + CommentsUtils_1.Images.getPhotoFullName('shareToProviders/' + provider + '_' + (isConnected ? 'color' : 'grey'), this.plugin.pixelRatio) + '")';
    };
    ComposeShare.prototype.updateIcons = function () {
        this.userIdentities = this.plugin.user.identities;
        for (var provider in this.shownProviders) {
            this.updateProviderIcon(provider);
        }
        if (!this.plugin.user.isConnected) {
            for (var provider in this.shownProviders) {
                this.uncheck(provider);
            }
        }
        else {
            this.loadSelected();
        }
    };
    ComposeShare.prototype.saveSelected = function () {
        window.gigya.utils.cookie.set('_gig_comments_selected_providers', this.getSelected().join(','));
    };
    ComposeShare.prototype.loadSelected = function () {
        var sSavedSelected = window.gigya.utils.cookie.get('_gig_comments_selected_providers');
        var savedSelected = sSavedSelected ? sSavedSelected.split(',') : [];
        var checkAll = this.plugin.settings.shareToSNCheckboxChecked && sSavedSelected == null;
        for (var provider in this.shownProviders) {
            if (checkAll || window.gigya.utils.array.indexOf(savedSelected, provider) > -1) {
                this.check(provider, true);
            }
            else {
                this.uncheck(provider);
            }
        }
    };
    return ComposeShare;
}());
exports.ComposeShare = ComposeShare;


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/DefaultCss.ts":
/*!****************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/DefaultCss.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var CommentsUtils_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils.ts");
exports.defaultCss = {
    reset: [
        '.gig-comments-container *, *.gig-comments-container {',
        'word-wrap:break-word;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;',
        'font-family:arial;color:#333333;position:static;text-align:left;vertical-align:baseline;-moz-box-sizing: content-box;-webkit-box-sizing: content-box;box-sizing: content-box;}',
    ].join(''),
    resetRtl: '.gig-comments-container *, *.gig-comments-container {direction:rtl;text-align:right;}',
    global: [
        '.gig-comments-container input {outline:none}',
        '.gig-comments-container .gig-composebox-summary-input { font-weight: bold; }',
        '.gig-comments-container .gig-composebox-summary-input.gig-comments-placeholder { font-weight: bold; }',
        '.gig-comments-container .gig-comments-placeholder {color: #999;opacity:1}',
        '.gig-comments-container input:-moz-placeholder {color: #585858;opacity:1}',
        '.gig-comments-container input::-moz-placeholder {color: #585858;opacity:1}',
        '.gig-comments-container input::-webkit-input-placeholder  {color: #585858;opacity:1}',
        '.gig-comments-container input:-moz-placeholder {color: #585858;opacity:1}',
        '*.gig-comments-container u {text-decoration:underline}',
        '.gig-comments-container li {margin:0;padding:0;list-style-type:none}',
        '.gig-comments-container ul {margin:0;padding:0;}',
        '*.gig-composebox-textarea ul, .gig-comment-body ul {padding-left:20px;}',
        '*.gig-composebox-textarea li, .gig-comment-body li {list-style-type:disc}',
        '.gig-comments-container * {}',
        "*.gig-comments-container-progress {width:100%;height:38px;background-repeat:no-repeat;background-position:center center;background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('progress_ani_gif', 1, 'gif') +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-container-progress {background-size:contain;background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('progress_ani_gif', 0, 'gif') +
            "')}",
        '*.gig-clearfix {clear:both}',
        '*.gig-comments-header {overflow:hidden;border-bottom: 1px solid #EBEBEB; margin-bottom:8px;padding-bottom:8px; }',
        '*.gig-comments-count {font-size:16px;font-weight:bold;}',
        '*.gig-comments-header-right {float:right;}',
        '*.gig-comments-header-left {float:left;}',
        '*.gig-comments-linksContainer {display:inline-block;}',
        '*.gig-comments-linksContainer li, *.gig-comments-linksContainer a, *.gig-comments-linksContainer li a:hover, *.gig-comments-linksContainer a:active, *.gig-comments-linksContainer a:visited, *.gig-comments-linksContainer a:link {color:#999999; cursor:pointer;display:inline-block;}',
        '*.gig-comments-linksContainer li {margin-right:3px;}',
        '*.gig-comments-linksContainer li:after {content:" "; width:2px; height:2px; background-color:#999999; vertical-align:middle; margin-left:3px; display:inline-block;}',
        '*.gig-comments-linksContainer *.gig-comments-link-lastVisible:after {content:"";margin:0;display:none;}',
        '*.gig-comments-linksContainer *.gig-comments-link-lastVisible {margin-right:0;}',
        //'*.gig-comments-header-right li {margin-top:3px;}',
        '*.gig-comment { width: 100%; outline: 0; }',
        '*.gig-comment * {color:#999999; }',
        '*.gig-comment .gig-comment-content {padding-left:6px;transition-property:background-color, padding;}',
        '*.gig-comment-newComment .gig-comment-content {padding: 6px; background-color: #CEFAD3; border-radius:4px;}',
        '*.gig-comment-summary {display:inline-block;font-size: 13px;font-weight:bold;vertical-align:top; color:#333333;font-size: 14px;}',
        '*.gig-comment-photo {float:left;width: 37px; height:37px;}',
        '*.gig-comment-providerLogo {text-align:right;}',
        '*.gig-comment-providerLogo img {width:14px;height:14px;margin-top:-11px; margin-right:-3px;display:inline-block;}',
        '*.gig-comment-data {padding-left:41px;}',
        '*.gig-comment-header { overflow:hidden; margin-bottom:6px; }',
        '*.gig-comment-header-right { float:right; }',
        //'*.gig-comment-header-left {float:left;}',
        '*.gig-comment-time {font-size: 11px;display:inline-block;margin:2px 0 0 10px; float: right;}',
        '*.gig-comment-username {font-weight:bold;color:#333333; margin-right:6px; display:inline-block; }',
        '*.gig-comment-body, .gig-comment-body * {color:#585858; line-height:18px;}',
        '*.gig-comment-footer, *.gig-comment-replies {padding-left: 6px}',
        '*.gig-comment-replies {transition-property: max-height;overflow:hidden;}',
        '*.gig-comment-replies-collapsed {display:none;}',
        '*.gig-comment-footer {font-size:11px;overflow:hidden;border-bottom: 1px solid #EBEBEB;margin: 10px 0; padding-bottom:10px;}',
        '*.gig-comment[data-level="0"]:last-of-type *.gig-comment-footer:last-ch {border-bottom:none;}',
        '*.gig-comment-footer-left {float:left;}',
        '*.gig-comment-footer li{cursor:pointer;}',
        '*.gig-comment .gig-comment-replybox {display:none;background-color:#F6F6F6; padding:4px 6px;}',
        '*.gig-comment .gig-comment-replybox-open {display:block; margin-bottom: 10px;}',
        '*.gig-comment .gig-composebox-title, *.gig-comment .gig-composebox-title * {font-weight:normal; font-style:italic;color:#333333}',
        '*.gig-comment *.gig-composebox-username {font-weight:bold;}',
        '*.gig-comment-repliesArrow div {display:inline-block}',
        "*.gig-comment-repliesArrow-img {margin: 0 1px 0 6px; width: 9px; height:9px; margin-right:3px;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Reply_Arrow', 1) +
            "');background-repeat:no-repeat;background-position:0px 3px;}",
        ".gig-comments-hires-icons *.gig-comment-repliesArrow-img {background-size:contain; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Reply_Arrow') +
            "');}",
        '*.gig-comment-repliesArrow .gig-comment-repliesArrow-img {}',
        '*.gig-comment-repliesArrow-collapsed .gig-comment-repliesArrow-img {-webkit-transform:rotate(270deg); transform:rotate(270deg);}',
        '*.gig-comment-status {display:none;border-radius: 3px;color:#FFFFFF;padding:2px 8px; border-radius:3px;margin-bottom:6px;}',
        '*.gig-comment-body a:link {color:#007ACF;text-decoration: underline;}',
        '*.gig-comment-body a:visited {color:#61007d;text-decoration: underline;}',
        '*.gig-comment-status-info {display:inline-block;background-color:#64B46F;}',
        '*.gig-comment-status-error {display:inline-block;background-color:#D0605F;margin-bottom:6px;}',
        '*.gig-comment-viaProvider {display:inline-block;font-style:italic;margin:0 12px;padding: 0 0 0 12px;background-repeat:no-repeat;background-position:left center;}',
        "*.gig-comment-viaProvider-facebook {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('/providers/Facebook_9x9', 1) + "');}",
        ".gig-comments-hires-icons *.gig-comment-viaProvider-facebook {background-size:contain; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('/providers/Facebook_9x9') +
            "');}",
        '.gig-comments-hires-icons *.gig-loginbox-provider {background-size:15px;}',
        'img.gig-comment-img {border-radius:3px;}',
        // footer
        '*.gig-comment-footer-right {float:right;}',
        '*.gig-comment-footer-right div {display:inline-block;height:17px;line-height:16px;vertical-align:bottom;}',
        // vote
        '*.gig-comment-vote-pos, *.gig-comment-vote-neg {cursor:pointer;background-repeat:no-repeat;background-position: 0 0;padding-left: 14px;}',
        '*.gig-comment-vote-with-value {padding-left: 17px;}',
        '*.gig-comment-vote-total {margin-right:5px;}',
        "*.gig-comment-vote-pos {background-size:14px 14px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_up', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comment-vote-pos {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_up') + "')}",
        "*.gig-comment-vote-pos-down {background-size:14px 14px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_up_pressed', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comment-vote-pos-down {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_up_pressed') + "')}",
        "*.gig-comment-vote-neg {background-size:14px 14px;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Thumbs_down', 1) +
            "');margin-left:15px;position:relative; background-position: 0 3px; }",
        ".gig-comments-hires-icons *.gig-comment-vote-neg {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_down') + "');}",
        '*.gig-comment-vote-posneg *.gig-comment-vote-neg {margin-left:2px;}',
        "*.gig-comment-vote-neg-down {background-size:14px 14px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_down_pressed', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comment-vote-neg-down {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_down_pressed') + "')}",
        // flag
        "*.gig-comment-flag {margin: 0 15px;vertical-align:top;display:inline-block;width: 14px; height: 14px; visibility:hidden; cursor:pointer;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Flag_Icon', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comment-flag {background-size:contain;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Flag_Icon') + "')}",
        "*.gig-comment-flag-submitted {cursor:default;visibility:visible;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Flag_Icon_Submitted', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comment-flag-submitted {background-size:contain;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Flag_Icon_Submitted') +
            "')}",
        // more
        '*.gig-comments-more {cursor:pointer;border-radius:3px; line-height: 38px;border: 1px solid #F7F6F6; background-color:#F9F9F9;text-align:center;}',
        '*.gig-comments-more:hover {background-color: #E5E5E5}',
        "*.gig-comments-more-progress {cursor:default;width:100%;height:38px;background-repeat:no-repeat;background-position:center center; background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('progress_ani_gif', 0, 'gif') +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-more-progress {background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('progress_ani_gif', 0, 'gif') + "')}",
        '*.gig-comments-more-progress:hover {background-color:#F9F9F9;}',
        // dialog
        '*.gig-comments-dialog {min-width: 367px;min-height:140px;border: 6px solid #858585; border-radius: 5px; background-color:#FFFFFF;}',
        "*.gig-comments-dialog-close {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('close_icon', 1) +
            "'); width:15px; height:15px; float:right; cursor:pointer;}",
        ".gig-comments-hires-icons *.gig-comments-dialog-close {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('close_icon') +
            "'); background-size: contain;}",
        '*.gig-comments-dialog-caption-container {overflow:hidden;background-color: #f3f3f3; padding: 5px 5px 5px 12px;overflow:auto;zoom:1;font-size: 14px;font-weight:bold;color: #4d4d4d;}',
        '*.gig-comments-dialog-caption {display:inline-block;float:left;}',
        '*.gig-comments-dialog-body{padding:24px 12px 12px 12px;}',
        '*.gig-comments-dialog-buttons{margin-top:12px;text-align:right;margin: 20px;}',
        '*.gig-comments-dialog-text {margin-bottom:10px;}',
        '*.gig-comments-dialog-textbox-container {float:left}',
        '*.gig-comments-dialog-textbox {width: 260px;color: #4D4D4D;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;padding:0 4px;background-color:white;border: 1px solid #C0C0C0;height:24px;box-shadow:inset 0 0 4px #DCDCDC; -moz-box-shadow:inset 0 0 4px #DCDCDC; -webkit-box-shadow:inset 0 0 4px #DCDCDC;}',
        "*.gig-comments-dialog-subscribe-okIcon {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('ok_icon', 1) +
            "');width:14px;height:14px;position:relative;top:2px;margin-right:2px;display:inline-block;}",
        ".gig-comments-hires-icons *.gig-comments-dialog-subscribe-okIcon {background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('ok_icon') + "');}",
        '*.gig-comments-dialog-button {',
        'line-height:22px;font-size:12px;margin-left:7px;font-weight:bold;min-width: 50px;',
        'position:relative;border-radius: 3px; color:#4d4d4d;cursor:pointer;',
        'font-size: 11px;padding: 0 5px; border: 1px solid #C5C7C7;display:inline-block;zoom:1;vertical-align:middle; text-align:center;',
        'box-shadow:0 0 2px RGBA(0,0,0,0.15);-webkit-box-shadow:0 0 2px RGBA(0,0,0,0.15);-moz-box-shadow:0 0 2px RGBA(0,0,0,0.15);',
        'gradient(#FFFFFF,#EAEBEB)}}',
        '*.gig-comments-dialog-button:hover {',
        'color:#b4b4b4;cursor:default;',
        'gradient(#EBEBEB,#FFFFFF)}',
        '*.gig-comments-dialog-error {color: #ce585a;font-size:11px;margin-top:5px;clear:both;}',
        '*.gig-comments-dialog-textbox-button {}',
        //composebox
        '*.gig-composebox {margin-bottom: 23px;}',
        '*.gig-composebox-login {}',
        '*.gig-composebox-login div {display:inline-block;line-height:30px;font-weight: bold; }',
        '*.gig-composebox-or {margin: 0 10px;}',
        '*.gig-composebox-social-login, *.gig-composebox-guest-login, *.gig-composebox-site-login {',
        'border-radius: 3px;cursor:pointer;padding: 0 15px;font-size: 14px;box-shadow: inset 1px 1px #fff;border: solid 1px #e2e2e2;',
        'gradient(#f5f5f5,#f1f1f0);',
        '}',
        '*.gig-composebox-social-login:hover, *.gig-composebox-guest-login:hover, *.gig-composebox-site-login:hover {gradient(#EFEFEF,#E1E1E1);}',
        '*.gig-composebox-social-login {padding:0 9px;background-repeat:no-repeat;background-position:right center;gradient(#f5f5f5,#f1f1f0);}',
        '*.gig-composebox-social-login:hover {gradient(#EFEFEF,#E1E1E1);}',
        "*.gig-composebox-login-icon {background-position:center;display:inline-block;width: 36px; height:17px;margin:0 7px;vertical-align:middle;background-repeat:no-repeat;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Login-icons-fb_tw', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-login-icon {background-size:contain;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Login-icons-fb_tw') +
            "')}",
        "*.gig-composebox-login-drop-icon {background-position:center;display:inline-block;width: 9px; height:17px;vertical-align:middle;background-repeat:no-repeat;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Login_icons_arrow', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-login-drop-icon {background-size:contain;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Login_icons_arrow') +
            "')}",
        '*.gig-composebox-header { transition-property:max-height; overflow:hidden; margin-bottom:4px; }',
        '.gig-composebox-open *.gig-composebox-header { margin-bottom:4px;}',
        '.gig-comments-reviews .gig-composebox-header, .gig-comments-reviews .gig-composebox-open .gig-composebox-header {max-height:none;}',
        '*.gig-composebox-header-left {float:left;}',
        '*.gig-composebox-header-right {float:right;}',
        '*.gig-composebox-header-right *, *.gig-composebox-header-left * {vertical-align:bottom;}',
        '*.gig-composebox-title, *.gig-composebox-name {display:inline-block;font-size:14px;font-weight:bold;margin:0 5px 0 0;}',
        '*.gig-composebox-logout {cursor:pointer;display:inline-block;font-size:11px; color: #999999;}',
        '*.gig-composebox-logout span {font-size:12px; color:#0796c6}',
        '*.gig-composebox-logout:hover span {text-decoration:underline}',
        '*.gig-composebox-close {visibility:hidden;}',
        "*.gig-comment-replybox *.gig-composebox-close {visibility:visible; display:inline-block; margin-left:5px; cursor:pointer; width: 15px; height: 15px; background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('close_icon', 1) +
            "'); background-position:center; background-repeat:no-repeat;}",
        ".gig-comments-hires-icons *.gig-comment-replybox *.gig-composebox-close {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('close_icon') +
            "'); background-size: contain; }",
        '*.gig-comment-replybox *.gig-composebox-close:hover { background-color: #ebebeb; }',
        '*.gig-composebox-follow {font-size:13px;cursor:pointer;display:inline-block; color:#919191;padding-left: 12px;',
        "background-repeat: no-repeat; background-position: left center;background-size: 8px 8px;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Follow', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-follow {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Follow') + "')}",
        "*.gig-composebox-following {background-size: 8px 8px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Following', 1) + "')}",
        ".gig-comments-hires-icons *.gig-composebox-following {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Following') + "')}",
        "*.gig-composebox-following:hover {background-size: 8px 8px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Unfollow', 1) + "')}",
        ".gig-comments-hires-icons *.gig-composebox-following:hover {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Unfollow') + "')}",
        '*.gig-composebox-photo {float:left;width: 37px;height:37px}',
        '*.gig-composebox-data {padding-left:47px;}',
        '*.gig-comments-composebox *.gig-composebox-data {margin-bottom:20px;}',
        '*.gig-composebox-footer {display:none;overflow:hidden;margin-top:4px;}',
        '.gig-composebox-open *.gig-composebox-footer {display:block;}',
        '*.gig-composebox-footer-left, *.gig-composebox-footer-right {padding: 2px 0;}',
        '*.gig-composebox-footer-left {float:left;}',
        '*.gig-composebox-footer-right {float:right;}',
        '*.gig-composebox-cancel {cursor:pointer; padding: 0 18px; font-size: 14px; font-weight:bold; color: #484848; display:inline-block;',
        'line-height: 28px; border-radius: 3px; background-color: #484848; box-shadow: 1px 1px rgba(255, 255, 255, 0.4) inset;',
        'border: 1px solid #bfbfbf; gradient(#e2e2e2, #bfbfbf); margin-right: 6px;}',
        '*.gig-composebox-cancel:hover {gradient(#e2e2e2, #bfbfbf);}',
        '*.gig-composebox-post {cursor:pointer;padding: 0 18px; font-size: 14px; font-weight:bold; color: #FFFFFF; display:inline-block;',
        'line-height: 28px; border-radius: 3px; background-color: #D8D8D8; box-shadow: 1px 1px rgba(255, 255, 255, 0.4) inset;',
        'border: 1px solid #51AE48; gradient(#88cb82,#72c26d);}',
        '*.gig-comments-button {cursor: -moz-user-select: none; -khtml-user-select: none; -webkit-user-select:none; -o-user-select:none; }',
        '*.gig-composebox-post:hover {gradient(#7AB574,#68AF63);}',
        '*.gig-composebox-postAnonymously {display:inline-block;}',
        '*.gig-composebox-anon-text { vertical-align:middle;display:inline-block;font-family:arial;font-size:12px;color:#999999;padding:0 10px 0 5px;}',
        '*.gig-composebox-anon-checkbox { vertical-align:middle;}',
        '*.gig-composebox-summary {display:none;padding: 9px;}',
        '.gig-composebox-open *.gig-composebox-summary {display:block;margin-bottom:5px;}',
        '*.gig-composebox-summary input {width:100%;border:none;color:#585858;}',
        '*.gig-composebox-editor {text-align: right;padding: 0 9px 9px 9px;}',
        '*.gig-composebox-editor-with-sidebar {padding: 0 29px 9px 9px;}',
        '*.gig-composebox-editor, *.gig-composebox-summary {',
        'background-color: #FFFFFF; border: 1px solid #D5D5D5; ',
        'border-radius: 3px;box-shadow: 0 0 5px rgba(0, 0, 0, 0.05) inset; border: solid 1px #d5d5d5;}',
        '*.gig-composebox-textarea { line-height:18px;transition-property: min-height; text-align:left;cursor: text;min-height:17px;resize: none;border:none;margin-top:9px; outline:none}',
        '*.gig-composebox-textarea, *.gig-composebox-textarea * {color:#585858;font-size: 14px;}',
        'textarea.gig-composebox-textarea {overflow:hidden;width:100%;display:block;height:17px;}',
        '.gig-composebox-open textarea.gig-composebox-textarea {height:65px;}',
        '.gig-composebox-open *.gig-composebox-textarea {min-height:69px;}',
        '*.gig-composebox-textarea, *.gig-composebox-textarea *, *.gig-composebox-summary input {font-size:12px;}',
        '*.gig-composebox-textarea:empty:not(:focus):before {color:#999; content:attr(data-placeholder);}',
        'ul.gig-composebox-sidebar {display:none;background-color:#FFFFFF;float:right;margin-right:-29px;}',
        'ul.gig-composebox-sidebar {transition-property:opacity;opacity:0;}',
        '.gig-composebox-open *.gig-composebox-sidebar {opacity:1;display:inline-block;}',
        '.gig-comments-hires-icons *.gig-composebox-sidebar-button {background-size: 18px 18px; }',
        '*.gig-composebox-sidebar-button {border-radius:0px;background-color: #f0f0f0; width: 29px;height:29px;display:block;background-color:#F7F3F7;}',
        '*.gig-composebox-sidebar-button:last-child:nth-child(-n+2) { border-radius:0 0 0 3px; }',
        '*.gig-composebox-sidebar-button:hover, *.gig-composebox-sidebar-button-down {background-color: #f1f1f1;box-shadow: inset 0 0 9px rgba(0,0,0,.26);}',
        "*.gig-composebox-sidebar-font {cursor:pointer;width: 29px;height:29px;background-repeat:no-repeat;background-position:center; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rich_Text_up', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-sidebar-font {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Rich_Text_up') + "')}",
        "*.gig-composebox-sidebar-font:hover, *.gig-composebox-sidebar-font.gig-composebox-sidebar-button-down {background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rich_Text_hover', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-sidebar-font:hover, .gig-comments-hires-icons *.gig-composebox-sidebar-font.gig-composebox-sidebar-button-down {background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rich_Text_hover') +
            "')}",
        "*.gig-composebox-sidebar-tag {cursor:pointer;width: 29px;height:29px;background-repeat:no-repeat;background-position:center; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('User_tagging_up', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-sidebar-tag {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('User_tagging_up') + "')}",
        "*.gig-composebox-sidebar-tag:hover, *.gig-composebox-sidebar-tag.gig-composebox-sidebar-button-down {background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('User_tagging_hover', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-sidebar-tag:hover, *.gig-composebox-sidebar-tag.gig-composebox-sidebar-button-down {background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('User_tagging_hover', 1) +
            "')}",
        "*.gig-composebox-sidebar-media {cursor:pointer;width: 29px;height:29px;background-repeat:no-repeat;background-position:center; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Media_up', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-sidebar-media {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Media_up') + "')}",
        "*.gig-composebox-sidebar-media:hover, *.gig-composebox-sidebar-media.gig-composebox-sidebar-button-down {background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Media_hover', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-sidebar-media:hover, .gig-comments-hires-icons *.gig-composebox-sidebar-media.gig-composebox-sidebar-button-down {background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Media_hover') +
            "')}",
        '*.gig-composebox-field-error {border: 1px solid #F9888E;}',
        '*.gig-composebox-error {border-radius:3px;color: #FFFFFF;text-align:center;line-height:22px;background:#F9888E;margin-bottom:7px;display:none;font-weight:bold;font-size:13px;}',
        '*.gig-composebox-postAnonymously { cursor:pointer; vertical-align:top; padding-top:4px;}',
        '*.gig-comments-checkbox { width: 10px;height: 10px; border:1px solid #C6C6C6;display:inline-block;	border-radius: 1px; background-color: #fff;box-shadow: 0 0 5px rgba(189, 189, 189, 0.25) inset}',
        "*.gig-comments-checkbox-checked {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('shareToProviders/checkmark', 1) +
            "'); background-position:center; background-repeat:no-repeat;}",
        ".gig-comments-hires-icons *.gig-comments-checkbox-checked {background-size:contain; background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('shareToProviders/checkmark') +
            "');}",
        // self review
        '*.gig-selfreview-header {overflow:hidden;}',
        '*.gig-selfreview-header-left {float:left;}',
        '*.gig-selfreview-header-right {float:right;}',
        '*.gig-selfreview-summary-container, *.gig-selfreview-body-container {background-color:#EDEDED; margin: 5px 0;padding:6px 10px;border-radius:3px;}',
        '*.gig-selfreview-field-title {font-weight:bold;margin:0 7px 0 0;}',
        '*.gig-selfreview-nameAndLogout {padding: 0 0 0 47px;height:37px;}',
        '*.gig-selfreview-yourReview {font-weight:bold;color:#919191;margin-bottom:3px;}',
        '*.gig-selfreview-ratings {margin: 5px 0}',
        '*.gig-selfreview-rating .gig-comment-rating-value {margin-left:2px; }',
        '*.gig-selfreview-rating-_overall .gig-comment-rating-value {margin-left:0px; }',
        '*.gig-selfreview-rating-_overall.gig-selfreview-rating {margin-bottom:5px;}',
        //guestbox
        '*.gig-comments-guestbox {transition-property: max-height;background-color:#FFFFFF;border: 1px solid #E2E2E2; border-radius: 0 3px 3px 3px; overflow:hidden;width:150px;font-size:10px;color:#919191;padding: 0 13px 0 13px}',
        '*.gig-comments-guestbox input {width:150px;border-radius:3px; height:24px; line-height:22px;color:#919191;border:1px solid #C0C0C0;padding-left:2px;}',
        '*.gig-guestbox-fields {margin: 16px 0 0px;}',
        '*.gig-guestbox-nickname {margin: 0px 0 10px;}',
        '*.gig-guestbox-text {font-size:10px;margin: 5px 0;}',
        '*.gig-guestbox-ok {margin-bottom: 8px;float:right;display:inline-block;cursor:pointer;padding: 0 9px;font-weight: bold;color: #222121;text-shadow: 0 2px rgba(255, 255, 255, .4);',
        'line-height: 22px;border-radius: 3px;background-color: #f2f2f2;box-shadow: 0 1px 3px rgba(0, 0, 0, .25), inset 0 0 2px rgba(255, 255, 255, .24);',
        'border: solid 1px #c4c7cd; }',
        '*.gig-guestbox-error {margin-left: 4px; display:inline-block;color:#e70707;font-size:10px;width:100px;float:left;margin-bottom: 8px;}',
        //loginbox
        '*.gig-comments-loginbox {transition-property: max-height;background-color:#FFFFFF;border: 1px solid #E2E2E2; border-radius: 0 0 3px 3px; overflow:hidden;min-width:115px;font-size:10px;color:#919191;}',
        '*.gig-comments-loginbox-open {}',
        '*.gig-loginbox-provider {background-repeat:no-repeat; background-position:left center; margin-left:9px; padding:8px 8px 8px 22px; cursor:pointer;border-bottom: 1px solid #EAEAEA}',
        '*.gig-loginbox-provider:last-child {border-bottom:none;}',
        '*.gig-loginbox-provider:hover {background-color:#F9F9F9}',
        '*.gig-loginbox-provider[data-provider=more] { padding-left:0px }',
        //sign in with box
        '*.gig-signinbox-provider {margin-left:8px; padding:8px 8px 8px 1px; cursor:default; border-bottom: 1px solid #EAEAEA}',
        // user tagging box
        '*.gig-comments-usertaggingbox { width:290px; border-radius:3px; background-color:#FFF; border: solid 1px #d5d5d5; font-family:arial; }',
        '*.gig-usertagging-title { color:#666666; background-color:#F4F4F4; font-size:10px; border-radius:2px; padding:7px; font-family:inherit; }',
        '*.gig-usertagging-suggestions { list-style-type:none; margin:0; padding:0px; font-family:inherit; font-size:12px; }',
        '*.gig-usertagging-suggestions li { cursor:pointer;padding-left:8px; border-top:solid 1px #eaeaea;height:18px;padding-top:4px;padding-bottom:4px;',
        '}',
        '*.gig-usertagging-suggestions li *.gig-usertagging-username { margin-left:8px;vertical-align:top;line-height:20px; }',
        '*.gig-usertagging-suggestions li *.gig-usertagging-userimage { border-radius:3px;width:18px;height:18px; }',
        '*.gig-usertagging-suggestions li.gig-usertagging-selected { background-color:#f9f9f9; }',
        '*.gig-usertagging-tag { -webkit-appearance: none; border-radius:8px 9px 9px 8px / 8px 8px 10px 10px; background-color:#d5e4f2; border-style:none; padding:0px 4px 0px 4px;',
        ' }',
        // share to
        '*.gig-composebox-share {vertical-align:top;overflow:hidden;background-color:#F4F4F4; border-radius:3px; padding-left:4px;}',
        '*.gig-comment .gig-composebox-share {border: 1px solid #E8E8E8}',
        '*.gig-composebox-share-text {line-height:26px;vertical-align:top;display:inline-block;color:#999999;}',
        '*.gig-composebox-share-providers {display:inline-block;}',
        '*.gig-comments-share-provider {display:none;height:18px;width:36px;background-position: 23px center;padding:4px 3px;background-repeat:no-repeat;cursor:pointer; border-right: 1px solid #FFFFFF;}',
        '.gig-comments-hires-icons *.gig-comments-share-provider {background-size:16px 16px}',
        '*.gig-comments-share-provider-shown {display:inline-block;}',
        "*.gig-comments-share-more {cursor:pointer; vertical-align:top; padding:4px; display:inline-block; height:18px; width:16px; background-position:center; background-repeat:no-repeat; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('sharetoProviders/Share_More_providers', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-share-more {background-size:8px 8px; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('sharetoProviders/Share_More_providers') +
            "')}",
        '*.gig-comments-share-provider-checkbox { margin-top:3px; }',
        //            Share_More_providers.png
        // share to - more
        '*.gig-composebox-morebox {width: 265px;border: 5px solid #858585; border-radius:3px;}',
        '*.gig-composebox-morebox-caption {background-color:#F3F3F3;overflow:hidden;line-height: 15px;padding: 3px;}',
        '*.gig-composebox-morebox-title {margin-left:3px;font-weight:bold; float:left;background-color:#F3F3F3;overflow:hidden;color:#4D4D4D;}',
        "*.gig-composebox-morebox-close {float:right; background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('close_icon', 1) +
            "'); width:15px; height:15px; cursor:pointer; background-position:center; background-repeat:no-repeat;}",
        ".gig-comments-hires-icons *.gig-composebox-morebox-close {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('close_icon') +
            "'); background-size:contain;}",
        '*.gig-composebox-morebox *.gig-composebox-morebox-providers {padding: 0 6px; background-color:#FFFFFF;}',
        '*.gig-composebox-morebox *.gig-composebox-morebox-providers li {padding-left: 18px; margin: 4px 0; width: 105px;display:inline-block;background-repeat:no-repeat;cursor:pointer;background-size: 14px;}',
        // sortbox
        '*.gig-comments-sortbox {margin-top:9px;border-radius: 3px;background-color: #fff;box-shadow: -1px 2px 1px rgba(35,31,32,.07);border: solid 1px #b0b0b0;padding: 3px 8px;display:inline-block;}',
        '*.gig-comments-sortbox:before {content:"";width: 13px;right: 12px;height:7px;display:inline-block;position:absolute;top:-7px;background-image:url(\'' +
            CommentsUtils_1.Images.getPhotoFullName('Sort_dropdown_triangle', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-sortbox:before {background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('Sort_dropdown_triangle') + "')}",
        '*.gig-comments-sortbox li {color:#999999;cursor:pointer; min-width: 80px; padding: 7px 5px; border-bottom: 1px solid #EAEAEA;}',
        '*.gig-comments-sortbox li:last-child {border-bottom: none}',
        '*.gig-comments-sortbox li:hover {color:#848484;background-color:#F4F4F4;}',
        '*.gig-comments-sortbox-selected {font-weight:bold}',
        // fontbox
        '*.gig-comments-fontbox {padding-right: 8px;padding-top:7px;transition: opacity 0.25s; opacity:0; }',
        '*.gig-comments-fontbox ul:after {content:"";width: 8px;height:13px;display:inline-block;position:absolute;right:1px;top: 12px;background-image:url(\'' +
            CommentsUtils_1.Images.getPhotoFullName('Sidebar_box_thub', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-fontbox ul:after {background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('Sidebar_box_thub') + "')}",
        '*.gig-comments-fontbox ul {padding: 2px; width: 69px;background-color:#FFFFFF; border: 1px solid #B0B0B0; border-radius:2px;cursor:pointer;}',
        '*.gig-comments-fontbox li {border: 1px none #EEEEEE;width: 33px;height:33px;display:inline-block;background-position:center;background-repeat:no-repeat}',
        "*.gig-comments-fontbox *.gig-composebox-font-bold {border-right-style:solid;border-bottom-style:solid;background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rich_Text_bold', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-fontbox *.gig-composebox-font-bold {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rich_Text_bold') +
            "')}",
        "*.gig-comments-fontbox *.gig-composebox-font-italic {border-bottom-style:solid;background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rich_Text_italic', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-fontbox *.gig-composebox-font-italic {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rich_Text_italic') +
            "')}",
        "*.gig-comments-fontbox *.gig-composebox-font-underline {background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('Rich_Text_underline', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comments-fontbox *.gig-composebox-font-underline {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rich_Text_underline') +
            "')}",
        "*.gig-comments-fontbox *.gig-composebox-font-bullets {border-left-style:solid;background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rich_Text_align', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-fontbox *.gig-composebox-font-bullets {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rich_Text_align') +
            "')}",
        // mediabox
        '*.gig-comments-mediabox { padding-right: 8px; transition: opacity 0.25s; opacity:0; ',
        ' }',
        '*.gig-mediabox-fields {  padding:12px 6px 10px; width:382px; border: solid 1px #b0b0b0; border-radius: 2px; background-color: #fff; -webkit-box-shadow: -1px 2px 1px rgba(35,31,32,.07); -moz-box-shadow: -1px 2px 1px rgba(35, 31, 32, .07); box-shadow: -1px 2px 1px rgba(35, 31, 32, .07); }',
        '*.gig-mediabox-fields:after { content:""; width: 8px; height:13px; position:absolute; display:inline-block; right:1px; top:12px; background-image:url(\'' +
            CommentsUtils_1.Images.getPhotoFullName('Sidebar_box_thub', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-mediabox-fields:after { background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('Sidebar_box_thub') + "')}",
        '*.gig-mediabox-url { vertical-align:top; padding-left:8px; margin-bottom:10px; margin-right:5px; width: 307px; height: 28px; border-radius: 3px; background-color: #fff; -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.15); -moz-box-shadow: inset 0 0 5px rgba(0,0,0,.15); box-shadow: inset 0 0 5px rgba(0,0,0,.15); border: solid 1px #d5d5d5; }',
        '*.gig-mediabox-url:empty:before {color:#585858; content:attr(data-placeholder);}',
        '*.gig-mediabox-ok { vertical-align:top; cursor:pointer; text-align:center; display:inline-block; font-weight:bold; font-size:14px; color:#333333; line-height:28px; width: 57px; height: 28px; border-radius: 3px; background-color: #f2f2f1; box-shadow: inset 1px 1px #fff; -moz-box-shadow: inset 1px 1px #fff; -webkit-box-shadow: inset 1px 1px #fff; border: solid 1px #d5d5d5; gradient(#f5f5f5,#f1f1f0); }',
        '*.gig-mediabox-ok:hover { gradient(#efefef, #e9e9e9); }',
        '*.gig-mediabox-text { font-family:arial; font-size:12px; color:#666666; line-height:14px; }',
        // mediaitems display
        '*.gig-composebox-media-display { margin-bottom:12px; }',
        '*.gig-media-caption { font-family:arial; font-size:12px; color:#666666; line-height:17px; margin:4px 12px 0px 1px; }',
        '*.gig-media-caption-text { text-overflow:ellipsis;white-space:nowrap;overflow:hidden;word-wrap:normal; }',
        '*.gig-media-caption-url { display:block; padding-left:23px; text-decoration:underline; word-wrap:normal; color:#0796c6; cursor:pointer; font-size:12px; text-overflow:ellipsis; white-space:',
        'nowrap; overflow:hidden; vertical-align:text-top; background-repeat:no-repeat; background-position:left; background-size: contain;}',
        '*.gig-media-thumbnail { height: 303px; }',
        '*.gig-media-thumbnail-image { margin:auto; display:block; }',
        '*.gig-media-overlay { position:relative;top:-303px;height:0px; }',
        "*.gig-media-play { display:none; opacity:0.85; width: 75px; height: 45px; border-radius: 10px; background-color: #545454; background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('media_play', 1) +
            "'); ",
        'background-position:center center; background-repeat:no-repeat; cursor:pointer; position:relative;',
        'box-shadow: 0 -1px 3px rgba(0,0,0,.4), inset 0 1px rgba(255,255,255,.29); -moz-box-shadow: 0 -1px 3px rgba(0,0,0,.4), inset 0 1px rgba(255,255,255,.29); -webkit-box-shadow: 0 -1px 3px rgba(0,0,0,.4), inset 0 1px rgba(255,255,255,.29); }',
        ".gig-comments-hires-icons *.gig-media-play { background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('media_play') + "'); }",
        '*.gig-media-play:hover { background-color:#666565; }',
        '*.gig-media-cancel { cursor:pointer; margin-top:-18px; margin-right:0px; float:right; width: 13px; height: 13px; border-radius: 2px; background-color: #c9c6c6;',
        'box-shadow: inset 0 0 9px rgba(0, 0, 0, .26); -moz - box-shadow: inset 0 0 9px rgba(0, 0, 0, .26); -webkit - box-shadow: inset 0 0 9px rgba(0, 0, 0, .26);',
        "background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('media_close_icon', 1) + "'); background-position:center center; background-repeat:no-repeat; }",
        ".gig-comments-hires-icons *.gig-media-cancel {background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('media_close_icon') + "'); }",
        '*.gig-media-cancel:hover { background-color: #ebebeb; }',
        // mediaitems - specific to comment display
        '*.gig-comment-mediaitem { margin-top:7px; }',
        '*.gig-comment-content .gig-media-thumbnail-image { margin-left:0px; margin-right: 0px; }',
        '*.gig-comment-content .gig-media-caption { margin:8px 12px 0px 0px; }',
        // mediaitems - specific to preview (composebox)
        '*.gig-composebox-media-preview { padding-left:4px; padding-right:4px; border-radius: 0px 0px 3px 3px; background-color: #fff; -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.15); -moz-box-shadow: inset 0 0 5px rgba(0,0,0,.15); box-shadow: inset 0 0 5px rgba(0,0,0,.15);',
        "border: solid 1px #d5d5d5; border-top:none; padding-top:23px; padding-bottom:5px; background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('media_loader_gif', 1, 'gif') +
            "'); background-repeat:no-repeat; background-position:center center; }",
        ".gig-comments-hires-icons *.gig-composebox-media-preview { background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('media_loader_gif', 0, 'gif') + "');}",
        '*.gig-composebox-editor-with-media { border-radius:3px 3px 0px 0px; }',
        // mediaitems player
        "*.gig-comments-mediaplayer-dimmer { top:0px;left:0px;height:100%;width:100%;transition:opacity 0.25s;position:fixed; filter: 'alpha(opacity=50)';background-color:black;}",
        '*.gig-comments-mediaplayer { top:50%;left:50%;transition:opacity 0.25s;padding-left:18px;padding-right:18px; position:fixed;background-color:#ffffff;border-radius:3px; }',
        '*.gig-comments-mediaplayer-top { height:14px;padding-top:3px;padding-bottom-2px;padding-right:3px; }',
        '*.gig-comments-mediaplayer-top .gig-media-cancel { margin-right:-18px;padding-right:0px;margin-top:0px; }',
        '*.gig-comments-mediaplayer-bottom { margin:5px 0px 5px 0px; background-color:#d5d6d6; border-radius:3px; }',
        '*.gig-comments-mediaplayer-caption { background-size:contain; background-repeat:no-repeat; background-position:left;font-size:13px;font-family:arial; padding-left:23px;line-height:17px; }',
        // updates
        '*.gig-comments-updates {transition-property: opacity, height; height:0; opacity:0; visibility:hidden; border-radius:3px; background-color:#90D890;}',
        '*.gig-comments-updates-visible {opacity:1; visibility:visible; height:25px; margin: 5px 0;}',
        '*.gig-comments-updates-text {text-align:center; line-height: 25px; color:#FFFFFF; font-weight:bold;}',
        '*.gig-comments-updates-link {cursor:pointer; font-size:12px; color: #FFFFFF;}',
        '*.gig-comments-updates-full {text-align:right;}',
        '*.gig-comments-updates-full .gig-comments-updates-link {display:inline-block; line-height: 25px;top: -25px; position:relative; margin-right: 11px;',
        "padding-left:15px;background-repeat:no-repeat;background-position:left center; background-size:11px 11px; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Pause_Stream', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-updates-full .gig-comments-updates-link {background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Pause_Stream') +
            "')}",
        "*.gig-comments-updates-full .gig-comments-updates-link:hover { background-size:11px 11px; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Pause_Stream_hover', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-updates-full .gig-comments-updates-link:hover { background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Pause_Stream_hover') +
            "')}",
        "*.gig-comments-updates-full.gig-comments-updates-paused .gig-comments-updates-link {background-size:11px 11px; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Resume_Stream', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-updates-full.gig-comments-updates-paused .gig-comments-updates-link {background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Resume_Stream') +
            "')}",
        "*.gig-comments-updates-full.gig-comments-updates-paused .gig-comments-updates-link:hover {background-size:11px 11px; background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Resume_Stream_hover', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-updates-full.gig-comments-updates-paused .gig-comments-updates-link:hover {background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('Resume_Stream_hover') +
            "')}",
        '*.gig-comments-updates-countonly {text-align:center;}',
        '*.gig-comments-updates-countonly .gig-comments-updates-text {display:inline-block}',
        '*.gig-comments-updates-countonly .gig-comments-updates-link {display:inline-block; margin-left:5px; font-weight:bold; text-decoration:underline;}',
        '*.gig-comments-updates-countonly .gig-comments-updates-link:hover {text-decoration:none;}',
        // title (summary and rating)
        '*.gig-comment-title * {vertical-align:bottom;display:inline-block;}',
        '*.gig-comment-title {margin-bottom:8px;}',
        "*.gig-comment-rating-drop {margin: 0 3px; cursor:pointer; width: 13px; height: 14px;0 7px 0 2px;vertical-align:bottom;background-repeat:no-repeat;background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rating_Drop_Icon', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comment-rating-drop {background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('Rating_Drop_Icon', 1) + "')}",
        "*.gig-comment-rating-drop:hover, *.gig-comment-rating-drop-down {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rating_Drop_Icon_hover', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comment-rating-drop:hover, *.gig-comment-rating-drop-down {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Rating_Drop_Icon_hover', 1) +
            "')}",
        '*.gig-comment-rating-title, *.gig-comment-rating-value, *.gig-composebox-rating-title, *.gig-composebox-rating-value {display:inline-block;vertical-align:top;}',
        '*.gig-comment-rating-title {margin:0 10px 0 0;vertical-align:bottom;min-width:53px;}',
        '*.gig-composebox-rating-value {margin-left:3px; }',
        '*.gig-composebox-rating-title {margin-right:10px;vertical-align:bottom;}',
        "*.gig-comment-rating-star, *.gig-composebox-rating-star, *.gig-selfreview-rating-star {display:inline-block;vertical-align:bottom;background-repeat:no-repeat;padding-right:3px; width: 16px; height:16px;background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Star_gray_small', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comment-rating-star, .gig-comments-hires-icons *.gig-composebox-rating-star, .gig-comments-hires-icons *.gig-selfreview-rating-star {background-size: contain;background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Star_gray_small') +
            "')}",
        "*.gig-comment-rating-star-full, *.gig-composebox-rating-star-full, *.gig-selfreview-rating-star-full {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Star_yellow_small', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comment-rating-star-full, .gig-comments-hires-icons *.gig-composebox-rating-star-full, .gig-comments-hires-icons *.gig-selfreview-rating-star-full {background-size: contain;background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Star_yellow_small') +
            "')}",
        '*.gig-comment-rating-dimensions {display:inline-block;margin-top:9px;position:absolute;padding: 10px;background-color:#FFFFFF;box-shadow: -1px 2px 1px rgba(35,31,32,.07);border: 1px solid #B0B0B0;border-radius:2px;white-space:nowrap}',
        '*.gig-comment-rating-dimensions:before {margin-left: -7px;content:"";width: 13px;height:7px;display:inline-block;position:absolute;top:-7px;background-image:url(\'' +
            CommentsUtils_1.Images.getPhotoFullName('Sort_dropdown_triangle', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comment-rating-dimensions:before {background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('Sort_dropdown_triangle') + "')}",
        '*.gig-composebox-rating-star {cursor:pointer;}',
        '*.gig-composebox-ratings {margin-bottom:5px;}',
        '*.gig-composebox-rating-_overall .gig-composebox-rating-value {margin-left:0 }',
        '*.gig-composebox-rating-_overall {font-weight:bold;margin: 5px 0;}',
        '*.gig-composebox-rating-_overall .gig-composebox-rating-star, *.gig-composebox-rating-_overall.gig-composebox-field-error:hover .gig-composebox-rating-star, *.gig-selfreview-rating-_overall .gig-selfreview-rating-star ',
        "{padding-right: 4px; width: 21px; height: 20px; background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Star_gray_big', 1) + "')}",
        '.gig-comments-hires-icons *.gig-composebox-rating-_overall .gig-composebox-rating-star, .gig-comments-hires-icons *.gig-composebox-rating-_overall.gig-composebox-field-error:hover .gig-composebox-rating-star, .gig-comments-hires-icons *.gig-selfreview-rating-_overall .gig-selfreview-rating-star ',
        "{background-size:contain;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Star_gray_big') + "')}",
        '*.gig-composebox-rating-_overall .gig-composebox-rating-star-full, *.gig-composebox-rating-_overall.gig-composebox-field-error:hover .gig-composebox-rating-star-full, *.gig-selfreview-rating-_overall .gig-selfreview-rating-star-full ',
        "{background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Star_yellow_big', 1) + "')}",
        '.gig-comments-hires-icons *.gig-composebox-rating-_overall .gig-composebox-rating-star-full, .gig-comments-hires-icons *.gig-composebox-rating-_overall.gig-composebox-field-error:hover .gig-comments-hires-icons .gig-composebox-rating-star-full, .gig-comments-hires-icons *.gig-selfreview-rating-_overall .gig-selfreview-rating-star-full ',
        "{background-size:contain;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Star_yellow_big') + "')}",
        '*.gig-composebox-rating-_overall.gig-composebox-field-error {border: none;}',
        "*.gig-composebox-rating-_overall.gig-composebox-field-error .gig-composebox-rating-star {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Star_red_big', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-rating-_overall.gig-composebox-field-error .gig-composebox-rating-star {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Star_red_big') +
            "')}",
        // Colored
        '*.gig-comment-colored-background {border-radius:4px; padding: 3px 6px 6px 6px;}',
        'div.gig-comment-pinned-background {background-color: #fffcd2;}',
        // Highlighting Badges
        '*.gig-comment-withBadges *.gig-comment-header-right {text-align: right;}',
        '*.gig-comment-withBadges *.gig-comment-username { margin-bottom:5px; }',
        '*.gig-composebox-withBadges *.gig-composebox-logout  {display:block; }',
        '*.gig-composebox-withBadges *.gig-composebox-header-right {  text-align:right; margin-bottom: 4px;}',
        '*.gig-composebox-withBadges *.gig-composebox-title { position: relative; bottom: 7px; }',
        '*.gig-comment-commentBadge { display: inline-block; font-size:11px; font-weight: bold; background-repeat: no-repeat; padding-right: 22px; background-position: right; height:17px; line-height: 17px;}',
        '*.gig-comment-userBadge { margin-bottom: 5px; margin-right: 6px; display: inline-block; font-size:11px; font-weight: bold; line-height: 15px;}',
        '*.gig-badge-border {border: 1px solid; border-radius: 2px; padding: 0px 5px;}',
        // editbox
        '*.gig-comment .gig-comment-editbox {display:none;background-color:#F6F6F6; padding:4px 6px 4px 6px; margin-left:-41px;}',
        '*.gig-comment .gig-comment-editbox .gig-composebox-ratings * {color:#585858;}',
        '*.gig-comment .gig-comment-editbox-open {display:block; margin-bottom: 10px;}',
        "*.gig-comment-editbox *.gig-composebox-close {display:inline-block; margin-left:5px; cursor:pointer; width: 15px; height: 15px; background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('close_icon', 1) +
            "'); background-position:center; background-repeat:no-repeat;}",
        ".gig-comments-hires-icons *.gig-comment-editbox *.gig-composebox-close {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('close_icon') +
            "'); background-size: contain; }",
        '*.gig-comment-editbox *.gig-composebox-close:hover { background-color: #ebebeb; }',
        '*.gig-comment-edited {font-size: 11px; display:inline-block; margin:2px 0 0 5px; float:right; font-style:italic; color:#999999}',
        '*.gig-comment-data-removed {margin-left: -41px;}',
        '*.gig-comment-data-removed .gig-comment-content {padding-left: 0px;}',
        '*.gig-comment-data-removed .gig-comment-body {color:#999999; font-size:12px; font-style:italic; line-height:16.5px;}',
        '*.gig-comment-data-removed .gig-comment-footer {margin: 4px 0px 10px; padding-left: 0px;}',
        '*.gig-comment-data-removed .gig-comment-footer .gig-comment-footer-left .gig-comment-flag {display: none;}',
        '*.gig-comment-data-removed .gig-comment-footer-right, *.gig-comment-data-removed .gig-comment-header {display:none;}',
        '*.gig-comment-data-removed .gig-comment-replyLink , *.gig-comment-data-removed .gig-comment-likeLink , *.gig-comment-data-removed .gig-comment-shareLink , *.gig-comment-data-removed .gig-comment-deleteLink , *.gig-comment-data-removed .gig-comment-editLink {display:none;}',
        '*.gig-comment-data-removed .gig-comment-content {transition: none; -webkit-transition: none}',
        '*.gig-comment-data-removed .gig-comment-content {transition: none; -webkit-transition: none}',
        '*.gig-comment-title-removed {display:none;}',
        '*.gig-comment-photo-removed {display:none;}',
    ].join(''),
    rtl: [
        '*.gig-comment-data {padding-left:0;padding-right:41px;}',
        '*.gig-comment-footer-right, *.gig-comments-header-right, *.gig-composebox-footer-right, *.gig-composebox-header-right, *.gig-comment-header-right, *.gig-comments-dialog-close, *.gig-comments-dialog-button, *.gig-selfreview-header-right {float:left}',
        '*.gig-comment-footer-left, *.gig-comments-header-left, *.gig-composebox-footer-left, *.gig-composebox-header-left, *.gig-comment-header-left,*.gig-comments-dialog-caption,*.gig-comments-dialog-textbox-container, *.gig-selfreview-header-left, *.gig-composebox-photo, *.gig-comment-photo {float:right}',
        '*.gig-composebox-data {padding-left:0;padding-right: 47px;}',
        '*.gig-loginbox-provider {padding: 8px 22px 8px 8px;background-position:right center; margin-right:8px;}',
        '*.gig-composebox-editor-with-sidebar {padding: 0 9px 9px 29px;text-align:left;}',
        '*.gig-composebox-textarea {text-align:right}',
        '*.gig-comments-fontbox *.gig-composebox-font-bold {border-left-style:solid;border-right-style:none;}',
        '*.gig-comments-fontbox *.gig-composebox-font-bullets {border-right-style:solid;border-left-style:none;}',
        '*.gig-comments-share-provider-shown {background-position:6px;}',
        '*.gig-comments-share-provider {border-right:none;border-left:1px solid #FFFFFF}',
        '*.gig-comments-linksContainer li:after {margin-left:0;margin-right: 3px;}',
        '*.gig-comments-linksContainer li {margin-right:0;margin-left: 3px;}',
        '*.gig-composebox-follow {padding-right:12px;padding-left:0;background-position:right;}',
        '*.gig-comment-footer, *.gig-comment-replies {padding-left: 0;padding-right: 6px;}',
        '*.gig-comment-replybox *.gig-composebox-close {margin-left:0;margin-right:5px;}',
        '*.gig-comment-editbox *.gig-composebox-close {margin-left:0;margin-right:5px;}',
        '*.gig-comments-dialog-caption-container {padding: 5px 12px 5px 5px}',
        '*.gig-composebox-title {margin-right:0;margin-left:5px;}',
        '*.gig-comment .gig-comment-content {padding-left:0;padding-right:6px;}',
        '*.gig-composebox-morebox *.gig-composebox-morebox-providers li {padding-left:0; padding-right: 18px; background-position:right;}',
        '*.gig-comments-dialog-button {margin: 0 7px 0 0}',
        '*.gig-comments-updates-full {text-align:left;}',
        '*.gig-comments-updates-full .gig-comments-updates-link {margin: 0 0 0 11px;padding:0 15px 0 0; background-position:right center;}',
        '*.gig-comments-updates-countonly .gig-comments-updates-link {margin-right:5px;}',
        '*.gig-comments-fontbox {margin-left:8px;}',
        '*.gig-comments-fontbox ul:after {left:-7px;right:auto;-webkit-transform:rotate(180deg);transform:rotate(180deg);}',
        'ul.gig-composebox-sidebar {float:left;margin-left:-29px}',
        '*.gig-composebox-textarea ul, .gig-comment-body ul {padding-right:20px;}',
        '*.gig-selfreview-field-title {margin:0 0 0 7px;}',
        '*.gig-selfreview-nameAndLogout {padding: 0 47px 0 0;}',
        '*.gig-composebox-title, *.gig-composebox-name {margin:0 0 0 5px;}',
        '*.gig-comment-rating-title {margin:0 0 0 10px; min-width:53px;}',
        '*.gig-comment-providerLogo {text-align:left;}',
        '*.gig-comment-providerLogo img {margin-left:-2px;margin-right:0;}',
        '*.gig-comment-viaProvider {background-position:right center;padding: 0 12px 0 0;}',
        '*.gig-usertagging-suggestions li { padding-right:8px; }',
        '*.gig-usertagging-suggestions li *.gig-usertagging-username { margin-right:8px; }',
        '*.gig-comment-content .gig-media-caption { margin:8px 0px 0px 12px; }',
        '*.gig-media-caption-url { background-position:right; padding-right:23px; padding-left:0px; }',
        '*.gig-comments-mediaplayer-caption { background-position:right;padding-right:23px;text-align:right; }',
        '*.gig-mediabox-url { padding-right:8px; margin-left:5px;padding-left:0px;margin-right:0px; }',
        '*.gig-comments-mediabox { padding-right:0px;padding-left:8px; }',
        '*.gig-mediabox-fields:after { left:1px; right:auto; -webkit-transform:rotate(180deg);transform:rotate(180deg); }',
        '*.gig-composebox-sidebar-button:last-child:nth-child(-n+2) { border-radius:0 0 3px 0; }',
        '*.gig-composebox-sidebar-button { transform:scaleX(-1);-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1); }',
        '*.gig-comment-vote-neg {margin: 0 15px 0 0;}',
        '*.gig-comment-repliesArrow-collapsed .gig-comment-repliesArrow-img {-webkit-transform:rotate(-270deg); transform:rotate(-270deg);}',
        '*.gig-comment-time {margin:2px 10px 0 0;}',
        '*.gig-composebox-cancel { margin-left: 6px; margin-right: 0px}',
        '*.gig-comment-edited { margin:2px 5px 0 0; float: left;}',
        '*.gig-comment .gig-comment-editbox {margin-left:0px;margin-right:-41px;}',
        '*.gig-comment-footer-right * {direction:ltr;text-align:right;}',
        '*.gig-comment-vote-posneg *.gig-comment-vote-neg {margin-left:0;margin-right:2px;}',
        '*.gig-comment-vote-total {margin-right:0;margin-left:5px;}',
        '*.gig-comment-data-removed {margin-right: -41px;}',
        // Highlighting Badges
        '*.gig-comment-userBadge { margin-right: 0px; margin-left: 6px;}',
        //'*.gig-comment-badge-image {margin-left: 0px; margin-right: 5px; }',
        '*.gig-comment-withBadges *.gig-comment-username { margin-right:0px; margin-left:6px; }',
        '*.gig-comment-withBadges *.gig-comment-time { float:left; margin-right:6px;}',
    ].join(''),
    mobile: [
        '.gig-comments-container {padding: 0 10px; -moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}',
        '.gig-comments-container * {transition: none;font-size:16px;-webkit-text-size-adjust:none;}',
        '*.gig-comments-linksContainer li {padding: 0 3px 0 0;margin-right:3px;}',
        '*.gig-comments-linksContainer li:after {margin-bottom:7px;margin-left:7px;}',
        '*.gig-comment-time {font-size: 13px;}',
        '*.gig-comment-footer * {font-size:15px}',
        '*.gig-composebox-follow {font-size:16px; padding-left: 20px;}',
        '*.gig-comments-share-provider {height:23px;background-position: 31px center;padding:4px 10px;width:39px;}',
        '*.gig-comments-checkbox {width: 16px;height: 16px; }',
        "*.gig-comments-checkbox-checked *.gig-comments-share-provider-checkbox {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('sharetoProviders/checkmark', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-comments-checkbox-checked *.gig-comments-share-provider-checkbox {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('sharetoProviders/checkmark') +
            "')}",
        '*.gig-composebox-share-text {line-height:30px;}',
        '*.gig-comments-share-more {height: 22px;}',
        '*.gig-comment-data {padding: 0}',
        '*.gig-comment-self-data {padding-left:41px;}',
        '*.gig-comment-replies {padding-left: 15px}',
        '.gig-composebox-open textarea.gig-composebox-textarea {height:45px;}',
        '*.gig-comment-replybox *.gig-composebox-close { vertical-align:middle; }',
        '*.gig-comment-editbox *.gig-composebox-close { vertical-align:middle; }',
        '.gig-composebox-open *.gig-composebox-textarea {min-height:45px;}',
        '*.gig-comments-dialog {width: auto;min-width:0;}',
        '*.gig-comments-dialog-textbox-button {float:right;margin-top:10px;}',
        '*.gig-comments-dialog-body {overflow:hidden}',
        '*.gig-composebox-textarea, *.gig-composebox-textarea *, *.gig-composebox-summary input {font-size:18px;}',
        '*.gig-comments-count {line-height:30px}',
        '*.gig-comment-vote-pos, .gig-comment-vote-neg {padding-left:30px;}',
        "*.gig-comment-vote-pos {background-size:27px 27px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('mobile/Thumbs_up', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comment-vote-pos {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('mobile/Thumbs_up') + "')}",
        "*.gig-comment-vote-pos-down{background-size:27px 27px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('mobile/Thumbs_up_pressed', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comment-vote-pos-down{background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('mobile/Thumbs_up_pressed') + "')}",
        "*.gig-comment-vote-neg {background-size:27px 27px;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('mobile/Thumbs_down', 1) +
            "');background-position:0 6px}",
        ".gig-comments-hires-icons *.gig-comment-vote-neg {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('mobile/Thumbs_down') + "');}",
        "*.gig-comment-vote-neg-down {background-size:27px 27px;background-image: url('" +
            CommentsUtils_1.Images.getPhotoFullName('mobile/Thumbs_down_pressed', 1) +
            "');background-position:0 6px}",
        ".gig-comments-hires-icons *.gig-comment-vote-neg-down {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('mobile/Thumbs_down_pressed') + "');}",
        '*.gig-comment-footer-right div {height:31px;line-height:31px;}',
        '*.gig-composebox-header-left *, *.gig-composebox-header-right *, *.gig-composebox-logout span {font-size:15px;}',
        '*.gig-comment .gig-comment-replybox {margin-bottom:10px;}',
        '*.gig-comment .gig-comment-editbox {margin-bottom:10px;}',
        '*.gig-comment-flag {display:none}',
        '*.gig-comment-rating, *.gig-comment-rating-drop {margin-bottom:3px;}',
        '*.gig-comment-summary {margin-left:2px;}',
        '*.gig-comments-container.gig-comment-rating-dimensions {padding: 10px;}',
        '*.gig-composebox-rating, *.gig-selfreview-rating {padding: 3px 0; margin: 5px 0}',
        "*.gig-composebox-rating-star, *.gig-selfreview-rating-star {padding-right:4px;width: 21px; height:20px;background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Star_gray_big', 1) +
            "')}",
        ".gig-comments-hires-icons *.gig-composebox-rating-star, .gig-comments-hires-icons *.gig-selfreview-rating-star {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Star_gray_big') +
            "')}",
        "*.gig-composebox-rating-star-full, *.gig-selfreview-rating-star-full {background-image:url('" + CommentsUtils_1.Images.getPhotoFullName('Star_yellow_big', 1) + "')}",
        ".gig-comments-hires-icons *.gig-composebox-rating-star-full, .gig-comments-hires-icons *.gig-selfreview-rating-star-full {background-image:url('" +
            CommentsUtils_1.Images.getPhotoFullName('Star_yellow_big') +
            "')}",
        '*.gig-composebox-rating-value {margin:0;}',
        '*.gig-selfreview-rating .gig-comment-rating-value {margin: 2px 5px}',
        'ul.gig-comments-header-right {margin-left:10px}',
        //'*.gig-comments-header-right li {margin-top:0;}',
        '*.gig-comments-count {line-height:normal}',
        '*.gig-comment-footer-right {margin-left:10px;}',
        '*.gig-comment-footer-left, *.gig-comments-header-left *, *.gig-comments-linksContainer {line-height:31px;}',
        '*.gig-comments-linksContainer li:after {margin-bottom:10px;}',
        '*.gig-comments-guestbox {width: 178px;}',
        '*.gig-composebox-morebox {padding:0}',
        '*.gig-comments-updates-visible {height:auto;min-height:50px;}',
        '*.gig-comments-updates-full .gig-comments-updates-link {top:0}',
        //'*.gig-composebox-rating-star {padding: 0 7px}'
        '*.gig-comment-body, .gig-comment-body * {line-height:20px;}',
        '*.gig-composebox-withBadges *.gig-composebox-title { bottom: 5px; }',
        '*.gig-comment .gig-comment-editbox {margin-left:0;}',
    ].join(''),
    mobileRtl: [
        '*.gig-comment-replies {padding-left:0;padding-right:15px;}',
        '*.gig-comment-data {padding: 0}',
        '*.gig-comment-self-data {padding-left:0;padding-right:41px;}',
        '*.gig-comments-share-provider {background-position:11px;}',
        '*.gig-comment .gig-comment-editbox {margin-right:0;}',
    ].join(''),
    nonMobile: [
        '.gig-comments-container *  {font-size:12px;transition: none 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86); -webkit-transition: none 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)}',
        '*.gig-comments-linksContainer li:hover, *.gig-comments-linksContainer a:hover {text-decoration:underline;text-decoration-skip:all}',
        "*.gig-comment-vote-pos:hover {background-size:14px 14px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_up_hover', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comment-vote-pos:hover {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_up_hover') + "')}",
        "*.gig-comment-vote-neg:hover {background-size:14px 14px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_down_hover', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comment-vote-neg:hover {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_down_hover') + "')}",
        '*.gig-comment-footer li:hover, *.gig-comment-repliesArrow:hover div {text-decoration:underline}',
        '*.gig-comment-self-data:hover *.gig-comment-flag, *.gig-comment-flag-visible {visibility:visible; }',
        "*.gig-comment-vote-pos-down:hover {background-size:14px 14px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_up_pressed', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comment-vote-pos-down:hover {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_up_pressed') + "')}",
        "*.gig-comment-vote-neg-down:hover {background-size:14px 14px;background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_down_pressed', 1) + "')}",
        ".gig-comments-hires-icons *.gig-comment-vote-neg-down:hover {background-image: url('" + CommentsUtils_1.Images.getPhotoFullName('Thumbs_down_pressed') + "')}",
    ].join(''),
};


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/EditCommentBox.ts":
/*!********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/EditCommentBox.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseComposeBox_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/BaseComposeBox */ "./src/comments/Gigya.Comments.JsPlugin/app/BaseComposeBox.ts");
var CommentsUtils_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils.ts");
var Comments_Models_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/Comments.Models */ "./src/comments/Gigya.Comments.JsPlugin/app/Comments.Models.ts");
var EditCommentBox = /** @class */ (function (_super) {
    tslib_1.__extends(EditCommentBox, _super);
    function EditCommentBox(plugin, container, data, onClose) {
        return _super.call(this, plugin, container, data, onClose) || this;
    }
    EditCommentBox.prototype.render = function () {
        _super.prototype.render.call(this);
        this.populateFromCommentData();
        this.renderMediaItemIfNeeded();
        this.updateUI();
        this.activate();
    };
    EditCommentBox.prototype.renderMediaItemIfNeeded = function () {
        if (!this.data.mediaItems || this.data.mediaItems.length === 0)
            return;
        this.mediaItem = this.data.mediaItems[0];
        this.showMediaItemPreview();
        this.updateMediaItem();
    };
    EditCommentBox.prototype.populateFromCommentData = function () {
        if (this.uiElements.summaryInput && this.data.commentTitle) {
            this.uiElements.summaryInput.value = this.data.commentTitle;
            this.uiElements.summaryInput['refreshPlaceholder']();
        }
        if (this.uiElements.textArea && typeof this.data.commentText != 'undefined') {
            this.uiElements.textArea.innerHTML = this.data.commentText;
            CommentsUtils_1.UserTagging.replaceSpansWithUserTags(this.uiElements.textArea);
        }
    };
    EditCommentBox.prototype.submitCallback = function (response) {
        var oldDescendantsCountArr = [];
        var currCommentID = response['comment']['ID'];
        while (currCommentID) {
            var comment_1 = this.plugin.getComment(currCommentID);
            oldDescendantsCountArr.push({
                comment: comment_1,
                oldDescendantsCount: comment_1.descendantsCount,
            });
            currCommentID = comment_1.data.parentID;
        }
        _super.prototype.submitCallback.call(this, response);
        if (response['errorCode'] != 0)
            return;
        var comment = this.plugin.getComment(response['comment']['ID']);
        comment.data.replies = this.data.replies;
        for (var _i = 0, oldDescendantsCountArr_1 = oldDescendantsCountArr; _i < oldDescendantsCountArr_1.length; _i++) {
            var _a = oldDescendantsCountArr_1[_i], comment_2 = _a.comment, oldDescendantsCount = _a.oldDescendantsCount;
            comment_2.descendantsCount = oldDescendantsCount;
            comment_2.updateRepliesCount();
        }
        if (comment.data.status === 'pending') {
            this.plugin.streamInfo.commentCount--;
            this.plugin.updateCount();
        }
    };
    EditCommentBox.prototype.updateUI = function () {
        if (!this.plugin.user.isConnected) {
            this.close();
            return;
        }
        _super.prototype.updateUI.call(this);
    };
    //#region Overrides
    EditCommentBox.prototype.getSubmitText = function () {
        return this.getText('done');
    };
    EditCommentBox.prototype.submit = function () {
        var _this = this;
        var updateParams = {
            commentID: this.data.ID,
            commentText: this.plugin.settings.enableCommentBody != 'disabled' ? this.data.commentText : null,
            commentTitle: this.plugin.settings.enableCommentTitles != 'disabled' && !this.data.isReply() ? this.data.commentTitle : null,
            taggedUsers: this.plugin.settings.enableUserTagging ? this.data.taggedUsers : null,
            ratings: this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS ? this.data.ratings : null,
            callback: function (res) { return _this.submitCallback(res); },
        };
        if (this.plugin.settings.enableMediaItems)
            updateParams.mediaItems = this.data.mediaItems.length > 0 ? this.data.mediaItems[0].url : [];
        window.gigya.comments.updateComment(this.plugin.params, updateParams);
        var comment = this.plugin.getComment(this.data.ID);
        comment.data = this.data;
        comment.data.edited = true;
        comment.info = '';
        comment.error = '';
        comment.isPost = true;
        if (comment.isPostPending())
            comment.info =
                this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && comment.level == 0
                    ? this.getText('your_edited_review_is_awaiting_moderation')
                    : this.getText('your_edited_comment_is_awaiting_moderation');
        this.close();
        comment.updateAll();
    };
    EditCommentBox.prototype.afterRender = function () {
        this.hideElement(this.uiElements.logoutLink);
        this.hideElement(this.uiElements.shareSection);
        this.hideElement(this.uiElements.postAnonymouslySection);
        this.hideElement(this.uiElements.loginBar);
        this.uiElements.logoutLink = null;
        this.uiElements.shareSection = null;
        this.uiElements.postAnonymouslySection = null;
        this.uiElements.loginBar = null;
    };
    EditCommentBox.prototype.getTitle = function () {
        return this.getText('editing') + '...';
    };
    return EditCommentBox;
}(BaseComposeBox_1.BaseComposeBox));
exports.EditCommentBox = EditCommentBox;


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/ImgBase.ts":
/*!*************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/ImgBase.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.imgBase = (window.gigya.thisScript ? window.gigya._.getCdnResource() : '') + '/gs/i/comments2/';


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/NewCommentBox.ts":
/*!*******************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/NewCommentBox.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseComposeBox_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/BaseComposeBox */ "./src/comments/Gigya.Comments.JsPlugin/app/BaseComposeBox.ts");
var ComposeShare_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/ComposeShare */ "./src/comments/Gigya.Comments.JsPlugin/app/ComposeShare.ts");
var CommentData_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentData */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentData.ts");
var Comments_Models_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/Comments.Models */ "./src/comments/Gigya.Comments.JsPlugin/app/Comments.Models.ts");
var NewCommentBox = /** @class */ (function (_super) {
    tslib_1.__extends(NewCommentBox, _super);
    function NewCommentBox(plugin, container, parentCommentID, onClose) {
        return _super.call(this, plugin, container, new CommentData_1.CommentData('newComment', parentCommentID), onClose) || this;
    }
    //#region Rendering the elements
    NewCommentBox.prototype.render = function () {
        // No need to render if nreadonly
        if (this.plugin.settings.readOnly || this.plugin.streamInfo.status == 'readOnly')
            return;
        _super.prototype.render.call(this);
        this.renderSelfReviewIfNeeded();
        this.renderShareOptions();
        this.renderPostAnonymously();
        this.updateUI();
    };
    NewCommentBox.prototype.renderShareOptions = function () {
        if (!this.uiElements.shareSection || !this.uiElements.shareProviders)
            return;
        var enabledProviders = this.plugin.params['enabledShareProviders'] || this.plugin.params['enabledProviders'] || '*';
        var disabledProviders = this.plugin.params['disabledShareProviders'] || this.plugin.params['disabledProviders'] || '';
        var arProviders = window.gigya.socialize.getProvidersByName(enabledProviders);
        arProviders = window.gigya.socialize.hideProvidersByName(arProviders, disabledProviders);
        arProviders = window.gigya.socialize.getProvidersForRequiredCapabilities(arProviders, ['actions']);
        this.share = new ComposeShare_1.ComposeShare(this.uiElements.shareProviders, this.plugin, arProviders, this.plugin.user.identities);
    };
    NewCommentBox.prototype.renderPostAnonymously = function () {
        if (!this.uiElements.postAnonymouslySection)
            return;
        if (!this.plugin.settings.allowAnonymous) {
            this.uiElements.postAnonymouslySection.parentElement.removeChild(this.uiElements.postAnonymouslySection);
        }
        else {
            this.updatePostAnonymously();
            var anonTooltip;
            if (this.plugin.textMode == Comments_Models_1.TextMode.COMMENTS)
                anonTooltip = this.getText('when_posting_anonymously,_other_users_will_not_see_your_personal_info_next_to_your_comment.');
            else
                anonTooltip = this.getText('when_posting_anonymously,_other_users_will_not_see_your_personal_info_next_to_your_review.');
            var arTooltip = anonTooltip.split(' ');
            for (var i = 6; i < arTooltip.length; i += 6) {
                arTooltip.splice(i, 0, ['\n']);
            }
            this.uiElements.postAnonymouslySection.setAttribute('title', arTooltip.join(' '));
        }
    };
    NewCommentBox.prototype.renderSelfReviewIfNeeded = function () {
        this.selfReview = this.plugin.getSelfReview();
        if (!this.selfReview || this.plugin.settings.allowMultipleReviewsPerUser || this.data.isReply())
            return false;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['myReview'], {
            logout: this.getText('logout'),
            your_review: this.getText('your_review'),
            summary: this.getText('summary_colon'),
            review: this.getText('review_colon'),
        });
        this.buildUIElementsObj();
        this.bindEvents();
        this.updateSelfReview();
        return true;
    };
    // TODO: should be merged with the code that draws rating dimensions for a new comment
    NewCommentBox.prototype.getSelfRatingDimensionElement = function (selfReview, dimension) {
        var ratingValue = selfReview.data.ratings[dimension];
        var elDimension = document.createElement('div');
        elDimension.innerHTML = this.plugin.templates['rating'];
        elDimension.className = 'gig-selfreview-rating gig-selfreview-rating-' + dimension;
        var dimTitle;
        if (dimension == '_overall') {
            dimTitle = this.getText('my_rating_colon');
        }
        else {
            var dimensions = this.plugin.settings.ratingDims;
            if (dimensions) {
                for (var i = 0; i < dimensions.length; i++) {
                    if (dimensions[i].id == dimension) {
                        dimTitle = dimensions[i].name + ':';
                        break;
                    }
                }
            }
        }
        if (!dimTitle)
            return;
        var elDimTitle = window.gigya.utils.DOM.getElementsByClass(elDimension, 'gig-comment-rating-title')[0];
        if (elDimTitle)
            elDimTitle.innerHTML = dimTitle;
        var elDimValue = window.gigya.utils.DOM.getElementsByClass(elDimension, 'gig-comment-rating-value')[0];
        if (elDimValue) {
            elDimValue.innerHTML = '';
            elDimValue.title = ratingValue.toString();
            for (var i = 0; i < 5; i++) {
                var elCurrStar = document.createElement('div');
                window.gigya.utils.DOM.addClassToElement(elCurrStar, 'gig-selfreview-rating-star');
                var starClass = '';
                if (i < Math.floor(ratingValue))
                    starClass = 'gig-selfreview-rating-star-full';
                window.gigya.utils.DOM.addClassToElement(elCurrStar, starClass);
                elDimValue.appendChild(elCurrStar);
            }
        }
        return elDimension;
    };
    //#endregion
    //#region Sharing
    NewCommentBox.prototype.getUserAction = function (commentData, userAction) {
        if (userAction === void 0) { userAction = null; }
        if (!userAction)
            userAction = this.data.isReply() ? this.plugin.params['replyUserAction'] : this.plugin.params['userAction'];
        if (!userAction) {
            userAction = new window.gigya.socialize.UserAction();
        }
        else {
            userAction = userAction.clone();
        }
        if (!userAction.title) {
            if (this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && !this.data.isReply()) {
                if (commentData.ratings && commentData.ratings['_overall']) {
                    userAction.title = this.getText('i_rated_pagetitle_as_rating_5', '%rating', commentData.ratings['_overall'].toString()).replace('%pageTitle', document.title);
                }
                else {
                    userAction.title = this.getText('my_review_on_colon_pagetitle', '%pageTitle', document.title);
                }
            }
            else {
                userAction.title = this.getText('commented_on_colon_pagetitle', '%pageTitle', document.title);
            }
        }
        if (!userAction.linkBack)
            userAction.linkBack = window.gigya._.plugins.utils.URL.addOrReplaceHashFragment(document.location.href, 'gig_comment_id', '$commentID$');
        var p = document.createElement('p');
        p.innerHTML = commentData.commentText.replace(/<br>/g, '\n').replace(/<\/?div>/g, '\n');
        userAction.userMessage = p.innerText || p.textContent;
        var placeholders = {
            commentTitle: commentData.commentTitle,
            commentText: commentData.commentText,
            rating: commentData.ratings ? commentData.ratings['_overall'] : null,
        };
        placeholders['ratingDescription'] = [
            this.getText('i_hate_it'),
            this.getText('i_dont_like_it'),
            this.getText('its_ok'),
            this.getText('i_like_it'),
            this.getText('i_love_it'),
        ][placeholders.rating - 1];
        return window.gigya.global.fillUserActionTemplate(userAction, placeholders);
    };
    //#endregion
    //#region Event handling
    NewCommentBox.prototype.bindEvents = function () {
        var _this = this;
        _super.prototype.bindEvents.call(this);
        window.gigya.utils.DOM.addEventListener(this.uiElements.postAnonymouslySection, 'click', function () {
            _this.postAnonymously = !_this.postAnonymously;
            _this.updatePostAnonymously();
        });
    };
    //#endregion
    //#region Updating the UI
    NewCommentBox.prototype.updateUI = function () {
        if (!this.uiElements)
            return;
        // TODO: this is ugly and need refactoring
        // If the "self review" has changed, we must re-render the ui.
        var review = this.plugin.getSelfReview();
        if (!this.data.isReply() && !this.plugin.settings.allowMultipleReviewsPerUser) {
            if (review != this.selfReview) {
                this.render();
                return;
            }
            else if (review) {
                this.updateSelfReview();
            }
        }
        _super.prototype.updateUI.call(this);
        this.updateShareOptions();
        this.updatePostAnonymously();
    };
    NewCommentBox.prototype.updateSelfReview = function () {
        // TODO: this whole code is bad. Self-review should be separated to a different class, not related to ComposeBox in any way
        var elSummaryContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-selfreview-summary-container')[0];
        var elSummary = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-selfreview-summary')[0];
        if (elSummary) {
            if (this.selfReview && this.selfReview.data.commentTitle) {
                elSummary.innerHTML = this.selfReview.data.commentTitle;
                if (elSummaryContainer)
                    elSummaryContainer.style.display = '';
            }
            else {
                elSummary.innerHTML = '';
                if (elSummaryContainer)
                    elSummaryContainer.style.display = 'none';
            }
        }
        var elReviewBody = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-selfreview-body')[0];
        if (elReviewBody) {
            if (this.selfReview && this.selfReview.data.commentText) {
                elReviewBody.innerHTML = window.gigya.global.wbr(this.selfReview.data.commentText.replace(/\n/g, '<br />'), 20);
            }
            else {
                elReviewBody.innerHTML = '';
                var elReviewBodyContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-selfreview-body-container')[0];
                if (elReviewBodyContainer)
                    elReviewBodyContainer.style.display = 'none';
            }
        }
        var maxDimWidth = 0;
        var elRatings = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-selfreview-ratings')[0];
        if (elRatings) {
            elRatings.id = 'gig_' + new Date().getTime();
            elRatings.innerHTML = '';
            if (elRatings && this.selfReview.data.ratings) {
                for (var dimension in this.selfReview.data.ratings) {
                    var elDimension = this.getSelfRatingDimensionElement(this.selfReview, dimension);
                    if (!elDimension)
                        continue;
                    if (dimension != '_overall' || !elRatings.firstChild) {
                        elRatings.appendChild(elDimension);
                    }
                    else {
                        elRatings.insertBefore(elDimension, elRatings.firstChild);
                    }
                    var elDimTitle = window.gigya.utils.DOM.getElementsByClass(elDimension, 'gig-comment-rating-title')[0];
                    maxDimWidth = Math.max(maxDimWidth, elDimTitle.offsetWidth);
                }
                // Updating the CSS for the max category width
                window.gigya._.plugins.utils.css.addCss('#' + elRatings.id + ' *.gig-comment-rating-title { width:' + maxDimWidth + 'px; }', '');
            }
        }
    };
    NewCommentBox.prototype.updateShareOptions = function () {
        if (!this.uiElements.shareSection)
            return;
        if ((this.plugin.user.isConnected || !this.plugin.user.isGuest) && this.share.providers.length > 0 && this.plugin.shareEnabled) {
            this.uiElements.shareSection.style.display = '';
            this.share.updateIcons();
        }
        else {
            this.uiElements.shareSection.style.display = 'none';
        }
    };
    NewCommentBox.prototype.updatePostAnonymously = function () {
        if (!this.uiElements.postAnonymouslySection || !this.uiElements.postAnonymouslyCheckbox)
            return;
        if (!this.plugin.user.isConnected || this.plugin.user.isGuest) {
            this.uiElements.postAnonymouslySection.style.display = 'none';
        }
        else {
            this.uiElements.postAnonymouslySection.style.display = '';
            if (this.postAnonymously) {
                window.gigya.utils.DOM.addClassToElement(this.uiElements.postAnonymouslyCheckbox, 'gig-comments-checkbox-checked');
            }
            else {
                window.gigya.utils.DOM.removeClassFromElement(this.uiElements.postAnonymouslyCheckbox, 'gig-comments-checkbox-checked');
            }
        }
    };
    NewCommentBox.prototype.updateLoginLogoutElements = function () {
        _super.prototype.updateLoginLogoutElements.call(this);
        var elOr = this.getElement('or');
        if (this.uiElements.loginBar) {
            if (this.isLoginDropdownEnabled()) {
                if (this.plugin.user.isConnected || this.plugin.user.isGuest) {
                    this.uiElements.loginBar.style.display = 'none';
                }
                else {
                    if (this.plugin.settings.useSiteLogin && this.uiElements.siteLoginButton) {
                        this.uiElements.siteLoginButton.style.display = '';
                        if (this.uiElements.socialLoginButton)
                            this.uiElements.socialLoginButton.style.display = 'none';
                    }
                    else {
                        if (this.uiElements.siteLoginButton)
                            this.uiElements.siteLoginButton.style.display = 'none';
                        if (this.uiElements.socialLoginButton)
                            this.uiElements.socialLoginButton.style.display = '';
                    }
                    this.uiElements.loginBar.style.display = '';
                }
            }
            else {
                this.uiElements.loginBar.style.display = 'none';
            }
        }
        if (this.uiElements.guestLoginButton) {
            if (this.plugin.settings.allowGuest && this.isLoginDropdownEnabled()) {
                this.uiElements.guestLoginButton.style.display = '';
                if (elOr)
                    elOr.style.display = '';
            }
            else {
                this.uiElements.guestLoginButton.style.display = 'none';
                if (elOr)
                    elOr.style.display = 'none';
            }
        }
    };
    //#endregion
    //#region Overrides
    NewCommentBox.prototype.afterRender = function () {
        this.hideElement(this.uiElements.cancelButton);
    };
    NewCommentBox.prototype.getSubmitText = function () {
        return this.getText('post');
    };
    NewCommentBox.prototype.getTitle = function () {
        var title;
        var parentComment = this.plugin.getComment(this.data.parentID);
        if (parentComment != null) {
            var titleId = this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS ? 'comment_on_username_review' : 'reply_to_username';
            title = this.getText(titleId, '%username', '<span class="gig-composebox-username">' + window.gigya.utils.sanitize.sanitizeHTML(parentComment.getUsername()) + '</span>');
        }
        else {
            if (this.plugin.user.isConnected || this.plugin.user.isGuest) {
                title = this.getText('hello_username', '%username', this.plugin.getUsername());
            }
            else {
                title = '';
            }
        }
        return title;
    };
    NewCommentBox.prototype.submit = function (dontPublish) {
        var _this = this;
        var postButton = this.uiElements.submitButton;
        var tbCommentTitle = this.uiElements.summaryInput;
        if (!this.plugin.user.isGuest && !this.plugin.user.isConnected) {
            //logged out
            var onLogin = function () {
                _this.submit();
            };
            if (this.plugin.settings.useSiteLogin) {
                this.onSiteLoginClick(onLogin);
            }
            else {
                this.onLoginClick(postButton, this.plugin.settings.allowGuest, onLogin);
            }
            return;
        }
        var timestamp = new Date().getTime();
        var pendingCommentId = 'pending_' + timestamp;
        if (this.data.isReply())
            this.close();
        // TODO: eventually this should be very small, as the model will be updated while changing the UI
        this.data = window.gigya.utils.object.merge([
            this.data,
            {
                ID: pendingCommentId,
                timestamp: timestamp,
                threadTimestamp: timestamp,
                sender: {
                    photoURL: window.gigya.global.getPhotoURL(this.plugin.user.thumbnailURL || this.plugin.user.photoURL),
                    loginProvider: this.getLoginProvider(),
                    name: this.plugin.getUsername(),
                    UID: this.plugin.user ? this.plugin.user.UID : null,
                },
                tags: this.plugin.params['commentTags'],
            },
        ]);
        if (this.postAnonymously) {
            this.data.highlightGroups = [];
            this.data.sender = { name: this.plugin.getText('anonymous') };
        }
        var commentParams = window.gigya.utils.object.removeUndefined({
            commentText: this.plugin.settings.enableCommentBody != 'disabled' ? this.data.commentText : null,
            parentID: this.data.parentID ? this.data.parentID : null,
            commentTitle: this.plugin.settings.enableCommentTitles != 'disabled' && !this.data.isReply() ? this.data.commentTitle : null,
            taggedUsers: this.data.taggedUsers.length > 0 ? this.data.taggedUsers.join(',') : null,
            mediaItems: this.data.mediaItems.length > 0 ? this.data.mediaItems[0].url : null,
            ratings: this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS ? this.data.ratings : null,
            enabledProviders: dontPublish || !this.share || this.share.getSelected().length == 0 ? ' ' : this.share.getSelected().join(','),
            tags: this.plugin.params['commentTags'],
            anonymous: this.postAnonymously ? true : null,
            guestName: this.plugin.user.isGuest ? this.plugin.user.nickname : null,
            guestEmail: this.plugin.user.isGuest ? this.plugin.user.email : null,
            callback: function (res) { return _this.submitCallback(res); },
        });
        // TODO: check if this is actualy necessary
        // it is possible that the client would remove the share bar from the template
        if (this.share) {
            // merge userActions defaults to the specific userActions
            for (var shareProviderIndex = 0; shareProviderIndex < this.share.getSelected().length; shareProviderIndex++) {
                var shareProvider = this.share.getSelected()[shareProviderIndex];
                var actionName = shareProvider + 'UserAction';
                this.plugin.params[actionName] = this.getUserAction(this.data, this.plugin.params[actionName]);
            }
        }
        // Fire the beforeCommentSubmitted event
        var e = commentParams;
        if (!e.guestName)
            e.guestName = '';
        if (!e.guestEmail)
            e.guestEmail = '';
        e.eventName = 'beforeCommentSubmitted';
        if (window.gigya.events.dispatchForWidget(e, this.plugin.params) == false)
            return;
        commentParams = e; // to get changed params
        if (e.guestName == '')
            delete e.guestName;
        if (e.guestEmail == '')
            delete e.guestEmail;
        var parentComment = this.plugin.getComment(this.data.parentID);
        var level = parentComment ? parentComment.level + 1 : 0;
        var infoMessage = null;
        if (this.data.status == 'pending')
            infoMessage =
                this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS && level == 0
                    ? this.getText('your_review_is_awaiting_moderation')
                    : this.getText('your_comment_is_awaiting_moderation');
        this.plugin.addComments([this.data], level, false, true, null, infoMessage);
        window.gigya.comments.postComment(this.plugin.params, commentParams);
        if (this.share)
            this.share.saveSelected();
        this.plugin.setStreamInfoIfNeeded();
        this.clear();
    };
    NewCommentBox.prototype.submitCallback = function (response) {
        _super.prototype.submitCallback.call(this, response);
        if (response['errorCode'] != 0)
            return;
        var comment = this.plugin.getComment(response['comment']['ID']);
        if (comment.data.status === 'published') {
            this.plugin.streamInfo.commentCount++;
            if (!this.data.isReply()) {
                this.plugin.streamInfo.ratingCount++;
            }
            this.plugin.updateCount();
        }
        var oEvent = window.gigya.utils.object.removeUndefined({
            eventName: 'commentSubmitted',
            streamID: this.plugin.params['streamID'],
            categoryID: this.plugin.params['categoryID'],
            commentText: comment.data.commentText,
            comment: window.gigya.utils.object.clone(comment.data, true, true),
            mode: this.plugin.textMode == Comments_Models_1.TextMode.REVIEWS ? 'reviews' : 'comments',
            ratings: comment.data.ratings,
            commentTitle: comment.data.commentTitle,
            providerPostIDs: comment.data.providerPostIDs,
            user: this.plugin.user.UID ? this.plugin.user : null,
            guestUser: this.plugin.user.isGuest ? { nickname: this.plugin.user.nickname, email: this.plugin.user.email } : null,
        });
        this.plugin.userCommentsData.push(comment.data);
        this.plugin.setUserComments(this.plugin.userCommentsData);
        window.gigya.events.dispatchForWidget(oEvent, this.plugin.params);
    };
    return NewCommentBox;
}(BaseComposeBox_1.BaseComposeBox));
exports.NewCommentBox = NewCommentBox;


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/Templates.ts":
/*!***************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/Templates.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTemplates = {
    commentsPlugin: [
        '<div class="gig-comments-composebox"></div>',
        '<div class="gig-comments-header"></div>',
        '<div class="gig-comments-updates"></div>',
        '<div class="gig-comments-comments"></div>',
        '<div class="gig-comments-more"></div>',
    ].join(''),
    commentsPluginComposeBottom: [
        '<div class="gig-comments-header"></div>',
        '<div class="gig-comments-updates"></div>',
        '<div class="gig-comments-comments"></div>',
        '<div class="gig-comments-more"></div>',
        '<div class="gig-comments-composebox"></div>',
    ].join(''),
    header: [
        '<div class="gig-comments-header-left">',
        '<div class="gig-comments-count"></div>',
        '</div>',
        '<ul class="gig-comments-header-right gig-comments-linksContainer" role="presentation">',
        '<li class="gig-comments-sort">$sort</li>',
        '<li class="gig-comments-subscribe">$subscribe</li>',
        '<li class="gig-comments-rss">$rss</li>',
        '</ul>',
    ].join(''),
    updates: ['<div class="gig-comments-updates-text"></div>', '<div class="gig-comments-updates-link"></div>'].join(''),
    comment: [
        '<div class="gig-comment-title"></div>',
        '<div class="gig-comment-photo"></div>',
        '<div class="gig-comment-data">',
        '<div class="gig-comment-editbox"></div>',
        '<div class="gig-comment-self-data">',
        '<div class="gig-comment-content">',
        '<div class="gig-comment-header">',
        '<div class="gig-comment-header-right">',
        '<div class="gig-comment-viaProvider"></div>',
        '<span class="gig-comment-edited">($edited)</span>',
        '<span class="gig-comment-time"></span>',
        '</div>',
        '<div class="gig-comment-header-left">',
        '<span class="gig-comment-username"></span>',
        '</div>',
        '</div>',
        '<div class="gig-comment-status"></div>',
        '<div class="gig-comment-body"></div>',
        '<div class="gig-comment-mediaItem"></div>',
        '</div>',
        '<div class="gig-comment-footer">',
        '<div class="gig-comment-footer-left">',
        '<ul class="gig-comments-linksContainer" role="presentation">',
        '<li class="gig-comment-likeLink" aria-atomic="true" aria-live="polite" aria-relevant="text">$like</li>',
        '<li class="gig-comment-replyLink">$reply</li>',
        '<li class="gig-comment-editLink">$edit</li>',
        '<li class="gig-comment-deleteLink">$delete</li>',
        '<li class="gig-comment-shareLink">$share</li>',
        '<li class="gig-comment-repliesArrow">',
        '<div class="gig-comment-repliesArrow-text"></div>',
        '<div class="gig-comment-repliesArrow-img"></div>',
        '</li>',
        '</ul>',
        '<div class="gig-comment-flag"></div>',
        '</div>',
        '<div class="gig-comment-footer-right">',
        '<div class="gig-comment-vote-total"></div>',
        '<div class="gig-comment-vote-pos" title="$like" aria-label="$like"></div>',
        '<div class="gig-comment-vote-neg" title="$unlike" aria-label="$unlike"></div>',
        '</div>',
        '</div>',
        '</div>',
        '<div class="gig-comment-replybox"></div>',
        '<div class="gig-comment-replies"></div>',
        '</div>',
    ].join(''),
    mediaItem: [
        '<div class="gig-media-display">',
        '<div class="gig-media-thumbnail"></div>',
        '<div class="gig-media-overlay">',
        '<div class="gig-media-cancel"></div>',
        '<div class="gig-media-play"></div>',
        '</div>',
        '</div>',
        '<div class="gig-media-caption">',
        '<a href="$url" target="_blank" class="gig-media-caption-url" style="background-image:url($providerIcon);">$displayUrl</a>',
        '<div class="gig-media-caption-text">$caption</div>',
        '</div>',
    ].join(''),
    dialog: [
        '<div class="gig-comments-dialog">',
        '<div class="gig-comments-dialog-caption-container">',
        '<div class="gig-comments-dialog-caption"></div>',
        '<div class="gig-comments-dialog-close"></div>',
        '</div>',
        '<div class="gig-comments-dialog-body"></div>',
        '<div class="gig-comments-dialog-buttons">',
        '<div class="gig-comments-dialog-button gig-comments-dialog-button-ok"></div>',
        '<div class="gig-comments-dialog-button gig-comments-dialog-button-cancel"></div>',
        '</div>',
        '</div>',
    ].join(''),
    emailTextboxDialogBody: [
        '<div class="gig-comments-dialog-text">$text</div>',
        '<div class="gig-comments-dialog-textbox-container">',
        '<input type="textbox" class="gig-comments-dialog-textbox" value="$email" aria-label="$emailLabel" />',
        '</div>',
        '<div class="gig-comments-dialog-button gig-comments-dialog-textbox-button">$buttonText</div>',
        '<div class="gig-comments-dialog-error" aria-role="alert" aria-atomic="true" aria-live="polite"></div>',
    ].join(''),
    photo: ['<img class="gig-comment-img" alt="" src="$photoURL" style="vertical-align:top" aria-hidden="true" />$providerImage'].join(''),
    providerImage: '<div class="gig-comment-providerLogo" aria-hidden="true"><img alt="" src="$providerImageUrl" style="vertical-align:top" /></div>',
    composebox: [
        '<div class="gig-composebox-error" role="alert" aria-atomic="true" aria-live="polite"></div>',
        '<div class="gig-composebox-header">',
        '<div class="gig-composebox-login">',
        '<div class="gig-composebox-social-login gig-comments-button">$login<div class="gig-composebox-login-icon"></div><div class="gig-composebox-login-drop-icon"></div></div>',
        '<div class="gig-composebox-site-login">$login</div>',
        '<div class="gig-composebox-or">$or</div>',
        '<div class="gig-composebox-guest-login gig-comments-button">$guest</div>',
        '</div>',
        '<div class="gig-composebox-header-right">',
        '<div class="gig-composebox-follow" aria-atomic="true" aria-live="polite"></div>',
        '<div class="gig-composebox-close"></div>',
        '</div>',
        '<div class="gig-composebox-header-left">',
        '<div class="gig-composebox-title"></div>',
        '<div class="gig-composebox-logout">(<span>$logout</span>)</div>',
        '<div class="gig-composebox-ratings"></div>',
        '</div>',
        '</div>',
        '<div class="gig-composebox-photo"></div>',
        '<div class="gig-composebox-data">',
        '<div class="gig-composebox-summary"><input class="gig-composebox-summary-input" data-placeholder="$summary" aria-label="$summary" /></div>',
        '<div class="gig-composebox-editor"></div>',
        '<div class="gig-composebox-mediaItem"></div>',
        '<div class="gig-composebox-footer">',
        '<div class="gig-composebox-footer-right">',
        '<div class="gig-composebox-postAnonymously">',
        '<div class="gig-composebox-anon-checkbox gig-comments-checkbox"></div>',
        '<div class="gig-composebox-anon-text">$postAnonymously</div>',
        '</div>',
        '<div class="gig-composebox-cancel gig-comments-button">$cancel</div>',
        '<div class="gig-composebox-post gig-comments-button">$post</div>',
        '</div>',
        '<div class="gig-composebox-footer-left">',
        '<div class="gig-composebox-share">',
        '<div class="gig-composebox-share-text">$share</div>',
        '<div class="gig-composebox-share-providers"></div>',
        '</div>',
        '</div>',
        '</div>',
        '</div>',
    ].join(''),
    editor: [
        '<ul class="gig-composebox-sidebar">',
        '<li class="gig-composebox-sidebar-button gig-composebox-sidebar-font" title="$fontAlt" aria-label="$fontAlt"></li>',
        '<li class="gig-composebox-sidebar-button gig-composebox-sidebar-media" title="$mediaAlt" aria-label="$mediaAlt"></li>',
        '<li class="gig-composebox-sidebar-button gig-composebox-sidebar-tag" title="$tagAlt" aria-label="$tagAlt"></li>',
        '</ul>',
        '<div class="gig-composebox-textarea" contenteditable="true" role="textarea" aria-multiline="true" data-placeholder="$write_a_comment" aria-label="$write_a_comment" aria-required="true"></div>',
        '<p></p>',
    ].join(''),
    mediaItemPlayer: [
        '<div class="gig-comments-mediaplayer-top">',
        '<div class="gig-media-cancel"></div>',
        '</div>',
        '<div class="gig-comments-mediaplayer-content" style="height:${playerHeight}px;">$playerHTML</div>',
        '<div class="gig-comments-mediaplayer-bottom">',
        '<div class="gig-comments-mediaplayer-caption" style="background-image:url($providerIcon);">$caption</div>',
        '</div>',
    ].join(''),
    guestbox: [
        '<div class="gig-guestbox-fields">',
        '<input type="text" class="gig-guestbox-nickname" data-placeholder="$nickname" aria-label="$nickname" />',
        '<input type="text" class="gig-guestbox-email" data-placeholder="$email" aria-label="$email" />',
        '</div>',
        '<div class="gig-guestbox-text">${email_not_displayed_publicly}</div>',
        '<div class="gig-guestbox-ok">$ok</div>',
        '<div class="gig-guestbox-error"></div>',
    ].join(''),
    sortbox: [
        '<ul>',
        '<li data-sort="dateDesc">$most_recent</li>',
        '<li data-sort="dateAsc">$oldest</li>',
        '<li data-sort="votesDesc">$most_voted</li>',
        '<li data-sort="ratingDesc">$ratings</li>',
        '</ul>',
    ].join(''),
    fontbox: [
        '<ul>',
        '<li class="gig-composebox-font-bold" data-command="bold"></li>',
        '<li class="gig-composebox-font-italic" data-command="italic"></li>',
        '<li class="gig-composebox-font-underline" data-command="underline"></li>',
        '<li class="gig-composebox-font-bullets" data-command="bullets"></li>',
        '</ul>',
    ].join(''),
    mediabox: [
        '<div class="gig-mediabox-fields">',
        '<input type="text" class="gig-mediabox-url" placeholder="${enter_url}" aria-label="${enter_url}" value="$url" />',
        '<div class="gig-mediabox-ok">$ok</div>',
        '<div class="gig-mediabox-text">${add_media_item}</div>',
        '</div>',
    ].join(''),
    composeShareMoreBox: [
        '<div class="gig-composebox-morebox-caption">',
        '<div class="gig-composebox-morebox-title">$more_share_destinations</div>',
        '<div class="gig-composebox-morebox-close"></div>',
        '</div>',
        '<ul class="gig-composebox-morebox-providers">',
        '</ul>',
    ].join(''),
    userTaggingBox: [
        '<div class="gig-comments-usertaggingbox gig-comments-container">',
        '<div class="gig-usertagging-title">$title</div>',
        '<ul class="gig-usertagging-suggestions">',
        '</ul > ',
        '</div> ',
    ].join(''),
    userTaggingOption: [
        '<img src="$photoURL" alt="" class="gig-usertagging-userimage" aria-hidden="true" /><span class="gig-usertagging-username">$name</span>',
    ].join(''),
    rating: '<div class="gig-comment-rating-title"></div><div class="gig-comment-rating-value"></div>',
    composeboxRating: '<div class="gig-composebox-rating-title"></div><div class="gig-composebox-rating-value"></div>',
    commentTitle: ['<div class="gig-comment-rating"></div>', '<div class="gig-comment-rating-drop"></div>', '<div class="gig-comment-summary"></div>'].join(''),
    myReview: [
        '<div class="gig-selfreview-header">',
        '<div class="gig-selfreview-header-left">',
        '<div class="gig-composebox-photo"></div>',
        '<div class="gig-selfreview-nameAndLogout">',
        '<div class="gig-selfreview-yourReview">$your_review</div>',
        '<div class="gig-composebox-name"></div>',
        '<div class="gig-composebox-logout" aria-label="$logout">(<span>$logout</span>)</div>',
        '</div>',
        '<div class="gig-selfreview-ratings"></div>',
        '</div>',
        '<div class="gig-selfreview-header-right">',
        '<div class="gig-composebox-follow"></div>',
        '</div>',
        '</div>',
        '<div class="gig-selfreview-summary-container">',
        '<span class="gig-selfreview-field-title">$summary</span><span class="gig-selfreview-summary"></span>',
        '</div>',
        '<div class="gig-selfreview-body-container">',
        '<span class="gig-selfreview-field-title">$review</span><span class="gig-selfreview-body"></span>',
        '</div>',
    ],
};


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/UserTaggingBox.ts":
/*!********************************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/UserTaggingBox.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var CommentsUtils_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils.ts");
var UserTaggingBox = /** @class */ (function () {
    function UserTaggingBox(composeBox, onResult, text) {
        var _this = this;
        this.composeBox = composeBox;
        this.onResult = onResult;
        var prefix = null;
        this.selectedIndex = 0;
        if (text)
            prefix = this.getUserPrefix(text);
        this.fetchRelatedUsers(prefix);
        this.keydownDelegate = function (e) {
            _this.processKeyDown(e);
        };
        window.gigya.utils.DOM.addEventListener(composeBox.uiElements.textArea, 'keydown', this.keydownDelegate);
    }
    UserTaggingBox.prototype.fetchRelatedUsers = function (usernamePrefix) {
        var _this = this;
        var parentComment = this.composeBox.plugin.getComment(this.composeBox.data.parentID);
        window.gigya.comments.getRelatedUsers({
            usernamePrefix: usernamePrefix,
            categoryID: this.composeBox.plugin.params['categoryID'],
            streamID: this.composeBox.plugin.params['streamID'],
            parentCommentID: parentComment ? parentComment.id : null,
            limit: 10,
            cacheTimeout: 30 * 1000,
            callback: function (res) {
                if (res.relatedUsers) {
                    _this.relatedUsers = res.relatedUsers;
                    if (!_this.container)
                        _this.draw();
                    else {
                        _this.updateUsers();
                    }
                }
                else {
                    _this.cancel();
                }
            },
        });
    };
    UserTaggingBox.prototype.draw = function () {
        var _this = this;
        var elEditor = this.composeBox.uiElements.editor;
        var el = document.createElement('div');
        el.innerHTML = window.gigya.utils.templates.fill(this.composeBox.plugin.templates['userTaggingBox'], {
            title: this.composeBox.plugin.getText('tag_a_commenter'),
        });
        this.container = window.gigya.pluginUtils.DOM.addPopoverNearElement(elEditor, el, 'bottom', 0, !this.composeBox.plugin.isRtl, false, null, function (e, wasOpen) {
            _this.cancel();
            if (e && wasOpen)
                CommentsUtils_1.Events.cancelEvent(e);
        }, [this.composeBox.uiElements.textArea]);
        this.changeSelectedByIndex(0);
        this.updateUsers();
        var elSuggestions = this.getElement('suggestions');
        window.gigya.utils.DOM.addEventListener(elSuggestions, 'mouseover', function (e) {
            var el = (e.target || e.srcElement);
            while (el) {
                if (window.gigya.utils.DOM.isElementClass(el, 'gig-usertagging-user'))
                    break;
                el = el.parentElement;
            }
            var index = _this.getChildNodeIndex(elSuggestions, el);
            _this.changeSelectedByIndex(index);
        });
        window.gigya.utils.DOM.addEventListener(elSuggestions, 'mousedown', function (e) {
            window.gigya.utils.DOM.cancelEvent(e);
            _this.confirmSelection();
        });
    };
    UserTaggingBox.prototype.getChildNodeIndex = function (elContainer, elChild) {
        for (var i = 0; i < elContainer.childNodes.length; i++) {
            if (elContainer.childNodes[i] == elChild)
                return i;
        }
        return -1;
    };
    UserTaggingBox.prototype.updateUsers = function () {
        if (this.relatedUsers.length == 0) {
            this.cancel();
        }
        else {
            var isThereSelected = false;
            var elSuggestions = this.getElement('suggestions');
            // This loop goes over the existing user elements (if this is not the first time), and keeps the ones that appear in the new list
            // (and are in the right order), for a smoother experience (no redraw).
            var keptCounter = 0;
            var existingElements = elSuggestions.childElementCount;
            for (var i = 0; i < existingElements; i++) {
                var currUser = {};
                if (keptCounter < this.relatedUsers.length)
                    currUser = this.relatedUsers[keptCounter];
                var currElement = elSuggestions.childNodes[keptCounter];
                if (currUser.uid && currUser.uid == currElement.getAttribute('data-gig-uid')) {
                    if (currUser.uid == this.selectedUID) {
                        isThereSelected = true;
                        this.selectedIndex = keptCounter;
                    }
                    keptCounter++;
                }
                else {
                    elSuggestions.removeChild(currElement);
                }
            }
            // Add the new user elements
            for (var i = keptCounter; i < this.relatedUsers.length; i++) {
                // Creating the user element
                var user = this.relatedUsers[i];
                var elUser = document.createElement('li');
                window.gigya.utils.DOM.addClassToElement(elUser, 'gig-usertagging-user');
                if (user.uid)
                    elUser.setAttribute('data-gig-uid', user.uid);
                elUser.innerHTML = window.gigya.utils.templates.fill(this.composeBox.plugin.templates['userTaggingOption'], {
                    name: user.name,
                    photoURL: window.gigya.global.getPhotoURL(user.photoURL, CommentsUtils_1.Images.getPhotoFullName('Avatar_empty', this.composeBox.plugin.pixelRatio)),
                });
                // If this is the selected user from last time - re-select it
                if (this.selectedUID && user.uid == this.selectedUID) {
                    window.gigya.utils.DOM.addClassToElement(elUser, 'gig-usertagging-selected');
                    this.selectedIndex = i;
                    isThereSelected = true;
                }
                elSuggestions.appendChild(elUser);
                var arImages = elUser.getElementsByTagName('img');
                if (arImages && arImages.length > 0) {
                    var elImage = arImages[0];
                    elImage.style.visibility = 'hidden';
                    window.gigya.utils.DOM.addEventListener(elImage, 'load', function (e) {
                        var elLoadedImage = e.target || e.srcElement;
                        window.gigya.global.scaleImageToContainer(elLoadedImage, true, function () {
                            elLoadedImage.style.visibility = '';
                        });
                    });
                }
            }
            if (!isThereSelected)
                this.changeSelectedByIndex(0);
        }
    };
    UserTaggingBox.prototype.cancel = function () {
        if (this.container && this.container.parentElement)
            this.container.parentElement.removeChild(this.container);
        if (this.onResult) {
            this.onResult(null, null);
        }
        window.gigya.utils.DOM.removeEventListener(this.composeBox.uiElements.textArea, 'keydown', this.keydownDelegate);
    };
    UserTaggingBox.prototype.getUserPrefix = function (text, start) {
        if (typeof start === 'undefined')
            start = text.lastIndexOf('@');
        if (start != -1) {
            var prefix = '';
            if (text.length > 1) {
                prefix = text.substring(start + 1);
            }
            return prefix;
        }
    };
    UserTaggingBox.prototype.processTextChanged = function (text) {
        var start = text.lastIndexOf('@');
        if (start === 0 || (start > 0 && text.charAt(start - 1) == ' ')) {
            var prefix = this.getUserPrefix(text, start);
            if (typeof prefix !== 'undefined') {
                this.fetchRelatedUsers(prefix);
            }
        }
        else {
            this.cancel();
        }
    };
    UserTaggingBox.prototype.getElement = function (name) {
        return window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-usertagging-' + name)[0];
    };
    UserTaggingBox.prototype.changeSelectedByIndex = function (index) {
        var elSuggestions = this.getElement('suggestions');
        var usersNum = this.relatedUsers.length;
        this.selectedUID = '';
        if (this.selectedIndex >= 0 && this.selectedIndex < usersNum) {
            window.gigya.utils.DOM.removeClassFromElement(elSuggestions.childNodes[this.selectedIndex], 'gig-usertagging-selected');
        }
        if (index >= 0 && index < usersNum) {
            this.selectedUID = this.relatedUsers[index].uid;
            window.gigya.utils.DOM.addClassToElement(elSuggestions.childNodes[index], 'gig-usertagging-selected');
        }
        else if (index < 0)
            index = -1;
        else if (index >= usersNum)
            index = usersNum;
        this.selectedIndex = parseInt(index);
    };
    UserTaggingBox.prototype.confirmSelection = function () {
        if (this.onResult) {
            var user = this.relatedUsers[this.selectedIndex];
            var elUser = CommentsUtils_1.UserTagging.createTaggedUserElement(user.name, user.uid);
            this.onResult(user.uid, elUser);
        }
        if (this.container)
            this.container.parentElement.removeChild(this.container);
        window.gigya.utils.DOM.removeEventListener(this.composeBox.uiElements.textArea, 'keydown', this.keydownDelegate);
    };
    UserTaggingBox.prototype.processKeyDown = function (e) {
        // Confirmation (user selected)
        if (UserTaggingBox.taggingConfirmationKeys.indexOf(e.keyCode) != -1) {
            if (this.relatedUsers && this.selectedIndex < this.relatedUsers.length) {
                window.gigya.utils.DOM.cancelEvent(e);
                this.confirmSelection();
            }
        }
        // Termination (cancel tagging)
        else if (UserTaggingBox.taggingTerminatorKeys.indexOf(e.keyCode) != -1) {
            window.gigya.utils.DOM.cancelEvent(e);
            this.cancel();
        }
        // Up/down keys (selecting user)
        else if (e.keyCode in UserTaggingBox.verticalKeys) {
            var direction = UserTaggingBox.verticalKeys[e.keyCode];
            if (direction == 'up')
                this.changeSelectedByIndex(this.selectedIndex - 1);
            else
                this.changeSelectedByIndex(this.selectedIndex + 1);
            window.gigya.utils.DOM.cancelEvent(e);
        }
    };
    UserTaggingBox.taggingTerminatorKeys = [27 /* Esc */];
    UserTaggingBox.taggingConfirmationKeys = [9 /* Tab */, 13 /* Enter */];
    UserTaggingBox.verticalKeys = { 38: 'up', 40: 'down' };
    UserTaggingBox.horizontalKeys = { 37: 'left', 39: 'right' };
    return UserTaggingBox;
}());
exports.UserTaggingBox = UserTaggingBox;


/***/ }),

/***/ "./src/comments/Gigya.Comments.JsPlugin/app/index.ts":
/*!***********************************************************!*\
  !*** ./src/comments/Gigya.Comments.JsPlugin/app/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var GigyaPluginTypesComments = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/BaseComposeBox */ "./src/comments/Gigya.Comments.JsPlugin/app/BaseComposeBox.ts");
var GigyaPluginTypesComments_1 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/Comment */ "./src/comments/Gigya.Comments.JsPlugin/app/Comment.ts");
var GigyaPluginTypesComments_2 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentData */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentData.ts");
var GigyaPluginTypesComments_3 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/Comments.Models */ "./src/comments/Gigya.Comments.JsPlugin/app/Comments.Models.ts");
var GigyaPluginTypesComments_4 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentsPlugin */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsPlugin.ts");
var GigyaPluginTypesCommentsCommentsUtils = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils */ "./src/comments/Gigya.Comments.JsPlugin/app/CommentsUtils.ts");
var GigyaPluginTypesComments_5 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/ComposeShare */ "./src/comments/Gigya.Comments.JsPlugin/app/ComposeShare.ts");
var GigyaPluginTypesComments_6 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/DefaultCss */ "./src/comments/Gigya.Comments.JsPlugin/app/DefaultCss.ts");
var GigyaPluginTypesComments_7 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/EditCommentBox */ "./src/comments/Gigya.Comments.JsPlugin/app/EditCommentBox.ts");
var GigyaPluginTypesComments_8 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/ImgBase */ "./src/comments/Gigya.Comments.JsPlugin/app/ImgBase.ts");
var GigyaPluginTypesComments_9 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/NewCommentBox */ "./src/comments/Gigya.Comments.JsPlugin/app/NewCommentBox.ts");
var GigyaPluginTypesComments_10 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/Templates */ "./src/comments/Gigya.Comments.JsPlugin/app/Templates.ts");
var GigyaPluginTypesComments_11 = __webpack_require__(/*! src/comments/Gigya.Comments.JsPlugin/app/UserTaggingBox */ "./src/comments/Gigya.Comments.JsPlugin/app/UserTaggingBox.ts");
if (!window.gigya.pluginTypes) {
    window.gigya.pluginTypes = {};
}
if (!window.gigya.pluginTypes.comments) {
    window.gigya.pluginTypes.comments = {};
}
if (!window.gigya.pluginTypes.comments.CommentsUtils) {
    window.gigya.pluginTypes.comments.CommentsUtils = {};
}
__webpack_provided_Object_dot_assign(window.gigya.pluginTypes.comments, GigyaPluginTypesComments, GigyaPluginTypesComments_1, GigyaPluginTypesComments_2, GigyaPluginTypesComments_3, GigyaPluginTypesComments_4, GigyaPluginTypesComments_5, GigyaPluginTypesComments_6, GigyaPluginTypesComments_7, GigyaPluginTypesComments_8, GigyaPluginTypesComments_9, GigyaPluginTypesComments_10, GigyaPluginTypesComments_11);
__webpack_provided_Object_dot_assign(window.gigya.pluginTypes.comments.CommentsUtils, GigyaPluginTypesCommentsCommentsUtils);
window.gigya._.UI.attachPlugin(GigyaPluginTypesComments_4.CommentsPlugin, 'comments', 'comments2', 'showCommentsUI');

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ })

/******/ });