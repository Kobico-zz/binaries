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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.socialize.plugins.login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.socialize.plugins.login.js":
/*!**********************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.login.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
    window.gigya.global.SpriteRenderer.prototype = {
        getHTML: function (spriteId, autoMargin, dontUseSprites, elID) {
            /* ----------------------------------------------------------------------------------------*/
            // see bug: 33448
            //var disableSpriteOnChrome = ((this.pixelRatio > 1) && gigya.localInfo.isChrome);
            //dontUseSprites = dontUseSprites || disableSpriteOnChrome;
            /* ----------------------------------------------------------------------------------------*/
            var oSprite = this.getSpriteData(spriteId, dontUseSprites);
            var arHTML = [];
            if (oSprite) {
                if (oSprite.isSingleImage) {
                    arHTML.push('<img src="' + oSprite.src + '" style="width:' + this.spriteW + 'px;height:' + this.spriteH + 'px;position:static;margin:0" alt="" />');
                } else {
                    arHTML.push('<div style="');
                    arHTML.push(this.getStyleString(spriteId, autoMargin));
                    arHTML.push('"');
                    if (elID) arHTML.push(' id="' + elID + '"');
                    arHTML.push('></div>');
                }
            }
            return arHTML.join('');
        },
        getSpriteData: function (id, dontUseSprites) {
            var oSprite = this.spriteData[id];
            if (oSprite && !dontUseSprites) {
                return this.spriteData[id];
            } else {
                var i = 0;
                var params = id.split('-');
                var regexp = /\{(.*?)\}/g;
                var src = this.srcTemplate.replace(regexp, function (_, group) {
                    var param = params[i++];
                    if (param) {
                        return param;
                    } else {
                        return '';
                    }
                })

                return {
                    isSingleImage: true,
                    src: src
                }
            }
        },
        getStyleString: function (spriteId, autoMargin) {
            var oSprite = this.getSpriteData(spriteId);
            var arStyle = [];

            if (oSprite) {
                arStyle.push("background-image:url('" + this.src + "');");
                arStyle.push("background-position:-" + oSprite.x + "px 0px;");

                if (this.pixelRatio > 1) {
                    arStyle.push("background-size:" + (this.spriteLength * this.spriteW) + "px " + this.spriteH + "px;");
                }

                if (autoMargin) {
                    arStyle.push("margin: 0 auto;");
                }
                arStyle.push("width: " + this.spriteW + "px;");
                arStyle.push("height: " + this.spriteH + "px;line-height: " + this.spriteH + "px;");
                arStyle.push("background-repeat:no-repeat;");
                //arStyle.push("font-size:1px;");
                arStyle.push("position:static;");
            }
            return arStyle.join('');
        }
    };

    if (typeof window.gigya.socialize.plugins == 'undefined') window.gigya.socialize.plugins = {};
    var _pi = window.gigya.socialize.plugins;

    if (typeof _pi.common == 'undefined') {
        _pi.common = _pi.common || {};
        _pi.common.addCSS = function (css) {
            if (!css || css == "") return;
            if (css instanceof Array) css = css.join('');

            var style = document.createElement('style');
            style.type = 'text/css';
            var rulesNode = document.createTextNode(css);

            if (style.styleSheet)
                style.styleSheet.cssText = rulesNode.nodeValue;
            else
                style.appendChild(rulesNode);

            var head = document.getElementsByTagName("head");
            var body = document.body;
            (head.length > 0 ? head[0] : body).appendChild(style);
        };
    }

    if ((typeof _pi.login == 'undefined') || (typeof _pi.login.showLoginUI_v1 == 'undefined')) {
        _pi.login = _pi.login || {};
        _pi.login.modules = {};
        _pi.login.redraw = function (containerID) {
            if (document.getElementById(containerID) && document.getElementById(containerID).innerHTML != '&#160;') {
                var m = this.modules[containerID];
                if (m.i.isConnect) {
                    this.showAddConnectionsUI_v1(m.originalC, m.originalP, m.i, true);
                } else {
                    //this.showLoginUI_v1(m.originalC,m.originalP,m.i,true);
                }
            }
        };

        _pi.login.getStyle = function (style) {
            var oStyle = {};
            switch (style.toLowerCase()) {
                case 'fulllogocolored':
                    return {
                        ratio: 2.6,
                        base: 'FullLogoColored/',
                        ext: '.png',
                        noConnected: true
                    }
                case 'fulllogo':
                    return {
                        ratio: 2.6,
                        base: 'FullLogo/',
                        ext: '.png',
                        noConnected: true
                    }
                case 'signinwith':
                    return {
                        ratio: 7.05,
                        base: 'SignInWith/',
                        ext: '.png',
                        noLastLogin: true,
                        noConnected: true,
                        minSize: 20
                    }
                default:
                    return {
                        ratio: 1,
                        ext: '.png'
                    }
            }
        };

        _pi.login.getSingleLineHeight = function (oStyle) {
            return window.gigya.pluginUtils.layout.measureText('Wg', oStyle).h + 4;
        };

        _pi.login.isTrue = function (v, def) {
            if (v == null) return def;
            return (v && (v == true || v.toLowerCase() == 'true'));
        };
        _pi.login.showLoginUI_v1 = function (c, p, internals, isEvent) {
            internals.isConnect = false;
            this.showUI(c, p, internals);
            if (!isEvent) {
                window.gigya.events.dispatchForWidget({eventName: 'load', containerID: p['containerID']}, p);
            }
        };
        _pi.login.showAddConnectionsUI_v1 = function (c, p, internals, isEvent) {
            internals.isConnect = true;
            if (p.requiredCapabilities == null) p.requiredCapabilities = 'friends';
            this.showUI(c, p, internals);
            var params = {
                cid: p.cid,
                callback: this.afterGetInfo,
                context: {This: this, conf: c, params: p, internals: internals},
                enabledProviders: p.enabledProviders,
                disabledProviders: p.disabledProviders,
                requiredCapabilities: p.requiredCapabilities,
                oauth_token: p.oauth_token
            }
            window.gigya.socialize.getUserInfo(c, params);
            if (!isEvent) window.gigya.events.dispatchForWidget({eventName: 'load', containerID: p['containerID']}, p);
        };
        _pi.login.afterGetInfo = function (res, overideContext) {
            var GS = window.gigya.socialize;
            var context = res.context;
            if (overideContext) context = overideContext;
            if (res.errorCode != 0 && !res.user) {
                delete res.requestParams.getInfoResponse;
                delete res.requestParams.context;
                delete res.context;
                window.gigya.events.dispatchErrorFromResponse(context.params, res);
                //GS._closeComponent(context.internals.rid,context.internals.isPopup);
                return;
            }
            context.internals.getInfoResponse = res;

            context.This.showUI.apply(context.This, [context.conf, context.params, context.internals]);
        };
        _pi.login.TEXT = function (lang, textKey, replaceStr, withStr) {
            return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.socialize.plugins.login.js', textKey, lang, replaceStr, withStr);
        };
        _pi.login.showUI = function (c, p, internals) {


            if (document.getElementById(p['containerID']) == null) return;
            var GS = window.gigya.socialize;
            var rid = internals['rid'];
            var This = this;

            var tdStyle = 'margin:0px;padding:0px;border:0px;';

            var resolver = new window.gigya.global.resolver(window.gigya.global.resolver.defaultProccessor);
            resolver.addConfig('<config><body font="arial"><captions bold="true" size="16" color="#4c4c4c" /><controls size="11"><snbuttons type="" buttonsize="30" color="#9b9b9b" /></controls><background background-color="transparent" /><texts size="11"><links color="#0086f1" /></texts></body></config>');
            if (internals['isPopup']) {
                resolver.addConfig('<config><body><background frame-thickness="5" frame-color="#999999" /><controls size="11"><snbuttons type="textUnder" buttonsize="35" color="#9b9b9b" /></controls></body></config>');
            }
            resolver.addConfig(c['UIConfig']);
            resolver.addConfig(p['UIConfig']);

            var lang = c['lang'];
            if (typeof p['lang'] != 'undefined') lang = p['lang'];

            var originalC = c;
            var originalP = p;
            if (internals['isPopup']) {
                var captionText;
                if (p['captionText']) {
                    captionText = p['captionText'];
                } else {
                    if (internals.isConnect) {
                        captionText = this.TEXT(lang, 'connect_with_your_friends');
                    } else {
                        captionText = this.TEXT(lang, 'login');
                    }

                }

                var oPopup = window.gigya.socialize._createJSPopup2(rid, resolver, 5, window.gigya._.getCdnResource('/gs/i/HTMLLogin/Dialog/Dialog_'), captionText);
                c = oPopup.c;
                p = oPopup.p;
            }

            var base = window.gigya._.getCdnResource('/gs/i/HTMLLogin/');
            var gsLogin = 'gigya.socialize.plugins.login';
            var lastLoginProvider = this.getLastLogin();
            var lastLoginIndication = (p['lastLoginIndication'] ? p['lastLoginIndication'].toLowerCase() : 'border');
            var facebookSuggestEnabled = (p.autoDetectUserProviders && p.autoDetectUserProviders.toLowerCase() == 'facebook' && (!lastLoginProvider || lastLoginIndication != 'welcome'))
            var hiddenProviders = [];

            if (!internals.isConnect && window.gigya.external.facebook.isLoggedIn) {
                var htmlLoginPlugin = '<div id="' + p['containerID'] + '_container"></div>';
                var htmlSuggestFacebook = '<div onmouseover="this.style.opacity=0.75;this.style.filter=\'alpha(opacity=75)\'" onmouseout="this.style.opacity=1;this.style.filter=\'alpha(opacity=100)\'" id="' + originalP['containerID'] + '_suggestFB" style="text-align:left;border:0;padding:0;margin:0;cursor:pointer" onclick="' + gsLogin + '.providerClick(\'' + p.containerID + '_container\',\'Facebook\')"><img alt="" src="' + base + 'FB_Button.gif" /></div>';
                var htmlSpacer = '<div style="height:10px;font-size:1px">&#160;</div>';
                var outerHTML = htmlLoginPlugin;

                /// maybe delete all this?
                if (facebookSuggestEnabled) {
                    document.getElementById(originalP.containerID).style.height = '';
                    hiddenProviders.push('facebook');
                    outerHTML = outerHTML + htmlSpacer + htmlSuggestFacebook;
                }

                if (outerHTML != htmlLoginPlugin) {
                    document.getElementById(p.containerID).innerHTML = outerHTML;
                    window.setTimeout(function () {
                        FB.XFBML.parse()
                    }, 300);
                    p = window.gigya.utils.object.clone(p);
                    p.containerID = p.containerID + '_container';
                }
            }
            var alignToLeft;


            var containerID = p['containerID'];
            if (this.modules[containerID] == null) {
                var fnUserChanged = function (e) {
                    if (internals.isConnect || e.eventName == 'logout') {
                        This.afterGetInfo(e, {This: This, conf: originalC, params: originalP, internals: internals})
                    }
                }
                window.gigya.socialize.addEventHandlers({listenerType: 'component'}, {
                    listenerDescription: 'listener for updating a connect widget',
                    onLogout: function () {
                        This.redraw(containerID)
                    },
                    onLogin: fnUserChanged,
                    onConnect: fnUserChanged,
                    onDisconnect: fnUserChanged
                });
                if (facebookSuggestEnabled) {
                    alignToLeft = true;
                    window.gigya.socialize.addEventHandlers({listenerType: 'component'}, {
                        onFacebookLoaded: function () {
                            if (window.gigya.external.facebook.isLoggedIn) This.showUI(originalC, originalP, internals);
                        }
                    });
                }
            }

            var buttonsStyle = p['buttonsStyle'];
            if (typeof buttonsStyle == 'undefined') buttonsStyle = '';
            var oStyle = this.getStyle(buttonsStyle);
            //if (internals.isConnect && oStyle.noConnected) oStyle = this.getStyle(''); //Will get default style


            var styleBase = '';
            if (oStyle.base) styleBase = oStyle.base;

            this.modules[containerID] = {originalC: originalC, originalP: originalP, i: internals, page: 0};
            this.modules[containerID].c = c;
            this.modules[containerID].p = p;
            var arHTML = [];
            var a = 0;

            var requiredCapabilities = p['requiredCapabilities'];
            if (!requiredCapabilities) requiredCapabilities = 'login';
            requiredCapabilities = requiredCapabilities.replace(/ /g, '').split(',');

            var connected = false;
            var arProviders = [];

            var enabledProviders = p['enabledProviders'];
            if (!enabledProviders) enabledProviders = c['enabledProviders'];
            if (!enabledProviders) enabledProviders = '*';
            var disabledProviders = p['disabledProviders'];
            if (!disabledProviders) disabledProviders = c['disabledProviders'];
            if (!disabledProviders) disabledProviders = '';

            arProviders = GS.getProvidersByName(enabledProviders);
            arProviders = GS.hideProvidersByName(arProviders, disabledProviders);
            arProviders = GS.hideProvidersByName(arProviders, hiddenProviders.join(','));
            arProviders = GS.hideProvidersByName(arProviders, 'customopenid');

            var oButton = p['customButton'];
            if (!oButton && p['customButtons'] && p['customButtons'].length > 0) oButton = p['customButtons'][0];

            var pCustomProvider;
            if (oButton && (!oButton.type || oButton.type.toLowerCase() == 'openid' || oButton.type.toLowerCase() == 'eventonly')) {
                pCustomProvider = GS._getProviderByID(4121);
                pCustomProvider.imgName = 'openID';
            }
            else if (oButton && oButton.type && oButton.type.toLowerCase() == 'saml') {
                pCustomProvider = GS._getProviderByID(4122);
                pCustomProvider.name = 'saml-' + oButton.idpName;
                pCustomProvider.imgName = 'saml';
            }

            if (pCustomProvider) {
                if (!oButton.providerName) oButton.providerName = '';
                pCustomProvider.displayName = oButton.providerName;
                pCustomProvider.buttonData = oButton;

                arProviders[i] = pCustomProvider;
                arProviders.splice(oButton.position && oButton.position > 1 ? oButton.position - 1 : 0, 0, pCustomProvider);
            }

            for (var i = 0; i < arProviders.length; i++) {
                arProviders[i].context = {};
            }

            if (internals.getInfoResponse && internals.getInfoResponse.user && internals.getInfoResponse.user.identities) {
                var identities = internals.getInfoResponse.user.identities;
                for (var identityName in identities) {
                    var identity = identities[identityName];
                    identity.connected = true;
                    var providerObj = GS._getProviderByName(identity.provider);
                    if (providerObj) {
                        if (!connected) connected = true;
                        providerObj.context = identity;
                    }
                }
            }

            var arConnectedProviders = [];
            for (var i = 0; i < arProviders.length; i++) {
                var arRequiredPermissions = [];
                if (arProviders[i].context && arProviders[i].context.connected) {
                    var hasAllRequiredPermissions = true;
                    if (arProviders[i].context.missingPermissions) {
                        var missingPermissionsString = ',' + arProviders[i].context.missingPermissions.toLowerCase().replace(/ /g, '') + ',';
                        var neededPermissions = window.gigya.utils.object.extractProperty([c, p, internals], arProviders[i].name + 'ExtraPermissions');
                        if (!neededPermissions) neededPermissions = window.gigya.utils.object.extractProperty([c, p, internals], 'extraPermissions');
                        if (!neededPermissions) neededPermissions = '';
                        neededPermissions = neededPermissions.toLowerCase();
                        var arNeededPermissions = neededPermissions.split(',');
                        for (var iPermission = 0; iPermission < arNeededPermissions.length; iPermission++) {
                            if (missingPermissionsString && missingPermissionsString.toLowerCase().indexOf(',' + arNeededPermissions[iPermission] + ',') != -1) {
                                hasAllRequiredPermissions = false;
                                arRequiredPermissions.push(arNeededPermissions[iPermission]);
                            }
                        }
                    }
                    arProviders[i].context.requiredPermissions = arRequiredPermissions.join(',');
                    if (hasAllRequiredPermissions) {
                        arConnectedProviders.push(arProviders[i]);
                    }
                }
            }

            arProviders = arConnectedProviders.concat(GS.hideProvidersByName(arProviders, arConnectedProviders.join(',')));

            arProviders = GS.getProvidersForRequiredCapabilities(arProviders, requiredCapabilities);
            if (arProviders.length == 0 && !facebookSuggestEnabled) {
                window.gigya.events.dispatchErrorFromResponse(p, {
                    status: 'ERR_NO_PROVIDERS',
                    statusMessage: 'No providers',
                    errorCode: 400100,
                    errorMessage: 'No providers'
                });
                return;
            }

            var w = parseInt(p['width']);
            if (window.gigya.localInfo.isMobile) {
                var div = document.createElement('div');
                document.body.appendChild(div);
                var viewWidth = div.offsetWidth;
                div.parentNode.removeChild(div);
                w = Math.min(viewWidth, w);
            }
            var h = parseInt(p['height']);


            if (internals['isConnect']) lastLoginIndication = '';
            if (!internals['isConnect'] && lastLoginIndication == 'border') {
                for (var i = 0; i < arProviders.length; i++) {
                    var provider = arProviders[i];
                    if (arProviders[i].name == lastLoginProvider) {
                        arProviders.splice(i, 1);
                        arProviders.unshift(provider);
                        break;
                    }
                }
            }

            this.modules[containerID].arProviders = arProviders;

            var arrowW = 7;
            var arrowH = 12;

            var oSnButtonsStyle = resolver.Resolve('+/config/body/controls/snbuttons');
            var textUnder = (buttonsStyle == '' && oSnButtonsStyle['type'] == 'textUnder');

            var buttonsize = p.buttonSize ? p.buttonSize : oSnButtonsStyle['buttonsize'];
            buttonsize = parseInt(buttonsize);

            if (buttonsize > h) buttonsize = h;
            if (arrowH > h) {
                arrowW = Math.floor(arrowW * h / arrowH);
                arrowH = Math.floor(h * arrowW / 7);
            }

            var iconSize = buttonsize;


            var oBgStyle = resolver.Resolve('+/config/body/background');

            if (internals['isPopup']) {
                oBgStyle['frame-thickness'] = 0;
            }
            var oLinkStyle = resolver.Resolve('+/config/body/texts/links');
            var linkHeight = this.getSingleLineHeight(oLinkStyle);
            var oTextStyle = resolver.Resolve('+/config/body/texts');


            var textStyle = GS.getStyleString(oTextStyle);
            var linkStyle = GS.getStyleString(oLinkStyle, true);
            var bgStyle = GS.getStyleString(oBgStyle);
            var snButtonsStyle = GS.getStyleString(oSnButtonsStyle);

            if (typeof iconSize == 'undefined' || isNaN(iconSize)) iconSize = 30;

            if (!oStyle.minSize) oStyle.minSize = 15;
            if (!oStyle.maxSize) oStyle.maxSize = 65;
            var imgIconSize = Math.floor(iconSize / 5) * 5;
            //if (imgIconSize < 20 && oS)
            if (imgIconSize < oStyle.minSize) imgIconSize = oStyle.minSize;
            if (imgIconSize > oStyle.maxSize) imgIconSize = oStyle.maxSize;

            var scrollingLeftPath = base + 'paging/scrollingarrow_left.gif';
            var scrollingLeftDisablePath = base + 'paging/scrollingarrow_disable_left.gif';
            var scrollingRightPath = base + 'paging/scrollingarrow_right.gif';
            var scrollingRightDisablePath = base + 'paging/scrollingarrow_disable_right.gif';

            if (iconSize > 25) {
                scrollingLeftPath = base + 'paging/scrollingarrowl_left.gif';
                scrollingLeftDisablePath = base + 'paging/scrollingarrowl_disable_left.gif';
                scrollingRightPath = base + 'paging/scrollingarrowl_right.gif';
                scrollingRightDisablePath = base + 'paging/scrollingarrowl_disable_right.gif';
                if (arrowW == 7) arrowW = 10;
            }

            if (p.useLargeArrows) {
                scrollingLeftPath = base + 'paging/scrollingarrowll_left.gif';
                scrollingLeftDisablePath = base + 'paging/scrollingarrowll_disable_left.gif';
                scrollingRightPath = base + 'paging/scrollingarrowll_right.gif';
                scrollingRightDisablePath = base + 'paging/scrollingarrowll_disable_right.gif';
                arrowW = 20;
                arrowH = 40;
            }

            var maxRows = 1;
            var maxLines = 1;

            var hintW = 149;
            var hintH = 55;

            var headerText = p['headerText'];
            if (h < 50) headerText = null;
            var showHint = (this.isTrue(p['showWhatsThis']) && w > hintW && h - linkHeight > hintH);
            internals.showHint = showHint;
            var showGigyaBranding = (!this.isTrue(p['hideGigya'], false) && !this.isTrue(p['hideGigyaLink'], false));
            var showWhatsThis = (!showGigyaBranding && showHint);
            var showTerms = !window.gigya.utils.validation.isExplicitFalse(p['showTermsLink']);
            var showEdit = (internals.isConnect && connected && !window.gigya.utils.validation.isExplicitFalse(p['showEditLink']));
            var b = arProviders.length;

            //button size (image only)
            var pixelRatio = (window.devicePixelRatio > 1 ? 2 : 1);
            var btnImgW = Math.round(iconSize * oStyle.ratio);
            var btnImgH = iconSize;

            var states = [''];
            var sStates = '[' + states.join(',') + ']';
            var resize = (imgIconSize != iconSize) || pixelRatio > 1;
            var arSpritesProviders = [];
            for (var i = 0; i < arProviders.length; i++) {
                arSpritesProviders[i] = arProviders[i].toString().split('-')[0];
            }
            arSpritesProviders = arSpritesProviders.sort(); //array is sorted for caching
            var spriteRenderer = window.gigya.global.getSpriteRenderers({
                loginIcons: {
                    path: '/HTMLLogin/' + styleBase + '[' + arSpritesProviders.join(',') + ']_' + sStates + imgIconSize * pixelRatio + oStyle.ext,
                    w: btnImgW,
                    h: btnImgH,
                    pixelRatio: pixelRatio
                }
            });

            //div.innerHTML=sd.getHTML(div, 'yahoo_connected');

            //full button size (including image and text)
            var btnW = btnImgW;
            var btnH = btnImgH;

            //buttons spacing
            var bhs = 5;
            var bvs = 5;

            //outer margins
            var hm = 0;  //arrows width
            var vm = 0; //bottom link height

            var outerFrameThickness = resolver.Resolve('+/config/body/background')['frame-thickness'];
            if (typeof outerFrameThickness == 'undefined') outerFrameThickness = 0;

            hm += outerFrameThickness * 2
            vm += outerFrameThickness * 2

            /*if (internals['isPopup']) {
             vm+=10;
             }*/

            if (showGigyaBranding || showWhatsThis || showTerms || showEdit) {
                vm += linkHeight;
            }
            if (headerText) {
                vm += window.gigya.pluginUtils.layout.measureText(headerText, oTextStyle).h + 4;
            }
            if (textUnder) {
                btnH += this.getSingleLineHeight(oSnButtonsStyle);
                for (var i = 0; i < arProviders.length; i++) {
                    btnW = Math.max(btnW, window.gigya.pluginUtils.layout.measureText(arProviders[i].displayName, oSnButtonsStyle).w + 4);
                }
            }
            var maxButtonsInRow = Math.floor((w - hm + bhs) / (bhs + btnW))
            var maxButtonsInCol = Math.floor((h - vm + bvs) / (bvs + btnH))

            if (maxButtonsInCol < 1) {
                vm = 0
                if (headerText) {
                    vm += window.gigya.pluginUtils.layout.measureText(headerText, oTextStyle).h + 4;
                }
                maxButtonsInCol = Math.floor((h - vm + bvs) / (bvs + btnH))
                if (maxButtonsInCol < 1) {
                    //Error?
                }
                else {
                    showGigyaBranding = false;
                    showWhatsThis = false;
                    showEdit = false;
                    showTerms = false;
                }
            }

            if (maxButtonsInCol * maxButtonsInRow < b) { // paging is needed, add arrowWidth to h margin and recalculate buttons in a row.
                hm += (arrowW + bhs) * 2;
                maxButtonsInRow = Math.floor((w - hm + bhs) / (bhs + btnW))
            }
            var totalb = b;
            b = b % (maxButtonsInRow * maxButtonsInCol);
            var optimalLastRowButtons = 0;
            var optimalRowButtons = 0;

            for (var r = maxButtonsInRow; r * maxButtonsInCol >= b; r--) {

                var lastRowButtons = b - (r * Math.floor(b / r));
                if (lastRowButtons == 0) lastRowButtons = r;
                if (lastRowButtons > optimalLastRowButtons) {
                    optimalLastRowButtons = lastRowButtons;
                    optimalRowButtons = r;
                }
            }

            var iProvider = 0;
            if (maxButtonsInCol * maxButtonsInRow == 0) return;
            var pages = Math.ceil(totalb / (maxButtonsInCol * maxButtonsInRow));
            if (pages == 1) maxButtonsInRow = optimalRowButtons;
            var pageWidth = Math.min(maxButtonsInRow, totalb) * (btnW + bhs) - bhs;


            var showWelcome = false;
            if (!internals['isConnect'] && lastLoginProvider && lastLoginIndication == 'welcome') {
                for (var i = 0; i < arProviders.length; i++) {
                    var provider = arProviders[i];
                    if (arProviders[i].name == lastLoginProvider) {
                        showWelcome = true;
                        break;
                    }
                }
            }

            var escapedID = containerID.replace(/[.]/g, '\\.');
            _pi.common.addCSS(['#', escapedID, ' td, #', escapedID, ' table {width:auto;font-size:1px;vertical-align:top;border-collapse:separate;border:none; padding:0px;margin:0px;} #', escapedID, ' {}', ' .tabbing-button{font-size: 0px;border: none;padding: 0;background-color: transparent;cursor: pointer;}']);

            if (typeof providers == 'undefined') providers = c['enabledProviders'];
            arHTML[a++] = '<table width="100%" cellspacing="0" cellpadding="0" style="' + tdStyle + bgStyle + 'vertical-align: middle; width: ' + w + 'px; height: ' + h + 'px;"><tr><td style="vertical-align:middle;' + tdStyle + '"><center><table style="' + tdStyle + 'vertical-align:middle; height: ' + h + 'px;width:100%" align="center" cellspacing="0" cellpadding="0">';
            if (!showWelcome) {
                if (headerText) {
                    arHTML[a++] = '<tr><td colspan="3"><div style="' + textStyle + ';padding-left:5px">' + headerText + '</div></td></tr>';
                }
                arHTML[a++] = '<tr style="height:99%"><td  align="right" style="' + tdStyle + 'vertical-align:middle;' + (!alignToLeft ? 'width:48%;' : '') + 'text-align:right"><div align="right" style="text-align:right;width:auto">';
                if (pages > 1) {
                    arHTML[a++] = '<div align="left" style="margin-left: auto;width:' + (arrowW + bhs) + 'px; text-align: left"><div style="text-align:right;width: ' + (arrowW) + 'px;"><img alt="" onclick="' + gsLogin + '.prevPage(\'' + containerID + '\')" style="cursor:pointer;display:none;width:' + (arrowW) + 'px;" id="' + containerID + '_arrow_left" src="' + scrollingLeftPath + '" /><img style="display:none;width:' + (arrowW) + 'px;" id="' + containerID + '_arrow_left_disable" src="' + scrollingLeftDisablePath + '" /></div></div>';
                }
                arHTML[a++] = '</div></td>';
                arHTML[a++] = '<td align="center" style="width:' + pageWidth + 'px;' + tdStyle + 'vertical-align:middle;white-space:nowrap" id="' + containerID + '_page">';
            } else {
                arHTML[a++] = '<td></td>';
                arHTML[a++] = '<td align="left" style="' + tdStyle + 'vertical-align:middle;white-space:nowrap" id="' + containerID + '_page">';
            }


            if (showWelcome) {
                var username = window.gigya.utils.sanitize.sanitizeHTML(this.getLastLoginName());

                var welcomeBtnSize = (p['lastLoginButtonSize'] ? p['lastLoginButtonSize'] : 30);
                welcomeBtnSize = parseInt(welcomeBtnSize);

                var welcomeImgSize = Math.floor(welcomeBtnSize / 5) * 5
                if (welcomeImgSize < 25) welcomeImgSize = 20;
                if (welcomeImgSize > 35) welcomeImgSize = 40;

                var hideNotYou = false;

                var notYou_text = this.TEXT(lang, 'not_you', '%user', username);
                var notYouWidth = window.gigya.pluginUtils.layout.measureText(notYou_text, oLinkStyle).w;
                var welcome_back_username_text = this.TEXT(lang, 'welcome_back_user', '%user', username);
                var welcomeBackWidth = window.gigya.pluginUtils.layout.measureText(welcome_back_username_text, {
                    size: 16,
                    font: 'arial',
                    bold: true
                }).w;
                if (welcomeBackWidth + 17 + notYouWidth + (internals['isPopup'] ? 25 : 0) > w) {
                    hideNotYou = true;
                    if (welcomeBackWidth > w) username = '';
                }

                var welcomeBackHTML = '<span style="' + textStyle + ';font-size:16px;font-weight:bold;color:#4C4C4C">' + this.TEXT(lang, 'welcome_back') + '</span>';
                if (typeof username != 'undefined' && username != '' && username != null) {
                    welcomeBackHTML = '<table cellspacing="0" cellpadding="0" style="vertical-align:middle"><tr><td style="' + textStyle + ';font-size:16px;font-weight:bold;color:#4C4C4C;white-space:nowrap">' + welcome_back_username_text + '</td>';
                    welcomeBackHTML += '<td style="padding-left:5px;white-space:nowrap" onclick="' + gsLogin + '.hideWelcome(\'' + containerID + '\');">';
                    if (!hideNotYou) {
                        welcomeBackHTML += '<table cellspacing="0" cellpadding="0" style="vertical-align:middle"><tr><td><img alt="" src="' + base + 'NotYou_Left.png" /></td><td style="white-space:nowrap;vertical-align:middle;background-image:url(\'' + base + 'NotYou_Mid.png\')"><div style="' + linkStyle + 'font-size:10px">' + notYou_text + '</div></td><td><img alt="" src="' + base + 'NotYou_Right.png" /></td></tr></table>';
                    }
                    welcomeBackHTML += '</td></tr></table>';
                }


                var btnSrc = base + 'SignInWith/' + lastLoginProvider + '_' + welcomeImgSize + '.png';
                //var btnOverSrc = base + 'SignInWith/' + lastLoginProvider + '_' + welcomeImgSize + '_over.png';
                if (lastLoginProvider == 'customopenid' || lastLoginProvider.indexOf("saml-") == 0) {
                    var pCustomProvider = GS._getProviderByID(4121);
                    if (lastLoginProvider.indexOf("saml-") == 0)
                        pCustomProvider = GS._getProviderByID(4122);

                    if (pCustomProvider.buttonData && pCustomProvider.buttonData.lastLoginIconURL) {
                        btnSrc = btnOverSrc = pCustomProvider.buttonData.lastLoginIconURL;
                    } else {
                        btnSrc = base + 'SignInWith/openid_' + welcomeImgSize + '.png';
                        //btnOverSrc = base + 'SignInWith/openid_' + welcomeImgSize + '_over.gif';
                    }

                }
                var SignInUsingADifferentNetwork_text = this.TEXT(lang, 'sign_in_using_a_different_network');
                var extraStyle = '';
                if (internals['isPopup']) extraStyle = 'padding-left:25px;';
                arHTML[a++] = '<table id="' + containerID + '_welcome" cellspacing="0" cellpadding="0" style="width:100%;' + tdStyle + ';' + extraStyle + '">';

                arHTML[a++] = '<tr><td style="' + tdStyle + 'padding-bottom:13px;vertical-align:bottom"><div>' + welcomeBackHTML + '</div></td></tr>';
                arHTML[a++] = '<tr><td height="' + welcomeBtnSize + '" style="' + tdStyle + 'padding-bottom:15px;"><span style="cursor:pointer" onclick="' + gsLogin + '.providerClick(\'' + containerID + '\',\'' + lastLoginProvider + '\')"><img gigid="' + provider + '" alt="" height="' + welcomeBtnSize + '" src="' + btnSrc + '"  /></span></td></tr>';
                arHTML[a++] = '<tr><td style="' + tdStyle + ';vertical-align:top"><span style="' + linkStyle + '" onclick="' + gsLogin + '.hideWelcome(\'' + containerID + '\');">' + SignInUsingADifferentNetwork_text + '</span></div></td></tr>'
                arHTML[a++] = '</table>';

            } else {
                for (var iPage = 0; iPage < pages; iPage++) {
                    arHTML[a++] = '<table align="center" cellspacing="0" cellpadding="0" style="' + tdStyle + 'display:none" id="' + containerID + '_p' + iPage + '">';
                    for (var iCol = 0; iCol < maxButtonsInCol; iCol++) {
                        var align = 'left';
                        if (pages == 1 && iProvider + maxButtonsInRow > arProviders.length) align = 'center';
                        arHTML[a++] = '<tr><td align="center" style="' + tdStyle + 'vertical-align:middle"><table align="' + align + '" cellspacing="0" cellpadding="0" style="' + tdStyle + '"><tr>';
                        for (var iRow = 0; iRow < maxButtonsInRow; iRow++) {
                            var provider = arProviders[iProvider];
                            var paddingRules = '';
                            if (iProvider + 1 < arProviders.length || (pages > 1 && iRow + 1 < maxButtonsInRow)) {
                                if (iRow < maxButtonsInRow - 1) paddingRules += 'padding-right:' + bhs + 'px;';
                                if (iCol < maxButtonsInCol - 1) paddingRules += 'padding-bottom:' + bvs + 'px;';
                            }
                            var disabled = false;
                            if (provider != null) {
                                var imgId = (provider.imgName ? provider.imgName : provider.name) + '-';
                                if (internals.isConnect && provider.context && (provider.context.connected && provider.context.requiredPermissions == '') && !oStyle.noConnected) {
                                    imgId += 'connected_';
                                    disabled = true;
                                } else if (lastLoginIndication == 'border' && provider.name == lastLoginProvider && !oStyle.noLastLogin) {
                                    imgId += 'lastlogin_';
                                }
                                /*var imgSrc=styleBase+provider.name+'_'+imgIconSize;
                                 if (internals.isConnect && provider.context && (provider.context.connected && provider.context.requiredPermissions=='') && !oStyle.noConnected) {
                                 imgSrc += '_Connected';
                                 disabled=true;
                                 } else if (lastLoginIndication=='border' && provider.name==lastLoginProvider && !oStyle.noLastLogin) {
                                 imgSrc+='_LastLogin';
                                 }
                                 imgSrc+=oStyle.ext;*/
                                var title = provider.displayName;
                                if (window.gigya.utils.validation.isExplicitFalse(p['showTooltips'])) title = '';
                                //var dontUseSprites=(oStyle.dontUseSprites || imgIconSize!=iconSize)
                                var imgHTML = spriteRenderer.loginIcons.getHTML(imgId, false, oStyle.dontUseSprites);


                                var oButton = provider.buttonData;
                                if ((provider.ID == 4121 || provider.ID == 4122) && oButton && oButton.iconURL) {
                                    var iconURL = oButton.iconURL;
                                    if (internals.isConnect && provider.context && (provider.context.connected && provider.context.requiredPermissions == '') && !oStyle.noConnected) {
                                        iconURL = oButton.connectedIconURL ? oButton.connectedIconURL : window.gigya._.getCdnResource('/gs/i/HTMLLogin/' + styleBase + 'openid_' + imgIconSize + (disabled ? '_connected' : '') + '.png');
                                        disabled = true;
                                    } else if (provider.name == lastLoginProvider) {
                                        iconURL = oButton.lastLoginIconURL;
                                    }
                                    if (iconURL) {
                                        imgHTML = '<div style="width:' + btnImgW + 'px;height:' + btnImgH + 'px;background-image:url(\'' + iconURL + '\');background-position:center;background-repeat:no-repeat;">&#160;</div>';
                                    }
                                }


                                if (disabled) {
                                    arHTML[a++] = '<td style="' + tdStyle + snButtonsStyle + paddingRules + 'text-align:center;vertical-align:top"><center><div title="' + title + '" style="width:' + btnW + 'px;"><div gigid="' + provider + '" style="width:' + btnImgW + 'px; height:' + btnImgH + 'px">' + imgHTML + '</div>';
                                } else {
                                    arHTML[a++] = '<td style="' + tdStyle + snButtonsStyle + paddingRules + 'text-align:center;vertical-align:top"><center><div  onclick="' + gsLogin + '.providerClick(\'' + containerID + '\',\'' + provider.name + '\')" title="' + title + '" alt="' + title + '" style="zoom:1;cursor:pointer; width:' + btnW + 'px;"><div gigid="' + provider + '" style="width:' + btnImgW + 'px; height:' + btnImgH + 'px">' + imgHTML + '</div>';
                                }

                                if (textUnder) {
                                    arHTML[a++] = '<div style="margin:0px;padding-top:2px;' + snButtonsStyle + '">' + provider.displayName + '</div>';
                                }
                                arHTML[a++] = '</div></center></td>';
                                iProvider++;
                            } else if (pages > 1) {
                                arHTML[a++] = '<td style="' + tdStyle + snButtonsStyle + paddingRules + 'vertical-align:top;"><div style="width:' + btnW + 'px;height:' + btnH + 'px">&#160;</div></td>';
                            }
                        }
                        arHTML[a++] = '</tr></table></td></tr>';

                    }
                    arHTML[a++] = '</table>';
                }
            }
            arHTML[a++] = '</td>';
            if (!showWelcome) {
                arHTML[a++] = '<td align="left" style="' + tdStyle + 'vertical-align:middle;width:48%">';
                if (pages > 1 && !showWelcome) {
                    arHTML[a++] = '<div style="' + tdStyle + 'text-align:right; width:' + (arrowW + bhs) + 'px;"><img alt="" onclick="' + gsLogin + '.nextPage(\'' + containerID + '\')" style="cursor:pointer;display:none;width:' + (arrowW) + 'px;" id="' + containerID + '_arrow_right" src="' + scrollingRightPath + '" /><img alt="" style="display:none;width:' + (arrowW) + 'px;" id="' + containerID + '_arrow_right_disable" src="' + scrollingRightDisablePath + '" /></div>';
                }
                arHTML[a++] = '</td>';
            } else {
                arHTML[a++] = '<td></td>';
            }
            arHTML[a++] = '</tr>';

            var leftBottomLinkHTML = '';
            if (showTerms) {
                leftBottomLinkHTML = '<a target="_blank" href="http://www.gigya.com/terms-of-service/" style="' + linkStyle + ';padding-right:5px;text-decoration:none;font-size:11px">' + this.TEXT(lang, 'terms') + '</a>';
            }
            if (showEdit) {
                if (showTerms) leftBottomLinkHTML += '<span style="' + linkStyle + ';cursor:default;">|</span>';
                leftBottomLinkHTML += '<span style="' + linkStyle + ';padding-right:5px;padding-left:5px;text-decoration:none;font-size:11px" onclick="' + gsLogin + '.showEdit(\'' + containerID + '\')">' + this.TEXT(lang, 'edit') + '</span>';
            }
            var rightBottomLinkHTML = '';
            if (showGigyaBranding) {
                rightBottomLinkHTML += '<span onclick="window.open(\'http://www.gigya.com\')" style="color:#005997;font-weight:bold; font-size:11px;cursor:pointer" onMouseOut="' + gsLogin + '.hideWhatsThis(\'' + containerID + '\')" onMouseOver="' + gsLogin + '.showWhatsThis(\'' + containerID + '\')"><span style="color:#828282;font-weight:bold; font-size:11px;cursor:pointer">Social by </span>Gigya</span>';
            } else if (showWhatsThis && navigator.userAgent.toLowerCase().indexOf("iphone") == -1) {
                rightBottomLinkHTML += '<span style="' + linkStyle + ';text-decoration:underline;" onMouseOut="' + gsLogin + '.hideWhatsThis(\'' + containerID + '\')" onMouseOver="' + gsLogin + '.showWhatsThis(\'' + containerID + '\')">' + this.TEXT(lang, 'whats_this') + '</span>';
            }


            var linksWidth = window.gigya.pluginUtils.layout.measureText(leftBottomLinkHTML).w + window.gigya.pluginUtils.layout.measureText(rightBottomLinkHTML).w;
            if (linksWidth > w) {
                rightBottomLinkHTML = '';
                linksWidth = window.gigya.pluginUtils.layout.measureText(leftBottomLinkHTML).w;
            }
            if ((showEdit || showTerms || showGigyaBranding || showWhatsThis) && linksWidth < w && oLinkStyle.color.toLowerCase() != 'transparent') {
                if (!internals.isPopup && linksWidth + 10 < pageWidth) {
                    arHTML[a++] = '<tr height="' + linkHeight + '"><td></td><td align="right" style="vertical-align:bottom"><div id="' + containerID + '_bottomLink">';
                    arHTML[a++] = '<table cellspacing="0" cellpadding="0" style="' + tdStyle + 'width:100%"><tr><td align="left">' + leftBottomLinkHTML + '</td><td style="white-space:nowrap" align="right">' + rightBottomLinkHTML + '</td></tr></table>';
                    arHTML[a++] = '</div></td><td></td></tr>';
                } else {
                    arHTML[a++] = '<tr height="' + linkHeight + '"><td colspan="3" align="right" style="text-align:right;vertical-align:bottom"><center><div id="' + containerID + '_bottomLink" style="margin:0px;padding-top:0px;padding-bottom:2px;width:100%">';
                    arHTML[a++] = '<table style="width:100%;" cellspacing="0" cellpadding="0"><tr>';
                    arHTML[a++] = '<td style="width:5px;"></td>';
                    if (leftBottomLinkHTML != '') {
                        arHTML[a++] = '<td align="left">' + leftBottomLinkHTML + '</td>';
                    }
                    if (rightBottomLinkHTML != '') {
                        arHTML[a++] = '<td align="right" style="text-align:right;white-space:nowrap">' + rightBottomLinkHTML + '</td>';
                    }
                    arHTML[a++] = '<td style="width:5px;"></td>';
                    arHTML[a++] = '</tr></table>';
                    arHTML[a++] = '</div></center></td></tr>';
                }
            }
            arHTML[a++] = '</table></center></td></tr></table>';
            if (showHint) {
                var whatsThisDiv = document.getElementById(containerID + '_whatsThis');
                if (!whatsThisDiv) {
                    whatsThisDiv = document.createElement('div');
                    whatsThisDiv.id = containerID + '_whatsThis';
                    whatsThisDiv.style.visibility = 'hidden';
                    whatsThisDiv.style.position = 'absolute';
                    document.body.appendChild(whatsThisDiv);
                }
                whatsThisDiv.style.zIndex = window.gigya.utils.DOM.getNextZIndex();
                ;
                var whatsThisText = p['whatsThisText'];
                //if (!whatsThisText) whatsThisText = 'You can use your account from one of these services to sign into the site';
                if (!whatsThisText) {
                    if (internals.isConnect) {
                        whatsThisText = this.TEXT(lang, 'add_more_connections_to_your_account');
                    } else {
                        whatsThisText = this.TEXT(lang, 'you_can_use_your_account_from_one_of_these_services_to_sign_into_the_site');
                    }
                }
                whatsThisDiv.innerHTML = '<table style="padding: 5px; background-color:#FFFFFF;border: 1px solid #767676;width:' + hintW + 'px;height:' + hintH + 'px" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle; text-align:center"><span align="left" style="' + textStyle + ';width: ' + (hintW - 8) + 'px; color:#262626; ">' + whatsThisText + '</span></td></tr></table>';
            }

            var container = document.getElementById(containerID);
            container.innerHTML = arHTML.join('');
            container.style.width = '' + w + 'px';
            container.style.height = '' + h + 'px';


            this.modules[containerID].pages = pages;
            if (!showWelcome) {
                this.updatePage(containerID);
            }
        };
        _pi.login.nextPage = function (id) {
            this.modules[id].page++;
            this.updatePage(id);
        };
        _pi.login.prevPage = function (id) {
            this.modules[id].page--;
            this.updatePage(id);
        };
        _pi.login.showEdit = function (id) {
            var params = window.gigya.utils.object.clone(this.modules[id].p);
            delete params.width;
            delete params.height;
            delete params.containerID;
            window.gigya.socialize.showEditConnectionsUI(params);
        };
        _pi.login.showWhatsThis = function (id) {
            if (this.modules[id].i.showHint) {
                var el = document.getElementById(id + '_whatsThis');
                if (el) {
                    var container = document.getElementById(id);
                    var pos = window.gigya.global._GetElementPos(container);
                    el.style.left = pos.left + (parseInt(container.style.width) - el.offsetWidth) / 2 + 'px';
                    el.style.top = pos.top + (parseInt(container.style.height) - el.offsetHeight) / 2 + 'px';
                    el.style.visibility = 'visible';
                }
            }
        };
        _pi.login.hideWhatsThis = function (id) {
            var el = document.getElementById(id + '_whatsThis');
            if (el) {
                el.style.visibility = 'hidden';
            }
        };
        _pi.login.hideWelcome = function (id) {
            window.gigya.utils.cookie.remove('_gig_llp');
            window.gigya.utils.cookie.remove('_gig_llu');
            var m = this.modules[id];
            window.gigya.thisScript.globalConf.alwaysForceAuthentication = true; //feature #7643
            this.showLoginUI_v1(m.originalC, m.originalP, m.i, true);
        };
        _pi.login.updatePage = function (id) {
            var m = this.modules[id]
            if (m.pageDiv) m.pageDiv.style.display = 'none';
            m.pageDiv = document.getElementById(id + '_p' + m.page);
            if (m.pageDiv) m.pageDiv.style.display = '';
            if (m.pages > 1) {
                var r = document.getElementById(id + '_arrow_right');
                var rd = document.getElementById(id + '_arrow_right_disable');
                var l = document.getElementById(id + '_arrow_left');
                var ld = document.getElementById(id + '_arrow_left_disable');
                if (m.page == 0) {
                    l.style.display = 'none';
                    ld.style.display = '';
                } else {
                    l.style.display = '';
                    ld.style.display = 'none';
                }
                if (m.page == m.pages - 1) {
                    r.style.display = 'none';
                    rd.style.display = '';
                } else {
                    r.style.display = '';
                    rd.style.display = 'none';
                }
            }
        };

        _pi.login.getLastLogin = function () {
            return window.gigya.utils.cookie.get('_gig_llp');
        };
        _pi.login.getLastLoginName = function () {
            return window.gigya.utils.cookie.get('_gig_llu');
        };
        _pi.login.providerClick = function (id, provider) {
            var o = this.modules[id];
            var providerObj = window.gigya.socialize._getProviderByName(provider, o.arProviders);
            if (!providerObj) providerObj = window.gigya.socialize._getProviderByName(provider);
            var params = {
                provider: provider,
                callback: function (res) {
                    if (res.errorCode != 0) {
                        delete res.requestParams.getInfoResponse;
                        delete res.requestParams.context;
                        delete res.context;
                        window.gigya.events.dispatchErrorFromResponse(o.p, res);
                    } else {
                        if (o.i.isPopup) {
                            window.gigya.socialize._closeComponent(o.i.rid, true);
                        }
                        var eventName = o.i.isConnect ? 'connectionAdded' : 'login';
                        var oEvent = window.gigya._.addUserInfoToEvent(res, {
                            eventName: eventName,
                            provider: provider,
                            response: res
                        }, true);
                        window.gigya.events.dispatchForWidget(oEvent, o.p);
                    }
                }
            }

            //Will always get ALL of the permissions
            //if (providerObj.context && !providerObj.context.connected && providerObj.context.requiredPermissions) o.p[provider+'ExtraPermissions']=providerObj.context.requiredPermissions;
            var This = this;

            if (providerObj.ID == 4121) {
                var oButton = providerObj.buttonData;
                params['openIDProviderName'] = oButton.providerName;
                params['openIDProviderLogo'] = oButton.logoURL;
                params['openIDURL'] = oButton.openIDURL;
            }

            if (providerObj.ID != 4121 || providerObj.buttonData.type == 'openID') {
                if (o.i.isConnect) {
                    if (providerObj.context && providerObj.context.connected) {
                        var This = this;
                        params.callback = function () {
                            window.gigya.events.dispatchForWidget({eventName: 'permissions', provider: provider}, o.p);
                            This.redraw(id)
                        };
                        window.gigya.socialize.requestPermissions(o.c, o.p, params);
                    } else {
                        window.gigya.socialize.connect(o.c, o.p, params);
                    }
                } else if (o.p.accountsSocialLogin) {
                    window.gigya.accounts.socialLogin(o.c, o.p, params);
                } else {
                    window.gigya.socialize.login(o.c, o.p, params);
                }
            }
            var evt = {eventName: 'buttonClicked'};
            if (providerObj.buttonData) evt.button = providerObj.buttonData;
            window.gigya.events.dispatchForWidget(evt, o.p);
        };
    }
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLElBQUksWUFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLDhCQUE4QixnQkFBZ0I7QUFDbEosaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGdDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JC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Q2pDO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBSztBQUMxQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsd0JBQXdCLFlBQUs7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFLLDJCQUEyQiw2Q0FBNkM7QUFDekc7QUFDQTtBQUNBLHdCQUF3QixZQUFLO0FBQzdCLHFCQUFxQjtBQUNyQix3QkFBd0IsWUFBSztBQUM3QjtBQUNBLGlCQUFpQjtBQUNqQixvQkFBb0IsWUFBSztBQUN6QixpQkFBaUI7QUFDakIsb0JBQW9CLFlBQUs7QUFDekI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFlBQVksWUFBSztBQUNqQjtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmxvZ2luLmpzXCIpO1xuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGdpZ3lhLmdsb2JhbC5TcHJpdGVSZW5kZXJlci5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0SFRNTDogZnVuY3Rpb24gKHNwcml0ZUlkLCBhdXRvTWFyZ2luLCBkb250VXNlU3ByaXRlcywgZWxJRCkge1xyXG4gICAgICAgICAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgICAgICAgLy8gc2VlIGJ1ZzogMzM0NDhcclxuICAgICAgICAgICAgLy92YXIgZGlzYWJsZVNwcml0ZU9uQ2hyb21lID0gKCh0aGlzLnBpeGVsUmF0aW8gPiAxKSAmJiBnaWd5YS5sb2NhbEluZm8uaXNDaHJvbWUpO1xyXG4gICAgICAgICAgICAvL2RvbnRVc2VTcHJpdGVzID0gZG9udFVzZVNwcml0ZXMgfHwgZGlzYWJsZVNwcml0ZU9uQ2hyb21lO1xyXG4gICAgICAgICAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgICAgICAgdmFyIG9TcHJpdGUgPSB0aGlzLmdldFNwcml0ZURhdGEoc3ByaXRlSWQsIGRvbnRVc2VTcHJpdGVzKTtcclxuICAgICAgICAgICAgdmFyIGFySFRNTCA9IFtdO1xyXG4gICAgICAgICAgICBpZiAob1Nwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9TcHJpdGUuaXNTaW5nbGVJbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCc8aW1nIHNyYz1cIicgKyBvU3ByaXRlLnNyYyArICdcIiBzdHlsZT1cIndpZHRoOicgKyB0aGlzLnNwcml0ZVcgKyAncHg7aGVpZ2h0OicgKyB0aGlzLnNwcml0ZUggKyAncHg7cG9zaXRpb246c3RhdGljO21hcmdpbjowXCIgYWx0PVwiXCIgLz4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goJzxkaXYgc3R5bGU9XCInKTtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUwucHVzaCh0aGlzLmdldFN0eWxlU3RyaW5nKHNwcml0ZUlkLCBhdXRvTWFyZ2luKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goJ1wiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsSUQpIGFySFRNTC5wdXNoKCcgaWQ9XCInICsgZWxJRCArICdcIicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCc+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFySFRNTC5qb2luKCcnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFNwcml0ZURhdGE6IGZ1bmN0aW9uIChpZCwgZG9udFVzZVNwcml0ZXMpIHtcclxuICAgICAgICAgICAgdmFyIG9TcHJpdGUgPSB0aGlzLnNwcml0ZURhdGFbaWRdO1xyXG4gICAgICAgICAgICBpZiAob1Nwcml0ZSAmJiAhZG9udFVzZVNwcml0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZURhdGFbaWRdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IGlkLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVnZXhwID0gL1xceyguKj8pXFx9L2c7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0gdGhpcy5zcmNUZW1wbGF0ZS5yZXBsYWNlKHJlZ2V4cCwgZnVuY3Rpb24gKF8sIGdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gcGFyYW1zW2krK107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2luZ2xlSW1hZ2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBzcmNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3R5bGVTdHJpbmc6IGZ1bmN0aW9uIChzcHJpdGVJZCwgYXV0b01hcmdpbikge1xyXG4gICAgICAgICAgICB2YXIgb1Nwcml0ZSA9IHRoaXMuZ2V0U3ByaXRlRGF0YShzcHJpdGVJZCk7XHJcbiAgICAgICAgICAgIHZhciBhclN0eWxlID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAob1Nwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgYXJTdHlsZS5wdXNoKFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoJ1wiICsgdGhpcy5zcmMgKyBcIicpO1wiKTtcclxuICAgICAgICAgICAgICAgIGFyU3R5bGUucHVzaChcImJhY2tncm91bmQtcG9zaXRpb246LVwiICsgb1Nwcml0ZS54ICsgXCJweCAwcHg7XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpeGVsUmF0aW8gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJTdHlsZS5wdXNoKFwiYmFja2dyb3VuZC1zaXplOlwiICsgKHRoaXMuc3ByaXRlTGVuZ3RoICogdGhpcy5zcHJpdGVXKSArIFwicHggXCIgKyB0aGlzLnNwcml0ZUggKyBcInB4O1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0b01hcmdpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyU3R5bGUucHVzaChcIm1hcmdpbjogMCBhdXRvO1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFyU3R5bGUucHVzaChcIndpZHRoOiBcIiArIHRoaXMuc3ByaXRlVyArIFwicHg7XCIpO1xyXG4gICAgICAgICAgICAgICAgYXJTdHlsZS5wdXNoKFwiaGVpZ2h0OiBcIiArIHRoaXMuc3ByaXRlSCArIFwicHg7bGluZS1oZWlnaHQ6IFwiICsgdGhpcy5zcHJpdGVIICsgXCJweDtcIik7XHJcbiAgICAgICAgICAgICAgICBhclN0eWxlLnB1c2goXCJiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XCIpO1xyXG4gICAgICAgICAgICAgICAgLy9hclN0eWxlLnB1c2goXCJmb250LXNpemU6MXB4O1wiKTtcclxuICAgICAgICAgICAgICAgIGFyU3R5bGUucHVzaChcInBvc2l0aW9uOnN0YXRpYztcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFyU3R5bGUuam9pbignJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGdpZ3lhLnNvY2lhbGl6ZS5wbHVnaW5zID09ICd1bmRlZmluZWQnKSBnaWd5YS5zb2NpYWxpemUucGx1Z2lucyA9IHt9O1xyXG4gICAgdmFyIF9waSA9IGdpZ3lhLnNvY2lhbGl6ZS5wbHVnaW5zO1xyXG5cclxuICAgIGlmICh0eXBlb2YgX3BpLmNvbW1vbiA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIF9waS5jb21tb24gPSBfcGkuY29tbW9uIHx8IHt9O1xyXG4gICAgICAgIF9waS5jb21tb24uYWRkQ1NTID0gZnVuY3Rpb24gKGNzcykge1xyXG4gICAgICAgICAgICBpZiAoIWNzcyB8fCBjc3MgPT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoY3NzIGluc3RhbmNlb2YgQXJyYXkpIGNzcyA9IGNzcy5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICAgICAgICB2YXIgcnVsZXNOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KVxyXG4gICAgICAgICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcnVsZXNOb2RlLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQocnVsZXNOb2RlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpO1xyXG4gICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgICAgIChoZWFkLmxlbmd0aCA+IDAgPyBoZWFkWzBdIDogYm9keSkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCh0eXBlb2YgX3BpLmxvZ2luID09ICd1bmRlZmluZWQnKSB8fCAodHlwZW9mIF9waS5sb2dpbi5zaG93TG9naW5VSV92MSA9PSAndW5kZWZpbmVkJykpIHtcclxuICAgICAgICBfcGkubG9naW4gPSBfcGkubG9naW4gfHwge307XHJcbiAgICAgICAgX3BpLmxvZ2luLm1vZHVsZXMgPSB7fTtcclxuICAgICAgICBfcGkubG9naW4ucmVkcmF3ID0gZnVuY3Rpb24gKGNvbnRhaW5lcklEKSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJRCkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySUQpLmlubmVySFRNTCAhPSAnJiMxNjA7Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbY29udGFpbmVySURdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG0uaS5pc0Nvbm5lY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dBZGRDb25uZWN0aW9uc1VJX3YxKG0ub3JpZ2luYWxDLCBtLm9yaWdpbmFsUCwgbS5pLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNob3dMb2dpblVJX3YxKG0ub3JpZ2luYWxDLG0ub3JpZ2luYWxQLG0uaSx0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIF9waS5sb2dpbi5nZXRTdHlsZSA9IGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICB2YXIgb1N0eWxlID0ge307XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc3R5bGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZnVsbGxvZ29jb2xvcmVkJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogMi42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiAnRnVsbExvZ29Db2xvcmVkLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dDogJy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub0Nvbm5lY3RlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bGxsb2dvJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogMi42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiAnRnVsbExvZ28vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiAnLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vQ29ubmVjdGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2lnbmlud2l0aCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86IDcuMDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6ICdTaWduSW5XaXRoLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dDogJy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub0xhc3RMb2dpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9Db25uZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblNpemU6IDIwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiAnLnBuZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBfcGkubG9naW4uZ2V0U2luZ2xlTGluZUhlaWdodCA9IGZ1bmN0aW9uIChvU3R5bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dCgnV2cnLCBvU3R5bGUpLmggKyA0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIF9waS5sb2dpbi5pc1RydWUgPSBmdW5jdGlvbiAodiwgZGVmKSB7XHJcbiAgICAgICAgICAgIGlmICh2ID09IG51bGwpIHJldHVybiBkZWY7XHJcbiAgICAgICAgICAgIHJldHVybiAodiAmJiAodiA9PSB0cnVlIHx8IHYudG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIF9waS5sb2dpbi5zaG93TG9naW5VSV92MSA9IGZ1bmN0aW9uIChjLCBwLCBpbnRlcm5hbHMsIGlzRXZlbnQpIHtcclxuICAgICAgICAgICAgaW50ZXJuYWxzLmlzQ29ubmVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dVSShjLCBwLCBpbnRlcm5hbHMpO1xyXG4gICAgICAgICAgICBpZiAoIWlzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7ZXZlbnROYW1lOiAnbG9hZCcsIGNvbnRhaW5lcklEOiBwWydjb250YWluZXJJRCddfSwgcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIF9waS5sb2dpbi5zaG93QWRkQ29ubmVjdGlvbnNVSV92MSA9IGZ1bmN0aW9uIChjLCBwLCBpbnRlcm5hbHMsIGlzRXZlbnQpIHtcclxuICAgICAgICAgICAgaW50ZXJuYWxzLmlzQ29ubmVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChwLnJlcXVpcmVkQ2FwYWJpbGl0aWVzID09IG51bGwpIHAucmVxdWlyZWRDYXBhYmlsaXRpZXMgPSAnZnJpZW5kcyc7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1VJKGMsIHAsIGludGVybmFscyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBjaWQ6IHAuY2lkLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuYWZ0ZXJHZXRJbmZvLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dDoge1RoaXM6IHRoaXMsIGNvbmY6IGMsIHBhcmFtczogcCwgaW50ZXJuYWxzOiBpbnRlcm5hbHN9LFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZFByb3ZpZGVyczogcC5lbmFibGVkUHJvdmlkZXJzLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRQcm92aWRlcnM6IHAuZGlzYWJsZWRQcm92aWRlcnMsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZENhcGFiaWxpdGllczogcC5yZXF1aXJlZENhcGFiaWxpdGllcyxcclxuICAgICAgICAgICAgICAgIG9hdXRoX3Rva2VuOiBwLm9hdXRoX3Rva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLmdldFVzZXJJbmZvKGMsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmICghaXNFdmVudCkgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHtldmVudE5hbWU6ICdsb2FkJywgY29udGFpbmVySUQ6IHBbJ2NvbnRhaW5lcklEJ119LCBwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIF9waS5sb2dpbi5hZnRlckdldEluZm8gPSBmdW5jdGlvbiAocmVzLCBvdmVyaWRlQ29udGV4dCkge1xyXG4gICAgICAgICAgICB2YXIgR1MgPSBnaWd5YS5zb2NpYWxpemU7XHJcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gcmVzLmNvbnRleHQ7XHJcbiAgICAgICAgICAgIGlmIChvdmVyaWRlQ29udGV4dCkgY29udGV4dCA9IG92ZXJpZGVDb250ZXh0O1xyXG4gICAgICAgICAgICBpZiAocmVzLmVycm9yQ29kZSAhPSAwICYmICFyZXMudXNlcikge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlcy5yZXF1ZXN0UGFyYW1zLmdldEluZm9SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXMucmVxdWVzdFBhcmFtcy5jb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlcy5jb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRXJyb3JGcm9tUmVzcG9uc2UoY29udGV4dC5wYXJhbXMsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAvL0dTLl9jbG9zZUNvbXBvbmVudChjb250ZXh0LmludGVybmFscy5yaWQsY29udGV4dC5pbnRlcm5hbHMuaXNQb3B1cCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGV4dC5pbnRlcm5hbHMuZ2V0SW5mb1Jlc3BvbnNlID0gcmVzO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5UaGlzLnNob3dVSS5hcHBseShjb250ZXh0LlRoaXMsIFtjb250ZXh0LmNvbmYsIGNvbnRleHQucGFyYW1zLCBjb250ZXh0LmludGVybmFsc10pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3BpLmxvZ2luLlRFWFQgPSBmdW5jdGlvbiAobGFuZywgdGV4dEtleSwgcmVwbGFjZVN0ciwgd2l0aFN0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2lneWEucGx1Z2luVXRpbHMubGFuZy5nZXRMb2NhbGl6ZWRUZXh0KCdnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5sb2dpbi5qcycsIHRleHRLZXksIGxhbmcsIHJlcGxhY2VTdHIsIHdpdGhTdHIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3BpLmxvZ2luLnNob3dVSSA9IGZ1bmN0aW9uIChjLCBwLCBpbnRlcm5hbHMpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocFsnY29udGFpbmVySUQnXSkgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgR1MgPSBnaWd5YS5zb2NpYWxpemU7XHJcbiAgICAgICAgICAgIHZhciByaWQgPSBpbnRlcm5hbHNbJ3JpZCddO1xyXG4gICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGRTdHlsZSA9ICdtYXJnaW46MHB4O3BhZGRpbmc6MHB4O2JvcmRlcjowcHg7JztcclxuXHJcbiAgICAgICAgICAgIHZhciByZXNvbHZlciA9IG5ldyBnaWd5YS5nbG9iYWwucmVzb2x2ZXIoZ2lneWEuZ2xvYmFsLnJlc29sdmVyLmRlZmF1bHRQcm9jY2Vzc29yKTtcclxuICAgICAgICAgICAgcmVzb2x2ZXIuYWRkQ29uZmlnKCc8Y29uZmlnPjxib2R5IGZvbnQ9XCJhcmlhbFwiPjxjYXB0aW9ucyBib2xkPVwidHJ1ZVwiIHNpemU9XCIxNlwiIGNvbG9yPVwiIzRjNGM0Y1wiIC8+PGNvbnRyb2xzIHNpemU9XCIxMVwiPjxzbmJ1dHRvbnMgdHlwZT1cIlwiIGJ1dHRvbnNpemU9XCIzMFwiIGNvbG9yPVwiIzliOWI5YlwiIC8+PC9jb250cm9scz48YmFja2dyb3VuZCBiYWNrZ3JvdW5kLWNvbG9yPVwidHJhbnNwYXJlbnRcIiAvPjx0ZXh0cyBzaXplPVwiMTFcIj48bGlua3MgY29sb3I9XCIjMDA4NmYxXCIgLz48L3RleHRzPjwvYm9keT48L2NvbmZpZz4nKTtcclxuICAgICAgICAgICAgaWYgKGludGVybmFsc1snaXNQb3B1cCddKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlci5hZGRDb25maWcoJzxjb25maWc+PGJvZHk+PGJhY2tncm91bmQgZnJhbWUtdGhpY2tuZXNzPVwiNVwiIGZyYW1lLWNvbG9yPVwiIzk5OTk5OVwiIC8+PGNvbnRyb2xzIHNpemU9XCIxMVwiPjxzbmJ1dHRvbnMgdHlwZT1cInRleHRVbmRlclwiIGJ1dHRvbnNpemU9XCIzNVwiIGNvbG9yPVwiIzliOWI5YlwiIC8+PC9jb250cm9scz48L2JvZHk+PC9jb25maWc+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZXIuYWRkQ29uZmlnKGNbJ1VJQ29uZmlnJ10pO1xyXG4gICAgICAgICAgICByZXNvbHZlci5hZGRDb25maWcocFsnVUlDb25maWcnXSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbGFuZyA9IGNbJ2xhbmcnXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwWydsYW5nJ10gIT0gJ3VuZGVmaW5lZCcpIGxhbmcgPSBwWydsYW5nJ107XHJcblxyXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxDID0gYztcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsUCA9IHA7XHJcbiAgICAgICAgICAgIGlmIChpbnRlcm5hbHNbJ2lzUG9wdXAnXSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhcHRpb25UZXh0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHBbJ2NhcHRpb25UZXh0J10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uVGV4dCA9IHBbJ2NhcHRpb25UZXh0J107XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbHMuaXNDb25uZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb25UZXh0ID0gdGhpcy5URVhUKGxhbmcsICdjb25uZWN0X3dpdGhfeW91cl9mcmllbmRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvblRleHQgPSB0aGlzLlRFWFQobGFuZywgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb1BvcHVwID0gZ2lneWEuc29jaWFsaXplLl9jcmVhdGVKU1BvcHVwMihyaWQsIHJlc29sdmVyLCA1LCBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9IVE1MTG9naW4vRGlhbG9nL0RpYWxvZ18nKSwgY2FwdGlvblRleHQpO1xyXG4gICAgICAgICAgICAgICAgYyA9IG9Qb3B1cC5jO1xyXG4gICAgICAgICAgICAgICAgcCA9IG9Qb3B1cC5wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL0hUTUxMb2dpbi8nKTtcclxuICAgICAgICAgICAgdmFyIGdzTG9naW4gPSAnZ2lneWEuc29jaWFsaXplLnBsdWdpbnMubG9naW4nO1xyXG4gICAgICAgICAgICB2YXIgbGFzdExvZ2luUHJvdmlkZXIgPSB0aGlzLmdldExhc3RMb2dpbigpO1xyXG4gICAgICAgICAgICB2YXIgbGFzdExvZ2luSW5kaWNhdGlvbiA9IChwWydsYXN0TG9naW5JbmRpY2F0aW9uJ10gPyBwWydsYXN0TG9naW5JbmRpY2F0aW9uJ10udG9Mb3dlckNhc2UoKSA6ICdib3JkZXInKTtcclxuICAgICAgICAgICAgdmFyIGZhY2Vib29rU3VnZ2VzdEVuYWJsZWQgPSAocC5hdXRvRGV0ZWN0VXNlclByb3ZpZGVycyAmJiBwLmF1dG9EZXRlY3RVc2VyUHJvdmlkZXJzLnRvTG93ZXJDYXNlKCkgPT0gJ2ZhY2Vib29rJyAmJiAoIWxhc3RMb2dpblByb3ZpZGVyIHx8IGxhc3RMb2dpbkluZGljYXRpb24gIT0gJ3dlbGNvbWUnKSlcclxuICAgICAgICAgICAgdmFyIGhpZGRlblByb3ZpZGVycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbnRlcm5hbHMuaXNDb25uZWN0ICYmIGdpZ3lhLmV4dGVybmFsLmZhY2Vib29rLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgICAgIHZhciBodG1sTG9naW5QbHVnaW4gPSAnPGRpdiBpZD1cIicgKyBwWydjb250YWluZXJJRCddICsgJ19jb250YWluZXJcIj48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGh0bWxTdWdnZXN0RmFjZWJvb2sgPSAnPGRpdiBvbm1vdXNlb3Zlcj1cInRoaXMuc3R5bGUub3BhY2l0eT0wLjc1O3RoaXMuc3R5bGUuZmlsdGVyPVxcJ2FscGhhKG9wYWNpdHk9NzUpXFwnXCIgb25tb3VzZW91dD1cInRoaXMuc3R5bGUub3BhY2l0eT0xO3RoaXMuc3R5bGUuZmlsdGVyPVxcJ2FscGhhKG9wYWNpdHk9MTAwKVxcJ1wiIGlkPVwiJyArIG9yaWdpbmFsUFsnY29udGFpbmVySUQnXSArICdfc3VnZ2VzdEZCXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnQ7Ym9yZGVyOjA7cGFkZGluZzowO21hcmdpbjowO2N1cnNvcjpwb2ludGVyXCIgb25jbGljaz1cIicgKyBnc0xvZ2luICsgJy5wcm92aWRlckNsaWNrKFxcJycgKyBwLmNvbnRhaW5lcklEICsgJ19jb250YWluZXJcXCcsXFwnRmFjZWJvb2tcXCcpXCI+PGltZyBhbHQ9XCJcIiBzcmM9XCInICsgYmFzZSArICdGQl9CdXR0b24uZ2lmXCIgLz48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGh0bWxTcGFjZXIgPSAnPGRpdiBzdHlsZT1cImhlaWdodDoxMHB4O2ZvbnQtc2l6ZToxcHhcIj4mIzE2MDs8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dGVySFRNTCA9IGh0bWxMb2dpblBsdWdpbjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLy8gbWF5YmUgZGVsZXRlIGFsbCB0aGlzP1xyXG4gICAgICAgICAgICAgICAgaWYgKGZhY2Vib29rU3VnZ2VzdEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmlnaW5hbFAuY29udGFpbmVySUQpLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlblByb3ZpZGVycy5wdXNoKCdmYWNlYm9vaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGVySFRNTCA9IG91dGVySFRNTCArIGh0bWxTcGFjZXIgKyBodG1sU3VnZ2VzdEZhY2Vib29rO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvdXRlckhUTUwgIT0gaHRtbExvZ2luUGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocC5jb250YWluZXJJRCkuaW5uZXJIVE1MID0gb3V0ZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRkIuWEZCTUwucGFyc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcCA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShwKTtcclxuICAgICAgICAgICAgICAgICAgICBwLmNvbnRhaW5lcklEID0gcC5jb250YWluZXJJRCArICdfY29udGFpbmVyJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgYWxpZ25Ub0xlZnQ7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lcklEID0gcFsnY29udGFpbmVySUQnXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kdWxlc1tjb250YWluZXJJRF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZuVXNlckNoYW5nZWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbHMuaXNDb25uZWN0IHx8IGUuZXZlbnROYW1lID09ICdsb2dvdXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuYWZ0ZXJHZXRJbmZvKGUsIHtUaGlzOiBUaGlzLCBjb25mOiBvcmlnaW5hbEMsIHBhcmFtczogb3JpZ2luYWxQLCBpbnRlcm5hbHM6IGludGVybmFsc30pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLmFkZEV2ZW50SGFuZGxlcnMoe2xpc3RlbmVyVHlwZTogJ2NvbXBvbmVudCd9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJEZXNjcmlwdGlvbjogJ2xpc3RlbmVyIGZvciB1cGRhdGluZyBhIGNvbm5lY3Qgd2lkZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICBvbkxvZ291dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnJlZHJhdyhjb250YWluZXJJRClcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTG9naW46IGZuVXNlckNoYW5nZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb25Db25uZWN0OiBmblVzZXJDaGFuZ2VkLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGlzY29ubmVjdDogZm5Vc2VyQ2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmFjZWJvb2tTdWdnZXN0RW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduVG9MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuYWRkRXZlbnRIYW5kbGVycyh7bGlzdGVuZXJUeXBlOiAnY29tcG9uZW50J30sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GYWNlYm9va0xvYWRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLmV4dGVybmFsLmZhY2Vib29rLmlzTG9nZ2VkSW4pIFRoaXMuc2hvd1VJKG9yaWdpbmFsQywgb3JpZ2luYWxQLCBpbnRlcm5hbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBidXR0b25zU3R5bGUgPSBwWydidXR0b25zU3R5bGUnXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBidXR0b25zU3R5bGUgPT0gJ3VuZGVmaW5lZCcpIGJ1dHRvbnNTdHlsZSA9ICcnO1xyXG4gICAgICAgICAgICB2YXIgb1N0eWxlID0gdGhpcy5nZXRTdHlsZShidXR0b25zU3R5bGUpO1xyXG4gICAgICAgICAgICAvL2lmIChpbnRlcm5hbHMuaXNDb25uZWN0ICYmIG9TdHlsZS5ub0Nvbm5lY3RlZCkgb1N0eWxlID0gdGhpcy5nZXRTdHlsZSgnJyk7IC8vV2lsbCBnZXQgZGVmYXVsdCBzdHlsZVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBzdHlsZUJhc2UgPSAnJztcclxuICAgICAgICAgICAgaWYgKG9TdHlsZS5iYXNlKSBzdHlsZUJhc2UgPSBvU3R5bGUuYmFzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlc1tjb250YWluZXJJRF0gPSB7b3JpZ2luYWxDOiBvcmlnaW5hbEMsIG9yaWdpbmFsUDogb3JpZ2luYWxQLCBpOiBpbnRlcm5hbHMsIHBhZ2U6IDB9O1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbY29udGFpbmVySURdLmMgPSBjO1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbY29udGFpbmVySURdLnAgPSBwO1xyXG4gICAgICAgICAgICB2YXIgYXJIVE1MID0gW107XHJcbiAgICAgICAgICAgIHZhciBhID0gMDtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXF1aXJlZENhcGFiaWxpdGllcyA9IHBbJ3JlcXVpcmVkQ2FwYWJpbGl0aWVzJ107XHJcbiAgICAgICAgICAgIGlmICghcmVxdWlyZWRDYXBhYmlsaXRpZXMpIHJlcXVpcmVkQ2FwYWJpbGl0aWVzID0gJ2xvZ2luJztcclxuICAgICAgICAgICAgcmVxdWlyZWRDYXBhYmlsaXRpZXMgPSByZXF1aXJlZENhcGFiaWxpdGllcy5yZXBsYWNlKC8gL2csICcnKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgYXJQcm92aWRlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbmFibGVkUHJvdmlkZXJzID0gcFsnZW5hYmxlZFByb3ZpZGVycyddO1xyXG4gICAgICAgICAgICBpZiAoIWVuYWJsZWRQcm92aWRlcnMpIGVuYWJsZWRQcm92aWRlcnMgPSBjWydlbmFibGVkUHJvdmlkZXJzJ107XHJcbiAgICAgICAgICAgIGlmICghZW5hYmxlZFByb3ZpZGVycykgZW5hYmxlZFByb3ZpZGVycyA9ICcqJztcclxuICAgICAgICAgICAgdmFyIGRpc2FibGVkUHJvdmlkZXJzID0gcFsnZGlzYWJsZWRQcm92aWRlcnMnXTtcclxuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZFByb3ZpZGVycykgZGlzYWJsZWRQcm92aWRlcnMgPSBjWydkaXNhYmxlZFByb3ZpZGVycyddO1xyXG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkUHJvdmlkZXJzKSBkaXNhYmxlZFByb3ZpZGVycyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgYXJQcm92aWRlcnMgPSBHUy5nZXRQcm92aWRlcnNCeU5hbWUoZW5hYmxlZFByb3ZpZGVycyk7XHJcbiAgICAgICAgICAgIGFyUHJvdmlkZXJzID0gR1MuaGlkZVByb3ZpZGVyc0J5TmFtZShhclByb3ZpZGVycywgZGlzYWJsZWRQcm92aWRlcnMpO1xyXG4gICAgICAgICAgICBhclByb3ZpZGVycyA9IEdTLmhpZGVQcm92aWRlcnNCeU5hbWUoYXJQcm92aWRlcnMsIGhpZGRlblByb3ZpZGVycy5qb2luKCcsJykpO1xyXG4gICAgICAgICAgICBhclByb3ZpZGVycyA9IEdTLmhpZGVQcm92aWRlcnNCeU5hbWUoYXJQcm92aWRlcnMsICdjdXN0b21vcGVuaWQnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBvQnV0dG9uID0gcFsnY3VzdG9tQnV0dG9uJ107XHJcbiAgICAgICAgICAgIGlmICghb0J1dHRvbiAmJiBwWydjdXN0b21CdXR0b25zJ10gJiYgcFsnY3VzdG9tQnV0dG9ucyddLmxlbmd0aCA+IDApIG9CdXR0b24gPSBwWydjdXN0b21CdXR0b25zJ11bMF07XHJcblxyXG4gICAgICAgICAgICB2YXIgcEN1c3RvbVByb3ZpZGVyO1xyXG4gICAgICAgICAgICBpZiAob0J1dHRvbiAmJiAoIW9CdXR0b24udHlwZSB8fCBvQnV0dG9uLnR5cGUudG9Mb3dlckNhc2UoKSA9PSAnb3BlbmlkJyB8fCBvQnV0dG9uLnR5cGUudG9Mb3dlckNhc2UoKSA9PSAnZXZlbnRvbmx5JykpIHtcclxuICAgICAgICAgICAgICAgIHBDdXN0b21Qcm92aWRlciA9IEdTLl9nZXRQcm92aWRlckJ5SUQoNDEyMSk7XHJcbiAgICAgICAgICAgICAgICBwQ3VzdG9tUHJvdmlkZXIuaW1nTmFtZSA9ICdvcGVuSUQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9CdXR0b24gJiYgb0J1dHRvbi50eXBlICYmIG9CdXR0b24udHlwZS50b0xvd2VyQ2FzZSgpID09ICdzYW1sJykge1xyXG4gICAgICAgICAgICAgICAgcEN1c3RvbVByb3ZpZGVyID0gR1MuX2dldFByb3ZpZGVyQnlJRCg0MTIyKTtcclxuICAgICAgICAgICAgICAgIHBDdXN0b21Qcm92aWRlci5uYW1lID0gJ3NhbWwtJyArIG9CdXR0b24uaWRwTmFtZTtcclxuICAgICAgICAgICAgICAgIHBDdXN0b21Qcm92aWRlci5pbWdOYW1lID0gJ3NhbWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocEN1c3RvbVByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9CdXR0b24ucHJvdmlkZXJOYW1lKSBvQnV0dG9uLnByb3ZpZGVyTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgcEN1c3RvbVByb3ZpZGVyLmRpc3BsYXlOYW1lID0gb0J1dHRvbi5wcm92aWRlck5hbWU7XHJcbiAgICAgICAgICAgICAgICBwQ3VzdG9tUHJvdmlkZXIuYnV0dG9uRGF0YSA9IG9CdXR0b247XHJcblxyXG4gICAgICAgICAgICAgICAgYXJQcm92aWRlcnNbaV0gPSBwQ3VzdG9tUHJvdmlkZXI7XHJcbiAgICAgICAgICAgICAgICBhclByb3ZpZGVycy5zcGxpY2Uob0J1dHRvbi5wb3NpdGlvbiAmJiBvQnV0dG9uLnBvc2l0aW9uID4gMSA/IG9CdXR0b24ucG9zaXRpb24gLSAxIDogMCwgMCwgcEN1c3RvbVByb3ZpZGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhclByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJQcm92aWRlcnNbaV0uY29udGV4dCA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW50ZXJuYWxzLmdldEluZm9SZXNwb25zZSAmJiBpbnRlcm5hbHMuZ2V0SW5mb1Jlc3BvbnNlLnVzZXIgJiYgaW50ZXJuYWxzLmdldEluZm9SZXNwb25zZS51c2VyLmlkZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZGVudGl0aWVzID0gaW50ZXJuYWxzLmdldEluZm9SZXNwb25zZS51c2VyLmlkZW50aXRpZXM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZGVudGl0eU5hbWUgaW4gaWRlbnRpdGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZGVudGl0eSA9IGlkZW50aXRpZXNbaWRlbnRpdHlOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eS5jb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlck9iaiA9IEdTLl9nZXRQcm92aWRlckJ5TmFtZShpZGVudGl0eS5wcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29ubmVjdGVkKSBjb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlck9iai5jb250ZXh0ID0gaWRlbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYXJDb25uZWN0ZWRQcm92aWRlcnMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhclByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyUmVxdWlyZWRQZXJtaXNzaW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyUHJvdmlkZXJzW2ldLmNvbnRleHQgJiYgYXJQcm92aWRlcnNbaV0uY29udGV4dC5jb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFzQWxsUmVxdWlyZWRQZXJtaXNzaW9ucyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyUHJvdmlkZXJzW2ldLmNvbnRleHQubWlzc2luZ1Blcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaXNzaW5nUGVybWlzc2lvbnNTdHJpbmcgPSAnLCcgKyBhclByb3ZpZGVyc1tpXS5jb250ZXh0Lm1pc3NpbmdQZXJtaXNzaW9ucy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJycpICsgJywnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmVlZGVkUGVybWlzc2lvbnMgPSBnaWd5YS51dGlscy5vYmplY3QuZXh0cmFjdFByb3BlcnR5KFtjLCBwLCBpbnRlcm5hbHNdLCBhclByb3ZpZGVyc1tpXS5uYW1lICsgJ0V4dHJhUGVybWlzc2lvbnMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZWVkZWRQZXJtaXNzaW9ucykgbmVlZGVkUGVybWlzc2lvbnMgPSBnaWd5YS51dGlscy5vYmplY3QuZXh0cmFjdFByb3BlcnR5KFtjLCBwLCBpbnRlcm5hbHNdLCAnZXh0cmFQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5lZWRlZFBlcm1pc3Npb25zKSBuZWVkZWRQZXJtaXNzaW9ucyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWVkZWRQZXJtaXNzaW9ucyA9IG5lZWRlZFBlcm1pc3Npb25zLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhck5lZWRlZFBlcm1pc3Npb25zID0gbmVlZGVkUGVybWlzc2lvbnMuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaVBlcm1pc3Npb24gPSAwOyBpUGVybWlzc2lvbiA8IGFyTmVlZGVkUGVybWlzc2lvbnMubGVuZ3RoOyBpUGVybWlzc2lvbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1Blcm1pc3Npb25zU3RyaW5nICYmIG1pc3NpbmdQZXJtaXNzaW9uc1N0cmluZy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJywnICsgYXJOZWVkZWRQZXJtaXNzaW9uc1tpUGVybWlzc2lvbl0gKyAnLCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQWxsUmVxdWlyZWRQZXJtaXNzaW9ucyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyUmVxdWlyZWRQZXJtaXNzaW9ucy5wdXNoKGFyTmVlZGVkUGVybWlzc2lvbnNbaVBlcm1pc3Npb25dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhclByb3ZpZGVyc1tpXS5jb250ZXh0LnJlcXVpcmVkUGVybWlzc2lvbnMgPSBhclJlcXVpcmVkUGVybWlzc2lvbnMuam9pbignLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNBbGxSZXF1aXJlZFBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyQ29ubmVjdGVkUHJvdmlkZXJzLnB1c2goYXJQcm92aWRlcnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXJQcm92aWRlcnMgPSBhckNvbm5lY3RlZFByb3ZpZGVycy5jb25jYXQoR1MuaGlkZVByb3ZpZGVyc0J5TmFtZShhclByb3ZpZGVycywgYXJDb25uZWN0ZWRQcm92aWRlcnMuam9pbignLCcpKSk7XHJcblxyXG4gICAgICAgICAgICBhclByb3ZpZGVycyA9IEdTLmdldFByb3ZpZGVyc0ZvclJlcXVpcmVkQ2FwYWJpbGl0aWVzKGFyUHJvdmlkZXJzLCByZXF1aXJlZENhcGFiaWxpdGllcyk7XHJcbiAgICAgICAgICAgIGlmIChhclByb3ZpZGVycy5sZW5ndGggPT0gMCAmJiAhZmFjZWJvb2tTdWdnZXN0RW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRXJyb3JGcm9tUmVzcG9uc2UocCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0VSUl9OT19QUk9WSURFUlMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6ICdObyBwcm92aWRlcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogNDAwMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ05vIHByb3ZpZGVycydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdyA9IHBhcnNlSW50KHBbJ3dpZHRoJ10pO1xyXG4gICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlld1dpZHRoID0gZGl2Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgICAgIHcgPSBNYXRoLm1pbih2aWV3V2lkdGgsIHcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBoID0gcGFyc2VJbnQocFsnaGVpZ2h0J10pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpbnRlcm5hbHNbJ2lzQ29ubmVjdCddKSBsYXN0TG9naW5JbmRpY2F0aW9uID0gJyc7XHJcbiAgICAgICAgICAgIGlmICghaW50ZXJuYWxzWydpc0Nvbm5lY3QnXSAmJiBsYXN0TG9naW5JbmRpY2F0aW9uID09ICdib3JkZXInKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gYXJQcm92aWRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyUHJvdmlkZXJzW2ldLm5hbWUgPT0gbGFzdExvZ2luUHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJQcm92aWRlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhclByb3ZpZGVycy51bnNoaWZ0KHByb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbY29udGFpbmVySURdLmFyUHJvdmlkZXJzID0gYXJQcm92aWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXJyb3dXID0gNztcclxuICAgICAgICAgICAgdmFyIGFycm93SCA9IDEyO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9TbkJ1dHRvbnNTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvY29udHJvbHMvc25idXR0b25zJyk7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0VW5kZXIgPSAoYnV0dG9uc1N0eWxlID09ICcnICYmIG9TbkJ1dHRvbnNTdHlsZVsndHlwZSddID09ICd0ZXh0VW5kZXInKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBidXR0b25zaXplID0gcC5idXR0b25TaXplID8gcC5idXR0b25TaXplIDogb1NuQnV0dG9uc1N0eWxlWydidXR0b25zaXplJ107XHJcbiAgICAgICAgICAgIGJ1dHRvbnNpemUgPSBwYXJzZUludChidXR0b25zaXplKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChidXR0b25zaXplID4gaCkgYnV0dG9uc2l6ZSA9IGg7XHJcbiAgICAgICAgICAgIGlmIChhcnJvd0ggPiBoKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJvd1cgPSBNYXRoLmZsb29yKGFycm93VyAqIGggLyBhcnJvd0gpO1xyXG4gICAgICAgICAgICAgICAgYXJyb3dIID0gTWF0aC5mbG9vcihoICogYXJyb3dXIC8gNyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpY29uU2l6ZSA9IGJ1dHRvbnNpemU7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIG9CZ1N0eWxlID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS9iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW50ZXJuYWxzWydpc1BvcHVwJ10pIHtcclxuICAgICAgICAgICAgICAgIG9CZ1N0eWxlWydmcmFtZS10aGlja25lc3MnXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG9MaW5rU3R5bGUgPSByZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9ib2R5L3RleHRzL2xpbmtzJyk7XHJcbiAgICAgICAgICAgIHZhciBsaW5rSGVpZ2h0ID0gdGhpcy5nZXRTaW5nbGVMaW5lSGVpZ2h0KG9MaW5rU3R5bGUpO1xyXG4gICAgICAgICAgICB2YXIgb1RleHRTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvdGV4dHMnKTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgdGV4dFN0eWxlID0gR1MuZ2V0U3R5bGVTdHJpbmcob1RleHRTdHlsZSk7XHJcbiAgICAgICAgICAgIHZhciBsaW5rU3R5bGUgPSBHUy5nZXRTdHlsZVN0cmluZyhvTGlua1N0eWxlLCB0cnVlKTtcclxuICAgICAgICAgICAgdmFyIGJnU3R5bGUgPSBHUy5nZXRTdHlsZVN0cmluZyhvQmdTdHlsZSk7XHJcbiAgICAgICAgICAgIHZhciBzbkJ1dHRvbnNTdHlsZSA9IEdTLmdldFN0eWxlU3RyaW5nKG9TbkJ1dHRvbnNTdHlsZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGljb25TaXplID09ICd1bmRlZmluZWQnIHx8IGlzTmFOKGljb25TaXplKSkgaWNvblNpemUgPSAzMDtcclxuXHJcbiAgICAgICAgICAgIGlmICghb1N0eWxlLm1pblNpemUpIG9TdHlsZS5taW5TaXplID0gMTU7XHJcbiAgICAgICAgICAgIGlmICghb1N0eWxlLm1heFNpemUpIG9TdHlsZS5tYXhTaXplID0gNjU7XHJcbiAgICAgICAgICAgIHZhciBpbWdJY29uU2l6ZSA9IE1hdGguZmxvb3IoaWNvblNpemUgLyA1KSAqIDU7XHJcbiAgICAgICAgICAgIC8vaWYgKGltZ0ljb25TaXplIDwgMjAgJiYgb1MpXHJcbiAgICAgICAgICAgIGlmIChpbWdJY29uU2l6ZSA8IG9TdHlsZS5taW5TaXplKSBpbWdJY29uU2l6ZSA9IG9TdHlsZS5taW5TaXplO1xyXG4gICAgICAgICAgICBpZiAoaW1nSWNvblNpemUgPiBvU3R5bGUubWF4U2l6ZSkgaW1nSWNvblNpemUgPSBvU3R5bGUubWF4U2l6ZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxpbmdMZWZ0UGF0aCA9IGJhc2UgKyAncGFnaW5nL3Njcm9sbGluZ2Fycm93X2xlZnQuZ2lmJztcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGluZ0xlZnREaXNhYmxlUGF0aCA9IGJhc2UgKyAncGFnaW5nL3Njcm9sbGluZ2Fycm93X2Rpc2FibGVfbGVmdC5naWYnO1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsaW5nUmlnaHRQYXRoID0gYmFzZSArICdwYWdpbmcvc2Nyb2xsaW5nYXJyb3dfcmlnaHQuZ2lmJztcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGluZ1JpZ2h0RGlzYWJsZVBhdGggPSBiYXNlICsgJ3BhZ2luZy9zY3JvbGxpbmdhcnJvd19kaXNhYmxlX3JpZ2h0LmdpZic7XHJcblxyXG4gICAgICAgICAgICBpZiAoaWNvblNpemUgPiAyNSkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nTGVmdFBhdGggPSBiYXNlICsgJ3BhZ2luZy9zY3JvbGxpbmdhcnJvd2xfbGVmdC5naWYnO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nTGVmdERpc2FibGVQYXRoID0gYmFzZSArICdwYWdpbmcvc2Nyb2xsaW5nYXJyb3dsX2Rpc2FibGVfbGVmdC5naWYnO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nUmlnaHRQYXRoID0gYmFzZSArICdwYWdpbmcvc2Nyb2xsaW5nYXJyb3dsX3JpZ2h0LmdpZic7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdSaWdodERpc2FibGVQYXRoID0gYmFzZSArICdwYWdpbmcvc2Nyb2xsaW5nYXJyb3dsX2Rpc2FibGVfcmlnaHQuZ2lmJztcclxuICAgICAgICAgICAgICAgIGlmIChhcnJvd1cgPT0gNykgYXJyb3dXID0gMTA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwLnVzZUxhcmdlQXJyb3dzKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdMZWZ0UGF0aCA9IGJhc2UgKyAncGFnaW5nL3Njcm9sbGluZ2Fycm93bGxfbGVmdC5naWYnO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nTGVmdERpc2FibGVQYXRoID0gYmFzZSArICdwYWdpbmcvc2Nyb2xsaW5nYXJyb3dsbF9kaXNhYmxlX2xlZnQuZ2lmJztcclxuICAgICAgICAgICAgICAgIHNjcm9sbGluZ1JpZ2h0UGF0aCA9IGJhc2UgKyAncGFnaW5nL3Njcm9sbGluZ2Fycm93bGxfcmlnaHQuZ2lmJztcclxuICAgICAgICAgICAgICAgIHNjcm9sbGluZ1JpZ2h0RGlzYWJsZVBhdGggPSBiYXNlICsgJ3BhZ2luZy9zY3JvbGxpbmdhcnJvd2xsX2Rpc2FibGVfcmlnaHQuZ2lmJztcclxuICAgICAgICAgICAgICAgIGFycm93VyA9IDIwO1xyXG4gICAgICAgICAgICAgICAgYXJyb3dIID0gNDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBtYXhSb3dzID0gMTtcclxuICAgICAgICAgICAgdmFyIG1heExpbmVzID0gMTtcclxuXHJcbiAgICAgICAgICAgIHZhciBoaW50VyA9IDE0OTtcclxuICAgICAgICAgICAgdmFyIGhpbnRIID0gNTU7XHJcblxyXG4gICAgICAgICAgICB2YXIgaGVhZGVyVGV4dCA9IHBbJ2hlYWRlclRleHQnXTtcclxuICAgICAgICAgICAgaWYgKGggPCA1MCkgaGVhZGVyVGV4dCA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBzaG93SGludCA9ICh0aGlzLmlzVHJ1ZShwWydzaG93V2hhdHNUaGlzJ10pICYmIHcgPiBoaW50VyAmJiBoIC0gbGlua0hlaWdodCA+IGhpbnRIKTtcclxuICAgICAgICAgICAgaW50ZXJuYWxzLnNob3dIaW50ID0gc2hvd0hpbnQ7XHJcbiAgICAgICAgICAgIHZhciBzaG93R2lneWFCcmFuZGluZyA9ICghdGhpcy5pc1RydWUocFsnaGlkZUdpZ3lhJ10sIGZhbHNlKSAmJiAhdGhpcy5pc1RydWUocFsnaGlkZUdpZ3lhTGluayddLCBmYWxzZSkpO1xyXG4gICAgICAgICAgICB2YXIgc2hvd1doYXRzVGhpcyA9ICghc2hvd0dpZ3lhQnJhbmRpbmcgJiYgc2hvd0hpbnQpO1xyXG4gICAgICAgICAgICB2YXIgc2hvd1Rlcm1zID0gIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHBbJ3Nob3dUZXJtc0xpbmsnXSk7XHJcbiAgICAgICAgICAgIHZhciBzaG93RWRpdCA9IChpbnRlcm5hbHMuaXNDb25uZWN0ICYmIGNvbm5lY3RlZCAmJiAhZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0RmFsc2UocFsnc2hvd0VkaXRMaW5rJ10pKTtcclxuICAgICAgICAgICAgdmFyIGIgPSBhclByb3ZpZGVycy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAvL2J1dHRvbiBzaXplIChpbWFnZSBvbmx5KVxyXG4gICAgICAgICAgICB2YXIgcGl4ZWxSYXRpbyA9ICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgPyAyIDogMSk7XHJcbiAgICAgICAgICAgIHZhciBidG5JbWdXID0gTWF0aC5yb3VuZChpY29uU2l6ZSAqIG9TdHlsZS5yYXRpbyk7XHJcbiAgICAgICAgICAgIHZhciBidG5JbWdIID0gaWNvblNpemU7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhdGVzID0gWycnXTtcclxuICAgICAgICAgICAgdmFyIHNTdGF0ZXMgPSAnWycgKyBzdGF0ZXMuam9pbignLCcpICsgJ10nO1xyXG4gICAgICAgICAgICB2YXIgcmVzaXplID0gKGltZ0ljb25TaXplICE9IGljb25TaXplKSB8fCBwaXhlbFJhdGlvID4gMTtcclxuICAgICAgICAgICAgdmFyIGFyU3ByaXRlc1Byb3ZpZGVycyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhclNwcml0ZXNQcm92aWRlcnNbaV0gPSBhclByb3ZpZGVyc1tpXS50b1N0cmluZygpLnNwbGl0KCctJylbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJTcHJpdGVzUHJvdmlkZXJzID0gYXJTcHJpdGVzUHJvdmlkZXJzLnNvcnQoKTsgLy9hcnJheSBpcyBzb3J0ZWQgZm9yIGNhY2hpbmdcclxuICAgICAgICAgICAgdmFyIHNwcml0ZVJlbmRlcmVyID0gZ2lneWEuZ2xvYmFsLmdldFNwcml0ZVJlbmRlcmVycyh7XHJcbiAgICAgICAgICAgICAgICBsb2dpbkljb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJy9IVE1MTG9naW4vJyArIHN0eWxlQmFzZSArICdbJyArIGFyU3ByaXRlc1Byb3ZpZGVycy5qb2luKCcsJykgKyAnXV8nICsgc1N0YXRlcyArIGltZ0ljb25TaXplICogcGl4ZWxSYXRpbyArIG9TdHlsZS5leHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdzogYnRuSW1nVyxcclxuICAgICAgICAgICAgICAgICAgICBoOiBidG5JbWdILFxyXG4gICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW86IHBpeGVsUmF0aW9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2Rpdi5pbm5lckhUTUw9c2QuZ2V0SFRNTChkaXYsICd5YWhvb19jb25uZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vZnVsbCBidXR0b24gc2l6ZSAoaW5jbHVkaW5nIGltYWdlIGFuZCB0ZXh0KVxyXG4gICAgICAgICAgICB2YXIgYnRuVyA9IGJ0bkltZ1c7XHJcbiAgICAgICAgICAgIHZhciBidG5IID0gYnRuSW1nSDtcclxuXHJcbiAgICAgICAgICAgIC8vYnV0dG9ucyBzcGFjaW5nXHJcbiAgICAgICAgICAgIHZhciBiaHMgPSA1O1xyXG4gICAgICAgICAgICB2YXIgYnZzID0gNTtcclxuXHJcbiAgICAgICAgICAgIC8vb3V0ZXIgbWFyZ2luc1xyXG4gICAgICAgICAgICB2YXIgaG0gPSAwOyAgLy9hcnJvd3Mgd2lkdGhcclxuICAgICAgICAgICAgdmFyIHZtID0gMDsgLy9ib3R0b20gbGluayBoZWlnaHRcclxuXHJcbiAgICAgICAgICAgIHZhciBvdXRlckZyYW1lVGhpY2tuZXNzID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS9iYWNrZ3JvdW5kJylbJ2ZyYW1lLXRoaWNrbmVzcyddO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG91dGVyRnJhbWVUaGlja25lc3MgPT0gJ3VuZGVmaW5lZCcpIG91dGVyRnJhbWVUaGlja25lc3MgPSAwO1xyXG5cclxuICAgICAgICAgICAgaG0gKz0gb3V0ZXJGcmFtZVRoaWNrbmVzcyAqIDJcclxuICAgICAgICAgICAgdm0gKz0gb3V0ZXJGcmFtZVRoaWNrbmVzcyAqIDJcclxuXHJcbiAgICAgICAgICAgIC8qaWYgKGludGVybmFsc1snaXNQb3B1cCddKSB7XHJcbiAgICAgICAgICAgICB2bSs9MTA7XHJcbiAgICAgICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgICAgIGlmIChzaG93R2lneWFCcmFuZGluZyB8fCBzaG93V2hhdHNUaGlzIHx8IHNob3dUZXJtcyB8fCBzaG93RWRpdCkge1xyXG4gICAgICAgICAgICAgICAgdm0gKz0gbGlua0hlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGVhZGVyVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdm0gKz0gZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KGhlYWRlclRleHQsIG9UZXh0U3R5bGUpLmggKyA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0ZXh0VW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIGJ0bkggKz0gdGhpcy5nZXRTaW5nbGVMaW5lSGVpZ2h0KG9TbkJ1dHRvbnNTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuVyA9IE1hdGgubWF4KGJ0blcsIGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dChhclByb3ZpZGVyc1tpXS5kaXNwbGF5TmFtZSwgb1NuQnV0dG9uc1N0eWxlKS53ICsgNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG1heEJ1dHRvbnNJblJvdyA9IE1hdGguZmxvb3IoKHcgLSBobSArIGJocykgLyAoYmhzICsgYnRuVykpXHJcbiAgICAgICAgICAgIHZhciBtYXhCdXR0b25zSW5Db2wgPSBNYXRoLmZsb29yKChoIC0gdm0gKyBidnMpIC8gKGJ2cyArIGJ0bkgpKVxyXG5cclxuICAgICAgICAgICAgaWYgKG1heEJ1dHRvbnNJbkNvbCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHZtID0gMFxyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlclRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2bSArPSBnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQubWVhc3VyZVRleHQoaGVhZGVyVGV4dCwgb1RleHRTdHlsZSkuaCArIDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtYXhCdXR0b25zSW5Db2wgPSBNYXRoLmZsb29yKChoIC0gdm0gKyBidnMpIC8gKGJ2cyArIGJ0bkgpKVxyXG4gICAgICAgICAgICAgICAgaWYgKG1heEJ1dHRvbnNJbkNvbCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0Vycm9yP1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0dpZ3lhQnJhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBzaG93V2hhdHNUaGlzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VkaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBzaG93VGVybXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1heEJ1dHRvbnNJbkNvbCAqIG1heEJ1dHRvbnNJblJvdyA8IGIpIHsgLy8gcGFnaW5nIGlzIG5lZWRlZCwgYWRkIGFycm93V2lkdGggdG8gaCBtYXJnaW4gYW5kIHJlY2FsY3VsYXRlIGJ1dHRvbnMgaW4gYSByb3cuXHJcbiAgICAgICAgICAgICAgICBobSArPSAoYXJyb3dXICsgYmhzKSAqIDI7XHJcbiAgICAgICAgICAgICAgICBtYXhCdXR0b25zSW5Sb3cgPSBNYXRoLmZsb29yKCh3IC0gaG0gKyBiaHMpIC8gKGJocyArIGJ0blcpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0b3RhbGIgPSBiO1xyXG4gICAgICAgICAgICBiID0gYiAlIChtYXhCdXR0b25zSW5Sb3cgKiBtYXhCdXR0b25zSW5Db2wpO1xyXG4gICAgICAgICAgICB2YXIgb3B0aW1hbExhc3RSb3dCdXR0b25zID0gMDtcclxuICAgICAgICAgICAgdmFyIG9wdGltYWxSb3dCdXR0b25zID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSBtYXhCdXR0b25zSW5Sb3c7IHIgKiBtYXhCdXR0b25zSW5Db2wgPj0gYjsgci0tKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RSb3dCdXR0b25zID0gYiAtIChyICogTWF0aC5mbG9vcihiIC8gcikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RSb3dCdXR0b25zID09IDApIGxhc3RSb3dCdXR0b25zID0gcjtcclxuICAgICAgICAgICAgICAgIGlmIChsYXN0Um93QnV0dG9ucyA+IG9wdGltYWxMYXN0Um93QnV0dG9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGltYWxMYXN0Um93QnV0dG9ucyA9IGxhc3RSb3dCdXR0b25zO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGltYWxSb3dCdXR0b25zID0gcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGlQcm92aWRlciA9IDA7XHJcbiAgICAgICAgICAgIGlmIChtYXhCdXR0b25zSW5Db2wgKiBtYXhCdXR0b25zSW5Sb3cgPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgcGFnZXMgPSBNYXRoLmNlaWwodG90YWxiIC8gKG1heEJ1dHRvbnNJbkNvbCAqIG1heEJ1dHRvbnNJblJvdykpO1xyXG4gICAgICAgICAgICBpZiAocGFnZXMgPT0gMSkgbWF4QnV0dG9uc0luUm93ID0gb3B0aW1hbFJvd0J1dHRvbnM7XHJcbiAgICAgICAgICAgIHZhciBwYWdlV2lkdGggPSBNYXRoLm1pbihtYXhCdXR0b25zSW5Sb3csIHRvdGFsYikgKiAoYnRuVyArIGJocykgLSBiaHM7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIHNob3dXZWxjb21lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICghaW50ZXJuYWxzWydpc0Nvbm5lY3QnXSAmJiBsYXN0TG9naW5Qcm92aWRlciAmJiBsYXN0TG9naW5JbmRpY2F0aW9uID09ICd3ZWxjb21lJykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhclByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGFyUHJvdmlkZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhclByb3ZpZGVyc1tpXS5uYW1lID09IGxhc3RMb2dpblByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dXZWxjb21lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZXNjYXBlZElEID0gY29udGFpbmVySUQucmVwbGFjZSgvWy5dL2csICdcXFxcLicpO1xyXG4gICAgICAgICAgICBfcGkuY29tbW9uLmFkZENTUyhbJyMnLCBlc2NhcGVkSUQsICcgdGQsICMnLCBlc2NhcGVkSUQsICcgdGFibGUge3dpZHRoOmF1dG87Zm9udC1zaXplOjFweDt2ZXJ0aWNhbC1hbGlnbjp0b3A7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlO2JvcmRlcjpub25lOyBwYWRkaW5nOjBweDttYXJnaW46MHB4O30gIycsIGVzY2FwZWRJRCwgJyB7fScsICcgLnRhYmJpbmctYnV0dG9ue2ZvbnQtc2l6ZTogMHB4O2JvcmRlcjogbm9uZTtwYWRkaW5nOiAwO2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O2N1cnNvcjogcG9pbnRlcjt9J10pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm92aWRlcnMgPT0gJ3VuZGVmaW5lZCcpIHByb3ZpZGVycyA9IGNbJ2VuYWJsZWRQcm92aWRlcnMnXTtcclxuICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIHdpZHRoPVwiMTAwJVwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwiJyArIHRkU3R5bGUgKyBiZ1N0eWxlICsgJ3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHdpZHRoOiAnICsgdyArICdweDsgaGVpZ2h0OiAnICsgaCArICdweDtcIj48dHI+PHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlOycgKyB0ZFN0eWxlICsgJ1wiPjxjZW50ZXI+PHRhYmxlIHN0eWxlPVwiJyArIHRkU3R5bGUgKyAndmVydGljYWwtYWxpZ246bWlkZGxlOyBoZWlnaHQ6ICcgKyBoICsgJ3B4O3dpZHRoOjEwMCVcIiBhbGlnbj1cImNlbnRlclwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiPic7XHJcbiAgICAgICAgICAgIGlmICghc2hvd1dlbGNvbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRyPjx0ZCBjb2xzcGFuPVwiM1wiPjxkaXYgc3R5bGU9XCInICsgdGV4dFN0eWxlICsgJztwYWRkaW5nLWxlZnQ6NXB4XCI+JyArIGhlYWRlclRleHQgKyAnPC9kaXY+PC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHIgc3R5bGU9XCJoZWlnaHQ6OTklXCI+PHRkICBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9XCInICsgdGRTdHlsZSArICd2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7JyArICghYWxpZ25Ub0xlZnQgPyAnd2lkdGg6NDglOycgOiAnJykgKyAndGV4dC1hbGlnbjpyaWdodFwiPjxkaXYgYWxpZ249XCJyaWdodFwiIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDt3aWR0aDphdXRvXCI+JztcclxuICAgICAgICAgICAgICAgIGlmIChwYWdlcyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8ZGl2IGFsaWduPVwibGVmdFwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IGF1dG87d2lkdGg6JyArIChhcnJvd1cgKyBiaHMpICsgJ3B4OyB0ZXh0LWFsaWduOiBsZWZ0XCI+PGRpdiBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7d2lkdGg6ICcgKyAoYXJyb3dXKSArICdweDtcIj48aW1nIGFsdD1cIlwiIG9uY2xpY2s9XCInICsgZ3NMb2dpbiArICcucHJldlBhZ2UoXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJylcIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyO2Rpc3BsYXk6bm9uZTt3aWR0aDonICsgKGFycm93VykgKyAncHg7XCIgaWQ9XCInICsgY29udGFpbmVySUQgKyAnX2Fycm93X2xlZnRcIiBzcmM9XCInICsgc2Nyb2xsaW5nTGVmdFBhdGggKyAnXCIgLz48aW1nIHN0eWxlPVwiZGlzcGxheTpub25lO3dpZHRoOicgKyAoYXJyb3dXKSArICdweDtcIiBpZD1cIicgKyBjb250YWluZXJJRCArICdfYXJyb3dfbGVmdF9kaXNhYmxlXCIgc3JjPVwiJyArIHNjcm9sbGluZ0xlZnREaXNhYmxlUGF0aCArICdcIiAvPjwvZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L2Rpdj48L3RkPic7XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT1cIndpZHRoOicgKyBwYWdlV2lkdGggKyAncHg7JyArIHRkU3R5bGUgKyAndmVydGljYWwtYWxpZ246bWlkZGxlO3doaXRlLXNwYWNlOm5vd3JhcFwiIGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19wYWdlXCI+JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZD48L3RkPic7XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgYWxpZ249XCJsZWZ0XCIgc3R5bGU9XCInICsgdGRTdHlsZSArICd2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2hpdGUtc3BhY2U6bm93cmFwXCIgaWQ9XCInICsgY29udGFpbmVySUQgKyAnX3BhZ2VcIj4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHNob3dXZWxjb21lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlcm5hbWUgPSBnaWd5YS51dGlscy5zYW5pdGl6ZS5zYW5pdGl6ZUhUTUwodGhpcy5nZXRMYXN0TG9naW5OYW1lKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB3ZWxjb21lQnRuU2l6ZSA9IChwWydsYXN0TG9naW5CdXR0b25TaXplJ10gPyBwWydsYXN0TG9naW5CdXR0b25TaXplJ10gOiAzMCk7XHJcbiAgICAgICAgICAgICAgICB3ZWxjb21lQnRuU2l6ZSA9IHBhcnNlSW50KHdlbGNvbWVCdG5TaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgd2VsY29tZUltZ1NpemUgPSBNYXRoLmZsb29yKHdlbGNvbWVCdG5TaXplIC8gNSkgKiA1XHJcbiAgICAgICAgICAgICAgICBpZiAod2VsY29tZUltZ1NpemUgPCAyNSkgd2VsY29tZUltZ1NpemUgPSAyMDtcclxuICAgICAgICAgICAgICAgIGlmICh3ZWxjb21lSW1nU2l6ZSA+IDM1KSB3ZWxjb21lSW1nU2l6ZSA9IDQwO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBoaWRlTm90WW91ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5vdFlvdV90ZXh0ID0gdGhpcy5URVhUKGxhbmcsICdub3RfeW91JywgJyV1c2VyJywgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vdFlvdVdpZHRoID0gZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KG5vdFlvdV90ZXh0LCBvTGlua1N0eWxlKS53O1xyXG4gICAgICAgICAgICAgICAgdmFyIHdlbGNvbWVfYmFja191c2VybmFtZV90ZXh0ID0gdGhpcy5URVhUKGxhbmcsICd3ZWxjb21lX2JhY2tfdXNlcicsICcldXNlcicsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciB3ZWxjb21lQmFja1dpZHRoID0gZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KHdlbGNvbWVfYmFja191c2VybmFtZV90ZXh0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogJ2FyaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBib2xkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KS53O1xyXG4gICAgICAgICAgICAgICAgaWYgKHdlbGNvbWVCYWNrV2lkdGggKyAxNyArIG5vdFlvdVdpZHRoICsgKGludGVybmFsc1snaXNQb3B1cCddID8gMjUgOiAwKSA+IHcpIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlTm90WW91ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2VsY29tZUJhY2tXaWR0aCA+IHcpIHVzZXJuYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHdlbGNvbWVCYWNrSFRNTCA9ICc8c3BhbiBzdHlsZT1cIicgKyB0ZXh0U3R5bGUgKyAnO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6IzRDNEM0Q1wiPicgKyB0aGlzLlRFWFQobGFuZywgJ3dlbGNvbWVfYmFjaycpICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPSAndW5kZWZpbmVkJyAmJiB1c2VybmFtZSAhPSAnJyAmJiB1c2VybmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VsY29tZUJhY2tIVE1MID0gJzx0YWJsZSBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPjx0cj48dGQgc3R5bGU9XCInICsgdGV4dFN0eWxlICsgJztmb250LXNpemU6MTZweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiM0QzRDNEM7d2hpdGUtc3BhY2U6bm93cmFwXCI+JyArIHdlbGNvbWVfYmFja191c2VybmFtZV90ZXh0ICsgJzwvdGQ+JztcclxuICAgICAgICAgICAgICAgICAgICB3ZWxjb21lQmFja0hUTUwgKz0gJzx0ZCBzdHlsZT1cInBhZGRpbmctbGVmdDo1cHg7d2hpdGUtc3BhY2U6bm93cmFwXCIgb25jbGljaz1cIicgKyBnc0xvZ2luICsgJy5oaWRlV2VsY29tZShcXCcnICsgY29udGFpbmVySUQgKyAnXFwnKTtcIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGlkZU5vdFlvdSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWxjb21lQmFja0hUTUwgKz0gJzx0YWJsZSBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPjx0cj48dGQ+PGltZyBhbHQ9XCJcIiBzcmM9XCInICsgYmFzZSArICdOb3RZb3VfTGVmdC5wbmdcIiAvPjwvdGQ+PHRkIHN0eWxlPVwid2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgYmFzZSArICdOb3RZb3VfTWlkLnBuZ1xcJylcIj48ZGl2IHN0eWxlPVwiJyArIGxpbmtTdHlsZSArICdmb250LXNpemU6MTBweFwiPicgKyBub3RZb3VfdGV4dCArICc8L2Rpdj48L3RkPjx0ZD48aW1nIGFsdD1cIlwiIHNyYz1cIicgKyBiYXNlICsgJ05vdFlvdV9SaWdodC5wbmdcIiAvPjwvdGQ+PC90cj48L3RhYmxlPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdlbGNvbWVCYWNrSFRNTCArPSAnPC90ZD48L3RyPjwvdGFibGU+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGJ0blNyYyA9IGJhc2UgKyAnU2lnbkluV2l0aC8nICsgbGFzdExvZ2luUHJvdmlkZXIgKyAnXycgKyB3ZWxjb21lSW1nU2l6ZSArICcucG5nJztcclxuICAgICAgICAgICAgICAgIC8vdmFyIGJ0bk92ZXJTcmMgPSBiYXNlICsgJ1NpZ25JbldpdGgvJyArIGxhc3RMb2dpblByb3ZpZGVyICsgJ18nICsgd2VsY29tZUltZ1NpemUgKyAnX292ZXIucG5nJztcclxuICAgICAgICAgICAgICAgIGlmIChsYXN0TG9naW5Qcm92aWRlciA9PSAnY3VzdG9tb3BlbmlkJyB8fCBsYXN0TG9naW5Qcm92aWRlci5pbmRleE9mKFwic2FtbC1cIikgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwQ3VzdG9tUHJvdmlkZXIgPSBHUy5fZ2V0UHJvdmlkZXJCeUlEKDQxMjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0TG9naW5Qcm92aWRlci5pbmRleE9mKFwic2FtbC1cIikgPT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcEN1c3RvbVByb3ZpZGVyID0gR1MuX2dldFByb3ZpZGVyQnlJRCg0MTIyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBDdXN0b21Qcm92aWRlci5idXR0b25EYXRhICYmIHBDdXN0b21Qcm92aWRlci5idXR0b25EYXRhLmxhc3RMb2dpbkljb25VUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuU3JjID0gYnRuT3ZlclNyYyA9IHBDdXN0b21Qcm92aWRlci5idXR0b25EYXRhLmxhc3RMb2dpbkljb25VUkw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuU3JjID0gYmFzZSArICdTaWduSW5XaXRoL29wZW5pZF8nICsgd2VsY29tZUltZ1NpemUgKyAnLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYnRuT3ZlclNyYyA9IGJhc2UgKyAnU2lnbkluV2l0aC9vcGVuaWRfJyArIHdlbGNvbWVJbWdTaXplICsgJ19vdmVyLmdpZic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBTaWduSW5Vc2luZ0FEaWZmZXJlbnROZXR3b3JrX3RleHQgPSB0aGlzLlRFWFQobGFuZywgJ3NpZ25faW5fdXNpbmdfYV9kaWZmZXJlbnRfbmV0d29yaycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGV4dHJhU3R5bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbHNbJ2lzUG9wdXAnXSkgZXh0cmFTdHlsZSA9ICdwYWRkaW5nLWxlZnQ6MjVweDsnO1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ193ZWxjb21lXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgc3R5bGU9XCJ3aWR0aDoxMDAlOycgKyB0ZFN0eWxlICsgJzsnICsgZXh0cmFTdHlsZSArICdcIj4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgc3R5bGU9XCInICsgdGRTdHlsZSArICdwYWRkaW5nLWJvdHRvbToxM3B4O3ZlcnRpY2FsLWFsaWduOmJvdHRvbVwiPjxkaXY+JyArIHdlbGNvbWVCYWNrSFRNTCArICc8L2Rpdj48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgaGVpZ2h0PVwiJyArIHdlbGNvbWVCdG5TaXplICsgJ1wiIHN0eWxlPVwiJyArIHRkU3R5bGUgKyAncGFkZGluZy1ib3R0b206MTVweDtcIj48c3BhbiBzdHlsZT1cImN1cnNvcjpwb2ludGVyXCIgb25jbGljaz1cIicgKyBnc0xvZ2luICsgJy5wcm92aWRlckNsaWNrKFxcJycgKyBjb250YWluZXJJRCArICdcXCcsXFwnJyArIGxhc3RMb2dpblByb3ZpZGVyICsgJ1xcJylcIj48aW1nIGdpZ2lkPVwiJyArIHByb3ZpZGVyICsgJ1wiIGFsdD1cIlwiIGhlaWdodD1cIicgKyB3ZWxjb21lQnRuU2l6ZSArICdcIiBzcmM9XCInICsgYnRuU3JjICsgJ1wiICAvPjwvc3Bhbj48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgc3R5bGU9XCInICsgdGRTdHlsZSArICc7dmVydGljYWwtYWxpZ246dG9wXCI+PHNwYW4gc3R5bGU9XCInICsgbGlua1N0eWxlICsgJ1wiIG9uY2xpY2s9XCInICsgZ3NMb2dpbiArICcuaGlkZVdlbGNvbWUoXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJyk7XCI+JyArIFNpZ25JblVzaW5nQURpZmZlcmVudE5ldHdvcmtfdGV4dCArICc8L3NwYW4+PC9kaXY+PC90ZD48L3RyPidcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvdGFibGU+JztcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpUGFnZSA9IDA7IGlQYWdlIDwgcGFnZXM7IGlQYWdlKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGFibGUgYWxpZ249XCJjZW50ZXJcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cIicgKyB0ZFN0eWxlICsgJ2Rpc3BsYXk6bm9uZVwiIGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19wJyArIGlQYWdlICsgJ1wiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaUNvbCA9IDA7IGlDb2wgPCBtYXhCdXR0b25zSW5Db2w7IGlDb2wrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxpZ24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWdlcyA9PSAxICYmIGlQcm92aWRlciArIG1heEJ1dHRvbnNJblJvdyA+IGFyUHJvdmlkZXJzLmxlbmd0aCkgYWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRyPjx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPVwiJyArIHRkU3R5bGUgKyAndmVydGljYWwtYWxpZ246bWlkZGxlXCI+PHRhYmxlIGFsaWduPVwiJyArIGFsaWduICsgJ1wiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwiJyArIHRkU3R5bGUgKyAnXCI+PHRyPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGlSb3cgPSAwOyBpUm93IDwgbWF4QnV0dG9uc0luUm93OyBpUm93KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGFyUHJvdmlkZXJzW2lQcm92aWRlcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ1J1bGVzID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaVByb3ZpZGVyICsgMSA8IGFyUHJvdmlkZXJzLmxlbmd0aCB8fCAocGFnZXMgPiAxICYmIGlSb3cgKyAxIDwgbWF4QnV0dG9uc0luUm93KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpUm93IDwgbWF4QnV0dG9uc0luUm93IC0gMSkgcGFkZGluZ1J1bGVzICs9ICdwYWRkaW5nLXJpZ2h0OicgKyBiaHMgKyAncHg7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaUNvbCA8IG1heEJ1dHRvbnNJbkNvbCAtIDEpIHBhZGRpbmdSdWxlcyArPSAncGFkZGluZy1ib3R0b206JyArIGJ2cyArICdweDsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWdJZCA9IChwcm92aWRlci5pbWdOYW1lID8gcHJvdmlkZXIuaW1nTmFtZSA6IHByb3ZpZGVyLm5hbWUpICsgJy0nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbHMuaXNDb25uZWN0ICYmIHByb3ZpZGVyLmNvbnRleHQgJiYgKHByb3ZpZGVyLmNvbnRleHQuY29ubmVjdGVkICYmIHByb3ZpZGVyLmNvbnRleHQucmVxdWlyZWRQZXJtaXNzaW9ucyA9PSAnJykgJiYgIW9TdHlsZS5ub0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdJZCArPSAnY29ubmVjdGVkXyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RMb2dpbkluZGljYXRpb24gPT0gJ2JvcmRlcicgJiYgcHJvdmlkZXIubmFtZSA9PSBsYXN0TG9naW5Qcm92aWRlciAmJiAhb1N0eWxlLm5vTGFzdExvZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ0lkICs9ICdsYXN0bG9naW5fJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyp2YXIgaW1nU3JjPXN0eWxlQmFzZStwcm92aWRlci5uYW1lKydfJytpbWdJY29uU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludGVybmFscy5pc0Nvbm5lY3QgJiYgcHJvdmlkZXIuY29udGV4dCAmJiAocHJvdmlkZXIuY29udGV4dC5jb25uZWN0ZWQgJiYgcHJvdmlkZXIuY29udGV4dC5yZXF1aXJlZFBlcm1pc3Npb25zPT0nJykgJiYgIW9TdHlsZS5ub0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdTcmMgKz0gJ19Db25uZWN0ZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RMb2dpbkluZGljYXRpb249PSdib3JkZXInICYmIHByb3ZpZGVyLm5hbWU9PWxhc3RMb2dpblByb3ZpZGVyICYmICFvU3R5bGUubm9MYXN0TG9naW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nU3JjKz0nX0xhc3RMb2dpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nU3JjKz1vU3R5bGUuZXh0OyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gcHJvdmlkZXIuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHBbJ3Nob3dUb29sdGlwcyddKSkgdGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBkb250VXNlU3ByaXRlcz0ob1N0eWxlLmRvbnRVc2VTcHJpdGVzIHx8IGltZ0ljb25TaXplIT1pY29uU2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nSFRNTCA9IHNwcml0ZVJlbmRlcmVyLmxvZ2luSWNvbnMuZ2V0SFRNTChpbWdJZCwgZmFsc2UsIG9TdHlsZS5kb250VXNlU3ByaXRlcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb0J1dHRvbiA9IHByb3ZpZGVyLmJ1dHRvbkRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwcm92aWRlci5JRCA9PSA0MTIxIHx8IHByb3ZpZGVyLklEID09IDQxMjIpICYmIG9CdXR0b24gJiYgb0J1dHRvbi5pY29uVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpY29uVVJMID0gb0J1dHRvbi5pY29uVVJMO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxzLmlzQ29ubmVjdCAmJiBwcm92aWRlci5jb250ZXh0ICYmIChwcm92aWRlci5jb250ZXh0LmNvbm5lY3RlZCAmJiBwcm92aWRlci5jb250ZXh0LnJlcXVpcmVkUGVybWlzc2lvbnMgPT0gJycpICYmICFvU3R5bGUubm9Db25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25VUkwgPSBvQnV0dG9uLmNvbm5lY3RlZEljb25VUkwgPyBvQnV0dG9uLmNvbm5lY3RlZEljb25VUkwgOiBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9IVE1MTG9naW4vJyArIHN0eWxlQmFzZSArICdvcGVuaWRfJyArIGltZ0ljb25TaXplICsgKGRpc2FibGVkID8gJ19jb25uZWN0ZWQnIDogJycpICsgJy5wbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm92aWRlci5uYW1lID09IGxhc3RMb2dpblByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uVVJMID0gb0J1dHRvbi5sYXN0TG9naW5JY29uVVJMO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpY29uVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdIVE1MID0gJzxkaXYgc3R5bGU9XCJ3aWR0aDonICsgYnRuSW1nVyArICdweDtoZWlnaHQ6JyArIGJ0bkltZ0ggKyAncHg7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGljb25VUkwgKyAnXFwnKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XCI+JiMxNjA7PC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgc3R5bGU9XCInICsgdGRTdHlsZSArIHNuQnV0dG9uc1N0eWxlICsgcGFkZGluZ1J1bGVzICsgJ3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcFwiPjxjZW50ZXI+PGRpdiB0aXRsZT1cIicgKyB0aXRsZSArICdcIiBzdHlsZT1cIndpZHRoOicgKyBidG5XICsgJ3B4O1wiPjxkaXYgZ2lnaWQ9XCInICsgcHJvdmlkZXIgKyAnXCIgc3R5bGU9XCJ3aWR0aDonICsgYnRuSW1nVyArICdweDsgaGVpZ2h0OicgKyBidG5JbWdIICsgJ3B4XCI+JyArIGltZ0hUTUwgKyAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgc3R5bGU9XCInICsgdGRTdHlsZSArIHNuQnV0dG9uc1N0eWxlICsgcGFkZGluZ1J1bGVzICsgJ3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcFwiPjxjZW50ZXI+PGRpdiAgb25jbGljaz1cIicgKyBnc0xvZ2luICsgJy5wcm92aWRlckNsaWNrKFxcJycgKyBjb250YWluZXJJRCArICdcXCcsXFwnJyArIHByb3ZpZGVyLm5hbWUgKyAnXFwnKVwiIHRpdGxlPVwiJyArIHRpdGxlICsgJ1wiIGFsdD1cIicgKyB0aXRsZSArICdcIiBzdHlsZT1cInpvb206MTtjdXJzb3I6cG9pbnRlcjsgd2lkdGg6JyArIGJ0blcgKyAncHg7XCI+PGRpdiBnaWdpZD1cIicgKyBwcm92aWRlciArICdcIiBzdHlsZT1cIndpZHRoOicgKyBidG5JbWdXICsgJ3B4OyBoZWlnaHQ6JyArIGJ0bkltZ0ggKyAncHhcIj4nICsgaW1nSFRNTCArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRVbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8ZGl2IHN0eWxlPVwibWFyZ2luOjBweDtwYWRkaW5nLXRvcDoycHg7JyArIHNuQnV0dG9uc1N0eWxlICsgJ1wiPicgKyBwcm92aWRlci5kaXNwbGF5TmFtZSArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L2Rpdj48L2NlbnRlcj48L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVByb3ZpZGVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhZ2VzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZCBzdHlsZT1cIicgKyB0ZFN0eWxlICsgc25CdXR0b25zU3R5bGUgKyBwYWRkaW5nUnVsZXMgKyAndmVydGljYWwtYWxpZ246dG9wO1wiPjxkaXYgc3R5bGU9XCJ3aWR0aDonICsgYnRuVyArICdweDtoZWlnaHQ6JyArIGJ0bkggKyAncHhcIj4mIzE2MDs8L2Rpdj48L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90cj48L3RhYmxlPjwvdGQ+PC90cj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90YWJsZT4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvdGQ+JztcclxuICAgICAgICAgICAgaWYgKCFzaG93V2VsY29tZSkge1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRkIGFsaWduPVwibGVmdFwiIHN0eWxlPVwiJyArIHRkU3R5bGUgKyAndmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjQ4JVwiPic7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFnZXMgPiAxICYmICFzaG93V2VsY29tZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzxkaXYgc3R5bGU9XCInICsgdGRTdHlsZSArICd0ZXh0LWFsaWduOnJpZ2h0OyB3aWR0aDonICsgKGFycm93VyArIGJocykgKyAncHg7XCI+PGltZyBhbHQ9XCJcIiBvbmNsaWNrPVwiJyArIGdzTG9naW4gKyAnLm5leHRQYWdlKFxcJycgKyBjb250YWluZXJJRCArICdcXCcpXCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtkaXNwbGF5Om5vbmU7d2lkdGg6JyArIChhcnJvd1cpICsgJ3B4O1wiIGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19hcnJvd19yaWdodFwiIHNyYz1cIicgKyBzY3JvbGxpbmdSaWdodFBhdGggKyAnXCIgLz48aW1nIGFsdD1cIlwiIHN0eWxlPVwiZGlzcGxheTpub25lO3dpZHRoOicgKyAoYXJyb3dXKSArICdweDtcIiBpZD1cIicgKyBjb250YWluZXJJRCArICdfYXJyb3dfcmlnaHRfZGlzYWJsZVwiIHNyYz1cIicgKyBzY3JvbGxpbmdSaWdodERpc2FibGVQYXRoICsgJ1wiIC8+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvdGQ+JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZD48L3RkPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90cj4nO1xyXG5cclxuICAgICAgICAgICAgdmFyIGxlZnRCb3R0b21MaW5rSFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoc2hvd1Rlcm1zKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0Qm90dG9tTGlua0hUTUwgPSAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly93d3cuZ2lneWEuY29tL3Rlcm1zLW9mLXNlcnZpY2UvXCIgc3R5bGU9XCInICsgbGlua1N0eWxlICsgJztwYWRkaW5nLXJpZ2h0OjVweDt0ZXh0LWRlY29yYXRpb246bm9uZTtmb250LXNpemU6MTFweFwiPicgKyB0aGlzLlRFWFQobGFuZywgJ3Rlcm1zJykgKyAnPC9hPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3dFZGl0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1Rlcm1zKSBsZWZ0Qm90dG9tTGlua0hUTUwgKz0gJzxzcGFuIHN0eWxlPVwiJyArIGxpbmtTdHlsZSArICc7Y3Vyc29yOmRlZmF1bHQ7XCI+fDwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgbGVmdEJvdHRvbUxpbmtIVE1MICs9ICc8c3BhbiBzdHlsZT1cIicgKyBsaW5rU3R5bGUgKyAnO3BhZGRpbmctcmlnaHQ6NXB4O3BhZGRpbmctbGVmdDo1cHg7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC1zaXplOjExcHhcIiBvbmNsaWNrPVwiJyArIGdzTG9naW4gKyAnLnNob3dFZGl0KFxcJycgKyBjb250YWluZXJJRCArICdcXCcpXCI+JyArIHRoaXMuVEVYVChsYW5nLCAnZWRpdCcpICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByaWdodEJvdHRvbUxpbmtIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChzaG93R2lneWFCcmFuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmlnaHRCb3R0b21MaW5rSFRNTCArPSAnPHNwYW4gb25jbGljaz1cIndpbmRvdy5vcGVuKFxcJ2h0dHA6Ly93d3cuZ2lneWEuY29tXFwnKVwiIHN0eWxlPVwiY29sb3I6IzAwNTk5Nztmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTFweDtjdXJzb3I6cG9pbnRlclwiIG9uTW91c2VPdXQ9XCInICsgZ3NMb2dpbiArICcuaGlkZVdoYXRzVGhpcyhcXCcnICsgY29udGFpbmVySUQgKyAnXFwnKVwiIG9uTW91c2VPdmVyPVwiJyArIGdzTG9naW4gKyAnLnNob3dXaGF0c1RoaXMoXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJylcIj48c3BhbiBzdHlsZT1cImNvbG9yOiM4MjgyODI7Zm9udC13ZWlnaHQ6Ym9sZDsgZm9udC1zaXplOjExcHg7Y3Vyc29yOnBvaW50ZXJcIj5Tb2NpYWwgYnkgPC9zcGFuPkdpZ3lhPC9zcGFuPic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvd1doYXRzVGhpcyAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImlwaG9uZVwiKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHRCb3R0b21MaW5rSFRNTCArPSAnPHNwYW4gc3R5bGU9XCInICsgbGlua1N0eWxlICsgJzt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1wiIG9uTW91c2VPdXQ9XCInICsgZ3NMb2dpbiArICcuaGlkZVdoYXRzVGhpcyhcXCcnICsgY29udGFpbmVySUQgKyAnXFwnKVwiIG9uTW91c2VPdmVyPVwiJyArIGdzTG9naW4gKyAnLnNob3dXaGF0c1RoaXMoXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJylcIj4nICsgdGhpcy5URVhUKGxhbmcsICd3aGF0c190aGlzJykgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgbGlua3NXaWR0aCA9IGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dChsZWZ0Qm90dG9tTGlua0hUTUwpLncgKyBnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQubWVhc3VyZVRleHQocmlnaHRCb3R0b21MaW5rSFRNTCkudztcclxuICAgICAgICAgICAgaWYgKGxpbmtzV2lkdGggPiB3KSB7XHJcbiAgICAgICAgICAgICAgICByaWdodEJvdHRvbUxpbmtIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsaW5rc1dpZHRoID0gZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KGxlZnRCb3R0b21MaW5rSFRNTCkudztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKHNob3dFZGl0IHx8IHNob3dUZXJtcyB8fCBzaG93R2lneWFCcmFuZGluZyB8fCBzaG93V2hhdHNUaGlzKSAmJiBsaW5rc1dpZHRoIDwgdyAmJiBvTGlua1N0eWxlLmNvbG9yLnRvTG93ZXJDYXNlKCkgIT0gJ3RyYW5zcGFyZW50Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnRlcm5hbHMuaXNQb3B1cCAmJiBsaW5rc1dpZHRoICsgMTAgPCBwYWdlV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHIgaGVpZ2h0PVwiJyArIGxpbmtIZWlnaHQgKyAnXCI+PHRkPjwvdGQ+PHRkIGFsaWduPVwicmlnaHRcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOmJvdHRvbVwiPjxkaXYgaWQ9XCInICsgY29udGFpbmVySUQgKyAnX2JvdHRvbUxpbmtcIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0YWJsZSBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cIicgKyB0ZFN0eWxlICsgJ3dpZHRoOjEwMCVcIj48dHI+PHRkIGFsaWduPVwibGVmdFwiPicgKyBsZWZ0Qm90dG9tTGlua0hUTUwgKyAnPC90ZD48dGQgc3R5bGU9XCJ3aGl0ZS1zcGFjZTpub3dyYXBcIiBhbGlnbj1cInJpZ2h0XCI+JyArIHJpZ2h0Qm90dG9tTGlua0hUTUwgKyAnPC90ZD48L3RyPjwvdGFibGU+JztcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L2Rpdj48L3RkPjx0ZD48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRyIGhlaWdodD1cIicgKyBsaW5rSGVpZ2h0ICsgJ1wiPjx0ZCBjb2xzcGFuPVwiM1wiIGFsaWduPVwicmlnaHRcIiBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7dmVydGljYWwtYWxpZ246Ym90dG9tXCI+PGNlbnRlcj48ZGl2IGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19ib3R0b21MaW5rXCIgc3R5bGU9XCJtYXJnaW46MHB4O3BhZGRpbmctdG9wOjBweDtwYWRkaW5nLWJvdHRvbToycHg7d2lkdGg6MTAwJVwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIHN0eWxlPVwid2lkdGg6MTAwJTtcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj48dHI+JztcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgc3R5bGU9XCJ3aWR0aDo1cHg7XCI+PC90ZD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0Qm90dG9tTGlua0hUTUwgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRkIGFsaWduPVwibGVmdFwiPicgKyBsZWZ0Qm90dG9tTGlua0hUTUwgKyAnPC90ZD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHRCb3R0b21MaW5rSFRNTCAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgYWxpZ249XCJyaWdodFwiIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDt3aGl0ZS1zcGFjZTpub3dyYXBcIj4nICsgcmlnaHRCb3R0b21MaW5rSFRNTCArICc8L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZCBzdHlsZT1cIndpZHRoOjVweDtcIj48L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90cj48L3RhYmxlPic7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC9kaXY+PC9jZW50ZXI+PC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90YWJsZT48L2NlbnRlcj48L3RkPjwvdHI+PC90YWJsZT4nO1xyXG4gICAgICAgICAgICBpZiAoc2hvd0hpbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aGF0c1RoaXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJRCArICdfd2hhdHNUaGlzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdoYXRzVGhpc0Rpdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoYXRzVGhpc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoYXRzVGhpc0Rpdi5pZCA9IGNvbnRhaW5lcklEICsgJ193aGF0c1RoaXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoYXRzVGhpc0Rpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hhdHNUaGlzRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdoYXRzVGhpc0Rpdik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aGF0c1RoaXNEaXYuc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIHZhciB3aGF0c1RoaXNUZXh0ID0gcFsnd2hhdHNUaGlzVGV4dCddO1xyXG4gICAgICAgICAgICAgICAgLy9pZiAoIXdoYXRzVGhpc1RleHQpIHdoYXRzVGhpc1RleHQgPSAnWW91IGNhbiB1c2UgeW91ciBhY2NvdW50IGZyb20gb25lIG9mIHRoZXNlIHNlcnZpY2VzIHRvIHNpZ24gaW50byB0aGUgc2l0ZSc7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdoYXRzVGhpc1RleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxzLmlzQ29ubmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGF0c1RoaXNUZXh0ID0gdGhpcy5URVhUKGxhbmcsICdhZGRfbW9yZV9jb25uZWN0aW9uc190b195b3VyX2FjY291bnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGF0c1RoaXNUZXh0ID0gdGhpcy5URVhUKGxhbmcsICd5b3VfY2FuX3VzZV95b3VyX2FjY291bnRfZnJvbV9vbmVfb2ZfdGhlc2Vfc2VydmljZXNfdG9fc2lnbl9pbnRvX3RoZV9zaXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2hhdHNUaGlzRGl2LmlubmVySFRNTCA9ICc8dGFibGUgc3R5bGU9XCJwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtib3JkZXI6IDFweCBzb2xpZCAjNzY3Njc2O3dpZHRoOicgKyBoaW50VyArICdweDtoZWlnaHQ6JyArIGhpbnRIICsgJ3B4XCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCI+PHRyPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZTsgdGV4dC1hbGlnbjpjZW50ZXJcIj48c3BhbiBhbGlnbj1cImxlZnRcIiBzdHlsZT1cIicgKyB0ZXh0U3R5bGUgKyAnO3dpZHRoOiAnICsgKGhpbnRXIC0gOCkgKyAncHg7IGNvbG9yOiMyNjI2MjY7IFwiPicgKyB3aGF0c1RoaXNUZXh0ICsgJzwvc3Bhbj48L3RkPjwvdHI+PC90YWJsZT4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySUQpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYXJIVE1MLmpvaW4oJycpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnJyArIHcgKyAncHgnO1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJycgKyBoICsgJ3B4JztcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbY29udGFpbmVySURdLnBhZ2VzID0gcGFnZXM7XHJcbiAgICAgICAgICAgIGlmICghc2hvd1dlbGNvbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZShjb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIF9waS5sb2dpbi5uZXh0UGFnZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbaWRdLnBhZ2UrKztcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdlKGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIF9waS5sb2dpbi5wcmV2UGFnZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbaWRdLnBhZ2UtLTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdlKGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIF9waS5sb2dpbi5zaG93RWRpdCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHRoaXMubW9kdWxlc1tpZF0ucCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMud2lkdGg7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLmNvbnRhaW5lcklEO1xyXG4gICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuc2hvd0VkaXRDb25uZWN0aW9uc1VJKHBhcmFtcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfcGkubG9naW4uc2hvd1doYXRzVGhpcyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2R1bGVzW2lkXS5pLnNob3dIaW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICdfd2hhdHNUaGlzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBnaWd5YS5nbG9iYWwuX0dldEVsZW1lbnRQb3MoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQgKyAocGFyc2VJbnQoY29udGFpbmVyLnN0eWxlLndpZHRoKSAtIGVsLm9mZnNldFdpZHRoKSAvIDIgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnRvcCA9IHBvcy50b3AgKyAocGFyc2VJbnQoY29udGFpbmVyLnN0eWxlLmhlaWdodCkgLSBlbC5vZmZzZXRIZWlnaHQpIC8gMiArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3BpLmxvZ2luLmhpZGVXaGF0c1RoaXMgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnX3doYXRzVGhpcycpO1xyXG4gICAgICAgICAgICBpZiAoZWwpIHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3BpLmxvZ2luLmhpZGVXZWxjb21lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5yZW1vdmUoJ19naWdfbGxwJyk7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5yZW1vdmUoJ19naWdfbGx1Jyk7XHJcbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW2lkXTtcclxuICAgICAgICAgICAgZ2lneWEudGhpc1NjcmlwdC5nbG9iYWxDb25mLmFsd2F5c0ZvcmNlQXV0aGVudGljYXRpb24gPSB0cnVlOyAvL2ZlYXR1cmUgIzc2NDNcclxuICAgICAgICAgICAgdGhpcy5zaG93TG9naW5VSV92MShtLm9yaWdpbmFsQywgbS5vcmlnaW5hbFAsIG0uaSwgdHJ1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfcGkubG9naW4udXBkYXRlUGFnZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICB2YXIgbSA9IHRoaXMubW9kdWxlc1tpZF1cclxuICAgICAgICAgICAgaWYgKG0ucGFnZURpdikgbS5wYWdlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIG0ucGFnZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgJ19wJyArIG0ucGFnZSk7XHJcbiAgICAgICAgICAgIGlmIChtLnBhZ2VEaXYpIG0ucGFnZURpdi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChtLnBhZ2VzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICdfYXJyb3dfcmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIHZhciByZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgJ19hcnJvd19yaWdodF9kaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgJ19hcnJvd19sZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICdfYXJyb3dfbGVmdF9kaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobS5wYWdlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG0ucGFnZSA9PSBtLnBhZ2VzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICByZC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBfcGkubG9naW4uZ2V0TGFzdExvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMuY29va2llLmdldCgnX2dpZ19sbHAnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIF9waS5sb2dpbi5nZXRMYXN0TG9naW5OYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMuY29va2llLmdldCgnX2dpZ19sbHUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIF9waS5sb2dpbi5wcm92aWRlckNsaWNrID0gZnVuY3Rpb24gKGlkLCBwcm92aWRlcikge1xyXG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMubW9kdWxlc1tpZF07XHJcbiAgICAgICAgICAgIHZhciBwcm92aWRlck9iaiA9IGdpZ3lhLnNvY2lhbGl6ZS5fZ2V0UHJvdmlkZXJCeU5hbWUocHJvdmlkZXIsIG8uYXJQcm92aWRlcnMpO1xyXG4gICAgICAgICAgICBpZiAoIXByb3ZpZGVyT2JqKSBwcm92aWRlck9iaiA9IGdpZ3lhLnNvY2lhbGl6ZS5fZ2V0UHJvdmlkZXJCeU5hbWUocHJvdmlkZXIpO1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yQ29kZSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXMucmVxdWVzdFBhcmFtcy5nZXRJbmZvUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXMucmVxdWVzdFBhcmFtcy5jb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzLmNvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKG8ucCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5pLmlzUG9wdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5fY2xvc2VDb21wb25lbnQoby5pLnJpZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IG8uaS5pc0Nvbm5lY3QgPyAnY29ubmVjdGlvbkFkZGVkJyA6ICdsb2dpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvRXZlbnQgPSBnaWd5YS5fLmFkZFVzZXJJbmZvVG9FdmVudChyZXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KG9FdmVudCwgby5wKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vV2lsbCBhbHdheXMgZ2V0IEFMTCBvZiB0aGUgcGVybWlzc2lvbnNcclxuICAgICAgICAgICAgLy9pZiAocHJvdmlkZXJPYmouY29udGV4dCAmJiAhcHJvdmlkZXJPYmouY29udGV4dC5jb25uZWN0ZWQgJiYgcHJvdmlkZXJPYmouY29udGV4dC5yZXF1aXJlZFBlcm1pc3Npb25zKSBvLnBbcHJvdmlkZXIrJ0V4dHJhUGVybWlzc2lvbnMnXT1wcm92aWRlck9iai5jb250ZXh0LnJlcXVpcmVkUGVybWlzc2lvbnM7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm92aWRlck9iai5JRCA9PSA0MTIxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb0J1dHRvbiA9IHByb3ZpZGVyT2JqLmJ1dHRvbkRhdGE7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbJ29wZW5JRFByb3ZpZGVyTmFtZSddID0gb0J1dHRvbi5wcm92aWRlck5hbWU7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbJ29wZW5JRFByb3ZpZGVyTG9nbyddID0gb0J1dHRvbi5sb2dvVVJMO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zWydvcGVuSURVUkwnXSA9IG9CdXR0b24ub3BlbklEVVJMO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvdmlkZXJPYmouSUQgIT0gNDEyMSB8fCBwcm92aWRlck9iai5idXR0b25EYXRhLnR5cGUgPT0gJ29wZW5JRCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvLmkuaXNDb25uZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyT2JqLmNvbnRleHQgJiYgcHJvdmlkZXJPYmouY29udGV4dC5jb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoe2V2ZW50TmFtZTogJ3Blcm1pc3Npb25zJywgcHJvdmlkZXI6IHByb3ZpZGVyfSwgby5wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMucmVkcmF3KGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUucmVxdWVzdFBlcm1pc3Npb25zKG8uYywgby5wLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5jb25uZWN0KG8uYywgby5wLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoby5wLmFjY291bnRzU29jaWFsTG9naW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5hY2NvdW50cy5zb2NpYWxMb2dpbihvLmMsIG8ucCwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLmxvZ2luKG8uYywgby5wLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBldnQgPSB7ZXZlbnROYW1lOiAnYnV0dG9uQ2xpY2tlZCd9O1xyXG4gICAgICAgICAgICBpZiAocHJvdmlkZXJPYmouYnV0dG9uRGF0YSkgZXZ0LmJ1dHRvbiA9IHByb3ZpZGVyT2JqLmJ1dHRvbkRhdGE7XHJcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChldnQsIG8ucCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==