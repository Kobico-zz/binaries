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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.gm.plugins.achievements.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.gm.plugins.achievements.js":
/*!**********************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.gm.plugins.achievements.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="gigya.services.socialize.plugins.js" />
if (typeof window.gigya.services.gm.plugins == 'undefined') window.gigya.services.gm.plugins = {};
(function () {
	window.gigya.services.gm.plugins.achievements = {
		instances: {},
		showAchievementsUI: function (c, p, i) {
			privateScope.createInstance(c, p, i);
		},
		showChallengeStatusUI: function(c,p,i) {
			i.getChallengeConfig=true;
			privateScope.createInstance(c,p,i);
		}
	}
	var publicScope = window.gigya.services.gm.plugins.achievements;

	var privateScope = {
		instances_size: 0,
		achievementsPlugin: function (c, p, i) {
			this._c = c;
			this._p = p;
			this._i = i;
			//document.getElementById(this._elid).innerHTML = '<div class="gig-achievements gig-achievements-container"></div>';
			this._elid = p.containerID
		},
		createInstance: function (c, p, i) {
			var el = document.getElementById(p.containerID);
			if (el == null) return;
			el.innerHTML = "";

			var instance = new privateScope.achievementsPlugin(c, p, i);
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
			templates.set("achievementsCanvas",
			[
			    '<div class="gig-achievements gig-achievements-container">',
				'<a id="${id}_arrowLeft" class="gig-achievements-navigationLeft"></a>',
				'$badges',
				'<a id="${id}_arrowRight" class="gig-achievements-navigationRight"></a>',
		        '</div>'
			]);
			templates.set("badge",
			[
				'<div class="gig-achievements-badge-container" style="width:${itemWidth};height:${itemHeight};margin-right:${marginRight}px;margin-bottom:${marginBottom}px">',
					'<img alt="" aria-label="$levelTitle" tabindex="0" id="${id}_badge" class="gig-achievements-badge" src="$badgeURL" onmouseover="${onMouseOver}" onfocus="${onFocus}" onmouseout="${onMouseOut}" onblur="${onBlur}" /><br />',
					'<div class="${textClassName}">$levelTitle</div>',
				'</div>'
			]);
			templates.set("img",
			[
				'<img alt="" class="$className" src="$src" />'
			]);
			templates.set("levelInfoDialog",
			[
				'<div class="gig-achievements gig-achievements-levelInfo" onmouseover="${onMouseOver}" onmouseout="${onMouseOut}">',
					'<div class="gig-achievements-levelInfo-challengeTitle" aria-hidden="$ariaHiddenChallengeTitle">$challengeTitle</div>',
					'<div class="gig-achievements-levelInfo-challengeDescription">$challengeDescription</div>',
					'$nextLevelInfo',
				'</div>'
			]);
			templates.set("nextLevelInfo",
			function(o) {
				if (o.nextLevelTitle) {
					return [
						'<table role="presentation" cellspacing="0" cellpadding="0" class="gig-achievements-levelInfo-nextLevel"><tr>',
							'<td class="gig-achievements-levelInfo-nextLevel-text-container"><div class="gig-achievements-levelInfo-nextLevel-text">',
								'$footerText',
							'</div></td>',
							'<td class="gig-achievements-levelInfo-nextLevel-badge-container">$nextLevelLockedBadge</td>',
						'</tr></table>'
					].join('');
				} else return ''
			});
			return templates;
		},
		defaultCss: [
			'.gig-achievements *, div.gig-achievements, .gig-achievements span, .gig-achievements a:hover, .gig-achievements a:visited, .gig-achievements a:link, .gig-achievements a:active{',
			'border:none; line-height:normal;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;',
			'font-family:arial;font-size:10px;color:#797979;background:none;text-align:left}',

			'div.gig-achievements-container {text-align:center;border: 1px solid #e2e2e2; overflow:hidden;zoom:1}',
			'a.gig-achievements-navigationLeft, a.gig-achievements-navigationRight,',
			'a:hover.gig-achievements-navigationLeft, a:hover.gig-achievements-navigationRight {display:block;height:100%;width: 6px;cursor:pointer;background-position:50%;background-repeat:no-repeat }',

			'a.gig-achievements-navigationLeft, a:hover.gig-achievements-navigationLeft{display:inline;float:left;margin-left:3px;background-image: url("' + window.gigya._.getCdnResource('/gs/i/gm/NavigationArrows/navigationLeft.png') + '")}',
			'a.gig-achievements-navigationRight, a:hover.gig-achievements-navigationRight{display:inline;float:left;margin-right:3px;background-image:url("' + window.gigya._.getCdnResource('/gs/i/gm/NavigationArrows/navigationRight.png') + '")}',
			
			'a:hover.gig-achievements-navigationLeft{background-image: url("' + window.gigya._.getCdnResource('/gs/i/gm/NavigationArrows/navigationLeft_hover.png') + '")}',
			'a:hover.gig-achievements-navigationRight{background-image:url("' + window.gigya._.getCdnResource('/gs/i/gm/NavigationArrows/navigationRight_hover.png') + '")}',

			'a.gig-achievements-navigationLeft-disabled,a:hover.gig-achievements-navigationLeft-disabled{cursor:default;background-image: url("' + window.gigya._.getCdnResource('/gs/i/gm/NavigationArrows/navigationLeft_disable.png') + '")}',
			'a.gig-achievements-navigationRight-disabled,a:hover.gig-achievements-navigationRight-disabled{cursor:default;background-image:url("' + window.gigya._.getCdnResource('/gs/i/gm/NavigationArrows/navigationRight_disable.png') + '")}',

			'div.gig-achievements-levelTitle{font-size: 12px; color:#313131;padding:0 2px;line-height:115%;text-align:center;}',
			'div.gig-achievements-levelTitle-locked{font-weight:normal; color:#B0B0B0}',
			'img.gig-achievements-badge{width:50px;height:50px;margin:0 5px 4px 5px;display:inline-block;}',
			'div.gig-achievements-badge-container{float:left;text-align:center;overflow:hidden;max-width:86px;_width:86px;}',
			
			'div.gig-achievements-levelInfo {padding: 12px 0 5px 0;}',

			'div.gig-achievements-levelInfo-nextLevel-text {padding-right: 10px}',
			'div.gig-achievements-levelInfo-nextLevel-text, span.gig-achievements-levelInfo-nextLevel-text {font-size:12px; color:#313131;}',
			'span.gig-achievements-levelInfo-nextLevel-text-nextLevelTitle {font-weight:bold;}',
			'span.gig-achievements-levelInfo-nextLevel-text-achievementsLeft {font-weight:bold;}',
			

			'img.gig-achievements-levelInfo-nextLevel-badge, img.gig-achievements-levelInfo-badge {width:40px;height:40px}',
			'div.gig-achievements-levelInfo-challengeTitle {font-weight:bold; font-size: 12px;color:#000}',
			'div.gig-achievements-levelInfo-challengeDescription {font-size: 12px;color:#000;padding-bottom:15px;padding-right:5px;}',
			'td.gig-achievements-badge {vertical-align:top;}',
			'table.gig-achievements-levelInfo-nextLevel {width:100%}',
			'gig-achievements-levelInfo-nextLevel-badge-container {vertical-align:top}',
			'gig-achievements-levelInfo-nextLevel-text-container {vertical-align:middle}',

            'div.gig-achievements-levelInfo-nextLevel-text a.gig-achievements-levelInfo-nextLevel-link { font-size:12px;color:#3e59ff;cursor:pointer;text-decoration:underline; }',
            'div.gig-achievements-levelInfo-nextLevel-text a.gig-achievements-levelInfo-nextLevel-link * { color:#3e59ff;cursor:pointer;text-decoration:underline; }'
		]
	}

	privateScope.achievementsPlugin.prototype = {
		init: function () {
			this.templates = privateScope.createDefaultTemplates();
			if (this._p.detailsPopupTemplate) this.templates.set('levelInfoDialog', this._p.detailsPopupTemplate);
			
			if (this._p.cssPrefix || !privateScope.addedCSS) {
				window.gigya.global.addCSS(privateScope.defaultCss, this._p.cssPrefix);
				privateScope.addedCSS = true;
			}
			
			this.canvasSize = this.getCanvasSize(this._p.width,this._p.height);
			this.page=0;			
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
		    return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.gm.plugins.achievements.js', textKey, this._p.lang, replaceStr, withStr);
		},
		refresh: function(e, dontShowLoader) {
		    if (!dontShowLoader) window.gigya.global.showLoader(document.getElementById(this._elid), 'gig-achievements gig-achievements-container', this.canvasSize.h);
			if (this._i.getChallengeConfig) {
			    window.gigya.services.gm.getChallengeConfig(this._c,{includeChallenges:this._p.challenge, expandActions:true, callback: window.gigya.utils.delegate.create(this, this.afterGetChallengeConfig)});
				window.gigya.services.gm.getChallengeStatus(this._c,{includeChallenges:this._p.challenge, details: 'full',callback: window.gigya.utils.delegate.create(this, this.afterGetChallengeConfig)});
			} else {
				window.gigya.services.gm.getChallengeStatus(this._c,{details: 'full',callback: window.gigya.utils.delegate.create(this, this.afterGetChallenge)});
			}
			
		},
		afterGetChallenge: function (e) {
			if (e.errorCode>0) {
				window.gigya.events.dispatchErrorFromResponse(this._p, e);
			}
			this.achievements = [];
			if (e.achievements) {
				for (var i=0; i<e.achievements.length; i++) {
					var challenge=e.achievements[i];
					challenge.textClassName = 'gig-achievements-levelTitle';
					if (challenge.level==0) {
					    challenge.badgeURL = window.gigya.global.getPhotoURL(challenge.nextLevelLockedBadgeURL, window.gigya._.getCdnResource('/gs/i/gm/LockedBadge.png'));
						challenge.levelTitle = challenge.nextLevelTitle
						challenge.levelDescription = challenge.nextLevelDescription
						challenge.textClassName = 'gig-achievements-levelTitle gig-achievements-levelTitle-locked';
					}
					if (!this._p.excludeCompletedChallenges || challenge.nextLevelTitle) {
						this.achievements.push(challenge);
					}
				}
			}
			this.draw();
		},
		afterGetChallengeConfig: function(e) {
			if (e.errorCode>0) {
				window.gigya.events.dispatchErrorFromResponse(this._p, e);
				if (e.operation=='/gm.getChallengeStatus') {
					e.achievements=[];
				} else {
					e.challenges=[];
				}
			}
			if (e.achievements) this.rawAchievements = e.achievements;
			if (e.challenges) this.rawChallenges = e.challenges;

			if (this.rawAchievements && this.rawChallenges) {
				this.achievements = [];
				if (this.rawChallenges.length>0 && this.rawChallenges[0].levels && this.rawAchievements.length>0) {
					var challenge = this.rawChallenges[0];
					var levels = challenge.levels;
				    var achievement = this.rawAchievements[0];

					for (var i=0; i<levels.length; i++) {
						var level=levels[i];
						var locked = i >= achievement.level;
						if (locked && achievement.nextLevelTitle == null)
						    break;
						var newLevel = {
							textClassName: locked?'gig-achievements-levelTitle gig-achievements-levelTitle-locked':'gig-achievements-levelTitle',
							levelTitle:level.title,
							levelDescription: level.description,
							badgeURL: locked?level.lockedBadgeURL:level.badgeURL,
							challengeDescription: level.description,
							challengeTitle: level.title,
							requiredAchievement: this.getText(achievement.requiredAchievement) || achievement.requiredAchievement
						}
						this.achievements.push(newLevel);
					}
				}
				this.draw();
			}
		},
		draw: function () {
			var item={
				id: this._elid,
				badges: this.getBadgesHTML(),
				width: this.canvasSize.w,
				height: this.canvasSize.h
			}
			var template = this.templates.get('achievementsCanvas');
			document.getElementById(this._elid).innerHTML=window.gigya.utils.templates.fill(template, item);				
			this.movePage(0);
			var This=this;
			var arrowLeft=document.getElementById(this._elid+'_arrowLeft');
			var arrowRight=document.getElementById(this._elid+'_arrowRight');
			if (this.totalPages==1) {
				arrowLeft.style.visibility='hidden';
				arrowRight.style.visibility='hidden';
			} else {
				document.getElementById(this._elid+'_arrowLeft').onclick=function() {
					This.movePage(-1);
				};
				document.getElementById(this._elid+'_arrowRight').onclick=function() {
					This.movePage(1);
				};
			}
			if (!this.firedLoadEvent) {
				this.firedLoadEvent = true;
				window.gigya.events.dispatchForWidget({ eventName: 'load', containerID: this._p['containerID'] },this._p);
			}
		},
		getHTMLSize:function(html) {
			var divMeasure=document.createElement('div');
			divMeasure.style.position='absolute';
			divMeasure.style.left='-1000px'; 
			divMeasure.innerHTML=html;
			document.getElementById(this._elid).appendChild(divMeasure);
			var w=divMeasure.offsetWidth;
			var h=divMeasure.offsetHeight;
			divMeasure.parentNode.removeChild(divMeasure);
			return {w:w,h:h}					
		},
		getItemSize:function(minWidth) {
			var w=0;
			var h=0;
			for (var i=0; i<this.achievements.length; i++) {
				var htmlSize = this.getHTMLSize(this.getItemHTML(i, this._elid+'_measure_', minWidth));
				w=Math.max(htmlSize.w, w);
				h=Math.max(htmlSize.h, h);
			}
			return {w:w,h:h}			
		},
		getItemHTML:function(i,idPrefix,width,height,marginRight, marginBottom) {
			if (i >= this.achievements.length) return '';
			var item=window.gigya.utils.object.clone(this.achievements[i], true);
			var This=this;
			item.onMouseOver = this.getInstanceRefString()+'.onBadgeMouseOver('+i+', 500);';
			item.onMouseOut = this.getInstanceRefString()+'.onBadgeMouseOut('+i+', 500);';
			item.onFocus = this.getInstanceRefString()+'.onBadgeMouseOver('+i+', 0);';
			item.onBlur = this.getInstanceRefString()+'.onBadgeMouseOut('+i+', 0);';
			item.badgeURL = window.gigya.global.getPhotoURL(item.badgeURL);
			item.nextLevelLockedBadgeURL = window.gigya.global.getPhotoURL(item.nextLevelLockedBadgeURL);
			item.id = idPrefix+i;
			item.itemWidth='';
			item.itemHeight=''; 
			item.marginRight=0;
			item.marginBottom=0;
			if (width) item.itemWidth = width+'px';
			if (height) item.itemHeight = height+'px';
			if (marginRight) item.marginRight = marginRight;
			if (marginBottom) item.marginBottom = marginBottom;
			return window.gigya.utils.templates.fill(this.templates.get('badge'), item);
		},
		onBadgeMouseOver:function(i, delayMs) {
			var el = document.getElementById(this._elid+'_challenge'+i+'_badge');
			var This=this;
			window.clearTimeout(el.overTimeout);
			el.overTimeout=window.setTimeout(function() {
				This.showLevelInfo(i);
			}, delayMs);
		},
		onBadgeMouseOut: function(i, delayMs) {
			var el = document.getElementById(this._elid+'_challenge'+i+'_badge');
			window.clearTimeout(el.overTimeout);
			var fn = function() {
				window.gigya.global.removeGMBalloon();
			};

			if (delayMs === 0) {
				fn();
			} else {
				el.overTimeout=window.setTimeout(function() {
					window.gigya.global.removeGMBalloon();
				}, delayMs);
			}
		},
		showLevelInfo:function(i) {
			if (document.getElementById(this._elid + '_levelInfo'+i)) return;
			var el = document.getElementById(this._elid+'_challenge'+i+'_badge');
			var challenge = this.achievements[i];
			var item = window.gigya.utils.object.clone(challenge);
			item.TEXT = window.gigya.utils.delegate.create(this, this.getText);
			item.id = this._elid + '_levelInfoBubble';
			item.onMouseOver = this.getInstanceRefString()+'.onBadgeMouseOver('+i+', 500);';
			item.onMouseOut = this.getInstanceRefString()+'.onBadgeMouseOut('+i+', 500);';
			item.nextLevelLockedBadgeURL = window.gigya.global.getPhotoURL(item.nextLevelLockedBadgeURL, window.gigya._.getCdnResource('/gs/i/gm/LockedBadge.png'));
			if (item.nextLevelLockedBadgeURL) {
			    item.nextLevelLockedBadge = window.gigya.utils.templates.fill(this.templates.get('img'), { src: item.nextLevelLockedBadgeURL, className: 'gig-achievements-levelInfo-nextLevel-badge' });
			}

			if (item.nextLevelTitle && item.actionStatus && item.actionStatus.length > 0) {
                if (item.nextLevelActionURL) {
                    item.footerText = ('<a target="_blank" class="gig-achievements-levelInfo-nextLevel-link" href="$nextLevelActionURL" alt="">' + this.getText('learn_how_to_unlock_the_leveltitle_badge') + '</a>')
                        .replace('%leveltitle', '<span class="gig-achievements-levelInfo-nextLevel-text gig-achievements-levelInfo-nextLevel-text-nextLevelTitle">$nextLevelTitle</span>');
			    }
			    else {
                    item.footerText = '';
                    item.nextLevelLockedBadge = '';
			    }
			}
			else if (item.nextLevelTitle && typeof item.pointsStatus !== 'undefined') {
			    item.footerText = this.getText('num_more_achievement_to_unlock_leveltitle_level', '%num', '<span class="gig-achievements-levelInfo-nextLevel-text gig-achievements-levelInfo-nextLevel-text-achievementsLeft">$achievementsToNextLevel</span>')
                                    .replace('%achievement', '$requiredAchievement')
                                    .replace('%leveltitle', '<span class="gig-achievements-levelInfo-nextLevel-text gig-achievements-levelInfo-nextLevel-text-nextLevelTitle">$nextLevelTitle</span>');
			} else {
			    item.footerText = '';
			    item.nextLevelLockedBadge = '';
			}

			// For challenge status, the title is repeated twice. Since the template is shared, we detect here which is being rendered
			// and hide the redundant title from screen-readers when necessary.
			item.ariaHiddenChallengeTitle = this._i.getChallengeConfig ? 'true' : 'false';

			item.nextLevelInfo = this._p.UID?'':window.gigya.utils.templates.fill(this.templates.get('nextLevelInfo'), item);
			var htmlInfo = window.gigya.utils.templates.fill(this.templates.get('levelInfoDialog'), item);
			window.gigya.global.putGMBalloonNextTo(el, htmlInfo, challenge.levelTitle.toUpperCase(), 270,null, true, this._elid+'_levelInfo'+i); 
		},
		getCanvasSize: function(w,h) {
			return window.gigya.global.getClassInnerSize('gig-achievements-container',w,h);
		},
		getBadgesHTML:function() {
			var sidesWidth = this.getHTMLSize('<a class="gig-achievements-navigationLeft"></a>').w+this.getHTMLSize('<a class="gig-achievements-navigationRight"></a>').w;
			var w = this.canvasSize.w-sidesWidth;
			if (this.achievements.length==0) {
				this.totalPages=1;
				return '<div id="'+this._elid+'_page0" class="gig-achievements-page" style="width:'+w+'px;float:left;">&#160;</div>';
			}
			
			var h = this.canvasSize.h;
			//var w = this._p.width-sidesWidth;
			//var h = this._p.height-20;
			var itemSize=this.getItemSize();

			var itemW=itemSize.w;
			var itemH=itemSize.h;
			
			var itemsPerLine = Math.floor(w / (itemW));
			var linesPerPage = Math.floor(h / (itemH));
			var itemsInPage = itemsPerLine*linesPerPage;
			var pages = Math.ceil(this.achievements.length / itemsInPage);
			var pageH = linesPerPage*itemH;
			var itemMargin = 0;
			if (this.achievements.length>=itemsPerLine) {
				itemMargin = (w-itemsPerLine*itemW)/(itemsPerLine-1);
			}
			if (itemsPerLine==1 && pages>1) {
				itemW = w;
			}
			var marginTop = Math.floor((h - pageH)/2);
			//alert(itemsInPage);
			//alert(itemW);
			if (linesPerPage==0 || itemsPerLine==0) return '';
			var arBadgesHTML=[];
			
			var iItem=0;
			for (var i=0; i<pages; i++) {
				if (iItem >= this.achievements.length) break;
				arBadgesHTML.push('<div id="'+this._elid+'_page'+i+'" class="gig-achievements-page" style="display:none;width:'+w+'px;float:left;margin-top:'+marginTop+'px">');
				for (var u=0; u<itemsInPage; u++) {
					if (iItem >= this.achievements.length) break;
					var marginRight = ((iItem+1)/itemsPerLine==Math.round((iItem+1)/itemsPerLine)?0:itemMargin);
					var marginBottom = (u>=itemsPerLine*(linesPerPage-1)?0:5);
					arBadgesHTML.push(this.getItemHTML(iItem, this._elid+'_challenge', Math.floor(itemW), Math.floor(itemH), marginRight, marginBottom));
					iItem++;
				}
				arBadgesHTML.push('</div>');
			}	
			this.totalPages=pages;	
			return arBadgesHTML.join('');
		},

		movePage:function (value) {
			if (this.page+value<0 || this.page+value>=this.totalPages) return;
			document.getElementById(this._elid+'_page'+this.page).style.display='none';
			this.page += value;
			document.getElementById(this._elid+'_page'+this.page).style.display='';

			var arLeft=document.getElementById(this._elid+'_arrowLeft');
			var arRight=document.getElementById(this._elid+'_arrowRight');
			if (this.page==0) {
				arLeft.className = 'gig-achievements-navigationLeft gig-achievements-navigationLeft-disabled';
			} else {
				arLeft.className = 'gig-achievements-navigationLeft';
			}
			if (this.page+1==this.totalPages) {
				arRight.className = 'gig-achievements-navigationRight gig-achievements-navigationRight-disabled';
			} else {
				arRight.className = 'gig-achievements-navigationRight';
			}
			//gig-achievements-navigationLeft-disabled
		},
		getInstanceRefString: function () {
			return 'gigya.services.gm.plugins.achievements.instances[\'' + encodeURIComponent(this._elid) + '\']';
		}
	}


})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMuYWNoaWV2ZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLFdBQVcsWUFBSyxxQ0FBcUMsWUFBSztBQUMxRDtBQUNBLENBQUMsWUFBSztBQUNOLGVBQWU7QUFDZjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBSzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FB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Q0EseUI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLENBQUMsSSIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5nbS5wbHVnaW5zLmFjaGlldmVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLmdtLnBsdWdpbnMuYWNoaWV2ZW1lbnRzLmpzXCIpO1xuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmpzXCIgLz5cclxuaWYgKHR5cGVvZiBnaWd5YS5zZXJ2aWNlcy5nbS5wbHVnaW5zID09ICd1bmRlZmluZWQnKSBnaWd5YS5zZXJ2aWNlcy5nbS5wbHVnaW5zID0ge307XHJcbihmdW5jdGlvbiAoKSB7XHJcblx0Z2lneWEuc2VydmljZXMuZ20ucGx1Z2lucy5hY2hpZXZlbWVudHMgPSB7XHJcblx0XHRpbnN0YW5jZXM6IHt9LFxyXG5cdFx0c2hvd0FjaGlldmVtZW50c1VJOiBmdW5jdGlvbiAoYywgcCwgaSkge1xyXG5cdFx0XHRwcml2YXRlU2NvcGUuY3JlYXRlSW5zdGFuY2UoYywgcCwgaSk7XHJcblx0XHR9LFxyXG5cdFx0c2hvd0NoYWxsZW5nZVN0YXR1c1VJOiBmdW5jdGlvbihjLHAsaSkge1xyXG5cdFx0XHRpLmdldENoYWxsZW5nZUNvbmZpZz10cnVlO1xyXG5cdFx0XHRwcml2YXRlU2NvcGUuY3JlYXRlSW5zdGFuY2UoYyxwLGkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR2YXIgcHVibGljU2NvcGUgPSBnaWd5YS5zZXJ2aWNlcy5nbS5wbHVnaW5zLmFjaGlldmVtZW50cztcclxuXHJcblx0dmFyIHByaXZhdGVTY29wZSA9IHtcclxuXHRcdGluc3RhbmNlc19zaXplOiAwLFxyXG5cdFx0YWNoaWV2ZW1lbnRzUGx1Z2luOiBmdW5jdGlvbiAoYywgcCwgaSkge1xyXG5cdFx0XHR0aGlzLl9jID0gYztcclxuXHRcdFx0dGhpcy5fcCA9IHA7XHJcblx0XHRcdHRoaXMuX2kgPSBpO1xyXG5cdFx0XHQvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQpLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZ2lnLWFjaGlldmVtZW50cyBnaWctYWNoaWV2ZW1lbnRzLWNvbnRhaW5lclwiPjwvZGl2Pic7XHJcblx0XHRcdHRoaXMuX2VsaWQgPSBwLmNvbnRhaW5lcklEXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlSW5zdGFuY2U6IGZ1bmN0aW9uIChjLCBwLCBpKSB7XHJcblx0XHRcdHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHAuY29udGFpbmVySUQpO1xyXG5cdFx0XHRpZiAoZWwgPT0gbnVsbCkgcmV0dXJuO1xyXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuXHRcdFx0dmFyIGluc3RhbmNlID0gbmV3IHByaXZhdGVTY29wZS5hY2hpZXZlbWVudHNQbHVnaW4oYywgcCwgaSk7XHJcblx0XHRcdHB1YmxpY1Njb3BlLmluc3RhbmNlc1twLmNvbnRhaW5lcklEXSA9IGluc3RhbmNlO1xyXG5cdFx0XHRwcml2YXRlU2NvcGUuaW5zdGFuY2VzX3NpemUrKztcclxuXHRcdFx0aW5zdGFuY2UuaW5pdCgpO1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZURlZmF1bHRUZW1wbGF0ZXM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHRlbXBsYXRlcyA9IHtcclxuXHRcdFx0XHRfbWFwOiB7fSxcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9tYXBba2V5XTtcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9tYXBba2V5XSA9ICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSA/IHZhbHVlLmpvaW4oXCJcIikgOiB2YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGVtcGxhdGVzLnNldChcImFjaGlldmVtZW50c0NhbnZhc1wiLFxyXG5cdFx0XHRbXHJcblx0XHRcdCAgICAnPGRpdiBjbGFzcz1cImdpZy1hY2hpZXZlbWVudHMgZ2lnLWFjaGlldmVtZW50cy1jb250YWluZXJcIj4nLFxyXG5cdFx0XHRcdCc8YSBpZD1cIiR7aWR9X2Fycm93TGVmdFwiIGNsYXNzPVwiZ2lnLWFjaGlldmVtZW50cy1uYXZpZ2F0aW9uTGVmdFwiPjwvYT4nLFxyXG5cdFx0XHRcdCckYmFkZ2VzJyxcclxuXHRcdFx0XHQnPGEgaWQ9XCIke2lkfV9hcnJvd1JpZ2h0XCIgY2xhc3M9XCJnaWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25SaWdodFwiPjwvYT4nLFxyXG5cdFx0ICAgICAgICAnPC9kaXY+J1xyXG5cdFx0XHRdKTtcclxuXHRcdFx0dGVtcGxhdGVzLnNldChcImJhZGdlXCIsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1hY2hpZXZlbWVudHMtYmFkZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJ3aWR0aDoke2l0ZW1XaWR0aH07aGVpZ2h0OiR7aXRlbUhlaWdodH07bWFyZ2luLXJpZ2h0OiR7bWFyZ2luUmlnaHR9cHg7bWFyZ2luLWJvdHRvbToke21hcmdpbkJvdHRvbX1weFwiPicsXHJcblx0XHRcdFx0XHQnPGltZyBhbHQ9XCJcIiBhcmlhLWxhYmVsPVwiJGxldmVsVGl0bGVcIiB0YWJpbmRleD1cIjBcIiBpZD1cIiR7aWR9X2JhZGdlXCIgY2xhc3M9XCJnaWctYWNoaWV2ZW1lbnRzLWJhZGdlXCIgc3JjPVwiJGJhZGdlVVJMXCIgb25tb3VzZW92ZXI9XCIke29uTW91c2VPdmVyfVwiIG9uZm9jdXM9XCIke29uRm9jdXN9XCIgb25tb3VzZW91dD1cIiR7b25Nb3VzZU91dH1cIiBvbmJsdXI9XCIke29uQmx1cn1cIiAvPjxiciAvPicsXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIiR7dGV4dENsYXNzTmFtZX1cIj4kbGV2ZWxUaXRsZTwvZGl2PicsXHJcblx0XHRcdFx0JzwvZGl2PidcclxuXHRcdFx0XSk7XHJcblx0XHRcdHRlbXBsYXRlcy5zZXQoXCJpbWdcIixcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCc8aW1nIGFsdD1cIlwiIGNsYXNzPVwiJGNsYXNzTmFtZVwiIHNyYz1cIiRzcmNcIiAvPidcclxuXHRcdFx0XSk7XHJcblx0XHRcdHRlbXBsYXRlcy5zZXQoXCJsZXZlbEluZm9EaWFsb2dcIixcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLWFjaGlldmVtZW50cyBnaWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mb1wiIG9ubW91c2VvdmVyPVwiJHtvbk1vdXNlT3Zlcn1cIiBvbm1vdXNlb3V0PVwiJHtvbk1vdXNlT3V0fVwiPicsXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1hY2hpZXZlbWVudHMtbGV2ZWxJbmZvLWNoYWxsZW5nZVRpdGxlXCIgYXJpYS1oaWRkZW49XCIkYXJpYUhpZGRlbkNoYWxsZW5nZVRpdGxlXCI+JGNoYWxsZW5nZVRpdGxlPC9kaXY+JyxcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tY2hhbGxlbmdlRGVzY3JpcHRpb25cIj4kY2hhbGxlbmdlRGVzY3JpcHRpb248L2Rpdj4nLFxyXG5cdFx0XHRcdFx0JyRuZXh0TGV2ZWxJbmZvJyxcclxuXHRcdFx0XHQnPC9kaXY+J1xyXG5cdFx0XHRdKTtcclxuXHRcdFx0dGVtcGxhdGVzLnNldChcIm5leHRMZXZlbEluZm9cIixcclxuXHRcdFx0ZnVuY3Rpb24obykge1xyXG5cdFx0XHRcdGlmIChvLm5leHRMZXZlbFRpdGxlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gW1xyXG5cdFx0XHRcdFx0XHQnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBjbGFzcz1cImdpZy1hY2hpZXZlbWVudHMtbGV2ZWxJbmZvLW5leHRMZXZlbFwiPjx0cj4nLFxyXG5cdFx0XHRcdFx0XHRcdCc8dGQgY2xhc3M9XCJnaWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dC1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHRcIj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0JyRmb290ZXJUZXh0JyxcclxuXHRcdFx0XHRcdFx0XHQnPC9kaXY+PC90ZD4nLFxyXG5cdFx0XHRcdFx0XHRcdCc8dGQgY2xhc3M9XCJnaWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwtYmFkZ2UtY29udGFpbmVyXCI+JG5leHRMZXZlbExvY2tlZEJhZGdlPC90ZD4nLFxyXG5cdFx0XHRcdFx0XHQnPC90cj48L3RhYmxlPidcclxuXHRcdFx0XHRcdF0uam9pbignJyk7XHJcblx0XHRcdFx0fSBlbHNlIHJldHVybiAnJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHRlbXBsYXRlcztcclxuXHRcdH0sXHJcblx0XHRkZWZhdWx0Q3NzOiBbXHJcblx0XHRcdCcuZ2lnLWFjaGlldmVtZW50cyAqLCBkaXYuZ2lnLWFjaGlldmVtZW50cywgLmdpZy1hY2hpZXZlbWVudHMgc3BhbiwgLmdpZy1hY2hpZXZlbWVudHMgYTpob3ZlciwgLmdpZy1hY2hpZXZlbWVudHMgYTp2aXNpdGVkLCAuZ2lnLWFjaGlldmVtZW50cyBhOmxpbmssIC5naWctYWNoaWV2ZW1lbnRzIGE6YWN0aXZleycsXHJcblx0XHRcdCdib3JkZXI6bm9uZTsgbGluZS1oZWlnaHQ6bm9ybWFsO3BhZGRpbmc6MHB4O21hcmdpbjowcHg7Y29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZTt3aWR0aDphdXRvO2Zsb2F0Om5vbmU7LW1vei1ib3JkZXItcmFkaXVzOjA7Ym9yZGVyLXJhZGl1czowOycsXHJcblx0XHRcdCdmb250LWZhbWlseTphcmlhbDtmb250LXNpemU6MTBweDtjb2xvcjojNzk3OTc5O2JhY2tncm91bmQ6bm9uZTt0ZXh0LWFsaWduOmxlZnR9JyxcclxuXHJcblx0XHRcdCdkaXYuZ2lnLWFjaGlldmVtZW50cy1jb250YWluZXIge3RleHQtYWxpZ246Y2VudGVyO2JvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7IG92ZXJmbG93OmhpZGRlbjt6b29tOjF9JyxcclxuXHRcdFx0J2EuZ2lnLWFjaGlldmVtZW50cy1uYXZpZ2F0aW9uTGVmdCwgYS5naWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25SaWdodCwnLFxyXG5cdFx0XHQnYTpob3Zlci5naWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25MZWZ0LCBhOmhvdmVyLmdpZy1hY2hpZXZlbWVudHMtbmF2aWdhdGlvblJpZ2h0IHtkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO3dpZHRoOiA2cHg7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0IH0nLFxyXG5cclxuXHRcdFx0J2EuZ2lnLWFjaGlldmVtZW50cy1uYXZpZ2F0aW9uTGVmdCwgYTpob3Zlci5naWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25MZWZ0e2Rpc3BsYXk6aW5saW5lO2Zsb2F0OmxlZnQ7bWFyZ2luLWxlZnQ6M3B4O2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicgKyBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9OYXZpZ2F0aW9uQXJyb3dzL25hdmlnYXRpb25MZWZ0LnBuZycpICsgJ1wiKX0nLFxyXG5cdFx0XHQnYS5naWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25SaWdodCwgYTpob3Zlci5naWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25SaWdodHtkaXNwbGF5OmlubGluZTtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDozcHg7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCInICsgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vTmF2aWdhdGlvbkFycm93cy9uYXZpZ2F0aW9uUmlnaHQucG5nJykgKyAnXCIpfScsXHJcblx0XHRcdFxyXG5cdFx0XHQnYTpob3Zlci5naWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25MZWZ0e2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicgKyBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9OYXZpZ2F0aW9uQXJyb3dzL25hdmlnYXRpb25MZWZ0X2hvdmVyLnBuZycpICsgJ1wiKX0nLFxyXG5cdFx0XHQnYTpob3Zlci5naWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25SaWdodHtiYWNrZ3JvdW5kLWltYWdlOnVybChcIicgKyBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9OYXZpZ2F0aW9uQXJyb3dzL25hdmlnYXRpb25SaWdodF9ob3Zlci5wbmcnKSArICdcIil9JyxcclxuXHJcblx0XHRcdCdhLmdpZy1hY2hpZXZlbWVudHMtbmF2aWdhdGlvbkxlZnQtZGlzYWJsZWQsYTpob3Zlci5naWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25MZWZ0LWRpc2FibGVke2N1cnNvcjpkZWZhdWx0O2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicgKyBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9OYXZpZ2F0aW9uQXJyb3dzL25hdmlnYXRpb25MZWZ0X2Rpc2FibGUucG5nJykgKyAnXCIpfScsXHJcblx0XHRcdCdhLmdpZy1hY2hpZXZlbWVudHMtbmF2aWdhdGlvblJpZ2h0LWRpc2FibGVkLGE6aG92ZXIuZ2lnLWFjaGlldmVtZW50cy1uYXZpZ2F0aW9uUmlnaHQtZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCInICsgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vTmF2aWdhdGlvbkFycm93cy9uYXZpZ2F0aW9uUmlnaHRfZGlzYWJsZS5wbmcnKSArICdcIil9JyxcclxuXHJcblx0XHRcdCdkaXYuZ2lnLWFjaGlldmVtZW50cy1sZXZlbFRpdGxle2ZvbnQtc2l6ZTogMTJweDsgY29sb3I6IzMxMzEzMTtwYWRkaW5nOjAgMnB4O2xpbmUtaGVpZ2h0OjExNSU7dGV4dC1hbGlnbjpjZW50ZXI7fScsXHJcblx0XHRcdCdkaXYuZ2lnLWFjaGlldmVtZW50cy1sZXZlbFRpdGxlLWxvY2tlZHtmb250LXdlaWdodDpub3JtYWw7IGNvbG9yOiNCMEIwQjB9JyxcclxuXHRcdFx0J2ltZy5naWctYWNoaWV2ZW1lbnRzLWJhZGdle3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7bWFyZ2luOjAgNXB4IDRweCA1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7fScsXHJcblx0XHRcdCdkaXYuZ2lnLWFjaGlldmVtZW50cy1iYWRnZS1jb250YWluZXJ7ZmxvYXQ6bGVmdDt0ZXh0LWFsaWduOmNlbnRlcjtvdmVyZmxvdzpoaWRkZW47bWF4LXdpZHRoOjg2cHg7X3dpZHRoOjg2cHg7fScsXHJcblx0XHRcdFxyXG5cdFx0XHQnZGl2LmdpZy1hY2hpZXZlbWVudHMtbGV2ZWxJbmZvIHtwYWRkaW5nOiAxMnB4IDAgNXB4IDA7fScsXHJcblxyXG5cdFx0XHQnZGl2LmdpZy1hY2hpZXZlbWVudHMtbGV2ZWxJbmZvLW5leHRMZXZlbC10ZXh0IHtwYWRkaW5nLXJpZ2h0OiAxMHB4fScsXHJcblx0XHRcdCdkaXYuZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQsIHNwYW4uZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQge2ZvbnQtc2l6ZToxMnB4OyBjb2xvcjojMzEzMTMxO30nLFxyXG5cdFx0XHQnc3Bhbi5naWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dC1uZXh0TGV2ZWxUaXRsZSB7Zm9udC13ZWlnaHQ6Ym9sZDt9JyxcclxuXHRcdFx0J3NwYW4uZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQtYWNoaWV2ZW1lbnRzTGVmdCB7Zm9udC13ZWlnaHQ6Ym9sZDt9JyxcclxuXHRcdFx0XHJcblxyXG5cdFx0XHQnaW1nLmdpZy1hY2hpZXZlbWVudHMtbGV2ZWxJbmZvLW5leHRMZXZlbC1iYWRnZSwgaW1nLmdpZy1hY2hpZXZlbWVudHMtbGV2ZWxJbmZvLWJhZGdlIHt3aWR0aDo0MHB4O2hlaWdodDo0MHB4fScsXHJcblx0XHRcdCdkaXYuZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tY2hhbGxlbmdlVGl0bGUge2ZvbnQtd2VpZ2h0OmJvbGQ7IGZvbnQtc2l6ZTogMTJweDtjb2xvcjojMDAwfScsXHJcblx0XHRcdCdkaXYuZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tY2hhbGxlbmdlRGVzY3JpcHRpb24ge2ZvbnQtc2l6ZTogMTJweDtjb2xvcjojMDAwO3BhZGRpbmctYm90dG9tOjE1cHg7cGFkZGluZy1yaWdodDo1cHg7fScsXHJcblx0XHRcdCd0ZC5naWctYWNoaWV2ZW1lbnRzLWJhZGdlIHt2ZXJ0aWNhbC1hbGlnbjp0b3A7fScsXHJcblx0XHRcdCd0YWJsZS5naWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwge3dpZHRoOjEwMCV9JyxcclxuXHRcdFx0J2dpZy1hY2hpZXZlbWVudHMtbGV2ZWxJbmZvLW5leHRMZXZlbC1iYWRnZS1jb250YWluZXIge3ZlcnRpY2FsLWFsaWduOnRvcH0nLFxyXG5cdFx0XHQnZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQtY29udGFpbmVyIHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9JyxcclxuXHJcbiAgICAgICAgICAgICdkaXYuZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQgYS5naWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwtbGluayB7IGZvbnQtc2l6ZToxMnB4O2NvbG9yOiMzZTU5ZmY7Y3Vyc29yOnBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTsgfScsXHJcbiAgICAgICAgICAgICdkaXYuZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQgYS5naWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwtbGluayAqIHsgY29sb3I6IzNlNTlmZjtjdXJzb3I6cG9pbnRlcjt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lOyB9J1xyXG5cdFx0XVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZVNjb3BlLmFjaGlldmVtZW50c1BsdWdpbi5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMudGVtcGxhdGVzID0gcHJpdmF0ZVNjb3BlLmNyZWF0ZURlZmF1bHRUZW1wbGF0ZXMoKTtcclxuXHRcdFx0aWYgKHRoaXMuX3AuZGV0YWlsc1BvcHVwVGVtcGxhdGUpIHRoaXMudGVtcGxhdGVzLnNldCgnbGV2ZWxJbmZvRGlhbG9nJywgdGhpcy5fcC5kZXRhaWxzUG9wdXBUZW1wbGF0ZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGhpcy5fcC5jc3NQcmVmaXggfHwgIXByaXZhdGVTY29wZS5hZGRlZENTUykge1xyXG5cdFx0XHRcdGdpZ3lhLmdsb2JhbC5hZGRDU1MocHJpdmF0ZVNjb3BlLmRlZmF1bHRDc3MsIHRoaXMuX3AuY3NzUHJlZml4KTtcclxuXHRcdFx0XHRwcml2YXRlU2NvcGUuYWRkZWRDU1MgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmNhbnZhc1NpemUgPSB0aGlzLmdldENhbnZhc1NpemUodGhpcy5fcC53aWR0aCx0aGlzLl9wLmhlaWdodCk7XHJcblx0XHRcdHRoaXMucGFnZT0wO1x0XHRcdFxyXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHRcdFx0dmFyIFRoaXMgPSB0aGlzO1xyXG5cdFx0XHR2YXIgZm5SZWZyZXNoID0gZnVuY3Rpb24gKGUpIHsgVGhpcy5yZWZyZXNoKGUpIH07XHJcblx0XHQgICAgdmFyIGNhbGxOb3RpZmljYXRpb24gPSBmdW5jdGlvbigpIHsgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IFRoaXMucmVmcmVzaChudWxsLCB0cnVlKSB9LCAzMDAwKSB9O1xyXG5cdFx0XHRnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuYWRkRXZlbnRIYW5kbGVycyh7bGlzdGVuZXJUeXBlOidjb21wb25lbnQnfSx7XHJcblx0XHRcdCAgICBvbkxvZ291dDogZm5SZWZyZXNoXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRnaWd5YS5ldmVudHMuYWRkTWFwKHtcclxuXHRcdFx0ICAgIGRlZmF1bHRNZXRob2Q6IGNhbGxOb3RpZmljYXRpb24sXHJcblx0XHRcdCAgICBldmVudE1hcDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgZXZlbnRzOiBcInNlbmREb25lLHJlYWN0aW9uQ2xpY2tlZCxjb21tZW50U3VibWl0dGVkLGNvbW1lbnRWb3RlZCxsb2dpbixjb25uZWN0aW9uQWRkZWRcIiwgYXJnczogW10gfVxyXG5cdFx0XHQgICAgXVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Z2lneWEuc29jaWFsaXplLmFkZEV2ZW50SGFuZGxlcnMoeyBsaXN0ZW5lclR5cGU6ICdjb21wb25lbnQnIH0sIHtcclxuXHRcdFx0ICAgIG9uQWN0aW9uTm90aWZpZWQ6IGNhbGxOb3RpZmljYXRpb25cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0VGV4dDogZnVuY3Rpb24gKHRleHRLZXksIHJlcGxhY2VTdHIsIHdpdGhTdHIpIHtcclxuXHRcdCAgICByZXR1cm4gZ2lneWEucGx1Z2luVXRpbHMubGFuZy5nZXRMb2NhbGl6ZWRUZXh0KCdnaWd5YS5zZXJ2aWNlcy5nbS5wbHVnaW5zLmFjaGlldmVtZW50cy5qcycsIHRleHRLZXksIHRoaXMuX3AubGFuZywgcmVwbGFjZVN0ciwgd2l0aFN0cik7XHJcblx0XHR9LFxyXG5cdFx0cmVmcmVzaDogZnVuY3Rpb24oZSwgZG9udFNob3dMb2FkZXIpIHtcclxuXHRcdCAgICBpZiAoIWRvbnRTaG93TG9hZGVyKSBnaWd5YS5nbG9iYWwuc2hvd0xvYWRlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKSwgJ2dpZy1hY2hpZXZlbWVudHMgZ2lnLWFjaGlldmVtZW50cy1jb250YWluZXInLCB0aGlzLmNhbnZhc1NpemUuaCk7XHJcblx0XHRcdGlmICh0aGlzLl9pLmdldENoYWxsZW5nZUNvbmZpZykge1xyXG5cdFx0XHQgICAgZ2lneWEuc2VydmljZXMuZ20uZ2V0Q2hhbGxlbmdlQ29uZmlnKHRoaXMuX2Mse2luY2x1ZGVDaGFsbGVuZ2VzOnRoaXMuX3AuY2hhbGxlbmdlLCBleHBhbmRBY3Rpb25zOnRydWUsIGNhbGxiYWNrOiBnaWd5YS51dGlscy5kZWxlZ2F0ZS5jcmVhdGUodGhpcywgdGhpcy5hZnRlckdldENoYWxsZW5nZUNvbmZpZyl9KTtcclxuXHRcdFx0XHRnaWd5YS5zZXJ2aWNlcy5nbS5nZXRDaGFsbGVuZ2VTdGF0dXModGhpcy5fYyx7aW5jbHVkZUNoYWxsZW5nZXM6dGhpcy5fcC5jaGFsbGVuZ2UsIGRldGFpbHM6ICdmdWxsJyxjYWxsYmFjazogZ2lneWEudXRpbHMuZGVsZWdhdGUuY3JlYXRlKHRoaXMsIHRoaXMuYWZ0ZXJHZXRDaGFsbGVuZ2VDb25maWcpfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Z2lneWEuc2VydmljZXMuZ20uZ2V0Q2hhbGxlbmdlU3RhdHVzKHRoaXMuX2Mse2RldGFpbHM6ICdmdWxsJyxjYWxsYmFjazogZ2lneWEudXRpbHMuZGVsZWdhdGUuY3JlYXRlKHRoaXMsIHRoaXMuYWZ0ZXJHZXRDaGFsbGVuZ2UpfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0YWZ0ZXJHZXRDaGFsbGVuZ2U6IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmIChlLmVycm9yQ29kZT4wKSB7XHJcblx0XHRcdFx0Z2lneWEuZXZlbnRzLmRpc3BhdGNoRXJyb3JGcm9tUmVzcG9uc2UodGhpcy5fcCwgZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5hY2hpZXZlbWVudHMgPSBbXTtcclxuXHRcdFx0aWYgKGUuYWNoaWV2ZW1lbnRzKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaT0wOyBpPGUuYWNoaWV2ZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgY2hhbGxlbmdlPWUuYWNoaWV2ZW1lbnRzW2ldO1xyXG5cdFx0XHRcdFx0Y2hhbGxlbmdlLnRleHRDbGFzc05hbWUgPSAnZ2lnLWFjaGlldmVtZW50cy1sZXZlbFRpdGxlJztcclxuXHRcdFx0XHRcdGlmIChjaGFsbGVuZ2UubGV2ZWw9PTApIHtcclxuXHRcdFx0XHRcdCAgICBjaGFsbGVuZ2UuYmFkZ2VVUkwgPSBnaWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwoY2hhbGxlbmdlLm5leHRMZXZlbExvY2tlZEJhZGdlVVJMLCBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9Mb2NrZWRCYWRnZS5wbmcnKSk7XHJcblx0XHRcdFx0XHRcdGNoYWxsZW5nZS5sZXZlbFRpdGxlID0gY2hhbGxlbmdlLm5leHRMZXZlbFRpdGxlXHJcblx0XHRcdFx0XHRcdGNoYWxsZW5nZS5sZXZlbERlc2NyaXB0aW9uID0gY2hhbGxlbmdlLm5leHRMZXZlbERlc2NyaXB0aW9uXHJcblx0XHRcdFx0XHRcdGNoYWxsZW5nZS50ZXh0Q2xhc3NOYW1lID0gJ2dpZy1hY2hpZXZlbWVudHMtbGV2ZWxUaXRsZSBnaWctYWNoaWV2ZW1lbnRzLWxldmVsVGl0bGUtbG9ja2VkJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICghdGhpcy5fcC5leGNsdWRlQ29tcGxldGVkQ2hhbGxlbmdlcyB8fCBjaGFsbGVuZ2UubmV4dExldmVsVGl0bGUpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5hY2hpZXZlbWVudHMucHVzaChjaGFsbGVuZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmRyYXcoKTtcclxuXHRcdH0sXHJcblx0XHRhZnRlckdldENoYWxsZW5nZUNvbmZpZzogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRpZiAoZS5lcnJvckNvZGU+MCkge1xyXG5cdFx0XHRcdGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKHRoaXMuX3AsIGUpO1xyXG5cdFx0XHRcdGlmIChlLm9wZXJhdGlvbj09Jy9nbS5nZXRDaGFsbGVuZ2VTdGF0dXMnKSB7XHJcblx0XHRcdFx0XHRlLmFjaGlldmVtZW50cz1bXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZS5jaGFsbGVuZ2VzPVtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZS5hY2hpZXZlbWVudHMpIHRoaXMucmF3QWNoaWV2ZW1lbnRzID0gZS5hY2hpZXZlbWVudHM7XHJcblx0XHRcdGlmIChlLmNoYWxsZW5nZXMpIHRoaXMucmF3Q2hhbGxlbmdlcyA9IGUuY2hhbGxlbmdlcztcclxuXHJcblx0XHRcdGlmICh0aGlzLnJhd0FjaGlldmVtZW50cyAmJiB0aGlzLnJhd0NoYWxsZW5nZXMpIHtcclxuXHRcdFx0XHR0aGlzLmFjaGlldmVtZW50cyA9IFtdO1xyXG5cdFx0XHRcdGlmICh0aGlzLnJhd0NoYWxsZW5nZXMubGVuZ3RoPjAgJiYgdGhpcy5yYXdDaGFsbGVuZ2VzWzBdLmxldmVscyAmJiB0aGlzLnJhd0FjaGlldmVtZW50cy5sZW5ndGg+MCkge1xyXG5cdFx0XHRcdFx0dmFyIGNoYWxsZW5nZSA9IHRoaXMucmF3Q2hhbGxlbmdlc1swXTtcclxuXHRcdFx0XHRcdHZhciBsZXZlbHMgPSBjaGFsbGVuZ2UubGV2ZWxzO1xyXG5cdFx0XHRcdCAgICB2YXIgYWNoaWV2ZW1lbnQgPSB0aGlzLnJhd0FjaGlldmVtZW50c1swXTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBpPTA7IGk8bGV2ZWxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsZXZlbD1sZXZlbHNbaV07XHJcblx0XHRcdFx0XHRcdHZhciBsb2NrZWQgPSBpID49IGFjaGlldmVtZW50LmxldmVsO1xyXG5cdFx0XHRcdFx0XHRpZiAobG9ja2VkICYmIGFjaGlldmVtZW50Lm5leHRMZXZlbFRpdGxlID09IG51bGwpXHJcblx0XHRcdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHRcdFx0dmFyIG5ld0xldmVsID0ge1xyXG5cdFx0XHRcdFx0XHRcdHRleHRDbGFzc05hbWU6IGxvY2tlZD8nZ2lnLWFjaGlldmVtZW50cy1sZXZlbFRpdGxlIGdpZy1hY2hpZXZlbWVudHMtbGV2ZWxUaXRsZS1sb2NrZWQnOidnaWctYWNoaWV2ZW1lbnRzLWxldmVsVGl0bGUnLFxyXG5cdFx0XHRcdFx0XHRcdGxldmVsVGl0bGU6bGV2ZWwudGl0bGUsXHJcblx0XHRcdFx0XHRcdFx0bGV2ZWxEZXNjcmlwdGlvbjogbGV2ZWwuZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0YmFkZ2VVUkw6IGxvY2tlZD9sZXZlbC5sb2NrZWRCYWRnZVVSTDpsZXZlbC5iYWRnZVVSTCxcclxuXHRcdFx0XHRcdFx0XHRjaGFsbGVuZ2VEZXNjcmlwdGlvbjogbGV2ZWwuZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0Y2hhbGxlbmdlVGl0bGU6IGxldmVsLnRpdGxlLFxyXG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkQWNoaWV2ZW1lbnQ6IHRoaXMuZ2V0VGV4dChhY2hpZXZlbWVudC5yZXF1aXJlZEFjaGlldmVtZW50KSB8fCBhY2hpZXZlbWVudC5yZXF1aXJlZEFjaGlldmVtZW50XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5hY2hpZXZlbWVudHMucHVzaChuZXdMZXZlbCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZHJhdzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgaXRlbT17XHJcblx0XHRcdFx0aWQ6IHRoaXMuX2VsaWQsXHJcblx0XHRcdFx0YmFkZ2VzOiB0aGlzLmdldEJhZGdlc0hUTUwoKSxcclxuXHRcdFx0XHR3aWR0aDogdGhpcy5jYW52YXNTaXplLncsXHJcblx0XHRcdFx0aGVpZ2h0OiB0aGlzLmNhbnZhc1NpemUuaFxyXG5cdFx0XHR9XHJcblx0XHRcdHZhciB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzLmdldCgnYWNoaWV2ZW1lbnRzQ2FudmFzJyk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQpLmlubmVySFRNTD1naWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgaXRlbSk7XHRcdFx0XHRcclxuXHRcdFx0dGhpcy5tb3ZlUGFnZSgwKTtcclxuXHRcdFx0dmFyIFRoaXM9dGhpcztcclxuXHRcdFx0dmFyIGFycm93TGVmdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKydfYXJyb3dMZWZ0Jyk7XHJcblx0XHRcdHZhciBhcnJvd1JpZ2h0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQrJ19hcnJvd1JpZ2h0Jyk7XHJcblx0XHRcdGlmICh0aGlzLnRvdGFsUGFnZXM9PTEpIHtcclxuXHRcdFx0XHRhcnJvd0xlZnQuc3R5bGUudmlzaWJpbGl0eT0naGlkZGVuJztcclxuXHRcdFx0XHRhcnJvd1JpZ2h0LnN0eWxlLnZpc2liaWxpdHk9J2hpZGRlbic7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZWxpZCsnX2Fycm93TGVmdCcpLm9uY2xpY2s9ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRUaGlzLm1vdmVQYWdlKC0xKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQrJ19hcnJvd1JpZ2h0Jykub25jbGljaz1mdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFRoaXMubW92ZVBhZ2UoMSk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXRoaXMuZmlyZWRMb2FkRXZlbnQpIHtcclxuXHRcdFx0XHR0aGlzLmZpcmVkTG9hZEV2ZW50ID0gdHJ1ZTtcclxuXHRcdFx0XHRnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoeyBldmVudE5hbWU6ICdsb2FkJywgY29udGFpbmVySUQ6IHRoaXMuX3BbJ2NvbnRhaW5lcklEJ10gfSx0aGlzLl9wKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGdldEhUTUxTaXplOmZ1bmN0aW9uKGh0bWwpIHtcclxuXHRcdFx0dmFyIGRpdk1lYXN1cmU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdGRpdk1lYXN1cmUuc3R5bGUucG9zaXRpb249J2Fic29sdXRlJztcclxuXHRcdFx0ZGl2TWVhc3VyZS5zdHlsZS5sZWZ0PSctMTAwMHB4JzsgXHJcblx0XHRcdGRpdk1lYXN1cmUuaW5uZXJIVE1MPWh0bWw7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQpLmFwcGVuZENoaWxkKGRpdk1lYXN1cmUpO1xyXG5cdFx0XHR2YXIgdz1kaXZNZWFzdXJlLm9mZnNldFdpZHRoO1xyXG5cdFx0XHR2YXIgaD1kaXZNZWFzdXJlLm9mZnNldEhlaWdodDtcclxuXHRcdFx0ZGl2TWVhc3VyZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdk1lYXN1cmUpO1xyXG5cdFx0XHRyZXR1cm4ge3c6dyxoOmh9XHRcdFx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdGdldEl0ZW1TaXplOmZ1bmN0aW9uKG1pbldpZHRoKSB7XHJcblx0XHRcdHZhciB3PTA7XHJcblx0XHRcdHZhciBoPTA7XHJcblx0XHRcdGZvciAodmFyIGk9MDsgaTx0aGlzLmFjaGlldmVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBodG1sU2l6ZSA9IHRoaXMuZ2V0SFRNTFNpemUodGhpcy5nZXRJdGVtSFRNTChpLCB0aGlzLl9lbGlkKydfbWVhc3VyZV8nLCBtaW5XaWR0aCkpO1xyXG5cdFx0XHRcdHc9TWF0aC5tYXgoaHRtbFNpemUudywgdyk7XHJcblx0XHRcdFx0aD1NYXRoLm1heChodG1sU2l6ZS5oLCBoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge3c6dyxoOmh9XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0Z2V0SXRlbUhUTUw6ZnVuY3Rpb24oaSxpZFByZWZpeCx3aWR0aCxoZWlnaHQsbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSkge1xyXG5cdFx0XHRpZiAoaSA+PSB0aGlzLmFjaGlldmVtZW50cy5sZW5ndGgpIHJldHVybiAnJztcclxuXHRcdFx0dmFyIGl0ZW09Z2lneWEudXRpbHMub2JqZWN0LmNsb25lKHRoaXMuYWNoaWV2ZW1lbnRzW2ldLCB0cnVlKTtcclxuXHRcdFx0dmFyIFRoaXM9dGhpcztcclxuXHRcdFx0aXRlbS5vbk1vdXNlT3ZlciA9IHRoaXMuZ2V0SW5zdGFuY2VSZWZTdHJpbmcoKSsnLm9uQmFkZ2VNb3VzZU92ZXIoJytpKycsIDUwMCk7JztcclxuXHRcdFx0aXRlbS5vbk1vdXNlT3V0ID0gdGhpcy5nZXRJbnN0YW5jZVJlZlN0cmluZygpKycub25CYWRnZU1vdXNlT3V0KCcraSsnLCA1MDApOyc7XHJcblx0XHRcdGl0ZW0ub25Gb2N1cyA9IHRoaXMuZ2V0SW5zdGFuY2VSZWZTdHJpbmcoKSsnLm9uQmFkZ2VNb3VzZU92ZXIoJytpKycsIDApOyc7XHJcblx0XHRcdGl0ZW0ub25CbHVyID0gdGhpcy5nZXRJbnN0YW5jZVJlZlN0cmluZygpKycub25CYWRnZU1vdXNlT3V0KCcraSsnLCAwKTsnO1xyXG5cdFx0XHRpdGVtLmJhZGdlVVJMID0gZ2lneWEuZ2xvYmFsLmdldFBob3RvVVJMKGl0ZW0uYmFkZ2VVUkwpO1xyXG5cdFx0XHRpdGVtLm5leHRMZXZlbExvY2tlZEJhZGdlVVJMID0gZ2lneWEuZ2xvYmFsLmdldFBob3RvVVJMKGl0ZW0ubmV4dExldmVsTG9ja2VkQmFkZ2VVUkwpO1xyXG5cdFx0XHRpdGVtLmlkID0gaWRQcmVmaXgraTtcclxuXHRcdFx0aXRlbS5pdGVtV2lkdGg9Jyc7XHJcblx0XHRcdGl0ZW0uaXRlbUhlaWdodD0nJzsgXHJcblx0XHRcdGl0ZW0ubWFyZ2luUmlnaHQ9MDtcclxuXHRcdFx0aXRlbS5tYXJnaW5Cb3R0b209MDtcclxuXHRcdFx0aWYgKHdpZHRoKSBpdGVtLml0ZW1XaWR0aCA9IHdpZHRoKydweCc7XHJcblx0XHRcdGlmIChoZWlnaHQpIGl0ZW0uaXRlbUhlaWdodCA9IGhlaWdodCsncHgnO1xyXG5cdFx0XHRpZiAobWFyZ2luUmlnaHQpIGl0ZW0ubWFyZ2luUmlnaHQgPSBtYXJnaW5SaWdodDtcclxuXHRcdFx0aWYgKG1hcmdpbkJvdHRvbSkgaXRlbS5tYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b207XHJcblx0XHRcdHJldHVybiBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnRlbXBsYXRlcy5nZXQoJ2JhZGdlJyksIGl0ZW0pO1xyXG5cdFx0fSxcclxuXHRcdG9uQmFkZ2VNb3VzZU92ZXI6ZnVuY3Rpb24oaSwgZGVsYXlNcykge1xyXG5cdFx0XHR2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKydfY2hhbGxlbmdlJytpKydfYmFkZ2UnKTtcclxuXHRcdFx0dmFyIFRoaXM9dGhpcztcclxuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChlbC5vdmVyVGltZW91dCk7XHJcblx0XHRcdGVsLm92ZXJUaW1lb3V0PXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFRoaXMuc2hvd0xldmVsSW5mbyhpKTtcclxuXHRcdFx0fSwgZGVsYXlNcyk7XHJcblx0XHR9LFxyXG5cdFx0b25CYWRnZU1vdXNlT3V0OiBmdW5jdGlvbihpLCBkZWxheU1zKSB7XHJcblx0XHRcdHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQrJ19jaGFsbGVuZ2UnK2krJ19iYWRnZScpO1xyXG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KGVsLm92ZXJUaW1lb3V0KTtcclxuXHRcdFx0dmFyIGZuID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Z2lneWEuZ2xvYmFsLnJlbW92ZUdNQmFsbG9vbigpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKGRlbGF5TXMgPT09IDApIHtcclxuXHRcdFx0XHRmbigpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGVsLm92ZXJUaW1lb3V0PXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Z2lneWEuZ2xvYmFsLnJlbW92ZUdNQmFsbG9vbigpO1xyXG5cdFx0XHRcdH0sIGRlbGF5TXMpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2hvd0xldmVsSW5mbzpmdW5jdGlvbihpKSB7XHJcblx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkICsgJ19sZXZlbEluZm8nK2kpKSByZXR1cm47XHJcblx0XHRcdHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQrJ19jaGFsbGVuZ2UnK2krJ19iYWRnZScpO1xyXG5cdFx0XHR2YXIgY2hhbGxlbmdlID0gdGhpcy5hY2hpZXZlbWVudHNbaV07XHJcblx0XHRcdHZhciBpdGVtID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKGNoYWxsZW5nZSk7XHJcblx0XHRcdGl0ZW0uVEVYVCA9IGdpZ3lhLnV0aWxzLmRlbGVnYXRlLmNyZWF0ZSh0aGlzLCB0aGlzLmdldFRleHQpO1xyXG5cdFx0XHRpdGVtLmlkID0gdGhpcy5fZWxpZCArICdfbGV2ZWxJbmZvQnViYmxlJztcclxuXHRcdFx0aXRlbS5vbk1vdXNlT3ZlciA9IHRoaXMuZ2V0SW5zdGFuY2VSZWZTdHJpbmcoKSsnLm9uQmFkZ2VNb3VzZU92ZXIoJytpKycsIDUwMCk7JztcclxuXHRcdFx0aXRlbS5vbk1vdXNlT3V0ID0gdGhpcy5nZXRJbnN0YW5jZVJlZlN0cmluZygpKycub25CYWRnZU1vdXNlT3V0KCcraSsnLCA1MDApOyc7XHJcblx0XHRcdGl0ZW0ubmV4dExldmVsTG9ja2VkQmFkZ2VVUkwgPSBnaWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwoaXRlbS5uZXh0TGV2ZWxMb2NrZWRCYWRnZVVSTCwgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vTG9ja2VkQmFkZ2UucG5nJykpO1xyXG5cdFx0XHRpZiAoaXRlbS5uZXh0TGV2ZWxMb2NrZWRCYWRnZVVSTCkge1xyXG5cdFx0XHQgICAgaXRlbS5uZXh0TGV2ZWxMb2NrZWRCYWRnZSA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMudGVtcGxhdGVzLmdldCgnaW1nJyksIHsgc3JjOiBpdGVtLm5leHRMZXZlbExvY2tlZEJhZGdlVVJMLCBjbGFzc05hbWU6ICdnaWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwtYmFkZ2UnIH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaXRlbS5uZXh0TGV2ZWxUaXRsZSAmJiBpdGVtLmFjdGlvblN0YXR1cyAmJiBpdGVtLmFjdGlvblN0YXR1cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5uZXh0TGV2ZWxBY3Rpb25VUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmZvb3RlclRleHQgPSAoJzxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tbmV4dExldmVsLWxpbmtcIiBocmVmPVwiJG5leHRMZXZlbEFjdGlvblVSTFwiIGFsdD1cIlwiPicgKyB0aGlzLmdldFRleHQoJ2xlYXJuX2hvd190b191bmxvY2tfdGhlX2xldmVsdGl0bGVfYmFkZ2UnKSArICc8L2E+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVsZXZlbHRpdGxlJywgJzxzcGFuIGNsYXNzPVwiZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQgZ2lnLWFjaGlldmVtZW50cy1sZXZlbEluZm8tbmV4dExldmVsLXRleHQtbmV4dExldmVsVGl0bGVcIj4kbmV4dExldmVsVGl0bGU8L3NwYW4+Jyk7XHJcblx0XHRcdCAgICB9XHJcblx0XHRcdCAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmZvb3RlclRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLm5leHRMZXZlbExvY2tlZEJhZGdlID0gJyc7XHJcblx0XHRcdCAgICB9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoaXRlbS5uZXh0TGV2ZWxUaXRsZSAmJiB0eXBlb2YgaXRlbS5wb2ludHNTdGF0dXMgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdCAgICBpdGVtLmZvb3RlclRleHQgPSB0aGlzLmdldFRleHQoJ251bV9tb3JlX2FjaGlldmVtZW50X3RvX3VubG9ja19sZXZlbHRpdGxlX2xldmVsJywgJyVudW0nLCAnPHNwYW4gY2xhc3M9XCJnaWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dCBnaWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dC1hY2hpZXZlbWVudHNMZWZ0XCI+JGFjaGlldmVtZW50c1RvTmV4dExldmVsPC9zcGFuPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclYWNoaWV2ZW1lbnQnLCAnJHJlcXVpcmVkQWNoaWV2ZW1lbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJWxldmVsdGl0bGUnLCAnPHNwYW4gY2xhc3M9XCJnaWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dCBnaWctYWNoaWV2ZW1lbnRzLWxldmVsSW5mby1uZXh0TGV2ZWwtdGV4dC1uZXh0TGV2ZWxUaXRsZVwiPiRuZXh0TGV2ZWxUaXRsZTwvc3Bhbj4nKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0ICAgIGl0ZW0uZm9vdGVyVGV4dCA9ICcnO1xyXG5cdFx0XHQgICAgaXRlbS5uZXh0TGV2ZWxMb2NrZWRCYWRnZSA9ICcnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBGb3IgY2hhbGxlbmdlIHN0YXR1cywgdGhlIHRpdGxlIGlzIHJlcGVhdGVkIHR3aWNlLiBTaW5jZSB0aGUgdGVtcGxhdGUgaXMgc2hhcmVkLCB3ZSBkZXRlY3QgaGVyZSB3aGljaCBpcyBiZWluZyByZW5kZXJlZFxyXG5cdFx0XHQvLyBhbmQgaGlkZSB0aGUgcmVkdW5kYW50IHRpdGxlIGZyb20gc2NyZWVuLXJlYWRlcnMgd2hlbiBuZWNlc3NhcnkuXHJcblx0XHRcdGl0ZW0uYXJpYUhpZGRlbkNoYWxsZW5nZVRpdGxlID0gdGhpcy5faS5nZXRDaGFsbGVuZ2VDb25maWcgPyAndHJ1ZScgOiAnZmFsc2UnO1xyXG5cclxuXHRcdFx0aXRlbS5uZXh0TGV2ZWxJbmZvID0gdGhpcy5fcC5VSUQ/Jyc6Z2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy50ZW1wbGF0ZXMuZ2V0KCduZXh0TGV2ZWxJbmZvJyksIGl0ZW0pO1xyXG5cdFx0XHR2YXIgaHRtbEluZm8gPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnRlbXBsYXRlcy5nZXQoJ2xldmVsSW5mb0RpYWxvZycpLCBpdGVtKTtcclxuXHRcdFx0Z2lneWEuZ2xvYmFsLnB1dEdNQmFsbG9vbk5leHRUbyhlbCwgaHRtbEluZm8sIGNoYWxsZW5nZS5sZXZlbFRpdGxlLnRvVXBwZXJDYXNlKCksIDI3MCxudWxsLCB0cnVlLCB0aGlzLl9lbGlkKydfbGV2ZWxJbmZvJytpKTsgXHJcblx0XHR9LFxyXG5cdFx0Z2V0Q2FudmFzU2l6ZTogZnVuY3Rpb24odyxoKSB7XHJcblx0XHRcdHJldHVybiBnaWd5YS5nbG9iYWwuZ2V0Q2xhc3NJbm5lclNpemUoJ2dpZy1hY2hpZXZlbWVudHMtY29udGFpbmVyJyx3LGgpO1xyXG5cdFx0fSxcclxuXHRcdGdldEJhZGdlc0hUTUw6ZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzaWRlc1dpZHRoID0gdGhpcy5nZXRIVE1MU2l6ZSgnPGEgY2xhc3M9XCJnaWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25MZWZ0XCI+PC9hPicpLncrdGhpcy5nZXRIVE1MU2l6ZSgnPGEgY2xhc3M9XCJnaWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25SaWdodFwiPjwvYT4nKS53O1xyXG5cdFx0XHR2YXIgdyA9IHRoaXMuY2FudmFzU2l6ZS53LXNpZGVzV2lkdGg7XHJcblx0XHRcdGlmICh0aGlzLmFjaGlldmVtZW50cy5sZW5ndGg9PTApIHtcclxuXHRcdFx0XHR0aGlzLnRvdGFsUGFnZXM9MTtcclxuXHRcdFx0XHRyZXR1cm4gJzxkaXYgaWQ9XCInK3RoaXMuX2VsaWQrJ19wYWdlMFwiIGNsYXNzPVwiZ2lnLWFjaGlldmVtZW50cy1wYWdlXCIgc3R5bGU9XCJ3aWR0aDonK3crJ3B4O2Zsb2F0OmxlZnQ7XCI+JiMxNjA7PC9kaXY+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGggPSB0aGlzLmNhbnZhc1NpemUuaDtcclxuXHRcdFx0Ly92YXIgdyA9IHRoaXMuX3Aud2lkdGgtc2lkZXNXaWR0aDtcclxuXHRcdFx0Ly92YXIgaCA9IHRoaXMuX3AuaGVpZ2h0LTIwO1xyXG5cdFx0XHR2YXIgaXRlbVNpemU9dGhpcy5nZXRJdGVtU2l6ZSgpO1xyXG5cclxuXHRcdFx0dmFyIGl0ZW1XPWl0ZW1TaXplLnc7XHJcblx0XHRcdHZhciBpdGVtSD1pdGVtU2l6ZS5oO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGl0ZW1zUGVyTGluZSA9IE1hdGguZmxvb3IodyAvIChpdGVtVykpO1xyXG5cdFx0XHR2YXIgbGluZXNQZXJQYWdlID0gTWF0aC5mbG9vcihoIC8gKGl0ZW1IKSk7XHJcblx0XHRcdHZhciBpdGVtc0luUGFnZSA9IGl0ZW1zUGVyTGluZSpsaW5lc1BlclBhZ2U7XHJcblx0XHRcdHZhciBwYWdlcyA9IE1hdGguY2VpbCh0aGlzLmFjaGlldmVtZW50cy5sZW5ndGggLyBpdGVtc0luUGFnZSk7XHJcblx0XHRcdHZhciBwYWdlSCA9IGxpbmVzUGVyUGFnZSppdGVtSDtcclxuXHRcdFx0dmFyIGl0ZW1NYXJnaW4gPSAwO1xyXG5cdFx0XHRpZiAodGhpcy5hY2hpZXZlbWVudHMubGVuZ3RoPj1pdGVtc1BlckxpbmUpIHtcclxuXHRcdFx0XHRpdGVtTWFyZ2luID0gKHctaXRlbXNQZXJMaW5lKml0ZW1XKS8oaXRlbXNQZXJMaW5lLTEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpdGVtc1BlckxpbmU9PTEgJiYgcGFnZXM+MSkge1xyXG5cdFx0XHRcdGl0ZW1XID0gdztcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgbWFyZ2luVG9wID0gTWF0aC5mbG9vcigoaCAtIHBhZ2VIKS8yKTtcclxuXHRcdFx0Ly9hbGVydChpdGVtc0luUGFnZSk7XHJcblx0XHRcdC8vYWxlcnQoaXRlbVcpO1xyXG5cdFx0XHRpZiAobGluZXNQZXJQYWdlPT0wIHx8IGl0ZW1zUGVyTGluZT09MCkgcmV0dXJuICcnO1xyXG5cdFx0XHR2YXIgYXJCYWRnZXNIVE1MPVtdO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGlJdGVtPTA7XHJcblx0XHRcdGZvciAodmFyIGk9MDsgaTxwYWdlczsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKGlJdGVtID49IHRoaXMuYWNoaWV2ZW1lbnRzLmxlbmd0aCkgYnJlYWs7XHJcblx0XHRcdFx0YXJCYWRnZXNIVE1MLnB1c2goJzxkaXYgaWQ9XCInK3RoaXMuX2VsaWQrJ19wYWdlJytpKydcIiBjbGFzcz1cImdpZy1hY2hpZXZlbWVudHMtcGFnZVwiIHN0eWxlPVwiZGlzcGxheTpub25lO3dpZHRoOicrdysncHg7ZmxvYXQ6bGVmdDttYXJnaW4tdG9wOicrbWFyZ2luVG9wKydweFwiPicpO1xyXG5cdFx0XHRcdGZvciAodmFyIHU9MDsgdTxpdGVtc0luUGFnZTsgdSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaUl0ZW0gPj0gdGhpcy5hY2hpZXZlbWVudHMubGVuZ3RoKSBicmVhaztcclxuXHRcdFx0XHRcdHZhciBtYXJnaW5SaWdodCA9ICgoaUl0ZW0rMSkvaXRlbXNQZXJMaW5lPT1NYXRoLnJvdW5kKChpSXRlbSsxKS9pdGVtc1BlckxpbmUpPzA6aXRlbU1hcmdpbik7XHJcblx0XHRcdFx0XHR2YXIgbWFyZ2luQm90dG9tID0gKHU+PWl0ZW1zUGVyTGluZSoobGluZXNQZXJQYWdlLTEpPzA6NSk7XHJcblx0XHRcdFx0XHRhckJhZGdlc0hUTUwucHVzaCh0aGlzLmdldEl0ZW1IVE1MKGlJdGVtLCB0aGlzLl9lbGlkKydfY2hhbGxlbmdlJywgTWF0aC5mbG9vcihpdGVtVyksIE1hdGguZmxvb3IoaXRlbUgpLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tKSk7XHJcblx0XHRcdFx0XHRpSXRlbSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhckJhZGdlc0hUTUwucHVzaCgnPC9kaXY+Jyk7XHJcblx0XHRcdH1cdFxyXG5cdFx0XHR0aGlzLnRvdGFsUGFnZXM9cGFnZXM7XHRcclxuXHRcdFx0cmV0dXJuIGFyQmFkZ2VzSFRNTC5qb2luKCcnKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bW92ZVBhZ2U6ZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhZ2UrdmFsdWU8MCB8fCB0aGlzLnBhZ2UrdmFsdWU+PXRoaXMudG90YWxQYWdlcykgcmV0dXJuO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKydfcGFnZScrdGhpcy5wYWdlKS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuXHRcdFx0dGhpcy5wYWdlICs9IHZhbHVlO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKydfcGFnZScrdGhpcy5wYWdlKS5zdHlsZS5kaXNwbGF5PScnO1xyXG5cclxuXHRcdFx0dmFyIGFyTGVmdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9lbGlkKydfYXJyb3dMZWZ0Jyk7XHJcblx0XHRcdHZhciBhclJpZ2h0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsaWQrJ19hcnJvd1JpZ2h0Jyk7XHJcblx0XHRcdGlmICh0aGlzLnBhZ2U9PTApIHtcclxuXHRcdFx0XHRhckxlZnQuY2xhc3NOYW1lID0gJ2dpZy1hY2hpZXZlbWVudHMtbmF2aWdhdGlvbkxlZnQgZ2lnLWFjaGlldmVtZW50cy1uYXZpZ2F0aW9uTGVmdC1kaXNhYmxlZCc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXJMZWZ0LmNsYXNzTmFtZSA9ICdnaWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25MZWZ0JztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5wYWdlKzE9PXRoaXMudG90YWxQYWdlcykge1xyXG5cdFx0XHRcdGFyUmlnaHQuY2xhc3NOYW1lID0gJ2dpZy1hY2hpZXZlbWVudHMtbmF2aWdhdGlvblJpZ2h0IGdpZy1hY2hpZXZlbWVudHMtbmF2aWdhdGlvblJpZ2h0LWRpc2FibGVkJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhclJpZ2h0LmNsYXNzTmFtZSA9ICdnaWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25SaWdodCc7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly9naWctYWNoaWV2ZW1lbnRzLW5hdmlnYXRpb25MZWZ0LWRpc2FibGVkXHJcblx0XHR9LFxyXG5cdFx0Z2V0SW5zdGFuY2VSZWZTdHJpbmc6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuICdnaWd5YS5zZXJ2aWNlcy5nbS5wbHVnaW5zLmFjaGlldmVtZW50cy5pbnN0YW5jZXNbXFwnJyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9lbGlkKSArICdcXCddJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9