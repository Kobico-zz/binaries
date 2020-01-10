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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.socialize.plugins.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.socialize.plugins.js":
/*!****************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="GSJSSDK.js" />
if (typeof window.gigya == 'undefined') { window.gigya = new Object(); }
//if (typeof gigya.global == 'undefined') { gigya.global = {} }
if (typeof window.gigya.services == 'undefined') { window.gigya.services = {} }
if (typeof window.gigya.services.socialize == 'undefined') { window.gigya.services.socialize = {} }

//gigya.pluginUtils = gigya.pluginUtils == 'undefined' ? {} : gigya.pluginUtils;
//gigya.pluginUtils module
//gigya.pluginUtils.animation = {
//slideDown: function (el) {
//    var bp = gigya.global.getClassBordersAndPaddings(el.className);
//    var h = el.offsetHeight - bp.h;
//    var originalTransitionProperty = el.style.transitionProperty;
//    el.style.maxHeight = '1px';
//    el.style.transitionProperty = el.style.webkitTransitionProperty = 'max-height';
//    window.setTimeout(function () {
//        el.style.maxHeight = h + 'px';
//        el.style.transitionProperty = el.style.webkitTransitionProperty = originalTransitionProperty;
//    }, 100);
//    var fnOnTransitionEnd = function () {
//        el.style.maxHeight = '999px';
//        gigya.utils.DOM.removeEventListener(el, 'transitionend', fnOnTransitionEnd);
//        gigya.utils.DOM.removeEventListener(el, 'webkitTransitionEnd', fnOnTransitionEnd);
//    }
//    gigya.utils.DOM.addEventListener(el, 'transitionend', fnOnTransitionEnd);
//    gigya.utils.DOM.addEventListener(el, 'webkitTransitionEnd', fnOnTransitionEnd);
//    window.setTimeout(fnOnTransitionEnd, 500);
//}
//fadeIn: function (el, opacity) {
//    if (typeof opacity === 'undefined')
//        opacity = 1;

//    el.style.opacity = '0';
//    window.setTimeout(function () {
//        el.style.opacity = opacity + '';
//    }, 10);
//}
//};
//validation: {
//    isEmailValid: function (email) {
//        return gigya.pluginUtils.validation.isEmailListValid(email);
//    },
//    isEmailListValid: function (emails) {
//        var _email = "((?=(.{1,64}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,})))";
//        var _nameAndEmail = '(("[^<]+<(' + _email + ')>")|(("[^"]*" *)?<(' + _email + ')>)|(' + _email + '))';
//        var _multipleEmails = '^( *)?(' + _nameAndEmail + ' *, *)*' + _nameAndEmail + '( *, *)?$';
//        var regex = new RegExp(_multipleEmails);

//        return regex.test(emails);
//    }
//},
//text: {
//    normalizeLinebreaks: function (t) {
//        if (!t || !t.replace) return t;
//        return t.replace(/\r/, '').replace(/\n/g, '\r\n');
//    }
//},

//gigya.pluginUtils.css = {
//    fixCss: function (css) {
//        if (gigya.localInfo.isIE7 || (gigya.localInfo.isIE && gigya.localInfo.quirksMode)) {
//            css = css.replace(/display:inline-block/g, 'display:inline-block;zoom:1;*display:inline');
//        }

//        return css
//            .replace(/gradient\((.*?),(.*?)\)/g,
//                'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");' +
//                'background: linear-gradient(top,  $1,  $2);' +
//                'background: -ms-linear-gradient(top left, $1, $2);' +
//                'background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));' +
//                'background: -moz-linear-gradient(top,  $1,  $2)');
//    }
//};

//gigya.pluginUtils.DOM = {
//setTextboxSubmitButton: function(elTextbox, elButton) {
//    var fnOnPress = function(e) {
//        var charCode;
//        if (e && e.which) {
//            e = e;
//            charCode = e.which;
//        } else {
//            e = event;
//            charCode = e.keyCode;
//        }
//        if (charCode == 13) {
//            elButton.click();
//        }
//    };

//    gigya.utils.DOM.addEventListener(elTextbox, 'keyup', fnOnPress);
//    gigya.utils.DOM.addEventListener(elButton, 'keyup', fnOnPress);
//},
//getRelativePosition: function (position, size, direction, margin, flip) {
//    var relativePosition = { top: 0, left: 0, bottom: 0, right: 0 };

//    if (direction === 'bottom') {
//        relativePosition.top = position.bottom + margin;
//        relativePosition.left = (flip ? position.right - size.w : position.left);
//    }
//    else if (direction === 'top') {
//        relativePosition.top = position.top - size.h - margin;
//        relativePosition.left = (flip ? position.right - size.w : position.left);
//    }
//    else if (direction === 'left') {
//        relativePosition.top = (flip ? position.bottom - size.h : position.top);
//        relativePosition.left = position.left - size.w - margin;
//    }
//    else {
//        relativePosition.top = (flip ? position.bottom - size.h : position.top);
//        relativePosition.left = position.right + margin;
//    }

//    relativePosition.bottom = relativePosition.top + size.h;
//    relativePosition.right = relativePosition.left + size.w;

//    return relativePosition;
//},
//placePopoverNearElement: function (elTarget, container, direction, margin, flip, adjustDirection) {
//    var targetPosition = gigya.utils.DOM.getElementPosition(elTarget);
//    size = { w: container.offsetWidth, h: container.offsetHeight };
//    var position = this.getRelativePosition(targetPosition, size, direction, margin, flip);

//    if (adjustDirection && !gigya.utils.viewport.isRectFullyVisible(position)) {
//        var opposite = {
//            bottom: 'top', left: 'right', right: 'left', top: 'bottom'
//        }

//        var newPosition = this.getRelativePosition(targetPosition, size, opposite[direction], margin);
//        if (gigya.utils.viewport.isRectHorizontallyVisible(newPosition))
//            position = newPosition;
//    }

//    if (!gigya.utils.viewport.isRectHorizontallyVisible(position)) {
//        var newPosition = this.getRelativePosition(targetPosition, size, direction, margin, !flip);
//        if (gigya.utils.viewport.isRectHorizontallyVisible(newPosition))
//            position = newPosition;
//    }

//    container.style.left = '' + position.left + 'px';
//    container.style.top = '' + position.top + 'px';
//    //container.style.minWidth = elPopover.offsetWidth + 'px';
//},
//addPopoverNearElement: function (elTarget, elPopover, direction, margin, flip, adjustDirection, animation, fnWhenRemoved, removeOnClickExlcludedElements, removeOnClickEvent) {
//    if (!elTarget || !elPopover) return;
//    if (!direction) direction = 'bottom';
//    if (!margin) margin = 0;
//    if (typeof adjustDirection === 'undefined') adjustDirection = true;
            
//    var container = document.createElement('div');
//    container.appendChild(elPopover);
//    container.style.position = 'absolute';
//    container.style.zIndex = (gigya.utils.DOM.getNextZIndex()).toString();
//    container.style.left = '-1000px'; // Draw outside of screen to get the size
//    document.body.appendChild(container);
//    this.placePopoverNearElement(elTarget, container, direction, margin, flip, adjustDirection);
            
//    gigya.pluginUtils.DOM.removeElementOnDocClick(container, fnWhenRemoved, removeOnClickExlcludedElements,
//        removeOnClickEvent ? removeOnClickEvent : 'click');

//    if (animation && typeof gigya.pluginUtils.animation[animation] === 'function')
//        gigya.pluginUtils.animation[animation](elPopover);

//    return container;
//},
//removeElementOnDocClick: function (el, fnCallback, excludedElements, event) {
//    if (!el) return;
            
//    var fnRemove = function (e) {
//        var wasOpen = el && el.parentNode;
//        if (wasOpen) el.parentNode.removeChild(el);
//        if (fnCallback) fnCallback(e, wasOpen);
//    }

//    var arAllExcluded = [el];
//    if (excludedElements)
//        arAllExcluded = arAllExcluded.concat(excludedElements);

//    this.performOnDocClickOrEscape(fnRemove, arAllExcluded, event);
//},
//hideElementOnDocClick: function (el, fnCallback, excludedElements) {
//    if (!el) return;

//    var fnHide = function () {
//        el.style.display = 'none';
//        if (fnCallback) fnCallback();
//    }

//    var arAllExcluded = [el];
//    if (excludedElements)
//        arAllExcluded.concat(excludedElements);

//    this.performOnDocClickOrEscape(fnHide, arAllExcluded);
//},
//performOnDocClick: function (fnCallback, excludedElements, event) {
//    if (!event) event = 'mousedown';

//    var fnOnDocClick = function (e) {
//        var target = e.target || e.srcElement;
//        var clickInDiv = false;
//        while (target && target.parentNode) {
//            if (excludedElements && excludedElements.indexOf(target) != -1) {
//                clickInDiv = true;
//                break;
//            }
//            target = target.parentNode;
//        }
//        if (!clickInDiv) {
//            gigya.utils.DOM.removeEventListener(document, event, fnOnDocClick);
//            if (fnCallback) fnCallback(e);
//        }
//    }

//    gigya.utils.DOM.addEventListener(document, event, fnOnDocClick);
//}
//};

//gigya.pluginUtils.layout = {
//measureText: function (text, oStyle, maxW) {
//    if (isNaN(maxW) || maxW < 0) maxW = 0;
//    var ruler = document.getElementById('gigya_ruler');
//    var rulerText = document.getElementById('gigya_ruler_text');
//    if (ruler == null) {
//        ruler = document.createElement('div');
//        rulerText = document.createElement('span');

//        ruler.id = 'gigya_ruler';
//        rulerText.id = 'gigya_ruler_text';
//        ruler.style.visibility = 'hidden';
//        ruler.style.position = 'absolute';
//        ruler.style.margin = '0px';
//        ruler.style.padding = '0px';
//        ruler.appendChild(rulerText);
//        gigya.utils.DOM.appendToBody(ruler);
//    }
//    if (oStyle) {
//        ruler.style.lineHeight = oStyle.size + 'px';
//        ruler.style.fontFamily = oStyle.font;
//        ruler.style.fontSize = oStyle.size + 'px';
//        ruler.style.fontWeight = (('' + oStyle.bold).toLowerCase() == 'true') ? 'bold' : '';
//    }
//    if (maxW) {
//        ruler.style.whiteSpace = '';
//        ruler.style.width = '' + maxW + 'px';
//    } else {
//        ruler.style.whiteSpace = 'nowrap';
//        ruler.style.width = 'auto';
//    }
//    ruler.style.overflow = 'hidden';
//    ruler.style.display = '';
//    rulerText.innerHTML = text;
//    var w = rulerText.offsetWidth;
//    var h = rulerText.offsetHeight;
//    if (w == 0 || h == 0) {
//        w = ruler.offsetWidth;
//        h = ruler.offsetHeight;
//    }
//    ruler.style.display = 'none';
//    return { w: w, h: h };
//}
//};
//domain: {
//    isInDomain: function (domain) {
//        if (!domain) return;
//        var regexString = '^' + domain.replace(/\./g, '\\.').replace(/\*\\./g, '([a-zA-Z0-9]+\\.)*') + '$';
//        var regex = new RegExp(regexString);
//        return (regex.test(document.domain));
//    }
//}
//}

//gigya.pluginUtils.lang module
//gigya.pluginUtils.lang = {
//    // Get localized text from i18n injection
//	getLocalizedText: function (plugin, textKey, lang, replaceStr, withStr) {
//	    if (lang == 'te-st') return 'TEST_' + textKey.substring(0, 10);
//	    if (!lang) lang = 'en';

//	    var t = (gigya.i18n[plugin][lang] ? gigya.i18n[plugin][lang][textKey] : gigya.i18n[plugin]['en'][textKey]);
//	    if (t && replaceStr) t = t.replace(replaceStr, withStr);
//	    return t;
//	}
//}

//gigya.utils.mouse.getPosition = function () {
//	var posx = 0;
//	var posy = 0;
//	if (document.body) {
//		var e = this._mouseEventObject;
//		if (!e) e = { clientX: 0, clientY: 0 };
//		if (e.pageX || e.pageY) {
//			posx = e.pageX;
//			posy = e.pageY;
//		}
//		else if (e.clientX || e.clientY) {
//			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//		}
//		return { x: posx, y: posy }
//	}
//}

//gigya.socialize._parseRID = function (rid) {
//    var ridp = rid.split('@');
//    var swf = document.getElementById(ridp[2] + '_' + ridp[1]);
//    var containerID = ridp[2];
//    var container;

//    if (null == (container = gigya.utils.DOM._pseudoContainers[containerID])) {
//        container = document.getElementById(ridp[2]);
//    }

//    var Reqs = null;
//    if (container != null) Reqs = container.Reqs;
//    var req = null;
//    if (Reqs != null) req = Reqs[parseInt(ridp[0])];

//    return { rid: rid, container: container, Reqs: Reqs, req: req, swf: swf };
//},


//gigya.socialize._closeComponent = function (rid, dispatchCloseEvent) {
//    var oRID = gigya.socialize._parseRID(rid);
//    var req = oRID.req;
//    if (gigya.socialize.GrayOut) gigya.socialize.GrayOut(false);
//    var ifr = document.getElementById('gigya_ifr_' + req.container.id)
//    if (ifr != null) ifr.style.display = 'none';
	
//    if (dispatchCloseEvent) {
//        gigya.events.dispatchForWidget({ eventName: 'close' }, req.p);
//    }
//    req.container.style.display = 'none';
//}
	
//gigya.services.socialize._createJSPopup = function (rid, resolver, captionText, noCaption) {
//    var oRID = gigya.services.socialize._parseRID(rid);
	
//    var req = oRID.req;
//    var params = req.p;
//    var conf = req.c;
//    if (gigya.utils.validation.isExplicitFalse(params['showCaption'])) noCaption = true;
	
//    var GS = gigya.services.socialize;
//    var container = document.getElementById(params['containerID']);
//    req.container = container;
	
//    var oBgStyle = resolver.Resolve('+/config/body/background');
//    var oCaptionStyle = resolver.Resolve('+/config/body/captions');
	
//    var s = '<table style="' + GS.getStyleString(oBgStyle) + ';empty-cells:show;" cellpadding="0" cellspacing="0" >';
//    if (!noCaption) {
//        s += '<tr style="' + GS.getStyleString(oCaptionStyle) + '"><td><table style="width:100%" width="100%" cellpadding="0" cellspacing="0"><tr id="' + params['containerID'] + '_caption"><td style="vertical-align:middle"><div style="' + GS.getStyleString(oCaptionStyle) + ';padding:7px">' + captionText + '</div></td><td style="vertical-align:middle">';
//        s += '<div align="right" style="padding-right: 7px; cursor: pointer;' + GS.getStyleString(oCaptionStyle) + '"><img onclick="gigya.services.socialize._closeComponent(\'' + rid + '\', true);"  src="' + gigya._.getCdnResource('/gs/i/HTMLLogin/closeIcon.gif') + '" alt="" /></div></td></tr></table></td></tr><tr><td colspan="2">';
//    } else {
//        s += '<tr><td>';
//    }
//    s += '<div id="' + params['containerID'] + '_container"></div></td></tr></table>';
//    container.innerHTML = s;
//    var p = {};
//    var c = {};
//    for (var param in params) {
//        p[param] = params[param];
//    }

//    for (param in conf) {
//        c[param] = conf[param];
//    }
	
//    var caption = document.getElementById(p['containerID'] + '_caption');

//    p['height'] = p['height'] - (oBgStyle['frame-thickness'] * 2);
//    if (!noCaption) p['height'] -= caption.offsetHeight;
//    p['width'] = p['width'] - (oBgStyle['frame-thickness'] * 2);
	
//    gigya.utils.DOM._popupContainers[p['containerID']] = container
//    p['containerID'] = p['containerID'] + '_container';
//    return { c: c, p: p }
//}
	
//gigya.services.socialize._createJSPopup2 = function (rid, resolver, borderSize, base, captionText, addBorder) {
//    var oRID = gigya.services.socialize._parseRID(rid);
	
//    var req = oRID.req;
//    var params = req.p;
//    var conf = req.c;

//    var GS = gigya.services.socialize;
//    var container = document.getElementById(params['containerID']);
//    req.container = container;

//    var oCaptionStyle = resolver.Resolve('+/config/body/captions');

//    if (!borderSize) borderSize = 10;
//    if (!base) base = gigya._.getCdnResource('/gs/i/Dialog/DialogBg_');
//    var imgStyle = 'width:' + borderSize + 'px;height:' + borderSize + 'px';

//    var borderString;
//    if (addBorder) {
//        borderString = '1px solid #555555';
//    }

//    var s = '<table style="font-size:1px;padding:0px;margin:0px;vertical-align:middle;font-size:1px;line-height:1px;empty-cells:show;" cellpadding="0" cellspacing="0" >';
//    s += '<tr><td height="' + borderSize + '" style="font-size:1px"><div style="height:' + borderSize + 'px"><img src="' + base + 'TopLeft.png" style="' + imgStyle + '" alt="" /></div></td><td height="' + borderSize + '" style="background-image:url(\'' + base + 'filler.png\');bakground-repeat:repeat"></td><td height="' + borderSize + '" style="font-size:1px;"><div style="height:' + borderSize + 'px"><img style="' + imgStyle + '" src="' + base + 'TopRight.png" alt="" /></div></td></tr>';
//    if (captionText) {
//        s += '<tr><td style="background-image:url(\'' + base + 'filler.png\');background-repeat:repeat"></td><td><table width="100%" cellspacing="0" cellpadding="0" style="border-top:' + borderString + ';border-left:' + borderString + ';border-right:' + borderString + ';width:100%;background-color:#FFFFFF"><tr><td style="padding-top:10px;padding-left:10px;' + GS.getStyleString(oCaptionStyle) + '">' + captionText + '</td><td align="right" valign="top" style="' + GS.getStyleString(oCaptionStyle) + '"><div style="padding-right:5px;padding-top:5px;text-align:right;"><img style="cursor:pointer" onclick="gigya.services.socialize._closeComponent(\'' + rid + '\', true);" src="' + base + 'close.png" alt="" /></div></td></tr></table></td><td style="background-image:url(\'' + base + 'filler.png\');background-repeat:repeat"></td></tr>';
//    }
//    s += '<tr><td style="background-image:url(\'' + base + 'filler.png\');background-repeat:repeat"></td><td><div style="border-bottom:' + borderString + ';border-left:' + borderString + ';border-right:' + borderString + ';background-color:#FFFFFF" id="' + params['containerID'] + '_container"></div></td><td style="background-image:url(\'' + base + 'filler.png\');background-repeat:repeat"></td></tr>';
//    s += '<tr><td height="' + borderSize + '" style="font-size:1px;"><div style="height:' + borderSize + 'px"><img style="' + imgStyle + '" src="' + base + 'BottomLeft.png" alt="" /></div></td><td height="' + borderSize + '" style="background-image:url(\'' + base + 'filler.png\');bakground-repeat:repeat"></td><td height="' + borderSize + '" style="font-size:1px;"><div style="height:' + borderSize + 'px"><img style="' + imgStyle + '" src="' + base + 'BottomRight.png" alt="" /></div></td></tr></table>';
//    container.innerHTML = s;
//    var p = {};
//    var c = {};
//    for (var param in params) {
//        p[param] = params[param];
//    }

//    for (param in conf) {
//        c[param] = conf[param];
//    }

//    gigya.utils.DOM._popupContainers[p['containerID']] = container
//    p['containerID'] = p['containerID'] + '_container';


//    p['height'] = p['height'] - borderSize * 2;
//    if (captionText) {
//        if (captionText.replace(/ /g, '') == '') {
//            p['height'] -= 10;
//        } else {
//            p['height'] -= gigya.pluginUtils.layout.measureText(captionText, oCaptionStyle).h + 10;
//        }
//    }
//    p['width'] = p['width'] - borderSize * 2;

//    return { c: c, p: p }
//}


//gigya.global.wbr = function (s, n) {
//	s = s.replace(/\n/g, '\n ');
//	var arWords = s.split(' ');
//	var chHyphen = '&#173;';
//	for (var i = 0; i < arWords.length; i++) {
//		if (arWords[i].length > n) {
//			var chHyphenCurrent = chHyphen;
//			var arWord = arWords[i].split('');
//			var stop = false;
//			var stopEndChar;
//			var currentN = -1;
//			for (var u = 0; u < arWord.length; u += 1) {
//				if (!stop) currentN++;
//				if (currentN == n) {
//					arWord.splice(u, 0, chHyphenCurrent);
//					currentN = -1;
//				}
//				if (arWord[u] == '&') {
//				    stop = true;
//				    stopEndChar = ';';
//				} else if (arWord[u] == '<') {
//				    stop = true;
//				    stopEndChar = '>';
//				}
//				if (stop && arWord[u] == stopEndChar) stop = false;
//			}
//			arWords[i] = arWord.join('');
//		}
//	}
//	return arWords.join(' ').replace(/\n /g, '\n');
//}
//gigya.global.scrollToElement = function (el) {
//    if (el) {
//        var pos = gigya.global._GetElementPos(el);
//        window.scrollTo(pos.left, pos.top);
//    }
//}

//gigya.global.setPlaceholder = function (textbox, placeholder, className) {
//    if (!textbox) return;

//	var onblur = function () {
//	    if (this.value == '') {
//	        if (className) {
//	            gigya.utils.DOM.addClassToElement(textbox, className);
//	        } else {
//	            textbox.style.color = '#585858';
//	        }
//	        this.value = placeholder
//	        this.placeholderCleared = false;
//	    }
//	};

//	var onfocus = function () {
//	    if (!this.placeholderCleared) {
//	        if (className) {
//	            gigya.utils.DOM.removeClassFromElement(textbox, className);
//	        } else {
//	            textbox.style.color = '';
//	        }
//	        this.value = '';
//	        this.placeholderCleared = true;
//	        if (textbox.setSelectionRange) { //to fix a bug where sometimes the caret disappears while the textbox is focused.
//	            textbox.focus();
//	            textbox.setSelectionRange(0, 0);
//	        }
//	        else if (textbox.createTextRange) {
//	            var range = textbox.createTextRange();
//	            range.collapse(true);
//	            range.moveEnd('character', 0);
//	            range.moveStart('character', 0);
//	            range.select();
//	        }
//	    }
//	};

//	textbox.refreshPlaceholder = function () {
//	    if (textbox.value) {
//            if (className)
//                gigya.utils.DOM.removeClassFromElement(textbox, className);
//            else
//                textbox.style.color = '';

//            this.placeholderCleared = true;
//	    } else {
//            if (className)
//                gigya.utils.DOM.addClassToElement(textbox, className);
//            else
//                textbox.style.color = '#585858';

//            textbox.value = placeholder;
//	        this.placeholderCleared = false;
//	    }
//	};

//	gigya.utils.DOM.addEventListener(textbox, 'blur', onblur);
//	gigya.utils.DOM.addEventListener(textbox, 'focus', onfocus);
//	gigya.utils.DOM.addEventListener(textbox, 'change', onblur);
//    textbox.refreshPlaceholder();
//}

//gigya.global.scaleImageToContainer = function (img, dontCenter, fnOnImgLoad) {
//	if (!dontCenter) {
//		img.parentNode.style.textAlign = 'left';
//		img.parentNode.style.verticalAlign = 'top';
//	}
//	var style = function (name) {
//	    var node = img.parentNode;
//	    var dim = gigya.global.getStyle(node, name);
//	    while (dim == 'auto') {
//	        node = node.parentNode;
//	        dim = gigya.global.getStyle(node, name);
//	    }
//	    var n = parseInt(dim);
//		if (isNaN(n)) n = 0;
//		return n;
//	}
//	//var size = Math.min(img.parentNode.offsetWidth, img.parentNode.offsetHeight);
//	var size = Math.min(style('width'), style('height'));
//	if (gigya.localInfo.quirksMode) {
//		var bordersAndPaddings = gigya.global.getBordersAndPaddings(img.parentNode);
//		var w = style('width') - bordersAndPaddings.w;
//		var h = style('height') - bordersAndPaddings.h;
//		size = Math.min(w, h);
//	}
//	gigya.global.scaleImage(img, size, dontCenter, fnOnImgLoad);
//}
	
//gigya.global.showLoader = function (container, className, h) {
//	if (container) {
//		if (!className) className = '';
//		if (!h) h = parseInt(gigya.global.getStyle(container, 'height'));
//		var paddingTop = (h - 32) / 2;
//		container.innerHTML = '<div class="' + className + '" style="height:' + h + 'px;background-image:url(\'' + gigya._.getCdnResource('/gs/i/gm/loader.gif')+ '\'); background-repeat:no-repeat;background-position:center center"></div>';
//	}
//}
	
//gigya.global.getPhotoURL = function (url, defaultURL) {
//	if (defaultURL && (!url || url == '')) {
//		return gigya.global.getPhotoURL(defaultURL);
//	}
//	if (url && url!='' && gigya.thisScript.protocol == 'https' && url.indexOf('http:') == 0) {
//	    return gigya._.getCdnResource('/proxy/photos.ashx?u=' + gigya.utils.URL.URLEncode(url));
//	} else {
//		return url;
//	}
//}
	
//gigya.global.scaleImage = function (img, size, dontCenter, fnOnImgLoad) {
//	var imgObj = img;
//	if (!img.width || !img.height) {
//		var imgObj = new Image();
//		imgObj.src = img.src;
//	}
//	var fnOnLoad = function () {
//		if (imgObj.width == 0) {
//			window.setTimeout(fnOnLoad, 100)
//		} else {
//			if (imgObj.width > imgObj.height) {
//				img.style.width = size + 'px';
//			} else {
//				img.style.height = size + 'px';
//			}
	
//			img.style.display = '';
//			if (fnOnImgLoad) fnOnImgLoad(img);
//			if (!dontCenter) {
//				img.style.marginTop = (size - img.offsetHeight) / 2 + 'px'
//				img.style.marginLeft = (size - img.offsetWidth) / 2 + 'px'
//			}
//		}
//	}
//	if (imgObj.width > 0) {
//		fnOnLoad();
//	} else {
//		img.style.display = 'none';
//		imgObj.onload = function () { window.setTimeout(fnOnLoad, 50) };
//	}
//}

//gigya.global.createGMBalloon = function (body, captionText, w, h, nubY, nubPosition, hideClose, id, dontHideOnClick, balloonClass) {
//    balloonClass = balloonClass ? 'gig-balloon ' + balloonClass : 'gig-balloon';
//	gigya.global.removeGMBalloon();
//	var now = (new Date()).getTime();
//	var balloonID = 'gig_gmBalloon_' + now;
//	if (id) balloonID = id;
//	var frameID = balloonID + '_frame';
//	var balloonHTML = gigya.global.getBalloonHTML(body, captionText, w, h, nubY, nubPosition, hideClose, 'gigya.global.removeGMBalloon()', frameID);
//	var div = document.createElement('div');
//	div.className = balloonClass;
//	div.style.position = 'absolute';
//	div.style.zIndex = gigya.utils.DOM.getNextZIndex();
//	div.innerHTML = balloonHTML;
//	div.id = balloonID;
	
//	gigya.global.fadeIn(div);
//	gigya.utils.DOM.appendToBody(div);
//	gigya.global.divGMBalloon = div;
	
//	if (!dontHideOnClick) {
//		window.setTimeout(function () {
//			if (document.attachEvent) {
//				document.attachEvent("onclick", gigya.global.removeGMBalloon)
//			} else if (document.addEventListener) {
//				document.addEventListener("click", gigya.global.removeGMBalloon, false)
//			}
//		}, 50);
//	}
//	return div;
//}
//gigya.global.fadeIn = function (el) {
//	if (el.interval) {
//		clearInterval(el.interval);
//	}
//	el.style.opacity = '0';
//	el.interval = setInterval(function () {
//		var op = parseFloat(el.style.opacity);
//		if (op >= 1) clearInterval(el.interval);
//		el.style.opacity = op + 0.1;
//	}, 10);
//}
	
//gigya.global.getBordersAndPaddings = function (el) {
//	var style = function (name) {
//		var n = parseInt(gigya.global.getStyle(el, name));
//		if (isNaN(n)) n = 0;
//		return n;
//	}
//	return {
//		w: style('border-left-width') + style('border-right-width') + style('padding-right') + style('padding-left'),
//		h: style('border-top-width') + style('border-bottom-width') + style('padding-top') + style('padding-bottom')
//	}
//}

//gigya.global.getClassInnerSize = function (className, w, h) {
//	var el = document.createElement('div');
//	el.className = className;
//	gigya.utils.DOM.appendToBody(el);
//	var bordersAndPaddings = gigya.global.getBordersAndPaddings(el);
//	w -= bordersAndPaddings.w;
//	h -= bordersAndPaddings.h;
//	el.parentNode.removeChild(el);
//	return { w: w, h: h }
//}

//gigya.global.applyEllipsis = function (text, maxRealChars) {
//	var pfx = '';
//	var tagstack = [];
//	var reTag = /\<(\/)?([^ \/>]+)[ ]?[^>]*(\/)?\>/i;
//	var realChars = 0;

//	for (var i = 0; ((i < text.length) && ((realChars < maxRealChars) || (maxRealChars == 0))); ) {
//		var ch = text.substr(i, 1);
//		if (ch == '<') {
//			var idxCloseTag = text.indexOf('>', i);
//			var tag = text.substring(i, idxCloseTag + 1);
//			reTag.lastIndex = 0;
//			var matches = reTag.exec(tag); // 1=/? 2=tagname 3=trailing / 0=all
//			/*if (matches == null) {
//			//alert(tag + '\n Is MALFORMED');
//			}*/
//			var tagname = matches[2].toLowerCase();
//			if (matches[1] == '/') { //closing tag
//				if ((tagstack.length > 0) && (tagstack[tagstack.length - 1].tagname == tagname)) {
//					tagstack.pop();
//				}
//			}
//			else { //new tag
//				if (matches[3] == '/') { //nothing to do (nothing to push onto the stack), rest is common
//				}
//				else {
//					var clAll = '</' + matches[2] + '>'
//					if (tagstack.length > 0) clAll += tagstack[tagstack.length - 1].cl;
//					tagstack.push({ tagname: matches[2], cl: clAll });

//				}
//			}
//			pfx += matches[0];
//			i += matches[0].length - 1;

//		}
//		else if (ch == '&') {
//			var idxCloseEntity = text.indexOf(';', i);
//			if (idxCloseEntity - i > 8) {
//				pfx += '&'
//			}
//			else {
//				pfx += text.substring(i, idxCloseEntity + 1);
//				i = idxCloseEntity;
//			}
//			realChars++;
//		}
//		else {
//			pfx += ch;
//			realChars++;
//		}
//		i++;
//	}
//	if (realChars < maxRealChars) {
//		return text;
//	}
//	else {
//		return pfx + '&#133;' + ((tagstack.length > 0) ? (tagstack[tagstack.length - 1].cl) : '');
//	}
//}

//gigya.global.getClassBordersAndPaddings = function (className) {
//	var el = document.createElement('div');
//	el.className = className;
//	gigya.utils.DOM.appendToBody(el);
//	var bordersAndPaddings = gigya.global.getBordersAndPaddings(el);
//	el.parentNode.removeChild(el);
//	return bordersAndPaddings;
//}

//gigya.global.getBalloonHTML = function (body, captionText, w, h, nubY, nubPosition, hideClose, sOnClose, frameID) {
//    var direction;
//    var nubW = 13;
//    var nubH = 25;
//    if (!gigya.global.addedBalloonCSS) {
//        gigya.global.addCSS([
//			'.gig-balloons *, div.gig-balloons, .gig-balloons span, .gig-balloons a:hover, .gig-balloons a:visited, .gig-balloons a:link, .gig-balloons a:active{',
//				'border:none; line-height:normal;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;',
//				'font-family:arial;font-size:10px;color:#797979;background:none;text-align:left}',
//			'div.gig-balloon-frame {',
//				'zoom:1;padding:15px 10px 10px 10px; border:1px solid #b4b4b4; min-height:80px; background-color:#FFFFFF; z-index:' + (gigya.utils.DOM.getNextZIndex()) + ';',
//				'box-shadow:0 0 5px RGBA(0,0,0,0.6);-webkit-box-shadow:0 0 5px RGBA(0,0,0,0.6);-moz-box-shadow:0 0 5px RGBA(0,0,0,0.6);}',
//            'div.gig-balloon-nub {left:+1px; position:relative;background-image:url("' + gigya._.getCdnResource('/gs/i/gm/nub.png') + '");width:' + nubW + 'px;height:' + nubH + 'px; z-index:' + (gigya.utils.DOM.getNextZIndex()) + ' }',
//			'div.gig-balloon-nub-right { left:-1px; position:relative;background-image:url("' + gigya._.getCdnResource('/gs/i/gm/nub_right.png') + '");width:' + nubW + 'px;height:' + nubH + 'px; z-index:' + (gigya.utils.DOM.getNextZIndex()) + ' }',
//            'div.gig-balloon-nub-up { top:+1px; position:relative;background-image:url("' + gigya._.getCdnResource('/gs/i/gm/nub_up.png') + '");width:' + nubH + 'px;height:' + nubW + 'px; z-index:' + (gigya.utils.DOM.getNextZIndex()) + ' }',
//            'div.gig-balloon-nub-down { top:-1px; position:relative;background-image:url("' + gigya._.getCdnResource('/gs/i/gm/nub_down.png') + '");width:' + nubH + 'px;height:' + nubW + 'px; z-index:' + (gigya.utils.DOM.getNextZIndex()) + ' }',
//			'span.gig-balloon-closeImage { cursor:pointer; float:right;background-image:url("' + gigya._.getCdnResource('/gs/i/gm/CloseButton.png') + '"); width:14px;height:14px; margin:-7px -2px 0 0  }',
//			'div.gig-balloon-caption {font-family:arial; font-size: 12px; font-weight:bold; color: #0b81c1; border-bottom: 1px solid #e8e8e8;padding-bottom:2px;}',
//			'span.gig-balloon-caption-text {float:left}'
//        ]);
//        if (gigya.localInfo.isIE && !(!gigya.localInfo.quirksMode && gigya.localInfo.isIE9)) {
//            gigya.global.addCSS([
//				'div.gig-balloon-frame {',
//					'-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color=\'#B4B4B4\');";',
//					'filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color=\'#B4B4B4\');}',
//				'}',
//				'div.gig-balloon-nub-right { left:-5px;}'
//            ]);
//        }
//        gigya.global.addedBalloonCSS = true;
//    }
//    var frameStyle = '';
//    if (gigya.localInfo.quirksMode) {
//        var bordersAndPaddings = gigya.global.getClassBordersAndPaddings('gig-balloon-frame');
//        if (w) w = w + bordersAndPaddings.w;
//        if (h) h = h + bordersAndPaddings.h;
//    }
//    if (w) frameStyle += 'width: ' + w + 'px;';
//    if (h) frameStyle += 'height: ' + h + 'px;';
//    var nubStyle = '';
//    if (nubY) {
//        if ((nubPosition === 'left') || (nubPosition === 'right'))
//            nubStyle += 'top: ' + nubY + 'px;';
//        else // ((nubPosition === 'up') || (nubPosition === 'down'))
//            nubStyle += 'left: ' + nubY + 'px;';
//    }

