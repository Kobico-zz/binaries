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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.socialize.plugins.bookmark.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.socialize.plugins.bookmark.js":
/*!*************************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.bookmark.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="gigya.services.socialize.plugins.js" />
(function () {
    if (typeof window.gigya.services.socialize.plugins == 'undefined') window.gigya.services.socialize.plugins = {};
    var _pi = window.gigya.services.socialize.plugins;
    var pluginName = 'bookmark';
    if (typeof _pi[pluginName] == 'undefined') {
        _pi[pluginName] = {
            bookmarkSitesArray: [],
            bookmarkSitesHash: {},
            modules: {},
            TEXT: function (oLang, textKey, replaceStr, withStr) {
                var t = oLang[textKey];
                if (replaceStr) t = t.replace(replaceStr, withStr);
                return t;
            },
            getLang: function (lang) {
                if (lang) lang = lang.toLowerCase();
                switch (lang) {
                    case 'te-st': return { kaixin: "TT kaixin 3", qq: "TT qq 4", renren: "TT renren 5", sina: "TT sina 6", yahoobookmarks: "TT yahoobook 7", messenger: "TT microsoft 8", google: "TT google 9", googlebookmarks: "TT googleboo 10" };
                    case 'zh-cn': return { kaixin: "开心网", qq: "QQ空间", renren: "人人网", sina: "新浪微博", yahoobookmarks: "雅虎书签", messenger: "微软", google: "谷歌", googlebookmarks: "谷歌书签" };
                    case 'zh-hk': return { kaixin: "开心网", qq: "QQ空间", renren: "人人网", sina: "新浪微博", yahoobookmarks: "雅虎书签", messenger: "微软", google: "谷歌", googlebookmarks: "谷歌书签" };
                    case 'zh-tw': return { kaixin: "开心网", qq: "QQ空间", renren: "人人网", sina: "新浪微博", yahoobookmarks: "雅虎书签", messenger: "微软", google: "谷歌", googlebookmarks: "谷歌书签" };
                    case 'ja': return { mixi: 'チェック' };
                    case 'ru': return { vkontakte: 'ВКонтакте' };
                    default:
                        return {};
                }
            },
            getStyleAspectRatio: function (style) {
                switch (style.toLowerCase()) {
                    case 'fulllogo': return 2.6;
                    default: return 1;
                }
            },

            redraw: function (containerID) {
                var m = this.modules[containerID];
                this.showBookmarkUI(m.c, m.p, m.i, true);
            },

            measureText: function (text, oStyle) {
                var ruler = document.getElementById('gigya_ruler');
                if (ruler == null) {
                    ruler = document.createElement('span');
                    ruler.id = 'gigya_ruler';
                    ruler.style.visibility = 'hidden';

                    ruler.style.fontFamily = oStyle.font;
                    ruler.style.fontSize = oStyle.size + 'px';
                    ruler.style.fontWeight = (oStyle.bold == true) ? 'bold' : '';
                    ruler.style.whiteSpace = 'nowrap';
                    ruler.style.margin = '0px';
                    ruler.style.padding = '0px';
                    document.body.appendChild(ruler);
                }
                ruler.style.display = '';
                ruler.innerHTML = text;
                var w = ruler.offsetWidth;
                var h = ruler.offsetHeight;
                ruler.style.display = 'none';
                return { w: w, h: h }
            },
            getStyle: function (style) {
                var oStyle = {};
                switch (style.toLowerCase()) {
                    case 'fulllogo':
                        return {
                            ratio: 2.6,
                            base: 'FullLogo/'
                        }
                    default: return {
                        ratio: 1
                    }
                }
            },

            getSingleLineHeight: function (oStyle) {
                return window.gigya.pluginUtils.layout.measureText('Wg', oStyle).h + 4;
            },

            isTrue: function (v, def) {
                if (v == null) return def;
                return (v && (v == true || v.toLowerCase() == 'true'));
            },
            //Plugin Entry Points
            showBookmarkUI: function (c, p, internals, isEvent) {
                var bookmarks = 'Facebook,Twitter,Google+,Microsoft,LinkedIn,Digg,StumbleUpon,Baidu,Google Bookmarks,Skyrock,QQ,Sina,Kaixin,Renren,VZNet,FriendFeed,VKontakte,Spiceworks,Viadeo,nk.pl,Xing,Tuenti,Reddit,Box.net,Tumblr,Pinterest,Plaxo,Technorati,Newsvine,Fark,Bit.ly,Hatena,Douban,Odnoklassniki,Amazon,Gmail,NetLog,Evernote,AOL Mail,Current TV,Yardbarker,BlinkList,Diigo,DropJack,Segnalo,LinkaGoGo,Kaboodle,Skimbit,whatsapp';
                var explicitBookmarks = '100zakladok,A1-Webmarks,Adifni,Aero,AIM Share,Amen Me!,Arto,Aviary Capture,BizSugar,Blip,Blogmarks,Bobrdobr,BonzoBox,Bordom,Brainify,BuddyMarks,Camyoo,Care2,Cirip,CiteULike,ClassicalPlace,Clickazoo,Colivia.de,Connotea,COSMiQ,DesignBump,Designmoo,Diggita,Diglog,Digo,Diigo,Dipdive,DoMelhor,Doower,Dosti,DotNetKicks,Dzone,Edelight,eKudos,eLert Gadget,Embarkons,euCliquei,Fabulously40,Farkinda,FAVable,Favoritus,Floss.pro,Fnews,Fresqui,funP,fwisp,Gabbr,Gacetilla,GamesN,GluvSnap,Google Reader,Gravee,Grumper,Haber.gen.tr,Hacker News,Hadash Hot,Hatena,Hazarkor,Hedgehogs.net,HelloTxt,HEMiDEMi,Hipstr,Hitmarks,Hot Bookmark,Hotklix,HTML Validator,Identi.ca,Instapaper,InvestorLinks,Jamespot,Jumptags,Kaevur,KiRTSY,Kledy,koornk,Kudos,Laaikit,Librerio,Link Ninja,Linkuj.cz,Livefavoris,Lunch.com,Meccho,meinVZ,Memori.ru,Meneame,Mindbodygreen,Mylinkvault,N4G,Netvouz,Nujij,OKNOtizie,Oneview,Osmosus,Oyyla,PDF Online,PimpThisBlog,Ping.fm,Planypus,Plurk,Polladium,Posterous,Pusha,Quantcast,Read It Later,Scoop.at,Sekoman,Shaveh,She Told Me,Smak News,SodaHead,Sonico,Speedtile,springpad,Spruzer,Startaid,Startlap,Strands,studiVZ,Stuffpit,Stumpedia,Stylehive,Surfpeople,Svejo,Symbaloo,Tagza,TellMyPolitician,ThisNext,Tip\'d,Tulinq,Tusul,Viadeo,Virb,Vyoom,Whois Lookup,Windy Citizen,WireFan,Worio,Wovre,Wykop,Yammer,Yazzem,Yigg,Yoolink,Yorumcuyum,Youbookmarks,YouMob,Mixi,Naver';
                var explicitBookmarksWithIcons = 'Mixi,Naver';
                var arDisplayNames = bookmarks.replace('Google+','Google').split(',');
                var arNames = bookmarks.replace(/ /g, '').replace(/!/g, '').replace(/\./g, '').replace(/\+/g, 'plus').replace('Microsoft', 'messenger').toLowerCase().split(',');

                var oLang = _pi[pluginName].getLang(c.lang);
                _pi[pluginName].bookmarkSitesHash = {};
                _pi[pluginName].bookmarkSitesArray = [];
                for (var i = 0; i < arNames.length; i++) {
                    Add_BMSite(arNames[i], -1, arDisplayNames[i], null, null, oLang);
                }

                arDisplayNames = explicitBookmarks.split(',');
                arNames = explicitBookmarks.replace(/ /g, '').replace(/!/g, '').replace(/\./g, '').toLowerCase().split(',');
                for (var i = 0; i < arNames.length; i++) {
                    Add_Extra_BMSite(arNames[i], -1, arDisplayNames[i], oLang, (explicitBookmarksWithIcons.indexOf(arDisplayNames[i]) != -1));
                }
                this.showUI(c, p, internals, isEvent);
            },
            showUI: function (c, p, internals, isEvent) {
                var GS = window.gigya.services.socialize;
                var rid = internals['rid'];
                var This = this;

                var resolver = new window.gigya.global.resolver(window.gigya.global.resolver.defaultProccessor);
                resolver.addConfig('<config><body font="arial"><captions bold="true" size="13" color="#ffffff" background-color="#4692DE" frame-thickness="0" /><controls size="11"><snbuttons type="" buttonsize="30" color="#9b9b9b" /></controls><background background-color="transparent" /><texts size="11"><links color="#0086f1" /></texts></body></config>');
                if (internals['isPopup']) {
                    resolver.addConfig('<config><body><background frame-thickness="5" frame-color="#999999" background-color="#F6F6F6" /><controls size="11"><snbuttons type="textUnder" buttonsize="35" color="#9b9b9b" /></controls></body></config>');
                }
                resolver.addConfig(c['UIConfig']);
                resolver.addConfig(p['UIConfig']);

                var containerID = p['containerID'];

                var buttonsStyle = p['buttonsStyle'];
                if (typeof buttonsStyle == 'undefined') buttonsStyle = '';
                buttonsStyle = ''; // no other button styles for bookmarks
                //if (internals.isConnect) buttonStyle='';
                var oStyle = this.getStyle(buttonsStyle);


                var base = window.gigya._.getCdnResource('/gs/i/' + pluginName + '/');
                var styleBase = base;
                if (oStyle.base) styleBase += oStyle.base;

                this.modules[containerID] = { c: c, p: p, i: internals, page: 0 };
                var arHTML = [];
                var a = 0;

                /*var requiredCapabilities=p['requiredCapabilities'];
				if (!requiredCapabilities) requiredCapabilities='login';
				requiredCapabilities=requiredCapabilities.split(',');
				*/
                var arBookmarksToShow; //=this.bookmarkSitesArray;
                arBookmarksToShow = GS.getProvidersByName(p['enabledBookmarks'] ? p['enabledBookmarks'] : (c['enabledBookmarks'] ? c['enabledBookmarks'] : '*'), this.bookmarkSitesArray);
                arBookmarksToShow = GS.hideProvidersByName(arBookmarksToShow, p['disabledBookmarks'] ? p['disabledBookmarks'] : (c['disabledBookmarks'] ? c['disabledBookmarks'] : ''), this.bookmarkSitesArray);


                var arrowW = 7;
                var arrowH = 12;

                var oSnButtonsStyle = resolver.Resolve('+/config/body/controls/snbuttons');
                var textUnder = (oSnButtonsStyle['type'] == 'textUnder');

                var buttonsize = 30; //parseInt(oSnButtonsStyle['buttonsize']);

                var iconSize = buttonsize;

                var oBgStyle = resolver.Resolve('+/config/body/background');

                if (internals['isPopup']) {
                    oBgStyle['frame-thickness'] = 0;
                }
                var oLinkStyle = resolver.Resolve('+/config/body/texts/links');
                var oTextStyle = resolver.Resolve('+/config/body/texts');


                var textStyle = GS.getStyleString(oTextStyle);
                var linkStyle = GS.getStyleString(oLinkStyle, true);
                var bgStyle = GS.getStyleString(oBgStyle);
                var snButtonsStyle = GS.getStyleString(oSnButtonsStyle);

                //if (typeof iconSize=='undefined' || isNaN(iconSize)) iconSize=30;

                //var imgIconSize=Math.floor(iconSize/5)*5
                //if (imgIconSize<15) imgIconSize=15;
                //if (imgIconSize>40) imgIconSize=40;

                imgIconSize = 18;

                var scrollingLeftPath = base + 'scrollingarrow_left.gif';
                var scrollingLeftDisablePath = base + 'scrollingarrow_disable_left.gif';
                var scrollingRightPath = base + 'scrollingarrow_right.gif';
                var scrollingRightDisablePath = base + 'scrollingarrow_disable_right.gif';

                if (iconSize > 25) {
                    scrollingLeftPath = base + 'scrollingarrowl_left.gif';
                    scrollingLeftDisablePath = base + 'scrollingarrowl_disable_left.gif';
                    scrollingRightPath = base + 'scrollingarrowl_right.gif';
                    scrollingRightDisablePath = base + 'scrollingarrowl_disable_right.gif';
                    arrowW = 10;
                }

                var maxRows = 1;
                var maxLines = 1;
                var w = p['width'];
                var h = p['height'];

                var hintW = 175;
                var hintH = 55;

                var showHint = (p['showWhatsThis'] && w > hintW && h - 28 > hintH);

                var showGigyaBranding = (!this.isTrue(p['hideGigya'], false) && !this.isTrue(p['hideGigyaLink'], false));
                var showWhatsThis = (!showGigyaBranding && showHint);

                var showTerms = false; //this.isTrue(p['showTermsLink'],true);
                var b = arBookmarksToShow.length;

                //button size (image only)
                var btnImgW = iconSize; // *oStyle.ratio;
                var btnImgH = iconSize;

                var arSpriteBookmars = [];
                for (var i = 0; i < arBookmarksToShow.length; i++) { //remove those with custom icon
                    if (!arBookmarksToShow[i].iconName) arSpriteBookmars.push(arBookmarksToShow[i]);
                }
                arSpriteBookmars.sort();
                var spriteRenderer = window.gigya.global.getSpriteRenderers({ bookmarkIcons: { path: '/Bookmark/[' + arSpriteBookmars.join(',') + '].png', w: imgIconSize, h: imgIconSize } });

                //full button size (including image and text)
                var btnW = btnImgW;
                var btnH = btnImgH;

                //buttons spacing
                var bhs = 5;
                var bvs = 10;

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
                var linkHeight = this.getSingleLineHeight(oLinkStyle);
                if (showGigyaBranding || showWhatsThis || showTerms) {
                    vm += linkHeight;
                }
                if (textUnder) {
                    btnH += this.getSingleLineHeight(oSnButtonsStyle);
                    for (var i = 0; i < arBookmarksToShow.length; i++) {
                        btnW = Math.max(btnW, window.gigya.pluginUtils.layout.measureText(arBookmarksToShow[i].displayName, oSnButtonsStyle).w + 10);
                    }
                }
                var maxButtonsInRow = Math.floor((w - hm + bhs) / (bhs + btnW))
                var maxButtonsInCol = Math.floor((h - vm + bvs) / (bvs + btnH))
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
                var pageWidth = maxButtonsInRow * (btnW + bhs) - bhs;

                var pluginFQN = 'gigya.services.socialize.plugins.' + pluginName;

                //if (typeof providers == 'undefined') providers=c['enabledProviders'];
                arHTML[a++] = '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" valign="middle" style="' + bgStyle + 'margin:0px;padding:0px; vertical-align: middle; width: ' + w + 'px; height: ' + h + 'px;"><tr><td style="vertical-align:middle; padding:0px; margin:0px;"><center><table role="presentation" width="100%" style="margin:0px;padding:0px;vertical-align:middle; height: ' + h + 'px;" align="center" valign="middle" cellspacing="0" cellpadding="0"><tr>';
                arHTML[a++] = '<td width="48%" align="right" style="padding:0px;margin:0px;vertical-align:middle">';
                if (pages > 1) {
                    arHTML[a++] = '<div align="left" style="width:' + (arrowW + bhs) + 'px; text-align: left"><div style="width: ' + (arrowW) + 'px"><img alt="" tabindex="0" role="button" onclick="' + pluginFQN + '.prevPage(\'' + containerID + '\')" onkeydown="if((event.which || event.keyCode) == 13) ' + pluginFQN + '.prevPage(\'' + containerID + '\')" style="cursor:pointer;display:none" id="' + containerID + '_arrow_left" src="' + scrollingLeftPath + '" /><img alt="" style="display:none" id="' + containerID + '_arrow_left_disable" src="' + scrollingLeftDisablePath + '" /></div></div>';
                }
                arHTML[a++] = '</td><td align="center" style="width:' + pageWidth + 'px;padding:0px;margin:0px;vertical-align:middle" id="' + containerID + '_page">';


                for (var iPage = 0; iPage < pages; iPage++) {
                    arHTML[a++] = '<table role="presentation" align="center" cellspacing="0" cellpadding="0" style="margin:0px;padding:0px;display:none" id="' + containerID + '_p' + iPage + '">';
                    for (var iCol = 0; iCol < maxButtonsInCol; iCol++) {
                        var align = 'left';
                        if (pages == 1 && iProvider + maxButtonsInRow > arBookmarksToShow.length) align = 'center';
                        arHTML[a++] = '<tr><td align="center" style="padding:0px;padding:0px;vertical-align:middle"><table role="presentation" align="' + align + '" cellspacing="0" cellpadding="0" style="margin:0px;padding:0px"><tr>';
                        for (var iRow = 0; iRow < maxButtonsInRow; iRow++) {
                            var provider = arBookmarksToShow[iProvider];
                            var paddingRules = '';
                            if (iRow < maxButtonsInRow - 1) paddingRules += 'padding-right:' + bhs + 'px;';
                            if (iCol < maxButtonsInCol - 1) paddingRules += 'padding-bottom:' + bvs + 'px;';
                            if (provider != null) {
                                var imgId = provider.name;
                                if (provider.iconName != null) imgId = provider.iconName;
                                var imgHTML = spriteRenderer.bookmarkIcons.getHTML(imgId, true, undefined, undefined, provider.displayName);

                                // background-image:url(\'' + base + 'WF_Button.png\');
                                arHTML[a++] = '<td style="vertical-align:middle;margin:0px;padding:0px;' + paddingRules + 'text-align:center;vertical-align:top"><center><div onclick="' + pluginFQN + '.providerClick(\'' + containerID + '\',\'' + provider.name + '\')" style="text-align:center;cursor:pointer; width:' + btnW + 'px;"><table role="presentation" align="center" cellspacing="0" cellpadding="0" style="margin:0 auto;text-align:center"><tr><td style="text-align:center;vertical-align:middle;width:' + btnImgW + 'px; height:' + btnImgH + 'px">' + imgHTML + '</td></tr></table>';

                                if (textUnder) {
                                    arHTML[a++] = '<div style="text-align:center;margin:0px;padding-top:2px;' + snButtonsStyle + '">' + provider.displayName + '</div>';
                                }
                                arHTML[a++] = '</div></center></td>';
                                iProvider++;
                            } else if (pages > 1) {
                                arHTML[a++] = '<td style="' + paddingRules + 'vertical-align:top;"><div style="width:' + btnW + 'px;height:' + btnH + 'px">&#160;</div></td>';
                            }
                        }
                        arHTML[a++] = '</tr></table></td></tr>';

                    }
                    arHTML[a++] = '</table>';
                }
                arHTML[a++] = '</td><td width="48%" style="padding:0px;margin:0px;vertical-align:middle">';
                if (pages > 1) {
                    arHTML[a++] = '<div style="padding:0px;margin:0px;text-align:right; width:' + (arrowW + bhs) + 'px"><img alt="" role="button" tabindex="0" onclick="' + pluginFQN + '.nextPage(\'' + containerID + '\')" onkeydown="if((event.which || event.keyCode) == 13) ' + pluginFQN + '.nextPage(\'' + containerID + '\')" style="cursor:pointer;display:none" id="' + containerID + '_arrow_right" src="' + scrollingRightPath + '" /><img alt="" style="display:none" id="' + containerID + '_arrow_right_disable" src="' + scrollingRightDisablePath + '" /></div>';
                }

                arHTML[a++] = '</td></tr>';

                var leftBottomLinkHTML = '';
                if (showTerms) {
                    leftBottomLinkHTML = '<a target="_blank" href="https://www.gigya.com/privacy-policy/" style="' + linkStyle + ';padding-right:5px;text-decoration:none;font-size:10px">Terms</a>';
                }

                var rightBottomLinkHTML = '';
                if (showGigyaBranding) {
                    rightBottomLinkHTML += '<span onclick="window.open(\'http://www.gigya.com\')" style="color:#828282; font-size:11px;cursor:pointer" onMouseOut="' + pluginFQN + '.hideWhatsThis(\'' + containerID + '\')" onMouseOver="' + pluginFQN + '.showWhatsThis(\'' + containerID + '\')">powered by <span style="color:#01559f">Gigya</span></span>';
                } else if (showWhatsThis && navigator.userAgent.toLowerCase().indexOf("iphone") == -1) {
                    rightBottomLinkHTML += '<span style="' + linkStyle + '" onMouseOut="' + pluginFQN + '.hideWhatsThis(\'' + containerID + '\')" onMouseOver="' + pluginFQN + '.showWhatsThis(\'' + containerID + '\')">what\'s this?</span>';
                }


                var linksWidth = window.gigya.pluginUtils.layout.measureText(leftBottomLinkHTML).w + window.gigya.pluginUtils.layout.measureText(rightBottomLinkHTML).w;
                if (linksWidth > w) {
                    rightBottomLinkHTML = '';
                    linksWidth = window.gigya.pluginUtils.layout.measureText(leftBottomLinkHTML).w;
                }
                if ((showTerms || showGigyaBranding || showWhatsThis) && linksWidth < w && oLinkStyle.color.toLowerCase() != 'transparent') {
                    if (linksWidth < pageWidth) {
                        arHTML[a++] = '<tr height="' + linkHeight + '"><td></td><td valign="bottom" align="right" style="vertical-align:bottom"><div id="' + containerID + '_bottomLink">';
                        arHTML[a++] = '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0px;padding:0px;"><tr><td align="left">' + leftBottomLinkHTML + '</td><td align="right">' + rightBottomLinkHTML + '</td></tr></table>';
                        arHTML[a++] = '</div></td><td></td></tr>';
                    } else {
                        arHTML[a++] = '<tr height="' + linkHeight + '"><td colspan="3" valign="bottom" align="right" style="vertical-align:bottom"><center><div id="' + containerID + '_bottomLink">';
                        arHTML[a++] = '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0px;padding:0px;"><tr><td align="left">' + leftBottomLinkHTML + '</td><td align="right">' + rightBottomLinkHTML + '</td></tr></table>';
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
                        whatsThisDiv.style.zIndex = '9999999';
                        document.body.appendChild(whatsThisDiv);
                    }
                    var whatsThisText = p['whatsThisText'];
                    if (!whatsThisText) whatsThisText = 'You can use your account from one of the listed sites to register and enjoy full access to this site.';
                    whatsThisDiv.innerHTML = '<table role="presentation" style="padding: 5px; background-color:#FFFFFF;border: 1px solid #767676;" cellpadding="0" cellspacing="0" width="' + hintW + '" height="' + hintH + '" ><tr><td style="vertical-align:middle; text-align:center"><span align="left" style="' + textStyle + ';width: ' + (hintW - 8) + 'px; color:#262626; ">' + whatsThisText + '</span></td></tr></table>';
                }

                var container = document.getElementById(containerID);
                container.innerHTML = arHTML.join('');
                container.style.width = '' + w + 'px';
                container.style.height = '' + h + 'px';

                if (!isEvent) window.gigya.events.dispatchForWidget({ eventName: 'load', containerID: p['containerID'] }, p);

                this.modules[containerID].pages = pages;
                this.updatePage(containerID);
            },
            nextPage: function (id) {
                this.modules[id].page++;
                this.updatePage(id);
            },
            prevPage: function (id) {
                this.modules[id].page--;
                this.updatePage(id);
            },
            showWhatsThis: function (id) {
                var el = document.getElementById(id + '_whatsThis');
                if (el) {
                    var container = document.getElementById(id);
                    var pos = window.gigya.global._GetElementPos(container);
                    el.style.left = pos.left + (parseInt(container.style.width) - el.offsetWidth) / 2 + 'px';
                    el.style.top = pos.top + (parseInt(container.style.height) - el.offsetHeight) / 2 + 'px';
                    el.style.visibility = 'visible';
                }
            },
            hideWhatsThis: function (id) {
                var el = document.getElementById(id + '_whatsThis');
                if (el) {
                    el.style.visibility = 'hidden';
                }
            },
            updatePage: function (id) {
                var m = this.modules[id]
                if (m.pageDiv) m.pageDiv.style.display = 'none';
                m.pageDiv = document.getElementById(id + '_p' + m.page);
                m.pageDiv.style.display = '';
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

                setTimeout(function() {
                    m.pageDiv.querySelector('button').focus();
                }, 100);
            },

            providerClick: function (id, provider) {
                var module = this.modules[id]

                var params = { provider: provider, providerKey: module.p[provider + 'Key'] };
                var ua = module.p[provider + 'UserAction'];
                if (!ua) ua = module.p.userAction;
                if (ua) params.userAction = ua;
                window.gigya.services.socialize.postBookmark(module.c, params);
                window.gigya.events.dispatchForWidget({ eventName: 'bookmarkWindowOpened', provider: provider }, module.p);
            }
        };

        function Add_BMSite(name, snid, displayName, w, h, oLang) {
            var translatedDisplayName = _pi[pluginName].TEXT(oLang, name);
            if (translatedDisplayName) displayName = translatedDisplayName;
            var bms = { name: name, snid: snid, displayName: displayName, w: w, h: h, toString: function () { return this.name } };
            _pi[pluginName].bookmarkSitesArray.push(bms);
            _pi[pluginName].bookmarkSitesHash[name] = bms;
            return bms;
        }

        function Add_Extra_BMSite(name, snid, displayName, oLang, hasIcon) { //Extra BMS are only displayed when explicitly asked for, they use a default icon and open a defult sized window.
            var bms = Add_BMSite(name, snid, displayName, 0, 0, oLang);
            bms.explicitOnly = true;
            if (!hasIcon) bms.iconName = 'defaultBMSIcon';
        }


    }
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmJvb2ttYXJrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0EsZUFBZSxZQUFLLDRDQUE0QyxZQUFLO0FBQ3JFLGNBQWMsWUFBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLHVDQUF1QztBQUN2Qyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNi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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBOztBQUVBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBSztBQUNyQixnQkFBZ0IsWUFBSywyQkFBMkIsd0RBQXdEO0FBQ3hHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNGQUFzRixtQkFBbUI7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLENBQUMsSSIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5ib29rbWFyay5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmJvb2ttYXJrLmpzXCIpO1xuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmpzXCIgLz5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMgPT0gJ3VuZGVmaW5lZCcpIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zID0ge307XHJcbiAgICB2YXIgX3BpID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnM7XHJcbiAgICB2YXIgcGx1Z2luTmFtZSA9ICdib29rbWFyayc7XHJcbiAgICBpZiAodHlwZW9mIF9waVtwbHVnaW5OYW1lXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIF9waVtwbHVnaW5OYW1lXSA9IHtcclxuICAgICAgICAgICAgYm9va21hcmtTaXRlc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgYm9va21hcmtTaXRlc0hhc2g6IHt9LFxyXG4gICAgICAgICAgICBtb2R1bGVzOiB7fSxcclxuICAgICAgICAgICAgVEVYVDogZnVuY3Rpb24gKG9MYW5nLCB0ZXh0S2V5LCByZXBsYWNlU3RyLCB3aXRoU3RyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IG9MYW5nW3RleHRLZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VTdHIpIHQgPSB0LnJlcGxhY2UocmVwbGFjZVN0ciwgd2l0aFN0cik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0TGFuZzogZnVuY3Rpb24gKGxhbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsYW5nKSBsYW5nID0gbGFuZy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChsYW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGUtc3QnOiByZXR1cm4geyBrYWl4aW46IFwiVFQga2FpeGluIDNcIiwgcXE6IFwiVFQgcXEgNFwiLCByZW5yZW46IFwiVFQgcmVucmVuIDVcIiwgc2luYTogXCJUVCBzaW5hIDZcIiwgeWFob29ib29rbWFya3M6IFwiVFQgeWFob29ib29rIDdcIiwgbWVzc2VuZ2VyOiBcIlRUIG1pY3Jvc29mdCA4XCIsIGdvb2dsZTogXCJUVCBnb29nbGUgOVwiLCBnb29nbGVib29rbWFya3M6IFwiVFQgZ29vZ2xlYm9vIDEwXCIgfTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd6aC1jbic6IHJldHVybiB7IGthaXhpbjogXCLlvIDlv4PnvZFcIiwgcXE6IFwiUVHnqbrpl7RcIiwgcmVucmVuOiBcIuS6uuS6uue9kVwiLCBzaW5hOiBcIuaWsOa1quW+ruWNmlwiLCB5YWhvb2Jvb2ttYXJrczogXCLpm4XomY7kuabnrb5cIiwgbWVzc2VuZ2VyOiBcIuW+rui9r1wiLCBnb29nbGU6IFwi6LC35q2MXCIsIGdvb2dsZWJvb2ttYXJrczogXCLosLfmrYzkuabnrb5cIiB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3poLWhrJzogcmV0dXJuIHsga2FpeGluOiBcIuW8gOW/g+e9kVwiLCBxcTogXCJRUeepuumXtFwiLCByZW5yZW46IFwi5Lq65Lq6572RXCIsIHNpbmE6IFwi5paw5rWq5b6u5Y2aXCIsIHlhaG9vYm9va21hcmtzOiBcIumbheiZjuS5puetvlwiLCBtZXNzZW5nZXI6IFwi5b6u6L2vXCIsIGdvb2dsZTogXCLosLfmrYxcIiwgZ29vZ2xlYm9va21hcmtzOiBcIuiwt+atjOS5puetvlwiIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnemgtdHcnOiByZXR1cm4geyBrYWl4aW46IFwi5byA5b+D572RXCIsIHFxOiBcIlFR56m66Ze0XCIsIHJlbnJlbjogXCLkurrkurrnvZFcIiwgc2luYTogXCLmlrDmtarlvq7ljZpcIiwgeWFob29ib29rbWFya3M6IFwi6ZuF6JmO5Lmm562+XCIsIG1lc3NlbmdlcjogXCLlvq7ova9cIiwgZ29vZ2xlOiBcIuiwt+atjFwiLCBnb29nbGVib29rbWFya3M6IFwi6LC35q2M5Lmm562+XCIgfTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdqYSc6IHJldHVybiB7IG1peGk6ICfjg4Hjgqfjg4Pjgq8nIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncnUnOiByZXR1cm4geyB2a29udGFrdGU6ICfQktCa0L7QvdGC0LDQutGC0LUnIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRTdHlsZUFzcGVjdFJhdGlvOiBmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3R5bGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bGxsb2dvJzogcmV0dXJuIDIuNjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHJlZHJhdzogZnVuY3Rpb24gKGNvbnRhaW5lcklEKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMubW9kdWxlc1tjb250YWluZXJJRF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCb29rbWFya1VJKG0uYywgbS5wLCBtLmksIHRydWUpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgbWVhc3VyZVRleHQ6IGZ1bmN0aW9uICh0ZXh0LCBvU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBydWxlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9ydWxlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBydWxlci5pZCA9ICdnaWd5YV9ydWxlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBydWxlci5zdHlsZS5mb250RmFtaWx5ID0gb1N0eWxlLmZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXIuc3R5bGUuZm9udFNpemUgPSBvU3R5bGUuc2l6ZSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXIuc3R5bGUuZm9udFdlaWdodCA9IChvU3R5bGUuYm9sZCA9PSB0cnVlKSA/ICdib2xkJyA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVyLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcclxuICAgICAgICAgICAgICAgICAgICBydWxlci5zdHlsZS5tYXJnaW4gPSAnMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBydWxlci5zdHlsZS5wYWRkaW5nID0gJzBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChydWxlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydWxlci5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBydWxlci5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcgPSBydWxlci5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHZhciBoID0gcnVsZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcnVsZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHc6IHcsIGg6IGggfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRTdHlsZTogZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb1N0eWxlID0ge307XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0eWxlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdmdWxsbG9nbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogMi42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogJ0Z1bGxMb2dvLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGlvOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0U2luZ2xlTGluZUhlaWdodDogZnVuY3Rpb24gKG9TdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dCgnV2cnLCBvU3R5bGUpLmggKyA0O1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaXNUcnVlOiBmdW5jdGlvbiAodiwgZGVmKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA9PSBudWxsKSByZXR1cm4gZGVmO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh2ICYmICh2ID09IHRydWUgfHwgdi50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL1BsdWdpbiBFbnRyeSBQb2ludHNcclxuICAgICAgICAgICAgc2hvd0Jvb2ttYXJrVUk6IGZ1bmN0aW9uIChjLCBwLCBpbnRlcm5hbHMsIGlzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBib29rbWFya3MgPSAnRmFjZWJvb2ssVHdpdHRlcixHb29nbGUrLE1pY3Jvc29mdCxMaW5rZWRJbixEaWdnLFN0dW1ibGVVcG9uLEJhaWR1LEdvb2dsZSBCb29rbWFya3MsU2t5cm9jayxRUSxTaW5hLEthaXhpbixSZW5yZW4sVlpOZXQsRnJpZW5kRmVlZCxWS29udGFrdGUsU3BpY2V3b3JrcyxWaWFkZW8sbmsucGwsWGluZyxUdWVudGksUmVkZGl0LEJveC5uZXQsVHVtYmxyLFBpbnRlcmVzdCxQbGF4byxUZWNobm9yYXRpLE5ld3N2aW5lLEZhcmssQml0Lmx5LEhhdGVuYSxEb3ViYW4sT2Rub2tsYXNzbmlraSxBbWF6b24sR21haWwsTmV0TG9nLEV2ZXJub3RlLEFPTCBNYWlsLEN1cnJlbnQgVFYsWWFyZGJhcmtlcixCbGlua0xpc3QsRGlpZ28sRHJvcEphY2ssU2VnbmFsbyxMaW5rYUdvR28sS2Fib29kbGUsU2tpbWJpdCx3aGF0c2FwcCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXhwbGljaXRCb29rbWFya3MgPSAnMTAwemFrbGFkb2ssQTEtV2VibWFya3MsQWRpZm5pLEFlcm8sQUlNIFNoYXJlLEFtZW4gTWUhLEFydG8sQXZpYXJ5wqBDYXB0dXJlLEJpelN1Z2FyLEJsaXAsQmxvZ21hcmtzLEJvYnJkb2JyLEJvbnpvQm94LEJvcmRvbSxCcmFpbmlmeSxCdWRkeU1hcmtzLENhbXlvbyxDYXJlMixDaXJpcCxDaXRlVUxpa2UsQ2xhc3NpY2FsUGxhY2UsQ2xpY2them9vLENvbGl2aWEuZGUsQ29ubm90ZWEsQ09TTWlRLERlc2lnbkJ1bXAsRGVzaWdubW9vLERpZ2dpdGEsRGlnbG9nLERpZ28sRGlpZ28sRGlwZGl2ZSxEb01lbGhvcixEb293ZXIsRG9zdGksRG90TmV0S2lja3MsRHpvbmUsRWRlbGlnaHQsZUt1ZG9zLGVMZXJ0IEdhZGdldCxFbWJhcmtvbnMsZXVDbGlxdWVpLEZhYnVsb3VzbHk0MCxGYXJraW5kYSxGQVZhYmxlLEZhdm9yaXR1cyxGbG9zcy5wcm8sRm5ld3MsRnJlc3F1aSxmdW5QLGZ3aXNwLEdhYmJyLEdhY2V0aWxsYSxHYW1lc04sR2x1dlNuYXAsR29vZ2xlwqBSZWFkZXIsR3JhdmVlLEdydW1wZXIsSGFiZXIuZ2VuLnRyLEhhY2tlciBOZXdzLEhhZGFzaCBIb3QsSGF0ZW5hLEhhemFya29yLEhlZGdlaG9ncy5uZXQsSGVsbG9UeHQsSEVNaURFTWksSGlwc3RyLEhpdG1hcmtzLEhvdCBCb29rbWFyayxIb3RrbGl4LEhUTUzCoFZhbGlkYXRvcixJZGVudGkuY2EsSW5zdGFwYXBlcixJbnZlc3RvckxpbmtzLEphbWVzcG90LEp1bXB0YWdzLEthZXZ1cixLaVJUU1ksS2xlZHksa29vcm5rLEt1ZG9zLExhYWlraXQsTGlicmVyaW8sTGluayBOaW5qYSxMaW5rdWouY3osTGl2ZWZhdm9yaXMsTHVuY2guY29tLE1lY2NobyxtZWluVlosTWVtb3JpLnJ1LE1lbmVhbWUsTWluZGJvZHlncmVlbixNeWxpbmt2YXVsdCxONEcsTmV0dm91eixOdWppaixPS05PdGl6aWUsT25ldmlldyxPc21vc3VzLE95eWxhLFBERiBPbmxpbmUsUGltcFRoaXNCbG9nLFBpbmcuZm0sUGxhbnlwdXMsUGx1cmssUG9sbGFkaXVtLFBvc3Rlcm91cyxQdXNoYSxRdWFudGNhc3QsUmVhZCBJdCBMYXRlcixTY29vcC5hdCxTZWtvbWFuLFNoYXZlaCxTaGUgVG9sZCBNZSxTbWFrIE5ld3MsU29kYUhlYWQsU29uaWNvLFNwZWVkdGlsZSxzcHJpbmdwYWQsU3BydXplcixTdGFydGFpZCxTdGFydGxhcCxTdHJhbmRzLHN0dWRpVlosU3R1ZmZwaXQsU3R1bXBlZGlhLFN0eWxlaGl2ZSxTdXJmcGVvcGxlLFN2ZWpvLFN5bWJhbG9vLFRhZ3phLFRlbGxNeVBvbGl0aWNpYW4sVGhpc05leHQsVGlwXFwnZCxUdWxpbnEsVHVzdWwsVmlhZGVvLFZpcmIsVnlvb20sV2hvaXPCoExvb2t1cCxXaW5kecKgQ2l0aXplbixXaXJlRmFuLFdvcmlvLFdvdnJlLFd5a29wLFlhbW1lcixZYXp6ZW0sWWlnZyxZb29saW5rLFlvcnVtY3V5dW0sWW91Ym9va21hcmtzLFlvdU1vYixNaXhpLE5hdmVyJztcclxuICAgICAgICAgICAgICAgIHZhciBleHBsaWNpdEJvb2ttYXJrc1dpdGhJY29ucyA9ICdNaXhpLE5hdmVyJztcclxuICAgICAgICAgICAgICAgIHZhciBhckRpc3BsYXlOYW1lcyA9IGJvb2ttYXJrcy5yZXBsYWNlKCdHb29nbGUrJywnR29vZ2xlJykuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIHZhciBhck5hbWVzID0gYm9va21hcmtzLnJlcGxhY2UoLyAvZywgJycpLnJlcGxhY2UoLyEvZywgJycpLnJlcGxhY2UoL1xcLi9nLCAnJykucmVwbGFjZSgvXFwrL2csICdwbHVzJykucmVwbGFjZSgnTWljcm9zb2Z0JywgJ21lc3NlbmdlcicpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb0xhbmcgPSBfcGlbcGx1Z2luTmFtZV0uZ2V0TGFuZyhjLmxhbmcpO1xyXG4gICAgICAgICAgICAgICAgX3BpW3BsdWdpbk5hbWVdLmJvb2ttYXJrU2l0ZXNIYXNoID0ge307XHJcbiAgICAgICAgICAgICAgICBfcGlbcGx1Z2luTmFtZV0uYm9va21hcmtTaXRlc0FycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyTmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBBZGRfQk1TaXRlKGFyTmFtZXNbaV0sIC0xLCBhckRpc3BsYXlOYW1lc1tpXSwgbnVsbCwgbnVsbCwgb0xhbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFyRGlzcGxheU5hbWVzID0gZXhwbGljaXRCb29rbWFya3Muc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIGFyTmFtZXMgPSBleHBsaWNpdEJvb2ttYXJrcy5yZXBsYWNlKC8gL2csICcnKS5yZXBsYWNlKC8hL2csICcnKS5yZXBsYWNlKC9cXC4vZywgJycpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJOYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIEFkZF9FeHRyYV9CTVNpdGUoYXJOYW1lc1tpXSwgLTEsIGFyRGlzcGxheU5hbWVzW2ldLCBvTGFuZywgKGV4cGxpY2l0Qm9va21hcmtzV2l0aEljb25zLmluZGV4T2YoYXJEaXNwbGF5TmFtZXNbaV0pICE9IC0xKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dVSShjLCBwLCBpbnRlcm5hbHMsIGlzRXZlbnQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93VUk6IGZ1bmN0aW9uIChjLCBwLCBpbnRlcm5hbHMsIGlzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBHUyA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZTtcclxuICAgICAgICAgICAgICAgIHZhciByaWQgPSBpbnRlcm5hbHNbJ3JpZCddO1xyXG4gICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXNvbHZlciA9IG5ldyBnaWd5YS5nbG9iYWwucmVzb2x2ZXIoZ2lneWEuZ2xvYmFsLnJlc29sdmVyLmRlZmF1bHRQcm9jY2Vzc29yKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVyLmFkZENvbmZpZygnPGNvbmZpZz48Ym9keSBmb250PVwiYXJpYWxcIj48Y2FwdGlvbnMgYm9sZD1cInRydWVcIiBzaXplPVwiMTNcIiBjb2xvcj1cIiNmZmZmZmZcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiIzQ2OTJERVwiIGZyYW1lLXRoaWNrbmVzcz1cIjBcIiAvPjxjb250cm9scyBzaXplPVwiMTFcIj48c25idXR0b25zIHR5cGU9XCJcIiBidXR0b25zaXplPVwiMzBcIiBjb2xvcj1cIiM5YjliOWJcIiAvPjwvY29udHJvbHM+PGJhY2tncm91bmQgYmFja2dyb3VuZC1jb2xvcj1cInRyYW5zcGFyZW50XCIgLz48dGV4dHMgc2l6ZT1cIjExXCI+PGxpbmtzIGNvbG9yPVwiIzAwODZmMVwiIC8+PC90ZXh0cz48L2JvZHk+PC9jb25maWc+Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxzWydpc1BvcHVwJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlci5hZGRDb25maWcoJzxjb25maWc+PGJvZHk+PGJhY2tncm91bmQgZnJhbWUtdGhpY2tuZXNzPVwiNVwiIGZyYW1lLWNvbG9yPVwiIzk5OTk5OVwiIGJhY2tncm91bmQtY29sb3I9XCIjRjZGNkY2XCIgLz48Y29udHJvbHMgc2l6ZT1cIjExXCI+PHNuYnV0dG9ucyB0eXBlPVwidGV4dFVuZGVyXCIgYnV0dG9uc2l6ZT1cIjM1XCIgY29sb3I9XCIjOWI5YjliXCIgLz48L2NvbnRyb2xzPjwvYm9keT48L2NvbmZpZz4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmVyLmFkZENvbmZpZyhjWydVSUNvbmZpZyddKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVyLmFkZENvbmZpZyhwWydVSUNvbmZpZyddKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVySUQgPSBwWydjb250YWluZXJJRCddO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBidXR0b25zU3R5bGUgPSBwWydidXR0b25zU3R5bGUnXTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYnV0dG9uc1N0eWxlID09ICd1bmRlZmluZWQnKSBidXR0b25zU3R5bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsZSA9ICcnOyAvLyBubyBvdGhlciBidXR0b24gc3R5bGVzIGZvciBib29rbWFya3NcclxuICAgICAgICAgICAgICAgIC8vaWYgKGludGVybmFscy5pc0Nvbm5lY3QpIGJ1dHRvblN0eWxlPScnO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9TdHlsZSA9IHRoaXMuZ2V0U3R5bGUoYnV0dG9uc1N0eWxlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2UgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS8nICsgcGx1Z2luTmFtZSArICcvJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVCYXNlID0gYmFzZTtcclxuICAgICAgICAgICAgICAgIGlmIChvU3R5bGUuYmFzZSkgc3R5bGVCYXNlICs9IG9TdHlsZS5iYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlc1tjb250YWluZXJJRF0gPSB7IGM6IGMsIHA6IHAsIGk6IGludGVybmFscywgcGFnZTogMCB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIGFySFRNTCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qdmFyIHJlcXVpcmVkQ2FwYWJpbGl0aWVzPXBbJ3JlcXVpcmVkQ2FwYWJpbGl0aWVzJ107XHJcblx0XHRcdFx0aWYgKCFyZXF1aXJlZENhcGFiaWxpdGllcykgcmVxdWlyZWRDYXBhYmlsaXRpZXM9J2xvZ2luJztcclxuXHRcdFx0XHRyZXF1aXJlZENhcGFiaWxpdGllcz1yZXF1aXJlZENhcGFiaWxpdGllcy5zcGxpdCgnLCcpO1xyXG5cdFx0XHRcdCovXHJcbiAgICAgICAgICAgICAgICB2YXIgYXJCb29rbWFya3NUb1Nob3c7IC8vPXRoaXMuYm9va21hcmtTaXRlc0FycmF5O1xyXG4gICAgICAgICAgICAgICAgYXJCb29rbWFya3NUb1Nob3cgPSBHUy5nZXRQcm92aWRlcnNCeU5hbWUocFsnZW5hYmxlZEJvb2ttYXJrcyddID8gcFsnZW5hYmxlZEJvb2ttYXJrcyddIDogKGNbJ2VuYWJsZWRCb29rbWFya3MnXSA/IGNbJ2VuYWJsZWRCb29rbWFya3MnXSA6ICcqJyksIHRoaXMuYm9va21hcmtTaXRlc0FycmF5KTtcclxuICAgICAgICAgICAgICAgIGFyQm9va21hcmtzVG9TaG93ID0gR1MuaGlkZVByb3ZpZGVyc0J5TmFtZShhckJvb2ttYXJrc1RvU2hvdywgcFsnZGlzYWJsZWRCb29rbWFya3MnXSA/IHBbJ2Rpc2FibGVkQm9va21hcmtzJ10gOiAoY1snZGlzYWJsZWRCb29rbWFya3MnXSA/IGNbJ2Rpc2FibGVkQm9va21hcmtzJ10gOiAnJyksIHRoaXMuYm9va21hcmtTaXRlc0FycmF5KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFycm93VyA9IDc7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyb3dIID0gMTI7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9TbkJ1dHRvbnNTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvY29udHJvbHMvc25idXR0b25zJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dFVuZGVyID0gKG9TbkJ1dHRvbnNTdHlsZVsndHlwZSddID09ICd0ZXh0VW5kZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9uc2l6ZSA9IDMwOyAvL3BhcnNlSW50KG9TbkJ1dHRvbnNTdHlsZVsnYnV0dG9uc2l6ZSddKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWNvblNpemUgPSBidXR0b25zaXplO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvQmdTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbHNbJ2lzUG9wdXAnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9CZ1N0eWxlWydmcmFtZS10aGlja25lc3MnXSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgb0xpbmtTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvdGV4dHMvbGlua3MnKTtcclxuICAgICAgICAgICAgICAgIHZhciBvVGV4dFN0eWxlID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS90ZXh0cycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dFN0eWxlID0gR1MuZ2V0U3R5bGVTdHJpbmcob1RleHRTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua1N0eWxlID0gR1MuZ2V0U3R5bGVTdHJpbmcob0xpbmtTdHlsZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmdTdHlsZSA9IEdTLmdldFN0eWxlU3RyaW5nKG9CZ1N0eWxlKTtcclxuICAgICAgICAgICAgICAgIHZhciBzbkJ1dHRvbnNTdHlsZSA9IEdTLmdldFN0eWxlU3RyaW5nKG9TbkJ1dHRvbnNTdHlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pZiAodHlwZW9mIGljb25TaXplPT0ndW5kZWZpbmVkJyB8fCBpc05hTihpY29uU2l6ZSkpIGljb25TaXplPTMwO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdmFyIGltZ0ljb25TaXplPU1hdGguZmxvb3IoaWNvblNpemUvNSkqNVxyXG4gICAgICAgICAgICAgICAgLy9pZiAoaW1nSWNvblNpemU8MTUpIGltZ0ljb25TaXplPTE1O1xyXG4gICAgICAgICAgICAgICAgLy9pZiAoaW1nSWNvblNpemU+NDApIGltZ0ljb25TaXplPTQwO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZ0ljb25TaXplID0gMTg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbGluZ0xlZnRQYXRoID0gYmFzZSArICdzY3JvbGxpbmdhcnJvd19sZWZ0LmdpZic7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsaW5nTGVmdERpc2FibGVQYXRoID0gYmFzZSArICdzY3JvbGxpbmdhcnJvd19kaXNhYmxlX2xlZnQuZ2lmJztcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxpbmdSaWdodFBhdGggPSBiYXNlICsgJ3Njcm9sbGluZ2Fycm93X3JpZ2h0LmdpZic7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsaW5nUmlnaHREaXNhYmxlUGF0aCA9IGJhc2UgKyAnc2Nyb2xsaW5nYXJyb3dfZGlzYWJsZV9yaWdodC5naWYnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpY29uU2l6ZSA+IDI1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nTGVmdFBhdGggPSBiYXNlICsgJ3Njcm9sbGluZ2Fycm93bF9sZWZ0LmdpZic7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nTGVmdERpc2FibGVQYXRoID0gYmFzZSArICdzY3JvbGxpbmdhcnJvd2xfZGlzYWJsZV9sZWZ0LmdpZic7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nUmlnaHRQYXRoID0gYmFzZSArICdzY3JvbGxpbmdhcnJvd2xfcmlnaHQuZ2lmJztcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmdSaWdodERpc2FibGVQYXRoID0gYmFzZSArICdzY3JvbGxpbmdhcnJvd2xfZGlzYWJsZV9yaWdodC5naWYnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycm93VyA9IDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtYXhSb3dzID0gMTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXhMaW5lcyA9IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgdyA9IHBbJ3dpZHRoJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHBbJ2hlaWdodCddO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBoaW50VyA9IDE3NTtcclxuICAgICAgICAgICAgICAgIHZhciBoaW50SCA9IDU1O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzaG93SGludCA9IChwWydzaG93V2hhdHNUaGlzJ10gJiYgdyA+IGhpbnRXICYmIGggLSAyOCA+IGhpbnRIKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2hvd0dpZ3lhQnJhbmRpbmcgPSAoIXRoaXMuaXNUcnVlKHBbJ2hpZGVHaWd5YSddLCBmYWxzZSkgJiYgIXRoaXMuaXNUcnVlKHBbJ2hpZGVHaWd5YUxpbmsnXSwgZmFsc2UpKTtcclxuICAgICAgICAgICAgICAgIHZhciBzaG93V2hhdHNUaGlzID0gKCFzaG93R2lneWFCcmFuZGluZyAmJiBzaG93SGludCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNob3dUZXJtcyA9IGZhbHNlOyAvL3RoaXMuaXNUcnVlKHBbJ3Nob3dUZXJtc0xpbmsnXSx0cnVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gYXJCb29rbWFya3NUb1Nob3cubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYnV0dG9uIHNpemUgKGltYWdlIG9ubHkpXHJcbiAgICAgICAgICAgICAgICB2YXIgYnRuSW1nVyA9IGljb25TaXplOyAvLyAqb1N0eWxlLnJhdGlvO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bkltZ0ggPSBpY29uU2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYXJTcHJpdGVCb29rbWFycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhckJvb2ttYXJrc1RvU2hvdy5sZW5ndGg7IGkrKykgeyAvL3JlbW92ZSB0aG9zZSB3aXRoIGN1c3RvbSBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhckJvb2ttYXJrc1RvU2hvd1tpXS5pY29uTmFtZSkgYXJTcHJpdGVCb29rbWFycy5wdXNoKGFyQm9va21hcmtzVG9TaG93W2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFyU3ByaXRlQm9va21hcnMuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwcml0ZVJlbmRlcmVyID0gZ2lneWEuZ2xvYmFsLmdldFNwcml0ZVJlbmRlcmVycyh7IGJvb2ttYXJrSWNvbnM6IHsgcGF0aDogJy9Cb29rbWFyay9bJyArIGFyU3ByaXRlQm9va21hcnMuam9pbignLCcpICsgJ10ucG5nJywgdzogaW1nSWNvblNpemUsIGg6IGltZ0ljb25TaXplIH0gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9mdWxsIGJ1dHRvbiBzaXplIChpbmNsdWRpbmcgaW1hZ2UgYW5kIHRleHQpXHJcbiAgICAgICAgICAgICAgICB2YXIgYnRuVyA9IGJ0bkltZ1c7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnRuSCA9IGJ0bkltZ0g7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9idXR0b25zIHNwYWNpbmdcclxuICAgICAgICAgICAgICAgIHZhciBiaHMgPSA1O1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ2cyA9IDEwO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vb3V0ZXIgbWFyZ2luc1xyXG4gICAgICAgICAgICAgICAgdmFyIGhtID0gMDsgIC8vYXJyb3dzIHdpZHRoXHJcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSAwOyAvL2JvdHRvbSBsaW5rIGhlaWdodFxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvdXRlckZyYW1lVGhpY2tuZXNzID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS9iYWNrZ3JvdW5kJylbJ2ZyYW1lLXRoaWNrbmVzcyddO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvdXRlckZyYW1lVGhpY2tuZXNzID09ICd1bmRlZmluZWQnKSBvdXRlckZyYW1lVGhpY2tuZXNzID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBobSArPSBvdXRlckZyYW1lVGhpY2tuZXNzICogMlxyXG4gICAgICAgICAgICAgICAgdm0gKz0gb3V0ZXJGcmFtZVRoaWNrbmVzcyAqIDJcclxuXHJcbiAgICAgICAgICAgICAgICAvKmlmIChpbnRlcm5hbHNbJ2lzUG9wdXAnXSkge1xyXG5cdFx0XHRcdHZtKz0xMDtcclxuXHRcdFx0XHR9Ki9cclxuICAgICAgICAgICAgICAgIHZhciBsaW5rSGVpZ2h0ID0gdGhpcy5nZXRTaW5nbGVMaW5lSGVpZ2h0KG9MaW5rU3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dHaWd5YUJyYW5kaW5nIHx8IHNob3dXaGF0c1RoaXMgfHwgc2hvd1Rlcm1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0gKz0gbGlua0hlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0VW5kZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG5IICs9IHRoaXMuZ2V0U2luZ2xlTGluZUhlaWdodChvU25CdXR0b25zU3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJCb29rbWFya3NUb1Nob3cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuVyA9IE1hdGgubWF4KGJ0blcsIGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dChhckJvb2ttYXJrc1RvU2hvd1tpXS5kaXNwbGF5TmFtZSwgb1NuQnV0dG9uc1N0eWxlKS53ICsgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtYXhCdXR0b25zSW5Sb3cgPSBNYXRoLmZsb29yKCh3IC0gaG0gKyBiaHMpIC8gKGJocyArIGJ0blcpKVxyXG4gICAgICAgICAgICAgICAgdmFyIG1heEJ1dHRvbnNJbkNvbCA9IE1hdGguZmxvb3IoKGggLSB2bSArIGJ2cykgLyAoYnZzICsgYnRuSCkpXHJcbiAgICAgICAgICAgICAgICBpZiAobWF4QnV0dG9uc0luQ29sICogbWF4QnV0dG9uc0luUm93IDwgYikgeyAvLyBwYWdpbmcgaXMgbmVlZGVkLCBhZGQgYXJyb3dXaWR0aCB0byBoIG1hcmdpbiBhbmQgcmVjYWxjdWxhdGUgYnV0dG9ucyBpbiBhIHJvdy5cclxuICAgICAgICAgICAgICAgICAgICBobSArPSAoYXJyb3dXICsgYmhzKSAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QnV0dG9uc0luUm93ID0gTWF0aC5mbG9vcigodyAtIGhtICsgYmhzKSAvIChiaHMgKyBidG5XKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0b3RhbGIgPSBiO1xyXG4gICAgICAgICAgICAgICAgYiA9IGIgJSAobWF4QnV0dG9uc0luUm93ICogbWF4QnV0dG9uc0luQ29sKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpbWFsTGFzdFJvd0J1dHRvbnMgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGltYWxSb3dCdXR0b25zID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gbWF4QnV0dG9uc0luUm93OyByICogbWF4QnV0dG9uc0luQ29sID49IGI7IHItLSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdFJvd0J1dHRvbnMgPSBiIC0gKHIgKiBNYXRoLmZsb29yKGIgLyByKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RSb3dCdXR0b25zID09IDApIGxhc3RSb3dCdXR0b25zID0gcjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdFJvd0J1dHRvbnMgPiBvcHRpbWFsTGFzdFJvd0J1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW1hbExhc3RSb3dCdXR0b25zID0gbGFzdFJvd0J1dHRvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltYWxSb3dCdXR0b25zID0gcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlQcm92aWRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF4QnV0dG9uc0luQ29sICogbWF4QnV0dG9uc0luUm93ID09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IE1hdGguY2VpbCh0b3RhbGIgLyAobWF4QnV0dG9uc0luQ29sICogbWF4QnV0dG9uc0luUm93KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFnZXMgPT0gMSkgbWF4QnV0dG9uc0luUm93ID0gb3B0aW1hbFJvd0J1dHRvbnM7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFnZVdpZHRoID0gbWF4QnV0dG9uc0luUm93ICogKGJ0blcgKyBiaHMpIC0gYmhzO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwbHVnaW5GUU4gPSAnZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuJyArIHBsdWdpbk5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pZiAodHlwZW9mIHByb3ZpZGVycyA9PSAndW5kZWZpbmVkJykgcHJvdmlkZXJzPWNbJ2VuYWJsZWRQcm92aWRlcnMnXTtcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgdmFsaWduPVwibWlkZGxlXCIgc3R5bGU9XCInICsgYmdTdHlsZSArICdtYXJnaW46MHB4O3BhZGRpbmc6MHB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB3aWR0aDogJyArIHcgKyAncHg7IGhlaWdodDogJyArIGggKyAncHg7XCI+PHRyPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZTsgcGFkZGluZzowcHg7IG1hcmdpbjowcHg7XCI+PGNlbnRlcj48dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIHdpZHRoPVwiMTAwJVwiIHN0eWxlPVwibWFyZ2luOjBweDtwYWRkaW5nOjBweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7IGhlaWdodDogJyArIGggKyAncHg7XCIgYWxpZ249XCJjZW50ZXJcIiB2YWxpZ249XCJtaWRkbGVcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj48dHI+JztcclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZCB3aWR0aD1cIjQ4JVwiIGFsaWduPVwicmlnaHRcIiBzdHlsZT1cInBhZGRpbmc6MHB4O21hcmdpbjowcHg7dmVydGljYWwtYWxpZ246bWlkZGxlXCI+JztcclxuICAgICAgICAgICAgICAgIGlmIChwYWdlcyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8ZGl2IGFsaWduPVwibGVmdFwiIHN0eWxlPVwid2lkdGg6JyArIChhcnJvd1cgKyBiaHMpICsgJ3B4OyB0ZXh0LWFsaWduOiBsZWZ0XCI+PGRpdiBzdHlsZT1cIndpZHRoOiAnICsgKGFycm93VykgKyAncHhcIj48aW1nIGFsdD1cIlwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIiBvbmNsaWNrPVwiJyArIHBsdWdpbkZRTiArICcucHJldlBhZ2UoXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJylcIiBvbmtleWRvd249XCJpZigoZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSkgPT0gMTMpICcgKyBwbHVnaW5GUU4gKyAnLnByZXZQYWdlKFxcJycgKyBjb250YWluZXJJRCArICdcXCcpXCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtkaXNwbGF5Om5vbmVcIiBpZD1cIicgKyBjb250YWluZXJJRCArICdfYXJyb3dfbGVmdFwiIHNyYz1cIicgKyBzY3JvbGxpbmdMZWZ0UGF0aCArICdcIiAvPjxpbWcgYWx0PVwiXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIiBpZD1cIicgKyBjb250YWluZXJJRCArICdfYXJyb3dfbGVmdF9kaXNhYmxlXCIgc3JjPVwiJyArIHNjcm9sbGluZ0xlZnREaXNhYmxlUGF0aCArICdcIiAvPjwvZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L3RkPjx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPVwid2lkdGg6JyArIHBhZ2VXaWR0aCArICdweDtwYWRkaW5nOjBweDttYXJnaW46MHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZVwiIGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19wYWdlXCI+JztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaVBhZ2UgPSAwOyBpUGFnZSA8IHBhZ2VzOyBpUGFnZSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhbGlnbj1cImNlbnRlclwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwibWFyZ2luOjBweDtwYWRkaW5nOjBweDtkaXNwbGF5Om5vbmVcIiBpZD1cIicgKyBjb250YWluZXJJRCArICdfcCcgKyBpUGFnZSArICdcIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGlDb2wgPSAwOyBpQ29sIDwgbWF4QnV0dG9uc0luQ29sOyBpQ29sKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsaWduID0gJ2xlZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFnZXMgPT0gMSAmJiBpUHJvdmlkZXIgKyBtYXhCdXR0b25zSW5Sb3cgPiBhckJvb2ttYXJrc1RvU2hvdy5sZW5ndGgpIGFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT1cInBhZGRpbmc6MHB4O3BhZGRpbmc6MHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPjx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgYWxpZ249XCInICsgYWxpZ24gKyAnXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgc3R5bGU9XCJtYXJnaW46MHB4O3BhZGRpbmc6MHB4XCI+PHRyPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGlSb3cgPSAwOyBpUm93IDwgbWF4QnV0dG9uc0luUm93OyBpUm93KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGFyQm9va21hcmtzVG9TaG93W2lQcm92aWRlcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ1J1bGVzID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaVJvdyA8IG1heEJ1dHRvbnNJblJvdyAtIDEpIHBhZGRpbmdSdWxlcyArPSAncGFkZGluZy1yaWdodDonICsgYmhzICsgJ3B4Oyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaUNvbCA8IG1heEJ1dHRvbnNJbkNvbCAtIDEpIHBhZGRpbmdSdWxlcyArPSAncGFkZGluZy1ib3R0b206JyArIGJ2cyArICdweDsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nSWQgPSBwcm92aWRlci5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm92aWRlci5pY29uTmFtZSAhPSBudWxsKSBpbWdJZCA9IHByb3ZpZGVyLmljb25OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWdIVE1MID0gc3ByaXRlUmVuZGVyZXIuYm9va21hcmtJY29ucy5nZXRIVE1MKGltZ0lkLCB0cnVlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcHJvdmlkZXIuZGlzcGxheU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICsgYmFzZSArICdXRl9CdXR0b24ucG5nXFwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7bWFyZ2luOjBweDtwYWRkaW5nOjBweDsnICsgcGFkZGluZ1J1bGVzICsgJ3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcFwiPjxjZW50ZXI+PGRpdiBvbmNsaWNrPVwiJyArIHBsdWdpbkZRTiArICcucHJvdmlkZXJDbGljayhcXCcnICsgY29udGFpbmVySUQgKyAnXFwnLFxcJycgKyBwcm92aWRlci5uYW1lICsgJ1xcJylcIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO2N1cnNvcjpwb2ludGVyOyB3aWR0aDonICsgYnRuVyArICdweDtcIj48dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIGFsaWduPVwiY2VudGVyXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgc3R5bGU9XCJtYXJnaW46MCBhdXRvO3RleHQtYWxpZ246Y2VudGVyXCI+PHRyPjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDonICsgYnRuSW1nVyArICdweDsgaGVpZ2h0OicgKyBidG5JbWdIICsgJ3B4XCI+JyArIGltZ0hUTUwgKyAnPC90ZD48L3RyPjwvdGFibGU+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRVbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjBweDtwYWRkaW5nLXRvcDoycHg7JyArIHNuQnV0dG9uc1N0eWxlICsgJ1wiPicgKyBwcm92aWRlci5kaXNwbGF5TmFtZSArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L2Rpdj48L2NlbnRlcj48L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVByb3ZpZGVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhZ2VzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZCBzdHlsZT1cIicgKyBwYWRkaW5nUnVsZXMgKyAndmVydGljYWwtYWxpZ246dG9wO1wiPjxkaXYgc3R5bGU9XCJ3aWR0aDonICsgYnRuVyArICdweDtoZWlnaHQ6JyArIGJ0bkggKyAncHhcIj4mIzE2MDs8L2Rpdj48L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90cj48L3RhYmxlPjwvdGQ+PC90cj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90YWJsZT4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90ZD48dGQgd2lkdGg9XCI0OCVcIiBzdHlsZT1cInBhZGRpbmc6MHB4O21hcmdpbjowcHg7dmVydGljYWwtYWxpZ246bWlkZGxlXCI+JztcclxuICAgICAgICAgICAgICAgIGlmIChwYWdlcyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8ZGl2IHN0eWxlPVwicGFkZGluZzowcHg7bWFyZ2luOjBweDt0ZXh0LWFsaWduOnJpZ2h0OyB3aWR0aDonICsgKGFycm93VyArIGJocykgKyAncHhcIj48aW1nIGFsdD1cIlwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBvbmNsaWNrPVwiJyArIHBsdWdpbkZRTiArICcubmV4dFBhZ2UoXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJylcIiBvbmtleWRvd249XCJpZigoZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSkgPT0gMTMpICcgKyBwbHVnaW5GUU4gKyAnLm5leHRQYWdlKFxcJycgKyBjb250YWluZXJJRCArICdcXCcpXCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtkaXNwbGF5Om5vbmVcIiBpZD1cIicgKyBjb250YWluZXJJRCArICdfYXJyb3dfcmlnaHRcIiBzcmM9XCInICsgc2Nyb2xsaW5nUmlnaHRQYXRoICsgJ1wiIC8+PGltZyBhbHQ9XCJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiIGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19hcnJvd19yaWdodF9kaXNhYmxlXCIgc3JjPVwiJyArIHNjcm9sbGluZ1JpZ2h0RGlzYWJsZVBhdGggKyAnXCIgLz48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvdGQ+PC90cj4nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsZWZ0Qm90dG9tTGlua0hUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChzaG93VGVybXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0Qm90dG9tTGlua0hUTUwgPSAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmdpZ3lhLmNvbS9wcml2YWN5LXBvbGljeS9cIiBzdHlsZT1cIicgKyBsaW5rU3R5bGUgKyAnO3BhZGRpbmctcmlnaHQ6NXB4O3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToxMHB4XCI+VGVybXM8L2E+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRCb3R0b21MaW5rSFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dHaWd5YUJyYW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRCb3R0b21MaW5rSFRNTCArPSAnPHNwYW4gb25jbGljaz1cIndpbmRvdy5vcGVuKFxcJ2h0dHA6Ly93d3cuZ2lneWEuY29tXFwnKVwiIHN0eWxlPVwiY29sb3I6IzgyODI4MjsgZm9udC1zaXplOjExcHg7Y3Vyc29yOnBvaW50ZXJcIiBvbk1vdXNlT3V0PVwiJyArIHBsdWdpbkZRTiArICcuaGlkZVdoYXRzVGhpcyhcXCcnICsgY29udGFpbmVySUQgKyAnXFwnKVwiIG9uTW91c2VPdmVyPVwiJyArIHBsdWdpbkZRTiArICcuc2hvd1doYXRzVGhpcyhcXCcnICsgY29udGFpbmVySUQgKyAnXFwnKVwiPnBvd2VyZWQgYnkgPHNwYW4gc3R5bGU9XCJjb2xvcjojMDE1NTlmXCI+R2lneWE8L3NwYW4+PC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNob3dXaGF0c1RoaXMgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJpcGhvbmVcIikgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodEJvdHRvbUxpbmtIVE1MICs9ICc8c3BhbiBzdHlsZT1cIicgKyBsaW5rU3R5bGUgKyAnXCIgb25Nb3VzZU91dD1cIicgKyBwbHVnaW5GUU4gKyAnLmhpZGVXaGF0c1RoaXMoXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJylcIiBvbk1vdXNlT3Zlcj1cIicgKyBwbHVnaW5GUU4gKyAnLnNob3dXaGF0c1RoaXMoXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJylcIj53aGF0XFwncyB0aGlzPzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua3NXaWR0aCA9IGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dChsZWZ0Qm90dG9tTGlua0hUTUwpLncgKyBnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQubWVhc3VyZVRleHQocmlnaHRCb3R0b21MaW5rSFRNTCkudztcclxuICAgICAgICAgICAgICAgIGlmIChsaW5rc1dpZHRoID4gdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0Qm90dG9tTGlua0hUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBsaW5rc1dpZHRoID0gZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KGxlZnRCb3R0b21MaW5rSFRNTCkudztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgoc2hvd1Rlcm1zIHx8IHNob3dHaWd5YUJyYW5kaW5nIHx8IHNob3dXaGF0c1RoaXMpICYmIGxpbmtzV2lkdGggPCB3ICYmIG9MaW5rU3R5bGUuY29sb3IudG9Mb3dlckNhc2UoKSAhPSAndHJhbnNwYXJlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtzV2lkdGggPCBwYWdlV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRyIGhlaWdodD1cIicgKyBsaW5rSGVpZ2h0ICsgJ1wiPjx0ZD48L3RkPjx0ZCB2YWxpZ249XCJib3R0b21cIiBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjpib3R0b21cIj48ZGl2IGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19ib3R0b21MaW5rXCI+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiB3aWR0aD1cIjEwMCVcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cIm1hcmdpbjowcHg7cGFkZGluZzowcHg7XCI+PHRyPjx0ZCBhbGlnbj1cImxlZnRcIj4nICsgbGVmdEJvdHRvbUxpbmtIVE1MICsgJzwvdGQ+PHRkIGFsaWduPVwicmlnaHRcIj4nICsgcmlnaHRCb3R0b21MaW5rSFRNTCArICc8L3RkPjwvdHI+PC90YWJsZT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L2Rpdj48L3RkPjx0ZD48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHIgaGVpZ2h0PVwiJyArIGxpbmtIZWlnaHQgKyAnXCI+PHRkIGNvbHNwYW49XCIzXCIgdmFsaWduPVwiYm90dG9tXCIgYWxpZ249XCJyaWdodFwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246Ym90dG9tXCI+PGNlbnRlcj48ZGl2IGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19ib3R0b21MaW5rXCI+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiB3aWR0aD1cIjEwMCVcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cIm1hcmdpbjowcHg7cGFkZGluZzowcHg7XCI+PHRyPjx0ZCBhbGlnbj1cImxlZnRcIj4nICsgbGVmdEJvdHRvbUxpbmtIVE1MICsgJzwvdGQ+PHRkIGFsaWduPVwicmlnaHRcIj4nICsgcmlnaHRCb3R0b21MaW5rSFRNTCArICc8L3RkPjwvdHI+PC90YWJsZT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L2Rpdj48L2NlbnRlcj48L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L3RhYmxlPjwvY2VudGVyPjwvdGQ+PC90cj48L3RhYmxlPic7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd0hpbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2hhdHNUaGlzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySUQgKyAnX3doYXRzVGhpcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghd2hhdHNUaGlzRGl2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoYXRzVGhpc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGF0c1RoaXNEaXYuaWQgPSBjb250YWluZXJJRCArICdfd2hhdHNUaGlzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hhdHNUaGlzRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hhdHNUaGlzRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hhdHNUaGlzRGl2LnN0eWxlLnpJbmRleCA9ICc5OTk5OTk5JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3aGF0c1RoaXNEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2hhdHNUaGlzVGV4dCA9IHBbJ3doYXRzVGhpc1RleHQnXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXdoYXRzVGhpc1RleHQpIHdoYXRzVGhpc1RleHQgPSAnWW91IGNhbiB1c2UgeW91ciBhY2NvdW50IGZyb20gb25lIG9mIHRoZSBsaXN0ZWQgc2l0ZXMgdG8gcmVnaXN0ZXIgYW5kIGVuam95IGZ1bGwgYWNjZXNzIHRvIHRoaXMgc2l0ZS4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoYXRzVGhpc0Rpdi5pbm5lckhUTUwgPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT1cInBhZGRpbmc6IDVweDsgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO2JvcmRlcjogMXB4IHNvbGlkICM3Njc2NzY7XCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgd2lkdGg9XCInICsgaGludFcgKyAnXCIgaGVpZ2h0PVwiJyArIGhpbnRIICsgJ1wiID48dHI+PHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlOyB0ZXh0LWFsaWduOmNlbnRlclwiPjxzcGFuIGFsaWduPVwibGVmdFwiIHN0eWxlPVwiJyArIHRleHRTdHlsZSArICc7d2lkdGg6ICcgKyAoaGludFcgLSA4KSArICdweDsgY29sb3I6IzI2MjYyNjsgXCI+JyArIHdoYXRzVGhpc1RleHQgKyAnPC9zcGFuPjwvdGQ+PC90cj48L3RhYmxlPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklEKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBhckhUTUwuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnJyArIHcgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcnICsgaCArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0V2ZW50KSBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoeyBldmVudE5hbWU6ICdsb2FkJywgY29udGFpbmVySUQ6IHBbJ2NvbnRhaW5lcklEJ10gfSwgcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzW2NvbnRhaW5lcklEXS5wYWdlcyA9IHBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdlKGNvbnRhaW5lcklEKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmV4dFBhZ2U6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzW2lkXS5wYWdlKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2UoaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmV2UGFnZTogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbaWRdLnBhZ2UtLTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZShpZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dXaGF0c1RoaXM6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnX3doYXRzVGhpcycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gZ2lneWEuZ2xvYmFsLl9HZXRFbGVtZW50UG9zKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUubGVmdCA9IHBvcy5sZWZ0ICsgKHBhcnNlSW50KGNvbnRhaW5lci5zdHlsZS53aWR0aCkgLSBlbC5vZmZzZXRXaWR0aCkgLyAyICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50b3AgPSBwb3MudG9wICsgKHBhcnNlSW50KGNvbnRhaW5lci5zdHlsZS5oZWlnaHQpIC0gZWwub2Zmc2V0SGVpZ2h0KSAvIDIgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGVXaGF0c1RoaXM6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnX3doYXRzVGhpcycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGRhdGVQYWdlOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW2lkXVxyXG4gICAgICAgICAgICAgICAgaWYgKG0ucGFnZURpdikgbS5wYWdlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBtLnBhZ2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICdfcCcgKyBtLnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgbS5wYWdlRGl2LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChtLnBhZ2VzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnX2Fycm93X3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnX2Fycm93X3JpZ2h0X2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgJ19hcnJvd19sZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnX2Fycm93X2xlZnRfZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtLnBhZ2UgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxkLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG0ucGFnZSA9PSBtLnBhZ2VzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJkLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBtLnBhZ2VEaXYucXVlcnlTZWxlY3RvcignYnV0dG9uJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBwcm92aWRlckNsaWNrOiBmdW5jdGlvbiAoaWQsIHByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kdWxlID0gdGhpcy5tb2R1bGVzW2lkXVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7IHByb3ZpZGVyOiBwcm92aWRlciwgcHJvdmlkZXJLZXk6IG1vZHVsZS5wW3Byb3ZpZGVyICsgJ0tleSddIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgdWEgPSBtb2R1bGUucFtwcm92aWRlciArICdVc2VyQWN0aW9uJ107XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVhKSB1YSA9IG1vZHVsZS5wLnVzZXJBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBpZiAodWEpIHBhcmFtcy51c2VyQWN0aW9uID0gdWE7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucG9zdEJvb2ttYXJrKG1vZHVsZS5jLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnYm9va21hcmtXaW5kb3dPcGVuZWQnLCBwcm92aWRlcjogcHJvdmlkZXIgfSwgbW9kdWxlLnApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gQWRkX0JNU2l0ZShuYW1lLCBzbmlkLCBkaXNwbGF5TmFtZSwgdywgaCwgb0xhbmcpIHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZWREaXNwbGF5TmFtZSA9IF9waVtwbHVnaW5OYW1lXS5URVhUKG9MYW5nLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZWREaXNwbGF5TmFtZSkgZGlzcGxheU5hbWUgPSB0cmFuc2xhdGVkRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIHZhciBibXMgPSB7IG5hbWU6IG5hbWUsIHNuaWQ6IHNuaWQsIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSwgdzogdywgaDogaCwgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMubmFtZSB9IH07XHJcbiAgICAgICAgICAgIF9waVtwbHVnaW5OYW1lXS5ib29rbWFya1NpdGVzQXJyYXkucHVzaChibXMpO1xyXG4gICAgICAgICAgICBfcGlbcGx1Z2luTmFtZV0uYm9va21hcmtTaXRlc0hhc2hbbmFtZV0gPSBibXM7XHJcbiAgICAgICAgICAgIHJldHVybiBibXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBBZGRfRXh0cmFfQk1TaXRlKG5hbWUsIHNuaWQsIGRpc3BsYXlOYW1lLCBvTGFuZywgaGFzSWNvbikgeyAvL0V4dHJhIEJNUyBhcmUgb25seSBkaXNwbGF5ZWQgd2hlbiBleHBsaWNpdGx5IGFza2VkIGZvciwgdGhleSB1c2UgYSBkZWZhdWx0IGljb24gYW5kIG9wZW4gYSBkZWZ1bHQgc2l6ZWQgd2luZG93LlxyXG4gICAgICAgICAgICB2YXIgYm1zID0gQWRkX0JNU2l0ZShuYW1lLCBzbmlkLCBkaXNwbGF5TmFtZSwgMCwgMCwgb0xhbmcpO1xyXG4gICAgICAgICAgICBibXMuZXhwbGljaXRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCFoYXNJY29uKSBibXMuaWNvbk5hbWUgPSAnZGVmYXVsdEJNU0ljb24nO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=