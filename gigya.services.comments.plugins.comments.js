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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.comments.plugins.comments.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.comments.plugins.comments.js":
/*!************************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.comments.plugins.comments.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/// <reference path="gigya.services.socialize.plugins.js" />
(function (pluginNamespace) {

    var appEngineServer = 'http://' + window.gigya.gaeDomain || false;
    if (window.gigya.localInfo.protocol == 'https') {
        appEngineServer = 'https://' + window.gigya.gaeDomain || false;
    }
    if (typeof pluginNamespace.plugins == 'undefined') pluginNamespace.plugins = {};
    var _pi = pluginNamespace.plugins;
    if (typeof _pi.comments != 'undefined') { return; }

    var imgBase = window.gigya._.getCdnResource('/gs/i/comments/'); //gigya.thisScript.base + '/gs/i/comments/';
    var jsonp = {
        requests: {},

        get: function (opt) {
            if (jsonp.requests[opt.id] != null) return;

            jsonp.requests[opt.id] = {};
            jsonp.requests[opt.id].callback = function (ret) {
                delete jsonp.requests[opt.id];
                if (opt.success) opt.success(ret);
            }

            var jsonpCallback = '_jpgc_' + opt.id;

            if (opt.callbackFieldName) {
                opt.data[opt.callbackFieldName] = jsonpCallback;
            } else {
                opt.data["jsonpCallback"] = jsonpCallback;
            }

            window[jsonpCallback] = jsonp.requests[opt.id].callback;

            if (!opt.data.format) opt.data["format"] = 'jsonp';

            var url = this.buildQueryString(opt.url, opt.data);

            if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) { //is IE
                url += '&t=' + new Date().getTime();
            } else {
                url += '#b=' + new Date().getTime();
            }
            //var context = this;

            var This = this;
            this.addScript(url, opt.id);
        },

        buildQueryString: function (url, data) {

            var queryString = [];
            for (var name in data) {
                var t = typeof data[name];
                if (t == 'string' || t == 'number' || t == 'boolean') {
                    queryString.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
                }
            }


            var endsWith = url.substring(url.length - 1, 1);
            if (url.indexOf('?') == -1) {
                url += '?';
            }
            else if (endsWith != '&' && endsWith != '?') {
                url += '&';
            }
            url += queryString.join('&');

            return url;

        },

        addScript: function (src, rid, callback) {

            var loader = function (src, handler) {
                var script = document.createElement('script');
                script.src = src;
                script.charset = 'UTF-8'

                //only ie.
                script.onreadystatechange = function (args) {
                    if (script.readyState == 'loaded' || script.readyState == 'complete') {
                        script.onreadystatechange = null;
                        handler();
                    }
                }


                //all the rest.
                script.onload = script.onerror = function () {
                    script.onload = null;
                    handler();
                }

                var head = document.getElementsByTagName('head')[0];
                (head || document.body).appendChild(script);
            };

            loader(src, function () {
                if (typeof (callback) == 'function')
                    callback(rid);
            });

        }
    }



    //comments plugin class.
    var commentsPlugin = function (c, p, i) {
        this._c = c;
        this._p = p;
        this._i = i;
        this.container = document.getElementById(this._p['containerID']);
        this.containerID = p.containerID
        this.loadTemplates(this._p.templates);
        this.loadState();
    }

    /* private */
    var pluginScope = {
        instances: {},
        instances_size: 0,

        extend: function (a, b) {
            if (b instanceof Array) {
                for (var i in b) {
                    $extend(a, b[i]);
                }
                return a;
            }
            else
                return $extend(a, b);

            function $extend(x, y) {
                for (var name in y) {
                    if (typeof (name) == 'function') continue;
                    if (y[name] != undefined && typeof y[name] == 'object')
                        x[name] = $extend(x[name] || {}, y[name]);
                    else
                        x[name] = y[name]
                }
                return x;
            }
        },
        getText: function (textKey, replaceStr, withStr) {
            return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.comments.plugins.comments.js', textKey, pluginScope.lang, replaceStr, withStr);
        },
        drawComments: function (comments, plugin, level) {
            //if(comments==null) comments=this.children;
            if (comments == null) return "";
            if (!level) level = 0;
            var html = [];
            for (var i = 0; i < comments.length; i++) {
                var comment = comments[i];
                html.push(comment.getHTML())
            }
            return html.join("");
        },
        isSharePossible: function () {
            // If we're not in http context - for example iOS plugin view
            if (document.location.href.indexOf('http') != 0)
                return false;

            // Specific check for android plugin view - should be removed after Android SDK fix
            if (window['__gigAPIAdapterSettings'] && document.location.href == 'http://www.gigya.com/')
                return false;

            return true;
        },
        countChildren: function (o, id) {

            var arr = o[id];
            if (!arr) return 0;
            var count = arr.childrenCount;
            if (!count) {
                count = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (!arr[i].isRemovedComment())
                        count++;
                    count += this.countChildren(o, arr[i].id);
                }
            }
            o[id].childrenCount = count;
            return count;

        },
        buildCommentsTree: function (items, sortDirection, pluginInstance, dontChangeCount) {
            var children = {};
            var ret = [];

            var arr = [];
            var arCommentsHash = {};

            for (var i = 0; i < items.length; i++) {
                if (arCommentsHash[items[i].ID]) continue;
                arCommentsHash[items[i].ID] = true;
                var item = new comment(items[i], pluginInstance);
                arr.push(item);
                if (item.parentID != null) {
                    (children[item.parentID] = children[item.parentID] || []).push(item);
                } else {
                    item.parentID = 0;
                }
            }

            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];

                var arChildren = children[item.id];
                if (arChildren && arChildren.length > 0) {
                    item.children = arChildren;
                    item.childrenCount = this.countChildren(children, item.id);
                }
                if (item.parentID == 0) {
                    item.index = ret.length;
                    ret.push(item);
                }
                if (item.level == null) {
                    var tempItem = item;
                    var level = -1;
                    while (tempItem != null) {
                        if (tempItem.level) {
                            level += tempItem.level + 1;
                            break;
                        }
                        tempItem = pluginInstance.commentsInstances[tempItem.parentID];
                        level++;
                    }
                    item.level = level;
                    item.data.level = level; // add level to the raw comment
                }
            }

            return ret;
        },
        changeCSS: function (theClass, element, value) {
            try {
                var cssRules;
                var added = false;
                for (var S = 0; S < document.styleSheets.length; S++) {
                    if (document.styleSheets[S]['rules']) {
                        cssRules = 'rules';
                    } else if (document.styleSheets[S]['cssRules']) {
                        cssRules = 'cssRules';
                    } else { }

                    for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) {
                        if (document.styleSheets[S][cssRules][R].selectorText == theClass) {
                            if (document.styleSheets[S][cssRules][R].style[element]) {
                                document.styleSheets[S][cssRules][R].style[element] = value;
                                added = true;
                                break;
                            }
                        }
                    }
                    if (!added) {
                        if (document.styleSheets[S].insertRule) {
                            document.styleSheets[S].insertRule(theClass + ' { ' + element + ': ' + value + '; }', document.styleSheets[S][cssRules].length);
                        } else if (document.styleSheets[S].addRule) {
                            document.styleSheets[S].addRule(theClass, element + ': ' + value + ';');
                        }
                    }
                }
            } catch (ex) { };
        },

        defaults: {
            css: [
                    '.gig-comments-container *, div.gig-comments-container, .gig-comments-container span, .gig-comments-container a:hover, .gig-comments-container a:visited, .gig-comments-container a:link, .gig-comments-container a:active{',
                        'padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;',
                        'font-family:arial;font-size:12px;color:#4D4D4D;position:static;text-align:left;vertical-align:baseline; }',
                    'div.gig-comments-comment-body ul {padding-left:20px;}',
                    'div.gig-comments-comment-body li {list-style-type:disc}',
                    '.gig-comments-container td, .gig-comments-container tr {vertical-align:middle;}',
                    '.gig-comments-container b{font-weight:bold;} .gig-comments-container u{text-decoration:underline} .gig-comments-container i{font-style:italic}',
                    'a.gig-comments-button,a:hover.gig-comments-button,a:link.gig-comments-button,a:active.gig-comments-button,a:visited.gig-comments-button {',
                        'line-height: 15px;position:relative;border-radius: 3px; color:#4d4d4d;cursor:pointer;',
                        'font-size: 11px;padding: 0 5px; border: 1px solid #C5C7C7;display:inline-block;zoom:1;vertical-align:middle; text-align:center;',
                        'box-shadow:0 0 2px RGBA(0,0,0,0.15);-webkit-box-shadow:0 0 2px RGBA(0,0,0,0.15);-moz-box-shadow:0 0 2px RGBA(0,0,0,0.15);}',
                    'a.gig-comments-button,a:link.gig-comments-button,a:active.gig-comments-button,a:visited.gig-comments-button {',
                        'background: #FFFFFF; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#EAEBEB");',
                        'background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#EAEBEB));',
                        'background: -moz-linear-gradient(top,  #FFFFFF,  #EAEBEB)}',

                    'a.gig-comments-button-disabled,a:hover.gig-comments-button-disabled,a:link.gig-comments-button-disabled,a:active.gig-comments-button-disabled,a:visited.gig-comments-button-disabled {',
                        'color:#b4b4b4;cursor:default;',
                        'background: #EBEBEB; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#EBEBEB", endColorstr="#FFFFFF");',
                        'background: -webkit-gradient(linear, left top, left bottom, from(#EBEBEB), to(#FFFFFF));',
                        'background: -moz-linear-gradient(top,  #EBEBEB,  #FFFFFF)}',
                    '.gig-comments-postButton-container {overflow:hidden}',
                    '.gig-comments-container a {zoom:1}',
                    'div.gig-comments-comment{background-color:#fff;padding-top:10px;padding-right:10px;text-align:left;zoom:1;}',
                    'div.gig-comments-comment-child{margin-top:5px;background-color:#F3F3F3;padding:10px;text-align:left;zoom:1;}',
                    'div.gig-comments-comment-outstanding {background-color:#EAF9F9; margin-top: 5px; padding-bottom: 10px; padding-left:10px;}',
                    'div.gig-comments-comment-facebook{background-color:#EEEFF4}',
                    'div.gig-comments-comment-body{color:#4d4d4d;padding-top:5px;padding-bottom:5px;}',
                    '.gig-comments-container a.gig-comments-comment-mediaItem {display:block;text-decoration:underline;color:#0796c6; }',
                    'div.gig-comments-comment-body-pending{color:#919191;}',

                    'div.gig-comments-outstanding-badge {background-image:url(\'' + imgBase + 'outstanding_badge.png\');background-repeat:no-repeat;background-position: left top; float:right;width:35px;height:30px;}',

                    'div.gig-comments-photoImageSmall{text-align:right;width:32px;height:32px;}',
                    'div.gig-comments-photoImageLarge{text-align:right;width:48px;height:48px;}',
                    'div.gig-comments-providerLogo{margin-top:-14px;text-align:right;}',
                    'div.gig-comments-photo-container {margin-right:8px;float:left;width:48px;}',
                    'div.gig-comments-comment-photo-container {margin-right:10px;width:32px;}',

                    'span.gig-comments-username{float:left;font-weight:bold;color:#2181CA}',
                    'span.gig-comments-comment-username {float:none}',
                    'span.gig-comments-comment-time{padding-left: 5px; white-space:nowrap;text-align:left;font-size:11px;color:#919191;padding-top:1px;}',
                    'span.gig-comments-comment-newIndicator {padding-left: 10px; color: #FF8900; font-weight: bold; font-size: 11px;}',
                    'span.gig-comments-comment-viaFacebook{white-space:nowrap;text-align:right; color:#808281;float:right}',
                    'span.gig-comments-comment-viaFacebook-text{color:#919191;font-size:11px;padding-left:5px}',
                    'textarea.gig-comments-textarea{overflow:auto;word-wrap:break-word;zoom:1;hasLayout:true;height:78px;padding:0px;resize: none;border:none;background-image:url(\'' + imgBase + '1x1.png\');}',
                    'div.gig-comments-textarea-wrapper{border-radius:3px;margin: 0 0 5px; zoom:1;hasLayout:true;background-color:white;border: 1px solid #C0C0C0;height:88px;box-shadow:inset 0 0 4px #DCDCDC; -moz-box-shadow:inset 0 0 4px #DCDCDC; -webkit-box-shadow:inset 0 0 4px #DCDCDC;}',

                    'div.gig-comments-headerText{color:#4d4d4d;padding: 3px 0 7px;overflow:hidden;}',
                    'span.gig-comments-logoutLink {cursor:pointer;font-size:11px;color:#2181CA}',

                    'div.gig-comments-checkboxImage{float:left;background-repeat:no-repeat;background-position:center;margin-right:5px;width: 11px; height: 16px;background-image:url(\'' + imgBase + 'checkbox.gif\')}',
                    'div.gig-comments-checkboxProviderImage{background-repeat:no-repeat;width: 16px;height:16px;float:left;}',
                    'div.gig-comments-checkbox {float:left;cursor:pointer;margin-left:5px;margin-right:5px;overflow:hidden;width:34px;}',
                    'div.gig-comments-checkboxImage-checked{background-image:url(\'' + imgBase + 'checkbox_Checked.gif\')}',

                    'div.gig-comments-loginUI, div.gig-comments-guestUI{z-index:99994;position:absolute;background-color:#FFFFFF;border: 1px solid #C5C7C7}',
                    'div.gig-comments-loginUI {height:110px;border-radius: 0 0 3px 3px;}',
                    'div.gig-comments-loginUI-pleaseLogin {margin-left:5px;margin:5px;font-size:11px;color: #4D4D4D}',
                    'div.gig-comments-guestUI {border-radius: 0 3px 3px 3px}',

                    'div.gig-comments-guestDropdown{overflow:hidden;width:150px;font-family:arial;font-size:10px;color:#919191;margin-top:16px;margin-left:13px;margin-right:13px;margin-bottom:8px;z-index:99995}',
                    'input.gig-comments-textbox{border-radius:3px;width: 145px; height:24px; line-height:22px;font-size:12px;color:#919191;border:1px solid #C0C0C0;padding-left:2px;}',
                    'input.gig-comments-textbox-nickname, input.gig-comments-textbox-email {width:100%;}',
                    'input.gig-comments-textbox-nickname {margin-bottom:10px;}',

                    'input.gig-comments-textbox-title {width:100%;height: 27px;line-height:25px; color: #4D4D4D;padding-left:5px;margin-bottom:10px;}',
                    'div.gig-comments-error-text{color:#e70707;font-weight:bold}',
                    'div.gig-comments-shareTo{white-space:nowrap;line-height:16px;zoom:1;}',
                    'div.gig-comments-replyBox{margin-top:5px;background-color:#F3F3F3;padding:10px;padding-top:12px;}',
                    'div.gig-comments-loginCanvas-container {zoom:1;overflow:hidden;margin-bottom:10px;}',
                    'div.gig-comments-close-icon{float:right;cursor:pointer;background-repeat:no-repeat;width: 15px; height: 15px;background-image:url(\'' + imgBase + 'close_icon.png\')}',
                    'div.gig-comments-awaiting-moderation{font-weight:bold;font-size:11px;color:#4D4D4D;font-style:italic}',
                    'div.gig-comments-commentList-header{overflow:hidden;font-size:16px;color:#4d4d4d;font-weight:bold;line-height:20px;zoom:1;}',
                    'div.gig-comments-commentList-header-commentsCount{padding-top:30px;float:left;}',
                    'div.gig-comments-headerLinks{padding-top:30px;float:right;zoom:1;}',
                    'a.gig-comments-headerLinks-rss,a:hover.gig-comments-headerLinks-rss,a:link.gig-comments-headerLinks-rss,a:active.gig-comments-headerLinks-rss,a:visited.gig-comments-headerLinks-rss, ',
                        'a.gig-comments-headerLinks-subscribe, a:hover.gig-comments-headerLinks-subscribe,a:link.gig-comments-headerLinks-subscribe,a:active.gig-comments-headerLinks-subscribe,a:visited.gig-comments-headerLinks-subscribe {',
                            'font-weight:normal;color:#2181CA;text-decoration:underline;font-size:11px;cursor:pointer;}',
                    'span.gig-comments-vertical-seperator {color:#d8d9d9;margin:0 5px;}',
                    'div.gig-comments-dottedLine{background-image:url(\'' + imgBase + 'SepLine.gif\');height: 1px;background-repeat: repeat-x;margin-top:5px}',
                    'div.gig-comments-expand-arrow{vertical-align:bottom;display:inline-block; *display:inline; zoom:1; background-repeat:no-repeat; background-position:center center; width: 10px; height:13px; background-image:url(\'' + imgBase + 'icon_ExpandReply.png\')}',
                    'div.gig-comments-collapse-arrow{vertical-align:bottom;display:inline-block; *display:inline; zoom:1; background-repeat:no-repeat; background-position:center center; width: 10px; height:13px; background-image:url(\'' + imgBase + 'icon_CollapsReply.png\')}',
                    'div.gig-comments-replies-length-container{zoom:1;padding-left:10px;display:inline-block;*display:inline;cursor:pointer; white-space:nowrap;}',
                    'a.gig-comments-link,a:hover.gig-comments-link,a:link.gig-comments-link,a:active.gig-comments-link,a:visited.gig-comments-link {font-family:arial; font-size:11px; color: #2181CA;text-decoration:underline}',
                    'span.gig-comments-replies-length {display:inline;font-family:arial; font-size:11px; color: #2181CA;text-decoration:underline}',
                    'div.gig-comments-guestError{color:#e70707;font-size:10px;width:150px;float:left}',
                    'div.gig-comments-email-not-displayed-publicly{font-size:10px;padding-top:5px;padding-bottom:5px;}',
                    'div.gig-comments-providers{float:left;}',
                    'div.gig-comments-providers-container{overflow:hidden;zoom:1;float:left;}',
                    'div.gig-comments-providerIcons{margin: 0 5px 0 11px;font-size:1px;background-position:center;height:22px;float:left;background-image:url(\'' + imgBase + 'ButtonLogin_Icons.png\');background-repeat:no-repeat;width:57px;}',
                    'div.gig-comments-showMoreComments-container{width:100%}',
                    'div.gig-comments-showMoreComments{height:35px;cursor:pointer;text-align:center;margin-top:10px;color:#4D4D4D; border:1px solid #E5E5E5;background-color:#f9f9f9}',
                    'div.gig-comments-showMoreComments-over{height:35px;text-align:center;color:#f3f3f3;border:1px solid #CFCFCF;background-color:#F3F3F3}',
                    'div.gig-comments-showMoreComments-text{padding-top:10px;font-weight:bold;text-align:center;}',
                    'div.gig-comments-showMoreComments-progress, div.gig-comments-progress {margin:5px auto auto;width:24px;height:24px;background-repeat:no-repeat;background-image:url(\'' + imgBase + 'progress_ani.gif\')}',
                    'div.gig-comments-comment-flag{cursor:pointer;visibility:hidden;text-align:right;float:right;width: 14px; height:14px;background-image:url(\'' + imgBase + 'flag_icon.png\')}',
                    'div.gig-comments-comment-flag-over{visibility:visible}',
                    'div.gig-comments-comment-flag-submitted{text-align:right;float:right;width: 14px; height:14px;background-image:url(\'' + imgBase + 'flag_icon.png\')}',
                    'div.gig-comments-comment-remove{cursor:pointer;visibility:hidden;text-align:right;float:right;width: 7px; height:7px;background-image:url(\'' + imgBase + 'remove_icon.gif\');background-repeat:no-repeat;background-position:center;}',
                    'div.gig-comments-comment-remove-over{visibility:visible}',
                    'div.gig-comments-dialog-caption{background-color: #f3f3f3; padding: 5px 5px 5px 12px;overflow:auto;zoom:1;font-size: 14px;font-weight:bold;color: #4d4d4d;}',
                    'div.gig-comments-dialog-body{padding:24px 12px 12px 12px;}',
                    'div.gig-comments-dialog-buttons{margin-top:12px;}',

            //'div.gig-comments-dialog {padding:24px 12px 12px 12px;}',

                    'a.gig-comments-button-cancel,a:hover.gig-comments-button-cancel,a:link.gig-comments-button-cancel,a:active.gig-comments-button-cancel,a:visited.gig-comments-button-cancel, ',
                        'a.gig-comments-button-flagThisComment,a:hover.gig-comments-button-flagThisComment,a:link.gig-comments-button-flagThisComment,a:active.gig-comments-button-flagThisComment,a:visited.gig-comments-button-flagThisComment ',
                        'a.gig-comments-button-remove,a:hover.gig-comments-button-remove,a:link.gig-comments-button-remove,a:active.gig-comments-button-remove,a:visited.gig-comments-button-remove ',
                        '{line-height:24px;font-size:12;padding:0 10px;}',

                    'a.gig-comments-button-subscribe,a:hover.gig-comments-button-subscribe,a:link.gig-comments-button-subscribe,a:active.gig-comments-button-subscribe,a:visited.gig-comments-button-subscribe {',
                        'line-height:22px;font-size:12;margin-left:7px;font-weight:bold;',
                    '}',
                    'div.gig-comments-dialog-subscribe-emailTextbox-container {float:left;}',
                    'div.gig-comments-dialog-subscribe-enterYourEmail {margin-bottom:10px;}',
                    'input.gig-comments-dialog-subscribe-emailTextbox {width: 260px;color: #4D4D4D}',
                    'a.gig-comments-button-cancel,a:hover.gig-comments-button-cancel,a:link.gig-comments-button-cancel,a:active.gig-comments-button-cancel,a:visited.gig-comments-button-cancel ',
                        '{margin-right: 10px;}',
                    'div.gig-comments-dialog-body-remove {font-weight:bold}',
                    'a.gig-comments-button-flagThisComment,a:hover.gig-comments-button-flagThisComment,a:link.gig-comments-button-flagThisComment,a:active.gig-comments-button-flagThisComment,a:visited.gig-comments-button-flagThisComment ',
                    'a.gig-comments-button-remove,a:hover.gig-comments-button-remove,a:link.gig-comments-button-remove,a:active.gig-comments-button-remove,a:visited.gig-comments-button-remove ',
                        '{font-weight:bold}',

                    'div.gig-comments-star {background-repeat:no-repeat;margin-right:3px; width: 13px; height:13px;float:left;background-image:url(\'' + imgBase + 'RateIcon_13.png\')}',
                    'div.gig-comments-star-half {background-image:url(\'' + imgBase + 'RateIcon_13_half.png\')}',
                    'div.gig-comments-star-full {background-image:url(\'' + imgBase + 'RateIcon_13_pressed.png\')}',

                    'div.gig-comments-star-editable, div.gig-comments-star-editable-empty, div.gig-comments-addComment-ratings-error div.gig-comments-star-editable-empty, div.gig-comments-star-myRating {background-repeat:no-repeat;padding-right:4px; width: 21px; height:21px;float:left;background-image:url(\'' + imgBase + 'RateIcon_21.png\')}',
                    'div.gig-comments-star-editable, div.gig-comments-star-editable-empty, div.gig-comments-addComment-ratings-error div.gig-comments-star-editable-empty {cursor:pointer;}',
                    'div.gig-comments-star-editable-half, div.gig-comments-star-myRating-half {background-image:url(\'' + imgBase + 'RateIcon_21_half.png\')}',
                    'div.gig-comments-star-editable-full, div.gig-comments-star-myRating-full, div.gig-comments-addComment-ratings-error div.gig-comments-star-editable-full {background-image:url(\'' + imgBase + 'RateIcon_21_pressed.png\')}',
                    'div.gig-comments-addComment-ratings-error .gig-comments-star-editable {background-image:url(\'' + imgBase + 'RateIcon_21_error.png\');}',
                    'div.gig-comments-addComment-ratings-stars-container {float:left;margin-bottom:15px;}',
                    'div.gig-comments-addComment-ratings-ratingName {float:left;margin-right:15px;margin-top:4px;}',
                    'div.gig-comments-addComment-ratings-details {float:left;margin-left: 3px; color:#919191;margin-top:4px;}',
                    'div.gig-comments-addComment-ratings {overflow:hidden;zoom:1}',
                    'div.gig-comments-addComment-label {margin-bottom:3px;}',
                    'div.gig-comments-commentBox {margin-top:15px;overflow:hidden;zoom:1;}',
                    'div.gig-comments-commentBox-bottom {margin-top:35px;padding-top:5px;border-top:1px solid #CFCFCF}',
                    'div.gig-comments-rating {zoom:1;overflow:hidden;float:left;padding-bottom:12px;}',
                    'div.gig-comments-title {font-weight:bold; font-size: 14px;float:left;padding-bottom:12px;}',

                    'span.gig-comments-mandatoryMark {color:#e70707;font-weight:bold;}',


                    'div.gig-validation-error {display:none;color: #ce585a;text-align:center;line-height:22px;background:#fee9ea;margin-top:7px;}',
                    'a.gig-comments-button-post,a:hover.gig-comments-button-post,a:link.gig-comments-button-post,a:active.gig-comments-button-post,a:visited.gig-comments-button-post,',
                    'a.gig-comments-button-ok,a:hover.gig-comments-button-ok,a:link.gig-comments-button-ok,a:active.gig-comments-button-ok,a:visited.gig-comments-button-ok {',
                        'line-height:20px;font-weight:bold;font-size:12px;padding:0 10px;float:right;white-space:nowrap}',

                    'a.gig-comments-dropdown,a:hover.gig-comments-dropdown,a:link.gig-comments-dropdown,a:active.gig-comments-dropdown,a:visited.gig-comments-dropdown {',
                        'font-weight:bold;line-height: 22px;position:relative;border-radius: 3px; color:#4d4d4d;cursor:pointer;',
                        'font-size: 13px;padding-left: 10px; border: 1px solid #C5C7C7;display:inline-block;zoom:1; vertical-align:middle; text-align:center;',
                        'box-shadow:0 0 2px RGBA(0,0,0,0.15);-webkit-box-shadow:0 0 2px RGBA(0,0,0,0.15);-moz-box-shadow:0 0 2px RGBA(0,0,0,0.15);}',
                    'a.gig-comments-dropdown,a:link.gig-comments-dropdown,a:active.gig-comments-dropdown,a:visited.gig-comments-dropdown {',
                        'background: #FFFFFF; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#EAEBEB");',
                        'background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#EAEBEB));',
                        'background: -moz-linear-gradient(top,  #FFFFFF,  #EAEBEB)}',
                    'a:hover.gig-comments-dropdown, a.gig-comments-dropdown-down, a:hover.gig-comments-dropdown-down,a:link.gig-comments-dropdown-down,a:active.gig-comments-dropdown-down,a:visited.gig-comments-dropdown-down {',
                        'background: #EAEBEB; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#EAEBEB", endColorstr="#FFFFFF");',
                        'background: -webkit-gradient(linear, left top, left bottom, from(#EAEBEB), to(#FFFFFF));',
                        'background: -moz-linear-gradient(top,  #EAEBEB,  #FFFFFF)}',

                    'div.gig-comments-dropdown-button {',
                        'border-radius: 0 3px 3px 0; margin-left:13px;float:lef;width: 21px; height: 22px; display:inline-block;zoom:1;',
                        'background: #EAEBEB; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#DADADA");',
                        'background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#DADADA));',
                        'background: -moz-linear-gradient(top,  #FFFFFF,  #DADADA)}',

                    'a.gig-comments-dropdown-login div.gig-comments-dropdown-button {margin-left:3px}',
                    'div.gig-comments-dropdown-login-text {min-width:34px}',
                    'a.gig-comments-dropdown-login-native,a:hover.gig-comments-dropdown-login-native,a:link.gig-comments-dropdown-login-native,a:active.gig-comments-dropdown-login-native,a:visited.gig-comments-dropdown-login-native {padding:0 10px;}',
                    'a:hover.gig-comments-dropdown div.gig-comments-dropdown-button, a.gig-comments-dropdown-down div.gig-comments-dropdown-button {',
                        'background: #EAEBEB; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#DADADA", endColorstr="#FFFFFF");',
                        'background: -webkit-gradient(linear, left top, left bottom, from(#DADADA), to(#FFFFFF));',
                        'background: -moz-linear-gradient(top,  #DADADA,  #FFFFFF)}',

                    'div.gig-comments-login-container {zoom:1;overflow:hidden;line-height:24px;}',
            //'span.gig-comments-or {float:left;}',
                    'div.gig-comments-loginCanvas {zoom:1;overflow:hidden}',
                    'span.gig-comments-logoutLink-container {float:left;}',
                    'span.gig-comments-login {font-weight:bold;font-size:13px;}',
                    'div.gig-comments-addCommentFooter {zoom:1;overflow:hidden}',
                    'td.gig-comments-commentData {width:99%}',
                    'div.gig-comments-commentData-header {overflow:hidden;zoom:1;}',
                    'div.gig-comments-ratingAndTitle {overflow:hidden;zoom:1;}',
                    'div.gig-comments-replyButtonAndCount {float:left;overflow:hidden;zoom:1;}',
                    'div.gig-comments-dropdown-button-arrow {background-image:url(\'' + imgBase + 'arrow.gif\');height:22px;width: 21px;background-repeat:no-repeat;background-position:center;}',
                    'div.gig-comments-dialog {border: 6px solid #858585; border-radius: 5px; background-color:#FFFFFF;xheight:140px;}',
                    'div.gig-comments-dialog-closeIcon {background-image:url(\'' + imgBase + 'close_icon.png\');width:15px;height:15px; float:right;cursor:pointer;}',
                    'div.gig-comments-dialog-smallCloseIcon {background-image:url(\'' + imgBase + 'smallcloseicon.png\');width:7px;height:15px; float:right;cursor:pointer;background-position:center;background-repeat:no-repeat;}',
                    'div.gig-comments-usernameAndTime {float:left;}',
                    'div.gig-comments-dropdown-text {float:left}',
                    'div.gig-comments-vote {float:right;text-align:right;font-size:11px;white-space:nowrap;margin-left:7px;vertical-align:middle;}',

                    'div.gig-comments-vote-up {background-image:url(\'' + imgBase + 'thumbsup_hover.png\');width:15px;height:15px;}',
                    'div.gig-comments-vote-down {background-image:url(\'' + imgBase + 'thumbsdown_hover.png\');width:15px;height:15px; }',
                    //'a.gig-comments-button-down div.gig-comments-vote-up {background-image:url(\'' + imgBase + 'thumbsup_hover.png\');}',
                    //'a.gig-comments-button-down div.gig-comments-vote-down {background-image:url(\'' + imgBase + 'thumbsdown_hover.png\'); }',
                    'div.gig-comments-vote-value {font-size:11px;vertical-align:middle;margin-left:4px;display:inline-block;*display:inline;*width:21px;text-align:right;}',
                    'div.gig-comments-vote-value-neg {width:auto;min-width: auto;margin-left:}',
                    'a.gig-comments-button-vote, a:hover.gig-comments-button-vote,a:link.gig-comments-button-vote,a:active.gig-comments-button-vote,a:visited.gig-comments-button-vote {',
                        'margin:0;padding:0;margin-left:4px; box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none}',

                    'div.gig-comments-dialog-subscribe-error {color: #ce585a;font-size:11px;margin-top:5px;}',
                    'div.gig-comments-dialog-body-confirmation {text-align:center;line-height:20px;padding-bottom:22px;}',
                    'div.gig-comments-dialog-subscribe-okIcon {background-image:url(\'' + imgBase + 'ok_icon.png\');width:14px;height:14px;position:relative;top:2px;margin-right:2px;display:inline-block;}',

                    'a.gig-comments-follow, a:hover.gig-comments-follow,a:link.gig-comments-follow,a:active.gig-comments-follow,a:visited.gig-comments-follow ',
                        '{cursor:pointer;margin-left:27px;border-left:1px solid #d8d9d9; color:#4D4D4D;padding-left:20px;',
                        'background-image:url(\'' + imgBase + 'follow.png\');background-repeat:no-repeat;background-position:5px;margin-right:5px;display:inline-block;}',
                    'a.gig-comments-following, a:hover.gig-comments-following,a:link.gig-comments-following,a:active.gig-comments-following,a:visited.gig-comments-following ',
                    ' {background-image:url(\'' + imgBase + 'following.png\')}',
                    'a.gig-comments-unfollow, a:hover.gig-comments-unfollow,a:link.gig-comments-unfollow,a:active.gig-comments-unfollow,a:visited.gig-comments-unfollow ',
                        '{background-image:url(\'' + imgBase + 'unfollow.png\')}',
                    'a.gig-comments-moreProvider, a:hover.gig-comments-moreProvider,a:link.gig-comments-moreProvider,a:active.gig-comments-moreProvider,a:visited.gig-comments-moreProvider ',
                        '{display:inline-block;font-size:12px;width: 100px;cursor:pointer;margin-bottom:5px;line-height:20px;}',
                    'a.gig-comments-more, a:hover.gig-comments-mor,a:link.gig-comments-more,a:active.gig-comments-more,a:visited.gig-comments-more {margin-left:5px;line-height:20px;color:#2181CA;text-decoration:underline;line-height:16px;}',
                    'div.gig-comments-dialog-moreProviders {padding:0;width: 300px;}',
                    'div.gig-comments-dialog-caption-moreProviders {font-size:12px;padding:0 5px;}',
                    'div.gig-comments-dialog-body-moreProviders{padding:5px 5px 0 5px;}',
                    'div.gig-comments-dialog-caption-moreProviders {padding:3px 5px;}',
                    'div.gig-comments-moderator-edit-text {font-weight:bold;margin-bottom:10px;}',

                    'div.gig-comments-myRating {overflow:hidden;}',
                    'div.gig-comments-myRating-label {float:left;margin-top:5px;margin-right:5px;}',
                    'div.gig-comments-mySummary-label {}',
                    'div.gig-comments-mySummary-value, div.gig-comments-myReview-value {font-style: italic;}',
                    'div.gig-comments-mySummary-label, div.gig-comments-myReview-label {margin-bott: 10px;}',
                    'div.gig-comments-mySummary-value {margin-bottom:27px;}',
                    'div.gig-comments-updatesStrip {background-color: #FFFBCA;margin: 10px 0;text-align:center;padding:5px;}',
                    'span.gig-comments-updatesStrip-link {color:#2181CA;text-decorations:underline;cursor:pointer;font-size: inherit;}'
            ],
            nonMobileCSS:
                  [
                    '.gig-comments-container * {border:none;-moz-border-radius:0;border-radius:0;background:none;}',
                    '.gig-comments-container a:focus, .gig-comments-container input:focus, .gig-comments-container textarea:focus {outline: none;}',
                    'input.gig-comments-textbox {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;padding:0 4px;background-color:white;border: 1px solid #C0C0C0;height:24px;box-shadow:inset 0 0 4px #DCDCDC; -moz-box-shadow:inset 0 0 4px #DCDCDC; -webkit-box-shadow:inset 0 0 4px #DCDCDC;}',
                    'a:hover.gig-comments-button, a.gig-comments-button-down,a:link.gig-comments-button-down,a:active.gig-comments-button-down,a:visited.gig-comments-button-down {',
                        'background: #EAEBEB; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#EAEBEB", endColorstr="#FFFFFF");',
                        'background: -webkit-gradient(linear, left top, left bottom, from(#EAEBEB), to(#FFFFFF));',
                        'background: -moz-linear-gradient(top,  #EAEBEB,  #FFFFFF)}',
                    'span.gig-comments-username{white-space:nowrap}',
                    'div.gig-comments-updatesStrip {font-size: 11px}'
                  ],
            mobileCSS: [
                    'div.gig-comments-comment-flag{display:none}',

                    'a.gig-comments-button-down,a:link.gig-comments-button-down,a:active.gig-comments-button-down,a:visited.gig-comments-button-down {',
                        'background: #EAEBEB; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#EAEBEB", endColorstr="#FFFFFF");',
                        'background: -webkit-gradient(linear, left top, left bottom, from(#EAEBEB), to(#FFFFFF));',
                        'background: -moz-linear-gradient(top,  #EAEBEB,  #FFFFFF)}',

                    '.gig-comments-container *, div.gig-comments-container, .gig-comments-container span, .gig-comments-container a:hover, .gig-comments-container a:visited, .gig-comments-container a:link, .gig-comments-container a:active{',
                        'font-size:16px;font-family:sans-serif;}',
                    'span.gig-comments-comment-time {display:none}',
                        'a.gig-comments-button,a:hover.gig-comments-button,a:link.gig-comments-button,a:active.gig-comments-button,a:visited.gig-comments-button {',
                        'line-height: 28px;}',

                    'div.gig-comments-commentList-footer, div.gig-comments-commentList-header, div.gig-commentList, div.gig-comments-commentBox {margin-left:3px; margin-right:3px;}',
            //'div.gig-comments-vote-up, div.gig-comments-vote-down {width:28px;height:28px;background-repeat:no-repeat;}',
                    'div.gig-comments-commentList-header {font-size: 18px;}',
                    'a.gig-comments-button-reply, div.gig-comments-vote-value {font-size: 14px}',
                    'a.gig-comments-button-post, a:hover.gig-comments-button-post,a:link.gig-comments-button-post,a:active.gig-comments-button-post,a:visited.gig-comments-button-post {line-height:33px}',
                    'div.gig-comments-replies-length-container {display:none}',
                    'div.gig-comments-vote-up {background-image:url(\'' + imgBase + 'mobile_vote_up.png\');width:28px;height:28px;}',
                    'div.gig-comments-vote-down {background-image:url(\'' + imgBase + 'mobile_vote_down.png\');width:28px;height:28px; }',
                    'a.gig-comments-button-down div.gig-comments-vote-up {background-image:url(\'' + imgBase + 'mobile_vote_up_pressed.png\');}',
                    'a.gig-comments-button-down div.gig-comments-vote-down {background-image:url(\'' + imgBase + 'mobile_vote_down_pressed.png\'); }',
                    'a.gig-comments-button-vote-down, a:hover.gig-comments-button-vote-down,a:link.gig-comments-button-vote-down,a:active.gig-comments-button-vote-down,a:visited.gig-comments-button-vote-down {',
                        'margin-left:8px;}',
                    'a.gig-comments-rss-icon,a:hover.gig-comments-rss-icon,a:link.gig-comments-rss-icon,a:active.gig-comments-rss-icon,a:visited.gig-comments-rss-icon {display:none}',
                    'div.gig-comments-loginCanvas {margin-bottom:10px;}',
                    'a.gig-comments-dropdown-login div.gig-comments-dropdown-button {float:right;width:33px;height:33px}',
                    'div.gig-comments-dropdown-button-arrow {width: 32px;height:33px;}',
                    'a.gig-comments-dropdown,a:hover.gig-comments-dropdown,a:link.gig-comments-dropdown,a:active.gig-comments-dropdown,a:visited.gig-comments-dropdown {',
                            'line-height:33px;display:block;overflow:auto;',
                        '}',
                    'div.gig-comments-providerIcons {display:none}',
                    'div.gig-comments-loginUI {height:240px}',
                    'div.gig-comments-loginUI-content {margin-top:20px;}',
                    'div.gig-comments-headerText{padding-bottom:2px}',
                    'div.gig-comments-showMoreComments-text {padding-top:8px;}',
                    'div.gig-comments-checkbox {width:auto;}',
                    '.gig-comments-container textarea {width:100%;-moz-box-sizing: content-box;-webkit-box-sizing: content-box;box-sizing: content-box;}',
                    'div.gig-comments-title {font-size:17px;}',
                    'input.gig-comments-textbox {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin-bottom:10px;}',

                    'div.gig-comments-star {background-repeat:no-repeat;margin-right:3px; width: 21px; height:21px;float:left;background-image:url(\'' + imgBase + 'RateIcon_21.png\')}',
                    'div.gig-comments-star-half {background-image:url(\'' + imgBase + 'RateIcon_21_half.png\')}',
                    'div.gig-comments-star-full {background-image:url(\'' + imgBase + 'RateIcon_21_pressed.png\')}',

                    'div.gig-comments-star-editable {background-repeat:no-repeat;margin-right:7px; width: 28px; height:28px;float:left;cursor:pointer;background-image:url(\'' + imgBase + 'RateIcon_28.png\')}',
                    'div.gig-comments-star-editable-half {background-image:url(\'' + imgBase + 'RateIcon_28_half.png\')}',
                    'div.gig-comments-star-editable-full, div.gig-comments-addComment-ratings-error div.gig-comments-star-editable-full {background-image:url(\'' + imgBase + 'RateIcon_28_pressed.png\')}',
                    'div.gig-comments-addComment-ratings-error .gig-comments-star-editable {background-image:url(\'' + imgBase + 'RateIcon_28_error.png\')}',
                    'div.gig-comments-rating {margin-right:3px;}',
                    'div.gig-comments-addComment-ratings-ratingName {margin-right:7px;}',
                    'label.gig-comments-checkboxProvider {margin-left:5px}',
                    'div.gig-comments-updatesStrip {margin: 10px 3px;}',
                    'span.gig-comments-updatesStrip-link {display:block;text-align:center;}'
            ]
        },

        templates: {
            _map: {},
            get: function (key) {
                return this._map[key];
            },
            getMapCopy: function () {
                return window.gigya.utils.object.clone(this._map)
            },
            set: function (key, value) {
                this._map[key] = (value instanceof Array) ? value.join("") : value;
            }
        },

        createInstance: function (c, p, i) {
            var el = document.getElementById(p.containerID);
            if (el == null) return;
            el.innerHTML = '';
            if (!p.streamID) p.streamID = 0;

            var instance = new commentsPlugin(c, p, i);
            instance.id = p.containerID + '_' + pluginScope.instances_size;
            pluginScope.instances[instance.id] = instance;
            pluginScope.instances_size++;
            instance.start();

        },

        setDefaultTemplates: function () {
            pluginScope.templates.set("commentContainer",
            [
                '<div style="overflow:hidden;zoom:1;" id="$commentContainerId">',
                    '<div onmouseover="$onmouseover" onmouseout="$onmouseout">${comment}</div>',
                    '$commentReplyPlaceholder',
                    '<div id="gig-replies-$commentID">$childComments<!-- empty divs=100% height IE --></div>',
                    '$dottedLine',
                '</div>'
            ]);
            pluginScope.templates.set("comment",
            [
                '<div class="gig-comments-$classname" style="margin-left:${marginLeft}px;">',
                    '${ratings}${titlePlaceholder}',
                    '<table cellspacing="0" cellpadding="0" style="width:100%"><tr>',
                        '<td style="vertical-align:top"><div class="gig-comments-photo-container gig-comments-$rootClass-photo-container">$photoDiv</div></td>',
                        '<td class="gig-comments-commentData">',
                            '<div class="gig-comments-commentData-header">',
                                '<div class="gig-comments-usernameAndTime">',
                                    '<span class="gig-comments-username gig-comments-$rootClass-username">$username</span>',
                                    '<span class="gig-comments-$rootClass-newIndicator" style="display:none">$newText</span>',
                                    '<span class="gig-comments-$rootClass-time">$dateString</span>',
                                '</div>',
                                '$remove',
                            '</div>',
                            '$errorPlaceholder',
                            '<div class="gig-comments-comment-body">',
                                '${outstandingBadgePlaceholder}',
                                '${moderatorEditTextPlaceholder}',
                                '${body}',
                                '${mediaItemPlaceholder}',
                                '</div>',
                            '<div class="gig-comments-replyButtonAndCount">$replyButton $repliesCountPlaceholder</div>',
                            '$vote $flag',
                        '</td></tr>',
                    '</table>',
                '</div>'
            ]);
            pluginScope.templates.set("facebookComment",
            [
                '<div class="gig-comments-$classname" style="margin-left:${marginLeft}px;">',
                    '<table cellspacing="0" cellpadding="0" style="width:100%"><tr>',
                        '<td style="vertical-align:top"><div class="gig-comments-photo-container gig-comments-$rootClass-photo-container">$photoDiv</div></td>',
                        '<td class="gig-comments-commentData">',
                            '<div class="gig-comments-commentData-header">',
                                '<div class="gig-comments-usernameAndTime">',
                                    '<span class="gig-comments-username gig-comments-$rootClass-username">$username</span>',
                                    '<span class="gig-comments-$rootClass-time">$dateString</span>',
                                '</div>',
                                '<span class="gig-comments-$rootClass-viaFacebook">',
                                    '<img alt="" src="' + window.gigya._.getCdnResource('/gs/i/comments/FB_logo.gif') + '" /><span class="gig-comments-$rootClass-viaFacebook-text">Via Facebook</span>',
                                '</span>',
                            '</div>',
                            '<div class="gig-comments-comment-body">$body</div>',
                        '</td>',
                    '</tr></table>',
                '</div>'
            ]);
            pluginScope.templates.set("flag",
            [
                '<div id="gig-flag-$commentID" class="gig-comments-comment-flag" onclick="$onFlagClicked; return false;"></div>'
            ]);
            pluginScope.templates.set("remove",
            [
                '<div id="gig-remove-$commentID" class="gig-comments-comment-remove" onclick="$onRemoveClicked; return false;"></div>'
            ]);
            pluginScope.templates.set("vote", function (o) {
                return [
                    '<div class="gig-comments-vote" id="gig-vote-$commentID">',
                        (o.displayPosNegVotes ? '<div id="gig-voteValuePos-$commentID" class="gig-comments-vote-value gig-comments-vote-value-pos"></div>' : '<div id="gig-voteValue-$commentID" class="gig-comments-vote-value"></div>'),
                        '<a id="gig-voteUp-$commentID" href="#" class="gig-comments-button gig-comments-button-vote gig-comments-button-vote-up" onclick="$onVoteUpClick; return false;"><div class="gig-comments-vote-up"></div></a>',
                        (o.allowNegativeVoting ?
                            '<a href="#" id="gig-voteDown-$commentID" class="gig-comments-button gig-comments-button-vote gig-comments-button-vote-down" onclick="$onVoteDownClick; return false;"><div class="gig-comments-vote-down"></div></a>' : '') +
                            (o.displayPosNegVotes ? '<div id="gig-voteValueNeg-$commentID" class="gig-comments-vote-value gig-comments-vote-value-neg"></div>' : ''),
                    '</div>'].join('');
            });
            pluginScope.templates.set("repliesCountPlaceholder",
            [
                '<div id="gig-comments-comment-$commentID-repliesCountPlaceholder" style="display:inline-block;*display:inline;zoom:1;">$expand_collapse</div>'
            ]);
            pluginScope.templates.set("expand_collapse",
            [
                '<div onclick="$onExapndCollapse" class="gig-comments-replies-length-container"><div id="gig-expand-$commentID" class="gig-comments-expand-arrow"></div><span class="gig-comments-replies-length">$replies_count</span></div>'
            ]);
            pluginScope.templates.set("pendingComment",
            [
                '<div class="gig-comments-$classname" style="margin-left:${marginLeft}px;">',
                    '$ratings $titlePlaceholder',
                    '<table cellspacing="0" cellpadding="0" style="width:100%"><tr>',
                        '<td style="vertical-align:top"><div class="gig-comments-photo-container gig-comments-$rootClass-photo-container">$photoDiv</div></td>',
                        '<td class="gig-comments-commentData">',
                            '<div class="gig-comments-commentData-header">',
                                '<div class="gig-comments-usernameAndTime">',
                                    '<span class="gig-comments-username gig-comments-$rootClass-username">$username</span>',
                                    '<span class="gig-comments-$rootClass-time">$dateString</span>',
                                '</div>',
                            '</div>',
                            '<div class="gig-comments-comment-body gig-comments-awaiting-moderation">$awaiting_moderation_text</div>$errorPlaceholder',
                            '$replyButton $repliesCountPlaceholder $flag',
                        '</td></tr>',
                    '</table>',
                '</div>'
            ]);
            pluginScope.templates.set("errorPlaceholder",
            [
                '<div id="$id-error-$commentID" class="gig-comments-error-text"><!-- empty divs=100% height IE --></div>'
            ]);
            pluginScope.templates.set("outstandingBadgePlaceholder",
            [
                '<div class="gig-comments-outstanding-badge"><!-- empty divs=100% height IE --></div>'
            ]);
            pluginScope.templates.set("moderatorEditTextPlaceholder",
            [
                '<div class="gig-comments-moderator-edit-text">$moderatorEditText</div>'
            ]);
            pluginScope.templates.set("validationErrorPlaceholder",
            [
                '<div id="$id-validationError" class="gig-validation-error"><!-- empty divs=100% height IE --></div>'
            ]);
            pluginScope.templates.set("mediaItemPlaceholder",
            [
                '<a href="$mediaItemURL" target="_blank" class="gig-comments-comment-mediaItem">$mediaItemURL</div>'
            ]);
            pluginScope.templates.set("replyPlaceholder",
            [
                '<div id="$id-reply-$commentID"></div>'
            ]);
            pluginScope.templates.set("replyButton",
            [
                '<a href="#" id="$id-replybutton-$commentID" class="gig-comments-button gig-comments-button-reply" onclick="$onReplyClicked;return false;">$reply</a>'
            ]);
            pluginScope.templates.set("photoDiv32", '<div class="gig-comments-photoImageSmall gig-comments-$rootClass-photoImageSmall" style="overflow:hidden;visibility:hidden"><img alt="" onload="gigya.comments.plugins.comments.imgOnLoad(this, 32)" src="$photoURL" style="vertical-align:top" /><br />$providerImage</div>');
            pluginScope.templates.set("photoDiv48", '<div class="gig-comments-photoImageLarge gig-comments-$rootClass-photoImageLarge" style="overflow:hidden;visibility:hidden"><img alt="" onload="gigya.comments.plugins.comments.imgOnLoad(this, 48)" src="$photoURL" style="vertical-align:top" /><br />$providerImage</div>');
            pluginScope.templates.set("providerImage", '<div class="gig-comments-providerLogo gig-comments-$rootClass-providerLogo"><img alt="" src="$providerImageURL" style="vertical-align:top" /></div>');
            pluginScope.templates.set("loginCanvas_loggedIn",
            [
                '<div class="gig-comments-loginCanvas gig-comments-$rootClass-loginCanvas">',
                    '<div class="gig-comments-photo-container gig-comments-$rootClass-photo-container">$photoDiv</div>',
                    '<div class="gig-comments-headerText gig-comments-$rootClass-headerText">$post_a_new_comment</div>',
                    '<span class="gig-comments-username gig-comments-$rootClass-username">$username&#160;</span>$logoutLink',
                    '$followLink',
                '</div>'
            ]);
            pluginScope.templates.set("loginCanvas_loggedIn_guest",
            [
                '<div class="gig-comments-loginCanvas gig-comments-$rootClass-loginCanvas">',
                    '<div class="gig-comments-photo-container gig-comments-$rootClass-photo-container">$photoDiv</div>',
                    '<div class="gig-comments-headerText gig-comments-$rootClass-headerText">$post_a_new_comment</div>',
                    '<div class="gig-comments-login-container"><span class="gig-comments-username gig-comments-$rootClass-username">$username&#160;</span>$logoutLink',
                    '<span class="gig-comments-login gig-comments-or">&#160;&#160;-&#160;${or}&#160;-&#160;&#160;</span>${loginDropdown}</div>',
                '</div>'
            ]);
            pluginScope.templates.set("logoutLink",
            [
                '<span class="gig-comments-logoutLink-container">(<span class="gig-comments-logoutLink gig-comments-$rootClass-logoutLink" onclick="$onLogoutClick">$logout</span>)</span>'
            ]);
            pluginScope.templates.set("loginCanvas_loggedOut_mobile",
            [
                '<div class="gig-comments-loginCanvas gig-comments-$rootClass-loginCanvas">',
                    '<div class="gig-comments-login-container">${loginDropdown}</div>',
                '</div>'
            ]);
            pluginScope.templates.set("loginCanvas_loggedOut",
            [
                '<div class="gig-comments-loginCanvas gig-comments-$rootClass-loginCanvas">',
                    '<div class="gig-comments-photo-container gig-comments-$rootClass-photo-container">$photoDiv</div>',
                    '<div class="gig-comments-headerText gig-comments-$rootClass-headerText">$post_a_new_comment</div>',
                    '<div class="gig-comments-login-container">${loginDropdown}</div>',
                '</div>'
            ]);
            pluginScope.templates.set("loginCanvas_loggedOutWithGuest",
            [
                '<div class="gig-comments-loginCanvas gig-comments-$rootClass-loginCanvas">',
                    '<div class="gig-comments-photo-container gig-comments-$rootClass-photo-container">$photoDiv</div>',
                    '<div class="gig-comments-headerText gig-comments-$rootClass-headerText">$post_a_new_comment</div>',
                    '<div class="gig-comments-login-container">${loginDropdown}<span class="gig-comments-login gig-comments-or">&#160;&#160;-&#160;${or}&#160;-&#160;&#160;</span>${guestDropdown}</div>',
                '</div>'
            ]);

            pluginScope.templates.set("loginDropdown",
            [
                '<a href="#" id="$id-loginDropdown" onclick="${onLoginClick};return false;" class="gig-comments-dropdown gig-comments-dropdown-login">',
                    '<div class="gig-comments-dropdown-text gig-comments-dropdown-login-text">$login</div>',
                    '<div class="gig-comments-providerIcons">&#160;</div>',
                    '<div class="gig-comments-dropdown-button"><div class="gig-comments-dropdown-button-arrow">&#160;</div></div>',
                '</a>'
            ]);
            pluginScope.templates.set("loginDropdownNative",
            [
                '<a href="#" id="$id-loginDropdown" onclick="${onLoginClick};return false;" class="gig-comments-dropdown gig-comments-dropdown-login gig-comments-dropdown-login-native">',
                    '$login',
                '</a>'
            ]);
            pluginScope.templates.set("guestDropdown",
            [
                '<a href="#" id="$id-guestDropdown" onclick="${onGuestClick};return false;" class="gig-comments-dropdown gig-comments-dropdown-guest">',
                    '<div class="gig-comments-dropdown-text gig-comments-dropdown-guest-text">$guest</div>',
                    '<div class="gig-comments-dropdown-button"><div class="gig-comments-dropdown-button-arrow">&#160;</div></div>',
                '</a>'
            ]);
            pluginScope.templates.set("guestBox",
            [
                '<div class="gig-comments-guestDropdown">',
                    '<div>',
                        '$nicknameTextbox',
                        '$emailTextbox',
                    '</div>',
                    '<div class="gig-comments-email-not-displayed-publicly">${email_not_displayed_publicly}</div>',
                    '$okButton',
                    '$guestErrorPlaceholder',
                '</div>'
            ]);
            pluginScope.templates.set("guest-nicknameTextbox",
            [
                '<input id="$id-nickname" onkeyup="if (this.value.length>=30) {this.value=this.value.substring(0,30);}" class="gig-comments-textbox gig-comments-textbox-nickname" type="textbox" value="$nickname" onblur="if (this.value==\'\') {this.watermarkCleared=false; this.value=\'$nickname\'}" onfocus="if(!this.watermarkCleared) {this.watermarkCleared=true; this.value=\'\';}" />'
            ]);
            pluginScope.templates.set("guest-emailTextbox",
            [
                '<input id="$id-email" class="gig-comments-textbox gig-comments-textbox-email" type="textbox" value="$email" onblur="if (this.value==\'\') {this.watermarkCleared=false; this.value=\'$email\'}" onfocus="if(!this.watermarkCleared) {this.watermarkCleared=true; this.value=\'\';}" />'
            ]);
            pluginScope.templates.set("guestErrorPlaceholder",
            [
                '<div class="gig-comments-guestError" id="$id-guestErrorPlaceholder"></div>'
            ]);
            pluginScope.templates.set("okButton",
            [
                '<a href="#" onclick="$onGuestLogin;return false;" id="$id-okButton" class="gig-comments-button gig-comments-button-ok">$ok</a>'
            ]);
            pluginScope.templates.set("addComment",
            [
                '<div class="gig-comments-$rootClass-commentBox">',
                    '$ratings',
                    '$titleLabel',
                    '$titleTextbox',
                    '$commentLabel',
                    '$addCommentTextarea',
                    '<div class="gig-comments-addCommentFooter">',
                        '<table cellpadding="0" cellspacing="0" style="width:100%"><tr>',
                            '<td><div id="$id-shareTo" class="gig-comments-shareTo gig-comments-$rootClass-shareTo">${share_to}</div></td>',
                            '<td style="width:99%;">$providersCheckboxes</td>',
                            '<td><div id="$id-postButton" class="gig-comments-postButton-container">$postButton</div></td>',
                        '</tr></table>',
                    '</div>',
                    '<div>$validationErrorPlaceholder</div>',
                '</div>'
            ]);
            pluginScope.templates.set("addCommentLabel",
            [
                '<div class="gig-comments-addComment-label gig-comments-addComment-$labelID gig-comments-$rootClass-addComment-label gig-comments-$rootClass-addComment-$labelID">$labelText</div>'
            ]);
            pluginScope.templates.set("providersCheckboxes",
            [
                '<div id="${id}-providersCheckboxes" class="gig-comments-providers-container gig-comments-$rootClass-providers-container" style="visibility:hidden">$providersCheckboxesContent</div>'
            ]);
            pluginScope.templates.set("updatesStrip",
            [
                '<div class="gig-comments-updatesStrip">${text} <span class="gig-comments-updatesStrip-link">${linkText}</span></div>'
            ]);
            pluginScope.templates.set("editableRating", function (o) {
                var arHTML = [];
                arHTML.push('<div id="${id}" class="gig-comments-addComment-ratings">');
                arHTML.push('<div class="gig-comments-addComment-label gig-comments-addComment-ratings-ratingName">${name}</div><div class="gig-comments-addComment-ratings-stars-container">');
                for (var i = 0; i < 5; i++) {
                    arHTML.push('<div id="${id}_' + i + '" gig-baseid="$id" gig-ratingID="$ratingID" gig-rating-details="' + o.details[i] + '" gig-rating="' + (i + 1) + '" class="gig-comments-star-editable" $actionAttribute="$onClick" onmouseover="$onMouseOver" onmouseout="$onMouseOut"></div>');
                }
                arHTML.push('</div>');
                arHTML.push('<div class="gig-comments-addComment-ratings-details" id="${id}_details"></div>');
                arHTML.push('</div>');
                return arHTML.join('');
            });
            pluginScope.templates.set("rating", function (o) {
                var arHTML = [];
                arHTML.push('<div class="gig-comments-rating" title="' + o.value + '">');
                for (var i = 1; i <= 5; i++) {
                    if (i <= o.value) {
                        arHTML.push('<div class="${starClassName} ${starClassName}-full"></div>');
                    } else if (i - o.value <= 0.5 && i - o.value > 0) {
                        arHTML.push('<div class="${starClassName} ${starClassName}-half"></div>');
                    } else {
                        arHTML.push('<div class="${starClassName} ${starClassName}-empty"></div>');
                    }
                }
                arHTML.push('</div>');
                return arHTML.join('');
            });
            pluginScope.templates.set("titlePlaceholder", [
                '<div class="gig-comments-title">$title</div>'
            ]);
            pluginScope.templates.set("titleTextbox",
            [
                '<input id="$id-titleTextbox" class="gig-comments-textbox gig-comments-textbox-title" type="textbox" />'
            ]);
            pluginScope.templates.set("commentBox",
            [
                '<div class="gig-comments-$rootClass">',
                    '$closeIcon',
                    '$loginCanvas',
                    '$addComment',
                '</div>'
            ]);
            pluginScope.templates.set("loginCanvas",
            [
                '<div id="${id}-loginCanvas" class="gig-comments-loginCanvas-container">$loginCanvasContent</div>'
            ]);

            pluginScope.templates.set("closeIcon",
            [
                '<div onclick="$onCloseClicked" class="gig-comments-close-icon"></div>'
            ]);
            pluginScope.templates.set("providersCheckboxesContent",
            [
                '<div class="gig-comments-providers gig-comments-$rootClass-providers">$drawProviders()&#160;</div>'
            ]);
            pluginScope.templates.set("providerCheckbox",
            [
                '<div id="$id" class="gig-comments-checkbox gig-comments-$rootClass-checkbox" onclick="$onCheckboxClicked;return false;" style="$style">',
                    '<div id="$id-image" class="gig-comments-checkboxImage gig-comments-$rootClass-checkboxImage"><!-- empty divs=100% height IE --></div>',
                    '<div class="gig-comments-checkboxProviderImage gig-comments-$rootClass-checkboxProviderImage" style="background-image:url(\'$iconURL\');"></div>',
                '</div>'
            ]);
            pluginScope.templates.set("providerCheckbox-mobile",
            [
                '<div id="$id" class="gig-comments-checkbox gig-comments-$rootClass-checkbox">',
                    '<input type="checkbox" id="$id-cb" class="gig-comments-checkboxProvider gig-comments-$rootClass-checkboxProvider" value="${post_to_provider}" onchange="$onCheckboxClicked;return false;" />',
                    '<label for="$id-cb" class="gig-comments-checkboxProvider gig-comments-$rootClass-checkboxProvider">${post_to_provider}</label>',
                '</div>'
            ]);
            pluginScope.templates.set("addCommentTextarea",
            [
                '<div class="gig-comments-textarea-wrapper gig-comments-$rootClass-textarea-wrapper"><div style="padding:5px"><textarea onmousedown="if (typeof event!=\'undefined\' && event.stopPropagationn) event.stopPropagation()" ontouchstart="if (typeof event!=\'undefined\' && event.stopPropagation) event.stopPropagation()" onkeyup="var c=gigya.pluginUtils.text.normalizeLinebreaks(this.value); if (c.length>=$maxLength) {this.value=c.substring(0,$maxLength);}" class="gig-comments-textarea gig-comments-$rootClass-textarea" id="$id-commentTextarea" ></textarea></div></div>'
            ]);
            pluginScope.templates.set("button",
            [
                '<a href="#" class="gig-comments-button gig-comments-$id" onclick="$onClick;return false;">$text</a>'
            ]);
            pluginScope.templates.set("postButton",
            [
                '<a href="#" class="gig-comments-button gig-comments-button-post gig-comments-$rootClass-button-post" onclick="$onPostButtonClicked;return false;">$post</a>'
            ]);
            pluginScope.templates.set("comments-header",
            [
                '<div class="gig-comments-commentList-header">$comments_count</span> $rss</div>',
                '<div class="gig-comments-updatesStripPlaceholder"></div>'
            ]);
            pluginScope.templates.set("commentsCountWrapper",
            [
                '<div class="gig-comments-commentList-header gig-comments-commentList-header-commentsCount">$count</div>'
            ]);
            pluginScope.templates.set("rss",
            [
                '<div class="gig-comments-headerLinks">',
                    '<a class="gig-comments-headerLinks-rss" rel="nofollow" href="$rssURL" type="application/rss+xml" title="RSS" onclick="return $onRssClick" oncontextmenu="$onRssRightClick">$rss_text</a>',
                    '<span class="gig-comments-vertical-seperator gig-comments-vertical-seperator-rss">|</span>',
                    '<a class="gig-comments-headerLinks-subscribe" href="#" title="$subscribe_text" onclick="$onSubscribeClick; return false;" id="$id-subscribeLink">$subscribe_text</a>',
                '</div>'
            ]);
            pluginScope.templates.set("followLink",
            [
                '<a class="gig-comments-follow" onclick="$onFollowClicked" id="$id-followLink"></a>'
            ]);
            pluginScope.templates.set("dottedLine",
            [
                '<div class="gig-comments-dottedLine"><!-- empty divs=100% height IE --></div>'
            ]);
            pluginScope.templates.set("comments-footer",
            [
                '<div class="gig-comments-commentList-footer">$showMoreComments</div>'
            ]);
            pluginScope.templates.set("showMoreComments",
            [
                '<div class="gig-comments-showMoreComments-container"><div onmouseover="this.className=\'gig-comments-showMoreComments gig-comments-showMoreComments-over\'" onmouseout="this.className=\'gig-comments-showMoreComments\'" class="gig-comments-showMoreComments" onclick="$onMoreCommentsClick"><div class="gig-comments-showMoreComments-text">${show_more_comments}</div></div></div>'
            ]);
            pluginScope.templates.set("showMoreComments-progress",
            [
                '<div class="gig-comments-showMoreComments"><span><div class="gig-comments-showMoreComments-progress">&#160;</div></span></div>'
            ]);
            pluginScope.templates.set("flagDialog",
            [
                '<div class="gig-comments-dialog gig-comments-dialog-flag">',
                    '<div class="gig-comments-dialog-caption gig-comments-dialog-caption-flag">',
                        '$report_comment_to_site_owner',
                        '<div class="gig-comments-dialog-closeIcon" onclick="$onClose"></div>',
                    '</div>',
                    '<div class="gig-comments-dialog-body gig-comments-dialog-body-flag">',
                        '$are_you_sure_you_want_to_mark_this_comment_as_inappropriate',
                        '<div class="gig-comments-dialog-buttons gig-comments-dialog-buttons-flag">',
                            '<a class="gig-comments-button gig-comments-button-cancel" onclick="${onCancel}; return false;" href="#">$cancel</a>',
                            '<a class="gig-comments-button gig-comments-button-flagThisComment" onclick="${onFlag}; return false;" href="#">$yes_flag_this_comment</a>',
                        '</div>',
                    '</div>',
                '</div>'
            ]);
            pluginScope.templates.set("removeDialog",
            [
                '<div class="gig-comments-dialog gig-comments-dialog-remove">',
                    '<div class="gig-comments-dialog-caption gig-comments-dialog-caption-remove">',
                        '$delete_comment',
                        '<div class="gig-comments-dialog-closeIcon" onclick="$onCancel"></div>',
                    '</div>',
                    '<div class="gig-comments-dialog-body gig-comments-dialog-body-remove">',
                        '$are_you_sure',
                        '<div class="gig-comments-dialog-buttons gig-comments-dialog-buttons-remove">',
                            '<a class="gig-comments-button gig-comments-button-cancel" onclick="${onCancel}; return false;" href="#">$no</a>',
                            '<a class="gig-comments-button gig-comments-button-remove" onclick="${onRemove}; return false;" href="#">$yes</a>',
                        '</div>',
                    '</div>',
                '</div>'
            ]);
            pluginScope.templates.set("subscribeDialog",
            [
                '<div class="gig-comments-dialog gig-comments-dialog-subscribe">',
                    '<div class="gig-comments-dialog-caption gig-comments-dialog-caption-subscribe">',
                        '$notifications_settings',
                        '<div class="gig-comments-dialog-closeIcon" onclick="$onCancel"></div>',
                    '</div>',
                    '<div class="gig-comments-dialog-body gig-comments-dialog-body-subscribe">',
                        '<div class="gig-comments-dialog-subscribe-enterYourEmail">${enter_your_email}</div>',
                        '<div class="gig-comments-dialog-subscribe-emailTextbox-container">',
                            '<input id="$textboxID" onkeyup="${onKeyUp}" type="textbox" class="gig-comments-textbox gig-comments-dialog-subscribe-emailTextbox" value="$defaultEmail" />',
                        '</div>',
                        '<a href="#" class="gig-comments-button gig-comments-button-subscribe" onclick="${onSubscribe};return false;" id="$buttonID">$subscribe_text</a>',
                        '<div class="gig-comments-dialog-subscribe-error" id="${errorPlaceholderID}" style="visibility:hidden">${please_provide_a_valid_email_address}</div>',
                    '</div>',
                '</div>'
            ]);
            pluginScope.templates.set("confirmationDialog",
            [
                '<div class="gig-comments-dialog gig-comments-dialog-confirmation">',
                    '<div class="gig-comments-dialog-caption gig-comments-dialog-caption-confirmation">',
                        '$title',
                        '<div class="gig-comments-dialog-closeIcon" onclick="$onCancel"></div>',
                    '</div>',
                    '<div class="gig-comments-dialog-body gig-comments-dialog-body-confirmation">',
                        '$text',
                    '</div>',
                '</div>'
            ]);
            pluginScope.templates.set("moreProvidersDialog",
            [
                '<div class="gig-comments-dialog gig-comments-dialog-moreProviders">',
                    '<div class="gig-comments-dialog-caption gig-comments-dialog-caption-moreProviders">',
                        '$more_share_destinations',
                        '<div class="gig-comments-dialog-smallCloseIcon" onclick="$onCancel"></div>',
                    '</div>',
                    '<div class="gig-comments-dialog-body gig-comments-dialog-body-moreProviders">',
                        '$moreProvidersHTML',
                    '</div>',
                '</div>'
            ]);
            pluginScope.templates.set("moreProvider",
            [
                '<a class="gig-comments-moreProvider" onclick="${onClick};return false;" style="background-image:url(\'${iconURL}\');background-position:left center;background-repeat:no-repeat;padding:0 ${iconWidth}">',
                    '$providerName',
                '</a>'
            ]);
            pluginScope.templates.set("moreLink",
            [
                '<a href="#" onclick="${onClick};return false;" class="gig-comments-more">$more</a>'
            ]);
            pluginScope.templates.set("myRating",
            [
                '$loginCanvas',
                '<div class="gig-comments-myRating">',
                    '<div class="gig-comments-myRating-label">${myRatingLabel}</div> $rating',
                '</div>',
                '<div class="gig-comments-mySummary">',
                    '<div class="gig-comments-mySummary-label">${mySummaryLabel}</div>',
                    '<div class="gig-comments-mySummary-value">${summary}</div>',
                '</div>',
                '<div class="gig-comments-myReview">',
                    '<div class="gig-comments-myReview-label">${myReviewLabel}</div>',
                    '<div class="gig-comments-myReview-value">${review}</div>',
                '</div>'
            ]);
        }
    }

    var TEXT = pluginScope.getText;



    /* end private */


    /* public */
    var comment = function (data, plugin) {
        //raw data
        this.data = data;

        this.id = data.ID;
        this.parentID = data.parentID;
        this.children = data.children;
        this.timestamp = data.timestamp;
        this.commentText = data.commentText ? data.commentText : '';
        this.commentTitle = data.commentTitle ? data.commentTitle : '';
        this.ratings = data.ratings;
        this.username = data.sender.name;
        if (!this.username) {
            this.username = 'Anonymous';
        }
        this.photoURL = data.sender.photoURL;
        this.UID = data.UID;
        this.threadTimestamp = data.threadTimestamp;
        this.provider = data.sender.loginProvider;
        this.status = data.status;
        this.isTemp = data.isTemp;
        this.isPost = data.isPost;

        if (data.providerPostIDs) this.providerPostIDs = data.providerPostIDs;

        this.posVotes = data.posVotes ? data.posVotes : 0;
        this.negVotes = data.negVotes ? data.negVotes : 0;
        this.vote = data.vote ? data.vote : 0;
        this.plugin = plugin;
        this.containerID = this.plugin.containerID + '_' + this.id;

        if (!this.plugin.commentsInstances) this.plugin.commentsInstances = {};
        this.plugin.commentsInstances[this.id] = this;

    }
    comment.prototype = {
        id: null,
        parentID: null,
        plugin: null,
        children: null,
        level: null,
        childrenCount: null,
        timestamp: null,
        provider: null,
        providerPostIDs: null,
        containerID: null,

        getContainer: function () {
            return document.getElementById(this.containerID);
        },
        getParentComment: function () {
            return this.plugin.commentsInstances[this.parentID];
        },

        isRemovedComment: function () {
            return (!this.isPost && ['rejected', 'deleted', 'pending'].indexOf(this.data.status) != -1);
        },

        isPostPending: function () {
            return (this.isPost && this.data && this.data.status == 'pending');
        },

        expandCollapse: function () {
            var elReplies = document.getElementById('gig-replies-' + this.id);
            if (elReplies) {
                if (elReplies.style.display == 'none') {
                    this.expand();
                } else {
                    this.collapse();
                }
            }
        },
        expand: function () {
            var elExpand = document.getElementById('gig-expand-' + this.id);
            var elReplies = document.getElementById('gig-replies-' + this.id);
            if (elExpand && elReplies) {
                elExpand.className = 'gig-comments-expand-arrow';
                window.gigya.utils.DOM.showByID(elReplies.id);
            }
        },
        collapse: function () {
            var elExpand = document.getElementById('gig-expand-' + this.id);
            var elReplies = document.getElementById('gig-replies-' + this.id);
            if (elExpand && elReplies) {
                elExpand.className = 'gig-comments-collapse-arrow';
                window.gigya.utils.DOM.hideByID(elReplies.id);
            }
        },
        updateRepliesCount: function () {
            var ecTemplate = this.plugin._templates['expand_collapse'];
            var sOneReply = this.plugin.textMode == 'reviews' ? 'one_comment' : 'one_reply';
            var sNumReplies = this.plugin.textMode == 'reviews' ? 'num_comments' : 'num_replies';
            var repliesCount = TEXT((this.childrenCount == 1 ? sOneReply : sNumReplies), '%num', this.childrenCount || 0);

            // Special handling of french 0 - should not be plural (28600)
            if (this.plugin._p.lang == 'fr' && this.childrenCount == '0') {
                repliesCount = TEXT(sOneReply, '%num', this.childrenCount).replace('1', '0');
            }

            var ecItem = {
                commentID: this.id,
                onExapndCollapse: this.getRefString() + '.expandCollapse()',
                replies_count: repliesCount
            }

            document.getElementById('gig-comments-comment-' + this.id + '-repliesCountPlaceholder').innerHTML = (this.childrenCount > 0 ? window.gigya.utils.templates.fill(ecTemplate, ecItem) : '');
            var parent = this.getParentComment();
            if (parent) parent.updateRepliesCount();
        },
        getCommentElementByClass: function (className) {
            return window.gigya.utils.DOM.getElementsByClass(this.getContainer(), 'gig-comments-comment-' + className)[0];
        },
        markAsNew: function () {
            var el = this.getCommentElementByClass('newIndicator');
            if (el) el.style.display = '';
        },
        unmarkAsNew: function () {
            var el = this.getCommentElementByClass('newIndicator');
            if (el) el.style.display = 'none';
        },
        closeReplybox: function () {
            document.getElementById(this.plugin.containerID + '-reply-' + this.id).innerHTML = '';
            document.getElementById(this.plugin.containerID + '-reply-' + this.id).style.display = 'none'; //IE bug
            var el = document.getElementById(this.plugin.containerID + '-replybutton-' + this.id);
            el.className = 'gig-comments-button gig-comments-button-reply';
            this.plugin.lastReplyId = null;
            var divGuest = document.getElementById(this.plugin.containerID + '-reply-' + this.id + '-guestUI');
            if (divGuest && divGuest.parentNode) divGuest.parentNode.removeChild(divGuest);
            var divLogin = document.getElementById(this.plugin.containerID + '-reply-' + this.id + '-login');
            if (divLogin && divLogin.parentNode) divLogin.parentNode.removeChild(divLogin);
        },
        showFlagDialog: function () {
            if (this.plugin.lastFlagComment) this.plugin.lastFlagComment.hideFlagDialog();
            if (this.data.flagged) return;
            this.plugin.lastFlagComment = this;
            document.getElementById('gig-flag-' + this.id).style.visibility = 'visible';
            var type = (this.plugin.textMode == 'reviews' && this.level == 0 ? 'review' : 'comment');
            var template = this.plugin._templates['flagDialog'];
            var item = {
                report_comment_to_site_owner: TEXT('report_' + type + '_to_site_owner'),
                are_you_sure_you_want_to_mark_this_comment_as_inappropriate: TEXT('are_you_sure_you_want_to_mark_this_' + type + '_as_inappropriate'),
                cancel: TEXT('cancel'),
                yes_flag_this_comment: TEXT('yes_flag_this_' + type),
                onClose: this.getRefString() + '.hideFlagDialog()',
                onCancel: this.getRefString() + '.hideFlagDialog()',
                onFlag: this.getRefString() + '.flag()'
            }
            var containerID = this.plugin.containerID + '-' + this.id + '-flag';
            var divFlag = window.gigya.utils.DOM.createTopLevelDiv(containerID + '_container');
            divFlag.style.position = 'absolute';
            divFlag.className = 'gig-comments-container';
            divFlag.innerHTML = window.gigya.utils.templates.fill(template, item);
            window.gigya.utils.DOM.setSize(divFlag, 400, 150, true);
        },
        hideFlagDialog: function (dontHideFlag) {
            if (!dontHideFlag) document.getElementById('gig-flag-' + this.id).style.visibility = '';
            var container = document.getElementById(this.plugin.containerID + '-' + this.id + '-flag_container');
            if (container) container.parentNode.removeChild(container);
        },
        showRemoveDialog: function () {
            if (!this.data.sender.isSelf) return;
            var type = (this.plugin.textMode == 'reviews' && this.level == 0 ? 'review' : 'comment');
            var template = this.plugin._templates['removeDialog'];
            var item = {
                are_you_sure: TEXT('are_you_sure_you_want_to_permanently_delete_your_' + type + '_qm'),
                no: TEXT('no'),
                yes: TEXT('yes'),
                onCancel: this.getRefString() + '.hideRemoveDialog()',
                onRemove: this.getRefString() + '.remove()',
                delete_comment: TEXT('delete_' + type)
            }
            var containerID = this.plugin.containerID + '-' + this.id + '-remove';
            var divRemove = window.gigya.utils.DOM.createTopLevelDiv(containerID + '_container');
            divRemove.style.position = 'absolute';
            divRemove.className = 'gig-comments-container';
            divRemove.innerHTML = window.gigya.utils.templates.fill(template, item);
            window.gigya.utils.DOM.setSize(divRemove, 390, 150, true);
        },
        hideRemoveDialog: function () {
            var container = document.getElementById(this.plugin.containerID + '-' + this.id + '-remove_container');
            if (container) container.parentNode.removeChild(container);
        },
        markAsFlagged: function () {
            this.data.flagged = true;
            var divFlag = document.getElementById('gig-flag-' + this.id);
            if (divFlag) {
                divFlag.className = 'gig-comments-comment-flag-submitted'
            }
            this.plugin._state.flags[this.id] = true;
        },
        remove: function () {
            window.gigya.comments.deleteComment(this.plugin._p, { commentID: this.id });
            var parent = this.getParentComment();
            for (var i = 0; i < this.plugin._commentsRawData.length; i++) {
                if (this.plugin._commentsRawData[i].ID == this.id) {
                    this.plugin._commentsRawData.splice(i, 1); //remove pending comment
                    break;
                }
            }
            //delete this.plugin.commentsInstances[this.id];
            while (parent) {
                parent.childrenCount--;
                parent.updateRepliesCount();
                parent = parent.getParentComment();
            }

            if (this.plugin.textMode != 'reviews' || this.level == 0) {
                this.plugin._commentCount--;
            }

            this.plugin.updateCount();
            var elComment = this.getContainer();
            if (elComment) {
                if (this.childrenCount && this.childrenCount > 0) {
                    this.data.status = 'deleted';
                    this.data.commentText = '';
                    elComment.innerHTML = this.getHTML();
                } else {
                    
                    var parentNode = elComment.parentNode;
                    parentNode.removeChild(elComment);
                }
            }

            this.hideRemoveDialog();

            if (this.plugin._userComments) {
                for (var i = 0; i < this.plugin._userComments.length; i++) {
                    if (this.plugin._userComments[i].ID == this.id) {
                        this.plugin._userComments.splice(i, 1);
                        break;
                    }
                }
            }

            if (this.plugin.textMode == 'reviews') {
                this.plugin._drawCommentBox();
            }
        },
        voteUp: function () {
            if (this.vote == 'pos') {
                this.setVote('none');
            } else {
                this.setVote('pos');
            }
        },
        voteDown: function () {
            if (this.vote == 'neg') {
                this.setVote('none');
            } else {
                this.setVote('neg');
            }
        },
        setVote: function (vote) {
            var This = this;
            if (!this.plugin._user || !this.plugin._user.isConnected) {
                var elVoteID = vote == 'pos' ? 'gig-voteUp-' + this.id : 'gig-voteDown-' + this.id;
                this.plugin.loginClicked(this.id + '-vote-' + vote, document.getElementById(elVoteID), function () {
                    This.setVote(vote);
                }, true);
                return;
            }

            this.voteInProgress = true;
            window.gigya.comments.vote(this.plugin._c, { vote: vote, commentID: this.id, callback: function () { This.voteInProgress = false; } });
            switch (vote) {
                case 'pos': this.posVotes++; break;
                case 'neg': this.negVotes++; break;
            }
            switch (this.vote) {
                case 'pos': this.posVotes--; break;
                case 'neg': this.negVotes--; break;
            }
            this.vote = vote;
            this.updateVoteUI();
            var oEvent = {
                eventName: 'commentVoted',
                categoryID: this.plugin._p.categoryID,
                streamID: this.plugin._p.streamID,
                comment: this.data,
                vote: vote,
                mode: this.plugin.textMode
            }
            this.data.vote = this.vote;
            this.data.posVotes = this.posVotes;
            this.data.negVotes = this.negVotes;
            window.gigya.events.dispatchForWidget(oEvent, this.plugin._p);
            oEvent = window.gigya.utils.object.clone(oEvent);

            oEvent.eventName = 'commentVote'; //back compat
            window.gigya.events.dispatchForWidget(oEvent, this.plugin._p);
        },
        loginClicked: function (el) {
            this.plugin.loginClicked(this.id, el);
        },
        updateVoteUI: function () {
            var elVote = document.getElementById('gig-vote-' + this.id);
            if (elVote && elVote.originalHTML) elVote.innerHTML = elVote.originalHTML;

            if (!this.plugin._user || !this.plugin._user.isConnected) {
                this.vote = 'none';
            }
            var elVoteUp = document.getElementById('gig-voteUp-' + this.id);
            var elVoteDown = document.getElementById('gig-voteDown-' + this.id);
            var elVoteValue = document.getElementById('gig-voteValue-' + this.id);
            var elVoteValuePos = document.getElementById('gig-voteValuePos-' + this.id);
            var elVoteValueNeg = document.getElementById('gig-voteValueNeg-' + this.id);
            switch (this.vote) {
                case 'pos':
                    if (elVoteUp) elVoteUp.className = 'gig-comments-button gig-comments-button-down gig-comments-button-vote gig-comments-button-vote-up';
                    if (elVoteDown) elVoteDown.className = 'gig-comments-button gig-comments-button-vote gig-comments-button-vote-down';
                    break;
                case 'neg':
                    if (elVoteUp) elVoteUp.className = 'gig-comments-button gig-comments-button-vote gig-comments-button-vote-up';
                    if (elVoteDown) elVoteDown.className = 'gig-comments-button gig-comments-button-down gig-comments-button-vote gig-comments-button-vote-down';
                    break;
                case 'none':
                default:
                    if (elVoteUp) elVoteUp.className = 'gig-comments-button gig-comments-button-vote gig-comments-button-vote-up';
                    if (elVoteDown) elVoteDown.className = 'gig-comments-button gig-comments-button-vote gig-comments-button-vote-down';
            }
            if (elVoteValue) {
                var voteValue = this.posVotes - this.negVotes;
                if (voteValue > 0) voteValue = '+' + voteValue;
                if (isNaN(voteValue) || voteValue == 0) voteValue = '0';
                elVoteValue.innerHTML = voteValue;
            }
            if (elVoteValuePos) {
                var voteValue = this.posVotes;
                if (voteValue) voteValue = voteValue;
                if (isNaN(voteValue) || voteValue == 0) voteValue = '0';
                elVoteValuePos.innerHTML = voteValue;
            }
            if (elVoteValueNeg) {
                var voteValue = this.negVotes;
                if (voteValue) voteValue = voteValue;
                if (isNaN(voteValue) || voteValue == 0) voteValue = '0';
                elVoteValueNeg.innerHTML = voteValue;
            }
        },
        flag: function () {
            window.gigya.comments.flagComment(this.plugin._c, { commentID: this.id });
            this.hideFlagDialog(true);
            this.markAsFlagged();
            this.plugin.saveState();
        },
        listenForCombination: function (e) {
            if (!e) var e = window.event;
            if (e.keyCode == 40 && e.shiftKey) {
                var sCommentData = window.gigya.utils.stringUtils.format('<div class="gig-comments-container">Stream ID: {0}<br />Comment ID: {1}</div>', this.plugin._p.streamID, this.id);
                window.gigya.global.putGMBalloonNextTo(this.getContainer(), sCommentData, 'Comment Data', 400, 100);
                if (e.preventDefault) e.preventDefault();
            }
        },
        mouseOver: function () {
            var This = this;
            if (this.plugin.isMobileUI) return;
            if (!this.keydownDelegate) this.keydownDelegate = function (e) { return This.listenForCombination(e); };
            if (document.attachEvent) {
                document.attachEvent('onkeydown', this.keydownDelegate);
            } else if (window.addEventListener) {
                window.addEventListener('keydown', this.keydownDelegate, false);
            }

            if (!this.data.flagged) {
                var divFlag = document.getElementById('gig-flag-' + this.id);
                if (divFlag) divFlag.className = 'gig-comments-comment-flag gig-comments-comment-flag-over';
            }
            if (this.plugin._settings.allowCommentDeletion && this.data.sender.isSelf && !this.plugin._user.isGuest) {
                var divRemove = document.getElementById('gig-remove-' + this.id);
                if (divRemove) divRemove.className = 'gig-comments-comment-remove gig-comments-comment-remove-over';
            }
        },
        mouseOut: function () {
            try {
                if (window.detachEvent) {
                    document.detachEvent('onkeydown', this.keydownDelegate);
                } else if (window.removeEventListener) {
                    window.removeEventListener('keydown', this.keydownDelegate, false);
                }
            } catch (ex) { };
            if (!this.data.flagged) {
                var divFlag = document.getElementById('gig-flag-' + this.id);
                if (divFlag) divFlag.className = 'gig-comments-comment-flag';
            }
            if (this.plugin._settings.allowCommentDeletion && this.data.sender.isSelf && !this.plugin._user.isGuest) {
                var divRemove = document.getElementById('gig-remove-' + this.id);
                if (divRemove) divRemove.className = 'gig-comments-comment-remove';
            }
        },
        getHTML: function () {
            var body = this.commentText.replace(/\$/g, '&#36;');
            body = window.gigya.global.wbr(body, 15).replace(/\n/g, '<br />');
            var photoURL = window.gigya.global.getPhotoURL(this.photoURL);
            if (!photoURL || photoURL == '') {
                photoURL = imgBase + 'avatar_32x32.gif';
            }

            var sOneReply = this.plugin.textMode == 'reviews' ? 'one_comment' : 'one_reply';
            var sNumReplies = this.plugin.textMode == 'reviews' ? 'num_comments' : 'num_replies';
            var repliesCount = TEXT((this.childrenCount == 1 ? sOneReply : sNumReplies), '%num', this.childrenCount || 0);

            // Special handling of french 0 - should not be plural (28600)
            if (this.plugin._p.lang == 'fr' && this.childrenCount == '0') {
                repliesCount = TEXT(sOneReply, '%num', this.childrenCount).replace('1', '0');
            }

            var username = this.isRemovedComment() ? TEXT('anonymous') : this.username;

            var threadPadding = this.plugin.isMobileUI ? 10 : 42;
            var item = {
                id: this.plugin.containerID,
                commentID: this.id,
                newText: TEXT('new'),
                photoDiv: this.plugin._templates['photoDiv32'],
                replyButton: this.plugin._templates['replyButton'],
                reply: this.plugin.textMode == 'reviews' ? TEXT('comment') : TEXT('reply'),
                onReplyClicked: this.plugin.getRefString() + '.replyClicked(\'' + this.id + '\')',
                classname: (this.parentID && this.parentID != 0) ? "comment-child" : "comment",
                rootClass: 'comment',
                paddingLeft: (this.level * threadPadding) + 'px',
                childComments: pluginScope.drawComments(this.children, this.plugin, this.level + 1),
                photoURL: photoURL,
                body: body,
                username: window.gigya.utils.sanitize.sanitizeHTML(window.gigya.global.wbr(username, 20)).replace(/\$/g, '&#36;'),
                mediaItemPlaceholder: this.plugin._templates['mediaItemPlaceholder'],
                mediaItemURL: (this.data.mediaItems && this.data.mediaItems.length > 0 ? this.data.mediaItems[0].url : ''),
                commentReplyPlaceholder: this.plugin._templates['replyPlaceholder'],
                errorPlaceholder: this.plugin._templates['errorPlaceholder'],
                moderatorEditTextPlaceholder: this.data.moderatorEdit ? this.plugin._templates['moderatorEditTextPlaceholder'] : '',
                outstandingBadgePlaceholder: this.data.moderatorRating == 10 ? this.plugin._templates['outstandingBadgePlaceholder'] : '',
                moderatorEditText: this.plugin.textMode == 'reviews' ? TEXT('review_edited_by_a_moderator') : TEXT('comment_edited_by_a_moderator'),
                dottedLine: '',
                repliesCountPlaceholder: this.plugin._templates['repliesCountPlaceholder'],
                replies_count: repliesCount,
                expand_collapse: '',
                userImage: this.plugin._templates['userImage'],
                providerImage: '',
                comment: this.plugin._templates['comment'],
                flag: '',
                vote: '',
                remove: '',
                onVoteUpClick: this.getRefString() + '.voteUp()',
                onVoteDownClick: this.getRefString() + '.voteDown()',
                onFlagClicked: this.getRefString() + '.showFlagDialog()',
                onRemoveClicked: this.getRefString() + '.showRemoveDialog()',
                onmouseover: this.getRefString() + '.mouseOver()',
                onmouseout: this.getRefString() + '.mouseOut()',
                ratings: '',
                title: this.commentTitle && !this.isRemovedComment() ? this.commentTitle : '',
                titlePlaceholder: this.commentTitle ? this.plugin._templates['titlePlaceholder'] : ''
            }
            if (this.data.moderatorRating == 10) {
                item.classname += ' gig-comments-comment-outstanding';
            }
            if (this.ratings && !this.isRemovedComment()) {
                var ratingTemplate = this.plugin._templates['rating'];
                item.starClassName = 'gig-comments-star';
                item.ratings = window.gigya.utils.templates.fill(ratingTemplate, {
                    ratingID: 'overall',
                    value: this.ratings['_overall']
                });
            }
            item.width = this.plugin._p.width - (this.level * threadPadding) + 'px';
            item.marginLeft = (this.level * threadPadding) + ((this.level - 1) * 10);
            if (item.marginLeft < 0) item.marginLeft = 0;
            if (this.data.fromFacebook) {
                item.classname += ' gig-comments-comment-facebook';
                item.comment = this.plugin._templates['facebookComment']
            }
            if (this.plugin._settings.enableFlagging && !this.isTemp && !this.isPostPending() && !this.isRemovedComment()) {
                item.flag = this.plugin._templates['flag'];
            }

            item.remove = this.plugin._templates['remove'];

            if (this.plugin._settings.enableVoting && !this.isTemp && !this.isPostPending() && !this.isRemovedComment()) {
                item.vote = window.gigya.utils.templates.fill(this.plugin._templates['vote'], { commentID: this.id, allowNegativeVoting: this.plugin._settings.allowNegativeVoting, displayPosNegVotes: this.plugin._settings.displayPosNegVotes });
            }
            if ((this.plugin.streamInfo.status == 'readOnly') || (this.plugin._settings.enableCommentBody == 'disabled') || this.isRemovedComment()) {
                item.replyButton = '';
            }
            if (this.provider) {
                var provider = window.gigya.socialize._getProviderByName(this.provider);
                if (provider && provider.ID != 6002 /*Site*/) {
                    item.providerImage = this.plugin._templates['providerImage'];
                    item.providerImageURL = imgBase + 'providers/' + this.provider + 'User_14x14.gif';
                }
            }

            if (this.level == 0) {
                item.paddingLeft = '0px';
                item.dottedLine = this.plugin._templates['dottedLine'];
            }
            if (this.level + 1 > this.plugin._settings.threadingDepth) {
                item.replyButton = '';
            }
            if (this.children && this.children.length > 0) {

                item.expand_collapse = this.plugin._templates['expand_collapse'];
                item.onExapndCollapse = this.getRefString() + '.expandCollapse()';
            }
            var now = (new Date()).getTime();
            var d = (new Date())
            d.setTime(this.timestamp);
            var dh = (now - this.timestamp) / 1000 / 60 / 60;
            if (this.isRemovedComment()) {
                item.dateString = '';
            } else if (dh * 60 < 1) {
                item.dateString = TEXT('less_than_a_minute_ago');
            } else if (dh < 1) {
                item.dateString = Math.round(dh * 60) == 1 ? TEXT('one_minute_ago') : TEXT('num_minutes_ago', '%num', Math.round(dh * 60));
            } else if (dh < 24) {
                item.dateString = Math.round(dh) == 1 ? TEXT('one_hour_ago') : TEXT('num_hours_ago', '%num', Math.round(dh));
            } else {
                item.dateString = Math.round(dh / 24) == 1 ? TEXT('one_day_ago') : TEXT('num_days_ago', '%num', Math.round(dh / 24));
            }
            var template = this.plugin._templates['commentContainer'];
            item.commentContainerId = this.containerID;
            if (this.isTemp || this.isPostPending() || this.isRemovedComment()) {
                item.replyButton = '';
            }
            if (this.isPostPending()) {
                item.comment = this.plugin._templates['pendingComment'];
                item['awaiting_moderation_text'] = (this.plugin.textMode == 'reviews' && this.level == 0) ? TEXT('your_review_is_awaiting_moderation') : TEXT('your_comment_is_awaiting_moderation');
            }
            else if (this.isRemovedComment()) {
                item.comment = this.plugin._templates['pendingComment'];
                if (this.status == 'pending')
                    item['awaiting_moderation_text'] = (this.plugin.textMode == 'reviews' && this.level == 0) ? TEXT('this_review_is_awaiting_moderation') : TEXT('this_comment_is_awaiting_moderation');
                else
                    item['awaiting_moderation_text'] = (this.plugin.textMode == 'reviews' && this.level == 0) ? TEXT('this_review_has_been_deleted') : TEXT('this_comment_has_been_deleted');
            }

            return window.gigya.utils.templates.fill(template, item);
        },
        getRefString: function () {
            return this.plugin.getRefString() + '.commentsInstances[\'' + encodeURIComponent(this.id) + '\']';
        }
    }
    commentsPlugin.prototype =
            {
                _comments: null,
                _user: null,
                _settings: null,
                _state: null,
                _lastCommentTimestamp: null,
                _previousLastCommentTimestamp: null,
                _refreshTimeout: null,
                _p: null,
                _container: null,
                _isPaused: null,
                _templates: {},

                saveState: function () {
                    window.gigya.utils.localStorage.setObject('gig-comments', this._state);
                },
                loadState: function () {
                    this._state = window.gigya.utils.localStorage.getObject('gig-comments', {flags: {}});
                },
                loadTemplates: function (oTemplates) {
                    this._templates = pluginScope.templates.getMapCopy();
                    if (oTemplates) {
                        if (oTemplates['loginCanvas_loggedOut'] != null && oTemplates['loginCanvas_loggedOutWithGuest'] == null) {
                            oTemplates['loginCanvas_loggedOutWithGuest'] = oTemplates['loginCanvas_loggedOut'];
                            oTemplates['loginCanvas_loggedOut_mobile'] = oTemplates['loginCanvas_loggedOut'];
                        }
                        this._templates = window.gigya.utils.object.merge([this._templates, oTemplates]);
                        this._p.ctag += '_templates';
                    }
                },
                checkForNewComments: function () {
                    var This = this;

                    if (this._settings['refreshMode'] != 'off' && !this._isPaused) {
                        window.gigya.comments.getStreamInfo(this._p, {
                            callback: function (response) {
                                if (response.streamInfo) {
                                    var commentCount = This.textMode == 'reviews' ? response.streamInfo.ratingCount : response.streamInfo.commentCount;
                                    var addedCommentsCount = commentCount - This._commentCount;
                                    if (addedCommentsCount > 0) {
                                        This._lastCommentTimestamp = response.streamInfo.lastCommentTimestamp;
                                        This._newCommentsCount = (This._newCommentsCount || 0) + addedCommentsCount;
                                        This.onHasNewComments(This._settings['refreshMode'] == 'countOnly' ? addedCommentsCount : This._newCommentsCount, commentCount);
                                    }
                                }
                            }
                        });
                    };
                },
                onHasNewComments: function (newCommentsCount, totalCommentsCount) {
                    var This = this;
                    var refreshMode = this._settings['refreshMode'];
                    var updateStripTemplate = this._templates['updatesStrip'];
                    var updateStripPlaceholder = this.getElementByCommentsClass('updatesStripPlaceholder');
                    if (refreshMode == 'countOnly') {
                        updateStripPlaceholder.style.visibility = '';
                        updateStripPlaceholder.innerHTML = window.gigya.utils.templates.fill(updateStripTemplate, {
                            text: newCommentsCount == 1 ? TEXT('1_new_comment_was_recently_posted') : TEXT('num_new_comments_were_recently_posted', '%num', newCommentsCount),
                            linkText: TEXT('click_to_show')
                        })
                        window.gigya.utils.DOM.addEventListener(this.getElementByCommentsClass('updatesStrip-link'), 'click', function () {
                            This.getNewComments();
                            This._commentCount = totalCommentsCount;
                            updateStripPlaceholder.style.visibility = 'hidden';
                        });
                    } else if (refreshMode == 'full') {
                        this.getNewComments();
                        this._commentCount = totalCommentsCount;
                        updateStripPlaceholder.innerHTML = window.gigya.utils.templates.fill(updateStripTemplate, {
                            text: newCommentsCount == 1 ? TEXT('1_comment_was_recently_added') : TEXT('num_comments_were_recently_added', '%num', newCommentsCount),
                            linkText: TEXT('pause_stream')
                        })
                        window.gigya.utils.DOM.addEventListener(this.getElementByCommentsClass('updatesStrip-link'), 'click', function () {
                            This._isPaused = !This._isPaused;
                            this.innerHTML = This._isPaused ? TEXT('resume_stream') : TEXT('pause_stream');
                        });
                    }
                },
                getElementByCommentsClass: function (commentsClass) {
                    return window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-comments-' + commentsClass)[0];
                },
                getNewComments: function () {
                    this._getComments(true);
                },
                _getComments: function (getNewComments) {
                    /*var streamTitle = this._p['streamTitle'];
                    if (!streamTitle) streamTitle = document.title;
                    if (!streamTitle || streamTitle == '') streamTitle = 'Site';
                    var streamURL = this._p['streamURL'];
                    if (!streamURL) streamURL = document.location.href;*/
                    var This = this;
                    var params = window.gigya.utils.object.removeUndefined({
                        categoryID: this._p['categoryID'],
                        streamID: this._p['streamID'],
                        includeSettings: true,
                        includeUserOptions: true,
                        threaded: false,
                        tags: this._p['filterTags']
                    });
                    if (This.nopaging) {
                        params.threadLimit = 0;
                    }
                    if (This._next) {
                        if (!getNewComments) {
                            params.start = This._next;
                        }
                    } else { //first call
                        params.includeStreamInfo = true;
                    }
                    if (getNewComments && this.streamInfo && this.streamInfo['lastCommentTimestamp']) params.since = this.streamInfo['lastCommentTimestamp'];
                    params.callback = function (data) {
                        //if (!data.streamInfo) data.streamInfo = {};
                        //if (!data.userOptions) data.userOptions = {};
                        if (data.errorCode != 0) {
                            if (!This.broadcastedError) {
                                if (This.container && !This._next) This.container.innerHTML = '';
                                window.gigya.events.dispatchErrorFromResponse(This._p, data);
                                This.broadcastedError = true;
                            }
                        } else {
                            if (data.settings) This._settings = data.settings;
                            if (!This._settings) This._settings = {};
                            if (data.userComments) This._userComments = data.userComments;
                            This.textMode = (This._settings.mode == 'ratingsOnly' || This._settings.mode == 'reviews') ? 'reviews' : 'comments';
                            var dontChangeCount = false;
                            if (params.start) {
                                This._commentsRawData = This._commentsRawData.concat(data.comments);
                            } else if (getNewComments) {
                                This._commentsRawData = data.comments.concat(This._commentsRawData);
                            } else {
                                This._commentsRawData = data.comments;

                            }

                            This._hasMore = data.hasMore;
                            if (data.streamInfo) {
                                This.streamInfo = data.streamInfo;
                                This._commentCount = This.textMode == 'reviews' ? data.streamInfo.ratingCount : data.streamInfo.commentCount;
                                This._lastCommentTimestamp = data.streamInfo.lastCommentTimestamp;
                            }
                            if (data.userOptions) This.userOptions = data.userOptions;

                            if (This._p.useSiteLogin != null) This._settings.useSiteLogin = This._p.useSiteLogin;
                            This._settings.useSiteLogin = window.gigya.utils.validation.isExplicitTrue(This._settings.useSiteLogin);


                            This._comments = pluginScope.buildCommentsTree(This._commentsRawData, data.settings.sortBy, This, dontChangeCount);
                            if (!This._next) { //first time
                                if (This._settings.newCommentPosition == 'bottom') {
                                    document.getElementById(This.containerID).innerHTML = '<div id="' + This.containerID + '-comments-header"></div><div class="gig-commentList" id="' + This.containerID + '-comments"></div><div id="' + This.containerID + '-comments-footer"></div><div class="gig-comments-separator"></div><div class="gig-comments-commentBox-bottom" id="' + This.containerID + '-commentBox"></div>';
                                } else {
                                    document.getElementById(This.containerID).innerHTML = '<div id="' + This.containerID + '-commentBox"></div><div id="' + This.containerID + '-comments-header"></div><div class="gig-commentList" id="' + This.containerID + '-comments"></div><div id="' + This.containerID + '-comments-footer"></div>'
                                }

                                var refreshMode = This._settings['refreshMode'];
                                var refreshInterval = This._settings['refreshInterval'] ? This._settings['refreshInterval'] * 1000 : 0;
                                if (refreshInterval > 0 && refreshMode != 'off') {
                                    this._refreshTimeout = window.setInterval(function () {
                                        This.checkForNewComments();
                                    }, refreshInterval);
                                }
                                This.redraw();
                            } else {
                                This.drawNewComments(This._comments, getNewComments);
                            }
                            if (!getNewComments) {
                                This._next = data.next;
                            }
                            This._drawFooter();
                        }
                    }
                    window.gigya.comments.getComments(this._c, params);
                },
                getMoreComments: function () {
                    var template = this._templates['showMoreComments-progress'];
                    document.getElementById(this.containerID + '-comments-footer').innerHTML = window.gigya.utils.templates.fill(template, { id: this.containerID });

                    this._getComments();
                },
                _drawFooter: function () {
                    var template = this._templates['comments-footer'];
                    var item = {
                        id: this.containerID,
                        showMoreComments: '',
                        onMoreCommentsClick: this.getRefString() + '.getMoreComments()'
                    }
                    if (this._hasMore) {
                        //preload progress
                        var img = new Image();
                        img.src = imgBase + 'progress_ani.gif';
                        item.showMoreComments = this._templates['showMoreComments'];
                        item['show_more_comments'] = this._settings.mode == 'reviews' ? TEXT('show_more_reviews') : this._settings.mode == 'ratingsOnly' ? TEXT('show_more_ratings') : TEXT('show_more_comments');
                    }
                    document.getElementById(this.containerID + '-comments-footer').innerHTML = window.gigya.utils.templates.fill(template, item);
                },
                _drawHeader: function () {
                    var template = this._templates['comments-header'];
                    var item = {
                        id: this.containerID,
                        comments_count: this._settings.disableCommentsCount ? '' : window.gigya.utils.templates.fill(this._templates['commentsCountWrapper'], {}),
                        rss: (this._settings.disableRSS || this.isMobileUI ? '' : this._templates['rss']),
                        rss_text: TEXT('rss'),
                        subscribe_text: TEXT('subscribe'),
                        category_id: (this._p['categoryID'] ? this._p['categoryID'] : 0),
                        stream_id: (this._p['streamID'] ? encodeURIComponent(this._p['streamID']) : 0),
                        rssURL: this.streamInfo.rssURL,
                        onRssClick: this.getRefString() + '.onRssClick(true)',
                        onSubscribeClick: this.getRefString() + '.onSubscribeClick()',
                        onRssRightClick: this.getRefString() + '.onRssClick()'
                    }
                    document.getElementById(this.containerID + '-comments-header').innerHTML = window.gigya.utils.templates.fill(template, item);
                    this.updateSubscribeUI();
                    this.updateCount();
                },
                onRssClick: function (redirect) {
                    if (redirect) {
                        return this.setStreamInfoIfNeeded(this.streamInfo.rssURL);
                    } else {
                        this.setStreamInfoIfNeeded();
                    }
                },
                onSubscribeClick: function () {
                    var This = this;
                    var unsubscribeCallback = function (e) { return This.onUnsubscribe(e); };
                    if (this.streamInfo.isUserSubscribed) {
                        window.gigya.comments.unsubscribe(this._c, { callback: unsubscribeCallback });
                    } else if (this.unsubscribeToken) {
                        window.gigya.comments.unsubscribe(this._c, { unsubscribeToken: this.unsubscribeToken, callback: unsubscribeCallback });
                    } else {
                        var type = (this.textMode == 'reviews' ? 'review' : 'comment');
                        this.showSubscribeDialog(TEXT('enter_your_email_to_subscribe_to_new_' + type + 's_in_this_stream_colon'), TEXT('subscribe'), this.getRefString() + '.subscribe');
                    }
                },
                onFollowClicked: function () {
                    if (this.userOptions && this.userOptions.replyNotifications == 'immediate') {
                        this.unfollow();
                    } else {
                        var type = (this.textMode == 'reviews' ? 'review' : 'comment');
                        var enterYourEmailText = type == 'review' ? TEXT('enter_your_email_to_receive_notifications_when_someone_replies_to_your_comments_colon') : TEXT('enter_your_email_to_receive_notifications_when_someone_replies_to_your_' + type + 's_colon');
                        this.showSubscribeDialog(enterYourEmailText, TEXT('follow'), this.getRefString() + '.follow');
                    }
                },
                updateFollowStatus: function () {
                    var This = this;
                    window.gigya.comments.getUserOptions(this._c, {
                        callback: function (e) {
                            if (e.errorCode == 403005) e.userOptions = {};
                            if (e.userOptions) {
                                This.userOptions = e.userOptions;
                                This.updateFollowUI();
                            }
                        }
                    });
                },
                updateFollowUI: function () {
                    var elFollowLink = document.getElementById(this.containerID + '-followLink');
                    if (elFollowLink) {
                        if ((this._user.isConnected || this._user.isGuest) && !this._user.isTempUser) {
                            var isFollowing = this.userOptions && this.userOptions.replyNotifications == 'immediate';
                            elFollowLink.className = isFollowing ? 'gig-comments-follow gig-comments-following' : 'gig-comments-follow';
                            elFollowLink.style.display = '';
                            elFollowLink.title = isFollowing ? '' : (this.textMode == 'reviews' ? TEXT('notify_me_when_someone_comments_on_my_review') : TEXT('notify_me_when_someone_replies_to_my_comments'));
                            elFollowLink.innerHTML = isFollowing ? TEXT('following') : (this.textMode == 'reviews' ? TEXT('follow_replies_to_my_reviews') : TEXT('follow_replies_to_my_comments'));
                            elFollowLink.onmouseover = isFollowing ? function () { if (isFollowing) this.innerHTML = TEXT('unfollow'); this.className = 'gig-comments-follow gig-comments-unfollow' } : null;
                            elFollowLink.onmouseout = isFollowing ? function () { if (isFollowing) this.innerHTML = TEXT('following'); this.className = 'gig-comments-follow gig-comments-following' } : null;
                        } else {
                            elFollowLink.style.display = 'none';
                        }
                    }
                },
                follow: function (email) {
                    var tbEmail = document.getElementById(this.containerID + '_subscribeTextbox');
                    if (!email && tbEmail) email = tbEmail.value;
                    this.hideSubscribeDialog();
                    window.gigya.comments.setUserOptions(this._c, { replyNotifications: 'immediate', notificationsEmail: email, notificationsLanguage: this._c.lang });
                    if (!this.userOptions) this.userOptions = {};
                    this.userOptions.replyNotifications = 'immediate';
                    this.updateFollowUI();
                },
                unfollow: function () {
                    window.gigya.comments.setUserOptions(this._c, { replyNotifications: 'disabled' });
                    this.userOptions.replyNotifications = 'disabled';
                    this.updateFollowUI();
                },
                showSubscribeDialog: function (text, subscribeButtonText, sOnSubscribe) {
                    this.hideSubscribeDialog();
                    var template = this._templates['subscribeDialog'];
                    var item = {
                        notifications_settings: TEXT('notifications_settings'),
                        enter_your_email: text,
                        subscribe_text: subscribeButtonText,
                        onCancel: this.getRefString() + '.hideSubscribeDialog()',
                        onSubscribe: this.getRefString() + '.onSubscribeOK(' + sOnSubscribe + ')',
                        please_provide_a_valid_email_address: TEXT('please_provide_a_valid_email_address'),
                        textboxID: this.containerID + '_subscribeTextbox',
                        buttonID: this.containerID + '_subscribeTextboxButton',
                        errorPlaceholderID: this.containerID + '_subscribeErrorPlaceholder',
                        onKeyUp: this.getRefString() + '.subscribeEmailKeyUp(event)',
                        bodyID: this.containerID + '_subscribeBody',
                        defaultEmail: this._user.email ? this._user.email : ''
                    }
                    var containerID = this.containerID + '-subscribe';
                    var divRemove = window.gigya.utils.DOM.createTopLevelDiv(containerID + '_container');
                    divRemove.style.position = 'absolute';
                    divRemove.className = 'gig-comments-container';
                    divRemove.innerHTML = window.gigya.utils.templates.fill(template, item);
                    window.gigya.utils.DOM.setSize(divRemove, 390, divRemove.offsetHeight, true);
                },
                onSubscribeOK: function (fnSubscribe) {
                    var tbEmail = document.getElementById(this.containerID + '_subscribeTextbox');
                    if (window.gigya.pluginUtils.validation.isEmailValid(tbEmail.value)) {
                        fnSubscribe.apply(this);
                    } else {
                        var lblError = document.getElementById(this.containerID + '_subscribeErrorPlaceholder');
                        if (lblError) lblError.style.visibility = '';
                        if (tbEmail.focus) tbEmail.focus();
                    }
                },
                hideSubscribeDialog: function () {
                    var container = document.getElementById(this.containerID + '-subscribe_container');
                    if (container) container.parentNode.removeChild(container);
                },
                subscribeEmailKeyUp: function (e) {
                    var tbEmail = document.getElementById(this.containerID + '_subscribeTextbox');
                    var lblError = document.getElementById(this.containerID + '_subscribeErrorPlaceholder');
                    if (lblError) lblError.style.visibility = 'hidden';

                    var characterCode;
                    if (e && e.which) {
                        e = e;
                        characterCode = e.which;
                    } else {
                        e = event;
                        characterCode = e.keyCode;
                    }

                    var elButton = document.getElementById(this.containerID + '_subscribeTextboxButton');
                    if (characterCode == 13 && elButton) {
                        elButton.onclick();
                    }
                },
                showConfirmationDialog: function (title, text) {
                    var This = this;
                    var template = this._templates['confirmationDialog'];
                    var item = {
                        text: text,
                        title: title,
                        onCancel: this.getRefString() + '.hideConfirmationDialog()'
                    }
                    var containerID = this.containerID + '-confirmation';
                    var divRemove = window.gigya.utils.DOM.createTopLevelDiv(containerID + '_container');
                    divRemove.style.position = 'absolute';
                    divRemove.className = 'gig-comments-container';
                    divRemove.innerHTML = window.gigya.utils.templates.fill(template, item);
                    window.gigya.utils.DOM.setSize(divRemove, 390, 150, true);
                    window.setTimeout(function () { This.hideConfirmationDialog(); }, 3000);
                },
                hideConfirmationDialog: function () {
                    var container = document.getElementById(this.containerID + '-confirmation_container');
                    if (container) container.parentNode.removeChild(container);
                },
                subscribe: function () {
                    var tbEmail = document.getElementById(this.containerID + '_subscribeTextbox');
                    if (tbEmail) {
                        var This = this;
                        window.gigya.comments.subscribe(this._c, { email: tbEmail.value, callback: function (e) { This.onSubscribe(e) } });
                        this.hideSubscribeDialog();
                        var type = (this.textMode == 'reviews' && this.level == 0 ? 'review' : 'comment');
                        var confirmationHTML = '<div class="gig-comments-dialog-subscribe-okIcon"></div>' + TEXT('thank_you_for_subscribing') + '<br />' + TEXT('new_' + type + 's_will_be_sent_directly_to_your_email_inbox');
                        this.showConfirmationDialog(TEXT('notifications_settings'), confirmationHTML);
                    }
                },
                updateSubscribeStatus: function () {
                    if (this._settings.disableRSS) return;
                    var This = this;
                    if (!this._user.isConnected) {
                        This.streamInfo.isUserSubscribed = false;
                        This.updateSubscribeUI();
                    } else {
                        window.gigya.comments.getStreamInfo(this._c, {
                            callback: function (e) {
                                if (e.streamInfo) {
                                    This.streamInfo = e.streamInfo;
                                    This.updateSubscribeUI();
                                }
                            }
                        });
                    }
                },
                updateSubscribeUI: function () {
                    var subscribeLink = document.getElementById(this.containerID + '-subscribeLink');
                    if (subscribeLink) {
                        var subscribeText = (this.streamInfo.isUserSubscribed || this.unsubscribeToken) ? TEXT('unsubscribe') : TEXT('subscribe');
                        subscribeLink.title = subscribeLink.innerHTML = subscribeText;
                    }
                },
                onSubscribe: function (e) {
                    if (e && e.unsubscribeToken) this.unsubscribeToken = e.unsubscribeToken;
                    if (!e.unsubscribeToken) this.streamInfo.isUserSubscribed = true;
                    this.updateSubscribeUI();
                },
                onUnsubscribe: function (e) {
                    if (e.errorCode == 0) {
                        this.showConfirmationDialog(TEXT('notifications_settings'), TEXT('you_have_successfully_unsubscribed'));
                        delete this.unsubscribeToken;
                        this.streamInfo.isUserSubscribed = false;
                        this.updateSubscribeUI();
                    }
                },
                setStreamInfoIfNeeded: function (redirectURL) {
                    var streamTitle = this._p['streamTitle'];
                    if (!streamTitle) streamTitle = document.title;
                    if (!streamTitle || streamTitle == '') streamTitle = 'Site';
                    var streamURL = this._p['streamURL'];
                    if (!streamURL) streamURL = document.location.href;

                    var This = this;
                    if (!this.streamInfo.streamURL || (this._p.streamInfoSig && (streamTitle != this.streamInfo.streamTitle || streamURL != this.streamInfo.streamURL))) {
                        window.gigya.comments.setStreamInfo(this._c, {
                            streamTitle: streamTitle, streamURL: streamURL, callback: function () {
                                This.streamInfo.streamTitle = streamTitle;
                                This.streamInfo.streamURL = streamURL;
                                if (redirectURL) document.location = redirectURL;
                            }
                        });
                        return false; //to stop current navigation
                    } else {
                        return true;
                    }
                },
                _drawComments: function () {
                    this.lastReplyId = null;
                    this._drawHeader();
                    this._drawFooter();
                    var html = pluginScope.drawComments(this._comments, this);
                    document.getElementById(this.containerID + '-comments').innerHTML = html;

                    for (var id in this.commentsInstances) {
                        var comment = this.commentsInstances[id];
                        if (this._settings.repliesCollapsed) comment.collapse();
                        if (this._state && this._state.flags && this._state.flags[id]) comment.markAsFlagged();
                        comment.updateVoteUI();
                    }


                },
                logout: function () {
                    window.gigya.socialize.logout(this._c, { context: this._p.context });
                },
                guestLogout: function () {
                    var divLogin = document.getElementById(this.containerID + '-login');
                    if (divLogin) divLogin.parentNode.removeChild(divLogin);
                    document.cookie = '_gig_comments_email=x;expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/';
                    document.cookie = '_gig_comments_nickname=x;expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/';
                    this._user = {
                        UID: ''
                    }
                    this._updateUserInfo();
                },

                guestClicked: function (id) {
                    var divGuest = document.getElementById(id + '-guestUI');
                    if (divGuest != null) {

                    } else {
                        var elDropdown = document.getElementById(id + '-guestDropdown');
                        divGuest = document.createElement('div');
                        divGuest.id = id + '-guestUI';

                        var pos = window.gigya.global._GetElementPos(elDropdown);
                        divGuest.style.left = '' + (window.gigya.localInfo.quirksMode ? pos.left - 2 : pos.left) + 'px';
                        divGuest.style.top = '' + (pos.top + elDropdown.offsetHeight - 2 + (window.gigya.localInfo.quirksMode ? -2 : 0)) + 'px';
                        divGuest.className = 'gig-comments-container gig-comments-guestUI';
                        var template = this._templates['guestBox'];
                        var item = {
                            id: id + '-guestUI',
                            nickname: TEXT('nickname'),
                            email: window.gigya.utils.sanitize.sanitizeAttribute(this._settings.isGuestEmailRequired ? TEXT('email') : TEXT('email_optional')),
                            ok: TEXT('ok'),
                            email_not_displayed_publicly: TEXT('email_not_displayed_publicly'),
                            okButton: this._templates['okButton'],
                            guestErrorPlaceholder: this._templates['guestErrorPlaceholder'],
                            nicknameTextbox: this._templates['guest-nicknameTextbox'],
                            emailTextbox: this._templates['guest-emailTextbox'],
                            onGuestLogin: this.getRefString() + '.guestLoginClicked(\'' + id + '-guestUI\')'
                        }
                        divGuest.innerHTML = window.gigya.utils.templates.fill(template, item);
                        document.body.appendChild(divGuest);
                        divGuest.fncHide = function (e) {
                            if (e) {
                                if (e.target && e.target.id.indexOf(divGuest.id) != -1) return;
                                if (e.srcElement && e.srcElement.id.indexOf(divGuest.id) != -1) return;
                            }
                            elDropdown.className = 'gig-comments-dropdown gig-comments-dropdown-guest';

                            if (document.attachEvent) {
                                document.detachEvent('onclick', divGuest.fncHide);
                            } else if (document.addEventListener) {
                                document.removeEventListener('click', divGuest.fncHide, false);
                            }
                            if (divGuest && divGuest.parentNode) {
                                divGuest.parentNode.removeChild(divGuest);
                            }
                            divGuest = null;
                        }
                        divGuest.fncShow = function () {
                            elDropdown.className = 'gig-comments-dropdown gig-comments-dropdown-guest gig-comments-dropdown-down gig-comments-dropdown-guest-down';
                            window.setTimeout(function () {
                                if (document.attachEvent) {
                                    document.attachEvent('onclick', divGuest.fncHide);
                                } else if (document.addEventListener) {
                                    document.addEventListener('click', divGuest.fncHide, false);
                                }
                            }, 50);
                        }
                        divGuest.fncShow();
                    }
                },
                getCommentByID: function (id) {
                    if (this.commentsInstances) return this.commentsInstances[id];
                },
                onRatingClick: function (el) {
                    var baseID = el.getAttribute('gig-baseid');
                    var ratingID = el.getAttribute('gig-ratingID');

                    if (!this.selectedRatings) this.selectedRatings = {};
                    this.selectedRatings[ratingID] = {
                        value: el.getAttribute('gig-rating'),
                        details: this.isMobileUI ? '' : el.getAttribute('gig-rating-details'),
                        baseID: baseID
                    }
                    el.onmouseout(el);
                    this.validatePost(null, true);
                },
                onRatingMouseOver: function (el) {
                    if (this.isMobileUI) return;
                    var rating = el.getAttribute('gig-rating');
                    var baseID = el.getAttribute('gig-baseid');

                    for (var i = 0; i < 5; i++) {
                        var elStar = document.getElementById(baseID + '_' + i);
                        if (elStar) {
                            if (i < rating) {
                                elStar.className = 'gig-comments-star-editable-empty gig-comments-star-editable-full';
                            } else {
                                elStar.className = 'gig-comments-star-editable-empty';
                            }
                        }
                    }
                    var elDetails = document.getElementById(el.getAttribute('gig-baseid') + '_details');
                    if (elDetails) {
                        elDetails.innerHTML = el.getAttribute('gig-rating-details');
                    }
                },
                onRatingMouseOut: function (el) {
                    var rating = el.getAttribute('gig-rating');
                    var baseID = el.getAttribute('gig-baseid');
                    var ratingID = el.getAttribute('gig-ratingID');
                    for (var i = 0; i < 5; i++) {
                        var elStar = document.getElementById(baseID + '_' + i);
                        if (elStar) {
                            if (this.selectedRatings && this.selectedRatings[ratingID] && i < this.selectedRatings[ratingID].value) {
                                elStar.className = 'gig-comments-star-editable gig-comments-star-editable-full';
                            } else {
                                elStar.className = 'gig-comments-star-editable';
                            }
                        }
                    }
                    var elDetails = document.getElementById(el.getAttribute('gig-baseid') + '_details');
                    if (elDetails) {
                        if (this.selectedRatings && this.selectedRatings[ratingID]) {
                            elDetails.innerHTML = this.selectedRatings[ratingID].details;
                        } else {
                            elDetails.innerHTML = '';
                        }
                    }
                },
                clearRatings: function () {
                    for (var ratingID in this.selectedRatings) {
                        var baseID = this.selectedRatings[ratingID].baseID;
                        for (var i = 0; i < 5; i++) {
                            var elStar = document.getElementById(baseID + '_' + i);
                            if (elStar) elStar.className = 'gig-comments-star-editable';
                        }
                        var elDetails = document.getElementById(baseID + '_details');
                        if (elDetails) elDetails.innerHTML = '';
                    }
                    this.selectedRatings = {};
                },
                validatePost: function (replyID, onlyHideError) {
                    var baseElid = this.containerID;
                    if (replyID) baseElid = this.containerID + '-reply-' + replyID;
                    var lblError = document.getElementById(baseElid + '-validationError');
                    if (onlyHideError && lblError && (lblError.style.display == 'none' || lblError.style.display == '')) return;
                    var This = this;
                    var fncValidate = function () {
                        This.validatePost(replyID);
                    }

                    var tbComment = document.getElementById(baseElid + '-commentTextarea')
                    var tbCommentTitle = document.getElementById(baseElid + '-titleTextbox')
                    var tbOverallRatingContainer = document.getElementById(baseElid + '_rating__overall');

                    var v = true;
                    var el;
                    if (tbComment) tbComment.parentNode.parentNode.style.borderColor = '';
                    if (tbCommentTitle) tbCommentTitle.style.borderColor = '';
                    if (tbOverallRatingContainer) tbOverallRatingContainer.className = 'gig-comments-addComment-ratings';

                    if ((replyID || this._settings.enableCommentBody.split('_')[1] == 'mandatory') && (!tbComment || (tbComment.value.replace(/ /g, '').replace(/\n/g, '').replace(/\r/g, '') == ''))) {
                        tbComment.parentNode.parentNode.style.borderColor = '#e70707';
                        el = tbComment;
                        tbComment.onchange = fncValidate;
                        v = false;
                    }
                    if (this._settings.enableCommentTitles.split('_')[1] == 'mandatory' && tbCommentTitle && tbCommentTitle.value.replace(/ /g, '').replace(/\n/g, '').replace(/\r/g, '') == '') {
                        tbCommentTitle.style.borderColor = '#e70707';
                        el = tbCommentTitle;
                        tbCommentTitle.onchange = fncValidate;
                        v = false;
                    }
                    if (!replyID && this._settings.enableRatings.split('_')[1] == 'mandatory' && (!this.selectedRatings || !this.selectedRatings['_overall'])) {
                        tbOverallRatingContainer.className = 'gig-comments-addComment-ratings gig-comments-addComment-ratings-error';
                        v = false;
                    }

                    if (lblError) {
                        if (!v) {
                            lblError.innerHTML = this._settings.mode == 'ratingsOnly' ? TEXT('please_select_your_rating') : TEXT('please_fill_required_fields');
                            lblError.style.display = 'block';
                        } else {
                            lblError.style.display = 'none';
                            lblError.innerHTML = '';
                        }
                    }
                    return { v: v, el: el };
                },
                postButtonClicked: function (replyID, dontPublish) {
                    var baseElid = this.containerID;
                    if (replyID) baseElid = this.containerID + '-reply-' + replyID;

                    if (this._user.isGuest) {
                        document.cookie = '_gig_comments_locked=1; path=/';
                        this._user.locked = true;
                    }
                    var tbComment = document.getElementById(baseElid + '-commentTextarea')
                    var tbCommentTitle = document.getElementById(baseElid + '-titleTextbox')
                    var commentText = tbComment ? window.gigya.pluginUtils.text.normalizeLinebreaks(tbComment.value) : '';
                    var commentTitle = tbCommentTitle ? tbCommentTitle.value : null;

                    var oValidation = this.validatePost(replyID);
                    if (!oValidation.v) {
                        if (oValidation.el) oValidation.el.focus();
                        return;
                    }

                    if (!this._user.isGuest && !this._user.isConnected) { //logged out
                        var This = this;
                        var elID = this.isMobileUI ? baseElid : (baseElid + '-postButton');
                        var el = this.isMobileUI ? null : document.getElementById(elID);
                        this.loginClicked(elID, el, function () {
                            This.postButtonClicked(replyID, true);
                        }, !this.isMobileUI); //feature #9676
                        return;
                    }

                    if (tbCommentTitle) tbCommentTitle.value = '';
                    if (tbComment) tbComment.value = '';
                    if (!replyID) {
                        var ratings = {};
                        for (var ratingID in this.selectedRatings) {
                            ratings[ratingID] = parseInt(this.selectedRatings[ratingID].value);
                        }
                    }
                    this.clearRatings();
                    var providers = this.saveCheckedProviders(baseElid).join(',');
                    var timestamp = (new Date()).getTime();
                    var pendingCommentId = 'pending_' + timestamp;
                    var oComment = this.getCommentByID(replyID);

                    if (oComment != null) {
                        oComment.closeReplybox();
                    }

                    var photoURL = this._user.thumbnailURL;
                    if (!photoURL || photoURL == '') photoURL = this._user.photoURL;
                    photoURL = window.gigya.global.getPhotoURL(photoURL);
                    var username = this._user.nickname;
                    if (username == '') username = 'Anonymous';

                    var loginProvider = this.getLoginProvider();
                    var pendingComment =
                    {
                        timestamp: timestamp,
                        commentText: commentText,
                        threadTimestamp: timestamp,
                        ID: pendingCommentId,
                        parentID: replyID,
                        sender: {
                            photoURL: photoURL,
                            loginProvider: loginProvider,
                            name: username
                        },
                        isTemp: true,
                        commentTitle: commentTitle,
                        isPost: true
                    }

                    if (this.textMode == 'reviews' && this._settings.enableRatings != 'disabled')
                        pendingComment.ratings = ratings;

                    if (this._settings.moderationState == 1) pendingComment.isPending = true;

                    var This = this;
                    var commentParams = window.gigya.utils.object.removeUndefined({
                        categoryID: this._p['categoryID'],
                        streamID: this._p['streamID'],
                        cid: this._p['cid'],
                        commentText: commentText,
                        parentID: replyID,
                        commentTitle: commentTitle,
                        ratings: ratings
                    });

                    if (this._user.isGuest) {
                        commentParams.guestName = this._user.nickname;
                        commentParams.guestEmail = this._user.email;
                    }
                    var e = window.gigya.utils.object.clone(commentParams);
                    if (!e.guestName) e.guestName = '';
                    if (!e.guestEmail) e.guestEmail = '';
                    e.eventName = 'beforeCommentSubmitted';
                    if (window.gigya.events.dispatchForWidget(e, this._p) == false) return;
                    //commentParams.commentText = pendingComment.commentText = e.commentText;
                    //commentParams.commentTitle = pendingComment.commentTitle = e.commentTitle;
                    commentParams = e;
                    if (e.guestName == '') delete e.guestName;
                    if (e.guestEmail == '') delete e.guestEmail;
                    var divComment = this.addComment(pendingComment);
                    var parentNode;
                    if (replyID) {
                        parentNode = document.getElementById('gig-replies-' + replyID);
                    } else {
                        parentNode = document.getElementById(this.containerID + '-comments');
                    }

                    if (this._settings.sortBy.toLowerCase() == 'dateasc') {
                        parentNode.appendChild(divComment);
                    } else {
                        parentNode.insertBefore(divComment, parentNode.firstChild);
                    }



                    commentParams.callback = function (e) {
                        if (This._user.isGuest) This._drawCommentBox();
                        if (e.errorCode > 0) {
                            var errorText;
                            switch (e.errorCode) {
                                case 403037:
                                    errorText = TEXT('only_one_review_per_product_is_allowed');
                                    break;
                                default:
                                    errorText = TEXT('an_error_has_occurred_please_try_again_later', '%errorCode', e.errorCode);
                            }
                            var errDiv = document.getElementById(This.containerID + '-error-' + pendingCommentId);
                            if (errDiv && errorText) errDiv.innerHTML = errorText
                            window.gigya.events.dispatchErrorFromResponse(This._p, e);
                        } else {
                            var newComment = window.gigya.utils.object.clone(pendingComment, true);
                            for (var p2 in e.comment) {
                                newComment[p2] = e.comment[p2];
                            }
                            newComment.isTemp = false;
                            newComment.isPost = true;
                            if (This.textMode != 'reviews' || newComment.level == 0) {
                                This._commentCount++;
                            }

                            for (var i = 0; i < This._commentsRawData.length; i++) {
                                if (This._commentsRawData[i].ID == pendingCommentId) {
                                    This._commentsRawData.splice(i, 1); //remove pending comment
                                    break;
                                }
                            }
                            delete This.commentsInstances[pendingCommentId]; //remove pending comment

                            This.addComment(newComment, divComment); // update comment div with new comment
                            var newCommentObj = This.getCommentByID(newComment.ID);
                            newCommentObj.updateVoteUI();
                            This.updateCount();
                            if (replyID) newCommentObj.getParentComment().updateRepliesCount(); // update parent comment count

                            var oEvent = {
                                eventName: 'commentSubmitted',
                                streamID: This._p.streamID,
                                categoryID: This._p.categoryID,
                                commentText: commentText,
                                comment: e.comment,
                                mode: This.textMode
                            }
                            if (ratings) oEvent.ratings = ratings;
                            if (commentTitle) oEvent.commentTitle = commentTitle;
                            if (e.comment && e.comment.providerPostIDs) {
                                oEvent.providerPostIDs = e.comment.providerPostIDs;
                            }
                            if (This._user.UID != '') {
                                oEvent.user = This._user;
                            } else if (This._user.isGuest) {
                                oEvent.guestUser = { nickname: This._user.nickname, email: This._user.email };
                            }

                            if (This.textMode == 'reviews') {
                                if (!This._userComments) This._userComments = [];
                                This._userComments.push(e.comment);
                                This._drawCommentBox();
                            }

                            window.gigya.events.dispatchForWidget(oEvent, This._p);
                        }
                    }
                    if (this._settings.sortBy.toLowerCase() == 'dateasc') {
                        this.nopaging = true;
                    }

                    commentParams.userAction = this.getUserAction(pendingComment);
                    commentParams.enabledProviders = providers;
                    if (this._p.commentTags) commentParams.tags = this._p.commentTags;

                    if (dontPublish || !providers) commentParams.enabledProviders = ' ';
                    window.gigya.comments.postComment(this._c, commentParams);
                    this.setStreamInfoIfNeeded();
                },
                addComment: function (rawComment, updateDiv) {
                    if (this._settings.sortBy.toLowerCase() == 'dateasc') {
                        this._commentsRawData.push(rawComment);
                    } else {
                        this._commentsRawData.unshift(rawComment);
                    }
                    this._comments = pluginScope.buildCommentsTree(this._commentsRawData, this._settings.sortBy, this);
                    var c = this.getCommentByID(rawComment.ID);

                    var commentDiv = document.createElement('div');
                    commentDiv.innerHTML = pluginScope.drawComments([c], this, c.level);
                    commentDiv = commentDiv.firstChild;
                    if (updateDiv) {
                        updateDiv.parentNode.insertBefore(commentDiv, updateDiv);
                        updateDiv.parentNode.removeChild(updateDiv);
                    }
                    return commentDiv;
                },
                drawNewComments: function (arComments, markAsNew) {
                    var lastCommentDiv;
                    for (var i = 0; i < arComments.length; i++) {
                        var c = arComments[i];
                        var commentDiv = c.getContainer();
                        if (!commentDiv) {
                            var commentDivContainer = document.createElement('div');
                            commentDivContainer.innerHTML = pluginScope.drawComments([c], this, c.level);
                            commentDiv = commentDivContainer.firstChild;
                            var parentDiv = document.getElementById('gig-replies-' + c.parentID);
                            if (!parentDiv) parentDiv = document.getElementById(this.containerID + '-comments');
                            if (lastCommentDiv) {
                                if (lastCommentDiv.nextSibling) {
                                    parentDiv.insertBefore(commentDiv, lastCommentDiv.nextSibling);
                                } else {
                                    parentDiv.appendChild(commentDiv);
                                }
                            } else {
                                parentDiv.insertBefore(commentDiv, parentDiv.firstChild);
                            }
                            c.updateVoteUI();
                            c.updateRepliesCount();
                            if (markAsNew) c.markAsNew();

                            if (this._settings.repliesCollapsed) c.collapse();
                            if (this._state.flags[c.id]) c.markAsFlagged();
                        } else if (markAsNew) {
                            //c.unmarkAsNew();
                            if (c.children) {
                                this.drawNewComments(c.children, markAsNew);
                            }
                        }
                        lastCommentDiv = commentDiv;
                    }
                    this.updateCount();
                },
                updateCount: function () {
                    var el = this.getElementByCommentsClass('commentList-header-commentsCount');
                    if (el) {
                        var countText = '';
                        if (!this._settings.disableCommentsCount && this._commentCount != null) {
                            if (this._commentCount == 1)
                                countText = TEXT(this.textMode == 'reviews' ? 'one_review' : 'one_comment');
                            else
                                countText = TEXT((this.textMode == 'reviews' ? 'num_reviews' : 'num_comments'), '%num', this._commentCount);

                            if (this._p.lang == 'fr' && this._commentCount == '0') {
                                countText = TEXT(this.textMode == 'reviews' ? 'one_review' : 'one_comment').replace('1', '0');
                            }
                        }

                        el.innerHTML = countText;
                    }
                },
                getUserAction: function (comment) {
                    var act = this._p['userAction'];
                    if (comment.level > 0) act = this._p['replyUserAction'];
                    if (!act) {
                        act = new window.gigya.socialize.UserAction();
                    } else {
                        act = act.clone();
                    }
                    if (!act.title || act.title == '') {
                        if (this.textMode == 'reviews' && !comment.level) {
                            if (comment.ratings && comment.ratings['_overall']) {
                                act.title = TEXT('i_rated_pagetitle_as_rating_5', '%rating', comment.ratings['_overall']).replace('%pageTitle', document.title);;
                            } else {
                                act.title = TEXT('my_review_on_colon_pagetitle', '%pageTitle', document.title);
                            }
                        } else {
                            act.title = TEXT('commented_on_colon_pagetitle', '%pageTitle', document.title);
                        }
                    }
                    if (!act.linkBack || act.linkBack == '') act.linkBack = document.location.href;
                    act.userMessage = comment.commentText;

                    var placeholders = {
                        commentTitle: comment.commentTitle,
                        commentText: comment.commentText,
                        rating: (comment.ratings ? comment.ratings['_overall'] : null)
                    }
                    placeholders.ratingDescription = [TEXT('i_hate_it'), TEXT('i_dont_like_it'), TEXT('its_ok'), TEXT('i_like_it'), TEXT('i_love_it')][placeholders.rating - 1];
                    return window.gigya.global.fillUserActionTemplate(act, placeholders);
                },
                saveCheckedProviders: function (id) {
                    var arCheckedProviders = [];
                    if (this.isMobileUI) {
                        var el = document.getElementById(id + '-checkbox-provider-cb');
                        if (el) {
                            var identity = this.getLoginProvider();
                            if (el.checked) arCheckedProviders.push(identity);
                            document.cookie = '_gig_comments_cb_' + identity + '=' + (el.checked ? 1 : 0) + ';expires=Wed, 01 Jan 2020 12:00:00 GMT";path=/;"';
                        }
                    } else {
                        for (var identity in this._user.identities) {
                            var el = document.getElementById(id + '-checkbox-' + identity + '-image');
                            if (el) {
                                if (el.checked) arCheckedProviders.push(identity);
                                document.cookie = '_gig_comments_cb_' + identity + '=' + (el.checked ? 1 : 0) + ';expires=Wed, 01 Jan 2020 12:00:00 GMT";path=/;"';
                            }

                        }
                    }
                    return arCheckedProviders;
                },
                getSingleShareProvider: function () {
                    var loginProvider = this.getLoginProvider();
                    if (loginProvider && window.gigya.socialize.getProvidersForRequiredCapabilities(window.gigya.socialize.getProvidersByName(loginProvider), ['actions']).length > 0) {
                        return loginProvider;
                    } else {
                        var arProviders = window.gigya.socialize.getProvidersByName(this._p.enabledProviders ? this._p.enabledProviders : '*');
                        arProviders = window.gigya.socialize.hideProvidersByName(arProviders, this._p.disabledProviders ? this._p.disabledProviders : '');
                        var arShareProviders = window.gigya.socialize.getProvidersForRequiredCapabilities(arProviders, ['actions']);
                        if (arShareProviders.length > 0) {
                            return arShareProviders[0].name;
                        } else if (arProviders.length > 0) {
                            return arProviders[0].name
                        }
                    }
                },
                getLoginProvider: function () {
                    var loginProvider = this._user.loginProvider;
                    if (!loginProvider) {
                        for (var identity in this._user.identities) {
                            loginProvider = identity;
                            break;
                        }
                    }
                    return loginProvider;
                },
                checkboxClicked: function (elid, blockUncheck) {
                    var el = document.getElementById(elid);
                    if (el) {
                        var arElid = elid.split('-');
                        var provider = this.isMobileUI ? this.getSingleShareProvider() : arElid[arElid.length - 1];
                        var identity = this._user.identities[provider];
                        var isMissingPermissions = (identity && identity.missingPermissions && identity.missingPermissions.toLowerCase().indexOf('actions') != -1);
                        var elImg = document.getElementById(elid + '-image');
                        var currentClassName = elImg ? elImg.className : '';
                        var checked = this.isMobileUI ? el.checked : elImg.checked;
                        if (checked && blockUncheck) return;
                        var rootClass = (elid.indexOf('-reply-') != -1 ? 'replyBox' : 'commentBox');

                        if (!checked && (!identity || isMissingPermissions)) {
                            var This = this;
                            var params = {
                                pendingRegistration: this._p.pendingRegistration,
                                cid: this._p.cid,
                                context: this._p.context,
                                permissions: 'actions',
                                provider: provider
                            }
                            if (isMissingPermissions) {
                                params.callback = function (e) {
                                    if (e.errorCode == 0) {
                                        if (This.isMobileUI) {
                                            el.checked = true;
                                        } else {
                                            elImg.checked = true;
                                            elImg.className = 'gig-comments-checkboxImage gig-comments-' + rootClass + '-checkboxImage gig-comments-checkboxImage-checked gig-comments-' + rootClass + '-checkboxImage-checked';
                                        }
                                    }
                                }
                                window.gigya.socialize.requestPermissions(this._c, params);
                            } else {
                                params.callback = function (e) {
                                    if (e.user) {
                                        This._user = e.user;
                                        if (this.isMobileUI) {
                                            el.checked = true;
                                        } else {
                                            elImg.checked = true;
                                            elImg.className = 'gig-comments-checkboxImage gig-comments-' + rootClass + '-checkboxImage gig-comments-checkboxImage-checked gig-comments-' + rootClass + '-checkboxImage-checked';
                                        }

                                    }
                                }
                                window.gigya.socialize.addConnection(this._c, params);
                            }
                        } else if (!this.isMobileUI) {
                            if (checked) {
                                elImg.className = 'gig-comments-checkboxImage gig-comments-' + rootClass + '-checkboxImage';
                            } else {
                                elImg.className = 'gig-comments-checkboxImage gig-comments-' + rootClass + '-checkboxImage gig-comments-checkboxImage-checked gig-comments-' + rootClass + '-checkboxImage-checked';
                            }
                            elImg.checked = !checked;
                        }
                    }
                },
                updateCheckboxesDisplay: function () {
                    for (var i = 0; i < this.arProviders.length; i++) {
                        var provider = arProviders[i];
                        //var display = (this._user.identities[provider.name] ? '' : 'none');
                        if (this._user.identities && this._user.identities[provider.name]) {
                            var el = document.getElementById(this.containerID + '-checkbox-' + arProviders[i]);
                            el.style.display = '';
                            if (this.lastReplyId) {
                                el = document.getElementById(this.containerID + '-reply-' + this.lastReplyId + '-checkbox-' + arProviders[i]);
                                if (el) el.style.display = '';
                            }
                        }
                    }
                },
                isEmail: function (s) {
                    s = s.replace(/(^[ ]+|[ ]+$)/g, ''); // remove prefix and suffix spaces
                    if (!(window.gigya.global.isEmail(s))) return false;
                    return true;
                },
                guestLoginClicked: function (id) {
                    var nickname = document.getElementById(id + '-nickname');
                    var email = document.getElementById(id + '-email');
                    if (nickname.value.replace(/ /g, '').length < 3 || !nickname.watermarkCleared) {
                        var errorText = TEXT('nickname_should_be_at_least_3_characters');
                        document.getElementById(id + '-guestErrorPlaceholder').innerHTML = errorText;
                    } else if ((this._settings.isGuestEmailRequired || email.watermarkCleared) && !this.isEmail(email.value)) {
                        var errorText = TEXT('please_provide_a_valid_email_address');
                        document.getElementById(id + '-guestErrorPlaceholder').innerHTML = errorText;
                    } else {
                        document.cookie = '_gig_comments_nickname=' + escape(nickname.value) + '; path=/';
                        if (email.value != '' && email.watermarkCleared) document.cookie = '_gig_comments_email=' + escape(email.value) + '; path=/';

                        this._user = this._getGuestUser();
                        this._updateUserInfo();
                    }
                },
                closeLastReply: function () {
                    if (this.lastReplyId != null) {
                        this.getCommentByID(this.lastReplyId).closeReplybox();
                    }
                },
                replyClicked: function (replyId, defaultVal) {
                    if (this.lastReplyId == replyId) {
                        this.closeLastReply();
                        return;
                    }
                    var user = this._user;
                    this.closeLastReply();
                    var id = this.containerID + '-reply-' + replyId;
                    var item = this.buildCommentBoxItem(item, replyId);
                    item.width = this._p.width

                    var template = this._templates['commentBox'];
                    document.getElementById(id).innerHTML = window.gigya.utils.templates.fill(template, item);
                    document.getElementById(id).style.display = 'block';

                    if (defaultVal) document.getElementById(id + '-commentTextarea').value = defaultVal;

                    var el = document.getElementById(this.containerID + '-replybutton-' + replyId);
                    el.className = 'gig-comments-button gig-comments-button-reply gig-comments-button-down gig-comments-button-reply-down';

                    this._checkProviders(id);
                    var commentTextarea = document.getElementById(id + '-commentTextarea');
                    if (commentTextarea) commentTextarea.focus();
                    this.lastReplyId = replyId;
                },
                buildCommentBoxItem: function (item, replyId) {
                    var name;
                    if (replyId) name = this.getCommentByID(replyId).username;
                    if (!item) item = {};
                    var This = this;
                    var user = this._user;
                    if (replyId) {
                        item.id = this.containerID + '-reply-' + replyId;
                        item.rootClass = 'replyBox';
                        item.closeIcon = this.isMobileUI ? '' : this._templates['closeIcon'];
                        item.onCloseClicked = this.getCommentByID(replyId).getRefString() + '.closeReplybox()';
                        item.onPostButtonClicked = this.getRefString() + '.postButtonClicked(\'' + replyId + '\')';
                        item.post_a_new_comment = TEXT(this.textMode == 'reviews' ? 'comment_on_username_review' : 'reply_to_username', '%username', window.gigya.utils.sanitize.sanitizeHTML(window.gigya.global.wbr(name, 20)));
                    } else {
                        item.id = this.containerID;
                        item.rootClass = 'commentBox';
                        item.onPostButtonClicked = this.getRefString() + '.postButtonClicked()';
                        item.post_a_new_comment = this.textMode == 'reviews' ? TEXT('post_your_review') : TEXT('post_a_new_comment');
                        item.closeIcon = '';
                    }

                    item.login = this.isMobileUI ? (this.textMode == 'reviews' ? TEXT('login_to_review') : TEXT('login_to_comment')) : TEXT('login')
                    item.or = TEXT('or');
                    item.guest = TEXT('guest');

                    item.guestDropdown = this._settings.allowGuest ? this._templates['guestDropdown'] : '';
                    item.loginDropdown = this._templates['loginDropdown'];
                    item.userImage = this._templates['userImage'];
                    item.photoDiv = this._templates['photoDiv48'];
                    item.addComment = this._templates['addComment'];
                    item.postButton = this._templates['postButton'];
                    item.followLink = (!this.isMobileUI && !replyId) ? this._templates['followLink'] : '';
                    item.validationErrorPlaceholder = this._templates['validationErrorPlaceholder'];


                    item.ratings = '';
                    item.titleTextbox = '';
                    item.addCommentTextarea = '';

                    if (!this._settings.enableCommentBody || this._settings.enableCommentBody != 'disabled') item.addCommentTextarea = this._templates['addCommentTextarea'];
                    item.maxLength = this._settings.maxCommentLength;

                    var mandatoryMark = this._settings.mode == 'ratingsOnly' ? '' : '<span class="gig-comments-mandatoryMark">&#160;*</span>';
                    if (!replyId) {
                        if (this._settings.enableRatings && this._settings.enableRatings != 'disabled') {
                            this._settings.ratings = { _overall: TEXT('overall_rating') };
                            var ratingTemplate = this._templates['editableRating'];
                            for (var ratingID in this._settings.ratings) {
                                item.ratings += window.gigya.utils.templates.fill(ratingTemplate, {
                                    id: item.id + '_rating_' + ratingID,
                                    ratingID: ratingID,
                                    details: this.isMobileUI ? [] : [TEXT('i_hate_it'), TEXT('i_dont_like_it'), TEXT('its_ok'), TEXT('i_like_it'), TEXT('i_love_it')],
                                    name: this._settings.ratings[ratingID] + ':' + (this._settings.enableRatings.split('_')[1] == 'mandatory' ? mandatoryMark : ''),
                                    onClick: this.getRefString() + '.onRatingClick(this)',
                                    onMouseOver: this.getRefString() + '.onRatingMouseOver(this)',
                                    onMouseOut: this.getRefString() + '.onRatingMouseOut(this)',
                                    actionAttribute: this.isMobileUI ? 'ontouchstart' : 'onclick'
                                });
                            }
                        }
                        if (this._settings.enableCommentTitles && this._settings.enableCommentTitles != 'disabled') item.titleTextbox = this._templates['titleTextbox'];
                    }

                    var labelTemplate = this._templates['addCommentLabel'];

                    var titleLabelText = (item.titleTextbox ? (this.textMode == 'reviews' ? TEXT('summary_colon') : '') : '');
                    if (titleLabelText != '' && this._settings.enableCommentTitles.split('_')[1] == 'mandatory') titleLabelText += mandatoryMark;
                    item.titleLabel = titleLabelText != '' ? window.gigya.utils.templates.fill(labelTemplate, { labelID: 'titleLabel', labelText: titleLabelText, rootClass: item.rootClass }) : '';

                    var commentLabelText = (replyId || !item.addCommentTextarea ? '' : (this.textMode == 'reviews' ? TEXT('review_colon') : ''));
                    if (commentLabelText != '' && this._settings.enableCommentBody.split('_')[1] == 'mandatory') commentLabelText += mandatoryMark;
                    item.commentLabel = commentLabelText != '' ? window.gigya.utils.templates.fill(labelTemplate, { labelID: 'commentLabel', labelText: commentLabelText, rootClass: item.rootClass }) : '';

                    item.providersCheckboxes = this._templates['providersCheckboxes'];
                    item.providersCheckboxesContent = this._templates['providersCheckboxesContent'];

                    item.onLoginClick = this.getRefString() + '.loginClicked(\'' + item.id + '\')';
                    item.onGuestClick = this.getRefString() + '.guestClicked(\'' + item.id + '\')';

                    var photoURL = this._user.photoURL;
                    if (!photoURL || photoURL == '') photoURL = this._user.thumbnailURL;
                    photoURL = window.gigya.global.getPhotoURL(photoURL);
                    if (!photoURL || photoURL == '') photoURL = imgBase + 'avatar_48x48.gif';
                    item.photoURL = photoURL;
                    var username = user.nickname;
                    if (username) username = window.gigya.utils.sanitize.sanitizeHTML(window.gigya.global.wbr(username, 20)).replace(/\$/g, '&#36;');
                    if (username == '') username = 'Anonymous';
                    item.username = username;
                    item.providerImage = '';
                    item.drawProviders = function () { return This._drawProviders(item.id) };

                    item.share_to = this.isMobileUI ? '' : TEXT('share_to');
                    item.post = TEXT('post');

                    item.onLogoutClick = this.getRefString() + '.logout()';
                    item.onCheckboxClicked = this.getRefString() + '.checkboxClicked(this.id)';
                    item.onFollowClicked = this.getRefString() + '.onFollowClicked()';

                    if (!pluginScope.isSharePossible()) {
                        item.share_to = '';
                        item.providersCheckboxes = '';
                    }

                    if (!this._user.isConnected) {
                        item.share_to = '';
                    }
                    var loginProvider = this.getLoginProvider();
                    if (loginProvider) {
                        var provider = window.gigya.socialize._getProviderByName(loginProvider);
                        if (provider && provider.ID != 6002 /*Site*/) {
                            item.providerImage = this._templates['providerImage'];
                            item.providerImageURL = imgBase + 'providers/' + loginProvider + 'User_14x14.gif';
                        }
                    }
                    if (this._settings.useSiteLogin) {
                        item.loginDropdown = this._templates['loginDropdownNative'];
                    }
                    if (this._user.locked) {
                        item.logoutLink = '';
                    } else {
                        item.logoutLink = this._templates['logoutLink'];
                    }

                    item.loginCanvas = this._templates['loginCanvas'];
                    if (!this._user.isGuest && !this._user.isConnected) { //logged out
                        if (this.isMobileUI) {
                            item.loginCanvasContent = this._templates['loginCanvas_loggedOut_mobile'];
                        } else if (this._settings.allowGuest) {
                            item.loginCanvasContent = this._templates['loginCanvas_loggedOutWithGuest'];
                        } else {
                            item.loginCanvasContent = this._templates['loginCanvas_loggedOut'];
                        }
                    } else if (this._user.isGuest) { //guest
                        item.logout = TEXT('change');
                        item.onLogoutClick = this.getRefString() + '.guestLogout()';
                        item.loginCanvasContent = this._templates['loginCanvas_loggedIn_guest'];
                    } else { //logged in
                        item.logout = TEXT('logout');
                        item.onLogoutClick = this.getRefString() + '.logout()';
                        item.loginCanvasContent = this._templates['loginCanvas_loggedIn'];
                    }
                    return item;
                },
                loginClicked: function (id, elStickTo, onLogin, aboveElement) {
                    if (this._settings.useSiteLogin) {
                        window.gigya.events.dispatchForWidget({ eventName: 'siteLoginClicked' }, this._p);
                    } else {
                        var divLogin = document.getElementById(id + '-login');
                        var elDropdown = document.getElementById(id + '-loginDropdown');
                        var marginBottom = -1;
                        var This = this;
                        if (!elStickTo) {
                            elStickTo = elDropdown;
                            marginBottom = -2;
                        }
                        if (!elStickTo) return;
                        if (divLogin) {
                            if (divLogin.style.display != 'none') {
                                divLogin.fncHide();
                            } else {
                                divLogin.fncShow();
                            }
                        } else {
                            var w = (elStickTo.offsetWidth < 140 ? 140 : elStickTo.offsetWidth);
                            if (this.isMobileUI && w < 250) {
                                w = document.body.offsetWidth - 6;
                            }
                            divLogin = document.createElement('div');
                            divLogin.id = id + '-login';
                            divLogin.className = 'gig-comments-container gig-comments-loginUI';
                            divLogin.innerHTML = (this.isMobileUI ? '' : '<div class="gig-comments-loginUI-pleaseLogin" id="' + divLogin.id + '-pleaseLogin">' + TEXT('please_login') + '</div>') + '<div id="' + divLogin.id + '-loginUI" class="gig-comments-loginUI-content"></div>';
                            divLogin.fncHide = function (e) {
                                if (e) {
                                    if (e.target && (e.target.id.indexOf(divLogin.id) != -1 || e.target == elStickTo)) return;
                                    if (e.srcElement && (e.srcElement.id.indexOf(divLogin.id) != -1 || e.srcElement == elStickTo)) return;
                                }
                                window.gigya.utils.DOM.hideByID(divLogin.id);
                                if (document.attachEvent) {
                                    document.detachEvent('onclick', divLogin.fncHide);
                                } else if (document.addEventListener) {
                                    document.removeEventListener('click', divLogin.fncHide, false);
                                }
                                if (elDropdown) elDropdown.className = 'gig-comments-dropdown gig-comments-dropdown-login';
                                divLogin.fncHide = null;
                                if (divLogin && divLogin.parentNode) divLogin.parentNode.removeChild(divLogin);
                            }
                            divLogin.fncShow = function () {
                                window.gigya.utils.DOM.showByID(divLogin.id);
                                window.setTimeout(function () {
                                    window.gigya.pluginUtils.DOM.removeElementOnDocClick(divLogin, null, null);
                                }, 50);
                                var pos = window.gigya.global._GetElementPos(elStickTo);
                                divLogin.style.left = '' + (window.gigya.localInfo.quirksMode ? pos.left - 2 : pos.left) - w + elStickTo.offsetWidth + 'px';
                                divLogin.style.top = '' + (pos.top + (aboveElement ? 0 : (elStickTo.offsetHeight + marginBottom + (window.gigya.localInfo.quirksMode ? -2 : 0)))) + 'px';
                                if (parseInt(divLogin.style.left) < 0) {
                                    divLogin.style.left = '3px';
                                }
                                if (elDropdown) {
                                    elDropdown.className = 'gig-comments-dropdown gig-comments-dropdown-login gig-comments-dropdown-down gig-comments-dropdown-login-down';
                                }
                            }

                            document.body.appendChild(divLogin);

                            var params = {
                                pendingRegistration: this._p.pendingRegistration,
                                context: this._p.context,
                                permissions: 'actions',
                                UIConfig: (this._p.addConnectionsUIConfig ? this._p.addConnectionsUIConfig : this._p.loginUIConfig),
                                sessionExpiration: this._p.sessionExpiration,
                                enabledProviders: this._p.enabledProviders,
                                disabledProviders: this._p.disabledProviders,
                                containerID: divLogin.id + '-loginUI',
                                useHTML: true,
                                showTermsLink: false,
                                hideGigyaLink: true,
                                width: w - 2,
                                height: this.isMobileUI ? 200 : 65,
                                buttonsStyle: this.isMobileUI ? 'fulllogo' : 'standard',
                                cid: this._p.cid,
                                timestamp: this._p.timestamp,
                                signature: this._p.signature,
                                onButtonClicked: function () { window.setTimeout(divLogin.fncHide, 1000) },
                                requiredCapabilities: '',
                                onConnectionAdded: onLogin,
                                onLogin: onLogin,
                                buttonSize: this.isMobileUI ? 45 : null,
                                useLargeArrows: this.isMobileUI ? true : null
                            }
                            window.gigya.socialize.showAddConnectionsUI(this._c, params);
                            divLogin.fncShow();
                        }
                    }
                },
                redraw: function () {
                    if (this._settings && this._user) {
                        var guest = this._getGuestUser();
                        if (!this._user.isConnected && guest.nickname && this._settings.allowGuest) {
                            this._user = guest;
                        }
                        this._drawComments();
                        this._drawCommentBox();

                        this.updateFollowUI();
                        this.updateSubscribeUI();

                        if (!this.firedLoadEvent) {
                            this.firedLoadEvent = true;
                            window.gigya.events.dispatchForWidget({ eventName: 'load', version: _pi.comments.version }, this._p);
                            window.gigya.utils.DOM.enableSafeCopy(document.getElementById(this.containerID));
                        }
                    }
                },
                _updateUserInfo: function (replyID) {
                    var baseElid = this.containerID;
                    if (replyID) baseElid = this.containerID + '-reply-' + replyID;
                    var item = this.buildCommentBoxItem(item, replyID);

                    var elLoginCanvas = document.getElementById(baseElid + '-loginCanvas');
                    if (elLoginCanvas) {
                        elLoginCanvas.innerHTML = window.gigya.utils.templates.fill(item.loginCanvasContent, item);
                    }
                    var elProvidersCheckboxes = document.getElementById(baseElid + '-providersCheckboxes');
                    if (elProvidersCheckboxes) {
                        if (this._user.isConnected) {
                            if (this.isMobileUI) {
                                elProvidersCheckboxes.innerHTML = window.gigya.utils.templates.fill(item.providersCheckboxesContent, item);
                            }
                            elProvidersCheckboxes.style.visibility = 'visible';
                        } else {
                            elProvidersCheckboxes.innerHTML = window.gigya.utils.templates.fill(item.providersCheckboxesContent, item);
                            elProvidersCheckboxes.style.visibility = 'hidden';
                        }
                        /*						if (this.isMobileUI) {
                        var loginProvider = this.getLoginProvider();
                        loginProviderDisplayName = gigya.socialize.getProvidersByName(loginProvider)[0].displayName;
                        document.getElementById(id + '-checkbox-provider-text').innerHTML = 
                        }*/
                    }

                    var elPostButton = document.getElementById(baseElid + '-postButton');
                    if (elPostButton) {
                        elPostButton.innerHTML = window.gigya.utils.templates.fill(item.postButton, item);
                    }

                    var elShareTo = document.getElementById(baseElid + '-shareTo');
                    if (elShareTo) {
                        elShareTo.innerHTML = item.share_to;
                    }

                    this._checkProviders(this.containerID);
                    //close dropdowns
                    var divGuest = document.getElementById(baseElid + '-guestUI');
                    if (divGuest) divGuest.parentNode.removeChild(divGuest);
                    var divLogin = document.getElementById(baseElid + '-login');
                    if (divLogin) divLogin.parentNode.removeChild(divLogin);

                    if (this.lastReplyId && replyID != this.lastReplyId) {
                        this._updateUserInfo(this.lastReplyId);
                    }
                    if (!replyID) {
                        for (var id in this.commentsInstances) {
                            this.commentsInstances[id].updateVoteUI();
                        }
                        this._updateSelfComments();
                        this.updateFollowStatus();
                        this.updateSubscribeStatus();
                        this.updateCheckboxesDisplay();
                    }
                },
                _updateSelfComments: function () {
                    if (this._settings.allowCommentDeletion || this.textMode == 'reviews') {
                        var This = this;
                        window.gigya.comments.getUserComments(this._p, {
                            includeReplies: true, callback: function (e) {
                                if (e && e.comments) {
                                    This._userComments = e.comments;
                                    for (var i = 0; i < e.comments.length; i++) {
                                        var commentID = e.comments[i].ID;
                                        if (This.commentsInstances[commentID]) {
                                            This.commentsInstances[commentID].data.sender.isSelf = true;
                                        }
                                    }
                                } else {
                                    This._userComments = [];
                                    for (var commentID in This.commentsInstances) {
                                        This.commentsInstances[commentID].data.sender.isSelf = false;
                                    }
                                }
                                if (This.textMode == 'reviews') This._drawCommentBox();
                            }
                        });
                    }
                },
                _updateVotes: function () {
                    if (this._settings.enableVoting) {
                        var This = this;
                        window.gigya.comments.getUserVotes(this._c, {
                            callback: function (res) {
                                if (!res.userVotes) return;
                                for (var commentID in This.commentsInstances) {
                                    var comment = This.getCommentByID(commentID);
                                    if (!comment.voteInProgress) {
                                        comment.vote = res.userVotes[commentID];
                                        comment.updateVoteUI();
                                    }
                                }
                            }
                        });
                    }
                },
                _getGuestUser: function () {
                    var nickname;
                    var email;
                    if (this._settings.allowGuest) {
                        nickname = this._getCookie('_gig_comments_nickname');
                        email = this._getCookie('_gig_comments_email');
                        if (nickname != null) nickname = unescape(nickname);
                        if (email != null) email = unescape(email);
                    }
                    var user = {
                        UID: '',
                        nickname: nickname,
                        isGuest: (nickname != null),
                        email: email,
                        locked: this._getCookie('_gig_comments_locked')
                    }
                    return user;
                },
                _getInfo: function () {
                    var This = this;
                    var params = {};
                    params.oauth_token = this._p.oauth_token;
                    params.cid = this._p.cid;
                    params.callback = function (data) {
                        if (data.errorCode == 0) {
                            This._user = data.user;
                            This.redraw();
                        } else {
                            if (!This.broadcastedError) {
                                if (this.container) this.container.innerHTML = '';
                                window.gigya.events.dispatchErrorFromResponse(This._p, data);
                                This.broadcastedError = true;
                            }
                        }
                    }
                    window.gigya.socialize.getUserInfo(this._c, params);
                },
                _drawCommentBox: function () {
                    var item = this.buildCommentBoxItem();
                    var userReview;
                    if (!this._settings.allowMultipleReviewsPerUser && this._userComments) {
                        for (var i = 0; i < this._userComments.length; i++) {
                            if (!this._userComments[i].parentID) {
                                userReview = this._userComments[i];
                                break;
                            }
                        }
                    }
                    if (this.textMode == 'reviews' && userReview) {
                        window.gigya.utils.object.add(item, {
                            post_a_new_comment: TEXT('your_review'),
                            myRatingLabel: userReview.ratings && userReview.ratings['_overall'] ? TEXT('my_rating_colon') : '',
                            mySummaryLabel: userReview.commentTitle ? TEXT('summary_colon') : '',
                            myReviewLabel: userReview.commentText ? TEXT('review_colon') : '',
                            rating: '',
                            summary: userReview.commentTitle ? userReview.commentTitle : '',
                            review: userReview.commentText ? userReview.commentText : ''
                        });

                        var ratingTemplate = this._templates['rating'];
                        if (userReview.ratings && userReview.ratings['_overall']) {
                            item.rating = window.gigya.utils.templates.fill(ratingTemplate, { value: userReview.ratings ? userReview.ratings['_overall'] : 0, starClassName: 'gig-comments-star-myRating' });
                        }

                        var template = this._templates['myRating'];
                        document.getElementById(this.containerID + '-commentBox').innerHTML = window.gigya.utils.templates.fill(template, item);
                    } else if (this._settings != null && this.streamInfo.status != 'readOnly' && !this._settings.readOnly) {
                        item.width = this._p.width;
                        var template = this._templates['commentBox'];
                        var commentText = '';
                        var commentTextarea = document.getElementById(this.containerID + '-commentTextarea');
                        if (commentTextarea) ommentText = commentTextarea.value;
                        document.getElementById(this.containerID + '-commentBox').innerHTML = window.gigya.utils.templates.fill(template, item);
                        if (document.getElementById(this.containerID + '-commentTextarea')) document.getElementById(this.containerID + '-commentTextarea').value = commentText;

                        this._checkProviders(this.containerID);
                    }
                    //close dropdowns
                    var divGuest = document.getElementById(this.containerID + '-guestUI');
                    if (divGuest) divGuest.parentNode.removeChild(divGuest);
                    var divLogin = document.getElementById(this.containerID + '-login');
                    if (divLogin) divLogin.parentNode.removeChild(divLogin);
                },
                _getCookie: function (name) {
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                        if (c.indexOf(name) == 0) return c.substring(name.length + 1, c.length);
                    }
                    return null;
                },
                _checkProviders: function (id, alwaysCheck) {
                    var elProvidersCheckboxes = document.getElementById(id + '-providersCheckboxes');
                    if (elProvidersCheckboxes && this._user.isConnected) elProvidersCheckboxes.style.visibility = 'visible';

                    if (alwaysCheck || this._settings.shareToSNCheckboxChecked) {
                        if (this.isMobileUI) {
                            if (this._user.isConnected) {
                                var identity = this.getSingleShareProvider();
                                var oId = this._user.identities[identity];
                                if (!(oId.missingPermissions && oId.missingPermissions.toLowerCase().indexOf('actions') != -1)) {
                                    var cookie = this._getCookie('_gig_comments_cb_' + identity);
                                    if (cookie == null || cookie == 1) {
                                        this.checkboxClicked(id + '-checkbox-provider-cb', true);
                                    }
                                }
                            }
                        } else {
                            for (var identity in this._user.identities) {
                                var oId = this._user.identities[identity];
                                if (!(oId.missingPermissions && oId.missingPermissions.toLowerCase().indexOf('actions') != -1)) {
                                    var cookie = this._getCookie('_gig_comments_cb_' + identity);
                                    if (cookie == null || cookie == 1) {
                                        this.checkboxClicked(id + '-checkbox-' + identity, true);
                                    }
                                }
                            }
                        }
                    }
                },
                _drawProviders: function (id) {
                    var arHTML = [];
                    var enabledProviders = this._p['enabledShareProviders'] ? this._p['enabledShareProviders'] : this._p['enabledProviders'];
                    if (!enabledProviders) enabledProviders = '*';
                    var disabledProviders = this._p['disabledShareProviders'] ? this._p['disabledShareProviders'] : this._p['disabledProviders'];
                    if (!disabledProviders) disabledProviders = '';
                    arProviders = window.gigya.socialize.getProvidersByName(enabledProviders);
                    arProviders = window.gigya.socialize.hideProvidersByName(arProviders, disabledProviders);
                    arProviders = window.gigya.socialize.getProvidersForRequiredCapabilities(arProviders, ['actions']);

                    var arConnectedProviders = [];
                    var arNotConnectedProviders = [];

                    for (var i = 0; i < arProviders.length; i++) {
                        if (this._user.identities && this._user.identities[arProviders[i].name]) {
                            arConnectedProviders.push(arProviders[i]);
                        } else {
                            arNotConnectedProviders.push(arProviders[i]);
                        }
                    }
                    arProviders = arConnectedProviders.concat(arNotConnectedProviders);

                    this.arProviders = arProviders;
                    var minShareOptions = this._p.minShareOptions ? this._p.minShareOptions : 2;
                    var shownProvidersLength = Math.max(minShareOptions, arConnectedProviders.length);

                    if (this.isMobileUI) {
                        var loginProvider = this.getSingleShareProvider();
                        loginProvider = window.gigya.socialize.getProvidersByName(loginProvider)[0].displayName;
                        var item = {
                            id: id + '-checkbox-provider',
                            post_to_provider: TEXT('post_to_provider', '%provider', loginProvider)
                        }
                        var template = this._templates['providerCheckbox-mobile'];
                        arHTML.push(window.gigya.utils.templates.fill(template, item));
                    } else {
                        for (var i = 0; i < arProviders.length; i++) {
                            var provider = arProviders[i];
                            var item = {
                                id: id + '-checkbox-' + provider.name,
                                iconURL: window.gigya._.getCdnResource('/gs/i/shareBar/icons/' + provider.name + '.png'), //gigya.thisScript.base + '/gs/i/shareBar/icons/' + provider.name + '.png',
                                style: i > shownProvidersLength - 1 ? 'display:none;' : ''
                            }
                            var template = this._templates['providerCheckbox'];
                            arHTML.push(window.gigya.utils.templates.fill(template, item));
                        }
                        if (arProviders.length > shownProvidersLength) {
                            arHTML.push(window.gigya.utils.templates.fill(this._templates['moreLink'], { more: TEXT('more'), onClick: this.getRefString() + '.showMoreProvidersDialog(this, \'' + id + '\')' }));
                        }
                    }
                    return arHTML.join('');
                },
                showMoreProvidersDialog: function (el, id) {
                    var arMoreProviders = [];
                    for (var i = 0; i < this.arProviders.length; i++) {
                        var elcb = document.getElementById(id + '-checkbox-' + arProviders[i].name);
                        if (elcb && elcb.style.display == 'none') {
                            arMoreProviders.push(this.arProviders[i]);
                        }
                    }
                    this.hideMoreProvidersDialog();
                    var arProvidersHTML = [];
                    for (var i = 0; i < arMoreProviders.length; i++) {
                        var provider = arMoreProviders[i];
                        arProvidersHTML.push(window.gigya.utils.templates.fill(this._templates['moreProvider'],
                            {
                                providerName: provider.displayName,
                                iconWidth: '22px',
                                onClick: this.getRefString() + '.onMoreProviderClick(\'' + provider.name + '\',\'' + id + '\')',
                                iconURL: window.gigya._.getCdnResource('/gs/i/edit/' + provider.name + '.png')
                            }
                        ));
                    }
                    var template = this._templates['moreProvidersDialog'];
                    var item = {
                        more_share_destinations: TEXT('more_share_destinations'),
                        moreProvidersHTML: arProvidersHTML.join(''),
                        onCancel: this.getRefString() + '.hideMoreProvidersDialog()'
                    }

                    var containerID = this.containerID + '-moreProvidersDialog';
                    var divMore = window.gigya.utils.DOM.createTopLevelDiv(containerID + '_container');
                    divMore.style.position = 'absolute';
                    divMore.className = 'gig-comments-container';
                    divMore.innerHTML = window.gigya.utils.templates.fill(template, item);
                    var pos = window.gigya.global._GetElementPos(el);
                    var screenBottom = window.gigya.utils.viewport.getScroll().top + window.gigya.utils.viewport.getInnerSize().h;
                    if (pos.top + divMore.offsetHeight > screenBottom) {
                        divMore.style.top = pos.top - divMore.offsetHeight + 'px';
                    } else {
                        divMore.style.top = pos.top + el.offsetHeight + 'px';
                    }
                    divMore.style.left = pos.left + 'px';
                    var This = this;
                    divMore.fncHide = function () {
                        This.hideMoreProvidersDialog();
                    }
                    window.setTimeout(function () {
                        if (document.attachEvent) {
                            document.attachEvent('onclick', divMore.fncHide);
                        } else if (document.addEventListener) {
                            document.addEventListener('click', divMore.fncHide, false);
                        }
                    }, 50);
                },
                hideMoreProvidersDialog: function () {
                    var container = document.getElementById(this.containerID + '-moreProvidersDialog_container');
                    if (container) {
                        container.parentNode.removeChild(container);
                        if (document.detachEvent) {
                            document.detachEvent('onclick', container.fncHide);
                        } else if (document.removeEventListener) {
                            document.removeEventListener('click', container.fncHide, false);
                        }
                    }
                },
                onMoreProviderClick: function (provider, id) {
                    this.hideMoreProvidersDialog();
                    this.checkboxClicked(id + '-checkbox-' + provider, true);
                },
                start: function () {
                    if (!this.commentsInstances) this.commentsInstances = {};
                    //add css (only once).
                    var deviceType = this._p.deviceType ? this._p.deviceType.toLowerCase() : 'desktop';
                    this.isMobileUI = (deviceType == 'mobile' || (deviceType == 'auto' && window.gigya.localInfo.isMobile));
                    if (this._p.cssPrefix || pluginScope.instances_size == 1) {
                        window.gigya.global.addCSS(pluginScope.defaults.css, this._p.cssPrefix);
                        if (this.isMobileUI) {
                            window.gigya.global.addCSS(pluginScope.defaults.mobileCSS, this._p.cssPrefix);
                        } else {
                            window.gigya.global.addCSS(pluginScope.defaults.nonMobileCSS, this._p.cssPrefix);
                        }
                        if (window.gigya.localInfo.isMobile && window.gigya.localInfo.isSafari) {
                            window.gigya.global.addCSS('.gig-comments-container * {-webkit-text-size-adjust:none;}', this._p.cssPrefix);
                        }
                    }

                    var w = this._p.width;
                    document.getElementById(this.containerID).style.width = (this.isMobileUI ? '100%' : w + 'px');
                    document.getElementById(this.containerID).className = 'gig-comments-container';
                    //textareas with 100% are buggy
                    if (!this.isMobileUI) {
                        window.gigya.global.addCSS('#' + this.containerID + ' textarea.gig-comments-replyBox-textarea {width:' + (window.gigya.localInfo.quirksMode ? w - 37 : w - 30) + 'px}');
                        window.gigya.global.addCSS('#' + this.containerID + ' textarea.gig-comments-commentBox-textarea {width:' + (window.gigya.localInfo.quirksMode ? w - 17 : w - 10) + 'px}');
                    }

                    document.getElementById(this.containerID).innerHTML = '<div class="gig-comments-progress"></div>';

                    this._getInfo();
                    this._getComments();

                    var This = this;
                    window.gigya.socialize.addEventHandlers({ listenerType: 'component' }, {
                        listenerDescription: 'listener for updating a comments widget',
                        onLogout: function () { This._user = This._getGuestUser(); This._updateUserInfo(); },
                        onLogin: function (e) { This._user = e.user; This._updateUserInfo(); This._updateVotes(); },
                        onConnect: function (e) {
                            var wasConnected = This._user.isConnected;
                            This._user = e.user;
                            if (wasConnected != This._user.isConnected) This._updateUserInfo();
                            This._updateVotes();
                        },
                        onDisconnect: function (e) { This._user = e.user; if (!This._user.isConnected) This._updateUserInfo(); }
                    });
                },

                getRefString: function () {
                    return 'gigya.comments.plugins.comments.instances[\'' + encodeURIComponent(this.id) + '\']';
                }
            }
    /* end public */
    /* end comments plugin class */



    /* plugin extension */
    _pi.comments =
    {
        showCommentsUI: function (c, p, i) {
            if (typeof c['commentsServer'] != 'undefined') {
                appEngineServer = c['commentsServer']
            }
            pluginScope.setDefaultTemplates();

            pluginScope.lang = p.lang;
            pluginScope.createInstance(c, p, i);
        },
        instances: pluginScope.instances,
        version: '1',
        imgOnLoad: function (elImg, size) {
            window.gigya.global.scaleImage(elImg, size, true, function () {
                elImg.parentNode.style.visibility = '';
            });
        }
    }
    /* end plugin extension */


})(window.gigya.comments);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLmNvbW1lbnRzLnBsdWdpbnMuY29tbWVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUEsc0NBQXNDLFlBQUssY0FBYyxLQUEyQjtBQUNwRixRQUFRLFlBQUs7QUFDYix1Q0FBdUMsWUFBSyxjQUFjLEtBQWdDO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFROztBQUVyRCxrQkFBa0IsWUFBSyxxQ0FBcUM7QUFDNUQ7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7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cUJBQXFCLHFEQUFxRDtBQUM5SCxxQkFBcUI7QUFDckIsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFLO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQyxFQUFFLFlBQUssVyIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5jb21tZW50cy5wbHVnaW5zLmNvbW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGVnYWN5L3BsdWdpbnMvZ2lneWEuc2VydmljZXMuY29tbWVudHMucGx1Z2lucy5jb21tZW50cy5qc1wiKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5qc1wiIC8+XHJcbihmdW5jdGlvbiAocGx1Z2luTmFtZXNwYWNlKSB7XHJcblxyXG4gICAgdmFyIGFwcEVuZ2luZVNlcnZlciA9ICdodHRwOi8vJyArIGdpZ3lhLmdhZURvbWFpbiB8fCAnaHR0cDovL2NvbW1lbnRzLmdpZ3lhLmNvbSc7XHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLnByb3RvY29sID09ICdodHRwcycpIHtcclxuICAgICAgICBhcHBFbmdpbmVTZXJ2ZXIgPSAnaHR0cHM6Ly8nICsgZ2lneWEuZ2FlRG9tYWluIHx8ICdodHRwczovL3JlYWQtd3JpdGUuYXBwc3BvdC5jb20nO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwbHVnaW5OYW1lc3BhY2UucGx1Z2lucyA9PSAndW5kZWZpbmVkJykgcGx1Z2luTmFtZXNwYWNlLnBsdWdpbnMgPSB7fTtcclxuICAgIHZhciBfcGkgPSBwbHVnaW5OYW1lc3BhY2UucGx1Z2lucztcclxuICAgIGlmICh0eXBlb2YgX3BpLmNvbW1lbnRzICE9ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxyXG5cclxuICAgIHZhciBpbWdCYXNlID0gZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvY29tbWVudHMvJyk7IC8vZ2lneWEudGhpc1NjcmlwdC5iYXNlICsgJy9ncy9pL2NvbW1lbnRzLyc7XHJcbiAgICB2YXIganNvbnAgPSB7XHJcbiAgICAgICAgcmVxdWVzdHM6IHt9LFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIChvcHQpIHtcclxuICAgICAgICAgICAgaWYgKGpzb25wLnJlcXVlc3RzW29wdC5pZF0gIT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAganNvbnAucmVxdWVzdHNbb3B0LmlkXSA9IHt9O1xyXG4gICAgICAgICAgICBqc29ucC5yZXF1ZXN0c1tvcHQuaWRdLmNhbGxiYWNrID0gZnVuY3Rpb24gKHJldCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGpzb25wLnJlcXVlc3RzW29wdC5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnN1Y2Nlc3MpIG9wdC5zdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBqc29ucENhbGxiYWNrID0gJ19qcGdjXycgKyBvcHQuaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0LmNhbGxiYWNrRmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBvcHQuZGF0YVtvcHQuY2FsbGJhY2tGaWVsZE5hbWVdID0ganNvbnBDYWxsYmFjaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wdC5kYXRhW1wianNvbnBDYWxsYmFja1wiXSA9IGpzb25wQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvd1tqc29ucENhbGxiYWNrXSA9IGpzb25wLnJlcXVlc3RzW29wdC5pZF0uY2FsbGJhY2s7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9wdC5kYXRhLmZvcm1hdCkgb3B0LmRhdGFbXCJmb3JtYXRcIl0gPSAnanNvbnAnO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuYnVpbGRRdWVyeVN0cmluZyhvcHQudXJsLCBvcHQuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoL21zaWUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvb3BlcmEvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7IC8vaXMgSUVcclxuICAgICAgICAgICAgICAgIHVybCArPSAnJnQ9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9ICcjYj0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy92YXIgY29udGV4dCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2NyaXB0KHVybCwgb3B0LmlkKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBidWlsZFF1ZXJ5U3RyaW5nOiBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHR5cGVvZiBkYXRhW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPT0gJ3N0cmluZycgfHwgdCA9PSAnbnVtYmVyJyB8fCB0ID09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFbbmFtZV0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBlbmRzV2l0aCA9IHVybC5zdWJzdHJpbmcodXJsLmxlbmd0aCAtIDEsIDEpO1xyXG4gICAgICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9ICc/JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlbmRzV2l0aCAhPSAnJicgJiYgZW5kc1dpdGggIT0gJz8nKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVybCArPSBxdWVyeVN0cmluZy5qb2luKCcmJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhZGRTY3JpcHQ6IGZ1bmN0aW9uIChzcmMsIHJpZCwgY2FsbGJhY2spIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBsb2FkZXIgPSBmdW5jdGlvbiAoc3JjLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0LmNoYXJzZXQgPSAnVVRGLTgnXHJcblxyXG4gICAgICAgICAgICAgICAgLy9vbmx5IGllLlxyXG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlID09ICdsb2FkZWQnIHx8IHNjcmlwdC5yZWFkeVN0YXRlID09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxsIHRoZSByZXN0LlxyXG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XHJcbiAgICAgICAgICAgICAgICAoaGVhZCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbG9hZGVyKHNyYywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY2FsbGJhY2spID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmlkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vY29tbWVudHMgcGx1Z2luIGNsYXNzLlxyXG4gICAgdmFyIGNvbW1lbnRzUGx1Z2luID0gZnVuY3Rpb24gKGMsIHAsIGkpIHtcclxuICAgICAgICB0aGlzLl9jID0gYztcclxuICAgICAgICB0aGlzLl9wID0gcDtcclxuICAgICAgICB0aGlzLl9pID0gaTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX3BbJ2NvbnRhaW5lcklEJ10pO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVySUQgPSBwLmNvbnRhaW5lcklEXHJcbiAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGVzKHRoaXMuX3AudGVtcGxhdGVzKTtcclxuICAgICAgICB0aGlzLmxvYWRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHByaXZhdGUgKi9cclxuICAgIHZhciBwbHVnaW5TY29wZSA9IHtcclxuICAgICAgICBpbnN0YW5jZXM6IHt9LFxyXG4gICAgICAgIGluc3RhbmNlc19zaXplOiAwLFxyXG5cclxuICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIGlmIChiIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gYikge1xyXG4gICAgICAgICAgICAgICAgICAgICRleHRlbmQoYSwgYltpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGV4dGVuZChhLCBiKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICRleHRlbmQoeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAobmFtZSkgPT0gJ2Z1bmN0aW9uJykgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHlbbmFtZV0gIT0gdW5kZWZpbmVkICYmIHR5cGVvZiB5W25hbWVdID09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4W25hbWVdID0gJGV4dGVuZCh4W25hbWVdIHx8IHt9LCB5W25hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhbbmFtZV0gPSB5W25hbWVdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGV4dDogZnVuY3Rpb24gKHRleHRLZXksIHJlcGxhY2VTdHIsIHdpdGhTdHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnBsdWdpblV0aWxzLmxhbmcuZ2V0TG9jYWxpemVkVGV4dCgnZ2lneWEuc2VydmljZXMuY29tbWVudHMucGx1Z2lucy5jb21tZW50cy5qcycsIHRleHRLZXksIHBsdWdpblNjb3BlLmxhbmcsIHJlcGxhY2VTdHIsIHdpdGhTdHIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHJhd0NvbW1lbnRzOiBmdW5jdGlvbiAoY29tbWVudHMsIHBsdWdpbiwgbGV2ZWwpIHtcclxuICAgICAgICAgICAgLy9pZihjb21tZW50cz09bnVsbCkgY29tbWVudHM9dGhpcy5jaGlsZHJlbjtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnRzID09IG51bGwpIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoIWxldmVsKSBsZXZlbCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBodG1sID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gY29tbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICBodG1sLnB1c2goY29tbWVudC5nZXRIVE1MKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGh0bWwuam9pbihcIlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzU2hhcmVQb3NzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBub3QgaW4gaHR0cCBjb250ZXh0IC0gZm9yIGV4YW1wbGUgaU9TIHBsdWdpbiB2aWV3XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2h0dHAnKSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gU3BlY2lmaWMgY2hlY2sgZm9yIGFuZHJvaWQgcGx1Z2luIHZpZXcgLSBzaG91bGQgYmUgcmVtb3ZlZCBhZnRlciBBbmRyb2lkIFNESyBmaXhcclxuICAgICAgICAgICAgaWYgKHdpbmRvd1snX19naWdBUElBZGFwdGVyU2V0dGluZ3MnXSAmJiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID09ICdodHRwOi8vd3d3LmdpZ3lhLmNvbS8nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb3VudENoaWxkcmVuOiBmdW5jdGlvbiAobywgaWQpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBvW2lkXTtcclxuICAgICAgICAgICAgaWYgKCFhcnIpIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgY291bnQgPSBhcnIuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICAgICAgaWYgKCFjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFycltpXS5pc1JlbW92ZWRDb21tZW50KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgKz0gdGhpcy5jb3VudENoaWxkcmVuKG8sIGFycltpXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb1tpZF0uY2hpbGRyZW5Db3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnVpbGRDb21tZW50c1RyZWU6IGZ1bmN0aW9uIChpdGVtcywgc29ydERpcmVjdGlvbiwgcGx1Z2luSW5zdGFuY2UsIGRvbnRDaGFuZ2VDb3VudCkge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB7fTtcclxuICAgICAgICAgICAgdmFyIHJldCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYXJDb21tZW50c0hhc2ggPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChhckNvbW1lbnRzSGFzaFtpdGVtc1tpXS5JRF0pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgYXJDb21tZW50c0hhc2hbaXRlbXNbaV0uSURdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IGNvbW1lbnQoaXRlbXNbaV0sIHBsdWdpbkluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbltpdGVtLnBhcmVudElEXSA9IGNoaWxkcmVuW2l0ZW0ucGFyZW50SURdIHx8IFtdKS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudElEID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gYXJyW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhckNoaWxkcmVuID0gY2hpbGRyZW5baXRlbS5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJDaGlsZHJlbiAmJiBhckNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuID0gYXJDaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuQ291bnQgPSB0aGlzLmNvdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SUQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5kZXggPSByZXQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGV2ZWwgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxldmVsID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRlbXBJdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBJdGVtLmxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCArPSB0ZW1wSXRlbS5sZXZlbCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSXRlbSA9IHBsdWdpbkluc3RhbmNlLmNvbW1lbnRzSW5zdGFuY2VzW3RlbXBJdGVtLnBhcmVudElEXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0YS5sZXZlbCA9IGxldmVsOyAvLyBhZGQgbGV2ZWwgdG8gdGhlIHJhdyBjb21tZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2VDU1M6IGZ1bmN0aW9uICh0aGVDbGFzcywgZWxlbWVudCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBjc3NSdWxlcztcclxuICAgICAgICAgICAgICAgIHZhciBhZGRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgUyA9IDA7IFMgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IFMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tTXVsncnVsZXMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NSdWxlcyA9ICdydWxlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tTXVsnY3NzUnVsZXMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NSdWxlcyA9ICdjc3NSdWxlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBSID0gMDsgUiA8IGRvY3VtZW50LnN0eWxlU2hlZXRzW1NdW2Nzc1J1bGVzXS5sZW5ndGg7IFIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbU11bY3NzUnVsZXNdW1JdLnNlbGVjdG9yVGV4dCA9PSB0aGVDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW1NdW2Nzc1J1bGVzXVtSXS5zdHlsZVtlbGVtZW50XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnN0eWxlU2hlZXRzW1NdW2Nzc1J1bGVzXVtSXS5zdHlsZVtlbGVtZW50XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFkZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tTXS5pbnNlcnRSdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5zdHlsZVNoZWV0c1tTXS5pbnNlcnRSdWxlKHRoZUNsYXNzICsgJyB7ICcgKyBlbGVtZW50ICsgJzogJyArIHZhbHVlICsgJzsgfScsIGRvY3VtZW50LnN0eWxlU2hlZXRzW1NdW2Nzc1J1bGVzXS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW1NdLmFkZFJ1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnN0eWxlU2hlZXRzW1NdLmFkZFJ1bGUodGhlQ2xhc3MsIGVsZW1lbnQgKyAnOiAnICsgdmFsdWUgKyAnOycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkgeyB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgICAgICAgIGNzczogW1xyXG4gICAgICAgICAgICAgICAgICAgICcuZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciAqLCBkaXYuZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciwgLmdpZy1jb21tZW50cy1jb250YWluZXIgc3BhbiwgLmdpZy1jb21tZW50cy1jb250YWluZXIgYTpob3ZlciwgLmdpZy1jb21tZW50cy1jb250YWluZXIgYTp2aXNpdGVkLCAuZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciBhOmxpbmssIC5naWctY29tbWVudHMtY29udGFpbmVyIGE6YWN0aXZleycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYWRkaW5nOjBweDttYXJnaW46MHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7d2lkdGg6YXV0bztmbG9hdDpub25lOycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb250LWZhbWlseTphcmlhbDtmb250LXNpemU6MTJweDtjb2xvcjojNEQ0RDREO3Bvc2l0aW9uOnN0YXRpYzt0ZXh0LWFsaWduOmxlZnQ7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7IH0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNvbW1lbnQtYm9keSB1bCB7cGFkZGluZy1sZWZ0OjIwcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtY29tbWVudC1ib2R5IGxpIHtsaXN0LXN0eWxlLXR5cGU6ZGlzY30nLFxyXG4gICAgICAgICAgICAgICAgICAgICcuZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciB0ZCwgLmdpZy1jb21tZW50cy1jb250YWluZXIgdHIge3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnLmdpZy1jb21tZW50cy1jb250YWluZXIgYntmb250LXdlaWdodDpib2xkO30gLmdpZy1jb21tZW50cy1jb250YWluZXIgdXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfSAuZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciBpe2ZvbnQtc3R5bGU6aXRhbGljfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWJ1dHRvbixhOmhvdmVyLmdpZy1jb21tZW50cy1idXR0b24sYTpsaW5rLmdpZy1jb21tZW50cy1idXR0b24sYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWJ1dHRvbixhOnZpc2l0ZWQuZ2lnLWNvbW1lbnRzLWJ1dHRvbiB7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtaGVpZ2h0OiAxNXB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6IDNweDsgY29sb3I6IzRkNGQ0ZDtjdXJzb3I6cG9pbnRlcjsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplOiAxMXB4O3BhZGRpbmc6IDAgNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjQzVDN0M3O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7IHRleHQtYWxpZ246Y2VudGVyOycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdib3gtc2hhZG93OjAgMCAycHggUkdCQSgwLDAsMCwwLjE1KTstd2Via2l0LWJveC1zaGFkb3c6MCAwIDJweCBSR0JBKDAsMCwwLDAuMTUpOy1tb3otYm94LXNoYWRvdzowIDAgMnB4IFJHQkEoMCwwLDAsMC4xNSk7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWJ1dHRvbixhOmxpbmsuZ2lnLWNvbW1lbnRzLWJ1dHRvbixhOmFjdGl2ZS5naWctY29tbWVudHMtYnV0dG9uLGE6dmlzaXRlZC5naWctY29tbWVudHMtYnV0dG9uIHsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI0ZGRkZGRjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNGRkZGRkZcIiwgZW5kQ29sb3JzdHI9XCIjRUFFQkVCXCIpOycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNGRkZGRkYpLCB0bygjRUFFQkVCKSk7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNGRkZGRkYsICAjRUFFQkVCKX0nLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtYnV0dG9uLWRpc2FibGVkLGE6aG92ZXIuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1kaXNhYmxlZCxhOmxpbmsuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1kaXNhYmxlZCxhOmFjdGl2ZS5naWctY29tbWVudHMtYnV0dG9uLWRpc2FibGVkLGE6dmlzaXRlZC5naWctY29tbWVudHMtYnV0dG9uLWRpc2FibGVkIHsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3I6I2I0YjRiNDtjdXJzb3I6ZGVmYXVsdDsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI0VCRUJFQjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNFQkVCRUJcIiwgZW5kQ29sb3JzdHI9XCIjRkZGRkZGXCIpOycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNFQkVCRUIpLCB0bygjRkZGRkZGKSk7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNFQkVCRUIsICAjRkZGRkZGKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICcuZ2lnLWNvbW1lbnRzLXBvc3RCdXR0b24tY29udGFpbmVyIHtvdmVyZmxvdzpoaWRkZW59JyxcclxuICAgICAgICAgICAgICAgICAgICAnLmdpZy1jb21tZW50cy1jb250YWluZXIgYSB7em9vbToxfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtY29tbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLXJpZ2h0OjEwcHg7dGV4dC1hbGlnbjpsZWZ0O3pvb206MTt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1jb21tZW50LWNoaWxke21hcmdpbi10b3A6NXB4O2JhY2tncm91bmQtY29sb3I6I0YzRjNGMztwYWRkaW5nOjEwcHg7dGV4dC1hbGlnbjpsZWZ0O3pvb206MTt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1jb21tZW50LW91dHN0YW5kaW5nIHtiYWNrZ3JvdW5kLWNvbG9yOiNFQUY5Rjk7IG1hcmdpbi10b3A6IDVweDsgcGFkZGluZy1ib3R0b206IDEwcHg7IHBhZGRpbmctbGVmdDoxMHB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNvbW1lbnQtZmFjZWJvb2t7YmFja2dyb3VuZC1jb2xvcjojRUVFRkY0fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtY29tbWVudC1ib2R5e2NvbG9yOiM0ZDRkNGQ7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctYm90dG9tOjVweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnLmdpZy1jb21tZW50cy1jb250YWluZXIgYS5naWctY29tbWVudHMtY29tbWVudC1tZWRpYUl0ZW0ge2Rpc3BsYXk6YmxvY2s7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtjb2xvcjojMDc5NmM2OyB9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1jb21tZW50LWJvZHktcGVuZGluZ3tjb2xvcjojOTE5MTkxO30nLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1vdXRzdGFuZGluZy1iYWRnZSB7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnb3V0c3RhbmRpbmdfYmFkZ2UucG5nXFwnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7IGZsb2F0OnJpZ2h0O3dpZHRoOjM1cHg7aGVpZ2h0OjMwcHg7fScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXBob3RvSW1hZ2VTbWFsbHt0ZXh0LWFsaWduOnJpZ2h0O3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtcGhvdG9JbWFnZUxhcmdle3RleHQtYWxpZ246cmlnaHQ7d2lkdGg6NDhweDtoZWlnaHQ6NDhweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1wcm92aWRlckxvZ297bWFyZ2luLXRvcDotMTRweDt0ZXh0LWFsaWduOnJpZ2h0O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXBob3RvLWNvbnRhaW5lciB7bWFyZ2luLXJpZ2h0OjhweDtmbG9hdDpsZWZ0O3dpZHRoOjQ4cHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtY29tbWVudC1waG90by1jb250YWluZXIge21hcmdpbi1yaWdodDoxMHB4O3dpZHRoOjMycHg7fScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmdpZy1jb21tZW50cy11c2VybmFtZXtmbG9hdDpsZWZ0O2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6IzIxODFDQX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmdpZy1jb21tZW50cy1jb21tZW50LXVzZXJuYW1lIHtmbG9hdDpub25lfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uZ2lnLWNvbW1lbnRzLWNvbW1lbnQtdGltZXtwYWRkaW5nLWxlZnQ6IDVweDsgd2hpdGUtc3BhY2U6bm93cmFwO3RleHQtYWxpZ246bGVmdDtmb250LXNpemU6MTFweDtjb2xvcjojOTE5MTkxO3BhZGRpbmctdG9wOjFweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5naWctY29tbWVudHMtY29tbWVudC1uZXdJbmRpY2F0b3Ige3BhZGRpbmctbGVmdDogMTBweDsgY29sb3I6ICNGRjg5MDA7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDExcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uZ2lnLWNvbW1lbnRzLWNvbW1lbnQtdmlhRmFjZWJvb2t7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtYWxpZ246cmlnaHQ7IGNvbG9yOiM4MDgyODE7ZmxvYXQ6cmlnaHR9JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5naWctY29tbWVudHMtY29tbWVudC12aWFGYWNlYm9vay10ZXh0e2NvbG9yOiM5MTkxOTE7Zm9udC1zaXplOjExcHg7cGFkZGluZy1sZWZ0OjVweH0nLFxyXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0YXJlYS5naWctY29tbWVudHMtdGV4dGFyZWF7b3ZlcmZsb3c6YXV0bzt3b3JkLXdyYXA6YnJlYWstd29yZDt6b29tOjE7aGFzTGF5b3V0OnRydWU7aGVpZ2h0Ojc4cHg7cGFkZGluZzowcHg7cmVzaXplOiBub25lO2JvcmRlcjpub25lO2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJzF4MS5wbmdcXCcpO30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXRleHRhcmVhLXdyYXBwZXJ7Ym9yZGVyLXJhZGl1czozcHg7bWFyZ2luOiAwIDAgNXB4OyB6b29tOjE7aGFzTGF5b3V0OnRydWU7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXI6IDFweCBzb2xpZCAjQzBDMEMwO2hlaWdodDo4OHB4O2JveC1zaGFkb3c6aW5zZXQgMCAwIDRweCAjRENEQ0RDOyAtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAwIDRweCAjRENEQ0RDOyAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDRweCAjRENEQ0RDO30nLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1oZWFkZXJUZXh0e2NvbG9yOiM0ZDRkNGQ7cGFkZGluZzogM3B4IDAgN3B4O292ZXJmbG93OmhpZGRlbjt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5naWctY29tbWVudHMtbG9nb3V0TGluayB7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjExcHg7Y29sb3I6IzIxODFDQX0nLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1jaGVja2JveEltYWdle2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO21hcmdpbi1yaWdodDo1cHg7d2lkdGg6IDExcHg7IGhlaWdodDogMTZweDtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdjaGVja2JveC5naWZcXCcpfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtY2hlY2tib3hQcm92aWRlckltYWdle2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDt3aWR0aDogMTZweDtoZWlnaHQ6MTZweDtmbG9hdDpsZWZ0O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNoZWNrYm94IHtmbG9hdDpsZWZ0O2N1cnNvcjpwb2ludGVyO21hcmdpbi1sZWZ0OjVweDttYXJnaW4tcmlnaHQ6NXB4O292ZXJmbG93OmhpZGRlbjt3aWR0aDozNHB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNoZWNrYm94SW1hZ2UtY2hlY2tlZHtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdjaGVja2JveF9DaGVja2VkLmdpZlxcJyl9JyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtbG9naW5VSSwgZGl2LmdpZy1jb21tZW50cy1ndWVzdFVJe3otaW5kZXg6OTk5OTQ7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO2JvcmRlcjogMXB4IHNvbGlkICNDNUM3Qzd9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1sb2dpblVJIHtoZWlnaHQ6MTEwcHg7Ym9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtbG9naW5VSS1wbGVhc2VMb2dpbiB7bWFyZ2luLWxlZnQ6NXB4O21hcmdpbjo1cHg7Zm9udC1zaXplOjExcHg7Y29sb3I6ICM0RDRENER9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1ndWVzdFVJIHtib3JkZXItcmFkaXVzOiAwIDNweCAzcHggM3B4fScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWd1ZXN0RHJvcGRvd257b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjE1MHB4O2ZvbnQtZmFtaWx5OmFyaWFsO2ZvbnQtc2l6ZToxMHB4O2NvbG9yOiM5MTkxOTE7bWFyZ2luLXRvcDoxNnB4O21hcmdpbi1sZWZ0OjEzcHg7bWFyZ2luLXJpZ2h0OjEzcHg7bWFyZ2luLWJvdHRvbTo4cHg7ei1pbmRleDo5OTk5NX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbnB1dC5naWctY29tbWVudHMtdGV4dGJveHtib3JkZXItcmFkaXVzOjNweDt3aWR0aDogMTQ1cHg7IGhlaWdodDoyNHB4OyBsaW5lLWhlaWdodDoyMnB4O2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM5MTkxOTE7Ym9yZGVyOjFweCBzb2xpZCAjQzBDMEMwO3BhZGRpbmctbGVmdDoycHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lucHV0LmdpZy1jb21tZW50cy10ZXh0Ym94LW5pY2tuYW1lLCBpbnB1dC5naWctY29tbWVudHMtdGV4dGJveC1lbWFpbCB7d2lkdGg6MTAwJTt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnaW5wdXQuZ2lnLWNvbW1lbnRzLXRleHRib3gtbmlja25hbWUge21hcmdpbi1ib3R0b206MTBweDt9JyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lucHV0LmdpZy1jb21tZW50cy10ZXh0Ym94LXRpdGxlIHt3aWR0aDoxMDAlO2hlaWdodDogMjdweDtsaW5lLWhlaWdodDoyNXB4OyBjb2xvcjogIzRENEQ0RDtwYWRkaW5nLWxlZnQ6NXB4O21hcmdpbi1ib3R0b206MTBweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1lcnJvci10ZXh0e2NvbG9yOiNlNzA3MDc7Zm9udC13ZWlnaHQ6Ym9sZH0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXNoYXJlVG97d2hpdGUtc3BhY2U6bm93cmFwO2xpbmUtaGVpZ2h0OjE2cHg7em9vbToxO30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXJlcGx5Qm94e21hcmdpbi10b3A6NXB4O2JhY2tncm91bmQtY29sb3I6I0YzRjNGMztwYWRkaW5nOjEwcHg7cGFkZGluZy10b3A6MTJweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1sb2dpbkNhbnZhcy1jb250YWluZXIge3pvb206MTtvdmVyZmxvdzpoaWRkZW47bWFyZ2luLWJvdHRvbToxMHB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNsb3NlLWljb257ZmxvYXQ6cmlnaHQ7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O3dpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnY2xvc2VfaWNvbi5wbmdcXCcpfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtYXdhaXRpbmctbW9kZXJhdGlvbntmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiM0RDRENEQ7Zm9udC1zdHlsZTppdGFsaWN9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1jb21tZW50TGlzdC1oZWFkZXJ7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtc2l6ZToxNnB4O2NvbG9yOiM0ZDRkNGQ7Zm9udC13ZWlnaHQ6Ym9sZDtsaW5lLWhlaWdodDoyMHB4O3pvb206MTt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1jb21tZW50TGlzdC1oZWFkZXItY29tbWVudHNDb3VudHtwYWRkaW5nLXRvcDozMHB4O2Zsb2F0OmxlZnQ7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtaGVhZGVyTGlua3N7cGFkZGluZy10b3A6MzBweDtmbG9hdDpyaWdodDt6b29tOjE7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWhlYWRlckxpbmtzLXJzcyxhOmhvdmVyLmdpZy1jb21tZW50cy1oZWFkZXJMaW5rcy1yc3MsYTpsaW5rLmdpZy1jb21tZW50cy1oZWFkZXJMaW5rcy1yc3MsYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWhlYWRlckxpbmtzLXJzcyxhOnZpc2l0ZWQuZ2lnLWNvbW1lbnRzLWhlYWRlckxpbmtzLXJzcywgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWhlYWRlckxpbmtzLXN1YnNjcmliZSwgYTpob3Zlci5naWctY29tbWVudHMtaGVhZGVyTGlua3Mtc3Vic2NyaWJlLGE6bGluay5naWctY29tbWVudHMtaGVhZGVyTGlua3Mtc3Vic2NyaWJlLGE6YWN0aXZlLmdpZy1jb21tZW50cy1oZWFkZXJMaW5rcy1zdWJzY3JpYmUsYTp2aXNpdGVkLmdpZy1jb21tZW50cy1oZWFkZXJMaW5rcy1zdWJzY3JpYmUgeycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9udC13ZWlnaHQ6bm9ybWFsO2NvbG9yOiMyMTgxQ0E7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtmb250LXNpemU6MTFweDtjdXJzb3I6cG9pbnRlcjt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5naWctY29tbWVudHMtdmVydGljYWwtc2VwZXJhdG9yIHtjb2xvcjojZDhkOWQ5O21hcmdpbjowIDVweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1kb3R0ZWRMaW5le2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ1NlcExpbmUuZ2lmXFwnKTtoZWlnaHQ6IDFweDtiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7bWFyZ2luLXRvcDo1cHh9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1leHBhbmQtYXJyb3d7dmVydGljYWwtYWxpZ246Ym90dG9tO2Rpc3BsYXk6aW5saW5lLWJsb2NrOyAqZGlzcGxheTppbmxpbmU7IHpvb206MTsgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6MTNweDsgYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnaWNvbl9FeHBhbmRSZXBseS5wbmdcXCcpfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtY29sbGFwc2UtYXJyb3d7dmVydGljYWwtYWxpZ246Ym90dG9tO2Rpc3BsYXk6aW5saW5lLWJsb2NrOyAqZGlzcGxheTppbmxpbmU7IHpvb206MTsgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6MTNweDsgYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnaWNvbl9Db2xsYXBzUmVwbHkucG5nXFwnKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXJlcGxpZXMtbGVuZ3RoLWNvbnRhaW5lcnt6b29tOjE7cGFkZGluZy1sZWZ0OjEwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7KmRpc3BsYXk6aW5saW5lO2N1cnNvcjpwb2ludGVyOyB3aGl0ZS1zcGFjZTpub3dyYXA7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWxpbmssYTpob3Zlci5naWctY29tbWVudHMtbGluayxhOmxpbmsuZ2lnLWNvbW1lbnRzLWxpbmssYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWxpbmssYTp2aXNpdGVkLmdpZy1jb21tZW50cy1saW5rIHtmb250LWZhbWlseTphcmlhbDsgZm9udC1zaXplOjExcHg7IGNvbG9yOiAjMjE4MUNBO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5naWctY29tbWVudHMtcmVwbGllcy1sZW5ndGgge2Rpc3BsYXk6aW5saW5lO2ZvbnQtZmFtaWx5OmFyaWFsOyBmb250LXNpemU6MTFweDsgY29sb3I6ICMyMTgxQ0E7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWd1ZXN0RXJyb3J7Y29sb3I6I2U3MDcwNztmb250LXNpemU6MTBweDt3aWR0aDoxNTBweDtmbG9hdDpsZWZ0fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtZW1haWwtbm90LWRpc3BsYXllZC1wdWJsaWNseXtmb250LXNpemU6MTBweDtwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXByb3ZpZGVyc3tmbG9hdDpsZWZ0O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXByb3ZpZGVycy1jb250YWluZXJ7b3ZlcmZsb3c6aGlkZGVuO3pvb206MTtmbG9hdDpsZWZ0O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXByb3ZpZGVySWNvbnN7bWFyZ2luOiAwIDVweCAwIDExcHg7Zm9udC1zaXplOjFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtoZWlnaHQ6MjJweDtmbG9hdDpsZWZ0O2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ0J1dHRvbkxvZ2luX0ljb25zLnBuZ1xcJyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O3dpZHRoOjU3cHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtc2hvd01vcmVDb21tZW50cy1jb250YWluZXJ7d2lkdGg6MTAwJX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXNob3dNb3JlQ29tbWVudHN7aGVpZ2h0OjM1cHg7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDoxMHB4O2NvbG9yOiM0RDRENEQ7IGJvcmRlcjoxcHggc29saWQgI0U1RTVFNTtiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1zaG93TW9yZUNvbW1lbnRzLW92ZXJ7aGVpZ2h0OjM1cHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6I2YzZjNmMztib3JkZXI6MXB4IHNvbGlkICNDRkNGQ0Y7YmFja2dyb3VuZC1jb2xvcjojRjNGM0YzfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtc2hvd01vcmVDb21tZW50cy10ZXh0e3BhZGRpbmctdG9wOjEwcHg7Zm9udC13ZWlnaHQ6Ym9sZDt0ZXh0LWFsaWduOmNlbnRlcjt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1zaG93TW9yZUNvbW1lbnRzLXByb2dyZXNzLCBkaXYuZ2lnLWNvbW1lbnRzLXByb2dyZXNzIHttYXJnaW46NXB4IGF1dG8gYXV0bzt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdwcm9ncmVzc19hbmkuZ2lmXFwnKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNvbW1lbnQtZmxhZ3tjdXJzb3I6cG9pbnRlcjt2aXNpYmlsaXR5OmhpZGRlbjt0ZXh0LWFsaWduOnJpZ2h0O2Zsb2F0OnJpZ2h0O3dpZHRoOiAxNHB4OyBoZWlnaHQ6MTRweDtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdmbGFnX2ljb24ucG5nXFwnKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNvbW1lbnQtZmxhZy1vdmVye3Zpc2liaWxpdHk6dmlzaWJsZX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNvbW1lbnQtZmxhZy1zdWJtaXR0ZWR7dGV4dC1hbGlnbjpyaWdodDtmbG9hdDpyaWdodDt3aWR0aDogMTRweDsgaGVpZ2h0OjE0cHg7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnZmxhZ19pY29uLnBuZ1xcJyl9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1jb21tZW50LXJlbW92ZXtjdXJzb3I6cG9pbnRlcjt2aXNpYmlsaXR5OmhpZGRlbjt0ZXh0LWFsaWduOnJpZ2h0O2Zsb2F0OnJpZ2h0O3dpZHRoOiA3cHg7IGhlaWdodDo3cHg7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAncmVtb3ZlX2ljb24uZ2lmXFwnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtY29tbWVudC1yZW1vdmUtb3Zlcnt2aXNpYmlsaXR5OnZpc2libGV9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1kaWFsb2ctY2FwdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzOyBwYWRkaW5nOiA1cHggNXB4IDVweCAxMnB4O292ZXJmbG93OmF1dG87em9vbToxO2ZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiAjNGQ0ZDRkO30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWRpYWxvZy1ib2R5e3BhZGRpbmc6MjRweCAxMnB4IDEycHggMTJweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1kaWFsb2ctYnV0dG9uc3ttYXJnaW4tdG9wOjEycHg7fScsXHJcblxyXG4gICAgICAgICAgICAvLydkaXYuZ2lnLWNvbW1lbnRzLWRpYWxvZyB7cGFkZGluZzoyNHB4IDEycHggMTJweCAxMnB4O30nLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtYnV0dG9uLWNhbmNlbCxhOmhvdmVyLmdpZy1jb21tZW50cy1idXR0b24tY2FuY2VsLGE6bGluay5naWctY29tbWVudHMtYnV0dG9uLWNhbmNlbCxhOmFjdGl2ZS5naWctY29tbWVudHMtYnV0dG9uLWNhbmNlbCxhOnZpc2l0ZWQuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1jYW5jZWwsICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhLmdpZy1jb21tZW50cy1idXR0b24tZmxhZ1RoaXNDb21tZW50LGE6aG92ZXIuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1mbGFnVGhpc0NvbW1lbnQsYTpsaW5rLmdpZy1jb21tZW50cy1idXR0b24tZmxhZ1RoaXNDb21tZW50LGE6YWN0aXZlLmdpZy1jb21tZW50cy1idXR0b24tZmxhZ1RoaXNDb21tZW50LGE6dmlzaXRlZC5naWctY29tbWVudHMtYnV0dG9uLWZsYWdUaGlzQ29tbWVudCAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtYnV0dG9uLXJlbW92ZSxhOmhvdmVyLmdpZy1jb21tZW50cy1idXR0b24tcmVtb3ZlLGE6bGluay5naWctY29tbWVudHMtYnV0dG9uLXJlbW92ZSxhOmFjdGl2ZS5naWctY29tbWVudHMtYnV0dG9uLXJlbW92ZSxhOnZpc2l0ZWQuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1yZW1vdmUgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3tsaW5lLWhlaWdodDoyNHB4O2ZvbnQtc2l6ZToxMjtwYWRkaW5nOjAgMTBweDt9JyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1zdWJzY3JpYmUsYTpob3Zlci5naWctY29tbWVudHMtYnV0dG9uLXN1YnNjcmliZSxhOmxpbmsuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1zdWJzY3JpYmUsYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1zdWJzY3JpYmUsYTp2aXNpdGVkLmdpZy1jb21tZW50cy1idXR0b24tc3Vic2NyaWJlIHsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGluZS1oZWlnaHQ6MjJweDtmb250LXNpemU6MTI7bWFyZ2luLWxlZnQ6N3B4O2ZvbnQtd2VpZ2h0OmJvbGQ7JyxcclxuICAgICAgICAgICAgICAgICAgICAnfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtZGlhbG9nLXN1YnNjcmliZS1lbWFpbFRleHRib3gtY29udGFpbmVyIHtmbG9hdDpsZWZ0O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWRpYWxvZy1zdWJzY3JpYmUtZW50ZXJZb3VyRW1haWwge21hcmdpbi1ib3R0b206MTBweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnaW5wdXQuZ2lnLWNvbW1lbnRzLWRpYWxvZy1zdWJzY3JpYmUtZW1haWxUZXh0Ym94IHt3aWR0aDogMjYwcHg7Y29sb3I6ICM0RDRENER9JyxcclxuICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtYnV0dG9uLWNhbmNlbCxhOmhvdmVyLmdpZy1jb21tZW50cy1idXR0b24tY2FuY2VsLGE6bGluay5naWctY29tbWVudHMtYnV0dG9uLWNhbmNlbCxhOmFjdGl2ZS5naWctY29tbWVudHMtYnV0dG9uLWNhbmNlbCxhOnZpc2l0ZWQuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1jYW5jZWwgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ttYXJnaW4tcmlnaHQ6IDEwcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtZGlhbG9nLWJvZHktcmVtb3ZlIHtmb250LXdlaWdodDpib2xkfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1mbGFnVGhpc0NvbW1lbnQsYTpob3Zlci5naWctY29tbWVudHMtYnV0dG9uLWZsYWdUaGlzQ29tbWVudCxhOmxpbmsuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1mbGFnVGhpc0NvbW1lbnQsYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1mbGFnVGhpc0NvbW1lbnQsYTp2aXNpdGVkLmdpZy1jb21tZW50cy1idXR0b24tZmxhZ1RoaXNDb21tZW50ICcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1yZW1vdmUsYTpob3Zlci5naWctY29tbWVudHMtYnV0dG9uLXJlbW92ZSxhOmxpbmsuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1yZW1vdmUsYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1yZW1vdmUsYTp2aXNpdGVkLmdpZy1jb21tZW50cy1idXR0b24tcmVtb3ZlICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd7Zm9udC13ZWlnaHQ6Ym9sZH0nLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1zdGFyIHtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7bWFyZ2luLXJpZ2h0OjNweDsgd2lkdGg6IDEzcHg7IGhlaWdodDoxM3B4O2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnUmF0ZUljb25fMTMucG5nXFwnKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXN0YXItaGFsZiB7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnUmF0ZUljb25fMTNfaGFsZi5wbmdcXCcpfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtc3Rhci1mdWxsIHtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdSYXRlSWNvbl8xM19wcmVzc2VkLnBuZ1xcJyl9JyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtc3Rhci1lZGl0YWJsZSwgZGl2LmdpZy1jb21tZW50cy1zdGFyLWVkaXRhYmxlLWVtcHR5LCBkaXYuZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtcmF0aW5ncy1lcnJvciBkaXYuZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUtZW1wdHksIGRpdi5naWctY29tbWVudHMtc3Rhci1teVJhdGluZyB7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O3BhZGRpbmctcmlnaHQ6NHB4OyB3aWR0aDogMjFweDsgaGVpZ2h0OjIxcHg7ZmxvYXQ6bGVmdDtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdSYXRlSWNvbl8yMS5wbmdcXCcpfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtc3Rhci1lZGl0YWJsZSwgZGl2LmdpZy1jb21tZW50cy1zdGFyLWVkaXRhYmxlLWVtcHR5LCBkaXYuZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtcmF0aW5ncy1lcnJvciBkaXYuZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUtZW1wdHkge2N1cnNvcjpwb2ludGVyO30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUtaGFsZiwgZGl2LmdpZy1jb21tZW50cy1zdGFyLW15UmF0aW5nLWhhbGYge2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ1JhdGVJY29uXzIxX2hhbGYucG5nXFwnKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUtZnVsbCwgZGl2LmdpZy1jb21tZW50cy1zdGFyLW15UmF0aW5nLWZ1bGwsIGRpdi5naWctY29tbWVudHMtYWRkQ29tbWVudC1yYXRpbmdzLWVycm9yIGRpdi5naWctY29tbWVudHMtc3Rhci1lZGl0YWJsZS1mdWxsIHtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdSYXRlSWNvbl8yMV9wcmVzc2VkLnBuZ1xcJyl9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1hZGRDb21tZW50LXJhdGluZ3MtZXJyb3IgLmdpZy1jb21tZW50cy1zdGFyLWVkaXRhYmxlIHtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdSYXRlSWNvbl8yMV9lcnJvci5wbmdcXCcpO30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtcmF0aW5ncy1zdGFycy1jb250YWluZXIge2Zsb2F0OmxlZnQ7bWFyZ2luLWJvdHRvbToxNXB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtcmF0aW5ncy1yYXRpbmdOYW1lIHtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDoxNXB4O21hcmdpbi10b3A6NHB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtcmF0aW5ncy1kZXRhaWxzIHtmbG9hdDpsZWZ0O21hcmdpbi1sZWZ0OiAzcHg7IGNvbG9yOiM5MTkxOTE7bWFyZ2luLXRvcDo0cHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtYWRkQ29tbWVudC1yYXRpbmdzIHtvdmVyZmxvdzpoaWRkZW47em9vbToxfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtYWRkQ29tbWVudC1sYWJlbCB7bWFyZ2luLWJvdHRvbTozcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtY29tbWVudEJveCB7bWFyZ2luLXRvcDoxNXB4O292ZXJmbG93OmhpZGRlbjt6b29tOjE7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtY29tbWVudEJveC1ib3R0b20ge21hcmdpbi10b3A6MzVweDtwYWRkaW5nLXRvcDo1cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI0NGQ0ZDRn0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXJhdGluZyB7em9vbToxO292ZXJmbG93OmhpZGRlbjtmbG9hdDpsZWZ0O3BhZGRpbmctYm90dG9tOjEycHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtdGl0bGUge2ZvbnQtd2VpZ2h0OmJvbGQ7IGZvbnQtc2l6ZTogMTRweDtmbG9hdDpsZWZ0O3BhZGRpbmctYm90dG9tOjEycHg7fScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmdpZy1jb21tZW50cy1tYW5kYXRvcnlNYXJrIHtjb2xvcjojZTcwNzA3O2ZvbnQtd2VpZ2h0OmJvbGQ7fScsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy12YWxpZGF0aW9uLWVycm9yIHtkaXNwbGF5Om5vbmU7Y29sb3I6ICNjZTU4NWE7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MjJweDtiYWNrZ3JvdW5kOiNmZWU5ZWE7bWFyZ2luLXRvcDo3cHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1wb3N0LGE6aG92ZXIuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1wb3N0LGE6bGluay5naWctY29tbWVudHMtYnV0dG9uLXBvc3QsYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1wb3N0LGE6dmlzaXRlZC5naWctY29tbWVudHMtYnV0dG9uLXBvc3QsJyxcclxuICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtYnV0dG9uLW9rLGE6aG92ZXIuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1vayxhOmxpbmsuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1vayxhOmFjdGl2ZS5naWctY29tbWVudHMtYnV0dG9uLW9rLGE6dmlzaXRlZC5naWctY29tbWVudHMtYnV0dG9uLW9rIHsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGluZS1oZWlnaHQ6MjBweDtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6MCAxMHB4O2Zsb2F0OnJpZ2h0O3doaXRlLXNwYWNlOm5vd3JhcH0nLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtZHJvcGRvd24sYTpob3Zlci5naWctY29tbWVudHMtZHJvcGRvd24sYTpsaW5rLmdpZy1jb21tZW50cy1kcm9wZG93bixhOmFjdGl2ZS5naWctY29tbWVudHMtZHJvcGRvd24sYTp2aXNpdGVkLmdpZy1jb21tZW50cy1kcm9wZG93biB7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtd2VpZ2h0OmJvbGQ7bGluZS1oZWlnaHQ6IDIycHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czogM3B4OyBjb2xvcjojNGQ0ZDRkO2N1cnNvcjpwb2ludGVyOycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb250LXNpemU6IDEzcHg7cGFkZGluZy1sZWZ0OiAxMHB4OyBib3JkZXI6IDFweCBzb2xpZCAjQzVDN0M3O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTsgdmVydGljYWwtYWxpZ246bWlkZGxlOyB0ZXh0LWFsaWduOmNlbnRlcjsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYm94LXNoYWRvdzowIDAgMnB4IFJHQkEoMCwwLDAsMC4xNSk7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAycHggUkdCQSgwLDAsMCwwLjE1KTstbW96LWJveC1zaGFkb3c6MCAwIDJweCBSR0JBKDAsMCwwLDAuMTUpO30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhLmdpZy1jb21tZW50cy1kcm9wZG93bixhOmxpbmsuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLGE6YWN0aXZlLmdpZy1jb21tZW50cy1kcm9wZG93bixhOnZpc2l0ZWQuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duIHsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI0ZGRkZGRjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNGRkZGRkZcIiwgZW5kQ29sb3JzdHI9XCIjRUFFQkVCXCIpOycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNGRkZGRkYpLCB0bygjRUFFQkVCKSk7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNGRkZGRkYsICAjRUFFQkVCKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhOmhvdmVyLmdpZy1jb21tZW50cy1kcm9wZG93biwgYS5naWctY29tbWVudHMtZHJvcGRvd24tZG93biwgYTpob3Zlci5naWctY29tbWVudHMtZHJvcGRvd24tZG93bixhOmxpbmsuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWRvd24sYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWRvd24sYTp2aXNpdGVkLmdpZy1jb21tZW50cy1kcm9wZG93bi1kb3duIHsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI0VBRUJFQjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNFQUVCRUJcIiwgZW5kQ29sb3JzdHI9XCIjRkZGRkZGXCIpOycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNFQUVCRUIpLCB0bygjRkZGRkZGKSk7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNFQUVCRUIsICAjRkZGRkZGKX0nLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1kcm9wZG93bi1idXR0b24geycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDsgbWFyZ2luLWxlZnQ6MTNweDtmbG9hdDpsZWY7d2lkdGg6IDIxcHg7IGhlaWdodDogMjJweDsgZGlzcGxheTppbmxpbmUtYmxvY2s7em9vbToxOycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAjRUFFQkVCOyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiI0ZGRkZGRlwiLCBlbmRDb2xvcnN0cj1cIiNEQURBREFcIik7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI0ZGRkZGRiksIHRvKCNEQURBREEpKTsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI0ZGRkZGRiwgICNEQURBREEpfScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdhLmdpZy1jb21tZW50cy1kcm9wZG93bi1sb2dpbiBkaXYuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWJ1dHRvbiB7bWFyZ2luLWxlZnQ6M3B4fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtZHJvcGRvd24tbG9naW4tdGV4dCB7bWluLXdpZHRoOjM0cHh9JyxcclxuICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtZHJvcGRvd24tbG9naW4tbmF0aXZlLGE6aG92ZXIuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWxvZ2luLW5hdGl2ZSxhOmxpbmsuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWxvZ2luLW5hdGl2ZSxhOmFjdGl2ZS5naWctY29tbWVudHMtZHJvcGRvd24tbG9naW4tbmF0aXZlLGE6dmlzaXRlZC5naWctY29tbWVudHMtZHJvcGRvd24tbG9naW4tbmF0aXZlIHtwYWRkaW5nOjAgMTBweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnYTpob3Zlci5naWctY29tbWVudHMtZHJvcGRvd24gZGl2LmdpZy1jb21tZW50cy1kcm9wZG93bi1idXR0b24sIGEuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWRvd24gZGl2LmdpZy1jb21tZW50cy1kcm9wZG93bi1idXR0b24geycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAjRUFFQkVCOyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiI0RBREFEQVwiLCBlbmRDb2xvcnN0cj1cIiNGRkZGRkZcIik7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI0RBREFEQSksIHRvKCNGRkZGRkYpKTsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI0RBREFEQSwgICNGRkZGRkYpfScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWxvZ2luLWNvbnRhaW5lciB7em9vbToxO292ZXJmbG93OmhpZGRlbjtsaW5lLWhlaWdodDoyNHB4O30nLFxyXG4gICAgICAgICAgICAvLydzcGFuLmdpZy1jb21tZW50cy1vciB7ZmxvYXQ6bGVmdDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1sb2dpbkNhbnZhcyB7em9vbToxO292ZXJmbG93OmhpZGRlbn0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmdpZy1jb21tZW50cy1sb2dvdXRMaW5rLWNvbnRhaW5lciB7ZmxvYXQ6bGVmdDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5naWctY29tbWVudHMtbG9naW4ge2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEzcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtYWRkQ29tbWVudEZvb3RlciB7em9vbToxO292ZXJmbG93OmhpZGRlbn0nLFxyXG4gICAgICAgICAgICAgICAgICAgICd0ZC5naWctY29tbWVudHMtY29tbWVudERhdGEge3dpZHRoOjk5JX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNvbW1lbnREYXRhLWhlYWRlciB7b3ZlcmZsb3c6aGlkZGVuO3pvb206MTt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1yYXRpbmdBbmRUaXRsZSB7b3ZlcmZsb3c6aGlkZGVuO3pvb206MTt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1yZXBseUJ1dHRvbkFuZENvdW50IHtmbG9hdDpsZWZ0O292ZXJmbG93OmhpZGRlbjt6b29tOjE7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtZHJvcGRvd24tYnV0dG9uLWFycm93IHtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdhcnJvdy5naWZcXCcpO2hlaWdodDoyMnB4O3dpZHRoOiAyMXB4O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1kaWFsb2cge2JvcmRlcjogNnB4IHNvbGlkICM4NTg1ODU7IGJvcmRlci1yYWRpdXM6IDVweDsgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO3hoZWlnaHQ6MTQwcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtZGlhbG9nLWNsb3NlSWNvbiB7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnY2xvc2VfaWNvbi5wbmdcXCcpO3dpZHRoOjE1cHg7aGVpZ2h0OjE1cHg7IGZsb2F0OnJpZ2h0O2N1cnNvcjpwb2ludGVyO30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWRpYWxvZy1zbWFsbENsb3NlSWNvbiB7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnc21hbGxjbG9zZWljb24ucG5nXFwnKTt3aWR0aDo3cHg7aGVpZ2h0OjE1cHg7IGZsb2F0OnJpZ2h0O2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy11c2VybmFtZUFuZFRpbWUge2Zsb2F0OmxlZnQ7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtZHJvcGRvd24tdGV4dCB7ZmxvYXQ6bGVmdH0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXZvdGUge2Zsb2F0OnJpZ2h0O3RleHQtYWxpZ246cmlnaHQ7Zm9udC1zaXplOjExcHg7d2hpdGUtc3BhY2U6bm93cmFwO21hcmdpbi1sZWZ0OjdweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7fScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXZvdGUtdXAge2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ3RodW1ic3VwX2hvdmVyLnBuZ1xcJyk7d2lkdGg6MTVweDtoZWlnaHQ6MTVweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy12b3RlLWRvd24ge2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ3RodW1ic2Rvd25faG92ZXIucG5nXFwnKTt3aWR0aDoxNXB4O2hlaWdodDoxNXB4OyB9JyxcclxuICAgICAgICAgICAgICAgICAgICAvLydhLmdpZy1jb21tZW50cy1idXR0b24tZG93biBkaXYuZ2lnLWNvbW1lbnRzLXZvdGUtdXAge2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ3RodW1ic3VwX2hvdmVyLnBuZ1xcJyk7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8nYS5naWctY29tbWVudHMtYnV0dG9uLWRvd24gZGl2LmdpZy1jb21tZW50cy12b3RlLWRvd24ge2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ3RodW1ic2Rvd25faG92ZXIucG5nXFwnKTsgfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtdm90ZS12YWx1ZSB7Zm9udC1zaXplOjExcHg7dmVydGljYWwtYWxpZ246bWlkZGxlO21hcmdpbi1sZWZ0OjRweDtkaXNwbGF5OmlubGluZS1ibG9jazsqZGlzcGxheTppbmxpbmU7KndpZHRoOjIxcHg7dGV4dC1hbGlnbjpyaWdodDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy12b3RlLXZhbHVlLW5lZyB7d2lkdGg6YXV0bzttaW4td2lkdGg6IGF1dG87bWFyZ2luLWxlZnQ6fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlLCBhOmhvdmVyLmdpZy1jb21tZW50cy1idXR0b24tdm90ZSxhOmxpbmsuZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlLGE6YWN0aXZlLmdpZy1jb21tZW50cy1idXR0b24tdm90ZSxhOnZpc2l0ZWQuZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlIHsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luOjA7cGFkZGluZzowO21hcmdpbi1sZWZ0OjRweDsgYm94LXNoYWRvdzpub25lOy13ZWJraXQtYm94LXNoYWRvdzpub25lOy1tb3otYm94LXNoYWRvdzpub25lfScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWRpYWxvZy1zdWJzY3JpYmUtZXJyb3Ige2NvbG9yOiAjY2U1ODVhO2ZvbnQtc2l6ZToxMXB4O21hcmdpbi10b3A6NXB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWRpYWxvZy1ib2R5LWNvbmZpcm1hdGlvbiB7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MjBweDtwYWRkaW5nLWJvdHRvbToyMnB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWRpYWxvZy1zdWJzY3JpYmUtb2tJY29uIHtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdva19pY29uLnBuZ1xcJyk7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MnB4O21hcmdpbi1yaWdodDoycHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7fScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdhLmdpZy1jb21tZW50cy1mb2xsb3csIGE6aG92ZXIuZ2lnLWNvbW1lbnRzLWZvbGxvdyxhOmxpbmsuZ2lnLWNvbW1lbnRzLWZvbGxvdyxhOmFjdGl2ZS5naWctY29tbWVudHMtZm9sbG93LGE6dmlzaXRlZC5naWctY29tbWVudHMtZm9sbG93ICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLWxlZnQ6MjdweDtib3JkZXItbGVmdDoxcHggc29saWQgI2Q4ZDlkOTsgY29sb3I6IzRENEQ0RDtwYWRkaW5nLWxlZnQ6MjBweDsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnZm9sbG93LnBuZ1xcJyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246NXB4O21hcmdpbi1yaWdodDo1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWZvbGxvd2luZywgYTpob3Zlci5naWctY29tbWVudHMtZm9sbG93aW5nLGE6bGluay5naWctY29tbWVudHMtZm9sbG93aW5nLGE6YWN0aXZlLmdpZy1jb21tZW50cy1mb2xsb3dpbmcsYTp2aXNpdGVkLmdpZy1jb21tZW50cy1mb2xsb3dpbmcgJyxcclxuICAgICAgICAgICAgICAgICAgICAnIHtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdmb2xsb3dpbmcucG5nXFwnKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhLmdpZy1jb21tZW50cy11bmZvbGxvdywgYTpob3Zlci5naWctY29tbWVudHMtdW5mb2xsb3csYTpsaW5rLmdpZy1jb21tZW50cy11bmZvbGxvdyxhOmFjdGl2ZS5naWctY29tbWVudHMtdW5mb2xsb3csYTp2aXNpdGVkLmdpZy1jb21tZW50cy11bmZvbGxvdyAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAne2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ3VuZm9sbG93LnBuZ1xcJyl9JyxcclxuICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtbW9yZVByb3ZpZGVyLCBhOmhvdmVyLmdpZy1jb21tZW50cy1tb3JlUHJvdmlkZXIsYTpsaW5rLmdpZy1jb21tZW50cy1tb3JlUHJvdmlkZXIsYTphY3RpdmUuZ2lnLWNvbW1lbnRzLW1vcmVQcm92aWRlcixhOnZpc2l0ZWQuZ2lnLWNvbW1lbnRzLW1vcmVQcm92aWRlciAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAne2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZToxMnB4O3dpZHRoOiAxMDBweDtjdXJzb3I6cG9pbnRlcjttYXJnaW4tYm90dG9tOjVweDtsaW5lLWhlaWdodDoyMHB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhLmdpZy1jb21tZW50cy1tb3JlLCBhOmhvdmVyLmdpZy1jb21tZW50cy1tb3IsYTpsaW5rLmdpZy1jb21tZW50cy1tb3JlLGE6YWN0aXZlLmdpZy1jb21tZW50cy1tb3JlLGE6dmlzaXRlZC5naWctY29tbWVudHMtbW9yZSB7bWFyZ2luLWxlZnQ6NXB4O2xpbmUtaGVpZ2h0OjIwcHg7Y29sb3I6IzIxODFDQTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2xpbmUtaGVpZ2h0OjE2cHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtZGlhbG9nLW1vcmVQcm92aWRlcnMge3BhZGRpbmc6MDt3aWR0aDogMzAwcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtZGlhbG9nLWNhcHRpb24tbW9yZVByb3ZpZGVycyB7Zm9udC1zaXplOjEycHg7cGFkZGluZzowIDVweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1kaWFsb2ctYm9keS1tb3JlUHJvdmlkZXJze3BhZGRpbmc6NXB4IDVweCAwIDVweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1kaWFsb2ctY2FwdGlvbi1tb3JlUHJvdmlkZXJzIHtwYWRkaW5nOjNweCA1cHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtbW9kZXJhdG9yLWVkaXQtdGV4dCB7Zm9udC13ZWlnaHQ6Ym9sZDttYXJnaW4tYm90dG9tOjEwcHg7fScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLW15UmF0aW5nIHtvdmVyZmxvdzpoaWRkZW47fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtbXlSYXRpbmctbGFiZWwge2Zsb2F0OmxlZnQ7bWFyZ2luLXRvcDo1cHg7bWFyZ2luLXJpZ2h0OjVweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1teVN1bW1hcnktbGFiZWwge30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLW15U3VtbWFyeS12YWx1ZSwgZGl2LmdpZy1jb21tZW50cy1teVJldmlldy12YWx1ZSB7Zm9udC1zdHlsZTogaXRhbGljO30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLW15U3VtbWFyeS1sYWJlbCwgZGl2LmdpZy1jb21tZW50cy1teVJldmlldy1sYWJlbCB7bWFyZ2luLWJvdHQ6IDEwcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtbXlTdW1tYXJ5LXZhbHVlIHttYXJnaW4tYm90dG9tOjI3cHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtdXBkYXRlc1N0cmlwIHtiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkNBO21hcmdpbjogMTBweCAwO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6NXB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmdpZy1jb21tZW50cy11cGRhdGVzU3RyaXAtbGluayB7Y29sb3I6IzIxODFDQTt0ZXh0LWRlY29yYXRpb25zOnVuZGVybGluZTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6IGluaGVyaXQ7fSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbm9uTW9iaWxlQ1NTOlxyXG4gICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgJy5naWctY29tbWVudHMtY29udGFpbmVyICoge2JvcmRlcjpub25lOy1tb3otYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MDtiYWNrZ3JvdW5kOm5vbmU7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJy5naWctY29tbWVudHMtY29udGFpbmVyIGE6Zm9jdXMsIC5naWctY29tbWVudHMtY29udGFpbmVyIGlucHV0OmZvY3VzLCAuZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1cyB7b3V0bGluZTogbm9uZTt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnaW5wdXQuZ2lnLWNvbW1lbnRzLXRleHRib3ggey1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7Ym94LXNpemluZzogYm9yZGVyLWJveDtwYWRkaW5nOjAgNHB4O2JhY2tncm91bmQtY29sb3I6d2hpdGU7Ym9yZGVyOiAxcHggc29saWQgI0MwQzBDMDtoZWlnaHQ6MjRweDtib3gtc2hhZG93Omluc2V0IDAgMCA0cHggI0RDRENEQzsgLW1vei1ib3gtc2hhZG93Omluc2V0IDAgMCA0cHggI0RDRENEQzsgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA0cHggI0RDRENEQzt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnYTpob3Zlci5naWctY29tbWVudHMtYnV0dG9uLCBhLmdpZy1jb21tZW50cy1idXR0b24tZG93bixhOmxpbmsuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1kb3duLGE6YWN0aXZlLmdpZy1jb21tZW50cy1idXR0b24tZG93bixhOnZpc2l0ZWQuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1kb3duIHsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI0VBRUJFQjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNFQUVCRUJcIiwgZW5kQ29sb3JzdHI9XCIjRkZGRkZGXCIpOycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNFQUVCRUIpLCB0bygjRkZGRkZGKSk7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNFQUVCRUIsICAjRkZGRkZGKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmdpZy1jb21tZW50cy11c2VybmFtZXt3aGl0ZS1zcGFjZTpub3dyYXB9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy11cGRhdGVzU3RyaXAge2ZvbnQtc2l6ZTogMTFweH0nXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG1vYmlsZUNTUzogW1xyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNvbW1lbnQtZmxhZ3tkaXNwbGF5Om5vbmV9JyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1kb3duLGE6bGluay5naWctY29tbWVudHMtYnV0dG9uLWRvd24sYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWJ1dHRvbi1kb3duLGE6dmlzaXRlZC5naWctY29tbWVudHMtYnV0dG9uLWRvd24geycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAjRUFFQkVCOyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiI0VBRUJFQlwiLCBlbmRDb2xvcnN0cj1cIiNGRkZGRkZcIik7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI0VBRUJFQiksIHRvKCNGRkZGRkYpKTsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI0VBRUJFQiwgICNGRkZGRkYpfScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICcuZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciAqLCBkaXYuZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciwgLmdpZy1jb21tZW50cy1jb250YWluZXIgc3BhbiwgLmdpZy1jb21tZW50cy1jb250YWluZXIgYTpob3ZlciwgLmdpZy1jb21tZW50cy1jb250YWluZXIgYTp2aXNpdGVkLCAuZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciBhOmxpbmssIC5naWctY29tbWVudHMtY29udGFpbmVyIGE6YWN0aXZleycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb250LXNpemU6MTZweDtmb250LWZhbWlseTpzYW5zLXNlcmlmO30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmdpZy1jb21tZW50cy1jb21tZW50LXRpbWUge2Rpc3BsYXk6bm9uZX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtYnV0dG9uLGE6aG92ZXIuZ2lnLWNvbW1lbnRzLWJ1dHRvbixhOmxpbmsuZ2lnLWNvbW1lbnRzLWJ1dHRvbixhOmFjdGl2ZS5naWctY29tbWVudHMtYnV0dG9uLGE6dmlzaXRlZC5naWctY29tbWVudHMtYnV0dG9uIHsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGluZS1oZWlnaHQ6IDI4cHg7fScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWNvbW1lbnRMaXN0LWZvb3RlciwgZGl2LmdpZy1jb21tZW50cy1jb21tZW50TGlzdC1oZWFkZXIsIGRpdi5naWctY29tbWVudExpc3QsIGRpdi5naWctY29tbWVudHMtY29tbWVudEJveCB7bWFyZ2luLWxlZnQ6M3B4OyBtYXJnaW4tcmlnaHQ6M3B4O30nLFxyXG4gICAgICAgICAgICAvLydkaXYuZ2lnLWNvbW1lbnRzLXZvdGUtdXAsIGRpdi5naWctY29tbWVudHMtdm90ZS1kb3duIHt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1jb21tZW50TGlzdC1oZWFkZXIge2ZvbnQtc2l6ZTogMThweDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtYnV0dG9uLXJlcGx5LCBkaXYuZ2lnLWNvbW1lbnRzLXZvdGUtdmFsdWUge2ZvbnQtc2l6ZTogMTRweH0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhLmdpZy1jb21tZW50cy1idXR0b24tcG9zdCwgYTpob3Zlci5naWctY29tbWVudHMtYnV0dG9uLXBvc3QsYTpsaW5rLmdpZy1jb21tZW50cy1idXR0b24tcG9zdCxhOmFjdGl2ZS5naWctY29tbWVudHMtYnV0dG9uLXBvc3QsYTp2aXNpdGVkLmdpZy1jb21tZW50cy1idXR0b24tcG9zdCB7bGluZS1oZWlnaHQ6MzNweH0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXJlcGxpZXMtbGVuZ3RoLWNvbnRhaW5lciB7ZGlzcGxheTpub25lfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtdm90ZS11cCB7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnbW9iaWxlX3ZvdGVfdXAucG5nXFwnKTt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXZvdGUtZG93biB7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnbW9iaWxlX3ZvdGVfZG93bi5wbmdcXCcpO3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7IH0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhLmdpZy1jb21tZW50cy1idXR0b24tZG93biBkaXYuZ2lnLWNvbW1lbnRzLXZvdGUtdXAge2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ21vYmlsZV92b3RlX3VwX3ByZXNzZWQucG5nXFwnKTt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtYnV0dG9uLWRvd24gZGl2LmdpZy1jb21tZW50cy12b3RlLWRvd24ge2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ21vYmlsZV92b3RlX2Rvd25fcHJlc3NlZC5wbmdcXCcpOyB9JyxcclxuICAgICAgICAgICAgICAgICAgICAnYS5naWctY29tbWVudHMtYnV0dG9uLXZvdGUtZG93biwgYTpob3Zlci5naWctY29tbWVudHMtYnV0dG9uLXZvdGUtZG93bixhOmxpbmsuZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlLWRvd24sYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlLWRvd24sYTp2aXNpdGVkLmdpZy1jb21tZW50cy1idXR0b24tdm90ZS1kb3duIHsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLWxlZnQ6OHB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhLmdpZy1jb21tZW50cy1yc3MtaWNvbixhOmhvdmVyLmdpZy1jb21tZW50cy1yc3MtaWNvbixhOmxpbmsuZ2lnLWNvbW1lbnRzLXJzcy1pY29uLGE6YWN0aXZlLmdpZy1jb21tZW50cy1yc3MtaWNvbixhOnZpc2l0ZWQuZ2lnLWNvbW1lbnRzLXJzcy1pY29uIHtkaXNwbGF5Om5vbmV9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1sb2dpbkNhbnZhcyB7bWFyZ2luLWJvdHRvbToxMHB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhLmdpZy1jb21tZW50cy1kcm9wZG93bi1sb2dpbiBkaXYuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWJ1dHRvbiB7ZmxvYXQ6cmlnaHQ7d2lkdGg6MzNweDtoZWlnaHQ6MzNweH0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWJ1dHRvbi1hcnJvdyB7d2lkdGg6IDMycHg7aGVpZ2h0OjMzcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2EuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLGE6aG92ZXIuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLGE6bGluay5naWctY29tbWVudHMtZHJvcGRvd24sYTphY3RpdmUuZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLGE6dmlzaXRlZC5naWctY29tbWVudHMtZHJvcGRvd24geycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGluZS1oZWlnaHQ6MzNweDtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmF1dG87JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXByb3ZpZGVySWNvbnMge2Rpc3BsYXk6bm9uZX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWxvZ2luVUkge2hlaWdodDoyNDBweH0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWxvZ2luVUktY29udGVudCB7bWFyZ2luLXRvcDoyMHB4O30nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWhlYWRlclRleHR7cGFkZGluZy1ib3R0b206MnB4fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtc2hvd01vcmVDb21tZW50cy10ZXh0IHtwYWRkaW5nLXRvcDo4cHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtY2hlY2tib3gge3dpZHRoOmF1dG87fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJy5naWctY29tbWVudHMtY29udGFpbmVyIHRleHRhcmVhIHt3aWR0aDoxMDAlOy1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtib3gtc2l6aW5nOiBjb250ZW50LWJveDt9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy10aXRsZSB7Zm9udC1zaXplOjE3cHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lucHV0LmdpZy1jb21tZW50cy10ZXh0Ym94IHstbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O2JveC1zaXppbmc6IGJvcmRlci1ib3g7bWFyZ2luLWJvdHRvbToxMHB4O30nLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1zdGFyIHtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7bWFyZ2luLXJpZ2h0OjNweDsgd2lkdGg6IDIxcHg7IGhlaWdodDoyMXB4O2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnUmF0ZUljb25fMjEucG5nXFwnKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXN0YXItaGFsZiB7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGltZ0Jhc2UgKyAnUmF0ZUljb25fMjFfaGFsZi5wbmdcXCcpfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtc3Rhci1mdWxsIHtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgaW1nQmFzZSArICdSYXRlSWNvbl8yMV9wcmVzc2VkLnBuZ1xcJyl9JyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtc3Rhci1lZGl0YWJsZSB7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O21hcmdpbi1yaWdodDo3cHg7IHdpZHRoOiAyOHB4OyBoZWlnaHQ6MjhweDtmbG9hdDpsZWZ0O2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ1JhdGVJY29uXzI4LnBuZ1xcJyl9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1zdGFyLWVkaXRhYmxlLWhhbGYge2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ1JhdGVJY29uXzI4X2hhbGYucG5nXFwnKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUtZnVsbCwgZGl2LmdpZy1jb21tZW50cy1hZGRDb21tZW50LXJhdGluZ3MtZXJyb3IgZGl2LmdpZy1jb21tZW50cy1zdGFyLWVkaXRhYmxlLWZ1bGwge2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ1JhdGVJY29uXzI4X3ByZXNzZWQucG5nXFwnKX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYuZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtcmF0aW5ncy1lcnJvciAuZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUge2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpbWdCYXNlICsgJ1JhdGVJY29uXzI4X2Vycm9yLnBuZ1xcJyl9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy1yYXRpbmcge21hcmdpbi1yaWdodDozcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5naWctY29tbWVudHMtYWRkQ29tbWVudC1yYXRpbmdzLXJhdGluZ05hbWUge21hcmdpbi1yaWdodDo3cHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xhYmVsLmdpZy1jb21tZW50cy1jaGVja2JveFByb3ZpZGVyIHttYXJnaW4tbGVmdDo1cHh9JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGl2LmdpZy1jb21tZW50cy11cGRhdGVzU3RyaXAge21hcmdpbjogMTBweCAzcHg7fScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uZ2lnLWNvbW1lbnRzLXVwZGF0ZXNTdHJpcC1saW5rIHtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyO30nXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0ZW1wbGF0ZXM6IHtcclxuICAgICAgICAgICAgX21hcDoge30sXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcFtrZXldO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRNYXBDb3B5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHRoaXMuX21hcClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwW2tleV0gPSAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkgPyB2YWx1ZS5qb2luKFwiXCIpIDogdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjcmVhdGVJbnN0YW5jZTogZnVuY3Rpb24gKGMsIHAsIGkpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocC5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgIGlmIChlbCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoIXAuc3RyZWFtSUQpIHAuc3RyZWFtSUQgPSAwO1xyXG5cclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IGNvbW1lbnRzUGx1Z2luKGMsIHAsIGkpO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5pZCA9IHAuY29udGFpbmVySUQgKyAnXycgKyBwbHVnaW5TY29wZS5pbnN0YW5jZXNfc2l6ZTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUuaW5zdGFuY2VzW2luc3RhbmNlLmlkXSA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS5pbnN0YW5jZXNfc2l6ZSsrO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5zdGFydCgpO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXREZWZhdWx0VGVtcGxhdGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJjb21tZW50Q29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IHN0eWxlPVwib3ZlcmZsb3c6aGlkZGVuO3pvb206MTtcIiBpZD1cIiRjb21tZW50Q29udGFpbmVySWRcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IG9ubW91c2VvdmVyPVwiJG9ubW91c2VvdmVyXCIgb25tb3VzZW91dD1cIiRvbm1vdXNlb3V0XCI+JHtjb21tZW50fTwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyRjb21tZW50UmVwbHlQbGFjZWhvbGRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJnaWctcmVwbGllcy0kY29tbWVudElEXCI+JGNoaWxkQ29tbWVudHM8IS0tIGVtcHR5IGRpdnM9MTAwJSBoZWlnaHQgSUUgLS0+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnJGRvdHRlZExpbmUnLFxyXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJjb21tZW50XCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLSRjbGFzc25hbWVcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiR7bWFyZ2luTGVmdH1weDtcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICcke3JhdGluZ3N9JHt0aXRsZVBsYWNlaG9sZGVyfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJzx0YWJsZSBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj48dHI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOnRvcFwiPjxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtcGhvdG8tY29udGFpbmVyIGdpZy1jb21tZW50cy0kcm9vdENsYXNzLXBob3RvLWNvbnRhaW5lclwiPiRwaG90b0RpdjwvZGl2PjwvdGQ+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cImdpZy1jb21tZW50cy1jb21tZW50RGF0YVwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1jb21tZW50RGF0YS1oZWFkZXJcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXVzZXJuYW1lQW5kVGltZVwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1jb21tZW50cy11c2VybmFtZSBnaWctY29tbWVudHMtJHJvb3RDbGFzcy11c2VybmFtZVwiPiR1c2VybmFtZTwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnaWctY29tbWVudHMtJHJvb3RDbGFzcy1uZXdJbmRpY2F0b3JcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPiRuZXdUZXh0PC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1jb21tZW50cy0kcm9vdENsYXNzLXRpbWVcIj4kZGF0ZVN0cmluZzwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICckcmVtb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyRlcnJvclBsYWNlaG9sZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWNvbW1lbnQtYm9keVwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyR7b3V0c3RhbmRpbmdCYWRnZVBsYWNlaG9sZGVyfScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyR7bW9kZXJhdG9yRWRpdFRleHRQbGFjZWhvbGRlcn0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcke2JvZHl9JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJHttZWRpYUl0ZW1QbGFjZWhvbGRlcn0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtcmVwbHlCdXR0b25BbmRDb3VudFwiPiRyZXBseUJ1dHRvbiAkcmVwbGllc0NvdW50UGxhY2Vob2xkZXI8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyR2b3RlICRmbGFnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvdGQ+PC90cj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8L3RhYmxlPicsXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcImZhY2Vib29rQ29tbWVudFwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy0kY2xhc3NuYW1lXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDoke21hcmdpbkxlZnR9cHg7XCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPHRhYmxlIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPjx0cj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246dG9wXCI+PGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1waG90by1jb250YWluZXIgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtcGhvdG8tY29udGFpbmVyXCI+JHBob3RvRGl2PC9kaXY+PC90ZD4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHRkIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWNvbW1lbnREYXRhXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWNvbW1lbnREYXRhLWhlYWRlclwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtdXNlcm5hbWVBbmRUaW1lXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXVzZXJuYW1lIGdpZy1jb21tZW50cy0kcm9vdENsYXNzLXVzZXJuYW1lXCI+JHVzZXJuYW1lPC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1jb21tZW50cy0kcm9vdENsYXNzLXRpbWVcIj4kZGF0ZVN0cmluZzwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1jb21tZW50cy0kcm9vdENsYXNzLXZpYUZhY2Vib29rXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbWcgYWx0PVwiXCIgc3JjPVwiJyArIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2NvbW1lbnRzL0ZCX2xvZ28uZ2lmJykgKyAnXCIgLz48c3BhbiBjbGFzcz1cImdpZy1jb21tZW50cy0kcm9vdENsYXNzLXZpYUZhY2Vib29rLXRleHRcIj5WaWEgRmFjZWJvb2s8L3NwYW4+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWNvbW1lbnQtYm9keVwiPiRib2R5PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvdGQ+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPC90cj48L3RhYmxlPicsXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcImZsYWdcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJnaWctZmxhZy0kY29tbWVudElEXCIgY2xhc3M9XCJnaWctY29tbWVudHMtY29tbWVudC1mbGFnXCIgb25jbGljaz1cIiRvbkZsYWdDbGlja2VkOyByZXR1cm4gZmFsc2U7XCI+PC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcInJlbW92ZVwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImdpZy1yZW1vdmUtJGNvbW1lbnRJRFwiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWNvbW1lbnQtcmVtb3ZlXCIgb25jbGljaz1cIiRvblJlbW92ZUNsaWNrZWQ7IHJldHVybiBmYWxzZTtcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwidm90ZVwiLCBmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy12b3RlXCIgaWQ9XCJnaWctdm90ZS0kY29tbWVudElEXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG8uZGlzcGxheVBvc05lZ1ZvdGVzID8gJzxkaXYgaWQ9XCJnaWctdm90ZVZhbHVlUG9zLSRjb21tZW50SURcIiBjbGFzcz1cImdpZy1jb21tZW50cy12b3RlLXZhbHVlIGdpZy1jb21tZW50cy12b3RlLXZhbHVlLXBvc1wiPjwvZGl2PicgOiAnPGRpdiBpZD1cImdpZy12b3RlVmFsdWUtJGNvbW1lbnRJRFwiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXZvdGUtdmFsdWVcIj48L2Rpdj4nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGlkPVwiZ2lnLXZvdGVVcC0kY29tbWVudElEXCIgaHJlZj1cIiNcIiBjbGFzcz1cImdpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlIGdpZy1jb21tZW50cy1idXR0b24tdm90ZS11cFwiIG9uY2xpY2s9XCIkb25Wb3RlVXBDbGljazsgcmV0dXJuIGZhbHNlO1wiPjxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtdm90ZS11cFwiPjwvZGl2PjwvYT4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoby5hbGxvd05lZ2F0aXZlVm90aW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBocmVmPVwiI1wiIGlkPVwiZ2lnLXZvdGVEb3duLSRjb21tZW50SURcIiBjbGFzcz1cImdpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlIGdpZy1jb21tZW50cy1idXR0b24tdm90ZS1kb3duXCIgb25jbGljaz1cIiRvblZvdGVEb3duQ2xpY2s7IHJldHVybiBmYWxzZTtcIj48ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXZvdGUtZG93blwiPjwvZGl2PjwvYT4nIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvLmRpc3BsYXlQb3NOZWdWb3RlcyA/ICc8ZGl2IGlkPVwiZ2lnLXZvdGVWYWx1ZU5lZy0kY29tbWVudElEXCIgY2xhc3M9XCJnaWctY29tbWVudHMtdm90ZS12YWx1ZSBnaWctY29tbWVudHMtdm90ZS12YWx1ZS1uZWdcIj48L2Rpdj4nIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXS5qb2luKCcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJyZXBsaWVzQ291bnRQbGFjZWhvbGRlclwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImdpZy1jb21tZW50cy1jb21tZW50LSRjb21tZW50SUQtcmVwbGllc0NvdW50UGxhY2Vob2xkZXJcIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrOypkaXNwbGF5OmlubGluZTt6b29tOjE7XCI+JGV4cGFuZF9jb2xsYXBzZTwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJleHBhbmRfY29sbGFwc2VcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgb25jbGljaz1cIiRvbkV4YXBuZENvbGxhcHNlXCIgY2xhc3M9XCJnaWctY29tbWVudHMtcmVwbGllcy1sZW5ndGgtY29udGFpbmVyXCI+PGRpdiBpZD1cImdpZy1leHBhbmQtJGNvbW1lbnRJRFwiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWV4cGFuZC1hcnJvd1wiPjwvZGl2PjxzcGFuIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXJlcGxpZXMtbGVuZ3RoXCI+JHJlcGxpZXNfY291bnQ8L3NwYW4+PC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcInBlbmRpbmdDb21tZW50XCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLSRjbGFzc25hbWVcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiR7bWFyZ2luTGVmdH1weDtcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICckcmF0aW5ncyAkdGl0bGVQbGFjZWhvbGRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzx0YWJsZSBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj48dHI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOnRvcFwiPjxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtcGhvdG8tY29udGFpbmVyIGdpZy1jb21tZW50cy0kcm9vdENsYXNzLXBob3RvLWNvbnRhaW5lclwiPiRwaG90b0RpdjwvZGl2PjwvdGQ+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cImdpZy1jb21tZW50cy1jb21tZW50RGF0YVwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1jb21tZW50RGF0YS1oZWFkZXJcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXVzZXJuYW1lQW5kVGltZVwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1jb21tZW50cy11c2VybmFtZSBnaWctY29tbWVudHMtJHJvb3RDbGFzcy11c2VybmFtZVwiPiR1c2VybmFtZTwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnaWctY29tbWVudHMtJHJvb3RDbGFzcy10aW1lXCI+JGRhdGVTdHJpbmc8L3NwYW4+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtY29tbWVudC1ib2R5IGdpZy1jb21tZW50cy1hd2FpdGluZy1tb2RlcmF0aW9uXCI+JGF3YWl0aW5nX21vZGVyYXRpb25fdGV4dDwvZGl2PiRlcnJvclBsYWNlaG9sZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICckcmVwbHlCdXR0b24gJHJlcGxpZXNDb3VudFBsYWNlaG9sZGVyICRmbGFnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvdGQ+PC90cj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8L3RhYmxlPicsXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcImVycm9yUGxhY2Vob2xkZXJcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCIkaWQtZXJyb3ItJGNvbW1lbnRJRFwiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWVycm9yLXRleHRcIj48IS0tIGVtcHR5IGRpdnM9MTAwJSBoZWlnaHQgSUUgLS0+PC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcIm91dHN0YW5kaW5nQmFkZ2VQbGFjZWhvbGRlclwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1vdXRzdGFuZGluZy1iYWRnZVwiPjwhLS0gZW1wdHkgZGl2cz0xMDAlIGhlaWdodCBJRSAtLT48L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwibW9kZXJhdG9yRWRpdFRleHRQbGFjZWhvbGRlclwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1tb2RlcmF0b3ItZWRpdC10ZXh0XCI+JG1vZGVyYXRvckVkaXRUZXh0PC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcInZhbGlkYXRpb25FcnJvclBsYWNlaG9sZGVyXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiJGlkLXZhbGlkYXRpb25FcnJvclwiIGNsYXNzPVwiZ2lnLXZhbGlkYXRpb24tZXJyb3JcIj48IS0tIGVtcHR5IGRpdnM9MTAwJSBoZWlnaHQgSUUgLS0+PC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcIm1lZGlhSXRlbVBsYWNlaG9sZGVyXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8YSBocmVmPVwiJG1lZGlhSXRlbVVSTFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWNvbW1lbnQtbWVkaWFJdGVtXCI+JG1lZGlhSXRlbVVSTDwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJyZXBseVBsYWNlaG9sZGVyXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiJGlkLXJlcGx5LSRjb21tZW50SURcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwicmVwbHlCdXR0b25cIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxhIGhyZWY9XCIjXCIgaWQ9XCIkaWQtcmVwbHlidXR0b24tJGNvbW1lbnRJRFwiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWJ1dHRvbiBnaWctY29tbWVudHMtYnV0dG9uLXJlcGx5XCIgb25jbGljaz1cIiRvblJlcGx5Q2xpY2tlZDtyZXR1cm4gZmFsc2U7XCI+JHJlcGx5PC9hPidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJwaG90b0RpdjMyXCIsICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXBob3RvSW1hZ2VTbWFsbCBnaWctY29tbWVudHMtJHJvb3RDbGFzcy1waG90b0ltYWdlU21hbGxcIiBzdHlsZT1cIm92ZXJmbG93OmhpZGRlbjt2aXNpYmlsaXR5OmhpZGRlblwiPjxpbWcgYWx0PVwiXCIgb25sb2FkPVwiZ2lneWEuY29tbWVudHMucGx1Z2lucy5jb21tZW50cy5pbWdPbkxvYWQodGhpcywgMzIpXCIgc3JjPVwiJHBob3RvVVJMXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIiAvPjxiciAvPiRwcm92aWRlckltYWdlPC9kaXY+Jyk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJwaG90b0RpdjQ4XCIsICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXBob3RvSW1hZ2VMYXJnZSBnaWctY29tbWVudHMtJHJvb3RDbGFzcy1waG90b0ltYWdlTGFyZ2VcIiBzdHlsZT1cIm92ZXJmbG93OmhpZGRlbjt2aXNpYmlsaXR5OmhpZGRlblwiPjxpbWcgYWx0PVwiXCIgb25sb2FkPVwiZ2lneWEuY29tbWVudHMucGx1Z2lucy5jb21tZW50cy5pbWdPbkxvYWQodGhpcywgNDgpXCIgc3JjPVwiJHBob3RvVVJMXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIiAvPjxiciAvPiRwcm92aWRlckltYWdlPC9kaXY+Jyk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJwcm92aWRlckltYWdlXCIsICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXByb3ZpZGVyTG9nbyBnaWctY29tbWVudHMtJHJvb3RDbGFzcy1wcm92aWRlckxvZ29cIj48aW1nIGFsdD1cIlwiIHNyYz1cIiRwcm92aWRlckltYWdlVVJMXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIiAvPjwvZGl2PicpO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwibG9naW5DYW52YXNfbG9nZ2VkSW5cIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtbG9naW5DYW52YXMgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtbG9naW5DYW52YXNcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXBob3RvLWNvbnRhaW5lciBnaWctY29tbWVudHMtJHJvb3RDbGFzcy1waG90by1jb250YWluZXJcIj4kcGhvdG9EaXY8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWhlYWRlclRleHQgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtaGVhZGVyVGV4dFwiPiRwb3N0X2FfbmV3X2NvbW1lbnQ8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1jb21tZW50cy11c2VybmFtZSBnaWctY29tbWVudHMtJHJvb3RDbGFzcy11c2VybmFtZVwiPiR1c2VybmFtZSYjMTYwOzwvc3Bhbj4kbG9nb3V0TGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgJyRmb2xsb3dMaW5rJyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwibG9naW5DYW52YXNfbG9nZ2VkSW5fZ3Vlc3RcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtbG9naW5DYW52YXMgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtbG9naW5DYW52YXNcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXBob3RvLWNvbnRhaW5lciBnaWctY29tbWVudHMtJHJvb3RDbGFzcy1waG90by1jb250YWluZXJcIj4kcGhvdG9EaXY8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWhlYWRlclRleHQgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtaGVhZGVyVGV4dFwiPiRwb3N0X2FfbmV3X2NvbW1lbnQ8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWxvZ2luLWNvbnRhaW5lclwiPjxzcGFuIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXVzZXJuYW1lIGdpZy1jb21tZW50cy0kcm9vdENsYXNzLXVzZXJuYW1lXCI+JHVzZXJuYW1lJiMxNjA7PC9zcGFuPiRsb2dvdXRMaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnaWctY29tbWVudHMtbG9naW4gZ2lnLWNvbW1lbnRzLW9yXCI+JiMxNjA7JiMxNjA7LSYjMTYwOyR7b3J9JiMxNjA7LSYjMTYwOyYjMTYwOzwvc3Bhbj4ke2xvZ2luRHJvcGRvd259PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwibG9nb3V0TGlua1wiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnaWctY29tbWVudHMtbG9nb3V0TGluay1jb250YWluZXJcIj4oPHNwYW4gY2xhc3M9XCJnaWctY29tbWVudHMtbG9nb3V0TGluayBnaWctY29tbWVudHMtJHJvb3RDbGFzcy1sb2dvdXRMaW5rXCIgb25jbGljaz1cIiRvbkxvZ291dENsaWNrXCI+JGxvZ291dDwvc3Bhbj4pPC9zcGFuPidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJsb2dpbkNhbnZhc19sb2dnZWRPdXRfbW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWxvZ2luQ2FudmFzIGdpZy1jb21tZW50cy0kcm9vdENsYXNzLWxvZ2luQ2FudmFzXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1sb2dpbi1jb250YWluZXJcIj4ke2xvZ2luRHJvcGRvd259PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwibG9naW5DYW52YXNfbG9nZ2VkT3V0XCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWxvZ2luQ2FudmFzIGdpZy1jb21tZW50cy0kcm9vdENsYXNzLWxvZ2luQ2FudmFzXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1waG90by1jb250YWluZXIgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtcGhvdG8tY29udGFpbmVyXCI+JHBob3RvRGl2PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1oZWFkZXJUZXh0IGdpZy1jb21tZW50cy0kcm9vdENsYXNzLWhlYWRlclRleHRcIj4kcG9zdF9hX25ld19jb21tZW50PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1sb2dpbi1jb250YWluZXJcIj4ke2xvZ2luRHJvcGRvd259PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwibG9naW5DYW52YXNfbG9nZ2VkT3V0V2l0aEd1ZXN0XCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWxvZ2luQ2FudmFzIGdpZy1jb21tZW50cy0kcm9vdENsYXNzLWxvZ2luQ2FudmFzXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1waG90by1jb250YWluZXIgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtcGhvdG8tY29udGFpbmVyXCI+JHBob3RvRGl2PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1oZWFkZXJUZXh0IGdpZy1jb21tZW50cy0kcm9vdENsYXNzLWhlYWRlclRleHRcIj4kcG9zdF9hX25ld19jb21tZW50PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1sb2dpbi1jb250YWluZXJcIj4ke2xvZ2luRHJvcGRvd259PHNwYW4gY2xhc3M9XCJnaWctY29tbWVudHMtbG9naW4gZ2lnLWNvbW1lbnRzLW9yXCI+JiMxNjA7JiMxNjA7LSYjMTYwOyR7b3J9JiMxNjA7LSYjMTYwOyYjMTYwOzwvc3Bhbj4ke2d1ZXN0RHJvcGRvd259PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcImxvZ2luRHJvcGRvd25cIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxhIGhyZWY9XCIjXCIgaWQ9XCIkaWQtbG9naW5Ecm9wZG93blwiIG9uY2xpY2s9XCIke29uTG9naW5DbGlja307cmV0dXJuIGZhbHNlO1wiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWRyb3Bkb3duIGdpZy1jb21tZW50cy1kcm9wZG93bi1sb2dpblwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtZHJvcGRvd24tdGV4dCBnaWctY29tbWVudHMtZHJvcGRvd24tbG9naW4tdGV4dFwiPiRsb2dpbjwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtcHJvdmlkZXJJY29uc1wiPiYjMTYwOzwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtZHJvcGRvd24tYnV0dG9uXCI+PGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kcm9wZG93bi1idXR0b24tYXJyb3dcIj4mIzE2MDs8L2Rpdj48L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgJzwvYT4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwibG9naW5Ecm9wZG93bk5hdGl2ZVwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGEgaHJlZj1cIiNcIiBpZD1cIiRpZC1sb2dpbkRyb3Bkb3duXCIgb25jbGljaz1cIiR7b25Mb2dpbkNsaWNrfTtyZXR1cm4gZmFsc2U7XCIgY2xhc3M9XCJnaWctY29tbWVudHMtZHJvcGRvd24gZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWxvZ2luIGdpZy1jb21tZW50cy1kcm9wZG93bi1sb2dpbi1uYXRpdmVcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICckbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgJzwvYT4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwiZ3Vlc3REcm9wZG93blwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGEgaHJlZj1cIiNcIiBpZD1cIiRpZC1ndWVzdERyb3Bkb3duXCIgb25jbGljaz1cIiR7b25HdWVzdENsaWNrfTtyZXR1cm4gZmFsc2U7XCIgY2xhc3M9XCJnaWctY29tbWVudHMtZHJvcGRvd24gZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWd1ZXN0XCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kcm9wZG93bi10ZXh0IGdpZy1jb21tZW50cy1kcm9wZG93bi1ndWVzdC10ZXh0XCI+JGd1ZXN0PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kcm9wZG93bi1idXR0b25cIj48ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWJ1dHRvbi1hcnJvd1wiPiYjMTYwOzwvZGl2PjwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICAnPC9hPidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJndWVzdEJveFwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1ndWVzdERyb3Bkb3duXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJG5pY2tuYW1lVGV4dGJveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckZW1haWxUZXh0Ym94JyxcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1lbWFpbC1ub3QtZGlzcGxheWVkLXB1YmxpY2x5XCI+JHtlbWFpbF9ub3RfZGlzcGxheWVkX3B1YmxpY2x5fTwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyRva0J1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyRndWVzdEVycm9yUGxhY2Vob2xkZXInLFxyXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJndWVzdC1uaWNrbmFtZVRleHRib3hcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxpbnB1dCBpZD1cIiRpZC1uaWNrbmFtZVwiIG9ua2V5dXA9XCJpZiAodGhpcy52YWx1ZS5sZW5ndGg+PTMwKSB7dGhpcy52YWx1ZT10aGlzLnZhbHVlLnN1YnN0cmluZygwLDMwKTt9XCIgY2xhc3M9XCJnaWctY29tbWVudHMtdGV4dGJveCBnaWctY29tbWVudHMtdGV4dGJveC1uaWNrbmFtZVwiIHR5cGU9XCJ0ZXh0Ym94XCIgdmFsdWU9XCIkbmlja25hbWVcIiBvbmJsdXI9XCJpZiAodGhpcy52YWx1ZT09XFwnXFwnKSB7dGhpcy53YXRlcm1hcmtDbGVhcmVkPWZhbHNlOyB0aGlzLnZhbHVlPVxcJyRuaWNrbmFtZVxcJ31cIiBvbmZvY3VzPVwiaWYoIXRoaXMud2F0ZXJtYXJrQ2xlYXJlZCkge3RoaXMud2F0ZXJtYXJrQ2xlYXJlZD10cnVlOyB0aGlzLnZhbHVlPVxcJ1xcJzt9XCIgLz4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwiZ3Vlc3QtZW1haWxUZXh0Ym94XCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8aW5wdXQgaWQ9XCIkaWQtZW1haWxcIiBjbGFzcz1cImdpZy1jb21tZW50cy10ZXh0Ym94IGdpZy1jb21tZW50cy10ZXh0Ym94LWVtYWlsXCIgdHlwZT1cInRleHRib3hcIiB2YWx1ZT1cIiRlbWFpbFwiIG9uYmx1cj1cImlmICh0aGlzLnZhbHVlPT1cXCdcXCcpIHt0aGlzLndhdGVybWFya0NsZWFyZWQ9ZmFsc2U7IHRoaXMudmFsdWU9XFwnJGVtYWlsXFwnfVwiIG9uZm9jdXM9XCJpZighdGhpcy53YXRlcm1hcmtDbGVhcmVkKSB7dGhpcy53YXRlcm1hcmtDbGVhcmVkPXRydWU7IHRoaXMudmFsdWU9XFwnXFwnO31cIiAvPidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJndWVzdEVycm9yUGxhY2Vob2xkZXJcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtZ3Vlc3RFcnJvclwiIGlkPVwiJGlkLWd1ZXN0RXJyb3JQbGFjZWhvbGRlclwiPjwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJva0J1dHRvblwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwiJG9uR3Vlc3RMb2dpbjtyZXR1cm4gZmFsc2U7XCIgaWQ9XCIkaWQtb2tCdXR0b25cIiBjbGFzcz1cImdpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi1va1wiPiRvazwvYT4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwiYWRkQ29tbWVudFwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy0kcm9vdENsYXNzLWNvbW1lbnRCb3hcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICckcmF0aW5ncycsXHJcbiAgICAgICAgICAgICAgICAgICAgJyR0aXRsZUxhYmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAnJHRpdGxlVGV4dGJveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJyRjb21tZW50TGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICckYWRkQ29tbWVudFRleHRhcmVhJyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1hZGRDb21tZW50Rm9vdGVyXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0YWJsZSBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj48dHI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+PGRpdiBpZD1cIiRpZC1zaGFyZVRvXCIgY2xhc3M9XCJnaWctY29tbWVudHMtc2hhcmVUbyBnaWctY29tbWVudHMtJHJvb3RDbGFzcy1zaGFyZVRvXCI+JHtzaGFyZV90b308L2Rpdj48L3RkPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkIHN0eWxlPVwid2lkdGg6OTklO1wiPiRwcm92aWRlcnNDaGVja2JveGVzPC90ZD4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZD48ZGl2IGlkPVwiJGlkLXBvc3RCdXR0b25cIiBjbGFzcz1cImdpZy1jb21tZW50cy1wb3N0QnV0dG9uLWNvbnRhaW5lclwiPiRwb3N0QnV0dG9uPC9kaXY+PC90ZD4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC90cj48L3RhYmxlPicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXY+JHZhbGlkYXRpb25FcnJvclBsYWNlaG9sZGVyPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwiYWRkQ29tbWVudExhYmVsXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtbGFiZWwgZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtJGxhYmVsSUQgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtYWRkQ29tbWVudC1sYWJlbCBnaWctY29tbWVudHMtJHJvb3RDbGFzcy1hZGRDb21tZW50LSRsYWJlbElEXCI+JGxhYmVsVGV4dDwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJwcm92aWRlcnNDaGVja2JveGVzXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiJHtpZH0tcHJvdmlkZXJzQ2hlY2tib3hlc1wiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXByb3ZpZGVycy1jb250YWluZXIgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtcHJvdmlkZXJzLWNvbnRhaW5lclwiIHN0eWxlPVwidmlzaWJpbGl0eTpoaWRkZW5cIj4kcHJvdmlkZXJzQ2hlY2tib3hlc0NvbnRlbnQ8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwidXBkYXRlc1N0cmlwXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXVwZGF0ZXNTdHJpcFwiPiR7dGV4dH0gPHNwYW4gY2xhc3M9XCJnaWctY29tbWVudHMtdXBkYXRlc1N0cmlwLWxpbmtcIj4ke2xpbmtUZXh0fTwvc3Bhbj48L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwiZWRpdGFibGVSYXRpbmdcIiwgZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBhckhUTUwgPSBbXTtcclxuICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCc8ZGl2IGlkPVwiJHtpZH1cIiBjbGFzcz1cImdpZy1jb21tZW50cy1hZGRDb21tZW50LXJhdGluZ3NcIj4nKTtcclxuICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtbGFiZWwgZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtcmF0aW5ncy1yYXRpbmdOYW1lXCI+JHtuYW1lfTwvZGl2PjxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtYWRkQ29tbWVudC1yYXRpbmdzLXN0YXJzLWNvbnRhaW5lclwiPicpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUwucHVzaCgnPGRpdiBpZD1cIiR7aWR9XycgKyBpICsgJ1wiIGdpZy1iYXNlaWQ9XCIkaWRcIiBnaWctcmF0aW5nSUQ9XCIkcmF0aW5nSURcIiBnaWctcmF0aW5nLWRldGFpbHM9XCInICsgby5kZXRhaWxzW2ldICsgJ1wiIGdpZy1yYXRpbmc9XCInICsgKGkgKyAxKSArICdcIiBjbGFzcz1cImdpZy1jb21tZW50cy1zdGFyLWVkaXRhYmxlXCIgJGFjdGlvbkF0dHJpYnV0ZT1cIiRvbkNsaWNrXCIgb25tb3VzZW92ZXI9XCIkb25Nb3VzZU92ZXJcIiBvbm1vdXNlb3V0PVwiJG9uTW91c2VPdXRcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCc8L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWFkZENvbW1lbnQtcmF0aW5ncy1kZXRhaWxzXCIgaWQ9XCIke2lkfV9kZXRhaWxzXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICBhckhUTUwucHVzaCgnPC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJIVE1MLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcInJhdGluZ1wiLCBmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFySFRNTCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtcmF0aW5nXCIgdGl0bGU9XCInICsgby52YWx1ZSArICdcIj4nKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDw9IG8udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goJzxkaXYgY2xhc3M9XCIke3N0YXJDbGFzc05hbWV9ICR7c3RhckNsYXNzTmFtZX0tZnVsbFwiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSAtIG8udmFsdWUgPD0gMC41ICYmIGkgLSBvLnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhckhUTUwucHVzaCgnPGRpdiBjbGFzcz1cIiR7c3RhckNsYXNzTmFtZX0gJHtzdGFyQ2xhc3NOYW1lfS1oYWxmXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goJzxkaXYgY2xhc3M9XCIke3N0YXJDbGFzc05hbWV9ICR7c3RhckNsYXNzTmFtZX0tZW1wdHlcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhckhUTUwucHVzaCgnPC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJIVE1MLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcInRpdGxlUGxhY2Vob2xkZXJcIiwgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtdGl0bGVcIj4kdGl0bGU8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwidGl0bGVUZXh0Ym94XCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8aW5wdXQgaWQ9XCIkaWQtdGl0bGVUZXh0Ym94XCIgY2xhc3M9XCJnaWctY29tbWVudHMtdGV4dGJveCBnaWctY29tbWVudHMtdGV4dGJveC10aXRsZVwiIHR5cGU9XCJ0ZXh0Ym94XCIgLz4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwiY29tbWVudEJveFwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy0kcm9vdENsYXNzXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnJGNsb3NlSWNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyRsb2dpbkNhbnZhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJyRhZGRDb21tZW50JyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwibG9naW5DYW52YXNcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCIke2lkfS1sb2dpbkNhbnZhc1wiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWxvZ2luQ2FudmFzLWNvbnRhaW5lclwiPiRsb2dpbkNhbnZhc0NvbnRlbnQ8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcImNsb3NlSWNvblwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBvbmNsaWNrPVwiJG9uQ2xvc2VDbGlja2VkXCIgY2xhc3M9XCJnaWctY29tbWVudHMtY2xvc2UtaWNvblwiPjwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJwcm92aWRlcnNDaGVja2JveGVzQ29udGVudFwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1wcm92aWRlcnMgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtcHJvdmlkZXJzXCI+JGRyYXdQcm92aWRlcnMoKSYjMTYwOzwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJwcm92aWRlckNoZWNrYm94XCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiJGlkXCIgY2xhc3M9XCJnaWctY29tbWVudHMtY2hlY2tib3ggZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtY2hlY2tib3hcIiBvbmNsaWNrPVwiJG9uQ2hlY2tib3hDbGlja2VkO3JldHVybiBmYWxzZTtcIiBzdHlsZT1cIiRzdHlsZVwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCIkaWQtaW1hZ2VcIiBjbGFzcz1cImdpZy1jb21tZW50cy1jaGVja2JveEltYWdlIGdpZy1jb21tZW50cy0kcm9vdENsYXNzLWNoZWNrYm94SW1hZ2VcIj48IS0tIGVtcHR5IGRpdnM9MTAwJSBoZWlnaHQgSUUgLS0+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1jaGVja2JveFByb3ZpZGVySW1hZ2UgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtY2hlY2tib3hQcm92aWRlckltYWdlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChcXCckaWNvblVSTFxcJyk7XCI+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwicHJvdmlkZXJDaGVja2JveC1tb2JpbGVcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCIkaWRcIiBjbGFzcz1cImdpZy1jb21tZW50cy1jaGVja2JveCBnaWctY29tbWVudHMtJHJvb3RDbGFzcy1jaGVja2JveFwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIiRpZC1jYlwiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWNoZWNrYm94UHJvdmlkZXIgZ2lnLWNvbW1lbnRzLSRyb290Q2xhc3MtY2hlY2tib3hQcm92aWRlclwiIHZhbHVlPVwiJHtwb3N0X3RvX3Byb3ZpZGVyfVwiIG9uY2hhbmdlPVwiJG9uQ2hlY2tib3hDbGlja2VkO3JldHVybiBmYWxzZTtcIiAvPicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCIkaWQtY2JcIiBjbGFzcz1cImdpZy1jb21tZW50cy1jaGVja2JveFByb3ZpZGVyIGdpZy1jb21tZW50cy0kcm9vdENsYXNzLWNoZWNrYm94UHJvdmlkZXJcIj4ke3Bvc3RfdG9fcHJvdmlkZXJ9PC9sYWJlbD4nLFxyXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJhZGRDb21tZW50VGV4dGFyZWFcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtdGV4dGFyZWEtd3JhcHBlciBnaWctY29tbWVudHMtJHJvb3RDbGFzcy10ZXh0YXJlYS13cmFwcGVyXCI+PGRpdiBzdHlsZT1cInBhZGRpbmc6NXB4XCI+PHRleHRhcmVhIG9ubW91c2Vkb3duPVwiaWYgKHR5cGVvZiBldmVudCE9XFwndW5kZWZpbmVkXFwnICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbm4pIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgb250b3VjaHN0YXJ0PVwiaWYgKHR5cGVvZiBldmVudCE9XFwndW5kZWZpbmVkXFwnICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbikgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiBvbmtleXVwPVwidmFyIGM9Z2lneWEucGx1Z2luVXRpbHMudGV4dC5ub3JtYWxpemVMaW5lYnJlYWtzKHRoaXMudmFsdWUpOyBpZiAoYy5sZW5ndGg+PSRtYXhMZW5ndGgpIHt0aGlzLnZhbHVlPWMuc3Vic3RyaW5nKDAsJG1heExlbmd0aCk7fVwiIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLXRleHRhcmVhIGdpZy1jb21tZW50cy0kcm9vdENsYXNzLXRleHRhcmVhXCIgaWQ9XCIkaWQtY29tbWVudFRleHRhcmVhXCIgPjwvdGV4dGFyZWE+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImdpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLSRpZFwiIG9uY2xpY2s9XCIkb25DbGljaztyZXR1cm4gZmFsc2U7XCI+JHRleHQ8L2E+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcInBvc3RCdXR0b25cIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJnaWctY29tbWVudHMtYnV0dG9uIGdpZy1jb21tZW50cy1idXR0b24tcG9zdCBnaWctY29tbWVudHMtJHJvb3RDbGFzcy1idXR0b24tcG9zdFwiIG9uY2xpY2s9XCIkb25Qb3N0QnV0dG9uQ2xpY2tlZDtyZXR1cm4gZmFsc2U7XCI+JHBvc3Q8L2E+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcImNvbW1lbnRzLWhlYWRlclwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1jb21tZW50TGlzdC1oZWFkZXJcIj4kY29tbWVudHNfY291bnQ8L3NwYW4+ICRyc3M8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtdXBkYXRlc1N0cmlwUGxhY2Vob2xkZXJcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwiY29tbWVudHNDb3VudFdyYXBwZXJcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtY29tbWVudExpc3QtaGVhZGVyIGdpZy1jb21tZW50cy1jb21tZW50TGlzdC1oZWFkZXItY29tbWVudHNDb3VudFwiPiRjb3VudDwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJyc3NcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtaGVhZGVyTGlua3NcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImdpZy1jb21tZW50cy1oZWFkZXJMaW5rcy1yc3NcIiByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCIkcnNzVVJMXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiB0aXRsZT1cIlJTU1wiIG9uY2xpY2s9XCJyZXR1cm4gJG9uUnNzQ2xpY2tcIiBvbmNvbnRleHRtZW51PVwiJG9uUnNzUmlnaHRDbGlja1wiPiRyc3NfdGV4dDwvYT4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1jb21tZW50cy12ZXJ0aWNhbC1zZXBlcmF0b3IgZ2lnLWNvbW1lbnRzLXZlcnRpY2FsLXNlcGVyYXRvci1yc3NcIj58PC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWhlYWRlckxpbmtzLXN1YnNjcmliZVwiIGhyZWY9XCIjXCIgdGl0bGU9XCIkc3Vic2NyaWJlX3RleHRcIiBvbmNsaWNrPVwiJG9uU3Vic2NyaWJlQ2xpY2s7IHJldHVybiBmYWxzZTtcIiBpZD1cIiRpZC1zdWJzY3JpYmVMaW5rXCI+JHN1YnNjcmliZV90ZXh0PC9hPicsXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcImZvbGxvd0xpbmtcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWZvbGxvd1wiIG9uY2xpY2s9XCIkb25Gb2xsb3dDbGlja2VkXCIgaWQ9XCIkaWQtZm9sbG93TGlua1wiPjwvYT4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwiZG90dGVkTGluZVwiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kb3R0ZWRMaW5lXCI+PCEtLSBlbXB0eSBkaXZzPTEwMCUgaGVpZ2h0IElFIC0tPjwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJjb21tZW50cy1mb290ZXJcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtY29tbWVudExpc3QtZm9vdGVyXCI+JHNob3dNb3JlQ29tbWVudHM8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwic2hvd01vcmVDb21tZW50c1wiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1zaG93TW9yZUNvbW1lbnRzLWNvbnRhaW5lclwiPjxkaXYgb25tb3VzZW92ZXI9XCJ0aGlzLmNsYXNzTmFtZT1cXCdnaWctY29tbWVudHMtc2hvd01vcmVDb21tZW50cyBnaWctY29tbWVudHMtc2hvd01vcmVDb21tZW50cy1vdmVyXFwnXCIgb25tb3VzZW91dD1cInRoaXMuY2xhc3NOYW1lPVxcJ2dpZy1jb21tZW50cy1zaG93TW9yZUNvbW1lbnRzXFwnXCIgY2xhc3M9XCJnaWctY29tbWVudHMtc2hvd01vcmVDb21tZW50c1wiIG9uY2xpY2s9XCIkb25Nb3JlQ29tbWVudHNDbGlja1wiPjxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtc2hvd01vcmVDb21tZW50cy10ZXh0XCI+JHtzaG93X21vcmVfY29tbWVudHN9PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcInNob3dNb3JlQ29tbWVudHMtcHJvZ3Jlc3NcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtc2hvd01vcmVDb21tZW50c1wiPjxzcGFuPjxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtc2hvd01vcmVDb21tZW50cy1wcm9ncmVzc1wiPiYjMTYwOzwvZGl2Pjwvc3Bhbj48L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwiZmxhZ0RpYWxvZ1wiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2cgZ2lnLWNvbW1lbnRzLWRpYWxvZy1mbGFnXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctY2FwdGlvbiBnaWctY29tbWVudHMtZGlhbG9nLWNhcHRpb24tZmxhZ1wiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckcmVwb3J0X2NvbW1lbnRfdG9fc2l0ZV9vd25lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWRpYWxvZy1jbG9zZUljb25cIiBvbmNsaWNrPVwiJG9uQ2xvc2VcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWRpYWxvZy1ib2R5IGdpZy1jb21tZW50cy1kaWFsb2ctYm9keS1mbGFnXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRhcmVfeW91X3N1cmVfeW91X3dhbnRfdG9fbWFya190aGlzX2NvbW1lbnRfYXNfaW5hcHByb3ByaWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWRpYWxvZy1idXR0b25zIGdpZy1jb21tZW50cy1kaWFsb2ctYnV0dG9ucy1mbGFnXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImdpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi1jYW5jZWxcIiBvbmNsaWNrPVwiJHtvbkNhbmNlbH07IHJldHVybiBmYWxzZTtcIiBocmVmPVwiI1wiPiRjYW5jZWw8L2E+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImdpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi1mbGFnVGhpc0NvbW1lbnRcIiBvbmNsaWNrPVwiJHtvbkZsYWd9OyByZXR1cm4gZmFsc2U7XCIgaHJlZj1cIiNcIj4keWVzX2ZsYWdfdGhpc19jb21tZW50PC9hPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJyZW1vdmVEaWFsb2dcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtZGlhbG9nIGdpZy1jb21tZW50cy1kaWFsb2ctcmVtb3ZlXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctY2FwdGlvbiBnaWctY29tbWVudHMtZGlhbG9nLWNhcHRpb24tcmVtb3ZlXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRkZWxldGVfY29tbWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWRpYWxvZy1jbG9zZUljb25cIiBvbmNsaWNrPVwiJG9uQ2FuY2VsXCI+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctYm9keSBnaWctY29tbWVudHMtZGlhbG9nLWJvZHktcmVtb3ZlXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRhcmVfeW91X3N1cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctYnV0dG9ucyBnaWctY29tbWVudHMtZGlhbG9nLWJ1dHRvbnMtcmVtb3ZlXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImdpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi1jYW5jZWxcIiBvbmNsaWNrPVwiJHtvbkNhbmNlbH07IHJldHVybiBmYWxzZTtcIiBocmVmPVwiI1wiPiRubzwvYT4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWJ1dHRvbiBnaWctY29tbWVudHMtYnV0dG9uLXJlbW92ZVwiIG9uY2xpY2s9XCIke29uUmVtb3ZlfTsgcmV0dXJuIGZhbHNlO1wiIGhyZWY9XCIjXCI+JHllczwvYT4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwic3Vic2NyaWJlRGlhbG9nXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWRpYWxvZyBnaWctY29tbWVudHMtZGlhbG9nLXN1YnNjcmliZVwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtZGlhbG9nLWNhcHRpb24gZ2lnLWNvbW1lbnRzLWRpYWxvZy1jYXB0aW9uLXN1YnNjcmliZVwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckbm90aWZpY2F0aW9uc19zZXR0aW5ncycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWRpYWxvZy1jbG9zZUljb25cIiBvbmNsaWNrPVwiJG9uQ2FuY2VsXCI+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctYm9keSBnaWctY29tbWVudHMtZGlhbG9nLWJvZHktc3Vic2NyaWJlXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtZGlhbG9nLXN1YnNjcmliZS1lbnRlcllvdXJFbWFpbFwiPiR7ZW50ZXJfeW91cl9lbWFpbH08L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctc3Vic2NyaWJlLWVtYWlsVGV4dGJveC1jb250YWluZXJcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCBpZD1cIiR0ZXh0Ym94SURcIiBvbmtleXVwPVwiJHtvbktleVVwfVwiIHR5cGU9XCJ0ZXh0Ym94XCIgY2xhc3M9XCJnaWctY29tbWVudHMtdGV4dGJveCBnaWctY29tbWVudHMtZGlhbG9nLXN1YnNjcmliZS1lbWFpbFRleHRib3hcIiB2YWx1ZT1cIiRkZWZhdWx0RW1haWxcIiAvPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImdpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi1zdWJzY3JpYmVcIiBvbmNsaWNrPVwiJHtvblN1YnNjcmliZX07cmV0dXJuIGZhbHNlO1wiIGlkPVwiJGJ1dHRvbklEXCI+JHN1YnNjcmliZV90ZXh0PC9hPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWRpYWxvZy1zdWJzY3JpYmUtZXJyb3JcIiBpZD1cIiR7ZXJyb3JQbGFjZWhvbGRlcklEfVwiIHN0eWxlPVwidmlzaWJpbGl0eTpoaWRkZW5cIj4ke3BsZWFzZV9wcm92aWRlX2FfdmFsaWRfZW1haWxfYWRkcmVzc308L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJjb25maXJtYXRpb25EaWFsb2dcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtZGlhbG9nIGdpZy1jb21tZW50cy1kaWFsb2ctY29uZmlybWF0aW9uXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctY2FwdGlvbiBnaWctY29tbWVudHMtZGlhbG9nLWNhcHRpb24tY29uZmlybWF0aW9uXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyR0aXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLWRpYWxvZy1jbG9zZUljb25cIiBvbmNsaWNrPVwiJG9uQ2FuY2VsXCI+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctYm9keSBnaWctY29tbWVudHMtZGlhbG9nLWJvZHktY29uZmlybWF0aW9uXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyR0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBwbHVnaW5TY29wZS50ZW1wbGF0ZXMuc2V0KFwibW9yZVByb3ZpZGVyc0RpYWxvZ1wiLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2cgZ2lnLWNvbW1lbnRzLWRpYWxvZy1tb3JlUHJvdmlkZXJzXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctY2FwdGlvbiBnaWctY29tbWVudHMtZGlhbG9nLWNhcHRpb24tbW9yZVByb3ZpZGVyc1wiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckbW9yZV9zaGFyZV9kZXN0aW5hdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctc21hbGxDbG9zZUljb25cIiBvbmNsaWNrPVwiJG9uQ2FuY2VsXCI+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1kaWFsb2ctYm9keSBnaWctY29tbWVudHMtZGlhbG9nLWJvZHktbW9yZVByb3ZpZGVyc1wiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckbW9yZVByb3ZpZGVyc0hUTUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHBsdWdpblNjb3BlLnRlbXBsYXRlcy5zZXQoXCJtb3JlUHJvdmlkZXJcIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLW1vcmVQcm92aWRlclwiIG9uY2xpY2s9XCIke29uQ2xpY2t9O3JldHVybiBmYWxzZTtcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKFxcJyR7aWNvblVSTH1cXCcpO2JhY2tncm91bmQtcG9zaXRpb246bGVmdCBjZW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O3BhZGRpbmc6MCAke2ljb25XaWR0aH1cIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICckcHJvdmlkZXJOYW1lJyxcclxuICAgICAgICAgICAgICAgICc8L2E+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcIm1vcmVMaW5rXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICc8YSBocmVmPVwiI1wiIG9uY2xpY2s9XCIke29uQ2xpY2t9O3JldHVybiBmYWxzZTtcIiBjbGFzcz1cImdpZy1jb21tZW50cy1tb3JlXCI+JG1vcmU8L2E+J1xyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUudGVtcGxhdGVzLnNldChcIm15UmF0aW5nXCIsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICckbG9naW5DYW52YXMnLFxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtbXlSYXRpbmdcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLW15UmF0aW5nLWxhYmVsXCI+JHtteVJhdGluZ0xhYmVsfTwvZGl2PiAkcmF0aW5nJyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtbXlTdW1tYXJ5XCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1teVN1bW1hcnktbGFiZWxcIj4ke215U3VtbWFyeUxhYmVsfTwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtbXlTdW1tYXJ5LXZhbHVlXCI+JHtzdW1tYXJ5fTwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLW15UmV2aWV3XCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1teVJldmlldy1sYWJlbFwiPiR7bXlSZXZpZXdMYWJlbH08L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRzLW15UmV2aWV3LXZhbHVlXCI+JHtyZXZpZXd9PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgVEVYVCA9IHBsdWdpblNjb3BlLmdldFRleHQ7XHJcblxyXG5cclxuXHJcbiAgICAvKiBlbmQgcHJpdmF0ZSAqL1xyXG5cclxuXHJcbiAgICAvKiBwdWJsaWMgKi9cclxuICAgIHZhciBjb21tZW50ID0gZnVuY3Rpb24gKGRhdGEsIHBsdWdpbikge1xyXG4gICAgICAgIC8vcmF3IGRhdGFcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gZGF0YS5JRDtcclxuICAgICAgICB0aGlzLnBhcmVudElEID0gZGF0YS5wYXJlbnRJRDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbjtcclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IGRhdGEudGltZXN0YW1wO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFRleHQgPSBkYXRhLmNvbW1lbnRUZXh0ID8gZGF0YS5jb21tZW50VGV4dCA6ICcnO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFRpdGxlID0gZGF0YS5jb21tZW50VGl0bGUgPyBkYXRhLmNvbW1lbnRUaXRsZSA6ICcnO1xyXG4gICAgICAgIHRoaXMucmF0aW5ncyA9IGRhdGEucmF0aW5ncztcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gZGF0YS5zZW5kZXIubmFtZTtcclxuICAgICAgICBpZiAoIXRoaXMudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9ICdBbm9ueW1vdXMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBob3RvVVJMID0gZGF0YS5zZW5kZXIucGhvdG9VUkw7XHJcbiAgICAgICAgdGhpcy5VSUQgPSBkYXRhLlVJRDtcclxuICAgICAgICB0aGlzLnRocmVhZFRpbWVzdGFtcCA9IGRhdGEudGhyZWFkVGltZXN0YW1wO1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSBkYXRhLnNlbmRlci5sb2dpblByb3ZpZGVyO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXM7XHJcbiAgICAgICAgdGhpcy5pc1RlbXAgPSBkYXRhLmlzVGVtcDtcclxuICAgICAgICB0aGlzLmlzUG9zdCA9IGRhdGEuaXNQb3N0O1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5wcm92aWRlclBvc3RJRHMpIHRoaXMucHJvdmlkZXJQb3N0SURzID0gZGF0YS5wcm92aWRlclBvc3RJRHM7XHJcblxyXG4gICAgICAgIHRoaXMucG9zVm90ZXMgPSBkYXRhLnBvc1ZvdGVzID8gZGF0YS5wb3NWb3RlcyA6IDA7XHJcbiAgICAgICAgdGhpcy5uZWdWb3RlcyA9IGRhdGEubmVnVm90ZXMgPyBkYXRhLm5lZ1ZvdGVzIDogMDtcclxuICAgICAgICB0aGlzLnZvdGUgPSBkYXRhLnZvdGUgPyBkYXRhLnZvdGUgOiAwO1xyXG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVySUQgPSB0aGlzLnBsdWdpbi5jb250YWluZXJJRCArICdfJyArIHRoaXMuaWQ7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wbHVnaW4uY29tbWVudHNJbnN0YW5jZXMpIHRoaXMucGx1Z2luLmNvbW1lbnRzSW5zdGFuY2VzID0ge307XHJcbiAgICAgICAgdGhpcy5wbHVnaW4uY29tbWVudHNJbnN0YW5jZXNbdGhpcy5pZF0gPSB0aGlzO1xyXG5cclxuICAgIH1cclxuICAgIGNvbW1lbnQucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIHBhcmVudElEOiBudWxsLFxyXG4gICAgICAgIHBsdWdpbjogbnVsbCxcclxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICBsZXZlbDogbnVsbCxcclxuICAgICAgICBjaGlsZHJlbkNvdW50OiBudWxsLFxyXG4gICAgICAgIHRpbWVzdGFtcDogbnVsbCxcclxuICAgICAgICBwcm92aWRlcjogbnVsbCxcclxuICAgICAgICBwcm92aWRlclBvc3RJRHM6IG51bGwsXHJcbiAgICAgICAgY29udGFpbmVySUQ6IG51bGwsXHJcblxyXG4gICAgICAgIGdldENvbnRhaW5lcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQYXJlbnRDb21tZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsdWdpbi5jb21tZW50c0luc3RhbmNlc1t0aGlzLnBhcmVudElEXTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc1JlbW92ZWRDb21tZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoIXRoaXMuaXNQb3N0ICYmIFsncmVqZWN0ZWQnLCAnZGVsZXRlZCcsICdwZW5kaW5nJ10uaW5kZXhPZih0aGlzLmRhdGEuc3RhdHVzKSAhPSAtMSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaXNQb3N0UGVuZGluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuaXNQb3N0ICYmIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc3RhdHVzID09ICdwZW5kaW5nJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZXhwYW5kQ29sbGFwc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVsUmVwbGllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWctcmVwbGllcy0nICsgdGhpcy5pZCk7XHJcbiAgICAgICAgICAgIGlmIChlbFJlcGxpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbFJlcGxpZXMuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4cGFuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxFeHBhbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lnLWV4cGFuZC0nICsgdGhpcy5pZCk7XHJcbiAgICAgICAgICAgIHZhciBlbFJlcGxpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lnLXJlcGxpZXMtJyArIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICBpZiAoZWxFeHBhbmQgJiYgZWxSZXBsaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBlbEV4cGFuZC5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLWV4cGFuZC1hcnJvdyc7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2hvd0J5SUQoZWxSZXBsaWVzLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sbGFwc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVsRXhwYW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZy1leHBhbmQtJyArIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB2YXIgZWxSZXBsaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZy1yZXBsaWVzLScgKyB0aGlzLmlkKTtcclxuICAgICAgICAgICAgaWYgKGVsRXhwYW5kICYmIGVsUmVwbGllcykge1xyXG4gICAgICAgICAgICAgICAgZWxFeHBhbmQuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1jb2xsYXBzZS1hcnJvdyc7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uaGlkZUJ5SUQoZWxSZXBsaWVzLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlUmVwbGllc0NvdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlY1RlbXBsYXRlID0gdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1snZXhwYW5kX2NvbGxhcHNlJ107XHJcbiAgICAgICAgICAgIHZhciBzT25lUmVwbHkgPSB0aGlzLnBsdWdpbi50ZXh0TW9kZSA9PSAncmV2aWV3cycgPyAnb25lX2NvbW1lbnQnIDogJ29uZV9yZXBseSc7XHJcbiAgICAgICAgICAgIHZhciBzTnVtUmVwbGllcyA9IHRoaXMucGx1Z2luLnRleHRNb2RlID09ICdyZXZpZXdzJyA/ICdudW1fY29tbWVudHMnIDogJ251bV9yZXBsaWVzJztcclxuICAgICAgICAgICAgdmFyIHJlcGxpZXNDb3VudCA9IFRFWFQoKHRoaXMuY2hpbGRyZW5Db3VudCA9PSAxID8gc09uZVJlcGx5IDogc051bVJlcGxpZXMpLCAnJW51bScsIHRoaXMuY2hpbGRyZW5Db3VudCB8fCAwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgZnJlbmNoIDAgLSBzaG91bGQgbm90IGJlIHBsdXJhbCAoMjg2MDApXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi5fcC5sYW5nID09ICdmcicgJiYgdGhpcy5jaGlsZHJlbkNvdW50ID09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgcmVwbGllc0NvdW50ID0gVEVYVChzT25lUmVwbHksICclbnVtJywgdGhpcy5jaGlsZHJlbkNvdW50KS5yZXBsYWNlKCcxJywgJzAnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGVjSXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRJRDogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIG9uRXhhcG5kQ29sbGFwc2U6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLmV4cGFuZENvbGxhcHNlKCknLFxyXG4gICAgICAgICAgICAgICAgcmVwbGllc19jb3VudDogcmVwbGllc0NvdW50XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWctY29tbWVudHMtY29tbWVudC0nICsgdGhpcy5pZCArICctcmVwbGllc0NvdW50UGxhY2Vob2xkZXInKS5pbm5lckhUTUwgPSAodGhpcy5jaGlsZHJlbkNvdW50ID4gMCA/IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKGVjVGVtcGxhdGUsIGVjSXRlbSkgOiAnJyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmdldFBhcmVudENvbW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCkgcGFyZW50LnVwZGF0ZVJlcGxpZXNDb3VudCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Q29tbWVudEVsZW1lbnRCeUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuZ2V0Q29udGFpbmVyKCksICdnaWctY29tbWVudHMtY29tbWVudC0nICsgY2xhc3NOYW1lKVswXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcmtBc05ldzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzLmdldENvbW1lbnRFbGVtZW50QnlDbGFzcygnbmV3SW5kaWNhdG9yJyk7XHJcbiAgICAgICAgICAgIGlmIChlbCkgZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5tYXJrQXNOZXc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5nZXRDb21tZW50RWxlbWVudEJ5Q2xhc3MoJ25ld0luZGljYXRvcicpO1xyXG4gICAgICAgICAgICBpZiAoZWwpIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZVJlcGx5Ym94OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGx1Z2luLmNvbnRhaW5lcklEICsgJy1yZXBseS0nICsgdGhpcy5pZCkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGx1Z2luLmNvbnRhaW5lcklEICsgJy1yZXBseS0nICsgdGhpcy5pZCkuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy9JRSBidWdcclxuICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wbHVnaW4uY29udGFpbmVySUQgKyAnLXJlcGx5YnV0dG9uLScgKyB0aGlzLmlkKTtcclxuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi1yZXBseSc7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmxhc3RSZXBseUlkID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIGRpdkd1ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wbHVnaW4uY29udGFpbmVySUQgKyAnLXJlcGx5LScgKyB0aGlzLmlkICsgJy1ndWVzdFVJJyk7XHJcbiAgICAgICAgICAgIGlmIChkaXZHdWVzdCAmJiBkaXZHdWVzdC5wYXJlbnROb2RlKSBkaXZHdWVzdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdkd1ZXN0KTtcclxuICAgICAgICAgICAgdmFyIGRpdkxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wbHVnaW4uY29udGFpbmVySUQgKyAnLXJlcGx5LScgKyB0aGlzLmlkICsgJy1sb2dpbicpO1xyXG4gICAgICAgICAgICBpZiAoZGl2TG9naW4gJiYgZGl2TG9naW4ucGFyZW50Tm9kZSkgZGl2TG9naW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZMb2dpbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93RmxhZ0RpYWxvZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4ubGFzdEZsYWdDb21tZW50KSB0aGlzLnBsdWdpbi5sYXN0RmxhZ0NvbW1lbnQuaGlkZUZsYWdEaWFsb2coKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5mbGFnZ2VkKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmxhc3RGbGFnQ29tbWVudCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWctZmxhZy0nICsgdGhpcy5pZCkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSAodGhpcy5wbHVnaW4udGV4dE1vZGUgPT0gJ3Jldmlld3MnICYmIHRoaXMubGV2ZWwgPT0gMCA/ICdyZXZpZXcnIDogJ2NvbW1lbnQnKTtcclxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1snZmxhZ0RpYWxvZyddO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydF9jb21tZW50X3RvX3NpdGVfb3duZXI6IFRFWFQoJ3JlcG9ydF8nICsgdHlwZSArICdfdG9fc2l0ZV9vd25lcicpLFxyXG4gICAgICAgICAgICAgICAgYXJlX3lvdV9zdXJlX3lvdV93YW50X3RvX21hcmtfdGhpc19jb21tZW50X2FzX2luYXBwcm9wcmlhdGU6IFRFWFQoJ2FyZV95b3Vfc3VyZV95b3Vfd2FudF90b19tYXJrX3RoaXNfJyArIHR5cGUgKyAnX2FzX2luYXBwcm9wcmlhdGUnKSxcclxuICAgICAgICAgICAgICAgIGNhbmNlbDogVEVYVCgnY2FuY2VsJyksXHJcbiAgICAgICAgICAgICAgICB5ZXNfZmxhZ190aGlzX2NvbW1lbnQ6IFRFWFQoJ3llc19mbGFnX3RoaXNfJyArIHR5cGUpLFxyXG4gICAgICAgICAgICAgICAgb25DbG9zZTogdGhpcy5nZXRSZWZTdHJpbmcoKSArICcuaGlkZUZsYWdEaWFsb2coKScsXHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5nZXRSZWZTdHJpbmcoKSArICcuaGlkZUZsYWdEaWFsb2coKScsXHJcbiAgICAgICAgICAgICAgICBvbkZsYWc6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLmZsYWcoKSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVySUQgPSB0aGlzLnBsdWdpbi5jb250YWluZXJJRCArICctJyArIHRoaXMuaWQgKyAnLWZsYWcnO1xyXG4gICAgICAgICAgICB2YXIgZGl2RmxhZyA9IGdpZ3lhLnV0aWxzLkRPTS5jcmVhdGVUb3BMZXZlbERpdihjb250YWluZXJJRCArICdfY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGRpdkZsYWcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBkaXZGbGFnLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtY29udGFpbmVyJztcclxuICAgICAgICAgICAgZGl2RmxhZy5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgaXRlbSk7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5zZXRTaXplKGRpdkZsYWcsIDQwMCwgMTUwLCB0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGVGbGFnRGlhbG9nOiBmdW5jdGlvbiAoZG9udEhpZGVGbGFnKSB7XHJcbiAgICAgICAgICAgIGlmICghZG9udEhpZGVGbGFnKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lnLWZsYWctJyArIHRoaXMuaWQpLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGx1Z2luLmNvbnRhaW5lcklEICsgJy0nICsgdGhpcy5pZCArICctZmxhZ19jb250YWluZXInKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dSZW1vdmVEaWFsb2c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuc2VuZGVyLmlzU2VsZikgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgdHlwZSA9ICh0aGlzLnBsdWdpbi50ZXh0TW9kZSA9PSAncmV2aWV3cycgJiYgdGhpcy5sZXZlbCA9PSAwID8gJ3JldmlldycgOiAnY29tbWVudCcpO1xyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnBsdWdpbi5fdGVtcGxhdGVzWydyZW1vdmVEaWFsb2cnXTtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICBhcmVfeW91X3N1cmU6IFRFWFQoJ2FyZV95b3Vfc3VyZV95b3Vfd2FudF90b19wZXJtYW5lbnRseV9kZWxldGVfeW91cl8nICsgdHlwZSArICdfcW0nKSxcclxuICAgICAgICAgICAgICAgIG5vOiBURVhUKCdubycpLFxyXG4gICAgICAgICAgICAgICAgeWVzOiBURVhUKCd5ZXMnKSxcclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLmdldFJlZlN0cmluZygpICsgJy5oaWRlUmVtb3ZlRGlhbG9nKCknLFxyXG4gICAgICAgICAgICAgICAgb25SZW1vdmU6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLnJlbW92ZSgpJyxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZV9jb21tZW50OiBURVhUKCdkZWxldGVfJyArIHR5cGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lcklEID0gdGhpcy5wbHVnaW4uY29udGFpbmVySUQgKyAnLScgKyB0aGlzLmlkICsgJy1yZW1vdmUnO1xyXG4gICAgICAgICAgICB2YXIgZGl2UmVtb3ZlID0gZ2lneWEudXRpbHMuRE9NLmNyZWF0ZVRvcExldmVsRGl2KGNvbnRhaW5lcklEICsgJ19jb250YWluZXInKTtcclxuICAgICAgICAgICAgZGl2UmVtb3ZlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgZGl2UmVtb3ZlLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtY29udGFpbmVyJztcclxuICAgICAgICAgICAgZGl2UmVtb3ZlLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBpdGVtKTtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnNldFNpemUoZGl2UmVtb3ZlLCAzOTAsIDE1MCwgdHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlUmVtb3ZlRGlhbG9nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBsdWdpbi5jb250YWluZXJJRCArICctJyArIHRoaXMuaWQgKyAnLXJlbW92ZV9jb250YWluZXInKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcmtBc0ZsYWdnZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZsYWdnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgZGl2RmxhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWctZmxhZy0nICsgdGhpcy5pZCk7XHJcbiAgICAgICAgICAgIGlmIChkaXZGbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBkaXZGbGFnLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtY29tbWVudC1mbGFnLXN1Ym1pdHRlZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5fc3RhdGUuZmxhZ3NbdGhpcy5pZF0gPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLmNvbW1lbnRzLmRlbGV0ZUNvbW1lbnQodGhpcy5wbHVnaW4uX3AsIHsgY29tbWVudElEOiB0aGlzLmlkIH0pO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnRDb21tZW50KCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uX2NvbW1lbnRzUmF3RGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLl9jb21tZW50c1Jhd0RhdGFbaV0uSUQgPT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLl9jb21tZW50c1Jhd0RhdGEuc3BsaWNlKGksIDEpOyAvL3JlbW92ZSBwZW5kaW5nIGNvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2RlbGV0ZSB0aGlzLnBsdWdpbi5jb21tZW50c0luc3RhbmNlc1t0aGlzLmlkXTtcclxuICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuQ291bnQtLTtcclxuICAgICAgICAgICAgICAgIHBhcmVudC51cGRhdGVSZXBsaWVzQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnRDb21tZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi50ZXh0TW9kZSAhPSAncmV2aWV3cycgfHwgdGhpcy5sZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5fY29tbWVudENvdW50LS07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnVwZGF0ZUNvdW50KCk7XHJcbiAgICAgICAgICAgIHZhciBlbENvbW1lbnQgPSB0aGlzLmdldENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBpZiAoZWxDb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbkNvdW50ICYmIHRoaXMuY2hpbGRyZW5Db3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc3RhdHVzID0gJ2RlbGV0ZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jb21tZW50VGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsQ29tbWVudC5pbm5lckhUTUwgPSB0aGlzLmdldEhUTUwoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBlbENvbW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsQ29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVJlbW92ZURpYWxvZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLl91c2VyQ29tbWVudHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uX3VzZXJDb21tZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi5fdXNlckNvbW1lbnRzW2ldLklEID09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uX3VzZXJDb21tZW50cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnRleHRNb2RlID09ICdyZXZpZXdzJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uX2RyYXdDb21tZW50Qm94KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZvdGVVcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52b3RlID09ICdwb3MnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZvdGUoJ25vbmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Vm90ZSgncG9zJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZvdGVEb3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZvdGUgPT0gJ25lZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Vm90ZSgnbm9uZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWb3RlKCduZWcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0Vm90ZTogZnVuY3Rpb24gKHZvdGUpIHtcclxuICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGx1Z2luLl91c2VyIHx8ICF0aGlzLnBsdWdpbi5fdXNlci5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsVm90ZUlEID0gdm90ZSA9PSAncG9zJyA/ICdnaWctdm90ZVVwLScgKyB0aGlzLmlkIDogJ2dpZy12b3RlRG93bi0nICsgdGhpcy5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZ2luQ2xpY2tlZCh0aGlzLmlkICsgJy12b3RlLScgKyB2b3RlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbFZvdGVJRCksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBUaGlzLnNldFZvdGUodm90ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy52b3RlSW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICAgICAgICAgIGdpZ3lhLmNvbW1lbnRzLnZvdGUodGhpcy5wbHVnaW4uX2MsIHsgdm90ZTogdm90ZSwgY29tbWVudElEOiB0aGlzLmlkLCBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyBUaGlzLnZvdGVJblByb2dyZXNzID0gZmFsc2U7IH0gfSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodm90ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncG9zJzogdGhpcy5wb3NWb3RlcysrOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25lZyc6IHRoaXMubmVnVm90ZXMrKzsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnZvdGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3Bvcyc6IHRoaXMucG9zVm90ZXMtLTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICduZWcnOiB0aGlzLm5lZ1ZvdGVzLS07IGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudm90ZSA9IHZvdGU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVm90ZVVJKCk7XHJcbiAgICAgICAgICAgIHZhciBvRXZlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdjb21tZW50Vm90ZWQnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlJRDogdGhpcy5wbHVnaW4uX3AuY2F0ZWdvcnlJRCxcclxuICAgICAgICAgICAgICAgIHN0cmVhbUlEOiB0aGlzLnBsdWdpbi5fcC5zdHJlYW1JRCxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRoaXMuZGF0YSxcclxuICAgICAgICAgICAgICAgIHZvdGU6IHZvdGUsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiB0aGlzLnBsdWdpbi50ZXh0TW9kZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52b3RlID0gdGhpcy52b3RlO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEucG9zVm90ZXMgPSB0aGlzLnBvc1ZvdGVzO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubmVnVm90ZXMgPSB0aGlzLm5lZ1ZvdGVzO1xyXG4gICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQob0V2ZW50LCB0aGlzLnBsdWdpbi5fcCk7XHJcbiAgICAgICAgICAgIG9FdmVudCA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShvRXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgb0V2ZW50LmV2ZW50TmFtZSA9ICdjb21tZW50Vm90ZSc7IC8vYmFjayBjb21wYXRcclxuICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KG9FdmVudCwgdGhpcy5wbHVnaW4uX3ApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5DbGlja2VkOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ubG9naW5DbGlja2VkKHRoaXMuaWQsIGVsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZVZvdGVVSTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxWb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZy12b3RlLScgKyB0aGlzLmlkKTtcclxuICAgICAgICAgICAgaWYgKGVsVm90ZSAmJiBlbFZvdGUub3JpZ2luYWxIVE1MKSBlbFZvdGUuaW5uZXJIVE1MID0gZWxWb3RlLm9yaWdpbmFsSFRNTDtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbHVnaW4uX3VzZXIgfHwgIXRoaXMucGx1Z2luLl91c2VyLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZvdGUgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVsVm90ZVVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZy12b3RlVXAtJyArIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB2YXIgZWxWb3RlRG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWctdm90ZURvd24tJyArIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB2YXIgZWxWb3RlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lnLXZvdGVWYWx1ZS0nICsgdGhpcy5pZCk7XHJcbiAgICAgICAgICAgIHZhciBlbFZvdGVWYWx1ZVBvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWctdm90ZVZhbHVlUG9zLScgKyB0aGlzLmlkKTtcclxuICAgICAgICAgICAgdmFyIGVsVm90ZVZhbHVlTmVnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZy12b3RlVmFsdWVOZWctJyArIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudm90ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncG9zJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxWb3RlVXApIGVsVm90ZVVwLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtYnV0dG9uIGdpZy1jb21tZW50cy1idXR0b24tZG93biBnaWctY29tbWVudHMtYnV0dG9uLXZvdGUgZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlLXVwJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxWb3RlRG93bikgZWxWb3RlRG93bi5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLWJ1dHRvbiBnaWctY29tbWVudHMtYnV0dG9uLXZvdGUgZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlLWRvd24nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbmVnJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxWb3RlVXApIGVsVm90ZVVwLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtYnV0dG9uIGdpZy1jb21tZW50cy1idXR0b24tdm90ZSBnaWctY29tbWVudHMtYnV0dG9uLXZvdGUtdXAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbFZvdGVEb3duKSBlbFZvdGVEb3duLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtYnV0dG9uIGdpZy1jb21tZW50cy1idXR0b24tZG93biBnaWctY29tbWVudHMtYnV0dG9uLXZvdGUgZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlLWRvd24nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbm9uZSc6XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbFZvdGVVcCkgZWxWb3RlVXAuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlIGdpZy1jb21tZW50cy1idXR0b24tdm90ZS11cCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsVm90ZURvd24pIGVsVm90ZURvd24uY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi12b3RlIGdpZy1jb21tZW50cy1idXR0b24tdm90ZS1kb3duJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxWb3RlVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2b3RlVmFsdWUgPSB0aGlzLnBvc1ZvdGVzIC0gdGhpcy5uZWdWb3RlcztcclxuICAgICAgICAgICAgICAgIGlmICh2b3RlVmFsdWUgPiAwKSB2b3RlVmFsdWUgPSAnKycgKyB2b3RlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odm90ZVZhbHVlKSB8fCB2b3RlVmFsdWUgPT0gMCkgdm90ZVZhbHVlID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgZWxWb3RlVmFsdWUuaW5uZXJIVE1MID0gdm90ZVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbFZvdGVWYWx1ZVBvcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZvdGVWYWx1ZSA9IHRoaXMucG9zVm90ZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAodm90ZVZhbHVlKSB2b3RlVmFsdWUgPSB2b3RlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odm90ZVZhbHVlKSB8fCB2b3RlVmFsdWUgPT0gMCkgdm90ZVZhbHVlID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgZWxWb3RlVmFsdWVQb3MuaW5uZXJIVE1MID0gdm90ZVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbFZvdGVWYWx1ZU5lZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZvdGVWYWx1ZSA9IHRoaXMubmVnVm90ZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAodm90ZVZhbHVlKSB2b3RlVmFsdWUgPSB2b3RlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odm90ZVZhbHVlKSB8fCB2b3RlVmFsdWUgPT0gMCkgdm90ZVZhbHVlID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgZWxWb3RlVmFsdWVOZWcuaW5uZXJIVE1MID0gdm90ZVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbGFnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLmNvbW1lbnRzLmZsYWdDb21tZW50KHRoaXMucGx1Z2luLl9jLCB7IGNvbW1lbnRJRDogdGhpcy5pZCB9KTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlRmxhZ0RpYWxvZyh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5tYXJrQXNGbGFnZ2VkKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTdGF0ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlzdGVuRm9yQ29tYmluYXRpb246IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghZSkgdmFyIGUgPSB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gNDAgJiYgZS5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNDb21tZW50RGF0YSA9IGdpZ3lhLnV0aWxzLnN0cmluZ1V0aWxzLmZvcm1hdCgnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1jb250YWluZXJcIj5TdHJlYW0gSUQ6IHswfTxiciAvPkNvbW1lbnQgSUQ6IHsxfTwvZGl2PicsIHRoaXMucGx1Z2luLl9wLnN0cmVhbUlELCB0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5wdXRHTUJhbGxvb25OZXh0VG8odGhpcy5nZXRDb250YWluZXIoKSwgc0NvbW1lbnREYXRhLCAnQ29tbWVudCBEYXRhJywgNDAwLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91c2VPdmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLmlzTW9iaWxlVUkpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmtleWRvd25EZWxlZ2F0ZSkgdGhpcy5rZXlkb3duRGVsZWdhdGUgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gVGhpcy5saXN0ZW5Gb3JDb21iaW5hdGlvbihlKTsgfTtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25rZXlkb3duJywgdGhpcy5rZXlkb3duRGVsZWdhdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5ZG93bkRlbGVnYXRlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmZsYWdnZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXZGbGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZy1mbGFnLScgKyB0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXZGbGFnKSBkaXZGbGFnLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtY29tbWVudC1mbGFnIGdpZy1jb21tZW50cy1jb21tZW50LWZsYWctb3Zlcic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLl9zZXR0aW5ncy5hbGxvd0NvbW1lbnREZWxldGlvbiAmJiB0aGlzLmRhdGEuc2VuZGVyLmlzU2VsZiAmJiAhdGhpcy5wbHVnaW4uX3VzZXIuaXNHdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdlJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWctcmVtb3ZlLScgKyB0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXZSZW1vdmUpIGRpdlJlbW92ZS5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLWNvbW1lbnQtcmVtb3ZlIGdpZy1jb21tZW50cy1jb21tZW50LXJlbW92ZS1vdmVyJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91c2VPdXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZGV0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25rZXlkb3duJywgdGhpcy5rZXlkb3duRGVsZWdhdGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duRGVsZWdhdGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsgfTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuZmxhZ2dlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdkZsYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lnLWZsYWctJyArIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpdkZsYWcpIGRpdkZsYWcuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1jb21tZW50LWZsYWcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi5fc2V0dGluZ3MuYWxsb3dDb21tZW50RGVsZXRpb24gJiYgdGhpcy5kYXRhLnNlbmRlci5pc1NlbGYgJiYgIXRoaXMucGx1Z2luLl91c2VyLmlzR3Vlc3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXZSZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lnLXJlbW92ZS0nICsgdGhpcy5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGl2UmVtb3ZlKSBkaXZSZW1vdmUuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1jb21tZW50LXJlbW92ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEhUTUw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJvZHkgPSB0aGlzLmNvbW1lbnRUZXh0LnJlcGxhY2UoL1xcJC9nLCAnJiMzNjsnKTtcclxuICAgICAgICAgICAgYm9keSA9IGdpZ3lhLmdsb2JhbC53YnIoYm9keSwgMTUpLnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+Jyk7XHJcbiAgICAgICAgICAgIHZhciBwaG90b1VSTCA9IGdpZ3lhLmdsb2JhbC5nZXRQaG90b1VSTCh0aGlzLnBob3RvVVJMKTtcclxuICAgICAgICAgICAgaWYgKCFwaG90b1VSTCB8fCBwaG90b1VSTCA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGhvdG9VUkwgPSBpbWdCYXNlICsgJ2F2YXRhcl8zMngzMi5naWYnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc09uZVJlcGx5ID0gdGhpcy5wbHVnaW4udGV4dE1vZGUgPT0gJ3Jldmlld3MnID8gJ29uZV9jb21tZW50JyA6ICdvbmVfcmVwbHknO1xyXG4gICAgICAgICAgICB2YXIgc051bVJlcGxpZXMgPSB0aGlzLnBsdWdpbi50ZXh0TW9kZSA9PSAncmV2aWV3cycgPyAnbnVtX2NvbW1lbnRzJyA6ICdudW1fcmVwbGllcyc7XHJcbiAgICAgICAgICAgIHZhciByZXBsaWVzQ291bnQgPSBURVhUKCh0aGlzLmNoaWxkcmVuQ291bnQgPT0gMSA/IHNPbmVSZXBseSA6IHNOdW1SZXBsaWVzKSwgJyVudW0nLCB0aGlzLmNoaWxkcmVuQ291bnQgfHwgMCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGZyZW5jaCAwIC0gc2hvdWxkIG5vdCBiZSBwbHVyYWwgKDI4NjAwKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uX3AubGFuZyA9PSAnZnInICYmIHRoaXMuY2hpbGRyZW5Db3VudCA9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIHJlcGxpZXNDb3VudCA9IFRFWFQoc09uZVJlcGx5LCAnJW51bScsIHRoaXMuY2hpbGRyZW5Db3VudCkucmVwbGFjZSgnMScsICcwJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB1c2VybmFtZSA9IHRoaXMuaXNSZW1vdmVkQ29tbWVudCgpID8gVEVYVCgnYW5vbnltb3VzJykgOiB0aGlzLnVzZXJuYW1lO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRocmVhZFBhZGRpbmcgPSB0aGlzLnBsdWdpbi5pc01vYmlsZVVJID8gMTAgOiA0MjtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5wbHVnaW4uY29udGFpbmVySUQsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50SUQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICBuZXdUZXh0OiBURVhUKCduZXcnKSxcclxuICAgICAgICAgICAgICAgIHBob3RvRGl2OiB0aGlzLnBsdWdpbi5fdGVtcGxhdGVzWydwaG90b0RpdjMyJ10sXHJcbiAgICAgICAgICAgICAgICByZXBseUJ1dHRvbjogdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1sncmVwbHlCdXR0b24nXSxcclxuICAgICAgICAgICAgICAgIHJlcGx5OiB0aGlzLnBsdWdpbi50ZXh0TW9kZSA9PSAncmV2aWV3cycgPyBURVhUKCdjb21tZW50JykgOiBURVhUKCdyZXBseScpLFxyXG4gICAgICAgICAgICAgICAgb25SZXBseUNsaWNrZWQ6IHRoaXMucGx1Z2luLmdldFJlZlN0cmluZygpICsgJy5yZXBseUNsaWNrZWQoXFwnJyArIHRoaXMuaWQgKyAnXFwnKScsXHJcbiAgICAgICAgICAgICAgICBjbGFzc25hbWU6ICh0aGlzLnBhcmVudElEICYmIHRoaXMucGFyZW50SUQgIT0gMCkgPyBcImNvbW1lbnQtY2hpbGRcIiA6IFwiY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vdENsYXNzOiAnY29tbWVudCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogKHRoaXMubGV2ZWwgKiB0aHJlYWRQYWRkaW5nKSArICdweCcsXHJcbiAgICAgICAgICAgICAgICBjaGlsZENvbW1lbnRzOiBwbHVnaW5TY29wZS5kcmF3Q29tbWVudHModGhpcy5jaGlsZHJlbiwgdGhpcy5wbHVnaW4sIHRoaXMubGV2ZWwgKyAxKSxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBwaG90b1VSTCxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogZ2lneWEudXRpbHMuc2FuaXRpemUuc2FuaXRpemVIVE1MKGdpZ3lhLmdsb2JhbC53YnIodXNlcm5hbWUsIDIwKSkucmVwbGFjZSgvXFwkL2csICcmIzM2OycpLFxyXG4gICAgICAgICAgICAgICAgbWVkaWFJdGVtUGxhY2Vob2xkZXI6IHRoaXMucGx1Z2luLl90ZW1wbGF0ZXNbJ21lZGlhSXRlbVBsYWNlaG9sZGVyJ10sXHJcbiAgICAgICAgICAgICAgICBtZWRpYUl0ZW1VUkw6ICh0aGlzLmRhdGEubWVkaWFJdGVtcyAmJiB0aGlzLmRhdGEubWVkaWFJdGVtcy5sZW5ndGggPiAwID8gdGhpcy5kYXRhLm1lZGlhSXRlbXNbMF0udXJsIDogJycpLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudFJlcGx5UGxhY2Vob2xkZXI6IHRoaXMucGx1Z2luLl90ZW1wbGF0ZXNbJ3JlcGx5UGxhY2Vob2xkZXInXSxcclxuICAgICAgICAgICAgICAgIGVycm9yUGxhY2Vob2xkZXI6IHRoaXMucGx1Z2luLl90ZW1wbGF0ZXNbJ2Vycm9yUGxhY2Vob2xkZXInXSxcclxuICAgICAgICAgICAgICAgIG1vZGVyYXRvckVkaXRUZXh0UGxhY2Vob2xkZXI6IHRoaXMuZGF0YS5tb2RlcmF0b3JFZGl0ID8gdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1snbW9kZXJhdG9yRWRpdFRleHRQbGFjZWhvbGRlciddIDogJycsXHJcbiAgICAgICAgICAgICAgICBvdXRzdGFuZGluZ0JhZGdlUGxhY2Vob2xkZXI6IHRoaXMuZGF0YS5tb2RlcmF0b3JSYXRpbmcgPT0gMTAgPyB0aGlzLnBsdWdpbi5fdGVtcGxhdGVzWydvdXRzdGFuZGluZ0JhZGdlUGxhY2Vob2xkZXInXSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgbW9kZXJhdG9yRWRpdFRleHQ6IHRoaXMucGx1Z2luLnRleHRNb2RlID09ICdyZXZpZXdzJyA/IFRFWFQoJ3Jldmlld19lZGl0ZWRfYnlfYV9tb2RlcmF0b3InKSA6IFRFWFQoJ2NvbW1lbnRfZWRpdGVkX2J5X2FfbW9kZXJhdG9yJyksXHJcbiAgICAgICAgICAgICAgICBkb3R0ZWRMaW5lOiAnJyxcclxuICAgICAgICAgICAgICAgIHJlcGxpZXNDb3VudFBsYWNlaG9sZGVyOiB0aGlzLnBsdWdpbi5fdGVtcGxhdGVzWydyZXBsaWVzQ291bnRQbGFjZWhvbGRlciddLFxyXG4gICAgICAgICAgICAgICAgcmVwbGllc19jb3VudDogcmVwbGllc0NvdW50LFxyXG4gICAgICAgICAgICAgICAgZXhwYW5kX2NvbGxhcHNlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVzZXJJbWFnZTogdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1sndXNlckltYWdlJ10sXHJcbiAgICAgICAgICAgICAgICBwcm92aWRlckltYWdlOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRoaXMucGx1Z2luLl90ZW1wbGF0ZXNbJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgICAgIGZsYWc6ICcnLFxyXG4gICAgICAgICAgICAgICAgdm90ZTogJycsXHJcbiAgICAgICAgICAgICAgICByZW1vdmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgb25Wb3RlVXBDbGljazogdGhpcy5nZXRSZWZTdHJpbmcoKSArICcudm90ZVVwKCknLFxyXG4gICAgICAgICAgICAgICAgb25Wb3RlRG93bkNsaWNrOiB0aGlzLmdldFJlZlN0cmluZygpICsgJy52b3RlRG93bigpJyxcclxuICAgICAgICAgICAgICAgIG9uRmxhZ0NsaWNrZWQ6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLnNob3dGbGFnRGlhbG9nKCknLFxyXG4gICAgICAgICAgICAgICAgb25SZW1vdmVDbGlja2VkOiB0aGlzLmdldFJlZlN0cmluZygpICsgJy5zaG93UmVtb3ZlRGlhbG9nKCknLFxyXG4gICAgICAgICAgICAgICAgb25tb3VzZW92ZXI6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLm1vdXNlT3ZlcigpJyxcclxuICAgICAgICAgICAgICAgIG9ubW91c2VvdXQ6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLm1vdXNlT3V0KCknLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nczogJycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5jb21tZW50VGl0bGUgJiYgIXRoaXMuaXNSZW1vdmVkQ29tbWVudCgpID8gdGhpcy5jb21tZW50VGl0bGUgOiAnJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlUGxhY2Vob2xkZXI6IHRoaXMuY29tbWVudFRpdGxlID8gdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1sndGl0bGVQbGFjZWhvbGRlciddIDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1vZGVyYXRvclJhdGluZyA9PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc25hbWUgKz0gJyBnaWctY29tbWVudHMtY29tbWVudC1vdXRzdGFuZGluZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucmF0aW5ncyAmJiAhdGhpcy5pc1JlbW92ZWRDb21tZW50KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByYXRpbmdUZW1wbGF0ZSA9IHRoaXMucGx1Z2luLl90ZW1wbGF0ZXNbJ3JhdGluZyddO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zdGFyQ2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1zdGFyJztcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmF0aW5ncyA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHJhdGluZ1RlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nSUQ6ICdvdmVyYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5yYXRpbmdzWydfb3ZlcmFsbCddXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLndpZHRoID0gdGhpcy5wbHVnaW4uX3Aud2lkdGggLSAodGhpcy5sZXZlbCAqIHRocmVhZFBhZGRpbmcpICsgJ3B4JztcclxuICAgICAgICAgICAgaXRlbS5tYXJnaW5MZWZ0ID0gKHRoaXMubGV2ZWwgKiB0aHJlYWRQYWRkaW5nKSArICgodGhpcy5sZXZlbCAtIDEpICogMTApO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5tYXJnaW5MZWZ0IDwgMCkgaXRlbS5tYXJnaW5MZWZ0ID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5mcm9tRmFjZWJvb2spIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NuYW1lICs9ICcgZ2lnLWNvbW1lbnRzLWNvbW1lbnQtZmFjZWJvb2snO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jb21tZW50ID0gdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1snZmFjZWJvb2tDb21tZW50J11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uX3NldHRpbmdzLmVuYWJsZUZsYWdnaW5nICYmICF0aGlzLmlzVGVtcCAmJiAhdGhpcy5pc1Bvc3RQZW5kaW5nKCkgJiYgIXRoaXMuaXNSZW1vdmVkQ29tbWVudCgpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmZsYWcgPSB0aGlzLnBsdWdpbi5fdGVtcGxhdGVzWydmbGFnJ107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlID0gdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1sncmVtb3ZlJ107XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uX3NldHRpbmdzLmVuYWJsZVZvdGluZyAmJiAhdGhpcy5pc1RlbXAgJiYgIXRoaXMuaXNQb3N0UGVuZGluZygpICYmICF0aGlzLmlzUmVtb3ZlZENvbW1lbnQoKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52b3RlID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4uX3RlbXBsYXRlc1sndm90ZSddLCB7IGNvbW1lbnRJRDogdGhpcy5pZCwgYWxsb3dOZWdhdGl2ZVZvdGluZzogdGhpcy5wbHVnaW4uX3NldHRpbmdzLmFsbG93TmVnYXRpdmVWb3RpbmcsIGRpc3BsYXlQb3NOZWdWb3RlczogdGhpcy5wbHVnaW4uX3NldHRpbmdzLmRpc3BsYXlQb3NOZWdWb3RlcyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKHRoaXMucGx1Z2luLnN0cmVhbUluZm8uc3RhdHVzID09ICdyZWFkT25seScpIHx8ICh0aGlzLnBsdWdpbi5fc2V0dGluZ3MuZW5hYmxlQ29tbWVudEJvZHkgPT0gJ2Rpc2FibGVkJykgfHwgdGhpcy5pc1JlbW92ZWRDb21tZW50KCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVwbHlCdXR0b24gPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm92aWRlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gZ2lneWEuc29jaWFsaXplLl9nZXRQcm92aWRlckJ5TmFtZSh0aGlzLnByb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm92aWRlciAmJiBwcm92aWRlci5JRCAhPSA2MDAyIC8qU2l0ZSovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm92aWRlckltYWdlID0gdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1sncHJvdmlkZXJJbWFnZSddO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvdmlkZXJJbWFnZVVSTCA9IGltZ0Jhc2UgKyAncHJvdmlkZXJzLycgKyB0aGlzLnByb3ZpZGVyICsgJ1VzZXJfMTR4MTQuZ2lmJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYWRkaW5nTGVmdCA9ICcwcHgnO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kb3R0ZWRMaW5lID0gdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1snZG90dGVkTGluZSddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxldmVsICsgMSA+IHRoaXMucGx1Z2luLl9zZXR0aW5ncy50aHJlYWRpbmdEZXB0aCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5yZXBseUJ1dHRvbiA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0uZXhwYW5kX2NvbGxhcHNlID0gdGhpcy5wbHVnaW4uX3RlbXBsYXRlc1snZXhwYW5kX2NvbGxhcHNlJ107XHJcbiAgICAgICAgICAgICAgICBpdGVtLm9uRXhhcG5kQ29sbGFwc2UgPSB0aGlzLmdldFJlZlN0cmluZygpICsgJy5leHBhbmRDb2xsYXBzZSgpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbm93ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdmFyIGQgPSAobmV3IERhdGUoKSlcclxuICAgICAgICAgICAgZC5zZXRUaW1lKHRoaXMudGltZXN0YW1wKTtcclxuICAgICAgICAgICAgdmFyIGRoID0gKG5vdyAtIHRoaXMudGltZXN0YW1wKSAvIDEwMDAgLyA2MCAvIDYwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlbW92ZWRDb21tZW50KCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGF0ZVN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRoICogNjAgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRhdGVTdHJpbmcgPSBURVhUKCdsZXNzX3RoYW5fYV9taW51dGVfYWdvJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRhdGVTdHJpbmcgPSBNYXRoLnJvdW5kKGRoICogNjApID09IDEgPyBURVhUKCdvbmVfbWludXRlX2FnbycpIDogVEVYVCgnbnVtX21pbnV0ZXNfYWdvJywgJyVudW0nLCBNYXRoLnJvdW5kKGRoICogNjApKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaCA8IDI0KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRhdGVTdHJpbmcgPSBNYXRoLnJvdW5kKGRoKSA9PSAxID8gVEVYVCgnb25lX2hvdXJfYWdvJykgOiBURVhUKCdudW1faG91cnNfYWdvJywgJyVudW0nLCBNYXRoLnJvdW5kKGRoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRhdGVTdHJpbmcgPSBNYXRoLnJvdW5kKGRoIC8gMjQpID09IDEgPyBURVhUKCdvbmVfZGF5X2FnbycpIDogVEVYVCgnbnVtX2RheXNfYWdvJywgJyVudW0nLCBNYXRoLnJvdW5kKGRoIC8gMjQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnBsdWdpbi5fdGVtcGxhdGVzWydjb21tZW50Q29udGFpbmVyJ107XHJcbiAgICAgICAgICAgIGl0ZW0uY29tbWVudENvbnRhaW5lcklkID0gdGhpcy5jb250YWluZXJJRDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUZW1wIHx8IHRoaXMuaXNQb3N0UGVuZGluZygpIHx8IHRoaXMuaXNSZW1vdmVkQ29tbWVudCgpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnJlcGx5QnV0dG9uID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNQb3N0UGVuZGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNvbW1lbnQgPSB0aGlzLnBsdWdpbi5fdGVtcGxhdGVzWydwZW5kaW5nQ29tbWVudCddO1xyXG4gICAgICAgICAgICAgICAgaXRlbVsnYXdhaXRpbmdfbW9kZXJhdGlvbl90ZXh0J10gPSAodGhpcy5wbHVnaW4udGV4dE1vZGUgPT0gJ3Jldmlld3MnICYmIHRoaXMubGV2ZWwgPT0gMCkgPyBURVhUKCd5b3VyX3Jldmlld19pc19hd2FpdGluZ19tb2RlcmF0aW9uJykgOiBURVhUKCd5b3VyX2NvbW1lbnRfaXNfYXdhaXRpbmdfbW9kZXJhdGlvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNSZW1vdmVkQ29tbWVudCgpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNvbW1lbnQgPSB0aGlzLnBsdWdpbi5fdGVtcGxhdGVzWydwZW5kaW5nQ29tbWVudCddO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09ICdwZW5kaW5nJylcclxuICAgICAgICAgICAgICAgICAgICBpdGVtWydhd2FpdGluZ19tb2RlcmF0aW9uX3RleHQnXSA9ICh0aGlzLnBsdWdpbi50ZXh0TW9kZSA9PSAncmV2aWV3cycgJiYgdGhpcy5sZXZlbCA9PSAwKSA/IFRFWFQoJ3RoaXNfcmV2aWV3X2lzX2F3YWl0aW5nX21vZGVyYXRpb24nKSA6IFRFWFQoJ3RoaXNfY29tbWVudF9pc19hd2FpdGluZ19tb2RlcmF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVsnYXdhaXRpbmdfbW9kZXJhdGlvbl90ZXh0J10gPSAodGhpcy5wbHVnaW4udGV4dE1vZGUgPT0gJ3Jldmlld3MnICYmIHRoaXMubGV2ZWwgPT0gMCkgPyBURVhUKCd0aGlzX3Jldmlld19oYXNfYmVlbl9kZWxldGVkJykgOiBURVhUKCd0aGlzX2NvbW1lbnRfaGFzX2JlZW5fZGVsZXRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGVtcGxhdGUsIGl0ZW0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVmU3RyaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsdWdpbi5nZXRSZWZTdHJpbmcoKSArICcuY29tbWVudHNJbnN0YW5jZXNbXFwnJyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmlkKSArICdcXCddJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21tZW50c1BsdWdpbi5wcm90b3R5cGUgPVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfY29tbWVudHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBfdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIF9zZXR0aW5nczogbnVsbCxcclxuICAgICAgICAgICAgICAgIF9zdGF0ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIF9sYXN0Q29tbWVudFRpbWVzdGFtcDogbnVsbCxcclxuICAgICAgICAgICAgICAgIF9wcmV2aW91c0xhc3RDb21tZW50VGltZXN0YW1wOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgX3JlZnJlc2hUaW1lb3V0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgX3A6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBfY29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgX2lzUGF1c2VkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgX3RlbXBsYXRlczoge30sXHJcblxyXG4gICAgICAgICAgICAgICAgc2F2ZVN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLnNldE9iamVjdCgnZ2lnLWNvbW1lbnRzJywgdGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxvYWRTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLmdldE9iamVjdCgnZ2lnLWNvbW1lbnRzJywge2ZsYWdzOiB7fX0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxvYWRUZW1wbGF0ZXM6IGZ1bmN0aW9uIChvVGVtcGxhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGVtcGxhdGVzID0gcGx1Z2luU2NvcGUudGVtcGxhdGVzLmdldE1hcENvcHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob1RlbXBsYXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob1RlbXBsYXRlc1snbG9naW5DYW52YXNfbG9nZ2VkT3V0J10gIT0gbnVsbCAmJiBvVGVtcGxhdGVzWydsb2dpbkNhbnZhc19sb2dnZWRPdXRXaXRoR3Vlc3QnXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvVGVtcGxhdGVzWydsb2dpbkNhbnZhc19sb2dnZWRPdXRXaXRoR3Vlc3QnXSA9IG9UZW1wbGF0ZXNbJ2xvZ2luQ2FudmFzX2xvZ2dlZE91dCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb1RlbXBsYXRlc1snbG9naW5DYW52YXNfbG9nZ2VkT3V0X21vYmlsZSddID0gb1RlbXBsYXRlc1snbG9naW5DYW52YXNfbG9nZ2VkT3V0J107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGVtcGxhdGVzID0gZ2lneWEudXRpbHMub2JqZWN0Lm1lcmdlKFt0aGlzLl90ZW1wbGF0ZXMsIG9UZW1wbGF0ZXNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcC5jdGFnICs9ICdfdGVtcGxhdGVzJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2hlY2tGb3JOZXdDb21tZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzWydyZWZyZXNoTW9kZSddICE9ICdvZmYnICYmICF0aGlzLl9pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5jb21tZW50cy5nZXRTdHJlYW1JbmZvKHRoaXMuX3AsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RyZWFtSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tbWVudENvdW50ID0gVGhpcy50ZXh0TW9kZSA9PSAncmV2aWV3cycgPyByZXNwb25zZS5zdHJlYW1JbmZvLnJhdGluZ0NvdW50IDogcmVzcG9uc2Uuc3RyZWFtSW5mby5jb21tZW50Q291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRlZENvbW1lbnRzQ291bnQgPSBjb21tZW50Q291bnQgLSBUaGlzLl9jb21tZW50Q291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRlZENvbW1lbnRzQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9sYXN0Q29tbWVudFRpbWVzdGFtcCA9IHJlc3BvbnNlLnN0cmVhbUluZm8ubGFzdENvbW1lbnRUaW1lc3RhbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9uZXdDb21tZW50c0NvdW50ID0gKFRoaXMuX25ld0NvbW1lbnRzQ291bnQgfHwgMCkgKyBhZGRlZENvbW1lbnRzQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLm9uSGFzTmV3Q29tbWVudHMoVGhpcy5fc2V0dGluZ3NbJ3JlZnJlc2hNb2RlJ10gPT0gJ2NvdW50T25seScgPyBhZGRlZENvbW1lbnRzQ291bnQgOiBUaGlzLl9uZXdDb21tZW50c0NvdW50LCBjb21tZW50Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uSGFzTmV3Q29tbWVudHM6IGZ1bmN0aW9uIChuZXdDb21tZW50c0NvdW50LCB0b3RhbENvbW1lbnRzQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZnJlc2hNb2RlID0gdGhpcy5fc2V0dGluZ3NbJ3JlZnJlc2hNb2RlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZVN0cmlwVGVtcGxhdGUgPSB0aGlzLl90ZW1wbGF0ZXNbJ3VwZGF0ZXNTdHJpcCddO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVTdHJpcFBsYWNlaG9sZGVyID0gdGhpcy5nZXRFbGVtZW50QnlDb21tZW50c0NsYXNzKCd1cGRhdGVzU3RyaXBQbGFjZWhvbGRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWZyZXNoTW9kZSA9PSAnY291bnRPbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTdHJpcFBsYWNlaG9sZGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3RyaXBQbGFjZWhvbGRlci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh1cGRhdGVTdHJpcFRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXdDb21tZW50c0NvdW50ID09IDEgPyBURVhUKCcxX25ld19jb21tZW50X3dhc19yZWNlbnRseV9wb3N0ZWQnKSA6IFRFWFQoJ251bV9uZXdfY29tbWVudHNfd2VyZV9yZWNlbnRseV9wb3N0ZWQnLCAnJW51bScsIG5ld0NvbW1lbnRzQ291bnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ6IFRFWFQoJ2NsaWNrX3RvX3Nob3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmdldEVsZW1lbnRCeUNvbW1lbnRzQ2xhc3MoJ3VwZGF0ZXNTdHJpcC1saW5rJyksICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuZ2V0TmV3Q29tbWVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX2NvbW1lbnRDb3VudCA9IHRvdGFsQ29tbWVudHNDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVN0cmlwUGxhY2Vob2xkZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlZnJlc2hNb2RlID09ICdmdWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE5ld0NvbW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1lbnRDb3VudCA9IHRvdGFsQ29tbWVudHNDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3RyaXBQbGFjZWhvbGRlci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh1cGRhdGVTdHJpcFRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXdDb21tZW50c0NvdW50ID09IDEgPyBURVhUKCcxX2NvbW1lbnRfd2FzX3JlY2VudGx5X2FkZGVkJykgOiBURVhUKCdudW1fY29tbWVudHNfd2VyZV9yZWNlbnRseV9hZGRlZCcsICclbnVtJywgbmV3Q29tbWVudHNDb3VudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dDogVEVYVCgncGF1c2Vfc3RyZWFtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5nZXRFbGVtZW50QnlDb21tZW50c0NsYXNzKCd1cGRhdGVzU3RyaXAtbGluaycpLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9pc1BhdXNlZCA9ICFUaGlzLl9pc1BhdXNlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gVGhpcy5faXNQYXVzZWQgPyBURVhUKCdyZXN1bWVfc3RyZWFtJykgOiBURVhUKCdwYXVzZV9zdHJlYW0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldEVsZW1lbnRCeUNvbW1lbnRzQ2xhc3M6IGZ1bmN0aW9uIChjb21tZW50c0NsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctY29tbWVudHMtJyArIGNvbW1lbnRzQ2xhc3MpWzBdO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldE5ld0NvbW1lbnRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29tbWVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgX2dldENvbW1lbnRzOiBmdW5jdGlvbiAoZ2V0TmV3Q29tbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvKnZhciBzdHJlYW1UaXRsZSA9IHRoaXMuX3BbJ3N0cmVhbVRpdGxlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdHJlYW1UaXRsZSkgc3RyZWFtVGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0cmVhbVRpdGxlIHx8IHN0cmVhbVRpdGxlID09ICcnKSBzdHJlYW1UaXRsZSA9ICdTaXRlJztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyZWFtVVJMID0gdGhpcy5fcFsnc3RyZWFtVVJMJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdHJlYW1VUkwpIHN0cmVhbVVSTCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7Ki9cclxuICAgICAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5yZW1vdmVVbmRlZmluZWQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUlEOiB0aGlzLl9wWydjYXRlZ29yeUlEJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbUlEOiB0aGlzLl9wWydzdHJlYW1JRCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlU2V0dGluZ3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVVc2VyT3B0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiB0aGlzLl9wWydmaWx0ZXJUYWdzJ11cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVGhpcy5ub3BhZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMudGhyZWFkTGltaXQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoVGhpcy5fbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdldE5ld0NvbW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuc3RhcnQgPSBUaGlzLl9uZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy9maXJzdCBjYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5pbmNsdWRlU3RyZWFtSW5mbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXROZXdDb21tZW50cyAmJiB0aGlzLnN0cmVhbUluZm8gJiYgdGhpcy5zdHJlYW1JbmZvWydsYXN0Q29tbWVudFRpbWVzdGFtcCddKSBwYXJhbXMuc2luY2UgPSB0aGlzLnN0cmVhbUluZm9bJ2xhc3RDb21tZW50VGltZXN0YW1wJ107XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAoIWRhdGEuc3RyZWFtSW5mbykgZGF0YS5zdHJlYW1JbmZvID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKCFkYXRhLnVzZXJPcHRpb25zKSBkYXRhLnVzZXJPcHRpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yQ29kZSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVRoaXMuYnJvYWRjYXN0ZWRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUaGlzLmNvbnRhaW5lciAmJiAhVGhpcy5fbmV4dCkgVGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRXJyb3JGcm9tUmVzcG9uc2UoVGhpcy5fcCwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5icm9hZGNhc3RlZEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnNldHRpbmdzKSBUaGlzLl9zZXR0aW5ncyA9IGRhdGEuc2V0dGluZ3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVRoaXMuX3NldHRpbmdzKSBUaGlzLl9zZXR0aW5ncyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudXNlckNvbW1lbnRzKSBUaGlzLl91c2VyQ29tbWVudHMgPSBkYXRhLnVzZXJDb21tZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMudGV4dE1vZGUgPSAoVGhpcy5fc2V0dGluZ3MubW9kZSA9PSAncmF0aW5nc09ubHknIHx8IFRoaXMuX3NldHRpbmdzLm1vZGUgPT0gJ3Jldmlld3MnKSA/ICdyZXZpZXdzJyA6ICdjb21tZW50cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZG9udENoYW5nZUNvdW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fY29tbWVudHNSYXdEYXRhID0gVGhpcy5fY29tbWVudHNSYXdEYXRhLmNvbmNhdChkYXRhLmNvbW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2V0TmV3Q29tbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9jb21tZW50c1Jhd0RhdGEgPSBkYXRhLmNvbW1lbnRzLmNvbmNhdChUaGlzLl9jb21tZW50c1Jhd0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9jb21tZW50c1Jhd0RhdGEgPSBkYXRhLmNvbW1lbnRzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9oYXNNb3JlID0gZGF0YS5oYXNNb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RyZWFtSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuc3RyZWFtSW5mbyA9IGRhdGEuc3RyZWFtSW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9jb21tZW50Q291bnQgPSBUaGlzLnRleHRNb2RlID09ICdyZXZpZXdzJyA/IGRhdGEuc3RyZWFtSW5mby5yYXRpbmdDb3VudCA6IGRhdGEuc3RyZWFtSW5mby5jb21tZW50Q291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fbGFzdENvbW1lbnRUaW1lc3RhbXAgPSBkYXRhLnN0cmVhbUluZm8ubGFzdENvbW1lbnRUaW1lc3RhbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS51c2VyT3B0aW9ucykgVGhpcy51c2VyT3B0aW9ucyA9IGRhdGEudXNlck9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRoaXMuX3AudXNlU2l0ZUxvZ2luICE9IG51bGwpIFRoaXMuX3NldHRpbmdzLnVzZVNpdGVMb2dpbiA9IFRoaXMuX3AudXNlU2l0ZUxvZ2luO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fc2V0dGluZ3MudXNlU2l0ZUxvZ2luID0gZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0VHJ1ZShUaGlzLl9zZXR0aW5ncy51c2VTaXRlTG9naW4pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9jb21tZW50cyA9IHBsdWdpblNjb3BlLmJ1aWxkQ29tbWVudHNUcmVlKFRoaXMuX2NvbW1lbnRzUmF3RGF0YSwgZGF0YS5zZXR0aW5ncy5zb3J0QnksIFRoaXMsIGRvbnRDaGFuZ2VDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVRoaXMuX25leHQpIHsgLy9maXJzdCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRoaXMuX3NldHRpbmdzLm5ld0NvbW1lbnRQb3NpdGlvbiA9PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUaGlzLmNvbnRhaW5lcklEKS5pbm5lckhUTUwgPSAnPGRpdiBpZD1cIicgKyBUaGlzLmNvbnRhaW5lcklEICsgJy1jb21tZW50cy1oZWFkZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZ2lnLWNvbW1lbnRMaXN0XCIgaWQ9XCInICsgVGhpcy5jb250YWluZXJJRCArICctY29tbWVudHNcIj48L2Rpdj48ZGl2IGlkPVwiJyArIFRoaXMuY29udGFpbmVySUQgKyAnLWNvbW1lbnRzLWZvb3RlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtc2VwYXJhdG9yXCI+PC9kaXY+PGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1jb21tZW50Qm94LWJvdHRvbVwiIGlkPVwiJyArIFRoaXMuY29udGFpbmVySUQgKyAnLWNvbW1lbnRCb3hcIj48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFRoaXMuY29udGFpbmVySUQpLmlubmVySFRNTCA9ICc8ZGl2IGlkPVwiJyArIFRoaXMuY29udGFpbmVySUQgKyAnLWNvbW1lbnRCb3hcIj48L2Rpdj48ZGl2IGlkPVwiJyArIFRoaXMuY29udGFpbmVySUQgKyAnLWNvbW1lbnRzLWhlYWRlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJnaWctY29tbWVudExpc3RcIiBpZD1cIicgKyBUaGlzLmNvbnRhaW5lcklEICsgJy1jb21tZW50c1wiPjwvZGl2PjxkaXYgaWQ9XCInICsgVGhpcy5jb250YWluZXJJRCArICctY29tbWVudHMtZm9vdGVyXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZnJlc2hNb2RlID0gVGhpcy5fc2V0dGluZ3NbJ3JlZnJlc2hNb2RlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZnJlc2hJbnRlcnZhbCA9IFRoaXMuX3NldHRpbmdzWydyZWZyZXNoSW50ZXJ2YWwnXSA/IFRoaXMuX3NldHRpbmdzWydyZWZyZXNoSW50ZXJ2YWwnXSAqIDEwMDAgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWZyZXNoSW50ZXJ2YWwgPiAwICYmIHJlZnJlc2hNb2RlICE9ICdvZmYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hUaW1lb3V0ID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuY2hlY2tGb3JOZXdDb21tZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCByZWZyZXNoSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLmRyYXdOZXdDb21tZW50cyhUaGlzLl9jb21tZW50cywgZ2V0TmV3Q29tbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXROZXdDb21tZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX25leHQgPSBkYXRhLm5leHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9kcmF3Rm9vdGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuY29tbWVudHMuZ2V0Q29tbWVudHModGhpcy5fYywgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRNb3JlQ29tbWVudHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLl90ZW1wbGF0ZXNbJ3Nob3dNb3JlQ29tbWVudHMtcHJvZ3Jlc3MnXTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1jb21tZW50cy1mb290ZXInKS5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgeyBpZDogdGhpcy5jb250YWluZXJJRCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29tbWVudHMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBfZHJhd0Zvb3RlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlc1snY29tbWVudHMtZm9vdGVyJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmNvbnRhaW5lcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9yZUNvbW1lbnRzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3JlQ29tbWVudHNDbGljazogdGhpcy5nZXRSZWZTdHJpbmcoKSArICcuZ2V0TW9yZUNvbW1lbnRzKCknXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNNb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcHJlbG9hZCBwcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpbWdCYXNlICsgJ3Byb2dyZXNzX2FuaS5naWYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNob3dNb3JlQ29tbWVudHMgPSB0aGlzLl90ZW1wbGF0ZXNbJ3Nob3dNb3JlQ29tbWVudHMnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVsnc2hvd19tb3JlX2NvbW1lbnRzJ10gPSB0aGlzLl9zZXR0aW5ncy5tb2RlID09ICdyZXZpZXdzJyA/IFRFWFQoJ3Nob3dfbW9yZV9yZXZpZXdzJykgOiB0aGlzLl9zZXR0aW5ncy5tb2RlID09ICdyYXRpbmdzT25seScgPyBURVhUKCdzaG93X21vcmVfcmF0aW5ncycpIDogVEVYVCgnc2hvd19tb3JlX2NvbW1lbnRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySUQgKyAnLWNvbW1lbnRzLWZvb3RlcicpLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBfZHJhd0hlYWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlc1snY29tbWVudHMtaGVhZGVyJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmNvbnRhaW5lcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50c19jb3VudDogdGhpcy5fc2V0dGluZ3MuZGlzYWJsZUNvbW1lbnRzQ291bnQgPyAnJyA6IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuX3RlbXBsYXRlc1snY29tbWVudHNDb3VudFdyYXBwZXInXSwge30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByc3M6ICh0aGlzLl9zZXR0aW5ncy5kaXNhYmxlUlNTIHx8IHRoaXMuaXNNb2JpbGVVSSA/ICcnIDogdGhpcy5fdGVtcGxhdGVzWydyc3MnXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJzc190ZXh0OiBURVhUKCdyc3MnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlX3RleHQ6IFRFWFQoJ3N1YnNjcmliZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogKHRoaXMuX3BbJ2NhdGVnb3J5SUQnXSA/IHRoaXMuX3BbJ2NhdGVnb3J5SUQnXSA6IDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW1faWQ6ICh0aGlzLl9wWydzdHJlYW1JRCddID8gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX3BbJ3N0cmVhbUlEJ10pIDogMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJzc1VSTDogdGhpcy5zdHJlYW1JbmZvLnJzc1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Sc3NDbGljazogdGhpcy5nZXRSZWZTdHJpbmcoKSArICcub25Sc3NDbGljayh0cnVlKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3Vic2NyaWJlQ2xpY2s6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLm9uU3Vic2NyaWJlQ2xpY2soKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUnNzUmlnaHRDbGljazogdGhpcy5nZXRSZWZTdHJpbmcoKSArICcub25Sc3NDbGljaygpJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1jb21tZW50cy1oZWFkZXInKS5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdWJzY3JpYmVVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblJzc0NsaWNrOiBmdW5jdGlvbiAocmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RyZWFtSW5mb0lmTmVlZGVkKHRoaXMuc3RyZWFtSW5mby5yc3NVUkwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RyZWFtSW5mb0lmTmVlZGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uU3Vic2NyaWJlQ2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVuc3Vic2NyaWJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gVGhpcy5vblVuc3Vic2NyaWJlKGUpOyB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0cmVhbUluZm8uaXNVc2VyU3Vic2NyaWJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5jb21tZW50cy51bnN1YnNjcmliZSh0aGlzLl9jLCB7IGNhbGxiYWNrOiB1bnN1YnNjcmliZUNhbGxiYWNrIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy51bnN1YnNjcmliZVRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmNvbW1lbnRzLnVuc3Vic2NyaWJlKHRoaXMuX2MsIHsgdW5zdWJzY3JpYmVUb2tlbjogdGhpcy51bnN1YnNjcmliZVRva2VuLCBjYWxsYmFjazogdW5zdWJzY3JpYmVDYWxsYmFjayB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9ICh0aGlzLnRleHRNb2RlID09ICdyZXZpZXdzJyA/ICdyZXZpZXcnIDogJ2NvbW1lbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U3Vic2NyaWJlRGlhbG9nKFRFWFQoJ2VudGVyX3lvdXJfZW1haWxfdG9fc3Vic2NyaWJlX3RvX25ld18nICsgdHlwZSArICdzX2luX3RoaXNfc3RyZWFtX2NvbG9uJyksIFRFWFQoJ3N1YnNjcmliZScpLCB0aGlzLmdldFJlZlN0cmluZygpICsgJy5zdWJzY3JpYmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Gb2xsb3dDbGlja2VkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlck9wdGlvbnMgJiYgdGhpcy51c2VyT3B0aW9ucy5yZXBseU5vdGlmaWNhdGlvbnMgPT0gJ2ltbWVkaWF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmZvbGxvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gKHRoaXMudGV4dE1vZGUgPT0gJ3Jldmlld3MnID8gJ3JldmlldycgOiAnY29tbWVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW50ZXJZb3VyRW1haWxUZXh0ID0gdHlwZSA9PSAncmV2aWV3JyA/IFRFWFQoJ2VudGVyX3lvdXJfZW1haWxfdG9fcmVjZWl2ZV9ub3RpZmljYXRpb25zX3doZW5fc29tZW9uZV9yZXBsaWVzX3RvX3lvdXJfY29tbWVudHNfY29sb24nKSA6IFRFWFQoJ2VudGVyX3lvdXJfZW1haWxfdG9fcmVjZWl2ZV9ub3RpZmljYXRpb25zX3doZW5fc29tZW9uZV9yZXBsaWVzX3RvX3lvdXJfJyArIHR5cGUgKyAnc19jb2xvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTdWJzY3JpYmVEaWFsb2coZW50ZXJZb3VyRW1haWxUZXh0LCBURVhUKCdmb2xsb3cnKSwgdGhpcy5nZXRSZWZTdHJpbmcoKSArICcuZm9sbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvbGxvd1N0YXR1czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5jb21tZW50cy5nZXRVc2VyT3B0aW9ucyh0aGlzLl9jLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZXJyb3JDb2RlID09IDQwMzAwNSkgZS51c2VyT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudXNlck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnVzZXJPcHRpb25zID0gZS51c2VyT3B0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnVwZGF0ZUZvbGxvd1VJKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVGb2xsb3dVSTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbEZvbGxvd0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1mb2xsb3dMaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsRm9sbG93TGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMuX3VzZXIuaXNDb25uZWN0ZWQgfHwgdGhpcy5fdXNlci5pc0d1ZXN0KSAmJiAhdGhpcy5fdXNlci5pc1RlbXBVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNGb2xsb3dpbmcgPSB0aGlzLnVzZXJPcHRpb25zICYmIHRoaXMudXNlck9wdGlvbnMucmVwbHlOb3RpZmljYXRpb25zID09ICdpbW1lZGlhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxGb2xsb3dMaW5rLmNsYXNzTmFtZSA9IGlzRm9sbG93aW5nID8gJ2dpZy1jb21tZW50cy1mb2xsb3cgZ2lnLWNvbW1lbnRzLWZvbGxvd2luZycgOiAnZ2lnLWNvbW1lbnRzLWZvbGxvdyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbEZvbGxvd0xpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxGb2xsb3dMaW5rLnRpdGxlID0gaXNGb2xsb3dpbmcgPyAnJyA6ICh0aGlzLnRleHRNb2RlID09ICdyZXZpZXdzJyA/IFRFWFQoJ25vdGlmeV9tZV93aGVuX3NvbWVvbmVfY29tbWVudHNfb25fbXlfcmV2aWV3JykgOiBURVhUKCdub3RpZnlfbWVfd2hlbl9zb21lb25lX3JlcGxpZXNfdG9fbXlfY29tbWVudHMnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbEZvbGxvd0xpbmsuaW5uZXJIVE1MID0gaXNGb2xsb3dpbmcgPyBURVhUKCdmb2xsb3dpbmcnKSA6ICh0aGlzLnRleHRNb2RlID09ICdyZXZpZXdzJyA/IFRFWFQoJ2ZvbGxvd19yZXBsaWVzX3RvX215X3Jldmlld3MnKSA6IFRFWFQoJ2ZvbGxvd19yZXBsaWVzX3RvX215X2NvbW1lbnRzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxGb2xsb3dMaW5rLm9ubW91c2VvdmVyID0gaXNGb2xsb3dpbmcgPyBmdW5jdGlvbiAoKSB7IGlmIChpc0ZvbGxvd2luZykgdGhpcy5pbm5lckhUTUwgPSBURVhUKCd1bmZvbGxvdycpOyB0aGlzLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtZm9sbG93IGdpZy1jb21tZW50cy11bmZvbGxvdycgfSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbEZvbGxvd0xpbmsub25tb3VzZW91dCA9IGlzRm9sbG93aW5nID8gZnVuY3Rpb24gKCkgeyBpZiAoaXNGb2xsb3dpbmcpIHRoaXMuaW5uZXJIVE1MID0gVEVYVCgnZm9sbG93aW5nJyk7IHRoaXMuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1mb2xsb3cgZ2lnLWNvbW1lbnRzLWZvbGxvd2luZycgfSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbEZvbGxvd0xpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb2xsb3c6IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICdfc3Vic2NyaWJlVGV4dGJveCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZW1haWwgJiYgdGJFbWFpbCkgZW1haWwgPSB0YkVtYWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVN1YnNjcmliZURpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLmNvbW1lbnRzLnNldFVzZXJPcHRpb25zKHRoaXMuX2MsIHsgcmVwbHlOb3RpZmljYXRpb25zOiAnaW1tZWRpYXRlJywgbm90aWZpY2F0aW9uc0VtYWlsOiBlbWFpbCwgbm90aWZpY2F0aW9uc0xhbmd1YWdlOiB0aGlzLl9jLmxhbmcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJPcHRpb25zKSB0aGlzLnVzZXJPcHRpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyT3B0aW9ucy5yZXBseU5vdGlmaWNhdGlvbnMgPSAnaW1tZWRpYXRlJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZvbGxvd1VJKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5mb2xsb3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5jb21tZW50cy5zZXRVc2VyT3B0aW9ucyh0aGlzLl9jLCB7IHJlcGx5Tm90aWZpY2F0aW9uczogJ2Rpc2FibGVkJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJPcHRpb25zLnJlcGx5Tm90aWZpY2F0aW9ucyA9ICdkaXNhYmxlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGb2xsb3dVSSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNob3dTdWJzY3JpYmVEaWFsb2c6IGZ1bmN0aW9uICh0ZXh0LCBzdWJzY3JpYmVCdXR0b25UZXh0LCBzT25TdWJzY3JpYmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVTdWJzY3JpYmVEaWFsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLl90ZW1wbGF0ZXNbJ3N1YnNjcmliZURpYWxvZyddO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25zX3NldHRpbmdzOiBURVhUKCdub3RpZmljYXRpb25zX3NldHRpbmdzJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyX3lvdXJfZW1haWw6IHRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZV90ZXh0OiBzdWJzY3JpYmVCdXR0b25UZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5nZXRSZWZTdHJpbmcoKSArICcuaGlkZVN1YnNjcmliZURpYWxvZygpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJzY3JpYmU6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLm9uU3Vic2NyaWJlT0soJyArIHNPblN1YnNjcmliZSArICcpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxlYXNlX3Byb3ZpZGVfYV92YWxpZF9lbWFpbF9hZGRyZXNzOiBURVhUKCdwbGVhc2VfcHJvdmlkZV9hX3ZhbGlkX2VtYWlsX2FkZHJlc3MnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dGJveElEOiB0aGlzLmNvbnRhaW5lcklEICsgJ19zdWJzY3JpYmVUZXh0Ym94JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uSUQ6IHRoaXMuY29udGFpbmVySUQgKyAnX3N1YnNjcmliZVRleHRib3hCdXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvclBsYWNlaG9sZGVySUQ6IHRoaXMuY29udGFpbmVySUQgKyAnX3N1YnNjcmliZUVycm9yUGxhY2Vob2xkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVVwOiB0aGlzLmdldFJlZlN0cmluZygpICsgJy5zdWJzY3JpYmVFbWFpbEtleVVwKGV2ZW50KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlJRDogdGhpcy5jb250YWluZXJJRCArICdfc3Vic2NyaWJlQm9keScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRFbWFpbDogdGhpcy5fdXNlci5lbWFpbCA/IHRoaXMuX3VzZXIuZW1haWwgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVySUQgPSB0aGlzLmNvbnRhaW5lcklEICsgJy1zdWJzY3JpYmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXZSZW1vdmUgPSBnaWd5YS51dGlscy5ET00uY3JlYXRlVG9wTGV2ZWxEaXYoY29udGFpbmVySUQgKyAnX2NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdlJlbW92ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2UmVtb3ZlLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtY29udGFpbmVyJztcclxuICAgICAgICAgICAgICAgICAgICBkaXZSZW1vdmUuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGVtcGxhdGUsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5zZXRTaXplKGRpdlJlbW92ZSwgMzkwLCBkaXZSZW1vdmUub2Zmc2V0SGVpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblN1YnNjcmliZU9LOiBmdW5jdGlvbiAoZm5TdWJzY3JpYmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGJFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySUQgKyAnX3N1YnNjcmliZVRleHRib3gnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2lneWEucGx1Z2luVXRpbHMudmFsaWRhdGlvbi5pc0VtYWlsVmFsaWQodGJFbWFpbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm5TdWJzY3JpYmUuYXBwbHkodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxibEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICdfc3Vic2NyaWJlRXJyb3JQbGFjZWhvbGRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGJsRXJyb3IpIGxibEVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRiRW1haWwuZm9jdXMpIHRiRW1haWwuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGlkZVN1YnNjcmliZURpYWxvZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1zdWJzY3JpYmVfY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVFbWFpbEtleVVwOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICdfc3Vic2NyaWJlVGV4dGJveCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYmxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySUQgKyAnX3N1YnNjcmliZUVycm9yUGxhY2Vob2xkZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGJsRXJyb3IpIGxibEVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXJhY3RlckNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgJiYgZS53aGljaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQ29kZSA9IGUud2hpY2g7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGV2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJDb2RlID0gZS5rZXlDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICdfc3Vic2NyaWJlVGV4dGJveEJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJDb2RlID09IDEzICYmIGVsQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsQnV0dG9uLm9uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZzogZnVuY3Rpb24gKHRpdGxlLCB0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlc1snY29uZmlybWF0aW9uRGlhbG9nJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLmhpZGVDb25maXJtYXRpb25EaWFsb2coKSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lcklEID0gdGhpcy5jb250YWluZXJJRCArICctY29uZmlybWF0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGl2UmVtb3ZlID0gZ2lneWEudXRpbHMuRE9NLmNyZWF0ZVRvcExldmVsRGl2KGNvbnRhaW5lcklEICsgJ19jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXZSZW1vdmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdlJlbW92ZS5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLWNvbnRhaW5lcic7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2UmVtb3ZlLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2V0U2l6ZShkaXZSZW1vdmUsIDM5MCwgMTUwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IFRoaXMuaGlkZUNvbmZpcm1hdGlvbkRpYWxvZygpOyB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBoaWRlQ29uZmlybWF0aW9uRGlhbG9nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySUQgKyAnLWNvbmZpcm1hdGlvbl9jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyKSBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICdfc3Vic2NyaWJlVGV4dGJveCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YkVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuY29tbWVudHMuc3Vic2NyaWJlKHRoaXMuX2MsIHsgZW1haWw6IHRiRW1haWwudmFsdWUsIGNhbGxiYWNrOiBmdW5jdGlvbiAoZSkgeyBUaGlzLm9uU3Vic2NyaWJlKGUpIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVN1YnNjcmliZURpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9ICh0aGlzLnRleHRNb2RlID09ICdyZXZpZXdzJyAmJiB0aGlzLmxldmVsID09IDAgPyAncmV2aWV3JyA6ICdjb21tZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25maXJtYXRpb25IVE1MID0gJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtZGlhbG9nLXN1YnNjcmliZS1va0ljb25cIj48L2Rpdj4nICsgVEVYVCgndGhhbmtfeW91X2Zvcl9zdWJzY3JpYmluZycpICsgJzxiciAvPicgKyBURVhUKCduZXdfJyArIHR5cGUgKyAnc193aWxsX2JlX3NlbnRfZGlyZWN0bHlfdG9feW91cl9lbWFpbF9pbmJveCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25EaWFsb2coVEVYVCgnbm90aWZpY2F0aW9uc19zZXR0aW5ncycpLCBjb25maXJtYXRpb25IVE1MKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3Vic2NyaWJlU3RhdHVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmRpc2FibGVSU1MpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl91c2VyLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuc3RyZWFtSW5mby5pc1VzZXJTdWJzY3JpYmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMudXBkYXRlU3Vic2NyaWJlVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5jb21tZW50cy5nZXRTdHJlYW1JbmZvKHRoaXMuX2MsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnN0cmVhbUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5zdHJlYW1JbmZvID0gZS5zdHJlYW1JbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnVwZGF0ZVN1YnNjcmliZVVJKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3Vic2NyaWJlVUk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3Vic2NyaWJlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySUQgKyAnLXN1YnNjcmliZUxpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJlTGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3Vic2NyaWJlVGV4dCA9ICh0aGlzLnN0cmVhbUluZm8uaXNVc2VyU3Vic2NyaWJlZCB8fCB0aGlzLnVuc3Vic2NyaWJlVG9rZW4pID8gVEVYVCgndW5zdWJzY3JpYmUnKSA6IFRFWFQoJ3N1YnNjcmliZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVMaW5rLnRpdGxlID0gc3Vic2NyaWJlTGluay5pbm5lckhUTUwgPSBzdWJzY3JpYmVUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblN1YnNjcmliZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZSAmJiBlLnVuc3Vic2NyaWJlVG9rZW4pIHRoaXMudW5zdWJzY3JpYmVUb2tlbiA9IGUudW5zdWJzY3JpYmVUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWUudW5zdWJzY3JpYmVUb2tlbikgdGhpcy5zdHJlYW1JbmZvLmlzVXNlclN1YnNjcmliZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3Vic2NyaWJlVUkoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmVycm9yQ29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyhURVhUKCdub3RpZmljYXRpb25zX3NldHRpbmdzJyksIFRFWFQoJ3lvdV9oYXZlX3N1Y2Nlc3NmdWxseV91bnN1YnNjcmliZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnVuc3Vic2NyaWJlVG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtSW5mby5pc1VzZXJTdWJzY3JpYmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3Vic2NyaWJlVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0U3RyZWFtSW5mb0lmTmVlZGVkOiBmdW5jdGlvbiAocmVkaXJlY3RVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyZWFtVGl0bGUgPSB0aGlzLl9wWydzdHJlYW1UaXRsZSddO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RyZWFtVGl0bGUpIHN0cmVhbVRpdGxlID0gZG9jdW1lbnQudGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdHJlYW1UaXRsZSB8fCBzdHJlYW1UaXRsZSA9PSAnJykgc3RyZWFtVGl0bGUgPSAnU2l0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0cmVhbVVSTCA9IHRoaXMuX3BbJ3N0cmVhbVVSTCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RyZWFtVVJMKSBzdHJlYW1VUkwgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0cmVhbUluZm8uc3RyZWFtVVJMIHx8ICh0aGlzLl9wLnN0cmVhbUluZm9TaWcgJiYgKHN0cmVhbVRpdGxlICE9IHRoaXMuc3RyZWFtSW5mby5zdHJlYW1UaXRsZSB8fCBzdHJlYW1VUkwgIT0gdGhpcy5zdHJlYW1JbmZvLnN0cmVhbVVSTCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmNvbW1lbnRzLnNldFN0cmVhbUluZm8odGhpcy5fYywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtVGl0bGU6IHN0cmVhbVRpdGxlLCBzdHJlYW1VUkw6IHN0cmVhbVVSTCwgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnN0cmVhbUluZm8uc3RyZWFtVGl0bGUgPSBzdHJlYW1UaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnN0cmVhbUluZm8uc3RyZWFtVVJMID0gc3RyZWFtVVJMO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdFVSTCkgZG9jdW1lbnQubG9jYXRpb24gPSByZWRpcmVjdFVSTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy90byBzdG9wIGN1cnJlbnQgbmF2aWdhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBfZHJhd0NvbW1lbnRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UmVwbHlJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd0hlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdGb290ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IHBsdWdpblNjb3BlLmRyYXdDb21tZW50cyh0aGlzLl9jb21tZW50cywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICctY29tbWVudHMnKS5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLmNvbW1lbnRzSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gdGhpcy5jb21tZW50c0luc3RhbmNlc1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5yZXBsaWVzQ29sbGFwc2VkKSBjb21tZW50LmNvbGxhcHNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSAmJiB0aGlzLl9zdGF0ZS5mbGFncyAmJiB0aGlzLl9zdGF0ZS5mbGFnc1tpZF0pIGNvbW1lbnQubWFya0FzRmxhZ2dlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVwZGF0ZVZvdGVVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxvZ291dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5sb2dvdXQodGhpcy5fYywgeyBjb250ZXh0OiB0aGlzLl9wLmNvbnRleHQgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3Vlc3RMb2dvdXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGl2TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1sb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXZMb2dpbikgZGl2TG9naW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZMb2dpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ19naWdfY29tbWVudHNfZW1haWw9eDtleHBpcmVzPVRodSwgMDEtSmFuLTE5NzAgMDA6MDA6MDEgR01UOyBwYXRoPS8nO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdfZ2lnX2NvbW1lbnRzX25pY2tuYW1lPXg7ZXhwaXJlcz1UaHUsIDAxLUphbi0xOTcwIDAwOjAwOjAxIEdNVDsgcGF0aD0vJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVSUQ6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVVzZXJJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGd1ZXN0Q2xpY2tlZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpdkd1ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnLWd1ZXN0VUknKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGl2R3Vlc3QgIT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgJy1ndWVzdERyb3Bkb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdkd1ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdkd1ZXN0LmlkID0gaWQgKyAnLWd1ZXN0VUknO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IGdpZ3lhLmdsb2JhbC5fR2V0RWxlbWVudFBvcyhlbERyb3Bkb3duKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2R3Vlc3Quc3R5bGUubGVmdCA9ICcnICsgKGdpZ3lhLmxvY2FsSW5mby5xdWlya3NNb2RlID8gcG9zLmxlZnQgLSAyIDogcG9zLmxlZnQpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2R3Vlc3Quc3R5bGUudG9wID0gJycgKyAocG9zLnRvcCArIGVsRHJvcGRvd24ub2Zmc2V0SGVpZ2h0IC0gMiArIChnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSA/IC0yIDogMCkpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2R3Vlc3QuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1jb250YWluZXIgZ2lnLWNvbW1lbnRzLWd1ZXN0VUknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLl90ZW1wbGF0ZXNbJ2d1ZXN0Qm94J107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkICsgJy1ndWVzdFVJJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBURVhUKCduaWNrbmFtZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGdpZ3lhLnV0aWxzLnNhbml0aXplLnNhbml0aXplQXR0cmlidXRlKHRoaXMuX3NldHRpbmdzLmlzR3Vlc3RFbWFpbFJlcXVpcmVkID8gVEVYVCgnZW1haWwnKSA6IFRFWFQoJ2VtYWlsX29wdGlvbmFsJykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2s6IFRFWFQoJ29rJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbF9ub3RfZGlzcGxheWVkX3B1YmxpY2x5OiBURVhUKCdlbWFpbF9ub3RfZGlzcGxheWVkX3B1YmxpY2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvbjogdGhpcy5fdGVtcGxhdGVzWydva0J1dHRvbiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3RFcnJvclBsYWNlaG9sZGVyOiB0aGlzLl90ZW1wbGF0ZXNbJ2d1ZXN0RXJyb3JQbGFjZWhvbGRlciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWVUZXh0Ym94OiB0aGlzLl90ZW1wbGF0ZXNbJ2d1ZXN0LW5pY2tuYW1lVGV4dGJveCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxUZXh0Ym94OiB0aGlzLl90ZW1wbGF0ZXNbJ2d1ZXN0LWVtYWlsVGV4dGJveCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25HdWVzdExvZ2luOiB0aGlzLmdldFJlZlN0cmluZygpICsgJy5ndWVzdExvZ2luQ2xpY2tlZChcXCcnICsgaWQgKyAnLWd1ZXN0VUlcXCcpJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdkd1ZXN0LmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZHdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdkd1ZXN0LmZuY0hpZGUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuaWQuaW5kZXhPZihkaXZHdWVzdC5pZCkgIT0gLTEpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5zcmNFbGVtZW50ICYmIGUuc3JjRWxlbWVudC5pZC5pbmRleE9mKGRpdkd1ZXN0LmlkKSAhPSAtMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxEcm9wZG93bi5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLWRyb3Bkb3duIGdpZy1jb21tZW50cy1kcm9wZG93bi1ndWVzdCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoJ29uY2xpY2snLCBkaXZHdWVzdC5mbmNIaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGl2R3Vlc3QuZm5jSGlkZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpdkd1ZXN0ICYmIGRpdkd1ZXN0LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZHdWVzdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdkd1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkd1ZXN0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZHdWVzdC5mbmNTaG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxEcm9wZG93bi5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLWRyb3Bkb3duIGdpZy1jb21tZW50cy1kcm9wZG93bi1ndWVzdCBnaWctY29tbWVudHMtZHJvcGRvd24tZG93biBnaWctY29tbWVudHMtZHJvcGRvd24tZ3Vlc3QtZG93bic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbmNsaWNrJywgZGl2R3Vlc3QuZm5jSGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGl2R3Vlc3QuZm5jSGlkZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZHdWVzdC5mbmNTaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldENvbW1lbnRCeUlEOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tZW50c0luc3RhbmNlcykgcmV0dXJuIHRoaXMuY29tbWVudHNJbnN0YW5jZXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUmF0aW5nQ2xpY2s6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNlSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2dpZy1iYXNlaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmF0aW5nSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2dpZy1yYXRpbmdJRCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRSYXRpbmdzKSB0aGlzLnNlbGVjdGVkUmF0aW5ncyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYXRpbmdzW3JhdGluZ0lEXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsLmdldEF0dHJpYnV0ZSgnZ2lnLXJhdGluZycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiB0aGlzLmlzTW9iaWxlVUkgPyAnJyA6IGVsLmdldEF0dHJpYnV0ZSgnZ2lnLXJhdGluZy1kZXRhaWxzJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VJRDogYmFzZUlEXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsLm9ubW91c2VvdXQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVQb3N0KG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUmF0aW5nTW91c2VPdmVyOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhdGluZyA9IGVsLmdldEF0dHJpYnV0ZSgnZ2lnLXJhdGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNlSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2dpZy1iYXNlaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsU3RhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhc2VJRCArICdfJyArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxTdGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IHJhdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsU3Rhci5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUtZW1wdHkgZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUtZnVsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsU3Rhci5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUtZW1wdHknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2dpZy1iYXNlaWQnKSArICdfZGV0YWlscycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbERldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxEZXRhaWxzLmlubmVySFRNTCA9IGVsLmdldEF0dHJpYnV0ZSgnZ2lnLXJhdGluZy1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUmF0aW5nTW91c2VPdXQ6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByYXRpbmcgPSBlbC5nZXRBdHRyaWJ1dGUoJ2dpZy1yYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzZUlEID0gZWwuZ2V0QXR0cmlidXRlKCdnaWctYmFzZWlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhdGluZ0lEID0gZWwuZ2V0QXR0cmlidXRlKCdnaWctcmF0aW5nSUQnKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxTdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFzZUlEICsgJ18nICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbFN0YXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUmF0aW5ncyAmJiB0aGlzLnNlbGVjdGVkUmF0aW5nc1tyYXRpbmdJRF0gJiYgaSA8IHRoaXMuc2VsZWN0ZWRSYXRpbmdzW3JhdGluZ0lEXS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsU3Rhci5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUgZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUtZnVsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsU3Rhci5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLXN0YXItZWRpdGFibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2dpZy1iYXNlaWQnKSArICdfZGV0YWlscycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbERldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRSYXRpbmdzICYmIHRoaXMuc2VsZWN0ZWRSYXRpbmdzW3JhdGluZ0lEXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxEZXRhaWxzLmlubmVySFRNTCA9IHRoaXMuc2VsZWN0ZWRSYXRpbmdzW3JhdGluZ0lEXS5kZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxEZXRhaWxzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNsZWFyUmF0aW5nczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHJhdGluZ0lEIGluIHRoaXMuc2VsZWN0ZWRSYXRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXNlSUQgPSB0aGlzLnNlbGVjdGVkUmF0aW5nc1tyYXRpbmdJRF0uYmFzZUlEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsU3RhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhc2VJRCArICdfJyArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsU3RhcikgZWxTdGFyLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtc3Rhci1lZGl0YWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhc2VJRCArICdfZGV0YWlscycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxEZXRhaWxzKSBlbERldGFpbHMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYXRpbmdzID0ge307XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVQb3N0OiBmdW5jdGlvbiAocmVwbHlJRCwgb25seUhpZGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNlRWxpZCA9IHRoaXMuY29udGFpbmVySUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGx5SUQpIGJhc2VFbGlkID0gdGhpcy5jb250YWluZXJJRCArICctcmVwbHktJyArIHJlcGx5SUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxibEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFzZUVsaWQgKyAnLXZhbGlkYXRpb25FcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbmx5SGlkZUVycm9yICYmIGxibEVycm9yICYmIChsYmxFcnJvci5zdHlsZS5kaXNwbGF5ID09ICdub25lJyB8fCBsYmxFcnJvci5zdHlsZS5kaXNwbGF5ID09ICcnKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm5jVmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMudmFsaWRhdGVQb3N0KHJlcGx5SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRiQ29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhc2VFbGlkICsgJy1jb21tZW50VGV4dGFyZWEnKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YkNvbW1lbnRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhc2VFbGlkICsgJy10aXRsZVRleHRib3gnKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0Yk92ZXJhbGxSYXRpbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXNlRWxpZCArICdfcmF0aW5nX19vdmVyYWxsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRiQ29tbWVudCkgdGJDb21tZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5ib3JkZXJDb2xvciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YkNvbW1lbnRUaXRsZSkgdGJDb21tZW50VGl0bGUuc3R5bGUuYm9yZGVyQ29sb3IgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGJPdmVyYWxsUmF0aW5nQ29udGFpbmVyKSB0Yk92ZXJhbGxSYXRpbmdDb250YWluZXIuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1hZGRDb21tZW50LXJhdGluZ3MnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlcGx5SUQgfHwgdGhpcy5fc2V0dGluZ3MuZW5hYmxlQ29tbWVudEJvZHkuc3BsaXQoJ18nKVsxXSA9PSAnbWFuZGF0b3J5JykgJiYgKCF0YkNvbW1lbnQgfHwgKHRiQ29tbWVudC52YWx1ZS5yZXBsYWNlKC8gL2csICcnKS5yZXBsYWNlKC9cXG4vZywgJycpLnJlcGxhY2UoL1xcci9nLCAnJykgPT0gJycpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YkNvbW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLmJvcmRlckNvbG9yID0gJyNlNzA3MDcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbCA9IHRiQ29tbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJDb21tZW50Lm9uY2hhbmdlID0gZm5jVmFsaWRhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmVuYWJsZUNvbW1lbnRUaXRsZXMuc3BsaXQoJ18nKVsxXSA9PSAnbWFuZGF0b3J5JyAmJiB0YkNvbW1lbnRUaXRsZSAmJiB0YkNvbW1lbnRUaXRsZS52YWx1ZS5yZXBsYWNlKC8gL2csICcnKS5yZXBsYWNlKC9cXG4vZywgJycpLnJlcGxhY2UoL1xcci9nLCAnJykgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJDb21tZW50VGl0bGUuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2U3MDcwNyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsID0gdGJDb21tZW50VGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRiQ29tbWVudFRpdGxlLm9uY2hhbmdlID0gZm5jVmFsaWRhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXBseUlEICYmIHRoaXMuX3NldHRpbmdzLmVuYWJsZVJhdGluZ3Muc3BsaXQoJ18nKVsxXSA9PSAnbWFuZGF0b3J5JyAmJiAoIXRoaXMuc2VsZWN0ZWRSYXRpbmdzIHx8ICF0aGlzLnNlbGVjdGVkUmF0aW5nc1snX292ZXJhbGwnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJPdmVyYWxsUmF0aW5nQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtYWRkQ29tbWVudC1yYXRpbmdzIGdpZy1jb21tZW50cy1hZGRDb21tZW50LXJhdGluZ3MtZXJyb3InO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobGJsRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYmxFcnJvci5pbm5lckhUTUwgPSB0aGlzLl9zZXR0aW5ncy5tb2RlID09ICdyYXRpbmdzT25seScgPyBURVhUKCdwbGVhc2Vfc2VsZWN0X3lvdXJfcmF0aW5nJykgOiBURVhUKCdwbGVhc2VfZmlsbF9yZXF1aXJlZF9maWVsZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxibEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGJsRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxibEVycm9yLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHY6IHYsIGVsOiBlbCB9O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc3RCdXR0b25DbGlja2VkOiBmdW5jdGlvbiAocmVwbHlJRCwgZG9udFB1Ymxpc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzZUVsaWQgPSB0aGlzLmNvbnRhaW5lcklEO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXBseUlEKSBiYXNlRWxpZCA9IHRoaXMuY29udGFpbmVySUQgKyAnLXJlcGx5LScgKyByZXBseUlEO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdXNlci5pc0d1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdfZ2lnX2NvbW1lbnRzX2xvY2tlZD0xOyBwYXRoPS8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YkNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXNlRWxpZCArICctY29tbWVudFRleHRhcmVhJylcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGJDb21tZW50VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXNlRWxpZCArICctdGl0bGVUZXh0Ym94JylcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29tbWVudFRleHQgPSB0YkNvbW1lbnQgPyBnaWd5YS5wbHVnaW5VdGlscy50ZXh0Lm5vcm1hbGl6ZUxpbmVicmVha3ModGJDb21tZW50LnZhbHVlKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21tZW50VGl0bGUgPSB0YkNvbW1lbnRUaXRsZSA/IHRiQ29tbWVudFRpdGxlLnZhbHVlIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9WYWxpZGF0aW9uID0gdGhpcy52YWxpZGF0ZVBvc3QocmVwbHlJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvVmFsaWRhdGlvbi52KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvVmFsaWRhdGlvbi5lbCkgb1ZhbGlkYXRpb24uZWwuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl91c2VyLmlzR3Vlc3QgJiYgIXRoaXMuX3VzZXIuaXNDb25uZWN0ZWQpIHsgLy9sb2dnZWQgb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsSUQgPSB0aGlzLmlzTW9iaWxlVUkgPyBiYXNlRWxpZCA6IChiYXNlRWxpZCArICctcG9zdEJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzLmlzTW9iaWxlVUkgPyBudWxsIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5DbGlja2VkKGVsSUQsIGVsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnBvc3RCdXR0b25DbGlja2VkKHJlcGx5SUQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAhdGhpcy5pc01vYmlsZVVJKTsgLy9mZWF0dXJlICM5Njc2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YkNvbW1lbnRUaXRsZSkgdGJDb21tZW50VGl0bGUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGJDb21tZW50KSB0YkNvbW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcGx5SUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhdGluZ3MgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcmF0aW5nSUQgaW4gdGhpcy5zZWxlY3RlZFJhdGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZ3NbcmF0aW5nSURdID0gcGFyc2VJbnQodGhpcy5zZWxlY3RlZFJhdGluZ3NbcmF0aW5nSURdLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyUmF0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlcnMgPSB0aGlzLnNhdmVDaGVja2VkUHJvdmlkZXJzKGJhc2VFbGlkKS5qb2luKCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVzdGFtcCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlbmRpbmdDb21tZW50SWQgPSAncGVuZGluZ18nICsgdGltZXN0YW1wO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvQ29tbWVudCA9IHRoaXMuZ2V0Q29tbWVudEJ5SUQocmVwbHlJRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvQ29tbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9Db21tZW50LmNsb3NlUmVwbHlib3goKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwaG90b1VSTCA9IHRoaXMuX3VzZXIudGh1bWJuYWlsVVJMO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcGhvdG9VUkwgfHwgcGhvdG9VUkwgPT0gJycpIHBob3RvVVJMID0gdGhpcy5fdXNlci5waG90b1VSTDtcclxuICAgICAgICAgICAgICAgICAgICBwaG90b1VSTCA9IGdpZ3lhLmdsb2JhbC5nZXRQaG90b1VSTChwaG90b1VSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJuYW1lID0gdGhpcy5fdXNlci5uaWNrbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcm5hbWUgPT0gJycpIHVzZXJuYW1lID0gJ0Fub255bW91cyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dpblByb3ZpZGVyID0gdGhpcy5nZXRMb2dpblByb3ZpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlbmRpbmdDb21tZW50ID1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VGV4dDogY29tbWVudFRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZFRpbWVzdGFtcDogdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJRDogcGVuZGluZ0NvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SUQ6IHJlcGx5SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9VUkw6IHBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5Qcm92aWRlcjogbG9naW5Qcm92aWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVGVtcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRpdGxlOiBjb21tZW50VGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUG9zdDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dE1vZGUgPT0gJ3Jldmlld3MnICYmIHRoaXMuX3NldHRpbmdzLmVuYWJsZVJhdGluZ3MgIT0gJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0NvbW1lbnQucmF0aW5ncyA9IHJhdGluZ3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tb2RlcmF0aW9uU3RhdGUgPT0gMSkgcGVuZGluZ0NvbW1lbnQuaXNQZW5kaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21tZW50UGFyYW1zID0gZ2lneWEudXRpbHMub2JqZWN0LnJlbW92ZVVuZGVmaW5lZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SUQ6IHRoaXMuX3BbJ2NhdGVnb3J5SUQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtSUQ6IHRoaXMuX3BbJ3N0cmVhbUlEJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpZDogdGhpcy5fcFsnY2lkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRUZXh0OiBjb21tZW50VGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SUQ6IHJlcGx5SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRUaXRsZTogY29tbWVudFRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdzOiByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl91c2VyLmlzR3Vlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFBhcmFtcy5ndWVzdE5hbWUgPSB0aGlzLl91c2VyLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50UGFyYW1zLmd1ZXN0RW1haWwgPSB0aGlzLl91c2VyLmVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShjb21tZW50UGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWUuZ3Vlc3ROYW1lKSBlLmd1ZXN0TmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZS5ndWVzdEVtYWlsKSBlLmd1ZXN0RW1haWwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBlLmV2ZW50TmFtZSA9ICdiZWZvcmVDb21tZW50U3VibWl0dGVkJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KGUsIHRoaXMuX3ApID09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb21tZW50UGFyYW1zLmNvbW1lbnRUZXh0ID0gcGVuZGluZ0NvbW1lbnQuY29tbWVudFRleHQgPSBlLmNvbW1lbnRUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29tbWVudFBhcmFtcy5jb21tZW50VGl0bGUgPSBwZW5kaW5nQ29tbWVudC5jb21tZW50VGl0bGUgPSBlLmNvbW1lbnRUaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50UGFyYW1zID0gZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5ndWVzdE5hbWUgPT0gJycpIGRlbGV0ZSBlLmd1ZXN0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5ndWVzdEVtYWlsID09ICcnKSBkZWxldGUgZS5ndWVzdEVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXZDb21tZW50ID0gdGhpcy5hZGRDb21tZW50KHBlbmRpbmdDb21tZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbHlJRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZy1yZXBsaWVzLScgKyByZXBseUlEKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICctY29tbWVudHMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zb3J0QnkudG9Mb3dlckNhc2UoKSA9PSAnZGF0ZWFzYycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChkaXZDb21tZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXZDb21tZW50LCBwYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50UGFyYW1zLmNhbGxiYWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRoaXMuX3VzZXIuaXNHdWVzdCkgVGhpcy5fZHJhd0NvbW1lbnRCb3goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZXJyb3JDb2RlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5lcnJvckNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQwMzAzNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0ID0gVEVYVCgnb25seV9vbmVfcmV2aWV3X3Blcl9wcm9kdWN0X2lzX2FsbG93ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0ID0gVEVYVCgnYW5fZXJyb3JfaGFzX29jY3VycmVkX3BsZWFzZV90cnlfYWdhaW5fbGF0ZXInLCAnJWVycm9yQ29kZScsIGUuZXJyb3JDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUaGlzLmNvbnRhaW5lcklEICsgJy1lcnJvci0nICsgcGVuZGluZ0NvbW1lbnRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyRGl2ICYmIGVycm9yVGV4dCkgZXJyRGl2LmlubmVySFRNTCA9IGVycm9yVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRXJyb3JGcm9tUmVzcG9uc2UoVGhpcy5fcCwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Q29tbWVudCA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShwZW5kaW5nQ29tbWVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwMiBpbiBlLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDb21tZW50W3AyXSA9IGUuY29tbWVudFtwMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDb21tZW50LmlzVGVtcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29tbWVudC5pc1Bvc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRoaXMudGV4dE1vZGUgIT0gJ3Jldmlld3MnIHx8IG5ld0NvbW1lbnQubGV2ZWwgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX2NvbW1lbnRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgVGhpcy5fY29tbWVudHNSYXdEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRoaXMuX2NvbW1lbnRzUmF3RGF0YVtpXS5JRCA9PSBwZW5kaW5nQ29tbWVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX2NvbW1lbnRzUmF3RGF0YS5zcGxpY2UoaSwgMSk7IC8vcmVtb3ZlIHBlbmRpbmcgY29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgVGhpcy5jb21tZW50c0luc3RhbmNlc1twZW5kaW5nQ29tbWVudElkXTsgLy9yZW1vdmUgcGVuZGluZyBjb21tZW50XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5hZGRDb21tZW50KG5ld0NvbW1lbnQsIGRpdkNvbW1lbnQpOyAvLyB1cGRhdGUgY29tbWVudCBkaXYgd2l0aCBuZXcgY29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0NvbW1lbnRPYmogPSBUaGlzLmdldENvbW1lbnRCeUlEKG5ld0NvbW1lbnQuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29tbWVudE9iai51cGRhdGVWb3RlVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMudXBkYXRlQ291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBseUlEKSBuZXdDb21tZW50T2JqLmdldFBhcmVudENvbW1lbnQoKS51cGRhdGVSZXBsaWVzQ291bnQoKTsgLy8gdXBkYXRlIHBhcmVudCBjb21tZW50IGNvdW50XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9FdmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdjb21tZW50U3VibWl0dGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW1JRDogVGhpcy5fcC5zdHJlYW1JRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUlEOiBUaGlzLl9wLmNhdGVnb3J5SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRleHQ6IGNvbW1lbnRUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IGUuY29tbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBUaGlzLnRleHRNb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmF0aW5ncykgb0V2ZW50LnJhdGluZ3MgPSByYXRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnRUaXRsZSkgb0V2ZW50LmNvbW1lbnRUaXRsZSA9IGNvbW1lbnRUaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvbW1lbnQgJiYgZS5jb21tZW50LnByb3ZpZGVyUG9zdElEcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9FdmVudC5wcm92aWRlclBvc3RJRHMgPSBlLmNvbW1lbnQucHJvdmlkZXJQb3N0SURzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRoaXMuX3VzZXIuVUlEICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb0V2ZW50LnVzZXIgPSBUaGlzLl91c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChUaGlzLl91c2VyLmlzR3Vlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvRXZlbnQuZ3Vlc3RVc2VyID0geyBuaWNrbmFtZTogVGhpcy5fdXNlci5uaWNrbmFtZSwgZW1haWw6IFRoaXMuX3VzZXIuZW1haWwgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVGhpcy50ZXh0TW9kZSA9PSAncmV2aWV3cycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVRoaXMuX3VzZXJDb21tZW50cykgVGhpcy5fdXNlckNvbW1lbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fdXNlckNvbW1lbnRzLnB1c2goZS5jb21tZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9kcmF3Q29tbWVudEJveCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChvRXZlbnQsIFRoaXMuX3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zb3J0QnkudG9Mb3dlckNhc2UoKSA9PSAnZGF0ZWFzYycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3BhZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50UGFyYW1zLnVzZXJBY3Rpb24gPSB0aGlzLmdldFVzZXJBY3Rpb24ocGVuZGluZ0NvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRQYXJhbXMuZW5hYmxlZFByb3ZpZGVycyA9IHByb3ZpZGVycztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcC5jb21tZW50VGFncykgY29tbWVudFBhcmFtcy50YWdzID0gdGhpcy5fcC5jb21tZW50VGFncztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbnRQdWJsaXNoIHx8ICFwcm92aWRlcnMpIGNvbW1lbnRQYXJhbXMuZW5hYmxlZFByb3ZpZGVycyA9ICcgJztcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5jb21tZW50cy5wb3N0Q29tbWVudCh0aGlzLl9jLCBjb21tZW50UGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0cmVhbUluZm9JZk5lZWRlZCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnQ6IGZ1bmN0aW9uIChyYXdDb21tZW50LCB1cGRhdGVEaXYpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3Muc29ydEJ5LnRvTG93ZXJDYXNlKCkgPT0gJ2RhdGVhc2MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1lbnRzUmF3RGF0YS5wdXNoKHJhd0NvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1lbnRzUmF3RGF0YS51bnNoaWZ0KHJhd0NvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb21tZW50cyA9IHBsdWdpblNjb3BlLmJ1aWxkQ29tbWVudHNUcmVlKHRoaXMuX2NvbW1lbnRzUmF3RGF0YSwgdGhpcy5fc2V0dGluZ3Muc29ydEJ5LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMuZ2V0Q29tbWVudEJ5SUQocmF3Q29tbWVudC5JRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21tZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudERpdi5pbm5lckhUTUwgPSBwbHVnaW5TY29wZS5kcmF3Q29tbWVudHMoW2NdLCB0aGlzLCBjLmxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50RGl2ID0gY29tbWVudERpdi5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVEaXYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGl2LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbW1lbnREaXYsIHVwZGF0ZURpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHVwZGF0ZURpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21tZW50RGl2O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRyYXdOZXdDb21tZW50czogZnVuY3Rpb24gKGFyQ29tbWVudHMsIG1hcmtBc05ldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0Q29tbWVudERpdjtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyQ29tbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBhckNvbW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tbWVudERpdiA9IGMuZ2V0Q29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tbWVudERpdikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbW1lbnREaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnREaXZDb250YWluZXIuaW5uZXJIVE1MID0gcGx1Z2luU2NvcGUuZHJhd0NvbW1lbnRzKFtjXSwgdGhpcywgYy5sZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50RGl2ID0gY29tbWVudERpdkNvbnRhaW5lci5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWctcmVwbGllcy0nICsgYy5wYXJlbnRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudERpdikgcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICctY29tbWVudHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Q29tbWVudERpdikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Q29tbWVudERpdi5uZXh0U2libGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXYuaW5zZXJ0QmVmb3JlKGNvbW1lbnREaXYsIGxhc3RDb21tZW50RGl2Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoY29tbWVudERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXYuaW5zZXJ0QmVmb3JlKGNvbW1lbnREaXYsIHBhcmVudERpdi5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMudXBkYXRlVm90ZVVJKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnVwZGF0ZVJlcGxpZXNDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmtBc05ldykgYy5tYXJrQXNOZXcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MucmVwbGllc0NvbGxhcHNlZCkgYy5jb2xsYXBzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlLmZsYWdzW2MuaWRdKSBjLm1hcmtBc0ZsYWdnZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrQXNOZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYy51bm1hcmtBc05ldygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdOZXdDb21tZW50cyhjLmNoaWxkcmVuLCBtYXJrQXNOZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RDb21tZW50RGl2ID0gY29tbWVudERpdjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUNvdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5nZXRFbGVtZW50QnlDb21tZW50c0NsYXNzKCdjb21tZW50TGlzdC1oZWFkZXItY29tbWVudHNDb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuZGlzYWJsZUNvbW1lbnRzQ291bnQgJiYgdGhpcy5fY29tbWVudENvdW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb21tZW50Q291bnQgPT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudFRleHQgPSBURVhUKHRoaXMudGV4dE1vZGUgPT0gJ3Jldmlld3MnID8gJ29uZV9yZXZpZXcnIDogJ29uZV9jb21tZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRUZXh0ID0gVEVYVCgodGhpcy50ZXh0TW9kZSA9PSAncmV2aWV3cycgPyAnbnVtX3Jldmlld3MnIDogJ251bV9jb21tZW50cycpLCAnJW51bScsIHRoaXMuX2NvbW1lbnRDb3VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3AubGFuZyA9PSAnZnInICYmIHRoaXMuX2NvbW1lbnRDb3VudCA9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudFRleHQgPSBURVhUKHRoaXMudGV4dE1vZGUgPT0gJ3Jldmlld3MnID8gJ29uZV9yZXZpZXcnIDogJ29uZV9jb21tZW50JykucmVwbGFjZSgnMScsICcwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGNvdW50VGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0VXNlckFjdGlvbjogZnVuY3Rpb24gKGNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0ID0gdGhpcy5fcFsndXNlckFjdGlvbiddO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LmxldmVsID4gMCkgYWN0ID0gdGhpcy5fcFsncmVwbHlVc2VyQWN0aW9uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0ID0gbmV3IGdpZ3lhLnNvY2lhbGl6ZS5Vc2VyQWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0ID0gYWN0LmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0LnRpdGxlIHx8IGFjdC50aXRsZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0TW9kZSA9PSAncmV2aWV3cycgJiYgIWNvbW1lbnQubGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LnJhdGluZ3MgJiYgY29tbWVudC5yYXRpbmdzWydfb3ZlcmFsbCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0LnRpdGxlID0gVEVYVCgnaV9yYXRlZF9wYWdldGl0bGVfYXNfcmF0aW5nXzUnLCAnJXJhdGluZycsIGNvbW1lbnQucmF0aW5nc1snX292ZXJhbGwnXSkucmVwbGFjZSgnJXBhZ2VUaXRsZScsIGRvY3VtZW50LnRpdGxlKTs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdC50aXRsZSA9IFRFWFQoJ215X3Jldmlld19vbl9jb2xvbl9wYWdldGl0bGUnLCAnJXBhZ2VUaXRsZScsIGRvY3VtZW50LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdC50aXRsZSA9IFRFWFQoJ2NvbW1lbnRlZF9vbl9jb2xvbl9wYWdldGl0bGUnLCAnJXBhZ2VUaXRsZScsIGRvY3VtZW50LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdC5saW5rQmFjayB8fCBhY3QubGlua0JhY2sgPT0gJycpIGFjdC5saW5rQmFjayA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0LnVzZXJNZXNzYWdlID0gY29tbWVudC5jb21tZW50VGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRpdGxlOiBjb21tZW50LmNvbW1lbnRUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRleHQ6IGNvbW1lbnQuY29tbWVudFRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZzogKGNvbW1lbnQucmF0aW5ncyA/IGNvbW1lbnQucmF0aW5nc1snX292ZXJhbGwnXSA6IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVycy5yYXRpbmdEZXNjcmlwdGlvbiA9IFtURVhUKCdpX2hhdGVfaXQnKSwgVEVYVCgnaV9kb250X2xpa2VfaXQnKSwgVEVYVCgnaXRzX29rJyksIFRFWFQoJ2lfbGlrZV9pdCcpLCBURVhUKCdpX2xvdmVfaXQnKV1bcGxhY2Vob2xkZXJzLnJhdGluZyAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnaWd5YS5nbG9iYWwuZmlsbFVzZXJBY3Rpb25UZW1wbGF0ZShhY3QsIHBsYWNlaG9sZGVycyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZUNoZWNrZWRQcm92aWRlcnM6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhckNoZWNrZWRQcm92aWRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgJy1jaGVja2JveC1wcm92aWRlci1jYicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZGVudGl0eSA9IHRoaXMuZ2V0TG9naW5Qcm92aWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmNoZWNrZWQpIGFyQ2hlY2tlZFByb3ZpZGVycy5wdXNoKGlkZW50aXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdfZ2lnX2NvbW1lbnRzX2NiXycgKyBpZGVudGl0eSArICc9JyArIChlbC5jaGVja2VkID8gMSA6IDApICsgJztleHBpcmVzPVdlZCwgMDEgSmFuIDIwMjAgMTI6MDA6MDAgR01UXCI7cGF0aD0vO1wiJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGlkZW50aXR5IGluIHRoaXMuX3VzZXIuaWRlbnRpdGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnLWNoZWNrYm94LScgKyBpZGVudGl0eSArICctaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5jaGVja2VkKSBhckNoZWNrZWRQcm92aWRlcnMucHVzaChpZGVudGl0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ19naWdfY29tbWVudHNfY2JfJyArIGlkZW50aXR5ICsgJz0nICsgKGVsLmNoZWNrZWQgPyAxIDogMCkgKyAnO2V4cGlyZXM9V2VkLCAwMSBKYW4gMjAyMCAxMjowMDowMCBHTVRcIjtwYXRoPS87XCInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJDaGVja2VkUHJvdmlkZXJzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNpbmdsZVNoYXJlUHJvdmlkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9naW5Qcm92aWRlciA9IHRoaXMuZ2V0TG9naW5Qcm92aWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dpblByb3ZpZGVyICYmIGdpZ3lhLnNvY2lhbGl6ZS5nZXRQcm92aWRlcnNGb3JSZXF1aXJlZENhcGFiaWxpdGllcyhnaWd5YS5zb2NpYWxpemUuZ2V0UHJvdmlkZXJzQnlOYW1lKGxvZ2luUHJvdmlkZXIpLCBbJ2FjdGlvbnMnXSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5Qcm92aWRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJQcm92aWRlcnMgPSBnaWd5YS5zb2NpYWxpemUuZ2V0UHJvdmlkZXJzQnlOYW1lKHRoaXMuX3AuZW5hYmxlZFByb3ZpZGVycyA/IHRoaXMuX3AuZW5hYmxlZFByb3ZpZGVycyA6ICcqJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyUHJvdmlkZXJzID0gZ2lneWEuc29jaWFsaXplLmhpZGVQcm92aWRlcnNCeU5hbWUoYXJQcm92aWRlcnMsIHRoaXMuX3AuZGlzYWJsZWRQcm92aWRlcnMgPyB0aGlzLl9wLmRpc2FibGVkUHJvdmlkZXJzIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJTaGFyZVByb3ZpZGVycyA9IGdpZ3lhLnNvY2lhbGl6ZS5nZXRQcm92aWRlcnNGb3JSZXF1aXJlZENhcGFiaWxpdGllcyhhclByb3ZpZGVycywgWydhY3Rpb25zJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJTaGFyZVByb3ZpZGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJTaGFyZVByb3ZpZGVyc1swXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyUHJvdmlkZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhclByb3ZpZGVyc1swXS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0TG9naW5Qcm92aWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dpblByb3ZpZGVyID0gdGhpcy5fdXNlci5sb2dpblByb3ZpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5Qcm92aWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpZGVudGl0eSBpbiB0aGlzLl91c2VyLmlkZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUHJvdmlkZXIgPSBpZGVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblByb3ZpZGVyO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94Q2xpY2tlZDogZnVuY3Rpb24gKGVsaWQsIGJsb2NrVW5jaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJFbGlkID0gZWxpZC5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSB0aGlzLmlzTW9iaWxlVUkgPyB0aGlzLmdldFNpbmdsZVNoYXJlUHJvdmlkZXIoKSA6IGFyRWxpZFthckVsaWQubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZGVudGl0eSA9IHRoaXMuX3VzZXIuaWRlbnRpdGllc1twcm92aWRlcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc01pc3NpbmdQZXJtaXNzaW9ucyA9IChpZGVudGl0eSAmJiBpZGVudGl0eS5taXNzaW5nUGVybWlzc2lvbnMgJiYgaWRlbnRpdHkubWlzc2luZ1Blcm1pc3Npb25zLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignYWN0aW9ucycpICE9IC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxpZCArICctaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDbGFzc05hbWUgPSBlbEltZyA/IGVsSW1nLmNsYXNzTmFtZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuaXNNb2JpbGVVSSA/IGVsLmNoZWNrZWQgOiBlbEltZy5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCAmJiBibG9ja1VuY2hlY2spIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3RDbGFzcyA9IChlbGlkLmluZGV4T2YoJy1yZXBseS0nKSAhPSAtMSA/ICdyZXBseUJveCcgOiAnY29tbWVudEJveCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGVja2VkICYmICghaWRlbnRpdHkgfHwgaXNNaXNzaW5nUGVybWlzc2lvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdSZWdpc3RyYXRpb246IHRoaXMuX3AucGVuZGluZ1JlZ2lzdHJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaWQ6IHRoaXMuX3AuY2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuX3AuY29udGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogJ2FjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWlzc2luZ1Blcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZXJyb3JDb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUaGlzLmlzTW9iaWxlVUkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxJbWcuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxJbWcuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1jaGVja2JveEltYWdlIGdpZy1jb21tZW50cy0nICsgcm9vdENsYXNzICsgJy1jaGVja2JveEltYWdlIGdpZy1jb21tZW50cy1jaGVja2JveEltYWdlLWNoZWNrZWQgZ2lnLWNvbW1lbnRzLScgKyByb290Q2xhc3MgKyAnLWNoZWNrYm94SW1hZ2UtY2hlY2tlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLnJlcXVlc3RQZXJtaXNzaW9ucyh0aGlzLl9jLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY2FsbGJhY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl91c2VyID0gZS51c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbEltZy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbEltZy5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLWNoZWNrYm94SW1hZ2UgZ2lnLWNvbW1lbnRzLScgKyByb290Q2xhc3MgKyAnLWNoZWNrYm94SW1hZ2UgZ2lnLWNvbW1lbnRzLWNoZWNrYm94SW1hZ2UtY2hlY2tlZCBnaWctY29tbWVudHMtJyArIHJvb3RDbGFzcyArICctY2hlY2tib3hJbWFnZS1jaGVja2VkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLmFkZENvbm5lY3Rpb24odGhpcy5fYywgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc01vYmlsZVVJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsSW1nLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtY2hlY2tib3hJbWFnZSBnaWctY29tbWVudHMtJyArIHJvb3RDbGFzcyArICctY2hlY2tib3hJbWFnZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsSW1nLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtY2hlY2tib3hJbWFnZSBnaWctY29tbWVudHMtJyArIHJvb3RDbGFzcyArICctY2hlY2tib3hJbWFnZSBnaWctY29tbWVudHMtY2hlY2tib3hJbWFnZS1jaGVja2VkIGdpZy1jb21tZW50cy0nICsgcm9vdENsYXNzICsgJy1jaGVja2JveEltYWdlLWNoZWNrZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxJbWcuY2hlY2tlZCA9ICFjaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUNoZWNrYm94ZXNEaXNwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGFyUHJvdmlkZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBkaXNwbGF5ID0gKHRoaXMuX3VzZXIuaWRlbnRpdGllc1twcm92aWRlci5uYW1lXSA/ICcnIDogJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3VzZXIuaWRlbnRpdGllcyAmJiB0aGlzLl91c2VyLmlkZW50aXRpZXNbcHJvdmlkZXIubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySUQgKyAnLWNoZWNrYm94LScgKyBhclByb3ZpZGVyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0UmVwbHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICctcmVwbHktJyArIHRoaXMubGFzdFJlcGx5SWQgKyAnLWNoZWNrYm94LScgKyBhclByb3ZpZGVyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNFbWFpbDogZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzID0gcy5yZXBsYWNlKC8oXlsgXSt8WyBdKyQpL2csICcnKTsgLy8gcmVtb3ZlIHByZWZpeCBhbmQgc3VmZml4IHNwYWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGdpZ3lhLmdsb2JhbC5pc0VtYWlsKHMpKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGd1ZXN0TG9naW5DbGlja2VkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmlja25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICctbmlja25hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICctZW1haWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmlja25hbWUudmFsdWUucmVwbGFjZSgvIC9nLCAnJykubGVuZ3RoIDwgMyB8fCAhbmlja25hbWUud2F0ZXJtYXJrQ2xlYXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JUZXh0ID0gVEVYVCgnbmlja25hbWVfc2hvdWxkX2JlX2F0X2xlYXN0XzNfY2hhcmFjdGVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICctZ3Vlc3RFcnJvclBsYWNlaG9sZGVyJykuaW5uZXJIVE1MID0gZXJyb3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHRoaXMuX3NldHRpbmdzLmlzR3Vlc3RFbWFpbFJlcXVpcmVkIHx8IGVtYWlsLndhdGVybWFya0NsZWFyZWQpICYmICF0aGlzLmlzRW1haWwoZW1haWwudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvclRleHQgPSBURVhUKCdwbGVhc2VfcHJvdmlkZV9hX3ZhbGlkX2VtYWlsX2FkZHJlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnLWd1ZXN0RXJyb3JQbGFjZWhvbGRlcicpLmlubmVySFRNTCA9IGVycm9yVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSAnX2dpZ19jb21tZW50c19uaWNrbmFtZT0nICsgZXNjYXBlKG5pY2tuYW1lLnZhbHVlKSArICc7IHBhdGg9Lyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbWFpbC52YWx1ZSAhPSAnJyAmJiBlbWFpbC53YXRlcm1hcmtDbGVhcmVkKSBkb2N1bWVudC5jb29raWUgPSAnX2dpZ19jb21tZW50c19lbWFpbD0nICsgZXNjYXBlKGVtYWlsLnZhbHVlKSArICc7IHBhdGg9Lyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyID0gdGhpcy5fZ2V0R3Vlc3RVc2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVVzZXJJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNsb3NlTGFzdFJlcGx5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdFJlcGx5SWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbW1lbnRCeUlEKHRoaXMubGFzdFJlcGx5SWQpLmNsb3NlUmVwbHlib3goKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVwbHlDbGlja2VkOiBmdW5jdGlvbiAocmVwbHlJZCwgZGVmYXVsdFZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RSZXBseUlkID09IHJlcGx5SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUxhc3RSZXBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VyID0gdGhpcy5fdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTGFzdFJlcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gdGhpcy5jb250YWluZXJJRCArICctcmVwbHktJyArIHJlcGx5SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmJ1aWxkQ29tbWVudEJveEl0ZW0oaXRlbSwgcmVwbHlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS53aWR0aCA9IHRoaXMuX3Aud2lkdGhcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy5fdGVtcGxhdGVzWydjb21tZW50Qm94J107XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICctY29tbWVudFRleHRhcmVhJykudmFsdWUgPSBkZWZhdWx0VmFsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1yZXBseWJ1dHRvbi0nICsgcmVwbHlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1idXR0b24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi1yZXBseSBnaWctY29tbWVudHMtYnV0dG9uLWRvd24gZ2lnLWNvbW1lbnRzLWJ1dHRvbi1yZXBseS1kb3duJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tQcm92aWRlcnMoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21tZW50VGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICctY29tbWVudFRleHRhcmVhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnRUZXh0YXJlYSkgY29tbWVudFRleHRhcmVhLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UmVwbHlJZCA9IHJlcGx5SWQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYnVpbGRDb21tZW50Qm94SXRlbTogZnVuY3Rpb24gKGl0ZW0sIHJlcGx5SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbHlJZCkgbmFtZSA9IHRoaXMuZ2V0Q29tbWVudEJ5SUQocmVwbHlJZCkudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtKSBpdGVtID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VyID0gdGhpcy5fdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID0gdGhpcy5jb250YWluZXJJRCArICctcmVwbHktJyArIHJlcGx5SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucm9vdENsYXNzID0gJ3JlcGx5Qm94JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbG9zZUljb24gPSB0aGlzLmlzTW9iaWxlVUkgPyAnJyA6IHRoaXMuX3RlbXBsYXRlc1snY2xvc2VJY29uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub25DbG9zZUNsaWNrZWQgPSB0aGlzLmdldENvbW1lbnRCeUlEKHJlcGx5SWQpLmdldFJlZlN0cmluZygpICsgJy5jbG9zZVJlcGx5Ym94KCknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9uUG9zdEJ1dHRvbkNsaWNrZWQgPSB0aGlzLmdldFJlZlN0cmluZygpICsgJy5wb3N0QnV0dG9uQ2xpY2tlZChcXCcnICsgcmVwbHlJZCArICdcXCcpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wb3N0X2FfbmV3X2NvbW1lbnQgPSBURVhUKHRoaXMudGV4dE1vZGUgPT0gJ3Jldmlld3MnID8gJ2NvbW1lbnRfb25fdXNlcm5hbWVfcmV2aWV3JyA6ICdyZXBseV90b191c2VybmFtZScsICcldXNlcm5hbWUnLCBnaWd5YS51dGlscy5zYW5pdGl6ZS5zYW5pdGl6ZUhUTUwoZ2lneWEuZ2xvYmFsLndicihuYW1lLCAyMCkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID0gdGhpcy5jb250YWluZXJJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yb290Q2xhc3MgPSAnY29tbWVudEJveCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub25Qb3N0QnV0dG9uQ2xpY2tlZCA9IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLnBvc3RCdXR0b25DbGlja2VkKCknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBvc3RfYV9uZXdfY29tbWVudCA9IHRoaXMudGV4dE1vZGUgPT0gJ3Jldmlld3MnID8gVEVYVCgncG9zdF95b3VyX3JldmlldycpIDogVEVYVCgncG9zdF9hX25ld19jb21tZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xvc2VJY29uID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmxvZ2luID0gdGhpcy5pc01vYmlsZVVJID8gKHRoaXMudGV4dE1vZGUgPT0gJ3Jldmlld3MnID8gVEVYVCgnbG9naW5fdG9fcmV2aWV3JykgOiBURVhUKCdsb2dpbl90b19jb21tZW50JykpIDogVEVYVCgnbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ub3IgPSBURVhUKCdvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ3Vlc3QgPSBURVhUKCdndWVzdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmd1ZXN0RHJvcGRvd24gPSB0aGlzLl9zZXR0aW5ncy5hbGxvd0d1ZXN0ID8gdGhpcy5fdGVtcGxhdGVzWydndWVzdERyb3Bkb3duJ10gOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmxvZ2luRHJvcGRvd24gPSB0aGlzLl90ZW1wbGF0ZXNbJ2xvZ2luRHJvcGRvd24nXTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnVzZXJJbWFnZSA9IHRoaXMuX3RlbXBsYXRlc1sndXNlckltYWdlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5waG90b0RpdiA9IHRoaXMuX3RlbXBsYXRlc1sncGhvdG9EaXY0OCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWRkQ29tbWVudCA9IHRoaXMuX3RlbXBsYXRlc1snYWRkQ29tbWVudCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucG9zdEJ1dHRvbiA9IHRoaXMuX3RlbXBsYXRlc1sncG9zdEJ1dHRvbiddO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZm9sbG93TGluayA9ICghdGhpcy5pc01vYmlsZVVJICYmICFyZXBseUlkKSA/IHRoaXMuX3RlbXBsYXRlc1snZm9sbG93TGluayddIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWxpZGF0aW9uRXJyb3JQbGFjZWhvbGRlciA9IHRoaXMuX3RlbXBsYXRlc1sndmFsaWRhdGlvbkVycm9yUGxhY2Vob2xkZXInXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmF0aW5ncyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udGl0bGVUZXh0Ym94ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRDb21tZW50VGV4dGFyZWEgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5lbmFibGVDb21tZW50Qm9keSB8fCB0aGlzLl9zZXR0aW5ncy5lbmFibGVDb21tZW50Qm9keSAhPSAnZGlzYWJsZWQnKSBpdGVtLmFkZENvbW1lbnRUZXh0YXJlYSA9IHRoaXMuX3RlbXBsYXRlc1snYWRkQ29tbWVudFRleHRhcmVhJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5tYXhMZW5ndGggPSB0aGlzLl9zZXR0aW5ncy5tYXhDb21tZW50TGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWFuZGF0b3J5TWFyayA9IHRoaXMuX3NldHRpbmdzLm1vZGUgPT0gJ3JhdGluZ3NPbmx5JyA/ICcnIDogJzxzcGFuIGNsYXNzPVwiZ2lnLWNvbW1lbnRzLW1hbmRhdG9yeU1hcmtcIj4mIzE2MDsqPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXBseUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5lbmFibGVSYXRpbmdzICYmIHRoaXMuX3NldHRpbmdzLmVuYWJsZVJhdGluZ3MgIT0gJ2Rpc2FibGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MucmF0aW5ncyA9IHsgX292ZXJhbGw6IFRFWFQoJ292ZXJhbGxfcmF0aW5nJykgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYXRpbmdUZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlc1snZWRpdGFibGVSYXRpbmcnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHJhdGluZ0lEIGluIHRoaXMuX3NldHRpbmdzLnJhdGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJhdGluZ3MgKz0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwocmF0aW5nVGVtcGxhdGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQgKyAnX3JhdGluZ18nICsgcmF0aW5nSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZ0lEOiByYXRpbmdJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogdGhpcy5pc01vYmlsZVVJID8gW10gOiBbVEVYVCgnaV9oYXRlX2l0JyksIFRFWFQoJ2lfZG9udF9saWtlX2l0JyksIFRFWFQoJ2l0c19vaycpLCBURVhUKCdpX2xpa2VfaXQnKSwgVEVYVCgnaV9sb3ZlX2l0JyldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLl9zZXR0aW5ncy5yYXRpbmdzW3JhdGluZ0lEXSArICc6JyArICh0aGlzLl9zZXR0aW5ncy5lbmFibGVSYXRpbmdzLnNwbGl0KCdfJylbMV0gPT0gJ21hbmRhdG9yeScgPyBtYW5kYXRvcnlNYXJrIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmdldFJlZlN0cmluZygpICsgJy5vblJhdGluZ0NsaWNrKHRoaXMpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLm9uUmF0aW5nTW91c2VPdmVyKHRoaXMpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dDogdGhpcy5nZXRSZWZTdHJpbmcoKSArICcub25SYXRpbmdNb3VzZU91dCh0aGlzKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkF0dHJpYnV0ZTogdGhpcy5pc01vYmlsZVVJID8gJ29udG91Y2hzdGFydCcgOiAnb25jbGljaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuZW5hYmxlQ29tbWVudFRpdGxlcyAmJiB0aGlzLl9zZXR0aW5ncy5lbmFibGVDb21tZW50VGl0bGVzICE9ICdkaXNhYmxlZCcpIGl0ZW0udGl0bGVUZXh0Ym94ID0gdGhpcy5fdGVtcGxhdGVzWyd0aXRsZVRleHRib3gnXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbFRlbXBsYXRlID0gdGhpcy5fdGVtcGxhdGVzWydhZGRDb21tZW50TGFiZWwnXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlTGFiZWxUZXh0ID0gKGl0ZW0udGl0bGVUZXh0Ym94ID8gKHRoaXMudGV4dE1vZGUgPT0gJ3Jldmlld3MnID8gVEVYVCgnc3VtbWFyeV9jb2xvbicpIDogJycpIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aXRsZUxhYmVsVGV4dCAhPSAnJyAmJiB0aGlzLl9zZXR0aW5ncy5lbmFibGVDb21tZW50VGl0bGVzLnNwbGl0KCdfJylbMV0gPT0gJ21hbmRhdG9yeScpIHRpdGxlTGFiZWxUZXh0ICs9IG1hbmRhdG9yeU1hcms7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS50aXRsZUxhYmVsID0gdGl0bGVMYWJlbFRleHQgIT0gJycgPyBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChsYWJlbFRlbXBsYXRlLCB7IGxhYmVsSUQ6ICd0aXRsZUxhYmVsJywgbGFiZWxUZXh0OiB0aXRsZUxhYmVsVGV4dCwgcm9vdENsYXNzOiBpdGVtLnJvb3RDbGFzcyB9KSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29tbWVudExhYmVsVGV4dCA9IChyZXBseUlkIHx8ICFpdGVtLmFkZENvbW1lbnRUZXh0YXJlYSA/ICcnIDogKHRoaXMudGV4dE1vZGUgPT0gJ3Jldmlld3MnID8gVEVYVCgncmV2aWV3X2NvbG9uJykgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50TGFiZWxUZXh0ICE9ICcnICYmIHRoaXMuX3NldHRpbmdzLmVuYWJsZUNvbW1lbnRCb2R5LnNwbGl0KCdfJylbMV0gPT0gJ21hbmRhdG9yeScpIGNvbW1lbnRMYWJlbFRleHQgKz0gbWFuZGF0b3J5TWFyaztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbW1lbnRMYWJlbCA9IGNvbW1lbnRMYWJlbFRleHQgIT0gJycgPyBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChsYWJlbFRlbXBsYXRlLCB7IGxhYmVsSUQ6ICdjb21tZW50TGFiZWwnLCBsYWJlbFRleHQ6IGNvbW1lbnRMYWJlbFRleHQsIHJvb3RDbGFzczogaXRlbS5yb290Q2xhc3MgfSkgOiAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm92aWRlcnNDaGVja2JveGVzID0gdGhpcy5fdGVtcGxhdGVzWydwcm92aWRlcnNDaGVja2JveGVzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm92aWRlcnNDaGVja2JveGVzQ29udGVudCA9IHRoaXMuX3RlbXBsYXRlc1sncHJvdmlkZXJzQ2hlY2tib3hlc0NvbnRlbnQnXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5vbkxvZ2luQ2xpY2sgPSB0aGlzLmdldFJlZlN0cmluZygpICsgJy5sb2dpbkNsaWNrZWQoXFwnJyArIGl0ZW0uaWQgKyAnXFwnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5vbkd1ZXN0Q2xpY2sgPSB0aGlzLmdldFJlZlN0cmluZygpICsgJy5ndWVzdENsaWNrZWQoXFwnJyArIGl0ZW0uaWQgKyAnXFwnKSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwaG90b1VSTCA9IHRoaXMuX3VzZXIucGhvdG9VUkw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwaG90b1VSTCB8fCBwaG90b1VSTCA9PSAnJykgcGhvdG9VUkwgPSB0aGlzLl91c2VyLnRodW1ibmFpbFVSTDtcclxuICAgICAgICAgICAgICAgICAgICBwaG90b1VSTCA9IGdpZ3lhLmdsb2JhbC5nZXRQaG90b1VSTChwaG90b1VSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwaG90b1VSTCB8fCBwaG90b1VSTCA9PSAnJykgcGhvdG9VUkwgPSBpbWdCYXNlICsgJ2F2YXRhcl80OHg0OC5naWYnO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGhvdG9VUkwgPSBwaG90b1VSTDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlcm5hbWUgPSB1c2VyLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VybmFtZSkgdXNlcm5hbWUgPSBnaWd5YS51dGlscy5zYW5pdGl6ZS5zYW5pdGl6ZUhUTUwoZ2lneWEuZ2xvYmFsLndicih1c2VybmFtZSwgMjApKS5yZXBsYWNlKC9cXCQvZywgJyYjMzY7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJuYW1lID09ICcnKSB1c2VybmFtZSA9ICdBbm9ueW1vdXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnByb3ZpZGVySW1hZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRyYXdQcm92aWRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBUaGlzLl9kcmF3UHJvdmlkZXJzKGl0ZW0uaWQpIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2hhcmVfdG8gPSB0aGlzLmlzTW9iaWxlVUkgPyAnJyA6IFRFWFQoJ3NoYXJlX3RvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wb3N0ID0gVEVYVCgncG9zdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtLm9uTG9nb3V0Q2xpY2sgPSB0aGlzLmdldFJlZlN0cmluZygpICsgJy5sb2dvdXQoKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5vbkNoZWNrYm94Q2xpY2tlZCA9IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLmNoZWNrYm94Q2xpY2tlZCh0aGlzLmlkKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5vbkZvbGxvd0NsaWNrZWQgPSB0aGlzLmdldFJlZlN0cmluZygpICsgJy5vbkZvbGxvd0NsaWNrZWQoKSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcGx1Z2luU2NvcGUuaXNTaGFyZVBvc3NpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zaGFyZV90byA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb3ZpZGVyc0NoZWNrYm94ZXMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdXNlci5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNoYXJlX3RvID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dpblByb3ZpZGVyID0gdGhpcy5nZXRMb2dpblByb3ZpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gZ2lneWEuc29jaWFsaXplLl9nZXRQcm92aWRlckJ5TmFtZShsb2dpblByb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyICYmIHByb3ZpZGVyLklEICE9IDYwMDIgLypTaXRlKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvdmlkZXJJbWFnZSA9IHRoaXMuX3RlbXBsYXRlc1sncHJvdmlkZXJJbWFnZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm92aWRlckltYWdlVVJMID0gaW1nQmFzZSArICdwcm92aWRlcnMvJyArIGxvZ2luUHJvdmlkZXIgKyAnVXNlcl8xNHgxNC5naWYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy51c2VTaXRlTG9naW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sb2dpbkRyb3Bkb3duID0gdGhpcy5fdGVtcGxhdGVzWydsb2dpbkRyb3Bkb3duTmF0aXZlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl91c2VyLmxvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxvZ291dExpbmsgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxvZ291dExpbmsgPSB0aGlzLl90ZW1wbGF0ZXNbJ2xvZ291dExpbmsnXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubG9naW5DYW52YXMgPSB0aGlzLl90ZW1wbGF0ZXNbJ2xvZ2luQ2FudmFzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl91c2VyLmlzR3Vlc3QgJiYgIXRoaXMuX3VzZXIuaXNDb25uZWN0ZWQpIHsgLy9sb2dnZWQgb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubG9naW5DYW52YXNDb250ZW50ID0gdGhpcy5fdGVtcGxhdGVzWydsb2dpbkNhbnZhc19sb2dnZWRPdXRfbW9iaWxlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2V0dGluZ3MuYWxsb3dHdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sb2dpbkNhbnZhc0NvbnRlbnQgPSB0aGlzLl90ZW1wbGF0ZXNbJ2xvZ2luQ2FudmFzX2xvZ2dlZE91dFdpdGhHdWVzdCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sb2dpbkNhbnZhc0NvbnRlbnQgPSB0aGlzLl90ZW1wbGF0ZXNbJ2xvZ2luQ2FudmFzX2xvZ2dlZE91dCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl91c2VyLmlzR3Vlc3QpIHsgLy9ndWVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxvZ291dCA9IFRFWFQoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9uTG9nb3V0Q2xpY2sgPSB0aGlzLmdldFJlZlN0cmluZygpICsgJy5ndWVzdExvZ291dCgpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sb2dpbkNhbnZhc0NvbnRlbnQgPSB0aGlzLl90ZW1wbGF0ZXNbJ2xvZ2luQ2FudmFzX2xvZ2dlZEluX2d1ZXN0J107XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy9sb2dnZWQgaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sb2dvdXQgPSBURVhUKCdsb2dvdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vbkxvZ291dENsaWNrID0gdGhpcy5nZXRSZWZTdHJpbmcoKSArICcubG9nb3V0KCknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxvZ2luQ2FudmFzQ29udGVudCA9IHRoaXMuX3RlbXBsYXRlc1snbG9naW5DYW52YXNfbG9nZ2VkSW4nXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbG9naW5DbGlja2VkOiBmdW5jdGlvbiAoaWQsIGVsU3RpY2tUbywgb25Mb2dpbiwgYWJvdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnVzZVNpdGVMb2dpbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoeyBldmVudE5hbWU6ICdzaXRlTG9naW5DbGlja2VkJyB9LCB0aGlzLl9wKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGl2TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICctbG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsRHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICctbG9naW5Ecm9wZG93bicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFyZ2luQm90dG9tID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbFN0aWNrVG8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsU3RpY2tUbyA9IGVsRHJvcGRvd247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSAtMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsU3RpY2tUbykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGl2TG9naW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXZMb2dpbi5zdHlsZS5kaXNwbGF5ICE9ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkxvZ2luLmZuY0hpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2TG9naW4uZm5jU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSAoZWxTdGlja1RvLm9mZnNldFdpZHRoIDwgMTQwID8gMTQwIDogZWxTdGlja1RvLm9mZnNldFdpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkgJiYgdyA8IDI1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcgPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIC0gNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZMb2dpbi5pZCA9IGlkICsgJy1sb2dpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZMb2dpbi5jbGFzc05hbWUgPSAnZ2lnLWNvbW1lbnRzLWNvbnRhaW5lciBnaWctY29tbWVudHMtbG9naW5VSSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZMb2dpbi5pbm5lckhUTUwgPSAodGhpcy5pc01vYmlsZVVJID8gJycgOiAnPGRpdiBjbGFzcz1cImdpZy1jb21tZW50cy1sb2dpblVJLXBsZWFzZUxvZ2luXCIgaWQ9XCInICsgZGl2TG9naW4uaWQgKyAnLXBsZWFzZUxvZ2luXCI+JyArIFRFWFQoJ3BsZWFzZV9sb2dpbicpICsgJzwvZGl2PicpICsgJzxkaXYgaWQ9XCInICsgZGl2TG9naW4uaWQgKyAnLWxvZ2luVUlcIiBjbGFzcz1cImdpZy1jb21tZW50cy1sb2dpblVJLWNvbnRlbnRcIj48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2TG9naW4uZm5jSGlkZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICYmIChlLnRhcmdldC5pZC5pbmRleE9mKGRpdkxvZ2luLmlkKSAhPSAtMSB8fCBlLnRhcmdldCA9PSBlbFN0aWNrVG8pKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnNyY0VsZW1lbnQgJiYgKGUuc3JjRWxlbWVudC5pZC5pbmRleE9mKGRpdkxvZ2luLmlkKSAhPSAtMSB8fCBlLnNyY0VsZW1lbnQgPT0gZWxTdGlja1RvKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uaGlkZUJ5SUQoZGl2TG9naW4uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25jbGljaycsIGRpdkxvZ2luLmZuY0hpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRpdkxvZ2luLmZuY0hpZGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsRHJvcGRvd24pIGVsRHJvcGRvd24uY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1kcm9wZG93biBnaWctY29tbWVudHMtZHJvcGRvd24tbG9naW4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkxvZ2luLmZuY0hpZGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXZMb2dpbiAmJiBkaXZMb2dpbi5wYXJlbnROb2RlKSBkaXZMb2dpbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdkxvZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkxvZ2luLmZuY1Nob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnNob3dCeUlEKGRpdkxvZ2luLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5yZW1vdmVFbGVtZW50T25Eb2NDbGljayhkaXZMb2dpbiwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBnaWd5YS5nbG9iYWwuX0dldEVsZW1lbnRQb3MoZWxTdGlja1RvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZMb2dpbi5zdHlsZS5sZWZ0ID0gJycgKyAoZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUgPyBwb3MubGVmdCAtIDIgOiBwb3MubGVmdCkgLSB3ICsgZWxTdGlja1RvLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZMb2dpbi5zdHlsZS50b3AgPSAnJyArIChwb3MudG9wICsgKGFib3ZlRWxlbWVudCA/IDAgOiAoZWxTdGlja1RvLm9mZnNldEhlaWdodCArIG1hcmdpbkJvdHRvbSArIChnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSA/IC0yIDogMCkpKSkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkaXZMb2dpbi5zdHlsZS5sZWZ0KSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2TG9naW4uc3R5bGUubGVmdCA9ICczcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxEcm9wZG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbERyb3Bkb3duLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtZHJvcGRvd24gZ2lnLWNvbW1lbnRzLWRyb3Bkb3duLWxvZ2luIGdpZy1jb21tZW50cy1kcm9wZG93bi1kb3duIGdpZy1jb21tZW50cy1kcm9wZG93bi1sb2dpbi1kb3duJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZMb2dpbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUmVnaXN0cmF0aW9uOiB0aGlzLl9wLnBlbmRpbmdSZWdpc3RyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5fcC5jb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiAnYWN0aW9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUlDb25maWc6ICh0aGlzLl9wLmFkZENvbm5lY3Rpb25zVUlDb25maWcgPyB0aGlzLl9wLmFkZENvbm5lY3Rpb25zVUlDb25maWcgOiB0aGlzLl9wLmxvZ2luVUlDb25maWcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25FeHBpcmF0aW9uOiB0aGlzLl9wLnNlc3Npb25FeHBpcmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRQcm92aWRlcnM6IHRoaXMuX3AuZW5hYmxlZFByb3ZpZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFByb3ZpZGVyczogdGhpcy5fcC5kaXNhYmxlZFByb3ZpZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJRDogZGl2TG9naW4uaWQgKyAnLWxvZ2luVUknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Rlcm1zTGluazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUdpZ3lhTGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdyAtIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmlzTW9iaWxlVUkgPyAyMDAgOiA2NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGU6IHRoaXMuaXNNb2JpbGVVSSA/ICdmdWxsbG9nbycgOiAnc3RhbmRhcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpZDogdGhpcy5fcC5jaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aGlzLl9wLnRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmU6IHRoaXMuX3Auc2lnbmF0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gKCkgeyB3aW5kb3cuc2V0VGltZW91dChkaXZMb2dpbi5mbmNIaWRlLCAxMDAwKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkQ2FwYWJpbGl0aWVzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbm5lY3Rpb25BZGRlZDogb25Mb2dpbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxvZ2luOiBvbkxvZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6IHRoaXMuaXNNb2JpbGVVSSA/IDQ1IDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VMYXJnZUFycm93czogdGhpcy5pc01vYmlsZVVJID8gdHJ1ZSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5zaG93QWRkQ29ubmVjdGlvbnNVSSh0aGlzLl9jLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2TG9naW4uZm5jU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlZHJhdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncyAmJiB0aGlzLl91c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBndWVzdCA9IHRoaXMuX2dldEd1ZXN0VXNlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3VzZXIuaXNDb25uZWN0ZWQgJiYgZ3Vlc3Qubmlja25hbWUgJiYgdGhpcy5fc2V0dGluZ3MuYWxsb3dHdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlciA9IGd1ZXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdDb21tZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3Q29tbWVudEJveCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGb2xsb3dVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN1YnNjcmliZVVJKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmlyZWRMb2FkRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZWRMb2FkRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnbG9hZCcsIHZlcnNpb246IF9waS5jb21tZW50cy52ZXJzaW9uIH0sIHRoaXMuX3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmVuYWJsZVNhZmVDb3B5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySUQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBfdXBkYXRlVXNlckluZm86IGZ1bmN0aW9uIChyZXBseUlEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc2VFbGlkID0gdGhpcy5jb250YWluZXJJRDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbHlJRCkgYmFzZUVsaWQgPSB0aGlzLmNvbnRhaW5lcklEICsgJy1yZXBseS0nICsgcmVwbHlJRDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuYnVpbGRDb21tZW50Qm94SXRlbShpdGVtLCByZXBseUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsTG9naW5DYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXNlRWxpZCArICctbG9naW5DYW52YXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxMb2dpbkNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbExvZ2luQ2FudmFzLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKGl0ZW0ubG9naW5DYW52YXNDb250ZW50LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsUHJvdmlkZXJzQ2hlY2tib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhc2VFbGlkICsgJy1wcm92aWRlcnNDaGVja2JveGVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsUHJvdmlkZXJzQ2hlY2tib3hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdXNlci5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsUHJvdmlkZXJzQ2hlY2tib3hlcy5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChpdGVtLnByb3ZpZGVyc0NoZWNrYm94ZXNDb250ZW50LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsUHJvdmlkZXJzQ2hlY2tib3hlcy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxQcm92aWRlcnNDaGVja2JveGVzLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKGl0ZW0ucHJvdmlkZXJzQ2hlY2tib3hlc0NvbnRlbnQsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxQcm92aWRlcnNDaGVja2JveGVzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlx0XHRcdFx0XHRcdGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvZ2luUHJvdmlkZXIgPSB0aGlzLmdldExvZ2luUHJvdmlkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5Qcm92aWRlckRpc3BsYXlOYW1lID0gZ2lneWEuc29jaWFsaXplLmdldFByb3ZpZGVyc0J5TmFtZShsb2dpblByb3ZpZGVyKVswXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnLWNoZWNrYm94LXByb3ZpZGVyLXRleHQnKS5pbm5lckhUTUwgPSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxQb3N0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFzZUVsaWQgKyAnLXBvc3RCdXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxQb3N0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsUG9zdEJ1dHRvbi5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChpdGVtLnBvc3RCdXR0b24sIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsU2hhcmVUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhc2VFbGlkICsgJy1zaGFyZVRvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsU2hhcmVUbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbFNoYXJlVG8uaW5uZXJIVE1MID0gaXRlbS5zaGFyZV90bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrUHJvdmlkZXJzKHRoaXMuY29udGFpbmVySUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2xvc2UgZHJvcGRvd25zXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpdkd1ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFzZUVsaWQgKyAnLWd1ZXN0VUknKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGl2R3Vlc3QpIGRpdkd1ZXN0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2R3Vlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXZMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhc2VFbGlkICsgJy1sb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXZMb2dpbikgZGl2TG9naW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZMb2dpbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RSZXBseUlkICYmIHJlcGx5SUQgIT0gdGhpcy5sYXN0UmVwbHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVVc2VySW5mbyh0aGlzLmxhc3RSZXBseUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXBseUlEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGlkIGluIHRoaXMuY29tbWVudHNJbnN0YW5jZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNJbnN0YW5jZXNbaWRdLnVwZGF0ZVZvdGVVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNlbGZDb21tZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZvbGxvd1N0YXR1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN1YnNjcmliZVN0YXR1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94ZXNEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF91cGRhdGVTZWxmQ29tbWVudHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuYWxsb3dDb21tZW50RGVsZXRpb24gfHwgdGhpcy50ZXh0TW9kZSA9PSAncmV2aWV3cycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5jb21tZW50cy5nZXRVc2VyQ29tbWVudHModGhpcy5fcCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZVJlcGxpZXM6IHRydWUsIGNhbGxiYWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlICYmIGUuY29tbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fdXNlckNvbW1lbnRzID0gZS5jb21tZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmNvbW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tbWVudElEID0gZS5jb21tZW50c1tpXS5JRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUaGlzLmNvbW1lbnRzSW5zdGFuY2VzW2NvbW1lbnRJRF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLmNvbW1lbnRzSW5zdGFuY2VzW2NvbW1lbnRJRF0uZGF0YS5zZW5kZXIuaXNTZWxmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX3VzZXJDb21tZW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjb21tZW50SUQgaW4gVGhpcy5jb21tZW50c0luc3RhbmNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5jb21tZW50c0luc3RhbmNlc1tjb21tZW50SURdLmRhdGEuc2VuZGVyLmlzU2VsZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUaGlzLnRleHRNb2RlID09ICdyZXZpZXdzJykgVGhpcy5fZHJhd0NvbW1lbnRCb3goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF91cGRhdGVWb3RlczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5lbmFibGVWb3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5jb21tZW50cy5nZXRVc2VyVm90ZXModGhpcy5fYywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcy51c2VyVm90ZXMpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjb21tZW50SUQgaW4gVGhpcy5jb21tZW50c0luc3RhbmNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IFRoaXMuZ2V0Q29tbWVudEJ5SUQoY29tbWVudElEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21tZW50LnZvdGVJblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnZvdGUgPSByZXMudXNlclZvdGVzW2NvbW1lbnRJRF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVwZGF0ZVZvdGVVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgX2dldEd1ZXN0VXNlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuaWNrbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmFsbG93R3Vlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWUgPSB0aGlzLl9nZXRDb29raWUoJ19naWdfY29tbWVudHNfbmlja25hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgPSB0aGlzLl9nZXRDb29raWUoJ19naWdfY29tbWVudHNfZW1haWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5pY2tuYW1lICE9IG51bGwpIG5pY2tuYW1lID0gdW5lc2NhcGUobmlja25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWwgIT0gbnVsbCkgZW1haWwgPSB1bmVzY2FwZShlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVSUQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3Vlc3Q6IChuaWNrbmFtZSAhPSBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ6IHRoaXMuX2dldENvb2tpZSgnX2dpZ19jb21tZW50c19sb2NrZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBfZ2V0SW5mbzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLm9hdXRoX3Rva2VuID0gdGhpcy5fcC5vYXV0aF90b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY2lkID0gdGhpcy5fcC5jaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3JDb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX3VzZXIgPSBkYXRhLnVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFUaGlzLmJyb2FkY2FzdGVkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIpIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKFRoaXMuX3AsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuYnJvYWRjYXN0ZWRFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLmdldFVzZXJJbmZvKHRoaXMuX2MsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgX2RyYXdDb21tZW50Qm94OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmJ1aWxkQ29tbWVudEJveEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlclJldmlldztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3NldHRpbmdzLmFsbG93TXVsdGlwbGVSZXZpZXdzUGVyVXNlciAmJiB0aGlzLl91c2VyQ29tbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl91c2VyQ29tbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdXNlckNvbW1lbnRzW2ldLnBhcmVudElEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJldmlldyA9IHRoaXMuX3VzZXJDb21tZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0TW9kZSA9PSAncmV2aWV3cycgJiYgdXNlclJldmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5vYmplY3QuYWRkKGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RfYV9uZXdfY29tbWVudDogVEVYVCgneW91cl9yZXZpZXcnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15UmF0aW5nTGFiZWw6IHVzZXJSZXZpZXcucmF0aW5ncyAmJiB1c2VyUmV2aWV3LnJhdGluZ3NbJ19vdmVyYWxsJ10gPyBURVhUKCdteV9yYXRpbmdfY29sb24nKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlTdW1tYXJ5TGFiZWw6IHVzZXJSZXZpZXcuY29tbWVudFRpdGxlID8gVEVYVCgnc3VtbWFyeV9jb2xvbicpIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVJldmlld0xhYmVsOiB1c2VyUmV2aWV3LmNvbW1lbnRUZXh0ID8gVEVYVCgncmV2aWV3X2NvbG9uJykgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiB1c2VyUmV2aWV3LmNvbW1lbnRUaXRsZSA/IHVzZXJSZXZpZXcuY29tbWVudFRpdGxlIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXc6IHVzZXJSZXZpZXcuY29tbWVudFRleHQgPyB1c2VyUmV2aWV3LmNvbW1lbnRUZXh0IDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmF0aW5nVGVtcGxhdGUgPSB0aGlzLl90ZW1wbGF0ZXNbJ3JhdGluZyddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJldmlldy5yYXRpbmdzICYmIHVzZXJSZXZpZXcucmF0aW5nc1snX292ZXJhbGwnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yYXRpbmcgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChyYXRpbmdUZW1wbGF0ZSwgeyB2YWx1ZTogdXNlclJldmlldy5yYXRpbmdzID8gdXNlclJldmlldy5yYXRpbmdzWydfb3ZlcmFsbCddIDogMCwgc3RhckNsYXNzTmFtZTogJ2dpZy1jb21tZW50cy1zdGFyLW15UmF0aW5nJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy5fdGVtcGxhdGVzWydteVJhdGluZyddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1jb21tZW50Qm94JykuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGVtcGxhdGUsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2V0dGluZ3MgIT0gbnVsbCAmJiB0aGlzLnN0cmVhbUluZm8uc3RhdHVzICE9ICdyZWFkT25seScgJiYgIXRoaXMuX3NldHRpbmdzLnJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ud2lkdGggPSB0aGlzLl9wLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLl90ZW1wbGF0ZXNbJ2NvbW1lbnRCb3gnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbW1lbnRUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21tZW50VGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1jb21tZW50VGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnRUZXh0YXJlYSkgb21tZW50VGV4dCA9IGNvbW1lbnRUZXh0YXJlYS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICctY29tbWVudEJveCcpLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySUQgKyAnLWNvbW1lbnRUZXh0YXJlYScpKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1jb21tZW50VGV4dGFyZWEnKS52YWx1ZSA9IGNvbW1lbnRUZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tQcm92aWRlcnModGhpcy5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2xvc2UgZHJvcGRvd25zXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpdkd1ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICctZ3Vlc3RVSScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXZHdWVzdCkgZGl2R3Vlc3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZHdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpdkxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICctbG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGl2TG9naW4pIGRpdkxvZ2luLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2TG9naW4pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF9nZXRDb29raWU6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSBjID0gYy5zdWJzdHJpbmcoMSwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCArIDEsIGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgX2NoZWNrUHJvdmlkZXJzOiBmdW5jdGlvbiAoaWQsIGFsd2F5c0NoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsUHJvdmlkZXJzQ2hlY2tib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgJy1wcm92aWRlcnNDaGVja2JveGVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsUHJvdmlkZXJzQ2hlY2tib3hlcyAmJiB0aGlzLl91c2VyLmlzQ29ubmVjdGVkKSBlbFByb3ZpZGVyc0NoZWNrYm94ZXMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsd2F5c0NoZWNrIHx8IHRoaXMuX3NldHRpbmdzLnNoYXJlVG9TTkNoZWNrYm94Q2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdXNlci5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZGVudGl0eSA9IHRoaXMuZ2V0U2luZ2xlU2hhcmVQcm92aWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvSWQgPSB0aGlzLl91c2VyLmlkZW50aXRpZXNbaWRlbnRpdHldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG9JZC5taXNzaW5nUGVybWlzc2lvbnMgJiYgb0lkLm1pc3NpbmdQZXJtaXNzaW9ucy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2FjdGlvbnMnKSAhPSAtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IHRoaXMuX2dldENvb2tpZSgnX2dpZ19jb21tZW50c19jYl8nICsgaWRlbnRpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29va2llID09IG51bGwgfHwgY29va2llID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3hDbGlja2VkKGlkICsgJy1jaGVja2JveC1wcm92aWRlci1jYicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaWRlbnRpdHkgaW4gdGhpcy5fdXNlci5pZGVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9JZCA9IHRoaXMuX3VzZXIuaWRlbnRpdGllc1tpZGVudGl0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEob0lkLm1pc3NpbmdQZXJtaXNzaW9ucyAmJiBvSWQubWlzc2luZ1Blcm1pc3Npb25zLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignYWN0aW9ucycpICE9IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29va2llID0gdGhpcy5fZ2V0Q29va2llKCdfZ2lnX2NvbW1lbnRzX2NiXycgKyBpZGVudGl0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb29raWUgPT0gbnVsbCB8fCBjb29raWUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveENsaWNrZWQoaWQgKyAnLWNoZWNrYm94LScgKyBpZGVudGl0eSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgX2RyYXdQcm92aWRlcnM6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhckhUTUwgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5hYmxlZFByb3ZpZGVycyA9IHRoaXMuX3BbJ2VuYWJsZWRTaGFyZVByb3ZpZGVycyddID8gdGhpcy5fcFsnZW5hYmxlZFNoYXJlUHJvdmlkZXJzJ10gOiB0aGlzLl9wWydlbmFibGVkUHJvdmlkZXJzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbmFibGVkUHJvdmlkZXJzKSBlbmFibGVkUHJvdmlkZXJzID0gJyonO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXNhYmxlZFByb3ZpZGVycyA9IHRoaXMuX3BbJ2Rpc2FibGVkU2hhcmVQcm92aWRlcnMnXSA/IHRoaXMuX3BbJ2Rpc2FibGVkU2hhcmVQcm92aWRlcnMnXSA6IHRoaXMuX3BbJ2Rpc2FibGVkUHJvdmlkZXJzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlZFByb3ZpZGVycykgZGlzYWJsZWRQcm92aWRlcnMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBhclByb3ZpZGVycyA9IGdpZ3lhLnNvY2lhbGl6ZS5nZXRQcm92aWRlcnNCeU5hbWUoZW5hYmxlZFByb3ZpZGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJQcm92aWRlcnMgPSBnaWd5YS5zb2NpYWxpemUuaGlkZVByb3ZpZGVyc0J5TmFtZShhclByb3ZpZGVycywgZGlzYWJsZWRQcm92aWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyUHJvdmlkZXJzID0gZ2lneWEuc29jaWFsaXplLmdldFByb3ZpZGVyc0ZvclJlcXVpcmVkQ2FwYWJpbGl0aWVzKGFyUHJvdmlkZXJzLCBbJ2FjdGlvbnMnXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhckNvbm5lY3RlZFByb3ZpZGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhck5vdENvbm5lY3RlZFByb3ZpZGVycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl91c2VyLmlkZW50aXRpZXMgJiYgdGhpcy5fdXNlci5pZGVudGl0aWVzW2FyUHJvdmlkZXJzW2ldLm5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckNvbm5lY3RlZFByb3ZpZGVycy5wdXNoKGFyUHJvdmlkZXJzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyTm90Q29ubmVjdGVkUHJvdmlkZXJzLnB1c2goYXJQcm92aWRlcnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyUHJvdmlkZXJzID0gYXJDb25uZWN0ZWRQcm92aWRlcnMuY29uY2F0KGFyTm90Q29ubmVjdGVkUHJvdmlkZXJzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hclByb3ZpZGVycyA9IGFyUHJvdmlkZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5TaGFyZU9wdGlvbnMgPSB0aGlzLl9wLm1pblNoYXJlT3B0aW9ucyA/IHRoaXMuX3AubWluU2hhcmVPcHRpb25zIDogMjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2hvd25Qcm92aWRlcnNMZW5ndGggPSBNYXRoLm1heChtaW5TaGFyZU9wdGlvbnMsIGFyQ29ubmVjdGVkUHJvdmlkZXJzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvZ2luUHJvdmlkZXIgPSB0aGlzLmdldFNpbmdsZVNoYXJlUHJvdmlkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5Qcm92aWRlciA9IGdpZ3lhLnNvY2lhbGl6ZS5nZXRQcm92aWRlcnNCeU5hbWUobG9naW5Qcm92aWRlcilbMF0uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkICsgJy1jaGVja2JveC1wcm92aWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0X3RvX3Byb3ZpZGVyOiBURVhUKCdwb3N0X3RvX3Byb3ZpZGVyJywgJyVwcm92aWRlcicsIGxvZ2luUHJvdmlkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy5fdGVtcGxhdGVzWydwcm92aWRlckNoZWNrYm94LW1vYmlsZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhckhUTUwucHVzaChnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgaXRlbSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGFyUHJvdmlkZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkICsgJy1jaGVja2JveC0nICsgcHJvdmlkZXIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uVVJMOiBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9zaGFyZUJhci9pY29ucy8nICsgcHJvdmlkZXIubmFtZSArICcucG5nJyksIC8vZ2lneWEudGhpc1NjcmlwdC5iYXNlICsgJy9ncy9pL3NoYXJlQmFyL2ljb25zLycgKyBwcm92aWRlci5uYW1lICsgJy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBpID4gc2hvd25Qcm92aWRlcnNMZW5ndGggLSAxID8gJ2Rpc3BsYXk6bm9uZTsnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlc1sncHJvdmlkZXJDaGVja2JveCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGVtcGxhdGUsIGl0ZW0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJQcm92aWRlcnMubGVuZ3RoID4gc2hvd25Qcm92aWRlcnNMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuX3RlbXBsYXRlc1snbW9yZUxpbmsnXSwgeyBtb3JlOiBURVhUKCdtb3JlJyksIG9uQ2xpY2s6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLnNob3dNb3JlUHJvdmlkZXJzRGlhbG9nKHRoaXMsIFxcJycgKyBpZCArICdcXCcpJyB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFySFRNTC5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzaG93TW9yZVByb3ZpZGVyc0RpYWxvZzogZnVuY3Rpb24gKGVsLCBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhck1vcmVQcm92aWRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsY2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICctY2hlY2tib3gtJyArIGFyUHJvdmlkZXJzW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxjYiAmJiBlbGNiLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhck1vcmVQcm92aWRlcnMucHVzaCh0aGlzLmFyUHJvdmlkZXJzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb3JlUHJvdmlkZXJzRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyUHJvdmlkZXJzSFRNTCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJNb3JlUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGFyTW9yZVByb3ZpZGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJQcm92aWRlcnNIVE1MLnB1c2goZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5fdGVtcGxhdGVzWydtb3JlUHJvdmlkZXInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlck5hbWU6IHByb3ZpZGVyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25XaWR0aDogJzIycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuZ2V0UmVmU3RyaW5nKCkgKyAnLm9uTW9yZVByb3ZpZGVyQ2xpY2soXFwnJyArIHByb3ZpZGVyLm5hbWUgKyAnXFwnLFxcJycgKyBpZCArICdcXCcpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uVVJMOiBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9lZGl0LycgKyBwcm92aWRlci5uYW1lICsgJy5wbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy5fdGVtcGxhdGVzWydtb3JlUHJvdmlkZXJzRGlhbG9nJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVfc2hhcmVfZGVzdGluYXRpb25zOiBURVhUKCdtb3JlX3NoYXJlX2Rlc3RpbmF0aW9ucycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JlUHJvdmlkZXJzSFRNTDogYXJQcm92aWRlcnNIVE1MLmpvaW4oJycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5nZXRSZWZTdHJpbmcoKSArICcuaGlkZU1vcmVQcm92aWRlcnNEaWFsb2coKSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJJRCA9IHRoaXMuY29udGFpbmVySUQgKyAnLW1vcmVQcm92aWRlcnNEaWFsb2cnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXZNb3JlID0gZ2lneWEudXRpbHMuRE9NLmNyZWF0ZVRvcExldmVsRGl2KGNvbnRhaW5lcklEICsgJ19jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXZNb3JlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgICAgICBkaXZNb3JlLmNsYXNzTmFtZSA9ICdnaWctY29tbWVudHMtY29udGFpbmVyJztcclxuICAgICAgICAgICAgICAgICAgICBkaXZNb3JlLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gZ2lneWEuZ2xvYmFsLl9HZXRFbGVtZW50UG9zKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2NyZWVuQm90dG9tID0gZ2lneWEudXRpbHMudmlld3BvcnQuZ2V0U2Nyb2xsKCkudG9wICsgZ2lneWEudXRpbHMudmlld3BvcnQuZ2V0SW5uZXJTaXplKCkuaDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnRvcCArIGRpdk1vcmUub2Zmc2V0SGVpZ2h0ID4gc2NyZWVuQm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdk1vcmUuc3R5bGUudG9wID0gcG9zLnRvcCAtIGRpdk1vcmUub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZNb3JlLnN0eWxlLnRvcCA9IHBvcy50b3AgKyBlbC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXZNb3JlLnN0eWxlLmxlZnQgPSBwb3MubGVmdCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdk1vcmUuZm5jSGlkZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5oaWRlTW9yZVByb3ZpZGVyc0RpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQoJ29uY2xpY2snLCBkaXZNb3JlLmZuY0hpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGl2TW9yZS5mbmNIaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGlkZU1vcmVQcm92aWRlcnNEaWFsb2c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICctbW9yZVByb3ZpZGVyc0RpYWxvZ19jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5kZXRhY2hFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoJ29uY2xpY2snLCBjb250YWluZXIuZm5jSGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWluZXIuZm5jSGlkZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uTW9yZVByb3ZpZGVyQ2xpY2s6IGZ1bmN0aW9uIChwcm92aWRlciwgaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb3JlUHJvdmlkZXJzRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveENsaWNrZWQoaWQgKyAnLWNoZWNrYm94LScgKyBwcm92aWRlciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29tbWVudHNJbnN0YW5jZXMpIHRoaXMuY29tbWVudHNJbnN0YW5jZXMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAvL2FkZCBjc3MgKG9ubHkgb25jZSkuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRldmljZVR5cGUgPSB0aGlzLl9wLmRldmljZVR5cGUgPyB0aGlzLl9wLmRldmljZVR5cGUudG9Mb3dlckNhc2UoKSA6ICdkZXNrdG9wJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW9iaWxlVUkgPSAoZGV2aWNlVHlwZSA9PSAnbW9iaWxlJyB8fCAoZGV2aWNlVHlwZSA9PSAnYXV0bycgJiYgZ2lneWEubG9jYWxJbmZvLmlzTW9iaWxlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3AuY3NzUHJlZml4IHx8IHBsdWdpblNjb3BlLmluc3RhbmNlc19zaXplID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLmFkZENTUyhwbHVnaW5TY29wZS5kZWZhdWx0cy5jc3MsIHRoaXMuX3AuY3NzUHJlZml4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLmFkZENTUyhwbHVnaW5TY29wZS5kZWZhdWx0cy5tb2JpbGVDU1MsIHRoaXMuX3AuY3NzUHJlZml4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5hZGRDU1MocGx1Z2luU2NvcGUuZGVmYXVsdHMubm9uTW9iaWxlQ1NTLCB0aGlzLl9wLmNzc1ByZWZpeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc01vYmlsZSAmJiBnaWd5YS5sb2NhbEluZm8uaXNTYWZhcmkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5hZGRDU1MoJy5naWctY29tbWVudHMtY29udGFpbmVyICogey13ZWJraXQtdGV4dC1zaXplLWFkanVzdDpub25lO30nLCB0aGlzLl9wLmNzc1ByZWZpeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3ID0gdGhpcy5fcC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEKS5zdHlsZS53aWR0aCA9ICh0aGlzLmlzTW9iaWxlVUkgPyAnMTAwJScgOiB3ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCkuY2xhc3NOYW1lID0gJ2dpZy1jb21tZW50cy1jb250YWluZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGV4dGFyZWFzIHdpdGggMTAwJSBhcmUgYnVnZ3lcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5nbG9iYWwuYWRkQ1NTKCcjJyArIHRoaXMuY29udGFpbmVySUQgKyAnIHRleHRhcmVhLmdpZy1jb21tZW50cy1yZXBseUJveC10ZXh0YXJlYSB7d2lkdGg6JyArIChnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSA/IHcgLSAzNyA6IHcgLSAzMCkgKyAncHh9Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5hZGRDU1MoJyMnICsgdGhpcy5jb250YWluZXJJRCArICcgdGV4dGFyZWEuZ2lnLWNvbW1lbnRzLWNvbW1lbnRCb3gtdGV4dGFyZWEge3dpZHRoOicgKyAoZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUgPyB3IC0gMTcgOiB3IC0gMTApICsgJ3B4fScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCkuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJnaWctY29tbWVudHMtcHJvZ3Jlc3NcIj48L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29tbWVudHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5hZGRFdmVudEhhbmRsZXJzKHsgbGlzdGVuZXJUeXBlOiAnY29tcG9uZW50JyB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyRGVzY3JpcHRpb246ICdsaXN0ZW5lciBmb3IgdXBkYXRpbmcgYSBjb21tZW50cyB3aWRnZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvZ291dDogZnVuY3Rpb24gKCkgeyBUaGlzLl91c2VyID0gVGhpcy5fZ2V0R3Vlc3RVc2VyKCk7IFRoaXMuX3VwZGF0ZVVzZXJJbmZvKCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9naW46IGZ1bmN0aW9uIChlKSB7IFRoaXMuX3VzZXIgPSBlLnVzZXI7IFRoaXMuX3VwZGF0ZVVzZXJJbmZvKCk7IFRoaXMuX3VwZGF0ZVZvdGVzKCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29ubmVjdDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3YXNDb25uZWN0ZWQgPSBUaGlzLl91c2VyLmlzQ29ubmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fdXNlciA9IGUudXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YXNDb25uZWN0ZWQgIT0gVGhpcy5fdXNlci5pc0Nvbm5lY3RlZCkgVGhpcy5fdXBkYXRlVXNlckluZm8oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX3VwZGF0ZVZvdGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlzY29ubmVjdDogZnVuY3Rpb24gKGUpIHsgVGhpcy5fdXNlciA9IGUudXNlcjsgaWYgKCFUaGlzLl91c2VyLmlzQ29ubmVjdGVkKSBUaGlzLl91cGRhdGVVc2VySW5mbygpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGdldFJlZlN0cmluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZ2lneWEuY29tbWVudHMucGx1Z2lucy5jb21tZW50cy5pbnN0YW5jZXNbXFwnJyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmlkKSArICdcXCddJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgLyogZW5kIHB1YmxpYyAqL1xyXG4gICAgLyogZW5kIGNvbW1lbnRzIHBsdWdpbiBjbGFzcyAqL1xyXG5cclxuXHJcblxyXG4gICAgLyogcGx1Z2luIGV4dGVuc2lvbiAqL1xyXG4gICAgX3BpLmNvbW1lbnRzID1cclxuICAgIHtcclxuICAgICAgICBzaG93Q29tbWVudHNVSTogZnVuY3Rpb24gKGMsIHAsIGkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjWydjb21tZW50c1NlcnZlciddICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBFbmdpbmVTZXJ2ZXIgPSBjWydjb21tZW50c1NlcnZlciddXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUuc2V0RGVmYXVsdFRlbXBsYXRlcygpO1xyXG5cclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUubGFuZyA9IHAubGFuZztcclxuICAgICAgICAgICAgcGx1Z2luU2NvcGUuY3JlYXRlSW5zdGFuY2UoYywgcCwgaSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnN0YW5jZXM6IHBsdWdpblNjb3BlLmluc3RhbmNlcyxcclxuICAgICAgICB2ZXJzaW9uOiAnMScsXHJcbiAgICAgICAgaW1nT25Mb2FkOiBmdW5jdGlvbiAoZWxJbWcsIHNpemUpIHtcclxuICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLnNjYWxlSW1hZ2UoZWxJbWcsIHNpemUsIHRydWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGVsSW1nLnBhcmVudE5vZGUuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBlbmQgcGx1Z2luIGV4dGVuc2lvbiAqL1xyXG5cclxuXHJcbn0pKGdpZ3lhLmNvbW1lbnRzKTsiXSwic291cmNlUm9vdCI6IiJ9