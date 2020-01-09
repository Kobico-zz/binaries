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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.socialize.plugins.editConnections_v1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.socialize.plugins.editConnections_v1.js":
/*!***********************************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.editConnections_v1.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="gigya.services.socialize.plugins.js" />
(function () {
    if (typeof window.gigya.services.socialize.plugins == 'undefined') window.gigya.services.socialize.plugins = {};
    var _pi = window.gigya.services.socialize.plugins;

    if (typeof _pi.common == 'undefined') {
        _pi.common = {
            addCSS: function (css) {
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
            }
        }
    }

    if (typeof _pi.edit == 'undefined') {
        _pi.edit = {
            modules: {},

            showEditConnectionsUI: function (c, p, i, isEvent) {
                var GS = window.gigya.services.socialize;
                var This = this;

                var p2 = {}; for (var attr in p) { p2[attr] = p[attr]; }
                p2.requiredCapabilities = '';
                p2.includeAllIdentities = true;
                p2.enabledProviders = '*' + (p2.enabledProviders ? ',' + p2.enabledProviders : '');
                p2.disabledProviders = '';
                p2.callback = function (res) {
                    if (document.getElementById(p['containerID'])) This._showEditConnectionsUIWithAvailableProviders(res.context.c, res.context.p, res.context.i, res, isEvent);
                };
                p2.context = { This: this, c: c, p: p, i: i };
                GS.getUserInfo(c, p2);

                var escapedID = p['containerID'].replace(/[.]/g, '\\.');
                _pi.common.addCSS([
                    '#', escapedID, ' a { display:none; } ',
                    '#', escapedID, ' table.gig-edit-providerRow:hover a { display:inline; } ',
                    '#', escapedID, ' td, #', escapedID, ' table {width:auto;font-size:1px;vertical-align:top;border-collapse:separate;border:none; padding:0px;margin:0px;} ',
                    '#', escapedID, ' {}'
                ]);
            },
            _normalizeCapabilities: function (capabilitiesList) {
                if (typeof capabilitiesList != 'string') return '';
                return capabilitiesList.toLowerCase().replace(/[ ]/g, '').replace(/,,/g, ',');
            },
            _capabilitiesSupported: function (requiredCapabilities, supportedCapabilities) {
                var arReq = this._normalizeCapabilities(requiredCapabilities).split(',');
                var sup = ',' + this._normalizeCapabilities(supportedCapabilities) + ',';
                for (var i = 0; i < arReq.length; i++) {
                    if (sup.indexOf(',' + arReq[i] + ',') == -1) {
                        return false;
                    } else {
                    }
                }
                return true;

            },
            _showEditConnectionsUIWithAvailableProviders: function (c, p, internals, userInfo, isEvent) {
                var GS = window.gigya.services.socialize;
                var rid = internals['rid'];
                var This = this;


                var resolver = new window.gigya.global.resolver(window.gigya.global.resolver.defaultProccessor);
                resolver.addConfig('<config><body font="arial" frame-color=""><captions bold="true" size="13" color="#ffffff" background-color="#4692DE" frame-thickness="0" /><controls><snbuttons type="" buttonsize="30" /><listboxes frame-color="#989898" background-color="#ffffff"></listboxes></controls><background background-color="transparent" /><texts size="11px" frame-thickness="0"><links color="#0086f1" /></texts></body></config>');
                if (internals['isPopup']) {
                    resolver.addConfig('<config><body><background frame-thickness="5" frame-color="#999999" background-color="#F6F6F6" /><controls><snbuttons type="textUnder" buttonsize="35" /></controls></body></config>');
                }

                resolver.addConfig(c['UIConfig']);
                resolver.addConfig(p['UIConfig']);

                this.pit.p = p;
                this.pit.c = c;

                if (internals['isPopup']) {
                    var captionText;
                    if (p['captionText']) {
                        captionText = p['captionText'];
                    } else {
                        captionText = this.pit.TEXT('EditConnections');
                    }
                    var oPopup = window.gigya.services.socialize._createJSPopup(rid, resolver, captionText);
                    c = oPopup.c;
                    p = oPopup.p;
                }

                var containerID = p['containerID'];

                if (this.modules[containerID] == null) {
                    var fnUserChanged = function (e) {
                        if (document.getElementById(p['containerID'])) This._showEditConnectionsUIWithAvailableProviders(c, p, internals, e, true);
                    }
                    window.gigya.services.socialize.addEventHandlers({ listenerType: 'component' }, {
                        onLogin: fnUserChanged,
                        onLogout: function () { This.redraw(containerID) },
                        onConnect: fnUserChanged,
                        onDisconnect: fnUserChanged
                    });
                }





                this.modules[containerID] = { c: c, p: p, i: internals };
                if (userInfo.errorCode != 0 && !userInfo.user) {
                    window.gigya.events.dispatchErrorFromResponse(p, userInfo);
                }

                //var buttonsStyle=p['buttonsStyle'];
                //if (typeof buttonsStyle=='undefined') buttonsStyle='';
                //var oStyle=this.getStyle(buttonsStyle);

                this.pit.imageBaseURL = window.gigya._.getCdnResource('/gs/i/edit/');
                this.pit.cssTextStyle = GS.getStyleString(resolver.Resolve('+/config/body/texts'));
                this.pit.cssLinkStyle = GS.getStyleString(resolver.Resolve('+/config/body/texts/links'));

                this.pit.internals = internals;

                //var styleBase = base;
                //if (oStyle.base) styleBase+=oStyle.base;

                //this.modules[containerID]={c:c,p:p,i:i,page:0};
                var arHTML = [];
                var a = 0;

                var oBgStyle = resolver.Resolve('+/config/body/background');
                if (internals['isPopup']) {
                    oBgStyle['frame-thickness'] = 0;
                }
                var bgStyle = GS.getStyleString(oBgStyle);

                var oListboxBgStyle = resolver.Resolve('+/config/body/controls/listboxes');
                var listboxBgStyle = GS.getStyleString(oListboxBgStyle);

                var requiredCapabilities = '';
                if (p.requiredCapabilities != null) requiredCapabilities = p.requiredCapabilities;


                // BUILD THE HTML FOR THE NETWORKS IN THE DIFFERENT STATI


                var htmlLoggedin = [], htmlConnected = [], htmlConnectedNotAvaliable = [], htmlNotConnected = []

                /*
				1. loginProvider
				2. connected networks (with includeAllIdentities=true, ignore requiredCapablities)
				3. disconnected networks (use  requiredCapablities)
				*/

                var enabledProviders = p['enabledProviders'];
                if (!enabledProviders) enabledProviders = c['enabledProviders'];
                if (!enabledProviders) enabledProviders = '*';
                var disabledProviders = p['disabledProviders'];
                if (!disabledProviders) disabledProviders = c['disabledProviders'];
                if (!disabledProviders) disabledProviders = '';
                var arProviders = GS.getProvidersByName(enabledProviders);
                arProviders = GS.hideProvidersByName(arProviders, disabledProviders);
                if (userInfo.user) {
                    for (var identityName in userInfo.user.identities) {
                        var identity = userInfo.user.identities[identityName];
                        var oProvider = window.gigya.services.socialize._getProviderByName(identity.provider);
                        if (!oProvider) continue;
                        if (oProvider.ID == 6002) continue;  //do not display site identity
                        if (identity.isLoginIdentity) {
                            htmlLoggedin.push(this.getConnetedNetworkHTML(oProvider, identity, containerID));
                        } else {
                            htmlConnected.push(this.getConnetedNetworkHTML(oProvider, identity, containerID));
                        }
                    }
                    arProviders = GS.hideProvidersByName(arProviders, userInfo.user.providers.join(','));
                }

                var requiredCapabilities = p['requiredCapabilities'];
                if (!requiredCapabilities) requiredCapabilities = c['requiredCapabilities'];
                if (!requiredCapabilities) requiredCapabilities = 'friends';

                arProviders = GS.getProvidersForRequiredCapabilities(arProviders, requiredCapabilities.split(','));
                for (var i = 0; i < arProviders.length; i++) {
                    htmlNotConnected.push(this.getDisconnetedNetworkHTML(arProviders[i], containerID));
                }

                var networkSeperatorHTML = this.getNetworkSeperatorHTML();

                var networksHTML = [];
                if (htmlLoggedin.length > 0) networksHTML.push(htmlLoggedin.join(networkSeperatorHTML));
                if (htmlConnected.length > 0) networksHTML.push(htmlConnected.join(networkSeperatorHTML));
                if (htmlNotConnected.length > 0) networksHTML.push(htmlNotConnected.join(networkSeperatorHTML));


                // Start Building Main HTML
                var w = p['width'];
                var h = p['height'];

                var oLinkStyle = resolver.Resolve('+/config/body/texts/links');
                var linkStyle = GS.getStyleString(oLinkStyle, true);
                var linkHeight = this.getSingleLineHeight(oLinkStyle);

                var showOKButton = !window.gigya.utils.validation.isExplicitTrue(p['hideOKButton']) && internals['isPopup'];
                var okButtonHeight = showOKButton ? 30 : 0;

                //is there a footer?
                var hideGigyaBranding = window.gigya.utils.validation.isExplicitTrue(p['hideGigya']) || window.gigya.utils.validation.isExplicitTrue(p['hideGigyaLink']);
                var showGigyaBranding = !hideGigyaBranding;
                var showTerms = !(window.gigya.utils.validation.isExplicitFalse(p['showTermsLink']));
                var showFooter = (showTerms || showGigyaBranding);

                var footerHTML = '';
                var footerHeight = 0;
                if (showFooter) {
                    // Build Footer HTML
                    var leftBottomLinkHTML = '';
                    if (showTerms) {
                        leftBottomLinkHTML = '<a target="_blank" href="http://www.gigya.com/terms-of-service/" style="' + linkStyle + ';padding-right:5px;text-decoration:none;font-size:11px">' + window.gigya.utils.templates.fill("$terms", this.pit) + '</a>';
                    }

                    var rightBottomLinkHTML = '';
                    if (showGigyaBranding) {
                        rightBottomLinkHTML += '<span onclick="window.open(\'http://www.gigya.com\')" style="color:#005997;font-weight:bold; font-size:11px;cursor:pointer"><span style="color:#828282;font-weight:bold; font-size:11px;cursor:pointer">Social by </span>Gigya</span>';
                    }

                    var linksWidth = window.gigya.pluginUtils.layout.measureText(leftBottomLinkHTML).w + window.gigya.pluginUtils.layout.measureText(rightBottomLinkHTML).w;
                    if (linksWidth > w) {
                        rightBottomLinkHTML = '';
                        linksWidth = window.gigya.pluginUtils.layout.measureText(leftBottomLinkHTML).w;
                    }
                    if ((showTerms || showGigyaBranding) && (linksWidth < w) && (oLinkStyle.color.toLowerCase() != 'transparent')) {
                        footerHTML = ('<div style="padding-top:5px;padding-left:5px;padding-right:5px;padding-bottom:2px"><table cellspacing="0" cellpadding="0" style="width:' + (w - 10) + 'px;margin:0px;"><tr><td align="left">' + leftBottomLinkHTML + '</td><td align="right" style="text-align:right;white-space:nowrap;">' + rightBottomLinkHTML + '</td></tr></table></div>');
                        footerHeight = linkHeight;
                    }

                }



                //Wrap Networks div


                var overflowStyle = 'overflow-y:auto;overflow-x:hidden;';
                var componentHeightStyle = 'height:' + p['height'] + 'px;';
                var topMargin = 3;
                var networksHeightStyle = 'height:' + (p['height'] - footerHeight - topMargin - 5) + 'px;'

                var container = document.getElementById(p['containerID']);

                if (window.gigya.localInfo.isMobile) { //on mobile ignore height limits and no scroll...
                    container.style.height = 'auto';
                    componentHeightStyle = '';
                    overflowStyle = '';
                    networksHeightStyle = '';
                    topMargin = 0;
                }
                else if (internals['isPopup']) {
                    topMargin = 13;
                    networksHeightStyle = 'height:' + (p['height'] - footerHeight - okButtonHeight - topMargin - 5) + 'px;';
                }


                arHTML.push('<div align="center" style="width:' + p['width'] + 'px;' + componentHeightStyle + bgStyle + '" >'); // main container
                if (topMargin > 0) {
                    arHTML.push('<div style="height:' + topMargin + 'px"></div>');
                }
                arHTML.push('<div style="width:' + (p['width'] - 2 * 10) + 'px;' + networksHeightStyle + overflowStyle + listboxBgStyle + '" >');
                arHTML.push(networksHTML.join(networkSeperatorHTML));
                arHTML.push('</div>');

                if (showOKButton) {
                    arHTML.push(window.gigya.utils.templates.fill("$ok_Button_Template", this.pit));
                }
                arHTML.push(footerHTML);
                arHTML.push('</div>'); // main container


                var h = arHTML.join('');
                container.innerHTML = arHTML.join('');

                if (!isEvent) window.gigya.events.dispatchForWidget({ eventName: 'load', containerID: p['containerID'] }, p);

                //
                /*
				container.style.width=''+p.w+'px';
				container.style.height=''+p.h+'px';
				*/

                //this.modules[containerID].pages=pages;
                //this.updatePage(containerID);

            },
            providerAppsLinks: {
                facebook: "https://www.facebook.com/settings?tab=applications",
                twitter: "https://twitter.com/settings/applications",
                linkedin: "https://www.linkedin.com/secure/settings?userAgree=&goback=%2Enas_*1_*1_*1",
                googleplus: "https://plus.google.com/u/0/apps",
                messenger: "https://account.live.com/consent/Manage",
                yahoo: "https://api.login.yahoo.com/WSLogin/V1/unlink"
            },
            pit: {  // plugin Templates, Texts & Fragments

                ANY: function () {
                    var blnAny = false;
                    for (var i = 0; i <= arguments.length - 2; i++) {
                        if (this.KEY_EXISTS(arguments[i])) {
                            var keyOrVal = arguments[arguments.length - 1];
                            if (this.KEY_EXISTS(keyOrVal)) {
                                return '' + window.gigya.utils.templates.fill('$' + arguments[arguments.length - 1], this);
                            } else {
                                return keyOrVal;
                            }
                        }
                    }
                    return '';
                }
				, ELSE: function () {
				    var blnAny = false;
				    for (var i = 0; i <= arguments.length - 3; i++) {
				        if (('' + arguments[i]).length > 0) { return arguments[arguments.length - 2] }
				    }
				    return arguments[arguments.length - 1];
				}
				, KEY_EXISTS: function (key, mayBeEmpty) {
				    keyparts = key.split('.');
				    pfx = '';
				    var o = this;
				    for (var i = 0; (i < keyparts.length) && (o != null) ; i++) {
				        try {
				            pfx = pfx + keyparts[i];
				            o = o[keyparts[i]];
				        }
				        catch (e) {
				            o = null;
				        }
				    }
				    return (o != null) && (o != '' || mayBeEmpty);
				}
				, IFDEFELSE: function (key, v1key, v2key, mayBeEmpty) {
				    if (mayBeEmpty == null) mayBeEmpty = true;
				    if (this.KEY_EXISTS(key, mayBeEmpty)) {
				        return window.gigya.utils.templates.fill('$' + v1key, this);
				    }
				    else {
				        return window.gigya.utils.templates.fill('$' + v2key, this);
				    }
				}
				, IFEQELSE: function (expr1, expr2, v1, v2) {
				    if (expr1 == expr2) return v1; else return v2;
				}
				, IEONLY: function (keyOrVal) {
				    if (navigator.userAgent.indexOf("MSIE") != -1) {
				        if (this.KEY_EXISTS(keyOrVal)) {
				            return '' + window.gigya.utils.templates.fill('$' + arguments[arguments.length - 1], this);
				        } else {
				            return keyOrVal;
				        }
				    }
				    else return '';
				}

				, T: window.gigya.utils.templates.fill

				, BUILDCSSPROP: function (styleName, className, suffix, inherit) {
				    var newVal = null;
				    if (null != (newVal = this[className + suffix])) {
				        return styleName + ((styleName.length > 0) ? ':' : '') + newVal + ';'
				    }
				    else if (inherit) {
				        if (styleName == 'font-size') {
				            return styleName + ':1em;'
				        }
				        else {
				            return styleName + ':inherit;'
				        }
				    }
				    else {
				        return '';
				    }
				}

				, BUILDCSS: function (className, tagName) {
				    var useInherit = (',table,tr,td,div,'.indexOf(',' + tagName.toLowerCase() + ',') > -1);
				    var s = [
						this.BUILDCSSPROP('font-family', className, 'FontFamily', useInherit),
						this.BUILDCSSPROP('font-variant', className, 'FontVariant', useInherit),
						this.BUILDCSSPROP('font-weight', className, 'FontWeight', useInherit),
						this.BUILDCSSPROP('font-size', className, 'FontSize', useInherit),
						this.BUILDCSSPROP('font-style', className, 'FontStyle', useInherit),
						this.BUILDCSSPROP('text-decoration', className, 'TextDecoration', useInherit),
						this.BUILDCSSPROP('color', className, 'Color', useInherit),
						this.BUILDCSSPROP('background-color', className, 'BackgroundColor', false),
						this.BUILDCSSPROP('border', className, 'Border', false),
						this.BUILDCSSPROP('', className, 'CSS', false),
					//(this[className+'CSS']?(''+this.tpl(className+'CSS')+';'):''),
						''
				    ].join('');
				    return s;
				}

				, VSPACE: function (n) { return '<div style="height:' + n + 'px;overflow:hidden;"></div>' }
				, HSPACE: function (n) { return '<span style="height:1px;width:' + n + 'px;overflow:hidden;display:inline-block;"></span>' }

				, HBOXSTART: function (n, w) { return '<table class="gig-edit-providerRow" style="font-size:1em;font-weight:inherit;font-style:inherit;font-variant:inherit;color:inherit;width:99%" cellspacing="0" cellpadding="0"><tr><td style="width:' + n + 'px;">$HSPACE(\'' + n + '\')</td><td' + ((w != null) ? (' style="width:' + w + 'px;"') : '') + '>' }
				, HBOXSTARTNW: function (n, w) { return '<table class="gig-edit-providerRow" style="font-size:1em;font-weight:inherit;font-style:inherit;font-variant:inherit;color:inherit;width:99%" cellspacing="0" cellpadding="0"><tr><td style="width:' + n + 'px;">$HSPACE(\'' + n + '\')</td><td style="white-space:nowrap;' + ((w != null) ? ('width:' + w + 'px;') : '') + '">' }
				, HBOXCELL: function (n, w) { return '</td><td style="text-align:left;width:' + n + 'px;">$HSPACE(\'' + n + '\')</td><td' + ((w != null) ? (' style="width:' + w + 'px;"') : '') + '>' }
				, HBOXCELLNW: function (n, w) { return '</td><td style="width:' + n + 'px;">$HSPACE(\'' + n + '\')</td><td style="white-space:nowrap;' + ((w != null) ? ('width:' + w + 'px;') : '') + '">' }
				, HBOXEND: function (n) { return '</td><td style="width:' + n + 'px;">$HSPACE(\'' + n + '\')</td></tr></table>' }
                //pit.p
				, TEXT: function (textKey, replaceStr, withStr) {
				    return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.socialize.plugins.edit.js', textKey, this.p.lang, replaceStr, withStr);
				}
				, UIConfig: '<config><body><controls color="$defaultColor"></controls><texts color="$defaultColor"><links color="$linkedItemTitleColor"></links></texts> <background frame-color="Transparent"></background></body></config>'

				, ConnectedNetworkTemplate: '$VSPACE(5)$HBOXSTART(10)<img src="${imageBaseURL}/${provider.name}.png" title="$title" alt="$title" style="height:18px;width:18px;vertical-align:middle;"  />$HBOXCELLNW(10)<span style="$cssTextStyle;font-weight:bold;">${identity.nickname}</span>$HBOXCELL(10)</td><td style="width:100%">&#160;</td><td>$HBOXEND(10)' +
										   '$VSPACE(5)$HBOXSTARTNW(10)$item_image$HBOXCELL(10)</td><td valign="top" style="white-space:nowrap;text-align:left">$IFDEFELSE(\'identity.country\',\'countryTemplate\',\'emptyString\',false)$IFDEFELSE(\'identity.city\',\'cityTemplate\',\'emptyString\',false)$dobTemplate()<span style="$cssLinkStyle;cursor:pointer;text-decoration:underline;" onclick="$onDisconnectClicked" gigid="${provider.name}" >$disconnect</span></td><td style="width:99%">&#160;$MyAppsTemplate</td><td>$HBOXEND(10)$VSPACE(5)'
				, disconnect: '$TEXT(\'disconnect\')'
				, connect: '$TEXT(\'connect\')'
				, DisconnectedNetworkTemplate: '$VSPACE(5)$HBOXSTART(10,18)<img src="${imageBaseURL}/${provider.name}.png" title="$title" alt="$title" style="height:18px;width:18px;"/>$HBOXCELL(10)</td><td valign="top" style="white-space:nowrap;text-align:left"><span style="$cssLinkStyle;cursor:pointer;text-decoration:underline;float:left;" onclick="$onConnectClicked" gigid="${provider.name}" >$connect</span>$MyAppsTemplate$HBOXEND(10)$VSPACE(5)'
                , MyAppsTemplate: '<a href="${provider.appsLink}" target="_blank" style="float:right;text-decoration:none;"><span style="$cssLinkStyle;cursor:pointer;text-decoration:underline;" gigid="${provider.name}" >$myapps</span></a>'
                , myapps: '$TEXT(\'my_apps\')'
				, separator_item_Template: '<div style="height:5px;overflow:hidden;">$VSPACE(2)<div style="height:1px;overflow:hidden;background-color:$separatorColor;width:100%" ></div>$VSPACE(2)</div>'
				, country: '$TEXT(\'country\')'
				, countryTemplate: '<div style="$cssTextStyle">$country ${identity.country}</div>'
				, city: '$TEXT(\'city\')'
				, cityTemplate: '<div style="$cssTextStyle">$city ${identity.city}</div>'
				, date_of_birth: '$TEXT(\'date_of_birth\')'
				, dobTemplate: function () {

				    if (this.identity.birthYear && this.identity.birthMonth && this.identity.birthDay) {
				        var year = this.identity.birthYear;
				        var month = this.identity.birthMonth;
				        var day = this.identity.birthDay;
				        if (!year) year = '??';
				        if (!month) month = '??';
				        if (!day) day = '??';
				        return '<div style="' + this.cssTextStyle + '">${date_of_birth} ' + day + '/' + month + '/' + year + '</div>';

				    }
				    else {
				        return '';
				    }
				}
				, itemImageSize: '45'
				, item_image: '<div style="overflow:hidden;width:${itemImageSize}px;height:${itemImageSize}px;"><table cellspacing="0" cellpadding="0" style="width:100%;height:100%"><tr><td align="center" valign="middle"><img alt="" align="center" valign="middle" onload="if (this.resized!=1) {this.resized=1;if (this.width>${itemImageSize} || this.height>${itemImageSize}) {if ( this.width>this.height) {this.width=${itemImageSize}} else {this.height=${itemImageSize}}};}" src="$getPhotoURL()" onerror="if (this.hadError!=1) {this.hadError=1;this.src=\'$defaultPhotoURL\';}" /></td></tr></table></div>'
				, getPhotoURL: function () {
				    var url = this.identity.thumbnailURL;
				    if (!url) url = this.identity.photoURL;
				    if (!url) url = window.gigya.utils.templates.fill(this.defaultPhotoURL, this);
				    return window.gigya.global.getPhotoURL(url);
				}
				, ok: '$TEXT(\'ok\')'
				, ok_Button_Template: '$VSPACE(5)<div align="center"><input type="button" value="$ok" style="padding:0 6px; width:70px;font-family:arial;font-size:11px;" onclick="gigya.services.socialize._closeComponent(\'$internals.rid\', true);" /></div>'
				, defaultPhotoURL: '$imageBaseURL/DefaultUserImage_45px.png'
				, separatorColor: '#e6e6e6'

				, terms: '$TEXT(\'terms\')'
				, emptyString: ''

            }

			, getConnetedNetworkHTML: function (provider, identity, moduleID) {
			    var td = {};
			    var attr;
			    for (attr in this.pit) { td[attr] = this.pit[attr] };
			    td.provider = provider;
			    td.identity = identity;

			    if (this.providerAppsLinks[provider.name]) {
			        td.provider.appsLink = this.providerAppsLinks[provider.name];
			    }
			    else {
			        td.MyAppsTemplate = '';
			    }

			    if (!window.gigya.utils.validation.isExplicitFalse(td.p.showTooltips)) {
			        td.title = provider.displayName;
			    } else {
			        td.title = '';
			    }

			    td.onDisconnectClicked = 'gigya.services.socialize.plugins.edit.onDisconnectClicked(\'' + moduleID + '\',\'' + provider + '\')';
			    return window.gigya.utils.templates.fill("$ConnectedNetworkTemplate", td);
			},
            onConnectClicked: function (moduleID, provider) {
                var m = this.modules[moduleID];
                window.gigya.services.socialize.addConnection(m.c, { provider: provider, includeAllIdentities: true })
            },
            onDisconnectClicked: function (moduleID, provider) {
                var m = this.modules[moduleID];
                window.gigya.services.socialize.removeConnection(m.c, { provider: provider })
            },
            getDisconnetedNetworkHTML: function (provider, moduleID) {
                var td = {};
                var attr;
                for (attr in this.pit) { td[attr] = this.pit[attr] };
                td.provider = provider;

                if (this.providerAppsLinks[provider.name]) {
                    td.provider.appsLink = this.providerAppsLinks[provider.name];
                }
                else {
                    td.MyAppsTemplate = '';
                }

                if (!window.gigya.utils.validation.isExplicitFalse(td.p.showTooltips)) {
                    td.title = provider.displayName;
                } else {
                    td.title = '';
                }

                td.onConnectClicked = 'gigya.services.socialize.plugins.edit.onConnectClicked(\'' + moduleID + '\',\'' + provider + '\')';
                return window.gigya.utils.templates.fill("$DisconnectedNetworkTemplate", td);
            }
			, getNetworkSeperatorHTML: function () {
			    var td = {};
			    var attr;
			    for (attr in this.pit) { td[attr] = this.pit[attr] };
			    return window.gigya.utils.templates.fill("$separator_item_Template", td);
			}

			, proccessor: function (PropertyName, PropertyValue) {
			    var lcasePropertyName = PropertyName.toLowerCase();
			    var lastDashIndex = lcasePropertyName.indexOf('-');
			    if (lastDashIndex != -1) {
			        lcasePropertyName = lcasePropertyName.substring(lastDashIndex + 1, lcasePropertyName.length);
			    }
			    switch (lcasePropertyName) {
			        case 'bold':
			        case 'italic':
			        case 'underline':
			            return PropertyValue.toString().toLowerCase() == 'true';
			        case 'width':
			        case 'height':
			            return PropertyValue = PropertyValue.replace('%', '');
			        case 'size':
			            return PropertyValue = parseInt(PropertyValue);
			        default:
			            return PropertyValue;
			    }
			},
            redraw: function (containerID) {
                if (document.getElementById(containerID) && document.getElementById(containerID).innerHTML != '&#160;') {
                    var m = this.modules[containerID];
                    this.showEditConnectionsUI(m.c, m.p, m.i, true);
                }
            },

            getSingleLineHeight: function (oStyle) {
                return window.gigya.pluginUtils.layout.measureText('Wg', oStyle).h + 4;
            }
            /*
			showWhatsThis:function(id){
			var el=document.getElementById(id+'_whatsThis');
			if (el) {
			var container=document.getElementById(id);
			var pos=gigya.global._GetElementPos(container);
			el.style.left=pos.left+(parseInt(container.style.width)-el.offsetWidth)/2 + 'px';
			el.style.top=pos.top+(parseInt(container.style.height)-el.offsetHeight)/2 + 'px';
			el.style.visibility='visible';
			}
			},
			hideWhatsThis:function(id){
			var el=document.getElementById(id+'_whatsThis');
			if (el) {
			el.style.visibility='hidden';
			}
			}
			*/

        }

    }
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmVkaXRDb25uZWN0aW9uc192MS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLGVBQWUsWUFBSyw0Q0FBNEMsWUFBSztBQUNyRSxjQUFjLFlBQUs7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBLHlCQUF5QixZQUFLO0FBQzlCOztBQUVBLDRCQUE0QixzQkFBc0Isb0JBQW9CO0FBQ3RFO0FBQ0E7QUFD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QUFDQTtBQUNBOztBQUVBLFlBQVksWUFBSztBQUNqQjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsY0FBYyxZQUFLO0FBQ25CLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0JBQWdCLFlBQUssd0NBQXdDLGlEQUFpRDtBQUM5RyxhQUFhO0FBQ2I7QUFDQTtBQUNBLGdCQUFnQixZQUFLLDJDQUEyQyxxQkFBcUI7QUFDckYsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFlBQUs7QUFDMUI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixZQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLGNBQWMsWUFBSztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHFIQUFxSDtBQUNySDtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsdUJBQXVCLFlBQUs7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUMsSSIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5lZGl0Q29ubmVjdGlvbnNfdjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sZWdhY3kvcGx1Z2lucy9naWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5lZGl0Q29ubmVjdGlvbnNfdjEuanNcIik7XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuanNcIiAvPlxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucyA9PSAndW5kZWZpbmVkJykgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMgPSB7fTtcclxuICAgIHZhciBfcGkgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucztcclxuXHJcbiAgICBpZiAodHlwZW9mIF9waS5jb21tb24gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBfcGkuY29tbW9uID0ge1xyXG4gICAgICAgICAgICBhZGRDU1M6IGZ1bmN0aW9uIChjc3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3NzIHx8IGNzcyA9PSBcIlwiKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoY3NzIGluc3RhbmNlb2YgQXJyYXkpIGNzcyA9IGNzcy5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnVsZXNOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldClcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlc05vZGUubm9kZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKHJ1bGVzTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgICAgICAgICAoaGVhZC5sZW5ndGggPiAwID8gaGVhZFswXSA6IGJvZHkpLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIF9waS5lZGl0ID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgX3BpLmVkaXQgPSB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6IHt9LFxyXG5cclxuICAgICAgICAgICAgc2hvd0VkaXRDb25uZWN0aW9uc1VJOiBmdW5jdGlvbiAoYywgcCwgaSwgaXNFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIEdTID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplO1xyXG4gICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwMiA9IHt9OyBmb3IgKHZhciBhdHRyIGluIHApIHsgcDJbYXR0cl0gPSBwW2F0dHJdOyB9XHJcbiAgICAgICAgICAgICAgICBwMi5yZXF1aXJlZENhcGFiaWxpdGllcyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgcDIuaW5jbHVkZUFsbElkZW50aXRpZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcDIuZW5hYmxlZFByb3ZpZGVycyA9ICcqJyArIChwMi5lbmFibGVkUHJvdmlkZXJzID8gJywnICsgcDIuZW5hYmxlZFByb3ZpZGVycyA6ICcnKTtcclxuICAgICAgICAgICAgICAgIHAyLmRpc2FibGVkUHJvdmlkZXJzID0gJyc7XHJcbiAgICAgICAgICAgICAgICBwMi5jYWxsYmFjayA9IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocFsnY29udGFpbmVySUQnXSkpIFRoaXMuX3Nob3dFZGl0Q29ubmVjdGlvbnNVSVdpdGhBdmFpbGFibGVQcm92aWRlcnMocmVzLmNvbnRleHQuYywgcmVzLmNvbnRleHQucCwgcmVzLmNvbnRleHQuaSwgcmVzLCBpc0V2ZW50KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBwMi5jb250ZXh0ID0geyBUaGlzOiB0aGlzLCBjOiBjLCBwOiBwLCBpOiBpIH07XHJcbiAgICAgICAgICAgICAgICBHUy5nZXRVc2VySW5mbyhjLCBwMik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRJRCA9IHBbJ2NvbnRhaW5lcklEJ10ucmVwbGFjZSgvWy5dL2csICdcXFxcLicpO1xyXG4gICAgICAgICAgICAgICAgX3BpLmNvbW1vbi5hZGRDU1MoW1xyXG4gICAgICAgICAgICAgICAgICAgICcjJywgZXNjYXBlZElELCAnIGEgeyBkaXNwbGF5Om5vbmU7IH0gJyxcclxuICAgICAgICAgICAgICAgICAgICAnIycsIGVzY2FwZWRJRCwgJyB0YWJsZS5naWctZWRpdC1wcm92aWRlclJvdzpob3ZlciBhIHsgZGlzcGxheTppbmxpbmU7IH0gJyxcclxuICAgICAgICAgICAgICAgICAgICAnIycsIGVzY2FwZWRJRCwgJyB0ZCwgIycsIGVzY2FwZWRJRCwgJyB0YWJsZSB7d2lkdGg6YXV0bztmb250LXNpemU6MXB4O3ZlcnRpY2FsLWFsaWduOnRvcDtib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7Ym9yZGVyOm5vbmU7IHBhZGRpbmc6MHB4O21hcmdpbjowcHg7fSAnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjJywgZXNjYXBlZElELCAnIHt9J1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF9ub3JtYWxpemVDYXBhYmlsaXRpZXM6IGZ1bmN0aW9uIChjYXBhYmlsaXRpZXNMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhcGFiaWxpdGllc0xpc3QgIT0gJ3N0cmluZycpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYXBhYmlsaXRpZXNMaXN0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWyBdL2csICcnKS5yZXBsYWNlKC8sLC9nLCAnLCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBfY2FwYWJpbGl0aWVzU3VwcG9ydGVkOiBmdW5jdGlvbiAocmVxdWlyZWRDYXBhYmlsaXRpZXMsIHN1cHBvcnRlZENhcGFiaWxpdGllcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyUmVxID0gdGhpcy5fbm9ybWFsaXplQ2FwYWJpbGl0aWVzKHJlcXVpcmVkQ2FwYWJpbGl0aWVzKS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN1cCA9ICcsJyArIHRoaXMuX25vcm1hbGl6ZUNhcGFiaWxpdGllcyhzdXBwb3J0ZWRDYXBhYmlsaXRpZXMpICsgJywnO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhclJlcS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdXAuaW5kZXhPZignLCcgKyBhclJlcVtpXSArICcsJykgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBfc2hvd0VkaXRDb25uZWN0aW9uc1VJV2l0aEF2YWlsYWJsZVByb3ZpZGVyczogZnVuY3Rpb24gKGMsIHAsIGludGVybmFscywgdXNlckluZm8sIGlzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBHUyA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZTtcclxuICAgICAgICAgICAgICAgIHZhciByaWQgPSBpbnRlcm5hbHNbJ3JpZCddO1xyXG4gICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZXIgPSBuZXcgZ2lneWEuZ2xvYmFsLnJlc29sdmVyKGdpZ3lhLmdsb2JhbC5yZXNvbHZlci5kZWZhdWx0UHJvY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlci5hZGRDb25maWcoJzxjb25maWc+PGJvZHkgZm9udD1cImFyaWFsXCIgZnJhbWUtY29sb3I9XCJcIj48Y2FwdGlvbnMgYm9sZD1cInRydWVcIiBzaXplPVwiMTNcIiBjb2xvcj1cIiNmZmZmZmZcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiIzQ2OTJERVwiIGZyYW1lLXRoaWNrbmVzcz1cIjBcIiAvPjxjb250cm9scz48c25idXR0b25zIHR5cGU9XCJcIiBidXR0b25zaXplPVwiMzBcIiAvPjxsaXN0Ym94ZXMgZnJhbWUtY29sb3I9XCIjOTg5ODk4XCIgYmFja2dyb3VuZC1jb2xvcj1cIiNmZmZmZmZcIj48L2xpc3Rib3hlcz48L2NvbnRyb2xzPjxiYWNrZ3JvdW5kIGJhY2tncm91bmQtY29sb3I9XCJ0cmFuc3BhcmVudFwiIC8+PHRleHRzIHNpemU9XCIxMXB4XCIgZnJhbWUtdGhpY2tuZXNzPVwiMFwiPjxsaW5rcyBjb2xvcj1cIiMwMDg2ZjFcIiAvPjwvdGV4dHM+PC9ib2R5PjwvY29uZmlnPicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVybmFsc1snaXNQb3B1cCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXIuYWRkQ29uZmlnKCc8Y29uZmlnPjxib2R5PjxiYWNrZ3JvdW5kIGZyYW1lLXRoaWNrbmVzcz1cIjVcIiBmcmFtZS1jb2xvcj1cIiM5OTk5OTlcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiI0Y2RjZGNlwiIC8+PGNvbnRyb2xzPjxzbmJ1dHRvbnMgdHlwZT1cInRleHRVbmRlclwiIGJ1dHRvbnNpemU9XCIzNVwiIC8+PC9jb250cm9scz48L2JvZHk+PC9jb25maWc+Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZXIuYWRkQ29uZmlnKGNbJ1VJQ29uZmlnJ10pO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZXIuYWRkQ29uZmlnKHBbJ1VJQ29uZmlnJ10pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGl0LnAgPSBwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXQuYyA9IGM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGludGVybmFsc1snaXNQb3B1cCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcHRpb25UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwWydjYXB0aW9uVGV4dCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb25UZXh0ID0gcFsnY2FwdGlvblRleHQnXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uVGV4dCA9IHRoaXMucGl0LlRFWFQoJ0VkaXRDb25uZWN0aW9ucycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgb1BvcHVwID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9jcmVhdGVKU1BvcHVwKHJpZCwgcmVzb2x2ZXIsIGNhcHRpb25UZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBjID0gb1BvcHVwLmM7XHJcbiAgICAgICAgICAgICAgICAgICAgcCA9IG9Qb3B1cC5wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJJRCA9IHBbJ2NvbnRhaW5lcklEJ107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kdWxlc1tjb250YWluZXJJRF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmblVzZXJDaGFuZ2VkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBbJ2NvbnRhaW5lcklEJ10pKSBUaGlzLl9zaG93RWRpdENvbm5lY3Rpb25zVUlXaXRoQXZhaWxhYmxlUHJvdmlkZXJzKGMsIHAsIGludGVybmFscywgZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5hZGRFdmVudEhhbmRsZXJzKHsgbGlzdGVuZXJUeXBlOiAnY29tcG9uZW50JyB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9naW46IGZuVXNlckNoYW5nZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9nb3V0OiBmdW5jdGlvbiAoKSB7IFRoaXMucmVkcmF3KGNvbnRhaW5lcklEKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvbm5lY3Q6IGZuVXNlckNoYW5nZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlzY29ubmVjdDogZm5Vc2VyQ2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbY29udGFpbmVySURdID0geyBjOiBjLCBwOiBwLCBpOiBpbnRlcm5hbHMgfTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VySW5mby5lcnJvckNvZGUgIT0gMCAmJiAhdXNlckluZm8udXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKHAsIHVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3ZhciBidXR0b25zU3R5bGU9cFsnYnV0dG9uc1N0eWxlJ107XHJcbiAgICAgICAgICAgICAgICAvL2lmICh0eXBlb2YgYnV0dG9uc1N0eWxlPT0ndW5kZWZpbmVkJykgYnV0dG9uc1N0eWxlPScnO1xyXG4gICAgICAgICAgICAgICAgLy92YXIgb1N0eWxlPXRoaXMuZ2V0U3R5bGUoYnV0dG9uc1N0eWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpdC5pbWFnZUJhc2VVUkwgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9lZGl0LycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXQuY3NzVGV4dFN0eWxlID0gR1MuZ2V0U3R5bGVTdHJpbmcocmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS90ZXh0cycpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGl0LmNzc0xpbmtTdHlsZSA9IEdTLmdldFN0eWxlU3RyaW5nKHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvdGV4dHMvbGlua3MnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5waXQuaW50ZXJuYWxzID0gaW50ZXJuYWxzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdmFyIHN0eWxlQmFzZSA9IGJhc2U7XHJcbiAgICAgICAgICAgICAgICAvL2lmIChvU3R5bGUuYmFzZSkgc3R5bGVCYXNlKz1vU3R5bGUuYmFzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubW9kdWxlc1tjb250YWluZXJJRF09e2M6YyxwOnAsaTppLHBhZ2U6MH07XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJIVE1MID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9CZ1N0eWxlID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS9iYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxzWydpc1BvcHVwJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBvQmdTdHlsZVsnZnJhbWUtdGhpY2tuZXNzJ10gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGJnU3R5bGUgPSBHUy5nZXRTdHlsZVN0cmluZyhvQmdTdHlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9MaXN0Ym94QmdTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvY29udHJvbHMvbGlzdGJveGVzJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGJveEJnU3R5bGUgPSBHUy5nZXRTdHlsZVN0cmluZyhvTGlzdGJveEJnU3R5bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1aXJlZENhcGFiaWxpdGllcyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHAucmVxdWlyZWRDYXBhYmlsaXRpZXMgIT0gbnVsbCkgcmVxdWlyZWRDYXBhYmlsaXRpZXMgPSBwLnJlcXVpcmVkQ2FwYWJpbGl0aWVzO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBCVUlMRCBUSEUgSFRNTCBGT1IgVEhFIE5FVFdPUktTIElOIFRIRSBESUZGRVJFTlQgU1RBVElcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGh0bWxMb2dnZWRpbiA9IFtdLCBodG1sQ29ubmVjdGVkID0gW10sIGh0bWxDb25uZWN0ZWROb3RBdmFsaWFibGUgPSBbXSwgaHRtbE5vdENvbm5lY3RlZCA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgLypcclxuXHRcdFx0XHQxLiBsb2dpblByb3ZpZGVyXHJcblx0XHRcdFx0Mi4gY29ubmVjdGVkIG5ldHdvcmtzICh3aXRoIGluY2x1ZGVBbGxJZGVudGl0aWVzPXRydWUsIGlnbm9yZSByZXF1aXJlZENhcGFibGl0aWVzKVxyXG5cdFx0XHRcdDMuIGRpc2Nvbm5lY3RlZCBuZXR3b3JrcyAodXNlICByZXF1aXJlZENhcGFibGl0aWVzKVxyXG5cdFx0XHRcdCovXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGVuYWJsZWRQcm92aWRlcnMgPSBwWydlbmFibGVkUHJvdmlkZXJzJ107XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVuYWJsZWRQcm92aWRlcnMpIGVuYWJsZWRQcm92aWRlcnMgPSBjWydlbmFibGVkUHJvdmlkZXJzJ107XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVuYWJsZWRQcm92aWRlcnMpIGVuYWJsZWRQcm92aWRlcnMgPSAnKic7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlzYWJsZWRQcm92aWRlcnMgPSBwWydkaXNhYmxlZFByb3ZpZGVycyddO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlZFByb3ZpZGVycykgZGlzYWJsZWRQcm92aWRlcnMgPSBjWydkaXNhYmxlZFByb3ZpZGVycyddO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlZFByb3ZpZGVycykgZGlzYWJsZWRQcm92aWRlcnMgPSAnJztcclxuICAgICAgICAgICAgICAgIHZhciBhclByb3ZpZGVycyA9IEdTLmdldFByb3ZpZGVyc0J5TmFtZShlbmFibGVkUHJvdmlkZXJzKTtcclxuICAgICAgICAgICAgICAgIGFyUHJvdmlkZXJzID0gR1MuaGlkZVByb3ZpZGVyc0J5TmFtZShhclByb3ZpZGVycywgZGlzYWJsZWRQcm92aWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJbmZvLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpZGVudGl0eU5hbWUgaW4gdXNlckluZm8udXNlci5pZGVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZGVudGl0eSA9IHVzZXJJbmZvLnVzZXIuaWRlbnRpdGllc1tpZGVudGl0eU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb1Byb3ZpZGVyID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9nZXRQcm92aWRlckJ5TmFtZShpZGVudGl0eS5wcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb1Byb3ZpZGVyKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9Qcm92aWRlci5JRCA9PSA2MDAyKSBjb250aW51ZTsgIC8vZG8gbm90IGRpc3BsYXkgc2l0ZSBpZGVudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWRlbnRpdHkuaXNMb2dpbklkZW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sTG9nZ2VkaW4ucHVzaCh0aGlzLmdldENvbm5ldGVkTmV0d29ya0hUTUwob1Byb3ZpZGVyLCBpZGVudGl0eSwgY29udGFpbmVySUQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxDb25uZWN0ZWQucHVzaCh0aGlzLmdldENvbm5ldGVkTmV0d29ya0hUTUwob1Byb3ZpZGVyLCBpZGVudGl0eSwgY29udGFpbmVySUQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhclByb3ZpZGVycyA9IEdTLmhpZGVQcm92aWRlcnNCeU5hbWUoYXJQcm92aWRlcnMsIHVzZXJJbmZvLnVzZXIucHJvdmlkZXJzLmpvaW4oJywnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVpcmVkQ2FwYWJpbGl0aWVzID0gcFsncmVxdWlyZWRDYXBhYmlsaXRpZXMnXTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVxdWlyZWRDYXBhYmlsaXRpZXMpIHJlcXVpcmVkQ2FwYWJpbGl0aWVzID0gY1sncmVxdWlyZWRDYXBhYmlsaXRpZXMnXTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVxdWlyZWRDYXBhYmlsaXRpZXMpIHJlcXVpcmVkQ2FwYWJpbGl0aWVzID0gJ2ZyaWVuZHMnO1xyXG5cclxuICAgICAgICAgICAgICAgIGFyUHJvdmlkZXJzID0gR1MuZ2V0UHJvdmlkZXJzRm9yUmVxdWlyZWRDYXBhYmlsaXRpZXMoYXJQcm92aWRlcnMsIHJlcXVpcmVkQ2FwYWJpbGl0aWVzLnNwbGl0KCcsJykpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhclByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxOb3RDb25uZWN0ZWQucHVzaCh0aGlzLmdldERpc2Nvbm5ldGVkTmV0d29ya0hUTUwoYXJQcm92aWRlcnNbaV0sIGNvbnRhaW5lcklEKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5ldHdvcmtTZXBlcmF0b3JIVE1MID0gdGhpcy5nZXROZXR3b3JrU2VwZXJhdG9ySFRNTCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBuZXR3b3Jrc0hUTUwgPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmIChodG1sTG9nZ2VkaW4ubGVuZ3RoID4gMCkgbmV0d29ya3NIVE1MLnB1c2goaHRtbExvZ2dlZGluLmpvaW4obmV0d29ya1NlcGVyYXRvckhUTUwpKTtcclxuICAgICAgICAgICAgICAgIGlmIChodG1sQ29ubmVjdGVkLmxlbmd0aCA+IDApIG5ldHdvcmtzSFRNTC5wdXNoKGh0bWxDb25uZWN0ZWQuam9pbihuZXR3b3JrU2VwZXJhdG9ySFRNTCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGh0bWxOb3RDb25uZWN0ZWQubGVuZ3RoID4gMCkgbmV0d29ya3NIVE1MLnB1c2goaHRtbE5vdENvbm5lY3RlZC5qb2luKG5ldHdvcmtTZXBlcmF0b3JIVE1MKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IEJ1aWxkaW5nIE1haW4gSFRNTFxyXG4gICAgICAgICAgICAgICAgdmFyIHcgPSBwWyd3aWR0aCddO1xyXG4gICAgICAgICAgICAgICAgdmFyIGggPSBwWydoZWlnaHQnXTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb0xpbmtTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvdGV4dHMvbGlua3MnKTtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rU3R5bGUgPSBHUy5nZXRTdHlsZVN0cmluZyhvTGlua1N0eWxlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rSGVpZ2h0ID0gdGhpcy5nZXRTaW5nbGVMaW5lSGVpZ2h0KG9MaW5rU3R5bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzaG93T0tCdXR0b24gPSAhZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0VHJ1ZShwWydoaWRlT0tCdXR0b24nXSkgJiYgaW50ZXJuYWxzWydpc1BvcHVwJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgb2tCdXR0b25IZWlnaHQgPSBzaG93T0tCdXR0b24gPyAzMCA6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pcyB0aGVyZSBhIGZvb3Rlcj9cclxuICAgICAgICAgICAgICAgIHZhciBoaWRlR2lneWFCcmFuZGluZyA9IGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUocFsnaGlkZUdpZ3lhJ10pIHx8IGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUocFsnaGlkZUdpZ3lhTGluayddKTtcclxuICAgICAgICAgICAgICAgIHZhciBzaG93R2lneWFCcmFuZGluZyA9ICFoaWRlR2lneWFCcmFuZGluZztcclxuICAgICAgICAgICAgICAgIHZhciBzaG93VGVybXMgPSAhKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHBbJ3Nob3dUZXJtc0xpbmsnXSkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNob3dGb290ZXIgPSAoc2hvd1Rlcm1zIHx8IHNob3dHaWd5YUJyYW5kaW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9vdGVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvb3RlckhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd0Zvb3Rlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIEZvb3RlciBIVE1MXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnRCb3R0b21MaW5rSFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG93VGVybXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEJvdHRvbUxpbmtIVE1MID0gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3LmdpZ3lhLmNvbS90ZXJtcy1vZi1zZXJ2aWNlL1wiIHN0eWxlPVwiJyArIGxpbmtTdHlsZSArICc7cGFkZGluZy1yaWdodDo1cHg7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC1zaXplOjExcHhcIj4nICsgZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoXCIkdGVybXNcIiwgdGhpcy5waXQpICsgJzwvYT4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJpZ2h0Qm90dG9tTGlua0hUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0dpZ3lhQnJhbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRCb3R0b21MaW5rSFRNTCArPSAnPHNwYW4gb25jbGljaz1cIndpbmRvdy5vcGVuKFxcJ2h0dHA6Ly93d3cuZ2lneWEuY29tXFwnKVwiIHN0eWxlPVwiY29sb3I6IzAwNTk5Nztmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTFweDtjdXJzb3I6cG9pbnRlclwiPjxzcGFuIHN0eWxlPVwiY29sb3I6IzgyODI4Mjtmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTFweDtjdXJzb3I6cG9pbnRlclwiPlNvY2lhbCBieSA8L3NwYW4+R2lneWE8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rc1dpZHRoID0gZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KGxlZnRCb3R0b21MaW5rSFRNTCkudyArIGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dChyaWdodEJvdHRvbUxpbmtIVE1MKS53O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rc1dpZHRoID4gdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodEJvdHRvbUxpbmtIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzV2lkdGggPSBnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQubWVhc3VyZVRleHQobGVmdEJvdHRvbUxpbmtIVE1MKS53O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHNob3dUZXJtcyB8fCBzaG93R2lneWFCcmFuZGluZykgJiYgKGxpbmtzV2lkdGggPCB3KSAmJiAob0xpbmtTdHlsZS5jb2xvci50b0xvd2VyQ2FzZSgpICE9ICd0cmFuc3BhcmVudCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3RlckhUTUwgPSAoJzxkaXYgc3R5bGU9XCJwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjVweDtwYWRkaW5nLWJvdHRvbToycHhcIj48dGFibGUgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgc3R5bGU9XCJ3aWR0aDonICsgKHcgLSAxMCkgKyAncHg7bWFyZ2luOjBweDtcIj48dHI+PHRkIGFsaWduPVwibGVmdFwiPicgKyBsZWZ0Qm90dG9tTGlua0hUTUwgKyAnPC90ZD48dGQgYWxpZ249XCJyaWdodFwiIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDt3aGl0ZS1zcGFjZTpub3dyYXA7XCI+JyArIHJpZ2h0Qm90dG9tTGlua0hUTUwgKyAnPC90ZD48L3RyPjwvdGFibGU+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3RlckhlaWdodCA9IGxpbmtIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vV3JhcCBOZXR3b3JrcyBkaXZcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG92ZXJmbG93U3R5bGUgPSAnb3ZlcmZsb3cteTphdXRvO292ZXJmbG93LXg6aGlkZGVuOyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50SGVpZ2h0U3R5bGUgPSAnaGVpZ2h0OicgKyBwWydoZWlnaHQnXSArICdweDsnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcE1hcmdpbiA9IDM7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV0d29ya3NIZWlnaHRTdHlsZSA9ICdoZWlnaHQ6JyArIChwWydoZWlnaHQnXSAtIGZvb3RlckhlaWdodCAtIHRvcE1hcmdpbiAtIDUpICsgJ3B4OydcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocFsnY29udGFpbmVySUQnXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc01vYmlsZSkgeyAvL29uIG1vYmlsZSBpZ25vcmUgaGVpZ2h0IGxpbWl0cyBhbmQgbm8gc2Nyb2xsLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRIZWlnaHRTdHlsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93U3R5bGUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBuZXR3b3Jrc0hlaWdodFN0eWxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wTWFyZ2luID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGludGVybmFsc1snaXNQb3B1cCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wTWFyZ2luID0gMTM7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya3NIZWlnaHRTdHlsZSA9ICdoZWlnaHQ6JyArIChwWydoZWlnaHQnXSAtIGZvb3RlckhlaWdodCAtIG9rQnV0dG9uSGVpZ2h0IC0gdG9wTWFyZ2luIC0gNSkgKyAncHg7JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goJzxkaXYgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT1cIndpZHRoOicgKyBwWyd3aWR0aCddICsgJ3B4OycgKyBjb21wb25lbnRIZWlnaHRTdHlsZSArIGJnU3R5bGUgKyAnXCIgPicpOyAvLyBtYWluIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgaWYgKHRvcE1hcmdpbiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUwucHVzaCgnPGRpdiBzdHlsZT1cImhlaWdodDonICsgdG9wTWFyZ2luICsgJ3B4XCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhckhUTUwucHVzaCgnPGRpdiBzdHlsZT1cIndpZHRoOicgKyAocFsnd2lkdGgnXSAtIDIgKiAxMCkgKyAncHg7JyArIG5ldHdvcmtzSGVpZ2h0U3R5bGUgKyBvdmVyZmxvd1N0eWxlICsgbGlzdGJveEJnU3R5bGUgKyAnXCIgPicpO1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MLnB1c2gobmV0d29ya3NIVE1MLmpvaW4obmV0d29ya1NlcGVyYXRvckhUTUwpKTtcclxuICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCc8L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd09LQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoXCIkb2tfQnV0dG9uX1RlbXBsYXRlXCIsIHRoaXMucGl0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhckhUTUwucHVzaChmb290ZXJIVE1MKTtcclxuICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKCc8L2Rpdj4nKTsgLy8gbWFpbiBjb250YWluZXJcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGggPSBhckhUTUwuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYXJIVE1MLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaXNFdmVudCkgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnbG9hZCcsIGNvbnRhaW5lcklEOiBwWydjb250YWluZXJJRCddIH0sIHApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvKlxyXG5cdFx0XHRcdGNvbnRhaW5lci5zdHlsZS53aWR0aD0nJytwLncrJ3B4JztcclxuXHRcdFx0XHRjb250YWluZXIuc3R5bGUuaGVpZ2h0PScnK3AuaCsncHgnO1xyXG5cdFx0XHRcdCovXHJcblxyXG4gICAgICAgICAgICAgICAgLy90aGlzLm1vZHVsZXNbY29udGFpbmVySURdLnBhZ2VzPXBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnVwZGF0ZVBhZ2UoY29udGFpbmVySUQpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmlkZXJBcHBzTGlua3M6IHtcclxuICAgICAgICAgICAgICAgIGZhY2Vib29rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zZXR0aW5ncz90YWI9YXBwbGljYXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICB0d2l0dGVyOiBcImh0dHBzOi8vdHdpdHRlci5jb20vc2V0dGluZ3MvYXBwbGljYXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2VjdXJlL3NldHRpbmdzP3VzZXJBZ3JlZT0mZ29iYWNrPSUyRW5hc18qMV8qMV8qMVwiLFxyXG4gICAgICAgICAgICAgICAgZ29vZ2xlcGx1czogXCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbS91LzAvYXBwc1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2VuZ2VyOiBcImh0dHBzOi8vYWNjb3VudC5saXZlLmNvbS9jb25zZW50L01hbmFnZVwiLFxyXG4gICAgICAgICAgICAgICAgeWFob286IFwiaHR0cHM6Ly9hcGkubG9naW4ueWFob28uY29tL1dTTG9naW4vVjEvdW5saW5rXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGl0OiB7ICAvLyBwbHVnaW4gVGVtcGxhdGVzLCBUZXh0cyAmIEZyYWdtZW50c1xyXG5cclxuICAgICAgICAgICAgICAgIEFOWTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBibG5BbnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLktFWV9FWElTVFMoYXJndW1lbnRzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleU9yVmFsID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLktFWV9FWElTVFMoa2V5T3JWYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnICsgZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoJyQnICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlPclZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0LCBFTFNFOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0ICAgIHZhciBibG5BbnkgPSBmYWxzZTtcclxuXHRcdFx0XHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gYXJndW1lbnRzLmxlbmd0aCAtIDM7IGkrKykge1xyXG5cdFx0XHRcdCAgICAgICAgaWYgKCgnJyArIGFyZ3VtZW50c1tpXSkubGVuZ3RoID4gMCkgeyByZXR1cm4gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAyXSB9XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgcmV0dXJuIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCwgS0VZX0VYSVNUUzogZnVuY3Rpb24gKGtleSwgbWF5QmVFbXB0eSkge1xyXG5cdFx0XHRcdCAgICBrZXlwYXJ0cyA9IGtleS5zcGxpdCgnLicpO1xyXG5cdFx0XHRcdCAgICBwZnggPSAnJztcclxuXHRcdFx0XHQgICAgdmFyIG8gPSB0aGlzO1xyXG5cdFx0XHRcdCAgICBmb3IgKHZhciBpID0gMDsgKGkgPCBrZXlwYXJ0cy5sZW5ndGgpICYmIChvICE9IG51bGwpIDsgaSsrKSB7XHJcblx0XHRcdFx0ICAgICAgICB0cnkge1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHBmeCA9IHBmeCArIGtleXBhcnRzW2ldO1xyXG5cdFx0XHRcdCAgICAgICAgICAgIG8gPSBvW2tleXBhcnRzW2ldXTtcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHQgICAgICAgIGNhdGNoIChlKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgbyA9IG51bGw7XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgcmV0dXJuIChvICE9IG51bGwpICYmIChvICE9ICcnIHx8IG1heUJlRW1wdHkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQsIElGREVGRUxTRTogZnVuY3Rpb24gKGtleSwgdjFrZXksIHYya2V5LCBtYXlCZUVtcHR5KSB7XHJcblx0XHRcdFx0ICAgIGlmIChtYXlCZUVtcHR5ID09IG51bGwpIG1heUJlRW1wdHkgPSB0cnVlO1xyXG5cdFx0XHRcdCAgICBpZiAodGhpcy5LRVlfRVhJU1RTKGtleSwgbWF5QmVFbXB0eSkpIHtcclxuXHRcdFx0XHQgICAgICAgIHJldHVybiBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCgnJCcgKyB2MWtleSwgdGhpcyk7XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgZWxzZSB7XHJcblx0XHRcdFx0ICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoJyQnICsgdjJrZXksIHRoaXMpO1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCwgSUZFUUVMU0U6IGZ1bmN0aW9uIChleHByMSwgZXhwcjIsIHYxLCB2Mikge1xyXG5cdFx0XHRcdCAgICBpZiAoZXhwcjEgPT0gZXhwcjIpIHJldHVybiB2MTsgZWxzZSByZXR1cm4gdjI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCwgSUVPTkxZOiBmdW5jdGlvbiAoa2V5T3JWYWwpIHtcclxuXHRcdFx0XHQgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgIT0gLTEpIHtcclxuXHRcdFx0XHQgICAgICAgIGlmICh0aGlzLktFWV9FWElTVFMoa2V5T3JWYWwpKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgcmV0dXJuICcnICsgZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoJyQnICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSwgdGhpcyk7XHJcblx0XHRcdFx0ICAgICAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHJldHVybiBrZXlPclZhbDtcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICBlbHNlIHJldHVybiAnJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCwgVDogZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGxcclxuXHJcblx0XHRcdFx0LCBCVUlMRENTU1BST1A6IGZ1bmN0aW9uIChzdHlsZU5hbWUsIGNsYXNzTmFtZSwgc3VmZml4LCBpbmhlcml0KSB7XHJcblx0XHRcdFx0ICAgIHZhciBuZXdWYWwgPSBudWxsO1xyXG5cdFx0XHRcdCAgICBpZiAobnVsbCAhPSAobmV3VmFsID0gdGhpc1tjbGFzc05hbWUgKyBzdWZmaXhdKSkge1xyXG5cdFx0XHRcdCAgICAgICAgcmV0dXJuIHN0eWxlTmFtZSArICgoc3R5bGVOYW1lLmxlbmd0aCA+IDApID8gJzonIDogJycpICsgbmV3VmFsICsgJzsnXHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgZWxzZSBpZiAoaW5oZXJpdCkge1xyXG5cdFx0XHRcdCAgICAgICAgaWYgKHN0eWxlTmFtZSA9PSAnZm9udC1zaXplJykge1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHJldHVybiBzdHlsZU5hbWUgKyAnOjFlbTsnXHJcblx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0ICAgICAgICBlbHNlIHtcclxuXHRcdFx0XHQgICAgICAgICAgICByZXR1cm4gc3R5bGVOYW1lICsgJzppbmhlcml0OydcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICBlbHNlIHtcclxuXHRcdFx0XHQgICAgICAgIHJldHVybiAnJztcclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LCBCVUlMRENTUzogZnVuY3Rpb24gKGNsYXNzTmFtZSwgdGFnTmFtZSkge1xyXG5cdFx0XHRcdCAgICB2YXIgdXNlSW5oZXJpdCA9ICgnLHRhYmxlLHRyLHRkLGRpdiwnLmluZGV4T2YoJywnICsgdGFnTmFtZS50b0xvd2VyQ2FzZSgpICsgJywnKSA+IC0xKTtcclxuXHRcdFx0XHQgICAgdmFyIHMgPSBbXHJcblx0XHRcdFx0XHRcdHRoaXMuQlVJTERDU1NQUk9QKCdmb250LWZhbWlseScsIGNsYXNzTmFtZSwgJ0ZvbnRGYW1pbHknLCB1c2VJbmhlcml0KSxcclxuXHRcdFx0XHRcdFx0dGhpcy5CVUlMRENTU1BST1AoJ2ZvbnQtdmFyaWFudCcsIGNsYXNzTmFtZSwgJ0ZvbnRWYXJpYW50JywgdXNlSW5oZXJpdCksXHJcblx0XHRcdFx0XHRcdHRoaXMuQlVJTERDU1NQUk9QKCdmb250LXdlaWdodCcsIGNsYXNzTmFtZSwgJ0ZvbnRXZWlnaHQnLCB1c2VJbmhlcml0KSxcclxuXHRcdFx0XHRcdFx0dGhpcy5CVUlMRENTU1BST1AoJ2ZvbnQtc2l6ZScsIGNsYXNzTmFtZSwgJ0ZvbnRTaXplJywgdXNlSW5oZXJpdCksXHJcblx0XHRcdFx0XHRcdHRoaXMuQlVJTERDU1NQUk9QKCdmb250LXN0eWxlJywgY2xhc3NOYW1lLCAnRm9udFN0eWxlJywgdXNlSW5oZXJpdCksXHJcblx0XHRcdFx0XHRcdHRoaXMuQlVJTERDU1NQUk9QKCd0ZXh0LWRlY29yYXRpb24nLCBjbGFzc05hbWUsICdUZXh0RGVjb3JhdGlvbicsIHVzZUluaGVyaXQpLFxyXG5cdFx0XHRcdFx0XHR0aGlzLkJVSUxEQ1NTUFJPUCgnY29sb3InLCBjbGFzc05hbWUsICdDb2xvcicsIHVzZUluaGVyaXQpLFxyXG5cdFx0XHRcdFx0XHR0aGlzLkJVSUxEQ1NTUFJPUCgnYmFja2dyb3VuZC1jb2xvcicsIGNsYXNzTmFtZSwgJ0JhY2tncm91bmRDb2xvcicsIGZhbHNlKSxcclxuXHRcdFx0XHRcdFx0dGhpcy5CVUlMRENTU1BST1AoJ2JvcmRlcicsIGNsYXNzTmFtZSwgJ0JvcmRlcicsIGZhbHNlKSxcclxuXHRcdFx0XHRcdFx0dGhpcy5CVUlMRENTU1BST1AoJycsIGNsYXNzTmFtZSwgJ0NTUycsIGZhbHNlKSxcclxuXHRcdFx0XHRcdC8vKHRoaXNbY2xhc3NOYW1lKydDU1MnXT8oJycrdGhpcy50cGwoY2xhc3NOYW1lKydDU1MnKSsnOycpOicnKSxcclxuXHRcdFx0XHRcdFx0JydcclxuXHRcdFx0XHQgICAgXS5qb2luKCcnKTtcclxuXHRcdFx0XHQgICAgcmV0dXJuIHM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQsIFZTUEFDRTogZnVuY3Rpb24gKG4pIHsgcmV0dXJuICc8ZGl2IHN0eWxlPVwiaGVpZ2h0OicgKyBuICsgJ3B4O292ZXJmbG93OmhpZGRlbjtcIj48L2Rpdj4nIH1cclxuXHRcdFx0XHQsIEhTUEFDRTogZnVuY3Rpb24gKG4pIHsgcmV0dXJuICc8c3BhbiBzdHlsZT1cImhlaWdodDoxcHg7d2lkdGg6JyArIG4gKyAncHg7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1wiPjwvc3Bhbj4nIH1cclxuXHJcblx0XHRcdFx0LCBIQk9YU1RBUlQ6IGZ1bmN0aW9uIChuLCB3KSB7IHJldHVybiAnPHRhYmxlIGNsYXNzPVwiZ2lnLWVkaXQtcHJvdmlkZXJSb3dcIiBzdHlsZT1cImZvbnQtc2l6ZToxZW07Zm9udC13ZWlnaHQ6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC12YXJpYW50OmluaGVyaXQ7Y29sb3I6aW5oZXJpdDt3aWR0aDo5OSVcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj48dHI+PHRkIHN0eWxlPVwid2lkdGg6JyArIG4gKyAncHg7XCI+JEhTUEFDRShcXCcnICsgbiArICdcXCcpPC90ZD48dGQnICsgKCh3ICE9IG51bGwpID8gKCcgc3R5bGU9XCJ3aWR0aDonICsgdyArICdweDtcIicpIDogJycpICsgJz4nIH1cclxuXHRcdFx0XHQsIEhCT1hTVEFSVE5XOiBmdW5jdGlvbiAobiwgdykgeyByZXR1cm4gJzx0YWJsZSBjbGFzcz1cImdpZy1lZGl0LXByb3ZpZGVyUm93XCIgc3R5bGU9XCJmb250LXNpemU6MWVtO2ZvbnQtd2VpZ2h0OmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtdmFyaWFudDppbmhlcml0O2NvbG9yOmluaGVyaXQ7d2lkdGg6OTklXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCI+PHRyPjx0ZCBzdHlsZT1cIndpZHRoOicgKyBuICsgJ3B4O1wiPiRIU1BBQ0UoXFwnJyArIG4gKyAnXFwnKTwvdGQ+PHRkIHN0eWxlPVwid2hpdGUtc3BhY2U6bm93cmFwOycgKyAoKHcgIT0gbnVsbCkgPyAoJ3dpZHRoOicgKyB3ICsgJ3B4OycpIDogJycpICsgJ1wiPicgfVxyXG5cdFx0XHRcdCwgSEJPWENFTEw6IGZ1bmN0aW9uIChuLCB3KSB7IHJldHVybiAnPC90ZD48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6JyArIG4gKyAncHg7XCI+JEhTUEFDRShcXCcnICsgbiArICdcXCcpPC90ZD48dGQnICsgKCh3ICE9IG51bGwpID8gKCcgc3R5bGU9XCJ3aWR0aDonICsgdyArICdweDtcIicpIDogJycpICsgJz4nIH1cclxuXHRcdFx0XHQsIEhCT1hDRUxMTlc6IGZ1bmN0aW9uIChuLCB3KSB7IHJldHVybiAnPC90ZD48dGQgc3R5bGU9XCJ3aWR0aDonICsgbiArICdweDtcIj4kSFNQQUNFKFxcJycgKyBuICsgJ1xcJyk8L3RkPjx0ZCBzdHlsZT1cIndoaXRlLXNwYWNlOm5vd3JhcDsnICsgKCh3ICE9IG51bGwpID8gKCd3aWR0aDonICsgdyArICdweDsnKSA6ICcnKSArICdcIj4nIH1cclxuXHRcdFx0XHQsIEhCT1hFTkQ6IGZ1bmN0aW9uIChuKSB7IHJldHVybiAnPC90ZD48dGQgc3R5bGU9XCJ3aWR0aDonICsgbiArICdweDtcIj4kSFNQQUNFKFxcJycgKyBuICsgJ1xcJyk8L3RkPjwvdHI+PC90YWJsZT4nIH1cclxuICAgICAgICAgICAgICAgIC8vcGl0LnBcclxuXHRcdFx0XHQsIFRFWFQ6IGZ1bmN0aW9uICh0ZXh0S2V5LCByZXBsYWNlU3RyLCB3aXRoU3RyKSB7XHJcblx0XHRcdFx0ICAgIHJldHVybiBnaWd5YS5wbHVnaW5VdGlscy5sYW5nLmdldExvY2FsaXplZFRleHQoJ2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmVkaXQuanMnLCB0ZXh0S2V5LCB0aGlzLnAubGFuZywgcmVwbGFjZVN0ciwgd2l0aFN0cik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCwgVUlDb25maWc6ICc8Y29uZmlnPjxib2R5Pjxjb250cm9scyBjb2xvcj1cIiRkZWZhdWx0Q29sb3JcIj48L2NvbnRyb2xzPjx0ZXh0cyBjb2xvcj1cIiRkZWZhdWx0Q29sb3JcIj48bGlua3MgY29sb3I9XCIkbGlua2VkSXRlbVRpdGxlQ29sb3JcIj48L2xpbmtzPjwvdGV4dHM+IDxiYWNrZ3JvdW5kIGZyYW1lLWNvbG9yPVwiVHJhbnNwYXJlbnRcIj48L2JhY2tncm91bmQ+PC9ib2R5PjwvY29uZmlnPidcclxuXHJcblx0XHRcdFx0LCBDb25uZWN0ZWROZXR3b3JrVGVtcGxhdGU6ICckVlNQQUNFKDUpJEhCT1hTVEFSVCgxMCk8aW1nIHNyYz1cIiR7aW1hZ2VCYXNlVVJMfS8ke3Byb3ZpZGVyLm5hbWV9LnBuZ1wiIHRpdGxlPVwiJHRpdGxlXCIgYWx0PVwiJHRpdGxlXCIgc3R5bGU9XCJoZWlnaHQ6MThweDt3aWR0aDoxOHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtcIiAgLz4kSEJPWENFTExOVygxMCk8c3BhbiBzdHlsZT1cIiRjc3NUZXh0U3R5bGU7Zm9udC13ZWlnaHQ6Ym9sZDtcIj4ke2lkZW50aXR5Lm5pY2tuYW1lfTwvc3Bhbj4kSEJPWENFTEwoMTApPC90ZD48dGQgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+JiMxNjA7PC90ZD48dGQ+JEhCT1hFTkQoMTApJyArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgJyRWU1BBQ0UoNSkkSEJPWFNUQVJUTlcoMTApJGl0ZW1faW1hZ2UkSEJPWENFTEwoMTApPC90ZD48dGQgdmFsaWduPVwidG9wXCIgc3R5bGU9XCJ3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1hbGlnbjpsZWZ0XCI+JElGREVGRUxTRShcXCdpZGVudGl0eS5jb3VudHJ5XFwnLFxcJ2NvdW50cnlUZW1wbGF0ZVxcJyxcXCdlbXB0eVN0cmluZ1xcJyxmYWxzZSkkSUZERUZFTFNFKFxcJ2lkZW50aXR5LmNpdHlcXCcsXFwnY2l0eVRlbXBsYXRlXFwnLFxcJ2VtcHR5U3RyaW5nXFwnLGZhbHNlKSRkb2JUZW1wbGF0ZSgpPHNwYW4gc3R5bGU9XCIkY3NzTGlua1N0eWxlO2N1cnNvcjpwb2ludGVyO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XCIgb25jbGljaz1cIiRvbkRpc2Nvbm5lY3RDbGlja2VkXCIgZ2lnaWQ9XCIke3Byb3ZpZGVyLm5hbWV9XCIgPiRkaXNjb25uZWN0PC9zcGFuPjwvdGQ+PHRkIHN0eWxlPVwid2lkdGg6OTklXCI+JiMxNjA7JE15QXBwc1RlbXBsYXRlPC90ZD48dGQ+JEhCT1hFTkQoMTApJFZTUEFDRSg1KSdcclxuXHRcdFx0XHQsIGRpc2Nvbm5lY3Q6ICckVEVYVChcXCdkaXNjb25uZWN0XFwnKSdcclxuXHRcdFx0XHQsIGNvbm5lY3Q6ICckVEVYVChcXCdjb25uZWN0XFwnKSdcclxuXHRcdFx0XHQsIERpc2Nvbm5lY3RlZE5ldHdvcmtUZW1wbGF0ZTogJyRWU1BBQ0UoNSkkSEJPWFNUQVJUKDEwLDE4KTxpbWcgc3JjPVwiJHtpbWFnZUJhc2VVUkx9LyR7cHJvdmlkZXIubmFtZX0ucG5nXCIgdGl0bGU9XCIkdGl0bGVcIiBhbHQ9XCIkdGl0bGVcIiBzdHlsZT1cImhlaWdodDoxOHB4O3dpZHRoOjE4cHg7XCIvPiRIQk9YQ0VMTCgxMCk8L3RkPjx0ZCB2YWxpZ249XCJ0b3BcIiBzdHlsZT1cIndoaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LWFsaWduOmxlZnRcIj48c3BhbiBzdHlsZT1cIiRjc3NMaW5rU3R5bGU7Y3Vyc29yOnBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtmbG9hdDpsZWZ0O1wiIG9uY2xpY2s9XCIkb25Db25uZWN0Q2xpY2tlZFwiIGdpZ2lkPVwiJHtwcm92aWRlci5uYW1lfVwiID4kY29ubmVjdDwvc3Bhbj4kTXlBcHBzVGVtcGxhdGUkSEJPWEVORCgxMCkkVlNQQUNFKDUpJ1xyXG4gICAgICAgICAgICAgICAgLCBNeUFwcHNUZW1wbGF0ZTogJzxhIGhyZWY9XCIke3Byb3ZpZGVyLmFwcHNMaW5rfVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwiZmxvYXQ6cmlnaHQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7XCI+PHNwYW4gc3R5bGU9XCIkY3NzTGlua1N0eWxlO2N1cnNvcjpwb2ludGVyO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XCIgZ2lnaWQ9XCIke3Byb3ZpZGVyLm5hbWV9XCIgPiRteWFwcHM8L3NwYW4+PC9hPidcclxuICAgICAgICAgICAgICAgICwgbXlhcHBzOiAnJFRFWFQoXFwnbXlfYXBwc1xcJyknXHJcblx0XHRcdFx0LCBzZXBhcmF0b3JfaXRlbV9UZW1wbGF0ZTogJzxkaXYgc3R5bGU9XCJoZWlnaHQ6NXB4O292ZXJmbG93OmhpZGRlbjtcIj4kVlNQQUNFKDIpPGRpdiBzdHlsZT1cImhlaWdodDoxcHg7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6JHNlcGFyYXRvckNvbG9yO3dpZHRoOjEwMCVcIiA+PC9kaXY+JFZTUEFDRSgyKTwvZGl2PidcclxuXHRcdFx0XHQsIGNvdW50cnk6ICckVEVYVChcXCdjb3VudHJ5XFwnKSdcclxuXHRcdFx0XHQsIGNvdW50cnlUZW1wbGF0ZTogJzxkaXYgc3R5bGU9XCIkY3NzVGV4dFN0eWxlXCI+JGNvdW50cnkgJHtpZGVudGl0eS5jb3VudHJ5fTwvZGl2PidcclxuXHRcdFx0XHQsIGNpdHk6ICckVEVYVChcXCdjaXR5XFwnKSdcclxuXHRcdFx0XHQsIGNpdHlUZW1wbGF0ZTogJzxkaXYgc3R5bGU9XCIkY3NzVGV4dFN0eWxlXCI+JGNpdHkgJHtpZGVudGl0eS5jaXR5fTwvZGl2PidcclxuXHRcdFx0XHQsIGRhdGVfb2ZfYmlydGg6ICckVEVYVChcXCdkYXRlX29mX2JpcnRoXFwnKSdcclxuXHRcdFx0XHQsIGRvYlRlbXBsYXRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdCAgICBpZiAodGhpcy5pZGVudGl0eS5iaXJ0aFllYXIgJiYgdGhpcy5pZGVudGl0eS5iaXJ0aE1vbnRoICYmIHRoaXMuaWRlbnRpdHkuYmlydGhEYXkpIHtcclxuXHRcdFx0XHQgICAgICAgIHZhciB5ZWFyID0gdGhpcy5pZGVudGl0eS5iaXJ0aFllYXI7XHJcblx0XHRcdFx0ICAgICAgICB2YXIgbW9udGggPSB0aGlzLmlkZW50aXR5LmJpcnRoTW9udGg7XHJcblx0XHRcdFx0ICAgICAgICB2YXIgZGF5ID0gdGhpcy5pZGVudGl0eS5iaXJ0aERheTtcclxuXHRcdFx0XHQgICAgICAgIGlmICgheWVhcikgeWVhciA9ICc/Pyc7XHJcblx0XHRcdFx0ICAgICAgICBpZiAoIW1vbnRoKSBtb250aCA9ICc/Pyc7XHJcblx0XHRcdFx0ICAgICAgICBpZiAoIWRheSkgZGF5ID0gJz8/JztcclxuXHRcdFx0XHQgICAgICAgIHJldHVybiAnPGRpdiBzdHlsZT1cIicgKyB0aGlzLmNzc1RleHRTdHlsZSArICdcIj4ke2RhdGVfb2ZfYmlydGh9ICcgKyBkYXkgKyAnLycgKyBtb250aCArICcvJyArIHllYXIgKyAnPC9kaXY+JztcclxuXHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgZWxzZSB7XHJcblx0XHRcdFx0ICAgICAgICByZXR1cm4gJyc7XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LCBpdGVtSW1hZ2VTaXplOiAnNDUnXHJcblx0XHRcdFx0LCBpdGVtX2ltYWdlOiAnPGRpdiBzdHlsZT1cIm92ZXJmbG93OmhpZGRlbjt3aWR0aDoke2l0ZW1JbWFnZVNpemV9cHg7aGVpZ2h0OiR7aXRlbUltYWdlU2l6ZX1weDtcIj48dGFibGUgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDoxMDAlXCI+PHRyPjx0ZCBhbGlnbj1cImNlbnRlclwiIHZhbGlnbj1cIm1pZGRsZVwiPjxpbWcgYWx0PVwiXCIgYWxpZ249XCJjZW50ZXJcIiB2YWxpZ249XCJtaWRkbGVcIiBvbmxvYWQ9XCJpZiAodGhpcy5yZXNpemVkIT0xKSB7dGhpcy5yZXNpemVkPTE7aWYgKHRoaXMud2lkdGg+JHtpdGVtSW1hZ2VTaXplfSB8fCB0aGlzLmhlaWdodD4ke2l0ZW1JbWFnZVNpemV9KSB7aWYgKCB0aGlzLndpZHRoPnRoaXMuaGVpZ2h0KSB7dGhpcy53aWR0aD0ke2l0ZW1JbWFnZVNpemV9fSBlbHNlIHt0aGlzLmhlaWdodD0ke2l0ZW1JbWFnZVNpemV9fX07fVwiIHNyYz1cIiRnZXRQaG90b1VSTCgpXCIgb25lcnJvcj1cImlmICh0aGlzLmhhZEVycm9yIT0xKSB7dGhpcy5oYWRFcnJvcj0xO3RoaXMuc3JjPVxcJyRkZWZhdWx0UGhvdG9VUkxcXCc7fVwiIC8+PC90ZD48L3RyPjwvdGFibGU+PC9kaXY+J1xyXG5cdFx0XHRcdCwgZ2V0UGhvdG9VUkw6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQgICAgdmFyIHVybCA9IHRoaXMuaWRlbnRpdHkudGh1bWJuYWlsVVJMO1xyXG5cdFx0XHRcdCAgICBpZiAoIXVybCkgdXJsID0gdGhpcy5pZGVudGl0eS5waG90b1VSTDtcclxuXHRcdFx0XHQgICAgaWYgKCF1cmwpIHVybCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZGVmYXVsdFBob3RvVVJMLCB0aGlzKTtcclxuXHRcdFx0XHQgICAgcmV0dXJuIGdpZ3lhLmdsb2JhbC5nZXRQaG90b1VSTCh1cmwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQsIG9rOiAnJFRFWFQoXFwnb2tcXCcpJ1xyXG5cdFx0XHRcdCwgb2tfQnV0dG9uX1RlbXBsYXRlOiAnJFZTUEFDRSg1KTxkaXYgYWxpZ249XCJjZW50ZXJcIj48aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiJG9rXCIgc3R5bGU9XCJwYWRkaW5nOjAgNnB4OyB3aWR0aDo3MHB4O2ZvbnQtZmFtaWx5OmFyaWFsO2ZvbnQtc2l6ZToxMXB4O1wiIG9uY2xpY2s9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX2Nsb3NlQ29tcG9uZW50KFxcJyRpbnRlcm5hbHMucmlkXFwnLCB0cnVlKTtcIiAvPjwvZGl2PidcclxuXHRcdFx0XHQsIGRlZmF1bHRQaG90b1VSTDogJyRpbWFnZUJhc2VVUkwvRGVmYXVsdFVzZXJJbWFnZV80NXB4LnBuZydcclxuXHRcdFx0XHQsIHNlcGFyYXRvckNvbG9yOiAnI2U2ZTZlNidcclxuXHJcblx0XHRcdFx0LCB0ZXJtczogJyRURVhUKFxcJ3Rlcm1zXFwnKSdcclxuXHRcdFx0XHQsIGVtcHR5U3RyaW5nOiAnJ1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHRcdFx0LCBnZXRDb25uZXRlZE5ldHdvcmtIVE1MOiBmdW5jdGlvbiAocHJvdmlkZXIsIGlkZW50aXR5LCBtb2R1bGVJRCkge1xyXG5cdFx0XHQgICAgdmFyIHRkID0ge307XHJcblx0XHRcdCAgICB2YXIgYXR0cjtcclxuXHRcdFx0ICAgIGZvciAoYXR0ciBpbiB0aGlzLnBpdCkgeyB0ZFthdHRyXSA9IHRoaXMucGl0W2F0dHJdIH07XHJcblx0XHRcdCAgICB0ZC5wcm92aWRlciA9IHByb3ZpZGVyO1xyXG5cdFx0XHQgICAgdGQuaWRlbnRpdHkgPSBpZGVudGl0eTtcclxuXHJcblx0XHRcdCAgICBpZiAodGhpcy5wcm92aWRlckFwcHNMaW5rc1twcm92aWRlci5uYW1lXSkge1xyXG5cdFx0XHQgICAgICAgIHRkLnByb3ZpZGVyLmFwcHNMaW5rID0gdGhpcy5wcm92aWRlckFwcHNMaW5rc1twcm92aWRlci5uYW1lXTtcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0ICAgIGVsc2Uge1xyXG5cdFx0XHQgICAgICAgIHRkLk15QXBwc1RlbXBsYXRlID0gJyc7XHJcblx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHQgICAgaWYgKCFnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRGYWxzZSh0ZC5wLnNob3dUb29sdGlwcykpIHtcclxuXHRcdFx0ICAgICAgICB0ZC50aXRsZSA9IHByb3ZpZGVyLmRpc3BsYXlOYW1lO1xyXG5cdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgICAgICB0ZC50aXRsZSA9ICcnO1xyXG5cdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0ICAgIHRkLm9uRGlzY29ubmVjdENsaWNrZWQgPSAnZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuZWRpdC5vbkRpc2Nvbm5lY3RDbGlja2VkKFxcJycgKyBtb2R1bGVJRCArICdcXCcsXFwnJyArIHByb3ZpZGVyICsgJ1xcJyknO1xyXG5cdFx0XHQgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKFwiJENvbm5lY3RlZE5ldHdvcmtUZW1wbGF0ZVwiLCB0ZCk7XHJcblx0XHRcdH0sXHJcbiAgICAgICAgICAgIG9uQ29ubmVjdENsaWNrZWQ6IGZ1bmN0aW9uIChtb2R1bGVJRCwgcHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlEXTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5hZGRDb25uZWN0aW9uKG0uYywgeyBwcm92aWRlcjogcHJvdmlkZXIsIGluY2x1ZGVBbGxJZGVudGl0aWVzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRGlzY29ubmVjdENsaWNrZWQ6IGZ1bmN0aW9uIChtb2R1bGVJRCwgcHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlEXTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5yZW1vdmVDb25uZWN0aW9uKG0uYywgeyBwcm92aWRlcjogcHJvdmlkZXIgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0RGlzY29ubmV0ZWROZXR3b3JrSFRNTDogZnVuY3Rpb24gKHByb3ZpZGVyLCBtb2R1bGVJRCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRkID0ge307XHJcbiAgICAgICAgICAgICAgICB2YXIgYXR0cjtcclxuICAgICAgICAgICAgICAgIGZvciAoYXR0ciBpbiB0aGlzLnBpdCkgeyB0ZFthdHRyXSA9IHRoaXMucGl0W2F0dHJdIH07XHJcbiAgICAgICAgICAgICAgICB0ZC5wcm92aWRlciA9IHByb3ZpZGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3ZpZGVyQXBwc0xpbmtzW3Byb3ZpZGVyLm5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGQucHJvdmlkZXIuYXBwc0xpbmsgPSB0aGlzLnByb3ZpZGVyQXBwc0xpbmtzW3Byb3ZpZGVyLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGQuTXlBcHBzVGVtcGxhdGUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHRkLnAuc2hvd1Rvb2x0aXBzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRkLnRpdGxlID0gcHJvdmlkZXIuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRkLnRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGQub25Db25uZWN0Q2xpY2tlZCA9ICdnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5lZGl0Lm9uQ29ubmVjdENsaWNrZWQoXFwnJyArIG1vZHVsZUlEICsgJ1xcJyxcXCcnICsgcHJvdmlkZXIgKyAnXFwnKSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoXCIkRGlzY29ubmVjdGVkTmV0d29ya1RlbXBsYXRlXCIsIHRkKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0XHQsIGdldE5ldHdvcmtTZXBlcmF0b3JIVE1MOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCAgICB2YXIgdGQgPSB7fTtcclxuXHRcdFx0ICAgIHZhciBhdHRyO1xyXG5cdFx0XHQgICAgZm9yIChhdHRyIGluIHRoaXMucGl0KSB7IHRkW2F0dHJdID0gdGhpcy5waXRbYXR0cl0gfTtcclxuXHRcdFx0ICAgIHJldHVybiBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChcIiRzZXBhcmF0b3JfaXRlbV9UZW1wbGF0ZVwiLCB0ZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCwgcHJvY2Nlc3NvcjogZnVuY3Rpb24gKFByb3BlcnR5TmFtZSwgUHJvcGVydHlWYWx1ZSkge1xyXG5cdFx0XHQgICAgdmFyIGxjYXNlUHJvcGVydHlOYW1lID0gUHJvcGVydHlOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdCAgICB2YXIgbGFzdERhc2hJbmRleCA9IGxjYXNlUHJvcGVydHlOYW1lLmluZGV4T2YoJy0nKTtcclxuXHRcdFx0ICAgIGlmIChsYXN0RGFzaEluZGV4ICE9IC0xKSB7XHJcblx0XHRcdCAgICAgICAgbGNhc2VQcm9wZXJ0eU5hbWUgPSBsY2FzZVByb3BlcnR5TmFtZS5zdWJzdHJpbmcobGFzdERhc2hJbmRleCArIDEsIGxjYXNlUHJvcGVydHlOYW1lLmxlbmd0aCk7XHJcblx0XHRcdCAgICB9XHJcblx0XHRcdCAgICBzd2l0Y2ggKGxjYXNlUHJvcGVydHlOYW1lKSB7XHJcblx0XHRcdCAgICAgICAgY2FzZSAnYm9sZCc6XHJcblx0XHRcdCAgICAgICAgY2FzZSAnaXRhbGljJzpcclxuXHRcdFx0ICAgICAgICBjYXNlICd1bmRlcmxpbmUnOlxyXG5cdFx0XHQgICAgICAgICAgICByZXR1cm4gUHJvcGVydHlWYWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnO1xyXG5cdFx0XHQgICAgICAgIGNhc2UgJ3dpZHRoJzpcclxuXHRcdFx0ICAgICAgICBjYXNlICdoZWlnaHQnOlxyXG5cdFx0XHQgICAgICAgICAgICByZXR1cm4gUHJvcGVydHlWYWx1ZSA9IFByb3BlcnR5VmFsdWUucmVwbGFjZSgnJScsICcnKTtcclxuXHRcdFx0ICAgICAgICBjYXNlICdzaXplJzpcclxuXHRcdFx0ICAgICAgICAgICAgcmV0dXJuIFByb3BlcnR5VmFsdWUgPSBwYXJzZUludChQcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0ICAgICAgICBkZWZhdWx0OlxyXG5cdFx0XHQgICAgICAgICAgICByZXR1cm4gUHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0fSxcclxuICAgICAgICAgICAgcmVkcmF3OiBmdW5jdGlvbiAoY29udGFpbmVySUQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJRCkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySUQpLmlubmVySFRNTCAhPSAnJiMxNjA7Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW2NvbnRhaW5lcklEXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFZGl0Q29ubmVjdGlvbnNVSShtLmMsIG0ucCwgbS5pLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldFNpbmdsZUxpbmVIZWlnaHQ6IGZ1bmN0aW9uIChvU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQubWVhc3VyZVRleHQoJ1dnJywgb1N0eWxlKS5oICsgNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKlxyXG5cdFx0XHRzaG93V2hhdHNUaGlzOmZ1bmN0aW9uKGlkKXtcclxuXHRcdFx0dmFyIGVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKydfd2hhdHNUaGlzJyk7XHJcblx0XHRcdGlmIChlbCkge1xyXG5cdFx0XHR2YXIgY29udGFpbmVyPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRcdFx0dmFyIHBvcz1naWd5YS5nbG9iYWwuX0dldEVsZW1lbnRQb3MoY29udGFpbmVyKTtcclxuXHRcdFx0ZWwuc3R5bGUubGVmdD1wb3MubGVmdCsocGFyc2VJbnQoY29udGFpbmVyLnN0eWxlLndpZHRoKS1lbC5vZmZzZXRXaWR0aCkvMiArICdweCc7XHJcblx0XHRcdGVsLnN0eWxlLnRvcD1wb3MudG9wKyhwYXJzZUludChjb250YWluZXIuc3R5bGUuaGVpZ2h0KS1lbC5vZmZzZXRIZWlnaHQpLzIgKyAncHgnO1xyXG5cdFx0XHRlbC5zdHlsZS52aXNpYmlsaXR5PSd2aXNpYmxlJztcclxuXHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoaWRlV2hhdHNUaGlzOmZ1bmN0aW9uKGlkKXtcclxuXHRcdFx0dmFyIGVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKydfd2hhdHNUaGlzJyk7XHJcblx0XHRcdGlmIChlbCkge1xyXG5cdFx0XHRlbC5zdHlsZS52aXNpYmlsaXR5PSdoaWRkZW4nO1xyXG5cdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ki9cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9