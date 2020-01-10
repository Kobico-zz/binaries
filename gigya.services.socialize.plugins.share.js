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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.socialize.plugins.share.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.socialize.plugins.share.js":
/*!**********************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.share.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="GSJSSDK.js" />
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

    if (typeof _pi.share == 'undefined') {
        _pi.share = {
            modules: {},
            contexts: {},
            contextCounter: 0,

            onChange: function (evt) {
                for (var moduleId in _pi.share.modules) {
                    var m = _pi.share.modules[moduleId];
                    m.user = evt.user;
                    if (evt && evt.user) {
                        var from;
                        /*if (evt.user.nickname && evt.user.nickname != '') {
						from = evt.user.nickname;
						} else */
                        if (evt.user.email && evt.user.email != '') {
                            from = evt.user.email;
                        }
                        if (from) {
                            var tbEmail = document.getElementById(moduleId + '_tbYourEmail');
                            if (tbEmail) {
                                tbEmail.value = from;
                                tbEmail.placeholderCleared = true;
                            }
                            document.cookie = '_gig_email=' + encodeURIComponent(from) + ';expires=Wed, 01 Jan 2020 12:00:00 GMT;path=/;'
                        }
                    }

                    if (evt.eventName == 'permissions' || ((evt.eventName == 'login' || evt.eventName == 'connect') && evt.provider)) {

                        if (m.contacts) {
                            m.gettingContacts = true;
                            window.gigya.services.socialize.getContacts(m.c, { callback: m.This.onContacts, context: m, enabledProviders: evt.provider });
                        }
                    }
                    for (var i = 0; i < m.i.arProviders.length; i++) {
                        var provider = m.i.arProviders[i];
                        if (provider.name.toLowerCase() == 'facebook' && _pi.share.canUseFacebookShare(moduleId)) continue;
                        var cb = document.getElementById(moduleId + '_cb' + provider.ID);
                        if (cb && !evt.user.identities[provider.name.toLowerCase()]) {
                            cb.checked = false;
                            provider.context.connected = false;
                            m.This.updateProviderButton(moduleId, provider.ID);
                        }

                    }
                }
            },
            closeAllModules: function (evt) {
                var modules = {};
                for (var moduleId in _pi.share.modules) { //storing the IDs because closeShare modifies _pi.share.modules
                    modules[moduleId] = true;
                }
                for (moduleId in modules) {
                    _pi.share.closeShare(moduleId);
                }
            },

            refreshFB: function (evt) {
                for (var moduleId in _pi.share.modules) {
                    if (_pi.share.modules[moduleId].sidebarDisabled || _pi.share.modules[moduleId].p.hideSidebar) return;
                    var cb = document.getElementById(moduleId + '_cb64');
                    if (cb && cb.checked && _pi.share.canUseFacebookShare(moduleId)) {
                        _pi.share.showFacebookShareDialog(moduleId);
                    } else {
                        _pi.share.hideFacebooklanghareDialog(moduleId);
                        _pi.share.showSidebar(moduleId);
                    }
                }
            },
            TEXT: function (lang, textKey, replaceStr, withStr) {
                return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.socialize.plugins.share.js', textKey, lang, replaceStr, withStr);
            },
            canUseFacebookShare: function (moduleId) {
                var m = this.modules[moduleId];
                return (!window.gigya.utils.validation.isExplicitTrue(m.p.hideSidebar) && !m.p['autoShareActionID'] && m.p.initialView == null && window.gigya.utils.validation.isExplicitTrue(m.i.isPopup) && window.gigya.utils.validation.isExplicitTrue(m.p.useFBDialog) && window.gigya.external.facebook.getParams().fb_at != null);
            },
            storeContext: function (context) {
                var id = 'shareUI_context_' + _pi.share.contextCounter;
                _pi.share.contexts[id] = context;
                _pi.share.contextCounter++;
                return id;
            },
            fetchCotnext: function (id) {
                var context = _pi.share.contexts[id];
                delete _pi.share.contexts[id];
                return context;
            },
            showShareUI: function (c, p, internals) {
                var GS = window.gigya.services.socialize;
                var rid = internals['rid'];
                if (!internals.redraw) {
                    var arProviders = GS.getProvidersByName(p['enabledProviders'] ? p['enabledProviders'] : (c['enabledProviders'] ? c['enabledProviders'] : '*'));
                    arProviders = GS.hideProvidersByName(arProviders, p['disabledProviders'] ? p['disabledProviders'] : (c['disabledProviders'] ? c['disabledProviders'] : ''));
                    arProviders = GS.getProvidersForRequiredCapabilities(arProviders, ['actions']);
                    if (arProviders.length > 6) arProviders = arProviders.splice(0, 6);

                    internals['arProviders'] = arProviders;
                    internals['moduleID'] = p['containerID'];

                    for (var i = 0; i < internals['arProviders'].length; i++) {
                        internals['arProviders'][i].context = {};
                    }
                }

                //this.showUI(c,p,internals);

                var This = this;
                var context = { This: this, conf: c, params: p, internals: internals };
                var contextID = this.storeContext(context);
                var params = {
                    cid: p.cid,
                    callback: function(res) {
                        res.context = context;
                        This.afterGetInfo(res)
                    },
                    context: contextID,
                    enabledProviders: p.enabledProviders,
                    disabledProviders: p.disabledProviders,
                    oauth_token: p.oauth_token
                }
                if (p['autoShareActionID'] != null) {
                    params.settings = p['autoShareActionID'];
                    params.group = 'gigyaShareSettings';
                }

                this.showUI(c, p, internals);
                if (!internals.redraw) {
                    window.gigya.events.dispatchForWidget({ eventName: 'load', containerID: p['containerID'] }, p);
                }
                internals.redraw = false;
                //if (!gigya.utils.validation.isExplicitTrue(p.hideSidebar)) {
                window.gigya.services.socialize.getUserInfo(c, params);
                //}
            },
            afterGetInfo: function (res) {
                var GS = window.gigya.services.socialize;
                var context = res.context;
                var This = context.This;

                if (This) {
                    var m = This.modules[context.internals.moduleID];
                }

                if (m) {
                    if (res.errorCode != 0) {
                        window.gigya.events.dispatchErrorFromResponse(context.params, res);
                        return;
                    }
                    var currentUserEmail = '';
                    if (res.user) m.user = res.user;
                    if (res.user) {
                        /*if (res.user.nickname && res.user.nickname != '') {
						currentUserEmail = res.user.nickname;
						} else */
                        if (res.user.email && res.user.email != '') {
                            currentUserEmail = res.user.email;
                        }
                    }
                    if (currentUserEmail) {
                        var tbEmail = document.getElementById(context.internals.moduleID + '_tbYourEmail');
                        if (tbEmail != null) {
                            tbEmail.value = currentUserEmail;
                            tbEmail.placeholderCleared = true;
                        }
                        document.cookie = '_gig_email=' + encodeURIComponent(currentUserEmail) + ';expires=Wed, 01 Jan 2020 12:00:00 GMT;path=/;'
                    }
                    if (res.settings) {
                        var settings = res.settings[m.p['autoShareActionID']];
                        if (settings && (!settings.expiration || settings.expiration > (new Date()).getTime())) {
                            if (settings.neverShare) {
                                This.closeShare(m.i.moduleID);
                                return;
                            }
                            if (settings.alwaysShare && !m.i.neverAutoPublish) {
                                m.i.neverRetry = true;
                                m.i.neverAutoPublish = true;
                                This.publishToProviders(m.i.moduleID, settings.providers.split(','));
                                return;
                            }
                        }
                    }
                    var connected = false;
                    var connectedToFacebook = false;

                    if (res.requestParams.provider && (res.operation == 'login' || res.operation == 'addConnection' || res.operation == 'requestPermissions')) {
                        var providerObj = GS._getProviderByName(res.requestParams.provider);
                        providerObj.context = { connected: true };
                        This.selectProviders(context.internals.moduleID, [providerObj]);
                    }
                    if (res.user && res.user.identities) {
                        if (res.user.UID && This.getCookie('_gig_shareUI_lastUID') != res.user.UID) {
                            This.clearSaveSelections();
                        }
                        var connectedProviders = [];
                        for (var identity in res.user.identities) {
                            var oId = res.user.identities[identity];
                            oId.connected = true;
                            var providerObj = GS._getProviderByName(identity);
                            providerObj.context = oId;
                            if (This.getProviderSelection(m.i.moduleID, providerObj.name) && !(oId.missingPermissions && oId.missingPermissions.toLowerCase().indexOf('actions') != -1)) {
                                connected = true;
                                connectedProviders.push(providerObj);
                                if (providerObj.ID == 64) connectedToFacebook = true;
                            }
                        }
                        if (!res.requestParams.provider) {
                            This.selectProviders(context.internals.moduleID, connectedProviders);
                        }
                    }
                    if (!(This.canUseFacebookShare(m.i.moduleID) && This.getProviderSelection(m.i.moduleID, 'facebook'))) {
                        This.hideFacebookShareDialog(context.internals.moduleID);
                        if (!window.gigya.utils.validation.isExplicitTrue(m.p.hideSidebar)) {
                            window.gigya.utils.DOM.showByID(context.internals.moduleID + '_sidebar');
                        }
                        This.changeView(context.params.initialView, m.i.moduleID);
                        if (document.getElementById(m.i.moduleID + '_emailCanvas').style.display != 'none' || document.getElementById(m.i.moduleID + '_bookmarksCanvas').style.display != 'none') This.disableSidebar(m.i.moduleID); //to redraw checkbox images
                    }
                }
                //gigya.utils.DOM._popupContainers[context.internals.moduleID+'_sidebar']=divSidebar; // so that it will be closed by hideUI
            },
            publishToProviders: function (moduleId, arProviders) {
                var m = this.modules[moduleId];
                var This = this;
                if (arProviders.length > 0) {
                    var params = {};
                    for (var p in m.p) {
                        params[p] = m.p[p];
                    }

                    if ((params.scope && params.scope.toLowerCase() == 'internal') || m.i.deleteScopeParams) {
                        delete params.scope; //internal scope is not supported in shareUI
                        delete m.c.scope;
                    }

                    params.enabledProviders = arProviders.join(',');
                    m.duringPublish = true;
                    params.callback = function (e) {
                        if (m.duringPublish) {
                            This.onPublish(e);
                            m.duringPublish = false;
                        }
                    }

                    var contextID = this.storeContext({ This: this, m: m })
                    params.context = contextID;

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
                } else {
                    this.onShareComplete(m);
                }
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
            showContactsDropdown: function (moduleId, event) {
                var m = this.modules[moduleId];
                var tbFriendsEmail = document.getElementById(moduleId + '_tbFriendsEmail');
                if (event && tbFriendsEmail.lastValue == tbFriendsEmail.value) return;
                tbFriendsEmail.lastValue = tbFriendsEmail.value;
                var This = this;
                this.hideContactsDropdown(moduleId);
                var divContacts = document.createElement('div');
                divContacts.style.position = 'absolute';
                var pos = window.gigya.global._GetElementPos(tbFriendsEmail);

                if (!_pi.addedContactsCSS) {
                    _pi.common.addCSS('.gig-contactList {width:280px;border:1px solid #C2C2C2; background-color: #F9F9F9}');
                    _pi.common.addCSS('.gig-contact {padding:0px 5px 0px 5px;font-family:arial;font-size:12px;color:#777777;overflow:hidden;white-space: nowrap;}');
                    _pi.addedContactsCSS = true;
                }

                divContacts.style.left = '' + (pos.left) + 'px';
                divContacts.style.top = '' + (pos.top + tbFriendsEmail.offsetHeight - 1) + 'px';
                divContacts.className = 'gig-contactList';


                divContacts.style.zIndex = window.gigya.utils.DOM.getNextZIndex();

                divContacts.id = moduleId + '_contacts';
                if ((!m['contacts'] || m['contacts'].length == 0) && m.gettingContacts) {
                    divContacts.innerHTML = '<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%"><tr><td style="vertical-align:middle;text-align:center;height:90px"><img style="margin:auto;display:block;" src="' + window.gigya._.getCdnResource('/gs/i/Share/loader.gif') + '" alt="" /></td></tr></table>';
                } else if (m['contacts']) {
                    var arRecipients = tbFriendsEmail.value.split(',');
                    var lastRecipient = arRecipients[arRecipients.length - 1];
                    arRecipients = arRecipients.splice(0, arRecipients.length - 1);
                    var contactsPrefix = arRecipients.join(',');
                    if (contactsPrefix != '') contactsPrefix += ', ';
                    var searchText = lastRecipient.replace(/ /g, '').toLowerCase();
                    if (searchText != '') {
                        var foundCount = 0;
                        m.contactsDropdown = { location: 0, arDivs: [] };
                        for (var i = 0; (i < m.contacts.length && foundCount < 5) ; i++) {
                            var c = m.contacts[i];
                            var cHash = (c.firstName + c.lastName + c.email).toLowerCase();
                            if (cHash.indexOf(searchText) != -1) {
                                foundCount++;
                                var divContact = document.createElement('div');
                                divContact.style.height = '20px';
                                var contactDisplay = '';
                                var name = window.gigya.utils.sanitize.sanitizeHTML(c.firstName + ' ' + c.lastName);
                                if (name != ' ') contactDisplay = '"' + name + '" ';
                                contactDisplay += '&#60;' + c.email + '&#62;,';
                                divContact.innerHTML = contactDisplay;
                                divContact.contactData = contactDisplay.replace('&#60;', '<').replace('&#62;', '>') + ' ';
                                divContact.style.cursor = 'pointer';
                                divContact.className = 'gig-contact';
                                divContact.divIndex = foundCount - 1;
                                divContact.onmouseover = function () {
                                    if (m.contactsDropdown.arDivs[m.contactsDropdown.location]) m.contactsDropdown.arDivs[m.contactsDropdown.location].onmouseout();
                                    this.style.backgroundColor = '#D6EDFB';
                                    m.contactsDropdown.location = this.divIndex;
                                }
                                divContact.onmouseout = function () {
                                    this.style.backgroundColor = 'transparent';
                                }
                                divContact.onclick = function () {
                                    tbFriendsEmail.watermarkCleared = true;
                                    tbFriendsEmail.value = contactsPrefix + this.contactData;

                                    This.setCaretPosition(tbFriendsEmail, tbFriendsEmail.value.length);
                                }
                                divContacts.appendChild(divContact);
                                m.contactsDropdown.arDivs.push(divContact);
                            }
                        }
                        if (m.contactsDropdown.arDivs.length > 0) {
                            m.contactsDropdown.arDivs[0].onmouseover();
                        }
                    }
                }
                if (divContacts.innerHTML != '') {
                    document.body.appendChild(divContacts);
                    divContacts.fncHide = function (e) {
                        if (e) {
                            if (e.target && e.target == tbFriendsEmail) return;
                            if (e.srcElement && e.srcElement == tbFriendsEmail) return;
                        }
                        This.hideContactsDropdown(moduleId);
                    }
                    divContacts.fncOnkeyup = function (e) {
                        var oContactsDropdown = m.contactsDropdown
                        if (oContactsDropdown && oContactsDropdown.arDivs.length > 0) {
                            var location = oContactsDropdown.location;
                            if (e.keyCode == 38) { //up
                                location--;
                            } else if (e.keyCode == 40) { //down
                                location++;
                            } else if (e.keyCode == 13) { //enter
                                oContactsDropdown.arDivs[location].onclick();
                                divContacts.fncHide();
                                return;
                            }
                            if (location < 0) location = 0;
                            if (location >= oContactsDropdown.arDivs.length) location = oContactsDropdown.arDivs.length - 1;
                            oContactsDropdown.arDivs[location].onmouseover();
                        }
                    }
                    if (document.attachEvent) {
                        document.attachEvent('onclick', divContacts.fncHide);
                        document.attachEvent('onkeyup', divContacts.fncOnkeyup);
                    } else if (document.addEventListener) {
                        document.addEventListener('click', divContacts.fncHide, false);
                        document.addEventListener('keyup', divContacts.fncOnkeyup, false);
                    }
                } else {
                    This.hideContactsDropdown(moduleId);
                }
            },
            setCaretPosition: function (ctrl, pos) {
                if (ctrl.setSelectionRange) {
                    ctrl.focus();
                    ctrl.setSelectionRange(pos, pos);
                }
                else if (ctrl.createTextRange) {
                    var range = ctrl.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', pos);
                    range.moveStart('character', pos);
                    range.select();
                }
            },
            hideContactsDropdown: function (moduleId) {
                var m = this.modules[moduleId];
                var el = document.getElementById(moduleId + '_contacts');
                if (el) {
                    if (document.attachEvent) {
                        document.detachEvent('onclick', el.fncHide);
                        document.detachEvent('onkeyup', el.fncOnkeyup);
                    } else if (document.addEventListener) {
                        document.removeEventListener('click', el.fncHide, false);
                        document.removeEventListener('keyup', el.fncOnkeyup, false);
                    }
                    el.parentNode.removeChild(el);
                }
            },
            onContacts: function (res) {
                var m = res.context;
                var This = m.This;
                m.gettingContacts = false;
                if (res && res.contacts) {
                    if (m.contacts) {
                        m.contacts = m.contacts.concat(res.contacts.asArray());
                    } else {
                        m.contacts = res.contacts.asArray();
                    }
                    This.showContactsDropdown(m.i.moduleID);
                } else {
                    m.contacts = [];
                    This.hideContactsDropdown(m.i.moduleID);
                }
            },
            getProviderSelection: function (moduleId, provider) {
                var m = this.modules[moduleId];
                var id = 'shareUI';
                var cookie = this.getCookie('_gig_' + id + '_cb_' + provider);
                return (cookie != '0');
            },
            getCheckedProviders: function (moduleId, ignoreIDs) {
                var m = this.modules[moduleId];
                var arProviders = [];
                for (var i = 0; i < m.i.arProviders.length; i++) {
                    var ignore;
                    ignore = false;
                    var provider = m.i.arProviders[i];
                    if (ignoreIDs) {
                        for (var u = 0; u < ignoreIDs.length; u++) {
                            if (ignoreIDs[u] == provider.ID) ignore = true;
                        }
                    }
                    if (!ignore) {
                        var cb = document.getElementById(moduleId + '_cb' + provider.ID);
                        if (cb) {
                            if (cb.checked) arProviders.push(provider);
                        }
                    }

                }
                return arProviders;
            },
            btnShare_OnClick: function (moduleId, hideUI) {
                this.shareToProviders(moduleId);
                if (hideUI) {
                    var m = this.modules[moduleId];
                    document.getElementById(m.originalP.containerID).style.display = 'none';
                }
            },
            clearSaveSelections: function () {
                var arProviders = window.gigya.services.socialize.getAllProviders();
                for (var i = 0; i < arProviders.length; i++) {
                    document.cookie = '_gig_shareUI_cb_' + arProviders[i] + '=x;expires=Wed, 01 Jan 1999 12:00:00 GMT";path=/;"';
                }
            },
            shareToProviders: function (moduleId, ignoreIDs) {
                var m = this.modules[moduleId];
                var arProviders = this.getCheckedProviders(moduleId, ignoreIDs);
                if (arProviders.length > 0 || (ignoreIDs && ignoreIDs.length > 0)) {
                    //save selection
                    document.cookie = '_gig_shareUI_lastUID=' + m.user.UID + ';expires=Wed, 01 Jan 2020 12:00:00 GMT";path=/;"';
                    for (var i = 0; i < m.i.arProviders.length; i++) {
                        var provider = m.i.arProviders[i];
                        var cb = document.getElementById(moduleId + '_cb' + provider.ID);
                        if (cb) {
                            document.cookie = '_gig_shareUI_cb_' + provider + '=' + (cb.checked ? 1 : 0) + ';expires=Wed, 01 Jan 2020 12:00:00 GMT";path=/;"';
                        }
                    }

                    var cbAlwaysShare = document.getElementById(moduleId + '_cbAlwaysShare');
                    if (cbAlwaysShare && cbAlwaysShare.checked) {
                        this.setSettings(moduleId, true, false, arProviders.join(','));
                        m.i.neverAutoPublish = true;
                    }
                    m.sidebarDisabled = true;
                    var tbUserMessage = document.getElementById(moduleId + '_comment');
                    if (tbUserMessage) {
                        this.setUserMessage(m, tbUserMessage.placeholderCleared == true ? tbUserMessage.value : '');
                    }
                    this.setWorkingText(m.i.moduleID, this.TEXT(m.lang, 'publishing_please_wait'));

                    this.publishToProviders(moduleId, arProviders);
                } else {
                    this.showErrorMessage(moduleId, this.TEXT(m.lang, 'to_share_please_select_your_social_networks'));
                }
            },
            showErrorMessage: function (moduleId, msg) {
                var m = this.modules[moduleId];
                var divErr = document.getElementById(moduleId + '_errorMessage');
                if (!divErr) {
                    divErr = document.createElement('div');
                    divErr.style.position = 'absolute';
                    divErr.style.visibility = 'hidden';
                    divErr.id = moduleId + '_errorMessage';

                    // For compatibility with all screen-readers, these attributes must be on the element that is being updated.
                    // Some screen-readers will look within children but not all of them will.
                    // Specifically Mac's "Accessibility" screen-reader will not.
                    divErr.setAttribute('role', 'alert');
                    divErr.setAttribute('aria-live', 'polite');
                    divErr.setAttribute('aria-atomic', 'true');

                    document.body.appendChild(divErr);
                }
                divErr.style.zIndex = window.gigya.utils.DOM.getNextZIndex();
                divErr.innerHTML = '<table role="presentation" width="389" height="81" cellpadding="0" cellspacing="0" style="width:389;height:81px;text-align:center;vertical-align:middle"><tr><td style="text-align:center;vertical-align:middle;background-image:url(\'' + window.gigya._.getCdnResource('/gs/i/Share/Bubble.png') + '\')"><div style="font-size:14px;font-weight:bold;color:#FFFFFF; font-family:arial;position:relative;left:17px;width:362px;padding:5px;">' + msg + '</div></td></tr></table>';
                var container = document.getElementById(moduleId);
                var pos = window.gigya.global._GetElementPos(container);
                if (m.i.isPopup) {
                    divErr.style.left = pos.left + 'px';
                } else {
                    divErr.style.left = (pos.left + 57) + 'px';
                }
                divErr.style.top = pos.top + (parseInt(container.style.height) - divErr.offsetHeight) / 2 + 'px';
                divErr.style.visibility = 'visible';

                window.setTimeout(function () { divErr.style.visibility = 'hidden' }, 3500);
            },
            setWorkingText: function (moduleId, text) {
                window.gigya.utils.DOM.hideByID(moduleId + '_commentCanvas');
                window.gigya.utils.DOM.hideByID(moduleId + '_emailCanvas');
                window.gigya.utils.DOM.hideByID(moduleId + '_bookmarksCanvas');
                window.gigya.utils.DOM.showByID(moduleId + '_workingCanvas');
                var divText = document.getElementById(moduleId + '_workingText');
                if (divText) divText.innerHTML = text;
            },
            closeShare: function (moduleId) {
                var m = this.modules[moduleId];
                if (m) {
                    var originalContainer = document.getElementById(m.originalP.containerID);
                    var divSidebar = document.getElementById(m.i.moduleID + '_sidebar');
                    _pi.share.unfixDivPosition(originalContainer);
                    _pi.share.unfixDivPosition(divSidebar);
                    window.gigya.services.socialize._closeComponent(m.i.rid, true);
                    var divSidebar = document.getElementById(moduleId + '_sidebar');
                    if (divSidebar) divSidebar.parentNode.removeChild(divSidebar);
                    var ifrSidebar = document.getElementById('gigya_ifr_' + moduleId + '_sidebar');
                    if (ifrSidebar) ifrSidebar.parentNode.removeChild(ifrSidebar);
                    delete this.modules[moduleId]
                }
            },
            showEmail: function (moduleId) {
                var m = this.modules[moduleId];
                if (m.sidebarDisabled) return;
                this.showBack(moduleId);

                window.gigya.utils.DOM.showByID(moduleId + '_emailCanvas');
                window.gigya.utils.DOM.hideByID(moduleId + '_commentCanvas');
                this.disableSidebar(moduleId);
                this.hideFacebookShareDialog(moduleId);
                if (!m.contacts) {

                    m.gettingContacts = true;
                    window.gigya.services.socialize.getContacts(m.c, { callback: this.onContacts, context: m, enabledProviders: m.p.emailProviders ? m.p.emailProviders : '*', disabledProviders: '' });
                }
                if (document.getElementById(moduleId + '_emailConnect') && document.getElementById(moduleId + '_emailConnect').innerHTML == '') {
                    var emailProviders = '*';
                    if (m.p.emailProviders != null) emailProviders = m.p.emailProviders;
                    var providers = window.gigya.services.socialize.getProvidersByName(emailProviders);
                    providers = window.gigya.services.socialize.getProvidersForRequiredCapabilities(providers, ['contacts']);
                    var connectParams = {
                        pendingRegistration: m.p.pendingRegistration,
                        cid: m.p.cid,
                        context: m.p.context,
                        requiredCapabilities: 'contacts',
                        useHTML: true,
                        showTermsLink: false,
                        showEditLink: false,
                        height: 30,
                        width: providers.length * 35 - 5,
                        containerID: moduleId + '_emailConnect',
                        UIConfig: '<config><body><background frame-color="Transparent" /></body></config>',
                        enabledProviders: providers.join(','),
                        extraPermissions: 'contacts',
                        onPermissions: _pi.share.onChange
                    };
                    window.gigya.services.socialize.showAddConnectionsUI(m.c, connectParams);
                }
            },
            sendEmail: function (moduleId, captchaTicket) {
                var m = this.modules[moduleId];
                var tbFriendsEmail = document.getElementById(moduleId + '_tbFriendsEmail');
                var tbYourEmail = document.getElementById(moduleId + '_tbYourEmail');
                var tbMessage = document.getElementById(moduleId + '_tbMessage');
                var actionObject = m.p.userAction;
                var emailBody = (m.p['emailBody'] ? m.p['emailBody'] : 'Hi,<br /><br />$userMsg$<br /><br />I thought you\'d like this:<br />$URL$<br /><br />' + (actionObject.title ? actionObject.title : '') + '<br />' + (actionObject.description ? actionObject.description : '') + '<br />');

                // organize emails (removing reduntant commas)
                var emails = tbFriendsEmail.value.split(',');

                window.gigya.utils.array.forEach(emails, function (email) {
                    if (!email.trim()) {
                        emails.splice(i, 1);
                    }
                });

                tbFriendsEmail.value = emails.join(',');

                //validation
                if (!tbFriendsEmail.watermarkCleared || !window.gigya.pluginUtils.validation.isEmailListValid(tbFriendsEmail.value)) {
                    tbFriendsEmail.style.borderColor = '#E70707';
                    tbFriendsEmail.focus();
                    return;
                } else {
                    tbFriendsEmail.style.borderColor = '#CCCCCC';
                }

                if (tbYourEmail.value.replace(/ /g, '') == '' || !window.gigya.pluginUtils.validation.isEmailValid(tbYourEmail.value)) {
                    tbYourEmail.style.borderColor = '#E70707';
                    tbYourEmail.focus();
                    return;
                } else {
                    tbYourEmail.style.borderColor = '#CCCCCC';
                }

                var arRecipients = this.getRecipientsArray(tbFriendsEmail.value);

                this.setWorkingText(m.i.moduleID, this.TEXT(m.lang, 'sending_email'));
                var params = {
                    // captchaTicket: captchaTicket,
                    emailSubject: m.p['emailSubject'] ? m.p['emailSubject'] : actionObject.title,
                    emailBody: emailBody,
                    senderEmail: tbYourEmail.value,
                    userMsg: tbMessage.value,
                    emails: tbFriendsEmail.value,
                    linkBack: actionObject.linkBack ? actionObject.linkBack : document.location.href,
                    userAction: actionObject,
                    callback: function () {
                        window.gigya.events.dispatchForWidget({
                            eventName: 'send',
                            provider: 'email',
                            recipients: arRecipients,
                            sender: tbYourEmail.value,
                            userMessage: tbMessage.value
                        }, m.p);
                        m.arPublishedProviders = ['email'];
                        document.cookie = '_gig_email=' + encodeURIComponent(tbYourEmail.value) + ';expires=Wed, 01 Jan 2020 12:00:00 GMT;path=/;'
                        m.This.onShareComplete(m);
                    }
                };
                window.gigya.services.socialize.sendEmail(m.c, params);
            },
            getMyEmail: function () {
                var nameEQ = "_gig_email=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
                }
                return null;
            },
            showBack: function (moduleId) {
                window.gigya.utils.DOM.showByID(moduleId + '_lnkBack');
                window.gigya.utils.DOM.hideByID(moduleId + '_lnkMore');
                window.gigya.utils.DOM.hideByID(moduleId + '_lnkEmail');
            },
            showBookmarks: function (moduleId) {
                var m = this.modules[moduleId];
                if (m.sidebarDisabled) return;
                this.showBack(moduleId);

                var moreEnabledProviders = m.p.moreEnabledProviders;
                var moreDisabledProviders = m.p.moreDisabledProviders;
                if (!moreEnabledProviders || (moreEnabledProviders == '*')) {
                    moreEnabledProviders = 'facebook,*';
                    if (moreDisabledProviders && moreDisabledProviders.indexOf('facebook') != -1) {
                        moreEnabledProviders = '*';
                    }
                }

                if (!moreDisabledProviders) {
                    moreDisabledProviders = '';
                } else {
                    moreDisabledProviders += ',';
                }
                moreEnabledProviders = moreEnabledProviders.toLowerCase();
                moreDisabledProviders = moreDisabledProviders.toLowerCase();
                if (!window.gigya.utils.validation.isExplicitTrue(m.p.hideSidebar)) {
                    moreDisabledProviders += m.i.arProviders.join(',').toLowerCase();
                }

                var arMoreEnabledProviders = moreEnabledProviders.split(',');
                var arMoreDisabledProviders = moreDisabledProviders.split(',');
                var arNewMoreDisabledProviders = [];
                for (var i = 0; i < arMoreDisabledProviders.length; i++) {
                    var f = false;
                    for (var u = 0; u < arMoreEnabledProviders.length; u++) {
                        if (arMoreDisabledProviders[i] == arMoreEnabledProviders[u]) f = true;
                    }
                    if (!f) arNewMoreDisabledProviders.push(arMoreDisabledProviders[i]);
                }

                moreDisabledProviders = arNewMoreDisabledProviders.join(',');

                var params = {
                    cid: m.p.cid,
                    containerID: moduleId + '_bookmarksWidget',
                    width: m.p.width - 71,
                    height: m.p.height - 100,
                    onBookmarkWindowOpened: this.onBookmarkDone,
                    UIConfig: '<config><body><controls><snbuttons type="textUnder" color="#9b9b9b" /></controls></body></config>',
                    enabledBookmarks: moreEnabledProviders,
                    disabledBookmarks: moreDisabledProviders,
                    context: { m: m },
                    onLoad: function () {
                        window.gigya.utils.DOM.hideByID(m.i.moduleID + '_progress');
                        window.gigya.utils.DOM.showByID(m.i.moduleID + '_bookmarksWidget');
                        
                        // Set initial focus so user can use keyboard navigation. Small delay is necessary.
                        setTimeout(function() {
                            document.querySelector('#' + m.i.moduleID + '_bookmarksWidget button').focus();
                        }, 100);
                    }
                };
                window.gigya.services.socialize.showBookmarkUI(m.c, params);

                window.gigya.utils.DOM.showByID(moduleId + '_bookmarksCanvas');
                window.gigya.utils.DOM.hideByID(moduleId + '_commentCanvas');
                this.disableSidebar(moduleId);
                this.hideFacebookShareDialog(moduleId);
            },
            onBookmarkDone: function (evt) {
                var m = evt.context.m;
                window.gigya.events.dispatchForWidget({ eventName: 'send', provider: evt.provider }, m.p);
                m.arPublishedProviders = [evt.provider];
                m.This.onShareComplete(m);
            },
            lnkBack_OnClick: function (moduleId) {
                var m = this.modules[moduleId];
                window.gigya.utils.DOM.hideByID(moduleId + '_lnkBack');
                window.gigya.utils.DOM.showByID(moduleId + '_lnkMore');
                window.gigya.utils.DOM.showByID(moduleId + '_lnkEmail');

                window.gigya.utils.DOM.hideByID(moduleId + '_workingCanvas');
                window.gigya.utils.DOM.hideByID(moduleId + '_bookmarksCanvas');
                window.gigya.utils.DOM.hideByID(moduleId + '_emailCanvas');

                var captcha = document.getElementById(moduleId + '_captcha');
                if (captcha && captcha.parentNode) captcha.parentNode.removeChild(captcha);
                document.getElementById(moduleId + '_workingText').style.display = '';

                if (m.fbShareVisible) {
                    this.showFacebookShareDialog(moduleId);
                }
                window.gigya.utils.DOM.showByID(moduleId + '_commentCanvas');
                this.enableSidebar(moduleId);

                setTimeout(function() {
                    document.querySelector('#' + moduleId + '_commentCanvas *[tabindex]').focus();
                }, 100);
            },
            getBackLink: function (m) {
                var oLinkStyle = m.resolver.Resolve('+/config/elements/lblWorking/links | +/config/body/texts/links');
                var linkStyle = window.gigya.services.socialize.getStyleString(oLinkStyle, true);
                return '<span style="' + linkStyle + '" onclick="gigya.services.socialize.plugins.share.uncheckSentProviders(\'' + m.i.moduleID + '\')">' + this.TEXT(m.lang, 'back') + '</span>';
            },
            getRetryLink: function (m) {
                var oLinkStyle = m.resolver.Resolve('+/config/elements/lblWorking/links | +/config/body/texts/links');
                var linkStyle = window.gigya.services.socialize.getStyleString(oLinkStyle, true);
                return '<span style="' + linkStyle + '" onclick="gigya.services.socialize.plugins.share.lnkRetry_OnClick(\'' + m.i.moduleID + '\')">' + this.TEXT(m.lang, 'retry') + '</span>';
            },
            getCloseLink: function (m) {
                var oLinkStyle = m.resolver.Resolve('+/config/elements/lblWorking/links | +/config/body/texts/links');
                var linkStyle = window.gigya.services.socialize.getStyleString(oLinkStyle, true);
                return '<span style="' + linkStyle + '" onclick="gigya.services.socialize.plugins.share.lnkClose_OnClick(\'' + m.i.moduleID + '\')">' + this.TEXT(m.lang, 'close') + '</span>';
            },
            uncheckSentProviders: function (moduleId) {
                var m = this.modules[moduleId];
                for (var i = 0; i < m.arPublishedProviders.length; i++) {
                    var provider = m.arPublishedProviders[i];
                    var cb = document.getElementById(moduleId + '_cb' + provider.ID);
                    if (cb) {
                        cb.checked = false;
                    }
                }

                for (var i = 0; i < m.arExpiredProviders.length; i++) {
                    var provider = window.gigya.services.socialize._getProviderByName(m.arExpiredProviders[i]);
                    var cb = document.getElementById(moduleId + '_cb' + provider.ID);
                    if (cb) {
                        cb.checked = false;
                    }
                    provider.context.connected = false;
                }
                this.lnkBack_OnClick(moduleId);
            },
            lnkRetry_OnClick: function (moduleId) {
                var m = this.modules[moduleId];
                this.publishToProviders(moduleId, m.arErrorProviders);
            },
            lnkClose_OnClick: function (moduleId) {
                var m = this.modules[moduleId];
                this.onShareComplete(m, true);
            },
            connectToProvider: function (m, providerID) {
                var provider = window.gigya.services.socialize._getProviderByID(providerID);
                var getPermissionsOnly = (provider.context && provider.context.connected);
                if (getPermissionsOnly) {
                    provider.context.triedGettingPermisions = true; //to avoid trying more than once
                }

                var snid = provider.ID;
                var sendUserAction = (provider.ID == 64) //facebook
                var lid = window.gigya.services.socialize._listenerID;

                /*var conf={
				APIKey:m.c.APIKey,
				signIDs: m.c.signIDs,
				enabledProviders: m.c.enabledProviders,
				disabledProviders: m.c.disabledProviders,
				sessionExpiration: m.c.sessionExpiration
				}*/
                var params = {
                    pendingRegistration: m.p.pendingRegistration,
                    provider: provider.name,
                    context: m.p.context,
                    permissions: 'actions',
                    enabledProviders: m.p.enabledProviders,
                    disabledProviders: m.p.disabledProviders,
                    cid: m.p.cid,
                    sessionExpiration: m.p.sessionExpiration
                };

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
            getRecipientsArray: function (sRecipients) {
                var arRecipients = sRecipients.split(',');
                var arNewRecipients = [];
                for (var i = 0; i < arRecipients.length; i++) {
                    var r = arRecipients[i];
                    var name;
                    var email;
                    var ltPos = r.indexOf('<');
                    var gtPos = r.indexOf('>');
                    if (r && r.replace(/ /g, '') != '') {
                        if (ltPos != -1 && gtPos > ltPos) {
                            name = r.split('<')[0].replace(/"/g, '').replace(new RegExp('^[\\s]+', 'g'), '').replace(new RegExp('[\\s"]+$', 'g'), '');
                            email = r.split('<')[1].split('>')[0];
                        } else {
                            name = '';
                            email = r.replace(new RegExp('^[\\s]+', 'g'), '').replace(new RegExp('[\\s"]+$', 'g'), '');;
                        }
                        arNewRecipients.push({ name: name, email: email });
                    }
                }
                return arNewRecipients;
            },
            onShareComplete: function (m, neverShowSuccessMessage) {
                var GS = window.gigya.services.socialize;
                if (m.arPublishedProviders && m.arPublishedProviders.length > 0) {
                    var oEvent = {
                        eventName: 'sendDone',
                        providers: m.arPublishedProviders.join(','),
                        userMessage: m.p['userAction']['userMessage'],
                        targetURL: m.p['userAction']['linkBack']
                    }

                    if (m.providerPostIDs) {
                        oEvent.providerPostIDs = m.providerPostIDs;
                    }
                    if (oEvent.providers == 'email') {
                        var tbFriendsEmail = document.getElementById(m.i.moduleID + '_tbFriendsEmail');
                        var tbYourEmail = document.getElementById(m.i.moduleID + '_tbYourEmail');
                        var tbMessage = document.getElementById(m.i.moduleID + '_tbMessage');

                        oEvent.userMessage = tbMessage.value;
                        oEvent.recipients = m.This.getRecipientsArray(tbFriendsEmail.value);
                        oEvent.sender = tbYourEmail.value;
                    }
                    window.gigya.events.dispatchForWidget(oEvent, m.p);
                }
                if (m.arErrorProviders && (m.arErrorProviders.length > 0 || m.arLimitReachedProviders.length > 0)) {
                    window.gigya.events.dispatchForWidget({
                        eventName: 'error',
                        errorCode: 500023,
                        errorMessage: 'Provider error',
                        status: 'FAIL',
                        statusMessage: 'Provider error',
                        failedProviders: m.arErrorProviders.concat(m.arLimitReachedProviders).join(','),
                        context: m.p.context
                    }, m.p);
                    m.arErrorProviders = [];
                }
                if (m.arPublishedProviders.length > 0 && !neverShowSuccessMessage && (!window.gigya.utils.validation.isExplicitFalse(m.p['successMessage']) && !window.gigya.utils.validation.isExplicitFalse(m.p['showSuccessMessage']))) {
                    var textMessagePosted = this.TEXT(m.lang, 'message_shared_successfully');
                    if (m.arPublishedProviders.join('') == 'email') {
                        textMessagePosted = this.TEXT(m.lang, 'message_sent_successfully');
                    }
                    m.arPublishedProviders = [];
                    this.setWorkingText(m.i.moduleID, textMessagePosted);
                    m.i.closeTimeout = setTimeout(function () { m.This.onShareDone(m.i.moduleID, m.This) }, 2000);
                } else {
                    m.This.onShareDone(m.i.moduleID);
                }
            },
            onShareDone: function (moduleID, This) {
                if (!This) This = this;
                var m = This.modules[moduleID];
                if ((m != null) && (m.i != null)) {
                    clearTimeout(m.i.closeTimeout);
                    if (m.i.isPopup) {
                        window.gigya.services.socialize.plugins.share.closeShare(m.i.moduleID);
                    } else {
                        document.getElementById(m.p.containerID).innerHTML = '&#160;'; //&#160;
                        m.i.redraw = true;
                        This.showShareUI(m.originalC, m.originalP, m.i);

                    }
                }
            },
            onPublish: function (res) {
                var context = this.fetchCotnext(res.context);
                var m = context.m;
                var This = context.This;
                var GS = window.gigya.services.socialize;
                m.i.deleteScopeParams = true; //to avoid multiple internal publish

                m.arErrorProviders = [];
                m.arExpiredProviders = [];
                m.arLimitReachedProviders = [];

                if (res.providerPostIDs) {
                    m.providerPostIDs = res.providerPostIDs;
                }

                var providerErrorCodes = res.providerErrorCodes;
                if ((res.errorCode == 0 || res.errorCode == 403024) && providerErrorCodes) {
                    for (var i = 0; i < res.providerErrorCodes.length; i++) {
                        var provider = window.gigya.services.socialize._getProviderByName(providerErrorCodes[i].provider);
                        if (providerErrorCodes[i].errorCode == 0) {
                            m.arPublishedProviders.push(provider);
                            window.gigya.events.dispatchForWidget({ eventName: 'send', provider: provider.name }, m.p);
                        } else if (providerErrorCodes[i].errorCode == 403024) { //Provider_limit_reached = 403024
                            m.arLimitReachedProviders.push(provider);
                        } else {
                            if (providerErrorCodes[i].errorCode == 403009) { //Provider_session_expired = 403009
                                m.arExpiredProviders.push(provider.displayName);
                                provider.context.connected = false;
                            }
                            m.arErrorProviders.push(provider.displayName);
                        }
                    }
                } else {
                    var errorProviders = res.requestParams.enabledProviders.split(',');
                    if (res.errorCode == 403009) {
                        m.arExpiredProviders = errorProviders;
                    }
                    m.arErrorProviders = errorProviders;
                }
                if (m.arErrorProviders.length == 0 || m.i.neverRetry) {
                    This.onShareComplete(m);
                } else if (m.arExpiredProviders.length > 0) {
                    var errorText = This.TEXT(m.lang, 'the_connection_to_the_following_provider_had_been_disconnected');
                    var backOrClose = This.TEXT(m.lang, 'back_or_close').replace('%back', This.getBackLink(m)).replace('%close', This.getCloseLink(m));
                    This.setWorkingText(m.i.moduleID, errorText + '<br />' + m.arExpiredProviders.join(',') + '<br /><br />' + backOrClose);
                } else {
                    var errorText = This.TEXT(m.lang, 'there_was_an_error_sharing_to_the_following_networks');
                    var pleaseRetryOrClose = This.TEXT(m.lang, 'please_retry_or_close').replace('%retry', This.getRetryLink(m)).replace('%close', This.getCloseLink(m));
                    This.setWorkingText(m.i.moduleID, errorText + '<br />' + m.arErrorProviders.join(',') + '<br /><br />' + pleaseRetryOrClose);
                }
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
                if (!cb) return;
                var provider = window.gigya.services.socialize._getProviderByID(providerID);
                var m = this.modules[moduleId];
                if (m.sidebarDisabled) return;
                if (cb.checked) {
                    cb.checked = false;
                } else {
                    if (providerID == 64 && this.canUseFacebookShare(moduleId)) {
                        cb.checked = true;
                    } else {
                        if (provider.context && provider.context.connected && (!(provider.context.missingPermissions && provider.context.missingPermissions.toLowerCase().indexOf('actions') != -1))) {
                            cb.checked = true;
                        } else {
                            this.connectToProvider(m, providerID);
                        }
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
                var base = window.gigya._.getCdnResource( '/gs/i/Share/');

                if (cb && img) {
                    if (cb.checked) {
                        cb.src = base + 'Checked.png';
                    } else {
                        cb.src = base + 'NotChecked.png';
                    }
                }
                if (provider.ID == 64) { //facebook
                    if (cb && cb.checked && this.canUseFacebookShare(moduleId)) {
                        m.fbShareVisible = true;
                        this.showFacebookShareDialog(moduleId);
                    } else {
                        m.fbShareVisible = false;
                        this.hideFacebookShareDialog(moduleId);
                    }
                }
            },
            setUserMessage: function (m, value) {
                var regexp = /(.*?)(u|U)serAction/;
                for (var param in m.p) {
                    if (regexp.test(param)) {
                        m.p[param]['userMessage'] = value;
                    }
                }
            },
            showFacebookShareDialog: function (moduleId) {
                var m = this.modules[moduleId];
                this.hideShareCanvas(m);
                var fbRoot = document.getElementById('fb-root');
                if (!m.loadedFBShare) {
                    if (fbRoot) fbRoot.style.visibility = 'hidden';
                    this.hideSidebar(moduleId);
                    var showSidebar = this.showSidebar;
                    m.loadedFBShare = 'notYet';
                    var tbMessage = document.getElementById(moduleId + '_comment');
                    this.setUserMessage(m, tbMessage.placeholderCleared == true ? tbMessage.value : '');
                    window.setTimeout(function () {
                        var sb = document.getElementById(moduleId + '_sidebar');
                        if (sb && sb.style.display == 'none') {
                            m.loadedFBShare = false;
                            showSidebar(moduleId);
                            _pi.share.hideFacebookShareDialog(moduleId);
                            var FBProviderObj = window.gigya.services.socialize._getProviderByName('facebook');
                            if (!(FBProviderObj.context && FBProviderObj.context.connected)) {
                                var cb = document.getElementById(moduleId + '_cb64');
                                if (cb) cb.checked = false;
                                m.This.updateProviderButton(moduleId, 64);
                            }
                        }
                    }, 20000);
                    var contextID = this.storeContext({ This: this, m: m });
                    window.gigya.services.socialize.convertAction({ APIKey: m.c.APIKey }, { provider: 'facebook', userAction: m.p.userAction, callback: this.onAction, context: contextID });
                } else if (m.loadedFBShare == true) {
                    if (fbRoot) fbRoot.style.visibility = 'visible';
                }
            },
            hideFacebookShareDialog: function (moduleId) {
                var m = _pi.share.modules[moduleId];
                this.showShareCanvas(m);
                if (m.i.isPopup) {
                    var fbRoot = document.getElementById('fb-root');
                    if (fbRoot) fbRoot.style.visibility = 'hidden';
                }
            },
            showShareCanvas: function (m) {
                if (m.i['grayedOutScreenOpacity'] > 0 && m.i.isPopup) {
                    window.gigya.services.socialize.GrayOut(true, { 'zindex': document.getElementById(m.originalP.containerID).style.zIndex - 1, 'opacity': m.i['grayedOutScreenOpacity'] });
                }
                if (m.i.isPopup) {
                    var dialogEl = document.getElementById(m.originalP.containerID);
                    dialogEl.setAttribute('role', 'dialog');
                    dialogEl.setAttribute('tabindex', '-1');
                    dialogEl.focus();
                }
                window.gigya.utils.DOM.showByID(m.originalP.containerID);
                window.gigya.utils.DOM.showByID('gigya_ifr_' + m.originalP.containerID);
            },
            hideShareCanvas: function (m) {
                if (m.i['grayedOutScreenOpacity'] > 0 && m.i.isPopup) {
                    window.gigya.services.socialize.GrayOut(false);
                }
                window.gigya.utils.DOM.hideByID(m.originalP.containerID);
                window.gigya.utils.DOM.hideByID('gigya_ifr_' + m.originalP.containerID);
                if (m.i.isPopup) {
                    var dialogEl = document.getElementById(m.originalP.containerID);
                    dialogEl.removeAttribute('role');
                }

            },
            hideSidebar: function (moduleId) {
                var m = _pi.share.modules[moduleId];
                window.gigya.utils.DOM.hideByID(m.originalP.containerID + '_sidebar');
                window.gigya.utils.DOM.hideByID('gigya_ifr_' + m.originalP.containerID + '_sidebar');
                if (m.i.isPopup) {
                    var el = document.getElementById(m.originalP.containerID + '_sidebar');
                    el.removeAttribute('role', 'dialog');
                }
            },
            showSidebar: function (moduleId) {
                var m = _pi.share.modules[moduleId];
                if (m.i.isPopup) {
                    var el = document.getElementById(m.originalP.containerID + '_sidebar');
                    el.setAttribute('role', 'dialog');
                    el.setAttribute('tabindex', '-1');
                }
                window.gigya.utils.DOM.showByID(m.originalP.containerID + '_sidebar');
                window.gigya.utils.DOM.showByID('gigya_ifr_' + m.originalP.containerID + '_sidebar');
            },
            waitforFacebookDialog: function (m) {
                var found = false;
                var els = document.body.getElementsByTagName('iframe');
                for (var i = 0; i < els.length; i++) {
                    var ifr = els[i];

                    if (ifr.className == 'FB_UI_Dialog') {
                        //var dark=document.getElementById('darkenScreenObject');
                        //if (dark) dark.style.zIndex=ifr.style.zIndex-1; 	  
                        window.gigya.services.socialize.GrayOut(false);
                        m.i['grayedOutScreenOpacity'] = 0;
                        var pos = window.gigya.global._GetElementPos(ifr);
                        var top = pos.top;
                        var left = pos.left;
                        if (top && top > 0) {
                            found = true;
                            var originalContainer = document.getElementById(m.originalP.containerID);
                            var divSidebar = document.getElementById(m.i.moduleID + '_sidebar');
                            _pi.share.unfixDivPosition(originalContainer);
                            _pi.share.unfixDivPosition(divSidebar);
                            if (top && top > 0) {
                                if (left < 63) {
                                    left = 63;
                                    ifr.parentNode.parentNode.style.left = '53px';
                                }
                                _pi.share.changeDivPosition(m.originalP.containerID, top - 10, left - 10, 10);
                                _pi.share.changeDivPosition(m.i.moduleID + '_sidebar', top + (ifr.offsetHeight - divSidebar.gigHeight) / 2, left - 10 - 53, 6);
                                _pi.share.showSidebar(m.i.moduleID);
                            }
                        }
                    }
                }
                if (!found) setTimeout(function () { _pi.share.waitforFacebookDialog(m) }, 100);
            },
            unfixDivPosition: function (div) {
                if (div && div.fncChangePosition) {
                    div.addedEvents = false;
                    if (window.detachEvent) {
                        window.detachEvent('onscroll', div.fncChangePosition);
                        window.detachEvent('onresize', div.fncChangePosition);
                    } else if (window.removeEventListener) {
                        window.removeEventListener('scroll', div.fncChangePosition, false);
                        window.removeEventListener('resize', div.fncChangePosition, false);
                    }
                }
            },
            fixDivPosition: function (div, fncChangePosition) {
                div.fncChangePosition = fncChangePosition;
                if (!div.addedEvents) {
                    div.addedEvents = true;
                    if (window.attachEvent) {
                        window.attachEvent('onscroll', div.fncChangePosition);
                        window.attachEvent('onresize', div.fncChangePosition);
                    } else if (window.addEventListener) {
                        window.addEventListener('scroll', div.fncChangePosition, false);
                        window.addEventListener('resize', div.fncChangePosition, false);
                    }
                }
                fncChangePosition();
                window.setTimeout(function () { fncChangePosition() }, 10); //IE7 bug
            },
            onAction: function (res) {
                var fbRoot = document.getElementById('fb-root');
                if (fbRoot) fbRoot.style.visibility = 'visible';
                var context = this.fetchCotnext(res.context);
                var This = context.This;
                var m = context.m;
                m.loadedFBShare = true;

                FB.ui(window.gigya.utils.JSON.deserialize(res.action), function (fbRes) {
                    if (m.p['scope'] && m.p['scope'].toLowerCase() == 'both') {
                        var conf = {};
                        for (var p in m.c) {
                            conf[p] = m.c[p];
                        }
                        var params = {};
                        for (var p in m.p) {
                            params[p] = m.p[p];
                        }
                        conf.enabledProviders = 'facebook';
                        params.enabledProviders = 'facebook';
                        params.scope = 'internal';


                        window.gigya.services.socialize.publishUserAction(conf, params);
                        m.i.deleteScopeParams = true; //will override params scope param to avoid multiple internal publish
                    }
                    This.hideFacebookShareDialog(m.i.moduleID, This);
                    if (fbRes && fbRes.post_id) {
                        var FBProviderObj = window.gigya.services.socialize._getProviderByName('facebook');
                        window.gigya.reports.report('action', m.c.APIKey, m.c.cid, m.c.source, m.c.sourceData, { sn: 'facebook' });
                        m.arPublishedProviders.push(FBProviderObj);
                        window.gigya.events.dispatchForWidget({ eventName: 'send', provider: FBProviderObj.name }, m.p);

                        This.setWorkingText(m.i.moduleID, This.TEXT(m.lang, 'publishing_please_wait'));
                        FB.api(fbRes.post_id, {}, function (postRes) { //get comment text, then continue
                            var msg = postRes.message;
                            if (!msg) msg = '';
                            var tbUserMessage = document.getElementById(m.i.moduleID + '_comment');
                            tbUserMessage.placeholderCleared = true;
                            tbUserMessage.value = msg;
                            This.setUserMessage(m, msg);
                            This.shareToProviders(m.i.moduleID, [64]);
                        })
                    } else { //skip means close
                        This.closeShare(m.i.moduleID);
                    }
                });
                This.waitforFacebookDialog(m);
            },
            getRoundCornersHTML: function (innerHTML) {
                var a = 0;
                var ar = [];
                var base = window.gigya._.getCdnResource( '/gs/i/share/Outline_');
                ar[a++] = '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;vertical-align:middle;line-height:1px;">';
                ar[a++] = '<tr><td width="5"><img src="' + base + 'TopLeft.png" alt="" /></td><td width="99%" style="border-top:1px solid #cccccc;background-color:#FFFFFF">&#160;</td><td width="5"><img src="' + base + 'TopRight.png" alt="" /></td></tr>';
                ar[a++] = '<tr><td width="5" style="border-left:1px solid #cccccc;background-color:#FFFFFF">&#160;</td><td width="99%" style="background-color:#FFFFFF">' + innerHTML + '</td><td width="5" style="border-right:1px solid #cccccc;background-color:#FFFFFF">&#160;</td></tr>';
                ar[a++] = '<tr><td width="5"><img src="' + base + 'BottomLeft.png" alt="" /></td><td width="99%" style="border-bottom:1px solid #cccccc;background-color:#FFFFFF">&#160;</td><td width="5"><img src="' + base + 'BottomRight.png" alt="" /></td></tr>';
                ar[a++] = '</table>';
                return ar.join('');
            },
            getItemHTML: function (moduleId, resolver, width, thumbSize, maxTitleHeight, maxDescHeight) {
                var GS = window.gigya.services.socialize;
                var m = this.modules[moduleId];
                var action = m.p.userAction;
                var mediaItems = action['mediaItems'];
                var thumbURL;
                if (mediaItems) {
                    for (var u = 0; u < mediaItems.length; u++) {
                        var mediaItem = mediaItems[u];
                        if (mediaItem != null) {
                            if (mediaItem.type == 'image') {
                                thumbURL = mediaItem.src;
                                break;
                            }
                            if (mediaItem.type == 'video' || mediaItem.type == 'flash') {
                                thumbURL = mediaItem.previewImageURL;
                                break;
                            }
                        }
                    }
                }

                m.thumbURL = window.gigya.global.getPhotoURL(thumbURL);;
                var arHTML = [];
                var a = 0;
                if (!thumbSize) thumbSize = 80;
                arHTML[a++] = '<table role="presentation" height="' + thumbSize + '" width="' + thumbSize + '" cellspacing="0" cellpadding="0" style="padding-right:9px"><tr valign="top">';
                if (thumbURL) {
                    arHTML[a++] = '<td width="' + thumbSize + '"><div style="width:' + thumbSize + 'px;height:' + thumbSize + 'px"><img style="display:none;width:inherit;height:inherit;" onload="var img=new Image(); img.src=this.src;var This=this; window.setTimeout(function(){if (img.width==0) {This.src=\'\'; This.src=img.src;return;} if (img.width>img.height) This.width=\'' + thumbSize + '\'; else This.height=\'' + thumbSize + '\'; This.style.display=\'\';},100)" src="' + thumbURL + '" alt="" /></div></td>';
                }
                var title = action['title'];
                var description = action['description'];
                var titleTrunc = false;
                var descriptionTrunc = false;
                if (!title) title = '';
                if (!description) description = '';
                var oTitleStyle = resolver.Resolve('+/config/elements/lblTitle | +/config/body/item');

                var oDescriptionStyle = resolver.Resolve('+/config/elements/item');
                if (!width) width = m.p.width - 225;
                if (!maxTitleHeight) maxTitleHeight = 18;
                if (!maxDescHeight) maxDescHeight = 57;
                var measures = window.gigya.pluginUtils.layout.measureText(title, oTitleStyle, width);
                while ((measures.h > maxTitleHeight || measures.w > width) && title.length > 0) {
                    titleTrunc = true;
                    title = title.substring(0, title.length - 2);
                    measures = window.gigya.pluginUtils.layout.measureText(title + '...', oTitleStyle, width);
                }
                if (titleTrunc) title += '...';
                if (description.length > 800) {
                    descriptionTrunc = true;
                    description = description.substring(0, 800);
                }
                measures = window.gigya.pluginUtils.layout.measureText(description, oDescriptionStyle, width);
                while ((measures.h > maxDescHeight || measures.w > width) && description.length > 0) {
                    descriptionTrunc = true;
                    description = description.substring(0, description.length - 2);
                    measures = window.gigya.pluginUtils.layout.measureText(description + '...', oDescriptionStyle, width);
                }
                if (descriptionTrunc) description += '...';

                arHTML[a++] = '<td style="padding-left:10px;"><div style="padding-bottom:4px;' + GS.getStyleString(oTitleStyle) + 'width:' + width + 'px">' + window.gigya.utils.sanitize.sanitizeHTML(title) + '</div>';
                arHTML[a++] = '<div style="' + GS.getStyleString(oDescriptionStyle) + 'width:' + width + 'px">' + window.gigya.utils.sanitize.sanitizeHTML(description) + '</div>';
                arHTML[a++] = '</td></tr>';
                arHTML[a++] = '</table>'
                return arHTML.join('');
            },
            changeDivPosition: function (divID, top, left, frameOffset) {
                var div = document.getElementById(divID);
                var ifr = document.getElementById('gigya_ifr_' + divID);
                var sTop = top;
                var sLeft = left;
                if (!window.gigya.localInfo.isIE) frameOffset = 0;
                if (top != null) sTop = '' + Math.ceil(parseInt(top)) + 'px';
                if (left != null) sLeft = '' + Math.ceil(parseInt(left)) + 'px';
                if (div) {
                    div.fixedLeft = left;
                    div.fixedTop = top;
                    if (top != null) div.style.top = sTop;
                    if (left != null) div.style.left = sLeft;
                }
                if (ifr) {
                    if (!frameOffset) frameOffset = 0;
                    if (top != null) ifr.style.top = '' + (top + frameOffset) + 'px';
                    if (left != null) ifr.style.left = '' + (left + frameOffset) + 'px';
                }
            },
            disableSidebar: function (moduleId) {
                var base = window.gigya._.getCdnResource( '/gs/i/');
                var m = this.modules[moduleId];
                var arProviders = m.i.arProviders;
                for (var i = 0; i < arProviders.length; i++) {
                    var provider = arProviders[i];
                    var cb = document.getElementById(moduleId + '_cb' + provider.ID);
                    if (cb) {
                        if (cb.checked) {
                            cb.src = base + 'Share/checked_dis.png';
                        } else {
                            cb.src = base + 'Share/notChecked_dis.png';
                        }
                    }

                    var iconImage = document.getElementById(moduleId + '_btn' + provider.ID);
                    iconImage.src = base + 'share/' + provider.name + '_25_dis.png';

                    var buttonEl = document.getElementById(moduleId + '_socialBtn_' + provider.ID);
                    buttonEl.setAttribute('aria-disabled', 'true');
                    buttonEl.setAttribute('tabindex', '-1');
                }
                m.sidebarDisabled = true;
            },
            enableSidebar: function (moduleId) {
                var base = window.gigya._.getCdnResource( '/gs/i/');
                var m = this.modules[moduleId];
                var arProviders = m.i.arProviders;
                for (var i = 0; i < arProviders.length; i++) {
                    var provider = arProviders[i];
                    var cb = document.getElementById(moduleId + '_cb' + provider.ID);
                    if (cb.checked) {
                        cb.src = base + 'Share/checked.png';
                    } else {
                        cb.src = base + 'Share/notChecked.png';
                    }

                    var iconImage = document.getElementById(moduleId + '_btn' + provider.ID);
                    iconImage.src = base + 'share/' + provider.name + '_25.png';

                    var buttonEl = document.getElementById(moduleId + '_socialBtn_' + provider.ID);
                    buttonEl.removeAttribute('aria-disabled');
                    buttonEl.setAttribute('tabindex', '0');
                }
                m.sidebarDisabled = false;
            },
            getBlueButtonHTML: function (text) {
                return '<table role="presentation" style="cursor:pointer;width:75px;height:23px;background-color:#3B5998;border:1px solid;border-top-color: #D9DFEA;border-left-color: #D9DFEA;border-bottom-color: #0E1F5B;border-right-color: #0E1F5B" width="75" height="23" cellpadding="0" cellspacing="0"><tr><td style="font-family:arial;font-size:13px;color:#FFFFFF;vertical-align:middle;text-align:center">' + text + '</td></tr></table>';
            },
            getSendButtonHTML: function (text) {
                return '<table role="presentation" style="cursor:pointer;width:75px;height:23px;background-color:#36769B;border-bottom:1px solid #20465D;border-right:1px solid #20465D" width="75" height="23" cellpadding="0" cellspacing="0"><tr><td style="font-family:arial;font-size:13px;color:#FFFFFF;vertical-align:middle;text-align:center">' + text + '</td></tr></table>';
            },
            setSettings: function (moduleID, alwaysShare, neverShare, providers) {
                var m = this.modules[moduleID];
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
            changeView: function (view, moduleId) {
                var m = this.modules[moduleId];
                if (!m.changedView) {
                    if (view) {
                        view = view.toLowerCase();
                        switch (view) {
                            case 'more':
                                this.showBookmarks(moduleId);
                                break;
                            case 'email':
                                this.showEmail(moduleId);
                                break;
                            default:
                                break;
                        }
                    }
                    m.changedView = true;
                }
            },
            showUI: function (c, p, internals) {
                var GS = window.gigya.services.socialize;
                var rid = internals['rid'];
                var This = this;

                var resolver = new window.gigya.global.resolver(window.gigya.global.resolver.defaultProccessor);
                resolver.addConfig('<config><body font="arial"><captions bold="true" size="13" color="#ffffff" background-color="#FFFFFF" frame-thickness="0" /><background frame-thickness="0" frame-color="#999999" background-color="#FFFFFF" /><texts size="12px" color="#555555"><links color="#CFCFCF" size="11px" bold="false" /></texts></body></config>');
                resolver.addConfig('<config><elements><lblWorking bold="true" size="12" color="#575757"><links underline="true" color="#5197DD" /></lblWorking><lblTitle bold="true" size="12px" color="#555555" /><lblShare size="16" /><item font="arial" size="11px" color="#808080" /></elements></config>');

                resolver.addConfig(c['UIConfig']);
                resolver.addConfig(p['UIConfig']);

                var lang = c['lang'];
                if (typeof p['lang'] != 'undefined') lang = p['lang'];

                var moduleID = internals['moduleID'];

                this.modules[moduleID] = { originalC: c, originalP: p, i: internals, This: This, resolver: resolver, arPublishedProviders: [] };
                if (internals['isPopup']) {
                    var oPopup = window.gigya.services.socialize._createJSPopup2(rid, resolver);
                    c = oPopup.c;
                    p = oPopup.p;
                }
                this.modules[moduleID].c = c;
                this.modules[moduleID].p = p;
                this.modules[moduleID].lang = lang;

                var containerID = p['containerID'];

                var w = p['width'];
                var h = p['height'];


                var arHTML = [];
                var a = 0;
                var container = document.getElementById(containerID);
                var oBgStyle = resolver.Resolve('+/config/body/background');
                var borderString = 'border: 5px solid #555555';
                if (internals['isPopup']) {
                    oBgStyle['frame-thickness'] = 0;
                    borderString = '';
                }

                var oLinkStyle = resolver.Resolve('+/config/body/texts/links');
                var oTextStyle = resolver.Resolve('+/config/body/texts');
                var oWorkingTextStyle = resolver.Resolve('+/config/elements/lblWorking | +/config/body/texts');

                var textStyle = GS.getStyleString(oTextStyle);
                var linkStyle = GS.getStyleString(oLinkStyle, true);
                var base = window.gigya._.getCdnResource( '/gs/i/');

                var shareCanvasWidth = p['width'];
                var shareCanvasHeight = p['height'];

                if (!internals.isPopup) {
                    shareCanvasWidth -= 63;
                    shareCanvasHeight -= 10;
                }
                var escapedID = moduleID.replace(/[.]/g, '\\.');
                arHTML[a++] = '<div id="' + moduleID + '_shareCanvas" style="background-color:#FFFFFF; width:' + shareCanvasWidth + 'px;height:' + shareCanvasHeight + 'px;text-align:left;' + borderString + '">';
                _pi.common.addCSS(['#', escapedID, ' .tabbing-button { height:30px !important; }', '#', escapedID, ' td,#', escapedID, ' div, #', escapedID, ' td:hover, #', escapedID, ' tr:hover, #', escapedID, ' tr, #', escapedID, ' table, #', escapedID, ' tbody, #', escapedID, ' th {position:static;table-layout: auto;width:auto;font-size:1px;vertical-align:top;border-collapse:separate;border:none;padding:0px;margin:0;background:none repeat scroll 0 0 transparent;text-align:left;float:none;} #', escapedID, ' {vertical-align:top;position:static;padding:0px;margin:0px;text-align:left;background:none repeat scroll 0 0 transparent}'
								  , '#', escapedID, '_sidebar td, #', escapedID, '_sidebar div, #', escapedID, '_sidebar td:hover, #', escapedID, '_sidebar tr:hover, #', escapedID, '_sidebar table {position:static;table-layout: auto;line-height:1px;width:auto;font-size:1px;vertical-align:top;border-collapse:separate; border:none; padding:0px;margin:0px;background:none repeat scroll 0 0 transparent;float:none;} #', escapedID, '_sidebar {text-align:left;background:none repeat scroll 0 0 transparent}'
                ]);

                //arHTML[a++]='<style> #'+escapedID+' td, #'+escapedID+' table {width:auto;font-size:1px;vertical-align:top;border-collapse:separate;border:none; padding:0px;;margin:0px;} #'+moduleID+' {text-align:left}</style>';
                //arHTML[a++]='<style> #'+escapedID+'_sidebar td, #'+escapedID+'_sidebar table {width:auto;font-size:1px;vertical-align:top;border-collapse:separate; border:none; padding:0px;margin:0px;} #'+moduleID+'_sidebar {text-align:left}</style>';
                arHTML[a++] = '<table role="presentation" id="' + moduleID + '_bookmarksCanvas" width="100%" height="' + shareCanvasHeight + '" cellspacing="0" cellpadding="0" valign="middle" style="width:100%;height:' + shareCanvasHeight + ';display:none;line-height:normal;border: 1px solid #555555;">';
                var bookmarksInnerCanvasHeight = shareCanvasHeight - 4;
                if (internals.isPopup) {
                    bookmarksInnerCanvasHeight -= 27;
                    arHTML[a++] = '<tr><td height="27" style="height:27px; background-color:#6A9DBC"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%"><tr><td style="font-family:Tahoma;font-size:14px;font-weight:bold;color:#FFFFFF;padding-left:6px;vertical-align:middle">' + this.TEXT(lang, 'share_with_your_friends') + '</td><td style="text-align:right;"><div style="padding:10px;text-align:right;" ><img style="cursor:pointer;" onclick="gigya.services.socialize.plugins.share.closeShare(\'' + moduleID + '\')" src="' + base + 'Share/CloseIcon2.gif" alt="" /></div></td></tr></table></td></tr>';
                }

                arHTML[a++] = '<tr><td align="center" valign="middle" style="vertical-align:middle;height:' + bookmarksInnerCanvasHeight + 'px"><center><img id="' + moduleID + '_progress" src="' + window.gigya._.getCdnResource('/gs/i/progress_ani.gif') + '" alt="" /><div id="' + moduleID + '_bookmarksWidget" style="display:none"></div></center></td></tr></table>';

                arHTML[a++] = '<table role="presentation"  width="' + shareCanvasWidth + '" height="' + shareCanvasHeight + '" id="' + moduleID + '_emailCanvas" cellspacing="0" cellpadding="0" valign="top" style="width:' + shareCanvasWidth + 'px;height:' + shareCanvasHeight + 'px;display:none;line-height:normal;border: 1px solid #555555;">';
                if (internals.isPopup) {
                    arHTML[a++] = '<tr><td height="27" style="height:27px; background-color:#6A9DBC"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%"><tr><td style="font-family:Tahoma;font-size:14px;font-weight:bold;color:#FFFFFF;padding-left:6px;vertical-align:middle">' + this.TEXT(lang, 'share_with_your_friends') + '</td><td style="text-align:right;"><div style="padding:10px;text-align:right;" ><img style="cursor:pointer;" onclick="gigya.services.socialize.plugins.share.lnkClose_OnClick(\'' + moduleID + '\')" src="' + base + 'Share/CloseIcon2.gif" alt="" /></div></td></tr></table></td></tr>';
                }

                if (p.emailProviders == null || p.emailProviders.split(' ').join('') != '') {
                    arHTML[a++] = '<tr><td style="vertical-align:middle;height:48px; background-color:#F7F7F7;text-align:center"><table role="presentation" cellspacing="0" cellpadding="0" style="margin-left: auto;margin-right: auto;"><tr>';
                    arHTML[a++] = '<td style="vertical-align:middle;padding-right:7px;"><span style="' + textStyle + ';font-size:12px;font-weight:bold;color:#777777">' + this.TEXT(lang, 'import_contacts_and_email_to_friends') + '</span></td>';
                    arHTML[a++] = '<td style="vertical-align:middle"><div id="' + moduleID + '_emailConnect"></div></td></tr></table></td></tr>';

                    arHTML[a++] = '<tr><td style="height:20px"><table role="presentation" width="100%" style="width:100%" cellspacing="0" cellpadding="0"><tr><td style="width:270px;border-top:1px solid #CCCCCC">&#160;</td><td style="width: 18px"><img src="' + base + 'Share/pointer.png" alt="" /></td><td style="border-top:1px solid #CCCCCC">&#160;</td></tr></table></td></tr>';
                }

                arHTML[a++] = '<tr><td valign="middle" style="vertical-align:middle;padding-left: 40px;">';

                var waterMarkText = this.TEXT(lang, 'separate_multiple_addresses_with_commas');

                arHTML[a++] = '<table role="presentation" cellspacing="0" cellpadding="0" valign="top" style="line-height:normal">'
                var inputStyle = 'float:none;border:1px solid #D8D8D8; width:' + (shareCanvasWidth - 205) + 'px;height:21px;color:#777777;font-size:11px;font-family:arial;font-size:12px;padding: 0 0 0 5px;';
                var inputWrapperStyle = 'padding-bottom:6px';
                arHTML[a++] = '<tr valign="top"><td width="85" style="' + textStyle + 'padding-top:5px;white-space:nowrap;padding-right:5px;font-weight:bold">' + this.TEXT(lang, 'to') + '</td><td><div style="' + inputWrapperStyle + '"><input aria-label="' + this.TEXT(lang, 'to') + '" tabindex="0" id="' + moduleID + '_tbFriendsEmail" type="text" style="' + inputStyle + '" onkeyup="gigya.services.socialize.plugins.share.showContactsDropdown(\'' + moduleID + '\',event)" onblur="if (this.value==\'\') {this.watermarkCleared=false; this.value=\'' + waterMarkText.replace(/'/g, '\\\'') + '\'}" onfocus="if(!this.watermarkCleared) {this.watermarkCleared=true; this.value=\'\';}" value="' + waterMarkText + '" /></div></td></tr>';
                arHTML[a++] = '<tr valign="top"><td width="85" style="' + textStyle + 'padding-top:5px;white-space:nowrap;padding-right:5px;font-weight:bold">' + this.TEXT(lang, 'from') + '</td><td><div style="' + inputWrapperStyle + '"><input aria-label="' + this.TEXT(lang, 'from') + '" tabindex="0" id="' + moduleID + '_tbYourEmail" type="text" style="' + inputStyle + '" /></div></td></tr>';
                arHTML[a++] = '<tr valign="top"><td width="85" style="' + textStyle + 'padding-top:5px;white-space:nowrap;padding-right:5px;font-weight:bold">' + this.TEXT(lang, 'message') + '</td><td><div style="' + inputWrapperStyle + '"><textarea aria-label="' + this.TEXT(lang, 'message') + '" tabindex="0" id="' + moduleID + '_tbMessage" onkeyup="var tb=document.getElementById(\'' + moduleID + '_comment\');if (tb!=null) tb.value=this.value;" onfocus="var tb=this;setTimeout(function(){tb.select(); if (gigya.localInfo.isMobile &#38;&#38; document.execCommand) document.execCommand(\'selectAll\');},100)" style="' + inputStyle + 'height:36px;resize: none;overflow:auto;margin:0px;"></textarea></div></td></tr>';

                arHTML[a++] = '<tr valign="top"><td>&#160;</td><td style="' + textStyle + '"><div style="height:50px">' + this.getItemHTML(moduleID, resolver, shareCanvasWidth - 260, 50, 20, 20) + '</div></td></tr></table>';

                arHTML[a++] = '</td></tr>';
                arHTML[a++] = '<tr><td align="right" height="37" style="text-align:right;vertical-align:bottom; text-align:right;padding-bottom:8px;padding-right:10px;"><div align="right" style="float:right;width:75px;text-align:right" onclick="gigya.services.socialize.plugins.share.sendEmail(\'' + moduleID + '\')" onkeydown="if((event.which || event.keyCode) == 13) gigya.services.socialize.plugins.share.sendEmail(\'' + moduleID + '\')" tabindex="0" role="button">' + this.getSendButtonHTML(this.TEXT(lang, 'send')) + '</div></td></tr></table>';

                arHTML[a++] = '<table role="presentation" id="' + moduleID + '_workingCanvas" width="100%" height="100%" cellspacing="0" cellpadding="0" valign="top" style="display:none; width: ' + shareCanvasWidth + 'px; height: ' + shareCanvasHeight + 'px;line-height:normal">';
                if (internals.isPopup) {
                    arHTML[a++] = '<tr><td height="28" align="right" style="text-align:right"><div style="padding:10px;text-align:right;"><img style="cursor:pointer;" onclick="gigya.services.socialize.plugins.share.onShareComplete(gigya.socialize.plugins.share.modules[\'' + moduleID + '\'])" src="' + base + 'Share/CloseIcon_gray.png" alt="" /></div></td></tr>';
                }
                arHTML[a++] = '<tr valign="top"><td><center id="' + moduleID + '_workingTextContainer"><div id="' + moduleID + '_workingText"  style="' + GS.getStyleString(oWorkingTextStyle) + 'text-align:center;font-weight:bold;line-height:1.5;padding-top:80px"></div></center></td></tr></table>';
                arHTML[a++] = '<table role="presentation" id="' + moduleID + '_commentCanvas" width="100%" height="100%" cellspacing="0" cellpadding="0" valign="top" style="width: ' + shareCanvasWidth + 'px; height: ' + shareCanvasHeight + 'px;line-height:normal">';
                var shareInnerCanvasHeight = shareCanvasHeight - 47;
                if (internals.isPopup) {
                    shareInnerCanvasHeight -= 27;
                    arHTML[a++] = '<tr><td height="27" style="height:27px; background-color:#6E84B5;border:1px solid #3A5A97"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%"><tr><td style="font-family:Tahoma;font-size:14px;font-weight:bold;color:#FFFFFF;padding-left:6px;vertical-align:middle">' + this.TEXT(lang, 'share_with_your_friends') + '</td><td style="text-align:right;"><div style="padding:10px;text-align:right;" ><img style="cursor:pointer;" onclick="gigya.services.socialize.plugins.share.closeShare(\'' + moduleID + '\')" src="' + base + 'Share/CloseIcon.png" alt="" /></div></td></tr></table></td></tr>';
                }
                var waterMarkText = 'aaa';
                arHTML[a++] = '<tr><td class="gig-shareUI-actionCanvas" style="height:' + shareInnerCanvasHeight + 'px;border-left: 1px solid #555555;border-right: 1px solid #555555"><table role="presentation" width="100%" style="width:100%" valign="top" cellspacing="0" cellpadding="0">';
                arHTML[a++] = '<tr><td style="padding-top:30px;padding-left:42px;"><textarea tabindex="0" id="' + moduleID + '_comment"  onkeyup="var tb=document.getElementById(\'' + moduleID + '_tbMessage\');if (tb!=null) tb.value=this.value;" border="0" style="padding-left:5px; resize: none;font-family:arial; font-size:12px; color:#555555; border: 1px solid #CCCCCC;overflow:auto; width:' + (shareCanvasWidth - 120) + 'px;height:36px"></textarea></td></tr>';
                arHTML[a++] = '<tr><td style="padding-top:6px;padding-left:42px;">' + this.getItemHTML(moduleID, resolver, shareCanvasWidth - 210) + '</td></tr></table></td></tr>';
                arHTML[a++] = '<tr><td style="vertical-align:bottom !important;background-color: #F7F7F7; border-top:1px solid #CCCCCC;border-left: 1px solid #555555;border-right: 1px solid #555555;border-bottom: 1px solid #555555; padding-bottom:8px;padding-right:10px;padding-left:42px;">';
                arHTML[a++] = '<table role="presentation" width="100%" style="width:100%;text-align:right" height="23" cellpadding="0" cellspacing="0"><tr>';
                if (p['autoShareActionID']) {
                    var actionDisplay = p['autoShareActionDisplay'];
                    if (actionDisplay == null) actionDisplay = 'this';
                    actionDisplay = actionDisplay.substring(0, 12);
                    actionDisplay = actionDisplay.replace('<', '&#60;').replace('>', '&#62;');
                    if (window.gigya.utils.validation.isExplicitTrue(p['showNeverShare'])) {
                        arHTML[a++] = '<td style="vertical-align:middle;text-align:left"><span onclick="gigya.services.socialize.plugins.share.neverShareThis_OnClick(\'' + moduleID + '\')" style="' + linkStyle + 'color:#575757;text-decoration:underline">' + this.TEXT(lang, 'never_share_this', '%name', actionDisplay) + '</span></td>';
                    }
                    if (p['showAlwaysShare'] == 'checked' || p['showAlwaysShare'] == 'unchecked') {
                        arHTML[a++] = '<td align="right" style="padding-right:30px;vertical-align:middle"><table role="presentation" cellpadding="0" cellspacing="0" style="cursor:pointer" onclick="gigya.services.socialize.plugins.share.alwaysShareThis_OnClick(\'' + moduleID + '\')"><tr><td style="vertical-align:middle"><img id="' + moduleID + '_cbAlwaysShare" src="' + base + 'Share/checkbox.gif" style="padding-right:5px" alt="" /></td><td style="vertical-align:middle"><span style="' + linkStyle + 'color:#575757;">' + this.TEXT(lang, 'always_share_name', '%name', actionDisplay) + '</span></td></tr></table></td>';
                    }
                }
                arHTML[a++] = '<td>&#160;</td><td width="75" align="right" style="width:75px;text-align:right" onclick="gigya.services.socialize.plugins.share.btnShare_OnClick(\'' + moduleID + '\')" onkeydown="if((event.which || event.keyCode) == 13) gigya.services.socialize.plugins.share.btnShare_OnClick(\'' + moduleID + '\')" tabindex="0" role="button">' + this.getBlueButtonHTML(this.TEXT(lang, 'publish')) + '</td>';
                arHTML[a++] = '</tr></table></td></tr>';
                arHTML[a++] = '</table></div>';


                var arSbHTML = [];
                var b = 0;
                var sidebarFillStyle = 'background-color:#555555;';

                arSbHTML[b++] = '<table role="presentation" width="53" height="266" cellspacing="0" cellpadding="0" valign="top" style="empty-cells:show;width: 53px; height: 266px;line-height:normal;">';



                //arSbHTML[a++]='<style type=""> #'+moduleID.replace(/[.]/g,'\\.')+'_sidebar td {border:none; padding:0px;} #'+moduleID.replace(/[.]/g,'\\.')+'_sidebar {text-align:left} </style>';

                arSbHTML[b++] = '<tr><td height="6" width="6" style="width:6px;"><img src="' + base + 'Share/LeftSide_Top.png" alt="" /></td><td height="6" style="line-height:1px;height:6px;' + sidebarFillStyle + '">&#160;</td></tr>';
                arSbHTML[b++] = '<tr><td style="' + sidebarFillStyle + '"></td><td style="' + sidebarFillStyle + '"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" valign="top" style="' + sidebarFillStyle + '">';
                arSbHTML[b++] = '<tr height="214"><td valign="top" style="padding-top:4px;">'

                var arProviders = internals.arProviders;
                arSbHTML[b++] = '<table role="presentation" valign="top" cellspacing="0" cellpadding="0" style="padding-left:1px;">';
                for (var i = 0; i < arProviders.length; i++) {
                    var provider = arProviders[i];
                    var title = provider.displayName;
                    if (window.gigya.utils.validation.isExplicitFalse(p['showTooltips'])) title = '';
                    var socialOnClick = 'gigya.services.socialize.plugins.share.btnProvider_OnClick(\'' + moduleID + '\', ' + provider.ID + ',event)';
                    arSbHTML[b++] = '<tr><td tabindex="0" role="button" aria-label="' + provider.displayName + '" id="' + moduleID + '_socialBtn_' + provider.ID + '" onclick="' + socialOnClick + '" onkeydown="if((event.which || event.keyCode) == 13) ' + socialOnClick + '" valign="middle" style="height:25px;cursor:pointer;vertical-align:middle;padding-bottom:10px"><table role="presentation" height="25" cellspacing="0" cellpadding="0" valign="middle" style="height:25px;vertical-align:middle">';
                    arSbHTML[b++] = '<tr><td style="vertical-align:middle !important"><img src="' + base + 'Share/notChecked.png" id="' + moduleID + '_cb' + provider.ID + '" alt="" /></td><td style="padding-left:3px;height:25px;width:25px;"><img aria-hidden="true" title="' + title + '" alt="' + title + '" id="' + moduleID + '_btn' + provider.ID + '" src="' + base + 'share/' + provider.name + '_25.png" /></td></tr>';
                    arSbHTML[b++] = '</table></td></tr>';
                }
                arSbHTML[b++] = '</table></td></tr>';


                var backText = this.TEXT(lang, 'back');
                var altBackText = backText;
                if (window.gigya.pluginUtils.layout.measureText(backText, oLinkStyle).w > 30) {
                    backText = '';
                }

                var backOnClick = 'gigya.services.socialize.plugins.share.lnkBack_OnClick(\'' + moduleID + '\')';
                arSbHTML[b++] = '<tr><td style="height:20px;' + sidebarFillStyle + '"><table role="presentation" valign="bottom" cellspacing="0" cellpadding="0">';
                arSbHTML[b++] = '<tr role="button" tabindex="0" id="' + moduleID + '_lnkBack" valign="middle" style="cursor:pointer;display:none;vertical-align:bottom" onclick="' + backOnClick + '" onkeydown="if((event.which || event.keyCode) == 13) ' + backOnClick + '"><td height="20" style="vertical-align:bottom"><img title="' + altBackText + '" alt="' + altBackText + '" src="' + base + 'Share/backIcon.png" /></td><td style="padding-left:2px;' + linkStyle + ';font-weight:bold;text-decoration:underline;vertical-align:bottom">' + backText + '</td></tr>'

                var emailText = this.TEXT(lang, 'email');
                var moreText = this.TEXT(lang, 'more');
                var altEmailText = emailText;
                var altMoreText = moreText;
                if (window.gigya.pluginUtils.layout.measureText(emailText, oLinkStyle).w > 30 || window.gigya.pluginUtils.layout.measureText(moreText, oLinkStyle).w > 30) {
                    moreText = '';
                    emailText = '';
                }


                if (!window.gigya.utils.validation.isExplicitFalse(p['showMoreButton'])) {
                    var moreIconID = 'share_MoreIcon';
                    var moreOnClick = 'gigya.services.socialize.plugins.share.showBookmarks(\'' + moduleID + '\')';
                    arSbHTML[b++] = '<tr role="button" tabindex="0" id="' + moduleID + '_lnkMore" valign="middle" style="cursor:pointer" onclick="' + moreOnClick + '" onkeydown="if((event.which || event.keyCode) == 13) ' + moreOnClick + '"><td height="20" style="vertical-align:bottom"><img title="' + altMoreText + '" alt="' + altMoreText + '" src="' + base + 'Bookmark/' + moreIconID + '.png" onerror="this.src=\'' + base + 'Bookmark/defaultBMSIcon.png\'" /></td><td style="vertical-align:bottom;padding-left:2px;' + linkStyle + '">' + moreText + '</td></tr>';
                }


                if (window.gigya.utils.validation.isExplicitTrue(p['showEmailButton'])) {
                    arSbHTML[b++] = '<tr id="' + moduleID + '_lnkEmail" valign="middle" style="cursor:pointer" onclick="gigya.services.socialize.plugins.share.showEmail(\'' + moduleID + '\')"><td height="20" style="vertical-align:bottom"><img title="' + altEmailText + '" alt="' + altEmailText + '" src="' + base + 'Share/EmailIcon.png" /></td><td style="vertical-align:bottom;padding-left:2px;' + linkStyle + '">' + emailText + '</td></tr>';
                }
                arSbHTML[b++] = '</table></td></tr></table></td></tr><tr><td width="6" height="6" style="width:6px;height:6px;"><div style="height:6px"><img src="' + base + 'Share/LeftSide_Bottom.png" alt="" /></div></td><td style="line-height:1px;' + sidebarFillStyle + '">&#160;</td></tr>';
                arSbHTML[b++] = '</table>';

                if (!internals.isPopup) {
                    container.innerHTML = '<table role="presentation" cellspacing="0" cellpadding="0" width="' + w + '" height="' + h + '"><tr><td width="53" style="vertical-align:middle"><div id="' + containerID + '_sidebar"></div></td><td width="' + shareCanvasWidth + '" height="' + shareCanvasHeight + '">' + arHTML.join('') + '</td></tr></table>';
                } else {
                    //prompt('a', arHTML.join(''));
                    container.innerHTML = arHTML.join('');
                }

                container.style.width = '' + w + 'px';
                container.style.height = '' + h + 'px';

                var yourEmail = this.getMyEmail();
                var tbEmail = document.getElementById(moduleID + '_tbYourEmail');
                if (tbEmail) {
                    window.gigya.global.setPlaceholder(tbEmail, this.TEXT(lang, 'your_email_address'));
                    if (yourEmail && yourEmail) {
                        tbEmail.value = yourEmail;
                        tbEmail.placeholderCleared = true;
                    }
                }

                var originalContainer = document.getElementById(this.modules[moduleID].originalP.containerID);
                originalContainer.className = "gig-share";
                originalContainer.style.position = 'absolute';

                var divSidebar = document.getElementById(moduleID + '_sidebar');
                if (!divSidebar) {
                    divSidebar = window.gigya.utils.DOM.createTopLevelDiv(moduleID + '_sidebar');
                    divSidebar.style.position = 'absolute';
                    divSidebar.style.width = '53px';
                    divSidebar.className = 'gig-share gig-share-sidebar';
                    //divSidebar.style.height='266px';
                    document.body.appendChild(divSidebar);
                }

                divSidebar.innerHTML = arSbHTML.join('');
                divSidebar.className = "gig-share gig-share-sidebar"

                if (divSidebar.offsetHeight <= 266) {
                    divSidebar.style.height = '266px';
                } else {
                    //divSidebar.style.height=''+divSidebar.offsetHeight+'px';
                }

                var ifrel = document.getElementById('gigya_ifr_' + moduleID + '_sidebar');
                if (ifrel) {
                    if (window.gigya.localInfo.isIE) {
                        ifrel.style.width = '47px';
                        ifrel.style.height = '254px';
                    } else {
                        ifrel.style.width = '53px';
                        ifrel.style.height = '266px';
                    }

                }

                divSidebar.gigHeight = parseInt(divSidebar.style.height);
                if (!divSidebar.gigHeight) divSidebar.gigHeight = 266;
                this.showShareCanvas(this.modules[moduleID]);
                if (internals.isPopup) {
                    var m = this.modules[moduleID];
                    var fncChangePosition = function () {
                        // prevent center of the popup on iOS when the dialog is in focus
                        if (window.gigya.localInfo.isIOS) {
                            var focused = document.querySelector(':focus');

                            if (focused && window.gigya.utils.DOM.isChildOf(focused, originalContainer))
                                return;
                        }

                        This.hideContactsDropdown(moduleID);
                        var isHidden = (document.getElementById(m.originalP.containerID).style.display == 'none');
                        if (isHidden) _pi.share.showShareCanvas(m);
                        var ifr = document.getElementById('gigya_ifr_' + originalContainer.id);
                        window.gigya.utils.DOM.setSize(ifr, parseInt(originalContainer.style.width) - 20, parseInt(originalContainer.style.height) - 20, true);
                        window.gigya.utils.DOM.setSize(originalContainer, parseInt(originalContainer.style.width), parseInt(originalContainer.style.height), true);

                        window.gigya.utils.DOM.setSize(divSidebar, 53, divSidebar.gigHeight, true);
                        var pos = window.gigya.global._GetElementPos(originalContainer);
                        var newLeft = pos.left - 53;
                        var shareCanvas = document.getElementById(originalContainer.id + '_shareCanvas');
                        if (newLeft < 0) {
                            newLeft = 0;
                            if (window.gigya.localInfo.isIE) {
                                _pi.share.changeDivPosition(originalContainer.id, null, 53, 20);
                            } else {
                                _pi.share.changeDivPosition(originalContainer.id, null, 53, 10);
                            }
                        }
                        //var newTop = pos.top + (parseInt(originalContainer.style.height) - divSidebar.gigHeight) / 2;
                        var newTop = parseInt(divSidebar.style.top);

                        _pi.share.changeDivPosition(moduleID + '_sidebar', newTop, newLeft, 6);
                        if (isHidden) _pi.share.hideShareCanvas(m);
                    }
                    _pi.share.fixDivPosition(originalContainer, fncChangePosition);
                }

                if (internals.isPopup) {
                    var fbRoot = document.getElementById('fb-root');
                    if (fbRoot) fbRoot.style.visibility = 'hidden';
                }

                if (p['autoShareActionID'] != null && ((p['showAlwaysShare'] != null && p['showAlwaysShare'].toLowerCase() != 'hide') || window.gigya.utils.validation.isExplicitTrue(p['showNeverShare']))) {
                    divSidebar.style.display = 'none';
                    this.hideShareCanvas(this.modules[moduleID]);
                } else if (this.canUseFacebookShare(moduleID) && this.getProviderSelection(moduleID, 'facebook')) {
                    This.selectProviders(moduleID, [GS._getProviderByName('facebook')]);
                    This.showFacebookShareDialog(moduleID);
                } else {
                    this.changeView(p['initialView'], moduleID);
                    if (window.gigya.utils.validation.isExplicitTrue(p.hideSidebar)) {
                        this.hideSidebar(moduleID);
                    }
                }
                if (p['autoShareActionID'] != null && p['showAlwaysShare'] && p['showAlwaysShare'].toLowerCase() == 'checked') {
                    this.alwaysShareThis_OnClick(moduleID);
                }

                var userMessagePlaceholder = (p.userMessagePlaceholder ? p.userMessagePlaceholder : this.TEXT(lang, 'write_your_message'));
                window.gigya.global.setPlaceholder(document.getElementById(moduleID + '_comment'), userMessagePlaceholder);
                document.getElementById(moduleID + '_comment').setAttribute('aria-label', userMessagePlaceholder);
            }
        }
        window.gigya.services.socialize.addEventHandlers({ listenerType: 'component', listenerDescription: 'listener for updating showShareUI Widgets' },
				{
				    onConnect: _pi.share.onChange,
				    onDisconnect: _pi.share.onChange,
				    onLogin: _pi.share.onChange,
				    onFacebookLoaded: _pi.share.refreshFB,
				    onFBCRefreshed: _pi.share.refreshFB,
				    onLogout: _pi.share.refreshFB,
				    onHideUIRequested: _pi.share.closeAllModules
				});
    }

})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLnNoYXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQUssNENBQTRDLFlBQUs7QUFDckUsY0FBYyxZQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7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LDJDQUEyQyxZQUFLO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBSztBQUM3Qix3QkFBd0IsWUFBSzs7QUFFN0Isd0JBQXdCLFlBQUs7QUFDN0Isa0NBQWtDLFlBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBSztBQUNyQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUlBQXlJLFlBQUs7QUFDOUk7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esd0JBQXdCLFlBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFlBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxZQUFLLHNDQUFzQyw4RkFBOEY7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxDQUFDIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLnNoYXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGVnYWN5L3BsdWdpbnMvZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuc2hhcmUuanNcIik7XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiR1NKU1NESy5qc1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5qc1wiIC8+XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zID09ICd1bmRlZmluZWQnKSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucyA9IHt9O1xyXG4gICAgdmFyIF9waSA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zO1xyXG4gICAgaWYgKHR5cGVvZiBfcGkuY29tbW9uID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgX3BpLmNvbW1vbiA9IHtcclxuICAgICAgICAgICAgYWRkQ1NTOiBmdW5jdGlvbiAoY3NzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNzcyB8fCBjc3MgPT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNzcyBpbnN0YW5jZW9mIEFycmF5KSBjc3MgPSBjc3Muam9pbignJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ1bGVzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcnVsZXNOb2RlLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChydWxlc05vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgKGhlYWQubGVuZ3RoID4gMCA/IGhlYWRbMF0gOiBib2R5KS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBfcGkuc2hhcmUgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBfcGkuc2hhcmUgPSB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6IHt9LFxyXG4gICAgICAgICAgICBjb250ZXh0czoge30sXHJcbiAgICAgICAgICAgIGNvbnRleHRDb3VudGVyOiAwLFxyXG5cclxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG1vZHVsZUlkIGluIF9waS5zaGFyZS5tb2R1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBfcGkuc2hhcmUubW9kdWxlc1ttb2R1bGVJZF07XHJcbiAgICAgICAgICAgICAgICAgICAgbS51c2VyID0gZXZ0LnVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2dCAmJiBldnQudXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyppZiAoZXZ0LnVzZXIubmlja25hbWUgJiYgZXZ0LnVzZXIubmlja25hbWUgIT0gJycpIHtcclxuXHRcdFx0XHRcdFx0ZnJvbSA9IGV2dC51c2VyLm5pY2tuYW1lO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC51c2VyLmVtYWlsICYmIGV2dC51c2VyLmVtYWlsICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0gZXZ0LnVzZXIuZW1haWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyb20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX3RiWW91ckVtYWlsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGJFbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRiRW1haWwudmFsdWUgPSBmcm9tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRiRW1haWwucGxhY2Vob2xkZXJDbGVhcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdfZ2lnX2VtYWlsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZnJvbSkgKyAnO2V4cGlyZXM9V2VkLCAwMSBKYW4gMjAyMCAxMjowMDowMCBHTVQ7cGF0aD0vOydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5ldmVudE5hbWUgPT0gJ3Blcm1pc3Npb25zJyB8fCAoKGV2dC5ldmVudE5hbWUgPT0gJ2xvZ2luJyB8fCBldnQuZXZlbnROYW1lID09ICdjb25uZWN0JykgJiYgZXZ0LnByb3ZpZGVyKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0uY29udGFjdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uZ2V0dGluZ0NvbnRhY3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5nZXRDb250YWN0cyhtLmMsIHsgY2FsbGJhY2s6IG0uVGhpcy5vbkNvbnRhY3RzLCBjb250ZXh0OiBtLCBlbmFibGVkUHJvdmlkZXJzOiBldnQucHJvdmlkZXIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmkuYXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbS5pLmFyUHJvdmlkZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIubmFtZS50b0xvd2VyQ2FzZSgpID09ICdmYWNlYm9vaycgJiYgX3BpLnNoYXJlLmNhblVzZUZhY2Vib29rU2hhcmUobW9kdWxlSWQpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX2NiJyArIHByb3ZpZGVyLklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiICYmICFldnQudXNlci5pZGVudGl0aWVzW3Byb3ZpZGVyLm5hbWUudG9Mb3dlckNhc2UoKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLmNvbnRleHQuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLlRoaXMudXBkYXRlUHJvdmlkZXJCdXR0b24obW9kdWxlSWQsIHByb3ZpZGVyLklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb3NlQWxsTW9kdWxlczogZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vZHVsZXMgPSB7fTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG1vZHVsZUlkIGluIF9waS5zaGFyZS5tb2R1bGVzKSB7IC8vc3RvcmluZyB0aGUgSURzIGJlY2F1c2UgY2xvc2VTaGFyZSBtb2RpZmllcyBfcGkuc2hhcmUubW9kdWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXNbbW9kdWxlSWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobW9kdWxlSWQgaW4gbW9kdWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIF9waS5zaGFyZS5jbG9zZVNoYXJlKG1vZHVsZUlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHJlZnJlc2hGQjogZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbW9kdWxlSWQgaW4gX3BpLnNoYXJlLm1vZHVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3BpLnNoYXJlLm1vZHVsZXNbbW9kdWxlSWRdLnNpZGViYXJEaXNhYmxlZCB8fCBfcGkuc2hhcmUubW9kdWxlc1ttb2R1bGVJZF0ucC5oaWRlU2lkZWJhcikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19jYjY0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiICYmIGNiLmNoZWNrZWQgJiYgX3BpLnNoYXJlLmNhblVzZUZhY2Vib29rU2hhcmUobW9kdWxlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9waS5zaGFyZS5zaG93RmFjZWJvb2tTaGFyZURpYWxvZyhtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3BpLnNoYXJlLmhpZGVGYWNlYm9va2xhbmdoYXJlRGlhbG9nKG1vZHVsZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3BpLnNoYXJlLnNob3dTaWRlYmFyKG1vZHVsZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFRFWFQ6IGZ1bmN0aW9uIChsYW5nLCB0ZXh0S2V5LCByZXBsYWNlU3RyLCB3aXRoU3RyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lneWEucGx1Z2luVXRpbHMubGFuZy5nZXRMb2NhbGl6ZWRUZXh0KCdnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZS5qcycsIHRleHRLZXksIGxhbmcsIHJlcGxhY2VTdHIsIHdpdGhTdHIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5Vc2VGYWNlYm9va1NoYXJlOiBmdW5jdGlvbiAobW9kdWxlSWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlkXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUobS5wLmhpZGVTaWRlYmFyKSAmJiAhbS5wWydhdXRvU2hhcmVBY3Rpb25JRCddICYmIG0ucC5pbml0aWFsVmlldyA9PSBudWxsICYmIGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUobS5pLmlzUG9wdXApICYmIGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUobS5wLnVzZUZCRGlhbG9nKSAmJiBnaWd5YS5leHRlcm5hbC5mYWNlYm9vay5nZXRQYXJhbXMoKS5mYl9hdCAhPSBudWxsKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RvcmVDb250ZXh0OiBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gJ3NoYXJlVUlfY29udGV4dF8nICsgX3BpLnNoYXJlLmNvbnRleHRDb3VudGVyO1xyXG4gICAgICAgICAgICAgICAgX3BpLnNoYXJlLmNvbnRleHRzW2lkXSA9IGNvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICBfcGkuc2hhcmUuY29udGV4dENvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmV0Y2hDb3RuZXh0OiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0gX3BpLnNoYXJlLmNvbnRleHRzW2lkXTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBfcGkuc2hhcmUuY29udGV4dHNbaWRdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dTaGFyZVVJOiBmdW5jdGlvbiAoYywgcCwgaW50ZXJuYWxzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgR1MgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemU7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmlkID0gaW50ZXJuYWxzWydyaWQnXTtcclxuICAgICAgICAgICAgICAgIGlmICghaW50ZXJuYWxzLnJlZHJhdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhclByb3ZpZGVycyA9IEdTLmdldFByb3ZpZGVyc0J5TmFtZShwWydlbmFibGVkUHJvdmlkZXJzJ10gPyBwWydlbmFibGVkUHJvdmlkZXJzJ10gOiAoY1snZW5hYmxlZFByb3ZpZGVycyddID8gY1snZW5hYmxlZFByb3ZpZGVycyddIDogJyonKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJQcm92aWRlcnMgPSBHUy5oaWRlUHJvdmlkZXJzQnlOYW1lKGFyUHJvdmlkZXJzLCBwWydkaXNhYmxlZFByb3ZpZGVycyddID8gcFsnZGlzYWJsZWRQcm92aWRlcnMnXSA6IChjWydkaXNhYmxlZFByb3ZpZGVycyddID8gY1snZGlzYWJsZWRQcm92aWRlcnMnXSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJQcm92aWRlcnMgPSBHUy5nZXRQcm92aWRlcnNGb3JSZXF1aXJlZENhcGFiaWxpdGllcyhhclByb3ZpZGVycywgWydhY3Rpb25zJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhclByb3ZpZGVycy5sZW5ndGggPiA2KSBhclByb3ZpZGVycyA9IGFyUHJvdmlkZXJzLnNwbGljZSgwLCA2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxzWydhclByb3ZpZGVycyddID0gYXJQcm92aWRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxzWydtb2R1bGVJRCddID0gcFsnY29udGFpbmVySUQnXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnRlcm5hbHNbJ2FyUHJvdmlkZXJzJ10ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxzWydhclByb3ZpZGVycyddW2ldLmNvbnRleHQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNob3dVSShjLHAsaW50ZXJuYWxzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IHsgVGhpczogdGhpcywgY29uZjogYywgcGFyYW1zOiBwLCBpbnRlcm5hbHM6IGludGVybmFscyB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHRJRCA9IHRoaXMuc3RvcmVDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjaWQ6IHAuY2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzLmFmdGVyR2V0SW5mbyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZFByb3ZpZGVyczogcC5lbmFibGVkUHJvdmlkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkUHJvdmlkZXJzOiBwLmRpc2FibGVkUHJvdmlkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIG9hdXRoX3Rva2VuOiBwLm9hdXRoX3Rva2VuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocFsnYXV0b1NoYXJlQWN0aW9uSUQnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnNldHRpbmdzID0gcFsnYXV0b1NoYXJlQWN0aW9uSUQnXTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuZ3JvdXAgPSAnZ2lneWFTaGFyZVNldHRpbmdzJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dVSShjLCBwLCBpbnRlcm5hbHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnRlcm5hbHMucmVkcmF3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnbG9hZCcsIGNvbnRhaW5lcklEOiBwWydjb250YWluZXJJRCddIH0sIHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxzLnJlZHJhdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9pZiAoIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUocC5oaWRlU2lkZWJhcikpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5nZXRVc2VySW5mbyhjLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFmdGVyR2V0SW5mbzogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIEdTID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSByZXMuY29udGV4dDtcclxuICAgICAgICAgICAgICAgIHZhciBUaGlzID0gY29udGV4dC5UaGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChUaGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBUaGlzLm1vZHVsZXNbY29udGV4dC5pbnRlcm5hbHMubW9kdWxlSURdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvckNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hFcnJvckZyb21SZXNwb25zZShjb250ZXh0LnBhcmFtcywgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFVzZXJFbWFpbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcikgbS51c2VyID0gcmVzLnVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qaWYgKHJlcy51c2VyLm5pY2tuYW1lICYmIHJlcy51c2VyLm5pY2tuYW1lICE9ICcnKSB7XHJcblx0XHRcdFx0XHRcdGN1cnJlbnRVc2VyRW1haWwgPSByZXMudXNlci5uaWNrbmFtZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlci5lbWFpbCAmJiByZXMudXNlci5lbWFpbCAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXJFbWFpbCA9IHJlcy51c2VyLmVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VXNlckVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGV4dC5pbnRlcm5hbHMubW9kdWxlSUQgKyAnX3RiWW91ckVtYWlsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YkVtYWlsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRiRW1haWwudmFsdWUgPSBjdXJyZW50VXNlckVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJFbWFpbC5wbGFjZWhvbGRlckNsZWFyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdfZ2lnX2VtYWlsPScgKyBlbmNvZGVVUklDb21wb25lbnQoY3VycmVudFVzZXJFbWFpbCkgKyAnO2V4cGlyZXM9V2VkLCAwMSBKYW4gMjAyMCAxMjowMDowMCBHTVQ7cGF0aD0vOydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSByZXMuc2V0dGluZ3NbbS5wWydhdXRvU2hhcmVBY3Rpb25JRCddXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzICYmICghc2V0dGluZ3MuZXhwaXJhdGlvbiB8fCBzZXR0aW5ncy5leHBpcmF0aW9uID4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5uZXZlclNoYXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5jbG9zZVNoYXJlKG0uaS5tb2R1bGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmFsd2F5c1NoYXJlICYmICFtLmkubmV2ZXJBdXRvUHVibGlzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uaS5uZXZlclJldHJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmkubmV2ZXJBdXRvUHVibGlzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5wdWJsaXNoVG9Qcm92aWRlcnMobS5pLm1vZHVsZUlELCBzZXR0aW5ncy5wcm92aWRlcnMuc3BsaXQoJywnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGVkVG9GYWNlYm9vayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlcXVlc3RQYXJhbXMucHJvdmlkZXIgJiYgKHJlcy5vcGVyYXRpb24gPT0gJ2xvZ2luJyB8fCByZXMub3BlcmF0aW9uID09ICdhZGRDb25uZWN0aW9uJyB8fCByZXMub3BlcmF0aW9uID09ICdyZXF1ZXN0UGVybWlzc2lvbnMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXJPYmogPSBHUy5fZ2V0UHJvdmlkZXJCeU5hbWUocmVzLnJlcXVlc3RQYXJhbXMucHJvdmlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlck9iai5jb250ZXh0ID0geyBjb25uZWN0ZWQ6IHRydWUgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5zZWxlY3RQcm92aWRlcnMoY29udGV4dC5pbnRlcm5hbHMubW9kdWxlSUQsIFtwcm92aWRlck9ial0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXIgJiYgcmVzLnVzZXIuaWRlbnRpdGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXIuVUlEICYmIFRoaXMuZ2V0Q29va2llKCdfZ2lnX3NoYXJlVUlfbGFzdFVJRCcpICE9IHJlcy51c2VyLlVJRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5jbGVhclNhdmVTZWxlY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbm5lY3RlZFByb3ZpZGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpZGVudGl0eSBpbiByZXMudXNlci5pZGVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb0lkID0gcmVzLnVzZXIuaWRlbnRpdGllc1tpZGVudGl0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvSWQuY29ubmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlck9iaiA9IEdTLl9nZXRQcm92aWRlckJ5TmFtZShpZGVudGl0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlck9iai5jb250ZXh0ID0gb0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRoaXMuZ2V0UHJvdmlkZXJTZWxlY3Rpb24obS5pLm1vZHVsZUlELCBwcm92aWRlck9iai5uYW1lKSAmJiAhKG9JZC5taXNzaW5nUGVybWlzc2lvbnMgJiYgb0lkLm1pc3NpbmdQZXJtaXNzaW9ucy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2FjdGlvbnMnKSAhPSAtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFByb3ZpZGVycy5wdXNoKHByb3ZpZGVyT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXJPYmouSUQgPT0gNjQpIGNvbm5lY3RlZFRvRmFjZWJvb2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzLnJlcXVlc3RQYXJhbXMucHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuc2VsZWN0UHJvdmlkZXJzKGNvbnRleHQuaW50ZXJuYWxzLm1vZHVsZUlELCBjb25uZWN0ZWRQcm92aWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKFRoaXMuY2FuVXNlRmFjZWJvb2tTaGFyZShtLmkubW9kdWxlSUQpICYmIFRoaXMuZ2V0UHJvdmlkZXJTZWxlY3Rpb24obS5pLm1vZHVsZUlELCAnZmFjZWJvb2snKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5oaWRlRmFjZWJvb2tTaGFyZURpYWxvZyhjb250ZXh0LmludGVybmFscy5tb2R1bGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0VHJ1ZShtLnAuaGlkZVNpZGViYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2hvd0J5SUQoY29udGV4dC5pbnRlcm5hbHMubW9kdWxlSUQgKyAnX3NpZGViYXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzLmNoYW5nZVZpZXcoY29udGV4dC5wYXJhbXMuaW5pdGlhbFZpZXcsIG0uaS5tb2R1bGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLmkubW9kdWxlSUQgKyAnX2VtYWlsQ2FudmFzJykuc3R5bGUuZGlzcGxheSAhPSAnbm9uZScgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS5pLm1vZHVsZUlEICsgJ19ib29rbWFya3NDYW52YXMnKS5zdHlsZS5kaXNwbGF5ICE9ICdub25lJykgVGhpcy5kaXNhYmxlU2lkZWJhcihtLmkubW9kdWxlSUQpOyAvL3RvIHJlZHJhdyBjaGVja2JveCBpbWFnZXNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2dpZ3lhLnV0aWxzLkRPTS5fcG9wdXBDb250YWluZXJzW2NvbnRleHQuaW50ZXJuYWxzLm1vZHVsZUlEKydfc2lkZWJhciddPWRpdlNpZGViYXI7IC8vIHNvIHRoYXQgaXQgd2lsbCBiZSBjbG9zZWQgYnkgaGlkZVVJXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHB1Ymxpc2hUb1Byb3ZpZGVyczogZnVuY3Rpb24gKG1vZHVsZUlkLCBhclByb3ZpZGVycykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyUHJvdmlkZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBtLnApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3BdID0gbS5wW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwYXJhbXMuc2NvcGUgJiYgcGFyYW1zLnNjb3BlLnRvTG93ZXJDYXNlKCkgPT0gJ2ludGVybmFsJykgfHwgbS5pLmRlbGV0ZVNjb3BlUGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMuc2NvcGU7IC8vaW50ZXJuYWwgc2NvcGUgaXMgbm90IHN1cHBvcnRlZCBpbiBzaGFyZVVJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtLmMuc2NvcGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuZW5hYmxlZFByb3ZpZGVycyA9IGFyUHJvdmlkZXJzLmpvaW4oJywnKTtcclxuICAgICAgICAgICAgICAgICAgICBtLmR1cmluZ1B1Ymxpc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLmR1cmluZ1B1Ymxpc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMub25QdWJsaXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5kdXJpbmdQdWJsaXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZXh0SUQgPSB0aGlzLnN0b3JlQ29udGV4dCh7IFRoaXM6IHRoaXMsIG06IG0gfSlcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY29udGV4dCA9IGNvbnRleHRJRDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJlVGltZW91dCA9IG0ucFsnc2hhcmVUaW1lb3V0J107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXJlVGltZW91dCAmJiBzaGFyZVRpbWVvdXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVGltZW91dCA9IHNoYXJlVGltZW91dCAqIDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLmR1cmluZ1B1Ymxpc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmR1cmluZ1B1Ymxpc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hFcnJvckZyb21SZXNwb25zZShtLnAsIHsgc3RhdHVzOiAnRkFJTCcsIHN0YXR1c01lc3NhZ2U6ICdSZXF1ZXN0IHRpbWVvdXQnLCBlcnJvckNvZGU6IDUwNDAwMSwgZXJyb3JNZXNzYWdlOiAnVGltZW91dCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5vblNoYXJlQ29tcGxldGUobSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNoYXJlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucHVibGlzaFVzZXJBY3Rpb24obS5jLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2hhcmVDb21wbGV0ZShtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0Q29va2llOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSBjID0gYy5zdWJzdHJpbmcoMSwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dDb250YWN0c0Ryb3Bkb3duOiBmdW5jdGlvbiAobW9kdWxlSWQsIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMubW9kdWxlc1ttb2R1bGVJZF07XHJcbiAgICAgICAgICAgICAgICB2YXIgdGJGcmllbmRzRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfdGJGcmllbmRzRW1haWwnKTtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudCAmJiB0YkZyaWVuZHNFbWFpbC5sYXN0VmFsdWUgPT0gdGJGcmllbmRzRW1haWwudmFsdWUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRiRnJpZW5kc0VtYWlsLmxhc3RWYWx1ZSA9IHRiRnJpZW5kc0VtYWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQ29udGFjdHNEcm9wZG93bihtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2Q29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRpdkNvbnRhY3RzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBnaWd5YS5nbG9iYWwuX0dldEVsZW1lbnRQb3ModGJGcmllbmRzRW1haWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghX3BpLmFkZGVkQ29udGFjdHNDU1MpIHtcclxuICAgICAgICAgICAgICAgICAgICBfcGkuY29tbW9uLmFkZENTUygnLmdpZy1jb250YWN0TGlzdCB7d2lkdGg6MjgwcHg7Ym9yZGVyOjFweCBzb2xpZCAjQzJDMkMyOyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5fScpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9waS5jb21tb24uYWRkQ1NTKCcuZ2lnLWNvbnRhY3Qge3BhZGRpbmc6MHB4IDVweCAwcHggNXB4O2ZvbnQtZmFtaWx5OmFyaWFsO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM3Nzc3Nzc7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOiBub3dyYXA7fScpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9waS5hZGRlZENvbnRhY3RzQ1NTID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaXZDb250YWN0cy5zdHlsZS5sZWZ0ID0gJycgKyAocG9zLmxlZnQpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGRpdkNvbnRhY3RzLnN0eWxlLnRvcCA9ICcnICsgKHBvcy50b3AgKyB0YkZyaWVuZHNFbWFpbC5vZmZzZXRIZWlnaHQgLSAxKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICBkaXZDb250YWN0cy5jbGFzc05hbWUgPSAnZ2lnLWNvbnRhY3RMaXN0JztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZGl2Q29udGFjdHMuc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXZDb250YWN0cy5pZCA9IG1vZHVsZUlkICsgJ19jb250YWN0cyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoKCFtWydjb250YWN0cyddIHx8IG1bJ2NvbnRhY3RzJ10ubGVuZ3RoID09IDApICYmIG0uZ2V0dGluZ0NvbnRhY3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2Q29udGFjdHMuaW5uZXJIVE1MID0gJzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+PHRyPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6OTBweFwiPjxpbWcgc3R5bGU9XCJtYXJnaW46YXV0bztkaXNwbGF5OmJsb2NrO1wiIHNyYz1cIicgKyBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9TaGFyZS9sb2FkZXIuZ2lmJykgKyAnXCIgYWx0PVwiXCIgLz48L3RkPjwvdHI+PC90YWJsZT4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtWydjb250YWN0cyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyUmVjaXBpZW50cyA9IHRiRnJpZW5kc0VtYWlsLnZhbHVlLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RSZWNpcGllbnQgPSBhclJlY2lwaWVudHNbYXJSZWNpcGllbnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyUmVjaXBpZW50cyA9IGFyUmVjaXBpZW50cy5zcGxpY2UoMCwgYXJSZWNpcGllbnRzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWN0c1ByZWZpeCA9IGFyUmVjaXBpZW50cy5qb2luKCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhY3RzUHJlZml4ICE9ICcnKSBjb250YWN0c1ByZWZpeCArPSAnLCAnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWFyY2hUZXh0ID0gbGFzdFJlY2lwaWVudC5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXh0ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5jb250YWN0c0Ryb3Bkb3duID0geyBsb2NhdGlvbjogMCwgYXJEaXZzOiBbXSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgKGkgPCBtLmNvbnRhY3RzLmxlbmd0aCAmJiBmb3VuZENvdW50IDwgNSkgOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gbS5jb250YWN0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjSGFzaCA9IChjLmZpcnN0TmFtZSArIGMubGFzdE5hbWUgKyBjLmVtYWlsKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNIYXNoLmluZGV4T2Yoc2VhcmNoVGV4dCkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZDb250YWN0LnN0eWxlLmhlaWdodCA9ICcyMHB4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFjdERpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGdpZ3lhLnV0aWxzLnNhbml0aXplLnNhbml0aXplSFRNTChjLmZpcnN0TmFtZSArICcgJyArIGMubGFzdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lICE9ICcgJykgY29udGFjdERpc3BsYXkgPSAnXCInICsgbmFtZSArICdcIiAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3REaXNwbGF5ICs9ICcmIzYwOycgKyBjLmVtYWlsICsgJyYjNjI7LCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2Q29udGFjdC5pbm5lckhUTUwgPSBjb250YWN0RGlzcGxheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZDb250YWN0LmNvbnRhY3REYXRhID0gY29udGFjdERpc3BsYXkucmVwbGFjZSgnJiM2MDsnLCAnPCcpLnJlcGxhY2UoJyYjNjI7JywgJz4nKSArICcgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZDb250YWN0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZDb250YWN0LmNsYXNzTmFtZSA9ICdnaWctY29udGFjdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2Q29udGFjdC5kaXZJbmRleCA9IGZvdW5kQ291bnQgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkNvbnRhY3Qub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLmNvbnRhY3RzRHJvcGRvd24uYXJEaXZzW20uY29udGFjdHNEcm9wZG93bi5sb2NhdGlvbl0pIG0uY29udGFjdHNEcm9wZG93bi5hckRpdnNbbS5jb250YWN0c0Ryb3Bkb3duLmxvY2F0aW9uXS5vbm1vdXNlb3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNENkVERkInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmNvbnRhY3RzRHJvcGRvd24ubG9jYXRpb24gPSB0aGlzLmRpdkluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZDb250YWN0Lm9ubW91c2VvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2Q29udGFjdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YkZyaWVuZHNFbWFpbC53YXRlcm1hcmtDbGVhcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJGcmllbmRzRW1haWwudmFsdWUgPSBjb250YWN0c1ByZWZpeCArIHRoaXMuY29udGFjdERhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnNldENhcmV0UG9zaXRpb24odGJGcmllbmRzRW1haWwsIHRiRnJpZW5kc0VtYWlsLnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkNvbnRhY3RzLmFwcGVuZENoaWxkKGRpdkNvbnRhY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uY29udGFjdHNEcm9wZG93bi5hckRpdnMucHVzaChkaXZDb250YWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5jb250YWN0c0Ryb3Bkb3duLmFyRGl2cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmNvbnRhY3RzRHJvcGRvd24uYXJEaXZzWzBdLm9ubW91c2VvdmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGl2Q29udGFjdHMuaW5uZXJIVE1MICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZDb250YWN0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2Q29udGFjdHMuZm5jSGlkZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQgPT0gdGJGcmllbmRzRW1haWwpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnNyY0VsZW1lbnQgJiYgZS5zcmNFbGVtZW50ID09IHRiRnJpZW5kc0VtYWlsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5oaWRlQ29udGFjdHNEcm9wZG93bihtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdkNvbnRhY3RzLmZuY09ua2V5dXAgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb0NvbnRhY3RzRHJvcGRvd24gPSBtLmNvbnRhY3RzRHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9Db250YWN0c0Ryb3Bkb3duICYmIG9Db250YWN0c0Ryb3Bkb3duLmFyRGl2cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBvQ29udGFjdHNEcm9wZG93bi5sb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMzgpIHsgLy91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSA0MCkgeyAvL2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMTMpIHsgLy9lbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9Db250YWN0c0Ryb3Bkb3duLmFyRGl2c1tsb2NhdGlvbl0ub25jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkNvbnRhY3RzLmZuY0hpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gPCAwKSBsb2NhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gPj0gb0NvbnRhY3RzRHJvcGRvd24uYXJEaXZzLmxlbmd0aCkgbG9jYXRpb24gPSBvQ29udGFjdHNEcm9wZG93bi5hckRpdnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9Db250YWN0c0Ryb3Bkb3duLmFyRGl2c1tsb2NhdGlvbl0ub25tb3VzZW92ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQoJ29uY2xpY2snLCBkaXZDb250YWN0cy5mbmNIaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQoJ29ua2V5dXAnLCBkaXZDb250YWN0cy5mbmNPbmtleXVwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXZDb250YWN0cy5mbmNIaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGl2Q29udGFjdHMuZm5jT25rZXl1cCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcy5oaWRlQ29udGFjdHNEcm9wZG93bihtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldENhcmV0UG9zaXRpb246IGZ1bmN0aW9uIChjdHJsLCBwb3MpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdHJsLnNldFNlbGVjdGlvblJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3RybC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0cmwuc2V0U2VsZWN0aW9uUmFuZ2UocG9zLCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3RybC5jcmVhdGVUZXh0UmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZ2UgPSBjdHJsLmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlQ29udGFjdHNEcm9wZG93bjogZnVuY3Rpb24gKG1vZHVsZUlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMubW9kdWxlc1ttb2R1bGVJZF07XHJcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfY29udGFjdHMnKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25jbGljaycsIGVsLmZuY0hpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25rZXl1cCcsIGVsLmZuY09ua2V5dXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVsLmZuY0hpZGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlbC5mbmNPbmtleXVwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNvbnRhY3RzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IHJlcy5jb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgdmFyIFRoaXMgPSBtLlRoaXM7XHJcbiAgICAgICAgICAgICAgICBtLmdldHRpbmdDb250YWN0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuY29udGFjdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobS5jb250YWN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmNvbnRhY3RzID0gbS5jb250YWN0cy5jb25jYXQocmVzLmNvbnRhY3RzLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5jb250YWN0cyA9IHJlcy5jb250YWN0cy5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMuc2hvd0NvbnRhY3RzRHJvcGRvd24obS5pLm1vZHVsZUlEKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbS5jb250YWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMuaGlkZUNvbnRhY3RzRHJvcGRvd24obS5pLm1vZHVsZUlEKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UHJvdmlkZXJTZWxlY3Rpb246IGZ1bmN0aW9uIChtb2R1bGVJZCwgcHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlkXTtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9ICdzaGFyZVVJJztcclxuICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSB0aGlzLmdldENvb2tpZSgnX2dpZ18nICsgaWQgKyAnX2NiXycgKyBwcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGNvb2tpZSAhPSAnMCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRDaGVja2VkUHJvdmlkZXJzOiBmdW5jdGlvbiAobW9kdWxlSWQsIGlnbm9yZUlEcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyUHJvdmlkZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0uaS5hclByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZ25vcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbS5pLmFyUHJvdmlkZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZ25vcmVJRHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdSA9IDA7IHUgPCBpZ25vcmVJRHMubGVuZ3RoOyB1KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZ25vcmVJRHNbdV0gPT0gcHJvdmlkZXIuSUQpIGlnbm9yZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX2NiJyArIHByb3ZpZGVyLklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2IuY2hlY2tlZCkgYXJQcm92aWRlcnMucHVzaChwcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyUHJvdmlkZXJzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBidG5TaGFyZV9PbkNsaWNrOiBmdW5jdGlvbiAobW9kdWxlSWQsIGhpZGVVSSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZVRvUHJvdmlkZXJzKG1vZHVsZUlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVUkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMubW9kdWxlc1ttb2R1bGVJZF07XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS5vcmlnaW5hbFAuY29udGFpbmVySUQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsZWFyU2F2ZVNlbGVjdGlvbnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhclByb3ZpZGVycyA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5nZXRBbGxQcm92aWRlcnMoKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSAnX2dpZ19zaGFyZVVJX2NiXycgKyBhclByb3ZpZGVyc1tpXSArICc9eDtleHBpcmVzPVdlZCwgMDEgSmFuIDE5OTkgMTI6MDA6MDAgR01UXCI7cGF0aD0vO1wiJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hhcmVUb1Byb3ZpZGVyczogZnVuY3Rpb24gKG1vZHVsZUlkLCBpZ25vcmVJRHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlkXTtcclxuICAgICAgICAgICAgICAgIHZhciBhclByb3ZpZGVycyA9IHRoaXMuZ2V0Q2hlY2tlZFByb3ZpZGVycyhtb2R1bGVJZCwgaWdub3JlSURzKTtcclxuICAgICAgICAgICAgICAgIGlmIChhclByb3ZpZGVycy5sZW5ndGggPiAwIHx8IChpZ25vcmVJRHMgJiYgaWdub3JlSURzLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdfZ2lnX3NoYXJlVUlfbGFzdFVJRD0nICsgbS51c2VyLlVJRCArICc7ZXhwaXJlcz1XZWQsIDAxIEphbiAyMDIwIDEyOjAwOjAwIEdNVFwiO3BhdGg9LztcIic7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmkuYXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbS5pLmFyUHJvdmlkZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfY2InICsgcHJvdmlkZXIuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdfZ2lnX3NoYXJlVUlfY2JfJyArIHByb3ZpZGVyICsgJz0nICsgKGNiLmNoZWNrZWQgPyAxIDogMCkgKyAnO2V4cGlyZXM9V2VkLCAwMSBKYW4gMjAyMCAxMjowMDowMCBHTVRcIjtwYXRoPS87XCInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2JBbHdheXNTaGFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19jYkFsd2F5c1NoYXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiQWx3YXlzU2hhcmUgJiYgY2JBbHdheXNTaGFyZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2V0dGluZ3MobW9kdWxlSWQsIHRydWUsIGZhbHNlLCBhclByb3ZpZGVycy5qb2luKCcsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmkubmV2ZXJBdXRvUHVibGlzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG0uc2lkZWJhckRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGJVc2VyTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19jb21tZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRiVXNlck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyTWVzc2FnZShtLCB0YlVzZXJNZXNzYWdlLnBsYWNlaG9sZGVyQ2xlYXJlZCA9PSB0cnVlID8gdGJVc2VyTWVzc2FnZS52YWx1ZSA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRXb3JraW5nVGV4dChtLmkubW9kdWxlSUQsIHRoaXMuVEVYVChtLmxhbmcsICdwdWJsaXNoaW5nX3BsZWFzZV93YWl0JykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2hUb1Byb3ZpZGVycyhtb2R1bGVJZCwgYXJQcm92aWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UobW9kdWxlSWQsIHRoaXMuVEVYVChtLmxhbmcsICd0b19zaGFyZV9wbGVhc2Vfc2VsZWN0X3lvdXJfc29jaWFsX25ldHdvcmtzJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93RXJyb3JNZXNzYWdlOiBmdW5jdGlvbiAobW9kdWxlSWQsIG1zZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdkVyciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19lcnJvck1lc3NhZ2UnKTtcclxuICAgICAgICAgICAgICAgIGlmICghZGl2RXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RXJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RXJyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgICAgICBkaXZFcnIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkVyci5pZCA9IG1vZHVsZUlkICsgJ19lcnJvck1lc3NhZ2UnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIGFsbCBzY3JlZW4tcmVhZGVycywgdGhlc2UgYXR0cmlidXRlcyBtdXN0IGJlIG9uIHRoZSBlbGVtZW50IHRoYXQgaXMgYmVpbmcgdXBkYXRlZC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTb21lIHNjcmVlbi1yZWFkZXJzIHdpbGwgbG9vayB3aXRoaW4gY2hpbGRyZW4gYnV0IG5vdCBhbGwgb2YgdGhlbSB3aWxsLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpZmljYWxseSBNYWMncyBcIkFjY2Vzc2liaWxpdHlcIiBzY3JlZW4tcmVhZGVyIHdpbGwgbm90LlxyXG4gICAgICAgICAgICAgICAgICAgIGRpdkVyci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXZFcnIuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RXJyLnNldEF0dHJpYnV0ZSgnYXJpYS1hdG9taWMnLCAndHJ1ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdkVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXZFcnIuc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIGRpdkVyci5pbm5lckhUTUwgPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiB3aWR0aD1cIjM4OVwiIGhlaWdodD1cIjgxXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgc3R5bGU9XCJ3aWR0aDozODk7aGVpZ2h0OjgxcHg7dGV4dC1hbGlnbjpjZW50ZXI7dmVydGljYWwtYWxpZ246bWlkZGxlXCI+PHRyPjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvU2hhcmUvQnViYmxlLnBuZycpICsgJ1xcJylcIj48ZGl2IHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojRkZGRkZGOyBmb250LWZhbWlseTphcmlhbDtwb3NpdGlvbjpyZWxhdGl2ZTtsZWZ0OjE3cHg7d2lkdGg6MzYycHg7cGFkZGluZzo1cHg7XCI+JyArIG1zZyArICc8L2Rpdj48L3RkPjwvdHI+PC90YWJsZT4nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBnaWd5YS5nbG9iYWwuX0dldEVsZW1lbnRQb3MoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChtLmkuaXNQb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkVyci5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXZFcnIuc3R5bGUubGVmdCA9IChwb3MubGVmdCArIDU3KSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXZFcnIuc3R5bGUudG9wID0gcG9zLnRvcCArIChwYXJzZUludChjb250YWluZXIuc3R5bGUuaGVpZ2h0KSAtIGRpdkVyci5vZmZzZXRIZWlnaHQpIC8gMiArICdweCc7XHJcbiAgICAgICAgICAgICAgICBkaXZFcnIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGRpdkVyci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbicgfSwgMzUwMCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldFdvcmtpbmdUZXh0OiBmdW5jdGlvbiAobW9kdWxlSWQsIHRleHQpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5oaWRlQnlJRChtb2R1bGVJZCArICdfY29tbWVudENhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmhpZGVCeUlEKG1vZHVsZUlkICsgJ19lbWFpbENhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmhpZGVCeUlEKG1vZHVsZUlkICsgJ19ib29rbWFya3NDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5zaG93QnlJRChtb2R1bGVJZCArICdfd29ya2luZ0NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdlRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfd29ya2luZ1RleHQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXZUZXh0KSBkaXZUZXh0LmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb3NlU2hhcmU6IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLm9yaWdpbmFsUC5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpdlNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLmkubW9kdWxlSUQgKyAnX3NpZGViYXInKTtcclxuICAgICAgICAgICAgICAgICAgICBfcGkuc2hhcmUudW5maXhEaXZQb3NpdGlvbihvcmlnaW5hbENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3BpLnNoYXJlLnVuZml4RGl2UG9zaXRpb24oZGl2U2lkZWJhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9jbG9zZUNvbXBvbmVudChtLmkucmlkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGl2U2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19zaWRlYmFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpdlNpZGViYXIpIGRpdlNpZGViYXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZTaWRlYmFyKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWZyU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9pZnJfJyArIG1vZHVsZUlkICsgJ19zaWRlYmFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlmclNpZGViYXIpIGlmclNpZGViYXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpZnJTaWRlYmFyKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5tb2R1bGVzW21vZHVsZUlkXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93RW1haWw6IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG0uc2lkZWJhckRpc2FibGVkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCYWNrKG1vZHVsZUlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2hvd0J5SUQobW9kdWxlSWQgKyAnX2VtYWlsQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uaGlkZUJ5SUQobW9kdWxlSWQgKyAnX2NvbW1lbnRDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZVNpZGViYXIobW9kdWxlSWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlRmFjZWJvb2tTaGFyZURpYWxvZyhtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW0uY29udGFjdHMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbS5nZXR0aW5nQ29udGFjdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5nZXRDb250YWN0cyhtLmMsIHsgY2FsbGJhY2s6IHRoaXMub25Db250YWN0cywgY29udGV4dDogbSwgZW5hYmxlZFByb3ZpZGVyczogbS5wLmVtYWlsUHJvdmlkZXJzID8gbS5wLmVtYWlsUHJvdmlkZXJzIDogJyonLCBkaXNhYmxlZFByb3ZpZGVyczogJycgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX2VtYWlsQ29ubmVjdCcpICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19lbWFpbENvbm5lY3QnKS5pbm5lckhUTUwgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWxQcm92aWRlcnMgPSAnKic7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG0ucC5lbWFpbFByb3ZpZGVycyAhPSBudWxsKSBlbWFpbFByb3ZpZGVycyA9IG0ucC5lbWFpbFByb3ZpZGVycztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXJzID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLmdldFByb3ZpZGVyc0J5TmFtZShlbWFpbFByb3ZpZGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLmdldFByb3ZpZGVyc0ZvclJlcXVpcmVkQ2FwYWJpbGl0aWVzKHByb3ZpZGVycywgWydjb250YWN0cyddKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29ubmVjdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1JlZ2lzdHJhdGlvbjogbS5wLnBlbmRpbmdSZWdpc3RyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpZDogbS5wLmNpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogbS5wLmNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkQ2FwYWJpbGl0aWVzOiAnY29udGFjdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VIVE1MOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VGVybXNMaW5rOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0VkaXRMaW5rOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHByb3ZpZGVycy5sZW5ndGggKiAzNSAtIDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcklEOiBtb2R1bGVJZCArICdfZW1haWxDb25uZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgVUlDb25maWc6ICc8Y29uZmlnPjxib2R5PjxiYWNrZ3JvdW5kIGZyYW1lLWNvbG9yPVwiVHJhbnNwYXJlbnRcIiAvPjwvYm9keT48L2NvbmZpZz4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkUHJvdmlkZXJzOiBwcm92aWRlcnMuam9pbignLCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYVBlcm1pc3Npb25zOiAnY29udGFjdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBlcm1pc3Npb25zOiBfcGkuc2hhcmUub25DaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5zaG93QWRkQ29ubmVjdGlvbnNVSShtLmMsIGNvbm5lY3RQYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZW5kRW1haWw6IGZ1bmN0aW9uIChtb2R1bGVJZCwgY2FwdGNoYVRpY2tldCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRiRnJpZW5kc0VtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX3RiRnJpZW5kc0VtYWlsJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGJZb3VyRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfdGJZb3VyRW1haWwnKTtcclxuICAgICAgICAgICAgICAgIHZhciB0Yk1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfdGJNZXNzYWdlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uT2JqZWN0ID0gbS5wLnVzZXJBY3Rpb247XHJcbiAgICAgICAgICAgICAgICB2YXIgZW1haWxCb2R5ID0gKG0ucFsnZW1haWxCb2R5J10gPyBtLnBbJ2VtYWlsQm9keSddIDogJ0hpLDxiciAvPjxiciAvPiR1c2VyTXNnJDxiciAvPjxiciAvPkkgdGhvdWdodCB5b3VcXCdkIGxpa2UgdGhpczo8YnIgLz4kVVJMJDxiciAvPjxiciAvPicgKyAoYWN0aW9uT2JqZWN0LnRpdGxlID8gYWN0aW9uT2JqZWN0LnRpdGxlIDogJycpICsgJzxiciAvPicgKyAoYWN0aW9uT2JqZWN0LmRlc2NyaXB0aW9uID8gYWN0aW9uT2JqZWN0LmRlc2NyaXB0aW9uIDogJycpICsgJzxiciAvPicpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIG9yZ2FuaXplIGVtYWlscyAocmVtb3ZpbmcgcmVkdW50YW50IGNvbW1hcylcclxuICAgICAgICAgICAgICAgIHZhciBlbWFpbHMgPSB0YkZyaWVuZHNFbWFpbC52YWx1ZS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmFycmF5LmZvckVhY2goZW1haWxzLCBmdW5jdGlvbiAoZW1haWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVtYWlsLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRiRnJpZW5kc0VtYWlsLnZhbHVlID0gZW1haWxzLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3ZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIGlmICghdGJGcmllbmRzRW1haWwud2F0ZXJtYXJrQ2xlYXJlZCB8fCAhZ2lneWEucGx1Z2luVXRpbHMudmFsaWRhdGlvbi5pc0VtYWlsTGlzdFZhbGlkKHRiRnJpZW5kc0VtYWlsLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRiRnJpZW5kc0VtYWlsLnN0eWxlLmJvcmRlckNvbG9yID0gJyNFNzA3MDcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRiRnJpZW5kc0VtYWlsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YkZyaWVuZHNFbWFpbC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjQ0NDQ0NDJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGJZb3VyRW1haWwudmFsdWUucmVwbGFjZSgvIC9nLCAnJykgPT0gJycgfHwgIWdpZ3lhLnBsdWdpblV0aWxzLnZhbGlkYXRpb24uaXNFbWFpbFZhbGlkKHRiWW91ckVtYWlsLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRiWW91ckVtYWlsLnN0eWxlLmJvcmRlckNvbG9yID0gJyNFNzA3MDcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRiWW91ckVtYWlsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YllvdXJFbWFpbC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjQ0NDQ0NDJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYXJSZWNpcGllbnRzID0gdGhpcy5nZXRSZWNpcGllbnRzQXJyYXkodGJGcmllbmRzRW1haWwudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0V29ya2luZ1RleHQobS5pLm1vZHVsZUlELCB0aGlzLlRFWFQobS5sYW5nLCAnc2VuZGluZ19lbWFpbCcpKTtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FwdGNoYVRpY2tldDogY2FwdGNoYVRpY2tldCxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbFN1YmplY3Q6IG0ucFsnZW1haWxTdWJqZWN0J10gPyBtLnBbJ2VtYWlsU3ViamVjdCddIDogYWN0aW9uT2JqZWN0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsQm9keTogZW1haWxCb2R5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlckVtYWlsOiB0YllvdXJFbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTXNnOiB0Yk1lc3NhZ2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxzOiB0YkZyaWVuZHNFbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rQmFjazogYWN0aW9uT2JqZWN0LmxpbmtCYWNrID8gYWN0aW9uT2JqZWN0LmxpbmtCYWNrIDogZG9jdW1lbnQubG9jYXRpb24uaHJlZixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQWN0aW9uOiBhY3Rpb25PYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ3NlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpcGllbnRzOiBhclJlY2lwaWVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXI6IHRiWW91ckVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck1lc3NhZ2U6IHRiTWVzc2FnZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBtLnApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmFyUHVibGlzaGVkUHJvdmlkZXJzID0gWydlbWFpbCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSAnX2dpZ19lbWFpbD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRiWW91ckVtYWlsLnZhbHVlKSArICc7ZXhwaXJlcz1XZWQsIDAxIEphbiAyMDIwIDEyOjAwOjAwIEdNVDtwYXRoPS87J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLlRoaXMub25TaGFyZUNvbXBsZXRlKG0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuc2VuZEVtYWlsKG0uYywgcGFyYW1zKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0TXlFbWFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVFUSA9IFwiX2dpZ19lbWFpbD1cIjtcclxuICAgICAgICAgICAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gY2FbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykgYyA9IGMuc3Vic3RyaW5nKDEsIGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dCYWNrOiBmdW5jdGlvbiAobW9kdWxlSWQpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5zaG93QnlJRChtb2R1bGVJZCArICdfbG5rQmFjaycpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmhpZGVCeUlEKG1vZHVsZUlkICsgJ19sbmtNb3JlJyk7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uaGlkZUJ5SUQobW9kdWxlSWQgKyAnX2xua0VtYWlsJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dCb29rbWFya3M6IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG0uc2lkZWJhckRpc2FibGVkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCYWNrKG1vZHVsZUlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbW9yZUVuYWJsZWRQcm92aWRlcnMgPSBtLnAubW9yZUVuYWJsZWRQcm92aWRlcnM7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9yZURpc2FibGVkUHJvdmlkZXJzID0gbS5wLm1vcmVEaXNhYmxlZFByb3ZpZGVycztcclxuICAgICAgICAgICAgICAgIGlmICghbW9yZUVuYWJsZWRQcm92aWRlcnMgfHwgKG1vcmVFbmFibGVkUHJvdmlkZXJzID09ICcqJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3JlRW5hYmxlZFByb3ZpZGVycyA9ICdmYWNlYm9vaywqJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9yZURpc2FibGVkUHJvdmlkZXJzICYmIG1vcmVEaXNhYmxlZFByb3ZpZGVycy5pbmRleE9mKCdmYWNlYm9vaycpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVFbmFibGVkUHJvdmlkZXJzID0gJyonO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW1vcmVEaXNhYmxlZFByb3ZpZGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcmVEaXNhYmxlZFByb3ZpZGVycyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3JlRGlzYWJsZWRQcm92aWRlcnMgKz0gJywnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbW9yZUVuYWJsZWRQcm92aWRlcnMgPSBtb3JlRW5hYmxlZFByb3ZpZGVycy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgbW9yZURpc2FibGVkUHJvdmlkZXJzID0gbW9yZURpc2FibGVkUHJvdmlkZXJzLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUobS5wLmhpZGVTaWRlYmFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcmVEaXNhYmxlZFByb3ZpZGVycyArPSBtLmkuYXJQcm92aWRlcnMuam9pbignLCcpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFyTW9yZUVuYWJsZWRQcm92aWRlcnMgPSBtb3JlRW5hYmxlZFByb3ZpZGVycy5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyTW9yZURpc2FibGVkUHJvdmlkZXJzID0gbW9yZURpc2FibGVkUHJvdmlkZXJzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJOZXdNb3JlRGlzYWJsZWRQcm92aWRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJNb3JlRGlzYWJsZWRQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJNb3JlRW5hYmxlZFByb3ZpZGVycy5sZW5ndGg7IHUrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJNb3JlRGlzYWJsZWRQcm92aWRlcnNbaV0gPT0gYXJNb3JlRW5hYmxlZFByb3ZpZGVyc1t1XSkgZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZikgYXJOZXdNb3JlRGlzYWJsZWRQcm92aWRlcnMucHVzaChhck1vcmVEaXNhYmxlZFByb3ZpZGVyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbW9yZURpc2FibGVkUHJvdmlkZXJzID0gYXJOZXdNb3JlRGlzYWJsZWRQcm92aWRlcnMuam9pbignLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lkOiBtLnAuY2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcklEOiBtb2R1bGVJZCArICdfYm9va21hcmtzV2lkZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbS5wLndpZHRoIC0gNzEsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBtLnAuaGVpZ2h0IC0gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQm9va21hcmtXaW5kb3dPcGVuZWQ6IHRoaXMub25Cb29rbWFya0RvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgVUlDb25maWc6ICc8Y29uZmlnPjxib2R5Pjxjb250cm9scz48c25idXR0b25zIHR5cGU9XCJ0ZXh0VW5kZXJcIiBjb2xvcj1cIiM5YjliOWJcIiAvPjwvY29udHJvbHM+PC9ib2R5PjwvY29uZmlnPicsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZEJvb2ttYXJrczogbW9yZUVuYWJsZWRQcm92aWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRCb29rbWFya3M6IG1vcmVEaXNhYmxlZFByb3ZpZGVycyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7IG06IG0gfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmhpZGVCeUlEKG0uaS5tb2R1bGVJRCArICdfcHJvZ3Jlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnNob3dCeUlEKG0uaS5tb2R1bGVJRCArICdfYm9va21hcmtzV2lkZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCBmb2N1cyBzbyB1c2VyIGNhbiB1c2Uga2V5Ym9hcmQgbmF2aWdhdGlvbi4gU21hbGwgZGVsYXkgaXMgbmVjZXNzYXJ5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBtLmkubW9kdWxlSUQgKyAnX2Jvb2ttYXJrc1dpZGdldCBidXR0b24nKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuc2hvd0Jvb2ttYXJrVUkobS5jLCBwYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5zaG93QnlJRChtb2R1bGVJZCArICdfYm9va21hcmtzQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uaGlkZUJ5SUQobW9kdWxlSWQgKyAnX2NvbW1lbnRDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZVNpZGViYXIobW9kdWxlSWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlRmFjZWJvb2tTaGFyZURpYWxvZyhtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQm9va21hcmtEb25lOiBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IGV2dC5jb250ZXh0Lm07XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoeyBldmVudE5hbWU6ICdzZW5kJywgcHJvdmlkZXI6IGV2dC5wcm92aWRlciB9LCBtLnApO1xyXG4gICAgICAgICAgICAgICAgbS5hclB1Ymxpc2hlZFByb3ZpZGVycyA9IFtldnQucHJvdmlkZXJdO1xyXG4gICAgICAgICAgICAgICAgbS5UaGlzLm9uU2hhcmVDb21wbGV0ZShtKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG5rQmFja19PbkNsaWNrOiBmdW5jdGlvbiAobW9kdWxlSWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlkXTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5oaWRlQnlJRChtb2R1bGVJZCArICdfbG5rQmFjaycpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnNob3dCeUlEKG1vZHVsZUlkICsgJ19sbmtNb3JlJyk7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2hvd0J5SUQobW9kdWxlSWQgKyAnX2xua0VtYWlsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmhpZGVCeUlEKG1vZHVsZUlkICsgJ193b3JraW5nQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uaGlkZUJ5SUQobW9kdWxlSWQgKyAnX2Jvb2ttYXJrc0NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmhpZGVCeUlEKG1vZHVsZUlkICsgJ19lbWFpbENhbnZhcycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjYXB0Y2hhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX2NhcHRjaGEnKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYXB0Y2hhICYmIGNhcHRjaGEucGFyZW50Tm9kZSkgY2FwdGNoYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNhcHRjaGEpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX3dvcmtpbmdUZXh0Jykuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtLmZiU2hhcmVWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RmFjZWJvb2tTaGFyZURpYWxvZyhtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2hvd0J5SUQobW9kdWxlSWQgKyAnX2NvbW1lbnRDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlU2lkZWJhcihtb2R1bGVJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG1vZHVsZUlkICsgJ19jb21tZW50Q2FudmFzICpbdGFiaW5kZXhdJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldEJhY2tMaW5rOiBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9MaW5rU3R5bGUgPSBtLnJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2VsZW1lbnRzL2xibFdvcmtpbmcvbGlua3MgfCArL2NvbmZpZy9ib2R5L3RleHRzL2xpbmtzJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua1N0eWxlID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLmdldFN0eWxlU3RyaW5nKG9MaW5rU3R5bGUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBzdHlsZT1cIicgKyBsaW5rU3R5bGUgKyAnXCIgb25jbGljaz1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLnNoYXJlLnVuY2hlY2tTZW50UHJvdmlkZXJzKFxcJycgKyBtLmkubW9kdWxlSUQgKyAnXFwnKVwiPicgKyB0aGlzLlRFWFQobS5sYW5nLCAnYmFjaycpICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRSZXRyeUxpbms6IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb0xpbmtTdHlsZSA9IG0ucmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvZWxlbWVudHMvbGJsV29ya2luZy9saW5rcyB8ICsvY29uZmlnL2JvZHkvdGV4dHMvbGlua3MnKTtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rU3R5bGUgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuZ2V0U3R5bGVTdHJpbmcob0xpbmtTdHlsZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIHN0eWxlPVwiJyArIGxpbmtTdHlsZSArICdcIiBvbmNsaWNrPVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuc2hhcmUubG5rUmV0cnlfT25DbGljayhcXCcnICsgbS5pLm1vZHVsZUlEICsgJ1xcJylcIj4nICsgdGhpcy5URVhUKG0ubGFuZywgJ3JldHJ5JykgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldENsb3NlTGluazogZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBvTGlua1N0eWxlID0gbS5yZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9lbGVtZW50cy9sYmxXb3JraW5nL2xpbmtzIHwgKy9jb25maWcvYm9keS90ZXh0cy9saW5rcycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtTdHlsZSA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5nZXRTdHlsZVN0cmluZyhvTGlua1N0eWxlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gc3R5bGU9XCInICsgbGlua1N0eWxlICsgJ1wiIG9uY2xpY2s9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZS5sbmtDbG9zZV9PbkNsaWNrKFxcJycgKyBtLmkubW9kdWxlSUQgKyAnXFwnKVwiPicgKyB0aGlzLlRFWFQobS5sYW5nLCAnY2xvc2UnKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5jaGVja1NlbnRQcm92aWRlcnM6IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmFyUHVibGlzaGVkUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbS5hclB1Ymxpc2hlZFByb3ZpZGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfY2InICsgcHJvdmlkZXIuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYi5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5hckV4cGlyZWRQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX2dldFByb3ZpZGVyQnlOYW1lKG0uYXJFeHBpcmVkUHJvdmlkZXJzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfY2InICsgcHJvdmlkZXIuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYi5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLmNvbnRleHQuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxua0JhY2tfT25DbGljayhtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxua1JldHJ5X09uQ2xpY2s6IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdWJsaXNoVG9Qcm92aWRlcnMobW9kdWxlSWQsIG0uYXJFcnJvclByb3ZpZGVycyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxua0Nsb3NlX09uQ2xpY2s6IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNoYXJlQ29tcGxldGUobSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbm5lY3RUb1Byb3ZpZGVyOiBmdW5jdGlvbiAobSwgcHJvdmlkZXJJRCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9nZXRQcm92aWRlckJ5SUQocHJvdmlkZXJJRCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2V0UGVybWlzc2lvbnNPbmx5ID0gKHByb3ZpZGVyLmNvbnRleHQgJiYgcHJvdmlkZXIuY29udGV4dC5jb25uZWN0ZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdldFBlcm1pc3Npb25zT25seSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLmNvbnRleHQudHJpZWRHZXR0aW5nUGVybWlzaW9ucyA9IHRydWU7IC8vdG8gYXZvaWQgdHJ5aW5nIG1vcmUgdGhhbiBvbmNlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNuaWQgPSBwcm92aWRlci5JRDtcclxuICAgICAgICAgICAgICAgIHZhciBzZW5kVXNlckFjdGlvbiA9IChwcm92aWRlci5JRCA9PSA2NCkgLy9mYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpZCA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fbGlzdGVuZXJJRDtcclxuXHJcbiAgICAgICAgICAgICAgICAvKnZhciBjb25mPXtcclxuXHRcdFx0XHRBUElLZXk6bS5jLkFQSUtleSxcclxuXHRcdFx0XHRzaWduSURzOiBtLmMuc2lnbklEcyxcclxuXHRcdFx0XHRlbmFibGVkUHJvdmlkZXJzOiBtLmMuZW5hYmxlZFByb3ZpZGVycyxcclxuXHRcdFx0XHRkaXNhYmxlZFByb3ZpZGVyczogbS5jLmRpc2FibGVkUHJvdmlkZXJzLFxyXG5cdFx0XHRcdHNlc3Npb25FeHBpcmF0aW9uOiBtLmMuc2Vzc2lvbkV4cGlyYXRpb25cclxuXHRcdFx0XHR9Ki9cclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1JlZ2lzdHJhdGlvbjogbS5wLnBlbmRpbmdSZWdpc3RyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogbS5wLmNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6ICdhY3Rpb25zJyxcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkUHJvdmlkZXJzOiBtLnAuZW5hYmxlZFByb3ZpZGVycyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFByb3ZpZGVyczogbS5wLmRpc2FibGVkUHJvdmlkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpZDogbS5wLmNpZCxcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uRXhwaXJhdGlvbjogbS5wLnNlc3Npb25FeHBpcmF0aW9uXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0geyBUaGlzOiB0aGlzLCBjb25mOiBtLmMsIHBhcmFtczogbS5wLCBpbnRlcm5hbHM6IG0uaSB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdldFBlcm1pc3Npb25zT25seSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayA9IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvckNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuY29udGV4dC5taXNzaW5nUGVybWlzc2lvbnMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuYWZ0ZXJHZXRJbmZvKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnJlcXVlc3RQZXJtaXNzaW9ucyhtLmMsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayA9IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzLmFmdGVyR2V0SW5mbyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuYWRkQ29ubmVjdGlvbihtLmMsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFJlY2lwaWVudHNBcnJheTogZnVuY3Rpb24gKHNSZWNpcGllbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJSZWNpcGllbnRzID0gc1JlY2lwaWVudHMuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIHZhciBhck5ld1JlY2lwaWVudHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJSZWNpcGllbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBhclJlY2lwaWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsdFBvcyA9IHIuaW5kZXhPZignPCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBndFBvcyA9IHIuaW5kZXhPZignPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyICYmIHIucmVwbGFjZSgvIC9nLCAnJykgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGx0UG9zICE9IC0xICYmIGd0UG9zID4gbHRQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSByLnNwbGl0KCc8JylbMF0ucmVwbGFjZSgvXCIvZywgJycpLnJlcGxhY2UobmV3IFJlZ0V4cCgnXltcXFxcc10rJywgJ2cnKSwgJycpLnJlcGxhY2UobmV3IFJlZ0V4cCgnW1xcXFxzXCJdKyQnLCAnZycpLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IHIuc3BsaXQoJzwnKVsxXS5zcGxpdCgnPicpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgPSByLnJlcGxhY2UobmV3IFJlZ0V4cCgnXltcXFxcc10rJywgJ2cnKSwgJycpLnJlcGxhY2UobmV3IFJlZ0V4cCgnW1xcXFxzXCJdKyQnLCAnZycpLCAnJyk7O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyTmV3UmVjaXBpZW50cy5wdXNoKHsgbmFtZTogbmFtZSwgZW1haWw6IGVtYWlsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhck5ld1JlY2lwaWVudHM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uU2hhcmVDb21wbGV0ZTogZnVuY3Rpb24gKG0sIG5ldmVyU2hvd1N1Y2Nlc3NNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgR1MgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemU7XHJcbiAgICAgICAgICAgICAgICBpZiAobS5hclB1Ymxpc2hlZFByb3ZpZGVycyAmJiBtLmFyUHVibGlzaGVkUHJvdmlkZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb0V2ZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdzZW5kRG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogbS5hclB1Ymxpc2hlZFByb3ZpZGVycy5qb2luKCcsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJNZXNzYWdlOiBtLnBbJ3VzZXJBY3Rpb24nXVsndXNlck1lc3NhZ2UnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VVJMOiBtLnBbJ3VzZXJBY3Rpb24nXVsnbGlua0JhY2snXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG0ucHJvdmlkZXJQb3N0SURzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9FdmVudC5wcm92aWRlclBvc3RJRHMgPSBtLnByb3ZpZGVyUG9zdElEcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9FdmVudC5wcm92aWRlcnMgPT0gJ2VtYWlsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGJGcmllbmRzRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLmkubW9kdWxlSUQgKyAnX3RiRnJpZW5kc0VtYWlsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YllvdXJFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG0uaS5tb2R1bGVJRCArICdfdGJZb3VyRW1haWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRiTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG0uaS5tb2R1bGVJRCArICdfdGJNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvRXZlbnQudXNlck1lc3NhZ2UgPSB0Yk1lc3NhZ2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9FdmVudC5yZWNpcGllbnRzID0gbS5UaGlzLmdldFJlY2lwaWVudHNBcnJheSh0YkZyaWVuZHNFbWFpbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9FdmVudC5zZW5kZXIgPSB0YllvdXJFbWFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KG9FdmVudCwgbS5wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtLmFyRXJyb3JQcm92aWRlcnMgJiYgKG0uYXJFcnJvclByb3ZpZGVycy5sZW5ndGggPiAwIHx8IG0uYXJMaW1pdFJlYWNoZWRQcm92aWRlcnMubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogNTAwMDIzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdQcm92aWRlciBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0ZBSUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlOiAnUHJvdmlkZXIgZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsZWRQcm92aWRlcnM6IG0uYXJFcnJvclByb3ZpZGVycy5jb25jYXQobS5hckxpbWl0UmVhY2hlZFByb3ZpZGVycykuam9pbignLCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBtLnAuY29udGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIG0ucCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbS5hckVycm9yUHJvdmlkZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobS5hclB1Ymxpc2hlZFByb3ZpZGVycy5sZW5ndGggPiAwICYmICFuZXZlclNob3dTdWNjZXNzTWVzc2FnZSAmJiAoIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKG0ucFsnc3VjY2Vzc01lc3NhZ2UnXSkgJiYgIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKG0ucFsnc2hvd1N1Y2Nlc3NNZXNzYWdlJ10pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0TWVzc2FnZVBvc3RlZCA9IHRoaXMuVEVYVChtLmxhbmcsICdtZXNzYWdlX3NoYXJlZF9zdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobS5hclB1Ymxpc2hlZFByb3ZpZGVycy5qb2luKCcnKSA9PSAnZW1haWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRNZXNzYWdlUG9zdGVkID0gdGhpcy5URVhUKG0ubGFuZywgJ21lc3NhZ2Vfc2VudF9zdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbS5hclB1Ymxpc2hlZFByb3ZpZGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0V29ya2luZ1RleHQobS5pLm1vZHVsZUlELCB0ZXh0TWVzc2FnZVBvc3RlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbS5pLmNsb3NlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBtLlRoaXMub25TaGFyZURvbmUobS5pLm1vZHVsZUlELCBtLlRoaXMpIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtLlRoaXMub25TaGFyZURvbmUobS5pLm1vZHVsZUlEKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25TaGFyZURvbmU6IGZ1bmN0aW9uIChtb2R1bGVJRCwgVGhpcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFUaGlzKSBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBtID0gVGhpcy5tb2R1bGVzW21vZHVsZUlEXTtcclxuICAgICAgICAgICAgICAgIGlmICgobSAhPSBudWxsKSAmJiAobS5pICE9IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG0uaS5jbG9zZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtLmkuaXNQb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZS5jbG9zZVNoYXJlKG0uaS5tb2R1bGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS5wLmNvbnRhaW5lcklEKS5pbm5lckhUTUwgPSAnJiMxNjA7JzsgLy8mIzE2MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5pLnJlZHJhdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuc2hvd1NoYXJlVUkobS5vcmlnaW5hbEMsIG0ub3JpZ2luYWxQLCBtLmkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uUHVibGlzaDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmZldGNoQ290bmV4dChyZXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IGNvbnRleHQubTtcclxuICAgICAgICAgICAgICAgIHZhciBUaGlzID0gY29udGV4dC5UaGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIEdTID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplO1xyXG4gICAgICAgICAgICAgICAgbS5pLmRlbGV0ZVNjb3BlUGFyYW1zID0gdHJ1ZTsgLy90byBhdm9pZCBtdWx0aXBsZSBpbnRlcm5hbCBwdWJsaXNoXHJcblxyXG4gICAgICAgICAgICAgICAgbS5hckVycm9yUHJvdmlkZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICBtLmFyRXhwaXJlZFByb3ZpZGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbS5hckxpbWl0UmVhY2hlZFByb3ZpZGVycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXMucHJvdmlkZXJQb3N0SURzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbS5wcm92aWRlclBvc3RJRHMgPSByZXMucHJvdmlkZXJQb3N0SURzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm92aWRlckVycm9yQ29kZXMgPSByZXMucHJvdmlkZXJFcnJvckNvZGVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKChyZXMuZXJyb3JDb2RlID09IDAgfHwgcmVzLmVycm9yQ29kZSA9PSA0MDMwMjQpICYmIHByb3ZpZGVyRXJyb3JDb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnByb3ZpZGVyRXJyb3JDb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX2dldFByb3ZpZGVyQnlOYW1lKHByb3ZpZGVyRXJyb3JDb2Rlc1tpXS5wcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm92aWRlckVycm9yQ29kZXNbaV0uZXJyb3JDb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uYXJQdWJsaXNoZWRQcm92aWRlcnMucHVzaChwcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoeyBldmVudE5hbWU6ICdzZW5kJywgcHJvdmlkZXI6IHByb3ZpZGVyLm5hbWUgfSwgbS5wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm92aWRlckVycm9yQ29kZXNbaV0uZXJyb3JDb2RlID09IDQwMzAyNCkgeyAvL1Byb3ZpZGVyX2xpbWl0X3JlYWNoZWQgPSA0MDMwMjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uYXJMaW1pdFJlYWNoZWRQcm92aWRlcnMucHVzaChwcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXJFcnJvckNvZGVzW2ldLmVycm9yQ29kZSA9PSA0MDMwMDkpIHsgLy9Qcm92aWRlcl9zZXNzaW9uX2V4cGlyZWQgPSA0MDMwMDlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmFyRXhwaXJlZFByb3ZpZGVycy5wdXNoKHByb3ZpZGVyLmRpc3BsYXlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5jb250ZXh0LmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5hckVycm9yUHJvdmlkZXJzLnB1c2gocHJvdmlkZXIuZGlzcGxheU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JQcm92aWRlcnMgPSByZXMucmVxdWVzdFBhcmFtcy5lbmFibGVkUHJvdmlkZXJzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvckNvZGUgPT0gNDAzMDA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uYXJFeHBpcmVkUHJvdmlkZXJzID0gZXJyb3JQcm92aWRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG0uYXJFcnJvclByb3ZpZGVycyA9IGVycm9yUHJvdmlkZXJzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG0uYXJFcnJvclByb3ZpZGVycy5sZW5ndGggPT0gMCB8fCBtLmkubmV2ZXJSZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMub25TaGFyZUNvbXBsZXRlKG0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtLmFyRXhwaXJlZFByb3ZpZGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yVGV4dCA9IFRoaXMuVEVYVChtLmxhbmcsICd0aGVfY29ubmVjdGlvbl90b190aGVfZm9sbG93aW5nX3Byb3ZpZGVyX2hhZF9iZWVuX2Rpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYWNrT3JDbG9zZSA9IFRoaXMuVEVYVChtLmxhbmcsICdiYWNrX29yX2Nsb3NlJykucmVwbGFjZSgnJWJhY2snLCBUaGlzLmdldEJhY2tMaW5rKG0pKS5yZXBsYWNlKCclY2xvc2UnLCBUaGlzLmdldENsb3NlTGluayhtKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcy5zZXRXb3JraW5nVGV4dChtLmkubW9kdWxlSUQsIGVycm9yVGV4dCArICc8YnIgLz4nICsgbS5hckV4cGlyZWRQcm92aWRlcnMuam9pbignLCcpICsgJzxiciAvPjxiciAvPicgKyBiYWNrT3JDbG9zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvclRleHQgPSBUaGlzLlRFWFQobS5sYW5nLCAndGhlcmVfd2FzX2FuX2Vycm9yX3NoYXJpbmdfdG9fdGhlX2ZvbGxvd2luZ19uZXR3b3JrcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbGVhc2VSZXRyeU9yQ2xvc2UgPSBUaGlzLlRFWFQobS5sYW5nLCAncGxlYXNlX3JldHJ5X29yX2Nsb3NlJykucmVwbGFjZSgnJXJldHJ5JywgVGhpcy5nZXRSZXRyeUxpbmsobSkpLnJlcGxhY2UoJyVjbG9zZScsIFRoaXMuZ2V0Q2xvc2VMaW5rKG0pKTtcclxuICAgICAgICAgICAgICAgICAgICBUaGlzLnNldFdvcmtpbmdUZXh0KG0uaS5tb2R1bGVJRCwgZXJyb3JUZXh0ICsgJzxiciAvPicgKyBtLmFyRXJyb3JQcm92aWRlcnMuam9pbignLCcpICsgJzxiciAvPjxiciAvPicgKyBwbGVhc2VSZXRyeU9yQ2xvc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWxlY3RQcm92aWRlcnM6IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXJQcm92aWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2JJRCA9IG1vZHVsZUlkICsgJ19jYicgKyBhclByb3ZpZGVyc1tpXS5JRDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYklEKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIGNiLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvdmlkZXJCdXR0b24obW9kdWxlSWQsIGFyUHJvdmlkZXJzW2ldLklEKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnRuUHJvdmlkZXJfT25DbGljazogZnVuY3Rpb24gKG1vZHVsZUlkLCBwcm92aWRlcklELCBldnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjYklEID0gbW9kdWxlSWQgKyAnX2NiJyArIHByb3ZpZGVySUQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYklEKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2IpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fZ2V0UHJvdmlkZXJCeUlEKHByb3ZpZGVySUQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG0uc2lkZWJhckRpc2FibGVkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoY2IuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVySUQgPT0gNjQgJiYgdGhpcy5jYW5Vc2VGYWNlYm9va1NoYXJlKG1vZHVsZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYi5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIuY29udGV4dCAmJiBwcm92aWRlci5jb250ZXh0LmNvbm5lY3RlZCAmJiAoIShwcm92aWRlci5jb250ZXh0Lm1pc3NpbmdQZXJtaXNzaW9ucyAmJiBwcm92aWRlci5jb250ZXh0Lm1pc3NpbmdQZXJtaXNzaW9ucy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2FjdGlvbnMnKSAhPSAtMSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYi5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdFRvUHJvdmlkZXIobSwgcHJvdmlkZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb3ZpZGVyQnV0dG9uKG1vZHVsZUlkLCBwcm92aWRlcklEKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlUHJvdmlkZXJCdXR0b246IGZ1bmN0aW9uIChtb2R1bGVJZCwgcHJvdmlkZXJJRCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9nZXRQcm92aWRlckJ5SUQocHJvdmlkZXJJRCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2JJRCA9IG1vZHVsZUlkICsgJ19jYicgKyBwcm92aWRlcklEO1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZ0lEID0gbW9kdWxlSWQgKyAnX2J0bicgKyBwcm92aWRlcklEO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2JJRCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1nSUQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2UgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCAnL2dzL2kvU2hhcmUvJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNiICYmIGltZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYi5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiLnNyYyA9IGJhc2UgKyAnQ2hlY2tlZC5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiLnNyYyA9IGJhc2UgKyAnTm90Q2hlY2tlZC5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwcm92aWRlci5JRCA9PSA2NCkgeyAvL2ZhY2Vib29rXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiICYmIGNiLmNoZWNrZWQgJiYgdGhpcy5jYW5Vc2VGYWNlYm9va1NoYXJlKG1vZHVsZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmZiU2hhcmVWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RmFjZWJvb2tTaGFyZURpYWxvZyhtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5mYlNoYXJlVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVGYWNlYm9va1NoYXJlRGlhbG9nKG1vZHVsZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldFVzZXJNZXNzYWdlOiBmdW5jdGlvbiAobSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWdleHAgPSAvKC4qPykodXxVKXNlckFjdGlvbi87XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwYXJhbSBpbiBtLnApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnZXhwLnRlc3QocGFyYW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0ucFtwYXJhbV1bJ3VzZXJNZXNzYWdlJ10gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dGYWNlYm9va1NoYXJlRGlhbG9nOiBmdW5jdGlvbiAobW9kdWxlSWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlkXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVNoYXJlQ2FudmFzKG0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZiUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYi1yb290Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW0ubG9hZGVkRkJTaGFyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYlJvb3QpIGZiUm9vdC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlU2lkZWJhcihtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNob3dTaWRlYmFyID0gdGhpcy5zaG93U2lkZWJhcjtcclxuICAgICAgICAgICAgICAgICAgICBtLmxvYWRlZEZCU2hhcmUgPSAnbm90WWV0JztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGJNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX2NvbW1lbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJNZXNzYWdlKG0sIHRiTWVzc2FnZS5wbGFjZWhvbGRlckNsZWFyZWQgPT0gdHJ1ZSA/IHRiTWVzc2FnZS52YWx1ZSA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19zaWRlYmFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYiAmJiBzYi5zdHlsZS5kaXNwbGF5ID09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5sb2FkZWRGQlNoYXJlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2lkZWJhcihtb2R1bGVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcGkuc2hhcmUuaGlkZUZhY2Vib29rU2hhcmVEaWFsb2cobW9kdWxlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEZCUHJvdmlkZXJPYmogPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX2dldFByb3ZpZGVyQnlOYW1lKCdmYWNlYm9vaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoRkJQcm92aWRlck9iai5jb250ZXh0ICYmIEZCUHJvdmlkZXJPYmouY29udGV4dC5jb25uZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSWQgKyAnX2NiNjQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIGNiLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLlRoaXMudXBkYXRlUHJvdmlkZXJCdXR0b24obW9kdWxlSWQsIDY0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGV4dElEID0gdGhpcy5zdG9yZUNvbnRleHQoeyBUaGlzOiB0aGlzLCBtOiBtIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5jb252ZXJ0QWN0aW9uKHsgQVBJS2V5OiBtLmMuQVBJS2V5IH0sIHsgcHJvdmlkZXI6ICdmYWNlYm9vaycsIHVzZXJBY3Rpb246IG0ucC51c2VyQWN0aW9uLCBjYWxsYmFjazogdGhpcy5vbkFjdGlvbiwgY29udGV4dDogY29udGV4dElEIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtLmxvYWRlZEZCU2hhcmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYlJvb3QpIGZiUm9vdC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlRmFjZWJvb2tTaGFyZURpYWxvZzogZnVuY3Rpb24gKG1vZHVsZUlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IF9waS5zaGFyZS5tb2R1bGVzW21vZHVsZUlkXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYXJlQ2FudmFzKG0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG0uaS5pc1BvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZiUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYi1yb290Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZiUm9vdCkgZmJSb290LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd1NoYXJlQ2FudmFzOiBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG0uaVsnZ3JheWVkT3V0U2NyZWVuT3BhY2l0eSddID4gMCAmJiBtLmkuaXNQb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5HcmF5T3V0KHRydWUsIHsgJ3ppbmRleCc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG0ub3JpZ2luYWxQLmNvbnRhaW5lcklEKS5zdHlsZS56SW5kZXggLSAxLCAnb3BhY2l0eSc6IG0uaVsnZ3JheWVkT3V0U2NyZWVuT3BhY2l0eSddIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG0uaS5pc1BvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpYWxvZ0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS5vcmlnaW5hbFAuY29udGFpbmVySUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0VsLnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dFbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRWwuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5zaG93QnlJRChtLm9yaWdpbmFsUC5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2hvd0J5SUQoJ2dpZ3lhX2lmcl8nICsgbS5vcmlnaW5hbFAuY29udGFpbmVySUQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlU2hhcmVDYW52YXM6IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobS5pWydncmF5ZWRPdXRTY3JlZW5PcGFjaXR5J10gPiAwICYmIG0uaS5pc1BvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLkdyYXlPdXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmhpZGVCeUlEKG0ub3JpZ2luYWxQLmNvbnRhaW5lcklEKTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5oaWRlQnlJRCgnZ2lneWFfaWZyXycgKyBtLm9yaWdpbmFsUC5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobS5pLmlzUG9wdXApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbG9nRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLm9yaWdpbmFsUC5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRWwucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlU2lkZWJhcjogZnVuY3Rpb24gKG1vZHVsZUlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IF9waS5zaGFyZS5tb2R1bGVzW21vZHVsZUlkXTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5oaWRlQnlJRChtLm9yaWdpbmFsUC5jb250YWluZXJJRCArICdfc2lkZWJhcicpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmhpZGVCeUlEKCdnaWd5YV9pZnJfJyArIG0ub3JpZ2luYWxQLmNvbnRhaW5lcklEICsgJ19zaWRlYmFyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobS5pLmlzUG9wdXApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLm9yaWdpbmFsUC5jb250YWluZXJJRCArICdfc2lkZWJhcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd1NpZGViYXI6IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSBfcGkuc2hhcmUubW9kdWxlc1ttb2R1bGVJZF07XHJcbiAgICAgICAgICAgICAgICBpZiAobS5pLmlzUG9wdXApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLm9yaWdpbmFsUC5jb250YWluZXJJRCArICdfc2lkZWJhcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2hvd0J5SUQobS5vcmlnaW5hbFAuY29udGFpbmVySUQgKyAnX3NpZGViYXInKTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5zaG93QnlJRCgnZ2lneWFfaWZyXycgKyBtLm9yaWdpbmFsUC5jb250YWluZXJJRCArICdfc2lkZWJhcicpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3YWl0Zm9yRmFjZWJvb2tEaWFsb2c6IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBlbHMgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlmciA9IGVsc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlmci5jbGFzc05hbWUgPT0gJ0ZCX1VJX0RpYWxvZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgZGFyaz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya2VuU2NyZWVuT2JqZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKGRhcmspIGRhcmsuc3R5bGUuekluZGV4PWlmci5zdHlsZS56SW5kZXgtMTsgXHQgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuR3JheU91dChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uaVsnZ3JheWVkT3V0U2NyZWVuT3BhY2l0eSddID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IGdpZ3lhLmdsb2JhbC5fR2V0RWxlbWVudFBvcyhpZnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9wID0gcG9zLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnQgPSBwb3MubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvcCAmJiB0b3AgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLm9yaWdpbmFsUC5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGl2U2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG0uaS5tb2R1bGVJRCArICdfc2lkZWJhcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3BpLnNoYXJlLnVuZml4RGl2UG9zaXRpb24ob3JpZ2luYWxDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3BpLnNoYXJlLnVuZml4RGl2UG9zaXRpb24oZGl2U2lkZWJhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9wICYmIHRvcCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA8IDYzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSA2MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5sZWZ0ID0gJzUzcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcGkuc2hhcmUuY2hhbmdlRGl2UG9zaXRpb24obS5vcmlnaW5hbFAuY29udGFpbmVySUQsIHRvcCAtIDEwLCBsZWZ0IC0gMTAsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcGkuc2hhcmUuY2hhbmdlRGl2UG9zaXRpb24obS5pLm1vZHVsZUlEICsgJ19zaWRlYmFyJywgdG9wICsgKGlmci5vZmZzZXRIZWlnaHQgLSBkaXZTaWRlYmFyLmdpZ0hlaWdodCkgLyAyLCBsZWZ0IC0gMTAgLSA1MywgNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3BpLnNoYXJlLnNob3dTaWRlYmFyKG0uaS5tb2R1bGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgX3BpLnNoYXJlLndhaXRmb3JGYWNlYm9va0RpYWxvZyhtKSB9LCAxMDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bmZpeERpdlBvc2l0aW9uOiBmdW5jdGlvbiAoZGl2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGl2ICYmIGRpdi5mbmNDaGFuZ2VQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5hZGRlZEV2ZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZGV0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmRldGFjaEV2ZW50KCdvbnNjcm9sbCcsIGRpdi5mbmNDaGFuZ2VQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5kZXRhY2hFdmVudCgnb25yZXNpemUnLCBkaXYuZm5jQ2hhbmdlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRpdi5mbmNDaGFuZ2VQb3NpdGlvbiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGl2LmZuY0NoYW5nZVBvc2l0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaXhEaXZQb3NpdGlvbjogZnVuY3Rpb24gKGRpdiwgZm5jQ2hhbmdlUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGRpdi5mbmNDaGFuZ2VQb3NpdGlvbiA9IGZuY0NoYW5nZVBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkaXYuYWRkZWRFdmVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuYWRkZWRFdmVudHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbnNjcm9sbCcsIGRpdi5mbmNDaGFuZ2VQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25yZXNpemUnLCBkaXYuZm5jQ2hhbmdlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRpdi5mbmNDaGFuZ2VQb3NpdGlvbiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGl2LmZuY0NoYW5nZVBvc2l0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm5jQ2hhbmdlUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZm5jQ2hhbmdlUG9zaXRpb24oKSB9LCAxMCk7IC8vSUU3IGJ1Z1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkFjdGlvbjogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZiUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYi1yb290Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmJSb290KSBmYlJvb3Quc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5mZXRjaENvdG5leHQocmVzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIFRoaXMgPSBjb250ZXh0LlRoaXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IGNvbnRleHQubTtcclxuICAgICAgICAgICAgICAgIG0ubG9hZGVkRkJTaGFyZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgRkIudWkoZ2lneWEudXRpbHMuSlNPTi5kZXNlcmlhbGl6ZShyZXMuYWN0aW9uKSwgZnVuY3Rpb24gKGZiUmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG0ucFsnc2NvcGUnXSAmJiBtLnBbJ3Njb3BlJ10udG9Mb3dlckNhc2UoKSA9PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmYgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBtLmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZbcF0gPSBtLmNbcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIG0ucCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3BdID0gbS5wW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmYuZW5hYmxlZFByb3ZpZGVycyA9ICdmYWNlYm9vayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5lbmFibGVkUHJvdmlkZXJzID0gJ2ZhY2Vib29rJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnNjb3BlID0gJ2ludGVybmFsJztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucHVibGlzaFVzZXJBY3Rpb24oY29uZiwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5pLmRlbGV0ZVNjb3BlUGFyYW1zID0gdHJ1ZTsgLy93aWxsIG92ZXJyaWRlIHBhcmFtcyBzY29wZSBwYXJhbSB0byBhdm9pZCBtdWx0aXBsZSBpbnRlcm5hbCBwdWJsaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMuaGlkZUZhY2Vib29rU2hhcmVEaWFsb2cobS5pLm1vZHVsZUlELCBUaGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmJSZXMgJiYgZmJSZXMucG9zdF9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgRkJQcm92aWRlck9iaiA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fZ2V0UHJvdmlkZXJCeU5hbWUoJ2ZhY2Vib29rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnJlcG9ydHMucmVwb3J0KCdhY3Rpb24nLCBtLmMuQVBJS2V5LCBtLmMuY2lkLCBtLmMuc291cmNlLCBtLmMuc291cmNlRGF0YSwgeyBzbjogJ2ZhY2Vib29rJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5hclB1Ymxpc2hlZFByb3ZpZGVycy5wdXNoKEZCUHJvdmlkZXJPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoeyBldmVudE5hbWU6ICdzZW5kJywgcHJvdmlkZXI6IEZCUHJvdmlkZXJPYmoubmFtZSB9LCBtLnApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5zZXRXb3JraW5nVGV4dChtLmkubW9kdWxlSUQsIFRoaXMuVEVYVChtLmxhbmcsICdwdWJsaXNoaW5nX3BsZWFzZV93YWl0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGQi5hcGkoZmJSZXMucG9zdF9pZCwge30sIGZ1bmN0aW9uIChwb3N0UmVzKSB7IC8vZ2V0IGNvbW1lbnQgdGV4dCwgdGhlbiBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IHBvc3RSZXMubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbXNnKSBtc2cgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YlVzZXJNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS5pLm1vZHVsZUlEICsgJ19jb21tZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YlVzZXJNZXNzYWdlLnBsYWNlaG9sZGVyQ2xlYXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YlVzZXJNZXNzYWdlLnZhbHVlID0gbXNnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5zZXRVc2VyTWVzc2FnZShtLCBtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5zaGFyZVRvUHJvdmlkZXJzKG0uaS5tb2R1bGVJRCwgWzY0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy9za2lwIG1lYW5zIGNsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuY2xvc2VTaGFyZShtLmkubW9kdWxlSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgVGhpcy53YWl0Zm9yRmFjZWJvb2tEaWFsb2cobSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFJvdW5kQ29ybmVyc0hUTUw6IGZ1bmN0aW9uIChpbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBhciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2UgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCAnL2dzL2kvc2hhcmUvT3V0bGluZV8nKTtcclxuICAgICAgICAgICAgICAgIGFyW2ErK10gPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiB3aWR0aD1cIjEwMCVcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cIndpZHRoOjEwMCU7dmVydGljYWwtYWxpZ246bWlkZGxlO2xpbmUtaGVpZ2h0OjFweDtcIj4nO1xyXG4gICAgICAgICAgICAgICAgYXJbYSsrXSA9ICc8dHI+PHRkIHdpZHRoPVwiNVwiPjxpbWcgc3JjPVwiJyArIGJhc2UgKyAnVG9wTGVmdC5wbmdcIiBhbHQ9XCJcIiAvPjwvdGQ+PHRkIHdpZHRoPVwiOTklXCIgc3R5bGU9XCJib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjY2NjO2JhY2tncm91bmQtY29sb3I6I0ZGRkZGRlwiPiYjMTYwOzwvdGQ+PHRkIHdpZHRoPVwiNVwiPjxpbWcgc3JjPVwiJyArIGJhc2UgKyAnVG9wUmlnaHQucG5nXCIgYWx0PVwiXCIgLz48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIGFyW2ErK10gPSAnPHRyPjx0ZCB3aWR0aD1cIjVcIiBzdHlsZT1cImJvcmRlci1sZWZ0OjFweCBzb2xpZCAjY2NjY2NjO2JhY2tncm91bmQtY29sb3I6I0ZGRkZGRlwiPiYjMTYwOzwvdGQ+PHRkIHdpZHRoPVwiOTklXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkZcIj4nICsgaW5uZXJIVE1MICsgJzwvdGQ+PHRkIHdpZHRoPVwiNVwiIHN0eWxlPVwiYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjY2NjY2NjO2JhY2tncm91bmQtY29sb3I6I0ZGRkZGRlwiPiYjMTYwOzwvdGQ+PC90cj4nO1xyXG4gICAgICAgICAgICAgICAgYXJbYSsrXSA9ICc8dHI+PHRkIHdpZHRoPVwiNVwiPjxpbWcgc3JjPVwiJyArIGJhc2UgKyAnQm90dG9tTGVmdC5wbmdcIiBhbHQ9XCJcIiAvPjwvdGQ+PHRkIHdpZHRoPVwiOTklXCIgc3R5bGU9XCJib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjY2NjO2JhY2tncm91bmQtY29sb3I6I0ZGRkZGRlwiPiYjMTYwOzwvdGQ+PHRkIHdpZHRoPVwiNVwiPjxpbWcgc3JjPVwiJyArIGJhc2UgKyAnQm90dG9tUmlnaHQucG5nXCIgYWx0PVwiXCIgLz48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIGFyW2ErK10gPSAnPC90YWJsZT4nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRJdGVtSFRNTDogZnVuY3Rpb24gKG1vZHVsZUlkLCByZXNvbHZlciwgd2lkdGgsIHRodW1iU2l6ZSwgbWF4VGl0bGVIZWlnaHQsIG1heERlc2NIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBHUyA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZTtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlkXTtcclxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBtLnAudXNlckFjdGlvbjtcclxuICAgICAgICAgICAgICAgIHZhciBtZWRpYUl0ZW1zID0gYWN0aW9uWydtZWRpYUl0ZW1zJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgdGh1bWJVUkw7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVkaWFJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgbWVkaWFJdGVtcy5sZW5ndGg7IHUrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVkaWFJdGVtID0gbWVkaWFJdGVtc1t1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lZGlhSXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVkaWFJdGVtLnR5cGUgPT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iVVJMID0gbWVkaWFJdGVtLnNyYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZWRpYUl0ZW0udHlwZSA9PSAndmlkZW8nIHx8IG1lZGlhSXRlbS50eXBlID09ICdmbGFzaCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYlVSTCA9IG1lZGlhSXRlbS5wcmV2aWV3SW1hZ2VVUkw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbS50aHVtYlVSTCA9IGdpZ3lhLmdsb2JhbC5nZXRQaG90b1VSTCh0aHVtYlVSTCk7O1xyXG4gICAgICAgICAgICAgICAgdmFyIGFySFRNTCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aHVtYlNpemUpIHRodW1iU2l6ZSA9IDgwO1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBoZWlnaHQ9XCInICsgdGh1bWJTaXplICsgJ1wiIHdpZHRoPVwiJyArIHRodW1iU2l6ZSArICdcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6OXB4XCI+PHRyIHZhbGlnbj1cInRvcFwiPic7XHJcbiAgICAgICAgICAgICAgICBpZiAodGh1bWJVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgd2lkdGg9XCInICsgdGh1bWJTaXplICsgJ1wiPjxkaXYgc3R5bGU9XCJ3aWR0aDonICsgdGh1bWJTaXplICsgJ3B4O2hlaWdodDonICsgdGh1bWJTaXplICsgJ3B4XCI+PGltZyBzdHlsZT1cImRpc3BsYXk6bm9uZTt3aWR0aDppbmhlcml0O2hlaWdodDppbmhlcml0O1wiIG9ubG9hZD1cInZhciBpbWc9bmV3IEltYWdlKCk7IGltZy5zcmM9dGhpcy5zcmM7dmFyIFRoaXM9dGhpczsgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtpZiAoaW1nLndpZHRoPT0wKSB7VGhpcy5zcmM9XFwnXFwnOyBUaGlzLnNyYz1pbWcuc3JjO3JldHVybjt9IGlmIChpbWcud2lkdGg+aW1nLmhlaWdodCkgVGhpcy53aWR0aD1cXCcnICsgdGh1bWJTaXplICsgJ1xcJzsgZWxzZSBUaGlzLmhlaWdodD1cXCcnICsgdGh1bWJTaXplICsgJ1xcJzsgVGhpcy5zdHlsZS5kaXNwbGF5PVxcJ1xcJzt9LDEwMClcIiBzcmM9XCInICsgdGh1bWJVUkwgKyAnXCIgYWx0PVwiXCIgLz48L2Rpdj48L3RkPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBhY3Rpb25bJ3RpdGxlJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSBhY3Rpb25bJ2Rlc2NyaXB0aW9uJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGVUcnVuYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0aW9uVHJ1bmMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICghdGl0bGUpIHRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uKSBkZXNjcmlwdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9UaXRsZVN0eWxlID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvZWxlbWVudHMvbGJsVGl0bGUgfCArL2NvbmZpZy9ib2R5L2l0ZW0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb0Rlc2NyaXB0aW9uU3R5bGUgPSByZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9lbGVtZW50cy9pdGVtJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpZHRoKSB3aWR0aCA9IG0ucC53aWR0aCAtIDIyNTtcclxuICAgICAgICAgICAgICAgIGlmICghbWF4VGl0bGVIZWlnaHQpIG1heFRpdGxlSGVpZ2h0ID0gMTg7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1heERlc2NIZWlnaHQpIG1heERlc2NIZWlnaHQgPSA1NztcclxuICAgICAgICAgICAgICAgIHZhciBtZWFzdXJlcyA9IGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dCh0aXRsZSwgb1RpdGxlU3R5bGUsIHdpZHRoKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICgobWVhc3VyZXMuaCA+IG1heFRpdGxlSGVpZ2h0IHx8IG1lYXN1cmVzLncgPiB3aWR0aCkgJiYgdGl0bGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlVHJ1bmMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gdGl0bGUuc3Vic3RyaW5nKDAsIHRpdGxlLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lYXN1cmVzID0gZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KHRpdGxlICsgJy4uLicsIG9UaXRsZVN0eWxlLCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVUcnVuYykgdGl0bGUgKz0gJy4uLic7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoID4gODAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UcnVuYyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgODAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1lYXN1cmVzID0gZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KGRlc2NyaXB0aW9uLCBvRGVzY3JpcHRpb25TdHlsZSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKChtZWFzdXJlcy5oID4gbWF4RGVzY0hlaWdodCB8fCBtZWFzdXJlcy53ID4gd2lkdGgpICYmIGRlc2NyaXB0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRydW5jID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCBkZXNjcmlwdGlvbi5sZW5ndGggLSAyKTtcclxuICAgICAgICAgICAgICAgICAgICBtZWFzdXJlcyA9IGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dChkZXNjcmlwdGlvbiArICcuLi4nLCBvRGVzY3JpcHRpb25TdHlsZSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uVHJ1bmMpIGRlc2NyaXB0aW9uICs9ICcuLi4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZCBzdHlsZT1cInBhZGRpbmctbGVmdDoxMHB4O1wiPjxkaXYgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTo0cHg7JyArIEdTLmdldFN0eWxlU3RyaW5nKG9UaXRsZVN0eWxlKSArICd3aWR0aDonICsgd2lkdGggKyAncHhcIj4nICsgZ2lneWEudXRpbHMuc2FuaXRpemUuc2FuaXRpemVIVE1MKHRpdGxlKSArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPGRpdiBzdHlsZT1cIicgKyBHUy5nZXRTdHlsZVN0cmluZyhvRGVzY3JpcHRpb25TdHlsZSkgKyAnd2lkdGg6JyArIHdpZHRoICsgJ3B4XCI+JyArIGdpZ3lhLnV0aWxzLnNhbml0aXplLnNhbml0aXplSFRNTChkZXNjcmlwdGlvbikgKyAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvdGQ+PC90cj4nO1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90YWJsZT4nXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJIVE1MLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGFuZ2VEaXZQb3NpdGlvbjogZnVuY3Rpb24gKGRpdklELCB0b3AsIGxlZnQsIGZyYW1lT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SUQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlmciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9pZnJfJyArIGRpdklEKTtcclxuICAgICAgICAgICAgICAgIHZhciBzVG9wID0gdG9wO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNMZWZ0ID0gbGVmdDtcclxuICAgICAgICAgICAgICAgIGlmICghZ2lneWEubG9jYWxJbmZvLmlzSUUpIGZyYW1lT2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0b3AgIT0gbnVsbCkgc1RvcCA9ICcnICsgTWF0aC5jZWlsKHBhcnNlSW50KHRvcCkpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0ICE9IG51bGwpIHNMZWZ0ID0gJycgKyBNYXRoLmNlaWwocGFyc2VJbnQobGVmdCkpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGlmIChkaXYpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuZml4ZWRMZWZ0ID0gbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuZml4ZWRUb3AgPSB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvcCAhPSBudWxsKSBkaXYuc3R5bGUudG9wID0gc1RvcDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCAhPSBudWxsKSBkaXYuc3R5bGUubGVmdCA9IHNMZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlmcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZnJhbWVPZmZzZXQpIGZyYW1lT2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9wICE9IG51bGwpIGlmci5zdHlsZS50b3AgPSAnJyArICh0b3AgKyBmcmFtZU9mZnNldCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ICE9IG51bGwpIGlmci5zdHlsZS5sZWZ0ID0gJycgKyAobGVmdCArIGZyYW1lT2Zmc2V0KSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc2FibGVTaWRlYmFyOiBmdW5jdGlvbiAobW9kdWxlSWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSggJy9ncy9pLycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyUHJvdmlkZXJzID0gbS5pLmFyUHJvdmlkZXJzO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhclByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGFyUHJvdmlkZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19jYicgKyBwcm92aWRlci5JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYi5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYi5zcmMgPSBiYXNlICsgJ1NoYXJlL2NoZWNrZWRfZGlzLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYi5zcmMgPSBiYXNlICsgJ1NoYXJlL25vdENoZWNrZWRfZGlzLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29uSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfYnRuJyArIHByb3ZpZGVyLklEKTtcclxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2Uuc3JjID0gYmFzZSArICdzaGFyZS8nICsgcHJvdmlkZXIubmFtZSArICdfMjVfZGlzLnBuZyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBidXR0b25FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19zb2NpYWxCdG5fJyArIHByb3ZpZGVyLklEKTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25FbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG0uc2lkZWJhckRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW5hYmxlU2lkZWJhcjogZnVuY3Rpb24gKG1vZHVsZUlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoICcvZ3MvaS8nKTtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW21vZHVsZUlkXTtcclxuICAgICAgICAgICAgICAgIHZhciBhclByb3ZpZGVycyA9IG0uaS5hclByb3ZpZGVycztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBhclByb3ZpZGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfY2InICsgcHJvdmlkZXIuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYi5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiLnNyYyA9IGJhc2UgKyAnU2hhcmUvY2hlY2tlZC5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiLnNyYyA9IGJhc2UgKyAnU2hhcmUvbm90Q2hlY2tlZC5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb25JbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlkICsgJ19idG4nICsgcHJvdmlkZXIuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZS5zcmMgPSBiYXNlICsgJ3NoYXJlLycgKyBwcm92aWRlci5uYW1lICsgJ18yNS5wbmcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnV0dG9uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJZCArICdfc29jaWFsQnRuXycgKyBwcm92aWRlci5JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uRWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uRWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtLnNpZGViYXJEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRCbHVlQnV0dG9uSFRNTDogZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyO3dpZHRoOjc1cHg7aGVpZ2h0OjIzcHg7YmFja2dyb3VuZC1jb2xvcjojM0I1OTk4O2JvcmRlcjoxcHggc29saWQ7Ym9yZGVyLXRvcC1jb2xvcjogI0Q5REZFQTtib3JkZXItbGVmdC1jb2xvcjogI0Q5REZFQTtib3JkZXItYm90dG9tLWNvbG9yOiAjMEUxRjVCO2JvcmRlci1yaWdodC1jb2xvcjogIzBFMUY1QlwiIHdpZHRoPVwiNzVcIiBoZWlnaHQ9XCIyM1wiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0cj48dGQgc3R5bGU9XCJmb250LWZhbWlseTphcmlhbDtmb250LXNpemU6MTNweDtjb2xvcjojRkZGRkZGO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlclwiPicgKyB0ZXh0ICsgJzwvdGQ+PC90cj48L3RhYmxlPic7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFNlbmRCdXR0b25IVE1MOiBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc8dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXI7d2lkdGg6NzVweDtoZWlnaHQ6MjNweDtiYWNrZ3JvdW5kLWNvbG9yOiMzNjc2OUI7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzIwNDY1RDtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICMyMDQ2NURcIiB3aWR0aD1cIjc1XCIgaGVpZ2h0PVwiMjNcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj48dHI+PHRkIHN0eWxlPVwiZm9udC1mYW1pbHk6YXJpYWw7Zm9udC1zaXplOjEzcHg7Y29sb3I6I0ZGRkZGRjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1hbGlnbjpjZW50ZXJcIj4nICsgdGV4dCArICc8L3RkPjwvdHI+PC90YWJsZT4nO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRTZXR0aW5nczogZnVuY3Rpb24gKG1vZHVsZUlELCBhbHdheXNTaGFyZSwgbmV2ZXJTaGFyZSwgcHJvdmlkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMubW9kdWxlc1ttb2R1bGVJRF07XHJcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nc1ttLnBbJ2F1dG9TaGFyZUFjdGlvbklEJ11dID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbklEOiBtLnBbJ2F1dG9TaGFyZUFjdGlvbklEJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2hhcmU6IGFsd2F5c1NoYXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldmVyU2hhcmU6IG5ldmVyU2hhcmVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobS5wWydhdXRvU2hhcmVBY3Rpb25EaXNwbGF5J10pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1ttLnBbJ2F1dG9TaGFyZUFjdGlvbklEJ11dLmRpc3BsYXkgPSBtLnBbJ2F1dG9TaGFyZUFjdGlvbkRpc3BsYXknXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwcm92aWRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1ttLnBbJ2F1dG9TaGFyZUFjdGlvbklEJ11dLnByb3ZpZGVycyA9IHByb3ZpZGVycztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtLnBbJ2F1dG9TaGFyZUV4cGlyYXRpb24nXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzW20ucFsnYXV0b1NoYXJlQWN0aW9uSUQnXV0uZXhwaXJhdGlvbiA9IG0ucFsnYXV0b1NoYXJlRXhwaXJhdGlvbiddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cDogJ2dpZ3lhU2hhcmVTZXR0aW5ncycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuc2V0VXNlclNldHRpbmdzKG0uYywgcGFyYW1zKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmV2ZXJTaGFyZVRoaXNfT25DbGljazogZnVuY3Rpb24gKG1vZHVsZUlEKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNldHRpbmdzKG1vZHVsZUlELCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU2hhcmUobW9kdWxlSUQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbHdheXNTaGFyZVRoaXNfT25DbGljazogZnVuY3Rpb24gKG1vZHVsZUlEKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMubW9kdWxlc1ttb2R1bGVJRF07XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoICcvZ3MvaS9TaGFyZS8nKTtcclxuICAgICAgICAgICAgICAgIHZhciBjYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlEICsgJ19jYkFsd2F5c1NoYXJlJyk7XHJcbiAgICAgICAgICAgICAgICBjYi5jaGVja2VkID0gIShjYi5jaGVja2VkKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYi5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3JjID0gYmFzZSArICdjaGVja2JveF9jaGVja2VkLmdpZic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLnNyYyA9IGJhc2UgKyAnY2hlY2tib3guZ2lmJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoYW5nZVZpZXc6IGZ1bmN0aW9uICh2aWV3LCBtb2R1bGVJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtLmNoYW5nZWRWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlldyA9IHZpZXcudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtb3JlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dCb29rbWFya3MobW9kdWxlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VtYWlsKG1vZHVsZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbS5jaGFuZ2VkVmlldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dVSTogZnVuY3Rpb24gKGMsIHAsIGludGVybmFscykge1xyXG4gICAgICAgICAgICAgICAgdmFyIEdTID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJpZCA9IGludGVybmFsc1sncmlkJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc29sdmVyID0gbmV3IGdpZ3lhLmdsb2JhbC5yZXNvbHZlcihnaWd5YS5nbG9iYWwucmVzb2x2ZXIuZGVmYXVsdFByb2NjZXNzb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZXIuYWRkQ29uZmlnKCc8Y29uZmlnPjxib2R5IGZvbnQ9XCJhcmlhbFwiPjxjYXB0aW9ucyBib2xkPVwidHJ1ZVwiIHNpemU9XCIxM1wiIGNvbG9yPVwiI2ZmZmZmZlwiIGJhY2tncm91bmQtY29sb3I9XCIjRkZGRkZGXCIgZnJhbWUtdGhpY2tuZXNzPVwiMFwiIC8+PGJhY2tncm91bmQgZnJhbWUtdGhpY2tuZXNzPVwiMFwiIGZyYW1lLWNvbG9yPVwiIzk5OTk5OVwiIGJhY2tncm91bmQtY29sb3I9XCIjRkZGRkZGXCIgLz48dGV4dHMgc2l6ZT1cIjEycHhcIiBjb2xvcj1cIiM1NTU1NTVcIj48bGlua3MgY29sb3I9XCIjQ0ZDRkNGXCIgc2l6ZT1cIjExcHhcIiBib2xkPVwiZmFsc2VcIiAvPjwvdGV4dHM+PC9ib2R5PjwvY29uZmlnPicpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZXIuYWRkQ29uZmlnKCc8Y29uZmlnPjxlbGVtZW50cz48bGJsV29ya2luZyBib2xkPVwidHJ1ZVwiIHNpemU9XCIxMlwiIGNvbG9yPVwiIzU3NTc1N1wiPjxsaW5rcyB1bmRlcmxpbmU9XCJ0cnVlXCIgY29sb3I9XCIjNTE5N0REXCIgLz48L2xibFdvcmtpbmc+PGxibFRpdGxlIGJvbGQ9XCJ0cnVlXCIgc2l6ZT1cIjEycHhcIiBjb2xvcj1cIiM1NTU1NTVcIiAvPjxsYmxTaGFyZSBzaXplPVwiMTZcIiAvPjxpdGVtIGZvbnQ9XCJhcmlhbFwiIHNpemU9XCIxMXB4XCIgY29sb3I9XCIjODA4MDgwXCIgLz48L2VsZW1lbnRzPjwvY29uZmlnPicpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmVyLmFkZENvbmZpZyhjWydVSUNvbmZpZyddKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVyLmFkZENvbmZpZyhwWydVSUNvbmZpZyddKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbGFuZyA9IGNbJ2xhbmcnXTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcFsnbGFuZyddICE9ICd1bmRlZmluZWQnKSBsYW5nID0gcFsnbGFuZyddO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtb2R1bGVJRCA9IGludGVybmFsc1snbW9kdWxlSUQnXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbbW9kdWxlSURdID0geyBvcmlnaW5hbEM6IGMsIG9yaWdpbmFsUDogcCwgaTogaW50ZXJuYWxzLCBUaGlzOiBUaGlzLCByZXNvbHZlcjogcmVzb2x2ZXIsIGFyUHVibGlzaGVkUHJvdmlkZXJzOiBbXSB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVybmFsc1snaXNQb3B1cCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9Qb3B1cCA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fY3JlYXRlSlNQb3B1cDIocmlkLCByZXNvbHZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IG9Qb3B1cC5jO1xyXG4gICAgICAgICAgICAgICAgICAgIHAgPSBvUG9wdXAucDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlc1ttb2R1bGVJRF0uYyA9IGM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbbW9kdWxlSURdLnAgPSBwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzW21vZHVsZUlEXS5sYW5nID0gbGFuZztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVySUQgPSBwWydjb250YWluZXJJRCddO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB3ID0gcFsnd2lkdGgnXTtcclxuICAgICAgICAgICAgICAgIHZhciBoID0gcFsnaGVpZ2h0J107XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhckhUTUwgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb0JnU3R5bGUgPSByZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9ib2R5L2JhY2tncm91bmQnKTtcclxuICAgICAgICAgICAgICAgIHZhciBib3JkZXJTdHJpbmcgPSAnYm9yZGVyOiA1cHggc29saWQgIzU1NTU1NSc7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxzWydpc1BvcHVwJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBvQmdTdHlsZVsnZnJhbWUtdGhpY2tuZXNzJ10gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvTGlua1N0eWxlID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS90ZXh0cy9saW5rcycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9UZXh0U3R5bGUgPSByZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9ib2R5L3RleHRzJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb1dvcmtpbmdUZXh0U3R5bGUgPSByZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9lbGVtZW50cy9sYmxXb3JraW5nIHwgKy9jb25maWcvYm9keS90ZXh0cycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0U3R5bGUgPSBHUy5nZXRTdHlsZVN0cmluZyhvVGV4dFN0eWxlKTtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rU3R5bGUgPSBHUy5nZXRTdHlsZVN0cmluZyhvTGlua1N0eWxlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSggJy9ncy9pLycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzaGFyZUNhbnZhc1dpZHRoID0gcFsnd2lkdGgnXTtcclxuICAgICAgICAgICAgICAgIHZhciBzaGFyZUNhbnZhc0hlaWdodCA9IHBbJ2hlaWdodCddO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW50ZXJuYWxzLmlzUG9wdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZUNhbnZhc1dpZHRoIC09IDYzO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlQ2FudmFzSGVpZ2h0IC09IDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRJRCA9IG1vZHVsZUlELnJlcGxhY2UoL1suXS9nLCAnXFxcXC4nKTtcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzxkaXYgaWQ9XCInICsgbW9kdWxlSUQgKyAnX3NoYXJlQ2FudmFzXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7IHdpZHRoOicgKyBzaGFyZUNhbnZhc1dpZHRoICsgJ3B4O2hlaWdodDonICsgc2hhcmVDYW52YXNIZWlnaHQgKyAncHg7dGV4dC1hbGlnbjpsZWZ0OycgKyBib3JkZXJTdHJpbmcgKyAnXCI+JztcclxuICAgICAgICAgICAgICAgIF9waS5jb21tb24uYWRkQ1NTKFsnIycsIGVzY2FwZWRJRCwgJyAudGFiYmluZy1idXR0b24geyBoZWlnaHQ6MzBweCAhaW1wb3J0YW50OyB9JywgJyMnLCBlc2NhcGVkSUQsICcgdGQsIycsIGVzY2FwZWRJRCwgJyBkaXYsICMnLCBlc2NhcGVkSUQsICcgdGQ6aG92ZXIsICMnLCBlc2NhcGVkSUQsICcgdHI6aG92ZXIsICMnLCBlc2NhcGVkSUQsICcgdHIsICMnLCBlc2NhcGVkSUQsICcgdGFibGUsICMnLCBlc2NhcGVkSUQsICcgdGJvZHksICMnLCBlc2NhcGVkSUQsICcgdGgge3Bvc2l0aW9uOnN0YXRpYzt0YWJsZS1sYXlvdXQ6IGF1dG87d2lkdGg6YXV0bztmb250LXNpemU6MXB4O3ZlcnRpY2FsLWFsaWduOnRvcDtib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7Ym9yZGVyOm5vbmU7cGFkZGluZzowcHg7bWFyZ2luOjA7YmFja2dyb3VuZDpub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O3RleHQtYWxpZ246bGVmdDtmbG9hdDpub25lO30gIycsIGVzY2FwZWRJRCwgJyB7dmVydGljYWwtYWxpZ246dG9wO3Bvc2l0aW9uOnN0YXRpYztwYWRkaW5nOjBweDttYXJnaW46MHB4O3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kOm5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnR9J1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAsICcjJywgZXNjYXBlZElELCAnX3NpZGViYXIgdGQsICMnLCBlc2NhcGVkSUQsICdfc2lkZWJhciBkaXYsICMnLCBlc2NhcGVkSUQsICdfc2lkZWJhciB0ZDpob3ZlciwgIycsIGVzY2FwZWRJRCwgJ19zaWRlYmFyIHRyOmhvdmVyLCAjJywgZXNjYXBlZElELCAnX3NpZGViYXIgdGFibGUge3Bvc2l0aW9uOnN0YXRpYzt0YWJsZS1sYXlvdXQ6IGF1dG87bGluZS1oZWlnaHQ6MXB4O3dpZHRoOmF1dG87Zm9udC1zaXplOjFweDt2ZXJ0aWNhbC1hbGlnbjp0b3A7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlOyBib3JkZXI6bm9uZTsgcGFkZGluZzowcHg7bWFyZ2luOjBweDtiYWNrZ3JvdW5kOm5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7ZmxvYXQ6bm9uZTt9ICMnLCBlc2NhcGVkSUQsICdfc2lkZWJhciB7dGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQ6bm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudH0nXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FySFRNTFthKytdPSc8c3R5bGU+ICMnK2VzY2FwZWRJRCsnIHRkLCAjJytlc2NhcGVkSUQrJyB0YWJsZSB7d2lkdGg6YXV0bztmb250LXNpemU6MXB4O3ZlcnRpY2FsLWFsaWduOnRvcDtib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7Ym9yZGVyOm5vbmU7IHBhZGRpbmc6MHB4OzttYXJnaW46MHB4O30gIycrbW9kdWxlSUQrJyB7dGV4dC1hbGlnbjpsZWZ0fTwvc3R5bGU+JztcclxuICAgICAgICAgICAgICAgIC8vYXJIVE1MW2ErK109JzxzdHlsZT4gIycrZXNjYXBlZElEKydfc2lkZWJhciB0ZCwgIycrZXNjYXBlZElEKydfc2lkZWJhciB0YWJsZSB7d2lkdGg6YXV0bztmb250LXNpemU6MXB4O3ZlcnRpY2FsLWFsaWduOnRvcDtib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7IGJvcmRlcjpub25lOyBwYWRkaW5nOjBweDttYXJnaW46MHB4O30gIycrbW9kdWxlSUQrJ19zaWRlYmFyIHt0ZXh0LWFsaWduOmxlZnR9PC9zdHlsZT4nO1xyXG4gICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBpZD1cIicgKyBtb2R1bGVJRCArICdfYm9va21hcmtzQ2FudmFzXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiJyArIHNoYXJlQ2FudmFzSGVpZ2h0ICsgJ1wiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHZhbGlnbj1cIm1pZGRsZVwiIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6JyArIHNoYXJlQ2FudmFzSGVpZ2h0ICsgJztkaXNwbGF5Om5vbmU7bGluZS1oZWlnaHQ6bm9ybWFsO2JvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XCI+JztcclxuICAgICAgICAgICAgICAgIHZhciBib29rbWFya3NJbm5lckNhbnZhc0hlaWdodCA9IHNoYXJlQ2FudmFzSGVpZ2h0IC0gNDtcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbHMuaXNQb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb2ttYXJrc0lubmVyQ2FudmFzSGVpZ2h0IC09IDI3O1xyXG4gICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgaGVpZ2h0PVwiMjdcIiBzdHlsZT1cImhlaWdodDoyN3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiM2QTlEQkNcIj48dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIHdpZHRoPVwiMTAwJVwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPjx0cj48dGQgc3R5bGU9XCJmb250LWZhbWlseTpUYWhvbWE7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojRkZGRkZGO3BhZGRpbmctbGVmdDo2cHg7dmVydGljYWwtYWxpZ246bWlkZGxlXCI+JyArIHRoaXMuVEVYVChsYW5nLCAnc2hhcmVfd2l0aF95b3VyX2ZyaWVuZHMnKSArICc8L3RkPjx0ZCBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7XCI+PGRpdiBzdHlsZT1cInBhZGRpbmc6MTBweDt0ZXh0LWFsaWduOnJpZ2h0O1wiID48aW1nIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXI7XCIgb25jbGljaz1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLnNoYXJlLmNsb3NlU2hhcmUoXFwnJyArIG1vZHVsZUlEICsgJ1xcJylcIiBzcmM9XCInICsgYmFzZSArICdTaGFyZS9DbG9zZUljb24yLmdpZlwiIGFsdD1cIlwiIC8+PC9kaXY+PC90ZD48L3RyPjwvdGFibGU+PC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRyPjx0ZCBhbGlnbj1cImNlbnRlclwiIHZhbGlnbj1cIm1pZGRsZVwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlO2hlaWdodDonICsgYm9va21hcmtzSW5uZXJDYW52YXNIZWlnaHQgKyAncHhcIj48Y2VudGVyPjxpbWcgaWQ9XCInICsgbW9kdWxlSUQgKyAnX3Byb2dyZXNzXCIgc3JjPVwiJyArIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL3Byb2dyZXNzX2FuaS5naWYnKSArICdcIiBhbHQ9XCJcIiAvPjxkaXYgaWQ9XCInICsgbW9kdWxlSUQgKyAnX2Jvb2ttYXJrc1dpZGdldFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+PC9kaXY+PC9jZW50ZXI+PC90ZD48L3RyPjwvdGFibGU+JztcclxuXHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiICB3aWR0aD1cIicgKyBzaGFyZUNhbnZhc1dpZHRoICsgJ1wiIGhlaWdodD1cIicgKyBzaGFyZUNhbnZhc0hlaWdodCArICdcIiBpZD1cIicgKyBtb2R1bGVJRCArICdfZW1haWxDYW52YXNcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiB2YWxpZ249XCJ0b3BcIiBzdHlsZT1cIndpZHRoOicgKyBzaGFyZUNhbnZhc1dpZHRoICsgJ3B4O2hlaWdodDonICsgc2hhcmVDYW52YXNIZWlnaHQgKyAncHg7ZGlzcGxheTpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDtib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1wiPic7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxzLmlzUG9wdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHI+PHRkIGhlaWdodD1cIjI3XCIgc3R5bGU9XCJoZWlnaHQ6MjdweDsgYmFja2dyb3VuZC1jb2xvcjojNkE5REJDXCI+PHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiB3aWR0aD1cIjEwMCVcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj48dHI+PHRkIHN0eWxlPVwiZm9udC1mYW1pbHk6VGFob21hO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6I0ZGRkZGRjtwYWRkaW5nLWxlZnQ6NnB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPicgKyB0aGlzLlRFWFQobGFuZywgJ3NoYXJlX3dpdGhfeW91cl9mcmllbmRzJykgKyAnPC90ZD48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O1wiPjxkaXYgc3R5bGU9XCJwYWRkaW5nOjEwcHg7dGV4dC1hbGlnbjpyaWdodDtcIiA+PGltZyBzdHlsZT1cImN1cnNvcjpwb2ludGVyO1wiIG9uY2xpY2s9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZS5sbmtDbG9zZV9PbkNsaWNrKFxcJycgKyBtb2R1bGVJRCArICdcXCcpXCIgc3JjPVwiJyArIGJhc2UgKyAnU2hhcmUvQ2xvc2VJY29uMi5naWZcIiBhbHQ9XCJcIiAvPjwvZGl2PjwvdGQ+PC90cj48L3RhYmxlPjwvdGQ+PC90cj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwLmVtYWlsUHJvdmlkZXJzID09IG51bGwgfHwgcC5lbWFpbFByb3ZpZGVycy5zcGxpdCgnICcpLmpvaW4oJycpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRyPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZTtoZWlnaHQ6NDhweDsgYmFja2dyb3VuZC1jb2xvcjojRjdGN0Y3O3RleHQtYWxpZ246Y2VudGVyXCI+PHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiBhdXRvO21hcmdpbi1yaWdodDogYXV0bztcIj48dHI+JztcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cGFkZGluZy1yaWdodDo3cHg7XCI+PHNwYW4gc3R5bGU9XCInICsgdGV4dFN0eWxlICsgJztmb250LXNpemU6MTJweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiM3Nzc3NzdcIj4nICsgdGhpcy5URVhUKGxhbmcsICdpbXBvcnRfY29udGFjdHNfYW5kX2VtYWlsX3RvX2ZyaWVuZHMnKSArICc8L3NwYW4+PC90ZD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPjxkaXYgaWQ9XCInICsgbW9kdWxlSUQgKyAnX2VtYWlsQ29ubmVjdFwiPjwvZGl2PjwvdGQ+PC90cj48L3RhYmxlPjwvdGQ+PC90cj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHI+PHRkIHN0eWxlPVwiaGVpZ2h0OjIwcHhcIj48dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIHdpZHRoPVwiMTAwJVwiIHN0eWxlPVwid2lkdGg6MTAwJVwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiPjx0cj48dGQgc3R5bGU9XCJ3aWR0aDoyNzBweDtib3JkZXItdG9wOjFweCBzb2xpZCAjQ0NDQ0NDXCI+JiMxNjA7PC90ZD48dGQgc3R5bGU9XCJ3aWR0aDogMThweFwiPjxpbWcgc3JjPVwiJyArIGJhc2UgKyAnU2hhcmUvcG9pbnRlci5wbmdcIiBhbHQ9XCJcIiAvPjwvdGQ+PHRkIHN0eWxlPVwiYm9yZGVyLXRvcDoxcHggc29saWQgI0NDQ0NDQ1wiPiYjMTYwOzwvdGQ+PC90cj48L3RhYmxlPjwvdGQ+PC90cj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgdmFsaWduPVwibWlkZGxlXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cGFkZGluZy1sZWZ0OiA0MHB4O1wiPic7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHdhdGVyTWFya1RleHQgPSB0aGlzLlRFWFQobGFuZywgJ3NlcGFyYXRlX211bHRpcGxlX2FkZHJlc3Nlc193aXRoX2NvbW1hcycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgdmFsaWduPVwidG9wXCIgc3R5bGU9XCJsaW5lLWhlaWdodDpub3JtYWxcIj4nXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRTdHlsZSA9ICdmbG9hdDpub25lO2JvcmRlcjoxcHggc29saWQgI0Q4RDhEODsgd2lkdGg6JyArIChzaGFyZUNhbnZhc1dpZHRoIC0gMjA1KSArICdweDtoZWlnaHQ6MjFweDtjb2xvcjojNzc3Nzc3O2ZvbnQtc2l6ZToxMXB4O2ZvbnQtZmFtaWx5OmFyaWFsO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6IDAgMCAwIDVweDsnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0V3JhcHBlclN0eWxlID0gJ3BhZGRpbmctYm90dG9tOjZweCc7XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHIgdmFsaWduPVwidG9wXCI+PHRkIHdpZHRoPVwiODVcIiBzdHlsZT1cIicgKyB0ZXh0U3R5bGUgKyAncGFkZGluZy10b3A6NXB4O3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nLXJpZ2h0OjVweDtmb250LXdlaWdodDpib2xkXCI+JyArIHRoaXMuVEVYVChsYW5nLCAndG8nKSArICc8L3RkPjx0ZD48ZGl2IHN0eWxlPVwiJyArIGlucHV0V3JhcHBlclN0eWxlICsgJ1wiPjxpbnB1dCBhcmlhLWxhYmVsPVwiJyArIHRoaXMuVEVYVChsYW5nLCAndG8nKSArICdcIiB0YWJpbmRleD1cIjBcIiBpZD1cIicgKyBtb2R1bGVJRCArICdfdGJGcmllbmRzRW1haWxcIiB0eXBlPVwidGV4dFwiIHN0eWxlPVwiJyArIGlucHV0U3R5bGUgKyAnXCIgb25rZXl1cD1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLnNoYXJlLnNob3dDb250YWN0c0Ryb3Bkb3duKFxcJycgKyBtb2R1bGVJRCArICdcXCcsZXZlbnQpXCIgb25ibHVyPVwiaWYgKHRoaXMudmFsdWU9PVxcJ1xcJykge3RoaXMud2F0ZXJtYXJrQ2xlYXJlZD1mYWxzZTsgdGhpcy52YWx1ZT1cXCcnICsgd2F0ZXJNYXJrVGV4dC5yZXBsYWNlKC8nL2csICdcXFxcXFwnJykgKyAnXFwnfVwiIG9uZm9jdXM9XCJpZighdGhpcy53YXRlcm1hcmtDbGVhcmVkKSB7dGhpcy53YXRlcm1hcmtDbGVhcmVkPXRydWU7IHRoaXMudmFsdWU9XFwnXFwnO31cIiB2YWx1ZT1cIicgKyB3YXRlck1hcmtUZXh0ICsgJ1wiIC8+PC9kaXY+PC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHIgdmFsaWduPVwidG9wXCI+PHRkIHdpZHRoPVwiODVcIiBzdHlsZT1cIicgKyB0ZXh0U3R5bGUgKyAncGFkZGluZy10b3A6NXB4O3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nLXJpZ2h0OjVweDtmb250LXdlaWdodDpib2xkXCI+JyArIHRoaXMuVEVYVChsYW5nLCAnZnJvbScpICsgJzwvdGQ+PHRkPjxkaXYgc3R5bGU9XCInICsgaW5wdXRXcmFwcGVyU3R5bGUgKyAnXCI+PGlucHV0IGFyaWEtbGFiZWw9XCInICsgdGhpcy5URVhUKGxhbmcsICdmcm9tJykgKyAnXCIgdGFiaW5kZXg9XCIwXCIgaWQ9XCInICsgbW9kdWxlSUQgKyAnX3RiWW91ckVtYWlsXCIgdHlwZT1cInRleHRcIiBzdHlsZT1cIicgKyBpbnB1dFN0eWxlICsgJ1wiIC8+PC9kaXY+PC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHIgdmFsaWduPVwidG9wXCI+PHRkIHdpZHRoPVwiODVcIiBzdHlsZT1cIicgKyB0ZXh0U3R5bGUgKyAncGFkZGluZy10b3A6NXB4O3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nLXJpZ2h0OjVweDtmb250LXdlaWdodDpib2xkXCI+JyArIHRoaXMuVEVYVChsYW5nLCAnbWVzc2FnZScpICsgJzwvdGQ+PHRkPjxkaXYgc3R5bGU9XCInICsgaW5wdXRXcmFwcGVyU3R5bGUgKyAnXCI+PHRleHRhcmVhIGFyaWEtbGFiZWw9XCInICsgdGhpcy5URVhUKGxhbmcsICdtZXNzYWdlJykgKyAnXCIgdGFiaW5kZXg9XCIwXCIgaWQ9XCInICsgbW9kdWxlSUQgKyAnX3RiTWVzc2FnZVwiIG9ua2V5dXA9XCJ2YXIgdGI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFwnJyArIG1vZHVsZUlEICsgJ19jb21tZW50XFwnKTtpZiAodGIhPW51bGwpIHRiLnZhbHVlPXRoaXMudmFsdWU7XCIgb25mb2N1cz1cInZhciB0Yj10aGlzO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0Yi5zZWxlY3QoKTsgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc01vYmlsZSAmIzM4OyYjMzg7IGRvY3VtZW50LmV4ZWNDb21tYW5kKSBkb2N1bWVudC5leGVjQ29tbWFuZChcXCdzZWxlY3RBbGxcXCcpO30sMTAwKVwiIHN0eWxlPVwiJyArIGlucHV0U3R5bGUgKyAnaGVpZ2h0OjM2cHg7cmVzaXplOiBub25lO292ZXJmbG93OmF1dG87bWFyZ2luOjBweDtcIj48L3RleHRhcmVhPjwvZGl2PjwvdGQ+PC90cj4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ciB2YWxpZ249XCJ0b3BcIj48dGQ+JiMxNjA7PC90ZD48dGQgc3R5bGU9XCInICsgdGV4dFN0eWxlICsgJ1wiPjxkaXYgc3R5bGU9XCJoZWlnaHQ6NTBweFwiPicgKyB0aGlzLmdldEl0ZW1IVE1MKG1vZHVsZUlELCByZXNvbHZlciwgc2hhcmVDYW52YXNXaWR0aCAtIDI2MCwgNTAsIDIwLCAyMCkgKyAnPC9kaXY+PC90ZD48L3RyPjwvdGFibGU+JztcclxuXHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgYWxpZ249XCJyaWdodFwiIGhlaWdodD1cIjM3XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O3ZlcnRpY2FsLWFsaWduOmJvdHRvbTsgdGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLWJvdHRvbTo4cHg7cGFkZGluZy1yaWdodDoxMHB4O1wiPjxkaXYgYWxpZ249XCJyaWdodFwiIHN0eWxlPVwiZmxvYXQ6cmlnaHQ7d2lkdGg6NzVweDt0ZXh0LWFsaWduOnJpZ2h0XCIgb25jbGljaz1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLnNoYXJlLnNlbmRFbWFpbChcXCcnICsgbW9kdWxlSUQgKyAnXFwnKVwiIG9ua2V5ZG93bj1cImlmKChldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlKSA9PSAxMykgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuc2hhcmUuc2VuZEVtYWlsKFxcJycgKyBtb2R1bGVJRCArICdcXCcpXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPicgKyB0aGlzLmdldFNlbmRCdXR0b25IVE1MKHRoaXMuVEVYVChsYW5nLCAnc2VuZCcpKSArICc8L2Rpdj48L3RkPjwvdHI+PC90YWJsZT4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgaWQ9XCInICsgbW9kdWxlSUQgKyAnX3dvcmtpbmdDYW52YXNcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgdmFsaWduPVwidG9wXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7IHdpZHRoOiAnICsgc2hhcmVDYW52YXNXaWR0aCArICdweDsgaGVpZ2h0OiAnICsgc2hhcmVDYW52YXNIZWlnaHQgKyAncHg7bGluZS1oZWlnaHQ6bm9ybWFsXCI+JztcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbHMuaXNQb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgaGVpZ2h0PVwiMjhcIiBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0XCI+PGRpdiBzdHlsZT1cInBhZGRpbmc6MTBweDt0ZXh0LWFsaWduOnJpZ2h0O1wiPjxpbWcgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtcIiBvbmNsaWNrPVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuc2hhcmUub25TaGFyZUNvbXBsZXRlKGdpZ3lhLnNvY2lhbGl6ZS5wbHVnaW5zLnNoYXJlLm1vZHVsZXNbXFwnJyArIG1vZHVsZUlEICsgJ1xcJ10pXCIgc3JjPVwiJyArIGJhc2UgKyAnU2hhcmUvQ2xvc2VJY29uX2dyYXkucG5nXCIgYWx0PVwiXCIgLz48L2Rpdj48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ciB2YWxpZ249XCJ0b3BcIj48dGQ+PGNlbnRlciBpZD1cIicgKyBtb2R1bGVJRCArICdfd29ya2luZ1RleHRDb250YWluZXJcIj48ZGl2IGlkPVwiJyArIG1vZHVsZUlEICsgJ193b3JraW5nVGV4dFwiICBzdHlsZT1cIicgKyBHUy5nZXRTdHlsZVN0cmluZyhvV29ya2luZ1RleHRTdHlsZSkgKyAndGV4dC1hbGlnbjpjZW50ZXI7Zm9udC13ZWlnaHQ6Ym9sZDtsaW5lLWhlaWdodDoxLjU7cGFkZGluZy10b3A6ODBweFwiPjwvZGl2PjwvY2VudGVyPjwvdGQ+PC90cj48L3RhYmxlPic7XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIGlkPVwiJyArIG1vZHVsZUlEICsgJ19jb21tZW50Q2FudmFzXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHZhbGlnbj1cInRvcFwiIHN0eWxlPVwid2lkdGg6ICcgKyBzaGFyZUNhbnZhc1dpZHRoICsgJ3B4OyBoZWlnaHQ6ICcgKyBzaGFyZUNhbnZhc0hlaWdodCArICdweDtsaW5lLWhlaWdodDpub3JtYWxcIj4nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNoYXJlSW5uZXJDYW52YXNIZWlnaHQgPSBzaGFyZUNhbnZhc0hlaWdodCAtIDQ3O1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVybmFscy5pc1BvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVJbm5lckNhbnZhc0hlaWdodCAtPSAyNztcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHI+PHRkIGhlaWdodD1cIjI3XCIgc3R5bGU9XCJoZWlnaHQ6MjdweDsgYmFja2dyb3VuZC1jb2xvcjojNkU4NEI1O2JvcmRlcjoxcHggc29saWQgIzNBNUE5N1wiPjx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+PHRyPjx0ZCBzdHlsZT1cImZvbnQtZmFtaWx5OlRhaG9tYTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiNGRkZGRkY7cGFkZGluZy1sZWZ0OjZweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcIj4nICsgdGhpcy5URVhUKGxhbmcsICdzaGFyZV93aXRoX3lvdXJfZnJpZW5kcycpICsgJzwvdGQ+PHRkIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtcIj48ZGl2IHN0eWxlPVwicGFkZGluZzoxMHB4O3RleHQtYWxpZ246cmlnaHQ7XCIgPjxpbWcgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtcIiBvbmNsaWNrPVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuc2hhcmUuY2xvc2VTaGFyZShcXCcnICsgbW9kdWxlSUQgKyAnXFwnKVwiIHNyYz1cIicgKyBiYXNlICsgJ1NoYXJlL0Nsb3NlSWNvbi5wbmdcIiBhbHQ9XCJcIiAvPjwvZGl2PjwvdGQ+PC90cj48L3RhYmxlPjwvdGQ+PC90cj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHdhdGVyTWFya1RleHQgPSAnYWFhJztcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgY2xhc3M9XCJnaWctc2hhcmVVSS1hY3Rpb25DYW52YXNcIiBzdHlsZT1cImhlaWdodDonICsgc2hhcmVJbm5lckNhbnZhc0hlaWdodCArICdweDtib3JkZXItbGVmdDogMXB4IHNvbGlkICM1NTU1NTU7Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzU1NTU1NVwiPjx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgd2lkdGg9XCIxMDAlXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgdmFsaWduPVwidG9wXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCI+JztcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgc3R5bGU9XCJwYWRkaW5nLXRvcDozMHB4O3BhZGRpbmctbGVmdDo0MnB4O1wiPjx0ZXh0YXJlYSB0YWJpbmRleD1cIjBcIiBpZD1cIicgKyBtb2R1bGVJRCArICdfY29tbWVudFwiICBvbmtleXVwPVwidmFyIHRiPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcJycgKyBtb2R1bGVJRCArICdfdGJNZXNzYWdlXFwnKTtpZiAodGIhPW51bGwpIHRiLnZhbHVlPXRoaXMudmFsdWU7XCIgYm9yZGVyPVwiMFwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OjVweDsgcmVzaXplOiBub25lO2ZvbnQtZmFtaWx5OmFyaWFsOyBmb250LXNpemU6MTJweDsgY29sb3I6IzU1NTU1NTsgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztvdmVyZmxvdzphdXRvOyB3aWR0aDonICsgKHNoYXJlQ2FudmFzV2lkdGggLSAxMjApICsgJ3B4O2hlaWdodDozNnB4XCI+PC90ZXh0YXJlYT48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgc3R5bGU9XCJwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1sZWZ0OjQycHg7XCI+JyArIHRoaXMuZ2V0SXRlbUhUTUwobW9kdWxlSUQsIHJlc29sdmVyLCBzaGFyZUNhbnZhc1dpZHRoIC0gMjEwKSArICc8L3RkPjwvdHI+PC90YWJsZT48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjpib3R0b20gIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3OyBib3JkZXItdG9wOjFweCBzb2xpZCAjQ0NDQ0NDO2JvcmRlci1sZWZ0OiAxcHggc29saWQgIzU1NTU1NTtib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNTU1NTU1O2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTU1NTU1OyBwYWRkaW5nLWJvdHRvbTo4cHg7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDo0MnB4O1wiPic7XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIHdpZHRoPVwiMTAwJVwiIHN0eWxlPVwid2lkdGg6MTAwJTt0ZXh0LWFsaWduOnJpZ2h0XCIgaGVpZ2h0PVwiMjNcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj48dHI+JztcclxuICAgICAgICAgICAgICAgIGlmIChwWydhdXRvU2hhcmVBY3Rpb25JRCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbkRpc3BsYXkgPSBwWydhdXRvU2hhcmVBY3Rpb25EaXNwbGF5J107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbkRpc3BsYXkgPT0gbnVsbCkgYWN0aW9uRGlzcGxheSA9ICd0aGlzJztcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25EaXNwbGF5ID0gYWN0aW9uRGlzcGxheS5zdWJzdHJpbmcoMCwgMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkRpc3BsYXkgPSBhY3Rpb25EaXNwbGF5LnJlcGxhY2UoJzwnLCAnJiM2MDsnKS5yZXBsYWNlKCc+JywgJyYjNjI7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUocFsnc2hvd05ldmVyU2hhcmUnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtYWxpZ246bGVmdFwiPjxzcGFuIG9uY2xpY2s9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZS5uZXZlclNoYXJlVGhpc19PbkNsaWNrKFxcJycgKyBtb2R1bGVJRCArICdcXCcpXCIgc3R5bGU9XCInICsgbGlua1N0eWxlICsgJ2NvbG9yOiM1NzU3NTc7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVwiPicgKyB0aGlzLlRFWFQobGFuZywgJ25ldmVyX3NoYXJlX3RoaXMnLCAnJW5hbWUnLCBhY3Rpb25EaXNwbGF5KSArICc8L3NwYW4+PC90ZD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocFsnc2hvd0Fsd2F5c1NoYXJlJ10gPT0gJ2NoZWNrZWQnIHx8IHBbJ3Nob3dBbHdheXNTaGFyZSddID09ICd1bmNoZWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZCBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjMwcHg7dmVydGljYWwtYWxpZ246bWlkZGxlXCI+PHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyXCIgb25jbGljaz1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLnNoYXJlLmFsd2F5c1NoYXJlVGhpc19PbkNsaWNrKFxcJycgKyBtb2R1bGVJRCArICdcXCcpXCI+PHRyPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPjxpbWcgaWQ9XCInICsgbW9kdWxlSUQgKyAnX2NiQWx3YXlzU2hhcmVcIiBzcmM9XCInICsgYmFzZSArICdTaGFyZS9jaGVja2JveC5naWZcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6NXB4XCIgYWx0PVwiXCIgLz48L3RkPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPjxzcGFuIHN0eWxlPVwiJyArIGxpbmtTdHlsZSArICdjb2xvcjojNTc1NzU3O1wiPicgKyB0aGlzLlRFWFQobGFuZywgJ2Fsd2F5c19zaGFyZV9uYW1lJywgJyVuYW1lJywgYWN0aW9uRGlzcGxheSkgKyAnPC9zcGFuPjwvdGQ+PC90cj48L3RhYmxlPjwvdGQ+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQ+JiMxNjA7PC90ZD48dGQgd2lkdGg9XCI3NVwiIGFsaWduPVwicmlnaHRcIiBzdHlsZT1cIndpZHRoOjc1cHg7dGV4dC1hbGlnbjpyaWdodFwiIG9uY2xpY2s9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZS5idG5TaGFyZV9PbkNsaWNrKFxcJycgKyBtb2R1bGVJRCArICdcXCcpXCIgb25rZXlkb3duPVwiaWYoKGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUpID09IDEzKSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZS5idG5TaGFyZV9PbkNsaWNrKFxcJycgKyBtb2R1bGVJRCArICdcXCcpXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPicgKyB0aGlzLmdldEJsdWVCdXR0b25IVE1MKHRoaXMuVEVYVChsYW5nLCAncHVibGlzaCcpKSArICc8L3RkPic7XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L3RyPjwvdGFibGU+PC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L3RhYmxlPjwvZGl2Pic7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhclNiSFRNTCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNpZGViYXJGaWxsU3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjojNTU1NTU1Oyc7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJTYkhUTUxbYisrXSA9ICc8dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIHdpZHRoPVwiNTNcIiBoZWlnaHQ9XCIyNjZcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiB2YWxpZ249XCJ0b3BcIiBzdHlsZT1cImVtcHR5LWNlbGxzOnNob3c7d2lkdGg6IDUzcHg7IGhlaWdodDogMjY2cHg7bGluZS1oZWlnaHQ6bm9ybWFsO1wiPic7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvL2FyU2JIVE1MW2ErK109JzxzdHlsZSB0eXBlPVwiXCI+ICMnK21vZHVsZUlELnJlcGxhY2UoL1suXS9nLCdcXFxcLicpKydfc2lkZWJhciB0ZCB7Ym9yZGVyOm5vbmU7IHBhZGRpbmc6MHB4O30gIycrbW9kdWxlSUQucmVwbGFjZSgvWy5dL2csJ1xcXFwuJykrJ19zaWRlYmFyIHt0ZXh0LWFsaWduOmxlZnR9IDwvc3R5bGU+JztcclxuXHJcbiAgICAgICAgICAgICAgICBhclNiSFRNTFtiKytdID0gJzx0cj48dGQgaGVpZ2h0PVwiNlwiIHdpZHRoPVwiNlwiIHN0eWxlPVwid2lkdGg6NnB4O1wiPjxpbWcgc3JjPVwiJyArIGJhc2UgKyAnU2hhcmUvTGVmdFNpZGVfVG9wLnBuZ1wiIGFsdD1cIlwiIC8+PC90ZD48dGQgaGVpZ2h0PVwiNlwiIHN0eWxlPVwibGluZS1oZWlnaHQ6MXB4O2hlaWdodDo2cHg7JyArIHNpZGViYXJGaWxsU3R5bGUgKyAnXCI+JiMxNjA7PC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICBhclNiSFRNTFtiKytdID0gJzx0cj48dGQgc3R5bGU9XCInICsgc2lkZWJhckZpbGxTdHlsZSArICdcIj48L3RkPjx0ZCBzdHlsZT1cIicgKyBzaWRlYmFyRmlsbFN0eWxlICsgJ1wiPjx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgdmFsaWduPVwidG9wXCIgc3R5bGU9XCInICsgc2lkZWJhckZpbGxTdHlsZSArICdcIj4nO1xyXG4gICAgICAgICAgICAgICAgYXJTYkhUTUxbYisrXSA9ICc8dHIgaGVpZ2h0PVwiMjE0XCI+PHRkIHZhbGlnbj1cInRvcFwiIHN0eWxlPVwicGFkZGluZy10b3A6NHB4O1wiPidcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYXJQcm92aWRlcnMgPSBpbnRlcm5hbHMuYXJQcm92aWRlcnM7XHJcbiAgICAgICAgICAgICAgICBhclNiSFRNTFtiKytdID0gJzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgdmFsaWduPVwidG9wXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6MXB4O1wiPic7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gYXJQcm92aWRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gcHJvdmlkZXIuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHBbJ3Nob3dUb29sdGlwcyddKSkgdGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc29jaWFsT25DbGljayA9ICdnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZS5idG5Qcm92aWRlcl9PbkNsaWNrKFxcJycgKyBtb2R1bGVJRCArICdcXCcsICcgKyBwcm92aWRlci5JRCArICcsZXZlbnQpJztcclxuICAgICAgICAgICAgICAgICAgICBhclNiSFRNTFtiKytdID0gJzx0cj48dGQgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCInICsgcHJvdmlkZXIuZGlzcGxheU5hbWUgKyAnXCIgaWQ9XCInICsgbW9kdWxlSUQgKyAnX3NvY2lhbEJ0bl8nICsgcHJvdmlkZXIuSUQgKyAnXCIgb25jbGljaz1cIicgKyBzb2NpYWxPbkNsaWNrICsgJ1wiIG9ua2V5ZG93bj1cImlmKChldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlKSA9PSAxMykgJyArIHNvY2lhbE9uQ2xpY2sgKyAnXCIgdmFsaWduPVwibWlkZGxlXCIgc3R5bGU9XCJoZWlnaHQ6MjVweDtjdXJzb3I6cG9pbnRlcjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cGFkZGluZy1ib3R0b206MTBweFwiPjx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgaGVpZ2h0PVwiMjVcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiB2YWxpZ249XCJtaWRkbGVcIiBzdHlsZT1cImhlaWdodDoyNXB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJTYkhUTUxbYisrXSA9ICc8dHI+PHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlICFpbXBvcnRhbnRcIj48aW1nIHNyYz1cIicgKyBiYXNlICsgJ1NoYXJlL25vdENoZWNrZWQucG5nXCIgaWQ9XCInICsgbW9kdWxlSUQgKyAnX2NiJyArIHByb3ZpZGVyLklEICsgJ1wiIGFsdD1cIlwiIC8+PC90ZD48dGQgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6M3B4O2hlaWdodDoyNXB4O3dpZHRoOjI1cHg7XCI+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiB0aXRsZT1cIicgKyB0aXRsZSArICdcIiBhbHQ9XCInICsgdGl0bGUgKyAnXCIgaWQ9XCInICsgbW9kdWxlSUQgKyAnX2J0bicgKyBwcm92aWRlci5JRCArICdcIiBzcmM9XCInICsgYmFzZSArICdzaGFyZS8nICsgcHJvdmlkZXIubmFtZSArICdfMjUucG5nXCIgLz48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgICAgICBhclNiSFRNTFtiKytdID0gJzwvdGFibGU+PC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhclNiSFRNTFtiKytdID0gJzwvdGFibGU+PC90ZD48L3RyPic7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBiYWNrVGV4dCA9IHRoaXMuVEVYVChsYW5nLCAnYmFjaycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFsdEJhY2tUZXh0ID0gYmFja1RleHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KGJhY2tUZXh0LCBvTGlua1N0eWxlKS53ID4gMzApIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrVGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBiYWNrT25DbGljayA9ICdnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZS5sbmtCYWNrX09uQ2xpY2soXFwnJyArIG1vZHVsZUlEICsgJ1xcJyknO1xyXG4gICAgICAgICAgICAgICAgYXJTYkhUTUxbYisrXSA9ICc8dHI+PHRkIHN0eWxlPVwiaGVpZ2h0OjIwcHg7JyArIHNpZGViYXJGaWxsU3R5bGUgKyAnXCI+PHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiB2YWxpZ249XCJib3R0b21cIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj4nO1xyXG4gICAgICAgICAgICAgICAgYXJTYkhUTUxbYisrXSA9ICc8dHIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGlkPVwiJyArIG1vZHVsZUlEICsgJ19sbmtCYWNrXCIgdmFsaWduPVwibWlkZGxlXCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtkaXNwbGF5Om5vbmU7dmVydGljYWwtYWxpZ246Ym90dG9tXCIgb25jbGljaz1cIicgKyBiYWNrT25DbGljayArICdcIiBvbmtleWRvd249XCJpZigoZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSkgPT0gMTMpICcgKyBiYWNrT25DbGljayArICdcIj48dGQgaGVpZ2h0PVwiMjBcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOmJvdHRvbVwiPjxpbWcgdGl0bGU9XCInICsgYWx0QmFja1RleHQgKyAnXCIgYWx0PVwiJyArIGFsdEJhY2tUZXh0ICsgJ1wiIHNyYz1cIicgKyBiYXNlICsgJ1NoYXJlL2JhY2tJY29uLnBuZ1wiIC8+PC90ZD48dGQgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6MnB4OycgKyBsaW5rU3R5bGUgKyAnO2ZvbnQtd2VpZ2h0OmJvbGQ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTt2ZXJ0aWNhbC1hbGlnbjpib3R0b21cIj4nICsgYmFja1RleHQgKyAnPC90ZD48L3RyPidcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZW1haWxUZXh0ID0gdGhpcy5URVhUKGxhbmcsICdlbWFpbCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vcmVUZXh0ID0gdGhpcy5URVhUKGxhbmcsICdtb3JlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWx0RW1haWxUZXh0ID0gZW1haWxUZXh0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGFsdE1vcmVUZXh0ID0gbW9yZVRleHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KGVtYWlsVGV4dCwgb0xpbmtTdHlsZSkudyA+IDMwIHx8IGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dChtb3JlVGV4dCwgb0xpbmtTdHlsZSkudyA+IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9yZVRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbFRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRGYWxzZShwWydzaG93TW9yZUJ1dHRvbiddKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb3JlSWNvbklEID0gJ3NoYXJlX01vcmVJY29uJztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9yZU9uQ2xpY2sgPSAnZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuc2hhcmUuc2hvd0Jvb2ttYXJrcyhcXCcnICsgbW9kdWxlSUQgKyAnXFwnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJTYkhUTUxbYisrXSA9ICc8dHIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGlkPVwiJyArIG1vZHVsZUlEICsgJ19sbmtNb3JlXCIgdmFsaWduPVwibWlkZGxlXCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlclwiIG9uY2xpY2s9XCInICsgbW9yZU9uQ2xpY2sgKyAnXCIgb25rZXlkb3duPVwiaWYoKGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUpID09IDEzKSAnICsgbW9yZU9uQ2xpY2sgKyAnXCI+PHRkIGhlaWdodD1cIjIwXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjpib3R0b21cIj48aW1nIHRpdGxlPVwiJyArIGFsdE1vcmVUZXh0ICsgJ1wiIGFsdD1cIicgKyBhbHRNb3JlVGV4dCArICdcIiBzcmM9XCInICsgYmFzZSArICdCb29rbWFyay8nICsgbW9yZUljb25JRCArICcucG5nXCIgb25lcnJvcj1cInRoaXMuc3JjPVxcJycgKyBiYXNlICsgJ0Jvb2ttYXJrL2RlZmF1bHRCTVNJY29uLnBuZ1xcJ1wiIC8+PC90ZD48dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjpib3R0b207cGFkZGluZy1sZWZ0OjJweDsnICsgbGlua1N0eWxlICsgJ1wiPicgKyBtb3JlVGV4dCArICc8L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUocFsnc2hvd0VtYWlsQnV0dG9uJ10pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJTYkhUTUxbYisrXSA9ICc8dHIgaWQ9XCInICsgbW9kdWxlSUQgKyAnX2xua0VtYWlsXCIgdmFsaWduPVwibWlkZGxlXCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlclwiIG9uY2xpY2s9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZS5zaG93RW1haWwoXFwnJyArIG1vZHVsZUlEICsgJ1xcJylcIj48dGQgaGVpZ2h0PVwiMjBcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOmJvdHRvbVwiPjxpbWcgdGl0bGU9XCInICsgYWx0RW1haWxUZXh0ICsgJ1wiIGFsdD1cIicgKyBhbHRFbWFpbFRleHQgKyAnXCIgc3JjPVwiJyArIGJhc2UgKyAnU2hhcmUvRW1haWxJY29uLnBuZ1wiIC8+PC90ZD48dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjpib3R0b207cGFkZGluZy1sZWZ0OjJweDsnICsgbGlua1N0eWxlICsgJ1wiPicgKyBlbWFpbFRleHQgKyAnPC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhclNiSFRNTFtiKytdID0gJzwvdGFibGU+PC90ZD48L3RyPjwvdGFibGU+PC90ZD48L3RyPjx0cj48dGQgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiNlwiIHN0eWxlPVwid2lkdGg6NnB4O2hlaWdodDo2cHg7XCI+PGRpdiBzdHlsZT1cImhlaWdodDo2cHhcIj48aW1nIHNyYz1cIicgKyBiYXNlICsgJ1NoYXJlL0xlZnRTaWRlX0JvdHRvbS5wbmdcIiBhbHQ9XCJcIiAvPjwvZGl2PjwvdGQ+PHRkIHN0eWxlPVwibGluZS1oZWlnaHQ6MXB4OycgKyBzaWRlYmFyRmlsbFN0eWxlICsgJ1wiPiYjMTYwOzwvdGQ+PC90cj4nO1xyXG4gICAgICAgICAgICAgICAgYXJTYkhUTUxbYisrXSA9ICc8L3RhYmxlPic7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnRlcm5hbHMuaXNQb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiB3aWR0aD1cIicgKyB3ICsgJ1wiIGhlaWdodD1cIicgKyBoICsgJ1wiPjx0cj48dGQgd2lkdGg9XCI1M1wiIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlXCI+PGRpdiBpZD1cIicgKyBjb250YWluZXJJRCArICdfc2lkZWJhclwiPjwvZGl2PjwvdGQ+PHRkIHdpZHRoPVwiJyArIHNoYXJlQ2FudmFzV2lkdGggKyAnXCIgaGVpZ2h0PVwiJyArIHNoYXJlQ2FudmFzSGVpZ2h0ICsgJ1wiPicgKyBhckhUTUwuam9pbignJykgKyAnPC90ZD48L3RyPjwvdGFibGU+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9wcm9tcHQoJ2EnLCBhckhUTUwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBhckhUTUwuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJycgKyB3ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnJyArIGggKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB5b3VyRW1haWwgPSB0aGlzLmdldE15RW1haWwoKTtcclxuICAgICAgICAgICAgICAgIHZhciB0YkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSUQgKyAnX3RiWW91ckVtYWlsJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGJFbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5zZXRQbGFjZWhvbGRlcih0YkVtYWlsLCB0aGlzLlRFWFQobGFuZywgJ3lvdXJfZW1haWxfYWRkcmVzcycpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeW91ckVtYWlsICYmIHlvdXJFbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YkVtYWlsLnZhbHVlID0geW91ckVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YkVtYWlsLnBsYWNlaG9sZGVyQ2xlYXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kdWxlc1ttb2R1bGVJRF0ub3JpZ2luYWxQLmNvbnRhaW5lcklEKTtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZ2lnLXNoYXJlXCI7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRpdlNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2R1bGVJRCArICdfc2lkZWJhcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkaXZTaWRlYmFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2U2lkZWJhciA9IGdpZ3lhLnV0aWxzLkRPTS5jcmVhdGVUb3BMZXZlbERpdihtb2R1bGVJRCArICdfc2lkZWJhcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdlNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdlNpZGViYXIuc3R5bGUud2lkdGggPSAnNTNweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2U2lkZWJhci5jbGFzc05hbWUgPSAnZ2lnLXNoYXJlIGdpZy1zaGFyZS1zaWRlYmFyJztcclxuICAgICAgICAgICAgICAgICAgICAvL2RpdlNpZGViYXIuc3R5bGUuaGVpZ2h0PScyNjZweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZTaWRlYmFyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaXZTaWRlYmFyLmlubmVySFRNTCA9IGFyU2JIVE1MLmpvaW4oJycpO1xyXG4gICAgICAgICAgICAgICAgZGl2U2lkZWJhci5jbGFzc05hbWUgPSBcImdpZy1zaGFyZSBnaWctc2hhcmUtc2lkZWJhclwiXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpdlNpZGViYXIub2Zmc2V0SGVpZ2h0IDw9IDI2Nikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdlNpZGViYXIuc3R5bGUuaGVpZ2h0ID0gJzI2NnB4JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kaXZTaWRlYmFyLnN0eWxlLmhlaWdodD0nJytkaXZTaWRlYmFyLm9mZnNldEhlaWdodCsncHgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZnJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9pZnJfJyArIG1vZHVsZUlEICsgJ19zaWRlYmFyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWZyZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWZyZWwuc3R5bGUud2lkdGggPSAnNDdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmVsLnN0eWxlLmhlaWdodCA9ICcyNTRweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWZyZWwuc3R5bGUud2lkdGggPSAnNTNweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmVsLnN0eWxlLmhlaWdodCA9ICcyNjZweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaXZTaWRlYmFyLmdpZ0hlaWdodCA9IHBhcnNlSW50KGRpdlNpZGViYXIuc3R5bGUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGlmICghZGl2U2lkZWJhci5naWdIZWlnaHQpIGRpdlNpZGViYXIuZ2lnSGVpZ2h0ID0gMjY2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2hhcmVDYW52YXModGhpcy5tb2R1bGVzW21vZHVsZUlEXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxzLmlzUG9wdXApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMubW9kdWxlc1ttb2R1bGVJRF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuY0NoYW5nZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGNlbnRlciBvZiB0aGUgcG9wdXAgb24gaU9TIHdoZW4gdGhlIGRpYWxvZyBpcyBpbiBmb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSU9TKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9jdXNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkICYmIGdpZ3lhLnV0aWxzLkRPTS5pc0NoaWxkT2YoZm9jdXNlZCwgb3JpZ2luYWxDb250YWluZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5oaWRlQ29udGFjdHNEcm9wZG93bihtb2R1bGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0hpZGRlbiA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLm9yaWdpbmFsUC5jb250YWluZXJJRCkuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNIaWRkZW4pIF9waS5zaGFyZS5zaG93U2hhcmVDYW52YXMobSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lneWFfaWZyXycgKyBvcmlnaW5hbENvbnRhaW5lci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5zZXRTaXplKGlmciwgcGFyc2VJbnQob3JpZ2luYWxDb250YWluZXIuc3R5bGUud2lkdGgpIC0gMjAsIHBhcnNlSW50KG9yaWdpbmFsQ29udGFpbmVyLnN0eWxlLmhlaWdodCkgLSAyMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5zZXRTaXplKG9yaWdpbmFsQ29udGFpbmVyLCBwYXJzZUludChvcmlnaW5hbENvbnRhaW5lci5zdHlsZS53aWR0aCksIHBhcnNlSW50KG9yaWdpbmFsQ29udGFpbmVyLnN0eWxlLmhlaWdodCksIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnNldFNpemUoZGl2U2lkZWJhciwgNTMsIGRpdlNpZGViYXIuZ2lnSGVpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IGdpZ3lhLmdsb2JhbC5fR2V0RWxlbWVudFBvcyhvcmlnaW5hbENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdMZWZ0ID0gcG9zLmxlZnQgLSA1MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3JpZ2luYWxDb250YWluZXIuaWQgKyAnX3NoYXJlQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcGkuc2hhcmUuY2hhbmdlRGl2UG9zaXRpb24ob3JpZ2luYWxDb250YWluZXIuaWQsIG51bGwsIDUzLCAyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9waS5zaGFyZS5jaGFuZ2VEaXZQb3NpdGlvbihvcmlnaW5hbENvbnRhaW5lci5pZCwgbnVsbCwgNTMsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBuZXdUb3AgPSBwb3MudG9wICsgKHBhcnNlSW50KG9yaWdpbmFsQ29udGFpbmVyLnN0eWxlLmhlaWdodCkgLSBkaXZTaWRlYmFyLmdpZ0hlaWdodCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VG9wID0gcGFyc2VJbnQoZGl2U2lkZWJhci5zdHlsZS50b3ApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgX3BpLnNoYXJlLmNoYW5nZURpdlBvc2l0aW9uKG1vZHVsZUlEICsgJ19zaWRlYmFyJywgbmV3VG9wLCBuZXdMZWZ0LCA2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSGlkZGVuKSBfcGkuc2hhcmUuaGlkZVNoYXJlQ2FudmFzKG0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfcGkuc2hhcmUuZml4RGl2UG9zaXRpb24ob3JpZ2luYWxDb250YWluZXIsIGZuY0NoYW5nZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxzLmlzUG9wdXApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmJSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZiLXJvb3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmJSb290KSBmYlJvb3Quc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwWydhdXRvU2hhcmVBY3Rpb25JRCddICE9IG51bGwgJiYgKChwWydzaG93QWx3YXlzU2hhcmUnXSAhPSBudWxsICYmIHBbJ3Nob3dBbHdheXNTaGFyZSddLnRvTG93ZXJDYXNlKCkgIT0gJ2hpZGUnKSB8fCBnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRUcnVlKHBbJ3Nob3dOZXZlclNoYXJlJ10pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdlNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVTaGFyZUNhbnZhcyh0aGlzLm1vZHVsZXNbbW9kdWxlSURdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW5Vc2VGYWNlYm9va1NoYXJlKG1vZHVsZUlEKSAmJiB0aGlzLmdldFByb3ZpZGVyU2VsZWN0aW9uKG1vZHVsZUlELCAnZmFjZWJvb2snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMuc2VsZWN0UHJvdmlkZXJzKG1vZHVsZUlELCBbR1MuX2dldFByb3ZpZGVyQnlOYW1lKCdmYWNlYm9vaycpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcy5zaG93RmFjZWJvb2tTaGFyZURpYWxvZyhtb2R1bGVJRCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVmlldyhwWydpbml0aWFsVmlldyddLCBtb2R1bGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUocC5oaWRlU2lkZWJhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlU2lkZWJhcihtb2R1bGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBbJ2F1dG9TaGFyZUFjdGlvbklEJ10gIT0gbnVsbCAmJiBwWydzaG93QWx3YXlzU2hhcmUnXSAmJiBwWydzaG93QWx3YXlzU2hhcmUnXS50b0xvd2VyQ2FzZSgpID09ICdjaGVja2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWx3YXlzU2hhcmVUaGlzX09uQ2xpY2sobW9kdWxlSUQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB1c2VyTWVzc2FnZVBsYWNlaG9sZGVyID0gKHAudXNlck1lc3NhZ2VQbGFjZWhvbGRlciA/IHAudXNlck1lc3NhZ2VQbGFjZWhvbGRlciA6IHRoaXMuVEVYVChsYW5nLCAnd3JpdGVfeW91cl9tZXNzYWdlJykpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLnNldFBsYWNlaG9sZGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZHVsZUlEICsgJ19jb21tZW50JyksIHVzZXJNZXNzYWdlUGxhY2Vob2xkZXIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kdWxlSUQgKyAnX2NvbW1lbnQnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB1c2VyTWVzc2FnZVBsYWNlaG9sZGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuYWRkRXZlbnRIYW5kbGVycyh7IGxpc3RlbmVyVHlwZTogJ2NvbXBvbmVudCcsIGxpc3RlbmVyRGVzY3JpcHRpb246ICdsaXN0ZW5lciBmb3IgdXBkYXRpbmcgc2hvd1NoYXJlVUkgV2lkZ2V0cycgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIG9uQ29ubmVjdDogX3BpLnNoYXJlLm9uQ2hhbmdlLFxyXG5cdFx0XHRcdCAgICBvbkRpc2Nvbm5lY3Q6IF9waS5zaGFyZS5vbkNoYW5nZSxcclxuXHRcdFx0XHQgICAgb25Mb2dpbjogX3BpLnNoYXJlLm9uQ2hhbmdlLFxyXG5cdFx0XHRcdCAgICBvbkZhY2Vib29rTG9hZGVkOiBfcGkuc2hhcmUucmVmcmVzaEZCLFxyXG5cdFx0XHRcdCAgICBvbkZCQ1JlZnJlc2hlZDogX3BpLnNoYXJlLnJlZnJlc2hGQixcclxuXHRcdFx0XHQgICAgb25Mb2dvdXQ6IF9waS5zaGFyZS5yZWZyZXNoRkIsXHJcblx0XHRcdFx0ICAgIG9uSGlkZVVJUmVxdWVzdGVkOiBfcGkuc2hhcmUuY2xvc2VBbGxNb2R1bGVzXHJcblx0XHRcdFx0fSk7XHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9