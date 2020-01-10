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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.socialize.plugins.minishare.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.socialize.plugins.minishare.js":
/*!**************************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.minishare.js ***!
  \**************************************************************************/
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
	if (typeof _pi.minishare == 'undefined') {

		_pi.minishare = {
			modules: {},

			onChange: function (evt) {
				delete _pi.minishare.userInfo
			},
			TEXT: function (lang, textKey, replaceStr, withStr) {
			    return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.socialize.plugins.minishare.js', textKey, lang, replaceStr, withStr);
			},
			showMiniShareUI: function (c, p, internals) {
				internals.mini = true;
				this.showShareUI(c, p, internals);
			},
			showShareUI: function (c, p, internals) {
				var GS = window.gigya.services.socialize;
				var rid = internals['rid'];
				if (!internals.redraw) {
					var arProviders = GS.getProvidersByName(p['enabledProviders'] ? p['enabledProviders'] : (c['enabledProviders'] ? c['enabledProviders'] : '*'));
					arProviders = GS.hideProvidersByName(arProviders, p['disabledProviders'] ? p['disabledProviders'] : (c['disabledProviders'] ? c['disabledProviders'] : ''));
					arProviders = GS.getProvidersForRequiredCapabilities(arProviders, ['actions']);
					if (arProviders.length > 6
						&& (!window.gigya.utils.validation.isExplicitFalse(p['showMoreButton']) // true by default
							|| window.gigya.utils.validation.isExplicitTrue(p['showEmailButton']) // false by default
						)
						) arProviders = arProviders.splice(0, 6);

					internals['arProviders'] = arProviders;
					internals['moduleID'] = p['containerID'];

					for (var i = 0; i < internals['arProviders'].length; i++) {
						internals['arProviders'][i].context = {};
					}
				}

				var params = {
					callback: this.afterGetInfo,
					context: { This: this, conf: c, params: p, internals: internals }
				}
				if (p['autoShareActionID'] != null && (p['showAlwaysShare'] == 'checked' || p['showAlwaysShare'] == 'unchecked')) {
					params.settings = p['autoShareActionID'];
					params.group = 'gigyaShareSettings';
				}
				this.showMiniUI(c, p, internals);

				if (!internals.redraw) {
					window.gigya.events.dispatchForWidget({ eventName: 'load', containerID: p['containerID'] },p);
				}
				internals.redraw = false;

				if (_pi.minishare.userInfo) {
					_pi.minishare.userInfo.context = params.context;
					_pi.minishare.userInfo.requestParams = params;
					params.callback(_pi.minishare.userInfo);
				} else {
					window.gigya.services.socialize.getUserInfo(c, params);
				}
			},
			showBubble: function (m, text, rightPointer) {
				var divBubble = document.createElement('div');
				divBubble.id = m.i.moduleID + '_bubble';
				var pointerLeft;
				if (rightPointer) {
					pointerLeft = '99%';
				} else {
					pointerLeft = '5px';
				}
				divBubble.innerHTML = this.getBubbleHTML(text, pointerLeft);
				divBubble.style.position = 'absolute';
				document.getElementById(m.p.containerID).appendChild(divBubble);
				return divBubble;
			},
			showAlwaysBubble: function (moduleId) {
				var m = this.modules[moduleId];
				var divBubble = this.showBubble(m, this.TEXT(m.lang, 'always_share_to_selected_networks'), true);
				var container = document.getElementById(m.p.containerID);
				divBubble.style.top = (container.offsetHeight - 7 - divBubble.offsetHeight) + 'px';
				divBubble.style.left = (container.offsetWidth - 70 - divBubble.offsetWidth) + 'px';
			},
			showNeverBubble: function (moduleId) {
				var m = this.modules[moduleId];
				var divBubble = this.showBubble(m, this.TEXT(m.lang, 'never_show_this_dialog'), false);
				var container = document.getElementById(m.p.containerID);
				divBubble.style.top = (container.offsetHeight - 7 - divBubble.offsetHeight) + 'px';
				divBubble.style.left = '12px';
			},
			hideBubble: function (moduleId) {
				var divBubble = document.getElementById(moduleId + '_bubble');
				divBubble.parentNode.removeChild(divBubble);
			},
			getBubbleHTML: function (text, pointerLeft) {
			    var base = window.gigya._.getCdnResource('/gs/i/Share/Mini/Tooltip_');
				return [
					'<table role="presentation" cellspacing="0" cellpadding="0"><tr>',
					'<td style="width:6px;height:6px"><img src="', base, 'topLeft.png"></td><td style="border-top:1px solid #555555;background-color:#FFFFFF">&#160;</td><td style="width:6px"><img src="', base, 'topRight.png"></td></tr>',
					'<tr><td style="border-left:1px solid #555555;background-color:#FFFFFF">&#160;</td><td style="background-color:#FFFFFF"><div style="font-family:arial;font-size:11px;color:#555555;">', text, '</div></td><td style="border-right:1px solid #555555;background-color:#FFFFFF">&#160;</td></tr>',
					'<tr><td style="vertical-align:top"><img src="', base, 'bottomLeft.png"></td>',
						'<td><table role="presentation" style="width:100%;height:11px" cellspacing="0" cellpadding="0">',
							'<tr><td style="height:5px;background-color:#FFFFFF" colspan="3">&#160;</td></tr>',
							'<tr><td style="width:', pointerLeft, ';border-top:1px solid #555555">&#160;</td>',
							'<td style="width: 13px"><img src="', base, 'pointer.png"></td><td style="border-top:1px solid #555555">&#160;</td></tr></table>',
						'</td>',
					'<td style="vertical-align:top"><img src="', base, 'bottomRight.png"></td></tr></table>'
				].join('');
			},
			afterGetInfo: function (res) {
				var GS = window.gigya.services.socialize;

				var context = res.context;

				var This = _pi.minishare;


				var m = This.modules[context.internals.moduleID];
				if (m) {
					if (res.errorCode != 0) {
						window.gigya.events.dispatchErrorFromResponse(context.params, res);
						return;
					}
					var currentUserEmail = '';
					if (res.user && res.user.email) currentUserEmail = res.user.email;
					if (currentUserEmail) {
						var tbEmail = document.getElementById(context.internals.moduleID + '_tbYourEmail');
						if (tbEmail != null) tbEmail.value = currentUserEmail;
						document.cookie = '_gig_email=' + currentUserEmail + ';expires=Wed, 01 Jan 2020 12:00:00 GMT;path=/;'
					}
					if (res.settings) {
						var settings = res.settings[m.p['autoShareActionID']];
						if (settings && (!settings.expiration || settings.expiration > (new Date()).getTime())) {
							if (settings.neverShare) {
								This.closeShare(m.i.moduleID);
								return;
							}
							if (settings.alwaysShare) {
								m.i.neverRetry = true;
								This.publishToProviders(m.i.moduleID, settings.providers.split(','));
								return;
							}
						}
					}

					if (m.p['autoShareActionID'] != null && (m.p['showAlwaysShare'] == 'checked' || m.p['showAlwaysShare'] == 'unchecked')) {
						This.showShareCanvas(m);
					}

					var connected = false;

					if (res.user) {
						_pi.minishare.userInfo = res;
					}
					if (res.requestParams.provider) {
						var providerObj = GS._getProviderByName(res.requestParams.provider);
						providerObj.context = { connected: true };
						This.selectProviders(context.internals.moduleID, [providerObj]);
					} else if (res.user && res.user.identities) {
						var connectedProviders = [];
						for (var identity in res.user.identities) {
							var oId = res.user.identities[identity];
							oId.connected = true;
							var providerObj = GS._getProviderByName(identity);
							providerObj.context = oId;
							if (This.getProviderSelection(m.i.moduleID, providerObj.name) && !(oId.missingPermissions && oId.missingPermissions.toLowerCase().indexOf('actions') != -1)) {
								connected = true;
								connectedProviders.push(providerObj);
							}
						}
						This.selectProviders(context.internals.moduleID, connectedProviders);
					}
				}
			},
			publishToProviders: function (moduleId, arProviders) {
				var m = this.modules[moduleId];
				var This = this;
				var params = {};
				for (var p in m.p) {
					params[p] = m.p[p];
				}
				if ((params.scope && params.scope.toLowerCase() == 'internal') || m.i.deleteScopeParams) delete params.scope; //internal scope is not supported in shareUI

				params.enabledProviders = arProviders.join(',');
				m.duringPublish = true;
				params.callback = function (e) {
					if (m.duringPublish) {
						This.onPublish(e);
						m.duringPublish = false;
					}
				}
				params.context = { This: this, m: m };

				var shareTimeout = m.p['shareTimeout'];
				if (shareTimeout && shareTimeout > 0) {
					shareTimeout = shareTimeout * 1000;
					window.setTimeout(function () {
						if (m.duringPublish) {
							m.duringPublish = false;
							window.gigya.events.dispatchErrorFromResponse(m.p, { status: 'FAIL', statusMessage: 'Request timeout', errorCode: 504001, errorMessage: 'Timeout' });
							This.onShareComplete(m);
						}
					}, shareTimeout);
				}

				window.gigya.services.socialize.publishUserAction(m.c, params);
			},
			getCookie: function (name) {
				var ca = document.cookie.split(';');
				for (var i = 0; i < ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == ' ') c = c.substring(1, c.length);
					if (c.indexOf(name) == 0) return c.substring(name.length + 1, c.length);
				}
				return null;
			},
			getProviderSelection: function (moduleId, provider) {
				var m = this.modules[moduleId];
				var id = 'shareUI';
				var cookie = this.getCookie('_gig_' + id + '_cb_' + provider);
				return (cookie != '0');
			},
			getCheckedProviders: function (moduleId) {
				var m = this.modules[moduleId];
				var arProviders = [];
				for (var i = 0; i < m.i.arProviders.length; i++) {
					var ignore;
					ignore = false;
					var provider = m.i.arProviders[i];
					if (!ignore) {
						var cb = document.getElementById(moduleId + '_cb' + provider.ID);
						if (cb && cb.checked) arProviders.push(provider);
					}
					if (cb.checked != null) {
						document.cookie = '_gig_shareUI_cb_' + provider + '=' + (cb.checked ? 1 : 0) + ';expires=Wed, 01 Jan 2020 12:00:00 GMT";path=/;"';
					}
				}
				return arProviders;
			},
			btnShare_OnClick: function (moduleId, hideUI) {
				this.shareToProviders(moduleId);
			},
			shareToProviders: function (moduleId) {
				var m = this.modules[moduleId];
				var arProviders = this.getCheckedProviders(moduleId);
				var cbAlwaysShare = document.getElementById(moduleId + '_cbAlwaysShare');
				if (cbAlwaysShare && cbAlwaysShare.checked) {
				    this.setSettings(moduleId, true, false, arProviders.join(','));
				}
				if (arProviders.length > 0) {
					var fncHideUI = function () {
						var container = document.getElementById(moduleId);
						if (container && container.style.display != 'none') {
							var ifr = document.getElementById('gigya_ifr_' + moduleId);
							if (ifr) ifr.style.display = 'none';
							container.style.display = 'none';
						}
					}
					if (window.gigya.utils.validation.isExplicitTrue(m.p['showSuccessMessage'])) {
						var textMessagePosted = this.TEXT(m.lang, 'reaction_shared_successfully');
						document.getElementById(m.i.moduleID + '_shareCanvas').innerHTML = '<table role="presentation" style="width:100%;height:100%;" cellspacing="0" cellpadding="0"><tr><td style="vertical-align:middle"><div style="text-align:center;width:100%;font-size:12px; color: #0f9400;font-family:arial;position:relative;top:-10px;">' + textMessagePosted + '</div></td></tr></table>';
						//m.i.successMessageTimeout = setTimeout(fncHideUI, 2000);
					} else {
						fncHideUI();
					}
					this.publishToProviders(moduleId, arProviders);
				} else {
					this.showErrorMessage(moduleId, this.TEXT(m.lang, 'please_select_your_social_networks_for_sharing'));
				}
			},
			showErrorMessage: function (moduleId, msg) {
				var divErr = document.getElementById(moduleId + '_errorMessage');
				if (!divErr) {
					divErr = document.createElement('div');
					divErr.style.position = 'absolute';
					divErr.style.visibility = 'hidden';
					document.getElementById(moduleId).appendChild(divErr);
				}
				divErr.style.zIndex = window.gigya.utils.DOM.getNextZIndex();
				divErr.innerHTML = '<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:55px;border-radius:5px;-moz-border-radius:5px;background-color:#FFFFFF;border: 1px solid #767676;text-align:center;vertical-align:middle"><tr><td style="align:center;vertical-align:middle; color:#555555; font-size:11px; font-family:arial;text-align:center;padding: 10px; font-weight:bold;">' + msg + '</td></tr></table>';
				var container = document.getElementById(moduleId);
				divErr.style.left = (parseInt(container.style.width) - divErr.offsetWidth) / 2 + 'px';
				divErr.style.top = (parseInt(container.style.height) - divErr.offsetHeight) / 2 + 'px';
				divErr.style.visibility = 'visible';

				window.setTimeout(function () { divErr.style.visibility = 'hidden' }, 3000);
			},
			closeShare: function (moduleId) {
				var m = this.modules[moduleId];
				if (m) {
					window.gigya.services.socialize._closeComponent(m.i.rid, true);
					delete this.modules[moduleId]
				}
			},
			connectToProvider: function (m, providerID) {
				var provider = window.gigya.services.socialize._getProviderByID(providerID);
				var getPermissionsOnly = (provider.context && provider.context.connected);
				if (getPermissionsOnly) {
					provider.context.triedGettingPermisions = true; //to avoid trying more than once
				}

				var params = {
					pendingRegistration: m.p.pendingRegistration,
					cid: m.p.cid,
					permissions: 'actions',
					provider: provider.name,
					context: m.p.context,
					sessionExpiration: m.p.sessionExpiration
				}

				var context = { This: this, conf: m.c, params: m.p, internals: m.i };
				var This = this;

				if (getPermissionsOnly) {
					params.callback = function (res) {
						if (res.errorCode == 0) {
							res.context = context;
							provider.context.missingPermissions = '';
							This.afterGetInfo(res);
						}
					}
					window.gigya.services.socialize.requestPermissions(m.c, params);
				} else {
					params.callback = function (res) {
						res.context = context;
						This.afterGetInfo(res);
					}
					window.gigya.services.socialize.addConnection(m.c, params);
				}
			},
			onShareComplete: function (m) {
				var GS = window.gigya.services.socialize;
				if (m.arErrorProviders && m.arErrorProviders.length > 0) {
					window.gigya.events.dispatchForWidget({
						eventName: 'error',
						errorCode: 500023,
						errorMessage: 'Provider error',
						status: 'FAIL',
						statusMessage: 'Provider error',
						failedProviders: m.arErrorProviders.join(','),
						context: m.p.context
					},m.p);
				}
				if (m.arPublishedProviders && m.arPublishedProviders.length > 0) {
					window.gigya.events.dispatchForWidget({
						eventName: 'sendDone',
						providers: m.arPublishedProviders.join(','),
						userMessage: m.p['userAction']['userMessage'],
						providerPostIDs: m.providerPostIDs,
						targetURL: m.p['userAction']['linkBack']
					}, m.p);
				}
				m.This.onShareDone(m.i.moduleID);
			},
			onShareDone: function (moduleID, This) {
				if (!This) This = this;
				var m = This.modules[moduleID];
				if ((m != null) && (m.i != null)) {
					clearTimeout(m.i.successMessageTimeout);
					window.gigya.services.socialize.plugins.minishare.closeShare(m.i.moduleID);
				}
			},
			onPublish: function (res) {
				var m = res.context.m;
				var This = res.context.This;
				var GS = window.gigya.services.socialize;
				m.i.deleteScopeParams = true; //to avoid multiple internal publish

				m.arErrorProviders = [];
				if (res.providerPostIDs) {
					m.providerPostIDs = res.providerPostIDs;
				}

				var providerErrorCodes = res.providerErrorCodes;
				if (res.errorCode == 0 && providerErrorCodes) {
					for (var i = 0; i < res.providerErrorCodes.length; i++) {
						var provider = window.gigya.services.socialize._getProviderByName(providerErrorCodes[i].provider);
						if (providerErrorCodes[i].errorCode == 0) {
							m.arPublishedProviders.push(provider);
							window.gigya.events.dispatchForWidget({ eventName: 'send', provider: provider.name }, m.p);
						} else {
							m.arErrorProviders.push(provider.displayName);
						}
					}
				} else {
					m.arErrorProviders = res.requestParams.enabledProviders.split(',');
				}

				This.onShareComplete(m);
			},
			selectProviders: function (moduleId, arProviders) {
				for (var i = 0; i < arProviders.length; i++) {
					var cbID = moduleId + '_cb' + arProviders[i].ID;
					var cb = document.getElementById(cbID);
					if (cb) cb.checked = true;
					this.updateProviderButton(moduleId, arProviders[i].ID);
				}
			},
			btnProvider_OnClick: function (moduleId, providerID, evt) {
				var cbID = moduleId + '_cb' + providerID;
				var cb = document.getElementById(cbID);
				var provider = window.gigya.services.socialize._getProviderByID(providerID);
				var m = this.modules[moduleId];
				if (cb.checked) {
					cb.checked = false;
				} else {
					if (provider.context && provider.context.connected && (!(provider.context.missingPermissions && provider.context.missingPermissions.toLowerCase().indexOf('actions') != -1))) {
						cb.checked = true;
					} else {
						this.connectToProvider(m, providerID);
					}
				}
				this.updateProviderButton(moduleId, providerID);
			},
			updateProviderButton: function (moduleId, providerID) {
				var m = this.modules[moduleId];
				var provider = window.gigya.services.socialize._getProviderByID(providerID);
				var cbID = moduleId + '_cb' + providerID;
				var imgID = moduleId + '_btn' + providerID;
				var cb = document.getElementById(cbID);
				var img = document.getElementById(imgID);
				var base = window.gigya._.getCdnResource('/gs/i/Share/') ;

				if (cb && img) {
					if (cb.checked) {
						if (m.i.mini) {
							cb.src = base + 'Checkbox_checked.gif';
						} else {
							cb.src = base + 'Checked.png';
						}


					} else {
						if (m.i.mini) {
							cb.src = base + 'Checkbox.gif';
						} else {
							cb.src = base + 'NotChecked.png';
						}
					}
				}
			},
			showShareCanvas: function (m) {
				window.gigya.utils.DOM.showByID(m.originalP.containerID);
				window.gigya.utils.DOM.showByID('gigya_ifr_' + m.originalP.containerID);
			},
			hideShareCanvas: function (m) {
				window.gigya.utils.DOM.hideByID(m.originalP.containerID);
				window.gigya.utils.DOM.hideByID('gigya_ifr_' + m.originalP.containerID);

			},
			setSettings: function (moduleID, alwaysShare, neverShare, providers) {
				var m = this.modules[moduleID];
				delete _pi.minishare.userInfo;
				var settings = {};

				settings[m.p['autoShareActionID']] = {
					actionID: m.p['autoShareActionID'],
					alwaysShare: alwaysShare,
					neverShare: neverShare
				}

				if (m.p['autoShareActionDisplay']) {
					settings[m.p['autoShareActionID']].display = m.p['autoShareActionDisplay'];
				}
				if (providers) {
					settings[m.p['autoShareActionID']].providers = providers;
				}
				if (m.p['autoShareExpiration']) {
					settings[m.p['autoShareActionID']].expiration = m.p['autoShareExpiration'];
				}
				var params = {
					group: 'gigyaShareSettings',
					settings: settings
				}
				window.gigya.services.socialize.setUserSettings(m.c, params);
			},
			neverShareThis_OnClick: function (moduleID) {
				this.setSettings(moduleID, false, true);
				this.closeShare(moduleID);
			},
			alwaysShareThis_OnClick: function (moduleID) {
				var m = this.modules[moduleID];
				var base = window.gigya._.getCdnResource( '/gs/i/Share/');
				var cb = document.getElementById(moduleID + '_cbAlwaysShare');
				cb.checked = !(cb.checked);
				if (cb.checked) {
					cb.src = base + 'checkbox_checked.gif';
				} else {
					cb.src = base + 'checkbox.gif';
				}

			},
			showMiniUI: function (c, p, internals) {
				var GS = window.gigya.services.socialize;
				var rid = internals['rid'];
				var This = this;

				var resolver = new window.gigya.global.resolver(window.gigya.global.resolver.defaultProccessor);
				resolver.addConfig('<config><body font="arial"><texts size="11px" color="#888888"><links underline="true" size="10px" /></texts></body></config>');

				resolver.addConfig(c['UIConfig']);
				resolver.addConfig(p['UIConfig']);

				var lang = c['lang'];
				if (typeof p['lang'] != 'undefined') lang = p['lang'];

				var moduleID = internals['moduleID'];
				this.modules[moduleID] = { originalC: c, originalP: p, i: internals, This: This, resolver: resolver };
				var m = this.modules[moduleID];
				m.lang = lang;
				if (lang != 'en' && lang != null && m.lang!='') m.lang.share = 'OK';
				m.arPublishedProviders = [];

				var oPopup = window.gigya.services.socialize._createJSPopup2(rid, resolver, 5, window.gigya._.getCdnResource( '/gs/i/Share/Mini/Dialog/Dialog_'), ' ', true);
				c = oPopup.c;
				p = oPopup.p;

				this.modules[moduleID].c = c;
				this.modules[moduleID].p = p;
				var containerID = p['containerID'];

				var w = p['width'];
				var h = p['height'];

				var arHTML = [];
				var a = 0;
				var container = document.getElementById(containerID);
				container.border = '1px solid #000000';
				var oLinkStyle = resolver.Resolve('+/config/body/texts/links');
				var oTextStyle = resolver.Resolve('+/config/body/texts');
				var oWorkingTextStyle = resolver.Resolve('+/config/elements/lblWorking | +/config/body/texts');
				var base = window.gigya._.getCdnResource( '/gs/i/');

				var textStyle = GS.getStyleString(oTextStyle);
				var linkStyle = GS.getStyleString(oLinkStyle, true);

				var headerText = p.headerText;
				if (!headerText) headerText = '&#160;';

				var bodyText = p.bodyText;
				if (!bodyText) bodyText = this.TEXT(m.lang, 'share_it_with');

				var escapedID = moduleID.replace(/[.]/g, '\\.');
				arHTML[a++] = '<div id="' + moduleID + '_shareCanvas" style="background-color:#FFFFFF; width:' + w + 'px;height:' + h + 'px;text-align:left">';
				_pi.common.addCSS(['#', escapedID, ' td, #', escapedID, ' table {width:auto;font-family:arial;font-size:1px;vertical-align:top;border-collapse:separate;border:none; padding:0px;margin:0px;line-height:normal} #', escapedID, ' {text-align:left}',
					'a.gig-minishare-button,a:hover.gig-minishare-button,a:link.gig-minishare-button,a:active.gig-minishare-button,a:visited.gig-minishare-button {',
						'line-height: 18px;position:relative;border-radius: 3px; color:#4d4d4d;cursor:pointer;',
						'font-size: 11px;padding: 0 5px; border: 1px solid #C5C7C7;display:inline-block;zoom:1;vertical-align:middle; text-align:center;',
						'box-shadow:0 0 2px RGBA(0,0,0,0.15);-webkit-box-shadow:0 0 2px RGBA(0,0,0,0.15);-moz-box-shadow:0 0 2px RGBA(0,0,0,0.15);}',
					'a.gig-minishare-button,a:link.gig-minishare-button,a:active.gig-minishare-button,a:visited.gig-minishare-button {',
						'background: #FFFFFF; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#EAEBEB");',
						'background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#EAEBEB));',
						'background: -moz-linear-gradient(top,  #FFFFFF,  #EAEBEB)}',
					'a:hover.gig-minishare-button, a.gig-minishare-button-down,a:link.gig-minishare-button-down,a:active.gig-minishare-button-down,a:visited.gig-minishare-button-down {',
						'background: #EAEBEB; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#EAEBEB", endColorstr="#FFFFFF");',
						'background: -webkit-gradient(linear, left top, left bottom, from(#EAEBEB), to(#FFFFFF));',
						'background: -moz-linear-gradient(top,  #EAEBEB,  #FFFFFF)}'
								  ]);

				arHTML[a++] = '<table role="presentation" id="' + moduleID + '_miniShareCanvas" cellspacing="0" cellpadding="0" valign="middle" style="width:100%;height:' + h + 'px"><tr><td style="padding-left:12px">';
				arHTML[a++] = '<div style="' + textStyle + ';margin-bottom:10px;height:16px;width:' + (w - 20) + ';overflow:hidden">' + headerText + '</div>';
				arHTML[a++] = '<div style="' + textStyle + ';font-size:12px;color:#555555;font-weight:bold;margin-bottom:9px;height:16px;width:' + (w - 20) + ';overflow:hidden">' + bodyText + '</div>';

				arHTML[a++] = '<div>';
				var arProviders = internals.arProviders;

				for (var i = 0; i < arProviders.length; i++) {
					var provider = arProviders[i];
					var title = provider.displayName;
					if (window.gigya.utils.validation.isExplicitFalse(p['showTooltips'])) title = '';
					arHTML[a++] = '<div onclick="gigya.services.socialize.plugins.minishare.btnProvider_OnClick(\'' + moduleID + '\', ' + provider.ID + ',event)" valign="middle" style="height:20px;cursor:pointer;vertical-align:middle;padding-right:12px;float:left"><table role="presentation" height="20" cellspacing="0" cellpadding="0" valign="middle" style="height:20px;margin:0px;padding:0px;vertical-align:middle">';
					arHTML[a++] = '<tr><td style="vertical-align:middle"><img src="' + base + 'Share/CheckBox.gif" id="' + moduleID + '_cb' + provider.ID + '"></td><td style="padding-left:6px;height:20px;width:20px;"><img title="' + title + '" alt="' + title + '" id="' + moduleID + '_btn' + provider.ID + '" src="' + base + 'HTMLLogin/' + provider.name + '_20.png"></td></tr></table>';
					arHTML[a++] = '</div>';
				}
				arHTML[a++] = '</div></td></tr>';
				arHTML[a++] = '<tr><td height="31" style="background-color:#F7F7F7;border-top:1px solid #E0E0E0;height:31px;vertical-align:middle">';
				arHTML[a++] = '<table role="presentation" cellspacing="0" cellpadding="0" valign="middle" style="width:100%"><tr>';
				if (p['autoShareActionID']) {
					if (window.gigya.utils.validation.isExplicitTrue(p['showNeverShare'])) {
						arHTML[a++] = '<td style="vertical-align:middle;text-align:left"><span id="' + moduleID + '_never" onmouseover="gigya.services.socialize.plugins.minishare.showNeverBubble(\'' + moduleID + '\')" onmouseout="gigya.services.socialize.plugins.minishare.hideBubble(\'' + moduleID + '\')" onclick="gigya.services.socialize.plugins.minishare.neverShareThis_OnClick(\'' + moduleID + '\')" style="' + linkStyle + 'padding-left:12px;">' + this.TEXT(m.lang, 'never') + '</span></td>';
					} else {
						arHTML[a++] = '<td>&#160;</td>';
					}
					if (p['showAlwaysShare'] == 'checked' || p['showAlwaysShare'] == 'unchecked') {
						arHTML[a++] = '<td style="width:50px;padding-right:20px;vertical-align:middle;text-align:right"><table role="presentation" id="' + moduleID + '_always" cellpadding="0" cellspacing="0" style="cursor:pointer" onmouseover="gigya.services.socialize.plugins.minishare.showAlwaysBubble(\'' + moduleID + '\')" onmouseout="gigya.services.socialize.plugins.minishare.hideBubble(\'' + moduleID + '\')" onclick="gigya.services.socialize.plugins.minishare.alwaysShareThis_OnClick(\'' + moduleID + '\')"><tr><td style="vertical-align:middle"><div style="padding-right:5px"><img id="' + moduleID + '_cbAlwaysShare" src="' + base + 'Share/checkbox.gif"></div></td><td style="vertical-align:middle"><span style="' + linkStyle + 'color:#575757;text-decoration:none;">' + this.TEXT(m.lang, 'always') + '</span></td></tr></table></td>'
					} else {
						arHTML[a++] = '<td>&#160;</td>';
					}
				} else {
					arHTML[a++] = '<td>&#160;</td>';
				}

				arHTML[a++] = '<td style="width:48px"><a class="gig-minishare-button gig-minishare-button-share" onclick="gigya.services.socialize.plugins.minishare.btnShare_OnClick(\'' + moduleID + '\',true)" id="' + moduleID + '_btnOK" style="cursor:pointer;cursor:pointer;margin-right:6px;color:#555555;font-weight:bold;text-align:center;">' + this.TEXT(m.lang, 'share') + '</a></td></tr></table>';
				arHTML[a++] = '</td></tr></table>';
				arHTML[a++] = '</div>';

				if ((p['showAlwaysShare'] != null && ('' + p['showAlwaysShare']).toLowerCase() != 'hide') || window.gigya.utils.validation.isExplicitTrue(p['showNeverShare'])) {
					this.hideShareCanvas(m);
				}
				container.innerHTML = arHTML.join('');
				if (!m.p['userAction']) {
					m.p['userAction'] = new window.gigya.services.socialize.UserAction();
				}
				if (p['autoShareActionID'] != null && p['showAlwaysShare'] && ('' + p['showAlwaysShare']).toLowerCase() == 'checked') {
					this.alwaysShareThis_OnClick(moduleID);
				}
			}
		}
		window.gigya.services.socialize.addEventHandlers({ listenerType: 'component', listenerDescription: 'listener for updating showShareUI Widgets' },
				{ onConnect: _pi.minishare.onChange,
					onDisconnect: _pi.minishare.onChange,
					onLogin: _pi.minishare.onChange,
					onLogout: _pi.minishare.onChange
				});
	}

})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLm1pbmlzaGFyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLFlBQVksWUFBSyw0Q0FBNEMsWUFBSztBQUNsRSxXQUFXLFlBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxjQUFjLFlBQUs7QUFDbkIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtB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O0FBQ0EsNkJBQTZCLFlBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxZQUFLLHNDQUFzQyw4RkFBOEY7QUFDM0ksS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxDQUFDIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLm1pbmlzaGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLm1pbmlzaGFyZS5qc1wiKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5qc1wiIC8+XHJcbihmdW5jdGlvbiAoKSB7XHJcblx0aWYgKHR5cGVvZiBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucyA9PSAndW5kZWZpbmVkJykgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMgPSB7fTtcclxuXHR2YXIgX3BpID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnM7XHJcblx0aWYgKHR5cGVvZiBfcGkuY29tbW9uID09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRfcGkuY29tbW9uID0ge1xyXG5cdFx0XHRhZGRDU1M6IGZ1bmN0aW9uIChjc3MpIHtcclxuXHRcdFx0XHRpZiAoIWNzcyB8fCBjc3MgPT0gXCJcIikgcmV0dXJuO1xyXG5cdFx0XHRcdGlmIChjc3MgaW5zdGFuY2VvZiBBcnJheSkgY3NzID0gY3NzLmpvaW4oJycpO1xyXG5cclxuXHRcdFx0XHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG5cdFx0XHRcdHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG5cdFx0XHRcdHZhciBydWxlc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cclxuXHRcdFx0XHRpZiAoc3R5bGUuc3R5bGVTaGVldClcclxuXHRcdFx0XHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJ1bGVzTm9kZS5ub2RlVmFsdWU7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQocnVsZXNOb2RlKTtcclxuXHJcblx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIik7XHJcblx0XHRcdFx0dmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cdFx0XHRcdChoZWFkLmxlbmd0aCA+IDAgPyBoZWFkWzBdIDogYm9keSkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICh0eXBlb2YgX3BpLm1pbmlzaGFyZSA9PSAndW5kZWZpbmVkJykge1xyXG5cclxuXHRcdF9waS5taW5pc2hhcmUgPSB7XHJcblx0XHRcdG1vZHVsZXM6IHt9LFxyXG5cclxuXHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIChldnQpIHtcclxuXHRcdFx0XHRkZWxldGUgX3BpLm1pbmlzaGFyZS51c2VySW5mb1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRURVhUOiBmdW5jdGlvbiAobGFuZywgdGV4dEtleSwgcmVwbGFjZVN0ciwgd2l0aFN0cikge1xyXG5cdFx0XHQgICAgcmV0dXJuIGdpZ3lhLnBsdWdpblV0aWxzLmxhbmcuZ2V0TG9jYWxpemVkVGV4dCgnZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubWluaXNoYXJlLmpzJywgdGV4dEtleSwgbGFuZywgcmVwbGFjZVN0ciwgd2l0aFN0cik7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dNaW5pU2hhcmVVSTogZnVuY3Rpb24gKGMsIHAsIGludGVybmFscykge1xyXG5cdFx0XHRcdGludGVybmFscy5taW5pID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLnNob3dTaGFyZVVJKGMsIHAsIGludGVybmFscyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dTaGFyZVVJOiBmdW5jdGlvbiAoYywgcCwgaW50ZXJuYWxzKSB7XHJcblx0XHRcdFx0dmFyIEdTID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplO1xyXG5cdFx0XHRcdHZhciByaWQgPSBpbnRlcm5hbHNbJ3JpZCddO1xyXG5cdFx0XHRcdGlmICghaW50ZXJuYWxzLnJlZHJhdykge1xyXG5cdFx0XHRcdFx0dmFyIGFyUHJvdmlkZXJzID0gR1MuZ2V0UHJvdmlkZXJzQnlOYW1lKHBbJ2VuYWJsZWRQcm92aWRlcnMnXSA/IHBbJ2VuYWJsZWRQcm92aWRlcnMnXSA6IChjWydlbmFibGVkUHJvdmlkZXJzJ10gPyBjWydlbmFibGVkUHJvdmlkZXJzJ10gOiAnKicpKTtcclxuXHRcdFx0XHRcdGFyUHJvdmlkZXJzID0gR1MuaGlkZVByb3ZpZGVyc0J5TmFtZShhclByb3ZpZGVycywgcFsnZGlzYWJsZWRQcm92aWRlcnMnXSA/IHBbJ2Rpc2FibGVkUHJvdmlkZXJzJ10gOiAoY1snZGlzYWJsZWRQcm92aWRlcnMnXSA/IGNbJ2Rpc2FibGVkUHJvdmlkZXJzJ10gOiAnJykpO1xyXG5cdFx0XHRcdFx0YXJQcm92aWRlcnMgPSBHUy5nZXRQcm92aWRlcnNGb3JSZXF1aXJlZENhcGFiaWxpdGllcyhhclByb3ZpZGVycywgWydhY3Rpb25zJ10pO1xyXG5cdFx0XHRcdFx0aWYgKGFyUHJvdmlkZXJzLmxlbmd0aCA+IDZcclxuXHRcdFx0XHRcdFx0JiYgKCFnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRGYWxzZShwWydzaG93TW9yZUJ1dHRvbiddKSAvLyB0cnVlIGJ5IGRlZmF1bHRcclxuXHRcdFx0XHRcdFx0XHR8fCBnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRUcnVlKHBbJ3Nob3dFbWFpbEJ1dHRvbiddKSAvLyBmYWxzZSBieSBkZWZhdWx0XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0KSBhclByb3ZpZGVycyA9IGFyUHJvdmlkZXJzLnNwbGljZSgwLCA2KTtcclxuXHJcblx0XHRcdFx0XHRpbnRlcm5hbHNbJ2FyUHJvdmlkZXJzJ10gPSBhclByb3ZpZGVycztcclxuXHRcdFx0XHRcdGludGVybmFsc1snbW9kdWxlSUQnXSA9IHBbJ2NvbnRhaW5lcklEJ107XHJcblxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbnRlcm5hbHNbJ2FyUHJvdmlkZXJzJ10ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aW50ZXJuYWxzWydhclByb3ZpZGVycyddW2ldLmNvbnRleHQgPSB7fTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRjYWxsYmFjazogdGhpcy5hZnRlckdldEluZm8sXHJcblx0XHRcdFx0XHRjb250ZXh0OiB7IFRoaXM6IHRoaXMsIGNvbmY6IGMsIHBhcmFtczogcCwgaW50ZXJuYWxzOiBpbnRlcm5hbHMgfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocFsnYXV0b1NoYXJlQWN0aW9uSUQnXSAhPSBudWxsICYmIChwWydzaG93QWx3YXlzU2hhcmUnXSA9PSAnY2hlY2tlZCcgfHwgcFsnc2hvd0Fsd2F5c1NoYXJlJ10gPT0gJ3VuY2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRwYXJhbXMuc2V0dGluZ3MgPSBwWydhdXRvU2hhcmVBY3Rpb25JRCddO1xyXG5cdFx0XHRcdFx0cGFyYW1zLmdyb3VwID0gJ2dpZ3lhU2hhcmVTZXR0aW5ncyc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2hvd01pbmlVSShjLCBwLCBpbnRlcm5hbHMpO1xyXG5cclxuXHRcdFx0XHRpZiAoIWludGVybmFscy5yZWRyYXcpIHtcclxuXHRcdFx0XHRcdGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7IGV2ZW50TmFtZTogJ2xvYWQnLCBjb250YWluZXJJRDogcFsnY29udGFpbmVySUQnXSB9LHApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbnRlcm5hbHMucmVkcmF3ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGlmIChfcGkubWluaXNoYXJlLnVzZXJJbmZvKSB7XHJcblx0XHRcdFx0XHRfcGkubWluaXNoYXJlLnVzZXJJbmZvLmNvbnRleHQgPSBwYXJhbXMuY29udGV4dDtcclxuXHRcdFx0XHRcdF9waS5taW5pc2hhcmUudXNlckluZm8ucmVxdWVzdFBhcmFtcyA9IHBhcmFtcztcclxuXHRcdFx0XHRcdHBhcmFtcy5jYWxsYmFjayhfcGkubWluaXNoYXJlLnVzZXJJbmZvKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Z2lneWEuc2VydmljZXMuc29jaWFsaXplLmdldFVzZXJJbmZvKGMsIHBhcmFtcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93QnViYmxlOiBmdW5jdGlvbiAobSwgdGV4dCwgcmlnaHRQb2ludGVyKSB7XHJcblx0XHRcdFx0dmFyIGRpdkJ1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGRpdkJ1YmJsZS5pZCA9IG0uaS5tb2R1bGVJRCArICdfYnViYmxlJztcclxuXHRcdFx0XHR2YXIgcG9pbnRlckxlZnQ7XHJcblx0XHRcdFx0aWYgKHJpZ2h0UG9pbnRlcikge1xyXG5cdFx0XHRcdFx0cG9pbnRlckxlZnQgPSAnOTklJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cG9pbnRlckxlZnQgPSAnNXB4JztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZGl2QnViYmxlLmlubmVySFRNTCA9IHRoaXMuZ2V0QnViYmxlSFRNTCh0ZXh0LCBwb2ludGVyTGVmdCk7XHJcblx0XHRcdFx0ZGl2QnViYmxlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLnAuY29udGFpbmVySUQpLmFwcGVuZENoaWxkKGRpdkJ1YmJsZSk7XHJcblx0XHRcdFx0cmV0dXJuIGRpdkJ1YmJsZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0Fsd2F5c0J1YmJsZTogZnVuY3Rpb24gKG1vZHVsZUlkKSB7XHJcblx0XHRcdFx0dmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG5cdFx0XHRcdHZhciBkaXZCdWJibGUgPSB0aGlzLnNob3dCdWJibGUobSwgdGhpcy5URVhUKG0ubGFuZywgJ2Fsd2F5c19zaGFyZV90b19zZWxlY3RlZF9uZXR3b3JrcycpLCB0cnVlKTtcclxuXHRcdFx0XHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS5wLmNvbnRhaW5lcklEKTtcclxuXHRcdFx0XHRkaXZCdWJibGUuc3R5bGUudG9wID0gKGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLSA3IC0gZGl2QnViYmxlLm9mZnNldEhlaWdodCkgKyAncHgnO1xyXG5cdFx0XHRcdGRpdkJ1YmJsZS5zdHlsZS5sZWZ0ID0gKGNvbnRhaW5lci5vZmZzZXRXaWR0aCAtIDcwIC0gZGl2QnViYmxlLm9mZnNldFdpZHRoKSArICdweCc7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dOZXZlckJ1YmJsZTogZnVuY3Rpb24gKG1vZHVsZUlkKSB7XHJcblx0XHRcdFx0dmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG5cdFx0XHRcdHZhciBkaXZCdWJibGUgPSB0aGlzLnNob3dCdWJibGUobSwgdGhpcy5URVhUKG0ubGFuZywgJ25ldmVyX3Nob3dfdGhpc19kaWFsb2cnKSwgZmFsc2UpO1xyXG5cdFx0XHRcdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLnAuY29udGFpbmVySUQpO1xyXG5cdFx0XHRcdGRpdkJ1YmJsZS5zdHlsZS50b3AgPSAoY29udGFpbmVyLm9mZnNldEhlaWdodCAtIDcgLSBkaXZCdWJibGUub2Zmc2V0SGVpZ2h0KSArICdweCc7XHJcblx0XHRcdFx0ZGl2QnViYmxlLnN0eWxlLmxlZnQgPSAnMTJweCc7XHJcblx0XHRcdH0sXHJcblx0XHRcdGhpZGVCdWJibGU6IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xyXG5cdFx0XHRcdHZhciBkaXZCdWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfYnViYmxlJyk7XHJcblx0XHRcdFx0ZGl2QnViYmxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2QnViYmxlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0QnViYmxlSFRNTDogZnVuY3Rpb24gKHRleHQsIHBvaW50ZXJMZWZ0KSB7XHJcblx0XHRcdCAgICB2YXIgYmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL1NoYXJlL01pbmkvVG9vbHRpcF8nKTtcclxuXHRcdFx0XHRyZXR1cm4gW1xyXG5cdFx0XHRcdFx0Jzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCI+PHRyPicsXHJcblx0XHRcdFx0XHQnPHRkIHN0eWxlPVwid2lkdGg6NnB4O2hlaWdodDo2cHhcIj48aW1nIHNyYz1cIicsIGJhc2UsICd0b3BMZWZ0LnBuZ1wiPjwvdGQ+PHRkIHN0eWxlPVwiYm9yZGVyLXRvcDoxcHggc29saWQgIzU1NTU1NTtiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkZcIj4mIzE2MDs8L3RkPjx0ZCBzdHlsZT1cIndpZHRoOjZweFwiPjxpbWcgc3JjPVwiJywgYmFzZSwgJ3RvcFJpZ2h0LnBuZ1wiPjwvdGQ+PC90cj4nLFxyXG5cdFx0XHRcdFx0Jzx0cj48dGQgc3R5bGU9XCJib3JkZXItbGVmdDoxcHggc29saWQgIzU1NTU1NTtiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkZcIj4mIzE2MDs8L3RkPjx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I0ZGRkZGRlwiPjxkaXYgc3R5bGU9XCJmb250LWZhbWlseTphcmlhbDtmb250LXNpemU6MTFweDtjb2xvcjojNTU1NTU1O1wiPicsIHRleHQsICc8L2Rpdj48L3RkPjx0ZCBzdHlsZT1cImJvcmRlci1yaWdodDoxcHggc29saWQgIzU1NTU1NTtiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkZcIj4mIzE2MDs8L3RkPjwvdHI+JyxcclxuXHRcdFx0XHRcdCc8dHI+PHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246dG9wXCI+PGltZyBzcmM9XCInLCBiYXNlLCAnYm90dG9tTGVmdC5wbmdcIj48L3RkPicsXHJcblx0XHRcdFx0XHRcdCc8dGQ+PHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OjExcHhcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj4nLFxyXG5cdFx0XHRcdFx0XHRcdCc8dHI+PHRkIHN0eWxlPVwiaGVpZ2h0OjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkZcIiBjb2xzcGFuPVwiM1wiPiYjMTYwOzwvdGQ+PC90cj4nLFxyXG5cdFx0XHRcdFx0XHRcdCc8dHI+PHRkIHN0eWxlPVwid2lkdGg6JywgcG9pbnRlckxlZnQsICc7Ym9yZGVyLXRvcDoxcHggc29saWQgIzU1NTU1NVwiPiYjMTYwOzwvdGQ+JyxcclxuXHRcdFx0XHRcdFx0XHQnPHRkIHN0eWxlPVwid2lkdGg6IDEzcHhcIj48aW1nIHNyYz1cIicsIGJhc2UsICdwb2ludGVyLnBuZ1wiPjwvdGQ+PHRkIHN0eWxlPVwiYm9yZGVyLXRvcDoxcHggc29saWQgIzU1NTU1NVwiPiYjMTYwOzwvdGQ+PC90cj48L3RhYmxlPicsXHJcblx0XHRcdFx0XHRcdCc8L3RkPicsXHJcblx0XHRcdFx0XHQnPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246dG9wXCI+PGltZyBzcmM9XCInLCBiYXNlLCAnYm90dG9tUmlnaHQucG5nXCI+PC90ZD48L3RyPjwvdGFibGU+J1xyXG5cdFx0XHRcdF0uam9pbignJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFmdGVyR2V0SW5mbzogZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdHZhciBHUyA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZTtcclxuXHJcblx0XHRcdFx0dmFyIGNvbnRleHQgPSByZXMuY29udGV4dDtcclxuXHJcblx0XHRcdFx0dmFyIFRoaXMgPSBfcGkubWluaXNoYXJlO1xyXG5cclxuXHJcblx0XHRcdFx0dmFyIG0gPSBUaGlzLm1vZHVsZXNbY29udGV4dC5pbnRlcm5hbHMubW9kdWxlSURdO1xyXG5cdFx0XHRcdGlmIChtKSB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmVycm9yQ29kZSAhPSAwKSB7XHJcblx0XHRcdFx0XHRcdGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKGNvbnRleHQucGFyYW1zLCByZXMpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgY3VycmVudFVzZXJFbWFpbCA9ICcnO1xyXG5cdFx0XHRcdFx0aWYgKHJlcy51c2VyICYmIHJlcy51c2VyLmVtYWlsKSBjdXJyZW50VXNlckVtYWlsID0gcmVzLnVzZXIuZW1haWw7XHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFVzZXJFbWFpbCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgdGJFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRleHQuaW50ZXJuYWxzLm1vZHVsZUlEICsgJ190YllvdXJFbWFpbCcpO1xyXG5cdFx0XHRcdFx0XHRpZiAodGJFbWFpbCAhPSBudWxsKSB0YkVtYWlsLnZhbHVlID0gY3VycmVudFVzZXJFbWFpbDtcclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuY29va2llID0gJ19naWdfZW1haWw9JyArIGN1cnJlbnRVc2VyRW1haWwgKyAnO2V4cGlyZXM9V2VkLCAwMSBKYW4gMjAyMCAxMjowMDowMCBHTVQ7cGF0aD0vOydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChyZXMuc2V0dGluZ3MpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHNldHRpbmdzID0gcmVzLnNldHRpbmdzW20ucFsnYXV0b1NoYXJlQWN0aW9uSUQnXV07XHJcblx0XHRcdFx0XHRcdGlmIChzZXR0aW5ncyAmJiAoIXNldHRpbmdzLmV4cGlyYXRpb24gfHwgc2V0dGluZ3MuZXhwaXJhdGlvbiA+IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkpKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHNldHRpbmdzLm5ldmVyU2hhcmUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFRoaXMuY2xvc2VTaGFyZShtLmkubW9kdWxlSUQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAoc2V0dGluZ3MuYWx3YXlzU2hhcmUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG0uaS5uZXZlclJldHJ5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFRoaXMucHVibGlzaFRvUHJvdmlkZXJzKG0uaS5tb2R1bGVJRCwgc2V0dGluZ3MucHJvdmlkZXJzLnNwbGl0KCcsJykpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChtLnBbJ2F1dG9TaGFyZUFjdGlvbklEJ10gIT0gbnVsbCAmJiAobS5wWydzaG93QWx3YXlzU2hhcmUnXSA9PSAnY2hlY2tlZCcgfHwgbS5wWydzaG93QWx3YXlzU2hhcmUnXSA9PSAndW5jaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0VGhpcy5zaG93U2hhcmVDYW52YXMobSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIGNvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdGlmIChyZXMudXNlcikge1xyXG5cdFx0XHRcdFx0XHRfcGkubWluaXNoYXJlLnVzZXJJbmZvID0gcmVzO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHJlcy5yZXF1ZXN0UGFyYW1zLnByb3ZpZGVyKSB7XHJcblx0XHRcdFx0XHRcdHZhciBwcm92aWRlck9iaiA9IEdTLl9nZXRQcm92aWRlckJ5TmFtZShyZXMucmVxdWVzdFBhcmFtcy5wcm92aWRlcik7XHJcblx0XHRcdFx0XHRcdHByb3ZpZGVyT2JqLmNvbnRleHQgPSB7IGNvbm5lY3RlZDogdHJ1ZSB9O1xyXG5cdFx0XHRcdFx0XHRUaGlzLnNlbGVjdFByb3ZpZGVycyhjb250ZXh0LmludGVybmFscy5tb2R1bGVJRCwgW3Byb3ZpZGVyT2JqXSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy51c2VyICYmIHJlcy51c2VyLmlkZW50aXRpZXMpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGNvbm5lY3RlZFByb3ZpZGVycyA9IFtdO1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpZGVudGl0eSBpbiByZXMudXNlci5pZGVudGl0aWVzKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIG9JZCA9IHJlcy51c2VyLmlkZW50aXRpZXNbaWRlbnRpdHldO1xyXG5cdFx0XHRcdFx0XHRcdG9JZC5jb25uZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBwcm92aWRlck9iaiA9IEdTLl9nZXRQcm92aWRlckJ5TmFtZShpZGVudGl0eSk7XHJcblx0XHRcdFx0XHRcdFx0cHJvdmlkZXJPYmouY29udGV4dCA9IG9JZDtcclxuXHRcdFx0XHRcdFx0XHRpZiAoVGhpcy5nZXRQcm92aWRlclNlbGVjdGlvbihtLmkubW9kdWxlSUQsIHByb3ZpZGVyT2JqLm5hbWUpICYmICEob0lkLm1pc3NpbmdQZXJtaXNzaW9ucyAmJiBvSWQubWlzc2luZ1Blcm1pc3Npb25zLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignYWN0aW9ucycpICE9IC0xKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29ubmVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbm5lY3RlZFByb3ZpZGVycy5wdXNoKHByb3ZpZGVyT2JqKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0VGhpcy5zZWxlY3RQcm92aWRlcnMoY29udGV4dC5pbnRlcm5hbHMubW9kdWxlSUQsIGNvbm5lY3RlZFByb3ZpZGVycyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwdWJsaXNoVG9Qcm92aWRlcnM6IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXJQcm92aWRlcnMpIHtcclxuXHRcdFx0XHR2YXIgbSA9IHRoaXMubW9kdWxlc1ttb2R1bGVJZF07XHJcblx0XHRcdFx0dmFyIFRoaXMgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBwYXJhbXMgPSB7fTtcclxuXHRcdFx0XHRmb3IgKHZhciBwIGluIG0ucCkge1xyXG5cdFx0XHRcdFx0cGFyYW1zW3BdID0gbS5wW3BdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoKHBhcmFtcy5zY29wZSAmJiBwYXJhbXMuc2NvcGUudG9Mb3dlckNhc2UoKSA9PSAnaW50ZXJuYWwnKSB8fCBtLmkuZGVsZXRlU2NvcGVQYXJhbXMpIGRlbGV0ZSBwYXJhbXMuc2NvcGU7IC8vaW50ZXJuYWwgc2NvcGUgaXMgbm90IHN1cHBvcnRlZCBpbiBzaGFyZVVJXHJcblxyXG5cdFx0XHRcdHBhcmFtcy5lbmFibGVkUHJvdmlkZXJzID0gYXJQcm92aWRlcnMuam9pbignLCcpO1xyXG5cdFx0XHRcdG0uZHVyaW5nUHVibGlzaCA9IHRydWU7XHJcblx0XHRcdFx0cGFyYW1zLmNhbGxiYWNrID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcdGlmIChtLmR1cmluZ1B1Ymxpc2gpIHtcclxuXHRcdFx0XHRcdFx0VGhpcy5vblB1Ymxpc2goZSk7XHJcblx0XHRcdFx0XHRcdG0uZHVyaW5nUHVibGlzaCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwYXJhbXMuY29udGV4dCA9IHsgVGhpczogdGhpcywgbTogbSB9O1xyXG5cclxuXHRcdFx0XHR2YXIgc2hhcmVUaW1lb3V0ID0gbS5wWydzaGFyZVRpbWVvdXQnXTtcclxuXHRcdFx0XHRpZiAoc2hhcmVUaW1lb3V0ICYmIHNoYXJlVGltZW91dCA+IDApIHtcclxuXHRcdFx0XHRcdHNoYXJlVGltZW91dCA9IHNoYXJlVGltZW91dCAqIDEwMDA7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGlmIChtLmR1cmluZ1B1Ymxpc2gpIHtcclxuXHRcdFx0XHRcdFx0XHRtLmR1cmluZ1B1Ymxpc2ggPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRnaWd5YS5ldmVudHMuZGlzcGF0Y2hFcnJvckZyb21SZXNwb25zZShtLnAsIHsgc3RhdHVzOiAnRkFJTCcsIHN0YXR1c01lc3NhZ2U6ICdSZXF1ZXN0IHRpbWVvdXQnLCBlcnJvckNvZGU6IDUwNDAwMSwgZXJyb3JNZXNzYWdlOiAnVGltZW91dCcgfSk7XHJcblx0XHRcdFx0XHRcdFx0VGhpcy5vblNoYXJlQ29tcGxldGUobSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIHNoYXJlVGltZW91dCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucHVibGlzaFVzZXJBY3Rpb24obS5jLCBwYXJhbXMpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDb29raWU6IGZ1bmN0aW9uIChuYW1lKSB7XHJcblx0XHRcdFx0dmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGMgPSBjYVtpXTtcclxuXHRcdFx0XHRcdHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XHJcblx0XHRcdFx0XHRpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCArIDEsIGMubGVuZ3RoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFByb3ZpZGVyU2VsZWN0aW9uOiBmdW5jdGlvbiAobW9kdWxlSWQsIHByb3ZpZGVyKSB7XHJcblx0XHRcdFx0dmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG5cdFx0XHRcdHZhciBpZCA9ICdzaGFyZVVJJztcclxuXHRcdFx0XHR2YXIgY29va2llID0gdGhpcy5nZXRDb29raWUoJ19naWdfJyArIGlkICsgJ19jYl8nICsgcHJvdmlkZXIpO1xyXG5cdFx0XHRcdHJldHVybiAoY29va2llICE9ICcwJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldENoZWNrZWRQcm92aWRlcnM6IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xyXG5cdFx0XHRcdHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlkXTtcclxuXHRcdFx0XHR2YXIgYXJQcm92aWRlcnMgPSBbXTtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG0uaS5hclByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGlnbm9yZTtcclxuXHRcdFx0XHRcdGlnbm9yZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dmFyIHByb3ZpZGVyID0gbS5pLmFyUHJvdmlkZXJzW2ldO1xyXG5cdFx0XHRcdFx0aWYgKCFpZ25vcmUpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGNiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX2NiJyArIHByb3ZpZGVyLklEKTtcclxuXHRcdFx0XHRcdFx0aWYgKGNiICYmIGNiLmNoZWNrZWQpIGFyUHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGNiLmNoZWNrZWQgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5jb29raWUgPSAnX2dpZ19zaGFyZVVJX2NiXycgKyBwcm92aWRlciArICc9JyArIChjYi5jaGVja2VkID8gMSA6IDApICsgJztleHBpcmVzPVdlZCwgMDEgSmFuIDIwMjAgMTI6MDA6MDAgR01UXCI7cGF0aD0vO1wiJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGFyUHJvdmlkZXJzO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRidG5TaGFyZV9PbkNsaWNrOiBmdW5jdGlvbiAobW9kdWxlSWQsIGhpZGVVSSkge1xyXG5cdFx0XHRcdHRoaXMuc2hhcmVUb1Byb3ZpZGVycyhtb2R1bGVJZCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNoYXJlVG9Qcm92aWRlcnM6IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xyXG5cdFx0XHRcdHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlkXTtcclxuXHRcdFx0XHR2YXIgYXJQcm92aWRlcnMgPSB0aGlzLmdldENoZWNrZWRQcm92aWRlcnMobW9kdWxlSWQpO1xyXG5cdFx0XHRcdHZhciBjYkFsd2F5c1NoYXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX2NiQWx3YXlzU2hhcmUnKTtcclxuXHRcdFx0XHRpZiAoY2JBbHdheXNTaGFyZSAmJiBjYkFsd2F5c1NoYXJlLmNoZWNrZWQpIHtcclxuXHRcdFx0XHQgICAgdGhpcy5zZXRTZXR0aW5ncyhtb2R1bGVJZCwgdHJ1ZSwgZmFsc2UsIGFyUHJvdmlkZXJzLmpvaW4oJywnKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChhclByb3ZpZGVycy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHR2YXIgZm5jSGlkZVVJID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQpO1xyXG5cdFx0XHRcdFx0XHRpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ICE9ICdub25lJykge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBpZnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lneWFfaWZyXycgKyBtb2R1bGVJZCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGlmcikgaWZyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRUcnVlKG0ucFsnc2hvd1N1Y2Nlc3NNZXNzYWdlJ10pKSB7XHJcblx0XHRcdFx0XHRcdHZhciB0ZXh0TWVzc2FnZVBvc3RlZCA9IHRoaXMuVEVYVChtLmxhbmcsICdyZWFjdGlvbl9zaGFyZWRfc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG0uaS5tb2R1bGVJRCArICdfc2hhcmVDYW52YXMnKS5pbm5lckhUTUwgPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCI+PHRyPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPjxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2ZvbnQtc2l6ZToxMnB4OyBjb2xvcjogIzBmOTQwMDtmb250LWZhbWlseTphcmlhbDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LTEwcHg7XCI+JyArIHRleHRNZXNzYWdlUG9zdGVkICsgJzwvZGl2PjwvdGQ+PC90cj48L3RhYmxlPic7XHJcblx0XHRcdFx0XHRcdC8vbS5pLnN1Y2Nlc3NNZXNzYWdlVGltZW91dCA9IHNldFRpbWVvdXQoZm5jSGlkZVVJLCAyMDAwKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZuY0hpZGVVSSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5wdWJsaXNoVG9Qcm92aWRlcnMobW9kdWxlSWQsIGFyUHJvdmlkZXJzKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93RXJyb3JNZXNzYWdlKG1vZHVsZUlkLCB0aGlzLlRFWFQobS5sYW5nLCAncGxlYXNlX3NlbGVjdF95b3VyX3NvY2lhbF9uZXR3b3Jrc19mb3Jfc2hhcmluZycpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dFcnJvck1lc3NhZ2U6IGZ1bmN0aW9uIChtb2R1bGVJZCwgbXNnKSB7XHJcblx0XHRcdFx0dmFyIGRpdkVyciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19lcnJvck1lc3NhZ2UnKTtcclxuXHRcdFx0XHRpZiAoIWRpdkVycikge1xyXG5cdFx0XHRcdFx0ZGl2RXJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0XHRkaXZFcnIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0XHRcdFx0ZGl2RXJyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkKS5hcHBlbmRDaGlsZChkaXZFcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkaXZFcnIuc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKTtcclxuXHRcdFx0XHRkaXZFcnIuaW5uZXJIVE1MID0gJzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjU1cHg7Ym9yZGVyLXJhZGl1czo1cHg7LW1vei1ib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7Ym9yZGVyOiAxcHggc29saWQgIzc2NzY3Njt0ZXh0LWFsaWduOmNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcIj48dHI+PHRkIHN0eWxlPVwiYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTsgY29sb3I6IzU1NTU1NTsgZm9udC1zaXplOjExcHg7IGZvbnQtZmFtaWx5OmFyaWFsO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6IDEwcHg7IGZvbnQtd2VpZ2h0OmJvbGQ7XCI+JyArIG1zZyArICc8L3RkPjwvdHI+PC90YWJsZT4nO1xyXG5cdFx0XHRcdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCk7XHJcblx0XHRcdFx0ZGl2RXJyLnN0eWxlLmxlZnQgPSAocGFyc2VJbnQoY29udGFpbmVyLnN0eWxlLndpZHRoKSAtIGRpdkVyci5vZmZzZXRXaWR0aCkgLyAyICsgJ3B4JztcclxuXHRcdFx0XHRkaXZFcnIuc3R5bGUudG9wID0gKHBhcnNlSW50KGNvbnRhaW5lci5zdHlsZS5oZWlnaHQpIC0gZGl2RXJyLm9mZnNldEhlaWdodCkgLyAyICsgJ3B4JztcclxuXHRcdFx0XHRkaXZFcnIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkaXZFcnIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nIH0sIDMwMDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZVNoYXJlOiBmdW5jdGlvbiAobW9kdWxlSWQpIHtcclxuXHRcdFx0XHR2YXIgbSA9IHRoaXMubW9kdWxlc1ttb2R1bGVJZF07XHJcblx0XHRcdFx0aWYgKG0pIHtcclxuXHRcdFx0XHRcdGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fY2xvc2VDb21wb25lbnQobS5pLnJpZCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5tb2R1bGVzW21vZHVsZUlkXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y29ubmVjdFRvUHJvdmlkZXI6IGZ1bmN0aW9uIChtLCBwcm92aWRlcklEKSB7XHJcblx0XHRcdFx0dmFyIHByb3ZpZGVyID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9nZXRQcm92aWRlckJ5SUQocHJvdmlkZXJJRCk7XHJcblx0XHRcdFx0dmFyIGdldFBlcm1pc3Npb25zT25seSA9IChwcm92aWRlci5jb250ZXh0ICYmIHByb3ZpZGVyLmNvbnRleHQuY29ubmVjdGVkKTtcclxuXHRcdFx0XHRpZiAoZ2V0UGVybWlzc2lvbnNPbmx5KSB7XHJcblx0XHRcdFx0XHRwcm92aWRlci5jb250ZXh0LnRyaWVkR2V0dGluZ1Blcm1pc2lvbnMgPSB0cnVlOyAvL3RvIGF2b2lkIHRyeWluZyBtb3JlIHRoYW4gb25jZVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdHBlbmRpbmdSZWdpc3RyYXRpb246IG0ucC5wZW5kaW5nUmVnaXN0cmF0aW9uLFxyXG5cdFx0XHRcdFx0Y2lkOiBtLnAuY2lkLFxyXG5cdFx0XHRcdFx0cGVybWlzc2lvbnM6ICdhY3Rpb25zJyxcclxuXHRcdFx0XHRcdHByb3ZpZGVyOiBwcm92aWRlci5uYW1lLFxyXG5cdFx0XHRcdFx0Y29udGV4dDogbS5wLmNvbnRleHQsXHJcblx0XHRcdFx0XHRzZXNzaW9uRXhwaXJhdGlvbjogbS5wLnNlc3Npb25FeHBpcmF0aW9uXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgY29udGV4dCA9IHsgVGhpczogdGhpcywgY29uZjogbS5jLCBwYXJhbXM6IG0ucCwgaW50ZXJuYWxzOiBtLmkgfTtcclxuXHRcdFx0XHR2YXIgVGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0XHRcdGlmIChnZXRQZXJtaXNzaW9uc09ubHkpIHtcclxuXHRcdFx0XHRcdHBhcmFtcy5jYWxsYmFjayA9IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5lcnJvckNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHJlcy5jb250ZXh0ID0gY29udGV4dDtcclxuXHRcdFx0XHRcdFx0XHRwcm92aWRlci5jb250ZXh0Lm1pc3NpbmdQZXJtaXNzaW9ucyA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdFRoaXMuYWZ0ZXJHZXRJbmZvKHJlcyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5yZXF1ZXN0UGVybWlzc2lvbnMobS5jLCBwYXJhbXMpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRwYXJhbXMuY2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0XHRcdHJlcy5jb250ZXh0ID0gY29udGV4dDtcclxuXHRcdFx0XHRcdFx0VGhpcy5hZnRlckdldEluZm8ocmVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5hZGRDb25uZWN0aW9uKG0uYywgcGFyYW1zKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uU2hhcmVDb21wbGV0ZTogZnVuY3Rpb24gKG0pIHtcclxuXHRcdFx0XHR2YXIgR1MgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemU7XHJcblx0XHRcdFx0aWYgKG0uYXJFcnJvclByb3ZpZGVycyAmJiBtLmFyRXJyb3JQcm92aWRlcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0Z2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHtcclxuXHRcdFx0XHRcdFx0ZXZlbnROYW1lOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRlcnJvckNvZGU6IDUwMDAyMyxcclxuXHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlOiAnUHJvdmlkZXIgZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRzdGF0dXM6ICdGQUlMJyxcclxuXHRcdFx0XHRcdFx0c3RhdHVzTWVzc2FnZTogJ1Byb3ZpZGVyIGVycm9yJyxcclxuXHRcdFx0XHRcdFx0ZmFpbGVkUHJvdmlkZXJzOiBtLmFyRXJyb3JQcm92aWRlcnMuam9pbignLCcpLFxyXG5cdFx0XHRcdFx0XHRjb250ZXh0OiBtLnAuY29udGV4dFxyXG5cdFx0XHRcdFx0fSxtLnApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAobS5hclB1Ymxpc2hlZFByb3ZpZGVycyAmJiBtLmFyUHVibGlzaGVkUHJvdmlkZXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7XHJcblx0XHRcdFx0XHRcdGV2ZW50TmFtZTogJ3NlbmREb25lJyxcclxuXHRcdFx0XHRcdFx0cHJvdmlkZXJzOiBtLmFyUHVibGlzaGVkUHJvdmlkZXJzLmpvaW4oJywnKSxcclxuXHRcdFx0XHRcdFx0dXNlck1lc3NhZ2U6IG0ucFsndXNlckFjdGlvbiddWyd1c2VyTWVzc2FnZSddLFxyXG5cdFx0XHRcdFx0XHRwcm92aWRlclBvc3RJRHM6IG0ucHJvdmlkZXJQb3N0SURzLFxyXG5cdFx0XHRcdFx0XHR0YXJnZXRVUkw6IG0ucFsndXNlckFjdGlvbiddWydsaW5rQmFjayddXHJcblx0XHRcdFx0XHR9LCBtLnApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtLlRoaXMub25TaGFyZURvbmUobS5pLm1vZHVsZUlEKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25TaGFyZURvbmU6IGZ1bmN0aW9uIChtb2R1bGVJRCwgVGhpcykge1xyXG5cdFx0XHRcdGlmICghVGhpcykgVGhpcyA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIG0gPSBUaGlzLm1vZHVsZXNbbW9kdWxlSURdO1xyXG5cdFx0XHRcdGlmICgobSAhPSBudWxsKSAmJiAobS5pICE9IG51bGwpKSB7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQobS5pLnN1Y2Nlc3NNZXNzYWdlVGltZW91dCk7XHJcblx0XHRcdFx0XHRnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5taW5pc2hhcmUuY2xvc2VTaGFyZShtLmkubW9kdWxlSUQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0b25QdWJsaXNoOiBmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0dmFyIG0gPSByZXMuY29udGV4dC5tO1xyXG5cdFx0XHRcdHZhciBUaGlzID0gcmVzLmNvbnRleHQuVGhpcztcclxuXHRcdFx0XHR2YXIgR1MgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemU7XHJcblx0XHRcdFx0bS5pLmRlbGV0ZVNjb3BlUGFyYW1zID0gdHJ1ZTsgLy90byBhdm9pZCBtdWx0aXBsZSBpbnRlcm5hbCBwdWJsaXNoXHJcblxyXG5cdFx0XHRcdG0uYXJFcnJvclByb3ZpZGVycyA9IFtdO1xyXG5cdFx0XHRcdGlmIChyZXMucHJvdmlkZXJQb3N0SURzKSB7XHJcblx0XHRcdFx0XHRtLnByb3ZpZGVyUG9zdElEcyA9IHJlcy5wcm92aWRlclBvc3RJRHM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgcHJvdmlkZXJFcnJvckNvZGVzID0gcmVzLnByb3ZpZGVyRXJyb3JDb2RlcztcclxuXHRcdFx0XHRpZiAocmVzLmVycm9yQ29kZSA9PSAwICYmIHByb3ZpZGVyRXJyb3JDb2Rlcykge1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZXMucHJvdmlkZXJFcnJvckNvZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHZhciBwcm92aWRlciA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fZ2V0UHJvdmlkZXJCeU5hbWUocHJvdmlkZXJFcnJvckNvZGVzW2ldLnByb3ZpZGVyKTtcclxuXHRcdFx0XHRcdFx0aWYgKHByb3ZpZGVyRXJyb3JDb2Rlc1tpXS5lcnJvckNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdG0uYXJQdWJsaXNoZWRQcm92aWRlcnMucHVzaChwcm92aWRlcik7XHJcblx0XHRcdFx0XHRcdFx0Z2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnc2VuZCcsIHByb3ZpZGVyOiBwcm92aWRlci5uYW1lIH0sIG0ucCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0bS5hckVycm9yUHJvdmlkZXJzLnB1c2gocHJvdmlkZXIuZGlzcGxheU5hbWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG0uYXJFcnJvclByb3ZpZGVycyA9IHJlcy5yZXF1ZXN0UGFyYW1zLmVuYWJsZWRQcm92aWRlcnMuc3BsaXQoJywnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFRoaXMub25TaGFyZUNvbXBsZXRlKG0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxlY3RQcm92aWRlcnM6IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXJQcm92aWRlcnMpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgY2JJRCA9IG1vZHVsZUlkICsgJ19jYicgKyBhclByb3ZpZGVyc1tpXS5JRDtcclxuXHRcdFx0XHRcdHZhciBjYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNiSUQpO1xyXG5cdFx0XHRcdFx0aWYgKGNiKSBjYi5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlUHJvdmlkZXJCdXR0b24obW9kdWxlSWQsIGFyUHJvdmlkZXJzW2ldLklEKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGJ0blByb3ZpZGVyX09uQ2xpY2s6IGZ1bmN0aW9uIChtb2R1bGVJZCwgcHJvdmlkZXJJRCwgZXZ0KSB7XHJcblx0XHRcdFx0dmFyIGNiSUQgPSBtb2R1bGVJZCArICdfY2InICsgcHJvdmlkZXJJRDtcclxuXHRcdFx0XHR2YXIgY2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYklEKTtcclxuXHRcdFx0XHR2YXIgcHJvdmlkZXIgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX2dldFByb3ZpZGVyQnlJRChwcm92aWRlcklEKTtcclxuXHRcdFx0XHR2YXIgbSA9IHRoaXMubW9kdWxlc1ttb2R1bGVJZF07XHJcblx0XHRcdFx0aWYgKGNiLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGNiLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHByb3ZpZGVyLmNvbnRleHQgJiYgcHJvdmlkZXIuY29udGV4dC5jb25uZWN0ZWQgJiYgKCEocHJvdmlkZXIuY29udGV4dC5taXNzaW5nUGVybWlzc2lvbnMgJiYgcHJvdmlkZXIuY29udGV4dC5taXNzaW5nUGVybWlzc2lvbnMudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdhY3Rpb25zJykgIT0gLTEpKSkge1xyXG5cdFx0XHRcdFx0XHRjYi5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY29ubmVjdFRvUHJvdmlkZXIobSwgcHJvdmlkZXJJRCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlUHJvdmlkZXJCdXR0b24obW9kdWxlSWQsIHByb3ZpZGVySUQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cGRhdGVQcm92aWRlckJ1dHRvbjogZnVuY3Rpb24gKG1vZHVsZUlkLCBwcm92aWRlcklEKSB7XHJcblx0XHRcdFx0dmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG5cdFx0XHRcdHZhciBwcm92aWRlciA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fZ2V0UHJvdmlkZXJCeUlEKHByb3ZpZGVySUQpO1xyXG5cdFx0XHRcdHZhciBjYklEID0gbW9kdWxlSWQgKyAnX2NiJyArIHByb3ZpZGVySUQ7XHJcblx0XHRcdFx0dmFyIGltZ0lEID0gbW9kdWxlSWQgKyAnX2J0bicgKyBwcm92aWRlcklEO1xyXG5cdFx0XHRcdHZhciBjYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNiSUQpO1xyXG5cdFx0XHRcdHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbWdJRCk7XHJcblx0XHRcdFx0dmFyIGJhc2UgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9TaGFyZS8nKSA7XHJcblxyXG5cdFx0XHRcdGlmIChjYiAmJiBpbWcpIHtcclxuXHRcdFx0XHRcdGlmIChjYi5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdGlmIChtLmkubWluaSkge1xyXG5cdFx0XHRcdFx0XHRcdGNiLnNyYyA9IGJhc2UgKyAnQ2hlY2tib3hfY2hlY2tlZC5naWYnO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNiLnNyYyA9IGJhc2UgKyAnQ2hlY2tlZC5wbmcnO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChtLmkubWluaSkge1xyXG5cdFx0XHRcdFx0XHRcdGNiLnNyYyA9IGJhc2UgKyAnQ2hlY2tib3guZ2lmJztcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjYi5zcmMgPSBiYXNlICsgJ05vdENoZWNrZWQucG5nJztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1NoYXJlQ2FudmFzOiBmdW5jdGlvbiAobSkge1xyXG5cdFx0XHRcdGdpZ3lhLnV0aWxzLkRPTS5zaG93QnlJRChtLm9yaWdpbmFsUC5jb250YWluZXJJRCk7XHJcblx0XHRcdFx0Z2lneWEudXRpbHMuRE9NLnNob3dCeUlEKCdnaWd5YV9pZnJfJyArIG0ub3JpZ2luYWxQLmNvbnRhaW5lcklEKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aGlkZVNoYXJlQ2FudmFzOiBmdW5jdGlvbiAobSkge1xyXG5cdFx0XHRcdGdpZ3lhLnV0aWxzLkRPTS5oaWRlQnlJRChtLm9yaWdpbmFsUC5jb250YWluZXJJRCk7XHJcblx0XHRcdFx0Z2lneWEudXRpbHMuRE9NLmhpZGVCeUlEKCdnaWd5YV9pZnJfJyArIG0ub3JpZ2luYWxQLmNvbnRhaW5lcklEKTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldFNldHRpbmdzOiBmdW5jdGlvbiAobW9kdWxlSUQsIGFsd2F5c1NoYXJlLCBuZXZlclNoYXJlLCBwcm92aWRlcnMpIHtcclxuXHRcdFx0XHR2YXIgbSA9IHRoaXMubW9kdWxlc1ttb2R1bGVJRF07XHJcblx0XHRcdFx0ZGVsZXRlIF9waS5taW5pc2hhcmUudXNlckluZm87XHJcblx0XHRcdFx0dmFyIHNldHRpbmdzID0ge307XHJcblxyXG5cdFx0XHRcdHNldHRpbmdzW20ucFsnYXV0b1NoYXJlQWN0aW9uSUQnXV0gPSB7XHJcblx0XHRcdFx0XHRhY3Rpb25JRDogbS5wWydhdXRvU2hhcmVBY3Rpb25JRCddLFxyXG5cdFx0XHRcdFx0YWx3YXlzU2hhcmU6IGFsd2F5c1NoYXJlLFxyXG5cdFx0XHRcdFx0bmV2ZXJTaGFyZTogbmV2ZXJTaGFyZVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKG0ucFsnYXV0b1NoYXJlQWN0aW9uRGlzcGxheSddKSB7XHJcblx0XHRcdFx0XHRzZXR0aW5nc1ttLnBbJ2F1dG9TaGFyZUFjdGlvbklEJ11dLmRpc3BsYXkgPSBtLnBbJ2F1dG9TaGFyZUFjdGlvbkRpc3BsYXknXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHByb3ZpZGVycykge1xyXG5cdFx0XHRcdFx0c2V0dGluZ3NbbS5wWydhdXRvU2hhcmVBY3Rpb25JRCddXS5wcm92aWRlcnMgPSBwcm92aWRlcnM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChtLnBbJ2F1dG9TaGFyZUV4cGlyYXRpb24nXSkge1xyXG5cdFx0XHRcdFx0c2V0dGluZ3NbbS5wWydhdXRvU2hhcmVBY3Rpb25JRCddXS5leHBpcmF0aW9uID0gbS5wWydhdXRvU2hhcmVFeHBpcmF0aW9uJ107XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRncm91cDogJ2dpZ3lhU2hhcmVTZXR0aW5ncycsXHJcblx0XHRcdFx0XHRzZXR0aW5nczogc2V0dGluZ3NcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2lneWEuc2VydmljZXMuc29jaWFsaXplLnNldFVzZXJTZXR0aW5ncyhtLmMsIHBhcmFtcyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG5ldmVyU2hhcmVUaGlzX09uQ2xpY2s6IGZ1bmN0aW9uIChtb2R1bGVJRCkge1xyXG5cdFx0XHRcdHRoaXMuc2V0U2V0dGluZ3MobW9kdWxlSUQsIGZhbHNlLCB0cnVlKTtcclxuXHRcdFx0XHR0aGlzLmNsb3NlU2hhcmUobW9kdWxlSUQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhbHdheXNTaGFyZVRoaXNfT25DbGljazogZnVuY3Rpb24gKG1vZHVsZUlEKSB7XHJcblx0XHRcdFx0dmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSURdO1xyXG5cdFx0XHRcdHZhciBiYXNlID0gZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSggJy9ncy9pL1NoYXJlLycpO1xyXG5cdFx0XHRcdHZhciBjYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlEICsgJ19jYkFsd2F5c1NoYXJlJyk7XHJcblx0XHRcdFx0Y2IuY2hlY2tlZCA9ICEoY2IuY2hlY2tlZCk7XHJcblx0XHRcdFx0aWYgKGNiLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGNiLnNyYyA9IGJhc2UgKyAnY2hlY2tib3hfY2hlY2tlZC5naWYnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjYi5zcmMgPSBiYXNlICsgJ2NoZWNrYm94LmdpZic7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd01pbmlVSTogZnVuY3Rpb24gKGMsIHAsIGludGVybmFscykge1xyXG5cdFx0XHRcdHZhciBHUyA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZTtcclxuXHRcdFx0XHR2YXIgcmlkID0gaW50ZXJuYWxzWydyaWQnXTtcclxuXHRcdFx0XHR2YXIgVGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0XHRcdHZhciByZXNvbHZlciA9IG5ldyBnaWd5YS5nbG9iYWwucmVzb2x2ZXIoZ2lneWEuZ2xvYmFsLnJlc29sdmVyLmRlZmF1bHRQcm9jY2Vzc29yKTtcclxuXHRcdFx0XHRyZXNvbHZlci5hZGRDb25maWcoJzxjb25maWc+PGJvZHkgZm9udD1cImFyaWFsXCI+PHRleHRzIHNpemU9XCIxMXB4XCIgY29sb3I9XCIjODg4ODg4XCI+PGxpbmtzIHVuZGVybGluZT1cInRydWVcIiBzaXplPVwiMTBweFwiIC8+PC90ZXh0cz48L2JvZHk+PC9jb25maWc+Jyk7XHJcblxyXG5cdFx0XHRcdHJlc29sdmVyLmFkZENvbmZpZyhjWydVSUNvbmZpZyddKTtcclxuXHRcdFx0XHRyZXNvbHZlci5hZGRDb25maWcocFsnVUlDb25maWcnXSk7XHJcblxyXG5cdFx0XHRcdHZhciBsYW5nID0gY1snbGFuZyddO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgcFsnbGFuZyddICE9ICd1bmRlZmluZWQnKSBsYW5nID0gcFsnbGFuZyddO1xyXG5cclxuXHRcdFx0XHR2YXIgbW9kdWxlSUQgPSBpbnRlcm5hbHNbJ21vZHVsZUlEJ107XHJcblx0XHRcdFx0dGhpcy5tb2R1bGVzW21vZHVsZUlEXSA9IHsgb3JpZ2luYWxDOiBjLCBvcmlnaW5hbFA6IHAsIGk6IGludGVybmFscywgVGhpczogVGhpcywgcmVzb2x2ZXI6IHJlc29sdmVyIH07XHJcblx0XHRcdFx0dmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSURdO1xyXG5cdFx0XHRcdG0ubGFuZyA9IGxhbmc7XHJcblx0XHRcdFx0aWYgKGxhbmcgIT0gJ2VuJyAmJiBsYW5nICE9IG51bGwgJiYgbS5sYW5nIT0nJykgbS5sYW5nLnNoYXJlID0gJ09LJztcclxuXHRcdFx0XHRtLmFyUHVibGlzaGVkUHJvdmlkZXJzID0gW107XHJcblxyXG5cdFx0XHRcdHZhciBvUG9wdXAgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX2NyZWF0ZUpTUG9wdXAyKHJpZCwgcmVzb2x2ZXIsIDUsIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoICcvZ3MvaS9TaGFyZS9NaW5pL0RpYWxvZy9EaWFsb2dfJyksICcgJywgdHJ1ZSk7XHJcblx0XHRcdFx0YyA9IG9Qb3B1cC5jO1xyXG5cdFx0XHRcdHAgPSBvUG9wdXAucDtcclxuXHJcblx0XHRcdFx0dGhpcy5tb2R1bGVzW21vZHVsZUlEXS5jID0gYztcclxuXHRcdFx0XHR0aGlzLm1vZHVsZXNbbW9kdWxlSURdLnAgPSBwO1xyXG5cdFx0XHRcdHZhciBjb250YWluZXJJRCA9IHBbJ2NvbnRhaW5lcklEJ107XHJcblxyXG5cdFx0XHRcdHZhciB3ID0gcFsnd2lkdGgnXTtcclxuXHRcdFx0XHR2YXIgaCA9IHBbJ2hlaWdodCddO1xyXG5cclxuXHRcdFx0XHR2YXIgYXJIVE1MID0gW107XHJcblx0XHRcdFx0dmFyIGEgPSAwO1xyXG5cdFx0XHRcdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJRCk7XHJcblx0XHRcdFx0Y29udGFpbmVyLmJvcmRlciA9ICcxcHggc29saWQgIzAwMDAwMCc7XHJcblx0XHRcdFx0dmFyIG9MaW5rU3R5bGUgPSByZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9ib2R5L3RleHRzL2xpbmtzJyk7XHJcblx0XHRcdFx0dmFyIG9UZXh0U3R5bGUgPSByZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9ib2R5L3RleHRzJyk7XHJcblx0XHRcdFx0dmFyIG9Xb3JraW5nVGV4dFN0eWxlID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvZWxlbWVudHMvbGJsV29ya2luZyB8ICsvY29uZmlnL2JvZHkvdGV4dHMnKTtcclxuXHRcdFx0XHR2YXIgYmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoICcvZ3MvaS8nKTtcclxuXHJcblx0XHRcdFx0dmFyIHRleHRTdHlsZSA9IEdTLmdldFN0eWxlU3RyaW5nKG9UZXh0U3R5bGUpO1xyXG5cdFx0XHRcdHZhciBsaW5rU3R5bGUgPSBHUy5nZXRTdHlsZVN0cmluZyhvTGlua1N0eWxlLCB0cnVlKTtcclxuXHJcblx0XHRcdFx0dmFyIGhlYWRlclRleHQgPSBwLmhlYWRlclRleHQ7XHJcblx0XHRcdFx0aWYgKCFoZWFkZXJUZXh0KSBoZWFkZXJUZXh0ID0gJyYjMTYwOyc7XHJcblxyXG5cdFx0XHRcdHZhciBib2R5VGV4dCA9IHAuYm9keVRleHQ7XHJcblx0XHRcdFx0aWYgKCFib2R5VGV4dCkgYm9keVRleHQgPSB0aGlzLlRFWFQobS5sYW5nLCAnc2hhcmVfaXRfd2l0aCcpO1xyXG5cclxuXHRcdFx0XHR2YXIgZXNjYXBlZElEID0gbW9kdWxlSUQucmVwbGFjZSgvWy5dL2csICdcXFxcLicpO1xyXG5cdFx0XHRcdGFySFRNTFthKytdID0gJzxkaXYgaWQ9XCInICsgbW9kdWxlSUQgKyAnX3NoYXJlQ2FudmFzXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7IHdpZHRoOicgKyB3ICsgJ3B4O2hlaWdodDonICsgaCArICdweDt0ZXh0LWFsaWduOmxlZnRcIj4nO1xyXG5cdFx0XHRcdF9waS5jb21tb24uYWRkQ1NTKFsnIycsIGVzY2FwZWRJRCwgJyB0ZCwgIycsIGVzY2FwZWRJRCwgJyB0YWJsZSB7d2lkdGg6YXV0bztmb250LWZhbWlseTphcmlhbDtmb250LXNpemU6MXB4O3ZlcnRpY2FsLWFsaWduOnRvcDtib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7Ym9yZGVyOm5vbmU7IHBhZGRpbmc6MHB4O21hcmdpbjowcHg7bGluZS1oZWlnaHQ6bm9ybWFsfSAjJywgZXNjYXBlZElELCAnIHt0ZXh0LWFsaWduOmxlZnR9JyxcclxuXHRcdFx0XHRcdCdhLmdpZy1taW5pc2hhcmUtYnV0dG9uLGE6aG92ZXIuZ2lnLW1pbmlzaGFyZS1idXR0b24sYTpsaW5rLmdpZy1taW5pc2hhcmUtYnV0dG9uLGE6YWN0aXZlLmdpZy1taW5pc2hhcmUtYnV0dG9uLGE6dmlzaXRlZC5naWctbWluaXNoYXJlLWJ1dHRvbiB7JyxcclxuXHRcdFx0XHRcdFx0J2xpbmUtaGVpZ2h0OiAxOHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6IDNweDsgY29sb3I6IzRkNGQ0ZDtjdXJzb3I6cG9pbnRlcjsnLFxyXG5cdFx0XHRcdFx0XHQnZm9udC1zaXplOiAxMXB4O3BhZGRpbmc6IDAgNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjQzVDN0M3O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7IHRleHQtYWxpZ246Y2VudGVyOycsXHJcblx0XHRcdFx0XHRcdCdib3gtc2hhZG93OjAgMCAycHggUkdCQSgwLDAsMCwwLjE1KTstd2Via2l0LWJveC1zaGFkb3c6MCAwIDJweCBSR0JBKDAsMCwwLDAuMTUpOy1tb3otYm94LXNoYWRvdzowIDAgMnB4IFJHQkEoMCwwLDAsMC4xNSk7fScsXHJcblx0XHRcdFx0XHQnYS5naWctbWluaXNoYXJlLWJ1dHRvbixhOmxpbmsuZ2lnLW1pbmlzaGFyZS1idXR0b24sYTphY3RpdmUuZ2lnLW1pbmlzaGFyZS1idXR0b24sYTp2aXNpdGVkLmdpZy1taW5pc2hhcmUtYnV0dG9uIHsnLFxyXG5cdFx0XHRcdFx0XHQnYmFja2dyb3VuZDogI0ZGRkZGRjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNGRkZGRkZcIiwgZW5kQ29sb3JzdHI9XCIjRUFFQkVCXCIpOycsXHJcblx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNGRkZGRkYpLCB0bygjRUFFQkVCKSk7JyxcclxuXHRcdFx0XHRcdFx0J2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNGRkZGRkYsICAjRUFFQkVCKX0nLFxyXG5cdFx0XHRcdFx0J2E6aG92ZXIuZ2lnLW1pbmlzaGFyZS1idXR0b24sIGEuZ2lnLW1pbmlzaGFyZS1idXR0b24tZG93bixhOmxpbmsuZ2lnLW1pbmlzaGFyZS1idXR0b24tZG93bixhOmFjdGl2ZS5naWctbWluaXNoYXJlLWJ1dHRvbi1kb3duLGE6dmlzaXRlZC5naWctbWluaXNoYXJlLWJ1dHRvbi1kb3duIHsnLFxyXG5cdFx0XHRcdFx0XHQnYmFja2dyb3VuZDogI0VBRUJFQjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNFQUVCRUJcIiwgZW5kQ29sb3JzdHI9XCIjRkZGRkZGXCIpOycsXHJcblx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNFQUVCRUIpLCB0bygjRkZGRkZGKSk7JyxcclxuXHRcdFx0XHRcdFx0J2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNFQUVCRUIsICAjRkZGRkZGKX0nXHJcblx0XHRcdFx0XHRcdFx0XHQgIF0pO1xyXG5cclxuXHRcdFx0XHRhckhUTUxbYSsrXSA9ICc8dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIGlkPVwiJyArIG1vZHVsZUlEICsgJ19taW5pU2hhcmVDYW52YXNcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiB2YWxpZ249XCJtaWRkbGVcIiBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OicgKyBoICsgJ3B4XCI+PHRyPjx0ZCBzdHlsZT1cInBhZGRpbmctbGVmdDoxMnB4XCI+JztcclxuXHRcdFx0XHRhckhUTUxbYSsrXSA9ICc8ZGl2IHN0eWxlPVwiJyArIHRleHRTdHlsZSArICc7bWFyZ2luLWJvdHRvbToxMHB4O2hlaWdodDoxNnB4O3dpZHRoOicgKyAodyAtIDIwKSArICc7b3ZlcmZsb3c6aGlkZGVuXCI+JyArIGhlYWRlclRleHQgKyAnPC9kaXY+JztcclxuXHRcdFx0XHRhckhUTUxbYSsrXSA9ICc8ZGl2IHN0eWxlPVwiJyArIHRleHRTdHlsZSArICc7Zm9udC1zaXplOjEycHg7Y29sb3I6IzU1NTU1NTtmb250LXdlaWdodDpib2xkO21hcmdpbi1ib3R0b206OXB4O2hlaWdodDoxNnB4O3dpZHRoOicgKyAodyAtIDIwKSArICc7b3ZlcmZsb3c6aGlkZGVuXCI+JyArIGJvZHlUZXh0ICsgJzwvZGl2Pic7XHJcblxyXG5cdFx0XHRcdGFySFRNTFthKytdID0gJzxkaXY+JztcclxuXHRcdFx0XHR2YXIgYXJQcm92aWRlcnMgPSBpbnRlcm5hbHMuYXJQcm92aWRlcnM7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBwcm92aWRlciA9IGFyUHJvdmlkZXJzW2ldO1xyXG5cdFx0XHRcdFx0dmFyIHRpdGxlID0gcHJvdmlkZXIuZGlzcGxheU5hbWU7XHJcblx0XHRcdFx0XHRpZiAoZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0RmFsc2UocFsnc2hvd1Rvb2x0aXBzJ10pKSB0aXRsZSA9ICcnO1xyXG5cdFx0XHRcdFx0YXJIVE1MW2ErK10gPSAnPGRpdiBvbmNsaWNrPVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubWluaXNoYXJlLmJ0blByb3ZpZGVyX09uQ2xpY2soXFwnJyArIG1vZHVsZUlEICsgJ1xcJywgJyArIHByb3ZpZGVyLklEICsgJyxldmVudClcIiB2YWxpZ249XCJtaWRkbGVcIiBzdHlsZT1cImhlaWdodDoyMHB4O2N1cnNvcjpwb2ludGVyO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtwYWRkaW5nLXJpZ2h0OjEycHg7ZmxvYXQ6bGVmdFwiPjx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgaGVpZ2h0PVwiMjBcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiB2YWxpZ249XCJtaWRkbGVcIiBzdHlsZT1cImhlaWdodDoyMHB4O21hcmdpbjowcHg7cGFkZGluZzowcHg7dmVydGljYWwtYWxpZ246bWlkZGxlXCI+JztcclxuXHRcdFx0XHRcdGFySFRNTFthKytdID0gJzx0cj48dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcIj48aW1nIHNyYz1cIicgKyBiYXNlICsgJ1NoYXJlL0NoZWNrQm94LmdpZlwiIGlkPVwiJyArIG1vZHVsZUlEICsgJ19jYicgKyBwcm92aWRlci5JRCArICdcIj48L3RkPjx0ZCBzdHlsZT1cInBhZGRpbmctbGVmdDo2cHg7aGVpZ2h0OjIwcHg7d2lkdGg6MjBweDtcIj48aW1nIHRpdGxlPVwiJyArIHRpdGxlICsgJ1wiIGFsdD1cIicgKyB0aXRsZSArICdcIiBpZD1cIicgKyBtb2R1bGVJRCArICdfYnRuJyArIHByb3ZpZGVyLklEICsgJ1wiIHNyYz1cIicgKyBiYXNlICsgJ0hUTUxMb2dpbi8nICsgcHJvdmlkZXIubmFtZSArICdfMjAucG5nXCI+PC90ZD48L3RyPjwvdGFibGU+JztcclxuXHRcdFx0XHRcdGFySFRNTFthKytdID0gJzwvZGl2Pic7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGFySFRNTFthKytdID0gJzwvZGl2PjwvdGQ+PC90cj4nO1xyXG5cdFx0XHRcdGFySFRNTFthKytdID0gJzx0cj48dGQgaGVpZ2h0PVwiMzFcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I0Y3RjdGNztib3JkZXItdG9wOjFweCBzb2xpZCAjRTBFMEUwO2hlaWdodDozMXB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPic7XHJcblx0XHRcdFx0YXJIVE1MW2ErK10gPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiB2YWxpZ249XCJtaWRkbGVcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj48dHI+JztcclxuXHRcdFx0XHRpZiAocFsnYXV0b1NoYXJlQWN0aW9uSUQnXSkge1xyXG5cdFx0XHRcdFx0aWYgKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUocFsnc2hvd05ldmVyU2hhcmUnXSkpIHtcclxuXHRcdFx0XHRcdFx0YXJIVE1MW2ErK10gPSAnPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtYWxpZ246bGVmdFwiPjxzcGFuIGlkPVwiJyArIG1vZHVsZUlEICsgJ19uZXZlclwiIG9ubW91c2VvdmVyPVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubWluaXNoYXJlLnNob3dOZXZlckJ1YmJsZShcXCcnICsgbW9kdWxlSUQgKyAnXFwnKVwiIG9ubW91c2VvdXQ9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5taW5pc2hhcmUuaGlkZUJ1YmJsZShcXCcnICsgbW9kdWxlSUQgKyAnXFwnKVwiIG9uY2xpY2s9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5taW5pc2hhcmUubmV2ZXJTaGFyZVRoaXNfT25DbGljayhcXCcnICsgbW9kdWxlSUQgKyAnXFwnKVwiIHN0eWxlPVwiJyArIGxpbmtTdHlsZSArICdwYWRkaW5nLWxlZnQ6MTJweDtcIj4nICsgdGhpcy5URVhUKG0ubGFuZywgJ25ldmVyJykgKyAnPC9zcGFuPjwvdGQ+JztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFySFRNTFthKytdID0gJzx0ZD4mIzE2MDs8L3RkPic7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAocFsnc2hvd0Fsd2F5c1NoYXJlJ10gPT0gJ2NoZWNrZWQnIHx8IHBbJ3Nob3dBbHdheXNTaGFyZSddID09ICd1bmNoZWNrZWQnKSB7XHJcblx0XHRcdFx0XHRcdGFySFRNTFthKytdID0gJzx0ZCBzdHlsZT1cIndpZHRoOjUwcHg7cGFkZGluZy1yaWdodDoyMHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWFsaWduOnJpZ2h0XCI+PHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBpZD1cIicgKyBtb2R1bGVJRCArICdfYWx3YXlzXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlclwiIG9ubW91c2VvdmVyPVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubWluaXNoYXJlLnNob3dBbHdheXNCdWJibGUoXFwnJyArIG1vZHVsZUlEICsgJ1xcJylcIiBvbm1vdXNlb3V0PVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubWluaXNoYXJlLmhpZGVCdWJibGUoXFwnJyArIG1vZHVsZUlEICsgJ1xcJylcIiBvbmNsaWNrPVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubWluaXNoYXJlLmFsd2F5c1NoYXJlVGhpc19PbkNsaWNrKFxcJycgKyBtb2R1bGVJRCArICdcXCcpXCI+PHRyPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPjxkaXYgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjVweFwiPjxpbWcgaWQ9XCInICsgbW9kdWxlSUQgKyAnX2NiQWx3YXlzU2hhcmVcIiBzcmM9XCInICsgYmFzZSArICdTaGFyZS9jaGVja2JveC5naWZcIj48L2Rpdj48L3RkPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPjxzcGFuIHN0eWxlPVwiJyArIGxpbmtTdHlsZSArICdjb2xvcjojNTc1NzU3O3RleHQtZGVjb3JhdGlvbjpub25lO1wiPicgKyB0aGlzLlRFWFQobS5sYW5nLCAnYWx3YXlzJykgKyAnPC9zcGFuPjwvdGQ+PC90cj48L3RhYmxlPjwvdGQ+J1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0YXJIVE1MW2ErK10gPSAnPHRkPiYjMTYwOzwvdGQ+JztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YXJIVE1MW2ErK10gPSAnPHRkPiYjMTYwOzwvdGQ+JztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGFySFRNTFthKytdID0gJzx0ZCBzdHlsZT1cIndpZHRoOjQ4cHhcIj48YSBjbGFzcz1cImdpZy1taW5pc2hhcmUtYnV0dG9uIGdpZy1taW5pc2hhcmUtYnV0dG9uLXNoYXJlXCIgb25jbGljaz1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLm1pbmlzaGFyZS5idG5TaGFyZV9PbkNsaWNrKFxcJycgKyBtb2R1bGVJRCArICdcXCcsdHJ1ZSlcIiBpZD1cIicgKyBtb2R1bGVJRCArICdfYnRuT0tcIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyO2N1cnNvcjpwb2ludGVyO21hcmdpbi1yaWdodDo2cHg7Y29sb3I6IzU1NTU1NTtmb250LXdlaWdodDpib2xkO3RleHQtYWxpZ246Y2VudGVyO1wiPicgKyB0aGlzLlRFWFQobS5sYW5nLCAnc2hhcmUnKSArICc8L2E+PC90ZD48L3RyPjwvdGFibGU+JztcclxuXHRcdFx0XHRhckhUTUxbYSsrXSA9ICc8L3RkPjwvdHI+PC90YWJsZT4nO1xyXG5cdFx0XHRcdGFySFRNTFthKytdID0gJzwvZGl2Pic7XHJcblxyXG5cdFx0XHRcdGlmICgocFsnc2hvd0Fsd2F5c1NoYXJlJ10gIT0gbnVsbCAmJiAoJycgKyBwWydzaG93QWx3YXlzU2hhcmUnXSkudG9Mb3dlckNhc2UoKSAhPSAnaGlkZScpIHx8IGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUocFsnc2hvd05ldmVyU2hhcmUnXSkpIHtcclxuXHRcdFx0XHRcdHRoaXMuaGlkZVNoYXJlQ2FudmFzKG0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb250YWluZXIuaW5uZXJIVE1MID0gYXJIVE1MLmpvaW4oJycpO1xyXG5cdFx0XHRcdGlmICghbS5wWyd1c2VyQWN0aW9uJ10pIHtcclxuXHRcdFx0XHRcdG0ucFsndXNlckFjdGlvbiddID0gbmV3IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5Vc2VyQWN0aW9uKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChwWydhdXRvU2hhcmVBY3Rpb25JRCddICE9IG51bGwgJiYgcFsnc2hvd0Fsd2F5c1NoYXJlJ10gJiYgKCcnICsgcFsnc2hvd0Fsd2F5c1NoYXJlJ10pLnRvTG93ZXJDYXNlKCkgPT0gJ2NoZWNrZWQnKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFsd2F5c1NoYXJlVGhpc19PbkNsaWNrKG1vZHVsZUlEKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5hZGRFdmVudEhhbmRsZXJzKHsgbGlzdGVuZXJUeXBlOiAnY29tcG9uZW50JywgbGlzdGVuZXJEZXNjcmlwdGlvbjogJ2xpc3RlbmVyIGZvciB1cGRhdGluZyBzaG93U2hhcmVVSSBXaWRnZXRzJyB9LFxyXG5cdFx0XHRcdHsgb25Db25uZWN0OiBfcGkubWluaXNoYXJlLm9uQ2hhbmdlLFxyXG5cdFx0XHRcdFx0b25EaXNjb25uZWN0OiBfcGkubWluaXNoYXJlLm9uQ2hhbmdlLFxyXG5cdFx0XHRcdFx0b25Mb2dpbjogX3BpLm1pbmlzaGFyZS5vbkNoYW5nZSxcclxuXHRcdFx0XHRcdG9uTG9nb3V0OiBfcGkubWluaXNoYXJlLm9uQ2hhbmdlXHJcblx0XHRcdFx0fSk7XHJcblx0fVxyXG5cclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==