//    var innerHTML = '';
//    if (captionText) {
//        innerHTML += '<div class="gig-balloon-caption"><span class="gig-balloon-caption-text" style="width:' + (w - 20) + 'px">' + captionText + '</span>';
//    } else {
//        innerHTML += '<div class="gig-balloon-caption" style="border-bottom:none">';
//    }
//    if (!hideClose && sOnClose) {
//        innerHTML += '<span class="gig-balloon-closeImage" onclick="' + sOnClose + '"></span>';
//    }
//    innerHTML += '<div style="clear:both;height:0;width:0;font-size:1px;"><!-- empty divs=100% height IE --></div></div><div class="gig-balloon-body">' + body + '</div>';
//    var s;
//    if (!nubY) {
//        s = '<div class="gig-balloon gig-balloon-frame" style="' + frameStyle + '">' + innerHTML + '</div>';
//    } else {
//        s = '<table cellpadding="0" cellspacing="0" class="gig-balloon"><tr>';
//        if (nubPosition === 'up') {
//            s += '<td style=""><div class="gig-balloon-nub-up" style="' + nubStyle + '"></div></td></tr><tr>';
//        }
//        if (nubPosition === 'left') { // check for other values
//            s += '<td style="vertical-align:top"><div class="gig-balloon-nub" style="' + nubStyle + '"></div></td>';
//        }
//        s += '<td style="vertical-align:top"><div id="' + frameID + '" class="gig-balloon-frame" style="' + frameStyle + '">' + innerHTML + '</div></td>';
//        if (nubPosition === 'right') {
//            s += '<td style="vertical-align:top"><div class="gig-balloon-nub-right" style="' + nubStyle + '"></div></td>';
//        }
//        if (nubPosition === 'down') {
//            s += '</tr><tr><td style="vertical-align:top"><div class="gig-balloon-nub-down" style="' + nubStyle + '"></div></td>';
//        }
//        s += '</tr></table>';
//        s += '<div style="clear:both;height:0;width:0;font-size:1px;"><!-- empty divs=100% height IE --></div>';
//    }
//    return s;
//}

//gigya.global.addIframeShim = function (el, parent) {
//	if (el.shim) return;
//	var shim = document.createElement('IFRAME');
//	shim.frameborder = "0";
//	shim.frameBorder = "0";
//	shim.allowtransparency = true;
//	shim.style.position = 'absolute';
//	shim.update = function (updateDimensions) {
//		if (shim && el) {
//		    if (parent) {
//				shim.style.left = el.offsetLeft + 'px';
//				shim.style.top = el.offsetTop + 'px';
//			} else {
//				var pos = gigya.global._GetElementPos(el);
//				shim.style.left = pos.left + 'px';
//				shim.style.top = pos.top + 'px';
//			}
//			if (updateDimensions) {
//				shim.style.width = el.offsetWidth + 'px';
//				shim.style.height = el.offsetHeight + 'px';
//			}
//		}
//	}
//	shim.update(true);
//	if (parent) {
//		shim.style.zIndex = gigya.utils.DOM.getNextZIndex();
//		el.style.zIndex = gigya.utils.DOM.getNextZIndex();
//		parent.appendChild(shim);
//	} else {
//		gigya.utils.DOM.appendToBody(shim);
//	}

//	el.shim = shim;
//}

//gigya.global.removeIframeShim = function (el) {
//	if (el && el.shim && el.shim.parentNode) {
//		el.shim.parentNode.removeChild(el.shim);
//		el.shim = null;
//	}
//}

//gigya.global.fillUserActionTemplate = function (userAction, o) {
//	for (var p in userAction) {
//		var field = userAction[p];
//		if (typeof field == 'string') {
//			userAction[p] = gigya.utils.templates.fill(userAction[p], o);
//		}
//		if (p == 'mediaItems') {
//			for (var i = 0; i < field.length; i++) {
//				if (field[i].src) {
//					field[i].src = gigya.utils.templates.fill(field[i].src, o);
//				}
//			}
//		}
//	}
//	return userAction;
//}

//gigya.global.preloadImages = function (arImages, fnCallback) {
//	var arImageObjects = [];
//	var loaded = 0;
//	var fncImgOnload = function () {
//		loaded++;
//		if (loaded == arImages.length) {
//			fnCallback();
//		}
//	}
//	for (var i = 0; i < arImages.length; i++) {
//		if (arImages[i] == null) {
//			fncImgOnload();
//		} else {
//			var img = new Image();
//			img.onload = fncImgOnload;
//			img.onerror = fncImgOnload;
//			img.src = arImages[i];
//			arImageObjects.push(img);
//		}
//	}
//}

//gigya.global.putGMBalloonNextTo = function (el, body, caption, w, h, hideClose, id, dontHideOnClick, preferredOrientation, balloonClass) {
//    balloonClass = balloonClass || '';
//    preferredOrientation = preferredOrientation || 'left';

//    if ((preferredOrientation === 'right') || (preferredOrientation === 'left'))
//        gigya.global.createGMBalloon(body, caption, w, h, 47, 'left', hideClose, id, dontHideOnClick, balloonClass);
//    else // ((preferredOrientation === 'up') || (preferredOrientation === 'down'))
//        gigya.global.createGMBalloon(body, caption, w, h, 10, 'down', hideClose, id, dontHideOnClick, balloonClass);

//    var offsetWidth = gigya.global.divGMBalloon.offsetWidth;
//    var offsetHeight = gigya.global.divGMBalloon.offsetHeight;
//    var pos = gigya.global._GetElementPos(el);
//    var left;
//    var top;

//    var dst = el.style;

//    var de = document.documentElement;
//    var db = document.body;

//    var clientHeight = de.clientHeight;
//    if (clientHeight == 0) clientHeight = db.clientHeight;
//    var clientWidth = de.clientWidth;
//    if (clientWidth == 0) clientWidth = db.clientWidth;

//    if (window.innerHeight) {
//        clientHeight = window.innerHeight;
//        clientWidth = window.innerWidth;
//    }

//    var scrl = gigya.utils.viewport.getScroll();
//    var vpt = scrl.top;
//    var vpl = scrl.left;
//    var bottomRightTop = vpt + clientHeight;
//    var bottomRightLeft = vpl + clientWidth;

//    var arrowDirection;
//    var arrowOffset;

//    if ((preferredOrientation === 'right') || (preferredOrientation === 'left')) {
//        arrowOffset = 47;

//        top = pos.top + (el.offsetHeight / 2) - 47 - 25 / 2;
//        if (top + offsetHeight > bottomRightTop) {
//            top = bottomRightTop - offsetHeight - 10;
//        }

//        var leftWithLeftOrientation = pos.left - offsetWidth - 5;
//        var leftWithRightOrientation = pos.left + el.offsetWidth + 5;

//        if (preferredOrientation === 'right') {
//            // assume there is always enough space on the right
//            left = leftWithRightOrientation;
//            arrowDirection = 'left';
//            balloonClass += ' gig-balloon-right';
//        } else { // left orientation
//            // check that there is enough space on the left - otherwise switch to right orientation
//            if (leftWithLeftOrientation > 10) {
//                left = leftWithLeftOrientation;
//                arrowDirection = 'right';
//                balloonClass += ' gig-balloon-left';
//            } else { // not enough space for left orientation
//                left = leftWithRightOrientation;
//                arrowDirection = 'left';
//                balloonClass += ' gig-balloon-right';
//            }
//        }
//    }

//    if ((preferredOrientation === 'up') || (preferredOrientation === 'down')) {
//        arrowOffset = 10;
//        left = pos.left;

//        var topWithUpOrientation = pos.top - offsetHeight - 10;
//        var topWithDownOrientation = pos.top + el.offsetHeight + 5;

//        if (preferredOrientation === 'down') {
//            // assume there is always enough space down
//            top = topWithDownOrientation;
//            arrowDirection = 'up';
//            balloonClass += ' gig-balloon-down';
//        } else { // up orientation
//            // check that there is enough space above - otherwise switch to down orientation
//            if (topWithUpOrientation < 5) {
//                top = topWithDownOrientation;
//                arrowDirection = 'up';
//                balloonClass += ' gig-balloon-down';
//            } else { // not enough space for up orientation
//                top = topWithUpOrientation;
//                arrowDirection = 'down';
//                balloonClass += ' gig-balloon-up';
//            }
//        }
//    }

//    gigya.global.createGMBalloon(body, caption, w, h, arrowOffset, arrowDirection, hideClose, id, dontHideOnClick, balloonClass);

//    if (left < 10) left = 10;
//    if (top < 10) top = 10;
//    gigya.global.divGMBalloon.style.left = left + 'px';
//    gigya.global.divGMBalloon.style.top = top + 'px';
//    if (gigya.localInfo.isIE) {
//        var frame = document.getElementById(gigya.global.divGMBalloon.id + '_frame');
//        if (frame) gigya.global.addIframeShim(frame);
//    }
//}

//gigya.global.removeGMBalloon = function (e) {
//	var a;
//	if (e) {
//		a = e.target;
//		if (!a) a = e.srcElement;
//		while (a != null && a.offsetParent && a.id.indexOf(gigya.global.divGMBalloon.id) == -1) {
//			a = a.offsetParent;
//		}
//	}
//	if (!a || a.id.indexOf(gigya.global.divGMBalloon.id) == -1) { //to make sure this wasn't triggered by click inside
//		try {
//			gigya.global.removeIframeShim(document.getElementById(gigya.global.divGMBalloon.id + '_frame'));
//			gigya.global.divGMBalloon.parentNode.removeChild(gigya.global.divGMBalloon);
//			if (document.detachEvent) {
//				document.detachEvent("onclick", gigya.global.removeGMBalloon)
//			} else if (document.removeEventListener) {
//				document.removeEventListener("click", gigya.global.removeGMBalloon, false)
//			}
//		} catch (ex) { }
//	}
//}

//gigya.global._GetElementPos=function(obj) {
//	var pos=gigya.global.getPos(obj);
//	return {left:pos.x,top:pos.y};
//}

//gigya.global.getPos=function(el) {
//	var ua = navigator.userAgent.toLowerCase();
//	var isOpera = (ua.indexOf('opera') != -1);
//	var isIE = (ua.indexOf('msie') != -1 && !isOpera); // not opera spoof
//	if(el.parentNode === null || el.style.display == 'none') {
//		return false;
//	}      
//	var parent = null;
//	var pos = [];     
//	var box;     
//	if(el.getBoundingClientRect)    //IE
//	{         
//		box = el.getBoundingClientRect();
//		var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
//		var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
//		return {x:box.left + scrollLeft, y:box.top + scrollTop};
//	}else if(document.getBoxObjectFor)    // gecko    
//	{
//		box = document.getBoxObjectFor(el); 
//		var borderLeft = (el.style.borderLeftWidth)?parseInt(el.style.borderLeftWidth):0; 
//		var borderTop = (el.style.borderTopWidth)?parseInt(el.style.borderTopWidth):0; 
//		pos = [box.x - borderLeft, box.y - borderTop];
//	} else    // safari & opera    
//	{
//		pos = [el.offsetLeft, el.offsetTop];  
//		parent = el.offsetParent;     
//		if (parent != el) { 
//			while (parent) {  
//				pos[0] += parent.offsetLeft; 
//				pos[1] += parent.offsetTop; 
//				parent = parent.offsetParent;
//			}  
//		}   
//		if (ua.indexOf('opera') != -1 || ( ua.indexOf('safari') != -1 && el.style.position == 'absolute' )) { 
//			pos[0] -= document.body.offsetLeft;
//			pos[1] -= document.body.offsetTop;         
//		}    
//	}              
//	if (el.parentNode) { 
//		parent = el.parentNode;
//	} else {
//		parent = null;
//	}
//	while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML') { // account for any scrolled ancestors
//		pos[0] -= parent.scrollLeft;
//		pos[1] -= parent.scrollTop;
//		if (parent.parentNode) {
//			parent = parent.parentNode;
//		} else {
//			parent = null;
//		}
//	}
//	return {x:pos[0], y:pos[1]};
//}

//gigya.global.getStyle=function(obj, styleProp)
//{
//  if (obj.currentStyle)
//	return obj.currentStyle[styleProp];
//  else if (window.getComputedStyle)
//	return document.defaultView.getComputedStyle(obj,null).getPropertyValue(styleProp);
//}

//gigya.services.socialize.getStyleString=function(oStyle, blnIsLink) {
//	var s='';
//	s+='line-height: normal;';
//	if (blnIsLink) s+='cursor:pointer;';
//	if (oStyle.underline) s+='text-decoration:underline;';
//	if (oStyle.font) s+='font-family:'+oStyle.font+';';
//	if (oStyle.size) s+='font-size:'+oStyle.size+'px;';
//	if (oStyle.color) s+='color:'+oStyle.color+';';
//	if (oStyle.bold) s+='font-weight:bold;';
//	if (oStyle['frame-thickness']) s+='border-style:solid; border-width:'+oStyle['frame-thickness']+'px;';
//	if (oStyle['frame-color']) s+='border-color:'+oStyle['frame-color']+';';
//	if (oStyle['background-color']) s+='background-color:'+oStyle['background-color']+';';
//	return s;
//}

//gigya.services.socialize.GrayOut=function(vis, opt, extra) {
//	  var options = opt || {};
//	  var zindex = options.zindex || 50;
//	  var opacity = options.opacity || 70;
//	  var opaque = (opacity / 100);
//	  var bgcolor = options.bgcolor || '#000000';
//	  var dark=document.getElementById('darkenScreenObject');
//	  var tbody = document.body;
//	  if (!dark) {
//		var isCompMode=(gigya.localInfo.isMobile || gigya.localInfo.isIE6 || document.compatMode=='BackCompat');
//		var scrollTop=document.documentElement.scrollTop;
//		if (scrollTop==0) scrollTop=document.body.scrollTop;	  
//		var tnode = document.createElement('div');
//			if (isCompMode) {
//				tnode.style.position='absolute';
//				tnode.style.top=''+scrollTop+'px';
//			} else {
//				tnode.style.position='fixed';
//				tnode.style.top='0px'; 
//			}
//			tnode.style.overflow='hidden';	
//			tnode.style.left='0px';
//			tnode.style.display='none';
//			tnode.id='darkenScreenObject';
//			tnode.innerHTML='&#160;';
//		tbody.appendChild(tnode);
//		dark=document.getElementById('darkenScreenObject');
//		if (!gigya.attachedFixGray) {
//			gigya.attachedFixGray = true;		
//			if (window.addEventListener) {                
//				window.addEventListener('resize',gigya.services.socialize._fixGraySize,false);
//			}
//			if (window.attachEvent) {                
//				window.attachEvent('onresize', gigya.services.socialize._fixGraySize);
//			}
//			if (isCompMode) {
//				if (window.addEventListener) {
//					window.addEventListener('scroll',gigya.services.socialize._fixGrayPosition,false);
//				}
//				if (window.attachEvent) {
//					window.attachEvent('onscroll', gigya.services.socialize._fixGrayPosition);
//				}
//			}
//		}
//	  }
//	  if (vis) {
//		var vph;
//		var vpw;
//		if (window.innerHeight) {
//			vph=window.innerHeight;
//			vpw=window.innerWidth;
//		}
//		if (typeof vph=='undefined') {
//			var de=document.documentElement;
//			vph=de.clientHeight;
//			vpw=de.clientWidth;
//		}
//		if (vpw==0) vpw=tbody.clientWidth;   
//		if (vph==0) vph=tbody.clientHeight;   
//		dark.style.opacity=opaque;
//		dark.style.MozOpacity=opaque;
//		dark.style.width= '' + vpw + 'px';
//		dark.style.height= '' + vph + 'px';		
//		dark.style.filter='alpha(opacity='+opacity+')';
//		dark.style.zIndex=zindex;
//		dark.style.backgroundColor=bgcolor;
//		dark.style.display='block';	
//	  } else {
//		 tbody.removeChild(dark);
//	  }    
//},

//gigya.services.socialize._fixGrayPosition=function(){
//	var dark=document.getElementById('darkenScreenObject');
//	if (dark) {
//		var de=document.documentElement;
//		var db=document.body;
//		var scrollTop=de.scrollTop;
//		if (scrollTop==0) scrollTop=db.scrollTop;
//		var scrollLeft=de.scrollLeft;
//		if (scrollLeft==0) scrollLeft=db.scrollLeft;        
//		var clientHeight=de.clientHeight;
//		if (clientHeight==0) clientHeight=db.clientHeight;    
//		var clientWidth=de.clientWidth;
//		if (clientWidth==0) clientWidth=db.clientWidth;    
//		if (gigya.localInfo.isIE6) clientWidth-=1;
//		dark.style.top=scrollTop;
//		dark.style.left=scrollLeft;
//	}
//},

//gigya.services.socialize._fixGraySize=function() {
//	var dark=document.getElementById('darkenScreenObject');
//	if (dark) {
//		var de=document.documentElement;
//		var db=document.body;
//		var clientHeight=de.clientHeight;
//		if (clientHeight==0) clientHeight=db.clientHeight;    
//		var clientWidth=de.clientWidth;
//		if (clientWidth==0) clientWidth=db.clientWidth;    
//		if (gigya.localInfo.isIE6) clientWidth-=1;

//		dark.style.width=''+clientWidth+'px';
//		dark.style.height=''+clientHeight+'px';  
//	}
//},

//gigya.utils.DOM.createTopLevelDiv=function(id) {
//	var ifrel;
//	ifrel = document.createElement('IFRAME');
//	ifrel.id='gigya_ifr_'+id;
//	ifrel.frameborder="0";
//	ifrel.frameBorder="0";
//	ifrel.allowtransparency=true;
//	ifrel.style.position='absolute';
//	if (gigya.localInfo.isChrome) {
//		ifrel.style.width='30px';
//		ifrel.style.height='1px';
//	}
//	else {
//		ifrel.style.width='1px';
//		ifrel.style.height='1px';
//	}
//	if (ifrel.style.zIndex!=null) {
//		ifrel.style.zIndex=gigya.utils.DOM.getNextZIndex();
//	}

//	if (gigya.localInfo.isIE6) {
//	    ifrel.src = gigya._.getCdnResource('/gs/blank.htm');
//	}

//	var el = document.createElement('div');
//	el.style.position='absolute';
//	if (el.style.zIndex!=null) {
//		el.style.zIndex=gigya.utils.DOM.getNextZIndex();
//	}
//	el.innerHTML = '';
//	if (id) el.id=id;

		
//	if (document.body) {
//		if(document.body.insertBefore) {
//			if (document.body.firstChild) {
//				if (ifrel!=null) {
//					document.body.insertBefore(ifrel, document.body.firstChild);
//				}
//				document.body.insertBefore(el, document.body.firstChild);
//			} else if (document.body.appendChild) {
//				if (ifrel!=null) {
//					document.body.appendChild(ifrel);
//				}			
//				document.body.appendChild(el);
//			}
//		} 
//	}
//	return el;
//},

//gigya.services.socialize.hideUI = function () {
//	var params = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]);
//	gigya.services.socialize.GrayOut(false);
//	for (var containerID in gigya.utils.DOM._popupContainers) {
//		var container=gigya.utils.DOM._popupContainers[containerID];
//		if (container!=null) {
//			container.innerHTML = '';
//			if (container.parentNode) container.style.display='none';
//		}

//		var ifrel=document.getElementById('gigya_ifr_'+containerID);
//		if ( null!=ifrel ) { 
//			//ifrel.parentNode.removeChild(ifrel);
//			ifrel.style.display = 'none';     
//		}
//	}
//	var fbRoot=document.getElementById('fb-root');
//	if (fbRoot) fbRoot.style.visibility='hidden';
//	gigya.events.global.dispatch({eventName: 'HideUIRequested'});
//	if (typeof params.callback == 'function') {
//		var oResponse = {
//			status: 'OK',
//			statusMessage: '',
//			operation: 'hideUI',
//			context: params.context,
//			errorMessage: '',
//			errorCode: 0
//		};
//		params.callback(oResponse);
//	}
//}

//gigya.global.isEmail=function(s){
//	if (s.indexOf(' ')>=0) return false;
		
//	var emailParts=s.split('@');
//	if (emailParts.length!=2) return false;
//	if (emailParts[0].length==0) return false;
//	if (emailParts[1].length==0) return false;		
//	var domainParts=emailParts[1].split('.');
//	if (domainParts.length<2) return false;
//	for (var d=0;d<domainParts.length;d++){
//		if (domainParts[d].length==0 || domainParts[d].indexOf(' ')>0) return false;
//	}
//	return true;
//}

//gigya.socialize._AddJSRequest = function (servicedBy, methodName, needsContainer, params) {
//    if (!document.body) {
//        var args = arguments;
//        window.setTimeout(function () { gigya.socialize._AddJSRequest.apply(this, args) }, 300);
//        return;
//    }
//    if (!params) params = {};
//    gigya.log.logCall(methodName.split('.').pop(), params);
//    var containerID = params.containerID;
		
//    var blnCenter = false;
//    var container;
//    if (!needsContainer) { //no container
//        if (gigya.utils.DOM._pseudoContainers[containerID] == null) gigya.utils.DOM._pseudoContainers[containerID] = {};
//        container = gigya.utils.DOM._pseudoContainers[containerID]; //so it will be able to hold .Reqs on it.
//    } else if (typeof containerID == 'undefined' || containerID == '') { //popup
//        containerID = gigya.utils.DOM.getCenteredDivID(methodName);
//        params.containerID = containerID;
//        blnCenter = true;
//        params.isPopup = true;
//        container = document.getElementById(containerID);
//        if (container == null) container = gigya.utils.DOM.createTopLevelDiv(containerID);
//    }
//    else { //has container
//        container = document.getElementById(containerID);
//    }

//    if (!container) {
//        gigya.events.dispatchInvalidParamError(params, 'containerID');
//        return;
//    }
	
//    var localMethodName = methodName.split('.').pop();
//    if (container.setAttribute) container.setAttribute('gigid', (params.source && params.source != localMethodName ? params.source + '_' : '') + localMethodName);

//    if (container.style) {
//        container.style.display = '';
//        container.style.visibility = '';
//        container.innerHTML = '';
//        var ifrel = document.getElementById('gigya_ifr_' + containerID);
//        if (ifrel) {
//            ifrel.style.display = '';
//            ifrel.style.visibility = '';
//        }

//        var fncFixPosition = function () {
//            if (ifrel != null) {
//                gigya.utils.DOM.setSize(ifrel, params.width, params.height, blnCenter);
//                /*if (gigya.localInfo.isIE) {*/ifrel.style.visibility = 'visible'; /*}*/
//            }
//            gigya.utils.DOM.setSize(container, params.width, params.height, blnCenter);
//        };

//        fncFixPosition();
//    }

//    var Reqs = (container.Reqs ? container.Reqs : (container.Reqs = []));
//    var rid = Reqs.length + '@' + servicedBy + '@' + containerID;
//    params.rid = rid;
//    var operation = methodName;
//    if (params._operation) operation = params._operation;
//    var req = Reqs[Reqs.length] = {
//        rid: rid,
//        servicedBy: servicedBy,
//        container: container,
//        method: methodName,
//        context: params['context'],
//        c: params,
//        p: params,
//        i: params,
//        operation: operation,
//        isHTML: true
//    };


//    var methodNameParts = methodName.split('.');
//    var node = eval(methodNameParts[0]);
//    var pfxi = 1;
//    while (null != (node = node[methodNameParts[pfxi]]) && (++pfxi < methodNameParts.length)) {
//        //alert(pfxi);
//    };
//    var func = node;
//    gigya.utils.script.load(gigya._.getCdnResource('/js/' + servicedBy + '.min.js' + (params['lang'] ? '?lang=' + params['lang'] : '')), null, function () {
//        gigya.reports.reportLoad(methodName, params);
//        gigya.utils.functions.callFunction(methodName, [params, params, params]);
//    }, true);
//    return containerID;
//}

//gigya.utils.object.add(gigya.utils.DOM, {
//    enableSafeCopy: function (el) {
//        if (el.addedSafeCopy) return;
//        gigya.utils.DOM.addEventListener(el, 'copy', function (e) { //to let users copy URLs without soft hyphens
//            e = e || window.event;
//            var target = e.target || e.srcElement;
//            var nodename = target && target.nodeName ? target.nodeName.toLowerCase() : '';
//            if (nodename == 'textarea' || nodename == 'input') return;
//            var divCopy = document.createElement('div');
//            divCopy.style.color = window.getComputedStyle ? window.getComputedStyle(document.body).backgroundColor : '#FFFFFF';
//            divCopy.style.fontSize = '0px';
//            gigya.utils.DOM.appendToBody(divCopy);
//            var shyRegex = new RegExp("(&shy;|" + String.fromCharCode(173) + ")", "g");
//            if (window.getSelection) {
//                e.stopPropagation();
//                selection = window.getSelection();
//                range = selection.getRangeAt(0);
//                divCopy.appendChild(range.cloneContents());
//                divCopy.innerHTML = divCopy.innerHTML.replace(shyRegex, ''); //it's the soft hyphen char
//                selection.selectAllChildren(divCopy);
//                fnRestore = function () {
//                    divCopy.parentNode.removeChild(divCopy);
//                    selection.removeAllRanges();
//                    selection.addRange(range);
//                };
//            } else {
//                e.cancelBubble = true;
//                selection = window.document.selection;
//                range = selection.createRange();
//                divCopy.innerHTML = range.htmlText;
//                divCopy.innerHTML = divCopy.innerHTML.replace(shyRegex, ''); //it's the soft hyphen char
//                range2 = document.body.createTextRange();
//                range2.moveToElementText(divCopy);
//                range2.select();
//                fnRestore = function () {
//                    divCopy.parentNode.removeChild(divCopy);
//                    if (range.text !== "") {
//                        range.select();
//                    }
//                };
//            }
//            window.setTimeout(fnRestore, 0);
//        });
//        el.addedSafeCopy = true;
//    }
//});

    //gigya.utils.object.add(gigya.pluginUtils.lang, {
    //    getDateString: function (widgetParams, date) {
    //        if (!widgetParams || !widgetParams['dateFormat']) return;
    //        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //        var dateFormat = widgetParams['dateFormat'];
    //        var d = date.getDate();
    //        var m = date.getMonth() + 1
    //        var monthName = monthNames[date.getMonth()];
    //        var y = date.getFullYear();

    //        return dateFormat
    //            .replace(/%dd/g, ('0' + d).slice(-2))
    //            .replace(/%d/g, d)
    //            .replace(/%MMMM/g, monthName)
    //            .replace(/%MMM/g, monthName.substr(0, 3))
    //            .replace(/%MM/g, ('0' + m).slice(-2))
    //            .replace(/%M/g, m)
    //            .replace(/%yyyy/g, y)
    //            .replace(/%yy/g, y.toString().slice(-2))
    //    }
    //})


//gigya.global.XMLUtils module
//gigya.global.XMLUtils = {
//    CreateXMLFromString: function (sXML) {
//        var doc = null;
//        if (window.ActiveXObject) {
//            doc = new ActiveXObject("Microsoft.XMLDOM");
//            doc.async = "false";
//            doc.loadXML(sXML);
//        }
//        else {
//            var parser = new DOMParser();
//            doc = parser.parseFromString(sXML, "text/xml");
//        }

//        return doc;
//    },

//    CopyProperties: function (propBag, targetBag, pfx, Proccesor) {
//        if (typeof pfx == 'undefined') pfx = '';
//        if (typeof targetBag == 'undefined') targetBag = {};
//        if (Proccesor != null) {
//            for (var propName1 in propBag) {
//                targetBag[pfx + propName1] = Proccesor(propName1, propBag[propName1]);
//            }
//        }
//        else {
//            for (var propName2 in propBag) {
//                targetBag[pfx + propName2] = propBag[propName2];
//            }
//        }
//        return targetBag;
//    },

//    CollectAttributesFromXMLPathToObject: function (xmlobjResource, ResourceNodePathSegments, res, blnCollectFromAncestors, processor) {
//        for (var iPathSegment = 0; ((iPathSegment < ResourceNodePathSegments.length) && (typeof xmlobjResource != 'undefined')) ; iPathSegment++) {
//            xmlobjResource = xmlobjResource.childNodes[ResourceNodePathSegments[iPathSegment]];
//            if (xmlobjResource != null && blnCollectFromAncestors) {
//                this.CopyProperties(xmlobjResource.attributes, res, '', processor);
//            }
//        }

//        if (typeof xmlobjResource != 'undefined') {
//            this.CopyProperties(xmlobjResource.attributes, res, '', processor)
//        }
//    },

//    mergeNodes: function (srcNode, targetObject) {

//        if (typeof targetObject.attributes == 'undefined') targetObject.attributes = {};
//        if (typeof targetObject.childNodes == 'undefined') targetObject.childNodes = {};

//        var targetAttributes = targetObject.attributes;
//        var srcNodeAttributes = srcNode.attributes;
//        /* for (var attName in srcNodeAttributes) {
//		targetAttributes[attName] = srcNodeAttributes[attName];
//		}*/

//        if (srcNodeAttributes) {
//            //this.CopyAttributesToObject(srcNodeAttributes, targetAttributes, '');
//            for (var i = 0; i < srcNodeAttributes.length; i++) {
//                if (srcNodeAttributes[i].value != null) {
//                    targetAttributes[srcNodeAttributes[i].nodeName] = srcNodeAttributes[i].value;
//                } else {
//                    targetAttributes[srcNodeAttributes[i].nodeName] = srcNodeAttributes[i].nodeValue;
//                }
//            }
//        }
//        var targetChildNode;
//        for (var u = 0; u < srcNode.childNodes.length; u++) { //add missing child nodes
//            var srcChildNode = srcNode.childNodes[u];
//            targetChildNode = targetObject.childNodes[srcChildNode.nodeName];
//            if (typeof targetChildNode == 'undefined') {
//                targetChildNode = targetObject.childNodes[srcChildNode.nodeName] = { attributes: {}, childNodes: {} };
//            }
//            this.mergeNodes(srcChildNode, targetChildNode);
//        }
//        return targetObject;
//    }
//}

//gigya.global.resolver = function (proccessor) {
//    this.configurations = [];
//    this.mergedConfig = {};
//    this.isMerged = true;
//    this._processor = proccessor;
//    this.merge = function () {
//        if (!this.isMerged) {
//            this.mergedConfig = { attributes: {}, childNodes: {} };
//            for (var i = 0; i < this.configurations.length; i++) {
//                var xmlDoc = this.configurations[i];
//                gigya.global.XMLUtils.mergeNodes(xmlDoc, this.mergedConfig);
//            }
//            this.isMerged = true;
//        }
//    }
//    this.Resolve = function () {
//        if (this.merge) this.merge();
//        var res = {};
//        if (typeof arguments[arguments.length - 1] == 'object') {
//            res = arguments[arguments.length - 1];
//        }
//        for (var u = 0; u < arguments.length; u++) {
//            var arg = arguments[u];
//            var ctor = arg.constructor;
//            if (ctor == String) {

//                var arPaths = arg.split('|');
//                for (var i = arPaths.length - 1; i >= 0; i--) {
//                    var path = this.trimCharsAtSuffix(this.trimCharsAtPrefix(arPaths[i], ' \n\r\t'), ' \n\r\t');
//                    var recur = (path.charAt(0) == '+');
//                    var arPath = path.split('/').slice(1);
//                    if (recur) {
//                        path = path.substring(1);
//                    }
				
//                    gigya.global.XMLUtils.CollectAttributesFromXMLPathToObject(this.mergedConfig, arPath, res, recur, this._processor);
//                }
//            } else if (ctor == Array) {
//                for (var n = 0; n < arg.length; n++) {
//                    Resolve(arg[n], res);
//                }
//            }
//        }
//        return res;
//    }
					
//    this.trimCharsAtPrefix = function (s, chars) {
//        var idx = 0;
//        if ((typeof s == 'undefined') || (s.length == 0)) return '';
//        var sl = s.length;
//        while ((idx <= sl) && (chars.indexOf(s.charAt(idx)) > -1)) {
//            idx++;
//        }
//        return s.substring(idx, sl);
//    }
//    this.trimCharsAtSuffix = function (s, chars) {
//        if ((typeof s == 'undefined') || (s.length == 0)) return '';
//        var idx = s.length - 1;
//        while ((idx >= 0) && (chars.indexOf(s.charAt(idx)) > -1)) {
//            idx--;
//        }
//        return s.substring(0, idx + 1);
	
