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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.socialize.plugins.reactions.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.socialize.plugins.reactions.js":
/*!**************************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.reactions.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="gigya.services.socialize.plugins.js" />
(function () {
    if (typeof window.gigya.services.socialize.plugins == 'undefined') window.gigya.services.socialize.plugins = {};
    var _pi = window.gigya.services.socialize.plugins;
    var pluginName = 'reactions';
    if (typeof _pi[pluginName] == 'undefined') {
        var pluginScope = {
            instances_size: 0,
            bookmarks: 'Facebook,Twitter,Google,LinkedIn,Digg,Messenger,VKontakte,Spiceworks,Viadeo,nk.pl,Xing,Tuenti,Google Bookmarks,Baidu,FriendFeed,Tumblr,Pinterest,StumbleUpon,Skyrock,QQ,Sina,Kaixin,Renren,VZNet,Share,Email,facebook-like,facebook-send,facebook-subscribe,facebook-share,google-plusone,twitter-tweet,Comments,Reddit,Mixi,Naver,pinterest-pinit,twitter-hashtag,twitter-mention,Print,Foursquare,Foursquare-save,googlePlus-share,moshare-sms,getglue,Kindle,Hatena-bookmark,lineit,Wanelo,WhatsApp',
            createBookmarksObject: function (instance) {
                instance.bookmarkSitesArray = [];
                instance.bookmarkSitesHash = {};
                var arDisplayNames = this.bookmarks.split(',');
                var arNames = this.bookmarks.replace(',Google,',',googleplus,').replace(/ /g, '').replace(/!/g, '').replace(/\./g, '').replace(/\+/g, 'plus').toLowerCase().split(',');

                arDisplayNames.push('Google');
                arNames.push('googleplus-interactive');

                for (var i = 0; i < arDisplayNames.length; i++) {
                    var displayName = instance.TEXT(arNames[i]);
                    if (!displayName) displayName = arDisplayNames[i];
                    var bms = { name: arNames[i], displayName: displayName, toString: function () { return this.name } };
                    instance.bookmarkSitesArray.push(bms);
                    instance.bookmarkSitesHash[bms.name] = bms;
                }
            },
            reactionsPlugin: function (c, p, i) {
                this._c = c;
                this._p = p;
                this._i = i;
                this._elid = p.containerID;
                this._barID = this._p.barID;
                var deviceType = p['deviceType'] ? p['deviceType'].toLowerCase() : 'desktop';
                this.isMobileUI = (deviceType == 'mobile' || (deviceType == 'auto' && window.gigya.localInfo.isMobile));
            },
            createInstance: function (c, p, i) {

                var el = document.getElementById(p.containerID);
                if (el == null) return;
                el.innerHTML = "";

                var instance = new pluginScope.reactionsPlugin(c, p, i);
                instance.lang = p.lang;
                pluginScope.createBookmarksObject(instance);
                _pi[pluginName].instances[p.containerID] = instance;
                pluginScope.instances_size++;
                instance.draw();
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
                templates.set("button",
				[
                    '<div class="gig-button gig-$buttonType-button gig-button-up gig-button-count-${showCounts}" id="$id" title="$tooltip" alt="$tooltip" onclick="$onClick" onmouseover="$onMouseOver" onmouseout="$onMouseOut" tabindex="0" role="button">',
                    '<table cellpadding="0" cellspacing="0" role="presentation"><tr>',
						'<td id="$id-left" aria-hidden="true">$elButtonLeftImg</td>',
						'$iconTD',
						'$textTD',
						'<td id="$id-right" aria-hidden="true">$elButtonRightImg</td>',
                    '</tr></table>',
                    '</div>'
				//'$countLeftImg, $countCenterBGImg, $countRightImg, $count
				]);
                templates.set("newButton",
				[
					'<a class="gig-bar-button gig-$buttonType-bar-button">',
						'<div class="gig-bar-button-icon gig-$buttonType-bar-button-icon">$elIconImg</div>',
						'<span class="gig-bar-button-text gig-$buttonType-bar-button-text">$text</span>',
					'</a>'
				]);
                templates.set("textTD",
				[
					'<td id="$id-text" style="vertical-align:middle;background-repeat:repeat-x;$buttonCenterBGStyle" aria-hidden="true">',
						'<div class="gig-button-text gig-$buttonType-button-text">$text</div>',
					'</td>'
				]);
                templates.set("iconTD",
				[
					'<td id="$id-icon" style="zoom:1;vertical-align:middle;text-align:left;background-repeat:repeat-x;$buttonCenterBGStyle">$elIconImg</td>'
				]);
                templates.set("countContainer",
				[
					'<div class="gig-counter gig-$buttonType-counter gig-counter-${rid} gig-counter-${showCounts}" id="$countId" style="display:none; ${countBgStyle};text-align:center;vertical-align:middle;">',
						'$count',
					'</div>'
				]
				);
                templates.set("count",
				[
					'<span class="$counterTextClass" id="$countId-value">$countValue</span>'
				]
				);
                templates.set("buttonCell",
				[
					'<td style="vertical-align:$cellValign; white-space:nowrap;zoom:1;"><div class="$className">$buttonContainer</div></td>'
				]
				);
                templates.set("buttonWithoutCell",
				[
					'<div class="$className">$buttonContainer</div>'
				]
				);
                templates.set("buttonRow",
				[
					'<tr><td style="position:relative;zoom:1;"><div class="$className">$buttonContainer</div></td></tr>'
				]
				);
                templates.set("buttonWithoutCount",
				[
					'$button'
				]
				);
                templates.set("buttonWithCountTop",
				[
					'<table cellspacing="0" cellpadding="0" role="presentation">',
						'<tr><td style="text-align:center" align="center">$countContainer</td></tr>',
						'<tr><td class="gig-button-td"  style="text-align:center">$button</td></tr>',
					'</table>'
				]
				);
                templates.set("buttonWithCountRight",
				[
					'<table cellspacing="0" cellpadding="0" role="presentation"><tr>',
						'<td class="gig-button-td">$button</td>',
						'<td>$countContainer</td>',
					'</tr></table>'
				]
				);
                templates.set('image',
				[
					'<img id="$imgId" src="$src" alt="$alttext" focusable="false" />'
				]
				);
                templates.set('imageWithSize',
				[
					'<img id="$imgId" src="$src" width="$size" height="$size" alt="$alttext" tabindex="$tabindex" focusable="false" />'
				]);
                templates.set('facebookLikeButton',
				[
					'<div id="$containerID"><div class="fb-like" style="zoom:1" data-width="$width" data-send="false" data-show-faces="false" data-ref="$ref" data-href="$href" data-layout="$layout" data-action="$action" data-gig-btnid="$id" data-colorscheme="$colorscheme" data-font="$font"></div></div>'
				]);
                templates.set('facebookSendButton',
				[
					'<div id="$containerID"><div class="fb-send" data-ref="$ref" data-href="$href" data-colorscheme="$colorscheme" data-font="$font"></div></div>'
				]);
                templates.set('facebookShareButton',
                [
                   '<div id="$containerID"><div class="fb-share-button" data-ref="$ref" data-href="$href" data-type="$layout" data-width="$width"></div></div>'
                ]);
                templates.set('facebookSubscribeButton',
				[
					'<div id="$containerID"><div class="fb-subscribe" data-height="80" data-width="$width" data-show-faces="false" data-href="$href" data-layout="$layout" data-gig-btnid="$id" data-colorscheme="$colorscheme" data-font="$font"></div></div>'
				]);
                templates.set('googlePlusOneButton',
				[
					'<div id="$containerID" style="line-height:1px;"><div class="g-plusone" data-href="$href" data-size="$size" data-callback="$callback" data-annotation="$annotation" data-width="$width"></div></div>'
				]);
                templates.set('googlePlusShareButton',
				[
					'<div id="$containerID" style="line-height:1px;"><div class="g-plus" data-action="share" data-href="$href" data-onendinteraction="$callback" data-annotation="$annotation" data-height="$height" data-width="$width"></div></div>'
				]);
                templates.set('twitterTweetButton',
				[
					'<div id="$containerID" style="min-width:${width}px"><a href="$twitterHref" class="$twitterClass" data-url="$href" data-via="$via" data-size="$size" ',
						'data-count="none" data-text="$defaultText" data-lang="$lang" data-related="$related" ></a></div>'
				]);
                templates.set('pinterestPinitButton',
				[
					'<div id="$containerID"><a data-pin-do="buttonPin" href="http://pinterest.com/pin/create/button/?url=${href}&media=${thumbnailURL}&description=${description}" class="pin-it-buttona" count-layout="${count}" ${shape} ><img border="0" src="${imgName}" title="Pin It" focusable="false" /></a></div>'
				]);
                templates.set('moshareSmsButton',
				[
					'<a href="http://www.mogreet.com/moshare/it/" class="${moshareClass}" data-title="${title}" data-message="${description}" data-thumbnail="${thumbnailURL}"></a>'
				]);
                templates.set('getglueButton',
				[
					'<a class="glue-checkin-widget" href="$href" data-type="$type" data-message="$message" data-title="$title" data-callback="$callbackId"></a>'
				]);
                templates.set('hatenaBookmarkButton',
               [
                   '<div id="$containerID">',
                   '<a href="$protocol//b.hatena.ne.jp/entry/$href"',
                        ' class="hatena-bookmark-button"',
                        ' data-hatena-bookmark-title="$title"',
                        ' data-hatena-bookmark-layout="$layout"',
                        ' data-hatena-bookmark-lang="$lang" title="ブックマーク">',
                        '<img src="$protocol//b.st-hatena.com/images/entry-button/button-only@2x.png" alt="" width="20" height="20" style="border: none;" />',
                   '</a>',
                   '</div>'
               ]);


                templates.set('lineitShareButton',
              [
                  '<div id="$containerID">',
                  '     <a href="http://line.naver.jp/R/msg/text/?$title%0a$href">',
                  '         <img src="$imgUrl" width="$w" height="$h" alt="$alt" focusable="false" />',
                  '     </a>',
                  '</div>'
              ]);



                return templates;
            },
            defaultCss: [
				'.gig-bar-container *, div.gig-reactions-container, .gig-reactions-container span, .gig-reactions-container a:hover, .gig-reactions-container a:visited, .gig-reactions-container a:link, .gig-reactions-container a:active{',
				'font-size:12px;border:none; padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;',
				'font-family:arial;font-size:10px;color:#4D4D4D;background:none}',
				'table.gig-reactions-container{border-collapse:separate;}',
				'div.gig-button-container {padding:0 5px 0 0; display:inline-block;vertical-align:top;margin-bottom:5px;} ',
				'div.gig-button-container-vertical {padding:0 0 5px 0}',
                '[gigid="showShareBarUI"] .gig-button-container-twitter-tweet > div {display: inline;}',

				'div.gig-button {cursor:pointer;}',
				'div.gig-button-disabled {cursor:default;}',
				'div.gig-counter{margin:0 auto;position:relative;zoom:1;}',
				'span.gig-counter-text{display:block;position:relative;font-weight:bold;zoom:1}',


				'td.gig-button-td{vertical-align:middle}',

				'*.gig-bar-container img {display:block}',
				'div.gig-button-container-twitter-tweet iframe,div.gig-button-container-twitter-hashtag iframe,div.gig-button-container-twitter-mention iframe {display:block}',

                'div.gig-button-container-pinterest-pinit {height:20px;}',
                'div.gig-button-container-pinterest-pinit a {cursor: pointer;}',
                'div.gig-button-container-pinterest-pinit.gig-button-container-count-right {width:80px;}',
                'div.gig-button-container-pinterest-pinit.gig-button-container-count-top.gig-button-container-vertical {position:relative;height:50px;}',
                'div.gig-button-container-pinterest-pinit.gig-button-container-count-top.gig-button-container-vertical > div {position:absolute;bottom:2px;}',
				'div.gig-counter-top {margin-bottom: 1px;}',
				'div.gig-counter-right {margin-left: 1px;}',
				'div.gig-button-count-top table {margin:0 auto;text-align:center;}',

                //'div.gig-button-container-hatena-bookmark {position:relative; top:3px;}',

				'div.gig-bar-button-icon {position:absolute;padding-top:1px;}',
				'span.gig-bar-button-text {padding-left:19px;white-space:nowrap;zoom:1;}',
					'a.gig-bar-button,a:hover.gig-bar-button,a:link.gig-bar-button,a:active.gig-bar-button,a:visited.gig-bar-button {',
						'white-space:nowrap;line-height: 18px;position:relative;border-radius: 3px; color:#4d4d4d;cursor:pointer;',
						'font-size: 11px;padding: 0 5px; border: 1px solid #C5C7C7;display:inline-block;zoom:1;vertical-align:middle; text-align:center;',
						'}',
					'a.gig-bar-button,a:link.gig-bar-button,a:active.gig-bar-button,a:visited.gig-bar-button {',
						'background: #FFFFFF; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#EAEBEB");',
						'background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#EAEBEB));',
						'background: -moz-linear-gradient(top,  #FFFFFF,  #EAEBEB)}',
					'a:hover.gig-bar-button, a.gig-bar-button-down,a:link.gig-bar-button-down,a:active.gig-bar-button-down,a:visited.gig-bar-button-down {',
						'background: #EAEBEB; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#EAEBEB", endColorstr="#FFFFFF");',
						'background: -webkit-gradient(linear, left top, left bottom, from(#EAEBEB), to(#FFFFFF));',
						'background: -moz-linear-gradient(top,  #EAEBEB,  #FFFFFF)}'
            ],
            nonMobileCss: [
                'div.gig-button-text {white-space:nowrap;font-size:11px;color:#333333; padding: 0 3px 0 3px;}',
			    'span.gig-counter-text-right{left:1px;font-size:11px;line-height:20px;}',
                'span.gig-counter-text-top{top:-2px;font-size:14px}',
            	'div.gig-button-container-facebook-like-count-right {height:20px}',
				'div.gig-button-container-facebook-like-count-top {height:62px}',
				'div.gig-button-container-facebook-send {height:20px}'
            ],
            mobileCss: [
                '.gig-bar-container * {font-size: 16px;-webkit-text-size-adjust:none; -webkit-touch-callout: none; -webkit-user-select: none;font-family:sans-serif}',
                '.gig-bar-container {overflow:auto;}',
                'div.gig-button-text {white-space:nowrap;font-size:15px;color:#333333; padding: 0 3px 0 3px;}',
			    'span.gig-counter-text-right{left:1px;font-size:14px;line-height:35px;}',
                'span.gig-counter-text-top{top:-2px;font-size:18px}'
            ]

        }

        pluginScope.providerSupportsCounter = function (provider) {
            switch (provider) {
                case 'digg':
                case 'share':
                    //return (document.location.protocol == 'http:')
                case 'stumbleupon':
                case 'facebook':
                case 'comments':
                case 'facebook-like':
                case 'facebook-send':
                case 'facebook-subscribe':
                case 'facebook-share':
                case 'google-plusone':
                case 'googleplus-share':
                case 'moshare-sms':
                case 'pinterest':
                case 'pinterest-pinit':
                case 'linkedin':
                case 'getglue':
                case 'hatena-bookmark':
                case 'vkontakte':
                    return true;
            }
            return false;
        }
        var getButtonConstructor = function () {
            return function (btn) {
                this.button = btn; this.item = this.getItem();
            }
        }

        pluginScope.ButtonItem = {
            generic: getButtonConstructor(),
            'facebook-subscribe': getButtonConstructor(),
            'facebook-send': getButtonConstructor(),
            'facebook-share': getButtonConstructor(),
            'facebook-like': getButtonConstructor(),
            'google-plusone': getButtonConstructor(),
            'googleplus-share': getButtonConstructor(),
            'googleplus-interactive': getButtonConstructor(),
            'moshare-sms': getButtonConstructor(),
            'getglue': getButtonConstructor(),
            'twitter-tweet': getButtonConstructor(),
            'twitter-hashtag': getButtonConstructor(),
            'twitter-mention': getButtonConstructor(),
            'comments': getButtonConstructor(),
            'foursquare': getButtonConstructor(),
            'foursquare-save': getButtonConstructor(),
            'pinterest-pinit': getButtonConstructor(),
            'kindle': getButtonConstructor(),
            'hatena-bookmark': getButtonConstructor(),
            'lineit': getButtonConstructor()
        }
        pluginScope.ButtonItem.generic.prototype.getItem = function () {
            var b = this.button;
            var buttonSpriteRenderer = b.plugin.spriteRenderer.button;
            var iconSpriteRenderer = b.plugin.spriteRenderer.icons;

            var item = window.gigya.utils.object.clone(b.oButton);
            item.onClick = window.gigya.utils.DOM.attributeEncode(b.getRefString() + '.onClick()');

            var bi = window.gigya.utils.object.clone(b.plugin.buttonImages);

            if (b.noButtonBorders) bi = { countBGImg: bi.countBGImg }; //icon only means no button images (except for count)

            item.buttonLeftImg = bi['buttonLeftImg' + b.state];
            item.buttonCenterBGImg = bi['buttonCenterBGImg' + b.state];
            item.buttonRightImg = bi['buttonRightImg' + b.state];

            if (bi.countBGImg) {
                item.countBGImg = bi.countBGImg;
                item.countBgStyle = 'background-image:url(\'$countBGImg\');background-repeat:no-repeat;';
            } else {
                item.countBgStyle = b.plugin.spriteRenderer.count.getStyleString('default');
            }
            item.count = '';

            item.iconImg = item.iconImgUp ? item.iconImgUp : item.defaultIconImgUp;

            var iconName = b.id.split('-')[0];
            item.elButtonLeftImg = !b.noButtonBorders ? b.getButtonImageHTML('left-up', 'buttonLeftImgUp', 'left', buttonSpriteRenderer, bi, undefined, '', -1) : '';
            item.elButtonRightImg = !b.noButtonBorders ? b.getButtonImageHTML('right-up', 'buttonRightImgUp', 'right', buttonSpriteRenderer, bi, undefined, '', -1) : '';
            item.elIconImg = b.getButtonImageHTML(iconName, 'iconImgUp', 'icon', iconSpriteRenderer, item, b.iconSize, b.labelText ? b.labelText : '', 0);
            item.iconTD = b.plugin.templates.get("iconTD");

            if (!item.buttonCenterBGImg) item.buttonCenterBGImg = '';
            if (!item.countCenterBGImg) item.countCenterBGImg = '';

            if (item.buttonCenterBGImg == '') {
                item.buttonCenterBGStyle = '';
            } else {
                item.buttonCenterBGStyle = 'background-image:url(\'' + item.buttonCenterBGImg + '\')';
            }

            if (b.labelText && b.labelText != '') {
                item.text = b.labelText;
                item.textTD = b.plugin.templates.get("textTD");
            } else {
                item.text = '';
                item.textTD = '';
            }

            if (!item.tooltip) item.tooltip = '';

            item.buttonType = b.plugin._i.buttonsType;

            item.onMouseOver = b.getRefString() + '.changeState(\'over\')';
            item.onMouseOut = b.getRefString() + '.changeState(\'up\')';

            item.button = b.plugin.templates.get("button");
            item.countContainer = b.plugin.templates.get("countContainer");
            item.showCounts = b.showCounts;
            item.count = b.plugin.templates.get("count");
            item.countId = '$id-count';
            item.countValue = '';
            item.cellValign = 'bottom';

            var pluginShowCounts = b.plugin._p.showCounts;
            if (pluginShowCounts) pluginShowCounts = pluginShowCounts.toLowerCase();
            if (!pluginShowCounts) pluginShowCounts = 'right';

            if (window.gigya.utils.validation.isExplicitTrue((b.plugin._p.iconsOnly || b.noButtonBorders) && pluginShowCounts == 'right')) {
                item.cellValign = 'middle';
            }


            switch (b.showCounts) {
                case 'right':
                    item.counterTextClass = 'gig-counter-text gig-$buttonType-counter-text gig-counter-text-right gig-$buttonType-counter-text-right';
                    item.buttonContainer = b.plugin.templates.get("buttonWithCountRight");
                    break;
                case 'top':
                    item.counterTextClass = 'gig-counter-text gig-$buttonType-counter-text gig-counter-text-top gig-$buttonType-counter-text-top';
                    item.buttonContainer = b.plugin.templates.get("buttonWithCountTop");
                    break;
                case 'none':
                default:
                    item.buttonContainer = b.plugin.templates.get("buttonWithoutCount");
            }
            if (b.plugin.usingCountTemplate) {
                item.counterTextClass = '';
            }
            return item;
        }
        pluginScope.ButtonItem['facebook-like'].prototype = {
            getItem: function () {
                var b = this.button;

                var layout = (b.showCounts == 'none' ? 'standard' : (b.showCounts == 'top' ? 'box_count' : 'button_count')); //default is 'right
                var UUID = window.gigya._.apiAdapter.getTokenParam(b.plugin._c.APIKey, 'UUID');
                var oRef = {
                    uu: UUID,
                    s: b.plugin._p.source,
                    p: b.id
                }
                var item = {
                    id: b.containerID + (new Date().getTime()),
                    buttonType: 'share',
                    className: this.className + ' ' + 'gig-facebookLikeButton-' + layout,
                    buttonContainer: b.plugin.templates.get("facebookLikeButton"),
                    layout: b.oButton.layout || layout,
                    action: (b.oButton.action ? b.oButton.action : 'like'),
                    colorscheme: (b.oButton.colorscheme ? b.oButton.colorscheme : ''),
                    font: (b.oButton.font ? b.oButton.font : ''),
                    containerID: b.containerID,
                    ref: window.gigya.utils.keyValue.serialize(oRef, ':'),
                    width: (b.oButton.width ? b.oButton.width : 55),
                    href: b.getShareURL()
                }
                if (b.id == 'facebook-send') {
                    item.buttonContainer = b.plugin.templates.get("facebookSendButton");
                } else if (b.id == 'facebook-subscribe') {
                    item.buttonContainer = b.plugin.templates.get("facebookSubscribeButton");
                } else if (b.id == 'facebook-share') {

                    item.layout = (b.showCounts == 'none' ? 'button' : (b.showCounts == 'top' ? 'box_count' : 'button_count')); //default is 'right
                    item.buttonContainer = b.plugin.templates.get('facebookShareButton');
                }

                this.id = item.id;
                return item;
            },
            render: function () {
                var b = this.button;
                var id = this.id;
                if (!window.gigya.external.facebook.initializedTime) window.gigya.external.facebook.load(true);
                var langCode = window.gigya.thisScript.lang.full.replace('-', '_');
                window.gigya.utils.script.load(window.gigya.localInfo.protocol + '://connect.facebook.net/' + langCode + '/sdk.js', null, function () {
                    if (typeof FB != 'undefined') {
                        if (FB.XFBML && FB.XFBML.parse) {
                            var container = document.getElementById(b.containerID);
                            if (container) { //trying to force-parse if FB failed to parse when inititalized
                                window.gigya.utils.functions.invokeOnPageLoad(function () {
                                    window.setTimeout(function () { if (container.firstChild.innerHTML == '') { FB.XFBML.parse(container) } }, 100);
                                })
                            }
                        }
                        if (FB.Event && FB.Event.subscribe && !(b.id == 'facebook-send' && pluginScope.addedFBSendEvent)) {
                            if (b.id == 'facebook-send') pluginScope.addedFBSendEvent = true;
                            FB.Event.subscribe((b.id == 'facebook-send' ? 'message.send' : 'edge.create'), function (response, context) {
                                if (context.getAttribute('data-gig-btnid') == id || b.id == 'facebook-send') {
                                    var oEvent = {
                                        eventName: 'sendDone',
                                        providers: (b.plugin._p.facebookLikeButton && b.id == 'facebook-like') ? 'facebookLike' : b.id,
                                        userMessage: '',
                                        targetURL: response
                                    }
                                    window.gigya.events.dispatchForWidget(oEvent, b.plugin._p);
                                    b.plugin.reportShare(b.id, response);
                                }
                            });
                        }
                    }
                }, true);
            }
        }
        pluginScope.ButtonItem['facebook-send'] = pluginScope.ButtonItem['facebook-like'];
        pluginScope.ButtonItem['facebook-subscribe'] = pluginScope.ButtonItem['facebook-like'];
        pluginScope.ButtonItem['facebook-share'] = pluginScope.ButtonItem['facebook-like'];

        pluginScope.ButtonItem['google-plusone'].prototype = {
            getItem: function () {
                var plugin = this.button.plugin;
                var b = this.button;
                var item = {
                    buttonType: 'share',
                    buttonContainer: this.button.plugin.templates.get("googlePlusOneButton"),
                    count: (b.showCounts && b.showCounts != 'none'),
                    callback: 'gig-googlePlusOne-' + b.containerID,
                    size: b.oButton.size ? b.oButton.size : ((b.showCounts && b.showCounts == 'top') ? 'tall' : (plugin.isMobileUI ? 'standard' : 'medium')),
                    containerID: b.containerID,
                    annotation: b.oButton.annotation ? b.oButton.annotation : (b.showCounts == 'none' ? 'none' : 'bubble'),
                    width: b.oButton.width ? b.oButton.width : ''
                }
                window[item.callback] = function (e) {
                    if (e.state == 'on') {
                        var oEvent = {
                            eventName: 'sendDone',
                            providers: 'google-plusOne',
                            userMessage: '',
                            targetURL: e.href
                        }
                        window.gigya.events.dispatchForWidget(oEvent, plugin._p);
                        plugin.reportShare('google-plusOne', e.href);
                    }
                }
                return item;
            },
            render: function () {
                var b = this.button;
                window.___gcfg = {
                    lang: this.button.plugin._p.lang
                };
                window.gigya.utils.script.load('https://apis.google.com/js/plusone.js', null, function () {
                    if (typeof gapi != 'undefined' && gapi.plusone) gapi.plusone.go(b.containerID);
                }, true);
            }
        };
        pluginScope.ButtonItem['googleplus-share'].prototype = {
            getItem: function () {
                var plugin = this.button.plugin;
                var b = this.button;
                var item = {
                    buttonType: 'share',
                    buttonContainer: this.button.plugin.templates.get("googlePlusShareButton"),
                    callback: 'gig-googlePlusOne-' + b.containerID,
                    containerID: b.containerID,
                    annotation: b.oButton.annotation ? b.oButton.annotation : (b.showCounts == 'none' ? 'none' : (b.showCounts == 'top' ? 'vertical-bubble' : 'bubble')),
                    width: b.oButton.width ? b.oButton.width : '',
                    height: b.oButton.height ? b.oButton.height : plugin.isMobileUI ? '24' : ''
                }
                window[item.callback] = function (e) {
                    if (e.type == 'confirm') {
                        var oEvent = {
                            eventName: 'sendDone',
                            providers: 'google-plusOne',
                            userMessage: '',
                            targetURL: e.href
                        }
                        window.gigya.events.dispatchForWidget(oEvent, plugin._p);
                        plugin.reportShare('googleplus-share', e.id);
                    }
                }
                return item;
            },
            render: function () {
                var b = this.button;
                window.___gcfg = {
                    lang: this.button.plugin._p.lang
                };
                window.gigya.utils.script.load('https://apis.google.com/js/plusone.js', null, function () {
                    if (typeof gapi != 'undefined' && gapi.plus) gapi.plus.go(b.containerID);
                }, true);
            }
        };

        pluginScope.ButtonItem['googleplus-interactive'].prototype = {
            getItem: pluginScope.ButtonItem.generic.prototype.getItem,
            render: function () {
                var This = this;
                var b = this.button;
                var el = b.plugin.$(b.containerID);
                el.removeAttribute('onClick');

                window.___gcfg = {
                    lang: this.button.plugin._p.lang
                };

                window.gigya.utils.script.load('https://apis.google.com/js/client:plusone.js', null, function () {
                    var options = {
                        calltoactionlabel: b.oButton.callToActionLabel,
                        calltoactionurl: b.oButton.callToActionURL,
                        contentdeeplinkid: b.oButton.contentDeepLinkID,
                        clientid: b.oButton.clientID,
                        contenturl: b.oButton.contentURL,
                        calltoactiondeeplinkid: b.oButton.callToActionDeepLinkID,
                        cookiepolicy: b.oButton.cookiePolicy,
                        prefilltext: b.oButton.preFillText
                    }

                    if (typeof gapi != 'undefined' && gapi.interactivepost)
                        gapi.interactivepost.render(b.containerID, options);
                }, true);
            }
        }

        pluginScope.ButtonItem['moshare-sms'].prototype = {
            getItem: function () {
                var b = this.button;
                var ua = b.getUserAction();
                var moshareClass;
                if (b.showCounts == 'right') {
                    if (b.oButton.iconOnly || window.gigya.utils.validation.isExplicitTrue(b.plugin._p.iconsOnly)) {
                        moshareClass = 'moshare-chicklet-hor';
                    } else {
                        moshareClass = 'moshare-button-hor';
                    }
                } else {
                    if (b.oButton.iconOnly) {
                        moshareClass = 'moshare-button-mini';
                    } else {
                        moshareClass = 'moshare-button';
                    }
                }

                var thumb = b.getThumbnailURL();
                var item = {
                    buttonType: 'share',
                    buttonContainer: b.plugin.templates.get("moshareSmsButton"),
                    moshareClass: moshareClass,
                    title: ua.title ? ua.title : '',
                    description: ua.description ? ua.description : '',
                    thumbnailURL: thumb ? thumb : ''
                }
                return item;
            },
            render: function () {
                if (window.gigya.localInfo.protocol !== 'https') // MoShare only support http
                    window.gigya.utils.script.load('http://d2c.bandcon.mogreet.com/moshare/embed/moshare.js');
            }
        }

        pluginScope.ButtonItem['getglue'].prototype = {
            getItem: function () {
                var This = this;
                var b = this.button;
                var ua = b.getUserAction();
                var item = {
                    buttonType: 'share',
                    buttonContainer: b.plugin.templates.get("getglueButton"),
                    title: ua.title ? ua.title : '',
                    message: ua.description ? ua.description : '',
                    type: b.showCounts == 'right' ? 'horizontal' : 'vertical',
                    callbackId: 'gig_getglue+' + (new Date()).getTime()
                }
                window[item.callbackId] = function (e) {
                    var oEvent = {
                        eventName: 'sendDone',
                        providers: 'getglue',
                        targetURL: This.item.href
                    }
                    window.gigya.events.dispatchForWidget(oEvent, b.plugin._p);
                    b.plugin.reportShare('getglue', This.item.href);
                }
                return item;
            },
            render: function () {
                window.gigya.utils.script.load(window.gigya.localInfo.protocol + '://widgets.getglue.com/checkin.js', null, function () {
                    if (window['getglue']) window['getglue'].loadWidgets();
                }, true);
            }
        }

        pluginScope.ButtonItem['twitter-tweet'].prototype = {
            getItem: function () {
                var b = this.button;
                var twitterClass;
                var twitterHref;
                switch (this.button.id) {
                    case 'twitter-mention': twitterClass = 'twitter-mention-button'; twitterHref = 'https://twitter.com/intent/tweet?screen_name=' + (b.oButton.mention != null ? b.oButton.mention : '&#160;'); break;
                    case 'twitter-hashtag': twitterClass = 'twitter-hashtag-button'; twitterHref = 'https://twitter.com/intent/tweet?button_hashtag=' + (b.oButton.hashtag != null ? b.oButton.hashtag : '&#160;'); break;
                    case 'twitter-tweet':
                    default:
                        twitterClass = 'twitter-share-button'; twitterHref = 'https://twitter.com/share'; break;
                }
                var uaTitle = b.getUserAction().title;
                
                // desktop/mobile minimum width
                var minWidth = (b.plugin.isMobileUI ? 80 : 55);

                var item = {
                    buttonType: 'share',
                    buttonContainer: b.plugin.templates.get("twitterTweetButton"),
                    twitterClass: twitterClass,
                    twitterHref: twitterHref,
                    containerID: b.containerID + '_tweet' + (new Date()).getTime(),
                    via: (b.oButton.via ? b.oButton.via : ''),
                    defaultText: b.oButton.defaultText ? b.oButton.defaultText : (uaTitle ? uaTitle : ''),
                    lang: (b.oButton.lang ? b.oButton.lang : b.plugin._p.lang),
                    related: (b.oButton.related ? b.oButton.related : ''),
                    size: b.plugin.isMobileUI ? 'large' : '',
                    width: b.oButton.width || minWidth,
                }
                this.containerID = item.containerID;
                return item;
            },
            render: function () {
                var plugin = this.button.plugin;
                var This = this;
                var container = document.getElementById(this.containerID);
                var fnAddEvent = function () {
                    if (!container) {
                        return;
                    }
                    try { twttr.widgets.load(container); } catch (ex) { }
                    twttr.events.bind('tweet', function (e) {
                        if (e.target.parentNode.id == This.containerID) {
                            var oEvent = {
                                eventName: 'sendDone',
                                providers: This.button.id,
                                userMessage: '',
                                targetURL: This.item.href
                            }
                            window.gigya.events.dispatchForWidget(oEvent, plugin._p);
                            plugin.reportShare(This.button.id, This.item.href);
                        }
                    });
                }
                window.gigya.utils.script.load(window.gigya.localInfo.protocol + '://platform.twitter.com/widgets.js', null, fnAddEvent, true);
            }
        }
        pluginScope.ButtonItem['twitter-hashtag'] = pluginScope.ButtonItem['twitter-tweet'];
        pluginScope.ButtonItem['twitter-mention'] = pluginScope.ButtonItem['twitter-tweet'];
        pluginScope.ButtonItem['comments'].prototype = {
            getItem: pluginScope.ButtonItem.generic.prototype.getItem,
            render: function () {
                var This = this;
                var params = {
                    callback: function (res) {
                        if (res.errorCode == 0 && This.button.showCounts != 'none' && res.streamInfo && res.streamInfo.commentCount && res.streamInfo.commentCount > 0) This.button.updateCount(res.streamInfo.commentCount);
                    },
                    categoryID: this.button.oButton.categoryID,
                    streamID: this.button.oButton.streamID,
                    cacheTimeout: this.button.plugin._p.shareCountCacheTimeout
                }
                window.gigya.services.comments.getStreamInfo(this.button.plugin._c, params);
            }
        }

        pluginScope.ButtonItem['foursquare'].prototype = {
            getItem: pluginScope.ButtonItem.generic.prototype.getItem,
            render: function () {
                var This = this;
                var b = this.button;
                var scriptURL = 'http://platform.foursquare.com/js/widgets.js';
                if (window.gigya.localInfo.protocol == 'https') {
                    window.___fourSq = { secure: true };
                    scriptURL = 'https://platform-s.foursquare.com/js/widgets.js';
                }
                window.gigya.utils.script.load(scriptURL, null, function () {
                    var widget = new fourSq.widget.SaveTo({ vid: b.oButton.vid, variant: b.oButton.variant, hideTooltip: b.oButton.hideTooltip });
                    widget.bind('added', function () {
                        var oEvent = {
                            eventName: 'sendDone',
                            providers: b.id,
                            userMessage: '',
                            targetURL: ''
                        }
                        window.gigya.events.dispatchForWidget(oEvent, b.plugin._p);
                        b.plugin.reportShare(b.id, '');
                    });
                    widget.attach(document.getElementById(b.containerID));
                }, true);
            }
        }
        pluginScope.ButtonItem['foursquare-save'].prototype = {
            getItem: function () {
                var item = {
                    buttonType: 'share',
                    buttonContainer: '<div id="' + this.button.containerID + '"></div>',
                    count: 'none'
                }
                return item;
            },
            render: function () {
                var This = this;
                var b = this.button;
                var scriptURL = 'http://platform.foursquare.com/js/widgets.js';
                if (window.gigya.localInfo.protocol == 'https') {
                    window.___fourSq = { secure: true };
                    scriptURL = 'https://platform-s.foursquare.com/js/widgets.js';
                }
                window.gigya.utils.script.load(scriptURL, null, function () {
                    var widget = new fourSq.widget.SaveTo({ vid: b.oButton.vid, variant: b.oButton.variant, hideTooltip: b.oButton.hideTooltip });
                    widget.bind('open', function () {
                        window.gigya.events.dispatchForWidget({ eventName: 'shareButtonClicked', shareItem: b.oButton }, b.plugin._p);
                    });
                    widget.bind('added', function () {
                        var oEvent = {
                            eventName: 'sendDone',
                            providers: b.id,
                            userMessage: '',
                            targetURL: ''
                        }
                        window.gigya.events.dispatchForWidget(oEvent, b.plugin._p);
                        b.plugin.reportShare(b.id, '');
                    });
                    widget.replace(document.getElementById(b.containerID));
                }, true);
            }
        }

        pluginScope.ButtonItem['pinterest-pinit'].prototype = {
            getItem: function () {

                var b = this.button;
                var ua = b.getUserAction();
                var shape = b.oButton.shape ? b.oButton.shape : '';
                var img = window.gigya.localInfo.protocol + ':' + ((shape == 'round') ? '//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_16.png' : '//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png'); // prevent icons blinks

                var item = {
                    buttonType: 'share',
                    buttonContainer: b.plugin.templates.get("pinterestPinitButton"),
                    count: (b.showCounts == 'top' ? 'vertical' : (b.showCounts == 'right' ? 'horizontal' : 'none')),
                    description: window.gigya.utils.URL.URLEncode(ua.description),
                    href: window.gigya.utils.URL.URLEncode(b.getShareURL()),
                    containerID: b.containerID,
                    lang: (b.oButton.lang ? b.oButton.lang : b.plugin._p.lang),
                    related: (b.oButton.related ? b.oButton.related : ''),
                    shape: (shape == 'round' ? 'data-pin-round="true"' : ''),
                    imgName: img
                };

                var media = b.getThumbnailURL();
                if (media) {
                    item.thumbnailURL = window.gigya.utils.URL.URLEncode(media);
                } else {
                    item.thumbnailURL = window.gigya.utils.URL.URLEncode(item.href);
                }
                this.containerID = item.containerID;
                return item;
            },
            render: function () {
                window.gigya.utils.script.load(window.gigya.localInfo.protocol + '://assets.pinterest.com/js/pinit.js');
            }
        }

        pluginScope.ButtonItem['kindle'].prototype = {
            getItem: pluginScope.ButtonItem.generic.prototype.getItem,
            render: function () {
                var b = this.button.oButton;
                var This = this;
                var elButton = document.getElementById(this.button.containerID);
                if (elButton) {
                    window.gigya.utils.DOM.addClassToElement(elButton, 'kindleWidget');
                    window.gigya.utils.DOM.addEventListener(elButton, 'click', function () {
                        This.button.plugin.reportShare('kindle', '');
                    })
                    window.gigya.utils.script.load('https://d1xnn692s7u6t6.cloudfront.net/widget.js', null, function () {
                        if (window.$SendToKindle && window.$SendToKindle.Widget) {
                            var oKindle = window.gigya.utils.object.removeUndefined({
                                content: b.content,
                                title: b.title,
                                author: b.author,
                                published: b.published,
                                exclude: b.exclude,
                                pagination: b.pagination,
                                asin: b.asin
                            });
                            $SendToKindle.Widget.init(oKindle);

                            // This script will look for a container with class `kindleWidget` and override any ID with a new random ID.
                            // It does this only because it need the element to have an ID, any ID, and it's not smart enough to check if it has one first.
                            // We just put our original ID back and everything works fine.
                            elButton.id = This.button.containerID;
                        }
                    }, true);
                }
            }
        }

        pluginScope.ButtonItem['hatena-bookmark'].prototype = {
            getItem: function () {
                var b = this.button;
                var layout = (b.showCounts == 'none' ? 'standard-noballoon' : (b.showCounts == 'top' ? 'vertical-balloon' : 'standard-balloon')); //default is 'right
                var iconOnly = window.gigya.utils.validation.isExplicitTrue(b.plugin._p.iconsOnly);
                if (b.oButton.iconOnly != null) iconOnly = window.gigya.utils.validation.isExplicitTrue(b.oButton.iconOnly);
                if (iconOnly)
                    layout = (b.showCounts == 'none' ? 'simple' : (b.showCounts == 'top' ? 'simple' : 'simple-balloon'));

                var inst = b.pluginInstance;

                // only supported languages, the text on the button dissapere whene no supported language supplied.
                var lang = 'ja';
                if (b.oButton.lang == 'en')
                    lang = 'en';

                var UUID = window.gigya._.apiAdapter.getTokenParam(b.plugin._c.APIKey, 'UUID');
                var oRef = {
                    uu: UUID,
                    s: b.plugin._p.source,
                    p: b.id
                }

                var item = {
                    protocol: window.gigya.localInfo.protocol,
                    id: b.containerID + (new Date().getTime()),
                    buttonType: 'share',
                    className: this.className + ' ' + 'gig-hatenaBookmarkButton-' + layout,
                    buttonContainer: b.plugin.templates.get("hatenaBookmarkButton"),
                    layout: layout,
                    containerID: b.containerID,
                    ref: window.gigya.utils.keyValue.serialize(oRef, ':'),
                    lang: lang,
                    title: b.getUserAction().title

                }
                this.id = item.id;
                return item;
            },
            render: function () {
                if (window.gigya.localInfo.protocol !== 'https') // MoShare only support http
                    window.gigya.utils.script.load(window.gigya.localInfo.protocol + '://b.hatena.ne.jp/js/bookmark_button.js');
            }
        }

        pluginScope.ButtonItem['lineit'].prototype = {
            constant: {  //copied from line js
                LINE_BASE_URL: '//line.me/R/msg/text/',
                IMG_BASE_URL: '//media.line.me/img/button/',
                ALT: {ja: 'LINE\u3067\u9001\u308b',
                    en: 'LINE it!',
                    'zh-hans': 'LINE it!',
                    'zh-hant': 'LINE it!'
                },
                // width, height
                IMG_SIZE: {ja: {a:[82,20], b:[20,20], c:[30,30], d:[40,40], e:[36,60]},
                    en: {a:[78,20], b:[20,20], c:[30,30], d:[40,40], e:[36,60]},
                    'zh-hans': {a:[84,20], b:[20,20], c:[30,30], d:[40,40], e:[36,60]},
                    'zh-hant': {a:[84,20], b:[20,20], c:[30,30], d:[40,40], e:[36,60]}}
            },
            getItem: function () {
                var b = this.button;
                var ua = b.getUserAction();
                var C = this.constant;

                var lang = b.plugin._p.lang;
                if (lang == 'zh-hk' || lang == 'zh-tw') {
                    lang = 'zh-hans';
                } else if (lang != 'ja' && lang != 'en') {
                    lang = 'en';
                }

                var type = 'a';
                var size = C.IMG_SIZE[lang][type];
                var imgUrl = [window.gigya.localInfo.protocol, ':', C.IMG_BASE_URL,
                        lang, '/',
                        size[0], 'x', size[1], '.png'].join('');

                var item = {
                    id: b.containerID + (new Date().getTime()),
                    buttonType: 'share',
                    className: this.className + ' ' + 'gig-lineitShareButton',
                    href: window.gigya.utils.URL.URLEncode(b.getShareURL()),
                    title: window.gigya.utils.URL.URLEncode(ua.title || ''),
                    buttonContainer: b.plugin.templates.get("lineitShareButton"),
                    containerID: b.containerID,
                    imgUrl: imgUrl,
                    alt: C.ALT[lang],
                    w: size[0],
                    h: size[1]
                }

                this.id = item.id;
                return item;
            },
            render: function () {

            }
        }

        pluginScope.Button = function (oButton, index, type, pluginInstance) {
            this.oButton = oButton;
            this.index = index;
            this.type = type;
            this.pluginInstance = pluginInstance;
            this.containerID = pluginInstance._p.containerID + '-reaction' + index;
            this.noButtonBorders = window.gigya.utils.validation.isExplicitTrue(pluginInstance._p.noButtonBorders);
            if (this.oButton.noButtonBorders != null) this.noButtonBorders = window.gigya.utils.validation.isExplicitTrue(this.oButton.noButtonBorders);

            if (window.gigya.utils.validation.isExplicitFalse(oButton.enableCount)) {
                this.showCounts = 'none';
            }
            if (!this.showCounts) this.showCounts = pluginInstance._p.showCounts;
            if (this.showCounts) this.showCounts = this.showCounts.toLowerCase();
            if (type == 'share') {
                var iconOnly = window.gigya.utils.validation.isExplicitTrue(pluginInstance._p.iconsOnly);
                if (this.oButton.iconOnly != null) iconOnly = window.gigya.utils.validation.isExplicitTrue(this.oButton.iconOnly);
                if (iconOnly) this.noButtonBorders = true;
                var sProvider = this.oButton.provider.split(' ').join('');
                var oProvider = window.gigya.services.socialize._getProviderByName(sProvider, pluginInstance.bookmarkSitesArray);
                if (oProvider && !iconOnly) {
                    this.labelText = oProvider.displayName;
                } else {
                    this.labelText = '';
                }
                this.id = this.oButton.provider.toLowerCase().split(' ').join('');
                if (this.id == 'share') { //preload simpleShare
                    window.gigya.utils.script.load(window.gigya._.getCdnResource('/js/gigya.services.socialize.plugins.simpleshare.min.js'), null, null, true);
                }
                if (!this.showCounts) {
                    this.showCounts = 'right';
                }
                if (!pluginScope.providerSupportsCounter(this.id)) {
                    this.showCounts = 'none';
                }
            }
            if (type == 'reaction') {
                if (!this.showCounts) {
                    this.showCounts = 'none';
                }
                //if (!this.iconOnly) this.labelText = oButton.text;
                this.labelText = oButton.text;
                this.id = oButton.ID;
                if (!this.id) this.id = this.labelText;
            }

            this.plugin = pluginInstance;
            if (!this.plugin.buttonInstances) this.plugin.buttonInstances = {};
            this.plugin.buttonInstances[this.containerID] = this;
        }
        pluginScope.Button.prototype = {
            $: function (s) { return document.getElementById(s) },
            getRefString: function () {
                return this.plugin.getInstanceRefString() + '.buttonInstances[\'' + this.containerID + '\']';
            },
            state: 'Up',
            onClick: function () {
                if (this.type == 'share') {
                    this.plugin.onShare(this);
                }
                if (this.type == 'reaction') {
                    if (this.state == 'Down') {
                        if (window.gigya.utils.validation.isExplicitFalse(this.plugin._p.cancelReactions)) return;
                        if (window.gigya.utils.validation.isExplicitFalse(this.plugin._p.multipleReactions)) {
                            //enable all other button
                            var buttons = this.plugin.buttonInstances;
                            for (var btnName in buttons) {
                                if (btnName != this.containerID) buttons[btnName].enable();
                            }
                        }
                        this.plugin.onUndoReaction(this);
                        this.unfixDown();
                    } else {
                        this.plugin.onReaction(this);
                        this.fixDown();
                    }
                }
            },
            updateImageElement: function (spriteID, buttonImageID, spritesRenderer, imagesObject) {
                spriteID = spriteID.toLowerCase();
                var arIDSegments = spriteID.split('-');
                var container = document.getElementById(this.containerID + '-' + arIDSegments[0] + '_img');
                if (!container) return;

                var URL = imagesObject[buttonImageID] ? imagesObject[buttonImageID] : this.plugin.buttonImages[buttonImageID];
                if (URL && container.nodeName.toLowerCase() == 'img') {
                    container.src = URL;
                } else if (spritesRenderer && spritesRenderer.spriteData[spriteID]) {
                    var spriteData = spritesRenderer.getSpriteData(spriteID);
                    if (container.style.backgroundImage != 'url("' + spritesRenderer.src + '")') container.style.backgroundImage = 'url("' + spritesRenderer.src + '")';
                    container.style.backgroundPosition = '-' + spriteData.x + 'px 0px';
                }
            },
            getButtonImageHTML: function (spriteID, buttonImageID, imageElid, spritesRenderer, imagesObject, size, alttext, tabindex) {
                spriteID = spriteID.toLowerCase();
                var arIDSegments = spriteID.split('-');
                var URL = imagesObject[buttonImageID] ? imagesObject[buttonImageID] : this.plugin.buttonImages[buttonImageID];
                if (URL) {
                    return this.plugin.getImageHTML(URL, this.containerID + '-' + imageElid + '_img', size, alttext, tabindex);
                } else if (spritesRenderer && spritesRenderer.spriteData[spriteID]) {
                    return spritesRenderer.getHTML(spriteID, null, null, this.containerID + '-' + arIDSegments[0] + '_img', alttext, tabindex);
                }
                return '';
            },
            getShareURL: function () {
                var url = this.oButton.url;
                if (!url && this.oButton.userAction) url = this.oButton.userAction.linkBack;
                if (!url && this.plugin._p[this.id + 'UserAction']) url = this.plugin._p[this.id + 'UserAction'].linkBack;
                if (!url && this.plugin._p.userAction) url = this.plugin._p.userAction.linkBack;
                if (!url) {
                    var metas = document.getElementsByTagName('meta');
                    for (var i = 0; i < metas.length; i++) {
                        if (metas[i].getAttribute('property') == 'og:url' && metas[i].getAttribute('content')) {
                            url = metas[i].getAttribute('content');
                            break;
                        }
                    }
                }
                if (!url) {
                    var linkTags = document.getElementsByTagName('link');
                    for (var i = 0; i < linkTags.length; i++) {
                        var linkTag = linkTags[i];
                        if (linkTag.getAttribute('rel') == 'canonical') {
                            url = linkTag.getAttribute('href');
                        }
                    }
                }
                if (!url) url = document.location.href;
                return url;
            },
            getUserAction: function () {
                var userAction;
                if (this.oButton.userAction) userAction = this.oButton.userAction;
                if (!userAction && this.plugin._p[this.id + 'UserAction']) userAction = this.plugin._p[this.id + 'UserAction'];
                if (!userAction && this.plugin._p.userAction) userAction = this.plugin._p.userAction;
                userAction = new window.gigya.socialize.UserAction(userAction);
                userAction.linkBack = this.getShareURL();
                return userAction
            },
            getThumbnailURL: function () {
                var ua = this.getUserAction();
                var mediaItems = ua['mediaItems'];
                var media;
                if (mediaItems) {
                    for (var u = 0; u < mediaItems.length; u++) {
                        var mediaItem = mediaItems[u];
                        if (mediaItem != null) {
                            if (mediaItem.type == 'image') {
                                media = mediaItem.src;
                                break;
                            }
                            if (mediaItem.type == 'video' || mediaItem.type == 'flash') {
                                media = mediaItem.previewImageURL;
                                break;
                            }
                        }
                    }
                }
                return media;
            },
            getHTML: function () {
                var c = pluginScope.ButtonItem[this.id];
                if (!c) c = pluginScope.ButtonItem.generic;
                var oButtonItem = new c(this);

                var item = oButtonItem.item;

                if (!item.href) item.href = window.gigya.utils.sanitize.sanitizeAttribute(this.getShareURL());
                if (oButtonItem.render) {
                    window.setTimeout(function () { oButtonItem.render() }, 300);
                }
                var layout = this.plugin._p.layout;
                if (layout) layout = layout.toLowerCase();
                item.className = 'gig-button-container gig-button-container-count-' + this.showCounts + ' gig-button-container-' + this.id + ' gig-button-container-' + this.id + '-count-' + this.showCounts + ' gig-$buttonType-button-container gig-button-container-horizontal';

                if (layout == 'vertical') {
                    item.className = 'gig-button-container gig-button-container-' + this.id + ' gig-button-container-count-' + this.showCounts + ' gig-$buttonType-button-container gig-button-container-vertical gig-$buttonType-button-container-vertical';
                }


                if (!item.cellValign) item.cellValign = 'bottom';

                if (!item.id) item.id = this.containerID;
                if (this.plugin._p.buttonTemplate || this.plugin._p.buttonWithCountTemplate) {
                    if (typeof item.buttonContainer == 'function') {
                        item.buttonContainer = item.buttonContainer(item);
                    }
                    item.buttonContainer = '<div id="$id" class="gig-button-up"  title="$tooltip" alt="$tooltip">' + item.buttonContainer + '</div>';
                }
                var template;
                if (layout == 'vertical') {
                    template = this.plugin.templates.get("buttonRow");
                } else if (this.plugin._p['wrap']) {
                    template = this.plugin.templates.get("buttonWithoutCell");
                } else {
                    template = this.plugin.templates.get("buttonCell");
                }
                return window.gigya.utils.templates.fill(template, item);
            },
            fixDown: function (dontSave) {
                if (window.gigya.utils.validation.isExplicitFalse(this.plugin._p.multipleReactions)) {
                    //disable all other button
                    var buttons = this.plugin.buttonInstances;
                    for (var btnName in buttons) {
                        if (btnName != this.containerID) buttons[btnName].disable();
                    }
                }
                this.changeState('down');
                this.disabled = true;
                if (!dontSave) this.saveState();
            },
            unfixDown: function () {
                this.disabled = false;
                this.changeState('up');
                this.saveState();
            },
            disable: function () {
                this.changeState('disabled');
                this.disabled = true;
            },
            enable: function () {
                this.disabled = false;
                this.changeState('up');
            },
            saveState: function () {
                var downState = (this.state == 'Down');
                this.plugin.setDownState(this.id, downState);
            },
            loadState: function () {
                var isDown = this.plugin.getDownState(this.id);
                if (isDown) this.fixDown(true);
            },
            changeState: function (state) {
                if (this.disabled) return;
                var state = state.substring(0, 1).toUpperCase() + state.substring(1);
                var oldState = this.state;
                this.state = state;
                var itemID = this.containerID;

                var elItem = this.$(itemID);

                elItem.className = elItem.className.replace('gig-button-' + oldState.toLowerCase(), 'gig-button-' + state.toLowerCase());
                var leftImg = this.$(itemID + '-left_img');
                var iconImgTD = this.$(itemID + '-icon');
                var textTD = this.$(itemID + '-text');
                var rightImg = this.$(itemID + '-right_img');

                var iconImg = this.$(itemID + '-icon_img');

                var bi = this.plugin.buttonImages;
                if (this.noButtonBorders) bi = { countBGImg: bi.countBGImg }; //icon only means no button images (except for count)

                var buttonSpriteRenderer = this.plugin.spriteRenderer.button;
                var iconSpriteRenderer = this.plugin.spriteRenderer.icons;
                if (!this.noButtonBorders) this.updateImageElement('left-' + state, 'buttonLeftImg' + state, buttonSpriteRenderer, bi);
                if (!this.noButtonBorders) this.updateImageElement('right-' + state, 'buttonRightImg' + state, buttonSpriteRenderer, bi);
                this.updateImageElement('icon-' + state, 'iconImg' + state, iconSpriteRenderer, this.oButton);

                if (!this.noButtonBorders && iconImgTD && bi['buttonCenterBGImg' + state]) iconImgTD.style.backgroundImage = 'url("' + bi['buttonCenterBGImg' + state] + '")';
                if (!this.noButtonBorders && textTD && bi['buttonCenterBGImg' + state]) textTD.style.backgroundImage = 'url("' + bi['buttonCenterBGImg' + state] + '")';

                //if (iconImg && this.oButton['iconImg' + state]) iconImg.src = this.oButton['iconImg' + state];

                if (elItem) {
                    var tooltip;
                    if (state == 'Disabled') {
                        elItem.style.cursor = 'default';
                        tooltip = this.oButton.disabledTooltip;
                    } else {
                        elItem.style.cursor = '';
                        tooltip = this.oButton.tooltip;
                    }
                    if (!tooltip) tooltip = '';
                    elItem.title = tooltip;
                    elItem.alt = tooltip;
                }
            },
            updateCount: function (countValue, dontUpdateOthers, percentOffset) {
                if (!percentOffset) percentOffset = 0;
                if (countValue == null) return;
                if (this.plugin._p.displayCountThreshold && countValue < this.plugin._p.displayCountThreshold) return;
                this.countValue = countValue;
                var countContainer = document.getElementById(this.containerID + '-count');
                var countValueContainer = document.getElementById(this.containerID + '-count-value');
                if (countContainer) countContainer.style.display = '';

                var usePercentage = (this.type == 'reaction' && this.pluginInstance._p.countType && this.pluginInstance._p.countType.toLowerCase() == 'percentage');
                if (usePercentage) {
                    if (this.pluginInstance._totalCount == 0) {
                        countValue = '0%';
                    } else {
                        countValue = Math.round(this.countValue * 100 / this.pluginInstance._totalCount) + percentOffset + '%'
                    }

                    if (!dontUpdateOthers) {
                        var buttons = this.plugin.buttonInstances;
                        for (var btnName in buttons) {
                            if (btnName != this.containerID) buttons[btnName].updateCount(buttons[btnName].countValue, true);
                        }
                    }
                } else {
                    if (countValue > 1000) {
                        countValue = Math.round(countValue / 1000) + 'K';
                    }
                }
                if (countValueContainer) countValueContainer.innerHTML = '' + countValue;
                if (usePercentage && !dontUpdateOthers) {
                    this.plugin.normalizePercents();
                }
            },
            hideCount: function (countValue) {
                var countContainer = document.getElementById(this.containerID + '-count');
                if (countContainer) countContainer.style.display = 'none';
            }
        }

        pluginScope.reactionsPlugin.prototype = {
            $: function (el) { return document.getElementById(el) },
            TEXT: function (textKey, replaceStr, withStr) {
                return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.socialize.plugins.reactions.js', textKey, this._p.lang, replaceStr, withStr);
            },
            getImageHTML: function (src, imgId, size, alttext, tabindex) {
                if (tabindex === undefined) {
                    tabindex = -1;
                }
                var template = this.templates.get("image");
                if (size) template = this.templates.get("imageWithSize");
                return window.gigya.utils.templates.fill(template, { src: src, imgId: imgId, size: size, alttext: alttext, tabindex: tabindex });
            },
            reportShare: function (provider, URL) {
                var sourceData = this._p.sourceData ? window.gigya.utils.object.clone(this._p.sourceData) : {};
                sourceData.provider = provider;
                sourceData.url = URL;
                window.gigya.reports.report('share', this._c.APIKey, this._c.cid, this._p.source, sourceData, { tags: this._p.tags });
            },
            getInstanceRefString: function () {
                return 'gigya.services.socialize.plugins.reactions.instances[\'' + this._elid + '\']';
            },
            loadDownStates: function () {
                var oDownStates = {};
                var sState = window.gigya.utils.localStorage.getItem('reactionState-down_' + this._barID);
                if (sState) {
                    var arStates = sState.split(',');
                    for (var i = 0; i < arStates.length; i++) {
                        oDownStates[arStates[i]] = true;
                    }
                    this._oDownStates = oDownStates;
                }
                this._oDownStates = oDownStates;
            },
            getDownState: function (key) {
                return this._oDownStates[key];
            },
            setDownState: function (key, isDown) {
                this._oDownStates[key] = isDown;
                var arStates = [];
                for (var stateKey in this._oDownStates) {
                    if (this._oDownStates[stateKey]) arStates.push(stateKey);
                }
                window.gigya.utils.localStorage.setItem('reactionState-down_' + this._barID, arStates.join(','));
            },
            draw: function () {
                var container = this.$(this._elid);
                var containerParent = container.parentNode;
                var parentID = this._elid + '_gig_containerParent';

                if (container.parentNode) {
                    if (container.parentNode.id) {
                        parentID = container.parentNode.id;
                    } else {
                        container.parentNode.id = parentID;
                    }
                }
                this.loadDownStates();

                if (this._p.layout == 'vertical') {
                    this._p['wrap'] = false;
                }

                if (this._p.cssPrefix || pluginScope.instances_size == 1) {
                    window.gigya.global.addCSS(pluginScope.defaultCss, this._p.cssPrefix);
                    if (this.isMobileUI) {
                        window.gigya.global.addCSS(pluginScope.mobileCss, this._p.cssPrefix);
                    } else {
                        window.gigya.global.addCSS(pluginScope.nonMobileCss, this._p.cssPrefix);
                    }
                }
                this.templates = pluginScope.createDefaultTemplates();

                if (this._p['buttonTemplate']) {
                    var buttonTemplate = this._p['buttonTemplate'];
                    this.templates.set('buttonWithoutCount', buttonTemplate);
                    if (this._i.buttonsType == 'reaction') {
                        this.templates.set('buttonWithCountTop', buttonTemplate);
                        this.templates.set('buttonWithCountRight', buttonTemplate);
                        if (typeof buttonTemplate == 'string' && buttonTemplate.indexOf('$count') != -1) this.usingCountTemplate = true;
                    }
                }
                if (this._p['buttonWithCountTemplate'] && this._i.buttonsType == 'share') {
                    var buttonWithCountTemplate = this._p['buttonWithCountTemplate'];
                    this.templates.set('buttonWithCountTop', buttonWithCountTemplate);
                    this.templates.set('buttonWithCountRight', buttonWithCountTemplate);
                    if (typeof buttonWithCountTemplate == 'string' && buttonWithCountTemplate.indexOf('$count') != -1) this.usingCountTemplate = true;
                }

                this.buttonImages = this._p['buttonImages'];

                var oSpriteGroups = {};

                if (!this.buttonImages) {

                    if (this._i.buttonsType == 'share') {

                        if (this.isMobileUI) {
                            var imgBase = window.gigya._.getCdnResource('/gs/i/shareBar/button/mobile/');
                            this.buttonImages = {
                                buttonCenterBGImgUp: imgBase + 'buttonCenterImgUp.png'
                            }
                            oSpriteGroups.button = { path: '/shareBar/button/mobile/button[left,right]Img[up].png', w: 5, h: 35 };
                        } else {
                            var imgBase = window.gigya._.getCdnResource('/gs/i/shareBar/button/');
                            this.buttonImages = {
                                buttonCenterBGImgUp: imgBase + 'buttonCenterImgUp.png',
                                buttonCenterBGImgOver: imgBase + 'buttonCenterImgUp.png'
                            }
                            oSpriteGroups.button = { path: '/shareBar/button/button[left,right]Img[up,over].png', w: 2, h: 20 };
                        }
                    } else {
                        oSpriteGroups.button = { path: '/shareBar/button/button[left,right]Img[up,over,down,disabled].png', w: 2, h: 20 };
                        var imgBase = window.gigya._.getCdnResource('/gs/i/reactions/default/');
                        this.buttonImages = {
                            buttonCenterBGImgUp: imgBase + 'buttonCenterImgUp.gif',
                            buttonCenterBGImgOver: imgBase + 'buttonCenterImgBGOver.gif',
                            buttonCenterBGImgDisabled: imgBase + 'buttonCenterBGImgDisabled.gif',
                            buttonCenterBGImgDown: imgBase + 'buttonCenterImgBGDown.gif'
                        }
                        if (this._p.showCounts == 'right') {
                            this.buttonImages.countBGImg = window.gigya._.getCdnResource('/gs/i/reactions/default/rightCountImg.gif')
                        }
                    }
                }
                if (this._p.showCounts == 'top') {
                    if (this.isMobileUI) {
                        oSpriteGroups.count = { path: '/shareBar/button/mobile/topCountImg.png', w: 87, h: 53 };
                    } else {
                        oSpriteGroups.count = { path: '/shareBar/button/topCountImg.png', w: 55, h: 37 };
                    }
                } else {
                    if (this.isMobileUI) {
                        oSpriteGroups.count = { path: '/shareBar/button/mobile/rightCountImg.png', w: 45, h: 35 };
                    } else {
                        oSpriteGroups.count = { path: '/shareBar/button/rightCountImg.png', w: 38, h: 20 };
                    }
                }



                //image preloading

                this.imageCache = { loadedCount: 0, imgs: [], imgCount: 0 };
                for (var b in this.buttonImages) {
                    this.imageCache.imgCount++;
                }
                if (this.imageCache.imgCount > 0) {
                    container.style.visibility = 'hidden';
                    var imageCache = this.imageCache;
                    var fncImgOnload = function () {
                        imageCache.loadedCount++;
                        if (imageCache.loadedCount == imageCache.imgCount) {
                            container.style.visibility = 'visible';
                        }
                    }
                }
                window.setTimeout(function () { if (container && container.style) container.style.visibility = 'visible' }, 5000);
                var This = this;
                for (btnImg in this.buttonImages) {
                    var img = new Image();
                    img.onload = fncImgOnload;
                    img.onerror = fncImgOnload;

                    if (btnImg == 'countBGImg') {
                        if (this._p.showCounts == 'none') {
                            fncImgOnload();
                            continue;
                        }
                        img.onload = function () {
                            var imgThis = this;
                            var els = container.getElementsByTagName('div');
                            window.setTimeout(function () {
                                for (var i = 0; i < els.length; i++) {
                                    if (els[i].className.indexOf('gig-counter') != -1) {
                                        els[i].style.width = imgThis.width + 'px';
                                        els[i].style.height = imgThis.height + 'px';
                                        els[i].style.zoom = '1';
                                        els[i].style.position = 'relative';
                                    }
                                }
                            }, 100);
                            fncImgOnload();
                            this.onload = null;
                        }
                    }
                    if (btnImg == 'buttonCenterBGImgUp') {
                        img.onload = function () {
                            var imgThis = this;
                            var els = container.getElementsByTagName('div');
                            window.setTimeout(function () {
                                for (var i = 0; i < els.length; i++) {
                                    if (els[i].className.indexOf('gig-button-td') != -1) {
                                        els[i].style.height = imgThis.height + 'px';
                                    }
                                }
                            }, 100);
                            fncImgOnload();
                            this.onload = null;
                        }
                    }
                    img.src = this.buttonImages[btnImg];
                    imageCache.count++;
                    imageCache.imgs.push(img);
                }

                var arHTML = [];

                var arButtons;

                var buttonsType = this._i.buttonsType;
                var fnUpdateCounts;

                switch (buttonsType) {
                    case 'share':
                        var shareButtons = this._p.shareButtons;
                        if (typeof shareButtons == 'string') {
                            arButtons = [];
                            var arShareButtons = shareButtons.split(',');

                            for (var i = 0; i < arShareButtons.length; i++) {
                                var oButton = {};
                                var sProvider = arShareButtons[i];

                                oButton.provider = sProvider;
                                arButtons.push(oButton);
                            }
                        } else {
                            arButtons = shareButtons;
                        }

                        var newArButtons = [];
                        var arProvidersIcons = [];
                        var rootPath = '/sharebar/icons/';
                        var iconSize = 16;
                        if (this.isMobileUI) {
                            rootPath += 'mobile/';
                            iconSize = 25;
                        }
                        for (var i = 0; i < arButtons.length; i++) {
                            var oButton = arButtons[i];
                            if (!oButton) continue; //IE8 bug
                            var sProvider = oButton.provider;
                            if (!sProvider) {
                                continue;
                            }

                            sProvider = sProvider.split(' ').join('');
                            var provider = window.gigya.services.socialize._getProviderByName(sProvider, this.bookmarkSitesArray);
                            if (provider == null) continue;
                            var iconName = provider.name.split('-')[0];
                            arProvidersIcons.push(iconName);

                            if (!oButton.iconImgUp) {
                                oButton.defaultIconImgUp = window.gigya._.getCdnResource('/gs/i' + rootPath + iconName + '.png');
                                oButton.iconSize = iconSize;
                            }
                            newArButtons.push(arButtons[i]);
                        }

                        oSpriteGroups.icons = { path: rootPath + '[' + arProvidersIcons.join(',') + '].png', w: iconSize, h: iconSize };
                        arButtons = newArButtons;
                        fnUpdateCounts = this.updateShareCounts;
                        break;

                    case 'reaction':
                    default:
                        fnUpdateCounts = this.updateReactionsCounts;
                        arButtons = this._p.reactions;
                }
                this.spriteRenderer = window.gigya.global.getSpriteRenderers(oSpriteGroups);
                var layout = this._p.layout;
                if (layout) layout = layout.toLowerCase();
                var isVertical = (layout == 'vertical');
                var showCounts = this._p.showCounts;
                if (showCounts) showCounts = showCounts.toLowerCase();

                if (!this._p['wrap']) {
                    arHTML.push('<table cellspacing="0" cellpadding="0" role="presentation">');
                    if (!isVertical) {
                        arHTML.push('<tr>');
                    }
                }
                var fbLikePosition = 'first';
                if (this._p.facebookLikeButton && this._p.facebookLikeButton.position) fbLikePosition = this._p.facebookLikeButton.position;
                fbLikePosition = fbLikePosition.toLowerCase();

                var fbButtonClass = 'gig-facebookLikeButton';
                if (!isVertical) {
                    if (fbLikePosition == 'first') fbButtonClass = 'gig-facebookLikeButton-first';
                    if (fbLikePosition == 'last') fbButtonClass = 'gig-facebookLikeButton-last';
                }

                if (buttonsType == 'share' && this._p.facebookLikeButton) {
                    var oFbLike = window.gigya.utils.object.clone(this._p.facebookLikeButton);
                    oFbLike.provider = 'facebook-like';
                    if (fbLikePosition == 'first') {
                        arButtons.splice(0, 0, oFbLike);
                    } else if (fbLikePosition == 'last') {
                        arButtons.push(oFbLike);
                    }
                }

                for (var i = 0; i < arButtons.length; i++) {
                    if (!arButtons[i]) continue;
                    var btn = new pluginScope.Button(arButtons[i], i, buttonsType, this);
                    arHTML.push(btn.getHTML());
                }
                if (!this._p['wrap']) {
                    if (!isVertical) {
                        arHTML.push('</tr>');
                    }
                }
                arHTML.push('</table>');
                container.innerHTML = '<div class="gig-bar-container gig-' + buttonsType + '-bar-container">' + arHTML.join('') + '</div>';
                for (var btnID in this.buttonInstances) {
                    //this.buttonInstances[btnID].hideCount();
                    this.buttonInstances[btnID].loadState();
                }
                fnUpdateCounts.apply(this, [showCounts]);

                window.gigya.events.dispatchForWidget({ eventName: 'load', containerID: this._p['containerID'] }, this._p);
                if (this.isMobileUI) {
                    window.gigya.utils.DOM.addEventListener(window, 'resize', function() { return This.onResize(); });
                    this.onResize();
                }
            },
            onResize: function () {
                var container = this.$(this._elid);
                if (container) container.style.width = document.body.offsetWidth + 'px';
            },
            updateShareCounts: function (showCounts) {
                if (showCounts == 'none') return;
                var This = this;
                var providersForShare = '';
                var getCountParams = {
                    enabledProviders: '',
                    URL: this._p.userAction.linkBack,
                    callback: function (res) { This.updateCounts(res.shareCounts, 'id') },
                    cacheTimeout: this._p.shareCountCacheTimeout
                };

                for (var btnID in this.buttonInstances) {
                    var providerCountName = this.buttonInstances[btnID].oButton.provider.toLowerCase().split('-')[0];
                    if (providersForShare.indexOf(providerCountName) == -1) {
                        providersForShare += providerCountName + ',';
                    }
                }

                for (var btnID in this.buttonInstances) {
                    var provider = this.buttonInstances[btnID].oButton.provider.toLowerCase().split(' ').join('');
                    if (provider == 'share') {
                        getCountParams.enabledProviders = providersForShare;
                    } else {
                        getCountParams[provider + 'URL'] = this._p.countURL || this.buttonInstances[btnID].oButton.countURL || this.buttonInstances[btnID].getShareURL();
                        if (getCountParams.enabledProviders != providersForShare) getCountParams.enabledProviders += provider + ',';
                    }
                }
                window.gigya.services.socialize.getProviderShareCounts(this._c, getCountParams);
            },
            updateReactionsCounts: function (showCounts) {
                var buttonIDs = '';
                var This = this;
                for (var btnID in this.buttonInstances) {
                    var provider = this.buttonInstances[btnID].id;
                    buttonIDs += provider + ',';
                }
                if (!buttonIDs) return;
                var params = {
                    barID: this._barID,
                    buttonIDs: buttonIDs,
                    callback: function (res) {
                        if (res.errorCode > 0) {
                            window.gigya.events.dispatchErrorFromResponse(This._p, res);
                        }
                        if (res.counts) {
                            var oCounts = {};
                            for (var i = 0; i < res.counts.length; i++) {
                                oCounts[res.counts[i].buttonId] = res.counts[i].count;
                            }

                            This.updateCounts(oCounts, 'id');
                        }
                    }
                }
                if (!this.usingCountTemplate && (showCounts == null || showCounts == 'none')) {
                    params.reportLoad = 'reportOnly';
                } else {
                    params.reportLoad = 'yes';
                }
                window.gigya.services.socialize.getReactionsCount(this._c, params);
                //this.updateCounts({cool:492,amazing:327},'ID');
            },
            normalizePercents: function () {
                var totalRounded = 0;
                for (var btnID in this.buttonInstances) {
                    var btn = this.buttonInstances[btnID];
                    btn.delta = Math.round(btn.countValue / this._totalCount * 100) - (btn.countValue / this._totalCount * 100);
                    totalRounded += Math.round(btn.countValue / this._totalCount * 100);
                }

                var totalDelta = totalRounded - 100;
                while (totalDelta < 0) {
                    //find the button with the lowest value of delta in the array and change its rounded value by +1, set its delta to 0;
                    var lowestDeltaBtn;
                    for (var btnID in this.buttonInstances) {
                        var btn = this.buttonInstances[btnID];
                        if (!lowestDeltaBtn || btn.delta < lowestDeltaBtn.delta) lowestDeltaBtn = btn;
                    }
                    lowestDeltaBtn.updateCount(lowestDeltaBtn.countValue, true, 1);
                    lowestDeltaBtn.delta = 0;
                    totalDelta++;
                }
                while (totalDelta > 0) {
                    //find the button with the highest value of delta in the array and change its rounded value by -1, set its delta to 0;
                    var HighestDeltaBtn;
                    for (var btnID in this.buttonInstances) {
                        var btn = this.buttonInstances[btnID];
                        if (!HighestDeltaBtn || btn.delta > HighestDeltaBtn.delta) HighestDeltaBtn = btn;
                    }
                    HighestDeltaBtn.updateCount(HighestDeltaBtn.countValue, true, -1);
                    HighestDeltaBtn.delta = 0;
                    totalDelta--;
                }
            },
            updateCounts: function (oCounts, key) {
                if (!oCounts) return;
                var total = 0;
                for (var countId in oCounts) {
                    total += oCounts[countId];
                }
                this._totalCount = total;

                for (var btnID in this.buttonInstances) {
                    var btn = this.buttonInstances[btnID];
                    var countKey = btn[key];
                    if (countKey == 'share') {
                        btn.updateCount(total);
                    } else {
                        btn.updateCount(oCounts[countKey]);
                    }
                }
            },
            onShare: function (btn) {
                var item = btn.oButton;
                if (btn.id != 'share' && btn.id != 'comments' && !isNaN(btn.countValue) && !btn.sharedOnce) {
                    this._totalCount += 1;
                    btn.updateCount(btn.countValue + 1);
                    btn.sharedOnce = true;
                }

                var params = window.gigya.utils.object.clone(this._p, false, true);
                params.onSendDone = this._p.onSendDone;
                params.userAction = btn.getUserAction();
                if (btn.oButton.userMessage) {
                    params.userAction.userMessage = btn.oButton.userMessage;
                }
                var provider = item.provider.toLowerCase().split(' ').join('');
                switch (provider) {
                    case 'foursquare': break;
                    case 'kindle': break;
                    case 'print':
                        window.print();
                        break;
                    case 'comments': break;
                    case 'email':
                        if (this.isMobileUI) {
                            window.gigya._.sendEmailNative(params);
                        } else {
                            params.operationMode = 'multiSelect';
                            params['hideSidebar'] = true;
                            params.initialView = 'email';
                            params.containerID = '';
                            window.gigya.services.socialize.showShareUI(params);
                        }
                        break;
                    case 'share':
                        if (!params.operationMode) params.operationMode = 'simpleShare';
                        delete params.containerID;
                        params.snapToElementID = btn.containerID;
                        window.gigya.services.socialize.showShareUI(params);
                        break;
                    default:
                        params.provider = provider;
                        params.description = params.userAction.description;
                        params.title = params.userAction.title;
                        params.url = params.userAction.linkBack;
                        params.providerKey = this._p[provider + 'Key'];

                        // Support setting popup-related parameters for individual providers.
                        var keysToInherit = ['enablePopupLocation', 'popupWidth', 'popupHeight', 'popupPositionY', 'popupPositionX'];
                        var key;
                        for(var i in keysToInherit) {
                            key = keysToInherit[i];
                            if(btn.oButton[key] !== undefined && btn.oButton[key] !== null) {
                                params[key] = btn.oButton[key];
                            }
                        }

                        var media = btn.getThumbnailURL();
                        if (media) params.thumbnailURL = media;
                        window.gigya.services.socialize.postBookmark(params);
                        var oEvent = {
                            eventName: 'sendDone',
                            providers: provider,
                            userMessage: params.userAction.userMessage,
                            targetURL: params.userAction.linkBack
                        }
                        window.gigya.events.dispatchForWidget(oEvent, this._p);
                }
                window.gigya.utils.sessionCache.remove('getProviderShareCount_' + provider.toLowerCase() + '_' + encodeURIComponent(params.url));
                window.gigya.events.dispatchForWidget({ eventName: 'shareButtonClicked', shareItem: item }, this._p);
            },
            onUndoReaction: function (btn) {
                var sourceData = (this._c.sourceData ? window.gigya.utils.object.clone(this._c.sourceData, false, true) : {});
                sourceData.buttonID = btn.id;
                sourceData.buttonText = btn.labelText;

                window.gigya.services.socialize.incrementReactionsCount(this._c, { barID: this._barID, buttonID: btn.id, count: -1, sourceData: sourceData });
                if (!isNaN(btn.countValue)) {
                    this._totalCount -= 1;
                    btn.updateCount(btn.countValue - 1);
                }
                window.gigya.events.dispatchForWidget({ eventName: 'reactionUnclicked', reaction: btn.oButton }, this._p);
            },
            onReaction: function (btn) {
                if (btn.disabled) return;

                var sourceData = (this._c.sourceData ? window.gigya.utils.object.clone(this._c.sourceData, false, true) : {});
                sourceData.buttonID = btn.id;
                sourceData.buttonText = btn.labelText;

                window.gigya.services.socialize.incrementReactionsCount(this._c, { reactionBarId: this._barID, buttonID: btn.id, count: 1, sourceData: sourceData });
                if (!isNaN(btn.countValue)) {
                    this._totalCount += 1;
                    btn.updateCount(btn.countValue + 1);
                }

                var el = this.$(btn.containerID);

                var item = btn.oButton;
                if (this._p.scope && this._p.scope.toLowerCase() == 'internal') {
                    window.gigya.services.socialize.publishUserAction(this._c, { sourceData: sourceData });
                } else if (el && !window.gigya.utils.validation.isExplicitFalse(this._p.promptShare)) {
                    var itemIndex = btn.index;
                    var containerID = this._p.containerID + '-share' + itemIndex;


                    var divMinishare = document.getElementById(containerID);
                    if (divMinishare && divMinishare.style.display != 'none') return;

                    if (!divMinishare) {
                        divMinishare = window.gigya.utils.DOM.createTopLevelDiv(containerID);
                        divMinishare.style.position = 'absolute';
                    }
                    var w = 320;
                    var h = 156;
                    var dst = divMinishare.style;
                    var vph;
                    var vpw;
                    var de = document.documentElement;


                    if (window.innerHeight) {
                        vph = window.innerHeight;
                        vpw = window.innerWidth;
                    }

                    if (typeof vph == 'undefined') {
                        var de = document.documentElement;
                        vph = de.clientHeight;
                        vpw = de.clientWidth;
                    }

                    if (((typeof vph == 'undefined') || (vph == 0)) && (document.body) && document.body.clientHeight) {
                        vph = document.body.clientHeight;
                        vpw = document.body.clientWidth;
                    }
                    var scrl = window.gigya.utils.viewport.getScroll();
                    var vpt = scrl.top;
                    var vpl = scrl.left;

                    var middlePointTop = vpt + Math.floor(vph / 2);
                    var middlePointLeft = vpl + Math.floor(vpw / 2);

                    var btnPos = window.gigya.global._GetElementPos(el);
                    if (btnPos.top > middlePointTop && btnPos.top > h) {
                        dst.top = (btnPos.top - h) + 'px';
                    } else {
                        dst.top = (btnPos.top + el.offsetHeight + 5) + 'px';
                    }
                    if (btnPos.left > middlePointLeft) {
                        var leftPos = (btnPos.left + el.offsetWidth - w);
                        if (leftPos < 0) leftPos = 0;
                        dst.left = leftPos + 'px';
                    }
                    else {
                        dst.left = (btnPos.left) + 'px';
                    }

                    dst.width = '' + w + 'px';
                    dst.height = '' + h + 'px';

                    var ifrel = document.getElementById('gigya_ifr_' + containerID);
                    if (ifrel != null) {
                        ifrel.style.top = (parseInt(dst.top) + 5) + 'px';
                        ifrel.style.left = (parseInt(dst.left) + 5) + 'px';
                        ifrel.style.width = (w - 10) + 'px';
                        ifrel.style.height = (h - 10) + 'px';
                    }

                    var params = window.gigya.utils.object.clone(this._p, true, true);
                    params.containerID = containerID;

                    params.autoShareActionID = this._p.autoShareActionID ? this._p.autoShareActionID : this._barID;

                    params.onSendDone = this._p.onSendDone;
                    params.onError = this._p.onError;
                    params.sourceData = sourceData;

                    if (item.bodyText) params.bodyText = item.bodyText;
                    if (item.headerText) params.headerText = item.headerText;

                    if (item.userAction) params.userAction = new window.gigya.services.socialize.UserAction(window.gigya.utils.object.clone(item.userAction, false, true));

                    var feedMessage;
                    if (btn.oButton.userMessage) {
                        feedMessage = btn.oButton.userMessage;
                    }
                    if (btn.oButton.feedMessage) {
                        feedMessage = btn.oButton.feedMessage;
                    }
                    if (feedMessage) {
                        var currentTitle = params.userAction.title;
                        params.userAction.title = feedMessage;
                        if (currentTitle && currentTitle != '') {
                            params.userAction.title += ' - ' + currentTitle;
                        }
                    }

                    if (!el.fncHide) {
                        el.fncHide = function (e) {
                            var a;
                            if (e) {
                                a = e.target;
                                if (!a) a = e.srcElement;
                                while (a != null && a.offsetParent && a.id.indexOf(containerID) == -1) {
                                    a = a.offsetParent;
                                }
                            }
                            if (!a || a.id.indexOf(containerID) == -1) {
                                var container = document.getElementById(containerID);
                                var ifr = document.getElementById('gigya_ifr_' + containerID);
                                if (container) container.style.display = 'none';

                                if (ifr) ifr.style.display = 'none';
                                if (document.attachEvent) {
                                    document.detachEvent("onclick", el.fncHide)
                                } else if (document.addEventListener) {
                                    document.removeEventListener("click", el.fncHide, false)
                                }
                            }
                        }
                    }
                    params.onClose = el.fncHide;

                    if (document.attachEvent) {
                        window.setTimeout(function () { document.attachEvent("onclick", el.fncHide) }, 100);
                    } else if (document.addEventListener) {
                        window.setTimeout(function () { document.addEventListener("click", el.fncHide, false) }, 100);
                    }
                    window.gigya.services.socialize.showMiniShareUI(params);
                }
                window.gigya.events.dispatchForWidget({ eventName: 'reactionClicked', reaction: item }, this._p);
            }
        }

        _pi[pluginName] = {
            instances: {},
            showReactionsBarUI: function (c, p, i) {
                i.buttonsType = 'reaction';
                pluginScope.createInstance(c, p, i);
            },
            showShareBarUI: function (c, p, i) {
                i.buttonsType = 'share';
                pluginScope.createInstance(c, p, i);
            }
        }

    }
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLnJlYWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLGVBQWUsWUFBSyw0Q0FBNEMsWUFBSztBQUNyRSxjQUFjLFlBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0IsMkJBQTJCO0FBQzFEO0FBQ0E7QUFDQSwrQkFBK0Isb0VBQW9FLG1CQUFtQjtBQUN0SDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsWUFBSztB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QUF1QyxZQUFLO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBSztBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUNBQWlDLFlBQUs7QUFDdEM7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxZQUFLO0FBQ3RDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFpRSxZQUFLLCtCQUErQixZQUFLOztBQUUxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCw4Q0FBOEM7QUFDckcscUJBQXFCO0FBQ3JCLHVEQUF1RCx3REFBd0Q7QUFDL0c7QUFDQSxvQkFBb0IsWUFBSztBQUN6QjtBQUNBLGdCQUFnQixZQUFLLDJCQUEyQiwrQ0FBK0M7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsSSIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5yZWFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sZWdhY3kvcGx1Z2lucy9naWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5yZWFjdGlvbnMuanNcIik7XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuanNcIiAvPlxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucyA9PSAndW5kZWZpbmVkJykgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMgPSB7fTtcclxuICAgIHZhciBfcGkgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucztcclxuICAgIHZhciBwbHVnaW5OYW1lID0gJ3JlYWN0aW9ucyc7XHJcbiAgICBpZiAodHlwZW9mIF9waVtwbHVnaW5OYW1lXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHZhciBwbHVnaW5TY29wZSA9IHtcclxuICAgICAgICAgICAgaW5zdGFuY2VzX3NpemU6IDAsXHJcbiAgICAgICAgICAgIGJvb2ttYXJrczogJ0ZhY2Vib29rLFR3aXR0ZXIsR29vZ2xlLExpbmtlZEluLERpZ2csTWVzc2VuZ2VyLFZLb250YWt0ZSxTcGljZXdvcmtzLFZpYWRlbyxuay5wbCxYaW5nLFR1ZW50aSxHb29nbGUgQm9va21hcmtzLEJhaWR1LEZyaWVuZEZlZWQsVHVtYmxyLFBpbnRlcmVzdCxTdHVtYmxlVXBvbixTa3lyb2NrLFFRLFNpbmEsS2FpeGluLFJlbnJlbixWWk5ldCxTaGFyZSxFbWFpbCxmYWNlYm9vay1saWtlLGZhY2Vib29rLXNlbmQsZmFjZWJvb2stc3Vic2NyaWJlLGZhY2Vib29rLXNoYXJlLGdvb2dsZS1wbHVzb25lLHR3aXR0ZXItdHdlZXQsQ29tbWVudHMsUmVkZGl0LE1peGksTmF2ZXIscGludGVyZXN0LXBpbml0LHR3aXR0ZXItaGFzaHRhZyx0d2l0dGVyLW1lbnRpb24sUHJpbnQsRm91cnNxdWFyZSxGb3Vyc3F1YXJlLXNhdmUsZ29vZ2xlUGx1cy1zaGFyZSxtb3NoYXJlLXNtcyxnZXRnbHVlLEtpbmRsZSxIYXRlbmEtYm9va21hcmssbGluZWl0LFdhbmVsbyxXaGF0c0FwcCcsXHJcbiAgICAgICAgICAgIGNyZWF0ZUJvb2ttYXJrc09iamVjdDogZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5ib29rbWFya1NpdGVzQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmJvb2ttYXJrU2l0ZXNIYXNoID0ge307XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJEaXNwbGF5TmFtZXMgPSB0aGlzLmJvb2ttYXJrcy5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyTmFtZXMgPSB0aGlzLmJvb2ttYXJrcy5yZXBsYWNlKCcsR29vZ2xlLCcsJyxnb29nbGVwbHVzLCcpLnJlcGxhY2UoLyAvZywgJycpLnJlcGxhY2UoLyEvZywgJycpLnJlcGxhY2UoL1xcLi9nLCAnJykucmVwbGFjZSgvXFwrL2csICdwbHVzJykudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFyRGlzcGxheU5hbWVzLnB1c2goJ0dvb2dsZScpO1xyXG4gICAgICAgICAgICAgICAgYXJOYW1lcy5wdXNoKCdnb29nbGVwbHVzLWludGVyYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhckRpc3BsYXlOYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IGluc3RhbmNlLlRFWFQoYXJOYW1lc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNwbGF5TmFtZSkgZGlzcGxheU5hbWUgPSBhckRpc3BsYXlOYW1lc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm1zID0geyBuYW1lOiBhck5hbWVzW2ldLCBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLm5hbWUgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmJvb2ttYXJrU2l0ZXNBcnJheS5wdXNoKGJtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuYm9va21hcmtTaXRlc0hhc2hbYm1zLm5hbWVdID0gYm1zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWFjdGlvbnNQbHVnaW46IGZ1bmN0aW9uIChjLCBwLCBpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jID0gYztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3AgPSBwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faSA9IGk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGlkID0gcC5jb250YWluZXJJRDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JhcklEID0gdGhpcy5fcC5iYXJJRDtcclxuICAgICAgICAgICAgICAgIHZhciBkZXZpY2VUeXBlID0gcFsnZGV2aWNlVHlwZSddID8gcFsnZGV2aWNlVHlwZSddLnRvTG93ZXJDYXNlKCkgOiAnZGVza3RvcCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW9iaWxlVUkgPSAoZGV2aWNlVHlwZSA9PSAnbW9iaWxlJyB8fCAoZGV2aWNlVHlwZSA9PSAnYXV0bycgJiYgZ2lneWEubG9jYWxJbmZvLmlzTW9iaWxlKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZUluc3RhbmNlOiBmdW5jdGlvbiAoYywgcCwgaSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHAuY29udGFpbmVySUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IHBsdWdpblNjb3BlLnJlYWN0aW9uc1BsdWdpbihjLCBwLCBpKTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmxhbmcgPSBwLmxhbmc7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5TY29wZS5jcmVhdGVCb29rbWFya3NPYmplY3QoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgX3BpW3BsdWdpbk5hbWVdLmluc3RhbmNlc1twLmNvbnRhaW5lcklEXSA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luU2NvcGUuaW5zdGFuY2VzX3NpemUrKztcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRyYXcoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlRGVmYXVsdFRlbXBsYXRlczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBfbWFwOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFwW2tleV0gPSAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkgPyB2YWx1ZS5qb2luKFwiXCIpIDogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcImJ1dHRvblwiLFxyXG5cdFx0XHRcdFtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1idXR0b24gZ2lnLSRidXR0b25UeXBlLWJ1dHRvbiBnaWctYnV0dG9uLXVwIGdpZy1idXR0b24tY291bnQtJHtzaG93Q291bnRzfVwiIGlkPVwiJGlkXCIgdGl0bGU9XCIkdG9vbHRpcFwiIGFsdD1cIiR0b29sdGlwXCIgb25jbGljaz1cIiRvbkNsaWNrXCIgb25tb3VzZW92ZXI9XCIkb25Nb3VzZU92ZXJcIiBvbm1vdXNlb3V0PVwiJG9uTW91c2VPdXRcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPHRhYmxlIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48dHI+JyxcclxuXHRcdFx0XHRcdFx0Jzx0ZCBpZD1cIiRpZC1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JGVsQnV0dG9uTGVmdEltZzwvdGQ+JyxcclxuXHRcdFx0XHRcdFx0JyRpY29uVEQnLFxyXG5cdFx0XHRcdFx0XHQnJHRleHRURCcsXHJcblx0XHRcdFx0XHRcdCc8dGQgaWQ9XCIkaWQtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4kZWxCdXR0b25SaWdodEltZzwvdGQ+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPC90cj48L3RhYmxlPicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PidcclxuXHRcdFx0XHQvLyckY291bnRMZWZ0SW1nLCAkY291bnRDZW50ZXJCR0ltZywgJGNvdW50UmlnaHRJbWcsICRjb3VudFxyXG5cdFx0XHRcdF0pO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcIm5ld0J1dHRvblwiLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCc8YSBjbGFzcz1cImdpZy1iYXItYnV0dG9uIGdpZy0kYnV0dG9uVHlwZS1iYXItYnV0dG9uXCI+JyxcclxuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctYmFyLWJ1dHRvbi1pY29uIGdpZy0kYnV0dG9uVHlwZS1iYXItYnV0dG9uLWljb25cIj4kZWxJY29uSW1nPC9kaXY+JyxcclxuXHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiZ2lnLWJhci1idXR0b24tdGV4dCBnaWctJGJ1dHRvblR5cGUtYmFyLWJ1dHRvbi10ZXh0XCI+JHRleHQ8L3NwYW4+JyxcclxuXHRcdFx0XHRcdCc8L2E+J1xyXG5cdFx0XHRcdF0pO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcInRleHRURFwiLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCc8dGQgaWQ9XCIkaWQtdGV4dFwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14OyRidXR0b25DZW50ZXJCR1N0eWxlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JyxcclxuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWctYnV0dG9uLXRleHQgZ2lnLSRidXR0b25UeXBlLWJ1dHRvbi10ZXh0XCI+JHRleHQ8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0JzwvdGQ+J1xyXG5cdFx0XHRcdF0pO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcImljb25URFwiLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCc8dGQgaWQ9XCIkaWQtaWNvblwiIHN0eWxlPVwiem9vbToxO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXg7JGJ1dHRvbkNlbnRlckJHU3R5bGVcIj4kZWxJY29uSW1nPC90ZD4nXHJcblx0XHRcdFx0XSk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMuc2V0KFwiY291bnRDb250YWluZXJcIixcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZy1jb3VudGVyIGdpZy0kYnV0dG9uVHlwZS1jb3VudGVyIGdpZy1jb3VudGVyLSR7cmlkfSBnaWctY291bnRlci0ke3Nob3dDb3VudHN9XCIgaWQ9XCIkY291bnRJZFwiIHN0eWxlPVwiZGlzcGxheTpub25lOyAke2NvdW50QmdTdHlsZX07dGV4dC1hbGlnbjpjZW50ZXI7dmVydGljYWwtYWxpZ246bWlkZGxlO1wiPicsXHJcblx0XHRcdFx0XHRcdCckY291bnQnLFxyXG5cdFx0XHRcdFx0JzwvZGl2PidcclxuXHRcdFx0XHRdXHJcblx0XHRcdFx0KTtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoXCJjb3VudFwiLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cIiRjb3VudGVyVGV4dENsYXNzXCIgaWQ9XCIkY291bnRJZC12YWx1ZVwiPiRjb3VudFZhbHVlPC9zcGFuPidcclxuXHRcdFx0XHRdXHJcblx0XHRcdFx0KTtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoXCJidXR0b25DZWxsXCIsXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0Jzx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiRjZWxsVmFsaWduOyB3aGl0ZS1zcGFjZTpub3dyYXA7em9vbToxO1wiPjxkaXYgY2xhc3M9XCIkY2xhc3NOYW1lXCI+JGJ1dHRvbkNvbnRhaW5lcjwvZGl2PjwvdGQ+J1xyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHQpO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcImJ1dHRvbldpdGhvdXRDZWxsXCIsXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCIkY2xhc3NOYW1lXCI+JGJ1dHRvbkNvbnRhaW5lcjwvZGl2PidcclxuXHRcdFx0XHRdXHJcblx0XHRcdFx0KTtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoXCJidXR0b25Sb3dcIixcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHQnPHRyPjx0ZCBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlO3pvb206MTtcIj48ZGl2IGNsYXNzPVwiJGNsYXNzTmFtZVwiPiRidXR0b25Db250YWluZXI8L2Rpdj48L3RkPjwvdHI+J1xyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHQpO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcImJ1dHRvbldpdGhvdXRDb3VudFwiLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCckYnV0dG9uJ1xyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHQpO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcImJ1dHRvbldpdGhDb3VudFRvcFwiLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCc8dGFibGUgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPicsXHJcblx0XHRcdFx0XHRcdCc8dHI+PHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPiRjb3VudENvbnRhaW5lcjwvdGQ+PC90cj4nLFxyXG5cdFx0XHRcdFx0XHQnPHRyPjx0ZCBjbGFzcz1cImdpZy1idXR0b24tdGRcIiAgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiRidXR0b248L3RkPjwvdHI+JyxcclxuXHRcdFx0XHRcdCc8L3RhYmxlPidcclxuXHRcdFx0XHRdXHJcblx0XHRcdFx0KTtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoXCJidXR0b25XaXRoQ291bnRSaWdodFwiLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCc8dGFibGUgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjx0cj4nLFxyXG5cdFx0XHRcdFx0XHQnPHRkIGNsYXNzPVwiZ2lnLWJ1dHRvbi10ZFwiPiRidXR0b248L3RkPicsXHJcblx0XHRcdFx0XHRcdCc8dGQ+JGNvdW50Q29udGFpbmVyPC90ZD4nLFxyXG5cdFx0XHRcdFx0JzwvdHI+PC90YWJsZT4nXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRcdCk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMuc2V0KCdpbWFnZScsXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0JzxpbWcgaWQ9XCIkaW1nSWRcIiBzcmM9XCIkc3JjXCIgYWx0PVwiJGFsdHRleHRcIiBmb2N1c2FibGU9XCJmYWxzZVwiIC8+J1xyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHQpO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldCgnaW1hZ2VXaXRoU2l6ZScsXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0JzxpbWcgaWQ9XCIkaW1nSWRcIiBzcmM9XCIkc3JjXCIgd2lkdGg9XCIkc2l6ZVwiIGhlaWdodD1cIiRzaXplXCIgYWx0PVwiJGFsdHRleHRcIiB0YWJpbmRleD1cIiR0YWJpbmRleFwiIGZvY3VzYWJsZT1cImZhbHNlXCIgLz4nXHJcblx0XHRcdFx0XSk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMuc2V0KCdmYWNlYm9va0xpa2VCdXR0b24nLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCc8ZGl2IGlkPVwiJGNvbnRhaW5lcklEXCI+PGRpdiBjbGFzcz1cImZiLWxpa2VcIiBzdHlsZT1cInpvb206MVwiIGRhdGEtd2lkdGg9XCIkd2lkdGhcIiBkYXRhLXNlbmQ9XCJmYWxzZVwiIGRhdGEtc2hvdy1mYWNlcz1cImZhbHNlXCIgZGF0YS1yZWY9XCIkcmVmXCIgZGF0YS1ocmVmPVwiJGhyZWZcIiBkYXRhLWxheW91dD1cIiRsYXlvdXRcIiBkYXRhLWFjdGlvbj1cIiRhY3Rpb25cIiBkYXRhLWdpZy1idG5pZD1cIiRpZFwiIGRhdGEtY29sb3JzY2hlbWU9XCIkY29sb3JzY2hlbWVcIiBkYXRhLWZvbnQ9XCIkZm9udFwiPjwvZGl2PjwvZGl2PidcclxuXHRcdFx0XHRdKTtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoJ2ZhY2Vib29rU2VuZEJ1dHRvbicsXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0JzxkaXYgaWQ9XCIkY29udGFpbmVySURcIj48ZGl2IGNsYXNzPVwiZmItc2VuZFwiIGRhdGEtcmVmPVwiJHJlZlwiIGRhdGEtaHJlZj1cIiRocmVmXCIgZGF0YS1jb2xvcnNjaGVtZT1cIiRjb2xvcnNjaGVtZVwiIGRhdGEtZm9udD1cIiRmb250XCI+PC9kaXY+PC9kaXY+J1xyXG5cdFx0XHRcdF0pO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldCgnZmFjZWJvb2tTaGFyZUJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cIiRjb250YWluZXJJRFwiPjxkaXYgY2xhc3M9XCJmYi1zaGFyZS1idXR0b25cIiBkYXRhLXJlZj1cIiRyZWZcIiBkYXRhLWhyZWY9XCIkaHJlZlwiIGRhdGEtdHlwZT1cIiRsYXlvdXRcIiBkYXRhLXdpZHRoPVwiJHdpZHRoXCI+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMuc2V0KCdmYWNlYm9va1N1YnNjcmliZUJ1dHRvbicsXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0JzxkaXYgaWQ9XCIkY29udGFpbmVySURcIj48ZGl2IGNsYXNzPVwiZmItc3Vic2NyaWJlXCIgZGF0YS1oZWlnaHQ9XCI4MFwiIGRhdGEtd2lkdGg9XCIkd2lkdGhcIiBkYXRhLXNob3ctZmFjZXM9XCJmYWxzZVwiIGRhdGEtaHJlZj1cIiRocmVmXCIgZGF0YS1sYXlvdXQ9XCIkbGF5b3V0XCIgZGF0YS1naWctYnRuaWQ9XCIkaWRcIiBkYXRhLWNvbG9yc2NoZW1lPVwiJGNvbG9yc2NoZW1lXCIgZGF0YS1mb250PVwiJGZvbnRcIj48L2Rpdj48L2Rpdj4nXHJcblx0XHRcdFx0XSk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMuc2V0KCdnb29nbGVQbHVzT25lQnV0dG9uJyxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHQnPGRpdiBpZD1cIiRjb250YWluZXJJRFwiIHN0eWxlPVwibGluZS1oZWlnaHQ6MXB4O1wiPjxkaXYgY2xhc3M9XCJnLXBsdXNvbmVcIiBkYXRhLWhyZWY9XCIkaHJlZlwiIGRhdGEtc2l6ZT1cIiRzaXplXCIgZGF0YS1jYWxsYmFjaz1cIiRjYWxsYmFja1wiIGRhdGEtYW5ub3RhdGlvbj1cIiRhbm5vdGF0aW9uXCIgZGF0YS13aWR0aD1cIiR3aWR0aFwiPjwvZGl2PjwvZGl2PidcclxuXHRcdFx0XHRdKTtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoJ2dvb2dsZVBsdXNTaGFyZUJ1dHRvbicsXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0JzxkaXYgaWQ9XCIkY29udGFpbmVySURcIiBzdHlsZT1cImxpbmUtaGVpZ2h0OjFweDtcIj48ZGl2IGNsYXNzPVwiZy1wbHVzXCIgZGF0YS1hY3Rpb249XCJzaGFyZVwiIGRhdGEtaHJlZj1cIiRocmVmXCIgZGF0YS1vbmVuZGludGVyYWN0aW9uPVwiJGNhbGxiYWNrXCIgZGF0YS1hbm5vdGF0aW9uPVwiJGFubm90YXRpb25cIiBkYXRhLWhlaWdodD1cIiRoZWlnaHRcIiBkYXRhLXdpZHRoPVwiJHdpZHRoXCI+PC9kaXY+PC9kaXY+J1xyXG5cdFx0XHRcdF0pO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldCgndHdpdHRlclR3ZWV0QnV0dG9uJyxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHQnPGRpdiBpZD1cIiRjb250YWluZXJJRFwiIHN0eWxlPVwibWluLXdpZHRoOiR7d2lkdGh9cHhcIj48YSBocmVmPVwiJHR3aXR0ZXJIcmVmXCIgY2xhc3M9XCIkdHdpdHRlckNsYXNzXCIgZGF0YS11cmw9XCIkaHJlZlwiIGRhdGEtdmlhPVwiJHZpYVwiIGRhdGEtc2l6ZT1cIiRzaXplXCIgJyxcclxuXHRcdFx0XHRcdFx0J2RhdGEtY291bnQ9XCJub25lXCIgZGF0YS10ZXh0PVwiJGRlZmF1bHRUZXh0XCIgZGF0YS1sYW5nPVwiJGxhbmdcIiBkYXRhLXJlbGF0ZWQ9XCIkcmVsYXRlZFwiID48L2E+PC9kaXY+J1xyXG5cdFx0XHRcdF0pO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldCgncGludGVyZXN0UGluaXRCdXR0b24nLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCc8ZGl2IGlkPVwiJGNvbnRhaW5lcklEXCI+PGEgZGF0YS1waW4tZG89XCJidXR0b25QaW5cIiBocmVmPVwiaHR0cDovL3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vP3VybD0ke2hyZWZ9Jm1lZGlhPSR7dGh1bWJuYWlsVVJMfSZkZXNjcmlwdGlvbj0ke2Rlc2NyaXB0aW9ufVwiIGNsYXNzPVwicGluLWl0LWJ1dHRvbmFcIiBjb3VudC1sYXlvdXQ9XCIke2NvdW50fVwiICR7c2hhcGV9ID48aW1nIGJvcmRlcj1cIjBcIiBzcmM9XCIke2ltZ05hbWV9XCIgdGl0bGU9XCJQaW4gSXRcIiBmb2N1c2FibGU9XCJmYWxzZVwiIC8+PC9hPjwvZGl2PidcclxuXHRcdFx0XHRdKTtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoJ21vc2hhcmVTbXNCdXR0b24nLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCc8YSBocmVmPVwiaHR0cDovL3d3dy5tb2dyZWV0LmNvbS9tb3NoYXJlL2l0L1wiIGNsYXNzPVwiJHttb3NoYXJlQ2xhc3N9XCIgZGF0YS10aXRsZT1cIiR7dGl0bGV9XCIgZGF0YS1tZXNzYWdlPVwiJHtkZXNjcmlwdGlvbn1cIiBkYXRhLXRodW1ibmFpbD1cIiR7dGh1bWJuYWlsVVJMfVwiPjwvYT4nXHJcblx0XHRcdFx0XSk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMuc2V0KCdnZXRnbHVlQnV0dG9uJyxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHQnPGEgY2xhc3M9XCJnbHVlLWNoZWNraW4td2lkZ2V0XCIgaHJlZj1cIiRocmVmXCIgZGF0YS10eXBlPVwiJHR5cGVcIiBkYXRhLW1lc3NhZ2U9XCIkbWVzc2FnZVwiIGRhdGEtdGl0bGU9XCIkdGl0bGVcIiBkYXRhLWNhbGxiYWNrPVwiJGNhbGxiYWNrSWRcIj48L2E+J1xyXG5cdFx0XHRcdF0pO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnNldCgnaGF0ZW5hQm9va21hcmtCdXR0b24nLFxyXG4gICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cIiRjb250YWluZXJJRFwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAnPGEgaHJlZj1cIiRwcm90b2NvbC8vYi5oYXRlbmEubmUuanAvZW50cnkvJGhyZWZcIicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcgY2xhc3M9XCJoYXRlbmEtYm9va21hcmstYnV0dG9uXCInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnIGRhdGEtaGF0ZW5hLWJvb2ttYXJrLXRpdGxlPVwiJHRpdGxlXCInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnIGRhdGEtaGF0ZW5hLWJvb2ttYXJrLWxheW91dD1cIiRsYXlvdXRcIicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcgZGF0YS1oYXRlbmEtYm9va21hcmstbGFuZz1cIiRsYW5nXCIgdGl0bGU9XCLjg5bjg4Pjgq/jg57jg7zjgq9cIj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBzcmM9XCIkcHJvdG9jb2wvL2Iuc3QtaGF0ZW5hLmNvbS9pbWFnZXMvZW50cnktYnV0dG9uL2J1dHRvbi1vbmx5QDJ4LnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHN0eWxlPVwiYm9yZGVyOiBub25lO1wiIC8+JyxcclxuICAgICAgICAgICAgICAgICAgICc8L2E+JyxcclxuICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgIF0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMuc2V0KCdsaW5laXRTaGFyZUJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cIiRjb250YWluZXJJRFwiPicsXHJcbiAgICAgICAgICAgICAgICAgICcgICAgIDxhIGhyZWY9XCJodHRwOi8vbGluZS5uYXZlci5qcC9SL21zZy90ZXh0Lz8kdGl0bGUlMGEkaHJlZlwiPicsXHJcbiAgICAgICAgICAgICAgICAgICcgICAgICAgICA8aW1nIHNyYz1cIiRpbWdVcmxcIiB3aWR0aD1cIiR3XCIgaGVpZ2h0PVwiJGhcIiBhbHQ9XCIkYWx0XCIgZm9jdXNhYmxlPVwiZmFsc2VcIiAvPicsXHJcbiAgICAgICAgICAgICAgICAgICcgICAgIDwvYT4nLFxyXG4gICAgICAgICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgICAgICAgICAgIF0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVmYXVsdENzczogW1xyXG5cdFx0XHRcdCcuZ2lnLWJhci1jb250YWluZXIgKiwgZGl2LmdpZy1yZWFjdGlvbnMtY29udGFpbmVyLCAuZ2lnLXJlYWN0aW9ucy1jb250YWluZXIgc3BhbiwgLmdpZy1yZWFjdGlvbnMtY29udGFpbmVyIGE6aG92ZXIsIC5naWctcmVhY3Rpb25zLWNvbnRhaW5lciBhOnZpc2l0ZWQsIC5naWctcmVhY3Rpb25zLWNvbnRhaW5lciBhOmxpbmssIC5naWctcmVhY3Rpb25zLWNvbnRhaW5lciBhOmFjdGl2ZXsnLFxyXG5cdFx0XHRcdCdmb250LXNpemU6MTJweDtib3JkZXI6bm9uZTsgcGFkZGluZzowcHg7bWFyZ2luOjBweDtjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmF1dG87ZmxvYXQ6bm9uZTstbW96LWJvcmRlci1yYWRpdXM6MDtib3JkZXItcmFkaXVzOjA7JyxcclxuXHRcdFx0XHQnZm9udC1mYW1pbHk6YXJpYWw7Zm9udC1zaXplOjEwcHg7Y29sb3I6IzRENEQ0RDtiYWNrZ3JvdW5kOm5vbmV9JyxcclxuXHRcdFx0XHQndGFibGUuZ2lnLXJlYWN0aW9ucy1jb250YWluZXJ7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlO30nLFxyXG5cdFx0XHRcdCdkaXYuZ2lnLWJ1dHRvbi1jb250YWluZXIge3BhZGRpbmc6MCA1cHggMCAwOyBkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3A7bWFyZ2luLWJvdHRvbTo1cHg7fSAnLFxyXG5cdFx0XHRcdCdkaXYuZ2lnLWJ1dHRvbi1jb250YWluZXItdmVydGljYWwge3BhZGRpbmc6MCAwIDVweCAwfScsXHJcbiAgICAgICAgICAgICAgICAnW2dpZ2lkPVwic2hvd1NoYXJlQmFyVUlcIl0gLmdpZy1idXR0b24tY29udGFpbmVyLXR3aXR0ZXItdHdlZXQgPiBkaXYge2Rpc3BsYXk6IGlubGluZTt9JyxcclxuXHJcblx0XHRcdFx0J2Rpdi5naWctYnV0dG9uIHtjdXJzb3I6cG9pbnRlcjt9JyxcclxuXHRcdFx0XHQnZGl2LmdpZy1idXR0b24tZGlzYWJsZWQge2N1cnNvcjpkZWZhdWx0O30nLFxyXG5cdFx0XHRcdCdkaXYuZ2lnLWNvdW50ZXJ7bWFyZ2luOjAgYXV0bztwb3NpdGlvbjpyZWxhdGl2ZTt6b29tOjE7fScsXHJcblx0XHRcdFx0J3NwYW4uZ2lnLWNvdW50ZXItdGV4dHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtd2VpZ2h0OmJvbGQ7em9vbToxfScsXHJcblxyXG5cclxuXHRcdFx0XHQndGQuZ2lnLWJ1dHRvbi10ZHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9JyxcclxuXHJcblx0XHRcdFx0JyouZ2lnLWJhci1jb250YWluZXIgaW1nIHtkaXNwbGF5OmJsb2NrfScsXHJcblx0XHRcdFx0J2Rpdi5naWctYnV0dG9uLWNvbnRhaW5lci10d2l0dGVyLXR3ZWV0IGlmcmFtZSxkaXYuZ2lnLWJ1dHRvbi1jb250YWluZXItdHdpdHRlci1oYXNodGFnIGlmcmFtZSxkaXYuZ2lnLWJ1dHRvbi1jb250YWluZXItdHdpdHRlci1tZW50aW9uIGlmcmFtZSB7ZGlzcGxheTpibG9ja30nLFxyXG5cclxuICAgICAgICAgICAgICAgICdkaXYuZ2lnLWJ1dHRvbi1jb250YWluZXItcGludGVyZXN0LXBpbml0IHtoZWlnaHQ6MjBweDt9JyxcclxuICAgICAgICAgICAgICAgICdkaXYuZ2lnLWJ1dHRvbi1jb250YWluZXItcGludGVyZXN0LXBpbml0IGEge2N1cnNvcjogcG9pbnRlcjt9JyxcclxuICAgICAgICAgICAgICAgICdkaXYuZ2lnLWJ1dHRvbi1jb250YWluZXItcGludGVyZXN0LXBpbml0LmdpZy1idXR0b24tY29udGFpbmVyLWNvdW50LXJpZ2h0IHt3aWR0aDo4MHB4O30nLFxyXG4gICAgICAgICAgICAgICAgJ2Rpdi5naWctYnV0dG9uLWNvbnRhaW5lci1waW50ZXJlc3QtcGluaXQuZ2lnLWJ1dHRvbi1jb250YWluZXItY291bnQtdG9wLmdpZy1idXR0b24tY29udGFpbmVyLXZlcnRpY2FsIHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6NTBweDt9JyxcclxuICAgICAgICAgICAgICAgICdkaXYuZ2lnLWJ1dHRvbi1jb250YWluZXItcGludGVyZXN0LXBpbml0LmdpZy1idXR0b24tY29udGFpbmVyLWNvdW50LXRvcC5naWctYnV0dG9uLWNvbnRhaW5lci12ZXJ0aWNhbCA+IGRpdiB7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjJweDt9JyxcclxuXHRcdFx0XHQnZGl2LmdpZy1jb3VudGVyLXRvcCB7bWFyZ2luLWJvdHRvbTogMXB4O30nLFxyXG5cdFx0XHRcdCdkaXYuZ2lnLWNvdW50ZXItcmlnaHQge21hcmdpbi1sZWZ0OiAxcHg7fScsXHJcblx0XHRcdFx0J2Rpdi5naWctYnV0dG9uLWNvdW50LXRvcCB0YWJsZSB7bWFyZ2luOjAgYXV0bzt0ZXh0LWFsaWduOmNlbnRlcjt9JyxcclxuXHJcbiAgICAgICAgICAgICAgICAvLydkaXYuZ2lnLWJ1dHRvbi1jb250YWluZXItaGF0ZW5hLWJvb2ttYXJrIHtwb3NpdGlvbjpyZWxhdGl2ZTsgdG9wOjNweDt9JyxcclxuXHJcblx0XHRcdFx0J2Rpdi5naWctYmFyLWJ1dHRvbi1pY29uIHtwb3NpdGlvbjphYnNvbHV0ZTtwYWRkaW5nLXRvcDoxcHg7fScsXHJcblx0XHRcdFx0J3NwYW4uZ2lnLWJhci1idXR0b24tdGV4dCB7cGFkZGluZy1sZWZ0OjE5cHg7d2hpdGUtc3BhY2U6bm93cmFwO3pvb206MTt9JyxcclxuXHRcdFx0XHRcdCdhLmdpZy1iYXItYnV0dG9uLGE6aG92ZXIuZ2lnLWJhci1idXR0b24sYTpsaW5rLmdpZy1iYXItYnV0dG9uLGE6YWN0aXZlLmdpZy1iYXItYnV0dG9uLGE6dmlzaXRlZC5naWctYmFyLWJ1dHRvbiB7JyxcclxuXHRcdFx0XHRcdFx0J3doaXRlLXNwYWNlOm5vd3JhcDtsaW5lLWhlaWdodDogMThweDtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOiAzcHg7IGNvbG9yOiM0ZDRkNGQ7Y3Vyc29yOnBvaW50ZXI7JyxcclxuXHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZTogMTFweDtwYWRkaW5nOiAwIDVweDsgYm9yZGVyOiAxcHggc29saWQgI0M1QzdDNztkaXNwbGF5OmlubGluZS1ibG9jazt6b29tOjE7dmVydGljYWwtYWxpZ246bWlkZGxlOyB0ZXh0LWFsaWduOmNlbnRlcjsnLFxyXG5cdFx0XHRcdFx0XHQnfScsXHJcblx0XHRcdFx0XHQnYS5naWctYmFyLWJ1dHRvbixhOmxpbmsuZ2lnLWJhci1idXR0b24sYTphY3RpdmUuZ2lnLWJhci1idXR0b24sYTp2aXNpdGVkLmdpZy1iYXItYnV0dG9uIHsnLFxyXG5cdFx0XHRcdFx0XHQnYmFja2dyb3VuZDogI0ZGRkZGRjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNGRkZGRkZcIiwgZW5kQ29sb3JzdHI9XCIjRUFFQkVCXCIpOycsXHJcblx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNGRkZGRkYpLCB0bygjRUFFQkVCKSk7JyxcclxuXHRcdFx0XHRcdFx0J2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNGRkZGRkYsICAjRUFFQkVCKX0nLFxyXG5cdFx0XHRcdFx0J2E6aG92ZXIuZ2lnLWJhci1idXR0b24sIGEuZ2lnLWJhci1idXR0b24tZG93bixhOmxpbmsuZ2lnLWJhci1idXR0b24tZG93bixhOmFjdGl2ZS5naWctYmFyLWJ1dHRvbi1kb3duLGE6dmlzaXRlZC5naWctYmFyLWJ1dHRvbi1kb3duIHsnLFxyXG5cdFx0XHRcdFx0XHQnYmFja2dyb3VuZDogI0VBRUJFQjsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNFQUVCRUJcIiwgZW5kQ29sb3JzdHI9XCIjRkZGRkZGXCIpOycsXHJcblx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNFQUVCRUIpLCB0bygjRkZGRkZGKSk7JyxcclxuXHRcdFx0XHRcdFx0J2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNFQUVCRUIsICAjRkZGRkZGKX0nXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG5vbk1vYmlsZUNzczogW1xyXG4gICAgICAgICAgICAgICAgJ2Rpdi5naWctYnV0dG9uLXRleHQge3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXNpemU6MTFweDtjb2xvcjojMzMzMzMzOyBwYWRkaW5nOiAwIDNweCAwIDNweDt9JyxcclxuXHRcdFx0ICAgICdzcGFuLmdpZy1jb3VudGVyLXRleHQtcmlnaHR7bGVmdDoxcHg7Zm9udC1zaXplOjExcHg7bGluZS1oZWlnaHQ6MjBweDt9JyxcclxuICAgICAgICAgICAgICAgICdzcGFuLmdpZy1jb3VudGVyLXRleHQtdG9we3RvcDotMnB4O2ZvbnQtc2l6ZToxNHB4fScsXHJcbiAgICAgICAgICAgIFx0J2Rpdi5naWctYnV0dG9uLWNvbnRhaW5lci1mYWNlYm9vay1saWtlLWNvdW50LXJpZ2h0IHtoZWlnaHQ6MjBweH0nLFxyXG5cdFx0XHRcdCdkaXYuZ2lnLWJ1dHRvbi1jb250YWluZXItZmFjZWJvb2stbGlrZS1jb3VudC10b3Age2hlaWdodDo2MnB4fScsXHJcblx0XHRcdFx0J2Rpdi5naWctYnV0dG9uLWNvbnRhaW5lci1mYWNlYm9vay1zZW5kIHtoZWlnaHQ6MjBweH0nXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG1vYmlsZUNzczogW1xyXG4gICAgICAgICAgICAgICAgJy5naWctYmFyLWNvbnRhaW5lciAqIHtmb250LXNpemU6IDE2cHg7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0Om5vbmU7IC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtmb250LWZhbWlseTpzYW5zLXNlcmlmfScsXHJcbiAgICAgICAgICAgICAgICAnLmdpZy1iYXItY29udGFpbmVyIHtvdmVyZmxvdzphdXRvO30nLFxyXG4gICAgICAgICAgICAgICAgJ2Rpdi5naWctYnV0dG9uLXRleHQge3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXNpemU6MTVweDtjb2xvcjojMzMzMzMzOyBwYWRkaW5nOiAwIDNweCAwIDNweDt9JyxcclxuXHRcdFx0ICAgICdzcGFuLmdpZy1jb3VudGVyLXRleHQtcmlnaHR7bGVmdDoxcHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MzVweDt9JyxcclxuICAgICAgICAgICAgICAgICdzcGFuLmdpZy1jb3VudGVyLXRleHQtdG9we3RvcDotMnB4O2ZvbnQtc2l6ZToxOHB4fSdcclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsdWdpblNjb3BlLnByb3ZpZGVyU3VwcG9ydHNDb3VudGVyID0gZnVuY3Rpb24gKHByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RpZ2cnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2hhcmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIChkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cDonKVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3R1bWJsZXVwb24nOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZmFjZWJvb2snOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29tbWVudHMnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZmFjZWJvb2stbGlrZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmYWNlYm9vay1zZW5kJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZhY2Vib29rLXN1YnNjcmliZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmYWNlYm9vay1zaGFyZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnb29nbGUtcGx1c29uZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnb29nbGVwbHVzLXNoYXJlJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21vc2hhcmUtc21zJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3BpbnRlcmVzdCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwaW50ZXJlc3QtcGluaXQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGlua2VkaW4nOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2V0Z2x1ZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdoYXRlbmEtYm9va21hcmsnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAndmtvbnRha3RlJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnZXRCdXR0b25Db25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uID0gYnRuOyB0aGlzLml0ZW0gPSB0aGlzLmdldEl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGx1Z2luU2NvcGUuQnV0dG9uSXRlbSA9IHtcclxuICAgICAgICAgICAgZ2VuZXJpYzogZ2V0QnV0dG9uQ29uc3RydWN0b3IoKSxcclxuICAgICAgICAgICAgJ2ZhY2Vib29rLXN1YnNjcmliZSc6IGdldEJ1dHRvbkNvbnN0cnVjdG9yKCksXHJcbiAgICAgICAgICAgICdmYWNlYm9vay1zZW5kJzogZ2V0QnV0dG9uQ29uc3RydWN0b3IoKSxcclxuICAgICAgICAgICAgJ2ZhY2Vib29rLXNoYXJlJzogZ2V0QnV0dG9uQ29uc3RydWN0b3IoKSxcclxuICAgICAgICAgICAgJ2ZhY2Vib29rLWxpa2UnOiBnZXRCdXR0b25Db25zdHJ1Y3RvcigpLFxyXG4gICAgICAgICAgICAnZ29vZ2xlLXBsdXNvbmUnOiBnZXRCdXR0b25Db25zdHJ1Y3RvcigpLFxyXG4gICAgICAgICAgICAnZ29vZ2xlcGx1cy1zaGFyZSc6IGdldEJ1dHRvbkNvbnN0cnVjdG9yKCksXHJcbiAgICAgICAgICAgICdnb29nbGVwbHVzLWludGVyYWN0aXZlJzogZ2V0QnV0dG9uQ29uc3RydWN0b3IoKSxcclxuICAgICAgICAgICAgJ21vc2hhcmUtc21zJzogZ2V0QnV0dG9uQ29uc3RydWN0b3IoKSxcclxuICAgICAgICAgICAgJ2dldGdsdWUnOiBnZXRCdXR0b25Db25zdHJ1Y3RvcigpLFxyXG4gICAgICAgICAgICAndHdpdHRlci10d2VldCc6IGdldEJ1dHRvbkNvbnN0cnVjdG9yKCksXHJcbiAgICAgICAgICAgICd0d2l0dGVyLWhhc2h0YWcnOiBnZXRCdXR0b25Db25zdHJ1Y3RvcigpLFxyXG4gICAgICAgICAgICAndHdpdHRlci1tZW50aW9uJzogZ2V0QnV0dG9uQ29uc3RydWN0b3IoKSxcclxuICAgICAgICAgICAgJ2NvbW1lbnRzJzogZ2V0QnV0dG9uQ29uc3RydWN0b3IoKSxcclxuICAgICAgICAgICAgJ2ZvdXJzcXVhcmUnOiBnZXRCdXR0b25Db25zdHJ1Y3RvcigpLFxyXG4gICAgICAgICAgICAnZm91cnNxdWFyZS1zYXZlJzogZ2V0QnV0dG9uQ29uc3RydWN0b3IoKSxcclxuICAgICAgICAgICAgJ3BpbnRlcmVzdC1waW5pdCc6IGdldEJ1dHRvbkNvbnN0cnVjdG9yKCksXHJcbiAgICAgICAgICAgICdraW5kbGUnOiBnZXRCdXR0b25Db25zdHJ1Y3RvcigpLFxyXG4gICAgICAgICAgICAnaGF0ZW5hLWJvb2ttYXJrJzogZ2V0QnV0dG9uQ29uc3RydWN0b3IoKSxcclxuICAgICAgICAgICAgJ2xpbmVpdCc6IGdldEJ1dHRvbkNvbnN0cnVjdG9yKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcGx1Z2luU2NvcGUuQnV0dG9uSXRlbS5nZW5lcmljLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYiA9IHRoaXMuYnV0dG9uO1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9uU3ByaXRlUmVuZGVyZXIgPSBiLnBsdWdpbi5zcHJpdGVSZW5kZXJlci5idXR0b247XHJcbiAgICAgICAgICAgIHZhciBpY29uU3ByaXRlUmVuZGVyZXIgPSBiLnBsdWdpbi5zcHJpdGVSZW5kZXJlci5pY29ucztcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKGIub0J1dHRvbik7XHJcbiAgICAgICAgICAgIGl0ZW0ub25DbGljayA9IGdpZ3lhLnV0aWxzLkRPTS5hdHRyaWJ1dGVFbmNvZGUoYi5nZXRSZWZTdHJpbmcoKSArICcub25DbGljaygpJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYmkgPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUoYi5wbHVnaW4uYnV0dG9uSW1hZ2VzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiLm5vQnV0dG9uQm9yZGVycykgYmkgPSB7IGNvdW50QkdJbWc6IGJpLmNvdW50QkdJbWcgfTsgLy9pY29uIG9ubHkgbWVhbnMgbm8gYnV0dG9uIGltYWdlcyAoZXhjZXB0IGZvciBjb3VudClcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYnV0dG9uTGVmdEltZyA9IGJpWydidXR0b25MZWZ0SW1nJyArIGIuc3RhdGVdO1xyXG4gICAgICAgICAgICBpdGVtLmJ1dHRvbkNlbnRlckJHSW1nID0gYmlbJ2J1dHRvbkNlbnRlckJHSW1nJyArIGIuc3RhdGVdO1xyXG4gICAgICAgICAgICBpdGVtLmJ1dHRvblJpZ2h0SW1nID0gYmlbJ2J1dHRvblJpZ2h0SW1nJyArIGIuc3RhdGVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJpLmNvdW50QkdJbWcpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY291bnRCR0ltZyA9IGJpLmNvdW50QkdJbWc7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNvdW50QmdTdHlsZSA9ICdiYWNrZ3JvdW5kLWltYWdlOnVybChcXCckY291bnRCR0ltZ1xcJyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0Oyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNvdW50QmdTdHlsZSA9IGIucGx1Z2luLnNwcml0ZVJlbmRlcmVyLmNvdW50LmdldFN0eWxlU3RyaW5nKCdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5jb3VudCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5pY29uSW1nID0gaXRlbS5pY29uSW1nVXAgPyBpdGVtLmljb25JbWdVcCA6IGl0ZW0uZGVmYXVsdEljb25JbWdVcDtcclxuXHJcbiAgICAgICAgICAgIHZhciBpY29uTmFtZSA9IGIuaWQuc3BsaXQoJy0nKVswXTtcclxuICAgICAgICAgICAgaXRlbS5lbEJ1dHRvbkxlZnRJbWcgPSAhYi5ub0J1dHRvbkJvcmRlcnMgPyBiLmdldEJ1dHRvbkltYWdlSFRNTCgnbGVmdC11cCcsICdidXR0b25MZWZ0SW1nVXAnLCAnbGVmdCcsIGJ1dHRvblNwcml0ZVJlbmRlcmVyLCBiaSwgdW5kZWZpbmVkLCAnJywgLTEpIDogJyc7XHJcbiAgICAgICAgICAgIGl0ZW0uZWxCdXR0b25SaWdodEltZyA9ICFiLm5vQnV0dG9uQm9yZGVycyA/IGIuZ2V0QnV0dG9uSW1hZ2VIVE1MKCdyaWdodC11cCcsICdidXR0b25SaWdodEltZ1VwJywgJ3JpZ2h0JywgYnV0dG9uU3ByaXRlUmVuZGVyZXIsIGJpLCB1bmRlZmluZWQsICcnLCAtMSkgOiAnJztcclxuICAgICAgICAgICAgaXRlbS5lbEljb25JbWcgPSBiLmdldEJ1dHRvbkltYWdlSFRNTChpY29uTmFtZSwgJ2ljb25JbWdVcCcsICdpY29uJywgaWNvblNwcml0ZVJlbmRlcmVyLCBpdGVtLCBiLmljb25TaXplLCBiLmxhYmVsVGV4dCA/IGIubGFiZWxUZXh0IDogJycsIDApO1xyXG4gICAgICAgICAgICBpdGVtLmljb25URCA9IGIucGx1Z2luLnRlbXBsYXRlcy5nZXQoXCJpY29uVERcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uYnV0dG9uQ2VudGVyQkdJbWcpIGl0ZW0uYnV0dG9uQ2VudGVyQkdJbWcgPSAnJztcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmNvdW50Q2VudGVyQkdJbWcpIGl0ZW0uY291bnRDZW50ZXJCR0ltZyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0uYnV0dG9uQ2VudGVyQkdJbWcgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYnV0dG9uQ2VudGVyQkdTdHlsZSA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5idXR0b25DZW50ZXJCR1N0eWxlID0gJ2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgKyBpdGVtLmJ1dHRvbkNlbnRlckJHSW1nICsgJ1xcJyknO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYi5sYWJlbFRleHQgJiYgYi5sYWJlbFRleHQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udGV4dCA9IGIubGFiZWxUZXh0O1xyXG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0VEQgPSBiLnBsdWdpbi50ZW1wbGF0ZXMuZ2V0KFwidGV4dFREXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRURCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWl0ZW0udG9vbHRpcCkgaXRlbS50b29sdGlwID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmJ1dHRvblR5cGUgPSBiLnBsdWdpbi5faS5idXR0b25zVHlwZTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0ub25Nb3VzZU92ZXIgPSBiLmdldFJlZlN0cmluZygpICsgJy5jaGFuZ2VTdGF0ZShcXCdvdmVyXFwnKSc7XHJcbiAgICAgICAgICAgIGl0ZW0ub25Nb3VzZU91dCA9IGIuZ2V0UmVmU3RyaW5nKCkgKyAnLmNoYW5nZVN0YXRlKFxcJ3VwXFwnKSc7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmJ1dHRvbiA9IGIucGx1Z2luLnRlbXBsYXRlcy5nZXQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnRDb250YWluZXIgPSBiLnBsdWdpbi50ZW1wbGF0ZXMuZ2V0KFwiY291bnRDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGl0ZW0uc2hvd0NvdW50cyA9IGIuc2hvd0NvdW50cztcclxuICAgICAgICAgICAgaXRlbS5jb3VudCA9IGIucGx1Z2luLnRlbXBsYXRlcy5nZXQoXCJjb3VudFwiKTtcclxuICAgICAgICAgICAgaXRlbS5jb3VudElkID0gJyRpZC1jb3VudCc7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBpdGVtLmNlbGxWYWxpZ24gPSAnYm90dG9tJztcclxuXHJcbiAgICAgICAgICAgIHZhciBwbHVnaW5TaG93Q291bnRzID0gYi5wbHVnaW4uX3Auc2hvd0NvdW50cztcclxuICAgICAgICAgICAgaWYgKHBsdWdpblNob3dDb3VudHMpIHBsdWdpblNob3dDb3VudHMgPSBwbHVnaW5TaG93Q291bnRzLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmICghcGx1Z2luU2hvd0NvdW50cykgcGx1Z2luU2hvd0NvdW50cyA9ICdyaWdodCc7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0VHJ1ZSgoYi5wbHVnaW4uX3AuaWNvbnNPbmx5IHx8IGIubm9CdXR0b25Cb3JkZXJzKSAmJiBwbHVnaW5TaG93Q291bnRzID09ICdyaWdodCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNlbGxWYWxpZ24gPSAnbWlkZGxlJztcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoYi5zaG93Q291bnRzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jb3VudGVyVGV4dENsYXNzID0gJ2dpZy1jb3VudGVyLXRleHQgZ2lnLSRidXR0b25UeXBlLWNvdW50ZXItdGV4dCBnaWctY291bnRlci10ZXh0LXJpZ2h0IGdpZy0kYnV0dG9uVHlwZS1jb3VudGVyLXRleHQtcmlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYnV0dG9uQ29udGFpbmVyID0gYi5wbHVnaW4udGVtcGxhdGVzLmdldChcImJ1dHRvbldpdGhDb3VudFJpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNvdW50ZXJUZXh0Q2xhc3MgPSAnZ2lnLWNvdW50ZXItdGV4dCBnaWctJGJ1dHRvblR5cGUtY291bnRlci10ZXh0IGdpZy1jb3VudGVyLXRleHQtdG9wIGdpZy0kYnV0dG9uVHlwZS1jb3VudGVyLXRleHQtdG9wJztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmJ1dHRvbkNvbnRhaW5lciA9IGIucGx1Z2luLnRlbXBsYXRlcy5nZXQoXCJidXR0b25XaXRoQ291bnRUb3BcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdub25lJzpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5idXR0b25Db250YWluZXIgPSBiLnBsdWdpbi50ZW1wbGF0ZXMuZ2V0KFwiYnV0dG9uV2l0aG91dENvdW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiLnBsdWdpbi51c2luZ0NvdW50VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY291bnRlclRleHRDbGFzcyA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWydmYWNlYm9vay1saWtlJ10ucHJvdG90eXBlID0ge1xyXG4gICAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHRoaXMuYnV0dG9uO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSAoYi5zaG93Q291bnRzID09ICdub25lJyA/ICdzdGFuZGFyZCcgOiAoYi5zaG93Q291bnRzID09ICd0b3AnID8gJ2JveF9jb3VudCcgOiAnYnV0dG9uX2NvdW50JykpOyAvL2RlZmF1bHQgaXMgJ3JpZ2h0XHJcbiAgICAgICAgICAgICAgICB2YXIgVVVJRCA9IGdpZ3lhLl8uYXBpQWRhcHRlci5nZXRUb2tlblBhcmFtKGIucGx1Z2luLl9jLkFQSUtleSwgJ1VVSUQnKTtcclxuICAgICAgICAgICAgICAgIHZhciBvUmVmID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHV1OiBVVUlELFxyXG4gICAgICAgICAgICAgICAgICAgIHM6IGIucGx1Z2luLl9wLnNvdXJjZSxcclxuICAgICAgICAgICAgICAgICAgICBwOiBiLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogYi5jb250YWluZXJJRCArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVHlwZTogJ3NoYXJlJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lICsgJyAnICsgJ2dpZy1mYWNlYm9va0xpa2VCdXR0b24tJyArIGxheW91dCxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXI6IGIucGx1Z2luLnRlbXBsYXRlcy5nZXQoXCJmYWNlYm9va0xpa2VCdXR0b25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiBiLm9CdXR0b24ubGF5b3V0IHx8IGxheW91dCxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IChiLm9CdXR0b24uYWN0aW9uID8gYi5vQnV0dG9uLmFjdGlvbiA6ICdsaWtlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzY2hlbWU6IChiLm9CdXR0b24uY29sb3JzY2hlbWUgPyBiLm9CdXR0b24uY29sb3JzY2hlbWUgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogKGIub0J1dHRvbi5mb250ID8gYi5vQnV0dG9uLmZvbnQgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySUQ6IGIuY29udGFpbmVySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBnaWd5YS51dGlscy5rZXlWYWx1ZS5zZXJpYWxpemUob1JlZiwgJzonKSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogKGIub0J1dHRvbi53aWR0aCA/IGIub0J1dHRvbi53aWR0aCA6IDU1KSxcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiBiLmdldFNoYXJlVVJMKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChiLmlkID09ICdmYWNlYm9vay1zZW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYnV0dG9uQ29udGFpbmVyID0gYi5wbHVnaW4udGVtcGxhdGVzLmdldChcImZhY2Vib29rU2VuZEJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYi5pZCA9PSAnZmFjZWJvb2stc3Vic2NyaWJlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYnV0dG9uQ29udGFpbmVyID0gYi5wbHVnaW4udGVtcGxhdGVzLmdldChcImZhY2Vib29rU3Vic2NyaWJlQnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiLmlkID09ICdmYWNlYm9vay1zaGFyZScpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5sYXlvdXQgPSAoYi5zaG93Q291bnRzID09ICdub25lJyA/ICdidXR0b24nIDogKGIuc2hvd0NvdW50cyA9PSAndG9wJyA/ICdib3hfY291bnQnIDogJ2J1dHRvbl9jb3VudCcpKTsgLy9kZWZhdWx0IGlzICdyaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYnV0dG9uQ29udGFpbmVyID0gYi5wbHVnaW4udGVtcGxhdGVzLmdldCgnZmFjZWJvb2tTaGFyZUJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmJ1dHRvbjtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdpZ3lhLmV4dGVybmFsLmZhY2Vib29rLmluaXRpYWxpemVkVGltZSkgZ2lneWEuZXh0ZXJuYWwuZmFjZWJvb2subG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBsYW5nQ29kZSA9IGdpZ3lhLnRoaXNTY3JpcHQubGFuZy5mdWxsLnJlcGxhY2UoJy0nLCAnXycpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2NyaXB0LmxvYWQoZ2lneWEubG9jYWxJbmZvLnByb3RvY29sICsgJzovL2Nvbm5lY3QuZmFjZWJvb2submV0LycgKyBsYW5nQ29kZSArICcvc2RrLmpzJywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgRkIgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZCLlhGQk1MICYmIEZCLlhGQk1MLnBhcnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYi5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7IC8vdHJ5aW5nIHRvIGZvcmNlLXBhcnNlIGlmIEZCIGZhaWxlZCB0byBwYXJzZSB3aGVuIGluaXRpdGFsaXplZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmZ1bmN0aW9ucy5pbnZva2VPblBhZ2VMb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBpZiAoY29udGFpbmVyLmZpcnN0Q2hpbGQuaW5uZXJIVE1MID09ICcnKSB7IEZCLlhGQk1MLnBhcnNlKGNvbnRhaW5lcikgfSB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZCLkV2ZW50ICYmIEZCLkV2ZW50LnN1YnNjcmliZSAmJiAhKGIuaWQgPT0gJ2ZhY2Vib29rLXNlbmQnICYmIHBsdWdpblNjb3BlLmFkZGVkRkJTZW5kRXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYi5pZCA9PSAnZmFjZWJvb2stc2VuZCcpIHBsdWdpblNjb3BlLmFkZGVkRkJTZW5kRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRkIuRXZlbnQuc3Vic2NyaWJlKChiLmlkID09ICdmYWNlYm9vay1zZW5kJyA/ICdtZXNzYWdlLnNlbmQnIDogJ2VkZ2UuY3JlYXRlJyksIGZ1bmN0aW9uIChyZXNwb25zZSwgY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LmdldEF0dHJpYnV0ZSgnZGF0YS1naWctYnRuaWQnKSA9PSBpZCB8fCBiLmlkID09ICdmYWNlYm9vay1zZW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb0V2ZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lOiAnc2VuZERvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiAoYi5wbHVnaW4uX3AuZmFjZWJvb2tMaWtlQnV0dG9uICYmIGIuaWQgPT0gJ2ZhY2Vib29rLWxpa2UnKSA/ICdmYWNlYm9va0xpa2UnIDogYi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJNZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVSTDogcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQob0V2ZW50LCBiLnBsdWdpbi5fcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIucGx1Z2luLnJlcG9ydFNoYXJlKGIuaWQsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsdWdpblNjb3BlLkJ1dHRvbkl0ZW1bJ2ZhY2Vib29rLXNlbmQnXSA9IHBsdWdpblNjb3BlLkJ1dHRvbkl0ZW1bJ2ZhY2Vib29rLWxpa2UnXTtcclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWydmYWNlYm9vay1zdWJzY3JpYmUnXSA9IHBsdWdpblNjb3BlLkJ1dHRvbkl0ZW1bJ2ZhY2Vib29rLWxpa2UnXTtcclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWydmYWNlYm9vay1zaGFyZSddID0gcGx1Z2luU2NvcGUuQnV0dG9uSXRlbVsnZmFjZWJvb2stbGlrZSddO1xyXG5cclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWydnb29nbGUtcGx1c29uZSddLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBsdWdpbiA9IHRoaXMuYnV0dG9uLnBsdWdpbjtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gdGhpcy5idXR0b247XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25UeXBlOiAnc2hhcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lcjogdGhpcy5idXR0b24ucGx1Z2luLnRlbXBsYXRlcy5nZXQoXCJnb29nbGVQbHVzT25lQnV0dG9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAoYi5zaG93Q291bnRzICYmIGIuc2hvd0NvdW50cyAhPSAnbm9uZScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAnZ2lnLWdvb2dsZVBsdXNPbmUtJyArIGIuY29udGFpbmVySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogYi5vQnV0dG9uLnNpemUgPyBiLm9CdXR0b24uc2l6ZSA6ICgoYi5zaG93Q291bnRzICYmIGIuc2hvd0NvdW50cyA9PSAndG9wJykgPyAndGFsbCcgOiAocGx1Z2luLmlzTW9iaWxlVUkgPyAnc3RhbmRhcmQnIDogJ21lZGl1bScpKSxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJRDogYi5jb250YWluZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uOiBiLm9CdXR0b24uYW5ub3RhdGlvbiA/IGIub0J1dHRvbi5hbm5vdGF0aW9uIDogKGIuc2hvd0NvdW50cyA9PSAnbm9uZScgPyAnbm9uZScgOiAnYnViYmxlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGIub0J1dHRvbi53aWR0aCA/IGIub0J1dHRvbi53aWR0aCA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbaXRlbS5jYWxsYmFja10gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnN0YXRlID09ICdvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9FdmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ3NlbmREb25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogJ2dvb2dsZS1wbHVzT25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJNZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVSTDogZS5ocmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KG9FdmVudCwgcGx1Z2luLl9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnJlcG9ydFNoYXJlKCdnb29nbGUtcGx1c09uZScsIGUuaHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmJ1dHRvbjtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5fX19nY2ZnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IHRoaXMuYnV0dG9uLnBsdWdpbi5fcC5sYW5nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2NyaXB0LmxvYWQoJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL3BsdXNvbmUuanMnLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBnYXBpICE9ICd1bmRlZmluZWQnICYmIGdhcGkucGx1c29uZSkgZ2FwaS5wbHVzb25lLmdvKGIuY29udGFpbmVySUQpO1xyXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHBsdWdpblNjb3BlLkJ1dHRvbkl0ZW1bJ2dvb2dsZXBsdXMtc2hhcmUnXS5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgICAgIGdldEl0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwbHVnaW4gPSB0aGlzLmJ1dHRvbi5wbHVnaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHRoaXMuYnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVHlwZTogJ3NoYXJlJyxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXI6IHRoaXMuYnV0dG9uLnBsdWdpbi50ZW1wbGF0ZXMuZ2V0KFwiZ29vZ2xlUGx1c1NoYXJlQnV0dG9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAnZ2lnLWdvb2dsZVBsdXNPbmUtJyArIGIuY29udGFpbmVySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySUQ6IGIuY29udGFpbmVySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbjogYi5vQnV0dG9uLmFubm90YXRpb24gPyBiLm9CdXR0b24uYW5ub3RhdGlvbiA6IChiLnNob3dDb3VudHMgPT0gJ25vbmUnID8gJ25vbmUnIDogKGIuc2hvd0NvdW50cyA9PSAndG9wJyA/ICd2ZXJ0aWNhbC1idWJibGUnIDogJ2J1YmJsZScpKSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYi5vQnV0dG9uLndpZHRoID8gYi5vQnV0dG9uLndpZHRoIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBiLm9CdXR0b24uaGVpZ2h0ID8gYi5vQnV0dG9uLmhlaWdodCA6IHBsdWdpbi5pc01vYmlsZVVJID8gJzI0JyA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbaXRlbS5jYWxsYmFja10gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ2NvbmZpcm0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvRXZlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdzZW5kRG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6ICdnb29nbGUtcGx1c09uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVUkw6IGUuaHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChvRXZlbnQsIHBsdWdpbi5fcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5yZXBvcnRTaGFyZSgnZ29vZ2xlcGx1cy1zaGFyZScsIGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gdGhpcy5idXR0b247XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX19fZ2NmZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5nOiB0aGlzLmJ1dHRvbi5wbHVnaW4uX3AubGFuZ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnNjcmlwdC5sb2FkKCdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9wbHVzb25lLmpzJywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZ2FwaSAhPSAndW5kZWZpbmVkJyAmJiBnYXBpLnBsdXMpIGdhcGkucGx1cy5nbyhiLmNvbnRhaW5lcklEKTtcclxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGx1Z2luU2NvcGUuQnV0dG9uSXRlbVsnZ29vZ2xlcGx1cy1pbnRlcmFjdGl2ZSddLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgZ2V0SXRlbTogcGx1Z2luU2NvcGUuQnV0dG9uSXRlbS5nZW5lcmljLnByb3RvdHlwZS5nZXRJdGVtLFxyXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBiID0gdGhpcy5idXR0b247XHJcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBiLnBsdWdpbi4kKGIuY29udGFpbmVySUQpO1xyXG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdvbkNsaWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93Ll9fX2djZmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZzogdGhpcy5idXR0b24ucGx1Z2luLl9wLmxhbmdcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2NyaXB0LmxvYWQoJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2NsaWVudDpwbHVzb25lLmpzJywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsdG9hY3Rpb25sYWJlbDogYi5vQnV0dG9uLmNhbGxUb0FjdGlvbkxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsdG9hY3Rpb251cmw6IGIub0J1dHRvbi5jYWxsVG9BY3Rpb25VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkZWVwbGlua2lkOiBiLm9CdXR0b24uY29udGVudERlZXBMaW5rSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudGlkOiBiLm9CdXR0b24uY2xpZW50SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnR1cmw6IGIub0J1dHRvbi5jb250ZW50VVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsdG9hY3Rpb25kZWVwbGlua2lkOiBiLm9CdXR0b24uY2FsbFRvQWN0aW9uRGVlcExpbmtJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29va2llcG9saWN5OiBiLm9CdXR0b24uY29va2llUG9saWN5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaWxsdGV4dDogYi5vQnV0dG9uLnByZUZpbGxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGdhcGkgIT0gJ3VuZGVmaW5lZCcgJiYgZ2FwaS5pbnRlcmFjdGl2ZXBvc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcGkuaW50ZXJhY3RpdmVwb3N0LnJlbmRlcihiLmNvbnRhaW5lcklELCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWydtb3NoYXJlLXNtcyddLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmJ1dHRvbjtcclxuICAgICAgICAgICAgICAgIHZhciB1YSA9IGIuZ2V0VXNlckFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vc2hhcmVDbGFzcztcclxuICAgICAgICAgICAgICAgIGlmIChiLnNob3dDb3VudHMgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiLm9CdXR0b24uaWNvbk9ubHkgfHwgZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0VHJ1ZShiLnBsdWdpbi5fcC5pY29uc09ubHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc2hhcmVDbGFzcyA9ICdtb3NoYXJlLWNoaWNrbGV0LWhvcic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9zaGFyZUNsYXNzID0gJ21vc2hhcmUtYnV0dG9uLWhvcic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYi5vQnV0dG9uLmljb25Pbmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc2hhcmVDbGFzcyA9ICdtb3NoYXJlLWJ1dHRvbi1taW5pJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3NoYXJlQ2xhc3MgPSAnbW9zaGFyZS1idXR0b24nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGh1bWIgPSBiLmdldFRodW1ibmFpbFVSTCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVHlwZTogJ3NoYXJlJyxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXI6IGIucGx1Z2luLnRlbXBsYXRlcy5nZXQoXCJtb3NoYXJlU21zQnV0dG9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vc2hhcmVDbGFzczogbW9zaGFyZUNsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB1YS50aXRsZSA/IHVhLnRpdGxlIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVhLmRlc2NyaXB0aW9uID8gdWEuZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxVUkw6IHRodW1iID8gdGh1bWIgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5wcm90b2NvbCAhPT0gJ2h0dHBzJykgLy8gTW9TaGFyZSBvbmx5IHN1cHBvcnQgaHR0cFxyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnNjcmlwdC5sb2FkKCdodHRwOi8vZDJjLmJhbmRjb24ubW9ncmVldC5jb20vbW9zaGFyZS9lbWJlZC9tb3NoYXJlLmpzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsdWdpblNjb3BlLkJ1dHRvbkl0ZW1bJ2dldGdsdWUnXS5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgICAgIGdldEl0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBiID0gdGhpcy5idXR0b247XHJcbiAgICAgICAgICAgICAgICB2YXIgdWEgPSBiLmdldFVzZXJBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU6ICdzaGFyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyOiBiLnBsdWdpbi50ZW1wbGF0ZXMuZ2V0KFwiZ2V0Z2x1ZUJ1dHRvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdWEudGl0bGUgPyB1YS50aXRsZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHVhLmRlc2NyaXB0aW9uID8gdWEuZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBiLnNob3dDb3VudHMgPT0gJ3JpZ2h0JyA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tJZDogJ2dpZ19nZXRnbHVlKycgKyAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbaXRlbS5jYWxsYmFja0lkXSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9FdmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lOiAnc2VuZERvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6ICdnZXRnbHVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VVJMOiBUaGlzLml0ZW0uaHJlZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQob0V2ZW50LCBiLnBsdWdpbi5fcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5wbHVnaW4ucmVwb3J0U2hhcmUoJ2dldGdsdWUnLCBUaGlzLml0ZW0uaHJlZik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5zY3JpcHQubG9hZChnaWd5YS5sb2NhbEluZm8ucHJvdG9jb2wgKyAnOi8vd2lkZ2V0cy5nZXRnbHVlLmNvbS9jaGVja2luLmpzJywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbJ2dldGdsdWUnXSkgd2luZG93WydnZXRnbHVlJ10ubG9hZFdpZGdldHMoKTtcclxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWyd0d2l0dGVyLXR3ZWV0J10ucHJvdG90eXBlID0ge1xyXG4gICAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHRoaXMuYnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR3aXR0ZXJDbGFzcztcclxuICAgICAgICAgICAgICAgIHZhciB0d2l0dGVySHJlZjtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5idXR0b24uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0d2l0dGVyLW1lbnRpb24nOiB0d2l0dGVyQ2xhc3MgPSAndHdpdHRlci1tZW50aW9uLWJ1dHRvbic7IHR3aXR0ZXJIcmVmID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3NjcmVlbl9uYW1lPScgKyAoYi5vQnV0dG9uLm1lbnRpb24gIT0gbnVsbCA/IGIub0J1dHRvbi5tZW50aW9uIDogJyYjMTYwOycpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0d2l0dGVyLWhhc2h0YWcnOiB0d2l0dGVyQ2xhc3MgPSAndHdpdHRlci1oYXNodGFnLWJ1dHRvbic7IHR3aXR0ZXJIcmVmID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P2J1dHRvbl9oYXNodGFnPScgKyAoYi5vQnV0dG9uLmhhc2h0YWcgIT0gbnVsbCA/IGIub0J1dHRvbi5oYXNodGFnIDogJyYjMTYwOycpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0d2l0dGVyLXR3ZWV0JzpcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0d2l0dGVyQ2xhc3MgPSAndHdpdHRlci1zaGFyZS1idXR0b24nOyB0d2l0dGVySHJlZiA9ICdodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlJzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdWFUaXRsZSA9IGIuZ2V0VXNlckFjdGlvbigpLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBkZXNrdG9wL21vYmlsZSBtaW5pbXVtIHdpZHRoXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluV2lkdGggPSAoYi5wbHVnaW4uaXNNb2JpbGVVSSA/IDgwIDogNTUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU6ICdzaGFyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyOiBiLnBsdWdpbi50ZW1wbGF0ZXMuZ2V0KFwidHdpdHRlclR3ZWV0QnV0dG9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR3aXR0ZXJDbGFzczogdHdpdHRlckNsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIHR3aXR0ZXJIcmVmOiB0d2l0dGVySHJlZixcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJRDogYi5jb250YWluZXJJRCArICdfdHdlZXQnICsgKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICB2aWE6IChiLm9CdXR0b24udmlhID8gYi5vQnV0dG9uLnZpYSA6ICcnKSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VGV4dDogYi5vQnV0dG9uLmRlZmF1bHRUZXh0ID8gYi5vQnV0dG9uLmRlZmF1bHRUZXh0IDogKHVhVGl0bGUgPyB1YVRpdGxlIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IChiLm9CdXR0b24ubGFuZyA/IGIub0J1dHRvbi5sYW5nIDogYi5wbHVnaW4uX3AubGFuZyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZDogKGIub0J1dHRvbi5yZWxhdGVkID8gYi5vQnV0dG9uLnJlbGF0ZWQgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogYi5wbHVnaW4uaXNNb2JpbGVVSSA/ICdsYXJnZScgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYi5vQnV0dG9uLndpZHRoIHx8IG1pbldpZHRoLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJJRCA9IGl0ZW0uY29udGFpbmVySUQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGx1Z2luID0gdGhpcy5idXR0b24ucGx1Z2luO1xyXG4gICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySUQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZuQWRkRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cnkgeyB0d3R0ci53aWRnZXRzLmxvYWQoY29udGFpbmVyKTsgfSBjYXRjaCAoZXgpIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHR3dHRyLmV2ZW50cy5iaW5kKCd0d2VldCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmlkID09IFRoaXMuY29udGFpbmVySUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvRXZlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lOiAnc2VuZERvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogVGhpcy5idXR0b24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVSTDogVGhpcy5pdGVtLmhyZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChvRXZlbnQsIHBsdWdpbi5fcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4ucmVwb3J0U2hhcmUoVGhpcy5idXR0b24uaWQsIFRoaXMuaXRlbS5ocmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2NyaXB0LmxvYWQoZ2lneWEubG9jYWxJbmZvLnByb3RvY29sICsgJzovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanMnLCBudWxsLCBmbkFkZEV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWyd0d2l0dGVyLWhhc2h0YWcnXSA9IHBsdWdpblNjb3BlLkJ1dHRvbkl0ZW1bJ3R3aXR0ZXItdHdlZXQnXTtcclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWyd0d2l0dGVyLW1lbnRpb24nXSA9IHBsdWdpblNjb3BlLkJ1dHRvbkl0ZW1bJ3R3aXR0ZXItdHdlZXQnXTtcclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWydjb21tZW50cyddLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgZ2V0SXRlbTogcGx1Z2luU2NvcGUuQnV0dG9uSXRlbS5nZW5lcmljLnByb3RvdHlwZS5nZXRJdGVtLFxyXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvckNvZGUgPT0gMCAmJiBUaGlzLmJ1dHRvbi5zaG93Q291bnRzICE9ICdub25lJyAmJiByZXMuc3RyZWFtSW5mbyAmJiByZXMuc3RyZWFtSW5mby5jb21tZW50Q291bnQgJiYgcmVzLnN0cmVhbUluZm8uY29tbWVudENvdW50ID4gMCkgVGhpcy5idXR0b24udXBkYXRlQ291bnQocmVzLnN0cmVhbUluZm8uY29tbWVudENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SUQ6IHRoaXMuYnV0dG9uLm9CdXR0b24uY2F0ZWdvcnlJRCxcclxuICAgICAgICAgICAgICAgICAgICBzdHJlYW1JRDogdGhpcy5idXR0b24ub0J1dHRvbi5zdHJlYW1JRCxcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZVRpbWVvdXQ6IHRoaXMuYnV0dG9uLnBsdWdpbi5fcC5zaGFyZUNvdW50Q2FjaGVUaW1lb3V0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5jb21tZW50cy5nZXRTdHJlYW1JbmZvKHRoaXMuYnV0dG9uLnBsdWdpbi5fYywgcGFyYW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGx1Z2luU2NvcGUuQnV0dG9uSXRlbVsnZm91cnNxdWFyZSddLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgZ2V0SXRlbTogcGx1Z2luU2NvcGUuQnV0dG9uSXRlbS5nZW5lcmljLnByb3RvdHlwZS5nZXRJdGVtLFxyXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBiID0gdGhpcy5idXR0b247XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0VVJMID0gJ2h0dHA6Ly9wbGF0Zm9ybS5mb3Vyc3F1YXJlLmNvbS9qcy93aWRnZXRzLmpzJztcclxuICAgICAgICAgICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8ucHJvdG9jb2wgPT0gJ2h0dHBzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5fX19mb3VyU3EgPSB7IHNlY3VyZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdFVSTCA9ICdodHRwczovL3BsYXRmb3JtLXMuZm91cnNxdWFyZS5jb20vanMvd2lkZ2V0cy5qcyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5zY3JpcHQubG9hZChzY3JpcHRVUkwsIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gbmV3IGZvdXJTcS53aWRnZXQuU2F2ZVRvKHsgdmlkOiBiLm9CdXR0b24udmlkLCB2YXJpYW50OiBiLm9CdXR0b24udmFyaWFudCwgaGlkZVRvb2x0aXA6IGIub0J1dHRvbi5oaWRlVG9vbHRpcCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYmluZCgnYWRkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvRXZlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdzZW5kRG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IGIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVUkw6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KG9FdmVudCwgYi5wbHVnaW4uX3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnBsdWdpbi5yZXBvcnRTaGFyZShiLmlkLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmF0dGFjaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiLmNvbnRhaW5lcklEKSk7XHJcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWydmb3Vyc3F1YXJlLXNhdmUnXS5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgICAgIGdldEl0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU6ICdzaGFyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyOiAnPGRpdiBpZD1cIicgKyB0aGlzLmJ1dHRvbi5jb250YWluZXJJRCArICdcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBiID0gdGhpcy5idXR0b247XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0VVJMID0gJ2h0dHA6Ly9wbGF0Zm9ybS5mb3Vyc3F1YXJlLmNvbS9qcy93aWRnZXRzLmpzJztcclxuICAgICAgICAgICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8ucHJvdG9jb2wgPT0gJ2h0dHBzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5fX19mb3VyU3EgPSB7IHNlY3VyZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdFVSTCA9ICdodHRwczovL3BsYXRmb3JtLXMuZm91cnNxdWFyZS5jb20vanMvd2lkZ2V0cy5qcyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5zY3JpcHQubG9hZChzY3JpcHRVUkwsIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gbmV3IGZvdXJTcS53aWRnZXQuU2F2ZVRvKHsgdmlkOiBiLm9CdXR0b24udmlkLCB2YXJpYW50OiBiLm9CdXR0b24udmFyaWFudCwgaGlkZVRvb2x0aXA6IGIub0J1dHRvbi5oaWRlVG9vbHRpcCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYmluZCgnb3BlbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnc2hhcmVCdXR0b25DbGlja2VkJywgc2hhcmVJdGVtOiBiLm9CdXR0b24gfSwgYi5wbHVnaW4uX3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldC5iaW5kKCdhZGRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9FdmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ3NlbmREb25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogYi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJNZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVSTDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQob0V2ZW50LCBiLnBsdWdpbi5fcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIucGx1Z2luLnJlcG9ydFNoYXJlKGIuaWQsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQucmVwbGFjZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiLmNvbnRhaW5lcklEKSk7XHJcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGx1Z2luU2NvcGUuQnV0dG9uSXRlbVsncGludGVyZXN0LXBpbml0J10ucHJvdG90eXBlID0ge1xyXG4gICAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmJ1dHRvbjtcclxuICAgICAgICAgICAgICAgIHZhciB1YSA9IGIuZ2V0VXNlckFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNoYXBlID0gYi5vQnV0dG9uLnNoYXBlID8gYi5vQnV0dG9uLnNoYXBlIDogJyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gZ2lneWEubG9jYWxJbmZvLnByb3RvY29sICsgJzonICsgKChzaGFwZSA9PSAncm91bmQnKSA/ICcvL2Fzc2V0cy5waW50ZXJlc3QuY29tL2ltYWdlcy9waWRnZXRzL3Bpbml0X2ZnX2VuX3JvdW5kX3JlZF8xNi5wbmcnIDogJy8vYXNzZXRzLnBpbnRlcmVzdC5jb20vaW1hZ2VzL3BpZGdldHMvcGluaXRfZmdfZW5fcmVjdF9ncmF5XzIwLnBuZycpOyAvLyBwcmV2ZW50IGljb25zIGJsaW5rc1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU6ICdzaGFyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyOiBiLnBsdWdpbi50ZW1wbGF0ZXMuZ2V0KFwicGludGVyZXN0UGluaXRCdXR0b25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IChiLnNob3dDb3VudHMgPT0gJ3RvcCcgPyAndmVydGljYWwnIDogKGIuc2hvd0NvdW50cyA9PSAncmlnaHQnID8gJ2hvcml6b250YWwnIDogJ25vbmUnKSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGdpZ3lhLnV0aWxzLlVSTC5VUkxFbmNvZGUodWEuZGVzY3JpcHRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGdpZ3lhLnV0aWxzLlVSTC5VUkxFbmNvZGUoYi5nZXRTaGFyZVVSTCgpKSxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJRDogYi5jb250YWluZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICBsYW5nOiAoYi5vQnV0dG9uLmxhbmcgPyBiLm9CdXR0b24ubGFuZyA6IGIucGx1Z2luLl9wLmxhbmcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0ZWQ6IChiLm9CdXR0b24ucmVsYXRlZCA/IGIub0J1dHRvbi5yZWxhdGVkIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlOiAoc2hhcGUgPT0gJ3JvdW5kJyA/ICdkYXRhLXBpbi1yb3VuZD1cInRydWVcIicgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nTmFtZTogaW1nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZWRpYSA9IGIuZ2V0VGh1bWJuYWlsVVJMKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVkaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnRodW1ibmFpbFVSTCA9IGdpZ3lhLnV0aWxzLlVSTC5VUkxFbmNvZGUobWVkaWEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnRodW1ibmFpbFVSTCA9IGdpZ3lhLnV0aWxzLlVSTC5VUkxFbmNvZGUoaXRlbS5ocmVmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVySUQgPSBpdGVtLmNvbnRhaW5lcklEO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2NyaXB0LmxvYWQoZ2lneWEubG9jYWxJbmZvLnByb3RvY29sICsgJzovL2Fzc2V0cy5waW50ZXJlc3QuY29tL2pzL3Bpbml0LmpzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsdWdpblNjb3BlLkJ1dHRvbkl0ZW1bJ2tpbmRsZSddLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgZ2V0SXRlbTogcGx1Z2luU2NvcGUuQnV0dG9uSXRlbS5nZW5lcmljLnByb3RvdHlwZS5nZXRJdGVtLFxyXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gdGhpcy5idXR0b24ub0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYnV0dG9uLmNvbnRhaW5lcklEKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChlbEJ1dHRvbiwgJ2tpbmRsZVdpZGdldCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGVsQnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuYnV0dG9uLnBsdWdpbi5yZXBvcnRTaGFyZSgna2luZGxlJywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2NyaXB0LmxvYWQoJ2h0dHBzOi8vZDF4bm42OTJzN3U2dDYuY2xvdWRmcm9udC5uZXQvd2lkZ2V0LmpzJywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LiRTZW5kVG9LaW5kbGUgJiYgd2luZG93LiRTZW5kVG9LaW5kbGUuV2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb0tpbmRsZSA9IGdpZ3lhLnV0aWxzLm9iamVjdC5yZW1vdmVVbmRlZmluZWQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGIuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogYi50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGIuYXV0aG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1Ymxpc2hlZDogYi5wdWJsaXNoZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZTogYi5leGNsdWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IGIucGFnaW5hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luOiBiLmFzaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJFNlbmRUb0tpbmRsZS5XaWRnZXQuaW5pdChvS2luZGxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHNjcmlwdCB3aWxsIGxvb2sgZm9yIGEgY29udGFpbmVyIHdpdGggY2xhc3MgYGtpbmRsZVdpZGdldGAgYW5kIG92ZXJyaWRlIGFueSBJRCB3aXRoIGEgbmV3IHJhbmRvbSBJRC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0IGRvZXMgdGhpcyBvbmx5IGJlY2F1c2UgaXQgbmVlZCB0aGUgZWxlbWVudCB0byBoYXZlIGFuIElELCBhbnkgSUQsIGFuZCBpdCdzIG5vdCBzbWFydCBlbm91Z2ggdG8gY2hlY2sgaWYgaXQgaGFzIG9uZSBmaXJzdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGp1c3QgcHV0IG91ciBvcmlnaW5hbCBJRCBiYWNrIGFuZCBldmVyeXRoaW5nIHdvcmtzIGZpbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbEJ1dHRvbi5pZCA9IFRoaXMuYnV0dG9uLmNvbnRhaW5lcklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsdWdpblNjb3BlLkJ1dHRvbkl0ZW1bJ2hhdGVuYS1ib29rbWFyayddLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmJ1dHRvbjtcclxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSAoYi5zaG93Q291bnRzID09ICdub25lJyA/ICdzdGFuZGFyZC1ub2JhbGxvb24nIDogKGIuc2hvd0NvdW50cyA9PSAndG9wJyA/ICd2ZXJ0aWNhbC1iYWxsb29uJyA6ICdzdGFuZGFyZC1iYWxsb29uJykpOyAvL2RlZmF1bHQgaXMgJ3JpZ2h0XHJcbiAgICAgICAgICAgICAgICB2YXIgaWNvbk9ubHkgPSBnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRUcnVlKGIucGx1Z2luLl9wLmljb25zT25seSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYi5vQnV0dG9uLmljb25Pbmx5ICE9IG51bGwpIGljb25Pbmx5ID0gZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0VHJ1ZShiLm9CdXR0b24uaWNvbk9ubHkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGljb25Pbmx5KVxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dCA9IChiLnNob3dDb3VudHMgPT0gJ25vbmUnID8gJ3NpbXBsZScgOiAoYi5zaG93Q291bnRzID09ICd0b3AnID8gJ3NpbXBsZScgOiAnc2ltcGxlLWJhbGxvb24nKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluc3QgPSBiLnBsdWdpbkluc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIG9ubHkgc3VwcG9ydGVkIGxhbmd1YWdlcywgdGhlIHRleHQgb24gdGhlIGJ1dHRvbiBkaXNzYXBlcmUgd2hlbmUgbm8gc3VwcG9ydGVkIGxhbmd1YWdlIHN1cHBsaWVkLlxyXG4gICAgICAgICAgICAgICAgdmFyIGxhbmcgPSAnamEnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGIub0J1dHRvbi5sYW5nID09ICdlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZyA9ICdlbic7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIFVVSUQgPSBnaWd5YS5fLmFwaUFkYXB0ZXIuZ2V0VG9rZW5QYXJhbShiLnBsdWdpbi5fYy5BUElLZXksICdVVUlEJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb1JlZiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1dTogVVVJRCxcclxuICAgICAgICAgICAgICAgICAgICBzOiBiLnBsdWdpbi5fcC5zb3VyY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcDogYi5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiBnaWd5YS5sb2NhbEluZm8ucHJvdG9jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGIuY29udGFpbmVySUQgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU6ICdzaGFyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSArICcgJyArICdnaWctaGF0ZW5hQm9va21hcmtCdXR0b24tJyArIGxheW91dCxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXI6IGIucGx1Z2luLnRlbXBsYXRlcy5nZXQoXCJoYXRlbmFCb29rbWFya0J1dHRvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IGxheW91dCxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJRDogYi5jb250YWluZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICByZWY6IGdpZ3lhLnV0aWxzLmtleVZhbHVlLnNlcmlhbGl6ZShvUmVmLCAnOicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IGxhbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGIuZ2V0VXNlckFjdGlvbigpLnRpdGxlXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLnByb3RvY29sICE9PSAnaHR0cHMnKSAvLyBNb1NoYXJlIG9ubHkgc3VwcG9ydCBodHRwXHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2NyaXB0LmxvYWQoZ2lneWEubG9jYWxJbmZvLnByb3RvY29sICsgJzovL2IuaGF0ZW5hLm5lLmpwL2pzL2Jvb2ttYXJrX2J1dHRvbi5qcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b25JdGVtWydsaW5laXQnXS5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgICAgIGNvbnN0YW50OiB7ICAvL2NvcGllZCBmcm9tIGxpbmUganNcclxuICAgICAgICAgICAgICAgIExJTkVfQkFTRV9VUkw6ICcvL2xpbmUubWUvUi9tc2cvdGV4dC8nLFxyXG4gICAgICAgICAgICAgICAgSU1HX0JBU0VfVVJMOiAnLy9tZWRpYS5saW5lLm1lL2ltZy9idXR0b24vJyxcclxuICAgICAgICAgICAgICAgIEFMVDoge2phOiAnTElORVxcdTMwNjdcXHU5MDAxXFx1MzA4YicsXHJcbiAgICAgICAgICAgICAgICAgICAgZW46ICdMSU5FIGl0IScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3poLWhhbnMnOiAnTElORSBpdCEnLFxyXG4gICAgICAgICAgICAgICAgICAgICd6aC1oYW50JzogJ0xJTkUgaXQhJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoLCBoZWlnaHRcclxuICAgICAgICAgICAgICAgIElNR19TSVpFOiB7amE6IHthOls4MiwyMF0sIGI6WzIwLDIwXSwgYzpbMzAsMzBdLCBkOls0MCw0MF0sIGU6WzM2LDYwXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgZW46IHthOls3OCwyMF0sIGI6WzIwLDIwXSwgYzpbMzAsMzBdLCBkOls0MCw0MF0sIGU6WzM2LDYwXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3poLWhhbnMnOiB7YTpbODQsMjBdLCBiOlsyMCwyMF0sIGM6WzMwLDMwXSwgZDpbNDAsNDBdLCBlOlszNiw2MF19LFxyXG4gICAgICAgICAgICAgICAgICAgICd6aC1oYW50Jzoge2E6Wzg0LDIwXSwgYjpbMjAsMjBdLCBjOlszMCwzMF0sIGQ6WzQwLDQwXSwgZTpbMzYsNjBdfX1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmJ1dHRvbjtcclxuICAgICAgICAgICAgICAgIHZhciB1YSA9IGIuZ2V0VXNlckFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIEMgPSB0aGlzLmNvbnN0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsYW5nID0gYi5wbHVnaW4uX3AubGFuZztcclxuICAgICAgICAgICAgICAgIGlmIChsYW5nID09ICd6aC1oaycgfHwgbGFuZyA9PSAnemgtdHcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZyA9ICd6aC1oYW5zJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFuZyAhPSAnamEnICYmIGxhbmcgIT0gJ2VuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmcgPSAnZW4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gJ2EnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNpemUgPSBDLklNR19TSVpFW2xhbmddW3R5cGVdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZ1VybCA9IFtnaWd5YS5sb2NhbEluZm8ucHJvdG9jb2wsICc6JywgQy5JTUdfQkFTRV9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmcsICcvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZVswXSwgJ3gnLCBzaXplWzFdLCAnLnBuZyddLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBiLmNvbnRhaW5lcklEICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25UeXBlOiAnc2hhcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUgKyAnICcgKyAnZ2lnLWxpbmVpdFNoYXJlQnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiBnaWd5YS51dGlscy5VUkwuVVJMRW5jb2RlKGIuZ2V0U2hhcmVVUkwoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGdpZ3lhLnV0aWxzLlVSTC5VUkxFbmNvZGUodWEudGl0bGUgfHwgJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lcjogYi5wbHVnaW4udGVtcGxhdGVzLmdldChcImxpbmVpdFNoYXJlQnV0dG9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcklEOiBiLmNvbnRhaW5lcklELFxyXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogaW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogQy5BTFRbbGFuZ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdzogc2l6ZVswXSxcclxuICAgICAgICAgICAgICAgICAgICBoOiBzaXplWzFdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbHVnaW5TY29wZS5CdXR0b24gPSBmdW5jdGlvbiAob0J1dHRvbiwgaW5kZXgsIHR5cGUsIHBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub0J1dHRvbiA9IG9CdXR0b247XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW5JbnN0YW5jZSA9IHBsdWdpbkluc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcklEID0gcGx1Z2luSW5zdGFuY2UuX3AuY29udGFpbmVySUQgKyAnLXJlYWN0aW9uJyArIGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLm5vQnV0dG9uQm9yZGVycyA9IGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdFRydWUocGx1Z2luSW5zdGFuY2UuX3Aubm9CdXR0b25Cb3JkZXJzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub0J1dHRvbi5ub0J1dHRvbkJvcmRlcnMgIT0gbnVsbCkgdGhpcy5ub0J1dHRvbkJvcmRlcnMgPSBnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRUcnVlKHRoaXMub0J1dHRvbi5ub0J1dHRvbkJvcmRlcnMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKG9CdXR0b24uZW5hYmxlQ291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb3VudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dDb3VudHMpIHRoaXMuc2hvd0NvdW50cyA9IHBsdWdpbkluc3RhbmNlLl9wLnNob3dDb3VudHM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb3VudHMpIHRoaXMuc2hvd0NvdW50cyA9IHRoaXMuc2hvd0NvdW50cy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAnc2hhcmUnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWNvbk9ubHkgPSBnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRUcnVlKHBsdWdpbkluc3RhbmNlLl9wLmljb25zT25seSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vQnV0dG9uLmljb25Pbmx5ICE9IG51bGwpIGljb25Pbmx5ID0gZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0V4cGxpY2l0VHJ1ZSh0aGlzLm9CdXR0b24uaWNvbk9ubHkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGljb25Pbmx5KSB0aGlzLm5vQnV0dG9uQm9yZGVycyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgc1Byb3ZpZGVyID0gdGhpcy5vQnV0dG9uLnByb3ZpZGVyLnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb1Byb3ZpZGVyID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLl9nZXRQcm92aWRlckJ5TmFtZShzUHJvdmlkZXIsIHBsdWdpbkluc3RhbmNlLmJvb2ttYXJrU2l0ZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICBpZiAob1Byb3ZpZGVyICYmICFpY29uT25seSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxUZXh0ID0gb1Byb3ZpZGVyLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsVGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMub0J1dHRvbi5wcm92aWRlci50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZCA9PSAnc2hhcmUnKSB7IC8vcHJlbG9hZCBzaW1wbGVTaGFyZVxyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnNjcmlwdC5sb2FkKGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9qcy9naWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaW1wbGVzaGFyZS5taW4uanMnKSwgbnVsbCwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd0NvdW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvdW50cyA9ICdyaWdodCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBsdWdpblNjb3BlLnByb3ZpZGVyU3VwcG9ydHNDb3VudGVyKHRoaXMuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q291bnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdyZWFjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaG93Q291bnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q291bnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9pZiAoIXRoaXMuaWNvbk9ubHkpIHRoaXMubGFiZWxUZXh0ID0gb0J1dHRvbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbFRleHQgPSBvQnV0dG9uLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gb0J1dHRvbi5JRDtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pZCkgdGhpcy5pZCA9IHRoaXMubGFiZWxUZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbkluc3RhbmNlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGx1Z2luLmJ1dHRvbkluc3RhbmNlcykgdGhpcy5wbHVnaW4uYnV0dG9uSW5zdGFuY2VzID0ge307XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmJ1dHRvbkluc3RhbmNlc1t0aGlzLmNvbnRhaW5lcklEXSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsdWdpblNjb3BlLkJ1dHRvbi5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgICAgICQ6IGZ1bmN0aW9uIChzKSB7IHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKSB9LFxyXG4gICAgICAgICAgICBnZXRSZWZTdHJpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsdWdpbi5nZXRJbnN0YW5jZVJlZlN0cmluZygpICsgJy5idXR0b25JbnN0YW5jZXNbXFwnJyArIHRoaXMuY29udGFpbmVySUQgKyAnXFwnXSc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlOiAnVXAnLFxyXG4gICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09ICdzaGFyZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5vblNoYXJlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAncmVhY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gJ0Rvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRGYWxzZSh0aGlzLnBsdWdpbi5fcC5jYW5jZWxSZWFjdGlvbnMpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRGYWxzZSh0aGlzLnBsdWdpbi5fcC5tdWx0aXBsZVJlYWN0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZW5hYmxlIGFsbCBvdGhlciBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidXR0b25zID0gdGhpcy5wbHVnaW4uYnV0dG9uSW5zdGFuY2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYnRuTmFtZSBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bk5hbWUgIT0gdGhpcy5jb250YWluZXJJRCkgYnV0dG9uc1tidG5OYW1lXS5lbmFibGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5vblVuZG9SZWFjdGlvbih0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmZpeERvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5vblJlYWN0aW9uKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpeERvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZUltYWdlRWxlbWVudDogZnVuY3Rpb24gKHNwcml0ZUlELCBidXR0b25JbWFnZUlELCBzcHJpdGVzUmVuZGVyZXIsIGltYWdlc09iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlSUQgPSBzcHJpdGVJRC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFySURTZWdtZW50cyA9IHNwcml0ZUlELnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJRCArICctJyArIGFySURTZWdtZW50c1swXSArICdfaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBVUkwgPSBpbWFnZXNPYmplY3RbYnV0dG9uSW1hZ2VJRF0gPyBpbWFnZXNPYmplY3RbYnV0dG9uSW1hZ2VJRF0gOiB0aGlzLnBsdWdpbi5idXR0b25JbWFnZXNbYnV0dG9uSW1hZ2VJRF07XHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMICYmIGNvbnRhaW5lci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdpbWcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNyYyA9IFVSTDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ByaXRlc1JlbmRlcmVyICYmIHNwcml0ZXNSZW5kZXJlci5zcHJpdGVEYXRhW3Nwcml0ZUlEXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGVEYXRhID0gc3ByaXRlc1JlbmRlcmVyLmdldFNwcml0ZURhdGEoc3ByaXRlSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlICE9ICd1cmwoXCInICsgc3ByaXRlc1JlbmRlcmVyLnNyYyArICdcIiknKSBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyBzcHJpdGVzUmVuZGVyZXIuc3JjICsgJ1wiKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICctJyArIHNwcml0ZURhdGEueCArICdweCAwcHgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRCdXR0b25JbWFnZUhUTUw6IGZ1bmN0aW9uIChzcHJpdGVJRCwgYnV0dG9uSW1hZ2VJRCwgaW1hZ2VFbGlkLCBzcHJpdGVzUmVuZGVyZXIsIGltYWdlc09iamVjdCwgc2l6ZSwgYWx0dGV4dCwgdGFiaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZUlEID0gc3ByaXRlSUQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHZhciBhcklEU2VnbWVudHMgPSBzcHJpdGVJRC5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIFVSTCA9IGltYWdlc09iamVjdFtidXR0b25JbWFnZUlEXSA/IGltYWdlc09iamVjdFtidXR0b25JbWFnZUlEXSA6IHRoaXMucGx1Z2luLmJ1dHRvbkltYWdlc1tidXR0b25JbWFnZUlEXTtcclxuICAgICAgICAgICAgICAgIGlmIChVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW4uZ2V0SW1hZ2VIVE1MKFVSTCwgdGhpcy5jb250YWluZXJJRCArICctJyArIGltYWdlRWxpZCArICdfaW1nJywgc2l6ZSwgYWx0dGV4dCwgdGFiaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcHJpdGVzUmVuZGVyZXIgJiYgc3ByaXRlc1JlbmRlcmVyLnNwcml0ZURhdGFbc3ByaXRlSURdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwcml0ZXNSZW5kZXJlci5nZXRIVE1MKHNwcml0ZUlELCBudWxsLCBudWxsLCB0aGlzLmNvbnRhaW5lcklEICsgJy0nICsgYXJJRFNlZ21lbnRzWzBdICsgJ19pbWcnLCBhbHR0ZXh0LCB0YWJpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFNoYXJlVVJMOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5vQnV0dG9uLnVybDtcclxuICAgICAgICAgICAgICAgIGlmICghdXJsICYmIHRoaXMub0J1dHRvbi51c2VyQWN0aW9uKSB1cmwgPSB0aGlzLm9CdXR0b24udXNlckFjdGlvbi5saW5rQmFjaztcclxuICAgICAgICAgICAgICAgIGlmICghdXJsICYmIHRoaXMucGx1Z2luLl9wW3RoaXMuaWQgKyAnVXNlckFjdGlvbiddKSB1cmwgPSB0aGlzLnBsdWdpbi5fcFt0aGlzLmlkICsgJ1VzZXJBY3Rpb24nXS5saW5rQmFjaztcclxuICAgICAgICAgICAgICAgIGlmICghdXJsICYmIHRoaXMucGx1Z2luLl9wLnVzZXJBY3Rpb24pIHVybCA9IHRoaXMucGx1Z2luLl9wLnVzZXJBY3Rpb24ubGlua0JhY2s7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXRhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0YXNbaV0uZ2V0QXR0cmlidXRlKCdwcm9wZXJ0eScpID09ICdvZzp1cmwnICYmIG1ldGFzW2ldLmdldEF0dHJpYnV0ZSgnY29udGVudCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBtZXRhc1tpXS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGluaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmtUYWcgPSBsaW5rVGFnc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtUYWcuZ2V0QXR0cmlidXRlKCdyZWwnKSA9PSAnY2Fub25pY2FsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gbGlua1RhZy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdXJsKSB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0VXNlckFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHVzZXJBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vQnV0dG9uLnVzZXJBY3Rpb24pIHVzZXJBY3Rpb24gPSB0aGlzLm9CdXR0b24udXNlckFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICghdXNlckFjdGlvbiAmJiB0aGlzLnBsdWdpbi5fcFt0aGlzLmlkICsgJ1VzZXJBY3Rpb24nXSkgdXNlckFjdGlvbiA9IHRoaXMucGx1Z2luLl9wW3RoaXMuaWQgKyAnVXNlckFjdGlvbiddO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyQWN0aW9uICYmIHRoaXMucGx1Z2luLl9wLnVzZXJBY3Rpb24pIHVzZXJBY3Rpb24gPSB0aGlzLnBsdWdpbi5fcC51c2VyQWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdXNlckFjdGlvbiA9IG5ldyBnaWd5YS5zb2NpYWxpemUuVXNlckFjdGlvbih1c2VyQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHVzZXJBY3Rpb24ubGlua0JhY2sgPSB0aGlzLmdldFNoYXJlVVJMKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlckFjdGlvblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRUaHVtYm5haWxVUkw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB1YSA9IHRoaXMuZ2V0VXNlckFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lZGlhSXRlbXMgPSB1YVsnbWVkaWFJdGVtcyddO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lZGlhO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lZGlhSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IG1lZGlhSXRlbXMubGVuZ3RoOyB1KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lZGlhSXRlbSA9IG1lZGlhSXRlbXNbdV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZWRpYUl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lZGlhSXRlbS50eXBlID09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYSA9IG1lZGlhSXRlbS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVkaWFJdGVtLnR5cGUgPT0gJ3ZpZGVvJyB8fCBtZWRpYUl0ZW0udHlwZSA9PSAnZmxhc2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWEgPSBtZWRpYUl0ZW0ucHJldmlld0ltYWdlVVJMO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lZGlhO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRIVE1MOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHBsdWdpblNjb3BlLkJ1dHRvbkl0ZW1bdGhpcy5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWMpIGMgPSBwbHVnaW5TY29wZS5CdXR0b25JdGVtLmdlbmVyaWM7XHJcbiAgICAgICAgICAgICAgICB2YXIgb0J1dHRvbkl0ZW0gPSBuZXcgYyh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG9CdXR0b25JdGVtLml0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLmhyZWYpIGl0ZW0uaHJlZiA9IGdpZ3lhLnV0aWxzLnNhbml0aXplLnNhbml0aXplQXR0cmlidXRlKHRoaXMuZ2V0U2hhcmVVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAob0J1dHRvbkl0ZW0ucmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBvQnV0dG9uSXRlbS5yZW5kZXIoKSB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGxheW91dCA9IHRoaXMucGx1Z2luLl9wLmxheW91dDtcclxuICAgICAgICAgICAgICAgIGlmIChsYXlvdXQpIGxheW91dCA9IGxheW91dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAnZ2lnLWJ1dHRvbi1jb250YWluZXIgZ2lnLWJ1dHRvbi1jb250YWluZXItY291bnQtJyArIHRoaXMuc2hvd0NvdW50cyArICcgZ2lnLWJ1dHRvbi1jb250YWluZXItJyArIHRoaXMuaWQgKyAnIGdpZy1idXR0b24tY29udGFpbmVyLScgKyB0aGlzLmlkICsgJy1jb3VudC0nICsgdGhpcy5zaG93Q291bnRzICsgJyBnaWctJGJ1dHRvblR5cGUtYnV0dG9uLWNvbnRhaW5lciBnaWctYnV0dG9uLWNvbnRhaW5lci1ob3Jpem9udGFsJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9ICdnaWctYnV0dG9uLWNvbnRhaW5lciBnaWctYnV0dG9uLWNvbnRhaW5lci0nICsgdGhpcy5pZCArICcgZ2lnLWJ1dHRvbi1jb250YWluZXItY291bnQtJyArIHRoaXMuc2hvd0NvdW50cyArICcgZ2lnLSRidXR0b25UeXBlLWJ1dHRvbi1jb250YWluZXIgZ2lnLWJ1dHRvbi1jb250YWluZXItdmVydGljYWwgZ2lnLSRidXR0b25UeXBlLWJ1dHRvbi1jb250YWluZXItdmVydGljYWwnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uY2VsbFZhbGlnbikgaXRlbS5jZWxsVmFsaWduID0gJ2JvdHRvbSc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLmlkKSBpdGVtLmlkID0gdGhpcy5jb250YWluZXJJRDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi5fcC5idXR0b25UZW1wbGF0ZSB8fCB0aGlzLnBsdWdpbi5fcC5idXR0b25XaXRoQ291bnRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbS5idXR0b25Db250YWluZXIgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmJ1dHRvbkNvbnRhaW5lciA9IGl0ZW0uYnV0dG9uQ29udGFpbmVyKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmJ1dHRvbkNvbnRhaW5lciA9ICc8ZGl2IGlkPVwiJGlkXCIgY2xhc3M9XCJnaWctYnV0dG9uLXVwXCIgIHRpdGxlPVwiJHRvb2x0aXBcIiBhbHQ9XCIkdG9vbHRpcFwiPicgKyBpdGVtLmJ1dHRvbkNvbnRhaW5lciArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0aGlzLnBsdWdpbi50ZW1wbGF0ZXMuZ2V0KFwiYnV0dG9uUm93XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsdWdpbi5fcFsnd3JhcCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0aGlzLnBsdWdpbi50ZW1wbGF0ZXMuZ2V0KFwiYnV0dG9uV2l0aG91dENlbGxcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGhpcy5wbHVnaW4udGVtcGxhdGVzLmdldChcImJ1dHRvbkNlbGxcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGVtcGxhdGUsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaXhEb3duOiBmdW5jdGlvbiAoZG9udFNhdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRGYWxzZSh0aGlzLnBsdWdpbi5fcC5tdWx0aXBsZVJlYWN0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2Rpc2FibGUgYWxsIG90aGVyIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBidXR0b25zID0gdGhpcy5wbHVnaW4uYnV0dG9uSW5zdGFuY2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGJ0bk5hbWUgaW4gYnV0dG9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuTmFtZSAhPSB0aGlzLmNvbnRhaW5lcklEKSBidXR0b25zW2J0bk5hbWVdLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICghZG9udFNhdmUpIHRoaXMuc2F2ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVuZml4RG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgndXAnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCd1cCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzYXZlU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkb3duU3RhdGUgPSAodGhpcy5zdGF0ZSA9PSAnRG93bicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0RG93blN0YXRlKHRoaXMuaWQsIGRvd25TdGF0ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzRG93biA9IHRoaXMucGx1Z2luLmdldERvd25TdGF0ZSh0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0Rvd24pIHRoaXMuZml4RG93bih0cnVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHN0YXRlLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RhdGUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9sZFN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtSUQgPSB0aGlzLmNvbnRhaW5lcklEO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBlbEl0ZW0gPSB0aGlzLiQoaXRlbUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbEl0ZW0uY2xhc3NOYW1lID0gZWxJdGVtLmNsYXNzTmFtZS5yZXBsYWNlKCdnaWctYnV0dG9uLScgKyBvbGRTdGF0ZS50b0xvd2VyQ2FzZSgpLCAnZ2lnLWJ1dHRvbi0nICsgc3RhdGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVmdEltZyA9IHRoaXMuJChpdGVtSUQgKyAnLWxlZnRfaW1nJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWNvbkltZ1REID0gdGhpcy4kKGl0ZW1JRCArICctaWNvbicpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHRURCA9IHRoaXMuJChpdGVtSUQgKyAnLXRleHQnKTtcclxuICAgICAgICAgICAgICAgIHZhciByaWdodEltZyA9IHRoaXMuJChpdGVtSUQgKyAnLXJpZ2h0X2ltZycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpY29uSW1nID0gdGhpcy4kKGl0ZW1JRCArICctaWNvbl9pbWcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYmkgPSB0aGlzLnBsdWdpbi5idXR0b25JbWFnZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub0J1dHRvbkJvcmRlcnMpIGJpID0geyBjb3VudEJHSW1nOiBiaS5jb3VudEJHSW1nIH07IC8vaWNvbiBvbmx5IG1lYW5zIG5vIGJ1dHRvbiBpbWFnZXMgKGV4Y2VwdCBmb3IgY291bnQpXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvblNwcml0ZVJlbmRlcmVyID0gdGhpcy5wbHVnaW4uc3ByaXRlUmVuZGVyZXIuYnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgdmFyIGljb25TcHJpdGVSZW5kZXJlciA9IHRoaXMucGx1Z2luLnNwcml0ZVJlbmRlcmVyLmljb25zO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm5vQnV0dG9uQm9yZGVycykgdGhpcy51cGRhdGVJbWFnZUVsZW1lbnQoJ2xlZnQtJyArIHN0YXRlLCAnYnV0dG9uTGVmdEltZycgKyBzdGF0ZSwgYnV0dG9uU3ByaXRlUmVuZGVyZXIsIGJpKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ub0J1dHRvbkJvcmRlcnMpIHRoaXMudXBkYXRlSW1hZ2VFbGVtZW50KCdyaWdodC0nICsgc3RhdGUsICdidXR0b25SaWdodEltZycgKyBzdGF0ZSwgYnV0dG9uU3ByaXRlUmVuZGVyZXIsIGJpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2VFbGVtZW50KCdpY29uLScgKyBzdGF0ZSwgJ2ljb25JbWcnICsgc3RhdGUsIGljb25TcHJpdGVSZW5kZXJlciwgdGhpcy5vQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubm9CdXR0b25Cb3JkZXJzICYmIGljb25JbWdURCAmJiBiaVsnYnV0dG9uQ2VudGVyQkdJbWcnICsgc3RhdGVdKSBpY29uSW1nVEQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyBiaVsnYnV0dG9uQ2VudGVyQkdJbWcnICsgc3RhdGVdICsgJ1wiKSc7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubm9CdXR0b25Cb3JkZXJzICYmIHRleHRURCAmJiBiaVsnYnV0dG9uQ2VudGVyQkdJbWcnICsgc3RhdGVdKSB0ZXh0VEQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyBiaVsnYnV0dG9uQ2VudGVyQkdJbWcnICsgc3RhdGVdICsgJ1wiKSc7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pZiAoaWNvbkltZyAmJiB0aGlzLm9CdXR0b25bJ2ljb25JbWcnICsgc3RhdGVdKSBpY29uSW1nLnNyYyA9IHRoaXMub0J1dHRvblsnaWNvbkltZycgKyBzdGF0ZV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b29sdGlwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PSAnRGlzYWJsZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsSXRlbS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXAgPSB0aGlzLm9CdXR0b24uZGlzYWJsZWRUb29sdGlwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsSXRlbS5zdHlsZS5jdXJzb3IgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcCA9IHRoaXMub0J1dHRvbi50b29sdGlwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRvb2x0aXApIHRvb2x0aXAgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBlbEl0ZW0udGl0bGUgPSB0b29sdGlwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsSXRlbS5hbHQgPSB0b29sdGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGRhdGVDb3VudDogZnVuY3Rpb24gKGNvdW50VmFsdWUsIGRvbnRVcGRhdGVPdGhlcnMsIHBlcmNlbnRPZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcGVyY2VudE9mZnNldCkgcGVyY2VudE9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRWYWx1ZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uX3AuZGlzcGxheUNvdW50VGhyZXNob2xkICYmIGNvdW50VmFsdWUgPCB0aGlzLnBsdWdpbi5fcC5kaXNwbGF5Q291bnRUaHJlc2hvbGQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRWYWx1ZSA9IGNvdW50VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1jb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50VmFsdWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklEICsgJy1jb3VudC12YWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50Q29udGFpbmVyKSBjb3VudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHVzZVBlcmNlbnRhZ2UgPSAodGhpcy50eXBlID09ICdyZWFjdGlvbicgJiYgdGhpcy5wbHVnaW5JbnN0YW5jZS5fcC5jb3VudFR5cGUgJiYgdGhpcy5wbHVnaW5JbnN0YW5jZS5fcC5jb3VudFR5cGUudG9Mb3dlckNhc2UoKSA9PSAncGVyY2VudGFnZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZVBlcmNlbnRhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbHVnaW5JbnN0YW5jZS5fdG90YWxDb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50VmFsdWUgPSAnMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50VmFsdWUgPSBNYXRoLnJvdW5kKHRoaXMuY291bnRWYWx1ZSAqIDEwMCAvIHRoaXMucGx1Z2luSW5zdGFuY2UuX3RvdGFsQ291bnQpICsgcGVyY2VudE9mZnNldCArICclJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb250VXBkYXRlT3RoZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidXR0b25zID0gdGhpcy5wbHVnaW4uYnV0dG9uSW5zdGFuY2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBidG5OYW1lIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG5OYW1lICE9IHRoaXMuY29udGFpbmVySUQpIGJ1dHRvbnNbYnRuTmFtZV0udXBkYXRlQ291bnQoYnV0dG9uc1tidG5OYW1lXS5jb3VudFZhbHVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50VmFsdWUgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50VmFsdWUgPSBNYXRoLnJvdW5kKGNvdW50VmFsdWUgLyAxMDAwKSArICdLJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRWYWx1ZUNvbnRhaW5lcikgY291bnRWYWx1ZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJyArIGNvdW50VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlUGVyY2VudGFnZSAmJiAhZG9udFVwZGF0ZU90aGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLm5vcm1hbGl6ZVBlcmNlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGVDb3VudDogZnVuY3Rpb24gKGNvdW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySUQgKyAnLWNvdW50Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRDb250YWluZXIpIGNvdW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsdWdpblNjb3BlLnJlYWN0aW9uc1BsdWdpbi5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgICAgICQ6IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwpIH0sXHJcbiAgICAgICAgICAgIFRFWFQ6IGZ1bmN0aW9uICh0ZXh0S2V5LCByZXBsYWNlU3RyLCB3aXRoU3RyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lneWEucGx1Z2luVXRpbHMubGFuZy5nZXRMb2NhbGl6ZWRUZXh0KCdnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5yZWFjdGlvbnMuanMnLCB0ZXh0S2V5LCB0aGlzLl9wLmxhbmcsIHJlcGxhY2VTdHIsIHdpdGhTdHIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRJbWFnZUhUTUw6IGZ1bmN0aW9uIChzcmMsIGltZ0lkLCBzaXplLCBhbHR0ZXh0LCB0YWJpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhYmluZGV4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMuZ2V0KFwiaW1hZ2VcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSkgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlcy5nZXQoXCJpbWFnZVdpdGhTaXplXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCB7IHNyYzogc3JjLCBpbWdJZDogaW1nSWQsIHNpemU6IHNpemUsIGFsdHRleHQ6IGFsdHRleHQsIHRhYmluZGV4OiB0YWJpbmRleCB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVwb3J0U2hhcmU6IGZ1bmN0aW9uIChwcm92aWRlciwgVVJMKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlRGF0YSA9IHRoaXMuX3Auc291cmNlRGF0YSA/IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZSh0aGlzLl9wLnNvdXJjZURhdGEpIDoge307XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VEYXRhLnByb3ZpZGVyID0gcHJvdmlkZXI7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VEYXRhLnVybCA9IFVSTDtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnJlcG9ydHMucmVwb3J0KCdzaGFyZScsIHRoaXMuX2MuQVBJS2V5LCB0aGlzLl9jLmNpZCwgdGhpcy5fcC5zb3VyY2UsIHNvdXJjZURhdGEsIHsgdGFnczogdGhpcy5fcC50YWdzIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRJbnN0YW5jZVJlZlN0cmluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5yZWFjdGlvbnMuaW5zdGFuY2VzW1xcJycgKyB0aGlzLl9lbGlkICsgJ1xcJ10nO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkRG93blN0YXRlczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9Eb3duU3RhdGVzID0ge307XHJcbiAgICAgICAgICAgICAgICB2YXIgc1N0YXRlID0gZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlYWN0aW9uU3RhdGUtZG93bl8nICsgdGhpcy5fYmFySUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhclN0YXRlcyA9IHNTdGF0ZS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJTdGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb0Rvd25TdGF0ZXNbYXJTdGF0ZXNbaV1dID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb0Rvd25TdGF0ZXMgPSBvRG93blN0YXRlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX29Eb3duU3RhdGVzID0gb0Rvd25TdGF0ZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldERvd25TdGF0ZTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29Eb3duU3RhdGVzW2tleV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldERvd25TdGF0ZTogZnVuY3Rpb24gKGtleSwgaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vRG93blN0YXRlc1trZXldID0gaXNEb3duO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyU3RhdGVzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzdGF0ZUtleSBpbiB0aGlzLl9vRG93blN0YXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vRG93blN0YXRlc1tzdGF0ZUtleV0pIGFyU3RhdGVzLnB1c2goc3RhdGVLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlYWN0aW9uU3RhdGUtZG93bl8nICsgdGhpcy5fYmFySUQsIGFyU3RhdGVzLmpvaW4oJywnKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRyYXc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLiQodGhpcy5fZWxpZCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyUGFyZW50ID0gY29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50SUQgPSB0aGlzLl9lbGlkICsgJ19naWdfY29udGFpbmVyUGFyZW50JztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLnBhcmVudE5vZGUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SUQgPSBjb250YWluZXIucGFyZW50Tm9kZS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5pZCA9IHBhcmVudElEO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERvd25TdGF0ZXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcC5sYXlvdXQgPT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BbJ3dyYXAnXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wLmNzc1ByZWZpeCB8fCBwbHVnaW5TY29wZS5pbnN0YW5jZXNfc2l6ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLmFkZENTUyhwbHVnaW5TY29wZS5kZWZhdWx0Q3NzLCB0aGlzLl9wLmNzc1ByZWZpeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5nbG9iYWwuYWRkQ1NTKHBsdWdpblNjb3BlLm1vYmlsZUNzcywgdGhpcy5fcC5jc3NQcmVmaXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmdsb2JhbC5hZGRDU1MocGx1Z2luU2NvcGUubm9uTW9iaWxlQ3NzLCB0aGlzLl9wLmNzc1ByZWZpeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBwbHVnaW5TY29wZS5jcmVhdGVEZWZhdWx0VGVtcGxhdGVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BbJ2J1dHRvblRlbXBsYXRlJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnV0dG9uVGVtcGxhdGUgPSB0aGlzLl9wWydidXR0b25UZW1wbGF0ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGVzLnNldCgnYnV0dG9uV2l0aG91dENvdW50JywgYnV0dG9uVGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pLmJ1dHRvbnNUeXBlID09ICdyZWFjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZXMuc2V0KCdidXR0b25XaXRoQ291bnRUb3AnLCBidXR0b25UZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGVzLnNldCgnYnV0dG9uV2l0aENvdW50UmlnaHQnLCBidXR0b25UZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYnV0dG9uVGVtcGxhdGUgPT0gJ3N0cmluZycgJiYgYnV0dG9uVGVtcGxhdGUuaW5kZXhPZignJGNvdW50JykgIT0gLTEpIHRoaXMudXNpbmdDb3VudFRlbXBsYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcFsnYnV0dG9uV2l0aENvdW50VGVtcGxhdGUnXSAmJiB0aGlzLl9pLmJ1dHRvbnNUeXBlID09ICdzaGFyZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnV0dG9uV2l0aENvdW50VGVtcGxhdGUgPSB0aGlzLl9wWydidXR0b25XaXRoQ291bnRUZW1wbGF0ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGVzLnNldCgnYnV0dG9uV2l0aENvdW50VG9wJywgYnV0dG9uV2l0aENvdW50VGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGVzLnNldCgnYnV0dG9uV2l0aENvdW50UmlnaHQnLCBidXR0b25XaXRoQ291bnRUZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBidXR0b25XaXRoQ291bnRUZW1wbGF0ZSA9PSAnc3RyaW5nJyAmJiBidXR0b25XaXRoQ291bnRUZW1wbGF0ZS5pbmRleE9mKCckY291bnQnKSAhPSAtMSkgdGhpcy51c2luZ0NvdW50VGVtcGxhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uSW1hZ2VzID0gdGhpcy5fcFsnYnV0dG9uSW1hZ2VzJ107XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9TcHJpdGVHcm91cHMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYnV0dG9uSW1hZ2VzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pLmJ1dHRvbnNUeXBlID09ICdzaGFyZScpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWdCYXNlID0gZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvc2hhcmVCYXIvYnV0dG9uL21vYmlsZS8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uSW1hZ2VzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNlbnRlckJHSW1nVXA6IGltZ0Jhc2UgKyAnYnV0dG9uQ2VudGVySW1nVXAucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb1Nwcml0ZUdyb3Vwcy5idXR0b24gPSB7IHBhdGg6ICcvc2hhcmVCYXIvYnV0dG9uL21vYmlsZS9idXR0b25bbGVmdCxyaWdodF1JbWdbdXBdLnBuZycsIHc6IDUsIGg6IDM1IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nQmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL3NoYXJlQmFyL2J1dHRvbi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uSW1hZ2VzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNlbnRlckJHSW1nVXA6IGltZ0Jhc2UgKyAnYnV0dG9uQ2VudGVySW1nVXAucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25DZW50ZXJCR0ltZ092ZXI6IGltZ0Jhc2UgKyAnYnV0dG9uQ2VudGVySW1nVXAucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb1Nwcml0ZUdyb3Vwcy5idXR0b24gPSB7IHBhdGg6ICcvc2hhcmVCYXIvYnV0dG9uL2J1dHRvbltsZWZ0LHJpZ2h0XUltZ1t1cCxvdmVyXS5wbmcnLCB3OiAyLCBoOiAyMCB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb1Nwcml0ZUdyb3Vwcy5idXR0b24gPSB7IHBhdGg6ICcvc2hhcmVCYXIvYnV0dG9uL2J1dHRvbltsZWZ0LHJpZ2h0XUltZ1t1cCxvdmVyLGRvd24sZGlzYWJsZWRdLnBuZycsIHc6IDIsIGg6IDIwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWdCYXNlID0gZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvcmVhY3Rpb25zL2RlZmF1bHQvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uSW1hZ2VzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2VudGVyQkdJbWdVcDogaW1nQmFzZSArICdidXR0b25DZW50ZXJJbWdVcC5naWYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2VudGVyQkdJbWdPdmVyOiBpbWdCYXNlICsgJ2J1dHRvbkNlbnRlckltZ0JHT3Zlci5naWYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2VudGVyQkdJbWdEaXNhYmxlZDogaW1nQmFzZSArICdidXR0b25DZW50ZXJCR0ltZ0Rpc2FibGVkLmdpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25DZW50ZXJCR0ltZ0Rvd246IGltZ0Jhc2UgKyAnYnV0dG9uQ2VudGVySW1nQkdEb3duLmdpZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcC5zaG93Q291bnRzID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uSW1hZ2VzLmNvdW50QkdJbWcgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9yZWFjdGlvbnMvZGVmYXVsdC9yaWdodENvdW50SW1nLmdpZicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcC5zaG93Q291bnRzID09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvU3ByaXRlR3JvdXBzLmNvdW50ID0geyBwYXRoOiAnL3NoYXJlQmFyL2J1dHRvbi9tb2JpbGUvdG9wQ291bnRJbWcucG5nJywgdzogODcsIGg6IDUzIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb1Nwcml0ZUdyb3Vwcy5jb3VudCA9IHsgcGF0aDogJy9zaGFyZUJhci9idXR0b24vdG9wQ291bnRJbWcucG5nJywgdzogNTUsIGg6IDM3IH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9TcHJpdGVHcm91cHMuY291bnQgPSB7IHBhdGg6ICcvc2hhcmVCYXIvYnV0dG9uL21vYmlsZS9yaWdodENvdW50SW1nLnBuZycsIHc6IDQ1LCBoOiAzNSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9TcHJpdGVHcm91cHMuY291bnQgPSB7IHBhdGg6ICcvc2hhcmVCYXIvYnV0dG9uL3JpZ2h0Q291bnRJbWcucG5nJywgdzogMzgsIGg6IDIwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbWFnZSBwcmVsb2FkaW5nXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUNhY2hlID0geyBsb2FkZWRDb3VudDogMCwgaW1nczogW10sIGltZ0NvdW50OiAwIH07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBiIGluIHRoaXMuYnV0dG9uSW1hZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUNhY2hlLmltZ0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbWFnZUNhY2hlLmltZ0NvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlQ2FjaGUgPSB0aGlzLmltYWdlQ2FjaGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuY0ltZ09ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VDYWNoZS5sb2FkZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VDYWNoZS5sb2FkZWRDb3VudCA9PSBpbWFnZUNhY2hlLmltZ0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIuc3R5bGUpIGNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnIH0sIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgZm9yIChidG5JbWcgaW4gdGhpcy5idXR0b25JbWFnZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZuY0ltZ09ubG9hZDtcclxuICAgICAgICAgICAgICAgICAgICBpbWcub25lcnJvciA9IGZuY0ltZ09ubG9hZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bkltZyA9PSAnY291bnRCR0ltZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Auc2hvd0NvdW50cyA9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuY0ltZ09ubG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWdUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbHMgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbHNbaV0uY2xhc3NOYW1lLmluZGV4T2YoJ2dpZy1jb3VudGVyJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc1tpXS5zdHlsZS53aWR0aCA9IGltZ1RoaXMud2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzW2ldLnN0eWxlLmhlaWdodCA9IGltZ1RoaXMuaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc1tpXS5zdHlsZS56b29tID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzW2ldLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbmNJbWdPbmxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25sb2FkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuSW1nID09ICdidXR0b25DZW50ZXJCR0ltZ1VwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltZ1RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVscyA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsc1tpXS5jbGFzc05hbWUuaW5kZXhPZignZ2lnLWJ1dHRvbi10ZCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNbaV0uc3R5bGUuaGVpZ2h0ID0gaW1nVGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuY0ltZ09ubG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmxvYWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB0aGlzLmJ1dHRvbkltYWdlc1tidG5JbWddO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlQ2FjaGUuY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZUNhY2hlLmltZ3MucHVzaChpbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhckhUTUwgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYXJCdXR0b25zO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBidXR0b25zVHlwZSA9IHRoaXMuX2kuYnV0dG9uc1R5cGU7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm5VcGRhdGVDb3VudHM7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChidXR0b25zVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NoYXJlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJlQnV0dG9ucyA9IHRoaXMuX3Auc2hhcmVCdXR0b25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNoYXJlQnV0dG9ucyA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJCdXR0b25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJTaGFyZUJ1dHRvbnMgPSBzaGFyZUJ1dHRvbnMuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyU2hhcmVCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9CdXR0b24gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc1Byb3ZpZGVyID0gYXJTaGFyZUJ1dHRvbnNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9CdXR0b24ucHJvdmlkZXIgPSBzUHJvdmlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJCdXR0b25zLnB1c2gob0J1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckJ1dHRvbnMgPSBzaGFyZUJ1dHRvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdBckJ1dHRvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyUHJvdmlkZXJzSWNvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3RQYXRoID0gJy9zaGFyZWJhci9pY29ucy8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWNvblNpemUgPSAxNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdFBhdGggKz0gJ21vYmlsZS8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblNpemUgPSAyNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9CdXR0b24gPSBhckJ1dHRvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9CdXR0b24pIGNvbnRpbnVlOyAvL0lFOCBidWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzUHJvdmlkZXIgPSBvQnV0dG9uLnByb3ZpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzUHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzUHJvdmlkZXIgPSBzUHJvdmlkZXIuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fZ2V0UHJvdmlkZXJCeU5hbWUoc1Byb3ZpZGVyLCB0aGlzLmJvb2ttYXJrU2l0ZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIgPT0gbnVsbCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSBwcm92aWRlci5uYW1lLnNwbGl0KCctJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhclByb3ZpZGVyc0ljb25zLnB1c2goaWNvbk5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb0J1dHRvbi5pY29uSW1nVXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvQnV0dG9uLmRlZmF1bHRJY29uSW1nVXAgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaScgKyByb290UGF0aCArIGljb25OYW1lICsgJy5wbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvQnV0dG9uLmljb25TaXplID0gaWNvblNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBckJ1dHRvbnMucHVzaChhckJ1dHRvbnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvU3ByaXRlR3JvdXBzLmljb25zID0geyBwYXRoOiByb290UGF0aCArICdbJyArIGFyUHJvdmlkZXJzSWNvbnMuam9pbignLCcpICsgJ10ucG5nJywgdzogaWNvblNpemUsIGg6IGljb25TaXplIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyQnV0dG9ucyA9IG5ld0FyQnV0dG9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm5VcGRhdGVDb3VudHMgPSB0aGlzLnVwZGF0ZVNoYXJlQ291bnRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVhY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuVXBkYXRlQ291bnRzID0gdGhpcy51cGRhdGVSZWFjdGlvbnNDb3VudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyQnV0dG9ucyA9IHRoaXMuX3AucmVhY3Rpb25zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVSZW5kZXJlciA9IGdpZ3lhLmdsb2JhbC5nZXRTcHJpdGVSZW5kZXJlcnMob1Nwcml0ZUdyb3Vwcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGF5b3V0ID0gdGhpcy5fcC5sYXlvdXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobGF5b3V0KSBsYXlvdXQgPSBsYXlvdXQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc1ZlcnRpY2FsID0gKGxheW91dCA9PSAndmVydGljYWwnKTtcclxuICAgICAgICAgICAgICAgIHZhciBzaG93Q291bnRzID0gdGhpcy5fcC5zaG93Q291bnRzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dDb3VudHMpIHNob3dDb3VudHMgPSBzaG93Q291bnRzLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9wWyd3cmFwJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUwucHVzaCgnPHRhYmxlIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj4nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goJzx0cj4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgZmJMaWtlUG9zaXRpb24gPSAnZmlyc3QnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3AuZmFjZWJvb2tMaWtlQnV0dG9uICYmIHRoaXMuX3AuZmFjZWJvb2tMaWtlQnV0dG9uLnBvc2l0aW9uKSBmYkxpa2VQb3NpdGlvbiA9IHRoaXMuX3AuZmFjZWJvb2tMaWtlQnV0dG9uLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgZmJMaWtlUG9zaXRpb24gPSBmYkxpa2VQb3NpdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBmYkJ1dHRvbkNsYXNzID0gJ2dpZy1mYWNlYm9va0xpa2VCdXR0b24nO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZiTGlrZVBvc2l0aW9uID09ICdmaXJzdCcpIGZiQnV0dG9uQ2xhc3MgPSAnZ2lnLWZhY2Vib29rTGlrZUJ1dHRvbi1maXJzdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZiTGlrZVBvc2l0aW9uID09ICdsYXN0JykgZmJCdXR0b25DbGFzcyA9ICdnaWctZmFjZWJvb2tMaWtlQnV0dG9uLWxhc3QnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChidXR0b25zVHlwZSA9PSAnc2hhcmUnICYmIHRoaXMuX3AuZmFjZWJvb2tMaWtlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9GYkxpa2UgPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUodGhpcy5fcC5mYWNlYm9va0xpa2VCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIG9GYkxpa2UucHJvdmlkZXIgPSAnZmFjZWJvb2stbGlrZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZiTGlrZVBvc2l0aW9uID09ICdmaXJzdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJCdXR0b25zLnNwbGljZSgwLCAwLCBvRmJMaWtlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZiTGlrZVBvc2l0aW9uID09ICdsYXN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhckJ1dHRvbnMucHVzaChvRmJMaWtlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhckJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFyQnV0dG9uc1tpXSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ0biA9IG5ldyBwbHVnaW5TY29wZS5CdXR0b24oYXJCdXR0b25zW2ldLCBpLCBidXR0b25zVHlwZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goYnRuLmdldEhUTUwoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3BbJ3dyYXAnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhckhUTUwucHVzaCgnPC90cj4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhckhUTUwucHVzaCgnPC90YWJsZT4nKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImdpZy1iYXItY29udGFpbmVyIGdpZy0nICsgYnV0dG9uc1R5cGUgKyAnLWJhci1jb250YWluZXJcIj4nICsgYXJIVE1MLmpvaW4oJycpICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBidG5JRCBpbiB0aGlzLmJ1dHRvbkluc3RhbmNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5idXR0b25JbnN0YW5jZXNbYnRuSURdLmhpZGVDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uSW5zdGFuY2VzW2J0bklEXS5sb2FkU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZuVXBkYXRlQ291bnRzLmFwcGx5KHRoaXMsIFtzaG93Q291bnRzXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnbG9hZCcsIGNvbnRhaW5lcklEOiB0aGlzLl9wWydjb250YWluZXJJRCddIH0sIHRoaXMuX3ApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gVGhpcy5vblJlc2l6ZSgpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uUmVzaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy4kKHRoaXMuX2VsaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikgY29udGFpbmVyLnN0eWxlLndpZHRoID0gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZVNoYXJlQ291bnRzOiBmdW5jdGlvbiAoc2hvd0NvdW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dDb3VudHMgPT0gJ25vbmUnKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXJzRm9yU2hhcmUgPSAnJztcclxuICAgICAgICAgICAgICAgIHZhciBnZXRDb3VudFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkUHJvdmlkZXJzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBVUkw6IHRoaXMuX3AudXNlckFjdGlvbi5saW5rQmFjayxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHJlcykgeyBUaGlzLnVwZGF0ZUNvdW50cyhyZXMuc2hhcmVDb3VudHMsICdpZCcpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVUaW1lb3V0OiB0aGlzLl9wLnNoYXJlQ291bnRDYWNoZVRpbWVvdXRcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYnRuSUQgaW4gdGhpcy5idXR0b25JbnN0YW5jZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXJDb3VudE5hbWUgPSB0aGlzLmJ1dHRvbkluc3RhbmNlc1tidG5JRF0ub0J1dHRvbi5wcm92aWRlci50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyc0ZvclNoYXJlLmluZGV4T2YocHJvdmlkZXJDb3VudE5hbWUpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyc0ZvclNoYXJlICs9IHByb3ZpZGVyQ291bnROYW1lICsgJywnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBidG5JRCBpbiB0aGlzLmJ1dHRvbkluc3RhbmNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IHRoaXMuYnV0dG9uSW5zdGFuY2VzW2J0bklEXS5vQnV0dG9uLnByb3ZpZGVyLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIgPT0gJ3NoYXJlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDb3VudFBhcmFtcy5lbmFibGVkUHJvdmlkZXJzID0gcHJvdmlkZXJzRm9yU2hhcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q291bnRQYXJhbXNbcHJvdmlkZXIgKyAnVVJMJ10gPSB0aGlzLl9wLmNvdW50VVJMIHx8IHRoaXMuYnV0dG9uSW5zdGFuY2VzW2J0bklEXS5vQnV0dG9uLmNvdW50VVJMIHx8IHRoaXMuYnV0dG9uSW5zdGFuY2VzW2J0bklEXS5nZXRTaGFyZVVSTCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0Q291bnRQYXJhbXMuZW5hYmxlZFByb3ZpZGVycyAhPSBwcm92aWRlcnNGb3JTaGFyZSkgZ2V0Q291bnRQYXJhbXMuZW5hYmxlZFByb3ZpZGVycyArPSBwcm92aWRlciArICcsJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuZ2V0UHJvdmlkZXJTaGFyZUNvdW50cyh0aGlzLl9jLCBnZXRDb3VudFBhcmFtcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZVJlYWN0aW9uc0NvdW50czogZnVuY3Rpb24gKHNob3dDb3VudHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBidXR0b25JRHMgPSAnJztcclxuICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGJ0bklEIGluIHRoaXMuYnV0dG9uSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gdGhpcy5idXR0b25JbnN0YW5jZXNbYnRuSURdLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbklEcyArPSBwcm92aWRlciArICcsJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghYnV0dG9uSURzKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhcklEOiB0aGlzLl9iYXJJRCxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25JRHM6IGJ1dHRvbklEcyxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yQ29kZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKFRoaXMuX3AsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb3VudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvQ291bnRzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5jb3VudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvQ291bnRzW3Jlcy5jb3VudHNbaV0uYnV0dG9uSWRdID0gcmVzLmNvdW50c1tpXS5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLnVwZGF0ZUNvdW50cyhvQ291bnRzLCAnaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2luZ0NvdW50VGVtcGxhdGUgJiYgKHNob3dDb3VudHMgPT0gbnVsbCB8fCBzaG93Q291bnRzID09ICdub25lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucmVwb3J0TG9hZCA9ICdyZXBvcnRPbmx5JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJlcG9ydExvYWQgPSAneWVzJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5nZXRSZWFjdGlvbnNDb3VudCh0aGlzLl9jLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnVwZGF0ZUNvdW50cyh7Y29vbDo0OTIsYW1hemluZzozMjd9LCdJRCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3JtYWxpemVQZXJjZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsUm91bmRlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBidG5JRCBpbiB0aGlzLmJ1dHRvbkluc3RhbmNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBidG4gPSB0aGlzLmJ1dHRvbkluc3RhbmNlc1tidG5JRF07XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmRlbHRhID0gTWF0aC5yb3VuZChidG4uY291bnRWYWx1ZSAvIHRoaXMuX3RvdGFsQ291bnQgKiAxMDApIC0gKGJ0bi5jb3VudFZhbHVlIC8gdGhpcy5fdG90YWxDb3VudCAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSb3VuZGVkICs9IE1hdGgucm91bmQoYnRuLmNvdW50VmFsdWUgLyB0aGlzLl90b3RhbENvdW50ICogMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdG90YWxEZWx0YSA9IHRvdGFsUm91bmRlZCAtIDEwMDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0b3RhbERlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZmluZCB0aGUgYnV0dG9uIHdpdGggdGhlIGxvd2VzdCB2YWx1ZSBvZiBkZWx0YSBpbiB0aGUgYXJyYXkgYW5kIGNoYW5nZSBpdHMgcm91bmRlZCB2YWx1ZSBieSArMSwgc2V0IGl0cyBkZWx0YSB0byAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb3dlc3REZWx0YUJ0bjtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBidG5JRCBpbiB0aGlzLmJ1dHRvbkluc3RhbmNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnRuID0gdGhpcy5idXR0b25JbnN0YW5jZXNbYnRuSURdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxvd2VzdERlbHRhQnRuIHx8IGJ0bi5kZWx0YSA8IGxvd2VzdERlbHRhQnRuLmRlbHRhKSBsb3dlc3REZWx0YUJ0biA9IGJ0bjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0RGVsdGFCdG4udXBkYXRlQ291bnQobG93ZXN0RGVsdGFCdG4uY291bnRWYWx1ZSwgdHJ1ZSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0RGVsdGFCdG4uZGVsdGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRGVsdGErKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdoaWxlICh0b3RhbERlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZmluZCB0aGUgYnV0dG9uIHdpdGggdGhlIGhpZ2hlc3QgdmFsdWUgb2YgZGVsdGEgaW4gdGhlIGFycmF5IGFuZCBjaGFuZ2UgaXRzIHJvdW5kZWQgdmFsdWUgYnkgLTEsIHNldCBpdHMgZGVsdGEgdG8gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgSGlnaGVzdERlbHRhQnRuO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGJ0bklEIGluIHRoaXMuYnV0dG9uSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidG4gPSB0aGlzLmJ1dHRvbkluc3RhbmNlc1tidG5JRF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghSGlnaGVzdERlbHRhQnRuIHx8IGJ0bi5kZWx0YSA+IEhpZ2hlc3REZWx0YUJ0bi5kZWx0YSkgSGlnaGVzdERlbHRhQnRuID0gYnRuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBIaWdoZXN0RGVsdGFCdG4udXBkYXRlQ291bnQoSGlnaGVzdERlbHRhQnRuLmNvdW50VmFsdWUsIHRydWUsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICBIaWdoZXN0RGVsdGFCdG4uZGVsdGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRGVsdGEtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlQ291bnRzOiBmdW5jdGlvbiAob0NvdW50cywga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9Db3VudHMpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjb3VudElkIGluIG9Db3VudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbCArPSBvQ291bnRzW2NvdW50SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG90YWxDb3VudCA9IHRvdGFsO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGJ0bklEIGluIHRoaXMuYnV0dG9uSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ0biA9IHRoaXMuYnV0dG9uSW5zdGFuY2VzW2J0bklEXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRLZXkgPSBidG5ba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRLZXkgPT0gJ3NoYXJlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4udXBkYXRlQ291bnQodG90YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi51cGRhdGVDb3VudChvQ291bnRzW2NvdW50S2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblNoYXJlOiBmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGJ0bi5vQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0bi5pZCAhPSAnc2hhcmUnICYmIGJ0bi5pZCAhPSAnY29tbWVudHMnICYmICFpc05hTihidG4uY291bnRWYWx1ZSkgJiYgIWJ0bi5zaGFyZWRPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG90YWxDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi51cGRhdGVDb3VudChidG4uY291bnRWYWx1ZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5zaGFyZWRPbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHRoaXMuX3AsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5vblNlbmREb25lID0gdGhpcy5fcC5vblNlbmREb25lO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnVzZXJBY3Rpb24gPSBidG4uZ2V0VXNlckFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0bi5vQnV0dG9uLnVzZXJNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnVzZXJBY3Rpb24udXNlck1lc3NhZ2UgPSBidG4ub0J1dHRvbi51c2VyTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGl0ZW0ucHJvdmlkZXIudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm92aWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZvdXJzcXVhcmUnOiBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdraW5kbGUnOiBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwcmludCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcmludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb21tZW50cyc6IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuXy5zZW5kRW1haWxOYXRpdmUocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5vcGVyYXRpb25Nb2RlID0gJ211bHRpU2VsZWN0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1snaGlkZVNpZGViYXInXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuaW5pdGlhbFZpZXcgPSAnZW1haWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmNvbnRhaW5lcklEID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuc2hvd1NoYXJlVUkocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaGFyZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFyYW1zLm9wZXJhdGlvbk1vZGUpIHBhcmFtcy5vcGVyYXRpb25Nb2RlID0gJ3NpbXBsZVNoYXJlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy5jb250YWluZXJJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnNuYXBUb0VsZW1lbnRJRCA9IGJ0bi5jb250YWluZXJJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnNob3dTaGFyZVVJKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wcm92aWRlciA9IHByb3ZpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuZGVzY3JpcHRpb24gPSBwYXJhbXMudXNlckFjdGlvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnRpdGxlID0gcGFyYW1zLnVzZXJBY3Rpb24udGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy51cmwgPSBwYXJhbXMudXNlckFjdGlvbi5saW5rQmFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnByb3ZpZGVyS2V5ID0gdGhpcy5fcFtwcm92aWRlciArICdLZXknXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgc2V0dGluZyBwb3B1cC1yZWxhdGVkIHBhcmFtZXRlcnMgZm9yIGluZGl2aWR1YWwgcHJvdmlkZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5c1RvSW5oZXJpdCA9IFsnZW5hYmxlUG9wdXBMb2NhdGlvbicsICdwb3B1cFdpZHRoJywgJ3BvcHVwSGVpZ2h0JywgJ3BvcHVwUG9zaXRpb25ZJywgJ3BvcHVwUG9zaXRpb25YJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSBpbiBrZXlzVG9Jbmhlcml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXlzVG9Jbmhlcml0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYnRuLm9CdXR0b25ba2V5XSAhPT0gdW5kZWZpbmVkICYmIGJ0bi5vQnV0dG9uW2tleV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNba2V5XSA9IGJ0bi5vQnV0dG9uW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZWRpYSA9IGJ0bi5nZXRUaHVtYm5haWxVUkwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lZGlhKSBwYXJhbXMudGh1bWJuYWlsVVJMID0gbWVkaWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wb3N0Qm9va21hcmsocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9FdmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ3NlbmREb25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogcHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWVzc2FnZTogcGFyYW1zLnVzZXJBY3Rpb24udXNlck1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVUkw6IHBhcmFtcy51c2VyQWN0aW9uLmxpbmtCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KG9FdmVudCwgdGhpcy5fcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUucmVtb3ZlKCdnZXRQcm92aWRlclNoYXJlQ291bnRfJyArIHByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgKyAnXycgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zLnVybCkpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnc2hhcmVCdXR0b25DbGlja2VkJywgc2hhcmVJdGVtOiBpdGVtIH0sIHRoaXMuX3ApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblVuZG9SZWFjdGlvbjogZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZURhdGEgPSAodGhpcy5fYy5zb3VyY2VEYXRhID8gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHRoaXMuX2Muc291cmNlRGF0YSwgZmFsc2UsIHRydWUpIDoge30pO1xyXG4gICAgICAgICAgICAgICAgc291cmNlRGF0YS5idXR0b25JRCA9IGJ0bi5pZDtcclxuICAgICAgICAgICAgICAgIHNvdXJjZURhdGEuYnV0dG9uVGV4dCA9IGJ0bi5sYWJlbFRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLmluY3JlbWVudFJlYWN0aW9uc0NvdW50KHRoaXMuX2MsIHsgYmFySUQ6IHRoaXMuX2JhcklELCBidXR0b25JRDogYnRuLmlkLCBjb3VudDogLTEsIHNvdXJjZURhdGE6IHNvdXJjZURhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGJ0bi5jb3VudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvdGFsQ291bnQgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICBidG4udXBkYXRlQ291bnQoYnRuLmNvdW50VmFsdWUgLSAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7IGV2ZW50TmFtZTogJ3JlYWN0aW9uVW5jbGlja2VkJywgcmVhY3Rpb246IGJ0bi5vQnV0dG9uIH0sIHRoaXMuX3ApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblJlYWN0aW9uOiBmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuLmRpc2FibGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZURhdGEgPSAodGhpcy5fYy5zb3VyY2VEYXRhID8gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHRoaXMuX2Muc291cmNlRGF0YSwgZmFsc2UsIHRydWUpIDoge30pO1xyXG4gICAgICAgICAgICAgICAgc291cmNlRGF0YS5idXR0b25JRCA9IGJ0bi5pZDtcclxuICAgICAgICAgICAgICAgIHNvdXJjZURhdGEuYnV0dG9uVGV4dCA9IGJ0bi5sYWJlbFRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLmluY3JlbWVudFJlYWN0aW9uc0NvdW50KHRoaXMuX2MsIHsgcmVhY3Rpb25CYXJJZDogdGhpcy5fYmFySUQsIGJ1dHRvbklEOiBidG4uaWQsIGNvdW50OiAxLCBzb3VyY2VEYXRhOiBzb3VyY2VEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihidG4uY291bnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90b3RhbENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLnVwZGF0ZUNvdW50KGJ0bi5jb3VudFZhbHVlICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpcy4kKGJ0bi5jb250YWluZXJJRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBidG4ub0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wLnNjb3BlICYmIHRoaXMuX3Auc2NvcGUudG9Mb3dlckNhc2UoKSA9PSAnaW50ZXJuYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnB1Ymxpc2hVc2VyQWN0aW9uKHRoaXMuX2MsIHsgc291cmNlRGF0YTogc291cmNlRGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWwgJiYgIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHRoaXMuX3AucHJvbXB0U2hhcmUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1JbmRleCA9IGJ0bi5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVySUQgPSB0aGlzLl9wLmNvbnRhaW5lcklEICsgJy1zaGFyZScgKyBpdGVtSW5kZXg7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGl2TWluaXNoYXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXZNaW5pc2hhcmUgJiYgZGl2TWluaXNoYXJlLnN0eWxlLmRpc3BsYXkgIT0gJ25vbmUnKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGl2TWluaXNoYXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdk1pbmlzaGFyZSA9IGdpZ3lhLnV0aWxzLkRPTS5jcmVhdGVUb3BMZXZlbERpdihjb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdk1pbmlzaGFyZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3ID0gMzIwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gMTU2O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkc3QgPSBkaXZNaW5pc2hhcmUuc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZwaDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdnB3O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdnBoID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2cHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdnBoID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdnBoID0gZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2cHcgPSBkZS5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoKHR5cGVvZiB2cGggPT0gJ3VuZGVmaW5lZCcpIHx8ICh2cGggPT0gMCkpICYmIChkb2N1bWVudC5ib2R5KSAmJiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2cGggPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdnB3ID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmwgPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRTY3JvbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdnB0ID0gc2NybC50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZwbCA9IHNjcmwubGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pZGRsZVBvaW50VG9wID0gdnB0ICsgTWF0aC5mbG9vcih2cGggLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWlkZGxlUG9pbnRMZWZ0ID0gdnBsICsgTWF0aC5mbG9vcih2cHcgLyAyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ0blBvcyA9IGdpZ3lhLmdsb2JhbC5fR2V0RWxlbWVudFBvcyhlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ0blBvcy50b3AgPiBtaWRkbGVQb2ludFRvcCAmJiBidG5Qb3MudG9wID4gaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkc3QudG9wID0gKGJ0blBvcy50b3AgLSBoKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHN0LnRvcCA9IChidG5Qb3MudG9wICsgZWwub2Zmc2V0SGVpZ2h0ICsgNSkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuUG9zLmxlZnQgPiBtaWRkbGVQb2ludExlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnRQb3MgPSAoYnRuUG9zLmxlZnQgKyBlbC5vZmZzZXRXaWR0aCAtIHcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdFBvcyA8IDApIGxlZnRQb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkc3QubGVmdCA9IGxlZnRQb3MgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHN0LmxlZnQgPSAoYnRuUG9zLmxlZnQpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRzdC53aWR0aCA9ICcnICsgdyArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZHN0LmhlaWdodCA9ICcnICsgaCArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZnJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9pZnJfJyArIGNvbnRhaW5lcklEKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWZyZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJlbC5zdHlsZS50b3AgPSAocGFyc2VJbnQoZHN0LnRvcCkgKyA1KSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmVsLnN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZHN0LmxlZnQpICsgNSkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJlbC5zdHlsZS53aWR0aCA9ICh3IC0gMTApICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWZyZWwuc3R5bGUuaGVpZ2h0ID0gKGggLSAxMCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZSh0aGlzLl9wLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY29udGFpbmVySUQgPSBjb250YWluZXJJRDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmF1dG9TaGFyZUFjdGlvbklEID0gdGhpcy5fcC5hdXRvU2hhcmVBY3Rpb25JRCA/IHRoaXMuX3AuYXV0b1NoYXJlQWN0aW9uSUQgOiB0aGlzLl9iYXJJRDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLm9uU2VuZERvbmUgPSB0aGlzLl9wLm9uU2VuZERvbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLm9uRXJyb3IgPSB0aGlzLl9wLm9uRXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnNvdXJjZURhdGEgPSBzb3VyY2VEYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5ib2R5VGV4dCkgcGFyYW1zLmJvZHlUZXh0ID0gaXRlbS5ib2R5VGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5oZWFkZXJUZXh0KSBwYXJhbXMuaGVhZGVyVGV4dCA9IGl0ZW0uaGVhZGVyVGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udXNlckFjdGlvbikgcGFyYW1zLnVzZXJBY3Rpb24gPSBuZXcgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLlVzZXJBY3Rpb24oZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKGl0ZW0udXNlckFjdGlvbiwgZmFsc2UsIHRydWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZlZWRNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG4ub0J1dHRvbi51c2VyTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVkTWVzc2FnZSA9IGJ0bi5vQnV0dG9uLnVzZXJNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuLm9CdXR0b24uZmVlZE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlZE1lc3NhZ2UgPSBidG4ub0J1dHRvbi5mZWVkTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlZWRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VGl0bGUgPSBwYXJhbXMudXNlckFjdGlvbi50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnVzZXJBY3Rpb24udGl0bGUgPSBmZWVkTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaXRsZSAmJiBjdXJyZW50VGl0bGUgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy51c2VyQWN0aW9uLnRpdGxlICs9ICcgLSAnICsgY3VycmVudFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmZuY0hpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuZm5jSGlkZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYSkgYSA9IGUuc3JjRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYSAhPSBudWxsICYmIGEub2Zmc2V0UGFyZW50ICYmIGEuaWQuaW5kZXhPZihjb250YWluZXJJRCkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGEub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYSB8fCBhLmlkLmluZGV4T2YoY29udGFpbmVySUQpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWZyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZ3lhX2lmcl8nICsgY29udGFpbmVySUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIpIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWZyKSBpZnIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbmNsaWNrXCIsIGVsLmZuY0hpZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbC5mbmNIaWRlLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLm9uQ2xvc2UgPSBlbC5mbmNIaWRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkb2N1bWVudC5hdHRhY2hFdmVudChcIm9uY2xpY2tcIiwgZWwuZm5jSGlkZSkgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWwuZm5jSGlkZSwgZmFsc2UpIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5zaG93TWluaVNoYXJlVUkocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7IGV2ZW50TmFtZTogJ3JlYWN0aW9uQ2xpY2tlZCcsIHJlYWN0aW9uOiBpdGVtIH0sIHRoaXMuX3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfcGlbcGx1Z2luTmFtZV0gPSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlczoge30sXHJcbiAgICAgICAgICAgIHNob3dSZWFjdGlvbnNCYXJVSTogZnVuY3Rpb24gKGMsIHAsIGkpIHtcclxuICAgICAgICAgICAgICAgIGkuYnV0dG9uc1R5cGUgPSAncmVhY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luU2NvcGUuY3JlYXRlSW5zdGFuY2UoYywgcCwgaSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dTaGFyZUJhclVJOiBmdW5jdGlvbiAoYywgcCwgaSkge1xyXG4gICAgICAgICAgICAgICAgaS5idXR0b25zVHlwZSA9ICdzaGFyZSc7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5TY29wZS5jcmVhdGVJbnN0YW5jZShjLCBwLCBpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==