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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.gm.plugins.leaderboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.gm.plugins.leaderboard.js":
/*!*********************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.gm.plugins.leaderboard.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="gigya.services.socialize.plugins.js" />
if (typeof window.gigya.services.gm.plugins == 'undefined') window.gigya.services.gm.plugins = {};
(function () {
	window.gigya.services.gm.plugins.leaderboard = {
		instances: {},
		showLeaderboardUI: function (c, p, i) {
			privateScope.createInstance(c, p, i);
		}
	}
	var publicScope = window.gigya.services.gm.plugins.leaderboard;

	var privateScope = {
		instances_size: 0,
		leaderboardPlugin: function (c, p, i) {
			this._c = c;
			this._p = p;
			this._i = i;
			this._elid = p.containerID
		},
		createInstance: function (c, p, i) {
			var el = document.getElementById(p.containerID);
			if (el == null) return;
			el.innerHTML = "";

			var instance = new privateScope.leaderboardPlugin(c, p, i);
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
			templates.set("user",
			[
				'<a class="gig-leaderboard-topUser">',
					'<div class="gig-leaderboard-topUser-border">',
						'<div class="gig-leaderboard-topUser-header">#${rank}</div>',
						'$photo ',
						'<div class="gig-leaderboard-topUser-friendIcon-container">$friendIcon</div>',
						'<div class="gig-leaderboard-topUser-top3Icon-container">$top3Icon</div>',
					'</div>',
					'<div class="gig-leaderboard-topUser-name">$name</div>',
				'</a>'
			]);
			templates.set("details",
			[
				'<div class="gig-leaderboard gig-leaderboard-details">',
					'<div class="gig-leaderboard-details-top">',
						'<div class="gig-leaderboard-details-photo-container">$photo</div>',
						'<div class="gig-leaderboard-details-nameAndPoints">',
							'<div class="gig-leaderboard-details-name">$name</div>',
							'<div class="gig-leaderboard-details-points-container">',
								'<span class="gig-leaderboard-details-pointsText">$TEXT("num_points","%num","<span class=\\"gig-leaderboard-details-pointsValue\\">$points</span>")</span>',
							'</div>',
						'</div>',
						'<div class="gig-leaderboard-details-challengeBadge">$challengeBadge</div>',
					'</div>',
					'$detailsFooter',
				'</div>'
			]);
			templates.set("detailsFooter",
			[
				'<div class="gig-leaderboard-details-bottom">$otherChallengesBadges</div>'
			]);
			templates.set("detailsPhoto",
			[
				'<div class="gig-leaderboard-details-userPhoto">',
					'<img alt="" id="${id}_userPhoto" src="${photoURL}" />',
				'</div>'
			]);
			templates.set("topUserPhoto",
			[
				'<div class="gig-leaderboard-topUser-userPhoto">',
					'<img alt="" id="${id}_userPhoto" src="${photoURL}" />',
				'</div>'
			]);
			templates.set("top3Icon",
			[
				'<div class="gig-leaderboard-topUser-top3Icon"></div>'
			]);
			templates.set("friendIcon",
			[
				'<div class="gig-leaderboard-topUser-friendIcon"></div>'
			]);
			templates.set("badge",
			[
				'<div class="gig-leaderboard-details-badge-container" alt="$levelDescription" title="$levelDescription">',
					'<img alt="" class="gig-leaderboard-details-badge" src="$badgeURL" />',
					'<div class="gig-leaderboard-details-badge-levelTitle">$levelTitle</div>',
				'</div>'
			]);
			return templates;
		},
		defaultCss: [
			'.gig-leaderboard *, div.gig-leaderboard, .gig-leaderboard span, .gig-leaderboard a:hover, .gig-leaderboard a:visited, .gig-leaderboard a:link, .gig-leaderboard a:active{',
			'border:none; line-height:normal;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;',
			'font-family:arial;font-size:12px;color:#313131;background:none;text-align:left}',
			'div.gig-leaderboard-container {border: 1px solid #E6E6E6;overflow:hidden;padding: 8px 2px;text-align:center;}',
			'div.gig-leaderboard-topUser-container {float:left;cursor:pointer;overflow:hidden;;width:72px;}',
			'a.gig-leaderboard-topUser, a:hover.gig-leaderboard-topUser {padding:5px 8px;display:block;text-align:center;}',
			'a:hover.gig-leaderboard-topUser div.gig-leaderboard-topUser-name {text-decoration:underline}',
			'div.gig-leaderboard-topUser-header {font-size: 11px; color: #313131;margin: 0 2px;text-align:center;',
				'background: #FFFFFF; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#EAEBEB");zoom:1;',
				'background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#EAEBEB));',
				'background: -moz-linear-gradient(top,  #FFFFFF,  #EAEBEB)}',
			'div.gig-leaderboard-topUser-border {margin-bottom:3px; border: 1px solid #E8E8E8; overflow:hidden;background-color:#FFFFFF;}',
			'div.gig-leaderboard-topUser-name {font-size: 11px; color: #313131;text-align:center;overflow:hidden;line-height:1.2;width:56px;height:28px;margin:0 auto;overflow:hidden;}',
			'div.gig-leaderboard-topUser-userPhoto {width: 50px; height:50px; overflow:hidden;padding:2px;zoom:1}',

			'div.gig-leaderboard-details {}',
			'div.gig-leaderboard-details-userPhoto {width: 50px; height:50px; overflow:hidden;border: 1px solid #E8E8E8;text-align:center;padding:2px;display:inline-block;*display:inline;}',
			'span.gig-leaderboard-details-pointsText {font-size: 12px; font-weight:bold; color: #0B81C1}',
			'span.gig-leaderboard-details-pointsValue {font-size: 20px; font-weight:bold; color: #0B81C1}',
			'div.gig-leaderboard-details-name {padding-top: 5px;padding-bottom:3px;font-size: 14px; font-weight:bold; color: #313131}',
			'div.gig-leaderboard-details-photo-container {float:left;margin-right:12px;}',
			'div.gig-leaderboard-details-top {overflow:hidden;zoom:1}',
			'div.gig-leaderboard-details-badge-container {width:86px;text-align:center;display:inline-block;}',
			'div.gig-leaderboard-otherBadges div.gig-leaderboard-details-badge-container {float:left;}',
			'img.gig-leaderboard-details-badge {width:50px;height:50px;margin:0 5px 4px 5px;}',
			'div.gig-leaderboard-details-badge-levelTitle {font-size: 12px; color:#313131;margin:0 5px;line-height:115%;text-align:center;}',
			'div.gig-leaderboard-details-nameAndPoints {float:left;width:150px;}',
			'div.gig-leaderboard-details-challengeBadge {float:right;padding-left:15px;}',
			'div.gig-leaderboard-details-bottom { padding-top:8px; margin-top:8px; border-top: 1px solid #E8E8E8; overflow:hidden;zoom:1}',
			'div.gig-leaderboard-topUser-top3Icon {width:15px; height:21px; background-image:url(\'' + window.gigya._.getCdnResource('/gs/i/gm/top3Icon.png') + '\')}',
			'div.gig-leaderboard-topUser-top3Icon-container {margin-top:-69px;margin-left:-1px;position:absolute;}',
			'div.gig-leaderboard-topUser-friendIcon {width:14px; height:14px; background-image:url(\'' + window.gigya._.getCdnResource('/gs/i/gm/friendIcon.png') + '\')}',
			'div.gig-leaderboard-topUser-friendIcon-container {position:absolute;margin-left:41px;margin-top:-13px;}'
		]

	}
	if (window.gigya.localInfo.quirksMode) { //quirks mode - width/height including paddings and borders
		privateScope.defaultCss.push([
			'div.gig-leaderboard-topUser-userPhoto {width: 54px; height:54px}',
			'div.gig-leaderboard-details-userPhoto {width: 54px; height:54px}',
			'div.gig-leaderboard-topUser-header {width: 50px;}',
			'div.gig-leaderboard-topUser-border {zoom:1;display:inline;}'
		]);
	}
	privateScope.leaderboardPlugin.prototype = {
		init: function () {
			this.templates = privateScope.createDefaultTemplates();
			if (this._p.userTemplate) this.templates.set('user', this._p.userTemplate);
			if (this._p.detailsTemplate) this.templates.set('details', this._p.detailsTemplate);

			if (this._p.cssPrefix || !privateScope.addedCSS) {
				window.gigya.global.addCSS(privateScope.defaultCss, this._p.cssPrefix);
				privateScope.addedCSS = true;
			}
			this.refresh();

			var This = this;
			var fnRefresh = function (e) { This.refresh(e) };
		    var callNotification = function() { window.setTimeout(function() { This.refresh(null, true) }, 3000) };
			window.gigya.services.socialize.addEventHandlers({listenerType:'component'},{
				onLogout: fnRefresh
			});
			window.gigya.events.addMap({
			    defaultMethod: callNotification,
			    eventMap: [
                    { events: "sendDone,reactionClicked,commentSubmitted,commentVoted,login,connectionAdded", args: [] }
			    ]
			});
			window.gigya.socialize.addEventHandlers({ listenerType: 'component' }, {
			    onActionNotified: callNotification
			});
		},
		getText: function (textKey, replaceStr, withStr) {
		    return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.gm.plugins.leaderboard.js', textKey, this._p.lang, replaceStr, withStr);
		},
        refresh: function (e, dontShowLoader) {
		    if (!dontShowLoader) window.gigya.global.showLoader(document.getElementById(this._elid), 'gig-leaderboard gig-leaderboard-container', this.getCanvasHeight());
            var This = this;
            window.gigya.services.gm.getTopUsers(this._c, { callback: function (e) { This.afterGetTopUsers(e) } });
		},
		afterGetTopUsers: function (e) {
            if (e.errorCode > 0) {
				window.gigya.events.dispatchErrorFromResponse(this._p, e);
			}
            this.users = [];
			if (e.users) this.users = e.users;
			this.draw();
		},
        getHTMLSize: function (html) {
            var divMeasure = document.createElement('div');
            divMeasure.style.position = 'absolute';
            divMeasure.style.left = '-1000px';
            divMeasure.innerHTML = html;
			document.getElementById(this._elid).appendChild(divMeasure);
            var w = divMeasure.offsetWidth;
            var h = divMeasure.offsetHeight;
			divMeasure.parentNode.removeChild(divMeasure);
            return { w: w, h: h }
		},
        getCanvasWidth: function () {
			var containerDiv = document.createElement('div');
			containerDiv.className = 'gig-leaderboard gig-leaderboard-container';
			var innerDiv = document.createElement('div');
			containerDiv.appendChild(innerDiv);
			document.getElementById(this._elid).appendChild(containerDiv);
			var w = innerDiv.offsetWidth;
			containerDiv.parentNode.removeChild(containerDiv);
			return w;
		},
        getCanvasHeight: function () {
			var canavsWidth = this.getCanvasWidth();
			var itemWidth = this.getItemSize().w;
			var itemHeight = this.getItemSize().h;
			var itemsPerLine = Math.floor(canavsWidth / itemWidth);
			var count = this._p.totalCount;
			if (!count) count = 12; //default
            if (count > 36) count = 36;
            var lines = Math.ceil(count / itemsPerLine);
			if (window.gigya.localInfo.quirksMode) {
				return lines * itemHeight + window.gigya.global.getClassBordersAndPaddings('gig-leaderboard-container').h;
			} else {
				return lines * itemHeight;
			}
			
		},
		draw: function () {
			var canavsWidth = this.getCanvasWidth();
			var canvasHeight = this.getCanvasHeight();
			var htmlSize = this.getItemSize();
			var itemWidth = htmlSize.w;
			var itemsPerLine = Math.floor(canavsWidth / itemWidth);
            var spacerWidth = (canavsWidth - (itemsPerLine * itemWidth)) / (itemsPerLine - 1);
            var arUsersHTML = [];
            for (var i = 0; i < this.users.length; i++) {
                var margin = '0 ' + Math.floor(spacerWidth) + 'px 0 0';
                if (itemsPerLine == 1) {
                    spacerWidth = (canavsWidth - itemWidth) / 2
                    margin = '0 0 0 ' + Math.floor(spacerWidth) + 'px';
                } else if ((i + 1) / itemsPerLine == Math.round((i + 1) / itemsPerLine)) {
                    margin = '0';
				}
				arUsersHTML.push(this.getItemHTML(i, margin, itemWidth, htmlSize.h));
			}
            document.getElementById(this._elid).innerHTML = '<div class="gig-leaderboard gig-leaderboard-container" style="height:' + canvasHeight + 'px">' + arUsersHTML.join('') + '</div>';
			this.resizePhotos();
			if (!this.firedLoadEvent) {
				this.firedLoadEvent = true;
                window.gigya.events.dispatchForWidget({ eventName: 'load', containerID: this._p['containerID'] }, this._p);
			}
		},
        resizePhotos: function () {
            for (var i = 0; i < this.users.length; i++) {
                var imgUserPhoto = document.getElementById(this._elid + '_' + i + '_userPhoto');
				window.gigya.global.scaleImageToContainer(imgUserPhoto);
			}
		},
        getItemHTML: function (friendIndex, margin, width, height) {
			var item = window.gigya.utils.object.clone(this.users[friendIndex]);
			item.TEXT = window.gigya.utils.delegate.create(this, this.getText);
			item.id = this._elid + '_' + friendIndex;
			item.name = window.gigya.utils.sanitize.sanitizeHTML(item.name);
			item.photo = this.templates.get('topUserPhoto');
            if (item.type == 'friend') {
                item.friendIcon = window.gigya.utils.templates.fill(this.templates.get('friendIcon'), item);
			} else {
				item.friendIcon = '';
			}
            if (item.rank <= 3) {
				item.top3Icon = window.gigya.utils.templates.fill(this.templates.get('top3Icon'), item);
			} else {
				item.top3Icon = '';
			}
			item.photoURL = window.gigya.global.getPhotoURL(item.photoURL);

            if (!item.photoURL || item.photoURL == '') {
                item.photoURL = window.gigya._.getCdnResource('/gs/i/gm/User.png');
			}
			item.points = this.getChallengePoints(friendIndex);
			var sOnFocus = this.getInstanceRefString() + '.showDetailsBubble(' + friendIndex + ', this);';
			var sOnBlur = this.getInstanceRefString() + '.hideDetailsBubble(' + friendIndex + ', this);';

			var template = this.templates.get('user');
            return '<div tabindex="0" class="gig-leaderboard-topUser-container" style="width:' + width + 'px;height:' + height + 'px;margin:' + margin + '" onfocus="' + sOnFocus + '" onblur="' + sOnBlur + '">' + window.gigya.utils.templates.fill(template, item) + '</div>';
		},
        getItemSize: function () {
			var item = {
				TEXT: window.gigya.utils.delegate.create(this, this.getText),
				friendIcon: window.gigya.utils.templates.fill(this.templates.get('friendIcon'), {}),
				top3Icon: window.gigya.utils.templates.fill(this.templates.get('top3Icon'), {}),
				name: 'John<br />Doe',
                photoURL: window.gigya._.getCdnResource('/gs/i/gm/User.png'),
				point: 999,
				rank: 20,
				photo: this.templates.get('topUserPhoto')
			}
			var template = this.templates.get('user');
			
            return this.getHTMLSize('<div class="gig-leaderboard-topUser-container">' + window.gigya.utils.templates.fill(template, item) + '</div>');
		},
        getBadgeHTML: function (challenge, isDefault) {
            var template = this.templates.get('badge');
			var item = window.gigya.utils.object.clone(challenge);
			if (!item.levelTitle) item.levelTitle = '';
			if (!item.levelDescription) item.levelDescription = '';
			item.badgeURL = window.gigya.global.getPhotoURL(item.badgeURL);
			return window.gigya.utils.templates.fill(template, item);
		},
        showDetailsBubble: function (friendIndex, el) {
			this.currentDetailsBubbleFriendIndex = friendIndex;
            var template = this.templates.get('details');
			var item = window.gigya.utils.object.clone(this.users[friendIndex]);
			item.TEXT = window.gigya.utils.delegate.create(this, this.getText);
			item.name = window.gigya.utils.sanitize.sanitizeHTML(item.name.toUpperCase());
			item.detailsFooter = '';
			item.photo = this.templates.get('detailsPhoto');
			item.photoURL = window.gigya.global.getPhotoURL(item.photoURL);
			var achievements = this.users[friendIndex].achievements;
			var challengeName = this._p.challenge;
			if (!challengeName) challengeName = '_default';
			item.challengeBadge = '';
			item.points = this.getChallengePoints(friendIndex);
            if (!item.photoURL || item.photoURL == '') {
                item.photoURL = window.gigya._.getCdnResource('/gs/i/gm/User.png');
			}
            var arChallengesHTML = [];
            for (var i = 0; i < achievements.length; i++) {
				if (achievements[i].badgeURL) {
                    if (achievements[i].challengeID == challengeName) {
						item.challengeBadge = this.getBadgeHTML(achievements[i], true);
                    } else if (arChallengesHTML.length < 4) {
						arChallengesHTML.push(this.getBadgeHTML(achievements[i]));
					}
				}
			}
			
            item.otherChallengesBadges = '<div class="gig-leaderboard-otherBadges" style="overflow:hidden;display:inline-block;">' + arChallengesHTML.join('') + '</div>';
            if (item.otherChallengesBadges != '') item.detailsFooter = this.templates.get('detailsFooter');
            item.id = this._elid + '_details' + friendIndex;
			var detailsHTML = window.gigya.utils.templates.fill(template, item);
			window.gigya.global.putGMBalloonNextTo(el, detailsHTML, null, 344, null, null, this._elid + '_details');
            var imgUserPhoto = document.getElementById(item.id + '_userPhoto');
			window.gigya.global.scaleImageToContainer(imgUserPhoto);
		},
		hideDetailsBubble: function (friendIndex, el) {
			// Timeout delay because we want to give showDetailsBubble a chance to render a different GMBalloon.
			var This = this;
			setTimeout(function() {
				// Do not hide balloon if a different balloon was rendered.
				if (This.currentDetailsBubbleFriendIndex === friendIndex) {
					window.gigya.global.removeGMBalloon();
					This.currentDetailsBubbleFriendIndex = undefined;
				}
			}, 0);
		},
        getChallengePoints: function (friendIndex) {
			var challengeName = this._p.challenge;
			if (!challengeName) challengeName = '_default';
			var achievements = this.users[friendIndex].achievements;
            for (var i = 0; i < achievements.length; i++) {
                if (achievements[i].challengeID == challengeName) {
                    if (this._p.period == 'all') {
						return achievements[i].pointsTotal;
					} else {
						return achievements[i].points7Days;
					}
					
				}
			}
		},
		getInstanceRefString: function () {
			return 'gigya.services.gm.plugins.leaderboard.instances[\'' + encodeURIComponent(this._elid) + '\']';
		}
	}


})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMubGVhZGVyYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsV0FBVyxZQUFLLHFDQUFxQyxZQUFLO0FBQzFEO0FBQ0EsQ0FBQyxZQUFLO0FBQ04sZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQUs7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FB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ZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMubGVhZGVyYm9hcmQuanNcIik7XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuanNcIiAvPlxyXG5pZiAodHlwZW9mIGdpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMgPT0gJ3VuZGVmaW5lZCcpIGdpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMgPSB7fTtcclxuKGZ1bmN0aW9uICgpIHtcclxuXHRnaWd5YS5zZXJ2aWNlcy5nbS5wbHVnaW5zLmxlYWRlcmJvYXJkID0ge1xyXG5cdFx0aW5zdGFuY2VzOiB7fSxcclxuXHRcdHNob3dMZWFkZXJib2FyZFVJOiBmdW5jdGlvbiAoYywgcCwgaSkge1xyXG5cdFx0XHRwcml2YXRlU2NvcGUuY3JlYXRlSW5zdGFuY2UoYywgcCwgaSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHZhciBwdWJsaWNTY29wZSA9IGdpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMubGVhZGVyYm9hcmQ7XHJcblxyXG5cdHZhciBwcml2YXRlU2NvcGUgPSB7XHJcblx0XHRpbnN0YW5jZXNfc2l6ZTogMCxcclxuXHRcdGxlYWRlcmJvYXJkUGx1Z2luOiBmdW5jdGlvbiAoYywgcCwgaSkge1xyXG5cdFx0XHR0aGlzLl9jID0gYztcclxuXHRcdFx0dGhpcy5fcCA9IHA7XHJcblx0XHRcdHRoaXMuX2kgPSBpO1xyXG5cdFx0XHR0aGlzLl9lbGlkID0gcC5jb250YWluZXJJRFxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZUluc3RhbmNlOiBmdW5jdGlvbiAoYywgcCwgaSkge1xyXG5cdFx0XHR2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwLmNvbnRhaW5lcklEKTtcclxuXHRcdFx0aWYgKGVsID09IG51bGwpIHJldHVybjtcclxuXHRcdFx0ZWwuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcblx0XHRcdHZhciBpbnN0YW5jZSA9IG5ldyBwcml2YXRlU2NvcGUubGVhZGVyYm9hcmRQbHVnaW4oYywgcCwgaSk7XHJcblx0XHRcdHB1YmxpY1Njb3BlLmluc3RhbmNlc1twLmNvbnRhaW5lcklEXSA9IGluc3RhbmNlO1xyXG5cdFx0XHRwcml2YXRlU2NvcGUuaW5zdGFuY2VzX3NpemUrKztcclxuXHRcdFx0aW5zdGFuY2UuaW5pdCgpO1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZURlZmF1bHRUZW1wbGF0ZXM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHRlbXBsYXRlcyA9IHtcclxuXHRcdFx0XHRfbWFwOiB7fSxcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9tYXBba2V5XTtcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9tYXBba2V5XSA9ICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSA/IHZhbHVlLmpvaW4oXCJcIikgOiB2YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGVtcGxhdGVzLnNldChcInVzZXJcIixcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCc8YSBjbGFzcz1cImdpZy1sZWFkZXJib2FyZC10b3BVc2VyXCI+JyxcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLWxlYWRlcmJvYXJkLXRvcFVzZXItYm9yZGVyXCI+JyxcclxuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbGVhZGVyYm9hcmQtdG9wVXNlci1oZWFkZXJcIj4jJHtyYW5rfTwvZGl2PicsXHJcblx0XHRcdFx0XHRcdCckcGhvdG8gJyxcclxuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbGVhZGVyYm9hcmQtdG9wVXNlci1mcmllbmRJY29uLWNvbnRhaW5lclwiPiRmcmllbmRJY29uPC9kaXY+JyxcclxuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbGVhZGVyYm9hcmQtdG9wVXNlci10b3AzSWNvbi1jb250YWluZXJcIj4kdG9wM0ljb248L2Rpdj4nLFxyXG5cdFx0XHRcdFx0JzwvZGl2PicsXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1sZWFkZXJib2FyZC10b3BVc2VyLW5hbWVcIj4kbmFtZTwvZGl2PicsXHJcblx0XHRcdFx0JzwvYT4nXHJcblx0XHRcdF0pO1xyXG5cdFx0XHR0ZW1wbGF0ZXMuc2V0KFwiZGV0YWlsc1wiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbGVhZGVyYm9hcmQgZ2lnLWxlYWRlcmJvYXJkLWRldGFpbHNcIj4nLFxyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbGVhZGVyYm9hcmQtZGV0YWlscy10b3BcIj4nLFxyXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1sZWFkZXJib2FyZC1kZXRhaWxzLXBob3RvLWNvbnRhaW5lclwiPiRwaG90bzwvZGl2PicsXHJcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLWxlYWRlcmJvYXJkLWRldGFpbHMtbmFtZUFuZFBvaW50c1wiPicsXHJcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbGVhZGVyYm9hcmQtZGV0YWlscy1uYW1lXCI+JG5hbWU8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLWxlYWRlcmJvYXJkLWRldGFpbHMtcG9pbnRzLWNvbnRhaW5lclwiPicsXHJcblx0XHRcdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJnaWctbGVhZGVyYm9hcmQtZGV0YWlscy1wb2ludHNUZXh0XCI+JFRFWFQoXCJudW1fcG9pbnRzXCIsXCIlbnVtXCIsXCI8c3BhbiBjbGFzcz1cXFxcXCJnaWctbGVhZGVyYm9hcmQtZGV0YWlscy1wb2ludHNWYWx1ZVxcXFxcIj4kcG9pbnRzPC9zcGFuPlwiKTwvc3Bhbj4nLFxyXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0XHQnPC9kaXY+JyxcclxuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbGVhZGVyYm9hcmQtZGV0YWlscy1jaGFsbGVuZ2VCYWRnZVwiPiRjaGFsbGVuZ2VCYWRnZTwvZGl2PicsXHJcblx0XHRcdFx0XHQnPC9kaXY+JyxcclxuXHRcdFx0XHRcdCckZGV0YWlsc0Zvb3RlcicsXHJcblx0XHRcdFx0JzwvZGl2PidcclxuXHRcdFx0XSk7XHJcblx0XHRcdHRlbXBsYXRlcy5zZXQoXCJkZXRhaWxzRm9vdGVyXCIsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1sZWFkZXJib2FyZC1kZXRhaWxzLWJvdHRvbVwiPiRvdGhlckNoYWxsZW5nZXNCYWRnZXM8L2Rpdj4nXHJcblx0XHRcdF0pO1xyXG5cdFx0XHR0ZW1wbGF0ZXMuc2V0KFwiZGV0YWlsc1Bob3RvXCIsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1sZWFkZXJib2FyZC1kZXRhaWxzLXVzZXJQaG90b1wiPicsXHJcblx0XHRcdFx0XHQnPGltZyBhbHQ9XCJcIiBpZD1cIiR7aWR9X3VzZXJQaG90b1wiIHNyYz1cIiR7cGhvdG9VUkx9XCIgLz4nLFxyXG5cdFx0XHRcdCc8L2Rpdj4nXHJcblx0XHRcdF0pO1xyXG5cdFx0XHR0ZW1wbGF0ZXMuc2V0KFwidG9wVXNlclBob3RvXCIsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1sZWFkZXJib2FyZC10b3BVc2VyLXVzZXJQaG90b1wiPicsXHJcblx0XHRcdFx0XHQnPGltZyBhbHQ9XCJcIiBpZD1cIiR7aWR9X3VzZXJQaG90b1wiIHNyYz1cIiR7cGhvdG9VUkx9XCIgLz4nLFxyXG5cdFx0XHRcdCc8L2Rpdj4nXHJcblx0XHRcdF0pO1xyXG5cdFx0XHR0ZW1wbGF0ZXMuc2V0KFwidG9wM0ljb25cIixcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLWxlYWRlcmJvYXJkLXRvcFVzZXItdG9wM0ljb25cIj48L2Rpdj4nXHJcblx0XHRcdF0pO1xyXG5cdFx0XHR0ZW1wbGF0ZXMuc2V0KFwiZnJpZW5kSWNvblwiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbGVhZGVyYm9hcmQtdG9wVXNlci1mcmllbmRJY29uXCI+PC9kaXY+J1xyXG5cdFx0XHRdKTtcclxuXHRcdFx0dGVtcGxhdGVzLnNldChcImJhZGdlXCIsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1sZWFkZXJib2FyZC1kZXRhaWxzLWJhZGdlLWNvbnRhaW5lclwiIGFsdD1cIiRsZXZlbERlc2NyaXB0aW9uXCIgdGl0bGU9XCIkbGV2ZWxEZXNjcmlwdGlvblwiPicsXHJcblx0XHRcdFx0XHQnPGltZyBhbHQ9XCJcIiBjbGFzcz1cImdpZy1sZWFkZXJib2FyZC1kZXRhaWxzLWJhZGdlXCIgc3JjPVwiJGJhZGdlVVJMXCIgLz4nLFxyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbGVhZGVyYm9hcmQtZGV0YWlscy1iYWRnZS1sZXZlbFRpdGxlXCI+JGxldmVsVGl0bGU8L2Rpdj4nLFxyXG5cdFx0XHRcdCc8L2Rpdj4nXHJcblx0XHRcdF0pO1xyXG5cdFx0XHRyZXR1cm4gdGVtcGxhdGVzO1xyXG5cdFx0fSxcclxuXHRcdGRlZmF1bHRDc3M6IFtcclxuXHRcdFx0Jy5naWctbGVhZGVyYm9hcmQgKiwgZGl2LmdpZy1sZWFkZXJib2FyZCwgLmdpZy1sZWFkZXJib2FyZCBzcGFuLCAuZ2lnLWxlYWRlcmJvYXJkIGE6aG92ZXIsIC5naWctbGVhZGVyYm9hcmQgYTp2aXNpdGVkLCAuZ2lnLWxlYWRlcmJvYXJkIGE6bGluaywgLmdpZy1sZWFkZXJib2FyZCBhOmFjdGl2ZXsnLFxyXG5cdFx0XHQnYm9yZGVyOm5vbmU7IGxpbmUtaGVpZ2h0Om5vcm1hbDtwYWRkaW5nOjBweDttYXJnaW46MHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7d2lkdGg6YXV0bztmbG9hdDpub25lOy1tb3otYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MDsnLFxyXG5cdFx0XHQnZm9udC1mYW1pbHk6YXJpYWw7Zm9udC1zaXplOjEycHg7Y29sb3I6IzMxMzEzMTtiYWNrZ3JvdW5kOm5vbmU7dGV4dC1hbGlnbjpsZWZ0fScsXHJcblx0XHRcdCdkaXYuZ2lnLWxlYWRlcmJvYXJkLWNvbnRhaW5lciB7Ym9yZGVyOiAxcHggc29saWQgI0U2RTZFNjtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzogOHB4IDJweDt0ZXh0LWFsaWduOmNlbnRlcjt9JyxcclxuXHRcdFx0J2Rpdi5naWctbGVhZGVyYm9hcmQtdG9wVXNlci1jb250YWluZXIge2Zsb2F0OmxlZnQ7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuOzt3aWR0aDo3MnB4O30nLFxyXG5cdFx0XHQnYS5naWctbGVhZGVyYm9hcmQtdG9wVXNlciwgYTpob3Zlci5naWctbGVhZGVyYm9hcmQtdG9wVXNlciB7cGFkZGluZzo1cHggOHB4O2Rpc3BsYXk6YmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7fScsXHJcblx0XHRcdCdhOmhvdmVyLmdpZy1sZWFkZXJib2FyZC10b3BVc2VyIGRpdi5naWctbGVhZGVyYm9hcmQtdG9wVXNlci1uYW1lIHt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfScsXHJcblx0XHRcdCdkaXYuZ2lnLWxlYWRlcmJvYXJkLXRvcFVzZXItaGVhZGVyIHtmb250LXNpemU6IDExcHg7IGNvbG9yOiAjMzEzMTMxO21hcmdpbjogMCAycHg7dGV4dC1hbGlnbjpjZW50ZXI7JyxcclxuXHRcdFx0XHQnYmFja2dyb3VuZDogI0ZGRkZGRjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNGRkZGRkZcIiwgZW5kQ29sb3JzdHI9XCIjRUFFQkVCXCIpO3pvb206MTsnLFxyXG5cdFx0XHRcdCdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNGRkZGRkYpLCB0bygjRUFFQkVCKSk7JyxcclxuXHRcdFx0XHQnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI0ZGRkZGRiwgICNFQUVCRUIpfScsXHJcblx0XHRcdCdkaXYuZ2lnLWxlYWRlcmJvYXJkLXRvcFVzZXItYm9yZGVyIHttYXJnaW4tYm90dG9tOjNweDsgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODsgb3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6I0ZGRkZGRjt9JyxcclxuXHRcdFx0J2Rpdi5naWctbGVhZGVyYm9hcmQtdG9wVXNlci1uYW1lIHtmb250LXNpemU6IDExcHg7IGNvbG9yOiAjMzEzMTMxO3RleHQtYWxpZ246Y2VudGVyO292ZXJmbG93OmhpZGRlbjtsaW5lLWhlaWdodDoxLjI7d2lkdGg6NTZweDtoZWlnaHQ6MjhweDttYXJnaW46MCBhdXRvO292ZXJmbG93OmhpZGRlbjt9JyxcclxuXHRcdFx0J2Rpdi5naWctbGVhZGVyYm9hcmQtdG9wVXNlci11c2VyUGhvdG8ge3dpZHRoOiA1MHB4OyBoZWlnaHQ6NTBweDsgb3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MnB4O3pvb206MX0nLFxyXG5cclxuXHRcdFx0J2Rpdi5naWctbGVhZGVyYm9hcmQtZGV0YWlscyB7fScsXHJcblx0XHRcdCdkaXYuZ2lnLWxlYWRlcmJvYXJkLWRldGFpbHMtdXNlclBob3RvIHt3aWR0aDogNTBweDsgaGVpZ2h0OjUwcHg7IG92ZXJmbG93OmhpZGRlbjtib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrOypkaXNwbGF5OmlubGluZTt9JyxcclxuXHRcdFx0J3NwYW4uZ2lnLWxlYWRlcmJvYXJkLWRldGFpbHMtcG9pbnRzVGV4dCB7Zm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjogIzBCODFDMX0nLFxyXG5cdFx0XHQnc3Bhbi5naWctbGVhZGVyYm9hcmQtZGV0YWlscy1wb2ludHNWYWx1ZSB7Zm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjogIzBCODFDMX0nLFxyXG5cdFx0XHQnZGl2LmdpZy1sZWFkZXJib2FyZC1kZXRhaWxzLW5hbWUge3BhZGRpbmctdG9wOiA1cHg7cGFkZGluZy1ib3R0b206M3B4O2ZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6ICMzMTMxMzF9JyxcclxuXHRcdFx0J2Rpdi5naWctbGVhZGVyYm9hcmQtZGV0YWlscy1waG90by1jb250YWluZXIge2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjEycHg7fScsXHJcblx0XHRcdCdkaXYuZ2lnLWxlYWRlcmJvYXJkLWRldGFpbHMtdG9wIHtvdmVyZmxvdzpoaWRkZW47em9vbToxfScsXHJcblx0XHRcdCdkaXYuZ2lnLWxlYWRlcmJvYXJkLWRldGFpbHMtYmFkZ2UtY29udGFpbmVyIHt3aWR0aDo4NnB4O3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO30nLFxyXG5cdFx0XHQnZGl2LmdpZy1sZWFkZXJib2FyZC1vdGhlckJhZGdlcyBkaXYuZ2lnLWxlYWRlcmJvYXJkLWRldGFpbHMtYmFkZ2UtY29udGFpbmVyIHtmbG9hdDpsZWZ0O30nLFxyXG5cdFx0XHQnaW1nLmdpZy1sZWFkZXJib2FyZC1kZXRhaWxzLWJhZGdlIHt3aWR0aDo1MHB4O2hlaWdodDo1MHB4O21hcmdpbjowIDVweCA0cHggNXB4O30nLFxyXG5cdFx0XHQnZGl2LmdpZy1sZWFkZXJib2FyZC1kZXRhaWxzLWJhZGdlLWxldmVsVGl0bGUge2ZvbnQtc2l6ZTogMTJweDsgY29sb3I6IzMxMzEzMTttYXJnaW46MCA1cHg7bGluZS1oZWlnaHQ6MTE1JTt0ZXh0LWFsaWduOmNlbnRlcjt9JyxcclxuXHRcdFx0J2Rpdi5naWctbGVhZGVyYm9hcmQtZGV0YWlscy1uYW1lQW5kUG9pbnRzIHtmbG9hdDpsZWZ0O3dpZHRoOjE1MHB4O30nLFxyXG5cdFx0XHQnZGl2LmdpZy1sZWFkZXJib2FyZC1kZXRhaWxzLWNoYWxsZW5nZUJhZGdlIHtmbG9hdDpyaWdodDtwYWRkaW5nLWxlZnQ6MTVweDt9JyxcclxuXHRcdFx0J2Rpdi5naWctbGVhZGVyYm9hcmQtZGV0YWlscy1ib3R0b20geyBwYWRkaW5nLXRvcDo4cHg7IG1hcmdpbi10b3A6OHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgI0U4RThFODsgb3ZlcmZsb3c6aGlkZGVuO3pvb206MX0nLFxyXG5cdFx0XHQnZGl2LmdpZy1sZWFkZXJib2FyZC10b3BVc2VyLXRvcDNJY29uIHt3aWR0aDoxNXB4OyBoZWlnaHQ6MjFweDsgYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2dtL3RvcDNJY29uLnBuZycpICsgJ1xcJyl9JyxcclxuXHRcdFx0J2Rpdi5naWctbGVhZGVyYm9hcmQtdG9wVXNlci10b3AzSWNvbi1jb250YWluZXIge21hcmdpbi10b3A6LTY5cHg7bWFyZ2luLWxlZnQ6LTFweDtwb3NpdGlvbjphYnNvbHV0ZTt9JyxcclxuXHRcdFx0J2Rpdi5naWctbGVhZGVyYm9hcmQtdG9wVXNlci1mcmllbmRJY29uIHt3aWR0aDoxNHB4OyBoZWlnaHQ6MTRweDsgYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2dtL2ZyaWVuZEljb24ucG5nJykgKyAnXFwnKX0nLFxyXG5cdFx0XHQnZGl2LmdpZy1sZWFkZXJib2FyZC10b3BVc2VyLWZyaWVuZEljb24tY29udGFpbmVyIHtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW4tbGVmdDo0MXB4O21hcmdpbi10b3A6LTEzcHg7fSdcclxuXHRcdF1cclxuXHJcblx0fVxyXG5cdGlmIChnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSkgeyAvL3F1aXJrcyBtb2RlIC0gd2lkdGgvaGVpZ2h0IGluY2x1ZGluZyBwYWRkaW5ncyBhbmQgYm9yZGVyc1xyXG5cdFx0cHJpdmF0ZVNjb3BlLmRlZmF1bHRDc3MucHVzaChbXHJcblx0XHRcdCdkaXYuZ2lnLWxlYWRlcmJvYXJkLXRvcFVzZXItdXNlclBob3RvIHt3aWR0aDogNTRweDsgaGVpZ2h0OjU0cHh9JyxcclxuXHRcdFx0J2Rpdi5naWctbGVhZGVyYm9hcmQtZGV0YWlscy11c2VyUGhvdG8ge3dpZHRoOiA1NHB4OyBoZWlnaHQ6NTRweH0nLFxyXG5cdFx0XHQnZGl2LmdpZy1sZWFkZXJib2FyZC10b3BVc2VyLWhlYWRlciB7d2lkdGg6IDUwcHg7fScsXHJcblx0XHRcdCdkaXYuZ2lnLWxlYWRlcmJvYXJkLXRvcFVzZXItYm9yZGVyIHt6b29tOjE7ZGlzcGxheTppbmxpbmU7fSdcclxuXHRcdF0pO1xyXG5cdH1cclxuXHRwcml2YXRlU2NvcGUubGVhZGVyYm9hcmRQbHVnaW4ucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnRlbXBsYXRlcyA9IHByaXZhdGVTY29wZS5jcmVhdGVEZWZhdWx0VGVtcGxhdGVzKCk7XHJcblx0XHRcdGlmICh0aGlzLl9wLnVzZXJUZW1wbGF0ZSkgdGhpcy50ZW1wbGF0ZXMuc2V0KCd1c2VyJywgdGhpcy5fcC51c2VyVGVtcGxhdGUpO1xyXG5cdFx0XHRpZiAodGhpcy5fcC5kZXRhaWxzVGVtcGxhdGUpIHRoaXMudGVtcGxhdGVzLnNldCgnZGV0YWlscycsIHRoaXMuX3AuZGV0YWlsc1RlbXBsYXRlKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLl9wLmNzc1ByZWZpeCB8fCAhcHJpdmF0ZVNjb3BlLmFkZGVkQ1NTKSB7XHJcblx0XHRcdFx0Z2lneWEuZ2xvYmFsLmFkZENTUyhwcml2YXRlU2NvcGUuZGVmYXVsdENzcywgdGhpcy5fcC5jc3NQcmVmaXgpO1xyXG5cdFx0XHRcdHByaXZhdGVTY29wZS5hZGRlZENTUyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5yZWZyZXNoKCk7XHJcblxyXG5cdFx0XHR2YXIgVGhpcyA9IHRoaXM7XHJcblx0XHRcdHZhciBmblJlZnJlc2ggPSBmdW5jdGlvbiAoZSkgeyBUaGlzLnJlZnJlc2goZSkgfTtcclxuXHRcdCAgICB2YXIgY2FsbE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uKCkgeyB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgVGhpcy5yZWZyZXNoKG51bGwsIHRydWUpIH0sIDMwMDApIH07XHJcblx0XHRcdGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5hZGRFdmVudEhhbmRsZXJzKHtsaXN0ZW5lclR5cGU6J2NvbXBvbmVudCd9LHtcclxuXHRcdFx0XHRvbkxvZ291dDogZm5SZWZyZXNoXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRnaWd5YS5ldmVudHMuYWRkTWFwKHtcclxuXHRcdFx0ICAgIGRlZmF1bHRNZXRob2Q6IGNhbGxOb3RpZmljYXRpb24sXHJcblx0XHRcdCAgICBldmVudE1hcDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgZXZlbnRzOiBcInNlbmREb25lLHJlYWN0aW9uQ2xpY2tlZCxjb21tZW50U3VibWl0dGVkLGNvbW1lbnRWb3RlZCxsb2dpbixjb25uZWN0aW9uQWRkZWRcIiwgYXJnczogW10gfVxyXG5cdFx0XHQgICAgXVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Z2lneWEuc29jaWFsaXplLmFkZEV2ZW50SGFuZGxlcnMoeyBsaXN0ZW5lclR5cGU6ICdjb21wb25lbnQnIH0sIHtcclxuXHRcdFx0ICAgIG9uQWN0aW9uTm90aWZpZWQ6IGNhbGxOb3RpZmljYXRpb25cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0VGV4dDogZnVuY3Rpb24gKHRleHRLZXksIHJlcGxhY2VTdHIsIHdpdGhTdHIpIHtcclxuXHRcdCAgICByZXR1cm4gZ2lneWEucGx1Z2luVXRpbHMubGFuZy5nZXRMb2NhbGl6ZWRUZXh0KCdnaWd5YS5zZXJ2aWNlcy5nbS5wbHVnaW5zLmxlYWRlcmJvYXJkLmpzJywgdGV4dEtleSwgdGhpcy5fcC5sYW5nLCByZXBsYWNlU3RyLCB3aXRoU3RyKTtcclxuXHRcdH0sXHJcbiAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24gKGUsIGRvbnRTaG93TG9hZGVyKSB7XHJcblx0XHQgICAgaWYgKCFkb250U2hvd0xvYWRlcikgZ2lneWEuZ2xvYmFsLnNob3dMb2FkZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCksICdnaWctbGVhZGVyYm9hcmQgZ2lnLWxlYWRlcmJvYXJkLWNvbnRhaW5lcicsIHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLmdtLmdldFRvcFVzZXJzKHRoaXMuX2MsIHsgY2FsbGJhY2s6IGZ1bmN0aW9uIChlKSB7IFRoaXMuYWZ0ZXJHZXRUb3BVc2VycyhlKSB9IH0pO1xyXG5cdFx0fSxcclxuXHRcdGFmdGVyR2V0VG9wVXNlcnM6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmVycm9yQ29kZSA+IDApIHtcclxuXHRcdFx0XHRnaWd5YS5ldmVudHMuZGlzcGF0Y2hFcnJvckZyb21SZXNwb25zZSh0aGlzLl9wLCBlKTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gW107XHJcblx0XHRcdGlmIChlLnVzZXJzKSB0aGlzLnVzZXJzID0gZS51c2VycztcclxuXHRcdFx0dGhpcy5kcmF3KCk7XHJcblx0XHR9LFxyXG4gICAgICAgIGdldEhUTUxTaXplOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICB2YXIgZGl2TWVhc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXZNZWFzdXJlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgZGl2TWVhc3VyZS5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xyXG4gICAgICAgICAgICBkaXZNZWFzdXJlLmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQpLmFwcGVuZENoaWxkKGRpdk1lYXN1cmUpO1xyXG4gICAgICAgICAgICB2YXIgdyA9IGRpdk1lYXN1cmUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBoID0gZGl2TWVhc3VyZS5vZmZzZXRIZWlnaHQ7XHJcblx0XHRcdGRpdk1lYXN1cmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZNZWFzdXJlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdzogdywgaDogaCB9XHJcblx0XHR9LFxyXG4gICAgICAgIGdldENhbnZhc1dpZHRoOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0Y29udGFpbmVyRGl2LmNsYXNzTmFtZSA9ICdnaWctbGVhZGVyYm9hcmQgZ2lnLWxlYWRlcmJvYXJkLWNvbnRhaW5lcic7XHJcblx0XHRcdHZhciBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKS5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xyXG5cdFx0XHR2YXIgdyA9IGlubmVyRGl2Lm9mZnNldFdpZHRoO1xyXG5cdFx0XHRjb250YWluZXJEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXJEaXYpO1xyXG5cdFx0XHRyZXR1cm4gdztcclxuXHRcdH0sXHJcbiAgICAgICAgZ2V0Q2FudmFzSGVpZ2h0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBjYW5hdnNXaWR0aCA9IHRoaXMuZ2V0Q2FudmFzV2lkdGgoKTtcclxuXHRcdFx0dmFyIGl0ZW1XaWR0aCA9IHRoaXMuZ2V0SXRlbVNpemUoKS53O1xyXG5cdFx0XHR2YXIgaXRlbUhlaWdodCA9IHRoaXMuZ2V0SXRlbVNpemUoKS5oO1xyXG5cdFx0XHR2YXIgaXRlbXNQZXJMaW5lID0gTWF0aC5mbG9vcihjYW5hdnNXaWR0aCAvIGl0ZW1XaWR0aCk7XHJcblx0XHRcdHZhciBjb3VudCA9IHRoaXMuX3AudG90YWxDb3VudDtcclxuXHRcdFx0aWYgKCFjb3VudCkgY291bnQgPSAxMjsgLy9kZWZhdWx0XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA+IDM2KSBjb3VudCA9IDM2O1xyXG4gICAgICAgICAgICB2YXIgbGluZXMgPSBNYXRoLmNlaWwoY291bnQgLyBpdGVtc1BlckxpbmUpO1xyXG5cdFx0XHRpZiAoZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gbGluZXMgKiBpdGVtSGVpZ2h0ICsgZ2lneWEuZ2xvYmFsLmdldENsYXNzQm9yZGVyc0FuZFBhZGRpbmdzKCdnaWctbGVhZGVyYm9hcmQtY29udGFpbmVyJykuaDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbGluZXMgKiBpdGVtSGVpZ2h0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdGRyYXc6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIGNhbmF2c1dpZHRoID0gdGhpcy5nZXRDYW52YXNXaWR0aCgpO1xyXG5cdFx0XHR2YXIgY2FudmFzSGVpZ2h0ID0gdGhpcy5nZXRDYW52YXNIZWlnaHQoKTtcclxuXHRcdFx0dmFyIGh0bWxTaXplID0gdGhpcy5nZXRJdGVtU2l6ZSgpO1xyXG5cdFx0XHR2YXIgaXRlbVdpZHRoID0gaHRtbFNpemUudztcclxuXHRcdFx0dmFyIGl0ZW1zUGVyTGluZSA9IE1hdGguZmxvb3IoY2FuYXZzV2lkdGggLyBpdGVtV2lkdGgpO1xyXG4gICAgICAgICAgICB2YXIgc3BhY2VyV2lkdGggPSAoY2FuYXZzV2lkdGggLSAoaXRlbXNQZXJMaW5lICogaXRlbVdpZHRoKSkgLyAoaXRlbXNQZXJMaW5lIC0gMSk7XHJcbiAgICAgICAgICAgIHZhciBhclVzZXJzSFRNTCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXJnaW4gPSAnMCAnICsgTWF0aC5mbG9vcihzcGFjZXJXaWR0aCkgKyAncHggMCAwJztcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtc1BlckxpbmUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlcldpZHRoID0gKGNhbmF2c1dpZHRoIC0gaXRlbVdpZHRoKSAvIDJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gPSAnMCAwIDAgJyArIE1hdGguZmxvb3Ioc3BhY2VyV2lkdGgpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGkgKyAxKSAvIGl0ZW1zUGVyTGluZSA9PSBNYXRoLnJvdW5kKChpICsgMSkgLyBpdGVtc1BlckxpbmUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luID0gJzAnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhclVzZXJzSFRNTC5wdXNoKHRoaXMuZ2V0SXRlbUhUTUwoaSwgbWFyZ2luLCBpdGVtV2lkdGgsIGh0bWxTaXplLmgpKTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImdpZy1sZWFkZXJib2FyZCBnaWctbGVhZGVyYm9hcmQtY29udGFpbmVyXCIgc3R5bGU9XCJoZWlnaHQ6JyArIGNhbnZhc0hlaWdodCArICdweFwiPicgKyBhclVzZXJzSFRNTC5qb2luKCcnKSArICc8L2Rpdj4nO1xyXG5cdFx0XHR0aGlzLnJlc2l6ZVBob3RvcygpO1xyXG5cdFx0XHRpZiAoIXRoaXMuZmlyZWRMb2FkRXZlbnQpIHtcclxuXHRcdFx0XHR0aGlzLmZpcmVkTG9hZEV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7IGV2ZW50TmFtZTogJ2xvYWQnLCBjb250YWluZXJJRDogdGhpcy5fcFsnY29udGFpbmVySUQnXSB9LCB0aGlzLl9wKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuICAgICAgICByZXNpemVQaG90b3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nVXNlclBob3RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCArICdfJyArIGkgKyAnX3VzZXJQaG90bycpO1xyXG5cdFx0XHRcdGdpZ3lhLmdsb2JhbC5zY2FsZUltYWdlVG9Db250YWluZXIoaW1nVXNlclBob3RvKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuICAgICAgICBnZXRJdGVtSFRNTDogZnVuY3Rpb24gKGZyaWVuZEluZGV4LCBtYXJnaW4sIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUodGhpcy51c2Vyc1tmcmllbmRJbmRleF0pO1xyXG5cdFx0XHRpdGVtLlRFWFQgPSBnaWd5YS51dGlscy5kZWxlZ2F0ZS5jcmVhdGUodGhpcywgdGhpcy5nZXRUZXh0KTtcclxuXHRcdFx0aXRlbS5pZCA9IHRoaXMuX2VsaWQgKyAnXycgKyBmcmllbmRJbmRleDtcclxuXHRcdFx0aXRlbS5uYW1lID0gZ2lneWEudXRpbHMuc2FuaXRpemUuc2FuaXRpemVIVE1MKGl0ZW0ubmFtZSk7XHJcblx0XHRcdGl0ZW0ucGhvdG8gPSB0aGlzLnRlbXBsYXRlcy5nZXQoJ3RvcFVzZXJQaG90bycpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS50eXBlID09ICdmcmllbmQnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmZyaWVuZEljb24gPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnRlbXBsYXRlcy5nZXQoJ2ZyaWVuZEljb24nKSwgaXRlbSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aXRlbS5mcmllbmRJY29uID0gJyc7XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0ucmFuayA8PSAzKSB7XHJcblx0XHRcdFx0aXRlbS50b3AzSWNvbiA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMudGVtcGxhdGVzLmdldCgndG9wM0ljb24nKSwgaXRlbSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aXRlbS50b3AzSWNvbiA9ICcnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGl0ZW0ucGhvdG9VUkwgPSBnaWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwoaXRlbS5waG90b1VSTCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWl0ZW0ucGhvdG9VUkwgfHwgaXRlbS5waG90b1VSTCA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5waG90b1VSTCA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2dtL1VzZXIucG5nJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aXRlbS5wb2ludHMgPSB0aGlzLmdldENoYWxsZW5nZVBvaW50cyhmcmllbmRJbmRleCk7XHJcblx0XHRcdHZhciBzT25Gb2N1cyA9IHRoaXMuZ2V0SW5zdGFuY2VSZWZTdHJpbmcoKSArICcuc2hvd0RldGFpbHNCdWJibGUoJyArIGZyaWVuZEluZGV4ICsgJywgdGhpcyk7JztcclxuXHRcdFx0dmFyIHNPbkJsdXIgPSB0aGlzLmdldEluc3RhbmNlUmVmU3RyaW5nKCkgKyAnLmhpZGVEZXRhaWxzQnViYmxlKCcgKyBmcmllbmRJbmRleCArICcsIHRoaXMpOyc7XHJcblxyXG5cdFx0XHR2YXIgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlcy5nZXQoJ3VzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZ2lnLWxlYWRlcmJvYXJkLXRvcFVzZXItY29udGFpbmVyXCIgc3R5bGU9XCJ3aWR0aDonICsgd2lkdGggKyAncHg7aGVpZ2h0OicgKyBoZWlnaHQgKyAncHg7bWFyZ2luOicgKyBtYXJnaW4gKyAnXCIgb25mb2N1cz1cIicgKyBzT25Gb2N1cyArICdcIiBvbmJsdXI9XCInICsgc09uQmx1ciArICdcIj4nICsgZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGVtcGxhdGUsIGl0ZW0pICsgJzwvZGl2Pic7XHJcblx0XHR9LFxyXG4gICAgICAgIGdldEl0ZW1TaXplOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBpdGVtID0ge1xyXG5cdFx0XHRcdFRFWFQ6IGdpZ3lhLnV0aWxzLmRlbGVnYXRlLmNyZWF0ZSh0aGlzLCB0aGlzLmdldFRleHQpLFxyXG5cdFx0XHRcdGZyaWVuZEljb246IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMudGVtcGxhdGVzLmdldCgnZnJpZW5kSWNvbicpLCB7fSksXHJcblx0XHRcdFx0dG9wM0ljb246IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMudGVtcGxhdGVzLmdldCgndG9wM0ljb24nKSwge30pLFxyXG5cdFx0XHRcdG5hbWU6ICdKb2huPGJyIC8+RG9lJyxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9Vc2VyLnBuZycpLFxyXG5cdFx0XHRcdHBvaW50OiA5OTksXHJcblx0XHRcdFx0cmFuazogMjAsXHJcblx0XHRcdFx0cGhvdG86IHRoaXMudGVtcGxhdGVzLmdldCgndG9wVXNlclBob3RvJylcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlcy5nZXQoJ3VzZXInKTtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhUTUxTaXplKCc8ZGl2IGNsYXNzPVwiZ2lnLWxlYWRlcmJvYXJkLXRvcFVzZXItY29udGFpbmVyXCI+JyArIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBpdGVtKSArICc8L2Rpdj4nKTtcclxuXHRcdH0sXHJcbiAgICAgICAgZ2V0QmFkZ2VIVE1MOiBmdW5jdGlvbiAoY2hhbGxlbmdlLCBpc0RlZmF1bHQpIHtcclxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMuZ2V0KCdiYWRnZScpO1xyXG5cdFx0XHR2YXIgaXRlbSA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShjaGFsbGVuZ2UpO1xyXG5cdFx0XHRpZiAoIWl0ZW0ubGV2ZWxUaXRsZSkgaXRlbS5sZXZlbFRpdGxlID0gJyc7XHJcblx0XHRcdGlmICghaXRlbS5sZXZlbERlc2NyaXB0aW9uKSBpdGVtLmxldmVsRGVzY3JpcHRpb24gPSAnJztcclxuXHRcdFx0aXRlbS5iYWRnZVVSTCA9IGdpZ3lhLmdsb2JhbC5nZXRQaG90b1VSTChpdGVtLmJhZGdlVVJMKTtcclxuXHRcdFx0cmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBpdGVtKTtcclxuXHRcdH0sXHJcbiAgICAgICAgc2hvd0RldGFpbHNCdWJibGU6IGZ1bmN0aW9uIChmcmllbmRJbmRleCwgZWwpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50RGV0YWlsc0J1YmJsZUZyaWVuZEluZGV4ID0gZnJpZW5kSW5kZXg7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzLmdldCgnZGV0YWlscycpO1xyXG5cdFx0XHR2YXIgaXRlbSA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZSh0aGlzLnVzZXJzW2ZyaWVuZEluZGV4XSk7XHJcblx0XHRcdGl0ZW0uVEVYVCA9IGdpZ3lhLnV0aWxzLmRlbGVnYXRlLmNyZWF0ZSh0aGlzLCB0aGlzLmdldFRleHQpO1xyXG5cdFx0XHRpdGVtLm5hbWUgPSBnaWd5YS51dGlscy5zYW5pdGl6ZS5zYW5pdGl6ZUhUTUwoaXRlbS5uYW1lLnRvVXBwZXJDYXNlKCkpO1xyXG5cdFx0XHRpdGVtLmRldGFpbHNGb290ZXIgPSAnJztcclxuXHRcdFx0aXRlbS5waG90byA9IHRoaXMudGVtcGxhdGVzLmdldCgnZGV0YWlsc1Bob3RvJyk7XHJcblx0XHRcdGl0ZW0ucGhvdG9VUkwgPSBnaWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwoaXRlbS5waG90b1VSTCk7XHJcblx0XHRcdHZhciBhY2hpZXZlbWVudHMgPSB0aGlzLnVzZXJzW2ZyaWVuZEluZGV4XS5hY2hpZXZlbWVudHM7XHJcblx0XHRcdHZhciBjaGFsbGVuZ2VOYW1lID0gdGhpcy5fcC5jaGFsbGVuZ2U7XHJcblx0XHRcdGlmICghY2hhbGxlbmdlTmFtZSkgY2hhbGxlbmdlTmFtZSA9ICdfZGVmYXVsdCc7XHJcblx0XHRcdGl0ZW0uY2hhbGxlbmdlQmFkZ2UgPSAnJztcclxuXHRcdFx0aXRlbS5wb2ludHMgPSB0aGlzLmdldENoYWxsZW5nZVBvaW50cyhmcmllbmRJbmRleCk7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5waG90b1VSTCB8fCBpdGVtLnBob3RvVVJMID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBob3RvVVJMID0gZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vVXNlci5wbmcnKTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICB2YXIgYXJDaGFsbGVuZ2VzSFRNTCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjaGlldmVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChhY2hpZXZlbWVudHNbaV0uYmFkZ2VVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNoaWV2ZW1lbnRzW2ldLmNoYWxsZW5nZUlEID09IGNoYWxsZW5nZU5hbWUpIHtcclxuXHRcdFx0XHRcdFx0aXRlbS5jaGFsbGVuZ2VCYWRnZSA9IHRoaXMuZ2V0QmFkZ2VIVE1MKGFjaGlldmVtZW50c1tpXSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhckNoYWxsZW5nZXNIVE1MLmxlbmd0aCA8IDQpIHtcclxuXHRcdFx0XHRcdFx0YXJDaGFsbGVuZ2VzSFRNTC5wdXNoKHRoaXMuZ2V0QmFkZ2VIVE1MKGFjaGlldmVtZW50c1tpXSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuICAgICAgICAgICAgaXRlbS5vdGhlckNoYWxsZW5nZXNCYWRnZXMgPSAnPGRpdiBjbGFzcz1cImdpZy1sZWFkZXJib2FyZC1vdGhlckJhZGdlc1wiIHN0eWxlPVwib3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1wiPicgKyBhckNoYWxsZW5nZXNIVE1MLmpvaW4oJycpICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm90aGVyQ2hhbGxlbmdlc0JhZGdlcyAhPSAnJykgaXRlbS5kZXRhaWxzRm9vdGVyID0gdGhpcy50ZW1wbGF0ZXMuZ2V0KCdkZXRhaWxzRm9vdGVyJyk7XHJcbiAgICAgICAgICAgIGl0ZW0uaWQgPSB0aGlzLl9lbGlkICsgJ19kZXRhaWxzJyArIGZyaWVuZEluZGV4O1xyXG5cdFx0XHR2YXIgZGV0YWlsc0hUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgaXRlbSk7XHJcblx0XHRcdGdpZ3lhLmdsb2JhbC5wdXRHTUJhbGxvb25OZXh0VG8oZWwsIGRldGFpbHNIVE1MLCBudWxsLCAzNDQsIG51bGwsIG51bGwsIHRoaXMuX2VsaWQgKyAnX2RldGFpbHMnKTtcclxuICAgICAgICAgICAgdmFyIGltZ1VzZXJQaG90byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQgKyAnX3VzZXJQaG90bycpO1xyXG5cdFx0XHRnaWd5YS5nbG9iYWwuc2NhbGVJbWFnZVRvQ29udGFpbmVyKGltZ1VzZXJQaG90byk7XHJcblx0XHR9LFxyXG5cdFx0aGlkZURldGFpbHNCdWJibGU6IGZ1bmN0aW9uIChmcmllbmRJbmRleCwgZWwpIHtcclxuXHRcdFx0Ly8gVGltZW91dCBkZWxheSBiZWNhdXNlIHdlIHdhbnQgdG8gZ2l2ZSBzaG93RGV0YWlsc0J1YmJsZSBhIGNoYW5jZSB0byByZW5kZXIgYSBkaWZmZXJlbnQgR01CYWxsb29uLlxyXG5cdFx0XHR2YXIgVGhpcyA9IHRoaXM7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gRG8gbm90IGhpZGUgYmFsbG9vbiBpZiBhIGRpZmZlcmVudCBiYWxsb29uIHdhcyByZW5kZXJlZC5cclxuXHRcdFx0XHRpZiAoVGhpcy5jdXJyZW50RGV0YWlsc0J1YmJsZUZyaWVuZEluZGV4ID09PSBmcmllbmRJbmRleCkge1xyXG5cdFx0XHRcdFx0Z2lneWEuZ2xvYmFsLnJlbW92ZUdNQmFsbG9vbigpO1xyXG5cdFx0XHRcdFx0VGhpcy5jdXJyZW50RGV0YWlsc0J1YmJsZUZyaWVuZEluZGV4ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9LFxyXG4gICAgICAgIGdldENoYWxsZW5nZVBvaW50czogZnVuY3Rpb24gKGZyaWVuZEluZGV4KSB7XHJcblx0XHRcdHZhciBjaGFsbGVuZ2VOYW1lID0gdGhpcy5fcC5jaGFsbGVuZ2U7XHJcblx0XHRcdGlmICghY2hhbGxlbmdlTmFtZSkgY2hhbGxlbmdlTmFtZSA9ICdfZGVmYXVsdCc7XHJcblx0XHRcdHZhciBhY2hpZXZlbWVudHMgPSB0aGlzLnVzZXJzW2ZyaWVuZEluZGV4XS5hY2hpZXZlbWVudHM7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWNoaWV2ZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWNoaWV2ZW1lbnRzW2ldLmNoYWxsZW5nZUlEID09IGNoYWxsZW5nZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcC5wZXJpb2QgPT0gJ2FsbCcpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGFjaGlldmVtZW50c1tpXS5wb2ludHNUb3RhbDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBhY2hpZXZlbWVudHNbaV0ucG9pbnRzN0RheXM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRnZXRJbnN0YW5jZVJlZlN0cmluZzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gJ2dpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMubGVhZGVyYm9hcmQuaW5zdGFuY2VzW1xcJycgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5fZWxpZCkgKyAnXFwnXSc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==