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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.gm.plugins.notifications.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.gm.plugins.notifications.js":
/*!***********************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.gm.plugins.notifications.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="gigya.services.socialize.plugins.js" />
if (typeof window.gigya.services.gm.plugins == 'undefined') window.gigya.services.gm.plugins = {};
(function () {
	window.gigya.services.gm.plugins.notifications = {
		instances: {},
		showNotifications: function (c, p, i) {
			privateScope.createInstance(c, p, i);
		}
	}
	var publicScope = window.gigya.services.gm.plugins.notifications;

	var privateScope = {
		instances_size: 0,
		notificationsPlugin: function (c, p, i) {
			this._c = c;
			this._p = p;
			this._i = i;
			this._elid = p.containerID
		},
		createInstance: function (c, p, i) {
		    var el = document.getElementById(p.containerID);
			if (el == null) return;
			el.innerHTML = "";

			var instance = new privateScope.notificationsPlugin(c, p, i);
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
			templates.set("notification",
			[
				'<div class="gig-notifications">',
					'<div class="gig-notifications-body">${body}</div>',
					'<div class="gig-notifications-footer">${footer}</div>',
					'<div class="gig-notifications-shareButton-container">${shareButton}</div>',
				'</div>'
			]);
			templates.set("notificationCaption",
			[
				'<div class="gig-notifications-caption">$TEXT("alert_new_level_reached")</div>'
			]);
			templates.set("notificationBody",
			[
				'<table role="presentation" cellspacing="0" cellpadding="0"><tr>',
					'<td class="gig-notifications-body-badge-container"><img alt="" class="gig-notifications-body-badge" src="$badgeURL" /></td>',
					'<td class="gig-notifications-body-text-container"><div class="gig-notifications-body-text">',
						'$congratulations<br />$challengeDescription',
					'</div></td>',
				'</tr></table>'
			]);
			templates.set("notificationFooter",
			[
				'<table role="presentation" cellspacing="0" cellpadding="0"><tr>',
					'<td class="gig-notifications-footer-text-container"><div class="gig-notifications-footer-text">$footerText</div></td>',
					'<td class="gig-notifications-footer-nextLevelBadge-container"><a id="${id}_nextLevelBadge"><img alt="" src="$nextLevelLockedBadgeURL" class="gig-notifications-footer-nextLevelBadge" /></a></td>',
				'</tr></table>'
			]);
			templates.set("shareButton",
			[
				'<div class="gig-notifications-shareButton" id="${id}_shareButton"></div>'
			]);
			templates.set('closeButton',
			[
				'<div class="gig-notifications-closeImage" id="${id}_closeButton"></div>'
			]);
			return templates;
		},
		defaultCss: [
			'.gig-notifications *, div.gig-notifications, .gig-notifications span, .gig-notifications a:hover, .gig-notifications a:visited, .gig-notifications a:link, .gig-notifications a:active{',
			'border:none; line-height:normal;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;',
			'font-family:arial;font-size:12px;color:#313131;background:none;text-align:left;z-index:99999}',
			'div.gig-notifications-body {margin:7px 0;width:100%;}',
			'div.gig-notifications-body-text {margin-right:7px}',
			'td.gig-notifications-body-badge-container {vertical-align:top}',
			'td.gig-notifications-body-text-container {vertical-align:middle}',
			'span.gig-notifications-body-text-congratulations {font-weight:bold}',
			'span.gig-notifications-body-text-levelTitle {font-weight:bold}',
			'img.gig-notifications-body-badge {width:50px;height:50px;margin-right:10px;}',
			'div.gig-notifications-footer{border-top: 1px solid #F0F0F0; padding: 7px 0 10px 0;width:100%}',
			'div.gig-notifications-footer-text {margin-right:10px;}',
			'span.gig-notifications-footer-text-achievementsLeft {font-weight:bold}',
			'span.gig-notifications-footer-text-nextlevelTitle {font-weight:bold}',
			'img.gig-notifications-footer-nextLevelBadge {width: 40px;height:40px}',
			'td.gig-notifications-footer-nextLevelBadge-container {vertical-align:top;}',
			'div.gig-notifications-shareButton {margin-left:auto;cursor:pointer;height: 18px;width: 70px;background-image:url(\''+ window.gigya._.getCdnResource('/gs/i/gm/shareButton.png')+'\')}',
			'div.gig-notifications-shareButton-container {text-align:right;overflow:hidden;}',
			'div.gig-notifications-closeImage {cursor:pointer; background-image:url("' + window.gigya._.getCdnResource('/gs/i/gm/CloseButton.png')+ '"); width:14px;height:14px;}',
			'.gig-notifications div.gig-balloon-frame {-ms-filter:"" !important;filter:"" !important; border-bottom:none}',
            'div.gig-notifications-footer-text a.gig-notifications-footer-link { color:#3e59ff;cursor:pointer;text-decoration:underline; }',
            'div.gig-notifications-footer-text a.gig-notifications-footer-link * { color:#3e59ff;cursor:pointer;text-decoration:underline; }'
		]
	}

	privateScope.notificationsPlugin.prototype = {
		init: function () {
			this.templates = privateScope.createDefaultTemplates();
			if (this._p.headerTemplate) this.templates.set('notificationCaption', this._p.headerTemplate);
			if (this._p.bodyTemplate) this.templates.set('notificationBody', this._p.bodyTemplate);
			if (this._p.footerTemplate) this.templates.set('notificationFooter', this._p.footerTemplate);
			if (this._p.dialogTemplate) this.templates.set('notification', this._p.dialogTemplate);

			if (this._p.cssPrefix || !privateScope.addedCSS) {
				window.gigya.global.addCSS(privateScope.defaultCss, this._p.cssPrefix);
				privateScope.addedCSS = true;
			}
			var This=this;
			window.gigya.services.socialize.getUserSettings(this._c, {group:'gmSettings', callback:function(e){This.onSettings(e)}});

			window.gigya.services.gm.getChallengeStatus(this._c,{details:'full', callback:function(e){This.afterGetChallenge(e)}});
			/*this.afterGetChallenge({
				challenges: [
				{
					challengeID:'DJ',
					level:3,
					isNewLevel:true,
					pointsTotal:1922,
					points7Days:45,
					rank:2,
					rank7Days:3,
					badgeURL:'http://cdn.blipstatic.com/images/badges/dj-1.png',
					levelTitle:'Level 1 DJ',
					levelDescription: 'Blip a song with 2 external services enabled.',
					challengeTitle:'DJ',
					challengeDescription:'The DJ badge is earned by blipping songs.',
					pointsCurrent:1500,
					achievementsToNextLevel:15,
					requiredAchievement:'Blips',
					nextLevelTitle:'Level 2 DJ',
					nextLevelBadgeURL:'http://cdn.blipstatic.com/images/badges/dj-2.png',
					nextLevelLockedBadgeURL: 'http://cdn.blipstatic.com/images/badges/dj-silhouette.png',
					nextLevelActionURL:''
				},
				{
					challengeID:'broadcaster',
					level:3,
					isNewLevel:true,
					pointsTotal:1922,
					points7Days:45,
					rank:2,
					rank7Days:3,
					badgeURL:'http://cdn.blipstatic.com/images/badges/broadcaster-2.png',
					levelTitle:'Level 2 Broadcaster',
					levelDescription: 'Blip a song with 2 external services enabled.',
					challengeTitle:'Broadcaster',
					challengeDescription:'The Broadcaster badge is earned by blipping a song with enabled external services (e.g. Twitter, Facebook). You can enable accounts in your service settings.',
					pointsCurrent:1500,
					achievementsToNextLevel:15,
					requiredAchievement:'Blips with enabled external services',
					nextLevelTitle:'',
					nextLevelBadgeURL:'http://cdn.blipstatic.com/images/badges/broadcaster-3.png',
					nextLevelLockedBadgeURL: 'http://cdn.blipstatic.com/images/badges/broadcaster-silhouette.png',
					nextLevelActionURL:'http://www.dor.com/nextLevel.htm'
				},
				{
					challengeID:'hotStreak',
					level:3,
					isNewLevel:false,
					pointsTotal:1922,
					points7Days:45,
					rank:2,
					rank7Days:3,
					badgeURL:'http://cdn.blipstatic.com/images/badges/hotstreak-1.png',
					levelTitle:'Level 1 Hot Streak',
					levelDescription: 'Have 5 blips in a row get props or reblipped.',
					challengeTitle:'Hot Streak',
					challengeDescription:'The Hot Streak badge is earned by having successive blips get props or reblipped by different DJs.',
					pointsCurrent:1500,
					achievementsToNextLevel:15,
					requiredAchievement:'blips in a row',
					nextLevelTitle:'Level 2 Hot Streak ',
					nextLevelBadgeURL:'http://cdn.blipstatic.com/images/badges/hotstreak-2.png',
					nextLevelLockedBadgeURL: 'http://cdn.blipstatic.com/images/badges/hotstreak-silhouette.png',
					nextLevelActionURL:''
				}
				]
			});*/
		},
		getText: function (textKey, replaceStr, withStr) {
		    return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.gm.plugins.notifications.js', textKey, this._p.lang, replaceStr, withStr);
		},
		afterGetChallenge: function (e) {
			if (e.errorCode>0) {
				window.gigya.events.dispatchErrorFromResponse(this._p, e);
			} else {
			    if (!privateScope.waitingForNotifications && !window.gigya.utils.validation.isExplicitFalse(this._p.waitForNotifications)) {
			        privateScope.waitingForNotifications = true;
			        var This = this;
			        var callNotification = function () {
			            window.setTimeout(
				            function () {
				                window.gigya.gm.showNotifications(This._p);
				            }, 3000);
			        };
			        window.gigya.events.addMap({
			            defaultMethod: callNotification,
			            eventMap: [
							{ events: "sendDone,reactionClicked,login,connectionAdded,commentSubmitted,commentVoted", args: [] }
			            ]
			        });
			        window.gigya.socialize.addEventHandlers({ listenerType: 'component' }, {
			            onActionNotified: callNotification
			        });
			    }
				if (e.achievements) {
					this.achievements = e.achievements;
					this.draw();
				}
			}
		},
		draw:function() {
		    if (this.achievements && this.settings) {
				this.lastNotificationIndex=-1;
				this.drawNextNotification();								
			}
			if (!this.firedLoadEvent) {
			    this.firedLoadEvent = true;
			    window.gigya.events.dispatchForWidget({ eventName: 'load', containerID: this._p['containerID'] }, this._p);
			}
		},
		drawNextNotification: function() {
			for (var i=this.lastNotificationIndex+1; i<this.achievements.length; i++) {
				var challenge = this.achievements[i];
				if ((challenge.isNewLevel && challenge.level > 0) || this._p.debugMode) {
					//preload images
					var imgs=[];
					if (challenge.badgeURL) imgs.push(window.gigya.global.getPhotoURL(challenge.badgeURL));
					if (challenge.nextLevelLockedBadgeURL) imgs.push(window.gigya.global.getPhotoURL(challenge.nextLevelLockedBadgeURL,  window.gigya._.getCdnResource('/gs/i/gm/LockedBadge.png')));
					var This=this;
					window.gigya.global.preloadImages(imgs, function() {
						window.gigya.events.dispatchForWidget({
							eventName: 'newLevel',
							challenge: challenge
						},This._p);
						This.drawNotification(challenge)
					});
					this.lastNotificationIndex=i;
					return;
				}
			}
			
		    try {
		        var container = document.getElementById(this._elid);
		        container.parentNode.removeChild(container);
				window.detachEvent('onscroll', container.fnFixPosition);
				window.detachEvent('onresize', container.fnFixPosition);
			} catch(ex){}
		},
		closeNotification: function() {
			if (this.closeTimeout) {
				this.stopTimeout();
			}
			window.gigya.events.dispatchForWidget({eventName: 'close'},this._i);
			var divNotification = document.getElementById(this._elid+'_notification');
			window.gigya.global.removeIframeShim(divNotification);
			document.getElementById(this._elid).innerHTML='';
			this.drawNextNotification();
		},
		drawNotification: function (challenge) {
			var item = window.gigya.utils.object.clone(challenge);
			item.TEXT = window.gigya.utils.delegate.create(this, this.getText);
			item.id = this._elid+'_notification';
			var captionTemplate = this.templates.get('notificationCaption');
			var container = document.getElementById(this._elid);

			if (item.nextLevelTitle && item.actionStatus && item.actionStatus.length > 0) {
			    if (item.nextLevelActionURL) {
			        item.footer = this.templates.get('notificationFooter');
			        item.footerText = ('<a target="_blank" class="gig-notifications-footer-text gig-notifications-footer-link" href="$nextLevelActionURL" alt="">' + this.getText('learn_how_to_unlock_the_leveltitle_badge') + '</a>')
                        .replace('%leveltitle', '<span class="gig-notifications-footer-text gig-notifications-footer-text-nextlevelTitle">$nextLevelTitle</span>');
			    }
			    else {
			        item.footer = '';
			    }
			}
			else if (item.nextLevelTitle && typeof item.pointsStatus !== 'undefined') {
			    item.footer = this.templates.get('notificationFooter');
			    item.requiredAchievement = this.getText(challenge.requiredAchievement) || item.requiredAchievement;
				item.footerText = this.getText('num_more_achievement_to_unlock_leveltitle_level', '%num', '<span class="gig-notifications-footer-text gig-notifications-footer-text-achievementsLeft">$achievementsToNextLevel</span>')
					.replace('%achievement','$requiredAchievement')
					.replace('%leveltitle', '<span class="gig-notifications-footer-text gig-notifications-footer-text-nextlevelTitle">$nextLevelTitle</span>');
			}
			else {
			    item.footer = '';
			}

			item.shareButtonImgSrc = window.gigya._.getCdnResource('/gs/i/gm/shareButton.png');
			item.shareButton = '';
			item.closeButton = this.templates.get('closeButton');
			item.badgeURL = window.gigya.global.getPhotoURL(item.badgeURL);
			item.nextLevelLockedBadgeURL = window.gigya.global.getPhotoURL(item.nextLevelLockedBadgeURL, window.gigya._.getCdnResource('/gs/i/gm/LockedBadge.png'));
			if (!this.settings.autoShare) {
				item.shareButton = window.gigya.utils.templates.fill(this.templates.get('shareButton'), item);
			}
			
			item.congratulations = '<span class="gig-notifications-body-text gig-notifications-body-text-congratulations">$TEXT("congratulations")</span> ' + this.getText('youve_unlocked_the_leveltitle_level', '%levelTitle', '<span class="gig-notifications-body-text gig-notifications-body-text-levelTitle">$levelTitle</span>');
			item.body = window.gigya.utils.templates.fill(this.templates.get('notificationBody'), item);

			var template = this.templates.get('notification');
			var captionHTML = window.gigya.utils.templates.fill(captionTemplate, item);
			var notificationHTML = window.gigya.utils.templates.fill(template, item);
			if (this._p.dialogTemplate != null) {
				container.innerHTML = '<span id="'+this._elid+'_notification">'+notificationHTML+'</span>';
			} else {
				container.innerHTML = '<span id="'+this._elid+'_notification">'+window.gigya.global.getBalloonHTML(notificationHTML, captionHTML, 300, null, null, null, null, this.getInstanceRefString()+'.closeNotification()')+'</span>';
			}
			container.className='gig-notifications';
			var divNotification = document.getElementById(this._elid+'_notification');

			var This = this;
			divNotification.style.position='relative';
			if (window.gigya.localInfo.quirksMode) {
				container.style.overflow='hidden';
				divNotification.style.zoom='1';
				container.style.position='absolute';
				if (!container.fnFixPosition) {
					container.fnFixPosition = function() {
						var vph = window.innerHeight; 
						var vpw = window.innerWidth; 
						if (!vph || vph == 0) { vph = document.body.clientHeight; vpw = document.body.clientWidth; }
						var scrl=window.gigya.utils.viewport.getScroll();		
						var vpt=scrl.top;
						var vpl=scrl.left;
				
						var bottomRightTop = vpt + vph;
						var bottomRightLeft = vpl + vpw;
						container.style.left = (bottomRightLeft - container.offsetWidth - 20)+'px';
						container.style.top = (bottomRightTop - container.offsetHeight)+'px';
						var divNotification = document.getElementById(This._elid+'_notification');
						if (divNotification && divNotification.shim) divNotification.shim.update();
					}
					window.attachEvent('onscroll', container.fnFixPosition);
					window.attachEvent('onresize', container.fnFixPosition);
				}
				container.fnFixPosition();
			} else {
				container.style.left = '';
				container.style.position='fixed';
				container.style.bottom = '0';
				container.style.right = '10px';
			}
			if (window.gigya.localInfo.isIE) {
				window.gigya.global.addIframeShim(divNotification);
			}
			divNotification.slideBottom = container.offsetHeight;
			//container.slideBottom = container.offsetHeight;

			
			This.slideNotification(divNotification);
			window.gigya.services.gm.resetLevelStatus(this._c,{challenges: challenge.challengeID});
			challenge.isNewLevel = false;
			var shareButton = document.getElementById(item.id+'_shareButton');
			if (shareButton) {
				shareButton.onclick = function() {
					This.shareButtonClicked(challenge);
				}
			}
			var closeButton = document.getElementById(item.id+'_closeButton');
			if (closeButton) {
				closeButton.onclick = function() {
					This.closeNotification();
				}
			}
			var badge = document.getElementById(item.id+'_nextLevelBadge');
			if (badge && challenge.nextLevelActionURL) {
			    badge.href = challenge.nextLevelActionURL;
			    badge.target = "_blank";
			}

			divNotification.onmouseover = function() {This.stopTimeout()};
			divNotification.onmouseout = function() {if (!This.noTimeout) This.startTimeout()};
			this.startTimeout();
			this.noTimeout=false;
			this.publishChallenge(challenge);
		},
		stopTimeout: function() {
			if (this.closeTimeout) {
				clearTimeout(this.closeTimeout);
				this.closeTimeout=null;
			}
		},
		startTimeout: function() {
			var This=this;
			var closeTimeout = (this._p.closeTimeout!=null?this._p.closeTimeout:10000);
			if (closeTimeout>0) {
				this.closeTimeout = window.setTimeout(function(){This.closeNotification()}, closeTimeout);
			}
		},
		onSettings: function(e) {
			if (e.errorCode>0) {
				window.gigya.events.dispatchErrorFromResponse(this._p, e);
			}
			if (e.settings) {
				this.settings = e.settings;
				this.draw();
			}
		},
		publishChallenge: function(challenge) {
			var scope;
			if (!this.settings.privateProfile && this._p.feedID) {
				scope='internal';
			}
			if (this.settings.autoShare) {
				scope = (scope=='internal'?'both':'external');
			}

			if (scope) {
				window.gigya.services.socialize.publishUserAction(this._c, { scope: scope, userAction: this.getUserAction(challenge) });
			}
		},
		slideNotification: function(divNotification) {
			divNotification.style.top=divNotification.slideBottom+'px';
			if (divNotification.shim) divNotification.shim.update();
			var This=this;
			this.slideInterval = window.setInterval(function() {
				divNotification.slideBottom-=5;
				divNotification.style.top=divNotification.slideBottom+'px';
				if (divNotification.shim) divNotification.shim.update();
				if (divNotification.slideBottom<=1) {
					divNotification.style.top='0';
					if (divNotification.shim) divNotification.shim.update();
					window.clearInterval(This.slideInterval);
				}
			}, 10);
		},
		shareButtonClicked: function (challenge) {
			var This=this;
			var params = {
				containerID: '',
				userAction: this.getUserAction(challenge, true),
				sourceData: {
					challengeID: challenge.challengeID,
					level: challenge.level
				},
				onSendDone: function(e) {
					window.gigya.events.dispatchForWidget(e,This._p);
				},
				onClose: function(e) {
					This.closeNotification();
				}
			}
			window.gigya.services.socialize.showShareUI(window.gigya.utils.object.clone(this._c, true, true), params, this._c.shareParams);
			this.stopTimeout();
			this.noTimeout=true;
		},
		getUserAction: function(challenge, canUseShareParams) {
			var userAction = this._p.userAction;
			if (canUseShareParams && this._p.shareParams && this._p.shareParams.userAction) userAction = this._p.shareParams.userAction;

			if (userAction) {
				userAction = new window.gigya.services.socialize.UserAction(window.gigya.utils.object.clone(userAction, true, true));
			} else {
				userAction = new window.gigya.services.socialize.UserAction();
				userAction.setTitle(this.getText('i_just_achieved_leveltitle', '%leveltitle', '$levelTitle'));
				userAction.setDescription("$levelDescription")
				userAction.addImage('$badgeURL')
			}
			if (!userAction.linkBack) {
				userAction.setLinkBack(document.location.href);
			}
			return window.gigya.global.fillUserActionTemplate(userAction, challenge);
		},
		getInstanceRefString: function () {
			return 'gigya.services.gm.plugins.notifications.instances[\'' + encodeURIComponent(this._elid) + '\']';
		}
	}


})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMubm90aWZpY2F0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxXQUFXLFlBQUsscUNBQXFDLFlBQUs7QUFDMUQ7QUFDQSxDQUFDLFlBQUs7QUFDTixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBSzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7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Z3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMubm90aWZpY2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMubm90aWZpY2F0aW9ucy5qc1wiKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5qc1wiIC8+XHJcbmlmICh0eXBlb2YgZ2lneWEuc2VydmljZXMuZ20ucGx1Z2lucyA9PSAndW5kZWZpbmVkJykgZ2lneWEuc2VydmljZXMuZ20ucGx1Z2lucyA9IHt9O1xyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGdpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMubm90aWZpY2F0aW9ucyA9IHtcclxuXHRcdGluc3RhbmNlczoge30sXHJcblx0XHRzaG93Tm90aWZpY2F0aW9uczogZnVuY3Rpb24gKGMsIHAsIGkpIHtcclxuXHRcdFx0cHJpdmF0ZVNjb3BlLmNyZWF0ZUluc3RhbmNlKGMsIHAsIGkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR2YXIgcHVibGljU2NvcGUgPSBnaWd5YS5zZXJ2aWNlcy5nbS5wbHVnaW5zLm5vdGlmaWNhdGlvbnM7XHJcblxyXG5cdHZhciBwcml2YXRlU2NvcGUgPSB7XHJcblx0XHRpbnN0YW5jZXNfc2l6ZTogMCxcclxuXHRcdG5vdGlmaWNhdGlvbnNQbHVnaW46IGZ1bmN0aW9uIChjLCBwLCBpKSB7XHJcblx0XHRcdHRoaXMuX2MgPSBjO1xyXG5cdFx0XHR0aGlzLl9wID0gcDtcclxuXHRcdFx0dGhpcy5faSA9IGk7XHJcblx0XHRcdHRoaXMuX2VsaWQgPSBwLmNvbnRhaW5lcklEXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlSW5zdGFuY2U6IGZ1bmN0aW9uIChjLCBwLCBpKSB7XHJcblx0XHQgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocC5jb250YWluZXJJRCk7XHJcblx0XHRcdGlmIChlbCA9PSBudWxsKSByZXR1cm47XHJcblx0XHRcdGVsLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG5cdFx0XHR2YXIgaW5zdGFuY2UgPSBuZXcgcHJpdmF0ZVNjb3BlLm5vdGlmaWNhdGlvbnNQbHVnaW4oYywgcCwgaSk7XHJcblx0XHRcdHB1YmxpY1Njb3BlLmluc3RhbmNlc1twLmNvbnRhaW5lcklEXSA9IGluc3RhbmNlO1xyXG5cdFx0XHRwcml2YXRlU2NvcGUuaW5zdGFuY2VzX3NpemUrKztcclxuXHRcdFx0aW5zdGFuY2UuaW5pdCgpO1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZURlZmF1bHRUZW1wbGF0ZXM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHRlbXBsYXRlcyA9IHtcclxuXHRcdFx0XHRfbWFwOiB7fSxcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9tYXBba2V5XTtcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9tYXBba2V5XSA9ICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSA/IHZhbHVlLmpvaW4oXCJcIikgOiB2YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGVtcGxhdGVzLnNldChcIm5vdGlmaWNhdGlvblwiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbm90aWZpY2F0aW9uc1wiPicsXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1ub3RpZmljYXRpb25zLWJvZHlcIj4ke2JvZHl9PC9kaXY+JyxcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyXCI+JHtmb290ZXJ9PC9kaXY+JyxcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtc2hhcmVCdXR0b24tY29udGFpbmVyXCI+JHtzaGFyZUJ1dHRvbn08L2Rpdj4nLFxyXG5cdFx0XHRcdCc8L2Rpdj4nXHJcblx0XHRcdF0pO1xyXG5cdFx0XHR0ZW1wbGF0ZXMuc2V0KFwibm90aWZpY2F0aW9uQ2FwdGlvblwiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctbm90aWZpY2F0aW9ucy1jYXB0aW9uXCI+JFRFWFQoXCJhbGVydF9uZXdfbGV2ZWxfcmVhY2hlZFwiKTwvZGl2PidcclxuXHRcdFx0XSk7XHJcblx0XHRcdHRlbXBsYXRlcy5zZXQoXCJub3RpZmljYXRpb25Cb2R5XCIsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj48dHI+JyxcclxuXHRcdFx0XHRcdCc8dGQgY2xhc3M9XCJnaWctbm90aWZpY2F0aW9ucy1ib2R5LWJhZGdlLWNvbnRhaW5lclwiPjxpbWcgYWx0PVwiXCIgY2xhc3M9XCJnaWctbm90aWZpY2F0aW9ucy1ib2R5LWJhZGdlXCIgc3JjPVwiJGJhZGdlVVJMXCIgLz48L3RkPicsXHJcblx0XHRcdFx0XHQnPHRkIGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtYm9keS10ZXh0LWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJnaWctbm90aWZpY2F0aW9ucy1ib2R5LXRleHRcIj4nLFxyXG5cdFx0XHRcdFx0XHQnJGNvbmdyYXR1bGF0aW9uczxiciAvPiRjaGFsbGVuZ2VEZXNjcmlwdGlvbicsXHJcblx0XHRcdFx0XHQnPC9kaXY+PC90ZD4nLFxyXG5cdFx0XHRcdCc8L3RyPjwvdGFibGU+J1xyXG5cdFx0XHRdKTtcclxuXHRcdFx0dGVtcGxhdGVzLnNldChcIm5vdGlmaWNhdGlvbkZvb3RlclwiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0Jzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCI+PHRyPicsXHJcblx0XHRcdFx0XHQnPHRkIGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyLXRleHQtY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy1ub3RpZmljYXRpb25zLWZvb3Rlci10ZXh0XCI+JGZvb3RlclRleHQ8L2Rpdj48L3RkPicsXHJcblx0XHRcdFx0XHQnPHRkIGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyLW5leHRMZXZlbEJhZGdlLWNvbnRhaW5lclwiPjxhIGlkPVwiJHtpZH1fbmV4dExldmVsQmFkZ2VcIj48aW1nIGFsdD1cIlwiIHNyYz1cIiRuZXh0TGV2ZWxMb2NrZWRCYWRnZVVSTFwiIGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyLW5leHRMZXZlbEJhZGdlXCIgLz48L2E+PC90ZD4nLFxyXG5cdFx0XHRcdCc8L3RyPjwvdGFibGU+J1xyXG5cdFx0XHRdKTtcclxuXHRcdFx0dGVtcGxhdGVzLnNldChcInNoYXJlQnV0dG9uXCIsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1ub3RpZmljYXRpb25zLXNoYXJlQnV0dG9uXCIgaWQ9XCIke2lkfV9zaGFyZUJ1dHRvblwiPjwvZGl2PidcclxuXHRcdFx0XSk7XHJcblx0XHRcdHRlbXBsYXRlcy5zZXQoJ2Nsb3NlQnV0dG9uJyxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtY2xvc2VJbWFnZVwiIGlkPVwiJHtpZH1fY2xvc2VCdXR0b25cIj48L2Rpdj4nXHJcblx0XHRcdF0pO1xyXG5cdFx0XHRyZXR1cm4gdGVtcGxhdGVzO1xyXG5cdFx0fSxcclxuXHRcdGRlZmF1bHRDc3M6IFtcclxuXHRcdFx0Jy5naWctbm90aWZpY2F0aW9ucyAqLCBkaXYuZ2lnLW5vdGlmaWNhdGlvbnMsIC5naWctbm90aWZpY2F0aW9ucyBzcGFuLCAuZ2lnLW5vdGlmaWNhdGlvbnMgYTpob3ZlciwgLmdpZy1ub3RpZmljYXRpb25zIGE6dmlzaXRlZCwgLmdpZy1ub3RpZmljYXRpb25zIGE6bGluaywgLmdpZy1ub3RpZmljYXRpb25zIGE6YWN0aXZleycsXHJcblx0XHRcdCdib3JkZXI6bm9uZTsgbGluZS1oZWlnaHQ6bm9ybWFsO3BhZGRpbmc6MHB4O21hcmdpbjowcHg7Y29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZTt3aWR0aDphdXRvO2Zsb2F0Om5vbmU7LW1vei1ib3JkZXItcmFkaXVzOjA7Ym9yZGVyLXJhZGl1czowOycsXHJcblx0XHRcdCdmb250LWZhbWlseTphcmlhbDtmb250LXNpemU6MTJweDtjb2xvcjojMzEzMTMxO2JhY2tncm91bmQ6bm9uZTt0ZXh0LWFsaWduOmxlZnQ7ei1pbmRleDo5OTk5OX0nLFxyXG5cdFx0XHQnZGl2LmdpZy1ub3RpZmljYXRpb25zLWJvZHkge21hcmdpbjo3cHggMDt3aWR0aDoxMDAlO30nLFxyXG5cdFx0XHQnZGl2LmdpZy1ub3RpZmljYXRpb25zLWJvZHktdGV4dCB7bWFyZ2luLXJpZ2h0OjdweH0nLFxyXG5cdFx0XHQndGQuZ2lnLW5vdGlmaWNhdGlvbnMtYm9keS1iYWRnZS1jb250YWluZXIge3ZlcnRpY2FsLWFsaWduOnRvcH0nLFxyXG5cdFx0XHQndGQuZ2lnLW5vdGlmaWNhdGlvbnMtYm9keS10ZXh0LWNvbnRhaW5lciB7dmVydGljYWwtYWxpZ246bWlkZGxlfScsXHJcblx0XHRcdCdzcGFuLmdpZy1ub3RpZmljYXRpb25zLWJvZHktdGV4dC1jb25ncmF0dWxhdGlvbnMge2ZvbnQtd2VpZ2h0OmJvbGR9JyxcclxuXHRcdFx0J3NwYW4uZ2lnLW5vdGlmaWNhdGlvbnMtYm9keS10ZXh0LWxldmVsVGl0bGUge2ZvbnQtd2VpZ2h0OmJvbGR9JyxcclxuXHRcdFx0J2ltZy5naWctbm90aWZpY2F0aW9ucy1ib2R5LWJhZGdlIHt3aWR0aDo1MHB4O2hlaWdodDo1MHB4O21hcmdpbi1yaWdodDoxMHB4O30nLFxyXG5cdFx0XHQnZGl2LmdpZy1ub3RpZmljYXRpb25zLWZvb3Rlcntib3JkZXItdG9wOiAxcHggc29saWQgI0YwRjBGMDsgcGFkZGluZzogN3B4IDAgMTBweCAwO3dpZHRoOjEwMCV9JyxcclxuXHRcdFx0J2Rpdi5naWctbm90aWZpY2F0aW9ucy1mb290ZXItdGV4dCB7bWFyZ2luLXJpZ2h0OjEwcHg7fScsXHJcblx0XHRcdCdzcGFuLmdpZy1ub3RpZmljYXRpb25zLWZvb3Rlci10ZXh0LWFjaGlldmVtZW50c0xlZnQge2ZvbnQtd2VpZ2h0OmJvbGR9JyxcclxuXHRcdFx0J3NwYW4uZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyLXRleHQtbmV4dGxldmVsVGl0bGUge2ZvbnQtd2VpZ2h0OmJvbGR9JyxcclxuXHRcdFx0J2ltZy5naWctbm90aWZpY2F0aW9ucy1mb290ZXItbmV4dExldmVsQmFkZ2Uge3dpZHRoOiA0MHB4O2hlaWdodDo0MHB4fScsXHJcblx0XHRcdCd0ZC5naWctbm90aWZpY2F0aW9ucy1mb290ZXItbmV4dExldmVsQmFkZ2UtY29udGFpbmVyIHt2ZXJ0aWNhbC1hbGlnbjp0b3A7fScsXHJcblx0XHRcdCdkaXYuZ2lnLW5vdGlmaWNhdGlvbnMtc2hhcmVCdXR0b24ge21hcmdpbi1sZWZ0OmF1dG87Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OiAxOHB4O3dpZHRoOiA3MHB4O2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycrIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2dtL3NoYXJlQnV0dG9uLnBuZycpKydcXCcpfScsXHJcblx0XHRcdCdkaXYuZ2lnLW5vdGlmaWNhdGlvbnMtc2hhcmVCdXR0b24tY29udGFpbmVyIHt0ZXh0LWFsaWduOnJpZ2h0O292ZXJmbG93OmhpZGRlbjt9JyxcclxuXHRcdFx0J2Rpdi5naWctbm90aWZpY2F0aW9ucy1jbG9zZUltYWdlIHtjdXJzb3I6cG9pbnRlcjsgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCInICsgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vQ2xvc2VCdXR0b24ucG5nJykrICdcIik7IHdpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7fScsXHJcblx0XHRcdCcuZ2lnLW5vdGlmaWNhdGlvbnMgZGl2LmdpZy1iYWxsb29uLWZyYW1lIHstbXMtZmlsdGVyOlwiXCIgIWltcG9ydGFudDtmaWx0ZXI6XCJcIiAhaW1wb3J0YW50OyBib3JkZXItYm90dG9tOm5vbmV9JyxcclxuICAgICAgICAgICAgJ2Rpdi5naWctbm90aWZpY2F0aW9ucy1mb290ZXItdGV4dCBhLmdpZy1ub3RpZmljYXRpb25zLWZvb3Rlci1saW5rIHsgY29sb3I6IzNlNTlmZjtjdXJzb3I6cG9pbnRlcjt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lOyB9JyxcclxuICAgICAgICAgICAgJ2Rpdi5naWctbm90aWZpY2F0aW9ucy1mb290ZXItdGV4dCBhLmdpZy1ub3RpZmljYXRpb25zLWZvb3Rlci1saW5rICogeyBjb2xvcjojM2U1OWZmO2N1cnNvcjpwb2ludGVyO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7IH0nXHJcblx0XHRdXHJcblx0fVxyXG5cclxuXHRwcml2YXRlU2NvcGUubm90aWZpY2F0aW9uc1BsdWdpbi5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMudGVtcGxhdGVzID0gcHJpdmF0ZVNjb3BlLmNyZWF0ZURlZmF1bHRUZW1wbGF0ZXMoKTtcclxuXHRcdFx0aWYgKHRoaXMuX3AuaGVhZGVyVGVtcGxhdGUpIHRoaXMudGVtcGxhdGVzLnNldCgnbm90aWZpY2F0aW9uQ2FwdGlvbicsIHRoaXMuX3AuaGVhZGVyVGVtcGxhdGUpO1xyXG5cdFx0XHRpZiAodGhpcy5fcC5ib2R5VGVtcGxhdGUpIHRoaXMudGVtcGxhdGVzLnNldCgnbm90aWZpY2F0aW9uQm9keScsIHRoaXMuX3AuYm9keVRlbXBsYXRlKTtcclxuXHRcdFx0aWYgKHRoaXMuX3AuZm9vdGVyVGVtcGxhdGUpIHRoaXMudGVtcGxhdGVzLnNldCgnbm90aWZpY2F0aW9uRm9vdGVyJywgdGhpcy5fcC5mb290ZXJUZW1wbGF0ZSk7XHJcblx0XHRcdGlmICh0aGlzLl9wLmRpYWxvZ1RlbXBsYXRlKSB0aGlzLnRlbXBsYXRlcy5zZXQoJ25vdGlmaWNhdGlvbicsIHRoaXMuX3AuZGlhbG9nVGVtcGxhdGUpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuX3AuY3NzUHJlZml4IHx8ICFwcml2YXRlU2NvcGUuYWRkZWRDU1MpIHtcclxuXHRcdFx0XHRnaWd5YS5nbG9iYWwuYWRkQ1NTKHByaXZhdGVTY29wZS5kZWZhdWx0Q3NzLCB0aGlzLl9wLmNzc1ByZWZpeCk7XHJcblx0XHRcdFx0cHJpdmF0ZVNjb3BlLmFkZGVkQ1NTID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgVGhpcz10aGlzO1xyXG5cdFx0XHRnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuZ2V0VXNlclNldHRpbmdzKHRoaXMuX2MsIHtncm91cDonZ21TZXR0aW5ncycsIGNhbGxiYWNrOmZ1bmN0aW9uKGUpe1RoaXMub25TZXR0aW5ncyhlKX19KTtcclxuXHJcblx0XHRcdGdpZ3lhLnNlcnZpY2VzLmdtLmdldENoYWxsZW5nZVN0YXR1cyh0aGlzLl9jLHtkZXRhaWxzOidmdWxsJywgY2FsbGJhY2s6ZnVuY3Rpb24oZSl7VGhpcy5hZnRlckdldENoYWxsZW5nZShlKX19KTtcclxuXHRcdFx0Lyp0aGlzLmFmdGVyR2V0Q2hhbGxlbmdlKHtcclxuXHRcdFx0XHRjaGFsbGVuZ2VzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2hhbGxlbmdlSUQ6J0RKJyxcclxuXHRcdFx0XHRcdGxldmVsOjMsXHJcblx0XHRcdFx0XHRpc05ld0xldmVsOnRydWUsXHJcblx0XHRcdFx0XHRwb2ludHNUb3RhbDoxOTIyLFxyXG5cdFx0XHRcdFx0cG9pbnRzN0RheXM6NDUsXHJcblx0XHRcdFx0XHRyYW5rOjIsXHJcblx0XHRcdFx0XHRyYW5rN0RheXM6MyxcclxuXHRcdFx0XHRcdGJhZGdlVVJMOidodHRwOi8vY2RuLmJsaXBzdGF0aWMuY29tL2ltYWdlcy9iYWRnZXMvZGotMS5wbmcnLFxyXG5cdFx0XHRcdFx0bGV2ZWxUaXRsZTonTGV2ZWwgMSBESicsXHJcblx0XHRcdFx0XHRsZXZlbERlc2NyaXB0aW9uOiAnQmxpcCBhIHNvbmcgd2l0aCAyIGV4dGVybmFsIHNlcnZpY2VzIGVuYWJsZWQuJyxcclxuXHRcdFx0XHRcdGNoYWxsZW5nZVRpdGxlOidESicsXHJcblx0XHRcdFx0XHRjaGFsbGVuZ2VEZXNjcmlwdGlvbjonVGhlIERKIGJhZGdlIGlzIGVhcm5lZCBieSBibGlwcGluZyBzb25ncy4nLFxyXG5cdFx0XHRcdFx0cG9pbnRzQ3VycmVudDoxNTAwLFxyXG5cdFx0XHRcdFx0YWNoaWV2ZW1lbnRzVG9OZXh0TGV2ZWw6MTUsXHJcblx0XHRcdFx0XHRyZXF1aXJlZEFjaGlldmVtZW50OidCbGlwcycsXHJcblx0XHRcdFx0XHRuZXh0TGV2ZWxUaXRsZTonTGV2ZWwgMiBESicsXHJcblx0XHRcdFx0XHRuZXh0TGV2ZWxCYWRnZVVSTDonaHR0cDovL2Nkbi5ibGlwc3RhdGljLmNvbS9pbWFnZXMvYmFkZ2VzL2RqLTIucG5nJyxcclxuXHRcdFx0XHRcdG5leHRMZXZlbExvY2tlZEJhZGdlVVJMOiAnaHR0cDovL2Nkbi5ibGlwc3RhdGljLmNvbS9pbWFnZXMvYmFkZ2VzL2RqLXNpbGhvdWV0dGUucG5nJyxcclxuXHRcdFx0XHRcdG5leHRMZXZlbEFjdGlvblVSTDonJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2hhbGxlbmdlSUQ6J2Jyb2FkY2FzdGVyJyxcclxuXHRcdFx0XHRcdGxldmVsOjMsXHJcblx0XHRcdFx0XHRpc05ld0xldmVsOnRydWUsXHJcblx0XHRcdFx0XHRwb2ludHNUb3RhbDoxOTIyLFxyXG5cdFx0XHRcdFx0cG9pbnRzN0RheXM6NDUsXHJcblx0XHRcdFx0XHRyYW5rOjIsXHJcblx0XHRcdFx0XHRyYW5rN0RheXM6MyxcclxuXHRcdFx0XHRcdGJhZGdlVVJMOidodHRwOi8vY2RuLmJsaXBzdGF0aWMuY29tL2ltYWdlcy9iYWRnZXMvYnJvYWRjYXN0ZXItMi5wbmcnLFxyXG5cdFx0XHRcdFx0bGV2ZWxUaXRsZTonTGV2ZWwgMiBCcm9hZGNhc3RlcicsXHJcblx0XHRcdFx0XHRsZXZlbERlc2NyaXB0aW9uOiAnQmxpcCBhIHNvbmcgd2l0aCAyIGV4dGVybmFsIHNlcnZpY2VzIGVuYWJsZWQuJyxcclxuXHRcdFx0XHRcdGNoYWxsZW5nZVRpdGxlOidCcm9hZGNhc3RlcicsXHJcblx0XHRcdFx0XHRjaGFsbGVuZ2VEZXNjcmlwdGlvbjonVGhlIEJyb2FkY2FzdGVyIGJhZGdlIGlzIGVhcm5lZCBieSBibGlwcGluZyBhIHNvbmcgd2l0aCBlbmFibGVkIGV4dGVybmFsIHNlcnZpY2VzIChlLmcuIFR3aXR0ZXIsIEZhY2Vib29rKS4gWW91IGNhbiBlbmFibGUgYWNjb3VudHMgaW4geW91ciBzZXJ2aWNlIHNldHRpbmdzLicsXHJcblx0XHRcdFx0XHRwb2ludHNDdXJyZW50OjE1MDAsXHJcblx0XHRcdFx0XHRhY2hpZXZlbWVudHNUb05leHRMZXZlbDoxNSxcclxuXHRcdFx0XHRcdHJlcXVpcmVkQWNoaWV2ZW1lbnQ6J0JsaXBzIHdpdGggZW5hYmxlZCBleHRlcm5hbCBzZXJ2aWNlcycsXHJcblx0XHRcdFx0XHRuZXh0TGV2ZWxUaXRsZTonJyxcclxuXHRcdFx0XHRcdG5leHRMZXZlbEJhZGdlVVJMOidodHRwOi8vY2RuLmJsaXBzdGF0aWMuY29tL2ltYWdlcy9iYWRnZXMvYnJvYWRjYXN0ZXItMy5wbmcnLFxyXG5cdFx0XHRcdFx0bmV4dExldmVsTG9ja2VkQmFkZ2VVUkw6ICdodHRwOi8vY2RuLmJsaXBzdGF0aWMuY29tL2ltYWdlcy9iYWRnZXMvYnJvYWRjYXN0ZXItc2lsaG91ZXR0ZS5wbmcnLFxyXG5cdFx0XHRcdFx0bmV4dExldmVsQWN0aW9uVVJMOidodHRwOi8vd3d3LmRvci5jb20vbmV4dExldmVsLmh0bSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNoYWxsZW5nZUlEOidob3RTdHJlYWsnLFxyXG5cdFx0XHRcdFx0bGV2ZWw6MyxcclxuXHRcdFx0XHRcdGlzTmV3TGV2ZWw6ZmFsc2UsXHJcblx0XHRcdFx0XHRwb2ludHNUb3RhbDoxOTIyLFxyXG5cdFx0XHRcdFx0cG9pbnRzN0RheXM6NDUsXHJcblx0XHRcdFx0XHRyYW5rOjIsXHJcblx0XHRcdFx0XHRyYW5rN0RheXM6MyxcclxuXHRcdFx0XHRcdGJhZGdlVVJMOidodHRwOi8vY2RuLmJsaXBzdGF0aWMuY29tL2ltYWdlcy9iYWRnZXMvaG90c3RyZWFrLTEucG5nJyxcclxuXHRcdFx0XHRcdGxldmVsVGl0bGU6J0xldmVsIDEgSG90IFN0cmVhaycsXHJcblx0XHRcdFx0XHRsZXZlbERlc2NyaXB0aW9uOiAnSGF2ZSA1IGJsaXBzIGluIGEgcm93IGdldCBwcm9wcyBvciByZWJsaXBwZWQuJyxcclxuXHRcdFx0XHRcdGNoYWxsZW5nZVRpdGxlOidIb3QgU3RyZWFrJyxcclxuXHRcdFx0XHRcdGNoYWxsZW5nZURlc2NyaXB0aW9uOidUaGUgSG90IFN0cmVhayBiYWRnZSBpcyBlYXJuZWQgYnkgaGF2aW5nIHN1Y2Nlc3NpdmUgYmxpcHMgZ2V0IHByb3BzIG9yIHJlYmxpcHBlZCBieSBkaWZmZXJlbnQgREpzLicsXHJcblx0XHRcdFx0XHRwb2ludHNDdXJyZW50OjE1MDAsXHJcblx0XHRcdFx0XHRhY2hpZXZlbWVudHNUb05leHRMZXZlbDoxNSxcclxuXHRcdFx0XHRcdHJlcXVpcmVkQWNoaWV2ZW1lbnQ6J2JsaXBzIGluIGEgcm93JyxcclxuXHRcdFx0XHRcdG5leHRMZXZlbFRpdGxlOidMZXZlbCAyIEhvdCBTdHJlYWsgJyxcclxuXHRcdFx0XHRcdG5leHRMZXZlbEJhZGdlVVJMOidodHRwOi8vY2RuLmJsaXBzdGF0aWMuY29tL2ltYWdlcy9iYWRnZXMvaG90c3RyZWFrLTIucG5nJyxcclxuXHRcdFx0XHRcdG5leHRMZXZlbExvY2tlZEJhZGdlVVJMOiAnaHR0cDovL2Nkbi5ibGlwc3RhdGljLmNvbS9pbWFnZXMvYmFkZ2VzL2hvdHN0cmVhay1zaWxob3VldHRlLnBuZycsXHJcblx0XHRcdFx0XHRuZXh0TGV2ZWxBY3Rpb25VUkw6JydcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9KTsqL1xyXG5cdFx0fSxcclxuXHRcdGdldFRleHQ6IGZ1bmN0aW9uICh0ZXh0S2V5LCByZXBsYWNlU3RyLCB3aXRoU3RyKSB7XHJcblx0XHQgICAgcmV0dXJuIGdpZ3lhLnBsdWdpblV0aWxzLmxhbmcuZ2V0TG9jYWxpemVkVGV4dCgnZ2lneWEuc2VydmljZXMuZ20ucGx1Z2lucy5ub3RpZmljYXRpb25zLmpzJywgdGV4dEtleSwgdGhpcy5fcC5sYW5nLCByZXBsYWNlU3RyLCB3aXRoU3RyKTtcclxuXHRcdH0sXHJcblx0XHRhZnRlckdldENoYWxsZW5nZTogZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0aWYgKGUuZXJyb3JDb2RlPjApIHtcclxuXHRcdFx0XHRnaWd5YS5ldmVudHMuZGlzcGF0Y2hFcnJvckZyb21SZXNwb25zZSh0aGlzLl9wLCBlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0ICAgIGlmICghcHJpdmF0ZVNjb3BlLndhaXRpbmdGb3JOb3RpZmljYXRpb25zICYmICFnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRGYWxzZSh0aGlzLl9wLndhaXRGb3JOb3RpZmljYXRpb25zKSkge1xyXG5cdFx0XHQgICAgICAgIHByaXZhdGVTY29wZS53YWl0aW5nRm9yTm90aWZpY2F0aW9ucyA9IHRydWU7XHJcblx0XHRcdCAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG5cdFx0XHQgICAgICAgIHZhciBjYWxsTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChcclxuXHRcdFx0XHQgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIGdpZ3lhLmdtLnNob3dOb3RpZmljYXRpb25zKFRoaXMuX3ApO1xyXG5cdFx0XHRcdCAgICAgICAgICAgIH0sIDMwMDApO1xyXG5cdFx0XHQgICAgICAgIH07XHJcblx0XHRcdCAgICAgICAgZ2lneWEuZXZlbnRzLmFkZE1hcCh7XHJcblx0XHRcdCAgICAgICAgICAgIGRlZmF1bHRNZXRob2Q6IGNhbGxOb3RpZmljYXRpb24sXHJcblx0XHRcdCAgICAgICAgICAgIGV2ZW50TWFwOiBbXHJcblx0XHRcdFx0XHRcdFx0eyBldmVudHM6IFwic2VuZERvbmUscmVhY3Rpb25DbGlja2VkLGxvZ2luLGNvbm5lY3Rpb25BZGRlZCxjb21tZW50U3VibWl0dGVkLGNvbW1lbnRWb3RlZFwiLCBhcmdzOiBbXSB9XHJcblx0XHRcdCAgICAgICAgICAgIF1cclxuXHRcdFx0ICAgICAgICB9KTtcclxuXHRcdFx0ICAgICAgICBnaWd5YS5zb2NpYWxpemUuYWRkRXZlbnRIYW5kbGVycyh7IGxpc3RlbmVyVHlwZTogJ2NvbXBvbmVudCcgfSwge1xyXG5cdFx0XHQgICAgICAgICAgICBvbkFjdGlvbk5vdGlmaWVkOiBjYWxsTm90aWZpY2F0aW9uXHJcblx0XHRcdCAgICAgICAgfSk7XHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0aWYgKGUuYWNoaWV2ZW1lbnRzKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFjaGlldmVtZW50cyA9IGUuYWNoaWV2ZW1lbnRzO1xyXG5cdFx0XHRcdFx0dGhpcy5kcmF3KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZHJhdzpmdW5jdGlvbigpIHtcclxuXHRcdCAgICBpZiAodGhpcy5hY2hpZXZlbWVudHMgJiYgdGhpcy5zZXR0aW5ncykge1xyXG5cdFx0XHRcdHRoaXMubGFzdE5vdGlmaWNhdGlvbkluZGV4PS0xO1xyXG5cdFx0XHRcdHRoaXMuZHJhd05leHROb3RpZmljYXRpb24oKTtcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCF0aGlzLmZpcmVkTG9hZEV2ZW50KSB7XHJcblx0XHRcdCAgICB0aGlzLmZpcmVkTG9hZEV2ZW50ID0gdHJ1ZTtcclxuXHRcdFx0ICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7IGV2ZW50TmFtZTogJ2xvYWQnLCBjb250YWluZXJJRDogdGhpcy5fcFsnY29udGFpbmVySUQnXSB9LCB0aGlzLl9wKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRyYXdOZXh0Tm90aWZpY2F0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Zm9yICh2YXIgaT10aGlzLmxhc3ROb3RpZmljYXRpb25JbmRleCsxOyBpPHRoaXMuYWNoaWV2ZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGNoYWxsZW5nZSA9IHRoaXMuYWNoaWV2ZW1lbnRzW2ldO1xyXG5cdFx0XHRcdGlmICgoY2hhbGxlbmdlLmlzTmV3TGV2ZWwgJiYgY2hhbGxlbmdlLmxldmVsID4gMCkgfHwgdGhpcy5fcC5kZWJ1Z01vZGUpIHtcclxuXHRcdFx0XHRcdC8vcHJlbG9hZCBpbWFnZXNcclxuXHRcdFx0XHRcdHZhciBpbWdzPVtdO1xyXG5cdFx0XHRcdFx0aWYgKGNoYWxsZW5nZS5iYWRnZVVSTCkgaW1ncy5wdXNoKGdpZ3lhLmdsb2JhbC5nZXRQaG90b1VSTChjaGFsbGVuZ2UuYmFkZ2VVUkwpKTtcclxuXHRcdFx0XHRcdGlmIChjaGFsbGVuZ2UubmV4dExldmVsTG9ja2VkQmFkZ2VVUkwpIGltZ3MucHVzaChnaWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwoY2hhbGxlbmdlLm5leHRMZXZlbExvY2tlZEJhZGdlVVJMLCAgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vTG9ja2VkQmFkZ2UucG5nJykpKTtcclxuXHRcdFx0XHRcdHZhciBUaGlzPXRoaXM7XHJcblx0XHRcdFx0XHRnaWd5YS5nbG9iYWwucHJlbG9hZEltYWdlcyhpbWdzLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Z2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHtcclxuXHRcdFx0XHRcdFx0XHRldmVudE5hbWU6ICduZXdMZXZlbCcsXHJcblx0XHRcdFx0XHRcdFx0Y2hhbGxlbmdlOiBjaGFsbGVuZ2VcclxuXHRcdFx0XHRcdFx0fSxUaGlzLl9wKTtcclxuXHRcdFx0XHRcdFx0VGhpcy5kcmF3Tm90aWZpY2F0aW9uKGNoYWxsZW5nZSlcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5sYXN0Tm90aWZpY2F0aW9uSW5kZXg9aTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHQgICAgdHJ5IHtcclxuXHRcdCAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQpO1xyXG5cdFx0ICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG5cdFx0XHRcdHdpbmRvdy5kZXRhY2hFdmVudCgnb25zY3JvbGwnLCBjb250YWluZXIuZm5GaXhQb3NpdGlvbik7XHJcblx0XHRcdFx0d2luZG93LmRldGFjaEV2ZW50KCdvbnJlc2l6ZScsIGNvbnRhaW5lci5mbkZpeFBvc2l0aW9uKTtcclxuXHRcdFx0fSBjYXRjaChleCl7fVxyXG5cdFx0fSxcclxuXHRcdGNsb3NlTm90aWZpY2F0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKHRoaXMuY2xvc2VUaW1lb3V0KSB7XHJcblx0XHRcdFx0dGhpcy5zdG9wVGltZW91dCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7ZXZlbnROYW1lOiAnY2xvc2UnfSx0aGlzLl9pKTtcclxuXHRcdFx0dmFyIGRpdk5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQrJ19ub3RpZmljYXRpb24nKTtcclxuXHRcdFx0Z2lneWEuZ2xvYmFsLnJlbW92ZUlmcmFtZVNoaW0oZGl2Tm90aWZpY2F0aW9uKTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCkuaW5uZXJIVE1MPScnO1xyXG5cdFx0XHR0aGlzLmRyYXdOZXh0Tm90aWZpY2F0aW9uKCk7XHJcblx0XHR9LFxyXG5cdFx0ZHJhd05vdGlmaWNhdGlvbjogZnVuY3Rpb24gKGNoYWxsZW5nZSkge1xyXG5cdFx0XHR2YXIgaXRlbSA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShjaGFsbGVuZ2UpO1xyXG5cdFx0XHRpdGVtLlRFWFQgPSBnaWd5YS51dGlscy5kZWxlZ2F0ZS5jcmVhdGUodGhpcywgdGhpcy5nZXRUZXh0KTtcclxuXHRcdFx0aXRlbS5pZCA9IHRoaXMuX2VsaWQrJ19ub3RpZmljYXRpb24nO1xyXG5cdFx0XHR2YXIgY2FwdGlvblRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMuZ2V0KCdub3RpZmljYXRpb25DYXB0aW9uJyk7XHJcblx0XHRcdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKTtcclxuXHJcblx0XHRcdGlmIChpdGVtLm5leHRMZXZlbFRpdGxlICYmIGl0ZW0uYWN0aW9uU3RhdHVzICYmIGl0ZW0uYWN0aW9uU3RhdHVzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0ICAgIGlmIChpdGVtLm5leHRMZXZlbEFjdGlvblVSTCkge1xyXG5cdFx0XHQgICAgICAgIGl0ZW0uZm9vdGVyID0gdGhpcy50ZW1wbGF0ZXMuZ2V0KCdub3RpZmljYXRpb25Gb290ZXInKTtcclxuXHRcdFx0ICAgICAgICBpdGVtLmZvb3RlclRleHQgPSAoJzxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyLXRleHQgZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyLWxpbmtcIiBocmVmPVwiJG5leHRMZXZlbEFjdGlvblVSTFwiIGFsdD1cIlwiPicgKyB0aGlzLmdldFRleHQoJ2xlYXJuX2hvd190b191bmxvY2tfdGhlX2xldmVsdGl0bGVfYmFkZ2UnKSArICc8L2E+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVsZXZlbHRpdGxlJywgJzxzcGFuIGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyLXRleHQgZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyLXRleHQtbmV4dGxldmVsVGl0bGVcIj4kbmV4dExldmVsVGl0bGU8L3NwYW4+Jyk7XHJcblx0XHRcdCAgICB9XHJcblx0XHRcdCAgICBlbHNlIHtcclxuXHRcdFx0ICAgICAgICBpdGVtLmZvb3RlciA9ICcnO1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGl0ZW0ubmV4dExldmVsVGl0bGUgJiYgdHlwZW9mIGl0ZW0ucG9pbnRzU3RhdHVzICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHQgICAgaXRlbS5mb290ZXIgPSB0aGlzLnRlbXBsYXRlcy5nZXQoJ25vdGlmaWNhdGlvbkZvb3RlcicpO1xyXG5cdFx0XHQgICAgaXRlbS5yZXF1aXJlZEFjaGlldmVtZW50ID0gdGhpcy5nZXRUZXh0KGNoYWxsZW5nZS5yZXF1aXJlZEFjaGlldmVtZW50KSB8fCBpdGVtLnJlcXVpcmVkQWNoaWV2ZW1lbnQ7XHJcblx0XHRcdFx0aXRlbS5mb290ZXJUZXh0ID0gdGhpcy5nZXRUZXh0KCdudW1fbW9yZV9hY2hpZXZlbWVudF90b191bmxvY2tfbGV2ZWx0aXRsZV9sZXZlbCcsICclbnVtJywgJzxzcGFuIGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyLXRleHQgZ2lnLW5vdGlmaWNhdGlvbnMtZm9vdGVyLXRleHQtYWNoaWV2ZW1lbnRzTGVmdFwiPiRhY2hpZXZlbWVudHNUb05leHRMZXZlbDwvc3Bhbj4nKVxyXG5cdFx0XHRcdFx0LnJlcGxhY2UoJyVhY2hpZXZlbWVudCcsJyRyZXF1aXJlZEFjaGlldmVtZW50JylcclxuXHRcdFx0XHRcdC5yZXBsYWNlKCclbGV2ZWx0aXRsZScsICc8c3BhbiBjbGFzcz1cImdpZy1ub3RpZmljYXRpb25zLWZvb3Rlci10ZXh0IGdpZy1ub3RpZmljYXRpb25zLWZvb3Rlci10ZXh0LW5leHRsZXZlbFRpdGxlXCI+JG5leHRMZXZlbFRpdGxlPC9zcGFuPicpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHQgICAgaXRlbS5mb290ZXIgPSAnJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aXRlbS5zaGFyZUJ1dHRvbkltZ1NyYyA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2dtL3NoYXJlQnV0dG9uLnBuZycpO1xyXG5cdFx0XHRpdGVtLnNoYXJlQnV0dG9uID0gJyc7XHJcblx0XHRcdGl0ZW0uY2xvc2VCdXR0b24gPSB0aGlzLnRlbXBsYXRlcy5nZXQoJ2Nsb3NlQnV0dG9uJyk7XHJcblx0XHRcdGl0ZW0uYmFkZ2VVUkwgPSBnaWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwoaXRlbS5iYWRnZVVSTCk7XHJcblx0XHRcdGl0ZW0ubmV4dExldmVsTG9ja2VkQmFkZ2VVUkwgPSBnaWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwoaXRlbS5uZXh0TGV2ZWxMb2NrZWRCYWRnZVVSTCwgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vTG9ja2VkQmFkZ2UucG5nJykpO1xyXG5cdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3MuYXV0b1NoYXJlKSB7XHJcblx0XHRcdFx0aXRlbS5zaGFyZUJ1dHRvbiA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMudGVtcGxhdGVzLmdldCgnc2hhcmVCdXR0b24nKSwgaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGl0ZW0uY29uZ3JhdHVsYXRpb25zID0gJzxzcGFuIGNsYXNzPVwiZ2lnLW5vdGlmaWNhdGlvbnMtYm9keS10ZXh0IGdpZy1ub3RpZmljYXRpb25zLWJvZHktdGV4dC1jb25ncmF0dWxhdGlvbnNcIj4kVEVYVChcImNvbmdyYXR1bGF0aW9uc1wiKTwvc3Bhbj4gJyArIHRoaXMuZ2V0VGV4dCgneW91dmVfdW5sb2NrZWRfdGhlX2xldmVsdGl0bGVfbGV2ZWwnLCAnJWxldmVsVGl0bGUnLCAnPHNwYW4gY2xhc3M9XCJnaWctbm90aWZpY2F0aW9ucy1ib2R5LXRleHQgZ2lnLW5vdGlmaWNhdGlvbnMtYm9keS10ZXh0LWxldmVsVGl0bGVcIj4kbGV2ZWxUaXRsZTwvc3Bhbj4nKTtcclxuXHRcdFx0aXRlbS5ib2R5ID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy50ZW1wbGF0ZXMuZ2V0KCdub3RpZmljYXRpb25Cb2R5JyksIGl0ZW0pO1xyXG5cclxuXHRcdFx0dmFyIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMuZ2V0KCdub3RpZmljYXRpb24nKTtcclxuXHRcdFx0dmFyIGNhcHRpb25IVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoY2FwdGlvblRlbXBsYXRlLCBpdGVtKTtcclxuXHRcdFx0dmFyIG5vdGlmaWNhdGlvbkhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgaXRlbSk7XHJcblx0XHRcdGlmICh0aGlzLl9wLmRpYWxvZ1RlbXBsYXRlICE9IG51bGwpIHtcclxuXHRcdFx0XHRjb250YWluZXIuaW5uZXJIVE1MID0gJzxzcGFuIGlkPVwiJyt0aGlzLl9lbGlkKydfbm90aWZpY2F0aW9uXCI+Jytub3RpZmljYXRpb25IVE1MKyc8L3NwYW4+JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb250YWluZXIuaW5uZXJIVE1MID0gJzxzcGFuIGlkPVwiJyt0aGlzLl9lbGlkKydfbm90aWZpY2F0aW9uXCI+JytnaWd5YS5nbG9iYWwuZ2V0QmFsbG9vbkhUTUwobm90aWZpY2F0aW9uSFRNTCwgY2FwdGlvbkhUTUwsIDMwMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgdGhpcy5nZXRJbnN0YW5jZVJlZlN0cmluZygpKycuY2xvc2VOb3RpZmljYXRpb24oKScpKyc8L3NwYW4+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRjb250YWluZXIuY2xhc3NOYW1lPSdnaWctbm90aWZpY2F0aW9ucyc7XHJcblx0XHRcdHZhciBkaXZOb3RpZmljYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKydfbm90aWZpY2F0aW9uJyk7XHJcblxyXG5cdFx0XHR2YXIgVGhpcyA9IHRoaXM7XHJcblx0XHRcdGRpdk5vdGlmaWNhdGlvbi5zdHlsZS5wb3NpdGlvbj0ncmVsYXRpdmUnO1xyXG5cdFx0XHRpZiAoZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpIHtcclxuXHRcdFx0XHRjb250YWluZXIuc3R5bGUub3ZlcmZsb3c9J2hpZGRlbic7XHJcblx0XHRcdFx0ZGl2Tm90aWZpY2F0aW9uLnN0eWxlLnpvb209JzEnO1xyXG5cdFx0XHRcdGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbj0nYWJzb2x1dGUnO1xyXG5cdFx0XHRcdGlmICghY29udGFpbmVyLmZuRml4UG9zaXRpb24pIHtcclxuXHRcdFx0XHRcdGNvbnRhaW5lci5mbkZpeFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHZhciB2cGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IFxyXG5cdFx0XHRcdFx0XHR2YXIgdnB3ID0gd2luZG93LmlubmVyV2lkdGg7IFxyXG5cdFx0XHRcdFx0XHRpZiAoIXZwaCB8fCB2cGggPT0gMCkgeyB2cGggPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDsgdnB3ID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDsgfVxyXG5cdFx0XHRcdFx0XHR2YXIgc2NybD1naWd5YS51dGlscy52aWV3cG9ydC5nZXRTY3JvbGwoKTtcdFx0XHJcblx0XHRcdFx0XHRcdHZhciB2cHQ9c2NybC50b3A7XHJcblx0XHRcdFx0XHRcdHZhciB2cGw9c2NybC5sZWZ0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2YXIgYm90dG9tUmlnaHRUb3AgPSB2cHQgKyB2cGg7XHJcblx0XHRcdFx0XHRcdHZhciBib3R0b21SaWdodExlZnQgPSB2cGwgKyB2cHc7XHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gKGJvdHRvbVJpZ2h0TGVmdCAtIGNvbnRhaW5lci5vZmZzZXRXaWR0aCAtIDIwKSsncHgnO1xyXG5cdFx0XHRcdFx0XHRjb250YWluZXIuc3R5bGUudG9wID0gKGJvdHRvbVJpZ2h0VG9wIC0gY29udGFpbmVyLm9mZnNldEhlaWdodCkrJ3B4JztcclxuXHRcdFx0XHRcdFx0dmFyIGRpdk5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFRoaXMuX2VsaWQrJ19ub3RpZmljYXRpb24nKTtcclxuXHRcdFx0XHRcdFx0aWYgKGRpdk5vdGlmaWNhdGlvbiAmJiBkaXZOb3RpZmljYXRpb24uc2hpbSkgZGl2Tm90aWZpY2F0aW9uLnNoaW0udXBkYXRlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR3aW5kb3cuYXR0YWNoRXZlbnQoJ29uc2Nyb2xsJywgY29udGFpbmVyLmZuRml4UG9zaXRpb24pO1xyXG5cdFx0XHRcdFx0d2luZG93LmF0dGFjaEV2ZW50KCdvbnJlc2l6ZScsIGNvbnRhaW5lci5mbkZpeFBvc2l0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29udGFpbmVyLmZuRml4UG9zaXRpb24oKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb250YWluZXIuc3R5bGUubGVmdCA9ICcnO1xyXG5cdFx0XHRcdGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbj0nZml4ZWQnO1xyXG5cdFx0XHRcdGNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSAnMCc7XHJcblx0XHRcdFx0Y29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gJzEwcHgnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRSkge1xyXG5cdFx0XHRcdGdpZ3lhLmdsb2JhbC5hZGRJZnJhbWVTaGltKGRpdk5vdGlmaWNhdGlvbik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGl2Tm90aWZpY2F0aW9uLnNsaWRlQm90dG9tID0gY29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuXHRcdFx0Ly9jb250YWluZXIuc2xpZGVCb3R0b20gPSBjb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG5cclxuXHRcdFx0XHJcblx0XHRcdFRoaXMuc2xpZGVOb3RpZmljYXRpb24oZGl2Tm90aWZpY2F0aW9uKTtcclxuXHRcdFx0Z2lneWEuc2VydmljZXMuZ20ucmVzZXRMZXZlbFN0YXR1cyh0aGlzLl9jLHtjaGFsbGVuZ2VzOiBjaGFsbGVuZ2UuY2hhbGxlbmdlSUR9KTtcclxuXHRcdFx0Y2hhbGxlbmdlLmlzTmV3TGV2ZWwgPSBmYWxzZTtcclxuXHRcdFx0dmFyIHNoYXJlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCsnX3NoYXJlQnV0dG9uJyk7XHJcblx0XHRcdGlmIChzaGFyZUJ1dHRvbikge1xyXG5cdFx0XHRcdHNoYXJlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFRoaXMuc2hhcmVCdXR0b25DbGlja2VkKGNoYWxsZW5nZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQrJ19jbG9zZUJ1dHRvbicpO1xyXG5cdFx0XHRpZiAoY2xvc2VCdXR0b24pIHtcclxuXHRcdFx0XHRjbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRUaGlzLmNsb3NlTm90aWZpY2F0aW9uKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBiYWRnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQrJ19uZXh0TGV2ZWxCYWRnZScpO1xyXG5cdFx0XHRpZiAoYmFkZ2UgJiYgY2hhbGxlbmdlLm5leHRMZXZlbEFjdGlvblVSTCkge1xyXG5cdFx0XHQgICAgYmFkZ2UuaHJlZiA9IGNoYWxsZW5nZS5uZXh0TGV2ZWxBY3Rpb25VUkw7XHJcblx0XHRcdCAgICBiYWRnZS50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkaXZOb3RpZmljYXRpb24ub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpIHtUaGlzLnN0b3BUaW1lb3V0KCl9O1xyXG5cdFx0XHRkaXZOb3RpZmljYXRpb24ub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkge2lmICghVGhpcy5ub1RpbWVvdXQpIFRoaXMuc3RhcnRUaW1lb3V0KCl9O1xyXG5cdFx0XHR0aGlzLnN0YXJ0VGltZW91dCgpO1xyXG5cdFx0XHR0aGlzLm5vVGltZW91dD1mYWxzZTtcclxuXHRcdFx0dGhpcy5wdWJsaXNoQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcblx0XHR9LFxyXG5cdFx0c3RvcFRpbWVvdXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAodGhpcy5jbG9zZVRpbWVvdXQpIHtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5jbG9zZVRpbWVvdXQpO1xyXG5cdFx0XHRcdHRoaXMuY2xvc2VUaW1lb3V0PW51bGw7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRzdGFydFRpbWVvdXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgVGhpcz10aGlzO1xyXG5cdFx0XHR2YXIgY2xvc2VUaW1lb3V0ID0gKHRoaXMuX3AuY2xvc2VUaW1lb3V0IT1udWxsP3RoaXMuX3AuY2xvc2VUaW1lb3V0OjEwMDAwKTtcclxuXHRcdFx0aWYgKGNsb3NlVGltZW91dD4wKSB7XHJcblx0XHRcdFx0dGhpcy5jbG9zZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1RoaXMuY2xvc2VOb3RpZmljYXRpb24oKX0sIGNsb3NlVGltZW91dCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblNldHRpbmdzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmIChlLmVycm9yQ29kZT4wKSB7XHJcblx0XHRcdFx0Z2lneWEuZXZlbnRzLmRpc3BhdGNoRXJyb3JGcm9tUmVzcG9uc2UodGhpcy5fcCwgZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGUuc2V0dGluZ3MpIHtcclxuXHRcdFx0XHR0aGlzLnNldHRpbmdzID0gZS5zZXR0aW5ncztcclxuXHRcdFx0XHR0aGlzLmRyYXcoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHB1Ymxpc2hDaGFsbGVuZ2U6IGZ1bmN0aW9uKGNoYWxsZW5nZSkge1xyXG5cdFx0XHR2YXIgc2NvcGU7XHJcblx0XHRcdGlmICghdGhpcy5zZXR0aW5ncy5wcml2YXRlUHJvZmlsZSAmJiB0aGlzLl9wLmZlZWRJRCkge1xyXG5cdFx0XHRcdHNjb3BlPSdpbnRlcm5hbCc7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuYXV0b1NoYXJlKSB7XHJcblx0XHRcdFx0c2NvcGUgPSAoc2NvcGU9PSdpbnRlcm5hbCc/J2JvdGgnOidleHRlcm5hbCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoc2NvcGUpIHtcclxuXHRcdFx0XHRnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucHVibGlzaFVzZXJBY3Rpb24odGhpcy5fYywgeyBzY29wZTogc2NvcGUsIHVzZXJBY3Rpb246IHRoaXMuZ2V0VXNlckFjdGlvbihjaGFsbGVuZ2UpIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2xpZGVOb3RpZmljYXRpb246IGZ1bmN0aW9uKGRpdk5vdGlmaWNhdGlvbikge1xyXG5cdFx0XHRkaXZOb3RpZmljYXRpb24uc3R5bGUudG9wPWRpdk5vdGlmaWNhdGlvbi5zbGlkZUJvdHRvbSsncHgnO1xyXG5cdFx0XHRpZiAoZGl2Tm90aWZpY2F0aW9uLnNoaW0pIGRpdk5vdGlmaWNhdGlvbi5zaGltLnVwZGF0ZSgpO1xyXG5cdFx0XHR2YXIgVGhpcz10aGlzO1xyXG5cdFx0XHR0aGlzLnNsaWRlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0ZGl2Tm90aWZpY2F0aW9uLnNsaWRlQm90dG9tLT01O1xyXG5cdFx0XHRcdGRpdk5vdGlmaWNhdGlvbi5zdHlsZS50b3A9ZGl2Tm90aWZpY2F0aW9uLnNsaWRlQm90dG9tKydweCc7XHJcblx0XHRcdFx0aWYgKGRpdk5vdGlmaWNhdGlvbi5zaGltKSBkaXZOb3RpZmljYXRpb24uc2hpbS51cGRhdGUoKTtcclxuXHRcdFx0XHRpZiAoZGl2Tm90aWZpY2F0aW9uLnNsaWRlQm90dG9tPD0xKSB7XHJcblx0XHRcdFx0XHRkaXZOb3RpZmljYXRpb24uc3R5bGUudG9wPScwJztcclxuXHRcdFx0XHRcdGlmIChkaXZOb3RpZmljYXRpb24uc2hpbSkgZGl2Tm90aWZpY2F0aW9uLnNoaW0udXBkYXRlKCk7XHJcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChUaGlzLnNsaWRlSW50ZXJ2YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMTApO1xyXG5cdFx0fSxcclxuXHRcdHNoYXJlQnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gKGNoYWxsZW5nZSkge1xyXG5cdFx0XHR2YXIgVGhpcz10aGlzO1xyXG5cdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdGNvbnRhaW5lcklEOiAnJyxcclxuXHRcdFx0XHR1c2VyQWN0aW9uOiB0aGlzLmdldFVzZXJBY3Rpb24oY2hhbGxlbmdlLCB0cnVlKSxcclxuXHRcdFx0XHRzb3VyY2VEYXRhOiB7XHJcblx0XHRcdFx0XHRjaGFsbGVuZ2VJRDogY2hhbGxlbmdlLmNoYWxsZW5nZUlELFxyXG5cdFx0XHRcdFx0bGV2ZWw6IGNoYWxsZW5nZS5sZXZlbFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b25TZW5kRG9uZTogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0Z2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KGUsVGhpcy5fcCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRvbkNsb3NlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRUaGlzLmNsb3NlTm90aWZpY2F0aW9uKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5zaG93U2hhcmVVSShnaWd5YS51dGlscy5vYmplY3QuY2xvbmUodGhpcy5fYywgdHJ1ZSwgdHJ1ZSksIHBhcmFtcywgdGhpcy5fYy5zaGFyZVBhcmFtcyk7XHJcblx0XHRcdHRoaXMuc3RvcFRpbWVvdXQoKTtcclxuXHRcdFx0dGhpcy5ub1RpbWVvdXQ9dHJ1ZTtcclxuXHRcdH0sXHJcblx0XHRnZXRVc2VyQWN0aW9uOiBmdW5jdGlvbihjaGFsbGVuZ2UsIGNhblVzZVNoYXJlUGFyYW1zKSB7XHJcblx0XHRcdHZhciB1c2VyQWN0aW9uID0gdGhpcy5fcC51c2VyQWN0aW9uO1xyXG5cdFx0XHRpZiAoY2FuVXNlU2hhcmVQYXJhbXMgJiYgdGhpcy5fcC5zaGFyZVBhcmFtcyAmJiB0aGlzLl9wLnNoYXJlUGFyYW1zLnVzZXJBY3Rpb24pIHVzZXJBY3Rpb24gPSB0aGlzLl9wLnNoYXJlUGFyYW1zLnVzZXJBY3Rpb247XHJcblxyXG5cdFx0XHRpZiAodXNlckFjdGlvbikge1xyXG5cdFx0XHRcdHVzZXJBY3Rpb24gPSBuZXcgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLlVzZXJBY3Rpb24oZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHVzZXJBY3Rpb24sIHRydWUsIHRydWUpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1c2VyQWN0aW9uID0gbmV3IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5Vc2VyQWN0aW9uKCk7XHJcblx0XHRcdFx0dXNlckFjdGlvbi5zZXRUaXRsZSh0aGlzLmdldFRleHQoJ2lfanVzdF9hY2hpZXZlZF9sZXZlbHRpdGxlJywgJyVsZXZlbHRpdGxlJywgJyRsZXZlbFRpdGxlJykpO1xyXG5cdFx0XHRcdHVzZXJBY3Rpb24uc2V0RGVzY3JpcHRpb24oXCIkbGV2ZWxEZXNjcmlwdGlvblwiKVxyXG5cdFx0XHRcdHVzZXJBY3Rpb24uYWRkSW1hZ2UoJyRiYWRnZVVSTCcpXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCF1c2VyQWN0aW9uLmxpbmtCYWNrKSB7XHJcblx0XHRcdFx0dXNlckFjdGlvbi5zZXRMaW5rQmFjayhkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZ2lneWEuZ2xvYmFsLmZpbGxVc2VyQWN0aW9uVGVtcGxhdGUodXNlckFjdGlvbiwgY2hhbGxlbmdlKTtcclxuXHRcdH0sXHJcblx0XHRnZXRJbnN0YW5jZVJlZlN0cmluZzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gJ2dpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMubm90aWZpY2F0aW9ucy5pbnN0YW5jZXNbXFwnJyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9lbGlkKSArICdcXCddJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9