//    }
//    this.addConfig = function (sXML) {
//        if (typeof sXML == 'string') {
//            this.configurations.push(gigya.global.XMLUtils.CreateXMLFromString(sXML));
//            this.isMerged = false;
//        }
//    }
//    this.getTextFromKey = function (textKey) {
//        return this.Resolve('/config/lang/' + textKey)['text'];
//    }
//}
		
//gigya.global.resolver.defaultProccessor = function (PropertyName, PropertyValue) {
//    var lcasePropertyName = PropertyName.toLowerCase();
//    var lastDashIndex = lcasePropertyName.indexOf('-');
//    if (lastDashIndex != -1) {
//        lcasePropertyName = lcasePropertyName.substring(lastDashIndex + 1, lcasePropertyName.length);
//    }
//    switch (lcasePropertyName) {
//        case 'bold':
//        case 'italic':
//        case 'underline':
//            return PropertyValue.toString().toLowerCase() == 'true';
//            break;
//        case 'width':
//        case 'height':
//            return PropertyValue.replace('%', '');
//            break;
//        case 'size':
//            return parseInt(PropertyValue);
//            break;
//        default:
//            return PropertyValue;
//    }
//}

//gigya.global.getSpriteRenderers = function (oGroups) {
//    //group: {path,w,h}
//    var arPaths = [];
//    var x = 0;
//    var renderers = {};
//    for (var groupID in oGroups) {
//        var group = oGroups[groupID];
//        if (!group.pixelRatio) group.pixelRatio = 1;
//        arPaths.push(group.path + '|' + group.w * group.pixelRatio + ',' + group.h * group.pixelRatio);
//    }
//    var src = gigya._.getCdnResource('/gs/GetSprite.ashx?path=' + encodeURIComponent(arPaths.join('^').replace(/\[\]/, '')));
//    for (var groupID in oGroups) {
//        var group = oGroups[groupID];
//        var spriteGroupData = {};
//        spriteGroupData.spriteData = {};

//        var regexp = /\[(.*?)\]/g;
//        var arMatches = [];
//        var iMatch = 0;
//        spriteGroupData.srcTemplate = gigya._.getCdnResource('/gs/i' + group.path.replace(regexp, function (_, placeholder) {
//            arMatches.push(placeholder.split(','));
//            return '{' + (iMatch++) + '}';
//        }));
//        var arSpriteIDs = gigya.global.getCombination(arMatches);
//        if (arSpriteIDs.length == 0) arSpriteIDs.push(['']);

//        for (var u = 0; u < arSpriteIDs.length; u++) {
//            var id = arSpriteIDs[u].join('-');
//            if (id == '') {
//                id = 'default';
//            }
//            spriteGroupData.spriteData[id] = {
//                groupId: groupID,
//                id: id,
//                x: x,
//                w: group.w,
//                h: group.h
//            };
//            x += group.w;
//        }
//        renderers[groupID] = new gigya.global.SpriteRenderer(src, spriteGroupData.srcTemplate, spriteGroupData.spriteData, group.w, group.h, group.pixelRatio);
//    }
//    return renderers;
//}

//gigya.global.SpriteRenderer = function (src, srcTemplate, spriteData, spriteW, spriteH, pixelRatio) {
//    this.src = src;
//    this.srcTemplate = srcTemplate;
//    this.spriteData = spriteData;
//    this.spriteW = spriteW;
//    this.spriteH = spriteH;
//    this.pixelRatio = pixelRatio;
//}

//gigya.global.SpriteRenderer.prototype = {
//    getSpriteData: function (id, dontUseSprites) {
//        var oSprite = this.spriteData[id];
//        if (oSprite && !dontUseSprites) {
//            return this.spriteData[id];
//        } else {
//            var i = 0;
//            var params = id.split('-');
//            var regexp = /\{(.*?)\}/g;
//            var src = this.srcTemplate.replace(regexp, function (_, group) {
//                var param = params[i++];
//                if (param) {
//                    return param;
//                } else {
//                    return '';
//                }
//            })

//            return {
//                isSingleImage: true,
//                src: src
//            }
//        }
//    },

//    getStyleString: function (spriteId, autoMargin) {
//        var oSprite = this.getSpriteData(spriteId);
//        var arStyle = [];

//        if (oSprite) {
//            arStyle.push("background-image:url('" + this.src + "');");
//            arStyle.push("background-position:-" + oSprite.x + "px 0px;");

//            if (this.pixelRatio > 1) {
//                arStyle.push("background-size:auto " + this.spriteH + "px;");
//            }

//            if (autoMargin) {
//                arStyle.push("margin: 0 auto;");
//            }
//            arStyle.push("width: " + this.spriteW + "px;");
//            arStyle.push("height: " + this.spriteH + "px;line-height: " + this.spriteH + "px;");
//            arStyle.push("background-repeat:no-repeat;");
//            //arStyle.push("font-size:1px;");
//            arStyle.push("position:static;");
//        }
//        return arStyle.join('');
//    },

//    getHTML: function (spriteId, autoMargin, dontUseSprites, elID) {


//        /* ----------------------------------------------------------------------------------------*/
//        // see bug: 33448
//        var disableSpriteOnChrome = ((this.pixelRatio > 1) && gigya.localInfo.isChrome);
//        dontUseSprites = dontUseSprites || disableSpriteOnChrome;
//        /* ----------------------------------------------------------------------------------------*/

//        var oSprite = this.getSpriteData(spriteId, dontUseSprites);
//        var arHTML = [];
//        if (oSprite) {
//            if (oSprite.isSingleImage) {
//                arHTML.push('<img src="' + oSprite.src + '" style="width:' + this.spriteW + 'px;height:' + this.spriteH + 'px;position:static;margin:0" alt="" />');
//            } else {
//                arHTML.push('<div style="');
//                arHTML.push(this.getStyleString(spriteId, autoMargin));
//                arHTML.push('"');
//                if (elID) arHTML.push(' id="' + elID + '"');
//                arHTML.push('></div>');
//            }
//        }
//        return arHTML.join('');
//    }
//}
//gigya.global.getCombination = function (ar, index) {
//    if (!index) index = 0;
//    if (!ar || ar.length == 0) return [];
//    var currentArray = ar[index];
//    if (index == ar.length - 1) {
//        var arCombinations = [];
//        for (var i = 0; i < currentArray.length; i++) {
//            arCombinations.push([currentArray[i]]);
//        }
//        return arCombinations;
//    } else {
//        var arCombinations = [];
//        var arCombination = gigya.global.getCombination(ar, index + 1)
//        if (currentArray) {
//            for (var i = 0; i < currentArray.length; i++) {
//                for (var u = 0; u < arCombination.length; u++) {
//                    arCombinations.push([currentArray[i]].concat(arCombination[u]));
//                }
//            }
//        }
//        return arCombinations;
//    }
//}

//gigya.global.resolveProviders = function (enabledProviders, disabledProviders, requiredCapabilities) {

//    // setting the providers array.
//    // setting the array of the providers:
//    var eProviders = gigya.utils.array.getArrayFromString(enabledProviders, ',', true);
//    var dProviders = gigya.utils.array.getArrayFromString(disabledProviders, ',', true);
//    var rCapabilities = gigya.utils.array.getArrayFromString(requiredCapabilities, ',', true);

//    // removing the disabled providers.
//    for (var i = 0; i < dProviders.length; i++) {
//        gigya.utils.array.removeByValue(eProviders, dProviders[i]);
//    }

//    // converting the providrs string into the providers Object from the array of providers in the internal '_' sdk.
//    var providers = gigya._.providers.getProvidersByName(eProviders.join(','));

//    // removing the disabled providers.
//    for (var i = 0; i < dProviders.length; i++) {
//        gigya.utils.array.removeByProperty(providers, 'name', dProviders[i]);
//    }

