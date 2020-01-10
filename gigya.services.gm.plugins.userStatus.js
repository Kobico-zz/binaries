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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.gm.plugins.userStatus.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.gm.plugins.userStatus.js":
/*!********************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.gm.plugins.userStatus.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="gigya.services.socialize.plugins.js" />
if (typeof window.gigya.services.gm.plugins == 'undefined') window.gigya.services.gm.plugins = {};
(function () {
    window.gigya.services.gm.plugins.userStatus = {
        instances: {},
        showUserStatusUI: function (c, p, i) {
            privateScope.createInstance(c, p, i);
        }
    }
    var publicScope = window.gigya.services.gm.plugins.userStatus;

    var privateScope = {
        instances_size: 0,
        userStatusPlugin: function (c, p, i) {
            this._c = c;
            this._p = p;
            this._i = i;
            this._elid = p.containerID
        },
        createInstance: function (c, p, i) {
            var el = document.getElementById(p.containerID);
            if (el == null) return;

            var instance = new privateScope.userStatusPlugin(c, p, i);
            publicScope.instances[p.containerID] = instance;
            privateScope.instances_size++;
            instance.init();
        },
        createDefaultTemplates: function () {
            var templates = {
                _map: {},
                get: function (key) {
                    return this._map[key];
                },

                set: function (key, value) {
                    this._map[key] = (value instanceof Array) ? value.join("") : value;
                }
            }
            templates.set("userStatusCanvas",
			[
				'<div tabindex="0" class="gig-userStatus gig-userStatus-container" id="${id}_container"><div style="overflow: hidden">$userPhoto $nameAndPoints $badge</div></div>'
			]);
            templates.set("userPhoto",
			[
				'<div class="gig-userStatus-userPhoto-container"><div class="gig-userStatus-userPhoto"><img alt="" id="${id}_userPhoto" src="$userPhotoURL" /></div><a id="${id}_settingsLink" class="gig-userStatus-settings">$TEXT("settings")</a></div>'
			]);
            templates.set("nameAndPoints",
			[
				'<div class="gig-userStatus-nameAndPoints">',
                    '<div class="gig-userStatus-name">$name</div>',
                    '<a id="${id}_points" class="gig-userStatus-points">$TEXT("num_points","%num","<span class=\\"gig-userStatus-pointsValue\\">$points</span>")</a>',
                    '<div class="gig-userStatus-progress" title="$TEXT("level_progress")">',
                        '<div class="gig-userStatus-progress-fill" style="width:$percent%;"></div>',
                        '<div class="gig-userStatus-progress-percent">$percent%</div>',
                    '</div>',
                '</div>'
			]);
            templates.set("badge",
			[
				'<a class="gig-userStatus-badge-container" id="${id}_badge">',
					'<img alt="" src="$badgeURL" id="${id}_badgeImg" class="gig-userStatus-badge" />',
					'<div class="${textClassName}">$levelTitle</div>',
				'</a>'
			]);

            templates.set("settingsDialog",
			[
				'<div class="gig-userStatus gig-userStatus-settingsDialog">',
					'<div class="gig-userStatus-settingsDialog-setting"><input type="checkbox" id="${id}_cbEnableNotifications" /><label for="${id}_cbEnableNotifications">$TEXT("show_on_page_achievement_notifications")</label></div>',
					'<div class="gig-userStatus-settingsDialog-setting"><input type="checkbox" id="${id}_cbPublicProfile" /><label for="${id}_cbPublicProfile">$TEXT("show_my_profile_and_rankings_to_all_users")</label></div>',
					'<div class="gig-userStatus-settingsDialog-setting" id="${id}_autoShare"><input type="checkbox" id="${id}_cbAutoShare" /><label for="${id}_cbAutoShare">$TEXT("auto_share_my_achievements_with_my_friends")</label></div>',
					'<a tabindex="0" role="button" class="gig-userStatus-settingsDialog-saveButton" onclick="$onSaveSettings" onkeydown="if((event.which || event.keyCode) == 13) $onSaveSettings">$TEXT("save")</a>',
					'<a tabindex="0" role="button" class="gig-userStatus-settingsDialog-cancelButton" onclick="$onCancel" onkeydown="if((event.which || event.keyCode) == 13) $onCancel">$TEXT("cancel")</a>',
					'<span class="gig-userStatus-settingsDialog-notes" id="${id}_notes">$TEXT("it_can_take_a_few_minutes_for_privacy_settings_to_update")</span>',
				'</div>'
			]);

            templates.set("shareButton",
			[
				'<div class="gig-userStatus-levelInfo-shareButton" id="${id}_shareButton"></div>'
			]);
            templates.set("levelInfoDialog",
			[
				'<div class="gig-userStatus gig-userStatus-levelInfo">',
					'<div class="gig-userStatus-levelInfo-challengeTitle">$challengeTitle</div>',
					'<div class="gig-userStatus-levelInfo-challengeDescription">$challengeDescription</div>',
					'$nextLevelInfo',
					'<div class="gig-userStatus-levelInfo-shareButton-container">${shareButton}</div>',
				'</div>'
			]);
            templates.set("nextLevelInfo",
			[
					'<table role="presentation" cellspacing="0" cellpadding="0" class="gig-userStatus-levelInfo-nextLevel"><tr>',
						'<td class="gig-userStatus-levelInfo-nextLevel-text-container"><div class="gig-userStatus-levelInfo-nextLevel-text">',
							'$nextLevelText',
						'</div></td>',
						'<td class="gig-userStatus-levelInfo-nextLevel-badge-container"><img alt="" class="gig-userStatus-levelInfo-nextLevel-badge" src="$nextLevelLockedBadgeURL" /></td>',
					'</tr></table>'
			]);
            templates.set("pointsDialog",
			[
				'<div class="gig-userStatus gig-userStatus-pointsDialog">',
					'<div class="gig-pointsDialog-points">',
						'<div class="gig-userStatus-pointsDialog-thisWeek">',
							'<div class="gig-userStatus-pointsDialog-thisWeek-content">',
								'$TEXT("this_week")',
								'<div class="gig-userStatus-points">$TEXT("num_points","%num","<span class=\\"gig-userStatus-pointsValue\\">$points7Days</span>")</div>',
							'</div>',
						'</div>',
						'<div class="gig-userStatus-pointsDialog-allTimes">',
							'<div class="gig-userStatus-pointsDialog-allTimes-content">',
								'$TEXT("all_time")',
								'<div class="gig-userStatus-points">$TEXT("num_points","%num","<span class=\\"gig-userStatus-pointsValue\\">$pointsTotal</span>")</div>',
							'</div>',
						'</div>',
					'</div>',
				'</div>'
			]);
            return templates;
        },
        defaultCss: [
			'.gig-userStatus *, div.gig-userStatus, .gig-userStatus span, .gig-userStatus a:hover, .gig-userStatus a:visited, .gig-userStatus a:link, .gig-userStatus a:active{',
			'border:none; line-height:normal;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;',
			'font-family:arial;font-size:10px;color:#797979;background:none;text-align:left;}',

			'div.gig-userStatus-container {padding: 10px 10px 3px 10px;border: 1px solid #e2e2e2;zoom:1}',
			'div.gig-userStatus-userPhoto-container {float:left;overflow:hidden;padding-right:9px;text-align:center}',
			'div.gig-userStatus-userPhoto {width: 65px; height:65px; overflow:hidden;border: 1px solid #E8E8E8;padding:2px;}',
			'div.gig-userStatus-nameAndPoints {float:left;overflow:hidden;zoom:1;margin-top:12px;}',
            'div.gig-userStatus-nameAndPoints-withProgress { margin-top:2px; }',

			'a.gig-userStatus-badge-container, a:hover.gig-userStatus-badge-container {float:right; padding: 5px 0 0 0;cursor:pointer; text-align:center;width:60px;}',
			'a:hover.gig-userStatus-badge-container div.gig-userStatus-levelTitle {text-decoration:underline}',
			'a.gig-userStatus-settings, a:hover.gig-userStatus-settings {font-size: 10px; color: #797979; cursor:pointer;}',
			'a:hover.gig-userStatus-settings {text-decoration:underline}',

            'div.gig-userStatus-name {padding-bottom:3px;font-size: 14px; font-weight:bold; color: #313131;width:100px;}',
			'a.gig-userStatus-points, a:hover.gig-userStatus-points, div.gig-userStatus-points {font-size: 12px; font-weight:bold; color: #0B81C1}',
			'a.gig-userStatus-points {cursor:pointer}',
            'div.gig-userStatus-progress { margin-top:5px;height:18px;width:130px;border:1px solid #D7D6D6;border-radius:2px; }',
            'div.gig-userStatus-progress-fill { background-color:#E3E0E0;height:18px; }',
            'div.gig-userStatus-progress-percent { margin-top:-18px;color:#646464;font-family:arial;font-size:12px;line-height:18px;text-align:center; }',

			'a:hover.gig-userStatus-points {text-decoration:underline}',
			'span.gig-userStatus-pointsValue {font-size: 20px; font-weight:bold; color: #0B81C1}',
			'div.gig-userStatus-levelTitle {font-size: 12px; color: #313131; text-align:center;line-height:115%}',
			'div.gig-userStatus-levelTitle-locked {font-weight:normal; color:#B0B0B0}',
			'img.gig-userStatus-badge {width: 50px; height: 50px;padding-bottom:4px}',
			'div.gig-userStatus-settingsDialog {padding-top: 13px;overflow:hidden;}',
			'div.gig-userStatus-settingsDialog-setting {padding-bottom:5px;font-size:12px;color:#313131}',
			'div.gig-userStatus-settingsDialog-setting-disabled {color:#B0B0B0}',
			//'div.gig-userStatus-settingsDialog-setting-text {}',
			'div.gig-userStatus-settingsDialog-setting input {margin-right: 5px; float:left}',
			'a.gig-userStatus-settingsDialog-saveButton,a:hover.gig-userStatus-settingsDialog-saveButton {position:relative;font-weight:bold;border-radius: 3px; color:#313131;cursor:pointer;margin-top:10px;',
				'font-size: 12px;padding: 3px 10px; border: 1px solid #C5C7C7;float:right;display:table-cell; vertical-align:middle; text-align:center;',
				'box-shadow:0 0 2px RGBA(0,0,0,0.15);-webkit-box-shadow:0 0 2px RGBA(0,0,0,0.15);-moz-box-shadow:0 0 2px RGBA(0,0,0,0.15);}',
			'a.gig-userStatus-settingsDialog-saveButton {background: #FFFFFF; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#EAEBEB");',
				'background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#EAEBEB));',
				'background: -moz-linear-gradient(top,  #FFFFFF,  #EAEBEB)}',
			'a:hover.gig-userStatus-settingsDialog-saveButton {',
				'background: #EAEBEB; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#EAEBEB", endColorstr="#FFFFFF");',
				'background: -webkit-gradient(linear, left top, left bottom, from(#EAEBEB), to(#FFFFFF));',
				'background: -moz-linear-gradient(top,  #EAEBEB,  #FFFFFF)}',

			'a.gig-userStatus-settingsDialog-cancelButton,a:hover.gig-userStatus-settingsDialog-cancelButton {position:relative;border-radius: 3px; color:#313131;cursor:pointer;margin-top:10px;margin-right:10px;',
				'font-size: 12px;padding: 3px 10px; border: 1px solid #C5C7C7;float:right;display:table-cell; vertical-align:middle; text-align:center;',
				'box-shadow:0 0 2px RGBA(0,0,0,0.15);-webkit-box-shadow:0 0 2px RGBA(0,0,0,0.15);-moz-box-shadow:0 0 2px RGBA(0,0,0,0.15);}',
			'a.gig-userStatus-settingsDialog-cancelButton {background: #FFFFFF; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#EAEBEB");',
				'background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#EAEBEB));',
				'background: -moz-linear-gradient(top,  #FFFFFF,  #EAEBEB)}',
			'a:hover.gig-userStatus-settingsDialog-cancelButton {',
				'background: #EAEBEB; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#EAEBEB", endColorstr="#FFFFFF");',
				'background: -webkit-gradient(linear, left top, left bottom, from(#EAEBEB), to(#FFFFFF));',
				'background: -moz-linear-gradient(top,  #EAEBEB,  #FFFFFF)}',


			'div.gig-userStatus-pointsDialog {padding-top: 7px;}',
			'div.gig-pointsDialog-points {min-width:260px;overflow:hidden;display:block;zoom:1;}',
			'div.gig-userStatus-pointsDialog-thisWeek, div.gig-userStatus-pointsDialog-allTimes{min-width:120px;background-color:#FFFFFF; border: 1px solid #E8E8E8;padding: 1px;}',
			'div.gig-userStatus-pointsDialog-thisWeek {float:left;margin-right:4px;}',
			'div.gig-userStatus-pointsDialog-allTimes {float:left}',
			'div.gig-userStatus-pointsDialog-thisWeek-content, div.gig-userStatus-pointsDialog-allTimes-content {padding: 7px 15px;background-color:#F9F9F9;font-size:12px; font-weight:bold; color:#313131}',

			'table.gig-userStatus-levelInfo-nextLevel {margin-bottom: 15px;width:100%}',
			'div.gig-userStatus-levelInfo {padding: 12px 0 5px 0;}',

			'div.gig-userStatus-levelInfo-nextLevel-text {margin-right: 10px;width:202px;}',
			'div.gig-userStatus-levelInfo-nextLevel-text, span.gig-userStatus-levelInfo-nextLevel-text {font-size:12px; color:#313131;}',
			'span.gig-userStatus-levelInfo-nextLevel-text-achievementsLeft {font-weight:bold;}',
			'span.gig-userStatus-levelInfo-nextLevel-text-nextLevelTitle {font-weight:bold;}',
			'img.gig-userStatus-levelInfo-nextLevel-badge{width:40px;height:40px;}',
			'td.gig-userStatus-levelInfo-nextLevel-badge-container {vertical-align:top}',
			'td.gig-userStatus-levelInfo-nextLevel-text-container {vertical-align:middle}',
			'div.gig-userStatus-levelInfo-shareButton {margin-left:auto;cursor:pointer;width:70px;height: 18px;background-image:url(\'' + window.gigya._.getCdnResource('/gs/i/gm/shareButton.png') + '\')}',
			'div.gig-userStatus-levelInfo-shareButton-container {text-align:right;}',
			'div.gig-userStatus-levelInfo-challengeDescription {font-size: 12px;color:#000;padding-bottom:15px;padding-right:5px;}',
			'div.gig-userStatus-levelInfo-challengeTitle {font-weight:bold; font-size: 12px;color:#000}',

			'span.gig-userStatus-settingsDialog-notes {font-size:9px;float:left;margin-top:7px;visibility:hidden;width:150px;}',

            'div.gig-userStatus-levelInfo-nextLevel-text a.gig-userStatus-levelInfo-nextLevel-link { font-size:12px;color:#3e59ff;cursor:pointer;text-decoration:underline; }',
            'div.gig-userStatus-levelInfo-nextLevel-text a.gig-userStatus-levelInfo-nextLevel-link * { color:#3e59ff;cursor:pointer;text-decoration:underline; }'
        ]
    }
    if (window.gigya.localInfo.quirksMode) { //quirks mode - width/height including paddings and borders
        privateScope.defaultCss.push([
			'div.gig-userStatus-userPhoto {width: 71px; height:71px}'
        ]);
    }
    if (window.gigya.localInfo.backCompat) {
        privateScope.defaultCss.push([
			'a:hover.gig-userStatus-points {text-decoration:none}' // underline with different font-sizes looks ugly in backCompat mode
        ]);
    }
    if (window.gigya.localInfo.isIE7) {
        privateScope.defaultCss.push([
			'div.gig-userStatus-pointsDialog-thisWeek, div.gig-userStatus-pointsDialog-allTimes{width:120px}'
        ]);
    }
    privateScope.userStatusPlugin.prototype = {
        init: function () {
            this.templates = privateScope.createDefaultTemplates();
            if (this._p.cssPrefix || !privateScope.addedCSS) {
                window.gigya.global.addCSS(privateScope.defaultCss, this._p.cssPrefix);
                privateScope.addedCSS = true;
            }

            this.getChallenge();
            var This = this;

            window.gigya.services.socialize.getUserInfo(this._c, { includeAllIdentities: true, group: 'gmSettings', callback: function (e) { This.afterGetInfo(e) } });

            var fnRefresh = function (e) { This.refresh(e) };
            var callNotification = function () { window.setTimeout(function () { This.getChallenge(true) }, 3000) };
            window.gigya.services.socialize.addEventHandlers({ listenerType: 'component' }, {
                onLogout: fnRefresh,
                onLogin: fnRefresh
            });
            window.gigya.events.addMap({
            defaultMethod: callNotification,
                eventMap: [
                    { events: "sendDone,reactionClicked,commentSubmitted,commentVoted,login,connectionAdded,actionNotified", args: [] }
                ]
            });
            window.gigya.socialize.addEventHandlers({ listenerType: 'component' }, {
                onActionNotified: callNotification
            });
        },
        getText: function (textKey, replaceStr, withStr) {
            return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.gm.plugins.userStatus.js', textKey, this._p.lang, replaceStr, withStr);
        },
        getChallenge: function (hideLoader) {
            var This = this;
            if (!hideLoader) window.gigya.global.showLoader(document.getElementById(this._elid), 'gig-userStatus gig-userStatus-container', this.getCanvasSize().h);
            var challenge = this._p.challenge;
            if (!this._p.challenge) challenge = '_default';
            window.gigya.services.gm.getChallengeStatus(this._c, { includeChallenges: challenge, details: 'full', callback: function (e) { This.afterGetChallenge(e) } });
        },
        refresh: function (e) {
            if (e.user) {
                this.user = e.user;
                //gigya.global.showLoader(document.getElementById(this._elid), 'gig-userStatus-container', this.getCanvasSize().h);
                //this.getChallenge();
            } else {
                document.getElementById(this._elid).innerHTML = '';
            }
        },
        afterGetInfo: function (e) {
            if (e.errorCode > 0) {
                if (!this.broadcastedError) {
                    window.gigya.events.dispatchErrorFromResponse(this._p, e);
                    this.broadcastedError = true;
                }
                document.getElementById(this._elid).innerHTML = '';
            }
            this.gmSettings = e.settings;
            this.user = e.user;
            this.draw();
        },
        afterGetChallenge: function (e) {
            if (e.errorCode > 0) {
                if (!this.broadcastedError) {
                    window.gigya.events.dispatchErrorFromResponse(this._p, e);
                    this.broadcastedError = true;
                }
                document.getElementById(this._elid).innerHTML = '';
                return;
            }
            if (e.achievements && e.achievements.length > 0) {
                this.challenge = e.achievements[0];
                this.challenge.textClassName = 'gig-userStatus-levelTitle';
                if (this.challenge.level == 0) {
                    this.challenge.badgeURL = window.gigya.global.getPhotoURL(this.challenge.nextLevelLockedBadgeURL, window.gigya._.getCdnResource('/gs/i/gm/LockedBadge.png'));
                    this.challenge.levelTitle = this.challenge.nextLevelTitle;
                    this.challenge.levelDescription = this.challenge.nextLevelDescription;
                    this.challenge.textClassName = 'gig-userStatus-levelTitle gig-userStatus-levelTitle-locked';
                }
            } else {
                window.gigya.events.dispatchErrorFromResponse(this._p, { errorCode: 400096, errorMessage: 'Not supported - Challenge doesn\'t exist', statusMessage: '' });
                this.challenge = { empty: true };
            }

            this.draw();

        },
        getCanvasSize: function () {
            var item = {
                TEXT: window.gigya.utils.delegate.create(this, this.getText),
                id: this._elid,
                points: 0,
                levelTitle: 'W',
                name: 'W',
                badgeURL: '',
                userPhotoURL: '',

                userPhoto: this.templates.get('userPhoto'),
                nameAndPoints: this.templates.get('nameAndPoints'),
                badge: this.templates.get('badge'),
                textClassName: 'gig-userStatus-levelTitle'
            };
            var template = this.templates.get('userStatusCanvas');
            var container = document.getElementById(this._elid);
            container.innerHTML = window.gigya.utils.templates.fill(template, item);
            var bordersAndPadding = window.gigya.global.getBordersAndPaddings(container);

            var h = container.offsetHeight;
            var w = container.offsetWidth;
            if (!window.gigya.localInfo.quirksMode) h -= window.gigya.global.getClassBordersAndPaddings('gig-userStatus-container').h;
            return { w: w, h: h }
        },
        draw: function () {
            if (this.user && this.challenge) {
                var identity = this.user;
                if (!this.user.isLoggedIn || this.challenge.empty) {
                    document.getElementById(this._elid).innerHTML = '';
                    return;
                }
                var item = {
                    TEXT: window.gigya.utils.delegate.create(this, this.getText),
                    id: this._elid,
                    points: this.challenge.pointsCurrent,
                    levelTitle: this.challenge.levelTitle,
                    name: identity.nickname.toUpperCase(),
                    badgeURL: window.gigya.global.getPhotoURL(this.challenge.badgeURL),
                    userPhotoURL: window.gigya.global.getPhotoURL(identity.thumbnailURL ? identity.thumbnailURL : identity.photoURL),
                    percent: this.getActionPercent(),

                    userPhoto: this.templates.get('userPhoto'),
                    nameAndPoints: this.templates.get('nameAndPoints'),
                    badge: this.templates.get('badge'),
                    textClassName: this.challenge.textClassName
                };

                if (!item.userPhotoURL || item.userPhotoURL == '') {
                    item.userPhotoURL = window.gigya._.getCdnResource('/gs/i/gm/User.png');
                }

                var template = this.templates.get('userStatusCanvas');
                document.getElementById(this._elid).innerHTML = window.gigya.utils.templates.fill(template, item);

                if (item.percent == -1 || this._p.hideActions) {
                    var arProgress = window.gigya.utils.DOM.getElementsByClass(document.getElementById(this._elid), 'gig-userStatus-progress');

                    if (arProgress.length > 0)
                        arProgress[0].style.display = 'none';
                }
                else {
                    var arContainer = window.gigya.utils.DOM.getElementsByClass(document.getElementById(this._elid), 'gig-userStatus-nameAndPoints');

                    if (arContainer.length > 0)
                        window.gigya.utils.DOM.addClassToElement(arContainer[0], 'gig-userStatus-nameAndPoints-withProgress');
                }

                if (typeof this.challenge.pointsCurrent == 'undefined' || this._p.hidePoints) {
                    var arPoints = window.gigya.utils.DOM.getElementsByClass(document.getElementById(this._elid), 'gig-userStatus-points');

                    if (arPoints.length > 0)
                        arPoints[0].style.visibility = 'hidden';
                }

                var This = this;

                var divBadge = document.getElementById(this._elid + '_badge');
                divBadge.setAttribute('tabindex', '0');
                divBadge.setAttribute('role', 'presentation'); // Do not read as "link" because it does not link anywhere and clicking it does nothing.
                divBadge.onfocus = function () { This.showLevelInfoBubble(divBadge); }

                var divPoints = document.getElementById(this._elid + '_points');
                divPoints.setAttribute('tabindex', '0');
                divPoints.setAttribute('role', 'presentation'); // Do not read as "link" because it does not link anywhere and clicking it does nothing.
                divPoints.onfocus = function () { This.showPointsBubble(divPoints); }

                var divSettingsLink = document.getElementById(this._elid + '_settingsLink');
                divSettingsLink.setAttribute('tabindex', '0');
                divSettingsLink.setAttribute('role', 'button');
                divSettingsLink.onclick = function () { This.showSettingsBubble(divSettingsLink) }
                divSettingsLink.onkeydown = function(e) {
                    if((e.which || e.keyCode) == 13) {
                        This.showSettingsBubble(divSettingsLink);
                    }
                }

                var imgUserPhoto = document.getElementById(this._elid + '_userPhoto');
                window.gigya.global.scaleImageToContainer(imgUserPhoto);
                if (!this.firedLoadEvent) {
                    this.firedLoadEvent = true;
                    window.gigya.events.dispatchForWidget({ eventName: 'load', containerID: this._p['containerID'] }, this._p);
                }
            }
        },
        getActionPercent: function () {
            var requiredActions = this.challenge.actionStatus;
            if (!requiredActions || requiredActions.length == 0) return -1;

            var requiredSum = 0;
            var currentSum = 0;
            for (var i = 0; i < requiredActions.length; i++) {
                var required = parseInt(requiredActions[i].required);
                requiredSum += required;
                currentSum += Math.min(parseInt(requiredActions[i].completed), required);
            }

            return Math.round((currentSum / requiredSum) * 100);
        },
        showPointsBubble: function (el) {
            var item = window.gigya.utils.object.clone(this.challenge);
            item.id = this._elid + '_pointsBubble';
            item.TEXT = window.gigya.utils.delegate.create(this, this.getText);
            var htmlPoints = window.gigya.utils.templates.fill(this.templates.get('pointsDialog'), item);
            window.gigya.global.putGMBalloonNextTo(el, htmlPoints, this.getText('my_points'), null, null, null, this._elid + '_points');
        },
        showLevelInfoBubble: function (el) {
            var item = window.gigya.utils.object.clone(this.challenge);
            item.TEXT = window.gigya.utils.delegate.create(this, this.getText);
            item.id = this._elid + '_detailsBubble';
            item.shareButton = '';
            item.nextLevelInfo = '';
            item.nextLevelText = '';
            if (item.level > 0) {
                item.shareButton = window.gigya.utils.templates.fill(this.templates.get('shareButton'), item);
            }
            item.nextLevelLockedBadgeURL = window.gigya.global.getPhotoURL(item.nextLevelLockedBadgeURL, window.gigya._.getCdnResource('/gs/i/gm/LockedBadge.png'));
            if (item.nextLevelTitle && item.actionStatus && item.actionStatus.length > 0) {
                if (item.nextLevelActionURL) {
                    item.nextLevelInfo = this.templates.get('nextLevelInfo');
                    item.nextLevelText = ('<a target="_blank" class="gig-userStatus-levelInfo-nextLevel-link" href="$nextLevelActionURL" alt="">' + this.getText('learn_how_to_unlock_the_leveltitle_badge') + '</a>')
                            .replace('%leveltitle', '<span class="gig-userStatus-levelInfo-nextLevel-text gig-userStatus-levelInfo-nextLevel-text-nextLevelTitle">$nextLevelTitle</span>');
                }
            }
            else if (item.nextLevelTitle && typeof item.pointsStatus !== 'undefined') {
                item.nextLevelInfo = this.templates.get('nextLevelInfo');
                item.requiredAchievement = this.getText(item.requiredAchievement) || item.requiredAchievement;
                item.nextLevelText = this.getText('num_more_achievement_to_unlock_leveltitle_level', '%num', '<span class="gig-userStatus-levelInfo-nextLevel-text gig-userStatus-levelInfo-nextLevel-text-achievementsLeft">$achievementsToNextLevel</span>')
				.replace('%achievement', '$requiredAchievement')
				.replace('%leveltitle', '<span class="gig-userStatus-levelInfo-nextLevel-text gig-userStatus-levelInfo-nextLevel-text-nextLevelTitle">$nextLevelTitle</span>');
            }

            var htmlPoints = window.gigya.utils.templates.fill(this.templates.get('levelInfoDialog'), item);
            window.gigya.global.putGMBalloonNextTo(el, htmlPoints, item.levelTitle, 252, null, null, this._elid + '_levelInfo');
            var badge = document.getElementById(item.id + '_badge');
            var This = this;

            if (badge && this.challenge.nextLevelActionURL) {
                badge.href = This.challenge.nextLevelActionURL;
            }
            var shareButton = document.getElementById(item.id + '_shareButton');
            if (shareButton) {
                shareButton.onclick = function () {
                    This.shareButtonClicked();
                    window.gigya.global.removeGMBalloon();
                }
            }
        },
        shareButtonClicked: function () {
            var userAction = this.getUserAction(this.challenge, true);
            var params = this._p.shareParams ? window.gigya.utils.object.clone(this._p.shareParams, true, true) : {}
            params.userAction = userAction;
            params.containerID = '';
            window.gigya.services.socialize.showShareUI(this._c, params);
        },
        getUserAction: function (challenge, canUseShareParams) {
            var userAction = this._p.userAction;
            if (canUseShareParams && this._p.shareParams && this._p.shareParams.userAction) userAction = this._p.shareParams.userAction;

            if (userAction) {
                userAction = new window.gigya.services.socialize.UserAction(window.gigya.utils.object.clone(userAction, true, true));
            } else {
                userAction = new window.gigya.services.socialize.UserAction();
                userAction.setTitle("$levelTitle")
                userAction.setDescription("$challengeDescription")
                userAction.addImage('$badgeURL')
            }
            if (!userAction.linkBack) {
                userAction.setLinkBack(document.location.href);
            }
            return window.gigya.global.fillUserActionTemplate(userAction, challenge);
        },
        showSettingsBubble: function (el) {
            if (document.getElementById(this._elid + '_settings')) return;
            var item = {
                id: this._elid + '_settings',
                onSaveSettings: this.getInstanceRefString() + '.saveSettings()',
                onCancel: this.getInstanceRefString() + '.closeSettings()',
                TEXT: window.gigya.utils.delegate.create(this, this.getText)
            }
            var htmlSettings = window.gigya.utils.templates.fill(this.templates.get('settingsDialog'), item);
            //gigya.global.putGMBalloonNextTo(el, htmlSettings, 'PRIVACY SETTINGS', 280);

            var container = document.createElement('div');
            container.innerHTML = window.gigya.global.getBalloonHTML(htmlSettings, this.getText('privacy_settings'), 280, null, null, null, null, this.getInstanceRefString() + '.closeSettings()');
            container.style.position = 'absolute';
            container.style.top = '-1000px';
            container.style.zIndex = window.gigya.utils.DOM.getNextZIndex();
            container.id = this._elid + '_settings';

            var lnkSettings = document.getElementById(this._elid + '_settingsLink');
            var settingsPos = window.gigya.global._GetElementPos(lnkSettings);
            window.gigya.utils.DOM.appendToBody(container);

            var top = settingsPos.top + lnkSettings.offsetHeight + 5;
            var left = settingsPos.left;

            if (top < 10) top = 10;
            if (left < 10) left = 10;

            var de = document.documentElement;
            var db = document.body;

            var clientHeight = de.clientHeight;
            if (clientHeight == 0) clientHeight = db.clientHeight;
            var clientWidth = de.clientWidth;
            if (clientWidth == 0) clientWidth = db.clientWidth;

            if (window.innerHeight) {
                clientHeight = window.innerHeight;
                clientWidth = window.innerWidth;
            }
            var scrl = window.gigya.utils.viewport.getScroll();
            var vpt = scrl.top;
            var vpl = scrl.left;
            var bottomRightTop = vpt + clientHeight;
            var bottomRightLeft = vpl + clientWidth;
            if (top + container.offsetHeight > bottomRightTop) top = bottomRightTop - container.offsetHeight - 10;
            if (left + container.offsetWidth > bottomRightLeft) left = bottomRightLeft - container.offsetWidth - 10;

            container.style.top = top + 'px';
            container.style.left = left + 'px';
            if (window.gigya.localInfo.isIE) {
                window.gigya.global.addIframeShim(container);
            }

            //load settings
            var cbEnableNotifications = document.getElementById(item.id + '_cbEnableNotifications');
            var cbPublicProfile = document.getElementById(item.id + '_cbPublicProfile');
            var cbAutoShare = document.getElementById(item.id + '_cbAutoShare');
            var settings = this.gmSettings;
            var localSettings = window.gigya.utils.localStorage.getObject('gmSettings');
            cbEnableNotifications.checked = !(localSettings && localSettings.disableNotifications);
            cbPublicProfile.checked = !(settings && settings.privateProfile);

            var This = this;
            cbEnableNotifications.onclick = function () {
                if (!cbEnableNotifications.checked) {
                    This.disableAutoShare();
                } else {
                    This.enableAutoShare();
                }
            }
            if (!cbEnableNotifications.checked) {
                this.disableAutoShare();
            } else {
                cbAutoShare.checked = (settings && settings.autoShare);
            }
            cbPublicProfile.onclick = function () { This.showSettingsNotes() };

            // Ensure that the div is focusable but not tabbable. Then manually give it focus. (WCAG)
            container.tabIndex = -1;
            container.focus();
        },
        showSettingsNotes: function () {
            var divNotes = document.getElementById(this._elid + '_settings_notes');
            if (divNotes) {
                divNotes.style.visibility = 'visible';
                window.setTimeout(function () { divNotes.style.visibility = 'hidden' }, 3000);
            }
        },
        closeSettings: function () {
            var divSettings = document.getElementById(this._elid + '_settings');
            if (divSettings) {
                window.gigya.global.removeIframeShim(divSettings);
                divSettings.parentNode.removeChild(divSettings);
            }

            // Return focus to the settings link. (WCAG)
            var lnkSettings = document.getElementById(this._elid + '_settingsLink');
            if (lnkSettings) {
                lnkSettings.focus();
            }
        },
        disableAutoShare: function () {
            var cbAutoShare = document.getElementById(this._elid + '_settings_cbAutoShare');
            var lblAutoShare = document.getElementById(this._elid + '_settings_autoShare');
            cbAutoShare.disabled = true;
            cbAutoShare.checked = false;
            lblAutoShare.className = 'gig-userStatus-settingsDialog-setting gig-userStatus-settingsDialog-setting-disabled';
        },
        enableAutoShare: function () {
            var cbAutoShare = document.getElementById(this._elid + '_settings_cbAutoShare');
            var lblAutoShare = document.getElementById(this._elid + '_settings_autoShare');
            cbAutoShare.disabled = false;
            lblAutoShare.className = 'gig-userStatus-settingsDialog-setting';
        },
        saveSettings: function () {
            var cbEnableNotifications = document.getElementById(this._elid + '_settings_cbEnableNotifications');
            var cbPublicProfile = document.getElementById(this._elid + '_settings_cbPublicProfile');
            var cbAutoShare = document.getElementById(this._elid + '_settings_cbAutoShare');

            var gmSettings = {
                privateProfile: !(cbPublicProfile.checked),
                autoShare: cbAutoShare.checked
            }
            var params = {
                group: 'gmSettings',
                settings: gmSettings
            }
            window.gigya.services.socialize.setUserSettings(this._c, params);

            var localSettings = window.gigya.utils.localStorage.getObject('gmSettings');
            if (!localSettings) localSettings = {};
            localSettings.disableNotifications = !(cbEnableNotifications.checked);
            window.gigya.utils.localStorage.setObject('gmSettings', localSettings);

            this.gmSettings = gmSettings;

            this.closeSettings();
        },
        getInstanceRefString: function () {
            return 'gigya.services.gm.plugins.userStatus.instances[\'' + encodeURIComponent(this._elid) + '\']';
        }
    }


})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMudXNlclN0YXR1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxXQUFXLFlBQUsscUNBQXFDLFlBQUs7QUFDMUQ7QUFDQSxJQUFJLFlBQUs7QUFDVCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBSzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNB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QUs7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFLO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsdUNBQXVDO0FBQ3RGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixZQUFLO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFLOztBQUVqQixnQ0FBZ0MsWUFBSztBQUNyQztBQUNBO0FBQ0EsWUFBWSxZQUFLOztBQUVqQjs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQyxJIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMudXNlclN0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMudXNlclN0YXR1cy5qc1wiKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5qc1wiIC8+XHJcbmlmICh0eXBlb2YgZ2lneWEuc2VydmljZXMuZ20ucGx1Z2lucyA9PSAndW5kZWZpbmVkJykgZ2lneWEuc2VydmljZXMuZ20ucGx1Z2lucyA9IHt9O1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgZ2lneWEuc2VydmljZXMuZ20ucGx1Z2lucy51c2VyU3RhdHVzID0ge1xyXG4gICAgICAgIGluc3RhbmNlczoge30sXHJcbiAgICAgICAgc2hvd1VzZXJTdGF0dXNVSTogZnVuY3Rpb24gKGMsIHAsIGkpIHtcclxuICAgICAgICAgICAgcHJpdmF0ZVNjb3BlLmNyZWF0ZUluc3RhbmNlKGMsIHAsIGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBwdWJsaWNTY29wZSA9IGdpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMudXNlclN0YXR1cztcclxuXHJcbiAgICB2YXIgcHJpdmF0ZVNjb3BlID0ge1xyXG4gICAgICAgIGluc3RhbmNlc19zaXplOiAwLFxyXG4gICAgICAgIHVzZXJTdGF0dXNQbHVnaW46IGZ1bmN0aW9uIChjLCBwLCBpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MgPSBjO1xyXG4gICAgICAgICAgICB0aGlzLl9wID0gcDtcclxuICAgICAgICAgICAgdGhpcy5faSA9IGk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsaWQgPSBwLmNvbnRhaW5lcklEXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVJbnN0YW5jZTogZnVuY3Rpb24gKGMsIHAsIGkpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocC5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgIGlmIChlbCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgcHJpdmF0ZVNjb3BlLnVzZXJTdGF0dXNQbHVnaW4oYywgcCwgaSk7XHJcbiAgICAgICAgICAgIHB1YmxpY1Njb3BlLmluc3RhbmNlc1twLmNvbnRhaW5lcklEXSA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICBwcml2YXRlU2NvcGUuaW5zdGFuY2VzX3NpemUrKztcclxuICAgICAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlRGVmYXVsdFRlbXBsYXRlczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVzID0ge1xyXG4gICAgICAgICAgICAgICAgX21hcDoge30sXHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwW2tleV07XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXBba2V5XSA9ICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSA/IHZhbHVlLmpvaW4oXCJcIikgOiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZW1wbGF0ZXMuc2V0KFwidXNlclN0YXR1c0NhbnZhc1wiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxkaXYgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJnaWctdXNlclN0YXR1cyBnaWctdXNlclN0YXR1cy1jb250YWluZXJcIiBpZD1cIiR7aWR9X2NvbnRhaW5lclwiPjxkaXYgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuXCI+JHVzZXJQaG90byAkbmFtZUFuZFBvaW50cyAkYmFkZ2U8L2Rpdj48L2Rpdj4nXHJcblx0XHRcdF0pO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZXMuc2V0KFwidXNlclBob3RvXCIsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLXVzZXJQaG90by1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiZ2lnLXVzZXJTdGF0dXMtdXNlclBob3RvXCI+PGltZyBhbHQ9XCJcIiBpZD1cIiR7aWR9X3VzZXJQaG90b1wiIHNyYz1cIiR1c2VyUGhvdG9VUkxcIiAvPjwvZGl2PjxhIGlkPVwiJHtpZH1fc2V0dGluZ3NMaW5rXCIgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1zZXR0aW5nc1wiPiRURVhUKFwic2V0dGluZ3NcIik8L2E+PC9kaXY+J1xyXG5cdFx0XHRdKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcIm5hbWVBbmRQb2ludHNcIixcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLXVzZXJTdGF0dXMtbmFtZUFuZFBvaW50c1wiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1uYW1lXCI+JG5hbWU8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8YSBpZD1cIiR7aWR9X3BvaW50c1wiIGNsYXNzPVwiZ2lnLXVzZXJTdGF0dXMtcG9pbnRzXCI+JFRFWFQoXCJudW1fcG9pbnRzXCIsXCIlbnVtXCIsXCI8c3BhbiBjbGFzcz1cXFxcXCJnaWctdXNlclN0YXR1cy1wb2ludHNWYWx1ZVxcXFxcIj4kcG9pbnRzPC9zcGFuPlwiKTwvYT4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXVzZXJTdGF0dXMtcHJvZ3Jlc3NcIiB0aXRsZT1cIiRURVhUKFwibGV2ZWxfcHJvZ3Jlc3NcIilcIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLXByb2dyZXNzLWZpbGxcIiBzdHlsZT1cIndpZHRoOiRwZXJjZW50JTtcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLXByb2dyZXNzLXBlcmNlbnRcIj4kcGVyY2VudCU8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcclxuXHRcdFx0XSk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoXCJiYWRnZVwiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxhIGNsYXNzPVwiZ2lnLXVzZXJTdGF0dXMtYmFkZ2UtY29udGFpbmVyXCIgaWQ9XCIke2lkfV9iYWRnZVwiPicsXHJcblx0XHRcdFx0XHQnPGltZyBhbHQ9XCJcIiBzcmM9XCIkYmFkZ2VVUkxcIiBpZD1cIiR7aWR9X2JhZGdlSW1nXCIgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1iYWRnZVwiIC8+JyxcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiJHt0ZXh0Q2xhc3NOYW1lfVwiPiRsZXZlbFRpdGxlPC9kaXY+JyxcclxuXHRcdFx0XHQnPC9hPidcclxuXHRcdFx0XSk7XHJcblxyXG4gICAgICAgICAgICB0ZW1wbGF0ZXMuc2V0KFwic2V0dGluZ3NEaWFsb2dcIixcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLXVzZXJTdGF0dXMgZ2lnLXVzZXJTdGF0dXMtc2V0dGluZ3NEaWFsb2dcIj4nLFxyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1zZXR0aW5nc0RpYWxvZy1zZXR0aW5nXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHtpZH1fY2JFbmFibGVOb3RpZmljYXRpb25zXCIgLz48bGFiZWwgZm9yPVwiJHtpZH1fY2JFbmFibGVOb3RpZmljYXRpb25zXCI+JFRFWFQoXCJzaG93X29uX3BhZ2VfYWNoaWV2ZW1lbnRfbm90aWZpY2F0aW9uc1wiKTwvbGFiZWw+PC9kaXY+JyxcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLXVzZXJTdGF0dXMtc2V0dGluZ3NEaWFsb2ctc2V0dGluZ1wiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIiR7aWR9X2NiUHVibGljUHJvZmlsZVwiIC8+PGxhYmVsIGZvcj1cIiR7aWR9X2NiUHVibGljUHJvZmlsZVwiPiRURVhUKFwic2hvd19teV9wcm9maWxlX2FuZF9yYW5raW5nc190b19hbGxfdXNlcnNcIik8L2xhYmVsPjwvZGl2PicsXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLXNldHRpbmdzRGlhbG9nLXNldHRpbmdcIiBpZD1cIiR7aWR9X2F1dG9TaGFyZVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIiR7aWR9X2NiQXV0b1NoYXJlXCIgLz48bGFiZWwgZm9yPVwiJHtpZH1fY2JBdXRvU2hhcmVcIj4kVEVYVChcImF1dG9fc2hhcmVfbXlfYWNoaWV2ZW1lbnRzX3dpdGhfbXlfZnJpZW5kc1wiKTwvbGFiZWw+PC9kaXY+JyxcclxuXHRcdFx0XHRcdCc8YSB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1zZXR0aW5nc0RpYWxvZy1zYXZlQnV0dG9uXCIgb25jbGljaz1cIiRvblNhdmVTZXR0aW5nc1wiIG9ua2V5ZG93bj1cImlmKChldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlKSA9PSAxMykgJG9uU2F2ZVNldHRpbmdzXCI+JFRFWFQoXCJzYXZlXCIpPC9hPicsXHJcblx0XHRcdFx0XHQnPGEgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiZ2lnLXVzZXJTdGF0dXMtc2V0dGluZ3NEaWFsb2ctY2FuY2VsQnV0dG9uXCIgb25jbGljaz1cIiRvbkNhbmNlbFwiIG9ua2V5ZG93bj1cImlmKChldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlKSA9PSAxMykgJG9uQ2FuY2VsXCI+JFRFWFQoXCJjYW5jZWxcIik8L2E+JyxcclxuXHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLXNldHRpbmdzRGlhbG9nLW5vdGVzXCIgaWQ9XCIke2lkfV9ub3Rlc1wiPiRURVhUKFwiaXRfY2FuX3Rha2VfYV9mZXdfbWludXRlc19mb3JfcHJpdmFjeV9zZXR0aW5nc190b191cGRhdGVcIik8L3NwYW4+JyxcclxuXHRcdFx0XHQnPC9kaXY+J1xyXG5cdFx0XHRdKTtcclxuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoXCJzaGFyZUJ1dHRvblwiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1sZXZlbEluZm8tc2hhcmVCdXR0b25cIiBpZD1cIiR7aWR9X3NoYXJlQnV0dG9uXCI+PC9kaXY+J1xyXG5cdFx0XHRdKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcImxldmVsSW5mb0RpYWxvZ1wiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctdXNlclN0YXR1cyBnaWctdXNlclN0YXR1cy1sZXZlbEluZm9cIj4nLFxyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1sZXZlbEluZm8tY2hhbGxlbmdlVGl0bGVcIj4kY2hhbGxlbmdlVGl0bGU8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1sZXZlbEluZm8tY2hhbGxlbmdlRGVzY3JpcHRpb25cIj4kY2hhbGxlbmdlRGVzY3JpcHRpb248L2Rpdj4nLFxyXG5cdFx0XHRcdFx0JyRuZXh0TGV2ZWxJbmZvJyxcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLXNoYXJlQnV0dG9uLWNvbnRhaW5lclwiPiR7c2hhcmVCdXR0b259PC9kaXY+JyxcclxuXHRcdFx0XHQnPC9kaXY+J1xyXG5cdFx0XHRdKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcIm5leHRMZXZlbEluZm9cIixcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFx0Jzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1sZXZlbEluZm8tbmV4dExldmVsXCI+PHRyPicsXHJcblx0XHRcdFx0XHRcdCc8dGQgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQtY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dFwiPicsXHJcblx0XHRcdFx0XHRcdFx0JyRuZXh0TGV2ZWxUZXh0JyxcclxuXHRcdFx0XHRcdFx0JzwvZGl2PjwvdGQ+JyxcclxuXHRcdFx0XHRcdFx0Jzx0ZCBjbGFzcz1cImdpZy11c2VyU3RhdHVzLWxldmVsSW5mby1uZXh0TGV2ZWwtYmFkZ2UtY29udGFpbmVyXCI+PGltZyBhbHQ9XCJcIiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLWxldmVsSW5mby1uZXh0TGV2ZWwtYmFkZ2VcIiBzcmM9XCIkbmV4dExldmVsTG9ja2VkQmFkZ2VVUkxcIiAvPjwvdGQ+JyxcclxuXHRcdFx0XHRcdCc8L3RyPjwvdGFibGU+J1xyXG5cdFx0XHRdKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcInBvaW50c0RpYWxvZ1wiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctdXNlclN0YXR1cyBnaWctdXNlclN0YXR1cy1wb2ludHNEaWFsb2dcIj4nLFxyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctcG9pbnRzRGlhbG9nLXBvaW50c1wiPicsXHJcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLXVzZXJTdGF0dXMtcG9pbnRzRGlhbG9nLXRoaXNXZWVrXCI+JyxcclxuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLXBvaW50c0RpYWxvZy10aGlzV2Vlay1jb250ZW50XCI+JyxcclxuXHRcdFx0XHRcdFx0XHRcdCckVEVYVChcInRoaXNfd2Vla1wiKScsXHJcblx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLXBvaW50c1wiPiRURVhUKFwibnVtX3BvaW50c1wiLFwiJW51bVwiLFwiPHNwYW4gY2xhc3M9XFxcXFwiZ2lnLXVzZXJTdGF0dXMtcG9pbnRzVmFsdWVcXFxcXCI+JHBvaW50czdEYXlzPC9zcGFuPlwiKTwvZGl2PicsXHJcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXHJcblx0XHRcdFx0XHRcdCc8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLXBvaW50c0RpYWxvZy1hbGxUaW1lc1wiPicsXHJcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1wb2ludHNEaWFsb2ctYWxsVGltZXMtY29udGVudFwiPicsXHJcblx0XHRcdFx0XHRcdFx0XHQnJFRFWFQoXCJhbGxfdGltZVwiKScsXHJcblx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLXBvaW50c1wiPiRURVhUKFwibnVtX3BvaW50c1wiLFwiJW51bVwiLFwiPHNwYW4gY2xhc3M9XFxcXFwiZ2lnLXVzZXJTdGF0dXMtcG9pbnRzVmFsdWVcXFxcXCI+JHBvaW50c1RvdGFsPC9zcGFuPlwiKTwvZGl2PicsXHJcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXHJcblx0XHRcdFx0XHRcdCc8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0JzwvZGl2PicsXHJcblx0XHRcdFx0JzwvZGl2PidcclxuXHRcdFx0XSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0Q3NzOiBbXHJcblx0XHRcdCcuZ2lnLXVzZXJTdGF0dXMgKiwgZGl2LmdpZy11c2VyU3RhdHVzLCAuZ2lnLXVzZXJTdGF0dXMgc3BhbiwgLmdpZy11c2VyU3RhdHVzIGE6aG92ZXIsIC5naWctdXNlclN0YXR1cyBhOnZpc2l0ZWQsIC5naWctdXNlclN0YXR1cyBhOmxpbmssIC5naWctdXNlclN0YXR1cyBhOmFjdGl2ZXsnLFxyXG5cdFx0XHQnYm9yZGVyOm5vbmU7IGxpbmUtaGVpZ2h0Om5vcm1hbDtwYWRkaW5nOjBweDttYXJnaW46MHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7d2lkdGg6YXV0bztmbG9hdDpub25lOy1tb3otYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MDsnLFxyXG5cdFx0XHQnZm9udC1mYW1pbHk6YXJpYWw7Zm9udC1zaXplOjEwcHg7Y29sb3I6Izc5Nzk3OTtiYWNrZ3JvdW5kOm5vbmU7dGV4dC1hbGlnbjpsZWZ0O30nLFxyXG5cclxuXHRcdFx0J2Rpdi5naWctdXNlclN0YXR1cy1jb250YWluZXIge3BhZGRpbmc6IDEwcHggMTBweCAzcHggMTBweDtib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO3pvb206MX0nLFxyXG5cdFx0XHQnZGl2LmdpZy11c2VyU3RhdHVzLXVzZXJQaG90by1jb250YWluZXIge2Zsb2F0OmxlZnQ7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmctcmlnaHQ6OXB4O3RleHQtYWxpZ246Y2VudGVyfScsXHJcblx0XHRcdCdkaXYuZ2lnLXVzZXJTdGF0dXMtdXNlclBob3RvIHt3aWR0aDogNjVweDsgaGVpZ2h0OjY1cHg7IG92ZXJmbG93OmhpZGRlbjtib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O3BhZGRpbmc6MnB4O30nLFxyXG5cdFx0XHQnZGl2LmdpZy11c2VyU3RhdHVzLW5hbWVBbmRQb2ludHMge2Zsb2F0OmxlZnQ7b3ZlcmZsb3c6aGlkZGVuO3pvb206MTttYXJnaW4tdG9wOjEycHg7fScsXHJcbiAgICAgICAgICAgICdkaXYuZ2lnLXVzZXJTdGF0dXMtbmFtZUFuZFBvaW50cy13aXRoUHJvZ3Jlc3MgeyBtYXJnaW4tdG9wOjJweDsgfScsXHJcblxyXG5cdFx0XHQnYS5naWctdXNlclN0YXR1cy1iYWRnZS1jb250YWluZXIsIGE6aG92ZXIuZ2lnLXVzZXJTdGF0dXMtYmFkZ2UtY29udGFpbmVyIHtmbG9hdDpyaWdodDsgcGFkZGluZzogNXB4IDAgMCAwO2N1cnNvcjpwb2ludGVyOyB0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo2MHB4O30nLFxyXG5cdFx0XHQnYTpob3Zlci5naWctdXNlclN0YXR1cy1iYWRnZS1jb250YWluZXIgZGl2LmdpZy11c2VyU3RhdHVzLWxldmVsVGl0bGUge3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9JyxcclxuXHRcdFx0J2EuZ2lnLXVzZXJTdGF0dXMtc2V0dGluZ3MsIGE6aG92ZXIuZ2lnLXVzZXJTdGF0dXMtc2V0dGluZ3Mge2ZvbnQtc2l6ZTogMTBweDsgY29sb3I6ICM3OTc5Nzk7IGN1cnNvcjpwb2ludGVyO30nLFxyXG5cdFx0XHQnYTpob3Zlci5naWctdXNlclN0YXR1cy1zZXR0aW5ncyB7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0nLFxyXG5cclxuICAgICAgICAgICAgJ2Rpdi5naWctdXNlclN0YXR1cy1uYW1lIHtwYWRkaW5nLWJvdHRvbTozcHg7Zm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjogIzMxMzEzMTt3aWR0aDoxMDBweDt9JyxcclxuXHRcdFx0J2EuZ2lnLXVzZXJTdGF0dXMtcG9pbnRzLCBhOmhvdmVyLmdpZy11c2VyU3RhdHVzLXBvaW50cywgZGl2LmdpZy11c2VyU3RhdHVzLXBvaW50cyB7Zm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjogIzBCODFDMX0nLFxyXG5cdFx0XHQnYS5naWctdXNlclN0YXR1cy1wb2ludHMge2N1cnNvcjpwb2ludGVyfScsXHJcbiAgICAgICAgICAgICdkaXYuZ2lnLXVzZXJTdGF0dXMtcHJvZ3Jlc3MgeyBtYXJnaW4tdG9wOjVweDtoZWlnaHQ6MThweDt3aWR0aDoxMzBweDtib3JkZXI6MXB4IHNvbGlkICNEN0Q2RDY7Ym9yZGVyLXJhZGl1czoycHg7IH0nLFxyXG4gICAgICAgICAgICAnZGl2LmdpZy11c2VyU3RhdHVzLXByb2dyZXNzLWZpbGwgeyBiYWNrZ3JvdW5kLWNvbG9yOiNFM0UwRTA7aGVpZ2h0OjE4cHg7IH0nLFxyXG4gICAgICAgICAgICAnZGl2LmdpZy11c2VyU3RhdHVzLXByb2dyZXNzLXBlcmNlbnQgeyBtYXJnaW4tdG9wOi0xOHB4O2NvbG9yOiM2NDY0NjQ7Zm9udC1mYW1pbHk6YXJpYWw7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MThweDt0ZXh0LWFsaWduOmNlbnRlcjsgfScsXHJcblxyXG5cdFx0XHQnYTpob3Zlci5naWctdXNlclN0YXR1cy1wb2ludHMge3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9JyxcclxuXHRcdFx0J3NwYW4uZ2lnLXVzZXJTdGF0dXMtcG9pbnRzVmFsdWUge2ZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6ICMwQjgxQzF9JyxcclxuXHRcdFx0J2Rpdi5naWctdXNlclN0YXR1cy1sZXZlbFRpdGxlIHtmb250LXNpemU6IDEycHg7IGNvbG9yOiAjMzEzMTMxOyB0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxMTUlfScsXHJcblx0XHRcdCdkaXYuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxUaXRsZS1sb2NrZWQge2ZvbnQtd2VpZ2h0Om5vcm1hbDsgY29sb3I6I0IwQjBCMH0nLFxyXG5cdFx0XHQnaW1nLmdpZy11c2VyU3RhdHVzLWJhZGdlIHt3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4O3BhZGRpbmctYm90dG9tOjRweH0nLFxyXG5cdFx0XHQnZGl2LmdpZy11c2VyU3RhdHVzLXNldHRpbmdzRGlhbG9nIHtwYWRkaW5nLXRvcDogMTNweDtvdmVyZmxvdzpoaWRkZW47fScsXHJcblx0XHRcdCdkaXYuZ2lnLXVzZXJTdGF0dXMtc2V0dGluZ3NEaWFsb2ctc2V0dGluZyB7cGFkZGluZy1ib3R0b206NXB4O2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiMzMTMxMzF9JyxcclxuXHRcdFx0J2Rpdi5naWctdXNlclN0YXR1cy1zZXR0aW5nc0RpYWxvZy1zZXR0aW5nLWRpc2FibGVkIHtjb2xvcjojQjBCMEIwfScsXHJcblx0XHRcdC8vJ2Rpdi5naWctdXNlclN0YXR1cy1zZXR0aW5nc0RpYWxvZy1zZXR0aW5nLXRleHQge30nLFxyXG5cdFx0XHQnZGl2LmdpZy11c2VyU3RhdHVzLXNldHRpbmdzRGlhbG9nLXNldHRpbmcgaW5wdXQge21hcmdpbi1yaWdodDogNXB4OyBmbG9hdDpsZWZ0fScsXHJcblx0XHRcdCdhLmdpZy11c2VyU3RhdHVzLXNldHRpbmdzRGlhbG9nLXNhdmVCdXR0b24sYTpob3Zlci5naWctdXNlclN0YXR1cy1zZXR0aW5nc0RpYWxvZy1zYXZlQnV0dG9uIHtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXdlaWdodDpib2xkO2JvcmRlci1yYWRpdXM6IDNweDsgY29sb3I6IzMxMzEzMTtjdXJzb3I6cG9pbnRlcjttYXJnaW4tdG9wOjEwcHg7JyxcclxuXHRcdFx0XHQnZm9udC1zaXplOiAxMnB4O3BhZGRpbmc6IDNweCAxMHB4OyBib3JkZXI6IDFweCBzb2xpZCAjQzVDN0M3O2Zsb2F0OnJpZ2h0O2Rpc3BsYXk6dGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246bWlkZGxlOyB0ZXh0LWFsaWduOmNlbnRlcjsnLFxyXG5cdFx0XHRcdCdib3gtc2hhZG93OjAgMCAycHggUkdCQSgwLDAsMCwwLjE1KTstd2Via2l0LWJveC1zaGFkb3c6MCAwIDJweCBSR0JBKDAsMCwwLDAuMTUpOy1tb3otYm94LXNoYWRvdzowIDAgMnB4IFJHQkEoMCwwLDAsMC4xNSk7fScsXHJcblx0XHRcdCdhLmdpZy11c2VyU3RhdHVzLXNldHRpbmdzRGlhbG9nLXNhdmVCdXR0b24ge2JhY2tncm91bmQ6ICNGRkZGRkY7IGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIjRkZGRkZGXCIsIGVuZENvbG9yc3RyPVwiI0VBRUJFQlwiKTsnLFxyXG5cdFx0XHRcdCdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNGRkZGRkYpLCB0bygjRUFFQkVCKSk7JyxcclxuXHRcdFx0XHQnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI0ZGRkZGRiwgICNFQUVCRUIpfScsXHJcblx0XHRcdCdhOmhvdmVyLmdpZy11c2VyU3RhdHVzLXNldHRpbmdzRGlhbG9nLXNhdmVCdXR0b24geycsXHJcblx0XHRcdFx0J2JhY2tncm91bmQ6ICNFQUVCRUI7IGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIjRUFFQkVCXCIsIGVuZENvbG9yc3RyPVwiI0ZGRkZGRlwiKTsnLFxyXG5cdFx0XHRcdCdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNFQUVCRUIpLCB0bygjRkZGRkZGKSk7JyxcclxuXHRcdFx0XHQnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI0VBRUJFQiwgICNGRkZGRkYpfScsXHJcblxyXG5cdFx0XHQnYS5naWctdXNlclN0YXR1cy1zZXR0aW5nc0RpYWxvZy1jYW5jZWxCdXR0b24sYTpob3Zlci5naWctdXNlclN0YXR1cy1zZXR0aW5nc0RpYWxvZy1jYW5jZWxCdXR0b24ge3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6IDNweDsgY29sb3I6IzMxMzEzMTtjdXJzb3I6cG9pbnRlcjttYXJnaW4tdG9wOjEwcHg7bWFyZ2luLXJpZ2h0OjEwcHg7JyxcclxuXHRcdFx0XHQnZm9udC1zaXplOiAxMnB4O3BhZGRpbmc6IDNweCAxMHB4OyBib3JkZXI6IDFweCBzb2xpZCAjQzVDN0M3O2Zsb2F0OnJpZ2h0O2Rpc3BsYXk6dGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246bWlkZGxlOyB0ZXh0LWFsaWduOmNlbnRlcjsnLFxyXG5cdFx0XHRcdCdib3gtc2hhZG93OjAgMCAycHggUkdCQSgwLDAsMCwwLjE1KTstd2Via2l0LWJveC1zaGFkb3c6MCAwIDJweCBSR0JBKDAsMCwwLDAuMTUpOy1tb3otYm94LXNoYWRvdzowIDAgMnB4IFJHQkEoMCwwLDAsMC4xNSk7fScsXHJcblx0XHRcdCdhLmdpZy11c2VyU3RhdHVzLXNldHRpbmdzRGlhbG9nLWNhbmNlbEJ1dHRvbiB7YmFja2dyb3VuZDogI0ZGRkZGRjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNGRkZGRkZcIiwgZW5kQ29sb3JzdHI9XCIjRUFFQkVCXCIpOycsXHJcblx0XHRcdFx0J2JhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI0ZGRkZGRiksIHRvKCNFQUVCRUIpKTsnLFxyXG5cdFx0XHRcdCdiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjRkZGRkZGLCAgI0VBRUJFQil9JyxcclxuXHRcdFx0J2E6aG92ZXIuZ2lnLXVzZXJTdGF0dXMtc2V0dGluZ3NEaWFsb2ctY2FuY2VsQnV0dG9uIHsnLFxyXG5cdFx0XHRcdCdiYWNrZ3JvdW5kOiAjRUFFQkVCOyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiI0VBRUJFQlwiLCBlbmRDb2xvcnN0cj1cIiNGRkZGRkZcIik7JyxcclxuXHRcdFx0XHQnYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjRUFFQkVCKSwgdG8oI0ZGRkZGRikpOycsXHJcblx0XHRcdFx0J2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNFQUVCRUIsICAjRkZGRkZGKX0nLFxyXG5cclxuXHJcblx0XHRcdCdkaXYuZ2lnLXVzZXJTdGF0dXMtcG9pbnRzRGlhbG9nIHtwYWRkaW5nLXRvcDogN3B4O30nLFxyXG5cdFx0XHQnZGl2LmdpZy1wb2ludHNEaWFsb2ctcG9pbnRzIHttaW4td2lkdGg6MjYwcHg7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6YmxvY2s7em9vbToxO30nLFxyXG5cdFx0XHQnZGl2LmdpZy11c2VyU3RhdHVzLXBvaW50c0RpYWxvZy10aGlzV2VlaywgZGl2LmdpZy11c2VyU3RhdHVzLXBvaW50c0RpYWxvZy1hbGxUaW1lc3ttaW4td2lkdGg6MTIwcHg7YmFja2dyb3VuZC1jb2xvcjojRkZGRkZGOyBib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O3BhZGRpbmc6IDFweDt9JyxcclxuXHRcdFx0J2Rpdi5naWctdXNlclN0YXR1cy1wb2ludHNEaWFsb2ctdGhpc1dlZWsge2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjRweDt9JyxcclxuXHRcdFx0J2Rpdi5naWctdXNlclN0YXR1cy1wb2ludHNEaWFsb2ctYWxsVGltZXMge2Zsb2F0OmxlZnR9JyxcclxuXHRcdFx0J2Rpdi5naWctdXNlclN0YXR1cy1wb2ludHNEaWFsb2ctdGhpc1dlZWstY29udGVudCwgZGl2LmdpZy11c2VyU3RhdHVzLXBvaW50c0RpYWxvZy1hbGxUaW1lcy1jb250ZW50IHtwYWRkaW5nOiA3cHggMTVweDtiYWNrZ3JvdW5kLWNvbG9yOiNGOUY5Rjk7Zm9udC1zaXplOjEycHg7IGZvbnQtd2VpZ2h0OmJvbGQ7IGNvbG9yOiMzMTMxMzF9JyxcclxuXHJcblx0XHRcdCd0YWJsZS5naWctdXNlclN0YXR1cy1sZXZlbEluZm8tbmV4dExldmVsIHttYXJnaW4tYm90dG9tOiAxNXB4O3dpZHRoOjEwMCV9JyxcclxuXHRcdFx0J2Rpdi5naWctdXNlclN0YXR1cy1sZXZlbEluZm8ge3BhZGRpbmc6IDEycHggMCA1cHggMDt9JyxcclxuXHJcblx0XHRcdCdkaXYuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLW5leHRMZXZlbC10ZXh0IHttYXJnaW4tcmlnaHQ6IDEwcHg7d2lkdGg6MjAycHg7fScsXHJcblx0XHRcdCdkaXYuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLW5leHRMZXZlbC10ZXh0LCBzcGFuLmdpZy11c2VyU3RhdHVzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dCB7Zm9udC1zaXplOjEycHg7IGNvbG9yOiMzMTMxMzE7fScsXHJcblx0XHRcdCdzcGFuLmdpZy11c2VyU3RhdHVzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dC1hY2hpZXZlbWVudHNMZWZ0IHtmb250LXdlaWdodDpib2xkO30nLFxyXG5cdFx0XHQnc3Bhbi5naWctdXNlclN0YXR1cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQtbmV4dExldmVsVGl0bGUge2ZvbnQtd2VpZ2h0OmJvbGQ7fScsXHJcblx0XHRcdCdpbWcuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLW5leHRMZXZlbC1iYWRnZXt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O30nLFxyXG5cdFx0XHQndGQuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLW5leHRMZXZlbC1iYWRnZS1jb250YWluZXIge3ZlcnRpY2FsLWFsaWduOnRvcH0nLFxyXG5cdFx0XHQndGQuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLW5leHRMZXZlbC10ZXh0LWNvbnRhaW5lciB7dmVydGljYWwtYWxpZ246bWlkZGxlfScsXHJcblx0XHRcdCdkaXYuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLXNoYXJlQnV0dG9uIHttYXJnaW4tbGVmdDphdXRvO2N1cnNvcjpwb2ludGVyO3dpZHRoOjcwcHg7aGVpZ2h0OiAxOHB4O2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9zaGFyZUJ1dHRvbi5wbmcnKSArICdcXCcpfScsXHJcblx0XHRcdCdkaXYuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLXNoYXJlQnV0dG9uLWNvbnRhaW5lciB7dGV4dC1hbGlnbjpyaWdodDt9JyxcclxuXHRcdFx0J2Rpdi5naWctdXNlclN0YXR1cy1sZXZlbEluZm8tY2hhbGxlbmdlRGVzY3JpcHRpb24ge2ZvbnQtc2l6ZTogMTJweDtjb2xvcjojMDAwO3BhZGRpbmctYm90dG9tOjE1cHg7cGFkZGluZy1yaWdodDo1cHg7fScsXHJcblx0XHRcdCdkaXYuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLWNoYWxsZW5nZVRpdGxlIHtmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6IDEycHg7Y29sb3I6IzAwMH0nLFxyXG5cclxuXHRcdFx0J3NwYW4uZ2lnLXVzZXJTdGF0dXMtc2V0dGluZ3NEaWFsb2ctbm90ZXMge2ZvbnQtc2l6ZTo5cHg7ZmxvYXQ6bGVmdDttYXJnaW4tdG9wOjdweDt2aXNpYmlsaXR5OmhpZGRlbjt3aWR0aDoxNTBweDt9JyxcclxuXHJcbiAgICAgICAgICAgICdkaXYuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLW5leHRMZXZlbC10ZXh0IGEuZ2lnLXVzZXJTdGF0dXMtbGV2ZWxJbmZvLW5leHRMZXZlbC1saW5rIHsgZm9udC1zaXplOjEycHg7Y29sb3I6IzNlNTlmZjtjdXJzb3I6cG9pbnRlcjt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lOyB9JyxcclxuICAgICAgICAgICAgJ2Rpdi5naWctdXNlclN0YXR1cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQgYS5naWctdXNlclN0YXR1cy1sZXZlbEluZm8tbmV4dExldmVsLWxpbmsgKiB7IGNvbG9yOiMzZTU5ZmY7Y3Vyc29yOnBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTsgfSdcclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpIHsgLy9xdWlya3MgbW9kZSAtIHdpZHRoL2hlaWdodCBpbmNsdWRpbmcgcGFkZGluZ3MgYW5kIGJvcmRlcnNcclxuICAgICAgICBwcml2YXRlU2NvcGUuZGVmYXVsdENzcy5wdXNoKFtcclxuXHRcdFx0J2Rpdi5naWctdXNlclN0YXR1cy11c2VyUGhvdG8ge3dpZHRoOiA3MXB4OyBoZWlnaHQ6NzFweH0nXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmJhY2tDb21wYXQpIHtcclxuICAgICAgICBwcml2YXRlU2NvcGUuZGVmYXVsdENzcy5wdXNoKFtcclxuXHRcdFx0J2E6aG92ZXIuZ2lnLXVzZXJTdGF0dXMtcG9pbnRzIHt0ZXh0LWRlY29yYXRpb246bm9uZX0nIC8vIHVuZGVybGluZSB3aXRoIGRpZmZlcmVudCBmb250LXNpemVzIGxvb2tzIHVnbHkgaW4gYmFja0NvbXBhdCBtb2RlXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU3KSB7XHJcbiAgICAgICAgcHJpdmF0ZVNjb3BlLmRlZmF1bHRDc3MucHVzaChbXHJcblx0XHRcdCdkaXYuZ2lnLXVzZXJTdGF0dXMtcG9pbnRzRGlhbG9nLXRoaXNXZWVrLCBkaXYuZ2lnLXVzZXJTdGF0dXMtcG9pbnRzRGlhbG9nLWFsbFRpbWVze3dpZHRoOjEyMHB4fSdcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVTY29wZS51c2VyU3RhdHVzUGx1Z2luLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVzID0gcHJpdmF0ZVNjb3BlLmNyZWF0ZURlZmF1bHRUZW1wbGF0ZXMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3AuY3NzUHJlZml4IHx8ICFwcml2YXRlU2NvcGUuYWRkZWRDU1MpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5hZGRDU1MocHJpdmF0ZVNjb3BlLmRlZmF1bHRDc3MsIHRoaXMuX3AuY3NzUHJlZml4KTtcclxuICAgICAgICAgICAgICAgIHByaXZhdGVTY29wZS5hZGRlZENTUyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2hhbGxlbmdlKCk7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5nZXRVc2VySW5mbyh0aGlzLl9jLCB7IGluY2x1ZGVBbGxJZGVudGl0aWVzOiB0cnVlLCBncm91cDogJ2dtU2V0dGluZ3MnLCBjYWxsYmFjazogZnVuY3Rpb24gKGUpIHsgVGhpcy5hZnRlckdldEluZm8oZSkgfSB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmblJlZnJlc2ggPSBmdW5jdGlvbiAoZSkgeyBUaGlzLnJlZnJlc2goZSkgfTtcclxuICAgICAgICAgICAgdmFyIGNhbGxOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAoKSB7IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgVGhpcy5nZXRDaGFsbGVuZ2UodHJ1ZSkgfSwgMzAwMCkgfTtcclxuICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLmFkZEV2ZW50SGFuZGxlcnMoeyBsaXN0ZW5lclR5cGU6ICdjb21wb25lbnQnIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uTG9nb3V0OiBmblJlZnJlc2gsXHJcbiAgICAgICAgICAgICAgICBvbkxvZ2luOiBmblJlZnJlc2hcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5hZGRNYXAoe1xyXG4gICAgICAgICAgICBkZWZhdWx0TWV0aG9kOiBjYWxsTm90aWZpY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRNYXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGV2ZW50czogXCJzZW5kRG9uZSxyZWFjdGlvbkNsaWNrZWQsY29tbWVudFN1Ym1pdHRlZCxjb21tZW50Vm90ZWQsbG9naW4sY29ubmVjdGlvbkFkZGVkLGFjdGlvbk5vdGlmaWVkXCIsIGFyZ3M6IFtdIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5hZGRFdmVudEhhbmRsZXJzKHsgbGlzdGVuZXJUeXBlOiAnY29tcG9uZW50JyB9LCB7XHJcbiAgICAgICAgICAgICAgICBvbkFjdGlvbk5vdGlmaWVkOiBjYWxsTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGV4dDogZnVuY3Rpb24gKHRleHRLZXksIHJlcGxhY2VTdHIsIHdpdGhTdHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnBsdWdpblV0aWxzLmxhbmcuZ2V0TG9jYWxpemVkVGV4dCgnZ2lneWEuc2VydmljZXMuZ20ucGx1Z2lucy51c2VyU3RhdHVzLmpzJywgdGV4dEtleSwgdGhpcy5fcC5sYW5nLCByZXBsYWNlU3RyLCB3aXRoU3RyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldENoYWxsZW5nZTogZnVuY3Rpb24gKGhpZGVMb2FkZXIpIHtcclxuICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoIWhpZGVMb2FkZXIpIGdpZ3lhLmdsb2JhbC5zaG93TG9hZGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQpLCAnZ2lnLXVzZXJTdGF0dXMgZ2lnLXVzZXJTdGF0dXMtY29udGFpbmVyJywgdGhpcy5nZXRDYW52YXNTaXplKCkuaCk7XHJcbiAgICAgICAgICAgIHZhciBjaGFsbGVuZ2UgPSB0aGlzLl9wLmNoYWxsZW5nZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9wLmNoYWxsZW5nZSkgY2hhbGxlbmdlID0gJ19kZWZhdWx0JztcclxuICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuZ20uZ2V0Q2hhbGxlbmdlU3RhdHVzKHRoaXMuX2MsIHsgaW5jbHVkZUNoYWxsZW5nZXM6IGNoYWxsZW5nZSwgZGV0YWlsczogJ2Z1bGwnLCBjYWxsYmFjazogZnVuY3Rpb24gKGUpIHsgVGhpcy5hZnRlckdldENoYWxsZW5nZShlKSB9IH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUudXNlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gZS51c2VyO1xyXG4gICAgICAgICAgICAgICAgLy9naWd5YS5nbG9iYWwuc2hvd0xvYWRlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKSwgJ2dpZy11c2VyU3RhdHVzLWNvbnRhaW5lcicsIHRoaXMuZ2V0Q2FudmFzU2l6ZSgpLmgpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmdldENoYWxsZW5nZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyR2V0SW5mbzogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUuZXJyb3JDb2RlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJyb2FkY2FzdGVkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hFcnJvckZyb21SZXNwb25zZSh0aGlzLl9wLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdGVkRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nbVNldHRpbmdzID0gZS5zZXR0aW5ncztcclxuICAgICAgICAgICAgdGhpcy51c2VyID0gZS51c2VyO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyR2V0Q2hhbGxlbmdlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5lcnJvckNvZGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYnJvYWRjYXN0ZWRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKHRoaXMuX3AsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0ZWRFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS5hY2hpZXZlbWVudHMgJiYgZS5hY2hpZXZlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFsbGVuZ2UgPSBlLmFjaGlldmVtZW50c1swXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbGxlbmdlLnRleHRDbGFzc05hbWUgPSAnZ2lnLXVzZXJTdGF0dXMtbGV2ZWxUaXRsZSc7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFsbGVuZ2UubGV2ZWwgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbGxlbmdlLmJhZGdlVVJMID0gZ2lneWEuZ2xvYmFsLmdldFBob3RvVVJMKHRoaXMuY2hhbGxlbmdlLm5leHRMZXZlbExvY2tlZEJhZGdlVVJMLCBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9Mb2NrZWRCYWRnZS5wbmcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFsbGVuZ2UubGV2ZWxUaXRsZSA9IHRoaXMuY2hhbGxlbmdlLm5leHRMZXZlbFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbGxlbmdlLmxldmVsRGVzY3JpcHRpb24gPSB0aGlzLmNoYWxsZW5nZS5uZXh0TGV2ZWxEZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYWxsZW5nZS50ZXh0Q2xhc3NOYW1lID0gJ2dpZy11c2VyU3RhdHVzLWxldmVsVGl0bGUgZ2lnLXVzZXJTdGF0dXMtbGV2ZWxUaXRsZS1sb2NrZWQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRXJyb3JGcm9tUmVzcG9uc2UodGhpcy5fcCwgeyBlcnJvckNvZGU6IDQwMDA5NiwgZXJyb3JNZXNzYWdlOiAnTm90IHN1cHBvcnRlZCAtIENoYWxsZW5nZSBkb2VzblxcJ3QgZXhpc3QnLCBzdGF0dXNNZXNzYWdlOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbGxlbmdlID0geyBlbXB0eTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDYW52YXNTaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgVEVYVDogZ2lneWEudXRpbHMuZGVsZWdhdGUuY3JlYXRlKHRoaXMsIHRoaXMuZ2V0VGV4dCksXHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5fZWxpZCxcclxuICAgICAgICAgICAgICAgIHBvaW50czogMCxcclxuICAgICAgICAgICAgICAgIGxldmVsVGl0bGU6ICdXJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdXJyxcclxuICAgICAgICAgICAgICAgIGJhZGdlVVJMOiAnJyxcclxuICAgICAgICAgICAgICAgIHVzZXJQaG90b1VSTDogJycsXHJcblxyXG4gICAgICAgICAgICAgICAgdXNlclBob3RvOiB0aGlzLnRlbXBsYXRlcy5nZXQoJ3VzZXJQaG90bycpLFxyXG4gICAgICAgICAgICAgICAgbmFtZUFuZFBvaW50czogdGhpcy50ZW1wbGF0ZXMuZ2V0KCduYW1lQW5kUG9pbnRzJyksXHJcbiAgICAgICAgICAgICAgICBiYWRnZTogdGhpcy50ZW1wbGF0ZXMuZ2V0KCdiYWRnZScpLFxyXG4gICAgICAgICAgICAgICAgdGV4dENsYXNzTmFtZTogJ2dpZy11c2VyU3RhdHVzLWxldmVsVGl0bGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzLmdldCgndXNlclN0YXR1c0NhbnZhcycpO1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgaXRlbSk7XHJcbiAgICAgICAgICAgIHZhciBib3JkZXJzQW5kUGFkZGluZyA9IGdpZ3lhLmdsb2JhbC5nZXRCb3JkZXJzQW5kUGFkZGluZ3MoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBoID0gY29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgdmFyIHcgPSBjb250YWluZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIGlmICghZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpIGggLT0gZ2lneWEuZ2xvYmFsLmdldENsYXNzQm9yZGVyc0FuZFBhZGRpbmdzKCdnaWctdXNlclN0YXR1cy1jb250YWluZXInKS5oO1xyXG4gICAgICAgICAgICByZXR1cm4geyB3OiB3LCBoOiBoIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRyYXc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlciAmJiB0aGlzLmNoYWxsZW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkZW50aXR5ID0gdGhpcy51c2VyO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXIuaXNMb2dnZWRJbiB8fCB0aGlzLmNoYWxsZW5nZS5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFRFWFQ6IGdpZ3lhLnV0aWxzLmRlbGVnYXRlLmNyZWF0ZSh0aGlzLCB0aGlzLmdldFRleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9lbGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5jaGFsbGVuZ2UucG9pbnRzQ3VycmVudCxcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbFRpdGxlOiB0aGlzLmNoYWxsZW5nZS5sZXZlbFRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGlkZW50aXR5Lm5pY2tuYW1lLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2VVUkw6IGdpZ3lhLmdsb2JhbC5nZXRQaG90b1VSTCh0aGlzLmNoYWxsZW5nZS5iYWRnZVVSTCksXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclBob3RvVVJMOiBnaWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwoaWRlbnRpdHkudGh1bWJuYWlsVVJMID8gaWRlbnRpdHkudGh1bWJuYWlsVVJMIDogaWRlbnRpdHkucGhvdG9VUkwpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ6IHRoaXMuZ2V0QWN0aW9uUGVyY2VudCgpLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1c2VyUGhvdG86IHRoaXMudGVtcGxhdGVzLmdldCgndXNlclBob3RvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZUFuZFBvaW50czogdGhpcy50ZW1wbGF0ZXMuZ2V0KCduYW1lQW5kUG9pbnRzJyksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2U6IHRoaXMudGVtcGxhdGVzLmdldCgnYmFkZ2UnKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q2xhc3NOYW1lOiB0aGlzLmNoYWxsZW5nZS50ZXh0Q2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS51c2VyUGhvdG9VUkwgfHwgaXRlbS51c2VyUGhvdG9VUkwgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnVzZXJQaG90b1VSTCA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2dtL1VzZXIucG5nJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMuZ2V0KCd1c2VyU3RhdHVzQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKS5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGVyY2VudCA9PSAtMSB8fCB0aGlzLl9wLmhpZGVBY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyUHJvZ3Jlc3MgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQpLCAnZ2lnLXVzZXJTdGF0dXMtcHJvZ3Jlc3MnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyUHJvZ3Jlc3MubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJQcm9ncmVzc1swXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyQ29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKSwgJ2dpZy11c2VyU3RhdHVzLW5hbWVBbmRQb2ludHMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyQ29udGFpbmVyLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChhckNvbnRhaW5lclswXSwgJ2dpZy11c2VyU3RhdHVzLW5hbWVBbmRQb2ludHMtd2l0aFByb2dyZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNoYWxsZW5nZS5wb2ludHNDdXJyZW50ID09ICd1bmRlZmluZWQnIHx8IHRoaXMuX3AuaGlkZVBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhclBvaW50cyA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCksICdnaWctdXNlclN0YXR1cy1wb2ludHMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyUG9pbnRzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyUG9pbnRzWzBdLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRpdkJhZGdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCArICdfYmFkZ2UnKTtcclxuICAgICAgICAgICAgICAgIGRpdkJhZGdlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgZGl2QmFkZ2Uuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3ByZXNlbnRhdGlvbicpOyAvLyBEbyBub3QgcmVhZCBhcyBcImxpbmtcIiBiZWNhdXNlIGl0IGRvZXMgbm90IGxpbmsgYW55d2hlcmUgYW5kIGNsaWNraW5nIGl0IGRvZXMgbm90aGluZy5cclxuICAgICAgICAgICAgICAgIGRpdkJhZGdlLm9uZm9jdXMgPSBmdW5jdGlvbiAoKSB7IFRoaXMuc2hvd0xldmVsSW5mb0J1YmJsZShkaXZCYWRnZSk7IH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2UG9pbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCArICdfcG9pbnRzJyk7XHJcbiAgICAgICAgICAgICAgICBkaXZQb2ludHMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XHJcbiAgICAgICAgICAgICAgICBkaXZQb2ludHMuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3ByZXNlbnRhdGlvbicpOyAvLyBEbyBub3QgcmVhZCBhcyBcImxpbmtcIiBiZWNhdXNlIGl0IGRvZXMgbm90IGxpbmsgYW55d2hlcmUgYW5kIGNsaWNraW5nIGl0IGRvZXMgbm90aGluZy5cclxuICAgICAgICAgICAgICAgIGRpdlBvaW50cy5vbmZvY3VzID0gZnVuY3Rpb24gKCkgeyBUaGlzLnNob3dQb2ludHNCdWJibGUoZGl2UG9pbnRzKTsgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkaXZTZXR0aW5nc0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkICsgJ19zZXR0aW5nc0xpbmsnKTtcclxuICAgICAgICAgICAgICAgIGRpdlNldHRpbmdzTGluay5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgICAgICAgICAgICAgIGRpdlNldHRpbmdzTGluay5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBkaXZTZXR0aW5nc0xpbmsub25jbGljayA9IGZ1bmN0aW9uICgpIHsgVGhpcy5zaG93U2V0dGluZ3NCdWJibGUoZGl2U2V0dGluZ3NMaW5rKSB9XHJcbiAgICAgICAgICAgICAgICBkaXZTZXR0aW5nc0xpbmsub25rZXlkb3duID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKChlLndoaWNoIHx8IGUua2V5Q29kZSkgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5zaG93U2V0dGluZ3NCdWJibGUoZGl2U2V0dGluZ3NMaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGltZ1VzZXJQaG90byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQgKyAnX3VzZXJQaG90bycpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLnNjYWxlSW1hZ2VUb0NvbnRhaW5lcihpbWdVc2VyUGhvdG8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpcmVkTG9hZEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlZExvYWRFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnbG9hZCcsIGNvbnRhaW5lcklEOiB0aGlzLl9wWydjb250YWluZXJJRCddIH0sIHRoaXMuX3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRBY3Rpb25QZXJjZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1aXJlZEFjdGlvbnMgPSB0aGlzLmNoYWxsZW5nZS5hY3Rpb25TdGF0dXM7XHJcbiAgICAgICAgICAgIGlmICghcmVxdWlyZWRBY3Rpb25zIHx8IHJlcXVpcmVkQWN0aW9ucy5sZW5ndGggPT0gMCkgcmV0dXJuIC0xO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcXVpcmVkU3VtID0gMDtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcXVpcmVkQWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVpcmVkID0gcGFyc2VJbnQocmVxdWlyZWRBY3Rpb25zW2ldLnJlcXVpcmVkKTtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkU3VtICs9IHJlcXVpcmVkO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN1bSArPSBNYXRoLm1pbihwYXJzZUludChyZXF1aXJlZEFjdGlvbnNbaV0uY29tcGxldGVkKSwgcmVxdWlyZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoY3VycmVudFN1bSAvIHJlcXVpcmVkU3VtKSAqIDEwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93UG9pbnRzQnViYmxlOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUodGhpcy5jaGFsbGVuZ2UpO1xyXG4gICAgICAgICAgICBpdGVtLmlkID0gdGhpcy5fZWxpZCArICdfcG9pbnRzQnViYmxlJztcclxuICAgICAgICAgICAgaXRlbS5URVhUID0gZ2lneWEudXRpbHMuZGVsZWdhdGUuY3JlYXRlKHRoaXMsIHRoaXMuZ2V0VGV4dCk7XHJcbiAgICAgICAgICAgIHZhciBodG1sUG9pbnRzID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy50ZW1wbGF0ZXMuZ2V0KCdwb2ludHNEaWFsb2cnKSwgaXRlbSk7XHJcbiAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5wdXRHTUJhbGxvb25OZXh0VG8oZWwsIGh0bWxQb2ludHMsIHRoaXMuZ2V0VGV4dCgnbXlfcG9pbnRzJyksIG51bGwsIG51bGwsIG51bGwsIHRoaXMuX2VsaWQgKyAnX3BvaW50cycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0xldmVsSW5mb0J1YmJsZTogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHRoaXMuY2hhbGxlbmdlKTtcclxuICAgICAgICAgICAgaXRlbS5URVhUID0gZ2lneWEudXRpbHMuZGVsZWdhdGUuY3JlYXRlKHRoaXMsIHRoaXMuZ2V0VGV4dCk7XHJcbiAgICAgICAgICAgIGl0ZW0uaWQgPSB0aGlzLl9lbGlkICsgJ19kZXRhaWxzQnViYmxlJztcclxuICAgICAgICAgICAgaXRlbS5zaGFyZUJ1dHRvbiA9ICcnO1xyXG4gICAgICAgICAgICBpdGVtLm5leHRMZXZlbEluZm8gPSAnJztcclxuICAgICAgICAgICAgaXRlbS5uZXh0TGV2ZWxUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmxldmVsID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zaGFyZUJ1dHRvbiA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMudGVtcGxhdGVzLmdldCgnc2hhcmVCdXR0b24nKSwgaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5uZXh0TGV2ZWxMb2NrZWRCYWRnZVVSTCA9IGdpZ3lhLmdsb2JhbC5nZXRQaG90b1VSTChpdGVtLm5leHRMZXZlbExvY2tlZEJhZGdlVVJMLCBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9Mb2NrZWRCYWRnZS5wbmcnKSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm5leHRMZXZlbFRpdGxlICYmIGl0ZW0uYWN0aW9uU3RhdHVzICYmIGl0ZW0uYWN0aW9uU3RhdHVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5leHRMZXZlbEFjdGlvblVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubmV4dExldmVsSW5mbyA9IHRoaXMudGVtcGxhdGVzLmdldCgnbmV4dExldmVsSW5mbycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubmV4dExldmVsVGV4dCA9ICgnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJnaWctdXNlclN0YXR1cy1sZXZlbEluZm8tbmV4dExldmVsLWxpbmtcIiBocmVmPVwiJG5leHRMZXZlbEFjdGlvblVSTFwiIGFsdD1cIlwiPicgKyB0aGlzLmdldFRleHQoJ2xlYXJuX2hvd190b191bmxvY2tfdGhlX2xldmVsdGl0bGVfYmFkZ2UnKSArICc8L2E+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclbGV2ZWx0aXRsZScsICc8c3BhbiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dCBnaWctdXNlclN0YXR1cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQtbmV4dExldmVsVGl0bGVcIj4kbmV4dExldmVsVGl0bGU8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5uZXh0TGV2ZWxUaXRsZSAmJiB0eXBlb2YgaXRlbS5wb2ludHNTdGF0dXMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5leHRMZXZlbEluZm8gPSB0aGlzLnRlbXBsYXRlcy5nZXQoJ25leHRMZXZlbEluZm8nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVxdWlyZWRBY2hpZXZlbWVudCA9IHRoaXMuZ2V0VGV4dChpdGVtLnJlcXVpcmVkQWNoaWV2ZW1lbnQpIHx8IGl0ZW0ucmVxdWlyZWRBY2hpZXZlbWVudDtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubmV4dExldmVsVGV4dCA9IHRoaXMuZ2V0VGV4dCgnbnVtX21vcmVfYWNoaWV2ZW1lbnRfdG9fdW5sb2NrX2xldmVsdGl0bGVfbGV2ZWwnLCAnJW51bScsICc8c3BhbiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dCBnaWctdXNlclN0YXR1cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQtYWNoaWV2ZW1lbnRzTGVmdFwiPiRhY2hpZXZlbWVudHNUb05leHRMZXZlbDwvc3Bhbj4nKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCclYWNoaWV2ZW1lbnQnLCAnJHJlcXVpcmVkQWNoaWV2ZW1lbnQnKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCclbGV2ZWx0aXRsZScsICc8c3BhbiBjbGFzcz1cImdpZy11c2VyU3RhdHVzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dCBnaWctdXNlclN0YXR1cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQtbmV4dExldmVsVGl0bGVcIj4kbmV4dExldmVsVGl0bGU8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBodG1sUG9pbnRzID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy50ZW1wbGF0ZXMuZ2V0KCdsZXZlbEluZm9EaWFsb2cnKSwgaXRlbSk7XHJcbiAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5wdXRHTUJhbGxvb25OZXh0VG8oZWwsIGh0bWxQb2ludHMsIGl0ZW0ubGV2ZWxUaXRsZSwgMjUyLCBudWxsLCBudWxsLCB0aGlzLl9lbGlkICsgJ19sZXZlbEluZm8nKTtcclxuICAgICAgICAgICAgdmFyIGJhZGdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCArICdfYmFkZ2UnKTtcclxuICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhZGdlICYmIHRoaXMuY2hhbGxlbmdlLm5leHRMZXZlbEFjdGlvblVSTCkge1xyXG4gICAgICAgICAgICAgICAgYmFkZ2UuaHJlZiA9IFRoaXMuY2hhbGxlbmdlLm5leHRMZXZlbEFjdGlvblVSTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc2hhcmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkICsgJ19zaGFyZUJ1dHRvbicpO1xyXG4gICAgICAgICAgICBpZiAoc2hhcmVCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHNoYXJlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcy5zaGFyZUJ1dHRvbkNsaWNrZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5nbG9iYWwucmVtb3ZlR01CYWxsb29uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNoYXJlQnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdXNlckFjdGlvbiA9IHRoaXMuZ2V0VXNlckFjdGlvbih0aGlzLmNoYWxsZW5nZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB0aGlzLl9wLnNoYXJlUGFyYW1zID8gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHRoaXMuX3Auc2hhcmVQYXJhbXMsIHRydWUsIHRydWUpIDoge31cclxuICAgICAgICAgICAgcGFyYW1zLnVzZXJBY3Rpb24gPSB1c2VyQWN0aW9uO1xyXG4gICAgICAgICAgICBwYXJhbXMuY29udGFpbmVySUQgPSAnJztcclxuICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnNob3dTaGFyZVVJKHRoaXMuX2MsIHBhcmFtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRVc2VyQWN0aW9uOiBmdW5jdGlvbiAoY2hhbGxlbmdlLCBjYW5Vc2VTaGFyZVBhcmFtcykge1xyXG4gICAgICAgICAgICB2YXIgdXNlckFjdGlvbiA9IHRoaXMuX3AudXNlckFjdGlvbjtcclxuICAgICAgICAgICAgaWYgKGNhblVzZVNoYXJlUGFyYW1zICYmIHRoaXMuX3Auc2hhcmVQYXJhbXMgJiYgdGhpcy5fcC5zaGFyZVBhcmFtcy51c2VyQWN0aW9uKSB1c2VyQWN0aW9uID0gdGhpcy5fcC5zaGFyZVBhcmFtcy51c2VyQWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHVzZXJBY3Rpb24gPSBuZXcgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLlVzZXJBY3Rpb24oZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHVzZXJBY3Rpb24sIHRydWUsIHRydWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVzZXJBY3Rpb24gPSBuZXcgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLlVzZXJBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHVzZXJBY3Rpb24uc2V0VGl0bGUoXCIkbGV2ZWxUaXRsZVwiKVxyXG4gICAgICAgICAgICAgICAgdXNlckFjdGlvbi5zZXREZXNjcmlwdGlvbihcIiRjaGFsbGVuZ2VEZXNjcmlwdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgdXNlckFjdGlvbi5hZGRJbWFnZSgnJGJhZGdlVVJMJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXVzZXJBY3Rpb24ubGlua0JhY2spIHtcclxuICAgICAgICAgICAgICAgIHVzZXJBY3Rpb24uc2V0TGlua0JhY2soZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLmdsb2JhbC5maWxsVXNlckFjdGlvblRlbXBsYXRlKHVzZXJBY3Rpb24sIGNoYWxsZW5nZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93U2V0dGluZ3NCdWJibGU6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCArICdfc2V0dGluZ3MnKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9lbGlkICsgJ19zZXR0aW5ncycsXHJcbiAgICAgICAgICAgICAgICBvblNhdmVTZXR0aW5nczogdGhpcy5nZXRJbnN0YW5jZVJlZlN0cmluZygpICsgJy5zYXZlU2V0dGluZ3MoKScsXHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5nZXRJbnN0YW5jZVJlZlN0cmluZygpICsgJy5jbG9zZVNldHRpbmdzKCknLFxyXG4gICAgICAgICAgICAgICAgVEVYVDogZ2lneWEudXRpbHMuZGVsZWdhdGUuY3JlYXRlKHRoaXMsIHRoaXMuZ2V0VGV4dClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaHRtbFNldHRpbmdzID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy50ZW1wbGF0ZXMuZ2V0KCdzZXR0aW5nc0RpYWxvZycpLCBpdGVtKTtcclxuICAgICAgICAgICAgLy9naWd5YS5nbG9iYWwucHV0R01CYWxsb29uTmV4dFRvKGVsLCBodG1sU2V0dGluZ3MsICdQUklWQUNZIFNFVFRJTkdTJywgMjgwKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLmdsb2JhbC5nZXRCYWxsb29uSFRNTChodG1sU2V0dGluZ3MsIHRoaXMuZ2V0VGV4dCgncHJpdmFjeV9zZXR0aW5ncycpLCAyODAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIHRoaXMuZ2V0SW5zdGFuY2VSZWZTdHJpbmcoKSArICcuY2xvc2VTZXR0aW5ncygpJyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSAnLTEwMDBweCc7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS56SW5kZXggPSBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuaWQgPSB0aGlzLl9lbGlkICsgJ19zZXR0aW5ncyc7XHJcblxyXG4gICAgICAgICAgICB2YXIgbG5rU2V0dGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkICsgJ19zZXR0aW5nc0xpbmsnKTtcclxuICAgICAgICAgICAgdmFyIHNldHRpbmdzUG9zID0gZ2lneWEuZ2xvYmFsLl9HZXRFbGVtZW50UG9zKGxua1NldHRpbmdzKTtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFwcGVuZFRvQm9keShjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRvcCA9IHNldHRpbmdzUG9zLnRvcCArIGxua1NldHRpbmdzLm9mZnNldEhlaWdodCArIDU7XHJcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gc2V0dGluZ3NQb3MubGVmdDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b3AgPCAxMCkgdG9wID0gMTA7XHJcbiAgICAgICAgICAgIGlmIChsZWZ0IDwgMTApIGxlZnQgPSAxMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICAgICAgdmFyIGRiID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGllbnRIZWlnaHQgPSBkZS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChjbGllbnRIZWlnaHQgPT0gMCkgY2xpZW50SGVpZ2h0ID0gZGIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgY2xpZW50V2lkdGggPSBkZS5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgaWYgKGNsaWVudFdpZHRoID09IDApIGNsaWVudFdpZHRoID0gZGIuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzY3JsID0gZ2lneWEudXRpbHMudmlld3BvcnQuZ2V0U2Nyb2xsKCk7XHJcbiAgICAgICAgICAgIHZhciB2cHQgPSBzY3JsLnRvcDtcclxuICAgICAgICAgICAgdmFyIHZwbCA9IHNjcmwubGVmdDtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbVJpZ2h0VG9wID0gdnB0ICsgY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tUmlnaHRMZWZ0ID0gdnBsICsgY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIGlmICh0b3AgKyBjb250YWluZXIub2Zmc2V0SGVpZ2h0ID4gYm90dG9tUmlnaHRUb3ApIHRvcCA9IGJvdHRvbVJpZ2h0VG9wIC0gY29udGFpbmVyLm9mZnNldEhlaWdodCAtIDEwO1xyXG4gICAgICAgICAgICBpZiAobGVmdCArIGNvbnRhaW5lci5vZmZzZXRXaWR0aCA+IGJvdHRvbVJpZ2h0TGVmdCkgbGVmdCA9IGJvdHRvbVJpZ2h0TGVmdCAtIGNvbnRhaW5lci5vZmZzZXRXaWR0aCAtIDEwO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRSkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLmFkZElmcmFtZVNoaW0oY29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9sb2FkIHNldHRpbmdzXHJcbiAgICAgICAgICAgIHZhciBjYkVuYWJsZU5vdGlmaWNhdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkICsgJ19jYkVuYWJsZU5vdGlmaWNhdGlvbnMnKTtcclxuICAgICAgICAgICAgdmFyIGNiUHVibGljUHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQgKyAnX2NiUHVibGljUHJvZmlsZScpO1xyXG4gICAgICAgICAgICB2YXIgY2JBdXRvU2hhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkICsgJ19jYkF1dG9TaGFyZScpO1xyXG4gICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLmdtU2V0dGluZ3M7XHJcbiAgICAgICAgICAgIHZhciBsb2NhbFNldHRpbmdzID0gZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLmdldE9iamVjdCgnZ21TZXR0aW5ncycpO1xyXG4gICAgICAgICAgICBjYkVuYWJsZU5vdGlmaWNhdGlvbnMuY2hlY2tlZCA9ICEobG9jYWxTZXR0aW5ncyAmJiBsb2NhbFNldHRpbmdzLmRpc2FibGVOb3RpZmljYXRpb25zKTtcclxuICAgICAgICAgICAgY2JQdWJsaWNQcm9maWxlLmNoZWNrZWQgPSAhKHNldHRpbmdzICYmIHNldHRpbmdzLnByaXZhdGVQcm9maWxlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgY2JFbmFibGVOb3RpZmljYXRpb25zLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNiRW5hYmxlTm90aWZpY2F0aW9ucy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcy5kaXNhYmxlQXV0b1NoYXJlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMuZW5hYmxlQXV0b1NoYXJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFjYkVuYWJsZU5vdGlmaWNhdGlvbnMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQXV0b1NoYXJlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYkF1dG9TaGFyZS5jaGVja2VkID0gKHNldHRpbmdzICYmIHNldHRpbmdzLmF1dG9TaGFyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2JQdWJsaWNQcm9maWxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IFRoaXMuc2hvd1NldHRpbmdzTm90ZXMoKSB9O1xyXG5cclxuICAgICAgICAgICAgLy8gRW5zdXJlIHRoYXQgdGhlIGRpdiBpcyBmb2N1c2FibGUgYnV0IG5vdCB0YWJiYWJsZS4gVGhlbiBtYW51YWxseSBnaXZlIGl0IGZvY3VzLiAoV0NBRylcclxuICAgICAgICAgICAgY29udGFpbmVyLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5mb2N1cygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd1NldHRpbmdzTm90ZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRpdk5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCArICdfc2V0dGluZ3Nfbm90ZXMnKTtcclxuICAgICAgICAgICAgaWYgKGRpdk5vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBkaXZOb3Rlcy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkaXZOb3Rlcy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbicgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlU2V0dGluZ3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRpdlNldHRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCArICdfc2V0dGluZ3MnKTtcclxuICAgICAgICAgICAgaWYgKGRpdlNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5nbG9iYWwucmVtb3ZlSWZyYW1lU2hpbShkaXZTZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICBkaXZTZXR0aW5ncy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdlNldHRpbmdzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmV0dXJuIGZvY3VzIHRvIHRoZSBzZXR0aW5ncyBsaW5rLiAoV0NBRylcclxuICAgICAgICAgICAgdmFyIGxua1NldHRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCArICdfc2V0dGluZ3NMaW5rJyk7XHJcbiAgICAgICAgICAgIGlmIChsbmtTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgbG5rU2V0dGluZ3MuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzYWJsZUF1dG9TaGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2JBdXRvU2hhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkICsgJ19zZXR0aW5nc19jYkF1dG9TaGFyZScpO1xyXG4gICAgICAgICAgICB2YXIgbGJsQXV0b1NoYXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCArICdfc2V0dGluZ3NfYXV0b1NoYXJlJyk7XHJcbiAgICAgICAgICAgIGNiQXV0b1NoYXJlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2JBdXRvU2hhcmUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYmxBdXRvU2hhcmUuY2xhc3NOYW1lID0gJ2dpZy11c2VyU3RhdHVzLXNldHRpbmdzRGlhbG9nLXNldHRpbmcgZ2lnLXVzZXJTdGF0dXMtc2V0dGluZ3NEaWFsb2ctc2V0dGluZy1kaXNhYmxlZCc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmFibGVBdXRvU2hhcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNiQXV0b1NoYXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCArICdfc2V0dGluZ3NfY2JBdXRvU2hhcmUnKTtcclxuICAgICAgICAgICAgdmFyIGxibEF1dG9TaGFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQgKyAnX3NldHRpbmdzX2F1dG9TaGFyZScpO1xyXG4gICAgICAgICAgICBjYkF1dG9TaGFyZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYmxBdXRvU2hhcmUuY2xhc3NOYW1lID0gJ2dpZy11c2VyU3RhdHVzLXNldHRpbmdzRGlhbG9nLXNldHRpbmcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2F2ZVNldHRpbmdzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYkVuYWJsZU5vdGlmaWNhdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkICsgJ19zZXR0aW5nc19jYkVuYWJsZU5vdGlmaWNhdGlvbnMnKTtcclxuICAgICAgICAgICAgdmFyIGNiUHVibGljUHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQgKyAnX3NldHRpbmdzX2NiUHVibGljUHJvZmlsZScpO1xyXG4gICAgICAgICAgICB2YXIgY2JBdXRvU2hhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkICsgJ19zZXR0aW5nc19jYkF1dG9TaGFyZScpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGdtU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICBwcml2YXRlUHJvZmlsZTogIShjYlB1YmxpY1Byb2ZpbGUuY2hlY2tlZCksXHJcbiAgICAgICAgICAgICAgICBhdXRvU2hhcmU6IGNiQXV0b1NoYXJlLmNoZWNrZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXA6ICdnbVNldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiBnbVNldHRpbmdzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnNldFVzZXJTZXR0aW5ncyh0aGlzLl9jLCBwYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGxvY2FsU2V0dGluZ3MgPSBnaWd5YS51dGlscy5sb2NhbFN0b3JhZ2UuZ2V0T2JqZWN0KCdnbVNldHRpbmdzJyk7XHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTZXR0aW5ncykgbG9jYWxTZXR0aW5ncyA9IHt9O1xyXG4gICAgICAgICAgICBsb2NhbFNldHRpbmdzLmRpc2FibGVOb3RpZmljYXRpb25zID0gIShjYkVuYWJsZU5vdGlmaWNhdGlvbnMuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmxvY2FsU3RvcmFnZS5zZXRPYmplY3QoJ2dtU2V0dGluZ3MnLCBsb2NhbFNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ21TZXR0aW5ncyA9IGdtU2V0dGluZ3M7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlU2V0dGluZ3MoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEluc3RhbmNlUmVmU3RyaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZ2lneWEuc2VydmljZXMuZ20ucGx1Z2lucy51c2VyU3RhdHVzLmluc3RhbmNlc1tcXCcnICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX2VsaWQpICsgJ1xcJ10nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=