//    // only providers that support the capabilities will remain.
//    return gigya.socialize.getProvidersForRequiredCapabilities(providers, rCapabilities);
//}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLFdBQVcsWUFBSyxrQkFBa0IsQ0FBQyxZQUFLLGdCQUFnQjtBQUN4RCwyQ0FBMkMsa0JBQWtCO0FBQzdELFdBQVcsWUFBSywyQkFBMkIsQ0FBQyxZQUFLLGNBQWM7QUFDL0QsV0FBVyxZQUFLLHFDQUFxQyxDQUFDLFlBQUssd0JBQXdCOztBQUVuRiwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLCtFQUErRSw2QkFBNkI7QUFDaE07QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmpzXCIpO1xuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkdTSlNTREsuanNcIiAvPlxyXG5pZiAodHlwZW9mIGdpZ3lhID09ICd1bmRlZmluZWQnKSB7IGdpZ3lhID0gbmV3IE9iamVjdCgpOyB9XHJcbi8vaWYgKHR5cGVvZiBnaWd5YS5nbG9iYWwgPT0gJ3VuZGVmaW5lZCcpIHsgZ2lneWEuZ2xvYmFsID0ge30gfVxyXG5pZiAodHlwZW9mIGdpZ3lhLnNlcnZpY2VzID09ICd1bmRlZmluZWQnKSB7IGdpZ3lhLnNlcnZpY2VzID0ge30gfVxyXG5pZiAodHlwZW9mIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZSA9PSAndW5kZWZpbmVkJykgeyBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUgPSB7fSB9XHJcblxyXG4vL2dpZ3lhLnBsdWdpblV0aWxzID0gZ2lneWEucGx1Z2luVXRpbHMgPT0gJ3VuZGVmaW5lZCcgPyB7fSA6IGdpZ3lhLnBsdWdpblV0aWxzO1xyXG4vL2dpZ3lhLnBsdWdpblV0aWxzIG1vZHVsZVxyXG4vL2dpZ3lhLnBsdWdpblV0aWxzLmFuaW1hdGlvbiA9IHtcclxuLy9zbGlkZURvd246IGZ1bmN0aW9uIChlbCkge1xyXG4vLyAgICB2YXIgYnAgPSBnaWd5YS5nbG9iYWwuZ2V0Q2xhc3NCb3JkZXJzQW5kUGFkZGluZ3MoZWwuY2xhc3NOYW1lKTtcclxuLy8gICAgdmFyIGggPSBlbC5vZmZzZXRIZWlnaHQgLSBicC5oO1xyXG4vLyAgICB2YXIgb3JpZ2luYWxUcmFuc2l0aW9uUHJvcGVydHkgPSBlbC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHk7XHJcbi8vICAgIGVsLnN0eWxlLm1heEhlaWdodCA9ICcxcHgnO1xyXG4vLyAgICBlbC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBlbC5zdHlsZS53ZWJraXRUcmFuc2l0aW9uUHJvcGVydHkgPSAnbWF4LWhlaWdodCc7XHJcbi8vICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IGggKyAncHgnO1xyXG4vLyAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gZWwuc3R5bGUud2Via2l0VHJhbnNpdGlvblByb3BlcnR5ID0gb3JpZ2luYWxUcmFuc2l0aW9uUHJvcGVydHk7XHJcbi8vICAgIH0sIDEwMCk7XHJcbi8vICAgIHZhciBmbk9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9ICc5OTlweCc7XHJcbi8vICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgJ3RyYW5zaXRpb25lbmQnLCBmbk9uVHJhbnNpdGlvbkVuZCk7XHJcbi8vICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBmbk9uVHJhbnNpdGlvbkVuZCk7XHJcbi8vICAgIH1cclxuLy8gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWwsICd0cmFuc2l0aW9uZW5kJywgZm5PblRyYW5zaXRpb25FbmQpO1xyXG4vLyAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBmbk9uVHJhbnNpdGlvbkVuZCk7XHJcbi8vICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZuT25UcmFuc2l0aW9uRW5kLCA1MDApO1xyXG4vL31cclxuLy9mYWRlSW46IGZ1bmN0aW9uIChlbCwgb3BhY2l0eSkge1xyXG4vLyAgICBpZiAodHlwZW9mIG9wYWNpdHkgPT09ICd1bmRlZmluZWQnKVxyXG4vLyAgICAgICAgb3BhY2l0eSA9IDE7XHJcblxyXG4vLyAgICBlbC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4vLyAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eSArICcnO1xyXG4vLyAgICB9LCAxMCk7XHJcbi8vfVxyXG4vL307XHJcbi8vdmFsaWRhdGlvbjoge1xyXG4vLyAgICBpc0VtYWlsVmFsaWQ6IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4vLyAgICAgICAgcmV0dXJuIGdpZ3lhLnBsdWdpblV0aWxzLnZhbGlkYXRpb24uaXNFbWFpbExpc3RWYWxpZChlbWFpbCk7XHJcbi8vICAgIH0sXHJcbi8vICAgIGlzRW1haWxMaXN0VmFsaWQ6IGZ1bmN0aW9uIChlbWFpbHMpIHtcclxuLy8gICAgICAgIHZhciBfZW1haWwgPSBcIigoPz0oLnsxLDY0fUAuezEsMjU1fSkpKFshIyQlJicqK1xcXFwtXFxcXC89P1xcXFxeX2B7fH1+YS16QS1aMC05fV17MSw2NH0oXFxcXC5bISMkJSYnKitcXFxcLVxcXFwvPT9cXFxcXl9ge3x9fmEtekEtWjAtOV17MSx9KXswLH0pQCgoXFxcXFsoMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KShcXFxcLigyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfVxcXFxdKXwoW2EtekEtWjAtOS1dezEsNjN9KFxcXFwuW2EtekEtWjAtOS1dezEsNjN9KXsxLH0pKSlcIjtcclxuLy8gICAgICAgIHZhciBfbmFtZUFuZEVtYWlsID0gJygoXCJbXjxdKzwoJyArIF9lbWFpbCArICcpPlwiKXwoKFwiW15cIl0qXCIgKik/PCgnICsgX2VtYWlsICsgJyk+KXwoJyArIF9lbWFpbCArICcpKSc7XHJcbi8vICAgICAgICB2YXIgX211bHRpcGxlRW1haWxzID0gJ14oICopPygnICsgX25hbWVBbmRFbWFpbCArICcgKiwgKikqJyArIF9uYW1lQW5kRW1haWwgKyAnKCAqLCAqKT8kJztcclxuLy8gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoX211bHRpcGxlRW1haWxzKTtcclxuXHJcbi8vICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbHMpO1xyXG4vLyAgICB9XHJcbi8vfSxcclxuLy90ZXh0OiB7XHJcbi8vICAgIG5vcm1hbGl6ZUxpbmVicmVha3M6IGZ1bmN0aW9uICh0KSB7XHJcbi8vICAgICAgICBpZiAoIXQgfHwgIXQucmVwbGFjZSkgcmV0dXJuIHQ7XHJcbi8vICAgICAgICByZXR1cm4gdC5yZXBsYWNlKC9cXHIvLCAnJykucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKTtcclxuLy8gICAgfVxyXG4vL30sXHJcblxyXG4vL2dpZ3lhLnBsdWdpblV0aWxzLmNzcyA9IHtcclxuLy8gICAgZml4Q3NzOiBmdW5jdGlvbiAoY3NzKSB7XHJcbi8vICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU3IHx8IChnaWd5YS5sb2NhbEluZm8uaXNJRSAmJiBnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSkpIHtcclxuLy8gICAgICAgICAgICBjc3MgPSBjc3MucmVwbGFjZSgvZGlzcGxheTppbmxpbmUtYmxvY2svZywgJ2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTsqZGlzcGxheTppbmxpbmUnKTtcclxuLy8gICAgICAgIH1cclxuXHJcbi8vICAgICAgICByZXR1cm4gY3NzXHJcbi8vICAgICAgICAgICAgLnJlcGxhY2UoL2dyYWRpZW50XFwoKC4qPyksKC4qPylcXCkvZyxcclxuLy8gICAgICAgICAgICAgICAgJ2ZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIkMVwiLCBlbmRDb2xvcnN0cj1cIiQyXCIpOycgK1xyXG4vLyAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgICQxLCAgJDIpOycgK1xyXG4vLyAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgJDEsICQyKTsnICtcclxuLy8gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oJDEpLCB0bygkMikpOycgK1xyXG4vLyAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgJDEsICAkMiknKTtcclxuLy8gICAgfVxyXG4vL307XHJcblxyXG4vL2dpZ3lhLnBsdWdpblV0aWxzLkRPTSA9IHtcclxuLy9zZXRUZXh0Ym94U3VibWl0QnV0dG9uOiBmdW5jdGlvbihlbFRleHRib3gsIGVsQnV0dG9uKSB7XHJcbi8vICAgIHZhciBmbk9uUHJlc3MgPSBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgICB2YXIgY2hhckNvZGU7XHJcbi8vICAgICAgICBpZiAoZSAmJiBlLndoaWNoKSB7XHJcbi8vICAgICAgICAgICAgZSA9IGU7XHJcbi8vICAgICAgICAgICAgY2hhckNvZGUgPSBlLndoaWNoO1xyXG4vLyAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICBlID0gZXZlbnQ7XHJcbi8vICAgICAgICAgICAgY2hhckNvZGUgPSBlLmtleUNvZGU7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgICBpZiAoY2hhckNvZGUgPT0gMTMpIHtcclxuLy8gICAgICAgICAgICBlbEJ1dHRvbi5jbGljaygpO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICB9O1xyXG5cclxuLy8gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWxUZXh0Ym94LCAna2V5dXAnLCBmbk9uUHJlc3MpO1xyXG4vLyAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbEJ1dHRvbiwgJ2tleXVwJywgZm5PblByZXNzKTtcclxuLy99LFxyXG4vL2dldFJlbGF0aXZlUG9zaXRpb246IGZ1bmN0aW9uIChwb3NpdGlvbiwgc2l6ZSwgZGlyZWN0aW9uLCBtYXJnaW4sIGZsaXApIHtcclxuLy8gICAgdmFyIHJlbGF0aXZlUG9zaXRpb24gPSB7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAwLCByaWdodDogMCB9O1xyXG5cclxuLy8gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2JvdHRvbScpIHtcclxuLy8gICAgICAgIHJlbGF0aXZlUG9zaXRpb24udG9wID0gcG9zaXRpb24uYm90dG9tICsgbWFyZ2luO1xyXG4vLyAgICAgICAgcmVsYXRpdmVQb3NpdGlvbi5sZWZ0ID0gKGZsaXAgPyBwb3NpdGlvbi5yaWdodCAtIHNpemUudyA6IHBvc2l0aW9uLmxlZnQpO1xyXG4vLyAgICB9XHJcbi8vICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcclxuLy8gICAgICAgIHJlbGF0aXZlUG9zaXRpb24udG9wID0gcG9zaXRpb24udG9wIC0gc2l6ZS5oIC0gbWFyZ2luO1xyXG4vLyAgICAgICAgcmVsYXRpdmVQb3NpdGlvbi5sZWZ0ID0gKGZsaXAgPyBwb3NpdGlvbi5yaWdodCAtIHNpemUudyA6IHBvc2l0aW9uLmxlZnQpO1xyXG4vLyAgICB9XHJcbi8vICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbi8vICAgICAgICByZWxhdGl2ZVBvc2l0aW9uLnRvcCA9IChmbGlwID8gcG9zaXRpb24uYm90dG9tIC0gc2l6ZS5oIDogcG9zaXRpb24udG9wKTtcclxuLy8gICAgICAgIHJlbGF0aXZlUG9zaXRpb24ubGVmdCA9IHBvc2l0aW9uLmxlZnQgLSBzaXplLncgLSBtYXJnaW47XHJcbi8vICAgIH1cclxuLy8gICAgZWxzZSB7XHJcbi8vICAgICAgICByZWxhdGl2ZVBvc2l0aW9uLnRvcCA9IChmbGlwID8gcG9zaXRpb24uYm90dG9tIC0gc2l6ZS5oIDogcG9zaXRpb24udG9wKTtcclxuLy8gICAgICAgIHJlbGF0aXZlUG9zaXRpb24ubGVmdCA9IHBvc2l0aW9uLnJpZ2h0ICsgbWFyZ2luO1xyXG4vLyAgICB9XHJcblxyXG4vLyAgICByZWxhdGl2ZVBvc2l0aW9uLmJvdHRvbSA9IHJlbGF0aXZlUG9zaXRpb24udG9wICsgc2l6ZS5oO1xyXG4vLyAgICByZWxhdGl2ZVBvc2l0aW9uLnJpZ2h0ID0gcmVsYXRpdmVQb3NpdGlvbi5sZWZ0ICsgc2l6ZS53O1xyXG5cclxuLy8gICAgcmV0dXJuIHJlbGF0aXZlUG9zaXRpb247XHJcbi8vfSxcclxuLy9wbGFjZVBvcG92ZXJOZWFyRWxlbWVudDogZnVuY3Rpb24gKGVsVGFyZ2V0LCBjb250YWluZXIsIGRpcmVjdGlvbiwgbWFyZ2luLCBmbGlwLCBhZGp1c3REaXJlY3Rpb24pIHtcclxuLy8gICAgdmFyIHRhcmdldFBvc2l0aW9uID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRQb3NpdGlvbihlbFRhcmdldCk7XHJcbi8vICAgIHNpemUgPSB7IHc6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCwgaDogY29udGFpbmVyLm9mZnNldEhlaWdodCB9O1xyXG4vLyAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmdldFJlbGF0aXZlUG9zaXRpb24odGFyZ2V0UG9zaXRpb24sIHNpemUsIGRpcmVjdGlvbiwgbWFyZ2luLCBmbGlwKTtcclxuXHJcbi8vICAgIGlmIChhZGp1c3REaXJlY3Rpb24gJiYgIWdpZ3lhLnV0aWxzLnZpZXdwb3J0LmlzUmVjdEZ1bGx5VmlzaWJsZShwb3NpdGlvbikpIHtcclxuLy8gICAgICAgIHZhciBvcHBvc2l0ZSA9IHtcclxuLy8gICAgICAgICAgICBib3R0b206ICd0b3AnLCBsZWZ0OiAncmlnaHQnLCByaWdodDogJ2xlZnQnLCB0b3A6ICdib3R0b20nXHJcbi8vICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gdGhpcy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHRhcmdldFBvc2l0aW9uLCBzaXplLCBvcHBvc2l0ZVtkaXJlY3Rpb25dLCBtYXJnaW4pO1xyXG4vLyAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLnZpZXdwb3J0LmlzUmVjdEhvcml6b250YWxseVZpc2libGUobmV3UG9zaXRpb24pKVxyXG4vLyAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbi8vICAgIH1cclxuXHJcbi8vICAgIGlmICghZ2lneWEudXRpbHMudmlld3BvcnQuaXNSZWN0SG9yaXpvbnRhbGx5VmlzaWJsZShwb3NpdGlvbikpIHtcclxuLy8gICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMuZ2V0UmVsYXRpdmVQb3NpdGlvbih0YXJnZXRQb3NpdGlvbiwgc2l6ZSwgZGlyZWN0aW9uLCBtYXJnaW4sICFmbGlwKTtcclxuLy8gICAgICAgIGlmIChnaWd5YS51dGlscy52aWV3cG9ydC5pc1JlY3RIb3Jpem9udGFsbHlWaXNpYmxlKG5ld1Bvc2l0aW9uKSlcclxuLy8gICAgICAgICAgICBwb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG4vLyAgICB9XHJcblxyXG4vLyAgICBjb250YWluZXIuc3R5bGUubGVmdCA9ICcnICsgcG9zaXRpb24ubGVmdCArICdweCc7XHJcbi8vICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSAnJyArIHBvc2l0aW9uLnRvcCArICdweCc7XHJcbi8vICAgIC8vY29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gZWxQb3BvdmVyLm9mZnNldFdpZHRoICsgJ3B4JztcclxuLy99LFxyXG4vL2FkZFBvcG92ZXJOZWFyRWxlbWVudDogZnVuY3Rpb24gKGVsVGFyZ2V0LCBlbFBvcG92ZXIsIGRpcmVjdGlvbiwgbWFyZ2luLCBmbGlwLCBhZGp1c3REaXJlY3Rpb24sIGFuaW1hdGlvbiwgZm5XaGVuUmVtb3ZlZCwgcmVtb3ZlT25DbGlja0V4bGNsdWRlZEVsZW1lbnRzLCByZW1vdmVPbkNsaWNrRXZlbnQpIHtcclxuLy8gICAgaWYgKCFlbFRhcmdldCB8fCAhZWxQb3BvdmVyKSByZXR1cm47XHJcbi8vICAgIGlmICghZGlyZWN0aW9uKSBkaXJlY3Rpb24gPSAnYm90dG9tJztcclxuLy8gICAgaWYgKCFtYXJnaW4pIG1hcmdpbiA9IDA7XHJcbi8vICAgIGlmICh0eXBlb2YgYWRqdXN0RGlyZWN0aW9uID09PSAndW5kZWZpbmVkJykgYWRqdXN0RGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbi8vICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsUG9wb3Zlcik7XHJcbi8vICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbi8vICAgIGNvbnRhaW5lci5zdHlsZS56SW5kZXggPSAoZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKSkudG9TdHJpbmcoKTtcclxuLy8gICAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7IC8vIERyYXcgb3V0c2lkZSBvZiBzY3JlZW4gdG8gZ2V0IHRoZSBzaXplXHJcbi8vICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuLy8gICAgdGhpcy5wbGFjZVBvcG92ZXJOZWFyRWxlbWVudChlbFRhcmdldCwgY29udGFpbmVyLCBkaXJlY3Rpb24sIG1hcmdpbiwgZmxpcCwgYWRqdXN0RGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgXHJcbi8vICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5yZW1vdmVFbGVtZW50T25Eb2NDbGljayhjb250YWluZXIsIGZuV2hlblJlbW92ZWQsIHJlbW92ZU9uQ2xpY2tFeGxjbHVkZWRFbGVtZW50cyxcclxuLy8gICAgICAgIHJlbW92ZU9uQ2xpY2tFdmVudCA/IHJlbW92ZU9uQ2xpY2tFdmVudCA6ICdjbGljaycpO1xyXG5cclxuLy8gICAgaWYgKGFuaW1hdGlvbiAmJiB0eXBlb2YgZ2lneWEucGx1Z2luVXRpbHMuYW5pbWF0aW9uW2FuaW1hdGlvbl0gPT09ICdmdW5jdGlvbicpXHJcbi8vICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5hbmltYXRpb25bYW5pbWF0aW9uXShlbFBvcG92ZXIpO1xyXG5cclxuLy8gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuLy99LFxyXG4vL3JlbW92ZUVsZW1lbnRPbkRvY0NsaWNrOiBmdW5jdGlvbiAoZWwsIGZuQ2FsbGJhY2ssIGV4Y2x1ZGVkRWxlbWVudHMsIGV2ZW50KSB7XHJcbi8vICAgIGlmICghZWwpIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbi8vICAgIHZhciBmblJlbW92ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICAgICB2YXIgd2FzT3BlbiA9IGVsICYmIGVsLnBhcmVudE5vZGU7XHJcbi8vICAgICAgICBpZiAod2FzT3BlbikgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcbi8vICAgICAgICBpZiAoZm5DYWxsYmFjaykgZm5DYWxsYmFjayhlLCB3YXNPcGVuKTtcclxuLy8gICAgfVxyXG5cclxuLy8gICAgdmFyIGFyQWxsRXhjbHVkZWQgPSBbZWxdO1xyXG4vLyAgICBpZiAoZXhjbHVkZWRFbGVtZW50cylcclxuLy8gICAgICAgIGFyQWxsRXhjbHVkZWQgPSBhckFsbEV4Y2x1ZGVkLmNvbmNhdChleGNsdWRlZEVsZW1lbnRzKTtcclxuXHJcbi8vICAgIHRoaXMucGVyZm9ybU9uRG9jQ2xpY2tPckVzY2FwZShmblJlbW92ZSwgYXJBbGxFeGNsdWRlZCwgZXZlbnQpO1xyXG4vL30sXHJcbi8vaGlkZUVsZW1lbnRPbkRvY0NsaWNrOiBmdW5jdGlvbiAoZWwsIGZuQ2FsbGJhY2ssIGV4Y2x1ZGVkRWxlbWVudHMpIHtcclxuLy8gICAgaWYgKCFlbCkgcmV0dXJuO1xyXG5cclxuLy8gICAgdmFyIGZuSGlkZSA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbi8vICAgICAgICBpZiAoZm5DYWxsYmFjaykgZm5DYWxsYmFjaygpO1xyXG4vLyAgICB9XHJcblxyXG4vLyAgICB2YXIgYXJBbGxFeGNsdWRlZCA9IFtlbF07XHJcbi8vICAgIGlmIChleGNsdWRlZEVsZW1lbnRzKVxyXG4vLyAgICAgICAgYXJBbGxFeGNsdWRlZC5jb25jYXQoZXhjbHVkZWRFbGVtZW50cyk7XHJcblxyXG4vLyAgICB0aGlzLnBlcmZvcm1PbkRvY0NsaWNrT3JFc2NhcGUoZm5IaWRlLCBhckFsbEV4Y2x1ZGVkKTtcclxuLy99LFxyXG4vL3BlcmZvcm1PbkRvY0NsaWNrOiBmdW5jdGlvbiAoZm5DYWxsYmFjaywgZXhjbHVkZWRFbGVtZW50cywgZXZlbnQpIHtcclxuLy8gICAgaWYgKCFldmVudCkgZXZlbnQgPSAnbW91c2Vkb3duJztcclxuXHJcbi8vICAgIHZhciBmbk9uRG9jQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuLy8gICAgICAgIHZhciBjbGlja0luRGl2ID0gZmFsc2U7XHJcbi8vICAgICAgICB3aGlsZSAodGFyZ2V0ICYmIHRhcmdldC5wYXJlbnROb2RlKSB7XHJcbi8vICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkRWxlbWVudHMgJiYgZXhjbHVkZWRFbGVtZW50cy5pbmRleE9mKHRhcmdldCkgIT0gLTEpIHtcclxuLy8gICAgICAgICAgICAgICAgY2xpY2tJbkRpdiA9IHRydWU7XHJcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgICAgIGlmICghY2xpY2tJbkRpdikge1xyXG4vLyAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LCBldmVudCwgZm5PbkRvY0NsaWNrKTtcclxuLy8gICAgICAgICAgICBpZiAoZm5DYWxsYmFjaykgZm5DYWxsYmFjayhlKTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgfVxyXG5cclxuLy8gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsIGV2ZW50LCBmbk9uRG9jQ2xpY2spO1xyXG4vL31cclxuLy99O1xyXG5cclxuLy9naWd5YS5wbHVnaW5VdGlscy5sYXlvdXQgPSB7XHJcbi8vbWVhc3VyZVRleHQ6IGZ1bmN0aW9uICh0ZXh0LCBvU3R5bGUsIG1heFcpIHtcclxuLy8gICAgaWYgKGlzTmFOKG1heFcpIHx8IG1heFcgPCAwKSBtYXhXID0gMDtcclxuLy8gICAgdmFyIHJ1bGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZ3lhX3J1bGVyJyk7XHJcbi8vICAgIHZhciBydWxlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lneWFfcnVsZXJfdGV4dCcpO1xyXG4vLyAgICBpZiAocnVsZXIgPT0gbnVsbCkge1xyXG4vLyAgICAgICAgcnVsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgIHJ1bGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbi8vICAgICAgICBydWxlci5pZCA9ICdnaWd5YV9ydWxlcic7XHJcbi8vICAgICAgICBydWxlclRleHQuaWQgPSAnZ2lneWFfcnVsZXJfdGV4dCc7XHJcbi8vICAgICAgICBydWxlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbi8vICAgICAgICBydWxlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbi8vICAgICAgICBydWxlci5zdHlsZS5tYXJnaW4gPSAnMHB4JztcclxuLy8gICAgICAgIHJ1bGVyLnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcclxuLy8gICAgICAgIHJ1bGVyLmFwcGVuZENoaWxkKHJ1bGVyVGV4dCk7XHJcbi8vICAgICAgICBnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KHJ1bGVyKTtcclxuLy8gICAgfVxyXG4vLyAgICBpZiAob1N0eWxlKSB7XHJcbi8vICAgICAgICBydWxlci5zdHlsZS5saW5lSGVpZ2h0ID0gb1N0eWxlLnNpemUgKyAncHgnO1xyXG4vLyAgICAgICAgcnVsZXIuc3R5bGUuZm9udEZhbWlseSA9IG9TdHlsZS5mb250O1xyXG4vLyAgICAgICAgcnVsZXIuc3R5bGUuZm9udFNpemUgPSBvU3R5bGUuc2l6ZSArICdweCc7XHJcbi8vICAgICAgICBydWxlci5zdHlsZS5mb250V2VpZ2h0ID0gKCgnJyArIG9TdHlsZS5ib2xkKS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykgPyAnYm9sZCcgOiAnJztcclxuLy8gICAgfVxyXG4vLyAgICBpZiAobWF4Vykge1xyXG4vLyAgICAgICAgcnVsZXIuc3R5bGUud2hpdGVTcGFjZSA9ICcnO1xyXG4vLyAgICAgICAgcnVsZXIuc3R5bGUud2lkdGggPSAnJyArIG1heFcgKyAncHgnO1xyXG4vLyAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgcnVsZXIuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xyXG4vLyAgICAgICAgcnVsZXIuc3R5bGUud2lkdGggPSAnYXV0byc7XHJcbi8vICAgIH1cclxuLy8gICAgcnVsZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuLy8gICAgcnVsZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4vLyAgICBydWxlclRleHQuaW5uZXJIVE1MID0gdGV4dDtcclxuLy8gICAgdmFyIHcgPSBydWxlclRleHQub2Zmc2V0V2lkdGg7XHJcbi8vICAgIHZhciBoID0gcnVsZXJUZXh0Lm9mZnNldEhlaWdodDtcclxuLy8gICAgaWYgKHcgPT0gMCB8fCBoID09IDApIHtcclxuLy8gICAgICAgIHcgPSBydWxlci5vZmZzZXRXaWR0aDtcclxuLy8gICAgICAgIGggPSBydWxlci5vZmZzZXRIZWlnaHQ7XHJcbi8vICAgIH1cclxuLy8gICAgcnVsZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuLy8gICAgcmV0dXJuIHsgdzogdywgaDogaCB9O1xyXG4vL31cclxuLy99O1xyXG4vL2RvbWFpbjoge1xyXG4vLyAgICBpc0luRG9tYWluOiBmdW5jdGlvbiAoZG9tYWluKSB7XHJcbi8vICAgICAgICBpZiAoIWRvbWFpbikgcmV0dXJuO1xyXG4vLyAgICAgICAgdmFyIHJlZ2V4U3RyaW5nID0gJ14nICsgZG9tYWluLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKS5yZXBsYWNlKC9cXCpcXFxcLi9nLCAnKFthLXpBLVowLTldK1xcXFwuKSonKSArICckJztcclxuLy8gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAocmVnZXhTdHJpbmcpO1xyXG4vLyAgICAgICAgcmV0dXJuIChyZWdleC50ZXN0KGRvY3VtZW50LmRvbWFpbikpO1xyXG4vLyAgICB9XHJcbi8vfVxyXG4vL31cclxuXHJcbi8vZ2lneWEucGx1Z2luVXRpbHMubGFuZyBtb2R1bGVcclxuLy9naWd5YS5wbHVnaW5VdGlscy5sYW5nID0ge1xyXG4vLyAgICAvLyBHZXQgbG9jYWxpemVkIHRleHQgZnJvbSBpMThuIGluamVjdGlvblxyXG4vL1x0Z2V0TG9jYWxpemVkVGV4dDogZnVuY3Rpb24gKHBsdWdpbiwgdGV4dEtleSwgbGFuZywgcmVwbGFjZVN0ciwgd2l0aFN0cikge1xyXG4vL1x0ICAgIGlmIChsYW5nID09ICd0ZS1zdCcpIHJldHVybiAnVEVTVF8nICsgdGV4dEtleS5zdWJzdHJpbmcoMCwgMTApO1xyXG4vL1x0ICAgIGlmICghbGFuZykgbGFuZyA9ICdlbic7XHJcblxyXG4vL1x0ICAgIHZhciB0ID0gKGdpZ3lhLmkxOG5bcGx1Z2luXVtsYW5nXSA/IGdpZ3lhLmkxOG5bcGx1Z2luXVtsYW5nXVt0ZXh0S2V5XSA6IGdpZ3lhLmkxOG5bcGx1Z2luXVsnZW4nXVt0ZXh0S2V5XSk7XHJcbi8vXHQgICAgaWYgKHQgJiYgcmVwbGFjZVN0cikgdCA9IHQucmVwbGFjZShyZXBsYWNlU3RyLCB3aXRoU3RyKTtcclxuLy9cdCAgICByZXR1cm4gdDtcclxuLy9cdH1cclxuLy99XHJcblxyXG4vL2dpZ3lhLnV0aWxzLm1vdXNlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4vL1x0dmFyIHBvc3ggPSAwO1xyXG4vL1x0dmFyIHBvc3kgPSAwO1xyXG4vL1x0aWYgKGRvY3VtZW50LmJvZHkpIHtcclxuLy9cdFx0dmFyIGUgPSB0aGlzLl9tb3VzZUV2ZW50T2JqZWN0O1xyXG4vL1x0XHRpZiAoIWUpIGUgPSB7IGNsaWVudFg6IDAsIGNsaWVudFk6IDAgfTtcclxuLy9cdFx0aWYgKGUucGFnZVggfHwgZS5wYWdlWSkge1xyXG4vL1x0XHRcdHBvc3ggPSBlLnBhZ2VYO1xyXG4vL1x0XHRcdHBvc3kgPSBlLnBhZ2VZO1xyXG4vL1x0XHR9XHJcbi8vXHRcdGVsc2UgaWYgKGUuY2xpZW50WCB8fCBlLmNsaWVudFkpIHtcclxuLy9cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbi8vXHRcdFx0cG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuLy9cdFx0fVxyXG4vL1x0XHRyZXR1cm4geyB4OiBwb3N4LCB5OiBwb3N5IH1cclxuLy9cdH1cclxuLy99XHJcblxyXG4vL2dpZ3lhLnNvY2lhbGl6ZS5fcGFyc2VSSUQgPSBmdW5jdGlvbiAocmlkKSB7XHJcbi8vICAgIHZhciByaWRwID0gcmlkLnNwbGl0KCdAJyk7XHJcbi8vICAgIHZhciBzd2YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWRwWzJdICsgJ18nICsgcmlkcFsxXSk7XHJcbi8vICAgIHZhciBjb250YWluZXJJRCA9IHJpZHBbMl07XHJcbi8vICAgIHZhciBjb250YWluZXI7XHJcblxyXG4vLyAgICBpZiAobnVsbCA9PSAoY29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLl9wc2V1ZG9Db250YWluZXJzW2NvbnRhaW5lcklEXSkpIHtcclxuLy8gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZHBbMl0pO1xyXG4vLyAgICB9XHJcblxyXG4vLyAgICB2YXIgUmVxcyA9IG51bGw7XHJcbi8vICAgIGlmIChjb250YWluZXIgIT0gbnVsbCkgUmVxcyA9IGNvbnRhaW5lci5SZXFzO1xyXG4vLyAgICB2YXIgcmVxID0gbnVsbDtcclxuLy8gICAgaWYgKFJlcXMgIT0gbnVsbCkgcmVxID0gUmVxc1twYXJzZUludChyaWRwWzBdKV07XHJcblxyXG4vLyAgICByZXR1cm4geyByaWQ6IHJpZCwgY29udGFpbmVyOiBjb250YWluZXIsIFJlcXM6IFJlcXMsIHJlcTogcmVxLCBzd2Y6IHN3ZiB9O1xyXG4vL30sXHJcblxyXG5cclxuLy9naWd5YS5zb2NpYWxpemUuX2Nsb3NlQ29tcG9uZW50ID0gZnVuY3Rpb24gKHJpZCwgZGlzcGF0Y2hDbG9zZUV2ZW50KSB7XHJcbi8vICAgIHZhciBvUklEID0gZ2lneWEuc29jaWFsaXplLl9wYXJzZVJJRChyaWQpO1xyXG4vLyAgICB2YXIgcmVxID0gb1JJRC5yZXE7XHJcbi8vICAgIGlmIChnaWd5YS5zb2NpYWxpemUuR3JheU91dCkgZ2lneWEuc29jaWFsaXplLkdyYXlPdXQoZmFsc2UpO1xyXG4vLyAgICB2YXIgaWZyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZ3lhX2lmcl8nICsgcmVxLmNvbnRhaW5lci5pZClcclxuLy8gICAgaWYgKGlmciAhPSBudWxsKSBpZnIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcclxuLy8gICAgaWYgKGRpc3BhdGNoQ2xvc2VFdmVudCkge1xyXG4vLyAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnY2xvc2UnIH0sIHJlcS5wKTtcclxuLy8gICAgfVxyXG4vLyAgICByZXEuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbi8vfVxyXG5cdFxyXG4vL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fY3JlYXRlSlNQb3B1cCA9IGZ1bmN0aW9uIChyaWQsIHJlc29sdmVyLCBjYXB0aW9uVGV4dCwgbm9DYXB0aW9uKSB7XHJcbi8vICAgIHZhciBvUklEID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9wYXJzZVJJRChyaWQpO1xyXG5cdFxyXG4vLyAgICB2YXIgcmVxID0gb1JJRC5yZXE7XHJcbi8vICAgIHZhciBwYXJhbXMgPSByZXEucDtcclxuLy8gICAgdmFyIGNvbmYgPSByZXEuYztcclxuLy8gICAgaWYgKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHBhcmFtc1snc2hvd0NhcHRpb24nXSkpIG5vQ2FwdGlvbiA9IHRydWU7XHJcblx0XHJcbi8vICAgIHZhciBHUyA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZTtcclxuLy8gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmFtc1snY29udGFpbmVySUQnXSk7XHJcbi8vICAgIHJlcS5jb250YWluZXIgPSBjb250YWluZXI7XHJcblx0XHJcbi8vICAgIHZhciBvQmdTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvYmFja2dyb3VuZCcpO1xyXG4vLyAgICB2YXIgb0NhcHRpb25TdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvY2FwdGlvbnMnKTtcclxuXHRcclxuLy8gICAgdmFyIHMgPSAnPHRhYmxlIHN0eWxlPVwiJyArIEdTLmdldFN0eWxlU3RyaW5nKG9CZ1N0eWxlKSArICc7ZW1wdHktY2VsbHM6c2hvdztcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiA+JztcclxuLy8gICAgaWYgKCFub0NhcHRpb24pIHtcclxuLy8gICAgICAgIHMgKz0gJzx0ciBzdHlsZT1cIicgKyBHUy5nZXRTdHlsZVN0cmluZyhvQ2FwdGlvblN0eWxlKSArICdcIj48dGQ+PHRhYmxlIHN0eWxlPVwid2lkdGg6MTAwJVwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0ciBpZD1cIicgKyBwYXJhbXNbJ2NvbnRhaW5lcklEJ10gKyAnX2NhcHRpb25cIj48dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcIj48ZGl2IHN0eWxlPVwiJyArIEdTLmdldFN0eWxlU3RyaW5nKG9DYXB0aW9uU3R5bGUpICsgJztwYWRkaW5nOjdweFwiPicgKyBjYXB0aW9uVGV4dCArICc8L2Rpdj48L3RkPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPic7XHJcbi8vICAgICAgICBzICs9ICc8ZGl2IGFsaWduPVwicmlnaHRcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDdweDsgY3Vyc29yOiBwb2ludGVyOycgKyBHUy5nZXRTdHlsZVN0cmluZyhvQ2FwdGlvblN0eWxlKSArICdcIj48aW1nIG9uY2xpY2s9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX2Nsb3NlQ29tcG9uZW50KFxcJycgKyByaWQgKyAnXFwnLCB0cnVlKTtcIiAgc3JjPVwiJyArIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL0hUTUxMb2dpbi9jbG9zZUljb24uZ2lmJykgKyAnXCIgYWx0PVwiXCIgLz48L2Rpdj48L3RkPjwvdHI+PC90YWJsZT48L3RkPjwvdHI+PHRyPjx0ZCBjb2xzcGFuPVwiMlwiPic7XHJcbi8vICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICBzICs9ICc8dHI+PHRkPic7XHJcbi8vICAgIH1cclxuLy8gICAgcyArPSAnPGRpdiBpZD1cIicgKyBwYXJhbXNbJ2NvbnRhaW5lcklEJ10gKyAnX2NvbnRhaW5lclwiPjwvZGl2PjwvdGQ+PC90cj48L3RhYmxlPic7XHJcbi8vICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzO1xyXG4vLyAgICB2YXIgcCA9IHt9O1xyXG4vLyAgICB2YXIgYyA9IHt9O1xyXG4vLyAgICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcclxuLy8gICAgICAgIHBbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcclxuLy8gICAgfVxyXG5cclxuLy8gICAgZm9yIChwYXJhbSBpbiBjb25mKSB7XHJcbi8vICAgICAgICBjW3BhcmFtXSA9IGNvbmZbcGFyYW1dO1xyXG4vLyAgICB9XHJcblx0XHJcbi8vICAgIHZhciBjYXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocFsnY29udGFpbmVySUQnXSArICdfY2FwdGlvbicpO1xyXG5cclxuLy8gICAgcFsnaGVpZ2h0J10gPSBwWydoZWlnaHQnXSAtIChvQmdTdHlsZVsnZnJhbWUtdGhpY2tuZXNzJ10gKiAyKTtcclxuLy8gICAgaWYgKCFub0NhcHRpb24pIHBbJ2hlaWdodCddIC09IGNhcHRpb24ub2Zmc2V0SGVpZ2h0O1xyXG4vLyAgICBwWyd3aWR0aCddID0gcFsnd2lkdGgnXSAtIChvQmdTdHlsZVsnZnJhbWUtdGhpY2tuZXNzJ10gKiAyKTtcclxuXHRcclxuLy8gICAgZ2lneWEudXRpbHMuRE9NLl9wb3B1cENvbnRhaW5lcnNbcFsnY29udGFpbmVySUQnXV0gPSBjb250YWluZXJcclxuLy8gICAgcFsnY29udGFpbmVySUQnXSA9IHBbJ2NvbnRhaW5lcklEJ10gKyAnX2NvbnRhaW5lcic7XHJcbi8vICAgIHJldHVybiB7IGM6IGMsIHA6IHAgfVxyXG4vL31cclxuXHRcclxuLy9naWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX2NyZWF0ZUpTUG9wdXAyID0gZnVuY3Rpb24gKHJpZCwgcmVzb2x2ZXIsIGJvcmRlclNpemUsIGJhc2UsIGNhcHRpb25UZXh0LCBhZGRCb3JkZXIpIHtcclxuLy8gICAgdmFyIG9SSUQgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX3BhcnNlUklEKHJpZCk7XHJcblx0XHJcbi8vICAgIHZhciByZXEgPSBvUklELnJlcTtcclxuLy8gICAgdmFyIHBhcmFtcyA9IHJlcS5wO1xyXG4vLyAgICB2YXIgY29uZiA9IHJlcS5jO1xyXG5cclxuLy8gICAgdmFyIEdTID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplO1xyXG4vLyAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyYW1zWydjb250YWluZXJJRCddKTtcclxuLy8gICAgcmVxLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbi8vICAgIHZhciBvQ2FwdGlvblN0eWxlID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS9jYXB0aW9ucycpO1xyXG5cclxuLy8gICAgaWYgKCFib3JkZXJTaXplKSBib3JkZXJTaXplID0gMTA7XHJcbi8vICAgIGlmICghYmFzZSkgYmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL0RpYWxvZy9EaWFsb2dCZ18nKTtcclxuLy8gICAgdmFyIGltZ1N0eWxlID0gJ3dpZHRoOicgKyBib3JkZXJTaXplICsgJ3B4O2hlaWdodDonICsgYm9yZGVyU2l6ZSArICdweCc7XHJcblxyXG4vLyAgICB2YXIgYm9yZGVyU3RyaW5nO1xyXG4vLyAgICBpZiAoYWRkQm9yZGVyKSB7XHJcbi8vICAgICAgICBib3JkZXJTdHJpbmcgPSAnMXB4IHNvbGlkICM1NTU1NTUnO1xyXG4vLyAgICB9XHJcblxyXG4vLyAgICB2YXIgcyA9ICc8dGFibGUgc3R5bGU9XCJmb250LXNpemU6MXB4O3BhZGRpbmc6MHB4O21hcmdpbjowcHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtc2l6ZToxcHg7bGluZS1oZWlnaHQ6MXB4O2VtcHR5LWNlbGxzOnNob3c7XCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgPic7XHJcbi8vICAgIHMgKz0gJzx0cj48dGQgaGVpZ2h0PVwiJyArIGJvcmRlclNpemUgKyAnXCIgc3R5bGU9XCJmb250LXNpemU6MXB4XCI+PGRpdiBzdHlsZT1cImhlaWdodDonICsgYm9yZGVyU2l6ZSArICdweFwiPjxpbWcgc3JjPVwiJyArIGJhc2UgKyAnVG9wTGVmdC5wbmdcIiBzdHlsZT1cIicgKyBpbWdTdHlsZSArICdcIiBhbHQ9XCJcIiAvPjwvZGl2PjwvdGQ+PHRkIGhlaWdodD1cIicgKyBib3JkZXJTaXplICsgJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGJhc2UgKyAnZmlsbGVyLnBuZ1xcJyk7YmFrZ3JvdW5kLXJlcGVhdDpyZXBlYXRcIj48L3RkPjx0ZCBoZWlnaHQ9XCInICsgYm9yZGVyU2l6ZSArICdcIiBzdHlsZT1cImZvbnQtc2l6ZToxcHg7XCI+PGRpdiBzdHlsZT1cImhlaWdodDonICsgYm9yZGVyU2l6ZSArICdweFwiPjxpbWcgc3R5bGU9XCInICsgaW1nU3R5bGUgKyAnXCIgc3JjPVwiJyArIGJhc2UgKyAnVG9wUmlnaHQucG5nXCIgYWx0PVwiXCIgLz48L2Rpdj48L3RkPjwvdHI+JztcclxuLy8gICAgaWYgKGNhcHRpb25UZXh0KSB7XHJcbi8vICAgICAgICBzICs9ICc8dHI+PHRkIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGJhc2UgKyAnZmlsbGVyLnBuZ1xcJyk7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0XCI+PC90ZD48dGQ+PHRhYmxlIHdpZHRoPVwiMTAwJVwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwiYm9yZGVyLXRvcDonICsgYm9yZGVyU3RyaW5nICsgJztib3JkZXItbGVmdDonICsgYm9yZGVyU3RyaW5nICsgJztib3JkZXItcmlnaHQ6JyArIGJvcmRlclN0cmluZyArICc7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkZcIj48dHI+PHRkIHN0eWxlPVwicGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWxlZnQ6MTBweDsnICsgR1MuZ2V0U3R5bGVTdHJpbmcob0NhcHRpb25TdHlsZSkgKyAnXCI+JyArIGNhcHRpb25UZXh0ICsgJzwvdGQ+PHRkIGFsaWduPVwicmlnaHRcIiB2YWxpZ249XCJ0b3BcIiBzdHlsZT1cIicgKyBHUy5nZXRTdHlsZVN0cmluZyhvQ2FwdGlvblN0eWxlKSArICdcIj48ZGl2IHN0eWxlPVwicGFkZGluZy1yaWdodDo1cHg7cGFkZGluZy10b3A6NXB4O3RleHQtYWxpZ246cmlnaHQ7XCI+PGltZyBzdHlsZT1cImN1cnNvcjpwb2ludGVyXCIgb25jbGljaz1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fY2xvc2VDb21wb25lbnQoXFwnJyArIHJpZCArICdcXCcsIHRydWUpO1wiIHNyYz1cIicgKyBiYXNlICsgJ2Nsb3NlLnBuZ1wiIGFsdD1cIlwiIC8+PC9kaXY+PC90ZD48L3RyPjwvdGFibGU+PC90ZD48dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgYmFzZSArICdmaWxsZXIucG5nXFwnKTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXRcIj48L3RkPjwvdHI+JztcclxuLy8gICAgfVxyXG4vLyAgICBzICs9ICc8dHI+PHRkIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGJhc2UgKyAnZmlsbGVyLnBuZ1xcJyk7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0XCI+PC90ZD48dGQ+PGRpdiBzdHlsZT1cImJvcmRlci1ib3R0b206JyArIGJvcmRlclN0cmluZyArICc7Ym9yZGVyLWxlZnQ6JyArIGJvcmRlclN0cmluZyArICc7Ym9yZGVyLXJpZ2h0OicgKyBib3JkZXJTdHJpbmcgKyAnO2JhY2tncm91bmQtY29sb3I6I0ZGRkZGRlwiIGlkPVwiJyArIHBhcmFtc1snY29udGFpbmVySUQnXSArICdfY29udGFpbmVyXCI+PC9kaXY+PC90ZD48dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgYmFzZSArICdmaWxsZXIucG5nXFwnKTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXRcIj48L3RkPjwvdHI+JztcclxuLy8gICAgcyArPSAnPHRyPjx0ZCBoZWlnaHQ9XCInICsgYm9yZGVyU2l6ZSArICdcIiBzdHlsZT1cImZvbnQtc2l6ZToxcHg7XCI+PGRpdiBzdHlsZT1cImhlaWdodDonICsgYm9yZGVyU2l6ZSArICdweFwiPjxpbWcgc3R5bGU9XCInICsgaW1nU3R5bGUgKyAnXCIgc3JjPVwiJyArIGJhc2UgKyAnQm90dG9tTGVmdC5wbmdcIiBhbHQ9XCJcIiAvPjwvZGl2PjwvdGQ+PHRkIGhlaWdodD1cIicgKyBib3JkZXJTaXplICsgJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGJhc2UgKyAnZmlsbGVyLnBuZ1xcJyk7YmFrZ3JvdW5kLXJlcGVhdDpyZXBlYXRcIj48L3RkPjx0ZCBoZWlnaHQ9XCInICsgYm9yZGVyU2l6ZSArICdcIiBzdHlsZT1cImZvbnQtc2l6ZToxcHg7XCI+PGRpdiBzdHlsZT1cImhlaWdodDonICsgYm9yZGVyU2l6ZSArICdweFwiPjxpbWcgc3R5bGU9XCInICsgaW1nU3R5bGUgKyAnXCIgc3JjPVwiJyArIGJhc2UgKyAnQm90dG9tUmlnaHQucG5nXCIgYWx0PVwiXCIgLz48L2Rpdj48L3RkPjwvdHI+PC90YWJsZT4nO1xyXG4vLyAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcztcclxuLy8gICAgdmFyIHAgPSB7fTtcclxuLy8gICAgdmFyIGMgPSB7fTtcclxuLy8gICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XHJcbi8vICAgICAgICBwW3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XHJcbi8vICAgIH1cclxuXHJcbi8vICAgIGZvciAocGFyYW0gaW4gY29uZikge1xyXG4vLyAgICAgICAgY1twYXJhbV0gPSBjb25mW3BhcmFtXTtcclxuLy8gICAgfVxyXG5cclxuLy8gICAgZ2lneWEudXRpbHMuRE9NLl9wb3B1cENvbnRhaW5lcnNbcFsnY29udGFpbmVySUQnXV0gPSBjb250YWluZXJcclxuLy8gICAgcFsnY29udGFpbmVySUQnXSA9IHBbJ2NvbnRhaW5lcklEJ10gKyAnX2NvbnRhaW5lcic7XHJcblxyXG5cclxuLy8gICAgcFsnaGVpZ2h0J10gPSBwWydoZWlnaHQnXSAtIGJvcmRlclNpemUgKiAyO1xyXG4vLyAgICBpZiAoY2FwdGlvblRleHQpIHtcclxuLy8gICAgICAgIGlmIChjYXB0aW9uVGV4dC5yZXBsYWNlKC8gL2csICcnKSA9PSAnJykge1xyXG4vLyAgICAgICAgICAgIHBbJ2hlaWdodCddIC09IDEwO1xyXG4vLyAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICBwWydoZWlnaHQnXSAtPSBnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQubWVhc3VyZVRleHQoY2FwdGlvblRleHQsIG9DYXB0aW9uU3R5bGUpLmggKyAxMDtcclxuLy8gICAgICAgIH1cclxuLy8gICAgfVxyXG4vLyAgICBwWyd3aWR0aCddID0gcFsnd2lkdGgnXSAtIGJvcmRlclNpemUgKiAyO1xyXG5cclxuLy8gICAgcmV0dXJuIHsgYzogYywgcDogcCB9XHJcbi8vfVxyXG5cclxuXHJcbi8vZ2lneWEuZ2xvYmFsLndiciA9IGZ1bmN0aW9uIChzLCBuKSB7XHJcbi8vXHRzID0gcy5yZXBsYWNlKC9cXG4vZywgJ1xcbiAnKTtcclxuLy9cdHZhciBhcldvcmRzID0gcy5zcGxpdCgnICcpO1xyXG4vL1x0dmFyIGNoSHlwaGVuID0gJyYjMTczOyc7XHJcbi8vXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyV29yZHMubGVuZ3RoOyBpKyspIHtcclxuLy9cdFx0aWYgKGFyV29yZHNbaV0ubGVuZ3RoID4gbikge1xyXG4vL1x0XHRcdHZhciBjaEh5cGhlbkN1cnJlbnQgPSBjaEh5cGhlbjtcclxuLy9cdFx0XHR2YXIgYXJXb3JkID0gYXJXb3Jkc1tpXS5zcGxpdCgnJyk7XHJcbi8vXHRcdFx0dmFyIHN0b3AgPSBmYWxzZTtcclxuLy9cdFx0XHR2YXIgc3RvcEVuZENoYXI7XHJcbi8vXHRcdFx0dmFyIGN1cnJlbnROID0gLTE7XHJcbi8vXHRcdFx0Zm9yICh2YXIgdSA9IDA7IHUgPCBhcldvcmQubGVuZ3RoOyB1ICs9IDEpIHtcclxuLy9cdFx0XHRcdGlmICghc3RvcCkgY3VycmVudE4rKztcclxuLy9cdFx0XHRcdGlmIChjdXJyZW50TiA9PSBuKSB7XHJcbi8vXHRcdFx0XHRcdGFyV29yZC5zcGxpY2UodSwgMCwgY2hIeXBoZW5DdXJyZW50KTtcclxuLy9cdFx0XHRcdFx0Y3VycmVudE4gPSAtMTtcclxuLy9cdFx0XHRcdH1cclxuLy9cdFx0XHRcdGlmIChhcldvcmRbdV0gPT0gJyYnKSB7XHJcbi8vXHRcdFx0XHQgICAgc3RvcCA9IHRydWU7XHJcbi8vXHRcdFx0XHQgICAgc3RvcEVuZENoYXIgPSAnOyc7XHJcbi8vXHRcdFx0XHR9IGVsc2UgaWYgKGFyV29yZFt1XSA9PSAnPCcpIHtcclxuLy9cdFx0XHRcdCAgICBzdG9wID0gdHJ1ZTtcclxuLy9cdFx0XHRcdCAgICBzdG9wRW5kQ2hhciA9ICc+JztcclxuLy9cdFx0XHRcdH1cclxuLy9cdFx0XHRcdGlmIChzdG9wICYmIGFyV29yZFt1XSA9PSBzdG9wRW5kQ2hhcikgc3RvcCA9IGZhbHNlO1xyXG4vL1x0XHRcdH1cclxuLy9cdFx0XHRhcldvcmRzW2ldID0gYXJXb3JkLmpvaW4oJycpO1xyXG4vL1x0XHR9XHJcbi8vXHR9XHJcbi8vXHRyZXR1cm4gYXJXb3Jkcy5qb2luKCcgJykucmVwbGFjZSgvXFxuIC9nLCAnXFxuJyk7XHJcbi8vfVxyXG4vL2dpZ3lhLmdsb2JhbC5zY3JvbGxUb0VsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcclxuLy8gICAgaWYgKGVsKSB7XHJcbi8vICAgICAgICB2YXIgcG9zID0gZ2lneWEuZ2xvYmFsLl9HZXRFbGVtZW50UG9zKGVsKTtcclxuLy8gICAgICAgIHdpbmRvdy5zY3JvbGxUbyhwb3MubGVmdCwgcG9zLnRvcCk7XHJcbi8vICAgIH1cclxuLy99XHJcblxyXG4vL2dpZ3lhLmdsb2JhbC5zZXRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uICh0ZXh0Ym94LCBwbGFjZWhvbGRlciwgY2xhc3NOYW1lKSB7XHJcbi8vICAgIGlmICghdGV4dGJveCkgcmV0dXJuO1xyXG5cclxuLy9cdHZhciBvbmJsdXIgPSBmdW5jdGlvbiAoKSB7XHJcbi8vXHQgICAgaWYgKHRoaXMudmFsdWUgPT0gJycpIHtcclxuLy9cdCAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xyXG4vL1x0ICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRleHRib3gsIGNsYXNzTmFtZSk7XHJcbi8vXHQgICAgICAgIH0gZWxzZSB7XHJcbi8vXHQgICAgICAgICAgICB0ZXh0Ym94LnN0eWxlLmNvbG9yID0gJyM1ODU4NTgnO1xyXG4vL1x0ICAgICAgICB9XHJcbi8vXHQgICAgICAgIHRoaXMudmFsdWUgPSBwbGFjZWhvbGRlclxyXG4vL1x0ICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xlYXJlZCA9IGZhbHNlO1xyXG4vL1x0ICAgIH1cclxuLy9cdH07XHJcblxyXG4vL1x0dmFyIG9uZm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcbi8vXHQgICAgaWYgKCF0aGlzLnBsYWNlaG9sZGVyQ2xlYXJlZCkge1xyXG4vL1x0ICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbi8vXHQgICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudCh0ZXh0Ym94LCBjbGFzc05hbWUpO1xyXG4vL1x0ICAgICAgICB9IGVsc2Uge1xyXG4vL1x0ICAgICAgICAgICAgdGV4dGJveC5zdHlsZS5jb2xvciA9ICcnO1xyXG4vL1x0ICAgICAgICB9XHJcbi8vXHQgICAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuLy9cdCAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNsZWFyZWQgPSB0cnVlO1xyXG4vL1x0ICAgICAgICBpZiAodGV4dGJveC5zZXRTZWxlY3Rpb25SYW5nZSkgeyAvL3RvIGZpeCBhIGJ1ZyB3aGVyZSBzb21ldGltZXMgdGhlIGNhcmV0IGRpc2FwcGVhcnMgd2hpbGUgdGhlIHRleHRib3ggaXMgZm9jdXNlZC5cclxuLy9cdCAgICAgICAgICAgIHRleHRib3guZm9jdXMoKTtcclxuLy9cdCAgICAgICAgICAgIHRleHRib3guc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMCk7XHJcbi8vXHQgICAgICAgIH1cclxuLy9cdCAgICAgICAgZWxzZSBpZiAodGV4dGJveC5jcmVhdGVUZXh0UmFuZ2UpIHtcclxuLy9cdCAgICAgICAgICAgIHZhciByYW5nZSA9IHRleHRib3guY3JlYXRlVGV4dFJhbmdlKCk7XHJcbi8vXHQgICAgICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcclxuLy9cdCAgICAgICAgICAgIHJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIDApO1xyXG4vL1x0ICAgICAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAwKTtcclxuLy9cdCAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4vL1x0ICAgICAgICB9XHJcbi8vXHQgICAgfVxyXG4vL1x0fTtcclxuXHJcbi8vXHR0ZXh0Ym94LnJlZnJlc2hQbGFjZWhvbGRlciA9IGZ1bmN0aW9uICgpIHtcclxuLy9cdCAgICBpZiAodGV4dGJveC52YWx1ZSkge1xyXG4vLyAgICAgICAgICAgIGlmIChjbGFzc05hbWUpXHJcbi8vICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KHRleHRib3gsIGNsYXNzTmFtZSk7XHJcbi8vICAgICAgICAgICAgZWxzZVxyXG4vLyAgICAgICAgICAgICAgICB0ZXh0Ym94LnN0eWxlLmNvbG9yID0gJyc7XHJcblxyXG4vLyAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGVhcmVkID0gdHJ1ZTtcclxuLy9cdCAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgIGlmIChjbGFzc05hbWUpXHJcbi8vICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0ZXh0Ym94LCBjbGFzc05hbWUpO1xyXG4vLyAgICAgICAgICAgIGVsc2VcclxuLy8gICAgICAgICAgICAgICAgdGV4dGJveC5zdHlsZS5jb2xvciA9ICcjNTg1ODU4JztcclxuXHJcbi8vICAgICAgICAgICAgdGV4dGJveC52YWx1ZSA9IHBsYWNlaG9sZGVyO1xyXG4vL1x0ICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xlYXJlZCA9IGZhbHNlO1xyXG4vL1x0ICAgIH1cclxuLy9cdH07XHJcblxyXG4vL1x0Z2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGV4dGJveCwgJ2JsdXInLCBvbmJsdXIpO1xyXG4vL1x0Z2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGV4dGJveCwgJ2ZvY3VzJywgb25mb2N1cyk7XHJcbi8vXHRnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih0ZXh0Ym94LCAnY2hhbmdlJywgb25ibHVyKTtcclxuLy8gICAgdGV4dGJveC5yZWZyZXNoUGxhY2Vob2xkZXIoKTtcclxuLy99XHJcblxyXG4vL2dpZ3lhLmdsb2JhbC5zY2FsZUltYWdlVG9Db250YWluZXIgPSBmdW5jdGlvbiAoaW1nLCBkb250Q2VudGVyLCBmbk9uSW1nTG9hZCkge1xyXG4vL1x0aWYgKCFkb250Q2VudGVyKSB7XHJcbi8vXHRcdGltZy5wYXJlbnROb2RlLnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcclxuLy9cdFx0aW1nLnBhcmVudE5vZGUuc3R5bGUudmVydGljYWxBbGlnbiA9ICd0b3AnO1xyXG4vL1x0fVxyXG4vL1x0dmFyIHN0eWxlID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuLy9cdCAgICB2YXIgbm9kZSA9IGltZy5wYXJlbnROb2RlO1xyXG4vL1x0ICAgIHZhciBkaW0gPSBnaWd5YS5nbG9iYWwuZ2V0U3R5bGUobm9kZSwgbmFtZSk7XHJcbi8vXHQgICAgd2hpbGUgKGRpbSA9PSAnYXV0bycpIHtcclxuLy9cdCAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuLy9cdCAgICAgICAgZGltID0gZ2lneWEuZ2xvYmFsLmdldFN0eWxlKG5vZGUsIG5hbWUpO1xyXG4vL1x0ICAgIH1cclxuLy9cdCAgICB2YXIgbiA9IHBhcnNlSW50KGRpbSk7XHJcbi8vXHRcdGlmIChpc05hTihuKSkgbiA9IDA7XHJcbi8vXHRcdHJldHVybiBuO1xyXG4vL1x0fVxyXG4vL1x0Ly92YXIgc2l6ZSA9IE1hdGgubWluKGltZy5wYXJlbnROb2RlLm9mZnNldFdpZHRoLCBpbWcucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQpO1xyXG4vL1x0dmFyIHNpemUgPSBNYXRoLm1pbihzdHlsZSgnd2lkdGgnKSwgc3R5bGUoJ2hlaWdodCcpKTtcclxuLy9cdGlmIChnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSkge1xyXG4vL1x0XHR2YXIgYm9yZGVyc0FuZFBhZGRpbmdzID0gZ2lneWEuZ2xvYmFsLmdldEJvcmRlcnNBbmRQYWRkaW5ncyhpbWcucGFyZW50Tm9kZSk7XHJcbi8vXHRcdHZhciB3ID0gc3R5bGUoJ3dpZHRoJykgLSBib3JkZXJzQW5kUGFkZGluZ3MudztcclxuLy9cdFx0dmFyIGggPSBzdHlsZSgnaGVpZ2h0JykgLSBib3JkZXJzQW5kUGFkZGluZ3MuaDtcclxuLy9cdFx0c2l6ZSA9IE1hdGgubWluKHcsIGgpO1xyXG4vL1x0fVxyXG4vL1x0Z2lneWEuZ2xvYmFsLnNjYWxlSW1hZ2UoaW1nLCBzaXplLCBkb250Q2VudGVyLCBmbk9uSW1nTG9hZCk7XHJcbi8vfVxyXG5cdFxyXG4vL2dpZ3lhLmdsb2JhbC5zaG93TG9hZGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgY2xhc3NOYW1lLCBoKSB7XHJcbi8vXHRpZiAoY29udGFpbmVyKSB7XHJcbi8vXHRcdGlmICghY2xhc3NOYW1lKSBjbGFzc05hbWUgPSAnJztcclxuLy9cdFx0aWYgKCFoKSBoID0gcGFyc2VJbnQoZ2lneWEuZ2xvYmFsLmdldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcpKTtcclxuLy9cdFx0dmFyIHBhZGRpbmdUb3AgPSAoaCAtIDMyKSAvIDI7XHJcbi8vXHRcdGNvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCIgc3R5bGU9XCJoZWlnaHQ6JyArIGggKyAncHg7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2dtL2xvYWRlci5naWYnKSsgJ1xcJyk7IGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXJcIj48L2Rpdj4nO1xyXG4vL1x0fVxyXG4vL31cclxuXHRcclxuLy9naWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwgPSBmdW5jdGlvbiAodXJsLCBkZWZhdWx0VVJMKSB7XHJcbi8vXHRpZiAoZGVmYXVsdFVSTCAmJiAoIXVybCB8fCB1cmwgPT0gJycpKSB7XHJcbi8vXHRcdHJldHVybiBnaWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwoZGVmYXVsdFVSTCk7XHJcbi8vXHR9XHJcbi8vXHRpZiAodXJsICYmIHVybCE9JycgJiYgZ2lneWEudGhpc1NjcmlwdC5wcm90b2NvbCA9PSAnaHR0cHMnICYmIHVybC5pbmRleE9mKCdodHRwOicpID09IDApIHtcclxuLy9cdCAgICByZXR1cm4gZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL3Byb3h5L3Bob3Rvcy5hc2h4P3U9JyArIGdpZ3lhLnV0aWxzLlVSTC5VUkxFbmNvZGUodXJsKSk7XHJcbi8vXHR9IGVsc2Uge1xyXG4vL1x0XHRyZXR1cm4gdXJsO1xyXG4vL1x0fVxyXG4vL31cclxuXHRcclxuLy9naWd5YS5nbG9iYWwuc2NhbGVJbWFnZSA9IGZ1bmN0aW9uIChpbWcsIHNpemUsIGRvbnRDZW50ZXIsIGZuT25JbWdMb2FkKSB7XHJcbi8vXHR2YXIgaW1nT2JqID0gaW1nO1xyXG4vL1x0aWYgKCFpbWcud2lkdGggfHwgIWltZy5oZWlnaHQpIHtcclxuLy9cdFx0dmFyIGltZ09iaiA9IG5ldyBJbWFnZSgpO1xyXG4vL1x0XHRpbWdPYmouc3JjID0gaW1nLnNyYztcclxuLy9cdH1cclxuLy9cdHZhciBmbk9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuLy9cdFx0aWYgKGltZ09iai53aWR0aCA9PSAwKSB7XHJcbi8vXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZm5PbkxvYWQsIDEwMClcclxuLy9cdFx0fSBlbHNlIHtcclxuLy9cdFx0XHRpZiAoaW1nT2JqLndpZHRoID4gaW1nT2JqLmhlaWdodCkge1xyXG4vL1x0XHRcdFx0aW1nLnN0eWxlLndpZHRoID0gc2l6ZSArICdweCc7XHJcbi8vXHRcdFx0fSBlbHNlIHtcclxuLy9cdFx0XHRcdGltZy5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcclxuLy9cdFx0XHR9XHJcblx0XHJcbi8vXHRcdFx0aW1nLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuLy9cdFx0XHRpZiAoZm5PbkltZ0xvYWQpIGZuT25JbWdMb2FkKGltZyk7XHJcbi8vXHRcdFx0aWYgKCFkb250Q2VudGVyKSB7XHJcbi8vXHRcdFx0XHRpbWcuc3R5bGUubWFyZ2luVG9wID0gKHNpemUgLSBpbWcub2Zmc2V0SGVpZ2h0KSAvIDIgKyAncHgnXHJcbi8vXHRcdFx0XHRpbWcuc3R5bGUubWFyZ2luTGVmdCA9IChzaXplIC0gaW1nLm9mZnNldFdpZHRoKSAvIDIgKyAncHgnXHJcbi8vXHRcdFx0fVxyXG4vL1x0XHR9XHJcbi8vXHR9XHJcbi8vXHRpZiAoaW1nT2JqLndpZHRoID4gMCkge1xyXG4vL1x0XHRmbk9uTG9hZCgpO1xyXG4vL1x0fSBlbHNlIHtcclxuLy9cdFx0aW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbi8vXHRcdGltZ09iai5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IHdpbmRvdy5zZXRUaW1lb3V0KGZuT25Mb2FkLCA1MCkgfTtcclxuLy9cdH1cclxuLy99XHJcblxyXG4vL2dpZ3lhLmdsb2JhbC5jcmVhdGVHTUJhbGxvb24gPSBmdW5jdGlvbiAoYm9keSwgY2FwdGlvblRleHQsIHcsIGgsIG51YlksIG51YlBvc2l0aW9uLCBoaWRlQ2xvc2UsIGlkLCBkb250SGlkZU9uQ2xpY2ssIGJhbGxvb25DbGFzcykge1xyXG4vLyAgICBiYWxsb29uQ2xhc3MgPSBiYWxsb29uQ2xhc3MgPyAnZ2lnLWJhbGxvb24gJyArIGJhbGxvb25DbGFzcyA6ICdnaWctYmFsbG9vbic7XHJcbi8vXHRnaWd5YS5nbG9iYWwucmVtb3ZlR01CYWxsb29uKCk7XHJcbi8vXHR2YXIgbm93ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuLy9cdHZhciBiYWxsb29uSUQgPSAnZ2lnX2dtQmFsbG9vbl8nICsgbm93O1xyXG4vL1x0aWYgKGlkKSBiYWxsb29uSUQgPSBpZDtcclxuLy9cdHZhciBmcmFtZUlEID0gYmFsbG9vbklEICsgJ19mcmFtZSc7XHJcbi8vXHR2YXIgYmFsbG9vbkhUTUwgPSBnaWd5YS5nbG9iYWwuZ2V0QmFsbG9vbkhUTUwoYm9keSwgY2FwdGlvblRleHQsIHcsIGgsIG51YlksIG51YlBvc2l0aW9uLCBoaWRlQ2xvc2UsICdnaWd5YS5nbG9iYWwucmVtb3ZlR01CYWxsb29uKCknLCBmcmFtZUlEKTtcclxuLy9cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy9cdGRpdi5jbGFzc05hbWUgPSBiYWxsb29uQ2xhc3M7XHJcbi8vXHRkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4vL1x0ZGl2LnN0eWxlLnpJbmRleCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXROZXh0WkluZGV4KCk7XHJcbi8vXHRkaXYuaW5uZXJIVE1MID0gYmFsbG9vbkhUTUw7XHJcbi8vXHRkaXYuaWQgPSBiYWxsb29uSUQ7XHJcblx0XHJcbi8vXHRnaWd5YS5nbG9iYWwuZmFkZUluKGRpdik7XHJcbi8vXHRnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGRpdik7XHJcbi8vXHRnaWd5YS5nbG9iYWwuZGl2R01CYWxsb29uID0gZGl2O1xyXG5cdFxyXG4vL1x0aWYgKCFkb250SGlkZU9uQ2xpY2spIHtcclxuLy9cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4vL1x0XHRcdGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkge1xyXG4vL1x0XHRcdFx0ZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbmNsaWNrXCIsIGdpZ3lhLmdsb2JhbC5yZW1vdmVHTUJhbGxvb24pXHJcbi8vXHRcdFx0fSBlbHNlIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbi8vXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2lneWEuZ2xvYmFsLnJlbW92ZUdNQmFsbG9vbiwgZmFsc2UpXHJcbi8vXHRcdFx0fVxyXG4vL1x0XHR9LCA1MCk7XHJcbi8vXHR9XHJcbi8vXHRyZXR1cm4gZGl2O1xyXG4vL31cclxuLy9naWd5YS5nbG9iYWwuZmFkZUluID0gZnVuY3Rpb24gKGVsKSB7XHJcbi8vXHRpZiAoZWwuaW50ZXJ2YWwpIHtcclxuLy9cdFx0Y2xlYXJJbnRlcnZhbChlbC5pbnRlcnZhbCk7XHJcbi8vXHR9XHJcbi8vXHRlbC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4vL1x0ZWwuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbi8vXHRcdHZhciBvcCA9IHBhcnNlRmxvYXQoZWwuc3R5bGUub3BhY2l0eSk7XHJcbi8vXHRcdGlmIChvcCA+PSAxKSBjbGVhckludGVydmFsKGVsLmludGVydmFsKTtcclxuLy9cdFx0ZWwuc3R5bGUub3BhY2l0eSA9IG9wICsgMC4xO1xyXG4vL1x0fSwgMTApO1xyXG4vL31cclxuXHRcclxuLy9naWd5YS5nbG9iYWwuZ2V0Qm9yZGVyc0FuZFBhZGRpbmdzID0gZnVuY3Rpb24gKGVsKSB7XHJcbi8vXHR2YXIgc3R5bGUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4vL1x0XHR2YXIgbiA9IHBhcnNlSW50KGdpZ3lhLmdsb2JhbC5nZXRTdHlsZShlbCwgbmFtZSkpO1xyXG4vL1x0XHRpZiAoaXNOYU4obikpIG4gPSAwO1xyXG4vL1x0XHRyZXR1cm4gbjtcclxuLy9cdH1cclxuLy9cdHJldHVybiB7XHJcbi8vXHRcdHc6IHN0eWxlKCdib3JkZXItbGVmdC13aWR0aCcpICsgc3R5bGUoJ2JvcmRlci1yaWdodC13aWR0aCcpICsgc3R5bGUoJ3BhZGRpbmctcmlnaHQnKSArIHN0eWxlKCdwYWRkaW5nLWxlZnQnKSxcclxuLy9cdFx0aDogc3R5bGUoJ2JvcmRlci10b3Atd2lkdGgnKSArIHN0eWxlKCdib3JkZXItYm90dG9tLXdpZHRoJykgKyBzdHlsZSgncGFkZGluZy10b3AnKSArIHN0eWxlKCdwYWRkaW5nLWJvdHRvbScpXHJcbi8vXHR9XHJcbi8vfVxyXG5cclxuLy9naWd5YS5nbG9iYWwuZ2V0Q2xhc3NJbm5lclNpemUgPSBmdW5jdGlvbiAoY2xhc3NOYW1lLCB3LCBoKSB7XHJcbi8vXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy9cdGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuLy9cdGdpZ3lhLnV0aWxzLkRPTS5hcHBlbmRUb0JvZHkoZWwpO1xyXG4vL1x0dmFyIGJvcmRlcnNBbmRQYWRkaW5ncyA9IGdpZ3lhLmdsb2JhbC5nZXRCb3JkZXJzQW5kUGFkZGluZ3MoZWwpO1xyXG4vL1x0dyAtPSBib3JkZXJzQW5kUGFkZGluZ3MudztcclxuLy9cdGggLT0gYm9yZGVyc0FuZFBhZGRpbmdzLmg7XHJcbi8vXHRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcclxuLy9cdHJldHVybiB7IHc6IHcsIGg6IGggfVxyXG4vL31cclxuXHJcbi8vZ2lneWEuZ2xvYmFsLmFwcGx5RWxsaXBzaXMgPSBmdW5jdGlvbiAodGV4dCwgbWF4UmVhbENoYXJzKSB7XHJcbi8vXHR2YXIgcGZ4ID0gJyc7XHJcbi8vXHR2YXIgdGFnc3RhY2sgPSBbXTtcclxuLy9cdHZhciByZVRhZyA9IC9cXDwoXFwvKT8oW14gXFwvPl0rKVsgXT9bXj5dKihcXC8pP1xcPi9pO1xyXG4vL1x0dmFyIHJlYWxDaGFycyA9IDA7XHJcblxyXG4vL1x0Zm9yICh2YXIgaSA9IDA7ICgoaSA8IHRleHQubGVuZ3RoKSAmJiAoKHJlYWxDaGFycyA8IG1heFJlYWxDaGFycykgfHwgKG1heFJlYWxDaGFycyA9PSAwKSkpOyApIHtcclxuLy9cdFx0dmFyIGNoID0gdGV4dC5zdWJzdHIoaSwgMSk7XHJcbi8vXHRcdGlmIChjaCA9PSAnPCcpIHtcclxuLy9cdFx0XHR2YXIgaWR4Q2xvc2VUYWcgPSB0ZXh0LmluZGV4T2YoJz4nLCBpKTtcclxuLy9cdFx0XHR2YXIgdGFnID0gdGV4dC5zdWJzdHJpbmcoaSwgaWR4Q2xvc2VUYWcgKyAxKTtcclxuLy9cdFx0XHRyZVRhZy5sYXN0SW5kZXggPSAwO1xyXG4vL1x0XHRcdHZhciBtYXRjaGVzID0gcmVUYWcuZXhlYyh0YWcpOyAvLyAxPS8/IDI9dGFnbmFtZSAzPXRyYWlsaW5nIC8gMD1hbGxcclxuLy9cdFx0XHQvKmlmIChtYXRjaGVzID09IG51bGwpIHtcclxuLy9cdFx0XHQvL2FsZXJ0KHRhZyArICdcXG4gSXMgTUFMRk9STUVEJyk7XHJcbi8vXHRcdFx0fSovXHJcbi8vXHRcdFx0dmFyIHRhZ25hbWUgPSBtYXRjaGVzWzJdLnRvTG93ZXJDYXNlKCk7XHJcbi8vXHRcdFx0aWYgKG1hdGNoZXNbMV0gPT0gJy8nKSB7IC8vY2xvc2luZyB0YWdcclxuLy9cdFx0XHRcdGlmICgodGFnc3RhY2subGVuZ3RoID4gMCkgJiYgKHRhZ3N0YWNrW3RhZ3N0YWNrLmxlbmd0aCAtIDFdLnRhZ25hbWUgPT0gdGFnbmFtZSkpIHtcclxuLy9cdFx0XHRcdFx0dGFnc3RhY2sucG9wKCk7XHJcbi8vXHRcdFx0XHR9XHJcbi8vXHRcdFx0fVxyXG4vL1x0XHRcdGVsc2UgeyAvL25ldyB0YWdcclxuLy9cdFx0XHRcdGlmIChtYXRjaGVzWzNdID09ICcvJykgeyAvL25vdGhpbmcgdG8gZG8gKG5vdGhpbmcgdG8gcHVzaCBvbnRvIHRoZSBzdGFjayksIHJlc3QgaXMgY29tbW9uXHJcbi8vXHRcdFx0XHR9XHJcbi8vXHRcdFx0XHRlbHNlIHtcclxuLy9cdFx0XHRcdFx0dmFyIGNsQWxsID0gJzwvJyArIG1hdGNoZXNbMl0gKyAnPidcclxuLy9cdFx0XHRcdFx0aWYgKHRhZ3N0YWNrLmxlbmd0aCA+IDApIGNsQWxsICs9IHRhZ3N0YWNrW3RhZ3N0YWNrLmxlbmd0aCAtIDFdLmNsO1xyXG4vL1x0XHRcdFx0XHR0YWdzdGFjay5wdXNoKHsgdGFnbmFtZTogbWF0Y2hlc1syXSwgY2w6IGNsQWxsIH0pO1xyXG5cclxuLy9cdFx0XHRcdH1cclxuLy9cdFx0XHR9XHJcbi8vXHRcdFx0cGZ4ICs9IG1hdGNoZXNbMF07XHJcbi8vXHRcdFx0aSArPSBtYXRjaGVzWzBdLmxlbmd0aCAtIDE7XHJcblxyXG4vL1x0XHR9XHJcbi8vXHRcdGVsc2UgaWYgKGNoID09ICcmJykge1xyXG4vL1x0XHRcdHZhciBpZHhDbG9zZUVudGl0eSA9IHRleHQuaW5kZXhPZignOycsIGkpO1xyXG4vL1x0XHRcdGlmIChpZHhDbG9zZUVudGl0eSAtIGkgPiA4KSB7XHJcbi8vXHRcdFx0XHRwZnggKz0gJyYnXHJcbi8vXHRcdFx0fVxyXG4vL1x0XHRcdGVsc2Uge1xyXG4vL1x0XHRcdFx0cGZ4ICs9IHRleHQuc3Vic3RyaW5nKGksIGlkeENsb3NlRW50aXR5ICsgMSk7XHJcbi8vXHRcdFx0XHRpID0gaWR4Q2xvc2VFbnRpdHk7XHJcbi8vXHRcdFx0fVxyXG4vL1x0XHRcdHJlYWxDaGFycysrO1xyXG4vL1x0XHR9XHJcbi8vXHRcdGVsc2Uge1xyXG4vL1x0XHRcdHBmeCArPSBjaDtcclxuLy9cdFx0XHRyZWFsQ2hhcnMrKztcclxuLy9cdFx0fVxyXG4vL1x0XHRpKys7XHJcbi8vXHR9XHJcbi8vXHRpZiAocmVhbENoYXJzIDwgbWF4UmVhbENoYXJzKSB7XHJcbi8vXHRcdHJldHVybiB0ZXh0O1xyXG4vL1x0fVxyXG4vL1x0ZWxzZSB7XHJcbi8vXHRcdHJldHVybiBwZnggKyAnJiMxMzM7JyArICgodGFnc3RhY2subGVuZ3RoID4gMCkgPyAodGFnc3RhY2tbdGFnc3RhY2subGVuZ3RoIC0gMV0uY2wpIDogJycpO1xyXG4vL1x0fVxyXG4vL31cclxuXHJcbi8vZ2lneWEuZ2xvYmFsLmdldENsYXNzQm9yZGVyc0FuZFBhZGRpbmdzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4vL1x0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vXHRlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbi8vXHRnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGVsKTtcclxuLy9cdHZhciBib3JkZXJzQW5kUGFkZGluZ3MgPSBnaWd5YS5nbG9iYWwuZ2V0Qm9yZGVyc0FuZFBhZGRpbmdzKGVsKTtcclxuLy9cdGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xyXG4vL1x0cmV0dXJuIGJvcmRlcnNBbmRQYWRkaW5ncztcclxuLy99XHJcblxyXG4vL2dpZ3lhLmdsb2JhbC5nZXRCYWxsb29uSFRNTCA9IGZ1bmN0aW9uIChib2R5LCBjYXB0aW9uVGV4dCwgdywgaCwgbnViWSwgbnViUG9zaXRpb24sIGhpZGVDbG9zZSwgc09uQ2xvc2UsIGZyYW1lSUQpIHtcclxuLy8gICAgdmFyIGRpcmVjdGlvbjtcclxuLy8gICAgdmFyIG51YlcgPSAxMztcclxuLy8gICAgdmFyIG51YkggPSAyNTtcclxuLy8gICAgaWYgKCFnaWd5YS5nbG9iYWwuYWRkZWRCYWxsb29uQ1NTKSB7XHJcbi8vICAgICAgICBnaWd5YS5nbG9iYWwuYWRkQ1NTKFtcclxuLy9cdFx0XHQnLmdpZy1iYWxsb29ucyAqLCBkaXYuZ2lnLWJhbGxvb25zLCAuZ2lnLWJhbGxvb25zIHNwYW4sIC5naWctYmFsbG9vbnMgYTpob3ZlciwgLmdpZy1iYWxsb29ucyBhOnZpc2l0ZWQsIC5naWctYmFsbG9vbnMgYTpsaW5rLCAuZ2lnLWJhbGxvb25zIGE6YWN0aXZleycsXHJcbi8vXHRcdFx0XHQnYm9yZGVyOm5vbmU7IGxpbmUtaGVpZ2h0Om5vcm1hbDtwYWRkaW5nOjBweDttYXJnaW46MHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7d2lkdGg6YXV0bztmbG9hdDpub25lOy1tb3otYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MDsnLFxyXG4vL1x0XHRcdFx0J2ZvbnQtZmFtaWx5OmFyaWFsO2ZvbnQtc2l6ZToxMHB4O2NvbG9yOiM3OTc5Nzk7YmFja2dyb3VuZDpub25lO3RleHQtYWxpZ246bGVmdH0nLFxyXG4vL1x0XHRcdCdkaXYuZ2lnLWJhbGxvb24tZnJhbWUgeycsXHJcbi8vXHRcdFx0XHQnem9vbToxO3BhZGRpbmc6MTVweCAxMHB4IDEwcHggMTBweDsgYm9yZGVyOjFweCBzb2xpZCAjYjRiNGI0OyBtaW4taGVpZ2h0OjgwcHg7IGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjsgei1pbmRleDonICsgKGdpZ3lhLnV0aWxzLkRPTS5nZXROZXh0WkluZGV4KCkpICsgJzsnLFxyXG4vL1x0XHRcdFx0J2JveC1zaGFkb3c6MCAwIDVweCBSR0JBKDAsMCwwLDAuNik7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCA1cHggUkdCQSgwLDAsMCwwLjYpOy1tb3otYm94LXNoYWRvdzowIDAgNXB4IFJHQkEoMCwwLDAsMC42KTt9JyxcclxuLy8gICAgICAgICAgICAnZGl2LmdpZy1iYWxsb29uLW51YiB7bGVmdDorMXB4OyBwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWltYWdlOnVybChcIicgKyBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9udWIucG5nJykgKyAnXCIpO3dpZHRoOicgKyBudWJXICsgJ3B4O2hlaWdodDonICsgbnViSCArICdweDsgei1pbmRleDonICsgKGdpZ3lhLnV0aWxzLkRPTS5nZXROZXh0WkluZGV4KCkpICsgJyB9JyxcclxuLy9cdFx0XHQnZGl2LmdpZy1iYWxsb29uLW51Yi1yaWdodCB7IGxlZnQ6LTFweDsgcG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCInICsgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vbnViX3JpZ2h0LnBuZycpICsgJ1wiKTt3aWR0aDonICsgbnViVyArICdweDtoZWlnaHQ6JyArIG51YkggKyAncHg7IHotaW5kZXg6JyArIChnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpKSArICcgfScsXHJcbi8vICAgICAgICAgICAgJ2Rpdi5naWctYmFsbG9vbi1udWItdXAgeyB0b3A6KzFweDsgcG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCInICsgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vbnViX3VwLnBuZycpICsgJ1wiKTt3aWR0aDonICsgbnViSCArICdweDtoZWlnaHQ6JyArIG51YlcgKyAncHg7IHotaW5kZXg6JyArIChnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpKSArICcgfScsXHJcbi8vICAgICAgICAgICAgJ2Rpdi5naWctYmFsbG9vbi1udWItZG93biB7IHRvcDotMXB4OyBwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWltYWdlOnVybChcIicgKyBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9udWJfZG93bi5wbmcnKSArICdcIik7d2lkdGg6JyArIG51YkggKyAncHg7aGVpZ2h0OicgKyBudWJXICsgJ3B4OyB6LWluZGV4OicgKyAoZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKSkgKyAnIH0nLFxyXG4vL1x0XHRcdCdzcGFuLmdpZy1iYWxsb29uLWNsb3NlSW1hZ2UgeyBjdXJzb3I6cG9pbnRlcjsgZmxvYXQ6cmlnaHQ7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCInICsgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vQ2xvc2VCdXR0b24ucG5nJykgKyAnXCIpOyB3aWR0aDoxNHB4O2hlaWdodDoxNHB4OyBtYXJnaW46LTdweCAtMnB4IDAgMCAgfScsXHJcbi8vXHRcdFx0J2Rpdi5naWctYmFsbG9vbi1jYXB0aW9uIHtmb250LWZhbWlseTphcmlhbDsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjogIzBiODFjMTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7cGFkZGluZy1ib3R0b206MnB4O30nLFxyXG4vL1x0XHRcdCdzcGFuLmdpZy1iYWxsb29uLWNhcHRpb24tdGV4dCB7ZmxvYXQ6bGVmdH0nXHJcbi8vICAgICAgICBdKTtcclxuLy8gICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRSAmJiAhKCFnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSAmJiBnaWd5YS5sb2NhbEluZm8uaXNJRTkpKSB7XHJcbi8vICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLmFkZENTUyhbXHJcbi8vXHRcdFx0XHQnZGl2LmdpZy1iYWxsb29uLWZyYW1lIHsnLFxyXG4vL1x0XHRcdFx0XHQnLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuU2hhZG93KFN0cmVuZ3RoPTQsIERpcmVjdGlvbj0xMzUsIENvbG9yPVxcJyNCNEI0QjRcXCcpO1wiOycsXHJcbi8vXHRcdFx0XHRcdCdmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5TaGFkb3coU3RyZW5ndGg9NCwgRGlyZWN0aW9uPTEzNSwgQ29sb3I9XFwnI0I0QjRCNFxcJyk7fScsXHJcbi8vXHRcdFx0XHQnfScsXHJcbi8vXHRcdFx0XHQnZGl2LmdpZy1iYWxsb29uLW51Yi1yaWdodCB7IGxlZnQ6LTVweDt9J1xyXG4vLyAgICAgICAgICAgIF0pO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgZ2lneWEuZ2xvYmFsLmFkZGVkQmFsbG9vbkNTUyA9IHRydWU7XHJcbi8vICAgIH1cclxuLy8gICAgdmFyIGZyYW1lU3R5bGUgPSAnJztcclxuLy8gICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5xdWlya3NNb2RlKSB7XHJcbi8vICAgICAgICB2YXIgYm9yZGVyc0FuZFBhZGRpbmdzID0gZ2lneWEuZ2xvYmFsLmdldENsYXNzQm9yZGVyc0FuZFBhZGRpbmdzKCdnaWctYmFsbG9vbi1mcmFtZScpO1xyXG4vLyAgICAgICAgaWYgKHcpIHcgPSB3ICsgYm9yZGVyc0FuZFBhZGRpbmdzLnc7XHJcbi8vICAgICAgICBpZiAoaCkgaCA9IGggKyBib3JkZXJzQW5kUGFkZGluZ3MuaDtcclxuLy8gICAgfVxyXG4vLyAgICBpZiAodykgZnJhbWVTdHlsZSArPSAnd2lkdGg6ICcgKyB3ICsgJ3B4Oyc7XHJcbi8vICAgIGlmIChoKSBmcmFtZVN0eWxlICs9ICdoZWlnaHQ6ICcgKyBoICsgJ3B4Oyc7XHJcbi8vICAgIHZhciBudWJTdHlsZSA9ICcnO1xyXG4vLyAgICBpZiAobnViWSkge1xyXG4vLyAgICAgICAgaWYgKChudWJQb3NpdGlvbiA9PT0gJ2xlZnQnKSB8fCAobnViUG9zaXRpb24gPT09ICdyaWdodCcpKVxyXG4vLyAgICAgICAgICAgIG51YlN0eWxlICs9ICd0b3A6ICcgKyBudWJZICsgJ3B4Oyc7XHJcbi8vICAgICAgICBlbHNlIC8vICgobnViUG9zaXRpb24gPT09ICd1cCcpIHx8IChudWJQb3NpdGlvbiA9PT0gJ2Rvd24nKSlcclxuLy8gICAgICAgICAgICBudWJTdHlsZSArPSAnbGVmdDogJyArIG51YlkgKyAncHg7JztcclxuLy8gICAgfVxyXG5cclxuLy8gICAgdmFyIGlubmVySFRNTCA9ICcnO1xyXG4vLyAgICBpZiAoY2FwdGlvblRleHQpIHtcclxuLy8gICAgICAgIGlubmVySFRNTCArPSAnPGRpdiBjbGFzcz1cImdpZy1iYWxsb29uLWNhcHRpb25cIj48c3BhbiBjbGFzcz1cImdpZy1iYWxsb29uLWNhcHRpb24tdGV4dFwiIHN0eWxlPVwid2lkdGg6JyArICh3IC0gMjApICsgJ3B4XCI+JyArIGNhcHRpb25UZXh0ICsgJzwvc3Bhbj4nO1xyXG4vLyAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgaW5uZXJIVE1MICs9ICc8ZGl2IGNsYXNzPVwiZ2lnLWJhbGxvb24tY2FwdGlvblwiIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTpub25lXCI+JztcclxuLy8gICAgfVxyXG4vLyAgICBpZiAoIWhpZGVDbG9zZSAmJiBzT25DbG9zZSkge1xyXG4vLyAgICAgICAgaW5uZXJIVE1MICs9ICc8c3BhbiBjbGFzcz1cImdpZy1iYWxsb29uLWNsb3NlSW1hZ2VcIiBvbmNsaWNrPVwiJyArIHNPbkNsb3NlICsgJ1wiPjwvc3Bhbj4nO1xyXG4vLyAgICB9XHJcbi8vICAgIGlubmVySFRNTCArPSAnPGRpdiBzdHlsZT1cImNsZWFyOmJvdGg7aGVpZ2h0OjA7d2lkdGg6MDtmb250LXNpemU6MXB4O1wiPjwhLS0gZW1wdHkgZGl2cz0xMDAlIGhlaWdodCBJRSAtLT48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiZ2lnLWJhbGxvb24tYm9keVwiPicgKyBib2R5ICsgJzwvZGl2Pic7XHJcbi8vICAgIHZhciBzO1xyXG4vLyAgICBpZiAoIW51YlkpIHtcclxuLy8gICAgICAgIHMgPSAnPGRpdiBjbGFzcz1cImdpZy1iYWxsb29uIGdpZy1iYWxsb29uLWZyYW1lXCIgc3R5bGU9XCInICsgZnJhbWVTdHlsZSArICdcIj4nICsgaW5uZXJIVE1MICsgJzwvZGl2Pic7XHJcbi8vICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICBzID0gJzx0YWJsZSBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBjbGFzcz1cImdpZy1iYWxsb29uXCI+PHRyPic7XHJcbi8vICAgICAgICBpZiAobnViUG9zaXRpb24gPT09ICd1cCcpIHtcclxuLy8gICAgICAgICAgICBzICs9ICc8dGQgc3R5bGU9XCJcIj48ZGl2IGNsYXNzPVwiZ2lnLWJhbGxvb24tbnViLXVwXCIgc3R5bGU9XCInICsgbnViU3R5bGUgKyAnXCI+PC9kaXY+PC90ZD48L3RyPjx0cj4nO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgaWYgKG51YlBvc2l0aW9uID09PSAnbGVmdCcpIHsgLy8gY2hlY2sgZm9yIG90aGVyIHZhbHVlc1xyXG4vLyAgICAgICAgICAgIHMgKz0gJzx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOnRvcFwiPjxkaXYgY2xhc3M9XCJnaWctYmFsbG9vbi1udWJcIiBzdHlsZT1cIicgKyBudWJTdHlsZSArICdcIj48L2Rpdj48L3RkPic7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgICBzICs9ICc8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIj48ZGl2IGlkPVwiJyArIGZyYW1lSUQgKyAnXCIgY2xhc3M9XCJnaWctYmFsbG9vbi1mcmFtZVwiIHN0eWxlPVwiJyArIGZyYW1lU3R5bGUgKyAnXCI+JyArIGlubmVySFRNTCArICc8L2Rpdj48L3RkPic7XHJcbi8vICAgICAgICBpZiAobnViUG9zaXRpb24gPT09ICdyaWdodCcpIHtcclxuLy8gICAgICAgICAgICBzICs9ICc8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIj48ZGl2IGNsYXNzPVwiZ2lnLWJhbGxvb24tbnViLXJpZ2h0XCIgc3R5bGU9XCInICsgbnViU3R5bGUgKyAnXCI+PC9kaXY+PC90ZD4nO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgaWYgKG51YlBvc2l0aW9uID09PSAnZG93bicpIHtcclxuLy8gICAgICAgICAgICBzICs9ICc8L3RyPjx0cj48dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIj48ZGl2IGNsYXNzPVwiZ2lnLWJhbGxvb24tbnViLWRvd25cIiBzdHlsZT1cIicgKyBudWJTdHlsZSArICdcIj48L2Rpdj48L3RkPic7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgICBzICs9ICc8L3RyPjwvdGFibGU+JztcclxuLy8gICAgICAgIHMgKz0gJzxkaXYgc3R5bGU9XCJjbGVhcjpib3RoO2hlaWdodDowO3dpZHRoOjA7Zm9udC1zaXplOjFweDtcIj48IS0tIGVtcHR5IGRpdnM9MTAwJSBoZWlnaHQgSUUgLS0+PC9kaXY+JztcclxuLy8gICAgfVxyXG4vLyAgICByZXR1cm4gcztcclxuLy99XHJcblxyXG4vL2dpZ3lhLmdsb2JhbC5hZGRJZnJhbWVTaGltID0gZnVuY3Rpb24gKGVsLCBwYXJlbnQpIHtcclxuLy9cdGlmIChlbC5zaGltKSByZXR1cm47XHJcbi8vXHR2YXIgc2hpbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lGUkFNRScpO1xyXG4vL1x0c2hpbS5mcmFtZWJvcmRlciA9IFwiMFwiO1xyXG4vL1x0c2hpbS5mcmFtZUJvcmRlciA9IFwiMFwiO1xyXG4vL1x0c2hpbS5hbGxvd3RyYW5zcGFyZW5jeSA9IHRydWU7XHJcbi8vXHRzaGltLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuLy9cdHNoaW0udXBkYXRlID0gZnVuY3Rpb24gKHVwZGF0ZURpbWVuc2lvbnMpIHtcclxuLy9cdFx0aWYgKHNoaW0gJiYgZWwpIHtcclxuLy9cdFx0ICAgIGlmIChwYXJlbnQpIHtcclxuLy9cdFx0XHRcdHNoaW0uc3R5bGUubGVmdCA9IGVsLm9mZnNldExlZnQgKyAncHgnO1xyXG4vL1x0XHRcdFx0c2hpbS5zdHlsZS50b3AgPSBlbC5vZmZzZXRUb3AgKyAncHgnO1xyXG4vL1x0XHRcdH0gZWxzZSB7XHJcbi8vXHRcdFx0XHR2YXIgcG9zID0gZ2lneWEuZ2xvYmFsLl9HZXRFbGVtZW50UG9zKGVsKTtcclxuLy9cdFx0XHRcdHNoaW0uc3R5bGUubGVmdCA9IHBvcy5sZWZ0ICsgJ3B4JztcclxuLy9cdFx0XHRcdHNoaW0uc3R5bGUudG9wID0gcG9zLnRvcCArICdweCc7XHJcbi8vXHRcdFx0fVxyXG4vL1x0XHRcdGlmICh1cGRhdGVEaW1lbnNpb25zKSB7XHJcbi8vXHRcdFx0XHRzaGltLnN0eWxlLndpZHRoID0gZWwub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4vL1x0XHRcdFx0c2hpbS5zdHlsZS5oZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4vL1x0XHRcdH1cclxuLy9cdFx0fVxyXG4vL1x0fVxyXG4vL1x0c2hpbS51cGRhdGUodHJ1ZSk7XHJcbi8vXHRpZiAocGFyZW50KSB7XHJcbi8vXHRcdHNoaW0uc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKTtcclxuLy9cdFx0ZWwuc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKTtcclxuLy9cdFx0cGFyZW50LmFwcGVuZENoaWxkKHNoaW0pO1xyXG4vL1x0fSBlbHNlIHtcclxuLy9cdFx0Z2lneWEudXRpbHMuRE9NLmFwcGVuZFRvQm9keShzaGltKTtcclxuLy9cdH1cclxuXHJcbi8vXHRlbC5zaGltID0gc2hpbTtcclxuLy99XHJcblxyXG4vL2dpZ3lhLmdsb2JhbC5yZW1vdmVJZnJhbWVTaGltID0gZnVuY3Rpb24gKGVsKSB7XHJcbi8vXHRpZiAoZWwgJiYgZWwuc2hpbSAmJiBlbC5zaGltLnBhcmVudE5vZGUpIHtcclxuLy9cdFx0ZWwuc2hpbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsLnNoaW0pO1xyXG4vL1x0XHRlbC5zaGltID0gbnVsbDtcclxuLy9cdH1cclxuLy99XHJcblxyXG4vL2dpZ3lhLmdsb2JhbC5maWxsVXNlckFjdGlvblRlbXBsYXRlID0gZnVuY3Rpb24gKHVzZXJBY3Rpb24sIG8pIHtcclxuLy9cdGZvciAodmFyIHAgaW4gdXNlckFjdGlvbikge1xyXG4vL1x0XHR2YXIgZmllbGQgPSB1c2VyQWN0aW9uW3BdO1xyXG4vL1x0XHRpZiAodHlwZW9mIGZpZWxkID09ICdzdHJpbmcnKSB7XHJcbi8vXHRcdFx0dXNlckFjdGlvbltwXSA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHVzZXJBY3Rpb25bcF0sIG8pO1xyXG4vL1x0XHR9XHJcbi8vXHRcdGlmIChwID09ICdtZWRpYUl0ZW1zJykge1xyXG4vL1x0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGQubGVuZ3RoOyBpKyspIHtcclxuLy9cdFx0XHRcdGlmIChmaWVsZFtpXS5zcmMpIHtcclxuLy9cdFx0XHRcdFx0ZmllbGRbaV0uc3JjID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoZmllbGRbaV0uc3JjLCBvKTtcclxuLy9cdFx0XHRcdH1cclxuLy9cdFx0XHR9XHJcbi8vXHRcdH1cclxuLy9cdH1cclxuLy9cdHJldHVybiB1c2VyQWN0aW9uO1xyXG4vL31cclxuXHJcbi8vZ2lneWEuZ2xvYmFsLnByZWxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoYXJJbWFnZXMsIGZuQ2FsbGJhY2spIHtcclxuLy9cdHZhciBhckltYWdlT2JqZWN0cyA9IFtdO1xyXG4vL1x0dmFyIGxvYWRlZCA9IDA7XHJcbi8vXHR2YXIgZm5jSW1nT25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4vL1x0XHRsb2FkZWQrKztcclxuLy9cdFx0aWYgKGxvYWRlZCA9PSBhckltYWdlcy5sZW5ndGgpIHtcclxuLy9cdFx0XHRmbkNhbGxiYWNrKCk7XHJcbi8vXHRcdH1cclxuLy9cdH1cclxuLy9cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJJbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuLy9cdFx0aWYgKGFySW1hZ2VzW2ldID09IG51bGwpIHtcclxuLy9cdFx0XHRmbmNJbWdPbmxvYWQoKTtcclxuLy9cdFx0fSBlbHNlIHtcclxuLy9cdFx0XHR2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbi8vXHRcdFx0aW1nLm9ubG9hZCA9IGZuY0ltZ09ubG9hZDtcclxuLy9cdFx0XHRpbWcub25lcnJvciA9IGZuY0ltZ09ubG9hZDtcclxuLy9cdFx0XHRpbWcuc3JjID0gYXJJbWFnZXNbaV07XHJcbi8vXHRcdFx0YXJJbWFnZU9iamVjdHMucHVzaChpbWcpO1xyXG4vL1x0XHR9XHJcbi8vXHR9XHJcbi8vfVxyXG5cclxuLy9naWd5YS5nbG9iYWwucHV0R01CYWxsb29uTmV4dFRvID0gZnVuY3Rpb24gKGVsLCBib2R5LCBjYXB0aW9uLCB3LCBoLCBoaWRlQ2xvc2UsIGlkLCBkb250SGlkZU9uQ2xpY2ssIHByZWZlcnJlZE9yaWVudGF0aW9uLCBiYWxsb29uQ2xhc3MpIHtcclxuLy8gICAgYmFsbG9vbkNsYXNzID0gYmFsbG9vbkNsYXNzIHx8ICcnO1xyXG4vLyAgICBwcmVmZXJyZWRPcmllbnRhdGlvbiA9IHByZWZlcnJlZE9yaWVudGF0aW9uIHx8ICdsZWZ0JztcclxuXHJcbi8vICAgIGlmICgocHJlZmVycmVkT3JpZW50YXRpb24gPT09ICdyaWdodCcpIHx8IChwcmVmZXJyZWRPcmllbnRhdGlvbiA9PT0gJ2xlZnQnKSlcclxuLy8gICAgICAgIGdpZ3lhLmdsb2JhbC5jcmVhdGVHTUJhbGxvb24oYm9keSwgY2FwdGlvbiwgdywgaCwgNDcsICdsZWZ0JywgaGlkZUNsb3NlLCBpZCwgZG9udEhpZGVPbkNsaWNrLCBiYWxsb29uQ2xhc3MpO1xyXG4vLyAgICBlbHNlIC8vICgocHJlZmVycmVkT3JpZW50YXRpb24gPT09ICd1cCcpIHx8IChwcmVmZXJyZWRPcmllbnRhdGlvbiA9PT0gJ2Rvd24nKSlcclxuLy8gICAgICAgIGdpZ3lhLmdsb2JhbC5jcmVhdGVHTUJhbGxvb24oYm9keSwgY2FwdGlvbiwgdywgaCwgMTAsICdkb3duJywgaGlkZUNsb3NlLCBpZCwgZG9udEhpZGVPbkNsaWNrLCBiYWxsb29uQ2xhc3MpO1xyXG5cclxuLy8gICAgdmFyIG9mZnNldFdpZHRoID0gZ2lneWEuZ2xvYmFsLmRpdkdNQmFsbG9vbi5vZmZzZXRXaWR0aDtcclxuLy8gICAgdmFyIG9mZnNldEhlaWdodCA9IGdpZ3lhLmdsb2JhbC5kaXZHTUJhbGxvb24ub2Zmc2V0SGVpZ2h0O1xyXG4vLyAgICB2YXIgcG9zID0gZ2lneWEuZ2xvYmFsLl9HZXRFbGVtZW50UG9zKGVsKTtcclxuLy8gICAgdmFyIGxlZnQ7XHJcbi8vICAgIHZhciB0b3A7XHJcblxyXG4vLyAgICB2YXIgZHN0ID0gZWwuc3R5bGU7XHJcblxyXG4vLyAgICB2YXIgZGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbi8vICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4vLyAgICB2YXIgY2xpZW50SGVpZ2h0ID0gZGUuY2xpZW50SGVpZ2h0O1xyXG4vLyAgICBpZiAoY2xpZW50SGVpZ2h0ID09IDApIGNsaWVudEhlaWdodCA9IGRiLmNsaWVudEhlaWdodDtcclxuLy8gICAgdmFyIGNsaWVudFdpZHRoID0gZGUuY2xpZW50V2lkdGg7XHJcbi8vICAgIGlmIChjbGllbnRXaWR0aCA9PSAwKSBjbGllbnRXaWR0aCA9IGRiLmNsaWVudFdpZHRoO1xyXG5cclxuLy8gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4vLyAgICAgICAgY2xpZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4vLyAgICAgICAgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuLy8gICAgfVxyXG5cclxuLy8gICAgdmFyIHNjcmwgPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRTY3JvbGwoKTtcclxuLy8gICAgdmFyIHZwdCA9IHNjcmwudG9wO1xyXG4vLyAgICB2YXIgdnBsID0gc2NybC5sZWZ0O1xyXG4vLyAgICB2YXIgYm90dG9tUmlnaHRUb3AgPSB2cHQgKyBjbGllbnRIZWlnaHQ7XHJcbi8vICAgIHZhciBib3R0b21SaWdodExlZnQgPSB2cGwgKyBjbGllbnRXaWR0aDtcclxuXHJcbi8vICAgIHZhciBhcnJvd0RpcmVjdGlvbjtcclxuLy8gICAgdmFyIGFycm93T2Zmc2V0O1xyXG5cclxuLy8gICAgaWYgKChwcmVmZXJyZWRPcmllbnRhdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKHByZWZlcnJlZE9yaWVudGF0aW9uID09PSAnbGVmdCcpKSB7XHJcbi8vICAgICAgICBhcnJvd09mZnNldCA9IDQ3O1xyXG5cclxuLy8gICAgICAgIHRvcCA9IHBvcy50b3AgKyAoZWwub2Zmc2V0SGVpZ2h0IC8gMikgLSA0NyAtIDI1IC8gMjtcclxuLy8gICAgICAgIGlmICh0b3AgKyBvZmZzZXRIZWlnaHQgPiBib3R0b21SaWdodFRvcCkge1xyXG4vLyAgICAgICAgICAgIHRvcCA9IGJvdHRvbVJpZ2h0VG9wIC0gb2Zmc2V0SGVpZ2h0IC0gMTA7XHJcbi8vICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgdmFyIGxlZnRXaXRoTGVmdE9yaWVudGF0aW9uID0gcG9zLmxlZnQgLSBvZmZzZXRXaWR0aCAtIDU7XHJcbi8vICAgICAgICB2YXIgbGVmdFdpdGhSaWdodE9yaWVudGF0aW9uID0gcG9zLmxlZnQgKyBlbC5vZmZzZXRXaWR0aCArIDU7XHJcblxyXG4vLyAgICAgICAgaWYgKHByZWZlcnJlZE9yaWVudGF0aW9uID09PSAncmlnaHQnKSB7XHJcbi8vICAgICAgICAgICAgLy8gYXNzdW1lIHRoZXJlIGlzIGFsd2F5cyBlbm91Z2ggc3BhY2Ugb24gdGhlIHJpZ2h0XHJcbi8vICAgICAgICAgICAgbGVmdCA9IGxlZnRXaXRoUmlnaHRPcmllbnRhdGlvbjtcclxuLy8gICAgICAgICAgICBhcnJvd0RpcmVjdGlvbiA9ICdsZWZ0JztcclxuLy8gICAgICAgICAgICBiYWxsb29uQ2xhc3MgKz0gJyBnaWctYmFsbG9vbi1yaWdodCc7XHJcbi8vICAgICAgICB9IGVsc2UgeyAvLyBsZWZ0IG9yaWVudGF0aW9uXHJcbi8vICAgICAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGVyZSBpcyBlbm91Z2ggc3BhY2Ugb24gdGhlIGxlZnQgLSBvdGhlcndpc2Ugc3dpdGNoIHRvIHJpZ2h0IG9yaWVudGF0aW9uXHJcbi8vICAgICAgICAgICAgaWYgKGxlZnRXaXRoTGVmdE9yaWVudGF0aW9uID4gMTApIHtcclxuLy8gICAgICAgICAgICAgICAgbGVmdCA9IGxlZnRXaXRoTGVmdE9yaWVudGF0aW9uO1xyXG4vLyAgICAgICAgICAgICAgICBhcnJvd0RpcmVjdGlvbiA9ICdyaWdodCc7XHJcbi8vICAgICAgICAgICAgICAgIGJhbGxvb25DbGFzcyArPSAnIGdpZy1iYWxsb29uLWxlZnQnO1xyXG4vLyAgICAgICAgICAgIH0gZWxzZSB7IC8vIG5vdCBlbm91Z2ggc3BhY2UgZm9yIGxlZnQgb3JpZW50YXRpb25cclxuLy8gICAgICAgICAgICAgICAgbGVmdCA9IGxlZnRXaXRoUmlnaHRPcmllbnRhdGlvbjtcclxuLy8gICAgICAgICAgICAgICAgYXJyb3dEaXJlY3Rpb24gPSAnbGVmdCc7XHJcbi8vICAgICAgICAgICAgICAgIGJhbGxvb25DbGFzcyArPSAnIGdpZy1iYWxsb29uLXJpZ2h0JztcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICB9XHJcbi8vICAgIH1cclxuXHJcbi8vICAgIGlmICgocHJlZmVycmVkT3JpZW50YXRpb24gPT09ICd1cCcpIHx8IChwcmVmZXJyZWRPcmllbnRhdGlvbiA9PT0gJ2Rvd24nKSkge1xyXG4vLyAgICAgICAgYXJyb3dPZmZzZXQgPSAxMDtcclxuLy8gICAgICAgIGxlZnQgPSBwb3MubGVmdDtcclxuXHJcbi8vICAgICAgICB2YXIgdG9wV2l0aFVwT3JpZW50YXRpb24gPSBwb3MudG9wIC0gb2Zmc2V0SGVpZ2h0IC0gMTA7XHJcbi8vICAgICAgICB2YXIgdG9wV2l0aERvd25PcmllbnRhdGlvbiA9IHBvcy50b3AgKyBlbC5vZmZzZXRIZWlnaHQgKyA1O1xyXG5cclxuLy8gICAgICAgIGlmIChwcmVmZXJyZWRPcmllbnRhdGlvbiA9PT0gJ2Rvd24nKSB7XHJcbi8vICAgICAgICAgICAgLy8gYXNzdW1lIHRoZXJlIGlzIGFsd2F5cyBlbm91Z2ggc3BhY2UgZG93blxyXG4vLyAgICAgICAgICAgIHRvcCA9IHRvcFdpdGhEb3duT3JpZW50YXRpb247XHJcbi8vICAgICAgICAgICAgYXJyb3dEaXJlY3Rpb24gPSAndXAnO1xyXG4vLyAgICAgICAgICAgIGJhbGxvb25DbGFzcyArPSAnIGdpZy1iYWxsb29uLWRvd24nO1xyXG4vLyAgICAgICAgfSBlbHNlIHsgLy8gdXAgb3JpZW50YXRpb25cclxuLy8gICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRoZXJlIGlzIGVub3VnaCBzcGFjZSBhYm92ZSAtIG90aGVyd2lzZSBzd2l0Y2ggdG8gZG93biBvcmllbnRhdGlvblxyXG4vLyAgICAgICAgICAgIGlmICh0b3BXaXRoVXBPcmllbnRhdGlvbiA8IDUpIHtcclxuLy8gICAgICAgICAgICAgICAgdG9wID0gdG9wV2l0aERvd25PcmllbnRhdGlvbjtcclxuLy8gICAgICAgICAgICAgICAgYXJyb3dEaXJlY3Rpb24gPSAndXAnO1xyXG4vLyAgICAgICAgICAgICAgICBiYWxsb29uQ2xhc3MgKz0gJyBnaWctYmFsbG9vbi1kb3duJztcclxuLy8gICAgICAgICAgICB9IGVsc2UgeyAvLyBub3QgZW5vdWdoIHNwYWNlIGZvciB1cCBvcmllbnRhdGlvblxyXG4vLyAgICAgICAgICAgICAgICB0b3AgPSB0b3BXaXRoVXBPcmllbnRhdGlvbjtcclxuLy8gICAgICAgICAgICAgICAgYXJyb3dEaXJlY3Rpb24gPSAnZG93bic7XHJcbi8vICAgICAgICAgICAgICAgIGJhbGxvb25DbGFzcyArPSAnIGdpZy1iYWxsb29uLXVwJztcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICB9XHJcbi8vICAgIH1cclxuXHJcbi8vICAgIGdpZ3lhLmdsb2JhbC5jcmVhdGVHTUJhbGxvb24oYm9keSwgY2FwdGlvbiwgdywgaCwgYXJyb3dPZmZzZXQsIGFycm93RGlyZWN0aW9uLCBoaWRlQ2xvc2UsIGlkLCBkb250SGlkZU9uQ2xpY2ssIGJhbGxvb25DbGFzcyk7XHJcblxyXG4vLyAgICBpZiAobGVmdCA8IDEwKSBsZWZ0ID0gMTA7XHJcbi8vICAgIGlmICh0b3AgPCAxMCkgdG9wID0gMTA7XHJcbi8vICAgIGdpZ3lhLmdsb2JhbC5kaXZHTUJhbGxvb24uc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xyXG4vLyAgICBnaWd5YS5nbG9iYWwuZGl2R01CYWxsb29uLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XHJcbi8vICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRSkge1xyXG4vLyAgICAgICAgdmFyIGZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2lneWEuZ2xvYmFsLmRpdkdNQmFsbG9vbi5pZCArICdfZnJhbWUnKTtcclxuLy8gICAgICAgIGlmIChmcmFtZSkgZ2lneWEuZ2xvYmFsLmFkZElmcmFtZVNoaW0oZnJhbWUpO1xyXG4vLyAgICB9XHJcbi8vfVxyXG5cclxuLy9naWd5YS5nbG9iYWwucmVtb3ZlR01CYWxsb29uID0gZnVuY3Rpb24gKGUpIHtcclxuLy9cdHZhciBhO1xyXG4vL1x0aWYgKGUpIHtcclxuLy9cdFx0YSA9IGUudGFyZ2V0O1xyXG4vL1x0XHRpZiAoIWEpIGEgPSBlLnNyY0VsZW1lbnQ7XHJcbi8vXHRcdHdoaWxlIChhICE9IG51bGwgJiYgYS5vZmZzZXRQYXJlbnQgJiYgYS5pZC5pbmRleE9mKGdpZ3lhLmdsb2JhbC5kaXZHTUJhbGxvb24uaWQpID09IC0xKSB7XHJcbi8vXHRcdFx0YSA9IGEub2Zmc2V0UGFyZW50O1xyXG4vL1x0XHR9XHJcbi8vXHR9XHJcbi8vXHRpZiAoIWEgfHwgYS5pZC5pbmRleE9mKGdpZ3lhLmdsb2JhbC5kaXZHTUJhbGxvb24uaWQpID09IC0xKSB7IC8vdG8gbWFrZSBzdXJlIHRoaXMgd2Fzbid0IHRyaWdnZXJlZCBieSBjbGljayBpbnNpZGVcclxuLy9cdFx0dHJ5IHtcclxuLy9cdFx0XHRnaWd5YS5nbG9iYWwucmVtb3ZlSWZyYW1lU2hpbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnaWd5YS5nbG9iYWwuZGl2R01CYWxsb29uLmlkICsgJ19mcmFtZScpKTtcclxuLy9cdFx0XHRnaWd5YS5nbG9iYWwuZGl2R01CYWxsb29uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ2lneWEuZ2xvYmFsLmRpdkdNQmFsbG9vbik7XHJcbi8vXHRcdFx0aWYgKGRvY3VtZW50LmRldGFjaEV2ZW50KSB7XHJcbi8vXHRcdFx0XHRkb2N1bWVudC5kZXRhY2hFdmVudChcIm9uY2xpY2tcIiwgZ2lneWEuZ2xvYmFsLnJlbW92ZUdNQmFsbG9vbilcclxuLy9cdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuLy9cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnaWd5YS5nbG9iYWwucmVtb3ZlR01CYWxsb29uLCBmYWxzZSlcclxuLy9cdFx0XHR9XHJcbi8vXHRcdH0gY2F0Y2ggKGV4KSB7IH1cclxuLy9cdH1cclxuLy99XHJcblxyXG4vL2dpZ3lhLmdsb2JhbC5fR2V0RWxlbWVudFBvcz1mdW5jdGlvbihvYmopIHtcclxuLy9cdHZhciBwb3M9Z2lneWEuZ2xvYmFsLmdldFBvcyhvYmopO1xyXG4vL1x0cmV0dXJuIHtsZWZ0OnBvcy54LHRvcDpwb3MueX07XHJcbi8vfVxyXG5cclxuLy9naWd5YS5nbG9iYWwuZ2V0UG9zPWZ1bmN0aW9uKGVsKSB7XHJcbi8vXHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbi8vXHR2YXIgaXNPcGVyYSA9ICh1YS5pbmRleE9mKCdvcGVyYScpICE9IC0xKTtcclxuLy9cdHZhciBpc0lFID0gKHVhLmluZGV4T2YoJ21zaWUnKSAhPSAtMSAmJiAhaXNPcGVyYSk7IC8vIG5vdCBvcGVyYSBzcG9vZlxyXG4vL1x0aWYoZWwucGFyZW50Tm9kZSA9PT0gbnVsbCB8fCBlbC5zdHlsZS5kaXNwbGF5ID09ICdub25lJykge1xyXG4vL1x0XHRyZXR1cm4gZmFsc2U7XHJcbi8vXHR9ICAgICAgXHJcbi8vXHR2YXIgcGFyZW50ID0gbnVsbDtcclxuLy9cdHZhciBwb3MgPSBbXTsgICAgIFxyXG4vL1x0dmFyIGJveDsgICAgIFxyXG4vL1x0aWYoZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSAgICAvL0lFXHJcbi8vXHR7ICAgICAgICAgXHJcbi8vXHRcdGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4vL1x0XHR2YXIgc2Nyb2xsVG9wID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApO1xyXG4vL1x0XHR2YXIgc2Nyb2xsTGVmdCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQpO1xyXG4vL1x0XHRyZXR1cm4ge3g6Ym94LmxlZnQgKyBzY3JvbGxMZWZ0LCB5OmJveC50b3AgKyBzY3JvbGxUb3B9O1xyXG4vL1x0fWVsc2UgaWYoZG9jdW1lbnQuZ2V0Qm94T2JqZWN0Rm9yKSAgICAvLyBnZWNrbyAgICBcclxuLy9cdHtcclxuLy9cdFx0Ym94ID0gZG9jdW1lbnQuZ2V0Qm94T2JqZWN0Rm9yKGVsKTsgXHJcbi8vXHRcdHZhciBib3JkZXJMZWZ0ID0gKGVsLnN0eWxlLmJvcmRlckxlZnRXaWR0aCk/cGFyc2VJbnQoZWwuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKTowOyBcclxuLy9cdFx0dmFyIGJvcmRlclRvcCA9IChlbC5zdHlsZS5ib3JkZXJUb3BXaWR0aCk/cGFyc2VJbnQoZWwuc3R5bGUuYm9yZGVyVG9wV2lkdGgpOjA7IFxyXG4vL1x0XHRwb3MgPSBbYm94LnggLSBib3JkZXJMZWZ0LCBib3gueSAtIGJvcmRlclRvcF07XHJcbi8vXHR9IGVsc2UgICAgLy8gc2FmYXJpICYgb3BlcmEgICAgXHJcbi8vXHR7XHJcbi8vXHRcdHBvcyA9IFtlbC5vZmZzZXRMZWZ0LCBlbC5vZmZzZXRUb3BdOyAgXHJcbi8vXHRcdHBhcmVudCA9IGVsLm9mZnNldFBhcmVudDsgICAgIFxyXG4vL1x0XHRpZiAocGFyZW50ICE9IGVsKSB7IFxyXG4vL1x0XHRcdHdoaWxlIChwYXJlbnQpIHsgIFxyXG4vL1x0XHRcdFx0cG9zWzBdICs9IHBhcmVudC5vZmZzZXRMZWZ0OyBcclxuLy9cdFx0XHRcdHBvc1sxXSArPSBwYXJlbnQub2Zmc2V0VG9wOyBcclxuLy9cdFx0XHRcdHBhcmVudCA9IHBhcmVudC5vZmZzZXRQYXJlbnQ7XHJcbi8vXHRcdFx0fSAgXHJcbi8vXHRcdH0gICBcclxuLy9cdFx0aWYgKHVhLmluZGV4T2YoJ29wZXJhJykgIT0gLTEgfHwgKCB1YS5pbmRleE9mKCdzYWZhcmknKSAhPSAtMSAmJiBlbC5zdHlsZS5wb3NpdGlvbiA9PSAnYWJzb2x1dGUnICkpIHsgXHJcbi8vXHRcdFx0cG9zWzBdIC09IGRvY3VtZW50LmJvZHkub2Zmc2V0TGVmdDtcclxuLy9cdFx0XHRwb3NbMV0gLT0gZG9jdW1lbnQuYm9keS5vZmZzZXRUb3A7ICAgICAgICAgXHJcbi8vXHRcdH0gICAgXHJcbi8vXHR9ICAgICAgICAgICAgICBcclxuLy9cdGlmIChlbC5wYXJlbnROb2RlKSB7IFxyXG4vL1x0XHRwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xyXG4vL1x0fSBlbHNlIHtcclxuLy9cdFx0cGFyZW50ID0gbnVsbDtcclxuLy9cdH1cclxuLy9cdHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnRhZ05hbWUgIT0gJ0JPRFknICYmIHBhcmVudC50YWdOYW1lICE9ICdIVE1MJykgeyAvLyBhY2NvdW50IGZvciBhbnkgc2Nyb2xsZWQgYW5jZXN0b3JzXHJcbi8vXHRcdHBvc1swXSAtPSBwYXJlbnQuc2Nyb2xsTGVmdDtcclxuLy9cdFx0cG9zWzFdIC09IHBhcmVudC5zY3JvbGxUb3A7XHJcbi8vXHRcdGlmIChwYXJlbnQucGFyZW50Tm9kZSkge1xyXG4vL1x0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4vL1x0XHR9IGVsc2Uge1xyXG4vL1x0XHRcdHBhcmVudCA9IG51bGw7XHJcbi8vXHRcdH1cclxuLy9cdH1cclxuLy9cdHJldHVybiB7eDpwb3NbMF0sIHk6cG9zWzFdfTtcclxuLy99XHJcblxyXG4vL2dpZ3lhLmdsb2JhbC5nZXRTdHlsZT1mdW5jdGlvbihvYmosIHN0eWxlUHJvcClcclxuLy97XHJcbi8vICBpZiAob2JqLmN1cnJlbnRTdHlsZSlcclxuLy9cdHJldHVybiBvYmouY3VycmVudFN0eWxlW3N0eWxlUHJvcF07XHJcbi8vICBlbHNlIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSlcclxuLy9cdHJldHVybiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG9iaixudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcCk7XHJcbi8vfVxyXG5cclxuLy9naWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuZ2V0U3R5bGVTdHJpbmc9ZnVuY3Rpb24ob1N0eWxlLCBibG5Jc0xpbmspIHtcclxuLy9cdHZhciBzPScnO1xyXG4vL1x0cys9J2xpbmUtaGVpZ2h0OiBub3JtYWw7JztcclxuLy9cdGlmIChibG5Jc0xpbmspIHMrPSdjdXJzb3I6cG9pbnRlcjsnO1xyXG4vL1x0aWYgKG9TdHlsZS51bmRlcmxpbmUpIHMrPSd0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lOyc7XHJcbi8vXHRpZiAob1N0eWxlLmZvbnQpIHMrPSdmb250LWZhbWlseTonK29TdHlsZS5mb250Kyc7JztcclxuLy9cdGlmIChvU3R5bGUuc2l6ZSkgcys9J2ZvbnQtc2l6ZTonK29TdHlsZS5zaXplKydweDsnO1xyXG4vL1x0aWYgKG9TdHlsZS5jb2xvcikgcys9J2NvbG9yOicrb1N0eWxlLmNvbG9yKyc7JztcclxuLy9cdGlmIChvU3R5bGUuYm9sZCkgcys9J2ZvbnQtd2VpZ2h0OmJvbGQ7JztcclxuLy9cdGlmIChvU3R5bGVbJ2ZyYW1lLXRoaWNrbmVzcyddKSBzKz0nYm9yZGVyLXN0eWxlOnNvbGlkOyBib3JkZXItd2lkdGg6JytvU3R5bGVbJ2ZyYW1lLXRoaWNrbmVzcyddKydweDsnO1xyXG4vL1x0aWYgKG9TdHlsZVsnZnJhbWUtY29sb3InXSkgcys9J2JvcmRlci1jb2xvcjonK29TdHlsZVsnZnJhbWUtY29sb3InXSsnOyc7XHJcbi8vXHRpZiAob1N0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10pIHMrPSdiYWNrZ3JvdW5kLWNvbG9yOicrb1N0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10rJzsnO1xyXG4vL1x0cmV0dXJuIHM7XHJcbi8vfVxyXG5cclxuLy9naWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuR3JheU91dD1mdW5jdGlvbih2aXMsIG9wdCwgZXh0cmEpIHtcclxuLy9cdCAgdmFyIG9wdGlvbnMgPSBvcHQgfHwge307XHJcbi8vXHQgIHZhciB6aW5kZXggPSBvcHRpb25zLnppbmRleCB8fCA1MDtcclxuLy9cdCAgdmFyIG9wYWNpdHkgPSBvcHRpb25zLm9wYWNpdHkgfHwgNzA7XHJcbi8vXHQgIHZhciBvcGFxdWUgPSAob3BhY2l0eSAvIDEwMCk7XHJcbi8vXHQgIHZhciBiZ2NvbG9yID0gb3B0aW9ucy5iZ2NvbG9yIHx8ICcjMDAwMDAwJztcclxuLy9cdCAgdmFyIGRhcms9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmtlblNjcmVlbk9iamVjdCcpO1xyXG4vL1x0ICB2YXIgdGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4vL1x0ICBpZiAoIWRhcmspIHtcclxuLy9cdFx0dmFyIGlzQ29tcE1vZGU9KGdpZ3lhLmxvY2FsSW5mby5pc01vYmlsZSB8fCBnaWd5YS5sb2NhbEluZm8uaXNJRTYgfHwgZG9jdW1lbnQuY29tcGF0TW9kZT09J0JhY2tDb21wYXQnKTtcclxuLy9cdFx0dmFyIHNjcm9sbFRvcD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4vL1x0XHRpZiAoc2Nyb2xsVG9wPT0wKSBzY3JvbGxUb3A9ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHQgIFxyXG4vL1x0XHR2YXIgdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy9cdFx0XHRpZiAoaXNDb21wTW9kZSkge1xyXG4vL1x0XHRcdFx0dG5vZGUuc3R5bGUucG9zaXRpb249J2Fic29sdXRlJztcclxuLy9cdFx0XHRcdHRub2RlLnN0eWxlLnRvcD0nJytzY3JvbGxUb3ArJ3B4JztcclxuLy9cdFx0XHR9IGVsc2Uge1xyXG4vL1x0XHRcdFx0dG5vZGUuc3R5bGUucG9zaXRpb249J2ZpeGVkJztcclxuLy9cdFx0XHRcdHRub2RlLnN0eWxlLnRvcD0nMHB4JzsgXHJcbi8vXHRcdFx0fVxyXG4vL1x0XHRcdHRub2RlLnN0eWxlLm92ZXJmbG93PSdoaWRkZW4nO1x0XHJcbi8vXHRcdFx0dG5vZGUuc3R5bGUubGVmdD0nMHB4JztcclxuLy9cdFx0XHR0bm9kZS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuLy9cdFx0XHR0bm9kZS5pZD0nZGFya2VuU2NyZWVuT2JqZWN0JztcclxuLy9cdFx0XHR0bm9kZS5pbm5lckhUTUw9JyYjMTYwOyc7XHJcbi8vXHRcdHRib2R5LmFwcGVuZENoaWxkKHRub2RlKTtcclxuLy9cdFx0ZGFyaz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya2VuU2NyZWVuT2JqZWN0Jyk7XHJcbi8vXHRcdGlmICghZ2lneWEuYXR0YWNoZWRGaXhHcmF5KSB7XHJcbi8vXHRcdFx0Z2lneWEuYXR0YWNoZWRGaXhHcmF5ID0gdHJ1ZTtcdFx0XHJcbi8vXHRcdFx0aWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7ICAgICAgICAgICAgICAgIFxyXG4vL1x0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9maXhHcmF5U2l6ZSxmYWxzZSk7XHJcbi8vXHRcdFx0fVxyXG4vL1x0XHRcdGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHsgICAgICAgICAgICAgICAgXHJcbi8vXHRcdFx0XHR3aW5kb3cuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9maXhHcmF5U2l6ZSk7XHJcbi8vXHRcdFx0fVxyXG4vL1x0XHRcdGlmIChpc0NvbXBNb2RlKSB7XHJcbi8vXHRcdFx0XHRpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuLy9cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9maXhHcmF5UG9zaXRpb24sZmFsc2UpO1xyXG4vL1x0XHRcdFx0fVxyXG4vL1x0XHRcdFx0aWYgKHdpbmRvdy5hdHRhY2hFdmVudCkge1xyXG4vL1x0XHRcdFx0XHR3aW5kb3cuYXR0YWNoRXZlbnQoJ29uc2Nyb2xsJywgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9maXhHcmF5UG9zaXRpb24pO1xyXG4vL1x0XHRcdFx0fVxyXG4vL1x0XHRcdH1cclxuLy9cdFx0fVxyXG4vL1x0ICB9XHJcbi8vXHQgIGlmICh2aXMpIHtcclxuLy9cdFx0dmFyIHZwaDtcclxuLy9cdFx0dmFyIHZwdztcclxuLy9cdFx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4vL1x0XHRcdHZwaD13aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbi8vXHRcdFx0dnB3PXdpbmRvdy5pbm5lcldpZHRoO1xyXG4vL1x0XHR9XHJcbi8vXHRcdGlmICh0eXBlb2YgdnBoPT0ndW5kZWZpbmVkJykge1xyXG4vL1x0XHRcdHZhciBkZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbi8vXHRcdFx0dnBoPWRlLmNsaWVudEhlaWdodDtcclxuLy9cdFx0XHR2cHc9ZGUuY2xpZW50V2lkdGg7XHJcbi8vXHRcdH1cclxuLy9cdFx0aWYgKHZwdz09MCkgdnB3PXRib2R5LmNsaWVudFdpZHRoOyAgIFxyXG4vL1x0XHRpZiAodnBoPT0wKSB2cGg9dGJvZHkuY2xpZW50SGVpZ2h0OyAgIFxyXG4vL1x0XHRkYXJrLnN0eWxlLm9wYWNpdHk9b3BhcXVlO1xyXG4vL1x0XHRkYXJrLnN0eWxlLk1vek9wYWNpdHk9b3BhcXVlO1xyXG4vL1x0XHRkYXJrLnN0eWxlLndpZHRoPSAnJyArIHZwdyArICdweCc7XHJcbi8vXHRcdGRhcmsuc3R5bGUuaGVpZ2h0PSAnJyArIHZwaCArICdweCc7XHRcdFxyXG4vL1x0XHRkYXJrLnN0eWxlLmZpbHRlcj0nYWxwaGEob3BhY2l0eT0nK29wYWNpdHkrJyknO1xyXG4vL1x0XHRkYXJrLnN0eWxlLnpJbmRleD16aW5kZXg7XHJcbi8vXHRcdGRhcmsuc3R5bGUuYmFja2dyb3VuZENvbG9yPWJnY29sb3I7XHJcbi8vXHRcdGRhcmsuc3R5bGUuZGlzcGxheT0nYmxvY2snO1x0XHJcbi8vXHQgIH0gZWxzZSB7XHJcbi8vXHRcdCB0Ym9keS5yZW1vdmVDaGlsZChkYXJrKTtcclxuLy9cdCAgfSAgICBcclxuLy99LFxyXG5cclxuLy9naWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX2ZpeEdyYXlQb3NpdGlvbj1mdW5jdGlvbigpe1xyXG4vL1x0dmFyIGRhcms9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmtlblNjcmVlbk9iamVjdCcpO1xyXG4vL1x0aWYgKGRhcmspIHtcclxuLy9cdFx0dmFyIGRlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuLy9cdFx0dmFyIGRiPWRvY3VtZW50LmJvZHk7XHJcbi8vXHRcdHZhciBzY3JvbGxUb3A9ZGUuc2Nyb2xsVG9wO1xyXG4vL1x0XHRpZiAoc2Nyb2xsVG9wPT0wKSBzY3JvbGxUb3A9ZGIuc2Nyb2xsVG9wO1xyXG4vL1x0XHR2YXIgc2Nyb2xsTGVmdD1kZS5zY3JvbGxMZWZ0O1xyXG4vL1x0XHRpZiAoc2Nyb2xsTGVmdD09MCkgc2Nyb2xsTGVmdD1kYi5zY3JvbGxMZWZ0OyAgICAgICAgXHJcbi8vXHRcdHZhciBjbGllbnRIZWlnaHQ9ZGUuY2xpZW50SGVpZ2h0O1xyXG4vL1x0XHRpZiAoY2xpZW50SGVpZ2h0PT0wKSBjbGllbnRIZWlnaHQ9ZGIuY2xpZW50SGVpZ2h0OyAgICBcclxuLy9cdFx0dmFyIGNsaWVudFdpZHRoPWRlLmNsaWVudFdpZHRoO1xyXG4vL1x0XHRpZiAoY2xpZW50V2lkdGg9PTApIGNsaWVudFdpZHRoPWRiLmNsaWVudFdpZHRoOyAgICBcclxuLy9cdFx0aWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFNikgY2xpZW50V2lkdGgtPTE7XHJcbi8vXHRcdGRhcmsuc3R5bGUudG9wPXNjcm9sbFRvcDtcclxuLy9cdFx0ZGFyay5zdHlsZS5sZWZ0PXNjcm9sbExlZnQ7XHJcbi8vXHR9XHJcbi8vfSxcclxuXHJcbi8vZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9maXhHcmF5U2l6ZT1mdW5jdGlvbigpIHtcclxuLy9cdHZhciBkYXJrPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrZW5TY3JlZW5PYmplY3QnKTtcclxuLy9cdGlmIChkYXJrKSB7XHJcbi8vXHRcdHZhciBkZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbi8vXHRcdHZhciBkYj1kb2N1bWVudC5ib2R5O1xyXG4vL1x0XHR2YXIgY2xpZW50SGVpZ2h0PWRlLmNsaWVudEhlaWdodDtcclxuLy9cdFx0aWYgKGNsaWVudEhlaWdodD09MCkgY2xpZW50SGVpZ2h0PWRiLmNsaWVudEhlaWdodDsgICAgXHJcbi8vXHRcdHZhciBjbGllbnRXaWR0aD1kZS5jbGllbnRXaWR0aDtcclxuLy9cdFx0aWYgKGNsaWVudFdpZHRoPT0wKSBjbGllbnRXaWR0aD1kYi5jbGllbnRXaWR0aDsgICAgXHJcbi8vXHRcdGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTYpIGNsaWVudFdpZHRoLT0xO1xyXG5cclxuLy9cdFx0ZGFyay5zdHlsZS53aWR0aD0nJytjbGllbnRXaWR0aCsncHgnO1xyXG4vL1x0XHRkYXJrLnN0eWxlLmhlaWdodD0nJytjbGllbnRIZWlnaHQrJ3B4JzsgIFxyXG4vL1x0fVxyXG4vL30sXHJcblxyXG4vL2dpZ3lhLnV0aWxzLkRPTS5jcmVhdGVUb3BMZXZlbERpdj1mdW5jdGlvbihpZCkge1xyXG4vL1x0dmFyIGlmcmVsO1xyXG4vL1x0aWZyZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJRlJBTUUnKTtcclxuLy9cdGlmcmVsLmlkPSdnaWd5YV9pZnJfJytpZDtcclxuLy9cdGlmcmVsLmZyYW1lYm9yZGVyPVwiMFwiO1xyXG4vL1x0aWZyZWwuZnJhbWVCb3JkZXI9XCIwXCI7XHJcbi8vXHRpZnJlbC5hbGxvd3RyYW5zcGFyZW5jeT10cnVlO1xyXG4vL1x0aWZyZWwuc3R5bGUucG9zaXRpb249J2Fic29sdXRlJztcclxuLy9cdGlmIChnaWd5YS5sb2NhbEluZm8uaXNDaHJvbWUpIHtcclxuLy9cdFx0aWZyZWwuc3R5bGUud2lkdGg9JzMwcHgnO1xyXG4vL1x0XHRpZnJlbC5zdHlsZS5oZWlnaHQ9JzFweCc7XHJcbi8vXHR9XHJcbi8vXHRlbHNlIHtcclxuLy9cdFx0aWZyZWwuc3R5bGUud2lkdGg9JzFweCc7XHJcbi8vXHRcdGlmcmVsLnN0eWxlLmhlaWdodD0nMXB4JztcclxuLy9cdH1cclxuLy9cdGlmIChpZnJlbC5zdHlsZS56SW5kZXghPW51bGwpIHtcclxuLy9cdFx0aWZyZWwuc3R5bGUuekluZGV4PWdpZ3lhLnV0aWxzLkRPTS5nZXROZXh0WkluZGV4KCk7XHJcbi8vXHR9XHJcblxyXG4vL1x0aWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFNikge1xyXG4vL1x0ICAgIGlmcmVsLnNyYyA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9ibGFuay5odG0nKTtcclxuLy9cdH1cclxuXHJcbi8vXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy9cdGVsLnN0eWxlLnBvc2l0aW9uPSdhYnNvbHV0ZSc7XHJcbi8vXHRpZiAoZWwuc3R5bGUuekluZGV4IT1udWxsKSB7XHJcbi8vXHRcdGVsLnN0eWxlLnpJbmRleD1naWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpO1xyXG4vL1x0fVxyXG4vL1x0ZWwuaW5uZXJIVE1MID0gJyc7XHJcbi8vXHRpZiAoaWQpIGVsLmlkPWlkO1xyXG5cclxuXHRcdFxyXG4vL1x0aWYgKGRvY3VtZW50LmJvZHkpIHtcclxuLy9cdFx0aWYoZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUpIHtcclxuLy9cdFx0XHRpZiAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XHJcbi8vXHRcdFx0XHRpZiAoaWZyZWwhPW51bGwpIHtcclxuLy9cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoaWZyZWwsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcbi8vXHRcdFx0XHR9XHJcbi8vXHRcdFx0XHRkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlbCwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcclxuLy9cdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQpIHtcclxuLy9cdFx0XHRcdGlmIChpZnJlbCE9bnVsbCkge1xyXG4vL1x0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmVsKTtcclxuLy9cdFx0XHRcdH1cdFx0XHRcclxuLy9cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4vL1x0XHRcdH1cclxuLy9cdFx0fSBcclxuLy9cdH1cclxuLy9cdHJldHVybiBlbDtcclxuLy99LFxyXG5cclxuLy9naWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuaGlkZVVJID0gZnVuY3Rpb24gKCkge1xyXG4vL1x0dmFyIHBhcmFtcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbZ2lneWEudGhpc1NjcmlwdC5nbG9iYWxDb25mLCBhcmd1bWVudHNdKTtcclxuLy9cdGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5HcmF5T3V0KGZhbHNlKTtcclxuLy9cdGZvciAodmFyIGNvbnRhaW5lcklEIGluIGdpZ3lhLnV0aWxzLkRPTS5fcG9wdXBDb250YWluZXJzKSB7XHJcbi8vXHRcdHZhciBjb250YWluZXI9Z2lneWEudXRpbHMuRE9NLl9wb3B1cENvbnRhaW5lcnNbY29udGFpbmVySURdO1xyXG4vL1x0XHRpZiAoY29udGFpbmVyIT1udWxsKSB7XHJcbi8vXHRcdFx0Y29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4vL1x0XHRcdGlmIChjb250YWluZXIucGFyZW50Tm9kZSkgY29udGFpbmVyLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xyXG4vL1x0XHR9XHJcblxyXG4vL1x0XHR2YXIgaWZyZWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZ3lhX2lmcl8nK2NvbnRhaW5lcklEKTtcclxuLy9cdFx0aWYgKCBudWxsIT1pZnJlbCApIHsgXHJcbi8vXHRcdFx0Ly9pZnJlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlmcmVsKTtcclxuLy9cdFx0XHRpZnJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgXHJcbi8vXHRcdH1cclxuLy9cdH1cclxuLy9cdHZhciBmYlJvb3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZiLXJvb3QnKTtcclxuLy9cdGlmIChmYlJvb3QpIGZiUm9vdC5zdHlsZS52aXNpYmlsaXR5PSdoaWRkZW4nO1xyXG4vL1x0Z2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaCh7ZXZlbnROYW1lOiAnSGlkZVVJUmVxdWVzdGVkJ30pO1xyXG4vL1x0aWYgKHR5cGVvZiBwYXJhbXMuY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xyXG4vL1x0XHR2YXIgb1Jlc3BvbnNlID0ge1xyXG4vL1x0XHRcdHN0YXR1czogJ09LJyxcclxuLy9cdFx0XHRzdGF0dXNNZXNzYWdlOiAnJyxcclxuLy9cdFx0XHRvcGVyYXRpb246ICdoaWRlVUknLFxyXG4vL1x0XHRcdGNvbnRleHQ6IHBhcmFtcy5jb250ZXh0LFxyXG4vL1x0XHRcdGVycm9yTWVzc2FnZTogJycsXHJcbi8vXHRcdFx0ZXJyb3JDb2RlOiAwXHJcbi8vXHRcdH07XHJcbi8vXHRcdHBhcmFtcy5jYWxsYmFjayhvUmVzcG9uc2UpO1xyXG4vL1x0fVxyXG4vL31cclxuXHJcbi8vZ2lneWEuZ2xvYmFsLmlzRW1haWw9ZnVuY3Rpb24ocyl7XHJcbi8vXHRpZiAocy5pbmRleE9mKCcgJyk+PTApIHJldHVybiBmYWxzZTtcclxuXHRcdFxyXG4vL1x0dmFyIGVtYWlsUGFydHM9cy5zcGxpdCgnQCcpO1xyXG4vL1x0aWYgKGVtYWlsUGFydHMubGVuZ3RoIT0yKSByZXR1cm4gZmFsc2U7XHJcbi8vXHRpZiAoZW1haWxQYXJ0c1swXS5sZW5ndGg9PTApIHJldHVybiBmYWxzZTtcclxuLy9cdGlmIChlbWFpbFBhcnRzWzFdLmxlbmd0aD09MCkgcmV0dXJuIGZhbHNlO1x0XHRcclxuLy9cdHZhciBkb21haW5QYXJ0cz1lbWFpbFBhcnRzWzFdLnNwbGl0KCcuJyk7XHJcbi8vXHRpZiAoZG9tYWluUGFydHMubGVuZ3RoPDIpIHJldHVybiBmYWxzZTtcclxuLy9cdGZvciAodmFyIGQ9MDtkPGRvbWFpblBhcnRzLmxlbmd0aDtkKyspe1xyXG4vL1x0XHRpZiAoZG9tYWluUGFydHNbZF0ubGVuZ3RoPT0wIHx8IGRvbWFpblBhcnRzW2RdLmluZGV4T2YoJyAnKT4wKSByZXR1cm4gZmFsc2U7XHJcbi8vXHR9XHJcbi8vXHRyZXR1cm4gdHJ1ZTtcclxuLy99XHJcblxyXG4vL2dpZ3lhLnNvY2lhbGl6ZS5fQWRkSlNSZXF1ZXN0ID0gZnVuY3Rpb24gKHNlcnZpY2VkQnksIG1ldGhvZE5hbWUsIG5lZWRzQ29udGFpbmVyLCBwYXJhbXMpIHtcclxuLy8gICAgaWYgKCFkb2N1bWVudC5ib2R5KSB7XHJcbi8vICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcclxuLy8gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZ2lneWEuc29jaWFsaXplLl9BZGRKU1JlcXVlc3QuYXBwbHkodGhpcywgYXJncykgfSwgMzAwKTtcclxuLy8gICAgICAgIHJldHVybjtcclxuLy8gICAgfVxyXG4vLyAgICBpZiAoIXBhcmFtcykgcGFyYW1zID0ge307XHJcbi8vICAgIGdpZ3lhLmxvZy5sb2dDYWxsKG1ldGhvZE5hbWUuc3BsaXQoJy4nKS5wb3AoKSwgcGFyYW1zKTtcclxuLy8gICAgdmFyIGNvbnRhaW5lcklEID0gcGFyYW1zLmNvbnRhaW5lcklEO1xyXG5cdFx0XHJcbi8vICAgIHZhciBibG5DZW50ZXIgPSBmYWxzZTtcclxuLy8gICAgdmFyIGNvbnRhaW5lcjtcclxuLy8gICAgaWYgKCFuZWVkc0NvbnRhaW5lcikgeyAvL25vIGNvbnRhaW5lclxyXG4vLyAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLkRPTS5fcHNldWRvQ29udGFpbmVyc1tjb250YWluZXJJRF0gPT0gbnVsbCkgZ2lneWEudXRpbHMuRE9NLl9wc2V1ZG9Db250YWluZXJzW2NvbnRhaW5lcklEXSA9IHt9O1xyXG4vLyAgICAgICAgY29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLl9wc2V1ZG9Db250YWluZXJzW2NvbnRhaW5lcklEXTsgLy9zbyBpdCB3aWxsIGJlIGFibGUgdG8gaG9sZCAuUmVxcyBvbiBpdC5cclxuLy8gICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGFpbmVySUQgPT0gJ3VuZGVmaW5lZCcgfHwgY29udGFpbmVySUQgPT0gJycpIHsgLy9wb3B1cFxyXG4vLyAgICAgICAgY29udGFpbmVySUQgPSBnaWd5YS51dGlscy5ET00uZ2V0Q2VudGVyZWREaXZJRChtZXRob2ROYW1lKTtcclxuLy8gICAgICAgIHBhcmFtcy5jb250YWluZXJJRCA9IGNvbnRhaW5lcklEO1xyXG4vLyAgICAgICAgYmxuQ2VudGVyID0gdHJ1ZTtcclxuLy8gICAgICAgIHBhcmFtcy5pc1BvcHVwID0gdHJ1ZTtcclxuLy8gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklEKTtcclxuLy8gICAgICAgIGlmIChjb250YWluZXIgPT0gbnVsbCkgY29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmNyZWF0ZVRvcExldmVsRGl2KGNvbnRhaW5lcklEKTtcclxuLy8gICAgfVxyXG4vLyAgICBlbHNlIHsgLy9oYXMgY29udGFpbmVyXHJcbi8vICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJRCk7XHJcbi8vICAgIH1cclxuXHJcbi8vICAgIGlmICghY29udGFpbmVyKSB7XHJcbi8vICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hJbnZhbGlkUGFyYW1FcnJvcihwYXJhbXMsICdjb250YWluZXJJRCcpO1xyXG4vLyAgICAgICAgcmV0dXJuO1xyXG4vLyAgICB9XHJcblx0XHJcbi8vICAgIHZhciBsb2NhbE1ldGhvZE5hbWUgPSBtZXRob2ROYW1lLnNwbGl0KCcuJykucG9wKCk7XHJcbi8vICAgIGlmIChjb250YWluZXIuc2V0QXR0cmlidXRlKSBjb250YWluZXIuc2V0QXR0cmlidXRlKCdnaWdpZCcsIChwYXJhbXMuc291cmNlICYmIHBhcmFtcy5zb3VyY2UgIT0gbG9jYWxNZXRob2ROYW1lID8gcGFyYW1zLnNvdXJjZSArICdfJyA6ICcnKSArIGxvY2FsTWV0aG9kTmFtZSk7XHJcblxyXG4vLyAgICBpZiAoY29udGFpbmVyLnN0eWxlKSB7XHJcbi8vICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4vLyAgICAgICAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuLy8gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuLy8gICAgICAgIHZhciBpZnJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9pZnJfJyArIGNvbnRhaW5lcklEKTtcclxuLy8gICAgICAgIGlmIChpZnJlbCkge1xyXG4vLyAgICAgICAgICAgIGlmcmVsLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuLy8gICAgICAgICAgICBpZnJlbC5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XHJcbi8vICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgdmFyIGZuY0ZpeFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgIGlmIChpZnJlbCAhPSBudWxsKSB7XHJcbi8vICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5zZXRTaXplKGlmcmVsLCBwYXJhbXMud2lkdGgsIHBhcmFtcy5oZWlnaHQsIGJsbkNlbnRlcik7XHJcbi8vICAgICAgICAgICAgICAgIC8qaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFKSB7Ki9pZnJlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnOyAvKn0qL1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2V0U2l6ZShjb250YWluZXIsIHBhcmFtcy53aWR0aCwgcGFyYW1zLmhlaWdodCwgYmxuQ2VudGVyKTtcclxuLy8gICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgZm5jRml4UG9zaXRpb24oKTtcclxuLy8gICAgfVxyXG5cclxuLy8gICAgdmFyIFJlcXMgPSAoY29udGFpbmVyLlJlcXMgPyBjb250YWluZXIuUmVxcyA6IChjb250YWluZXIuUmVxcyA9IFtdKSk7XHJcbi8vICAgIHZhciByaWQgPSBSZXFzLmxlbmd0aCArICdAJyArIHNlcnZpY2VkQnkgKyAnQCcgKyBjb250YWluZXJJRDtcclxuLy8gICAgcGFyYW1zLnJpZCA9IHJpZDtcclxuLy8gICAgdmFyIG9wZXJhdGlvbiA9IG1ldGhvZE5hbWU7XHJcbi8vICAgIGlmIChwYXJhbXMuX29wZXJhdGlvbikgb3BlcmF0aW9uID0gcGFyYW1zLl9vcGVyYXRpb247XHJcbi8vICAgIHZhciByZXEgPSBSZXFzW1JlcXMubGVuZ3RoXSA9IHtcclxuLy8gICAgICAgIHJpZDogcmlkLFxyXG4vLyAgICAgICAgc2VydmljZWRCeTogc2VydmljZWRCeSxcclxuLy8gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxyXG4vLyAgICAgICAgbWV0aG9kOiBtZXRob2ROYW1lLFxyXG4vLyAgICAgICAgY29udGV4dDogcGFyYW1zWydjb250ZXh0J10sXHJcbi8vICAgICAgICBjOiBwYXJhbXMsXHJcbi8vICAgICAgICBwOiBwYXJhbXMsXHJcbi8vICAgICAgICBpOiBwYXJhbXMsXHJcbi8vICAgICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcclxuLy8gICAgICAgIGlzSFRNTDogdHJ1ZVxyXG4vLyAgICB9O1xyXG5cclxuXHJcbi8vICAgIHZhciBtZXRob2ROYW1lUGFydHMgPSBtZXRob2ROYW1lLnNwbGl0KCcuJyk7XHJcbi8vICAgIHZhciBub2RlID0gZXZhbChtZXRob2ROYW1lUGFydHNbMF0pO1xyXG4vLyAgICB2YXIgcGZ4aSA9IDE7XHJcbi8vICAgIHdoaWxlIChudWxsICE9IChub2RlID0gbm9kZVttZXRob2ROYW1lUGFydHNbcGZ4aV1dKSAmJiAoKytwZnhpIDwgbWV0aG9kTmFtZVBhcnRzLmxlbmd0aCkpIHtcclxuLy8gICAgICAgIC8vYWxlcnQocGZ4aSk7XHJcbi8vICAgIH07XHJcbi8vICAgIHZhciBmdW5jID0gbm9kZTtcclxuLy8gICAgZ2lneWEudXRpbHMuc2NyaXB0LmxvYWQoZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2pzLycgKyBzZXJ2aWNlZEJ5ICsgJy5taW4uanMnICsgKHBhcmFtc1snbGFuZyddID8gJz9sYW5nPScgKyBwYXJhbXNbJ2xhbmcnXSA6ICcnKSksIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgIGdpZ3lhLnJlcG9ydHMucmVwb3J0TG9hZChtZXRob2ROYW1lLCBwYXJhbXMpO1xyXG4vLyAgICAgICAgZ2lneWEudXRpbHMuZnVuY3Rpb25zLmNhbGxGdW5jdGlvbihtZXRob2ROYW1lLCBbcGFyYW1zLCBwYXJhbXMsIHBhcmFtc10pO1xyXG4vLyAgICB9LCB0cnVlKTtcclxuLy8gICAgcmV0dXJuIGNvbnRhaW5lcklEO1xyXG4vL31cclxuXHJcbi8vZ2lneWEudXRpbHMub2JqZWN0LmFkZChnaWd5YS51dGlscy5ET00sIHtcclxuLy8gICAgZW5hYmxlU2FmZUNvcHk6IGZ1bmN0aW9uIChlbCkge1xyXG4vLyAgICAgICAgaWYgKGVsLmFkZGVkU2FmZUNvcHkpIHJldHVybjtcclxuLy8gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGVsLCAnY29weScsIGZ1bmN0aW9uIChlKSB7IC8vdG8gbGV0IHVzZXJzIGNvcHkgVVJMcyB3aXRob3V0IHNvZnQgaHlwaGVuc1xyXG4vLyAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuLy8gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG4vLyAgICAgICAgICAgIHZhciBub2RlbmFtZSA9IHRhcmdldCAmJiB0YXJnZXQubm9kZU5hbWUgPyB0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA6ICcnO1xyXG4vLyAgICAgICAgICAgIGlmIChub2RlbmFtZSA9PSAndGV4dGFyZWEnIHx8IG5vZGVuYW1lID09ICdpbnB1dCcpIHJldHVybjtcclxuLy8gICAgICAgICAgICB2YXIgZGl2Q29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgICAgIGRpdkNvcHkuc3R5bGUuY29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmJhY2tncm91bmRDb2xvciA6ICcjRkZGRkZGJztcclxuLy8gICAgICAgICAgICBkaXZDb3B5LnN0eWxlLmZvbnRTaXplID0gJzBweCc7XHJcbi8vICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFwcGVuZFRvQm9keShkaXZDb3B5KTtcclxuLy8gICAgICAgICAgICB2YXIgc2h5UmVnZXggPSBuZXcgUmVnRXhwKFwiKCZzaHk7fFwiICsgU3RyaW5nLmZyb21DaGFyQ29kZSgxNzMpICsgXCIpXCIsIFwiZ1wiKTtcclxuLy8gICAgICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4vLyAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4vLyAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbi8vICAgICAgICAgICAgICAgIHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbi8vICAgICAgICAgICAgICAgIGRpdkNvcHkuYXBwZW5kQ2hpbGQocmFuZ2UuY2xvbmVDb250ZW50cygpKTtcclxuLy8gICAgICAgICAgICAgICAgZGl2Q29weS5pbm5lckhUTUwgPSBkaXZDb3B5LmlubmVySFRNTC5yZXBsYWNlKHNoeVJlZ2V4LCAnJyk7IC8vaXQncyB0aGUgc29mdCBoeXBoZW4gY2hhclxyXG4vLyAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0QWxsQ2hpbGRyZW4oZGl2Q29weSk7XHJcbi8vICAgICAgICAgICAgICAgIGZuUmVzdG9yZSA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIGRpdkNvcHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZDb3B5KTtcclxuLy8gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbi8vICAgICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSB3aW5kb3cuZG9jdW1lbnQuc2VsZWN0aW9uO1xyXG4vLyAgICAgICAgICAgICAgICByYW5nZSA9IHNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xyXG4vLyAgICAgICAgICAgICAgICBkaXZDb3B5LmlubmVySFRNTCA9IHJhbmdlLmh0bWxUZXh0O1xyXG4vLyAgICAgICAgICAgICAgICBkaXZDb3B5LmlubmVySFRNTCA9IGRpdkNvcHkuaW5uZXJIVE1MLnJlcGxhY2Uoc2h5UmVnZXgsICcnKTsgLy9pdCdzIHRoZSBzb2Z0IGh5cGhlbiBjaGFyXHJcbi8vICAgICAgICAgICAgICAgIHJhbmdlMiA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbi8vICAgICAgICAgICAgICAgIHJhbmdlMi5tb3ZlVG9FbGVtZW50VGV4dChkaXZDb3B5KTtcclxuLy8gICAgICAgICAgICAgICAgcmFuZ2UyLnNlbGVjdCgpO1xyXG4vLyAgICAgICAgICAgICAgICBmblJlc3RvcmUgPSBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICBkaXZDb3B5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2Q29weSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UudGV4dCAhPT0gXCJcIikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmblJlc3RvcmUsIDApO1xyXG4vLyAgICAgICAgfSk7XHJcbi8vICAgICAgICBlbC5hZGRlZFNhZmVDb3B5ID0gdHJ1ZTtcclxuLy8gICAgfVxyXG4vL30pO1xyXG5cclxuICAgIC8vZ2lneWEudXRpbHMub2JqZWN0LmFkZChnaWd5YS5wbHVnaW5VdGlscy5sYW5nLCB7XHJcbiAgICAvLyAgICBnZXREYXRlU3RyaW5nOiBmdW5jdGlvbiAod2lkZ2V0UGFyYW1zLCBkYXRlKSB7XHJcbiAgICAvLyAgICAgICAgaWYgKCF3aWRnZXRQYXJhbXMgfHwgIXdpZGdldFBhcmFtc1snZGF0ZUZvcm1hdCddKSByZXR1cm47XHJcbiAgICAvLyAgICAgICAgdmFyIG1vbnRoTmFtZXMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcclxuICAgIC8vICAgICAgICB2YXIgZGF0ZUZvcm1hdCA9IHdpZGdldFBhcmFtc1snZGF0ZUZvcm1hdCddO1xyXG4gICAgLy8gICAgICAgIHZhciBkID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAvLyAgICAgICAgdmFyIG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgICAvLyAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG1vbnRoTmFtZXNbZGF0ZS5nZXRNb250aCgpXTtcclxuICAgIC8vICAgICAgICB2YXIgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAvLyAgICAgICAgcmV0dXJuIGRhdGVGb3JtYXRcclxuICAgIC8vICAgICAgICAgICAgLnJlcGxhY2UoLyVkZC9nLCAoJzAnICsgZCkuc2xpY2UoLTIpKVxyXG4gICAgLy8gICAgICAgICAgICAucmVwbGFjZSgvJWQvZywgZClcclxuICAgIC8vICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU1NL2csIG1vbnRoTmFtZSlcclxuICAgIC8vICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU0vZywgbW9udGhOYW1lLnN1YnN0cigwLCAzKSlcclxuICAgIC8vICAgICAgICAgICAgLnJlcGxhY2UoLyVNTS9nLCAoJzAnICsgbSkuc2xpY2UoLTIpKVxyXG4gICAgLy8gICAgICAgICAgICAucmVwbGFjZSgvJU0vZywgbSlcclxuICAgIC8vICAgICAgICAgICAgLnJlcGxhY2UoLyV5eXl5L2csIHkpXHJcbiAgICAvLyAgICAgICAgICAgIC5yZXBsYWNlKC8leXkvZywgeS50b1N0cmluZygpLnNsaWNlKC0yKSlcclxuICAgIC8vICAgIH1cclxuICAgIC8vfSlcclxuXHJcblxyXG4vL2dpZ3lhLmdsb2JhbC5YTUxVdGlscyBtb2R1bGVcclxuLy9naWd5YS5nbG9iYWwuWE1MVXRpbHMgPSB7XHJcbi8vICAgIENyZWF0ZVhNTEZyb21TdHJpbmc6IGZ1bmN0aW9uIChzWE1MKSB7XHJcbi8vICAgICAgICB2YXIgZG9jID0gbnVsbDtcclxuLy8gICAgICAgIGlmICh3aW5kb3cuQWN0aXZlWE9iamVjdCkge1xyXG4vLyAgICAgICAgICAgIGRvYyA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTERPTVwiKTtcclxuLy8gICAgICAgICAgICBkb2MuYXN5bmMgPSBcImZhbHNlXCI7XHJcbi8vICAgICAgICAgICAgZG9jLmxvYWRYTUwoc1hNTCk7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4vLyAgICAgICAgICAgIGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc1hNTCwgXCJ0ZXh0L3htbFwiKTtcclxuLy8gICAgICAgIH1cclxuXHJcbi8vICAgICAgICByZXR1cm4gZG9jO1xyXG4vLyAgICB9LFxyXG5cclxuLy8gICAgQ29weVByb3BlcnRpZXM6IGZ1bmN0aW9uIChwcm9wQmFnLCB0YXJnZXRCYWcsIHBmeCwgUHJvY2Nlc29yKSB7XHJcbi8vICAgICAgICBpZiAodHlwZW9mIHBmeCA9PSAndW5kZWZpbmVkJykgcGZ4ID0gJyc7XHJcbi8vICAgICAgICBpZiAodHlwZW9mIHRhcmdldEJhZyA9PSAndW5kZWZpbmVkJykgdGFyZ2V0QmFnID0ge307XHJcbi8vICAgICAgICBpZiAoUHJvY2Nlc29yICE9IG51bGwpIHtcclxuLy8gICAgICAgICAgICBmb3IgKHZhciBwcm9wTmFtZTEgaW4gcHJvcEJhZykge1xyXG4vLyAgICAgICAgICAgICAgICB0YXJnZXRCYWdbcGZ4ICsgcHJvcE5hbWUxXSA9IFByb2NjZXNvcihwcm9wTmFtZTEsIHByb3BCYWdbcHJvcE5hbWUxXSk7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgZm9yICh2YXIgcHJvcE5hbWUyIGluIHByb3BCYWcpIHtcclxuLy8gICAgICAgICAgICAgICAgdGFyZ2V0QmFnW3BmeCArIHByb3BOYW1lMl0gPSBwcm9wQmFnW3Byb3BOYW1lMl07XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgcmV0dXJuIHRhcmdldEJhZztcclxuLy8gICAgfSxcclxuXHJcbi8vICAgIENvbGxlY3RBdHRyaWJ1dGVzRnJvbVhNTFBhdGhUb09iamVjdDogZnVuY3Rpb24gKHhtbG9ialJlc291cmNlLCBSZXNvdXJjZU5vZGVQYXRoU2VnbWVudHMsIHJlcywgYmxuQ29sbGVjdEZyb21BbmNlc3RvcnMsIHByb2Nlc3Nvcikge1xyXG4vLyAgICAgICAgZm9yICh2YXIgaVBhdGhTZWdtZW50ID0gMDsgKChpUGF0aFNlZ21lbnQgPCBSZXNvdXJjZU5vZGVQYXRoU2VnbWVudHMubGVuZ3RoKSAmJiAodHlwZW9mIHhtbG9ialJlc291cmNlICE9ICd1bmRlZmluZWQnKSkgOyBpUGF0aFNlZ21lbnQrKykge1xyXG4vLyAgICAgICAgICAgIHhtbG9ialJlc291cmNlID0geG1sb2JqUmVzb3VyY2UuY2hpbGROb2Rlc1tSZXNvdXJjZU5vZGVQYXRoU2VnbWVudHNbaVBhdGhTZWdtZW50XV07XHJcbi8vICAgICAgICAgICAgaWYgKHhtbG9ialJlc291cmNlICE9IG51bGwgJiYgYmxuQ29sbGVjdEZyb21BbmNlc3RvcnMpIHtcclxuLy8gICAgICAgICAgICAgICAgdGhpcy5Db3B5UHJvcGVydGllcyh4bWxvYmpSZXNvdXJjZS5hdHRyaWJ1dGVzLCByZXMsICcnLCBwcm9jZXNzb3IpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH1cclxuXHJcbi8vICAgICAgICBpZiAodHlwZW9mIHhtbG9ialJlc291cmNlICE9ICd1bmRlZmluZWQnKSB7XHJcbi8vICAgICAgICAgICAgdGhpcy5Db3B5UHJvcGVydGllcyh4bWxvYmpSZXNvdXJjZS5hdHRyaWJ1dGVzLCByZXMsICcnLCBwcm9jZXNzb3IpXHJcbi8vICAgICAgICB9XHJcbi8vICAgIH0sXHJcblxyXG4vLyAgICBtZXJnZU5vZGVzOiBmdW5jdGlvbiAoc3JjTm9kZSwgdGFyZ2V0T2JqZWN0KSB7XHJcblxyXG4vLyAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRPYmplY3QuYXR0cmlidXRlcyA9PSAndW5kZWZpbmVkJykgdGFyZ2V0T2JqZWN0LmF0dHJpYnV0ZXMgPSB7fTtcclxuLy8gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0T2JqZWN0LmNoaWxkTm9kZXMgPT0gJ3VuZGVmaW5lZCcpIHRhcmdldE9iamVjdC5jaGlsZE5vZGVzID0ge307XHJcblxyXG4vLyAgICAgICAgdmFyIHRhcmdldEF0dHJpYnV0ZXMgPSB0YXJnZXRPYmplY3QuYXR0cmlidXRlcztcclxuLy8gICAgICAgIHZhciBzcmNOb2RlQXR0cmlidXRlcyA9IHNyY05vZGUuYXR0cmlidXRlcztcclxuLy8gICAgICAgIC8qIGZvciAodmFyIGF0dE5hbWUgaW4gc3JjTm9kZUF0dHJpYnV0ZXMpIHtcclxuLy9cdFx0dGFyZ2V0QXR0cmlidXRlc1thdHROYW1lXSA9IHNyY05vZGVBdHRyaWJ1dGVzW2F0dE5hbWVdO1xyXG4vL1x0XHR9Ki9cclxuXHJcbi8vICAgICAgICBpZiAoc3JjTm9kZUF0dHJpYnV0ZXMpIHtcclxuLy8gICAgICAgICAgICAvL3RoaXMuQ29weUF0dHJpYnV0ZXNUb09iamVjdChzcmNOb2RlQXR0cmlidXRlcywgdGFyZ2V0QXR0cmlidXRlcywgJycpO1xyXG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3JjTm9kZUF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHNyY05vZGVBdHRyaWJ1dGVzW2ldLnZhbHVlICE9IG51bGwpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZXNbc3JjTm9kZUF0dHJpYnV0ZXNbaV0ubm9kZU5hbWVdID0gc3JjTm9kZUF0dHJpYnV0ZXNbaV0udmFsdWU7XHJcbi8vICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICB0YXJnZXRBdHRyaWJ1dGVzW3NyY05vZGVBdHRyaWJ1dGVzW2ldLm5vZGVOYW1lXSA9IHNyY05vZGVBdHRyaWJ1dGVzW2ldLm5vZGVWYWx1ZTtcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH1cclxuLy8gICAgICAgIHZhciB0YXJnZXRDaGlsZE5vZGU7XHJcbi8vICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IHNyY05vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IHUrKykgeyAvL2FkZCBtaXNzaW5nIGNoaWxkIG5vZGVzXHJcbi8vICAgICAgICAgICAgdmFyIHNyY0NoaWxkTm9kZSA9IHNyY05vZGUuY2hpbGROb2Rlc1t1XTtcclxuLy8gICAgICAgICAgICB0YXJnZXRDaGlsZE5vZGUgPSB0YXJnZXRPYmplY3QuY2hpbGROb2Rlc1tzcmNDaGlsZE5vZGUubm9kZU5hbWVdO1xyXG4vLyAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0Q2hpbGROb2RlID09ICd1bmRlZmluZWQnKSB7XHJcbi8vICAgICAgICAgICAgICAgIHRhcmdldENoaWxkTm9kZSA9IHRhcmdldE9iamVjdC5jaGlsZE5vZGVzW3NyY0NoaWxkTm9kZS5ub2RlTmFtZV0gPSB7IGF0dHJpYnV0ZXM6IHt9LCBjaGlsZE5vZGVzOiB7fSB9O1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB0aGlzLm1lcmdlTm9kZXMoc3JjQ2hpbGROb2RlLCB0YXJnZXRDaGlsZE5vZGUpO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgcmV0dXJuIHRhcmdldE9iamVjdDtcclxuLy8gICAgfVxyXG4vL31cclxuXHJcbi8vZ2lneWEuZ2xvYmFsLnJlc29sdmVyID0gZnVuY3Rpb24gKHByb2NjZXNzb3IpIHtcclxuLy8gICAgdGhpcy5jb25maWd1cmF0aW9ucyA9IFtdO1xyXG4vLyAgICB0aGlzLm1lcmdlZENvbmZpZyA9IHt9O1xyXG4vLyAgICB0aGlzLmlzTWVyZ2VkID0gdHJ1ZTtcclxuLy8gICAgdGhpcy5fcHJvY2Vzc29yID0gcHJvY2Nlc3NvcjtcclxuLy8gICAgdGhpcy5tZXJnZSA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgIGlmICghdGhpcy5pc01lcmdlZCkge1xyXG4vLyAgICAgICAgICAgIHRoaXMubWVyZ2VkQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB7fSwgY2hpbGROb2Rlczoge30gfTtcclxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uZmlndXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgdmFyIHhtbERvYyA9IHRoaXMuY29uZmlndXJhdGlvbnNbaV07XHJcbi8vICAgICAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5YTUxVdGlscy5tZXJnZU5vZGVzKHhtbERvYywgdGhpcy5tZXJnZWRDb25maWcpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB0aGlzLmlzTWVyZ2VkID0gdHJ1ZTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgfVxyXG4vLyAgICB0aGlzLlJlc29sdmUgPSBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICBpZiAodGhpcy5tZXJnZSkgdGhpcy5tZXJnZSgpO1xyXG4vLyAgICAgICAgdmFyIHJlcyA9IHt9O1xyXG4vLyAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09ICdvYmplY3QnKSB7XHJcbi8vICAgICAgICAgICAgcmVzID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJndW1lbnRzLmxlbmd0aDsgdSsrKSB7XHJcbi8vICAgICAgICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1t1XTtcclxuLy8gICAgICAgICAgICB2YXIgY3RvciA9IGFyZy5jb25zdHJ1Y3RvcjtcclxuLy8gICAgICAgICAgICBpZiAoY3RvciA9PSBTdHJpbmcpIHtcclxuXHJcbi8vICAgICAgICAgICAgICAgIHZhciBhclBhdGhzID0gYXJnLnNwbGl0KCd8Jyk7XHJcbi8vICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBhclBhdGhzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IHRoaXMudHJpbUNoYXJzQXRTdWZmaXgodGhpcy50cmltQ2hhcnNBdFByZWZpeChhclBhdGhzW2ldLCAnIFxcblxcclxcdCcpLCAnIFxcblxcclxcdCcpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3VyID0gKHBhdGguY2hhckF0KDApID09ICcrJyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICB2YXIgYXJQYXRoID0gcGF0aC5zcGxpdCgnLycpLnNsaWNlKDEpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKHJlY3VyKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFxyXG4vLyAgICAgICAgICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLlhNTFV0aWxzLkNvbGxlY3RBdHRyaWJ1dGVzRnJvbVhNTFBhdGhUb09iamVjdCh0aGlzLm1lcmdlZENvbmZpZywgYXJQYXRoLCByZXMsIHJlY3VyLCB0aGlzLl9wcm9jZXNzb3IpO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfSBlbHNlIGlmIChjdG9yID09IEFycmF5KSB7XHJcbi8vICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgYXJnLmxlbmd0aDsgbisrKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICBSZXNvbHZlKGFyZ1tuXSwgcmVzKTtcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH1cclxuLy8gICAgICAgIHJldHVybiByZXM7XHJcbi8vICAgIH1cclxuXHRcdFx0XHRcdFxyXG4vLyAgICB0aGlzLnRyaW1DaGFyc0F0UHJlZml4ID0gZnVuY3Rpb24gKHMsIGNoYXJzKSB7XHJcbi8vICAgICAgICB2YXIgaWR4ID0gMDtcclxuLy8gICAgICAgIGlmICgodHlwZW9mIHMgPT0gJ3VuZGVmaW5lZCcpIHx8IChzLmxlbmd0aCA9PSAwKSkgcmV0dXJuICcnO1xyXG4vLyAgICAgICAgdmFyIHNsID0gcy5sZW5ndGg7XHJcbi8vICAgICAgICB3aGlsZSAoKGlkeCA8PSBzbCkgJiYgKGNoYXJzLmluZGV4T2Yocy5jaGFyQXQoaWR4KSkgPiAtMSkpIHtcclxuLy8gICAgICAgICAgICBpZHgrKztcclxuLy8gICAgICAgIH1cclxuLy8gICAgICAgIHJldHVybiBzLnN1YnN0cmluZyhpZHgsIHNsKTtcclxuLy8gICAgfVxyXG4vLyAgICB0aGlzLnRyaW1DaGFyc0F0U3VmZml4ID0gZnVuY3Rpb24gKHMsIGNoYXJzKSB7XHJcbi8vICAgICAgICBpZiAoKHR5cGVvZiBzID09ICd1bmRlZmluZWQnKSB8fCAocy5sZW5ndGggPT0gMCkpIHJldHVybiAnJztcclxuLy8gICAgICAgIHZhciBpZHggPSBzLmxlbmd0aCAtIDE7XHJcbi8vICAgICAgICB3aGlsZSAoKGlkeCA+PSAwKSAmJiAoY2hhcnMuaW5kZXhPZihzLmNoYXJBdChpZHgpKSA+IC0xKSkge1xyXG4vLyAgICAgICAgICAgIGlkeC0tO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIGlkeCArIDEpO1xyXG5cdFxyXG4vLyAgICB9XHJcbi8vICAgIHRoaXMuYWRkQ29uZmlnID0gZnVuY3Rpb24gKHNYTUwpIHtcclxuLy8gICAgICAgIGlmICh0eXBlb2Ygc1hNTCA9PSAnc3RyaW5nJykge1xyXG4vLyAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMucHVzaChnaWd5YS5nbG9iYWwuWE1MVXRpbHMuQ3JlYXRlWE1MRnJvbVN0cmluZyhzWE1MKSk7XHJcbi8vICAgICAgICAgICAgdGhpcy5pc01lcmdlZCA9IGZhbHNlO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICB9XHJcbi8vICAgIHRoaXMuZ2V0VGV4dEZyb21LZXkgPSBmdW5jdGlvbiAodGV4dEtleSkge1xyXG4vLyAgICAgICAgcmV0dXJuIHRoaXMuUmVzb2x2ZSgnL2NvbmZpZy9sYW5nLycgKyB0ZXh0S2V5KVsndGV4dCddO1xyXG4vLyAgICB9XHJcbi8vfVxyXG5cdFx0XHJcbi8vZ2lneWEuZ2xvYmFsLnJlc29sdmVyLmRlZmF1bHRQcm9jY2Vzc29yID0gZnVuY3Rpb24gKFByb3BlcnR5TmFtZSwgUHJvcGVydHlWYWx1ZSkge1xyXG4vLyAgICB2YXIgbGNhc2VQcm9wZXJ0eU5hbWUgPSBQcm9wZXJ0eU5hbWUudG9Mb3dlckNhc2UoKTtcclxuLy8gICAgdmFyIGxhc3REYXNoSW5kZXggPSBsY2FzZVByb3BlcnR5TmFtZS5pbmRleE9mKCctJyk7XHJcbi8vICAgIGlmIChsYXN0RGFzaEluZGV4ICE9IC0xKSB7XHJcbi8vICAgICAgICBsY2FzZVByb3BlcnR5TmFtZSA9IGxjYXNlUHJvcGVydHlOYW1lLnN1YnN0cmluZyhsYXN0RGFzaEluZGV4ICsgMSwgbGNhc2VQcm9wZXJ0eU5hbWUubGVuZ3RoKTtcclxuLy8gICAgfVxyXG4vLyAgICBzd2l0Y2ggKGxjYXNlUHJvcGVydHlOYW1lKSB7XHJcbi8vICAgICAgICBjYXNlICdib2xkJzpcclxuLy8gICAgICAgIGNhc2UgJ2l0YWxpYyc6XHJcbi8vICAgICAgICBjYXNlICd1bmRlcmxpbmUnOlxyXG4vLyAgICAgICAgICAgIHJldHVybiBQcm9wZXJ0eVZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PSAndHJ1ZSc7XHJcbi8vICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICBjYXNlICd3aWR0aCc6XHJcbi8vICAgICAgICBjYXNlICdoZWlnaHQnOlxyXG4vLyAgICAgICAgICAgIHJldHVybiBQcm9wZXJ0eVZhbHVlLnJlcGxhY2UoJyUnLCAnJyk7XHJcbi8vICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICBjYXNlICdzaXplJzpcclxuLy8gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoUHJvcGVydHlWYWx1ZSk7XHJcbi8vICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgIHJldHVybiBQcm9wZXJ0eVZhbHVlO1xyXG4vLyAgICB9XHJcbi8vfVxyXG5cclxuLy9naWd5YS5nbG9iYWwuZ2V0U3ByaXRlUmVuZGVyZXJzID0gZnVuY3Rpb24gKG9Hcm91cHMpIHtcclxuLy8gICAgLy9ncm91cDoge3BhdGgsdyxofVxyXG4vLyAgICB2YXIgYXJQYXRocyA9IFtdO1xyXG4vLyAgICB2YXIgeCA9IDA7XHJcbi8vICAgIHZhciByZW5kZXJlcnMgPSB7fTtcclxuLy8gICAgZm9yICh2YXIgZ3JvdXBJRCBpbiBvR3JvdXBzKSB7XHJcbi8vICAgICAgICB2YXIgZ3JvdXAgPSBvR3JvdXBzW2dyb3VwSURdO1xyXG4vLyAgICAgICAgaWYgKCFncm91cC5waXhlbFJhdGlvKSBncm91cC5waXhlbFJhdGlvID0gMTtcclxuLy8gICAgICAgIGFyUGF0aHMucHVzaChncm91cC5wYXRoICsgJ3wnICsgZ3JvdXAudyAqIGdyb3VwLnBpeGVsUmF0aW8gKyAnLCcgKyBncm91cC5oICogZ3JvdXAucGl4ZWxSYXRpbyk7XHJcbi8vICAgIH1cclxuLy8gICAgdmFyIHNyYyA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9HZXRTcHJpdGUuYXNoeD9wYXRoPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXJQYXRocy5qb2luKCdeJykucmVwbGFjZSgvXFxbXFxdLywgJycpKSk7XHJcbi8vICAgIGZvciAodmFyIGdyb3VwSUQgaW4gb0dyb3Vwcykge1xyXG4vLyAgICAgICAgdmFyIGdyb3VwID0gb0dyb3Vwc1tncm91cElEXTtcclxuLy8gICAgICAgIHZhciBzcHJpdGVHcm91cERhdGEgPSB7fTtcclxuLy8gICAgICAgIHNwcml0ZUdyb3VwRGF0YS5zcHJpdGVEYXRhID0ge307XHJcblxyXG4vLyAgICAgICAgdmFyIHJlZ2V4cCA9IC9cXFsoLio/KVxcXS9nO1xyXG4vLyAgICAgICAgdmFyIGFyTWF0Y2hlcyA9IFtdO1xyXG4vLyAgICAgICAgdmFyIGlNYXRjaCA9IDA7XHJcbi8vICAgICAgICBzcHJpdGVHcm91cERhdGEuc3JjVGVtcGxhdGUgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaScgKyBncm91cC5wYXRoLnJlcGxhY2UocmVnZXhwLCBmdW5jdGlvbiAoXywgcGxhY2Vob2xkZXIpIHtcclxuLy8gICAgICAgICAgICBhck1hdGNoZXMucHVzaChwbGFjZWhvbGRlci5zcGxpdCgnLCcpKTtcclxuLy8gICAgICAgICAgICByZXR1cm4gJ3snICsgKGlNYXRjaCsrKSArICd9JztcclxuLy8gICAgICAgIH0pKTtcclxuLy8gICAgICAgIHZhciBhclNwcml0ZUlEcyA9IGdpZ3lhLmdsb2JhbC5nZXRDb21iaW5hdGlvbihhck1hdGNoZXMpO1xyXG4vLyAgICAgICAgaWYgKGFyU3ByaXRlSURzLmxlbmd0aCA9PSAwKSBhclNwcml0ZUlEcy5wdXNoKFsnJ10pO1xyXG5cclxuLy8gICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJTcHJpdGVJRHMubGVuZ3RoOyB1KyspIHtcclxuLy8gICAgICAgICAgICB2YXIgaWQgPSBhclNwcml0ZUlEc1t1XS5qb2luKCctJyk7XHJcbi8vICAgICAgICAgICAgaWYgKGlkID09ICcnKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlkID0gJ2RlZmF1bHQnO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICBzcHJpdGVHcm91cERhdGEuc3ByaXRlRGF0YVtpZF0gPSB7XHJcbi8vICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGdyb3VwSUQsXHJcbi8vICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuLy8gICAgICAgICAgICAgICAgeDogeCxcclxuLy8gICAgICAgICAgICAgICAgdzogZ3JvdXAudyxcclxuLy8gICAgICAgICAgICAgICAgaDogZ3JvdXAuaFxyXG4vLyAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgICAgeCArPSBncm91cC53O1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgcmVuZGVyZXJzW2dyb3VwSURdID0gbmV3IGdpZ3lhLmdsb2JhbC5TcHJpdGVSZW5kZXJlcihzcmMsIHNwcml0ZUdyb3VwRGF0YS5zcmNUZW1wbGF0ZSwgc3ByaXRlR3JvdXBEYXRhLnNwcml0ZURhdGEsIGdyb3VwLncsIGdyb3VwLmgsIGdyb3VwLnBpeGVsUmF0aW8pO1xyXG4vLyAgICB9XHJcbi8vICAgIHJldHVybiByZW5kZXJlcnM7XHJcbi8vfVxyXG5cclxuLy9naWd5YS5nbG9iYWwuU3ByaXRlUmVuZGVyZXIgPSBmdW5jdGlvbiAoc3JjLCBzcmNUZW1wbGF0ZSwgc3ByaXRlRGF0YSwgc3ByaXRlVywgc3ByaXRlSCwgcGl4ZWxSYXRpbykge1xyXG4vLyAgICB0aGlzLnNyYyA9IHNyYztcclxuLy8gICAgdGhpcy5zcmNUZW1wbGF0ZSA9IHNyY1RlbXBsYXRlO1xyXG4vLyAgICB0aGlzLnNwcml0ZURhdGEgPSBzcHJpdGVEYXRhO1xyXG4vLyAgICB0aGlzLnNwcml0ZVcgPSBzcHJpdGVXO1xyXG4vLyAgICB0aGlzLnNwcml0ZUggPSBzcHJpdGVIO1xyXG4vLyAgICB0aGlzLnBpeGVsUmF0aW8gPSBwaXhlbFJhdGlvO1xyXG4vL31cclxuXHJcbi8vZ2lneWEuZ2xvYmFsLlNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZSA9IHtcclxuLy8gICAgZ2V0U3ByaXRlRGF0YTogZnVuY3Rpb24gKGlkLCBkb250VXNlU3ByaXRlcykge1xyXG4vLyAgICAgICAgdmFyIG9TcHJpdGUgPSB0aGlzLnNwcml0ZURhdGFbaWRdO1xyXG4vLyAgICAgICAgaWYgKG9TcHJpdGUgJiYgIWRvbnRVc2VTcHJpdGVzKSB7XHJcbi8vICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlRGF0YVtpZF07XHJcbi8vICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgIHZhciBpID0gMDtcclxuLy8gICAgICAgICAgICB2YXIgcGFyYW1zID0gaWQuc3BsaXQoJy0nKTtcclxuLy8gICAgICAgICAgICB2YXIgcmVnZXhwID0gL1xceyguKj8pXFx9L2c7XHJcbi8vICAgICAgICAgICAgdmFyIHNyYyA9IHRoaXMuc3JjVGVtcGxhdGUucmVwbGFjZShyZWdleHAsIGZ1bmN0aW9uIChfLCBncm91cCkge1xyXG4vLyAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBwYXJhbXNbaSsrXTtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHBhcmFtKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XHJcbi8vICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB9KVxyXG5cclxuLy8gICAgICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAgICBpc1NpbmdsZUltYWdlOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAgICBzcmM6IHNyY1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH1cclxuLy8gICAgfSxcclxuXHJcbi8vICAgIGdldFN0eWxlU3RyaW5nOiBmdW5jdGlvbiAoc3ByaXRlSWQsIGF1dG9NYXJnaW4pIHtcclxuLy8gICAgICAgIHZhciBvU3ByaXRlID0gdGhpcy5nZXRTcHJpdGVEYXRhKHNwcml0ZUlkKTtcclxuLy8gICAgICAgIHZhciBhclN0eWxlID0gW107XHJcblxyXG4vLyAgICAgICAgaWYgKG9TcHJpdGUpIHtcclxuLy8gICAgICAgICAgICBhclN0eWxlLnB1c2goXCJiYWNrZ3JvdW5kLWltYWdlOnVybCgnXCIgKyB0aGlzLnNyYyArIFwiJyk7XCIpO1xyXG4vLyAgICAgICAgICAgIGFyU3R5bGUucHVzaChcImJhY2tncm91bmQtcG9zaXRpb246LVwiICsgb1Nwcml0ZS54ICsgXCJweCAwcHg7XCIpO1xyXG5cclxuLy8gICAgICAgICAgICBpZiAodGhpcy5waXhlbFJhdGlvID4gMSkge1xyXG4vLyAgICAgICAgICAgICAgICBhclN0eWxlLnB1c2goXCJiYWNrZ3JvdW5kLXNpemU6YXV0byBcIiArIHRoaXMuc3ByaXRlSCArIFwicHg7XCIpO1xyXG4vLyAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgaWYgKGF1dG9NYXJnaW4pIHtcclxuLy8gICAgICAgICAgICAgICAgYXJTdHlsZS5wdXNoKFwibWFyZ2luOiAwIGF1dG87XCIpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICBhclN0eWxlLnB1c2goXCJ3aWR0aDogXCIgKyB0aGlzLnNwcml0ZVcgKyBcInB4O1wiKTtcclxuLy8gICAgICAgICAgICBhclN0eWxlLnB1c2goXCJoZWlnaHQ6IFwiICsgdGhpcy5zcHJpdGVIICsgXCJweDtsaW5lLWhlaWdodDogXCIgKyB0aGlzLnNwcml0ZUggKyBcInB4O1wiKTtcclxuLy8gICAgICAgICAgICBhclN0eWxlLnB1c2goXCJiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XCIpO1xyXG4vLyAgICAgICAgICAgIC8vYXJTdHlsZS5wdXNoKFwiZm9udC1zaXplOjFweDtcIik7XHJcbi8vICAgICAgICAgICAgYXJTdHlsZS5wdXNoKFwicG9zaXRpb246c3RhdGljO1wiKTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgICAgIHJldHVybiBhclN0eWxlLmpvaW4oJycpO1xyXG4vLyAgICB9LFxyXG5cclxuLy8gICAgZ2V0SFRNTDogZnVuY3Rpb24gKHNwcml0ZUlkLCBhdXRvTWFyZ2luLCBkb250VXNlU3ByaXRlcywgZWxJRCkge1xyXG5cclxuXHJcbi8vICAgICAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLy8gICAgICAgIC8vIHNlZSBidWc6IDMzNDQ4XHJcbi8vICAgICAgICB2YXIgZGlzYWJsZVNwcml0ZU9uQ2hyb21lID0gKCh0aGlzLnBpeGVsUmF0aW8gPiAxKSAmJiBnaWd5YS5sb2NhbEluZm8uaXNDaHJvbWUpO1xyXG4vLyAgICAgICAgZG9udFVzZVNwcml0ZXMgPSBkb250VXNlU3ByaXRlcyB8fCBkaXNhYmxlU3ByaXRlT25DaHJvbWU7XHJcbi8vICAgICAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8vICAgICAgICB2YXIgb1Nwcml0ZSA9IHRoaXMuZ2V0U3ByaXRlRGF0YShzcHJpdGVJZCwgZG9udFVzZVNwcml0ZXMpO1xyXG4vLyAgICAgICAgdmFyIGFySFRNTCA9IFtdO1xyXG4vLyAgICAgICAgaWYgKG9TcHJpdGUpIHtcclxuLy8gICAgICAgICAgICBpZiAob1Nwcml0ZS5pc1NpbmdsZUltYWdlKSB7XHJcbi8vICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCc8aW1nIHNyYz1cIicgKyBvU3ByaXRlLnNyYyArICdcIiBzdHlsZT1cIndpZHRoOicgKyB0aGlzLnNwcml0ZVcgKyAncHg7aGVpZ2h0OicgKyB0aGlzLnNwcml0ZUggKyAncHg7cG9zaXRpb246c3RhdGljO21hcmdpbjowXCIgYWx0PVwiXCIgLz4nKTtcclxuLy8gICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICBhckhUTUwucHVzaCgnPGRpdiBzdHlsZT1cIicpO1xyXG4vLyAgICAgICAgICAgICAgICBhckhUTUwucHVzaCh0aGlzLmdldFN0eWxlU3RyaW5nKHNwcml0ZUlkLCBhdXRvTWFyZ2luKSk7XHJcbi8vICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCdcIicpO1xyXG4vLyAgICAgICAgICAgICAgICBpZiAoZWxJRCkgYXJIVE1MLnB1c2goJyBpZD1cIicgKyBlbElEICsgJ1wiJyk7XHJcbi8vICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCc+PC9kaXY+Jyk7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgcmV0dXJuIGFySFRNTC5qb2luKCcnKTtcclxuLy8gICAgfVxyXG4vL31cclxuLy9naWd5YS5nbG9iYWwuZ2V0Q29tYmluYXRpb24gPSBmdW5jdGlvbiAoYXIsIGluZGV4KSB7XHJcbi8vICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcclxuLy8gICAgaWYgKCFhciB8fCBhci5sZW5ndGggPT0gMCkgcmV0dXJuIFtdO1xyXG4vLyAgICB2YXIgY3VycmVudEFycmF5ID0gYXJbaW5kZXhdO1xyXG4vLyAgICBpZiAoaW5kZXggPT0gYXIubGVuZ3RoIC0gMSkge1xyXG4vLyAgICAgICAgdmFyIGFyQ29tYmluYXRpb25zID0gW107XHJcbi8vICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgIGFyQ29tYmluYXRpb25zLnB1c2goW2N1cnJlbnRBcnJheVtpXV0pO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgcmV0dXJuIGFyQ29tYmluYXRpb25zO1xyXG4vLyAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgdmFyIGFyQ29tYmluYXRpb25zID0gW107XHJcbi8vICAgICAgICB2YXIgYXJDb21iaW5hdGlvbiA9IGdpZ3lhLmdsb2JhbC5nZXRDb21iaW5hdGlvbihhciwgaW5kZXggKyAxKVxyXG4vLyAgICAgICAgaWYgKGN1cnJlbnRBcnJheSkge1xyXG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJDb21iaW5hdGlvbi5sZW5ndGg7IHUrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgYXJDb21iaW5hdGlvbnMucHVzaChbY3VycmVudEFycmF5W2ldXS5jb25jYXQoYXJDb21iaW5hdGlvblt1XSkpO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgcmV0dXJuIGFyQ29tYmluYXRpb25zO1xyXG4vLyAgICB9XHJcbi8vfVxyXG5cclxuLy9naWd5YS5nbG9iYWwucmVzb2x2ZVByb3ZpZGVycyA9IGZ1bmN0aW9uIChlbmFibGVkUHJvdmlkZXJzLCBkaXNhYmxlZFByb3ZpZGVycywgcmVxdWlyZWRDYXBhYmlsaXRpZXMpIHtcclxuXHJcbi8vICAgIC8vIHNldHRpbmcgdGhlIHByb3ZpZGVycyBhcnJheS5cclxuLy8gICAgLy8gc2V0dGluZyB0aGUgYXJyYXkgb2YgdGhlIHByb3ZpZGVyczpcclxuLy8gICAgdmFyIGVQcm92aWRlcnMgPSBnaWd5YS51dGlscy5hcnJheS5nZXRBcnJheUZyb21TdHJpbmcoZW5hYmxlZFByb3ZpZGVycywgJywnLCB0cnVlKTtcclxuLy8gICAgdmFyIGRQcm92aWRlcnMgPSBnaWd5YS51dGlscy5hcnJheS5nZXRBcnJheUZyb21TdHJpbmcoZGlzYWJsZWRQcm92aWRlcnMsICcsJywgdHJ1ZSk7XHJcbi8vICAgIHZhciByQ2FwYWJpbGl0aWVzID0gZ2lneWEudXRpbHMuYXJyYXkuZ2V0QXJyYXlGcm9tU3RyaW5nKHJlcXVpcmVkQ2FwYWJpbGl0aWVzLCAnLCcsIHRydWUpO1xyXG5cclxuLy8gICAgLy8gcmVtb3ZpbmcgdGhlIGRpc2FibGVkIHByb3ZpZGVycy5cclxuLy8gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICBnaWd5YS51dGlscy5hcnJheS5yZW1vdmVCeVZhbHVlKGVQcm92aWRlcnMsIGRQcm92aWRlcnNbaV0pO1xyXG4vLyAgICB9XHJcblxyXG4vLyAgICAvLyBjb252ZXJ0aW5nIHRoZSBwcm92aWRycyBzdHJpbmcgaW50byB0aGUgcHJvdmlkZXJzIE9iamVjdCBmcm9tIHRoZSBhcnJheSBvZiBwcm92aWRlcnMgaW4gdGhlIGludGVybmFsICdfJyBzZGsuXHJcbi8vICAgIHZhciBwcm92aWRlcnMgPSBnaWd5YS5fLnByb3ZpZGVycy5nZXRQcm92aWRlcnNCeU5hbWUoZVByb3ZpZGVycy5qb2luKCcsJykpO1xyXG5cclxuLy8gICAgLy8gcmVtb3ZpbmcgdGhlIGRpc2FibGVkIHByb3ZpZGVycy5cclxuLy8gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICBnaWd5YS51dGlscy5hcnJheS5yZW1vdmVCeVByb3BlcnR5KHByb3ZpZGVycywgJ25hbWUnLCBkUHJvdmlkZXJzW2ldKTtcclxuLy8gICAgfVxyXG5cclxuLy8gICAgLy8gb25seSBwcm92aWRlcnMgdGhhdCBzdXBwb3J0IHRoZSBjYXBhYmlsaXRpZXMgd2lsbCByZW1haW4uXHJcbi8vICAgIHJldHVybiBnaWd5YS5zb2NpYWxpemUuZ2V0UHJvdmlkZXJzRm9yUmVxdWlyZWRDYXBhYmlsaXRpZXMocHJvdmlkZXJzLCByQ2FwYWJpbGl0aWVzKTtcclxuLy99Il0sInNvdXJjZVJvb3QiOiIifQ==